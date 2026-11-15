import { BarChart as P, LineChart as E, PieChart as M, GaugeChart as $, RadarChart as A, ScatterChart as G } from "echarts/charts";
import { TitleComponent as W, DatasetComponent as _, DataZoomComponent as k, GridComponent as H, LegendComponent as I, TooltipComponent as Y, MarkLineComponent as Z, MarkPointComponent as q } from "echarts/components";
import { use as J, graphic as K, init as Q } from "echarts/core";
import { graphic as he } from "echarts/core";
import { CanvasRenderer as V } from "echarts/renderers";
import { jsx as s, jsxs as p } from "react/jsx-runtime";
import { useRef as T, useMemo as X, useEffect as z } from "react";
import { ABC_BRAND_PRESETS as O } from "@abc-design/tokens";
import { useAbcConfig as U, Skeleton as N, EmptyState as w, Card as R, StatusTag as D } from "@abc-design/react";
J([
  P,
  E,
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
    var c = e.length;
    for (n = 0; n < c; n++) e[n] && (t = B(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function y() {
  for (var e, n, t = 0, r = "", c = arguments.length; t < c; t++) (e = arguments[t]) && (n = B(e)) && (r && (r += " "), r += n);
  return r;
}
function te(e = "blue", n = !1) {
  var c, i;
  const t = ((c = O[e]) == null ? void 0 : c.scale[n ? 400 : 600]) ?? "#2563eb", r = ((i = O[e]) == null ? void 0 : i.scale[n ? 300 : 400]) ?? "#60a5fa";
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
    xAxis: u(e.xAxis),
    yAxis: u(e.yAxis)
  };
}
const ne = ({
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
  onChartReady: h
}) => {
  const { resolvedTheme: j, theme: C } = U(), v = j === "dark", L = T(null), m = T(null), x = X(
    () => re(e, C.brand, v),
    [e, C.brand, v]
  );
  z(() => {
    const f = L.current;
    if (!f || l || u) return;
    const d = ee.init(f);
    m.current = d, h == null || h(d);
    let b = null;
    if (typeof ResizeObserver < "u")
      b = new ResizeObserver(() => {
        d.resize();
      }), b.observe(f);
    else {
      const S = () => d.resize();
      return window.addEventListener("resize", S), () => {
        window.removeEventListener("resize", S), d.dispose(), m.current = null;
      };
    }
    return () => {
      b == null || b.disconnect(), d.dispose(), m.current = null;
    };
  }, [l, u]), z(() => {
    const f = m.current;
    !f || l || u || f.setOption(x, { notMerge: c, lazyUpdate: i });
  }, [x, c, i, l, u]), z(() => {
    const f = m.current;
    if (!f || !o) return;
    const d = Object.entries(o);
    for (const [b, S] of d)
      f.on(b, (F) => S(F, f));
    return () => {
      for (const [b] of d)
        f.off(b);
    };
  }, [o]);
  const g = {
    width: "100%",
    height: (t == null ? void 0 : t.height) ?? (typeof n == "number" ? `${n}px` : n),
    ...t
  };
  return l ? /* @__PURE__ */ s("div", { className: y("flex items-center justify-center p-4", r), style: g, children: /* @__PURE__ */ s(N, { className: "h-full w-full rounded-[var(--abc-radius-md)]" }) }) : u ? /* @__PURE__ */ s("div", { className: y("flex items-center justify-center", r), style: g, children: /* @__PURE__ */ s(w, { title: "暂无图表数据", description: a }) }) : /* @__PURE__ */ s("div", { ref: L, className: y("min-w-0", r), style: g });
}, ue = ne, me = ({
  title: e,
  label: n,
  value: t,
  prefix: r,
  suffix: c,
  trend: i,
  trendLabel: l = "较上周期",
  icon: u,
  footer: a,
  hint: o,
  tone: h,
  size: j,
  loading: C = !1,
  className: v
}) => {
  const L = e ?? n, m = a ?? o, x = j === "lg", g = h === "surface";
  if (C)
    return /* @__PURE__ */ s(R, { className: v, children: /* @__PURE__ */ p("div", { className: "space-y-3", children: [
      /* @__PURE__ */ s(N, { className: "h-4 w-24" }),
      /* @__PURE__ */ s(N, { className: "h-8 w-36" }),
      /* @__PURE__ */ s(N, { className: "h-3.5 w-28" })
    ] }) });
  const f = i === void 0 ? "neutral" : i > 0 ? "success" : i < 0 ? "danger" : "neutral", d = i === void 0 ? null : `${i > 0 ? "+" : ""}${i.toFixed(1)}%`;
  return /* @__PURE__ */ p(
    R,
    {
      hoverable: !0,
      className: y(
        "relative overflow-hidden transition-all",
        g && "bg-[var(--abc-bg-surface)] border-[var(--abc-border)]",
        x ? "p-5" : "p-4",
        v
      ),
      children: [
        /* @__PURE__ */ p("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ p("div", { className: "min-w-0 space-y-1.5", children: [
            /* @__PURE__ */ s("div", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: L }),
            /* @__PURE__ */ p(
              "div",
              {
                className: y(
                  "flex items-baseline gap-1 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums",
                  x ? "text-3xl" : "text-2xl"
                ),
                children: [
                  r && /* @__PURE__ */ s("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: r }),
                  /* @__PURE__ */ s("span", { children: t }),
                  c && /* @__PURE__ */ s("span", { className: "text-xs font-normal text-[var(--abc-fg-muted)]", children: c })
                ]
              }
            )
          ] }),
          u && /* @__PURE__ */ s("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: u })
        ] }),
        (d || m) && /* @__PURE__ */ p("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs", children: [
          d ? /* @__PURE__ */ p("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ s(D, { tone: f, children: d }),
            /* @__PURE__ */ s("span", { className: "text-[var(--abc-fg-muted)]", children: l })
          ] }) : /* @__PURE__ */ s("span", {}),
          m && /* @__PURE__ */ s("div", { className: "text-[var(--abc-fg-muted)] truncate", children: m })
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
