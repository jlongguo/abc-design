import { describe, expect, it } from 'vitest'
import {
  computeLineDiff,
  computeObjectDiff,
  evaluateRuleGroup,
  findDuplicateKeys,
  formatRuleGroupSummary,
  getOperatorsForFieldType,
  parseKeyValueText,
  serializeKeyValueEntries,
  type AbcRuleFieldSchema,
  type AbcRuleGroup,
} from '@abc-design/core'

describe('@abc-design/core 阶段 3 联动算法内核测试', () => {
  describe('queryBuilder: 操作符映射、规则树求值与摘要格式化', () => {
    const fields: AbcRuleFieldSchema[] = [
      { name: 'service', label: '服务名', type: 'string' },
      { name: 'latency', label: '延迟', type: 'number' },
      {
        name: 'env',
        label: '环境',
        type: 'enum',
        options: [
          { label: '生产', value: 'prod' },
          { label: '预发', value: 'staging' },
          { label: '开发', value: 'dev' },
        ],
      },
      { name: 'active', label: '启用状态', type: 'boolean' },
      { name: 'createdAt', label: '创建时间', type: 'date' },
    ]

    it('getOperatorsForFieldType 为五种字段类型返回合法操作符与准确 arity', () => {
      const strOps = getOperatorsForFieldType('string')
      expect(strOps.map((o) => o.value)).toEqual([
        'contains',
        'not_contains',
        'eq',
        'neq',
        'starts_with',
        'ends_with',
        'is_empty',
        'is_not_empty',
      ])
      expect(strOps.find((o) => o.value === 'contains')?.arity).toBe(1)
      expect(strOps.find((o) => o.value === 'is_empty')?.arity).toBe(0)

      const numOps = getOperatorsForFieldType('number')
      expect(numOps.map((o) => o.value)).toContain('between')
      expect(numOps.find((o) => o.value === 'between')?.arity).toBe(2)
      expect(numOps.find((o) => o.value === 'gt')?.arity).toBe(1)

      const dateOps = getOperatorsForFieldType('date')
      expect(dateOps.find((o) => o.value === 'between')?.arity).toBe(2)
      expect(dateOps.find((o) => o.value === 'is_not_empty')?.arity).toBe(0)

      const enumOps = getOperatorsForFieldType('enum')
      expect(enumOps.map((o) => o.value)).toEqual(['in', 'not_in', 'eq', 'neq', 'is_empty', 'is_not_empty'])
      expect(enumOps.find((o) => o.value === 'in')?.arity).toBe(1)

      const boolOps = getOperatorsForFieldType('boolean')
      expect(boolOps.map((o) => o.value)).toEqual(['eq', 'neq'])
      expect(boolOps.every((o) => o.arity === 1)).toBe(true)
    })

    it('evaluateRuleGroup 正确处理嵌套 AND/OR/NOT、区间、枚举、文本、空值及 disabled 条件跳过', () => {
      const ruleTree: AbcRuleGroup = {
        id: 'root',
        type: 'group',
        combinator: 'AND',
        children: [
          { id: 'c1', type: 'condition', field: 'service', operator: 'starts_with', value: 'Edge-' },
          { id: 'c2', type: 'condition', field: 'latency', operator: 'between', value: 10, valueTo: 50 },
          { id: 'c3', type: 'condition', field: 'env', operator: 'in', value: ['prod', 'staging'] },
          { id: 'c4', type: 'condition', field: 'remark', operator: 'is_empty' },
          // 已禁用的失败条件应被跳过
          { id: 'c_disabled', type: 'condition', field: 'service', operator: 'eq', value: 'impossible', disabled: true },
          {
            id: 'sub_not',
            type: 'group',
            combinator: 'OR',
            not: true,
            children: [
              { id: 's1', type: 'condition', field: 'service', operator: 'contains', value: 'legacy' },
              { id: 's2', type: 'condition', field: 'env', operator: 'not_in', value: ['prod', 'staging', 'dev'] },
            ],
          },
          // 已禁用的嵌套组整体跳过
          {
            id: 'sub_disabled',
            type: 'group',
            combinator: 'AND',
            disabled: true,
            children: [{ id: 'sd1', type: 'condition', field: 'active', operator: 'eq', value: false }],
          },
        ],
      }

      // 闭区间边界 10 / 50 均命中，大小写不敏感前缀匹配，空串 remark 满足 is_empty
      expect(
        evaluateRuleGroup(
          { service: 'edge-gateway', latency: 10, env: 'prod', remark: '   ', active: true },
          ruleTree,
          fields
        )
      ).toBe(true)
      expect(
        evaluateRuleGroup(
          { service: 'edge-node', latency: 50, env: 'staging', remark: null, active: true },
          ruleTree,
          fields
        )
      ).toBe(true)

      // 超出闭区间或命中 NOT 子组中的 legacy 均返回 false
      expect(
        evaluateRuleGroup(
          { service: 'edge-node', latency: 51, env: 'prod', remark: '', active: true },
          ruleTree,
          fields
        )
      ).toBe(false)
      expect(
        evaluateRuleGroup(
          { service: 'edge-legacy-proxy', latency: 20, env: 'prod', remark: '', active: true },
          ruleTree,
          fields
        )
      ).toBe(false)

      // is_not_empty 与嵌套字段路径求值
      const nestedGroup: AbcRuleGroup = {
        id: 'g_nested',
        type: 'group',
        combinator: 'AND',
        children: [{ id: 'n1', type: 'condition', field: 'meta.owner', operator: 'is_not_empty' }],
      }
      expect(evaluateRuleGroup({ meta: { owner: 'ops' } }, nestedGroup)).toBe(true)
      expect(evaluateRuleGroup({ meta: { owner: '' } }, nestedGroup)).toBe(false)
    })

    it('formatRuleGroupSummary 生成可读逻辑表达式并跳过禁用条件', () => {
      const group: AbcRuleGroup = {
        id: 'g1',
        type: 'group',
        combinator: 'AND',
        children: [
          { id: 'c1', type: 'condition', field: 'latency', operator: 'between', value: 20, valueTo: 100 },
          { id: 'c2', type: 'condition', field: 'env', operator: 'in', value: ['prod', 'staging'] },
          { id: 'c3', type: 'condition', field: 'service', operator: 'is_empty', disabled: true },
          {
            id: 'g2',
            type: 'group',
            combinator: 'OR',
            not: true,
            children: [{ id: 'c4', type: 'condition', field: 'service', operator: 'is_empty' }],
          },
        ],
      }

      const summary = formatRuleGroupSummary(group, fields)
      expect(summary).toBe(
        '延迟 介于区间 [20 ~ 100] AND 环境 属于任一 [prod, staging] AND NOT (服务名 为空)'
      )

      const allDisabled: AbcRuleGroup = {
        id: 'g_empty',
        type: 'group',
        combinator: 'AND',
        children: [{ id: 'd1', type: 'condition', field: 'service', operator: 'is_empty', disabled: true }],
      }
      expect(formatRuleGroupSummary(allDisabled, fields)).toBe('(无激活条件)')
    })
  })

  describe('diff: 结构化对象差异与 LCS 逐行差异计算', () => {
    it('computeObjectDiff 精准识别四类变更并对敏感键名自动掩码为 ••••••••', () => {
      const before = {
        timeout: 3000,
        region: 'cn-hangzhou',
        legacyFlag: true,
        api_token: 'tok_old_123',
        dbPassword: 'pwd_same_value',
      }
      const after = {
        timeout: 5000,
        region: 'cn-hangzhou',
        retries: 3,
        api_token: 'tok_new_456',
        dbPassword: 'pwd_same_value',
        webhookSecret: 'sec_added_789',
      }

      const entries = computeObjectDiff(before, after, {
        includeUnchanged: true,
        labels: { timeout: '请求超时' },
      })
      const byKey = new Map(entries.map((e) => [e.key, e]))

      expect(byKey.get('timeout')).toMatchObject({
        label: '请求超时',
        kind: 'modified',
        beforeValue: 3000,
        afterValue: 5000,
        masked: false,
      })
      expect(byKey.get('region')).toMatchObject({ kind: 'unchanged', masked: false })
      expect(byKey.get('legacyFlag')).toMatchObject({ kind: 'removed', afterText: '— (未设置)' })
      expect(byKey.get('retries')).toMatchObject({ kind: 'added', beforeText: '— (未设置)', afterText: '3' })

      // secret / token / password 键名自动掩码，同时未变更敏感字段也参与脱敏
      expect(byKey.get('api_token')).toMatchObject({
        kind: 'modified',
        masked: true,
        beforeValue: '••••••••',
        afterValue: '••••••••',
        beforeText: '••••••••',
        afterText: '••••••••',
      })
      expect(byKey.get('dbPassword')).toMatchObject({
        kind: 'unchanged',
        masked: true,
        beforeText: '••••••••',
        afterText: '••••••••',
      })
      expect(byKey.get('webhookSecret')).toMatchObject({
        kind: 'added',
        masked: true,
        beforeText: '— (未设置)',
        afterValue: '••••••••',
        afterText: '••••••••',
      })
    })

    it('computeLineDiff 输出精确 context/add/remove 与双侧行号', () => {
      const beforeText = ['line-1', 'line-2-old', 'line-3'].join('\n')
      const afterText = ['line-1', 'line-2-new', 'line-3', 'line-4-added'].join('\n')

      const diff = computeLineDiff(beforeText, afterText)
      expect(diff).toEqual([
        { type: 'context', content: 'line-1', oldLineNumber: 1, newLineNumber: 1 },
        { type: 'remove', content: 'line-2-old', oldLineNumber: 2 },
        { type: 'add', content: 'line-2-new', newLineNumber: 2 },
        { type: 'context', content: 'line-3', oldLineNumber: 3, newLineNumber: 3 },
        { type: 'add', content: 'line-4-added', newLineNumber: 4 },
      ])
    })
  })

  describe('keyValue: 多格式自动解析、过滤序列化与重复 Key 检测', () => {
    it('parseKeyValueText 自动识别 JSON、带引号/注释的 .env 与 HTTP Headers', () => {
      const jsonEntries = parseKeyValueText('{"PORT": 8080, "APP_ENV": "prod"}')
      expect(jsonEntries.map(({ key, value }) => ({ key, value }))).toEqual([
        { key: 'PORT', value: '8080' },
        { key: 'APP_ENV', value: 'prod' },
      ])

      const envRaw = [
        '# 数据库连接配置',
        'DB_HOST="127.0.0.1"',
        "GREETING='hello world'",
        'export API_KEY="sk-\\"quoted\\"\\nline2"',
      ].join('\n')
      const envEntries = parseKeyValueText(envRaw)
      expect(envEntries.map(({ key, value }) => ({ key, value }))).toEqual([
        { key: 'DB_HOST', value: '127.0.0.1' },
        { key: 'GREETING', value: 'hello world' },
        { key: 'API_KEY', value: 'sk-"quoted"\nline2' },
      ])

      const headerRaw = [
        '// 鉴权请求头',
        'Authorization: Bearer token-xyz',
        'X-Trace-Id: trace-001',
      ].join('\n')
      const headerEntries = parseKeyValueText(headerRaw)
      expect(headerEntries.map(({ key, value }) => ({ key, value }))).toEqual([
        { key: 'Authorization', value: 'Bearer token-xyz' },
        { key: 'X-Trace-Id', value: 'trace-001' },
      ])
    })

    it('serializeKeyValueEntries 支持 onlyEnabled 过滤与三类输出格式，findDuplicateKeys 去重返回重复键', () => {
      const entries = [
        { id: '1', key: 'NODE_ENV', value: 'production', enabled: true },
        { id: '2', key: 'DISABLED_KEY', value: 'skip-me', enabled: false },
        { id: '3', key: 'WELCOME_MSG', value: 'hello #world', enabled: true },
        { id: '4', key: 'NODE_ENV', value: 'staging', enabled: true },
        { id: '5', key: '', value: 'ignored-empty-key', enabled: true },
        { id: '6', key: 'NODE_ENV', value: 'dev', enabled: true },
      ]

      expect(serializeKeyValueEntries(entries, 'dotenv', { onlyEnabled: true })).toBe(
        ['NODE_ENV=production', 'WELCOME_MSG="hello #world"', 'NODE_ENV=staging', 'NODE_ENV=dev'].join('\n')
      )

      expect(serializeKeyValueEntries(entries.slice(0, 3), 'headers', { onlyEnabled: true })).toBe(
        'NODE_ENV: production\nWELCOME_MSG: hello #world'
      )

      expect(JSON.parse(serializeKeyValueEntries(entries.slice(0, 3), 'json', { onlyEnabled: true }))).toEqual({
        NODE_ENV: 'production',
        WELCOME_MSG: 'hello #world',
      })

      expect(findDuplicateKeys(entries)).toEqual(['NODE_ENV'])
    })
  })
})
