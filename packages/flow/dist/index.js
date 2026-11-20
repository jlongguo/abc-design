import { jsxs as C, jsx as o, Fragment as ve } from "react/jsx-runtime";
import Z, { useRef as U, useId as dt, useCallback as V, useMemo as ge, useEffect as ce, useState as pe } from "react";
import { X as Xe, Search as ut, Braces as Dt, Minus as Bt, Plus as Oe, Hand as At, BoxSelect as Ot, Unlock as Pt, Lock as Vt, Magnet as _t, MousePointerClick as Wt, Undo2 as jt, Redo2 as Xt, Maximize as Yt, LayoutGrid as Kt, Map as Ht, ImageDown as Zt, Trash2 as ft, FolderKanban as Gt, Palette as Ut, Sparkles as qt, AlignStartVertical as Qt, AlignCenterVertical as Jt, AlignEndVertical as er, AlignStartHorizontal as tr, AlignCenterHorizontal as rr, AlignEndHorizontal as or, AlignHorizontalSpaceAround as nr, AlignVerticalSpaceAround as ar, FolderPlus as sr, Copy as ir } from "lucide-react";
import { useAbcMotion as Pe, useControllableState as Ye, cn as E, Tooltip as gt, useAbcSize as cr, usePresence as lr, useFloatingPosition as dr, baseFieldControlClass as ur, Button as P } from "@abc-design/react";
import { NodeToolbar as ht, Position as fe, getStraightPath as Ze, getSmoothStepPath as Re, getSimpleBezierPath as pt, getBezierPath as Ge, BaseEdge as bt, EdgeText as mt, EdgeToolbar as fr, EdgeLabelRenderer as gr, useInternalNode as et, ConnectionMode as hr, MarkerType as pr, getNodesBounds as br, getViewportForBounds as mr, ConnectionLineType as Te, useNodes as vr, ViewportPortal as xr, ReactFlow as wr, SelectionMode as yr, PanOnScrollMode as Nr, Background as tt, Panel as ze, MiniMap as kr, ReactFlowProvider as vt, BackgroundVariant as _e, useNodeId as Sr, useNodeConnections as xt, useConnection as Cr, Handle as zr, NodeResizer as Mr, NodeResizeControl as Ir, ResizeControlVariant as Er, getOutgoers as Fr, getConnectedEdges as wt, getIncomers as Tr, useReactFlow as Ue, useNodesInitialized as Lr, useUpdateNodeInternals as Rr, useNodesData as $r } from "@xyflow/react";
import { addEdge as Qo, applyEdgeChanges as Jo, applyNodeChanges as en, getBezierPath as tn, getSimpleBezierPath as rn, getSmoothStepPath as on, getStraightPath as nn, reconnectEdge as an, useConnection as sn, useEdges as cn, useEdgesState as ln, useReactFlow as dn, useInternalNode as un, useKeyPress as fn, useNodeConnections as gn, useNodeId as hn, useNodes as pn, useNodesData as bn, useNodesInitialized as mn, useNodesState as vn, useOnSelectionChange as xn, useOnViewportChange as wn, useStore as yn, useStoreApi as Nn, useUpdateNodeInternals as kn, useViewport as Sn } from "@xyflow/react";
import { createPortal as Dr } from "react-dom";
const yt = {
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
}, Ke = {
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
}, We = /\{\{\s*([^{}]+?)\s*\}\}/g;
function Br(r) {
  var f;
  if (!r) return [];
  const t = [];
  We.lastIndex = 0;
  let a = We.exec(r), d = 0;
  for (; a !== null; ) {
    const i = a[0], c = ((f = a[1]) == null ? void 0 : f.trim()) ?? "";
    c && (t.push({
      raw: i,
      key: c,
      start: a.index,
      end: a.index + i.length,
      occurrenceIndex: d
    }), d += 1), a = We.exec(r);
  }
  return t;
}
function Ar(r, t) {
  const a = r.slice(0, t.start), d = r.slice(t.end);
  if (a.endsWith(" ") && d.startsWith(" "))
    return `${a}${d.slice(1)}`;
  const f = `${a}${d}`;
  return f.trim().length === 0 ? "" : f;
}
function Or(r, t, a, d, f = !1) {
  if (f)
    return { nextValue: t, nextCaret: t.length };
  const i = r.length, c = typeof a == "number" && a >= 0 ? Math.min(a, i) : i, e = typeof d == "number" && d >= c ? Math.min(d, i) : c;
  return {
    nextValue: `${r.slice(0, c)}${t}${r.slice(e)}`,
    nextCaret: c + t.length
  };
}
const Pr = {
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
}, Vr = Z.forwardRef(
  ({
    items: r,
    activeKey: t,
    defaultActiveKey: a = null,
    onActiveKeyChange: d,
    renderFlyout: f,
    flyoutContent: i,
    flyoutHeader: c,
    showFlyoutHeader: e = !0,
    flyoutWidth: u = 264,
    side: p = "left",
    size: s = "md",
    footer: l,
    closeOnOutsideClick: h = !0,
    closeOnEscape: g = !0,
    closeLabel: b = "收起面板",
    motion: x,
    className: v,
    railClassName: I,
    flyoutClassName: z,
    "aria-label": R = "画布类目工具栏",
    ...N
  }, m) => {
    const k = Pe(x), n = U(null), S = dt(), [F, w] = Ye({
      value: t,
      defaultValue: a,
      onChange: d
    }), L = V(
      (D) => {
        n.current = D, typeof m == "function" ? m(D) : m && (m.current = D);
      },
      [m]
    ), y = ge(
      () => F ? r.find((D) => D.key === F && !D.disabled) ?? null : null,
      [F, r]
    ), M = V(() => {
      w(null);
    }, [w]), $ = V(
      (D) => {
        D.disabled || w(F === D.key ? null : D.key);
      },
      [F, w]
    ), B = ge(() => y ? f ? f(y, { close: M }) : y.content !== void 0 ? y.content : i ?? null : null, [y, f, i, M]), K = !!(y && B !== null && B !== void 0);
    ce(() => {
      if (!K) return;
      const D = (Y) => {
        var le;
        if (!h) return;
        const ae = Y.target;
        ae && ((le = n.current) != null && le.contains(ae)) || M();
      }, X = (Y) => {
        !g || Y.key !== "Escape" || (Y.stopPropagation(), M());
      };
      return document.addEventListener("mousedown", D), document.addEventListener("keydown", X), () => {
        document.removeEventListener("mousedown", D), document.removeEventListener("keydown", X);
      };
    }, [K, h, g, M]);
    const q = Pr[s], oe = typeof u == "number" ? `${u}px` : u, Q = () => !y || c === null || !e ? null : typeof c == "function" ? c(y, { close: M }) : c !== void 0 ? c : /* @__PURE__ */ C("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-3 py-2.5", children: [
      /* @__PURE__ */ C("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ o("span", { className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: y.icon }),
        /* @__PURE__ */ o("span", { className: "truncate text-xs font-semibold text-[var(--abc-fg)]", children: y.label })
      ] }),
      /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: M,
          "aria-label": b,
          className: "inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          children: /* @__PURE__ */ o(Xe, { className: "h-3.5 w-3.5" })
        }
      )
    ] }), ee = /* @__PURE__ */ C(
      "nav",
      {
        "aria-label": R,
        "data-motion": k,
        className: E(
          "nodrag nopan flex shrink-0 flex-col items-stretch border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)] select-none",
          q.rail,
          I
        ),
        children: [
          r.map((D) => {
            const X = (y == null ? void 0 : y.key) === D.key, Y = D.title ?? (typeof D.label == "string" ? D.label : void 0);
            return /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                disabled: D.disabled,
                title: Y,
                "aria-pressed": X,
                "aria-expanded": X && K,
                "aria-controls": X && K ? S : void 0,
                "data-rail-key": D.key,
                "data-active": X ? "true" : "false",
                onClick: () => $(D),
                className: E(
                  "group relative flex w-full flex-col items-center justify-center text-center transition-[color,background-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  q.button,
                  D.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
                  X ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ o(
                    "span",
                    {
                      className: E(
                        "inline-flex shrink-0 items-center justify-center transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        q.iconWrap,
                        !D.disabled && "group-hover:scale-105"
                      ),
                      children: D.icon
                    }
                  ),
                  /* @__PURE__ */ o("span", { className: E("max-w-full truncate font-medium", q.label), children: D.label }),
                  D.badge !== void 0 && D.badge !== null && /* @__PURE__ */ o("span", { className: "pointer-events-none absolute right-1 top-1 inline-flex min-w-[14px] items-center justify-center rounded-full bg-[var(--abc-primary)] px-1 text-[9px] font-semibold leading-[14px] text-[var(--abc-primary-fg)]", children: D.badge })
                ]
              },
              D.key
            );
          }),
          l && /* @__PURE__ */ o("div", { className: "mt-1 border-t border-[var(--abc-border)] pt-1.5", children: l })
        ]
      }
    ), ne = K ? /* @__PURE__ */ C(
      "div",
      {
        id: S,
        role: "region",
        "aria-label": typeof (y == null ? void 0 : y.label) == "string" ? `${y.label} 面板` : "展开内容面板",
        "data-flow-rail-flyout": "open",
        "data-active-key": y == null ? void 0 : y.key,
        "data-motion": k,
        style: { width: oe },
        className: E(
          "nodrag nopan flex max-h-[min(70vh,520px)] flex-col overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)]",
          k !== "none" && "abc-animate-popover-in",
          z
        ),
        children: [
          Q(),
          /* @__PURE__ */ o("div", { className: "min-h-0 flex-1 overflow-y-auto p-3", children: B })
        ]
      }
    ) : null;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: L,
        "data-side": p,
        className: E(
          "relative inline-flex items-start gap-2.5",
          p === "right" && "flex-row-reverse",
          v
        ),
        ...N,
        children: [
          ee,
          ne
        ]
      }
    );
  }
);
Vr.displayName = "FloatingIconRail";
const _r = Z.forwardRef(
  ({
    title: r,
    subtitle: t,
    icon: a,
    badge: d,
    headerExtra: f,
    tone: i = "blue",
    subIcon: c,
    subTitle: e,
    subExtra: u,
    metaRows: p,
    maxMetaRows: s = 3,
    outputs: l,
    renderOutputHandle: h,
    inputHandle: g,
    toolbar: b,
    footer: x,
    selected: v = !1,
    running: I = !1,
    error: z = !1,
    status: R,
    width: N,
    height: m,
    minWidth: k,
    minHeight: n,
    fillContainer: S = !1,
    motion: F,
    className: w,
    headerClassName: L,
    bodyClassName: y,
    style: M,
    children: $,
    ...B
  }, K) => {
    const q = Pe(F), oe = yt[i], Q = z || R === "error" ? "error" : I || R === "running" ? "running" : R === "success" ? "success" : "idle", ee = p && s > 0 ? p.slice(0, s) : [], ne = !!(c || e !== void 0 || u), D = ne || ee.length > 0 || Z.Children.count($) > 0 || !!(l && l.length > 0) || !!x, X = Q === "error" ? "border-rose-500 ring-2 ring-rose-500/75 dark:border-rose-400 dark:ring-rose-400/70" : Q === "running" ? "border-blue-500 ring-2 ring-blue-500/80 dark:border-blue-400 dark:ring-blue-400/75" : v ? oe.selectedRing : void 0, Y = N !== void 0 ? N : S ? "100%" : 256, ae = m !== void 0 ? m : S ? "100%" : void 0, le = typeof Y == "number" ? `${Y}px` : Y, Me = typeof ae == "number" ? `${ae}px` : ae, xe = typeof k == "number" ? `${k}px` : k, Ie = typeof n == "number" ? `${n}px` : n;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: K,
        "data-tone": i,
        "data-status": Q,
        "data-selected": v ? "true" : "false",
        "data-motion": q,
        style: {
          width: le,
          height: Me,
          minWidth: xe,
          minHeight: Ie,
          ...M
        },
        className: E(
          "relative overflow-visible rounded-[14px] border p-1 shadow-[var(--abc-shadow-card)] transition-[border-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out",
          S && "flex flex-col",
          oe.cardShell,
          X,
          v && "shadow-md",
          w
        ),
        ...B,
        children: [
          g,
          b && /* @__PURE__ */ o("div", { className: "nodrag nopan absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2", children: b }),
          /* @__PURE__ */ C(
            "div",
            {
              className: E(
                "flex items-center justify-between gap-2 px-2 py-1.5",
                L
              ),
              children: [
                /* @__PURE__ */ C("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  a && /* @__PURE__ */ o(
                    "span",
                    {
                      className: E(
                        "inline-flex h-4 w-4 shrink-0 items-center justify-center",
                        oe.headerText
                      ),
                      children: a
                    }
                  ),
                  /* @__PURE__ */ C("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ C("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ o(
                        "span",
                        {
                          className: E(
                            "truncate text-xs font-semibold leading-tight",
                            oe.headerText
                          ),
                          children: r
                        }
                      ),
                      d && /* @__PURE__ */ o("span", { className: "shrink-0", children: d })
                    ] }),
                    t !== void 0 && /* @__PURE__ */ o("div", { className: "truncate text-[10.5px] leading-tight text-[var(--abc-fg-muted)]", children: t })
                  ] })
                ] }),
                /* @__PURE__ */ C("div", { className: "flex shrink-0 items-center gap-1", children: [
                  Q === "running" && /* @__PURE__ */ C(
                    "span",
                    {
                      "aria-label": "运行中",
                      "data-flow-status-indicator": "running",
                      className: "relative inline-flex h-2 w-2 shrink-0",
                      children: [
                        q !== "none" && /* @__PURE__ */ o("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" }),
                        /* @__PURE__ */ o("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-blue-500" })
                      ]
                    }
                  ),
                  Q === "error" && /* @__PURE__ */ o(
                    "span",
                    {
                      "aria-label": "执行异常",
                      "data-flow-status-indicator": "error",
                      className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-rose-500"
                    }
                  ),
                  Q === "success" && /* @__PURE__ */ o(
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
          D && /* @__PURE__ */ C(
            "div",
            {
              className: E(
                "overflow-visible rounded-[10px] border border-[var(--abc-border)]/70 bg-[var(--abc-bg-surface)] px-2.5 py-2 text-[var(--abc-fg)]",
                S && "flex min-h-0 flex-1 flex-col justify-between",
                y
              ),
              children: [
                ne && /* @__PURE__ */ C("div", { className: "mb-1.5 flex items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ C("div", { className: "flex min-w-0 items-center gap-1.5", children: [
                    c && /* @__PURE__ */ o("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-fg-secondary)]", children: c }),
                    e !== void 0 && /* @__PURE__ */ o("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: e })
                  ] }),
                  u && /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: u })
                ] }),
                ee.length > 0 && /* @__PURE__ */ o("div", { className: "space-y-1", children: ee.map((A, se) => /* @__PURE__ */ C(
                  "div",
                  {
                    title: A.title,
                    className: "flex min-w-0 items-center gap-1.5 text-[11.5px] leading-snug text-[var(--abc-fg-secondary)]",
                    children: [
                      A.icon && /* @__PURE__ */ o("span", { className: "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[var(--abc-fg-muted)]", children: A.icon }),
                      A.label !== void 0 && /* @__PURE__ */ o("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: A.label }),
                      /* @__PURE__ */ o(
                        "span",
                        {
                          className: E(
                            "min-w-0 flex-1 truncate text-[var(--abc-fg)]",
                            A.mono && "font-mono text-[11px]"
                          ),
                          children: A.value
                        }
                      )
                    ]
                  },
                  A.key ?? String(se)
                )) }),
                $ && /* @__PURE__ */ o("div", { className: E(ee.length > 0 && "mt-2", "text-xs"), children: $ }),
                l && l.length > 0 && /* @__PURE__ */ o(
                  "div",
                  {
                    "data-flow-outputs": "",
                    className: E(
                      "space-y-0.5",
                      (ee.length > 0 || Z.Children.count($) > 0 || ne) && "mt-2 border-t border-[var(--abc-border)]/70 pt-1.5"
                    ),
                    children: l.map((A) => {
                      const se = A.tone ?? "neutral", de = Ke[se], we = A.handle !== void 0 ? A.handle : h == null ? void 0 : h(A), H = A.showDot !== void 0 ? A.showDot : !we;
                      return /* @__PURE__ */ C(
                        "div",
                        {
                          "data-port-id": A.id,
                          "data-port-tone": se,
                          className: E(
                            // 右侧外延 -mr-3.5 与外框 p-1 + 内层 px-2.5 (4+10=14px) 精准齐平卡片外右缘，
                            // 使直接挂载于本行的 ReactFlow <Handle position={Position.Right} /> 落点精确贴边
                            "relative -mr-3.5 flex items-center justify-end gap-1.5 py-0.5 pl-2 pr-3.5 text-[11.5px] leading-snug",
                            A.disabled && "opacity-45",
                            A.className
                          ),
                          children: [
                            A.hint && /* @__PURE__ */ o("span", { className: "truncate text-[10.5px] text-[var(--abc-fg-muted)]", children: A.hint }),
                            A.icon && /* @__PURE__ */ o("span", { className: E("inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center", de.text), children: A.icon }),
                            /* @__PURE__ */ o("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: A.label }),
                            H && /* @__PURE__ */ o(
                              "span",
                              {
                                "aria-hidden": "true",
                                "data-port-dot": se,
                                className: E(
                                  "pointer-events-none absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
                                  de.dot
                                )
                              }
                            ),
                            we
                          ]
                        },
                        A.id
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
_r.displayName = "FlowNodeCard";
const Wr = {
  xs: "h-6 w-6",
  sm: "h-7 w-7"
}, Nt = Z.forwardRef(
  ({
    items: r,
    orientation: t = "horizontal",
    size: a = "sm",
    visible: d = !0,
    tooltipPlacement: f = "top",
    disableTooltips: i = !1,
    stopPropagation: c = !0,
    floating: e = !1,
    floatingPosition: u = fe.Top,
    floatingOffset: p = 8,
    floatingAlign: s = "center",
    motion: l,
    className: h,
    children: g,
    "aria-label": b = "节点快捷操作条",
    ...x
  }, v) => {
    const I = Pe(l);
    if (!d && !e) return null;
    const z = t === "vertical", R = Wr[a], N = /* @__PURE__ */ C(
      "div",
      {
        ref: v,
        role: "toolbar",
        "data-slot": "flow-node-toolbar",
        "data-abc-no-press-scale": "",
        "aria-label": b,
        "aria-orientation": t,
        "data-motion": I,
        "data-orientation": t,
        onMouseDown: c ? (m) => m.stopPropagation() : void 0,
        onClick: c ? (m) => m.stopPropagation() : void 0,
        className: E(
          "nodrag nopan inline-flex items-center gap-0.5 rounded-[10px] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5 shadow-[var(--abc-shadow-popover)] select-none",
          z ? "flex-col" : "flex-row",
          I !== "none" && "abc-animate-popover-in",
          h
        ),
        ...x,
        children: [
          r.map((m) => {
            const k = /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                disabled: m.disabled,
                "aria-label": m["aria-label"] ?? m.label,
                "aria-pressed": m.active !== void 0 ? m.active : void 0,
                "data-toolbar-key": m.key,
                "data-active": m.active ? "true" : "false",
                onClick: (n) => {
                  var S;
                  c && n.stopPropagation(), !m.disabled && ((S = m.onClick) == null || S.call(m, n));
                },
                className: E(
                  "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  R,
                  m.disabled ? "cursor-not-allowed text-[var(--abc-fg-placeholder)] opacity-45" : "cursor-pointer",
                  m.active ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : m.danger ? "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-danger-soft)] enabled:hover:text-[var(--abc-danger)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                  m.className
                ),
                children: /* @__PURE__ */ o("span", { className: "inline-flex h-3.5 w-3.5 items-center justify-center", children: m.icon })
              }
            );
            return /* @__PURE__ */ C(Z.Fragment, { children: [
              m.dividerBefore && /* @__PURE__ */ o(
                "span",
                {
                  "aria-hidden": "true",
                  className: E(
                    "shrink-0 bg-[var(--abc-border)]",
                    z ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                  )
                }
              ),
              i || m.disabled ? k : /* @__PURE__ */ o(
                gt,
                {
                  content: m.tooltip ?? m.label,
                  placement: f,
                  delay: 80,
                  motion: I,
                  children: k
                }
              )
            ] }, m.key);
          }),
          g && /* @__PURE__ */ C(ve, { children: [
            r.length > 0 && /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: E(
                  "shrink-0 bg-[var(--abc-border)]",
                  z ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                )
              }
            ),
            g
          ] })
        ]
      }
    );
    return e ? /* @__PURE__ */ o(
      ht,
      {
        isVisible: d,
        position: u,
        offset: p,
        align: s,
        children: N
      }
    ) : N;
  }
);
Nt.displayName = "FlowNodeToolbar";
const jr = ({
  floatingRef: r,
  portalContainer: t,
  portalTheme: a,
  isMounted: d,
  isVisible: f,
  popoverId: i,
  floatingStyle: c,
  actualSide: e,
  resolvedMotion: u,
  pickerTitle: p,
  pickerTriggerLabel: s,
  pickerPlaceholder: l,
  emptyVariablesText: h,
  searchable: g,
  totalVariablesCount: b,
  query: x,
  onQueryChange: v,
  groupedVariables: I,
  onSelect: z,
  popoverClassName: R
}) => !d || !t ? null : Dr(
  /* @__PURE__ */ C(
    "div",
    {
      ref: r,
      id: i,
      role: "dialog",
      "aria-label": typeof p == "string" ? p : s,
      "data-abc-floating": "",
      "data-abc-theme": a,
      "data-playground-theme": a,
      "data-template-picker-popover": "open",
      "data-placement": e,
      "data-motion": u,
      style: c,
      className: E(
        a === "dark" && "dark",
        a === "light" && "light",
        "nodrag nopan z-[1350] w-[280px] max-w-[calc(100vw-16px)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
        u !== "none" && (f ? "abc-animate-popover-in" : "abc-animate-popover-out"),
        R
      ),
      children: [
        /* @__PURE__ */ C("div", { className: "border-b border-[var(--abc-border)] px-3 py-2", children: [
          /* @__PURE__ */ C("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ o("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: p }),
            /* @__PURE__ */ o("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "{{var}}" })
          ] }),
          g && b > 0 && /* @__PURE__ */ C("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ o(ut, { className: "pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ o(
              "input",
              {
                type: "text",
                value: x,
                onChange: (N) => v(N.target.value),
                placeholder: l,
                "aria-label": l,
                className: "h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-7 pr-2 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "max-h-60 overflow-y-auto p-1.5", children: I.length === 0 ? /* @__PURE__ */ o("div", { className: "px-2 py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: h }) : /* @__PURE__ */ o("div", { className: "space-y-2", children: I.map(([N, m]) => /* @__PURE__ */ C("div", { children: [
          /* @__PURE__ */ o("div", { className: "px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: N }),
          /* @__PURE__ */ o("div", { className: "mt-0.5 space-y-0.5", children: m.map((k) => /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              disabled: k.disabled,
              "data-variable-option": k.key,
              onClick: () => z(k),
              className: E(
                "flex w-full flex-col gap-0.5 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)]",
                k.disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer hover:bg-[var(--abc-bg-subtle)]"
              ),
              children: [
                /* @__PURE__ */ C("div", { className: "flex w-full items-center justify-between gap-2", children: [
                  /* @__PURE__ */ o("span", { className: "truncate font-mono text-[11.5px] font-medium text-[var(--abc-primary)]", children: `{{${k.key}}}` }),
                  k.type && /* @__PURE__ */ o("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: k.type })
                ] }),
                (k.label || k.description || k.sampleValue) && /* @__PURE__ */ C("div", { className: "flex w-full items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ o("span", { className: "truncate", children: k.label ?? k.description }),
                  k.sampleValue && /* @__PURE__ */ o("span", { className: "max-w-[90px] shrink-0 truncate font-mono text-[10px] text-[var(--abc-fg-secondary)]", children: k.sampleValue })
                ] })
              ]
            },
            k.key
          )) })
        ] }, N)) }) })
      ]
    }
  ),
  t
), Xr = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Yr = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Kr = Z.forwardRef(
  ({
    value: r,
    defaultValue: t = "",
    onChange: a,
    multiline: d = !1,
    rows: f = 3,
    variables: i = [],
    chipDisplay: c = "auto",
    removableChips: e = !0,
    showPreviewLabel: u = !0,
    replaceOnSelect: p = !1,
    insertFormat: s,
    showPickerButton: l = !0,
    searchable: h = !0,
    pickerOpen: g,
    defaultPickerOpen: b = !1,
    onPickerOpenChange: x,
    pickerTitle: v = "插入模板变量",
    pickerPlaceholder: I = "搜索变量名、分组或说明...",
    pickerTriggerLabel: z = "插入变量",
    emptyVariablesText: R = "暂无可用变量",
    onSelectVariable: N,
    onRemoveVariable: m,
    id: k,
    name: n,
    label: S,
    error: F,
    helperText: w,
    invalid: L = !1,
    required: y = !1,
    disabled: M = !1,
    readOnly: $ = !1,
    placeholder: B = "输入文本或点击右下角 {} 插入 {{variable}}...",
    size: K,
    mono: q = !1,
    allowClear: oe = !1,
    clearLabel: Q = "清空内容",
    motion: ee,
    onFocus: ne,
    onBlur: D,
    "aria-label": X,
    "aria-labelledby": Y,
    "aria-describedby": ae,
    className: le,
    wrapperClassName: Me,
    inputClassName: xe,
    popoverClassName: Ie
  }, A) => {
    const se = cr(K, "sm"), de = Pe(ee), we = dt(), H = k ?? we, Ee = `${H}-hint`, Fe = `${H}-vars`, [J, ie] = Ye({
      value: r,
      defaultValue: t,
      onChange: a
    }), [te, ue] = Ye({
      value: g,
      defaultValue: b,
      onChange: x
    }), [ye, $e] = pe(""), Ne = U(null), ke = U(null), Se = U(null), be = U({
      start: null,
      end: null
    }), Ce = V(
      (T) => {
        Ne.current = T, typeof A == "function" ? A(T) : A && (A.current = T);
      },
      [A]
    ), G = !M && !$, De = !!(L || F), Ct = ge(() => {
      const T = /* @__PURE__ */ new Map();
      for (const O of i)
        T.has(O.key) || T.set(O.key, O);
      return T;
    }, [i]), Ve = ge(() => Br(J), [J]), zt = c === "always" || c === "auto" && Ve.length > 0, { isMounted: qe, isVisible: Mt } = lr(
      te && G,
      de === "none" ? 0 : 130
    ), { style: It, actualSide: Et, portalContainer: Ft, portalTheme: Tt } = dr({
      open: qe,
      triggerRef: ke,
      floatingRef: Se,
      placement: "bottomRight",
      offset: 6,
      rightAnchorOnOverflow: !0
    });
    ce(() => {
      te || $e("");
    }, [te]), ce(() => {
      if (!te) return;
      const T = (j) => {
        var W, me;
        const _ = j.target;
        _ && ((W = ke.current) != null && W.contains(_) || (me = Se.current) != null && me.contains(_) || ue(!1));
      }, O = (j) => {
        var _;
        j.key === "Escape" && (j.preventDefault(), j.stopPropagation(), ue(!1), (_ = ke.current) == null || _.focus());
      };
      return document.addEventListener("mousedown", T), document.addEventListener("keydown", O, !0), () => {
        document.removeEventListener("mousedown", T), document.removeEventListener("keydown", O, !0);
      };
    }, [te, ue]);
    const re = V(() => {
      const T = Ne.current;
      T && (be.current = {
        start: T.selectionStart,
        end: T.selectionEnd
      });
    }, []), Lt = V(
      (T) => {
        if (!G || T.disabled) return;
        const O = s ? s(T) : `{{${T.key}}}`, { nextValue: j, nextCaret: _ } = Or(
          J,
          O,
          be.current.start,
          be.current.end,
          p
        );
        ie(j), N == null || N(T, j), ue(!1), typeof window < "u" && window.requestAnimationFrame(() => {
          const W = Ne.current;
          if (W) {
            W.focus();
            try {
              W.setSelectionRange(_, _);
            } catch {
            }
            be.current = { start: _, end: _ };
          }
        });
      },
      [
        G,
        s,
        J,
        p,
        ie,
        N,
        ue
      ]
    ), Rt = V(
      (T) => {
        if (!G) return;
        const O = Ar(J, T);
        ie(O), m == null || m(T, O);
      },
      [G, J, ie, m]
    ), $t = ge(() => {
      var _;
      const T = ye.trim().toLowerCase(), O = T ? i.filter(
        (W) => [W.key, W.label, W.group, W.description, W.type].filter(Boolean).some((me) => String(me).toLowerCase().includes(T))
      ) : i, j = /* @__PURE__ */ new Map();
      for (const W of O) {
        const me = ((_ = W.group) == null ? void 0 : _.trim()) || "可用变量", Je = j.get(me) ?? [];
        Je.push(W), j.set(me, Je);
      }
      return Array.from(j.entries());
    }, [i, ye]), Qe = [ae, F || w ? Ee : void 0].filter(Boolean).join(" ") || void 0, Be = oe && G && J.length > 0;
    return /* @__PURE__ */ C("div", { className: E("w-full space-y-1", Me), children: [
      S !== void 0 && /* @__PURE__ */ C(
        "label",
        {
          htmlFor: H,
          className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: [
            /* @__PURE__ */ o("span", { children: S }),
            y && /* @__PURE__ */ o("span", { className: "text-[var(--abc-danger)]", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ C(
        "div",
        {
          "data-slot": "template-variable-input",
          "data-motion": de,
          "data-multiline": d ? "true" : "false",
          "data-invalid": De ? "true" : "false",
          className: E(
            ur,
            "nodrag nopan relative flex flex-col px-2.5 py-1.5",
            d ? Yr[se] : Xr[se],
            De && "border-[var(--abc-danger)] focus-within:border-[var(--abc-danger)] focus-within:ring-[var(--abc-danger)]/20",
            M && "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] cursor-not-allowed",
            le
          ),
          children: [
            zt && /* @__PURE__ */ o(
              "div",
              {
                "data-template-chips": "",
                className: E(
                  "flex flex-wrap items-center gap-1.5",
                  Ve.length > 0 && "mb-1.5",
                  l && !d && "pr-8"
                ),
                children: Ve.map((T) => {
                  const O = Ct.get(T.key), j = (O == null ? void 0 : O.sampleValue) ?? (O == null ? void 0 : O.label), _ = /* @__PURE__ */ C(
                    "span",
                    {
                      "data-template-chip": T.key,
                      className: "inline-flex max-w-full items-center gap-1 rounded-full bg-[var(--abc-flow-chip-bg)] px-2 py-0.5 text-[11px] font-medium leading-tight text-[var(--abc-flow-chip-fg)] shadow-2xs",
                      children: [
                        /* @__PURE__ */ o("span", { className: "truncate font-mono", children: T.key }),
                        u && j && j !== T.key && /* @__PURE__ */ o("span", { className: "max-w-[110px] truncate rounded-full bg-[var(--abc-flow-chip-sub-bg)] px-1.5 py-0 text-[10px] font-normal text-[var(--abc-flow-chip-sub-fg)]", children: j }),
                        e && G && /* @__PURE__ */ o(
                          "button",
                          {
                            type: "button",
                            "aria-label": `移除变量 ${T.key}`,
                            onClick: (W) => {
                              W.stopPropagation(), Rt(T);
                            },
                            className: "inline-flex h-3.5 w-3.5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--abc-flow-chip-sub-bg)] text-[var(--abc-flow-chip-fg)] transition-colors hover:bg-[var(--abc-flow-chip-close-hover)] focus:outline-none focus-visible:ring-1 focus-visible:ring-current",
                            children: /* @__PURE__ */ o(Xe, { className: "h-2.5 w-2.5" })
                          }
                        )
                      ]
                    },
                    `${T.key}_${T.occurrenceIndex}`
                  );
                  return O != null && O.description ? /* @__PURE__ */ o(
                    gt,
                    {
                      content: O.description,
                      placement: "top",
                      delay: 100,
                      children: _
                    },
                    `${T.key}_${T.occurrenceIndex}`
                  ) : _;
                })
              }
            ),
            /* @__PURE__ */ o("div", { className: "relative flex w-full items-center", children: d ? /* @__PURE__ */ o(
              "textarea",
              {
                ref: Ce,
                id: H,
                name: n,
                rows: f,
                value: J,
                placeholder: B,
                disabled: M,
                readOnly: $,
                required: y,
                "aria-label": X,
                "aria-labelledby": Y,
                "aria-describedby": Qe,
                "aria-invalid": De || void 0,
                onChange: (T) => {
                  ie(T.target.value), re();
                },
                onSelect: re,
                onKeyUp: re,
                onClick: re,
                onFocus: ne,
                onBlur: (T) => {
                  re(), D == null || D(T);
                },
                className: E(
                  "w-full resize-y bg-transparent pb-5 pr-8 text-inherit leading-relaxed text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  q && "font-mono",
                  xe
                )
              }
            ) : /* @__PURE__ */ o(
              "input",
              {
                ref: Ce,
                id: H,
                name: n,
                type: "text",
                value: J,
                placeholder: B,
                disabled: M,
                readOnly: $,
                required: y,
                "aria-label": X,
                "aria-labelledby": Y,
                "aria-describedby": Qe,
                "aria-invalid": De || void 0,
                onChange: (T) => {
                  ie(T.target.value), re();
                },
                onSelect: re,
                onKeyUp: re,
                onClick: re,
                onFocus: ne,
                onBlur: (T) => {
                  re(), D == null || D(T);
                },
                className: E(
                  "w-full bg-transparent text-inherit leading-normal text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  l && (Be ? "pr-14" : "pr-8"),
                  !l && Be && "pr-7",
                  q && "font-mono",
                  xe
                )
              }
            ) }),
            (Be || l) && /* @__PURE__ */ C("div", { className: "absolute bottom-1.5 right-1.5 flex items-center gap-1", children: [
              Be && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  "aria-label": Q,
                  onClick: () => {
                    var T;
                    ie(""), (T = Ne.current) == null || T.focus();
                  },
                  className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  children: /* @__PURE__ */ o(Xe, { className: "h-3 w-3" })
                }
              ),
              l && /* @__PURE__ */ o(
                "button",
                {
                  ref: ke,
                  type: "button",
                  disabled: !G,
                  "aria-label": z,
                  "aria-expanded": te,
                  "aria-haspopup": "dialog",
                  "aria-controls": te ? Fe : void 0,
                  "data-template-picker-trigger": "",
                  title: z,
                  onMouseDown: (T) => {
                    T.preventDefault(), re();
                  },
                  onClick: () => {
                    G && ue(!te);
                  },
                  className: E(
                    "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                    G ? te ? "cursor-pointer border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "cursor-pointer border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/60 hover:text-[var(--abc-primary)]" : "cursor-not-allowed border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] opacity-55"
                  ),
                  children: /* @__PURE__ */ o(Dt, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ]
        }
      ),
      (F || w) && /* @__PURE__ */ o(
        "div",
        {
          id: Ee,
          className: E(
            "text-[11px] leading-snug",
            F ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg-muted)]"
          ),
          children: F ?? w
        }
      ),
      /* @__PURE__ */ o(
        jr,
        {
          floatingRef: Se,
          portalContainer: Ft,
          portalTheme: Tt,
          isMounted: qe,
          isVisible: Mt,
          popoverId: Fe,
          floatingStyle: It,
          actualSide: Et,
          resolvedMotion: de,
          pickerTitle: v,
          pickerTriggerLabel: z,
          pickerPlaceholder: I,
          emptyVariablesText: R,
          searchable: h,
          totalVariablesCount: i.length,
          query: ye,
          onQueryChange: $e,
          groupedVariables: $t,
          onSelect: Lt,
          popoverClassName: Ie
        }
      )
    ] });
  }
);
Kr.displayName = "TemplateVariableInput";
function Ae(r) {
  if (r !== void 0)
    return typeof r == "number" ? `${r}px` : r;
}
const kt = Z.forwardRef(
  ({
    title: r,
    description: t,
    icon: a,
    badge: d,
    headerExtra: f,
    tone: i = "slate",
    align: c,
    dashed: e = !0,
    selected: u = !1,
    width: p,
    height: s,
    minWidth: l = 220,
    minHeight: h = 148,
    className: g,
    headerClassName: b,
    bodyClassName: x,
    style: v,
    children: I,
    ...z
  }, R) => {
    const N = Z.Children.count(I) > 0, m = c ?? (N ? "top-left" : "center"), k = yt[i], n = {
      width: Ae(p),
      height: Ae(s),
      minWidth: Ae(l),
      minHeight: Ae(h),
      ...v
    }, S = m === "center" && !N;
    return /* @__PURE__ */ C(
      "div",
      {
        ref: R,
        "data-tone": i,
        "data-align": m,
        "data-selected": u ? "true" : "false",
        style: n,
        className: E(
          "relative flex flex-col rounded-[var(--abc-radius-xl)] border-[1.5px] transition-[border-color,box-shadow,background-color] duration-[var(--abc-motion-fast,140ms)] ease-out",
          e ? "border-dashed" : "border-solid",
          k.sectionFrame,
          u && "ring-2 ring-[var(--abc-primary)] border-[var(--abc-primary)]",
          S ? "items-center justify-center p-5 text-center" : "px-3.5 py-3 text-left",
          g
        ),
        ...z,
        children: [
          (r !== void 0 || t !== void 0 || a || d || f) && /* @__PURE__ */ C(
            "div",
            {
              className: E(
                S ? "flex max-w-[260px] flex-col items-center gap-1.5" : E(
                  "flex w-full justify-between gap-2",
                  t !== void 0 ? "items-start" : "items-center"
                ),
                b
              ),
              children: [
                /* @__PURE__ */ C(
                  "div",
                  {
                    className: E(
                      "min-w-0",
                      S ? "flex flex-col items-center gap-1" : "flex-1 space-y-0.5"
                    ),
                    children: [
                      (a || r !== void 0 || d) && /* @__PURE__ */ C(
                        "div",
                        {
                          className: E(
                            "flex min-w-0 items-center gap-1.5",
                            S ? "justify-center" : "justify-start"
                          ),
                          children: [
                            a && /* @__PURE__ */ o("span", { className: E("inline-flex shrink-0 items-center", k.sectionTitle), children: a }),
                            r !== void 0 && /* @__PURE__ */ o(
                              "div",
                              {
                                title: typeof r == "string" ? r : void 0,
                                className: E(
                                  "font-medium leading-snug",
                                  S ? "text-[15px]" : "min-w-0 truncate whitespace-nowrap text-xs font-semibold",
                                  k.sectionTitle
                                ),
                                children: r
                              }
                            ),
                            d && /* @__PURE__ */ o("span", { className: "shrink-0", children: d })
                          ]
                        }
                      ),
                      t !== void 0 && /* @__PURE__ */ o(
                        "p",
                        {
                          className: E(
                            "m-0 text-xs leading-relaxed text-[var(--abc-fg-muted)]",
                            S && "max-w-[240px]"
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
                    className: E(
                      "nodrag nopan shrink-0",
                      S && "absolute right-3 top-3"
                    ),
                    children: f
                  }
                )
              ]
            }
          ),
          N && /* @__PURE__ */ o("div", { className: E("mt-3 min-h-0 flex-1", x), children: I })
        ]
      }
    );
  }
);
kt.displayName = "FlowSectionFrame";
const wo = ({
  zoomPercent: r,
  onZoomOut: t,
  onZoomReset: a,
  onZoomIn: d,
  onFitView: f,
  onAutoLayout: i,
  showMiniMap: c = !1,
  onToggleMiniMap: e,
  interactionMode: u = "pan",
  onInteractionModeChange: p,
  interactive: s = !0,
  onToggleInteractive: l,
  snapToGrid: h = !1,
  onToggleSnapToGrid: g,
  onUndo: b,
  onRedo: x,
  canUndo: v = !1,
  canRedo: I = !1,
  gesturePreset: z = "default",
  onToggleGesturePreset: R,
  onExportImage: N,
  extraActions: m,
  primaryAction: k,
  labels: n,
  className: S,
  testId: F = "abc-flow-viewport-controls"
}) => {
  const w = !!(p || l || g || R), L = !!(b || x), y = !!(f || i || e || N || m && m.length > 0), M = "h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]", $ = "h-7 w-7 border border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)]";
  return /* @__PURE__ */ C(
    "div",
    {
      "data-slot": "flow-viewport-controls",
      "data-abc-no-press-scale": "",
      "data-testid": F,
      className: E(
        "nodrag nopan flex flex-wrap items-center gap-1 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 p-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur",
        S
      ),
      children: [
        /* @__PURE__ */ o(
          P,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.zoomOut) ?? "缩小画布",
            title: (n == null ? void 0 : n.zoomOutTitle) ?? (n == null ? void 0 : n.zoomOut) ?? "缩小画布 (-)",
            onClick: t,
            className: M,
            children: /* @__PURE__ */ o(Bt, { size: 13 })
          }
        ),
        /* @__PURE__ */ C(
          P,
          {
            type: "button",
            variant: "ghost",
            size: "xs",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.zoomReset) ?? "重置画布缩放至 100%",
            title: (n == null ? void 0 : n.zoomResetTitle) ?? (n == null ? void 0 : n.zoomReset) ?? "重置缩放比例 (0)",
            onClick: a,
            className: "h-7 min-w-[44px] px-1.5 font-mono text-[11px] font-medium text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]",
            children: [
              r,
              "%"
            ]
          }
        ),
        /* @__PURE__ */ o(
          P,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.zoomIn) ?? "放大画布",
            title: (n == null ? void 0 : n.zoomInTitle) ?? (n == null ? void 0 : n.zoomIn) ?? "放大画布 (+)",
            onClick: d,
            className: M,
            children: /* @__PURE__ */ o(Oe, { size: 13 })
          }
        ),
        w && /* @__PURE__ */ C(ve, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          p && /* @__PURE__ */ C(ve, { children: [
            /* @__PURE__ */ o(
              P,
              {
                type: "button",
                variant: u === "pan" ? "secondary" : "ghost",
                size: "icon-sm",
                pressScale: !1,
                "aria-pressed": u === "pan",
                "aria-label": (n == null ? void 0 : n.panMode) ?? "拖拽平移模式",
                title: (n == null ? void 0 : n.panMode) ?? "拖拽平移模式 (Hand)",
                onClick: () => p("pan"),
                className: u === "pan" ? $ : M,
                children: /* @__PURE__ */ o(At, { size: 13 })
              }
            ),
            /* @__PURE__ */ o(
              P,
              {
                type: "button",
                variant: u === "select" ? "secondary" : "ghost",
                size: "icon-sm",
                pressScale: !1,
                "aria-pressed": u === "select",
                "aria-label": (n == null ? void 0 : n.selectMode) ?? "框选多节点模式",
                title: (n == null ? void 0 : n.selectMode) ?? "左键框选模式 (Select)",
                onClick: () => p("select"),
                className: u === "select" ? $ : M,
                children: /* @__PURE__ */ o(Ot, { size: 13 })
              }
            )
          ] }),
          l && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: s ? "ghost" : "secondary",
              size: "icon-sm",
              pressScale: !1,
              "aria-pressed": !s,
              "aria-label": s ? (n == null ? void 0 : n.lockCanvas) ?? "锁定画布禁止编辑" : (n == null ? void 0 : n.unlockCanvas) ?? "解锁画布恢复编辑",
              title: s ? (n == null ? void 0 : n.lockCanvas) ?? "锁定画布" : (n == null ? void 0 : n.unlockCanvas) ?? "已锁定，点击解锁",
              onClick: l,
              className: s ? M : $,
              children: s ? /* @__PURE__ */ o(Pt, { size: 13 }) : /* @__PURE__ */ o(Vt, { size: 13 })
            }
          ),
          g && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: h ? "secondary" : "ghost",
              size: "icon-sm",
              pressScale: !1,
              "aria-pressed": h,
              "aria-label": (n == null ? void 0 : n.snapToGrid) ?? "开关网格磁吸对齐",
              title: (n == null ? void 0 : n.snapToGrid) ?? "网格磁吸对齐 (Snap to Grid)",
              onClick: g,
              className: h ? $ : M,
              children: /* @__PURE__ */ o(_t, { size: 13 })
            }
          ),
          R && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: z === "figma" ? "secondary" : "ghost",
              size: "icon-sm",
              pressScale: !1,
              "aria-pressed": z === "figma",
              "aria-label": (n == null ? void 0 : n.gesturePreset) ?? "切换触控板平移手势 (Figma 模式)",
              title: z === "figma" ? (n == null ? void 0 : n.gesturePreset) ?? "当前：Figma 触控板双指平移 + 捏合缩放" : (n == null ? void 0 : n.gesturePreset) ?? "切换至 Figma 触控板平移手势",
              onClick: R,
              className: z === "figma" ? $ : M,
              children: /* @__PURE__ */ o(Wt, { size: 13 })
            }
          )
        ] }),
        L && /* @__PURE__ */ C(ve, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          b && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: !v,
              "aria-label": (n == null ? void 0 : n.undo) ?? "撤销操作",
              title: (n == null ? void 0 : n.undo) ?? "撤销 (⌘Z)",
              onClick: b,
              className: M,
              children: /* @__PURE__ */ o(jt, { size: 13 })
            }
          ),
          x && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: !I,
              "aria-label": (n == null ? void 0 : n.redo) ?? "重做操作",
              title: (n == null ? void 0 : n.redo) ?? "重做 (⇧⌘Z)",
              onClick: x,
              className: M,
              children: /* @__PURE__ */ o(Xt, { size: 13 })
            }
          )
        ] }),
        y && /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
        f && /* @__PURE__ */ o(
          P,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.fitView) ?? "自适应居中视口",
            title: (n == null ? void 0 : n.fitViewTitle) ?? (n == null ? void 0 : n.fitView) ?? "自适应居中视口",
            onClick: f,
            className: M,
            children: /* @__PURE__ */ o(Yt, { size: 13 })
          }
        ),
        i && /* @__PURE__ */ o(
          P,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "aria-label": (n == null ? void 0 : n.autoLayout) ?? "一键整理排版",
            title: (n == null ? void 0 : n.autoLayoutTitle) ?? (n == null ? void 0 : n.autoLayout) ?? "一键整理排版",
            onClick: i,
            className: M,
            children: /* @__PURE__ */ o(Kt, { size: 13 })
          }
        ),
        e && /* @__PURE__ */ o(
          P,
          {
            type: "button",
            variant: c ? "secondary" : "ghost",
            size: "icon-sm",
            pressScale: !1,
            "data-testid": "toggle-minimap-btn",
            "aria-pressed": c,
            "aria-label": (n == null ? void 0 : n.toggleMiniMap) ?? "开关缩略图导航",
            title: c ? (n == null ? void 0 : n.hideMiniMapTitle) ?? "隐藏缩略图" : (n == null ? void 0 : n.showMiniMapTitle) ?? "显示缩略图",
            onClick: e,
            className: c ? $ : M,
            children: /* @__PURE__ */ o(Ht, { size: 13 })
          }
        ),
        N && /* @__PURE__ */ o(
          P,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            "data-testid": "export-flow-image-btn",
            "aria-label": (n == null ? void 0 : n.exportImage) ?? "导出流程图矢量图像 (SVG)",
            title: (n == null ? void 0 : n.exportImage) ?? "导出完整画布图像 (SVG)",
            onClick: N,
            className: M,
            children: /* @__PURE__ */ o(Zt, { size: 13 })
          }
        ),
        m == null ? void 0 : m.map((B) => /* @__PURE__ */ o(
          P,
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
            className: B.active ? $ : M,
            children: B.icon
          },
          B.key
        )),
        k && /* @__PURE__ */ C(ve, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          /* @__PURE__ */ C(
            P,
            {
              type: "button",
              variant: "primary",
              size: "xs",
              pressScale: !1,
              disabled: k.disabled,
              "data-testid": k.testId,
              "aria-label": k.ariaLabel ?? k.label,
              onClick: k.onClick,
              className: "h-7 gap-1 rounded-lg px-2.5 text-[11px] font-semibold",
              children: [
                k.icon ?? /* @__PURE__ */ o(Oe, { size: 12 }),
                /* @__PURE__ */ o("span", { children: k.label })
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
}, Hr = typeof SVGElement < "u" && typeof SVGElement.prototype.getBBox == "function", yo = ({
  id: r,
  sourceX: t,
  sourceY: a,
  targetX: d,
  targetY: f,
  sourcePosition: i,
  targetPosition: c,
  data: e,
  selected: u,
  markerStart: p,
  markerEnd: s,
  selectedStroke: l = "#4f46e5",
  interactionWidth: h = 24,
  renderActionMenu: g,
  renderToolbar: b
}) => {
  const [x, v] = pe(!1), I = (e == null ? void 0 : e.tone) ?? "default", z = (e == null ? void 0 : e.routeStyle) ?? "bezier", R = (e == null ? void 0 : e.autoAvoidBackward) ?? !0, N = d < t + 24;
  let m, k, n;
  z === "straight" ? [m, k, n] = Ze({ sourceX: t, sourceY: a, targetX: d, targetY: f }) : z === "step" ? [m, k, n] = Re({
    sourceX: t,
    sourceY: a,
    sourcePosition: i,
    targetX: d,
    targetY: f,
    targetPosition: c,
    borderRadius: 0,
    offset: N ? 34 : 20
  }) : z === "simplebezier" ? [m, k, n] = pt({
    sourceX: t,
    sourceY: a,
    sourcePosition: i,
    targetX: d,
    targetY: f,
    targetPosition: c
  }) : z === "smoothstep" || R && N ? [m, k, n] = Re({
    sourceX: t,
    sourceY: a,
    sourcePosition: i,
    targetX: d,
    targetY: f,
    targetPosition: c,
    borderRadius: 16,
    offset: N ? 34 : 20
  }) : [m, k, n] = Ge({
    sourceX: t,
    sourceY: a,
    sourcePosition: i,
    targetX: d,
    targetY: f,
    targetPosition: c,
    curvature: 0.35
  });
  const S = rt[I] ?? rt.default, F = u ? Math.max(2.2, ((e == null ? void 0 : e.strokeWidth) ?? 1.7) + 0.5) : (e == null ? void 0 : e.strokeWidth) ?? (I === "muted" ? 1.25 : 1.7), w = g ?? (e == null ? void 0 : e.renderActionMenu), L = b ?? (e == null ? void 0 : e.renderToolbar), y = !!(e != null && e.showActionTrigger && (w || e != null && e.onActionClick));
  return /* @__PURE__ */ C(ve, { children: [
    /* @__PURE__ */ C("g", { "data-testid": e == null ? void 0 : e.testId, "data-route-style": z, children: [
      /* @__PURE__ */ o(
        bt,
        {
          id: r,
          path: m,
          markerStart: p,
          markerEnd: s,
          interactionWidth: h,
          className: e != null && e.animated ? "abc-flow-edge-animated" : void 0,
          style: {
            stroke: u ? l : S.stroke,
            strokeWidth: F,
            strokeDasharray: e != null && e.dashed ? "5 4" : void 0,
            opacity: e != null && e.dimmed ? 0.55 : 0.92,
            transition: "stroke 150ms ease, stroke-width 150ms ease"
          }
        }
      ),
      (e == null ? void 0 : e.svgLabel) && !(e != null && e.label) && (Hr ? /* @__PURE__ */ o(
        mt,
        {
          x: k,
          y: n,
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
          x: k,
          y: n,
          textAnchor: "middle",
          dominantBaseline: "central",
          fontSize: 10,
          fontWeight: 600,
          fill: "var(--abc-fg-secondary, #334155)",
          children: e.svgLabel
        }
      ))
    ] }),
    L && /* @__PURE__ */ o(
      fr,
      {
        edgeId: r,
        x: k,
        y: n - 26,
        isVisible: !!u,
        alignX: "center",
        alignY: "bottom",
        children: /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "flow-edge-toolbar",
            onClick: (M) => M.stopPropagation(),
            onMouseDown: (M) => M.stopPropagation(),
            className: "nodrag nopan relative z-30",
            children: L(r)
          }
        )
      }
    ),
    ((e == null ? void 0 : e.label) || y) && /* @__PURE__ */ o(gr, { children: /* @__PURE__ */ C(
      "div",
      {
        style: {
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${k}px,${n}px)`,
          // 标签容器透传点击至下方 SVG 连线热区，避免点击“命中/未命中”胶囊时无法选中或右键连线
          pointerEvents: "none"
        },
        className: "nodrag nopan z-10 flex items-center gap-1",
        children: [
          (e == null ? void 0 : e.label) && /* @__PURE__ */ o(
            "span",
            {
              className: E(
                "pointer-events-none select-none rounded-full border px-2 py-0.5 text-[10px] font-medium leading-tight shadow-2xs",
                u && "ring-1 ring-[var(--abc-primary)]",
                S.labelClass
              ),
              children: e.label
            }
          ),
          y && /* @__PURE__ */ C("div", { className: "pointer-events-auto relative", children: [
            /* @__PURE__ */ o(
              P,
              {
                type: "button",
                variant: "outline",
                size: "icon-sm",
                pressScale: !1,
                "aria-label": (e == null ? void 0 : e.actionAriaLabel) ?? "连线操作",
                title: (e == null ? void 0 : e.actionAriaLabel) ?? "连线操作",
                onClick: (M) => {
                  var $;
                  M.stopPropagation(), w ? v((B) => !B) : ($ = e == null ? void 0 : e.onActionClick) == null || $.call(e, r);
                },
                className: E(
                  "h-5 w-5 rounded-full border p-0 shadow-xs transition",
                  x ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 text-[var(--abc-fg-muted)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]"
                ),
                children: /* @__PURE__ */ o(Oe, { size: 11 })
              }
            ),
            x && w && /* @__PURE__ */ o(
              "div",
              {
                onClick: (M) => M.stopPropagation(),
                className: "absolute left-1/2 top-6 z-50 -translate-x-1/2",
                children: w({ close: () => v(!1) })
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
  const a = (r.measured.width ?? 200) / 2, d = (r.measured.height ?? 90) / 2, f = r.internals.positionAbsolute.x + a, i = r.internals.positionAbsolute.y + d, c = (t.measured.width ?? 200) / 2, e = (t.measured.height ?? 90) / 2, u = t.internals.positionAbsolute.x + c, p = t.internals.positionAbsolute.y + e, s = (u - f) / (2 * a) - (p - i) / (2 * d), l = (u - f) / (2 * a) + (p - i) / (2 * d), h = 1 / (Math.abs(s) + Math.abs(l) || 1), g = h * s, b = h * l;
  return {
    x: a * (g + b) + f,
    y: d * (-g + b) + i
  };
}
function at(r, t) {
  const a = Math.round(r.internals.positionAbsolute.x), d = Math.round(r.internals.positionAbsolute.y), f = Math.round(t.x), i = Math.round(t.y), c = r.measured.width ?? 200, e = r.measured.height ?? 90;
  return f <= a + 1 ? fe.Left : f >= a + c - 1 ? fe.Right : i <= d + 1 ? fe.Top : i >= d + e - 1 ? fe.Bottom : fe.Top;
}
const No = ({
  id: r,
  source: t,
  target: a,
  sourceX: d,
  sourceY: f,
  targetX: i,
  targetY: c,
  sourcePosition: e,
  targetPosition: u,
  markerStart: p,
  markerEnd: s,
  data: l,
  selected: h,
  selectedStroke: g = "var(--abc-primary, #4f46e5)"
}) => {
  const b = et(t), x = et(a);
  let v = d, I = f, z = i, R = c, N = e, m = u;
  if (b && x) {
    const M = nt(b, x), $ = nt(x, b);
    v = M.x, I = M.y, z = $.x, R = $.y, N = at(b, M), m = at(x, $);
  }
  const k = (l == null ? void 0 : l.routeStyle) ?? "bezier", n = (l == null ? void 0 : l.tone) ?? "primary";
  let S, F, w;
  k === "straight" ? [S, F, w] = Ze({ sourceX: v, sourceY: I, targetX: z, targetY: R }) : k === "smoothstep" ? [S, F, w] = Re({
    sourceX: v,
    sourceY: I,
    sourcePosition: N,
    targetX: z,
    targetY: R,
    targetPosition: m,
    borderRadius: 14
  }) : [S, F, w] = Ge({
    sourceX: v,
    sourceY: I,
    sourcePosition: N,
    targetX: z,
    targetY: R,
    targetPosition: m
  });
  const L = h ? g : ot[n] ?? ot.primary, y = h ? Math.max(2.2, ((l == null ? void 0 : l.strokeWidth) ?? 1.8) + 0.5) : (l == null ? void 0 : l.strokeWidth) ?? 1.8;
  return /* @__PURE__ */ C("g", { "data-slot": "flow-floating-edge", "data-testid": l == null ? void 0 : l.testId, "data-route-style": k, children: [
    /* @__PURE__ */ o(
      bt,
      {
        id: r,
        path: S,
        markerStart: p,
        markerEnd: s,
        className: l != null && l.animated ? "abc-flow-edge-animated" : void 0,
        style: {
          stroke: L,
          strokeWidth: y,
          strokeDasharray: l != null && l.dashed ? "6 4" : void 0,
          transition: "stroke 150ms ease, stroke-width 150ms ease"
        }
      }
    ),
    (l == null ? void 0 : l.label) && (Zr ? /* @__PURE__ */ o(
      mt,
      {
        x: F,
        y: w,
        label: l.label,
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
        x: F,
        y: w,
        textAnchor: "middle",
        dominantBaseline: "central",
        fontSize: 10.5,
        fontWeight: 600,
        fill: "var(--abc-fg, #0f172a)",
        children: l.label
      }
    ))
  ] });
}, ko = fe, So = pr, Co = hr, Gr = {
  "node.a11yDescription.default": "按回车或空格选中节点，使用方向键微调位置，按退格键删除。",
  "node.a11yDescription.keyboardDisabled": "按回车或空格选中节点，按退格键删除。",
  "node.a11yDescription.ariaLiveMessage": ({ direction: r, x: t, y: a }) => `已向${r}移动节点至坐标 x=${Math.round(t)}, y=${Math.round(a)}`,
  "edge.a11yDescription.default": "按回车或空格选中连线，按退格键删除。",
  "controls.ariaLabel": "画布视口控制栏",
  "controls.fitView.ariaLabel": "自适应居中画布",
  "controls.interactive.ariaLabel": "切换画布编辑锁定",
  "controls.zoomIn.ariaLabel": "放大画布",
  "controls.zoomOut.ariaLabel": "缩小画布",
  "minimap.ariaLabel": "画布缩略图导航",
  "handle.ariaLabel": "节点连接端口"
}, Ur = {
  "controls.ariaLabel": "Canvas viewport controls",
  "controls.fitView.ariaLabel": "Fit canvas to view",
  "controls.interactive.ariaLabel": "Toggle canvas edit lock",
  "controls.zoomIn.ariaLabel": "Zoom in canvas",
  "controls.zoomOut.ariaLabel": "Zoom out canvas",
  "minimap.ariaLabel": "Canvas minimap navigation",
  "handle.ariaLabel": "Node connection handle"
};
function he(r, t = 220, a = 110) {
  var i, c, e, u;
  const d = ((i = r.measured) == null ? void 0 : i.width) ?? (typeof r.width == "number" ? r.width : void 0) ?? (typeof ((c = r.style) == null ? void 0 : c.width) == "number" ? r.style.width : void 0) ?? t, f = ((e = r.measured) == null ? void 0 : e.height) ?? (typeof r.height == "number" ? r.height : void 0) ?? (typeof ((u = r.style) == null ? void 0 : u.height) == "number" ? r.style.height : void 0) ?? a;
  return { width: d, height: f };
}
function zo(r, t, a) {
  const d = new Set(t), f = r.filter((e) => d.has(e.id));
  if (f.length < 2) return [...r];
  const i = f.map((e) => {
    const { width: u, height: p } = he(e);
    return {
      node: e,
      x: e.position.x,
      y: e.position.y,
      width: u,
      height: p,
      right: e.position.x + u,
      bottom: e.position.y + p,
      cx: e.position.x + u / 2,
      cy: e.position.y + p / 2
    };
  }), c = /* @__PURE__ */ new Map();
  if (a === "left") {
    const e = Math.min(...i.map((u) => u.x));
    for (const u of i) c.set(u.node.id, { x: Math.round(e), y: u.y });
  } else if (a === "right") {
    const e = Math.max(...i.map((u) => u.right));
    for (const u of i) c.set(u.node.id, { x: Math.round(e - u.width), y: u.y });
  } else if (a === "centerX") {
    const e = Math.min(...i.map((s) => s.x)), u = Math.max(...i.map((s) => s.right)), p = (e + u) / 2;
    for (const s of i) c.set(s.node.id, { x: Math.round(p - s.width / 2), y: s.y });
  } else if (a === "top") {
    const e = Math.min(...i.map((u) => u.y));
    for (const u of i) c.set(u.node.id, { x: u.x, y: Math.round(e) });
  } else if (a === "bottom") {
    const e = Math.max(...i.map((u) => u.bottom));
    for (const u of i) c.set(u.node.id, { x: u.x, y: Math.round(e - u.height) });
  } else if (a === "centerY") {
    const e = Math.min(...i.map((s) => s.y)), u = Math.max(...i.map((s) => s.bottom)), p = (e + u) / 2;
    for (const s of i) c.set(s.node.id, { x: s.x, y: Math.round(p - s.height / 2) });
  } else if (a === "distributeH" && i.length >= 3) {
    const e = [...i].sort((g, b) => g.x - b.x), u = e[0], p = e[e.length - 1], s = e.reduce((g, b) => g + b.width, 0), l = (p.right - u.x - s) / (e.length - 1);
    let h = u.x;
    for (const g of e)
      c.set(g.node.id, { x: Math.round(h), y: g.y }), h += g.width + l;
  } else if (a === "distributeV" && i.length >= 3) {
    const e = [...i].sort((g, b) => g.y - b.y), u = e[0], p = e[e.length - 1], s = e.reduce((g, b) => g + b.height, 0), l = (p.bottom - u.y - s) / (e.length - 1);
    let h = u.y;
    for (const g of e)
      c.set(g.node.id, { x: g.x, y: Math.round(h) }), h += g.height + l;
  }
  return r.map((e) => {
    const u = c.get(e.id);
    return u ? { ...e, position: u } : e;
  });
}
function Mo(r, t, a, d = {}) {
  const f = d.maxDistance ?? 170, i = new Set(d.ignoreTypes ?? ["flow-group", "sectionFrameNode"]);
  if (r.type && i.has(r.type)) return null;
  const c = he(r), e = r.position.x + c.width / 2, u = r.position.y + c.height / 2;
  let p = null;
  for (const s of t) {
    if (s.id === r.id || s.type && i.has(s.type) || s.parentId !== r.parentId) continue;
    const l = he(s), h = s.position.x + l.width / 2, g = s.position.y + l.height / 2, b = Math.hypot(e - h, u - g);
    if (b > f) continue;
    const x = h <= e ? s.id : r.id, v = h <= e ? r.id : s.id;
    a.some(
      (z) => z.source === x && z.target === v || z.source === v && z.target === x
    ) || (!p || b < p.distance) && (p = { source: x, target: v, distance: b });
  }
  return p;
}
function Io(r, t, a = ["flow-group"]) {
  const d = new Set(a), f = new Map(t.map((h) => [h.id, h]));
  let i = r.position.x, c = r.position.y, e = r.parentId;
  const u = /* @__PURE__ */ new Set();
  for (; e && !u.has(e); ) {
    u.add(e);
    const h = f.get(e);
    if (!h) break;
    i += h.position.x, c += h.position.y, e = h.parentId;
  }
  const p = he(r), s = i + p.width / 2, l = c + p.height / 2;
  for (const h of t) {
    if (h.id === r.id || !h.type || !d.has(h.type)) continue;
    const { width: g, height: b } = he(h, 360, 240), x = h.position.x, v = h.position.y;
    if (s >= x && s <= x + g && l >= v && l <= v + b)
      return {
        groupId: h.id,
        relativePosition: {
          x: Math.max(16, Math.round(i - x)),
          y: Math.max(44, Math.round(c - v))
        }
      };
  }
  return {
    groupId: null,
    relativePosition: {
      x: Math.round(i),
      y: Math.round(c)
    }
  };
}
function qr(r, t, a, d = { x: 40, y: 40 }) {
  const f = new Set(a);
  if (f.size === 0) return { nodes: [], edges: [], idMap: {} };
  for (const s of r)
    s.parentId && f.has(s.parentId) && f.add(s.id);
  const i = Date.now().toString(36), c = {};
  let e = 0;
  for (const s of r)
    f.has(s.id) && (e += 1, c[s.id] = `${s.id}-copy-${i}-${e}`);
  const u = r.filter((s) => f.has(s.id)).map((s) => {
    const l = s.parentId && c[s.parentId] ? c[s.parentId] : void 0;
    return {
      ...s,
      id: c[s.id],
      parentId: l ?? s.parentId,
      selected: !0,
      position: l ? { ...s.position } : { x: Math.round(s.position.x + d.x), y: Math.round(s.position.y + d.y) },
      data: s.data ? { ...s.data } : s.data
    };
  }), p = t.filter((s) => !!(c[s.source] && c[s.target])).map((s, l) => ({
    ...s,
    id: `${s.id}-copy-${i}-${l + 1}`,
    source: c[s.source],
    target: c[s.target],
    selected: !0,
    data: s.data ? { ...s.data } : s.data
  }));
  return { nodes: u, edges: p, idMap: c };
}
function Qr(r, t = {}) {
  const a = t.width ?? 1280, d = t.height ?? 760, f = t.padding ?? 0.14, i = t.minZoom ?? 0.25, c = t.maxZoom ?? 2, e = br(r), u = e.width > 0 && e.height > 0 ? e : { x: 0, y: 0, width: a, height: d };
  return {
    viewport: mr(
      u,
      a,
      d,
      i,
      c,
      f
    ),
    bounds: u,
    imageWidth: a,
    imageHeight: d
  };
}
function Eo(r, t, a = {}) {
  const { viewport: d, imageWidth: f, imageHeight: i } = Qr(r, {
    width: a.width ?? 1280,
    height: a.height ?? 720
  }), c = !!a.dark, e = a.backgroundColor ?? (c ? "#0b101b" : "#f8fafc"), u = c ? "#141b2d" : "#ffffff", p = c ? "#334155" : "#cbd5e1", s = c ? "#f1f5f9" : "#0f172a", l = c ? "#94a3b8" : "#64748b", h = c ? "#64748b" : "#94a3b8", g = (N) => N.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), b = new Map(r.map((N) => [N.id, N])), x = (N) => {
    let m = N.position.x, k = N.position.y, n = N.parentId;
    const S = /* @__PURE__ */ new Set();
    for (; n && !S.has(n); ) {
      S.add(n);
      const F = b.get(n);
      if (!F) break;
      m += F.position.x, k += F.position.y, n = F.parentId;
    }
    return { x: m, y: k };
  }, v = t.map((N) => {
    const m = b.get(N.source), k = b.get(N.target);
    if (!m || !k) return "";
    const n = x(m), S = x(k), F = he(m), w = he(k), L = n.x + F.width, y = n.y + F.height / 2, M = S.x, $ = S.y + w.height / 2, B = (L + M) / 2;
    return `<path d="M ${L} ${y} C ${B} ${y}, ${B} ${$}, ${M} ${$}" fill="none" stroke="${h}" stroke-width="2" />`;
  }).join(""), I = r.map((N) => {
    var L, y;
    const m = x(N), { width: k, height: n } = he(N), S = ((L = N.data) == null ? void 0 : L.title) ?? ((y = N.data) == null ? void 0 : y.label) ?? N.id, F = g(String(S).slice(0, 36));
    return N.type === "flow-group" || N.type === "sectionFrameNode" ? `<g transform="translate(${m.x}, ${m.y})">
          <rect width="${k}" height="${n}" rx="14" fill="none" stroke="${p}" stroke-width="1.5" stroke-dasharray="6 4" />
          <text x="14" y="24" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="600" fill="${l}">${F}</text>
        </g>` : `<g transform="translate(${m.x}, ${m.y})">
        <rect width="${k}" height="${n}" rx="12" fill="${u}" stroke="${p}" stroke-width="1.5" />
        <text x="14" y="28" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="${s}">${F}</text>
        <text x="14" y="48" font-family="monospace" font-size="10.5" fill="${l}">${g(N.id)}</text>
      </g>`;
  }).join(""), z = a.title ? `<text x="20" y="28" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="${l}">${g(a.title)}</text>` : "", R = `<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${i}" viewBox="0 0 ${f} ${i}">
    <rect width="100%" height="100%" fill="${e}" />
    ${z}
    <g transform="translate(${d.x.toFixed(1)}, ${d.y.toFixed(1)}) scale(${d.zoom.toFixed(3)})">
      ${v}
      ${I}
    </g>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(R)}`;
}
const Jr = ({
  fromX: r,
  fromY: t,
  toX: a,
  toY: d,
  fromPosition: f,
  toPosition: i,
  connectionLineType: c = Te.Bezier,
  connectionStatus: e,
  defaultStroke: u = "var(--abc-primary, #4f46e5)",
  validStroke: p = "var(--abc-flow-edge-success-stroke, #22c55e)",
  invalidStroke: s = "var(--abc-flow-edge-danger-stroke, #e11d48)"
}) => {
  const l = {
    sourceX: r,
    sourceY: t,
    sourcePosition: f,
    targetX: a,
    targetY: d,
    targetPosition: i
  };
  let h = "";
  c === Te.Straight ? [h] = Ze(l) : c === Te.Step ? [h] = Re({ ...l, borderRadius: 0 }) : c === Te.SmoothStep ? [h] = Re({ ...l, borderRadius: 14 }) : c === Te.SimpleBezier ? [h] = pt(l) : [h] = Ge(l);
  const g = e === "valid" ? p : e === "invalid" ? s : u;
  return /* @__PURE__ */ C("g", { "data-slot": "flow-connection-line", "data-status": e ?? "idle", children: [
    /* @__PURE__ */ o(
      "path",
      {
        fill: "none",
        stroke: g,
        strokeWidth: 2,
        strokeDasharray: "6 4",
        className: "abc-flow-edge-animated",
        d: h
      }
    ),
    /* @__PURE__ */ o(
      "circle",
      {
        cx: a,
        cy: d,
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
}, eo = ({
  id: r,
  x: t,
  y: a,
  width: d,
  height: f,
  borderRadius: i = 6,
  color: c,
  selected: e,
  onClick: u
}) => {
  var I;
  const s = vr().find((z) => z.id === r), l = s == null ? void 0 : s.data, h = (s == null ? void 0 : s.type) === "flow-group" || (s == null ? void 0 : s.type) === "sectionFrameNode", g = l == null ? void 0 : l.tone, b = g && g in st ? st[g] : c ?? "#94a3b8", x = (l == null ? void 0 : l.status) ?? ((I = l == null ? void 0 : l.execution) == null ? void 0 : I.status), v = x === "running" || x === "queued" ? "#3b82f6" : x === "failed" || x === "error" ? "#f43f5e" : x === "completed" || x === "succeeded" || x === "success" ? "#10b981" : null;
  return /* @__PURE__ */ C(
    "g",
    {
      "data-slot": "flow-minimap-node",
      onClick: u ? (z) => u(z, r) : void 0,
      style: { cursor: u ? "pointer" : void 0 },
      children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: t,
            y: a,
            width: Math.max(4, d),
            height: Math.max(4, f),
            rx: i,
            ry: i,
            fill: h ? "transparent" : b,
            fillOpacity: h ? 0 : e ? 0.92 : 0.72,
            stroke: e ? "var(--abc-primary, #4f46e5)" : b,
            strokeWidth: e ? 4 : h ? 2.5 : 1.5,
            strokeDasharray: h ? "8 5" : void 0
          }
        ),
        v && d >= 28 && f >= 20 && /* @__PURE__ */ o(
          "circle",
          {
            cx: t + d - 12,
            cy: a + 12,
            r: 5.5,
            fill: v,
            stroke: "var(--abc-bg-surface, #ffffff)",
            strokeWidth: 2
          }
        )
      ]
    }
  );
}, to = ({
  horizontalLine: r,
  verticalLine: t,
  showOriginBadge: a = !1,
  children: d,
  className: f
}) => /* @__PURE__ */ o(xr, { children: /* @__PURE__ */ C(
  "div",
  {
    "data-slot": "flow-viewport-overlay",
    className: E("pointer-events-none relative", f),
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
      a && /* @__PURE__ */ o(
        "div",
        {
          style: { position: "absolute", left: 0, top: 0 },
          className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[9px] text-[var(--abc-fg-muted)] shadow-2xs",
          children: "(0, 0)"
        }
      ),
      d
    ]
  }
) }), Fo = ({ children: r }) => /* @__PURE__ */ o(vt, { children: r }), it = {
  blue: "#3b82f6",
  green: "#10b981",
  amber: "#f59e0b",
  rose: "#f43f5e",
  slate: "#64748b"
};
function ct(r, t) {
  const a = r ?? (t ? "dots" : "none");
  return a === "none" ? null : a === "lines" ? _e.Lines : a === "cross" ? _e.Cross : _e.Dots;
}
function ro(r, t) {
  if (!t || t.length === 0 || !r || r.length === 0)
    return t;
  const a = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
  for (const c of r)
    c.parentId && d.set(c.id, c.parentId), c.selected && a.add(c.id);
  if (a.size === 0 || d.size === 0)
    return t;
  let f = !1;
  const i = t.map((c) => {
    if (c.selected || typeof c.zIndex == "number")
      return c;
    const e = d.get(c.source), u = d.get(c.target);
    return e !== void 0 && a.has(e) || u !== void 0 && a.has(u) ? (f = !0, { ...c, zIndex: -1 }) : c;
  });
  return f ? i : t;
}
function lt(r) {
  if (typeof document > "u") return "light";
  const t = (i) => {
    if (!i) return null;
    const c = i.getAttribute("data-playground-theme");
    if (c === "dark" || c === "light") return c;
    const e = i.getAttribute("data-abc-theme");
    return e === "dark" || e === "light" ? e : i.classList.contains("dark") ? "dark" : i.classList.contains("light") ? "light" : null;
  }, a = (r == null ? void 0 : r.closest("[data-playground-theme], [data-abc-theme], .dark, .light")) ?? null, d = t(a);
  if (d) return d;
  const f = t(document.documentElement);
  return f || (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function oo(r, t) {
  const [a, d] = pe(() => lt(null));
  return ce(() => {
    var p, s, l, h;
    if (r !== void 0) return;
    const f = () => {
      d(lt(t.current));
    };
    if (f(), typeof document > "u") return;
    const i = /* @__PURE__ */ new Set([document.documentElement]), c = ((p = t.current) == null ? void 0 : p.closest("[data-playground-theme], [data-abc-theme], .dark, .light")) ?? null;
    c && i.add(c);
    let e = null;
    typeof MutationObserver < "u" && (e = new MutationObserver(f), i.forEach((g) => {
      e == null || e.observe(g, {
        attributes: !0,
        attributeFilter: ["data-abc-theme", "data-abc-theme-mode", "data-playground-theme", "class"]
      });
    }));
    const u = typeof window.matchMedia == "function" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    return (s = u == null ? void 0 : u.addEventListener) == null || s.call(u, "change", f), (l = window.addEventListener) == null || l.call(window, "abc:color-scheme-change", f), (h = window.addEventListener) == null || h.call(window, "bp:color-scheme-change", f), () => {
      var g, b, x;
      e == null || e.disconnect(), (g = u == null ? void 0 : u.removeEventListener) == null || g.call(u, "change", f), (b = window.removeEventListener) == null || b.call(window, "abc:color-scheme-change", f), (x = window.removeEventListener) == null || x.call(window, "bp:color-scheme-change", f);
    };
  }, [r, t]), r ?? a;
}
function no(r, t) {
  return (a) => {
    t.current = a, typeof r == "function" ? r(a) : r && typeof r == "object" && (r.current = a);
  };
}
function To({
  withProvider: r = !1,
  containerClassName: t,
  testId: a = "abc-flow-canvas-surface",
  containerRef: d,
  onDragOver: f,
  onDrop: i,
  backgroundVariant: c,
  showDotsBackground: e = !0,
  backgroundGap: u = 18,
  backgroundDotSize: p = 1.25,
  backgroundColor: s = "rgba(148, 163, 184, 0.35)",
  secondaryBackground: l,
  interactionMode: h = "pan",
  gesturePreset: g = "default",
  locale: b = "zh",
  interactive: x = !0,
  helperLines: v,
  leftRailSlot: I,
  topCenterSlot: z,
  topRightSlot: R,
  bottomLeftSlot: N,
  bottomCenterSlot: m,
  bottomRightSlot: k,
  showMiniMap: n = !1,
  enhancedMiniMap: S = !0,
  miniMapClassName: F,
  miniMapProps: w,
  loading: L = !1,
  loadingText: y = "正在加载画布...",
  children: M,
  overlaySlot: $,
  className: B,
  proOptions: K,
  connectionLineComponent: q,
  nodesDraggable: oe,
  nodesConnectable: Q,
  elementsSelectable: ee,
  edgesReconnectable: ne,
  reconnectRadius: D,
  panOnDrag: X,
  panActivationKeyCode: Y,
  panOnScroll: ae,
  panOnScrollMode: le,
  zoomOnPinch: Me,
  selectionOnDrag: xe,
  selectionMode: Ie,
  selectionKeyCode: A,
  autoPanOnNodeDrag: se,
  autoPanOnConnect: de,
  ariaLabelConfig: we,
  ...H
}) {
  const Ee = ct(c, e), Fe = l ? ct(l.variant ?? "lines", !0) : null, J = h === "select", ie = g === "figma", te = {
    ...b === "en" ? Ur : Gr,
    ...we
  }, ue = (be) => {
    var G;
    const Ce = (G = be.data) == null ? void 0 : G.tone;
    return Ce && Ce in it ? it[Ce] : be.type === "flow-group" ? "rgba(99, 102, 241, 0.22)" : "#94a3b8";
  }, ye = U(null), $e = Z.useMemo(
    () => no(d, ye),
    [d]
  ), Ne = oo(H.colorMode, ye), ke = Z.useMemo(
    () => ro(H.nodes, H.edges),
    [H.edges, H.nodes]
  ), Se = /* @__PURE__ */ C(
    "div",
    {
      ref: $e,
      "data-testid": a,
      "data-interaction-mode": h,
      "data-interactive": x ? "true" : "false",
      onDragOver: f,
      onDrop: i,
      className: E(
        "relative flex-1 h-full w-full overflow-hidden select-none bg-[var(--abc-bg-canvas)]",
        t
      ),
      children: [
        /* @__PURE__ */ C(
          wr,
          {
            proOptions: { hideAttribution: !0, ...K },
            connectionLineComponent: q ?? Jr,
            nodesDraggable: oe ?? x,
            nodesConnectable: Q ?? x,
            elementsSelectable: ee ?? x,
            edgesReconnectable: ne ?? x,
            reconnectRadius: D ?? 20,
            panOnDrag: X ?? (J ? [1] : !0),
            panActivationKeyCode: Y ?? "Space",
            panOnScroll: ae ?? ie,
            panOnScrollMode: le ?? (ie ? Nr.Free : void 0),
            zoomOnPinch: Me ?? !0,
            autoPanOnNodeDrag: se ?? !0,
            autoPanOnConnect: de ?? !0,
            selectionOnDrag: xe ?? (J && x),
            selectionMode: Ie ?? yr.Partial,
            selectionKeyCode: A ?? "Shift",
            ariaLabelConfig: te,
            className: E(
              L ? "opacity-20 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300",
              B
            ),
            ...H,
            colorMode: Ne,
            edges: ke,
            children: [
              Ee && /* @__PURE__ */ o(
                tt,
                {
                  id: "abc-flow-bg-primary",
                  variant: Ee,
                  gap: u,
                  size: p,
                  color: s
                }
              ),
              Fe && l && /* @__PURE__ */ o(
                tt,
                {
                  id: "abc-flow-bg-secondary",
                  variant: Fe,
                  gap: l.gap ?? u * 5,
                  size: l.size ?? 1,
                  color: l.color ?? "rgba(148, 163, 184, 0.22)"
                }
              ),
              ((v == null ? void 0 : v.horizontal) !== void 0 || (v == null ? void 0 : v.vertical) !== void 0) && /* @__PURE__ */ o(
                to,
                {
                  horizontalLine: v.horizontal,
                  verticalLine: v.vertical
                }
              ),
              I && /* @__PURE__ */ o(ze, { position: "top-left", className: "!m-3.5 !z-20", children: I }),
              z && /* @__PURE__ */ o(ze, { position: "top-center", className: "!mt-3 !z-20", children: z }),
              R && /* @__PURE__ */ o(ze, { position: "top-right", className: "!m-3.5 !z-20", children: R }),
              N && /* @__PURE__ */ o(ze, { position: "bottom-left", className: "!m-3.5 !z-20", children: N }),
              m && /* @__PURE__ */ o(ze, { position: "bottom-center", className: "!mb-3.5 !z-20", children: m }),
              k && /* @__PURE__ */ o(ze, { position: "bottom-right", className: "!m-3.5 !z-20", children: k }),
              n && /* @__PURE__ */ o(
                kr,
                {
                  pannable: !0,
                  zoomable: !0,
                  nodeStrokeWidth: 2,
                  maskStrokeColor: "var(--abc-primary, #4f46e5)",
                  maskStrokeWidth: 1.5,
                  nodeColor: (w == null ? void 0 : w.nodeColor) ?? ue,
                  nodeComponent: (w == null ? void 0 : w.nodeComponent) ?? (S ? eo : void 0),
                  ...w,
                  style: {
                    width: 184,
                    height: 124,
                    ...w == null ? void 0 : w.style
                  },
                  className: E(
                    "!rounded-xl !border !border-[var(--abc-border)] !bg-[var(--abc-bg-surface)]/95 !shadow-md",
                    F,
                    w == null ? void 0 : w.className
                  )
                }
              ),
              M
            ]
          }
        ),
        $,
        L && /* @__PURE__ */ o(
          "div",
          {
            "data-testid": "canvas-loading-overlay",
            className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-[var(--abc-bg-canvas)]/70 backdrop-blur-[1px]",
            children: /* @__PURE__ */ o("div", { className: "animate-pulse rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 px-4 py-2 text-xs font-medium text-[var(--abc-fg-muted)] shadow-sm", children: y })
          }
        )
      ]
    }
  );
  return r ? /* @__PURE__ */ o(vt, { children: Se }) : Se;
}
const ao = {
  sm: "!h-2.5 !w-2.5",
  md: "!h-3 !w-3"
}, St = ({
  id: r,
  type: t,
  position: a,
  tone: d = "neutral",
  size: f = "sm",
  connectionLimit: i,
  connectionCount: c,
  isConnectable: e = !0,
  highlightOnConnect: u,
  isConnectionCandidate: p = !1,
  isConnectionDimmed: s = !1,
  title: l,
  className: h,
  style: g,
  ...b
}) => {
  const x = typeof i == "number" && i >= 0 && c >= i, v = e && !x, I = Ke[d] ?? Ke.neutral;
  return /* @__PURE__ */ o(
    zr,
    {
      id: r,
      type: t,
      position: a,
      isConnectable: v,
      "data-slot": "flow-handle",
      "data-tone": d,
      "data-connection-count": c,
      "data-limit-reached": x ? "true" : "false",
      "data-connection-candidate": p && v ? "true" : "false",
      title: l ?? (typeof i == "number" ? `连接数 ${c}/${i}` : void 0),
      style: g,
      className: E(
        "!border-2 !border-[var(--abc-bg-surface)] !shadow-2xs transition-[box-shadow,opacity,transform] duration-150",
        ao[f],
        I.dot,
        v ? "hover:!ring-4 hover:!ring-[var(--abc-ring)]" : "!opacity-45 !cursor-not-allowed",
        p && v && "!ring-4 !ring-[var(--abc-primary)]/55 !scale-125",
        s && "!opacity-35",
        h
      ),
      ...b
    }
  );
}, so = ({
  resolvedNodeId: r,
  id: t,
  type: a,
  highlightOnConnect: d = !0,
  ...f
}) => {
  var b, x;
  const i = xt({
    id: r,
    handleType: a,
    handleId: t ?? void 0
  }), c = Cr(), e = !!(d && c.inProgress), u = (b = c.fromNode) == null ? void 0 : b.id, p = (x = c.fromHandle) == null ? void 0 : x.type, s = !!(u && u !== r), l = !!(p && p !== a), h = e && s && l, g = e && (!s || !l);
  return /* @__PURE__ */ o(
    St,
    {
      id: t,
      type: a,
      connectionCount: i.length,
      isConnectionCandidate: h,
      isConnectionDimmed: g,
      ...f
    }
  );
}, Lo = ({ nodeId: r, ...t }) => {
  const a = Sr(), d = r ?? a;
  return d ? /* @__PURE__ */ o(so, { resolvedNodeId: d, ...t }) : /* @__PURE__ */ o(St, { connectionCount: 0, ...t });
}, io = {
  blue: "var(--abc-flow-blue-ring, #3b82f6)",
  green: "var(--abc-flow-green-ring, #10b981)",
  amber: "var(--abc-flow-amber-ring, #f59e0b)",
  rose: "var(--abc-flow-rose-ring, #f43f5e)",
  slate: "var(--abc-primary, #4f46e5)"
}, co = ({
  tone: r = "slate",
  color: t,
  minWidth: a = 180,
  minHeight: d = 96,
  isVisible: f = !0,
  handleClassName: i,
  lineClassName: c,
  handleStyle: e,
  lineStyle: u,
  ...p
}) => {
  const s = t ?? io[r];
  return /* @__PURE__ */ o(
    Mr,
    {
      isVisible: f,
      minWidth: a,
      minHeight: d,
      color: s,
      lineClassName: E("!border-[1.5px]", c),
      handleClassName: E(
        "!h-2.5 !w-2.5 !rounded-sm !border-2 !border-[var(--abc-bg-surface)] !shadow-xs",
        i
      ),
      lineStyle: {
        borderColor: s,
        ...u
      },
      handleStyle: {
        backgroundColor: s,
        ...e
      },
      ...p
    }
  );
}, lo = {
  blue: "text-[var(--abc-flow-blue-header-fg)]",
  green: "text-[var(--abc-flow-green-header-fg)]",
  amber: "text-[var(--abc-flow-amber-header-fg)]",
  rose: "text-[var(--abc-flow-rose-header-fg)]",
  slate: "text-[var(--abc-fg-muted)]"
}, Ro = ({
  tone: r = "slate",
  visible: t = !0,
  minWidth: a = 180,
  minHeight: d = 110,
  position: f = "bottom-right",
  icon: i,
  className: c,
  style: e,
  ...u
}) => t ? /* @__PURE__ */ o(
  Ir,
  {
    variant: Er.Handle,
    position: f,
    minWidth: a,
    minHeight: d,
    style: {
      background: "transparent",
      border: "none",
      width: 18,
      height: 18,
      right: 4,
      bottom: 4,
      ...e
    },
    className: E(
      "nodrag nopan flex items-end justify-end rounded-sm p-0.5 opacity-65 transition-opacity hover:opacity-100",
      lo[r],
      c
    ),
    ...u,
    children: i ?? /* @__PURE__ */ o(
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
) : null, je = ["blue", "green", "amber", "rose", "slate"], $o = ({
  id: r,
  data: t,
  selected: a = !1
}) => {
  const d = (t == null ? void 0 : t.tone) ?? "blue", f = (t == null ? void 0 : t.dashed) ?? !0, i = (t == null ? void 0 : t.interactive) ?? !0, c = !!(t != null && t.collapsed), e = ((t == null ? void 0 : t.resizable) ?? !0) && i && !c, u = (t == null ? void 0 : t.minWidth) ?? 260, p = c ? (t == null ? void 0 : t.minHeight) ?? 48 : (t == null ? void 0 : t.minHeight) ?? 180, s = [];
  return t != null && t.onAddChild && i && s.push({
    key: "add-child",
    icon: /* @__PURE__ */ o(Oe, { size: 13 }),
    label: "在分组内新增子节点",
    onClick: () => {
      var l;
      return (l = t.onAddChild) == null ? void 0 : l.call(t, r);
    }
  }), t != null && t.onCycleTone && i && s.push({
    key: "cycle-tone",
    icon: /* @__PURE__ */ o(Ut, { size: 13 }),
    label: "切换分组语义色调",
    onClick: () => {
      var g;
      const l = je.indexOf(d), h = je[(l + 1) % je.length];
      (g = t.onCycleTone) == null || g.call(t, r, h);
    }
  }), t != null && t.toolbarItems && t.toolbarItems.length > 0 && s.push(...t.toolbarItems), t != null && t.onDelete && i && s.push({
    key: "delete-group",
    icon: /* @__PURE__ */ o(ft, { size: 13 }),
    label: "移除分组",
    danger: !0,
    dividerBefore: s.length > 0,
    onClick: () => {
      var l;
      return (l = t.onDelete) == null ? void 0 : l.call(t, r);
    }
  }), /* @__PURE__ */ C("div", { "data-slot": "flow-group-node", className: "relative h-full w-full", children: [
    e && /* @__PURE__ */ o(
      co,
      {
        tone: d,
        isVisible: a,
        minWidth: u,
        minHeight: p,
        onResizeEnd: t == null ? void 0 : t.onResizeEnd
      }
    ),
    s.length > 0 && /* @__PURE__ */ o(ht, { isVisible: a, position: fe.Top, offset: 10, children: /* @__PURE__ */ o(Nt, { items: s, size: "xs", "aria-label": "分组容器快捷操作" }) }),
    /* @__PURE__ */ o(
      kt,
      {
        "data-testid": t == null ? void 0 : t.testId,
        title: (t == null ? void 0 : t.title) !== void 0 ? t.title : "子流程分组",
        description: t == null ? void 0 : t.description,
        icon: (t == null ? void 0 : t.icon) !== void 0 ? t.icon : /* @__PURE__ */ o(Gt, { size: 13 }),
        badge: t != null && t.badge ? /* @__PURE__ */ o("span", { className: "rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--abc-fg-secondary)]", children: t.badge }) : void 0,
        headerExtra: t == null ? void 0 : t.headerExtra,
        onDoubleClick: t == null ? void 0 : t.onDoubleClick,
        tone: d,
        align: "top-left",
        dashed: f,
        selected: a,
        width: "100%",
        height: "100%",
        minWidth: u,
        minHeight: p,
        children: t == null ? void 0 : t.bodyContent
      }
    )
  ] });
}, Do = ({
  open: r,
  x: t,
  y: a,
  title: d,
  items: f,
  onClose: i,
  containerBounds: c,
  className: e
}) => {
  const u = U(null);
  if (ce(() => {
    if (!r) return;
    const g = (x) => {
      var v;
      (v = u.current) != null && v.contains(x.target) || i();
    }, b = (x) => {
      x.key === "Escape" && (x.preventDefault(), i());
    };
    return document.addEventListener("mousedown", g), document.addEventListener("keydown", b), () => {
      document.removeEventListener("mousedown", g), document.removeEventListener("keydown", b);
    };
  }, [r, i]), !r || f.length === 0) return null;
  const p = 196, s = f.length * 32 + (d ? 32 : 12), l = c ? Math.max(8, Math.min(t, Math.max(8, c.width - p - 8))) : t, h = c ? Math.max(8, Math.min(a, Math.max(8, c.height - s - 8))) : a;
  return /* @__PURE__ */ C(
    "div",
    {
      ref: u,
      role: "menu",
      "aria-label": d ?? "画布上下文菜单",
      "data-slot": "flow-context-menu",
      style: { left: l, top: h },
      onContextMenu: (g) => g.preventDefault(),
      onMouseDown: (g) => g.stopPropagation(),
      className: E(
        "nodrag nopan absolute z-50 min-w-[184px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)] select-none abc-animate-popover-in",
        e
      ),
      children: [
        d && /* @__PURE__ */ o("div", { className: "mb-1 border-b border-[var(--abc-border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--abc-fg-muted)]", children: d }),
        f.map((g) => /* @__PURE__ */ C(Z.Fragment, { children: [
          g.dividerBefore && /* @__PURE__ */ o("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
          /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "menuitem",
              disabled: g.disabled,
              onClick: (b) => {
                b.stopPropagation(), !g.disabled && (g.onClick(), i());
              },
              className: E(
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
}, uo = {
  blue: "bg-[var(--abc-flow-port-info-dot)]",
  green: "bg-[var(--abc-flow-port-success-dot)]",
  amber: "bg-[var(--abc-flow-port-warning-dot)]",
  rose: "bg-[var(--abc-flow-port-danger-dot)]",
  slate: "bg-[var(--abc-flow-port-neutral-dot)]"
}, Bo = ({
  open: r,
  x: t,
  y: a,
  title: d = "添加下游节点并自动连线",
  searchPlaceholder: f = "搜索动作或节点类型...",
  emptyText: i = "无匹配节点",
  items: c,
  containerBounds: e,
  onSelect: u,
  onClose: p,
  className: s
}) => {
  const l = U(null), h = U(null), [g, b] = pe(""), [x, v] = pe(0);
  ce(() => {
    if (!r) {
      b(""), v(0);
      return;
    }
    const n = window.requestAnimationFrame(() => {
      var F;
      return (F = h.current) == null ? void 0 : F.focus();
    }), S = (F) => {
      var w;
      (w = l.current) != null && w.contains(F.target) || p();
    };
    return document.addEventListener("mousedown", S), () => {
      window.cancelAnimationFrame(n), document.removeEventListener("mousedown", S);
    };
  }, [r, p]);
  const I = ge(() => {
    const n = g.trim().toLowerCase();
    return n ? c.filter((S) => `${S.label} ${S.description ?? ""} ${S.group ?? ""} ${S.keywords ?? ""}`.toLowerCase().includes(n)) : c;
  }, [c, g]);
  if (ce(() => {
    v(0);
  }, [g]), !r) return null;
  const z = 264, R = 312, N = e ? Math.max(10, Math.min(t, Math.max(10, e.width - z - 10))) : t, m = e ? Math.max(10, Math.min(a, Math.max(10, e.height - R - 10))) : a;
  return /* @__PURE__ */ C(
    "div",
    {
      ref: l,
      role: "dialog",
      "aria-label": d,
      "data-slot": "flow-quick-connect-menu",
      "data-abc-no-press-scale": "",
      style: { left: N, top: m, width: z },
      onMouseDown: (n) => n.stopPropagation(),
      onKeyDown: (n) => {
        if (n.key === "Escape") {
          n.preventDefault(), n.stopPropagation(), p();
          return;
        }
        if (n.key === "ArrowDown") {
          n.preventDefault(), v((S) => I.length > 0 ? (S + 1) % I.length : 0);
          return;
        }
        if (n.key === "ArrowUp") {
          n.preventDefault(), v(
            (S) => I.length > 0 ? (S - 1 + I.length) % I.length : 0
          );
          return;
        }
        if (n.key === "Enter") {
          const S = I[x];
          S && !S.disabled && (n.preventDefault(), u(S), p());
        }
      },
      className: E(
        "nodrag nowheel nopan absolute z-50 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)] select-none abc-animate-popover-in",
        s
      ),
      children: [
        /* @__PURE__ */ C("div", { className: "border-b border-[var(--abc-border)] px-3 py-2", children: [
          /* @__PURE__ */ C("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ o(qt, { size: 12, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ o("span", { className: "truncate", children: d })
          ] }),
          /* @__PURE__ */ C("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              ut,
              {
                size: 13,
                className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[var(--abc-fg-placeholder)]"
              }
            ),
            /* @__PURE__ */ o(
              "input",
              {
                ref: h,
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
        /* @__PURE__ */ o("div", { className: "max-h-56 overflow-y-auto p-1.5", children: I.length === 0 ? /* @__PURE__ */ o("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: i }) : I.map((n, S) => {
          var y;
          const F = S > 0 ? (y = I[S - 1]) == null ? void 0 : y.group : void 0, w = !!(n.group && n.group !== F), L = S === x;
          return /* @__PURE__ */ C(Z.Fragment, { children: [
            w && /* @__PURE__ */ o("div", { className: "px-2 pb-0.5 pt-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--abc-fg-muted)]", children: n.group }),
            /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                disabled: n.disabled,
                "data-quick-connect-key": n.key,
                onMouseEnter: () => v(S),
                onClick: () => {
                  n.disabled || (u(n), p());
                },
                className: E(
                  "flex w-full items-start gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-45",
                  L ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ o("span", { className: "mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-primary)]", children: n.icon ?? /* @__PURE__ */ o(
                    "span",
                    {
                      className: E(
                        "h-2 w-2 rounded-full",
                        uo[n.tone ?? "blue"]
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
}, Ao = ({
  selectedCount: r,
  onAlign: t,
  onGroupSelected: a,
  onDuplicateSelected: d,
  onDeleteSelected: f,
  extraActions: i,
  disabled: c = !1,
  labels: e,
  className: u,
  testId: p = "abc-flow-alignment-toolbar"
}) => {
  if (r < 2) return null;
  const s = "h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]", l = r >= 3, h = [
    { key: "left", label: (e == null ? void 0 : e.left) ?? "左对齐", icon: /* @__PURE__ */ o(Qt, { size: 13 }) },
    {
      key: "centerX",
      label: (e == null ? void 0 : e.centerX) ?? "水平居中对齐",
      icon: /* @__PURE__ */ o(Jt, { size: 13 })
    },
    { key: "right", label: (e == null ? void 0 : e.right) ?? "右对齐", icon: /* @__PURE__ */ o(er, { size: 13 }) },
    { key: "top", label: (e == null ? void 0 : e.top) ?? "顶对齐", icon: /* @__PURE__ */ o(tr, { size: 13 }) },
    {
      key: "centerY",
      label: (e == null ? void 0 : e.centerY) ?? "垂直居中对齐",
      icon: /* @__PURE__ */ o(rr, { size: 13 })
    },
    { key: "bottom", label: (e == null ? void 0 : e.bottom) ?? "底对齐", icon: /* @__PURE__ */ o(or, { size: 13 }) },
    {
      key: "distributeH",
      label: (e == null ? void 0 : e.distributeH) ?? "水平等距分布",
      icon: /* @__PURE__ */ o(nr, { size: 13 }),
      requiresThree: !0
    },
    {
      key: "distributeV",
      label: (e == null ? void 0 : e.distributeV) ?? "垂直等距分布",
      icon: /* @__PURE__ */ o(ar, { size: 13 }),
      requiresThree: !0
    }
  ], g = !!(a || d || f || i);
  return /* @__PURE__ */ C(
    "div",
    {
      role: "toolbar",
      "aria-label": "多选节点对齐与批量操作",
      "data-slot": "flow-alignment-toolbar",
      "data-abc-no-press-scale": "",
      "data-testid": p,
      onMouseDown: (b) => b.stopPropagation(),
      className: E(
        "nodrag nopan inline-flex flex-wrap items-center gap-0.5 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/96 px-1.5 py-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur abc-animate-popover-in",
        u
      ),
      children: [
        /* @__PURE__ */ o("span", { className: "px-1.5 font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: e != null && e.selectedCount ? e.selectedCount(r) : `已选 ${r} 项` }),
        /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
        h.map((b) => /* @__PURE__ */ o(
          P,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            pressScale: !1,
            disabled: c || b.requiresThree && !l,
            "aria-label": b.label,
            title: b.requiresThree && !l ? `${b.label}（至少需选中 3 个节点）` : b.label,
            onClick: () => t(b.key),
            className: s,
            children: b.icon
          },
          b.key
        )),
        g && /* @__PURE__ */ C(ve, { children: [
          /* @__PURE__ */ o("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          a && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: c,
              "aria-label": (e == null ? void 0 : e.group) ?? "合并为子流程分组",
              title: (e == null ? void 0 : e.group) ?? "合并为子流程分组",
              onClick: a,
              className: s,
              children: /* @__PURE__ */ o(sr, { size: 13 })
            }
          ),
          d && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: c,
              "aria-label": (e == null ? void 0 : e.duplicate) ?? "复制选中子图",
              title: (e == null ? void 0 : e.duplicate) ?? "复制选中子图 (⌘C / ⌘V)",
              onClick: d,
              className: s,
              children: /* @__PURE__ */ o(ir, { size: 13 })
            }
          ),
          i,
          f && /* @__PURE__ */ o(
            P,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              pressScale: !1,
              disabled: c,
              "aria-label": (e == null ? void 0 : e.delete) ?? "批量删除选中节点",
              title: (e == null ? void 0 : e.delete) ?? "批量删除选中节点",
              onClick: f,
              className: "h-7 w-7 text-[var(--abc-danger)] hover:bg-[var(--abc-danger-soft)]",
              children: /* @__PURE__ */ o(ft, { size: 13 })
            }
          )
        ] })
      ]
    }
  );
}, fo = Z.forwardRef(
  ({
    preventDrag: r = !0,
    preventWheelZoom: t = !0,
    preventPan: a = !0,
    disablePressScale: d = !0,
    className: f,
    children: i,
    ...c
  }, e) => /* @__PURE__ */ o(
    "div",
    {
      ref: e,
      "data-slot": "flow-interactive-zone",
      "data-abc-no-press-scale": d ? "" : void 0,
      className: E(
        r && "nodrag",
        t && "nowheel",
        a && "nopan",
        "select-text",
        f
      ),
      ...c,
      children: i
    }
  )
);
fo.displayName = "FlowInteractiveZone";
function He(r, t, a) {
  var i, c, e, u;
  const d = ((i = r.measured) == null ? void 0 : i.width) ?? (typeof r.width == "number" ? r.width : void 0) ?? (typeof ((c = r.style) == null ? void 0 : c.width) == "number" ? r.style.width : void 0) ?? t, f = ((e = r.measured) == null ? void 0 : e.height) ?? (typeof r.height == "number" ? r.height : void 0) ?? (typeof ((u = r.style) == null ? void 0 : u.height) == "number" ? r.style.height : void 0) ?? a;
  return { width: d, height: f };
}
function Oo(r, t, a = {}) {
  const {
    direction: d = "LR",
    rankSep: f = 96,
    nodeSep: i = 48,
    defaultNodeWidth: c = 230,
    defaultNodeHeight: e = 116,
    originX: u = 32,
    originY: p = 32
  } = a;
  if (r.length === 0) return [];
  const s = r.filter((w) => !w.parentId), l = new Set(s.map((w) => w.id)), h = /* @__PURE__ */ new Map();
  for (const w of r)
    w.parentId && h.set(w.id, w.parentId);
  const g = (w) => {
    let L = w;
    const y = /* @__PURE__ */ new Set();
    for (; h.has(L) && !y.has(L); )
      y.add(L), L = h.get(L);
    return L;
  }, b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  for (const w of s)
    b.set(w.id, /* @__PURE__ */ new Set()), x.set(w.id, 0);
  for (const w of t) {
    const L = g(w.source), y = g(w.target);
    if (L === y || !l.has(L) || !l.has(y)) continue;
    const M = b.get(L);
    M.has(y) || (M.add(y), x.set(y, (x.get(y) ?? 0) + 1));
  }
  const v = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set(), z = [];
  for (const w of s)
    (x.get(w.id) ?? 0) === 0 && (z.push(w.id), v.set(w.id, 0));
  for (; I.size < s.length; ) {
    if (z.length === 0) {
      let y = "", M = Number.POSITIVE_INFINITY;
      for (const $ of s) {
        if (I.has($.id)) continue;
        const B = x.get($.id) ?? 0;
        B < M && (M = B, y = $.id);
      }
      if (!y) break;
      z.push(y), v.has(y) || v.set(y, 0);
    }
    const w = z.shift();
    if (I.has(w)) continue;
    I.add(w);
    const L = v.get(w) ?? 0;
    for (const y of b.get(w) ?? []) {
      if (I.has(y)) continue;
      v.set(y, Math.max(v.get(y) ?? 0, L + 1));
      const M = (x.get(y) ?? 1) - 1;
      x.set(y, M), M <= 0 && z.push(y);
    }
  }
  const R = /* @__PURE__ */ new Map();
  for (const w of s) {
    const L = v.get(w.id) ?? 0, y = R.get(L) ?? [];
    y.push(w), R.set(L, y);
  }
  const N = Array.from(R.keys()).sort((w, L) => w - L), m = d === "LR" || d === "RL", n = d === "RL" || d === "BT" ? [...N].reverse() : N, S = /* @__PURE__ */ new Map();
  let F = m ? u : p;
  for (const w of n) {
    const L = R.get(w) ?? [];
    let y = 0, M = m ? p : u;
    for (const $ of L) {
      const { width: B, height: K } = He($, c, e);
      m ? (S.set($.id, { x: Math.round(F), y: Math.round(M) }), M += K + i, y = Math.max(y, B)) : (S.set($.id, { x: Math.round(M), y: Math.round(F) }), M += B + i, y = Math.max(y, K));
    }
    F += y + f;
  }
  return r.map((w) => {
    const L = S.get(w.id);
    return L ? {
      ...w,
      position: L
    } : w;
  });
}
function Po(r, t, a) {
  const d = /* @__PURE__ */ new Set([r]), f = /* @__PURE__ */ new Set(), i = new Map(t.map((e) => [e.id, e])), c = [r];
  for (; c.length > 0; ) {
    const e = c.pop(), u = i.get(e);
    if (!u) continue;
    const p = Tr(u, t, a), s = wt([u], a);
    for (const l of s)
      l.target === e && f.add(l.id);
    for (const l of p)
      d.has(l.id) || (d.add(l.id), c.push(l.id));
  }
  return { nodeIds: d, edgeIds: f };
}
function Vo(r, t, a) {
  const d = /* @__PURE__ */ new Set([r]), f = /* @__PURE__ */ new Set(), i = new Map(t.map((e) => [e.id, e])), c = [r];
  for (; c.length > 0; ) {
    const e = c.pop(), u = i.get(e);
    if (!u) continue;
    const p = Fr(u, t, a), s = wt([u], a);
    for (const l of s)
      l.source === e && f.add(l.id);
    for (const l of p)
      d.has(l.id) || (d.add(l.id), c.push(l.id));
  }
  return { nodeIds: d, edgeIds: f };
}
function _o(r, t) {
  if (!t.source || !t.target) return !1;
  if (t.source === t.target) return !0;
  const a = /* @__PURE__ */ new Map();
  for (const i of r) {
    const c = a.get(i.source) ?? [];
    c.push(i.target), a.set(i.source, c);
  }
  const d = /* @__PURE__ */ new Set(), f = [t.target];
  for (; f.length > 0; ) {
    const i = f.pop();
    if (i === t.source) return !0;
    if (!d.has(i)) {
      d.add(i);
      for (const c of a.get(i) ?? [])
        f.push(c);
    }
  }
  return !1;
}
function Wo(r, t, a = 6) {
  const d = He(r, 220, 110), f = r.position.x, i = f + d.width, c = f + d.width / 2, e = r.position.y, u = e + d.height, p = e + d.height / 2;
  let s = 0, l = 0;
  if (r.parentId) {
    const z = new Map(t.map((m) => [m.id, m])), R = /* @__PURE__ */ new Set();
    let N = r.parentId;
    for (; N && !R.has(N); ) {
      R.add(N);
      const m = z.get(N);
      if (!m) break;
      s += m.position.x, l += m.position.y, N = m.parentId;
    }
  }
  let h = a + 1, g = a + 1, b, x, v = f, I = e;
  for (const z of t) {
    if (z.id === r.id || z.parentId !== r.parentId) continue;
    const R = He(z, 220, 110), N = z.position.x, m = N + R.width, k = N + R.width / 2, n = z.position.y, S = n + R.height, F = n + R.height / 2, w = [
      [Math.abs(f - N), N, N],
      [Math.abs(i - m), m, m - d.width],
      [Math.abs(c - k), k, k - d.width / 2]
    ];
    for (const [y, M, $] of w)
      y < h && (h = y, b = M + s, v = $);
    const L = [
      [Math.abs(e - n), n, n],
      [Math.abs(u - S), S, S - d.height],
      [Math.abs(p - F), F, F - d.height / 2]
    ];
    for (const [y, M, $] of L)
      y < g && (g = y, x = M + l, I = $);
  }
  return {
    horizontal: x,
    vertical: b,
    snapPosition: x !== void 0 || b !== void 0 ? { x: v, y: I } : void 0
  };
}
function jo(r, t, a) {
  const d = {
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    nodes: r,
    edges: t,
    viewport: a
  };
  return JSON.stringify(d, null, 2);
}
function Xo(r) {
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
function Le(r, t) {
  return {
    nodes: r.map((a) => ({
      ...a,
      position: { ...a.position },
      data: a.data ? { ...a.data } : a.data
    })),
    edges: t.map((a) => ({
      ...a,
      data: a.data ? { ...a.data } : a.data
    }))
  };
}
function Yo(r = {}, t) {
  const { maxSteps: a = 40, enableKeyboardShortcuts: d = !1 } = r, f = U([]), i = U([]), [, c] = pe(0), e = V(() => c((h) => h + 1), []), u = V(
    (h, g) => {
      f.current = [...f.current.slice(-(a - 1)), Le(h, g)], i.current = [], e();
    },
    [a, e]
  ), p = V(
    (h, g) => {
      if (f.current.length === 0) return null;
      const b = f.current[f.current.length - 1];
      return f.current = f.current.slice(0, -1), i.current = [
        ...i.current.slice(-(a - 1)),
        Le(h, g)
      ], e(), Le(b.nodes, b.edges);
    },
    [a, e]
  ), s = V(
    (h, g) => {
      if (i.current.length === 0) return null;
      const b = i.current[i.current.length - 1];
      return i.current = i.current.slice(0, -1), f.current = [
        ...f.current.slice(-(a - 1)),
        Le(h, g)
      ], e(), Le(b.nodes, b.edges);
    },
    [a, e]
  ), l = V(() => {
    f.current = [], i.current = [], e();
  }, [e]);
  return ce(() => {
    if (!d || typeof window > "u") return;
    const h = (g) => {
      var I, z;
      const b = g.target;
      if (b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA" || b.isContentEditable) || !(g.metaKey || g.ctrlKey)) return;
      const v = g.key.toLowerCase();
      v === "z" && !g.shiftKey ? (g.preventDefault(), (I = t == null ? void 0 : t.onUndo) == null || I.call(t)) : (v === "z" && g.shiftKey || v === "y") && (g.preventDefault(), (z = t == null ? void 0 : t.onRedo) == null || z.call(t));
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [d, t]), {
    takeSnapshot: u,
    undo: p,
    redo: s,
    clear: l,
    canUndo: f.current.length > 0,
    canRedo: i.current.length > 0,
    pastCount: f.current.length,
    futureCount: i.current.length
  };
}
function go(r) {
  if ("changedTouches" in r && r.changedTouches.length > 0) {
    const t = r.changedTouches[0];
    return { clientX: t.clientX, clientY: t.clientY };
  }
  return "clientX" in r && typeof r.clientX == "number" ? { clientX: r.clientX, clientY: r.clientY } : null;
}
function Ko({
  containerRef: r,
  disabled: t = !1
}) {
  const { screenToFlowPosition: a } = Ue(), [d, f] = pe(null), i = V(() => {
    f(null);
  }, []), c = V(
    (e, u) => {
      var b, x, v;
      if (t || u.isValid) return;
      const p = u.fromNode;
      if (!(p != null && p.id)) return;
      const s = go(e);
      if (!s) return;
      const l = (b = r.current) == null ? void 0 : b.getBoundingClientRect(), h = l ? {
        x: Math.round(s.clientX - l.left),
        y: Math.round(s.clientY - l.top)
      } : { x: Math.round(s.clientX), y: Math.round(s.clientY) }, g = a({ x: s.clientX, y: s.clientY });
      f({
        screenPosition: h,
        flowPosition: { x: Math.round(g.x), y: Math.round(g.y) },
        fromNodeId: p.id,
        fromHandleId: ((x = u.fromHandle) == null ? void 0 : x.id) ?? null,
        fromHandleType: ((v = u.fromHandle) == null ? void 0 : v.type) ?? "source"
      });
    },
    [r, t, a]
  );
  return {
    pendingDrop: d,
    handleConnectEnd: c,
    dismissDrop: i
  };
}
function Ho({
  nodes: r,
  edges: t,
  onPaste: a,
  enableKeyboardShortcuts: d = !1,
  disabled: f = !1
}) {
  const i = U({
    nodes: [],
    edges: [],
    pasteStep: 0
  }), [c, e] = pe(0), u = V(
    (l) => {
      const h = l && l.length > 0 ? l : r.filter((v) => v.selected).map((v) => v.id);
      if (h.length === 0) return 0;
      const g = new Set(h);
      for (const v of r)
        v.parentId && g.has(v.parentId) && g.add(v.id);
      const b = r.filter((v) => g.has(v.id)), x = t.filter(
        (v) => g.has(v.source) && g.has(v.target)
      );
      return i.current = { nodes: b, edges: x, pasteStep: 0 }, e(b.length), b.length;
    },
    [r, t]
  ), p = V(() => {
    if (f || i.current.nodes.length === 0) return null;
    i.current.pasteStep += 1;
    const l = i.current.pasteStep, { nodes: h, edges: g } = qr(
      i.current.nodes,
      i.current.edges,
      i.current.nodes.map((b) => b.id),
      { x: 36 * l, y: 36 * l }
    );
    return h.length === 0 ? null : (a(h, g), { nodes: h, edges: g });
  }, [f, a]), s = V(() => {
    i.current = { nodes: [], edges: [], pasteStep: 0 }, e(0);
  }, []);
  return ce(() => {
    if (!d || typeof window > "u") return;
    const l = (h) => {
      const g = h.target;
      if (g && (g.tagName === "INPUT" || g.tagName === "TEXTAREA" || g.isContentEditable) || !(h.metaKey || h.ctrlKey)) return;
      const x = h.key.toLowerCase();
      x === "c" ? u() > 0 && h.preventDefault() : x === "v" && i.current.nodes.length > 0 && !f && (h.preventDefault(), p());
    };
    return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
  }, [d, u, p, f]), { copy: u, paste: p, copiedCount: c, clear: s };
}
function Zo(r = {}) {
  const { autoFitOnInitialized: t = !1, autoFitPadding: a = 0.2 } = r, d = Ue(), f = Lr(), i = U(!1);
  ce(() => {
    !t || !f || i.current || (i.current = !0, d.fitView({ padding: a, duration: 240, maxZoom: 1 }).catch(() => {
    }));
  }, [t, a, f, d]);
  const c = V(
    (u, p = {}) => {
      var z, R;
      const s = d.getNode(u);
      if (!s) return !1;
      const l = ((z = s.measured) == null ? void 0 : z.width) ?? (typeof s.width == "number" ? s.width : 240), h = ((R = s.measured) == null ? void 0 : R.height) ?? (typeof s.height == "number" ? s.height : 120), g = d.getZoom(), b = p.zoom ?? Math.max(0.9, Math.min(1.15, g || 1)), x = p.rightInsetPx ? p.rightInsetPx / (2 * b) : 0, v = s.position.x + l / 2 + x, I = s.position.y + h / 2;
      return d.setCenter(v, I, {
        zoom: b,
        duration: p.duration ?? 280
      }).catch(() => {
      }), !0;
    },
    [d]
  ), e = V(
    (u, p = 0.22, s = 260) => {
      const l = u.map((h) => ({ id: h })).filter((h) => !!d.getNode(h.id));
      return l.length === 0 ? !1 : (d.fitView({ nodes: l, padding: p, duration: s, maxZoom: 1.2 }).catch(() => {
      }), !0);
    },
    [d]
  );
  return {
    nodesInitialized: f,
    focusNode: c,
    focusNodes: e
  };
}
function Go(r, t) {
  const { updateNodeData: a } = Ue(), d = Rr(), f = xt({
    id: r,
    handleType: "target",
    handleId: t
  }), i = ge(
    () => Array.from(new Set(f.map((s) => s.source))),
    [f]
  ), c = $r(i), e = ge(() => {
    const s = /* @__PURE__ */ new Map();
    for (const l of c)
      l != null && l.id && s.set(l.id, l.data);
    return f.map((l) => ({
      nodeId: l.source,
      sourceHandle: l.sourceHandle ?? null,
      targetHandle: l.targetHandle ?? null,
      data: s.get(l.source)
    }));
  }, [f, c]), u = V(
    (s) => {
      a(r, s);
    },
    [r, a]
  ), p = V(() => {
    d(r);
  }, [r, d]);
  return {
    incomingConnections: f,
    upstreamRecords: e,
    patchSelfData: u,
    refreshHandles: p
  };
}
export {
  Ur as FLOW_ARIA_LABELS_EN,
  Gr as FLOW_ARIA_LABELS_ZH,
  Co as FLOW_CONNECTION_MODE,
  So as FLOW_MARKER_TYPE,
  Ke as FLOW_PORT_TONE_STYLES,
  ko as FLOW_POSITION,
  yt as FLOW_TONE_STYLES,
  Vr as FloatingIconRail,
  Ao as FlowAlignmentToolbar,
  To as FlowCanvasSurface,
  Jr as FlowConnectionLine,
  Do as FlowContextMenu,
  Ro as FlowCornerResizer,
  No as FlowFloatingEdge,
  $o as FlowGroupNode,
  Lo as FlowHandle,
  fo as FlowInteractiveZone,
  yo as FlowLabeledEdge,
  eo as FlowMiniMapNode,
  _r as FlowNodeCard,
  co as FlowNodeResizer,
  Nt as FlowNodeToolbar,
  Fo as FlowProvider,
  Bo as FlowQuickConnectMenu,
  kt as FlowSectionFrame,
  wo as FlowViewportControls,
  to as FlowViewportOverlay,
  Kr as TemplateVariableInput,
  Qo as addFlowEdge,
  zo as alignFlowNodes,
  Jo as applyFlowEdgeChanges,
  en as applyFlowNodeChanges,
  Qr as computeFlowExportViewport,
  Wo as computeFlowHelperLines,
  Mo as computeProximityEdge,
  qr as duplicateFlowSubgraph,
  Eo as exportFlowToSvgDataUrl,
  Br as extractTemplateVariables,
  Io as findIntersectingGroupNode,
  tn as getFlowBezierPath,
  Vo as getFlowDownstream,
  rn as getFlowSimpleBezierPath,
  on as getFlowSmoothStepPath,
  nn as getFlowStraightPath,
  Po as getFlowUpstream,
  _o as hasFlowCycle,
  Or as insertTemplateVariableAt,
  Oo as layoutFlowGraph,
  Xo as parseFlowSnapshot,
  an as reconnectFlowEdge,
  Ar as removeTemplateVariableToken,
  jo as serializeFlowSnapshot,
  Ho as useFlowClipboard,
  Go as useFlowComputing,
  sn as useFlowConnection,
  Ko as useFlowDropToConnect,
  cn as useFlowEdges,
  ln as useFlowEdgesState,
  Yo as useFlowHistory,
  dn as useFlowInstance,
  un as useFlowInternalNode,
  fn as useFlowKeyPress,
  gn as useFlowNodeConnections,
  hn as useFlowNodeId,
  pn as useFlowNodes,
  bn as useFlowNodesData,
  mn as useFlowNodesInitialized,
  vn as useFlowNodesState,
  xn as useFlowOnSelectionChange,
  wn as useFlowOnViewportChange,
  yn as useFlowStore,
  Nn as useFlowStoreApi,
  kn as useFlowUpdateNodeInternals,
  Sn as useFlowViewport,
  Zo as useFlowViewportFocus
};
//# sourceMappingURL=index.js.map
