import { BarChart as E, LineChart as F, PieChart as M, GaugeChart as $, RadarChart as A, ScatterChart as G } from "echarts/charts";
import { TitleComponent as W, DatasetComponent as _, DataZoomComponent as k, GridComponent as H, LegendComponent as I, TooltipComponent as Y, MarkLineComponent as Z, MarkPointComponent as q } from "echarts/components";
import { use as J, graphic as K, init as Q } from "echarts/core";
import { graphic as he } from "echarts/core";
import { CanvasRenderer as V } from "echarts/renderers";
import { jsx as a, jsxs as b } from "react/jsx-runtime";
import { useRef as T, useMemo as X, useEffect as L } from "react";
import { ABC_BRAND_PRESETS as O } from "@abc-design/tokens";
import { useAbcConfig as U, Skeleton as g, EmptyState as w, Card as R, StatusTag as D } from "@abc-design/react";
J([
  E,
  F,
  M,
  $,
  A,
  G,
  W,
  _,
  k,
  H,
  I,
  Y,
  Z,
  q,
  V
]);
const ee = {
  init: Q,
  graphic: K
};
function B(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (n = 0; n < s; n++) e[n] && (t = B(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function y() {
  for (var e, n, t = 0, r = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (n = B(e)) && (r && (r += " "), r += n);
  return r;
}
function te(e = "blue", n = !1) {
  var s, m;
  const t = ((s = O[e]) == null ? void 0 : s.scale[n ? 400 : 600]) ?? "#2563eb", r = ((m = O[e]) == null ? void 0 : m.scale[n ? 300 : 400]) ?? "#60a5fa";
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
function re(e, n, t) {
  const r = t ? "#334155" : "#e2e8f0", s = t ? "#94a3b8" : "#64748b", l = {
    axisLine: { lineStyle: { color: r } },
    axisLabel: { color: s, fontSize: 11 },
    splitLine: { lineStyle: { color: t ? "rgba(51, 65, 85, 0.55)" : "rgba(226, 232, 240, 0.75)", type: "dashed" } },
    nameTextStyle: { color: s }
  }, c = (o) => {
    if (o)
      return Array.isArray(o) ? o.map((i) => ({
        ...l,
        ...i,
        axisLine: { ...l.axisLine, ...i == null ? void 0 : i.axisLine },
        axisLabel: { ...l.axisLabel, ...i == null ? void 0 : i.axisLabel },
        splitLine: { ...l.splitLine, ...i == null ? void 0 : i.splitLine }
      })) : {
        ...l,
        ...o,
        axisLine: { ...l.axisLine, ...o == null ? void 0 : o.axisLine },
        axisLabel: { ...l.axisLabel, ...o == null ? void 0 : o.axisLabel },
        splitLine: { ...l.splitLine, ...o == null ? void 0 : o.splitLine }
      };
  };
  return {
    color: e.color ?? te(n, t),
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
    xAxis: c(e.xAxis),
    yAxis: c(e.yAxis)
  };
}
const ne = ({
  option: e,
  height: n = 300,
  style: t,
  className: r,
  notMerge: s = !1,
  lazyUpdate: m = !1,
  loading: l = !1,
  empty: c = !1,
  emptyDescription: o = "暂无图表统计数据",
  onEvents: i,
  onChartReady: p
}) => {
  const { resolvedTheme: h, theme: N } = U(), S = h === "dark", j = T(null), v = T(null), z = X(
    () => re(e, N.brand, S),
    [e, N.brand, S]
  );
  L(() => {
    const f = j.current;
    if (!f || l || c) return;
    const d = ee.init(f);
    v.current = d, p == null || p(d);
    let u = null;
    if (typeof ResizeObserver < "u")
      u = new ResizeObserver(() => {
        d.resize();
      }), u.observe(f);
    else {
      const x = () => d.resize();
      return window.addEventListener("resize", x), () => {
        window.removeEventListener("resize", x), d.dispose(), v.current = null;
      };
    }
    return () => {
      u == null || u.disconnect(), d.dispose(), v.current = null;
    };
  }, [l, c]), L(() => {
    const f = v.current;
    !f || l || c || f.setOption(z, { notMerge: s, lazyUpdate: m });
  }, [z, s, m, l, c]), L(() => {
    const f = v.current;
    if (!f || !i) return;
    const d = Object.entries(i);
    for (const [u, x] of d)
      f.on(u, (P) => x(P, f));
    return () => {
      for (const [u] of d)
        f.off(u);
    };
  }, [i]);
  const C = {
    width: "100%",
    height: (t == null ? void 0 : t.height) ?? (typeof n == "number" ? `${n}px` : n),
    ...t
  };
  return l ? /* @__PURE__ */ a("div", { className: y("flex items-center justify-center p-4", r), style: C, children: /* @__PURE__ */ a(g, { className: "h-full w-full rounded-[var(--abc-radius-md)]" }) }) : c ? /* @__PURE__ */ a("div", { className: y("flex items-center justify-center", r), style: C, children: /* @__PURE__ */ a(w, { title: "暂无图表数据", description: o }) }) : /* @__PURE__ */ a("div", { ref: j, className: y("min-w-0", r), style: C });
}, ue = ne, me = ({
  title: e,
  value: n,
  prefix: t,
  suffix: r,
  trend: s,
  trendLabel: m = "较上周期",
  icon: l,
  footer: c,
  loading: o = !1,
  className: i
}) => {
  if (o)
    return /* @__PURE__ */ a(R, { className: i, children: /* @__PURE__ */ b("div", { className: "space-y-3", children: [
      /* @__PURE__ */ a(g, { className: "h-4 w-24" }),
      /* @__PURE__ */ a(g, { className: "h-8 w-36" }),
      /* @__PURE__ */ a(g, { className: "h-3.5 w-28" })
    ] }) });
  const p = s === void 0 ? "neutral" : s > 0 ? "success" : s < 0 ? "danger" : "neutral", h = s === void 0 ? null : `${s > 0 ? "+" : ""}${s.toFixed(1)}%`;
  return /* @__PURE__ */ b(
    R,
    {
      hoverable: !0,
      className: y("relative overflow-hidden transition-all", i),
      children: [
        /* @__PURE__ */ b("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ b("div", { className: "min-w-0 space-y-1.5", children: [
            /* @__PURE__ */ a("div", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: e }),
            /* @__PURE__ */ b("div", { className: "flex items-baseline gap-1 font-mono text-2xl font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
              t && /* @__PURE__ */ a("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: t }),
              /* @__PURE__ */ a("span", { children: n }),
              r && /* @__PURE__ */ a("span", { className: "text-xs font-normal text-[var(--abc-fg-muted)]", children: r })
            ] })
          ] }),
          l && /* @__PURE__ */ a("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: l })
        ] }),
        (h || c) && /* @__PURE__ */ b("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs", children: [
          h ? /* @__PURE__ */ b("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ a(D, { tone: p, children: h }),
            /* @__PURE__ */ a("span", { className: "text-[var(--abc-fg-muted)]", children: m })
          ] }) : /* @__PURE__ */ a("span", {}),
          c && /* @__PURE__ */ a("div", { className: "text-[var(--abc-fg-muted)] truncate", children: c })
        ] })
      ]
    }
  );
};
export {
  ne as AbcChart,
  ue as Chart,
  me as StatCard,
  re as buildAbcBaseChartOption,
  ne as default,
  ee as echarts,
  te as getAbcChartPalette,
  he as graphic
};
//# sourceMappingURL=index.js.map
