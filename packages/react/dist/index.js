var eo = Object.defineProperty;
var to = (t, r, a) => r in t ? eo(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var ca = (t, r, a) => to(t, typeof r != "symbol" ? r + "" : r, a);
import * as Te from "react";
import je, { useState as $, useEffect as de, useRef as ue, useCallback as he, useLayoutEffect as xa, useId as Fe, useContext as Un, createContext as Gn, useMemo as ce, useImperativeHandle as Vr } from "react";
import { jsxs as o, jsx as e, Fragment as Re } from "react/jsx-runtime";
import { Loader2 as Dt, Minimize2 as Ra, Maximize2 as za, X as Ue, Trash2 as er, AlertTriangle as Ot, CheckCircle2 as Ct, HelpCircle as yr, Info as wr, AlertCircle as At, Zap as ro, XCircle as ao, Wrench as no, Wallet as so, Video as oo, Users as io, UserCog as co, UserCheck as lo, User as bo, Upload as Vn, Unlock as uo, TrendingUp as mo, Trash as fo, Timer as po, Ticket as ho, Terminal as vo, Tags as go, Tag as xo, Store as yo, StarOff as wo, Star as No, Sparkles as Nr, Smartphone as ko, SlidersHorizontal as ya, Sliders as Co, ShoppingCart as So, ShoppingBag as Io, ShieldCheck as Pa, ShieldAlert as Yr, Shield as Mo, Share2 as To, Share as Eo, Settings as _o, Server as Ao, Send as Do, Search as ct, ScrollText as Bo, RotateCw as Xr, RotateCcw as St, RefreshCw as tr, Receipt as Lo, Radio as Ro, PlusCircle as zo, Plus as ja, Play as Yn, PieChart as Po, PhoneCall as jo, Phone as Oo, Pause as $o, PanelTop as Fo, PanelLeft as Wo, Palette as Xn, Package as Ho, Network as Ko, MoreHorizontal as Oa, Monitor as qn, Minus as qr, MessagesSquare as Uo, MessageSquareText as Go, MessageSquareQuote as Vo, MessageSquare as Yo, MessageCircle as Xo, Menu as Zn, Megaphone as qo, MapPin as Zo, Lock as Jo, ListOrdered as Qo, ListChecks as ei, Link2 as ti, LineChart as ri, LayoutGrid as ai, LayoutDashboard as ni, Layers as Jn, KeyRound as Qn, Key as si, Image as es, Home as oi, History as ii, Headphones as ci, HardDrive as li, Handshake as di, Globe2 as bi, Globe as ui, FolderTree as mi, FolderPlus as fi, FolderOpen as pi, FolderGit2 as hi, Folder as vi, Flame as gi, FileText as xi, FileSpreadsheet as yi, FileClock as wi, FileCheck as Ni, Eye as rr, Edit3 as wa, Edit as ki, Download as ts, Database as Ci, CreditCard as Si, Cpu as Ii, Copy as ar, Compass as rs, Coins as Mi, Clock as zr, CircleDollarSign as Ti, CheckSquare as Ei, CheckCircle as _i, Check as He, Camera as Ai, CalendarCheck as Di, Calendar as $a, Building2 as Bi, Boxes as Li, BookMarked as Ri, BellRing as zi, Bell as Pi, BarChart3 as ji, BarChart2 as Oi, AlertOctagon as $i, Activity as Fi, EyeOff as as, ChevronDown as pt, FolderSearch as Wi, ChevronLeft as Pr, ChevronRight as gt, ArrowUpRight as ns, ArrowDownRight as Hi, ChevronsLeft as ss, ChevronsRight as os, UploadCloud as Ki, ArrowRight as Ui, ChevronsUpDown as Gi, ChevronsDownUp as Vi, ZoomOut as Yi, ZoomIn as Xi, WifiOff as qi, CircleAlert as Zi, GripVertical as Fa, ServerCrash as Ji, FileSearch as Qi, ArrowUp as Na, ArrowDown as ka, ArrowUpDown as gn, Pin as Jt, PinOff as ec, Pencil as tc, CornerDownLeft as rc, Sun as Ca, Moon as Sa, Code2 as ac, PanelLeftOpen as nc, PanelLeftClose as sc, Save as oc, Filter as gr, Settings2 as ic, ChevronUp as xn, ListFilter as cc, AlignJustify as lc } from "lucide-react";
import { createPortal as dt } from "react-dom";
import Ie from "dayjs";
const la = {
  blue: {
    label: "科技蓝 (Blue)",
    swatch: "#2563eb",
    scale: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    }
  },
  indigo: {
    label: "深邃靛 (Indigo)",
    swatch: "#4f46e5",
    scale: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    }
  },
  violet: {
    label: "极光紫 (Violet)",
    swatch: "#7c3aed",
    scale: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    }
  },
  emerald: {
    label: "翡翠绿 (Emerald)",
    swatch: "#059669",
    scale: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    }
  },
  amber: {
    label: "琥珀金 (Amber)",
    swatch: "#d97706",
    scale: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    }
  },
  rose: {
    label: "绯红 (Rose)",
    swatch: "#e11d48",
    scale: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    }
  }
}, yn = {
  compact: {
    label: "紧凑 (30px)",
    controlHeightSm: "30px",
    controlHeightMd: "34px",
    cellPaddingY: "0.5rem"
  },
  default: {
    label: "标准企业 (34px)",
    controlHeightSm: "34px",
    controlHeightMd: "38px",
    cellPaddingY: "0.75rem"
  },
  comfortable: {
    label: "宽松舒适 (38px)",
    controlHeightSm: "38px",
    controlHeightMd: "42px",
    cellPaddingY: "0.95rem"
  }
}, wn = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, Fb = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, mr = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Ye = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, Nn = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function dc(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of Nn)
      t.style.removeProperty(`--abc-brand-${s}`);
    return;
  }
  const n = {
    50: `color-mix(in srgb, ${a} 8%, #ffffff)`,
    100: `color-mix(in srgb, ${a} 16%, #ffffff)`,
    200: `color-mix(in srgb, ${a} 30%, #ffffff)`,
    300: `color-mix(in srgb, ${a} 48%, #ffffff)`,
    400: `color-mix(in srgb, ${a} 70%, #ffffff)`,
    500: `color-mix(in srgb, ${a} 88%, #ffffff)`,
    600: a,
    700: `color-mix(in srgb, ${a} 84%, #020617)`,
    800: `color-mix(in srgb, ${a} 68%, #020617)`,
    900: `color-mix(in srgb, ${a} 52%, #020617)`,
    950: `color-mix(in srgb, ${a} 34%, #020617)`
  };
  for (const s of Nn)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function Xt(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function bc(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Ze(t) {
  const r = Xt(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return bc(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), dc(a, t.customBrandColor), r;
}
function uc(t, r) {
  if (typeof document > "u" || typeof window > "u") {
    t();
    return;
  }
  const a = document, n = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!r || typeof a.startViewTransition != "function" || n) {
    t();
    return;
  }
  const s = r.clientX, i = r.clientY, l = Math.hypot(Math.max(s, window.innerWidth - s), Math.max(i, window.innerHeight - i));
  a.startViewTransition(() => {
    t();
  }).ready.then(() => {
    document.documentElement.animate({
      clipPath: [`circle(0px at ${s}px ${i}px)`, `circle(${l}px at ${s}px ${i}px)`]
    }, {
      duration: 380,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      pseudoElement: "::view-transition-new(root)"
    });
  }).catch(() => {
  });
}
const da = [
  { letter: "a", start: "啊" },
  { letter: "b", start: "芭" },
  { letter: "c", start: "擦" },
  { letter: "d", start: "搭" },
  { letter: "e", start: "蛾" },
  { letter: "f", start: "发" },
  { letter: "g", start: "噶" },
  { letter: "h", start: "哈" },
  { letter: "j", start: "击" },
  { letter: "k", start: "喀" },
  { letter: "l", start: "垃" },
  { letter: "m", start: "妈" },
  { letter: "n", start: "拿" },
  { letter: "o", start: "哦" },
  { letter: "p", start: "啪" },
  { letter: "q", start: "期" },
  { letter: "r", start: "然" },
  { letter: "s", start: "撒" },
  { letter: "t", start: "塌" },
  { letter: "w", start: "挖" },
  { letter: "x", start: "昔" },
  { letter: "y", start: "压" },
  { letter: "z", start: "匝" }
];
function mc(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = da.length - 1; r >= 0; r--)
    if (t.localeCompare(da[r].start, "zh-CN") >= 0)
      return da[r].letter;
  return t.toLowerCase();
}
function fc(t) {
  return Array.from(t).map(mc).join("");
}
function ht(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : fc(t).includes(a);
}
function is(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      is(a, r);
  return r;
}
function cs(t, r, a = !1) {
  const n = new Set(r), s = /* @__PURE__ */ new Set();
  if (a)
    return {
      checkedKeys: Array.from(n),
      halfCheckedKeys: []
    };
  function i(l) {
    if (!l.children || l.children.length === 0) {
      const f = n.has(l.key);
      return { allChecked: f, someChecked: f };
    }
    const c = l.children.filter((f) => !f.disabled);
    if (c.length === 0) {
      const f = n.has(l.key);
      return { allChecked: f, someChecked: f };
    }
    let d = !0, b = !1;
    for (const f of c) {
      const h = i(f);
      h.allChecked || (d = !1), h.someChecked && (b = !0);
    }
    return d ? (n.add(l.key), s.delete(l.key)) : b ? (n.delete(l.key), s.add(l.key)) : (n.delete(l.key), s.delete(l.key)), { allChecked: d, someChecked: b };
  }
  for (const l of t)
    i(l);
  return {
    checkedKeys: Array.from(n),
    halfCheckedKeys: Array.from(s)
  };
}
function pc(t, r, a, n, s = !1) {
  const i = new Set(r);
  if (s)
    return n ? i.add(a.key) : i.delete(a.key), { checkedKeys: Array.from(i), halfCheckedKeys: [] };
  const l = is(a);
  for (const c of l)
    n ? i.add(c) : i.delete(c);
  return cs(t, Array.from(i), !1);
}
function hc(t, r) {
  const a = r.trim();
  if (!a)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(i) {
    const l = [];
    for (const c of i) {
      const d = c.children ? s(c.children) : [], b = ht(c.title, a);
      (b || d.length > 0) && (d.length > 0 && n.push(c.key), l.push({
        ...c,
        children: d.length > 0 ? d : c.children && b ? c.children : void 0
      }));
    }
    return l;
  }
  return {
    filteredNodes: s(t),
    autoExpandedKeys: n
  };
}
function ba(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function ls(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function vc({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: i }) {
  let l = [...t];
  const c = a.trim();
  c && (l = l.filter((d) => (r && r.length > 0 ? r : Object.keys(d)).some((f) => {
    const h = d[f];
    return h != null && ht(String(h), c);
  })));
  for (const [d, b] of Object.entries(n))
    if (b != null) {
      if (Array.isArray(b)) {
        if (b.length === 0)
          continue;
        l = l.filter((f) => {
          const h = f[d];
          return h == null ? !1 : b.some((g) => String(h) === String(g) || ht(String(h), String(g)));
        });
        continue;
      }
      if (ls(b)) {
        const f = (b.start ?? "").trim(), h = (b.end ?? "").trim();
        if (!f && !h)
          continue;
        l = l.filter((g) => {
          const m = g[d];
          if (m == null)
            return !1;
          const p = String(m).slice(0, 10);
          return !(f && p < f || h && p > h);
        });
        continue;
      }
      String(b).trim() !== "" && (l = l.filter((f) => {
        const h = f[d];
        return h == null ? !1 : ht(String(h), String(b));
      }));
    }
  if (s && i) {
    const d = i === "asc" ? 1 : -1;
    l.sort((b, f) => {
      const h = b[s], g = f[s];
      return typeof h == "number" && typeof g == "number" ? (h - g) * d : String(h ?? "").localeCompare(String(g ?? ""), "zh-CN") * d;
    });
  }
  return l;
}
function kn(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || ls(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function gc(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((i, l) => {
    i && (s && !s.has(l) || (n[l] = i));
  }), n;
}
function xc(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const i of r)
    n.delete(i);
  for (const [i, l] of Object.entries(a))
    l == null || Array.isArray(l) || typeof l == "object" || String(l).trim() !== "" && n.set(i, String(l));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function Rr(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), i = String(n.getMonth() + 1).padStart(2, "0"), l = String(n.getDate()).padStart(2, "0");
  return `${s}-${i}-${l}`;
}
function Ia(t, r, a = /* @__PURE__ */ new Date()) {
  const n = Rr(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), i = new Date(t, r + 1, 0).getDate(), l = new Date(t, r, 0).getDate(), c = [];
  for (let b = s - 1; b >= 0; b--) {
    const f = l - b, h = Rr(t, r - 1, f);
    c.push({ iso: h, day: f, inCurrentMonth: !1, isToday: h === n });
  }
  for (let b = 1; b <= i; b++) {
    const f = Rr(t, r, b);
    c.push({ iso: f, day: b, inCurrentMonth: !0, isToday: f === n });
  }
  let d = 1;
  for (; c.length < 42; ) {
    const b = Rr(t, r + 1, d);
    c.push({ iso: b, day: d, inCurrentMonth: !1, isToday: b === n }), d += 1;
  }
  return c;
}
function ds(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = ds(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function yc() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = ds(t)) && (n && (n += " "), n += r);
  return n;
}
const Wa = "-", wc = (t) => {
  const r = kc(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const c = l.split(Wa);
      return c[0] === "" && c.length !== 1 && c.shift(), bs(c, r) || Nc(l);
    },
    getConflictingClassGroupIds: (l, c) => {
      const d = a[l] || [];
      return c && n[l] ? [...d, ...n[l]] : d;
    }
  };
}, bs = (t, r) => {
  var l;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? bs(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const i = t.join(Wa);
  return (l = r.validators.find(({
    validator: c
  }) => c(i))) == null ? void 0 : l.classGroupId;
}, Cn = /^\[(.+)\]$/, Nc = (t) => {
  if (Cn.test(t)) {
    const r = Cn.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, kc = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Sc(Object.entries(t.classGroups), a).forEach(([i, l]) => {
    Ma(l, n, i, r);
  }), n;
}, Ma = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? r : Sn(r, s);
      i.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (Cc(s)) {
        Ma(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([i, l]) => {
      Ma(l, Sn(r, i), a, n);
    });
  });
}, Sn = (t, r) => {
  let a = t;
  return r.split(Wa).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Cc = (t) => t.isThemeGetter, Sc = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((i) => typeof i == "string" ? r + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([l, c]) => [r + l, c])) : i);
  return [a, s];
}) : t, Ic = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (i, l) => {
    a.set(i, l), r++, r > t && (r = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let l = a.get(i);
      if (l !== void 0)
        return l;
      if ((l = n.get(i)) !== void 0)
        return s(i, l), l;
    },
    set(i, l) {
      a.has(i) ? a.set(i, l) : s(i, l);
    }
  };
}, us = "!", Mc = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], i = r.length, l = (c) => {
    const d = [];
    let b = 0, f = 0, h;
    for (let y = 0; y < c.length; y++) {
      let S = c[y];
      if (b === 0) {
        if (S === s && (n || c.slice(y, y + i) === r)) {
          d.push(c.slice(f, y)), f = y + i;
          continue;
        }
        if (S === "/") {
          h = y;
          continue;
        }
      }
      S === "[" ? b++ : S === "]" && b--;
    }
    const g = d.length === 0 ? c : c.substring(f), m = g.startsWith(us), p = m ? g.substring(1) : g, v = h && h > f ? h - f : void 0;
    return {
      modifiers: d,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  return a ? (c) => a({
    className: c,
    parseClassName: l
  }) : l;
}, Tc = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, Ec = (t) => ({
  cache: Ic(t.cacheSize),
  parseClassName: Mc(t),
  ...wc(t)
}), _c = /\s+/, Ac = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, i = [], l = t.trim().split(_c);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const b = l[d], {
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = a(b);
    let p = !!m, v = n(p ? g.substring(0, m) : g);
    if (!v) {
      if (!p) {
        c = b + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = n(g), !v) {
        c = b + (c.length > 0 ? " " + c : c);
        continue;
      }
      p = !1;
    }
    const y = Tc(f).join(":"), S = h ? y + us : y, x = S + v;
    if (i.includes(x))
      continue;
    i.push(x);
    const k = s(v, p);
    for (let D = 0; D < k.length; ++D) {
      const B = k[D];
      i.push(S + B);
    }
    c = b + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Dc() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = ms(r)) && (n && (n += " "), n += a);
  return n;
}
const ms = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = ms(t[n])) && (a && (a += " "), a += r);
  return a;
};
function Bc(t, ...r) {
  let a, n, s, i = l;
  function l(d) {
    const b = r.reduce((f, h) => h(f), t());
    return a = Ec(b), n = a.cache.get, s = a.cache.set, i = c, c(d);
  }
  function c(d) {
    const b = n(d);
    if (b)
      return b;
    const f = Ac(d, a);
    return s(d, f), f;
  }
  return function() {
    return i(Dc.apply(null, arguments));
  };
}
const ze = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, fs = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lc = /^\d+\/\d+$/, Rc = /* @__PURE__ */ new Set(["px", "full", "screen"]), zc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Oc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $c = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yt = (t) => qt(t) || Rc.has(t) || Lc.test(t), Et = (t) => nr(t, "length", Yc), qt = (t) => !!t && !Number.isNaN(Number(t)), ua = (t) => nr(t, "number", qt), fr = (t) => !!t && Number.isInteger(Number(t)), Fc = (t) => t.endsWith("%") && qt(t.slice(0, -1)), ke = (t) => fs.test(t), _t = (t) => zc.test(t), Wc = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Hc = (t) => nr(t, Wc, ps), Kc = (t) => nr(t, "position", ps), Uc = /* @__PURE__ */ new Set(["image", "url"]), Gc = (t) => nr(t, Uc, qc), Vc = (t) => nr(t, "", Xc), pr = () => !0, nr = (t, r, a) => {
  const n = fs.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, Yc = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Pc.test(t) && !jc.test(t)
), ps = () => !1, Xc = (t) => Oc.test(t), qc = (t) => $c.test(t), Zc = () => {
  const t = ze("colors"), r = ze("spacing"), a = ze("blur"), n = ze("brightness"), s = ze("borderColor"), i = ze("borderRadius"), l = ze("borderSpacing"), c = ze("borderWidth"), d = ze("contrast"), b = ze("grayscale"), f = ze("hueRotate"), h = ze("invert"), g = ze("gap"), m = ze("gradientColorStops"), p = ze("gradientColorStopPositions"), v = ze("inset"), y = ze("margin"), S = ze("opacity"), x = ze("padding"), k = ze("saturate"), D = ze("scale"), B = ze("sepia"), T = ze("skew"), N = ze("space"), w = ze("translate"), C = () => ["auto", "contain", "none"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", ke, r], E = () => [ke, r], O = () => ["", yt, Et], X = () => ["auto", qt, ke], Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", ke], K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [qt, ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [pr],
      spacing: [yt, Et],
      blur: ["none", "", _t, ke],
      brightness: Y(),
      borderColor: [t],
      borderRadius: ["none", "", "full", _t, ke],
      borderSpacing: E(),
      borderWidth: O(),
      contrast: Y(),
      grayscale: V(),
      hueRotate: Y(),
      invert: V(),
      gap: E(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Fc, Et],
      inset: A(),
      margin: A(),
      opacity: Y(),
      padding: E(),
      saturate: Y(),
      scale: Y(),
      sepia: V(),
      skew: Y(),
      space: E(),
      translate: E()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ke]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [_t]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": K()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": K()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Z(), ke]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", fr, ke]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ke]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", fr, ke]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [pr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", fr, ke]
        }, ke]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [pr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [fr, ke]
        }, ke]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ke]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ke]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...W()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...W(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [N]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ke, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ke, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ke, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [_t]
        }, _t]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ke, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ke, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ke, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ke, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", _t, Et]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ua]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ke]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qt, ua]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", yt, ke]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ke]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ke]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [S]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [S]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", yt, Et]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", yt, ke]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ke]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ke]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [S]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Z(), Kc]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Hc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Gc]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...R(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: R()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [yt, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [yt, Et]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: O()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [yt, Et]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", _t, Vc]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [pr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": z()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [a]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", _t, ke]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [B]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [a]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [B]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ke]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ke]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ke]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [fr, ke]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [w]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [w]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ke]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ke]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ke]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [yt, Et, ua]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Jc = /* @__PURE__ */ Bc(Zc);
function u(...t) {
  return Jc(yc(t));
}
function Qc() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function $t(t, r = 200) {
  const [a, n] = $(t), s = Qc();
  return t && !a && n(!0), de(() => {
    if (t) {
      n(!0);
      return;
    }
    if (s || r <= 0) {
      n(!1);
      return;
    }
    const l = window.setTimeout(() => {
      n(!1);
    }, r);
    return () => window.clearTimeout(l);
  }, [t, r, s]), { isMounted: t ? !0 : s || r <= 0 ? !1 : a, isVisible: t };
}
function st({
  value: t,
  defaultValue: r,
  onChange: a
}) {
  const [n, s] = $(r), i = t !== void 0, l = i ? t : n, c = ue(l);
  c.current = l;
  const d = ue(a);
  d.current = a;
  const b = he(
    (f) => {
      var g;
      const h = typeof f == "function" ? f(c.current) : f;
      i || s(h), (g = d.current) == null || g.call(d, h);
    },
    [i]
  );
  return [l, b];
}
function el(t) {
  const r = t ? `abc_draft_${t}` : "", a = he(() => {
    if (!r || typeof window > "u") return null;
    try {
      const c = window.localStorage.getItem(r);
      return c ? JSON.parse(c) : null;
    } catch {
      return null;
    }
  }, [r]), [n, s] = $(() => !!a()), i = he(
    (c) => {
      if (!(!r || typeof window > "u"))
        try {
          window.localStorage.setItem(r, JSON.stringify(c)), s(!0);
        } catch {
        }
    },
    [r]
  ), l = he(() => {
    if (!(!r || typeof window > "u"))
      try {
        window.localStorage.removeItem(r), s(!1);
      } catch {
      }
  }, [r]);
  return {
    hasDraft: n,
    readDraft: a,
    saveDraft: i,
    clearDraft: l
  };
}
const In = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  density: "default"
};
function tl(t, r = "default") {
  const a = t ? `abc_table_${t}` : "", [n, s] = $(() => {
    const m = { ...In, density: r };
    if (!a || typeof window > "u") return m;
    try {
      const p = window.localStorage.getItem(a);
      if (!p) return m;
      const v = JSON.parse(p);
      return {
        hiddenKeys: Array.isArray(v.hiddenKeys) ? v.hiddenKeys : [],
        columnOrder: Array.isArray(v.columnOrder) ? v.columnOrder : [],
        columnWidths: v.columnWidths && typeof v.columnWidths == "object" ? v.columnWidths : {},
        columnFixed: v.columnFixed && typeof v.columnFixed == "object" ? v.columnFixed : {},
        searchVisible: v.searchVisible && typeof v.searchVisible == "object" ? v.searchVisible : {},
        density: v.density ?? r
      };
    } catch {
      return m;
    }
  });
  de(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify(n));
      } catch {
      }
  }, [a, n]);
  const i = he((m) => {
    s((p) => ({
      ...p,
      hiddenKeys: p.hiddenKeys.includes(m) ? p.hiddenKeys.filter((v) => v !== m) : [...p.hiddenKeys, m]
    }));
  }, []), l = he((m, p) => {
    s((v) => ({
      ...v,
      hiddenKeys: p ? [] : Array.from(new Set(m))
    }));
  }, []), c = he(
    (m, p) => {
      s((v) => {
        const y = { ...v.columnFixed };
        return p === void 0 ? delete y[m] : y[m] = p, {
          ...v,
          columnFixed: y
        };
      });
    },
    []
  ), d = he((m, p) => {
    s((v) => ({
      ...v,
      columnWidths: { ...v.columnWidths, [m]: Math.max(64, Math.round(p)) }
    }));
  }, []), b = he((m) => {
    s((p) => ({ ...p, columnOrder: m }));
  }, []), f = he((m, p) => {
    s((v) => ({
      ...v,
      searchVisible: { ...v.searchVisible, [m]: p }
    }));
  }, []), h = he((m) => {
    s((p) => ({ ...p, density: m }));
  }, []), g = he(() => {
    s({ ...In, density: r });
  }, [r]);
  return {
    settings: n,
    toggleColumnVisible: i,
    setAllColumnsVisible: l,
    setColumnFixed: c,
    setColumnWidth: d,
    setColumnOrder: b,
    setSearchFieldVisible: f,
    setDensity: h,
    resetSettings: g
  };
}
const rl = typeof window < "u" ? xa : de;
function Zr(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function al(t) {
  switch (t) {
    case "bottomLeft":
      return { side: "bottom", align: "start" };
    case "bottomRight":
      return { side: "bottom", align: "end" };
    case "topLeft":
      return { side: "top", align: "start" };
    case "topRight":
      return { side: "top", align: "end" };
    case "rightStart":
      return { side: "right", align: "start" };
    case "top":
    case "bottom":
    case "left":
    case "right":
      return { side: t, align: "center" };
  }
}
function ma(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function kr({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: i = !1,
  viewportPadding: l = 8
}) {
  const { side: c, align: d } = al(n), [b, f] = $(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: c,
    arrowOffset: 16,
    transformOrigin: ma(c, d),
    positioned: !1
  })), h = he(() => {
    if (typeof window > "u" || !r.current) return;
    const m = r.current.getBoundingClientRect(), p = a.current, v = p == null ? void 0 : p.getBoundingClientRect(), y = window.innerWidth || 1024, S = window.innerHeight || 768, x = l, k = p ? p.offsetWidth : 0, D = p ? p.offsetHeight : 0, B = k || (v == null ? void 0 : v.width) || (i ? m.width : 180), T = i ? Math.max(B, m.width) : B, N = D || (v == null ? void 0 : v.height) || 40;
    if (m.width === 0 && m.height === 0 && m.top === 0 && m.left === 0) {
      f({
        top: s,
        left: x,
        minWidth: i && m.width > 0 ? m.width : void 0,
        actualSide: c,
        arrowOffset: 16,
        transformOrigin: ma(c, d),
        positioned: !0
      });
      return;
    }
    let w = c;
    if (c === "bottom") {
      const W = S - m.bottom - s - x, V = m.top - s - x;
      N > W && V > W && (w = "top");
    } else if (c === "top") {
      const W = m.top - s - x, V = S - m.bottom - s - x;
      N > W && V > W && (w = "bottom");
    } else if (c === "left") {
      const W = m.left - s - x, V = y - m.right - s - x;
      T > W && V > W && (w = "right");
    } else if (c === "right") {
      const W = y - m.right - s - x, V = m.left - s - x;
      T > W && V > W && (w = "left");
    }
    let C = 0, I = 0;
    w === "bottom" || w === "top" ? (C = w === "bottom" ? m.bottom + s : m.top - N - s, d === "start" ? I = m.left : d === "end" ? I = m.right - T : I = m.left + m.width / 2 - T / 2) : (I = w === "right" ? m.right + s : m.left - T - s, d === "start" ? C = m.top : d === "end" ? C = m.bottom - N : C = m.top + m.height / 2 - N / 2);
    const A = Math.max(x, y - T - x), E = Math.max(x, S - N - x), O = Math.min(Math.max(x, I), A), X = Math.min(Math.max(x, C), E), Z = w === "top" || w === "bottom" ? Math.min(
      Math.max(10, m.left + m.width / 2 - O),
      Math.max(10, T - 10)
    ) : Math.min(
      Math.max(10, m.top + m.height / 2 - X),
      Math.max(10, N - 10)
    ), R = ma(w, d), z = i ? Math.round(m.width) : void 0;
    f((W) => W.positioned && Math.abs(W.top - X) < 0.5 && Math.abs(W.left - O) < 0.5 && W.minWidth === z && W.actualSide === w && Math.abs(W.arrowOffset - Z) < 0.5 && W.transformOrigin === R ? W : {
      top: Math.round(X * 10) / 10,
      left: Math.round(O * 10) / 10,
      minWidth: z,
      actualSide: w,
      arrowOffset: Math.round(Z),
      transformOrigin: R,
      positioned: !0
    });
  }, [r, a, c, d, s, i, l]);
  rl(() => {
    if (!t) {
      f((p) => p.positioned ? { ...p, positioned: !1 } : p);
      return;
    }
    h();
    const m = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(h) : 0;
    return () => {
      m && typeof window < "u" && window.cancelAnimationFrame(m);
    };
  }, [t, h]), de(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", h, { passive: !0 }), window.addEventListener("scroll", h, !0);
    let m = null;
    return typeof ResizeObserver < "u" && (m = new ResizeObserver(() => h()), a.current && m.observe(a.current), r.current && m.observe(r.current)), () => {
      window.removeEventListener("resize", h), window.removeEventListener("scroll", h, !0), m == null || m.disconnect();
    };
  }, [t, h, a, r]);
  const g = t ? Zr(r.current) : null;
  return {
    style: {
      position: "fixed",
      top: `${b.top}px`,
      left: `${b.left}px`,
      minWidth: b.minWidth ? `${b.minWidth}px` : void 0,
      transformOrigin: b.transformOrigin,
      // 尚未完成首帧同步坐标测算前先隐藏，防止残影在 (0, 0) 或上次位置闪现一帧
      visibility: t && !b.positioned ? "hidden" : void 0
    },
    actualSide: b.actualSide,
    arrowOffset: b.arrowOffset,
    portalContainer: g,
    update: h
  };
}
const jr = {
  primary: "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs enabled:hover:bg-[var(--abc-primary-hover)] enabled:hover:shadow-sm enabled:active:bg-[var(--abc-primary-active)]",
  default: "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs enabled:hover:bg-[var(--abc-primary-hover)] enabled:hover:shadow-sm enabled:active:bg-[var(--abc-primary-active)]",
  secondary: "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] border border-[var(--abc-border)] enabled:hover:bg-[var(--abc-bg-muted)] enabled:hover:border-[var(--abc-border-strong)] enabled:hover:shadow-2xs enabled:active:bg-[var(--abc-bg-subtle)]",
  outline: "bg-transparent border border-[var(--abc-primary)] text-[var(--abc-primary)] enabled:hover:bg-[var(--abc-primary-soft)] enabled:hover:shadow-2xs",
  danger: "bg-[var(--abc-danger)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90",
  destructive: "bg-[var(--abc-danger)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90",
  success: "bg-[var(--abc-success)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90",
  warning: "bg-[var(--abc-warning)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90",
  ghost: "bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
  text: "bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-primary)]",
  link: "bg-transparent text-[var(--abc-primary)] underline-offset-4 hover:underline enabled:hover:bg-transparent"
}, Or = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  default: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm",
  icon: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  "icon-sm": "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0"
};
function Wb({
  variant: t = "primary",
  size: r = "sm",
  className: a
} = {}) {
  const n = jr[t] || jr.primary, s = Or[r] || Or.sm;
  return u(
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
    "disabled:opacity-45 disabled:cursor-not-allowed",
    n,
    s,
    a
  );
}
const ye = je.forwardRef(
  ({
    className: t,
    variant: r = "primary",
    size: a,
    motion: n,
    loading: s = !1,
    loadingText: i,
    disabled: l,
    icon: c,
    leftIcon: d,
    rightIcon: b,
    block: f = !1,
    asChild: h = !1,
    type: g,
    children: m,
    ...p
  }, v) => {
    const y = a === "icon" || a === "icon-sm", k = pe(y ? void 0 : a === "default" ? "sm" : a, "sm"), D = oe(n), B = !!(l || s), T = d ?? c, N = u(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      jr[r] || jr.primary,
      y ? Or[a] : Or[k],
      f && "w-full",
      t
    );
    if (h && je.isValidElement(m)) {
      const w = m;
      return je.cloneElement(w, {
        className: u(N, w.props.className),
        ...p
      });
    }
    return /* @__PURE__ */ o(
      "button",
      {
        ref: v,
        type: g,
        disabled: B,
        "data-motion": D,
        className: N,
        ...p,
        children: [
          s ? /* @__PURE__ */ e(Dt, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : T && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: T }),
          s && i !== void 0 ? i : m,
          !s && b && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: b })
        ]
      }
    );
  }
);
ye.displayName = "Button";
const nl = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  "2xl": "max-w-4xl",
  "3xl": "max-w-5xl",
  "4xl": "max-w-6xl",
  "5xl": "max-w-7xl"
}, lt = ({
  open: t,
  visible: r,
  isOpen: a,
  onClose: n,
  onOpenChange: s,
  title: i,
  description: l,
  children: c,
  footer: d,
  size: b,
  maxWidth: f = "md",
  width: h,
  closeOnClickModal: g = !0,
  draggable: m = !0,
  fullscreenable: p = !0,
  fullscreen: v,
  onFullscreenChange: y,
  motion: S,
  className: x
}) => {
  const k = t ?? r ?? a ?? !1, D = oe(S), { isMounted: B, isVisible: T } = $t(k, D === "none" ? 0 : 180), N = Fe(), w = Fe(), C = ue(null), I = ue(null), A = ue(!1), E = he(() => {
    n ? n() : s && s(!1);
  }, [n, s]), O = ue(E);
  O.current = E;
  const [X, Z] = $(!1), R = v !== void 0 ? v : X, [z, W] = $({ x: 0, y: 0 }), V = ue(
    null
  ), K = he(() => {
    const j = !R;
    v === void 0 && Z(j), y == null || y(j);
  }, [R, v, y]);
  de(() => {
    if (!B) return;
    const j = C.current;
    if (!j) return;
    let G = !1;
    if (typeof j.showModal == "function")
      if (j.open)
        G = !0;
      else
        try {
          j.showModal(), G = !0;
        } catch {
          j.setAttribute("open", "");
        }
    else
      j.setAttribute("open", "");
    const ne = (M) => {
      M.preventDefault(), O.current();
    }, te = (M) => {
      M.key === "Escape" && (M.stopPropagation(), O.current());
    };
    return j.addEventListener("cancel", ne), (!G || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", te), () => {
      if (j.removeEventListener("cancel", ne), window.removeEventListener("keydown", te), j.open && typeof j.close == "function")
        try {
          j.close();
        } catch {
          j.removeAttribute("open");
        }
    };
  }, [B]), de(() => {
    k || (W({ x: 0, y: 0 }), v === void 0 && Z(!1));
  }, [k, v]);
  const Y = (j) => {
    var M;
    const G = j.target;
    if ((M = G == null ? void 0 : G.closest) != null && M.call(G, "[data-abc-floating]"))
      return !1;
    const ne = I.current;
    if (!ne) return !1;
    const te = ne.getBoundingClientRect();
    return te.width === 0 && te.height === 0 ? !ne.contains(j.target) : j.clientX < te.left || j.clientX > te.right || j.clientY < te.top || j.clientY > te.bottom;
  }, se = (j) => {
    if (!m || R || j.button !== 0 || j.target.closest('button, a, input, [role="button"]')) return;
    V.current = {
      startX: j.clientX,
      startY: j.clientY,
      origX: z.x,
      origY: z.y
    };
    const G = (te) => {
      V.current && W({
        x: V.current.origX + (te.clientX - V.current.startX),
        y: V.current.origY + (te.clientY - V.current.startY)
      });
    }, ne = () => {
      V.current = null, window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", ne);
    };
    window.addEventListener("mousemove", G), window.addEventListener("mouseup", ne);
  };
  if (!B || typeof document > "u") return null;
  const P = b || f, q = nl[P] || P;
  return dt(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: C,
        "data-motion": D,
        "aria-labelledby": i ? N : void 0,
        "aria-label": i ? void 0 : "对话框",
        "aria-describedby": l ? w : void 0,
        style: {
          display: k ? "flex" : "none",
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100dvh",
          maxWidth: "100vw",
          maxHeight: "100dvh",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: R ? 0 : "1rem",
          border: "none",
          backgroundColor: "rgba(2, 6, 23, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1100
        },
        onPointerDown: (j) => {
          A.current = g && Y(j);
        },
        onPointerUp: (j) => {
          g && A.current && Y(j) && O.current(), A.current = !1;
        },
        onClick: (j) => {
          g && j.target === C.current && !A.current && O.current();
        },
        className: u(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          R && "p-0",
          D !== "none" && (T ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ o(
          "div",
          {
            ref: I,
            "data-dialog-panel": "",
            "data-motion": D,
            style: {
              width: !R && h ? h : void 0,
              transform: !R && (z.x !== 0 || z.y !== 0) ? `translate3d(${z.x}px, ${z.y}px, 0)` : void 0
            },
            className: u(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              R ? "h-dvh w-dvw rounded-none" : u("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !h && q),
              D !== "none" && (T ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              x
            ),
            children: [
              (i !== void 0 || p) && /* @__PURE__ */ o(
                "div",
                {
                  onMouseDown: se,
                  onDoubleClick: p ? K : void 0,
                  className: u(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    m && !R && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
                      i && /* @__PURE__ */ e("h2", { id: N, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: i }),
                      l && /* @__PURE__ */ e("p", { id: w, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: l })
                    ] }),
                    /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1", children: [
                      p && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": R ? "还原窗口" : "全屏",
                          title: R ? "退出全屏" : "全屏显示",
                          onClick: K,
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: R ? /* @__PURE__ */ e(Ra, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": "关闭",
                          title: "关闭弹窗",
                          onClick: n,
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: /* @__PURE__ */ e(Ue, { className: "h-4 w-4" })
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  "data-dialog-body": "",
                  className: "flex-1 overflow-y-auto px-5 py-4 text-xs text-[var(--abc-fg-secondary)]",
                  children: c
                }
              ),
              d && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: d })
            ]
          }
        )
      }
    ),
    document.body
  );
}, Hb = lt;
function Ha({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-content", className: u("space-y-4", t), ...a, children: r });
}
function Ka({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: u("flex flex-col space-y-1.5 text-left", t), ...a, children: r });
}
function Ua({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: u("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...a, children: r });
}
function Ga({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("h2", { "data-slot": "dialog-title", className: u("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...a, children: r });
}
function Va({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: u("text-xs text-[var(--abc-fg-muted)]", t), ...a, children: r });
}
const $r = /* @__PURE__ */ new Set();
let hs = null, vr = 0;
function vs(t) {
  hs = t, $r.forEach((r) => r(t));
}
function sl(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function Ya(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (vr === 0 && typeof window < "u" && $r.size === 0) {
    const s = r.content ?? r.message, i = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(i) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    vs({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: sl(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const Kb = Ya;
function Ub() {
  return Ya;
}
const gs = () => {
  const [t, r] = $(!1), [a, n] = $(() => hs), [s, i] = $(!1);
  if (de(() => {
    vr += 1, r(vr === 1);
    const b = (f) => n(f);
    return $r.add(b), () => {
      vr = Math.max(0, vr - 1), $r.delete(b);
    };
  }, []), !t || !a) return null;
  const l = async (d) => {
    var b;
    if (!(!a || s)) {
      if (d && a.onConfirm)
        try {
          i(!0), await a.onConfirm();
        } finally {
          i(!1);
        }
      else d || (b = a.onCancel) == null || b.call(a);
      a.resolve(d), vs(null);
    }
  }, c = a.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(er, { className: "h-4 w-4" }) }) : a.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e(Ot, { className: "h-4 w-4" }) }) : a.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(Ct, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(yr, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    lt,
    {
      open: !!a,
      onClose: () => l(!1),
      title: a.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ o(Re, { children: [
        /* @__PURE__ */ e(
          ye,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: a.resolvedTone === "danger",
            onClick: () => l(!1),
            children: a.cancelText
          }
        ),
        /* @__PURE__ */ e(
          ye,
          {
            variant: a.resolvedTone === "danger" ? "danger" : a.resolvedTone === "warning" ? "warning" : a.resolvedTone === "success" ? "success" : "primary",
            loading: s,
            autoFocus: a.resolvedTone !== "danger",
            onClick: () => l(!0),
            children: a.confirmText
          }
        )
      ] }),
      children: /* @__PURE__ */ o("div", { className: "flex items-start gap-3.5 py-1", children: [
        c,
        /* @__PURE__ */ e("div", { className: "pt-1 text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: a.message })
      ] })
    }
  );
}, Gb = ({ children: t }) => /* @__PURE__ */ o(Re, { children: [
  t,
  /* @__PURE__ */ e(gs, {})
] });
let et = [];
const Ta = /* @__PURE__ */ new Set(), wt = /* @__PURE__ */ new Map();
let ol = 0;
function Xa() {
  const t = [...et];
  Ta.forEach((r) => r(t));
}
function il(t) {
  const r = wt.get(t);
  if (!r || r.isPaused || r.remaining <= 0) return;
  r.timerId && (clearTimeout(r.timerId), r.timerId = void 0);
  const a = Date.now() - r.startedAt;
  r.remaining = Math.max(0, r.remaining - a), r.isPaused = !0;
}
function cl(t) {
  const r = wt.get(t);
  !r || !r.isPaused || r.remaining <= 0 || (r.isPaused = !1, r.startedAt = Date.now(), typeof window < "u" && (r.timerId = window.setTimeout(r.onExpire, r.remaining)));
}
function qa(t) {
  var n;
  const r = wt.get(t);
  r != null && r.timerId && clearTimeout(r.timerId), wt.delete(t);
  const a = et.find((s) => s.id === t);
  a && ((n = a.onClose) == null || n.call(a)), et = et.filter((s) => s.id !== t), Xa();
}
function ll() {
  wt.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), wt.clear(), et.forEach((t) => {
    var r;
    return (r = t.onClose) == null ? void 0 : r.call(t);
  }), et = [], Xa();
}
function Vt(t, r, a) {
  const n = `abc_toast_${++ol}_${Date.now()}`;
  let s = {};
  r !== null && typeof r == "object" && !je.isValidElement(r) ? s = r : s = { message: r };
  const i = s.tone ?? t, l = i === "danger" ? "error" : i, c = s.content ?? s.message ?? s.description ?? "", d = l === "error" ? 4200 : l === "warning" ? 3600 : l === "loading" ? 0 : 3e3, b = s.duration ?? a ?? d, f = {
    ...s,
    id: n,
    tone: l,
    message: c,
    duration: b,
    createdAt: Date.now()
  };
  if (et.length >= 30 && (et.slice(0, et.length - 29).forEach((g) => {
    const m = wt.get(g.id);
    m != null && m.timerId && clearTimeout(m.timerId), wt.delete(g.id);
  }), et = et.slice(-29)), et = [...et, f], Xa(), b > 0 && typeof window < "u") {
    const h = {
      startedAt: Date.now(),
      remaining: b,
      isPaused: !1,
      onExpire: () => qa(n)
    };
    h.timerId = window.setTimeout(h.onExpire, b), wt.set(n, h);
  }
  return n;
}
const Za = {
  success: (t, r) => Vt("success", t, r),
  error: (t, r) => Vt("error", t, r ?? 4200),
  info: (t, r) => Vt("info", t, r),
  warning: (t, r) => Vt("warning", t, r ?? 3600),
  loading: (t, r = 0) => Vt("loading", t, r),
  push: (t, r, a) => Vt(t, r, a),
  dismiss: (t) => qa(t),
  clear: () => ll()
}, Vb = Za, Mn = {
  success: /* @__PURE__ */ e(Ct, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(At, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(At, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(Ot, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(wr, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(Dt, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, dl = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, bl = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, ul = ({
  item: t,
  resolvedSize: r,
  resolvedMotion: a,
  closable: n,
  pauseOnHover: s,
  toastClassName: i,
  toastStyle: l,
  onDismiss: c
}) => {
  const d = t.closable ?? n, b = !!t.title;
  return /* @__PURE__ */ o(
    "div",
    {
      role: t.tone === "error" || t.tone === "warning" ? "alert" : "status",
      "aria-live": t.tone === "error" ? "assertive" : "polite",
      "data-motion": a,
      onMouseEnter: () => {
        s && il(t.id);
      },
      onMouseLeave: () => {
        s && cl(t.id);
      },
      style: { ...l, ...t.style },
      className: u(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        b ? "items-start" : "items-center",
        dl[r],
        a !== "none" && "abc-animate-popover-in",
        i,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: u("shrink-0", b && "mt-0.5"), children: t.icon ?? Mn[t.tone] ?? Mn.info }),
        /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          t.title && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)] leading-snug", children: t.title }),
          t.message && /* @__PURE__ */ e(
            "div",
            {
              className: u(
                "leading-relaxed break-words",
                b ? "text-xs text-[var(--abc-fg-secondary)]" : "font-medium"
              ),
              children: t.message
            }
          ),
          t.action && /* @__PURE__ */ e("div", { className: "mt-1.5 flex items-center gap-2", children: t.action })
        ] }),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "关闭通知",
            onClick: (f) => {
              f.stopPropagation(), c(t.id);
            },
            className: "rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer transition-colors",
            children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, ml = ({
  position: t = "top-right",
  size: r,
  motion: a,
  maxCount: n = 5,
  pauseOnHover: s = !0,
  newestOnTop: i = !1,
  closable: l = !0,
  className: c,
  style: d,
  toastClassName: b,
  toastStyle: f,
  container: h,
  containerId: g,
  renderItem: m,
  items: p,
  onDismiss: v
}) => {
  const [y, S] = $(() => [...et]), x = pe(r, "sm"), k = oe(a);
  de(() => {
    if (p !== void 0) return;
    const I = (A) => S(A);
    return Ta.add(I), () => {
      Ta.delete(I);
    };
  }, [p]);
  const B = (p ?? y).filter((I) => !(I.containerId && g && I.containerId !== g || I.position && I.position !== t));
  let T = B;
  i ? T = [...B].reverse().slice(0, n) : n > 0 && (T = B.slice(-n));
  const N = (I) => {
    v ? v(I) : qa(I);
  };
  if (typeof document > "u" || T.length === 0)
    return null;
  const w = typeof h == "function" ? h() : h !== void 0 ? h : typeof document < "u" ? document.body : null;
  if (!w) return null;
  const C = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: u(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        bl[t],
        c
      ),
      style: d,
      children: T.map((I) => m ? /* @__PURE__ */ e(je.Fragment, { children: m(I, () => N(I.id)) }, I.id) : /* @__PURE__ */ e(
        ul,
        {
          item: I,
          resolvedSize: x,
          resolvedMotion: k,
          closable: l,
          pauseOnHover: s,
          toastClassName: b,
          toastStyle: f,
          onDismiss: N
        },
        I.id
      ))
    }
  );
  return dt(C, w);
}, fl = (t) => /* @__PURE__ */ e(ml, { ...t }), Ja = "abc_design_theme_v1", Fr = "color-scheme", xs = Gn(null);
function Tn(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(Fr), n = window.localStorage.getItem(Ja), s = n ? JSON.parse(n) : {}, i = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, l = ["xs", "sm", "md", "lg"], c = ["none", "subtle", "smooth", "spring"], d = s.componentSize && l.includes(s.componentSize) ? s.componentSize : t.componentSize, b = s.motion && c.includes(s.motion) ? s.motion : t.motion ?? "smooth";
    return {
      mode: i,
      brand: s.brand ?? t.brand,
      customBrandColor: s.customBrandColor ?? t.customBrandColor,
      density: s.density ?? t.density,
      radius: s.radius ?? t.radius,
      fontScale: s.fontScale ?? t.fontScale ?? "md",
      visualMode: s.visualMode ?? t.visualMode ?? "default",
      componentSize: d,
      motion: b
    };
  } catch {
    return t;
  }
}
function pl(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(Fr) : window.localStorage.setItem(Fr, t.mode), window.localStorage.setItem(Ja, JSON.stringify(t));
    } catch {
    }
}
const Yb = ({
  children: t,
  defaultTheme: r,
  defaultPageTransition: a = "fade-slide",
  watermarkText: n,
  defaultWatermarkEnabled: s = !1,
  persist: i = !0,
  toastAdapter: l,
  toastContainerProps: c,
  uploadAdapter: d,
  dictAdapter: b,
  permissionAdapter: f,
  captchaAdapter: h,
  iconRegistry: g = {},
  defaultDrawerCascadeMode: m = "adjacent"
}) => {
  const p = ce(
    () => ({ ...Ye, ...r }),
    [r]
  ), [v, y] = $(() => Tn(p, i)), [S, x] = $(
    () => Xt(v.mode)
  ), [k, D] = $(a), [B, T] = $(s);
  de(() => {
    const K = Ze(v);
    x(K), pl(v, i);
  }, [v, i]), de(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const K = window.matchMedia("(prefers-color-scheme: dark)"), Y = () => {
      if (v.mode === "system") {
        const se = Ze(v);
        x(se);
      }
    };
    return K.addEventListener("change", Y), () => K.removeEventListener("change", Y);
  }, [v]), de(() => {
    if (!i || typeof window > "u") return;
    const K = (Y) => {
      (Y.key === Ja || Y.key === Fr) && y(Tn(p, !0));
    };
    return window.addEventListener("storage", K), () => window.removeEventListener("storage", K);
  }, [i, p]);
  const N = he(
    (K, Y) => {
      uc(() => {
        y((se) => {
          const P = { ...se, mode: K };
          return Ze(P), P;
        });
      }, Y);
    },
    []
  ), w = he(
    (K) => {
      const se = Xt(v.mode) === "dark" ? "light" : "dark", P = Xt("system");
      N(se === P ? "system" : se, K);
    },
    [v.mode, N]
  ), C = he((K) => {
    y((Y) => ({ ...Y, brand: K, customBrandColor: void 0 }));
  }, []), I = he((K) => {
    y((Y) => ({ ...Y, customBrandColor: K }));
  }, []), A = he((K) => {
    y((Y) => ({ ...Y, density: K }));
  }, []), E = he((K) => {
    y((Y) => ({ ...Y, radius: K }));
  }, []), O = he((K) => {
    y((Y) => ({ ...Y, fontScale: K }));
  }, []), X = he((K) => {
    y((Y) => ({ ...Y, visualMode: K }));
  }, []), Z = he((K) => {
    y((Y) => ({ ...Y, componentSize: K }));
  }, []), R = he((K) => {
    y((Y) => ({ ...Y, motion: K }));
  }, []), z = he((K) => {
    y((Y) => ({ ...Y, ...K }));
  }, []), W = he(() => {
    y(p), D(a), T(s);
  }, [p, a, s]), V = ce(
    () => ({
      theme: v,
      resolvedTheme: S,
      pageTransition: k,
      watermarkText: n,
      watermarkEnabled: B,
      setThemeMode: N,
      toggleTheme: w,
      setBrand: C,
      setCustomBrandColor: I,
      setDensity: A,
      setRadius: E,
      setFontScale: O,
      setVisualMode: X,
      setComponentSize: Z,
      setMotion: R,
      updateTheme: z,
      setPageTransition: D,
      setWatermarkEnabled: T,
      resetTheme: W,
      toast: l ?? Za,
      uploadAdapter: d,
      dictAdapter: b,
      permissionAdapter: f,
      captchaAdapter: h,
      iconRegistry: g,
      defaultDrawerCascadeMode: m
    }),
    [
      v,
      S,
      k,
      n,
      B,
      N,
      w,
      C,
      I,
      A,
      E,
      O,
      X,
      Z,
      R,
      z,
      W,
      l,
      d,
      b,
      f,
      h,
      g,
      m
    ]
  );
  return /* @__PURE__ */ o(xs.Provider, { value: V, children: [
    t,
    !l && /* @__PURE__ */ e(fl, { ...c }),
    /* @__PURE__ */ e(gs, {})
  ] });
};
function Ge() {
  const t = Un(xs);
  return t || {
    theme: Ye,
    resolvedTheme: Xt(Ye.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Ze({ ...Ye, mode: r });
    },
    toggleTheme: () => {
      const r = Xt(Ye.mode) === "dark" ? "light" : "dark";
      Ze({ ...Ye, mode: r });
    },
    setBrand: (r) => {
      Ze({ ...Ye, brand: r });
    },
    setCustomBrandColor: (r) => {
      Ze({ ...Ye, customBrandColor: r });
    },
    setDensity: (r) => {
      Ze({ ...Ye, density: r });
    },
    setRadius: (r) => {
      Ze({ ...Ye, radius: r });
    },
    setFontScale: (r) => {
      Ze({ ...Ye, fontScale: r });
    },
    setVisualMode: (r) => {
      Ze({ ...Ye, visualMode: r });
    },
    setComponentSize: (r) => {
      Ze({ ...Ye, componentSize: r });
    },
    setMotion: (r) => {
      Ze({ ...Ye, motion: r });
    },
    updateTheme: (r) => {
      Ze({ ...Ye, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Ze(Ye);
    },
    toast: Za,
    iconRegistry: {}
  };
}
function pe(t, r = "sm") {
  const { theme: a } = Ge();
  return t ?? a.componentSize ?? r;
}
function oe(t) {
  const { theme: r } = Ge();
  return t ?? r.motion ?? "smooth";
}
function hl(t) {
  const r = Ge();
  return t ?? r.defaultDrawerCascadeMode ?? "adjacent";
}
const hr = {
  Activity: Fi,
  AlertCircle: At,
  AlertOctagon: $i,
  AlertTriangle: Ot,
  BarChart2: Oi,
  BarChart3: ji,
  Bell: Pi,
  BellRing: zi,
  BookMarked: Ri,
  Boxes: Li,
  Building2: Bi,
  Calendar: $a,
  CalendarCheck: Di,
  Camera: Ai,
  Check: He,
  CheckCircle: _i,
  CheckCircle2: Ct,
  CheckSquare: Ei,
  CircleDollarSign: Ti,
  Clock: zr,
  Coins: Mi,
  Compass: rs,
  Copy: ar,
  Cpu: Ii,
  CreditCard: Si,
  Database: Ci,
  Download: ts,
  Edit: ki,
  Edit3: wa,
  Eye: rr,
  FileCheck: Ni,
  FileClock: wi,
  FileSpreadsheet: yi,
  FileText: xi,
  Flame: gi,
  Folder: vi,
  FolderGit2: hi,
  FolderOpen: pi,
  FolderPlus: fi,
  FolderTree: mi,
  Globe: ui,
  Globe2: bi,
  Handshake: di,
  HardDrive: li,
  Headphones: ci,
  HelpCircle: yr,
  History: ii,
  Home: oi,
  Image: es,
  Info: wr,
  Key: si,
  KeyRound: Qn,
  Layers: Jn,
  LayoutDashboard: ni,
  LayoutGrid: ai,
  LineChart: ri,
  Link2: ti,
  ListChecks: ei,
  ListOrdered: Qo,
  Lock: Jo,
  MapPin: Zo,
  Megaphone: qo,
  Menu: Zn,
  MessageCircle: Xo,
  MessageSquare: Yo,
  MessageSquareQuote: Vo,
  MessageSquareText: Go,
  MessagesSquare: Uo,
  Minus: qr,
  Monitor: qn,
  MoreHorizontal: Oa,
  Network: Ko,
  Package: Ho,
  Palette: Xn,
  PanelLeft: Wo,
  PanelTop: Fo,
  Pause: $o,
  Phone: Oo,
  PhoneCall: jo,
  PieChart: Po,
  Play: Yn,
  Plus: ja,
  PlusCircle: zo,
  Radio: Ro,
  Receipt: Lo,
  RefreshCw: tr,
  RotateCcw: St,
  RotateCw: Xr,
  ScrollText: Bo,
  Search: ct,
  Send: Do,
  Server: Ao,
  Settings: _o,
  Share: Eo,
  Share2: To,
  Shield: Mo,
  ShieldAlert: Yr,
  ShieldCheck: Pa,
  ShoppingBag: Io,
  ShoppingCart: So,
  Sliders: Co,
  SlidersHorizontal: ya,
  Smartphone: ko,
  Sparkles: Nr,
  Star: No,
  StarOff: wo,
  Store: yo,
  Tag: xo,
  Tags: go,
  Terminal: vo,
  Ticket: ho,
  Timer: po,
  Trash: fo,
  Trash2: er,
  TrendingUp: mo,
  Unlock: uo,
  Upload: Vn,
  User: bo,
  UserCheck: lo,
  UserCog: co,
  Users: io,
  Video: oo,
  Wallet: so,
  Wrench: no,
  X: Ue,
  XCircle: ao,
  Zap: ro
}, fa = {
  dashboard: "LayoutDashboard",
  home: "Home",
  article: "FileText",
  articleList: "ListOrdered",
  articles: "FileText",
  file: "FileText",
  tag: "Tag",
  tags: "Tags",
  site: "Globe",
  globe: "Globe",
  friend: "Link2",
  news: "MessageSquare",
  message: "MessageSquare",
  config: "SlidersHorizontal",
  system: "Settings",
  settings: "Settings",
  menu: "Menu",
  role: "ShieldCheck",
  user: "Users",
  users: "Users",
  tenant: "Building2",
  report: "BarChart3",
  chart: "BarChart3",
  data: "Database",
  database: "Database",
  order: "ShoppingBag",
  wallet: "Wallet",
  card: "CreditCard",
  money: "CircleDollarSign",
  ip: "Network",
  monitor: "Activity",
  log: "ScrollText",
  quartz: "Clock",
  server: "Server",
  cache: "Layers",
  layers: "Layers",
  druid: "Cpu",
  task: "CheckSquare",
  table: "ListChecks",
  components: "Boxes",
  layout: "LayoutGrid",
  sidebar: "PanelLeft",
  topnav: "PanelTop",
  palette: "Palette",
  sparkles: "Sparkles",
  bell: "Bell",
  search: "Search",
  lock: "Lock",
  key: "KeyRound",
  terminal: "Terminal",
  wrench: "Wrench",
  monitorScreen: "Monitor",
  check: "CheckCircle2",
  alert: "AlertCircle",
  // Element UI 旧版图标名兼容映射
  "s-tools": "Settings",
  setting: "Settings",
  tools: "Wrench",
  "s-custom": "Users",
  "user-solid": "UserCheck",
  "s-check": "ShieldCheck",
  "s-claim": "ShieldAlert",
  "s-operation": "SlidersHorizontal",
  "s-management": "Sliders",
  "s-goods": "Boxes",
  goods: "Package",
  "s-order": "ShoppingBag",
  "s-shop": "Store",
  "s-ticket": "Ticket",
  "shopping-bag-1": "ShoppingBag",
  "shopping-bag-2": "ShoppingBag",
  "shopping-cart-1": "ShoppingCart",
  "shopping-cart-2": "ShoppingCart",
  "shopping-cart-full": "ShoppingCart",
  "s-finance": "Coins",
  coin: "Coins",
  "bank-card": "CreditCard",
  "s-data": "BarChart3",
  "data-line": "LineChart",
  "data-board": "LayoutDashboard",
  "data-analysis": "BarChart2",
  "pie-chart": "PieChart",
  document: "FileText",
  "document-copy": "Copy",
  "document-checked": "FileCheck",
  tickets: "FileSpreadsheet",
  files: "FolderGit2",
  folder: "Folder",
  "folder-opened": "FolderOpen",
  "folder-add": "FolderPlus",
  "chat-round": "MessageCircle",
  "chat-line-round": "MessageSquareText",
  "chat-dot-round": "MessagesSquare",
  "message-solid": "BellRing",
  notice: "Bell",
  phone: "Phone",
  "phone-outline": "PhoneCall",
  mobile: "Smartphone",
  service: "Headphones",
  picture: "Image",
  "picture-outline": "Image",
  camera: "Camera",
  "video-camera": "Video",
  "video-play": "Play",
  "video-pause": "Pause",
  unlock: "Unlock",
  edit: "Edit3",
  "edit-outline": "Edit",
  delete: "Trash2",
  "delete-solid": "Trash",
  view: "Eye",
  plus: "Plus",
  "circle-plus": "PlusCircle",
  minus: "Minus",
  "circle-check": "CheckCircle",
  close: "X",
  "circle-close": "XCircle",
  refresh: "RefreshCw",
  "refresh-right": "RotateCw",
  "refresh-left": "RotateCcw",
  upload: "Upload",
  download: "Download",
  link: "Link2",
  connection: "Share2",
  share: "Share",
  more: "MoreHorizontal",
  time: "Clock",
  timer: "Timer",
  date: "Calendar",
  "platform-eleme": "Layers",
  eleme: "Globe",
  "s-platform": "Globe",
  "s-home": "Home",
  house: "Home",
  "office-building": "Building2",
  location: "MapPin",
  guide: "Compass",
  help: "HelpCircle",
  question: "HelpCircle",
  info: "Info",
  warning: "AlertTriangle",
  "warning-outline": "AlertCircle",
  error: "AlertOctagon",
  success: "CheckCircle2",
  "s-cooperation": "Handshake",
  "s-promotion": "Megaphone",
  "s-release": "Send",
  "s-opportunity": "Zap",
  "star-on": "Star",
  "star-off": "StarOff"
}, En = [
  { keywords: ["客户", "用户管理", "人员"], iconName: "Users" },
  { keywords: ["订单", "交易", "购买"], iconName: "ShoppingBag" },
  { keywords: ["供应商", "上游", "厂商"], iconName: "Building2" },
  { keywords: ["代理商", "分销", "渠道"], iconName: "Network" },
  { keywords: ["白名单", "加白", "安全列表"], iconName: "ShieldCheck" },
  { keywords: ["套餐", "组合", "方案"], iconName: "Layers" },
  { keywords: ["活动", "折扣", "限时", "特惠"], iconName: "Flame" },
  { keywords: ["产品", "资源池", "网关"], iconName: "Server" },
  { keywords: ["实例", "节点", "ip分配"], iconName: "HardDrive" },
  { keywords: ["地区", "映射", "国家", "全球"], iconName: "Globe" },
  { keywords: ["钱包", "充值", "账户余额", "变动"], iconName: "Wallet" },
  { keywords: ["财务", "收入", "营收", "统计"], iconName: "TrendingUp" },
  { keywords: ["ip请求", "ip报表", "网络统计"], iconName: "Radio" },
  { keywords: ["流量", "消耗", "走势", "监控"], iconName: "Activity" },
  { keywords: ["日报", "每日汇总", "简报"], iconName: "CalendarCheck" },
  { keywords: ["提现", "打款", "结算"], iconName: "Coins" },
  { keywords: ["操作日志", "管理员日志"], iconName: "FileClock" },
  { keywords: ["登录日志", "行为日志"], iconName: "History" },
  { keywords: ["异常", "崩溃", "报错"], iconName: "AlertTriangle" },
  { keywords: ["定时", "调度", "quartz", "任务"], iconName: "Clock" },
  { keywords: ["字典", "常量", "数据项"], iconName: "BookMarked" },
  { keywords: ["网站", "站点", "品牌", "seo"], iconName: "Globe2" },
  { keywords: ["友链", "友情链接", "外链"], iconName: "Link2" },
  { keywords: ["说说", "动态", "心情"], iconName: "MessageSquareQuote" },
  { keywords: ["分类", "目录", "类目"], iconName: "FolderTree" },
  { keywords: ["标签", "tag"], iconName: "Tags" },
  { keywords: ["文章", "新闻", "资讯"], iconName: "FileText" },
  { keywords: ["菜单", "路由"], iconName: "Menu" },
  { keywords: ["接口", "api", "权限点"], iconName: "KeyRound" },
  { keywords: ["角色", "权限矩阵"], iconName: "Shield" },
  { keywords: ["参数", "配置", "设置", "系统管理"], iconName: "SlidersHorizontal" },
  { keywords: ["仪表盘", "大盘", "总览", "首页"], iconName: "LayoutDashboard" }
];
function vl(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const ys = {};
function Xb(t) {
  Object.assign(ys, t);
}
const zt = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: i
}) => {
  if (r) {
    const h = r.toLowerCase();
    for (const g of En)
      if (g.keywords.some((m) => h.includes(m))) {
        const m = hr[g.iconName];
        if (m)
          return /* @__PURE__ */ e(m, { size: a, strokeWidth: n, className: u("shrink-0", s) });
      }
  }
  const l = (t || "").replace(/^el-icon-/, "").trim(), c = l.replace(/^s-/, ""), d = fa[l] ?? fa[c] ?? fa[t];
  let b = (i == null ? void 0 : i[l]) ?? ys[l] ?? (d ? hr[d] : void 0) ?? hr[l] ?? (l ? hr[vl(l)] : void 0);
  if (!b && l) {
    const h = l.toLowerCase();
    for (const g of En)
      if (g.keywords.some((m) => h.includes(m))) {
        b = hr[g.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(b ?? rs, { size: a, strokeWidth: n, className: u("shrink-0", s) });
}, ws = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, gl = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, Bt = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", tt = je.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    prefix: i,
    prefixIcon: l,
    suffix: c,
    suffixIcon: d,
    allowClear: b,
    clearable: f,
    passwordToggle: h = !0,
    showPasswordLabel: g,
    hidePasswordLabel: m,
    showCount: p = !1,
    onClear: v,
    invalid: y = !1,
    id: S,
    type: x = "text",
    value: k,
    defaultValue: D,
    maxLength: B,
    onChange: T,
    disabled: N,
    readOnly: w,
    className: C,
    wrapperClassName: I,
    ...A
  }, E) => {
    const O = pe(t, "sm"), X = oe(r), Z = Fe(), R = S || Z, z = ue(null);
    Vr(E, () => z.current, []);
    const W = k !== void 0, [V, K] = $(
      () => D != null ? String(D) : ""
    ), [Y, se] = $(!1), q = x === "password" && h !== !1, j = q && Y ? "text" : x, ne = (W ? String(k ?? "") : V).length, te = ne > 0, M = !!((b ?? f) && te && !N && !w), le = !!(y || n), Ee = i ?? l, Be = c ?? d, me = (F) => {
      W || K(F.target.value), T == null || T(F);
    }, ve = he(
      (F) => {
        if (F.preventDefault(), F.stopPropagation(), N || w) return;
        W || K(""), v == null || v();
        const J = z.current;
        if (J && (J.value = "", J.focus()), T) {
          const we = J ?? { value: "" };
          T({
            target: we,
            currentTarget: we,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [N, w, W, v, T]
    ), ie = (M ? 1 : 0) + (q ? 1 : 0) + (Be ? 1 : 0), H = ie >= 3 ? "pr-20" : ie === 2 ? "pr-14" : ie === 1 ? "pr-9" : "pr-3", U = /\bw-(?!full\b)\S+/.test(C || ""), re = /* @__PURE__ */ o(
      "div",
      {
        className: u(
          "relative flex items-center",
          !U && "w-full",
          I
        ),
        children: [
          Ee && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-y-0 left-3 z-10 flex items-center text-[var(--abc-fg-muted)]", children: Ee }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: z,
              id: R,
              type: j,
              value: k,
              defaultValue: D,
              maxLength: B,
              onChange: me,
              disabled: N,
              readOnly: w,
              "data-motion": X,
              "aria-invalid": le || void 0,
              className: u(
                Bt,
                ws[O],
                Ee ? "pl-9" : "pl-3",
                H,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                j === "number" && ie > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                le && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                N && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                C
              ),
              ...A
            }
          ),
          (M || q || Be) && /* @__PURE__ */ o("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            M && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (F) => F.preventDefault(),
                onClick: ve,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
              }
            ),
            q && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: N,
                "data-testid": "password-toggle",
                "aria-label": Y ? m ?? "隐藏密码" : g ?? "显示密码",
                title: Y ? m ?? "隐藏密码" : g ?? "显示密码",
                onMouseDown: (F) => F.preventDefault(),
                onClick: (F) => {
                  F.preventDefault(), F.stopPropagation(), !N && se((J) => !J);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: Y ? /* @__PURE__ */ e(as, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5" })
              }
            ),
            Be && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: Be })
          ] })
        ]
      }
    );
    return !a && !n && !s && !p ? re : /* @__PURE__ */ o("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: R,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      re,
      (n || s || p) && /* @__PURE__ */ o("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        p && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: B !== void 0 ? `${ne}/${B}` : ne
          }
        )
      ] })
    ] });
  }
);
tt.displayName = "Input";
const Ea = ({
  value: t,
  defaultValue: r,
  onChange: a,
  min: n,
  max: s,
  step: i = 1,
  size: l,
  motion: c,
  disabled: d = !1,
  placeholder: b,
  invalid: f = !1,
  className: h
}) => {
  const g = pe(l, "sm"), m = oe(c), p = Fe(), [v, y] = $(r ?? null), S = t !== void 0 ? t : v, x = (k) => {
    let D = k;
    D !== null && Number.isFinite(D) ? (n !== void 0 && (D = Math.max(n, D)), s !== void 0 && (D = Math.min(s, D))) : D = null, t === void 0 && y(D), a == null || a(D);
  };
  return /* @__PURE__ */ o(
    "div",
    {
      "data-motion": m,
      className: u(
        "inline-flex w-full items-center overflow-hidden",
        Bt,
        ws[g],
        f && "border-[var(--abc-danger)]",
        d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
        h
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "减少数值",
            disabled: d || n !== void 0 && (S ?? 0) <= n,
            onClick: () => x((S ?? 0) - i),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(qr, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: p,
            type: "number",
            value: S ?? "",
            min: n,
            max: s,
            step: i,
            disabled: d,
            placeholder: b,
            onChange: (k) => {
              const D = k.target.value;
              x(D === "" ? null : Number(D));
            },
            className: "h-full w-full min-w-0 flex-1 bg-transparent px-2.5 text-center font-mono tabular-nums focus:outline-none"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "增加数值",
            disabled: d || s !== void 0 && (S ?? 0) >= s,
            onClick: () => x((S ?? 0) + i),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(ja, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Jr = je.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    showCount: i = !1,
    invalid: l = !1,
    id: c,
    value: d,
    defaultValue: b,
    maxLength: f,
    onChange: h,
    rows: g = 3,
    className: m,
    ...p
  }, v) => {
    const y = pe(t, "sm"), S = oe(r), x = Fe(), k = c || x, [D, B] = $(
      () => String(b ?? "").length
    ), T = d !== void 0 ? String(d ?? "").length : D, N = !!(l || n), C = /* @__PURE__ */ e(
      "textarea",
      {
        ref: v,
        id: k,
        rows: g,
        value: d,
        defaultValue: b,
        maxLength: f,
        onChange: (I) => {
          d === void 0 && B(I.target.value.length), h == null || h(I);
        },
        "data-motion": S,
        "aria-invalid": N || void 0,
        className: u(
          Bt,
          gl[y],
          "leading-relaxed resize-y",
          N && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          m
        ),
        ...p
      }
    );
    return !a && !n && !s && !i ? C : /* @__PURE__ */ o("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: k,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      C,
      (n || s || i) && /* @__PURE__ */ o("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        i && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "textarea-count",
            className: "ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums",
            children: f !== void 0 ? `${T}/${f}` : T
          }
        )
      ] })
    ] });
  }
);
Jr.displayName = "Textarea";
const _n = [
  { name: "LayoutDashboard", label: "控制大盘", category: "nav" },
  { name: "Home", label: "首页门户", category: "nav" },
  { name: "Menu", label: "菜单管理", category: "nav" },
  { name: "Compass", label: "业务导航", category: "nav" },
  { name: "Layers", label: "多级节点", category: "nav" },
  { name: "Globe", label: "全球站点", category: "nav" },
  { name: "Radio", label: "广播信号", category: "nav" },
  { name: "Activity", label: "实时监控", category: "nav" },
  { name: "Users", label: "用户管理", category: "user" },
  { name: "User", label: "个人中心", category: "user" },
  { name: "UserCheck", label: "实名认证", category: "user" },
  { name: "UserCog", label: "用户配置", category: "user" },
  { name: "ShieldCheck", label: "角色权限", category: "user" },
  { name: "Shield", label: "安全白名单", category: "user" },
  { name: "KeyRound", label: "接口鉴权", category: "user" },
  { name: "Building2", label: "租户与供应商", category: "user" },
  { name: "Network", label: "代理分销", category: "user" },
  { name: "ShoppingBag", label: "订单管理", category: "order" },
  { name: "ShoppingCart", label: "购物车", category: "order" },
  { name: "Store", label: "商城中心", category: "order" },
  { name: "Receipt", label: "账单票据", category: "order" },
  { name: "Wallet", label: "客户钱包", category: "order" },
  { name: "CircleDollarSign", label: "资金变动", category: "order" },
  { name: "Coins", label: "提现结算", category: "order" },
  { name: "TrendingUp", label: "营收增长", category: "order" },
  { name: "CreditCard", label: "支付充值", category: "order" },
  { name: "Ticket", label: "优惠折扣", category: "order" },
  { name: "BarChart3", label: "数据报表", category: "data" },
  { name: "BarChart2", label: "图表分析", category: "data" },
  { name: "LineChart", label: "趋势统计", category: "data" },
  { name: "PieChart", label: "占比分布", category: "data" },
  { name: "Database", label: "数据源", category: "data" },
  { name: "FileSpreadsheet", label: "报表明细", category: "data" },
  { name: "HardDrive", label: "实例资产", category: "data" },
  { name: "FileText", label: "文章管理", category: "content" },
  { name: "FolderTree", label: "分类目录", category: "content" },
  { name: "Tags", label: "标签库", category: "content" },
  { name: "Tag", label: "单标签", category: "content" },
  { name: "MessageSquare", label: "留言评论", category: "content" },
  { name: "MessageSquareQuote", label: "动态说说", category: "content" },
  { name: "Image", label: "图片媒体", category: "content" },
  { name: "Link2", label: "友情链接", category: "content" },
  { name: "BookMarked", label: "字典常量", category: "content" },
  { name: "Folder", label: "文件夹", category: "content" },
  { name: "Settings", label: "系统设置", category: "system" },
  { name: "SlidersHorizontal", label: "系统参数", category: "system" },
  { name: "Sliders", label: "配置中心", category: "system" },
  { name: "ScrollText", label: "系统日志", category: "system" },
  { name: "Clock", label: "定时调度", category: "system" },
  { name: "Server", label: "服务集群", category: "system" },
  { name: "Cpu", label: "系统监控", category: "system" },
  { name: "Flame", label: "营销活动", category: "system" },
  { name: "CheckSquare", label: "计划任务", category: "system" },
  { name: "Bell", label: "消息通知", category: "system" },
  { name: "Lock", label: "安全锁定", category: "system" },
  { name: "Search", label: "快速搜索", category: "tool" },
  { name: "Edit3", label: "编辑修改", category: "tool" },
  { name: "Trash2", label: "回收废弃", category: "tool" },
  { name: "Plus", label: "新增创建", category: "tool" },
  { name: "RefreshCw", label: "同步刷新", category: "tool" },
  { name: "Upload", label: "数据上传", category: "tool" },
  { name: "Download", label: "导出下载", category: "tool" },
  { name: "Eye", label: "浏览查看", category: "tool" },
  { name: "HelpCircle", label: "帮助支持", category: "tool" },
  { name: "Send", label: "消息推送", category: "tool" }
], xl = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], yl = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, wl = ({
  open: t,
  current: r,
  value: a,
  onClose: n,
  onSelect: s,
  onChange: i,
  placeholder: l = "点击选择菜单图标",
  clearable: c = !0,
  disabled: d = !1,
  size: b,
  motion: f,
  className: h
}) => {
  const g = pe(b, "sm"), m = oe(f), [p, v] = $(!1), [y, S] = $(""), [x, k] = $("all"), D = typeof t == "boolean", B = D ? t : p, T = a ?? r ?? "", N = () => {
    D ? n == null || n() : v(!1);
  }, w = (E) => {
    s == null || s(E), i == null || i(E), N();
  }, C = ce(() => {
    const E = y.trim();
    return _n.filter((O) => x !== "all" && O.category !== x ? !1 : E ? ht(`${O.label} ${O.name}`, E) : !0);
  }, [y, x]), I = ce(
    () => _n.find((E) => E.name.toLowerCase() === T.toLowerCase()),
    [T]
  ), A = /* @__PURE__ */ e(lt, { open: B, onClose: N, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ o("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        tt,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: y,
          prefix: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }),
          onChange: (E) => S(E.target.value)
        }
      ) }),
      T && /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(zt, { name: T, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: T })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: xl.map((E) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => k(E.id),
        className: u(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          x === E.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: E.label
      },
      E.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: C.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: C.map((E) => {
      const O = T === E.name;
      return /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: () => w(E.name),
          className: u(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            O ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            O && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              zt,
              {
                name: E.name,
                size: 20,
                className: u(
                  "transition-transform group-hover:scale-110",
                  O ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: E.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: E.name })
          ]
        },
        E.name
      );
    }) }) : /* @__PURE__ */ o("div", { className: "py-10 text-center text-xs text-[var(--abc-fg-muted)]", children: [
      /* @__PURE__ */ o("p", { children: [
        "未找到匹配 “",
        y,
        "” 的预设图标"
      ] }),
      y.trim() && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          onClick: () => w(y.trim()),
          className: "mt-3 inline-flex items-center gap-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] px-3 py-1.5 font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { children: "使用自定义图标名:" }),
            /* @__PURE__ */ e("span", { className: "font-mono font-semibold", children: y.trim() })
          ]
        }
      )
    ] }) })
  ] }) });
  return D ? A : /* @__PURE__ */ o(Re, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        role: "button",
        tabIndex: d ? -1 : 0,
        "data-motion": m,
        onClick: () => !d && v(!0),
        onKeyDown: (E) => {
          !d && (E.key === "Enter" || E.key === " ") && (E.preventDefault(), v(!0));
        },
        className: u(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          yl[g],
          Bt,
          d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          h
        ),
        children: [
          T ? /* @__PURE__ */ o("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(zt, { name: T, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: I ? `${I.label} (${T})` : T })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: l }),
          /* @__PURE__ */ o("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && T && !d && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (E) => {
                  E.stopPropagation(), s == null || s(""), i == null || i("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    A
  ] });
};
async function Qr(t) {
  if (typeof window > "u") return !1;
  if (typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.writeText == "function")
    try {
      return await navigator.clipboard.writeText(t), !0;
    } catch {
    }
  try {
    const r = document.createElement("textarea");
    r.value = t, r.setAttribute("readonly", ""), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.opacity = "0", document.body.appendChild(r), r.focus(), r.select();
    const a = document.execCommand("copy");
    return document.body.removeChild(r), a;
  } catch {
    return !1;
  }
}
const Nl = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, kl = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, Cl = ({
  text: t,
  displayText: r,
  children: a,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: i = !0,
  successMessage: l,
  successText: c,
  tooltip: d,
  onCopy: b,
  size: f,
  motion: h,
  className: g
}) => {
  const m = pe(f, "sm"), p = oe(h), { toast: v } = Ge(), [y, S] = $(!1), x = ue(null), k = c ?? l ?? "已复制到剪贴板";
  de(() => () => {
    x.current && clearTimeout(x.current);
  }, []);
  const D = he(
    async (N) => {
      N.stopPropagation(), N.preventDefault(), await Qr(t) ? (S(!0), v.success(k), b == null || b(t), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        S(!1), x.current = null;
      }, 1500)) : v.error("复制失败，请手动复制");
    },
    [t, k, b, v]
  ), B = d !== void 0 ? d : y ? k : "点击复制", T = y ? /* @__PURE__ */ e(
    He,
    {
      "data-testid": "copy-icon-check",
      className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]",
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ e(
    ar,
    {
      "data-testid": "copy-icon-copy",
      className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-colors group-hover:text-[var(--abc-primary)]",
      "aria-hidden": "true"
    }
  );
  return s ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      title: B,
      "aria-label": d || "复制",
      "data-motion": p,
      onClick: D,
      className: u(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        g
      ),
      children: T
    }
  ) : /* @__PURE__ */ o(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: B,
      "data-motion": p,
      onClick: D,
      onKeyDown: (N) => {
        (N.key === "Enter" || N.key === " ") && D(N);
      },
      className: u(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        Nl[m],
        i && "font-mono tabular-nums",
        g
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && T
      ]
    }
  );
}, Yt = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const i = pe(t, "sm"), l = oe(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": l,
      className: u(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        kl[i],
        a
      ),
      ...s,
      children: n
    }
  );
}, qb = ({
  value: t,
  title: r,
  copyLabel: a = "复制",
  copiedLabel: n = "已复制",
  successDuration: s = 1800,
  className: i,
  ...l
}) => {
  const [c, d] = $(!1), b = r || a;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": c ? n : b,
      title: c ? n : b,
      onClick: async (h) => {
        h.stopPropagation(), await Qr(t) && (d(!0), setTimeout(() => d(!1), s));
      },
      className: u(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] transition-all hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] cursor-pointer",
        c && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
        i
      ),
      ...l,
      children: c ? /* @__PURE__ */ e(He, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
    }
  );
}, Sl = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: i = "重置筛选条件",
  size: l,
  motion: c,
  compact: d = !1,
  className: b
}) => {
  const f = pe(l, "md"), h = oe(c), p = {
    xs: {
      container: "py-4 px-3",
      iconBox: "h-8 w-8 rounded-lg",
      iconSize: "h-4 w-4",
      title: "text-[11px] font-semibold",
      desc: "mt-0.5 text-[10px]",
      btnSize: "xs"
    },
    sm: {
      container: "py-6 px-4",
      iconBox: "h-10 w-10 rounded-xl",
      iconSize: "h-5 w-5",
      title: "text-xs font-semibold",
      desc: "mt-1 text-[11px]",
      btnSize: "xs"
    },
    md: {
      container: "py-10 px-4",
      iconBox: "h-14 w-14 rounded-2xl",
      iconSize: "h-6 w-6",
      title: "text-sm font-semibold",
      desc: "mt-1.5 text-xs",
      btnSize: "sm"
    },
    lg: {
      container: "py-16 px-6",
      iconBox: "h-20 w-20 rounded-3xl",
      iconSize: "h-8 w-8",
      title: "text-base font-semibold",
      desc: "mt-2 text-xs",
      btnSize: "md"
    }
  }[d ? "sm" : f];
  return /* @__PURE__ */ o(
    "div",
    {
      "data-testid": "empty-state",
      "data-motion": h,
      className: u(
        "flex flex-col items-center justify-center text-center select-none",
        p.container,
        h !== "none" && "abc-animate-fade-in",
        b
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "empty-state-icon",
            className: u(
              "flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]",
              p.iconBox
            ),
            children: a ?? /* @__PURE__ */ e(Wi, { className: p.iconSize })
          }
        ),
        t && /* @__PURE__ */ e(
          "h4",
          {
            "data-testid": "empty-state-title",
            className: u("mt-3 text-[var(--abc-fg)]", p.title),
            children: t
          }
        ),
        r && /* @__PURE__ */ e(
          "p",
          {
            "data-testid": "empty-state-description",
            className: u("max-w-sm leading-relaxed text-[var(--abc-fg-muted)]", p.desc),
            children: r
          }
        ),
        (n || s) && /* @__PURE__ */ e("div", { "data-testid": "empty-state-action", className: "mt-4 flex items-center justify-center gap-2", children: n ?? /* @__PURE__ */ e(
          ye,
          {
            variant: "secondary",
            size: p.btnSize,
            motion: h,
            icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: i
          }
        ) })
      ]
    }
  );
}, Il = {
  xs: {
    wrap: "text-[11px]",
    select: "h-6 px-1.5 text-[11px]",
    navBtn: "h-6 w-6",
    pageBtn: "h-6 min-w-6 px-1.5 text-[11px]",
    input: "h-6 w-9 text-[11px]"
  },
  sm: {
    wrap: "text-xs",
    select: "h-7 px-2 text-xs",
    navBtn: "h-7 w-7",
    pageBtn: "h-7 min-w-7 px-2 text-xs",
    input: "h-7 w-11 text-xs"
  },
  md: {
    wrap: "text-sm",
    select: "h-8 px-2.5 text-xs",
    navBtn: "h-8 w-8",
    pageBtn: "h-8 min-w-8 px-2.5 text-xs",
    input: "h-8 w-12 text-xs"
  },
  lg: {
    wrap: "text-sm",
    select: "h-9 px-3 text-sm",
    navBtn: "h-9 w-9",
    pageBtn: "h-9 min-w-9 px-3 text-sm",
    input: "h-9 w-14 text-sm"
  }
}, Wr = ({
  mode: t,
  current: r,
  currentPage: a,
  page: n,
  pageSize: s,
  size: i,
  controlSize: l,
  motion: c,
  total: d,
  pageSizeOptions: b = [10, 20, 50, 100],
  onChange: f,
  onPageChange: h,
  onSizeChange: g,
  onPageSizeChange: m,
  showTotal: p = !0,
  showQuickJumper: v = !0,
  className: y,
  hasNext: S,
  hasPrev: x,
  nextCursor: k,
  prevCursor: D,
  currentCursor: B,
  loadedCount: T,
  onNext: N,
  onPrev: w,
  onResetCursor: C,
  loading: I = !1
}) => {
  const A = r ?? a ?? n ?? 1, E = s ?? (typeof i == "number" ? i : void 0) ?? 10, O = pe(
    l ?? (typeof i == "string" ? i : void 0),
    "sm"
  ), X = oe(c), Z = Il[O], R = t ?? (d === void 0 && (S !== void 0 || x !== void 0 || N !== void 0) ? "cursor" : "offset"), z = (G) => {
    f == null || f(1, G), g == null || g(G), m == null || m(G);
  };
  if (R === "cursor")
    return /* @__PURE__ */ o(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": X,
        className: u(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          Z.wrap,
          y
        ),
        children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            p === !1 ? null : typeof p == "function" ? p(T ?? 0) : T !== void 0 ? /* @__PURE__ */ o("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: T }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            C && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: C,
                disabled: I || !x,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            b && b.length > 0 && g && /* @__PURE__ */ e(
              "select",
              {
                "aria-label": "每页条数",
                value: E,
                onChange: (G) => z(Number(G.target.value)),
                disabled: I,
                className: u(
                  "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none cursor-pointer",
                  Z.select
                ),
                children: b.map((G) => /* @__PURE__ */ o("option", { value: G, children: [
                  G,
                  " 条/页"
                ] }, G))
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !x || I,
                onClick: w,
                className: u(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  Z.navBtn
                ),
                children: [
                  /* @__PURE__ */ e(Pr, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "上一页" })
                ]
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": "下一页",
                disabled: !S || I,
                onClick: N,
                className: u(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  Z.navBtn
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "下一页" }),
                  /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ]
      }
    );
  const W = d ?? 0, V = Math.max(1, Math.ceil(W / Math.max(1, E))), [K, Y] = $(""), se = ue(null);
  if (W <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": X,
        className: u(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          Z.wrap,
          y
        ),
        children: /* @__PURE__ */ e("div", { children: p === !1 ? null : typeof p == "function" ? p(0) : /* @__PURE__ */ o("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const P = (G) => {
    const ne = Math.min(Math.max(1, G), V);
    ne !== A && (f == null || f(ne, E), h == null || h(ne));
  }, q = () => {
    const G = K.trim();
    if (!G) {
      se.current = null;
      return;
    }
    if (G === se.current) return;
    const ne = parseInt(G, 10);
    if (Number.isNaN(ne)) {
      Y(""), se.current = null;
      return;
    }
    const te = Math.min(Math.max(1, ne), V);
    se.current = G, Y(String(te)), P(te);
  }, j = [];
  if (V <= 7)
    for (let G = 1; G <= V; G++) j.push(G);
  else {
    j.push(1), A > 3 && j.push("...");
    const G = Math.max(2, A - 1), ne = Math.min(V - 1, A + 1);
    for (let te = G; te <= ne; te++) j.push(te);
    A < V - 2 && j.push("..."), j.push(V);
  }
  return /* @__PURE__ */ o(
    "div",
    {
      "data-motion": X,
      className: u(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        Z.wrap,
        y
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: p === !1 ? null : typeof p == "function" ? p(W) : /* @__PURE__ */ o("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: W }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "select",
            {
              "aria-label": "每页条数",
              value: E,
              onChange: (G) => z(Number(G.target.value)),
              className: u(
                "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none cursor-pointer",
                Z.select
              ),
              children: b.map((G) => /* @__PURE__ */ o("option", { value: G, children: [
                G,
                " 条/页"
              ] }, G))
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: A <= 1,
              onClick: () => P(A - 1),
              className: u(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                Z.navBtn
              ),
              children: /* @__PURE__ */ e(Pr, { className: "h-3.5 w-3.5" })
            }
          ),
          j.map(
            (G, ne) => G === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${ne}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => P(G),
                className: u(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  Z.pageBtn,
                  G === A ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: G
              },
              G
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: A >= V,
              onClick: () => P(A + 1),
              className: u(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                Z.navBtn
              ),
              children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
            }
          ),
          v && /* @__PURE__ */ o(
            "div",
            {
              "data-testid": "pagination-quick-jumper",
              className: "ml-1 flex items-center gap-1.5 text-[var(--abc-fg-muted)]",
              children: [
                /* @__PURE__ */ e("span", { children: "跳至" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "text",
                    inputMode: "numeric",
                    "aria-label": "快速跳转页码",
                    "data-testid": "pagination-quick-jumper-input",
                    value: K,
                    onChange: (G) => {
                      se.current = null, Y(G.target.value);
                    },
                    onKeyDown: (G) => {
                      G.key === "Enter" && (G.preventDefault(), q());
                    },
                    onBlur: q,
                    className: u(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:outline-none",
                      Z.input
                    )
                  }
                ),
                /* @__PURE__ */ e("span", { children: "页" })
              ]
            }
          )
        ] })
      ]
    }
  );
}, Zb = (t) => /* @__PURE__ */ e(Wr, { mode: "cursor", ...t }), Jb = (t) => /* @__PURE__ */ e(Wr, { ...t }), Ke = ({
  variant: t = "text",
  animation: r = "pulse",
  motion: a,
  width: n,
  height: s,
  className: i,
  style: l,
  children: c,
  ...d
}) => {
  const b = oe(a), f = b === "none" ? "none" : r, h = {
    ...l,
    ...n !== void 0 ? { width: typeof n == "number" ? `${n}px` : n } : {},
    ...s !== void 0 ? { height: typeof s == "number" ? `${s}px` : s } : {}
  };
  return /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-live": "polite",
      "data-motion": b,
      style: h,
      className: u(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && u("rounded-md", s === void 0 && "h-4"),
        f === "wave" && "abc-skeleton-wave skeleton-wave",
        f === "pulse" && "animate-pulse",
        i
      ),
      ...d,
      children: c
    }
  );
}, Qb = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ o(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-card",
    className: u(
      "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]",
      r
    ),
    ...a,
    children: [
      /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(Ke, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(Ke, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(Ke, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(Ke, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), eu = ({
  rows: t = 5,
  columns: r = 4,
  showHeader: a = !0,
  animation: n = "wave",
  className: s,
  ...i
}) => /* @__PURE__ */ e(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-table",
    className: u(
      "overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      s
    ),
    ...i,
    children: /* @__PURE__ */ o("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((l, c) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Ke,
        {
          variant: "text",
          width: c === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, c)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((l, c) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((d, b) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Ke,
        {
          variant: "text",
          width: `${Math.max(40, 85 - (c + b) % 4 * 15)}%`,
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-cell"
        }
      ) }, b)) }, c)) })
    ] })
  }
), tu = ({
  height: t = 288,
  animation: r = "wave",
  className: a,
  style: n,
  ...s
}) => /* @__PURE__ */ o(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-chart",
    style: { ...n, height: typeof t == "number" ? `${t}px` : t },
    className: u(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      a
    ),
    ...s,
    children: [
      /* @__PURE__ */ o("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(Ke, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(Ke, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((i, l) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        Ke,
        {
          variant: "rounded",
          height: `${i}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, l)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((i, l) => /* @__PURE__ */ e(Ke, { variant: "text", width: 36, height: 10, animation: r }, l)) })
    ]
  }
), Ns = {
  neutral: {
    tag: "bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800/90 dark:text-slate-200 dark:border-slate-600 shadow-2xs font-semibold ring-1 ring-slate-400/20 dark:ring-slate-600/50",
    dot: "bg-slate-500 dark:bg-slate-400"
  },
  primary: {
    tag: "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] border-transparent",
    dot: "bg-[var(--abc-primary)]"
  },
  success: {
    tag: "bg-[var(--abc-success-soft)] text-[var(--abc-success)] border-transparent",
    dot: "bg-[var(--abc-success)]"
  },
  warning: {
    tag: "bg-[var(--abc-warning-soft)] text-[var(--abc-warning)] border-transparent",
    dot: "bg-[var(--abc-warning)]"
  },
  danger: {
    tag: "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)] border-transparent",
    dot: "bg-[var(--abc-danger)]"
  },
  info: {
    tag: "bg-[var(--abc-info-soft)] text-[var(--abc-info)] border-transparent",
    dot: "bg-[var(--abc-info)]"
  },
  purple: {
    tag: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300 border-violet-500/20",
    dot: "bg-violet-500"
  },
  cyan: {
    tag: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300 border-cyan-500/20",
    dot: "bg-cyan-500"
  },
  orange: {
    tag: "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300 border-orange-500/20",
    dot: "bg-orange-500"
  },
  teal: {
    tag: "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border-teal-500/20",
    dot: "bg-teal-500"
  },
  pink: {
    tag: "bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300 border-pink-500/20",
    dot: "bg-pink-500"
  }
};
function Ml(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in Ns ? n : "neutral";
}
const Pt = ({
  tone: t,
  status: r,
  color: a,
  text: n,
  label: s,
  dot: i = !0,
  pulse: l = !1,
  size: c,
  motion: d,
  className: b,
  children: f,
  ...h
}) => {
  const g = Ml(t, r, a), m = Ns[g], p = n ?? s ?? f, v = pe(c, "sm"), y = oe(d);
  return /* @__PURE__ */ o(
    "span",
    {
      "data-motion": y,
      className: u(
        "abc-motion-pop inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap",
        {
          xs: "px-1.5 py-0 text-[10px]",
          sm: "px-2 py-0.5 text-[11px]",
          md: "px-2.5 py-1 text-xs",
          lg: "px-3 py-1.5 text-sm"
        }[v],
        m.tag,
        b
      ),
      ...h,
      children: [
        i && /* @__PURE__ */ o("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
          l && /* @__PURE__ */ e(
            "span",
            {
              className: u(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                m.dot
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: u("relative inline-flex h-1.5 w-1.5 rounded-full", m.dot) })
        ] }),
        /* @__PURE__ */ e("span", { children: p })
      ]
    }
  );
}, ru = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  size: s,
  motion: i,
  children: l,
  className: c
}) => {
  const d = pe(s, "sm"), b = oe(i), f = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", h = a || t > 0, g = t > r ? `${r}+` : String(t), m = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, p = {
    xs: "h-4 min-w-4 px-1 text-[9px]",
    sm: "h-4.5 min-w-4.5 px-1.5 text-[10px]",
    md: "h-5 min-w-5 px-1.5 text-[11px]",
    lg: "h-6 min-w-6 px-2 text-xs"
  }, v = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, y = {
    xs: "h-3.5 min-w-3.5 px-1 text-[9px]",
    sm: "h-4 min-w-4 px-1 text-[10px]",
    md: "h-4.5 min-w-4.5 px-1.5 text-[11px]",
    lg: "h-5 min-w-5 px-1.5 text-xs"
  };
  return l ? /* @__PURE__ */ o("span", { "data-motion": b, className: u("relative inline-flex shrink-0", c), children: [
    l,
    h && (a ? /* @__PURE__ */ e(
      "span",
      {
        className: u(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          v[d],
          f
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: u(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          y[d],
          f
        ),
        children: g
      }
    ))
  ] }) : h ? a ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": b,
      className: u("abc-motion-pop inline-block rounded-full", m[d], f, c)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": b,
      className: u(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        p[d],
        f,
        c
      ),
      children: g
    }
  ) : null;
}, Tl = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, El = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const i = pe(a, "sm"), l = oe(n), [c, d] = $(!1), b = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": l,
      className: u(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        Tl[i],
        s
      ),
      children: t && !c ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: r,
          onError: () => d(!0),
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ e("span", { children: b })
    }
  );
};
function au(t = {}) {
  return "";
}
const _l = ({
  variant: t = "default",
  dot: r = !1,
  className: a,
  children: n,
  ...s
}) => {
  const l = {
    default: "primary",
    secondary: "neutral",
    destructive: "danger",
    outline: "neutral",
    success: "success",
    warning: "warning",
    info: "info"
  }[t] ?? "neutral";
  return /* @__PURE__ */ e(
    Pt,
    {
      tone: l,
      dot: r,
      className: u(t === "outline" && "bg-transparent border-[var(--abc-border)]", a),
      ...s,
      children: n
    }
  );
};
_l.displayName = "Tag";
const Al = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Dl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, Bl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, Ll = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, Hr = ({
  as: t = "div",
  title: r,
  subtitle: a,
  extra: n,
  footer: s,
  size: i,
  padding: l,
  variant: c = "default",
  cover: d,
  statusRibbon: b,
  loading: f = !1,
  motion: h,
  hoverable: g = !1,
  className: m,
  bodyClassName: p,
  children: v,
  ...y
}) => {
  const S = t, x = pe(i, "md"), k = oe(h), D = l ?? x;
  return /* @__PURE__ */ o(
    S,
    {
      "data-motion": k,
      "data-size": x,
      className: u(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        Ll[c],
        g && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        m
      ),
      ...y,
      children: [
        d && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: d }),
        (r || n || b) && /* @__PURE__ */ o(
          "div",
          {
            className: u(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Dl[x]
            ),
            children: [
              /* @__PURE__ */ o("div", { className: "min-w-0", children: [
                r && /* @__PURE__ */ e(
                  "h3",
                  {
                    className: u(
                      "font-semibold text-[var(--abc-fg)] leading-snug",
                      x === "xs" ? "text-xs" : x === "lg" ? "text-base" : "text-sm"
                    ),
                    children: r
                  }
                ),
                a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
              ] }),
              (n || b) && /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
                b && /* @__PURE__ */ e(Pt, { tone: b.tone ?? "primary", size: "xs", dot: !1, children: b.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: u(Al[D], p), children: f ? /* @__PURE__ */ o("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(Ke, { width: "45%", height: 14, motion: k }),
          /* @__PURE__ */ e(Ke, { width: "90%", height: 12, motion: k }),
          /* @__PURE__ */ e(Ke, { width: "70%", height: 12, motion: k })
        ] }) : v }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: u(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              Bl[x]
            ),
            children: s
          }
        )
      ]
    }
  );
}, Rl = je.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-header",
      className: u("flex flex-col gap-1.5 p-6 border-b border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Rl.displayName = "CardHeader";
const zl = je.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "h3",
    {
      ref: a,
      "data-slot": "card-title",
      className: u("font-semibold leading-none tracking-tight text-[var(--abc-fg)] text-base", t),
      ...r
    }
  )
);
zl.displayName = "CardTitle";
const Pl = je.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "p",
    {
      ref: a,
      "data-slot": "card-description",
      className: u("text-sm text-[var(--abc-fg-muted)] leading-relaxed", t),
      ...r
    }
  )
);
Pl.displayName = "CardDescription";
const jl = je.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-content",
      className: u("p-6 pt-0", t),
      ...r
    }
  )
);
jl.displayName = "CardContent";
const Ol = je.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-footer",
      className: u("flex items-center p-6 pt-0 border-t border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Ol.displayName = "CardFooter";
const nu = ({
  orientation: t = "horizontal",
  label: r,
  className: a,
  ...n
}) => t === "vertical" ? /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    "aria-orientation": "vertical",
    className: u("mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle", a),
    ...n
  }
) : r ? /* @__PURE__ */ o(
  "div",
  {
    role: "separator",
    className: u("my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]", a),
    ...n,
    children: [
      /* @__PURE__ */ e("span", { className: "h-px flex-1 bg-[var(--abc-border)]" }),
      /* @__PURE__ */ e("span", { className: "shrink-0", children: r }),
      /* @__PURE__ */ e("span", { className: "h-px flex-1 bg-[var(--abc-border)]" })
    ]
  }
) : /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    className: u("my-3 h-px w-full bg-[var(--abc-border)]", a),
    ...n
  }
), $l = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Fl = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, su = ({
  direction: t = "horizontal",
  size: r,
  wrap: a = !1,
  align: n = "center",
  className: s,
  children: i,
  ...l
}) => {
  const c = pe(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Fl[n],
        $l[c],
        a && "flex-wrap",
        s
      ),
      ...l,
      children: i
    }
  );
}, Wl = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, ou = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: i,
  ...l
}) => {
  const c = pe(r, "md"), d = oe(a), b = ue(null), [f, h] = $({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: b,
      "data-motion": d,
      "data-size": c,
      onMouseMove: (g) => {
        var p;
        const m = (p = b.current) == null ? void 0 : p.getBoundingClientRect();
        m && h({ x: g.clientX - m.left, y: g.clientY - m.top, active: !0 });
      },
      onMouseLeave: () => h((g) => ({ ...g, active: !1 })),
      className: u(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        Wl[c],
        n && "abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md",
        s
      ),
      ...l,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": "true",
            className: u(
              "pointer-events-none absolute -inset-px",
              d !== "none" && "transition-opacity duration-[var(--abc-motion-base)]"
            ),
            style: {
              opacity: f.active ? 1 : 0,
              background: `radial-gradient(360px circle at ${f.x}px ${f.y}px, ${t}, transparent 75%)`
            }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: i })
      ]
    }
  );
}, An = ({ duration: t = 8, motion: r, className: a }) => {
  const n = oe(r);
  return n === "none" ? null : /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": n,
      className: u(
        "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        a
      ),
      children: /* @__PURE__ */ e(
        "div",
        {
          style: {
            offsetPath: "rect(0 auto auto 0 round 16px)",
            animation: `abc-border-beam ${t}s linear infinite`
          },
          className: "absolute aspect-square w-24 bg-gradient-to-l from-[var(--abc-primary)] via-[var(--abc-brand-400)] to-transparent opacity-80"
        }
      )
    }
  );
}, Dn = ({
  motion: t,
  className: r
}) => {
  const a = oe(t), n = a === "none";
  return /* @__PURE__ */ o(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": a,
      className: u("pointer-events-none absolute inset-0 overflow-hidden", r),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            style: n ? void 0 : { animation: "abc-aurora-drift 14s ease-in-out infinite" },
            className: "absolute -top-1/4 -left-1/5 h-[65%] w-[65%] rounded-full bg-[var(--abc-brand-500)]/20 blur-[96px]"
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            style: n ? void 0 : { animation: "abc-aurora-drift 18s ease-in-out infinite reverse" },
            className: "absolute -right-1/5 -bottom-1/4 h-[60%] w-[60%] rounded-full bg-indigo-500/20 blur-[110px]"
          }
        )
      ]
    }
  );
}, sr = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, Cr = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ea = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, ks = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, Qa = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, iu = ({
  title: t,
  value: r,
  prefix: a,
  suffix: n,
  trend: s,
  sparkline: i,
  icon: l,
  footer: c,
  loading: d = !1,
  hoverable: b = !0,
  size: f,
  motion: h,
  className: g,
  ...m
}) => {
  const p = pe(f, "md"), v = oe(h), y = Fe().replace(/:/g, ""), S = je.useMemo(() => {
    if (!i || i.length < 2) return null;
    const k = Math.min(...i), B = Math.max(...i) - k || 1, T = 120, N = 32, C = `M ${i.map((A, E) => {
      const O = E / (i.length - 1) * T, X = N - 4 - (A - k) / B * (N - 8);
      return `${O.toFixed(1)},${X.toFixed(1)}`;
    }).join(" L ")}`, I = `${C} L ${T},${N} L 0,${N} Z`;
    return { linePath: C, areaPath: I, width: T, height: N };
  }, [i]), x = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": v,
      "data-size": p,
      className: u(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        sr[p],
        b && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        g
      ),
      ...m,
      children: d ? /* @__PURE__ */ o("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(Ke, { width: "45%", height: 13, motion: v }),
          /* @__PURE__ */ e(Ke, { variant: "rounded", width: 30, height: 30, motion: v })
        ] }),
        /* @__PURE__ */ e(Ke, { width: "60%", height: 26, motion: v }),
        /* @__PURE__ */ e(Ke, { width: "80%", height: 18, motion: v })
      ] }) : /* @__PURE__ */ o(Re, { children: [
        /* @__PURE__ */ o("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          l && /* @__PURE__ */ e(
            "span",
            {
              className: u(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                Qa[p]
              ),
              children: l
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: ks[p], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || S) && /* @__PURE__ */ o("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ o(
              "span",
              {
                className: u(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  x
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(ns, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(Hi, { className: "h-3 w-3" }) : /* @__PURE__ */ e(qr, { className: "h-3 w-3" }),
                  s.value
                ]
              }
            ),
            s.label && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: s.label })
          ] }),
          S && /* @__PURE__ */ o(
            "svg",
            {
              viewBox: `0 0 ${S.width} ${S.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ o("linearGradient", { id: `abc-spark-${y}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "var(--abc-primary)", stopOpacity: "0.28" }),
                  /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "var(--abc-primary)", stopOpacity: "0" })
                ] }) }),
                /* @__PURE__ */ e("path", { d: S.areaPath, fill: `url(#abc-spark-${y})` }),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: S.linePath,
                    fill: "none",
                    stroke: "var(--abc-primary)",
                    strokeWidth: "1.75",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              ]
            }
          )
        ] }),
        c && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: c })
      ] })
    }
  );
}, Cs = Gn(null), Hl = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, cu = ({
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: n,
  disabled: s = !1,
  size: i,
  motion: l,
  columns: c = 2,
  className: d,
  children: b
}) => {
  const f = Fe(), h = pe(i, "md"), g = oe(l), [m, p] = st({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), v = (y) => {
    if (!s)
      if (t) {
        const S = Array.isArray(m) ? m : [], k = S.includes(y) ? S.filter((D) => D !== y) : [...S, y];
        p(k);
      } else
        p(y);
  };
  return /* @__PURE__ */ e(
    Cs.Provider,
    {
      value: {
        multiple: t,
        value: m,
        disabled: s,
        size: h,
        motion: g,
        name: f,
        toggleValue: v
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          role: t ? "group" : "radiogroup",
          "data-motion": g,
          className: u("grid gap-3", Hl[c], d),
          children: b
        }
      )
    }
  );
}, lu = ({
  value: t,
  title: r,
  description: a,
  avatar: n,
  icon: s,
  extra: i,
  checked: l,
  defaultChecked: c = !1,
  onChange: d,
  disabled: b = !1,
  size: f,
  motion: h,
  className: g,
  children: m
}) => {
  const p = Un(Cs), v = pe(f ?? (p == null ? void 0 : p.size), "md"), y = oe(h ?? (p == null ? void 0 : p.motion)), S = !!(b || p != null && p.disabled), x = !!(p && t !== void 0), k = p && !p.multiple ? "radio" : "checkbox", [D, B] = st({
    value: l,
    defaultValue: c,
    onChange: d
  }), T = x ? p.multiple ? Array.isArray(p.value) && p.value.includes(t) : p.value === t : D, N = (w) => {
    S || (x ? p.toggleValue(t) : B(w));
  };
  return /* @__PURE__ */ o(
    "label",
    {
      "data-motion": y,
      "data-size": v,
      "data-checked": T ? "true" : "false",
      className: u(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        sr[v],
        T ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !S && !T && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        S ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1",
        g
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: k,
            name: p == null ? void 0 : p.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!T,
            disabled: S,
            onChange: (w) => N(w.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: u(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              Qa[v]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: u("font-semibold text-[var(--abc-fg)]", Cr[v]), children: r }),
            i && /* @__PURE__ */ e("span", { className: "shrink-0", children: i })
          ] }),
          a && /* @__PURE__ */ e("p", { className: u("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", ea[v]), children: a }),
          m && /* @__PURE__ */ e("div", { className: "mt-2", children: m })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: u(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              T ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(He, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, du = ({
  title: t,
  description: r,
  icon: a,
  tags: n,
  extra: s,
  href: i,
  target: l,
  disabled: c = !1,
  onClick: d,
  size: b,
  motion: f,
  className: h
}) => {
  const g = pe(b, "md"), m = oe(f), p = !!((i || d) && !c), v = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ o(
    "article",
    {
      "data-motion": m,
      "data-size": g,
      className: u(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        sr[g],
        p && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
        c && "opacity-55 cursor-not-allowed",
        h
      ),
      children: [
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ o("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              a && /* @__PURE__ */ e(
                "span",
                {
                  className: u(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    Qa[g]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: u("min-w-0 truncate", Cr[g]), children: i && !c ? /* @__PURE__ */ e(
                "a",
                {
                  href: i,
                  target: l,
                  rel: l === "_blank" ? "noreferrer" : void 0,
                  onClick: () => d == null ? void 0 : d(),
                  className: u(v, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : d && !c ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: d,
                  className: u(v, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          r && /* @__PURE__ */ e("p", { className: u("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", ea[g]), children: r })
        ] }),
        n && n.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-1.5", children: n.map((y) => /* @__PURE__ */ e(
          "span",
          {
            className: "rounded-[var(--abc-radius-xs)] border border-[var(--abc-border-subtle)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--abc-fg-secondary)]",
            children: y
          },
          y
        )) })
      ]
    }
  );
}, Kl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, bu = ({
  title: t,
  subtitle: r,
  icon: a,
  extra: n,
  defaultOpen: s = !0,
  open: i,
  onOpenChange: l,
  size: c,
  motion: d,
  className: b,
  bodyClassName: f,
  children: h
}) => {
  const g = pe(c, "md"), m = oe(d), p = Fe(), [v, y] = st({
    value: i,
    defaultValue: s,
    onChange: l
  });
  return /* @__PURE__ */ o(
    "section",
    {
      "data-motion": m,
      "data-size": g,
      className: u(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        b
      ),
      children: [
        /* @__PURE__ */ o("div", { className: u("flex items-center justify-between gap-3", Kl[g]), children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              "aria-expanded": v,
              "aria-controls": p,
              onClick: () => y(!v),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  pt,
                  {
                    className: u(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      v ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: a }),
                /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: u("truncate font-semibold text-[var(--abc-fg)]", Cr[g]), children: t }),
                  r && /* @__PURE__ */ e("div", { className: "truncate text-[11px] text-[var(--abc-fg-muted)]", children: r })
                ] })
              ]
            }
          ),
          n && /* @__PURE__ */ e(
            "div",
            {
              onClick: (S) => S.stopPropagation(),
              className: "flex shrink-0 items-center gap-2",
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { id: p, className: "abc-collapse-grid", "data-open": v, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ e(
          "div",
          {
            className: u(
              "border-t border-[var(--abc-border)]",
              sr[g],
              f
            ),
            children: h
          }
        ) }) })
      ]
    }
  );
}, uu = ({
  tier: t,
  price: r,
  period: a = "/ 月",
  description: n,
  features: s,
  recommended: i = !1,
  badge: l = "推荐方案",
  ctaText: c = "选择此方案",
  disabled: d = !1,
  loading: b = !1,
  onSelect: f,
  size: h,
  motion: g,
  className: m
}) => {
  const p = pe(h, "md"), v = oe(g);
  return /* @__PURE__ */ o(
    "article",
    {
      "data-motion": v,
      "data-size": p,
      className: u(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        sr[p],
        i ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        m
      ),
      children: [
        /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: u("font-bold text-[var(--abc-fg)]", Cr[p]), children: t }),
            i && l && /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(Nr, { className: "h-2.5 w-2.5" }),
              l
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: u("mt-1.5 text-[var(--abc-fg-muted)]", ea[p]), children: n }),
          /* @__PURE__ */ o("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: u("font-extrabold text-[var(--abc-fg)]", ks[p]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((y, S) => {
            const x = typeof y == "string" ? { text: y, included: !0 } : y, k = x.included !== !1;
            return /* @__PURE__ */ o(
              "li",
              {
                className: u(
                  "flex items-start gap-2 text-xs",
                  k ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  k ? /* @__PURE__ */ e(He, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(Ue, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: x.text })
                ]
              },
              S
            );
          }) })
        ] }),
        f && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          ye,
          {
            variant: i ? "primary" : "secondary",
            size: p,
            motion: v,
            block: !0,
            disabled: d,
            loading: b,
            onClick: f,
            children: c
          }
        ) })
      ]
    }
  );
}, Ul = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, mu = ({
  columns: t = 3,
  gap: r,
  className: a,
  children: n,
  ...s
}) => {
  const i = pe(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "grid auto-rows-[minmax(148px,auto)]",
        Ul[t],
        Gl[i],
        a
      ),
      ...s,
      children: n
    }
  );
}, Gl = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, fu = ({
  colSpan: t = 1,
  rowSpan: r = 1,
  eyebrow: a,
  title: n,
  description: s,
  icon: i,
  graphic: l,
  footer: c,
  hoverable: d = !0,
  size: b,
  motion: f,
  className: h,
  children: g,
  ...m
}) => {
  const p = pe(b, "md"), v = oe(f), y = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", S = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ o(
    "article",
    {
      "data-motion": v,
      "data-size": p,
      className: u(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        sr[p],
        y,
        S,
        d && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        h
      ),
      ...m,
      children: [
        /* @__PURE__ */ o("div", { children: [
          (a || i) && /* @__PURE__ */ o("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            i && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: i })
          ] }),
          /* @__PURE__ */ e("h3", { className: u("font-bold text-[var(--abc-fg)]", Cr[p]), children: n }),
          s && /* @__PURE__ */ e("p", { className: u("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", ea[p]), children: s })
        ] }),
        l && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: l }),
        g,
        c && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, Vl = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, pu = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const i = pe(a, "sm"), l = oe(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": l,
      className: u("abc-breadcrumb", Vl[i], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((c, d) => {
        const b = d === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ o(
          "a",
          {
            href: c.href ?? "#",
            "aria-current": b ? "page" : void 0,
            onClick: (f) => {
              var h;
              (!c.href || c.href === "#" || c.onClick) && f.preventDefault(), b || (h = c.onClick) == null || h.call(c, f);
            },
            className: u(
              "abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              b ? "font-semibold text-[var(--abc-fg)] cursor-default no-underline" : "text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer"
            ),
            children: [
              c.icon && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: c.icon }),
              /* @__PURE__ */ e("span", { children: c.label })
            ]
          }
        ) }, c.key ?? d);
      }) })
    }
  );
}, Yl = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, Xl = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, hu = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: i,
  onChange: l,
  className: c
}) => {
  const d = n === "vertical", b = pe(s, "sm"), f = oe(i);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": f,
      className: u(
        "m-0 list-none p-0",
        d ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        c
      ),
      children: t.map((h, g) => {
        const m = h.status ?? (g < r ? "finish" : g === r ? a : "wait"), p = !!(l && !h.disabled), v = g === t.length - 1, y = m === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : m === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : m === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ o(
          "li",
          {
            className: u(
              "relative flex min-w-0",
              d ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  disabled: !p,
                  onClick: () => p && (l == null ? void 0 : l(g)),
                  className: u(
                    "abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]",
                    p ? "cursor-pointer" : "cursor-default"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: u(
                          "abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors",
                          Yl[b],
                          y
                        ),
                        children: h.icon ? h.icon : m === "finish" ? /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5" }) : m === "error" ? /* @__PURE__ */ e(At, { className: "h-3.5 w-3.5" }) : g + 1
                      }
                    ),
                    /* @__PURE__ */ o("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: u(
                            "block font-semibold",
                            Xl[b],
                            m === "wait" ? "text-[var(--abc-fg-muted)]" : m === "error" ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg)]"
                          ),
                          children: h.title
                        }
                      ),
                      h.description && /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: h.description })
                    ] })
                  ]
                }
              ),
              !v && !d && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: u(
                    "hidden h-px flex-1 sm:block",
                    g < r ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border)]"
                  )
                }
              )
            ]
          },
          h.key ?? g
        );
      })
    }
  );
}, ql = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, Zl = {
  xs: "px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]",
  sm: "px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]",
  md: "px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]",
  lg: "px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]"
};
function vu({
  options: t,
  value: r,
  onChange: a,
  onValueChange: n,
  disabled: s = !1,
  size: i,
  motion: l,
  block: c = !1,
  className: d,
  ...b
}) {
  const f = pe(i, "sm"), h = oe(l), g = a ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-slot": "segmented-control",
      "data-motion": h,
      className: u(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        c ? "flex w-full" : "inline-flex",
        ql[f],
        d
      ),
      ...b,
      children: t.map((m) => {
        const p = m.value === r, v = s || !!m.disabled;
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": p,
            disabled: v,
            onClick: () => g == null ? void 0 : g(m.value),
            className: u(
              "inline-flex cursor-pointer select-none items-center justify-center gap-1.5 font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              c && "flex-1",
              Zl[f],
              p ? "bg-[var(--abc-bg-surface)] font-semibold text-[var(--abc-primary)] shadow-2xs ring-1 ring-[var(--abc-border)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              m.icon,
              /* @__PURE__ */ e("span", { children: m.label }),
              m.badge
            ]
          },
          String(m.value)
        );
      })
    }
  );
}
const Je = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: i,
  className: l
}) => {
  const c = oe(s), [d, b] = $(!1), [f, h] = $(!1), g = Fe(), m = ue(null), p = ue(null), v = ue(null), y = ue(null), S = he(() => {
    typeof window > "u" || (v.current !== null && (window.clearTimeout(v.current), v.current = null), y.current !== null && (window.clearTimeout(y.current), y.current = null));
  }, []);
  de(() => () => S(), [S]);
  const x = he(
    (E = !1) => {
      a || !t || (S(), h(!1), E || n <= 0 || typeof window > "u" ? b(!0) : v.current = window.setTimeout(() => {
        b(!0), v.current = null;
      }, n));
    },
    [a, t, n, S]
  ), k = he(() => {
    if (S(), typeof window > "u") {
      b(!1);
      return;
    }
    y.current = window.setTimeout(() => {
      b(!1), y.current = null;
    }, 60);
  }, [S]), D = he(() => {
    S(), h(!0), b(!1);
  }, [S]), { isMounted: B, isVisible: T } = $t(
    d && !a && !!t,
    c === "none" || f ? 0 : 100
  ), { style: N, actualSide: w, arrowOffset: C, portalContainer: I } = kr({
    open: B,
    triggerRef: m,
    floatingRef: p,
    placement: r,
    offset: 8
  });
  if (de(() => {
    if (!d) return;
    const E = (O) => {
      O.key === "Escape" && D();
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [d, D]), !t || a) return /* @__PURE__ */ e(Re, { children: i });
  const A = w === "top" ? { left: `${C}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "bottom" ? { left: `${C}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "left" ? { top: `${C}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${C}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ o(Re, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: m,
        "data-motion": c,
        "aria-describedby": d ? g : void 0,
        onMouseEnter: () => x(!1),
        onMouseLeave: k,
        onFocus: () => x(!0),
        onBlur: D,
        onPointerDown: D,
        className: u("inline-flex items-center", l),
        children: i
      }
    ),
    B && I && dt(
      /* @__PURE__ */ o(
        "div",
        {
          ref: p,
          id: g,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": c,
          "data-placement": w,
          style: N,
          className: u(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            c !== "none" && (T ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "relative z-10 block", children: t }),
            /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                style: A,
                className: "pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
              }
            )
          ]
        }
      ),
      I
    )
  ] });
}, Qt = ({
  items: t = [],
  content: r,
  align: a,
  placement: n,
  trigger: s = "click",
  open: i,
  defaultOpen: l = !1,
  onOpenChange: c,
  motion: d,
  children: b,
  className: f,
  panelClassName: h
}) => {
  const g = oe(d), [m, p] = st({
    value: i,
    defaultValue: l,
    onChange: c
  }), { isMounted: v, isVisible: y } = $t(m, g === "none" ? 0 : 140), S = ue(null), x = ue(null), k = ue(null), D = Fe(), B = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: T, actualSide: N, portalContainer: w } = kr({
    open: v,
    triggerRef: S,
    floatingRef: x,
    placement: B,
    offset: 6
  }), C = he(() => {
    k.current !== null && typeof window < "u" && (window.clearTimeout(k.current), k.current = null);
  }, []);
  de(() => () => C(), [C]);
  const I = he(() => {
    s === "hover" && (C(), p(!0));
  }, [s, C, p]), A = he(() => {
    s === "hover" && (C(), typeof window < "u" && (k.current = window.setTimeout(() => {
      p(!1), k.current = null;
    }, 140)));
  }, [s, C, p]), E = he((z) => {
    var Y;
    const W = x.current;
    if (!W) return;
    const V = Array.from(
      W.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (V.length === 0) return;
    const K = (z % V.length + V.length) % V.length;
    (Y = V[K]) == null || Y.focus();
  }, []);
  de(() => {
    if (!m) return;
    const z = (V) => {
      var Y, se;
      const K = V.target;
      (Y = S.current) != null && Y.contains(K) || (se = x.current) != null && se.contains(K) || p(!1);
    }, W = (V) => {
      var K;
      if (V.key === "Escape") {
        V.preventDefault(), V.stopPropagation(), p(!1);
        const Y = (K = S.current) == null ? void 0 : K.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        Y == null || Y.focus();
      }
    };
    return document.addEventListener("mousedown", z), document.addEventListener("keydown", W, !0), () => {
      document.removeEventListener("mousedown", z), document.removeEventListener("keydown", W, !0);
    };
  }, [m, p]);
  const O = !r, X = (z) => {
    z.key === "ArrowDown" ? (z.preventDefault(), p(!0), O && typeof window < "u" && window.requestAnimationFrame(() => E(0))) : (z.key === "Enter" || z.key === " ") && z.target === z.currentTarget && (z.preventDefault(), p(!m));
  }, Z = (z) => {
    if (!O) return;
    const W = x.current;
    if (!W) return;
    const V = Array.from(
      W.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (V.length === 0) return;
    const K = V.indexOf(document.activeElement);
    z.key === "ArrowDown" ? (z.preventDefault(), E(K < 0 ? 0 : K + 1)) : z.key === "ArrowUp" ? (z.preventDefault(), E(K <= 0 ? V.length - 1 : K - 1)) : z.key === "Home" ? (z.preventDefault(), E(0)) : z.key === "End" && (z.preventDefault(), E(V.length - 1));
  }, R = s === "hover" ? N === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : N === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : N === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ o(Re, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: S,
        "data-motion": g,
        onMouseEnter: I,
        onMouseLeave: A,
        className: u("inline-flex", f),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": m,
            "aria-controls": m ? D : void 0,
            "aria-haspopup": O ? "menu" : void 0,
            onClick: () => p(!m),
            onKeyDown: X,
            className: "inline-flex cursor-pointer items-center",
            children: b
          }
        )
      }
    ),
    v && w && dt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: x,
          id: D,
          role: O ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": g,
          "data-placement": N,
          style: T,
          onMouseEnter: I,
          onMouseLeave: A,
          onKeyDown: Z,
          className: u(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            R,
            g !== "none" && (y ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            h
          ),
          children: r || t.map(
            (z) => z.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, z.key) : /* @__PURE__ */ o(je.Fragment, { children: [
              z.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: z.disabled,
                  onClick: () => {
                    var W;
                    z.disabled || ((W = z.onClick) == null || W.call(z), p(!1));
                  },
                  className: u(
                    "abc-motion-control flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
                    z.danger ? "text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    z.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    z.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: z.icon }),
                    /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: z.label })
                  ]
                }
              )
            ] }, z.key)
          )
        }
      ),
      w
    )
  ] });
}, Ss = ({
  title: t,
  content: r,
  align: a,
  placement: n,
  panelClassName: s,
  ...i
}) => {
  const l = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    Qt,
    {
      ...i,
      placement: n ?? (l && l === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: u(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, Is = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, _a = ({
  label: t,
  htmlFor: r,
  required: a = !1,
  tooltip: n,
  error: s,
  helperText: i,
  extra: l,
  layout: c = "vertical",
  size: d,
  motion: b,
  className: f,
  children: h
}) => {
  const g = pe(d, "sm"), m = oe(b);
  return /* @__PURE__ */ o(
    "div",
    {
      "data-motion": m,
      className: u(
        c === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        f
      ),
      children: [
        (t || l) && /* @__PURE__ */ o(
          "div",
          {
            className: u(
              "flex items-center justify-between gap-2",
              c === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ o(
                "label",
                {
                  htmlFor: r,
                  className: u(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    Is[g]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(Je, { content: n, children: /* @__PURE__ */ e(yr, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
                  ]
                }
              ),
              l && /* @__PURE__ */ e("div", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
            ]
          }
        ),
        /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
          h,
          s ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] font-medium text-[var(--abc-danger)]", children: s }) : i && /* @__PURE__ */ e("p", { className: "mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: i })
        ] })
      ]
    }
  );
}, Jl = je.forwardRef(
  ({ className: t, size: r = "sm", required: a, children: n, ...s }, i) => /* @__PURE__ */ o(
    "label",
    {
      ref: i,
      className: u(
        "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
        Is[r] || "text-xs",
        t
      ),
      ...s,
      children: [
        n,
        a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)] font-bold", children: "*" })
      ]
    }
  )
);
Jl.displayName = "Label";
const Ql = Te.forwardRef(
  ({
    className: t,
    containerClassName: r,
    wrapperClassName: a,
    onClear: n,
    clearLabel: s = "清空搜索",
    size: i = "sm",
    ...l
  }, c) => /* @__PURE__ */ e("div", { className: u("relative block min-w-[200px]", r, a), children: /* @__PURE__ */ e(
    tt,
    {
      ref: c,
      size: i,
      allowClear: !!n,
      onClear: n,
      prefix: /* @__PURE__ */ e(
        ct,
        {
          className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)] shrink-0",
          "aria-hidden": "true"
        }
      ),
      className: u("text-xs", t),
      ...l
    }
  ) })
);
Ql.displayName = "SearchInput";
const ed = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, td = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, jt = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  onBlur: s,
  label: i,
  error: l,
  helperText: c,
  id: d,
  name: b,
  title: f,
  placeholder: h = "请选择",
  multiple: g = !1,
  searchable: m = !1,
  allowClear: p,
  clearable: v,
  disabled: y = !1,
  invalid: S = !1,
  size: x,
  motion: k,
  className: D
}) => {
  var ie;
  const B = pe(x, "sm"), T = oe(k), N = Fe(), w = d || N, [C, I] = st({
    value: r,
    defaultValue: a ?? (g ? [] : ""),
    onChange: n
  }), [A, E] = $(!1), [O, X] = $(""), [Z, R] = $(0), { isMounted: z, isVisible: W } = $t(A, T === "none" ? 0 : 140), V = ue(null), K = ue(null), Y = ue(null), se = ue(null), P = !!(p ?? v), q = !!(S || l), { style: j, actualSide: G, portalContainer: ne } = kr({
    open: z,
    triggerRef: K,
    floatingRef: Y,
    placement: "bottomLeft",
    offset: 4,
    matchWidth: !0
  });
  de(() => {
    if (!A) {
      X("");
      return;
    }
    const H = (re) => {
      var J, we;
      const F = re.target;
      (J = V.current) != null && J.contains(F) || (we = Y.current) != null && we.contains(F) || E(!1);
    }, U = (re) => {
      var F;
      re.key === "Escape" && (re.preventDefault(), re.stopPropagation(), E(!1), (F = K.current) == null || F.focus());
    };
    return document.addEventListener("mousedown", H), document.addEventListener("keydown", U, !0), () => {
      document.removeEventListener("mousedown", H), document.removeEventListener("keydown", U, !0);
    };
  }, [A]);
  const te = ce(() => {
    const H = O.trim();
    return H ? t.filter(
      (U) => ht(U.label, H) || String(U.value).toLowerCase().includes(H.toLowerCase())
    ) : t;
  }, [t, O]), M = ce(() => g ? Array.isArray(C) ? C : C != null && C !== "" ? [C] : [] : C != null && C !== "" ? [C] : [], [g, C]), le = ce(() => M.map((H) => {
    const U = t.find((re) => String(re.value) === String(H));
    return { value: H, label: (U == null ? void 0 : U.label) ?? String(H) };
  }), [t, M]), Ee = () => {
    const H = te.findIndex(
      (U) => !U.disabled && M.some((re) => String(re) === String(U.value))
    );
    if (H >= 0)
      R(H);
    else {
      const U = te.findIndex((re) => !re.disabled);
      R(U >= 0 ? U : 0);
    }
    E(!0);
  }, Be = (H) => {
    var re;
    if (te.length === 0) return;
    let U = Z;
    for (let F = 0; F < te.length; F++)
      if (U = (U + H + te.length) % te.length, !((re = te[U]) != null && re.disabled)) {
        R(U);
        return;
      }
  }, me = (H) => {
    var U;
    if (!H.disabled)
      if (g) {
        const F = M.some((J) => String(J) === String(H.value)) ? M.filter((J) => String(J) !== String(H.value)) : [...M, H.value];
        I(F);
      } else
        I(H.value), E(!1), (U = K.current) == null || U.focus();
  }, ve = (H) => {
    if (!y) {
      if (H.key === "Escape") {
        H.preventDefault(), H.stopPropagation(), E(!1);
        return;
      }
      if (H.key === "ArrowDown") {
        H.preventDefault(), A ? Be(1) : Ee();
        return;
      }
      if (H.key === "ArrowUp") {
        H.preventDefault(), A ? Be(-1) : Ee();
        return;
      }
      if (H.key === "Enter" || H.key === " " && H.target !== se.current)
        if (H.preventDefault(), !A)
          Ee();
        else {
          const U = te[Z];
          U && !U.disabled && me(U);
        }
    }
  };
  return /* @__PURE__ */ o("div", { ref: V, className: "relative min-w-0 w-full", children: [
    i && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: w,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: i
      }
    ),
    b && /* @__PURE__ */ e(
      "input",
      {
        type: "hidden",
        name: b,
        value: g ? M.join(",") : String(M[0] ?? "")
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        ref: K,
        id: w,
        title: f,
        role: "combobox",
        "aria-expanded": A,
        "aria-haspopup": "listbox",
        "aria-controls": `${w}-listbox`,
        "aria-activedescendant": A ? `${w}-opt-${Z}` : void 0,
        "aria-disabled": y || void 0,
        tabIndex: y ? -1 : 0,
        onBlur: (H) => {
          var re;
          const U = H.relatedTarget;
          U && ((re = Y.current) != null && re.contains(U)) || s == null || s(H);
        },
        onClick: () => {
          y || (A ? E(!1) : Ee());
        },
        onKeyDown: ve,
        "data-motion": T,
        className: u(
          "flex w-full items-center justify-between gap-1.5 px-2.5 py-1 cursor-pointer select-none abc-motion-control",
          Bt,
          g ? td[B] : ed[B],
          A && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
          q && "border-[var(--abc-danger)]",
          y && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          D
        ),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: le.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: h }) : g ? le.map((H) => /* @__PURE__ */ o(
            "span",
            {
              "data-testid": "select-tag",
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
              children: [
                /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: H.label }),
                !y && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `移除 ${H.label}`,
                    onClick: (U) => {
                      U.stopPropagation(), I(M.filter((re) => String(re) !== String(H.value)));
                    },
                    className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                    children: /* @__PURE__ */ e(Ue, { className: "h-2.5 w-2.5" })
                  }
                )
              ]
            },
            String(H.value)
          )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (ie = le[0]) == null ? void 0 : ie.label }) }),
          /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            P && le.length > 0 && !y && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "data-testid": "select-clear",
                "aria-label": "清空",
                onClick: (H) => {
                  H.stopPropagation(), I(g ? [] : "");
                },
                className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ e(
              pt,
              {
                className: u("h-3.5 w-3.5 transition-transform duration-150", A && "rotate-180")
              }
            )
          ] })
        ]
      }
    ),
    z && ne && dt(
      /* @__PURE__ */ o(
        "div",
        {
          ref: Y,
          id: `${w}-listbox`,
          role: "listbox",
          "data-abc-floating": "",
          "data-motion": T,
          "data-placement": G,
          "aria-multiselectable": g || void 0,
          style: j,
          className: u(
            "z-[1300] min-w-[160px] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            W ? "abc-animate-popover-in" : "abc-animate-popover-out"
          ),
          children: [
            m && /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
              /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: se,
                  type: "text",
                  autoFocus: !0,
                  "data-testid": "select-search-input",
                  value: O,
                  onClick: (H) => H.stopPropagation(),
                  onKeyDown: ve,
                  onChange: (H) => {
                    const U = H.target.value;
                    X(U);
                    const F = (U.trim() ? t.filter(
                      (J) => ht(J.label, U) || String(J.value).toLowerCase().includes(U.toLowerCase())
                    ) : t).findIndex((J) => !J.disabled);
                    R(F >= 0 ? F : 0);
                  },
                  placeholder: "搜索或输入拼音首字母...",
                  className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "max-h-56 overflow-y-auto p-1", children: te.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : te.map((H, U) => {
              const re = M.some((J) => String(J) === String(H.value)), F = U === Z;
              return /* @__PURE__ */ o(
                "button",
                {
                  id: `${w}-opt-${U}`,
                  type: "button",
                  role: "option",
                  "aria-selected": re,
                  disabled: H.disabled,
                  onMouseEnter: () => {
                    H.disabled || R(U);
                  },
                  onClick: (J) => {
                    J.stopPropagation(), me(H);
                  },
                  className: u(
                    "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                    re ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : F && !H.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    H.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "truncate", children: H.label }),
                      H.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: H.description })
                    ] }),
                    re && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 shrink-0" })
                  ]
                },
                String(H.value)
              );
            }) })
          ]
        }
      ),
      ne
    ),
    l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
    c && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: c })
  ] });
}, Bn = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, Ln = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, rd = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, xr = je.forwardRef(
  ({
    id: t,
    checked: r,
    defaultChecked: a = !1,
    indeterminate: n = !1,
    onChange: s,
    disabled: i = !1,
    size: l,
    motion: c,
    label: d,
    description: b,
    className: f,
    ...h
  }, g) => {
    const m = pe(l, "sm"), p = oe(c), v = Fe(), y = t || v, S = ue(null);
    Vr(g, () => S.current, []);
    const [x, k] = st({
      value: r,
      defaultValue: a
    });
    de(() => {
      S.current && (S.current.indeterminate = !!n);
    }, [n]);
    const D = !!(d || b);
    return /* @__PURE__ */ o(
      "label",
      {
        htmlFor: y,
        "data-motion": p,
        className: u(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          rd[m],
          D ? "items-start gap-2" : "items-center justify-center",
          i ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          f
        ),
        children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: u(
                "relative inline-flex shrink-0 items-center justify-center",
                Bn[m],
                D && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...h,
                    ref: S,
                    id: y,
                    type: "checkbox",
                    checked: x,
                    disabled: i,
                    onChange: (B) => {
                      if (i) return;
                      const T = B.target.checked;
                      k(T), s == null || s(T, B);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: u(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      Bn[m],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      x || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(qr, { className: u(Ln[m], "stroke-[2.5] abc-motion-pop") }) : x && /* @__PURE__ */ e(He, { className: u(Ln[m], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          D && /* @__PURE__ */ o("span", { className: "flex flex-col", children: [
            d && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: d }),
            b && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: b })
          ] })
        ]
      }
    );
  }
);
xr.displayName = "Checkbox";
const ad = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, nd = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, sd = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-3.5 w-3.5 translate-x-0.5",
  md: "h-4.5 w-4.5 translate-x-0.5",
  lg: "h-5.5 w-5.5 translate-x-0.5"
}, ft = ({
  checked: t,
  defaultChecked: r = !1,
  onChange: a,
  disabled: n = !1,
  loading: s = !1,
  size: i,
  motion: l,
  checkedLabel: c,
  uncheckedLabel: d,
  checkedChildren: b,
  unCheckedChildren: f,
  ariaLabel: h,
  className: g
}) => {
  const p = pe(i === "small" ? "sm" : i === "default" ? "md" : i, "md"), v = oe(l), [y, S] = st({
    value: t,
    defaultValue: r,
    onChange: a
  }), x = !!(n || s), k = c ?? b, D = d ?? f;
  return /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": y,
      "aria-label": h,
      disabled: x,
      "data-motion": v,
      onClick: () => {
        x || S(!y);
      },
      className: u(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        ad[p],
        y ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border-strong)]",
        g
      ),
      children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              transitionDuration: "var(--abc-motion-base, 220ms)",
              transitionTimingFunction: "var(--abc-ease-active, cubic-bezier(0.16, 1, 0.3, 1))"
            },
            className: u(
              "pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform",
              y ? nd[p] : sd[p]
            ),
            children: s && /* @__PURE__ */ e(Dt, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (k || D) && /* @__PURE__ */ e("span", { className: "sr-only", children: y ? k : D })
      ]
    }
  );
}, od = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, id = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, cd = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, ld = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, dd = {
  xs: "text-xs gap-1.5",
  sm: "text-xs gap-2",
  md: "text-sm gap-2",
  lg: "text-sm gap-2.5"
}, mt = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  variant: s = "default",
  size: i,
  motion: l,
  disabled: c = !1,
  className: d
}) => {
  var m;
  const b = pe(i, "sm"), f = oe(l), [h, g] = st({
    value: r,
    defaultValue: a ?? ((m = t[0]) == null ? void 0 : m.value) ?? "",
    onChange: n
  });
  return s === "segmented" ? /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": f,
      className: u(
        "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        od[b],
        d
      ),
      children: t.map((p) => {
        const v = String(h) === String(p.value), y = !!(c || p.disabled);
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": v,
            disabled: y,
            onClick: () => g(p.value),
            className: u(
              "rounded-[var(--abc-radius-sm)] font-medium cursor-pointer select-none abc-motion-control",
              id[b],
              v ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]",
              y && "opacity-45 cursor-not-allowed"
            ),
            children: p.label
          },
          String(p.value)
        );
      })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": f,
      className: u("inline-flex flex-wrap items-center gap-4", d),
      children: t.map((p) => {
        const v = String(h) === String(p.value), y = !!(c || p.disabled);
        return /* @__PURE__ */ o(
          "label",
          {
            className: u(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              dd[b],
              y ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "radio",
                  checked: v,
                  disabled: y,
                  onChange: () => g(p.value),
                  className: "peer sr-only"
                }
              ),
              /* @__PURE__ */ e(
                "span",
                {
                  className: u(
                    "flex items-center justify-center rounded-full border abc-motion-control",
                    cd[b],
                    v ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: v && /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        ld[b]
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: p.label })
            ]
          },
          String(p.value)
        );
      })
    }
  );
}, Ms = ["日", "一", "二", "三", "四", "五", "六"], Ts = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Aa = je.forwardRef(
  ({
    value: t,
    defaultValue: r = "",
    onChange: a,
    placeholder: n = "请选择日期",
    allowClear: s,
    clearable: i,
    disabled: l = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: d = !0,
    id: b,
    name: f,
    minDate: h,
    maxDate: g,
    size: m,
    motion: p,
    className: v
  }, y) => {
    const S = pe(m, "sm"), x = oe(p), k = Fe(), D = b || k, B = ue(null), T = ue(null);
    Vr(y, () => B.current, []);
    const N = t !== void 0, [w, C] = $(r), I = N ? t ?? "" : w, [A, E] = $(!1), [O, X] = $({ top: 0, left: 0 }), [Z, R] = $(
      () => I && Ie(I).isValid() ? Ie(I) : Ie()
    ), W = !!((s ?? i ?? !0) && I && !l);
    de(() => {
      A && R(
        I && Ie(I).isValid() ? Ie(I) : Ie()
      );
    }, [A, I]);
    const V = ce(() => d === !1 ? [] : Array.isArray(d) ? d : [
      { label: "今天", value: () => Ie().format(c) },
      { label: "昨天", value: () => Ie().subtract(1, "day").format(c) },
      { label: "明天", value: () => Ie().add(1, "day").format(c) },
      { label: "一周前", value: () => Ie().subtract(7, "day").format(c) }
    ], [d, c]);
    de(() => {
      if (!A) return;
      const P = () => {
        if (!B.current || typeof window > "u") return;
        const q = B.current.getBoundingClientRect(), j = V.length > 0 ? 340 : 300, G = 280, te = window.innerHeight - q.bottom < j && q.top > j ? q.top - j - 4 : q.bottom + 4;
        let M = q.left;
        M + G > window.innerWidth - 8 && (M = Math.max(8, window.innerWidth - G - 8)), X({ top: Math.max(8, te), left: Math.max(8, M) });
      };
      return P(), window.addEventListener("resize", P), window.addEventListener("scroll", P, !0), () => {
        window.removeEventListener("resize", P), window.removeEventListener("scroll", P, !0);
      };
    }, [A, V.length]), de(() => {
      if (!A) return;
      const P = (j) => {
        var ne, te;
        const G = j.target;
        (ne = B.current) != null && ne.contains(G) || (te = T.current) != null && te.contains(G) || E(!1);
      }, q = (j) => {
        j.key === "Escape" && (j.preventDefault(), j.stopPropagation(), E(!1));
      };
      return document.addEventListener("mousedown", P), document.addEventListener("keydown", q, !0), () => {
        document.removeEventListener("mousedown", P), document.removeEventListener("keydown", q, !0);
      };
    }, [A]);
    const K = (P) => {
      N || C(P), a == null || a(P);
    }, Y = ce(
      () => Ia(Z.year(), Z.month()),
      [Z]
    ), se = ce(() => {
      if (!I) return "";
      const P = Ie(I);
      return P.isValid() ? P.format("YYYY-MM-DD") : I;
    }, [I]);
    return /* @__PURE__ */ o(Re, { children: [
      /* @__PURE__ */ o(
        "div",
        {
          ref: B,
          id: D,
          "data-datepicker-trigger": "",
          "data-motion": x,
          role: "combobox",
          "aria-expanded": A,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && E((P) => !P),
          onKeyDown: (P) => {
            !l && (P.key === "Enter" || P.key === " ") && (P.preventDefault(), E((q) => !q));
          },
          className: u(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            Bt,
            Ts[S],
            A && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            v
          ),
          children: [
            /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: n,
                value: I,
                name: f,
                tabIndex: -1,
                className: "w-full min-w-0 flex-1 bg-transparent p-0 font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            W && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (P) => {
                  P.stopPropagation(), K("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      A && typeof document < "u" && dt(
        /* @__PURE__ */ o(
          "div",
          {
            ref: T,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": x,
            "aria-label": "日期选择面板",
            style: { top: O.top, left: O.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              V.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: V.map((P) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const q = typeof P.value == "function" ? P.value() : P.value;
                    K(q), E(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: P.label
                },
                P.label
              )) }),
              /* @__PURE__ */ o("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ o("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => R((P) => P.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(ss, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => R((P) => P.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Pr, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: Z.format("YYYY 年 M 月") }),
                /* @__PURE__ */ o("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => R((P) => P.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => R((P) => P.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Ms.map((P) => /* @__PURE__ */ e("span", { className: "py-1", children: P }, P)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: Y.map((P) => {
                const q = Ie(P.iso), j = c === "YYYY-MM-DD" ? P.iso : q.format(c), G = P.iso === se, ne = !!(h && q.isBefore(Ie(h), "day") || g && q.isAfter(Ie(g), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": j,
                    disabled: ne,
                    onClick: () => {
                      ne || (K(j), E(!1));
                    },
                    className: u(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      G ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : P.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      P.isToday && !G && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: P.day
                  },
                  P.iso
                );
              }) })
            ]
          }
        ),
        Zr(B.current) ?? document.body
      )
    ] });
  }
);
Aa.displayName = "DatePicker";
function pa(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const Da = je.forwardRef(
  ({
    value: t,
    defaultValue: r,
    onChange: a,
    placeholder: n = ["开始日期", "结束日期"],
    allowClear: s,
    clearable: i,
    disabled: l = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: d = !0,
    id: b,
    minDate: f,
    maxDate: h,
    size: g,
    motion: m,
    className: p
  }, v) => {
    const y = pe(g, "sm"), S = oe(m), x = Fe(), k = b || x, D = ue(null), B = ue(null);
    Vr(v, () => D.current, []);
    const T = Array.isArray(t) || t === void 0 && Array.isArray(r), N = t !== void 0, [w, C] = $(
      () => pa(r)
    ), I = N ? pa(t) : w, [A, E] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [O, X] = $(!1), [Z, R] = $({ top: 0, left: 0 }), [z, W] = $(null), [V, K] = $(null), [Y, se] = $(
      () => I.start && Ie(I.start).isValid() ? Ie(I.start) : Ie()
    ), P = ce(() => Y.add(1, "month"), [Y]), j = !!((s ?? i ?? !0) && (I.start || I.end) && !l);
    de(() => {
      O ? (W(null), K(null), se(
        I.start && Ie(I.start).isValid() ? Ie(I.start) : Ie()
      )) : (W(null), K(null));
    }, [O, I.start]);
    const G = ce(() => d === !1 ? [] : Array.isArray(d) ? d : [
      {
        label: "今天",
        getValue: () => {
          const me = Ie().format(c);
          return { start: me, end: me };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: Ie().subtract(6, "day").format(c),
          end: Ie().format(c)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: Ie().subtract(29, "day").format(c),
          end: Ie().format(c)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: Ie().startOf("month").format(c),
          end: Ie().format(c)
        })
      }
    ], [d, c]);
    de(() => {
      if (!O) return;
      const me = () => {
        if (!D.current || typeof window > "u") return;
        const ve = D.current.getBoundingClientRect(), ie = G.length > 0 ? 370 : 330, H = 556, re = window.innerHeight - ve.bottom < ie && ve.top > ie ? ve.top - ie - 4 : ve.bottom + 4;
        let F = ve.left;
        F + H > window.innerWidth - 8 && (F = Math.max(8, window.innerWidth - H - 8)), R({ top: Math.max(8, re), left: Math.max(8, F) });
      };
      return me(), window.addEventListener("resize", me), window.addEventListener("scroll", me, !0), () => {
        window.removeEventListener("resize", me), window.removeEventListener("scroll", me, !0);
      };
    }, [O, G.length]), de(() => {
      if (!O) return;
      const me = (ie) => {
        var U, re;
        const H = ie.target;
        (U = D.current) != null && U.contains(H) || (re = B.current) != null && re.contains(H) || X(!1);
      }, ve = (ie) => {
        ie.key === "Escape" && (ie.preventDefault(), ie.stopPropagation(), X(!1));
      };
      return document.addEventListener("mousedown", me), document.addEventListener("keydown", ve, !0), () => {
        document.removeEventListener("mousedown", me), document.removeEventListener("keydown", ve, !0);
      };
    }, [O]);
    const ne = (me) => {
      N || C(me), T ? a == null || a([me.start, me.end]) : a == null || a(me);
    }, te = ce(() => {
      if (z) {
        const me = Ie(z);
        if (!V) return { start: me, end: null };
        const ve = Ie(V);
        return ve.isBefore(me, "day") ? { start: ve, end: me } : { start: me, end: ve };
      }
      return {
        start: I.start && Ie(I.start).isValid() ? Ie(I.start) : null,
        end: I.end && Ie(I.end).isValid() ? Ie(I.end) : null
      };
    }, [z, V, I]), M = ce(
      () => Ia(Y.year(), Y.month()),
      [Y]
    ), le = ce(
      () => Ia(P.year(), P.month()),
      [P]
    ), Ee = (me) => {
      const ve = Ie(me), ie = c === "YYYY-MM-DD" ? me : ve.format(c);
      if (!z) {
        W(ie), K(null);
        return;
      }
      const H = Ie(z), [U, re] = ve.isBefore(H, "day") ? [ve, H] : [H, ve];
      ne({ start: U.format(c), end: re.format(c) }), W(null), K(null), X(!1);
    }, Be = (me, ve, ie) => /* @__PURE__ */ o("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ o("div", { className: "mb-2 flex items-center justify-between", children: [
        ie === "left" ? /* @__PURE__ */ o("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => se((H) => H.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(ss, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => se((H) => H.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Pr, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: me.format("YYYY 年 M 月") }),
        ie === "right" ? /* @__PURE__ */ o("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => se((H) => H.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => se((H) => H.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Ms.map((H) => /* @__PURE__ */ e("span", { className: "py-1", children: H }, H)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: ve.map((H) => {
        const U = Ie(H.iso), re = c === "YYYY-MM-DD" ? H.iso : U.format(c), F = !!(te.start && U.isSame(te.start, "day")), J = !!(te.end && U.isSame(te.end, "day")), we = !!(te.start && te.end && U.isAfter(te.start, "day") && U.isBefore(te.end, "day")), We = !!(f && U.isBefore(Ie(f), "day") || h && U.isAfter(Ie(h), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": re,
            disabled: We,
            onMouseEnter: () => z && K(re),
            onClick: () => !We && Ee(H.iso),
            className: u(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              F || J ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : we ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : H.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              H.isToday && !F && !J && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: H.day
          },
          `${ie}-${H.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ o(Re, { children: [
      /* @__PURE__ */ o(
        "div",
        {
          ref: D,
          id: k,
          "data-daterangepicker-trigger": "",
          "data-motion": S,
          role: "combobox",
          "aria-expanded": O,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && X((me) => !me),
          onKeyDown: (me) => {
            !l && (me.key === "Enter" || me.key === " ") && (me.preventDefault(), X((ve) => !ve));
          },
          className: u(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            Bt,
            Ts[y],
            O && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            p
          ),
          children: [
            /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: A,
                value: I.start,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-[var(--abc-fg-muted)]", children: "至" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: E,
                value: I.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            j && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (me) => {
                  me.stopPropagation(), ne({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      O && typeof document < "u" && dt(
        /* @__PURE__ */ o(
          "div",
          {
            ref: B,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": S,
            "aria-label": "日期范围选择面板",
            style: { top: Z.top, left: Z.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              G.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: G.map((me) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const ve = me.getValue(), ie = pa(ve);
                    ne(ie), W(null), K(null), X(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: me.label
                },
                me.label
              )) }),
              /* @__PURE__ */ o("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: Be(Y, M, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: Be(P, le, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: z ? `已选起始日：${z}，请继续点击截止日期` : I.start && I.end ? `已选区间：${I.start} 至 ${I.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        Zr(D.current) ?? document.body
      )
    ] });
  }
);
Da.displayName = "DateRangePicker";
const bd = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, ud = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function md(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function fd(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const pd = ({
  value: t = "",
  onChange: r,
  label: a,
  helperText: n,
  error: s,
  accept: i = "image/*,.svg",
  maxSizeMB: l = 5,
  disabled: c = !1,
  customUpload: d,
  size: b,
  motion: f,
  placeholder: h = "点击或拖拽图片至此处上传",
  className: g
}) => {
  const m = pe(b, "sm"), p = oe(f), v = Fe(), y = ue(null), { uploadAdapter: S, toast: x } = Ge(), [k, D] = $(!1), [B, T] = $(!1), [N, w] = $(!1), C = async (E) => {
    if (!E || c || k) return;
    if (!(E.type.startsWith("image/") || E.name.toLowerCase().endsWith(".svg"))) {
      x.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (E.size >= l * 1024 * 1024) {
      x.error(`上传图片大小不能超过 ${l}MB`);
      return;
    }
    D(!0);
    try {
      const Z = await (d ?? S ?? fd)(E);
      Z ? (r == null || r(Z), x.success("上传成功")) : x.error("上传失败，未获取到图片地址");
    } catch (X) {
      x.error((X == null ? void 0 : X.message) || "上传图片失败，请重试");
    } finally {
      D(!1), y.current && (y.current.value = "");
    }
  }, I = (t == null ? void 0 : t.trim()) ?? "", A = md(I);
  return /* @__PURE__ */ o("div", { "data-motion": p, className: "w-full", children: [
    a && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: v,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: a
      }
    ),
    /* @__PURE__ */ e(
      "input",
      {
        ref: y,
        id: v,
        type: "file",
        accept: i,
        disabled: c || k,
        onChange: (E) => {
          var O;
          return C((O = E.target.files) == null ? void 0 : O[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        onClick: () => {
          var E;
          !I && !c && !k && ((E = y.current) == null || E.click());
        },
        onDragOver: (E) => {
          E.preventDefault(), E.stopPropagation(), !c && !k && T(!0);
        },
        onDragLeave: (E) => {
          E.preventDefault(), E.stopPropagation(), T(!1);
        },
        onDrop: (E) => {
          var O;
          E.preventDefault(), E.stopPropagation(), T(!1), !c && !k && C((O = E.dataTransfer.files) == null ? void 0 : O[0]);
        },
        className: u(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          B ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !c && !B && "hover:border-[var(--abc-primary)]",
          !I && !c && "cursor-pointer",
          c && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          bd[m],
          g
        ),
        children: [
          I ? /* @__PURE__ */ o("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: u(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  ud[m]
                ),
                children: [
                  A ? /* @__PURE__ */ e(
                    "div",
                    {
                      className: "flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full",
                      dangerouslySetInnerHTML: { __html: I }
                    }
                  ) : /* @__PURE__ */ e("img", { src: I, alt: "凭证预览", className: "h-full w-full object-contain p-1" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "查看大图",
                      title: "查看大图",
                      onClick: (E) => {
                        E.stopPropagation(), w(!0);
                      },
                      className: "absolute inset-0 flex items-center justify-center bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
                      children: /* @__PURE__ */ e(rr, { className: "h-4 w-4" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex flex-1 flex-col items-center space-y-1 text-center sm:items-start sm:text-left", children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-medium text-[var(--abc-fg)]", children: "已上传图片资源" }),
              /* @__PURE__ */ e("p", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: "支持点击放大预览、重新选择或移除" }),
              !c && /* @__PURE__ */ o("div", { className: "flex items-center gap-2.5 pt-1", children: [
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    disabled: k,
                    onClick: (E) => {
                      var O;
                      E.stopPropagation(), (O = y.current) == null || O.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(tr, { className: u("h-3 w-3", k && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    disabled: k,
                    onClick: (E) => {
                      E.stopPropagation(), r == null || r("");
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-danger)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "删除" })
                    ]
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ o("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Ki, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: h }),
            /* @__PURE__ */ o("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              l,
              "MB"
            ] })
          ] }),
          k && /* @__PURE__ */ o("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(Dt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "正在上传中..." })
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: s }),
    n && !s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: n }),
    /* @__PURE__ */ e(
      lt,
      {
        open: N,
        onClose: () => w(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: A ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: I }
          }
        ) : /* @__PURE__ */ e("img", { src: I, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, hd = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, gu = ({
  treeData: t,
  checkable: r = !1,
  checkStrictly: a = !1,
  checkedKeys: n,
  defaultCheckedKeys: s = [],
  onCheck: i,
  selectedKeys: l,
  onSelect: c,
  defaultExpandAll: d = !0,
  searchable: b = !1,
  searchPlaceholder: f = "搜索节点名称（支持拼音首字母）...",
  showToolbar: h = !1,
  size: g,
  motion: m,
  renderExtra: p,
  className: v
}) => {
  const y = pe(g, "sm"), S = oe(m), [x, k] = $(""), [D, B] = $(
    () => d ? new Set(ba(t)) : /* @__PURE__ */ new Set()
  ), [T, N] = $(s), [w, C] = $([]);
  de(() => {
    d && t.length > 0 && D.size === 0 && B(new Set(ba(t)));
  }, [t, d]);
  const I = n !== void 0 ? n : T, A = l !== void 0 ? l : w, { checkedKeys: E, halfCheckedKeys: O } = ce(
    () => cs(t, I, a),
    [t, I, a]
  ), X = ce(() => new Set(E), [E]), Z = ce(() => new Set(O), [O]), { filteredNodes: R, autoExpandedKeys: z } = ce(
    () => hc(t, x),
    [t, x]
  ), W = ce(() => x.trim() ? /* @__PURE__ */ new Set([...D, ...z]) : D, [D, z, x]), V = (P) => {
    B((q) => {
      const j = new Set(q);
      return j.has(P) ? j.delete(P) : j.add(P), j;
    });
  }, K = (P, q) => {
    const j = pc(t, E, P, q, a);
    n === void 0 && N(j.checkedKeys), i == null || i(j.checkedKeys, {
      halfCheckedKeys: j.halfCheckedKeys,
      node: P,
      checked: q
    });
  }, Y = (P) => {
    if (P.disabled) return;
    const q = [P.key];
    l === void 0 && C(q), c == null || c(q, P);
  }, se = (P, q = 0) => /* @__PURE__ */ e("ul", { role: q === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: P.map((j) => {
    const G = !!(j.children && j.children.length > 0), ne = W.has(j.key), te = X.has(j.key), M = Z.has(j.key), le = A.includes(j.key);
    return /* @__PURE__ */ o("li", { role: "treeitem", "aria-expanded": G ? ne : void 0, children: [
      /* @__PURE__ */ o(
        "div",
        {
          style: { paddingInlineStart: `${q * 18 + 6}px` },
          className: u(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            hd[y],
            le ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            j.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              G ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": ne ? `收起 ${j.title}` : `展开 ${j.title}`,
                  onClick: () => V(j.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    gt,
                    {
                      className: u(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        ne && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                xr,
                {
                  size: y,
                  motion: S,
                  checked: te,
                  indeterminate: M,
                  disabled: j.disabled,
                  onChange: (Ee) => K(j, Ee)
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  disabled: j.disabled,
                  onClick: () => {
                    r && !c ? K(j, !te) : Y(j);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    j.icon && /* @__PURE__ */ e(zt, { name: j.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: j.title })
                  ]
                }
              )
            ] }),
            p && /* @__PURE__ */ e("div", { className: "shrink-0", children: p(j) })
          ]
        }
      ),
      G && ne && se(j.children, q + 1)
    ] }, j.key);
  }) });
  return /* @__PURE__ */ o("div", { "data-motion": S, className: u("space-y-2", v), children: [
    (b || h) && /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-2", children: [
      b && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        tt,
        {
          size: y,
          motion: S,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }),
          placeholder: f,
          value: x,
          onChange: (P) => k(P.target.value)
        }
      ) }),
      h && /* @__PURE__ */ o("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => B(new Set(ba(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Gi, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => B(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Vi, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: R.length > 0 ? se(R) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, vd = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, gd = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, xd = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: i = !1,
  size: l,
  motion: c,
  className: d
}) => {
  const b = pe(l, "sm"), f = oe(c), [h, g] = $(r), [m, p] = $(""), v = t !== void 0 ? t : h, y = (k) => {
    t === void 0 && g(k), a == null || a(k);
  }, S = () => {
    const k = m.trim();
    if (!(!k || i)) {
      if (v.includes(k) || v.length >= s) {
        p("");
        return;
      }
      y([...v, k]), p("");
    }
  }, x = (k) => {
    i || y(v.filter((D, B) => B !== k));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      "data-motion": f,
      className: u(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        vd[b],
        Bt,
        i && "opacity-65 cursor-not-allowed",
        d
      ),
      children: [
        v.map((k, D) => /* @__PURE__ */ o(
          "span",
          {
            className: u(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              gd[b]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: k }),
              !i && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${k}`,
                  onClick: () => x(D),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${k}_${D}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: i || v.length >= s,
            value: m,
            placeholder: v.length === 0 ? n : "",
            onChange: (k) => p(k.target.value),
            onBlur: S,
            onKeyDown: (k) => {
              k.key === "Enter" || k.key === "," ? (k.preventDefault(), S()) : k.key === "Backspace" && !m && v.length > 0 && x(v.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function Rn(t, r) {
  const a = Math.floor(95 + Math.random() * Math.max(40, t - 165)), n = Math.floor(24 + Math.random() * Math.max(20, r - 80)), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${r}" viewBox="0 0 ${t} ${r}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e3a8a"/>
        <stop offset="55%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#0f766e"/>
      </linearGradient>
    </defs>
    <rect width="${t}" height="${r}" fill="url(#g)"/>
    <circle cx="${Math.round(t * 0.22)}" cy="${Math.round(r * 0.32)}" r="46" fill="rgba(255,255,255,0.08)"/>
    <circle cx="${Math.round(t * 0.78)}" cy="${Math.round(r * 0.7)}" r="58" fill="rgba(255,255,255,0.07)"/>
    <rect x="${a}" y="${n}" width="44" height="44" rx="8" fill="rgba(15,23,42,0.58)" stroke="rgba(255,255,255,0.65)" stroke-width="1.5"/>
  </svg>`;
  return {
    nonceStr: `local_${Date.now().toString(36)}`,
    canvasSrc: `data:image/svg+xml;utf8,${encodeURIComponent(s)}`,
    blockSrc: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
    <rect x="1" y="1" width="42" height="42" rx="8" fill="#38bdf8" fill-opacity="0.88" stroke="#ffffff" stroke-width="2"/>
  </svg>`)}`,
    blockY: n,
    targetX: a
  };
}
const yd = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, xu = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: i,
  captchaFetcher: l
}) => {
  const c = pe(a, "md"), d = oe(n), { captchaAdapter: b } = Ge(), f = l ?? b, [h, g] = $(null), [m, p] = $(!0), [v, y] = $(!1), [S, x] = $(!1), [k, D] = $(0), [B, T] = $(0), N = ue(!1), w = ue(0), C = ue(0), I = he(async () => {
    p(!0), y(!1), x(!1), D(0), T(0);
    try {
      if (f) {
        const X = await f();
        g(X);
      } else
        g(Rn(t, r));
    } catch {
      g(Rn(t, r));
    } finally {
      p(!1);
    }
  }, [f, t, r]);
  de(() => {
    I();
  }, [I]);
  const A = (X) => {
    m || v || (N.current = !0, w.current = X, C.current = Date.now());
  }, E = he(
    (X) => {
      if (!N.current || m || v) return;
      const Z = X - w.current, R = t - 40, z = Math.max(0, Math.min(R, Z));
      D(z), T((t - 60) / R * z);
    },
    [t, m, v]
  ), O = he(() => {
    if (!N.current || m || v) return;
    if (N.current = !1, Date.now() - C.current > 1e4 || !h) {
      x(!0), i == null || i(), setTimeout(I, 600);
      return;
    }
    const Z = Math.round(B);
    if (typeof h.targetX == "number" && Math.abs(Z - h.targetX) > 10) {
      x(!0), i == null || i(), setTimeout(I, 550);
      return;
    }
    y(!0), s({
      nonceStr: h.nonceStr,
      value: Z
    });
  }, [B, h, m, v, i, s, I]);
  return de(() => {
    const X = (W) => E(W.clientX), Z = () => O(), R = (W) => {
      W.touches[0] && E(W.touches[0].clientX);
    }, z = () => O();
    return window.addEventListener("mousemove", X), window.addEventListener("mouseup", Z), window.addEventListener("touchmove", R), window.addEventListener("touchend", z), () => {
      window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", Z), window.removeEventListener("touchmove", R), window.removeEventListener("touchend", z);
    };
  }, [E, O]), /* @__PURE__ */ o("div", { "data-motion": d, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          m ? /* @__PURE__ */ o("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : h && /* @__PURE__ */ o(Re, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: h.canvasSrc,
                alt: "安全验证背景",
                className: "pointer-events-none h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(
              "img",
              {
                src: h.blockSrc,
                alt: "安全验证滑块",
                className: "pointer-events-none absolute drop-shadow-md",
                style: { top: h.blockY, left: B }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新拼图",
              title: "刷新拼图",
              onClick: I,
              className: "absolute top-2 right-2 rounded-[var(--abc-radius-sm)] bg-black/45 p-1.5 text-white backdrop-blur-xs transition-colors hover:bg-black/65 cursor-pointer",
              children: /* @__PURE__ */ e(Xr, { className: u("h-3.5 w-3.5", m && "animate-spin") })
            }
          ),
          v && /* @__PURE__ */ o("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(Ct, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: u(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          yd[c],
          v ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : S ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        ),
        style: { width: t },
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: u(
                "absolute inset-y-0 left-0",
                v ? "bg-[var(--abc-success)]/20" : "bg-[var(--abc-primary)]/20"
              ),
              style: { width: k + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: v ? "验证成功" : S ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(k),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: (X) => A(X.clientX),
              onTouchStart: (X) => {
                X.touches[0] && A(X.touches[0].clientX);
              },
              className: u(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                v ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: k },
              children: v ? /* @__PURE__ */ e(Ct, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Ui, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}, Kr = ["B", "KB", "MB", "GB", "TB"], Ur = ["s", "m", "h", "d"], Es = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
}, _s = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400
}, wd = ["TB", "GB", "MB", "KB", "B"], Nd = ["h", "m", "d", "s"];
function Gr(t, r = 2) {
  return Number.isFinite(t) ? t.toFixed(r).replace(/\.?0+$/, "") : "0";
}
function As(t, r) {
  if (r === "zh")
    switch (t) {
      case "s":
        return "秒";
      case "m":
        return "分钟";
      case "h":
        return "小时";
      case "d":
        return "天";
    }
  switch (t) {
    case "s":
      return "Sec";
    case "m":
      return "Min";
    case "h":
      return "Hour";
    case "d":
      return "Day";
  }
}
function Ds(t, r, a, n, s, i, l) {
  const c = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (c === 0)
    return { unit: n.includes(r) ? r : n[n.length - 1], amount: "0" };
  for (const b of s) {
    if (!n.includes(b)) continue;
    const f = i[b];
    if (c >= f && c % f === 0)
      return { unit: b, amount: String(c / f) };
  }
  const d = n.includes(a) ? a : n[0];
  return {
    unit: d,
    amount: Gr(c / i[d], l)
  };
}
function Bs(t, r = "GB", a = Kr) {
  const n = a.length > 0 ? a : Kr;
  return Ds(t, r, "B", n, wd, Es, 4);
}
function Ls(t, r = "h", a = Ur) {
  const n = a.length > 0 ? a : Ur;
  return Ds(
    t,
    r,
    "s",
    n,
    Nd,
    _s,
    2
  );
}
function yu(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: i } = Bs(n);
  return `${i} ${s}`;
}
function wu(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: i } = Ls(n);
  return `${i} ${As(s, r)}`;
}
function kd(t, r, a) {
  let n = Math.max(r, Math.round(t));
  return typeof a == "number" && Number.isFinite(a) && (n = Math.min(a, n)), n;
}
function Rs({
  id: t,
  fallbackIdSuffix: r,
  value: a,
  onChange: n,
  min: s = 0,
  max: i,
  size: l = "default",
  disabled: c = !1,
  hideHint: d = !1,
  className: b,
  resolvedUnitLabel: f,
  factors: h,
  allowedUnits: g,
  pickBest: m,
  formatUnitLabel: p,
  buildHintText: v,
  "aria-label": y,
  "aria-describedby": S,
  placeholder: x
}) {
  const k = Te.useId(), D = t ?? `${k}-${r}`, B = `${D}-hint`, T = Number.isFinite(a) && a >= 0 ? Math.round(a) : 0, N = Te.useMemo(
    () => m(T),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [w, C] = Te.useState(N.unit), [I, A] = Te.useState(N.amount), E = Te.useRef(T);
  Te.useEffect(() => {
    if (T === E.current) return;
    E.current = T;
    const W = m(T);
    C(W.unit), A(W.amount);
  }, [T, m]);
  const O = h[w], X = (W) => {
    const V = W.target.value;
    if (V !== "" && !/^\d*\.?\d*$/.test(V) || (A(V), V.trim() === "")) return;
    const K = Number(V);
    if (!Number.isFinite(K) || K < 0) return;
    const Y = kd(K * O, s, i);
    E.current = Y, n(Y);
  }, Z = (W) => {
    const V = W.target.value;
    if (!g.includes(V)) return;
    C(V);
    const K = h[V];
    A(T === 0 ? "0" : Gr(T / K, 2));
  }, R = () => {
    (I.trim() === "" || !Number.isFinite(Number(I)) || Number(I) < 0) && A(T === 0 ? "0" : Gr(T / O, 2));
  }, z = [S, d ? void 0 : B].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ o("div", { className: u("space-y-1", b), children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: u(
          "flex items-stretch rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-surface,#ffffff)] shadow-2xs transition-colors focus-within:border-[var(--abc-primary,#2563eb)] focus-within:ring-1 focus-within:ring-[var(--abc-primary,#2563eb)] overflow-hidden w-full",
          c && "opacity-50 cursor-not-allowed",
          l === "sm" ? "h-8" : "h-9"
        ),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: D,
              type: "number",
              step: O === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: c,
              value: I,
              "aria-label": y,
              "aria-describedby": z,
              placeholder: x,
              onChange: X,
              onBlur: R,
              style: {
                appearance: "textfield",
                MozAppearance: "textfield",
                WebkitAppearance: "none",
                border: "none",
                outline: "none",
                boxShadow: "none",
                background: "transparent"
              },
              className: "min-w-0 flex-1 border-0 bg-transparent px-3 text-xs text-[var(--abc-fg,#0f172a)] font-mono tabular-nums outline-none focus:outline-none focus:ring-0 placeholder:text-[var(--abc-fg-muted,#94a3b8)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            }
          ),
          /* @__PURE__ */ e("div", { className: "w-[1px] bg-[var(--abc-border,#e2e8f0)] shrink-0 self-stretch my-1.5" }),
          /* @__PURE__ */ o("div", { className: "relative flex items-center shrink-0", children: [
            /* @__PURE__ */ e(
              "select",
              {
                "aria-label": f,
                disabled: c,
                value: w,
                onChange: Z,
                style: {
                  appearance: "none",
                  MozAppearance: "none",
                  WebkitAppearance: "none",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  background: "transparent"
                },
                className: "w-20 min-w-[76px] shrink-0 border-0 bg-transparent pl-2.5 pr-6 text-center text-xs font-mono font-semibold text-[var(--abc-fg-secondary,#334155)] outline-none focus:outline-none cursor-pointer hover:text-[var(--abc-fg,#0f172a)] [appearance:none] [&::-ms-expand]:hidden",
                children: g.map((W) => /* @__PURE__ */ e("option", { value: W, className: "bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]", children: p(W) }, W))
              }
            ),
            /* @__PURE__ */ e(pt, { className: "pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" })
          ] })
        ]
      }
    ),
    !d && /* @__PURE__ */ e("div", { id: B, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: v(T, w) }) })
  ] });
}
function Nu({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "GB",
  allowedUnits: n = Kr,
  unitAriaLabel: s,
  ...i
}) {
  const l = n.length > 0 ? n : Kr, c = Te.useCallback(
    (f) => Bs(f, a, l),
    [a, l]
  ), d = Te.useCallback((f) => f, []), b = Te.useCallback(
    (f) => f === 0 && r ? t === "zh" ? "= 0 (无上限)" : "= 0 (Unlimited)" : `= ${f.toLocaleString()} Bytes`,
    [t, r]
  );
  return /* @__PURE__ */ e(
    Rs,
    {
      ...i,
      fallbackIdSuffix: "bytes",
      factors: Es,
      allowedUnits: l,
      resolvedUnitLabel: s ?? (t === "zh" ? "字节单位" : "Byte unit"),
      pickBest: c,
      formatUnitLabel: d,
      buildHintText: b
    }
  );
}
function ku({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "h",
  allowedUnits: n = Ur,
  unitAriaLabel: s,
  ...i
}) {
  const l = n.length > 0 ? n : Ur, c = Te.useCallback(
    (f) => Ls(f, a, l),
    [a, l]
  ), d = Te.useCallback(
    (f) => As(f, t),
    [t]
  ), b = Te.useCallback(
    (f, h) => {
      if (f === 0 && r)
        return t === "zh" ? "= 0 秒 (无上限)" : "= 0s (Unlimited)";
      if (h === "s") {
        const g = Gr(f / 3600, 2);
        return t === "zh" ? `≈ ${g} 小时 (${f.toLocaleString()} 秒)` : `≈ ${g} hr (${f.toLocaleString()}s)`;
      }
      return `= ${f.toLocaleString()} ${t === "zh" ? "秒" : "Seconds"}`;
    },
    [t, r]
  );
  return /* @__PURE__ */ e(
    Rs,
    {
      ...i,
      fallbackIdSuffix: "duration",
      factors: _s,
      allowedUnits: l,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: c,
      formatUnitLabel: d,
      buildHintText: b
    }
  );
}
function Cu({
  items: t,
  activeKey: r,
  value: a,
  defaultActiveKey: n,
  onChange: s,
  variant: i = "line",
  size: l,
  motion: c,
  ariaLabel: d = "内容切换标签",
  extra: b,
  className: f,
  panelClassName: h
}) {
  var D;
  const g = pe(l, "md"), m = oe(c), p = Fe(), [v, y] = st({
    value: r ?? a,
    defaultValue: n ?? ((D = t[0]) == null ? void 0 : D.key) ?? "",
    onChange: s
  }), S = (B, T) => {
    const N = t.filter((C) => !C.disabled);
    if (N.length === 0) return;
    const w = N.findIndex((C) => {
      var I;
      return C.key === ((I = t[T]) == null ? void 0 : I.key);
    });
    if (B.key === "ArrowRight") {
      B.preventDefault();
      const C = N[(w + 1) % N.length];
      C && y(C.key);
    } else if (B.key === "ArrowLeft") {
      B.preventDefault();
      const C = N[(w - 1 + N.length) % N.length];
      C && y(C.key);
    }
  }, x = t.some((B) => B.children !== void 0), k = g === "xs" ? "px-2.5 py-1 text-[11px]" : g === "sm" ? "px-3 py-1.5 text-xs" : g === "lg" ? "px-4.5 py-2.5 text-sm" : i === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ o("div", { "data-motion": m, className: u("w-full", f), children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: u(
          "flex items-center justify-between gap-3",
          i === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              className: u(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                i === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : i === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((B, T) => {
                const N = B.key === v, w = `${p}-tab-${B.key}`;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    id: w,
                    type: "button",
                    role: "tab",
                    "aria-selected": N,
                    tabIndex: N ? 0 : -1,
                    disabled: B.disabled,
                    onClick: () => !B.disabled && y(B.key),
                    onKeyDown: (C) => S(C, T),
                    className: u(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      k,
                      i === "line" ? u(
                        "abc-tab-trigger",
                        N ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : i === "segmented" ? u(
                        "rounded-[var(--abc-radius-sm)]",
                        N ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : u(
                        "rounded-[var(--abc-radius-md)] border",
                        N ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]"
                      )
                    ),
                    children: [
                      B.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: B.icon }),
                      /* @__PURE__ */ e("span", { children: B.label }),
                      B.badge !== void 0 && (typeof B.badge == "number" || typeof B.badge == "string" ? /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums", children: B.badge }) : B.badge)
                    ]
                  },
                  B.key
                );
              })
            }
          ),
          b && /* @__PURE__ */ e("div", { className: "shrink-0", children: b })
        ]
      }
    ),
    x && /* @__PURE__ */ e("div", { children: t.map((B) => {
      const T = B.key === v, N = `${p}-tab-${B.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": N,
          tabIndex: T ? 0 : void 0,
          ...T ? {} : { hidden: "until-found" },
          children: T && /* @__PURE__ */ e("div", { className: u("pt-4", m !== "none" && "abc-animate-fade-in", h), children: B.children })
        },
        B.key
      );
    }) })
  ] });
}
const zn = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function zs(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const Ps = ({
  src: t,
  alt: r = "图片预览",
  size: a,
  motion: n,
  width: s,
  height: i,
  rounded: l = !1,
  fit: c = "contain",
  placeholder: d,
  className: b,
  zoomable: f = !0
}) => {
  const h = pe(a, "sm"), g = oe(n), m = s ?? zn[h], p = i ?? zn[h], [v, y] = $(!1), [S, x] = $(!1), [k, D] = $(1), [B, T] = $(0), N = typeof t == "string" ? t.trim() : "", w = zs(N), C = ce(() => N ? w && N.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(N)}` : N : "", [N, w]);
  if (de(() => {
    y(!1);
  }, [N]), !N || v)
    return d ? /* @__PURE__ */ e(Re, { children: d }) : /* @__PURE__ */ e(
      "div",
      {
        "data-motion": g,
        title: v ? "图片加载失败，请检查 URL 是否有效" : "暂无图片",
        style: {
          width: m,
          height: p,
          minWidth: typeof m == "number" ? m : void 0
        },
        className: u(
          "inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none",
          l ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          v && "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]",
          b
        ),
        children: v ? /* @__PURE__ */ e(At, { className: "h-4 w-4" }) : /* @__PURE__ */ e(es, { className: "h-4 w-4" })
      }
    );
  const I = (A) => {
    A.stopPropagation(), f && (D(1), T(0), x(!0));
  };
  return /* @__PURE__ */ o(Re, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        "data-motion": g,
        title: "点击预览大图 / 矢量图",
        "aria-label": f ? `预览 ${r}` : void 0,
        onClick: I,
        onKeyDown: (A) => {
          f && (A.key === "Enter" || A.key === " ") && (A.preventDefault(), I(A));
        },
        style: {
          width: m,
          height: p,
          minWidth: typeof m == "number" ? m : void 0
        },
        className: u(
          "abc-motion-control group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
          l ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          f && "cursor-zoom-in hover:border-[var(--abc-primary)]",
          b
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: C,
              alt: r,
              onError: () => y(!0),
              className: u(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                w || c === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          f && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ o(
      lt,
      {
        open: S,
        onClose: () => x(!1),
        title: r,
        size: "lg",
        motion: g,
        footer: /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => D((A) => Math.max(0.4, Number((A - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Yi, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ o("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(k * 100),
            "%"
          ] }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => D((A) => Math.min(3, Number((A + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Xi, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => T((A) => (A + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Xr, { className: "h-3.5 w-3.5" }),
                " 旋转"
              ]
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6", children: /* @__PURE__ */ e(
            "div",
            {
              style: { transform: `scale(${k}) rotate(${B}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: C, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Cd = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: i,
  motion: l,
  className: c
}) => {
  const d = pe(i, "sm"), b = oe(l), f = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", g = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[d];
  return /* @__PURE__ */ o("div", { "data-motion": b, className: u("space-y-2.5", c), children: [
    (t || r) && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: u("font-semibold text-[var(--abc-fg)]", d === "lg" ? "text-sm" : "text-xs"), children: t }),
      r && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: r })
    ] }),
    /* @__PURE__ */ e(
      "dl",
      {
        className: u(
          "m-0 grid",
          f,
          s ? "overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px" : "gap-x-6 gap-y-3"
        ),
        children: a.map((m, p) => {
          const v = m.span && m.span >= n ? "sm:col-span-full" : m.span === 2 ? "sm:col-span-2" : m.span === 3 ? "lg:col-span-3" : void 0;
          return s ? /* @__PURE__ */ o(
            "div",
            {
              className: u("flex min-w-0 bg-[var(--abc-bg-surface)]", v),
              children: [
                /* @__PURE__ */ e(
                  "dt",
                  {
                    className: u(
                      "w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center",
                      g
                    ),
                    children: m.label
                  }
                ),
                /* @__PURE__ */ e("dd", { className: u("m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center", g), children: m.children ?? "-" })
              ]
            },
            m.key ?? p
          ) : /* @__PURE__ */ o("div", { className: u("min-w-0 space-y-0.5", v), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: m.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: m.children ?? "-" })
          ] }, m.key ?? p);
        })
      }
    )
  ] });
}, Sd = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Id = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, Su = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: i,
  motion: l,
  className: c
}) => {
  const d = Fe(), b = pe(i, "sm"), f = oe(l), [h, g] = $(a), m = n !== void 0 ? n : h, p = (v, y) => {
    let S;
    r ? S = y ? [v] : [] : S = y ? Array.from(/* @__PURE__ */ new Set([...m, v])) : m.filter((x) => x !== v), n === void 0 && g(S), s == null || s(S);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-motion": f,
      className: u(
        "divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        c
      ),
      children: t.map((v) => {
        const y = m.includes(v.key);
        return /* @__PURE__ */ o(
          "details",
          {
            name: r ? d : void 0,
            open: y,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ o(
                "summary",
                {
                  "aria-disabled": v.disabled || void 0,
                  onClick: (S) => {
                    S.preventDefault(), !v.disabled && p(v.key, !y);
                  },
                  className: u(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Sd[b],
                    v.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ o("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        pt,
                        {
                          className: u(
                            "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-fast)]",
                            y ? "rotate-0" : "-rotate-90"
                          )
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "truncate", children: v.label })
                    ] }),
                    v.extra && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: v.extra })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: u(
                    "border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] leading-relaxed text-[var(--abc-fg-secondary)]",
                    Id[b]
                  ),
                  children: v.children
                }
              )
            ]
          },
          v.key
        );
      })
    }
  );
}, Md = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, Iu = ({ items: t, size: r, motion: a, className: n }) => {
  const s = pe(r, "sm"), i = oe(a), l = {
    xs: "gap-2.5 pb-2.5 last:pb-0",
    sm: "gap-3 pb-4 last:pb-0",
    md: "gap-3.5 pb-5 last:pb-0",
    lg: "gap-4 pb-6 last:pb-0"
  }, c = {
    xs: "text-[11px]",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, d = {
    xs: "text-[11px]",
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm"
  };
  return /* @__PURE__ */ e("ol", { "data-motion": i, className: u("m-0 list-none space-y-0 p-0", n), children: t.map((b, f) => {
    const h = f === t.length - 1, g = b.tone ?? "primary";
    return /* @__PURE__ */ o("li", { className: u("relative flex", l[s]), children: [
      !h && /* @__PURE__ */ e(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
        }
      ),
      /* @__PURE__ */ e("span", { className: "relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center", children: b.icon ? b.icon : /* @__PURE__ */ e(
        "span",
        {
          className: u(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            Md[g]
          )
        }
      ) }),
      /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: u("font-medium text-[var(--abc-fg)]", c[s]), children: b.title }),
          b.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: b.time })
        ] }),
        b.description && /* @__PURE__ */ e("div", { className: u("leading-relaxed text-[var(--abc-fg-muted)]", d[s]), children: b.description })
      ] })
    ] }, b.key ?? f);
  }) });
}, js = Te.forwardRef(
  ({
    value: t,
    displayValue: r,
    copyLabel: a = "复制",
    copiedLabel: n = "已复制",
    hideCopyButton: s = !1,
    className: i,
    codeClassName: l,
    ...c
  }, d) => {
    const [b, f] = Te.useState(!1), h = async (g) => {
      if (g.stopPropagation(), !t) return;
      await Qr(t) && (f(!0), setTimeout(() => f(!1), 1600));
    };
    return /* @__PURE__ */ o(
      "span",
      {
        ref: d,
        "data-slot": "copyable-code",
        "data-copied": b ? "true" : void 0,
        className: u("inline-flex max-w-full items-center gap-1.5 align-baseline", i),
        ...c,
        children: [
          /* @__PURE__ */ e(
            "code",
            {
              title: t,
              className: u(
                "break-all rounded bg-[var(--abc-bg-subtle,#f1f5f9)] px-1.5 py-0.5 font-mono text-xs text-[var(--abc-fg,#0f172a)]",
                l
              ),
              children: r ?? t
            }
          ),
          !s && t ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: h,
              "aria-label": b ? n : `${a}: ${t}`,
              title: b ? n : a,
              className: u(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                b && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: b ? /* @__PURE__ */ e(He, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
js.displayName = "CopyableCode";
const Td = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
  full: "col-span-full"
}, en = Te.forwardRef(
  ({
    label: t,
    value: r,
    children: a,
    mono: n = !1,
    copyValue: s,
    span: i = 1,
    variant: l = "default",
    className: c,
    valueClassName: d,
    ...b
  }, f) => {
    const h = a ?? r;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: f,
        "data-slot": "description-item",
        className: u(
          "min-w-0",
          l === "cards" && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]",
          l === "divided" && "border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0",
          Td[i],
          c
        ),
        ...b,
        children: [
          /* @__PURE__ */ e(
            "dt",
            {
              "data-slot": "description-term",
              className: u(
                "text-xs font-medium text-[var(--abc-fg-muted,#64748b)]",
                l === "cards" && "text-[11px] uppercase tracking-wider"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ e(
            "dd",
            {
              "data-slot": "description-details",
              className: u(
                "mt-1 break-all text-xs text-[var(--abc-fg,#0f172a)]",
                l === "compact" && "mt-0.5 text-xs",
                n && "font-mono text-xs",
                d
              ),
              children: s ? /* @__PURE__ */ e(
                js,
                {
                  value: s,
                  displayValue: h,
                  codeClassName: "bg-transparent px-0 py-0 text-inherit"
                }
              ) : h
            }
          )
        ]
      }
    );
  }
);
en.displayName = "DescriptionItem";
const Mu = en, Ed = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Os = Te.forwardRef(
  ({ columns: t = 2, variant: r = "default", density: a, bordered: n = !1, items: s, children: i, className: l, ...c }, d) => {
    const b = a === "compact" && r === "default" ? "compact" : r;
    return /* @__PURE__ */ e(
      "dl",
      {
        ref: d,
        "data-slot": "description-list",
        className: u(
          "grid",
          b === "compact" ? "gap-2.5" : "gap-3.5",
          n && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3",
          Ed[t],
          l
        ),
        ...c,
        children: s ? s.map((f, h) => /* @__PURE__ */ e(
          en,
          {
            label: f.label,
            value: f.value,
            mono: f.mono,
            copyValue: f.copyValue,
            span: f.span,
            variant: b,
            className: f.className
          },
          f.key ?? (typeof f.label == "string" ? f.label : h)
        )) : i
      }
    );
  }
);
Os.displayName = "DescriptionList";
const _d = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, Ad = {
  xs: "px-1.5 py-0.2 text-[10px] gap-1",
  sm: "px-2 py-0.5 text-xs gap-1.5",
  md: "px-2.5 py-1 text-xs gap-2"
};
function Tu({
  icon: t,
  label: r,
  variant: a = "default",
  size: n = "sm",
  className: s,
  ...i
}) {
  return /* @__PURE__ */ o(
    "span",
    {
      "data-slot": "icon-badge",
      className: u(
        "inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none",
        _d[a],
        Ad[n],
        s
      ),
      ...i,
      children: [
        t && /* @__PURE__ */ e("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ e("span", { children: r })
      ]
    }
  );
}
function Eu({
  text: t,
  iconSize: r = 14,
  preserveSrToken: a = !1,
  className: n,
  ...s
}) {
  const i = t ? t.replace(/\[icon:[^\]]+\]/g, "").trim() : "";
  return /* @__PURE__ */ e("span", { className: u("inline-flex items-center gap-1.5", n), ...s, children: /* @__PURE__ */ e("span", { children: i || t }) });
}
const Dd = {
  error: {
    container: "border-red-500/25 bg-red-50/50 text-red-950 dark:bg-red-950/20 dark:text-red-200 dark:border-red-500/30",
    badge: "border-red-500/30 bg-white/80 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    iconWrap: "bg-red-500/15 text-red-600 dark:text-red-400",
    Icon: At,
    defaultRole: "alert"
  },
  warning: {
    container: "border-amber-500/25 bg-amber-50/50 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-500/30",
    badge: "border-amber-500/30 bg-white/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    iconWrap: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    Icon: Ot,
    defaultRole: "alert"
  },
  success: {
    container: "border-emerald-500/25 bg-emerald-50/50 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-500/30",
    badge: "border-emerald-500/30 bg-white/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    iconWrap: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    Icon: Ct,
    defaultRole: "status"
  },
  info: {
    container: "border-blue-500/25 bg-blue-50/50 text-blue-950 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-500/30",
    badge: "border-blue-500/30 bg-white/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    iconWrap: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Icon: wr,
    defaultRole: "status"
  }
}, Ft = Te.forwardRef(
  function({
    variant: r = "error",
    title: a,
    message: n,
    description: s,
    code: i,
    status: l,
    requestId: c,
    actionHint: d,
    action: b,
    onDismiss: f,
    dismissLabel: h = "关闭通知",
    hideIcon: g = !1,
    role: m,
    className: p,
    children: v,
    ...y
  }, S) {
    const x = Dd[r], k = x.Icon, D = n ?? v;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: S,
        role: m ?? x.defaultRole,
        "data-slot": "notification-banner",
        "data-variant": r,
        className: u(
          "relative flex flex-col gap-2 rounded-[var(--abc-radius-lg,0.625rem)] border p-3.5 text-xs shadow-2xs transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-3",
          x.container,
          p
        ),
        ...y,
        children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
            !g && /* @__PURE__ */ e(
              "span",
              {
                className: u(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  x.iconWrap
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(k, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 space-y-1", children: [
              (a || i || l != null || c) && /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-1.5 font-medium", children: [
                l != null && /* @__PURE__ */ o(
                  "span",
                  {
                    className: u(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      x.badge
                    ),
                    children: [
                      "HTTP ",
                      l
                    ]
                  }
                ),
                i && /* @__PURE__ */ e(
                  "span",
                  {
                    className: u(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      x.badge
                    ),
                    children: i
                  }
                ),
                c && /* @__PURE__ */ o(
                  "span",
                  {
                    className: "font-mono text-[10px] opacity-75 truncate max-w-[200px]",
                    title: `Request ID: ${c}`,
                    children: [
                      "req: ",
                      c
                    ]
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: a })
              ] }),
              D && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: D }),
              s && /* @__PURE__ */ e("div", { className: "text-[11px] leading-normal opacity-85", children: s }),
              d && /* @__PURE__ */ e("div", { className: "pt-0.5 text-[11px] font-medium text-primary", children: d })
            ] })
          ] }),
          (b || f) && /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2 self-end sm:self-start", children: [
            b,
            f && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": h,
                onClick: f,
                className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    );
  }
);
Ft.displayName = "NotificationBanner";
function _u({
  error: t,
  fallbackTitle: r = "加载失败",
  fallbackMessage: a = "无法加载该区块数据，请重试。",
  action: n,
  retry: s,
  retryLabel: i = "重试",
  isRetrying: l = !1,
  className: c,
  ...d
}) {
  if (!t) return null;
  const b = t, f = (b == null ? void 0 : b.message) || a;
  return /* @__PURE__ */ e(
    Ft,
    {
      variant: "error",
      title: r,
      message: f,
      status: b == null ? void 0 : b.status,
      code: b == null ? void 0 : b.code,
      requestId: b == null ? void 0 : b.requestId,
      className: c,
      action: n ?? (s ? /* @__PURE__ */ o(
        ye,
        {
          size: "xs",
          variant: "outline",
          onClick: s,
          disabled: l,
          className: "h-7 text-xs bg-white/70 dark:bg-slate-900/60",
          children: [
            l ? /* @__PURE__ */ e(Dt, { className: "mr-1 h-3 w-3 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ e(tr, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: i })
          ]
        }
      ) : null),
      ...d
    }
  );
}
function Au({
  message: t,
  code: r,
  status: a,
  requestId: n,
  onRetry: s,
  retryLabel: i = "重试读取",
  pendingLabel: l,
  retryAriaLabel: c,
  pending: d = !1,
  action: b,
  ...f
}) {
  const h = b ?? (s ? /* @__PURE__ */ o(
    ye,
    {
      variant: "outline",
      size: "sm",
      disabled: d,
      onClick: s,
      "aria-label": c,
      children: [
        /* @__PURE__ */ e(
          tr,
          {
            "aria-hidden": "true",
            className: u(
              "mr-1 h-3 w-3",
              d && "animate-spin motion-reduce:animate-[spin_6s_linear_infinite]"
            )
          }
        ),
        /* @__PURE__ */ e("span", { children: d && l ? l : i })
      ]
    }
  ) : void 0);
  return /* @__PURE__ */ e(
    Ft,
    {
      variant: "error",
      role: "alert",
      message: t,
      code: r,
      status: a,
      requestId: n,
      action: h,
      ...f
    }
  );
}
function Du({
  message: t,
  paused: r = !1,
  size: a = "md",
  className: n,
  ...s
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      role: "status",
      "data-slot": "loading-state-card",
      className: u(
        "flex items-center gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-xs text-[var(--abc-fg-muted)] shadow-2xs",
        a === "sm" ? "px-3 py-2 text-[11px]" : "p-3.5",
        r && "border-amber-500/30 bg-amber-50/50 text-amber-900 dark:bg-amber-950/20 dark:text-amber-200",
        n
      ),
      ...s,
      children: [
        r ? /* @__PURE__ */ e(qi, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-amber-600" }) : /* @__PURE__ */ e(
          Dt,
          {
            "aria-hidden": "true",
            className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]"
          }
        ),
        /* @__PURE__ */ e("span", { children: t })
      ]
    }
  );
}
function Bu({
  items: t,
  emptyMessage: r = "当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。",
  className: a
}) {
  return t.length === 0 ? /* @__PURE__ */ e(
    Ft,
    {
      variant: "success",
      role: "status",
      message: r,
      className: a
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "attention-list",
      className: u(
        "divide-y divide-[var(--abc-border)] rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs",
        a
      ),
      children: t.map((n, s) => {
        const i = "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]", l = !!n.restriction, c = /* @__PURE__ */ o(Re, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: u(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                n.severity === "critical" && "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400",
                n.severity === "high" && "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
                !["critical", "high"].includes(n.severity) && "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
              ),
              children: /* @__PURE__ */ e(Zi, { "aria-hidden": "true", className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ o("span", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-[var(--abc-fg)]", children: n.label }),
            n.restriction ? /* @__PURE__ */ e("span", { className: "block text-xs text-[var(--abc-fg-muted)]", children: n.restriction }) : /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: "font-mono text-[11px] uppercase tracking-wider text-[var(--abc-fg-muted)]",
                children: [
                  n.severity,
                  " · ",
                  n.kind
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("span", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--abc-fg-secondary)]", children: n.count }),
            !l && (n.href || n.onClick) && /* @__PURE__ */ e(ns, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--abc-fg-muted)]" })
          ] })
        ] });
        return !l && n.href ? /* @__PURE__ */ e("a", { href: n.href, className: i, children: c }, n.kind || s) : !l && n.onClick ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n.onClick,
            className: u(i, "w-full text-left cursor-pointer"),
            children: c
          },
          n.kind || s
        ) : /* @__PURE__ */ e("div", { className: i, children: c }, n.kind || s);
      })
    }
  );
}
function Lu({
  open: t,
  title: r,
  description: a,
  cancelLabel: n = "取消",
  confirmLabel: s = "确认",
  workingLabel: i = "正在处理…",
  variant: l = "default",
  loading: c = !1,
  closeLabel: d = "关闭",
  className: b,
  onCancel: f,
  onConfirm: h,
  children: g
}) {
  const m = l === "destructive";
  return /* @__PURE__ */ e(lt, { open: t, onOpenChange: (p) => !p && f(), children: /* @__PURE__ */ o(
    Ha,
    {
      "data-slot": "confirm-dialog",
      className: u("w-full max-w-md", b),
      closeLabel: d,
      closeDisabled: c,
      children: [
        /* @__PURE__ */ o(Ka, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2.5", children: [
            m ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Ot, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(yr, { className: "h-4 w-4", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(Ga, { className: "text-base font-semibold leading-tight", children: r })
          ] }),
          a && /* @__PURE__ */ e(Va, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
        ] }),
        g && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: g }),
        /* @__PURE__ */ o(Ua, { className: "gap-2 pt-2", children: [
          /* @__PURE__ */ e(
            ye,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: c,
              onClick: f,
              children: n
            }
          ),
          /* @__PURE__ */ e(
            ye,
            {
              type: "button",
              variant: m ? "danger" : "primary",
              size: "sm",
              loading: c,
              onClick: h,
              children: c ? i : s
            }
          )
        ] })
      ]
    }
  ) });
}
let Qe = [];
const Ba = /* @__PURE__ */ new Set();
function La() {
  Ba.forEach((t) => t());
}
function Bd(t) {
  const r = Qe.findIndex((a) => a.id === t.id);
  if (r >= 0) {
    const a = Qe[r];
    (a.cascadeMode !== t.cascadeMode || a.widthPx !== t.widthPx) && (Qe[r] = t, La());
  } else
    Qe = [...Qe, t], La();
}
function Pn(t) {
  Qe.some((r) => r.id === t) && (Qe = Qe.filter((r) => r.id !== t), La());
}
const Ld = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, ta = ({
  open: t,
  visible: r,
  onClose: a,
  title: n,
  description: s,
  children: i,
  footer: l,
  size: c = "md",
  motion: d,
  width: b,
  placement: f = "right",
  closeOnClickModal: h = !0,
  resizable: g = !0,
  minWidth: m = 340,
  storageKey: p,
  push: v = !0,
  pushDistance: y = 140,
  cascadeMode: S,
  adjacentOffset: x,
  bodyClassName: k,
  className: D,
  role: B = "dialog"
}) => {
  const T = hl(S), N = S ?? T, w = Fe(), C = Fe(), I = t ?? r ?? !1, A = oe(d), { isMounted: E, isVisible: O } = $t(I, A === "none" ? 0 : 220), X = ue(a);
  X.current = a;
  const [, Z] = $(0), [R, z] = $(!1), [W, V] = $(!1), [K, Y] = $(() => {
    if (!p || typeof window > "u") return null;
    try {
      const U = Number(window.localStorage.getItem(`abc_drawer_w_${p}`));
      return Number.isFinite(U) && U >= m ? U : null;
    } catch {
      return null;
    }
  });
  de(() => {
    const U = () => Z((re) => re + 1);
    return Ba.add(U), () => {
      Ba.delete(U);
    };
  }, []);
  const se = typeof b == "number" ? b : K ?? (c ? Ld[c] : 560) ?? 560;
  de(() => {
    if (I)
      return Bd({
        id: w,
        cascadeMode: N,
        widthPx: se
      }), () => Pn(w);
    Pn(w);
  }, [I, w, N, se]), de(() => {
    if (!E) return;
    const U = (re) => {
      const F = Qe[Qe.length - 1];
      re.key === "Escape" && (!F || F.id === w) && (re.stopPropagation(), X.current());
    };
    return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
  }, [E, w]);
  const P = Qe.findIndex((U) => U.id === w), q = P >= 0 ? Math.max(0, Qe.length - 1 - P) : 0, j = P >= 0 ? P + 1 : 1, G = P >= 0 ? Qe.slice(P + 1) : [], ne = Qe.some((U) => U.cascadeMode === "adjacent"), te = N === "adjacent" || ne, M = G.reduce((U, re) => U + (re.widthPx || 560), 0), le = typeof window < "u" ? window.innerWidth : 1440;
  let Ee = se;
  if (te && q > 0 && M > 0) {
    const U = Math.max(m, le - M - 24);
    Ee > U && (Ee = U);
  }
  const Be = v && q > 0 ? te ? x ?? M : q * y : 0, me = v && q > 0 ? te ? 1 : Math.max(0.92, 1 - q * 0.025) : 1, ve = f === "right" ? -1 : 1, ie = (U) => {
    U.preventDefault(), V(!0);
    const re = (J) => {
      const we = Math.max(m, window.innerWidth - 32), We = f === "right" ? window.innerWidth - J.clientX : J.clientX, Ve = Math.min(we, Math.max(m, We));
      if (z(!1), Y(Ve), p)
        try {
          window.localStorage.setItem(`abc_drawer_w_${p}`, String(Math.round(Ve)));
        } catch {
        }
    }, F = () => {
      V(!1), window.removeEventListener("mousemove", re), window.removeEventListener("mouseup", F);
    };
    window.addEventListener("mousemove", re), window.addEventListener("mouseup", F);
  };
  if (!E || typeof document > "u") return null;
  const H = R ? "100dvw" : K ? `${K}px` : typeof b == "number" ? `${Ee}px` : `${Ee}px`;
  return dt(
    /* @__PURE__ */ o(
      "div",
      {
        role: B,
        "aria-modal": B === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? C : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, P) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          P === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                h && a();
              },
              "data-motion": A,
              className: u(
                "fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto",
                A !== "none" && (O ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ) : null,
          /* @__PURE__ */ o(
            "div",
            {
              "data-motion": A,
              style: {
                width: H,
                transform: A === "none" ? Be > 0 ? `translate3d(${ve * Be}px, 0, 0) scale(${me})` : void 0 : O ? Be > 0 ? `translate3d(${ve * Be}px, 0, 0) scale(${me})` : "translate3d(0, 0, 0)" : f === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: A === "none" || W ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: u(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                te && P > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                f === "right" ? "ml-auto border-l" : "mr-auto border-r",
                D
              ),
              children: [
                g && !R && /* @__PURE__ */ o(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: ie,
                    className: u(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      f === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(Fa, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                      Qe.length > 1 && /* @__PURE__ */ o(
                        "span",
                        {
                          title: te ? `并排抽屉层级: ${j} 级` : `抽屉栈深度: ${j} 级`,
                          className: u(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            q === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(Jn, { className: "h-2.5 w-2.5" }),
                            "L",
                            j,
                            te && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: q === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: C, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1", children: [
                    g && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": R ? "还原默认宽度" : "全宽展开",
                        onClick: () => z((U) => !U),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: R ? /* @__PURE__ */ e(Ra, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "关闭抽屉",
                        onClick: a,
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(Ue, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: u("flex-1 overflow-y-auto px-5 py-4 text-xs", k), children: i }),
                l && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: l })
              ]
            }
          )
        ]
      }
    ),
    document.body
  );
};
function Rd({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-header",
      className: u("flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5", t),
      ...r
    }
  );
}
function zd({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "h2",
    {
      "data-slot": "drawer-title",
      className: u("text-lg font-semibold tracking-tight text-[var(--abc-fg)]", t),
      ...r
    }
  );
}
function Pd({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: u("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...r
    }
  );
}
function jd({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: u("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...r
    }
  );
}
function Od({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-footer",
      className: u(
        "flex flex-wrap items-center justify-between gap-3 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-6 py-4",
        t
      ),
      ...r
    }
  );
}
const $d = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Fd = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Ru = ({
  spinning: t = !0,
  tip: r,
  text: a,
  size: n,
  motion: s,
  fullscreen: i = !1,
  fullScreen: l = !1,
  className: c,
  children: d
}) => {
  const b = r ?? a, f = !!(i || l), h = pe(n, "md"), g = oe(s), m = /* @__PURE__ */ o(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": g,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(Dt, { className: u("animate-spin", $d[h]) }),
        b && /* @__PURE__ */ e("span", { className: u("font-medium text-[var(--abc-fg-muted)]", Fd[h]), children: b })
      ]
    }
  );
  return f ? t ? /* @__PURE__ */ e(
    "div",
    {
      "data-motion": g,
      className: u(
        "fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs",
        g !== "none" && "abc-animate-fade-in"
      ),
      children: m
    }
  ) : null : d !== void 0 ? /* @__PURE__ */ o("div", { "data-motion": g, className: u("relative", c), children: [
    d,
    t && /* @__PURE__ */ e(
      "div",
      {
        className: u(
          "absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]",
          g !== "none" && "abc-animate-fade-in"
        ),
        children: m
      }
    )
  ] }) : t ? /* @__PURE__ */ e("div", { "data-motion": g, className: u("flex items-center justify-center py-8", c), children: m }) : null;
}, Wd = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  children: s,
  className: i
}) => {
  const { resolvedTheme: l } = Ge(), c = ue(null), d = ue(null), b = he(() => {
    const f = c.current;
    if (!f) return;
    if (!r || !t || Array.isArray(t) && t.length === 0) {
      d.current && d.current.parentNode === f && f.removeChild(d.current), d.current = null;
      return;
    }
    if (typeof document > "u") return;
    const h = document.createElement("canvas"), g = h.getContext("2d");
    if (!g) return;
    const m = Array.isArray(t) ? t : [t], p = Math.max(window.devicePixelRatio || 1, 1), v = 210 + n[0], y = 90 + n[1];
    h.width = v * p, h.height = y * p;
    let S = "";
    try {
      g.scale(p, p), g.translate(v / 2, y / 2), g.rotate(a * Math.PI / 180), g.font = "500 12px Inter, -apple-system, sans-serif", g.fillStyle = l === "dark" ? "rgba(226, 232, 240, 0.065)" : "rgba(15, 23, 42, 0.055)", g.textAlign = "center", g.textBaseline = "middle", m.forEach((k, D) => {
        const B = (D - (m.length - 1) / 2) * 18;
        g.fillText(k, 0, B);
      }), S = h.toDataURL();
    } catch {
      return;
    }
    if (!S) return;
    let x = d.current;
    x || (x = document.createElement("div"), d.current = x), x.setAttribute("data-watermark-overlay", "true"), x.setAttribute(
      "style",
      [
        "position: absolute",
        "inset: 0",
        "pointer-events: none",
        "z-index: 40",
        `background-image: url(${S})`,
        "background-repeat: repeat",
        `background-size: ${v}px ${y}px`
      ].join(" !important; ") + " !important;"
    ), x.parentNode !== f && f.appendChild(x);
  }, [t, r, n, l, a]);
  return de(() => {
    b();
    const f = c.current;
    if (!f || !r || typeof MutationObserver > "u") return;
    const h = new MutationObserver((g) => {
      for (const m of g)
        if (m.type === "childList") {
          const p = Array.from(m.removedNodes);
          if (d.current && p.includes(d.current)) {
            d.current = null, b();
            break;
          }
        } else if (m.type === "attributes" && m.target === d.current) {
          b();
          break;
        }
    });
    return h.observe(f, {
      childList: !0,
      attributes: !0,
      subtree: !0,
      attributeFilter: ["style", "class", "hidden"]
    }), () => h.disconnect();
  }, [r, b]), /* @__PURE__ */ e("div", { ref: c, className: u("relative", i), children: s });
}, Hd = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(wr, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Ct, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Ot, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(At, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, Kd = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, zu = ({
  tone: t = "info",
  title: r,
  description: a,
  children: n,
  showIcon: s = !0,
  closable: i = !1,
  onClose: l,
  action: c,
  size: d,
  motion: b,
  className: f
}) => {
  const [h, g] = $(!1), m = pe(d, "sm"), p = oe(b);
  if (h) return null;
  const v = Hd[t], y = a ?? n;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "alert",
      "data-motion": p,
      className: u(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        Kd[m],
        p !== "none" && "abc-animate-fade-in",
        v.box,
        f
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: v.icon }),
        /* @__PURE__ */ o("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          r && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)]", children: r }),
          y && /* @__PURE__ */ e("div", { className: "leading-relaxed text-[var(--abc-fg-secondary)]", children: y })
        ] }),
        c && /* @__PURE__ */ e("div", { className: "shrink-0", children: c }),
        i && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "关闭提示",
            onClick: () => {
              g(!0), l == null || l();
            },
            className: "shrink-0 rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, Ud = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, Gd = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, Vd = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, Yd = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  showInfo: n = !0,
  size: s,
  motion: i,
  className: l
}) => {
  const c = pe(typeof s == "string" ? s : void 0, "sm"), d = oe(i), b = Math.max(0, Math.min(100, Math.round(t))), f = Vd[a];
  if (r === "circle") {
    const g = typeof s == "number" ? s : Ud[c], m = Math.max(4, Math.round(g * 0.09)), p = (g - m) / 2, v = 2 * Math.PI * p, y = v - b / 100 * v;
    return /* @__PURE__ */ o(
      "div",
      {
        role: "progressbar",
        "data-motion": d,
        "aria-valuenow": b,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: u("relative inline-flex items-center justify-center", l),
        style: { width: g, height: g },
        children: [
          /* @__PURE__ */ o("svg", { width: g, height: g, className: "-rotate-90", children: [
            /* @__PURE__ */ e(
              "circle",
              {
                cx: g / 2,
                cy: g / 2,
                r: p,
                fill: "none",
                stroke: "var(--abc-bg-subtle)",
                strokeWidth: m
              }
            ),
            /* @__PURE__ */ e(
              "circle",
              {
                cx: g / 2,
                cy: g / 2,
                r: p,
                fill: "none",
                stroke: f,
                strokeWidth: m,
                strokeLinecap: "round",
                strokeDasharray: v,
                strokeDashoffset: y,
                className: "transition-all duration-[var(--abc-motion-slow)]"
              }
            )
          ] }),
          n && /* @__PURE__ */ o("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            b,
            "%"
          ] })
        ]
      }
    );
  }
  const h = typeof s == "number" ? s : Gd[c];
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "data-motion": d,
      "aria-valuenow": b,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: u("flex w-full items-center gap-2.5", l),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "flex-1 overflow-hidden rounded-full bg-[var(--abc-bg-subtle)]",
            style: { height: h },
            children: /* @__PURE__ */ e(
              "div",
              {
                className: "h-full rounded-full transition-all duration-[var(--abc-motion-slow)]",
                style: { width: `${b}%`, backgroundColor: f }
              }
            )
          }
        ),
        n && /* @__PURE__ */ o("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          b,
          "%"
        ] })
      ]
    }
  );
}, Xd = {
  success: {
    icon: /* @__PURE__ */ e(Ct, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(wr, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e(Ot, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e(At, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(Yr, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(Qi, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(Ji, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, qd = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: i,
  motion: l,
  className: c
}) => {
  const d = Xd[t], b = pe(i, "md"), f = oe(l);
  return /* @__PURE__ */ o(
    "div",
    {
      "data-motion": f,
      className: u(
        "flex flex-col items-center justify-center text-center",
        {
          xs: "px-4 py-6",
          sm: "px-5 py-8",
          md: "px-6 py-12",
          lg: "px-8 py-16"
        }[b],
        f !== "none" && "abc-animate-fade-in",
        c
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: u(
              "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl",
              d.badgeClass
            ),
            children: d.icon
          }
        ),
        /* @__PURE__ */ e("h3", { className: "text-base font-bold text-[var(--abc-fg)]", children: r }),
        a && /* @__PURE__ */ e("p", { className: "mt-1.5 max-w-md text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: a }),
        n && /* @__PURE__ */ e("div", { className: "mt-5 flex flex-wrap items-center justify-center gap-2.5", children: n }),
        s && /* @__PURE__ */ e("div", { className: "mt-6 w-full max-w-xl rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-4 text-left text-xs", children: s })
      ]
    }
  );
};
class Zd extends je.Component {
  constructor() {
    super(...arguments);
    ca(this, "state", { error: null });
    ca(this, "handleReset", () => {
      var a, n;
      this.setState({ error: null }), (n = (a = this.props).onReset) == null || n.call(a);
    });
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  componentDidUpdate(a) {
    this.state.error && a.resetKey !== this.props.resetKey && this.setState({ error: null });
  }
  render() {
    const { error: a } = this.state;
    if (!a) return this.props.children;
    if (typeof this.props.fallback == "function")
      return this.props.fallback(a, this.handleReset);
    if (this.props.fallback)
      return this.props.fallback;
    const n = this.props.tabTitle || this.props.title || "当前页面模块";
    return /* @__PURE__ */ e(
      qd,
      {
        status: "500",
        title: `${n}加载或渲染发生异常`,
        subTitle: a.message || "捕获到未知运行时渲染错误，其他工作区页签不受影响。",
        extra: /* @__PURE__ */ e(
          ye,
          {
            variant: "primary",
            icon: /* @__PURE__ */ e(tr, { className: "h-3.5 w-3.5" }),
            onClick: this.handleReset,
            children: "重新加载此模块"
          }
        )
      }
    );
  }
}
const Pu = Zd;
function ju({
  title: t,
  secret: r,
  open: a,
  secretValue: n,
  description: s = "此密钥仅显示一次。请在关闭前复制并安全存储。",
  secretLabel: i,
  metadata: l = [],
  closeLabel: c = "关闭",
  acknowledgeLabel: d = "我已妥善保存此密钥",
  copyLabel: b = "复制密钥",
  copiedLabel: f = "已复制",
  copyErrorMessage: h = "剪贴板写入失败，请手动选择复制。",
  className: g,
  onClose: m
}) {
  const p = r ?? n ?? null, v = a !== void 0 ? a : !!p, [y, S] = Te.useState(!1), [x, k] = Te.useState(!1), [D, B] = Te.useState(null);
  if (Te.useEffect(() => {
    v || (S(!1), k(!1), B(null));
  }, [v]), !v || !p)
    return null;
  const T = async () => {
    B(null), await Qr(p) ? (S(!0), setTimeout(() => S(!1), 2e3)) : B(h);
  };
  return /* @__PURE__ */ e(lt, { open: v, onOpenChange: (N) => !N && m(), children: /* @__PURE__ */ o(
    Ha,
    {
      "data-slot": "one-time-secret-dialog",
      className: u("w-full max-w-lg", g),
      closeLabel: c,
      children: [
        /* @__PURE__ */ o(Ka, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300", children: /* @__PURE__ */ e(Qn, { className: "h-4 w-4", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(Ga, { className: "text-base font-semibold leading-tight", children: t })
          ] }),
          /* @__PURE__ */ e(Va, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: s })
        ] }),
        /* @__PURE__ */ o("div", { className: "space-y-3 py-2 text-xs", children: [
          /* @__PURE__ */ e(
            Ft,
            {
              variant: "warning",
              title: "请立即备份",
              message: "关闭此窗口后将无法再次检索该明文内容，丢失将需要重新生成。"
            }
          ),
          i && /* @__PURE__ */ e("span", { className: "block font-medium text-[var(--abc-fg)]", children: i }),
          /* @__PURE__ */ o("div", { className: "relative rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3 pr-12", children: [
            /* @__PURE__ */ e("code", { className: "block select-all break-all font-mono text-xs text-[var(--abc-fg)]", children: p }),
            /* @__PURE__ */ e(
              ye,
              {
                type: "button",
                variant: "outline",
                size: "xs",
                onClick: T,
                className: "absolute right-2 top-2 h-7 w-7 p-0",
                title: y ? f : b,
                "aria-label": y ? f : b,
                children: y ? /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
              }
            )
          ] }),
          D && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: D }),
          l.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
            Os,
            {
              items: l.map((N) => ({
                label: N.label,
                value: N.value,
                mono: !0
              })),
              variant: "compact",
              columns: 1
            }
          ) }),
          /* @__PURE__ */ o("label", { className: "flex cursor-pointer items-start gap-2 pt-1 select-none", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                checked: x,
                onChange: (N) => k(N.target.checked),
                className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: d })
          ] })
        ] }),
        /* @__PURE__ */ e(Ua, { className: "pt-2", children: /* @__PURE__ */ e(
          ye,
          {
            type: "button",
            variant: "primary",
            size: "sm",
            disabled: !x,
            onClick: m,
            children: c
          }
        ) })
      ]
    }
  ) });
}
const Jd = {
  default: "xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]",
  balanced: "xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]",
  "wide-master": "xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]"
};
function Ou({
  children: t,
  inspector: r,
  ratio: a = "default",
  stickyInspector: n = !0,
  className: s,
  ...i
}) {
  const l = Te.Children.toArray(t), c = r !== void 0 ? t : l[0], d = r !== void 0 ? r : l.slice(1);
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: u("grid items-start gap-6", Jd[a], s),
      ...i,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: c }),
        /* @__PURE__ */ e("div", { className: u("min-w-0", n && "xl:sticky xl:top-20"), children: d })
      ]
    }
  );
}
const Qd = Te.forwardRef(
  ({
    title: t,
    subtitle: r,
    badge: a,
    headerActions: n,
    showClear: s = !1,
    onClear: i,
    clearLabel: l = "清除选中",
    loading: c = !1,
    loadingText: d = "正在加载详情…",
    error: b,
    isEmpty: f = !1,
    hasSelection: h,
    emptyIcon: g,
    emptyMessage: m = "请在左侧选择一项以检视详细信息",
    emptyDescription: p,
    footer: v,
    children: y,
    className: S,
    ...x
  }, k) => {
    const D = h !== void 0 ? !h : f, B = !!(t || r || a || n);
    return /* @__PURE__ */ o(
      "aside",
      {
        ref: k,
        "data-slot": "inspector-panel",
        className: u(
          "flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all",
          S
        ),
        ...x,
        children: [
          B && /* @__PURE__ */ o("header", { className: "mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5", children: [
            /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-2", children: [
                typeof t == "string" ? /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)] tracking-tight", children: t }) : t,
                a
              ] }),
              r && /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1.5", children: [
              n,
              s && i && /* @__PURE__ */ e(
                ye,
                {
                  variant: "ghost",
                  size: "xs",
                  onClick: i,
                  "aria-label": l,
                  title: l,
                  className: "h-7 w-7 p-0 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                  children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          c ? /* @__PURE__ */ o("div", { className: "flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e(Dt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: d })
          ] }) : b ? /* @__PURE__ */ e("div", { className: "my-2", children: b }) : D ? /* @__PURE__ */ o("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
            g ?? /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Nr, { className: "h-5 w-5 stroke-[1.5]", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg)]", children: m }),
            p && /* @__PURE__ */ e("p", { className: "max-w-[280px] text-[11px] text-[var(--abc-fg-muted)]", children: p })
          ] }) : /* @__PURE__ */ e("div", { className: "flex-1 space-y-4", children: y }),
          v && /* @__PURE__ */ e("footer", { className: "mt-4 border-t border-[var(--abc-border)] pt-3.5", children: v })
        ]
      }
    );
  }
);
Qd.displayName = "InspectorPanel";
const ha = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
};
function eb(t, r, a, n) {
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  if (a.options && a.options.length > 0) {
    const i = a.options.find((l) => String(l.value) === String(t));
    if (i)
      return /* @__PURE__ */ e(Pt, { status: i.status, color: i.color, dot: !0, children: i.label });
  }
  let s;
  switch (a.valueType) {
    case "money": {
      const i = Number(t);
      s = Number.isNaN(i) ? String(t) : /* @__PURE__ */ o("span", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: [
        "¥",
        i.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      ] });
      break;
    }
    case "number": {
      const i = Number(t);
      s = Number.isNaN(i) ? String(t) : /* @__PURE__ */ e("span", { className: "font-mono tabular-nums", children: i.toLocaleString("zh-CN") });
      break;
    }
    case "date": {
      const i = Ie(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: i.isValid() ? i.format("YYYY-MM-DD") : String(t) });
      break;
    }
    case "datetime": {
      const i = Ie(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: i.isValid() ? i.format("YYYY-MM-DD HH:mm:ss") : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(Ps, { src: String(t), width: 32, height: 32 });
    case "progress":
      return /* @__PURE__ */ e(Yd, { percent: Number(t) || 0, className: "min-w-[92px]" });
    case "code":
      s = /* @__PURE__ */ e("code", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg)]", children: String(t) });
      break;
    case "link":
      return /* @__PURE__ */ e(
        "a",
        {
          href: String(t),
          target: "_blank",
          rel: "noreferrer",
          onClick: (i) => i.stopPropagation(),
          className: "text-[var(--abc-primary)] hover:underline",
          children: String(t)
        }
      );
    case "switch":
      return /* @__PURE__ */ e(Pt, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
      return /* @__PURE__ */ e(Pt, { dot: !0, children: String(t) });
    default:
      s = String(t);
  }
  return a.linkToView && n ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: (i) => {
        i.stopPropagation(), n(r);
      },
      className: "max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
      children: s
    }
  ) : a.copyable ? /* @__PURE__ */ e(Cl, { text: String(t), displayText: s }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: s }) : s;
}
function tb({
  columns: t,
  data: r,
  rowKey: a = "id",
  loading: n = !1,
  density: s = "default",
  selectedKeys: i,
  onSelectionChange: l,
  sortState: c,
  onSortChange: d,
  headerFilterMode: b = !1,
  headerFilters: f = {},
  onHeaderFilterChange: h,
  headerFilterRender: g,
  columnWidths: m = {},
  onColumnResize: p,
  resizable: v,
  motion: y,
  columnFixed: S = {},
  onColumnPin: x,
  onColumnHide: k,
  onResetColumns: D,
  onColumnReorder: B,
  expandable: T,
  onRowView: N,
  activeRowKey: w,
  onRowClick: C,
  onEmptyReset: I,
  maxHeight: A,
  ariaLabel: E = "数据表格",
  emptyText: O = "暂无符合条件的数据",
  className: X
}) {
  const Z = oe(y), R = ue(null), z = ue(null), [W, V] = $(null), [K, Y] = $(null), se = ue(null), P = ue(!1), q = ue(null), [j, G] = $({}), [ne, te] = $(0), [M, le] = $(null), Ee = ce(
    () => ({ ...j, ...m }),
    [j, m]
  ), Be = v ?? !!p, me = (L, ee) => {
    G((ae) => ({ ...ae, [L]: ee })), p == null || p(L, ee);
  };
  xa(() => {
    const L = R.current;
    if (!L) return;
    const ee = () => {
      L.clientWidth > 0 && te(L.clientWidth);
    };
    if (ee(), typeof ResizeObserver > "u") return;
    const ae = new ResizeObserver((xe) => {
      var Ce, Me;
      const Ne = (Me = (Ce = xe[0]) == null ? void 0 : Ce.contentRect) == null ? void 0 : Me.width;
      typeof Ne == "number" && Ne > 0 ? te(Math.floor(Ne)) : ee();
    });
    return ae.observe(L), () => ae.disconnect();
  }, []);
  const ve = (L, ee) => typeof a == "function" ? a(L) : (L == null ? void 0 : L[a]) ?? ee, ie = (L) => L.key in S ? S[L.key] ?? void 0 : L.fixed, H = ce(() => {
    const L = K && K.length > 0 ? [...t].sort((Ne, Ce) => {
      const Me = K.indexOf(Ne.key), fe = K.indexOf(Ce.key);
      return Me === -1 && fe === -1 ? 0 : Me === -1 ? 1 : fe === -1 ? -1 : Me - fe;
    }) : t, ee = [], ae = [], xe = [];
    for (const Ne of L) {
      const Ce = ie(Ne);
      Ce === "left" ? ee.push(Ne) : Ce === "right" ? xe.push(Ne) : ae.push(Ne);
    }
    return [...ee, ...ae, ...xe];
  }, [t, S, K]), U = Array.isArray(i) && typeof l == "function", re = !!(T != null && T.expandedRowRender), F = ce(() => {
    if (!(T != null && T.defaultExpandAllRows)) return [];
    const L = [], ee = (ae) => {
      ae.forEach((xe, Ne) => {
        const Ce = ve(xe, Ne);
        (!T.rowExpandable || T.rowExpandable(xe)) && L.push(Ce), Array.isArray(xe.children) && xe.children.length > 0 && (L.push(Ce), ee(xe.children));
      });
    };
    return ee(r), L;
  }, []), [J, we] = st({
    value: T == null ? void 0 : T.expandedRowKeys,
    defaultValue: F,
    onChange: T == null ? void 0 : T.onExpandedRowsChange
  }), We = (L) => {
    we(
      J.includes(L) ? J.filter((ee) => ee !== L) : [...J, L]
    );
  }, Ve = ce(() => {
    const L = [], ee = (ae, xe) => {
      ae.forEach((Ne, Ce) => {
        const Me = ve(Ne, Ce), fe = Array.isArray(Ne.children) ? Ne.children : [], _e = fe.length > 0;
        L.push({ record: Ne, key: Me, rowIdx: Ce, depth: xe, hasTreeChildren: _e }), _e && J.includes(Me) && ee(fe, xe + 1);
      });
    };
    return ee(r, 0), L;
  }, [r, J, a]), rt = ce(() => {
    const L = (U ? 40 : 0) + (re ? 36 : 0), ee = {};
    let ae = 0;
    for (const fe of H) {
      const _e = Ee[fe.key] ?? fe.width ?? 150;
      ee[fe.key] = _e, ae += _e;
    }
    const xe = { ...ee }, Ne = ne, Ce = Ne > L + ae ? Ne - (L + ae) : 0;
    if (Ce > 0) {
      const fe = (Ae) => Ae.key === "__abc_actions__" || Ae.key in Ee || !!ie(Ae), _e = H.filter((Ae) => !fe(Ae)), be = H.filter((Ae) => Ae.key !== "__abc_actions__"), Le = _e.length > 0 ? _e : be;
      if (Le.length > 0) {
        const Ae = Math.floor(Ce / Le.length);
        let Pe = Ce - Ae * Le.length;
        for (const Oe of Le) {
          const Xe = Ae + (Pe > 0 ? 1 : 0);
          Pe > 0 && (Pe -= 1), xe[Oe.key] = ee[Oe.key] + Xe;
        }
      }
    }
    const Me = L + H.reduce((fe, _e) => fe + (xe[_e.key] ?? 150), 0);
    return {
      resolvedWidths: xe,
      resolvedTableWidth: Ne > 0 ? Math.max(Ne, Me) : void 0
    };
  }, [H, Ee, S, ne, U, re]), De = ce(() => {
    const L = {}, ee = {};
    let ae = "", xe = "", Ne = (U ? 40 : 0) + (re ? 36 : 0);
    for (const Me of H)
      ie(Me) === "left" && (L[Me.key] = Ne, Ne += rt.resolvedWidths[Me.key] ?? 150, ae = Me.key);
    let Ce = 0;
    for (let Me = H.length - 1; Me >= 0; Me--) {
      const fe = H[Me];
      ie(fe) === "right" && (ee[fe.key] = Ce, Ce += rt.resolvedWidths[fe.key] ?? 150, xe = fe.key);
    }
    return {
      leftOffsets: L,
      rightOffsets: ee,
      lastLeftKey: ae,
      firstRightKey: xe,
      hasAnyLeftFixed: !!ae
    };
  }, [H, rt, S, U, re]), ot = ce(
    () => Ve.map((L) => L.key),
    [Ve]
  ), It = U && ot.length > 0 && ot.every((L) => i.includes(L)), Sr = U && !It && ot.some((L) => i.includes(L)), bt = (L) => {
    if (U)
      if (L) {
        const ee = Array.from(/* @__PURE__ */ new Set([...i, ...ot]));
        l(
          ee,
          Ve.filter((ae) => ee.includes(ae.key)).map((ae) => ae.record)
        );
      } else {
        const ee = i.filter((ae) => !ot.includes(ae));
        l(ee, []);
      }
  }, ra = (L) => {
    if (!U) return;
    const ae = i.includes(L) ? i.filter((xe) => xe !== L) : [...i, L];
    l(
      ae,
      Ve.filter((xe) => ae.includes(xe.key)).map((xe) => xe.record)
    );
  }, at = (L, ee, ae = "right") => {
    if (!Be) return;
    L.preventDefault(), L.stopPropagation();
    const xe = L.clientX, Ne = L.currentTarget.parentElement, Ce = Ee[ee.key] ?? ee.width ?? rt.resolvedWidths[ee.key] ?? (Ne == null ? void 0 : Ne.offsetWidth) ?? 140, Me = ee.key === "__abc_actions__" ? 80 : 72, fe = typeof document < "u" ? document.body.style.cursor : "", _e = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const be = (Ae) => {
      const Pe = Ae.clientX - xe, Oe = ae === "left" ? Math.max(Me, Math.round(Ce - Pe)) : Math.max(Me, Math.round(Ce + Pe));
      me(ee.key, Oe);
    }, Le = () => {
      typeof document < "u" && (document.body.style.cursor = fe, document.body.style.userSelect = _e), window.removeEventListener("mousemove", be), window.removeEventListener("mouseup", Le);
    };
    window.addEventListener("mousemove", be), window.addEventListener("mouseup", Le);
  };
  de(() => {
    if (!W) return;
    const L = (ee) => {
      if (ee.key === "Escape") {
        const ae = se.current;
        V(null), Y(null), se.current = null, q.current = null, P.current = !1, ae && B && B(ae);
      }
    };
    return document.addEventListener("keydown", L, !0), () => document.removeEventListener("keydown", L, !0);
  }, [W, B]);
  const it = H.map((L) => L.key).join("|");
  xa(() => {
    const L = q.current;
    if (!L) return;
    q.current = null;
    const ee = R.current;
    if (!ee || Z === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const xe = Z === "subtle" ? 140 : 220, Ne = "cubic-bezier(0.22, 1, 0.36, 1)";
    ee.querySelectorAll("[data-col-key]").forEach((Ce) => {
      const Me = Ce.dataset.colKey;
      if (!Me) return;
      const fe = L.get(Me);
      if (fe === void 0) return;
      const _e = Ce.getBoundingClientRect().left, be = fe - _e;
      if (Math.abs(be) <= 1) return;
      typeof Ce.animate == "function" && Ce.animate([{ translate: `${be}px 0` }, { translate: "0 0" }], {
        duration: xe,
        easing: Ne
      });
      const Le = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(Me) : Me, Ae = ee.querySelectorAll(`[data-col-cell="${Le}"]`), Pe = Math.min(Ae.length, 20);
      for (let Oe = 0; Oe < Pe; Oe++) {
        const Xe = Ae[Oe];
        typeof Xe.animate == "function" && Xe.animate([{ translate: `${be}px 0` }, { translate: "0 0" }], {
          duration: xe,
          easing: Ne
        });
      }
    });
  }, [it, Z]);
  const nt = (L) => {
    if (!L.sortable || !d) return;
    const ee = (c == null ? void 0 : c.key) === L.key ? c.direction : null, ae = ee === null ? "asc" : ee === "asc" ? "desc" : null;
    d(L.key, ae);
  };
  de(() => {
    if (!M) return;
    const L = (ae) => {
      var xe;
      ae && ae.type === "mousedown" && ((xe = z.current) != null && xe.contains(ae.target)) || le(null);
    }, ee = (ae) => {
      ae.key === "Escape" && le(null);
    };
    return document.addEventListener("mousedown", L), document.addEventListener("keydown", ee, !0), window.addEventListener("scroll", L, !0), () => {
      document.removeEventListener("mousedown", L), document.removeEventListener("keydown", ee, !0), window.removeEventListener("scroll", L, !0);
    };
  }, [M]);
  const Ir = (L, ee) => {
    if (ee.key === "__abc_actions__" || !!!(ee.sortable && d || x || k || D)) return;
    L.preventDefault();
    const xe = typeof window < "u" ? window.innerWidth : 1024, Ne = typeof window < "u" ? window.innerHeight : 768;
    le({
      col: ee,
      x: Math.max(8, Math.min(L.clientX, xe - 176 - 8)),
      y: Math.max(8, Math.min(L.clientY, Ne - 220 - 8))
    });
  }, Mr = H.length + (U ? 1 : 0) + (re ? 1 : 0), or = M ? Zr(R.current) : null;
  return /* @__PURE__ */ o(
    "div",
    {
      ref: R,
      tabIndex: 0,
      role: "region",
      "aria-label": E,
      "data-motion": Z,
      style: A !== void 0 ? { maxHeight: typeof A == "number" ? `${A}px` : A } : void 0,
      className: u(
        "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        X
      ),
      children: [
        /* @__PURE__ */ o(
          "table",
          {
            style: {
              width: rt.resolvedTableWidth ? `${rt.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ o("colgroup", { children: [
                U && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                re && /* @__PURE__ */ e("col", { style: { width: "36px" } }),
                H.map((L) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": L.key,
                    style: { width: `${rt.resolvedWidths[L.key]}px` }
                  },
                  L.key
                ))
              ] }),
              /* @__PURE__ */ o("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
                /* @__PURE__ */ o("tr", { children: [
                  U && /* @__PURE__ */ e(
                    "th",
                    {
                      style: De.hasAnyLeftFixed ? { left: 0 } : void 0,
                      className: u(
                        "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-3 text-center",
                        De.hasAnyLeftFixed && "sticky z-20"
                      ),
                      children: /* @__PURE__ */ e(
                        xr,
                        {
                          checked: It,
                          indeterminate: Sr,
                          onChange: bt
                        }
                      )
                    }
                  ),
                  re && /* @__PURE__ */ e(
                    "th",
                    {
                      style: De.hasAnyLeftFixed ? { left: U ? 40 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: u(
                        "w-9 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        De.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  H.map((L) => {
                    const ee = rt.resolvedWidths[L.key], ae = ie(L), xe = (c == null ? void 0 : c.key) === L.key ? c.direction : null, Ne = W === L.key, Ce = {
                      width: ee ? `${ee}px` : void 0,
                      ...ae === "left" ? { left: `${De.leftOffsets[L.key] ?? 0}px` } : {},
                      ...ae === "right" ? { right: `${De.rightOffsets[L.key] ?? 0}px` } : {}
                    }, Me = (fe) => {
                      if (!W || !B) return;
                      const _e = K && K.length > 0 ? K : H.filter((Oe) => Oe.key !== "__abc_actions__").map((Oe) => Oe.key), be = _e.indexOf(W), Le = _e.indexOf(fe);
                      if (be < 0 || Le < 0 || be === Le) return;
                      if (R.current) {
                        const Oe = /* @__PURE__ */ new Map();
                        R.current.querySelectorAll("[data-col-key]").forEach((Xe) => {
                          const Ht = Xe.dataset.colKey;
                          Ht && Oe.set(Ht, Xe.getBoundingClientRect().left);
                        }), q.current = Oe;
                      }
                      const Ae = [..._e], [Pe] = Ae.splice(be, 1);
                      Ae.splice(Le, 0, Pe), P.current = !0, Y(Ae), B(Ae);
                    };
                    return /* @__PURE__ */ o(
                      "th",
                      {
                        "data-col-key": L.key,
                        "data-dragging": Ne ? "true" : void 0,
                        draggable: !!(B && !ae && L.key !== "__abc_actions__"),
                        onContextMenu: (fe) => Ir(fe, L),
                        onDragStart: (fe) => {
                          const _e = H.filter((be) => be.key !== "__abc_actions__").map((be) => be.key);
                          se.current = _e, P.current = !1, V(L.key), Y(_e), fe.dataTransfer && (fe.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (fe) => {
                          if (!W || W === L.key || ae || L.key === "__abc_actions__" || !B)
                            return;
                          fe.preventDefault();
                          const _e = K && K.length > 0 ? K : H.filter((Pe) => Pe.key !== "__abc_actions__").map((Pe) => Pe.key), be = _e.indexOf(W), Le = _e.indexOf(L.key);
                          if (be < 0 || Le < 0 || be === Le) return;
                          const Ae = fe.currentTarget.getBoundingClientRect();
                          Ae.width > 0 && (be < Le && fe.clientX < Ae.left + Ae.width * 0.35 || be > Le && fe.clientX > Ae.left + Ae.width * 0.65) || Me(L.key);
                        },
                        onDrop: () => {
                          W && W !== L.key && !P.current && !ae && L.key !== "__abc_actions__" && Me(L.key), V(null), Y(null), se.current = null, P.current = !1;
                        },
                        onDragEnd: () => {
                          V(null), Y(null), se.current = null, P.current = !1;
                        },
                        style: Ce,
                        className: u(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          ha[s],
                          L.align === "center" && "text-center",
                          L.align === "right" && "text-right",
                          ae === "left" && "sticky z-20",
                          ae === "right" && "sticky z-20",
                          Ne && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
                          L.key === De.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.12)]",
                          L.key === De.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.12)]"
                        ),
                        children: [
                          /* @__PURE__ */ o(
                            "div",
                            {
                              className: u(
                                "inline-flex items-center gap-1",
                                L.align === "right" && "justify-end",
                                L.align === "center" && "justify-center"
                              ),
                              children: [
                                /* @__PURE__ */ o(
                                  "span",
                                  {
                                    className: u(
                                      "inline-flex items-center gap-1",
                                      L.sortable && "cursor-pointer hover:text-[var(--abc-primary)]"
                                    ),
                                    onClick: () => nt(L),
                                    children: [
                                      B && !ae && L.key !== "__abc_actions__" && /* @__PURE__ */ e(Fa, { className: "h-3 w-3 cursor-grab text-[var(--abc-fg-placeholder)] opacity-0 transition-opacity group-hover:opacity-100" }),
                                      /* @__PURE__ */ e("span", { children: L.title }),
                                      L.tooltip && /* @__PURE__ */ e(Je, { content: L.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (fe) => fe.stopPropagation(),
                                          className: "inline-flex text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                                          children: /* @__PURE__ */ e(yr, { className: "h-3 w-3" })
                                        }
                                      ) }),
                                      L.sortable && /* @__PURE__ */ e("span", { className: "inline-flex text-[var(--abc-fg-muted)]", children: xe === "asc" ? /* @__PURE__ */ e(Na, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : xe === "desc" ? /* @__PURE__ */ e(ka, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(gn, { className: "h-3 w-3 opacity-50" }) })
                                    ]
                                  }
                                ),
                                g && L.filterable && /* @__PURE__ */ e(
                                  "span",
                                  {
                                    onClick: (fe) => fe.stopPropagation(),
                                    className: "inline-flex items-center",
                                    children: g(L)
                                  }
                                )
                              ]
                            }
                          ),
                          Be && (ae === "right" ? /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${L.title} 列宽`,
                              onMouseDown: (fe) => at(fe, L, "left"),
                              className: "absolute top-0 bottom-0 left-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ) : /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${L.title} 列宽`,
                              onMouseDown: (fe) => at(fe, L, "right"),
                              className: "absolute top-0 right-0 bottom-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ))
                        ]
                      },
                      L.key
                    );
                  })
                ] }),
                b && /* @__PURE__ */ o("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  U && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-3 py-1.5" }),
                  re && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  H.map((L) => {
                    const ee = ie(L);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...ee === "left" ? { left: `${De.leftOffsets[L.key] ?? 0}px` } : {},
                          ...ee === "right" ? { right: `${De.rightOffsets[L.key] ?? 0}px` } : {}
                        },
                        className: u(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          ee === "left" && "sticky z-20",
                          ee === "right" && "sticky z-20"
                        ),
                        children: L.filterable ? L.filterType === "select" && L.filterOptions ? /* @__PURE__ */ e(
                          jt,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: "全部",
                            options: L.filterOptions,
                            value: f[L.key] ?? "",
                            onChange: (ae) => h == null ? void 0 : h(L.key, ae)
                          }
                        ) : /* @__PURE__ */ e(
                          tt,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: `筛选${L.title}`,
                            value: f[L.key] ?? "",
                            onChange: (ae) => h == null ? void 0 : h(L.key, ae.target.value)
                          }
                        ) : null
                      },
                      `${L.key}_filter`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e("tbody", { children: n ? Array.from({ length: 5 }).map((L, ee) => /* @__PURE__ */ o("tr", { children: [
                U && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-3 py-3 text-center", children: /* @__PURE__ */ e(Ke, { width: 16, height: 16 }) }),
                re && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                H.map((ae) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: u("border-b border-[var(--abc-border)]", ha[s]),
                    children: /* @__PURE__ */ e(Ke, { variant: "text", className: "w-4/5" })
                  },
                  ae.key
                ))
              ] }, `sk_${ee}`)) : Ve.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: Mr, children: /* @__PURE__ */ e(Sl, { title: O, onReset: I }) }) }) : Ve.map(({ record: L, key: ee, rowIdx: ae, depth: xe, hasTreeChildren: Ne }) => {
                const Ce = !!(U && i.includes(ee)), Me = w != null && String(w) === String(ee), fe = J.includes(ee), _e = re && (!(T != null && T.rowExpandable) || T.rowExpandable(L));
                return /* @__PURE__ */ o(je.Fragment, { children: [
                  /* @__PURE__ */ o(
                    "tr",
                    {
                      "data-state": Me || Ce ? "selected" : void 0,
                      tabIndex: C ? 0 : void 0,
                      onClick: C ? (be) => {
                        const Le = be.target;
                        Le && Le.closest(
                          'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                        ) || C(L, be);
                      } : void 0,
                      onKeyDown: C ? (be) => {
                        be.target === be.currentTarget && (be.key === "Enter" || be.key === " ") && (be.preventDefault(), C(L, be));
                      } : void 0,
                      className: u(
                        "group transition-colors duration-150",
                        C && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                        Ce || Me ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85"
                      ),
                      children: [
                        U && /* @__PURE__ */ e(
                          "td",
                          {
                            style: De.hasAnyLeftFixed ? { left: 0 } : void 0,
                            className: u(
                              "border-b border-[var(--abc-border)] px-3 py-2.5 text-center",
                              De.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: /* @__PURE__ */ e(xr, { checked: Ce, onChange: () => ra(ee) })
                          }
                        ),
                        re && /* @__PURE__ */ e(
                          "td",
                          {
                            style: De.hasAnyLeftFixed ? { left: U ? 40 : 0 } : void 0,
                            className: u(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center",
                              De.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: _e && /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": fe ? "收起详情行" : "展开详情行",
                                "aria-expanded": fe,
                                onClick: () => We(ee),
                                className: "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                children: /* @__PURE__ */ e(
                                  gt,
                                  {
                                    className: u(
                                      "h-3.5 w-3.5 transition-transform duration-150",
                                      fe && "rotate-90 text-[var(--abc-primary)]"
                                    )
                                  }
                                )
                              }
                            )
                          }
                        ),
                        H.map((be, Le) => {
                          const Ae = be.dataIndex ?? be.key, Pe = L == null ? void 0 : L[Ae], Oe = ie(be), Xe = be.render ? be.render(Pe, L, ae) : eb(Pe, L, be, N), Ht = Le === 0 && (xe > 0 || Ne);
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": be.key,
                              style: {
                                ...Oe === "left" ? { left: `${De.leftOffsets[be.key] ?? 0}px` } : {},
                                ...Oe === "right" ? { right: `${De.rightOffsets[be.key] ?? 0}px` } : {}
                              },
                              className: u(
                                "border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                ha[s],
                                be.align === "center" && "text-center",
                                be.align === "right" && "text-right",
                                W === be.key && "bg-[var(--abc-primary-soft)]/30",
                                Oe === "left" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                Oe === "right" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                be.key === De.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.08)]",
                                be.key === De.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.08)]"
                              ),
                              children: Ht ? /* @__PURE__ */ o(
                                "div",
                                {
                                  style: { paddingLeft: `${xe * 18}px` },
                                  className: "inline-flex items-center gap-1",
                                  children: [
                                    Ne ? /* @__PURE__ */ e(
                                      "button",
                                      {
                                        type: "button",
                                        "aria-label": fe ? "收起子项" : "展开子项",
                                        "aria-expanded": fe,
                                        onClick: () => We(ee),
                                        className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                        children: /* @__PURE__ */ e(
                                          gt,
                                          {
                                            className: u(
                                              "h-3 w-3 transition-transform duration-150",
                                              fe && "rotate-90 text-[var(--abc-primary)]"
                                            )
                                          }
                                        )
                                      }
                                    ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                                    /* @__PURE__ */ e("span", { className: "min-w-0", children: Xe })
                                  ]
                                }
                              ) : Xe
                            },
                            be.key
                          );
                        })
                      ]
                    }
                  ),
                  _e && fe && (T == null ? void 0 : T.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: Mr,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: T.expandedRowRender(L, ae)
                    }
                  ) })
                ] }, String(ee));
              }) })
            ]
          }
        ),
        M && or && dt(
          /* @__PURE__ */ o(
            "div",
            {
              ref: z,
              role: "menu",
              "aria-label": `${M.col.title} 列操作菜单`,
              "data-abc-floating": "",
              "data-motion": Z,
              style: { top: `${M.y}px`, left: `${M.x}px` },
              className: u(
                "fixed z-[1350] w-44 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
                Z !== "none" && "abc-animate-popover-in"
              ),
              children: [
                /* @__PURE__ */ o("div", { className: "truncate border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: [
                  "列：",
                  M.col.title
                ] }),
                M.col.sortable && d && /* @__PURE__ */ o("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        d(M.col.key, "asc"), le(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Na, { className: "h-3.5 w-3.5" }),
                          " 升序排列"
                        ] }),
                        (c == null ? void 0 : c.key) === M.col.key && c.direction === "asc" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        d(M.col.key, "desc"), le(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5" }),
                          " 降序排列"
                        ] }),
                        (c == null ? void 0 : c.key) === M.col.key && c.direction === "desc" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  (c == null ? void 0 : c.key) === M.col.key && c.direction && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        d(M.col.key, null), le(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(gn, { className: "h-3.5 w-3.5" }),
                        " 清除排序"
                      ]
                    }
                  )
                ] }),
                x && /* @__PURE__ */ o("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const L = ie(M.col);
                        x(M.col.key, L === "left" ? null : "left"), le(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 -rotate-45" }),
                          " 固定到左侧"
                        ] }),
                        ie(M.col) === "left" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const L = ie(M.col);
                        x(M.col.key, L === "right" ? null : "right"), le(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 rotate-45" }),
                          " 固定到右侧"
                        ] }),
                        ie(M.col) === "right" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  ie(M.col) && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        x(M.col.key, null), le(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(ec, { className: "h-3.5 w-3.5" }),
                        " 取消固定"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ o("div", { className: "pt-1", children: [
                  k && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        k(M.col.key), le(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(as, { className: "h-3.5 w-3.5" }),
                        " 隐藏此列"
                      ]
                    }
                  ),
                  D && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        D(), le(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
                        " 重置列配置"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          or
        )
      ]
    }
  );
}
const rb = Te.forwardRef(
  ({ className: t, scrollLabel: r, wrapperClassName: a, ...n }, s) => /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "table-wrapper",
      role: r ? "region" : void 0,
      "aria-label": r,
      tabIndex: r ? 0 : void 0,
      className: u(
        "relative w-full max-w-full overflow-auto [container-type:inline-size] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        a
      ),
      children: /* @__PURE__ */ e(
        "table",
        {
          ref: s,
          className: u("w-full caption-bottom text-sm border-collapse text-[var(--abc-fg)]", t),
          ...n
        }
      )
    }
  )
);
rb.displayName = "Table";
const ab = Te.forwardRef(
  ({ className: t, sticky: r = !1, ...a }, n) => /* @__PURE__ */ e(
    "thead",
    {
      ref: n,
      className: u(
        "bg-[var(--abc-bg-muted)] [&_tr]:border-b [&_tr]:border-[var(--abc-border)]",
        r && "sticky top-0 z-10 bg-[var(--abc-bg-surface)] backdrop-blur-xs shadow-[0_1px_0_0_var(--abc-border)]",
        t
      ),
      ...a
    }
  )
);
ab.displayName = "TableHeader";
const nb = Te.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: u("[&_tr:last-child]:border-0", t), ...r }));
nb.displayName = "TableBody";
const sb = Te.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: u("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
sb.displayName = "TableFooter";
const ob = Te.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tr",
  {
    ref: a,
    className: u(
      "border-b border-[var(--abc-border)] transition-colors hover:bg-[var(--abc-bg-subtle)] data-[state=selected]:bg-[var(--abc-primary-soft)]",
      t
    ),
    ...r
  }
));
ob.displayName = "TableRow";
const ib = Te.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
  "th",
  {
    ref: n,
    scope: r,
    className: u(
      "h-10 px-3 text-left align-middle text-[11px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]",
      t
    ),
    ...a
  }
));
ib.displayName = "TableHead";
const cb = Te.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: u("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
cb.displayName = "TableCell";
const lb = Te.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: u("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
lb.displayName = "TableCaption";
const db = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, bb = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, ub = {
  mode: "sidebar",
  sidebarTone: "dark",
  sidebarCollapsed: !1,
  sidebarAccordion: !0,
  showTabs: !1,
  tabStyle: "card",
  keepAlive: !0,
  contentWidth: "fluid",
  headerBlur: !0,
  showBreadcrumb: !0,
  showFooter: !1
}, Wt = {
  xs: {
    brandWrapExpanded: "px-3",
    brandWrapCollapsed: "px-1.5",
    brandGap: "gap-2",
    brandLogoBox: "h-7 w-7 text-xs",
    brandTitle: "text-xs",
    brandSubtitle: "text-[10px]",
    brandEditIcon: "h-2.5 w-2.5",
    navPadding: "space-y-0.5 p-1.5",
    itemButton: "min-h-[var(--abc-control-h-xs)] gap-2 px-2.5 py-1 text-[11px]",
    itemIcon: 14,
    chevron: "h-3 w-3",
    badge: "px-1 py-0 text-[9px]",
    collapsedBtn: "min-h-0 h-8 py-0",
    collapsedIcon: 15,
    subWrap: "mt-0.5 ml-3 space-y-0.5 pl-2 pb-0.5",
    subButton: "min-h-6.5 gap-1.5 px-2 py-1 text-[11px]",
    subIcon: 12,
    flyoutPanel: "min-w-[168px] p-1",
    flyoutHeader: "px-2 py-1 text-[10px]",
    flyoutHeadingIcon: 12,
    flyoutHeadingText: "px-2 py-1 text-[10px]",
    flyoutItem: "gap-1.5 px-2 py-1 text-[11px]",
    flyoutIcon: 12,
    flyoutSubIndent: "mt-0.5 ml-2.5 pl-1.5",
    topItem: "h-[var(--abc-control-h-xs)] gap-1 px-2.5 text-[11px]",
    topIcon: 13,
    topChevron: "h-2.5 w-2.5",
    dualRailWrap: "gap-1 px-1",
    dualRailItem: "gap-0.5 py-1.5 text-[9px]",
    dualRailIcon: 15,
    dualRailLabelMaxW: "max-w-10",
    dualPanelHeader: "px-3",
    dualPanelTitle: "text-[11px]",
    dualPanelWrap: "space-y-0.5 p-1.5",
    dualPanelItem: "min-h-[var(--abc-control-h-xs)] gap-1.5 px-2.5 py-1 text-[11px]",
    dualPanelIcon: 13
  },
  sm: {
    brandWrapExpanded: "px-4",
    brandWrapCollapsed: "px-2",
    brandGap: "gap-2.5",
    brandLogoBox: "h-8 w-8 text-sm",
    brandTitle: "text-sm",
    brandSubtitle: "text-[10px]",
    brandEditIcon: "h-3 w-3",
    navPadding: "space-y-1 p-2.5",
    itemButton: "min-h-[var(--abc-control-h-sm)] gap-2.5 px-3 py-1.5 text-xs",
    itemIcon: 16,
    chevron: "h-3.5 w-3.5",
    badge: "px-1.5 py-0.2 text-[10px]",
    collapsedBtn: "min-h-0 h-9 py-0",
    collapsedIcon: 16,
    subWrap: "mt-1 ml-4 space-y-0.5 pl-2.5 pb-0.5",
    subButton: "min-h-7.5 gap-2 px-2.5 py-1.5 text-xs",
    subIcon: 14,
    flyoutPanel: "min-w-[184px] p-1.5",
    flyoutHeader: "px-2.5 py-1.5 text-[11px]",
    flyoutHeadingIcon: 13,
    flyoutHeadingText: "px-2.5 py-1 text-[11px]",
    flyoutItem: "gap-2 px-2.5 py-1.5 text-xs",
    flyoutIcon: 14,
    flyoutSubIndent: "mt-0.5 ml-3 pl-2",
    topItem: "h-[var(--abc-control-h-sm)] gap-1.5 px-3 text-xs",
    topIcon: 15,
    topChevron: "h-3 w-3",
    dualRailWrap: "gap-1.5 px-1.5",
    dualRailItem: "gap-1 py-2 text-[10px]",
    dualRailIcon: 17,
    dualRailLabelMaxW: "max-w-12",
    dualPanelHeader: "px-3.5",
    dualPanelTitle: "text-xs",
    dualPanelWrap: "space-y-1 p-2",
    dualPanelItem: "min-h-[var(--abc-control-h-sm)] gap-2 px-3 py-1.5 text-xs",
    dualPanelIcon: 15
  },
  md: {
    brandWrapExpanded: "px-4",
    brandWrapCollapsed: "px-2",
    brandGap: "gap-3",
    brandLogoBox: "h-9 w-9 text-sm",
    brandTitle: "text-[15px]",
    brandSubtitle: "text-[11px]",
    brandEditIcon: "h-3.5 w-3.5",
    navPadding: "space-y-1 p-3",
    itemButton: "min-h-[var(--abc-control-h-md)] gap-2.5 px-3.5 py-2 text-[13px]",
    itemIcon: 18,
    chevron: "h-4 w-4",
    badge: "px-1.5 py-0.5 text-[11px]",
    collapsedBtn: "min-h-0 h-10 py-0",
    collapsedIcon: 18,
    subWrap: "mt-1 ml-4.5 space-y-1 pl-3 pb-1",
    subButton: "min-h-8.5 gap-2.5 px-3 py-1.5 text-[13px]",
    subIcon: 15,
    flyoutPanel: "min-w-[204px] p-1.5",
    flyoutHeader: "px-3 py-1.5 text-xs",
    flyoutHeadingIcon: 14,
    flyoutHeadingText: "px-3 py-1 text-xs",
    flyoutItem: "gap-2.5 px-3 py-2 text-[13px]",
    flyoutIcon: 15,
    flyoutSubIndent: "mt-1 ml-3.5 pl-2.5",
    topItem: "h-[var(--abc-control-h-md)] gap-2 px-3.5 text-[13px]",
    topIcon: 16,
    topChevron: "h-3.5 w-3.5",
    dualRailWrap: "gap-2 px-1.5",
    dualRailItem: "gap-1 py-2.5 text-[11px]",
    dualRailIcon: 19,
    dualRailLabelMaxW: "max-w-13",
    dualPanelHeader: "px-4",
    dualPanelTitle: "text-[13px]",
    dualPanelWrap: "space-y-1 p-2.5",
    dualPanelItem: "min-h-[var(--abc-control-h-md)] gap-2.5 px-3.5 py-2 text-[13px]",
    dualPanelIcon: 16
  },
  lg: {
    brandWrapExpanded: "px-4.5",
    brandWrapCollapsed: "px-2.5",
    brandGap: "gap-3",
    brandLogoBox: "h-10 w-10 text-base",
    brandTitle: "text-base",
    brandSubtitle: "text-xs",
    brandEditIcon: "h-3.5 w-3.5",
    navPadding: "space-y-1.5 p-3.5",
    itemButton: "min-h-[var(--abc-control-h-lg)] gap-3 px-4 py-2.5 text-sm",
    itemIcon: 20,
    chevron: "h-4 w-4",
    badge: "px-2 py-0.5 text-xs",
    collapsedBtn: "min-h-0 h-11 py-0",
    collapsedIcon: 20,
    subWrap: "mt-1.5 ml-5 space-y-1 pl-3.5 pb-1",
    subButton: "min-h-9.5 gap-3 px-3.5 py-2 text-sm",
    subIcon: 16,
    flyoutPanel: "min-w-[224px] p-2",
    flyoutHeader: "px-3.5 py-2 text-[13px]",
    flyoutHeadingIcon: 15,
    flyoutHeadingText: "px-3.5 py-1.5 text-xs",
    flyoutItem: "gap-2.5 px-3.5 py-2.5 text-sm",
    flyoutIcon: 16,
    flyoutSubIndent: "mt-1 ml-4 pl-2.5",
    topItem: "h-[var(--abc-control-h-lg)] gap-2 px-4 text-sm",
    topIcon: 17,
    topChevron: "h-3.5 w-3.5",
    dualRailWrap: "gap-2 px-2",
    dualRailItem: "gap-1.5 py-3 text-xs",
    dualRailIcon: 21,
    dualRailLabelMaxW: "max-w-14",
    dualPanelHeader: "px-4",
    dualPanelTitle: "text-sm",
    dualPanelWrap: "space-y-1.5 p-3",
    dualPanelItem: "min-h-[var(--abc-control-h-lg)] gap-3 px-4 py-2.5 text-sm",
    dualPanelIcon: 18
  }
}, Nt = "transition-[background-color,color,box-shadow,transform] duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-active)] motion-safe:enabled:active:scale-[var(--abc-press-scale)]";
function kt(t, r) {
  var a;
  return t.path && (r === t.path || r.startsWith(`${t.path}/`)) ? !0 : !!((a = t.children) != null && a.some((n) => kt(n, r)));
}
function $s(t, r, a = []) {
  var n;
  for (const s of t) {
    const i = [...a, s];
    if (s.path === r) return i;
    if ((n = s.children) != null && n.length) {
      const l = $s(s.children, r, i);
      if (l.length > 0) return l;
    }
  }
  return [];
}
function vt(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(zt, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const tn = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: i = 0 }) => {
  const l = Wt[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "space-y-0.5",
        i > 0 && u("border-l border-[var(--abc-border)]", l.flyoutSubIndent)
      ),
      children: t.map((c) => {
        const d = !!(c.children && c.children.length > 0), b = c.path === r, f = d && kt(c, r);
        return d ? /* @__PURE__ */ o("div", { className: "py-0.5", children: [
          /* @__PURE__ */ o(
            "div",
            {
              className: u(
                "flex items-center gap-1.5 font-semibold select-none",
                l.flyoutHeadingText,
                f ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
              ),
              children: [
                vt(c.icon, a, l.flyoutHeadingIcon),
                /* @__PURE__ */ e("span", { className: "truncate", children: c.label })
              ]
            }
          ),
          /* @__PURE__ */ e(
            tn,
            {
              items: c.children,
              pathname: r,
              registry: a,
              size: n,
              onSelect: s,
              depth: i + 1
            }
          )
        ] }, c.key) : /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            role: "menuitem",
            disabled: c.disabled,
            onClick: () => {
              !c.disabled && c.path && s(c.path, c);
            },
            className: u(
              "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
              Nt,
              l.flyoutItem,
              b ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
              c.disabled && "opacity-45 cursor-not-allowed"
            ),
            children: [
              vt(c.icon, a, l.flyoutIcon),
              /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: c.label }),
              c.badge !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: u(
                    "rounded-full bg-[var(--abc-primary-soft)] font-mono text-[var(--abc-primary)]",
                    l.badge
                  ),
                  children: c.badge
                }
              )
            ]
          },
          c.key
        );
      })
    }
  );
}, Zt = ({ brand: t, collapsed: r = !1, tone: a = "light", size: n, className: s }) => {
  const i = pe(n, "sm"), l = Wt[i], c = a === "dark", d = ce(() => t.logo ? typeof t.logo == "string" ? zs(t.logo) ? /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)]/15 p-1 text-[var(--abc-primary)] [&>svg]:max-h-full [&>svg]:max-w-full",
        l.brandLogoBox
      ),
      dangerouslySetInnerHTML: { __html: t.logo }
    }
  ) : /* @__PURE__ */ e(
    "img",
    {
      src: t.logo,
      alt: t.name,
      className: u("shrink-0 rounded-[var(--abc-radius-md)] object-contain", l.brandLogoBox)
    }
  ) : /* @__PURE__ */ e("div", { className: "shrink-0", children: t.logo }) : /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-[var(--abc-motion-fast)] group-hover:scale-[1.03]",
        l.brandLogoBox
      ),
      children: t.name.slice(0, 1).toUpperCase()
    }
  ), [t.logo, t.name, l.brandLogoBox]);
  return /* @__PURE__ */ o(
    "div",
    {
      "data-size": i,
      className: u(
        "group flex items-center select-none",
        l.brandGap,
        r ? u("justify-center", l.brandWrapCollapsed) : l.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            onClick: t.onClick,
            className: u(
              "flex min-w-0 flex-1 items-center",
              l.brandGap,
              t.onClick && "cursor-pointer"
            ),
            children: [
              d,
              !r && /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: u(
                      "truncate font-bold tracking-tight",
                      l.brandTitle,
                      c ? "text-white" : "text-[var(--abc-fg)]"
                    ),
                    children: t.name
                  }
                ),
                t.subtitle && /* @__PURE__ */ e(
                  "div",
                  {
                    className: u(
                      "truncate",
                      l.brandSubtitle,
                      c ? "text-slate-400" : "text-[var(--abc-fg-muted)]"
                    ),
                    children: t.subtitle
                  }
                )
              ] })
            ]
          }
        ),
        !r && t.onEditBrand && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "编辑品牌信息",
            title: "修改品牌 Logo 与名称",
            onClick: (b) => {
              var f;
              b.stopPropagation(), (f = t.onEditBrand) == null || f.call(t);
            },
            className: u(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              c ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(tc, { className: l.brandEditIcon })
          }
        )
      ]
    }
  );
}, mb = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: i, onNavigate: l }) => {
  const c = Wt[s], [d, b] = $(!1), { isMounted: f, isVisible: h } = $t(d, i === "none" ? 0 : 140), g = ue(null), m = ue(null), p = ue(null), v = Fe(), y = kt(t, r), { style: S, actualSide: x, portalContainer: k } = kr({
    open: f,
    triggerRef: g,
    floatingRef: m,
    placement: "rightStart",
    offset: 8
  }), D = he(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  de(() => () => D(), [D]);
  const B = () => {
    D(), b(!0);
  }, T = () => {
    D(), typeof window < "u" && (p.current = window.setTimeout(() => {
      b(!1), p.current = null;
    }, 140));
  };
  return de(() => {
    if (!d) return;
    const N = (C) => {
      var A, E;
      const I = C.target;
      (A = g.current) != null && A.contains(I) || (E = m.current) != null && E.contains(I) || b(!1);
    }, w = (C) => {
      var I;
      C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), b(!1), (I = g.current) == null || I.focus());
    };
    return document.addEventListener("mousedown", N), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", w, !0);
    };
  }, [d]), /* @__PURE__ */ o(Re, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: B, onMouseLeave: T, children: /* @__PURE__ */ e(
      "button",
      {
        ref: g,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": d,
        "aria-haspopup": "menu",
        "aria-controls": d ? v : void 0,
        onClick: () => b((N) => !N),
        onKeyDown: (N) => {
          (N.key === "ArrowRight" || N.key === "ArrowDown") && (N.preventDefault(), b(!0), window.requestAnimationFrame(() => {
            var w, C;
            (C = (w = m.current) == null ? void 0 : w.querySelector('[role="menuitem"]:not(:disabled)')) == null || C.focus();
          }));
        },
        className: u(
          "flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer",
          Nt,
          c.collapsedBtn,
          y ? a ? "bg-white/12 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : a ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: vt(t.icon ?? "folder", n, c.collapsedIcon)
      }
    ) }),
    f && k && dt(
      /* @__PURE__ */ o(
        "div",
        {
          ref: m,
          id: v,
          role: "menu",
          "aria-label": t.label,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": i,
          "data-placement": x,
          style: S,
          onMouseEnter: B,
          onMouseLeave: T,
          onKeyDown: (N) => {
            var I, A, E;
            const w = Array.from(
              ((I = m.current) == null ? void 0 : I.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const C = w.indexOf(document.activeElement);
            N.key === "ArrowDown" ? (N.preventDefault(), (A = w[(C + 1) % w.length]) == null || A.focus()) : N.key === "ArrowUp" && (N.preventDefault(), (E = w[(C - 1 + w.length) % w.length]) == null || E.focus());
          },
          className: u(
            "z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
            // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
            x === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
            c.flyoutPanel,
            i !== "none" && (h ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: u(
                  "mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]",
                  c.flyoutHeader
                ),
                children: t.label
              }
            ),
            /* @__PURE__ */ e(
              tn,
              {
                items: t.children ?? [],
                pathname: r,
                registry: n,
                size: s,
                onSelect: (N, w) => {
                  l(N, w), b(!1);
                }
              }
            )
          ]
        }
      ),
      k
    )
  ] });
}, va = ({
  brand: t,
  items: r,
  pathname: a,
  collapsed: n = !1,
  accordion: s = !0,
  tone: i = "dark",
  size: l,
  motion: c,
  onNavigate: d,
  className: b
}) => {
  const { iconRegistry: f } = Ge(), h = pe(l, "sm"), g = oe(c), m = Wt[h], p = i === "dark", [v, y] = $(
    () => r.filter((x) => {
      var k;
      return ((k = x.children) == null ? void 0 : k.length) && kt(x, a);
    }).map((x) => x.key)
  );
  de(() => {
    const x = r.filter((k) => {
      var D;
      return ((D = k.children) == null ? void 0 : D.length) && kt(k, a);
    }).map((k) => k.key);
    x.length > 0 && y(
      (k) => s ? [x[0]] : Array.from(/* @__PURE__ */ new Set([...k, ...x]))
    );
  }, [a, r, s]);
  const S = (x) => {
    y((k) => k.includes(x) ? k.filter((D) => D !== x) : s ? [x] : [...k, x]);
  };
  return /* @__PURE__ */ o(
    "aside",
    {
      "aria-label": "侧边主导航",
      "data-size": h,
      "data-motion": g,
      style: {
        width: n ? "var(--abc-sidebar-collapsed-w)" : "var(--abc-sidebar-w)"
      },
      className: u(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        p ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        b
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: u(
              "flex h-[var(--abc-header-h)] shrink-0 items-center border-b",
              p ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              Zt,
              {
                brand: t,
                collapsed: n,
                tone: i,
                size: h,
                className: "w-full"
              }
            )
          }
        ),
        /* @__PURE__ */ e("nav", { className: u("flex-1 overflow-y-auto", m.navPadding), children: r.map((x) => {
          const k = !!(x.children && x.children.length > 0), D = x.path === a, B = kt(x, a), T = v.includes(x.key);
          if (!k) {
            const N = /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                disabled: x.disabled,
                "aria-label": n ? x.label : void 0,
                onClick: () => x.path && d(x.path, x),
                className: u(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Nt,
                  m.itemButton,
                  n && u("justify-center px-0", m.collapsedBtn),
                  D ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : p ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  x.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  vt(x.icon, f, n ? m.collapsedIcon : m.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: x.label }),
                  !n && x.badge !== void 0 && /* @__PURE__ */ e("span", { className: u("rounded-full bg-white/15 font-mono", m.badge), children: x.badge })
                ]
              },
              x.key
            );
            return n ? /* @__PURE__ */ e(
              Je,
              {
                content: x.label,
                placement: "right",
                motion: g,
                className: "flex w-full",
                children: N
              },
              x.key
            ) : N;
          }
          return n ? /* @__PURE__ */ e(
            mb,
            {
              item: x,
              pathname: a,
              isDark: p,
              registry: f,
              size: h,
              motion: g,
              onNavigate: d
            },
            x.key
          ) : /* @__PURE__ */ o("div", { className: "relative", children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-expanded": T,
                onClick: () => S(x.key),
                className: u(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Nt,
                  m.itemButton,
                  B ? p ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : p ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  vt(x.icon, f, m.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: x.label }),
                  /* @__PURE__ */ e(
                    pt,
                    {
                      className: u(
                        "shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]",
                        m.chevron,
                        !T && "-rotate-90"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                inert: T ? void 0 : "",
                className: u(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  T ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: u(
                      "border-l",
                      m.subWrap,
                      p ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: x.children.map((N) => {
                      const w = N.path === a;
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          disabled: N.disabled,
                          onClick: () => N.path && d(N.path, N),
                          className: u(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            Nt,
                            m.subButton,
                            w ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : p ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            N.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            vt(N.icon, f, m.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: N.label }),
                            N.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: u(
                                  "rounded-full font-mono",
                                  m.badge,
                                  w ? "bg-white/20" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]"
                                ),
                                children: N.badge
                              }
                            )
                          ]
                        },
                        N.key
                      );
                    })
                  }
                ) })
              }
            )
          ] }, x.key);
        }) })
      ]
    }
  );
}, fb = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: i, onNavigate: l }) => {
  const c = Wt[s], [d, b] = $(!1), { isMounted: f, isVisible: h } = $t(d, i === "none" ? 0 : 140), g = ue(null), m = ue(null), p = ue(null), v = Fe(), { style: y, actualSide: S, portalContainer: x } = kr({
    open: f,
    triggerRef: g,
    floatingRef: m,
    placement: "bottomLeft",
    offset: 6
  }), k = he(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  de(() => () => k(), [k]);
  const D = () => {
    k(), b(!0);
  }, B = () => {
    k(), typeof window < "u" && (p.current = window.setTimeout(() => {
      b(!1), p.current = null;
    }, 150));
  };
  de(() => {
    if (!d) return;
    const N = (C) => {
      var A, E;
      const I = C.target;
      (A = g.current) != null && A.contains(I) || (E = m.current) != null && E.contains(I) || b(!1);
    }, w = (C) => {
      var I;
      C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), b(!1), (I = g.current) == null || I.focus());
    };
    return document.addEventListener("mousedown", N), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", w, !0);
    };
  }, [d]);
  const T = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var N, w;
      (w = (N = m.current) == null ? void 0 : N.querySelector('[role="menuitem"]:not(:disabled)')) == null || w.focus();
    });
  };
  return /* @__PURE__ */ o(Re, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: D,
        onMouseLeave: B,
        className: "relative flex-none",
        children: /* @__PURE__ */ o(
          "button",
          {
            ref: g,
            type: "button",
            "aria-expanded": d,
            "aria-haspopup": "menu",
            "aria-controls": d ? v : void 0,
            onClick: () => b((N) => !N),
            onKeyDown: (N) => {
              N.key === "ArrowDown" && (N.preventDefault(), b(!0), T());
            },
            className: u(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Nt,
              c.topItem,
              a ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : d ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              vt(t.icon, n, c.topIcon),
              /* @__PURE__ */ e("span", { children: t.label }),
              /* @__PURE__ */ e(
                pt,
                {
                  className: u(
                    "opacity-70 transition-transform duration-[var(--abc-motion-fast)]",
                    c.topChevron,
                    d && "rotate-180 text-[var(--abc-primary)] opacity-100"
                  )
                }
              )
            ]
          }
        )
      }
    ),
    f && x && dt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: m,
          id: v,
          role: "menu",
          "aria-label": `${t.label} 子菜单`,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": i,
          "data-placement": S,
          style: y,
          onMouseEnter: D,
          onMouseLeave: B,
          onKeyDown: (N) => {
            var I, A, E, O, X;
            const w = Array.from(
              ((I = m.current) == null ? void 0 : I.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const C = w.indexOf(document.activeElement);
            N.key === "ArrowDown" ? (N.preventDefault(), (A = w[(C + 1) % w.length]) == null || A.focus()) : N.key === "ArrowUp" ? (N.preventDefault(), (E = w[(C - 1 + w.length) % w.length]) == null || E.focus()) : N.key === "Home" ? (N.preventDefault(), (O = w[0]) == null || O.focus()) : N.key === "End" && (N.preventDefault(), (X = w[w.length - 1]) == null || X.focus());
          },
          className: u(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            S === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            c.flyoutPanel,
            i !== "none" && (h ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            tn,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (N, w) => {
                l(N, w), b(!1);
              }
            }
          )
        }
      ),
      x
    )
  ] });
}, jn = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: i,
  onSelectRoot: l,
  onNavigate: c
}) => {
  const { iconRegistry: d } = Ge(), b = pe(s, "sm"), f = oe(i), h = Wt[b];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": b,
      "data-motion": f,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((g) => {
        var p;
        const m = a ? n === g.key : kt(g, r);
        return a || !((p = g.children) != null && p.length) ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => {
              a && l ? l(g) : g.path && c(g.path, g);
            },
            className: u(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Nt,
              h.topItem,
              m ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              vt(g.icon, d, h.topIcon),
              /* @__PURE__ */ e("span", { children: g.label })
            ]
          },
          g.key
        ) : /* @__PURE__ */ e(
          fb,
          {
            item: g,
            pathname: r,
            isActive: m,
            registry: d,
            size: b,
            motion: f,
            onNavigate: c
          },
          g.key
        );
      })
    }
  );
}, pb = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: i, className: l, onNavigate: c }) => {
  const { iconRegistry: d } = Ge(), b = pe(s, "sm"), f = oe(i), h = Wt[b], g = n === "dark", m = ce(
    () => r.find((x) => kt(x, a)) ?? r[0],
    [r, a]
  ), [p, v] = $((m == null ? void 0 : m.key) ?? "");
  de(() => {
    m != null && m.key && v(m.key);
  }, [m == null ? void 0 : m.key]);
  const y = r.find((x) => x.key === p) ?? m, S = (y == null ? void 0 : y.children) ?? [];
  return /* @__PURE__ */ o(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": b,
      "data-motion": f,
      className: u("flex h-full shrink-0 select-none", l),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: u(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              g ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Zt, { brand: t, collapsed: !0, tone: n, size: b }) }),
              /* @__PURE__ */ e("div", { className: u("flex w-full flex-1 flex-col items-center overflow-y-auto", h.dualRailWrap), children: r.map((x) => {
                const k = x.key === (y == null ? void 0 : y.key);
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var D, B, T;
                      v(x.key), !((D = x.children) != null && D.length) && x.path ? c(x.path, x) : (T = (B = x.children) == null ? void 0 : B[0]) != null && T.path && c(x.children[0].path, x.children[0]);
                    },
                    className: u(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      Nt,
                      h.dualRailItem,
                      k ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : g ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      vt(x.icon ?? "folder", d, h.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: u("truncate", h.dualRailLabelMaxW), children: x.label.slice(0, 4) })
                    ]
                  },
                  x.key
                );
              }) })
            ]
          }
        ),
        S.length > 0 && /* @__PURE__ */ o(
          "div",
          {
            style: { width: "var(--abc-dual-panel-w)" },
            className: "flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
            children: [
              /* @__PURE__ */ o(
                "div",
                {
                  className: u(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    h.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: u("truncate font-bold text-[var(--abc-fg)]", h.dualPanelTitle), children: y == null ? void 0 : y.label }),
                    /* @__PURE__ */ e(gt, { className: u("text-[var(--abc-fg-muted)]", h.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: u("flex-1 overflow-y-auto", h.dualPanelWrap), children: S.map((x) => {
                const k = x.path === a;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    disabled: x.disabled,
                    onClick: () => !x.disabled && x.path && c(x.path, x),
                    className: u(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      Nt,
                      h.dualPanelItem,
                      k ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      x.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      vt(x.icon, d, h.dualPanelIcon),
                      /* @__PURE__ */ e("span", { className: "truncate", children: x.label })
                    ]
                  },
                  x.key
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}, hb = {
  xs: {
    barPadding: "px-2.5",
    tabItem: "h-6 gap-1 px-2 text-[11px]",
    tabIcon: 12,
    pinIcon: "h-2.5 w-2.5",
    closeIcon: "h-2 w-2",
    actionBtn: "h-6 w-6",
    actionIcon: "h-3 w-3"
  },
  sm: {
    barPadding: "px-3",
    tabItem: "h-7 gap-1.5 px-2.5 text-xs",
    tabIcon: 13,
    pinIcon: "h-2.5 w-2.5",
    closeIcon: "h-2.5 w-2.5",
    actionBtn: "h-6.5 w-6.5",
    actionIcon: "h-3.5 w-3.5"
  },
  md: {
    barPadding: "px-3.5",
    tabItem: "h-8 gap-1.5 px-3 text-[13px]",
    tabIcon: 14,
    pinIcon: "h-3 w-3",
    closeIcon: "h-3 w-3",
    actionBtn: "h-7.5 w-7.5",
    actionIcon: "h-3.5 w-3.5"
  },
  lg: {
    barPadding: "px-4",
    tabItem: "h-9 gap-2 px-3.5 text-sm",
    tabIcon: 15,
    pinIcon: "h-3 w-3",
    closeIcon: "h-3 w-3",
    actionBtn: "h-8 w-8",
    actionIcon: "h-4 w-4"
  }
}, vb = ({
  tabs: t,
  activePath: r,
  variant: a = "card",
  size: n,
  motion: s,
  onSelect: i,
  onClose: l,
  onCloseOthers: c,
  onCloseRight: d,
  onCloseAll: b,
  onTogglePin: f,
  onRefresh: h,
  className: g
}) => {
  var S;
  const { iconRegistry: m } = Ge(), p = pe(n, "sm"), v = oe(s), y = hb[p];
  return t.length === 0 ? null : /* @__PURE__ */ o(
    "div",
    {
      "data-size": p,
      "data-motion": v,
      className: u(
        "flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none",
        y.barPadding,
        g
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]", children: t.map((x) => {
          const k = x.path === r, D = x.closable !== !1 && !x.pinned, B = a === "pill" ? k ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? k ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : k ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ o(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => i(x.path),
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), i(x.path));
              },
              className: u(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                y.tabItem,
                B
              ),
              children: [
                x.pinned && /* @__PURE__ */ e(Jt, { className: u("shrink-0 opacity-75", y.pinIcon) }),
                x.icon && (typeof x.icon == "string" ? /* @__PURE__ */ e(zt, { name: x.icon, size: y.tabIcon, registry: m }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: x.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: x.title }),
                D && l && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${x.title}`,
                    onClick: (T) => {
                      T.stopPropagation(), l(x.path);
                    },
                    className: u(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && k ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(Ue, { className: y.closeIcon })
                  }
                )
              ]
            },
            x.path
          );
        }) }),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1", children: [
          h && /* @__PURE__ */ e(Je, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => h(r),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                y.actionBtn
              ),
              children: /* @__PURE__ */ e(Xr, { className: y.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            Qt,
            {
              items: [
                ...f ? [
                  {
                    key: "pin",
                    label: (S = t.find((x) => x.path === r)) != null && S.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5" }),
                    onClick: () => f(r)
                  }
                ] : [],
                ...c ? [
                  {
                    key: "others",
                    label: "关闭其他页签",
                    onClick: () => c(r)
                  }
                ] : [],
                ...d ? [
                  {
                    key: "right",
                    label: "关闭右侧页签",
                    onClick: () => d(r)
                  }
                ] : [],
                ...b ? [
                  {
                    key: "all",
                    label: "关闭全部可关页签",
                    danger: !0,
                    dividerAbove: !0,
                    onClick: () => b()
                  }
                ] : []
              ],
              children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "页签批量操作",
                  className: u(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    y.actionBtn
                  ),
                  children: /* @__PURE__ */ e(Oa, { className: y.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, gb = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: i = 0,
  activeClassName: l,
  children: c
}) => {
  const d = ue(/* @__PURE__ */ new Map()), b = ue(0), f = ue(/* @__PURE__ */ new Map()), h = ue(t);
  if (de(() => {
    const m = s == null ? void 0 : s.current;
    if (!m) return;
    h.current && h.current !== t && f.current.set(h.current, m.scrollTop), h.current = t;
    const p = f.current.get(t) ?? 0;
    requestAnimationFrame(() => {
      s != null && s.current && (s.current.scrollTop = p);
    });
  }, [t, s]), de(() => {
    if (typeof window > "u") return;
    const m = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(m);
  }, [t]), !r)
    return d.current.clear(), /* @__PURE__ */ e("div", { className: u("min-h-full", l), children: c }, `${t}_${i}`);
  if (n && n.length > 0) {
    const m = /* @__PURE__ */ new Set([...n, t]);
    for (const p of Array.from(d.current.keys()))
      m.has(p) || (d.current.delete(p), f.current.delete(p));
  }
  b.current += 1;
  const g = d.current.get(t);
  for (d.current.set(t, {
    key: t,
    seed: i,
    lastActiveTick: b.current,
    node: g && g.seed === i ? g.node : c
  }); d.current.size > a; ) {
    let m = null, p = 1 / 0;
    for (const [v, y] of d.current.entries())
      v !== t && y.lastActiveTick < p && (p = y.lastActiveTick, m = v);
    if (m)
      d.current.delete(m);
    else
      break;
  }
  return /* @__PURE__ */ e(Re, { children: Array.from(d.current.values()).map((m) => {
    const p = m.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: p ? "block" : "none" },
        className: u("min-h-full", p && l),
        children: m.node
      },
      `${m.key}_${m.seed}`
    );
  }) });
}, Fs = "abc_cmd_recent_v1", Ws = 5;
function On() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem(Fs);
    if (!t) return [];
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function $n(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Fs, JSON.stringify(t.slice(0, Ws)));
    } catch {
    }
}
function Hs(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const i = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: i.join(" / ") }), (n = s.children) != null && n.length && a.push(...Hs(s.children, i));
  }
  return a;
}
function Fn(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), i = n.indexOf(s);
  if (i < 0) return t;
  const l = t.slice(0, i), c = t.slice(i, i + a.length), d = t.slice(i + a.length);
  return /* @__PURE__ */ o(Re, { children: [
    l,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: c }),
    d
  ] });
}
const xb = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: i } = Ge(), [l, c] = $(""), [d, b] = $("all"), [f, h] = $(0), [g, m] = $(() => On()), p = ue(null), v = ue(null);
  de(() => {
    t ? m(On()) : (c(""), b("all"), h(0));
  }, [t]);
  const y = ce(() => [
    ...Hs(a).map(({ item: C, trail: I }) => ({
      id: `nav_${C.key}`,
      title: C.label,
      subtitle: `${I}${C.path ? ` · ${C.path}` : ""}`,
      group: "页面导航",
      icon: C.icon ?? "file",
      keywords: C.path,
      onTrigger: () => {
        C.path && (n == null || n(C.path, C));
      }
    })),
    ...s.map((C) => ({
      ...C,
      group: C.group || "快捷指令"
    }))
  ], [a, n, s]), S = ce(() => {
    const w = /* @__PURE__ */ new Set();
    for (const C of y)
      C.group && w.add(C.group);
    return Array.from(w);
  }, [y]), x = ce(() => {
    const w = l.trim(), C = (O) => d !== "all" && d !== "__recent__" && O.group !== d ? !1 : w ? ht(O.title, w) || !!(O.subtitle && ht(O.subtitle, w)) || !!(O.keywords && ht(O.keywords, w)) : !0, I = [];
    if (d === "__recent__") {
      const O = g.map((X) => y.find((Z) => Z.id === X)).filter((X) => X !== void 0 && C(X));
      return O.length > 0 && I.push({ groupName: "最近访问", isRecent: !0, items: O }), I;
    }
    const A = /* @__PURE__ */ new Set();
    if (!w && d === "all" && g.length > 0) {
      const O = g.map((X) => y.find((Z) => Z.id === X)).filter((X) => X !== void 0);
      O.length > 0 && (O.forEach((X) => A.add(X.id)), I.push({ groupName: "最近访问", isRecent: !0, items: O }));
    }
    const E = /* @__PURE__ */ new Map();
    for (const O of y) {
      if (A.has(O.id) || !C(O)) continue;
      const X = O.group || "其他", Z = E.get(X) ?? [];
      Z.push(O), E.set(X, Z);
    }
    for (const [O, X] of E.entries())
      X.length > 0 && I.push({ groupName: O, items: X });
    return I;
  }, [y, l, d, g]), k = ce(
    () => x.flatMap((w) => w.items),
    [x]
  );
  de(() => {
    h(0);
  }, [l, d]), de(() => {
    var C;
    if (!t || !v.current) return;
    const w = v.current.querySelector(`[data-cmd-idx="${f}"]`);
    (C = w == null ? void 0 : w.scrollIntoView) == null || C.call(w, { block: "nearest" });
  }, [f, t]);
  const D = (w) => {
    if (!w) return;
    const C = [w.id, ...g.filter((I) => I !== w.id)].slice(
      0,
      Ws
    );
    m(C), $n(C), w.onTrigger(), r();
  }, B = () => {
    m([]), $n([]), d === "__recent__" && b("all");
  }, T = ce(() => {
    const w = ["all"];
    return g.length > 0 && w.push("__recent__"), [...w, ...S];
  }, [g.length, S]);
  let N = -1;
  return /* @__PURE__ */ e(
    lt,
    {
      open: t,
      onClose: r,
      width: "min(720px, 92vw)",
      draggable: !1,
      fullscreenable: !1,
      className: "rounded-[var(--abc-radius-xl)]",
      children: /* @__PURE__ */ o(
        "div",
        {
          onKeyDown: (w) => {
            if (w.key === "ArrowDown")
              w.preventDefault(), h((C) => k.length ? (C + 1) % k.length : 0);
            else if (w.key === "ArrowUp")
              w.preventDefault(), h(
                (C) => k.length ? (C - 1 + k.length) % k.length : 0
              );
            else if (w.key === "Tab") {
              w.preventDefault();
              const C = T.indexOf(d), I = w.shiftKey ? -1 : 1, A = T[(C + I + T.length) % T.length];
              A && b(A);
            } else w.key === "Enter" && k[f] && (w.preventDefault(), D(k[f]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ o("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(ct, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: p,
                  type: "text",
                  autoFocus: !0,
                  value: l,
                  onChange: (w) => c(w.target.value),
                  placeholder: "搜索菜单名称、路由路径、快捷指令或输入拼音首字母（如 yhgl）...",
                  className: "w-full bg-transparent text-[15px] font-medium text-[var(--abc-fg)] placeholder:font-normal placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              ),
              l && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "清空搜索词",
                  onClick: () => {
                    var w;
                    c(""), (w = p.current) == null || w.focus();
                  },
                  className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(Yt, { className: "shrink-0", children: "ESC" })
            ] }),
            S.length > 0 && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    onClick: () => b("all"),
                    className: u(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      d === "all" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      "全部 (",
                      y.length,
                      ")"
                    ]
                  }
                ),
                g.length > 0 && /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    onClick: () => b("__recent__"),
                    className: u(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      d === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(zr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                S.map((w) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => b(w),
                    className: u(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      d === w ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: w
                  },
                  w
                ))
              ] }),
              g.length > 0 && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  onClick: B,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: v, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: k.length === 0 ? /* @__PURE__ */ o("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Nr, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ o("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                l,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: x.map((w) => /* @__PURE__ */ o("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1.5", children: [
                  w.isRecent && /* @__PURE__ */ e(zr, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: w.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: w.items.length })
              ] }),
              w.items.map((C) => {
                N += 1;
                const I = N, A = I === f;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": I,
                    onMouseEnter: () => h(I),
                    onClick: () => D(C),
                    className: u(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      A ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ o("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: u(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              A ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: C.icon ? typeof C.icon == "string" ? /* @__PURE__ */ e(zt, { name: C.icon, size: 17, registry: i }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: C.icon }) : /* @__PURE__ */ e(ct, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ o("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: u(
                                "truncate text-sm font-semibold",
                                A ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: Fn(C.title, l)
                            }
                          ),
                          C.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: Fn(C.subtitle, l) })
                        ] })
                      ] }),
                      /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
                        C.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: u(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              A ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: C.group
                          }
                        ),
                        A && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(rc, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${w.isRecent ? "recent" : "std"}_${C.id}`
                );
              })
            ] }, w.groupName)) }) }),
            /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Yt, { children: /* @__PURE__ */ e(Na, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(Yt, { children: /* @__PURE__ */ e(ka, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Yt, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Yt, { children: "Tab" }),
                  /* @__PURE__ */ e("span", { children: "切换分类" })
                ] })
              ] }),
              /* @__PURE__ */ o("span", { className: "font-mono", children: [
                "共 ",
                k.length,
                " 项结果"
              ] })
            ] })
          ]
        }
      )
    }
  );
}, $u = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: i,
  footer: l,
  className: c,
  children: d
}) => /* @__PURE__ */ o("div", { className: u("flex min-h-full flex-col gap-4", l && "pb-16", c), children: [
  ((n == null ? void 0 : n.length) || t || s || i) && /* @__PURE__ */ o("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((b, f) => {
      const h = f === n.length - 1;
      return /* @__PURE__ */ o(je.Fragment, { children: [
        f > 0 && /* @__PURE__ */ e(gt, { className: "h-3 w-3 opacity-60" }),
        b.onClick && !h ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: b.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: b.label
          }
        ) : /* @__PURE__ */ e("span", { className: u(h && "font-medium text-[var(--abc-fg-secondary)]"), children: b.label })
      ] }, f);
    }) }),
    (t || s) && /* @__PURE__ */ o("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ o("div", { className: "min-w-0", children: [
        /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-2", children: [
          t && /* @__PURE__ */ e("h1", { className: "text-base font-bold tracking-tight text-[var(--abc-fg)]", children: t }),
          a
        ] }),
        r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
      ] }),
      s && /* @__PURE__ */ e("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: s })
    ] }),
    i && /* @__PURE__ */ e("div", { children: i })
  ] }),
  /* @__PURE__ */ e("div", { className: "flex-1", children: d }),
  l && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: l })
] }), yb = ({
  brand: t = { name: "ABC Enterprise", subtitle: "Design System & Console" },
  variant: r = "split",
  headline: a = "高密度、高可靠的企业级数字工作台",
  subheadline: n = "基于 ABC Design 统一语义化 Token 与多模态布局架构构建，助力多业务线高效协同。",
  highlights: s = [
    "三层语义化 Design Tokens，支持多品牌色与暗黑模式秒级切换",
    "5 大企业级自适应布局拓扑，一套组件无缝适配全终端业务",
    "零业务 API 耦合，Adapter 协议驱动安全接入任意后端架构"
  ],
  topRightExtra: i,
  copyright: l = `© ${(/* @__PURE__ */ new Date()).getFullYear()} ABC Design System. All rights reserved.`,
  children: c,
  className: d
}) => r === "centered" ? /* @__PURE__ */ o(
  "div",
  {
    className: u(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      d
    ),
    children: [
      /* @__PURE__ */ e(Dn, {}),
      i && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: i }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(Zt, { brand: t }) }),
      /* @__PURE__ */ o("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(An, {}),
        c
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: l })
    ]
  }
) : /* @__PURE__ */ o(
  "div",
  {
    className: u(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      d
    ),
    children: [
      /* @__PURE__ */ o("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Dn, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Zt, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ o("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((b, f) => /* @__PURE__ */ o("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(Ct, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: b })
          ] }, f)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: l })
      ] }),
      /* @__PURE__ */ o("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(Zt, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: i })
        ] }),
        /* @__PURE__ */ o("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(An, {}),
          c
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: l })
      ] })
    ]
  }
), wb = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], Nb = [
  {
    id: "enterprise",
    name: "标准企业工作台",
    badge: "默认推荐",
    swatch: "#2563eb",
    theme: {
      mode: "light",
      brand: "blue",
      customBrandColor: void 0,
      density: "default",
      radius: "md",
      fontScale: "md",
      visualMode: "default"
    },
    layout: {
      mode: "sidebar",
      sidebarTone: "dark",
      tabStyle: "card",
      contentWidth: "fluid",
      sidebarWidth: void 0,
      headerHeight: void 0,
      headerBlur: !0
    },
    transition: "fade-slide"
  },
  {
    id: "devops-dark",
    name: "高密运维监控台",
    badge: "高信息密度",
    swatch: "#4f46e5",
    theme: {
      mode: "dark",
      brand: "indigo",
      customBrandColor: void 0,
      density: "compact",
      radius: "sm",
      fontScale: "sm",
      visualMode: "default"
    },
    layout: {
      mode: "dual-column",
      sidebarTone: "dark",
      tabStyle: "underline",
      contentWidth: "fluid",
      headerHeight: 48,
      headerBlur: !0
    },
    transition: "fade"
  },
  {
    id: "analytics-top",
    name: "大屏数据驾驶舱",
    badge: "宽屏沉浸",
    swatch: "#059669",
    theme: {
      mode: "light",
      brand: "emerald",
      customBrandColor: void 0,
      density: "comfortable",
      radius: "lg",
      fontScale: "md",
      visualMode: "default"
    },
    layout: {
      mode: "top",
      tabStyle: "pill",
      contentWidth: "fluid",
      headerHeight: 58,
      headerBlur: !0
    },
    transition: "zoom"
  },
  {
    id: "airy-violet",
    name: "极简通透白昼",
    badge: "柔和呼吸感",
    swatch: "#7c3aed",
    theme: {
      mode: "light",
      brand: "violet",
      customBrandColor: void 0,
      density: "default",
      radius: "lg",
      fontScale: "md",
      visualMode: "default"
    },
    layout: {
      mode: "sidebar",
      sidebarTone: "light",
      tabStyle: "pill",
      contentWidth: "fixed",
      sidebarWidth: 244,
      headerHeight: 56,
      headerBlur: !0
    },
    transition: "slide-left"
  }
], kb = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Wn = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var te;
  const {
    theme: i,
    pageTransition: l,
    watermarkEnabled: c,
    setThemeMode: d,
    setBrand: b,
    setCustomBrandColor: f,
    setDensity: h,
    setRadius: g,
    setFontScale: m,
    setVisualMode: p,
    setComponentSize: v,
    setMotion: y,
    updateTheme: S,
    setPageTransition: x,
    setWatermarkEnabled: k,
    resetTheme: D,
    toast: B
  } = Ge(), [T, N] = $(1), [w, C] = $(!0), [I, A] = $("实时 Token 响应预览"), [E, O] = $(0), [X, Z] = $(!1), [R, z] = $(""), [W, V] = $(i.customBrandColor ?? "#0ea5e9"), K = i.componentSize ?? "sm", Y = a.sidebarWidth ?? db[K], se = a.headerHeight ?? bb[K], P = i.customBrandColor || ((te = la[i.brand]) == null ? void 0 : te.swatch) || "#2563eb", q = (M, le) => {
    M.theme.mode && M.theme.mode !== i.mode && d(M.theme.mode, { clientX: le.clientX, clientY: le.clientY }), S(M.theme), n(M.layout), x(M.transition), O((Ee) => Ee + 1), B.success(`已切换至「${M.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    ta,
    {
      open: t,
      onClose: r,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ o("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            ye,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                D(), s == null || s(), B.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            ye,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(Vn, { className: "h-3.5 w-3.5" }),
              onClick: () => Z((M) => !M),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            ye,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(ac, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const M = JSON.stringify(i, null, 2), le = JSON.stringify(a, null, 2), Ee = `<AbcProvider
  defaultTheme={${M}}
  defaultPageTransition="${l}"
  defaultWatermarkEnabled={${c}}
>
  <ProLayout
    defaultSettings={${le}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(Ee), B.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  B.error("复制代码失败");
                }
              },
              children: "复制 JSX"
            }
          ),
          /* @__PURE__ */ e(
            ye,
            {
              variant: "primary",
              size: "xs",
              icon: /* @__PURE__ */ e(ar, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const M = {
                  theme: i,
                  layout: a,
                  pageTransition: l,
                  watermarkEnabled: c
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(M, null, 2)), B.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  B.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ o("div", { className: "space-y-6", children: [
        X && /* @__PURE__ */ o("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Z(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            Jr,
            {
              rows: 4,
              value: R,
              onChange: (M) => z(M.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(ye, { size: "xs", variant: "primary", onClick: () => {
            try {
              const M = JSON.parse(R);
              M.theme && typeof M.theme == "object" && S(M.theme), M.layout && typeof M.layout == "object" && n(M.layout), typeof M.pageTransition == "string" && x(M.pageTransition), typeof M.watermarkEnabled == "boolean" && k(M.watermarkEnabled), Z(!1), z(""), B.success("已成功导入并应用自定义配置");
            } catch {
              B.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ o("section", { className: "space-y-2", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ o("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(Nr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                onClick: () => O((M) => M + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Yn, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o(
            "div",
            {
              className: u(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                kb[l]
              ),
              children: [
                /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ o(ye, { variant: "primary", onClick: () => N((M) => M + 1), children: [
                      "按压回弹 #",
                      T
                    ] }),
                    /* @__PURE__ */ e(ye, { variant: "outline", onClick: () => C((M) => !M), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Pt, { status: w ? "success" : "warning", dot: !0, children: w ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      ft,
                      {
                        checked: w,
                        onChange: C,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  tt,
                  {
                    allowClear: !0,
                    value: I,
                    onChange: (M) => A(M.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ o("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: P })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((M) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${M}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${M})` }
                    },
                    M
                  )) })
                ] })
              ]
            },
            E
          )
        ] }),
        /* @__PURE__ */ o("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: Nb.map((M) => /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: (le) => q(M, le),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: M.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: M.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: M.badge })
              ]
            },
            M.id
          )) })
        ] }),
        /* @__PURE__ */ o("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: wb.map((M) => {
            const le = a.mode === M.mode;
            return /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: M.mode }),
                className: u(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  le ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ o("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    M.mode === "sidebar" && /* @__PURE__ */ o(Re, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    M.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    M.mode === "mix" && /* @__PURE__ */ o("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    M.mode === "dual-column" && /* @__PURE__ */ o(Re, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    M.mode === "auth" && /* @__PURE__ */ o(Re, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ o("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: M.title }),
                    le && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: M.desc })
                ]
              },
              M.mode
            );
          }) })
        ] }),
        /* @__PURE__ */ o("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "3. 明暗外观与动态品牌色引擎" }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "色彩模式" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: i.mode,
                onChange: (M) => d(M),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Ca, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Sa, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(qn, { className: "h-3 w-3" }),
                      " 系统"
                    ] })
                  }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏视觉色调" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: a.sidebarTone,
                onChange: (M) => n({ sidebarTone: M }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(la).map((M) => {
            const le = la[M], Ee = !i.customBrandColor && i.brand === M;
            return /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                onClick: () => b(M),
                className: u(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Ee ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: le.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: le.label.split(" ")[0] })
                ]
              },
              M
            );
          }) }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(Xn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: i.customBrandColor || W,
                  onChange: (M) => {
                    const le = M.target.value;
                    V(le), f(le);
                  },
                  className: "h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  maxLength: 7,
                  value: i.customBrandColor ?? W,
                  onChange: (M) => {
                    const le = M.target.value;
                    V(le), /^#[0-9a-fA-F]{6}$/.test(le) && f(le);
                  },
                  className: "w-20 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-xs uppercase text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                }
              ),
              i.customBrandColor && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => f(void 0),
                  className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: "清除"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "4. 密度、圆角与排版规格" }),
          /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "表单与按钮高度密度" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: i.density,
                onChange: (M) => h(M),
                options: Object.keys(yn).map((M) => ({
                  value: M,
                  label: yn[M].label
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局控件与卡片圆角" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: i.radius,
                onChange: (M) => g(M),
                options: Object.keys(wn).map((M) => ({
                  value: M,
                  label: wn[M].label.split(" ")[0]
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "全局字号缩放比例" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: i.fontScale ?? "md",
                onChange: (M) => m(M),
                options: [
                  { value: "sm", label: "紧凑 94%" },
                  { value: "md", label: "标准 100%" },
                  { value: "lg", label: "舒适 106%" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件与导航尺寸" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: i.componentSize ?? "自动 (随组件)" })
            ] }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: i.componentSize ?? "auto",
                onChange: (M) => v(M === "auto" ? void 0 : M),
                options: [
                  { value: "auto", label: "自动" },
                  { value: "xs", label: "xs" },
                  { value: "sm", label: "sm" },
                  { value: "md", label: "md" },
                  { value: "lg", label: "lg" }
                ],
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件微交互动效" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: mr[i.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: i.motion ?? "smooth",
                onChange: (M) => {
                  y(M), O((le) => le + 1);
                },
                options: Object.keys(mr).map((M) => ({
                  value: M,
                  label: mr[M].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ o("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              mr[i.motion ?? "smooth"].label,
              "：",
              mr[i.motion ?? "smooth"].description
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "5. 壳层几何尺寸与页签风格" }),
          /* @__PURE__ */ o("div", { className: "space-y-1", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "侧边栏展开宽度" }),
              /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                a.sidebarWidth !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ sidebarWidth: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ o("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  Y,
                  "px"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "range",
                min: 196,
                max: 288,
                step: 4,
                value: Y,
                onChange: (M) => n({ sidebarWidth: Number(M.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "space-y-1", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "顶部导航栏高度" }),
              /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
                a.headerHeight !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ headerHeight: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ o("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  se,
                  "px"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "range",
                min: 46,
                max: 66,
                step: 2,
                value: se,
                onChange: (M) => n({ headerHeight: Number(M.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "多页签视觉形态" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: a.tabStyle ?? "card",
                onChange: (M) => n({ tabStyle: M }),
                options: [
                  { value: "card", label: "卡片式" },
                  { value: "pill", label: "胶囊式" },
                  { value: "underline", label: "下划线" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示多页签栏 (MultiTabBar)" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.showTabs,
                onChange: (M) => n({ showTabs: M })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.keepAlive,
                onChange: (M) => n({ keepAlive: M })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.headerBlur !== !1,
                onChange: (M) => n({ headerBlur: M })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (M) => n({ showBreadcrumb: M })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.sidebarAccordion,
                onChange: (M) => n({ sidebarAccordion: M })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: !!a.showFooter,
                onChange: (M) => n({ showFooter: M })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: c,
                onChange: (M) => k(M)
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: a.contentWidth,
                onChange: (M) => n({ contentWidth: M }),
                options: [
                  { value: "fluid", label: "流式铺满" },
                  { value: "fixed", label: "定宽居中" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-[var(--abc-fg-secondary)]", children: "页面切换动效" }),
            /* @__PURE__ */ e(
              jt,
              {
                size: "xs",
                className: "w-44",
                value: l,
                onChange: (M) => {
                  x(M), O((le) => le + 1);
                },
                options: [
                  { value: "fade-slide", label: "平滑微滑 (推荐)" },
                  { value: "fade", label: "极简淡入" },
                  { value: "zoom", label: "沉浸缩放" },
                  { value: "slide-left", label: "横向滑入" },
                  { value: "none", label: "关闭动效" }
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ o("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            mt,
            {
              variant: "segmented",
              value: i.visualMode ?? "default",
              onChange: (M) => p(M),
              options: [
                { value: "default", label: "标准原色" },
                { value: "color-weak", label: "色弱增强" },
                { value: "gray", label: "全站灰阶" }
              ],
              className: "w-full justify-between"
            }
          )
        ] })
      ] })
    }
  );
}, Cb = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Sb = {
  xs: {
    headerPad: "px-3",
    iconBtn: "h-7 w-7",
    iconCls: "h-3.5 w-3.5",
    searchBtn: "h-7 gap-1.5 px-2 text-[11px]",
    searchIcon: "h-3 w-3",
    breadcrumb: "text-[11px]",
    mobileDrawerWidth: 236,
    avatarSize: "xs"
  },
  sm: {
    headerPad: "px-4",
    iconBtn: "h-8 w-8",
    iconCls: "h-4 w-4",
    searchBtn: "h-8 gap-2 px-2.5 text-xs",
    searchIcon: "h-3.5 w-3.5",
    breadcrumb: "text-xs",
    mobileDrawerWidth: 260,
    avatarSize: "sm"
  },
  md: {
    headerPad: "px-4",
    iconBtn: "h-9 w-9",
    iconCls: "h-4 w-4",
    searchBtn: "h-9 gap-2 px-3 text-xs",
    searchIcon: "h-3.5 w-3.5",
    breadcrumb: "text-[13px]",
    mobileDrawerWidth: 276,
    avatarSize: "sm"
  },
  lg: {
    headerPad: "px-5",
    iconBtn: "h-10 w-10",
    iconCls: "h-[18px] w-[18px]",
    searchBtn: "h-10 gap-2.5 px-3.5 text-sm",
    searchIcon: "h-4 w-4",
    breadcrumb: "text-sm",
    mobileDrawerWidth: 296,
    avatarSize: "md"
  }
}, Fu = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: r,
  pathname: a,
  onNavigate: n,
  settings: s,
  defaultSettings: i,
  onSettingsChange: l,
  user: c,
  headerExtra: d,
  commandActions: b = [],
  tabs: f,
  onTabsChange: h,
  authRender: g,
  authProps: m,
  showCustomizerTrigger: p = !0,
  size: v,
  motion: y,
  children: S
}) => {
  const {
    resolvedTheme: x,
    toggleTheme: k,
    pageTransition: D,
    watermarkEnabled: B,
    watermarkText: T
  } = Ge(), N = pe(v, "sm"), w = oe(y), C = Sb[N], I = ce(
    () => ({ ...ub, ...i }),
    [i]
  ), [A, E] = st({
    value: s ? { ...I, ...s } : void 0,
    defaultValue: I,
    onChange: l
  }), O = he(
    (F) => {
      E((J) => ({ ...J, ...F }));
    },
    [E]
  ), [X, Z] = $(!1), [R, z] = $(!1), [W, V] = $(!1), [K, Y] = $({}), se = ue(null), [P, q] = st({
    value: f,
    defaultValue: [],
    onChange: h
  }), j = ce(
    () => $s(r, a),
    [r, a]
  );
  de(() => {
    const F = j[j.length - 1];
    !F || !F.path || q((J) => J.some((we) => we.path === F.path) ? J : [
      ...J,
      {
        path: F.path,
        title: F.label,
        icon: F.icon,
        pinned: J.length === 0
      }
    ]);
  }, [j, q]), de(() => {
    const F = (J) => {
      (J.metaKey || J.ctrlKey) && J.key.toLowerCase() === "k" && (J.preventDefault(), z((we) => !we));
    };
    return window.addEventListener("keydown", F), () => window.removeEventListener("keydown", F);
  }, []);
  const G = ce(
    () => r.find((F) => kt(F, a)) ?? r[0],
    [r, a]
  ), [ne, te] = $((G == null ? void 0 : G.key) ?? "");
  de(() => {
    G != null && G.key && te(G.key);
  }, [G == null ? void 0 : G.key]);
  const M = ce(() => {
    const F = r.find((J) => J.key === ne) ?? G;
    return (F == null ? void 0 : F.children) ?? [];
  }, [r, ne, G]), le = (F) => {
    const J = P.findIndex((We) => We.path === F), we = P.filter((We) => We.path !== F || We.pinned);
    if (q(we), F === a && we.length > 0) {
      const We = we[Math.max(0, J - 1)] ?? we[0];
      We && n(We.path);
    }
  }, Ee = ce(() => T || [(c == null ? void 0 : c.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [T, c == null ? void 0 : c.name, t.name]);
  if (A.mode === "auth")
    return /* @__PURE__ */ o(Re, { children: [
      /* @__PURE__ */ e(
        yb,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (F) => k({ clientX: F.clientX, clientY: F.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: x === "dark" ? /* @__PURE__ */ e(Ca, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Sa, { className: "h-4 w-4" })
              }
            ),
            p && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => V(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(ya, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...m,
          children: g ?? S
        }
      ),
      /* @__PURE__ */ e(
        Wn,
        {
          open: W,
          onClose: () => V(!1),
          layoutSettings: A,
          onLayoutChange: O,
          onResetAll: () => E(I)
        }
      )
    ] });
  const Be = A.mode === "sidebar", me = A.mode === "top", ve = A.mode === "mix", ie = A.mode === "dual-column", H = /* @__PURE__ */ o(
    "header",
    {
      className: u(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        C.headerPad,
        A.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => Z(!0),
              className: u(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                C.iconBtn
              ),
              children: /* @__PURE__ */ e(Zn, { className: C.iconCls })
            }
          ),
          (me || ve) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Zt, { brand: t, size: N, className: "px-0 pr-3" }) }),
          (Be || ve && M.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": A.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => O({ sidebarCollapsed: !A.sidebarCollapsed }),
              className: u(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                C.iconBtn
              ),
              children: A.sidebarCollapsed ? /* @__PURE__ */ e(nc, { className: C.iconCls }) : /* @__PURE__ */ e(sc, { className: C.iconCls })
            }
          ),
          me && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            jn,
            {
              items: r,
              pathname: a,
              size: N,
              motion: w,
              onNavigate: (F, J) => n(F, J)
            }
          ) }),
          ve && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            jn,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: ne,
              size: N,
              motion: w,
              onSelectRoot: (F) => {
                var J, we;
                te(F.key), F.path && (!F.children || F.children.length === 0) ? n(F.path, F) : (we = (J = F.children) == null ? void 0 : J[0]) != null && we.path && n(F.children[0].path, F.children[0]);
              },
              onNavigate: (F, J) => n(F, J)
            }
          ) }),
          (Be || ie) && A.showBreadcrumb !== !1 && j.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: u(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                C.breadcrumb
              ),
              children: j.map((F, J) => {
                const we = J === j.length - 1;
                return /* @__PURE__ */ o(je.Fragment, { children: [
                  J > 0 && /* @__PURE__ */ e(gt, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "truncate",
                        we && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: F.label
                    }
                  )
                ] }, F.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              onClick: () => z(!0),
              className: u(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                C.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(ct, { className: C.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(Yt, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          d,
          /* @__PURE__ */ e(Je, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (F) => k({ clientX: F.clientX, clientY: F.clientY }),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                C.iconBtn
              ),
              children: x === "dark" ? /* @__PURE__ */ e(Ca, { className: C.iconCls }) : /* @__PURE__ */ e(Sa, { className: C.iconCls })
            }
          ) }),
          p && /* @__PURE__ */ e(Je, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => V(!0),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                C.iconBtn
              ),
              children: /* @__PURE__ */ e(ya, { className: C.iconCls })
            }
          ) }),
          c && /* @__PURE__ */ e(
            Qt,
            {
              items: c.menuItems ?? [
                { key: "profile", label: `当前账号：${c.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ o("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(El, { src: c.avatar, name: c.name, size: C.avatarSize }),
                /* @__PURE__ */ o("div", { className: "hidden text-left md:block", children: [
                  /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-xs font-semibold text-[var(--abc-fg)] leading-tight", children: c.name }),
                  c.role && /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-[10px] text-[var(--abc-fg-muted)] leading-tight", children: c.role })
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  ), U = /* @__PURE__ */ o("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !ve && H,
    A.showTabs && /* @__PURE__ */ e(
      vb,
      {
        tabs: P,
        activePath: a,
        variant: A.tabStyle ?? "card",
        size: N,
        motion: w,
        onSelect: (F) => n(F),
        onClose: le,
        onTogglePin: (F) => q(
          (J) => J.map((we) => we.path === F ? { ...we, pinned: !we.pinned } : we)
        ),
        onCloseOthers: (F) => q((J) => J.filter((we) => we.pinned || we.path === F)),
        onCloseRight: (F) => {
          const J = P.findIndex((we) => we.path === F);
          J < 0 || q((we) => we.filter((We, Ve) => Ve <= J || We.pinned));
        },
        onCloseAll: () => {
          const F = P.filter((J) => J.pinned);
          q(F), F[0] && F[0].path !== a && n(F[0].path);
        },
        onRefresh: (F) => Y((J) => ({ ...J, [F]: (J[F] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: se,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ o(
          Wd,
          {
            enabled: B,
            content: Ee,
            className: u(
              "min-h-full",
              A.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                gb,
                {
                  activeKey: a,
                  enabled: A.keepAlive,
                  aliveKeys: P.map((F) => F.path),
                  scrollContainerRef: se,
                  refreshSeed: K[a] ?? 0,
                  activeClassName: Cb[D],
                  children: S
                }
              ),
              A.showFooter && /* @__PURE__ */ o("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
                "© ",
                (/* @__PURE__ */ new Date()).getFullYear(),
                " ",
                t.name,
                " · Powered by ABC Design System"
              ] })
            ]
          }
        )
      }
    )
  ] }), re = {
    "--abc-sidebar-w": A.sidebarWidth ? `${A.sidebarWidth}px` : void 0,
    "--abc-header-h": A.headerHeight ? `${A.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ o(
    "div",
    {
      "data-size": N,
      "data-motion": w,
      style: re,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        ve && H,
        /* @__PURE__ */ o("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          ve && M.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            va,
            {
              items: M,
              pathname: a,
              collapsed: A.sidebarCollapsed,
              accordion: A.sidebarAccordion,
              tone: A.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (F, J) => n(F, J)
            }
          ) }),
          Be && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            va,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: A.sidebarCollapsed,
              accordion: A.sidebarAccordion,
              tone: A.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (F, J) => n(F, J)
            }
          ) }),
          ie && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            pb,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: A.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (F, J) => n(F, J)
            }
          ) }),
          U
        ] }),
        /* @__PURE__ */ e(
          ta,
          {
            open: X,
            onClose: () => Z(!1),
            placement: "left",
            width: C.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              va,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: N,
                motion: w,
                onNavigate: (F, J) => {
                  n(F, J), Z(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          xb,
          {
            open: R,
            onClose: () => z(!1),
            menuItems: r,
            onNavigate: (F, J) => n(F, J),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: x === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => k()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => V(!0)
              },
              ...b
            ]
          }
        ),
        /* @__PURE__ */ e(
          Wn,
          {
            open: W,
            onClose: () => V(!1),
            layoutSettings: A,
            onLayoutChange: O,
            onResetAll: () => E(I)
          }
        )
      ]
    }
  );
};
function Ks() {
  const { permissionAdapter: t } = Ge();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const Ib = ({
  permission: t,
  code: r,
  mode: a = "any",
  fallbackStrategy: n = "hide",
  disabledTip: s = "暂无操作权限",
  fallback: i,
  fallbackNode: l,
  children: c
}) => {
  var h;
  const { hasPermission: d } = Ks(), b = t ?? r;
  if (!b) return /* @__PURE__ */ e(Re, { children: c });
  if (d(b, a)) return /* @__PURE__ */ e(Re, { children: c });
  if (n === "hide")
    return /* @__PURE__ */ e(Re, { children: i ?? l ?? null });
  if (je.isValidElement(c)) {
    const g = c, m = je.cloneElement(g, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((h = g.props) == null ? void 0 : h.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(Je, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: m }) });
  }
  return null;
}, Wu = Ib;
function Us(t) {
  const { dictAdapter: r } = Ge(), [a, n] = $([]), [s, i] = $(!1);
  return de(() => {
    if (!r || !t) {
      n([]);
      return;
    }
    let l = !0;
    const c = r(t);
    return c instanceof Promise ? (i(!0), c.then((d) => {
      l && n(d);
    }).finally(() => {
      l && i(!1);
    })) : n(c), () => {
      l = !1;
    };
  }, [r, t]), { options: a, loading: s };
}
const Hu = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: i,
  ...l
}) => {
  const c = t ?? r ?? "", { options: d, loading: b } = Us(c), f = ce(
    () => [...a, ...d, ...n],
    [a, d, n]
  );
  return /* @__PURE__ */ e(
    jt,
    {
      options: f,
      placeholder: b && f.length === 0 ? "字典加载中..." : s,
      disabled: i || b && f.length === 0,
      ...l
    }
  );
}, Ku = ({
  dictCode: t,
  dictKey: r,
  value: a,
  dot: n = !0,
  size: s,
  motion: i,
  emptyText: l = "-",
  fallbackTone: c = "neutral",
  className: d
}) => {
  const b = t ?? r ?? "", { options: f } = Us(b);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: l });
  const h = f.find((g) => String(g.value) === String(a));
  return /* @__PURE__ */ e(
    Pt,
    {
      tone: (h == null ? void 0 : h.tone) ?? c,
      dot: n,
      size: s,
      motion: i,
      className: d,
      children: (h == null ? void 0 : h.label) ?? String(a)
    }
  );
}, Hn = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, Mb = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: u("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(Hr, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: u("grid gap-4", Hn[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: u("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ o(
  "div",
  {
    className: u(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ o("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(Hr, { children: /* @__PURE__ */ e("div", { className: u("grid gap-4", Hn[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function Uu({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: i } = Ge(), [l, c] = $(r), [d, b] = $(!1), [f, h] = $({});
  de(() => {
    c(r);
  }, [r]);
  const g = (p, v) => {
    c((y) => ({ ...y, [p]: v })), f[p] && h((y) => {
      const S = { ...y };
      return delete S[p], S;
    });
  };
  return /* @__PURE__ */ o("form", { onSubmit: async (p) => {
    p.preventDefault();
    const v = {};
    for (const y of t)
      for (const S of y.fields)
        if (S.required) {
          const x = l[S.name];
          (x == null || String(x).trim() === "") && (v[S.name] = `请填写${S.label}`);
        }
    if (Object.keys(v).length > 0) {
      h(v), i.warning("请完善必填配置项后再提交");
      return;
    }
    b(!0);
    try {
      await n(l), i.success("配置已保存生效");
    } catch (y) {
      i.error((y == null ? void 0 : y.message) || "保存失败");
    } finally {
      b(!1);
    }
  }, className: "space-y-6", children: [
    /* @__PURE__ */ e(
      Mb,
      {
        mode: a,
        sections: t.map((p) => ({
          key: p.key,
          title: p.title,
          description: p.description,
          columns: p.columns ?? 1,
          children: p.fields.map((v) => {
            const y = l[v.name], S = f[v.name], x = v.type ?? "text";
            return /* @__PURE__ */ e(
              _a,
              {
                label: v.label,
                required: v.required,
                helperText: v.helperText,
                error: S,
                children: x === "switch" ? /* @__PURE__ */ e(
                  ft,
                  {
                    checked: !!y,
                    onChange: (k) => g(v.name, k)
                  }
                ) : x === "number" ? /* @__PURE__ */ e(
                  Ea,
                  {
                    value: y ?? null,
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (k) => g(v.name, k)
                  }
                ) : x === "textarea" ? /* @__PURE__ */ e(
                  Jr,
                  {
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (k) => g(v.name, k.target.value)
                  }
                ) : x === "select" ? /* @__PURE__ */ e(
                  jt,
                  {
                    options: v.options ?? [],
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (k) => g(v.name, k)
                  }
                ) : x === "image" ? v.allowDirectUrlInput !== !1 ? /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    Ps,
                    {
                      src: String(y ?? ""),
                      alt: v.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    tt,
                    {
                      allowClear: !0,
                      value: y ?? "",
                      placeholder: v.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (k) => g(v.name, k.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  pd,
                  {
                    value: String(y ?? ""),
                    onChange: (k) => g(v.name, k)
                  }
                ) : /* @__PURE__ */ e(
                  tt,
                  {
                    type: x === "password" ? "password" : "text",
                    allowClear: !0,
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (k) => g(v.name, k.target.value)
                  }
                )
              },
              v.name
            );
          })
        }))
      }
    ),
    /* @__PURE__ */ o("div", { className: "flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4", children: [
      /* @__PURE__ */ e(
        ye,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            c(r), h({}), i.info("已还原初始配置值");
          },
          children: "重置更改"
        }
      ),
      /* @__PURE__ */ e(
        ye,
        {
          type: "submit",
          variant: "primary",
          loading: d,
          icon: /* @__PURE__ */ e(oc, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
const Tb = Te.forwardRef(
  ({
    surface: t = !1,
    hasActiveFilters: r = !1,
    onReset: a,
    resetLabel: n = "重置筛选",
    search: s,
    filters: i,
    trailing: l,
    children: c,
    className: d,
    ...b
  }, f) => /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      "data-slot": "filter-toolbar",
      className: u(
        "flex flex-wrap items-center justify-between gap-2.5",
        t && "rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 shadow-2xs",
        d
      ),
      ...b,
      children: [
        /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
          s,
          i,
          c
        ] }),
        r && a || l ? /* @__PURE__ */ o("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
          r && a ? /* @__PURE__ */ o(
            ye,
            {
              variant: "ghost",
              size: "xs",
              onClick: a,
              className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
              children: [
                /* @__PURE__ */ e(St, { className: "h-3 w-3 mr-1", "aria-hidden": "true" }),
                /* @__PURE__ */ e("span", { children: n })
              ]
            }
          ) : null,
          l
        ] }) : null
      ]
    }
  )
);
Tb.displayName = "FilterToolbar";
function Gu({
  options: t,
  value: r,
  onValueChange: a,
  size: n = "sm",
  className: s,
  ...i
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "filter-pill-group",
      className: u("inline-flex flex-wrap items-center gap-1.5", s),
      ...i,
      children: t.map((l) => {
        const c = l.value === r;
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            disabled: l.disabled,
            "aria-pressed": c,
            onClick: () => a(l.value),
            className: u(
              "inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full border font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              n === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs",
              c ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#ffffff)] shadow-2xs font-semibold" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-border-hover,#cbd5e1)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              l.icon,
              /* @__PURE__ */ e("span", { children: l.label }),
              l.count !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: u(
                    "rounded-full px-1.5 py-0.2 text-[10px] tabular-nums font-mono",
                    c ? "bg-white/20 text-white" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                  ),
                  children: l.count
                }
              )
            ]
          },
          l.value
        );
      })
    }
  );
}
function Vu({
  label: t,
  items: r,
  selectedId: a = null,
  headerAction: n,
  onSelect: s,
  onClear: i,
  allLabel: l = "全部",
  className: c
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "quick-select-bar",
      className: u(
        "flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs",
        c
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o("span", { className: "font-medium text-[var(--abc-fg-secondary)]", children: [
            t,
            "："
          ] }),
          n
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          s && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s(null),
              className: u(
                "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                a === null ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
              ),
              children: l
            }
          ),
          r.map((d, b) => {
            const f = d.id ?? d.key ?? d.code ?? String(b), h = d.active !== void 0 ? d.active : a === f;
            return /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                onClick: () => {
                  d.onSelect ? d.onSelect() : s && s(f);
                },
                className: u(
                  "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                  h ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  d.label,
                  d.count !== void 0 ? ` (${d.count})` : ""
                ]
              },
              f
            );
          })
        ] }),
        a !== null && i && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: i,
            className: "ml-auto cursor-pointer text-xs text-[var(--abc-fg-muted)] underline underline-offset-2 hover:text-[var(--abc-fg)]",
            children: "清除"
          }
        )
      ]
    }
  );
}
function Yu({
  open: t,
  title: r,
  description: a,
  confirmLabel: n,
  cancelLabel: s = "Cancel",
  workingLabel: i = "Working…",
  reasonLabel: l = "Reason",
  reasonPlaceholder: c = "Record why this change is required",
  reasonHint: d = "8–512 characters. Stored in the operation audit.",
  reasonTooLongMessage: b = "Shorten the reason to 512 characters or fewer.",
  closeLabel: f = "Close",
  minReasonLength: h = 8,
  maxReasonLength: g = 512,
  destructive: m = !1,
  variant: p,
  pending: v = !1,
  confirmDisabled: y = !1,
  error: S = null,
  maxWidthClass: x = "sm:max-w-lg",
  className: k,
  children: D,
  onOpenChange: B,
  onConfirm: T
}) {
  const [N, w] = Te.useState(""), C = Te.useId(), I = m || p === "destructive";
  Te.useEffect(() => {
    t || w("");
  }, [t]);
  const A = N.trim(), E = A.length < h, O = A.length > g, X = !v && !y && !E && !O, Z = () => {
    X && T(A);
  }, R = (z) => {
    z.key === "Enter" && X && (z.preventDefault(), Z());
  };
  return /* @__PURE__ */ e(lt, { open: t, onOpenChange: B, children: /* @__PURE__ */ o(
    Ha,
    {
      "data-slot": "reasoned-action-dialog",
      className: u("w-full max-w-lg", x, k),
      closeLabel: f,
      closeDisabled: v,
      children: [
        /* @__PURE__ */ o(Ka, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            I ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Yr, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Pa, { className: "h-4 w-4", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(Ga, { className: "text-base font-semibold leading-tight", children: r })
          ] }),
          /* @__PURE__ */ e(Va, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
        ] }),
        D && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: D }),
        S && /* @__PURE__ */ e(
          Ft,
          {
            variant: "error",
            title: "操作失败",
            message: S,
            className: "my-1 text-xs"
          }
        ),
        /* @__PURE__ */ o("div", { className: "space-y-1.5 py-1", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ o("label", { htmlFor: C, className: "font-medium text-[var(--abc-fg)]", children: [
              l,
              " ",
              /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ o(
              "span",
              {
                className: u(
                  "font-mono text-[11px] tabular-nums",
                  O ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                ),
                children: [
                  N.length,
                  "/",
                  g
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e(
            tt,
            {
              id: C,
              "aria-label": "Reason",
              value: N,
              disabled: v,
              placeholder: c,
              onChange: (z) => w(z.target.value),
              onKeyDown: R,
              className: u(
                "w-full text-xs",
                O && "border-red-500 focus-visible:ring-red-500/20"
              )
            }
          ),
          /* @__PURE__ */ e(
            "p",
            {
              className: u(
                "text-[11px]",
                O ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
              ),
              children: O ? b : d
            }
          )
        ] }),
        /* @__PURE__ */ o(Ua, { className: "gap-2 pt-2", children: [
          /* @__PURE__ */ e(
            ye,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: v,
              onClick: () => B(!1),
              children: s
            }
          ),
          /* @__PURE__ */ e(
            ye,
            {
              type: "button",
              variant: I ? "danger" : "primary",
              size: "sm",
              disabled: !X,
              loading: v,
              onClick: Z,
              children: v ? i : n
            }
          )
        ] })
      ]
    }
  ) });
}
function Xu({
  open: t,
  onClose: r,
  title: a,
  description: n,
  confirmLabel: s,
  cancelLabel: i = "Cancel",
  workingLabel: l = "Working…",
  reasonLabel: c = "Reason",
  reasonPlaceholder: d = "Record why this change is required",
  reasonHint: b = "8–512 characters. Stored in the operation audit.",
  reasonTooLongMessage: f = "Shorten the reason to 512 characters or fewer.",
  minReasonLength: h = 8,
  maxReasonLength: g = 512,
  destructive: m = !1,
  pending: p = !1,
  confirmDisabled: v = !1,
  error: y = null,
  width: S = 560,
  cascadeMode: x = "adjacent",
  children: k,
  onConfirm: D
}) {
  const [B, T] = Te.useState(""), N = Te.useId();
  Te.useEffect(() => {
    t || T("");
  }, [t]);
  const w = B.trim(), C = w.length < h, I = w.length > g, A = !p && !v && !C && !I, E = () => {
    A && D(w);
  };
  return /* @__PURE__ */ o(
    ta,
    {
      open: t,
      onClose: r,
      width: S,
      cascadeMode: x,
      role: "dialog",
      children: [
        /* @__PURE__ */ o(Rd, { children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            m ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Yr, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Pa, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(zd, { className: "text-base font-semibold", children: a })
          ] }),
          n && /* @__PURE__ */ e(Pd, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ o(jd, { className: "space-y-4", children: [
          y && /* @__PURE__ */ e(
            Ft,
            {
              variant: "error",
              title: "操作失败",
              message: y,
              className: "text-xs"
            }
          ),
          k,
          /* @__PURE__ */ o("div", { className: "rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ o("label", { htmlFor: N, className: "font-semibold text-[var(--abc-fg)]", children: [
                c,
                " ",
                /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: u(
                    "font-mono text-[11px] tabular-nums",
                    I ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: [
                    B.length,
                    "/",
                    g
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e(
              tt,
              {
                id: N,
                "aria-label": "Reason",
                value: B,
                disabled: p,
                placeholder: d,
                onChange: (O) => T(O.target.value),
                className: u(
                  "w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs",
                  I && "border-red-500 focus-visible:ring-red-500/20"
                )
              }
            ),
            /* @__PURE__ */ e(
              "p",
              {
                className: u(
                  "text-[11px]",
                  I ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                ),
                children: I ? f : b
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o(Od, { children: [
          /* @__PURE__ */ e(
            ye,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: p,
              onClick: r,
              children: i
            }
          ),
          /* @__PURE__ */ e(
            ye,
            {
              type: "button",
              variant: m ? "danger" : "primary",
              size: "sm",
              disabled: !A,
              loading: p,
              onClick: E,
              children: p ? l : s
            }
          )
        ] })
      ]
    }
  );
}
function ga(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function Eb(t, r) {
  const a = t.filter((i) => !i.hideInTable && i.key !== "__abc_actions__"), n = a.map((i) => ga(i.title)).join(","), s = r.map(
    (i) => a.map((l) => {
      const c = i[l.dataIndex ?? l.key];
      if (l.options && l.options.length > 0) {
        const d = l.options.find((b) => String(b.value) === String(c));
        if (d) return ga(d.label);
      }
      return ga(c);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function _b(t, r, a) {
  const n = Eb(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), i = URL.createObjectURL(s), l = document.createElement("a");
    l.href = i, l.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(i);
  }
  return n;
}
const Ab = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  value: n,
  onApply: s
}) => {
  const [i, l] = $(!1), [c, d] = $(n ?? "");
  de(() => {
    i && d(n ?? "");
  }, [i, n]);
  const b = n != null && String(n).trim() !== "", f = (h) => {
    s(h), l(!1);
  };
  return /* @__PURE__ */ e(
    Ss,
    {
      open: i,
      onOpenChange: l,
      placement: "bottomRight",
      panelClassName: "w-60 p-3",
      content: /* @__PURE__ */ o(
        "div",
        {
          onClick: (h) => h.stopPropagation(),
          className: "space-y-2.5 text-xs font-normal text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ o("div", { className: "font-semibold text-[var(--abc-fg-secondary)]", children: [
              "筛选：",
              t
            ] }),
            r === "select" && a ? /* @__PURE__ */ e(
              jt,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `选择${t}`,
                options: a,
                value: c ?? "",
                onChange: (h) => d(h)
              }
            ) : /* @__PURE__ */ e(
              tt,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `输入${t}关键字`,
                value: c ?? "",
                onChange: (h) => d(h.target.value),
                onKeyDown: (h) => {
                  h.key === "Enter" && (h.preventDefault(), f(c));
                }
              }
            ),
            /* @__PURE__ */ o("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                ye,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    d(""), f("");
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(ye, { variant: "primary", size: "xs", onClick: () => f(c), children: "筛选" })
            ] })
          ]
        }
      ),
      children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": `筛选 ${t}`,
          title: `按${t}筛选`,
          className: u(
            "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
            b ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(gr, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function Db({
  columns: t,
  searchableFieldNames: r,
  settings: a,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: i,
  onToggleVisible: l,
  onSetAllVisible: c,
  onSetFixed: d,
  onSetWidth: b,
  onSetOrder: f,
  onSetSearchVisible: h,
  onReset: g
}) {
  const m = oe(i), [p, v] = $(!1), [y, S] = $(""), [x, k] = $("all"), [D, B] = $(null), T = ue(null), N = ue(!1);
  de(() => {
    if (!D) return;
    const R = (z) => {
      if (z.key === "Escape") {
        const W = T.current;
        B(null), T.current = null, N.current = !1, W && f(W);
      }
    };
    return document.addEventListener("keydown", R, !0), () => document.removeEventListener("keydown", R, !0);
  }, [D, f]);
  const w = ce(
    () => t.filter((R) => !R.hideInTable && R.key !== "__abc_actions__"),
    [t]
  ), C = ce(() => a.columnOrder.length === 0 ? w : [...w].sort((R, z) => {
    const W = a.columnOrder.indexOf(R.key), V = a.columnOrder.indexOf(z.key);
    return W === -1 && V === -1 ? 0 : W === -1 ? 1 : V === -1 ? -1 : W - V;
  }), [w, a.columnOrder]), I = (R) => R.key in a.columnFixed ? a.columnFixed[R.key] ?? void 0 : R.fixed, A = ce(() => {
    const R = y.trim().toLowerCase();
    return C.filter((z) => {
      if (R && !z.title.toLowerCase().includes(R) && !z.key.toLowerCase().includes(R))
        return !1;
      const W = a.hiddenKeys.includes(z.key), V = I(z);
      return x === "fixed" ? !!V : x === "hidden" ? W : !0;
    });
  }, [C, y, x, a.hiddenKeys, a.columnFixed]), E = ce(() => w.map((R) => R.key), [w]), O = ce(
    () => t.find((R) => R.key === "__abc_actions__"),
    [t]
  ), X = !!(n || O), Z = a.columnWidths.__abc_actions__ ?? (O == null ? void 0 : O.width) ?? s;
  return /* @__PURE__ */ e(
    Ss,
    {
      open: p,
      onOpenChange: v,
      placement: "bottomRight",
      motion: m,
      panelClassName: "w-[356px] overflow-hidden p-0",
      content: /* @__PURE__ */ o("div", { className: "text-xs select-none", children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3.5 py-2.5", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "列设置与偏好" }),
            /* @__PURE__ */ o("span", { className: "rounded bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: [
              w.length,
              " 列"
            ] })
          ] }),
          /* @__PURE__ */ e(
            ye,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(St, { className: "h-3 w-3" }),
              onClick: g,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ o("div", { className: "relative", children: [
            /* @__PURE__ */ e(ct, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: y,
                onChange: (R) => S(R.target.value),
                placeholder: "搜索列名称或字段标识...",
                className: "h-7 w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] pr-7 pl-8 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none"
              }
            ),
            y && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空列搜索",
                onClick: () => S(""),
                className: "absolute top-1/2 right-2 -translate-y-1/2 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              }
            )
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5", children: [
              { key: "all", label: "全部" },
              { key: "fixed", label: "已固定" },
              { key: "hidden", label: "已隐藏" }
            ].map((R) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => k(R.key),
                className: u(
                  "rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer",
                  x === R.key ? "bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: R.label
              },
              R.key
            )) }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(E, !0),
                  className: "text-[var(--abc-primary)] hover:underline cursor-pointer",
                  children: "全显"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(E, !1),
                  className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: "全隐"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: A.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : A.map((R) => {
          const z = !a.hiddenKeys.includes(R.key), W = I(R), V = String(R.dataIndex ?? R.key), K = r.has(V), Y = a.searchVisible[V] !== !1, se = a.columnWidths[R.key] ?? R.width ?? "";
          return /* @__PURE__ */ o(
            "div",
            {
              "data-dragging": D === R.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                T.current = C.map((P) => P.key), N.current = !1, B(R.key);
              },
              onDragOver: (P) => {
                if (!D || D === R.key) return;
                P.preventDefault();
                const q = C.map((le) => le.key), j = q.indexOf(D), G = q.indexOf(R.key);
                if (j < 0 || G < 0 || j === G) return;
                const ne = P.currentTarget.getBoundingClientRect();
                if (ne.height > 0 && (j < G && P.clientY < ne.top + ne.height * 0.35 || j > G && P.clientY > ne.top + ne.height * 0.65))
                  return;
                const te = [...q], [M] = te.splice(j, 1);
                te.splice(G, 0, M), N.current = !0, f(te);
              },
              onDrop: () => {
                if (D && D !== R.key && !N.current) {
                  const P = C.map((G) => G.key), q = P.indexOf(D), j = P.indexOf(R.key);
                  if (q >= 0 && j >= 0) {
                    const G = [...P], [ne] = G.splice(q, 1);
                    G.splice(j, 0, ne), f(G);
                  }
                }
                B(null), T.current = null, N.current = !1;
              },
              onDragEnd: () => {
                B(null), T.current = null, N.current = !1;
              },
              className: u(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                D === R.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(Fa, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(xr, { checked: z, onChange: () => l(R.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "truncate text-xs",
                        z ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: R.title
                    }
                  ),
                  W && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: W === "left" ? "左固" : "右固" })
                ] }),
                /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1", children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "number",
                      min: 64,
                      max: 800,
                      "aria-label": `${R.title} 列宽`,
                      placeholder: "宽px",
                      defaultValue: se,
                      onBlur: (P) => {
                        const q = parseInt(P.target.value, 10);
                        !Number.isNaN(q) && q >= 64 && b(R.key, q);
                      },
                      onKeyDown: (P) => {
                        if (P.key === "Enter") {
                          const q = parseInt(P.target.value, 10);
                          !Number.isNaN(q) && q >= 64 && b(R.key, q);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${R.key}_${se}`
                  ),
                  K && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: Y ? "在筛选栏显示（点击隐藏）" : "已在筛选栏隐藏（点击显示）",
                      "aria-label": `切换 ${R.title} 筛选项显示`,
                      onClick: () => h(V, !Y),
                      className: u(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        Y ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: /* @__PURE__ */ e(gr, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: W === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${R.title} 到左侧`,
                      onClick: () => d(R.key, W === "left" ? null : "left"),
                      className: u(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        W === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Jt, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: W === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${R.title} 到右侧`,
                      onClick: () => d(R.key, W === "right" ? null : "right"),
                      className: u(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        W === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Jt, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            R.key
          );
        }) }),
        X && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
          /* @__PURE__ */ o("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("div", { className: "text-[11px] font-medium text-[var(--abc-fg)]", children: "操作列固定宽度" }),
            /* @__PURE__ */ e("div", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: "可在表头左缘拖拽或直接设置" })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex shrink-0 items-center gap-1", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "number",
                min: 80,
                max: 600,
                "aria-label": "操作 列宽",
                placeholder: "宽px",
                defaultValue: Z,
                onBlur: (R) => {
                  const z = parseInt(R.target.value, 10);
                  !Number.isNaN(z) && z >= 80 && b("__abc_actions__", z);
                },
                onKeyDown: (R) => {
                  if (R.key === "Enter") {
                    const z = parseInt(R.target.value, 10);
                    !Number.isNaN(z) && z >= 80 && b("__abc_actions__", z);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${Z}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(Je, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: u(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            p ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(ic, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const Bb = ({ actions: t, maxInline: r = 3 }) => {
  if (t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  if (t.length <= r)
    return /* @__PURE__ */ e("div", { className: "inline-flex items-center justify-end gap-1", children: t.map((s) => /* @__PURE__ */ e(
      ye,
      {
        variant: "text",
        size: "xs",
        icon: s.icon,
        onClick: s.onClick,
        className: s.danger ? "text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]" : void 0,
        children: s.label
      },
      s.key
    )) });
  const a = t.slice(0, Math.max(1, r - 1)), n = t.slice(Math.max(1, r - 1));
  return /* @__PURE__ */ o("div", { className: "inline-flex items-center justify-end gap-1", children: [
    a.map((s) => /* @__PURE__ */ e(
      ye,
      {
        variant: "text",
        size: "xs",
        icon: s.icon,
        onClick: s.onClick,
        className: s.danger ? "text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]" : void 0,
        children: s.label
      },
      s.key
    )),
    /* @__PURE__ */ e(
      Qt,
      {
        placement: "bottomRight",
        items: n.map((s) => ({
          key: s.key,
          label: s.label,
          icon: s.icon,
          danger: s.danger,
          onClick: s.onClick
        })),
        children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "更多操作",
            className: "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Oa, { className: "h-3.5 w-3.5" })
          }
        )
      }
    )
  ] });
};
function Lb({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  onBatchDelete: n,
  onClear: s,
  motion: i
}) {
  const l = oe(i);
  return t.length === 0 ? null : /* @__PURE__ */ o(
    "div",
    {
      role: "region",
      "aria-label": "批量操作栏",
      "data-motion": l,
      className: u(
        "fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--abc-border-strong)] bg-[var(--abc-bg-elevated)]/95 px-4 py-2 shadow-[var(--abc-shadow-modal)] backdrop-blur-md",
        l !== "none" && "abc-floating-bar-in"
      ),
      children: [
        /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]", children: [
          "已选择 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-bold tabular-nums", children: t.length }),
          " 项"
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          a.map((c) => /* @__PURE__ */ e(
            ye,
            {
              variant: c.variant ?? "secondary",
              size: "xs",
              icon: c.icon,
              onClick: () => c.onClick(t, r),
              children: c.label
            },
            c.key
          )),
          n && /* @__PURE__ */ e(
            ye,
            {
              variant: "danger",
              size: "xs",
              icon: /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
              onClick: n,
              children: "批量删除"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              "aria-label": "取消多选",
              onClick: s,
              className: "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: [
                /* @__PURE__ */ e("span", { children: "取消选择" }),
                /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Kn = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
];
function qu({
  storageKey: t,
  title: r,
  columns: a,
  fields: n = [],
  dataSource: s,
  loading: i,
  request: l,
  rowKey: c = "id",
  defaultPageSize: d = 10,
  pagination: b,
  renderPagination: f,
  selectedRowKey: h,
  onRowClick: g,
  searchVariant: m = "card",
  onSearchChange: p,
  onSearchSubmit: v,
  onSearchReset: y,
  clientFilter: S,
  showClientFilterSwitch: x = !1,
  defaultSearchCollapsed: k = !0,
  autoRefresh: D,
  exportable: B = !0,
  onExport: T,
  syncToUrl: N = !1,
  viewable: w = !1,
  formContainer: C = "dialog",
  formColumns: I,
  rowActions: A = [],
  maxInlineActions: E = 3,
  rowSelection: O,
  batchActions: X = [],
  expandable: Z,
  maxHeight: R,
  permissions: z,
  toolbarExtra: W,
  motion: V,
  onSaveRecord: K,
  onDeleteRecords: Y
}) {
  var hn;
  const { toast: se } = Ge(), P = oe(V), { hasPermission: q } = Ks(), {
    settings: j,
    toggleColumnVisible: G,
    setAllColumnsVisible: ne,
    setColumnFixed: te,
    setColumnWidth: M,
    setColumnOrder: le,
    setSearchFieldVisible: Ee,
    setDensity: Be,
    resetSettings: me
  } = tl(t), ve = ce(() => !N || typeof window > "u" ? {} : gc(window.location.search), [N]), [ie, H] = $(
    () => S ?? !l
  ), [U, re] = $(!1), [F, J] = $(!0), [we, We] = $(k), [Ve, rt] = $(() => {
    const { page: _, pageSize: Q, ...ge } = ve;
    return ge;
  }), [De, ot] = $(() => {
    const { page: _, pageSize: Q, ...ge } = ve;
    return ge;
  }), [It, Sr] = $(""), [bt, ra] = $({
    key: "",
    direction: null
  }), [at, it] = $(() => Number(ve.page) || 1), [nt, Ir] = $(
    () => Number(ve.pageSize) || d
  ), [Mr, or] = $(!1), L = i !== void 0 ? i : Mr, [ee, ae] = $([]), [xe, Ne] = $(0), [Ce, Me] = $([]), [fe, _e] = $([]), [be, Le] = $(!1), Ae = D ?? !!l, [Pe, Oe] = $(!1), [Xe, Ht] = $(1e4), Tr = ue(0), [Mt, ir] = $(null), Lt = el(t ? `${t}_form` : void 0), [Er, Kt] = $(!1), [xt, rn] = $(null), [cr, lr] = $({}), [an, dr] = $({}), [Gs, nn] = $(!1), Vs = !(z != null && z.create) || q(z.create), _r = !(z != null && z.update) || q(z.update), br = !(z != null && z.delete) || q(z.delete);
  de(() => {
    if (!N || typeof window > "u") return;
    const _ = [
      ...n.filter((Se) => !Se.hideInSearch).map((Se) => Se.name),
      ...a.map((Se) => String(Se.dataIndex ?? Se.key)),
      "page",
      "pageSize"
    ], Q = xc(window.location.search, _, {
      ...De,
      page: at > 1 ? at : void 0,
      pageSize: nt !== d ? nt : void 0
    }), ge = `${window.location.pathname}${Q}${window.location.hash}`;
    window.history.replaceState(null, "", ge);
  }, [N, n, a, De, at, nt, d]), de(() => {
    if (!be) return;
    const _ = (Q) => {
      Q.key === "Escape" && !Er && !Mt && Le(!1);
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [be, Er, Mt]);
  const sn = he(
    (_, Q) => typeof c == "function" ? c(_) : (_ == null ? void 0 : _[c]) ?? Q,
    [c]
  ), Rt = he(async () => {
    if (!l) return;
    const _ = ++Tr.current;
    or(!0);
    try {
      const Q = await l({
        current: at,
        pageSize: nt,
        filters: ie ? {} : kn(De),
        sortField: bt.direction ? bt.key : void 0,
        sortOrder: bt.direction
      });
      if (_ !== Tr.current) return;
      ae(Q.data), Ne(Q.total);
    } catch (Q) {
      _ === Tr.current && se.error((Q == null ? void 0 : Q.message) || "加载表格数据失败");
    } finally {
      _ === Tr.current && or(!1);
    }
  }, [l, at, nt, ie, De, bt, se]);
  de(() => {
    l && Rt();
  }, [l, Rt]), de(() => {
    if (!Pe || !l || typeof window > "u") return;
    const _ = window.setInterval(() => {
      Rt();
    }, Xe);
    return () => window.clearInterval(_);
  }, [Pe, Xe, l, Rt]);
  const Ar = ce(() => {
    const _ = a.filter(
      (Q) => !Q.hideInTable && !j.hiddenKeys.includes(Q.key)
    );
    return j.columnOrder.length === 0 ? _ : [..._].sort((Q, ge) => {
      const Se = j.columnOrder.indexOf(Q.key), $e = j.columnOrder.indexOf(ge.key);
      return Se === -1 && $e === -1 ? 0 : Se === -1 ? 1 : $e === -1 ? -1 : Se - $e;
    });
  }, [a, j.hiddenKeys, j.columnOrder]), aa = s ?? ee, Ut = ce(() => {
    if (!ie && l) return aa;
    const _ = a.map((Q) => String(Q.dataIndex ?? Q.key));
    return vc({
      rows: aa,
      quickKeyword: It,
      searchableKeys: _,
      fieldFilters: De,
      sortField: bt.key,
      sortOrder: bt.direction
    });
  }, [ie, l, aa, It, De, a, bt]), Ys = ce(() => {
    if (!l) {
      const _ = (at - 1) * nt;
      return Ut.slice(_, _ + nt);
    }
    return ie ? Ut : ee;
  }, [l, ie, Ut, ee, at, nt]), na = l ? ie ? Ut.length : xe : Ut.length, Dr = ce(
    () => n.filter((_) => !_.hideInSearch),
    [n]
  ), Xs = ce(
    () => new Set(Dr.map((_) => _.name)),
    [Dr]
  ), Tt = ce(
    () => Dr.filter((_) => j.searchVisible[_.name] !== !1),
    [Dr, j.searchVisible]
  ), on = ce(() => !we || Tt.length <= 3 ? Tt : Tt.slice(0, 3), [Tt, we]), Gt = ce(
    () => n.filter((_) => !_.hideInForm),
    [n]
  ), ur = ce(() => Object.keys(kn(De)).length + (It.trim() ? 1 : 0), [De, It]), Br = he(() => {
    rt({}), ot({}), Sr(""), it(1), y == null || y(), p == null || p({});
  }, [y, p]), sa = he(() => {
    const _ = {};
    for (const Q of Gt)
      Q.defaultValue !== void 0 && (_[Q.name] = Q.defaultValue);
    return _;
  }, [Gt]), qs = () => {
    rn(null), dr({});
    const _ = Lt.readDraft();
    lr(_ ?? sa()), Kt(!0);
  }, cn = (_) => {
    rn(_), dr({}), lr({ ..._ }), Kt(!0);
  }, ln = async (_) => {
    if (_.preventDefault(), !K) return;
    const Q = {};
    for (const ge of Gt) {
      const Se = cr[ge.name], $e = Se == null || typeof Se == "string" && Se.trim() === "" || Array.isArray(Se) && Se.length === 0;
      if (ge.required && $e) {
        Q[ge.name] = `请填写${ge.label}`;
        continue;
      }
      if (ge.validator) {
        const ut = ge.validator(Se, cr);
        ut && (Q[ge.name] = ut);
      }
    }
    if (Object.keys(Q).length > 0) {
      dr(Q);
      const ge = Object.values(Q)[0];
      se.warning(ge);
      return;
    }
    dr({}), nn(!0);
    try {
      await K(cr, xt), xt || Lt.clearDraft(), Kt(!1), se.success(xt ? "更新成功" : "创建成功"), l && Rt();
    } catch (ge) {
      se.error((ge == null ? void 0 : ge.message) || "提交失败");
    } finally {
      nn(!1);
    }
  }, dn = async (_) => {
    !Y || _.length === 0 || !await Ya({
      title: "确认删除选中记录",
      message: `即将删除 ${_.length} 条数据，删除后不可恢复，是否继续？`,
      tone: "danger",
      confirmText: "确认删除"
    }) || (await Y(_), Me([]), _e([]), se.success(`已删除 ${_.length} 条记录`), l && Rt());
  }, bn = ce(
    () => X.filter((_) => !_.permission || q(_.permission)),
    [X, q]
  ), oa = O ?? !!(Y && br || bn.length > 0), ia = w || !!K && _r || !!Y && br || A.length > 0, Zs = ce(() => ia ? [
    ...Ar,
    {
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: w || A.length > 0 ? 184 : 136,
      align: "right",
      render: (_, Q, ge) => {
        var ut;
        const Se = sn(Q, ge), $e = [];
        w && $e.push({
          key: "__view__",
          label: "详情",
          icon: /* @__PURE__ */ e(rr, { className: "h-3 w-3" }),
          onClick: () => ir(Q)
        }), K && _r && $e.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(wa, { className: "h-3 w-3" }),
          onClick: () => cn(Q)
        });
        for (const qe of A)
          qe.permission && !q(qe.permission) || (ut = qe.hidden) != null && ut.call(qe, Q) || $e.push({
            key: qe.key,
            label: qe.label,
            icon: qe.icon,
            danger: qe.danger,
            onClick: () => qe.onClick(Q)
          });
        return Y && br && $e.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => dn([Se])
        }), /* @__PURE__ */ e(Bb, { actions: $e, maxInline: E });
      }
    }
  ] : Ar, [
    Ar,
    ia,
    w,
    K,
    _r,
    Y,
    br,
    A,
    E,
    q,
    sn
  ]), Js = () => {
    const _ = ie || !l ? Ut : ee;
    if (T) {
      T(_);
      return;
    }
    const Q = typeof r == "string" && r.trim() ? r.trim() : t || "table-export";
    _b(Q, Ar, _), se.success(`已导出 ${_.length} 条记录`);
  }, un = (_, Q) => {
    const ge = Ve[_.name], Se = ($e) => {
      rt((ut) => {
        const qe = { ...ut, [_.name]: $e };
        return p == null || p(qe), qe;
      });
    };
    return _.type === "select" ? /* @__PURE__ */ e(
      jt,
      {
        allowClear: !0,
        searchable: !0,
        multiple: _.multiple,
        options: _.options ?? [],
        placeholder: _.placeholder ?? `全部${_.label}`,
        value: ge ?? (_.multiple ? [] : ""),
        onChange: Se,
        className: Q == null ? void 0 : Q.select
      }
    ) : _.type === "date" ? /* @__PURE__ */ e(
      Aa,
      {
        value: ge ?? "",
        placeholder: _.placeholder ?? `选择${_.label}`,
        onChange: Se
      }
    ) : _.type === "dateRange" ? /* @__PURE__ */ e(
      Da,
      {
        value: ge ?? null,
        onChange: Se
      }
    ) : _.type === "number" ? /* @__PURE__ */ e(
      Ea,
      {
        value: ge ?? null,
        placeholder: _.placeholder ?? `输入${_.label}`,
        onChange: Se,
        className: Q == null ? void 0 : Q.input
      }
    ) : /* @__PURE__ */ e(
      tt,
      {
        allowClear: !0,
        placeholder: _.placeholder ?? `搜索${_.label}`,
        value: ge ?? "",
        onChange: ($e) => Se($e.target.value),
        wrapperClassName: Q == null ? void 0 : Q.input
      }
    );
  }, Qs = (_) => {
    const Q = cr[_.name], ge = typeof _.disabled == "function" ? _.disabled(xt) : !!_.disabled, Se = ($e) => {
      const ut = { ...cr, [_.name]: $e };
      lr(ut), an[_.name] && dr((qe) => {
        const vn = { ...qe };
        return delete vn[_.name], vn;
      }), xt || Lt.saveDraft(ut);
    };
    return _.type === "select" ? /* @__PURE__ */ e(
      jt,
      {
        searchable: !0,
        multiple: _.multiple,
        disabled: ge,
        options: _.options ?? [],
        value: Q ?? (_.multiple ? [] : ""),
        placeholder: _.placeholder,
        onChange: Se
      }
    ) : _.type === "number" ? /* @__PURE__ */ e(
      Ea,
      {
        disabled: ge,
        value: Q ?? null,
        placeholder: _.placeholder,
        onChange: Se
      }
    ) : _.type === "textarea" ? /* @__PURE__ */ e(
      Jr,
      {
        disabled: ge,
        value: Q ?? "",
        placeholder: _.placeholder,
        onChange: ($e) => Se($e.target.value)
      }
    ) : _.type === "switch" ? /* @__PURE__ */ e(ft, { disabled: ge, checked: !!Q, onChange: Se }) : _.type === "date" ? /* @__PURE__ */ e(
      Aa,
      {
        disabled: ge,
        value: Q ?? "",
        placeholder: _.placeholder,
        onChange: Se
      }
    ) : _.type === "dateRange" ? /* @__PURE__ */ e(
      Da,
      {
        disabled: ge,
        value: Q ?? null,
        onChange: Se
      }
    ) : _.type === "tags" ? /* @__PURE__ */ e(
      xd,
      {
        disabled: ge,
        value: Array.isArray(Q) ? Q : [],
        placeholder: _.placeholder,
        onChange: Se
      }
    ) : _.type === "icon" ? /* @__PURE__ */ e(wl, { value: Q ?? "", onChange: Se }) : /* @__PURE__ */ e(
      tt,
      {
        disabled: ge,
        value: Q ?? "",
        placeholder: _.placeholder,
        onChange: ($e) => Se($e.target.value)
      }
    );
  }, Lr = I ?? (Gt.length >= 6 ? 2 : 1), mn = /* @__PURE__ */ o(Re, { children: [
    !xt && Lt.hasDraft && /* @__PURE__ */ e(
      ye,
      {
        variant: "ghost",
        onClick: () => {
          Lt.clearDraft(), lr(sa());
        },
        children: "清空草稿"
      }
    ),
    /* @__PURE__ */ e(ye, { variant: "secondary", onClick: () => Kt(!1), children: "取消" }),
    /* @__PURE__ */ e(ye, { variant: "primary", loading: Gs, onClick: ln, children: "确认提交" })
  ] }), fn = /* @__PURE__ */ o("form", { onSubmit: ln, className: "space-y-3.5", children: [
    !xt && Lt.hasDraft && /* @__PURE__ */ o("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-primary)]/25 bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-fg-secondary)]", children: [
      /* @__PURE__ */ e("span", { children: "已自动为您恢复上次未提交的本地表单草稿" }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => {
            Lt.clearDraft(), lr(sa());
          },
          className: "shrink-0 font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
          children: "丢弃草稿"
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: u(
          "grid gap-3.5",
          Lr === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        ),
        children: Gt.map((_) => {
          const Q = Lr === 2 && (_.span === 2 || _.type === "textarea");
          return /* @__PURE__ */ e(
            _a,
            {
              label: _.label,
              required: _.required,
              helperText: _.helperText,
              error: an[_.name],
              className: Q ? "sm:col-span-2" : void 0,
              children: Qs(_)
            },
            _.name
          );
        })
      }
    )
  ] }), pn = ((hn = Kn.find((_) => _.key === Xe)) == null ? void 0 : hn.label) ?? "10秒";
  return /* @__PURE__ */ o(
    "div",
    {
      "data-motion": P,
      className: u(
        "relative space-y-3",
        be && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        m === "toolbar" && Tt.length > 0 && !U && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ o(
          "form",
          {
            onSubmit: (_) => {
              _.preventDefault(), it(1), ot({ ...Ve }), v == null || v(Ve);
            },
            className: "flex flex-wrap items-center gap-2.5",
            children: [
              on.map((_) => /* @__PURE__ */ e("div", { className: "flex items-center", children: un(_, {
                input: _.span === 2 ? "w-80 sm:w-96" : "w-72 sm:w-80",
                select: "w-40"
              }) }, _.name)),
              /* @__PURE__ */ e(ye, { size: "sm", type: "submit", variant: "primary", icon: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }), children: "搜索" }),
              /* @__PURE__ */ e(
                ye,
                {
                  size: "sm",
                  type: "button",
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
                  onClick: Br,
                  children: "重置"
                }
              ),
              ur > 0 && /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                ur,
                " 项"
              ] })
            ]
          }
        ) }),
        m === "card" && Tt.length > 0 && !U && /* @__PURE__ */ o(Hr, { padding: "none", children: [
          /* @__PURE__ */ o("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选检索" }),
              ur > 0 && /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                ur,
                " 项",
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": "一键清空已生效筛选",
                    onClick: Br,
                    className: "ml-0.5 hover:underline cursor-pointer",
                    children: "清空"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-expanded": F,
                onClick: () => J((_) => !_),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e("span", { children: F ? "收起面板" : "展开面板" }),
                  F ? /* @__PURE__ */ e(xn, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": F, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ o(
            "form",
            {
              onSubmit: (_) => {
                _.preventDefault(), it(1), ot({ ...Ve }), v == null || v(Ve);
              },
              className: "grid grid-cols-1 items-end gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                on.map((_) => /* @__PURE__ */ e(
                  _a,
                  {
                    label: _.label,
                    className: _.span === 2 || _.type === "dateRange" ? "sm:col-span-2" : void 0,
                    children: un(_)
                  },
                  _.name
                )),
                /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ e(ye, { type: "submit", variant: "primary", icon: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }), children: "搜索" }),
                  /* @__PURE__ */ e(
                    ye,
                    {
                      type: "button",
                      variant: "secondary",
                      icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
                      onClick: Br,
                      children: "重置"
                    }
                  ),
                  Tt.length > 3 && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      onClick: () => We((_) => !_),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                      children: [
                        /* @__PURE__ */ e("span", { children: we ? `展开 (${Tt.length - 3})` : "收起" }),
                        we ? /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(xn, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] }),
        /* @__PURE__ */ o(Hr, { padding: "none", children: [
          /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
            /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-2", children: [
              r && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: r }),
              K && Gt.length > 0 && Vs && /* @__PURE__ */ e(
                ye,
                {
                  variant: "primary",
                  icon: /* @__PURE__ */ e(ja, { className: "h-3.5 w-3.5" }),
                  onClick: qs,
                  children: "新建记录"
                }
              ),
              W
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              ie && /* @__PURE__ */ e(
                tt,
                {
                  size: "xs",
                  allowClear: !0,
                  prefix: /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
                  placeholder: "当前数据即时检索（支持拼音）...",
                  value: It,
                  onChange: (_) => {
                    Sr(_.target.value), it(1);
                  },
                  wrapperClassName: "w-52"
                }
              ),
              x && /* @__PURE__ */ e(
                Je,
                {
                  content: ie ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": ie,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const _ = !ie;
                        H(_), it(1), se.info(_ ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式");
                      },
                      className: u(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        ie ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: ie ? "前端筛选" : "接口筛选" })
                      ]
                    }
                  )
                }
              ),
              Ae && l && /* @__PURE__ */ o("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
                /* @__PURE__ */ e(
                  Je,
                  {
                    content: Pe ? `定时轮询运行中：每 ${pn} 自动刷新（点击暂停）` : "点击开启自动定时轮询刷新",
                    children: /* @__PURE__ */ o(
                      "button",
                      {
                        type: "button",
                        "aria-label": "切换定时自动刷新",
                        onClick: () => Oe((_) => !_),
                        className: u(
                          "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                          Pe ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                        ),
                        children: [
                          /* @__PURE__ */ e(
                            zr,
                            {
                              className: u("h-3.5 w-3.5", Pe && "animate-pulse")
                            }
                          ),
                          Pe && /* @__PURE__ */ e("span", { children: pn })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(
                  Qt,
                  {
                    placement: "bottomRight",
                    items: Kn.map((_) => ({
                      key: String(_.key),
                      label: /* @__PURE__ */ o("span", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ o("span", { children: [
                          "每 ",
                          _.label,
                          " 刷新"
                        ] }),
                        Xe === _.key && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => {
                        Ht(_.key), Oe(!0);
                      }
                    })),
                    children: /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "选择轮询频率",
                        className: "inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(pt, { className: "h-3 w-3" })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ e(Je, { content: U ? "关闭表头内联筛选行" : "开启表头内联筛选行", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => re((_) => !_),
                  className: u(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    U ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(cc, { className: "h-3.5 w-3.5" })
                }
              ) }),
              B && /* @__PURE__ */ e(Je, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "导出数据",
                  onClick: Js,
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(ts, { className: "h-3.5 w-3.5" })
                }
              ) }),
              l && /* @__PURE__ */ e(Je, { content: "刷新表格数据", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "刷新数据",
                  onClick: Rt,
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(tr, { className: u("h-3.5 w-3.5", L && "animate-spin") })
                }
              ) }),
              /* @__PURE__ */ e(
                Qt,
                {
                  placement: "bottomRight",
                  items: [
                    {
                      key: "comfortable",
                      label: /* @__PURE__ */ o("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "宽松密度" }),
                        j.density === "comfortable" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => Be("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ o("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "标准密度" }),
                        j.density === "default" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => Be("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ o("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑密度" }),
                        j.density === "compact" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => Be("compact")
                    }
                  ],
                  children: /* @__PURE__ */ e(Je, { content: "表格行密度", children: /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "表格行密度",
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(lc, { className: "h-3.5 w-3.5" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ e(Je, { content: be ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": be ? "退出全屏" : "全屏展示",
                  onClick: () => Le((_) => !_),
                  className: u(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    be ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: be ? /* @__PURE__ */ e(Ra, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" })
                }
              ) }),
              /* @__PURE__ */ e(
                Db,
                {
                  columns: a,
                  searchableFieldNames: Xs,
                  settings: j,
                  hasActionColumn: ia,
                  defaultActionWidth: w || A.length > 0 ? 184 : 136,
                  motion: P,
                  onToggleVisible: G,
                  onSetAllVisible: ne,
                  onSetFixed: te,
                  onSetWidth: M,
                  onSetOrder: le,
                  onSetSearchVisible: Ee,
                  onReset: me
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            tb,
            {
              columns: Zs,
              data: Ys,
              rowKey: c,
              loading: L,
              density: j.density,
              motion: P,
              selectedKeys: oa ? Ce : void 0,
              onSelectionChange: oa ? (_, Q) => {
                Me(_), _e(Q);
              } : void 0,
              sortState: bt,
              onSortChange: (_, Q) => ra({ key: _, direction: Q }),
              headerFilterMode: U,
              headerFilters: De,
              onHeaderFilterChange: (_, Q) => {
                it(1), rt((ge) => ({ ...ge, [_]: Q })), ot((ge) => ({ ...ge, [_]: Q }));
              },
              headerFilterRender: U ? void 0 : (_) => {
                const Q = String(_.dataIndex ?? _.key);
                return /* @__PURE__ */ e(
                  Ab,
                  {
                    title: _.title,
                    filterType: _.filterType,
                    filterOptions: _.filterOptions,
                    value: De[Q],
                    onApply: (ge) => {
                      it(1), rt((Se) => ({ ...Se, [Q]: ge })), ot((Se) => ({ ...Se, [Q]: ge }));
                    }
                  }
                );
              },
              columnWidths: j.columnWidths,
              onColumnResize: M,
              columnFixed: j.columnFixed,
              onColumnPin: te,
              onColumnHide: G,
              onResetColumns: me,
              onColumnReorder: le,
              expandable: Z,
              activeRowKey: h,
              onRowClick: g,
              onRowView: w ? (_) => ir(_) : void 0,
              onEmptyReset: ur > 0 ? Br : void 0,
              maxHeight: R,
              className: "rounded-none border-0"
            }
          ),
          b !== !1 && /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] px-4 py-3", children: f ? f({
            current: at,
            pageSize: nt,
            total: na,
            mode: typeof b == "object" && b.mode ? b.mode : "offset"
          }) : typeof b == "object" ? /* @__PURE__ */ e(
            Wr,
            {
              current: at,
              pageSize: nt,
              motion: P,
              total: na,
              onChange: (_, Q) => {
                it(_), Ir(Q);
              },
              ...b
            }
          ) : /* @__PURE__ */ e(
            Wr,
            {
              current: at,
              pageSize: nt,
              motion: P,
              total: na,
              onChange: (_, Q) => {
                it(_), Ir(Q);
              }
            }
          ) })
        ] }),
        oa && Ce.length > 0 && /* @__PURE__ */ e(
          Lb,
          {
            selectedKeys: Ce,
            selectedRows: fe,
            batchActions: bn,
            motion: P,
            onBatchDelete: Y && br ? () => dn(Ce) : void 0,
            onClear: () => {
              Me([]), _e([]);
            }
          }
        ),
        /* @__PURE__ */ e(
          lt,
          {
            open: !!Mt,
            onClose: () => ir(null),
            title: "记录详情",
            size: "lg",
            footer: /* @__PURE__ */ o(Re, { children: [
              Mt && K && _r && /* @__PURE__ */ e(
                ye,
                {
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(wa, { className: "h-3.5 w-3.5" }),
                  onClick: () => {
                    const _ = Mt;
                    ir(null), cn(_);
                  },
                  children: "编辑此记录"
                }
              ),
              /* @__PURE__ */ e(ye, { variant: "primary", onClick: () => ir(null), children: "关闭" })
            ] }),
            children: Mt && /* @__PURE__ */ e(
              Cd,
              {
                bordered: !0,
                column: 2,
                items: a.filter((_) => !_.hideInTable).map((_) => {
                  const Q = Mt[_.dataIndex ?? _.key];
                  return {
                    key: _.key,
                    label: _.title,
                    children: _.render ? _.render(Q, Mt, 0) : String(Q ?? "-")
                  };
                })
              }
            )
          }
        ),
        C === "drawer" ? /* @__PURE__ */ e(
          ta,
          {
            open: Er,
            onClose: () => Kt(!1),
            title: xt ? "编辑记录" : "新建记录",
            size: Lr === 2 ? "lg" : "md",
            footer: mn,
            children: fn
          }
        ) : /* @__PURE__ */ e(
          lt,
          {
            open: Er,
            onClose: () => Kt(!1),
            title: xt ? "编辑记录" : "新建记录",
            size: Lr === 2 ? "lg" : "md",
            footer: mn,
            children: fn
          }
        )
      ]
    }
  );
}
export {
  la as ABC_BRAND_PRESETS,
  yn as ABC_DENSITY_PRESETS,
  bb as ABC_HEADER_HEIGHT_BY_SIZE,
  mr as ABC_MOTION_PRESETS,
  wn as ABC_RADIUS_PRESETS,
  db as ABC_SIDEBAR_WIDTH_BY_SIZE,
  Fb as ABC_SIZE_PRESETS,
  gs as AbcConfirmHost,
  Yb as AbcProvider,
  fl as AbcToastViewport,
  du as ActionCard,
  zu as Alert,
  _u as AsyncInlineError,
  Bu as AttentionList,
  Dn as AuroraBackground,
  yb as AuthLayout,
  El as Avatar,
  Kr as BYTE_UNITS,
  Es as BYTE_UNIT_FACTORS,
  ru as Badge,
  fu as BentoCard,
  mu as BentoGrid,
  An as BorderBeam,
  Zt as BrandLogoBlock,
  pu as Breadcrumb,
  ye as Button,
  Nu as ByteQuotaInput,
  Hr as Card,
  jl as CardContent,
  Pl as CardDescription,
  Ol as CardFooter,
  Rl as CardHeader,
  zl as CardTitle,
  lu as CheckCard,
  cu as CheckCardGroup,
  xr as Checkbox,
  Su as Collapse,
  bu as CollapsibleCard,
  xb as CommandPalette,
  Lu as ConfirmDialog,
  Gb as ConfirmProvider,
  qb as CopyButton,
  js as CopyableCode,
  Cl as CopyableText,
  Zb as CursorPagination,
  ub as DEFAULT_ABC_LAYOUT_SETTINGS,
  Ye as DEFAULT_ABC_THEME,
  Ur as DURATION_UNITS,
  _s as DURATION_UNIT_FACTORS,
  Aa as DatePicker,
  Da as DateRangePicker,
  Os as DescriptionList,
  Mu as DescriptionListItem,
  Cd as Descriptions,
  lt as Dialog,
  Ha as DialogContent,
  Va as DialogDescription,
  Ua as DialogFooter,
  Ka as DialogHeader,
  Ga as DialogTitle,
  Hu as DictSelect,
  Ku as DictTag,
  nu as Divider,
  ta as Drawer,
  jd as DrawerBody,
  Pd as DrawerDescription,
  Od as DrawerFooter,
  Rd as DrawerHeader,
  zd as DrawerTitle,
  Qt as Dropdown,
  pb as DualColumnNav,
  ku as DurationQuotaInput,
  Sl as EmptyState,
  Zd as ErrorBoundary,
  Gu as FilterPillGroup,
  Tb as FilterToolbar,
  _a as FormField,
  Ab as HeaderColumnFilterPopover,
  _n as ICON_CATALOG,
  zt as Icon,
  Tu as IconBadge,
  wl as IconPicker,
  Ps as ImagePreview,
  pd as ImageUpload,
  tt as Input,
  Ea as InputNumber,
  Qd as InspectorPanel,
  Yt as Kbd,
  gb as KeepAliveContainer,
  Jl as Label,
  Ru as Loading,
  Du as LoadingStateCard,
  iu as MetricCard,
  Hb as Modal,
  vb as MultiTabBar,
  Ft as NotificationBanner,
  ju as OneTimeSecretDialog,
  $u as PageContainer,
  Wr as Pagination,
  Wu as Permission,
  Ib as PermissionGuard,
  Ss as Popover,
  uu as PricingCard,
  Db as ProColumnSettingsPopover,
  Uu as ProConfigForm,
  Lb as ProFloatingBatchBar,
  Mb as ProFormLayout,
  Fu as ProLayout,
  Bb as ProRowActionsOverflow,
  qu as ProTable,
  Yd as Progress,
  Vu as QuickSelectBar,
  mt as RadioGroup,
  Au as ReadErrorBanner,
  Yu as ReasonedActionDialog,
  Xu as ReasonedActionDrawer,
  qd as Result,
  Eu as RichIconText,
  Ql as SearchInput,
  vu as SegmentedControl,
  jt as Select,
  va as SidebarNav,
  Ke as Skeleton,
  Qb as SkeletonCard,
  tu as SkeletonChart,
  eu as SkeletonTable,
  xu as SliderVerify,
  Jb as SmartPagination,
  su as Space,
  Ou as SplitInspectorLayout,
  ou as SpotlightCard,
  Pt as StatusTag,
  hu as Steps,
  ft as Switch,
  Mn as TONE_ICONS,
  Pu as TabErrorBoundary,
  rb as Table,
  nb as TableBody,
  lb as TableCaption,
  cb as TableCell,
  tb as TableCore,
  sb as TableFooter,
  ib as TableHead,
  ab as TableHeader,
  ob as TableRow,
  Cu as Tabs,
  _l as Tag,
  xd as TagInput,
  Jr as Textarea,
  Wn as ThemeCustomizer,
  Iu as Timeline,
  ml as ToastContainer,
  ul as ToastItemView,
  Je as Tooltip,
  jn as TopHorizontalNav,
  gu as Tree,
  Wd as Watermark,
  Ya as abcConfirm,
  Za as abcToast,
  Ze as applyAbcThemeToDocument,
  Bt as baseFieldControlClass,
  Ia as buildCalendarMonthGrid,
  Eb as buildCsvContent,
  Wb as buttonVariants,
  kn as cleanQueryObject,
  ll as clearToasts,
  u as cn,
  ba as collectAllExpandableKeys,
  cs as computeTreeCheckState,
  Kb as confirm,
  Qr as copyToClipboard,
  qa as dismissToast,
  _b as downloadTableCsv,
  vc as filterAndSortClientRows,
  hc as filterTreeNodes,
  $s as findBreadcrumbChain,
  Rr as formatIsoDate,
  yu as formatQuotaBytes,
  wu as formatQuotaDuration,
  mc as getCharInitial,
  Zr as getOverlayPortalContainer,
  fc as getPinyinInitials,
  zs as isSvgSource,
  ht as matchKeywordWithPinyin,
  kt as menuContainsPath,
  il as pauseToast,
  Bs as pickBestByteUnit,
  Ls as pickBestDurationUnit,
  Vt as pushToast,
  gc as readQueryFromUrlSearch,
  Xb as registerAbcIcons,
  Xt as resolveAbcThemeMode,
  cl as resumeToast,
  au as tagVariants,
  Vb as toast,
  pc as toggleTreeNodeChecked,
  uc as transitionAbcTheme,
  Ge as useAbcConfig,
  Us as useAbcDict,
  hl as useAbcDrawerCascadeMode,
  oe as useAbcMotion,
  Ks as useAbcPermission,
  pe as useAbcSize,
  Ub as useConfirm,
  st as useControllableState,
  el as useDraftStorage,
  kr as useFloatingPosition,
  $t as usePresence,
  tl as useTableSettings,
  xc as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
