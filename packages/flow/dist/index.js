import { jsxs as h, jsx as e, Fragment as ce } from "react/jsx-runtime";
import Q, { useRef as re, useId as Ye, useCallback as Z, useMemo as ge, useEffect as pe, useState as je } from "react";
import { X as Fe, Search as vr, Braces as mr, Minus as xr, Plus as Ne, Hand as wr, BoxSelect as yr, Unlock as Nr, Lock as kr, Magnet as Cr, Undo2 as zr, Redo2 as Sr, Maximize as Mr, LayoutGrid as Tr, Map as Rr, FolderKanban as Er, Palette as Ir, Trash2 as Fr } from "lucide-react";
import { useAbcMotion as Ce, useControllableState as Be, cn as w, Tooltip as Xe, useAbcSize as Br, usePresence as Dr, useFloatingPosition as Lr, baseFieldControlClass as jr, Button as G } from "@abc-design/react";
import { createPortal as Or } from "react-dom";
import { getStraightPath as Je, getSmoothStepPath as ke, getSimpleBezierPath as Qe, getBezierPath as qe, BaseEdge as _r, EdgeToolbar as Ar, EdgeLabelRenderer as Pr, ConnectionLineType as ue, ViewportPortal as Vr, ReactFlow as $r, SelectionMode as Wr, Background as Kr, Panel as be, MiniMap as Gr, ReactFlowProvider as Ur, BackgroundVariant as Re, useNodeId as Zr, useNodeConnections as Yr, Handle as Xr, NodeResizer as Jr, NodeToolbar as Qr, Position as qr, getOutgoers as Hr, getConnectedEdges as He, getIncomers as et } from "@xyflow/react";
const er = {
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
}, De = {
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
}, Ee = /\{\{\s*([^{}]+?)\s*\}\}/g;
function rt(o) {
  var c;
  if (!o) return [];
  const r = [];
  Ee.lastIndex = 0;
  let a = Ee.exec(o), s = 0;
  for (; a !== null; ) {
    const i = a[0], l = ((c = a[1]) == null ? void 0 : c.trim()) ?? "";
    l && (r.push({
      raw: i,
      key: l,
      start: a.index,
      end: a.index + i.length,
      occurrenceIndex: s
    }), s += 1), a = Ee.exec(o);
  }
  return r;
}
function tt(o, r) {
  const a = o.slice(0, r.start), s = o.slice(r.end);
  if (a.endsWith(" ") && s.startsWith(" "))
    return `${a}${s.slice(1)}`;
  const c = `${a}${s}`;
  return c.trim().length === 0 ? "" : c;
}
function nt(o, r, a, s, c = !1) {
  if (c)
    return { nextValue: r, nextCaret: r.length };
  const i = o.length, l = typeof a == "number" && a >= 0 ? Math.min(a, i) : i, n = typeof s == "number" && s >= l ? Math.min(s, i) : l;
  return {
    nextValue: `${o.slice(0, l)}${r}${o.slice(n)}`,
    nextCaret: l + r.length
  };
}
const at = {
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
}, ot = Q.forwardRef(
  ({
    items: o,
    activeKey: r,
    defaultActiveKey: a = null,
    onActiveKeyChange: s,
    renderFlyout: c,
    flyoutContent: i,
    flyoutHeader: l,
    showFlyoutHeader: n = !0,
    flyoutWidth: p = 264,
    side: m = "left",
    size: x = "md",
    footer: g,
    closeOnOutsideClick: v = !0,
    closeOnEscape: d = !0,
    closeLabel: y = "收起面板",
    motion: M,
    className: f,
    railClassName: R,
    flyoutClassName: T,
    "aria-label": E = "画布类目工具栏",
    ...t
  }, S) => {
    const C = Ce(M), j = re(null), D = Ye(), [B, u] = Be({
      value: r,
      defaultValue: a,
      onChange: s
    }), k = Z(
      (z) => {
        j.current = z, typeof S == "function" ? S(z) : S && (S.current = z);
      },
      [S]
    ), b = ge(
      () => B ? o.find((z) => z.key === B && !z.disabled) ?? null : null,
      [B, o]
    ), I = Z(() => {
      u(null);
    }, [u]), O = Z(
      (z) => {
        z.disabled || u(B === z.key ? null : z.key);
      },
      [B, u]
    ), _ = ge(() => b ? c ? c(b, { close: I }) : b.content !== void 0 ? b.content : i ?? null : null, [b, c, i, I]), A = !!(b && _ !== null && _ !== void 0);
    pe(() => {
      if (!A) return;
      const z = (K) => {
        var ae;
        if (!v) return;
        const X = K.target;
        X && ((ae = j.current) != null && ae.contains(X)) || I();
      }, P = (K) => {
        !d || K.key !== "Escape" || (K.stopPropagation(), I());
      };
      return document.addEventListener("mousedown", z), document.addEventListener("keydown", P), () => {
        document.removeEventListener("mousedown", z), document.removeEventListener("keydown", P);
      };
    }, [A, v, d, I]);
    const U = at[x], te = typeof p == "number" ? `${p}px` : p, ne = () => !b || l === null || !n ? null : typeof l == "function" ? l(b, { close: I }) : l !== void 0 ? l : /* @__PURE__ */ h("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-3 py-2.5", children: [
      /* @__PURE__ */ h("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ e("span", { className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: b.icon }),
        /* @__PURE__ */ e("span", { className: "truncate text-xs font-semibold text-[var(--abc-fg)]", children: b.label })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: I,
          "aria-label": y,
          className: "inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          children: /* @__PURE__ */ e(Fe, { className: "h-3.5 w-3.5" })
        }
      )
    ] }), ee = /* @__PURE__ */ h(
      "nav",
      {
        "aria-label": E,
        "data-motion": C,
        className: w(
          "nodrag nopan flex shrink-0 flex-col items-stretch border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)] select-none",
          U.rail,
          R
        ),
        children: [
          o.map((z) => {
            const P = (b == null ? void 0 : b.key) === z.key, K = z.title ?? (typeof z.label == "string" ? z.label : void 0);
            return /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                disabled: z.disabled,
                title: K,
                "aria-pressed": P,
                "aria-expanded": P && A,
                "aria-controls": P && A ? D : void 0,
                "data-rail-key": z.key,
                "data-active": P ? "true" : "false",
                onClick: () => O(z),
                className: w(
                  "group relative flex w-full flex-col items-center justify-center text-center transition-[color,background-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  U.button,
                  z.disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
                  P ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: w(
                        "inline-flex shrink-0 items-center justify-center transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        U.iconWrap,
                        !z.disabled && "group-hover:scale-105"
                      ),
                      children: z.icon
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: w("max-w-full truncate font-medium", U.label), children: z.label }),
                  z.badge !== void 0 && z.badge !== null && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute right-1 top-1 inline-flex min-w-[14px] items-center justify-center rounded-full bg-[var(--abc-primary)] px-1 text-[9px] font-semibold leading-[14px] text-[var(--abc-primary-fg)]", children: z.badge })
                ]
              },
              z.key
            );
          }),
          g && /* @__PURE__ */ e("div", { className: "mt-1 border-t border-[var(--abc-border)] pt-1.5", children: g })
        ]
      }
    ), F = A ? /* @__PURE__ */ h(
      "div",
      {
        id: D,
        role: "region",
        "aria-label": typeof (b == null ? void 0 : b.label) == "string" ? `${b.label} 面板` : "展开内容面板",
        "data-flow-rail-flyout": "open",
        "data-active-key": b == null ? void 0 : b.key,
        "data-motion": C,
        style: { width: te },
        className: w(
          "nodrag nopan flex max-h-[min(70vh,520px)] flex-col overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-popover)]",
          C !== "none" && "abc-animate-popover-in",
          T
        ),
        children: [
          ne(),
          /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-y-auto p-3", children: _ })
        ]
      }
    ) : null;
    return /* @__PURE__ */ h(
      "div",
      {
        ref: k,
        "data-side": m,
        className: w(
          "relative inline-flex items-start gap-2.5",
          m === "right" && "flex-row-reverse",
          f
        ),
        ...t,
        children: [
          ee,
          F
        ]
      }
    );
  }
);
ot.displayName = "FloatingIconRail";
const st = Q.forwardRef(
  ({
    title: o,
    subtitle: r,
    icon: a,
    badge: s,
    headerExtra: c,
    tone: i = "blue",
    subIcon: l,
    subTitle: n,
    subExtra: p,
    metaRows: m,
    maxMetaRows: x = 3,
    outputs: g,
    renderOutputHandle: v,
    inputHandle: d,
    toolbar: y,
    footer: M,
    selected: f = !1,
    running: R = !1,
    error: T = !1,
    status: E,
    width: t = 256,
    motion: S,
    className: C,
    headerClassName: j,
    bodyClassName: D,
    style: B,
    children: u,
    ...k
  }, b) => {
    const I = Ce(S), O = er[i], _ = T || E === "error" ? "error" : R || E === "running" ? "running" : E === "success" ? "success" : "idle", A = m && x > 0 ? m.slice(0, x) : [], U = !!(l || n !== void 0 || p), te = U || A.length > 0 || Q.Children.count(u) > 0 || !!(g && g.length > 0) || !!M, ne = _ === "error" ? "border-rose-500 ring-2 ring-rose-500/75 dark:border-rose-400 dark:ring-rose-400/70" : _ === "running" ? "border-blue-500 ring-2 ring-blue-500/80 dark:border-blue-400 dark:ring-blue-400/75" : f ? O.selectedRing : void 0, ee = typeof t == "number" ? `${t}px` : t;
    return /* @__PURE__ */ h(
      "div",
      {
        ref: b,
        "data-tone": i,
        "data-status": _,
        "data-selected": f ? "true" : "false",
        "data-motion": I,
        style: { width: ee, ...B },
        className: w(
          "relative overflow-visible rounded-[14px] border p-1 shadow-[var(--abc-shadow-card)] transition-[border-color,box-shadow,transform] duration-[var(--abc-motion-fast,140ms)] ease-out",
          O.cardShell,
          ne,
          f && "shadow-md",
          C
        ),
        ...k,
        children: [
          d,
          y && /* @__PURE__ */ e("div", { className: "nodrag nopan absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2", children: y }),
          /* @__PURE__ */ h(
            "div",
            {
              className: w(
                "flex items-center justify-between gap-2 px-2 py-1.5",
                j
              ),
              children: [
                /* @__PURE__ */ h("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  a && /* @__PURE__ */ e(
                    "span",
                    {
                      className: w(
                        "inline-flex h-4 w-4 shrink-0 items-center justify-center",
                        O.headerText
                      ),
                      children: a
                    }
                  ),
                  /* @__PURE__ */ h("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ h("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: w(
                            "truncate text-xs font-semibold leading-tight",
                            O.headerText
                          ),
                          children: o
                        }
                      ),
                      s && /* @__PURE__ */ e("span", { className: "shrink-0", children: s })
                    ] }),
                    r !== void 0 && /* @__PURE__ */ e("div", { className: "truncate text-[10.5px] leading-tight text-[var(--abc-fg-muted)]", children: r })
                  ] })
                ] }),
                /* @__PURE__ */ h("div", { className: "flex shrink-0 items-center gap-1", children: [
                  _ === "running" && /* @__PURE__ */ h(
                    "span",
                    {
                      "aria-label": "运行中",
                      "data-flow-status-indicator": "running",
                      className: "relative inline-flex h-2 w-2 shrink-0",
                      children: [
                        I !== "none" && /* @__PURE__ */ e("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" }),
                        /* @__PURE__ */ e("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-blue-500" })
                      ]
                    }
                  ),
                  _ === "error" && /* @__PURE__ */ e(
                    "span",
                    {
                      "aria-label": "执行异常",
                      "data-flow-status-indicator": "error",
                      className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-rose-500"
                    }
                  ),
                  _ === "success" && /* @__PURE__ */ e(
                    "span",
                    {
                      "aria-label": "执行成功",
                      "data-flow-status-indicator": "success",
                      className: "inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                    }
                  ),
                  c && /* @__PURE__ */ e("div", { className: "nodrag nopan flex items-center gap-1", children: c })
                ] })
              ]
            }
          ),
          te && /* @__PURE__ */ h(
            "div",
            {
              className: w(
                "overflow-visible rounded-[10px] border border-[var(--abc-border)]/70 bg-[var(--abc-bg-surface)] px-2.5 py-2 text-[var(--abc-fg)]",
                D
              ),
              children: [
                U && /* @__PURE__ */ h("div", { className: "mb-1.5 flex items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ h("div", { className: "flex min-w-0 items-center gap-1.5", children: [
                    l && /* @__PURE__ */ e("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center text-[var(--abc-fg-secondary)]", children: l }),
                    n !== void 0 && /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: n })
                  ] }),
                  p && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: p })
                ] }),
                A.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-1", children: A.map((F, z) => /* @__PURE__ */ h(
                  "div",
                  {
                    title: F.title,
                    className: "flex min-w-0 items-center gap-1.5 text-[11.5px] leading-snug text-[var(--abc-fg-secondary)]",
                    children: [
                      F.icon && /* @__PURE__ */ e("span", { className: "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[var(--abc-fg-muted)]", children: F.icon }),
                      F.label !== void 0 && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: F.label }),
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: w(
                            "min-w-0 flex-1 truncate text-[var(--abc-fg)]",
                            F.mono && "font-mono text-[11px]"
                          ),
                          children: F.value
                        }
                      )
                    ]
                  },
                  F.key ?? String(z)
                )) }),
                u && /* @__PURE__ */ e("div", { className: w(A.length > 0 && "mt-2", "text-xs"), children: u }),
                g && g.length > 0 && /* @__PURE__ */ e(
                  "div",
                  {
                    "data-flow-outputs": "",
                    className: w(
                      "space-y-0.5",
                      (A.length > 0 || Q.Children.count(u) > 0 || U) && "mt-2 border-t border-[var(--abc-border)]/70 pt-1.5"
                    ),
                    children: g.map((F) => {
                      const z = F.tone ?? "neutral", P = De[z], K = F.handle !== void 0 ? F.handle : v == null ? void 0 : v(F), X = F.showDot !== void 0 ? F.showDot : !K;
                      return /* @__PURE__ */ h(
                        "div",
                        {
                          "data-port-id": F.id,
                          "data-port-tone": z,
                          className: w(
                            // 右侧外延 -mr-3.5 与外框 p-1 + 内层 px-2.5 (4+10=14px) 精准齐平卡片外右缘，
                            // 使直接挂载于本行的 ReactFlow <Handle position={Position.Right} /> 落点精确贴边
                            "relative -mr-3.5 flex items-center justify-end gap-1.5 py-0.5 pl-2 pr-3.5 text-[11.5px] leading-snug",
                            F.disabled && "opacity-45",
                            F.className
                          ),
                          children: [
                            F.hint && /* @__PURE__ */ e("span", { className: "truncate text-[10.5px] text-[var(--abc-fg-muted)]", children: F.hint }),
                            F.icon && /* @__PURE__ */ e("span", { className: w("inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center", P.text), children: F.icon }),
                            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg-secondary)]", children: F.label }),
                            X && /* @__PURE__ */ e(
                              "span",
                              {
                                "aria-hidden": "true",
                                "data-port-dot": z,
                                className: w(
                                  "pointer-events-none absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
                                  P.dot
                                )
                              }
                            ),
                            K
                          ]
                        },
                        F.id
                      );
                    })
                  }
                ),
                M && /* @__PURE__ */ e("div", { className: "mt-2 border-t border-[var(--abc-border)]/70 pt-1.5", children: M })
              ]
            }
          )
        ]
      }
    );
  }
);
st.displayName = "FlowNodeCard";
const it = {
  xs: "h-6 w-6",
  sm: "h-7 w-7"
}, rr = Q.forwardRef(
  ({
    items: o,
    orientation: r = "horizontal",
    size: a = "sm",
    visible: s = !0,
    tooltipPlacement: c = "top",
    disableTooltips: i = !1,
    stopPropagation: l = !0,
    motion: n,
    className: p,
    children: m,
    "aria-label": x = "节点快捷操作条",
    ...g
  }, v) => {
    const d = Ce(n);
    if (!s) return null;
    const y = r === "vertical", M = it[a];
    return /* @__PURE__ */ h(
      "div",
      {
        ref: v,
        role: "toolbar",
        "aria-label": x,
        "aria-orientation": r,
        "data-motion": d,
        "data-orientation": r,
        onMouseDown: l ? (f) => f.stopPropagation() : void 0,
        onClick: l ? (f) => f.stopPropagation() : void 0,
        className: w(
          "nodrag nopan inline-flex items-center gap-0.5 rounded-[10px] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5 shadow-[var(--abc-shadow-popover)] select-none",
          y ? "flex-col" : "flex-row",
          d !== "none" && "abc-animate-popover-in",
          p
        ),
        ...g,
        children: [
          o.map((f) => {
            const R = /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: f.disabled,
                "aria-label": f["aria-label"] ?? f.label,
                "aria-pressed": f.active !== void 0 ? f.active : void 0,
                "data-toolbar-key": f.key,
                "data-active": f.active ? "true" : "false",
                onClick: (T) => {
                  var E;
                  l && T.stopPropagation(), !f.disabled && ((E = f.onClick) == null || E.call(f, T));
                },
                className: w(
                  "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-sm)] transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  M,
                  f.disabled ? "cursor-not-allowed text-[var(--abc-fg-placeholder)] opacity-45" : "cursor-pointer",
                  f.active ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : f.danger ? "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-danger-soft)] enabled:hover:text-[var(--abc-danger)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                  f.className
                ),
                children: /* @__PURE__ */ e("span", { className: "inline-flex h-3.5 w-3.5 items-center justify-center", children: f.icon })
              }
            );
            return /* @__PURE__ */ h(Q.Fragment, { children: [
              f.dividerBefore && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: w(
                    "shrink-0 bg-[var(--abc-border)]",
                    y ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                  )
                }
              ),
              i || f.disabled ? R : /* @__PURE__ */ e(
                Xe,
                {
                  content: f.tooltip ?? f.label,
                  placement: c,
                  delay: 80,
                  motion: d,
                  children: R
                }
              )
            ] }, f.key);
          }),
          m && /* @__PURE__ */ h(ce, { children: [
            o.length > 0 && /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                className: w(
                  "shrink-0 bg-[var(--abc-border)]",
                  y ? "my-0.5 h-px w-4" : "mx-0.5 h-4 w-px"
                )
              }
            ),
            m
          ] })
        ]
      }
    );
  }
);
rr.displayName = "FlowNodeToolbar";
const ct = ({
  floatingRef: o,
  portalContainer: r,
  portalTheme: a,
  isMounted: s,
  isVisible: c,
  popoverId: i,
  floatingStyle: l,
  actualSide: n,
  resolvedMotion: p,
  pickerTitle: m,
  pickerTriggerLabel: x,
  pickerPlaceholder: g,
  emptyVariablesText: v,
  searchable: d,
  totalVariablesCount: y,
  query: M,
  onQueryChange: f,
  groupedVariables: R,
  onSelect: T,
  popoverClassName: E
}) => !s || !r ? null : Or(
  /* @__PURE__ */ h(
    "div",
    {
      ref: o,
      id: i,
      role: "dialog",
      "aria-label": typeof m == "string" ? m : x,
      "data-abc-floating": "",
      "data-abc-theme": a,
      "data-playground-theme": a,
      "data-template-picker-popover": "open",
      "data-placement": n,
      "data-motion": p,
      style: l,
      className: w(
        a === "dark" && "dark",
        a === "light" && "light",
        "nodrag nopan z-[1350] w-[280px] max-w-[calc(100vw-16px)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
        p !== "none" && (c ? "abc-animate-popover-in" : "abc-animate-popover-out"),
        E
      ),
      children: [
        /* @__PURE__ */ h("div", { className: "border-b border-[var(--abc-border)] px-3 py-2", children: [
          /* @__PURE__ */ h("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: m }),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "{{var}}" })
          ] }),
          d && y > 0 && /* @__PURE__ */ h("div", { className: "relative mt-2", children: [
            /* @__PURE__ */ e(vr, { className: "pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: M,
                onChange: (t) => f(t.target.value),
                placeholder: g,
                "aria-label": g,
                className: "h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-7 pr-2 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--abc-ring)]"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-60 overflow-y-auto p-1.5", children: R.length === 0 ? /* @__PURE__ */ e("div", { className: "px-2 py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: v }) : /* @__PURE__ */ e("div", { className: "space-y-2", children: R.map(([t, S]) => /* @__PURE__ */ h("div", { children: [
          /* @__PURE__ */ e("div", { className: "px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: t }),
          /* @__PURE__ */ e("div", { className: "mt-0.5 space-y-0.5", children: S.map((C) => /* @__PURE__ */ h(
            "button",
            {
              type: "button",
              disabled: C.disabled,
              "data-variable-option": C.key,
              onClick: () => T(C),
              className: w(
                "flex w-full flex-col gap-0.5 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left transition-colors focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)]",
                C.disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer hover:bg-[var(--abc-bg-subtle)]"
              ),
              children: [
                /* @__PURE__ */ h("div", { className: "flex w-full items-center justify-between gap-2", children: [
                  /* @__PURE__ */ e("span", { className: "truncate font-mono text-[11.5px] font-medium text-[var(--abc-primary)]", children: `{{${C.key}}}` }),
                  C.type && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: C.type })
                ] }),
                (C.label || C.description || C.sampleValue) && /* @__PURE__ */ h("div", { className: "flex w-full items-center justify-between gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ e("span", { className: "truncate", children: C.label ?? C.description }),
                  C.sampleValue && /* @__PURE__ */ e("span", { className: "max-w-[90px] shrink-0 truncate font-mono text-[10px] text-[var(--abc-fg-secondary)]", children: C.sampleValue })
                ] })
              ]
            },
            C.key
          )) })
        ] }, t)) }) })
      ]
    }
  ),
  r
), lt = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, dt = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, ut = Q.forwardRef(
  ({
    value: o,
    defaultValue: r = "",
    onChange: a,
    multiline: s = !1,
    rows: c = 3,
    variables: i = [],
    chipDisplay: l = "auto",
    removableChips: n = !0,
    showPreviewLabel: p = !0,
    replaceOnSelect: m = !1,
    insertFormat: x,
    showPickerButton: g = !0,
    searchable: v = !0,
    pickerOpen: d,
    defaultPickerOpen: y = !1,
    onPickerOpenChange: M,
    pickerTitle: f = "插入模板变量",
    pickerPlaceholder: R = "搜索变量名、分组或说明...",
    pickerTriggerLabel: T = "插入变量",
    emptyVariablesText: E = "暂无可用变量",
    onSelectVariable: t,
    onRemoveVariable: S,
    id: C,
    name: j,
    label: D,
    error: B,
    helperText: u,
    invalid: k = !1,
    required: b = !1,
    disabled: I = !1,
    readOnly: O = !1,
    placeholder: _ = "输入文本或点击右下角 {} 插入 {{variable}}...",
    size: A,
    mono: U = !1,
    allowClear: te = !1,
    clearLabel: ne = "清空内容",
    motion: ee,
    onFocus: F,
    onBlur: z,
    "aria-label": P,
    "aria-labelledby": K,
    "aria-describedby": X,
    className: ae,
    wrapperClassName: ar,
    inputClassName: Oe,
    popoverClassName: or
  }, le) => {
    const _e = Br(A, "sm"), ze = Ce(ee), sr = Ye(), de = C ?? sr, Ae = `${de}-hint`, Pe = `${de}-vars`, [q, oe] = Be({
      value: o,
      defaultValue: r,
      onChange: a
    }), [H, ie] = Be({
      value: d,
      defaultValue: y,
      onChange: M
    }), [Se, Ve] = je(""), he = re(null), ve = re(null), Me = re(null), me = re({
      start: null,
      end: null
    }), $e = Z(
      (N) => {
        he.current = N, typeof le == "function" ? le(N) : le && (le.current = N);
      },
      [le]
    ), J = !I && !O, xe = !!(k || B), ir = ge(() => {
      const N = /* @__PURE__ */ new Map();
      for (const L of i)
        N.has(L.key) || N.set(L.key, L);
      return N;
    }, [i]), Te = ge(() => rt(q), [q]), cr = l === "always" || l === "auto" && Te.length > 0, { isMounted: We, isVisible: lr } = Dr(
      H && J,
      ze === "none" ? 0 : 130
    ), { style: dr, actualSide: ur, portalContainer: br, portalTheme: fr } = Lr({
      open: We,
      triggerRef: ve,
      floatingRef: Me,
      placement: "bottomRight",
      offset: 6,
      rightAnchorOnOverflow: !0
    });
    pe(() => {
      H || Ve("");
    }, [H]), pe(() => {
      if (!H) return;
      const N = (W) => {
        var $, se;
        const V = W.target;
        V && (($ = ve.current) != null && $.contains(V) || (se = Me.current) != null && se.contains(V) || ie(!1));
      }, L = (W) => {
        var V;
        W.key === "Escape" && (W.preventDefault(), W.stopPropagation(), ie(!1), (V = ve.current) == null || V.focus());
      };
      return document.addEventListener("mousedown", N), document.addEventListener("keydown", L, !0), () => {
        document.removeEventListener("mousedown", N), document.removeEventListener("keydown", L, !0);
      };
    }, [H, ie]);
    const Y = Z(() => {
      const N = he.current;
      N && (me.current = {
        start: N.selectionStart,
        end: N.selectionEnd
      });
    }, []), gr = Z(
      (N) => {
        if (!J || N.disabled) return;
        const L = x ? x(N) : `{{${N.key}}}`, { nextValue: W, nextCaret: V } = nt(
          q,
          L,
          me.current.start,
          me.current.end,
          m
        );
        oe(W), t == null || t(N, W), ie(!1), typeof window < "u" && window.requestAnimationFrame(() => {
          const $ = he.current;
          if ($) {
            $.focus();
            try {
              $.setSelectionRange(V, V);
            } catch {
            }
            me.current = { start: V, end: V };
          }
        });
      },
      [
        J,
        x,
        q,
        m,
        oe,
        t,
        ie
      ]
    ), pr = Z(
      (N) => {
        if (!J) return;
        const L = tt(q, N);
        oe(L), S == null || S(N, L);
      },
      [J, q, oe, S]
    ), hr = ge(() => {
      var V;
      const N = Se.trim().toLowerCase(), L = N ? i.filter(
        ($) => [$.key, $.label, $.group, $.description, $.type].filter(Boolean).some((se) => String(se).toLowerCase().includes(N))
      ) : i, W = /* @__PURE__ */ new Map();
      for (const $ of L) {
        const se = ((V = $.group) == null ? void 0 : V.trim()) || "可用变量", Ge = W.get(se) ?? [];
        Ge.push($), W.set(se, Ge);
      }
      return Array.from(W.entries());
    }, [i, Se]), Ke = [X, B || u ? Ae : void 0].filter(Boolean).join(" ") || void 0, we = te && J && q.length > 0;
    return /* @__PURE__ */ h("div", { className: w("w-full space-y-1", ar), children: [
      D !== void 0 && /* @__PURE__ */ h(
        "label",
        {
          htmlFor: de,
          className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: [
            /* @__PURE__ */ e("span", { children: D }),
            b && /* @__PURE__ */ e("span", { className: "text-[var(--abc-danger)]", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ h(
        "div",
        {
          "data-slot": "template-variable-input",
          "data-motion": ze,
          "data-multiline": s ? "true" : "false",
          "data-invalid": xe ? "true" : "false",
          className: w(
            jr,
            "nodrag nopan relative flex flex-col px-2.5 py-1.5",
            s ? dt[_e] : lt[_e],
            xe && "border-[var(--abc-danger)] focus-within:border-[var(--abc-danger)] focus-within:ring-[var(--abc-danger)]/20",
            I && "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] cursor-not-allowed",
            ae
          ),
          children: [
            cr && /* @__PURE__ */ e(
              "div",
              {
                "data-template-chips": "",
                className: w(
                  "flex flex-wrap items-center gap-1.5",
                  Te.length > 0 && "mb-1.5",
                  g && !s && "pr-8"
                ),
                children: Te.map((N) => {
                  const L = ir.get(N.key), W = (L == null ? void 0 : L.sampleValue) ?? (L == null ? void 0 : L.label), V = /* @__PURE__ */ h(
                    "span",
                    {
                      "data-template-chip": N.key,
                      className: "inline-flex max-w-full items-center gap-1 rounded-full bg-[var(--abc-flow-chip-bg)] px-2 py-0.5 text-[11px] font-medium leading-tight text-[var(--abc-flow-chip-fg)] shadow-2xs",
                      children: [
                        /* @__PURE__ */ e("span", { className: "truncate font-mono", children: N.key }),
                        p && W && W !== N.key && /* @__PURE__ */ e("span", { className: "max-w-[110px] truncate rounded-full bg-[var(--abc-flow-chip-sub-bg)] px-1.5 py-0 text-[10px] font-normal text-[var(--abc-flow-chip-sub-fg)]", children: W }),
                        n && J && /* @__PURE__ */ e(
                          "button",
                          {
                            type: "button",
                            "aria-label": `移除变量 ${N.key}`,
                            onClick: ($) => {
                              $.stopPropagation(), pr(N);
                            },
                            className: "inline-flex h-3.5 w-3.5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--abc-flow-chip-sub-bg)] text-[var(--abc-flow-chip-fg)] transition-colors hover:bg-[var(--abc-flow-chip-close-hover)] focus:outline-none focus-visible:ring-1 focus-visible:ring-current",
                            children: /* @__PURE__ */ e(Fe, { className: "h-2.5 w-2.5" })
                          }
                        )
                      ]
                    },
                    `${N.key}_${N.occurrenceIndex}`
                  );
                  return L != null && L.description ? /* @__PURE__ */ e(
                    Xe,
                    {
                      content: L.description,
                      placement: "top",
                      delay: 100,
                      children: V
                    },
                    `${N.key}_${N.occurrenceIndex}`
                  ) : V;
                })
              }
            ),
            /* @__PURE__ */ e("div", { className: "relative flex w-full items-center", children: s ? /* @__PURE__ */ e(
              "textarea",
              {
                ref: $e,
                id: de,
                name: j,
                rows: c,
                value: q,
                placeholder: _,
                disabled: I,
                readOnly: O,
                required: b,
                "aria-label": P,
                "aria-labelledby": K,
                "aria-describedby": Ke,
                "aria-invalid": xe || void 0,
                onChange: (N) => {
                  oe(N.target.value), Y();
                },
                onSelect: Y,
                onKeyUp: Y,
                onClick: Y,
                onFocus: F,
                onBlur: (N) => {
                  Y(), z == null || z(N);
                },
                className: w(
                  "w-full resize-y bg-transparent pb-5 pr-8 text-inherit leading-relaxed text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  U && "font-mono",
                  Oe
                )
              }
            ) : /* @__PURE__ */ e(
              "input",
              {
                ref: $e,
                id: de,
                name: j,
                type: "text",
                value: q,
                placeholder: _,
                disabled: I,
                readOnly: O,
                required: b,
                "aria-label": P,
                "aria-labelledby": K,
                "aria-describedby": Ke,
                "aria-invalid": xe || void 0,
                onChange: (N) => {
                  oe(N.target.value), Y();
                },
                onSelect: Y,
                onKeyUp: Y,
                onClick: Y,
                onFocus: F,
                onBlur: (N) => {
                  Y(), z == null || z(N);
                },
                className: w(
                  "w-full bg-transparent text-inherit leading-normal text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none disabled:cursor-not-allowed",
                  g && (we ? "pr-14" : "pr-8"),
                  !g && we && "pr-7",
                  U && "font-mono",
                  Oe
                )
              }
            ) }),
            (we || g) && /* @__PURE__ */ h("div", { className: "absolute bottom-1.5 right-1.5 flex items-center gap-1", children: [
              we && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": ne,
                  onClick: () => {
                    var N;
                    oe(""), (N = he.current) == null || N.focus();
                  },
                  className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                  children: /* @__PURE__ */ e(Fe, { className: "h-3 w-3" })
                }
              ),
              g && /* @__PURE__ */ e(
                "button",
                {
                  ref: ve,
                  type: "button",
                  disabled: !J,
                  "aria-label": T,
                  "aria-expanded": H,
                  "aria-haspopup": "dialog",
                  "aria-controls": H ? Pe : void 0,
                  "data-template-picker-trigger": "",
                  title: T,
                  onMouseDown: (N) => {
                    N.preventDefault(), Y();
                  },
                  onClick: () => {
                    J && ie(!H);
                  },
                  className: w(
                    "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors duration-[var(--abc-motion-fast,140ms)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                    J ? H ? "cursor-pointer border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "cursor-pointer border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]/60 hover:text-[var(--abc-primary)]" : "cursor-not-allowed border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] opacity-55"
                  ),
                  children: /* @__PURE__ */ e(mr, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ]
        }
      ),
      (B || u) && /* @__PURE__ */ e(
        "div",
        {
          id: Ae,
          className: w(
            "text-[11px] leading-snug",
            B ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg-muted)]"
          ),
          children: B ?? u
        }
      ),
      /* @__PURE__ */ e(
        ct,
        {
          floatingRef: Me,
          portalContainer: br,
          portalTheme: fr,
          isMounted: We,
          isVisible: lr,
          popoverId: Pe,
          floatingStyle: dr,
          actualSide: ur,
          resolvedMotion: ze,
          pickerTitle: f,
          pickerTriggerLabel: T,
          pickerPlaceholder: R,
          emptyVariablesText: E,
          searchable: v,
          totalVariablesCount: i.length,
          query: Se,
          onQueryChange: Ve,
          groupedVariables: hr,
          onSelect: gr,
          popoverClassName: or
        }
      )
    ] });
  }
);
ut.displayName = "TemplateVariableInput";
function ye(o) {
  if (o !== void 0)
    return typeof o == "number" ? `${o}px` : o;
}
const tr = Q.forwardRef(
  ({
    title: o,
    description: r,
    icon: a,
    badge: s,
    headerExtra: c,
    tone: i = "slate",
    align: l,
    dashed: n = !0,
    selected: p = !1,
    width: m,
    height: x,
    minWidth: g = 220,
    minHeight: v = 148,
    className: d,
    headerClassName: y,
    bodyClassName: M,
    style: f,
    children: R,
    ...T
  }, E) => {
    const t = Q.Children.count(R) > 0, S = l ?? (t ? "top-left" : "center"), C = er[i], j = {
      width: ye(m),
      height: ye(x),
      minWidth: ye(g),
      minHeight: ye(v),
      ...f
    }, D = S === "center" && !t;
    return /* @__PURE__ */ h(
      "div",
      {
        ref: E,
        "data-tone": i,
        "data-align": S,
        "data-selected": p ? "true" : "false",
        style: j,
        className: w(
          "relative flex flex-col rounded-[var(--abc-radius-xl)] border-[1.5px] transition-[border-color,box-shadow,background-color] duration-[var(--abc-motion-fast,140ms)] ease-out",
          n ? "border-dashed" : "border-solid",
          C.sectionFrame,
          p && "ring-2 ring-[var(--abc-primary)] border-[var(--abc-primary)]",
          D ? "items-center justify-center p-5 text-center" : "p-4 text-left",
          d
        ),
        ...T,
        children: [
          (o !== void 0 || r !== void 0 || a || s || c) && /* @__PURE__ */ h(
            "div",
            {
              className: w(
                D ? "flex max-w-[260px] flex-col items-center gap-1.5" : "flex w-full items-start justify-between gap-2",
                y
              ),
              children: [
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: w(
                      "min-w-0",
                      D ? "flex flex-col items-center gap-1" : "flex-1 space-y-0.5"
                    ),
                    children: [
                      (a || o !== void 0 || s) && /* @__PURE__ */ h(
                        "div",
                        {
                          className: w(
                            "flex items-center gap-1.5",
                            D ? "justify-center" : "justify-start"
                          ),
                          children: [
                            a && /* @__PURE__ */ e("span", { className: w("inline-flex shrink-0 items-center", C.sectionTitle), children: a }),
                            o !== void 0 && /* @__PURE__ */ e(
                              "div",
                              {
                                className: w(
                                  "font-medium leading-snug",
                                  D ? "text-[15px]" : "text-xs font-semibold",
                                  C.sectionTitle
                                ),
                                children: o
                              }
                            ),
                            s && /* @__PURE__ */ e("span", { className: "shrink-0", children: s })
                          ]
                        }
                      ),
                      r !== void 0 && /* @__PURE__ */ e(
                        "p",
                        {
                          className: w(
                            "m-0 text-xs leading-relaxed text-[var(--abc-fg-muted)]",
                            D && "max-w-[240px]"
                          ),
                          children: r
                        }
                      )
                    ]
                  }
                ),
                c && /* @__PURE__ */ e(
                  "div",
                  {
                    className: w(
                      "nodrag nopan shrink-0",
                      D && "absolute right-3 top-3"
                    ),
                    children: c
                  }
                )
              ]
            }
          ),
          t && /* @__PURE__ */ e("div", { className: w("mt-3 min-h-0 flex-1", M), children: R })
        ]
      }
    );
  }
);
tr.displayName = "FlowSectionFrame";
const zt = ({
  zoomPercent: o,
  onZoomOut: r,
  onZoomReset: a,
  onZoomIn: s,
  onFitView: c,
  onAutoLayout: i,
  showMiniMap: l = !1,
  onToggleMiniMap: n,
  interactionMode: p = "pan",
  onInteractionModeChange: m,
  interactive: x = !0,
  onToggleInteractive: g,
  snapToGrid: v = !1,
  onToggleSnapToGrid: d,
  onUndo: y,
  onRedo: M,
  canUndo: f = !1,
  canRedo: R = !1,
  extraActions: T,
  primaryAction: E,
  labels: t,
  className: S,
  testId: C = "abc-flow-viewport-controls"
}) => {
  const j = !!(m || g || d), D = !!(y || M), B = !!(c || i || n || T && T.length > 0), u = "h-7 w-7 text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]";
  return /* @__PURE__ */ h(
    "div",
    {
      "data-testid": C,
      className: w(
        "nodrag nopan flex flex-wrap items-center gap-1 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 p-1 text-xs text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)] backdrop-blur",
        S
      ),
      children: [
        /* @__PURE__ */ e(
          G,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (t == null ? void 0 : t.zoomOut) ?? "缩小画布",
            title: (t == null ? void 0 : t.zoomOutTitle) ?? (t == null ? void 0 : t.zoomOut) ?? "缩小画布 (-)",
            onClick: r,
            className: u,
            children: /* @__PURE__ */ e(xr, { size: 13 })
          }
        ),
        /* @__PURE__ */ h(
          G,
          {
            type: "button",
            variant: "ghost",
            size: "xs",
            "aria-label": (t == null ? void 0 : t.zoomReset) ?? "重置画布缩放至 100%",
            title: (t == null ? void 0 : t.zoomResetTitle) ?? (t == null ? void 0 : t.zoomReset) ?? "重置缩放比例 (0)",
            onClick: a,
            className: "h-7 min-w-[44px] px-1.5 font-mono text-[11px] font-medium text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]",
            children: [
              o,
              "%"
            ]
          }
        ),
        /* @__PURE__ */ e(
          G,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (t == null ? void 0 : t.zoomIn) ?? "放大画布",
            title: (t == null ? void 0 : t.zoomInTitle) ?? (t == null ? void 0 : t.zoomIn) ?? "放大画布 (+)",
            onClick: s,
            className: u,
            children: /* @__PURE__ */ e(Ne, { size: 13 })
          }
        ),
        j && /* @__PURE__ */ h(ce, { children: [
          /* @__PURE__ */ e("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          m && /* @__PURE__ */ h(ce, { children: [
            /* @__PURE__ */ e(
              G,
              {
                type: "button",
                variant: p === "pan" ? "secondary" : "ghost",
                size: "icon-sm",
                "aria-pressed": p === "pan",
                "aria-label": (t == null ? void 0 : t.panMode) ?? "拖拽平移模式",
                title: (t == null ? void 0 : t.panMode) ?? "拖拽平移模式 (Hand)",
                onClick: () => m("pan"),
                className: u,
                children: /* @__PURE__ */ e(wr, { size: 13 })
              }
            ),
            /* @__PURE__ */ e(
              G,
              {
                type: "button",
                variant: p === "select" ? "secondary" : "ghost",
                size: "icon-sm",
                "aria-pressed": p === "select",
                "aria-label": (t == null ? void 0 : t.selectMode) ?? "框选多节点模式",
                title: (t == null ? void 0 : t.selectMode) ?? "左键框选模式 (Select)",
                onClick: () => m("select"),
                className: u,
                children: /* @__PURE__ */ e(yr, { size: 13 })
              }
            )
          ] }),
          g && /* @__PURE__ */ e(
            G,
            {
              type: "button",
              variant: x ? "ghost" : "secondary",
              size: "icon-sm",
              "aria-pressed": !x,
              "aria-label": x ? (t == null ? void 0 : t.lockCanvas) ?? "锁定画布禁止编辑" : (t == null ? void 0 : t.unlockCanvas) ?? "解锁画布恢复编辑",
              title: x ? (t == null ? void 0 : t.lockCanvas) ?? "锁定画布" : (t == null ? void 0 : t.unlockCanvas) ?? "已锁定，点击解锁",
              onClick: g,
              className: u,
              children: x ? /* @__PURE__ */ e(Nr, { size: 13 }) : /* @__PURE__ */ e(kr, { size: 13 })
            }
          ),
          d && /* @__PURE__ */ e(
            G,
            {
              type: "button",
              variant: v ? "secondary" : "ghost",
              size: "icon-sm",
              "aria-pressed": v,
              "aria-label": (t == null ? void 0 : t.snapToGrid) ?? "开关网格磁吸对齐",
              title: (t == null ? void 0 : t.snapToGrid) ?? "网格磁吸对齐 (Snap to Grid)",
              onClick: d,
              className: u,
              children: /* @__PURE__ */ e(Cr, { size: 13 })
            }
          )
        ] }),
        D && /* @__PURE__ */ h(ce, { children: [
          /* @__PURE__ */ e("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          y && /* @__PURE__ */ e(
            G,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              disabled: !f,
              "aria-label": (t == null ? void 0 : t.undo) ?? "撤销操作",
              title: (t == null ? void 0 : t.undo) ?? "撤销 (⌘Z)",
              onClick: y,
              className: u,
              children: /* @__PURE__ */ e(zr, { size: 13 })
            }
          ),
          M && /* @__PURE__ */ e(
            G,
            {
              type: "button",
              variant: "ghost",
              size: "icon-sm",
              disabled: !R,
              "aria-label": (t == null ? void 0 : t.redo) ?? "重做操作",
              title: (t == null ? void 0 : t.redo) ?? "重做 (⇧⌘Z)",
              onClick: M,
              className: u,
              children: /* @__PURE__ */ e(Sr, { size: 13 })
            }
          )
        ] }),
        B && /* @__PURE__ */ e("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
        c && /* @__PURE__ */ e(
          G,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (t == null ? void 0 : t.fitView) ?? "自适应居中视口",
            title: (t == null ? void 0 : t.fitViewTitle) ?? (t == null ? void 0 : t.fitView) ?? "自适应居中视口",
            onClick: c,
            className: u,
            children: /* @__PURE__ */ e(Mr, { size: 13 })
          }
        ),
        i && /* @__PURE__ */ e(
          G,
          {
            type: "button",
            variant: "ghost",
            size: "icon-sm",
            "aria-label": (t == null ? void 0 : t.autoLayout) ?? "一键整理排版",
            title: (t == null ? void 0 : t.autoLayoutTitle) ?? (t == null ? void 0 : t.autoLayout) ?? "一键整理排版",
            onClick: i,
            className: u,
            children: /* @__PURE__ */ e(Tr, { size: 13 })
          }
        ),
        n && /* @__PURE__ */ e(
          G,
          {
            type: "button",
            variant: l ? "secondary" : "ghost",
            size: "icon-sm",
            "data-testid": "toggle-minimap-btn",
            "aria-pressed": l,
            "aria-label": (t == null ? void 0 : t.toggleMiniMap) ?? "开关缩略图导航",
            title: l ? (t == null ? void 0 : t.hideMiniMapTitle) ?? "隐藏缩略图" : (t == null ? void 0 : t.showMiniMapTitle) ?? "显示缩略图",
            onClick: n,
            className: u,
            children: /* @__PURE__ */ e(Rr, { size: 13 })
          }
        ),
        T == null ? void 0 : T.map((k) => /* @__PURE__ */ e(
          G,
          {
            type: "button",
            variant: k.active ? "secondary" : "ghost",
            size: "icon-sm",
            disabled: k.disabled,
            "data-testid": k.testId,
            "aria-label": k.label,
            title: k.title ?? k.label,
            onClick: k.onClick,
            className: u,
            children: k.icon
          },
          k.key
        )),
        E && /* @__PURE__ */ h(ce, { children: [
          /* @__PURE__ */ e("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]", "aria-hidden": "true" }),
          /* @__PURE__ */ h(
            G,
            {
              type: "button",
              variant: "primary",
              size: "xs",
              disabled: E.disabled,
              "data-testid": E.testId,
              "aria-label": E.ariaLabel ?? E.label,
              onClick: E.onClick,
              className: "h-7 gap-1 rounded-lg px-2.5 text-[11px] font-semibold",
              children: [
                E.icon ?? /* @__PURE__ */ e(Ne, { size: 12 }),
                /* @__PURE__ */ e("span", { children: E.label })
              ]
            }
          )
        ] })
      ]
    }
  );
}, Ue = {
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
}, St = ({
  id: o,
  sourceX: r,
  sourceY: a,
  targetX: s,
  targetY: c,
  sourcePosition: i,
  targetPosition: l,
  data: n,
  selected: p,
  markerStart: m,
  markerEnd: x,
  selectedStroke: g = "#4f46e5",
  renderActionMenu: v,
  renderToolbar: d
}) => {
  const [y, M] = je(!1), f = (n == null ? void 0 : n.tone) ?? "default", R = (n == null ? void 0 : n.routeStyle) ?? "bezier", T = (n == null ? void 0 : n.autoAvoidBackward) ?? !0, E = s < r + 24;
  let t, S, C;
  R === "straight" ? [t, S, C] = Je({ sourceX: r, sourceY: a, targetX: s, targetY: c }) : R === "step" ? [t, S, C] = ke({
    sourceX: r,
    sourceY: a,
    sourcePosition: i,
    targetX: s,
    targetY: c,
    targetPosition: l,
    borderRadius: 0,
    offset: E ? 34 : 20
  }) : R === "simplebezier" ? [t, S, C] = Qe({
    sourceX: r,
    sourceY: a,
    sourcePosition: i,
    targetX: s,
    targetY: c,
    targetPosition: l
  }) : R === "smoothstep" || T && E ? [t, S, C] = ke({
    sourceX: r,
    sourceY: a,
    sourcePosition: i,
    targetX: s,
    targetY: c,
    targetPosition: l,
    borderRadius: 16,
    offset: E ? 34 : 20
  }) : [t, S, C] = qe({
    sourceX: r,
    sourceY: a,
    sourcePosition: i,
    targetX: s,
    targetY: c,
    targetPosition: l,
    curvature: 0.35
  });
  const j = Ue[f] ?? Ue.default, D = p ? Math.max(2.2, ((n == null ? void 0 : n.strokeWidth) ?? 1.7) + 0.5) : (n == null ? void 0 : n.strokeWidth) ?? (f === "muted" ? 1.25 : 1.7), B = v ?? (n == null ? void 0 : n.renderActionMenu), u = d ?? (n == null ? void 0 : n.renderToolbar), k = !!(n != null && n.showActionTrigger && (B || n != null && n.onActionClick));
  return /* @__PURE__ */ h(ce, { children: [
    /* @__PURE__ */ e("g", { "data-testid": n == null ? void 0 : n.testId, "data-route-style": R, children: /* @__PURE__ */ e(
      _r,
      {
        id: o,
        path: t,
        markerStart: m,
        markerEnd: x,
        className: n != null && n.animated ? "abc-flow-edge-animated" : void 0,
        style: {
          stroke: p ? g : j.stroke,
          strokeWidth: D,
          strokeDasharray: n != null && n.dashed ? "5 4" : void 0,
          opacity: n != null && n.dimmed ? 0.55 : 0.92,
          transition: "stroke 150ms ease, stroke-width 150ms ease"
        }
      }
    ) }),
    u && /* @__PURE__ */ e(
      Ar,
      {
        edgeId: o,
        x: S,
        y: C - 26,
        isVisible: !!p,
        alignX: "center",
        alignY: "bottom",
        children: /* @__PURE__ */ e(
          "div",
          {
            onClick: (b) => b.stopPropagation(),
            onMouseDown: (b) => b.stopPropagation(),
            className: "nodrag nopan",
            children: u(o)
          }
        )
      }
    ),
    ((n == null ? void 0 : n.label) || k) && /* @__PURE__ */ e(Pr, { children: /* @__PURE__ */ h(
      "div",
      {
        style: {
          position: "absolute",
          transform: `translate(-50%, -50%) translate(${S}px,${C}px)`,
          pointerEvents: "all"
        },
        className: "nodrag nopan z-10 flex items-center gap-1",
        children: [
          (n == null ? void 0 : n.label) && /* @__PURE__ */ e(
            "span",
            {
              className: w(
                "select-none rounded-full border px-2 py-0.5 text-[10px] font-medium leading-tight shadow-2xs",
                j.labelClass
              ),
              children: n.label
            }
          ),
          k && /* @__PURE__ */ h("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              G,
              {
                type: "button",
                variant: "outline",
                size: "icon-sm",
                "aria-label": (n == null ? void 0 : n.actionAriaLabel) ?? "连线操作",
                title: (n == null ? void 0 : n.actionAriaLabel) ?? "连线操作",
                onClick: (b) => {
                  var I;
                  b.stopPropagation(), B ? M((O) => !O) : (I = n == null ? void 0 : n.onActionClick) == null || I.call(n, o);
                },
                className: w(
                  "h-5 w-5 rounded-full border p-0 shadow-xs transition",
                  y ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/95 text-[var(--abc-fg-muted)] hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]"
                ),
                children: /* @__PURE__ */ e(Ne, { size: 11 })
              }
            ),
            y && B && /* @__PURE__ */ e(
              "div",
              {
                onClick: (b) => b.stopPropagation(),
                className: "absolute left-1/2 top-6 z-50 -translate-x-1/2",
                children: B({ close: () => M(!1) })
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}, bt = ({
  fromX: o,
  fromY: r,
  toX: a,
  toY: s,
  fromPosition: c,
  toPosition: i,
  connectionLineType: l = ue.Bezier,
  connectionStatus: n,
  defaultStroke: p = "var(--abc-primary, #4f46e5)",
  validStroke: m = "var(--abc-flow-edge-success-stroke, #22c55e)",
  invalidStroke: x = "var(--abc-flow-edge-danger-stroke, #e11d48)"
}) => {
  const g = {
    sourceX: o,
    sourceY: r,
    sourcePosition: c,
    targetX: a,
    targetY: s,
    targetPosition: i
  };
  let v = "";
  l === ue.Straight ? [v] = Je(g) : l === ue.Step ? [v] = ke({ ...g, borderRadius: 0 }) : l === ue.SmoothStep ? [v] = ke({ ...g, borderRadius: 14 }) : l === ue.SimpleBezier ? [v] = Qe(g) : [v] = qe(g);
  const d = n === "valid" ? m : n === "invalid" ? x : p;
  return /* @__PURE__ */ h("g", { "data-slot": "flow-connection-line", "data-status": n ?? "idle", children: [
    /* @__PURE__ */ e(
      "path",
      {
        fill: "none",
        stroke: d,
        strokeWidth: 2,
        strokeDasharray: "6 4",
        className: "abc-flow-edge-animated",
        d: v
      }
    ),
    /* @__PURE__ */ e(
      "circle",
      {
        cx: a,
        cy: s,
        r: 4.5,
        fill: "var(--abc-bg-surface, #ffffff)",
        stroke: d,
        strokeWidth: 2
      }
    )
  ] });
}, ft = ({
  horizontalLine: o,
  verticalLine: r,
  showOriginBadge: a = !1,
  children: s,
  className: c
}) => /* @__PURE__ */ e(Vr, { children: /* @__PURE__ */ h(
  "div",
  {
    "data-slot": "flow-viewport-overlay",
    className: w("pointer-events-none relative", c),
    children: [
      typeof o == "number" && /* @__PURE__ */ e(
        "div",
        {
          "data-testid": "flow-helper-line-horizontal",
          style: {
            position: "absolute",
            left: -5e3,
            width: 1e4,
            top: o,
            height: 1
          },
          className: "border-t border-dashed border-[var(--abc-primary)]/85"
        }
      ),
      typeof r == "number" && /* @__PURE__ */ e(
        "div",
        {
          "data-testid": "flow-helper-line-vertical",
          style: {
            position: "absolute",
            top: -5e3,
            height: 1e4,
            left: r,
            width: 1
          },
          className: "border-l border-dashed border-[var(--abc-primary)]/85"
        }
      ),
      a && /* @__PURE__ */ e(
        "div",
        {
          style: { position: "absolute", left: 0, top: 0 },
          className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[9px] text-[var(--abc-fg-muted)] shadow-2xs",
          children: "(0, 0)"
        }
      ),
      s
    ]
  }
) }), Ze = {
  blue: "#3b82f6",
  green: "#10b981",
  amber: "#f59e0b",
  rose: "#f43f5e",
  slate: "#64748b"
};
function gt(o, r) {
  const a = o ?? (r ? "dots" : "none");
  return a === "none" ? null : a === "lines" ? Re.Lines : a === "cross" ? Re.Cross : Re.Dots;
}
function Mt({
  withProvider: o = !1,
  containerClassName: r,
  testId: a = "abc-flow-canvas-surface",
  containerRef: s,
  onDragOver: c,
  onDrop: i,
  backgroundVariant: l,
  showDotsBackground: n = !0,
  backgroundGap: p = 18,
  backgroundDotSize: m = 1.25,
  backgroundColor: x = "rgba(148, 163, 184, 0.35)",
  interactionMode: g = "pan",
  interactive: v = !0,
  helperLines: d,
  leftRailSlot: y,
  topCenterSlot: M,
  topRightSlot: f,
  bottomLeftSlot: R,
  bottomRightSlot: T,
  showMiniMap: E = !1,
  miniMapClassName: t,
  miniMapProps: S,
  loading: C = !1,
  loadingText: j = "正在加载画布...",
  children: D,
  overlaySlot: B,
  className: u,
  proOptions: k,
  connectionLineComponent: b,
  nodesDraggable: I,
  nodesConnectable: O,
  elementsSelectable: _,
  panOnDrag: A,
  selectionOnDrag: U,
  selectionMode: te,
  ...ne
}) {
  const ee = gt(l, n), F = g === "select", z = (K) => {
    var ae;
    const X = (ae = K.data) == null ? void 0 : ae.tone;
    return X && X in Ze ? Ze[X] : K.type === "flow-group" ? "rgba(99, 102, 241, 0.22)" : "#94a3b8";
  }, P = /* @__PURE__ */ h(
    "div",
    {
      ref: s,
      "data-testid": a,
      "data-interaction-mode": g,
      "data-interactive": v ? "true" : "false",
      onDragOver: c,
      onDrop: i,
      className: w(
        "relative flex-1 h-full w-full overflow-hidden select-none bg-[var(--abc-bg-canvas)]",
        r
      ),
      children: [
        /* @__PURE__ */ h(
          $r,
          {
            proOptions: { hideAttribution: !0, ...k },
            connectionLineComponent: b ?? bt,
            nodesDraggable: I ?? v,
            nodesConnectable: O ?? v,
            elementsSelectable: _ ?? v,
            panOnDrag: A ?? (F ? [1, 2] : !0),
            selectionOnDrag: U ?? (F && v),
            selectionMode: te ?? Wr.Partial,
            className: w(
              C ? "opacity-20 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300",
              u
            ),
            ...ne,
            children: [
              ee && /* @__PURE__ */ e(
                Kr,
                {
                  variant: ee,
                  gap: p,
                  size: m,
                  color: x
                }
              ),
              ((d == null ? void 0 : d.horizontal) !== void 0 || (d == null ? void 0 : d.vertical) !== void 0) && /* @__PURE__ */ e(
                ft,
                {
                  horizontalLine: d.horizontal,
                  verticalLine: d.vertical
                }
              ),
              y && /* @__PURE__ */ e(be, { position: "top-left", className: "!m-3.5 !z-20", children: y }),
              M && /* @__PURE__ */ e(be, { position: "top-center", className: "!mt-3 !z-20", children: M }),
              f && /* @__PURE__ */ e(be, { position: "top-right", className: "!m-3.5 !z-20", children: f }),
              R && /* @__PURE__ */ e(be, { position: "bottom-left", className: "!m-3.5 !z-20", children: R }),
              T && /* @__PURE__ */ e(be, { position: "bottom-right", className: "!m-3.5 !z-20", children: T }),
              E && /* @__PURE__ */ e(
                Gr,
                {
                  pannable: !0,
                  zoomable: !0,
                  nodeStrokeWidth: 2,
                  nodeColor: (S == null ? void 0 : S.nodeColor) ?? z,
                  className: w(
                    "!rounded-xl !border !border-[var(--abc-border)] !bg-[var(--abc-bg-surface)]/95 !shadow-md",
                    t
                  ),
                  ...S
                }
              ),
              D
            ]
          }
        ),
        B,
        C && /* @__PURE__ */ e(
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
  return o ? /* @__PURE__ */ e(Ur, { children: P }) : P;
}
const pt = {
  sm: "!h-2.5 !w-2.5",
  md: "!h-3 !w-3"
}, nr = ({
  id: o,
  type: r,
  position: a,
  tone: s = "neutral",
  size: c = "sm",
  connectionLimit: i,
  connectionCount: l,
  isConnectable: n = !0,
  title: p,
  className: m,
  style: x,
  ...g
}) => {
  const v = typeof i == "number" && i >= 0 && l >= i, d = n && !v, y = De[s] ?? De.neutral;
  return /* @__PURE__ */ e(
    Xr,
    {
      id: o,
      type: r,
      position: a,
      isConnectable: d,
      "data-slot": "flow-handle",
      "data-tone": s,
      "data-connection-count": l,
      "data-limit-reached": v ? "true" : "false",
      title: p ?? (typeof i == "number" ? `连接数 ${l}/${i}` : void 0),
      style: x,
      className: w(
        "!border-2 !border-[var(--abc-bg-surface)] !shadow-2xs transition-[box-shadow,opacity] duration-150",
        pt[c],
        y.dot,
        d ? "hover:!ring-4 hover:!ring-[var(--abc-ring)]" : "!opacity-45 !cursor-not-allowed",
        m
      ),
      ...g
    }
  );
}, ht = ({
  resolvedNodeId: o,
  id: r,
  type: a,
  ...s
}) => {
  const c = Yr({
    id: o,
    handleType: a,
    handleId: r ?? void 0
  });
  return /* @__PURE__ */ e(
    nr,
    {
      id: r,
      type: a,
      connectionCount: c.length,
      ...s
    }
  );
}, Tt = ({ nodeId: o, ...r }) => {
  const a = Zr(), s = o ?? a;
  return s ? /* @__PURE__ */ e(ht, { resolvedNodeId: s, ...r }) : /* @__PURE__ */ e(nr, { connectionCount: 0, ...r });
}, vt = {
  blue: "var(--abc-flow-blue-ring, #3b82f6)",
  green: "var(--abc-flow-green-ring, #10b981)",
  amber: "var(--abc-flow-amber-ring, #f59e0b)",
  rose: "var(--abc-flow-rose-ring, #f43f5e)",
  slate: "var(--abc-primary, #4f46e5)"
}, mt = ({
  tone: o = "slate",
  color: r,
  minWidth: a = 180,
  minHeight: s = 96,
  isVisible: c = !0,
  handleClassName: i,
  lineClassName: l,
  handleStyle: n,
  lineStyle: p,
  ...m
}) => {
  const x = r ?? vt[o];
  return /* @__PURE__ */ e(
    Jr,
    {
      isVisible: c,
      minWidth: a,
      minHeight: s,
      color: x,
      lineClassName: w("!border-[1.5px]", l),
      handleClassName: w(
        "!h-2.5 !w-2.5 !rounded-sm !border-2 !border-[var(--abc-bg-surface)] !shadow-xs",
        i
      ),
      lineStyle: {
        borderColor: x,
        ...p
      },
      handleStyle: {
        backgroundColor: x,
        ...n
      },
      ...m
    }
  );
}, Ie = ["blue", "green", "amber", "rose", "slate"], Rt = ({
  id: o,
  data: r,
  selected: a = !1
}) => {
  const s = (r == null ? void 0 : r.tone) ?? "blue", c = (r == null ? void 0 : r.dashed) ?? !0, i = (r == null ? void 0 : r.resizable) ?? !0, l = (r == null ? void 0 : r.minWidth) ?? 260, n = (r == null ? void 0 : r.minHeight) ?? 180, p = [];
  return r != null && r.onAddChild && p.push({
    key: "add-child",
    icon: /* @__PURE__ */ e(Ne, { size: 13 }),
    label: "在分组内新增子节点",
    onClick: () => {
      var m;
      return (m = r.onAddChild) == null ? void 0 : m.call(r, o);
    }
  }), r != null && r.onCycleTone && p.push({
    key: "cycle-tone",
    icon: /* @__PURE__ */ e(Ir, { size: 13 }),
    label: "切换分组语义色调",
    onClick: () => {
      var g;
      const m = Ie.indexOf(s), x = Ie[(m + 1) % Ie.length];
      (g = r.onCycleTone) == null || g.call(r, o, x);
    }
  }), r != null && r.onDelete && p.push({
    key: "delete-group",
    icon: /* @__PURE__ */ e(Fr, { size: 13 }),
    label: "移除分组",
    danger: !0,
    dividerBefore: p.length > 0,
    onClick: () => {
      var m;
      return (m = r.onDelete) == null ? void 0 : m.call(r, o);
    }
  }), /* @__PURE__ */ h("div", { "data-slot": "flow-group-node", className: "relative h-full w-full", children: [
    i && /* @__PURE__ */ e(
      mt,
      {
        tone: s,
        isVisible: a,
        minWidth: l,
        minHeight: n
      }
    ),
    p.length > 0 && /* @__PURE__ */ e(Qr, { isVisible: a, position: qr.Top, offset: 10, children: /* @__PURE__ */ e(rr, { items: p, size: "xs", "aria-label": "分组容器快捷操作" }) }),
    /* @__PURE__ */ e(
      tr,
      {
        title: (r == null ? void 0 : r.title) ?? "子流程分组",
        description: r == null ? void 0 : r.description,
        icon: /* @__PURE__ */ e(Er, { size: 13 }),
        badge: r != null && r.badge ? /* @__PURE__ */ e("span", { className: "rounded-full border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/85 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[var(--abc-fg-secondary)]", children: r.badge }) : void 0,
        tone: s,
        align: "top-left",
        dashed: c,
        selected: a,
        width: "100%",
        height: "100%",
        minWidth: l,
        minHeight: n
      }
    )
  ] });
}, Et = ({
  open: o,
  x: r,
  y: a,
  title: s,
  items: c,
  onClose: i,
  containerBounds: l,
  className: n
}) => {
  const p = re(null);
  if (pe(() => {
    if (!o) return;
    const d = (M) => {
      var f;
      (f = p.current) != null && f.contains(M.target) || i();
    }, y = (M) => {
      M.key === "Escape" && (M.preventDefault(), i());
    };
    return document.addEventListener("mousedown", d), document.addEventListener("keydown", y), () => {
      document.removeEventListener("mousedown", d), document.removeEventListener("keydown", y);
    };
  }, [o, i]), !o || c.length === 0) return null;
  const m = 196, x = c.length * 32 + (s ? 32 : 12), g = l ? Math.max(8, Math.min(r, Math.max(8, l.width - m - 8))) : r, v = l ? Math.max(8, Math.min(a, Math.max(8, l.height - x - 8))) : a;
  return /* @__PURE__ */ h(
    "div",
    {
      ref: p,
      role: "menu",
      "aria-label": s ?? "画布上下文菜单",
      "data-slot": "flow-context-menu",
      style: { left: g, top: v },
      onContextMenu: (d) => d.preventDefault(),
      onMouseDown: (d) => d.stopPropagation(),
      className: w(
        "nodrag nopan absolute z-50 min-w-[184px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)] select-none abc-animate-popover-in",
        n
      ),
      children: [
        s && /* @__PURE__ */ e("div", { className: "mb-1 border-b border-[var(--abc-border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--abc-fg-muted)]", children: s }),
        c.map((d) => /* @__PURE__ */ h(Q.Fragment, { children: [
          d.dividerBefore && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
          /* @__PURE__ */ h(
            "button",
            {
              type: "button",
              role: "menuitem",
              disabled: d.disabled,
              onClick: (y) => {
                y.stopPropagation(), !d.disabled && (d.onClick(), i());
              },
              className: w(
                "flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-45",
                d.danger ? "text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]"
              ),
              children: [
                /* @__PURE__ */ h("span", { className: "flex min-w-0 items-center gap-2", children: [
                  d.icon && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: d.icon }),
                  /* @__PURE__ */ e("span", { className: "truncate", children: d.label })
                ] }),
                d.shortcut && /* @__PURE__ */ e("kbd", { className: "shrink-0 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: d.shortcut })
              ]
            }
          )
        ] }, d.key))
      ]
    }
  );
};
function Le(o, r, a) {
  var i, l, n, p;
  const s = ((i = o.measured) == null ? void 0 : i.width) ?? (typeof o.width == "number" ? o.width : void 0) ?? (typeof ((l = o.style) == null ? void 0 : l.width) == "number" ? o.style.width : void 0) ?? r, c = ((n = o.measured) == null ? void 0 : n.height) ?? (typeof o.height == "number" ? o.height : void 0) ?? (typeof ((p = o.style) == null ? void 0 : p.height) == "number" ? o.style.height : void 0) ?? a;
  return { width: s, height: c };
}
function It(o, r, a = {}) {
  const {
    direction: s = "LR",
    rankSep: c = 96,
    nodeSep: i = 48,
    defaultNodeWidth: l = 230,
    defaultNodeHeight: n = 116,
    originX: p = 32,
    originY: m = 32
  } = a;
  if (o.length === 0) return [];
  const x = o.filter((u) => !u.parentId), g = new Set(x.map((u) => u.id)), v = /* @__PURE__ */ new Map();
  for (const u of o)
    u.parentId && v.set(u.id, u.parentId);
  const d = (u) => {
    let k = u;
    const b = /* @__PURE__ */ new Set();
    for (; v.has(k) && !b.has(k); )
      b.add(k), k = v.get(k);
    return k;
  }, y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (const u of x)
    y.set(u.id, /* @__PURE__ */ new Set()), M.set(u.id, 0);
  for (const u of r) {
    const k = d(u.source), b = d(u.target);
    if (k === b || !g.has(k) || !g.has(b)) continue;
    const I = y.get(k);
    I.has(b) || (I.add(b), M.set(b, (M.get(b) ?? 0) + 1));
  }
  const f = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set(), T = [];
  for (const u of x)
    (M.get(u.id) ?? 0) === 0 && (T.push(u.id), f.set(u.id, 0));
  for (; R.size < x.length; ) {
    if (T.length === 0) {
      let b = "", I = Number.POSITIVE_INFINITY;
      for (const O of x) {
        if (R.has(O.id)) continue;
        const _ = M.get(O.id) ?? 0;
        _ < I && (I = _, b = O.id);
      }
      if (!b) break;
      T.push(b), f.has(b) || f.set(b, 0);
    }
    const u = T.shift();
    if (R.has(u)) continue;
    R.add(u);
    const k = f.get(u) ?? 0;
    for (const b of y.get(u) ?? []) {
      if (R.has(b)) continue;
      f.set(b, Math.max(f.get(b) ?? 0, k + 1));
      const I = (M.get(b) ?? 1) - 1;
      M.set(b, I), I <= 0 && T.push(b);
    }
  }
  const E = /* @__PURE__ */ new Map();
  for (const u of x) {
    const k = f.get(u.id) ?? 0, b = E.get(k) ?? [];
    b.push(u), E.set(k, b);
  }
  const t = Array.from(E.keys()).sort((u, k) => u - k), S = s === "LR" || s === "RL", j = s === "RL" || s === "BT" ? [...t].reverse() : t, D = /* @__PURE__ */ new Map();
  let B = S ? p : m;
  for (const u of j) {
    const k = E.get(u) ?? [];
    let b = 0, I = S ? m : p;
    for (const O of k) {
      const { width: _, height: A } = Le(O, l, n);
      S ? (D.set(O.id, { x: Math.round(B), y: Math.round(I) }), I += A + i, b = Math.max(b, _)) : (D.set(O.id, { x: Math.round(I), y: Math.round(B) }), I += _ + i, b = Math.max(b, A));
    }
    B += b + c;
  }
  return o.map((u) => {
    const k = D.get(u.id);
    return k ? {
      ...u,
      position: k
    } : u;
  });
}
function Ft(o, r, a) {
  const s = /* @__PURE__ */ new Set([o]), c = /* @__PURE__ */ new Set(), i = new Map(r.map((n) => [n.id, n])), l = [o];
  for (; l.length > 0; ) {
    const n = l.pop(), p = i.get(n);
    if (!p) continue;
    const m = et(p, r, a), x = He([p], a);
    for (const g of x)
      g.target === n && c.add(g.id);
    for (const g of m)
      s.has(g.id) || (s.add(g.id), l.push(g.id));
  }
  return { nodeIds: s, edgeIds: c };
}
function Bt(o, r, a) {
  const s = /* @__PURE__ */ new Set([o]), c = /* @__PURE__ */ new Set(), i = new Map(r.map((n) => [n.id, n])), l = [o];
  for (; l.length > 0; ) {
    const n = l.pop(), p = i.get(n);
    if (!p) continue;
    const m = Hr(p, r, a), x = He([p], a);
    for (const g of x)
      g.source === n && c.add(g.id);
    for (const g of m)
      s.has(g.id) || (s.add(g.id), l.push(g.id));
  }
  return { nodeIds: s, edgeIds: c };
}
function Dt(o, r) {
  if (!r.source || !r.target) return !1;
  if (r.source === r.target) return !0;
  const a = /* @__PURE__ */ new Map();
  for (const i of o) {
    const l = a.get(i.source) ?? [];
    l.push(i.target), a.set(i.source, l);
  }
  const s = /* @__PURE__ */ new Set(), c = [r.target];
  for (; c.length > 0; ) {
    const i = c.pop();
    if (i === r.source) return !0;
    if (!s.has(i)) {
      s.add(i);
      for (const l of a.get(i) ?? [])
        c.push(l);
    }
  }
  return !1;
}
function Lt(o, r, a = 6) {
  const s = Le(o, 220, 110), c = o.position.x, i = c + s.width, l = c + s.width / 2, n = o.position.y, p = n + s.height, m = n + s.height / 2;
  let x = a + 1, g = a + 1, v, d, y = c, M = n;
  for (const f of r) {
    if (f.id === o.id || f.parentId !== o.parentId) continue;
    const R = Le(f, 220, 110), T = f.position.x, E = T + R.width, t = T + R.width / 2, S = f.position.y, C = S + R.height, j = S + R.height / 2, D = [
      [Math.abs(c - T), T, T],
      [Math.abs(i - E), E, E - s.width],
      [Math.abs(l - t), t, t - s.width / 2]
    ];
    for (const [u, k, b] of D)
      u < x && (x = u, v = k, y = b);
    const B = [
      [Math.abs(n - S), S, S],
      [Math.abs(p - C), C, C - s.height],
      [Math.abs(m - j), j, j - s.height / 2]
    ];
    for (const [u, k, b] of B)
      u < g && (g = u, d = k, M = b);
  }
  return {
    horizontal: d,
    vertical: v,
    snapPosition: d !== void 0 || v !== void 0 ? { x: y, y: M } : void 0
  };
}
function jt(o, r, a) {
  const s = {
    version: 1,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    nodes: o,
    edges: r,
    viewport: a
  };
  return JSON.stringify(s, null, 2);
}
function Ot(o) {
  const r = JSON.parse(o);
  if (!r || !Array.isArray(r.nodes) || !Array.isArray(r.edges))
    throw new Error("无效的流程图快照格式：缺少 nodes 或 edges 数组");
  return {
    version: 1,
    exportedAt: typeof r.exportedAt == "string" ? r.exportedAt : (/* @__PURE__ */ new Date()).toISOString(),
    nodes: r.nodes,
    edges: r.edges,
    viewport: r.viewport
  };
}
function fe(o, r) {
  return {
    nodes: o.map((a) => ({
      ...a,
      position: { ...a.position },
      data: a.data ? { ...a.data } : a.data
    })),
    edges: r.map((a) => ({
      ...a,
      data: a.data ? { ...a.data } : a.data
    }))
  };
}
function _t(o = {}, r) {
  const { maxSteps: a = 40, enableKeyboardShortcuts: s = !1 } = o, c = re([]), i = re([]), [, l] = je(0), n = Z(() => l((v) => v + 1), []), p = Z(
    (v, d) => {
      c.current = [...c.current.slice(-(a - 1)), fe(v, d)], i.current = [], n();
    },
    [a, n]
  ), m = Z(
    (v, d) => {
      if (c.current.length === 0) return null;
      const y = c.current[c.current.length - 1];
      return c.current = c.current.slice(0, -1), i.current = [
        ...i.current.slice(-(a - 1)),
        fe(v, d)
      ], n(), fe(y.nodes, y.edges);
    },
    [a, n]
  ), x = Z(
    (v, d) => {
      if (i.current.length === 0) return null;
      const y = i.current[i.current.length - 1];
      return i.current = i.current.slice(0, -1), c.current = [
        ...c.current.slice(-(a - 1)),
        fe(v, d)
      ], n(), fe(y.nodes, y.edges);
    },
    [a, n]
  ), g = Z(() => {
    c.current = [], i.current = [], n();
  }, [n]);
  return pe(() => {
    if (!s || typeof window > "u") return;
    const v = (d) => {
      var R, T;
      const y = d.target;
      if (y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA" || y.isContentEditable) || !(d.metaKey || d.ctrlKey)) return;
      const f = d.key.toLowerCase();
      f === "z" && !d.shiftKey ? (d.preventDefault(), (R = r == null ? void 0 : r.onUndo) == null || R.call(r)) : (f === "z" && d.shiftKey || f === "y") && (d.preventDefault(), (T = r == null ? void 0 : r.onRedo) == null || T.call(r));
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [s, r]), {
    takeSnapshot: p,
    undo: m,
    redo: x,
    clear: g,
    canUndo: c.current.length > 0,
    canRedo: i.current.length > 0,
    pastCount: c.current.length,
    futureCount: i.current.length
  };
}
export {
  De as FLOW_PORT_TONE_STYLES,
  er as FLOW_TONE_STYLES,
  ot as FloatingIconRail,
  Mt as FlowCanvasSurface,
  bt as FlowConnectionLine,
  Et as FlowContextMenu,
  Rt as FlowGroupNode,
  Tt as FlowHandle,
  St as FlowLabeledEdge,
  st as FlowNodeCard,
  mt as FlowNodeResizer,
  rr as FlowNodeToolbar,
  tr as FlowSectionFrame,
  zt as FlowViewportControls,
  ft as FlowViewportOverlay,
  ut as TemplateVariableInput,
  Lt as computeFlowHelperLines,
  rt as extractTemplateVariables,
  Bt as getFlowDownstream,
  Ft as getFlowUpstream,
  Dt as hasFlowCycle,
  nt as insertTemplateVariableAt,
  It as layoutFlowGraph,
  Ot as parseFlowSnapshot,
  tt as removeTemplateVariableToken,
  jt as serializeFlowSnapshot,
  _t as useFlowHistory
};
//# sourceMappingURL=index.js.map
