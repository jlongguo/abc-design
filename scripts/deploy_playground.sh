#!/usr/bin/env bash
# ABC Design Playground 预览站一键构建、零停机发布、状态巡检与秒级回滚脚本
# 默认目标：antgain-1:/www/wwwroot/abc.bytesflows.com (https://abc.bytesflows.com)
#
# 用法：
#   ./scripts/deploy_playground.sh                 # 全量构建 libs + playground 并发布上线 + 线上探针校验
#   ./scripts/deploy_playground.sh --skip-build    # 复用本地已有 apps/playground/dist 直接发布
#   ./scripts/deploy_playground.sh --dry-run       # 仅演练构建与 rsync 差异，不写入远端服务器
#   ./scripts/deploy_playground.sh --status        # 查看远端当前生效的 index.html 与资源哈希状态
#   ./scripts/deploy_playground.sh --rollback      # 秒级切回上一版备份的 index.html（历史哈希静态资源常驻保留）

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="${ROOT_DIR}/apps/playground/dist"
SSH_HOST="${SSH_HOST:-antgain-1}"
REMOTE_DIR="${REMOTE_DIR:-/www/wwwroot/abc.bytesflows.com}"
PUBLIC_URL="${PUBLIC_URL:-https://abc.bytesflows.com}"
WEB_USER="${WEB_USER:-www}"
WEB_GROUP="${WEB_GROUP:-www}"

SKIP_BUILD=false
DRY_RUN=false
ACTION="deploy"

usage() {
  cat <<'EOF'
Usage: ./scripts/deploy_playground.sh [options]

Options:
  --skip-build    Skip local `pnpm run build` and deploy existing apps/playground/dist
  --dry-run       Preview rsync file transfers without writing to remote server
  --status        Inspect live index.html and asset hashes on remote server
  --rollback      Restore previous index.html (.prev.index.html) on remote server
  -h, --help      Show this help message

Environment overrides:
  SSH_HOST        Target SSH host alias (default: antgain-1)
  REMOTE_DIR      Target Nginx static root (default: /www/wwwroot/abc.bytesflows.com)
  PUBLIC_URL      Public URL for post-deploy HTTP verification (default: https://abc.bytesflows.com)
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-build)
      SKIP_BUILD=true
      shift
      ;;
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --status)
      ACTION="status"
      shift
      ;;
    --rollback)
      ACTION="rollback"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "❌ 未知参数: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

verify_public_url() {
  local expected_asset="${1:-}"
  echo "==> [校验] 探测线上站点连通性: ${PUBLIC_URL}"
  local html
  html="$(curl -fsSL --max-time 15 "${PUBLIC_URL}/")"
  if [[ -n "${expected_asset}" ]] && ! grep -Fq "${expected_asset}" <<<"${html}"; then
    echo "❌ 线上首页未命中预期构建产物 (${expected_asset})，请检查 CDN 缓存或 Nginx 目录配置。" >&2
    exit 1
  fi

  local assets
  assets="$(grep -Eo '/assets/[^"'\'' >]+' <<<"${html}" | sort -u || true)"
  for asset_path in ${assets}; do
    local code
    code="$(curl -fsSL -o /dev/null -w '%{http_code}' --max-time 15 "${PUBLIC_URL}${asset_path}")"
    if [[ "${code}" != "200" ]]; then
      echo "❌ 静态资源探针异常: ${PUBLIC_URL}${asset_path} -> HTTP ${code}" >&2
      exit 1
    fi
    echo "   ✓ ${asset_path} -> HTTP ${code}"
  done
}

if [[ "${ACTION}" == "status" ]]; then
  echo "==> 查询远端站点状态 (${SSH_HOST}:${REMOTE_DIR})"
  ssh -o BatchMode=yes "${SSH_HOST}" "
    set -euo pipefail
    ls -lh '${REMOTE_DIR}/index.html' '${REMOTE_DIR}/.prev.index.html' 2>/dev/null || true
    echo '--- 当前生效资源引用 ---'
    grep -Eo '/assets/[^\"'\'' >]+' '${REMOTE_DIR}/index.html' || true
    echo '--- 远端最近 8 个静态产物 ---'
    ls -lt '${REMOTE_DIR}/assets' | head -n 9
  "
  verify_public_url ""
  exit 0
fi

if [[ "${ACTION}" == "rollback" ]]; then
  echo "==> 执行秒级回滚 (${SSH_HOST}:${REMOTE_DIR}/.prev.index.html -> index.html)"
  ssh -o BatchMode=yes "${SSH_HOST}" "
    set -euo pipefail
    if [[ ! -f '${REMOTE_DIR}/.prev.index.html' ]]; then
      echo '❌ 远端不存在可回滚的 .prev.index.html 备份文件' >&2
      exit 1
    fi
    cp -pf '${REMOTE_DIR}/.prev.index.html' '${REMOTE_DIR}/index.html'
    chown ${WEB_USER}:${WEB_GROUP} '${REMOTE_DIR}/index.html'
  "
  verify_public_url ""
  echo "✅ Playground 已回滚完成: ${PUBLIC_URL}"
  exit 0
fi

cd "${ROOT_DIR}"
GIT_SHA="$(git rev-parse --short HEAD 2>/dev/null || echo 'unknown')"

if [[ "${SKIP_BUILD}" == "false" ]]; then
  echo "==> [1/4] 构建 @abc-design 全量组件库与 Playground (commit: ${GIT_SHA})"
  pnpm run build
else
  echo "==> [1/4] 跳过重新构建 (--skip-build)，直接检查现有产物"
fi

if [[ ! -f "${DIST_DIR}/index.html" ]] || [[ ! -d "${DIST_DIR}/assets" ]]; then
  echo "❌ 构建产物缺失: 未找到 ${DIST_DIR}/index.html 或 ${DIST_DIR}/assets" >&2
  exit 1
fi

MAIN_JS="$(grep -Eo '/assets/index-[^"'\'' >]+\.js' "${DIST_DIR}/index.html" | head -n 1 || true)"
MAIN_CSS="$(grep -Eo '/assets/index-[^"'\'' >]+\.css' "${DIST_DIR}/index.html" | head -n 1 || true)"
echo "   产物指纹: JS=${MAIN_JS:-none}, CSS=${MAIN_CSS:-none}"

if [[ "${DRY_RUN}" == "true" ]]; then
  echo "==> [Dry-Run] 演练同步静态资源至 ${SSH_HOST}:${REMOTE_DIR}"
  rsync -avzn \
    --exclude '.user.ini' \
    --exclude '.well-known/' \
    --exclude '.prev.index.html' \
    "${DIST_DIR}/" "${SSH_HOST}:${REMOTE_DIR}/"
  exit 0
fi

echo "==> [2/4] 先增量上传带指纹的静态资源 (零停机双版本并存，不清理旧哈希文件以防在途会话 404)"
ssh -o BatchMode=yes "${SSH_HOST}" "mkdir -p '${REMOTE_DIR}/assets'"
rsync -az \
  --exclude 'index.html' \
  --exclude '.user.ini' \
  --exclude '.well-known/' \
  "${DIST_DIR}/" "${SSH_HOST}:${REMOTE_DIR}/"

echo "==> [3/4] 备份上一版入口并原子切换 index.html 及修正 ${WEB_USER}:${WEB_GROUP} 权限"
ssh -o BatchMode=yes "${SSH_HOST}" "
  set -euo pipefail
  if [[ -f '${REMOTE_DIR}/index.html' ]]; then
    cp -pf '${REMOTE_DIR}/index.html' '${REMOTE_DIR}/.prev.index.html'
  fi
"
rsync -az "${DIST_DIR}/index.html" "${SSH_HOST}:${REMOTE_DIR}/index.html"
ssh -o BatchMode=yes "${SSH_HOST}" "
  set -euo pipefail
  chown -R ${WEB_USER}:${WEB_GROUP} '${REMOTE_DIR}/assets' '${REMOTE_DIR}/index.html'
  if [[ -f '${REMOTE_DIR}/.prev.index.html' ]]; then
    chown ${WEB_USER}:${WEB_GROUP} '${REMOTE_DIR}/.prev.index.html'
  fi
  chmod -R u+rwX,go+rX '${REMOTE_DIR}/assets' '${REMOTE_DIR}/index.html'
"

echo "==> [4/4] 执行线上真实 HTTP 与哈希指纹一致性校验"
verify_public_url "${MAIN_JS}"

echo "✅ ABC Design Playground 部署成功 (commit ${GIT_SHA}) -> ${PUBLIC_URL}"
