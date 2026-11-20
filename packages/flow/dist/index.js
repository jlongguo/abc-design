import { jsxs as C, jsx as o, Fragment as ge } from "react/jsx-runtime";
import q, { useRef as U, useId as lt, useCallback as V, useMemo as se, useEffect as re, useState as pe } from "react";
import { X as We, Search as dt, Braces as Lt, Minus as Bt, Plus as Re, Hand as Dt, BoxSelect as Pt, Unlock as At, Lock as Ot, Magnet as Vt, MousePointerClick as _t, Undo2 as Wt, Redo2 as jt, Maximize as Xt, LayoutGrid as Yt, Map as Kt, ImageDown as Zt, FolderKanban as Gt, Palette as Ht, Trash2 as ut, Sparkles as Ut, AlignStartVertical as qt, AlignCenterVertical as Qt, AlignEndVertical as Jt, AlignStartHorizontal as er, AlignCenterHorizontal as tr, AlignEndHorizontal as rr, AlignHorizontalSpaceAround as or, AlignVerticalSpaceAround as nr, FolderPlus as ar, Copy as sr } from "lucide-react";
import { useAbcMotion as $e, useControllableState as je, cn as F, Tooltip as ft, useAbcSize as ir, usePresence as cr, useFloatingPosition as lr, baseFieldControlClass as dr, Button as O } from "@abc-design/react";
import { NodeToolbar as gt, Position as ae, getStraightPath as Ke, getSmoothStepPath as ye, getSimpleBezierPath as pt, getBezierPath as Ze, BaseEdge as ht, EdgeText as bt, EdgeToolbar as ur, EdgeLabelRenderer as fr, useInternalNode as et, ConnectionMode as gr, MarkerType as pr, getNodesBounds as hr, getViewportForBounds as br, ConnectionLineType as xe, useNodes as mr, ViewportPortal as vr, ReactFlow as xr, SelectionMode as wr, PanOnScrollMode as yr, Background as tt, Panel as me, MiniMap as Nr, ReactFlowProvider as mt, BackgroundVariant as Oe, useNodeId as kr, useNodeConnections as vt, useConnection as Cr, Handle as Sr, NodeResizer as zr, NodeResizeControl as Mr, ResizeControlVariant as Fr, getOutgoers as Ir, getConnectedEdges as xt, getIncomers as Er, useReactFlow as Ge, useNodesInitialized as Tr, useUpdateNodeInternals as Rr, useNodesData as $r } from "@xyflow/react";
import { addEdge as Go, applyEdgeChanges as Ho, applyNodeChanges as Uo, getBezierPath as qo, getSimpleBezierPath as Qo, getSmoothStepPath as Jo, getStraightPath as en, reconnectEdge as tn, useConnection as rn, useEdges as on, useEdgesState as nn, useReactFlow as an, useInternalNode as sn, useKeyPress as cn, useNodeConnections as ln, useNodeId as dn, useNodes as un, useNodesData as fn, useNodesInitialized as gn, useNodesState as pn, useOnSelectionChange as hn, useOnViewportChange as bn, useStore as mn, useStoreApi as vn, useUpdateNodeInternals as xn, useViewport as wn } from "@xyflow/react";
import { createPortal as Lr } from "react-dom";
const wt = {
  blue: {
    cardShell: "border-[var(--abc-flow-blue-shell-border)] bg-[var(--abc-flow-blue-shell-bg)]",
    headerText: "text-[var(--abc-flow-blue-header-fg)]",
    headerBadgeBg: "bg-[var(--abc-flow-blue-badge-bg)] text-[var(--abc-flow-blue-badge-fg)]",
    selectedRing: "ring-2 ring-[var(--abc-flow-blue-ring)] border-[var(--abc-flow-blue-ring)]",
    sectionFrame: "border-[var(--abc-flow-blue-section-border)] bg-[var(--abc-flow-blue-section-bg)]",
    sectionTitle: "text-[var(--abc-flow-blue-section-title)]"
  },
  green: {
    cardShell: "border-[var(--abc-flow-green-shell-border)] bg-[var(--abc-flow-green-shell-bg)]",
    headerText: "text-[var(--abc-flow-green-header-fg)]",
    headerBadgeBg: "bg-[var(--abc-flow-green-badge-bg)] text-[var(--abc-flow-green-badge-fg)]",
    selectedRing: "ring-2 ring-[var(--abc-flow-green-ring)] border-[var(--abc-flow-green-ring)]",
    sectionFrame: "border-[var(--abc-flow-green-section-border)] bg-[var(--abc-flow-green-section-bg)]",
    sectionTitle: "text-[var(--abc-flow-green-section-title)]"
  },
  amber: {
    cardShell: "border-[var(--abc-flow-amber-shell-border)] bg-[var(--abc-flow-amber-shell-bg)]",
    headerText: "text-[var(--abc-flow-amber-header-fg)]",
    headerBadgeBg: "bg-[var(--abc-flow-amber-badge-bg)] text-[var(--abc-flow-amber-badge-fg)]",
    selectedRing: "ring-2 ring-[var(--abc-flow-amber-ring)] border-[var(--abc-flow-amber-ring)]",
    sectionFrame: "border-[var(--abc-flow-amber-section-border)] bg-[var(--abc-flow-amber-section-bg)]",
    sectionTitle: "text-[var(--abc-flow-amber-section-title)]"
  },
  rose: {
    cardShell: "border-[var(--abc-flow-rose-shell-border)] bg-[var(--abc-flow-rose-shell-bg)]",
    headerText: "text-[var(--abc-flow-rose-header-fg)]",
    headerBadgeBg: "bg-[var(--abc-flow-rose-badge-bg)] text-[var(--abc-flow-rose-badge-fg)]",
    selectedRing: "ring-2 ring-[var(--abc-flow-rose-ring)] border-[var(--abc-flow-rose-ring)]",
    sectionFrame: "border-[var(--abc-flow-rose-section-border)] bg-[var(--abc-flow-rose-section-bg)]",
    sectionTitle: "text-[var(--abc-flow-rose-section-title)]"
  },
  slate: {
    cardShell: "border-[var(--abc-flow-slate-shell-border)] bg-[var(--abc-flow-slate-shell-bg)]",
    headerText: "text-[var(--abc-flow-slate-header-fg)]",
    headerBadgeBg: "bg-[var(--abc-flow-slate-badge-bg)] text-[var(--abc-flow-slate-badge-fg)]",
    selectedRing: "ring-2 ring-[var(--abc-flow-slate-ring)] border-[var(--abc-flow-slate-ring)]",
    sectionFrame: "border-[var(--abc-flow-slate-section-border)] bg-[var(--abc-flow-slate-section-bg)]",
    sectionTitle: "text-[var(--abc-flow-slate-section-title)]"
  }
}, Xe = {
  success: {
    dot: "bg-[var(--abc-flow-port-success-dot)]",
    text: "text-[var(--abc-flow-port-success-fg)]"
  },
  danger: {
    dot: "bg-[var(--abc-flow-port-danger-dot)]",
    text: "text-[var(--abc-flow-port-danger-fg)]"
  },
  warning: {
    dot: "bg-[var(--abc-flow-port-warning-dot)]",
    text: "text-[var(--abc-flow-port-warning-fg)]"
  },
  info: {
    dot: "bg-[var(--abc-flow-port-info-dot)]",
    text: "text-[var(--abc-flow-port-info-fg)]"
  },
  neutral: {
    dot: "bg-[var(--abc-flow-port-neutral-dot)]",
    text: "text-[var(--abc-fg-secondary)]"
  }
}, Ve = /\{\{\s*([^{}]+?)\s*\}\}/g;
function Br(r) {
  var f;
  if (!r) return [];
  const t = [];
  Ve.lastIndex = 0;
  let s = Ve.exec(r), l = 0;
  for (; s !== null; ) {
    const c = s[0], d = ((f = s[1]) == null ? void 0 : f.trim()) ?? "";
    d && (t.push({
      raw: c,
      key: d,
      start: s.index,
      end: s.index + c.length,
      occurrenceIndex: l
    }), l += 1), s = Ve.exec(r);
  }
  return t;
}
function Dr(r, t) {
  const s = r.slice(0, t.start), l = r.slice(t.end);
  if (s.endsWith(" ") && l.startsWith(" "))
    return `${s}${l.slice(1)}`;
  const f = `${s}${l}`;
  return f.trim().length === 0 ? "" : f;
}
function Pr(r, t, s, l, f = !1) {
  if (f)
    return { nextValue: t, nextCaret: t.length };
  const c = r.length, d = typeof s == "number" && s >= 0 ? Math.min(s, c) : c, e = typeof l == "number" && l >= d ? Math.min(l, c) : d;
  return {
    nextValue: `${r.slice(0, d)}${t}${r.slice(e)}`,
    nextCaret: d + t.length
  };
}
const Ar = {
  sm: {
    rail: "w-[58px] p-1 gap-0.5 rounded-[var(--abc-radius-lg)]",
    button: "px-1 py-1.5 gap-1 rounded-[var(--abc-radius-md)]",
    iconWrap: "h-4 w-4",
    label: "text-[10px] leading-tight"
  },
  md: {
    rail: "w-[68px] p-1.5 gap-1 rounded-[var(--abc-radius-xl)]",
    button: "px-1 py-2 gap-1 rounded-[var(--abc-radius-lg)]",
    iconWrap: "h-[18px] w-[18px]",
    label: "text-[10.5px] leading-tight"
  }
}, Or = q.forwardRef(
  ({
    items: r,
    activeKey: t,
    defaultActiveKey: s = null,
    onActiveKeyChange: l,
    renderFlyout: f,
    flyoutContent: c,
    flyoutHeader: d,
    showFlyoutHeader: e = !0,
    flyoutWidth: u = 264,
    side: h = "left",
    size: a = "md",
    footer: i,
    closeOnOutsideClick: p = !0,
    closeOnEscape: g = !0,
    closeLabel: b = "收起面板",
    motion: x,
    className: m,
    railClassName: S,
    flyoutClassName: M,
    "aria-label": $ = "画布类目工具栏",
    ...k
  }, v) => {
    const N = $e(x), n = U(null), z = lt(), [E, y] = je({
      value: t,
      defaultValue: s,
      onChange: l
    }), T = V(
      (L) => {
        n.current = L, typeof v == "function" ? v(L) : v && (v.current = L);
      },
      [v]
    ), w = se(
      () => E ? r.find((L) => L.key === E && !L.disabled) ?? null : null,
      [E, r]
    ), I = V(() => {
      y(null);
    }, [y]), B = V(
      (L) => {
        L.disabled || y(E === L.key ? null : L.key);
      },
      [E, y]
    ), P = se(() => w ? f ? f(w, { close: I }) : w.content !== void 0 ? w.content : c ?? null : null, [w, f, c, I]), _ = !!(w && P !== null && P !== void 0);
    re(() => {
      if (!_) return;
      const L = (K) => {
        var he;
        if (!p) return;
        const oe = K.target;
        oe && ((he = n.current) != null && he.contains(oe)) || I();
      }, X = (K) => {
        !g || K.key !== "Escape" || (K.stopPropagation(), I());
      };
      return document.addEventListener("mousedown", L), document.addEventListener("keydown", X), () => {
        document.removeEventListener("mousedown", L), document.removeEventListener("keydown", X);
      };
    }, [_, p, g, I]);
    const Z = Ar[a], ce = typeof u == "number" ? `${u}px` : u, le = () => !w || d === null || !e ? null : typeof d == "function" ? d(w, { close: I }) : d !== void 0 ? d : /* @__PURE__ */ C("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-3 py-2.5", children: [
      /* @__PURE__ */ C("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ o("span", { className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: w.icon }),
        /* @__PURE__ */ o("span", { className: "truncate text-xs font-semibold text-[var(--abc-fg)]", children: w.label })
      ] }),
      /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: I,
          "aria-label": b,
          className: "inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          children: /* @__PURE__ */ o(We, { className: "h-3.5 w-3.5" })
        }
      )
    ] }), de = /* @__PURE__ */ C(
      "nav",
      {
        "aria-label": $,
        "data-motion": N,
        className: F(
          "nodrag nopan flex shrink-0 flex-col items-stretch border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)] select-none",
          Z.rail,
          S
        ),
        children: [
          r.map((L) => {
            const X = (w == null ? void 0 : w.key) === L.key, K = L.title ?? (typeof L.label == "string" ? L.label : void 0);
            return /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                disabled: L.disabled,
                title: K,
                "aria-pressed": X,
                "aria-expanded": X && _,
                "aria-controls": X && _ ? z : void 0,
                "data-rail-key": L.key,
                "data-active": X ? "true" : "false",
                onClick: () => B(L),
                className: F(
                  "group relative flex w-full flex-col items-center justify-center text-center transition-[color,background-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  Z.button,
                  L.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
                  X ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ o(
                    "span",
                    {
                      className: F(
                        "inline-flex shrink-0 items-center justify-center transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        Z.iconWrap,
                        !L.disabled && "group-hover:scale-105"
                      ),
                      children: L.icon
                    }
                  ),
                  /* @__PURE__ */ o("span", { className: F("max-w-full truncate font-medium", Z.label), children: L.label }),
                  L.badge !== void 0 && L.badge !== null && /* @__PURE__ */ o("span", { className: "pointer-events-none absolute right-1 top-1 inline-flex min-w-[14px] items-center justify-center rounded-full bg-[var(--abc-primary)] px-1 text-[9px] font-semibold leading-[14px] text-[var(--abc-primary-fg)]", children: L.badge })
                ]
              },
              L.key
            );
          }),
          i && /* @__PURE__ */ o("div", { className: "mt-1 border-t border-[var(--abc-border)] pt-1.5", children: i })
        ]
      }
    ), D = _ ? /* @__PURE__ */ C(
      "div",
      {
        id: z,
        role: "region",
        "aria-label": typeof (w == null ? void 0 : w.label) == "string" ? `${w.label} 面板` : "展开内容面板",
        "data-flow-rail-flyout": "open",
        "data-active-key": w == null ? void 0 : w.key,
        "data-motion": N,
        style: { width: ce },
        className: F(
          "nodrag nopan flex max-h-[min(70vh,520px)] flex-col overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)]",
          N !== "none" && "abc-animate-popover-in",
          M
        ),
        children: [
          le(),
          /* @__PURE__ */ o("div", { className: "min-h-0 flex-1 overflow-y-auto p-3", children: P })
        ]
      }
    ) : null;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: T,
        "data-side": h,
        className: F(
          "relative inline-flex items-start gap-2.5",
          h === "right" && "flex-row-reverse",
          m
        ),
        ...k,
        children: [
          de,
          D
        ]
      }
    );
  }
);
Or.displayName = "FloatingIconRail";
const Vr = q.forwardRef(
  ({
    title: r,
    subtitle: t,
    icon: s,
    badge: l,
    headerExtra: f,
    tone: c = "blue",
    subIcon: d,
    subTitle: e,
    subExtra: u,
    metaRows: h,
    maxMetaRows: a = 3,
    outputs: i,
    renderOutputHandle: p,
    inputHandle: g,
    toolbar: b,
    footer: x,
    selected: m = !1,
    running: S = !1,
    error: M = !1,
    status: $,
    width: k = 256,
    motion: v,
    className: N,
    headerClassName: n,
    bodyClassName: z,
    style: E,
    children: y,
    ...T
  }, w) => {
    const I = $e(v), B = wt[c], P = M || $ === "error" ? "error" : S || $ === "running" ? "running" : $ === "success" ? "success" : "idle", _ = h && a > 0 ? h.slice(0, a) : [], Z = !!(d || e !== void 0 || u), ce = Z || _.length > 0 || q.Children.count(y) > 0 || !!(i && i.length > 0) || !!x, le = P === "error" ? "border-rose-500 ring-2 ring-rose-500/75 dark:border-rose-400 dark:ring-rose-400/70" : P === "running" ? "border-blue-500 ring-2 ring-blue-500/80 dark:border-blue-400 dark:ring-blue-400/75" : m ? B.selectedRing : void 0, de = typeof k == "number" ? `${k}px` : k;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: w,
        "data-tone": c,
        "data-status": P,
        "data-selected": m ? "true" : "false",
        "data-motion": I,
        style: { width: de, ...E },
        className: F(
          "relative overflow-visible rounded-[14px] border p-1 shadow-[var(--abc-shadow-card)] transition-[border-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out",
          B.cardShell,
          le,
          m && "shadow-md",
          N
        ),
        ...T,
        children: [
          g,
          b && /* @__PURE__ */ o("div", { className: "nodrag nopan absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2", children: b }),
          /* @__PURE__ */ C(
            "div",
            {
              className: F(
                "flex items-center justify-between gap-2 px-2 py-1.5",
                n
              ),
              children: [
                /* @__PURE__ */ C("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  s && /* @__PURE__ */ o(
                    "span",
                    {
                      className: F(
                        "inline-flex h-4 w-4 shrink-0 items-center justify-center",
                        B.headerText
                      ),
                      children: s
                    }
                  ),
                  /* @__PURE__ */ C("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ C("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ o(
                        "span",
                        {
                          className: F(
                            "truncate text-xs font-semibold leading-tight",
                            B.headerText
                          ),
                          children: r
                        }
                      ),
                      l && /* @__PURE__ */ o("span", { className: "shrink-0", children: l })
                    ] }),
                    t !== void 0 && /* @__PURE__ */ o("div", { className: "truncate text-[10.5px] leading-tight text-[var(--abc-fg-muted)]", children: t })
                  ] })
                ] }),
                /* @__PURE__ */ C("div", { className: "flex shrink-0 items-center gap-1", children: [
                  P === "running" && /* @__PURE__ */ C(
                    "span",
                    {
                      "aria-label": "运行中",
                      "data-flow-status-indicator": "running",
                      className: "relative inline-flex h-2 w-2 shrink-0",
                      children: [
                        I !== "none" && /* @__PURE__ */ o("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" }),
                        /* @__PURE__ */ o("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-blue-500" })
                      ]
                    }
                  ),
                  P === "error" && /* @__PURE__ */ o(
                    "span",
                    {
                      "aria-label": "执行异常",
                      "data-flow-status-indicator": "error",
                      className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-rose-500"
                    }
                  ),
                  P === "success" && /* @__PURE__ */ o(
                    "span",
                    {
                      "aria-label": "执行成功",
                      "data-flow-status-indicator": "success",
                      className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                    }
                  ),
                  f && /* @__PURE__ */ o("div", { className: "nodrag nopan flex items-center gap-1", children: f })
                ] })
              ]
            }
          ),
          ce && /* @__PURE__ */ C(
            "div",
            {
              className: F(
                "overflow-visible rounded-[10px] border border-[var(--abc-border)]/70 bg-[var(--abc-bg-surface)] px-2.5 py-2 text-[var(--abc-fg)]",
                z
              ),
              children: [
                Z && /* @__PURE__ */ C("div", { className: "mb-1.5 flex items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ C("div", { className: "flex min-w-0 items-center gap-1.5", children: [
                    d && /* @__PURE__ */ o("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-fg-secondary)]", children: d }),
                    e !== void 0 && /* @__PURE__ */ o("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: e })
                  ] }),
                  u && /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: u })
                ] }),
                _.length > 0 && /* @__PURE__ */ o("div", { className: "space-y-1", children: _.map((D, L) => /* @__PURE__ */ C(
                  "div",
                  {
                    title: D.title,
                    className: "flex min-w-0 items-center gap-1.5 text-[11.5px] leading-snug text-[var(--abc-fg-secondary)]",
                    children: [
                      D.icon && /* @__PURE__ */ o("span", { className: "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[var(--abc-fg-muted)]", children: D.icon }),
                      D.label !== void 0 && /* @__PURE__ */ o("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: D.label }),
                      /* @__PURE__ */ o(
                        "span",
                        {
                          className: F(
                            "min-w-0 flex-1 truncate text-[var(--abc-fg)]",
                            D.mono && "font-mono text-[11px]"
                          ),
                          children: D.value
                        }
                      )
                    ]
                  },
                  D.key ?? String(L)
                )) }),
                y && /* @__PURE__ */ o("div", { className: F(_.length > 0 && "mt-2", "text-xs"), children: y }),
                i && i.length > 0 && /* @__PURE__ */ o(
                  "div",
                  {
                    "data-flow-outputs": "",
                    className: F(
                      "space-y-0.5",
                      (_.length > 0 || q.Children.count(y) > 0 || Z) && "mt-2 border-t border-[var(--abc-border)]/70 pt-1.5"
                    ),
                    children: i.map((D) => {
                      const L = D.tone ?? "neutral", X = Xe[L], K = D.handle !== void 0 ? D.handle : p == null ? void 0 : p(D), oe = D.showDot !== void 0 ? D.showDot : !K;
                      return /* @__PURE__ */ C(
                        "div",
                        {
                          "data-port-id": D.id,
                          "data-port-tone": L,
                          className: F(
                            // 右侧外延 -mr-3.5 与外框 p-1 + 内层 px-2.5 (4+10=14px) 精准齐平卡片外右缘，
                            // 使直接挂载于本行的 ReactFlow <Handle position={Position.Right} /> 落点精确贴边
                            "relative -mr-3.5 flex items-center justify-end gap-1.5 py-0.5 pl-2 pr-3.5 text-[11.5px] leading-snug",
                            D.disabled && "opacity-45",
                            D.className
                          ),
                          children: [
                            D.hint && /* @__PURE__ */ o("span", { className: "truncate text-[10.5px] text-[var(--abc-fg-muted)]", children: D.hint }),
                            D.icon && /* @__PURE__ */ o("span", { className: F("inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center", X.text), children: D.icon }),
                            /* @__PURE__ */ o("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: D.label }),
                            oe && /* @__PURE__ */ o(
                              "span",
                              {
                                "aria-hidden": "true",
                                "data-port-dot": L,
                                className: F(
                                  "pointer-events-none absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
                                  X.dot
                                )
                              }
                            ),
                            K
                          ]
                        },
                        D.id
                      );
                    })
                  }
                ),
                x && /* @__PURE__ */ o("div", { className: "mt-2 border-t border-[var(--abc-border)]/70 pt-1.5", children: x })
              ]
            }
          )
        ]
      }
    );
  }
);
Vr.displayName = "FlowNodeCard";
const _r = {
  xs: "h-6 w-6",
  sm: "h-7 w-7"
}, yt = q.forwardRef(
  ({
    items: r,
    orientation: t = "horizontal",
    size: s = "sm",
    visible: l = !0,
    tooltipPlacement: f = "top",
    disableTooltips: c = !1,
    stopPropagation: d = !0,
    floating: e = !1,
    floatingPosition: u = ae.Top,
    floatingOffset: h = 8,
    floatingAlign: a = "center",
    motion: i,
    className: p,
    children: g,
    "aria-label": b = "节点快捷操作条",
    ...x
  }, m) => {
    const S = $e(i);
    if (!l && !e) return null;
    const M = t === "vertical", $ = _r[s], k = /* @__PURE__ */ C(
      "div",
      {
        ref: m,
        role: "toolbar",
        "data-slot": "flow-node-toolbar",
        "data-abc-no-press-scale": "",
        "aria-label": b,
        "aria-orientation": t,
        "data-motion": S,
        "data-orientation": t,
        onMouseDown: d ? (v) => v.stopPropagation() : void 0,
        onClick: d ? (v) => v.stopPropagation() : void 0,
        className: F(
          "nodrag nopan inline-flex items-center gap-0.5 rounded-[10px] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5 shadow-[var(--abc-shadow-popover)] select-none",
          M ? "flex-col" : "flex-row",
          S !== "none" && "abc-animate-popover-in",
          p
        ),
        ...x,
        children: [
          r.map((v) => {
            const N = /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                disabled: v.disabled,
                "aria-label": v["aria-label"] ?? v.label,
                "aria-pressed": v.active !== void 0 ? v.active : void 0,
                "data-toolbar-key": v.key,
                "data-active": v.active ? "true" : "false",
                onClick: (n) => {
                  var z;
                  d && n.stopPropagation(), !v.disabled && ((z = v.onClick) == null || z.call(v, n));
                },
                className: F(
                  "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  $,
                  v.disabled ? "cursor-not-allowed text-[var(--abc-fg-placeholder)] opacity-45" : "cursor-pointer",
                  v.active ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : v.danger ? "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-danger-soft)] enabled:hover:text-[var(--abc-danger)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                  v.className
                ),
                children: /* @__PURE__ */ o("span", { className: "inline-flex h-3.5 w-3.5 items-center justify-center", children: v.icon })
              }
            );
            return /* @__PURE__ */ C(q.Fragment, { children: [
              v.dividerBefore && /* @__PURE__ */ o(
                "span",
                {
                  "aria-hidden": "true",
                  className: F(
                    "shrink-0 bg-[var(--abc-border)]",
                    M ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                  )
                }
              ),
              c || v.disabled ? N : /* @__PURE__ */ o(
                ft,
                {
                  content: v.tooltip ?? v.label,
                  placement: f,
                  delay: 80,
                  motion: S,
                  children: N
                }
              )
            ] }, v.key);
          }),
          g && /* @__PURE__ */ C(ge, { children: [
            r.length > 0 && /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: F(
                  "shrink-0 bg-[var(--abc-border)]",
                  M ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                )
              }
            ),
            g
          ] })
        ]
      }
    );
    return e ? /* @__PURE__ */ o(
      gt,
      {
        isVisible: l,
        position: u,
        offset: h,
        align: a,
        children: k
      }
    ) : k;
  }
);
yt.displayName = "FlowNodeToolbar";
const Wr = ({
  floatingRef: r,
  portalContainer: t,
  portalTheme: s,
  isMounted: l,
  isVisible: f,
  popoverId: c,
  floatingStyle: d,
  actualSide: e,
  resolvedMotion: u,
  pickerTitle: h,
  pickerTriggerLabel: a,
  pickerPlaceholder: i,
  emptyVariablesText: p,
  searchable: g,
  totalVariablesCount: b,
  query: x,
  onQueryChange: m,
  groupedVariables: S,
  onSelect: M,
  popoverClassName: $
}) => !l || !t ? null : Lr(
  /* @__PURE__ */ C(
    "div",
    {
      ref: r,
      id: c,
      role: "dialog",
      "aria-label": typeof h == "string" ? h : a,
      "data-abc-floating": "",
      "data-abc-theme": s,
      "data-playground-theme": s,
      "data-template-picker-popover": "open",
      "data-placement": e,
      "data-motion": u,
      style: d,
      className: F(
        s === "dark" && "dark",
        s === "light" && "light",
        "nodrag nopan z-[1350] w-[280px] max-w-[calc(100vw-16px)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
        u !== "none" && (f ? "abc-animate-popover-in" : "abc-animate-popover-out"),
        $
      ),
      children: [
        /* @__PURE__ */ C("div", { className: "border-b border-[var(--abc-border)] px-3 py-2", children: [
          /* @__PURE__ */ C("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: h }),
            /* @__PURE__ */ o("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "{{var}}" })
          ] }),
          g && b > 0 && /* @__PURE__ */ C("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ o(dt, { className: "pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ o(
              "input",
              {
                type: "text",
                value: x,
                onChange: (k) => m(k.target.value),
                placeholder: i,
                "aria-label": i,
                className: "h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-7 pr-2 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "max-h-60 overflow-y-auto p-1.5", children: S.length === 0 ? /* @__PURE__ */ o("div", { className: "px-2 py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: p }) : /* @__PURE__ */ o("div", { className: "space-y-2", children: S.map(([k, v]) => /* @__PURE__ */ C("div", { children: [
          /* @__PURE__ */ o("div", { className: "px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: k }),
          /* @__PURE__ */ o("div", { className: "mt-0.5 space-y-0.5", children: v.map((N) => /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              disabled: N.disabled,
              "data-variable-option": N.key,
              onClick: () => M(N),
              className: F(
                "flex w-full flex-col gap-0.5 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)]",
                N.disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer hover:bg-[var(--abc-bg-subtle)]"
              ),
              children: [
                /* @__PURE__ */ C("div", { className: "flex w-full items-center justify-between gap-2", children: [
                  /* @__PURE__ */ o("span", { className: "truncate font-mono text-[11.5px] font-medium text-[var(--abc-primary)]", children: `{{${N.key}}}` }),
                  N.type && /* @__PURE__ */ o("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: N.type })
                ] }),
                (N.label || N.description || N.sampleValue) && /* @__PURE__ */ C("div", { className: "flex w-full items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ o("span", { className: "truncate", children: N.label ?? N.description }),
                  N.sampleValue && /* @__PURE__ */ o("span", { className: "max-w-[90px] shrink-0 truncate font-mono text-[10px] text-[var(--abc-fg-secondary)]", children: N.sampleValue })
                ] })
              ]
            },
            N.key
          )) })
        ] }, k)) }) })
      ]
    }
  ),
  t
), jr = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Xr = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Yr = q.forwardRef(
  ({
    value: r,
    defaultValue: t = "",
    onChange: s,
    multiline: l = !1,
    rows: f = 3,
    variables: c = [],
    chipDisplay: d = "auto",
    removableChips: e = !0,
    showPreviewLabel: u = !0,
    replaceOnSelect: h = !1,
    insertFormat: a,
    showPickerButton: i = !0,
    searchable: p = !0,
    pickerOpen: g,
    defaultPickerOpen: b = !1,
    onPickerOpenChange: x,
    pickerTitle: m = "插入模板变量",
    pickerPlaceholder: S = "搜索变量名、分组或说明...",
    pickerTriggerLabel: M = "插入变量",
    emptyVariablesText: $ = "暂无可用变量",
    onSelectVariable: k,
    onRemoveVariable: v,
    id: N,
    name: n,
    label: z,
    error: E,
    helperText: y,
    invalid: T = !1,
    required: w = !1,
    disabled: I = !1,
    readOnly: B = !1,
    placeholder: P = "输入文本或点击右下角 {} 插入 {{variable}}...",
    size: _,
    mono: Z = !1,
    allowClear: ce = !1,
    clearLabel: le = "清空内容",
    motion: de,
    onFocus: D,
    onBlur: L,
    "aria-label": X,
    "aria-labelledby": K,
    "aria-describedby": oe,
    className: he,
    wrapperClassName: Le,
    inputClassName: Ne,
    popoverClassName: Be
  }, ue) => {
    const ve = ir(_, "sm"), be = $e(de), ke = lt(), ne = N ?? ke, Ce = `${ne}-hint`, Se = `${ne}-vars`, [H, J] = je({
      value: r,
      defaultValue: t,
      onChange: s
    }), [G, te] = je({
      value: g,
      defaultValue: b,
      onChange: x
    }), [De, He] = pe(""), ze = U(null), Me = U(null), Pe = U(null), Fe = U({
      start: null,
      end: null
    }), Ue = V(
      (R) => {
        ze.current = R, typeof ue == "function" ? ue(R) : ue && (ue.current = R);
      },
      [ue]
    ), ee = !I && !B, Ie = !!(T || E), Ct = se(() => {
      const R = /* @__PURE__ */ new Map();
      for (const A of c)
        R.has(A.key) || R.set(A.key, A);
      return R;
    }, [c]), Ae = se(() => Br(H), [H]), St = d === "always" || d === "auto" && Ae.length > 0, { isMounted: qe, isVisible: zt } = cr(
      G && ee,
      be === "none" ? 0 : 130
    ), { style: Mt, actualSide: Ft, portalContainer: It, portalTheme: Et } = lr({
      open: qe,
      triggerRef: Me,
      floatingRef: Pe,
      placement: "bottomRight",
      offset: 6,
      rightAnchorOnOverflow: !0
    });
    re(() => {
      G || He("");
    }, [G]), re(() => {
      if (!G) return;
      const R = (Y) => {
        var j, fe;
        const W = Y.target;
        W && ((j = Me.current) != null && j.contains(W) || (fe = Pe.current) != null && fe.contains(W) || te(!1));
      }, A = (Y) => {
        var W;
        Y.key === "Escape" && (Y.preventDefault(), Y.stopPropagation(), te(!1), (W = Me.current) == null || W.focus());
      };
      return document.addEventListener("mousedown", R), document.addEventListener("keydown", A, !0), () => {
        document.removeEventListener("mousedown", R), document.removeEventListener("keydown", A, !0);
      };
    }, [G, te]);
    const Q = V(() => {
      const R = ze.current;
      R && (Fe.current = {
        start: R.selectionStart,
        end: R.selectionEnd
      });
    }, []), Tt = V(
      (R) => {
        if (!ee || R.disabled) return;
        const A = a ? a(R) : `{{${R.key}}}`, { nextValue: Y, nextCaret: W } = Pr(
          H,
          A,
          Fe.current.start,
          Fe.current.end,
          h
        );
        J(Y), k == null || k(R, Y), te(!1), typeof window < "u" && window.requestAnimationFrame(() => {
          const j = ze.current;
          if (j) {
            j.focus();
            try {
              j.setSelectionRange(W, W);
            } catch {
            }
            Fe.current = { start: W, end: W };
          }
        });
      },
      [
        ee,
        a,
        H,
        h,
        J,
        k,
        te
      ]
    ), Rt = V(
      (R) => {
        if (!ee) return;
        const A = Dr(H, R);
        J(A), v == null || v(R, A);
      },
      [ee, H, J, v]
    ), $t = se(() => {
      var W;
      const R = De.trim().toLowerCase(), A = R ? c.filter(
        (j) => [j.key, j.label, j.group, j.description, j.type].filter(Boolean).some((fe) => String(fe).toLowerCase().includes(R))
      ) : c, Y = /* @__PURE__ */ new Map();
      for (const j of A) {
        const fe = ((W = j.group) == null ? void 0 : W.trim()) || "可用变量", Je = Y.get(fe) ?? [];
        Je.push(j), Y.set(fe, Je);
      }
      return Array.from(Y.entries());
    }, [c, De]), Qe = [oe, E || y ? Ce : void 0].filter(Boolean).join(" ") || void 0, Ee = ce && ee && H.length > 0;
    return /* @__PURE__ */ C("div", { className: F("w-full space-y-1", Le), children: [
      z !== void 0 && /* @__PURE__ */ C(
        "label",
        {
          htmlFor: ne,
          className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: [
            /* @__PURE__ */ o("span", { children: z }),
            w && /* @__PURE__ */ o("span", { className: "text-[var(--abc-danger)]", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ C(
        "div",
        {
          "data-slot": "template-variable-input",
          "data-motion": be,
          "data-multiline": l ? "true" : "false",
          "data-invalid": Ie ? "true" : "false",
          className: F(
            dr,
            "nodrag nopan relative flex flex-col px-2.5 py-1.5",
            l ? Xr[ve] : jr[ve],
            Ie && "border-[var(--abc-danger)] focus-within:border-[var(--abc-danger)] focus-within:ring-[var(--abc-danger)]/20",
            I && "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] cursor-not-allowed",
            he
          ),
          children: [
            St && /* @__PURE__ */ o(
              "div",
              {
                "data-template-chips": "",
                className: F(
                  "flex flex-wrap items-center gap-1.5",
                  Ae.length > 0 && "mb-1.5",
                  i && !l && "pr-8"
                ),
                children: Ae.map((R) => {
                  const A = Ct.get(R.key), Y = (A == null ? void 0 : A.sampleValue) ?? (A == null ? void 0 : A.label), W = /* @__PURE__ */ C(
                    "span",
                    {
                      "data-template-chip": R.key,
                      className: "inline-flex max-w-full items-center gap-1 rounded-full bg-[var(--abc-flow-chip-bg)] px-2 py-0.5 text-[11px] font-medium leading-tight text-[var(--abc-flow-chip-fg)] shadow-2xs",
                      children: [
                        /* @__PURE__ */ o("span", { className: "truncate font-mono", children: R.key }),
                        u && Y && Y !== R.key && /* @__PURE__ */ o("span", { className: "max-w-[110px] truncate rounded-full bg-[var(--abc-flow-chip-sub-bg)] px-1.5 py-0 text-[10px] font-normal text-[var(--abc-flow-chip-sub-fg)]", children: Y }),
                        e && ee && /* @__PURE__ */ o(
                          "button",
                          {
                            type: "button",
                            "aria-label": `移除变量 ${R.key}`,
                            onClick: (j) => {
                              j.stopPropagation(), Rt(R);
                            },
                            className: "inline-flex h-3.5 w-3.5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--abc-flow-chip-sub-bg)] text-[var(--abc-flow-chip-fg)] transition-colors hover:bg-[var(--abc-flow-chip-close-hover)] focus:outline-none focus-visible:ring-1 focus-visible:ring-current",
                            children: /* @__PURE__ */ o(We, { className: "h-2.5 w-2.5" })
                          }
                        )
                      ]
                    },
                    `${R.key}_${R.occurrenceIndex}`
                  );
                  return A != null && A.description ? /* @__PURE__ */ o(
                    ft,
                    {
                      content: A.description,
                      placement: "top",
                      delay: 100,
                      children: W
                    },
                    `${R.key}_${R.occurrenceIndex}`
                  ) : W;
                })
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex w-full items-center", children: l ? /* @__PURE__ */ o(
              "textarea",
              {
                ref: Ue,
                id: ne,
                name: n,
                rows: f,
                value: H,
                placeholder: P,
                disabled: I,
                readOnly: B,
                required: w,
                "aria-label": X,
                "aria-labelledby": K,
                "aria-describedby": Qe,
                "aria-invalid": Ie || void 0,
                onChange: (R) => {
                  J(R.target.value), Q();
                },
                onSelect: Q,
                onKeyUp: Q,
                onClick: Q,
                onFocus: D,
                onBlur: (R) => {
                  Q(), L == null || L(R);
                },
                className: F(
                  "w-full resize-y bg-transparent pb-5 pr-8 text-inherit leading-relaxed text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  Z && "font-mono",
                  Ne
                )
              }
            ) : /* @__PURE__ */ o(
              "input",
              {
                ref: Ue,
                id: ne,
                name: n,
                type: "text",
                value: H,
                placeholder: P,
                disabled: I,
                readOnly: B,
                required: w,
                "aria-label": X,
                "aria-labelledby": K,
                "aria-describedby": Qe,
                "aria-invalid": Ie || void 0,
                onChange: (R) => {
                  J(R.target.value), Q();
                },
                onSelect: Q,
                onKeyUp: Q,
                onClick: Q,
                onFocus: D,
                onBlur: (R) => {
                  Q(), L == null || L(R);
                },
                className: F(
                  "w-full bg-transparent text-inherit leading-normal text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  i && (Ee ? "pr-14" : "pr-8"),
                  !i && Ee && "pr-7",
                  Z && "font-mono",
                  Ne
                )
              }
            ) }),
            (Ee || i) && /* @__PURE__ */ C("div", { className: "absolute bottom-1.5 right-1.5 flex items-center gap-1", children: [
              Ee && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  "aria-label": le,
                  onClick: () => {
                    var R;
                    J(""), (R = ze.current) == null || R.focus();
                  },
                  className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  children: /* @__PURE__ */ o(We, { className: "h-3 w-3" })
                }
              ),
              i && /* @__PURE__ */ o(
                "button",
                {
                  ref: Me,
                  type: "button",
                  disabled: !ee,
                  "aria-label": M,
                  "aria-expanded": G,
                  "aria-haspopup": "dialog",
                  "aria-controls": G ? Se : void 0,
                  "data-template-picker-trigger": "",
                  title: M,
                  onMouseDown: (R) => {
                    R.preventDefault(), Q();
                  },
                  onClick: () => {
                    ee && te(!G);
                  },
                  className: F(
                    "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                    ee ? G ? "cursor-pointer border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "cursor-pointer border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/60 hover:text-[var(--abc-primary)]" : "cursor-not-allowed border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] opacity-55"
                  ),
                  children: /* @__PURE__ */ o(Lt, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ]
        }
      ),
      (E || y) && /* @__PURE__ */ o(
        "div",
        {
          id: Ce,
          className: F(
            "text-[11px] leading-snug",
            E ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg-muted)]"
          ),
          children: E ?? y
        }
      ),
      /* @__PURE__ */ o(
        Wr,
        {
          floatingRef: Pe,
          portalContainer: It,
          portalTheme: Et,
          isMounted: qe,
          isVisible: zt,
          popoverId: Se,
          floatingStyle: Mt,
          actualSide: Ft,
          resolvedMotion: be,
          pickerTitle: m,
          pickerTriggerLabel: M,
          pickerPlaceholder: S,
          emptyVariablesText: $,
          searchable: p,
          totalVariablesCount: c.length,
          query: De,
          onQueryChange: He,
          groupedVariables: $t,
          onSelect: Tt,
          popoverClassName: Be
        }
      )
    ] });
  }
);
Yr.displayName = "TemplateVariableInput";
function Te(r) {
  if (r !== void 0)
    return typeof r == "number" ? `${r}px` : r;
}
const Nt = q.forwardRef(
  ({
    title: r,
    description: t,
    icon: s,
    badge: l,
    headerExtra: f,
    tone: c = "slate",
    align: d,
    dashed: e = !0,
    selected: u = !1,
    width: h,
    height: a,
    minWidth: i = 220,
    minHeight: p = 148,
    className: g,
    headerClassName: b,
    bodyClassName: x,
    style: m,
    children: S,
    ...M
  }, $) => {
    const k = q.Children.count(S) > 0, v = d ?? (k ? "top-left" : "center"), N = wt[c], n = {
      width: Te(h),
      height: Te(a),
      minWidth: Te(i),
      minHeight: Te(p),
      ...m
    }, z = v === "center" && !k;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: $,
        "data-tone": c,
        "data-align": v,
        "data-selected": u ? "true" : "false",
        style: n,
        className: F(
          "relative flex flex-col rounded-[var(--abc-radius-xl)] border-[1.5px] transition-[border-color,box-shadow,background-color] duration-[var(--abc-motion-fast,140ms)] ease-out",
          e ? "border-dashed" : "border-solid",
          N.sectionFrame,
          u && "ring-2 ring-[var(--abc-primary)] border-[var(--abc-primary)]",
          z ? "items-center justify-center p-5 text-center" : "p-4 text-left",
          g
        ),
        ...M,
        children: [
          (r !== void 0 || t !== void 0 || s || l || f) && /* @__PURE__ */ C(
            "div",
            {
              className: F(
                z ? "flex max-w-[260px] flex-col items-center gap-1.5" : "flex w-full items-start justify-between gap-2",
                b
              ),
              children: [
                /* @__PURE__ */ C(
                  "div",
                  {
                    className: F(
                      "min-w-0",
                      z ? "flex flex-col items-center gap-1" : "flex-1 space-y-0.5"
                    ),
                    children: [
                      (s || r !== void 0 || l) && /* @__PURE__ */ C(
                        "div",
                        {
                          className: F(
                            "flex items-center gap-1.5",
                            z ? "justify-center" : "justify-start"
                          ),
                          children: [
                            s && /* @__PURE__ */ o("span", { className: F("inline-flex shrink-0 items-center", N.sectionTitle), children: s }),
                            r !== void 0 && /* @__PURE__ */ o(
                              "div",
                              {
                                className: F(
                                  "font-medium leading-snug",
                                  z ? "text-[15px]" : "text-xs font-semibold",
                                  N.sectionTitle
                                ),
                                children: r
                              }
                            ),
                            l && /* @__PURE__ */ o("span", { className: "shrink-0", children: l })
                          ]
                        }
                      ),
                      t !== void 0 && /* @__PURE__ */ o(
                        "p",
                        {
                          className: F(
                            "m-0 text-xs leading-relaxed text-[var(--abc-fg-muted)]",
                            z && "max-w-[240px]"
                          ),
                          children: t
                        }
                      )
                    ]
                  }
                ),
                f && /* @__PURE__ */ o(
                  "div",
                  {
                    className: F(
                      "nodrag nopan shrink-0",
                      z && "absolute right-3 top-3"
                    ),
                    children: f
                  }
                )
              ]
            }
          ),
          k && /* @__PURE__ */ o("div", { className: F("mt-3 min-h-0 flex-1", x), children: S })
        ]
      }
    );
  }
);
Nt.displayName = "FlowSectionFrame";
const bo = ({
  zoomPercent: r,
  onZoomOut: t,
  onZoomReset: s,
  onZoomIn: l,
  onFitView: f,
  onAutoLayout: c,
  showMiniMap: d = !1,
  onToggleMiniMap: e,
  interactionMode: u = "pan",
  onInteractionModeChange: h,
  interactive: a = !0,
  onToggleInteractive: i,
  snapToGrid: p = !1,
  onToggleSnapToGrid: g,
  onUndo: b,
  onRedo: x,
  canUndo: m = !1,
  canRedo: S = !1,
  gesturePreset: M = "default",
  onToggleGesturePreset: $,
  onExportImage: k,
  extraActions: v,
  primaryAction: N,
  labels: n,
  className: z,
  testId: E = "abc-flow-viewport-controls"
}) => {
  const y = !!(h || i || g || $), T = !!(b || x), w = !!(f || c || e || k || v && v.length > 0), I = "h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]";
  return /* @__PURE__ */ C(
    "div",
    {
      "data-slot": "flow-viewport-controls",
      "data-abc-no-press-scale": "",
      "data-testid": E,
      className: F(
        "nodrag nopan flex flex-wrap items-center gap-1 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 p-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur",
        z
      ),
      children: [
        /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.zoomOut) ?? "缩小画布",
            title: (n == null ? void 0 : n.zoomOutTitle) ?? (n == null ? void 0 : n.zoomOut) ?? "缩小画布 (-)",
            onClick: t,
            className: I,
            children: /* @__PURE__ */ o(Bt, { size: 13 })
          }
        ),
        /* @__PURE__ */ C(
          O,
          {
            type: "button",
            variant: "ghost",
            size: "xs",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.zoomReset) ?? "重置画布缩放至 100%",
            title: (n == null ? void 0 : n.zoomResetTitle) ?? (n == null ? void 0 : n.zoomReset) ?? "重置缩放比例 (0)",
            onClick: s,
            className: "h-7 min-w-[44px] px-1.5 font-mono text-[11px] font-medium text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]",
            children: [
              r,
              "%"
            ]
          }
        ),
        /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.zoomIn) ?? "放大画布",
            title: (n == null ? void 0 : n.zoomInTitle) ?? (n == null ? void 0 : n.zoomIn) ?? "放大画布 (+)",
            onClick: l,
            className: I,
            children: /* @__PURE__ */ o(Re, { size: 13 })
          }
        ),
        y && /* @__PURE__ */ C(ge, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          h && /* @__PURE__ */ C(ge, { children: [
            /* @__PURE__ */ o(
              O,
              {
                type: "button",
                variant: u === "pan" ? "secondary" : "ghost",
                size: "icon-sm",
                pressScale: !1,
                "aria-pressed": u === "pan",
                "aria-label": (n == null ? void 0 : n.panMode) ?? "拖拽平移模式",
                title: (n == null ? void 0 : n.panMode) ?? "拖拽平移模式 (Hand)",
                onClick: () => h("pan"),
                className: I,
                children: /* @__PURE__ */ o(Dt, { size: 13 })
              }
            ),
            /* @__PURE__ */ o(
              O,
              {
                type: "button",
                variant: u === "select" ? "secondary" : "ghost",
                size: "icon-sm",
                pressScale: !1,
                "aria-pressed": u === "select",
                "aria-label": (n == null ? void 0 : n.selectMode) ?? "框选多节点模式",
                title: (n == null ? void 0 : n.selectMode) ?? "左键框选模式 (Select)",
                onClick: () => h("select"),
                className: I,
                children: /* @__PURE__ */ o(Pt, { size: 13 })
              }
            )
          ] }),
          i && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: a ? "ghost" : "secondary",
              size: "icon-sm",
              pressScale: !1,
              "aria-pressed": !a,
              "aria-label": a ? (n == null ? void 0 : n.lockCanvas) ?? "锁定画布禁止编辑" : (n == null ? void 0 : n.unlockCanvas) ?? "解锁画布恢复编辑",
              title: a ? (n == null ? void 0 : n.lockCanvas) ?? "锁定画布" : (n == null ? void 0 : n.unlockCanvas) ?? "已锁定，点击解锁",
              onClick: i,
              className: I,
              children: a ? /* @__PURE__ */ o(At, { size: 13 }) : /* @__PURE__ */ o(Ot, { size: 13 })
            }
          ),
          g && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: p ? "secondary" : "ghost",
              size: "icon-sm",
              pressScale: !1,
              "aria-pressed": p,
              "aria-label": (n == null ? void 0 : n.snapToGrid) ?? "开关网格磁吸对齐",
              title: (n == null ? void 0 : n.snapToGrid) ?? "网格磁吸对齐 (Snap to Grid)",
              onClick: g,
              className: I,
              children: /* @__PURE__ */ o(Vt, { size: 13 })
            }
          ),
          $ && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: M === "figma" ? "secondary" : "ghost",
              size: "icon-sm",
              pressScale: !1,
              "aria-pressed": M === "figma",
              "aria-label": (n == null ? void 0 : n.gesturePreset) ?? "切换触控板平移手势 (Figma 模式)",
              title: M === "figma" ? (n == null ? void 0 : n.gesturePreset) ?? "当前：Figma 触控板双指平移 + 捏合缩放" : (n == null ? void 0 : n.gesturePreset) ?? "切换至 Figma 触控板平移手势",
              onClick: $,
              className: I,
              children: /* @__PURE__ */ o(_t, { size: 13 })
            }
          )
        ] }),
        T && /* @__PURE__ */ C(ge, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          b && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: !m,
              "aria-label": (n == null ? void 0 : n.undo) ?? "撤销操作",
              title: (n == null ? void 0 : n.undo) ?? "撤销 (⌘Z)",
              onClick: b,
              className: I,
              children: /* @__PURE__ */ o(Wt, { size: 13 })
            }
          ),
          x && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: !S,
              "aria-label": (n == null ? void 0 : n.redo) ?? "重做操作",
              title: (n == null ? void 0 : n.redo) ?? "重做 (⇧⌘Z)",
              onClick: x,
              className: I,
              children: /* @__PURE__ */ o(jt, { size: 13 })
            }
          )
        ] }),
        w && /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
        f && /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.fitView) ?? "自适应居中视口",
            title: (n == null ? void 0 : n.fitViewTitle) ?? (n == null ? void 0 : n.fitView) ?? "自适应居中视口",
            onClick: f,
            className: I,
            children: /* @__PURE__ */ o(Xt, { size: 13 })
          }
        ),
        c && /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.autoLayout) ?? "一键整理排版",
            title: (n == null ? void 0 : n.autoLayoutTitle) ?? (n == null ? void 0 : n.autoLayout) ?? "一键整理排版",
            onClick: c,
            className: I,
            children: /* @__PURE__ */ o(Yt, { size: 13 })
          }
        ),
        e && /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: d ? "secondary" : "ghost",
            size: "icon-sm",
            pressScale: !1,
            "data-testid": "toggle-minimap-btn",
            "aria-pressed": d,
            "aria-label": (n == null ? void 0 : n.toggleMiniMap) ?? "开关缩略图导航",
            title: d ? (n == null ? void 0 : n.hideMiniMapTitle) ?? "隐藏缩略图" : (n == null ? void 0 : n.showMiniMapTitle) ?? "显示缩略图",
            onClick: e,
            className: I,
            children: /* @__PURE__ */ o(Kt, { size: 13 })
          }
        ),
        k && /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "data-testid": "export-flow-image-btn",
            "aria-label": (n == null ? void 0 : n.exportImage) ?? "导出流程图矢量图像 (SVG)",
            title: (n == null ? void 0 : n.exportImage) ?? "导出完整画布图像 (SVG)",
            onClick: k,
            className: I,
            children: /* @__PURE__ */ o(Zt, { size: 13 })
          }
        ),
        v == null ? void 0 : v.map((B) => /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: B.active ? "secondary" : "ghost",
            size: "icon-sm",
            pressScale: !1,
            disabled: B.disabled,
            "data-testid": B.testId,
            "aria-label": B.label,
            title: B.title ?? B.label,
            onClick: B.onClick,
            className: I,
            children: B.icon
          },
          B.key
        )),
        N && /* @__PURE__ */ C(ge, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          /* @__PURE__ */ C(
            O,
            {
              type: "button",
              variant: "primary",
              size: "xs",
              disabled: N.disabled,
              "data-testid": N.testId,
              "aria-label": N.ariaLabel ?? N.label,
              onClick: N.onClick,
              className: "h-7 gap-1 rounded-lg px-2.5 text-[11px] font-semibold",
              children: [
                N.icon ?? /* @__PURE__ */ o(Re, { size: 12 }),
                /* @__PURE__ */ o("span", { children: N.label })
              ]
            }
          )
        ] })
      ]
    }
  );
}, rt = {
  default: {
    stroke: "var(--abc-flow-edge-default-stroke, #94a3b8)",
    labelClass: "border-[var(--abc-flow-edge-default-pill-border)] bg-[var(--abc-flow-edge-default-pill-bg)] text-[var(--abc-flow-edge-default-pill-fg)]"
  },
  primary: {
    stroke: "var(--abc-flow-edge-primary-stroke, #6366f1)",
    labelClass: "border-[var(--abc-flow-edge-primary-pill-border)] bg-[var(--abc-flow-edge-primary-pill-bg)] text-[var(--abc-flow-edge-primary-pill-fg)]"
  },
  success: {
    stroke: "var(--abc-flow-edge-success-stroke, #22c55e)",
    labelClass: "border-[var(--abc-flow-edge-success-pill-border)] bg-[var(--abc-flow-edge-success-pill-bg)] text-[var(--abc-flow-edge-success-pill-fg)]"
  },
  warning: {
    stroke: "var(--abc-flow-edge-warning-stroke, #f59e0b)",
    labelClass: "border-[var(--abc-flow-edge-warning-pill-border)] bg-[var(--abc-flow-edge-warning-pill-bg)] text-[var(--abc-flow-edge-warning-pill-fg)]"
  },
  danger: {
    stroke: "var(--abc-flow-edge-danger-stroke, #e11d48)",
    labelClass: "border-[var(--abc-flow-edge-danger-pill-border)] bg-[var(--abc-flow-edge-danger-pill-bg)] text-[var(--abc-flow-edge-danger-pill-fg)]"
  },
  muted: {
    stroke: "var(--abc-flow-edge-muted-stroke, #cbd5e1)",
    labelClass: "border-[var(--abc-flow-edge-muted-pill-border)] bg-[var(--abc-flow-edge-muted-pill-bg)] text-[var(--abc-flow-edge-muted-pill-fg)]"
  }
}, Kr = typeof SVGElement < "u" && typeof SVGElement.prototype.getBBox == "function", mo = ({
  id: r,
  sourceX: t,
  sourceY: s,
  targetX: l,
  targetY: f,
  sourcePosition: c,
  targetPosition: d,
  data: e,
  selected: u,
  markerStart: h,
  markerEnd: a,
  selectedStroke: i = "#4f46e5",
  renderActionMenu: p,
  renderToolbar: g
}) => {
  const [b, x] = pe(!1), m = (e == null ? void 0 : e.tone) ?? "default", S = (e == null ? void 0 : e.routeStyle) ?? "bezier", M = (e == null ? void 0 : e.autoAvoidBackward) ?? !0, $ = l < t + 24;
  let k, v, N;
  S === "straight" ? [k, v, N] = Ke({ sourceX: t, sourceY: s, targetX: l, targetY: f }) : S === "step" ? [k, v, N] = ye({
    sourceX: t,
    sourceY: s,
    sourcePosition: c,
    targetX: l,
    targetY: f,
    targetPosition: d,
    borderRadius: 0,
    offset: $ ? 34 : 20
  }) : S === "simplebezier" ? [k, v, N] = pt({
    sourceX: t,
    sourceY: s,
    sourcePosition: c,
    targetX: l,
    targetY: f,
    targetPosition: d
  }) : S === "smoothstep" || M && $ ? [k, v, N] = ye({
    sourceX: t,
    sourceY: s,
    sourcePosition: c,
    targetX: l,
    targetY: f,
    targetPosition: d,
    borderRadius: 16,
    offset: $ ? 34 : 20
  }) : [k, v, N] = Ze({
    sourceX: t,
    sourceY: s,
    sourcePosition: c,
    targetX: l,
    targetY: f,
    targetPosition: d,
    curvature: 0.35
  });
  const n = rt[m] ?? rt.default, z = u ? Math.max(2.2, ((e == null ? void 0 : e.strokeWidth) ?? 1.7) + 0.5) : (e == null ? void 0 : e.strokeWidth) ?? (m === "muted" ? 1.25 : 1.7), E = p ?? (e == null ? void 0 : e.renderActionMenu), y = g ?? (e == null ? void 0 : e.renderToolbar), T = !!(e != null && e.showActionTrigger && (E || e != null && e.onActionClick));
  return /* @__PURE__ */ C(ge, { children: [
    /* @__PURE__ */ C("g", { "data-testid": e == null ? void 0 : e.testId, "data-route-style": S, children: [
      /* @__PURE__ */ o(
        ht,
        {
          id: r,
          path: k,
          markerStart: h,
          markerEnd: a,
          className: e != null && e.animated ? "abc-flow-edge-animated" : void 0,
          style: {
            stroke: u ? i : n.stroke,
            strokeWidth: z,
            strokeDasharray: e != null && e.dashed ? "5 4" : void 0,
            opacity: e != null && e.dimmed ? 0.55 : 0.92,
            transition: "stroke 150ms ease, stroke-width 150ms ease"
          }
        }
      ),
      (e == null ? void 0 : e.svgLabel) && !(e != null && e.label) && (Kr ? /* @__PURE__ */ o(
        bt,
        {
          x: v,
          y: N,
          label: e.svgLabel,
          labelStyle: {
            fill: "var(--abc-fg-secondary, #334155)",
            fontSize: 10,
            fontWeight: 600
          },
          labelShowBg: !0,
          labelBgPadding: [6, 3],
          labelBgBorderRadius: 999,
          labelBgStyle: {
            fill: "var(--abc-bg-surface, #ffffff)",
            stroke: "var(--abc-border, #cbd5e1)",
            strokeWidth: 1
          }
        }
      ) : /* @__PURE__ */ o(
        "text",
        {
          x: v,
          y: N,
          textAnchor: "middle",
          dominantBaseline: "central",
          fontSize: 10,
          fontWeight: 600,
          fill: "var(--abc-fg-secondary, #334155)",
          children: e.svgLabel
        }
      ))
    ] }),
    y && /* @__PURE__ */ o(
      ur,
      {
        edgeId: r,
        x: v,
        y: N - 26,
        isVisible: !!u,
        alignX: "center",
        alignY: "bottom",
        children: /* @__PURE__ */ o(
          "div",
          {
            onClick: (w) => w.stopPropagation(),
            onMouseDown: (w) => w.stopPropagation(),
            className: "nodrag nopan",
            children: y(r)
          }
        )
      }
    ),
    ((e == null ? void 0 : e.label) || T) && /* @__PURE__ */ o(fr, { children: /* @__PURE__ */ C(
      "div",
      {
        style: {
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${v}px,${N}px)`,
          pointerEvents: "all"
        },
        className: "nodrag nopan z-10 flex items-center gap-1",
        children: [
          (e == null ? void 0 : e.label) && /* @__PURE__ */ o(
            "span",
            {
              className: F(
                "select-none rounded-full border px-2 py-0.5 text-[10px] font-medium leading-tight shadow-2xs",
                n.labelClass
              ),
              children: e.label
            }
          ),
          T && /* @__PURE__ */ C("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              O,
              {
                type: "button",
                variant: "outline",
                size: "icon-sm",
                pressScale: !1,
                "aria-label": (e == null ? void 0 : e.actionAriaLabel) ?? "连线操作",
                title: (e == null ? void 0 : e.actionAriaLabel) ?? "连线操作",
                onClick: (w) => {
                  var I;
                  w.stopPropagation(), E ? x((B) => !B) : (I = e == null ? void 0 : e.onActionClick) == null || I.call(e, r);
                },
                className: F(
                  "h-5 w-5 rounded-full border p-0 shadow-xs transition",
                  b ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 text-[var(--abc-fg-muted)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]"
                ),
                children: /* @__PURE__ */ o(Re, { size: 11 })
              }
            ),
            b && E && /* @__PURE__ */ o(
              "div",
              {
                onClick: (w) => w.stopPropagation(),
                className: "absolute left-1/2 top-6 z-50 -translate-x-1/2",
                children: E({ close: () => x(!1) })
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}, Zr = typeof SVGElement < "u" && typeof SVGElement.prototype.getBBox == "function", ot = {
  default: "var(--abc-flow-edge-default-stroke, #94a3b8)",
  primary: "var(--abc-flow-edge-primary-stroke, #6366f1)",
  success: "var(--abc-flow-edge-success-stroke, #22c55e)",
  warning: "var(--abc-flow-edge-warning-stroke, #f59e0b)",
  danger: "var(--abc-flow-edge-danger-stroke, #e11d48)",
  muted: "var(--abc-flow-edge-muted-stroke, #cbd5e1)"
};
function nt(r, t) {
  const s = (r.measured.width ?? 200) / 2, l = (r.measured.height ?? 90) / 2, f = r.internals.positionAbsolute.x + s, c = r.internals.positionAbsolute.y + l, d = (t.measured.width ?? 200) / 2, e = (t.measured.height ?? 90) / 2, u = t.internals.positionAbsolute.x + d, h = t.internals.positionAbsolute.y + e, a = (u - f) / (2 * s) - (h - c) / (2 * l), i = (u - f) / (2 * s) + (h - c) / (2 * l), p = 1 / (Math.abs(a) + Math.abs(i) || 1), g = p * a, b = p * i;
  return {
    x: s * (g + b) + f,
    y: l * (-g + b) + c
  };
}
function at(r, t) {
  const s = Math.round(r.internals.positionAbsolute.x), l = Math.round(r.internals.positionAbsolute.y), f = Math.round(t.x), c = Math.round(t.y), d = r.measured.width ?? 200, e = r.measured.height ?? 90;
  return f <= s + 1 ? ae.Left : f >= s + d - 1 ? ae.Right : c <= l + 1 ? ae.Top : c >= l + e - 1 ? ae.Bottom : ae.Top;
}
const vo = ({
  id: r,
  source: t,
  target: s,
  sourceX: l,
  sourceY: f,
  targetX: c,
  targetY: d,
  sourcePosition: e,
  targetPosition: u,
  markerStart: h,
  markerEnd: a,
  data: i,
  selected: p,
  selectedStroke: g = "var(--abc-primary, #4f46e5)"
}) => {
  const b = et(t), x = et(s);
  let m = l, S = f, M = c, $ = d, k = e, v = u;
  if (b && x) {
    const I = nt(b, x), B = nt(x, b);
    m = I.x, S = I.y, M = B.x, $ = B.y, k = at(b, I), v = at(x, B);
  }
  const N = (i == null ? void 0 : i.routeStyle) ?? "bezier", n = (i == null ? void 0 : i.tone) ?? "primary";
  let z, E, y;
  N === "straight" ? [z, E, y] = Ke({ sourceX: m, sourceY: S, targetX: M, targetY: $ }) : N === "smoothstep" ? [z, E, y] = ye({
    sourceX: m,
    sourceY: S,
    sourcePosition: k,
    targetX: M,
    targetY: $,
    targetPosition: v,
    borderRadius: 14
  }) : [z, E, y] = Ze({
    sourceX: m,
    sourceY: S,
    sourcePosition: k,
    targetX: M,
    targetY: $,
    targetPosition: v
  });
  const T = p ? g : ot[n] ?? ot.primary, w = p ? Math.max(2.2, ((i == null ? void 0 : i.strokeWidth) ?? 1.8) + 0.5) : (i == null ? void 0 : i.strokeWidth) ?? 1.8;
  return /* @__PURE__ */ C("g", { "data-slot": "flow-floating-edge", "data-testid": i == null ? void 0 : i.testId, "data-route-style": N, children: [
    /* @__PURE__ */ o(
      ht,
      {
        id: r,
        path: z,
        markerStart: h,
        markerEnd: a,
        className: i != null && i.animated ? "abc-flow-edge-animated" : void 0,
        style: {
          stroke: T,
          strokeWidth: w,
          strokeDasharray: i != null && i.dashed ? "6 4" : void 0,
          transition: "stroke 150ms ease, stroke-width 150ms ease"
        }
      }
    ),
    (i == null ? void 0 : i.label) && (Zr ? /* @__PURE__ */ o(
      bt,
      {
        x: E,
        y,
        label: i.label,
        labelStyle: {
          fill: "var(--abc-fg, #0f172a)",
          fontSize: 10.5,
          fontWeight: 600
        },
        labelShowBg: !0,
        labelBgPadding: [6, 3],
        labelBgBorderRadius: 999,
        labelBgStyle: {
          fill: "var(--abc-bg-surface, #ffffff)",
          stroke: "var(--abc-border, #cbd5e1)",
          strokeWidth: 1
        }
      }
    ) : /* @__PURE__ */ o(
      "text",
      {
        x: E,
        y,
        textAnchor: "middle",
        dominantBaseline: "central",
        fontSize: 10.5,
        fontWeight: 600,
        fill: "var(--abc-fg, #0f172a)",
        children: i.label
      }
    ))
  ] });
}, xo = ae, wo = pr, yo = gr, Gr = {
  "node.a11yDescription.default": "按回车或空格选中节点，使用方向键微调位置，按退格键删除。",
  "node.a11yDescription.keyboardDisabled": "按回车或空格选中节点，按退格键删除。",
  "node.a11yDescription.ariaLiveMessage": ({ direction: r, x: t, y: s }) => `已向${r}移动节点至坐标 x=${Math.round(t)}, y=${Math.round(s)}`,
  "edge.a11yDescription.default": "按回车或空格选中连线，按退格键删除。",
  "controls.ariaLabel": "画布视口控制栏",
  "controls.fitView.ariaLabel": "自适应居中画布",
  "controls.interactive.ariaLabel": "切换画布编辑锁定",
  "controls.zoomIn.ariaLabel": "放大画布",
  "controls.zoomOut.ariaLabel": "缩小画布",
  "minimap.ariaLabel": "画布缩略图导航",
  "handle.ariaLabel": "节点连接端口"
}, Hr = {
  "controls.ariaLabel": "Canvas viewport controls",
  "controls.fitView.ariaLabel": "Fit canvas to view",
  "controls.interactive.ariaLabel": "Toggle canvas edit lock",
  "controls.zoomIn.ariaLabel": "Zoom in canvas",
  "controls.zoomOut.ariaLabel": "Zoom out canvas",
  "minimap.ariaLabel": "Canvas minimap navigation",
  "handle.ariaLabel": "Node connection handle"
};
function ie(r, t = 220, s = 110) {
  var c, d, e, u;
  const l = ((c = r.measured) == null ? void 0 : c.width) ?? (typeof r.width == "number" ? r.width : void 0) ?? (typeof ((d = r.style) == null ? void 0 : d.width) == "number" ? r.style.width : void 0) ?? t, f = ((e = r.measured) == null ? void 0 : e.height) ?? (typeof r.height == "number" ? r.height : void 0) ?? (typeof ((u = r.style) == null ? void 0 : u.height) == "number" ? r.style.height : void 0) ?? s;
  return { width: l, height: f };
}
function No(r, t, s) {
  const l = new Set(t), f = r.filter((e) => l.has(e.id));
  if (f.length < 2) return [...r];
  const c = f.map((e) => {
    const { width: u, height: h } = ie(e);
    return {
      node: e,
      x: e.position.x,
      y: e.position.y,
      width: u,
      height: h,
      right: e.position.x + u,
      bottom: e.position.y + h,
      cx: e.position.x + u / 2,
      cy: e.position.y + h / 2
    };
  }), d = /* @__PURE__ */ new Map();
  if (s === "left") {
    const e = Math.min(...c.map((u) => u.x));
    for (const u of c) d.set(u.node.id, { x: Math.round(e), y: u.y });
  } else if (s === "right") {
    const e = Math.max(...c.map((u) => u.right));
    for (const u of c) d.set(u.node.id, { x: Math.round(e - u.width), y: u.y });
  } else if (s === "centerX") {
    const e = Math.min(...c.map((a) => a.x)), u = Math.max(...c.map((a) => a.right)), h = (e + u) / 2;
    for (const a of c) d.set(a.node.id, { x: Math.round(h - a.width / 2), y: a.y });
  } else if (s === "top") {
    const e = Math.min(...c.map((u) => u.y));
    for (const u of c) d.set(u.node.id, { x: u.x, y: Math.round(e) });
  } else if (s === "bottom") {
    const e = Math.max(...c.map((u) => u.bottom));
    for (const u of c) d.set(u.node.id, { x: u.x, y: Math.round(e - u.height) });
  } else if (s === "centerY") {
    const e = Math.min(...c.map((a) => a.y)), u = Math.max(...c.map((a) => a.bottom)), h = (e + u) / 2;
    for (const a of c) d.set(a.node.id, { x: a.x, y: Math.round(h - a.height / 2) });
  } else if (s === "distributeH" && c.length >= 3) {
    const e = [...c].sort((g, b) => g.x - b.x), u = e[0], h = e[e.length - 1], a = e.reduce((g, b) => g + b.width, 0), i = (h.right - u.x - a) / (e.length - 1);
    let p = u.x;
    for (const g of e)
      d.set(g.node.id, { x: Math.round(p), y: g.y }), p += g.width + i;
  } else if (s === "distributeV" && c.length >= 3) {
    const e = [...c].sort((g, b) => g.y - b.y), u = e[0], h = e[e.length - 1], a = e.reduce((g, b) => g + b.height, 0), i = (h.bottom - u.y - a) / (e.length - 1);
    let p = u.y;
    for (const g of e)
      d.set(g.node.id, { x: g.x, y: Math.round(p) }), p += g.height + i;
  }
  return r.map((e) => {
    const u = d.get(e.id);
    return u ? { ...e, position: u } : e;
  });
}
function ko(r, t, s, l = {}) {
  const f = l.maxDistance ?? 170, c = new Set(l.ignoreTypes ?? ["flow-group", "sectionFrameNode"]);
  if (r.type && c.has(r.type)) return null;
  const d = ie(r), e = r.position.x + d.width / 2, u = r.position.y + d.height / 2;
  let h = null;
  for (const a of t) {
    if (a.id === r.id || a.type && c.has(a.type) || a.parentId !== r.parentId) continue;
    const i = ie(a), p = a.position.x + i.width / 2, g = a.position.y + i.height / 2, b = Math.hypot(e - p, u - g);
    if (b > f) continue;
    const x = p <= e ? a.id : r.id, m = p <= e ? r.id : a.id;
    s.some(
      (M) => M.source === x && M.target === m || M.source === m && M.target === x
    ) || (!h || b < h.distance) && (h = { source: x, target: m, distance: b });
  }
  return h;
}
function Co(r, t, s = ["flow-group"]) {
  const l = new Set(s), f = new Map(t.map((p) => [p.id, p]));
  let c = r.position.x, d = r.position.y, e = r.parentId;
  const u = /* @__PURE__ */ new Set();
  for (; e && !u.has(e); ) {
    u.add(e);
    const p = f.get(e);
    if (!p) break;
    c += p.position.x, d += p.position.y, e = p.parentId;
  }
  const h = ie(r), a = c + h.width / 2, i = d + h.height / 2;
  for (const p of t) {
    if (p.id === r.id || !p.type || !l.has(p.type)) continue;
    const { width: g, height: b } = ie(p, 360, 240), x = p.position.x, m = p.position.y;
    if (a >= x && a <= x + g && i >= m && i <= m + b)
      return {
        groupId: p.id,
        relativePosition: {
          x: Math.max(16, Math.round(c - x)),
          y: Math.max(44, Math.round(d - m))
        }
      };
  }
  return {
    groupId: null,
    relativePosition: {
      x: Math.round(c),
      y: Math.round(d)
    }
  };
}
function Ur(r, t, s, l = { x: 40, y: 40 }) {
  const f = new Set(s);
  if (f.size === 0) return { nodes: [], edges: [], idMap: {} };
  for (const a of r)
    a.parentId && f.has(a.parentId) && f.add(a.id);
  const c = Date.now().toString(36), d = {};
  let e = 0;
  for (const a of r)
    f.has(a.id) && (e += 1, d[a.id] = `${a.id}-copy-${c}-${e}`);
  const u = r.filter((a) => f.has(a.id)).map((a) => {
    const i = a.parentId && d[a.parentId] ? d[a.parentId] : void 0;
    return {
      ...a,
      id: d[a.id],
      parentId: i ?? a.parentId,
      selected: !0,
      position: i ? { ...a.position } : { x: Math.round(a.position.x + l.x), y: Math.round(a.position.y + l.y) },
      data: a.data ? { ...a.data } : a.data
    };
  }), h = t.filter((a) => !!(d[a.source] && d[a.target])).map((a, i) => ({
    ...a,
    id: `${a.id}-copy-${c}-${i + 1}`,
    source: d[a.source],
    target: d[a.target],
    selected: !0,
    data: a.data ? { ...a.data } : a.data
  }));
  return { nodes: u, edges: h, idMap: d };
}
function qr(r, t = {}) {
  const s = t.width ?? 1280, l = t.height ?? 760, f = t.padding ?? 0.14, c = t.minZoom ?? 0.25, d = t.maxZoom ?? 2, e = hr(r), u = e.width > 0 && e.height > 0 ? e : { x: 0, y: 0, width: s, height: l };
  return {
    viewport: br(
      u,
      s,
      l,
      c,
      d,
      f
    ),
    bounds: u,
    imageWidth: s,
    imageHeight: l
  };
}
function So(r, t, s = {}) {
  const { viewport: l, imageWidth: f, imageHeight: c } = qr(r, {
    width: s.width ?? 1280,
    height: s.height ?? 720
  }), d = !!s.dark, e = s.backgroundColor ?? (d ? "#0b101b" : "#f8fafc"), u = d ? "#141b2d" : "#ffffff", h = d ? "#334155" : "#cbd5e1", a = d ? "#f1f5f9" : "#0f172a", i = d ? "#94a3b8" : "#64748b", p = d ? "#64748b" : "#94a3b8", g = (k) => k.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), b = new Map(r.map((k) => [k.id, k])), x = (k) => {
    let v = k.position.x, N = k.position.y, n = k.parentId;
    const z = /* @__PURE__ */ new Set();
    for (; n && !z.has(n); ) {
      z.add(n);
      const E = b.get(n);
      if (!E) break;
      v += E.position.x, N += E.position.y, n = E.parentId;
    }
    return { x: v, y: N };
  }, m = t.map((k) => {
    const v = b.get(k.source), N = b.get(k.target);
    if (!v || !N) return "";
    const n = x(v), z = x(N), E = ie(v), y = ie(N), T = n.x + E.width, w = n.y + E.height / 2, I = z.x, B = z.y + y.height / 2, P = (T + I) / 2;
    return `<path d="M ${T} ${w} C ${P} ${w}, ${P} ${B}, ${I} ${B}" fill="none" stroke="${p}" stroke-width="2" />`;
  }).join(""), S = r.map((k) => {
    var T, w;
    const v = x(k), { width: N, height: n } = ie(k), z = ((T = k.data) == null ? void 0 : T.title) ?? ((w = k.data) == null ? void 0 : w.label) ?? k.id, E = g(String(z).slice(0, 36));
    return k.type === "flow-group" || k.type === "sectionFrameNode" ? `<g transform="translate(${v.x}, ${v.y})">
          <rect width="${N}" height="${n}" rx="14" fill="none" stroke="${h}" stroke-width="1.5" stroke-dasharray="6 4" />
          <text x="14" y="24" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="600" fill="${i}">${E}</text>
        </g>` : `<g transform="translate(${v.x}, ${v.y})">
        <rect width="${N}" height="${n}" rx="12" fill="${u}" stroke="${h}" stroke-width="1.5" />
        <text x="14" y="28" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="${a}">${E}</text>
        <text x="14" y="48" font-family="monospace" font-size="10.5" fill="${i}">${g(k.id)}</text>
      </g>`;
  }).join(""), M = s.title ? `<text x="20" y="28" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="${i}">${g(s.title)}</text>` : "", $ = `<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${c}" viewBox="0 0 ${f} ${c}">
    <rect width="100%" height="100%" fill="${e}" />
    ${M}
    <g transform="translate(${l.x.toFixed(1)}, ${l.y.toFixed(1)}) scale(${l.zoom.toFixed(3)})">
      ${m}
      ${S}
    </g>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent($)}`;
}
const Qr = ({
  fromX: r,
  fromY: t,
  toX: s,
  toY: l,
  fromPosition: f,
  toPosition: c,
  connectionLineType: d = xe.Bezier,
  connectionStatus: e,
  defaultStroke: u = "var(--abc-primary, #4f46e5)",
  validStroke: h = "var(--abc-flow-edge-success-stroke, #22c55e)",
  invalidStroke: a = "var(--abc-flow-edge-danger-stroke, #e11d48)"
}) => {
  const i = {
    sourceX: r,
    sourceY: t,
    sourcePosition: f,
    targetX: s,
    targetY: l,
    targetPosition: c
  };
  let p = "";
  d === xe.Straight ? [p] = Ke(i) : d === xe.Step ? [p] = ye({ ...i, borderRadius: 0 }) : d === xe.SmoothStep ? [p] = ye({ ...i, borderRadius: 14 }) : d === xe.SimpleBezier ? [p] = pt(i) : [p] = Ze(i);
  const g = e === "valid" ? h : e === "invalid" ? a : u;
  return /* @__PURE__ */ C("g", { "data-slot": "flow-connection-line", "data-status": e ?? "idle", children: [
    /* @__PURE__ */ o(
      "path",
      {
        fill: "none",
        stroke: g,
        strokeWidth: 2,
        strokeDasharray: "6 4",
        className: "abc-flow-edge-animated",
        d: p
      }
    ),
    /* @__PURE__ */ o(
      "circle",
      {
        cx: s,
        cy: l,
        r: 4.5,
        fill: "var(--abc-bg-surface, #ffffff)",
        stroke: g,
        strokeWidth: 2
      }
    )
  ] });
}, st = {
  blue: "#3b82f6",
  green: "#10b981",
  amber: "#f59e0b",
  rose: "#f43f5e",
  slate: "#64748b"
}, Jr = ({
  id: r,
  x: t,
  y: s,
  width: l,
  height: f,
  borderRadius: c = 6,
  color: d,
  selected: e,
  onClick: u
}) => {
  var S;
  const a = mr().find((M) => M.id === r), i = a == null ? void 0 : a.data, p = (a == null ? void 0 : a.type) === "flow-group" || (a == null ? void 0 : a.type) === "sectionFrameNode", g = i == null ? void 0 : i.tone, b = g && g in st ? st[g] : d ?? "#94a3b8", x = (i == null ? void 0 : i.status) ?? ((S = i == null ? void 0 : i.execution) == null ? void 0 : S.status), m = x === "running" || x === "queued" ? "#3b82f6" : x === "failed" || x === "error" ? "#f43f5e" : x === "completed" || x === "succeeded" || x === "success" ? "#10b981" : null;
  return /* @__PURE__ */ C(
    "g",
    {
      "data-slot": "flow-minimap-node",
      onClick: u ? (M) => u(M, r) : void 0,
      style: { cursor: u ? "pointer" : void 0 },
      children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: t,
            y: s,
            width: Math.max(4, l),
            height: Math.max(4, f),
            rx: c,
            ry: c,
            fill: p ? "transparent" : b,
            fillOpacity: p ? 0 : e ? 0.92 : 0.72,
            stroke: e ? "var(--abc-primary, #4f46e5)" : b,
            strokeWidth: e ? 4 : p ? 2.5 : 1.5,
            strokeDasharray: p ? "8 5" : void 0
          }
        ),
        m && l >= 28 && f >= 20 && /* @__PURE__ */ o(
          "circle",
          {
            cx: t + l - 12,
            cy: s + 12,
            r: 5.5,
            fill: m,
            stroke: "var(--abc-bg-surface, #ffffff)",
            strokeWidth: 2
          }
        )
      ]
    }
  );
}, eo = ({
  horizontalLine: r,
  verticalLine: t,
  showOriginBadge: s = !1,
  children: l,
  className: f
}) => /* @__PURE__ */ o(vr, { children: /* @__PURE__ */ C(
  "div",
  {
    "data-slot": "flow-viewport-overlay",
    className: F("pointer-events-none relative", f),
    children: [
      typeof r == "number" && /* @__PURE__ */ o(
        "div",
        {
          "data-testid": "flow-helper-line-horizontal",
          style: {
            position: "absolute",
            left: -5e3,
            width: 1e4,
            top: r,
            height: 1
          },
          className: "border-t border-dashed border-[var(--abc-primary)]/85"
        }
      ),
      typeof t == "number" && /* @__PURE__ */ o(
        "div",
        {
          "data-testid": "flow-helper-line-vertical",
          style: {
            position: "absolute",
            top: -5e3,
            height: 1e4,
            left: t,
            width: 1
          },
          className: "border-l border-dashed border-[var(--abc-primary)]/85"
        }
      ),
      s && /* @__PURE__ */ o(
        "div",
        {
          style: { position: "absolute", left: 0, top: 0 },
          className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[9px] text-[var(--abc-fg-muted)] shadow-2xs",
          children: "(0, 0)"
        }
      ),
      l
    ]
  }
) }), zo = ({ children: r }) => /* @__PURE__ */ o(mt, { children: r }), it = {
  blue: "#3b82f6",
  green: "#10b981",
  amber: "#f59e0b",
  rose: "#f43f5e",
  slate: "#64748b"
};
function ct(r, t) {
  const s = r ?? (t ? "dots" : "none");
  return s === "none" ? null : s === "lines" ? Oe.Lines : s === "cross" ? Oe.Cross : Oe.Dots;
}
function Mo({
  withProvider: r = !1,
  containerClassName: t,
  testId: s = "abc-flow-canvas-surface",
  containerRef: l,
  onDragOver: f,
  onDrop: c,
  backgroundVariant: d,
  showDotsBackground: e = !0,
  backgroundGap: u = 18,
  backgroundDotSize: h = 1.25,
  backgroundColor: a = "rgba(148, 163, 184, 0.35)",
  secondaryBackground: i,
  interactionMode: p = "pan",
  gesturePreset: g = "default",
  locale: b = "zh",
  interactive: x = !0,
  helperLines: m,
  leftRailSlot: S,
  topCenterSlot: M,
  topRightSlot: $,
  bottomLeftSlot: k,
  bottomCenterSlot: v,
  bottomRightSlot: N,
  showMiniMap: n = !1,
  enhancedMiniMap: z = !0,
  miniMapClassName: E,
  miniMapProps: y,
  loading: T = !1,
  loadingText: w = "正在加载画布...",
  children: I,
  overlaySlot: B,
  className: P,
  proOptions: _,
  connectionLineComponent: Z,
  nodesDraggable: ce,
  nodesConnectable: le,
  elementsSelectable: de,
  panOnDrag: D,
  panOnScroll: L,
  panOnScrollMode: X,
  zoomOnPinch: K,
  selectionOnDrag: oe,
  selectionMode: he,
  autoPanOnNodeDrag: Le,
  autoPanOnConnect: Ne,
  ariaLabelConfig: Be,
  ...ue
}) {
  const ve = ct(d, e), be = i ? ct(i.variant ?? "lines", !0) : null, ke = p === "select", ne = g === "figma", Ce = {
    ...b === "en" ? Hr : Gr,
    ...Be
  }, Se = (J) => {
    var te;
    const G = (te = J.data) == null ? void 0 : te.tone;
    return G && G in it ? it[G] : J.type === "flow-group" ? "rgba(99, 102, 241, 0.22)" : "#94a3b8";
  }, H = /* @__PURE__ */ C(
    "div",
    {
      ref: l,
      "data-testid": s,
      "data-interaction-mode": p,
      "data-interactive": x ? "true" : "false",
      onDragOver: f,
      onDrop: c,
      className: F(
        "relative flex-1 h-full w-full overflow-hidden select-none bg-[var(--abc-bg-canvas)]",
        t
      ),
      children: [
        /* @__PURE__ */ C(
          xr,
          {
            proOptions: { hideAttribution: !0, ..._ },
            connectionLineComponent: Z ?? Qr,
            nodesDraggable: ce ?? x,
            nodesConnectable: le ?? x,
            elementsSelectable: de ?? x,
            panOnDrag: D ?? (ke ? [1, 2] : !0),
            panOnScroll: L ?? ne,
            panOnScrollMode: X ?? (ne ? yr.Free : void 0),
            zoomOnPinch: K ?? !0,
            autoPanOnNodeDrag: Le ?? !0,
            autoPanOnConnect: Ne ?? !0,
            selectionOnDrag: oe ?? (ke && x),
            selectionMode: he ?? wr.Partial,
            ariaLabelConfig: Ce,
            className: F(
              T ? "opacity-20 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300",
              P
            ),
            ...ue,
            children: [
              ve && /* @__PURE__ */ o(
                tt,
                {
                  id: "abc-flow-bg-primary",
                  variant: ve,
                  gap: u,
                  size: h,
                  color: a
                }
              ),
              be && i && /* @__PURE__ */ o(
                tt,
                {
                  id: "abc-flow-bg-secondary",
                  variant: be,
                  gap: i.gap ?? u * 5,
                  size: i.size ?? 1,
                  color: i.color ?? "rgba(148, 163, 184, 0.22)"
                }
              ),
              ((m == null ? void 0 : m.horizontal) !== void 0 || (m == null ? void 0 : m.vertical) !== void 0) && /* @__PURE__ */ o(
                eo,
                {
                  horizontalLine: m.horizontal,
                  verticalLine: m.vertical
                }
              ),
              S && /* @__PURE__ */ o(me, { position: "top-left", className: "!m-3.5 !z-20", children: S }),
              M && /* @__PURE__ */ o(me, { position: "top-center", className: "!mt-3 !z-20", children: M }),
              $ && /* @__PURE__ */ o(me, { position: "top-right", className: "!m-3.5 !z-20", children: $ }),
              k && /* @__PURE__ */ o(me, { position: "bottom-left", className: "!m-3.5 !z-20", children: k }),
              v && /* @__PURE__ */ o(me, { position: "bottom-center", className: "!mb-3.5 !z-20", children: v }),
              N && /* @__PURE__ */ o(me, { position: "bottom-right", className: "!m-3.5 !z-20", children: N }),
              n && /* @__PURE__ */ o(
                Nr,
                {
                  pannable: !0,
                  zoomable: !0,
                  nodeStrokeWidth: 2,
                  nodeColor: (y == null ? void 0 : y.nodeColor) ?? Se,
                  nodeComponent: (y == null ? void 0 : y.nodeComponent) ?? (z ? Jr : void 0),
                  className: F(
                    "!rounded-xl !border !border-[var(--abc-border)] !bg-[var(--abc-bg-surface)]/95 !shadow-md",
                    E
                  ),
                  ...y
                }
              ),
              I
            ]
          }
        ),
        B,
        T && /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "canvas-loading-overlay",
            className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-[var(--abc-bg-canvas)]/70 backdrop-blur-[1px]",
            children: /* @__PURE__ */ o("div", { className: "animate-pulse rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 px-4 py-2 text-xs font-medium text-[var(--abc-fg-muted)] shadow-sm", children: w })
          }
        )
      ]
    }
  );
  return r ? /* @__PURE__ */ o(mt, { children: H }) : H;
}
const to = {
  sm: "!h-2.5 !w-2.5",
  md: "!h-3 !w-3"
}, kt = ({
  id: r,
  type: t,
  position: s,
  tone: l = "neutral",
  size: f = "sm",
  connectionLimit: c,
  connectionCount: d,
  isConnectable: e = !0,
  highlightOnConnect: u,
  isConnectionCandidate: h = !1,
  isConnectionDimmed: a = !1,
  title: i,
  className: p,
  style: g,
  ...b
}) => {
  const x = typeof c == "number" && c >= 0 && d >= c, m = e && !x, S = Xe[l] ?? Xe.neutral;
  return /* @__PURE__ */ o(
    Sr,
    {
      id: r,
      type: t,
      position: s,
      isConnectable: m,
      "data-slot": "flow-handle",
      "data-tone": l,
      "data-connection-count": d,
      "data-limit-reached": x ? "true" : "false",
      "data-connection-candidate": h && m ? "true" : "false",
      title: i ?? (typeof c == "number" ? `连接数 ${d}/${c}` : void 0),
      style: g,
      className: F(
        "!border-2 !border-[var(--abc-bg-surface)] !shadow-2xs transition-[box-shadow,opacity,transform] duration-150",
        to[f],
        S.dot,
        m ? "hover:!ring-4 hover:!ring-[var(--abc-ring)]" : "!opacity-45 !cursor-not-allowed",
        h && m && "!ring-4 !ring-[var(--abc-primary)]/55 !scale-125",
        a && "!opacity-35",
        p
      ),
      ...b
    }
  );
}, ro = ({
  resolvedNodeId: r,
  id: t,
  type: s,
  highlightOnConnect: l = !0,
  ...f
}) => {
  var b, x;
  const c = vt({
    id: r,
    handleType: s,
    handleId: t ?? void 0
  }), d = Cr(), e = !!(l && d.inProgress), u = (b = d.fromNode) == null ? void 0 : b.id, h = (x = d.fromHandle) == null ? void 0 : x.type, a = !!(u && u !== r), i = !!(h && h !== s), p = e && a && i, g = e && (!a || !i);
  return /* @__PURE__ */ o(
    kt,
    {
      id: t,
      type: s,
      connectionCount: c.length,
      isConnectionCandidate: p,
      isConnectionDimmed: g,
      ...f
    }
  );
}, Fo = ({ nodeId: r, ...t }) => {
  const s = kr(), l = r ?? s;
  return l ? /* @__PURE__ */ o(ro, { resolvedNodeId: l, ...t }) : /* @__PURE__ */ o(kt, { connectionCount: 0, ...t });
}, oo = {
  blue: "var(--abc-flow-blue-ring, #3b82f6)",
  green: "var(--abc-flow-green-ring, #10b981)",
  amber: "var(--abc-flow-amber-ring, #f59e0b)",
  rose: "var(--abc-flow-rose-ring, #f43f5e)",
  slate: "var(--abc-primary, #4f46e5)"
}, no = ({
  tone: r = "slate",
  color: t,
  minWidth: s = 180,
  minHeight: l = 96,
  isVisible: f = !0,
  handleClassName: c,
  lineClassName: d,
  handleStyle: e,
  lineStyle: u,
  ...h
}) => {
  const a = t ?? oo[r];
  return /* @__PURE__ */ o(
    zr,
    {
      isVisible: f,
      minWidth: s,
      minHeight: l,
      color: a,
      lineClassName: F("!border-[1.5px]", d),
      handleClassName: F(
        "!h-2.5 !w-2.5 !rounded-sm !border-2 !border-[var(--abc-bg-surface)] !shadow-xs",
        c
      ),
      lineStyle: {
        borderColor: a,
        ...u
      },
      handleStyle: {
        backgroundColor: a,
        ...e
      },
      ...h
    }
  );
}, ao = {
  blue: "text-[var(--abc-flow-blue-header-fg)]",
  green: "text-[var(--abc-flow-green-header-fg)]",
  amber: "text-[var(--abc-flow-amber-header-fg)]",
  rose: "text-[var(--abc-flow-rose-header-fg)]",
  slate: "text-[var(--abc-fg-muted)]"
}, Io = ({
  tone: r = "slate",
  visible: t = !0,
  minWidth: s = 180,
  minHeight: l = 110,
  position: f = "bottom-right",
  icon: c,
  className: d,
  style: e,
  ...u
}) => t ? /* @__PURE__ */ o(
  Mr,
  {
    variant: Fr.Handle,
    position: f,
    minWidth: s,
    minHeight: l,
    style: {
      background: "transparent",
      border: "none",
      width: 18,
      height: 18,
      right: 4,
      bottom: 4,
      ...e
    },
    className: F(
      "nodrag nopan flex items-end justify-end rounded-sm p-0.5 opacity-65 transition-opacity hover:opacity-100",
      ao[r],
      d
    ),
    ...u,
    children: c ?? /* @__PURE__ */ o(
      "svg",
      {
        width: "11",
        height: "11",
        viewBox: "0 0 12 12",
        fill: "none",
        "aria-hidden": "true",
        "data-slot": "flow-corner-resizer-grip",
        children: /* @__PURE__ */ o(
          "path",
          {
            d: "M10.5 3.5L3.5 10.5M10.5 7.5L7.5 10.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      }
    )
  }
) : null, _e = ["blue", "green", "amber", "rose", "slate"], Eo = ({
  id: r,
  data: t,
  selected: s = !1
}) => {
  const l = (t == null ? void 0 : t.tone) ?? "blue", f = (t == null ? void 0 : t.dashed) ?? !0, c = (t == null ? void 0 : t.resizable) ?? !0, d = (t == null ? void 0 : t.minWidth) ?? 260, e = (t == null ? void 0 : t.minHeight) ?? 180, u = [];
  return t != null && t.onAddChild && u.push({
    key: "add-child",
    icon: /* @__PURE__ */ o(Re, { size: 13 }),
    label: "在分组内新增子节点",
    onClick: () => {
      var h;
      return (h = t.onAddChild) == null ? void 0 : h.call(t, r);
    }
  }), t != null && t.onCycleTone && u.push({
    key: "cycle-tone",
    icon: /* @__PURE__ */ o(Ht, { size: 13 }),
    label: "切换分组语义色调",
    onClick: () => {
      var i;
      const h = _e.indexOf(l), a = _e[(h + 1) % _e.length];
      (i = t.onCycleTone) == null || i.call(t, r, a);
    }
  }), t != null && t.onDelete && u.push({
    key: "delete-group",
    icon: /* @__PURE__ */ o(ut, { size: 13 }),
    label: "移除分组",
    danger: !0,
    dividerBefore: u.length > 0,
    onClick: () => {
      var h;
      return (h = t.onDelete) == null ? void 0 : h.call(t, r);
    }
  }), /* @__PURE__ */ C("div", { "data-slot": "flow-group-node", className: "relative h-full w-full", children: [
    c && /* @__PURE__ */ o(
      no,
      {
        tone: l,
        isVisible: s,
        minWidth: d,
        minHeight: e
      }
    ),
    u.length > 0 && /* @__PURE__ */ o(gt, { isVisible: s, position: ae.Top, offset: 10, children: /* @__PURE__ */ o(yt, { items: u, size: "xs", "aria-label": "分组容器快捷操作" }) }),
    /* @__PURE__ */ o(
      Nt,
      {
        title: (t == null ? void 0 : t.title) ?? "子流程分组",
        description: t == null ? void 0 : t.description,
        icon: /* @__PURE__ */ o(Gt, { size: 13 }),
        badge: t != null && t.badge ? /* @__PURE__ */ o("span", { className: "rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--abc-fg-secondary)]", children: t.badge }) : void 0,
        tone: l,
        align: "top-left",
        dashed: f,
        selected: s,
        width: "100%",
        height: "100%",
        minWidth: d,
        minHeight: e
      }
    )
  ] });
}, To = ({
  open: r,
  x: t,
  y: s,
  title: l,
  items: f,
  onClose: c,
  containerBounds: d,
  className: e
}) => {
  const u = U(null);
  if (re(() => {
    if (!r) return;
    const g = (x) => {
      var m;
      (m = u.current) != null && m.contains(x.target) || c();
    }, b = (x) => {
      x.key === "Escape" && (x.preventDefault(), c());
    };
    return document.addEventListener("mousedown", g), document.addEventListener("keydown", b), () => {
      document.removeEventListener("mousedown", g), document.removeEventListener("keydown", b);
    };
  }, [r, c]), !r || f.length === 0) return null;
  const h = 196, a = f.length * 32 + (l ? 32 : 12), i = d ? Math.max(8, Math.min(t, Math.max(8, d.width - h - 8))) : t, p = d ? Math.max(8, Math.min(s, Math.max(8, d.height - a - 8))) : s;
  return /* @__PURE__ */ C(
    "div",
    {
      ref: u,
      role: "menu",
      "aria-label": l ?? "画布上下文菜单",
      "data-slot": "flow-context-menu",
      style: { left: i, top: p },
      onContextMenu: (g) => g.preventDefault(),
      onMouseDown: (g) => g.stopPropagation(),
      className: F(
        "nodrag nopan absolute z-50 min-w-[184px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)] select-none abc-animate-popover-in",
        e
      ),
      children: [
        l && /* @__PURE__ */ o("div", { className: "mb-1 border-b border-[var(--abc-border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--abc-fg-muted)]", children: l }),
        f.map((g) => /* @__PURE__ */ C(q.Fragment, { children: [
          g.dividerBefore && /* @__PURE__ */ o("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
          /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "menuitem",
              disabled: g.disabled,
              onClick: (b) => {
                b.stopPropagation(), !g.disabled && (g.onClick(), c());
              },
              className: F(
                "flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-45",
                g.danger ? "text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]"
              ),
              children: [
                /* @__PURE__ */ C("span", { className: "flex min-w-0 items-center gap-2", children: [
                  g.icon && /* @__PURE__ */ o("span", { className: "inline-flex shrink-0", children: g.icon }),
                  /* @__PURE__ */ o("span", { className: "truncate", children: g.label })
                ] }),
                g.shortcut && /* @__PURE__ */ o("kbd", { className: "shrink-0 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: g.shortcut })
              ]
            }
          )
        ] }, g.key))
      ]
    }
  );
}, so = {
  blue: "bg-[var(--abc-flow-port-info-dot)]",
  green: "bg-[var(--abc-flow-port-success-dot)]",
  amber: "bg-[var(--abc-flow-port-warning-dot)]",
  rose: "bg-[var(--abc-flow-port-danger-dot)]",
  slate: "bg-[var(--abc-flow-port-neutral-dot)]"
}, Ro = ({
  open: r,
  x: t,
  y: s,
  title: l = "添加下游节点并自动连线",
  searchPlaceholder: f = "搜索动作或节点类型...",
  emptyText: c = "无匹配节点",
  items: d,
  containerBounds: e,
  onSelect: u,
  onClose: h,
  className: a
}) => {
  const i = U(null), p = U(null), [g, b] = pe(""), [x, m] = pe(0);
  re(() => {
    if (!r) {
      b(""), m(0);
      return;
    }
    const n = window.requestAnimationFrame(() => {
      var E;
      return (E = p.current) == null ? void 0 : E.focus();
    }), z = (E) => {
      var y;
      (y = i.current) != null && y.contains(E.target) || h();
    };
    return document.addEventListener("mousedown", z), () => {
      window.cancelAnimationFrame(n), document.removeEventListener("mousedown", z);
    };
  }, [r, h]);
  const S = se(() => {
    const n = g.trim().toLowerCase();
    return n ? d.filter((z) => `${z.label} ${z.description ?? ""} ${z.group ?? ""} ${z.keywords ?? ""}`.toLowerCase().includes(n)) : d;
  }, [d, g]);
  if (re(() => {
    m(0);
  }, [g]), !r) return null;
  const M = 264, $ = 312, k = e ? Math.max(10, Math.min(t, Math.max(10, e.width - M - 10))) : t, v = e ? Math.max(10, Math.min(s, Math.max(10, e.height - $ - 10))) : s;
  return /* @__PURE__ */ C(
    "div",
    {
      ref: i,
      role: "dialog",
      "aria-label": l,
      "data-slot": "flow-quick-connect-menu",
      "data-abc-no-press-scale": "",
      style: { left: k, top: v, width: M },
      onMouseDown: (n) => n.stopPropagation(),
      onKeyDown: (n) => {
        if (n.key === "Escape") {
          n.preventDefault(), n.stopPropagation(), h();
          return;
        }
        if (n.key === "ArrowDown") {
          n.preventDefault(), m((z) => S.length > 0 ? (z + 1) % S.length : 0);
          return;
        }
        if (n.key === "ArrowUp") {
          n.preventDefault(), m(
            (z) => S.length > 0 ? (z - 1 + S.length) % S.length : 0
          );
          return;
        }
        if (n.key === "Enter") {
          const z = S[x];
          z && !z.disabled && (n.preventDefault(), u(z), h());
        }
      },
      className: F(
        "nodrag nowheel nopan absolute z-50 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)] select-none abc-animate-popover-in",
        a
      ),
      children: [
        /* @__PURE__ */ C("div", { className: "border-b border-[var(--abc-border)] px-3 py-2", children: [
          /* @__PURE__ */ C("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ o(Ut, { size: 12, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ o("span", { className: "truncate", children: l })
          ] }),
          /* @__PURE__ */ C("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              dt,
              {
                size: 13,
                className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[var(--abc-fg-placeholder)]"
              }
            ),
            /* @__PURE__ */ o(
              "input",
              {
                ref: p,
                type: "text",
                value: g,
                onChange: (n) => b(n.target.value),
                placeholder: f,
                "aria-label": f,
                className: "h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-7 pr-2 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "max-h-56 overflow-y-auto p-1.5", children: S.length === 0 ? /* @__PURE__ */ o("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: c }) : S.map((n, z) => {
          var w;
          const E = z > 0 ? (w = S[z - 1]) == null ? void 0 : w.group : void 0, y = !!(n.group && n.group !== E), T = z === x;
          return /* @__PURE__ */ C(q.Fragment, { children: [
            y && /* @__PURE__ */ o("div", { className: "px-2 pb-0.5 pt-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--abc-fg-muted)]", children: n.group }),
            /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                disabled: n.disabled,
                "data-quick-connect-key": n.key,
                onMouseEnter: () => m(z),
                onClick: () => {
                  n.disabled || (u(n), h());
                },
                className: F(
                  "flex w-full items-start gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-45",
                  T ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ o("span", { className: "mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-primary)]", children: n.icon ?? /* @__PURE__ */ o(
                    "span",
                    {
                      className: F(
                        "h-2 w-2 rounded-full",
                        so[n.tone ?? "blue"]
                      )
                    }
                  ) }),
                  /* @__PURE__ */ C("span", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ o("span", { className: "block truncate text-xs font-medium text-[var(--abc-fg)]", children: n.label }),
                    n.description && /* @__PURE__ */ o("span", { className: "block truncate text-[10.5px] text-[var(--abc-fg-muted)]", children: n.description })
                  ] })
                ]
              }
            )
          ] }, n.key);
        }) })
      ]
    }
  );
}, $o = ({
  selectedCount: r,
  onAlign: t,
  onGroupSelected: s,
  onDuplicateSelected: l,
  onDeleteSelected: f,
  extraActions: c,
  disabled: d = !1,
  labels: e,
  className: u,
  testId: h = "abc-flow-alignment-toolbar"
}) => {
  if (r < 2) return null;
  const a = "h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]", i = r >= 3, p = [
    { key: "left", label: (e == null ? void 0 : e.left) ?? "左对齐", icon: /* @__PURE__ */ o(qt, { size: 13 }) },
    {
      key: "centerX",
      label: (e == null ? void 0 : e.centerX) ?? "水平居中对齐",
      icon: /* @__PURE__ */ o(Qt, { size: 13 })
    },
    { key: "right", label: (e == null ? void 0 : e.right) ?? "右对齐", icon: /* @__PURE__ */ o(Jt, { size: 13 }) },
    { key: "top", label: (e == null ? void 0 : e.top) ?? "顶对齐", icon: /* @__PURE__ */ o(er, { size: 13 }) },
    {
      key: "centerY",
      label: (e == null ? void 0 : e.centerY) ?? "垂直居中对齐",
      icon: /* @__PURE__ */ o(tr, { size: 13 })
    },
    { key: "bottom", label: (e == null ? void 0 : e.bottom) ?? "底对齐", icon: /* @__PURE__ */ o(rr, { size: 13 }) },
    {
      key: "distributeH",
      label: (e == null ? void 0 : e.distributeH) ?? "水平等距分布",
      icon: /* @__PURE__ */ o(or, { size: 13 }),
      requiresThree: !0
    },
    {
      key: "distributeV",
      label: (e == null ? void 0 : e.distributeV) ?? "垂直等距分布",
      icon: /* @__PURE__ */ o(nr, { size: 13 }),
      requiresThree: !0
    }
  ], g = !!(s || l || f || c);
  return /* @__PURE__ */ C(
    "div",
    {
      role: "toolbar",
      "aria-label": "多选节点对齐与批量操作",
      "data-slot": "flow-alignment-toolbar",
      "data-abc-no-press-scale": "",
      "data-testid": h,
      onMouseDown: (b) => b.stopPropagation(),
      className: F(
        "nodrag nopan inline-flex flex-wrap items-center gap-0.5 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/96 px-1.5 py-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur abc-animate-popover-in",
        u
      ),
      children: [
        /* @__PURE__ */ o("span", { className: "px-1.5 font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: e != null && e.selectedCount ? e.selectedCount(r) : `已选 ${r} 项` }),
        /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
        p.map((b) => /* @__PURE__ */ o(
          O,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            disabled: d || b.requiresThree && !i,
            "aria-label": b.label,
            title: b.requiresThree && !i ? `${b.label}（至少需选中 3 个节点）` : b.label,
            onClick: () => t(b.key),
            className: a,
            children: b.icon
          },
          b.key
        )),
        g && /* @__PURE__ */ C(ge, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          s && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: d,
              "aria-label": (e == null ? void 0 : e.group) ?? "合并为子流程分组",
              title: (e == null ? void 0 : e.group) ?? "合并为子流程分组",
              onClick: s,
              className: a,
              children: /* @__PURE__ */ o(ar, { size: 13 })
            }
          ),
          l && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: d,
              "aria-label": (e == null ? void 0 : e.duplicate) ?? "复制选中子图",
              title: (e == null ? void 0 : e.duplicate) ?? "复制选中子图 (⌘C / ⌘V)",
              onClick: l,
              className: a,
              children: /* @__PURE__ */ o(sr, { size: 13 })
            }
          ),
          c,
          f && /* @__PURE__ */ o(
            O,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: d,
              "aria-label": (e == null ? void 0 : e.delete) ?? "批量删除选中节点",
              title: (e == null ? void 0 : e.delete) ?? "批量删除选中节点",
              onClick: f,
              className: "h-7 w-7 text-[var(--abc-danger)] hover:bg-[var(--abc-danger-soft)]",
              children: /* @__PURE__ */ o(ut, { size: 13 })
            }
          )
        ] })
      ]
    }
  );
}, io = q.forwardRef(
  ({
    preventDrag: r = !0,
    preventWheelZoom: t = !0,
    preventPan: s = !0,
    disablePressScale: l = !0,
    className: f,
    children: c,
    ...d
  }, e) => /* @__PURE__ */ o(
    "div",
    {
      ref: e,
      "data-slot": "flow-interactive-zone",
      "data-abc-no-press-scale": l ? "" : void 0,
      className: F(
        r && "nodrag",
        t && "nowheel",
        s && "nopan",
        "select-text",
        f
      ),
      ...d,
      children: c
    }
  )
);
io.displayName = "FlowInteractiveZone";
function Ye(r, t, s) {
  var c, d, e, u;
  const l = ((c = r.measured) == null ? void 0 : c.width) ?? (typeof r.width == "number" ? r.width : void 0) ?? (typeof ((d = r.style) == null ? void 0 : d.width) == "number" ? r.style.width : void 0) ?? t, f = ((e = r.measured) == null ? void 0 : e.height) ?? (typeof r.height == "number" ? r.height : void 0) ?? (typeof ((u = r.style) == null ? void 0 : u.height) == "number" ? r.style.height : void 0) ?? s;
  return { width: l, height: f };
}
function Lo(r, t, s = {}) {
  const {
    direction: l = "LR",
    rankSep: f = 96,
    nodeSep: c = 48,
    defaultNodeWidth: d = 230,
    defaultNodeHeight: e = 116,
    originX: u = 32,
    originY: h = 32
  } = s;
  if (r.length === 0) return [];
  const a = r.filter((y) => !y.parentId), i = new Set(a.map((y) => y.id)), p = /* @__PURE__ */ new Map();
  for (const y of r)
    y.parentId && p.set(y.id, y.parentId);
  const g = (y) => {
    let T = y;
    const w = /* @__PURE__ */ new Set();
    for (; p.has(T) && !w.has(T); )
      w.add(T), T = p.get(T);
    return T;
  }, b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  for (const y of a)
    b.set(y.id, /* @__PURE__ */ new Set()), x.set(y.id, 0);
  for (const y of t) {
    const T = g(y.source), w = g(y.target);
    if (T === w || !i.has(T) || !i.has(w)) continue;
    const I = b.get(T);
    I.has(w) || (I.add(w), x.set(w, (x.get(w) ?? 0) + 1));
  }
  const m = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Set(), M = [];
  for (const y of a)
    (x.get(y.id) ?? 0) === 0 && (M.push(y.id), m.set(y.id, 0));
  for (; S.size < a.length; ) {
    if (M.length === 0) {
      let w = "", I = Number.POSITIVE_INFINITY;
      for (const B of a) {
        if (S.has(B.id)) continue;
        const P = x.get(B.id) ?? 0;
        P < I && (I = P, w = B.id);
      }
      if (!w) break;
      M.push(w), m.has(w) || m.set(w, 0);
    }
    const y = M.shift();
    if (S.has(y)) continue;
    S.add(y);
    const T = m.get(y) ?? 0;
    for (const w of b.get(y) ?? []) {
      if (S.has(w)) continue;
      m.set(w, Math.max(m.get(w) ?? 0, T + 1));
      const I = (x.get(w) ?? 1) - 1;
      x.set(w, I), I <= 0 && M.push(w);
    }
  }
  const $ = /* @__PURE__ */ new Map();
  for (const y of a) {
    const T = m.get(y.id) ?? 0, w = $.get(T) ?? [];
    w.push(y), $.set(T, w);
  }
  const k = Array.from($.keys()).sort((y, T) => y - T), v = l === "LR" || l === "RL", n = l === "RL" || l === "BT" ? [...k].reverse() : k, z = /* @__PURE__ */ new Map();
  let E = v ? u : h;
  for (const y of n) {
    const T = $.get(y) ?? [];
    let w = 0, I = v ? h : u;
    for (const B of T) {
      const { width: P, height: _ } = Ye(B, d, e);
      v ? (z.set(B.id, { x: Math.round(E), y: Math.round(I) }), I += _ + c, w = Math.max(w, P)) : (z.set(B.id, { x: Math.round(I), y: Math.round(E) }), I += P + c, w = Math.max(w, _));
    }
    E += w + f;
  }
  return r.map((y) => {
    const T = z.get(y.id);
    return T ? {
      ...y,
      position: T
    } : y;
  });
}
function Bo(r, t, s) {
  const l = /* @__PURE__ */ new Set([r]), f = /* @__PURE__ */ new Set(), c = new Map(t.map((e) => [e.id, e])), d = [r];
  for (; d.length > 0; ) {
    const e = d.pop(), u = c.get(e);
    if (!u) continue;
    const h = Er(u, t, s), a = xt([u], s);
    for (const i of a)
      i.target === e && f.add(i.id);
    for (const i of h)
      l.has(i.id) || (l.add(i.id), d.push(i.id));
  }
  return { nodeIds: l, edgeIds: f };
}
function Do(r, t, s) {
  const l = /* @__PURE__ */ new Set([r]), f = /* @__PURE__ */ new Set(), c = new Map(t.map((e) => [e.id, e])), d = [r];
  for (; d.length > 0; ) {
    const e = d.pop(), u = c.get(e);
    if (!u) continue;
    const h = Ir(u, t, s), a = xt([u], s);
    for (const i of a)
      i.source === e && f.add(i.id);
    for (const i of h)
      l.has(i.id) || (l.add(i.id), d.push(i.id));
  }
  return { nodeIds: l, edgeIds: f };
}
function Po(r, t) {
  if (!t.source || !t.target) return !1;
  if (t.source === t.target) return !0;
  const s = /* @__PURE__ */ new Map();
  for (const c of r) {
    const d = s.get(c.source) ?? [];
    d.push(c.target), s.set(c.source, d);
  }
  const l = /* @__PURE__ */ new Set(), f = [t.target];
  for (; f.length > 0; ) {
    const c = f.pop();
    if (c === t.source) return !0;
    if (!l.has(c)) {
      l.add(c);
      for (const d of s.get(c) ?? [])
        f.push(d);
    }
  }
  return !1;
}
function Ao(r, t, s = 6) {
  const l = Ye(r, 220, 110), f = r.position.x, c = f + l.width, d = f + l.width / 2, e = r.position.y, u = e + l.height, h = e + l.height / 2;
  let a = s + 1, i = s + 1, p, g, b = f, x = e;
  for (const m of t) {
    if (m.id === r.id || m.parentId !== r.parentId) continue;
    const S = Ye(m, 220, 110), M = m.position.x, $ = M + S.width, k = M + S.width / 2, v = m.position.y, N = v + S.height, n = v + S.height / 2, z = [
      [Math.abs(f - M), M, M],
      [Math.abs(c - $), $, $ - l.width],
      [Math.abs(d - k), k, k - l.width / 2]
    ];
    for (const [y, T, w] of z)
      y < a && (a = y, p = T, b = w);
    const E = [
      [Math.abs(e - v), v, v],
      [Math.abs(u - N), N, N - l.height],
      [Math.abs(h - n), n, n - l.height / 2]
    ];
    for (const [y, T, w] of E)
      y < i && (i = y, g = T, x = w);
  }
  return {
    horizontal: g,
    vertical: p,
    snapPosition: g !== void 0 || p !== void 0 ? { x: b, y: x } : void 0
  };
}
function Oo(r, t, s) {
  const l = {
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    nodes: r,
    edges: t,
    viewport: s
  };
  return JSON.stringify(l, null, 2);
}
function Vo(r) {
  const t = JSON.parse(r);
  if (!t || !Array.isArray(t.nodes) || !Array.isArray(t.edges))
    throw new Error("无效的流程图快照格式：缺少 nodes 或 edges 数组");
  return {
    version: 1,
    exportedAt: typeof t.exportedAt == "string" ? t.exportedAt : (/* @__PURE__ */ new Date()).toISOString(),
    nodes: t.nodes,
    edges: t.edges,
    viewport: t.viewport
  };
}
function we(r, t) {
  return {
    nodes: r.map((s) => ({
      ...s,
      position: { ...s.position },
      data: s.data ? { ...s.data } : s.data
    })),
    edges: t.map((s) => ({
      ...s,
      data: s.data ? { ...s.data } : s.data
    }))
  };
}
function _o(r = {}, t) {
  const { maxSteps: s = 40, enableKeyboardShortcuts: l = !1 } = r, f = U([]), c = U([]), [, d] = pe(0), e = V(() => d((p) => p + 1), []), u = V(
    (p, g) => {
      f.current = [...f.current.slice(-(s - 1)), we(p, g)], c.current = [], e();
    },
    [s, e]
  ), h = V(
    (p, g) => {
      if (f.current.length === 0) return null;
      const b = f.current[f.current.length - 1];
      return f.current = f.current.slice(0, -1), c.current = [
        ...c.current.slice(-(s - 1)),
        we(p, g)
      ], e(), we(b.nodes, b.edges);
    },
    [s, e]
  ), a = V(
    (p, g) => {
      if (c.current.length === 0) return null;
      const b = c.current[c.current.length - 1];
      return c.current = c.current.slice(0, -1), f.current = [
        ...f.current.slice(-(s - 1)),
        we(p, g)
      ], e(), we(b.nodes, b.edges);
    },
    [s, e]
  ), i = V(() => {
    f.current = [], c.current = [], e();
  }, [e]);
  return re(() => {
    if (!l || typeof window > "u") return;
    const p = (g) => {
      var S, M;
      const b = g.target;
      if (b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA" || b.isContentEditable) || !(g.metaKey || g.ctrlKey)) return;
      const m = g.key.toLowerCase();
      m === "z" && !g.shiftKey ? (g.preventDefault(), (S = t == null ? void 0 : t.onUndo) == null || S.call(t)) : (m === "z" && g.shiftKey || m === "y") && (g.preventDefault(), (M = t == null ? void 0 : t.onRedo) == null || M.call(t));
    };
    return window.addEventListener("keydown", p), () => window.removeEventListener("keydown", p);
  }, [l, t]), {
    takeSnapshot: u,
    undo: h,
    redo: a,
    clear: i,
    canUndo: f.current.length > 0,
    canRedo: c.current.length > 0,
    pastCount: f.current.length,
    futureCount: c.current.length
  };
}
function co(r) {
  if ("changedTouches" in r && r.changedTouches.length > 0) {
    const t = r.changedTouches[0];
    return { clientX: t.clientX, clientY: t.clientY };
  }
  return "clientX" in r && typeof r.clientX == "number" ? { clientX: r.clientX, clientY: r.clientY } : null;
}
function Wo({
  containerRef: r,
  disabled: t = !1
}) {
  const { screenToFlowPosition: s } = Ge(), [l, f] = pe(null), c = V(() => {
    f(null);
  }, []), d = V(
    (e, u) => {
      var b, x, m;
      if (t || u.isValid) return;
      const h = u.fromNode;
      if (!(h != null && h.id)) return;
      const a = co(e);
      if (!a) return;
      const i = (b = r.current) == null ? void 0 : b.getBoundingClientRect(), p = i ? {
        x: Math.round(a.clientX - i.left),
        y: Math.round(a.clientY - i.top)
      } : { x: Math.round(a.clientX), y: Math.round(a.clientY) }, g = s({ x: a.clientX, y: a.clientY });
      f({
        screenPosition: p,
        flowPosition: { x: Math.round(g.x), y: Math.round(g.y) },
        fromNodeId: h.id,
        fromHandleId: ((x = u.fromHandle) == null ? void 0 : x.id) ?? null,
        fromHandleType: ((m = u.fromHandle) == null ? void 0 : m.type) ?? "source"
      });
    },
    [r, t, s]
  );
  return {
    pendingDrop: l,
    handleConnectEnd: d,
    dismissDrop: c
  };
}
function jo({
  nodes: r,
  edges: t,
  onPaste: s,
  enableKeyboardShortcuts: l = !1,
  disabled: f = !1
}) {
  const c = U({
    nodes: [],
    edges: [],
    pasteStep: 0
  }), [d, e] = pe(0), u = V(
    (i) => {
      const p = i && i.length > 0 ? i : r.filter((m) => m.selected).map((m) => m.id);
      if (p.length === 0) return 0;
      const g = new Set(p);
      for (const m of r)
        m.parentId && g.has(m.parentId) && g.add(m.id);
      const b = r.filter((m) => g.has(m.id)), x = t.filter(
        (m) => g.has(m.source) && g.has(m.target)
      );
      return c.current = { nodes: b, edges: x, pasteStep: 0 }, e(b.length), b.length;
    },
    [r, t]
  ), h = V(() => {
    if (f || c.current.nodes.length === 0) return null;
    c.current.pasteStep += 1;
    const i = c.current.pasteStep, { nodes: p, edges: g } = Ur(
      c.current.nodes,
      c.current.edges,
      c.current.nodes.map((b) => b.id),
      { x: 36 * i, y: 36 * i }
    );
    return p.length === 0 ? null : (s(p, g), { nodes: p, edges: g });
  }, [f, s]), a = V(() => {
    c.current = { nodes: [], edges: [], pasteStep: 0 }, e(0);
  }, []);
  return re(() => {
    if (!l || typeof window > "u") return;
    const i = (p) => {
      const g = p.target;
      if (g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA" || g.isContentEditable) || !(p.metaKey || p.ctrlKey)) return;
      const x = p.key.toLowerCase();
      x === "c" ? u() > 0 && p.preventDefault() : x === "v" && c.current.nodes.length > 0 && !f && (p.preventDefault(), h());
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [l, u, h, f]), { copy: u, paste: h, copiedCount: d, clear: a };
}
function Xo(r = {}) {
  const { autoFitOnInitialized: t = !1, autoFitPadding: s = 0.2 } = r, l = Ge(), f = Tr(), c = U(!1);
  re(() => {
    !t || !f || c.current || (c.current = !0, l.fitView({ padding: s, duration: 240, maxZoom: 1 }).catch(() => {
    }));
  }, [t, s, f, l]);
  const d = V(
    (u, h = {}) => {
      var M, $;
      const a = l.getNode(u);
      if (!a) return !1;
      const i = ((M = a.measured) == null ? void 0 : M.width) ?? (typeof a.width == "number" ? a.width : 240), p = (($ = a.measured) == null ? void 0 : $.height) ?? (typeof a.height == "number" ? a.height : 120), g = l.getZoom(), b = h.zoom ?? Math.max(0.9, Math.min(1.15, g || 1)), x = h.rightInsetPx ? h.rightInsetPx / (2 * b) : 0, m = a.position.x + i / 2 + x, S = a.position.y + p / 2;
      return l.setCenter(m, S, {
        zoom: b,
        duration: h.duration ?? 280
      }).catch(() => {
      }), !0;
    },
    [l]
  ), e = V(
    (u, h = 0.22, a = 260) => {
      const i = u.map((p) => ({ id: p })).filter((p) => !!l.getNode(p.id));
      return i.length === 0 ? !1 : (l.fitView({ nodes: i, padding: h, duration: a, maxZoom: 1.2 }).catch(() => {
      }), !0);
    },
    [l]
  );
  return {
    nodesInitialized: f,
    focusNode: d,
    focusNodes: e
  };
}
function Yo(r, t) {
  const { updateNodeData: s } = Ge(), l = Rr(), f = vt({
    id: r,
    handleType: "target",
    handleId: t
  }), c = se(
    () => Array.from(new Set(f.map((a) => a.source))),
    [f]
  ), d = $r(c), e = se(() => {
    const a = /* @__PURE__ */ new Map();
    for (const i of d)
      i != null && i.id && a.set(i.id, i.data);
    return f.map((i) => ({
      nodeId: i.source,
      sourceHandle: i.sourceHandle ?? null,
      targetHandle: i.targetHandle ?? null,
      data: a.get(i.source)
    }));
  }, [f, d]), u = V(
    (a) => {
      s(r, a);
    },
    [r, s]
  ), h = V(() => {
    l(r);
  }, [r, l]);
  return {
    incomingConnections: f,
    upstreamRecords: e,
    patchSelfData: u,
    refreshHandles: h
  };
}
export {
  Hr as FLOW_ARIA_LABELS_EN,
  Gr as FLOW_ARIA_LABELS_ZH,
  yo as FLOW_CONNECTION_MODE,
  wo as FLOW_MARKER_TYPE,
  Xe as FLOW_PORT_TONE_STYLES,
  xo as FLOW_POSITION,
  wt as FLOW_TONE_STYLES,
  Or as FloatingIconRail,
  $o as FlowAlignmentToolbar,
  Mo as FlowCanvasSurface,
  Qr as FlowConnectionLine,
  To as FlowContextMenu,
  Io as FlowCornerResizer,
  vo as FlowFloatingEdge,
  Eo as FlowGroupNode,
  Fo as FlowHandle,
  io as FlowInteractiveZone,
  mo as FlowLabeledEdge,
  Jr as FlowMiniMapNode,
  Vr as FlowNodeCard,
  no as FlowNodeResizer,
  yt as FlowNodeToolbar,
  zo as FlowProvider,
  Ro as FlowQuickConnectMenu,
  Nt as FlowSectionFrame,
  bo as FlowViewportControls,
  eo as FlowViewportOverlay,
  Yr as TemplateVariableInput,
  Go as addFlowEdge,
  No as alignFlowNodes,
  Ho as applyFlowEdgeChanges,
  Uo as applyFlowNodeChanges,
  qr as computeFlowExportViewport,
  Ao as computeFlowHelperLines,
  ko as computeProximityEdge,
  Ur as duplicateFlowSubgraph,
  So as exportFlowToSvgDataUrl,
  Br as extractTemplateVariables,
  Co as findIntersectingGroupNode,
  qo as getFlowBezierPath,
  Do as getFlowDownstream,
  Qo as getFlowSimpleBezierPath,
  Jo as getFlowSmoothStepPath,
  en as getFlowStraightPath,
  Bo as getFlowUpstream,
  Po as hasFlowCycle,
  Pr as insertTemplateVariableAt,
  Lo as layoutFlowGraph,
  Vo as parseFlowSnapshot,
  tn as reconnectFlowEdge,
  Dr as removeTemplateVariableToken,
  Oo as serializeFlowSnapshot,
  jo as useFlowClipboard,
  Yo as useFlowComputing,
  rn as useFlowConnection,
  Wo as useFlowDropToConnect,
  on as useFlowEdges,
  nn as useFlowEdgesState,
  _o as useFlowHistory,
  an as useFlowInstance,
  sn as useFlowInternalNode,
  cn as useFlowKeyPress,
  ln as useFlowNodeConnections,
  dn as useFlowNodeId,
  un as useFlowNodes,
  fn as useFlowNodesData,
  gn as useFlowNodesInitialized,
  pn as useFlowNodesState,
  hn as useFlowOnSelectionChange,
  bn as useFlowOnViewportChange,
  mn as useFlowStore,
  vn as useFlowStoreApi,
  xn as useFlowUpdateNodeInternals,
  wn as useFlowViewport,
  Xo as useFlowViewportFocus
};
//# sourceMappingURL=index.js.map
