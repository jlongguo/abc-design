import { jsxs as n, jsx as e, Fragment as Ee } from "react/jsx-runtime";
import q, { useRef as ce, useId as Pe, useCallback as ee, useMemo as de, useEffect as Ce, useState as De } from "react";
import { X as ze, Search as ar, Braces as tr, Minus as nr, Plus as Te, Maximize as or, LayoutGrid as sr, Map as lr } from "lucide-react";
import { useAbcMotion as he, useControllableState as Se, cn as o, Tooltip as Oe, useAbcSize as ir, usePresence as cr, useFloatingPosition as dr, baseFieldControlClass as br, Button as Y } from "@abc-design/react";
import { createPortal as fr } from "react-dom";
import { getSmoothStepPath as ur, getBezierPath as gr, BaseEdge as vr, EdgeLabelRenderer as pr, ReactFlow as mr, Background as hr, BackgroundVariant as xr, Panel as ie, MiniMap as wr, ReactFlowProvider as yr } from "@xyflow/react";
const We = {
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
}, Nr = {
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
}, ke = /\{\{\s*([^{}]+?)\s*\}\}/g;
function kr(i) {
  var g;
  if (!i) return [];
  const f = [];
  ke.lastIndex = 0;
  let c = ke.exec(i), d = 0;
  for (; c !== null; ) {
    const u = c[0], b = ((g = c[1]) == null ? void 0 : g.trim()) ?? "";
    b && (f.push({
      raw: u,
      key: b,
      start: c.index,
      end: c.index + u.length,
      occurrenceIndex: d
    }), d += 1), c = ke.exec(i);
  }
  return f;
}
function Cr(i, f) {
  const c = i.slice(0, f.start), d = i.slice(f.end);
  if (c.endsWith(" ") && d.startsWith(" "))
    return `${c}${d.slice(1)}`;
  const g = `${c}${d}`;
  return g.trim().length === 0 ? "" : g;
}
function zr(i, f, c, d, g = !1) {
  if (g)
    return { nextValue: f, nextCaret: f.length };
  const u = i.length, b = typeof c == "number" && c >= 0 ? Math.min(c, u) : u, a = typeof d == "number" && d >= b ? Math.min(d, u) : b;
  return {
    nextValue: `${i.slice(0, b)}${f}${i.slice(a)}`,
    nextCaret: b + f.length
  };
}
const Tr = {
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
}, Sr = q.forwardRef(
  ({
    items: i,
    activeKey: f,
    defaultActiveKey: c = null,
    onActiveKeyChange: d,
    renderFlyout: g,
    flyoutContent: u,
    flyoutHeader: b,
    showFlyoutHeader: a = !0,
    flyoutWidth: m = 264,
    side: p = "left",
    size: r = "md",
    footer: x,
    closeOnOutsideClick: z = !0,
    closeOnEscape: T = !0,
    closeLabel: w = "收起面板",
    motion: y,
    className: s,
    railClassName: R,
    flyoutClassName: j,
    "aria-label": I = "画布类目工具栏",
    ...C
  }, S) => {
    const v = he(y), B = ce(null), E = Pe(), [F, $] = Se({
      value: f,
      defaultValue: c,
      onChange: d
    }), J = ee(
      (l) => {
        B.current = l, typeof S == "function" ? S(l) : S && (S.current = l);
      },
      [S]
    ), N = de(
      () => F ? i.find((l) => l.key === F && !l.disabled) ?? null : null,
      [F, i]
    ), V = ee(() => {
      $(null);
    }, [$]), G = ee(
      (l) => {
        l.disabled || $(F === l.key ? null : l.key);
      },
      [F, $]
    ), D = de(() => N ? g ? g(N, { close: V }) : N.content !== void 0 ? N.content : u ?? null : null, [N, g, u, V]), O = !!(N && D !== null && D !== void 0);
    Ce(() => {
      if (!O) return;
      const l = (W) => {
        var be;
        if (!z) return;
        const re = W.target;
        re && ((be = B.current) != null && be.contains(re)) || V();
      }, P = (W) => {
        !T || W.key !== "Escape" || (W.stopPropagation(), V());
      };
      return document.addEventListener("mousedown", l), document.addEventListener("keydown", P), () => {
        document.removeEventListener("mousedown", l), document.removeEventListener("keydown", P);
      };
    }, [O, z, T, V]);
    const A = Tr[r], te = typeof m == "number" ? `${m}px` : m, ne = () => !N || b === null || !a ? null : typeof b == "function" ? b(N, { close: V }) : b !== void 0 ? b : /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-3 py-2.5", children: [
      /* @__PURE__ */ n("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ e("span", { className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: N.icon }),
        /* @__PURE__ */ e("span", { className: "truncate text-xs font-semibold text-[var(--abc-fg)]", children: N.label })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: V,
          "aria-label": w,
          className: "inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          children: /* @__PURE__ */ e(ze, { className: "h-3.5 w-3.5" })
        }
      )
    ] }), oe = /* @__PURE__ */ n(
      "nav",
      {
        "aria-label": I,
        "data-motion": v,
        className: o(
          "nodrag nopan flex shrink-0 flex-col items-stretch border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)] select-none",
          A.rail,
          R
        ),
        children: [
          i.map((l) => {
            const P = (N == null ? void 0 : N.key) === l.key, W = l.title ?? (typeof l.label == "string" ? l.label : void 0);
            return /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                disabled: l.disabled,
                title: W,
                "aria-pressed": P,
                "aria-expanded": P && O,
                "aria-controls": P && O ? E : void 0,
                "data-rail-key": l.key,
                "data-active": P ? "true" : "false",
                onClick: () => G(l),
                className: o(
                  "group relative flex w-full flex-col items-center justify-center text-center transition-[color,background-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  A.button,
                  l.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
                  P ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: o(
                        "inline-flex shrink-0 items-center justify-center transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        A.iconWrap,
                        !l.disabled && "group-hover:scale-105"
                      ),
                      children: l.icon
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: o("max-w-full truncate font-medium", A.label), children: l.label }),
                  l.badge !== void 0 && l.badge !== null && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-1 top-1 inline-flex min-w-[14px] items-center justify-center rounded-full bg-[var(--abc-primary)] px-1 text-[9px] font-semibold leading-[14px] text-[var(--abc-primary-fg)]", children: l.badge })
                ]
              },
              l.key
            );
          }),
          x && /* @__PURE__ */ e("div", { className: "mt-1 border-t border-[var(--abc-border)] pt-1.5", children: x })
        ]
      }
    ), h = O ? /* @__PURE__ */ n(
      "div",
      {
        id: E,
        role: "region",
        "aria-label": typeof (N == null ? void 0 : N.label) == "string" ? `${N.label} 面板` : "展开内容面板",
        "data-flow-rail-flyout": "open",
        "data-active-key": N == null ? void 0 : N.key,
        "data-motion": v,
        style: { width: te },
        className: o(
          "nodrag nopan flex max-h-[min(70vh,520px)] flex-col overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)]",
          v !== "none" && "abc-animate-popover-in",
          j
        ),
        children: [
          ne(),
          /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-y-auto p-3", children: D })
        ]
      }
    ) : null;
    return /* @__PURE__ */ n(
      "div",
      {
        ref: J,
        "data-side": p,
        className: o(
          "relative inline-flex items-start gap-2.5",
          p === "right" && "flex-row-reverse",
          s
        ),
        ...C,
        children: [
          oe,
          h
        ]
      }
    );
  }
);
Sr.displayName = "FloatingIconRail";
const Er = q.forwardRef(
  ({
    title: i,
    subtitle: f,
    icon: c,
    badge: d,
    headerExtra: g,
    tone: u = "blue",
    subIcon: b,
    subTitle: a,
    subExtra: m,
    metaRows: p,
    maxMetaRows: r = 3,
    outputs: x,
    renderOutputHandle: z,
    inputHandle: T,
    toolbar: w,
    footer: y,
    selected: s = !1,
    running: R = !1,
    error: j = !1,
    status: I,
    width: C = 256,
    motion: S,
    className: v,
    headerClassName: B,
    bodyClassName: E,
    style: F,
    children: $,
    ...J
  }, N) => {
    const V = he(S), G = We[u], D = j || I === "error" ? "error" : R || I === "running" ? "running" : I === "success" ? "success" : "idle", O = p && r > 0 ? p.slice(0, r) : [], A = !!(b || a !== void 0 || m), te = A || O.length > 0 || q.Children.count($) > 0 || !!(x && x.length > 0) || !!y, ne = D === "error" ? "border-rose-500 ring-2 ring-rose-500/75 dark:border-rose-400 dark:ring-rose-400/70" : D === "running" ? "border-blue-500 ring-2 ring-blue-500/80 dark:border-blue-400 dark:ring-blue-400/75" : s ? G.selectedRing : void 0, oe = typeof C == "number" ? `${C}px` : C;
    return /* @__PURE__ */ n(
      "div",
      {
        ref: N,
        "data-tone": u,
        "data-status": D,
        "data-selected": s ? "true" : "false",
        "data-motion": V,
        style: { width: oe, ...F },
        className: o(
          "relative overflow-visible rounded-[14px] border p-1 shadow-[var(--abc-shadow-card)] transition-[border-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out",
          G.cardShell,
          ne,
          s && "shadow-md",
          v
        ),
        ...J,
        children: [
          T,
          w && /* @__PURE__ */ e("div", { className: "nodrag nopan absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2", children: w }),
          /* @__PURE__ */ n(
            "div",
            {
              className: o(
                "flex items-center justify-between gap-2 px-2 py-1.5",
                B
              ),
              children: [
                /* @__PURE__ */ n("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  c && /* @__PURE__ */ e(
                    "span",
                    {
                      className: o(
                        "inline-flex h-4 w-4 shrink-0 items-center justify-center",
                        G.headerText
                      ),
                      children: c
                    }
                  ),
                  /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ n("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: o(
                            "truncate text-xs font-semibold leading-tight",
                            G.headerText
                          ),
                          children: i
                        }
                      ),
                      d && /* @__PURE__ */ e("span", { className: "shrink-0", children: d })
                    ] }),
                    f !== void 0 && /* @__PURE__ */ e("div", { className: "truncate text-[10.5px] leading-tight text-[var(--abc-fg-muted)]", children: f })
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { className: "flex shrink-0 items-center gap-1", children: [
                  D === "running" && /* @__PURE__ */ n(
                    "span",
                    {
                      "aria-label": "运行中",
                      "data-flow-status-indicator": "running",
                      className: "relative inline-flex h-2 w-2 shrink-0",
                      children: [
                        V !== "none" && /* @__PURE__ */ e("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" }),
                        /* @__PURE__ */ e("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-blue-500" })
                      ]
                    }
                  ),
                  D === "error" && /* @__PURE__ */ e(
                    "span",
                    {
                      "aria-label": "执行异常",
                      "data-flow-status-indicator": "error",
                      className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-rose-500"
                    }
                  ),
                  D === "success" && /* @__PURE__ */ e(
                    "span",
                    {
                      "aria-label": "执行成功",
                      "data-flow-status-indicator": "success",
                      className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                    }
                  ),
                  g && /* @__PURE__ */ e("div", { className: "nodrag nopan flex items-center gap-1", children: g })
                ] })
              ]
            }
          ),
          te && /* @__PURE__ */ n(
            "div",
            {
              className: o(
                "overflow-visible rounded-[10px] border border-[var(--abc-border)]/70 bg-[var(--abc-bg-surface)] px-2.5 py-2 text-[var(--abc-fg)]",
                E
              ),
              children: [
                A && /* @__PURE__ */ n("div", { className: "mb-1.5 flex items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ n("div", { className: "flex min-w-0 items-center gap-1.5", children: [
                    b && /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-fg-secondary)]", children: b }),
                    a !== void 0 && /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: a })
                  ] }),
                  m && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: m })
                ] }),
                O.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-1", children: O.map((h, l) => /* @__PURE__ */ n(
                  "div",
                  {
                    title: h.title,
                    className: "flex min-w-0 items-center gap-1.5 text-[11.5px] leading-snug text-[var(--abc-fg-secondary)]",
                    children: [
                      h.icon && /* @__PURE__ */ e("span", { className: "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[var(--abc-fg-muted)]", children: h.icon }),
                      h.label !== void 0 && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: h.label }),
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: o(
                            "min-w-0 flex-1 truncate text-[var(--abc-fg)]",
                            h.mono && "font-mono text-[11px]"
                          ),
                          children: h.value
                        }
                      )
                    ]
                  },
                  h.key ?? String(l)
                )) }),
                $ && /* @__PURE__ */ e("div", { className: o(O.length > 0 && "mt-2", "text-xs"), children: $ }),
                x && x.length > 0 && /* @__PURE__ */ e(
                  "div",
                  {
                    "data-flow-outputs": "",
                    className: o(
                      "space-y-0.5",
                      (O.length > 0 || q.Children.count($) > 0 || A) && "mt-2 border-t border-[var(--abc-border)]/70 pt-1.5"
                    ),
                    children: x.map((h) => {
                      const l = h.tone ?? "neutral", P = Nr[l], W = h.handle !== void 0 ? h.handle : z == null ? void 0 : z(h), re = h.showDot !== void 0 ? h.showDot : !W;
                      return /* @__PURE__ */ n(
                        "div",
                        {
                          "data-port-id": h.id,
                          "data-port-tone": l,
                          className: o(
                            // 右侧外延 -mr-3.5 与外框 p-1 + 内层 px-2.5 (4+10=14px) 精准齐平卡片外右缘，
                            // 使直接挂载于本行的 ReactFlow <Handle position={Position.Right} /> 落点精确贴边
                            "relative -mr-3.5 flex items-center justify-end gap-1.5 py-0.5 pl-2 pr-3.5 text-[11.5px] leading-snug",
                            h.disabled && "opacity-45",
                            h.className
                          ),
                          children: [
                            h.hint && /* @__PURE__ */ e("span", { className: "truncate text-[10.5px] text-[var(--abc-fg-muted)]", children: h.hint }),
                            h.icon && /* @__PURE__ */ e("span", { className: o("inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center", P.text), children: h.icon }),
                            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: h.label }),
                            re && /* @__PURE__ */ e(
                              "span",
                              {
                                "aria-hidden": "true",
                                "data-port-dot": l,
                                className: o(
                                  "pointer-events-none absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
                                  P.dot
                                )
                              }
                            ),
                            W
                          ]
                        },
                        h.id
                      );
                    })
                  }
                ),
                y && /* @__PURE__ */ e("div", { className: "mt-2 border-t border-[var(--abc-border)]/70 pt-1.5", children: y })
              ]
            }
          )
        ]
      }
    );
  }
);
Er.displayName = "FlowNodeCard";
const Rr = {
  xs: "h-6 w-6",
  sm: "h-7 w-7"
}, jr = q.forwardRef(
  ({
    items: i,
    orientation: f = "horizontal",
    size: c = "sm",
    visible: d = !0,
    tooltipPlacement: g = "top",
    disableTooltips: u = !1,
    stopPropagation: b = !0,
    motion: a,
    className: m,
    children: p,
    "aria-label": r = "节点快捷操作条",
    ...x
  }, z) => {
    const T = he(a);
    if (!d) return null;
    const w = f === "vertical", y = Rr[c];
    return /* @__PURE__ */ n(
      "div",
      {
        ref: z,
        role: "toolbar",
        "aria-label": r,
        "aria-orientation": f,
        "data-motion": T,
        "data-orientation": f,
        onMouseDown: b ? (s) => s.stopPropagation() : void 0,
        onClick: b ? (s) => s.stopPropagation() : void 0,
        className: o(
          "nodrag nopan inline-flex items-center gap-0.5 rounded-[10px] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5 shadow-[var(--abc-shadow-popover)] select-none",
          w ? "flex-col" : "flex-row",
          T !== "none" && "abc-animate-popover-in",
          m
        ),
        ...x,
        children: [
          i.map((s) => {
            const R = /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: s.disabled,
                "aria-label": s["aria-label"] ?? s.label,
                "aria-pressed": s.active !== void 0 ? s.active : void 0,
                "data-toolbar-key": s.key,
                "data-active": s.active ? "true" : "false",
                onClick: (j) => {
                  var I;
                  b && j.stopPropagation(), !s.disabled && ((I = s.onClick) == null || I.call(s, j));
                },
                className: o(
                  "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  y,
                  s.disabled ? "cursor-not-allowed text-[var(--abc-fg-placeholder)] opacity-45" : "cursor-pointer",
                  s.active ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : s.danger ? "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-danger-soft)] enabled:hover:text-[var(--abc-danger)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                  s.className
                ),
                children: /* @__PURE__ */ e("span", { className: "inline-flex h-3.5 w-3.5 items-center justify-center", children: s.icon })
              }
            );
            return /* @__PURE__ */ n(q.Fragment, { children: [
              s.dividerBefore && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: o(
                    "shrink-0 bg-[var(--abc-border)]",
                    w ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                  )
                }
              ),
              u || s.disabled ? R : /* @__PURE__ */ e(
                Oe,
                {
                  content: s.tooltip ?? s.label,
                  placement: g,
                  delay: 80,
                  motion: T,
                  children: R
                }
              )
            ] }, s.key);
          }),
          p && /* @__PURE__ */ n(Ee, { children: [
            i.length > 0 && /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                className: o(
                  "shrink-0 bg-[var(--abc-border)]",
                  w ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                )
              }
            ),
            p
          ] })
        ]
      }
    );
  }
);
jr.displayName = "FlowNodeToolbar";
const Ir = ({
  floatingRef: i,
  portalContainer: f,
  portalTheme: c,
  isMounted: d,
  isVisible: g,
  popoverId: u,
  floatingStyle: b,
  actualSide: a,
  resolvedMotion: m,
  pickerTitle: p,
  pickerTriggerLabel: r,
  pickerPlaceholder: x,
  emptyVariablesText: z,
  searchable: T,
  totalVariablesCount: w,
  query: y,
  onQueryChange: s,
  groupedVariables: R,
  onSelect: j,
  popoverClassName: I
}) => !d || !f ? null : fr(
  /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      id: u,
      role: "dialog",
      "aria-label": typeof p == "string" ? p : r,
      "data-abc-floating": "",
      "data-abc-theme": c,
      "data-playground-theme": c,
      "data-template-picker-popover": "open",
      "data-placement": a,
      "data-motion": m,
      style: b,
      className: o(
        c === "dark" && "dark",
        c === "light" && "light",
        "nodrag nopan z-[1350] w-[280px] max-w-[calc(100vw-16px)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
        m !== "none" && (g ? "abc-animate-popover-in" : "abc-animate-popover-out"),
        I
      ),
      children: [
        /* @__PURE__ */ n("div", { className: "border-b border-[var(--abc-border)] px-3 py-2", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: p }),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "{{var}}" })
          ] }),
          T && w > 0 && /* @__PURE__ */ n("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ e(ar, { className: "pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: y,
                onChange: (C) => s(C.target.value),
                placeholder: x,
                "aria-label": x,
                className: "h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-7 pr-2 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-60 overflow-y-auto p-1.5", children: R.length === 0 ? /* @__PURE__ */ e("div", { className: "px-2 py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: z }) : /* @__PURE__ */ e("div", { className: "space-y-2", children: R.map(([C, S]) => /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ e("div", { className: "px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: C }),
          /* @__PURE__ */ e("div", { className: "mt-0.5 space-y-0.5", children: S.map((v) => /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              disabled: v.disabled,
              "data-variable-option": v.key,
              onClick: () => j(v),
              className: o(
                "flex w-full flex-col gap-0.5 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)]",
                v.disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer hover:bg-[var(--abc-bg-subtle)]"
              ),
              children: [
                /* @__PURE__ */ n("div", { className: "flex w-full items-center justify-between gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "truncate font-mono text-[11.5px] font-medium text-[var(--abc-primary)]", children: `{{${v.key}}}` }),
                  v.type && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: v.type })
                ] }),
                (v.label || v.description || v.sampleValue) && /* @__PURE__ */ n("div", { className: "flex w-full items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ e("span", { className: "truncate", children: v.label ?? v.description }),
                  v.sampleValue && /* @__PURE__ */ e("span", { className: "max-w-[90px] shrink-0 truncate font-mono text-[10px] text-[var(--abc-fg-secondary)]", children: v.sampleValue })
                ] })
              ]
            },
            v.key
          )) })
        ] }, C)) }) })
      ]
    }
  ),
  f
), Fr = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Lr = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Mr = q.forwardRef(
  ({
    value: i,
    defaultValue: f = "",
    onChange: c,
    multiline: d = !1,
    rows: g = 3,
    variables: u = [],
    chipDisplay: b = "auto",
    removableChips: a = !0,
    showPreviewLabel: m = !0,
    replaceOnSelect: p = !1,
    insertFormat: r,
    showPickerButton: x = !0,
    searchable: z = !0,
    pickerOpen: T,
    defaultPickerOpen: w = !1,
    onPickerOpenChange: y,
    pickerTitle: s = "插入模板变量",
    pickerPlaceholder: R = "搜索变量名、分组或说明...",
    pickerTriggerLabel: j = "插入变量",
    emptyVariablesText: I = "暂无可用变量",
    onSelectVariable: C,
    onRemoveVariable: S,
    id: v,
    name: B,
    label: E,
    error: F,
    helperText: $,
    invalid: J = !1,
    required: N = !1,
    disabled: V = !1,
    readOnly: G = !1,
    placeholder: D = "输入文本或点击右下角 {} 插入 {{variable}}...",
    size: O,
    mono: A = !1,
    allowClear: te = !1,
    clearLabel: ne = "清空内容",
    motion: oe,
    onFocus: h,
    onBlur: l,
    "aria-label": P,
    "aria-labelledby": W,
    "aria-describedby": re,
    className: be,
    wrapperClassName: Ae,
    inputClassName: Re,
    popoverClassName: Ke
  }, se) => {
    const je = ir(O, "sm"), xe = he(oe), Ge = Pe(), le = v ?? Ge, Ie = `${le}-hint`, Fe = `${le}-vars`, [Z, X] = Se({
      value: i,
      defaultValue: f,
      onChange: c
    }), [Q, ae] = Se({
      value: T,
      defaultValue: w,
      onChange: y
    }), [we, Le] = De(""), fe = ce(null), ue = ce(null), ye = ce(null), ge = ce({
      start: null,
      end: null
    }), Me = ee(
      (t) => {
        fe.current = t, typeof se == "function" ? se(t) : se && (se.current = t);
      },
      [se]
    ), U = !V && !G, ve = !!(J || F), Ue = de(() => {
      const t = /* @__PURE__ */ new Map();
      for (const k of u)
        t.has(k.key) || t.set(k.key, k);
      return t;
    }, [u]), Ne = de(() => kr(Z), [Z]), Ze = b === "always" || b === "auto" && Ne.length > 0, { isMounted: Be, isVisible: Qe } = cr(
      Q && U,
      xe === "none" ? 0 : 130
    ), { style: Ye, actualSide: qe, portalContainer: Je, portalTheme: Xe } = dr({
      open: Be,
      triggerRef: ue,
      floatingRef: ye,
      placement: "bottomRight",
      offset: 6,
      rightAnchorOnOverflow: !0
    });
    Ce(() => {
      Q || Le("");
    }, [Q]), Ce(() => {
      if (!Q) return;
      const t = (_) => {
        var M, H;
        const L = _.target;
        L && ((M = ue.current) != null && M.contains(L) || (H = ye.current) != null && H.contains(L) || ae(!1));
      }, k = (_) => {
        var L;
        _.key === "Escape" && (_.preventDefault(), _.stopPropagation(), ae(!1), (L = ue.current) == null || L.focus());
      };
      return document.addEventListener("mousedown", t), document.addEventListener("keydown", k, !0), () => {
        document.removeEventListener("mousedown", t), document.removeEventListener("keydown", k, !0);
      };
    }, [Q, ae]);
    const K = ee(() => {
      const t = fe.current;
      t && (ge.current = {
        start: t.selectionStart,
        end: t.selectionEnd
      });
    }, []), He = ee(
      (t) => {
        if (!U || t.disabled) return;
        const k = r ? r(t) : `{{${t.key}}}`, { nextValue: _, nextCaret: L } = zr(
          Z,
          k,
          ge.current.start,
          ge.current.end,
          p
        );
        X(_), C == null || C(t, _), ae(!1), typeof window < "u" && window.requestAnimationFrame(() => {
          const M = fe.current;
          if (M) {
            M.focus();
            try {
              M.setSelectionRange(L, L);
            } catch {
            }
            ge.current = { start: L, end: L };
          }
        });
      },
      [
        U,
        r,
        Z,
        p,
        X,
        C,
        ae
      ]
    ), er = ee(
      (t) => {
        if (!U) return;
        const k = Cr(Z, t);
        X(k), S == null || S(t, k);
      },
      [U, Z, X, S]
    ), rr = de(() => {
      var L;
      const t = we.trim().toLowerCase(), k = t ? u.filter(
        (M) => [M.key, M.label, M.group, M.description, M.type].filter(Boolean).some((H) => String(H).toLowerCase().includes(t))
      ) : u, _ = /* @__PURE__ */ new Map();
      for (const M of k) {
        const H = ((L = M.group) == null ? void 0 : L.trim()) || "可用变量", _e = _.get(H) ?? [];
        _e.push(M), _.set(H, _e);
      }
      return Array.from(_.entries());
    }, [u, we]), $e = [re, F || $ ? Ie : void 0].filter(Boolean).join(" ") || void 0, pe = te && U && Z.length > 0;
    return /* @__PURE__ */ n("div", { className: o("w-full space-y-1", Ae), children: [
      E !== void 0 && /* @__PURE__ */ n(
        "label",
        {
          htmlFor: le,
          className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: [
            /* @__PURE__ */ e("span", { children: E }),
            N && /* @__PURE__ */ e("span", { className: "text-[var(--abc-danger)]", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        "div",
        {
          "data-slot": "template-variable-input",
          "data-motion": xe,
          "data-multiline": d ? "true" : "false",
          "data-invalid": ve ? "true" : "false",
          className: o(
            br,
            "nodrag nopan relative flex flex-col px-2.5 py-1.5",
            d ? Lr[je] : Fr[je],
            ve && "border-[var(--abc-danger)] focus-within:border-[var(--abc-danger)] focus-within:ring-[var(--abc-danger)]/20",
            V && "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] cursor-not-allowed",
            be
          ),
          children: [
            Ze && /* @__PURE__ */ e(
              "div",
              {
                "data-template-chips": "",
                className: o(
                  "flex flex-wrap items-center gap-1.5",
                  Ne.length > 0 && "mb-1.5",
                  x && !d && "pr-8"
                ),
                children: Ne.map((t) => {
                  const k = Ue.get(t.key), _ = (k == null ? void 0 : k.sampleValue) ?? (k == null ? void 0 : k.label), L = /* @__PURE__ */ n(
                    "span",
                    {
                      "data-template-chip": t.key,
                      className: "inline-flex max-w-full items-center gap-1 rounded-full bg-[var(--abc-flow-chip-bg)] px-2 py-0.5 text-[11px] font-medium leading-tight text-[var(--abc-flow-chip-fg)] shadow-2xs",
                      children: [
                        /* @__PURE__ */ e("span", { className: "truncate font-mono", children: t.key }),
                        m && _ && _ !== t.key && /* @__PURE__ */ e("span", { className: "max-w-[110px] truncate rounded-full bg-[var(--abc-flow-chip-sub-bg)] px-1.5 py-0 text-[10px] font-normal text-[var(--abc-flow-chip-sub-fg)]", children: _ }),
                        a && U && /* @__PURE__ */ e(
                          "button",
                          {
                            type: "button",
                            "aria-label": `移除变量 ${t.key}`,
                            onClick: (M) => {
                              M.stopPropagation(), er(t);
                            },
                            className: "inline-flex h-3.5 w-3.5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--abc-flow-chip-sub-bg)] text-[var(--abc-flow-chip-fg)] transition-colors hover:bg-[var(--abc-flow-chip-close-hover)] focus:outline-none focus-visible:ring-1 focus-visible:ring-current",
                            children: /* @__PURE__ */ e(ze, { className: "h-2.5 w-2.5" })
                          }
                        )
                      ]
                    },
                    `${t.key}_${t.occurrenceIndex}`
                  );
                  return k != null && k.description ? /* @__PURE__ */ e(
                    Oe,
                    {
                      content: k.description,
                      placement: "top",
                      delay: 100,
                      children: L
                    },
                    `${t.key}_${t.occurrenceIndex}`
                  ) : L;
                })
              }
            ),
            /* @__PURE__ */ e("div", { className: "relative flex w-full items-center", children: d ? /* @__PURE__ */ e(
              "textarea",
              {
                ref: Me,
                id: le,
                name: B,
                rows: g,
                value: Z,
                placeholder: D,
                disabled: V,
                readOnly: G,
                required: N,
                "aria-label": P,
                "aria-labelledby": W,
                "aria-describedby": $e,
                "aria-invalid": ve || void 0,
                onChange: (t) => {
                  X(t.target.value), K();
                },
                onSelect: K,
                onKeyUp: K,
                onClick: K,
                onFocus: h,
                onBlur: (t) => {
                  K(), l == null || l(t);
                },
                className: o(
                  "w-full resize-y bg-transparent pb-5 pr-8 text-inherit leading-relaxed text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  A && "font-mono",
                  Re
                )
              }
            ) : /* @__PURE__ */ e(
              "input",
              {
                ref: Me,
                id: le,
                name: B,
                type: "text",
                value: Z,
                placeholder: D,
                disabled: V,
                readOnly: G,
                required: N,
                "aria-label": P,
                "aria-labelledby": W,
                "aria-describedby": $e,
                "aria-invalid": ve || void 0,
                onChange: (t) => {
                  X(t.target.value), K();
                },
                onSelect: K,
                onKeyUp: K,
                onClick: K,
                onFocus: h,
                onBlur: (t) => {
                  K(), l == null || l(t);
                },
                className: o(
                  "w-full bg-transparent text-inherit leading-normal text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  x && (pe ? "pr-14" : "pr-8"),
                  !x && pe && "pr-7",
                  A && "font-mono",
                  Re
                )
              }
            ) }),
            (pe || x) && /* @__PURE__ */ n("div", { className: "absolute bottom-1.5 right-1.5 flex items-center gap-1", children: [
              pe && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": ne,
                  onClick: () => {
                    var t;
                    X(""), (t = fe.current) == null || t.focus();
                  },
                  className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  children: /* @__PURE__ */ e(ze, { className: "h-3 w-3" })
                }
              ),
              x && /* @__PURE__ */ e(
                "button",
                {
                  ref: ue,
                  type: "button",
                  disabled: !U,
                  "aria-label": j,
                  "aria-expanded": Q,
                  "aria-haspopup": "dialog",
                  "aria-controls": Q ? Fe : void 0,
                  "data-template-picker-trigger": "",
                  title: j,
                  onMouseDown: (t) => {
                    t.preventDefault(), K();
                  },
                  onClick: () => {
                    U && ae(!Q);
                  },
                  className: o(
                    "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                    U ? Q ? "cursor-pointer border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "cursor-pointer border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/60 hover:text-[var(--abc-primary)]" : "cursor-not-allowed border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] opacity-55"
                  ),
                  children: /* @__PURE__ */ e(tr, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ]
        }
      ),
      (F || $) && /* @__PURE__ */ e(
        "div",
        {
          id: Ie,
          className: o(
            "text-[11px] leading-snug",
            F ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg-muted)]"
          ),
          children: F ?? $
        }
      ),
      /* @__PURE__ */ e(
        Ir,
        {
          floatingRef: ye,
          portalContainer: Je,
          portalTheme: Xe,
          isMounted: Be,
          isVisible: Qe,
          popoverId: Fe,
          floatingStyle: Ye,
          actualSide: qe,
          resolvedMotion: xe,
          pickerTitle: s,
          pickerTriggerLabel: j,
          pickerPlaceholder: R,
          emptyVariablesText: I,
          searchable: z,
          totalVariablesCount: u.length,
          query: we,
          onQueryChange: Le,
          groupedVariables: rr,
          onSelect: He,
          popoverClassName: Ke
        }
      )
    ] });
  }
);
Mr.displayName = "TemplateVariableInput";
function me(i) {
  if (i !== void 0)
    return typeof i == "number" ? `${i}px` : i;
}
const Br = q.forwardRef(
  ({
    title: i,
    description: f,
    icon: c,
    badge: d,
    headerExtra: g,
    tone: u = "slate",
    align: b,
    dashed: a = !0,
    selected: m = !1,
    width: p,
    height: r,
    minWidth: x = 220,
    minHeight: z = 148,
    className: T,
    headerClassName: w,
    bodyClassName: y,
    style: s,
    children: R,
    ...j
  }, I) => {
    const C = q.Children.count(R) > 0, S = b ?? (C ? "top-left" : "center"), v = We[u], B = {
      width: me(p),
      height: me(r),
      minWidth: me(x),
      minHeight: me(z),
      ...s
    }, E = S === "center" && !C;
    return /* @__PURE__ */ n(
      "div",
      {
        ref: I,
        "data-tone": u,
        "data-align": S,
        "data-selected": m ? "true" : "false",
        style: B,
        className: o(
          "relative flex flex-col rounded-[var(--abc-radius-xl)] border-[1.5px] transition-[border-color,box-shadow,background-color] duration-[var(--abc-motion-fast,140ms)] ease-out",
          a ? "border-dashed" : "border-solid",
          v.sectionFrame,
          m && "ring-2 ring-[var(--abc-primary)] border-[var(--abc-primary)]",
          E ? "items-center justify-center p-5 text-center" : "p-4 text-left",
          T
        ),
        ...j,
        children: [
          (i !== void 0 || f !== void 0 || c || d || g) && /* @__PURE__ */ n(
            "div",
            {
              className: o(
                E ? "flex max-w-[260px] flex-col items-center gap-1.5" : "flex w-full items-start justify-between gap-2",
                w
              ),
              children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: o(
                      "min-w-0",
                      E ? "flex flex-col items-center gap-1" : "flex-1 space-y-0.5"
                    ),
                    children: [
                      (c || i !== void 0 || d) && /* @__PURE__ */ n(
                        "div",
                        {
                          className: o(
                            "flex items-center gap-1.5",
                            E ? "justify-center" : "justify-start"
                          ),
                          children: [
                            c && /* @__PURE__ */ e("span", { className: o("inline-flex shrink-0 items-center", v.sectionTitle), children: c }),
                            i !== void 0 && /* @__PURE__ */ e(
                              "div",
                              {
                                className: o(
                                  "font-medium leading-snug",
                                  E ? "text-[15px]" : "text-xs font-semibold",
                                  v.sectionTitle
                                ),
                                children: i
                              }
                            ),
                            d && /* @__PURE__ */ e("span", { className: "shrink-0", children: d })
                          ]
                        }
                      ),
                      f !== void 0 && /* @__PURE__ */ e(
                        "p",
                        {
                          className: o(
                            "m-0 text-xs leading-relaxed text-[var(--abc-fg-muted)]",
                            E && "max-w-[240px]"
                          ),
                          children: f
                        }
                      )
                    ]
                  }
                ),
                g && /* @__PURE__ */ e(
                  "div",
                  {
                    className: o(
                      "nodrag nopan shrink-0",
                      E && "absolute right-3 top-3"
                    ),
                    children: g
                  }
                )
              ]
            }
          ),
          C && /* @__PURE__ */ e("div", { className: o("mt-3 min-h-0 flex-1", y), children: R })
        ]
      }
    );
  }
);
Br.displayName = "FlowSectionFrame";
const Wr = ({
  zoomPercent: i,
  onZoomOut: f,
  onZoomReset: c,
  onZoomIn: d,
  onFitView: g,
  onAutoLayout: u,
  showMiniMap: b = !1,
  onToggleMiniMap: a,
  extraActions: m,
  primaryAction: p,
  labels: r,
  className: x,
  testId: z = "abc-flow-viewport-controls"
}) => {
  const T = !!(g || u || a || m && m.length > 0), w = "h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]";
  return /* @__PURE__ */ n(
    "div",
    {
      "data-testid": z,
      className: o(
        "nodrag nopan flex items-center gap-1 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 p-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur",
        x
      ),
      children: [
        /* @__PURE__ */ e(
          Y,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (r == null ? void 0 : r.zoomOut) ?? "缩小画布",
            title: (r == null ? void 0 : r.zoomOutTitle) ?? (r == null ? void 0 : r.zoomOut) ?? "缩小画布 (-)",
            onClick: f,
            className: w,
            children: /* @__PURE__ */ e(nr, { size: 13 })
          }
        ),
        /* @__PURE__ */ n(
          Y,
          {
            type: "button",
            variant: "ghost",
            size: "xs",
            "aria-label": (r == null ? void 0 : r.zoomReset) ?? "重置画布缩放至 100%",
            title: (r == null ? void 0 : r.zoomResetTitle) ?? (r == null ? void 0 : r.zoomReset) ?? "重置缩放比例 (0)",
            onClick: c,
            className: "h-7 min-w-[44px] px-1.5 font-mono text-[11px] font-medium text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]",
            children: [
              i,
              "%"
            ]
          }
        ),
        /* @__PURE__ */ e(
          Y,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (r == null ? void 0 : r.zoomIn) ?? "放大画布",
            title: (r == null ? void 0 : r.zoomInTitle) ?? (r == null ? void 0 : r.zoomIn) ?? "放大画布 (+)",
            onClick: d,
            className: w,
            children: /* @__PURE__ */ e(Te, { size: 13 })
          }
        ),
        T && /* @__PURE__ */ e(
          "span",
          {
            className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]",
            "aria-hidden": "true"
          }
        ),
        g && /* @__PURE__ */ e(
          Y,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (r == null ? void 0 : r.fitView) ?? "自适应居中视口",
            title: (r == null ? void 0 : r.fitViewTitle) ?? (r == null ? void 0 : r.fitView) ?? "自适应居中视口",
            onClick: g,
            className: w,
            children: /* @__PURE__ */ e(or, { size: 13 })
          }
        ),
        u && /* @__PURE__ */ e(
          Y,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (r == null ? void 0 : r.autoLayout) ?? "一键整理排版",
            title: (r == null ? void 0 : r.autoLayoutTitle) ?? (r == null ? void 0 : r.autoLayout) ?? "一键整理排版",
            onClick: u,
            className: w,
            children: /* @__PURE__ */ e(sr, { size: 13 })
          }
        ),
        a && /* @__PURE__ */ e(
          Y,
          {
            type: "button",
            variant: b ? "secondary" : "ghost",
            size: "icon-sm",
            "data-testid": "toggle-minimap-btn",
            "aria-pressed": b,
            "aria-label": (r == null ? void 0 : r.toggleMiniMap) ?? "开关缩略图导航",
            title: b ? (r == null ? void 0 : r.hideMiniMapTitle) ?? "隐藏缩略图" : (r == null ? void 0 : r.showMiniMapTitle) ?? "显示缩略图",
            onClick: a,
            className: w,
            children: /* @__PURE__ */ e(lr, { size: 13 })
          }
        ),
        m == null ? void 0 : m.map((y) => /* @__PURE__ */ e(
          Y,
          {
            type: "button",
            variant: y.active ? "secondary" : "ghost",
            size: "icon-sm",
            disabled: y.disabled,
            "data-testid": y.testId,
            "aria-label": y.label,
            title: y.title ?? y.label,
            onClick: y.onClick,
            className: w,
            children: y.icon
          },
          y.key
        )),
        p && /* @__PURE__ */ n(Ee, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ n(
            Y,
            {
              type: "button",
              variant: "primary",
              size: "xs",
              disabled: p.disabled,
              "data-testid": p.testId,
              "aria-label": p.ariaLabel ?? p.label,
              onClick: p.onClick,
              className: "h-7 gap-1 rounded-lg px-2.5 text-[11px] font-semibold",
              children: [
                p.icon ?? /* @__PURE__ */ e(Te, { size: 12 }),
                /* @__PURE__ */ e("span", { children: p.label })
              ]
            }
          )
        ] })
      ]
    }
  );
}, Ve = {
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
}, Ar = ({
  id: i,
  sourceX: f,
  sourceY: c,
  targetX: d,
  targetY: g,
  sourcePosition: u,
  targetPosition: b,
  data: a,
  selected: m,
  markerEnd: p,
  selectedStroke: r = "#4f46e5",
  renderActionMenu: x
}) => {
  const [z, T] = De(!1), w = (a == null ? void 0 : a.tone) ?? "default", y = (a == null ? void 0 : a.routeStyle) ?? "bezier", s = d < f + 24, R = s || y === "smoothstep", [j, I, C] = R ? ur({
    sourceX: f,
    sourceY: c,
    sourcePosition: u,
    targetX: d,
    targetY: g,
    targetPosition: b,
    borderRadius: 16,
    offset: s ? 34 : 20
  }) : gr({
    sourceX: f,
    sourceY: c,
    sourcePosition: u,
    targetX: d,
    targetY: g,
    targetPosition: b,
    curvature: 0.35
  }), S = Ve[w] ?? Ve.default, v = m ? Math.max(2.2, ((a == null ? void 0 : a.strokeWidth) ?? 1.7) + 0.5) : (a == null ? void 0 : a.strokeWidth) ?? (w === "muted" ? 1.25 : 1.7), B = x ?? (a == null ? void 0 : a.renderActionMenu), E = !!(a != null && a.showActionTrigger && (B || a != null && a.onActionClick));
  return /* @__PURE__ */ n(Ee, { children: [
    /* @__PURE__ */ e("g", { "data-testid": a == null ? void 0 : a.testId, children: /* @__PURE__ */ e(
      vr,
      {
        id: i,
        path: j,
        markerEnd: p,
        className: a != null && a.animated ? "abc-flow-edge-animated" : void 0,
        style: {
          stroke: m ? r : S.stroke,
          strokeWidth: v,
          strokeDasharray: a != null && a.dashed ? "5 4" : void 0,
          opacity: a != null && a.dimmed ? 0.55 : 0.92,
          transition: "stroke 150ms ease, stroke-width 150ms ease"
        }
      }
    ) }),
    ((a == null ? void 0 : a.label) || E) && /* @__PURE__ */ e(pr, { children: /* @__PURE__ */ n(
      "div",
      {
        style: {
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${I}px,${C}px)`,
          pointerEvents: "all"
        },
        className: "nodrag nopan z-10 flex items-center gap-1",
        children: [
          (a == null ? void 0 : a.label) && /* @__PURE__ */ e(
            "span",
            {
              className: o(
                "select-none rounded-full border px-2 py-0.5 text-[10px] font-medium leading-tight shadow-2xs",
                S.labelClass
              ),
              children: a.label
            }
          ),
          E && /* @__PURE__ */ n("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              Y,
              {
                type: "button",
                variant: "outline",
                size: "icon-sm",
                "aria-label": (a == null ? void 0 : a.actionAriaLabel) ?? "连线操作",
                title: (a == null ? void 0 : a.actionAriaLabel) ?? "连线操作",
                onClick: (F) => {
                  var $;
                  F.stopPropagation(), B ? T((J) => !J) : ($ = a == null ? void 0 : a.onActionClick) == null || $.call(a, i);
                },
                className: o(
                  "h-5 w-5 rounded-full border p-0 shadow-xs transition",
                  z ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 text-[var(--abc-fg-muted)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]"
                ),
                children: /* @__PURE__ */ e(Te, { size: 11 })
              }
            ),
            z && B && /* @__PURE__ */ e(
              "div",
              {
                onClick: (F) => F.stopPropagation(),
                className: "absolute left-1/2 top-6 z-50 -translate-x-1/2",
                children: B({ close: () => T(!1) })
              }
            )
          ] })
        ]
      }
    ) })
  ] });
};
function Kr({
  withProvider: i = !1,
  containerClassName: f,
  testId: c = "abc-flow-canvas-surface",
  containerRef: d,
  onDragOver: g,
  onDrop: u,
  showDotsBackground: b = !0,
  backgroundGap: a = 18,
  backgroundDotSize: m = 1.25,
  backgroundColor: p = "rgba(148, 163, 184, 0.35)",
  leftRailSlot: r,
  topCenterSlot: x,
  topRightSlot: z,
  bottomLeftSlot: T,
  bottomRightSlot: w,
  showMiniMap: y = !1,
  miniMapClassName: s,
  loading: R = !1,
  loadingText: j = "正在加载画布...",
  children: I,
  overlaySlot: C,
  className: S,
  proOptions: v,
  ...B
}) {
  const E = /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      "data-testid": c,
      onDragOver: g,
      onDrop: u,
      className: o(
        "relative flex-1 h-full w-full overflow-hidden select-none bg-[var(--abc-bg-canvas)]",
        f
      ),
      children: [
        /* @__PURE__ */ n(
          mr,
          {
            proOptions: { hideAttribution: !0, ...v },
            className: o(
              R ? "opacity-20 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300",
              S
            ),
            ...B,
            children: [
              b && /* @__PURE__ */ e(
                hr,
                {
                  variant: xr.Dots,
                  gap: a,
                  size: m,
                  color: p
                }
              ),
              r && /* @__PURE__ */ e(ie, { position: "top-left", className: "!m-3.5 !z-20", children: r }),
              x && /* @__PURE__ */ e(ie, { position: "top-center", className: "!mt-3 !z-20", children: x }),
              z && /* @__PURE__ */ e(ie, { position: "top-right", className: "!m-3.5 !z-20", children: z }),
              T && /* @__PURE__ */ e(ie, { position: "bottom-left", className: "!m-3.5 !z-20", children: T }),
              w && /* @__PURE__ */ e(ie, { position: "bottom-right", className: "!m-3.5 !z-20", children: w }),
              y && /* @__PURE__ */ e(
                wr,
                {
                  pannable: !0,
                  zoomable: !0,
                  nodeStrokeWidth: 2,
                  className: o(
                    "!rounded-xl !border !border-[var(--abc-border)] !bg-[var(--abc-bg-surface)]/95 !shadow-md",
                    s
                  )
                }
              ),
              I
            ]
          }
        ),
        C,
        R && /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "canvas-loading-overlay",
            className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-[var(--abc-bg-canvas)]/70 backdrop-blur-[1px]",
            children: /* @__PURE__ */ e("div", { className: "animate-pulse rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 px-4 py-2 text-xs font-medium text-[var(--abc-fg-muted)] shadow-sm", children: j })
          }
        )
      ]
    }
  );
  return i ? /* @__PURE__ */ e(yr, { children: E }) : E;
}
export {
  Nr as FLOW_PORT_TONE_STYLES,
  We as FLOW_TONE_STYLES,
  Sr as FloatingIconRail,
  Kr as FlowCanvasSurface,
  Ar as FlowLabeledEdge,
  Er as FlowNodeCard,
  jr as FlowNodeToolbar,
  Br as FlowSectionFrame,
  Wr as FlowViewportControls,
  Mr as TemplateVariableInput,
  kr as extractTemplateVariables,
  zr as insertTemplateVariableAt,
  Cr as removeTemplateVariableToken
};
//# sourceMappingURL=index.js.map
