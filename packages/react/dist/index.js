var to = Object.defineProperty;
var ro = (t, r, a) => r in t ? to(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var la = (t, r, a) => ro(t, typeof r != "symbol" ? r + "" : r, a);
import * as Ae from "react";
import We, { useState as O, useEffect as de, useRef as ue, useCallback as ve, useLayoutEffect as ya, createContext as Pa, useId as Ke, useContext as Vr, useMemo as ce, useImperativeHandle as Yr } from "react";
import { jsxs as i, jsx as e, Fragment as je } from "react/jsx-runtime";
import { Loader2 as Bt, Minimize2 as za, Maximize2 as ja, X as Ge, Trash2 as er, AlertTriangle as Ot, CheckCircle2 as Ct, HelpCircle as yr, Info as wr, AlertCircle as Dt, Zap as ao, XCircle as no, Wrench as so, Wallet as oo, Video as io, Users as co, UserCog as lo, UserCheck as bo, User as uo, Upload as Yn, Unlock as mo, TrendingUp as fo, Trash as po, Timer as ho, Ticket as vo, Terminal as go, Tags as xo, Tag as yo, Store as wo, StarOff as No, Star as ko, Sparkles as Nr, Smartphone as Co, SlidersHorizontal as wa, Sliders as So, ShoppingCart as Io, ShoppingBag as Mo, ShieldCheck as Oa, ShieldAlert as Xr, Shield as To, Share2 as Eo, Share as _o, Settings as Ao, Server as Do, Send as Bo, Search as ct, ScrollText as Lo, RotateCw as qr, RotateCcw as St, RefreshCw as tr, Receipt as Ro, Radio as Po, PlusCircle as zo, Plus as $a, Play as Xn, PieChart as jo, PhoneCall as Oo, Phone as $o, Pause as Wo, PanelTop as Fo, PanelLeft as Ho, Palette as qn, Package as Ko, Network as Uo, MoreHorizontal as Wa, Monitor as Zn, Minus as Zr, MessagesSquare as Go, MessageSquareText as Vo, MessageSquareQuote as Yo, MessageSquare as Xo, MessageCircle as qo, Menu as Jn, Megaphone as Zo, MapPin as Jo, Lock as Qo, ListOrdered as ei, ListChecks as ti, Link2 as ri, LineChart as ai, LayoutGrid as ni, LayoutDashboard as si, Layers as Qn, KeyRound as es, Key as oi, Image as ts, Home as ii, History as ci, Headphones as li, HardDrive as di, Handshake as bi, Globe2 as ui, Globe as mi, FolderTree as fi, FolderPlus as pi, FolderOpen as hi, FolderGit2 as vi, Folder as gi, Flame as xi, FileText as yi, FileSpreadsheet as wi, FileClock as Ni, FileCheck as ki, Eye as rr, Edit3 as Na, Edit as Ci, Download as rs, Database as Si, CreditCard as Ii, Cpu as Mi, Copy as ar, Compass as as, Coins as Ti, Clock as Pr, CircleDollarSign as Ei, CheckSquare as _i, CheckCircle as Ai, Check as Ue, Camera as Di, CalendarCheck as Bi, Calendar as Fa, Building2 as Li, Boxes as Ri, BookMarked as Pi, BellRing as zi, Bell as ji, BarChart3 as Oi, BarChart2 as $i, AlertOctagon as Wi, Activity as Fi, EyeOff as ns, ChevronDown as pt, FolderSearch as Hi, ChevronLeft as zr, ChevronRight as gt, ArrowUpRight as ss, ArrowDownRight as Ki, ChevronsLeft as os, ChevronsRight as is, UploadCloud as Ui, ArrowRight as Gi, ChevronsUpDown as Vi, ChevronsDownUp as Yi, ZoomOut as Xi, ZoomIn as qi, WifiOff as Zi, CircleAlert as Ji, GripVertical as Ha, ServerCrash as Qi, FileSearch as ec, ArrowUp as ka, ArrowDown as Ca, ArrowUpDown as wn, Pin as Jt, PinOff as tc, Pencil as rc, CornerDownLeft as ac, Sun as Sa, Moon as Ia, Code2 as nc, PanelLeftOpen as sc, PanelLeftClose as oc, Save as ic, Filter as gr, Settings2 as cc, ChevronUp as Nn, ListFilter as lc, AlignJustify as dc } from "lucide-react";
import { createPortal as dt } from "react-dom";
import Te from "dayjs";
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
    let d = !0, b = !1;
    for (const f of c) {
      const h = o(f);
      h.allChecked || (d = !1), h.someChecked && (b = !0);
    }
    return d ? (n.add(l.key), s.delete(l.key)) : b ? (n.delete(l.key), s.add(l.key)) : (n.delete(l.key), s.delete(l.key)), { allChecked: d, someChecked: b };
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
      if (ds(b)) {
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
  if (s && o) {
    const d = o === "asc" ? 1 : -1;
    l.sort((b, f) => {
      const h = b[s], g = f[s];
      return typeof h == "number" && typeof g == "number" ? (h - g) * d : String(h ?? "").localeCompare(String(g ?? ""), "zh-CN") * d;
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
  for (let b = s - 1; b >= 0; b--) {
    const f = l - b, h = Rr(t, r - 1, f);
    c.push({ iso: h, day: f, inCurrentMonth: !1, isToday: h === n });
  }
  for (let b = 1; b <= o; b++) {
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
      const d = a[l] || [];
      return c && n[l] ? [...d, ...n[l]] : d;
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
    const d = [];
    let b = 0, f = 0, h;
    for (let y = 0; y < c.length; y++) {
      let S = c[y];
      if (b === 0) {
        if (S === s && (n || c.slice(y, y + o) === r)) {
          d.push(c.slice(f, y)), f = y + o;
          continue;
        }
        if (S === "/") {
          h = y;
          continue;
        }
      }
      S === "[" ? b++ : S === "]" && b--;
    }
    const g = d.length === 0 ? c : c.substring(f), m = g.startsWith(ms), p = m ? g.substring(1) : g, v = h && h > f ? h - f : void 0;
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
    const y = Ec(f).join(":"), S = h ? y + ms : y, x = S + v;
    if (o.includes(x))
      continue;
    o.push(x);
    const C = s(v, p);
    for (let A = 0; A < C.length; ++A) {
      const D = C[A];
      o.push(S + D);
    }
    c = b + (c.length > 0 ? " " + c : c);
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
  function l(d) {
    const b = r.reduce((f, h) => h(f), t());
    return a = _c(b), n = a.cache.get, s = a.cache.set, o = c, c(d);
  }
  function c(d) {
    const b = n(d);
    if (b)
      return b;
    const f = Dc(d, a);
    return s(d, f), f;
  }
  return function() {
    return o(Bc.apply(null, arguments));
  };
}
const Oe = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, ps = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rc = /^\d+\/\d+$/, Pc = /* @__PURE__ */ new Set(["px", "full", "screen"]), zc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Oc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, $c = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yt = (t) => qt(t) || Pc.has(t) || Rc.test(t), _t = (t) => nr(t, "length", Xc), qt = (t) => !!t && !Number.isNaN(Number(t)), ma = (t) => nr(t, "number", qt), fr = (t) => !!t && Number.isInteger(Number(t)), Fc = (t) => t.endsWith("%") && qt(t.slice(0, -1)), Se = (t) => ps.test(t), At = (t) => zc.test(t), Hc = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Kc = (t) => nr(t, Hc, hs), Uc = (t) => nr(t, "position", hs), Gc = /* @__PURE__ */ new Set(["image", "url"]), Vc = (t) => nr(t, Gc, Zc), Yc = (t) => nr(t, "", qc), pr = () => !0, nr = (t, r, a) => {
  const n = ps.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, Xc = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jc.test(t) && !Oc.test(t)
), hs = () => !1, qc = (t) => $c.test(t), Zc = (t) => Wc.test(t), Jc = () => {
  const t = Oe("colors"), r = Oe("spacing"), a = Oe("blur"), n = Oe("brightness"), s = Oe("borderColor"), o = Oe("borderRadius"), l = Oe("borderSpacing"), c = Oe("borderWidth"), d = Oe("contrast"), b = Oe("grayscale"), f = Oe("hueRotate"), h = Oe("invert"), g = Oe("gap"), m = Oe("gradientColorStops"), p = Oe("gradientColorStopPositions"), v = Oe("inset"), y = Oe("margin"), S = Oe("opacity"), x = Oe("padding"), C = Oe("saturate"), A = Oe("scale"), D = Oe("sepia"), I = Oe("skew"), k = Oe("space"), w = Oe("translate"), T = () => ["auto", "contain", "none"], M = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", Se, r], E = () => [Se, r], R = () => ["", yt, _t], U = () => ["auto", qt, Se], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", Se], W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], G = () => [qt, Se];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [pr],
      spacing: [yt, _t],
      blur: ["none", "", At, Se],
      brightness: G(),
      borderColor: [t],
      borderRadius: ["none", "", "full", At, Se],
      borderSpacing: E(),
      borderWidth: R(),
      contrast: G(),
      grayscale: V(),
      hueRotate: G(),
      invert: V(),
      gap: E(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Fc, _t],
      inset: B(),
      margin: B(),
      opacity: G(),
      padding: E(),
      saturate: G(),
      scale: G(),
      sepia: V(),
      skew: G(),
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
        aspect: ["auto", "square", "video", Se]
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
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
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
        object: [...Y(), Se]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        z: ["auto", fr, Se]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
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
        flex: ["1", "auto", "initial", "none", Se]
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
        order: ["first", "last", "none", fr, Se]
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
          span: ["full", fr, Se]
        }, Se]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
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
          span: [fr, Se]
        }, Se]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        "auto-cols": ["auto", "min", "max", "fr", Se]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Se]
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
        justify: ["normal", ...F()]
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
        content: ["normal", ...F(), "baseline"]
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
        "place-content": [...F(), "baseline"]
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
        "space-x": [k]
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
        "space-y": [k]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Se, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Se, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Se, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [At]
        }, At]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Se, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Se, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Se, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Se, r, "auto", "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Se]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", yt, Se]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Se]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Se]
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
        "underline-offset": ["auto", yt, Se]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Se]
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
        content: ["none", Se]
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
        bg: [...Y(), Uc]
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
        }, Vc]
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
        "border-opacity": [S]
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
        "divide-opacity": [S]
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
        "outline-offset": [yt, Se]
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
        "ring-opacity": [S]
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
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
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
        "drop-shadow": ["", "none", At, Se]
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
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
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
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Se]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: G()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: G()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Se]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [fr, Se]
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
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Se]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Se]
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
        "will-change": ["auto", "scroll", "contents", "transform", Se]
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
  const [n, s] = O(r), o = t !== void 0, l = o ? t : n, c = ue(l);
  c.current = l;
  const d = ue(a);
  d.current = a;
  const b = ve(
    (f) => {
      var g;
      const h = typeof f == "function" ? f(c.current) : f;
      o || s(h), (g = d.current) == null || g.call(d, h);
    },
    [o]
  );
  return [l, b];
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
  de(() => {
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
  ), d = ve((m, p) => {
    s((v) => ({
      ...v,
      columnWidths: { ...v.columnWidths, [m]: Math.max(64, Math.round(p)) }
    }));
  }, []), b = ve((m) => {
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
    setColumnWidth: d,
    setColumnOrder: b,
    setSearchFieldVisible: f,
    setDensity: h,
    resetSettings: g
  };
}
const al = typeof window < "u" ? ya : de;
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
  const { side: c, align: d } = nl(n), [b, f] = O(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: c,
    arrowOffset: 16,
    transformOrigin: fa(c, d),
    positioned: !1
  })), h = ve(() => {
    if (typeof window > "u" || !r.current) return;
    const m = r.current.getBoundingClientRect(), p = a.current, v = p == null ? void 0 : p.getBoundingClientRect(), y = window.innerWidth || 1024, S = window.innerHeight || 768, x = l, C = p ? p.offsetWidth : 0, A = p ? p.offsetHeight : 0, D = C || (v == null ? void 0 : v.width) || (o ? m.width : 180), I = o ? Math.max(D, m.width) : D, k = A || (v == null ? void 0 : v.height) || 40;
    if (m.width === 0 && m.height === 0 && m.top === 0 && m.left === 0) {
      f({
        top: s,
        left: x,
        minWidth: o && m.width > 0 ? m.width : void 0,
        actualSide: c,
        arrowOffset: 16,
        transformOrigin: fa(c, d),
        positioned: !0
      });
      return;
    }
    let w = c;
    if (c === "bottom") {
      const F = S - m.bottom - s - x, V = m.top - s - x;
      k > F && V > F && (w = "top");
    } else if (c === "top") {
      const F = m.top - s - x, V = S - m.bottom - s - x;
      k > F && V > F && (w = "bottom");
    } else if (c === "left") {
      const F = m.left - s - x, V = y - m.right - s - x;
      I > F && V > F && (w = "right");
    } else if (c === "right") {
      const F = y - m.right - s - x, V = m.left - s - x;
      I > F && V > F && (w = "left");
    }
    let T = 0, M = 0;
    w === "bottom" || w === "top" ? (T = w === "bottom" ? m.bottom + s : m.top - k - s, d === "start" ? M = m.left : d === "end" ? M = m.right - I : M = m.left + m.width / 2 - I / 2) : (M = w === "right" ? m.right + s : m.left - I - s, d === "start" ? T = m.top : d === "end" ? T = m.bottom - k : T = m.top + m.height / 2 - k / 2);
    const B = Math.max(x, y - I - x), E = Math.max(x, S - k - x), R = Math.min(Math.max(x, M), B), U = Math.min(Math.max(x, T), E), Y = w === "top" || w === "bottom" ? Math.min(
      Math.max(10, m.left + m.width / 2 - R),
      Math.max(10, I - 10)
    ) : Math.min(
      Math.max(10, m.top + m.height / 2 - U),
      Math.max(10, k - 10)
    ), j = fa(w, d), $ = o ? Math.round(m.width) : void 0;
    f((F) => F.positioned && Math.abs(F.top - U) < 0.5 && Math.abs(F.left - R) < 0.5 && F.minWidth === $ && F.actualSide === w && Math.abs(F.arrowOffset - Y) < 0.5 && F.transformOrigin === j ? F : {
      top: Math.round(U * 10) / 10,
      left: Math.round(R * 10) / 10,
      minWidth: $,
      actualSide: w,
      arrowOffset: Math.round(Y),
      transformOrigin: j,
      positioned: !0
    });
  }, [r, a, c, d, s, o, l]);
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
  }, [t, h]), de(() => {
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
function Hb({
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
    leftIcon: d,
    rightIcon: b,
    block: f = !1,
    asChild: h = !1,
    type: g,
    children: m,
    ...p
  }, v) => {
    const y = a === "icon" || a === "icon-sm", C = fe(y ? void 0 : a === "default" ? "sm" : a, "sm"), A = se(n), D = !!(l || s), I = d ?? c, k = u(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      jr[r] || jr.primary,
      y ? Or[a] : Or[C],
      f && "w-full",
      t
    );
    if (h && We.isValidElement(m)) {
      const w = m;
      return We.cloneElement(w, {
        className: u(k, w.props.className),
        ...p
      });
    }
    return /* @__PURE__ */ i(
      "button",
      {
        ref: v,
        type: g,
        disabled: D,
        "data-motion": A,
        className: k,
        ...p,
        children: [
          s ? /* @__PURE__ */ e(Bt, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : I && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: I }),
          s && o !== void 0 ? o : m,
          !s && b && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: b })
        ]
      }
    );
  }
);
ke.displayName = "Button";
const Ua = Pa(null);
function Kb() {
  return Vr(Ua);
}
const sl = {
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
  title: d,
  description: b,
  children: f,
  footer: h,
  size: g,
  maxWidth: m = "md",
  width: p,
  closeOnClickModal: v = !0,
  draggable: y = !0,
  fullscreenable: S = !0,
  fullscreen: x,
  onFullscreenChange: C,
  motion: A,
  className: D
}) => {
  const I = t ?? r ?? a ?? !1, k = se(A), { isMounted: w, isVisible: T } = $t(I, k === "none" ? 0 : 180), M = Ke(), B = Ke(), E = ue(null), R = ue(null), U = ue(!1), Y = ve(() => {
    c || (n ? n() : s ? s() : o && o(!1));
  }, [c, n, s, o]), j = ue(Y);
  j.current = Y;
  const $ = !!(d !== void 0 || S), [F, V] = O(!1), W = x !== void 0 ? x : F, [G, ie] = O({ x: 0, y: 0 }), P = ue(
    null
  ), X = ve(() => {
    const N = !W;
    x === void 0 && V(N), C == null || C(N);
  }, [W, x, C]);
  de(() => {
    if (!w) return;
    const N = E.current;
    if (!N) return;
    let te = !1;
    if (typeof N.showModal == "function")
      if (N.open)
        te = !0;
      else
        try {
          N.showModal(), te = !0;
        } catch {
          N.setAttribute("open", "");
        }
    else
      N.setAttribute("open", "");
    const Ee = (ee) => {
      ee.preventDefault(), j.current();
    }, ge = (ee) => {
      ee.key === "Escape" && (ee.stopPropagation(), j.current());
    };
    return N.addEventListener("cancel", Ee), (!te || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", ge), () => {
      if (N.removeEventListener("cancel", Ee), window.removeEventListener("keydown", ge), N.open && typeof N.close == "function")
        try {
          N.close();
        } catch {
          N.removeAttribute("open");
        }
    };
  }, [w]), de(() => {
    I || (ie({ x: 0, y: 0 }), x === void 0 && V(!1));
  }, [I, x]);
  const K = (N) => {
    var ee;
    const te = N.target;
    if ((ee = te == null ? void 0 : te.closest) != null && ee.call(te, "[data-abc-floating]"))
      return !1;
    const Ee = R.current;
    if (!Ee) return !1;
    const ge = Ee.getBoundingClientRect();
    return ge.width === 0 && ge.height === 0 ? !Ee.contains(N.target) : N.clientX < ge.left || N.clientX > ge.right || N.clientY < ge.top || N.clientY > ge.bottom;
  }, re = (N) => {
    if (!y || W || N.button !== 0 || N.target.closest('button, a, input, [role="button"]')) return;
    P.current = {
      startX: N.clientX,
      startY: N.clientY,
      origX: G.x,
      origY: G.y
    };
    const te = (ge) => {
      P.current && ie({
        x: P.current.origX + (ge.clientX - P.current.startX),
        y: P.current.origY + (ge.clientY - P.current.startY)
      });
    }, Ee = () => {
      P.current = null, window.removeEventListener("mousemove", te), window.removeEventListener("mouseup", Ee);
    };
    window.addEventListener("mousemove", te), window.addEventListener("mouseup", Ee);
  };
  if (!w || typeof document > "u") return null;
  const J = g || m, pe = sl[J] || J;
  return dt(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: E,
        "data-motion": k,
        "aria-labelledby": d ? M : void 0,
        "aria-label": d ? void 0 : "对话框",
        "aria-describedby": b ? B : void 0,
        style: {
          display: I ? "flex" : "none",
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100dvh",
          maxWidth: "100vw",
          maxHeight: "100dvh",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: W ? 0 : "1rem",
          border: "none",
          backgroundColor: "rgba(2, 6, 23, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1100
        },
        onPointerDown: (N) => {
          U.current = v && K(N);
        },
        onPointerUp: (N) => {
          v && U.current && K(N) && j.current(), U.current = !1;
        },
        onClick: (N) => {
          v && N.target === E.current && !U.current && j.current();
        },
        className: u(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          W && "p-0",
          k !== "none" && (T ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: R,
            "data-dialog-panel": "",
            "data-motion": k,
            style: {
              width: !W && p ? p : void 0,
              transform: !W && (G.x !== 0 || G.y !== 0) ? `translate3d(${G.x}px, ${G.y}px, 0)` : void 0
            },
            className: u(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              W ? "h-dvh w-dvw rounded-none" : u("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !p && pe),
              k !== "none" && (T ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              D
            ),
            children: /* @__PURE__ */ i(Ua.Provider, { value: { isOpen: I, handleClose: Y, closeDisabled: c, hasHeader: $ }, children: [
              (d !== void 0 || S) && /* @__PURE__ */ i(
                "div",
                {
                  onMouseDown: re,
                  onDoubleClick: S ? X : void 0,
                  className: u(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    y && !W && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                      d && /* @__PURE__ */ e("h2", { id: M, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: d }),
                      b && /* @__PURE__ */ e("p", { id: B, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: b })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                      S && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": W ? "还原窗口" : "全屏",
                          title: W ? "退出全屏" : "全屏显示",
                          onClick: (N) => {
                            N.stopPropagation(), X();
                          },
                          onMouseDown: (N) => N.stopPropagation(),
                          onPointerDown: (N) => N.stopPropagation(),
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: W ? /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ja, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      l && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": "关闭",
                          title: "关闭弹窗",
                          disabled: c,
                          onClick: (N) => {
                            N.stopPropagation(), Y();
                          },
                          onMouseDown: (N) => N.stopPropagation(),
                          onPointerDown: (N) => N.stopPropagation(),
                          className: u(
                            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                            c && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
                          ),
                          children: /* @__PURE__ */ e(Ge, { className: "h-4 w-4" })
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
                  children: f
                }
              ),
              h && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: h })
            ] })
          }
        )
      }
    ),
    document.body
  );
}, Ub = lt;
function Ga({
  className: t,
  children: r,
  closeLabel: a = "关闭",
  closeDisabled: n,
  closable: s,
  onClose: o,
  ...l
}) {
  const c = Vr(Ua), d = s ?? (c ? !c.hasHeader : !1), b = n ?? (c == null ? void 0 : c.closeDisabled) ?? !1;
  return /* @__PURE__ */ i("div", { "data-slot": "dialog-content", className: u("relative space-y-4", t), ...l, children: [
    d && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": a,
        title: a,
        disabled: b,
        onClick: (f) => {
          f.stopPropagation(), o ? o() : c && c.handleClose();
        },
        onMouseDown: (f) => f.stopPropagation(),
        onPointerDown: (f) => f.stopPropagation(),
        className: u(
          "absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10",
          b && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
        ),
        children: /* @__PURE__ */ e(Ge, { className: "h-4 w-4" })
      }
    ),
    r
  ] });
}
function Va({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: u("flex flex-col space-y-1.5 text-left", t), ...a, children: r });
}
function Ya({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: u("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...a, children: r });
}
function Xa({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("h2", { "data-slot": "dialog-title", className: u("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...a, children: r });
}
function qa({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: u("text-xs text-[var(--abc-fg-muted)]", t), ...a, children: r });
}
const $r = /* @__PURE__ */ new Set();
let vs = null, vr = 0;
function gs(t) {
  vs = t, $r.forEach((r) => r(t));
}
function ol(t, r) {
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
      resolvedTone: ol(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const Gb = Za;
function Vb() {
  return Za;
}
const xs = () => {
  const [t, r] = O(!1), [a, n] = O(() => vs), [s, o] = O(!1);
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
          o(!0), await a.onConfirm();
        } finally {
          o(!1);
        }
      else d || (b = a.onCancel) == null || b.call(a);
      a.resolve(d), gs(null);
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
let il = 0;
function Ja() {
  const t = [...tt];
  Ea.forEach((r) => r(t));
}
function cl(t) {
  const r = wt.get(t);
  if (!r || r.isPaused || r.remaining <= 0) return;
  r.timerId && (clearTimeout(r.timerId), r.timerId = void 0);
  const a = Date.now() - r.startedAt;
  r.remaining = Math.max(0, r.remaining - a), r.isPaused = !0;
}
function ll(t) {
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
function dl() {
  wt.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), wt.clear(), tt.forEach((t) => {
    var r;
    return (r = t.onClose) == null ? void 0 : r.call(t);
  }), tt = [], Ja();
}
function Vt(t, r, a) {
  const n = `abc_toast_${++il}_${Date.now()}`;
  let s = {};
  r !== null && typeof r == "object" && !We.isValidElement(r) ? s = r : s = { message: r };
  const o = s.tone ?? t, l = o === "danger" ? "error" : o, c = s.content ?? s.message ?? s.description ?? "", d = l === "error" ? 4200 : l === "warning" ? 3600 : l === "loading" ? 0 : 3e3, b = s.duration ?? a ?? d, f = {
    ...s,
    id: n,
    tone: l,
    message: c,
    duration: b,
    createdAt: Date.now()
  };
  if (tt.length >= 30 && (tt.slice(0, tt.length - 29).forEach((g) => {
    const m = wt.get(g.id);
    m != null && m.timerId && clearTimeout(m.timerId), wt.delete(g.id);
  }), tt = tt.slice(-29)), tt = [...tt, f], Ja(), b > 0 && typeof window < "u") {
    const h = {
      startedAt: Date.now(),
      remaining: b,
      isPaused: !1,
      onExpire: () => Qa(n)
    };
    h.timerId = window.setTimeout(h.onExpire, b), wt.set(n, h);
  }
  return n;
}
const en = {
  success: (t, r) => Vt("success", t, r),
  error: (t, r) => Vt("error", t, r ?? 4200),
  info: (t, r) => Vt("info", t, r),
  warning: (t, r) => Vt("warning", t, r ?? 3600),
  loading: (t, r = 0) => Vt("loading", t, r),
  push: (t, r, a) => Vt(t, r, a),
  dismiss: (t) => Qa(t),
  clear: () => dl()
}, Xb = en, _n = {
  success: /* @__PURE__ */ e(Ct, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(Dt, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(Dt, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(Ot, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(wr, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(Bt, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, bl = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, ul = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, ml = ({
  item: t,
  resolvedSize: r,
  resolvedMotion: a,
  closable: n,
  pauseOnHover: s,
  toastClassName: o,
  toastStyle: l,
  onDismiss: c
}) => {
  const d = t.closable ?? n, b = !!t.title;
  return /* @__PURE__ */ i(
    "div",
    {
      role: t.tone === "error" || t.tone === "warning" ? "alert" : "status",
      "aria-live": t.tone === "error" ? "assertive" : "polite",
      "data-motion": a,
      onMouseEnter: () => {
        s && cl(t.id);
      },
      onMouseLeave: () => {
        s && ll(t.id);
      },
      style: { ...l, ...t.style },
      className: u(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        b ? "items-start" : "items-center",
        bl[r],
        a !== "none" && "abc-animate-popover-in",
        o,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: u("shrink-0", b && "mt-0.5"), children: t.icon ?? _n[t.tone] ?? _n.info }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
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
            children: /* @__PURE__ */ e(Ge, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, fl = ({
  position: t = "top-right",
  size: r,
  motion: a,
  maxCount: n = 5,
  pauseOnHover: s = !0,
  newestOnTop: o = !1,
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
  const [y, S] = O(() => [...tt]), x = fe(r, "sm"), C = se(a);
  de(() => {
    if (p !== void 0) return;
    const M = (B) => S(B);
    return Ea.add(M), () => {
      Ea.delete(M);
    };
  }, [p]);
  const D = (p ?? y).filter((M) => !(M.containerId && g && M.containerId !== g || M.position && M.position !== t));
  let I = D;
  o ? I = [...D].reverse().slice(0, n) : n > 0 && (I = D.slice(-n));
  const k = (M) => {
    v ? v(M) : Qa(M);
  };
  if (typeof document > "u" || I.length === 0)
    return null;
  const w = typeof h == "function" ? h() : h !== void 0 ? h : typeof document < "u" ? document.body : null;
  if (!w) return null;
  const T = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: u(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        ul[t],
        c
      ),
      style: d,
      children: I.map((M) => m ? /* @__PURE__ */ e(We.Fragment, { children: m(M, () => k(M.id)) }, M.id) : /* @__PURE__ */ e(
        ml,
        {
          item: M,
          resolvedSize: x,
          resolvedMotion: C,
          closable: l,
          pauseOnHover: s,
          toastClassName: b,
          toastStyle: f,
          onDismiss: k
        },
        M.id
      ))
    }
  );
  return dt(T, w);
}, pl = (t) => /* @__PURE__ */ e(fl, { ...t }), tn = "abc_design_theme_v1", Wr = "color-scheme", ys = Pa(null);
function An(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(Wr), n = window.localStorage.getItem(tn), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, l = ["xs", "sm", "md", "lg"], c = ["none", "subtle", "smooth", "spring"], d = s.componentSize && l.includes(s.componentSize) ? s.componentSize : t.componentSize, b = s.motion && c.includes(s.motion) ? s.motion : t.motion ?? "smooth";
    return {
      mode: o,
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
function hl(t, r) {
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
  uploadAdapter: d,
  dictAdapter: b,
  permissionAdapter: f,
  captchaAdapter: h,
  iconRegistry: g = {},
  defaultDrawerCascadeMode: m = "adjacent"
}) => {
  const p = ce(
    () => ({ ...Xe, ...r }),
    [r]
  ), [v, y] = O(() => An(p, o)), [S, x] = O(
    () => Xt(v.mode)
  ), [C, A] = O(a), [D, I] = O(s);
  de(() => {
    const W = Je(v);
    x(W), hl(v, o);
  }, [v, o]), de(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const W = window.matchMedia("(prefers-color-scheme: dark)"), G = () => {
      if (v.mode === "system") {
        const ie = Je(v);
        x(ie);
      }
    };
    return W.addEventListener("change", G), () => W.removeEventListener("change", G);
  }, [v]), de(() => {
    if (!o || typeof window > "u") return;
    const W = (G) => {
      (G.key === tn || G.key === Wr) && y(An(p, !0));
    };
    return window.addEventListener("storage", W), () => window.removeEventListener("storage", W);
  }, [o, p]);
  const k = ve(
    (W, G) => {
      mc(() => {
        y((ie) => {
          const P = { ...ie, mode: W };
          return Je(P), P;
        });
      }, G);
    },
    []
  ), w = ve(
    (W) => {
      const ie = Xt(v.mode) === "dark" ? "light" : "dark", P = Xt("system");
      k(ie === P ? "system" : ie, W);
    },
    [v.mode, k]
  ), T = ve((W) => {
    y((G) => ({ ...G, brand: W, customBrandColor: void 0 }));
  }, []), M = ve((W) => {
    y((G) => ({ ...G, customBrandColor: W }));
  }, []), B = ve((W) => {
    y((G) => ({ ...G, density: W }));
  }, []), E = ve((W) => {
    y((G) => ({ ...G, radius: W }));
  }, []), R = ve((W) => {
    y((G) => ({ ...G, fontScale: W }));
  }, []), U = ve((W) => {
    y((G) => ({ ...G, visualMode: W }));
  }, []), Y = ve((W) => {
    y((G) => ({ ...G, componentSize: W }));
  }, []), j = ve((W) => {
    y((G) => ({ ...G, motion: W }));
  }, []), $ = ve((W) => {
    y((G) => ({ ...G, ...W }));
  }, []), F = ve(() => {
    y(p), A(a), I(s);
  }, [p, a, s]), V = ce(
    () => ({
      theme: v,
      resolvedTheme: S,
      pageTransition: C,
      watermarkText: n,
      watermarkEnabled: D,
      setThemeMode: k,
      toggleTheme: w,
      setBrand: T,
      setCustomBrandColor: M,
      setDensity: B,
      setRadius: E,
      setFontScale: R,
      setVisualMode: U,
      setComponentSize: Y,
      setMotion: j,
      updateTheme: $,
      setPageTransition: A,
      setWatermarkEnabled: I,
      resetTheme: F,
      toast: l ?? en,
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
      C,
      n,
      D,
      k,
      w,
      T,
      M,
      B,
      E,
      R,
      U,
      Y,
      j,
      $,
      F,
      l,
      d,
      b,
      f,
      h,
      g,
      m
    ]
  );
  return /* @__PURE__ */ i(ys.Provider, { value: V, children: [
    t,
    !l && /* @__PURE__ */ e(pl, { ...c }),
    /* @__PURE__ */ e(xs, {})
  ] });
};
function Ye() {
  const t = Vr(ys);
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
function fe(t, r = "sm") {
  const { theme: a } = Ye();
  return t ?? a.componentSize ?? r;
}
function se(t) {
  const { theme: r } = Ye();
  return t ?? r.motion ?? "smooth";
}
function vl(t) {
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
  MessageSquareText: Vo,
  MessagesSquare: Go,
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
  X: Ge,
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
function gl(t) {
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
  const l = (t || "").replace(/^el-icon-/, "").trim(), c = l.replace(/^s-/, ""), d = pa[l] ?? pa[c] ?? pa[t];
  let b = (o == null ? void 0 : o[l]) ?? ws[l] ?? (d ? hr[d] : void 0) ?? hr[l] ?? (l ? hr[gl(l)] : void 0);
  if (!b && l) {
    const h = l.toLowerCase();
    for (const g of Dn)
      if (g.keywords.some((m) => h.includes(m))) {
        b = hr[g.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(b ?? as, { size: a, strokeWidth: n, className: u("shrink-0", s) });
}, Ns = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, xl = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
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
    value: C,
    defaultValue: A,
    maxLength: D,
    onChange: I,
    disabled: k,
    readOnly: w,
    className: T,
    wrapperClassName: M,
    ...B
  }, E) => {
    const R = fe(t, "sm"), U = se(r), Y = Ke(), j = S || Y, $ = ue(null);
    Yr(E, () => $.current, []);
    const F = C !== void 0, [V, W] = O(
      () => A != null ? String(A) : ""
    ), [G, ie] = O(!1), X = x === "password" && h !== !1, K = X && G ? "text" : x, J = (F ? String(C ?? "") : V).length, pe = J > 0, N = !!((b ?? f) && pe && !k && !w), te = !!(y || n), Ee = o ?? l, ge = c ?? d, ee = (H) => {
      F || W(H.target.value), I == null || I(H);
    }, he = ve(
      (H) => {
        if (H.preventDefault(), H.stopPropagation(), k || w) return;
        F || W(""), v == null || v();
        const z = $.current;
        if (z && (z.value = "", z.focus()), I) {
          const q = z ?? { value: "" };
          I({
            target: q,
            currentTarget: q,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [k, w, F, v, I]
    ), ne = (N ? 1 : 0) + (X ? 1 : 0) + (ge ? 1 : 0), oe = ne >= 3 ? "pr-20" : ne === 2 ? "pr-14" : ne === 1 ? "pr-9" : "pr-3", xe = /\bw-(?!full\b)\S+/.test(T || ""), le = /* @__PURE__ */ i(
      "div",
      {
        className: u(
          "relative flex items-center",
          !xe && "w-full",
          M
        ),
        children: [
          Ee && /* @__PURE__ */ e(
            "div",
            {
              className: u(
                "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
                R === "xs" ? "left-2 [&>svg]:h-3.5 [&>svg]:w-3.5" : "left-2.5 [&>svg]:h-4 [&>svg]:w-4"
              ),
              children: Ee
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              ref: $,
              id: j,
              type: K,
              value: C,
              defaultValue: A,
              maxLength: D,
              onChange: ee,
              disabled: k,
              readOnly: w,
              "data-motion": U,
              "aria-invalid": te || void 0,
              className: u(
                Lt,
                Ns[R],
                Ee ? R === "xs" ? "pl-7" : "pl-8" : R === "xs" ? "pl-2" : "pl-3",
                oe,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                K === "number" && ne > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                te && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                k && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                T
              ),
              ...B
            }
          ),
          (N || X || ge) && /* @__PURE__ */ i("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            N && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (H) => H.preventDefault(),
                onClick: he,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ge, { className: "h-3.5 w-3.5" })
              }
            ),
            X && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: k,
                "data-testid": "password-toggle",
                "aria-label": G ? m ?? "隐藏密码" : g ?? "显示密码",
                title: G ? m ?? "隐藏密码" : g ?? "显示密码",
                onMouseDown: (H) => H.preventDefault(),
                onClick: (H) => {
                  H.preventDefault(), H.stopPropagation(), !k && ie((z) => !z);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: G ? /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5" })
              }
            ),
            ge && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: ge })
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
            children: D !== void 0 ? `${J}/${D}` : J
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
  disabled: d = !1,
  placeholder: b,
  invalid: f = !1,
  className: h
}) => {
  const g = fe(l, "sm"), m = se(c), p = Ke(), [v, y] = O(r ?? null), S = t !== void 0 ? t : v, x = (C) => {
    let A = C;
    A !== null && Number.isFinite(A) ? (n !== void 0 && (A = Math.max(n, A)), s !== void 0 && (A = Math.min(s, A))) : A = null, t === void 0 && y(A), a == null || a(A);
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
            onClick: () => x((S ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(Zr, { className: "h-3 w-3" })
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
            step: o,
            disabled: d,
            placeholder: b,
            onChange: (C) => {
              const A = C.target.value;
              x(A === "" ? null : Number(A));
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
            onClick: () => x((S ?? 0) + o),
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
    id: c,
    value: d,
    defaultValue: b,
    maxLength: f,
    onChange: h,
    rows: g = 3,
    className: m,
    ...p
  }, v) => {
    const y = fe(t, "sm"), S = se(r), x = Ke(), C = c || x, [A, D] = O(
      () => String(b ?? "").length
    ), I = d !== void 0 ? String(d ?? "").length : A, k = !!(l || n), T = /* @__PURE__ */ e(
      "textarea",
      {
        ref: v,
        id: C,
        rows: g,
        value: d,
        defaultValue: b,
        maxLength: f,
        onChange: (M) => {
          d === void 0 && D(M.target.value.length), h == null || h(M);
        },
        "data-motion": S,
        "aria-invalid": k || void 0,
        className: u(
          Lt,
          xl[y],
          "leading-relaxed resize-y",
          k && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          m
        ),
        ...p
      }
    );
    return !a && !n && !s && !o ? T : /* @__PURE__ */ i("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: C,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      T,
      (n || s || o) && /* @__PURE__ */ i("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        o && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "textarea-count",
            className: "ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums",
            children: f !== void 0 ? `${I}/${f}` : I
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
], yl = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], wl = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Nl = ({
  open: t,
  current: r,
  value: a,
  onClose: n,
  onSelect: s,
  onChange: o,
  placeholder: l = "点击选择菜单图标",
  clearable: c = !0,
  disabled: d = !1,
  size: b,
  motion: f,
  className: h
}) => {
  const g = fe(b, "sm"), m = se(f), [p, v] = O(!1), [y, S] = O(""), [x, C] = O("all"), A = typeof t == "boolean", D = A ? t : p, I = a ?? r ?? "", k = () => {
    A ? n == null || n() : v(!1);
  }, w = (E) => {
    s == null || s(E), o == null || o(E), k();
  }, T = ce(() => {
    const E = y.trim();
    return Bn.filter((R) => x !== "all" && R.category !== x ? !1 : E ? ht(`${R.label} ${R.name}`, E) : !0);
  }, [y, x]), M = ce(
    () => Bn.find((E) => E.name.toLowerCase() === I.toLowerCase()),
    [I]
  ), B = /* @__PURE__ */ e(lt, { open: D, onClose: k, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ i("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        rt,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: y,
          prefix: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }),
          onChange: (E) => S(E.target.value)
        }
      ) }),
      I && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(zt, { name: I, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: I })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: yl.map((E) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => C(E.id),
        className: u(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          x === E.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: E.label
      },
      E.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: T.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: T.map((E) => {
      const R = I === E.name;
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => w(E.name),
          className: u(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            R ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            R && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              zt,
              {
                name: E.name,
                size: 20,
                className: u(
                  "transition-transform group-hover:scale-110",
                  R ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: E.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: E.name })
          ]
        },
        E.name
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
  return A ? B : /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ i(
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
          wl[g],
          Lt,
          d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          h
        ),
        children: [
          I ? /* @__PURE__ */ i("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(zt, { name: I, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: M ? `${M.label} (${I})` : I })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: l }),
          /* @__PURE__ */ i("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && I && !d && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (E) => {
                  E.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ge, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    B
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
const kl = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, Cl = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, Sl = ({
  text: t,
  displayText: r,
  children: a,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: o = !0,
  successMessage: l,
  successText: c,
  tooltip: d,
  onCopy: b,
  size: f,
  motion: h,
  className: g
}) => {
  const m = fe(f, "sm"), p = se(h), { toast: v } = Ye(), [y, S] = O(!1), x = ue(null), C = c ?? l ?? "已复制到剪贴板";
  de(() => () => {
    x.current && clearTimeout(x.current);
  }, []);
  const A = ve(
    async (k) => {
      k.stopPropagation(), k.preventDefault(), await ea(t) ? (S(!0), v.success(C), b == null || b(t), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        S(!1), x.current = null;
      }, 1500)) : v.error("复制失败，请手动复制");
    },
    [t, C, b, v]
  ), D = d !== void 0 ? d : y ? C : "点击复制", I = y ? /* @__PURE__ */ e(
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
      title: D,
      "aria-label": d || "复制",
      "data-motion": p,
      onClick: A,
      className: u(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        g
      ),
      children: I
    }
  ) : /* @__PURE__ */ i(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: D,
      "data-motion": p,
      onClick: A,
      onKeyDown: (k) => {
        (k.key === "Enter" || k.key === " ") && A(k);
      },
      className: u(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        kl[m],
        o && "font-mono tabular-nums",
        g
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && I
      ]
    }
  );
}, Yt = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = fe(t, "sm"), l = se(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": l,
      className: u(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        Cl[o],
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
  const [c, d] = O(!1), b = r || a;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": c ? n : b,
      title: c ? n : b,
      onClick: async (h) => {
        h.stopPropagation(), await ea(t) && (d(!0), setTimeout(() => d(!1), s));
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
}, Il = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Ml = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
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
  motion: C,
  className: A,
  wrapperClassName: D,
  dropdownClassName: I,
  matchWidth: k = !0,
  "aria-label": w
}) => {
  var H;
  const T = fe(x, "sm"), M = se(C), B = Ke(), E = d || B, [R, U] = st({
    value: r,
    defaultValue: a ?? (g ? [] : ""),
    onChange: n
  }), [Y, j] = O(!1), [$, F] = O(""), [V, W] = O(0), { isMounted: G, isVisible: ie } = $t(Y, M === "none" ? 0 : 140), P = ue(null), X = ue(null), K = ue(null), re = ue(null), J = !!(p ?? v), pe = !!(S || l), { style: N, actualSide: te, portalContainer: Ee } = kr({
    open: G,
    triggerRef: X,
    floatingRef: K,
    placement: "bottomLeft",
    offset: 4,
    matchWidth: k
  });
  de(() => {
    if (!Y) {
      F("");
      return;
    }
    const z = (ye) => {
      var Be, Le;
      const De = ye.target;
      (Be = P.current) != null && Be.contains(De) || (Le = K.current) != null && Le.contains(De) || j(!1);
    }, q = (ye) => {
      var De;
      ye.key === "Escape" && (ye.preventDefault(), ye.stopPropagation(), j(!1), (De = X.current) == null || De.focus());
    };
    return document.addEventListener("mousedown", z), document.addEventListener("keydown", q, !0), () => {
      document.removeEventListener("mousedown", z), document.removeEventListener("keydown", q, !0);
    };
  }, [Y]);
  const ge = ce(() => {
    const z = $.trim();
    return z ? t.filter(
      (q) => ht(q.label, z) || String(q.value).toLowerCase().includes(z.toLowerCase())
    ) : t;
  }, [t, $]), ee = ce(() => g ? Array.isArray(R) ? R : R != null && R !== "" ? [R] : [] : R != null && R !== "" ? [R] : [], [g, R]), he = ce(() => ee.map((z) => {
    const q = t.find((ye) => String(ye.value) === String(z));
    return { value: z, label: (q == null ? void 0 : q.label) ?? String(z) };
  }), [t, ee]), ne = () => {
    const z = ge.findIndex(
      (q) => !q.disabled && ee.some((ye) => String(ye) === String(q.value))
    );
    if (z >= 0)
      W(z);
    else {
      const q = ge.findIndex((ye) => !ye.disabled);
      W(q >= 0 ? q : 0);
    }
    j(!0);
  }, oe = (z) => {
    var ye;
    if (ge.length === 0) return;
    let q = V;
    for (let De = 0; De < ge.length; De++)
      if (q = (q + z + ge.length) % ge.length, !((ye = ge[q]) != null && ye.disabled)) {
        W(q);
        return;
      }
  }, xe = (z) => {
    var q;
    if (!z.disabled)
      if (g) {
        const De = ee.some((Be) => String(Be) === String(z.value)) ? ee.filter((Be) => String(Be) !== String(z.value)) : [...ee, z.value];
        U(De);
      } else
        U(z.value), j(!1), (q = X.current) == null || q.focus();
  }, le = (z) => {
    if (!y) {
      if (z.key === "Escape") {
        z.preventDefault(), z.stopPropagation(), j(!1);
        return;
      }
      if (z.key === "ArrowDown") {
        z.preventDefault(), Y ? oe(1) : ne();
        return;
      }
      if (z.key === "ArrowUp") {
        z.preventDefault(), Y ? oe(-1) : ne();
        return;
      }
      if (z.key === "Enter" || z.key === " " && z.target !== re.current)
        if (z.preventDefault(), !Y)
          ne();
        else {
          const q = ge[V];
          q && !q.disabled && xe(q);
        }
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      ref: P,
      className: u(
        "relative min-w-0",
        D || "w-full"
      ),
      children: [
        o && /* @__PURE__ */ e(
          "label",
          {
            htmlFor: E,
            className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
            children: o
          }
        ),
        b && /* @__PURE__ */ e(
          "input",
          {
            type: "hidden",
            name: b,
            value: g ? ee.join(",") : String(ee[0] ?? "")
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            ref: X,
            id: E,
            title: f,
            role: "combobox",
            "aria-label": w,
            "aria-expanded": Y,
            "aria-haspopup": "listbox",
            "aria-controls": `${E}-listbox`,
            "aria-activedescendant": Y ? `${E}-opt-${V}` : void 0,
            "aria-disabled": y || void 0,
            tabIndex: y ? -1 : 0,
            onBlur: (z) => {
              var ye;
              const q = z.relatedTarget;
              q && ((ye = K.current) != null && ye.contains(q)) || s == null || s(z);
            },
            onClick: () => {
              y || (Y ? j(!1) : ne());
            },
            onKeyDown: le,
            "data-motion": M,
            className: u(
              "flex w-full items-center justify-between gap-1.5 px-2.5 py-1 cursor-pointer select-none abc-motion-control",
              Lt,
              g ? Ml[T] : Il[T],
              Y && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
              pe && "border-[var(--abc-danger)]",
              y && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
              A
            ),
            children: [
              /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: he.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: h }) : g ? he.map((z) => /* @__PURE__ */ i(
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
                        onClick: (q) => {
                          q.stopPropagation(), U(ee.filter((ye) => String(ye) !== String(z.value)));
                        },
                        className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                        children: /* @__PURE__ */ e(Ge, { className: "h-2.5 w-2.5" })
                      }
                    )
                  ]
                },
                String(z.value)
              )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (H = he[0]) == null ? void 0 : H.label }) }),
              /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                J && he.length > 0 && !y && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "data-testid": "select-clear",
                    "aria-label": "清空",
                    onClick: (z) => {
                      z.stopPropagation(), U(g ? [] : "");
                    },
                    className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: /* @__PURE__ */ e(Ge, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ e(
                  pt,
                  {
                    className: u("h-3.5 w-3.5 transition-transform duration-150", Y && "rotate-180")
                  }
                )
              ] })
            ]
          }
        ),
        G && Ee && dt(
          /* @__PURE__ */ i(
            "div",
            {
              ref: K,
              id: `${E}-listbox`,
              role: "listbox",
              "data-abc-floating": "",
              "data-motion": M,
              "data-placement": te,
              "aria-multiselectable": g || void 0,
              style: N,
              className: u(
                "z-[1300] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                k ? "min-w-full" : "min-w-[120px]",
                ie ? "abc-animate-popover-in" : "abc-animate-popover-out",
                I
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
                      value: $,
                      onClick: (z) => z.stopPropagation(),
                      onKeyDown: le,
                      onChange: (z) => {
                        const q = z.target.value;
                        F(q);
                        const De = (q.trim() ? t.filter(
                          (Be) => ht(Be.label, q) || String(Be.value).toLowerCase().includes(q.toLowerCase())
                        ) : t).findIndex((Be) => !Be.disabled);
                        W(De >= 0 ? De : 0);
                      },
                      placeholder: "搜索或输入拼音首字母...",
                      className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "max-h-56 overflow-y-auto p-1", children: ge.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : ge.map((z, q) => {
                  const ye = ee.some((Be) => String(Be) === String(z.value)), De = q === V;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      id: `${E}-opt-${q}`,
                      type: "button",
                      role: "option",
                      "aria-selected": ye,
                      disabled: z.disabled,
                      onMouseEnter: () => {
                        z.disabled || W(q);
                      },
                      onClick: (Be) => {
                        Be.stopPropagation(), xe(z);
                      },
                      className: u(
                        "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                        ye ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : De && !z.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                        z.disabled && "opacity-45 cursor-not-allowed"
                      ),
                      children: [
                        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ e("div", { className: "truncate", children: z.label }),
                          z.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: z.description })
                        ] }),
                        ye && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 shrink-0" })
                      ]
                    },
                    String(z.value)
                  );
                }) })
              ]
            }
          ),
          Ee
        ),
        l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
        c && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, Tl = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: l,
  motion: c,
  compact: d = !1,
  className: b
}) => {
  const f = fe(l, "md"), h = se(c), p = {
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
  return /* @__PURE__ */ i(
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
}, El = {
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
  nextCursor: C,
  prevCursor: A,
  currentCursor: D,
  loadedCount: I,
  onNext: k,
  onPrev: w,
  onResetCursor: T,
  loading: M = !1
}) => {
  const B = r ?? a ?? n ?? 1, E = s ?? (typeof o == "number" ? o : void 0) ?? 10, R = fe(
    l ?? (typeof o == "string" ? o : void 0),
    "sm"
  ), U = se(c), Y = El[R], j = t ?? (d === void 0 && (S !== void 0 || x !== void 0 || k !== void 0) ? "cursor" : "offset"), $ = (J) => {
    f == null || f(1, J), g == null || g(J), m == null || m(J);
  }, F = ce(() => (b || []).map((J) => ({
    label: `${J} 条/页`,
    value: J
  })), [b]);
  if (j === "cursor")
    return /* @__PURE__ */ i(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": U,
        className: u(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          Y.wrap,
          y
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            p === !1 ? null : typeof p == "function" ? p(I ?? 0) : I !== void 0 ? /* @__PURE__ */ i("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: I }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            T && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: T,
                disabled: M || !x,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            b && b.length > 0 && (g || m || f) && /* @__PURE__ */ e(
              It,
              {
                "aria-label": "每页条数",
                size: R,
                value: E,
                disabled: M,
                onChange: (J) => $(Number(J)),
                options: F,
                searchable: !1,
                clearable: !1,
                wrapperClassName: Y.selectWrap,
                className: u("cursor-pointer font-sans tabular-nums select-none", Y.select)
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !x || M,
                onClick: w,
                className: u(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  Y.navBtn
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
                disabled: !S || M,
                onClick: k,
                className: u(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  Y.navBtn
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
  const V = d ?? 0, W = Math.max(1, Math.ceil(V / Math.max(1, E))), [G, ie] = O(""), P = ue(null);
  if (V <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": U,
        className: u(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          Y.wrap,
          y
        ),
        children: /* @__PURE__ */ e("div", { children: p === !1 ? null : typeof p == "function" ? p(0) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const X = (J) => {
    const pe = Math.min(Math.max(1, J), W);
    pe !== B && (f == null || f(pe, E), h == null || h(pe));
  }, K = () => {
    const J = G.trim();
    if (!J) {
      P.current = null;
      return;
    }
    if (J === P.current) return;
    const pe = parseInt(J, 10);
    if (Number.isNaN(pe)) {
      ie(""), P.current = null;
      return;
    }
    const N = Math.min(Math.max(1, pe), W);
    P.current = J, ie(String(N)), X(N);
  }, re = [];
  if (W <= 7)
    for (let J = 1; J <= W; J++) re.push(J);
  else {
    re.push(1), B > 3 && re.push("...");
    const J = Math.max(2, B - 1), pe = Math.min(W - 1, B + 1);
    for (let N = J; N <= pe; N++) re.push(N);
    B < W - 2 && re.push("..."), re.push(W);
  }
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": U,
      className: u(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        Y.wrap,
        y
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: p === !1 ? null : typeof p == "function" ? p(V) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: V }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          b && b.length > 0 && /* @__PURE__ */ e(
            It,
            {
              "aria-label": "每页条数",
              size: R,
              value: E,
              disabled: M,
              onChange: (J) => $(Number(J)),
              options: F,
              searchable: !1,
              clearable: !1,
              wrapperClassName: Y.selectWrap,
              className: u("cursor-pointer font-sans tabular-nums select-none", Y.select)
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: B <= 1,
              onClick: () => X(B - 1),
              className: u(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                Y.navBtn
              ),
              children: /* @__PURE__ */ e(zr, { className: "h-3.5 w-3.5" })
            }
          ),
          re.map(
            (J, pe) => J === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${pe}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => X(J),
                className: u(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  Y.pageBtn,
                  J === B ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: J
              },
              J
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: B >= W,
              onClick: () => X(B + 1),
              className: u(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                Y.navBtn
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
                    value: G,
                    onChange: (J) => {
                      P.current = null, ie(J.target.value);
                    },
                    onKeyDown: (J) => {
                      J.key === "Enter" && (J.preventDefault(), K());
                    },
                    onBlur: K,
                    className: u(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors",
                      Y.input
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
}, Qb = (t) => /* @__PURE__ */ e(Fr, { mode: "cursor", ...t }), eu = (t) => /* @__PURE__ */ e(Fr, { ...t }), Ve = ({
  variant: t = "text",
  animation: r = "pulse",
  motion: a,
  width: n,
  height: s,
  className: o,
  style: l,
  children: c,
  ...d
}) => {
  const b = se(a), f = b === "none" ? "none" : r, h = {
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
        o
      ),
      ...d,
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
        /* @__PURE__ */ e(Ve, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(Ve, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(Ve, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(Ve, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
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
        Ve,
        {
          variant: "text",
          width: c === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, c)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((l, c) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((d, b) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Ve,
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
        /* @__PURE__ */ e(Ve, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(Ve, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, l) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        Ve,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, l)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, l) => /* @__PURE__ */ e(Ve, { variant: "text", width: 36, height: 10, animation: r }, l)) })
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
function _l(t, r, a) {
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
  motion: d,
  className: b,
  children: f,
  ...h
}) => {
  const g = _l(t, r, a), m = ks[g], p = n ?? s ?? f, v = fe(c, "sm"), y = se(d);
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
        b
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
  size: s,
  motion: o,
  children: l,
  className: c
}) => {
  const d = fe(s, "sm"), b = se(o), f = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", h = a || t > 0, g = t > r ? `${r}+` : String(t), m = {
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
  return l ? /* @__PURE__ */ i("span", { "data-motion": b, className: u("relative inline-flex shrink-0", c), children: [
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
}, Al = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, Dl = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = fe(a, "sm"), l = se(n), [c, d] = O(!1), b = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": l,
      className: u(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        Al[o],
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
function su(t = {}) {
  return "";
}
const Bl = ({
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
Bl.displayName = "Tag";
const Ll = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Rl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, Pl = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, zl = {
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
  const S = t, x = fe(o, "md"), C = se(h), A = l ?? x;
  return /* @__PURE__ */ i(
    S,
    {
      "data-motion": C,
      "data-size": x,
      className: u(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        zl[c],
        g && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        m
      ),
      ...y,
      children: [
        d && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: d }),
        (r || n || b) && /* @__PURE__ */ i(
          "div",
          {
            className: u(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Rl[x]
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
              (n || b) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                b && /* @__PURE__ */ e(jt, { tone: b.tone ?? "primary", size: "xs", dot: !1, children: b.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: u(Ll[A], p), children: f ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(Ve, { width: "45%", height: 14, motion: C }),
          /* @__PURE__ */ e(Ve, { width: "90%", height: 12, motion: C }),
          /* @__PURE__ */ e(Ve, { width: "70%", height: 12, motion: C })
        ] }) : v }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: u(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              Pl[x]
            ),
            children: s
          }
        )
      ]
    }
  );
}, jl = We.forwardRef(
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
jl.displayName = "CardHeader";
const Ol = We.forwardRef(
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
Ol.displayName = "CardTitle";
const $l = We.forwardRef(
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
$l.displayName = "CardDescription";
const Wl = We.forwardRef(
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
Wl.displayName = "CardContent";
const Fl = We.forwardRef(
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
Fl.displayName = "CardFooter";
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
), Hl = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Kl = {
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
  const c = fe(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Kl[n],
        Hl[c],
        a && "flex-wrap",
        s
      ),
      ...l,
      children: o
    }
  );
}, Ul = {
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
  const c = fe(r, "md"), d = se(a), b = ue(null), [f, h] = O({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ i(
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
        Ul[c],
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
        /* @__PURE__ */ e("div", { className: "relative z-10", children: o })
      ]
    }
  );
}, Ln = ({ duration: t = 8, motion: r, className: a }) => {
  const n = se(r);
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
  const a = se(t), n = a === "none";
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
  loading: d = !1,
  hoverable: b = !0,
  size: f,
  motion: h,
  className: g,
  ...m
}) => {
  const p = fe(f, "md"), v = se(h), y = Ke().replace(/:/g, ""), S = We.useMemo(() => {
    if (!o || o.length < 2) return null;
    const C = Math.min(...o), D = Math.max(...o) - C || 1, I = 120, k = 32, T = `M ${o.map((B, E) => {
      const R = E / (o.length - 1) * I, U = k - 4 - (B - C) / D * (k - 8);
      return `${R.toFixed(1)},${U.toFixed(1)}`;
    }).join(" L ")}`, M = `${T} L ${I},${k} L 0,${k} Z`;
    return { linePath: T, areaPath: M, width: I, height: k };
  }, [o]), x = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
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
      children: d ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(Ve, { width: "45%", height: 13, motion: v }),
          /* @__PURE__ */ e(Ve, { variant: "rounded", width: 30, height: 30, motion: v })
        ] }),
        /* @__PURE__ */ e(Ve, { width: "60%", height: 26, motion: v }),
        /* @__PURE__ */ e(Ve, { width: "80%", height: 18, motion: v })
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
        (s || S) && /* @__PURE__ */ i("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
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
          S && /* @__PURE__ */ i(
            "svg",
            {
              viewBox: `0 0 ${S.width} ${S.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: `abc-spark-${y}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
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
  className: d,
  children: b
}) => {
  const f = Ke(), h = fe(o, "md"), g = se(l), [m, p] = st({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), v = (y) => {
    if (!s)
      if (t) {
        const S = Array.isArray(m) ? m : [], C = S.includes(y) ? S.filter((A) => A !== y) : [...S, y];
        p(C);
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
          className: u("grid gap-3", Gl[c], d),
          children: b
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
  onChange: d,
  disabled: b = !1,
  size: f,
  motion: h,
  className: g,
  children: m
}) => {
  const p = Vr(Ss), v = fe(f ?? (p == null ? void 0 : p.size), "md"), y = se(h ?? (p == null ? void 0 : p.motion)), S = !!(b || p != null && p.disabled), x = !!(p && t !== void 0), C = p && !p.multiple ? "radio" : "checkbox", [A, D] = st({
    value: l,
    defaultValue: c,
    onChange: d
  }), I = x ? p.multiple ? Array.isArray(p.value) && p.value.includes(t) : p.value === t : A, k = (w) => {
    S || (x ? p.toggleValue(t) : D(w));
  };
  return /* @__PURE__ */ i(
    "label",
    {
      "data-motion": y,
      "data-size": v,
      "data-checked": I ? "true" : "false",
      className: u(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        sr[v],
        I ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !S && !I && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        S ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1",
        g
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: C,
            name: p == null ? void 0 : p.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!I,
            disabled: S,
            onChange: (w) => k(w.target.checked),
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
              I ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
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
  onClick: d,
  size: b,
  motion: f,
  className: h
}) => {
  const g = fe(b, "md"), m = se(f), p = !!((o || d) && !c), v = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
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
}, Vl = {
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
  motion: d,
  className: b,
  bodyClassName: f,
  children: h
}) => {
  const g = fe(c, "md"), m = se(d), p = Ke(), [v, y] = st({
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
        b
      ),
      children: [
        /* @__PURE__ */ i("div", { className: u("flex items-center justify-between gap-3", Vl[g]), children: [
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
}, fu = ({
  tier: t,
  price: r,
  period: a = "/ 月",
  description: n,
  features: s,
  recommended: o = !1,
  badge: l = "推荐方案",
  ctaText: c = "选择此方案",
  disabled: d = !1,
  loading: b = !1,
  onSelect: f,
  size: h,
  motion: g,
  className: m
}) => {
  const p = fe(h, "md"), v = se(g);
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
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((y, S) => {
            const x = typeof y == "string" ? { text: y, included: !0 } : y, C = x.included !== !1;
            return /* @__PURE__ */ i(
              "li",
              {
                className: u(
                  "flex items-start gap-2 text-xs",
                  C ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  C ? /* @__PURE__ */ e(Ue, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(Ge, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: x.text })
                ]
              },
              S
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
            disabled: d,
            loading: b,
            onClick: f,
            children: c
          }
        ) })
      ]
    }
  );
}, Yl = {
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
  const o = fe(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: u(
        "grid auto-rows-[minmax(148px,auto)]",
        Yl[t],
        Xl[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, Xl = {
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
  hoverable: d = !0,
  size: b,
  motion: f,
  className: h,
  children: g,
  ...m
}) => {
  const p = fe(b, "md"), v = se(f), y = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", S = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ i(
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
}, ql = {
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
  const o = fe(a, "sm"), l = se(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": l,
      className: u("abc-breadcrumb", ql[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((c, d) => {
        const b = d === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ i(
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
}, Zl = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, Jl = {
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
  const d = n === "vertical", b = fe(s, "sm"), f = se(o);
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
        return /* @__PURE__ */ i(
          "li",
          {
            className: u(
              "relative flex min-w-0",
              d ? "items-start gap-3" : "flex-1 items-center gap-2.5"
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
                          Zl[b],
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
                            Jl[b],
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
}, Ql = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, ed = {
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
  className: d,
  ...b
}) {
  const f = fe(o, "sm"), h = se(l), g = a ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "segmented-control",
      "data-motion": h,
      className: u(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        c ? "flex w-full" : "inline-flex",
        Ql[f],
        d
      ),
      ...b,
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
              ed[f],
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
  const c = se(s), [d, b] = O(!1), [f, h] = O(!1), g = Ke(), m = ue(null), p = ue(null), v = ue(null), y = ue(null), S = ve(() => {
    typeof window > "u" || (v.current !== null && (window.clearTimeout(v.current), v.current = null), y.current !== null && (window.clearTimeout(y.current), y.current = null));
  }, []);
  de(() => () => S(), [S]);
  const x = ve(
    (E = !1) => {
      a || !t || (S(), h(!1), E || n <= 0 || typeof window > "u" ? b(!0) : v.current = window.setTimeout(() => {
        b(!0), v.current = null;
      }, n));
    },
    [a, t, n, S]
  ), C = ve(() => {
    if (S(), typeof window > "u") {
      b(!1);
      return;
    }
    y.current = window.setTimeout(() => {
      b(!1), y.current = null;
    }, 60);
  }, [S]), A = ve(() => {
    S(), h(!0), b(!1);
  }, [S]), { isMounted: D, isVisible: I } = $t(
    d && !a && !!t,
    c === "none" || f ? 0 : 100
  ), { style: k, actualSide: w, arrowOffset: T, portalContainer: M } = kr({
    open: D,
    triggerRef: m,
    floatingRef: p,
    placement: r,
    offset: 8
  });
  if (de(() => {
    if (!d) return;
    const E = (R) => {
      R.key === "Escape" && A();
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [d, A]), !t || a) return /* @__PURE__ */ e(je, { children: o });
  const B = w === "top" ? { left: `${T}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "bottom" ? { left: `${T}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "left" ? { top: `${T}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${T}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: m,
        "data-motion": c,
        "aria-describedby": d ? g : void 0,
        onMouseEnter: () => x(!1),
        onMouseLeave: C,
        onFocus: () => x(!0),
        onBlur: A,
        onPointerDown: A,
        className: u("inline-flex items-center", l),
        children: o
      }
    ),
    D && M && dt(
      /* @__PURE__ */ i(
        "div",
        {
          ref: p,
          id: g,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": c,
          "data-placement": w,
          style: k,
          className: u(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            c !== "none" && (I ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "relative z-10 block", children: t }),
            /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                style: B,
                className: "pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
              }
            )
          ]
        }
      ),
      M
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
  motion: d,
  children: b,
  className: f,
  panelClassName: h
}) => {
  const g = se(d), [m, p] = st({
    value: o,
    defaultValue: l,
    onChange: c
  }), { isMounted: v, isVisible: y } = $t(m, g === "none" ? 0 : 140), S = ue(null), x = ue(null), C = ue(null), A = Ke(), D = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: I, actualSide: k, portalContainer: w } = kr({
    open: v,
    triggerRef: S,
    floatingRef: x,
    placement: D,
    offset: 6
  }), T = ve(() => {
    C.current !== null && typeof window < "u" && (window.clearTimeout(C.current), C.current = null);
  }, []);
  de(() => () => T(), [T]);
  const M = ve(() => {
    s === "hover" && (T(), p(!0));
  }, [s, T, p]), B = ve(() => {
    s === "hover" && (T(), typeof window < "u" && (C.current = window.setTimeout(() => {
      p(!1), C.current = null;
    }, 140)));
  }, [s, T, p]), E = ve(($) => {
    var G;
    const F = x.current;
    if (!F) return;
    const V = Array.from(
      F.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (V.length === 0) return;
    const W = ($ % V.length + V.length) % V.length;
    (G = V[W]) == null || G.focus();
  }, []);
  de(() => {
    if (!m) return;
    const $ = (V) => {
      var G, ie;
      const W = V.target;
      (G = S.current) != null && G.contains(W) || (ie = x.current) != null && ie.contains(W) || p(!1);
    }, F = (V) => {
      var W;
      if (V.key === "Escape") {
        V.preventDefault(), V.stopPropagation(), p(!1);
        const G = (W = S.current) == null ? void 0 : W.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        G == null || G.focus();
      }
    };
    return document.addEventListener("mousedown", $), document.addEventListener("keydown", F, !0), () => {
      document.removeEventListener("mousedown", $), document.removeEventListener("keydown", F, !0);
    };
  }, [m, p]);
  const R = !r, U = ($) => {
    $.key === "ArrowDown" ? ($.preventDefault(), p(!0), R && typeof window < "u" && window.requestAnimationFrame(() => E(0))) : ($.key === "Enter" || $.key === " ") && $.target === $.currentTarget && ($.preventDefault(), p(!m));
  }, Y = ($) => {
    if (!R) return;
    const F = x.current;
    if (!F) return;
    const V = Array.from(
      F.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (V.length === 0) return;
    const W = V.indexOf(document.activeElement);
    $.key === "ArrowDown" ? ($.preventDefault(), E(W < 0 ? 0 : W + 1)) : $.key === "ArrowUp" ? ($.preventDefault(), E(W <= 0 ? V.length - 1 : W - 1)) : $.key === "Home" ? ($.preventDefault(), E(0)) : $.key === "End" && ($.preventDefault(), E(V.length - 1));
  }, j = s === "hover" ? k === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : k === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : k === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: S,
        "data-motion": g,
        onMouseEnter: M,
        onMouseLeave: B,
        className: u("inline-flex", f),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": m,
            "aria-controls": m ? A : void 0,
            "aria-haspopup": R ? "menu" : void 0,
            onClick: () => p(!m),
            onKeyDown: U,
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
          id: A,
          role: R ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": g,
          "data-placement": k,
          style: I,
          onMouseEnter: M,
          onMouseLeave: B,
          onKeyDown: Y,
          className: u(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            j,
            g !== "none" && (y ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            h
          ),
          children: r || t.map(
            ($) => $.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, $.key) : /* @__PURE__ */ i(We.Fragment, { children: [
              $.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: $.disabled,
                  onClick: () => {
                    var F;
                    $.disabled || ((F = $.onClick) == null || F.call($), p(!1));
                  },
                  className: u(
                    "abc-motion-control flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
                    $.danger ? "text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    $.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    $.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: $.icon }),
                    /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: $.label })
                  ]
                }
              )
            ] }, $.key)
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
  size: d,
  motion: b,
  className: f,
  children: h
}) => {
  const g = fe(d, "sm"), m = se(b);
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
}, td = We.forwardRef(
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
td.displayName = "Label";
const rd = Ae.forwardRef(
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
rd.displayName = "SearchInput";
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
}, ad = {
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
    label: d,
    description: b,
    className: f,
    ...h
  }, g) => {
    const m = fe(l, "sm"), p = se(c), v = Ke(), y = t || v, S = ue(null);
    Yr(g, () => S.current, []);
    const [x, C] = st({
      value: r,
      defaultValue: a
    });
    de(() => {
      S.current && (S.current.indeterminate = !!n);
    }, [n]);
    const A = !!(d || b);
    return /* @__PURE__ */ i(
      "label",
      {
        htmlFor: y,
        "data-motion": p,
        className: u(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          ad[m],
          A ? "items-start gap-2" : "items-center justify-center",
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
                A && "mt-0.5"
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
                    disabled: o,
                    onChange: (D) => {
                      if (o) return;
                      const I = D.target.checked;
                      C(I), s == null || s(I, D);
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
          A && /* @__PURE__ */ i("span", { className: "flex flex-col", children: [
            d && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: d }),
            b && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: b })
          ] })
        ]
      }
    );
  }
);
xr.displayName = "Checkbox";
const nd = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, sd = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, od = {
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
  uncheckedLabel: d,
  checkedChildren: b,
  unCheckedChildren: f,
  ariaLabel: h,
  className: g
}) => {
  const p = fe(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), v = se(l), [y, S] = st({
    value: t,
    defaultValue: r,
    onChange: a
  }), x = !!(n || s), C = c ?? b, A = d ?? f;
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
        x || S(!y);
      },
      className: u(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        nd[p],
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
              y ? sd[p] : od[p]
            ),
            children: s && /* @__PURE__ */ e(Bt, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (C || A) && /* @__PURE__ */ e("span", { className: "sr-only", children: y ? C : A })
      ]
    }
  );
}, id = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, cd = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, ld = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, dd = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, bd = {
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
  className: d
}) => {
  var m;
  const b = fe(o, "sm"), f = se(l), [h, g] = st({
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
        id[b],
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
              cd[b],
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
        return /* @__PURE__ */ i(
          "label",
          {
            className: u(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              bd[b],
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
                    ld[b],
                    v ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: v && /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        dd[b]
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
    shortcuts: d = !0,
    id: b,
    name: f,
    minDate: h,
    maxDate: g,
    size: m,
    motion: p,
    className: v
  }, y) => {
    const S = fe(m, "sm"), x = se(p), C = Ke(), A = b || C, D = ue(null), I = ue(null);
    Yr(y, () => D.current, []);
    const k = t !== void 0, [w, T] = O(r), M = k ? t ?? "" : w, [B, E] = O(!1), [R, U] = O({ top: 0, left: 0 }), [Y, j] = O(
      () => M && Te(M).isValid() ? Te(M) : Te()
    ), F = !!((s ?? o ?? !0) && M && !l);
    de(() => {
      B && j(
        M && Te(M).isValid() ? Te(M) : Te()
      );
    }, [B, M]);
    const V = ce(() => d === !1 ? [] : Array.isArray(d) ? d : [
      { label: "今天", value: () => Te().format(c) },
      { label: "昨天", value: () => Te().subtract(1, "day").format(c) },
      { label: "明天", value: () => Te().add(1, "day").format(c) },
      { label: "一周前", value: () => Te().subtract(7, "day").format(c) }
    ], [d, c]);
    de(() => {
      if (!B) return;
      const P = () => {
        if (!D.current || typeof window > "u") return;
        const X = D.current.getBoundingClientRect(), K = V.length > 0 ? 340 : 300, re = 280, pe = window.innerHeight - X.bottom < K && X.top > K ? X.top - K - 4 : X.bottom + 4;
        let N = X.left;
        N + re > window.innerWidth - 8 && (N = Math.max(8, window.innerWidth - re - 8)), U({ top: Math.max(8, pe), left: Math.max(8, N) });
      };
      return P(), window.addEventListener("resize", P), window.addEventListener("scroll", P, !0), () => {
        window.removeEventListener("resize", P), window.removeEventListener("scroll", P, !0);
      };
    }, [B, V.length]), de(() => {
      if (!B) return;
      const P = (K) => {
        var J, pe;
        const re = K.target;
        (J = D.current) != null && J.contains(re) || (pe = I.current) != null && pe.contains(re) || E(!1);
      }, X = (K) => {
        K.key === "Escape" && (K.preventDefault(), K.stopPropagation(), E(!1));
      };
      return document.addEventListener("mousedown", P), document.addEventListener("keydown", X, !0), () => {
        document.removeEventListener("mousedown", P), document.removeEventListener("keydown", X, !0);
      };
    }, [B]);
    const W = (P) => {
      k || T(P), a == null || a(P);
    }, G = ce(
      () => Ma(Y.year(), Y.month()),
      [Y]
    ), ie = ce(() => {
      if (!M) return "";
      const P = Te(M);
      return P.isValid() ? P.format("YYYY-MM-DD") : M;
    }, [M]);
    return /* @__PURE__ */ i(je, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: D,
          id: A,
          "data-datepicker-trigger": "",
          "data-motion": x,
          role: "combobox",
          "aria-expanded": B,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && E((P) => !P),
          onKeyDown: (P) => {
            !l && (P.key === "Enter" || P.key === " ") && (P.preventDefault(), E((X) => !X));
          },
          className: u(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            Lt,
            Es[S],
            B && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
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
                value: M,
                name: f,
                tabIndex: -1,
                className: "w-full min-w-0 flex-1 bg-transparent p-0 font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            F && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (P) => {
                  P.stopPropagation(), W("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ge, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      B && typeof document < "u" && dt(
        /* @__PURE__ */ i(
          "div",
          {
            ref: I,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": x,
            "aria-label": "日期选择面板",
            style: { top: R.top, left: R.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              V.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: V.map((P) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const X = typeof P.value == "function" ? P.value() : P.value;
                    W(X), E(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: P.label
                },
                P.label
              )) }),
              /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => j((P) => P.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => j((P) => P.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(zr, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: Y.format("YYYY 年 M 月") }),
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => j((P) => P.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => j((P) => P.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Ts.map((P) => /* @__PURE__ */ e("span", { className: "py-1", children: P }, P)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: G.map((P) => {
                const X = Te(P.iso), K = c === "YYYY-MM-DD" ? P.iso : X.format(c), re = P.iso === ie, J = !!(h && X.isBefore(Te(h), "day") || g && X.isAfter(Te(g), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": K,
                    disabled: J,
                    onClick: () => {
                      J || (W(K), E(!1));
                    },
                    className: u(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      re ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : P.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      P.isToday && !re && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: P.day
                  },
                  P.iso
                );
              }) })
            ]
          }
        ),
        Jr(D.current) ?? document.body
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
    shortcuts: d = !0,
    id: b,
    minDate: f,
    maxDate: h,
    size: g,
    motion: m,
    className: p
  }, v) => {
    const y = fe(g, "sm"), S = se(m), x = Ke(), C = b || x, A = ue(null), D = ue(null);
    Yr(v, () => A.current, []);
    const I = Array.isArray(t) || t === void 0 && Array.isArray(r), k = t !== void 0, [w, T] = O(
      () => ha(r)
    ), M = k ? ha(t) : w, [B, E] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [R, U] = O(!1), [Y, j] = O({ top: 0, left: 0 }), [$, F] = O(null), [V, W] = O(null), [G, ie] = O(
      () => M.start && Te(M.start).isValid() ? Te(M.start) : Te()
    ), P = ce(() => G.add(1, "month"), [G]), K = !!((s ?? o ?? !0) && (M.start || M.end) && !l);
    de(() => {
      R ? (F(null), W(null), ie(
        M.start && Te(M.start).isValid() ? Te(M.start) : Te()
      )) : (F(null), W(null));
    }, [R, M.start]);
    const re = ce(() => d === !1 ? [] : Array.isArray(d) ? d : [
      {
        label: "今天",
        getValue: () => {
          const ee = Te().format(c);
          return { start: ee, end: ee };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: Te().subtract(6, "day").format(c),
          end: Te().format(c)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: Te().subtract(29, "day").format(c),
          end: Te().format(c)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: Te().startOf("month").format(c),
          end: Te().format(c)
        })
      }
    ], [d, c]);
    de(() => {
      if (!R) return;
      const ee = () => {
        if (!A.current || typeof window > "u") return;
        const he = A.current.getBoundingClientRect(), ne = re.length > 0 ? 370 : 330, oe = 556, le = window.innerHeight - he.bottom < ne && he.top > ne ? he.top - ne - 4 : he.bottom + 4;
        let H = he.left;
        H + oe > window.innerWidth - 8 && (H = Math.max(8, window.innerWidth - oe - 8)), j({ top: Math.max(8, le), left: Math.max(8, H) });
      };
      return ee(), window.addEventListener("resize", ee), window.addEventListener("scroll", ee, !0), () => {
        window.removeEventListener("resize", ee), window.removeEventListener("scroll", ee, !0);
      };
    }, [R, re.length]), de(() => {
      if (!R) return;
      const ee = (ne) => {
        var xe, le;
        const oe = ne.target;
        (xe = A.current) != null && xe.contains(oe) || (le = D.current) != null && le.contains(oe) || U(!1);
      }, he = (ne) => {
        ne.key === "Escape" && (ne.preventDefault(), ne.stopPropagation(), U(!1));
      };
      return document.addEventListener("mousedown", ee), document.addEventListener("keydown", he, !0), () => {
        document.removeEventListener("mousedown", ee), document.removeEventListener("keydown", he, !0);
      };
    }, [R]);
    const J = (ee) => {
      k || T(ee), I ? a == null || a([ee.start, ee.end]) : a == null || a(ee);
    }, pe = ce(() => {
      if ($) {
        const ee = Te($);
        if (!V) return { start: ee, end: null };
        const he = Te(V);
        return he.isBefore(ee, "day") ? { start: he, end: ee } : { start: ee, end: he };
      }
      return {
        start: M.start && Te(M.start).isValid() ? Te(M.start) : null,
        end: M.end && Te(M.end).isValid() ? Te(M.end) : null
      };
    }, [$, V, M]), N = ce(
      () => Ma(G.year(), G.month()),
      [G]
    ), te = ce(
      () => Ma(P.year(), P.month()),
      [P]
    ), Ee = (ee) => {
      const he = Te(ee), ne = c === "YYYY-MM-DD" ? ee : he.format(c);
      if (!$) {
        F(ne), W(null);
        return;
      }
      const oe = Te($), [xe, le] = he.isBefore(oe, "day") ? [he, oe] : [oe, he];
      J({ start: xe.format(c), end: le.format(c) }), F(null), W(null), U(!1);
    }, ge = (ee, he, ne) => /* @__PURE__ */ i("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
        ne === "left" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => ie((oe) => oe.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => ie((oe) => oe.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(zr, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: ee.format("YYYY 年 M 月") }),
        ne === "right" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => ie((oe) => oe.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(gt, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => ie((oe) => oe.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Ts.map((oe) => /* @__PURE__ */ e("span", { className: "py-1", children: oe }, oe)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: he.map((oe) => {
        const xe = Te(oe.iso), le = c === "YYYY-MM-DD" ? oe.iso : xe.format(c), H = !!(pe.start && xe.isSame(pe.start, "day")), z = !!(pe.end && xe.isSame(pe.end, "day")), q = !!(pe.start && pe.end && xe.isAfter(pe.start, "day") && xe.isBefore(pe.end, "day")), ye = !!(f && xe.isBefore(Te(f), "day") || h && xe.isAfter(Te(h), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": le,
            disabled: ye,
            onMouseEnter: () => $ && W(le),
            onClick: () => !ye && Ee(oe.iso),
            className: u(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              H || z ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : q ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : oe.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              oe.isToday && !H && !z && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: oe.day
          },
          `${ne}-${oe.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ i(je, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: A,
          id: C,
          "data-daterangepicker-trigger": "",
          "data-motion": S,
          role: "combobox",
          "aria-expanded": R,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && U((ee) => !ee),
          onKeyDown: (ee) => {
            !l && (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), U((he) => !he));
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
                placeholder: B,
                value: M.start,
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
                value: M.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            K && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (ee) => {
                  ee.stopPropagation(), J({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ge, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      R && typeof document < "u" && dt(
        /* @__PURE__ */ i(
          "div",
          {
            ref: D,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": S,
            "aria-label": "日期范围选择面板",
            style: { top: Y.top, left: Y.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              re.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: re.map((ee) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const he = ee.getValue(), ne = ha(he);
                    J(ne), F(null), W(null), U(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: ee.label
                },
                ee.label
              )) }),
              /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: ge(G, N, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: ge(P, te, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: $ ? `已选起始日：${$}，请继续点击截止日期` : M.start && M.end ? `已选区间：${M.start} 至 ${M.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        Jr(A.current) ?? document.body
      )
    ] });
  }
);
Ba.displayName = "DateRangePicker";
const ud = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, md = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function fd(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function pd(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const hd = ({
  value: t = "",
  onChange: r,
  label: a,
  helperText: n,
  error: s,
  accept: o = "image/*,.svg",
  maxSizeMB: l = 5,
  disabled: c = !1,
  customUpload: d,
  size: b,
  motion: f,
  placeholder: h = "点击或拖拽图片至此处上传",
  className: g
}) => {
  const m = fe(b, "sm"), p = se(f), v = Ke(), y = ue(null), { uploadAdapter: S, toast: x } = Ye(), [C, A] = O(!1), [D, I] = O(!1), [k, w] = O(!1), T = async (E) => {
    if (!E || c || C) return;
    if (!(E.type.startsWith("image/") || E.name.toLowerCase().endsWith(".svg"))) {
      x.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (E.size >= l * 1024 * 1024) {
      x.error(`上传图片大小不能超过 ${l}MB`);
      return;
    }
    A(!0);
    try {
      const Y = await (d ?? S ?? pd)(E);
      Y ? (r == null || r(Y), x.success("上传成功")) : x.error("上传失败，未获取到图片地址");
    } catch (U) {
      x.error((U == null ? void 0 : U.message) || "上传图片失败，请重试");
    } finally {
      A(!1), y.current && (y.current.value = "");
    }
  }, M = (t == null ? void 0 : t.trim()) ?? "", B = fd(M);
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
        disabled: c || C,
        onChange: (E) => {
          var R;
          return T((R = E.target.files) == null ? void 0 : R[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        onClick: () => {
          var E;
          !M && !c && !C && ((E = y.current) == null || E.click());
        },
        onDragOver: (E) => {
          E.preventDefault(), E.stopPropagation(), !c && !C && I(!0);
        },
        onDragLeave: (E) => {
          E.preventDefault(), E.stopPropagation(), I(!1);
        },
        onDrop: (E) => {
          var R;
          E.preventDefault(), E.stopPropagation(), I(!1), !c && !C && T((R = E.dataTransfer.files) == null ? void 0 : R[0]);
        },
        className: u(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          D ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !c && !D && "hover:border-[var(--abc-primary)]",
          !M && !c && "cursor-pointer",
          c && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          ud[m],
          g
        ),
        children: [
          M ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: u(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  md[m]
                ),
                children: [
                  B ? /* @__PURE__ */ e(
                    "div",
                    {
                      className: "flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full",
                      dangerouslySetInnerHTML: { __html: M }
                    }
                  ) : /* @__PURE__ */ e("img", { src: M, alt: "凭证预览", className: "h-full w-full object-contain p-1" }),
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
            /* @__PURE__ */ i("div", { className: "flex flex-1 flex-col items-center space-y-1 text-center sm:items-start sm:text-left", children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-medium text-[var(--abc-fg)]", children: "已上传图片资源" }),
              /* @__PURE__ */ e("p", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: "支持点击放大预览、重新选择或移除" }),
              !c && /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5 pt-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: C,
                    onClick: (E) => {
                      var R;
                      E.stopPropagation(), (R = y.current) == null || R.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(tr, { className: u("h-3 w-3", C && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: C,
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
          ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Ui, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: h }),
            /* @__PURE__ */ i("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              l,
              "MB"
            ] })
          ] }),
          C && /* @__PURE__ */ i("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
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
        open: k,
        onClose: () => w(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: B ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: M }
          }
        ) : /* @__PURE__ */ e("img", { src: M, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, vd = {
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
  defaultExpandAll: d = !0,
  searchable: b = !1,
  searchPlaceholder: f = "搜索节点名称（支持拼音首字母）...",
  showToolbar: h = !1,
  size: g,
  motion: m,
  renderExtra: p,
  className: v
}) => {
  const y = fe(g, "sm"), S = se(m), [x, C] = O(""), [A, D] = O(
    () => d ? new Set(ua(t)) : /* @__PURE__ */ new Set()
  ), [I, k] = O(s), [w, T] = O([]);
  de(() => {
    d && t.length > 0 && A.size === 0 && D(new Set(ua(t)));
  }, [t, d]);
  const M = n !== void 0 ? n : I, B = l !== void 0 ? l : w, { checkedKeys: E, halfCheckedKeys: R } = ce(
    () => ls(t, M, a),
    [t, M, a]
  ), U = ce(() => new Set(E), [E]), Y = ce(() => new Set(R), [R]), { filteredNodes: j, autoExpandedKeys: $ } = ce(
    () => vc(t, x),
    [t, x]
  ), F = ce(() => x.trim() ? /* @__PURE__ */ new Set([...A, ...$]) : A, [A, $, x]), V = (P) => {
    D((X) => {
      const K = new Set(X);
      return K.has(P) ? K.delete(P) : K.add(P), K;
    });
  }, W = (P, X) => {
    const K = hc(t, E, P, X, a);
    n === void 0 && k(K.checkedKeys), o == null || o(K.checkedKeys, {
      halfCheckedKeys: K.halfCheckedKeys,
      node: P,
      checked: X
    });
  }, G = (P) => {
    if (P.disabled) return;
    const X = [P.key];
    l === void 0 && T(X), c == null || c(X, P);
  }, ie = (P, X = 0) => /* @__PURE__ */ e("ul", { role: X === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: P.map((K) => {
    const re = !!(K.children && K.children.length > 0), J = F.has(K.key), pe = U.has(K.key), N = Y.has(K.key), te = B.includes(K.key);
    return /* @__PURE__ */ i("li", { role: "treeitem", "aria-expanded": re ? J : void 0, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { paddingInlineStart: `${X * 18 + 6}px` },
          className: u(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            vd[y],
            te ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            K.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              re ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": J ? `收起 ${K.title}` : `展开 ${K.title}`,
                  onClick: () => V(K.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    gt,
                    {
                      className: u(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        J && "rotate-90"
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
                  checked: pe,
                  indeterminate: N,
                  disabled: K.disabled,
                  onChange: (Ee) => W(K, Ee)
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  disabled: K.disabled,
                  onClick: () => {
                    r && !c ? W(K, !pe) : G(K);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    K.icon && /* @__PURE__ */ e(zt, { name: K.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: K.title })
                  ]
                }
              )
            ] }),
            p && /* @__PURE__ */ e("div", { className: "shrink-0", children: p(K) })
          ]
        }
      ),
      re && J && ie(K.children, X + 1)
    ] }, K.key);
  }) });
  return /* @__PURE__ */ i("div", { "data-motion": S, className: u("space-y-2", v), children: [
    (b || h) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
      b && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        rt,
        {
          size: y,
          motion: S,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }),
          placeholder: f,
          value: x,
          onChange: (P) => C(P.target.value)
        }
      ) }),
      h && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => D(new Set(ua(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Vi, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => D(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Yi, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: j.length > 0 ? ie(j) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, gd = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, xd = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, yd = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: o = !1,
  size: l,
  motion: c,
  className: d
}) => {
  const b = fe(l, "sm"), f = se(c), [h, g] = O(r), [m, p] = O(""), v = t !== void 0 ? t : h, y = (C) => {
    t === void 0 && g(C), a == null || a(C);
  }, S = () => {
    const C = m.trim();
    if (!(!C || o)) {
      if (v.includes(C) || v.length >= s) {
        p("");
        return;
      }
      y([...v, C]), p("");
    }
  }, x = (C) => {
    o || y(v.filter((A, D) => D !== C));
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: u(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        gd[b],
        Lt,
        o && "opacity-65 cursor-not-allowed",
        d
      ),
      children: [
        v.map((C, A) => /* @__PURE__ */ i(
          "span",
          {
            className: u(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              xd[b]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: C }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${C}`,
                  onClick: () => x(A),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ge, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${C}_${A}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: o || v.length >= s,
            value: m,
            placeholder: v.length === 0 ? n : "",
            onChange: (C) => p(C.target.value),
            onBlur: S,
            onKeyDown: (C) => {
              C.key === "Enter" || C.key === "," ? (C.preventDefault(), S()) : C.key === "Backspace" && !m && v.length > 0 && x(v.length - 1);
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
const wd = {
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
  const c = fe(a, "md"), d = se(n), { captchaAdapter: b } = Ye(), f = l ?? b, [h, g] = O(null), [m, p] = O(!0), [v, y] = O(!1), [S, x] = O(!1), [C, A] = O(0), [D, I] = O(0), k = ue(!1), w = ue(0), T = ue(0), M = ve(async () => {
    p(!0), y(!1), x(!1), A(0), I(0);
    try {
      if (f) {
        const U = await f();
        g(U);
      } else
        g(jn(t, r));
    } catch {
      g(jn(t, r));
    } finally {
      p(!1);
    }
  }, [f, t, r]);
  de(() => {
    M();
  }, [M]);
  const B = (U) => {
    m || v || (k.current = !0, w.current = U, T.current = Date.now());
  }, E = ve(
    (U) => {
      if (!k.current || m || v) return;
      const Y = U - w.current, j = t - 40, $ = Math.max(0, Math.min(j, Y));
      A($), I((t - 60) / j * $);
    },
    [t, m, v]
  ), R = ve(() => {
    if (!k.current || m || v) return;
    if (k.current = !1, Date.now() - T.current > 1e4 || !h) {
      x(!0), o == null || o(), setTimeout(M, 600);
      return;
    }
    const Y = Math.round(D);
    if (typeof h.targetX == "number" && Math.abs(Y - h.targetX) > 10) {
      x(!0), o == null || o(), setTimeout(M, 550);
      return;
    }
    y(!0), s({
      nonceStr: h.nonceStr,
      value: Y
    });
  }, [D, h, m, v, o, s, M]);
  return de(() => {
    const U = (F) => E(F.clientX), Y = () => R(), j = (F) => {
      F.touches[0] && E(F.touches[0].clientX);
    }, $ = () => R();
    return window.addEventListener("mousemove", U), window.addEventListener("mouseup", Y), window.addEventListener("touchmove", j), window.addEventListener("touchend", $), () => {
      window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", Y), window.removeEventListener("touchmove", j), window.removeEventListener("touchend", $);
    };
  }, [E, R]), /* @__PURE__ */ i("div", { "data-motion": d, className: "relative flex flex-col items-center select-none", children: [
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
                style: { top: h.blockY, left: D }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新拼图",
              title: "刷新拼图",
              onClick: M,
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
          wd[c],
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
              style: { width: C + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: v ? "验证成功" : S ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(C),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: (U) => B(U.clientX),
              onTouchStart: (U) => {
                U.touches[0] && B(U.touches[0].clientX);
              },
              className: u(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                v ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: C },
              children: v ? /* @__PURE__ */ e(Ct, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Gi, { className: "h-4 w-4" })
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
}, Nd = ["TB", "GB", "MB", "KB", "B"], kd = ["h", "m", "d", "s"];
function Gr(t, r = 2) {
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
  for (const b of s) {
    if (!n.includes(b)) continue;
    const f = o[b];
    if (c >= f && c % f === 0)
      return { unit: b, amount: String(c / f) };
  }
  const d = n.includes(a) ? a : n[0];
  return {
    unit: d,
    amount: Gr(c / o[d], l)
  };
}
function Ls(t, r = "GB", a = Kr) {
  const n = a.length > 0 ? a : Kr;
  return Bs(t, r, "B", n, Nd, _s, 4);
}
function Rs(t, r = "h", a = Ur) {
  const n = a.length > 0 ? a : Ur;
  return Bs(
    t,
    r,
    "s",
    n,
    kd,
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
function Cd(t, r, a) {
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
  const C = Ae.useId(), A = t ?? `${C}-${r}`, D = `${A}-hint`, I = Number.isFinite(a) && a >= 0 ? Math.round(a) : 0, k = Ae.useMemo(
    () => m(I),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [w, T] = Ae.useState(k.unit), [M, B] = Ae.useState(k.amount), E = Ae.useRef(I);
  Ae.useEffect(() => {
    if (I === E.current) return;
    E.current = I;
    const F = m(I);
    T(F.unit), B(F.amount);
  }, [I, m]);
  const R = h[w], U = (F) => {
    const V = F.target.value;
    if (V !== "" && !/^\d*\.?\d*$/.test(V) || (B(V), V.trim() === "")) return;
    const W = Number(V);
    if (!Number.isFinite(W) || W < 0) return;
    const G = Cd(W * R, s, o);
    E.current = G, n(G);
  }, Y = (F) => {
    const V = F.target.value;
    if (!g.includes(V)) return;
    T(V);
    const W = h[V];
    B(I === 0 ? "0" : Gr(I / W, 2));
  }, j = () => {
    (M.trim() === "" || !Number.isFinite(Number(M)) || Number(M) < 0) && B(I === 0 ? "0" : Gr(I / R, 2));
  }, $ = [S, d ? void 0 : D].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ i("div", { className: u("space-y-1", b), children: [
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
              id: A,
              type: "number",
              step: R === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: c,
              value: M,
              "aria-label": y,
              "aria-describedby": $,
              placeholder: x,
              onChange: U,
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
                onChange: Y,
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
                children: g.map((F) => /* @__PURE__ */ e("option", { value: F, className: "bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]", children: p(F) }, F))
              }
            ),
            /* @__PURE__ */ e(pt, { className: "pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" })
          ] })
        ]
      }
    ),
    !d && /* @__PURE__ */ e("div", { id: D, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: v(I, w) }) })
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
  ), d = Ae.useCallback((f) => f, []), b = Ae.useCallback(
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
      formatUnitLabel: d,
      buildHintText: b
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
  ), d = Ae.useCallback(
    (f) => Ds(f, t),
    [t]
  ), b = Ae.useCallback(
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
    Ps,
    {
      ...o,
      fallbackIdSuffix: "duration",
      factors: As,
      allowedUnits: l,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: c,
      formatUnitLabel: d,
      buildHintText: b
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
  ariaLabel: d = "内容切换标签",
  extra: b,
  className: f,
  panelClassName: h
}) {
  var A;
  const g = fe(l, "md"), m = se(c), p = Ke(), [v, y] = st({
    value: r ?? a,
    defaultValue: n ?? ((A = t[0]) == null ? void 0 : A.key) ?? "",
    onChange: s
  }), S = (D, I) => {
    const k = t.filter((T) => !T.disabled);
    if (k.length === 0) return;
    const w = k.findIndex((T) => {
      var M;
      return T.key === ((M = t[I]) == null ? void 0 : M.key);
    });
    if (D.key === "ArrowRight") {
      D.preventDefault();
      const T = k[(w + 1) % k.length];
      T && y(T.key);
    } else if (D.key === "ArrowLeft") {
      D.preventDefault();
      const T = k[(w - 1 + k.length) % k.length];
      T && y(T.key);
    }
  }, x = t.some((D) => D.children !== void 0), C = g === "xs" ? "px-2.5 py-1 text-[11px]" : g === "sm" ? "px-3 py-1.5 text-xs" : g === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
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
              "aria-label": d,
              className: u(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((D, I) => {
                const k = D.key === v, w = `${p}-tab-${D.key}`;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    id: w,
                    type: "button",
                    role: "tab",
                    "aria-selected": k,
                    tabIndex: k ? 0 : -1,
                    disabled: D.disabled,
                    onClick: () => !D.disabled && y(D.key),
                    onKeyDown: (T) => S(T, I),
                    className: u(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      C,
                      o === "line" ? u(
                        "abc-tab-trigger",
                        k ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? u(
                        "rounded-[var(--abc-radius-sm)]",
                        k ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : u(
                        "rounded-[var(--abc-radius-md)] border",
                        k ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]"
                      )
                    ),
                    children: [
                      D.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: D.icon }),
                      /* @__PURE__ */ e("span", { children: D.label }),
                      D.badge !== void 0 && (typeof D.badge == "number" || typeof D.badge == "string" ? /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums", children: D.badge }) : D.badge)
                    ]
                  },
                  D.key
                );
              })
            }
          ),
          b && /* @__PURE__ */ e("div", { className: "shrink-0", children: b })
        ]
      }
    ),
    x && /* @__PURE__ */ e("div", { children: t.map((D) => {
      const I = D.key === v, k = `${p}-tab-${D.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": k,
          tabIndex: I ? 0 : void 0,
          ...I ? {} : { hidden: "until-found" },
          children: I && /* @__PURE__ */ e("div", { className: u("pt-4", m !== "none" && "abc-animate-fade-in", h), children: D.children })
        },
        D.key
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
  placeholder: d,
  className: b,
  zoomable: f = !0
}) => {
  const h = fe(a, "sm"), g = se(n), m = s ?? On[h], p = o ?? On[h], [v, y] = O(!1), [S, x] = O(!1), [C, A] = O(1), [D, I] = O(0), k = typeof t == "string" ? t.trim() : "", w = zs(k), T = ce(() => k ? w && k.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(k)}` : k : "", [k, w]);
  if (de(() => {
    y(!1);
  }, [k]), !k || v)
    return d ? /* @__PURE__ */ e(je, { children: d }) : /* @__PURE__ */ e(
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
        children: v ? /* @__PURE__ */ e(Dt, { className: "h-4 w-4" }) : /* @__PURE__ */ e(ts, { className: "h-4 w-4" })
      }
    );
  const M = (B) => {
    B.stopPropagation(), f && (A(1), I(0), x(!0));
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
        onClick: M,
        onKeyDown: (B) => {
          f && (B.key === "Enter" || B.key === " ") && (B.preventDefault(), M(B));
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
              src: T,
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
        open: S,
        onClose: () => x(!1),
        title: r,
        size: "lg",
        motion: g,
        footer: /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => A((B) => Math.max(0.4, Number((B - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Xi, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ i("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(C * 100),
            "%"
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => A((B) => Math.min(3, Number((B + 0.2).toFixed(2)))),
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
              onClick: () => I((B) => (B + 90) % 360),
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
              style: { transform: `scale(${C}) rotate(${D}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: T, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Sd = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: l,
  className: c
}) => {
  const d = fe(o, "sm"), b = se(l), f = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", g = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[d];
  return /* @__PURE__ */ i("div", { "data-motion": b, className: u("space-y-2.5", c), children: [
    (t || r) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
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
}, Id = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Md = {
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
  const d = Ke(), b = fe(o, "sm"), f = se(l), [h, g] = O(a), m = n !== void 0 ? n : h, p = (v, y) => {
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
        return /* @__PURE__ */ i(
          "details",
          {
            name: r ? d : void 0,
            open: y,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ i(
                "summary",
                {
                  "aria-disabled": v.disabled || void 0,
                  onClick: (S) => {
                    S.preventDefault(), !v.disabled && p(v.key, !y);
                  },
                  className: u(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Id[b],
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
                    Md[b]
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
}, Td = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, Tu = ({ items: t, size: r, motion: a, className: n }) => {
  const s = fe(r, "sm"), o = se(a), l = {
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
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: u("m-0 list-none space-y-0 p-0", n), children: t.map((b, f) => {
    const h = f === t.length - 1, g = b.tone ?? "primary";
    return /* @__PURE__ */ i("li", { className: u("relative flex", l[s]), children: [
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
            Td[g]
          )
        }
      ) }),
      /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: u("font-medium text-[var(--abc-fg)]", c[s]), children: b.title }),
          b.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: b.time })
        ] }),
        b.description && /* @__PURE__ */ e("div", { className: u("leading-relaxed text-[var(--abc-fg-muted)]", d[s]), children: b.description })
      ] })
    ] }, b.key ?? f);
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
  }, d) => {
    const [b, f] = Ae.useState(!1), h = async (g) => {
      if (g.stopPropagation(), !t) return;
      await ea(t) && (f(!0), setTimeout(() => f(!1), 1600));
    };
    return /* @__PURE__ */ i(
      "span",
      {
        ref: d,
        "data-slot": "copyable-code",
        "data-copied": b ? "true" : void 0,
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
              "aria-label": b ? n : `${a}: ${t}`,
              title: b ? n : a,
              className: u(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                b && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: b ? /* @__PURE__ */ e(Ue, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
Os.displayName = "CopyableCode";
const Ed = {
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
    valueClassName: d,
    ...b
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
          Ed[o],
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
const Eu = an, _d = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, $s = Ae.forwardRef(
  ({ columns: t = 2, variant: r = "default", density: a, bordered: n = !1, items: s, children: o, className: l, ...c }, d) => {
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
          _d[t],
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
            variant: b,
            className: f.className
          },
          f.key ?? (typeof f.label == "string" ? f.label : h)
        )) : o
      }
    );
  }
);
$s.displayName = "DescriptionList";
const Ad = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, Dd = {
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
        Ad[a],
        Dd[n],
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
const Bd = {
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
    const x = Bd[r], C = x.Icon, A = n ?? v;
    return /* @__PURE__ */ i(
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
          /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
            !g && /* @__PURE__ */ e(
              "span",
              {
                className: u(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  x.iconWrap
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(C, { className: "h-3.5 w-3.5" })
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
              A && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: A }),
              s && /* @__PURE__ */ e("div", { className: "text-[11px] leading-normal opacity-85", children: s }),
              d && /* @__PURE__ */ e("div", { className: "pt-0.5 text-[11px] font-medium text-primary", children: d })
            ] })
          ] }),
          (b || f) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 self-end sm:self-start", children: [
            b,
            f && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": h,
                onClick: f,
                className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                children: /* @__PURE__ */ e(Ge, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
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
  ...d
}) {
  if (!t) return null;
  const b = t, f = (b == null ? void 0 : b.message) || a;
  return /* @__PURE__ */ e(
    Wt,
    {
      variant: "error",
      title: r,
      message: f,
      status: b == null ? void 0 : b.status,
      code: b == null ? void 0 : b.code,
      requestId: b == null ? void 0 : b.requestId,
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
      ...d
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
  pending: d = !1,
  action: b,
  ...f
}) {
  const h = b ?? (s ? /* @__PURE__ */ i(
    ke,
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
        /* @__PURE__ */ e("span", { children: d && l ? l : o })
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
  closeLabel: d = "关闭",
  className: b,
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
        Ga,
        {
          "data-slot": "confirm-dialog",
          className: u("w-full max-w-md", b),
          closeLabel: d,
          closeDisabled: c,
          children: [
            /* @__PURE__ */ i(Va, { children: [
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
function Ld(t) {
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
const Rd = {
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
  bodyClassName: C,
  className: A,
  role: D = "dialog"
}) => {
  const I = vl(S), k = S ?? I, w = Ke(), T = Ke(), M = t ?? r ?? !1, B = se(d), { isMounted: E, isVisible: R } = $t(M, B === "none" ? 0 : 220), U = ue(a);
  U.current = a;
  const [, Y] = O(0), [j, $] = O(!1), [F, V] = O(!1), [W, G] = O(() => {
    if (!p || typeof window > "u") return null;
    try {
      const le = Number(window.localStorage.getItem(`abc_drawer_w_${p}`));
      return Number.isFinite(le) && le >= m ? le : null;
    } catch {
      return null;
    }
  });
  de(() => {
    const le = () => Y((H) => H + 1);
    return La.add(le), () => {
      La.delete(le);
    };
  }, []);
  const ie = typeof b == "number" ? b : W ?? (c ? Rd[c] : 560) ?? 560;
  de(() => {
    if (M)
      return Ld({
        id: w,
        cascadeMode: k,
        widthPx: ie
      }), () => $n(w);
    $n(w);
  }, [M, w, k, ie]), de(() => {
    if (!E) return;
    const le = (H) => {
      const z = et[et.length - 1];
      H.key === "Escape" && (!z || z.id === w) && (H.stopPropagation(), U.current());
    };
    return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
  }, [E, w]);
  const [P, X] = O(
    () => typeof window < "u" ? window.innerWidth : 1440
  );
  de(() => {
    if (typeof window > "u") return;
    const le = () => X(window.innerWidth);
    return window.addEventListener("resize", le), () => window.removeEventListener("resize", le);
  }, []);
  const K = et.findIndex((le) => le.id === w), re = K >= 0 ? Math.max(0, et.length - 1 - K) : 0, J = K >= 0 ? K + 1 : 1, pe = K >= 0 ? et.slice(K + 1) : [], N = et.some((le) => le.cascadeMode === "adjacent"), te = k === "adjacent" || N, Ee = pe.reduce((le, H) => le + (H.widthPx || 560), 0);
  let ge = ie;
  if (te && re > 0 && Ee > 0) {
    const le = Math.max(m, P - Ee - 24);
    ge > le && (ge = le);
  }
  const ee = v && re > 0 ? te ? x ?? Ee : re * y : 0, he = v && re > 0 ? te ? 1 : Math.max(0.92, 1 - re * 0.025) : 1, ne = f === "right" ? -1 : 1, oe = (le) => {
    le.preventDefault(), V(!0);
    const H = (q) => {
      const ye = Math.max(m, window.innerWidth - 32), De = f === "right" ? window.innerWidth - q.clientX : q.clientX, Be = Math.min(ye, Math.max(m, De));
      if ($(!1), G(Be), p)
        try {
          window.localStorage.setItem(`abc_drawer_w_${p}`, String(Math.round(Be)));
        } catch {
        }
    }, z = () => {
      V(!1), window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", z);
    };
    window.addEventListener("mousemove", H), window.addEventListener("mouseup", z);
  };
  if (!E || typeof document > "u") return null;
  const xe = j ? "100dvw" : W ? `${W}px` : typeof b == "number" ? `${ge}px` : `${ge}px`;
  return dt(
    /* @__PURE__ */ i(
      "div",
      {
        role: D,
        "aria-modal": D === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? T : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, K) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          K === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                h && a();
              },
              "data-motion": B,
              className: u(
                "fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto",
                B !== "none" && (R ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ) : null,
          /* @__PURE__ */ i(
            "div",
            {
              "data-motion": B,
              style: {
                width: xe,
                transform: B === "none" ? ee > 0 ? `translate3d(${ne * ee}px, 0, 0) scale(${he})` : void 0 : R ? ee > 0 ? `translate3d(${ne * ee}px, 0, 0) scale(${he})` : "translate3d(0, 0, 0)" : f === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: B === "none" || F ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: u(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                te && K > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                f === "right" ? "ml-auto border-l" : "mr-auto border-r",
                A
              ),
              children: [
                g && !j && /* @__PURE__ */ i(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: oe,
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
                          title: te ? `并排抽屉层级: ${J} 级` : `抽屉栈深度: ${J} 级`,
                          className: u(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            re === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(Qn, { className: "h-2.5 w-2.5" }),
                            "L",
                            J,
                            te && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: re === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: T, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                    g && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": j ? "还原默认宽度" : "全宽展开",
                        onClick: () => $((le) => !le),
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
                        children: /* @__PURE__ */ e(Ge, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: u("flex-1 overflow-y-auto px-5 py-4 text-xs", C), children: o }),
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
function Pd({ className: t, ...r }) {
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
function jd({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: u("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...r
    }
  );
}
function Od({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: u("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...r
    }
  );
}
function $d({ className: t, ...r }) {
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
const Wd = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Fd = {
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
  children: d
}) => {
  const b = r ?? a, f = !!(o || l), h = fe(n, "md"), g = se(s), m = /* @__PURE__ */ i(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": g,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(Bt, { className: u("animate-spin", Wd[h]) }),
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
  ) : null : d !== void 0 ? /* @__PURE__ */ i("div", { "data-motion": g, className: u("relative", c), children: [
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
}, Hd = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  children: s,
  className: o
}) => {
  const { resolvedTheme: l } = Ye(), c = ue(null), d = ue(null), b = ve(() => {
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
      g.scale(p, p), g.translate(v / 2, y / 2), g.rotate(a * Math.PI / 180), g.font = "500 12px Inter, -apple-system, sans-serif", g.fillStyle = l === "dark" ? "rgba(226, 232, 240, 0.065)" : "rgba(15, 23, 42, 0.055)", g.textAlign = "center", g.textBaseline = "middle", m.forEach((C, A) => {
        const D = (A - (m.length - 1) / 2) * 18;
        g.fillText(C, 0, D);
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
  }, [r, b]), /* @__PURE__ */ e("div", { ref: c, className: u("relative", o), children: s });
}, Kd = {
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
}, Ud = {
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
  size: d,
  motion: b,
  className: f
}) => {
  const [h, g] = O(!1), m = fe(d, "sm"), p = se(b);
  if (h) return null;
  const v = Kd[t], y = a ?? n;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alert",
      "data-motion": p,
      className: u(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        Ud[m],
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
            children: /* @__PURE__ */ e(Ge, { className: "h-3.5 w-3.5" })
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
}, Vd = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, Yd = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, Xd = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  showInfo: n = !0,
  size: s,
  motion: o,
  className: l
}) => {
  const c = fe(typeof s == "string" ? s : void 0, "sm"), d = se(o), b = Math.max(0, Math.min(100, Math.round(t))), f = Yd[a];
  if (r === "circle") {
    const g = typeof s == "number" ? s : Gd[c], m = Math.max(4, Math.round(g * 0.09)), p = (g - m) / 2, v = 2 * Math.PI * p, y = v - b / 100 * v;
    return /* @__PURE__ */ i(
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
            b,
            "%"
          ] })
        ]
      }
    );
  }
  const h = typeof s == "number" ? s : Vd[c];
  return /* @__PURE__ */ i(
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
        n && /* @__PURE__ */ i("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          b,
          "%"
        ] })
      ]
    }
  );
}, qd = {
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
}, Zd = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: l,
  className: c
}) => {
  const d = qd[t], b = fe(o, "md"), f = se(l);
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
class Jd extends We.Component {
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
      Zd,
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
const Ou = Jd;
function $u({
  title: t,
  secret: r,
  open: a,
  secretValue: n,
  description: s = "此密钥仅显示一次。请在关闭前复制并安全存储。",
  secretLabel: o,
  metadata: l = [],
  closeLabel: c = "关闭",
  acknowledgeLabel: d = "我已妥善保存此密钥",
  copyLabel: b = "复制密钥",
  copiedLabel: f = "已复制",
  copyErrorMessage: h = "剪贴板写入失败，请手动选择复制。",
  className: g,
  onClose: m
}) {
  const p = r ?? n ?? null, v = a !== void 0 ? a : !!p, [y, S] = Ae.useState(!1), [x, C] = Ae.useState(!1), [A, D] = Ae.useState(null);
  if (Ae.useEffect(() => {
    v || (S(!1), C(!1), D(null));
  }, [v]), !v || !p)
    return null;
  const I = async () => {
    D(null), await ea(p) ? (S(!0), setTimeout(() => S(!1), 2e3)) : D(h);
  };
  return /* @__PURE__ */ e(
    lt,
    {
      open: v,
      onClose: m,
      onCancel: m,
      onOpenChange: (k) => !k && m(),
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        Ga,
        {
          "data-slot": "one-time-secret-dialog",
          className: u("w-full max-w-lg", g),
          closeLabel: c,
          children: [
            /* @__PURE__ */ i(Va, { children: [
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
                    onClick: I,
                    className: "absolute right-2 top-2 h-7 w-7 p-0",
                    title: y ? f : b,
                    "aria-label": y ? f : b,
                    children: y ? /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(ar, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                  }
                )
              ] }),
              A && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: A }),
              l.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
                $s,
                {
                  items: l.map((k) => ({
                    label: k.label,
                    value: k.value,
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
                    onChange: (k) => C(k.target.checked),
                    className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: d })
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
const Qd = {
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
  const l = Ae.Children.toArray(t), c = r !== void 0 ? t : l[0], d = r !== void 0 ? r : l.slice(1);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: u("grid items-start gap-6", Qd[a], s),
      ...o,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: c }),
        /* @__PURE__ */ e("div", { className: u("min-w-0", n && "xl:sticky xl:top-20"), children: d })
      ]
    }
  );
}
const eb = Ae.forwardRef(
  ({
    title: t,
    subtitle: r,
    badge: a,
    headerActions: n,
    showClear: s = !1,
    onClear: o,
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
  }, C) => {
    const A = h !== void 0 ? !h : f, D = !!(t || r || a || n);
    return /* @__PURE__ */ i(
      "aside",
      {
        ref: C,
        "data-slot": "inspector-panel",
        className: u(
          "flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all",
          S
        ),
        ...x,
        children: [
          D && /* @__PURE__ */ i("header", { className: "mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5", children: [
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
                  children: /* @__PURE__ */ e(Ge, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          c ? /* @__PURE__ */ i("div", { className: "flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e(Bt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: d })
          ] }) : b ? /* @__PURE__ */ e("div", { className: "my-2", children: b }) : A ? /* @__PURE__ */ i("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
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
eb.displayName = "InspectorPanel";
const va = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
};
function tb(t, r, a, n) {
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
      const o = Te(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: o.isValid() ? o.format("YYYY-MM-DD") : String(t) });
      break;
    }
    case "datetime": {
      const o = Te(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: o.isValid() ? o.format("YYYY-MM-DD HH:mm:ss") : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(js, { src: String(t), width: 32, height: 32 });
    case "progress":
      return /* @__PURE__ */ e(Xd, { percent: Number(t) || 0, className: "min-w-[92px]" });
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
  ) : a.copyable ? /* @__PURE__ */ e(Sl, { text: String(t), displayText: s }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: s }) : s;
}
function rb({
  columns: t,
  data: r,
  rowKey: a = "id",
  loading: n = !1,
  density: s = "default",
  selectedKeys: o,
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
  onColumnHide: C,
  onResetColumns: A,
  onColumnReorder: D,
  expandable: I,
  onRowView: k,
  activeRowKey: w,
  onRowClick: T,
  onEmptyReset: M,
  maxHeight: B,
  ariaLabel: E = "数据表格",
  emptyText: R = "暂无符合条件的数据",
  className: U
}) {
  const Y = se(y), j = ue(null), $ = ue(null), [F, V] = O(null), [W, G] = O(null), ie = ue(null), P = ue(!1), X = ue(null), [K, re] = O({}), [J, pe] = O(0), [N, te] = O(null), Ee = ce(
    () => ({ ...K, ...m }),
    [K, m]
  ), ge = v ?? !!p, ee = (L, Q) => {
    re((ae) => ({ ...ae, [L]: Q })), p == null || p(L, Q);
  };
  ya(() => {
    const L = j.current;
    if (!L) return;
    const Q = () => {
      L.clientWidth > 0 && pe(L.clientWidth);
    };
    if (Q(), typeof ResizeObserver > "u") return;
    const ae = new ResizeObserver((Ne) => {
      var Ie, _e;
      const Ce = (_e = (Ie = Ne[0]) == null ? void 0 : Ie.contentRect) == null ? void 0 : _e.width;
      typeof Ce == "number" && Ce > 0 ? pe(Math.floor(Ce)) : Q();
    });
    return ae.observe(L), () => ae.disconnect();
  }, []);
  const he = (L, Q) => typeof a == "function" ? a(L) : (L == null ? void 0 : L[a]) ?? Q, ne = (L) => L.key in S ? S[L.key] ?? void 0 : L.fixed, oe = ce(() => {
    const L = W && W.length > 0 ? [...t].sort((Ce, Ie) => {
      const _e = W.indexOf(Ce.key), me = W.indexOf(Ie.key);
      return _e === -1 && me === -1 ? 0 : _e === -1 ? 1 : me === -1 ? -1 : _e - me;
    }) : t, Q = [], ae = [], Ne = [];
    for (const Ce of L) {
      const Ie = ne(Ce);
      Ie === "left" ? Q.push(Ce) : Ie === "right" ? Ne.push(Ce) : ae.push(Ce);
    }
    return [...Q, ...ae, ...Ne];
  }, [t, S, W]), xe = Array.isArray(o) && typeof l == "function", le = !!(I != null && I.expandedRowRender), H = ce(() => {
    if (!(I != null && I.defaultExpandAllRows)) return [];
    const L = [], Q = (ae) => {
      ae.forEach((Ne, Ce) => {
        const Ie = he(Ne, Ce);
        (!I.rowExpandable || I.rowExpandable(Ne)) && L.push(Ie), Array.isArray(Ne.children) && Ne.children.length > 0 && (L.push(Ie), Q(Ne.children));
      });
    };
    return Q(r), L;
  }, []), [z, q] = st({
    value: I == null ? void 0 : I.expandedRowKeys,
    defaultValue: H,
    onChange: I == null ? void 0 : I.onExpandedRowsChange
  }), ye = (L) => {
    q(
      z.includes(L) ? z.filter((Q) => Q !== L) : [...z, L]
    );
  }, De = ce(() => {
    const L = [], Q = (ae, Ne) => {
      ae.forEach((Ce, Ie) => {
        const _e = he(Ce, Ie), me = Array.isArray(Ce.children) ? Ce.children : [], Re = me.length > 0;
        L.push({ record: Ce, key: _e, rowIdx: Ie, depth: Ne, hasTreeChildren: Re }), Re && z.includes(_e) && Q(me, Ne + 1);
      });
    };
    return Q(r, 0), L;
  }, [r, z, a]), Be = ce(() => {
    const L = (xe ? 40 : 0) + (le ? 36 : 0), Q = {};
    let ae = 0;
    for (const me of oe) {
      const Re = Ee[me.key] ?? me.width ?? 150;
      Q[me.key] = Re, ae += Re;
    }
    const Ne = { ...Q }, Ce = J, Ie = Ce > L + ae ? Ce - (L + ae) : 0;
    if (Ie > 0) {
      const me = (Pe) => Pe.key === "__abc_actions__" || Pe.key in Ee || !!ne(Pe), Re = oe.filter((Pe) => !me(Pe)), be = oe.filter((Pe) => Pe.key !== "__abc_actions__"), ze = Re.length > 0 ? Re : be;
      if (ze.length > 0) {
        const Pe = Math.floor(Ie / ze.length);
        let $e = Ie - Pe * ze.length;
        for (const Fe of ze) {
          const qe = Pe + ($e > 0 ? 1 : 0);
          $e > 0 && ($e -= 1), Ne[Fe.key] = Q[Fe.key] + qe;
        }
      }
    }
    const _e = L + oe.reduce((me, Re) => me + (Ne[Re.key] ?? 150), 0);
    return {
      resolvedWidths: Ne,
      resolvedTableWidth: Ce > 0 ? Math.max(Ce, _e) : void 0
    };
  }, [oe, Ee, S, J, xe, le]), Le = ce(() => {
    const L = {}, Q = {};
    let ae = "", Ne = "", Ce = (xe ? 40 : 0) + (le ? 36 : 0);
    for (const _e of oe)
      ne(_e) === "left" && (L[_e.key] = Ce, Ce += Be.resolvedWidths[_e.key] ?? 150, ae = _e.key);
    let Ie = 0;
    for (let _e = oe.length - 1; _e >= 0; _e--) {
      const me = oe[_e];
      ne(me) === "right" && (Q[me.key] = Ie, Ie += Be.resolvedWidths[me.key] ?? 150, Ne = me.key);
    }
    return {
      leftOffsets: L,
      rightOffsets: Q,
      lastLeftKey: ae,
      firstRightKey: Ne,
      hasAnyLeftFixed: !!ae
    };
  }, [oe, Be, S, xe, le]), ot = ce(
    () => De.map((L) => L.key),
    [De]
  ), Mt = xe && ot.length > 0 && ot.every((L) => o.includes(L)), Sr = xe && !Mt && ot.some((L) => o.includes(L)), bt = (L) => {
    if (xe)
      if (L) {
        const Q = Array.from(/* @__PURE__ */ new Set([...o, ...ot]));
        l(
          Q,
          De.filter((ae) => Q.includes(ae.key)).map((ae) => ae.record)
        );
      } else {
        const Q = o.filter((ae) => !ot.includes(ae));
        l(Q, []);
      }
  }, aa = (L) => {
    if (!xe) return;
    const ae = o.includes(L) ? o.filter((Ne) => Ne !== L) : [...o, L];
    l(
      ae,
      De.filter((Ne) => ae.includes(Ne.key)).map((Ne) => Ne.record)
    );
  }, at = (L, Q, ae = "right") => {
    if (!ge) return;
    L.preventDefault(), L.stopPropagation();
    const Ne = L.clientX, Ce = L.currentTarget.parentElement, Ie = Ee[Q.key] ?? Q.width ?? Be.resolvedWidths[Q.key] ?? (Ce == null ? void 0 : Ce.offsetWidth) ?? 140, _e = Q.key === "__abc_actions__" ? 80 : 72, me = typeof document < "u" ? document.body.style.cursor : "", Re = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const be = (Pe) => {
      const $e = Pe.clientX - Ne, Fe = ae === "left" ? Math.max(_e, Math.round(Ie - $e)) : Math.max(_e, Math.round(Ie + $e));
      ee(Q.key, Fe);
    }, ze = () => {
      typeof document < "u" && (document.body.style.cursor = me, document.body.style.userSelect = Re), window.removeEventListener("mousemove", be), window.removeEventListener("mouseup", ze);
    };
    window.addEventListener("mousemove", be), window.addEventListener("mouseup", ze);
  };
  de(() => {
    if (!F) return;
    const L = (Q) => {
      if (Q.key === "Escape") {
        const ae = ie.current;
        V(null), G(null), ie.current = null, X.current = null, P.current = !1, ae && D && D(ae);
      }
    };
    return document.addEventListener("keydown", L, !0), () => document.removeEventListener("keydown", L, !0);
  }, [F, D]);
  const it = oe.map((L) => L.key).join("|");
  ya(() => {
    const L = X.current;
    if (!L) return;
    X.current = null;
    const Q = j.current;
    if (!Q || Y === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const Ne = Y === "subtle" ? 140 : 220, Ce = "cubic-bezier(0.22, 1, 0.36, 1)";
    Q.querySelectorAll("[data-col-key]").forEach((Ie) => {
      const _e = Ie.dataset.colKey;
      if (!_e) return;
      const me = L.get(_e);
      if (me === void 0) return;
      const Re = Ie.getBoundingClientRect().left, be = me - Re;
      if (Math.abs(be) <= 1) return;
      typeof Ie.animate == "function" && Ie.animate([{ translate: `${be}px 0` }, { translate: "0 0" }], {
        duration: Ne,
        easing: Ce
      });
      const ze = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(_e) : _e, Pe = Q.querySelectorAll(`[data-col-cell="${ze}"]`), $e = Math.min(Pe.length, 20);
      for (let Fe = 0; Fe < $e; Fe++) {
        const qe = Pe[Fe];
        typeof qe.animate == "function" && qe.animate([{ translate: `${be}px 0` }, { translate: "0 0" }], {
          duration: Ne,
          easing: Ce
        });
      }
    });
  }, [it, Y]);
  const nt = (L) => {
    if (!L.sortable || !d) return;
    const Q = (c == null ? void 0 : c.key) === L.key ? c.direction : null, ae = Q === null ? "asc" : Q === "asc" ? "desc" : null;
    d(L.key, ae);
  };
  de(() => {
    if (!N) return;
    const L = (ae) => {
      var Ne;
      ae && ae.type === "mousedown" && ((Ne = $.current) != null && Ne.contains(ae.target)) || te(null);
    }, Q = (ae) => {
      ae.key === "Escape" && te(null);
    };
    return document.addEventListener("mousedown", L), document.addEventListener("keydown", Q, !0), window.addEventListener("scroll", L, !0), () => {
      document.removeEventListener("mousedown", L), document.removeEventListener("keydown", Q, !0), window.removeEventListener("scroll", L, !0);
    };
  }, [N]);
  const Ir = (L, Q) => {
    if (Q.key === "__abc_actions__" || !!!(Q.sortable && d || x || C || A)) return;
    L.preventDefault();
    const Ne = typeof window < "u" ? window.innerWidth : 1024, Ce = typeof window < "u" ? window.innerHeight : 768;
    te({
      col: Q,
      x: Math.max(8, Math.min(L.clientX, Ne - 176 - 8)),
      y: Math.max(8, Math.min(L.clientY, Ce - 220 - 8))
    });
  }, Mr = oe.length + (xe ? 1 : 0) + (le ? 1 : 0), or = N ? Jr(j.current) : null;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: j,
      tabIndex: 0,
      role: "region",
      "aria-label": E,
      "data-motion": Y,
      style: B !== void 0 ? { maxHeight: typeof B == "number" ? `${B}px` : B } : void 0,
      className: u(
        "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        U
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
                xe && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                le && /* @__PURE__ */ e("col", { style: { width: "36px" } }),
                oe.map((L) => /* @__PURE__ */ e(
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
                  xe && /* @__PURE__ */ e(
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
                      style: Le.hasAnyLeftFixed ? { left: xe ? 40 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: u(
                        "w-9 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        Le.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  oe.map((L) => {
                    const Q = Be.resolvedWidths[L.key], ae = ne(L), Ne = (c == null ? void 0 : c.key) === L.key ? c.direction : null, Ce = F === L.key, Ie = {
                      width: Q ? `${Q}px` : void 0,
                      ...ae === "left" ? { left: `${Le.leftOffsets[L.key] ?? 0}px` } : {},
                      ...ae === "right" ? { right: `${Le.rightOffsets[L.key] ?? 0}px` } : {}
                    }, _e = (me) => {
                      if (!F || !D) return;
                      const Re = W && W.length > 0 ? W : oe.filter((Fe) => Fe.key !== "__abc_actions__").map((Fe) => Fe.key), be = Re.indexOf(F), ze = Re.indexOf(me);
                      if (be < 0 || ze < 0 || be === ze) return;
                      if (j.current) {
                        const Fe = /* @__PURE__ */ new Map();
                        j.current.querySelectorAll("[data-col-key]").forEach((qe) => {
                          const Ht = qe.dataset.colKey;
                          Ht && Fe.set(Ht, qe.getBoundingClientRect().left);
                        }), X.current = Fe;
                      }
                      const Pe = [...Re], [$e] = Pe.splice(be, 1);
                      Pe.splice(ze, 0, $e), P.current = !0, G(Pe), D(Pe);
                    };
                    return /* @__PURE__ */ i(
                      "th",
                      {
                        "data-col-key": L.key,
                        "data-dragging": Ce ? "true" : void 0,
                        draggable: !!(D && !ae && L.key !== "__abc_actions__"),
                        onContextMenu: (me) => Ir(me, L),
                        onDragStart: (me) => {
                          const Re = oe.filter((be) => be.key !== "__abc_actions__").map((be) => be.key);
                          ie.current = Re, P.current = !1, V(L.key), G(Re), me.dataTransfer && (me.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (me) => {
                          if (!F || F === L.key || ae || L.key === "__abc_actions__" || !D)
                            return;
                          me.preventDefault();
                          const Re = W && W.length > 0 ? W : oe.filter(($e) => $e.key !== "__abc_actions__").map(($e) => $e.key), be = Re.indexOf(F), ze = Re.indexOf(L.key);
                          if (be < 0 || ze < 0 || be === ze) return;
                          const Pe = me.currentTarget.getBoundingClientRect();
                          Pe.width > 0 && (be < ze && me.clientX < Pe.left + Pe.width * 0.35 || be > ze && me.clientX > Pe.left + Pe.width * 0.65) || _e(L.key);
                        },
                        onDrop: () => {
                          F && F !== L.key && !P.current && !ae && L.key !== "__abc_actions__" && _e(L.key), V(null), G(null), ie.current = null, P.current = !1;
                        },
                        onDragEnd: () => {
                          V(null), G(null), ie.current = null, P.current = !1;
                        },
                        style: Ie,
                        className: u(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          va[s],
                          L.align === "center" && "text-center",
                          L.align === "right" && "text-right",
                          ae === "left" && "sticky z-20",
                          ae === "right" && "sticky z-20",
                          Ce && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
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
                                      D && !ae && L.key !== "__abc_actions__" && /* @__PURE__ */ e(Ha, { className: "h-3 w-3 cursor-grab text-[var(--abc-fg-placeholder)] opacity-0 transition-opacity group-hover:opacity-100" }),
                                      /* @__PURE__ */ e("span", { children: L.title }),
                                      L.tooltip && /* @__PURE__ */ e(Qe, { content: L.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (me) => me.stopPropagation(),
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
                                    onClick: (me) => me.stopPropagation(),
                                    className: "inline-flex items-center",
                                    children: g(L)
                                  }
                                )
                              ]
                            }
                          ),
                          ge && (ae === "right" ? /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${L.title} 列宽`,
                              onMouseDown: (me) => at(me, L, "left"),
                              className: "absolute top-0 bottom-0 left-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ) : /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${L.title} 列宽`,
                              onMouseDown: (me) => at(me, L, "right"),
                              className: "absolute top-0 right-0 bottom-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ))
                        ]
                      },
                      L.key
                    );
                  })
                ] }),
                b && /* @__PURE__ */ i("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  xe && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-3 py-1.5" }),
                  le && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  oe.map((L) => {
                    const Q = ne(L);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...Q === "left" ? { left: `${Le.leftOffsets[L.key] ?? 0}px` } : {},
                          ...Q === "right" ? { right: `${Le.rightOffsets[L.key] ?? 0}px` } : {}
                        },
                        className: u(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          Q === "left" && "sticky z-20",
                          Q === "right" && "sticky z-20"
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
              /* @__PURE__ */ e("tbody", { children: n ? Array.from({ length: 5 }).map((L, Q) => /* @__PURE__ */ i("tr", { children: [
                xe && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-3 py-3 text-center", children: /* @__PURE__ */ e(Ve, { width: 16, height: 16 }) }),
                le && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                oe.map((ae) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: u("border-b border-[var(--abc-border)]", va[s]),
                    children: /* @__PURE__ */ e(Ve, { variant: "text", className: "w-4/5" })
                  },
                  ae.key
                ))
              ] }, `sk_${Q}`)) : De.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: Mr, children: /* @__PURE__ */ e(Tl, { title: R, onReset: M }) }) }) : De.map(({ record: L, key: Q, rowIdx: ae, depth: Ne, hasTreeChildren: Ce }) => {
                const Ie = !!(xe && o.includes(Q)), _e = w != null && String(w) === String(Q), me = z.includes(Q), Re = le && (!(I != null && I.rowExpandable) || I.rowExpandable(L));
                return /* @__PURE__ */ i(We.Fragment, { children: [
                  /* @__PURE__ */ i(
                    "tr",
                    {
                      "data-state": _e || Ie ? "selected" : void 0,
                      tabIndex: T ? 0 : void 0,
                      onClick: T ? (be) => {
                        const ze = be.target;
                        ze && ze.closest(
                          'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                        ) || T(L, be);
                      } : void 0,
                      onKeyDown: T ? (be) => {
                        be.target === be.currentTarget && (be.key === "Enter" || be.key === " ") && (be.preventDefault(), T(L, be));
                      } : void 0,
                      className: u(
                        "group transition-colors duration-150",
                        T && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                        Ie || _e ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85"
                      ),
                      children: [
                        xe && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Le.hasAnyLeftFixed ? { left: 0 } : void 0,
                            className: u(
                              "border-b border-[var(--abc-border)] px-3 py-2.5 text-center",
                              Le.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: /* @__PURE__ */ e(xr, { checked: Ie, onChange: () => aa(Q) })
                          }
                        ),
                        le && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Le.hasAnyLeftFixed ? { left: xe ? 40 : 0 } : void 0,
                            className: u(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center",
                              Le.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: Re && /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": me ? "收起详情行" : "展开详情行",
                                "aria-expanded": me,
                                onClick: () => ye(Q),
                                className: "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                children: /* @__PURE__ */ e(
                                  gt,
                                  {
                                    className: u(
                                      "h-3.5 w-3.5 transition-transform duration-150",
                                      me && "rotate-90 text-[var(--abc-primary)]"
                                    )
                                  }
                                )
                              }
                            )
                          }
                        ),
                        oe.map((be, ze) => {
                          const Pe = be.dataIndex ?? be.key, $e = L == null ? void 0 : L[Pe], Fe = ne(be), qe = be.render ? be.render($e, L, ae) : tb($e, L, be, k), Ht = ze === 0 && (Ne > 0 || Ce);
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": be.key,
                              style: {
                                ...Fe === "left" ? { left: `${Le.leftOffsets[be.key] ?? 0}px` } : {},
                                ...Fe === "right" ? { right: `${Le.rightOffsets[be.key] ?? 0}px` } : {}
                              },
                              className: u(
                                "border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                va[s],
                                be.align === "center" && "text-center",
                                be.align === "right" && "text-right",
                                F === be.key && "bg-[var(--abc-primary-soft)]/30",
                                Fe === "left" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                Fe === "right" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                be.key === Le.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.08)]",
                                be.key === Le.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.08)]"
                              ),
                              children: Ht ? /* @__PURE__ */ i(
                                "div",
                                {
                                  style: { paddingLeft: `${Ne * 18}px` },
                                  className: "inline-flex items-center gap-1",
                                  children: [
                                    Ce ? /* @__PURE__ */ e(
                                      "button",
                                      {
                                        type: "button",
                                        "aria-label": me ? "收起子项" : "展开子项",
                                        "aria-expanded": me,
                                        onClick: () => ye(Q),
                                        className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                        children: /* @__PURE__ */ e(
                                          gt,
                                          {
                                            className: u(
                                              "h-3 w-3 transition-transform duration-150",
                                              me && "rotate-90 text-[var(--abc-primary)]"
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
                            be.key
                          );
                        })
                      ]
                    }
                  ),
                  Re && me && (I == null ? void 0 : I.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: Mr,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: I.expandedRowRender(L, ae)
                    }
                  ) })
                ] }, String(Q));
              }) })
            ]
          }
        ),
        N && or && dt(
          /* @__PURE__ */ i(
            "div",
            {
              ref: $,
              role: "menu",
              "aria-label": `${N.col.title} 列操作菜单`,
              "data-abc-floating": "",
              "data-motion": Y,
              style: { top: `${N.y}px`, left: `${N.x}px` },
              className: u(
                "fixed z-[1350] w-44 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
                Y !== "none" && "abc-animate-popover-in"
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "truncate border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: [
                  "列：",
                  N.col.title
                ] }),
                N.col.sortable && d && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        d(N.col.key, "asc"), te(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5" }),
                          " 升序排列"
                        ] }),
                        (c == null ? void 0 : c.key) === N.col.key && c.direction === "asc" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        d(N.col.key, "desc"), te(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Ca, { className: "h-3.5 w-3.5" }),
                          " 降序排列"
                        ] }),
                        (c == null ? void 0 : c.key) === N.col.key && c.direction === "desc" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  (c == null ? void 0 : c.key) === N.col.key && c.direction && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        d(N.col.key, null), te(null);
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
                        const L = ne(N.col);
                        x(N.col.key, L === "left" ? null : "left"), te(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 -rotate-45" }),
                          " 固定到左侧"
                        ] }),
                        ne(N.col) === "left" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const L = ne(N.col);
                        x(N.col.key, L === "right" ? null : "right"), te(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 rotate-45" }),
                          " 固定到右侧"
                        ] }),
                        ne(N.col) === "right" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  ne(N.col) && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        x(N.col.key, null), te(null);
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
                  C && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        C(N.col.key), te(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }),
                        " 隐藏此列"
                      ]
                    }
                  ),
                  A && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        A(), te(null);
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
const ab = Ae.forwardRef(
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
ab.displayName = "Table";
const nb = Ae.forwardRef(
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
nb.displayName = "TableHeader";
const sb = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: u("[&_tr:last-child]:border-0", t), ...r }));
sb.displayName = "TableBody";
const ob = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: u("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
ob.displayName = "TableFooter";
const ib = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
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
ib.displayName = "TableRow";
const cb = Ae.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
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
cb.displayName = "TableHead";
const lb = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: u("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
lb.displayName = "TableCell";
const db = Ae.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: u("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
db.displayName = "TableCaption";
const bb = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, ub = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, mb = {
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
        const d = !!(c.children && c.children.length > 0), b = c.path === r, f = d && kt(c, r);
        return d ? /* @__PURE__ */ i("div", { className: "py-0.5", children: [
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
  const o = fe(n, "sm"), l = Ft[o], c = a === "dark", d = ce(() => t.logo ? typeof t.logo == "string" ? zs(t.logo) ? /* @__PURE__ */ e(
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
              d,
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
            onClick: (b) => {
              var f;
              b.stopPropagation(), (f = t.onEditBrand) == null || f.call(t);
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
}, fb = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const c = Ft[s], [d, b] = O(!1), { isMounted: f, isVisible: h } = $t(d, o === "none" ? 0 : 140), g = ue(null), m = ue(null), p = ue(null), v = Ke(), y = kt(t, r), { style: S, actualSide: x, portalContainer: C } = kr({
    open: f,
    triggerRef: g,
    floatingRef: m,
    placement: "rightStart",
    offset: 8
  }), A = ve(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  de(() => () => A(), [A]);
  const D = () => {
    A(), b(!0);
  }, I = () => {
    A(), typeof window < "u" && (p.current = window.setTimeout(() => {
      b(!1), p.current = null;
    }, 140));
  };
  return de(() => {
    if (!d) return;
    const k = (T) => {
      var B, E;
      const M = T.target;
      (B = g.current) != null && B.contains(M) || (E = m.current) != null && E.contains(M) || b(!1);
    }, w = (T) => {
      var M;
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), b(!1), (M = g.current) == null || M.focus());
    };
    return document.addEventListener("mousedown", k), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", k), document.removeEventListener("keydown", w, !0);
    };
  }, [d]), /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: D, onMouseLeave: I, children: /* @__PURE__ */ e(
      "button",
      {
        ref: g,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": d,
        "aria-haspopup": "menu",
        "aria-controls": d ? v : void 0,
        onClick: () => b((k) => !k),
        onKeyDown: (k) => {
          (k.key === "ArrowRight" || k.key === "ArrowDown") && (k.preventDefault(), b(!0), window.requestAnimationFrame(() => {
            var w, T;
            (T = (w = m.current) == null ? void 0 : w.querySelector('[role="menuitem"]:not(:disabled)')) == null || T.focus();
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
    f && C && dt(
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
          style: S,
          onMouseEnter: D,
          onMouseLeave: I,
          onKeyDown: (k) => {
            var M, B, E;
            const w = Array.from(
              ((M = m.current) == null ? void 0 : M.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const T = w.indexOf(document.activeElement);
            k.key === "ArrowDown" ? (k.preventDefault(), (B = w[(T + 1) % w.length]) == null || B.focus()) : k.key === "ArrowUp" && (k.preventDefault(), (E = w[(T - 1 + w.length) % w.length]) == null || E.focus());
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
                onSelect: (k, w) => {
                  l(k, w), b(!1);
                }
              }
            )
          ]
        }
      ),
      C
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
  onNavigate: d,
  className: b
}) => {
  const { iconRegistry: f } = Ye(), h = fe(l, "sm"), g = se(c), m = Ft[h], p = o === "dark", [v, y] = O(
    () => r.filter((x) => {
      var C;
      return ((C = x.children) == null ? void 0 : C.length) && kt(x, a);
    }).map((x) => x.key)
  );
  de(() => {
    const x = r.filter((C) => {
      var A;
      return ((A = C.children) == null ? void 0 : A.length) && kt(C, a);
    }).map((C) => C.key);
    x.length > 0 && y(
      (C) => s ? [x[0]] : Array.from(/* @__PURE__ */ new Set([...C, ...x]))
    );
  }, [a, r, s]);
  const S = (x) => {
    y((C) => C.includes(x) ? C.filter((A) => A !== x) : s ? [x] : [...C, x]);
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
                tone: o,
                size: h,
                className: "w-full"
              }
            )
          }
        ),
        /* @__PURE__ */ e("nav", { className: u("flex-1 overflow-y-auto", m.navPadding), children: r.map((x) => {
          const C = !!(x.children && x.children.length > 0), A = x.path === a, D = kt(x, a), I = v.includes(x.key);
          if (!C) {
            const k = /* @__PURE__ */ i(
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
                  A ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : p ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
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
                children: k
              },
              x.key
            ) : k;
          }
          return n ? /* @__PURE__ */ e(
            fb,
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
          ) : /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-expanded": I,
                onClick: () => S(x.key),
                className: u(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Nt,
                  m.itemButton,
                  D ? p ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : p ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
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
                        !I && "-rotate-90"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                inert: I ? void 0 : "",
                className: u(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  I ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: u(
                      "border-l",
                      m.subWrap,
                      p ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: x.children.map((k) => {
                      const w = k.path === a;
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: k.disabled,
                          onClick: () => k.path && d(k.path, k),
                          className: u(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            Nt,
                            m.subButton,
                            w ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : p ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            k.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            vt(k.icon, f, m.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: k.label }),
                            k.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: u(
                                  "rounded-full font-mono",
                                  m.badge,
                                  w ? "bg-white/20" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]"
                                ),
                                children: k.badge
                              }
                            )
                          ]
                        },
                        k.key
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
}, pb = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const c = Ft[s], [d, b] = O(!1), { isMounted: f, isVisible: h } = $t(d, o === "none" ? 0 : 140), g = ue(null), m = ue(null), p = ue(null), v = Ke(), { style: y, actualSide: S, portalContainer: x } = kr({
    open: f,
    triggerRef: g,
    floatingRef: m,
    placement: "bottomLeft",
    offset: 6
  }), C = ve(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  de(() => () => C(), [C]);
  const A = () => {
    C(), b(!0);
  }, D = () => {
    C(), typeof window < "u" && (p.current = window.setTimeout(() => {
      b(!1), p.current = null;
    }, 150));
  };
  de(() => {
    if (!d) return;
    const k = (T) => {
      var B, E;
      const M = T.target;
      (B = g.current) != null && B.contains(M) || (E = m.current) != null && E.contains(M) || b(!1);
    }, w = (T) => {
      var M;
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), b(!1), (M = g.current) == null || M.focus());
    };
    return document.addEventListener("mousedown", k), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", k), document.removeEventListener("keydown", w, !0);
    };
  }, [d]);
  const I = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var k, w;
      (w = (k = m.current) == null ? void 0 : k.querySelector('[role="menuitem"]:not(:disabled)')) == null || w.focus();
    });
  };
  return /* @__PURE__ */ i(je, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: A,
        onMouseLeave: D,
        className: "relative flex-none",
        children: /* @__PURE__ */ i(
          "button",
          {
            ref: g,
            type: "button",
            "aria-expanded": d,
            "aria-haspopup": "menu",
            "aria-controls": d ? v : void 0,
            onClick: () => b((k) => !k),
            onKeyDown: (k) => {
              k.key === "ArrowDown" && (k.preventDefault(), b(!0), I());
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
          "data-motion": o,
          "data-placement": S,
          style: y,
          onMouseEnter: A,
          onMouseLeave: D,
          onKeyDown: (k) => {
            var M, B, E, R, U;
            const w = Array.from(
              ((M = m.current) == null ? void 0 : M.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const T = w.indexOf(document.activeElement);
            k.key === "ArrowDown" ? (k.preventDefault(), (B = w[(T + 1) % w.length]) == null || B.focus()) : k.key === "ArrowUp" ? (k.preventDefault(), (E = w[(T - 1 + w.length) % w.length]) == null || E.focus()) : k.key === "Home" ? (k.preventDefault(), (R = w[0]) == null || R.focus()) : k.key === "End" && (k.preventDefault(), (U = w[w.length - 1]) == null || U.focus());
          },
          className: u(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            S === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
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
              onSelect: (k, w) => {
                l(k, w), b(!1);
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
  const { iconRegistry: d } = Ye(), b = fe(s, "sm"), f = se(o), h = Ft[b];
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
              vt(g.icon, d, h.topIcon),
              /* @__PURE__ */ e("span", { children: g.label })
            ]
          },
          g.key
        ) : /* @__PURE__ */ e(
          pb,
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
}, hb = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: l, onNavigate: c }) => {
  const { iconRegistry: d } = Ye(), b = fe(s, "sm"), f = se(o), h = Ft[b], g = n === "dark", m = ce(
    () => r.find((x) => kt(x, a)) ?? r[0],
    [r, a]
  ), [p, v] = O((m == null ? void 0 : m.key) ?? "");
  de(() => {
    m != null && m.key && v(m.key);
  }, [m == null ? void 0 : m.key]);
  const y = r.find((x) => x.key === p) ?? m, S = (y == null ? void 0 : y.children) ?? [];
  return /* @__PURE__ */ i(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": b,
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
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Zt, { brand: t, collapsed: !0, tone: n, size: b }) }),
              /* @__PURE__ */ e("div", { className: u("flex w-full flex-1 flex-col items-center overflow-y-auto", h.dualRailWrap), children: r.map((x) => {
                const C = x.key === (y == null ? void 0 : y.key);
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var A, D, I;
                      v(x.key), !((A = x.children) != null && A.length) && x.path ? c(x.path, x) : (I = (D = x.children) == null ? void 0 : D[0]) != null && I.path && c(x.children[0].path, x.children[0]);
                    },
                    className: u(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      Nt,
                      h.dualRailItem,
                      C ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : g ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
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
        S.length > 0 && /* @__PURE__ */ i(
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
              /* @__PURE__ */ e("div", { className: u("flex-1 overflow-y-auto", h.dualPanelWrap), children: S.map((x) => {
                const C = x.path === a;
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
                      C ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
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
}, vb = {
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
}, gb = ({
  tabs: t,
  activePath: r,
  variant: a = "card",
  size: n,
  motion: s,
  onSelect: o,
  onClose: l,
  onCloseOthers: c,
  onCloseRight: d,
  onCloseAll: b,
  onTogglePin: f,
  onRefresh: h,
  className: g
}) => {
  var S;
  const { iconRegistry: m } = Ye(), p = fe(n, "sm"), v = se(s), y = vb[p];
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
          const C = x.path === r, A = x.closable !== !1 && !x.pinned, D = a === "pill" ? C ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? C ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : C ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ i(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(x.path),
              onKeyDown: (I) => {
                (I.key === "Enter" || I.key === " ") && (I.preventDefault(), o(x.path));
              },
              className: u(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                y.tabItem,
                D
              ),
              children: [
                x.pinned && /* @__PURE__ */ e(Jt, { className: u("shrink-0 opacity-75", y.pinIcon) }),
                x.icon && (typeof x.icon == "string" ? /* @__PURE__ */ e(zt, { name: x.icon, size: y.tabIcon, registry: m }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: x.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: x.title }),
                A && l && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${x.title}`,
                    onClick: (I) => {
                      I.stopPropagation(), l(x.path);
                    },
                    className: u(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && C ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(Ge, { className: y.closeIcon })
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
                  children: /* @__PURE__ */ e(Wa, { className: y.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, xb = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o = 0,
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
    return d.current.clear(), /* @__PURE__ */ e("div", { className: u("min-h-full", l), children: c }, `${t}_${o}`);
  if (n && n.length > 0) {
    const m = /* @__PURE__ */ new Set([...n, t]);
    for (const p of Array.from(d.current.keys()))
      m.has(p) || (d.current.delete(p), f.current.delete(p));
  }
  b.current += 1;
  const g = d.current.get(t);
  for (d.current.set(t, {
    key: t,
    seed: o,
    lastActiveTick: b.current,
    node: g && g.seed === o ? g.node : c
  }); d.current.size > a; ) {
    let m = null, p = 1 / 0;
    for (const [v, y] of d.current.entries())
      v !== t && y.lastActiveTick < p && (p = y.lastActiveTick, m = v);
    if (m)
      d.current.delete(m);
    else
      break;
  }
  return /* @__PURE__ */ e(je, { children: Array.from(d.current.values()).map((m) => {
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
  const l = t.slice(0, o), c = t.slice(o, o + a.length), d = t.slice(o + a.length);
  return /* @__PURE__ */ i(je, { children: [
    l,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: c }),
    d
  ] });
}
const yb = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = Ye(), [l, c] = O(""), [d, b] = O("all"), [f, h] = O(0), [g, m] = O(() => Fn()), p = ue(null), v = ue(null);
  de(() => {
    t ? m(Fn()) : (c(""), b("all"), h(0));
  }, [t]);
  const y = ce(() => [
    ...Ks(a).map(({ item: T, trail: M }) => ({
      id: `nav_${T.key}`,
      title: T.label,
      subtitle: `${M}${T.path ? ` · ${T.path}` : ""}`,
      group: "页面导航",
      icon: T.icon ?? "file",
      keywords: T.path,
      onTrigger: () => {
        T.path && (n == null || n(T.path, T));
      }
    })),
    ...s.map((T) => ({
      ...T,
      group: T.group || "快捷指令"
    }))
  ], [a, n, s]), S = ce(() => {
    const w = /* @__PURE__ */ new Set();
    for (const T of y)
      T.group && w.add(T.group);
    return Array.from(w);
  }, [y]), x = ce(() => {
    const w = l.trim(), T = (R) => d !== "all" && d !== "__recent__" && R.group !== d ? !1 : w ? ht(R.title, w) || !!(R.subtitle && ht(R.subtitle, w)) || !!(R.keywords && ht(R.keywords, w)) : !0, M = [];
    if (d === "__recent__") {
      const R = g.map((U) => y.find((Y) => Y.id === U)).filter((U) => U !== void 0 && T(U));
      return R.length > 0 && M.push({ groupName: "最近访问", isRecent: !0, items: R }), M;
    }
    const B = /* @__PURE__ */ new Set();
    if (!w && d === "all" && g.length > 0) {
      const R = g.map((U) => y.find((Y) => Y.id === U)).filter((U) => U !== void 0);
      R.length > 0 && (R.forEach((U) => B.add(U.id)), M.push({ groupName: "最近访问", isRecent: !0, items: R }));
    }
    const E = /* @__PURE__ */ new Map();
    for (const R of y) {
      if (B.has(R.id) || !T(R)) continue;
      const U = R.group || "其他", Y = E.get(U) ?? [];
      Y.push(R), E.set(U, Y);
    }
    for (const [R, U] of E.entries())
      U.length > 0 && M.push({ groupName: R, items: U });
    return M;
  }, [y, l, d, g]), C = ce(
    () => x.flatMap((w) => w.items),
    [x]
  );
  de(() => {
    h(0);
  }, [l, d]), de(() => {
    var T;
    if (!t || !v.current) return;
    const w = v.current.querySelector(`[data-cmd-idx="${f}"]`);
    (T = w == null ? void 0 : w.scrollIntoView) == null || T.call(w, { block: "nearest" });
  }, [f, t]);
  const A = (w) => {
    if (!w) return;
    const T = [w.id, ...g.filter((M) => M !== w.id)].slice(
      0,
      Hs
    );
    m(T), Hn(T), w.onTrigger(), r();
  }, D = () => {
    m([]), Hn([]), d === "__recent__" && b("all");
  }, I = ce(() => {
    const w = ["all"];
    return g.length > 0 && w.push("__recent__"), [...w, ...S];
  }, [g.length, S]);
  let k = -1;
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
              w.preventDefault(), h((T) => C.length ? (T + 1) % C.length : 0);
            else if (w.key === "ArrowUp")
              w.preventDefault(), h(
                (T) => C.length ? (T - 1 + C.length) % C.length : 0
              );
            else if (w.key === "Tab") {
              w.preventDefault();
              const T = I.indexOf(d), M = w.shiftKey ? -1 : 1, B = I[(T + M + I.length) % I.length];
              B && b(B);
            } else w.key === "Enter" && C[f] && (w.preventDefault(), A(C[f]));
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
                  children: /* @__PURE__ */ e(Ge, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(Yt, { className: "shrink-0", children: "ESC" })
            ] }),
            S.length > 0 && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ i(
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
                g.length > 0 && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => b("__recent__"),
                    className: u(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      d === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(Pr, { className: "h-3 w-3" }),
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
              g.length > 0 && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: D,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: v, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: C.length === 0 ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
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
              w.items.map((T) => {
                k += 1;
                const M = k, B = M === f;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": M,
                    onMouseEnter: () => h(M),
                    onClick: () => A(T),
                    className: u(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      B ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: u(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              B ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: T.icon ? typeof T.icon == "string" ? /* @__PURE__ */ e(zt, { name: T.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: T.icon }) : /* @__PURE__ */ e(ct, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ i("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: u(
                                "truncate text-sm font-semibold",
                                B ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: Kn(T.title, l)
                            }
                          ),
                          T.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: Kn(T.subtitle, l) })
                        ] })
                      ] }),
                      /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                        T.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: u(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              B ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: T.group
                          }
                        ),
                        B && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(ac, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${w.isRecent ? "recent" : "std"}_${T.id}`
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
                C.length,
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
  children: d
}) => /* @__PURE__ */ i("div", { className: u("flex min-h-full flex-col gap-4", l && "pb-16", c), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((b, f) => {
      const h = f === n.length - 1;
      return /* @__PURE__ */ i(We.Fragment, { children: [
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
  /* @__PURE__ */ e("div", { className: "flex-1", children: d }),
  l && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: l })
] }), wb = ({
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
  className: d
}) => r === "centered" ? /* @__PURE__ */ i(
  "div",
  {
    className: u(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      d
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
      d
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Rn, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Zt, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ i("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((b, f) => /* @__PURE__ */ i("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(Ct, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: b })
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
), Nb = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], kb = [
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
], Cb = {
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
  var pe;
  const {
    theme: o,
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
    setWatermarkEnabled: C,
    resetTheme: A,
    toast: D
  } = Ye(), [I, k] = O(1), [w, T] = O(!0), [M, B] = O("实时 Token 响应预览"), [E, R] = O(0), [U, Y] = O(!1), [j, $] = O(""), [F, V] = O(o.customBrandColor ?? "#0ea5e9"), W = o.componentSize ?? "sm", G = a.sidebarWidth ?? bb[W], ie = a.headerHeight ?? ub[W], P = o.customBrandColor || ((pe = da[o.brand]) == null ? void 0 : pe.swatch) || "#2563eb", X = (N, te) => {
    N.theme.mode && N.theme.mode !== o.mode && d(N.theme.mode, { clientX: te.clientX, clientY: te.clientY }), S(N.theme), n(N.layout), x(N.transition), R((Ee) => Ee + 1), D.success(`已切换至「${N.name}」场景预设`);
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
                A(), s == null || s(), D.info("已恢复默认主题与布局设置");
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
              onClick: () => Y((N) => !N),
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
                const N = JSON.stringify(o, null, 2), te = JSON.stringify(a, null, 2), Ee = `<AbcProvider
  defaultTheme={${N}}
  defaultPageTransition="${l}"
  defaultWatermarkEnabled={${c}}
>
  <ProLayout
    defaultSettings={${te}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(Ee), D.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  D.error("复制代码失败");
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
                const N = {
                  theme: o,
                  layout: a,
                  pageTransition: l,
                  watermarkEnabled: c
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(N, null, 2)), D.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  D.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ i("div", { className: "space-y-6", children: [
        U && /* @__PURE__ */ i("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => Y(!1),
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
              onChange: (N) => $(N.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(ke, { size: "xs", variant: "primary", onClick: () => {
            try {
              const N = JSON.parse(j);
              N.theme && typeof N.theme == "object" && S(N.theme), N.layout && typeof N.layout == "object" && n(N.layout), typeof N.pageTransition == "string" && x(N.pageTransition), typeof N.watermarkEnabled == "boolean" && C(N.watermarkEnabled), Y(!1), $(""), D.success("已成功导入并应用自定义配置");
            } catch {
              D.error("JSON 格式解析失败，请检查粘贴内容");
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
                onClick: () => R((N) => N + 1),
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
                Cb[l]
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i(ke, { variant: "primary", onClick: () => k((N) => N + 1), children: [
                      "按压回弹 #",
                      I
                    ] }),
                    /* @__PURE__ */ e(ke, { variant: "outline", onClick: () => T((N) => !N), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(jt, { status: w ? "success" : "warning", dot: !0, children: w ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      ft,
                      {
                        checked: w,
                        onChange: T,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  rt,
                  {
                    allowClear: !0,
                    value: M,
                    onChange: (N) => B(N.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ i("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: P })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((N) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${N}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${N})` }
                    },
                    N
                  )) })
                ] })
              ]
            },
            E
          )
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: kb.map((N) => /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: (te) => X(N, te),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: N.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: N.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: N.badge })
              ]
            },
            N.id
          )) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: Nb.map((N) => {
            const te = a.mode === N.mode;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: N.mode }),
                className: u(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  te ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ i("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    N.mode === "sidebar" && /* @__PURE__ */ i(je, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    N.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    N.mode === "mix" && /* @__PURE__ */ i("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    N.mode === "dual-column" && /* @__PURE__ */ i(je, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    N.mode === "auth" && /* @__PURE__ */ i(je, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: N.title }),
                    te && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: N.desc })
                ]
              },
              N.mode
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
                onChange: (N) => d(N),
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
                onChange: (N) => n({ sidebarTone: N }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(da).map((N) => {
            const te = da[N], Ee = !o.customBrandColor && o.brand === N;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => b(N),
                className: u(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Ee ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: te.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: te.label.split(" ")[0] })
                ]
              },
              N
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
                  value: o.customBrandColor || F,
                  onChange: (N) => {
                    const te = N.target.value;
                    V(te), f(te);
                  },
                  className: "h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  maxLength: 7,
                  value: o.customBrandColor ?? F,
                  onChange: (N) => {
                    const te = N.target.value;
                    V(te), /^#[0-9a-fA-F]{6}$/.test(te) && f(te);
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
                onChange: (N) => h(N),
                options: Object.keys(kn).map((N) => ({
                  value: N,
                  label: kn[N].label
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
                onChange: (N) => g(N),
                options: Object.keys(Cn).map((N) => ({
                  value: N,
                  label: Cn[N].label.split(" ")[0]
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
                onChange: (N) => m(N),
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
                onChange: (N) => v(N === "auto" ? void 0 : N),
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
                onChange: (N) => {
                  y(N), R((te) => te + 1);
                },
                options: Object.keys(mr).map((N) => ({
                  value: N,
                  label: mr[N].label.slice(0, 2)
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
                  G,
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
                value: G,
                onChange: (N) => n({ sidebarWidth: Number(N.target.value) }),
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
                  ie,
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
                value: ie,
                onChange: (N) => n({ headerHeight: Number(N.target.value) }),
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
                onChange: (N) => n({ tabStyle: N }),
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
                onChange: (N) => n({ showTabs: N })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.keepAlive,
                onChange: (N) => n({ keepAlive: N })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.headerBlur !== !1,
                onChange: (N) => n({ headerBlur: N })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (N) => n({ showBreadcrumb: N })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: a.sidebarAccordion,
                onChange: (N) => n({ sidebarAccordion: N })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: !!a.showFooter,
                onChange: (N) => n({ showFooter: N })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              ft,
              {
                checked: c,
                onChange: (N) => C(N)
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
                onChange: (N) => n({ contentWidth: N }),
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
                onChange: (N) => {
                  x(N), R((te) => te + 1);
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
              onChange: (N) => p(N),
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
}, Sb = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Ib = {
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
    toggleTheme: C,
    pageTransition: A,
    watermarkEnabled: D,
    watermarkText: I
  } = Ye(), k = fe(v, "sm"), w = se(y), T = Ib[k], M = ce(
    () => ({ ...mb, ...o }),
    [o]
  ), [B, E] = st({
    value: s ? { ...M, ...s } : void 0,
    defaultValue: M,
    onChange: l
  }), R = ve(
    (H) => {
      E((z) => ({ ...z, ...H }));
    },
    [E]
  ), [U, Y] = O(!1), [j, $] = O(!1), [F, V] = O(!1), [W, G] = O({}), ie = ue(null), [P, X] = st({
    value: f,
    defaultValue: [],
    onChange: h
  }), K = ce(
    () => Ws(r, a),
    [r, a]
  );
  de(() => {
    const H = K[K.length - 1];
    !H || !H.path || X((z) => z.some((q) => q.path === H.path) ? z : [
      ...z,
      {
        path: H.path,
        title: H.label,
        icon: H.icon,
        pinned: z.length === 0
      }
    ]);
  }, [K, X]), de(() => {
    const H = (z) => {
      (z.metaKey || z.ctrlKey) && z.key.toLowerCase() === "k" && (z.preventDefault(), $((q) => !q));
    };
    return window.addEventListener("keydown", H), () => window.removeEventListener("keydown", H);
  }, []);
  const re = ce(
    () => r.find((H) => kt(H, a)) ?? r[0],
    [r, a]
  ), [J, pe] = O((re == null ? void 0 : re.key) ?? "");
  de(() => {
    re != null && re.key && pe(re.key);
  }, [re == null ? void 0 : re.key]);
  const N = ce(() => {
    const H = r.find((z) => z.key === J) ?? re;
    return (H == null ? void 0 : H.children) ?? [];
  }, [r, J, re]), te = (H) => {
    const z = P.findIndex((ye) => ye.path === H), q = P.filter((ye) => ye.path !== H || ye.pinned);
    if (X(q), H === a && q.length > 0) {
      const ye = q[Math.max(0, z - 1)] ?? q[0];
      ye && n(ye.path);
    }
  }, Ee = ce(() => I || [(c == null ? void 0 : c.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [I, c == null ? void 0 : c.name, t.name]);
  if (B.mode === "auth")
    return /* @__PURE__ */ i(je, { children: [
      /* @__PURE__ */ e(
        wb,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (H) => C({ clientX: H.clientX, clientY: H.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: x === "dark" ? /* @__PURE__ */ e(Sa, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Ia, { className: "h-4 w-4" })
              }
            ),
            p && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => V(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(wa, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
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
        Un,
        {
          open: F,
          onClose: () => V(!1),
          layoutSettings: B,
          onLayoutChange: R,
          onResetAll: () => E(M)
        }
      )
    ] });
  const ge = B.mode === "sidebar", ee = B.mode === "top", he = B.mode === "mix", ne = B.mode === "dual-column", oe = /* @__PURE__ */ i(
    "header",
    {
      className: u(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        T.headerPad,
        B.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => Y(!0),
              className: u(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                T.iconBtn
              ),
              children: /* @__PURE__ */ e(Jn, { className: T.iconCls })
            }
          ),
          (ee || he) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Zt, { brand: t, size: k, className: "px-0 pr-3" }) }),
          (ge || he && N.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": B.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => R({ sidebarCollapsed: !B.sidebarCollapsed }),
              className: u(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                T.iconBtn
              ),
              children: B.sidebarCollapsed ? /* @__PURE__ */ e(sc, { className: T.iconCls }) : /* @__PURE__ */ e(oc, { className: T.iconCls })
            }
          ),
          ee && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Wn,
            {
              items: r,
              pathname: a,
              size: k,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          he && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Wn,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: J,
              size: k,
              motion: w,
              onSelectRoot: (H) => {
                var z, q;
                pe(H.key), H.path && (!H.children || H.children.length === 0) ? n(H.path, H) : (q = (z = H.children) == null ? void 0 : z[0]) != null && q.path && n(H.children[0].path, H.children[0]);
              },
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          (ge || ne) && B.showBreadcrumb !== !1 && K.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: u(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                T.breadcrumb
              ),
              children: K.map((H, z) => {
                const q = z === K.length - 1;
                return /* @__PURE__ */ i(We.Fragment, { children: [
                  z > 0 && /* @__PURE__ */ e(gt, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "truncate",
                        q && "font-semibold text-[var(--abc-fg)]"
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
              onClick: () => $(!0),
              className: u(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                T.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(ct, { className: T.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(Yt, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          d,
          /* @__PURE__ */ e(Qe, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (H) => C({ clientX: H.clientX, clientY: H.clientY }),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                T.iconBtn
              ),
              children: x === "dark" ? /* @__PURE__ */ e(Sa, { className: T.iconCls }) : /* @__PURE__ */ e(Ia, { className: T.iconCls })
            }
          ) }),
          p && /* @__PURE__ */ e(Qe, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => V(!0),
              className: u(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                T.iconBtn
              ),
              children: /* @__PURE__ */ e(wa, { className: T.iconCls })
            }
          ) }),
          c && /* @__PURE__ */ e(
            Qt,
            {
              items: c.menuItems ?? [
                { key: "profile", label: `当前账号：${c.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(Dl, { src: c.avatar, name: c.name, size: T.avatarSize }),
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
  ), xe = /* @__PURE__ */ i("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !he && oe,
    B.showTabs && /* @__PURE__ */ e(
      gb,
      {
        tabs: P,
        activePath: a,
        variant: B.tabStyle ?? "card",
        size: k,
        motion: w,
        onSelect: (H) => n(H),
        onClose: te,
        onTogglePin: (H) => X(
          (z) => z.map((q) => q.path === H ? { ...q, pinned: !q.pinned } : q)
        ),
        onCloseOthers: (H) => X((z) => z.filter((q) => q.pinned || q.path === H)),
        onCloseRight: (H) => {
          const z = P.findIndex((q) => q.path === H);
          z < 0 || X((q) => q.filter((ye, De) => De <= z || ye.pinned));
        },
        onCloseAll: () => {
          const H = P.filter((z) => z.pinned);
          X(H), H[0] && H[0].path !== a && n(H[0].path);
        },
        onRefresh: (H) => G((z) => ({ ...z, [H]: (z[H] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: ie,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ i(
          Hd,
          {
            enabled: D,
            content: Ee,
            className: u(
              "min-h-full",
              B.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                xb,
                {
                  activeKey: a,
                  enabled: B.keepAlive,
                  aliveKeys: P.map((H) => H.path),
                  scrollContainerRef: ie,
                  refreshSeed: W[a] ?? 0,
                  activeClassName: Sb[A],
                  children: S
                }
              ),
              B.showFooter && /* @__PURE__ */ i("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
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
    "--abc-sidebar-w": B.sidebarWidth ? `${B.sidebarWidth}px` : void 0,
    "--abc-header-h": B.headerHeight ? `${B.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-size": k,
      "data-motion": w,
      style: le,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        he && oe,
        /* @__PURE__ */ i("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          he && N.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            ga,
            {
              items: N,
              pathname: a,
              collapsed: B.sidebarCollapsed,
              accordion: B.sidebarAccordion,
              tone: B.sidebarTone,
              size: k,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          ge && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            ga,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: B.sidebarCollapsed,
              accordion: B.sidebarAccordion,
              tone: B.sidebarTone,
              size: k,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          ne && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            hb,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: B.sidebarTone,
              size: k,
              motion: w,
              onNavigate: (H, z) => n(H, z)
            }
          ) }),
          xe
        ] }),
        /* @__PURE__ */ e(
          ra,
          {
            open: U,
            onClose: () => Y(!1),
            placement: "left",
            width: T.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              ga,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: k,
                motion: w,
                onNavigate: (H, z) => {
                  n(H, z), Y(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          yb,
          {
            open: j,
            onClose: () => $(!1),
            menuItems: r,
            onNavigate: (H, z) => n(H, z),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: x === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => C()
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
          Un,
          {
            open: F,
            onClose: () => V(!1),
            layoutSettings: B,
            onLayoutChange: R,
            onResetAll: () => E(M)
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
const Mb = ({
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
  const { hasPermission: d } = Us(), b = t ?? r;
  if (!b) return /* @__PURE__ */ e(je, { children: c });
  if (d(b, a)) return /* @__PURE__ */ e(je, { children: c });
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
}, Ku = Mb;
function Gs(t) {
  const { dictAdapter: r } = Ye(), [a, n] = O([]), [s, o] = O(!1);
  return de(() => {
    if (!r || !t) {
      n([]);
      return;
    }
    let l = !0;
    const c = r(t);
    return c instanceof Promise ? (o(!0), c.then((d) => {
      l && n(d);
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
  const c = t ?? r ?? "", { options: d, loading: b } = Gs(c), f = ce(
    () => [...a, ...d, ...n],
    [a, d, n]
  );
  return /* @__PURE__ */ e(
    It,
    {
      options: f,
      placeholder: b && f.length === 0 ? "字典加载中..." : s,
      disabled: o || b && f.length === 0,
      ...l
    }
  );
}, Gu = ({
  dictCode: t,
  dictKey: r,
  value: a,
  dot: n = !0,
  size: s,
  motion: o,
  emptyText: l = "-",
  fallbackTone: c = "neutral",
  className: d
}) => {
  const b = t ?? r ?? "", { options: f } = Gs(b);
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
      className: d,
      children: (h == null ? void 0 : h.label) ?? String(a)
    }
  );
}, Gn = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, Tb = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: u("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(Hr, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: u("grid gap-4", Gn[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: u("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(Hr, { children: /* @__PURE__ */ e("div", { className: u("grid gap-4", Gn[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function Vu({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = Ye(), [l, c] = O(r), [d, b] = O(!1), [f, h] = O({});
  de(() => {
    c(r);
  }, [r]);
  const g = (p, v) => {
    c((y) => ({ ...y, [p]: v })), f[p] && h((y) => {
      const S = { ...y };
      return delete S[p], S;
    });
  };
  return /* @__PURE__ */ i("form", { onSubmit: async (p) => {
    p.preventDefault();
    const v = {};
    for (const y of t)
      for (const S of y.fields)
        if (S.required) {
          const x = l[S.name];
          (x == null || String(x).trim() === "") && (v[S.name] = `请填写${S.label}`);
        }
    if (Object.keys(v).length > 0) {
      h(v), o.warning("请完善必填配置项后再提交");
      return;
    }
    b(!0);
    try {
      await n(l), o.success("配置已保存生效");
    } catch (y) {
      o.error((y == null ? void 0 : y.message) || "保存失败");
    } finally {
      b(!1);
    }
  }, className: "space-y-6", children: [
    /* @__PURE__ */ e(
      Tb,
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
              Aa,
              {
                label: v.label,
                required: v.required,
                helperText: v.helperText,
                error: S,
                children: x === "switch" ? /* @__PURE__ */ e(
                  ft,
                  {
                    checked: !!y,
                    onChange: (C) => g(v.name, C)
                  }
                ) : x === "number" ? /* @__PURE__ */ e(
                  _a,
                  {
                    value: y ?? null,
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (C) => g(v.name, C)
                  }
                ) : x === "textarea" ? /* @__PURE__ */ e(
                  Qr,
                  {
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (C) => g(v.name, C.target.value)
                  }
                ) : x === "select" ? /* @__PURE__ */ e(
                  It,
                  {
                    options: v.options ?? [],
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (C) => g(v.name, C)
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
                      onChange: (C) => g(v.name, C.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  hd,
                  {
                    value: String(y ?? ""),
                    onChange: (C) => g(v.name, C)
                  }
                ) : /* @__PURE__ */ e(
                  rt,
                  {
                    type: x === "password" ? "password" : "text",
                    allowClear: !0,
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!S,
                    onChange: (C) => g(v.name, C.target.value)
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
          loading: d,
          icon: /* @__PURE__ */ e(ic, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
const Eb = Ae.forwardRef(
  ({
    surface: t = !1,
    hasActiveFilters: r = !1,
    onReset: a,
    resetLabel: n = "重置筛选",
    search: s,
    filters: o,
    trailing: l,
    children: c,
    className: d,
    ...b
  }, f) => /* @__PURE__ */ i(
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
Eb.displayName = "FilterToolbar";
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
          r.map((d, b) => {
            const f = d.id ?? d.key ?? d.code ?? String(b), h = d.active !== void 0 ? d.active : a === f;
            return /* @__PURE__ */ i(
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
  reasonPlaceholder: d = "请详细填写本次变更的业务原因或工单号",
  reasonHint: b = "需输入 8–512 字符，作为运维审计依据留痕",
  reasonTooLongMessage: f = "操作原因不能超过 512 字符",
  closeLabel: h = "关闭",
  minReasonLength: g = 8,
  maxReasonLength: m = 512,
  destructive: p = !1,
  variant: v,
  pending: y = !1,
  confirmDisabled: S = !1,
  error: x = null,
  maxWidthClass: C = "sm:max-w-lg",
  className: A,
  children: D,
  onOpenChange: I,
  onConfirm: k
}) {
  const [w, T] = Ae.useState(""), M = Ae.useId(), B = p || v === "destructive";
  Ae.useEffect(() => {
    t || T("");
  }, [t]);
  const E = w.trim(), R = E.length < g, U = E.length > m, Y = !y && !S && !R && !U, j = () => {
    Y && k(E);
  }, $ = (V) => {
    V.key === "Enter" && Y && (V.preventDefault(), j());
  }, F = () => {
    y || (o == null || o(), I == null || I(!1));
  };
  return /* @__PURE__ */ e(
    lt,
    {
      open: t,
      onClose: F,
      onCancel: F,
      onOpenChange: I,
      closeDisabled: y,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        Ga,
        {
          "data-slot": "reasoned-action-dialog",
          className: u("w-full max-w-lg", C, A),
          closeLabel: h,
          closeDisabled: y,
          children: [
            /* @__PURE__ */ i(Va, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                B ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Xr, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Oa, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Xa, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              /* @__PURE__ */ e(qa, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            D && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: D }),
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
                /* @__PURE__ */ i("label", { htmlFor: M, className: "font-medium text-[var(--abc-fg)]", children: [
                  c,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: u(
                      "font-mono text-[11px] tabular-nums",
                      U ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
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
                  id: M,
                  "aria-label": "Reason",
                  value: w,
                  disabled: y,
                  placeholder: d,
                  onChange: (V) => T(V.target.value),
                  onKeyDown: $,
                  className: u(
                    "w-full text-xs",
                    U && "border-red-500 focus-visible:ring-red-500/20"
                  )
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: u(
                    "text-[11px]",
                    U ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: U ? f : b
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
                  onClick: () => I(!1),
                  children: s
                }
              ),
              /* @__PURE__ */ e(
                ke,
                {
                  type: "button",
                  variant: B ? "danger" : "primary",
                  size: "sm",
                  disabled: !Y,
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
  children: C,
  onConfirm: A
}) {
  const [D, I] = Ae.useState(""), k = Ae.useId();
  Ae.useEffect(() => {
    t || I("");
  }, [t]);
  const w = D.trim(), T = w.length < h, M = w.length > g, B = !p && !v && !T && !M, E = () => {
    B && A(w);
  };
  return /* @__PURE__ */ i(
    ra,
    {
      open: t,
      onClose: r,
      width: S,
      cascadeMode: x,
      role: "dialog",
      children: [
        /* @__PURE__ */ i(Pd, { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            m ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Xr, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Oa, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(zd, { className: "text-base font-semibold", children: a })
          ] }),
          n && /* @__PURE__ */ e(jd, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ i(Od, { className: "space-y-4", children: [
          y && /* @__PURE__ */ e(
            Wt,
            {
              variant: "error",
              title: "操作失败",
              message: y,
              className: "text-xs"
            }
          ),
          C,
          /* @__PURE__ */ i("div", { className: "rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ i("label", { htmlFor: k, className: "font-semibold text-[var(--abc-fg)]", children: [
                c,
                " ",
                /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ i(
                "span",
                {
                  className: u(
                    "font-mono text-[11px] tabular-nums",
                    M ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: [
                    D.length,
                    "/",
                    g
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e(
              rt,
              {
                id: k,
                "aria-label": "Reason",
                value: D,
                disabled: p,
                placeholder: d,
                onChange: (R) => I(R.target.value),
                className: u(
                  "w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs",
                  M && "border-red-500 focus-visible:ring-red-500/20"
                )
              }
            ),
            /* @__PURE__ */ e(
              "p",
              {
                className: u(
                  "text-[11px]",
                  M ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                ),
                children: M ? f : b
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i($d, { children: [
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
              disabled: !B,
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
function xa(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function _b(t, r) {
  const a = t.filter((o) => !o.hideInTable && o.key !== "__abc_actions__"), n = a.map((o) => xa(o.title)).join(","), s = r.map(
    (o) => a.map((l) => {
      const c = o[l.dataIndex ?? l.key];
      if (l.options && l.options.length > 0) {
        const d = l.options.find((b) => String(b.value) === String(c));
        if (d) return xa(d.label);
      }
      return xa(c);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function Ab(t, r, a) {
  const n = _b(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), l = document.createElement("a");
    l.href = o, l.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o);
  }
  return n;
}
const Db = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  value: n,
  onApply: s
}) => {
  const [o, l] = O(!1), [c, d] = O(n ?? "");
  de(() => {
    o && d(n ?? "");
  }, [o, n]);
  const b = n != null && String(n).trim() !== "", f = (h) => {
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
                onChange: (h) => d(h)
              }
            ) : /* @__PURE__ */ e(
              rt,
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
            /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                ke,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    d(""), f("");
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
            b ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(gr, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function Bb({
  columns: t,
  searchableFieldNames: r,
  settings: a,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: o,
  onToggleVisible: l,
  onSetAllVisible: c,
  onSetFixed: d,
  onSetWidth: b,
  onSetOrder: f,
  onSetSearchVisible: h,
  onReset: g
}) {
  const m = se(o), [p, v] = O(!1), [y, S] = O(""), [x, C] = O("all"), [A, D] = O(null), I = ue(null), k = ue(!1);
  de(() => {
    if (!A) return;
    const j = ($) => {
      if ($.key === "Escape") {
        const F = I.current;
        D(null), I.current = null, k.current = !1, F && f(F);
      }
    };
    return document.addEventListener("keydown", j, !0), () => document.removeEventListener("keydown", j, !0);
  }, [A, f]);
  const w = ce(
    () => t.filter((j) => !j.hideInTable && j.key !== "__abc_actions__"),
    [t]
  ), T = ce(() => a.columnOrder.length === 0 ? w : [...w].sort((j, $) => {
    const F = a.columnOrder.indexOf(j.key), V = a.columnOrder.indexOf($.key);
    return F === -1 && V === -1 ? 0 : F === -1 ? 1 : V === -1 ? -1 : F - V;
  }), [w, a.columnOrder]), M = (j) => j.key in a.columnFixed ? a.columnFixed[j.key] ?? void 0 : j.fixed, B = ce(() => {
    const j = y.trim().toLowerCase();
    return T.filter(($) => {
      if (j && !$.title.toLowerCase().includes(j) && !$.key.toLowerCase().includes(j))
        return !1;
      const F = a.hiddenKeys.includes($.key), V = M($);
      return x === "fixed" ? !!V : x === "hidden" ? F : !0;
    });
  }, [T, y, x, a.hiddenKeys, a.columnFixed]), E = ce(() => w.map((j) => j.key), [w]), R = ce(
    () => t.find((j) => j.key === "__abc_actions__"),
    [t]
  ), U = !!(n || R), Y = a.columnWidths.__abc_actions__ ?? (R == null ? void 0 : R.width) ?? s;
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
                onChange: (j) => S(j.target.value),
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
                children: /* @__PURE__ */ e(Ge, { className: "h-3 w-3" })
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
                onClick: () => C(j.key),
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
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: B.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : B.map((j) => {
          const $ = !a.hiddenKeys.includes(j.key), F = M(j), V = String(j.dataIndex ?? j.key), W = r.has(V), G = a.searchVisible[V] !== !1, ie = a.columnWidths[j.key] ?? j.width ?? "";
          return /* @__PURE__ */ i(
            "div",
            {
              "data-dragging": A === j.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                I.current = T.map((P) => P.key), k.current = !1, D(j.key);
              },
              onDragOver: (P) => {
                if (!A || A === j.key) return;
                P.preventDefault();
                const X = T.map((te) => te.key), K = X.indexOf(A), re = X.indexOf(j.key);
                if (K < 0 || re < 0 || K === re) return;
                const J = P.currentTarget.getBoundingClientRect();
                if (J.height > 0 && (K < re && P.clientY < J.top + J.height * 0.35 || K > re && P.clientY > J.top + J.height * 0.65))
                  return;
                const pe = [...X], [N] = pe.splice(K, 1);
                pe.splice(re, 0, N), k.current = !0, f(pe);
              },
              onDrop: () => {
                if (A && A !== j.key && !k.current) {
                  const P = T.map((re) => re.key), X = P.indexOf(A), K = P.indexOf(j.key);
                  if (X >= 0 && K >= 0) {
                    const re = [...P], [J] = re.splice(X, 1);
                    re.splice(K, 0, J), f(re);
                  }
                }
                D(null), I.current = null, k.current = !1;
              },
              onDragEnd: () => {
                D(null), I.current = null, k.current = !1;
              },
              className: u(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                A === j.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(Ha, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(xr, { checked: $, onChange: () => l(j.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: u(
                        "truncate text-xs",
                        $ ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: j.title
                    }
                  ),
                  F && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: F === "left" ? "左固" : "右固" })
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
                      defaultValue: ie,
                      onBlur: (P) => {
                        const X = parseInt(P.target.value, 10);
                        !Number.isNaN(X) && X >= 64 && b(j.key, X);
                      },
                      onKeyDown: (P) => {
                        if (P.key === "Enter") {
                          const X = parseInt(P.target.value, 10);
                          !Number.isNaN(X) && X >= 64 && b(j.key, X);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${j.key}_${ie}`
                  ),
                  W && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: G ? "在筛选栏显示（点击隐藏）" : "已在筛选栏隐藏（点击显示）",
                      "aria-label": `切换 ${j.title} 筛选项显示`,
                      onClick: () => h(V, !G),
                      className: u(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        G ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: /* @__PURE__ */ e(gr, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: F === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${j.title} 到左侧`,
                      onClick: () => d(j.key, F === "left" ? null : "left"),
                      className: u(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        F === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Jt, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: F === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${j.title} 到右侧`,
                      onClick: () => d(j.key, F === "right" ? null : "right"),
                      className: u(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        F === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
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
        U && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
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
                defaultValue: Y,
                onBlur: (j) => {
                  const $ = parseInt(j.target.value, 10);
                  !Number.isNaN($) && $ >= 80 && b("__abc_actions__", $);
                },
                onKeyDown: (j) => {
                  if (j.key === "Enter") {
                    const $ = parseInt(j.target.value, 10);
                    !Number.isNaN($) && $ >= 80 && b("__abc_actions__", $);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${Y}`
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
const Lb = ({ actions: t, maxInline: r = 3 }) => {
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
function Rb({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  onBatchDelete: n,
  onClear: s,
  motion: o
}) {
  const l = se(o);
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
                /* @__PURE__ */ e(Ge, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Vn = [
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
  defaultSearchCollapsed: C = !0,
  autoRefresh: A,
  exportable: D = !0,
  onExport: I,
  syncToUrl: k = !1,
  viewable: w = !1,
  formContainer: T = "dialog",
  formColumns: M,
  rowActions: B = [],
  maxInlineActions: E = 3,
  rowSelection: R,
  batchActions: U = [],
  expandable: Y,
  maxHeight: j,
  permissions: $,
  toolbarExtra: F,
  motion: V,
  onSaveRecord: W,
  onDeleteRecords: G
}) {
  var xn;
  const { toast: ie } = Ye(), P = se(V), { hasPermission: X } = Us(), {
    settings: K,
    toggleColumnVisible: re,
    setAllColumnsVisible: J,
    setColumnFixed: pe,
    setColumnWidth: N,
    setColumnOrder: te,
    setSearchFieldVisible: Ee,
    setDensity: ge,
    resetSettings: ee
  } = rl(t), he = ce(() => !k || typeof window > "u" ? {} : xc(window.location.search), [k]), [ne, oe] = O(
    () => S ?? !l
  ), [xe, le] = O(!1), [H, z] = O(!0), [q, ye] = O(C), [De, Be] = O(() => {
    const { page: _, pageSize: Z, ...we } = he;
    return we;
  }), [Le, ot] = O(() => {
    const { page: _, pageSize: Z, ...we } = he;
    return we;
  }), [Mt, Sr] = O(""), [bt, aa] = O({
    key: "",
    direction: null
  }), [at, it] = O(() => Number(he.page) || 1), [nt, Ir] = O(
    () => Number(he.pageSize) || d
  ), [Mr, or] = O(!1), L = o !== void 0 ? o : Mr, [Q, ae] = O([]), [Ne, Ce] = O(0), [Ie, _e] = O([]), [me, Re] = O([]), [be, ze] = O(!1), Pe = A ?? !!l, [$e, Fe] = O(!1), [qe, Ht] = O(1e4), Tr = ue(0), [Tt, ir] = O(null), Rt = tl(t ? `${t}_form` : void 0), [Er, Kt] = O(!1), [xt, sn] = O(null), [cr, lr] = O({}), [on, dr] = O({}), [Vs, cn] = O(!1), Ys = !($ != null && $.create) || X($.create), _r = !($ != null && $.update) || X($.update), br = !($ != null && $.delete) || X($.delete);
  de(() => {
    if (!k || typeof window > "u") return;
    const _ = [
      ...n.filter((Me) => !Me.hideInSearch).map((Me) => Me.name),
      ...a.map((Me) => String(Me.dataIndex ?? Me.key)),
      "page",
      "pageSize"
    ], Z = yc(window.location.search, _, {
      ...Le,
      page: at > 1 ? at : void 0,
      pageSize: nt !== d ? nt : void 0
    }), we = `${window.location.pathname}${Z}${window.location.hash}`;
    window.history.replaceState(null, "", we);
  }, [k, n, a, Le, at, nt, d]), de(() => {
    if (!be) return;
    const _ = (Z) => {
      Z.key === "Escape" && !Er && !Tt && ze(!1);
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [be, Er, Tt]);
  const ln = ve(
    (_, Z) => typeof c == "function" ? c(_) : (_ == null ? void 0 : _[c]) ?? Z,
    [c]
  ), Pt = ve(async () => {
    if (!l) return;
    const _ = ++Tr.current;
    or(!0);
    try {
      const Z = await l({
        current: at,
        pageSize: nt,
        filters: ne ? {} : In(Le),
        sortField: bt.direction ? bt.key : void 0,
        sortOrder: bt.direction
      });
      if (_ !== Tr.current) return;
      ae(Z.data), Ce(Z.total);
    } catch (Z) {
      _ === Tr.current && ie.error((Z == null ? void 0 : Z.message) || "加载表格数据失败");
    } finally {
      _ === Tr.current && or(!1);
    }
  }, [l, at, nt, ne, Le, bt, ie]);
  de(() => {
    l && Pt();
  }, [l, Pt]), de(() => {
    if (!$e || !l || typeof window > "u") return;
    const _ = window.setInterval(() => {
      Pt();
    }, qe);
    return () => window.clearInterval(_);
  }, [$e, qe, l, Pt]);
  const Ar = ce(() => {
    const _ = a.filter(
      (Z) => !Z.hideInTable && !K.hiddenKeys.includes(Z.key)
    );
    return K.columnOrder.length === 0 ? _ : [..._].sort((Z, we) => {
      const Me = K.columnOrder.indexOf(Z.key), He = K.columnOrder.indexOf(we.key);
      return Me === -1 && He === -1 ? 0 : Me === -1 ? 1 : He === -1 ? -1 : Me - He;
    });
  }, [a, K.hiddenKeys, K.columnOrder]), na = s ?? Q, Ut = ce(() => {
    if (!ne && l) return na;
    const _ = a.map((Z) => String(Z.dataIndex ?? Z.key));
    return gc({
      rows: na,
      quickKeyword: Mt,
      searchableKeys: _,
      fieldFilters: Le,
      sortField: bt.key,
      sortOrder: bt.direction
    });
  }, [ne, l, na, Mt, Le, a, bt]), Xs = ce(() => {
    if (!l) {
      const _ = (at - 1) * nt;
      return Ut.slice(_, _ + nt);
    }
    return ne ? Ut : Q;
  }, [l, ne, Ut, Q, at, nt]), sa = l ? ne ? Ut.length : Ne : Ut.length, Dr = ce(
    () => n.filter((_) => !_.hideInSearch),
    [n]
  ), qs = ce(
    () => new Set(Dr.map((_) => _.name)),
    [Dr]
  ), Et = ce(
    () => Dr.filter((_) => K.searchVisible[_.name] !== !1),
    [Dr, K.searchVisible]
  ), dn = ce(() => !q || Et.length <= 3 ? Et : Et.slice(0, 3), [Et, q]), Gt = ce(
    () => n.filter((_) => !_.hideInForm),
    [n]
  ), ur = ce(() => Object.keys(In(Le)).length + (Mt.trim() ? 1 : 0), [Le, Mt]), Br = ve(() => {
    Be({}), ot({}), Sr(""), it(1), y == null || y(), p == null || p({});
  }, [y, p]), oa = ve(() => {
    const _ = {};
    for (const Z of Gt)
      Z.defaultValue !== void 0 && (_[Z.name] = Z.defaultValue);
    return _;
  }, [Gt]), Zs = () => {
    sn(null), dr({});
    const _ = Rt.readDraft();
    lr(_ ?? oa()), Kt(!0);
  }, bn = (_) => {
    sn(_), dr({}), lr({ ..._ }), Kt(!0);
  }, un = async (_) => {
    if (_.preventDefault(), !W) return;
    const Z = {};
    for (const we of Gt) {
      const Me = cr[we.name], He = Me == null || typeof Me == "string" && Me.trim() === "" || Array.isArray(Me) && Me.length === 0;
      if (we.required && He) {
        Z[we.name] = `请填写${we.label}`;
        continue;
      }
      if (we.validator) {
        const ut = we.validator(Me, cr);
        ut && (Z[we.name] = ut);
      }
    }
    if (Object.keys(Z).length > 0) {
      dr(Z);
      const we = Object.values(Z)[0];
      ie.warning(we);
      return;
    }
    dr({}), cn(!0);
    try {
      await W(cr, xt), xt || Rt.clearDraft(), Kt(!1), ie.success(xt ? "更新成功" : "创建成功"), l && Pt();
    } catch (we) {
      ie.error((we == null ? void 0 : we.message) || "提交失败");
    } finally {
      cn(!1);
    }
  }, mn = async (_) => {
    !G || _.length === 0 || !await Za({
      title: "确认删除选中记录",
      message: `即将删除 ${_.length} 条数据，删除后不可恢复，是否继续？`,
      tone: "danger",
      confirmText: "确认删除"
    }) || (await G(_), _e([]), Re([]), ie.success(`已删除 ${_.length} 条记录`), l && Pt());
  }, fn = ce(
    () => U.filter((_) => !_.permission || X(_.permission)),
    [U, X]
  ), ia = R ?? !!(G && br || fn.length > 0), ca = w || !!W && _r || !!G && br || B.length > 0, Js = ce(() => ca ? [
    ...Ar,
    {
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: w || B.length > 0 ? 184 : 136,
      align: "right",
      render: (_, Z, we) => {
        var ut;
        const Me = ln(Z, we), He = [];
        w && He.push({
          key: "__view__",
          label: "详情",
          icon: /* @__PURE__ */ e(rr, { className: "h-3 w-3" }),
          onClick: () => ir(Z)
        }), W && _r && He.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Na, { className: "h-3 w-3" }),
          onClick: () => bn(Z)
        });
        for (const Ze of B)
          Ze.permission && !X(Ze.permission) || (ut = Ze.hidden) != null && ut.call(Ze, Z) || He.push({
            key: Ze.key,
            label: Ze.label,
            icon: Ze.icon,
            danger: Ze.danger,
            onClick: () => Ze.onClick(Z)
          });
        return G && br && He.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => mn([Me])
        }), /* @__PURE__ */ e(Lb, { actions: He, maxInline: E });
      }
    }
  ] : Ar, [
    Ar,
    ca,
    w,
    W,
    _r,
    G,
    br,
    B,
    E,
    X,
    ln
  ]), Qs = () => {
    const _ = ne || !l ? Ut : Q;
    if (I) {
      I(_);
      return;
    }
    const Z = typeof r == "string" && r.trim() ? r.trim() : t || "table-export";
    Ab(Z, Ar, _), ie.success(`已导出 ${_.length} 条记录`);
  }, pn = (_, Z) => {
    const we = De[_.name], Me = (He) => {
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
        value: we ?? (_.multiple ? [] : ""),
        onChange: Me,
        className: Z == null ? void 0 : Z.select
      }
    ) : _.type === "date" ? /* @__PURE__ */ e(
      Da,
      {
        value: we ?? "",
        placeholder: _.placeholder ?? `选择${_.label}`,
        onChange: Me
      }
    ) : _.type === "dateRange" ? /* @__PURE__ */ e(
      Ba,
      {
        value: we ?? null,
        onChange: Me
      }
    ) : _.type === "number" ? /* @__PURE__ */ e(
      _a,
      {
        value: we ?? null,
        placeholder: _.placeholder ?? `输入${_.label}`,
        onChange: Me,
        className: Z == null ? void 0 : Z.input
      }
    ) : /* @__PURE__ */ e(
      rt,
      {
        allowClear: !0,
        placeholder: _.placeholder ?? `搜索${_.label}`,
        value: we ?? "",
        onChange: (He) => Me(He.target.value),
        wrapperClassName: Z == null ? void 0 : Z.input
      }
    );
  }, eo = (_) => {
    const Z = cr[_.name], we = typeof _.disabled == "function" ? _.disabled(xt) : !!_.disabled, Me = (He) => {
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
        disabled: we,
        options: _.options ?? [],
        value: Z ?? (_.multiple ? [] : ""),
        placeholder: _.placeholder,
        onChange: Me
      }
    ) : _.type === "number" ? /* @__PURE__ */ e(
      _a,
      {
        disabled: we,
        value: Z ?? null,
        placeholder: _.placeholder,
        onChange: Me
      }
    ) : _.type === "textarea" ? /* @__PURE__ */ e(
      Qr,
      {
        disabled: we,
        value: Z ?? "",
        placeholder: _.placeholder,
        onChange: (He) => Me(He.target.value)
      }
    ) : _.type === "switch" ? /* @__PURE__ */ e(ft, { disabled: we, checked: !!Z, onChange: Me }) : _.type === "date" ? /* @__PURE__ */ e(
      Da,
      {
        disabled: we,
        value: Z ?? "",
        placeholder: _.placeholder,
        onChange: Me
      }
    ) : _.type === "dateRange" ? /* @__PURE__ */ e(
      Ba,
      {
        disabled: we,
        value: Z ?? null,
        onChange: Me
      }
    ) : _.type === "tags" ? /* @__PURE__ */ e(
      yd,
      {
        disabled: we,
        value: Array.isArray(Z) ? Z : [],
        placeholder: _.placeholder,
        onChange: Me
      }
    ) : _.type === "icon" ? /* @__PURE__ */ e(Nl, { value: Z ?? "", onChange: Me }) : /* @__PURE__ */ e(
      rt,
      {
        disabled: we,
        value: Z ?? "",
        placeholder: _.placeholder,
        onChange: (He) => Me(He.target.value)
      }
    );
  }, Lr = M ?? (Gt.length >= 6 ? 2 : 1), hn = /* @__PURE__ */ i(je, { children: [
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
    /* @__PURE__ */ e(ke, { variant: "primary", loading: Vs, onClick: un, children: "确认提交" })
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
        children: Gt.map((_) => {
          const Z = Lr === 2 && (_.span === 2 || _.type === "textarea");
          return /* @__PURE__ */ e(
            Aa,
            {
              label: _.label,
              required: _.required,
              helperText: _.helperText,
              error: on[_.name],
              className: Z ? "sm:col-span-2" : void 0,
              children: eo(_)
            },
            _.name
          );
        })
      }
    )
  ] }), gn = ((xn = Vn.find((_) => _.key === qe)) == null ? void 0 : xn.label) ?? "10秒";
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": P,
      className: u(
        "relative space-y-3",
        be && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        m === "toolbar" && Et.length > 0 && !xe && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ i(
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
        m === "card" && Et.length > 0 && !xe && /* @__PURE__ */ i(Hr, { padding: "none", children: [
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
                      onClick: () => ye((_) => !_),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                      children: [
                        /* @__PURE__ */ e("span", { children: q ? `展开 (${Et.length - 3})` : "收起" }),
                        q ? /* @__PURE__ */ e(pt, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" })
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
              W && Gt.length > 0 && Ys && /* @__PURE__ */ e(
                ke,
                {
                  variant: "primary",
                  icon: /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5" }),
                  onClick: Zs,
                  children: "新建记录"
                }
              ),
              F
            ] }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              ne && /* @__PURE__ */ e(
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
                  content: ne ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": ne,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const _ = !ne;
                        oe(_), it(1), ie.info(_ ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式");
                      },
                      className: u(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        ne ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: ne ? "前端筛选" : "接口筛选" })
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
                    items: Vn.map((_) => ({
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
              /* @__PURE__ */ e(Qe, { content: xe ? "关闭表头内联筛选行" : "开启表头内联筛选行", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => le((_) => !_),
                  className: u(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    xe ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(lc, { className: "h-3.5 w-3.5" })
                }
              ) }),
              D && /* @__PURE__ */ e(Qe, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
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
                        K.density === "comfortable" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => ge("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "标准密度" }),
                        K.density === "default" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => ge("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑密度" }),
                        K.density === "compact" && /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => ge("compact")
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
              /* @__PURE__ */ e(Qe, { content: be ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": be ? "退出全屏" : "全屏展示",
                  onClick: () => ze((_) => !_),
                  className: u(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    be ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: be ? /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ja, { className: "h-3.5 w-3.5" })
                }
              ) }),
              /* @__PURE__ */ e(
                Bb,
                {
                  columns: a,
                  searchableFieldNames: qs,
                  settings: K,
                  hasActionColumn: ca,
                  defaultActionWidth: w || B.length > 0 ? 184 : 136,
                  motion: P,
                  onToggleVisible: re,
                  onSetAllVisible: J,
                  onSetFixed: pe,
                  onSetWidth: N,
                  onSetOrder: te,
                  onSetSearchVisible: Ee,
                  onReset: ee
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            rb,
            {
              columns: Js,
              data: Xs,
              rowKey: c,
              loading: L,
              density: K.density,
              motion: P,
              selectedKeys: ia ? Ie : void 0,
              onSelectionChange: ia ? (_, Z) => {
                _e(_), Re(Z);
              } : void 0,
              sortState: bt,
              onSortChange: (_, Z) => aa({ key: _, direction: Z }),
              headerFilterMode: xe,
              headerFilters: Le,
              onHeaderFilterChange: (_, Z) => {
                it(1), Be((we) => ({ ...we, [_]: Z })), ot((we) => ({ ...we, [_]: Z }));
              },
              headerFilterRender: xe ? void 0 : (_) => {
                const Z = String(_.dataIndex ?? _.key);
                return /* @__PURE__ */ e(
                  Db,
                  {
                    title: _.title,
                    filterType: _.filterType,
                    filterOptions: _.filterOptions,
                    value: Le[Z],
                    onApply: (we) => {
                      it(1), Be((Me) => ({ ...Me, [Z]: we })), ot((Me) => ({ ...Me, [Z]: we }));
                    }
                  }
                );
              },
              columnWidths: K.columnWidths,
              onColumnResize: N,
              columnFixed: K.columnFixed,
              onColumnPin: pe,
              onColumnHide: re,
              onResetColumns: ee,
              onColumnReorder: te,
              expandable: Y,
              activeRowKey: h,
              onRowClick: g,
              onRowView: w ? (_) => ir(_) : void 0,
              onEmptyReset: ur > 0 ? Br : void 0,
              maxHeight: j,
              className: "rounded-none border-0"
            }
          ),
          b !== !1 && /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] px-4 py-3", children: f ? f({
            current: at,
            pageSize: nt,
            total: sa,
            mode: typeof b == "object" && b.mode ? b.mode : "offset"
          }) : typeof b == "object" ? /* @__PURE__ */ e(
            Fr,
            {
              current: at,
              pageSize: nt,
              motion: P,
              total: sa,
              onChange: (_, Z) => {
                it(_), Ir(Z);
              },
              ...b
            }
          ) : /* @__PURE__ */ e(
            Fr,
            {
              current: at,
              pageSize: nt,
              motion: P,
              total: sa,
              onChange: (_, Z) => {
                it(_), Ir(Z);
              }
            }
          ) })
        ] }),
        ia && Ie.length > 0 && /* @__PURE__ */ e(
          Rb,
          {
            selectedKeys: Ie,
            selectedRows: me,
            batchActions: fn,
            motion: P,
            onBatchDelete: G && br ? () => mn(Ie) : void 0,
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
              Tt && W && _r && /* @__PURE__ */ e(
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
              Sd,
              {
                bordered: !0,
                column: 2,
                items: a.filter((_) => !_.hideInTable).map((_) => {
                  const Z = Tt[_.dataIndex ?? _.key];
                  return {
                    key: _.key,
                    label: _.title,
                    children: _.render ? _.render(Z, Tt, 0) : String(Z ?? "-")
                  };
                })
              }
            )
          }
        ),
        T === "drawer" ? /* @__PURE__ */ e(
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
  ub as ABC_HEADER_HEIGHT_BY_SIZE,
  mr as ABC_MOTION_PRESETS,
  Cn as ABC_RADIUS_PRESETS,
  bb as ABC_SIDEBAR_WIDTH_BY_SIZE,
  Fb as ABC_SIZE_PRESETS,
  xs as AbcConfirmHost,
  qb as AbcProvider,
  pl as AbcToastViewport,
  uu as ActionCard,
  ju as Alert,
  Du as AsyncInlineError,
  Ru as AttentionList,
  Rn as AuroraBackground,
  wb as AuthLayout,
  Dl as Avatar,
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
  Wl as CardContent,
  $l as CardDescription,
  Fl as CardFooter,
  jl as CardHeader,
  Ol as CardTitle,
  bu as CheckCard,
  du as CheckCardGroup,
  xr as Checkbox,
  Mu as Collapse,
  mu as CollapsibleCard,
  yb as CommandPalette,
  Pu as ConfirmDialog,
  Yb as ConfirmProvider,
  Jb as CopyButton,
  Os as CopyableCode,
  Sl as CopyableText,
  Qb as CursorPagination,
  mb as DEFAULT_ABC_LAYOUT_SETTINGS,
  Xe as DEFAULT_ABC_THEME,
  Ur as DURATION_UNITS,
  As as DURATION_UNIT_FACTORS,
  Da as DatePicker,
  Ba as DateRangePicker,
  $s as DescriptionList,
  Eu as DescriptionListItem,
  Sd as Descriptions,
  lt as Dialog,
  Ga as DialogContent,
  Ua as DialogContext,
  qa as DialogDescription,
  Ya as DialogFooter,
  Va as DialogHeader,
  Xa as DialogTitle,
  Uu as DictSelect,
  Gu as DictTag,
  ou as Divider,
  ra as Drawer,
  Od as DrawerBody,
  jd as DrawerDescription,
  $d as DrawerFooter,
  Pd as DrawerHeader,
  zd as DrawerTitle,
  Qt as Dropdown,
  hb as DualColumnNav,
  Su as DurationQuotaInput,
  Tl as EmptyState,
  Jd as ErrorBoundary,
  Yu as FilterPillGroup,
  Eb as FilterToolbar,
  Aa as FormField,
  Db as HeaderColumnFilterPopover,
  Bn as ICON_CATALOG,
  zt as Icon,
  _u as IconBadge,
  Nl as IconPicker,
  js as ImagePreview,
  hd as ImageUpload,
  rt as Input,
  _a as InputNumber,
  eb as InspectorPanel,
  Yt as Kbd,
  xb as KeepAliveContainer,
  td as Label,
  zu as Loading,
  Lu as LoadingStateCard,
  lu as MetricCard,
  Ub as Modal,
  gb as MultiTabBar,
  Wt as NotificationBanner,
  $u as OneTimeSecretDialog,
  Fu as PageContainer,
  Fr as Pagination,
  Ku as Permission,
  Mb as PermissionGuard,
  Is as Popover,
  fu as PricingCard,
  Bb as ProColumnSettingsPopover,
  Vu as ProConfigForm,
  Rb as ProFloatingBatchBar,
  Tb as ProFormLayout,
  Hu as ProLayout,
  Lb as ProRowActionsOverflow,
  Ju as ProTable,
  Xd as Progress,
  Xu as QuickSelectBar,
  mt as RadioGroup,
  Bu as ReadErrorBanner,
  qu as ReasonedActionDialog,
  Zu as ReasonedActionDrawer,
  Zd as Result,
  Au as RichIconText,
  rd as SearchInput,
  xu as SegmentedControl,
  It as Select,
  ga as SidebarNav,
  Ve as Skeleton,
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
  ab as Table,
  sb as TableBody,
  db as TableCaption,
  lb as TableCell,
  rb as TableCore,
  ob as TableFooter,
  cb as TableHead,
  nb as TableHeader,
  ib as TableRow,
  Iu as Tabs,
  Bl as Tag,
  yd as TagInput,
  Qr as Textarea,
  Un as ThemeCustomizer,
  Tu as Timeline,
  fl as ToastContainer,
  ml as ToastItemView,
  Qe as Tooltip,
  Wn as TopHorizontalNav,
  yu as Tree,
  Hd as Watermark,
  Za as abcConfirm,
  en as abcToast,
  Je as applyAbcThemeToDocument,
  Lt as baseFieldControlClass,
  Ma as buildCalendarMonthGrid,
  _b as buildCsvContent,
  Hb as buttonVariants,
  In as cleanQueryObject,
  dl as clearToasts,
  u as cn,
  ua as collectAllExpandableKeys,
  ls as computeTreeCheckState,
  Gb as confirm,
  ea as copyToClipboard,
  Qa as dismissToast,
  Ab as downloadTableCsv,
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
  cl as pauseToast,
  Ls as pickBestByteUnit,
  Rs as pickBestDurationUnit,
  Vt as pushToast,
  xc as readQueryFromUrlSearch,
  Zb as registerAbcIcons,
  Xt as resolveAbcThemeMode,
  ll as resumeToast,
  su as tagVariants,
  Xb as toast,
  hc as toggleTreeNodeChecked,
  mc as transitionAbcTheme,
  Ye as useAbcConfig,
  Gs as useAbcDict,
  vl as useAbcDrawerCascadeMode,
  se as useAbcMotion,
  Us as useAbcPermission,
  fe as useAbcSize,
  Vb as useConfirm,
  st as useControllableState,
  Kb as useDialog,
  tl as useDraftStorage,
  kr as useFloatingPosition,
  $t as usePresence,
  rl as useTableSettings,
  yc as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
