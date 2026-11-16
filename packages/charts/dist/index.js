import { BarChart as $, LineChart as k, PieChart as A, GaugeChart as G, RadarChart as W, ScatterChart as _ } from "echarts/charts";
import { TitleComponent as H, DatasetComponent as I, DataZoomComponent as Y, GridComponent as Z, LegendComponent as q, TooltipComponent as J, MarkLineComponent as K, MarkPointComponent as Q } from "echarts/components";
import { use as V, graphic as X, init as U } from "echarts/core";
import { graphic as ge } from "echarts/core";
import { CanvasRenderer as w } from "echarts/renderers";
import { jsx as s, jsxs as b } from "react/jsx-runtime";
import { useRef as B, useMemo as D, useEffect as R } from "react";
import { ABC_BRAND_PRESETS as F } from "@abc-design/tokens";
import { useAbcConfig as ee, Skeleton as T, EmptyState as te, Card as P, StatusTag as re } from "@abc-design/react";
V([
  $,
  k,
  A,
  G,
  W,
  _,
  H,
  I,
  Y,
  Z,
  q,
  J,
  K,
  Q,
  w
]);
const ne = {
  init: U,
  graphic: X
};
function E(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var c = e.length;
    for (n = 0; n < c; n++) e[n] && (t = E(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function y() {
  for (var e, n, t = 0, r = "", c = arguments.length; t < c; t++) (e = arguments[t]) && (n = E(e)) && (r && (r += " "), r += n);
  return r;
}
function se(e = "blue", n = !1) {
  var c, i;
  const t = ((c = F[e]) == null ? void 0 : c.scale[n ? 400 : 600]) ?? "#2563eb", r = ((i = F[e]) == null ? void 0 : i.scale[n ? 300 : 400]) ?? "#60a5fa";
  return [
    t,
    "#10b981",
    "#f59e0b",
    "#8b5cf6",
    "#06b6d4",
    "#f43f5e",
    r
  ];
}
function ae(e, n, t) {
  const r = t ? "#334155" : "#e2e8f0", c = t ? "#94a3b8" : "#64748b", l = {
    axisLine: { lineStyle: { color: r } },
    axisLabel: { color: c, fontSize: 11 },
    splitLine: { lineStyle: { color: t ? "rgba(51, 65, 85, 0.55)" : "rgba(226, 232, 240, 0.75)", type: "dashed" } },
    nameTextStyle: { color: c }
  }, u = (a) => {
    if (a)
      return Array.isArray(a) ? a.map((o) => ({
        ...l,
        ...o,
        axisLine: { ...l.axisLine, ...o == null ? void 0 : o.axisLine },
        axisLabel: { ...l.axisLabel, ...o == null ? void 0 : o.axisLabel },
        splitLine: { ...l.splitLine, ...o == null ? void 0 : o.splitLine }
      })) : {
        ...l,
        ...a,
        axisLine: { ...l.axisLine, ...a == null ? void 0 : a.axisLine },
        axisLabel: { ...l.axisLabel, ...a == null ? void 0 : a.axisLabel },
        splitLine: { ...l.splitLine, ...a == null ? void 0 : a.splitLine }
      };
  };
  return {
    color: e.color ?? se(n, t),
    backgroundColor: "transparent",
    textStyle: {
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif",
      color: t ? "#e2e8f0" : "#0f172a",
      ...e.textStyle
    },
    tooltip: {
      backgroundColor: t ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.97)",
      borderColor: t ? "#334155" : "#e2e8f0",
      borderWidth: 1,
      textStyle: {
        color: t ? "#f8fafc" : "#0f172a",
        fontSize: 12
      },
      ...Array.isArray(e.tooltip) ? e.tooltip[0] : e.tooltip
    },
    legend: e.legend ? {
      textStyle: { color: t ? "#cbd5e1" : "#475569", fontSize: 12 },
      ...Array.isArray(e.legend) ? e.legend[0] : e.legend
    } : void 0,
    ...e,
    xAxis: u(e.xAxis),
    yAxis: u(e.yAxis)
  };
}
const le = ({
  option: e,
  height: n = 300,
  style: t,
  className: r,
  notMerge: c = !1,
  lazyUpdate: i = !1,
  loading: l = !1,
  empty: u = !1,
  emptyDescription: a = "暂无图表统计数据",
  onEvents: o,
  onChartReady: g
}) => {
  const { resolvedTheme: j, theme: C } = ee(), L = j === "dark", N = B(null), p = B(null), S = D(
    () => ae(e, C.brand, L),
    [e, C.brand, L]
  );
  R(() => {
    const f = N.current;
    if (!f || l || u) return;
    const m = ne.init(f);
    p.current = m, g == null || g(m);
    let d = null;
    if (typeof ResizeObserver < "u")
      d = new ResizeObserver(() => {
        m.resize();
      }), d.observe(f);
    else {
      const v = () => m.resize();
      return window.addEventListener("resize", v), () => {
        window.removeEventListener("resize", v), m.dispose(), p.current = null;
      };
    }
    return () => {
      d == null || d.disconnect(), m.dispose(), p.current = null;
    };
  }, [l, u]), R(() => {
    const f = p.current;
    !f || l || u || f.setOption(S, { notMerge: c, lazyUpdate: i });
  }, [S, c, i, l, u]), R(() => {
    const f = p.current;
    if (!f || !o) return;
    const m = Object.entries(o);
    for (const [d, v] of m)
      f.on(d, (z) => v(z, f));
    return () => {
      for (const [d] of m)
        f.off(d);
    };
  }, [o]);
  const h = {
    width: "100%",
    height: (t == null ? void 0 : t.height) ?? (typeof n == "number" ? `${n}px` : n),
    ...t
  };
  return l ? /* @__PURE__ */ s("div", { className: y("flex items-center justify-center p-4", r), style: h, children: /* @__PURE__ */ s(T, { className: "h-full w-full rounded-[var(--abc-radius-md)]" }) }) : u ? /* @__PURE__ */ s("div", { className: y("flex items-center justify-center", r), style: h, children: /* @__PURE__ */ s(te, { title: "暂无图表数据", description: a }) }) : /* @__PURE__ */ s("div", { ref: N, className: y("min-w-0", r), style: h });
}, pe = le, ve = ({
  title: e,
  label: n,
  value: t,
  prefix: r,
  suffix: c,
  trend: i,
  trendLabel: l = "较上周期",
  icon: u,
  badge: a,
  footer: o,
  hint: g,
  tone: j,
  size: C,
  mono: L = !0,
  valueClassName: N,
  loading: p = !1,
  children: S,
  className: h,
  ...f
}) => {
  const m = e ?? n, d = o ?? g, v = C === "lg", z = j === "surface";
  if (p)
    return /* @__PURE__ */ s(P, { className: h, children: /* @__PURE__ */ b("div", { className: "space-y-3", children: [
      /* @__PURE__ */ s(T, { className: "h-4 w-24" }),
      /* @__PURE__ */ s(T, { className: "h-8 w-36" }),
      /* @__PURE__ */ s(T, { className: "h-3.5 w-28" })
    ] }) });
  const x = typeof i == "number" ? i : void 0, M = x === void 0 ? "neutral" : x > 0 ? "success" : x < 0 ? "danger" : "neutral", O = x === void 0 ? null : `${x > 0 ? "+" : ""}${x.toFixed(1)}%`;
  return /* @__PURE__ */ b(
    P,
    {
      hoverable: !0,
      "data-slot": "stat-card",
      className: y(
        "relative overflow-hidden transition-all",
        z && "bg-[var(--abc-bg-surface)] border-[var(--abc-border)]",
        v ? "p-5" : "p-4",
        h
      ),
      ...f,
      children: [
        /* @__PURE__ */ b("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ b("div", { className: "min-w-0 space-y-1.5", children: [
            /* @__PURE__ */ s("div", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: m }),
            /* @__PURE__ */ b(
              "div",
              {
                className: y(
                  "flex items-baseline gap-1 font-bold tracking-tight text-[var(--abc-fg)] tabular-nums",
                  L && "font-mono",
                  v ? "text-3xl" : "text-2xl",
                  N
                ),
                children: [
                  r && /* @__PURE__ */ s("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: r }),
                  /* @__PURE__ */ s("span", { children: t }),
                  c && /* @__PURE__ */ s("span", { className: "text-xs font-normal text-[var(--abc-fg-muted)]", children: c })
                ]
              }
            )
          ] }),
          a || u ? /* @__PURE__ */ b("div", { className: "flex shrink-0 items-center gap-2", children: [
            a,
            u && /* @__PURE__ */ s("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: u })
          ] }) : null
        ] }),
        (O || i !== void 0 && typeof i != "number" || d) && /* @__PURE__ */ b("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs", children: [
          O ? /* @__PURE__ */ b("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ s(re, { tone: M, children: O }),
            /* @__PURE__ */ s("span", { className: "text-[var(--abc-fg-muted)]", children: l })
          ] }) : i !== void 0 && typeof i != "number" ? /* @__PURE__ */ s("div", { className: "flex items-center gap-1.5 text-[var(--abc-fg-muted)]", children: i }) : /* @__PURE__ */ s("span", {}),
          d && /* @__PURE__ */ s("div", { className: "text-[var(--abc-fg-muted)] truncate", children: d })
        ] }),
        S
      ]
    }
  );
};
export {
  le as AbcChart,
  pe as Chart,
  ve as StatCard,
  ae as buildAbcBaseChartOption,
  le as default,
  ne as echarts,
  se as getAbcChartPalette,
  ge as graphic
};
//# sourceMappingURL=index.js.map
