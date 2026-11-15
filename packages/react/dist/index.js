var to = Object.defineProperty;
var ro = (t, r, a) => r in t ? to(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var la = (t, r, a) => ro(t, typeof r != "symbol" ? r + "" : r, a);
import * as Ae from "react";
import We, { useState as O, useEffect as be, useRef as de, useCallback as ve, useLayoutEffect as ya, createContext as Pa, useId as Ke, useContext as Gr, useMemo as ce, useImperativeHandle as Yr } from "react";
import { jsxs as i, jsx as e, Fragment as je } from "react/jsx-runtime";
import { Loader2 as Bt, Minimize2 as za, Maximize2 as ja, X as Ve, Trash2 as er, AlertTriangle as Ot, CheckCircle2 as Ct, HelpCircle as yr, Info as wr, AlertCircle as Dt, Zap as ao, XCircle as no, Wrench as so, Wallet as oo, Video as io, Users as co, UserCog as lo, UserCheck as bo, User as uo, Upload as Yn, Unlock as mo, TrendingUp as fo, Trash as po, Timer as ho, Ticket as vo, Terminal as go, Tags as xo, Tag as yo, Store as wo, StarOff as No, Star as ko, Sparkles as Nr, Smartphone as Co, SlidersHorizontal as wa, Sliders as So, ShoppingCart as Io, ShoppingBag as Mo, ShieldCheck as Oa, ShieldAlert as Xr, Shield as To, Share2 as Eo, Share as _o, Settings as Ao, Server as Do, Send as Bo, Search as ct, ScrollText as Lo, RotateCw as qr, RotateCcw as St, RefreshCw as tr, Receipt as Ro, Radio as Po, PlusCircle as zo, Plus as $a, Play as Xn, PieChart as jo, PhoneCall as Oo, Phone as $o, Pause as Wo, PanelTop as Fo, PanelLeft as Ho, Palette as qn, Package as Ko, Network as Uo, MoreHorizontal as Wa, Monitor as Zn, Minus as Zr, MessagesSquare as Vo, MessageSquareText as Go, MessageSquareQuote as Yo, MessageSquare as Xo, MessageCircle as qo, Menu as Jn, Megaphone as Zo, MapPin as Jo, Lock as Qo, ListOrdered as ei, ListChecks as ti, Link2 as ri, LineChart as ai, LayoutGrid as ni, LayoutDashboard as si, Layers as Qn, KeyRound as es, Key as oi, Image as ts, Home as ii, History as ci, Headphones as li, HardDrive as di, Handshake as bi, Globe2 as ui, Globe as mi, FolderTree as fi, FolderPlus as pi, FolderOpen as hi, FolderGit2 as vi, Folder as gi, Flame as xi, FileText as yi, FileSpreadsheet as wi, FileClock as Ni, FileCheck as ki, Eye as rr, Edit3 as Na, Edit as Ci, Download as rs, Database as Si, CreditCard as Ii, Cpu as Mi, Copy as ar, Compass as as, Coins as Ti, Clock as Pr, CircleDollarSign as Ei, CheckSquare as _i, CheckCircle as Ai, Check as Ue, Camera as Di, CalendarCheck as Bi, Calendar as Fa, Building2 as Li, Boxes as Ri, BookMarked as Pi, BellRing as zi, Bell as ji, BarChart3 as Oi, BarChart2 as $i, AlertOctagon as Wi, Activity as Fi, EyeOff as ns, ChevronDown as pt, FolderSearch as Hi, ChevronLeft as zr, ChevronRight as gt, ArrowUpRight as ss, ArrowDownRight as Ki, ChevronsLeft as os, ChevronsRight as is, UploadCloud as Ui, ArrowRight as Vi, ChevronsUpDown as Gi, ChevronsDownUp as Yi, ZoomOut as Xi, ZoomIn as qi, WifiOff as Zi, CircleAlert as Ji, GripVertical as Ha, ServerCrash as Qi, FileSearch as ec, ArrowUp as ka, ArrowDown as Ca, ArrowUpDown as wn, Pin as Jt, PinOff as tc, Pencil as rc, CornerDownLeft as ac, Sun as Sa, Moon as Ia, Code2 as nc, PanelLeftOpen as sc, PanelLeftClose as oc, Save as ic, Filter as gr, Settings2 as cc, ChevronUp as Nn, ListFilter as lc, AlignJustify as dc } from "lucide-react";
import { createPortal as dt } from "react-dom";
import Ee from "dayjs";
const da = {
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
}, kn = {
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
}, Cn = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, Hb = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, mr = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Xe = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, Sn = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function bc(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of Sn)
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
  for (const s of Sn)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function Xt(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function uc(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Je(t) {
  const r = Xt(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return uc(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), bc(a, t.customBrandColor), r;
}
function mc(t, r) {
  if (typeof document > "u" || typeof window > "u") {
    t();
    return;
  }
  const a = document, n = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!r || typeof a.startViewTransition != "function" || n) {
    t();
    return;
  }
  const s = r.clientX, o = r.clientY, l = Math.hypot(Math.max(s, window.innerWidth - s), Math.max(o, window.innerHeight - o));
  a.startViewTransition(() => {
    t();
  }).ready.then(() => {
    document.documentElement.animate({
      clipPath: [`circle(0px at ${s}px ${o}px)`, `circle(${l}px at ${s}px ${o}px)`]
    }, {
      duration: 380,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      pseudoElement: "::view-transition-new(root)"
    });
  }).catch(() => {
  });
}
const ba = [
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
function fc(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = ba.length - 1; r >= 0; r--)
    if (t.localeCompare(ba[r].start, "zh-CN") >= 0)
      return ba[r].letter;
  return t.toLowerCase();
}
function pc(t) {
  return Array.from(t).map(fc).join("");
}
function ht(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : pc(t).includes(a);
}
function cs(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      cs(a, r);
  return r;
}
function ls(t, r, a = !1) {
  const n = new Set(r), s = /* @__PURE__ */ new Set();
  if (a)
    return {
      checkedKeys: Array.from(n),
      halfCheckedKeys: []
    };
  function o(l) {
    if (!l.children || l.children.length === 0) {
      const f = n.has(l.key);
      return { allChecked: f, someChecked: f };
    }
    const c = l.children.filter((f) => !f.disabled);
    if (c.length === 0) {
      const f = n.has(l.key);
      return { allChecked: f, someChecked: f };
    }
    let b = !0, d = !1;
    for (const f of c) {
      const h = o(f);
      h.allChecked || (b = !1), h.someChecked && (d = !0);
    }
    return b ? (n.add(l.key), s.delete(l.key)) : d ? (n.delete(l.key), s.add(l.key)) : (n.delete(l.key), s.delete(l.key)), { allChecked: b, someChecked: d };
  }
  for (const l of t)
    o(l);
  return {
    checkedKeys: Array.from(n),
    halfCheckedKeys: Array.from(s)
  };
}
function hc(t, r, a, n, s = !1) {
  const o = new Set(r);
  if (s)
    return n ? o.add(a.key) : o.delete(a.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const l = cs(a);
  for (const c of l)
    n ? o.add(c) : o.delete(c);
  return ls(t, Array.from(o), !1);
}
function vc(t, r) {
  const a = r.trim();
  if (!a)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(o) {
    const l = [];
    for (const c of o) {
      const b = c.children ? s(c.children) : [], d = ht(c.title, a);
      (d || b.length > 0) && (b.length > 0 && n.push(c.key), l.push({
        ...c,
        children: b.length > 0 ? b : c.children && d ? c.children : void 0
      }));
    }
    return l;
  }
  return {
    filteredNodes: s(t),
    autoExpandedKeys: n
  };
}
function ua(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function ds(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function gc({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let l = [...t];
  const c = a.trim();
  c && (l = l.filter((b) => (r && r.length > 0 ? r : Object.keys(b)).some((f) => {
    const h = b[f];
    return h != null && ht(String(h), c);
  })));
  for (const [b, d] of Object.entries(n))
    if (d != null) {
      if (Array.isArray(d)) {
        if (d.length === 0)
          continue;
        l = l.filter((f) => {
          const h = f[b];
          return h == null ? !1 : d.some((g) => String(h) === String(g) || ht(String(h), String(g)));
        });
        continue;
      }
      if (ds(d)) {
        const f = (d.start ?? "").trim(), h = (d.end ?? "").trim();
        if (!f && !h)
          continue;
        l = l.filter((g) => {
          const m = g[b];
          if (m == null)
            return !1;
          const p = String(m).slice(0, 10);
          return !(f && p < f || h && p > h);
        });
        continue;
      }
      String(d).trim() !== "" && (l = l.filter((f) => {
        const h = f[b];
        return h == null ? !1 : ht(String(h), String(d));
      }));
    }
  if (s && o) {
    const b = o === "asc" ? 1 : -1;
    l.sort((d, f) => {
      const h = d[s], g = f[s];
      return typeof h == "number" && typeof g == "number" ? (h - g) * b : String(h ?? "").localeCompare(String(g ?? ""), "zh-CN") * b;
    });
  }
  return l;
}
function In(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || ds(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function xc(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((o, l) => {
    o && (s && !s.has(l) || (n[l] = o));
  }), n;
}
function yc(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of r)
    n.delete(o);
  for (const [o, l] of Object.entries(a))
    l == null || Array.isArray(l) || typeof l == "object" || String(l).trim() !== "" && n.set(o, String(l));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function Rr(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), l = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${l}`;
}
function Ma(t, r, a = /* @__PURE__ */ new Date()) {
  const n = Rr(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), o = new Date(t, r + 1, 0).getDate(), l = new Date(t, r, 0).getDate(), c = [];
  for (let d = s - 1; d >= 0; d--) {
    const f = l - d, h = Rr(t, r - 1, f);
    c.push({ iso: h, day: f, inCurrentMonth: !1, isToday: h === n });
  }
  for (let d = 1; d <= o; d++) {
    const f = Rr(t, r, d);
    c.push({ iso: f, day: d, inCurrentMonth: !0, isToday: f === n });
  }
  let b = 1;
  for (; c.length < 42; ) {
    const d = Rr(t, r + 1, b);
    c.push({ iso: d, day: b, inCurrentMonth: !1, isToday: d === n }), b += 1;
  }
  return c;
}
function bs(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = bs(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function wc() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = bs(t)) && (n && (n += " "), n += r);
  return n;
}
const Ka = "-", Nc = (t) => {
  const r = Cc(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const c = l.split(Ka);
      return c[0] === "" && c.length !== 1 && c.shift(), us(c, r) || kc(l);
    },
    getConflictingClassGroupIds: (l, c) => {
      const b = a[l] || [];
      return c && n[l] ? [...b, ...n[l]] : b;
    }
  };
}, us = (t, r) => {
  var l;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? us(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = t.join(Ka);
  return (l = r.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : l.classGroupId;
}, Mn = /^\[(.+)\]$/, kc = (t) => {
  if (Mn.test(t)) {
    const r = Mn.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Cc = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ic(Object.entries(t.classGroups), a).forEach(([o, l]) => {
    Ta(l, n, o, r);
  }), n;
}, Ta = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : Tn(r, s);
      o.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (Sc(s)) {
        Ta(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([o, l]) => {
      Ta(l, Tn(r, o), a, n);
    });
  });
}, Tn = (t, r) => {
  let a = t;
  return r.split(Ka).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Sc = (t) => t.isThemeGetter, Ic = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, c]) => [r + l, c])) : o);
  return [a, s];
}) : t, Mc = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (o, l) => {
    a.set(o, l), r++, r > t && (r = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let l = a.get(o);
      if (l !== void 0)
        return l;
      if ((l = n.get(o)) !== void 0)
        return s(o, l), l;
    },
    set(o, l) {
      a.has(o) ? a.set(o, l) : s(o, l);
    }
  };
}, ms = "!", Tc = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], o = r.length, l = (c) => {
    const b = [];
    let d = 0, f = 0, h;
    for (let y = 0; y < c.length; y++) {
      let C = c[y];
      if (d === 0) {
        if (C === s && (n || c.slice(y, y + o) === r)) {
          b.push(c.slice(f, y)), f = y + o;
          continue;
        }
        if (C === "/") {
          h = y;
          continue;
        }
      }
      C === "[" ? d++ : C === "]" && d--;
    }
    const g = b.length === 0 ? c : c.substring(f), m = g.startsWith(ms), p = m ? g.substring(1) : g, v = h && h > f ? h - f : void 0;
    return {
      modifiers: b,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  return a ? (c) => a({
    className: c,
    parseClassName: l
  }) : l;
}, Ec = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, _c = (t) => ({
  cache: Mc(t.cacheSize),
  parseClassName: Tc(t),
  ...Nc(t)
}), Ac = /\s+/, Dc = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], l = t.trim().split(Ac);
  let c = "";
  for (let b = l.length - 1; b >= 0; b -= 1) {
    const d = l[b], {
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = a(d);
    let p = !!m, v = n(p ? g.substring(0, m) : g);
    if (!v) {
      if (!p) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = n(g), !v) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      p = !1;
    }
    const y = Ec(f).join(":"), C = h ? y + ms : y, x = C + v;
    if (o.includes(x))
      continue;
    o.push(x);
    const k = s(v, p);
    for (let E = 0; E < k.length; ++E) {
      const B = k[E];
      o.push(C + B);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Bc() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = fs(r)) && (n && (n += " "), n += a);
  return n;
}
const fs = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = fs(t[n])) && (a && (a += " "), a += r);
  return a;
};
function Lc(t, ...r) {
  let a, n, s, o = l;
  function l(b) {
    const d = r.reduce((f, h) => h(f), t());
    return a = _c(d), n = a.cache.get, s = a.cache.set, o = c, c(b);
  }
  function c(b) {
    const d = n(b);
    if (d)
      return d;
    const f = Dc(b, a);
    return s(b, f), f;
  }
  return function() {
    return o(Bc.apply(null, arguments));
  };
}
const Oe = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, ps = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rc = /^\d+\/\d+$/, Pc = /* @__PURE__ */ new Set(["px", "full", "screen"]), zc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Oc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, $c = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yt = (t) => qt(t) || Pc.has(t) || Rc.test(t), _t = (t) => nr(t, "length", Xc), qt = (t) => !!t && !Number.isNaN(Number(t)), ma = (t) => nr(t, "number", qt), fr = (t) => !!t && Number.isInteger(Number(t)), Fc = (t) => t.endsWith("%") && qt(t.slice(0, -1)), Ie = (t) => ps.test(t), At = (t) => zc.test(t), Hc = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Kc = (t) => nr(t, Hc, hs), Uc = (t) => nr(t, "position", hs), Vc = /* @__PURE__ */ new Set(["image", "url"]), Gc = (t) => nr(t, Vc, Zc), Yc = (t) => nr(t, "", qc), pr = () => !0, nr = (t, r, a) => {
  const n = ps.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, Xc = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jc.test(t) && !Oc.test(t)
), hs = () => !1, qc = (t) => $c.test(t), Zc = (t) => Wc.test(t), Jc = () => {
  const t = Oe("colors"), r = Oe("spacing"), a = Oe("blur"), n = Oe("brightness"), s = Oe("borderColor"), o = Oe("borderRadius"), l = Oe("borderSpacing"), c = Oe("borderWidth"), b = Oe("contrast"), d = Oe("grayscale"), f = Oe("hueRotate"), h = Oe("invert"), g = Oe("gap"), m = Oe("gradientColorStops"), p = Oe("gradientColorStopPositions"), v = Oe("inset"), y = Oe("margin"), C = Oe("opacity"), x = Oe("padding"), k = Oe("saturate"), E = Oe("scale"), B = Oe("sepia"), M = Oe("skew"), N = Oe("space"), w = Oe("translate"), I = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", Ie, r], T = () => [Ie, r], R = () => ["", yt, _t], G = () => ["auto", qt, Ie], X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], P = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", Ie], F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], K = () => [qt, Ie];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [pr],
      spacing: [yt, _t],
      blur: ["none", "", At, Ie],
      brightness: K(),
      borderColor: [t],
      borderRadius: ["none", "", "full", At, Ie],
      borderSpacing: T(),
      borderWidth: R(),
      contrast: K(),
      grayscale: Y(),
      hueRotate: K(),
      invert: Y(),
      gap: T(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Fc, _t],
      inset: D(),
      margin: D(),
      opacity: K(),
      padding: T(),
      saturate: K(),
      scale: K(),
      sepia: Y(),
      skew: K(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ie]
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
        columns: [At]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
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
        object: [...X(), Ie]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        z: ["auto", fr, Ie]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: D()
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
        flex: ["1", "auto", "initial", "none", Ie]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", fr, Ie]
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
          span: ["full", fr, Ie]
        }, Ie]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
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
          span: [fr, Ie]
        }, Ie]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": ["auto", "min", "max", "fr", Ie]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ie]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ie, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ie, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ie, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [At]
        }, At]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ie, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ie, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ie, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ie, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", At, _t]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ma]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qt, ma]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", yt, Ie]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ie]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ie]
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
        "placeholder-opacity": [C]
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
        "text-opacity": [C]
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
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", yt, _t]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", yt, Ie]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ie]
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
        content: ["none", Ie]
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
        "bg-opacity": [C]
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
        bg: [...X(), Uc]
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
        bg: ["auto", "cover", "contain", Kc]
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
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
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
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
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
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [yt, Ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [yt, _t]
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
        ring: R()
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [yt, _t]
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
        shadow: ["", "inner", "none", At, Yc]
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
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...P(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": P()
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
        contrast: [b]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", At, Ie]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
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
        "backdrop-contrast": [b]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
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
        "backdrop-opacity": [C]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ie]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: K()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: K()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ie]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [fr, Ie]
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
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ie]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ie]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ie]
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
        stroke: [yt, _t, ma]
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
}, Qc = /* @__PURE__ */ Lc(Jc);
function u(...t) {
  return Qc(wc(t));
}
function el() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function $t(t, r = 200) {
  const [a, n] = O(t), s = el();
  return t && !a && n(!0), be(() => {
    if (t) {
      n(!0);
      return;
    }
    if (typeof process < "u" && process.env.NODE_ENV === "test" || s || r <= 0) {
      n(!1);
      return;
    }
    const c = window.setTimeout(() => {
      n(!1);
    }, r);
    return () => window.clearTimeout(c);
  }, [t, r, s]), { isMounted: t ? !0 : s || r <= 0 ? !1 : a, isVisible: t };
}
function st({
  value: t,
  defaultValue: r,
  onChange: a
}) {
  const [n, s] = O(r), o = t !== void 0, l = o ? t : n, c = de(l);
  c.current = l;
  const b = de(a);
  b.current = a;
  const d = ve(
    (f) => {
      var g;
      const h = typeof f == "function" ? f(c.current) : f;
      o || s(h), (g = b.current) == null || g.call(b, h);
    },
    [o]
  );
  return [l, d];
}
function tl(t) {
  const r = t ? `abc_draft_${t}` : "", a = ve(() => {
    if (!r || typeof window > "u") return null;
    try {
      const c = window.localStorage.getItem(r);
      return c ? JSON.parse(c) : null;
    } catch {
      return null;
    }
  }, [r]), [n, s] = O(() => !!a()), o = ve(
    (c) => {
      if (!(!r || typeof window > "u"))
        try {
          window.localStorage.setItem(r, JSON.stringify(c)), s(!0);
        } catch {
        }
    },
    [r]
  ), l = ve(() => {
    if (!(!r || typeof window > "u"))
      try {
        window.localStorage.removeItem(r), s(!1);
      } catch {
      }
  }, [r]);
  return {
    hasDraft: n,
    readDraft: a,
    saveDraft: o,
    clearDraft: l
  };
}
const En = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  density: "default"
};
function rl(t, r = "default") {
  const a = t ? `abc_table_${t}` : "", [n, s] = O(() => {
    const m = { ...En, density: r };
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
  be(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify(n));
      } catch {
      }
  }, [a, n]);
  const o = ve((m) => {
    s((p) => ({
      ...p,
      hiddenKeys: p.hiddenKeys.includes(m) ? p.hiddenKeys.filter((v) => v !== m) : [...p.hiddenKeys, m]
    }));
  }, []), l = ve((m, p) => {
    s((v) => ({
      ...v,
      hiddenKeys: p ? [] : Array.from(new Set(m))
    }));
  }, []), c = ve(
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
  ), b = ve((m, p) => {
    s((v) => ({
      ...v,
      columnWidths: { ...v.columnWidths, [m]: Math.max(64, Math.round(p)) }
    }));
  }, []), d = ve((m) => {
    s((p) => ({ ...p, columnOrder: m }));
  }, []), f = ve((m, p) => {
    s((v) => ({
      ...v,
      searchVisible: { ...v.searchVisible, [m]: p }
    }));
  }, []), h = ve((m) => {
    s((p) => ({ ...p, density: m }));
  }, []), g = ve(() => {
    s({ ...En, density: r });
  }, [r]);
  return {
    settings: n,
    toggleColumnVisible: o,
    setAllColumnsVisible: l,
    setColumnFixed: c,
    setColumnWidth: b,
    setColumnOrder: d,
    setSearchFieldVisible: f,
    setDensity: h,
    resetSettings: g
  };
}
const al = typeof window < "u" ? ya : be;
function Jr(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function nl(t) {
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
function fa(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function kr({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: l = 8
}) {
  const { side: c, align: b } = nl(n), [d, f] = O(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: c,
    arrowOffset: 16,
    transformOrigin: fa(c, b),
    positioned: !1
  })), h = ve(() => {
    if (typeof window > "u" || !r.current) return;
    const m = r.current.getBoundingClientRect(), p = a.current, v = p == null ? void 0 : p.getBoundingClientRect(), y = window.innerWidth || 1024, C = window.innerHeight || 768, x = l, k = p ? p.offsetWidth : 0, E = p ? p.offsetHeight : 0, B = k || (v == null ? void 0 : v.width) || (o ? m.width : 180), M = o ? Math.max(B, m.width) : B, N = E || (v == null ? void 0 : v.height) || 40;
    if (m.width === 0 && m.height === 0 && m.top === 0 && m.left === 0) {
      f({
        top: s,
        left: x,
        minWidth: o && m.width > 0 ? m.width : void 0,
        actualSide: c,
        arrowOffset: 16,
        transformOrigin: fa(c, b),
        positioned: !0
      });
      return;
    }
    let w = c;
    if (c === "bottom") {
      const W = C - m.bottom - s - x, Y = m.top - s - x;
      N > W && Y > W && (w = "top");
    } else if (c === "top") {
      const W = m.top - s - x, Y = C - m.bottom - s - x;
      N > W && Y > W && (w = "bottom");
    } else if (c === "left") {
      const W = m.left - s - x, Y = y - m.right - s - x;
      M > W && Y > W && (w = "right");
    } else if (c === "right") {
      const W = y - m.right - s - x, Y = m.left - s - x;
      M > W && Y > W && (w = "left");
    }
    let I = 0, S = 0;
    w === "bottom" || w === "top" ? (I = w === "bottom" ? m.bottom + s : m.top - N - s, b === "start" ? S = m.left : b === "end" ? S = m.right - M : S = m.left + m.width / 2 - M / 2) : (S = w === "right" ? m.right + s : m.left - M - s, b === "start" ? I = m.top : b === "end" ? I = m.bottom - N : I = m.top + m.height / 2 - N / 2);
    const D = Math.max(x, y - M - x), T = Math.max(x, C - N - x), R = Math.min(Math.max(x, S), D), G = Math.min(Math.max(x, I), T), X = w === "top" || w === "bottom" ? Math.min(
      Math.max(10, m.left + m.width / 2 - R),
      Math.max(10, M - 10)
    ) : Math.min(
      Math.max(10, m.top + m.height / 2 - G),
      Math.max(10, N - 10)
    ), j = fa(w, b), P = o ? Math.round(m.width) : void 0;
    f((W) => W.positioned && Math.abs(W.top - G) < 0.5 && Math.abs(W.left - R) < 0.5 && W.minWidth === P && W.actualSide === w && Math.abs(W.arrowOffset - X) < 0.5 && W.transformOrigin === j ? W : {
      top: Math.round(G * 10) / 10,
      left: Math.round(R * 10) / 10,
      minWidth: P,
      actualSide: w,
      arrowOffset: Math.round(X),
      transformOrigin: j,
      positioned: !0
    });
  }, [r, a, c, b, s, o, l]);
  al(() => {
    if (!t) {
      f((p) => p.positioned ? { ...p, positioned: !1 } : p);
      return;
    }
    h();
    const m = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(h) : 0;
    return () => {
      m && typeof window < "u" && window.cancelAnimationFrame(m);
    };
  }, [t, h]), be(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", h, { passive: !0 }), window.addEventListener("scroll", h, !0);
    let m = null;
    return typeof ResizeObserver < "u" && (m = new ResizeObserver(() => h()), a.current && m.observe(a.current), r.current && m.observe(r.current)), () => {
      window.removeEventListener("resize", h), window.removeEventListener("scroll", h, !0), m == null || m.disconnect();
    };
  }, [t, h, a, r]);
  const g = t ? Jr(r.current) : null;
  return {
    style: {
      position: "fixed",
      top: `${d.top}px`,
      left: `${d.left}px`,
      minWidth: d.minWidth ? `${d.minWidth}px` : void 0,
      transformOrigin: d.transformOrigin,
      // 尚未完成首帧同步坐标测算前先隐藏，防止残影在 (0, 0) 或上次位置闪现一帧
      visibility: t && !d.positioned ? "hidden" : void 0
    },
    actualSide: d.actualSide,
    arrowOffset: d.arrowOffset,
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
function Kb({
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
const ke = We.forwardRef(
  ({
    className: t,
    variant: r = "primary",
    size: a,
    motion: n,
    loading: s = !1,
    loadingText: o,
    disabled: l,
    icon: c,
    leftIcon: b,
    rightIcon: d,
    block: f = !1,
    asChild: h = !1,
    type: g,
    children: m,
    ...p
  }, v) => {
    const y = a === "icon" || a === "icon-sm", k = pe(y ? void 0 : a === "default" ? "sm" : a, "sm"), E = oe(n), B = !!(l || s), M = b ?? c, N = u(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      jr[r] || jr.primary,
      y ? Or[a] : Or[k],
      f && "w-full",
      t
    );
    if (h && We.isValidElement(m)) {
      const w = m;
      return We.cloneElement(w, {
        className: u(N, w.props.className),
        ...p
      });
    }
    return /* @__PURE__ */ i(
      "button",
      {
        ref: v,
        type: g,
        disabled: B,
        "data-motion": E,
        className: N,
        ...p,
        children: [
          s ? /* @__PURE__ */ e(Bt, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : M && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: M }),
          s && o !== void 0 ? o : m,
          !s && d && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: d })
        ]
      }
    );
  }
);
ke.displayName = "Button";
const Ua = Pa(null);
function sl() {
  return Gr(Ua);
}
const ol = {
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
  onCancel: s,
  onOpenChange: o,
  closable: l = !0,
  closeDisabled: c = !1,
  closeLabel: b = "关闭",
  title: d,
  description: f,
  children: h,
  footer: g,
  size: m,
  maxWidth: p = "md",
  width: v,
  closeOnClickModal: y = !0,
  draggable: C = !0,
  fullscreenable: x = !0,
  fullscreen: k,
  onFullscreenChange: E,
  motion: B,
  className: M
}) => {
  const N = t ?? r ?? a ?? !1, w = oe(B), { isMounted: I, isVisible: S } = $t(N, w === "none" ? 0 : 180), D = Ke(), T = Ke(), R = de(null), G = de(null), X = de(!1), j = ve(() => {
    c || (n ? n() : s ? s() : o && o(!1));
  }, [c, n, s, o]), P = de(j);
  P.current = j;
  const W = !!(d !== void 0 || x), [Y, F] = O(!1), K = k !== void 0 ? k : Y, [ne, $] = O({ x: 0, y: 0 }), q = de(
    null
  ), U = ve(() => {
    const V = !K;
    k === void 0 && F(V), E == null || E(V);
  }, [K, k, E]);
  be(() => {
    if (!I) return;
    const V = R.current;
    if (!V) return;
    let Ce = !1;
    if (typeof V.showModal == "function")
      if (V.open)
        Ce = !0;
      else
        try {
          V.showModal(), Ce = !0;
        } catch {
          V.setAttribute("open", "");
        }
    else
      V.setAttribute("open", "");
    const we = (ue) => {
      ue.preventDefault(), P.current();
    }, ee = (ue) => {
      ue.key === "Escape" && (ue.stopPropagation(), P.current());
    };
    return V.addEventListener("cancel", we), (!Ce || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", ee), () => {
      if (V.removeEventListener("cancel", we), window.removeEventListener("keydown", ee), V.open && typeof V.close == "function")
        try {
          V.close();
        } catch {
          V.removeAttribute("open");
        }
    };
  }, [I]), be(() => {
    N || ($({ x: 0, y: 0 }), k === void 0 && F(!1));
  }, [N, k]);
  const re = (V) => {
    var ue;
    const Ce = V.target;
    if ((ue = Ce == null ? void 0 : Ce.closest) != null && ue.call(Ce, "[data-abc-floating]"))
      return !1;
    const we = G.current;
    if (!we) return !1;
    const ee = we.getBoundingClientRect();
    return ee.width === 0 && ee.height === 0 ? !we.contains(V.target) : V.clientX < ee.left || V.clientX > ee.right || V.clientY < ee.top || V.clientY > ee.bottom;
  }, Q = (V) => {
    if (!C || K || V.button !== 0 || V.target.closest('button, a, input, [role="button"]')) return;
    q.current = {
      startX: V.clientX,
      startY: V.clientY,
      origX: ne.x,
      origY: ne.y
    };
    const Ce = (ee) => {
      q.current && $({
        x: q.current.origX + (ee.clientX - q.current.startX),
        y: q.current.origY + (ee.clientY - q.current.startY)
      });
    }, we = () => {
      q.current = null, window.removeEventListener("mousemove", Ce), window.removeEventListener("mouseup", we);
    };
    window.addEventListener("mousemove", Ce), window.addEventListener("mouseup", we);
  };
  if (!I || typeof document > "u") return null;
  const he = m || p, A = ol[he] || he;
  return dt(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: R,
        "data-motion": w,
        "aria-labelledby": D,
        "aria-describedby": f ? T : void 0,
        style: {
          display: N ? "flex" : "none",
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100dvh",
          maxWidth: "100vw",
          maxHeight: "100dvh",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: K ? 0 : "1rem",
          border: "none",
          backgroundColor: "rgba(2, 6, 23, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1100
        },
        onPointerDown: (V) => {
          X.current = y && re(V);
        },
        onPointerUp: (V) => {
          y && X.current && re(V) && P.current(), X.current = !1;
        },
        onClick: (V) => {
          y && V.target === R.current && !X.current && P.current();
        },
        className: u(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          K && "p-0",
          w !== "none" && (S ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: G,
            "data-dialog-panel": "",
            "data-motion": w,
            style: {
              width: !K && v ? v : void 0,
              transform: !K && (ne.x !== 0 || ne.y !== 0) ? `translate3d(${ne.x}px, ${ne.y}px, 0)` : void 0
            },
            className: u(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              K ? "h-dvh w-dvw rounded-none" : u("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !v && A),
              w !== "none" && (S ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              M
            ),
            children: /* @__PURE__ */ i(Ua.Provider, { value: { isOpen: N, handleClose: j, closeDisabled: c, hasHeader: W, titleId: D }, children: [
              (d !== void 0 || x) && /* @__PURE__ */ i(
                "div",
                {
                  onMouseDown: Q,
                  onDoubleClick: x ? U : void 0,
                  className: u(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    C && !K && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                      d && /* @__PURE__ */ e("h2", { id: D, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: d }),
                      f && /* @__PURE__ */ e("p", { id: T, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: f })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                      x && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": K ? "还原窗口" : "全屏",
                          title: K ? "退出全屏" : "全屏显示",
                          onClick: (V) => {
                            V.stopPropagation(), U();
                          },
                          onMouseDown: (V) => V.stopPropagation(),
                          onPointerDown: (V) => V.stopPropagation(),
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: K ? /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ja, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      l && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": b,
                          title: b,
                          disabled: c,
                          onClick: (V) => {
                            V.stopPropagation(), j();
                          },
                          onMouseDown: (V) => V.stopPropagation(),
                          onPointerDown: (V) => V.stopPropagation(),
                          className: u(
                            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                            c && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
                          ),
                          children: /* @__PURE__ */ e(Ve, { className: "h-4 w-4" })
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
                  children: h
                }
              ),
              g && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: g })
            ] })
          }
        )
      }
    ),
    document.body
  );
}, Ub = lt;
function Va({
  className: t,
  children: r,
  closeLabel: a = "关闭",
  closeDisabled: n,
  closable: s,
  onClose: o,
  ...l
}) {
  const c = Gr(Ua), b = s ?? (c ? !c.hasHeader : !1), d = n ?? (c == null ? void 0 : c.closeDisabled) ?? !1;
  return /* @__PURE__ */ i("div", { "data-slot": "dialog-content", className: u("relative space-y-4", t), ...l, children: [
    b && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": a,
        title: a,
        disabled: d,
        onClick: (f) => {
          f.stopPropagation(), o ? o() : c && c.handleClose();
        },
        onMouseDown: (f) => f.stopPropagation(),
        onPointerDown: (f) => f.stopPropagation(),
        className: u(
          "absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10",
          d && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
        ),
        children: /* @__PURE__ */ e(Ve, { className: "h-4 w-4" })
      }
    ),
    r
  ] });
}
function Ga({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: u("flex flex-col space-y-1.5 text-left", t), ...a, children: r });
}
function Ya({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: u("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...a, children: r });
}
function Xa({ className: t, children: r, id: a, ...n }) {
  const s = sl();
  return /* @__PURE__ */ e("h2", { id: a ?? (s == null ? void 0 : s.titleId), "data-slot": "dialog-title", className: u("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...n, children: r });
}
function qa({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: u("text-xs text-[var(--abc-fg-muted)]", t), ...a, children: r });
}
const $r = /* @__PURE__ */ new Set();
let vs = null, vr = 0;
function gs(t) {
  vs = t, $r.forEach((r) => r(t));
}
function il(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function Za(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (vr === 0 && typeof window < "u" && $r.size === 0) {
    const s = r.content ?? r.message, o = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    gs({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: il(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const Vb = Za;
function Gb() {
  return Za;
}
const xs = () => {
  const [t, r] = O(!1), [a, n] = O(() => vs), [s, o] = O(!1);
  if (be(() => {
    vr += 1, r(vr === 1);
    const d = (f) => n(f);
    return $r.add(d), () => {
      vr = Math.max(0, vr - 1), $r.delete(d);
    };
  }, []), !t || !a) return null;
  const l = async (b) => {
    var d;
    if (!(!a || s)) {
      if (b && a.onConfirm)
        try {
          o(!0), await a.onConfirm();
        } finally {
          o(!1);
        }
      else b || (d = a.onCancel) == null || d.call(a);
      a.resolve(b), gs(null);
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
      footer: /* @__PURE__ */ i(je, { children: [
        /* @__PURE__ */ e(
          ke,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: a.resolvedTone === "danger",
            onClick: () => l(!1),
            children: a.cancelText
          }
        ),
        /* @__PURE__ */ e(
          ke,
          {
            variant: a.resolvedTone === "danger" ? "danger" : a.resolvedTone === "warning" ? "warning" : a.resolvedTone === "success" ? "success" : "primary",
            loading: s,
            autoFocus: a.resolvedTone !== "danger",
            onClick: () => l(!0),
            children: a.confirmText
          }
        )
      ] }),
      children: /* @__PURE__ */ i("div", { className: "flex items-start gap-3.5 py-1", children: [
        c,
        /* @__PURE__ */ e("div", { className: "pt-1 text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: a.message })
      ] })
    }
  );
}, Yb = ({ children: t }) => /* @__PURE__ */ i(je, { children: [
  t,
  /* @__PURE__ */ e(xs, {})
] });
let tt = [];
const Ea = /* @__PURE__ */ new Set(), wt = /* @__PURE__ */ new Map();
let cl = 0;
function Ja() {
  const t = [...tt];
  Ea.forEach((r) => r(t));
}
function ll(t) {
  const r = wt.get(t);
  if (!r || r.isPaused || r.remaining <= 0) return;
  r.timerId && (clearTimeout(r.timerId), r.timerId = void 0);
  const a = Date.now() - r.startedAt;
  r.remaining = Math.max(0, r.remaining - a), r.isPaused = !0;
}
function dl(t) {
  const r = wt.get(t);
  !r || !r.isPaused || r.remaining <= 0 || (r.isPaused = !1, r.startedAt = Date.now(), typeof window < "u" && (r.timerId = window.setTimeout(r.onExpire, r.remaining)));
}
function Qa(t) {
  var n;
  const r = wt.get(t);
  r != null && r.timerId && clearTimeout(r.timerId), wt.delete(t);
  const a = tt.find((s) => s.id === t);
  a && ((n = a.onClose) == null || n.call(a)), tt = tt.filter((s) => s.id !== t), Ja();
}
function bl() {
  wt.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), wt.clear(), tt.forEach((t) => {
    var r;
    return (r = t.onClose) == null ? void 0 : r.call(t);
  }), tt = [], Ja();
}
function Gt(t, r, a) {
  const n = `abc_toast_${++cl}_${Date.now()}`;
  let s = {};
  r !== null && typeof r == "object" && !We.isValidElement(r) ? s = r : s = { message: r };
  const o = s.tone ?? t, l = o === "danger" ? "error" : o, c = s.content ?? s.message ?? s.description ?? "", b = l === "error" ? 4200 : l === "warning" ? 3600 : l === "loading" ? 0 : 3e3, d = s.duration ?? a ?? b, f = {
    ...s,
    id: n,
    tone: l,
    message: c,
    duration: d,
    createdAt: Date.now()
  };
  if (tt.length >= 30 && (tt.slice(0, tt.length - 29).forEach((g) => {
    const m = wt.get(g.id);
    m != null && m.timerId && clearTimeout(m.timerId), wt.delete(g.id);
  }), tt = tt.slice(-29)), tt = [...tt, f], Ja(), d > 0 && typeof window < "u") {
    const h = {
      startedAt: Date.now(),
      remaining: d,
      isPaused: !1,
      onExpire: () => Qa(n)
    };
    h.timerId = window.setTimeout(h.onExpire, d), wt.set(n, h);
  }
  return n;
}
const en = {
  success: (t, r) => Gt("success", t, r),
  error: (t, r) => Gt("error", t, r ?? 4200),
  info: (t, r) => Gt("info", t, r),
  warning: (t, r) => Gt("warning", t, r ?? 3600),
  loading: (t, r = 0) => Gt("loading", t, r),
  push: (t, r, a) => Gt(t, r, a),
  dismiss: (t) => Qa(t),
  clear: () => bl()
}, Xb = en, _n = {
  success: /* @__PURE__ */ e(Ct, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(Dt, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(Dt, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(Ot, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(wr, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(Bt, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, ul = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, ml = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, fl = ({
  item: t,
  resolvedSize: r,
  resolvedMotion: a,
  closable: n,
  pauseOnHover: s,
  toastClassName: o,
  toastStyle: l,
  onDismiss: c
}) => {
  const b = t.closable ?? n, d = !!t.title;
  return /* @__PURE__ */ i(
    "div",
    {
      role: t.tone === "error" || t.tone === "warning" ? "alert" : "status",
      "aria-live": t.tone === "error" ? "assertive" : "polite",
      "data-motion": a,
      onMouseEnter: () => {
        s && ll(t.id);
      },
      onMouseLeave: () => {
        s && dl(t.id);
      },
      style: { ...l, ...t.style },
      className: u(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        d ? "items-start" : "items-center",
        ul[r],
        a !== "none" && "abc-animate-popover-in",
        o,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: u("shrink-0", d && "mt-0.5"), children: t.icon ?? _n[t.tone] ?? _n.info }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          t.title && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)] leading-snug", children: t.title }),
          t.message && /* @__PURE__ */ e(
            "div",
            {
              className: u(
                "leading-relaxed break-words",
                d ? "text-xs text-[var(--abc-fg-secondary)]" : "font-medium"
              ),
              children: t.message
            }
          ),
          t.action && /* @__PURE__ */ e("div", { className: "mt-1.5 flex items-center gap-2", children: t.action })
        ] }),
        b && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "关闭通知",
            onClick: (f) => {
              f.stopPropagation(), c(t.id);
            },
            className: "rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer transition-colors",
            children: /* @__PURE__ */ e(Ve, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, pl = ({
  position: t = "top-right",
  size: r,
  motion: a,
  maxCount: n = 5,
  pauseOnHover: s = !0,
  newestOnTop: o = !1,
  closable: l = !0,
  className: c,
  style: b,
  toastClassName: d,
  toastStyle: f,
  container: h,
  containerId: g,
  renderItem: m,
  items: p,
  onDismiss: v
}) => {
  const [y, C] = O(() => [...tt]), x = pe(r, "sm"), k = oe(a);
  be(() => {
    if (p !== void 0) return;
    const S = (D) => C(D);
    return Ea.add(S), () => {
      Ea.delete(S);
    };
  }, [p]);
  const B = (p ?? y).filter((S) => !(S.containerId && g && S.containerId !== g || S.position && S.position !== t));
  let M = B;
  o ? M = [...B].reverse().slice(0, n) : n > 0 && (M = B.slice(-n));
  const N = (S) => {
    v ? v(S) : Qa(S);
  };
  if (typeof document > "u" || M.length === 0)
    return null;
  const w = typeof h == "function" ? h() : h !== void 0 ? h : typeof document < "u" ? document.body : null;
  if (!w) return null;
  const I = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: u(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        ml[t],
        c
      ),
      style: b,
      children: M.map((S) => m ? /* @__PURE__ */ e(We.Fragment, { children: m(S, () => N(S.id)) }, S.id) : /* @__PURE__ */ e(
        fl,
        {
          item: S,
          resolvedSize: x,
          resolvedMotion: k,
          closable: l,
          pauseOnHover: s,
          toastClassName: d,
          toastStyle: f,
          onDismiss: N
        },
        S.id
      ))
    }
  );
  return dt(I, w);
}, hl = (t) => /* @__PURE__ */ e(pl, { ...t }), tn = "abc_design_theme_v1", Wr = "color-scheme", ys = Pa(null);
function An(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(Wr), n = window.localStorage.getItem(tn), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, l = ["xs", "sm", "md", "lg"], c = ["none", "subtle", "smooth", "spring"], b = s.componentSize && l.includes(s.componentSize) ? s.componentSize : t.componentSize, d = s.motion && c.includes(s.motion) ? s.motion : t.motion ?? "smooth";
    return {
      mode: o,
      brand: s.brand ?? t.brand,
      customBrandColor: s.customBrandColor ?? t.customBrandColor,
      density: s.density ?? t.density,
      radius: s.radius ?? t.radius,
      fontScale: s.fontScale ?? t.fontScale ?? "md",
      visualMode: s.visualMode ?? t.visualMode ?? "default",
      componentSize: b,
      motion: d
    };
  } catch {
    return t;
  }
}
function vl(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(Wr) : window.localStorage.setItem(Wr, t.mode), window.localStorage.setItem(tn, JSON.stringify(t));
    } catch {
    }
}
const qb = ({
  children: t,
  defaultTheme: r,
  defaultPageTransition: a = "fade-slide",
  watermarkText: n,
  defaultWatermarkEnabled: s = !1,
  persist: o = !0,
  toastAdapter: l,
  toastContainerProps: c,
  uploadAdapter: b,
  dictAdapter: d,
  permissionAdapter: f,
  captchaAdapter: h,
  iconRegistry: g = {},
  defaultDrawerCascadeMode: m = "adjacent"
}) => {
  const p = ce(
    () => ({ ...Xe, ...r }),
    [r]
  ), [v, y] = O(() => An(p, o)), [C, x] = O(
    () => Xt(v.mode)
  ), [k, E] = O(a), [B, M] = O(s);
  be(() => {
    const F = Je(v);
    x(F), vl(v, o);
  }, [v, o]), be(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const F = window.matchMedia("(prefers-color-scheme: dark)"), K = () => {
      if (v.mode === "system") {
        const ne = Je(v);
        x(ne);
      }
    };
    return F.addEventListener("change", K), () => F.removeEventListener("change", K);
  }, [v]), be(() => {
    if (!o || typeof window > "u") return;
    const F = (K) => {
      (K.key === tn || K.key === Wr) && y(An(p, !0));
    };
    return window.addEventListener("storage", F), () => window.removeEventListener("storage", F);
  }, [o, p]);
  const N = ve(
    (F, K) => {
      mc(() => {
        y((ne) => {
          const $ = { ...ne, mode: F };
          return Je($), $;
        });
      }, K);
    },
    []
  ), w = ve(
    (F) => {
      const ne = Xt(v.mode) === "dark" ? "light" : "dark", $ = Xt("system");
      N(ne === $ ? "system" : ne, F);
    },
    [v.mode, N]
  ), I = ve((F) => {
    y((K) => ({ ...K, brand: F, customBrandColor: void 0 }));
  }, []), S = ve((F) => {
    y((K) => ({ ...K, customBrandColor: F }));
  }, []), D = ve((F) => {
    y((K) => ({ ...K, density: F }));
  }, []), T = ve((F) => {
    y((K) => ({ ...K, radius: F }));
  }, []), R = ve((F) => {
    y((K) => ({ ...K, fontScale: F }));
  }, []), G = ve((F) => {
    y((K) => ({ ...K, visualMode: F }));
  }, []), X = ve((F) => {
    y((K) => ({ ...K, componentSize: F }));
  }, []), j = ve((F) => {
    y((K) => ({ ...K, motion: F }));
  }, []), P = ve((F) => {
    y((K) => ({ ...K, ...F }));
  }, []), W = ve(() => {
    y(p), E(a), M(s);
  }, [p, a, s]), Y = ce(
    () => ({
      theme: v,
      resolvedTheme: C,
      pageTransition: k,
      watermarkText: n,
      watermarkEnabled: B,
      setThemeMode: N,
      toggleTheme: w,
      setBrand: I,
      setCustomBrandColor: S,
      setDensity: D,
      setRadius: T,
      setFontScale: R,
      setVisualMode: G,
      setComponentSize: X,
      setMotion: j,
      updateTheme: P,
      setPageTransition: E,
      setWatermarkEnabled: M,
      resetTheme: W,
      toast: l ?? en,
      uploadAdapter: b,
      dictAdapter: d,
      permissionAdapter: f,
      captchaAdapter: h,
      iconRegistry: g,
      defaultDrawerCascadeMode: m
    }),
    [
      v,
      C,
      k,
      n,
      B,
      N,
      w,
      I,
      S,
      D,
      T,
      R,
      G,
      X,
      j,
      P,
      W,
      l,
      b,
      d,
      f,
      h,
      g,
      m
    ]
  );
  return /* @__PURE__ */ i(ys.Provider, { value: Y, children: [
    t,
    !l && /* @__PURE__ */ e(hl, { ...c }),
    /* @__PURE__ */ e(xs, {})
  ] });
};
function Ye() {
  const t = Gr(ys);
  return t || {
    theme: Xe,
    resolvedTheme: Xt(Xe.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Je({ ...Xe, mode: r });
    },
    toggleTheme: () => {
      const r = Xt(Xe.mode) === "dark" ? "light" : "dark";
      Je({ ...Xe, mode: r });
    },
    setBrand: (r) => {
      Je({ ...Xe, brand: r });
    },
    setCustomBrandColor: (r) => {
      Je({ ...Xe, customBrandColor: r });
    },
    setDensity: (r) => {
      Je({ ...Xe, density: r });
    },
    setRadius: (r) => {
      Je({ ...Xe, radius: r });
    },
    setFontScale: (r) => {
      Je({ ...Xe, fontScale: r });
    },
    setVisualMode: (r) => {
      Je({ ...Xe, visualMode: r });
    },
    setComponentSize: (r) => {
      Je({ ...Xe, componentSize: r });
    },
    setMotion: (r) => {
      Je({ ...Xe, motion: r });
    },
    updateTheme: (r) => {
      Je({ ...Xe, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Je(Xe);
    },
    toast: en,
    iconRegistry: {}
  };
}
function pe(t, r = "sm") {
  const { theme: a } = Ye();
  return (t === "default" ? void 0 : t) ?? a.componentSize ?? r;
}
function oe(t) {
  const { theme: r } = Ye();
  return t ?? r.motion ?? "smooth";
}
function gl(t) {
  const r = Ye();
  return t ?? r.defaultDrawerCascadeMode ?? "adjacent";
}
const hr = {
  Activity: Fi,
  AlertCircle: Dt,
  AlertOctagon: Wi,
  AlertTriangle: Ot,
  BarChart2: $i,
  BarChart3: Oi,
  Bell: ji,
  BellRing: zi,
  BookMarked: Pi,
  Boxes: Ri,
  Building2: Li,
  Calendar: Fa,
  CalendarCheck: Bi,
  Camera: Di,
  Check: Ue,
  CheckCircle: Ai,
  CheckCircle2: Ct,
  CheckSquare: _i,
  CircleDollarSign: Ei,
  Clock: Pr,
  Coins: Ti,
  Compass: as,
  Copy: ar,
  Cpu: Mi,
  CreditCard: Ii,
  Database: Si,
  Download: rs,
  Edit: Ci,
  Edit3: Na,
  Eye: rr,
  FileCheck: ki,
  FileClock: Ni,
  FileSpreadsheet: wi,
  FileText: yi,
  Flame: xi,
  Folder: gi,
  FolderGit2: vi,
  FolderOpen: hi,
  FolderPlus: pi,
  FolderTree: fi,
  Globe: mi,
  Globe2: ui,
  Handshake: bi,
  HardDrive: di,
  Headphones: li,
  HelpCircle: yr,
  History: ci,
  Home: ii,
  Image: ts,
  Info: wr,
  Key: oi,
  KeyRound: es,
  Layers: Qn,
  LayoutDashboard: si,
  LayoutGrid: ni,
  LineChart: ai,
  Link2: ri,
  ListChecks: ti,
  ListOrdered: ei,
  Lock: Qo,
  MapPin: Jo,
  Megaphone: Zo,
  Menu: Jn,
  MessageCircle: qo,
  MessageSquare: Xo,
  MessageSquareQuote: Yo,
  MessageSquareText: Go,
  MessagesSquare: Vo,
  Minus: Zr,
  Monitor: Zn,
  MoreHorizontal: Wa,
  Network: Uo,
  Package: Ko,
  Palette: qn,
  PanelLeft: Ho,
  PanelTop: Fo,
  Pause: Wo,
  Phone: $o,
  PhoneCall: Oo,
  PieChart: jo,
  Play: Xn,
  Plus: $a,
  PlusCircle: zo,
  Radio: Po,
  Receipt: Ro,
  RefreshCw: tr,
  RotateCcw: St,
  RotateCw: qr,
  ScrollText: Lo,
  Search: ct,
  Send: Bo,
  Server: Do,
  Settings: Ao,
  Share: _o,
  Share2: Eo,
  Shield: To,
  ShieldAlert: Xr,
  ShieldCheck: Oa,
  ShoppingBag: Mo,
  ShoppingCart: Io,
  Sliders: So,
  SlidersHorizontal: wa,
  Smartphone: Co,
  Sparkles: Nr,
  Star: ko,
  StarOff: No,
  Store: wo,
  Tag: yo,
  Tags: xo,
  Terminal: go,
  Ticket: vo,
  Timer: ho,
  Trash: po,
  Trash2: er,
  TrendingUp: fo,
  Unlock: mo,
  Upload: Yn,
  User: uo,
  UserCheck: bo,
  UserCog: lo,
  Users: co,
  Video: io,
  Wallet: oo,
  Wrench: so,
  X: Ve,
  XCircle: no,
  Zap: ao
}, pa = {
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
}, Dn = [
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
function xl(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const ws = {};
function Zb(t) {
  Object.assign(ws, t);
}
const zt = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (r) {
    const h = r.toLowerCase();
    for (const g of Dn)
      if (g.keywords.some((m) => h.includes(m))) {
        const m = hr[g.iconName];
        if (m)
          return /* @__PURE__ */ e(m, { size: a, strokeWidth: n, className: u("shrink-0", s) });
      }
  }
  const l = (t || "").replace(/^el-icon-/, "").trim(), c = l.replace(/^s-/, ""), b = pa[l] ?? pa[c] ?? pa[t];
  let d = (o == null ? void 0 : o[l]) ?? ws[l] ?? (b ? hr[b] : void 0) ?? hr[l] ?? (l ? hr[xl(l)] : void 0);
  if (!d && l) {
    const h = l.toLowerCase();
    for (const g of Dn)
      if (g.keywords.some((m) => h.includes(m))) {
        d = hr[g.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(d ?? as, { size: a, strokeWidth: n, className: u("shrink-0", s) });
}, Ns = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, yl = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  default: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, Lt = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", rt = We.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    prefix: o,
    prefixIcon: l,
    suffix: c,
    suffixIcon: b,
    allowClear: d,
    clearable: f,
    passwordToggle: h = !0,
    showPasswordLabel: g,
    hidePasswordLabel: m,
    showCount: p = !1,
    onClear: v,
    invalid: y = !1,
    id: C,
    type: x = "text",
    value: k,
    defaultValue: E,
    maxLength: B,
    onChange: M,
    disabled: N,
    readOnly: w,
    className: I,
    wrapperClassName: S,
    ...D
  }, T) => {
    const R = pe(t, "sm"), G = oe(r), X = Ke(), j = C || X, P = de(null);
    Yr(T, () => P.current, []);
    const W = k !== void 0, [Y, F] = O(
      () => E != null ? String(E) : ""
    ), [K, ne] = O(!1), q = x === "password" && h !== !1, U = q && K ? "text" : x, Q = (W ? String(k ?? "") : Y).length, he = Q > 0, A = !!((d ?? f) && he && !N && !w), V = !!(y || n), Ce = o ?? l, we = c ?? b, ee = (H) => {
      W || F(H.target.value), M == null || M(H);
    }, ue = ve(
      (H) => {
        if (H.preventDefault(), H.stopPropagation(), N || w) return;
        W || F(""), v == null || v();
        const z = P.current;
        if (z && (z.value = "", z.focus()), M) {
          const Z = z ?? { value: "" };
          M({
            target: Z,
            currentTarget: Z,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [N, w, W, v, M]
    ), se = (A ? 1 : 0) + (q ? 1 : 0) + (we ? 1 : 0), ie = se >= 3 ? "pr-20" : se === 2 ? "pr-14" : se === 1 ? "pr-9" : "pr-3", ge = /\bw-(?!full\b)\S+/.test(I || ""), le = /* @__PURE__ */ i(
      "div",
      {
        className: u(
          "relative flex items-center",
          !ge && "w-full",
          S
        ),
        children: [
          Ce && /* @__PURE__ */ e(
            "div",
            {
              className: u(
                "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
                R === "xs" ? "left-2 [&>svg]:h-3.5 [&>svg]:w-3.5" : "left-2.5 [&>svg]:h-4 [&>svg]:w-4"
              ),
              children: Ce
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              ref: P,
              id: j,
              type: U,
              value: k,
              defaultValue: E,
              maxLength: B,
              onChange: ee,
              disabled: N,
              readOnly: w,
              "data-motion": G,
              "aria-invalid": V || void 0,
              className: u(
                Lt,
                Ns[R],
                Ce ? R === "xs" ? "pl-7" : "pl-8" : R === "xs" ? "pl-2" : "pl-3",
                ie,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                U === "number" && se > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                V && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                N && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                I
              ),
              ...D
            }
          ),
          (A || q || we) && /* @__PURE__ */ i("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            A && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (H) => H.preventDefault(),
                onClick: ue,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ve, { className: "h-3.5 w-3.5" })
              }
            ),
            q && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: N,
                "data-testid": "password-toggle",
                "aria-label": K ? m ?? "隐藏密码" : g ?? "显示密码",
                title: K ? m ?? "隐藏密码" : g ?? "显示密码",
                onMouseDown: (H) => H.preventDefault(),
                onClick: (H) => {
                  H.preventDefault(), H.stopPropagation(), !N && ne((z) => !z);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: K ? /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5" })
              }
            ),
            we && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: we })
          ] })
        ]
      }
    );
    return !a && !n && !s && !p ? le : /* @__PURE__ */ i("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: j,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      le,
      (n || s || p) && /* @__PURE__ */ i("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        p && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: B !== void 0 ? `${Q}/${B}` : Q
          }
        )
      ] })
    ] });
  }
);
rt.displayName = "Input";
const _a = ({
  value: t,
  defaultValue: r,
  onChange: a,
  min: n,
  max: s,
  step: o = 1,
  size: l,
  motion: c,
  disabled: b = !1,
  placeholder: d,
  invalid: f = !1,
  className: h
}) => {
  const g = pe(l, "sm"), m = oe(c), p = Ke(), [v, y] = O(r ?? null), C = t !== void 0 ? t : v, x = (k) => {
    let E = k;
    E !== null && Number.isFinite(E) ? (n !== void 0 && (E = Math.max(n, E)), s !== void 0 && (E = Math.min(s, E))) : E = null, t === void 0 && y(E), a == null || a(E);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": m,
      className: u(
        "inline-flex w-full items-center overflow-hidden",
        Lt,
        Ns[g],
        f && "border-[var(--abc-danger)]",
        b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
        h
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "减少数值",
            disabled: b || n !== void 0 && (C ?? 0) <= n,
            onClick: () => x((C ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(Zr, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: p,
            type: "number",
            value: C ?? "",
            min: n,
            max: s,
            step: o,
            disabled: b,
            placeholder: d,
            onChange: (k) => {
              const E = k.target.value;
              x(E === "" ? null : Number(E));
            },
            className: "h-full w-full min-w-0 flex-1 bg-transparent px-2.5 text-center font-mono tabular-nums focus:outline-none"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "增加数值",
            disabled: b || s !== void 0 && (C ?? 0) >= s,
            onClick: () => x((C ?? 0) + o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e($a, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Qr = We.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    showCount: o = !1,
    invalid: l = !1,
    mono: c = !1,
    id: b,
    value: d,
    defaultValue: f,
    maxLength: h,
    onChange: g,
    rows: m = 3,
    className: p,
    ...v
  }, y) => {
    const C = pe(t, "sm"), x = oe(r), k = Ke(), E = b || k, [B, M] = O(
      () => String(f ?? "").length
    ), N = d !== void 0 ? String(d ?? "").length : B, w = !!(l || n), S = /* @__PURE__ */ e(
      "textarea",
      {
        ref: y,
        id: E,
        rows: m,
        value: d,
        defaultValue: f,
        maxLength: h,
        onChange: (D) => {
          d === void 0 && M(D.target.value.length), g == null || g(D);
        },
        "data-motion": x,
        "aria-invalid": w || void 0,
        className: u(
          Lt,
          yl[C],
          "leading-relaxed resize-y",
          c && "font-mono",
          w && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          p
        ),
        ...v
      }
    );
    return !a && !n && !s && !o ? S : /* @__PURE__ */ i("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: E,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      S,
      (n || s || o) && /* @__PURE__ */ i("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        o && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "textarea-count",
            className: "ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums",
            children: h !== void 0 ? `${N}/${h}` : N
          }
        )
      ] })
    ] });
  }
);
Qr.displayName = "Textarea";
const Bn = [
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
], wl = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], Nl = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, kl = ({
  open: t,
  current: r,
  value: a,
  onClose: n,
  onSelect: s,
  onChange: o,
  placeholder: l = "点击选择菜单图标",
  clearable: c = !0,
  disabled: b = !1,
  size: d,
  motion: f,
  className: h
}) => {
  const g = pe(d, "sm"), m = oe(f), [p, v] = O(!1), [y, C] = O(""), [x, k] = O("all"), E = typeof t == "boolean", B = E ? t : p, M = a ?? r ?? "", N = () => {
    E ? n == null || n() : v(!1);
  }, w = (T) => {
    s == null || s(T), o == null || o(T), N();
  }, I = ce(() => {
    const T = y.trim();
    return Bn.filter((R) => x !== "all" && R.category !== x ? !1 : T ? ht(`${R.label} ${R.name}`, T) : !0);
  }, [y, x]), S = ce(
    () => Bn.find((T) => T.name.toLowerCase() === M.toLowerCase()),
    [M]
  ), D = /* @__PURE__ */ e(lt, { open: B, onClose: N, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ i("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        rt,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: y,
          prefix: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }),
          onChange: (T) => C(T.target.value)
        }
      ) }),
      M && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(zt, { name: M, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: M })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: wl.map((T) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => k(T.id),
        className: u(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          x === T.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: T.label
      },
      T.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: I.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: I.map((T) => {
      const R = M === T.name;
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => w(T.name),
          className: u(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            R ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            R && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              zt,
              {
                name: T.name,
                size: 20,
                className: u(
                  "transition-transform group-hover:scale-110",
                  R ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: T.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: T.name })
          ]
        },
        T.name
      );
    }) }) : /* @__PURE__ */ i("div", { className: "py-10 text-center text-xs text-[var(--abc-fg-muted)]", children: [
      /* @__PURE__ */ i("p", { children: [
        "未找到匹配 “",
        y,
        "” 的预设图标"
      ] }),
      y.trim() && /* @__PURE__ */ i(
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
  return E ? D : /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: "button",
        tabIndex: b ? -1 : 0,
        "data-motion": m,
        onClick: () => !b && v(!0),
        onKeyDown: (T) => {
          !b && (T.key === "Enter" || T.key === " ") && (T.preventDefault(), v(!0));
        },
        className: u(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          Nl[g],
          Lt,
          b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          h
        ),
        children: [
          M ? /* @__PURE__ */ i("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(zt, { name: M, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: S ? `${S.label} (${M})` : M })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: l }),
          /* @__PURE__ */ i("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && M && !b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (T) => {
                  T.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ve, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    D
  ] });
};
async function ea(t) {
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
const Cl = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, Sl = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, Il = ({
  text: t,
  displayText: r,
  children: a,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: o = !0,
  successMessage: l,
  successText: c,
  tooltip: b,
  onCopy: d,
  size: f,
  motion: h,
  className: g
}) => {
  const m = pe(f, "sm"), p = oe(h), { toast: v } = Ye(), [y, C] = O(!1), x = de(null), k = c ?? l ?? "已复制到剪贴板";
  be(() => () => {
    x.current && clearTimeout(x.current);
  }, []);
  const E = ve(
    async (N) => {
      N.stopPropagation(), N.preventDefault(), await ea(t) ? (C(!0), v.success(k), d == null || d(t), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        C(!1), x.current = null;
      }, 1500)) : v.error("复制失败，请手动复制");
    },
    [t, k, d, v]
  ), B = b !== void 0 ? b : y ? k : "点击复制", M = y ? /* @__PURE__ */ e(
    Ue,
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
      "aria-label": b || "复制",
      "data-motion": p,
      onClick: E,
      className: u(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        g
      ),
      children: M
    }
  ) : /* @__PURE__ */ i(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: B,
      "data-motion": p,
      onClick: E,
      onKeyDown: (N) => {
        (N.key === "Enter" || N.key === " ") && E(N);
      },
      className: u(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        Cl[m],
        o && "font-mono tabular-nums",
        g
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && M
      ]
    }
  );
}, Yt = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = pe(t, "sm"), l = oe(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": l,
      className: u(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        Sl[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, Jb = ({
  value: t,
  title: r,
  copyLabel: a = "复制",
  copiedLabel: n = "已复制",
  successDuration: s = 1800,
  className: o,
  ...l
}) => {
  const [c, b] = O(!1), d = r || a;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": c ? n : d,
      title: c ? n : d,
      onClick: async (h) => {
        h.stopPropagation(), await ea(t) && (b(!0), setTimeout(() => b(!1), s));
      },
      className: u(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] transition-all hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] cursor-pointer",
        c && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
        o
      ),
      ...l,
      children: c ? /* @__PURE__ */ e(Ue, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
    }
  );
}, Ml = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Tl = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, It = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  onBlur: s,
  label: o,
  error: l,
  helperText: c,
  id: b,
  name: d,
  title: f,
  placeholder: h = "请选择",
  multiple: g = !1,
  searchable: m = !1,
  allowClear: p,
  clearable: v,
  disabled: y = !1,
  invalid: C = !1,
  size: x,
  motion: k,
  className: E,
  wrapperClassName: B,
  dropdownClassName: M,
  matchWidth: N = !0,
  "aria-label": w
}) => {
  var H;
  const I = pe(x, "sm"), S = oe(k), D = Ke(), T = b || D, [R, G] = st({
    value: r,
    defaultValue: a ?? (g ? [] : ""),
    onChange: n
  }), [X, j] = O(!1), [P, W] = O(""), [Y, F] = O(0), { isMounted: K, isVisible: ne } = $t(X, S === "none" ? 0 : 140), $ = de(null), q = de(null), U = de(null), re = de(null), Q = !!(p ?? v), he = !!(C || l), { style: A, actualSide: V, portalContainer: Ce } = kr({
    open: K,
    triggerRef: q,
    floatingRef: U,
    placement: "bottomLeft",
    offset: 4,
    matchWidth: N
  });
  be(() => {
    if (!X) {
      W("");
      return;
    }
    const z = (xe) => {
      var Be, Le;
      const De = xe.target;
      (Be = $.current) != null && Be.contains(De) || (Le = U.current) != null && Le.contains(De) || j(!1);
    }, Z = (xe) => {
      var De;
      xe.key === "Escape" && (xe.preventDefault(), xe.stopPropagation(), j(!1), (De = q.current) == null || De.focus());
    };
    return document.addEventListener("mousedown", z), document.addEventListener("keydown", Z, !0), () => {
      document.removeEventListener("mousedown", z), document.removeEventListener("keydown", Z, !0);
    };
  }, [X]);
  const we = ce(() => {
    const z = P.trim();
    return z ? t.filter(
      (Z) => ht(Z.label, z) || String(Z.value).toLowerCase().includes(z.toLowerCase())
    ) : t;
  }, [t, P]), ee = ce(() => g ? Array.isArray(R) ? R : R != null && R !== "" ? [R] : [] : R != null && R !== "" ? [R] : [], [g, R]), ue = ce(() => ee.map((z) => {
    const Z = t.find((xe) => String(xe.value) === String(z));
    return { value: z, label: (Z == null ? void 0 : Z.label) ?? String(z) };
  }), [t, ee]), se = () => {
    const z = we.findIndex(
      (Z) => !Z.disabled && ee.some((xe) => String(xe) === String(Z.value))
    );
    if (z >= 0)
      F(z);
    else {
      const Z = we.findIndex((xe) => !xe.disabled);
      F(Z >= 0 ? Z : 0);
    }
    j(!0);
  }, ie = (z) => {
    var xe;
    if (we.length === 0) return;
    let Z = Y;
    for (let De = 0; De < we.length; De++)
      if (Z = (Z + z + we.length) % we.length, !((xe = we[Z]) != null && xe.disabled)) {
        F(Z);
        return;
      }
  }, ge = (z) => {
    var Z;
    if (!z.disabled)
      if (g) {
        const De = ee.some((Be) => String(Be) === String(z.value)) ? ee.filter((Be) => String(Be) !== String(z.value)) : [...ee, z.value];
        G(De);
      } else
        G(z.value), j(!1), (Z = q.current) == null || Z.focus();
  }, le = (z) => {
    if (!y) {
      if (z.key === "Escape") {
        z.preventDefault(), z.stopPropagation(), j(!1);
        return;
      }
      if (z.key === "ArrowDown") {
        z.preventDefault(), X ? ie(1) : se();
        return;
      }
      if (z.key === "ArrowUp") {
        z.preventDefault(), X ? ie(-1) : se();
        return;
      }
      if (z.key === "Enter" || z.key === " " && z.target !== re.current)
        if (z.preventDefault(), !X)
          se();
        else {
          const Z = we[Y];
          Z && !Z.disabled && ge(Z);
        }
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      ref: $,
      className: u(
        "relative min-w-0",
        B || "w-full"
      ),
      children: [
        o && /* @__PURE__ */ e(
          "label",
          {
            htmlFor: T,
            className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
            children: o
          }
        ),
        d && /* @__PURE__ */ e(
          "input",
          {
            type: "hidden",
            name: d,
            value: g ? ee.join(",") : String(ee[0] ?? "")
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            ref: q,
            id: T,
            title: f,
            role: "combobox",
            "aria-label": w,
            "aria-expanded": X,
            "aria-haspopup": "listbox",
            "aria-controls": `${T}-listbox`,
            "aria-activedescendant": X ? `${T}-opt-${Y}` : void 0,
            "aria-disabled": y || void 0,
            tabIndex: y ? -1 : 0,
            onBlur: (z) => {
              var xe;
              const Z = z.relatedTarget;
              Z && ((xe = U.current) != null && xe.contains(Z)) || s == null || s(z);
            },
            onClick: () => {
              y || (X ? j(!1) : se());
            },
            onKeyDown: le,
            "data-motion": S,
            className: u(
              "flex w-full items-center justify-between gap-1.5 px-2.5 py-1 cursor-pointer select-none abc-motion-control",
              Lt,
              g ? Tl[I] : Ml[I],
              X && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
              he && "border-[var(--abc-danger)]",
              y && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
              E
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: ue.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: h }) : g ? ue.map((z) => /* @__PURE__ */ i(
                "span",
                {
                  "data-testid": "select-tag",
                  className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                  children: [
                    /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: z.label }),
                    !y && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": `移除 ${z.label}`,
                        onClick: (Z) => {
                          Z.stopPropagation(), G(ee.filter((xe) => String(xe) !== String(z.value)));
                        },
                        className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                        children: /* @__PURE__ */ e(Ve, { className: "h-2.5 w-2.5" })
                      }
                    )
                  ]
                },
                String(z.value)
              )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (H = ue[0]) == null ? void 0 : H.label }) }),
              /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                Q && ue.length > 0 && !y && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "data-testid": "select-clear",
                    "aria-label": "清空",
                    onClick: (z) => {
                      z.stopPropagation(), G(g ? [] : "");
                    },
                    className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: /* @__PURE__ */ e(Ve, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ e(
                  pt,
                  {
                    className: u("h-3.5 w-3.5 transition-transform duration-150", X && "rotate-180")
                  }
                )
              ] })
            ]
          }
        ),
        K && Ce && dt(
          /* @__PURE__ */ i(
            "div",
            {
              ref: U,
              id: `${T}-listbox`,
              role: "listbox",
              "data-abc-floating": "",
              "data-motion": S,
              "data-placement": V,
              "aria-multiselectable": g || void 0,
              style: A,
              className: u(
                "z-[1300] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                N ? "min-w-full" : "min-w-[120px]",
                ne ? "abc-animate-popover-in" : "abc-animate-popover-out",
                M
              ),
              children: [
                m && /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                  /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
                  /* @__PURE__ */ e(
                    "input",
                    {
                      ref: re,
                      type: "text",
                      autoFocus: !0,
                      "data-testid": "select-search-input",
                      value: P,
                      onClick: (z) => z.stopPropagation(),
                      onKeyDown: le,
                      onChange: (z) => {
                        const Z = z.target.value;
                        W(Z);
                        const De = (Z.trim() ? t.filter(
                          (Be) => ht(Be.label, Z) || String(Be.value).toLowerCase().includes(Z.toLowerCase())
                        ) : t).findIndex((Be) => !Be.disabled);
                        F(De >= 0 ? De : 0);
                      },
                      placeholder: "搜索或输入拼音首字母...",
                      className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "max-h-56 overflow-y-auto p-1", children: we.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : we.map((z, Z) => {
                  const xe = ee.some((Be) => String(Be) === String(z.value)), De = Z === Y;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      id: `${T}-opt-${Z}`,
                      type: "button",
                      role: "option",
                      "aria-selected": xe,
                      disabled: z.disabled,
                      onMouseEnter: () => {
                        z.disabled || F(Z);
                      },
                      onClick: (Be) => {
                        Be.stopPropagation(), ge(z);
                      },
                      className: u(
                        "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                        xe ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : De && !z.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                        z.disabled && "opacity-45 cursor-not-allowed"
                      ),
                      children: [
                        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ e("div", { className: "truncate", children: z.label }),
                          z.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: z.description })
                        ] }),
                        xe && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 shrink-0" })
                      ]
                    },
                    String(z.value)
                  );
                }) })
              ]
            }
          ),
          Ce
        ),
        l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
        c && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, El = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: l,
  motion: c,
  compact: b = !1,
  className: d
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
  }[b ? "sm" : f];
  return /* @__PURE__ */ i(
    "div",
    {
      "data-testid": "empty-state",
      "data-motion": h,
      className: u(
        "flex flex-col items-center justify-center text-center select-none",
        p.container,
        h !== "none" && "abc-animate-fade-in",
        d
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
            children: a ?? /* @__PURE__ */ e(Hi, { className: p.iconSize })
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
          ke,
          {
            variant: "secondary",
            size: p.btnSize,
            motion: h,
            icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, _l = {
  xs: {
    wrap: "text-[11px]",
    selectWrap: "w-[90px] shrink-0",
    select: "h-6 px-1.5 text-[11px]",
    navBtn: "h-6 w-6",
    pageBtn: "h-6 min-w-6 px-1.5 text-[11px]",
    input: "h-6 w-9 text-[11px]"
  },
  sm: {
    wrap: "text-xs",
    selectWrap: "w-[100px] shrink-0",
    select: "h-7 px-2 text-xs",
    navBtn: "h-7 w-7",
    pageBtn: "h-7 min-w-7 px-2 text-xs",
    input: "h-7 w-11 text-xs"
  },
  md: {
    wrap: "text-sm",
    selectWrap: "w-[108px] shrink-0",
    select: "h-8 px-2 text-xs",
    navBtn: "h-8 w-8",
    pageBtn: "h-8 min-w-8 px-2 text-xs",
    input: "h-8 w-12 text-xs"
  },
  lg: {
    wrap: "text-sm",
    selectWrap: "w-[116px] shrink-0",
    select: "h-9 px-2.5 text-sm",
    navBtn: "h-9 w-9",
    pageBtn: "h-9 min-w-9 px-2.5 text-sm",
    input: "h-9 w-14 text-sm"
  }
}, Fr = ({
  mode: t,
  current: r,
  currentPage: a,
  page: n,
  pageSize: s,
  size: o,
  controlSize: l,
  motion: c,
  total: b,
  pageSizeOptions: d = [10, 20, 50, 100],
  onChange: f,
  onPageChange: h,
  onSizeChange: g,
  onPageSizeChange: m,
  showTotal: p = !0,
  showQuickJumper: v = !0,
  className: y,
  hasNext: C,
  hasPrev: x,
  nextCursor: k,
  prevCursor: E,
  currentCursor: B,
  loadedCount: M,
  onNext: N,
  onPrev: w,
  onResetCursor: I,
  loading: S = !1
}) => {
  const D = r ?? a ?? n ?? 1, T = s ?? (typeof o == "number" ? o : void 0) ?? 10, R = pe(
    l ?? (typeof o == "string" ? o : void 0),
    "sm"
  ), G = oe(c), X = _l[R], j = t ?? (b === void 0 && (C !== void 0 || x !== void 0 || N !== void 0) ? "cursor" : "offset"), P = (Q) => {
    f == null || f(1, Q), g == null || g(Q), m == null || m(Q);
  }, W = ce(() => (d || []).map((Q) => ({
    label: `${Q} 条/页`,
    value: Q
  })), [d]);
  if (j === "cursor")
    return /* @__PURE__ */ i(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": G,
        className: u(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          X.wrap,
          y
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            p === !1 ? null : typeof p == "function" ? p(M ?? 0) : M !== void 0 ? /* @__PURE__ */ i("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: M }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            I && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: I,
                disabled: S || !x,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            d && d.length > 0 && (g || m || f) && /* @__PURE__ */ e(
              It,
              {
                "aria-label": "每页条数",
                size: R,
                value: T,
                disabled: S,
                onChange: (Q) => P(Number(Q)),
                options: W,
                searchable: !1,
                clearable: !1,
                wrapperClassName: X.selectWrap,
                className: u("cursor-pointer font-sans tabular-nums select-none", X.select)
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !x || S,
                onClick: w,
                className: u(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  X.navBtn
                ),
                children: [
                  /* @__PURE__ */ e(zr, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "上一页" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "下一页",
                disabled: !C || S,
                onClick: N,
                className: u(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  X.navBtn
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
  const Y = b ?? 0, F = Math.max(1, Math.ceil(Y / Math.max(1, T))), [K, ne] = O(""), $ = de(null);
  if (Y <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": G,
        className: u(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          X.wrap,
          y
        ),
        children: /* @__PURE__ */ e("div", { children: p === !1 ? null : typeof p == "function" ? p(0) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const q = (Q) => {
    const he = Math.min(Math.max(1, Q), F);
    he !== D && (f == null || f(he, T), h == null || h(he));
  }, U = () => {
    const Q = K.trim();
    if (!Q) {
      $.current = null;
      return;
    }
    if (Q === $.current) return;
    const he = parseInt(Q, 10);
    if (Number.isNaN(he)) {
      ne(""), $.current = null;
      return;
    }
    const A = Math.min(Math.max(1, he), F);
    $.current = Q, ne(String(A)), q(A);
  }, re = [];
  if (F <= 7)
    for (let Q = 1; Q <= F; Q++) re.push(Q);
  else {
    re.push(1), D > 3 && re.push("...");
    const Q = Math.max(2, D - 1), he = Math.min(F - 1, D + 1);
    for (let A = Q; A <= he; A++) re.push(A);
    D < F - 2 && re.push("..."), re.push(F);
  }
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": G,
      className: u(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        X.wrap,
        y
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: p === !1 ? null : typeof p == "function" ? p(Y) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: Y }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          d && d.length > 0 && /* @__PURE__ */ e(
            It,
            {
              "aria-label": "每页条数",
              size: R,
              value: T,
              disabled: S,
              onChange: (Q) => P(Number(Q)),
              options: W,
              searchable: !1,
              clearable: !1,
              wrapperClassName: X.selectWrap,
              className: u("cursor-pointer font-sans tabular-nums select-none", X.select)
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: D <= 1,
              onClick: () => q(D - 1),
              className: u(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                X.navBtn
              ),
              children: /* @__PURE__ */ e(zr, { className: "h-3.5 w-3.5" })
            }
          ),
          re.map(
            (Q, he) => Q === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${he}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => q(Q),
                className: u(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  X.pageBtn,
                  Q === D ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: Q
              },
              Q
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: D >= F,
              onClick: () => q(D + 1),
              className: u(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                X.navBtn
              ),
              children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
            }
          ),
          v && /* @__PURE__ */ i(
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
                    onChange: (Q) => {
                      $.current = null, ne(Q.target.value);
                    },
                    onKeyDown: (Q) => {
                      Q.key === "Enter" && (Q.preventDefault(), U());
                    },
                    onBlur: U,
                    className: u(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors",
                      X.input
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
}, Qb = (t) => /* @__PURE__ */ e(Fr, { mode: "cursor", ...t }), eu = (t) => /* @__PURE__ */ e(Fr, { ...t }), Ge = ({
  variant: t = "text",
  animation: r = "pulse",
  motion: a,
  width: n,
  height: s,
  className: o,
  style: l,
  children: c,
  ...b
}) => {
  const d = oe(a), f = d === "none" ? "none" : r, h = {
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
      "data-motion": d,
      style: h,
      className: u(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && u("rounded-md", s === void 0 && "h-4"),
        f === "wave" && "abc-skeleton-wave skeleton-wave",
        f === "pulse" && "animate-pulse",
        o
      ),
      ...b,
      children: c
    }
  );
}, tu = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(Ge, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(Ge, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(Ge, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(Ge, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), ru = ({
  rows: t = 5,
  columns: r = 4,
  showHeader: a = !0,
  animation: n = "wave",
  className: s,
  ...o
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
    ...o,
    children: /* @__PURE__ */ i("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((l, c) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Ge,
        {
          variant: "text",
          width: c === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, c)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((l, c) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((b, d) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Ge,
        {
          variant: "text",
          width: `${Math.max(40, 85 - (c + d) % 4 * 15)}%`,
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-cell"
        }
      ) }, d)) }, c)) })
    ] })
  }
), au = ({
  height: t = 288,
  animation: r = "wave",
  className: a,
  style: n,
  ...s
}) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(Ge, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(Ge, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, l) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        Ge,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, l)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, l) => /* @__PURE__ */ e(Ge, { variant: "text", width: 36, height: 10, animation: r }, l)) })
    ]
  }
), ks = {
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
function Al(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in ks ? n : "neutral";
}
const jt = ({
  tone: t,
  status: r,
  color: a,
  text: n,
  label: s,
  dot: o = !0,
  pulse: l = !1,
  size: c,
  motion: b,
  className: d,
  children: f,
  ...h
}) => {
  const g = Al(t, r, a), m = ks[g], p = n ?? s ?? f, v = pe(c, "sm"), y = oe(b);
  return /* @__PURE__ */ i(
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
        d
      ),
      ...h,
      children: [
        o && /* @__PURE__ */ i("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
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
}, nu = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  variant: s,
  size: o,
  motion: l,
  children: c,
  className: b
}) => {
  const d = pe(o, "sm"), f = oe(l);
  if (s)
    return /* @__PURE__ */ e(
      "span",
      {
        "data-motion": f,
        className: u(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--abc-primary)] focus:ring-offset-2",
          s === "secondary" ? "border-transparent bg-[var(--abc-bg-subtle,#f1f5f9)] text-[var(--abc-fg-secondary,#64748b)]" : s === "outline" ? "border-[var(--abc-border,#e2e8f0)] text-[var(--abc-fg,#0f172a)] bg-transparent" : s === "destructive" ? "border-transparent bg-[var(--abc-danger,#ef4444)] text-white" : "border-transparent bg-[var(--abc-primary,#2563eb)] text-white",
          b
        ),
        children: c
      }
    );
  const h = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", g = a || t > 0, m = t > r ? `${r}+` : String(t), p = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, v = {
    xs: "h-4 min-w-4 px-1 text-[9px]",
    sm: "h-4.5 min-w-4.5 px-1.5 text-[10px]",
    md: "h-5 min-w-5 px-1.5 text-[11px]",
    lg: "h-6 min-w-6 px-2 text-xs"
  }, y = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, C = {
    xs: "h-3.5 min-w-3.5 px-1 text-[9px]",
    sm: "h-4 min-w-4 px-1 text-[10px]",
    md: "h-4.5 min-w-4.5 px-1.5 text-[11px]",
    lg: "h-5 min-w-5 px-1.5 text-xs"
  };
  return c ? /* @__PURE__ */ i("span", { "data-motion": f, className: u("relative inline-flex shrink-0", b), children: [
    c,
    g && (a ? /* @__PURE__ */ e(
      "span",
      {
        className: u(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          y[d],
          h
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: u(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          C[d],
          h
        ),
        children: m
      }
    ))
  ] }) : g ? a ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": f,
      className: u("abc-motion-pop inline-block rounded-full", p[d], h, b)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": f,
      className: u(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        v[d],
        h,
        b
      ),
      children: m
    }
  ) : null;
}, Dl = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, Bl = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = pe(a, "sm"), l = oe(n), [c, b] = O(!1), d = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": l,
      className: u(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        Dl[o],
        s
      ),
      children: t && !c ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: r,
          onError: () => b(!0),
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ e("span", { children: d })
    }
  );
};
function su(t = {}) {
  return "";
}
const Ll = ({
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
    jt,
    {
      tone: l,
      dot: r,
      className: u(t === "outline" && "bg-transparent border-[var(--abc-border)]", a),
      ...s,
      children: n
    }
  );
};
Ll.displayName = "Tag";
const Rl = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Pl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, zl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, jl = {
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
  size: o,
  padding: l,
  variant: c = "default",
  cover: b,
  statusRibbon: d,
  loading: f = !1,
  motion: h,
  hoverable: g = !1,
  className: m,
  bodyClassName: p,
  children: v,
  ...y
}) => {
  const C = t, x = pe(o, "md"), k = oe(h), E = l ?? x;
  return /* @__PURE__ */ i(
    C,
    {
      "data-motion": k,
      "data-size": x,
      className: u(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        jl[c],
        g && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        m
      ),
      ...y,
      children: [
        b && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: b }),
        (r || n || d) && /* @__PURE__ */ i(
          "div",
          {
            className: u(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Pl[x]
            ),
            children: [
              /* @__PURE__ */ i("div", { className: "min-w-0", children: [
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
              (n || d) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                d && /* @__PURE__ */ e(jt, { tone: d.tone ?? "primary", size: "xs", dot: !1, children: d.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: u(Rl[E], p), children: f ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(Ge, { width: "45%", height: 14, motion: k }),
          /* @__PURE__ */ e(Ge, { width: "90%", height: 12, motion: k }),
          /* @__PURE__ */ e(Ge, { width: "70%", height: 12, motion: k })
        ] }) : v }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: u(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              zl[x]
            ),
            children: s
          }
        )
      ]
    }
  );
}, Ol = We.forwardRef(
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
Ol.displayName = "CardHeader";
const $l = We.forwardRef(
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
$l.displayName = "CardTitle";
const Wl = We.forwardRef(
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
Wl.displayName = "CardDescription";
const Fl = We.forwardRef(
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
Fl.displayName = "CardContent";
const Hl = We.forwardRef(
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
Hl.displayName = "CardFooter";
const ou = ({
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
) : r ? /* @__PURE__ */ i(
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
), Kl = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Ul = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, iu = ({
  direction: t = "horizontal",
  size: r,
  wrap: a = !1,
  align: n = "center",
  className: s,
  children: o,
  ...l
}) => {
  const c = pe(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Ul[n],
        Kl[c],
        a && "flex-wrap",
        s
      ),
      ...l,
      children: o
    }
  );
}, Vl = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, cu = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: o,
  ...l
}) => {
  const c = pe(r, "md"), b = oe(a), d = de(null), [f, h] = O({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ i(
    "div",
    {
      ref: d,
      "data-motion": b,
      "data-size": c,
      onMouseMove: (g) => {
        var p;
        const m = (p = d.current) == null ? void 0 : p.getBoundingClientRect();
        m && h({ x: g.clientX - m.left, y: g.clientY - m.top, active: !0 });
      },
      onMouseLeave: () => h((g) => ({ ...g, active: !1 })),
      className: u(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        Vl[c],
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
              b !== "none" && "transition-opacity duration-[var(--abc-motion-base)]"
            ),
            style: {
              opacity: f.active ? 1 : 0,
              background: `radial-gradient(360px circle at ${f.x}px ${f.y}px, ${t}, transparent 75%)`
            }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: o })
      ]
    }
  );
}, Ln = ({ duration: t = 8, motion: r, className: a }) => {
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
}, Rn = ({
  motion: t,
  className: r
}) => {
  const a = oe(t), n = a === "none";
  return /* @__PURE__ */ i(
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
}, ta = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Cs = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, rn = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, lu = ({
  title: t,
  value: r,
  prefix: a,
  suffix: n,
  trend: s,
  sparkline: o,
  icon: l,
  footer: c,
  loading: b = !1,
  hoverable: d = !0,
  size: f,
  motion: h,
  className: g,
  ...m
}) => {
  const p = pe(f, "md"), v = oe(h), y = Ke().replace(/:/g, ""), C = We.useMemo(() => {
    if (!o || o.length < 2) return null;
    const k = Math.min(...o), B = Math.max(...o) - k || 1, M = 120, N = 32, I = `M ${o.map((D, T) => {
      const R = T / (o.length - 1) * M, G = N - 4 - (D - k) / B * (N - 8);
      return `${R.toFixed(1)},${G.toFixed(1)}`;
    }).join(" L ")}`, S = `${I} L ${M},${N} L 0,${N} Z`;
    return { linePath: I, areaPath: S, width: M, height: N };
  }, [o]), x = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": v,
      "data-size": p,
      className: u(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        sr[p],
        d && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        g
      ),
      ...m,
      children: b ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(Ge, { width: "45%", height: 13, motion: v }),
          /* @__PURE__ */ e(Ge, { variant: "rounded", width: 30, height: 30, motion: v })
        ] }),
        /* @__PURE__ */ e(Ge, { width: "60%", height: 26, motion: v }),
        /* @__PURE__ */ e(Ge, { width: "80%", height: 18, motion: v })
      ] }) : /* @__PURE__ */ i(je, { children: [
        /* @__PURE__ */ i("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          l && /* @__PURE__ */ e(
            "span",
            {
              className: u(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                rn[p]
              ),
              children: l
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: Cs[p], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || C) && /* @__PURE__ */ i("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ i(
              "span",
              {
                className: u(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  x
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(ss, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(Ki, { className: "h-3 w-3" }) : /* @__PURE__ */ e(Zr, { className: "h-3 w-3" }),
                  s.value
                ]
              }
            ),
            s.label && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: s.label })
          ] }),
          C && /* @__PURE__ */ i(
            "svg",
            {
              viewBox: `0 0 ${C.width} ${C.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: `abc-spark-${y}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "var(--abc-primary)", stopOpacity: "0.28" }),
                  /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "var(--abc-primary)", stopOpacity: "0" })
                ] }) }),
                /* @__PURE__ */ e("path", { d: C.areaPath, fill: `url(#abc-spark-${y})` }),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: C.linePath,
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
}, Ss = Pa(null), Gl = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, du = ({
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: n,
  disabled: s = !1,
  size: o,
  motion: l,
  columns: c = 2,
  className: b,
  children: d
}) => {
  const f = Ke(), h = pe(o, "md"), g = oe(l), [m, p] = st({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), v = (y) => {
    if (!s)
      if (t) {
        const C = Array.isArray(m) ? m : [], k = C.includes(y) ? C.filter((E) => E !== y) : [...C, y];
        p(k);
      } else
        p(y);
  };
  return /* @__PURE__ */ e(
    Ss.Provider,
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
          className: u("grid gap-3", Gl[c], b),
          children: d
        }
      )
    }
  );
}, bu = ({
  value: t,
  title: r,
  description: a,
  avatar: n,
  icon: s,
  extra: o,
  checked: l,
  defaultChecked: c = !1,
  onChange: b,
  disabled: d = !1,
  size: f,
  motion: h,
  className: g,
  children: m
}) => {
  const p = Gr(Ss), v = pe(f ?? (p == null ? void 0 : p.size), "md"), y = oe(h ?? (p == null ? void 0 : p.motion)), C = !!(d || p != null && p.disabled), x = !!(p && t !== void 0), k = p && !p.multiple ? "radio" : "checkbox", [E, B] = st({
    value: l,
    defaultValue: c,
    onChange: b
  }), M = x ? p.multiple ? Array.isArray(p.value) && p.value.includes(t) : p.value === t : E, N = (w) => {
    C || (x ? p.toggleValue(t) : B(w));
  };
  return /* @__PURE__ */ i(
    "label",
    {
      "data-motion": y,
      "data-size": v,
      "data-checked": M ? "true" : "false",
      className: u(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        sr[v],
        M ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !C && !M && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        C ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
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
            checked: !!M,
            disabled: C,
            onChange: (w) => N(w.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: u(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              rn[v]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: u("font-semibold text-[var(--abc-fg)]", Cr[v]), children: r }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          a && /* @__PURE__ */ e("p", { className: u("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", ta[v]), children: a }),
          m && /* @__PURE__ */ e("div", { className: "mt-2", children: m })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: u(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              M ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, uu = ({
  title: t,
  description: r,
  icon: a,
  tags: n,
  extra: s,
  href: o,
  target: l,
  disabled: c = !1,
  onClick: b,
  size: d,
  motion: f,
  className: h
}) => {
  const g = pe(d, "md"), m = oe(f), p = !!((o || b) && !c), v = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ i(
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
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              a && /* @__PURE__ */ e(
                "span",
                {
                  className: u(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    rn[g]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: u("min-w-0 truncate", Cr[g]), children: o && !c ? /* @__PURE__ */ e(
                "a",
                {
                  href: o,
                  target: l,
                  rel: l === "_blank" ? "noreferrer" : void 0,
                  onClick: () => b == null ? void 0 : b(),
                  className: u(v, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : b && !c ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: b,
                  className: u(v, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          r && /* @__PURE__ */ e("p", { className: u("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", ta[g]), children: r })
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
}, Yl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, mu = ({
  title: t,
  subtitle: r,
  icon: a,
  extra: n,
  defaultOpen: s = !0,
  open: o,
  onOpenChange: l,
  size: c,
  motion: b,
  className: d,
  bodyClassName: f,
  children: h
}) => {
  const g = pe(c, "md"), m = oe(b), p = Ke(), [v, y] = st({
    value: o,
    defaultValue: s,
    onChange: l
  });
  return /* @__PURE__ */ i(
    "section",
    {
      "data-motion": m,
      "data-size": g,
      className: u(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        d
      ),
      children: [
        /* @__PURE__ */ i("div", { className: u("flex items-center justify-between gap-3", Yl[g]), children: [
          /* @__PURE__ */ i(
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
                /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: u("truncate font-semibold text-[var(--abc-fg)]", Cr[g]), children: t }),
                  r && /* @__PURE__ */ e("div", { className: "truncate text-[11px] text-[var(--abc-fg-muted)]", children: r })
                ] })
              ]
            }
          ),
          n && /* @__PURE__ */ e(
            "div",
            {
              onClick: (C) => C.stopPropagation(),
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
}, fu = ({
  tier: t,
  price: r,
  period: a = "/ 月",
  description: n,
  features: s,
  recommended: o = !1,
  badge: l = "推荐方案",
  ctaText: c = "选择此方案",
  disabled: b = !1,
  loading: d = !1,
  onSelect: f,
  size: h,
  motion: g,
  className: m
}) => {
  const p = pe(h, "md"), v = oe(g);
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": v,
      "data-size": p,
      className: u(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        sr[p],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        m
      ),
      children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: u("font-bold text-[var(--abc-fg)]", Cr[p]), children: t }),
            o && l && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(Nr, { className: "h-2.5 w-2.5" }),
              l
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: u("mt-1.5 text-[var(--abc-fg-muted)]", ta[p]), children: n }),
          /* @__PURE__ */ i("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: u("font-extrabold text-[var(--abc-fg)]", Cs[p]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((y, C) => {
            const x = typeof y == "string" ? { text: y, included: !0 } : y, k = x.included !== !1;
            return /* @__PURE__ */ i(
              "li",
              {
                className: u(
                  "flex items-start gap-2 text-xs",
                  k ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  k ? /* @__PURE__ */ e(Ue, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(Ve, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: x.text })
                ]
              },
              C
            );
          }) })
        ] }),
        f && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          ke,
          {
            variant: o ? "primary" : "secondary",
            size: p,
            motion: v,
            block: !0,
            disabled: b,
            loading: d,
            onClick: f,
            children: c
          }
        ) })
      ]
    }
  );
}, Xl = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, pu = ({
  columns: t = 3,
  gap: r,
  className: a,
  children: n,
  ...s
}) => {
  const o = pe(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "grid auto-rows-[minmax(148px,auto)]",
        Xl[t],
        ql[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, ql = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, hu = ({
  colSpan: t = 1,
  rowSpan: r = 1,
  eyebrow: a,
  title: n,
  description: s,
  icon: o,
  graphic: l,
  footer: c,
  hoverable: b = !0,
  size: d,
  motion: f,
  className: h,
  children: g,
  ...m
}) => {
  const p = pe(d, "md"), v = oe(f), y = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", C = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": v,
      "data-size": p,
      className: u(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        sr[p],
        y,
        C,
        b && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        h
      ),
      ...m,
      children: [
        /* @__PURE__ */ i("div", { children: [
          (a || o) && /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: u("font-bold text-[var(--abc-fg)]", Cr[p]), children: n }),
          s && /* @__PURE__ */ e("p", { className: u("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", ta[p]), children: s })
        ] }),
        l && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: l }),
        g,
        c && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, Zl = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, vu = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const o = pe(a, "sm"), l = oe(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": l,
      className: u("abc-breadcrumb", Zl[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((c, b) => {
        const d = b === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ i(
          "a",
          {
            href: c.href ?? "#",
            "aria-current": d ? "page" : void 0,
            onClick: (f) => {
              var h;
              (!c.href || c.href === "#" || c.onClick) && f.preventDefault(), d || (h = c.onClick) == null || h.call(c, f);
            },
            className: u(
              "abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              d ? "font-semibold text-[var(--abc-fg)] cursor-default no-underline" : "text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer"
            ),
            children: [
              c.icon && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: c.icon }),
              /* @__PURE__ */ e("span", { children: c.label })
            ]
          }
        ) }, c.key ?? b);
      }) })
    }
  );
}, Jl = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, Ql = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, gu = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: l,
  className: c
}) => {
  const b = n === "vertical", d = pe(s, "sm"), f = oe(o);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": f,
      className: u(
        "m-0 list-none p-0",
        b ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        c
      ),
      children: t.map((h, g) => {
        const m = h.status ?? (g < r ? "finish" : g === r ? a : "wait"), p = !!(l && !h.disabled), v = g === t.length - 1, y = m === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : m === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : m === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ i(
          "li",
          {
            className: u(
              "relative flex min-w-0",
              b ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ i(
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
                          Jl[d],
                          y
                        ),
                        children: h.icon ? h.icon : m === "finish" ? /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" }) : m === "error" ? /* @__PURE__ */ e(Dt, { className: "h-3.5 w-3.5" }) : g + 1
                      }
                    ),
                    /* @__PURE__ */ i("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: u(
                            "block font-semibold",
                            Ql[d],
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
              !v && !b && /* @__PURE__ */ e(
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
}, ed = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, td = {
  xs: "px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]",
  sm: "px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]",
  md: "px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]",
  lg: "px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]"
};
function xu({
  options: t,
  value: r,
  onChange: a,
  onValueChange: n,
  disabled: s = !1,
  size: o,
  motion: l,
  block: c = !1,
  className: b,
  ...d
}) {
  const f = pe(o, "sm"), h = oe(l), g = a ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "segmented-control",
      "data-motion": h,
      className: u(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        c ? "flex w-full" : "inline-flex",
        ed[f],
        b
      ),
      ...d,
      children: t.map((m) => {
        const p = m.value === r, v = s || !!m.disabled;
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: v,
            onClick: () => g == null ? void 0 : g(m.value),
            className: u(
              "inline-flex cursor-pointer select-none items-center justify-center gap-1.5 font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              c && "flex-1",
              td[f],
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
const Qe = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: l
}) => {
  const c = oe(s), [b, d] = O(!1), [f, h] = O(!1), g = Ke(), m = de(null), p = de(null), v = de(null), y = de(null), C = ve(() => {
    typeof window > "u" || (v.current !== null && (window.clearTimeout(v.current), v.current = null), y.current !== null && (window.clearTimeout(y.current), y.current = null));
  }, []);
  be(() => () => C(), [C]);
  const x = ve(
    (T = !1) => {
      a || !t || (C(), h(!1), T || n <= 0 || typeof window > "u" ? d(!0) : v.current = window.setTimeout(() => {
        d(!0), v.current = null;
      }, n));
    },
    [a, t, n, C]
  ), k = ve(() => {
    if (C(), typeof window > "u") {
      d(!1);
      return;
    }
    y.current = window.setTimeout(() => {
      d(!1), y.current = null;
    }, 60);
  }, [C]), E = ve(() => {
    C(), h(!0), d(!1);
  }, [C]), { isMounted: B, isVisible: M } = $t(
    b && !a && !!t,
    c === "none" || f ? 0 : 100
  ), { style: N, actualSide: w, arrowOffset: I, portalContainer: S } = kr({
    open: B,
    triggerRef: m,
    floatingRef: p,
    placement: r,
    offset: 8
  });
  if (be(() => {
    if (!b) return;
    const T = (R) => {
      R.key === "Escape" && E();
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [b, E]), !t || a) return /* @__PURE__ */ e(je, { children: o });
  const D = w === "top" ? { left: `${I}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "bottom" ? { left: `${I}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "left" ? { top: `${I}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${I}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: m,
        "data-motion": c,
        "aria-describedby": b ? g : void 0,
        onMouseEnter: () => x(!1),
        onMouseLeave: k,
        onFocus: () => x(!0),
        onBlur: E,
        onPointerDown: E,
        className: u("inline-flex items-center", l),
        children: o
      }
    ),
    B && S && dt(
      /* @__PURE__ */ i(
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
            c !== "none" && (M ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "relative z-10 block", children: t }),
            /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                style: D,
                className: "pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
              }
            )
          ]
        }
      ),
      S
    )
  ] });
}, Qt = ({
  items: t = [],
  content: r,
  align: a,
  placement: n,
  trigger: s = "click",
  open: o,
  defaultOpen: l = !1,
  onOpenChange: c,
  motion: b,
  children: d,
  className: f,
  panelClassName: h
}) => {
  const g = oe(b), [m, p] = st({
    value: o,
    defaultValue: l,
    onChange: c
  }), { isMounted: v, isVisible: y } = $t(m, g === "none" ? 0 : 140), C = de(null), x = de(null), k = de(null), E = Ke(), B = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: M, actualSide: N, portalContainer: w } = kr({
    open: v,
    triggerRef: C,
    floatingRef: x,
    placement: B,
    offset: 6
  }), I = ve(() => {
    k.current !== null && typeof window < "u" && (window.clearTimeout(k.current), k.current = null);
  }, []);
  be(() => () => I(), [I]);
  const S = ve(() => {
    s === "hover" && (I(), p(!0));
  }, [s, I, p]), D = ve(() => {
    s === "hover" && (I(), typeof window < "u" && (k.current = window.setTimeout(() => {
      p(!1), k.current = null;
    }, 140)));
  }, [s, I, p]), T = ve((P) => {
    var K;
    const W = x.current;
    if (!W) return;
    const Y = Array.from(
      W.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (Y.length === 0) return;
    const F = (P % Y.length + Y.length) % Y.length;
    (K = Y[F]) == null || K.focus();
  }, []);
  be(() => {
    if (!m) return;
    const P = (Y) => {
      var K, ne;
      const F = Y.target;
      (K = C.current) != null && K.contains(F) || (ne = x.current) != null && ne.contains(F) || p(!1);
    }, W = (Y) => {
      var F;
      if (Y.key === "Escape") {
        Y.preventDefault(), Y.stopPropagation(), p(!1);
        const K = (F = C.current) == null ? void 0 : F.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        K == null || K.focus();
      }
    };
    return document.addEventListener("mousedown", P), document.addEventListener("keydown", W, !0), () => {
      document.removeEventListener("mousedown", P), document.removeEventListener("keydown", W, !0);
    };
  }, [m, p]);
  const R = !r, G = (P) => {
    P.key === "ArrowDown" ? (P.preventDefault(), p(!0), R && typeof window < "u" && window.requestAnimationFrame(() => T(0))) : (P.key === "Enter" || P.key === " ") && P.target === P.currentTarget && (P.preventDefault(), p(!m));
  }, X = (P) => {
    if (!R) return;
    const W = x.current;
    if (!W) return;
    const Y = Array.from(
      W.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (Y.length === 0) return;
    const F = Y.indexOf(document.activeElement);
    P.key === "ArrowDown" ? (P.preventDefault(), T(F < 0 ? 0 : F + 1)) : P.key === "ArrowUp" ? (P.preventDefault(), T(F <= 0 ? Y.length - 1 : F - 1)) : P.key === "Home" ? (P.preventDefault(), T(0)) : P.key === "End" && (P.preventDefault(), T(Y.length - 1));
  }, j = s === "hover" ? N === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : N === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : N === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: C,
        "data-motion": g,
        onMouseEnter: S,
        onMouseLeave: D,
        className: u("inline-flex", f),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": m,
            "aria-controls": m ? E : void 0,
            "aria-haspopup": R ? "menu" : void 0,
            onClick: () => p(!m),
            onKeyDown: G,
            className: "inline-flex cursor-pointer items-center",
            children: d
          }
        )
      }
    ),
    v && w && dt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: x,
          id: E,
          role: R ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": g,
          "data-placement": N,
          style: M,
          onMouseEnter: S,
          onMouseLeave: D,
          onKeyDown: X,
          className: u(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            j,
            g !== "none" && (y ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            h
          ),
          children: r || t.map(
            (P) => P.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, P.key) : /* @__PURE__ */ i(We.Fragment, { children: [
              P.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: P.disabled,
                  onClick: () => {
                    var W;
                    P.disabled || ((W = P.onClick) == null || W.call(P), p(!1));
                  },
                  className: u(
                    "abc-motion-control flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
                    P.danger ? "text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    P.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    P.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: P.icon }),
                    /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: P.label })
                  ]
                }
              )
            ] }, P.key)
          )
        }
      ),
      w
    )
  ] });
}, Is = ({
  title: t,
  content: r,
  align: a,
  placement: n,
  panelClassName: s,
  ...o
}) => {
  const l = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    Qt,
    {
      ...o,
      placement: n ?? (l && l === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: u(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, Ms = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Aa = ({
  label: t,
  htmlFor: r,
  required: a = !1,
  tooltip: n,
  error: s,
  helperText: o,
  extra: l,
  layout: c = "vertical",
  size: b,
  motion: d,
  className: f,
  children: h
}) => {
  const g = pe(b, "sm"), m = oe(d);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": m,
      className: u(
        c === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        f
      ),
      children: [
        (t || l) && /* @__PURE__ */ i(
          "div",
          {
            className: u(
              "flex items-center justify-between gap-2",
              c === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ i(
                "label",
                {
                  htmlFor: r,
                  className: u(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    Ms[g]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(Qe, { content: n, children: /* @__PURE__ */ e(yr, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
                  ]
                }
              ),
              l && /* @__PURE__ */ e("div", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
          h,
          s ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] font-medium text-[var(--abc-danger)]", children: s }) : o && /* @__PURE__ */ e("p", { className: "mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: o })
        ] })
      ]
    }
  );
}, rd = We.forwardRef(
  ({ className: t, size: r = "sm", required: a, children: n, ...s }, o) => /* @__PURE__ */ i(
    "label",
    {
      ref: o,
      className: u(
        "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
        Ms[r] || "text-xs",
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
rd.displayName = "Label";
const ad = Ae.forwardRef(
  ({
    className: t,
    containerClassName: r,
    wrapperClassName: a,
    onClear: n,
    clearLabel: s = "清空搜索",
    size: o = "sm",
    ...l
  }, c) => /* @__PURE__ */ e("div", { className: u("relative block min-w-[200px]", r, a), children: /* @__PURE__ */ e(
    rt,
    {
      ref: c,
      size: o,
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
ad.displayName = "SearchInput";
const Pn = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, zn = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, nd = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, xr = We.forwardRef(
  ({
    id: t,
    checked: r,
    defaultChecked: a = !1,
    indeterminate: n = !1,
    onChange: s,
    disabled: o = !1,
    size: l,
    motion: c,
    label: b,
    description: d,
    className: f,
    ...h
  }, g) => {
    const m = pe(l, "sm"), p = oe(c), v = Ke(), y = t || v, C = de(null);
    Yr(g, () => C.current, []);
    const [x, k] = st({
      value: r,
      defaultValue: a
    });
    be(() => {
      C.current && (C.current.indeterminate = !!n);
    }, [n]);
    const E = !!(b || d);
    return /* @__PURE__ */ i(
      "label",
      {
        htmlFor: y,
        "data-motion": p,
        className: u(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          nd[m],
          E ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          f
        ),
        children: [
          /* @__PURE__ */ i(
            "span",
            {
              className: u(
                "relative inline-flex shrink-0 items-center justify-center",
                Pn[m],
                E && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...h,
                    ref: C,
                    id: y,
                    type: "checkbox",
                    checked: x,
                    disabled: o,
                    onChange: (B) => {
                      if (o) return;
                      const M = B.target.checked;
                      k(M), s == null || s(M, B);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: u(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      Pn[m],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      x || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(Zr, { className: u(zn[m], "stroke-[2.5] abc-motion-pop") }) : x && /* @__PURE__ */ e(Ue, { className: u(zn[m], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          E && /* @__PURE__ */ i("span", { className: "flex flex-col", children: [
            b && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: b }),
            d && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: d })
          ] })
        ]
      }
    );
  }
);
xr.displayName = "Checkbox";
const sd = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, od = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, id = {
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
  size: o,
  motion: l,
  checkedLabel: c,
  uncheckedLabel: b,
  checkedChildren: d,
  unCheckedChildren: f,
  ariaLabel: h,
  className: g
}) => {
  const p = pe(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), v = oe(l), [y, C] = st({
    value: t,
    defaultValue: r,
    onChange: a
  }), x = !!(n || s), k = c ?? d, E = b ?? f;
  return /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": y,
      "aria-label": h,
      disabled: x,
      "data-motion": v,
      onClick: () => {
        x || C(!y);
      },
      className: u(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sd[p],
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
              y ? od[p] : id[p]
            ),
            children: s && /* @__PURE__ */ e(Bt, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (k || E) && /* @__PURE__ */ e("span", { className: "sr-only", children: y ? k : E })
      ]
    }
  );
}, cd = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, ld = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, dd = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, bd = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, ud = {
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
  size: o,
  motion: l,
  disabled: c = !1,
  className: b
}) => {
  var m;
  const d = pe(o, "sm"), f = oe(l), [h, g] = st({
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
        cd[d],
        b
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
              ld[d],
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
      className: u("inline-flex flex-wrap items-center gap-4", b),
      children: t.map((p) => {
        const v = String(h) === String(p.value), y = !!(c || p.disabled);
        return /* @__PURE__ */ i(
          "label",
          {
            className: u(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              ud[d],
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
                    dd[d],
                    v ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: v && /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        bd[d]
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
}, Ts = ["日", "一", "二", "三", "四", "五", "六"], Es = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Da = We.forwardRef(
  ({
    value: t,
    defaultValue: r = "",
    onChange: a,
    placeholder: n = "请选择日期",
    allowClear: s,
    clearable: o,
    disabled: l = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: d,
    name: f,
    minDate: h,
    maxDate: g,
    size: m,
    motion: p,
    className: v
  }, y) => {
    const C = pe(m, "sm"), x = oe(p), k = Ke(), E = d || k, B = de(null), M = de(null);
    Yr(y, () => B.current, []);
    const N = t !== void 0, [w, I] = O(r), S = N ? t ?? "" : w, [D, T] = O(!1), [R, G] = O({ top: 0, left: 0 }), [X, j] = O(
      () => S && Ee(S).isValid() ? Ee(S) : Ee()
    ), W = !!((s ?? o ?? !0) && S && !l);
    be(() => {
      D && j(
        S && Ee(S).isValid() ? Ee(S) : Ee()
      );
    }, [D, S]);
    const Y = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      { label: "今天", value: () => Ee().format(c) },
      { label: "昨天", value: () => Ee().subtract(1, "day").format(c) },
      { label: "明天", value: () => Ee().add(1, "day").format(c) },
      { label: "一周前", value: () => Ee().subtract(7, "day").format(c) }
    ], [b, c]);
    be(() => {
      if (!D) return;
      const $ = () => {
        if (!B.current || typeof window > "u") return;
        const q = B.current.getBoundingClientRect(), U = Y.length > 0 ? 340 : 300, re = 280, he = window.innerHeight - q.bottom < U && q.top > U ? q.top - U - 4 : q.bottom + 4;
        let A = q.left;
        A + re > window.innerWidth - 8 && (A = Math.max(8, window.innerWidth - re - 8)), G({ top: Math.max(8, he), left: Math.max(8, A) });
      };
      return $(), window.addEventListener("resize", $), window.addEventListener("scroll", $, !0), () => {
        window.removeEventListener("resize", $), window.removeEventListener("scroll", $, !0);
      };
    }, [D, Y.length]), be(() => {
      if (!D) return;
      const $ = (U) => {
        var Q, he;
        const re = U.target;
        (Q = B.current) != null && Q.contains(re) || (he = M.current) != null && he.contains(re) || T(!1);
      }, q = (U) => {
        U.key === "Escape" && (U.preventDefault(), U.stopPropagation(), T(!1));
      };
      return document.addEventListener("mousedown", $), document.addEventListener("keydown", q, !0), () => {
        document.removeEventListener("mousedown", $), document.removeEventListener("keydown", q, !0);
      };
    }, [D]);
    const F = ($) => {
      N || I($), a == null || a($);
    }, K = ce(
      () => Ma(X.year(), X.month()),
      [X]
    ), ne = ce(() => {
      if (!S) return "";
      const $ = Ee(S);
      return $.isValid() ? $.format("YYYY-MM-DD") : S;
    }, [S]);
    return /* @__PURE__ */ i(je, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: B,
          id: E,
          "data-datepicker-trigger": "",
          "data-motion": x,
          role: "combobox",
          "aria-expanded": D,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && T(($) => !$),
          onKeyDown: ($) => {
            !l && ($.key === "Enter" || $.key === " ") && ($.preventDefault(), T((q) => !q));
          },
          className: u(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            Lt,
            Es[C],
            D && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            v
          ),
          children: [
            /* @__PURE__ */ e(Fa, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: n,
                value: S,
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
                onClick: ($) => {
                  $.stopPropagation(), F("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ve, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      D && typeof document < "u" && dt(
        /* @__PURE__ */ i(
          "div",
          {
            ref: M,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": x,
            "aria-label": "日期选择面板",
            style: { top: R.top, left: R.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              Y.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: Y.map(($) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const q = typeof $.value == "function" ? $.value() : $.value;
                    F(q), T(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: $.label
                },
                $.label
              )) }),
              /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => j(($) => $.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => j(($) => $.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(zr, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: X.format("YYYY 年 M 月") }),
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => j(($) => $.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => j(($) => $.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Ts.map(($) => /* @__PURE__ */ e("span", { className: "py-1", children: $ }, $)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: K.map(($) => {
                const q = Ee($.iso), U = c === "YYYY-MM-DD" ? $.iso : q.format(c), re = $.iso === ne, Q = !!(h && q.isBefore(Ee(h), "day") || g && q.isAfter(Ee(g), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": U,
                    disabled: Q,
                    onClick: () => {
                      Q || (F(U), T(!1));
                    },
                    className: u(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      re ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : $.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      $.isToday && !re && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: $.day
                  },
                  $.iso
                );
              }) })
            ]
          }
        ),
        Jr(B.current) ?? document.body
      )
    ] });
  }
);
Da.displayName = "DatePicker";
function ha(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const Ba = We.forwardRef(
  ({
    value: t,
    defaultValue: r,
    onChange: a,
    placeholder: n = ["开始日期", "结束日期"],
    allowClear: s,
    clearable: o,
    disabled: l = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: d,
    minDate: f,
    maxDate: h,
    size: g,
    motion: m,
    className: p
  }, v) => {
    const y = pe(g, "sm"), C = oe(m), x = Ke(), k = d || x, E = de(null), B = de(null);
    Yr(v, () => E.current, []);
    const M = Array.isArray(t) || t === void 0 && Array.isArray(r), N = t !== void 0, [w, I] = O(
      () => ha(r)
    ), S = N ? ha(t) : w, [D, T] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [R, G] = O(!1), [X, j] = O({ top: 0, left: 0 }), [P, W] = O(null), [Y, F] = O(null), [K, ne] = O(
      () => S.start && Ee(S.start).isValid() ? Ee(S.start) : Ee()
    ), $ = ce(() => K.add(1, "month"), [K]), U = !!((s ?? o ?? !0) && (S.start || S.end) && !l);
    be(() => {
      R ? (W(null), F(null), ne(
        S.start && Ee(S.start).isValid() ? Ee(S.start) : Ee()
      )) : (W(null), F(null));
    }, [R, S.start]);
    const re = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      {
        label: "今天",
        getValue: () => {
          const ee = Ee().format(c);
          return { start: ee, end: ee };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: Ee().subtract(6, "day").format(c),
          end: Ee().format(c)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: Ee().subtract(29, "day").format(c),
          end: Ee().format(c)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: Ee().startOf("month").format(c),
          end: Ee().format(c)
        })
      }
    ], [b, c]);
    be(() => {
      if (!R) return;
      const ee = () => {
        if (!E.current || typeof window > "u") return;
        const ue = E.current.getBoundingClientRect(), se = re.length > 0 ? 370 : 330, ie = 556, le = window.innerHeight - ue.bottom < se && ue.top > se ? ue.top - se - 4 : ue.bottom + 4;
        let H = ue.left;
        H + ie > window.innerWidth - 8 && (H = Math.max(8, window.innerWidth - ie - 8)), j({ top: Math.max(8, le), left: Math.max(8, H) });
      };
      return ee(), window.addEventListener("resize", ee), window.addEventListener("scroll", ee, !0), () => {
        window.removeEventListener("resize", ee), window.removeEventListener("scroll", ee, !0);
      };
    }, [R, re.length]), be(() => {
      if (!R) return;
      const ee = (se) => {
        var ge, le;
        const ie = se.target;
        (ge = E.current) != null && ge.contains(ie) || (le = B.current) != null && le.contains(ie) || G(!1);
      }, ue = (se) => {
        se.key === "Escape" && (se.preventDefault(), se.stopPropagation(), G(!1));
      };
      return document.addEventListener("mousedown", ee), document.addEventListener("keydown", ue, !0), () => {
        document.removeEventListener("mousedown", ee), document.removeEventListener("keydown", ue, !0);
      };
    }, [R]);
    const Q = (ee) => {
      N || I(ee), M ? a == null || a([ee.start, ee.end]) : a == null || a(ee);
    }, he = ce(() => {
      if (P) {
        const ee = Ee(P);
        if (!Y) return { start: ee, end: null };
        const ue = Ee(Y);
        return ue.isBefore(ee, "day") ? { start: ue, end: ee } : { start: ee, end: ue };
      }
      return {
        start: S.start && Ee(S.start).isValid() ? Ee(S.start) : null,
        end: S.end && Ee(S.end).isValid() ? Ee(S.end) : null
      };
    }, [P, Y, S]), A = ce(
      () => Ma(K.year(), K.month()),
      [K]
    ), V = ce(
      () => Ma($.year(), $.month()),
      [$]
    ), Ce = (ee) => {
      const ue = Ee(ee), se = c === "YYYY-MM-DD" ? ee : ue.format(c);
      if (!P) {
        W(se), F(null);
        return;
      }
      const ie = Ee(P), [ge, le] = ue.isBefore(ie, "day") ? [ue, ie] : [ie, ue];
      Q({ start: ge.format(c), end: le.format(c) }), W(null), F(null), G(!1);
    }, we = (ee, ue, se) => /* @__PURE__ */ i("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
        se === "left" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => ne((ie) => ie.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => ne((ie) => ie.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(zr, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: ee.format("YYYY 年 M 月") }),
        se === "right" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => ne((ie) => ie.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => ne((ie) => ie.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Ts.map((ie) => /* @__PURE__ */ e("span", { className: "py-1", children: ie }, ie)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: ue.map((ie) => {
        const ge = Ee(ie.iso), le = c === "YYYY-MM-DD" ? ie.iso : ge.format(c), H = !!(he.start && ge.isSame(he.start, "day")), z = !!(he.end && ge.isSame(he.end, "day")), Z = !!(he.start && he.end && ge.isAfter(he.start, "day") && ge.isBefore(he.end, "day")), xe = !!(f && ge.isBefore(Ee(f), "day") || h && ge.isAfter(Ee(h), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": le,
            disabled: xe,
            onMouseEnter: () => P && F(le),
            onClick: () => !xe && Ce(ie.iso),
            className: u(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              H || z ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : Z ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : ie.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              ie.isToday && !H && !z && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: ie.day
          },
          `${se}-${ie.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ i(je, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: E,
          id: k,
          "data-daterangepicker-trigger": "",
          "data-motion": C,
          role: "combobox",
          "aria-expanded": R,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && G((ee) => !ee),
          onKeyDown: (ee) => {
            !l && (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), G((ue) => !ue));
          },
          className: u(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            Lt,
            Es[y],
            R && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            p
          ),
          children: [
            /* @__PURE__ */ e(Fa, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: D,
                value: S.start,
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
                placeholder: T,
                value: S.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            U && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (ee) => {
                  ee.stopPropagation(), Q({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ve, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      R && typeof document < "u" && dt(
        /* @__PURE__ */ i(
          "div",
          {
            ref: B,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": C,
            "aria-label": "日期范围选择面板",
            style: { top: X.top, left: X.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              re.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: re.map((ee) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const ue = ee.getValue(), se = ha(ue);
                    Q(se), W(null), F(null), G(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: ee.label
                },
                ee.label
              )) }),
              /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: we(K, A, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: we($, V, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: P ? `已选起始日：${P}，请继续点击截止日期` : S.start && S.end ? `已选区间：${S.start} 至 ${S.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        Jr(E.current) ?? document.body
      )
    ] });
  }
);
Ba.displayName = "DateRangePicker";
const md = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, fd = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function pd(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function hd(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const vd = ({
  value: t = "",
  onChange: r,
  label: a,
  helperText: n,
  error: s,
  accept: o = "image/*,.svg",
  maxSizeMB: l = 5,
  disabled: c = !1,
  customUpload: b,
  size: d,
  motion: f,
  placeholder: h = "点击或拖拽图片至此处上传",
  className: g
}) => {
  const m = pe(d, "sm"), p = oe(f), v = Ke(), y = de(null), { uploadAdapter: C, toast: x } = Ye(), [k, E] = O(!1), [B, M] = O(!1), [N, w] = O(!1), I = async (T) => {
    if (!T || c || k) return;
    if (!(T.type.startsWith("image/") || T.name.toLowerCase().endsWith(".svg"))) {
      x.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (T.size >= l * 1024 * 1024) {
      x.error(`上传图片大小不能超过 ${l}MB`);
      return;
    }
    E(!0);
    try {
      const X = await (b ?? C ?? hd)(T);
      X ? (r == null || r(X), x.success("上传成功")) : x.error("上传失败，未获取到图片地址");
    } catch (G) {
      x.error((G == null ? void 0 : G.message) || "上传图片失败，请重试");
    } finally {
      E(!1), y.current && (y.current.value = "");
    }
  }, S = (t == null ? void 0 : t.trim()) ?? "", D = pd(S);
  return /* @__PURE__ */ i("div", { "data-motion": p, className: "w-full", children: [
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
        accept: o,
        disabled: c || k,
        onChange: (T) => {
          var R;
          return I((R = T.target.files) == null ? void 0 : R[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        onClick: () => {
          var T;
          !S && !c && !k && ((T = y.current) == null || T.click());
        },
        onDragOver: (T) => {
          T.preventDefault(), T.stopPropagation(), !c && !k && M(!0);
        },
        onDragLeave: (T) => {
          T.preventDefault(), T.stopPropagation(), M(!1);
        },
        onDrop: (T) => {
          var R;
          T.preventDefault(), T.stopPropagation(), M(!1), !c && !k && I((R = T.dataTransfer.files) == null ? void 0 : R[0]);
        },
        className: u(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          B ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !c && !B && "hover:border-[var(--abc-primary)]",
          !S && !c && "cursor-pointer",
          c && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          md[m],
          g
        ),
        children: [
          S ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: u(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  fd[m]
                ),
                children: [
                  D ? /* @__PURE__ */ e(
                    "div",
                    {
                      className: "flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full",
                      dangerouslySetInnerHTML: { __html: S }
                    }
                  ) : /* @__PURE__ */ e("img", { src: S, alt: "凭证预览", className: "h-full w-full object-contain p-1" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "查看大图",
                      title: "查看大图",
                      onClick: (T) => {
                        T.stopPropagation(), w(!0);
                      },
                      className: "absolute inset-0 flex items-center justify-center bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
                      children: /* @__PURE__ */ e(rr, { className: "h-4 w-4" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ i("div", { className: "flex flex-1 flex-col items-center space-y-1 text-center sm:items-start sm:text-left", children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-medium text-[var(--abc-fg)]", children: "已上传图片资源" }),
              /* @__PURE__ */ e("p", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: "支持点击放大预览、重新选择或移除" }),
              !c && /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5 pt-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: k,
                    onClick: (T) => {
                      var R;
                      T.stopPropagation(), (R = y.current) == null || R.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(tr, { className: u("h-3 w-3", k && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: k,
                    onClick: (T) => {
                      T.stopPropagation(), r == null || r("");
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
          ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Ui, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: h }),
            /* @__PURE__ */ i("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              l,
              "MB"
            ] })
          ] }),
          k && /* @__PURE__ */ i("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(Bt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
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
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: D ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: S }
          }
        ) : /* @__PURE__ */ e("img", { src: S, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, gd = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, yu = ({
  treeData: t,
  checkable: r = !1,
  checkStrictly: a = !1,
  checkedKeys: n,
  defaultCheckedKeys: s = [],
  onCheck: o,
  selectedKeys: l,
  onSelect: c,
  defaultExpandAll: b = !0,
  searchable: d = !1,
  searchPlaceholder: f = "搜索节点名称（支持拼音首字母）...",
  showToolbar: h = !1,
  size: g,
  motion: m,
  renderExtra: p,
  className: v
}) => {
  const y = pe(g, "sm"), C = oe(m), [x, k] = O(""), [E, B] = O(
    () => b ? new Set(ua(t)) : /* @__PURE__ */ new Set()
  ), [M, N] = O(s), [w, I] = O([]);
  be(() => {
    b && t.length > 0 && E.size === 0 && B(new Set(ua(t)));
  }, [t, b]);
  const S = n !== void 0 ? n : M, D = l !== void 0 ? l : w, { checkedKeys: T, halfCheckedKeys: R } = ce(
    () => ls(t, S, a),
    [t, S, a]
  ), G = ce(() => new Set(T), [T]), X = ce(() => new Set(R), [R]), { filteredNodes: j, autoExpandedKeys: P } = ce(
    () => vc(t, x),
    [t, x]
  ), W = ce(() => x.trim() ? /* @__PURE__ */ new Set([...E, ...P]) : E, [E, P, x]), Y = ($) => {
    B((q) => {
      const U = new Set(q);
      return U.has($) ? U.delete($) : U.add($), U;
    });
  }, F = ($, q) => {
    const U = hc(t, T, $, q, a);
    n === void 0 && N(U.checkedKeys), o == null || o(U.checkedKeys, {
      halfCheckedKeys: U.halfCheckedKeys,
      node: $,
      checked: q
    });
  }, K = ($) => {
    if ($.disabled) return;
    const q = [$.key];
    l === void 0 && I(q), c == null || c(q, $);
  }, ne = ($, q = 0) => /* @__PURE__ */ e("ul", { role: q === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: $.map((U) => {
    const re = !!(U.children && U.children.length > 0), Q = W.has(U.key), he = G.has(U.key), A = X.has(U.key), V = D.includes(U.key);
    return /* @__PURE__ */ i("li", { role: "treeitem", "aria-expanded": re ? Q : void 0, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { paddingInlineStart: `${q * 18 + 6}px` },
          className: u(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            gd[y],
            V ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            U.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              re ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": Q ? `收起 ${U.title}` : `展开 ${U.title}`,
                  onClick: () => Y(U.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    gt,
                    {
                      className: u(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        Q && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                xr,
                {
                  size: y,
                  motion: C,
                  checked: he,
                  indeterminate: A,
                  disabled: U.disabled,
                  onChange: (Ce) => F(U, Ce)
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  disabled: U.disabled,
                  onClick: () => {
                    r && !c ? F(U, !he) : K(U);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    U.icon && /* @__PURE__ */ e(zt, { name: U.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: U.title })
                  ]
                }
              )
            ] }),
            p && /* @__PURE__ */ e("div", { className: "shrink-0", children: p(U) })
          ]
        }
      ),
      re && Q && ne(U.children, q + 1)
    ] }, U.key);
  }) });
  return /* @__PURE__ */ i("div", { "data-motion": C, className: u("space-y-2", v), children: [
    (d || h) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
      d && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        rt,
        {
          size: y,
          motion: C,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }),
          placeholder: f,
          value: x,
          onChange: ($) => k($.target.value)
        }
      ) }),
      h && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => B(new Set(ua(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Gi, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => B(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Yi, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: j.length > 0 ? ne(j) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, xd = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, yd = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, wd = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: o = !1,
  size: l,
  motion: c,
  className: b
}) => {
  const d = pe(l, "sm"), f = oe(c), [h, g] = O(r), [m, p] = O(""), v = t !== void 0 ? t : h, y = (k) => {
    t === void 0 && g(k), a == null || a(k);
  }, C = () => {
    const k = m.trim();
    if (!(!k || o)) {
      if (v.includes(k) || v.length >= s) {
        p("");
        return;
      }
      y([...v, k]), p("");
    }
  }, x = (k) => {
    o || y(v.filter((E, B) => B !== k));
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: u(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        xd[d],
        Lt,
        o && "opacity-65 cursor-not-allowed",
        b
      ),
      children: [
        v.map((k, E) => /* @__PURE__ */ i(
          "span",
          {
            className: u(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              yd[d]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: k }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${k}`,
                  onClick: () => x(E),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ve, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${k}_${E}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: o || v.length >= s,
            value: m,
            placeholder: v.length === 0 ? n : "",
            onChange: (k) => p(k.target.value),
            onBlur: C,
            onKeyDown: (k) => {
              k.key === "Enter" || k.key === "," ? (k.preventDefault(), C()) : k.key === "Backspace" && !m && v.length > 0 && x(v.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function jn(t, r) {
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
const Nd = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, wu = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: l
}) => {
  const c = pe(a, "md"), b = oe(n), { captchaAdapter: d } = Ye(), f = l ?? d, [h, g] = O(null), [m, p] = O(!0), [v, y] = O(!1), [C, x] = O(!1), [k, E] = O(0), [B, M] = O(0), N = de(!1), w = de(0), I = de(0), S = ve(async () => {
    p(!0), y(!1), x(!1), E(0), M(0);
    try {
      if (f) {
        const G = await f();
        g(G);
      } else
        g(jn(t, r));
    } catch {
      g(jn(t, r));
    } finally {
      p(!1);
    }
  }, [f, t, r]);
  be(() => {
    S();
  }, [S]);
  const D = (G) => {
    m || v || (N.current = !0, w.current = G, I.current = Date.now());
  }, T = ve(
    (G) => {
      if (!N.current || m || v) return;
      const X = G - w.current, j = t - 40, P = Math.max(0, Math.min(j, X));
      E(P), M((t - 60) / j * P);
    },
    [t, m, v]
  ), R = ve(() => {
    if (!N.current || m || v) return;
    if (N.current = !1, Date.now() - I.current > 1e4 || !h) {
      x(!0), o == null || o(), setTimeout(S, 600);
      return;
    }
    const X = Math.round(B);
    if (typeof h.targetX == "number" && Math.abs(X - h.targetX) > 10) {
      x(!0), o == null || o(), setTimeout(S, 550);
      return;
    }
    y(!0), s({
      nonceStr: h.nonceStr,
      value: X
    });
  }, [B, h, m, v, o, s, S]);
  return be(() => {
    const G = (W) => T(W.clientX), X = () => R(), j = (W) => {
      W.touches[0] && T(W.touches[0].clientX);
    }, P = () => R();
    return window.addEventListener("mousemove", G), window.addEventListener("mouseup", X), window.addEventListener("touchmove", j), window.addEventListener("touchend", P), () => {
      window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", X), window.removeEventListener("touchmove", j), window.removeEventListener("touchend", P);
    };
  }, [T, R]), /* @__PURE__ */ i("div", { "data-motion": b, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          m ? /* @__PURE__ */ i("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : h && /* @__PURE__ */ i(je, { children: [
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
              onClick: S,
              className: "absolute top-2 right-2 rounded-[var(--abc-radius-sm)] bg-black/45 p-1.5 text-white backdrop-blur-xs transition-colors hover:bg-black/65 cursor-pointer",
              children: /* @__PURE__ */ e(qr, { className: u("h-3.5 w-3.5", m && "animate-spin") })
            }
          ),
          v && /* @__PURE__ */ i("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(Ct, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: u(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          Nd[c],
          v ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : C ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
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
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: v ? "验证成功" : C ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(k),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: (G) => D(G.clientX),
              onTouchStart: (G) => {
                G.touches[0] && D(G.touches[0].clientX);
              },
              className: u(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                v ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: k },
              children: v ? /* @__PURE__ */ e(Ct, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Vi, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}, Kr = ["B", "KB", "MB", "GB", "TB"], Ur = ["s", "m", "h", "d"], _s = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
}, As = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400
}, kd = ["TB", "GB", "MB", "KB", "B"], Cd = ["h", "m", "d", "s"];
function Vr(t, r = 2) {
  return Number.isFinite(t) ? t.toFixed(r).replace(/\.?0+$/, "") : "0";
}
function Ds(t, r) {
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
function Bs(t, r, a, n, s, o, l) {
  const c = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (c === 0)
    return { unit: n.includes(r) ? r : n[n.length - 1], amount: "0" };
  for (const d of s) {
    if (!n.includes(d)) continue;
    const f = o[d];
    if (c >= f && c % f === 0)
      return { unit: d, amount: String(c / f) };
  }
  const b = n.includes(a) ? a : n[0];
  return {
    unit: b,
    amount: Vr(c / o[b], l)
  };
}
function Ls(t, r = "GB", a = Kr) {
  const n = a.length > 0 ? a : Kr;
  return Bs(t, r, "B", n, kd, _s, 4);
}
function Rs(t, r = "h", a = Ur) {
  const n = a.length > 0 ? a : Ur;
  return Bs(
    t,
    r,
    "s",
    n,
    Cd,
    As,
    2
  );
}
function Nu(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = Ls(n);
  return `${o} ${s}`;
}
function ku(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = Rs(n);
  return `${o} ${Ds(s, r)}`;
}
function Sd(t, r, a) {
  let n = Math.max(r, Math.round(t));
  return typeof a == "number" && Number.isFinite(a) && (n = Math.min(a, n)), n;
}
function Ps({
  id: t,
  fallbackIdSuffix: r,
  value: a,
  onChange: n,
  min: s = 0,
  max: o,
  size: l = "default",
  disabled: c = !1,
  hideHint: b = !1,
  className: d,
  resolvedUnitLabel: f,
  factors: h,
  allowedUnits: g,
  pickBest: m,
  formatUnitLabel: p,
  buildHintText: v,
  "aria-label": y,
  "aria-describedby": C,
  placeholder: x
}) {
  const k = Ae.useId(), E = t ?? `${k}-${r}`, B = `${E}-hint`, M = Number.isFinite(a) && a >= 0 ? Math.round(a) : 0, N = Ae.useMemo(
    () => m(M),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [w, I] = Ae.useState(N.unit), [S, D] = Ae.useState(N.amount), T = Ae.useRef(M);
  Ae.useEffect(() => {
    if (M === T.current) return;
    T.current = M;
    const W = m(M);
    I(W.unit), D(W.amount);
  }, [M, m]);
  const R = h[w], G = (W) => {
    const Y = W.target.value;
    if (Y !== "" && !/^\d*\.?\d*$/.test(Y) || (D(Y), Y.trim() === "")) return;
    const F = Number(Y);
    if (!Number.isFinite(F) || F < 0) return;
    const K = Sd(F * R, s, o);
    T.current = K, n(K);
  }, X = (W) => {
    const Y = W.target.value;
    if (!g.includes(Y)) return;
    I(Y);
    const F = h[Y];
    D(M === 0 ? "0" : Vr(M / F, 2));
  }, j = () => {
    (S.trim() === "" || !Number.isFinite(Number(S)) || Number(S) < 0) && D(M === 0 ? "0" : Vr(M / R, 2));
  }, P = [C, b ? void 0 : B].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ i("div", { className: u("space-y-1", d), children: [
    /* @__PURE__ */ i(
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
              id: E,
              type: "number",
              step: R === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: c,
              value: S,
              "aria-label": y,
              "aria-describedby": P,
              placeholder: x,
              onChange: G,
              onBlur: j,
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
          /* @__PURE__ */ i("div", { className: "relative flex items-center shrink-0", children: [
            /* @__PURE__ */ e(
              "select",
              {
                "aria-label": f,
                disabled: c,
                value: w,
                onChange: X,
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
    !b && /* @__PURE__ */ e("div", { id: B, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: v(M, w) }) })
  ] });
}
function Cu({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "GB",
  allowedUnits: n = Kr,
  unitAriaLabel: s,
  ...o
}) {
  const l = n.length > 0 ? n : Kr, c = Ae.useCallback(
    (f) => Ls(f, a, l),
    [a, l]
  ), b = Ae.useCallback((f) => f, []), d = Ae.useCallback(
    (f) => f === 0 && r ? t === "zh" ? "= 0 (无上限)" : "= 0 (Unlimited)" : `= ${f.toLocaleString()} Bytes`,
    [t, r]
  );
  return /* @__PURE__ */ e(
    Ps,
    {
      ...o,
      fallbackIdSuffix: "bytes",
      factors: _s,
      allowedUnits: l,
      resolvedUnitLabel: s ?? (t === "zh" ? "字节单位" : "Byte unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: d
    }
  );
}
function Su({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "h",
  allowedUnits: n = Ur,
  unitAriaLabel: s,
  ...o
}) {
  const l = n.length > 0 ? n : Ur, c = Ae.useCallback(
    (f) => Rs(f, a, l),
    [a, l]
  ), b = Ae.useCallback(
    (f) => Ds(f, t),
    [t]
  ), d = Ae.useCallback(
    (f, h) => {
      if (f === 0 && r)
        return t === "zh" ? "= 0 秒 (无上限)" : "= 0s (Unlimited)";
      if (h === "s") {
        const g = Vr(f / 3600, 2);
        return t === "zh" ? `≈ ${g} 小时 (${f.toLocaleString()} 秒)` : `≈ ${g} hr (${f.toLocaleString()}s)`;
      }
      return `= ${f.toLocaleString()} ${t === "zh" ? "秒" : "Seconds"}`;
    },
    [t, r]
  );
  return /* @__PURE__ */ e(
    Ps,
    {
      ...o,
      fallbackIdSuffix: "duration",
      factors: As,
      allowedUnits: l,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: d
    }
  );
}
function Iu({
  items: t,
  activeKey: r,
  value: a,
  defaultActiveKey: n,
  onChange: s,
  variant: o = "line",
  size: l,
  motion: c,
  ariaLabel: b = "内容切换标签",
  extra: d,
  className: f,
  panelClassName: h
}) {
  var E;
  const g = pe(l, "md"), m = oe(c), p = Ke(), [v, y] = st({
    value: r ?? a,
    defaultValue: n ?? ((E = t[0]) == null ? void 0 : E.key) ?? "",
    onChange: s
  }), C = (B, M) => {
    const N = t.filter((I) => !I.disabled);
    if (N.length === 0) return;
    const w = N.findIndex((I) => {
      var S;
      return I.key === ((S = t[M]) == null ? void 0 : S.key);
    });
    if (B.key === "ArrowRight") {
      B.preventDefault();
      const I = N[(w + 1) % N.length];
      I && y(I.key);
    } else if (B.key === "ArrowLeft") {
      B.preventDefault();
      const I = N[(w - 1 + N.length) % N.length];
      I && y(I.key);
    }
  }, x = t.some((B) => B.children !== void 0), k = g === "xs" ? "px-2.5 py-1 text-[11px]" : g === "sm" ? "px-3 py-1.5 text-xs" : g === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ i("div", { "data-motion": m, className: u("w-full", f), children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: u(
          "flex items-center justify-between gap-3",
          o === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": b,
              className: u(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((B, M) => {
                const N = B.key === v, w = `${p}-tab-${B.key}`;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    id: w,
                    type: "button",
                    role: "tab",
                    "aria-selected": N,
                    tabIndex: N ? 0 : -1,
                    disabled: B.disabled,
                    onClick: () => !B.disabled && y(B.key),
                    onKeyDown: (I) => C(I, M),
                    className: u(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      k,
                      o === "line" ? u(
                        "abc-tab-trigger",
                        N ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? u(
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
          d && /* @__PURE__ */ e("div", { className: "shrink-0", children: d })
        ]
      }
    ),
    x && /* @__PURE__ */ e("div", { children: t.map((B) => {
      const M = B.key === v, N = `${p}-tab-${B.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": N,
          tabIndex: M ? 0 : void 0,
          ...M ? {} : { hidden: "until-found" },
          children: M && /* @__PURE__ */ e("div", { className: u("pt-4", m !== "none" && "abc-animate-fade-in", h), children: B.children })
        },
        B.key
      );
    }) })
  ] });
}
const On = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function zs(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const js = ({
  src: t,
  alt: r = "图片预览",
  size: a,
  motion: n,
  width: s,
  height: o,
  rounded: l = !1,
  fit: c = "contain",
  placeholder: b,
  className: d,
  zoomable: f = !0
}) => {
  const h = pe(a, "sm"), g = oe(n), m = s ?? On[h], p = o ?? On[h], [v, y] = O(!1), [C, x] = O(!1), [k, E] = O(1), [B, M] = O(0), N = typeof t == "string" ? t.trim() : "", w = zs(N), I = ce(() => N ? w && N.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(N)}` : N : "", [N, w]);
  if (be(() => {
    y(!1);
  }, [N]), !N || v)
    return b ? /* @__PURE__ */ e(je, { children: b }) : /* @__PURE__ */ e(
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
          d
        ),
        children: v ? /* @__PURE__ */ e(Dt, { className: "h-4 w-4" }) : /* @__PURE__ */ e(ts, { className: "h-4 w-4" })
      }
    );
  const S = (D) => {
    D.stopPropagation(), f && (E(1), M(0), x(!0));
  };
  return /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        "data-motion": g,
        title: "点击预览大图 / 矢量图",
        "aria-label": f ? `预览 ${r}` : void 0,
        onClick: S,
        onKeyDown: (D) => {
          f && (D.key === "Enter" || D.key === " ") && (D.preventDefault(), S(D));
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
          d
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: I,
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
    /* @__PURE__ */ i(
      lt,
      {
        open: C,
        onClose: () => x(!1),
        title: r,
        size: "lg",
        motion: g,
        footer: /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => E((D) => Math.max(0.4, Number((D - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Xi, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ i("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(k * 100),
            "%"
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => E((D) => Math.min(3, Number((D + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(qi, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => M((D) => (D + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(qr, { className: "h-3.5 w-3.5" }),
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
              children: /* @__PURE__ */ e("img", { src: I, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Id = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: l,
  className: c
}) => {
  const b = pe(o, "sm"), d = oe(l), f = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", g = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[b];
  return /* @__PURE__ */ i("div", { "data-motion": d, className: u("space-y-2.5", c), children: [
    (t || r) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: u("font-semibold text-[var(--abc-fg)]", b === "lg" ? "text-sm" : "text-xs"), children: t }),
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
          return s ? /* @__PURE__ */ i(
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
          ) : /* @__PURE__ */ i("div", { className: u("min-w-0 space-y-0.5", v), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: m.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: m.children ?? "-" })
          ] }, m.key ?? p);
        })
      }
    )
  ] });
}, Md = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Td = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, Mu = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: l,
  className: c
}) => {
  const b = Ke(), d = pe(o, "sm"), f = oe(l), [h, g] = O(a), m = n !== void 0 ? n : h, p = (v, y) => {
    let C;
    r ? C = y ? [v] : [] : C = y ? Array.from(/* @__PURE__ */ new Set([...m, v])) : m.filter((x) => x !== v), n === void 0 && g(C), s == null || s(C);
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
        return /* @__PURE__ */ i(
          "details",
          {
            name: r ? b : void 0,
            open: y,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ i(
                "summary",
                {
                  "aria-disabled": v.disabled || void 0,
                  onClick: (C) => {
                    C.preventDefault(), !v.disabled && p(v.key, !y);
                  },
                  className: u(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Md[d],
                    v.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
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
                    Td[d]
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
}, Ed = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, Tu = ({ items: t, size: r, motion: a, className: n }) => {
  const s = pe(r, "sm"), o = oe(a), l = {
    xs: "gap-2.5 pb-2.5 last:pb-0",
    sm: "gap-3 pb-4 last:pb-0",
    md: "gap-3.5 pb-5 last:pb-0",
    lg: "gap-4 pb-6 last:pb-0"
  }, c = {
    xs: "text-[11px]",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, b = {
    xs: "text-[11px]",
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm"
  };
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: u("m-0 list-none space-y-0 p-0", n), children: t.map((d, f) => {
    const h = f === t.length - 1, g = d.tone ?? "primary";
    return /* @__PURE__ */ i("li", { className: u("relative flex", l[s]), children: [
      !h && /* @__PURE__ */ e(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
        }
      ),
      /* @__PURE__ */ e("span", { className: "relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center", children: d.icon ? d.icon : /* @__PURE__ */ e(
        "span",
        {
          className: u(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            Ed[g]
          )
        }
      ) }),
      /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: u("font-medium text-[var(--abc-fg)]", c[s]), children: d.title }),
          d.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: d.time })
        ] }),
        d.description && /* @__PURE__ */ e("div", { className: u("leading-relaxed text-[var(--abc-fg-muted)]", b[s]), children: d.description })
      ] })
    ] }, d.key ?? f);
  }) });
}, Os = Ae.forwardRef(
  ({
    value: t,
    displayValue: r,
    copyLabel: a = "复制",
    copiedLabel: n = "已复制",
    hideCopyButton: s = !1,
    className: o,
    codeClassName: l,
    ...c
  }, b) => {
    const [d, f] = Ae.useState(!1), h = async (g) => {
      if (g.stopPropagation(), !t) return;
      await ea(t) && (f(!0), setTimeout(() => f(!1), 1600));
    };
    return /* @__PURE__ */ i(
      "span",
      {
        ref: b,
        "data-slot": "copyable-code",
        "data-copied": d ? "true" : void 0,
        className: u("inline-flex max-w-full items-center gap-1.5 align-baseline", o),
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
              "aria-label": d ? n : `${a}: ${t}`,
              title: d ? n : a,
              className: u(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                d && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: d ? /* @__PURE__ */ e(Ue, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
Os.displayName = "CopyableCode";
const _d = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
  full: "col-span-full"
}, an = Ae.forwardRef(
  ({
    label: t,
    value: r,
    children: a,
    mono: n = !1,
    copyValue: s,
    span: o = 1,
    variant: l = "default",
    className: c,
    valueClassName: b,
    ...d
  }, f) => {
    const h = a ?? r;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: f,
        "data-slot": "description-item",
        className: u(
          "min-w-0",
          l === "cards" && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]",
          l === "divided" && "border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0",
          _d[o],
          c
        ),
        ...d,
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
                b
              ),
              children: s ? /* @__PURE__ */ e(
                Os,
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
an.displayName = "DescriptionItem";
const Eu = an, Ad = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, $s = Ae.forwardRef(
  ({ columns: t = 2, variant: r = "default", density: a, bordered: n = !1, items: s, children: o, className: l, ...c }, b) => {
    const d = a === "compact" && r === "default" ? "compact" : r;
    return /* @__PURE__ */ e(
      "dl",
      {
        ref: b,
        "data-slot": "description-list",
        className: u(
          "grid",
          d === "compact" ? "gap-2.5" : "gap-3.5",
          n && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3",
          Ad[t],
          l
        ),
        ...c,
        children: s ? s.map((f, h) => /* @__PURE__ */ e(
          an,
          {
            label: f.label,
            value: f.value,
            mono: f.mono,
            copyValue: f.copyValue,
            span: f.span,
            variant: d,
            className: f.className
          },
          f.key ?? (typeof f.label == "string" ? f.label : h)
        )) : o
      }
    );
  }
);
$s.displayName = "DescriptionList";
const Dd = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, Bd = {
  xs: "px-1.5 py-0.2 text-[10px] gap-1",
  sm: "px-2 py-0.5 text-xs gap-1.5",
  md: "px-2.5 py-1 text-xs gap-2"
};
function _u({
  icon: t,
  label: r,
  variant: a = "default",
  size: n = "sm",
  className: s,
  ...o
}) {
  return /* @__PURE__ */ i(
    "span",
    {
      "data-slot": "icon-badge",
      className: u(
        "inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none",
        Dd[a],
        Bd[n],
        s
      ),
      ...o,
      children: [
        t && /* @__PURE__ */ e("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ e("span", { children: r })
      ]
    }
  );
}
function Au({
  text: t,
  iconSize: r = 14,
  preserveSrToken: a = !1,
  className: n,
  ...s
}) {
  const o = t ? t.replace(/\[icon:[^\]]+\]/g, "").trim() : "";
  return /* @__PURE__ */ e("span", { className: u("inline-flex items-center gap-1.5", n), ...s, children: /* @__PURE__ */ e("span", { children: o || t }) });
}
const Ld = {
  error: {
    container: "border-red-500/25 bg-red-50/50 text-red-950 dark:bg-red-950/20 dark:text-red-200 dark:border-red-500/30",
    badge: "border-red-500/30 bg-white/80 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    iconWrap: "bg-red-500/15 text-red-600 dark:text-red-400",
    Icon: Dt,
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
}, Wt = Ae.forwardRef(
  function({
    variant: r = "error",
    title: a,
    message: n,
    description: s,
    code: o,
    status: l,
    requestId: c,
    actionHint: b,
    action: d,
    onDismiss: f,
    dismissLabel: h = "关闭通知",
    hideIcon: g = !1,
    role: m,
    className: p,
    children: v,
    ...y
  }, C) {
    const x = Ld[r], k = x.Icon, E = n ?? v;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: C,
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
          /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
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
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-1", children: [
              (a || o || l != null || c) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 font-medium", children: [
                l != null && /* @__PURE__ */ i(
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
                o && /* @__PURE__ */ e(
                  "span",
                  {
                    className: u(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      x.badge
                    ),
                    children: o
                  }
                ),
                c && /* @__PURE__ */ i(
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
              E && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: E }),
              s && /* @__PURE__ */ e("div", { className: "text-[11px] leading-normal opacity-85", children: s }),
              b && /* @__PURE__ */ e("div", { className: "pt-0.5 text-[11px] font-medium text-primary", children: b })
            ] })
          ] }),
          (d || f) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 self-end sm:self-start", children: [
            d,
            f && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": h,
                onClick: f,
                className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                children: /* @__PURE__ */ e(Ve, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    );
  }
);
Wt.displayName = "NotificationBanner";
function Du({
  error: t,
  fallbackTitle: r = "加载失败",
  fallbackMessage: a = "无法加载该区块数据，请重试。",
  action: n,
  retry: s,
  retryLabel: o = "重试",
  isRetrying: l = !1,
  className: c,
  ...b
}) {
  if (!t) return null;
  const d = t, f = (d == null ? void 0 : d.message) || a;
  return /* @__PURE__ */ e(
    Wt,
    {
      variant: "error",
      title: r,
      message: f,
      status: d == null ? void 0 : d.status,
      code: d == null ? void 0 : d.code,
      requestId: d == null ? void 0 : d.requestId,
      className: c,
      action: n ?? (s ? /* @__PURE__ */ i(
        ke,
        {
          size: "xs",
          variant: "outline",
          onClick: s,
          disabled: l,
          className: "h-7 text-xs bg-white/70 dark:bg-slate-900/60",
          children: [
            l ? /* @__PURE__ */ e(Bt, { className: "mr-1 h-3 w-3 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ e(tr, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: o })
          ]
        }
      ) : null),
      ...b
    }
  );
}
function Bu({
  message: t,
  code: r,
  status: a,
  requestId: n,
  onRetry: s,
  retryLabel: o = "重试读取",
  pendingLabel: l,
  retryAriaLabel: c,
  pending: b = !1,
  action: d,
  ...f
}) {
  const h = d ?? (s ? /* @__PURE__ */ i(
    ke,
    {
      variant: "outline",
      size: "sm",
      disabled: b,
      onClick: s,
      "aria-label": c,
      children: [
        /* @__PURE__ */ e(
          tr,
          {
            "aria-hidden": "true",
            className: u(
              "mr-1 h-3 w-3",
              b && "animate-spin motion-reduce:animate-[spin_6s_linear_infinite]"
            )
          }
        ),
        /* @__PURE__ */ e("span", { children: b && l ? l : o })
      ]
    }
  ) : void 0);
  return /* @__PURE__ */ e(
    Wt,
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
function Lu({
  message: t,
  paused: r = !1,
  size: a = "md",
  className: n,
  ...s
}) {
  return /* @__PURE__ */ i(
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
        r ? /* @__PURE__ */ e(Zi, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-amber-600" }) : /* @__PURE__ */ e(
          Bt,
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
function Ru({
  items: t,
  emptyMessage: r = "当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。",
  className: a
}) {
  return t.length === 0 ? /* @__PURE__ */ e(
    Wt,
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
        const o = "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]", l = !!n.restriction, c = /* @__PURE__ */ i(je, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: u(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                n.severity === "critical" && "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400",
                n.severity === "high" && "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
                !["critical", "high"].includes(n.severity) && "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
              ),
              children: /* @__PURE__ */ e(Ji, { "aria-hidden": "true", className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ i("span", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-[var(--abc-fg)]", children: n.label }),
            n.restriction ? /* @__PURE__ */ e("span", { className: "block text-xs text-[var(--abc-fg-muted)]", children: n.restriction }) : /* @__PURE__ */ i(
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
          /* @__PURE__ */ i("span", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--abc-fg-secondary)]", children: n.count }),
            !l && (n.href || n.onClick) && /* @__PURE__ */ e(ss, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--abc-fg-muted)]" })
          ] })
        ] });
        return !l && n.href ? /* @__PURE__ */ e("a", { href: n.href, className: o, children: c }, n.kind || s) : !l && n.onClick ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n.onClick,
            className: u(o, "w-full text-left cursor-pointer"),
            children: c
          },
          n.kind || s
        ) : /* @__PURE__ */ e("div", { className: o, children: c }, n.kind || s);
      })
    }
  );
}
function Pu({
  open: t,
  title: r,
  description: a,
  cancelLabel: n = "取消",
  confirmLabel: s = "确认",
  workingLabel: o = "正在处理…",
  variant: l = "default",
  loading: c = !1,
  closeLabel: b = "关闭",
  className: d,
  onCancel: f,
  onConfirm: h,
  children: g
}) {
  const m = l === "destructive";
  return /* @__PURE__ */ e(
    lt,
    {
      open: t,
      onClose: f,
      onCancel: f,
      onOpenChange: (p) => !p && f(),
      closeDisabled: c,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        Va,
        {
          "data-slot": "confirm-dialog",
          className: u("w-full max-w-md", d),
          closeLabel: b,
          closeDisabled: c,
          children: [
            /* @__PURE__ */ i(Ga, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5", children: [
                m ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Ot, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(yr, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Xa, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              a && /* @__PURE__ */ e(qa, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            g && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: g }),
            /* @__PURE__ */ i(Ya, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                ke,
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
                ke,
                {
                  type: "button",
                  variant: m ? "danger" : "primary",
                  size: "sm",
                  loading: c,
                  onClick: h,
                  children: c ? o : s
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
let et = [];
const La = /* @__PURE__ */ new Set();
function Ra() {
  La.forEach((t) => t());
}
function Rd(t) {
  const r = et.findIndex((a) => a.id === t.id);
  if (r >= 0) {
    const a = et[r];
    (a.cascadeMode !== t.cascadeMode || a.widthPx !== t.widthPx) && (et[r] = t, Ra());
  } else
    et = [...et, t], Ra();
}
function $n(t) {
  et.some((r) => r.id === t) && (et = et.filter((r) => r.id !== t), Ra());
}
const Pd = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, ra = ({
  open: t,
  visible: r,
  onClose: a,
  title: n,
  description: s,
  children: o,
  footer: l,
  size: c = "md",
  motion: b,
  width: d,
  placement: f = "right",
  closeOnClickModal: h = !0,
  resizable: g = !0,
  minWidth: m = 340,
  storageKey: p,
  push: v = !0,
  pushDistance: y = 140,
  cascadeMode: C,
  adjacentOffset: x,
  bodyClassName: k,
  className: E,
  role: B = "dialog"
}) => {
  const M = gl(C), N = C ?? M, w = Ke(), I = Ke(), S = t ?? r ?? !1, D = oe(b), { isMounted: T, isVisible: R } = $t(S, D === "none" ? 0 : 220), G = de(a);
  G.current = a;
  const [, X] = O(0), [j, P] = O(!1), [W, Y] = O(!1), [F, K] = O(() => {
    if (!p || typeof window > "u") return null;
    try {
      const le = Number(window.localStorage.getItem(`abc_drawer_w_${p}`));
      return Number.isFinite(le) && le >= m ? le : null;
    } catch {
      return null;
    }
  });
  be(() => {
    const le = () => X((H) => H + 1);
    return La.add(le), () => {
      La.delete(le);
    };
  }, []);
  const ne = typeof d == "number" ? d : F ?? (c ? Pd[c] : 560) ?? 560;
  be(() => {
    if (S)
      return Rd({
        id: w,
        cascadeMode: N,
        widthPx: ne
      }), () => $n(w);
    $n(w);
  }, [S, w, N, ne]), be(() => {
    if (!T) return;
    const le = (H) => {
      const z = et[et.length - 1];
      H.key === "Escape" && (!z || z.id === w) && (H.stopPropagation(), G.current());
    };
    return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
  }, [T, w]);
  const [$, q] = O(
    () => typeof window < "u" ? window.innerWidth : 1440
  );
  be(() => {
    if (typeof window > "u") return;
    const le = () => q(window.innerWidth);
    return window.addEventListener("resize", le), () => window.removeEventListener("resize", le);
  }, []);
  const U = et.findIndex((le) => le.id === w), re = U >= 0 ? Math.max(0, et.length - 1 - U) : 0, Q = U >= 0 ? U + 1 : 1, he = U >= 0 ? et.slice(U + 1) : [], A = et.some((le) => le.cascadeMode === "adjacent"), V = N === "adjacent" || A, Ce = he.reduce((le, H) => le + (H.widthPx || 560), 0);
  let we = ne;
  if (V && re > 0 && Ce > 0) {
    const le = Math.max(m, $ - Ce - 24);
    we > le && (we = le);
  }
  const ee = v && re > 0 ? V ? x ?? Ce : re * y : 0, ue = v && re > 0 ? V ? 1 : Math.max(0.92, 1 - re * 0.025) : 1, se = f === "right" ? -1 : 1, ie = (le) => {
    le.preventDefault(), Y(!0);
    const H = (Z) => {
      const xe = Math.max(m, window.innerWidth - 32), De = f === "right" ? window.innerWidth - Z.clientX : Z.clientX, Be = Math.min(xe, Math.max(m, De));
      if (P(!1), K(Be), p)
        try {
          window.localStorage.setItem(`abc_drawer_w_${p}`, String(Math.round(Be)));
        } catch {
        }
    }, z = () => {
      Y(!1), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", z);
    };
    window.addEventListener("mousemove", H), window.addEventListener("mouseup", z);
  };
  if (!T || typeof document > "u") return null;
  const ge = j ? "100dvw" : F ? `${F}px` : typeof d == "number" ? `${we}px` : `${we}px`;
  return dt(
    /* @__PURE__ */ i(
      "div",
      {
        role: B,
        "aria-modal": B === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? I : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, U) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          U === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                h && a();
              },
              "data-motion": D,
              className: u(
                "fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto",
                D !== "none" && (R ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ) : null,
          /* @__PURE__ */ i(
            "div",
            {
              "data-motion": D,
              style: {
                width: ge,
                transform: D === "none" ? ee > 0 ? `translate3d(${se * ee}px, 0, 0) scale(${ue})` : void 0 : R ? ee > 0 ? `translate3d(${se * ee}px, 0, 0) scale(${ue})` : "translate3d(0, 0, 0)" : f === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: D === "none" || W ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: u(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                V && U > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                f === "right" ? "ml-auto border-l" : "mr-auto border-r",
                E
              ),
              children: [
                g && !j && /* @__PURE__ */ i(
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
                      /* @__PURE__ */ e(Ha, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                      et.length > 1 && /* @__PURE__ */ i(
                        "span",
                        {
                          title: V ? `并排抽屉层级: ${Q} 级` : `抽屉栈深度: ${Q} 级`,
                          className: u(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            re === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(Qn, { className: "h-2.5 w-2.5" }),
                            "L",
                            Q,
                            V && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: re === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: I, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                    g && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": j ? "还原默认宽度" : "全宽展开",
                        onClick: () => P((le) => !le),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: j ? /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ja, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "关闭抽屉",
                        onClick: a,
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(Ve, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: u("flex-1 overflow-y-auto px-5 py-4 text-xs", k), children: o }),
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
function zd({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-header",
      className: u("flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5", t),
      ...r
    }
  );
}
function jd({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "h2",
    {
      "data-slot": "drawer-title",
      className: u("text-lg font-semibold tracking-tight text-[var(--abc-fg)]", t),
      ...r
    }
  );
}
function Od({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: u("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...r
    }
  );
}
function $d({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: u("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...r
    }
  );
}
function Wd({ className: t, ...r }) {
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
const Fd = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Hd = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, zu = ({
  spinning: t = !0,
  tip: r,
  text: a,
  size: n,
  motion: s,
  fullscreen: o = !1,
  fullScreen: l = !1,
  className: c,
  children: b
}) => {
  const d = r ?? a, f = !!(o || l), h = pe(n, "md"), g = oe(s), m = /* @__PURE__ */ i(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": g,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(Bt, { className: u("animate-spin", Fd[h]) }),
        d && /* @__PURE__ */ e("span", { className: u("font-medium text-[var(--abc-fg-muted)]", Hd[h]), children: d })
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
  ) : null : b !== void 0 ? /* @__PURE__ */ i("div", { "data-motion": g, className: u("relative", c), children: [
    b,
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
}, Kd = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  children: s,
  className: o
}) => {
  const { resolvedTheme: l } = Ye(), c = de(null), b = de(null), d = de(""), f = de(null), h = ve(() => {
    const g = c.current;
    if (!g) return;
    if (f.current && (f.current.disconnect(), f.current = null), !r || !t || Array.isArray(t) && t.length === 0) {
      b.current && b.current.parentNode === g && g.removeChild(b.current), b.current = null, d.current = "";
      return;
    }
    if (typeof document > "u") return;
    const m = document.createElement("canvas"), p = m.getContext("2d");
    if (!p) return;
    const v = Array.isArray(t) ? t : [t], y = Math.max(window.devicePixelRatio || 1, 1), C = 210 + n[0], x = 90 + n[1];
    m.width = C * y, m.height = x * y;
    let k = "";
    try {
      p.scale(y, y), p.translate(C / 2, x / 2), p.rotate(a * Math.PI / 180), p.font = "500 12px Inter, -apple-system, sans-serif", p.fillStyle = l === "dark" ? "rgba(226, 232, 240, 0.065)" : "rgba(15, 23, 42, 0.055)", p.textAlign = "center", p.textBaseline = "middle", v.forEach((M, N) => {
        const w = (N - (v.length - 1) / 2) * 18;
        p.fillText(M, 0, w);
      }), k = m.toDataURL();
    } catch {
      return;
    }
    if (!k) return;
    let E = b.current;
    E || (E = document.createElement("div"), b.current = E), E.getAttribute("data-watermark-overlay") !== "true" && E.setAttribute("data-watermark-overlay", "true");
    const B = [
      "position: absolute",
      "inset: 0",
      "pointer-events: none",
      "z-index: 40",
      `background-image: url(${k})`,
      "background-repeat: repeat",
      `background-size: ${C}px ${x}px`
    ].join(" !important; ") + " !important;";
    if (d.current = B, E.getAttribute("style") !== B && E.setAttribute("style", B), E.parentNode !== g && g.appendChild(E), typeof MutationObserver < "u") {
      const M = new MutationObserver((N) => {
        const w = c.current, I = b.current;
        if (!w || !I) return;
        let S = !1;
        for (const D of N)
          if (D.type === "childList") {
            if (Array.from(D.removedNodes).includes(I)) {
              S = !0;
              break;
            }
          } else if (D.type === "attributes" && D.target === I && ((I.getAttribute("style") || "") !== d.current || I.hidden)) {
            S = !0;
            break;
          }
        S && h();
      });
      f.current = M, M.observe(g, { childList: !0, subtree: !1 }), M.observe(E, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
    }
  }, [t, r, n, l, a]);
  return be(() => (h(), () => {
    f.current && (f.current.disconnect(), f.current = null);
  }), [h]), /* @__PURE__ */ e("div", { ref: c, className: u("relative", o), children: s });
}, Ud = {
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
    icon: /* @__PURE__ */ e(Dt, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, Vd = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, ju = ({
  tone: t = "info",
  title: r,
  description: a,
  children: n,
  showIcon: s = !0,
  closable: o = !1,
  onClose: l,
  action: c,
  size: b,
  motion: d,
  className: f
}) => {
  const [h, g] = O(!1), m = pe(b, "sm"), p = oe(d);
  if (h) return null;
  const v = Ud[t], y = a ?? n;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alert",
      "data-motion": p,
      className: u(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        Vd[m],
        p !== "none" && "abc-animate-fade-in",
        v.box,
        f
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: v.icon }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          r && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)]", children: r }),
          y && /* @__PURE__ */ e("div", { className: "leading-relaxed text-[var(--abc-fg-secondary)]", children: y })
        ] }),
        c && /* @__PURE__ */ e("div", { className: "shrink-0", children: c }),
        o && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "关闭提示",
            onClick: () => {
              g(!0), l == null || l();
            },
            className: "shrink-0 rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Ve, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, Gd = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, Yd = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, Xd = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, qd = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  showInfo: n = !0,
  size: s,
  motion: o,
  className: l
}) => {
  const c = pe(typeof s == "string" ? s : void 0, "sm"), b = oe(o), d = Math.max(0, Math.min(100, Math.round(t))), f = Xd[a];
  if (r === "circle") {
    const g = typeof s == "number" ? s : Gd[c], m = Math.max(4, Math.round(g * 0.09)), p = (g - m) / 2, v = 2 * Math.PI * p, y = v - d / 100 * v;
    return /* @__PURE__ */ i(
      "div",
      {
        role: "progressbar",
        "data-motion": b,
        "aria-valuenow": d,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: u("relative inline-flex items-center justify-center", l),
        style: { width: g, height: g },
        children: [
          /* @__PURE__ */ i("svg", { width: g, height: g, className: "-rotate-90", children: [
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
          n && /* @__PURE__ */ i("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            d,
            "%"
          ] })
        ]
      }
    );
  }
  const h = typeof s == "number" ? s : Yd[c];
  return /* @__PURE__ */ i(
    "div",
    {
      role: "progressbar",
      "data-motion": b,
      "aria-valuenow": d,
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
                style: { width: `${d}%`, backgroundColor: f }
              }
            )
          }
        ),
        n && /* @__PURE__ */ i("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          d,
          "%"
        ] })
      ]
    }
  );
}, Zd = {
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
    icon: /* @__PURE__ */ e(Dt, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(Xr, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(ec, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(Qi, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, Jd = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: l,
  className: c
}) => {
  const b = Zd[t], d = pe(o, "md"), f = oe(l);
  return /* @__PURE__ */ i(
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
        }[d],
        f !== "none" && "abc-animate-fade-in",
        c
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: u(
              "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl",
              b.badgeClass
            ),
            children: b.icon
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
class Qd extends We.Component {
  constructor() {
    super(...arguments);
    la(this, "state", { error: null });
    la(this, "handleReset", () => {
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
      Jd,
      {
        status: "500",
        title: `${n}加载或渲染发生异常`,
        subTitle: a.message || "捕获到未知运行时渲染错误，其他工作区页签不受影响。",
        extra: /* @__PURE__ */ e(
          ke,
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
const Ou = Qd;
function $u({
  title: t,
  secret: r,
  open: a,
  secretValue: n,
  description: s = "此密钥仅显示一次。请在关闭前复制并安全存储。",
  secretLabel: o,
  metadata: l = [],
  closeLabel: c = "关闭",
  acknowledgeLabel: b = "我已妥善保存此密钥",
  copyLabel: d = "复制密钥",
  copiedLabel: f = "已复制",
  copyErrorMessage: h = "剪贴板写入失败，请手动选择复制。",
  className: g,
  onClose: m
}) {
  const p = r ?? n ?? null, v = a !== void 0 ? a : !!p, [y, C] = Ae.useState(!1), [x, k] = Ae.useState(!1), [E, B] = Ae.useState(null);
  if (Ae.useEffect(() => {
    v || (C(!1), k(!1), B(null));
  }, [v]), !v || !p)
    return null;
  const M = async () => {
    B(null), await ea(p) ? (C(!0), setTimeout(() => C(!1), 2e3)) : B(h);
  };
  return /* @__PURE__ */ e(
    lt,
    {
      open: v,
      onClose: m,
      onCancel: m,
      onOpenChange: (N) => !N && m(),
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        Va,
        {
          "data-slot": "one-time-secret-dialog",
          className: u("w-full max-w-lg", g),
          closeLabel: c,
          children: [
            /* @__PURE__ */ i(Ga, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300", children: /* @__PURE__ */ e(es, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Xa, { className: "text-base font-semibold leading-tight", children: t })
              ] }),
              /* @__PURE__ */ e(qa, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: s })
            ] }),
            /* @__PURE__ */ i("div", { className: "space-y-3 py-2 text-xs", children: [
              /* @__PURE__ */ e(
                Wt,
                {
                  variant: "warning",
                  title: "请立即备份",
                  message: "关闭此窗口后将无法再次检索该明文内容，丢失将需要重新生成。"
                }
              ),
              o && /* @__PURE__ */ e("span", { className: "block font-medium text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ i("div", { className: "relative rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3 pr-12", children: [
                /* @__PURE__ */ e("code", { className: "block select-all break-all font-mono text-xs text-[var(--abc-fg)]", children: p }),
                /* @__PURE__ */ e(
                  ke,
                  {
                    type: "button",
                    variant: "outline",
                    size: "xs",
                    onClick: M,
                    className: "absolute right-2 top-2 h-7 w-7 p-0",
                    title: y ? f : d,
                    "aria-label": y ? f : d,
                    children: y ? /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                  }
                )
              ] }),
              E && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: E }),
              l.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
                $s,
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
              /* @__PURE__ */ i("label", { className: "flex cursor-pointer items-start gap-2 pt-1 select-none", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: x,
                    onChange: (N) => k(N.target.checked),
                    className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: b })
              ] })
            ] }),
            /* @__PURE__ */ e(Ya, { className: "pt-2", children: /* @__PURE__ */ e(
              ke,
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
      )
    }
  );
}
const eb = {
  default: "xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]",
  balanced: "xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]",
  "wide-master": "xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]"
};
function Wu({
  children: t,
  inspector: r,
  ratio: a = "default",
  stickyInspector: n = !0,
  className: s,
  ...o
}) {
  const l = Ae.Children.toArray(t), c = r !== void 0 ? t : l[0], b = r !== void 0 ? r : l.slice(1);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: u("grid items-start gap-6", eb[a], s),
      ...o,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: c }),
        /* @__PURE__ */ e("div", { className: u("min-w-0", n && "xl:sticky xl:top-20"), children: b })
      ]
    }
  );
}
const tb = Ae.forwardRef(
  ({
    title: t,
    subtitle: r,
    badge: a,
    headerActions: n,
    showClear: s = !1,
    onClear: o,
    clearLabel: l = "清除选中",
    loading: c = !1,
    loadingText: b = "正在加载详情…",
    error: d,
    isEmpty: f = !1,
    hasSelection: h,
    emptyIcon: g,
    emptyMessage: m = "请在左侧选择一项以检视详细信息",
    emptyDescription: p,
    footer: v,
    children: y,
    className: C,
    ...x
  }, k) => {
    const E = h !== void 0 ? !h : f, B = !!(t || r || a || n);
    return /* @__PURE__ */ i(
      "aside",
      {
        ref: k,
        "data-slot": "inspector-panel",
        className: u(
          "flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all",
          C
        ),
        ...x,
        children: [
          B && /* @__PURE__ */ i("header", { className: "mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5", children: [
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
                typeof t == "string" ? /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)] tracking-tight", children: t }) : t,
                a
              ] }),
              r && /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1.5", children: [
              n,
              s && o && /* @__PURE__ */ e(
                ke,
                {
                  variant: "ghost",
                  size: "xs",
                  onClick: o,
                  "aria-label": l,
                  title: l,
                  className: "h-7 w-7 p-0 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                  children: /* @__PURE__ */ e(Ve, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          c ? /* @__PURE__ */ i("div", { className: "flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e(Bt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: b })
          ] }) : d ? /* @__PURE__ */ e("div", { className: "my-2", children: d }) : E ? /* @__PURE__ */ i("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
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
tb.displayName = "InspectorPanel";
const va = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
};
function rb(t, r, a, n) {
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  if (a.options && a.options.length > 0) {
    const o = a.options.find((l) => String(l.value) === String(t));
    if (o)
      return /* @__PURE__ */ e(jt, { status: o.status, color: o.color, dot: !0, children: o.label });
  }
  let s;
  switch (a.valueType) {
    case "money": {
      const o = Number(t);
      s = Number.isNaN(o) ? String(t) : /* @__PURE__ */ i("span", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: [
        "¥",
        o.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      ] });
      break;
    }
    case "number": {
      const o = Number(t);
      s = Number.isNaN(o) ? String(t) : /* @__PURE__ */ e("span", { className: "font-mono tabular-nums", children: o.toLocaleString("zh-CN") });
      break;
    }
    case "date": {
      const o = Ee(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: o.isValid() ? o.format("YYYY-MM-DD") : String(t) });
      break;
    }
    case "datetime": {
      const o = Ee(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: o.isValid() ? o.format("YYYY-MM-DD HH:mm:ss") : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(js, { src: String(t), width: 32, height: 32 });
    case "progress":
      return /* @__PURE__ */ e(qd, { percent: Number(t) || 0, className: "min-w-[92px]" });
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
          onClick: (o) => o.stopPropagation(),
          className: "text-[var(--abc-primary)] hover:underline",
          children: String(t)
        }
      );
    case "switch":
      return /* @__PURE__ */ e(jt, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
      return /* @__PURE__ */ e(jt, { dot: !0, children: String(t) });
    default:
      s = String(t);
  }
  return a.linkToView && n ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: (o) => {
        o.stopPropagation(), n(r);
      },
      className: "max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
      children: s
    }
  ) : a.copyable ? /* @__PURE__ */ e(Il, { text: String(t), displayText: s }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: s }) : s;
}
function ab({
  columns: t,
  data: r,
  rowKey: a = "id",
  loading: n = !1,
  density: s = "default",
  selectedKeys: o,
  onSelectionChange: l,
  sortState: c,
  onSortChange: b,
  headerFilterMode: d = !1,
  headerFilters: f = {},
  onHeaderFilterChange: h,
  headerFilterRender: g,
  columnWidths: m = {},
  onColumnResize: p,
  resizable: v,
  motion: y,
  columnFixed: C = {},
  onColumnPin: x,
  onColumnHide: k,
  onResetColumns: E,
  onColumnReorder: B,
  expandable: M,
  onRowView: N,
  activeRowKey: w,
  onRowClick: I,
  onEmptyReset: S,
  maxHeight: D,
  ariaLabel: T = "数据表格",
  emptyText: R = "暂无符合条件的数据",
  className: G
}) {
  const X = oe(y), j = de(null), P = de(null), [W, Y] = O(null), [F, K] = O(null), ne = de(null), $ = de(!1), q = de(null), [U, re] = O({}), [Q, he] = O(0), [A, V] = O(null), Ce = ce(
    () => ({ ...U, ...m }),
    [U, m]
  ), we = v ?? !!p, ee = (L, te) => {
    re((ae) => ({ ...ae, [L]: te })), p == null || p(L, te);
  };
  ya(() => {
    const L = j.current;
    if (!L) return;
    const te = () => {
      L.clientWidth > 0 && he(L.clientWidth);
    };
    if (te(), typeof ResizeObserver > "u") return;
    const ae = new ResizeObserver((Ne) => {
      var Me, _e;
      const Se = (_e = (Me = Ne[0]) == null ? void 0 : Me.contentRect) == null ? void 0 : _e.width;
      typeof Se == "number" && Se > 0 ? he(Math.floor(Se)) : te();
    });
    return ae.observe(L), () => ae.disconnect();
  }, []);
  const ue = (L, te) => typeof a == "function" ? a(L) : (L == null ? void 0 : L[a]) ?? te, se = (L) => L.key in C ? C[L.key] ?? void 0 : L.fixed, ie = ce(() => {
    const L = F && F.length > 0 ? [...t].sort((Se, Me) => {
      const _e = F.indexOf(Se.key), fe = F.indexOf(Me.key);
      return _e === -1 && fe === -1 ? 0 : _e === -1 ? 1 : fe === -1 ? -1 : _e - fe;
    }) : t, te = [], ae = [], Ne = [];
    for (const Se of L) {
      const Me = se(Se);
      Me === "left" ? te.push(Se) : Me === "right" ? Ne.push(Se) : ae.push(Se);
    }
    return [...te, ...ae, ...Ne];
  }, [t, C, F]), ge = Array.isArray(o) && typeof l == "function", le = !!(M != null && M.expandedRowRender), H = ce(() => {
    if (!(M != null && M.defaultExpandAllRows)) return [];
    const L = [], te = (ae) => {
      ae.forEach((Ne, Se) => {
        const Me = ue(Ne, Se);
        (!M.rowExpandable || M.rowExpandable(Ne)) && L.push(Me), Array.isArray(Ne.children) && Ne.children.length > 0 && (L.push(Me), te(Ne.children));
      });
    };
    return te(r), L;
  }, []), [z, Z] = st({
    value: M == null ? void 0 : M.expandedRowKeys,
    defaultValue: H,
    onChange: M == null ? void 0 : M.onExpandedRowsChange
  }), xe = (L) => {
    Z(
      z.includes(L) ? z.filter((te) => te !== L) : [...z, L]
    );
  }, De = ce(() => {
    const L = [], te = (ae, Ne) => {
      ae.forEach((Se, Me) => {
        const _e = ue(Se, Me), fe = Array.isArray(Se.children) ? Se.children : [], Re = fe.length > 0;
        L.push({ record: Se, key: _e, rowIdx: Me, depth: Ne, hasTreeChildren: Re }), Re && z.includes(_e) && te(fe, Ne + 1);
      });
    };
    return te(r, 0), L;
  }, [r, z, a]), Be = ce(() => {
    const L = (ge ? 40 : 0) + (le ? 36 : 0), te = {};
    let ae = 0;
    for (const fe of ie) {
      const Re = Ce[fe.key] ?? fe.width ?? 150;
      te[fe.key] = Re, ae += Re;
    }
    const Ne = { ...te }, Se = Q, Me = Se > L + ae ? Se - (L + ae) : 0;
    if (Me > 0) {
      const fe = (Pe) => Pe.key === "__abc_actions__" || Pe.key in Ce || !!se(Pe), Re = ie.filter((Pe) => !fe(Pe)), me = ie.filter((Pe) => Pe.key !== "__abc_actions__"), ze = Re.length > 0 ? Re : me;
      if (ze.length > 0) {
        const Pe = Math.floor(Me / ze.length);
        let $e = Me - Pe * ze.length;
        for (const Fe of ze) {
          const qe = Pe + ($e > 0 ? 1 : 0);
          $e > 0 && ($e -= 1), Ne[Fe.key] = te[Fe.key] + qe;
        }
      }
    }
    const _e = L + ie.reduce((fe, Re) => fe + (Ne[Re.key] ?? 150), 0);
    return {
      resolvedWidths: Ne,
      resolvedTableWidth: Se > 0 ? Math.max(Se, _e) : void 0
    };
  }, [ie, Ce, C, Q, ge, le]), Le = ce(() => {
    const L = {}, te = {};
    let ae = "", Ne = "", Se = (ge ? 40 : 0) + (le ? 36 : 0);
    for (const _e of ie)
      se(_e) === "left" && (L[_e.key] = Se, Se += Be.resolvedWidths[_e.key] ?? 150, ae = _e.key);
    let Me = 0;
    for (let _e = ie.length - 1; _e >= 0; _e--) {
      const fe = ie[_e];
      se(fe) === "right" && (te[fe.key] = Me, Me += Be.resolvedWidths[fe.key] ?? 150, Ne = fe.key);
    }
    return {
      leftOffsets: L,
      rightOffsets: te,
      lastLeftKey: ae,
      firstRightKey: Ne,
      hasAnyLeftFixed: !!ae
    };
  }, [ie, Be, C, ge, le]), ot = ce(
    () => De.map((L) => L.key),
    [De]
  ), Mt = ge && ot.length > 0 && ot.every((L) => o.includes(L)), Sr = ge && !Mt && ot.some((L) => o.includes(L)), bt = (L) => {
    if (ge)
      if (L) {
        const te = Array.from(/* @__PURE__ */ new Set([...o, ...ot]));
        l(
          te,
          De.filter((ae) => te.includes(ae.key)).map((ae) => ae.record)
        );
      } else {
        const te = o.filter((ae) => !ot.includes(ae));
        l(te, []);
      }
  }, aa = (L) => {
    if (!ge) return;
    const ae = o.includes(L) ? o.filter((Ne) => Ne !== L) : [...o, L];
    l(
      ae,
      De.filter((Ne) => ae.includes(Ne.key)).map((Ne) => Ne.record)
    );
  }, at = (L, te, ae = "right") => {
    if (!we) return;
    L.preventDefault(), L.stopPropagation();
    const Ne = L.clientX, Se = L.currentTarget.parentElement, Me = Ce[te.key] ?? te.width ?? Be.resolvedWidths[te.key] ?? (Se == null ? void 0 : Se.offsetWidth) ?? 140, _e = te.key === "__abc_actions__" ? 80 : 72, fe = typeof document < "u" ? document.body.style.cursor : "", Re = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const me = (Pe) => {
      const $e = Pe.clientX - Ne, Fe = ae === "left" ? Math.max(_e, Math.round(Me - $e)) : Math.max(_e, Math.round(Me + $e));
      ee(te.key, Fe);
    }, ze = () => {
      typeof document < "u" && (document.body.style.cursor = fe, document.body.style.userSelect = Re), window.removeEventListener("mousemove", me), window.removeEventListener("mouseup", ze);
    };
    window.addEventListener("mousemove", me), window.addEventListener("mouseup", ze);
  };
  be(() => {
    if (!W) return;
    const L = (te) => {
      if (te.key === "Escape") {
        const ae = ne.current;
        Y(null), K(null), ne.current = null, q.current = null, $.current = !1, ae && B && B(ae);
      }
    };
    return document.addEventListener("keydown", L, !0), () => document.removeEventListener("keydown", L, !0);
  }, [W, B]);
  const it = ie.map((L) => L.key).join("|");
  ya(() => {
    const L = q.current;
    if (!L) return;
    q.current = null;
    const te = j.current;
    if (!te || X === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const Ne = X === "subtle" ? 140 : 220, Se = "cubic-bezier(0.22, 1, 0.36, 1)";
    te.querySelectorAll("[data-col-key]").forEach((Me) => {
      const _e = Me.dataset.colKey;
      if (!_e) return;
      const fe = L.get(_e);
      if (fe === void 0) return;
      const Re = Me.getBoundingClientRect().left, me = fe - Re;
      if (Math.abs(me) <= 1) return;
      typeof Me.animate == "function" && Me.animate([{ translate: `${me}px 0` }, { translate: "0 0" }], {
        duration: Ne,
        easing: Se
      });
      const ze = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(_e) : _e, Pe = te.querySelectorAll(`[data-col-cell="${ze}"]`), $e = Math.min(Pe.length, 20);
      for (let Fe = 0; Fe < $e; Fe++) {
        const qe = Pe[Fe];
        typeof qe.animate == "function" && qe.animate([{ translate: `${me}px 0` }, { translate: "0 0" }], {
          duration: Ne,
          easing: Se
        });
      }
    });
  }, [it, X]);
  const nt = (L) => {
    if (!L.sortable || !b) return;
    const te = (c == null ? void 0 : c.key) === L.key ? c.direction : null, ae = te === null ? "asc" : te === "asc" ? "desc" : null;
    b(L.key, ae);
  };
  be(() => {
    if (!A) return;
    const L = (ae) => {
      var Ne;
      ae && ae.type === "mousedown" && ((Ne = P.current) != null && Ne.contains(ae.target)) || V(null);
    }, te = (ae) => {
      ae.key === "Escape" && V(null);
    };
    return document.addEventListener("mousedown", L), document.addEventListener("keydown", te, !0), window.addEventListener("scroll", L, !0), () => {
      document.removeEventListener("mousedown", L), document.removeEventListener("keydown", te, !0), window.removeEventListener("scroll", L, !0);
    };
  }, [A]);
  const Ir = (L, te) => {
    if (te.key === "__abc_actions__" || !!!(te.sortable && b || x || k || E)) return;
    L.preventDefault();
    const Ne = typeof window < "u" ? window.innerWidth : 1024, Se = typeof window < "u" ? window.innerHeight : 768;
    V({
      col: te,
      x: Math.max(8, Math.min(L.clientX, Ne - 176 - 8)),
      y: Math.max(8, Math.min(L.clientY, Se - 220 - 8))
    });
  }, Mr = ie.length + (ge ? 1 : 0) + (le ? 1 : 0), or = A ? Jr(j.current) : null;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: j,
      tabIndex: 0,
      role: "region",
      "aria-label": T,
      "data-motion": X,
      style: D !== void 0 ? { maxHeight: typeof D == "number" ? `${D}px` : D } : void 0,
      className: u(
        "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        G
      ),
      children: [
        /* @__PURE__ */ i(
          "table",
          {
            style: {
              width: Be.resolvedTableWidth ? `${Be.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ i("colgroup", { children: [
                ge && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                le && /* @__PURE__ */ e("col", { style: { width: "36px" } }),
                ie.map((L) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": L.key,
                    style: { width: `${Be.resolvedWidths[L.key]}px` }
                  },
                  L.key
                ))
              ] }),
              /* @__PURE__ */ i("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
                /* @__PURE__ */ i("tr", { children: [
                  ge && /* @__PURE__ */ e(
                    "th",
                    {
                      style: Le.hasAnyLeftFixed ? { left: 0 } : void 0,
                      className: u(
                        "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-3 text-center",
                        Le.hasAnyLeftFixed && "sticky z-20"
                      ),
                      children: /* @__PURE__ */ e(
                        xr,
                        {
                          checked: Mt,
                          indeterminate: Sr,
                          onChange: bt
                        }
                      )
                    }
                  ),
                  le && /* @__PURE__ */ e(
                    "th",
                    {
                      style: Le.hasAnyLeftFixed ? { left: ge ? 40 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: u(
                        "w-9 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        Le.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  ie.map((L) => {
                    const te = Be.resolvedWidths[L.key], ae = se(L), Ne = (c == null ? void 0 : c.key) === L.key ? c.direction : null, Se = W === L.key, Me = {
                      width: te ? `${te}px` : void 0,
                      ...ae === "left" ? { left: `${Le.leftOffsets[L.key] ?? 0}px` } : {},
                      ...ae === "right" ? { right: `${Le.rightOffsets[L.key] ?? 0}px` } : {}
                    }, _e = (fe) => {
                      if (!W || !B) return;
                      const Re = F && F.length > 0 ? F : ie.filter((Fe) => Fe.key !== "__abc_actions__").map((Fe) => Fe.key), me = Re.indexOf(W), ze = Re.indexOf(fe);
                      if (me < 0 || ze < 0 || me === ze) return;
                      if (j.current) {
                        const Fe = /* @__PURE__ */ new Map();
                        j.current.querySelectorAll("[data-col-key]").forEach((qe) => {
                          const Ht = qe.dataset.colKey;
                          Ht && Fe.set(Ht, qe.getBoundingClientRect().left);
                        }), q.current = Fe;
                      }
                      const Pe = [...Re], [$e] = Pe.splice(me, 1);
                      Pe.splice(ze, 0, $e), $.current = !0, K(Pe), B(Pe);
                    };
                    return /* @__PURE__ */ i(
                      "th",
                      {
                        "data-col-key": L.key,
                        "data-dragging": Se ? "true" : void 0,
                        draggable: !!(B && !ae && L.key !== "__abc_actions__"),
                        onContextMenu: (fe) => Ir(fe, L),
                        onDragStart: (fe) => {
                          const Re = ie.filter((me) => me.key !== "__abc_actions__").map((me) => me.key);
                          ne.current = Re, $.current = !1, Y(L.key), K(Re), fe.dataTransfer && (fe.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (fe) => {
                          if (!W || W === L.key || ae || L.key === "__abc_actions__" || !B)
                            return;
                          fe.preventDefault();
                          const Re = F && F.length > 0 ? F : ie.filter(($e) => $e.key !== "__abc_actions__").map(($e) => $e.key), me = Re.indexOf(W), ze = Re.indexOf(L.key);
                          if (me < 0 || ze < 0 || me === ze) return;
                          const Pe = fe.currentTarget.getBoundingClientRect();
                          Pe.width > 0 && (me < ze && fe.clientX < Pe.left + Pe.width * 0.35 || me > ze && fe.clientX > Pe.left + Pe.width * 0.65) || _e(L.key);
                        },
                        onDrop: () => {
                          W && W !== L.key && !$.current && !ae && L.key !== "__abc_actions__" && _e(L.key), Y(null), K(null), ne.current = null, $.current = !1;
                        },
                        onDragEnd: () => {
                          Y(null), K(null), ne.current = null, $.current = !1;
                        },
                        style: Me,
                        className: u(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          va[s],
                          L.align === "center" && "text-center",
                          L.align === "right" && "text-right",
                          ae === "left" && "sticky z-20",
                          ae === "right" && "sticky z-20",
                          Se && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
                          L.key === Le.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.12)]",
                          L.key === Le.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.12)]"
                        ),
                        children: [
                          /* @__PURE__ */ i(
                            "div",
                            {
                              className: u(
                                "inline-flex items-center gap-1",
                                L.align === "right" && "justify-end",
                                L.align === "center" && "justify-center"
                              ),
                              children: [
                                /* @__PURE__ */ i(
                                  "span",
                                  {
                                    className: u(
                                      "inline-flex items-center gap-1",
                                      L.sortable && "cursor-pointer hover:text-[var(--abc-primary)]"
                                    ),
                                    onClick: () => nt(L),
                                    children: [
                                      B && !ae && L.key !== "__abc_actions__" && /* @__PURE__ */ e(Ha, { className: "h-3 w-3 cursor-grab text-[var(--abc-fg-placeholder)] opacity-0 transition-opacity group-hover:opacity-100" }),
                                      /* @__PURE__ */ e("span", { children: L.title }),
                                      L.tooltip && /* @__PURE__ */ e(Qe, { content: L.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (fe) => fe.stopPropagation(),
                                          className: "inline-flex text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                                          children: /* @__PURE__ */ e(yr, { className: "h-3 w-3" })
                                        }
                                      ) }),
                                      L.sortable && /* @__PURE__ */ e("span", { className: "inline-flex text-[var(--abc-fg-muted)]", children: Ne === "asc" ? /* @__PURE__ */ e(ka, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : Ne === "desc" ? /* @__PURE__ */ e(Ca, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(wn, { className: "h-3 w-3 opacity-50" }) })
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
                          we && (ae === "right" ? /* @__PURE__ */ e(
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
                d && /* @__PURE__ */ i("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  ge && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-3 py-1.5" }),
                  le && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  ie.map((L) => {
                    const te = se(L);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...te === "left" ? { left: `${Le.leftOffsets[L.key] ?? 0}px` } : {},
                          ...te === "right" ? { right: `${Le.rightOffsets[L.key] ?? 0}px` } : {}
                        },
                        className: u(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          te === "left" && "sticky z-20",
                          te === "right" && "sticky z-20"
                        ),
                        children: L.filterable ? L.filterType === "select" && L.filterOptions ? /* @__PURE__ */ e(
                          It,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: "全部",
                            options: L.filterOptions,
                            value: f[L.key] ?? "",
                            onChange: (ae) => h == null ? void 0 : h(L.key, ae)
                          }
                        ) : /* @__PURE__ */ e(
                          rt,
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
              /* @__PURE__ */ e("tbody", { children: n ? Array.from({ length: 5 }).map((L, te) => /* @__PURE__ */ i("tr", { children: [
                ge && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-3 py-3 text-center", children: /* @__PURE__ */ e(Ge, { width: 16, height: 16 }) }),
                le && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                ie.map((ae) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: u("border-b border-[var(--abc-border)]", va[s]),
                    children: /* @__PURE__ */ e(Ge, { variant: "text", className: "w-4/5" })
                  },
                  ae.key
                ))
              ] }, `sk_${te}`)) : De.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: Mr, children: /* @__PURE__ */ e(El, { title: R, onReset: S }) }) }) : De.map(({ record: L, key: te, rowIdx: ae, depth: Ne, hasTreeChildren: Se }) => {
                const Me = !!(ge && o.includes(te)), _e = w != null && String(w) === String(te), fe = z.includes(te), Re = le && (!(M != null && M.rowExpandable) || M.rowExpandable(L));
                return /* @__PURE__ */ i(We.Fragment, { children: [
                  /* @__PURE__ */ i(
                    "tr",
                    {
                      "data-state": _e || Me ? "selected" : void 0,
                      tabIndex: I ? 0 : void 0,
                      onClick: I ? (me) => {
                        const ze = me.target;
                        ze && ze.closest(
                          'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                        ) || I(L, me);
                      } : void 0,
                      onKeyDown: I ? (me) => {
                        me.target === me.currentTarget && (me.key === "Enter" || me.key === " ") && (me.preventDefault(), I(L, me));
                      } : void 0,
                      className: u(
                        "group transition-colors duration-150",
                        I && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                        Me || _e ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85"
                      ),
                      children: [
                        ge && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Le.hasAnyLeftFixed ? { left: 0 } : void 0,
                            className: u(
                              "border-b border-[var(--abc-border)] px-3 py-2.5 text-center",
                              Le.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: /* @__PURE__ */ e(xr, { checked: Me, onChange: () => aa(te) })
                          }
                        ),
                        le && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Le.hasAnyLeftFixed ? { left: ge ? 40 : 0 } : void 0,
                            className: u(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center",
                              Le.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: Re && /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": fe ? "收起详情行" : "展开详情行",
                                "aria-expanded": fe,
                                onClick: () => xe(te),
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
                        ie.map((me, ze) => {
                          const Pe = me.dataIndex ?? me.key, $e = L == null ? void 0 : L[Pe], Fe = se(me), qe = me.render ? me.render($e, L, ae) : rb($e, L, me, N), Ht = ze === 0 && (Ne > 0 || Se);
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": me.key,
                              style: {
                                ...Fe === "left" ? { left: `${Le.leftOffsets[me.key] ?? 0}px` } : {},
                                ...Fe === "right" ? { right: `${Le.rightOffsets[me.key] ?? 0}px` } : {}
                              },
                              className: u(
                                "border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                va[s],
                                me.align === "center" && "text-center",
                                me.align === "right" && "text-right",
                                W === me.key && "bg-[var(--abc-primary-soft)]/30",
                                Fe === "left" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                Fe === "right" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                me.key === Le.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.08)]",
                                me.key === Le.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.08)]"
                              ),
                              children: Ht ? /* @__PURE__ */ i(
                                "div",
                                {
                                  style: { paddingLeft: `${Ne * 18}px` },
                                  className: "inline-flex items-center gap-1",
                                  children: [
                                    Se ? /* @__PURE__ */ e(
                                      "button",
                                      {
                                        type: "button",
                                        "aria-label": fe ? "收起子项" : "展开子项",
                                        "aria-expanded": fe,
                                        onClick: () => xe(te),
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
                                    /* @__PURE__ */ e("span", { className: "min-w-0", children: qe })
                                  ]
                                }
                              ) : qe
                            },
                            me.key
                          );
                        })
                      ]
                    }
                  ),
                  Re && fe && (M == null ? void 0 : M.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: Mr,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: M.expandedRowRender(L, ae)
                    }
                  ) })
                ] }, String(te));
              }) })
            ]
          }
        ),
        A && or && dt(
          /* @__PURE__ */ i(
            "div",
            {
              ref: P,
              role: "menu",
              "aria-label": `${A.col.title} 列操作菜单`,
              "data-abc-floating": "",
              "data-motion": X,
              style: { top: `${A.y}px`, left: `${A.x}px` },
              className: u(
                "fixed z-[1350] w-44 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
                X !== "none" && "abc-animate-popover-in"
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "truncate border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: [
                  "列：",
                  A.col.title
                ] }),
                A.col.sortable && b && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(A.col.key, "asc"), V(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5" }),
                          " 升序排列"
                        ] }),
                        (c == null ? void 0 : c.key) === A.col.key && c.direction === "asc" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(A.col.key, "desc"), V(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Ca, { className: "h-3.5 w-3.5" }),
                          " 降序排列"
                        ] }),
                        (c == null ? void 0 : c.key) === A.col.key && c.direction === "desc" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  (c == null ? void 0 : c.key) === A.col.key && c.direction && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(A.col.key, null), V(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(wn, { className: "h-3.5 w-3.5" }),
                        " 清除排序"
                      ]
                    }
                  )
                ] }),
                x && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const L = se(A.col);
                        x(A.col.key, L === "left" ? null : "left"), V(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 -rotate-45" }),
                          " 固定到左侧"
                        ] }),
                        se(A.col) === "left" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const L = se(A.col);
                        x(A.col.key, L === "right" ? null : "right"), V(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 rotate-45" }),
                          " 固定到右侧"
                        ] }),
                        se(A.col) === "right" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  se(A.col) && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        x(A.col.key, null), V(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(tc, { className: "h-3.5 w-3.5" }),
                        " 取消固定"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ i("div", { className: "pt-1", children: [
                  k && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        k(A.col.key), V(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }),
                        " 隐藏此列"
                      ]
                    }
                  ),
                  E && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        E(), V(null);
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
const nb = Ae.forwardRef(
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
nb.displayName = "Table";
const sb = Ae.forwardRef(
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
sb.displayName = "TableHeader";
const ob = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: u("[&_tr:last-child]:border-0", t), ...r }));
ob.displayName = "TableBody";
const ib = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: u("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
ib.displayName = "TableFooter";
const cb = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
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
cb.displayName = "TableRow";
const lb = Ae.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
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
lb.displayName = "TableHead";
const db = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: u("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
db.displayName = "TableCell";
const bb = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: u("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
bb.displayName = "TableCaption";
const ub = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, mb = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, fb = {
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
}, Ft = {
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
function Ws(t, r, a = []) {
  var n;
  for (const s of t) {
    const o = [...a, s];
    if (s.path === r) return o;
    if ((n = s.children) != null && n.length) {
      const l = Ws(s.children, r, o);
      if (l.length > 0) return l;
    }
  }
  return [];
}
function vt(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(zt, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const nn = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: o = 0 }) => {
  const l = Ft[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "space-y-0.5",
        o > 0 && u("border-l border-[var(--abc-border)]", l.flyoutSubIndent)
      ),
      children: t.map((c) => {
        const b = !!(c.children && c.children.length > 0), d = c.path === r, f = b && kt(c, r);
        return b ? /* @__PURE__ */ i("div", { className: "py-0.5", children: [
          /* @__PURE__ */ i(
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
            nn,
            {
              items: c.children,
              pathname: r,
              registry: a,
              size: n,
              onSelect: s,
              depth: o + 1
            }
          )
        ] }, c.key) : /* @__PURE__ */ i(
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
              d ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
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
  const o = pe(n, "sm"), l = Ft[o], c = a === "dark", b = ce(() => t.logo ? typeof t.logo == "string" ? zs(t.logo) ? /* @__PURE__ */ e(
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
  return /* @__PURE__ */ i(
    "div",
    {
      "data-size": o,
      className: u(
        "group flex items-center select-none",
        l.brandGap,
        r ? u("justify-center", l.brandWrapCollapsed) : l.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            onClick: t.onClick,
            className: u(
              "flex min-w-0 flex-1 items-center",
              l.brandGap,
              t.onClick && "cursor-pointer"
            ),
            children: [
              b,
              !r && /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
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
            onClick: (d) => {
              var f;
              d.stopPropagation(), (f = t.onEditBrand) == null || f.call(t);
            },
            className: u(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              c ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(rc, { className: l.brandEditIcon })
          }
        )
      ]
    }
  );
}, pb = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const c = Ft[s], [b, d] = O(!1), { isMounted: f, isVisible: h } = $t(b, o === "none" ? 0 : 140), g = de(null), m = de(null), p = de(null), v = Ke(), y = kt(t, r), { style: C, actualSide: x, portalContainer: k } = kr({
    open: f,
    triggerRef: g,
    floatingRef: m,
    placement: "rightStart",
    offset: 8
  }), E = ve(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  be(() => () => E(), [E]);
  const B = () => {
    E(), d(!0);
  }, M = () => {
    E(), typeof window < "u" && (p.current = window.setTimeout(() => {
      d(!1), p.current = null;
    }, 140));
  };
  return be(() => {
    if (!b) return;
    const N = (I) => {
      var D, T;
      const S = I.target;
      (D = g.current) != null && D.contains(S) || (T = m.current) != null && T.contains(S) || d(!1);
    }, w = (I) => {
      var S;
      I.key === "Escape" && (I.preventDefault(), I.stopPropagation(), d(!1), (S = g.current) == null || S.focus());
    };
    return document.addEventListener("mousedown", N), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", w, !0);
    };
  }, [b]), /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: B, onMouseLeave: M, children: /* @__PURE__ */ e(
      "button",
      {
        ref: g,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": b,
        "aria-haspopup": "menu",
        "aria-controls": b ? v : void 0,
        onClick: () => d((N) => !N),
        onKeyDown: (N) => {
          (N.key === "ArrowRight" || N.key === "ArrowDown") && (N.preventDefault(), d(!0), window.requestAnimationFrame(() => {
            var w, I;
            (I = (w = m.current) == null ? void 0 : w.querySelector('[role="menuitem"]:not(:disabled)')) == null || I.focus();
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
      /* @__PURE__ */ i(
        "div",
        {
          ref: m,
          id: v,
          role: "menu",
          "aria-label": t.label,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": x,
          style: C,
          onMouseEnter: B,
          onMouseLeave: M,
          onKeyDown: (N) => {
            var S, D, T;
            const w = Array.from(
              ((S = m.current) == null ? void 0 : S.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const I = w.indexOf(document.activeElement);
            N.key === "ArrowDown" ? (N.preventDefault(), (D = w[(I + 1) % w.length]) == null || D.focus()) : N.key === "ArrowUp" && (N.preventDefault(), (T = w[(I - 1 + w.length) % w.length]) == null || T.focus());
          },
          className: u(
            "z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
            // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
            x === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
            c.flyoutPanel,
            o !== "none" && (h ? "abc-animate-popover-in" : "abc-animate-popover-out")
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
              nn,
              {
                items: t.children ?? [],
                pathname: r,
                registry: n,
                size: s,
                onSelect: (N, w) => {
                  l(N, w), d(!1);
                }
              }
            )
          ]
        }
      ),
      k
    )
  ] });
}, ga = ({
  brand: t,
  items: r,
  pathname: a,
  collapsed: n = !1,
  accordion: s = !0,
  tone: o = "dark",
  size: l,
  motion: c,
  onNavigate: b,
  className: d
}) => {
  const { iconRegistry: f } = Ye(), h = pe(l, "sm"), g = oe(c), m = Ft[h], p = o === "dark", [v, y] = O(
    () => r.filter((x) => {
      var k;
      return ((k = x.children) == null ? void 0 : k.length) && kt(x, a);
    }).map((x) => x.key)
  );
  be(() => {
    const x = r.filter((k) => {
      var E;
      return ((E = k.children) == null ? void 0 : E.length) && kt(k, a);
    }).map((k) => k.key);
    x.length > 0 && y(
      (k) => s ? [x[0]] : Array.from(/* @__PURE__ */ new Set([...k, ...x]))
    );
  }, [a, r, s]);
  const C = (x) => {
    y((k) => k.includes(x) ? k.filter((E) => E !== x) : s ? [x] : [...k, x]);
  };
  return /* @__PURE__ */ i(
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
        d
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
                tone: o,
                size: h,
                className: "w-full"
              }
            )
          }
        ),
        /* @__PURE__ */ e("nav", { className: u("flex-1 overflow-y-auto", m.navPadding), children: r.map((x) => {
          const k = !!(x.children && x.children.length > 0), E = x.path === a, B = kt(x, a), M = v.includes(x.key);
          if (!k) {
            const N = /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                disabled: x.disabled,
                "aria-label": n ? x.label : void 0,
                onClick: () => x.path && b(x.path, x),
                className: u(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Nt,
                  m.itemButton,
                  n && u("justify-center px-0", m.collapsedBtn),
                  E ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : p ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
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
              Qe,
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
            pb,
            {
              item: x,
              pathname: a,
              isDark: p,
              registry: f,
              size: h,
              motion: g,
              onNavigate: b
            },
            x.key
          ) : /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-expanded": M,
                onClick: () => C(x.key),
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
                        !M && "-rotate-90"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                inert: M ? void 0 : "",
                className: u(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  M ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: N.disabled,
                          onClick: () => N.path && b(N.path, N),
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
}, hb = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const c = Ft[s], [b, d] = O(!1), { isMounted: f, isVisible: h } = $t(b, o === "none" ? 0 : 140), g = de(null), m = de(null), p = de(null), v = Ke(), { style: y, actualSide: C, portalContainer: x } = kr({
    open: f,
    triggerRef: g,
    floatingRef: m,
    placement: "bottomLeft",
    offset: 6
  }), k = ve(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  be(() => () => k(), [k]);
  const E = () => {
    k(), d(!0);
  }, B = () => {
    k(), typeof window < "u" && (p.current = window.setTimeout(() => {
      d(!1), p.current = null;
    }, 150));
  };
  be(() => {
    if (!b) return;
    const N = (I) => {
      var D, T;
      const S = I.target;
      (D = g.current) != null && D.contains(S) || (T = m.current) != null && T.contains(S) || d(!1);
    }, w = (I) => {
      var S;
      I.key === "Escape" && (I.preventDefault(), I.stopPropagation(), d(!1), (S = g.current) == null || S.focus());
    };
    return document.addEventListener("mousedown", N), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", w, !0);
    };
  }, [b]);
  const M = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var N, w;
      (w = (N = m.current) == null ? void 0 : N.querySelector('[role="menuitem"]:not(:disabled)')) == null || w.focus();
    });
  };
  return /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: E,
        onMouseLeave: B,
        className: "relative flex-none",
        children: /* @__PURE__ */ i(
          "button",
          {
            ref: g,
            type: "button",
            "aria-expanded": b,
            "aria-haspopup": "menu",
            "aria-controls": b ? v : void 0,
            onClick: () => d((N) => !N),
            onKeyDown: (N) => {
              N.key === "ArrowDown" && (N.preventDefault(), d(!0), M());
            },
            className: u(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Nt,
              c.topItem,
              a ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : b ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
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
                    b && "rotate-180 text-[var(--abc-primary)] opacity-100"
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
          "data-motion": o,
          "data-placement": C,
          style: y,
          onMouseEnter: E,
          onMouseLeave: B,
          onKeyDown: (N) => {
            var S, D, T, R, G;
            const w = Array.from(
              ((S = m.current) == null ? void 0 : S.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const I = w.indexOf(document.activeElement);
            N.key === "ArrowDown" ? (N.preventDefault(), (D = w[(I + 1) % w.length]) == null || D.focus()) : N.key === "ArrowUp" ? (N.preventDefault(), (T = w[(I - 1 + w.length) % w.length]) == null || T.focus()) : N.key === "Home" ? (N.preventDefault(), (R = w[0]) == null || R.focus()) : N.key === "End" && (N.preventDefault(), (G = w[w.length - 1]) == null || G.focus());
          },
          className: u(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            C === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            c.flyoutPanel,
            o !== "none" && (h ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            nn,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (N, w) => {
                l(N, w), d(!1);
              }
            }
          )
        }
      ),
      x
    )
  ] });
}, Wn = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: l,
  onNavigate: c
}) => {
  const { iconRegistry: b } = Ye(), d = pe(s, "sm"), f = oe(o), h = Ft[d];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": d,
      "data-motion": f,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((g) => {
        var p;
        const m = a ? n === g.key : kt(g, r);
        return a || !((p = g.children) != null && p.length) ? /* @__PURE__ */ i(
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
              vt(g.icon, b, h.topIcon),
              /* @__PURE__ */ e("span", { children: g.label })
            ]
          },
          g.key
        ) : /* @__PURE__ */ e(
          hb,
          {
            item: g,
            pathname: r,
            isActive: m,
            registry: b,
            size: d,
            motion: f,
            onNavigate: c
          },
          g.key
        );
      })
    }
  );
}, vb = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: l, onNavigate: c }) => {
  const { iconRegistry: b } = Ye(), d = pe(s, "sm"), f = oe(o), h = Ft[d], g = n === "dark", m = ce(
    () => r.find((x) => kt(x, a)) ?? r[0],
    [r, a]
  ), [p, v] = O((m == null ? void 0 : m.key) ?? "");
  be(() => {
    m != null && m.key && v(m.key);
  }, [m == null ? void 0 : m.key]);
  const y = r.find((x) => x.key === p) ?? m, C = (y == null ? void 0 : y.children) ?? [];
  return /* @__PURE__ */ i(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": d,
      "data-motion": f,
      className: u("flex h-full shrink-0 select-none", l),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: u(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              g ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Zt, { brand: t, collapsed: !0, tone: n, size: d }) }),
              /* @__PURE__ */ e("div", { className: u("flex w-full flex-1 flex-col items-center overflow-y-auto", h.dualRailWrap), children: r.map((x) => {
                const k = x.key === (y == null ? void 0 : y.key);
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var E, B, M;
                      v(x.key), !((E = x.children) != null && E.length) && x.path ? c(x.path, x) : (M = (B = x.children) == null ? void 0 : B[0]) != null && M.path && c(x.children[0].path, x.children[0]);
                    },
                    className: u(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      Nt,
                      h.dualRailItem,
                      k ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : g ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      vt(x.icon ?? "folder", b, h.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: u("truncate", h.dualRailLabelMaxW), children: x.label.slice(0, 4) })
                    ]
                  },
                  x.key
                );
              }) })
            ]
          }
        ),
        C.length > 0 && /* @__PURE__ */ i(
          "div",
          {
            style: { width: "var(--abc-dual-panel-w)" },
            className: "flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
            children: [
              /* @__PURE__ */ i(
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
              /* @__PURE__ */ e("div", { className: u("flex-1 overflow-y-auto", h.dualPanelWrap), children: C.map((x) => {
                const k = x.path === a;
                return /* @__PURE__ */ i(
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
                      vt(x.icon, b, h.dualPanelIcon),
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
}, gb = {
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
}, xb = ({
  tabs: t,
  activePath: r,
  variant: a = "card",
  size: n,
  motion: s,
  onSelect: o,
  onClose: l,
  onCloseOthers: c,
  onCloseRight: b,
  onCloseAll: d,
  onTogglePin: f,
  onRefresh: h,
  className: g
}) => {
  var C;
  const { iconRegistry: m } = Ye(), p = pe(n, "sm"), v = oe(s), y = gb[p];
  return t.length === 0 ? null : /* @__PURE__ */ i(
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
          const k = x.path === r, E = x.closable !== !1 && !x.pinned, B = a === "pill" ? k ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? k ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : k ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ i(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(x.path),
              onKeyDown: (M) => {
                (M.key === "Enter" || M.key === " ") && (M.preventDefault(), o(x.path));
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
                E && l && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${x.title}`,
                    onClick: (M) => {
                      M.stopPropagation(), l(x.path);
                    },
                    className: u(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && k ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(Ve, { className: y.closeIcon })
                  }
                )
              ]
            },
            x.path
          );
        }) }),
        /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
          h && /* @__PURE__ */ e(Qe, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => h(r),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                y.actionBtn
              ),
              children: /* @__PURE__ */ e(qr, { className: y.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            Qt,
            {
              items: [
                ...f ? [
                  {
                    key: "pin",
                    label: (C = t.find((x) => x.path === r)) != null && C.pinned ? "取消固定当前页签" : "固定当前页签",
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
                ...b ? [
                  {
                    key: "right",
                    label: "关闭右侧页签",
                    onClick: () => b(r)
                  }
                ] : [],
                ...d ? [
                  {
                    key: "all",
                    label: "关闭全部可关页签",
                    danger: !0,
                    dividerAbove: !0,
                    onClick: () => d()
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
                  children: /* @__PURE__ */ e(Wa, { className: y.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, yb = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o = 0,
  activeClassName: l,
  children: c
}) => {
  const b = de(/* @__PURE__ */ new Map()), d = de(0), f = de(/* @__PURE__ */ new Map()), h = de(t);
  if (be(() => {
    const m = s == null ? void 0 : s.current;
    if (!m) return;
    h.current && h.current !== t && f.current.set(h.current, m.scrollTop), h.current = t;
    const p = f.current.get(t) ?? 0;
    requestAnimationFrame(() => {
      s != null && s.current && (s.current.scrollTop = p);
    });
  }, [t, s]), be(() => {
    if (typeof window > "u") return;
    const m = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(m);
  }, [t]), !r)
    return b.current.clear(), /* @__PURE__ */ e("div", { className: u("min-h-full", l), children: c }, `${t}_${o}`);
  if (n && n.length > 0) {
    const m = /* @__PURE__ */ new Set([...n, t]);
    for (const p of Array.from(b.current.keys()))
      m.has(p) || (b.current.delete(p), f.current.delete(p));
  }
  d.current += 1;
  const g = b.current.get(t);
  for (b.current.set(t, {
    key: t,
    seed: o,
    lastActiveTick: d.current,
    node: g && g.seed === o ? g.node : c
  }); b.current.size > a; ) {
    let m = null, p = 1 / 0;
    for (const [v, y] of b.current.entries())
      v !== t && y.lastActiveTick < p && (p = y.lastActiveTick, m = v);
    if (m)
      b.current.delete(m);
    else
      break;
  }
  return /* @__PURE__ */ e(je, { children: Array.from(b.current.values()).map((m) => {
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
}, Fs = "abc_cmd_recent_v1", Hs = 5;
function Fn() {
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
function Hn(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Fs, JSON.stringify(t.slice(0, Hs)));
    } catch {
    }
}
function Ks(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const o = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && a.push(...Ks(s.children, o));
  }
  return a;
}
function Kn(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const l = t.slice(0, o), c = t.slice(o, o + a.length), b = t.slice(o + a.length);
  return /* @__PURE__ */ i(je, { children: [
    l,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: c }),
    b
  ] });
}
const wb = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = Ye(), [l, c] = O(""), [b, d] = O("all"), [f, h] = O(0), [g, m] = O(() => Fn()), p = de(null), v = de(null);
  be(() => {
    t ? m(Fn()) : (c(""), d("all"), h(0));
  }, [t]);
  const y = ce(() => [
    ...Ks(a).map(({ item: I, trail: S }) => ({
      id: `nav_${I.key}`,
      title: I.label,
      subtitle: `${S}${I.path ? ` · ${I.path}` : ""}`,
      group: "页面导航",
      icon: I.icon ?? "file",
      keywords: I.path,
      onTrigger: () => {
        I.path && (n == null || n(I.path, I));
      }
    })),
    ...s.map((I) => ({
      ...I,
      group: I.group || "快捷指令"
    }))
  ], [a, n, s]), C = ce(() => {
    const w = /* @__PURE__ */ new Set();
    for (const I of y)
      I.group && w.add(I.group);
    return Array.from(w);
  }, [y]), x = ce(() => {
    const w = l.trim(), I = (R) => b !== "all" && b !== "__recent__" && R.group !== b ? !1 : w ? ht(R.title, w) || !!(R.subtitle && ht(R.subtitle, w)) || !!(R.keywords && ht(R.keywords, w)) : !0, S = [];
    if (b === "__recent__") {
      const R = g.map((G) => y.find((X) => X.id === G)).filter((G) => G !== void 0 && I(G));
      return R.length > 0 && S.push({ groupName: "最近访问", isRecent: !0, items: R }), S;
    }
    const D = /* @__PURE__ */ new Set();
    if (!w && b === "all" && g.length > 0) {
      const R = g.map((G) => y.find((X) => X.id === G)).filter((G) => G !== void 0);
      R.length > 0 && (R.forEach((G) => D.add(G.id)), S.push({ groupName: "最近访问", isRecent: !0, items: R }));
    }
    const T = /* @__PURE__ */ new Map();
    for (const R of y) {
      if (D.has(R.id) || !I(R)) continue;
      const G = R.group || "其他", X = T.get(G) ?? [];
      X.push(R), T.set(G, X);
    }
    for (const [R, G] of T.entries())
      G.length > 0 && S.push({ groupName: R, items: G });
    return S;
  }, [y, l, b, g]), k = ce(
    () => x.flatMap((w) => w.items),
    [x]
  );
  be(() => {
    h(0);
  }, [l, b]), be(() => {
    var I;
    if (!t || !v.current) return;
    const w = v.current.querySelector(`[data-cmd-idx="${f}"]`);
    (I = w == null ? void 0 : w.scrollIntoView) == null || I.call(w, { block: "nearest" });
  }, [f, t]);
  const E = (w) => {
    if (!w) return;
    const I = [w.id, ...g.filter((S) => S !== w.id)].slice(
      0,
      Hs
    );
    m(I), Hn(I), w.onTrigger(), r();
  }, B = () => {
    m([]), Hn([]), b === "__recent__" && d("all");
  }, M = ce(() => {
    const w = ["all"];
    return g.length > 0 && w.push("__recent__"), [...w, ...C];
  }, [g.length, C]);
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
      children: /* @__PURE__ */ i(
        "div",
        {
          onKeyDown: (w) => {
            if (w.key === "ArrowDown")
              w.preventDefault(), h((I) => k.length ? (I + 1) % k.length : 0);
            else if (w.key === "ArrowUp")
              w.preventDefault(), h(
                (I) => k.length ? (I - 1 + k.length) % k.length : 0
              );
            else if (w.key === "Tab") {
              w.preventDefault();
              const I = M.indexOf(b), S = w.shiftKey ? -1 : 1, D = M[(I + S + M.length) % M.length];
              D && d(D);
            } else w.key === "Enter" && k[f] && (w.preventDefault(), E(k[f]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
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
                  children: /* @__PURE__ */ e(Ve, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(Yt, { className: "shrink-0", children: "ESC" })
            ] }),
            C.length > 0 && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => d("all"),
                    className: u(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "all" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      "全部 (",
                      y.length,
                      ")"
                    ]
                  }
                ),
                g.length > 0 && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => d("__recent__"),
                    className: u(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(Pr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                C.map((w) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => d(w),
                    className: u(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === w ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: w
                  },
                  w
                ))
              ] }),
              g.length > 0 && /* @__PURE__ */ i(
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
            /* @__PURE__ */ e("div", { ref: v, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: k.length === 0 ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Nr, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ i("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                l,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: x.map((w) => /* @__PURE__ */ i("div", { className: "space-y-1", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5", children: [
                  w.isRecent && /* @__PURE__ */ e(Pr, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: w.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: w.items.length })
              ] }),
              w.items.map((I) => {
                N += 1;
                const S = N, D = S === f;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": S,
                    onMouseEnter: () => h(S),
                    onClick: () => E(I),
                    className: u(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      D ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: u(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              D ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: I.icon ? typeof I.icon == "string" ? /* @__PURE__ */ e(zt, { name: I.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: I.icon }) : /* @__PURE__ */ e(ct, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ i("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: u(
                                "truncate text-sm font-semibold",
                                D ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: Kn(I.title, l)
                            }
                          ),
                          I.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: Kn(I.subtitle, l) })
                        ] })
                      ] }),
                      /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                        I.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: u(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              D ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: I.group
                          }
                        ),
                        D && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(ac, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${w.isRecent ? "recent" : "std"}_${I.id}`
                );
              })
            ] }, w.groupName)) }) }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Yt, { children: /* @__PURE__ */ e(ka, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(Yt, { children: /* @__PURE__ */ e(Ca, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Yt, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Yt, { children: "Tab" }),
                  /* @__PURE__ */ e("span", { children: "切换分类" })
                ] })
              ] }),
              /* @__PURE__ */ i("span", { className: "font-mono", children: [
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
}, Fu = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: l,
  className: c,
  children: b
}) => /* @__PURE__ */ i("div", { className: u("flex min-h-full flex-col gap-4", l && "pb-16", c), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((d, f) => {
      const h = f === n.length - 1;
      return /* @__PURE__ */ i(We.Fragment, { children: [
        f > 0 && /* @__PURE__ */ e(gt, { className: "h-3 w-3 opacity-60" }),
        d.onClick && !h ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: d.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: d.label
          }
        ) : /* @__PURE__ */ e("span", { className: u(h && "font-medium text-[var(--abc-fg-secondary)]"), children: d.label })
      ] }, f);
    }) }),
    (t || s) && /* @__PURE__ */ i("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ i("div", { className: "min-w-0", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
          t && /* @__PURE__ */ e("h1", { className: "text-base font-bold tracking-tight text-[var(--abc-fg)]", children: t }),
          a
        ] }),
        r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
      ] }),
      s && /* @__PURE__ */ e("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: s })
    ] }),
    o && /* @__PURE__ */ e("div", { children: o })
  ] }),
  /* @__PURE__ */ e("div", { className: "flex-1", children: b }),
  l && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: l })
] }), Nb = ({
  brand: t = { name: "ABC Enterprise", subtitle: "Design System & Console" },
  variant: r = "split",
  headline: a = "高密度、高可靠的企业级数字工作台",
  subheadline: n = "基于 ABC Design 统一语义化 Token 与多模态布局架构构建，助力多业务线高效协同。",
  highlights: s = [
    "三层语义化 Design Tokens，支持多品牌色与暗黑模式秒级切换",
    "5 大企业级自适应布局拓扑，一套组件无缝适配全终端业务",
    "零业务 API 耦合，Adapter 协议驱动安全接入任意后端架构"
  ],
  topRightExtra: o,
  copyright: l = `© ${(/* @__PURE__ */ new Date()).getFullYear()} ABC Design System. All rights reserved.`,
  children: c,
  className: b
}) => r === "centered" ? /* @__PURE__ */ i(
  "div",
  {
    className: u(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      b
    ),
    children: [
      /* @__PURE__ */ e(Rn, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(Zt, { brand: t }) }),
      /* @__PURE__ */ i("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(Ln, {}),
        c
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: l })
    ]
  }
) : /* @__PURE__ */ i(
  "div",
  {
    className: u(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      b
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Rn, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Zt, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ i("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((d, f) => /* @__PURE__ */ i("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(Ct, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: d })
          ] }, f)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: l })
      ] }),
      /* @__PURE__ */ i("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(Zt, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ i("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(Ln, {}),
          c
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: l })
      ] })
    ]
  }
), kb = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], Cb = [
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
], Sb = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Un = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var he;
  const {
    theme: o,
    pageTransition: l,
    watermarkEnabled: c,
    setThemeMode: b,
    setBrand: d,
    setCustomBrandColor: f,
    setDensity: h,
    setRadius: g,
    setFontScale: m,
    setVisualMode: p,
    setComponentSize: v,
    setMotion: y,
    updateTheme: C,
    setPageTransition: x,
    setWatermarkEnabled: k,
    resetTheme: E,
    toast: B
  } = Ye(), [M, N] = O(1), [w, I] = O(!0), [S, D] = O("实时 Token 响应预览"), [T, R] = O(0), [G, X] = O(!1), [j, P] = O(""), [W, Y] = O(o.customBrandColor ?? "#0ea5e9"), F = o.componentSize ?? "sm", K = a.sidebarWidth ?? ub[F], ne = a.headerHeight ?? mb[F], $ = o.customBrandColor || ((he = da[o.brand]) == null ? void 0 : he.swatch) || "#2563eb", q = (A, V) => {
    A.theme.mode && A.theme.mode !== o.mode && b(A.theme.mode, { clientX: V.clientX, clientY: V.clientY }), C(A.theme), n(A.layout), x(A.transition), R((Ce) => Ce + 1), B.success(`已切换至「${A.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    ra,
    {
      open: t,
      onClose: r,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ i("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            ke,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                E(), s == null || s(), B.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            ke,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(Yn, { className: "h-3.5 w-3.5" }),
              onClick: () => X((A) => !A),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            ke,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(nc, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const A = JSON.stringify(o, null, 2), V = JSON.stringify(a, null, 2), Ce = `<AbcProvider
  defaultTheme={${A}}
  defaultPageTransition="${l}"
  defaultWatermarkEnabled={${c}}
>
  <ProLayout
    defaultSettings={${V}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(Ce), B.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  B.error("复制代码失败");
                }
              },
              children: "复制 JSX"
            }
          ),
          /* @__PURE__ */ e(
            ke,
            {
              variant: "primary",
              size: "xs",
              icon: /* @__PURE__ */ e(ar, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const A = {
                  theme: o,
                  layout: a,
                  pageTransition: l,
                  watermarkEnabled: c
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(A, null, 2)), B.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  B.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ i("div", { className: "space-y-6", children: [
        G && /* @__PURE__ */ i("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => X(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            Qr,
            {
              rows: 4,
              value: j,
              onChange: (A) => P(A.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(ke, { size: "xs", variant: "primary", onClick: () => {
            try {
              const A = JSON.parse(j);
              A.theme && typeof A.theme == "object" && C(A.theme), A.layout && typeof A.layout == "object" && n(A.layout), typeof A.pageTransition == "string" && x(A.pageTransition), typeof A.watermarkEnabled == "boolean" && k(A.watermarkEnabled), X(!1), P(""), B.success("已成功导入并应用自定义配置");
            } catch {
              B.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(Nr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => R((A) => A + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Xn, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i(
            "div",
            {
              className: u(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                Sb[l]
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i(ke, { variant: "primary", onClick: () => N((A) => A + 1), children: [
                      "按压回弹 #",
                      M
                    ] }),
                    /* @__PURE__ */ e(ke, { variant: "outline", onClick: () => I((A) => !A), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(jt, { status: w ? "success" : "warning", dot: !0, children: w ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      ft,
                      {
                        checked: w,
                        onChange: I,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  rt,
                  {
                    allowClear: !0,
                    value: S,
                    onChange: (A) => D(A.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ i("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: $ })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((A) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${A}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${A})` }
                    },
                    A
                  )) })
                ] })
              ]
            },
            T
          )
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: Cb.map((A) => /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: (V) => q(A, V),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: A.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: A.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: A.badge })
              ]
            },
            A.id
          )) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: kb.map((A) => {
            const V = a.mode === A.mode;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: A.mode }),
                className: u(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  V ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ i("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    A.mode === "sidebar" && /* @__PURE__ */ i(je, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    A.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    A.mode === "mix" && /* @__PURE__ */ i("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    A.mode === "dual-column" && /* @__PURE__ */ i(je, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    A.mode === "auth" && /* @__PURE__ */ i(je, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: A.title }),
                    V && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: A.desc })
                ]
              },
              A.mode
            );
          }) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "3. 明暗外观与动态品牌色引擎" }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "色彩模式" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: o.mode,
                onChange: (A) => b(A),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Sa, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Ia, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Zn, { className: "h-3 w-3" }),
                      " 系统"
                    ] })
                  }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏视觉色调" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: a.sidebarTone,
                onChange: (A) => n({ sidebarTone: A }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(da).map((A) => {
            const V = da[A], Ce = !o.customBrandColor && o.brand === A;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => d(A),
                className: u(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Ce ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: V.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: V.label.split(" ")[0] })
                ]
              },
              A
            );
          }) }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(qn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || W,
                  onChange: (A) => {
                    const V = A.target.value;
                    Y(V), f(V);
                  },
                  className: "h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  maxLength: 7,
                  value: o.customBrandColor ?? W,
                  onChange: (A) => {
                    const V = A.target.value;
                    Y(V), /^#[0-9a-fA-F]{6}$/.test(V) && f(V);
                  },
                  className: "w-20 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-xs uppercase text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                }
              ),
              o.customBrandColor && /* @__PURE__ */ e(
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
        /* @__PURE__ */ i("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "4. 密度、圆角与排版规格" }),
          /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "表单与按钮高度密度" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: o.density,
                onChange: (A) => h(A),
                options: Object.keys(kn).map((A) => ({
                  value: A,
                  label: kn[A].label
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局控件与卡片圆角" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: o.radius,
                onChange: (A) => g(A),
                options: Object.keys(Cn).map((A) => ({
                  value: A,
                  label: Cn[A].label.split(" ")[0]
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "全局字号缩放比例" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: o.fontScale ?? "md",
                onChange: (A) => m(A),
                options: [
                  { value: "sm", label: "紧凑 94%" },
                  { value: "md", label: "标准 100%" },
                  { value: "lg", label: "舒适 106%" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件与导航尺寸" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: o.componentSize ?? "自动 (随组件)" })
            ] }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: o.componentSize ?? "auto",
                onChange: (A) => v(A === "auto" ? void 0 : A),
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
          /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件微交互动效" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: mr[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: (A) => {
                  y(A), R((V) => V + 1);
                },
                options: Object.keys(mr).map((A) => ({
                  value: A,
                  label: mr[A].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ i("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              mr[o.motion ?? "smooth"].label,
              "：",
              mr[o.motion ?? "smooth"].description
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "5. 壳层几何尺寸与页签风格" }),
          /* @__PURE__ */ i("div", { className: "space-y-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "侧边栏展开宽度" }),
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                a.sidebarWidth !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ sidebarWidth: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ i("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  K,
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
                value: K,
                onChange: (A) => n({ sidebarWidth: Number(A.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "space-y-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "顶部导航栏高度" }),
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                a.headerHeight !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ headerHeight: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ i("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  ne,
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
                value: ne,
                onChange: (A) => n({ headerHeight: Number(A.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "多页签视觉形态" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: a.tabStyle ?? "card",
                onChange: (A) => n({ tabStyle: A }),
                options: [
                  { value: "card", label: "卡片式" },
                  { value: "pill", label: "胶囊式" },
                  { value: "underline", label: "下划线" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示多页签栏 (MultiTabBar)" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.showTabs,
                onChange: (A) => n({ showTabs: A })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.keepAlive,
                onChange: (A) => n({ keepAlive: A })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.headerBlur !== !1,
                onChange: (A) => n({ headerBlur: A })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (A) => n({ showBreadcrumb: A })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.sidebarAccordion,
                onChange: (A) => n({ sidebarAccordion: A })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: !!a.showFooter,
                onChange: (A) => n({ showFooter: A })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: c,
                onChange: (A) => k(A)
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              mt,
              {
                variant: "segmented",
                value: a.contentWidth,
                onChange: (A) => n({ contentWidth: A }),
                options: [
                  { value: "fluid", label: "流式铺满" },
                  { value: "fixed", label: "定宽居中" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-[var(--abc-fg-secondary)]", children: "页面切换动效" }),
            /* @__PURE__ */ e(
              It,
              {
                size: "xs",
                className: "w-44",
                value: l,
                onChange: (A) => {
                  x(A), R((V) => V + 1);
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
        /* @__PURE__ */ i("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ i("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            mt,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: (A) => p(A),
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
}, Ib = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Mb = {
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
}, Hu = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: r,
  pathname: a,
  onNavigate: n,
  settings: s,
  defaultSettings: o,
  onSettingsChange: l,
  user: c,
  headerExtra: b,
  commandActions: d = [],
  tabs: f,
  onTabsChange: h,
  authRender: g,
  authProps: m,
  showCustomizerTrigger: p = !0,
  size: v,
  motion: y,
  children: C
}) => {
  const {
    resolvedTheme: x,
    toggleTheme: k,
    pageTransition: E,
    watermarkEnabled: B,
    watermarkText: M
  } = Ye(), N = pe(v, "sm"), w = oe(y), I = Mb[N], S = ce(
    () => ({ ...fb, ...o }),
    [o]
  ), [D, T] = st({
    value: s ? { ...S, ...s } : void 0,
    defaultValue: S,
    onChange: l
  }), R = ve(
    (H) => {
      T((z) => ({ ...z, ...H }));
    },
    [T]
  ), [G, X] = O(!1), [j, P] = O(!1), [W, Y] = O(!1), [F, K] = O({}), ne = de(null), [$, q] = st({
    value: f,
    defaultValue: [],
    onChange: h
  }), U = ce(
    () => Ws(r, a),
    [r, a]
  );
  be(() => {
    const H = U[U.length - 1];
    !H || !H.path || q((z) => z.some((Z) => Z.path === H.path) ? z : [
      ...z,
      {
        path: H.path,
        title: H.label,
        icon: H.icon,
        pinned: z.length === 0
      }
    ]);
  }, [U, q]), be(() => {
    const H = (z) => {
      (z.metaKey || z.ctrlKey) && z.key.toLowerCase() === "k" && (z.preventDefault(), P((Z) => !Z));
    };
    return window.addEventListener("keydown", H), () => window.removeEventListener("keydown", H);
  }, []);
  const re = ce(
    () => r.find((H) => kt(H, a)) ?? r[0],
    [r, a]
  ), [Q, he] = O((re == null ? void 0 : re.key) ?? "");
  be(() => {
    re != null && re.key && he(re.key);
  }, [re == null ? void 0 : re.key]);
  const A = ce(() => {
    const H = r.find((z) => z.key === Q) ?? re;
    return (H == null ? void 0 : H.children) ?? [];
  }, [r, Q, re]), V = (H) => {
    const z = $.findIndex((xe) => xe.path === H), Z = $.filter((xe) => xe.path !== H || xe.pinned);
    if (q(Z), H === a && Z.length > 0) {
      const xe = Z[Math.max(0, z - 1)] ?? Z[0];
      xe && n(xe.path);
    }
  }, Ce = ce(() => M || [(c == null ? void 0 : c.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [M, c == null ? void 0 : c.name, t.name]);
  if (D.mode === "auth")
    return /* @__PURE__ */ i(je, { children: [
      /* @__PURE__ */ e(
        Nb,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (H) => k({ clientX: H.clientX, clientY: H.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: x === "dark" ? /* @__PURE__ */ e(Sa, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Ia, { className: "h-4 w-4" })
              }
            ),
            p && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => Y(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(wa, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...m,
          children: g ?? C
        }
      ),
      /* @__PURE__ */ e(
        Un,
        {
          open: W,
          onClose: () => Y(!1),
          layoutSettings: D,
          onLayoutChange: R,
          onResetAll: () => T(S)
        }
      )
    ] });
  const we = D.mode === "sidebar", ee = D.mode === "top", ue = D.mode === "mix", se = D.mode === "dual-column", ie = /* @__PURE__ */ i(
    "header",
    {
      className: u(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        I.headerPad,
        D.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => X(!0),
              className: u(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                I.iconBtn
              ),
              children: /* @__PURE__ */ e(Jn, { className: I.iconCls })
            }
          ),
          (ee || ue) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Zt, { brand: t, size: N, className: "px-0 pr-3" }) }),
          (we || ue && A.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": D.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => R({ sidebarCollapsed: !D.sidebarCollapsed }),
              className: u(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                I.iconBtn
              ),
              children: D.sidebarCollapsed ? /* @__PURE__ */ e(sc, { className: I.iconCls }) : /* @__PURE__ */ e(oc, { className: I.iconCls })
            }
          ),
          ee && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Wn,
            {
              items: r,
              pathname: a,
              size: N,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          ue && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Wn,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: Q,
              size: N,
              motion: w,
              onSelectRoot: (H) => {
                var z, Z;
                he(H.key), H.path && (!H.children || H.children.length === 0) ? n(H.path, H) : (Z = (z = H.children) == null ? void 0 : z[0]) != null && Z.path && n(H.children[0].path, H.children[0]);
              },
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          (we || se) && D.showBreadcrumb !== !1 && U.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: u(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                I.breadcrumb
              ),
              children: U.map((H, z) => {
                const Z = z === U.length - 1;
                return /* @__PURE__ */ i(We.Fragment, { children: [
                  z > 0 && /* @__PURE__ */ e(gt, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "truncate",
                        Z && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: H.label
                    }
                  )
                ] }, H.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => P(!0),
              className: u(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                I.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(ct, { className: I.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(Yt, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          b,
          /* @__PURE__ */ e(Qe, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (H) => k({ clientX: H.clientX, clientY: H.clientY }),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                I.iconBtn
              ),
              children: x === "dark" ? /* @__PURE__ */ e(Sa, { className: I.iconCls }) : /* @__PURE__ */ e(Ia, { className: I.iconCls })
            }
          ) }),
          p && /* @__PURE__ */ e(Qe, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => Y(!0),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                I.iconBtn
              ),
              children: /* @__PURE__ */ e(wa, { className: I.iconCls })
            }
          ) }),
          c && /* @__PURE__ */ e(
            Qt,
            {
              items: c.menuItems ?? [
                { key: "profile", label: `当前账号：${c.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(Bl, { src: c.avatar, name: c.name, size: I.avatarSize }),
                /* @__PURE__ */ i("div", { className: "hidden text-left md:block", children: [
                  /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-xs font-semibold text-[var(--abc-fg)] leading-tight", children: c.name }),
                  c.role && /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-[10px] text-[var(--abc-fg-muted)] leading-tight", children: c.role })
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  ), ge = /* @__PURE__ */ i("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !ue && ie,
    D.showTabs && /* @__PURE__ */ e(
      xb,
      {
        tabs: $,
        activePath: a,
        variant: D.tabStyle ?? "card",
        size: N,
        motion: w,
        onSelect: (H) => n(H),
        onClose: V,
        onTogglePin: (H) => q(
          (z) => z.map((Z) => Z.path === H ? { ...Z, pinned: !Z.pinned } : Z)
        ),
        onCloseOthers: (H) => q((z) => z.filter((Z) => Z.pinned || Z.path === H)),
        onCloseRight: (H) => {
          const z = $.findIndex((Z) => Z.path === H);
          z < 0 || q((Z) => Z.filter((xe, De) => De <= z || xe.pinned));
        },
        onCloseAll: () => {
          const H = $.filter((z) => z.pinned);
          q(H), H[0] && H[0].path !== a && n(H[0].path);
        },
        onRefresh: (H) => K((z) => ({ ...z, [H]: (z[H] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: ne,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ i(
          Kd,
          {
            enabled: B,
            content: Ce,
            className: u(
              "min-h-full",
              D.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                yb,
                {
                  activeKey: a,
                  enabled: D.keepAlive,
                  aliveKeys: $.map((H) => H.path),
                  scrollContainerRef: ne,
                  refreshSeed: F[a] ?? 0,
                  activeClassName: Ib[E],
                  children: C
                }
              ),
              D.showFooter && /* @__PURE__ */ i("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
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
  ] }), le = {
    "--abc-sidebar-w": D.sidebarWidth ? `${D.sidebarWidth}px` : void 0,
    "--abc-header-h": D.headerHeight ? `${D.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-size": N,
      "data-motion": w,
      style: le,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        ue && ie,
        /* @__PURE__ */ i("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          ue && A.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            ga,
            {
              items: A,
              pathname: a,
              collapsed: D.sidebarCollapsed,
              accordion: D.sidebarAccordion,
              tone: D.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          we && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            ga,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: D.sidebarCollapsed,
              accordion: D.sidebarAccordion,
              tone: D.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          se && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            vb,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: D.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          ge
        ] }),
        /* @__PURE__ */ e(
          ra,
          {
            open: G,
            onClose: () => X(!1),
            placement: "left",
            width: I.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              ga,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: N,
                motion: w,
                onNavigate: (H, z) => {
                  n(H, z), X(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          wb,
          {
            open: j,
            onClose: () => P(!1),
            menuItems: r,
            onNavigate: (H, z) => n(H, z),
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
                onTrigger: () => Y(!0)
              },
              ...d
            ]
          }
        ),
        /* @__PURE__ */ e(
          Un,
          {
            open: W,
            onClose: () => Y(!1),
            layoutSettings: D,
            onLayoutChange: R,
            onResetAll: () => T(S)
          }
        )
      ]
    }
  );
};
function Us() {
  const { permissionAdapter: t } = Ye();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const Tb = ({
  permission: t,
  code: r,
  mode: a = "any",
  fallbackStrategy: n = "hide",
  disabledTip: s = "暂无操作权限",
  fallback: o,
  fallbackNode: l,
  children: c
}) => {
  var h;
  const { hasPermission: b } = Us(), d = t ?? r;
  if (!d) return /* @__PURE__ */ e(je, { children: c });
  if (b(d, a)) return /* @__PURE__ */ e(je, { children: c });
  if (n === "hide")
    return /* @__PURE__ */ e(je, { children: o ?? l ?? null });
  if (We.isValidElement(c)) {
    const g = c, m = We.cloneElement(g, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((h = g.props) == null ? void 0 : h.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(Qe, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: m }) });
  }
  return null;
}, Ku = Tb;
function Vs(t) {
  const { dictAdapter: r } = Ye(), [a, n] = O([]), [s, o] = O(!1);
  return be(() => {
    if (!r || !t) {
      n([]);
      return;
    }
    let l = !0;
    const c = r(t);
    return c instanceof Promise ? (o(!0), c.then((b) => {
      l && n(b);
    }).finally(() => {
      l && o(!1);
    })) : n(c), () => {
      l = !1;
    };
  }, [r, t]), { options: a, loading: s };
}
const Uu = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...l
}) => {
  const c = t ?? r ?? "", { options: b, loading: d } = Vs(c), f = ce(
    () => [...a, ...b, ...n],
    [a, b, n]
  );
  return /* @__PURE__ */ e(
    It,
    {
      options: f,
      placeholder: d && f.length === 0 ? "字典加载中..." : s,
      disabled: o || d && f.length === 0,
      ...l
    }
  );
}, Vu = ({
  dictCode: t,
  dictKey: r,
  value: a,
  dot: n = !0,
  size: s,
  motion: o,
  emptyText: l = "-",
  fallbackTone: c = "neutral",
  className: b
}) => {
  const d = t ?? r ?? "", { options: f } = Vs(d);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: l });
  const h = f.find((g) => String(g.value) === String(a));
  return /* @__PURE__ */ e(
    jt,
    {
      tone: (h == null ? void 0 : h.tone) ?? c,
      dot: n,
      size: s,
      motion: o,
      className: b,
      children: (h == null ? void 0 : h.label) ?? String(a)
    }
  );
}, Vn = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, Eb = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: u("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(Hr, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: u("grid gap-4", Vn[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: u("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ i(
  "div",
  {
    className: u(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(Hr, { children: /* @__PURE__ */ e("div", { className: u("grid gap-4", Vn[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function Gu({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = Ye(), [l, c] = O(r), [b, d] = O(!1), [f, h] = O({});
  be(() => {
    c(r);
  }, [r]);
  const g = (p, v) => {
    c((y) => ({ ...y, [p]: v })), f[p] && h((y) => {
      const C = { ...y };
      return delete C[p], C;
    });
  };
  return /* @__PURE__ */ i("form", { onSubmit: async (p) => {
    p.preventDefault();
    const v = {};
    for (const y of t)
      for (const C of y.fields)
        if (C.required) {
          const x = l[C.name];
          (x == null || String(x).trim() === "") && (v[C.name] = `请填写${C.label}`);
        }
    if (Object.keys(v).length > 0) {
      h(v), o.warning("请完善必填配置项后再提交");
      return;
    }
    d(!0);
    try {
      await n(l), o.success("配置已保存生效");
    } catch (y) {
      o.error((y == null ? void 0 : y.message) || "保存失败");
    } finally {
      d(!1);
    }
  }, className: "space-y-6", children: [
    /* @__PURE__ */ e(
      Eb,
      {
        mode: a,
        sections: t.map((p) => ({
          key: p.key,
          title: p.title,
          description: p.description,
          columns: p.columns ?? 1,
          children: p.fields.map((v) => {
            const y = l[v.name], C = f[v.name], x = v.type ?? "text";
            return /* @__PURE__ */ e(
              Aa,
              {
                label: v.label,
                required: v.required,
                helperText: v.helperText,
                error: C,
                children: x === "switch" ? /* @__PURE__ */ e(
                  ft,
                  {
                    checked: !!y,
                    onChange: (k) => g(v.name, k)
                  }
                ) : x === "number" ? /* @__PURE__ */ e(
                  _a,
                  {
                    value: y ?? null,
                    placeholder: v.placeholder,
                    invalid: !!C,
                    onChange: (k) => g(v.name, k)
                  }
                ) : x === "textarea" ? /* @__PURE__ */ e(
                  Qr,
                  {
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!C,
                    onChange: (k) => g(v.name, k.target.value)
                  }
                ) : x === "select" ? /* @__PURE__ */ e(
                  It,
                  {
                    options: v.options ?? [],
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!C,
                    onChange: (k) => g(v.name, k)
                  }
                ) : x === "image" ? v.allowDirectUrlInput !== !1 ? /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    js,
                    {
                      src: String(y ?? ""),
                      alt: v.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    rt,
                    {
                      allowClear: !0,
                      value: y ?? "",
                      placeholder: v.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (k) => g(v.name, k.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  vd,
                  {
                    value: String(y ?? ""),
                    onChange: (k) => g(v.name, k)
                  }
                ) : /* @__PURE__ */ e(
                  rt,
                  {
                    type: x === "password" ? "password" : "text",
                    allowClear: !0,
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!C,
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
    /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4", children: [
      /* @__PURE__ */ e(
        ke,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            c(r), h({}), o.info("已还原初始配置值");
          },
          children: "重置更改"
        }
      ),
      /* @__PURE__ */ e(
        ke,
        {
          type: "submit",
          variant: "primary",
          loading: b,
          icon: /* @__PURE__ */ e(ic, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
const _b = Ae.forwardRef(
  ({
    surface: t = !1,
    hasActiveFilters: r = !1,
    onReset: a,
    resetLabel: n = "重置筛选",
    search: s,
    filters: o,
    trailing: l,
    children: c,
    className: b,
    ...d
  }, f) => /* @__PURE__ */ i(
    "div",
    {
      ref: f,
      "data-slot": "filter-toolbar",
      className: u(
        "flex flex-wrap items-center justify-between gap-2.5",
        t && "rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 shadow-2xs",
        b
      ),
      ...d,
      children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
          s,
          o,
          c
        ] }),
        r && a || l ? /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
          r && a ? /* @__PURE__ */ i(
            ke,
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
_b.displayName = "FilterToolbar";
function Yu({
  options: t,
  value: r,
  onValueChange: a,
  size: n = "sm",
  className: s,
  ...o
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "filter-pill-group",
      className: u("inline-flex flex-wrap items-center gap-1.5", s),
      ...o,
      children: t.map((l) => {
        const c = l.value === r;
        return /* @__PURE__ */ i(
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
function Xu({
  label: t,
  items: r,
  selectedId: a = null,
  headerAction: n,
  onSelect: s,
  onClear: o,
  allLabel: l = "全部",
  className: c
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "quick-select-bar",
      className: u(
        "flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs",
        c
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i("span", { className: "font-medium text-[var(--abc-fg-secondary)]", children: [
            t,
            "："
          ] }),
          n
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
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
          r.map((b, d) => {
            const f = b.id ?? b.key ?? b.code ?? String(d), h = b.active !== void 0 ? b.active : a === f;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => {
                  b.onSelect ? b.onSelect() : s && s(f);
                },
                className: u(
                  "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                  h ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  b.label,
                  b.count !== void 0 ? ` (${b.count})` : ""
                ]
              },
              f
            );
          })
        ] }),
        a !== null && o && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: o,
            className: "ml-auto cursor-pointer text-xs text-[var(--abc-fg-muted)] underline underline-offset-2 hover:text-[var(--abc-fg)]",
            children: "清除"
          }
        )
      ]
    }
  );
}
function qu({
  open: t,
  title: r,
  description: a,
  confirmLabel: n,
  cancelLabel: s = "取消",
  onCancel: o,
  workingLabel: l = "正在处理…",
  reasonLabel: c = "操作原因",
  reasonPlaceholder: b = "请详细填写本次变更的业务原因或工单号",
  reasonHint: d = "需输入 8–512 字符，作为运维审计依据留痕",
  reasonTooLongMessage: f = "操作原因不能超过 512 字符",
  closeLabel: h = "关闭",
  minReasonLength: g = 8,
  maxReasonLength: m = 512,
  destructive: p = !1,
  variant: v,
  pending: y = !1,
  confirmDisabled: C = !1,
  error: x = null,
  maxWidthClass: k = "sm:max-w-lg",
  className: E,
  children: B,
  onOpenChange: M,
  onConfirm: N
}) {
  const [w, I] = Ae.useState(""), S = Ae.useId(), D = p || v === "destructive";
  Ae.useEffect(() => {
    t || I("");
  }, [t]);
  const T = w.trim(), R = T.length < g, G = T.length > m, X = !y && !C && !R && !G, j = () => {
    X && N(T);
  }, P = (Y) => {
    Y.key === "Enter" && X && (Y.preventDefault(), j());
  }, W = () => {
    o == null || o(), M == null || M(!1);
  };
  return /* @__PURE__ */ e(
    lt,
    {
      open: t,
      closeLabel: h,
      onClose: W,
      onCancel: W,
      onOpenChange: M,
      closeDisabled: !1,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        Va,
        {
          "data-slot": "reasoned-action-dialog",
          className: u("w-full max-w-lg", k, E),
          closeLabel: h,
          closeDisabled: !1,
          closable: !0,
          children: [
            /* @__PURE__ */ i(Ga, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                D ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Xr, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Oa, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Xa, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              /* @__PURE__ */ e(qa, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            B && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: B }),
            x && /* @__PURE__ */ e(
              Wt,
              {
                variant: "error",
                title: "操作失败",
                message: x,
                className: "my-1 text-xs"
              }
            ),
            /* @__PURE__ */ i("div", { className: "space-y-1.5 py-1", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ i("label", { htmlFor: S, className: "font-medium text-[var(--abc-fg)]", children: [
                  c,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: u(
                      "font-mono text-[11px] tabular-nums",
                      G ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                    ),
                    children: [
                      w.length,
                      "/",
                      m
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e(
                rt,
                {
                  id: S,
                  "aria-label": "Reason",
                  value: w,
                  disabled: y,
                  placeholder: b,
                  onChange: (Y) => I(Y.target.value),
                  onKeyDown: P,
                  className: u(
                    "w-full text-xs",
                    G && "border-red-500 focus-visible:ring-red-500/20"
                  )
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: u(
                    "text-[11px]",
                    G ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: G ? f : d
                }
              )
            ] }),
            /* @__PURE__ */ i(Ya, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                ke,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: y,
                  onClick: () => M(!1),
                  children: s
                }
              ),
              /* @__PURE__ */ e(
                ke,
                {
                  type: "button",
                  variant: D ? "danger" : "primary",
                  size: "sm",
                  disabled: !X,
                  loading: y,
                  onClick: j,
                  children: y ? l : n
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function Zu({
  open: t,
  onClose: r,
  title: a,
  description: n,
  confirmLabel: s,
  cancelLabel: o = "Cancel",
  workingLabel: l = "Working…",
  reasonLabel: c = "Reason",
  reasonPlaceholder: b = "Record why this change is required",
  reasonHint: d = "8–512 characters. Stored in the operation audit.",
  reasonTooLongMessage: f = "Shorten the reason to 512 characters or fewer.",
  minReasonLength: h = 8,
  maxReasonLength: g = 512,
  destructive: m = !1,
  pending: p = !1,
  confirmDisabled: v = !1,
  error: y = null,
  width: C = 560,
  cascadeMode: x = "adjacent",
  children: k,
  onConfirm: E
}) {
  const [B, M] = Ae.useState(""), N = Ae.useId();
  Ae.useEffect(() => {
    t || M("");
  }, [t]);
  const w = B.trim(), I = w.length < h, S = w.length > g, D = !p && !v && !I && !S, T = () => {
    D && E(w);
  };
  return /* @__PURE__ */ i(
    ra,
    {
      open: t,
      onClose: r,
      width: C,
      cascadeMode: x,
      role: "dialog",
      children: [
        /* @__PURE__ */ i(zd, { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            m ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Xr, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Oa, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(jd, { className: "text-base font-semibold", children: a })
          ] }),
          n && /* @__PURE__ */ e(Od, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ i($d, { className: "space-y-4", children: [
          y && /* @__PURE__ */ e(
            Wt,
            {
              variant: "error",
              title: "操作失败",
              message: y,
              className: "text-xs"
            }
          ),
          k,
          /* @__PURE__ */ i("div", { className: "rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ i("label", { htmlFor: N, className: "font-semibold text-[var(--abc-fg)]", children: [
                c,
                " ",
                /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ i(
                "span",
                {
                  className: u(
                    "font-mono text-[11px] tabular-nums",
                    S ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
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
              rt,
              {
                id: N,
                "aria-label": "Reason",
                value: B,
                disabled: p,
                placeholder: b,
                onChange: (R) => M(R.target.value),
                className: u(
                  "w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs",
                  S && "border-red-500 focus-visible:ring-red-500/20"
                )
              }
            ),
            /* @__PURE__ */ e(
              "p",
              {
                className: u(
                  "text-[11px]",
                  S ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                ),
                children: S ? f : d
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(Wd, { children: [
          /* @__PURE__ */ e(
            ke,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: p,
              onClick: r,
              children: o
            }
          ),
          /* @__PURE__ */ e(
            ke,
            {
              type: "button",
              variant: m ? "danger" : "primary",
              size: "sm",
              disabled: !D,
              loading: p,
              onClick: T,
              children: p ? l : s
            }
          )
        ] })
      ]
    }
  );
}
function xa(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function Ab(t, r) {
  const a = t.filter((o) => !o.hideInTable && o.key !== "__abc_actions__"), n = a.map((o) => xa(o.title)).join(","), s = r.map(
    (o) => a.map((l) => {
      const c = o[l.dataIndex ?? l.key];
      if (l.options && l.options.length > 0) {
        const b = l.options.find((d) => String(d.value) === String(c));
        if (b) return xa(b.label);
      }
      return xa(c);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function Db(t, r, a) {
  const n = Ab(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), l = document.createElement("a");
    l.href = o, l.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o);
  }
  return n;
}
const Bb = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  value: n,
  onApply: s
}) => {
  const [o, l] = O(!1), [c, b] = O(n ?? "");
  be(() => {
    o && b(n ?? "");
  }, [o, n]);
  const d = n != null && String(n).trim() !== "", f = (h) => {
    s(h), l(!1);
  };
  return /* @__PURE__ */ e(
    Is,
    {
      open: o,
      onOpenChange: l,
      placement: "bottomRight",
      panelClassName: "w-60 p-3",
      content: /* @__PURE__ */ i(
        "div",
        {
          onClick: (h) => h.stopPropagation(),
          className: "space-y-2.5 text-xs font-normal text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ i("div", { className: "font-semibold text-[var(--abc-fg-secondary)]", children: [
              "筛选：",
              t
            ] }),
            r === "select" && a ? /* @__PURE__ */ e(
              It,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `选择${t}`,
                options: a,
                value: c ?? "",
                onChange: (h) => b(h)
              }
            ) : /* @__PURE__ */ e(
              rt,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `输入${t}关键字`,
                value: c ?? "",
                onChange: (h) => b(h.target.value),
                onKeyDown: (h) => {
                  h.key === "Enter" && (h.preventDefault(), f(c));
                }
              }
            ),
            /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                ke,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    b(""), f("");
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(ke, { variant: "primary", size: "xs", onClick: () => f(c), children: "筛选" })
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
            d ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(gr, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function Lb({
  columns: t,
  searchableFieldNames: r,
  settings: a,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: o,
  onToggleVisible: l,
  onSetAllVisible: c,
  onSetFixed: b,
  onSetWidth: d,
  onSetOrder: f,
  onSetSearchVisible: h,
  onReset: g
}) {
  const m = oe(o), [p, v] = O(!1), [y, C] = O(""), [x, k] = O("all"), [E, B] = O(null), M = de(null), N = de(!1);
  be(() => {
    if (!E) return;
    const j = (P) => {
      if (P.key === "Escape") {
        const W = M.current;
        B(null), M.current = null, N.current = !1, W && f(W);
      }
    };
    return document.addEventListener("keydown", j, !0), () => document.removeEventListener("keydown", j, !0);
  }, [E, f]);
  const w = ce(
    () => t.filter((j) => !j.hideInTable && j.key !== "__abc_actions__"),
    [t]
  ), I = ce(() => a.columnOrder.length === 0 ? w : [...w].sort((j, P) => {
    const W = a.columnOrder.indexOf(j.key), Y = a.columnOrder.indexOf(P.key);
    return W === -1 && Y === -1 ? 0 : W === -1 ? 1 : Y === -1 ? -1 : W - Y;
  }), [w, a.columnOrder]), S = (j) => j.key in a.columnFixed ? a.columnFixed[j.key] ?? void 0 : j.fixed, D = ce(() => {
    const j = y.trim().toLowerCase();
    return I.filter((P) => {
      if (j && !P.title.toLowerCase().includes(j) && !P.key.toLowerCase().includes(j))
        return !1;
      const W = a.hiddenKeys.includes(P.key), Y = S(P);
      return x === "fixed" ? !!Y : x === "hidden" ? W : !0;
    });
  }, [I, y, x, a.hiddenKeys, a.columnFixed]), T = ce(() => w.map((j) => j.key), [w]), R = ce(
    () => t.find((j) => j.key === "__abc_actions__"),
    [t]
  ), G = !!(n || R), X = a.columnWidths.__abc_actions__ ?? (R == null ? void 0 : R.width) ?? s;
  return /* @__PURE__ */ e(
    Is,
    {
      open: p,
      onOpenChange: v,
      placement: "bottomRight",
      motion: m,
      panelClassName: "w-[356px] overflow-hidden p-0",
      content: /* @__PURE__ */ i("div", { className: "text-xs select-none", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3.5 py-2.5", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "列设置与偏好" }),
            /* @__PURE__ */ i("span", { className: "rounded bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: [
              w.length,
              " 列"
            ] })
          ] }),
          /* @__PURE__ */ e(
            ke,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(St, { className: "h-3 w-3" }),
              onClick: g,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ e(ct, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: y,
                onChange: (j) => C(j.target.value),
                placeholder: "搜索列名称或字段标识...",
                className: "h-7 w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] pr-7 pl-8 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none"
              }
            ),
            y && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空列搜索",
                onClick: () => C(""),
                className: "absolute top-1/2 right-2 -translate-y-1/2 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ve, { className: "h-3 w-3" })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5", children: [
              { key: "all", label: "全部" },
              { key: "fixed", label: "已固定" },
              { key: "hidden", label: "已隐藏" }
            ].map((j) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => k(j.key),
                className: u(
                  "rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer",
                  x === j.key ? "bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: j.label
              },
              j.key
            )) }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(T, !0),
                  className: "text-[var(--abc-primary)] hover:underline cursor-pointer",
                  children: "全显"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(T, !1),
                  className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: "全隐"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: D.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : D.map((j) => {
          const P = !a.hiddenKeys.includes(j.key), W = S(j), Y = String(j.dataIndex ?? j.key), F = r.has(Y), K = a.searchVisible[Y] !== !1, ne = a.columnWidths[j.key] ?? j.width ?? "";
          return /* @__PURE__ */ i(
            "div",
            {
              "data-dragging": E === j.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                M.current = I.map(($) => $.key), N.current = !1, B(j.key);
              },
              onDragOver: ($) => {
                if (!E || E === j.key) return;
                $.preventDefault();
                const q = I.map((V) => V.key), U = q.indexOf(E), re = q.indexOf(j.key);
                if (U < 0 || re < 0 || U === re) return;
                const Q = $.currentTarget.getBoundingClientRect();
                if (Q.height > 0 && (U < re && $.clientY < Q.top + Q.height * 0.35 || U > re && $.clientY > Q.top + Q.height * 0.65))
                  return;
                const he = [...q], [A] = he.splice(U, 1);
                he.splice(re, 0, A), N.current = !0, f(he);
              },
              onDrop: () => {
                if (E && E !== j.key && !N.current) {
                  const $ = I.map((re) => re.key), q = $.indexOf(E), U = $.indexOf(j.key);
                  if (q >= 0 && U >= 0) {
                    const re = [...$], [Q] = re.splice(q, 1);
                    re.splice(U, 0, Q), f(re);
                  }
                }
                B(null), M.current = null, N.current = !1;
              },
              onDragEnd: () => {
                B(null), M.current = null, N.current = !1;
              },
              className: u(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                E === j.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(Ha, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(xr, { checked: P, onChange: () => l(j.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "truncate text-xs",
                        P ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: j.title
                    }
                  ),
                  W && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: W === "left" ? "左固" : "右固" })
                ] }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "number",
                      min: 64,
                      max: 800,
                      "aria-label": `${j.title} 列宽`,
                      placeholder: "宽px",
                      defaultValue: ne,
                      onBlur: ($) => {
                        const q = parseInt($.target.value, 10);
                        !Number.isNaN(q) && q >= 64 && d(j.key, q);
                      },
                      onKeyDown: ($) => {
                        if ($.key === "Enter") {
                          const q = parseInt($.target.value, 10);
                          !Number.isNaN(q) && q >= 64 && d(j.key, q);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${j.key}_${ne}`
                  ),
                  F && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: K ? "在筛选栏显示（点击隐藏）" : "已在筛选栏隐藏（点击显示）",
                      "aria-label": `切换 ${j.title} 筛选项显示`,
                      onClick: () => h(Y, !K),
                      className: u(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        K ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: /* @__PURE__ */ e(gr, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: W === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${j.title} 到左侧`,
                      onClick: () => b(j.key, W === "left" ? null : "left"),
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
                      "aria-label": `固定 ${j.title} 到右侧`,
                      onClick: () => b(j.key, W === "right" ? null : "right"),
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
            j.key
          );
        }) }),
        G && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
          /* @__PURE__ */ i("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("div", { className: "text-[11px] font-medium text-[var(--abc-fg)]", children: "操作列固定宽度" }),
            /* @__PURE__ */ e("div", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: "可在表头左缘拖拽或直接设置" })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "number",
                min: 80,
                max: 600,
                "aria-label": "操作 列宽",
                placeholder: "宽px",
                defaultValue: X,
                onBlur: (j) => {
                  const P = parseInt(j.target.value, 10);
                  !Number.isNaN(P) && P >= 80 && d("__abc_actions__", P);
                },
                onKeyDown: (j) => {
                  if (j.key === "Enter") {
                    const P = parseInt(j.target.value, 10);
                    !Number.isNaN(P) && P >= 80 && d("__abc_actions__", P);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${X}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(Qe, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: u(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            p ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(cc, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const Rb = ({ actions: t, maxInline: r = 3 }) => {
  if (t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  if (t.length <= r)
    return /* @__PURE__ */ e("div", { className: "inline-flex items-center justify-end gap-1", children: t.map((s) => /* @__PURE__ */ e(
      ke,
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
  return /* @__PURE__ */ i("div", { className: "inline-flex items-center justify-end gap-1", children: [
    a.map((s) => /* @__PURE__ */ e(
      ke,
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
            children: /* @__PURE__ */ e(Wa, { className: "h-3.5 w-3.5" })
          }
        )
      }
    )
  ] });
};
function Pb({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  onBatchDelete: n,
  onClear: s,
  motion: o
}) {
  const l = oe(o);
  return t.length === 0 ? null : /* @__PURE__ */ i(
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
        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]", children: [
          "已选择 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-bold tabular-nums", children: t.length }),
          " 项"
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          a.map((c) => /* @__PURE__ */ e(
            ke,
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
            ke,
            {
              variant: "danger",
              size: "xs",
              icon: /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
              onClick: n,
              children: "批量删除"
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              "aria-label": "取消多选",
              onClick: s,
              className: "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: [
                /* @__PURE__ */ e("span", { children: "取消选择" }),
                /* @__PURE__ */ e(Ve, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Gn = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
];
function Ju({
  storageKey: t,
  title: r,
  columns: a,
  fields: n = [],
  dataSource: s,
  loading: o,
  request: l,
  rowKey: c = "id",
  defaultPageSize: b = 10,
  pagination: d,
  renderPagination: f,
  selectedRowKey: h,
  onRowClick: g,
  searchVariant: m = "card",
  onSearchChange: p,
  onSearchSubmit: v,
  onSearchReset: y,
  clientFilter: C,
  showClientFilterSwitch: x = !1,
  defaultSearchCollapsed: k = !0,
  autoRefresh: E,
  exportable: B = !0,
  onExport: M,
  syncToUrl: N = !1,
  viewable: w = !1,
  formContainer: I = "dialog",
  formColumns: S,
  rowActions: D = [],
  maxInlineActions: T = 3,
  rowSelection: R,
  batchActions: G = [],
  expandable: X,
  maxHeight: j,
  permissions: P,
  toolbarExtra: W,
  motion: Y,
  onSaveRecord: F,
  onDeleteRecords: K
}) {
  var xn;
  const { toast: ne } = Ye(), $ = oe(Y), { hasPermission: q } = Us(), {
    settings: U,
    toggleColumnVisible: re,
    setAllColumnsVisible: Q,
    setColumnFixed: he,
    setColumnWidth: A,
    setColumnOrder: V,
    setSearchFieldVisible: Ce,
    setDensity: we,
    resetSettings: ee
  } = rl(t), ue = ce(() => !N || typeof window > "u" ? {} : xc(window.location.search), [N]), [se, ie] = O(
    () => C ?? !l
  ), [ge, le] = O(!1), [H, z] = O(!0), [Z, xe] = O(k), [De, Be] = O(() => {
    const { page: _, pageSize: J, ...ye } = ue;
    return ye;
  }), [Le, ot] = O(() => {
    const { page: _, pageSize: J, ...ye } = ue;
    return ye;
  }), [Mt, Sr] = O(""), [bt, aa] = O({
    key: "",
    direction: null
  }), [at, it] = O(() => Number(ue.page) || 1), [nt, Ir] = O(
    () => Number(ue.pageSize) || b
  ), [Mr, or] = O(!1), L = o !== void 0 ? o : Mr, [te, ae] = O([]), [Ne, Se] = O(0), [Me, _e] = O([]), [fe, Re] = O([]), [me, ze] = O(!1), Pe = E ?? !!l, [$e, Fe] = O(!1), [qe, Ht] = O(1e4), Tr = de(0), [Tt, ir] = O(null), Rt = tl(t ? `${t}_form` : void 0), [Er, Kt] = O(!1), [xt, sn] = O(null), [cr, lr] = O({}), [on, dr] = O({}), [Gs, cn] = O(!1), Ys = !(P != null && P.create) || q(P.create), _r = !(P != null && P.update) || q(P.update), br = !(P != null && P.delete) || q(P.delete);
  be(() => {
    if (!N || typeof window > "u") return;
    const _ = [
      ...n.filter((Te) => !Te.hideInSearch).map((Te) => Te.name),
      ...a.map((Te) => String(Te.dataIndex ?? Te.key)),
      "page",
      "pageSize"
    ], J = yc(window.location.search, _, {
      ...Le,
      page: at > 1 ? at : void 0,
      pageSize: nt !== b ? nt : void 0
    }), ye = `${window.location.pathname}${J}${window.location.hash}`;
    window.history.replaceState(null, "", ye);
  }, [N, n, a, Le, at, nt, b]), be(() => {
    if (!me) return;
    const _ = (J) => {
      J.key === "Escape" && !Er && !Tt && ze(!1);
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [me, Er, Tt]);
  const ln = ve(
    (_, J) => typeof c == "function" ? c(_) : (_ == null ? void 0 : _[c]) ?? J,
    [c]
  ), Pt = ve(async () => {
    if (!l) return;
    const _ = ++Tr.current;
    or(!0);
    try {
      const J = await l({
        current: at,
        pageSize: nt,
        filters: se ? {} : In(Le),
        sortField: bt.direction ? bt.key : void 0,
        sortOrder: bt.direction
      });
      if (_ !== Tr.current) return;
      ae(J.data), Se(J.total);
    } catch (J) {
      _ === Tr.current && ne.error((J == null ? void 0 : J.message) || "加载表格数据失败");
    } finally {
      _ === Tr.current && or(!1);
    }
  }, [l, at, nt, se, Le, bt, ne]);
  be(() => {
    l && Pt();
  }, [l, Pt]), be(() => {
    if (!$e || !l || typeof window > "u") return;
    const _ = window.setInterval(() => {
      Pt();
    }, qe);
    return () => window.clearInterval(_);
  }, [$e, qe, l, Pt]);
  const Ar = ce(() => {
    const _ = a.filter(
      (J) => !J.hideInTable && !U.hiddenKeys.includes(J.key)
    );
    return U.columnOrder.length === 0 ? _ : [..._].sort((J, ye) => {
      const Te = U.columnOrder.indexOf(J.key), He = U.columnOrder.indexOf(ye.key);
      return Te === -1 && He === -1 ? 0 : Te === -1 ? 1 : He === -1 ? -1 : Te - He;
    });
  }, [a, U.hiddenKeys, U.columnOrder]), na = s ?? te, Ut = ce(() => {
    if (!se && l) return na;
    const _ = a.map((J) => String(J.dataIndex ?? J.key));
    return gc({
      rows: na,
      quickKeyword: Mt,
      searchableKeys: _,
      fieldFilters: Le,
      sortField: bt.key,
      sortOrder: bt.direction
    });
  }, [se, l, na, Mt, Le, a, bt]), Xs = ce(() => {
    if (!l) {
      const _ = (at - 1) * nt;
      return Ut.slice(_, _ + nt);
    }
    return se ? Ut : te;
  }, [l, se, Ut, te, at, nt]), sa = l ? se ? Ut.length : Ne : Ut.length, Dr = ce(
    () => n.filter((_) => !_.hideInSearch),
    [n]
  ), qs = ce(
    () => new Set(Dr.map((_) => _.name)),
    [Dr]
  ), Et = ce(
    () => Dr.filter((_) => U.searchVisible[_.name] !== !1),
    [Dr, U.searchVisible]
  ), dn = ce(() => !Z || Et.length <= 3 ? Et : Et.slice(0, 3), [Et, Z]), Vt = ce(
    () => n.filter((_) => !_.hideInForm),
    [n]
  ), ur = ce(() => Object.keys(In(Le)).length + (Mt.trim() ? 1 : 0), [Le, Mt]), Br = ve(() => {
    Be({}), ot({}), Sr(""), it(1), y == null || y(), p == null || p({});
  }, [y, p]), oa = ve(() => {
    const _ = {};
    for (const J of Vt)
      J.defaultValue !== void 0 && (_[J.name] = J.defaultValue);
    return _;
  }, [Vt]), Zs = () => {
    sn(null), dr({});
    const _ = Rt.readDraft();
    lr(_ ?? oa()), Kt(!0);
  }, bn = (_) => {
    sn(_), dr({}), lr({ ..._ }), Kt(!0);
  }, un = async (_) => {
    if (_.preventDefault(), !F) return;
    const J = {};
    for (const ye of Vt) {
      const Te = cr[ye.name], He = Te == null || typeof Te == "string" && Te.trim() === "" || Array.isArray(Te) && Te.length === 0;
      if (ye.required && He) {
        J[ye.name] = `请填写${ye.label}`;
        continue;
      }
      if (ye.validator) {
        const ut = ye.validator(Te, cr);
        ut && (J[ye.name] = ut);
      }
    }
    if (Object.keys(J).length > 0) {
      dr(J);
      const ye = Object.values(J)[0];
      ne.warning(ye);
      return;
    }
    dr({}), cn(!0);
    try {
      await F(cr, xt), xt || Rt.clearDraft(), Kt(!1), ne.success(xt ? "更新成功" : "创建成功"), l && Pt();
    } catch (ye) {
      ne.error((ye == null ? void 0 : ye.message) || "提交失败");
    } finally {
      cn(!1);
    }
  }, mn = async (_) => {
    !K || _.length === 0 || !await Za({
      title: "确认删除选中记录",
      message: `即将删除 ${_.length} 条数据，删除后不可恢复，是否继续？`,
      tone: "danger",
      confirmText: "确认删除"
    }) || (await K(_), _e([]), Re([]), ne.success(`已删除 ${_.length} 条记录`), l && Pt());
  }, fn = ce(
    () => G.filter((_) => !_.permission || q(_.permission)),
    [G, q]
  ), ia = R ?? !!(K && br || fn.length > 0), ca = w || !!F && _r || !!K && br || D.length > 0, Js = ce(() => ca ? [
    ...Ar,
    {
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: w || D.length > 0 ? 184 : 136,
      align: "right",
      render: (_, J, ye) => {
        var ut;
        const Te = ln(J, ye), He = [];
        w && He.push({
          key: "__view__",
          label: "详情",
          icon: /* @__PURE__ */ e(rr, { className: "h-3 w-3" }),
          onClick: () => ir(J)
        }), F && _r && He.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Na, { className: "h-3 w-3" }),
          onClick: () => bn(J)
        });
        for (const Ze of D)
          Ze.permission && !q(Ze.permission) || (ut = Ze.hidden) != null && ut.call(Ze, J) || He.push({
            key: Ze.key,
            label: Ze.label,
            icon: Ze.icon,
            danger: Ze.danger,
            onClick: () => Ze.onClick(J)
          });
        return K && br && He.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => mn([Te])
        }), /* @__PURE__ */ e(Rb, { actions: He, maxInline: T });
      }
    }
  ] : Ar, [
    Ar,
    ca,
    w,
    F,
    _r,
    K,
    br,
    D,
    T,
    q,
    ln
  ]), Qs = () => {
    const _ = se || !l ? Ut : te;
    if (M) {
      M(_);
      return;
    }
    const J = typeof r == "string" && r.trim() ? r.trim() : t || "table-export";
    Db(J, Ar, _), ne.success(`已导出 ${_.length} 条记录`);
  }, pn = (_, J) => {
    const ye = De[_.name], Te = (He) => {
      Be((ut) => {
        const Ze = { ...ut, [_.name]: He };
        return p == null || p(Ze), Ze;
      });
    };
    return _.type === "select" ? /* @__PURE__ */ e(
      It,
      {
        allowClear: !0,
        searchable: !0,
        multiple: _.multiple,
        options: _.options ?? [],
        placeholder: _.placeholder ?? `全部${_.label}`,
        value: ye ?? (_.multiple ? [] : ""),
        onChange: Te,
        className: J == null ? void 0 : J.select
      }
    ) : _.type === "date" ? /* @__PURE__ */ e(
      Da,
      {
        value: ye ?? "",
        placeholder: _.placeholder ?? `选择${_.label}`,
        onChange: Te
      }
    ) : _.type === "dateRange" ? /* @__PURE__ */ e(
      Ba,
      {
        value: ye ?? null,
        onChange: Te
      }
    ) : _.type === "number" ? /* @__PURE__ */ e(
      _a,
      {
        value: ye ?? null,
        placeholder: _.placeholder ?? `输入${_.label}`,
        onChange: Te,
        className: J == null ? void 0 : J.input
      }
    ) : /* @__PURE__ */ e(
      rt,
      {
        allowClear: !0,
        placeholder: _.placeholder ?? `搜索${_.label}`,
        value: ye ?? "",
        onChange: (He) => Te(He.target.value),
        wrapperClassName: J == null ? void 0 : J.input
      }
    );
  }, eo = (_) => {
    const J = cr[_.name], ye = typeof _.disabled == "function" ? _.disabled(xt) : !!_.disabled, Te = (He) => {
      const ut = { ...cr, [_.name]: He };
      lr(ut), on[_.name] && dr((Ze) => {
        const yn = { ...Ze };
        return delete yn[_.name], yn;
      }), xt || Rt.saveDraft(ut);
    };
    return _.type === "select" ? /* @__PURE__ */ e(
      It,
      {
        searchable: !0,
        multiple: _.multiple,
        disabled: ye,
        options: _.options ?? [],
        value: J ?? (_.multiple ? [] : ""),
        placeholder: _.placeholder,
        onChange: Te
      }
    ) : _.type === "number" ? /* @__PURE__ */ e(
      _a,
      {
        disabled: ye,
        value: J ?? null,
        placeholder: _.placeholder,
        onChange: Te
      }
    ) : _.type === "textarea" ? /* @__PURE__ */ e(
      Qr,
      {
        disabled: ye,
        value: J ?? "",
        placeholder: _.placeholder,
        onChange: (He) => Te(He.target.value)
      }
    ) : _.type === "switch" ? /* @__PURE__ */ e(ft, { disabled: ye, checked: !!J, onChange: Te }) : _.type === "date" ? /* @__PURE__ */ e(
      Da,
      {
        disabled: ye,
        value: J ?? "",
        placeholder: _.placeholder,
        onChange: Te
      }
    ) : _.type === "dateRange" ? /* @__PURE__ */ e(
      Ba,
      {
        disabled: ye,
        value: J ?? null,
        onChange: Te
      }
    ) : _.type === "tags" ? /* @__PURE__ */ e(
      wd,
      {
        disabled: ye,
        value: Array.isArray(J) ? J : [],
        placeholder: _.placeholder,
        onChange: Te
      }
    ) : _.type === "icon" ? /* @__PURE__ */ e(kl, { value: J ?? "", onChange: Te }) : /* @__PURE__ */ e(
      rt,
      {
        disabled: ye,
        value: J ?? "",
        placeholder: _.placeholder,
        onChange: (He) => Te(He.target.value)
      }
    );
  }, Lr = S ?? (Vt.length >= 6 ? 2 : 1), hn = /* @__PURE__ */ i(je, { children: [
    !xt && Rt.hasDraft && /* @__PURE__ */ e(
      ke,
      {
        variant: "ghost",
        onClick: () => {
          Rt.clearDraft(), lr(oa());
        },
        children: "清空草稿"
      }
    ),
    /* @__PURE__ */ e(ke, { variant: "secondary", onClick: () => Kt(!1), children: "取消" }),
    /* @__PURE__ */ e(ke, { variant: "primary", loading: Gs, onClick: un, children: "确认提交" })
  ] }), vn = /* @__PURE__ */ i("form", { onSubmit: un, className: "space-y-3.5", children: [
    !xt && Rt.hasDraft && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-primary)]/25 bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-fg-secondary)]", children: [
      /* @__PURE__ */ e("span", { children: "已自动为您恢复上次未提交的本地表单草稿" }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => {
            Rt.clearDraft(), lr(oa());
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
        children: Vt.map((_) => {
          const J = Lr === 2 && (_.span === 2 || _.type === "textarea");
          return /* @__PURE__ */ e(
            Aa,
            {
              label: _.label,
              required: _.required,
              helperText: _.helperText,
              error: on[_.name],
              className: J ? "sm:col-span-2" : void 0,
              children: eo(_)
            },
            _.name
          );
        })
      }
    )
  ] }), gn = ((xn = Gn.find((_) => _.key === qe)) == null ? void 0 : xn.label) ?? "10秒";
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": $,
      className: u(
        "relative space-y-3",
        me && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        m === "toolbar" && Et.length > 0 && !ge && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ i(
          "form",
          {
            onSubmit: (_) => {
              _.preventDefault(), it(1), ot({ ...De }), v == null || v(De);
            },
            className: "flex flex-wrap items-center gap-2.5",
            children: [
              dn.map((_) => /* @__PURE__ */ e("div", { className: "flex items-center", children: pn(_, {
                input: _.span === 2 ? "w-80 sm:w-96" : "w-72 sm:w-80",
                select: "w-40"
              }) }, _.name)),
              /* @__PURE__ */ e(ke, { size: "sm", type: "submit", variant: "primary", icon: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }), children: "搜索" }),
              /* @__PURE__ */ e(
                ke,
                {
                  size: "sm",
                  type: "button",
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
                  onClick: Br,
                  children: "重置"
                }
              ),
              ur > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                ur,
                " 项"
              ] })
            ]
          }
        ) }),
        m === "card" && Et.length > 0 && !ge && /* @__PURE__ */ i(Hr, { padding: "none", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选检索" }),
              ur > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
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
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-expanded": H,
                onClick: () => z((_) => !_),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e("span", { children: H ? "收起面板" : "展开面板" }),
                  H ? /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": H, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ i(
            "form",
            {
              onSubmit: (_) => {
                _.preventDefault(), it(1), ot({ ...De }), v == null || v(De);
              },
              className: "grid grid-cols-1 items-end gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                dn.map((_) => /* @__PURE__ */ e(
                  Aa,
                  {
                    label: _.label,
                    className: _.span === 2 || _.type === "dateRange" ? "sm:col-span-2" : void 0,
                    children: pn(_)
                  },
                  _.name
                )),
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ e(ke, { type: "submit", variant: "primary", icon: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }), children: "搜索" }),
                  /* @__PURE__ */ e(
                    ke,
                    {
                      type: "button",
                      variant: "secondary",
                      icon: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }),
                      onClick: Br,
                      children: "重置"
                    }
                  ),
                  Et.length > 3 && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => xe((_) => !_),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                      children: [
                        /* @__PURE__ */ e("span", { children: Z ? `展开 (${Et.length - 3})` : "收起" }),
                        Z ? /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] }),
        /* @__PURE__ */ i(Hr, { padding: "none", children: [
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
              r && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: r }),
              F && Vt.length > 0 && Ys && /* @__PURE__ */ e(
                ke,
                {
                  variant: "primary",
                  icon: /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5" }),
                  onClick: Zs,
                  children: "新建记录"
                }
              ),
              W
            ] }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              se && /* @__PURE__ */ e(
                rt,
                {
                  size: "xs",
                  allowClear: !0,
                  prefix: /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
                  placeholder: "当前数据即时检索（支持拼音）...",
                  value: Mt,
                  onChange: (_) => {
                    Sr(_.target.value), it(1);
                  },
                  wrapperClassName: "w-52"
                }
              ),
              x && /* @__PURE__ */ e(
                Qe,
                {
                  content: se ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": se,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const _ = !se;
                        ie(_), it(1), ne.info(_ ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式");
                      },
                      className: u(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        se ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: se ? "前端筛选" : "接口筛选" })
                      ]
                    }
                  )
                }
              ),
              Pe && l && /* @__PURE__ */ i("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
                /* @__PURE__ */ e(
                  Qe,
                  {
                    content: $e ? `定时轮询运行中：每 ${gn} 自动刷新（点击暂停）` : "点击开启自动定时轮询刷新",
                    children: /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        "aria-label": "切换定时自动刷新",
                        onClick: () => Fe((_) => !_),
                        className: u(
                          "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                          $e ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                        ),
                        children: [
                          /* @__PURE__ */ e(
                            Pr,
                            {
                              className: u("h-3.5 w-3.5", $e && "animate-pulse")
                            }
                          ),
                          $e && /* @__PURE__ */ e("span", { children: gn })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(
                  Qt,
                  {
                    placement: "bottomRight",
                    items: Gn.map((_) => ({
                      key: String(_.key),
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ i("span", { children: [
                          "每 ",
                          _.label,
                          " 刷新"
                        ] }),
                        qe === _.key && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => {
                        Ht(_.key), Fe(!0);
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
              /* @__PURE__ */ e(Qe, { content: ge ? "关闭表头内联筛选行" : "开启表头内联筛选行", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => le((_) => !_),
                  className: u(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    ge ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(lc, { className: "h-3.5 w-3.5" })
                }
              ) }),
              B && /* @__PURE__ */ e(Qe, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "导出数据",
                  onClick: Qs,
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(rs, { className: "h-3.5 w-3.5" })
                }
              ) }),
              l && /* @__PURE__ */ e(Qe, { content: "刷新表格数据", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "刷新数据",
                  onClick: Pt,
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
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "宽松密度" }),
                        U.density === "comfortable" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => we("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "标准密度" }),
                        U.density === "default" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => we("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑密度" }),
                        U.density === "compact" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => we("compact")
                    }
                  ],
                  children: /* @__PURE__ */ e(Qe, { content: "表格行密度", children: /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "表格行密度",
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(dc, { className: "h-3.5 w-3.5" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ e(Qe, { content: me ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": me ? "退出全屏" : "全屏展示",
                  onClick: () => ze((_) => !_),
                  className: u(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    me ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: me ? /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ja, { className: "h-3.5 w-3.5" })
                }
              ) }),
              /* @__PURE__ */ e(
                Lb,
                {
                  columns: a,
                  searchableFieldNames: qs,
                  settings: U,
                  hasActionColumn: ca,
                  defaultActionWidth: w || D.length > 0 ? 184 : 136,
                  motion: $,
                  onToggleVisible: re,
                  onSetAllVisible: Q,
                  onSetFixed: he,
                  onSetWidth: A,
                  onSetOrder: V,
                  onSetSearchVisible: Ce,
                  onReset: ee
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            ab,
            {
              columns: Js,
              data: Xs,
              rowKey: c,
              loading: L,
              density: U.density,
              motion: $,
              selectedKeys: ia ? Me : void 0,
              onSelectionChange: ia ? (_, J) => {
                _e(_), Re(J);
              } : void 0,
              sortState: bt,
              onSortChange: (_, J) => aa({ key: _, direction: J }),
              headerFilterMode: ge,
              headerFilters: Le,
              onHeaderFilterChange: (_, J) => {
                it(1), Be((ye) => ({ ...ye, [_]: J })), ot((ye) => ({ ...ye, [_]: J }));
              },
              headerFilterRender: ge ? void 0 : (_) => {
                const J = String(_.dataIndex ?? _.key);
                return /* @__PURE__ */ e(
                  Bb,
                  {
                    title: _.title,
                    filterType: _.filterType,
                    filterOptions: _.filterOptions,
                    value: Le[J],
                    onApply: (ye) => {
                      it(1), Be((Te) => ({ ...Te, [J]: ye })), ot((Te) => ({ ...Te, [J]: ye }));
                    }
                  }
                );
              },
              columnWidths: U.columnWidths,
              onColumnResize: A,
              columnFixed: U.columnFixed,
              onColumnPin: he,
              onColumnHide: re,
              onResetColumns: ee,
              onColumnReorder: V,
              expandable: X,
              activeRowKey: h,
              onRowClick: g,
              onRowView: w ? (_) => ir(_) : void 0,
              onEmptyReset: ur > 0 ? Br : void 0,
              maxHeight: j,
              className: "rounded-none border-0"
            }
          ),
          d !== !1 && /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] px-4 py-3", children: f ? f({
            current: at,
            pageSize: nt,
            total: sa,
            mode: typeof d == "object" && d.mode ? d.mode : "offset"
          }) : typeof d == "object" ? /* @__PURE__ */ e(
            Fr,
            {
              current: at,
              pageSize: nt,
              motion: $,
              total: sa,
              onChange: (_, J) => {
                it(_), Ir(J);
              },
              ...d
            }
          ) : /* @__PURE__ */ e(
            Fr,
            {
              current: at,
              pageSize: nt,
              motion: $,
              total: sa,
              onChange: (_, J) => {
                it(_), Ir(J);
              }
            }
          ) })
        ] }),
        ia && Me.length > 0 && /* @__PURE__ */ e(
          Pb,
          {
            selectedKeys: Me,
            selectedRows: fe,
            batchActions: fn,
            motion: $,
            onBatchDelete: K && br ? () => mn(Me) : void 0,
            onClear: () => {
              _e([]), Re([]);
            }
          }
        ),
        /* @__PURE__ */ e(
          lt,
          {
            open: !!Tt,
            onClose: () => ir(null),
            title: "记录详情",
            size: "lg",
            footer: /* @__PURE__ */ i(je, { children: [
              Tt && F && _r && /* @__PURE__ */ e(
                ke,
                {
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(Na, { className: "h-3.5 w-3.5" }),
                  onClick: () => {
                    const _ = Tt;
                    ir(null), bn(_);
                  },
                  children: "编辑此记录"
                }
              ),
              /* @__PURE__ */ e(ke, { variant: "primary", onClick: () => ir(null), children: "关闭" })
            ] }),
            children: Tt && /* @__PURE__ */ e(
              Id,
              {
                bordered: !0,
                column: 2,
                items: a.filter((_) => !_.hideInTable).map((_) => {
                  const J = Tt[_.dataIndex ?? _.key];
                  return {
                    key: _.key,
                    label: _.title,
                    children: _.render ? _.render(J, Tt, 0) : String(J ?? "-")
                  };
                })
              }
            )
          }
        ),
        I === "drawer" ? /* @__PURE__ */ e(
          ra,
          {
            open: Er,
            onClose: () => Kt(!1),
            title: xt ? "编辑记录" : "新建记录",
            size: Lr === 2 ? "lg" : "md",
            footer: hn,
            children: vn
          }
        ) : /* @__PURE__ */ e(
          lt,
          {
            open: Er,
            onClose: () => Kt(!1),
            title: xt ? "编辑记录" : "新建记录",
            size: Lr === 2 ? "lg" : "md",
            footer: hn,
            children: vn
          }
        )
      ]
    }
  );
}
export {
  da as ABC_BRAND_PRESETS,
  kn as ABC_DENSITY_PRESETS,
  mb as ABC_HEADER_HEIGHT_BY_SIZE,
  mr as ABC_MOTION_PRESETS,
  Cn as ABC_RADIUS_PRESETS,
  ub as ABC_SIDEBAR_WIDTH_BY_SIZE,
  Hb as ABC_SIZE_PRESETS,
  xs as AbcConfirmHost,
  qb as AbcProvider,
  hl as AbcToastViewport,
  uu as ActionCard,
  ju as Alert,
  Du as AsyncInlineError,
  Ru as AttentionList,
  Rn as AuroraBackground,
  Nb as AuthLayout,
  Bl as Avatar,
  Kr as BYTE_UNITS,
  _s as BYTE_UNIT_FACTORS,
  nu as Badge,
  hu as BentoCard,
  pu as BentoGrid,
  Ln as BorderBeam,
  Zt as BrandLogoBlock,
  vu as Breadcrumb,
  ke as Button,
  Cu as ByteQuotaInput,
  Hr as Card,
  Fl as CardContent,
  Wl as CardDescription,
  Hl as CardFooter,
  Ol as CardHeader,
  $l as CardTitle,
  bu as CheckCard,
  du as CheckCardGroup,
  xr as Checkbox,
  Mu as Collapse,
  mu as CollapsibleCard,
  wb as CommandPalette,
  Pu as ConfirmDialog,
  Yb as ConfirmProvider,
  Jb as CopyButton,
  Os as CopyableCode,
  Il as CopyableText,
  Qb as CursorPagination,
  fb as DEFAULT_ABC_LAYOUT_SETTINGS,
  Xe as DEFAULT_ABC_THEME,
  Ur as DURATION_UNITS,
  As as DURATION_UNIT_FACTORS,
  Da as DatePicker,
  Ba as DateRangePicker,
  $s as DescriptionList,
  Eu as DescriptionListItem,
  Id as Descriptions,
  lt as Dialog,
  Va as DialogContent,
  Ua as DialogContext,
  qa as DialogDescription,
  Ya as DialogFooter,
  Ga as DialogHeader,
  Xa as DialogTitle,
  Uu as DictSelect,
  Vu as DictTag,
  ou as Divider,
  ra as Drawer,
  $d as DrawerBody,
  Od as DrawerDescription,
  Wd as DrawerFooter,
  zd as DrawerHeader,
  jd as DrawerTitle,
  Qt as Dropdown,
  vb as DualColumnNav,
  Su as DurationQuotaInput,
  El as EmptyState,
  Qd as ErrorBoundary,
  Yu as FilterPillGroup,
  _b as FilterToolbar,
  Aa as FormField,
  Bb as HeaderColumnFilterPopover,
  Bn as ICON_CATALOG,
  zt as Icon,
  _u as IconBadge,
  kl as IconPicker,
  js as ImagePreview,
  vd as ImageUpload,
  rt as Input,
  _a as InputNumber,
  tb as InspectorPanel,
  Yt as Kbd,
  yb as KeepAliveContainer,
  rd as Label,
  zu as Loading,
  Lu as LoadingStateCard,
  lu as MetricCard,
  Ub as Modal,
  xb as MultiTabBar,
  Wt as NotificationBanner,
  $u as OneTimeSecretDialog,
  Fu as PageContainer,
  Fr as Pagination,
  Ku as Permission,
  Tb as PermissionGuard,
  Is as Popover,
  fu as PricingCard,
  Lb as ProColumnSettingsPopover,
  Gu as ProConfigForm,
  Pb as ProFloatingBatchBar,
  Eb as ProFormLayout,
  Hu as ProLayout,
  Rb as ProRowActionsOverflow,
  Ju as ProTable,
  qd as Progress,
  Xu as QuickSelectBar,
  mt as RadioGroup,
  Bu as ReadErrorBanner,
  qu as ReasonedActionDialog,
  Zu as ReasonedActionDrawer,
  Jd as Result,
  Au as RichIconText,
  ad as SearchInput,
  xu as SegmentedControl,
  It as Select,
  ga as SidebarNav,
  Ge as Skeleton,
  tu as SkeletonCard,
  au as SkeletonChart,
  ru as SkeletonTable,
  wu as SliderVerify,
  eu as SmartPagination,
  iu as Space,
  Wu as SplitInspectorLayout,
  cu as SpotlightCard,
  jt as StatusTag,
  gu as Steps,
  ft as Switch,
  _n as TONE_ICONS,
  Ou as TabErrorBoundary,
  nb as Table,
  ob as TableBody,
  bb as TableCaption,
  db as TableCell,
  ab as TableCore,
  ib as TableFooter,
  lb as TableHead,
  sb as TableHeader,
  cb as TableRow,
  Iu as Tabs,
  Ll as Tag,
  wd as TagInput,
  Qr as Textarea,
  Un as ThemeCustomizer,
  Tu as Timeline,
  pl as ToastContainer,
  fl as ToastItemView,
  Qe as Tooltip,
  Wn as TopHorizontalNav,
  yu as Tree,
  Kd as Watermark,
  Za as abcConfirm,
  en as abcToast,
  Je as applyAbcThemeToDocument,
  Lt as baseFieldControlClass,
  Ma as buildCalendarMonthGrid,
  Ab as buildCsvContent,
  Kb as buttonVariants,
  In as cleanQueryObject,
  bl as clearToasts,
  u as cn,
  ua as collectAllExpandableKeys,
  ls as computeTreeCheckState,
  Vb as confirm,
  ea as copyToClipboard,
  Qa as dismissToast,
  Db as downloadTableCsv,
  gc as filterAndSortClientRows,
  vc as filterTreeNodes,
  Ws as findBreadcrumbChain,
  Rr as formatIsoDate,
  Nu as formatQuotaBytes,
  ku as formatQuotaDuration,
  fc as getCharInitial,
  Jr as getOverlayPortalContainer,
  pc as getPinyinInitials,
  zs as isSvgSource,
  ht as matchKeywordWithPinyin,
  kt as menuContainsPath,
  ll as pauseToast,
  Ls as pickBestByteUnit,
  Rs as pickBestDurationUnit,
  Gt as pushToast,
  xc as readQueryFromUrlSearch,
  Zb as registerAbcIcons,
  Xt as resolveAbcThemeMode,
  dl as resumeToast,
  su as tagVariants,
  Xb as toast,
  hc as toggleTreeNodeChecked,
  mc as transitionAbcTheme,
  Ye as useAbcConfig,
  Vs as useAbcDict,
  gl as useAbcDrawerCascadeMode,
  oe as useAbcMotion,
  Us as useAbcPermission,
  pe as useAbcSize,
  Gb as useConfirm,
  st as useControllableState,
  sl as useDialog,
  tl as useDraftStorage,
  kr as useFloatingPosition,
  $t as usePresence,
  rl as useTableSettings,
  yc as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
