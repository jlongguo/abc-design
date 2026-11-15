var vs = Object.defineProperty;
var gs = (t, r, a) => r in t ? vs(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var Wr = (t, r, a) => gs(t, typeof r != "symbol" ? r + "" : r, a);
import * as ht from "react";
import Oe, { useState as O, useEffect as ie, useRef as le, useCallback as he, useLayoutEffect as Jr, useId as $e, useContext as un, createContext as mn, useMemo as ce, useImperativeHandle as Nr } from "react";
import { jsxs as c, jsx as e, Fragment as De } from "react/jsx-runtime";
import { Loader2 as kr, Minimize2 as ma, Maximize2 as fa, X as Ue, Trash2 as Ot, AlertTriangle as rr, CheckCircle2 as pt, HelpCircle as Cr, Info as Sr, AlertCircle as $t, Zap as xs, XCircle as ys, Wrench as ws, Wallet as Ns, Video as ks, Users as Cs, UserCog as Ss, UserCheck as Ms, User as Is, Upload as fn, Unlock as Es, TrendingUp as Ts, Trash as _s, Timer as As, Ticket as Ls, Terminal as Rs, Tags as zs, Tag as Ds, Store as Ps, StarOff as Bs, Star as js, Sparkles as Mr, Smartphone as Os, SlidersHorizontal as Qr, Sliders as $s, ShoppingCart as Ws, ShoppingBag as Fs, ShieldCheck as Hs, ShieldAlert as pn, Shield as Ks, Share2 as Us, Share as Vs, Settings as Gs, Server as Ys, Send as Xs, Search as dt, ScrollText as qs, RotateCw as Ir, RotateCcw as kt, RefreshCw as Er, Receipt as Zs, Radio as Js, PlusCircle as Qs, Plus as pa, Play as hn, PieChart as eo, PhoneCall as to, Phone as ro, Pause as ao, PanelTop as no, PanelLeft as so, Palette as vn, Package as oo, Network as co, MoreHorizontal as ha, Monitor as gn, Minus as Tr, MessagesSquare as io, MessageSquareText as lo, MessageSquareQuote as bo, MessageSquare as uo, MessageCircle as mo, Menu as xn, Megaphone as fo, MapPin as po, Lock as ho, ListOrdered as vo, ListChecks as go, Link2 as xo, LineChart as yo, LayoutGrid as wo, LayoutDashboard as No, Layers as yn, KeyRound as ko, Key as Co, Image as wn, Home as So, History as Mo, Headphones as Io, HardDrive as Eo, Handshake as To, Globe2 as _o, Globe as Ao, FolderTree as Lo, FolderPlus as Ro, FolderOpen as zo, FolderGit2 as Do, Folder as Po, Flame as Bo, FileText as jo, FileSpreadsheet as Oo, FileClock as $o, FileCheck as Wo, Eye as Wt, Edit3 as ea, Edit as Fo, Download as Nn, Database as Ho, CreditCard as Ko, Cpu as Uo, Copy as va, Compass as kn, Coins as Vo, Clock as hr, CircleDollarSign as Go, CheckSquare as Yo, CheckCircle as Xo, Check as Ke, Camera as qo, CalendarCheck as Zo, Calendar as ga, Building2 as Jo, Boxes as Qo, BookMarked as ec, BellRing as tc, Bell as rc, BarChart3 as ac, BarChart2 as nc, AlertOctagon as sc, Activity as oc, EyeOff as Cn, ChevronDown as ct, FolderSearch as cc, ChevronLeft as xa, ChevronRight as bt, ArrowUpRight as ic, ArrowDownRight as lc, ChevronsLeft as Sn, ChevronsRight as Mn, UploadCloud as dc, ArrowRight as bc, ChevronsUpDown as uc, ChevronsDownUp as mc, ZoomOut as fc, ZoomIn as pc, GripVertical as ya, ServerCrash as hc, FileSearch as vc, ArrowUp as ta, ArrowDown as ra, ArrowUpDown as Oa, Pin as Pt, PinOff as gc, Pencil as xc, CornerDownLeft as yc, Sun as aa, Moon as na, Code2 as wc, PanelLeftOpen as Nc, PanelLeftClose as kc, Save as Cc, Filter as er, Settings2 as Sc, ChevronUp as $a, ListFilter as Mc, AlignJustify as Ic } from "lucide-react";
import { createPortal as tt } from "react-dom";
import ke from "dayjs";
const Fr = {
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
}, Wa = {
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
}, Fa = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, Dd = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, Xt = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Ge = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, Ha = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function Ec(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of Ha)
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
  for (const s of Ha)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function Lt(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Tc(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Xe(t) {
  const r = Lt(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return Tc(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), Ec(a, t.customBrandColor), r;
}
function _c(t, r) {
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
const Hr = [
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
function Ac(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = Hr.length - 1; r >= 0; r--)
    if (t.localeCompare(Hr[r].start, "zh-CN") >= 0)
      return Hr[r].letter;
  return t.toLowerCase();
}
function Lc(t) {
  return Array.from(t).map(Ac).join("");
}
function nt(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : Lc(t).includes(a);
}
function In(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      In(a, r);
  return r;
}
function En(t, r, a = !1) {
  const n = new Set(r), s = /* @__PURE__ */ new Set();
  if (a)
    return {
      checkedKeys: Array.from(n),
      halfCheckedKeys: []
    };
  function o(l) {
    if (!l.children || l.children.length === 0) {
      const x = n.has(l.key);
      return { allChecked: x, someChecked: x };
    }
    const i = l.children.filter((x) => !x.disabled);
    if (i.length === 0) {
      const x = n.has(l.key);
      return { allChecked: x, someChecked: x };
    }
    let b = !0, u = !1;
    for (const x of i) {
      const h = o(x);
      h.allChecked || (b = !1), h.someChecked && (u = !0);
    }
    return b ? (n.add(l.key), s.delete(l.key)) : u ? (n.delete(l.key), s.add(l.key)) : (n.delete(l.key), s.delete(l.key)), { allChecked: b, someChecked: u };
  }
  for (const l of t)
    o(l);
  return {
    checkedKeys: Array.from(n),
    halfCheckedKeys: Array.from(s)
  };
}
function Rc(t, r, a, n, s = !1) {
  const o = new Set(r);
  if (s)
    return n ? o.add(a.key) : o.delete(a.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const l = In(a);
  for (const i of l)
    n ? o.add(i) : o.delete(i);
  return En(t, Array.from(o), !1);
}
function zc(t, r) {
  const a = r.trim();
  if (!a)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(o) {
    const l = [];
    for (const i of o) {
      const b = i.children ? s(i.children) : [], u = nt(i.title, a);
      (u || b.length > 0) && (b.length > 0 && n.push(i.key), l.push({
        ...i,
        children: b.length > 0 ? b : i.children && u ? i.children : void 0
      }));
    }
    return l;
  }
  return {
    filteredNodes: s(t),
    autoExpandedKeys: n
  };
}
function Kr(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function Tn(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function Dc({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let l = [...t];
  const i = a.trim();
  i && (l = l.filter((b) => (r && r.length > 0 ? r : Object.keys(b)).some((x) => {
    const h = b[x];
    return h != null && nt(String(h), i);
  })));
  for (const [b, u] of Object.entries(n))
    if (u != null) {
      if (Array.isArray(u)) {
        if (u.length === 0)
          continue;
        l = l.filter((x) => {
          const h = x[b];
          return h == null ? !1 : u.some((g) => String(h) === String(g) || nt(String(h), String(g)));
        });
        continue;
      }
      if (Tn(u)) {
        const x = (u.start ?? "").trim(), h = (u.end ?? "").trim();
        if (!x && !h)
          continue;
        l = l.filter((g) => {
          const d = g[b];
          if (d == null)
            return !1;
          const f = String(d).slice(0, 10);
          return !(x && f < x || h && f > h);
        });
        continue;
      }
      String(u).trim() !== "" && (l = l.filter((x) => {
        const h = x[b];
        return h == null ? !1 : nt(String(h), String(u));
      }));
    }
  if (s && o) {
    const b = o === "asc" ? 1 : -1;
    l.sort((u, x) => {
      const h = u[s], g = x[s];
      return typeof h == "number" && typeof g == "number" ? (h - g) * b : String(h ?? "").localeCompare(String(g ?? ""), "zh-CN") * b;
    });
  }
  return l;
}
function Ka(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || Tn(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function Pc(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((o, l) => {
    o && (s && !s.has(l) || (n[l] = o));
  }), n;
}
function Bc(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of r)
    n.delete(o);
  for (const [o, l] of Object.entries(a))
    l == null || Array.isArray(l) || typeof l == "object" || String(l).trim() !== "" && n.set(o, String(l));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function fr(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), l = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${l}`;
}
function sa(t, r, a = /* @__PURE__ */ new Date()) {
  const n = fr(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), o = new Date(t, r + 1, 0).getDate(), l = new Date(t, r, 0).getDate(), i = [];
  for (let u = s - 1; u >= 0; u--) {
    const x = l - u, h = fr(t, r - 1, x);
    i.push({ iso: h, day: x, inCurrentMonth: !1, isToday: h === n });
  }
  for (let u = 1; u <= o; u++) {
    const x = fr(t, r, u);
    i.push({ iso: x, day: u, inCurrentMonth: !0, isToday: x === n });
  }
  let b = 1;
  for (; i.length < 42; ) {
    const u = fr(t, r + 1, b);
    i.push({ iso: u, day: b, inCurrentMonth: !1, isToday: u === n }), b += 1;
  }
  return i;
}
function _n(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = _n(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function jc() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = _n(t)) && (n && (n += " "), n += r);
  return n;
}
const wa = "-", Oc = (t) => {
  const r = Wc(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const i = l.split(wa);
      return i[0] === "" && i.length !== 1 && i.shift(), An(i, r) || $c(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const b = a[l] || [];
      return i && n[l] ? [...b, ...n[l]] : b;
    }
  };
}, An = (t, r) => {
  var l;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? An(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = t.join(wa);
  return (l = r.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : l.classGroupId;
}, Ua = /^\[(.+)\]$/, $c = (t) => {
  if (Ua.test(t)) {
    const r = Ua.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Wc = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Hc(Object.entries(t.classGroups), a).forEach(([o, l]) => {
    oa(l, n, o, r);
  }), n;
}, oa = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : Va(r, s);
      o.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (Fc(s)) {
        oa(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([o, l]) => {
      oa(l, Va(r, o), a, n);
    });
  });
}, Va = (t, r) => {
  let a = t;
  return r.split(wa).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Fc = (t) => t.isThemeGetter, Hc = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, i]) => [r + l, i])) : o);
  return [a, s];
}) : t, Kc = (t) => {
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
}, Ln = "!", Uc = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], o = r.length, l = (i) => {
    const b = [];
    let u = 0, x = 0, h;
    for (let y = 0; y < i.length; y++) {
      let S = i[y];
      if (u === 0) {
        if (S === s && (n || i.slice(y, y + o) === r)) {
          b.push(i.slice(x, y)), x = y + o;
          continue;
        }
        if (S === "/") {
          h = y;
          continue;
        }
      }
      S === "[" ? u++ : S === "]" && u--;
    }
    const g = b.length === 0 ? i : i.substring(x), d = g.startsWith(Ln), f = d ? g.substring(1) : g, p = h && h > x ? h - x : void 0;
    return {
      modifiers: b,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: p
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: l
  }) : l;
}, Vc = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, Gc = (t) => ({
  cache: Kc(t.cacheSize),
  parseClassName: Uc(t),
  ...Oc(t)
}), Yc = /\s+/, Xc = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], l = t.trim().split(Yc);
  let i = "";
  for (let b = l.length - 1; b >= 0; b -= 1) {
    const u = l[b], {
      modifiers: x,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: d
    } = a(u);
    let f = !!d, p = n(f ? g.substring(0, d) : g);
    if (!p) {
      if (!f) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (p = n(g), !p) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      f = !1;
    }
    const y = Vc(x).join(":"), S = h ? y + Ln : y, v = S + p;
    if (o.includes(v))
      continue;
    o.push(v);
    const N = s(p, f);
    for (let E = 0; E < N.length; ++E) {
      const _ = N[E];
      o.push(S + _);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function qc() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = Rn(r)) && (n && (n += " "), n += a);
  return n;
}
const Rn = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = Rn(t[n])) && (a && (a += " "), a += r);
  return a;
};
function Zc(t, ...r) {
  let a, n, s, o = l;
  function l(b) {
    const u = r.reduce((x, h) => h(x), t());
    return a = Gc(u), n = a.cache.get, s = a.cache.set, o = i, i(b);
  }
  function i(b) {
    const u = n(b);
    if (u)
      return u;
    const x = Xc(b, a);
    return s(b, x), x;
  }
  return function() {
    return o(qc.apply(null, arguments));
  };
}
const ze = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, zn = /^\[(?:([a-z-]+):)?(.+)\]$/i, Jc = /^\d+\/\d+$/, Qc = /* @__PURE__ */ new Set(["px", "full", "screen"]), ei = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ti = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ri = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ai = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ni = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ot = (t) => Rt(t) || Qc.has(t) || Jc.test(t), mt = (t) => Ft(t, "length", ui), Rt = (t) => !!t && !Number.isNaN(Number(t)), Ur = (t) => Ft(t, "number", Rt), qt = (t) => !!t && Number.isInteger(Number(t)), si = (t) => t.endsWith("%") && Rt(t.slice(0, -1)), Ne = (t) => zn.test(t), ft = (t) => ei.test(t), oi = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ci = (t) => Ft(t, oi, Dn), ii = (t) => Ft(t, "position", Dn), li = /* @__PURE__ */ new Set(["image", "url"]), di = (t) => Ft(t, li, fi), bi = (t) => Ft(t, "", mi), Zt = () => !0, Ft = (t, r, a) => {
  const n = zn.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, ui = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ti.test(t) && !ri.test(t)
), Dn = () => !1, mi = (t) => ai.test(t), fi = (t) => ni.test(t), pi = () => {
  const t = ze("colors"), r = ze("spacing"), a = ze("blur"), n = ze("brightness"), s = ze("borderColor"), o = ze("borderRadius"), l = ze("borderSpacing"), i = ze("borderWidth"), b = ze("contrast"), u = ze("grayscale"), x = ze("hueRotate"), h = ze("invert"), g = ze("gap"), d = ze("gradientColorStops"), f = ze("gradientColorStopPositions"), p = ze("inset"), y = ze("margin"), S = ze("opacity"), v = ze("padding"), N = ze("saturate"), E = ze("scale"), _ = ze("sepia"), T = ze("skew"), k = ze("space"), w = ze("translate"), C = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", Ne, r], M = () => [Ne, r], A = () => ["", ot, mt], W = () => ["auto", Rt, Ne], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], P = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], K = () => ["", "0", Ne], re = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [Rt, Ne];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Zt],
      spacing: [ot, mt],
      blur: ["none", "", ft, Ne],
      brightness: Q(),
      borderColor: [t],
      borderRadius: ["none", "", "full", ft, Ne],
      borderSpacing: M(),
      borderWidth: A(),
      contrast: Q(),
      grayscale: K(),
      hueRotate: Q(),
      invert: K(),
      gap: M(),
      gradientColorStops: [t],
      gradientColorStopPositions: [si, mt],
      inset: D(),
      margin: D(),
      opacity: Q(),
      padding: M(),
      saturate: Q(),
      scale: Q(),
      sepia: K(),
      skew: Q(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ne]
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
        columns: [ft]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": re()
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
        object: [...Y(), Ne]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
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
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
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
        z: ["auto", qt, Ne]
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
        flex: ["1", "auto", "initial", "none", Ne]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: K()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: K()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", qt, Ne]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Zt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qt, Ne]
        }, Ne]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Zt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qt, Ne]
        }, Ne]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": ["auto", "min", "max", "fr", Ne]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ne]
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
        justify: ["normal", ...j()]
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
        content: ["normal", ...j(), "baseline"]
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
        "place-content": [...j(), "baseline"]
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
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ne, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ne, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ne, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [ft]
        }, ft]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ne, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ne, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ne, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ne, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ft, mt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ur]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Zt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ne]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Rt, Ur]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ot, Ne]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ne]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ne]
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
        decoration: [...P(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ot, mt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ot, Ne]
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
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ne]
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
        content: ["none", Ne]
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
        bg: [...Y(), ii]
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
        bg: ["auto", "cover", "contain", ci]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, di]
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
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
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
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
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
        border: [...P(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        divide: P()
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
        outline: ["", ...P()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ot, Ne]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ot, mt]
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
        ring: A()
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
        "ring-offset": [ot, mt]
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
        shadow: ["", "inner", "none", ft, bi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Zt]
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
        contrast: [b]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ft, Ne]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [x]
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
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
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
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [x]
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
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ne]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ne]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ne]
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
        rotate: [qt, Ne]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ne]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ne]
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        "will-change": ["auto", "scroll", "contents", "transform", Ne]
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
        stroke: [ot, mt, Ur]
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
}, hi = /* @__PURE__ */ Zc(pi);
function m(...t) {
  return hi(jc(t));
}
function vi() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Ct(t, r = 200) {
  const [a, n] = O(t), s = vi();
  return t && !a && n(!0), ie(() => {
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
function Je({
  value: t,
  defaultValue: r,
  onChange: a
}) {
  const [n, s] = O(r), o = t !== void 0, l = o ? t : n, i = le(l);
  i.current = l;
  const b = le(a);
  b.current = a;
  const u = he(
    (x) => {
      var g;
      const h = typeof x == "function" ? x(i.current) : x;
      o || s(h), (g = b.current) == null || g.call(b, h);
    },
    [o]
  );
  return [l, u];
}
function gi(t) {
  const r = t ? `abc_draft_${t}` : "", a = he(() => {
    if (!r || typeof window > "u") return null;
    try {
      const i = window.localStorage.getItem(r);
      return i ? JSON.parse(i) : null;
    } catch {
      return null;
    }
  }, [r]), [n, s] = O(() => !!a()), o = he(
    (i) => {
      if (!(!r || typeof window > "u"))
        try {
          window.localStorage.setItem(r, JSON.stringify(i)), s(!0);
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
    saveDraft: o,
    clearDraft: l
  };
}
const Ga = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  density: "default"
};
function xi(t, r = "default") {
  const a = t ? `abc_table_${t}` : "", [n, s] = O(() => {
    const d = { ...Ga, density: r };
    if (!a || typeof window > "u") return d;
    try {
      const f = window.localStorage.getItem(a);
      if (!f) return d;
      const p = JSON.parse(f);
      return {
        hiddenKeys: Array.isArray(p.hiddenKeys) ? p.hiddenKeys : [],
        columnOrder: Array.isArray(p.columnOrder) ? p.columnOrder : [],
        columnWidths: p.columnWidths && typeof p.columnWidths == "object" ? p.columnWidths : {},
        columnFixed: p.columnFixed && typeof p.columnFixed == "object" ? p.columnFixed : {},
        searchVisible: p.searchVisible && typeof p.searchVisible == "object" ? p.searchVisible : {},
        density: p.density ?? r
      };
    } catch {
      return d;
    }
  });
  ie(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify(n));
      } catch {
      }
  }, [a, n]);
  const o = he((d) => {
    s((f) => ({
      ...f,
      hiddenKeys: f.hiddenKeys.includes(d) ? f.hiddenKeys.filter((p) => p !== d) : [...f.hiddenKeys, d]
    }));
  }, []), l = he((d, f) => {
    s((p) => ({
      ...p,
      hiddenKeys: f ? [] : Array.from(new Set(d))
    }));
  }, []), i = he(
    (d, f) => {
      s((p) => {
        const y = { ...p.columnFixed };
        return f === void 0 ? delete y[d] : y[d] = f, {
          ...p,
          columnFixed: y
        };
      });
    },
    []
  ), b = he((d, f) => {
    s((p) => ({
      ...p,
      columnWidths: { ...p.columnWidths, [d]: Math.max(64, Math.round(f)) }
    }));
  }, []), u = he((d) => {
    s((f) => ({ ...f, columnOrder: d }));
  }, []), x = he((d, f) => {
    s((p) => ({
      ...p,
      searchVisible: { ...p.searchVisible, [d]: f }
    }));
  }, []), h = he((d) => {
    s((f) => ({ ...f, density: d }));
  }, []), g = he(() => {
    s({ ...Ga, density: r });
  }, [r]);
  return {
    settings: n,
    toggleColumnVisible: o,
    setAllColumnsVisible: l,
    setColumnFixed: i,
    setColumnWidth: b,
    setColumnOrder: u,
    setSearchFieldVisible: x,
    setDensity: h,
    resetSettings: g
  };
}
const yi = typeof window < "u" ? Jr : ie;
function _r(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function wi(t) {
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
function Vr(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function ar({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: l = 8
}) {
  const { side: i, align: b } = wi(n), [u, x] = O(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: i,
    arrowOffset: 16,
    transformOrigin: Vr(i, b),
    positioned: !1
  })), h = he(() => {
    if (typeof window > "u" || !r.current) return;
    const d = r.current.getBoundingClientRect(), f = a.current, p = f == null ? void 0 : f.getBoundingClientRect(), y = window.innerWidth || 1024, S = window.innerHeight || 768, v = l, N = f ? f.offsetWidth : 0, E = f ? f.offsetHeight : 0, _ = N || (p == null ? void 0 : p.width) || (o ? d.width : 180), T = o ? Math.max(_, d.width) : _, k = E || (p == null ? void 0 : p.height) || 40;
    if (d.width === 0 && d.height === 0 && d.top === 0 && d.left === 0) {
      x({
        top: s,
        left: v,
        minWidth: o && d.width > 0 ? d.width : void 0,
        actualSide: i,
        arrowOffset: 16,
        transformOrigin: Vr(i, b),
        positioned: !0
      });
      return;
    }
    let w = i;
    if (i === "bottom") {
      const j = S - d.bottom - s - v, K = d.top - s - v;
      k > j && K > j && (w = "top");
    } else if (i === "top") {
      const j = d.top - s - v, K = S - d.bottom - s - v;
      k > j && K > j && (w = "bottom");
    } else if (i === "left") {
      const j = d.left - s - v, K = y - d.right - s - v;
      T > j && K > j && (w = "right");
    } else if (i === "right") {
      const j = y - d.right - s - v, K = d.left - s - v;
      T > j && K > j && (w = "left");
    }
    let C = 0, L = 0;
    w === "bottom" || w === "top" ? (C = w === "bottom" ? d.bottom + s : d.top - k - s, b === "start" ? L = d.left : b === "end" ? L = d.right - T : L = d.left + d.width / 2 - T / 2) : (L = w === "right" ? d.right + s : d.left - T - s, b === "start" ? C = d.top : b === "end" ? C = d.bottom - k : C = d.top + d.height / 2 - k / 2);
    const D = Math.max(v, y - T - v), M = Math.max(v, S - k - v), A = Math.min(Math.max(v, L), D), W = Math.min(Math.max(v, C), M), Y = w === "top" || w === "bottom" ? Math.min(
      Math.max(10, d.left + d.width / 2 - A),
      Math.max(10, T - 10)
    ) : Math.min(
      Math.max(10, d.top + d.height / 2 - W),
      Math.max(10, k - 10)
    ), P = Vr(w, b), $ = o ? Math.round(d.width) : void 0;
    x((j) => j.positioned && Math.abs(j.top - W) < 0.5 && Math.abs(j.left - A) < 0.5 && j.minWidth === $ && j.actualSide === w && Math.abs(j.arrowOffset - Y) < 0.5 && j.transformOrigin === P ? j : {
      top: Math.round(W * 10) / 10,
      left: Math.round(A * 10) / 10,
      minWidth: $,
      actualSide: w,
      arrowOffset: Math.round(Y),
      transformOrigin: P,
      positioned: !0
    });
  }, [r, a, i, b, s, o, l]);
  yi(() => {
    if (!t) {
      x((f) => f.positioned ? { ...f, positioned: !1 } : f);
      return;
    }
    h();
    const d = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(h) : 0;
    return () => {
      d && typeof window < "u" && window.cancelAnimationFrame(d);
    };
  }, [t, h]), ie(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", h, { passive: !0 }), window.addEventListener("scroll", h, !0);
    let d = null;
    return typeof ResizeObserver < "u" && (d = new ResizeObserver(() => h()), a.current && d.observe(a.current), r.current && d.observe(r.current)), () => {
      window.removeEventListener("resize", h), window.removeEventListener("scroll", h, !0), d == null || d.disconnect();
    };
  }, [t, h, a, r]);
  const g = t ? _r(r.current) : null;
  return {
    style: {
      position: "fixed",
      top: `${u.top}px`,
      left: `${u.left}px`,
      minWidth: u.minWidth ? `${u.minWidth}px` : void 0,
      transformOrigin: u.transformOrigin,
      // 尚未完成首帧同步坐标测算前先隐藏，防止残影在 (0, 0) 或上次位置闪现一帧
      visibility: t && !u.positioned ? "hidden" : void 0
    },
    actualSide: u.actualSide,
    arrowOffset: u.arrowOffset,
    portalContainer: g,
    update: h
  };
}
const vr = {
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
}, gr = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  default: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm",
  icon: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  "icon-sm": "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0"
};
function Pd({
  variant: t = "primary",
  size: r = "sm",
  className: a
} = {}) {
  const n = vr[t] || vr.primary, s = gr[r] || gr.sm;
  return m(
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
    "disabled:opacity-45 disabled:cursor-not-allowed",
    n,
    s,
    a
  );
}
const _e = Oe.forwardRef(
  ({
    className: t,
    variant: r = "primary",
    size: a,
    motion: n,
    loading: s = !1,
    loadingText: o,
    disabled: l,
    icon: i,
    leftIcon: b,
    rightIcon: u,
    block: x = !1,
    asChild: h = !1,
    type: g,
    children: d,
    ...f
  }, p) => {
    const y = a === "icon" || a === "icon-sm", N = be(y ? void 0 : a === "default" ? "sm" : a, "sm"), E = ne(n), _ = !!(l || s), T = b ?? i, k = m(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      vr[r] || vr.primary,
      y ? gr[a] : gr[N],
      x && "w-full",
      t
    );
    if (h && Oe.isValidElement(d)) {
      const w = d;
      return Oe.cloneElement(w, {
        className: m(k, w.props.className),
        ...f
      });
    }
    return /* @__PURE__ */ c(
      "button",
      {
        ref: p,
        type: g,
        disabled: _,
        "data-motion": E,
        className: k,
        ...f,
        children: [
          s ? /* @__PURE__ */ e(kr, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : T && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: T }),
          s && o !== void 0 ? o : d,
          !s && u && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: u })
        ]
      }
    );
  }
);
_e.displayName = "Button";
const Ni = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  "2xl": "max-w-4xl",
  "3xl": "max-w-5xl",
  "4xl": "max-w-6xl",
  "5xl": "max-w-7xl"
}, wt = ({
  open: t,
  visible: r,
  isOpen: a,
  onClose: n,
  title: s,
  description: o,
  children: l,
  footer: i,
  size: b,
  maxWidth: u = "md",
  width: x,
  closeOnClickModal: h = !0,
  draggable: g = !0,
  fullscreenable: d = !0,
  fullscreen: f,
  onFullscreenChange: p,
  motion: y,
  className: S
}) => {
  const v = t ?? r ?? a ?? !1, N = ne(y), { isMounted: E, isVisible: _ } = Ct(v, N === "none" ? 0 : 180), T = $e(), k = $e(), w = le(null), C = le(null), L = le(!1), D = le(n);
  D.current = n;
  const [M, A] = O(!1), W = f !== void 0 ? f : M, [Y, P] = O({ x: 0, y: 0 }), $ = le(
    null
  ), j = he(() => {
    const B = !W;
    f === void 0 && A(B), p == null || p(B);
  }, [W, f, p]);
  ie(() => {
    if (!E) return;
    const B = w.current;
    if (!B) return;
    let U = !1;
    if (typeof B.showModal == "function")
      if (B.open)
        U = !0;
      else
        try {
          B.showModal(), U = !0;
        } catch {
          B.setAttribute("open", "");
        }
    else
      B.setAttribute("open", "");
    const V = (J) => {
      J.preventDefault(), D.current();
    }, X = (J) => {
      J.key === "Escape" && (J.stopPropagation(), D.current());
    };
    return B.addEventListener("cancel", V), (!U || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", X), () => {
      if (B.removeEventListener("cancel", V), window.removeEventListener("keydown", X), B.open && typeof B.close == "function")
        try {
          B.close();
        } catch {
          B.removeAttribute("open");
        }
    };
  }, [E]), ie(() => {
    v || (P({ x: 0, y: 0 }), f === void 0 && A(!1));
  }, [v, f]);
  const K = (B) => {
    var J;
    const U = B.target;
    if ((J = U == null ? void 0 : U.closest) != null && J.call(U, "[data-abc-floating]"))
      return !1;
    const V = C.current;
    if (!V) return !1;
    const X = V.getBoundingClientRect();
    return X.width === 0 && X.height === 0 ? !V.contains(B.target) : B.clientX < X.left || B.clientX > X.right || B.clientY < X.top || B.clientY > X.bottom;
  }, re = (B) => {
    if (!g || W || B.button !== 0 || B.target.closest('button, a, input, [role="button"]')) return;
    $.current = {
      startX: B.clientX,
      startY: B.clientY,
      origX: Y.x,
      origY: Y.y
    };
    const U = (X) => {
      $.current && P({
        x: $.current.origX + (X.clientX - $.current.startX),
        y: $.current.origY + (X.clientY - $.current.startY)
      });
    }, V = () => {
      $.current = null, window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", V);
    };
    window.addEventListener("mousemove", U), window.addEventListener("mouseup", V);
  };
  if (!E || typeof document > "u") return null;
  const Q = b || u, Ce = Ni[Q] || Q;
  return tt(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: w,
        "data-motion": N,
        "aria-labelledby": s ? T : void 0,
        "aria-label": s ? void 0 : "对话框",
        "aria-describedby": o ? k : void 0,
        onPointerDown: (B) => {
          L.current = h && K(B);
        },
        onPointerUp: (B) => {
          h && L.current && K(B) && n(), L.current = !1;
        },
        onClick: (B) => {
          h && B.target === w.current && !L.current && n();
        },
        className: m(
          "fixed inset-0 z-[1000] m-0 h-dvh max-h-none w-dvw max-w-none border-0 bg-transparent p-4 open:flex items-center justify-center",
          W && "p-0",
          N !== "none" && (_ ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ c(
          "div",
          {
            ref: C,
            "data-dialog-panel": "",
            "data-motion": N,
            style: {
              width: !W && x ? x : void 0,
              transform: !W && (Y.x !== 0 || Y.y !== 0) ? `translate3d(${Y.x}px, ${Y.y}px, 0)` : void 0
            },
            className: m(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)]",
              W ? "h-dvh w-dvw rounded-none" : m("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !x && Ce),
              N !== "none" && (_ ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              S
            ),
            children: [
              (s !== void 0 || d) && /* @__PURE__ */ c(
                "div",
                {
                  onMouseDown: re,
                  onDoubleClick: d ? j : void 0,
                  className: m(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    g && !W && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                      s && /* @__PURE__ */ e("h2", { id: T, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: s }),
                      o && /* @__PURE__ */ e("p", { id: k, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: o })
                    ] }),
                    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": W ? "还原窗口" : "全屏",
                          title: W ? "退出全屏" : "全屏显示",
                          onClick: j,
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: W ? /* @__PURE__ */ e(ma, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(fa, { className: "h-3.5 w-3.5" })
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
                  children: l
                }
              ),
              i && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: i })
            ]
          }
        )
      }
    ),
    document.body
  );
}, xr = /* @__PURE__ */ new Set();
let Pn = null, Qt = 0;
function Bn(t) {
  Pn = t, xr.forEach((r) => r(t));
}
function ki(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function Na(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (Qt === 0 && typeof window < "u" && xr.size === 0) {
    const s = r.content ?? r.message, o = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    Bn({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: ki(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const Bd = Na;
function jd() {
  return Na;
}
const jn = () => {
  const [t, r] = O(!1), [a, n] = O(() => Pn), [s, o] = O(!1);
  if (ie(() => {
    Qt += 1, r(Qt === 1);
    const u = (x) => n(x);
    return xr.add(u), () => {
      Qt = Math.max(0, Qt - 1), xr.delete(u);
    };
  }, []), !t || !a) return null;
  const l = async (b) => {
    var u;
    if (!(!a || s)) {
      if (b && a.onConfirm)
        try {
          o(!0), await a.onConfirm();
        } finally {
          o(!1);
        }
      else b || (u = a.onCancel) == null || u.call(a);
      a.resolve(b), Bn(null);
    }
  }, i = a.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(Ot, { className: "h-4 w-4" }) }) : a.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e(rr, { className: "h-4 w-4" }) }) : a.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(pt, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Cr, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    wt,
    {
      open: !!a,
      onClose: () => l(!1),
      title: a.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ c(De, { children: [
        /* @__PURE__ */ e(
          _e,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: a.resolvedTone === "danger",
            onClick: () => l(!1),
            children: a.cancelText
          }
        ),
        /* @__PURE__ */ e(
          _e,
          {
            variant: a.resolvedTone === "danger" ? "danger" : a.resolvedTone === "warning" ? "warning" : a.resolvedTone === "success" ? "success" : "primary",
            loading: s,
            autoFocus: a.resolvedTone !== "danger",
            onClick: () => l(!0),
            children: a.confirmText
          }
        )
      ] }),
      children: /* @__PURE__ */ c("div", { className: "flex items-start gap-3.5 py-1", children: [
        i,
        /* @__PURE__ */ e("div", { className: "pt-1 text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: a.message })
      ] })
    }
  );
}, Od = ({ children: t }) => /* @__PURE__ */ c(De, { children: [
  t,
  /* @__PURE__ */ e(jn, {})
] });
let Bt = [];
const ca = /* @__PURE__ */ new Set();
let Ci = 0;
function On() {
  const t = [...Bt];
  ca.forEach((r) => r(t));
}
function $n(t) {
  Bt = Bt.filter((r) => r.id !== t), On();
}
function pr(t, r, a = 3e3) {
  const n = `abc_toast_${++Ci}_${Date.now()}`;
  return Bt = [...Bt.slice(-4), { id: n, tone: t, message: r, duration: a }], On(), a > 0 && typeof window < "u" && window.setTimeout(() => {
    $n(n);
  }, a), n;
}
const Wn = {
  success: (t) => pr("success", t),
  error: (t) => pr("error", t, 4200),
  info: (t) => pr("info", t),
  warning: (t) => pr("warning", t, 3600)
}, Si = {
  success: /* @__PURE__ */ e(pt, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e($t, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(rr, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(Sr, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" })
}, Mi = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Ii = ({ size: t, motion: r }) => {
  const [a, n] = O(() => [...Bt]), s = be(t, "sm"), o = ne(r);
  return ie(() => {
    const l = (i) => n(i);
    return ca.add(l), () => {
      ca.delete(l);
    };
  }, []), typeof document > "u" || a.length === 0 ? null : tt(
    /* @__PURE__ */ e(
      "div",
      {
        role: "status",
        "aria-live": "polite",
        className: "pointer-events-none fixed top-4 right-4 z-[10050] flex max-w-sm flex-col gap-2",
        children: a.map((l) => /* @__PURE__ */ c(
          "div",
          {
            "data-motion": o,
            className: m(
              "pointer-events-auto flex items-center gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
              "bg-[var(--abc-bg-elevated)] font-medium text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
              Mi[s],
              o !== "none" && "abc-animate-popover-in"
            ),
            children: [
              Si[l.tone],
              /* @__PURE__ */ e("span", { className: "flex-1 leading-relaxed break-words", children: l.message }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "关闭通知",
                  onClick: () => $n(l.id),
                  className: "rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
                }
              )
            ]
          },
          l.id
        ))
      }
    ),
    document.body
  );
}, ka = "abc_design_theme_v1", yr = "color-scheme", Fn = mn(null);
function Ya(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(yr), n = window.localStorage.getItem(ka), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, l = ["xs", "sm", "md", "lg"], i = ["none", "subtle", "smooth", "spring"], b = s.componentSize && l.includes(s.componentSize) ? s.componentSize : t.componentSize, u = s.motion && i.includes(s.motion) ? s.motion : t.motion ?? "smooth";
    return {
      mode: o,
      brand: s.brand ?? t.brand,
      customBrandColor: s.customBrandColor ?? t.customBrandColor,
      density: s.density ?? t.density,
      radius: s.radius ?? t.radius,
      fontScale: s.fontScale ?? t.fontScale ?? "md",
      visualMode: s.visualMode ?? t.visualMode ?? "default",
      componentSize: b,
      motion: u
    };
  } catch {
    return t;
  }
}
function Ei(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(yr) : window.localStorage.setItem(yr, t.mode), window.localStorage.setItem(ka, JSON.stringify(t));
    } catch {
    }
}
const $d = ({
  children: t,
  defaultTheme: r,
  defaultPageTransition: a = "fade-slide",
  watermarkText: n,
  defaultWatermarkEnabled: s = !1,
  persist: o = !0,
  toastAdapter: l,
  uploadAdapter: i,
  dictAdapter: b,
  permissionAdapter: u,
  captchaAdapter: x,
  iconRegistry: h = {}
}) => {
  const g = ce(
    () => ({ ...Ge, ...r }),
    [r]
  ), [d, f] = O(() => Ya(g, o)), [p, y] = O(
    () => Lt(d.mode)
  ), [S, v] = O(a), [N, E] = O(s);
  ie(() => {
    const j = Xe(d);
    y(j), Ei(d, o);
  }, [d, o]), ie(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const j = window.matchMedia("(prefers-color-scheme: dark)"), K = () => {
      if (d.mode === "system") {
        const re = Xe(d);
        y(re);
      }
    };
    return j.addEventListener("change", K), () => j.removeEventListener("change", K);
  }, [d]), ie(() => {
    if (!o || typeof window > "u") return;
    const j = (K) => {
      (K.key === ka || K.key === yr) && f(Ya(g, !0));
    };
    return window.addEventListener("storage", j), () => window.removeEventListener("storage", j);
  }, [o, g]);
  const _ = he(
    (j, K) => {
      _c(() => {
        f((re) => {
          const Q = { ...re, mode: j };
          return Xe(Q), Q;
        });
      }, K);
    },
    []
  ), T = he(
    (j) => {
      const re = Lt(d.mode) === "dark" ? "light" : "dark", Q = Lt("system");
      _(re === Q ? "system" : re, j);
    },
    [d.mode, _]
  ), k = he((j) => {
    f((K) => ({ ...K, brand: j, customBrandColor: void 0 }));
  }, []), w = he((j) => {
    f((K) => ({ ...K, customBrandColor: j }));
  }, []), C = he((j) => {
    f((K) => ({ ...K, density: j }));
  }, []), L = he((j) => {
    f((K) => ({ ...K, radius: j }));
  }, []), D = he((j) => {
    f((K) => ({ ...K, fontScale: j }));
  }, []), M = he((j) => {
    f((K) => ({ ...K, visualMode: j }));
  }, []), A = he((j) => {
    f((K) => ({ ...K, componentSize: j }));
  }, []), W = he((j) => {
    f((K) => ({ ...K, motion: j }));
  }, []), Y = he((j) => {
    f((K) => ({ ...K, ...j }));
  }, []), P = he(() => {
    f(g), v(a), E(s);
  }, [g, a, s]), $ = ce(
    () => ({
      theme: d,
      resolvedTheme: p,
      pageTransition: S,
      watermarkText: n,
      watermarkEnabled: N,
      setThemeMode: _,
      toggleTheme: T,
      setBrand: k,
      setCustomBrandColor: w,
      setDensity: C,
      setRadius: L,
      setFontScale: D,
      setVisualMode: M,
      setComponentSize: A,
      setMotion: W,
      updateTheme: Y,
      setPageTransition: v,
      setWatermarkEnabled: E,
      resetTheme: P,
      toast: l ?? Wn,
      uploadAdapter: i,
      dictAdapter: b,
      permissionAdapter: u,
      captchaAdapter: x,
      iconRegistry: h
    }),
    [
      d,
      p,
      S,
      n,
      N,
      _,
      T,
      k,
      w,
      C,
      L,
      D,
      M,
      A,
      W,
      Y,
      P,
      l,
      i,
      b,
      u,
      x,
      h
    ]
  );
  return /* @__PURE__ */ c(Fn.Provider, { value: $, children: [
    t,
    !l && /* @__PURE__ */ e(Ii, {}),
    /* @__PURE__ */ e(jn, {})
  ] });
};
function Ve() {
  const t = un(Fn);
  return t || {
    theme: Ge,
    resolvedTheme: Lt(Ge.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Xe({ ...Ge, mode: r });
    },
    toggleTheme: () => {
      const r = Lt(Ge.mode) === "dark" ? "light" : "dark";
      Xe({ ...Ge, mode: r });
    },
    setBrand: (r) => {
      Xe({ ...Ge, brand: r });
    },
    setCustomBrandColor: (r) => {
      Xe({ ...Ge, customBrandColor: r });
    },
    setDensity: (r) => {
      Xe({ ...Ge, density: r });
    },
    setRadius: (r) => {
      Xe({ ...Ge, radius: r });
    },
    setFontScale: (r) => {
      Xe({ ...Ge, fontScale: r });
    },
    setVisualMode: (r) => {
      Xe({ ...Ge, visualMode: r });
    },
    setComponentSize: (r) => {
      Xe({ ...Ge, componentSize: r });
    },
    setMotion: (r) => {
      Xe({ ...Ge, motion: r });
    },
    updateTheme: (r) => {
      Xe({ ...Ge, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Xe(Ge);
    },
    toast: Wn,
    iconRegistry: {}
  };
}
function be(t, r = "sm") {
  const { theme: a } = Ve();
  return t ?? a.componentSize ?? r;
}
function ne(t) {
  const { theme: r } = Ve();
  return t ?? r.motion ?? "smooth";
}
const Jt = {
  Activity: oc,
  AlertCircle: $t,
  AlertOctagon: sc,
  AlertTriangle: rr,
  BarChart2: nc,
  BarChart3: ac,
  Bell: rc,
  BellRing: tc,
  BookMarked: ec,
  Boxes: Qo,
  Building2: Jo,
  Calendar: ga,
  CalendarCheck: Zo,
  Camera: qo,
  Check: Ke,
  CheckCircle: Xo,
  CheckCircle2: pt,
  CheckSquare: Yo,
  CircleDollarSign: Go,
  Clock: hr,
  Coins: Vo,
  Compass: kn,
  Copy: va,
  Cpu: Uo,
  CreditCard: Ko,
  Database: Ho,
  Download: Nn,
  Edit: Fo,
  Edit3: ea,
  Eye: Wt,
  FileCheck: Wo,
  FileClock: $o,
  FileSpreadsheet: Oo,
  FileText: jo,
  Flame: Bo,
  Folder: Po,
  FolderGit2: Do,
  FolderOpen: zo,
  FolderPlus: Ro,
  FolderTree: Lo,
  Globe: Ao,
  Globe2: _o,
  Handshake: To,
  HardDrive: Eo,
  Headphones: Io,
  HelpCircle: Cr,
  History: Mo,
  Home: So,
  Image: wn,
  Info: Sr,
  Key: Co,
  KeyRound: ko,
  Layers: yn,
  LayoutDashboard: No,
  LayoutGrid: wo,
  LineChart: yo,
  Link2: xo,
  ListChecks: go,
  ListOrdered: vo,
  Lock: ho,
  MapPin: po,
  Megaphone: fo,
  Menu: xn,
  MessageCircle: mo,
  MessageSquare: uo,
  MessageSquareQuote: bo,
  MessageSquareText: lo,
  MessagesSquare: io,
  Minus: Tr,
  Monitor: gn,
  MoreHorizontal: ha,
  Network: co,
  Package: oo,
  Palette: vn,
  PanelLeft: so,
  PanelTop: no,
  Pause: ao,
  Phone: ro,
  PhoneCall: to,
  PieChart: eo,
  Play: hn,
  Plus: pa,
  PlusCircle: Qs,
  Radio: Js,
  Receipt: Zs,
  RefreshCw: Er,
  RotateCcw: kt,
  RotateCw: Ir,
  ScrollText: qs,
  Search: dt,
  Send: Xs,
  Server: Ys,
  Settings: Gs,
  Share: Vs,
  Share2: Us,
  Shield: Ks,
  ShieldAlert: pn,
  ShieldCheck: Hs,
  ShoppingBag: Fs,
  ShoppingCart: Ws,
  Sliders: $s,
  SlidersHorizontal: Qr,
  Smartphone: Os,
  Sparkles: Mr,
  Star: js,
  StarOff: Bs,
  Store: Ps,
  Tag: Ds,
  Tags: zs,
  Terminal: Rs,
  Ticket: Ls,
  Timer: As,
  Trash: _s,
  Trash2: Ot,
  TrendingUp: Ts,
  Unlock: Es,
  Upload: fn,
  User: Is,
  UserCheck: Ms,
  UserCog: Ss,
  Users: Cs,
  Video: ks,
  Wallet: Ns,
  Wrench: ws,
  X: Ue,
  XCircle: ys,
  Zap: xs
}, Gr = {
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
}, Xa = [
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
function Ti(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const Hn = {};
function Wd(t) {
  Object.assign(Hn, t);
}
const yt = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (r) {
    const h = r.toLowerCase();
    for (const g of Xa)
      if (g.keywords.some((d) => h.includes(d))) {
        const d = Jt[g.iconName];
        if (d)
          return /* @__PURE__ */ e(d, { size: a, strokeWidth: n, className: m("shrink-0", s) });
      }
  }
  const l = (t || "").replace(/^el-icon-/, "").trim(), i = l.replace(/^s-/, ""), b = Gr[l] ?? Gr[i] ?? Gr[t];
  let u = (o == null ? void 0 : o[l]) ?? Hn[l] ?? (b ? Jt[b] : void 0) ?? Jt[l] ?? (l ? Jt[Ti(l)] : void 0);
  if (!u && l) {
    const h = l.toLowerCase();
    for (const g of Xa)
      if (g.keywords.some((d) => h.includes(d))) {
        u = Jt[g.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(u ?? kn, { size: a, strokeWidth: n, className: m("shrink-0", s) });
}, Kn = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, _i = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, vt = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", et = Oe.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    prefix: o,
    prefixIcon: l,
    suffix: i,
    suffixIcon: b,
    allowClear: u,
    clearable: x,
    passwordToggle: h = !0,
    showPasswordLabel: g,
    hidePasswordLabel: d,
    showCount: f = !1,
    onClear: p,
    invalid: y = !1,
    id: S,
    type: v = "text",
    value: N,
    defaultValue: E,
    maxLength: _,
    onChange: T,
    disabled: k,
    readOnly: w,
    className: C,
    wrapperClassName: L,
    ...D
  }, M) => {
    const A = be(t, "sm"), W = ne(r), Y = $e(), P = S || Y, $ = le(null);
    Nr(M, () => $.current, []);
    const j = N !== void 0, [K, re] = O(
      () => E != null ? String(E) : ""
    ), [Q, Ce] = O(!1), U = v === "password" && h !== !1, V = U && Q ? "text" : v, J = (j ? String(N ?? "") : K).length, se = J > 0, R = !!((u ?? x) && se && !k && !w), me = !!(y || n), Pe = o ?? l, je = i ?? b, ae = (H) => {
      j || re(H.target.value), T == null || T(H);
    }, oe = he(
      (H) => {
        if (H.preventDefault(), H.stopPropagation(), k || w) return;
        j || re(""), p == null || p();
        const G = $.current;
        if (G && (G.value = "", G.focus()), T) {
          const we = G ?? { value: "" };
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
      [k, w, j, p, T]
    ), ue = (R ? 1 : 0) + (U ? 1 : 0) + (je ? 1 : 0), F = ue >= 3 ? "pr-20" : ue === 2 ? "pr-14" : ue === 1 ? "pr-9" : "pr-3", ee = /\bw-(?!full\b)\S+/.test(C || ""), de = /* @__PURE__ */ c(
      "div",
      {
        className: m(
          "relative flex items-center",
          !ee && "w-full",
          L
        ),
        children: [
          Pe && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-3 z-10 flex items-center text-[var(--abc-fg-muted)]", children: Pe }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: $,
              id: P,
              type: V,
              value: N,
              defaultValue: E,
              maxLength: _,
              onChange: ae,
              disabled: k,
              readOnly: w,
              "data-motion": W,
              "aria-invalid": me || void 0,
              className: m(
                vt,
                Kn[A],
                Pe ? "pl-9" : "pl-3",
                F,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                V === "number" && ue > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                me && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                k && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                C
              ),
              ...D
            }
          ),
          (R || U || je) && /* @__PURE__ */ c("div", { className: "absolute right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            R && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (H) => H.preventDefault(),
                onClick: oe,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
              }
            ),
            U && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: k,
                "data-testid": "password-toggle",
                "aria-label": Q ? d ?? "隐藏密码" : g ?? "显示密码",
                title: Q ? d ?? "隐藏密码" : g ?? "显示密码",
                onMouseDown: (H) => H.preventDefault(),
                onClick: (H) => {
                  H.preventDefault(), H.stopPropagation(), !k && Ce((G) => !G);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: Q ? /* @__PURE__ */ e(Cn, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Wt, { className: "h-3.5 w-3.5" })
              }
            ),
            je && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: je })
          ] })
        ]
      }
    );
    return !a && !n && !s && !f ? de : /* @__PURE__ */ c("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: P,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      de,
      (n || s || f) && /* @__PURE__ */ c("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        f && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: _ !== void 0 ? `${J}/${_}` : J
          }
        )
      ] })
    ] });
  }
);
et.displayName = "Input";
const ia = ({
  value: t,
  defaultValue: r,
  onChange: a,
  min: n,
  max: s,
  step: o = 1,
  size: l,
  motion: i,
  disabled: b = !1,
  placeholder: u,
  invalid: x = !1,
  className: h
}) => {
  const g = be(l, "sm"), d = ne(i), f = $e(), [p, y] = O(r ?? null), S = t !== void 0 ? t : p, v = (N) => {
    let E = N;
    E !== null && Number.isFinite(E) ? (n !== void 0 && (E = Math.max(n, E)), s !== void 0 && (E = Math.min(s, E))) : E = null, t === void 0 && y(E), a == null || a(E);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": d,
      className: m(
        "inline-flex w-full items-center overflow-hidden",
        vt,
        Kn[g],
        x && "border-[var(--abc-danger)]",
        b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
        h
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "减少数值",
            disabled: b || n !== void 0 && (S ?? 0) <= n,
            onClick: () => v((S ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(Tr, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: f,
            type: "number",
            value: S ?? "",
            min: n,
            max: s,
            step: o,
            disabled: b,
            placeholder: u,
            onChange: (N) => {
              const E = N.target.value;
              v(E === "" ? null : Number(E));
            },
            className: "h-full w-full min-w-0 flex-1 bg-transparent px-2.5 text-center font-mono tabular-nums focus:outline-none"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "增加数值",
            disabled: b || s !== void 0 && (S ?? 0) >= s,
            onClick: () => v((S ?? 0) + o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(pa, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Ar = Oe.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    showCount: o = !1,
    invalid: l = !1,
    id: i,
    value: b,
    defaultValue: u,
    maxLength: x,
    onChange: h,
    rows: g = 3,
    className: d,
    ...f
  }, p) => {
    const y = be(t, "sm"), S = ne(r), v = $e(), N = i || v, [E, _] = O(
      () => String(u ?? "").length
    ), T = b !== void 0 ? String(b ?? "").length : E, k = !!(l || n), C = /* @__PURE__ */ e(
      "textarea",
      {
        ref: p,
        id: N,
        rows: g,
        value: b,
        defaultValue: u,
        maxLength: x,
        onChange: (L) => {
          b === void 0 && _(L.target.value.length), h == null || h(L);
        },
        "data-motion": S,
        "aria-invalid": k || void 0,
        className: m(
          vt,
          _i[y],
          "leading-relaxed resize-y",
          k && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          d
        ),
        ...f
      }
    );
    return !a && !n && !s && !o ? C : /* @__PURE__ */ c("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: N,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      C,
      (n || s || o) && /* @__PURE__ */ c("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        o && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "textarea-count",
            className: "ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums",
            children: x !== void 0 ? `${T}/${x}` : T
          }
        )
      ] })
    ] });
  }
);
Ar.displayName = "Textarea";
const qa = [
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
], Ai = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], Li = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Ri = ({
  open: t,
  current: r,
  value: a,
  onClose: n,
  onSelect: s,
  onChange: o,
  placeholder: l = "点击选择菜单图标",
  clearable: i = !0,
  disabled: b = !1,
  size: u,
  motion: x,
  className: h
}) => {
  const g = be(u, "sm"), d = ne(x), [f, p] = O(!1), [y, S] = O(""), [v, N] = O("all"), E = typeof t == "boolean", _ = E ? t : f, T = a ?? r ?? "", k = () => {
    E ? n == null || n() : p(!1);
  }, w = (M) => {
    s == null || s(M), o == null || o(M), k();
  }, C = ce(() => {
    const M = y.trim();
    return qa.filter((A) => v !== "all" && A.category !== v ? !1 : M ? nt(`${A.label} ${A.name}`, M) : !0);
  }, [y, v]), L = ce(
    () => qa.find((M) => M.name.toLowerCase() === T.toLowerCase()),
    [T]
  ), D = /* @__PURE__ */ e(wt, { open: _, onClose: k, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ c("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        et,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: y,
          prefix: /* @__PURE__ */ e(dt, { className: "h-3.5 w-3.5" }),
          onChange: (M) => S(M.target.value)
        }
      ) }),
      T && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(yt, { name: T, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: T })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: Ai.map((M) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => N(M.id),
        className: m(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          v === M.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: M.label
      },
      M.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: C.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: C.map((M) => {
      const A = T === M.name;
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => w(M.name),
          className: m(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            A ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            A && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              yt,
              {
                name: M.name,
                size: 20,
                className: m(
                  "transition-transform group-hover:scale-110",
                  A ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: M.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: M.name })
          ]
        },
        M.name
      );
    }) }) : /* @__PURE__ */ c("div", { className: "py-10 text-center text-xs text-[var(--abc-fg-muted)]", children: [
      /* @__PURE__ */ c("p", { children: [
        "未找到匹配 “",
        y,
        "” 的预设图标"
      ] }),
      y.trim() && /* @__PURE__ */ c(
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
  return E ? D : /* @__PURE__ */ c(De, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: "button",
        tabIndex: b ? -1 : 0,
        "data-motion": d,
        onClick: () => !b && p(!0),
        onKeyDown: (M) => {
          !b && (M.key === "Enter" || M.key === " ") && (M.preventDefault(), p(!0));
        },
        className: m(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          Li[g],
          vt,
          b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          h
        ),
        children: [
          T ? /* @__PURE__ */ c("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(yt, { name: T, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: L ? `${L.label} (${T})` : T })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: l }),
          /* @__PURE__ */ c("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            i && T && !b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (M) => {
                  M.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    D
  ] });
};
async function zi(t) {
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
const Di = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, Pi = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, Bi = ({
  text: t,
  displayText: r,
  children: a,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: o = !0,
  successMessage: l,
  successText: i,
  tooltip: b,
  onCopy: u,
  size: x,
  motion: h,
  className: g
}) => {
  const d = be(x, "sm"), f = ne(h), { toast: p } = Ve(), [y, S] = O(!1), v = le(null), N = i ?? l ?? "已复制到剪贴板";
  ie(() => () => {
    v.current && clearTimeout(v.current);
  }, []);
  const E = he(
    async (k) => {
      k.stopPropagation(), k.preventDefault(), await zi(t) ? (S(!0), p.success(N), u == null || u(t), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        S(!1), v.current = null;
      }, 1500)) : p.error("复制失败，请手动复制");
    },
    [t, N, u, p]
  ), _ = b !== void 0 ? b : y ? N : "点击复制", T = y ? /* @__PURE__ */ e(
    Ke,
    {
      "data-testid": "copy-icon-check",
      className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]",
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ e(
    va,
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
      title: _,
      "aria-label": b || "复制",
      "data-motion": f,
      onClick: E,
      className: m(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        g
      ),
      children: T
    }
  ) : /* @__PURE__ */ c(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: _,
      "data-motion": f,
      onClick: E,
      onKeyDown: (k) => {
        (k.key === "Enter" || k.key === " ") && E(k);
      },
      className: m(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        Di[d],
        o && "font-mono tabular-nums",
        g
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && T
      ]
    }
  );
}, At = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = be(t, "sm"), l = ne(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": l,
      className: m(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        Pi[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, ji = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: l,
  motion: i,
  compact: b = !1,
  className: u
}) => {
  const x = be(l, "md"), h = ne(i), f = {
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
  }[b ? "sm" : x];
  return /* @__PURE__ */ c(
    "div",
    {
      "data-testid": "empty-state",
      "data-motion": h,
      className: m(
        "flex flex-col items-center justify-center text-center select-none",
        f.container,
        h !== "none" && "abc-animate-fade-in",
        u
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "empty-state-icon",
            className: m(
              "flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]",
              f.iconBox
            ),
            children: a ?? /* @__PURE__ */ e(cc, { className: f.iconSize })
          }
        ),
        t && /* @__PURE__ */ e(
          "h4",
          {
            "data-testid": "empty-state-title",
            className: m("mt-3 text-[var(--abc-fg)]", f.title),
            children: t
          }
        ),
        r && /* @__PURE__ */ e(
          "p",
          {
            "data-testid": "empty-state-description",
            className: m("max-w-sm leading-relaxed text-[var(--abc-fg-muted)]", f.desc),
            children: r
          }
        ),
        (n || s) && /* @__PURE__ */ e("div", { "data-testid": "empty-state-action", className: "mt-4 flex items-center justify-center gap-2", children: n ?? /* @__PURE__ */ e(
          _e,
          {
            variant: "secondary",
            size: f.btnSize,
            motion: h,
            icon: /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, Oi = {
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
}, $i = ({
  current: t,
  currentPage: r,
  page: a,
  pageSize: n,
  size: s,
  controlSize: o,
  motion: l,
  total: i,
  pageSizeOptions: b = [10, 20, 50, 100],
  onChange: u,
  onPageChange: x,
  onSizeChange: h,
  onPageSizeChange: g,
  showTotal: d = !0,
  showQuickJumper: f = !0,
  className: p
}) => {
  const y = t ?? r ?? a ?? 1, S = n ?? (typeof s == "number" ? s : void 0) ?? 10, v = be(
    o ?? (typeof s == "string" ? s : void 0),
    "sm"
  ), N = ne(l), E = Oi[v], _ = Math.max(1, Math.ceil(i / Math.max(1, S))), [T, k] = O(""), w = le(null);
  if (i <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": N,
        className: m(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          E.wrap,
          p
        ),
        children: /* @__PURE__ */ e("div", { children: d === !1 ? null : typeof d == "function" ? d(0) : /* @__PURE__ */ c("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const C = (A) => {
    const W = Math.min(Math.max(1, A), _);
    W !== y && (u == null || u(W, S), x == null || x(W));
  }, L = (A) => {
    u == null || u(1, A), h == null || h(A), g == null || g(A);
  }, D = () => {
    const A = T.trim();
    if (!A) {
      w.current = null;
      return;
    }
    if (A === w.current) return;
    const W = parseInt(A, 10);
    if (Number.isNaN(W)) {
      k(""), w.current = null;
      return;
    }
    const Y = Math.min(Math.max(1, W), _);
    w.current = A, k(String(Y)), C(Y);
  }, M = [];
  if (_ <= 7)
    for (let A = 1; A <= _; A++) M.push(A);
  else {
    M.push(1), y > 3 && M.push("...");
    const A = Math.max(2, y - 1), W = Math.min(_ - 1, y + 1);
    for (let Y = A; Y <= W; Y++) M.push(Y);
    y < _ - 2 && M.push("..."), M.push(_);
  }
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": N,
      className: m(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        E.wrap,
        p
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: d === !1 ? null : typeof d == "function" ? d(i) : /* @__PURE__ */ c("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: i }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "select",
            {
              "aria-label": "每页条数",
              value: S,
              onChange: (A) => L(Number(A.target.value)),
              className: m(
                "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none cursor-pointer",
                E.select
              ),
              children: b.map((A) => /* @__PURE__ */ c("option", { value: A, children: [
                A,
                " 条/页"
              ] }, A))
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: y <= 1,
              onClick: () => C(y - 1),
              className: m(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                E.navBtn
              ),
              children: /* @__PURE__ */ e(xa, { className: "h-3.5 w-3.5" })
            }
          ),
          M.map(
            (A, W) => A === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${W}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => C(A),
                className: m(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  E.pageBtn,
                  A === y ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: A
              },
              A
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: y >= _,
              onClick: () => C(y + 1),
              className: m(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                E.navBtn
              ),
              children: /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" })
            }
          ),
          f && /* @__PURE__ */ c(
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
                    value: T,
                    onChange: (A) => {
                      w.current = null, k(A.target.value);
                    },
                    onKeyDown: (A) => {
                      A.key === "Enter" && (A.preventDefault(), D());
                    },
                    onBlur: D,
                    className: m(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:outline-none",
                      E.input
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
}, He = ({
  variant: t = "text",
  animation: r = "pulse",
  motion: a,
  width: n,
  height: s,
  className: o,
  style: l,
  children: i,
  ...b
}) => {
  const u = ne(a), x = u === "none" ? "none" : r, h = {
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
      "data-motion": u,
      style: h,
      className: m(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && m("rounded-md", s === void 0 && "h-4"),
        x === "wave" && "abc-skeleton-wave skeleton-wave",
        x === "pulse" && "animate-pulse",
        o
      ),
      ...b,
      children: i
    }
  );
}, Fd = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ c(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-card",
    className: m(
      "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]",
      r
    ),
    ...a,
    children: [
      /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(He, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(He, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(He, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(He, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), Hd = ({
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
    className: m(
      "overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      s
    ),
    ...o,
    children: /* @__PURE__ */ c("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((l, i) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        He,
        {
          variant: "text",
          width: i === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, i)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((l, i) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((b, u) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        He,
        {
          variant: "text",
          width: `${Math.max(40, 85 - (i + u) % 4 * 15)}%`,
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-cell"
        }
      ) }, u)) }, i)) })
    ] })
  }
), Kd = ({
  height: t = 288,
  animation: r = "wave",
  className: a,
  style: n,
  ...s
}) => /* @__PURE__ */ c(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-chart",
    style: { ...n, height: typeof t == "number" ? `${t}px` : t },
    className: m(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      a
    ),
    ...s,
    children: [
      /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(He, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(He, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, l) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        He,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, l)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, l) => /* @__PURE__ */ e(He, { variant: "text", width: 36, height: 10, animation: r }, l)) })
    ]
  }
), Un = {
  neutral: {
    tag: "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)] border-[var(--abc-border)]",
    dot: "bg-[var(--abc-fg-muted)]"
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
function Wi(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in Un ? n : "neutral";
}
const zt = ({
  tone: t,
  status: r,
  color: a,
  text: n,
  label: s,
  dot: o = !0,
  pulse: l = !1,
  size: i,
  motion: b,
  className: u,
  children: x,
  ...h
}) => {
  const g = Wi(t, r, a), d = Un[g], f = n ?? s ?? x, p = be(i, "sm"), y = ne(b);
  return /* @__PURE__ */ c(
    "span",
    {
      "data-motion": y,
      className: m(
        "abc-motion-pop inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap",
        {
          xs: "px-1.5 py-0 text-[10px]",
          sm: "px-2 py-0.5 text-[11px]",
          md: "px-2.5 py-1 text-xs",
          lg: "px-3 py-1.5 text-sm"
        }[p],
        d.tag,
        u
      ),
      ...h,
      children: [
        o && /* @__PURE__ */ c("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
          l && /* @__PURE__ */ e(
            "span",
            {
              className: m(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                d.dot
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: m("relative inline-flex h-1.5 w-1.5 rounded-full", d.dot) })
        ] }),
        /* @__PURE__ */ e("span", { children: f })
      ]
    }
  );
}, Ud = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  size: s,
  motion: o,
  children: l,
  className: i
}) => {
  const b = be(s, "sm"), u = ne(o), x = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", h = a || t > 0, g = t > r ? `${r}+` : String(t), d = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, f = {
    xs: "h-4 min-w-4 px-1 text-[9px]",
    sm: "h-4.5 min-w-4.5 px-1.5 text-[10px]",
    md: "h-5 min-w-5 px-1.5 text-[11px]",
    lg: "h-6 min-w-6 px-2 text-xs"
  }, p = {
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
  return l ? /* @__PURE__ */ c("span", { "data-motion": u, className: m("relative inline-flex shrink-0", i), children: [
    l,
    h && (a ? /* @__PURE__ */ e(
      "span",
      {
        className: m(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          p[b],
          x
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: m(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          y[b],
          x
        ),
        children: g
      }
    ))
  ] }) : h ? a ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": u,
      className: m("abc-motion-pop inline-block rounded-full", d[b], x, i)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": u,
      className: m(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        f[b],
        x,
        i
      ),
      children: g
    }
  ) : null;
}, Fi = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, Hi = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = be(a, "sm"), l = ne(n), [i, b] = O(!1), u = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": l,
      className: m(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        Fi[o],
        s
      ),
      children: t && !i ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: r,
          onError: () => b(!0),
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ e("span", { children: u })
    }
  );
}, Ki = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Ui = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, Vi = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, Gi = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, wr = ({
  as: t = "div",
  title: r,
  subtitle: a,
  extra: n,
  footer: s,
  size: o,
  padding: l,
  variant: i = "default",
  cover: b,
  statusRibbon: u,
  loading: x = !1,
  motion: h,
  hoverable: g = !1,
  className: d,
  bodyClassName: f,
  children: p,
  ...y
}) => {
  const S = t, v = be(o, "md"), N = ne(h), E = l ?? v;
  return /* @__PURE__ */ c(
    S,
    {
      "data-motion": N,
      "data-size": v,
      className: m(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        Gi[i],
        g && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        d
      ),
      ...y,
      children: [
        b && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: b }),
        (r || n || u) && /* @__PURE__ */ c(
          "div",
          {
            className: m(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Ui[v]
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "min-w-0", children: [
                r && /* @__PURE__ */ e(
                  "h3",
                  {
                    className: m(
                      "font-semibold text-[var(--abc-fg)] leading-snug",
                      v === "xs" ? "text-xs" : v === "lg" ? "text-base" : "text-sm"
                    ),
                    children: r
                  }
                ),
                a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
              ] }),
              (n || u) && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
                u && /* @__PURE__ */ e(zt, { tone: u.tone ?? "primary", size: "xs", dot: !1, children: u.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: m(Ki[E], f), children: x ? /* @__PURE__ */ c("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(He, { width: "45%", height: 14, motion: N }),
          /* @__PURE__ */ e(He, { width: "90%", height: 12, motion: N }),
          /* @__PURE__ */ e(He, { width: "70%", height: 12, motion: N })
        ] }) : p }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: m(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              Vi[v]
            ),
            children: s
          }
        )
      ]
    }
  );
}, Yi = Oe.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-header",
      className: m("flex flex-col gap-1.5 p-6 border-b border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Yi.displayName = "CardHeader";
const Xi = Oe.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "h3",
    {
      ref: a,
      "data-slot": "card-title",
      className: m("font-semibold leading-none tracking-tight text-[var(--abc-fg)] text-base", t),
      ...r
    }
  )
);
Xi.displayName = "CardTitle";
const qi = Oe.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "p",
    {
      ref: a,
      "data-slot": "card-description",
      className: m("text-sm text-[var(--abc-fg-muted)] leading-relaxed", t),
      ...r
    }
  )
);
qi.displayName = "CardDescription";
const Zi = Oe.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-content",
      className: m("p-6 pt-0", t),
      ...r
    }
  )
);
Zi.displayName = "CardContent";
const Ji = Oe.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-footer",
      className: m("flex items-center p-6 pt-0 border-t border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Ji.displayName = "CardFooter";
const Vd = ({
  orientation: t = "horizontal",
  label: r,
  className: a,
  ...n
}) => t === "vertical" ? /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    "aria-orientation": "vertical",
    className: m("mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle", a),
    ...n
  }
) : r ? /* @__PURE__ */ c(
  "div",
  {
    role: "separator",
    className: m("my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]", a),
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
    className: m("my-3 h-px w-full bg-[var(--abc-border)]", a),
    ...n
  }
), Qi = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, el = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, Gd = ({
  direction: t = "horizontal",
  size: r,
  wrap: a = !1,
  align: n = "center",
  className: s,
  children: o,
  ...l
}) => {
  const i = be(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: m(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : el[n],
        Qi[i],
        a && "flex-wrap",
        s
      ),
      ...l,
      children: o
    }
  );
}, tl = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, Yd = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: o,
  ...l
}) => {
  const i = be(r, "md"), b = ne(a), u = le(null), [x, h] = O({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ c(
    "div",
    {
      ref: u,
      "data-motion": b,
      "data-size": i,
      onMouseMove: (g) => {
        var f;
        const d = (f = u.current) == null ? void 0 : f.getBoundingClientRect();
        d && h({ x: g.clientX - d.left, y: g.clientY - d.top, active: !0 });
      },
      onMouseLeave: () => h((g) => ({ ...g, active: !1 })),
      className: m(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        tl[i],
        n && "abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md",
        s
      ),
      ...l,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": "true",
            className: m(
              "pointer-events-none absolute -inset-px",
              b !== "none" && "transition-opacity duration-[var(--abc-motion-base)]"
            ),
            style: {
              opacity: x.active ? 1 : 0,
              background: `radial-gradient(360px circle at ${x.x}px ${x.y}px, ${t}, transparent 75%)`
            }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: o })
      ]
    }
  );
}, Za = ({ duration: t = 8, motion: r, className: a }) => {
  const n = ne(r);
  return n === "none" ? null : /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": n,
      className: m(
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
}, Ja = ({
  motion: t,
  className: r
}) => {
  const a = ne(t), n = a === "none";
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": a,
      className: m("pointer-events-none absolute inset-0 overflow-hidden", r),
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
}, Ht = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, nr = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Lr = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Vn = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, Ca = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, Xd = ({
  title: t,
  value: r,
  prefix: a,
  suffix: n,
  trend: s,
  sparkline: o,
  icon: l,
  footer: i,
  loading: b = !1,
  hoverable: u = !0,
  size: x,
  motion: h,
  className: g,
  ...d
}) => {
  const f = be(x, "md"), p = ne(h), y = $e().replace(/:/g, ""), S = Oe.useMemo(() => {
    if (!o || o.length < 2) return null;
    const N = Math.min(...o), _ = Math.max(...o) - N || 1, T = 120, k = 32, C = `M ${o.map((D, M) => {
      const A = M / (o.length - 1) * T, W = k - 4 - (D - N) / _ * (k - 8);
      return `${A.toFixed(1)},${W.toFixed(1)}`;
    }).join(" L ")}`, L = `${C} L ${T},${k} L 0,${k} Z`;
    return { linePath: C, areaPath: L, width: T, height: k };
  }, [o]), v = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": p,
      "data-size": f,
      className: m(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ht[f],
        u && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        g
      ),
      ...d,
      children: b ? /* @__PURE__ */ c("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(He, { width: "45%", height: 13, motion: p }),
          /* @__PURE__ */ e(He, { variant: "rounded", width: 30, height: 30, motion: p })
        ] }),
        /* @__PURE__ */ e(He, { width: "60%", height: 26, motion: p }),
        /* @__PURE__ */ e(He, { width: "80%", height: 18, motion: p })
      ] }) : /* @__PURE__ */ c(De, { children: [
        /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          l && /* @__PURE__ */ e(
            "span",
            {
              className: m(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                Ca[f]
              ),
              children: l
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: Vn[f], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || S) && /* @__PURE__ */ c("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ c(
              "span",
              {
                className: m(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  v
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(ic, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(lc, { className: "h-3 w-3" }) : /* @__PURE__ */ e(Tr, { className: "h-3 w-3" }),
                  s.value
                ]
              }
            ),
            s.label && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: s.label })
          ] }),
          S && /* @__PURE__ */ c(
            "svg",
            {
              viewBox: `0 0 ${S.width} ${S.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ c("linearGradient", { id: `abc-spark-${y}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
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
        i && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: i })
      ] })
    }
  );
}, Gn = mn(null), rl = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, qd = ({
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: n,
  disabled: s = !1,
  size: o,
  motion: l,
  columns: i = 2,
  className: b,
  children: u
}) => {
  const x = $e(), h = be(o, "md"), g = ne(l), [d, f] = Je({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), p = (y) => {
    if (!s)
      if (t) {
        const S = Array.isArray(d) ? d : [], N = S.includes(y) ? S.filter((E) => E !== y) : [...S, y];
        f(N);
      } else
        f(y);
  };
  return /* @__PURE__ */ e(
    Gn.Provider,
    {
      value: {
        multiple: t,
        value: d,
        disabled: s,
        size: h,
        motion: g,
        name: x,
        toggleValue: p
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          role: t ? "group" : "radiogroup",
          "data-motion": g,
          className: m("grid gap-3", rl[i], b),
          children: u
        }
      )
    }
  );
}, Zd = ({
  value: t,
  title: r,
  description: a,
  avatar: n,
  icon: s,
  extra: o,
  checked: l,
  defaultChecked: i = !1,
  onChange: b,
  disabled: u = !1,
  size: x,
  motion: h,
  className: g,
  children: d
}) => {
  const f = un(Gn), p = be(x ?? (f == null ? void 0 : f.size), "md"), y = ne(h ?? (f == null ? void 0 : f.motion)), S = !!(u || f != null && f.disabled), v = !!(f && t !== void 0), N = f && !f.multiple ? "radio" : "checkbox", [E, _] = Je({
    value: l,
    defaultValue: i,
    onChange: b
  }), T = v ? f.multiple ? Array.isArray(f.value) && f.value.includes(t) : f.value === t : E, k = (w) => {
    S || (v ? f.toggleValue(t) : _(w));
  };
  return /* @__PURE__ */ c(
    "label",
    {
      "data-motion": y,
      "data-size": p,
      "data-checked": T ? "true" : "false",
      className: m(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        Ht[p],
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
            type: N,
            name: f == null ? void 0 : f.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!T,
            disabled: S,
            onChange: (w) => k(w.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: m(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              Ca[p]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: m("font-semibold text-[var(--abc-fg)]", nr[p]), children: r }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          a && /* @__PURE__ */ e("p", { className: m("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Lr[p]), children: a }),
          d && /* @__PURE__ */ e("div", { className: "mt-2", children: d })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: m(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              T ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(Ke, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Jd = ({
  title: t,
  description: r,
  icon: a,
  tags: n,
  extra: s,
  href: o,
  target: l,
  disabled: i = !1,
  onClick: b,
  size: u,
  motion: x,
  className: h
}) => {
  const g = be(u, "md"), d = ne(x), f = !!((o || b) && !i), p = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": d,
      "data-size": g,
      className: m(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ht[g],
        f && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
        i && "opacity-55 cursor-not-allowed",
        h
      ),
      children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              a && /* @__PURE__ */ e(
                "span",
                {
                  className: m(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    Ca[g]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: m("min-w-0 truncate", nr[g]), children: o && !i ? /* @__PURE__ */ e(
                "a",
                {
                  href: o,
                  target: l,
                  rel: l === "_blank" ? "noreferrer" : void 0,
                  onClick: () => b == null ? void 0 : b(),
                  className: m(p, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : b && !i ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: b,
                  className: m(p, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          r && /* @__PURE__ */ e("p", { className: m("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", Lr[g]), children: r })
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
}, al = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, Qd = ({
  title: t,
  subtitle: r,
  icon: a,
  extra: n,
  defaultOpen: s = !0,
  open: o,
  onOpenChange: l,
  size: i,
  motion: b,
  className: u,
  bodyClassName: x,
  children: h
}) => {
  const g = be(i, "md"), d = ne(b), f = $e(), [p, y] = Je({
    value: o,
    defaultValue: s,
    onChange: l
  });
  return /* @__PURE__ */ c(
    "section",
    {
      "data-motion": d,
      "data-size": g,
      className: m(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        u
      ),
      children: [
        /* @__PURE__ */ c("div", { className: m("flex items-center justify-between gap-3", al[g]), children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              "aria-expanded": p,
              "aria-controls": f,
              onClick: () => y(!p),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  ct,
                  {
                    className: m(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      p ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: a }),
                /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: m("truncate font-semibold text-[var(--abc-fg)]", nr[g]), children: t }),
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
        /* @__PURE__ */ e("div", { id: f, className: "abc-collapse-grid", "data-open": p, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ e(
          "div",
          {
            className: m(
              "border-t border-[var(--abc-border)]",
              Ht[g],
              x
            ),
            children: h
          }
        ) }) })
      ]
    }
  );
}, eb = ({
  tier: t,
  price: r,
  period: a = "/ 月",
  description: n,
  features: s,
  recommended: o = !1,
  badge: l = "推荐方案",
  ctaText: i = "选择此方案",
  disabled: b = !1,
  loading: u = !1,
  onSelect: x,
  size: h,
  motion: g,
  className: d
}) => {
  const f = be(h, "md"), p = ne(g);
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": p,
      "data-size": f,
      className: m(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        Ht[f],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        d
      ),
      children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: m("font-bold text-[var(--abc-fg)]", nr[f]), children: t }),
            o && l && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(Mr, { className: "h-2.5 w-2.5" }),
              l
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: m("mt-1.5 text-[var(--abc-fg-muted)]", Lr[f]), children: n }),
          /* @__PURE__ */ c("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: m("font-extrabold text-[var(--abc-fg)]", Vn[f]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((y, S) => {
            const v = typeof y == "string" ? { text: y, included: !0 } : y, N = v.included !== !1;
            return /* @__PURE__ */ c(
              "li",
              {
                className: m(
                  "flex items-start gap-2 text-xs",
                  N ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  N ? /* @__PURE__ */ e(Ke, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(Ue, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: v.text })
                ]
              },
              S
            );
          }) })
        ] }),
        x && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          _e,
          {
            variant: o ? "primary" : "secondary",
            size: f,
            motion: p,
            block: !0,
            disabled: b,
            loading: u,
            onClick: x,
            children: i
          }
        ) })
      ]
    }
  );
}, nl = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, tb = ({
  columns: t = 3,
  gap: r,
  className: a,
  children: n,
  ...s
}) => {
  const o = be(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: m(
        "grid auto-rows-[minmax(148px,auto)]",
        nl[t],
        sl[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, sl = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, rb = ({
  colSpan: t = 1,
  rowSpan: r = 1,
  eyebrow: a,
  title: n,
  description: s,
  icon: o,
  graphic: l,
  footer: i,
  hoverable: b = !0,
  size: u,
  motion: x,
  className: h,
  children: g,
  ...d
}) => {
  const f = be(u, "md"), p = ne(x), y = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", S = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": p,
      "data-size": f,
      className: m(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ht[f],
        y,
        S,
        b && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        h
      ),
      ...d,
      children: [
        /* @__PURE__ */ c("div", { children: [
          (a || o) && /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: m("font-bold text-[var(--abc-fg)]", nr[f]), children: n }),
          s && /* @__PURE__ */ e("p", { className: m("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Lr[f]), children: s })
        ] }),
        l && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: l }),
        g,
        i && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: i })
      ]
    }
  );
}, ol = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ab = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const o = be(a, "sm"), l = ne(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": l,
      className: m("abc-breadcrumb", ol[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((i, b) => {
        const u = b === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ c(
          "a",
          {
            href: i.href ?? "#",
            "aria-current": u ? "page" : void 0,
            onClick: (x) => {
              var h;
              (!i.href || i.href === "#" || i.onClick) && x.preventDefault(), u || (h = i.onClick) == null || h.call(i, x);
            },
            className: m(
              "abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              u ? "font-semibold text-[var(--abc-fg)] cursor-default no-underline" : "text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer"
            ),
            children: [
              i.icon && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: i.icon }),
              /* @__PURE__ */ e("span", { children: i.label })
            ]
          }
        ) }, i.key ?? b);
      }) })
    }
  );
}, cl = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, il = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, nb = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: l,
  className: i
}) => {
  const b = n === "vertical", u = be(s, "sm"), x = ne(o);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": x,
      className: m(
        "m-0 list-none p-0",
        b ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        i
      ),
      children: t.map((h, g) => {
        const d = h.status ?? (g < r ? "finish" : g === r ? a : "wait"), f = !!(l && !h.disabled), p = g === t.length - 1, y = d === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : d === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : d === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ c(
          "li",
          {
            className: m(
              "relative flex min-w-0",
              b ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: !f,
                  onClick: () => f && (l == null ? void 0 : l(g)),
                  className: m(
                    "abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]",
                    f ? "cursor-pointer" : "cursor-default"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: m(
                          "abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors",
                          cl[u],
                          y
                        ),
                        children: h.icon ? h.icon : d === "finish" ? /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5" }) : d === "error" ? /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }) : g + 1
                      }
                    ),
                    /* @__PURE__ */ c("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: m(
                            "block font-semibold",
                            il[u],
                            d === "wait" ? "text-[var(--abc-fg-muted)]" : d === "error" ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg)]"
                          ),
                          children: h.title
                        }
                      ),
                      h.description && /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: h.description })
                    ] })
                  ]
                }
              ),
              !p && !b && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: m(
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
}, qe = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: l
}) => {
  const i = ne(s), [b, u] = O(!1), [x, h] = O(!1), g = $e(), d = le(null), f = le(null), p = le(null), y = le(null), S = he(() => {
    typeof window > "u" || (p.current !== null && (window.clearTimeout(p.current), p.current = null), y.current !== null && (window.clearTimeout(y.current), y.current = null));
  }, []);
  ie(() => () => S(), [S]);
  const v = he(
    (M = !1) => {
      a || !t || (S(), h(!1), M || n <= 0 || typeof window > "u" ? u(!0) : p.current = window.setTimeout(() => {
        u(!0), p.current = null;
      }, n));
    },
    [a, t, n, S]
  ), N = he(() => {
    if (S(), typeof window > "u") {
      u(!1);
      return;
    }
    y.current = window.setTimeout(() => {
      u(!1), y.current = null;
    }, 60);
  }, [S]), E = he(() => {
    S(), h(!0), u(!1);
  }, [S]), { isMounted: _, isVisible: T } = Ct(
    b && !a && !!t,
    i === "none" || x ? 0 : 100
  ), { style: k, actualSide: w, arrowOffset: C, portalContainer: L } = ar({
    open: _,
    triggerRef: d,
    floatingRef: f,
    placement: r,
    offset: 8
  });
  if (ie(() => {
    if (!b) return;
    const M = (A) => {
      A.key === "Escape" && E();
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [b, E]), !t || a) return /* @__PURE__ */ e(De, { children: o });
  const D = w === "top" ? { left: `${C}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "bottom" ? { left: `${C}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "left" ? { top: `${C}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${C}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ c(De, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: d,
        "data-motion": i,
        "aria-describedby": b ? g : void 0,
        onMouseEnter: () => v(!1),
        onMouseLeave: N,
        onFocus: () => v(!0),
        onBlur: E,
        onPointerDown: E,
        className: m("inline-flex items-center", l),
        children: o
      }
    ),
    _ && L && tt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: f,
          id: g,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": i,
          "data-placement": w,
          style: k,
          className: m(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            i !== "none" && (T ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
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
      L
    )
  ] });
}, jt = ({
  items: t = [],
  content: r,
  align: a,
  placement: n,
  trigger: s = "click",
  open: o,
  defaultOpen: l = !1,
  onOpenChange: i,
  motion: b,
  children: u,
  className: x,
  panelClassName: h
}) => {
  const g = ne(b), [d, f] = Je({
    value: o,
    defaultValue: l,
    onChange: i
  }), { isMounted: p, isVisible: y } = Ct(d, g === "none" ? 0 : 140), S = le(null), v = le(null), N = le(null), E = $e(), _ = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: T, actualSide: k, portalContainer: w } = ar({
    open: p,
    triggerRef: S,
    floatingRef: v,
    placement: _,
    offset: 6
  }), C = he(() => {
    N.current !== null && typeof window < "u" && (window.clearTimeout(N.current), N.current = null);
  }, []);
  ie(() => () => C(), [C]);
  const L = he(() => {
    s === "hover" && (C(), f(!0));
  }, [s, C, f]), D = he(() => {
    s === "hover" && (C(), typeof window < "u" && (N.current = window.setTimeout(() => {
      f(!1), N.current = null;
    }, 140)));
  }, [s, C, f]), M = he(($) => {
    var Q;
    const j = v.current;
    if (!j) return;
    const K = Array.from(
      j.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (K.length === 0) return;
    const re = ($ % K.length + K.length) % K.length;
    (Q = K[re]) == null || Q.focus();
  }, []);
  ie(() => {
    if (!d) return;
    const $ = (K) => {
      var Q, Ce;
      const re = K.target;
      (Q = S.current) != null && Q.contains(re) || (Ce = v.current) != null && Ce.contains(re) || f(!1);
    }, j = (K) => {
      var re;
      if (K.key === "Escape") {
        K.preventDefault(), K.stopPropagation(), f(!1);
        const Q = (re = S.current) == null ? void 0 : re.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        Q == null || Q.focus();
      }
    };
    return document.addEventListener("mousedown", $), document.addEventListener("keydown", j, !0), () => {
      document.removeEventListener("mousedown", $), document.removeEventListener("keydown", j, !0);
    };
  }, [d, f]);
  const A = !r, W = ($) => {
    $.key === "ArrowDown" ? ($.preventDefault(), f(!0), A && typeof window < "u" && window.requestAnimationFrame(() => M(0))) : ($.key === "Enter" || $.key === " ") && $.target === $.currentTarget && ($.preventDefault(), f(!d));
  }, Y = ($) => {
    if (!A) return;
    const j = v.current;
    if (!j) return;
    const K = Array.from(
      j.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (K.length === 0) return;
    const re = K.indexOf(document.activeElement);
    $.key === "ArrowDown" ? ($.preventDefault(), M(re < 0 ? 0 : re + 1)) : $.key === "ArrowUp" ? ($.preventDefault(), M(re <= 0 ? K.length - 1 : re - 1)) : $.key === "Home" ? ($.preventDefault(), M(0)) : $.key === "End" && ($.preventDefault(), M(K.length - 1));
  }, P = s === "hover" ? k === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : k === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : k === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ c(De, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: S,
        "data-motion": g,
        onMouseEnter: L,
        onMouseLeave: D,
        className: m("inline-flex", x),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": d,
            "aria-controls": d ? E : void 0,
            "aria-haspopup": A ? "menu" : void 0,
            onClick: () => f(!d),
            onKeyDown: W,
            className: "inline-flex cursor-pointer items-center",
            children: u
          }
        )
      }
    ),
    p && w && tt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: v,
          id: E,
          role: A ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": g,
          "data-placement": k,
          style: T,
          onMouseEnter: L,
          onMouseLeave: D,
          onKeyDown: Y,
          className: m(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            P,
            g !== "none" && (y ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            h
          ),
          children: r || t.map(
            ($) => $.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, $.key) : /* @__PURE__ */ c(Oe.Fragment, { children: [
              $.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: $.disabled,
                  onClick: () => {
                    var j;
                    $.disabled || ((j = $.onClick) == null || j.call($), f(!1));
                  },
                  className: m(
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
}, Yn = ({
  title: t,
  content: r,
  align: a,
  placement: n,
  panelClassName: s,
  ...o
}) => {
  const l = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    jt,
    {
      ...o,
      placement: n ?? (l && l === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: m(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, ll = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, la = ({
  label: t,
  htmlFor: r,
  required: a = !1,
  tooltip: n,
  error: s,
  helperText: o,
  extra: l,
  layout: i = "vertical",
  size: b,
  motion: u,
  className: x,
  children: h
}) => {
  const g = be(b, "sm"), d = ne(u);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": d,
      className: m(
        i === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        x
      ),
      children: [
        (t || l) && /* @__PURE__ */ c(
          "div",
          {
            className: m(
              "flex items-center justify-between gap-2",
              i === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ c(
                "label",
                {
                  htmlFor: r,
                  className: m(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    ll[g]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(qe, { content: n, children: /* @__PURE__ */ e(Cr, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
                  ]
                }
              ),
              l && /* @__PURE__ */ e("div", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
          h,
          s ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] font-medium text-[var(--abc-danger)]", children: s }) : o && /* @__PURE__ */ e("p", { className: "mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: o })
        ] })
      ]
    }
  );
}, dl = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, bl = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Nt = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  onBlur: s,
  label: o,
  error: l,
  helperText: i,
  id: b,
  name: u,
  title: x,
  placeholder: h = "请选择",
  multiple: g = !1,
  searchable: d = !1,
  allowClear: f,
  clearable: p,
  disabled: y = !1,
  invalid: S = !1,
  size: v,
  motion: N,
  className: E
}) => {
  var ue;
  const _ = be(v, "sm"), T = ne(N), k = $e(), w = b || k, [C, L] = Je({
    value: r,
    defaultValue: a ?? (g ? [] : ""),
    onChange: n
  }), [D, M] = O(!1), [A, W] = O(""), [Y, P] = O(0), { isMounted: $, isVisible: j } = Ct(D, T === "none" ? 0 : 140), K = le(null), re = le(null), Q = le(null), Ce = le(null), B = !!(f ?? p), U = !!(S || l), { style: V, actualSide: X, portalContainer: J } = ar({
    open: $,
    triggerRef: re,
    floatingRef: Q,
    placement: "bottomLeft",
    offset: 4,
    matchWidth: !0
  });
  ie(() => {
    if (!D) {
      W("");
      return;
    }
    const F = (de) => {
      var G, we;
      const H = de.target;
      (G = K.current) != null && G.contains(H) || (we = Q.current) != null && we.contains(H) || M(!1);
    }, ee = (de) => {
      var H;
      de.key === "Escape" && (de.preventDefault(), de.stopPropagation(), M(!1), (H = re.current) == null || H.focus());
    };
    return document.addEventListener("mousedown", F), document.addEventListener("keydown", ee, !0), () => {
      document.removeEventListener("mousedown", F), document.removeEventListener("keydown", ee, !0);
    };
  }, [D]);
  const se = ce(() => {
    const F = A.trim();
    return F ? t.filter(
      (ee) => nt(ee.label, F) || String(ee.value).toLowerCase().includes(F.toLowerCase())
    ) : t;
  }, [t, A]), R = ce(() => g ? Array.isArray(C) ? C : C != null && C !== "" ? [C] : [] : C != null && C !== "" ? [C] : [], [g, C]), me = ce(() => R.map((F) => {
    const ee = t.find((de) => String(de.value) === String(F));
    return { value: F, label: (ee == null ? void 0 : ee.label) ?? String(F) };
  }), [t, R]), Pe = () => {
    const F = se.findIndex(
      (ee) => !ee.disabled && R.some((de) => String(de) === String(ee.value))
    );
    if (F >= 0)
      P(F);
    else {
      const ee = se.findIndex((de) => !de.disabled);
      P(ee >= 0 ? ee : 0);
    }
    M(!0);
  }, je = (F) => {
    var de;
    if (se.length === 0) return;
    let ee = Y;
    for (let H = 0; H < se.length; H++)
      if (ee = (ee + F + se.length) % se.length, !((de = se[ee]) != null && de.disabled)) {
        P(ee);
        return;
      }
  }, ae = (F) => {
    var ee;
    if (!F.disabled)
      if (g) {
        const H = R.some((G) => String(G) === String(F.value)) ? R.filter((G) => String(G) !== String(F.value)) : [...R, F.value];
        L(H);
      } else
        L(F.value), M(!1), (ee = re.current) == null || ee.focus();
  }, oe = (F) => {
    if (!y) {
      if (F.key === "Escape") {
        F.preventDefault(), F.stopPropagation(), M(!1);
        return;
      }
      if (F.key === "ArrowDown") {
        F.preventDefault(), D ? je(1) : Pe();
        return;
      }
      if (F.key === "ArrowUp") {
        F.preventDefault(), D ? je(-1) : Pe();
        return;
      }
      if (F.key === "Enter" || F.key === " " && F.target !== Ce.current)
        if (F.preventDefault(), !D)
          Pe();
        else {
          const ee = se[Y];
          ee && !ee.disabled && ae(ee);
        }
    }
  };
  return /* @__PURE__ */ c("div", { ref: K, className: "relative min-w-0 w-full", children: [
    o && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: w,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: o
      }
    ),
    u && /* @__PURE__ */ e(
      "input",
      {
        type: "hidden",
        name: u,
        value: g ? R.join(",") : String(R[0] ?? "")
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        ref: re,
        id: w,
        title: x,
        role: "combobox",
        "aria-expanded": D,
        "aria-haspopup": "listbox",
        "aria-controls": `${w}-listbox`,
        "aria-activedescendant": D ? `${w}-opt-${Y}` : void 0,
        "aria-disabled": y || void 0,
        tabIndex: y ? -1 : 0,
        onBlur: (F) => {
          var de;
          const ee = F.relatedTarget;
          ee && ((de = Q.current) != null && de.contains(ee)) || s == null || s(F);
        },
        onClick: () => {
          y || (D ? M(!1) : Pe());
        },
        onKeyDown: oe,
        "data-motion": T,
        className: m(
          "flex w-full items-center justify-between gap-1.5 px-2.5 py-1 cursor-pointer select-none abc-motion-control",
          vt,
          g ? bl[_] : dl[_],
          D && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
          U && "border-[var(--abc-danger)]",
          y && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          E
        ),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: me.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: h }) : g ? me.map((F) => /* @__PURE__ */ c(
            "span",
            {
              "data-testid": "select-tag",
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
              children: [
                /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: F.label }),
                !y && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `移除 ${F.label}`,
                    onClick: (ee) => {
                      ee.stopPropagation(), L(R.filter((de) => String(de) !== String(F.value)));
                    },
                    className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                    children: /* @__PURE__ */ e(Ue, { className: "h-2.5 w-2.5" })
                  }
                )
              ]
            },
            String(F.value)
          )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (ue = me[0]) == null ? void 0 : ue.label }) }),
          /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            B && me.length > 0 && !y && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "data-testid": "select-clear",
                "aria-label": "清空",
                onClick: (F) => {
                  F.stopPropagation(), L(g ? [] : "");
                },
                className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ e(
              ct,
              {
                className: m("h-3.5 w-3.5 transition-transform duration-150", D && "rotate-180")
              }
            )
          ] })
        ]
      }
    ),
    $ && J && tt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: Q,
          id: `${w}-listbox`,
          role: "listbox",
          "data-abc-floating": "",
          "data-motion": T,
          "data-placement": X,
          "aria-multiselectable": g || void 0,
          style: V,
          className: m(
            "z-[1300] min-w-[160px] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            j ? "abc-animate-popover-in" : "abc-animate-popover-out"
          ),
          children: [
            d && /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
              /* @__PURE__ */ e(dt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: Ce,
                  type: "text",
                  autoFocus: !0,
                  "data-testid": "select-search-input",
                  value: A,
                  onClick: (F) => F.stopPropagation(),
                  onKeyDown: oe,
                  onChange: (F) => {
                    const ee = F.target.value;
                    W(ee);
                    const H = (ee.trim() ? t.filter(
                      (G) => nt(G.label, ee) || String(G.value).toLowerCase().includes(ee.toLowerCase())
                    ) : t).findIndex((G) => !G.disabled);
                    P(H >= 0 ? H : 0);
                  },
                  placeholder: "搜索或输入拼音首字母...",
                  className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "max-h-56 overflow-y-auto p-1", children: se.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : se.map((F, ee) => {
              const de = R.some((G) => String(G) === String(F.value)), H = ee === Y;
              return /* @__PURE__ */ c(
                "button",
                {
                  id: `${w}-opt-${ee}`,
                  type: "button",
                  role: "option",
                  "aria-selected": de,
                  disabled: F.disabled,
                  onMouseEnter: () => {
                    F.disabled || P(ee);
                  },
                  onClick: (G) => {
                    G.stopPropagation(), ae(F);
                  },
                  className: m(
                    "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                    de ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : H && !F.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    F.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "truncate", children: F.label }),
                      F.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: F.description })
                    ] }),
                    de && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 shrink-0" })
                  ]
                },
                String(F.value)
              );
            }) })
          ]
        }
      ),
      J
    ),
    l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
    i && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: i })
  ] });
}, Qa = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, en = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, ul = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, tr = Oe.forwardRef(
  ({
    id: t,
    checked: r,
    defaultChecked: a = !1,
    indeterminate: n = !1,
    onChange: s,
    disabled: o = !1,
    size: l,
    motion: i,
    label: b,
    description: u,
    className: x,
    ...h
  }, g) => {
    const d = be(l, "sm"), f = ne(i), p = $e(), y = t || p, S = le(null);
    Nr(g, () => S.current, []);
    const [v, N] = Je({
      value: r,
      defaultValue: a
    });
    ie(() => {
      S.current && (S.current.indeterminate = !!n);
    }, [n]);
    const E = !!(b || u);
    return /* @__PURE__ */ c(
      "label",
      {
        htmlFor: y,
        "data-motion": f,
        className: m(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          ul[d],
          E ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          x
        ),
        children: [
          /* @__PURE__ */ c(
            "span",
            {
              className: m(
                "relative inline-flex shrink-0 items-center justify-center",
                Qa[d],
                E && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...h,
                    ref: S,
                    id: y,
                    type: "checkbox",
                    checked: v,
                    disabled: o,
                    onChange: (_) => {
                      if (o) return;
                      const T = _.target.checked;
                      N(T), s == null || s(T, _);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: m(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      Qa[d],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      v || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(Tr, { className: m(en[d], "stroke-[2.5] abc-motion-pop") }) : v && /* @__PURE__ */ e(Ke, { className: m(en[d], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          E && /* @__PURE__ */ c("span", { className: "flex flex-col", children: [
            b && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: b }),
            u && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: u })
          ] })
        ]
      }
    );
  }
);
tr.displayName = "Checkbox";
const ml = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, fl = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, pl = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-3.5 w-3.5 translate-x-0.5",
  md: "h-4.5 w-4.5 translate-x-0.5",
  lg: "h-5.5 w-5.5 translate-x-0.5"
}, at = ({
  checked: t,
  defaultChecked: r = !1,
  onChange: a,
  disabled: n = !1,
  loading: s = !1,
  size: o,
  motion: l,
  checkedLabel: i,
  uncheckedLabel: b,
  checkedChildren: u,
  unCheckedChildren: x,
  ariaLabel: h,
  className: g
}) => {
  const f = be(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), p = ne(l), [y, S] = Je({
    value: t,
    defaultValue: r,
    onChange: a
  }), v = !!(n || s), N = i ?? u, E = b ?? x;
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": y,
      "aria-label": h,
      disabled: v,
      "data-motion": p,
      onClick: () => {
        v || S(!y);
      },
      className: m(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        ml[f],
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
            className: m(
              "pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform",
              y ? fl[f] : pl[f]
            ),
            children: s && /* @__PURE__ */ e(kr, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (N || E) && /* @__PURE__ */ e("span", { className: "sr-only", children: y ? N : E })
      ]
    }
  );
}, hl = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, vl = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, gl = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, xl = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, yl = {
  xs: "text-xs gap-1.5",
  sm: "text-xs gap-2",
  md: "text-sm gap-2",
  lg: "text-sm gap-2.5"
}, rt = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  variant: s = "default",
  size: o,
  motion: l,
  disabled: i = !1,
  className: b
}) => {
  var d;
  const u = be(o, "sm"), x = ne(l), [h, g] = Je({
    value: r,
    defaultValue: a ?? ((d = t[0]) == null ? void 0 : d.value) ?? "",
    onChange: n
  });
  return s === "segmented" ? /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": x,
      className: m(
        "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        hl[u],
        b
      ),
      children: t.map((f) => {
        const p = String(h) === String(f.value), y = !!(i || f.disabled);
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": p,
            disabled: y,
            onClick: () => g(f.value),
            className: m(
              "rounded-[var(--abc-radius-sm)] font-medium cursor-pointer select-none abc-motion-control",
              vl[u],
              p ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]",
              y && "opacity-45 cursor-not-allowed"
            ),
            children: f.label
          },
          String(f.value)
        );
      })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": x,
      className: m("inline-flex flex-wrap items-center gap-4", b),
      children: t.map((f) => {
        const p = String(h) === String(f.value), y = !!(i || f.disabled);
        return /* @__PURE__ */ c(
          "label",
          {
            className: m(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              yl[u],
              y ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "radio",
                  checked: p,
                  disabled: y,
                  onChange: () => g(f.value),
                  className: "peer sr-only"
                }
              ),
              /* @__PURE__ */ e(
                "span",
                {
                  className: m(
                    "flex items-center justify-center rounded-full border abc-motion-control",
                    gl[u],
                    p ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: p && /* @__PURE__ */ e(
                    "span",
                    {
                      className: m(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        xl[u]
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: f.label })
            ]
          },
          String(f.value)
        );
      })
    }
  );
}, Xn = ["日", "一", "二", "三", "四", "五", "六"], qn = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, da = Oe.forwardRef(
  ({
    value: t,
    defaultValue: r = "",
    onChange: a,
    placeholder: n = "请选择日期",
    allowClear: s,
    clearable: o,
    disabled: l = !1,
    format: i = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: u,
    name: x,
    minDate: h,
    maxDate: g,
    size: d,
    motion: f,
    className: p
  }, y) => {
    const S = be(d, "sm"), v = ne(f), N = $e(), E = u || N, _ = le(null), T = le(null);
    Nr(y, () => _.current, []);
    const k = t !== void 0, [w, C] = O(r), L = k ? t ?? "" : w, [D, M] = O(!1), [A, W] = O({ top: 0, left: 0 }), [Y, P] = O(
      () => L && ke(L).isValid() ? ke(L) : ke()
    ), j = !!((s ?? o ?? !0) && L && !l);
    ie(() => {
      D && P(
        L && ke(L).isValid() ? ke(L) : ke()
      );
    }, [D, L]);
    const K = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      { label: "今天", value: () => ke().format(i) },
      { label: "昨天", value: () => ke().subtract(1, "day").format(i) },
      { label: "明天", value: () => ke().add(1, "day").format(i) },
      { label: "一周前", value: () => ke().subtract(7, "day").format(i) }
    ], [b, i]);
    ie(() => {
      if (!D) return;
      const B = () => {
        if (!_.current || typeof window > "u") return;
        const U = _.current.getBoundingClientRect(), V = K.length > 0 ? 340 : 300, X = 280, se = window.innerHeight - U.bottom < V && U.top > V ? U.top - V - 4 : U.bottom + 4;
        let R = U.left;
        R + X > window.innerWidth - 8 && (R = Math.max(8, window.innerWidth - X - 8)), W({ top: Math.max(8, se), left: Math.max(8, R) });
      };
      return B(), window.addEventListener("resize", B), window.addEventListener("scroll", B, !0), () => {
        window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0);
      };
    }, [D, K.length]), ie(() => {
      if (!D) return;
      const B = (V) => {
        var J, se;
        const X = V.target;
        (J = _.current) != null && J.contains(X) || (se = T.current) != null && se.contains(X) || M(!1);
      }, U = (V) => {
        V.key === "Escape" && (V.preventDefault(), V.stopPropagation(), M(!1));
      };
      return document.addEventListener("mousedown", B), document.addEventListener("keydown", U, !0), () => {
        document.removeEventListener("mousedown", B), document.removeEventListener("keydown", U, !0);
      };
    }, [D]);
    const re = (B) => {
      k || C(B), a == null || a(B);
    }, Q = ce(
      () => sa(Y.year(), Y.month()),
      [Y]
    ), Ce = ce(() => {
      if (!L) return "";
      const B = ke(L);
      return B.isValid() ? B.format("YYYY-MM-DD") : L;
    }, [L]);
    return /* @__PURE__ */ c(De, { children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: _,
          id: E,
          "data-datepicker-trigger": "",
          "data-motion": v,
          role: "combobox",
          "aria-expanded": D,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && M((B) => !B),
          onKeyDown: (B) => {
            !l && (B.key === "Enter" || B.key === " ") && (B.preventDefault(), M((U) => !U));
          },
          className: m(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            vt,
            qn[S],
            D && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            p
          ),
          children: [
            /* @__PURE__ */ e(ga, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: n,
                value: L,
                name: x,
                tabIndex: -1,
                className: "w-full min-w-0 flex-1 bg-transparent p-0 font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            j && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (B) => {
                  B.stopPropagation(), re("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      D && typeof document < "u" && tt(
        /* @__PURE__ */ c(
          "div",
          {
            ref: T,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": v,
            "aria-label": "日期选择面板",
            style: { top: A.top, left: A.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              K.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: K.map((B) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const U = typeof B.value == "function" ? B.value() : B.value;
                    re(U), M(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: B.label
                },
                B.label
              )) }),
              /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => P((B) => B.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Sn, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => P((B) => B.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(xa, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: Y.format("YYYY 年 M 月") }),
                /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => P((B) => B.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => P((B) => B.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Mn, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Xn.map((B) => /* @__PURE__ */ e("span", { className: "py-1", children: B }, B)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: Q.map((B) => {
                const U = ke(B.iso), V = i === "YYYY-MM-DD" ? B.iso : U.format(i), X = B.iso === Ce, J = !!(h && U.isBefore(ke(h), "day") || g && U.isAfter(ke(g), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": V,
                    disabled: J,
                    onClick: () => {
                      J || (re(V), M(!1));
                    },
                    className: m(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      X ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : B.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      B.isToday && !X && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: B.day
                  },
                  B.iso
                );
              }) })
            ]
          }
        ),
        _r(_.current) ?? document.body
      )
    ] });
  }
);
da.displayName = "DatePicker";
function Yr(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const ba = Oe.forwardRef(
  ({
    value: t,
    defaultValue: r,
    onChange: a,
    placeholder: n = ["开始日期", "结束日期"],
    allowClear: s,
    clearable: o,
    disabled: l = !1,
    format: i = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: u,
    minDate: x,
    maxDate: h,
    size: g,
    motion: d,
    className: f
  }, p) => {
    const y = be(g, "sm"), S = ne(d), v = $e(), N = u || v, E = le(null), _ = le(null);
    Nr(p, () => E.current, []);
    const T = Array.isArray(t) || t === void 0 && Array.isArray(r), k = t !== void 0, [w, C] = O(
      () => Yr(r)
    ), L = k ? Yr(t) : w, [D, M] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [A, W] = O(!1), [Y, P] = O({ top: 0, left: 0 }), [$, j] = O(null), [K, re] = O(null), [Q, Ce] = O(
      () => L.start && ke(L.start).isValid() ? ke(L.start) : ke()
    ), B = ce(() => Q.add(1, "month"), [Q]), V = !!((s ?? o ?? !0) && (L.start || L.end) && !l);
    ie(() => {
      A ? (j(null), re(null), Ce(
        L.start && ke(L.start).isValid() ? ke(L.start) : ke()
      )) : (j(null), re(null));
    }, [A, L.start]);
    const X = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      {
        label: "今天",
        getValue: () => {
          const ae = ke().format(i);
          return { start: ae, end: ae };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: ke().subtract(6, "day").format(i),
          end: ke().format(i)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: ke().subtract(29, "day").format(i),
          end: ke().format(i)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: ke().startOf("month").format(i),
          end: ke().format(i)
        })
      }
    ], [b, i]);
    ie(() => {
      if (!A) return;
      const ae = () => {
        if (!E.current || typeof window > "u") return;
        const oe = E.current.getBoundingClientRect(), ue = X.length > 0 ? 370 : 330, F = 556, de = window.innerHeight - oe.bottom < ue && oe.top > ue ? oe.top - ue - 4 : oe.bottom + 4;
        let H = oe.left;
        H + F > window.innerWidth - 8 && (H = Math.max(8, window.innerWidth - F - 8)), P({ top: Math.max(8, de), left: Math.max(8, H) });
      };
      return ae(), window.addEventListener("resize", ae), window.addEventListener("scroll", ae, !0), () => {
        window.removeEventListener("resize", ae), window.removeEventListener("scroll", ae, !0);
      };
    }, [A, X.length]), ie(() => {
      if (!A) return;
      const ae = (ue) => {
        var ee, de;
        const F = ue.target;
        (ee = E.current) != null && ee.contains(F) || (de = _.current) != null && de.contains(F) || W(!1);
      }, oe = (ue) => {
        ue.key === "Escape" && (ue.preventDefault(), ue.stopPropagation(), W(!1));
      };
      return document.addEventListener("mousedown", ae), document.addEventListener("keydown", oe, !0), () => {
        document.removeEventListener("mousedown", ae), document.removeEventListener("keydown", oe, !0);
      };
    }, [A]);
    const J = (ae) => {
      k || C(ae), T ? a == null || a([ae.start, ae.end]) : a == null || a(ae);
    }, se = ce(() => {
      if ($) {
        const ae = ke($);
        if (!K) return { start: ae, end: null };
        const oe = ke(K);
        return oe.isBefore(ae, "day") ? { start: oe, end: ae } : { start: ae, end: oe };
      }
      return {
        start: L.start && ke(L.start).isValid() ? ke(L.start) : null,
        end: L.end && ke(L.end).isValid() ? ke(L.end) : null
      };
    }, [$, K, L]), R = ce(
      () => sa(Q.year(), Q.month()),
      [Q]
    ), me = ce(
      () => sa(B.year(), B.month()),
      [B]
    ), Pe = (ae) => {
      const oe = ke(ae), ue = i === "YYYY-MM-DD" ? ae : oe.format(i);
      if (!$) {
        j(ue), re(null);
        return;
      }
      const F = ke($), [ee, de] = oe.isBefore(F, "day") ? [oe, F] : [F, oe];
      J({ start: ee.format(i), end: de.format(i) }), j(null), re(null), W(!1);
    }, je = (ae, oe, ue) => /* @__PURE__ */ c("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between", children: [
        ue === "left" ? /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => Ce((F) => F.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Sn, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => Ce((F) => F.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(xa, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: ae.format("YYYY 年 M 月") }),
        ue === "right" ? /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => Ce((F) => F.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => Ce((F) => F.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Mn, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Xn.map((F) => /* @__PURE__ */ e("span", { className: "py-1", children: F }, F)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: oe.map((F) => {
        const ee = ke(F.iso), de = i === "YYYY-MM-DD" ? F.iso : ee.format(i), H = !!(se.start && ee.isSame(se.start, "day")), G = !!(se.end && ee.isSame(se.end, "day")), we = !!(se.start && se.end && ee.isAfter(se.start, "day") && ee.isBefore(se.end, "day")), Te = !!(x && ee.isBefore(ke(x), "day") || h && ee.isAfter(ke(h), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": de,
            disabled: Te,
            onMouseEnter: () => $ && re(de),
            onClick: () => !Te && Pe(F.iso),
            className: m(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              H || G ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : we ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : F.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              F.isToday && !H && !G && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: F.day
          },
          `${ue}-${F.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ c(De, { children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: E,
          id: N,
          "data-daterangepicker-trigger": "",
          "data-motion": S,
          role: "combobox",
          "aria-expanded": A,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && W((ae) => !ae),
          onKeyDown: (ae) => {
            !l && (ae.key === "Enter" || ae.key === " ") && (ae.preventDefault(), W((oe) => !oe));
          },
          className: m(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            vt,
            qn[y],
            A && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            f
          ),
          children: [
            /* @__PURE__ */ e(ga, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: D,
                value: L.start,
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
                placeholder: M,
                value: L.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            V && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (ae) => {
                  ae.stopPropagation(), J({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      A && typeof document < "u" && tt(
        /* @__PURE__ */ c(
          "div",
          {
            ref: _,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": S,
            "aria-label": "日期范围选择面板",
            style: { top: Y.top, left: Y.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              X.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: X.map((ae) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const oe = ae.getValue(), ue = Yr(oe);
                    J(ue), j(null), re(null), W(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: ae.label
                },
                ae.label
              )) }),
              /* @__PURE__ */ c("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: je(Q, R, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: je(B, me, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: $ ? `已选起始日：${$}，请继续点击截止日期` : L.start && L.end ? `已选区间：${L.start} 至 ${L.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        _r(E.current) ?? document.body
      )
    ] });
  }
);
ba.displayName = "DateRangePicker";
const wl = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, Nl = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function kl(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function Cl(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const Sl = ({
  value: t = "",
  onChange: r,
  label: a,
  helperText: n,
  error: s,
  accept: o = "image/*,.svg",
  maxSizeMB: l = 5,
  disabled: i = !1,
  customUpload: b,
  size: u,
  motion: x,
  placeholder: h = "点击或拖拽图片至此处上传",
  className: g
}) => {
  const d = be(u, "sm"), f = ne(x), p = $e(), y = le(null), { uploadAdapter: S, toast: v } = Ve(), [N, E] = O(!1), [_, T] = O(!1), [k, w] = O(!1), C = async (M) => {
    if (!M || i || N) return;
    if (!(M.type.startsWith("image/") || M.name.toLowerCase().endsWith(".svg"))) {
      v.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (M.size >= l * 1024 * 1024) {
      v.error(`上传图片大小不能超过 ${l}MB`);
      return;
    }
    E(!0);
    try {
      const Y = await (b ?? S ?? Cl)(M);
      Y ? (r == null || r(Y), v.success("上传成功")) : v.error("上传失败，未获取到图片地址");
    } catch (W) {
      v.error((W == null ? void 0 : W.message) || "上传图片失败，请重试");
    } finally {
      E(!1), y.current && (y.current.value = "");
    }
  }, L = (t == null ? void 0 : t.trim()) ?? "", D = kl(L);
  return /* @__PURE__ */ c("div", { "data-motion": f, className: "w-full", children: [
    a && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: p,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: a
      }
    ),
    /* @__PURE__ */ e(
      "input",
      {
        ref: y,
        id: p,
        type: "file",
        accept: o,
        disabled: i || N,
        onChange: (M) => {
          var A;
          return C((A = M.target.files) == null ? void 0 : A[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        onClick: () => {
          var M;
          !L && !i && !N && ((M = y.current) == null || M.click());
        },
        onDragOver: (M) => {
          M.preventDefault(), M.stopPropagation(), !i && !N && T(!0);
        },
        onDragLeave: (M) => {
          M.preventDefault(), M.stopPropagation(), T(!1);
        },
        onDrop: (M) => {
          var A;
          M.preventDefault(), M.stopPropagation(), T(!1), !i && !N && C((A = M.dataTransfer.files) == null ? void 0 : A[0]);
        },
        className: m(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          _ ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !i && !_ && "hover:border-[var(--abc-primary)]",
          !L && !i && "cursor-pointer",
          i && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          wl[d],
          g
        ),
        children: [
          L ? /* @__PURE__ */ c("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: m(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  Nl[d]
                ),
                children: [
                  D ? /* @__PURE__ */ e(
                    "div",
                    {
                      className: "flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full",
                      dangerouslySetInnerHTML: { __html: L }
                    }
                  ) : /* @__PURE__ */ e("img", { src: L, alt: "凭证预览", className: "h-full w-full object-contain p-1" }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "查看大图",
                      title: "查看大图",
                      onClick: (M) => {
                        M.stopPropagation(), w(!0);
                      },
                      className: "absolute inset-0 flex items-center justify-center bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
                      children: /* @__PURE__ */ e(Wt, { className: "h-4 w-4" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ c("div", { className: "flex flex-1 flex-col items-center space-y-1 text-center sm:items-start sm:text-left", children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-medium text-[var(--abc-fg)]", children: "已上传图片资源" }),
              /* @__PURE__ */ e("p", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: "支持点击放大预览、重新选择或移除" }),
              !i && /* @__PURE__ */ c("div", { className: "flex items-center gap-2.5 pt-1", children: [
                /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    disabled: N,
                    onClick: (M) => {
                      var A;
                      M.stopPropagation(), (A = y.current) == null || A.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(Er, { className: m("h-3 w-3", N && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    disabled: N,
                    onClick: (M) => {
                      M.stopPropagation(), r == null || r("");
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-danger)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(Ot, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "删除" })
                    ]
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ c("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(dc, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: h }),
            /* @__PURE__ */ c("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              l,
              "MB"
            ] })
          ] }),
          N && /* @__PURE__ */ c("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(kr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "正在上传中..." })
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: s }),
    n && !s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: n }),
    /* @__PURE__ */ e(
      wt,
      {
        open: k,
        onClose: () => w(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: D ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: L }
          }
        ) : /* @__PURE__ */ e("img", { src: L, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, Ml = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, sb = ({
  treeData: t,
  checkable: r = !1,
  checkStrictly: a = !1,
  checkedKeys: n,
  defaultCheckedKeys: s = [],
  onCheck: o,
  selectedKeys: l,
  onSelect: i,
  defaultExpandAll: b = !0,
  searchable: u = !1,
  searchPlaceholder: x = "搜索节点名称（支持拼音首字母）...",
  showToolbar: h = !1,
  size: g,
  motion: d,
  renderExtra: f,
  className: p
}) => {
  const y = be(g, "sm"), S = ne(d), [v, N] = O(""), [E, _] = O(
    () => b ? new Set(Kr(t)) : /* @__PURE__ */ new Set()
  ), [T, k] = O(s), [w, C] = O([]);
  ie(() => {
    b && t.length > 0 && E.size === 0 && _(new Set(Kr(t)));
  }, [t, b]);
  const L = n !== void 0 ? n : T, D = l !== void 0 ? l : w, { checkedKeys: M, halfCheckedKeys: A } = ce(
    () => En(t, L, a),
    [t, L, a]
  ), W = ce(() => new Set(M), [M]), Y = ce(() => new Set(A), [A]), { filteredNodes: P, autoExpandedKeys: $ } = ce(
    () => zc(t, v),
    [t, v]
  ), j = ce(() => v.trim() ? /* @__PURE__ */ new Set([...E, ...$]) : E, [E, $, v]), K = (B) => {
    _((U) => {
      const V = new Set(U);
      return V.has(B) ? V.delete(B) : V.add(B), V;
    });
  }, re = (B, U) => {
    const V = Rc(t, M, B, U, a);
    n === void 0 && k(V.checkedKeys), o == null || o(V.checkedKeys, {
      halfCheckedKeys: V.halfCheckedKeys,
      node: B,
      checked: U
    });
  }, Q = (B) => {
    if (B.disabled) return;
    const U = [B.key];
    l === void 0 && C(U), i == null || i(U, B);
  }, Ce = (B, U = 0) => /* @__PURE__ */ e("ul", { role: U === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: B.map((V) => {
    const X = !!(V.children && V.children.length > 0), J = j.has(V.key), se = W.has(V.key), R = Y.has(V.key), me = D.includes(V.key);
    return /* @__PURE__ */ c("li", { role: "treeitem", "aria-expanded": X ? J : void 0, children: [
      /* @__PURE__ */ c(
        "div",
        {
          style: { paddingInlineStart: `${U * 18 + 6}px` },
          className: m(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            Ml[y],
            me ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            V.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              X ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": J ? `收起 ${V.title}` : `展开 ${V.title}`,
                  onClick: () => K(V.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    bt,
                    {
                      className: m(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        J && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                tr,
                {
                  size: y,
                  motion: S,
                  checked: se,
                  indeterminate: R,
                  disabled: V.disabled,
                  onChange: (Pe) => re(V, Pe)
                }
              ),
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: V.disabled,
                  onClick: () => {
                    r && !i ? re(V, !se) : Q(V);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    V.icon && /* @__PURE__ */ e(yt, { name: V.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: V.title })
                  ]
                }
              )
            ] }),
            f && /* @__PURE__ */ e("div", { className: "shrink-0", children: f(V) })
          ]
        }
      ),
      X && J && Ce(V.children, U + 1)
    ] }, V.key);
  }) });
  return /* @__PURE__ */ c("div", { "data-motion": S, className: m("space-y-2", p), children: [
    (u || h) && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
      u && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        et,
        {
          size: y,
          motion: S,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(dt, { className: "h-3.5 w-3.5" }),
          placeholder: x,
          value: v,
          onChange: (B) => N(B.target.value)
        }
      ) }),
      h && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => _(new Set(Kr(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(uc, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => _(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(mc, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: P.length > 0 ? Ce(P) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, Il = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, El = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, Tl = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: o = !1,
  size: l,
  motion: i,
  className: b
}) => {
  const u = be(l, "sm"), x = ne(i), [h, g] = O(r), [d, f] = O(""), p = t !== void 0 ? t : h, y = (N) => {
    t === void 0 && g(N), a == null || a(N);
  }, S = () => {
    const N = d.trim();
    if (!(!N || o)) {
      if (p.includes(N) || p.length >= s) {
        f("");
        return;
      }
      y([...p, N]), f("");
    }
  }, v = (N) => {
    o || y(p.filter((E, _) => _ !== N));
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": x,
      className: m(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        Il[u],
        vt,
        o && "opacity-65 cursor-not-allowed",
        b
      ),
      children: [
        p.map((N, E) => /* @__PURE__ */ c(
          "span",
          {
            className: m(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              El[u]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: N }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${N}`,
                  onClick: () => v(E),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ue, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${N}_${E}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: o || p.length >= s,
            value: d,
            placeholder: p.length === 0 ? n : "",
            onChange: (N) => f(N.target.value),
            onBlur: S,
            onKeyDown: (N) => {
              N.key === "Enter" || N.key === "," ? (N.preventDefault(), S()) : N.key === "Backspace" && !d && p.length > 0 && v(p.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function tn(t, r) {
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
const _l = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, ob = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: l
}) => {
  const i = be(a, "md"), b = ne(n), { captchaAdapter: u } = Ve(), x = l ?? u, [h, g] = O(null), [d, f] = O(!0), [p, y] = O(!1), [S, v] = O(!1), [N, E] = O(0), [_, T] = O(0), k = le(!1), w = le(0), C = le(0), L = he(async () => {
    f(!0), y(!1), v(!1), E(0), T(0);
    try {
      if (x) {
        const W = await x();
        g(W);
      } else
        g(tn(t, r));
    } catch {
      g(tn(t, r));
    } finally {
      f(!1);
    }
  }, [x, t, r]);
  ie(() => {
    L();
  }, [L]);
  const D = (W) => {
    d || p || (k.current = !0, w.current = W, C.current = Date.now());
  }, M = he(
    (W) => {
      if (!k.current || d || p) return;
      const Y = W - w.current, P = t - 40, $ = Math.max(0, Math.min(P, Y));
      E($), T((t - 60) / P * $);
    },
    [t, d, p]
  ), A = he(() => {
    if (!k.current || d || p) return;
    if (k.current = !1, Date.now() - C.current > 1e4 || !h) {
      v(!0), o == null || o(), setTimeout(L, 600);
      return;
    }
    const Y = Math.round(_);
    if (typeof h.targetX == "number" && Math.abs(Y - h.targetX) > 10) {
      v(!0), o == null || o(), setTimeout(L, 550);
      return;
    }
    y(!0), s({
      nonceStr: h.nonceStr,
      value: Y
    });
  }, [_, h, d, p, o, s, L]);
  return ie(() => {
    const W = (j) => M(j.clientX), Y = () => A(), P = (j) => {
      j.touches[0] && M(j.touches[0].clientX);
    }, $ = () => A();
    return window.addEventListener("mousemove", W), window.addEventListener("mouseup", Y), window.addEventListener("touchmove", P), window.addEventListener("touchend", $), () => {
      window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", Y), window.removeEventListener("touchmove", P), window.removeEventListener("touchend", $);
    };
  }, [M, A]), /* @__PURE__ */ c("div", { "data-motion": b, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          d ? /* @__PURE__ */ c("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : h && /* @__PURE__ */ c(De, { children: [
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
                style: { top: h.blockY, left: _ }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新拼图",
              title: "刷新拼图",
              onClick: L,
              className: "absolute top-2 right-2 rounded-[var(--abc-radius-sm)] bg-black/45 p-1.5 text-white backdrop-blur-xs transition-colors hover:bg-black/65 cursor-pointer",
              children: /* @__PURE__ */ e(Ir, { className: m("h-3.5 w-3.5", d && "animate-spin") })
            }
          ),
          p && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(pt, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: m(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          _l[i],
          p ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : S ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        ),
        style: { width: t },
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: m(
                "absolute inset-y-0 left-0",
                p ? "bg-[var(--abc-success)]/20" : "bg-[var(--abc-primary)]/20"
              ),
              style: { width: N + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: p ? "验证成功" : S ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(N),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: (W) => D(W.clientX),
              onTouchStart: (W) => {
                W.touches[0] && D(W.touches[0].clientX);
              },
              className: m(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                p ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: N },
              children: p ? /* @__PURE__ */ e(pt, { className: "h-4 w-4" }) : /* @__PURE__ */ e(bc, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
};
function cb({
  items: t,
  activeKey: r,
  value: a,
  defaultActiveKey: n,
  onChange: s,
  variant: o = "line",
  size: l,
  motion: i,
  ariaLabel: b = "内容切换标签",
  extra: u,
  className: x,
  panelClassName: h
}) {
  var E;
  const g = be(l, "md"), d = ne(i), f = $e(), [p, y] = Je({
    value: r ?? a,
    defaultValue: n ?? ((E = t[0]) == null ? void 0 : E.key) ?? "",
    onChange: s
  }), S = (_, T) => {
    const k = t.filter((C) => !C.disabled);
    if (k.length === 0) return;
    const w = k.findIndex((C) => {
      var L;
      return C.key === ((L = t[T]) == null ? void 0 : L.key);
    });
    if (_.key === "ArrowRight") {
      _.preventDefault();
      const C = k[(w + 1) % k.length];
      C && y(C.key);
    } else if (_.key === "ArrowLeft") {
      _.preventDefault();
      const C = k[(w - 1 + k.length) % k.length];
      C && y(C.key);
    }
  }, v = t.some((_) => _.children !== void 0), N = g === "xs" ? "px-2.5 py-1 text-[11px]" : g === "sm" ? "px-3 py-1.5 text-xs" : g === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ c("div", { "data-motion": d, className: m("w-full", x), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: m(
          "flex items-center justify-between gap-3",
          o === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": b,
              className: m(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((_, T) => {
                const k = _.key === p, w = `${f}-tab-${_.key}`;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    id: w,
                    type: "button",
                    role: "tab",
                    "aria-selected": k,
                    tabIndex: k ? 0 : -1,
                    disabled: _.disabled,
                    onClick: () => !_.disabled && y(_.key),
                    onKeyDown: (C) => S(C, T),
                    className: m(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      N,
                      o === "line" ? m(
                        "abc-tab-trigger",
                        k ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? m(
                        "rounded-[var(--abc-radius-sm)]",
                        k ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : m(
                        "rounded-[var(--abc-radius-md)] border",
                        k ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]"
                      )
                    ),
                    children: [
                      _.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: _.icon }),
                      /* @__PURE__ */ e("span", { children: _.label }),
                      _.badge !== void 0 && (typeof _.badge == "number" || typeof _.badge == "string" ? /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums", children: _.badge }) : _.badge)
                    ]
                  },
                  _.key
                );
              })
            }
          ),
          u && /* @__PURE__ */ e("div", { className: "shrink-0", children: u })
        ]
      }
    ),
    v && /* @__PURE__ */ e("div", { children: t.map((_) => {
      const T = _.key === p, k = `${f}-tab-${_.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": k,
          tabIndex: T ? 0 : void 0,
          ...T ? {} : { hidden: "until-found" },
          children: T && /* @__PURE__ */ e("div", { className: m("pt-4", d !== "none" && "abc-animate-fade-in", h), children: _.children })
        },
        _.key
      );
    }) })
  ] });
}
const rn = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function Zn(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const Jn = ({
  src: t,
  alt: r = "图片预览",
  size: a,
  motion: n,
  width: s,
  height: o,
  rounded: l = !1,
  fit: i = "contain",
  placeholder: b,
  className: u,
  zoomable: x = !0
}) => {
  const h = be(a, "sm"), g = ne(n), d = s ?? rn[h], f = o ?? rn[h], [p, y] = O(!1), [S, v] = O(!1), [N, E] = O(1), [_, T] = O(0), k = typeof t == "string" ? t.trim() : "", w = Zn(k), C = ce(() => k ? w && k.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(k)}` : k : "", [k, w]);
  if (ie(() => {
    y(!1);
  }, [k]), !k || p)
    return b ? /* @__PURE__ */ e(De, { children: b }) : /* @__PURE__ */ e(
      "div",
      {
        "data-motion": g,
        title: p ? "图片加载失败，请检查 URL 是否有效" : "暂无图片",
        style: {
          width: d,
          height: f,
          minWidth: typeof d == "number" ? d : void 0
        },
        className: m(
          "inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none",
          l ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          p && "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]",
          u
        ),
        children: p ? /* @__PURE__ */ e($t, { className: "h-4 w-4" }) : /* @__PURE__ */ e(wn, { className: "h-4 w-4" })
      }
    );
  const L = (D) => {
    D.stopPropagation(), x && (E(1), T(0), v(!0));
  };
  return /* @__PURE__ */ c(De, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: x ? "button" : void 0,
        tabIndex: x ? 0 : void 0,
        "data-motion": g,
        title: "点击预览大图 / 矢量图",
        "aria-label": x ? `预览 ${r}` : void 0,
        onClick: L,
        onKeyDown: (D) => {
          x && (D.key === "Enter" || D.key === " ") && (D.preventDefault(), L(D));
        },
        style: {
          width: d,
          height: f,
          minWidth: typeof d == "number" ? d : void 0
        },
        className: m(
          "abc-motion-control group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
          l ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          x && "cursor-zoom-in hover:border-[var(--abc-primary)]",
          u
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: C,
              alt: r,
              onError: () => y(!0),
              className: m(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                w || i === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          x && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e(Wt, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ c(
      wt,
      {
        open: S,
        onClose: () => v(!1),
        title: r,
        size: "lg",
        motion: g,
        footer: /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => E((D) => Math.max(0.4, Number((D - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(fc, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ c("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(N * 100),
            "%"
          ] }),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => E((D) => Math.min(3, Number((D + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(pc, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => T((D) => (D + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Ir, { className: "h-3.5 w-3.5" }),
                " 旋转"
              ]
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6", children: /* @__PURE__ */ e(
            "div",
            {
              style: { transform: `scale(${N}) rotate(${_}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: C, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Al = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: l,
  className: i
}) => {
  const b = be(o, "sm"), u = ne(l), x = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", g = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[b];
  return /* @__PURE__ */ c("div", { "data-motion": u, className: m("space-y-2.5", i), children: [
    (t || r) && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: m("font-semibold text-[var(--abc-fg)]", b === "lg" ? "text-sm" : "text-xs"), children: t }),
      r && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: r })
    ] }),
    /* @__PURE__ */ e(
      "dl",
      {
        className: m(
          "m-0 grid",
          x,
          s ? "overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px" : "gap-x-6 gap-y-3"
        ),
        children: a.map((d, f) => {
          const p = d.span && d.span >= n ? "sm:col-span-full" : d.span === 2 ? "sm:col-span-2" : d.span === 3 ? "lg:col-span-3" : void 0;
          return s ? /* @__PURE__ */ c(
            "div",
            {
              className: m("flex min-w-0 bg-[var(--abc-bg-surface)]", p),
              children: [
                /* @__PURE__ */ e(
                  "dt",
                  {
                    className: m(
                      "w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center",
                      g
                    ),
                    children: d.label
                  }
                ),
                /* @__PURE__ */ e("dd", { className: m("m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center", g), children: d.children ?? "-" })
              ]
            },
            d.key ?? f
          ) : /* @__PURE__ */ c("div", { className: m("min-w-0 space-y-0.5", p), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: d.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: d.children ?? "-" })
          ] }, d.key ?? f);
        })
      }
    )
  ] });
}, Ll = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Rl = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, ib = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: l,
  className: i
}) => {
  const b = $e(), u = be(o, "sm"), x = ne(l), [h, g] = O(a), d = n !== void 0 ? n : h, f = (p, y) => {
    let S;
    r ? S = y ? [p] : [] : S = y ? Array.from(/* @__PURE__ */ new Set([...d, p])) : d.filter((v) => v !== p), n === void 0 && g(S), s == null || s(S);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-motion": x,
      className: m(
        "divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        i
      ),
      children: t.map((p) => {
        const y = d.includes(p.key);
        return /* @__PURE__ */ c(
          "details",
          {
            name: r ? b : void 0,
            open: y,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ c(
                "summary",
                {
                  "aria-disabled": p.disabled || void 0,
                  onClick: (S) => {
                    S.preventDefault(), !p.disabled && f(p.key, !y);
                  },
                  className: m(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Ll[u],
                    p.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ c("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        ct,
                        {
                          className: m(
                            "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-fast)]",
                            y ? "rotate-0" : "-rotate-90"
                          )
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "truncate", children: p.label })
                    ] }),
                    p.extra && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: p.extra })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: m(
                    "border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] leading-relaxed text-[var(--abc-fg-secondary)]",
                    Rl[u]
                  ),
                  children: p.children
                }
              )
            ]
          },
          p.key
        );
      })
    }
  );
}, zl = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, lb = ({ items: t, size: r, motion: a, className: n }) => {
  const s = be(r, "sm"), o = ne(a), l = {
    xs: "gap-2.5 pb-2.5 last:pb-0",
    sm: "gap-3 pb-4 last:pb-0",
    md: "gap-3.5 pb-5 last:pb-0",
    lg: "gap-4 pb-6 last:pb-0"
  }, i = {
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
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: m("m-0 list-none space-y-0 p-0", n), children: t.map((u, x) => {
    const h = x === t.length - 1, g = u.tone ?? "primary";
    return /* @__PURE__ */ c("li", { className: m("relative flex", l[s]), children: [
      !h && /* @__PURE__ */ e(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
        }
      ),
      /* @__PURE__ */ e("span", { className: "relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center", children: u.icon ? u.icon : /* @__PURE__ */ e(
        "span",
        {
          className: m(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            zl[g]
          )
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: m("font-medium text-[var(--abc-fg)]", i[s]), children: u.title }),
          u.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: u.time })
        ] }),
        u.description && /* @__PURE__ */ e("div", { className: m("leading-relaxed text-[var(--abc-fg-muted)]", b[s]), children: u.description })
      ] })
    ] }, u.key ?? x);
  }) });
};
let Qe = [];
const ua = /* @__PURE__ */ new Set();
function Qn() {
  ua.forEach((t) => t());
}
function Dl(t) {
  Qe.includes(t) || (Qe = [...Qe, t], Qn());
}
function an(t) {
  Qe.includes(t) && (Qe = Qe.filter((r) => r !== t), Qn());
}
const Pl = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, Sa = ({
  open: t,
  visible: r,
  onClose: a,
  title: n,
  description: s,
  children: o,
  footer: l,
  size: i = "md",
  motion: b,
  width: u,
  placement: x = "right",
  closeOnClickModal: h = !0,
  resizable: g = !0,
  minWidth: d = 340,
  storageKey: f,
  push: p = !0,
  pushDistance: y = 140,
  bodyClassName: S
}) => {
  const v = $e(), N = $e(), E = t ?? r ?? !1, _ = ne(b), { isMounted: T, isVisible: k } = Ct(E, _ === "none" ? 0 : 220), w = le(a);
  w.current = a;
  const [, C] = O(0), [L, D] = O(!1), [M, A] = O(!1), [W, Y] = O(() => {
    if (!f || typeof window > "u") return null;
    try {
      const U = Number(window.localStorage.getItem(`abc_drawer_w_${f}`));
      return Number.isFinite(U) && U >= d ? U : null;
    } catch {
      return null;
    }
  });
  ie(() => {
    const U = () => C((V) => V + 1);
    return ua.add(U), () => {
      ua.delete(U);
    };
  }, []), ie(() => {
    if (E)
      return Dl(v), () => an(v);
    an(v);
  }, [E, v]), ie(() => {
    if (!T) return;
    const U = (V) => {
      const X = Qe[Qe.length - 1];
      V.key === "Escape" && (!X || X === v) && (V.stopPropagation(), w.current());
    };
    return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
  }, [T, v]);
  const P = Qe.indexOf(v), $ = P >= 0 ? Math.max(0, Qe.length - 1 - P) : 0, j = P >= 0 ? P + 1 : 1, K = (U) => {
    U.preventDefault(), A(!0);
    const V = (J) => {
      const se = Math.max(d, window.innerWidth - 32), R = x === "right" ? window.innerWidth - J.clientX : J.clientX, me = Math.min(se, Math.max(d, R));
      if (D(!1), Y(me), f)
        try {
          window.localStorage.setItem(`abc_drawer_w_${f}`, String(Math.round(me)));
        } catch {
        }
    }, X = () => {
      A(!1), window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", X);
    };
    window.addEventListener("mousemove", V), window.addEventListener("mouseup", X);
  };
  if (!T || typeof document > "u") return null;
  const re = L ? "100dvw" : W ? `${W}px` : typeof u == "number" ? `${u}px` : u ?? `min(${Pl[i]}px, 92dvw)`, Q = p && $ > 0 ? $ * y : 0, Ce = p && $ > 0 ? Math.max(0.92, 1 - $ * 0.025) : 1, B = x === "right" ? -1 : 1;
  return tt(
    /* @__PURE__ */ c(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": n ? N : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, P) * 10 },
        className: "fixed inset-0 flex overflow-hidden",
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                h && a();
              },
              "data-motion": _,
              className: m(
                "fixed inset-0 bg-slate-950/45 backdrop-blur-[1.5px] overscroll-contain",
                _ !== "none" && (k ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              "data-motion": _,
              style: {
                width: re,
                transform: Q > 0 ? `translate3d(${B * Q}px, 0, 0) scale(${Ce})` : void 0
              },
              className: m(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)]",
                !M && _ !== "none" && "transition-transform duration-[var(--abc-motion-base)] ease-out",
                x === "right" ? "ml-auto border-l" : "mr-auto border-r",
                _ !== "none" && (x === "right" ? k ? "abc-animate-drawer-right-in" : "abc-animate-drawer-right-out" : k ? "abc-animate-drawer-left-in" : "abc-animate-drawer-left-out")
              ),
              children: [
                g && !L && /* @__PURE__ */ c(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: K,
                    className: m(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      x === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(ya, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                      Qe.length > 1 && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--abc-primary)]", children: [
                        /* @__PURE__ */ e(yn, { className: "h-2.5 w-2.5" }),
                        "L",
                        j
                      ] }),
                      n && /* @__PURE__ */ e("h2", { id: N, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
                    g && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": L ? "还原默认宽度" : "全宽展开",
                        onClick: () => D((U) => !U),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: L ? /* @__PURE__ */ e(ma, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(fa, { className: "h-3.5 w-3.5" })
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
                /* @__PURE__ */ e("div", { className: m("flex-1 overflow-y-auto px-5 py-4 text-xs", S), children: o }),
                l && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: l })
              ]
            }
          )
        ]
      }
    ),
    document.body
  );
}, Bl = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, jl = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, db = ({
  spinning: t = !0,
  tip: r,
  text: a,
  size: n,
  motion: s,
  fullscreen: o = !1,
  fullScreen: l = !1,
  className: i,
  children: b
}) => {
  const u = r ?? a, x = !!(o || l), h = be(n, "md"), g = ne(s), d = /* @__PURE__ */ c(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": g,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(kr, { className: m("animate-spin", Bl[h]) }),
        u && /* @__PURE__ */ e("span", { className: m("font-medium text-[var(--abc-fg-muted)]", jl[h]), children: u })
      ]
    }
  );
  return x ? t ? /* @__PURE__ */ e(
    "div",
    {
      "data-motion": g,
      className: m(
        "fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs",
        g !== "none" && "abc-animate-fade-in"
      ),
      children: d
    }
  ) : null : b !== void 0 ? /* @__PURE__ */ c("div", { "data-motion": g, className: m("relative", i), children: [
    b,
    t && /* @__PURE__ */ e(
      "div",
      {
        className: m(
          "absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]",
          g !== "none" && "abc-animate-fade-in"
        ),
        children: d
      }
    )
  ] }) : t ? /* @__PURE__ */ e("div", { "data-motion": g, className: m("flex items-center justify-center py-8", i), children: d }) : null;
}, Ol = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  children: s,
  className: o
}) => {
  const { resolvedTheme: l } = Ve(), i = le(null), b = le(null), u = he(() => {
    const x = i.current;
    if (!x) return;
    if (!r || !t || Array.isArray(t) && t.length === 0) {
      b.current && b.current.parentNode === x && x.removeChild(b.current), b.current = null;
      return;
    }
    if (typeof document > "u") return;
    const h = document.createElement("canvas"), g = h.getContext("2d");
    if (!g) return;
    const d = Array.isArray(t) ? t : [t], f = Math.max(window.devicePixelRatio || 1, 1), p = 210 + n[0], y = 90 + n[1];
    h.width = p * f, h.height = y * f;
    let S = "";
    try {
      g.scale(f, f), g.translate(p / 2, y / 2), g.rotate(a * Math.PI / 180), g.font = "500 12px Inter, -apple-system, sans-serif", g.fillStyle = l === "dark" ? "rgba(226, 232, 240, 0.065)" : "rgba(15, 23, 42, 0.055)", g.textAlign = "center", g.textBaseline = "middle", d.forEach((N, E) => {
        const _ = (E - (d.length - 1) / 2) * 18;
        g.fillText(N, 0, _);
      }), S = h.toDataURL();
    } catch {
      return;
    }
    if (!S) return;
    let v = b.current;
    v || (v = document.createElement("div"), b.current = v), v.setAttribute("data-watermark-overlay", "true"), v.setAttribute(
      "style",
      [
        "position: absolute",
        "inset: 0",
        "pointer-events: none",
        "z-index: 40",
        `background-image: url(${S})`,
        "background-repeat: repeat",
        `background-size: ${p}px ${y}px`
      ].join(" !important; ") + " !important;"
    ), v.parentNode !== x && x.appendChild(v);
  }, [t, r, n, l, a]);
  return ie(() => {
    u();
    const x = i.current;
    if (!x || !r || typeof MutationObserver > "u") return;
    const h = new MutationObserver((g) => {
      for (const d of g)
        if (d.type === "childList") {
          const f = Array.from(d.removedNodes);
          if (b.current && f.includes(b.current)) {
            b.current = null, u();
            break;
          }
        } else if (d.type === "attributes" && d.target === b.current) {
          u();
          break;
        }
    });
    return h.observe(x, {
      childList: !0,
      attributes: !0,
      subtree: !0,
      attributeFilter: ["style", "class", "hidden"]
    }), () => h.disconnect();
  }, [r, u]), /* @__PURE__ */ e("div", { ref: i, className: m("relative", o), children: s });
}, $l = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Sr, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(pt, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(rr, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e($t, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, Wl = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, bb = ({
  tone: t = "info",
  title: r,
  description: a,
  children: n,
  showIcon: s = !0,
  closable: o = !1,
  onClose: l,
  action: i,
  size: b,
  motion: u,
  className: x
}) => {
  const [h, g] = O(!1), d = be(b, "sm"), f = ne(u);
  if (h) return null;
  const p = $l[t], y = a ?? n;
  return /* @__PURE__ */ c(
    "div",
    {
      role: "alert",
      "data-motion": f,
      className: m(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        Wl[d],
        f !== "none" && "abc-animate-fade-in",
        p.box,
        x
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: p.icon }),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          r && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)]", children: r }),
          y && /* @__PURE__ */ e("div", { className: "leading-relaxed text-[var(--abc-fg-secondary)]", children: y })
        ] }),
        i && /* @__PURE__ */ e("div", { className: "shrink-0", children: i }),
        o && /* @__PURE__ */ e(
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
}, Fl = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, Hl = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, Kl = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, Ul = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  showInfo: n = !0,
  size: s,
  motion: o,
  className: l
}) => {
  const i = be(typeof s == "string" ? s : void 0, "sm"), b = ne(o), u = Math.max(0, Math.min(100, Math.round(t))), x = Kl[a];
  if (r === "circle") {
    const g = typeof s == "number" ? s : Fl[i], d = Math.max(4, Math.round(g * 0.09)), f = (g - d) / 2, p = 2 * Math.PI * f, y = p - u / 100 * p;
    return /* @__PURE__ */ c(
      "div",
      {
        role: "progressbar",
        "data-motion": b,
        "aria-valuenow": u,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: m("relative inline-flex items-center justify-center", l),
        style: { width: g, height: g },
        children: [
          /* @__PURE__ */ c("svg", { width: g, height: g, className: "-rotate-90", children: [
            /* @__PURE__ */ e(
              "circle",
              {
                cx: g / 2,
                cy: g / 2,
                r: f,
                fill: "none",
                stroke: "var(--abc-bg-subtle)",
                strokeWidth: d
              }
            ),
            /* @__PURE__ */ e(
              "circle",
              {
                cx: g / 2,
                cy: g / 2,
                r: f,
                fill: "none",
                stroke: x,
                strokeWidth: d,
                strokeLinecap: "round",
                strokeDasharray: p,
                strokeDashoffset: y,
                className: "transition-all duration-[var(--abc-motion-slow)]"
              }
            )
          ] }),
          n && /* @__PURE__ */ c("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            u,
            "%"
          ] })
        ]
      }
    );
  }
  const h = typeof s == "number" ? s : Hl[i];
  return /* @__PURE__ */ c(
    "div",
    {
      role: "progressbar",
      "data-motion": b,
      "aria-valuenow": u,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: m("flex w-full items-center gap-2.5", l),
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
                style: { width: `${u}%`, backgroundColor: x }
              }
            )
          }
        ),
        n && /* @__PURE__ */ c("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          u,
          "%"
        ] })
      ]
    }
  );
}, Vl = {
  success: {
    icon: /* @__PURE__ */ e(pt, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(Sr, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e(rr, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e($t, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(pn, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(vc, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(hc, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, Gl = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: l,
  className: i
}) => {
  const b = Vl[t], u = be(o, "md"), x = ne(l);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": x,
      className: m(
        "flex flex-col items-center justify-center text-center",
        {
          xs: "px-4 py-6",
          sm: "px-5 py-8",
          md: "px-6 py-12",
          lg: "px-8 py-16"
        }[u],
        x !== "none" && "abc-animate-fade-in",
        i
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: m(
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
class Yl extends Oe.Component {
  constructor() {
    super(...arguments);
    Wr(this, "state", { error: null });
    Wr(this, "handleReset", () => {
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
      Gl,
      {
        status: "500",
        title: `${n}加载或渲染发生异常`,
        subTitle: a.message || "捕获到未知运行时渲染错误，其他工作区页签不受影响。",
        extra: /* @__PURE__ */ e(
          _e,
          {
            variant: "primary",
            icon: /* @__PURE__ */ e(Er, { className: "h-3.5 w-3.5" }),
            onClick: this.handleReset,
            children: "重新加载此模块"
          }
        )
      }
    );
  }
}
const ub = Yl, Xr = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
};
function Xl(t, r, a, n) {
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  if (a.options && a.options.length > 0) {
    const o = a.options.find((l) => String(l.value) === String(t));
    if (o)
      return /* @__PURE__ */ e(zt, { status: o.status, color: o.color, dot: !0, children: o.label });
  }
  let s;
  switch (a.valueType) {
    case "money": {
      const o = Number(t);
      s = Number.isNaN(o) ? String(t) : /* @__PURE__ */ c("span", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: [
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
      const o = ke(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: o.isValid() ? o.format("YYYY-MM-DD") : String(t) });
      break;
    }
    case "datetime": {
      const o = ke(t);
      s = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: o.isValid() ? o.format("YYYY-MM-DD HH:mm:ss") : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(Jn, { src: String(t), width: 32, height: 32 });
    case "progress":
      return /* @__PURE__ */ e(Ul, { percent: Number(t) || 0, className: "min-w-[92px]" });
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
      return /* @__PURE__ */ e(zt, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
      return /* @__PURE__ */ e(zt, { dot: !0, children: String(t) });
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
  ) : a.copyable ? /* @__PURE__ */ e(Bi, { text: String(t), displayText: s }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: s }) : s;
}
function ql({
  columns: t,
  data: r,
  rowKey: a = "id",
  loading: n = !1,
  density: s = "default",
  selectedKeys: o,
  onSelectionChange: l,
  sortState: i,
  onSortChange: b,
  headerFilterMode: u = !1,
  headerFilters: x = {},
  onHeaderFilterChange: h,
  headerFilterRender: g,
  columnWidths: d = {},
  onColumnResize: f,
  resizable: p,
  motion: y,
  columnFixed: S = {},
  onColumnPin: v,
  onColumnHide: N,
  onResetColumns: E,
  onColumnReorder: _,
  expandable: T,
  onRowView: k,
  onEmptyReset: w,
  maxHeight: C,
  ariaLabel: L = "数据表格",
  emptyText: D = "暂无符合条件的数据",
  className: M
}) {
  const A = ne(y), W = le(null), Y = le(null), [P, $] = O(null), [j, K] = O(null), re = le(null), Q = le(!1), Ce = le(null), [B, U] = O({}), [V, X] = O(0), [J, se] = O(null), R = ce(
    () => ({ ...B, ...d }),
    [B, d]
  ), me = p ?? !!f, Pe = (z, q) => {
    U((te) => ({ ...te, [z]: q })), f == null || f(z, q);
  };
  Jr(() => {
    const z = W.current;
    if (!z) return;
    const q = () => {
      z.clientWidth > 0 && X(z.clientWidth);
    };
    if (q(), typeof ResizeObserver > "u") return;
    const te = new ResizeObserver((ye) => {
      var Me, ve;
      const pe = (ve = (Me = ye[0]) == null ? void 0 : Me.contentRect) == null ? void 0 : ve.width;
      typeof pe == "number" && pe > 0 ? X(Math.floor(pe)) : q();
    });
    return te.observe(z), () => te.disconnect();
  }, []);
  const je = (z, q) => typeof a == "function" ? a(z) : (z == null ? void 0 : z[a]) ?? q, ae = (z) => z.key in S ? S[z.key] ?? void 0 : z.fixed, oe = ce(() => {
    const z = j && j.length > 0 ? [...t].sort((pe, Me) => {
      const ve = j.indexOf(pe.key), fe = j.indexOf(Me.key);
      return ve === -1 && fe === -1 ? 0 : ve === -1 ? 1 : fe === -1 ? -1 : ve - fe;
    }) : t, q = [], te = [], ye = [];
    for (const pe of z) {
      const Me = ae(pe);
      Me === "left" ? q.push(pe) : Me === "right" ? ye.push(pe) : te.push(pe);
    }
    return [...q, ...te, ...ye];
  }, [t, S, j]), ue = Array.isArray(o) && typeof l == "function", F = !!(T != null && T.expandedRowRender), ee = ce(() => {
    if (!(T != null && T.defaultExpandAllRows)) return [];
    const z = [], q = (te) => {
      te.forEach((ye, pe) => {
        const Me = je(ye, pe);
        (!T.rowExpandable || T.rowExpandable(ye)) && z.push(Me), Array.isArray(ye.children) && ye.children.length > 0 && (z.push(Me), q(ye.children));
      });
    };
    return q(r), z;
  }, []), [de, H] = Je({
    value: T == null ? void 0 : T.expandedRowKeys,
    defaultValue: ee,
    onChange: T == null ? void 0 : T.onExpandedRowsChange
  }), G = (z) => {
    H(
      de.includes(z) ? de.filter((q) => q !== z) : [...de, z]
    );
  }, we = ce(() => {
    const z = [], q = (te, ye) => {
      te.forEach((pe, Me) => {
        const ve = je(pe, Me), fe = Array.isArray(pe.children) ? pe.children : [], ge = fe.length > 0;
        z.push({ record: pe, key: ve, rowIdx: Me, depth: ye, hasTreeChildren: ge }), ge && de.includes(ve) && q(fe, ye + 1);
      });
    };
    return q(r, 0), z;
  }, [r, de, a]), Te = ce(() => {
    const z = (ue ? 40 : 0) + (F ? 36 : 0), q = {};
    let te = 0;
    for (const fe of oe) {
      const ge = R[fe.key] ?? fe.width ?? 150;
      q[fe.key] = ge, te += ge;
    }
    const ye = { ...q }, pe = V, Me = pe > z + te ? pe - (z + te) : 0;
    if (Me > 0) {
      const fe = (Ie) => Ie.key === "__abc_actions__" || Ie.key in R || !!ae(Ie), ge = oe.filter((Ie) => !fe(Ie)), Ee = oe.filter((Ie) => Ie.key !== "__abc_actions__"), Le = ge.length > 0 ? ge : Ee;
      if (Le.length > 0) {
        const Ie = Math.floor(Me / Le.length);
        let Be = Me - Ie * Le.length;
        for (const Re of Le) {
          const We = Ie + (Be > 0 ? 1 : 0);
          Be > 0 && (Be -= 1), ye[Re.key] = q[Re.key] + We;
        }
      }
    }
    const ve = z + oe.reduce((fe, ge) => fe + (ye[ge.key] ?? 150), 0);
    return {
      resolvedWidths: ye,
      resolvedTableWidth: pe > 0 ? Math.max(pe, ve) : void 0
    };
  }, [oe, R, S, V, ue, F]), Ae = ce(() => {
    const z = {}, q = {};
    let te = "", ye = "", pe = (ue ? 40 : 0) + (F ? 36 : 0);
    for (const ve of oe)
      ae(ve) === "left" && (z[ve.key] = pe, pe += Te.resolvedWidths[ve.key] ?? 150, te = ve.key);
    let Me = 0;
    for (let ve = oe.length - 1; ve >= 0; ve--) {
      const fe = oe[ve];
      ae(fe) === "right" && (q[fe.key] = Me, Me += Te.resolvedWidths[fe.key] ?? 150, ye = fe.key);
    }
    return {
      leftOffsets: z,
      rightOffsets: q,
      lastLeftKey: te,
      firstRightKey: ye,
      hasAnyLeftFixed: !!te
    };
  }, [oe, Te, S, ue, F]), Ye = ce(
    () => we.map((z) => z.key),
    [we]
  ), sr = ue && Ye.length > 0 && Ye.every((z) => o.includes(z)), or = ue && !sr && Ye.some((z) => o.includes(z)), cr = (z) => {
    if (ue)
      if (z) {
        const q = Array.from(/* @__PURE__ */ new Set([...o, ...Ye]));
        l(
          q,
          we.filter((te) => q.includes(te.key)).map((te) => te.record)
        );
      } else {
        const q = o.filter((te) => !Ye.includes(te));
        l(q, []);
      }
  }, Mt = (z) => {
    if (!ue) return;
    const te = o.includes(z) ? o.filter((ye) => ye !== z) : [...o, z];
    l(
      te,
      we.filter((ye) => te.includes(ye.key)).map((ye) => ye.record)
    );
  }, ir = (z, q, te = "right") => {
    if (!me) return;
    z.preventDefault(), z.stopPropagation();
    const ye = z.clientX, pe = z.currentTarget.parentElement, Me = R[q.key] ?? q.width ?? Te.resolvedWidths[q.key] ?? (pe == null ? void 0 : pe.offsetWidth) ?? 140, ve = q.key === "__abc_actions__" ? 80 : 72, fe = typeof document < "u" ? document.body.style.cursor : "", ge = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const Ee = (Ie) => {
      const Be = Ie.clientX - ye, Re = te === "left" ? Math.max(ve, Math.round(Me - Be)) : Math.max(ve, Math.round(Me + Be));
      Pe(q.key, Re);
    }, Le = () => {
      typeof document < "u" && (document.body.style.cursor = fe, document.body.style.userSelect = ge), window.removeEventListener("mousemove", Ee), window.removeEventListener("mouseup", Le);
    };
    window.addEventListener("mousemove", Ee), window.addEventListener("mouseup", Le);
  };
  ie(() => {
    if (!P) return;
    const z = (q) => {
      if (q.key === "Escape") {
        const te = re.current;
        $(null), K(null), re.current = null, Ce.current = null, Q.current = !1, te && _ && _(te);
      }
    };
    return document.addEventListener("keydown", z, !0), () => document.removeEventListener("keydown", z, !0);
  }, [P, _]);
  const Rr = oe.map((z) => z.key).join("|");
  Jr(() => {
    const z = Ce.current;
    if (!z) return;
    Ce.current = null;
    const q = W.current;
    if (!q || A === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ye = A === "subtle" ? 140 : 220, pe = "cubic-bezier(0.22, 1, 0.36, 1)";
    q.querySelectorAll("[data-col-key]").forEach((Me) => {
      const ve = Me.dataset.colKey;
      if (!ve) return;
      const fe = z.get(ve);
      if (fe === void 0) return;
      const ge = Me.getBoundingClientRect().left, Ee = fe - ge;
      if (Math.abs(Ee) <= 1) return;
      typeof Me.animate == "function" && Me.animate([{ translate: `${Ee}px 0` }, { translate: "0 0" }], {
        duration: ye,
        easing: pe
      });
      const Le = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(ve) : ve, Ie = q.querySelectorAll(`[data-col-cell="${Le}"]`), Be = Math.min(Ie.length, 20);
      for (let Re = 0; Re < Be; Re++) {
        const We = Ie[Re];
        typeof We.animate == "function" && We.animate([{ translate: `${Ee}px 0` }, { translate: "0 0" }], {
          duration: ye,
          easing: pe
        });
      }
    });
  }, [Rr, A]);
  const zr = (z) => {
    if (!z.sortable || !b) return;
    const q = (i == null ? void 0 : i.key) === z.key ? i.direction : null, te = q === null ? "asc" : q === "asc" ? "desc" : null;
    b(z.key, te);
  };
  ie(() => {
    if (!J) return;
    const z = (te) => {
      var ye;
      te && te.type === "mousedown" && ((ye = Y.current) != null && ye.contains(te.target)) || se(null);
    }, q = (te) => {
      te.key === "Escape" && se(null);
    };
    return document.addEventListener("mousedown", z), document.addEventListener("keydown", q, !0), window.addEventListener("scroll", z, !0), () => {
      document.removeEventListener("mousedown", z), document.removeEventListener("keydown", q, !0), window.removeEventListener("scroll", z, !0);
    };
  }, [J]);
  const It = (z, q) => {
    if (q.key === "__abc_actions__" || !!!(q.sortable && b || v || N || E)) return;
    z.preventDefault();
    const ye = typeof window < "u" ? window.innerWidth : 1024, pe = typeof window < "u" ? window.innerHeight : 768;
    se({
      col: q,
      x: Math.max(8, Math.min(z.clientX, ye - 176 - 8)),
      y: Math.max(8, Math.min(z.clientY, pe - 220 - 8))
    });
  }, Et = oe.length + (ue ? 1 : 0) + (F ? 1 : 0), lr = J ? _r(W.current) : null;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: W,
      tabIndex: 0,
      role: "region",
      "aria-label": L,
      "data-motion": A,
      style: C !== void 0 ? { maxHeight: typeof C == "number" ? `${C}px` : C } : void 0,
      className: m(
        "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        M
      ),
      children: [
        /* @__PURE__ */ c(
          "table",
          {
            style: {
              width: Te.resolvedTableWidth ? `${Te.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ c("colgroup", { children: [
                ue && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                F && /* @__PURE__ */ e("col", { style: { width: "36px" } }),
                oe.map((z) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": z.key,
                    style: { width: `${Te.resolvedWidths[z.key]}px` }
                  },
                  z.key
                ))
              ] }),
              /* @__PURE__ */ c("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
                /* @__PURE__ */ c("tr", { children: [
                  ue && /* @__PURE__ */ e(
                    "th",
                    {
                      style: Ae.hasAnyLeftFixed ? { left: 0 } : void 0,
                      className: m(
                        "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-3 text-center",
                        Ae.hasAnyLeftFixed && "sticky z-20"
                      ),
                      children: /* @__PURE__ */ e(
                        tr,
                        {
                          checked: sr,
                          indeterminate: or,
                          onChange: cr
                        }
                      )
                    }
                  ),
                  F && /* @__PURE__ */ e(
                    "th",
                    {
                      style: Ae.hasAnyLeftFixed ? { left: ue ? 40 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: m(
                        "w-9 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        Ae.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  oe.map((z) => {
                    const q = Te.resolvedWidths[z.key], te = ae(z), ye = (i == null ? void 0 : i.key) === z.key ? i.direction : null, pe = P === z.key, Me = {
                      width: q ? `${q}px` : void 0,
                      ...te === "left" ? { left: `${Ae.leftOffsets[z.key] ?? 0}px` } : {},
                      ...te === "right" ? { right: `${Ae.rightOffsets[z.key] ?? 0}px` } : {}
                    }, ve = (fe) => {
                      if (!P || !_) return;
                      const ge = j && j.length > 0 ? j : oe.filter((Re) => Re.key !== "__abc_actions__").map((Re) => Re.key), Ee = ge.indexOf(P), Le = ge.indexOf(fe);
                      if (Ee < 0 || Le < 0 || Ee === Le) return;
                      if (W.current) {
                        const Re = /* @__PURE__ */ new Map();
                        W.current.querySelectorAll("[data-col-key]").forEach((We) => {
                          const Kt = We.dataset.colKey;
                          Kt && Re.set(Kt, We.getBoundingClientRect().left);
                        }), Ce.current = Re;
                      }
                      const Ie = [...ge], [Be] = Ie.splice(Ee, 1);
                      Ie.splice(Le, 0, Be), Q.current = !0, K(Ie), _(Ie);
                    };
                    return /* @__PURE__ */ c(
                      "th",
                      {
                        "data-col-key": z.key,
                        "data-dragging": pe ? "true" : void 0,
                        draggable: !!(_ && !te && z.key !== "__abc_actions__"),
                        onContextMenu: (fe) => It(fe, z),
                        onDragStart: (fe) => {
                          const ge = oe.filter((Ee) => Ee.key !== "__abc_actions__").map((Ee) => Ee.key);
                          re.current = ge, Q.current = !1, $(z.key), K(ge), fe.dataTransfer && (fe.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (fe) => {
                          if (!P || P === z.key || te || z.key === "__abc_actions__" || !_)
                            return;
                          fe.preventDefault();
                          const ge = j && j.length > 0 ? j : oe.filter((Be) => Be.key !== "__abc_actions__").map((Be) => Be.key), Ee = ge.indexOf(P), Le = ge.indexOf(z.key);
                          if (Ee < 0 || Le < 0 || Ee === Le) return;
                          const Ie = fe.currentTarget.getBoundingClientRect();
                          Ie.width > 0 && (Ee < Le && fe.clientX < Ie.left + Ie.width * 0.35 || Ee > Le && fe.clientX > Ie.left + Ie.width * 0.65) || ve(z.key);
                        },
                        onDrop: () => {
                          P && P !== z.key && !Q.current && !te && z.key !== "__abc_actions__" && ve(z.key), $(null), K(null), re.current = null, Q.current = !1;
                        },
                        onDragEnd: () => {
                          $(null), K(null), re.current = null, Q.current = !1;
                        },
                        style: Me,
                        className: m(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          Xr[s],
                          z.align === "center" && "text-center",
                          z.align === "right" && "text-right",
                          te === "left" && "sticky z-20",
                          te === "right" && "sticky z-20",
                          pe && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
                          z.key === Ae.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.12)]",
                          z.key === Ae.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.12)]"
                        ),
                        children: [
                          /* @__PURE__ */ c(
                            "div",
                            {
                              className: m(
                                "inline-flex items-center gap-1",
                                z.align === "right" && "justify-end",
                                z.align === "center" && "justify-center"
                              ),
                              children: [
                                /* @__PURE__ */ c(
                                  "span",
                                  {
                                    className: m(
                                      "inline-flex items-center gap-1",
                                      z.sortable && "cursor-pointer hover:text-[var(--abc-primary)]"
                                    ),
                                    onClick: () => zr(z),
                                    children: [
                                      _ && !te && z.key !== "__abc_actions__" && /* @__PURE__ */ e(ya, { className: "h-3 w-3 cursor-grab text-[var(--abc-fg-placeholder)] opacity-0 transition-opacity group-hover:opacity-100" }),
                                      /* @__PURE__ */ e("span", { children: z.title }),
                                      z.tooltip && /* @__PURE__ */ e(qe, { content: z.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (fe) => fe.stopPropagation(),
                                          className: "inline-flex text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                                          children: /* @__PURE__ */ e(Cr, { className: "h-3 w-3" })
                                        }
                                      ) }),
                                      z.sortable && /* @__PURE__ */ e("span", { className: "inline-flex text-[var(--abc-fg-muted)]", children: ye === "asc" ? /* @__PURE__ */ e(ta, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : ye === "desc" ? /* @__PURE__ */ e(ra, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(Oa, { className: "h-3 w-3 opacity-50" }) })
                                    ]
                                  }
                                ),
                                g && z.filterable && /* @__PURE__ */ e(
                                  "span",
                                  {
                                    onClick: (fe) => fe.stopPropagation(),
                                    className: "inline-flex items-center",
                                    children: g(z)
                                  }
                                )
                              ]
                            }
                          ),
                          me && (te === "right" ? /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${z.title} 列宽`,
                              onMouseDown: (fe) => ir(fe, z, "left"),
                              className: "absolute top-0 bottom-0 left-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ) : /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${z.title} 列宽`,
                              onMouseDown: (fe) => ir(fe, z, "right"),
                              className: "absolute top-0 right-0 bottom-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ))
                        ]
                      },
                      z.key
                    );
                  })
                ] }),
                u && /* @__PURE__ */ c("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  ue && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-3 py-1.5" }),
                  F && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  oe.map((z) => {
                    const q = ae(z);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...q === "left" ? { left: `${Ae.leftOffsets[z.key] ?? 0}px` } : {},
                          ...q === "right" ? { right: `${Ae.rightOffsets[z.key] ?? 0}px` } : {}
                        },
                        className: m(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          q === "left" && "sticky z-20",
                          q === "right" && "sticky z-20"
                        ),
                        children: z.filterable ? z.filterType === "select" && z.filterOptions ? /* @__PURE__ */ e(
                          Nt,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: "全部",
                            options: z.filterOptions,
                            value: x[z.key] ?? "",
                            onChange: (te) => h == null ? void 0 : h(z.key, te)
                          }
                        ) : /* @__PURE__ */ e(
                          et,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: `筛选${z.title}`,
                            value: x[z.key] ?? "",
                            onChange: (te) => h == null ? void 0 : h(z.key, te.target.value)
                          }
                        ) : null
                      },
                      `${z.key}_filter`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e("tbody", { children: n ? Array.from({ length: 5 }).map((z, q) => /* @__PURE__ */ c("tr", { children: [
                ue && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-3 py-3 text-center", children: /* @__PURE__ */ e(He, { width: 16, height: 16 }) }),
                F && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                oe.map((te) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: m("border-b border-[var(--abc-border)]", Xr[s]),
                    children: /* @__PURE__ */ e(He, { variant: "text", className: "w-4/5" })
                  },
                  te.key
                ))
              ] }, `sk_${q}`)) : we.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: Et, children: /* @__PURE__ */ e(ji, { title: D, onReset: w }) }) }) : we.map(({ record: z, key: q, rowIdx: te, depth: ye, hasTreeChildren: pe }) => {
                const Me = !!(ue && o.includes(q)), ve = de.includes(q), fe = F && (!(T != null && T.rowExpandable) || T.rowExpandable(z));
                return /* @__PURE__ */ c(Oe.Fragment, { children: [
                  /* @__PURE__ */ c(
                    "tr",
                    {
                      className: m(
                        "group transition-colors duration-150",
                        Me ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85"
                      ),
                      children: [
                        ue && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Ae.hasAnyLeftFixed ? { left: 0 } : void 0,
                            className: m(
                              "border-b border-[var(--abc-border)] px-3 py-2.5 text-center",
                              Ae.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: /* @__PURE__ */ e(tr, { checked: Me, onChange: () => Mt(q) })
                          }
                        ),
                        F && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Ae.hasAnyLeftFixed ? { left: ue ? 40 : 0 } : void 0,
                            className: m(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center",
                              Ae.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: fe && /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": ve ? "收起详情行" : "展开详情行",
                                "aria-expanded": ve,
                                onClick: () => G(q),
                                className: "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                children: /* @__PURE__ */ e(
                                  bt,
                                  {
                                    className: m(
                                      "h-3.5 w-3.5 transition-transform duration-150",
                                      ve && "rotate-90 text-[var(--abc-primary)]"
                                    )
                                  }
                                )
                              }
                            )
                          }
                        ),
                        oe.map((ge, Ee) => {
                          const Le = ge.dataIndex ?? ge.key, Ie = z == null ? void 0 : z[Le], Be = ae(ge), Re = ge.render ? ge.render(Ie, z, te) : Xl(Ie, z, ge, k), We = Ee === 0 && (ye > 0 || pe);
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": ge.key,
                              style: {
                                ...Be === "left" ? { left: `${Ae.leftOffsets[ge.key] ?? 0}px` } : {},
                                ...Be === "right" ? { right: `${Ae.rightOffsets[ge.key] ?? 0}px` } : {}
                              },
                              className: m(
                                "border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                Xr[s],
                                ge.align === "center" && "text-center",
                                ge.align === "right" && "text-right",
                                P === ge.key && "bg-[var(--abc-primary-soft)]/30",
                                Be === "left" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                Be === "right" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                ge.key === Ae.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.08)]",
                                ge.key === Ae.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.08)]"
                              ),
                              children: We ? /* @__PURE__ */ c(
                                "div",
                                {
                                  style: { paddingLeft: `${ye * 18}px` },
                                  className: "inline-flex items-center gap-1",
                                  children: [
                                    pe ? /* @__PURE__ */ e(
                                      "button",
                                      {
                                        type: "button",
                                        "aria-label": ve ? "收起子项" : "展开子项",
                                        "aria-expanded": ve,
                                        onClick: () => G(q),
                                        className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                        children: /* @__PURE__ */ e(
                                          bt,
                                          {
                                            className: m(
                                              "h-3 w-3 transition-transform duration-150",
                                              ve && "rotate-90 text-[var(--abc-primary)]"
                                            )
                                          }
                                        )
                                      }
                                    ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                                    /* @__PURE__ */ e("span", { className: "min-w-0", children: Re })
                                  ]
                                }
                              ) : Re
                            },
                            ge.key
                          );
                        })
                      ]
                    }
                  ),
                  fe && ve && (T == null ? void 0 : T.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: Et,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: T.expandedRowRender(z, te)
                    }
                  ) })
                ] }, String(q));
              }) })
            ]
          }
        ),
        J && lr && tt(
          /* @__PURE__ */ c(
            "div",
            {
              ref: Y,
              role: "menu",
              "aria-label": `${J.col.title} 列操作菜单`,
              "data-abc-floating": "",
              "data-motion": A,
              style: { top: `${J.y}px`, left: `${J.x}px` },
              className: m(
                "fixed z-[1350] w-44 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
                A !== "none" && "abc-animate-popover-in"
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "truncate border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: [
                  "列：",
                  J.col.title
                ] }),
                J.col.sortable && b && /* @__PURE__ */ c("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(J.col.key, "asc"), se(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(ta, { className: "h-3.5 w-3.5" }),
                          " 升序排列"
                        ] }),
                        (i == null ? void 0 : i.key) === J.col.key && i.direction === "asc" && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(J.col.key, "desc"), se(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(ra, { className: "h-3.5 w-3.5" }),
                          " 降序排列"
                        ] }),
                        (i == null ? void 0 : i.key) === J.col.key && i.direction === "desc" && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  (i == null ? void 0 : i.key) === J.col.key && i.direction && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(J.col.key, null), se(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(Oa, { className: "h-3.5 w-3.5" }),
                        " 清除排序"
                      ]
                    }
                  )
                ] }),
                v && /* @__PURE__ */ c("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const z = ae(J.col);
                        v(J.col.key, z === "left" ? null : "left"), se(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5 -rotate-45" }),
                          " 固定到左侧"
                        ] }),
                        ae(J.col) === "left" && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const z = ae(J.col);
                        v(J.col.key, z === "right" ? null : "right"), se(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5 rotate-45" }),
                          " 固定到右侧"
                        ] }),
                        ae(J.col) === "right" && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  ae(J.col) && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        v(J.col.key, null), se(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(gc, { className: "h-3.5 w-3.5" }),
                        " 取消固定"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "pt-1", children: [
                  N && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        N(J.col.key), se(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(Cn, { className: "h-3.5 w-3.5" }),
                        " 隐藏此列"
                      ]
                    }
                  ),
                  E && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        E(), se(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5" }),
                        " 重置列配置"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          lr
        )
      ]
    }
  );
}
const Zl = ht.forwardRef(
  ({ className: t, scrollLabel: r, wrapperClassName: a, ...n }, s) => /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "table-wrapper",
      role: r ? "region" : void 0,
      "aria-label": r,
      tabIndex: r ? 0 : void 0,
      className: m(
        "relative w-full max-w-full overflow-auto [container-type:inline-size] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        a
      ),
      children: /* @__PURE__ */ e(
        "table",
        {
          ref: s,
          className: m("w-full caption-bottom text-sm border-collapse text-[var(--abc-fg)]", t),
          ...n
        }
      )
    }
  )
);
Zl.displayName = "Table";
const Jl = ht.forwardRef(
  ({ className: t, sticky: r = !1, ...a }, n) => /* @__PURE__ */ e(
    "thead",
    {
      ref: n,
      className: m(
        "bg-[var(--abc-bg-muted)] [&_tr]:border-b [&_tr]:border-[var(--abc-border)]",
        r && "sticky top-0 z-10 bg-[var(--abc-bg-surface)] backdrop-blur-xs shadow-[0_1px_0_0_var(--abc-border)]",
        t
      ),
      ...a
    }
  )
);
Jl.displayName = "TableHeader";
const Ql = ht.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: m("[&_tr:last-child]:border-0", t), ...r }));
Ql.displayName = "TableBody";
const ed = ht.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: m("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
ed.displayName = "TableFooter";
const td = ht.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tr",
  {
    ref: a,
    className: m(
      "border-b border-[var(--abc-border)] transition-colors hover:bg-[var(--abc-bg-subtle)] data-[state=selected]:bg-[var(--abc-primary-soft)]",
      t
    ),
    ...r
  }
));
td.displayName = "TableRow";
const rd = ht.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
  "th",
  {
    ref: n,
    scope: r,
    className: m(
      "h-10 px-3 text-left align-middle text-[11px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]",
      t
    ),
    ...a
  }
));
rd.displayName = "TableHead";
const ad = ht.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: m("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
ad.displayName = "TableCell";
const nd = ht.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: m("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
nd.displayName = "TableCaption";
const sd = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, od = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, cd = {
  mode: "sidebar",
  sidebarTone: "dark",
  sidebarCollapsed: !1,
  sidebarAccordion: !0,
  showTabs: !0,
  tabStyle: "card",
  keepAlive: !0,
  contentWidth: "fluid",
  headerBlur: !0,
  showBreadcrumb: !0,
  showFooter: !1
}, St = {
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
}, it = "transition-[background-color,color,box-shadow,transform] duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-active)] motion-safe:enabled:active:scale-[var(--abc-press-scale)]";
function lt(t, r) {
  var a;
  return t.path && (r === t.path || r.startsWith(`${t.path}/`)) ? !0 : !!((a = t.children) != null && a.some((n) => lt(n, r)));
}
function es(t, r, a = []) {
  var n;
  for (const s of t) {
    const o = [...a, s];
    if (s.path === r) return o;
    if ((n = s.children) != null && n.length) {
      const l = es(s.children, r, o);
      if (l.length > 0) return l;
    }
  }
  return [];
}
function st(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(yt, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const Ma = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: o = 0 }) => {
  const l = St[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: m(
        "space-y-0.5",
        o > 0 && m("border-l border-[var(--abc-border)]", l.flyoutSubIndent)
      ),
      children: t.map((i) => {
        const b = !!(i.children && i.children.length > 0), u = i.path === r, x = b && lt(i, r);
        return b ? /* @__PURE__ */ c("div", { className: "py-0.5", children: [
          /* @__PURE__ */ c(
            "div",
            {
              className: m(
                "flex items-center gap-1.5 font-semibold select-none",
                l.flyoutHeadingText,
                x ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
              ),
              children: [
                st(i.icon, a, l.flyoutHeadingIcon),
                /* @__PURE__ */ e("span", { className: "truncate", children: i.label })
              ]
            }
          ),
          /* @__PURE__ */ e(
            Ma,
            {
              items: i.children,
              pathname: r,
              registry: a,
              size: n,
              onSelect: s,
              depth: o + 1
            }
          )
        ] }, i.key) : /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            role: "menuitem",
            disabled: i.disabled,
            onClick: () => {
              !i.disabled && i.path && s(i.path, i);
            },
            className: m(
              "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
              it,
              l.flyoutItem,
              u ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
              i.disabled && "opacity-45 cursor-not-allowed"
            ),
            children: [
              st(i.icon, a, l.flyoutIcon),
              /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: i.label }),
              i.badge !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: m(
                    "rounded-full bg-[var(--abc-primary-soft)] font-mono text-[var(--abc-primary)]",
                    l.badge
                  ),
                  children: i.badge
                }
              )
            ]
          },
          i.key
        );
      })
    }
  );
}, Dt = ({ brand: t, collapsed: r = !1, tone: a = "light", size: n, className: s }) => {
  const o = be(n, "sm"), l = St[o], i = a === "dark", b = ce(() => t.logo ? typeof t.logo == "string" ? Zn(t.logo) ? /* @__PURE__ */ e(
    "div",
    {
      className: m(
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
      className: m("shrink-0 rounded-[var(--abc-radius-md)] object-contain", l.brandLogoBox)
    }
  ) : /* @__PURE__ */ e("div", { className: "shrink-0", children: t.logo }) : /* @__PURE__ */ e(
    "div",
    {
      className: m(
        "flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-[var(--abc-motion-fast)] group-hover:scale-[1.03]",
        l.brandLogoBox
      ),
      children: t.name.slice(0, 1).toUpperCase()
    }
  ), [t.logo, t.name, l.brandLogoBox]);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-size": o,
      className: m(
        "group flex items-center select-none",
        l.brandGap,
        r ? m("justify-center", l.brandWrapCollapsed) : l.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            onClick: t.onClick,
            className: m(
              "flex min-w-0 flex-1 items-center",
              l.brandGap,
              t.onClick && "cursor-pointer"
            ),
            children: [
              b,
              !r && /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: m(
                      "truncate font-bold tracking-tight",
                      l.brandTitle,
                      i ? "text-white" : "text-[var(--abc-fg)]"
                    ),
                    children: t.name
                  }
                ),
                t.subtitle && /* @__PURE__ */ e(
                  "div",
                  {
                    className: m(
                      "truncate",
                      l.brandSubtitle,
                      i ? "text-slate-400" : "text-[var(--abc-fg-muted)]"
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
            onClick: (u) => {
              var x;
              u.stopPropagation(), (x = t.onEditBrand) == null || x.call(t);
            },
            className: m(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              i ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(xc, { className: l.brandEditIcon })
          }
        )
      ]
    }
  );
}, id = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const i = St[s], [b, u] = O(!1), { isMounted: x, isVisible: h } = Ct(b, o === "none" ? 0 : 140), g = le(null), d = le(null), f = le(null), p = $e(), y = lt(t, r), { style: S, actualSide: v, portalContainer: N } = ar({
    open: x,
    triggerRef: g,
    floatingRef: d,
    placement: "rightStart",
    offset: 8
  }), E = he(() => {
    f.current !== null && typeof window < "u" && (window.clearTimeout(f.current), f.current = null);
  }, []);
  ie(() => () => E(), [E]);
  const _ = () => {
    E(), u(!0);
  }, T = () => {
    E(), typeof window < "u" && (f.current = window.setTimeout(() => {
      u(!1), f.current = null;
    }, 140));
  };
  return ie(() => {
    if (!b) return;
    const k = (C) => {
      var D, M;
      const L = C.target;
      (D = g.current) != null && D.contains(L) || (M = d.current) != null && M.contains(L) || u(!1);
    }, w = (C) => {
      var L;
      C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), u(!1), (L = g.current) == null || L.focus());
    };
    return document.addEventListener("mousedown", k), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", k), document.removeEventListener("keydown", w, !0);
    };
  }, [b]), /* @__PURE__ */ c(De, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: _, onMouseLeave: T, children: /* @__PURE__ */ e(
      "button",
      {
        ref: g,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": b,
        "aria-haspopup": "menu",
        "aria-controls": b ? p : void 0,
        onClick: () => u((k) => !k),
        onKeyDown: (k) => {
          (k.key === "ArrowRight" || k.key === "ArrowDown") && (k.preventDefault(), u(!0), window.requestAnimationFrame(() => {
            var w, C;
            (C = (w = d.current) == null ? void 0 : w.querySelector('[role="menuitem"]:not(:disabled)')) == null || C.focus();
          }));
        },
        className: m(
          "flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer",
          it,
          i.collapsedBtn,
          y ? a ? "bg-white/12 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : a ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: st(t.icon ?? "folder", n, i.collapsedIcon)
      }
    ) }),
    x && N && tt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: d,
          id: p,
          role: "menu",
          "aria-label": t.label,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": v,
          style: S,
          onMouseEnter: _,
          onMouseLeave: T,
          onKeyDown: (k) => {
            var L, D, M;
            const w = Array.from(
              ((L = d.current) == null ? void 0 : L.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const C = w.indexOf(document.activeElement);
            k.key === "ArrowDown" ? (k.preventDefault(), (D = w[(C + 1) % w.length]) == null || D.focus()) : k.key === "ArrowUp" && (k.preventDefault(), (M = w[(C - 1 + w.length) % w.length]) == null || M.focus());
          },
          className: m(
            "z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
            // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
            v === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
            i.flyoutPanel,
            o !== "none" && (h ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: m(
                  "mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]",
                  i.flyoutHeader
                ),
                children: t.label
              }
            ),
            /* @__PURE__ */ e(
              Ma,
              {
                items: t.children ?? [],
                pathname: r,
                registry: n,
                size: s,
                onSelect: (k, w) => {
                  l(k, w), u(!1);
                }
              }
            )
          ]
        }
      ),
      N
    )
  ] });
}, qr = ({
  brand: t,
  items: r,
  pathname: a,
  collapsed: n = !1,
  accordion: s = !0,
  tone: o = "dark",
  size: l,
  motion: i,
  onNavigate: b,
  className: u
}) => {
  const { iconRegistry: x } = Ve(), h = be(l, "sm"), g = ne(i), d = St[h], f = o === "dark", [p, y] = O(
    () => r.filter((v) => {
      var N;
      return ((N = v.children) == null ? void 0 : N.length) && lt(v, a);
    }).map((v) => v.key)
  );
  ie(() => {
    const v = r.filter((N) => {
      var E;
      return ((E = N.children) == null ? void 0 : E.length) && lt(N, a);
    }).map((N) => N.key);
    v.length > 0 && y(
      (N) => s ? [v[0]] : Array.from(/* @__PURE__ */ new Set([...N, ...v]))
    );
  }, [a, r, s]);
  const S = (v) => {
    y((N) => N.includes(v) ? N.filter((E) => E !== v) : s ? [v] : [...N, v]);
  };
  return /* @__PURE__ */ c(
    "aside",
    {
      "aria-label": "侧边主导航",
      "data-size": h,
      "data-motion": g,
      style: {
        width: n ? "var(--abc-sidebar-collapsed-w)" : "var(--abc-sidebar-w)"
      },
      className: m(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        f ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        u
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: m(
              "flex h-[var(--abc-header-h)] shrink-0 items-center border-b",
              f ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              Dt,
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
        /* @__PURE__ */ e("nav", { className: m("flex-1 overflow-y-auto", d.navPadding), children: r.map((v) => {
          const N = !!(v.children && v.children.length > 0), E = v.path === a, _ = lt(v, a), T = p.includes(v.key);
          if (!N) {
            const k = /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                disabled: v.disabled,
                "aria-label": n ? v.label : void 0,
                onClick: () => v.path && b(v.path, v),
                className: m(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  it,
                  d.itemButton,
                  n && m("justify-center px-0", d.collapsedBtn),
                  E ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : f ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  v.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  st(v.icon, x, n ? d.collapsedIcon : d.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: v.label }),
                  !n && v.badge !== void 0 && /* @__PURE__ */ e("span", { className: m("rounded-full bg-white/15 font-mono", d.badge), children: v.badge })
                ]
              },
              v.key
            );
            return n ? /* @__PURE__ */ e(
              qe,
              {
                content: v.label,
                placement: "right",
                motion: g,
                className: "flex w-full",
                children: k
              },
              v.key
            ) : k;
          }
          return n ? /* @__PURE__ */ e(
            id,
            {
              item: v,
              pathname: a,
              isDark: f,
              registry: x,
              size: h,
              motion: g,
              onNavigate: b
            },
            v.key
          ) : /* @__PURE__ */ c("div", { className: "relative", children: [
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-expanded": T,
                onClick: () => S(v.key),
                className: m(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  it,
                  d.itemButton,
                  _ ? f ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : f ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  st(v.icon, x, d.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: v.label }),
                  /* @__PURE__ */ e(
                    ct,
                    {
                      className: m(
                        "shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]",
                        d.chevron,
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
                inert: !T,
                className: m(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  T ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: m(
                      "border-l",
                      d.subWrap,
                      f ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: v.children.map((k) => {
                      const w = k.path === a;
                      return /* @__PURE__ */ c(
                        "button",
                        {
                          type: "button",
                          disabled: k.disabled,
                          onClick: () => k.path && b(k.path, k),
                          className: m(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            it,
                            d.subButton,
                            w ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : f ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            k.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            st(k.icon, x, d.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: k.label }),
                            k.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: m(
                                  "rounded-full font-mono",
                                  d.badge,
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
          ] }, v.key);
        }) })
      ]
    }
  );
}, ld = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const i = St[s], [b, u] = O(!1), { isMounted: x, isVisible: h } = Ct(b, o === "none" ? 0 : 140), g = le(null), d = le(null), f = le(null), p = $e(), { style: y, actualSide: S, portalContainer: v } = ar({
    open: x,
    triggerRef: g,
    floatingRef: d,
    placement: "bottomLeft",
    offset: 6
  }), N = he(() => {
    f.current !== null && typeof window < "u" && (window.clearTimeout(f.current), f.current = null);
  }, []);
  ie(() => () => N(), [N]);
  const E = () => {
    N(), u(!0);
  }, _ = () => {
    N(), typeof window < "u" && (f.current = window.setTimeout(() => {
      u(!1), f.current = null;
    }, 150));
  };
  ie(() => {
    if (!b) return;
    const k = (C) => {
      var D, M;
      const L = C.target;
      (D = g.current) != null && D.contains(L) || (M = d.current) != null && M.contains(L) || u(!1);
    }, w = (C) => {
      var L;
      C.key === "Escape" && (C.preventDefault(), C.stopPropagation(), u(!1), (L = g.current) == null || L.focus());
    };
    return document.addEventListener("mousedown", k), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", k), document.removeEventListener("keydown", w, !0);
    };
  }, [b]);
  const T = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var k, w;
      (w = (k = d.current) == null ? void 0 : k.querySelector('[role="menuitem"]:not(:disabled)')) == null || w.focus();
    });
  };
  return /* @__PURE__ */ c(De, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: E,
        onMouseLeave: _,
        className: "relative flex-none",
        children: /* @__PURE__ */ c(
          "button",
          {
            ref: g,
            type: "button",
            "aria-expanded": b,
            "aria-haspopup": "menu",
            "aria-controls": b ? p : void 0,
            onClick: () => u((k) => !k),
            onKeyDown: (k) => {
              k.key === "ArrowDown" && (k.preventDefault(), u(!0), T());
            },
            className: m(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              it,
              i.topItem,
              a ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : b ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              st(t.icon, n, i.topIcon),
              /* @__PURE__ */ e("span", { children: t.label }),
              /* @__PURE__ */ e(
                ct,
                {
                  className: m(
                    "opacity-70 transition-transform duration-[var(--abc-motion-fast)]",
                    i.topChevron,
                    b && "rotate-180 text-[var(--abc-primary)] opacity-100"
                  )
                }
              )
            ]
          }
        )
      }
    ),
    x && v && tt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: d,
          id: p,
          role: "menu",
          "aria-label": `${t.label} 子菜单`,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": S,
          style: y,
          onMouseEnter: E,
          onMouseLeave: _,
          onKeyDown: (k) => {
            var L, D, M, A, W;
            const w = Array.from(
              ((L = d.current) == null ? void 0 : L.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const C = w.indexOf(document.activeElement);
            k.key === "ArrowDown" ? (k.preventDefault(), (D = w[(C + 1) % w.length]) == null || D.focus()) : k.key === "ArrowUp" ? (k.preventDefault(), (M = w[(C - 1 + w.length) % w.length]) == null || M.focus()) : k.key === "Home" ? (k.preventDefault(), (A = w[0]) == null || A.focus()) : k.key === "End" && (k.preventDefault(), (W = w[w.length - 1]) == null || W.focus());
          },
          className: m(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            S === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            i.flyoutPanel,
            o !== "none" && (h ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            Ma,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (k, w) => {
                l(k, w), u(!1);
              }
            }
          )
        }
      ),
      v
    )
  ] });
}, nn = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: l,
  onNavigate: i
}) => {
  const { iconRegistry: b } = Ve(), u = be(s, "sm"), x = ne(o), h = St[u];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": u,
      "data-motion": x,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((g) => {
        var f;
        const d = a ? n === g.key : lt(g, r);
        return a || !((f = g.children) != null && f.length) ? /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => {
              a && l ? l(g) : g.path && i(g.path, g);
            },
            className: m(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              it,
              h.topItem,
              d ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              st(g.icon, b, h.topIcon),
              /* @__PURE__ */ e("span", { children: g.label })
            ]
          },
          g.key
        ) : /* @__PURE__ */ e(
          ld,
          {
            item: g,
            pathname: r,
            isActive: d,
            registry: b,
            size: u,
            motion: x,
            onNavigate: i
          },
          g.key
        );
      })
    }
  );
}, dd = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: l, onNavigate: i }) => {
  const { iconRegistry: b } = Ve(), u = be(s, "sm"), x = ne(o), h = St[u], g = n === "dark", d = ce(
    () => r.find((v) => lt(v, a)) ?? r[0],
    [r, a]
  ), [f, p] = O((d == null ? void 0 : d.key) ?? "");
  ie(() => {
    d != null && d.key && p(d.key);
  }, [d == null ? void 0 : d.key]);
  const y = r.find((v) => v.key === f) ?? d, S = (y == null ? void 0 : y.children) ?? [];
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": u,
      "data-motion": x,
      className: m("flex h-full shrink-0 select-none", l),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: m(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              g ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Dt, { brand: t, collapsed: !0, tone: n, size: u }) }),
              /* @__PURE__ */ e("div", { className: m("flex w-full flex-1 flex-col items-center overflow-y-auto", h.dualRailWrap), children: r.map((v) => {
                const N = v.key === (y == null ? void 0 : y.key);
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var E, _, T;
                      p(v.key), !((E = v.children) != null && E.length) && v.path ? i(v.path, v) : (T = (_ = v.children) == null ? void 0 : _[0]) != null && T.path && i(v.children[0].path, v.children[0]);
                    },
                    className: m(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      it,
                      h.dualRailItem,
                      N ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : g ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      st(v.icon ?? "folder", b, h.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: m("truncate", h.dualRailLabelMaxW), children: v.label.slice(0, 4) })
                    ]
                  },
                  v.key
                );
              }) })
            ]
          }
        ),
        S.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            style: { width: "var(--abc-dual-panel-w)" },
            className: "flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: m(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    h.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: m("truncate font-bold text-[var(--abc-fg)]", h.dualPanelTitle), children: y == null ? void 0 : y.label }),
                    /* @__PURE__ */ e(bt, { className: m("text-[var(--abc-fg-muted)]", h.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: m("flex-1 overflow-y-auto", h.dualPanelWrap), children: S.map((v) => {
                const N = v.path === a;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    disabled: v.disabled,
                    onClick: () => !v.disabled && v.path && i(v.path, v),
                    className: m(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      it,
                      h.dualPanelItem,
                      N ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      v.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      st(v.icon, b, h.dualPanelIcon),
                      /* @__PURE__ */ e("span", { className: "truncate", children: v.label })
                    ]
                  },
                  v.key
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}, bd = {
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
}, ud = ({
  tabs: t,
  activePath: r,
  variant: a = "card",
  size: n,
  motion: s,
  onSelect: o,
  onClose: l,
  onCloseOthers: i,
  onCloseRight: b,
  onCloseAll: u,
  onTogglePin: x,
  onRefresh: h,
  className: g
}) => {
  var S;
  const { iconRegistry: d } = Ve(), f = be(n, "sm"), p = ne(s), y = bd[f];
  return t.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      "data-size": f,
      "data-motion": p,
      className: m(
        "flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none",
        y.barPadding,
        g
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]", children: t.map((v) => {
          const N = v.path === r, E = v.closable !== !1 && !v.pinned, _ = a === "pill" ? N ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? N ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : N ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ c(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(v.path),
              onKeyDown: (T) => {
                (T.key === "Enter" || T.key === " ") && (T.preventDefault(), o(v.path));
              },
              className: m(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                y.tabItem,
                _
              ),
              children: [
                v.pinned && /* @__PURE__ */ e(Pt, { className: m("shrink-0 opacity-75", y.pinIcon) }),
                v.icon && (typeof v.icon == "string" ? /* @__PURE__ */ e(yt, { name: v.icon, size: y.tabIcon, registry: d }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: v.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: v.title }),
                E && l && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${v.title}`,
                    onClick: (T) => {
                      T.stopPropagation(), l(v.path);
                    },
                    className: m(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && N ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(Ue, { className: y.closeIcon })
                  }
                )
              ]
            },
            v.path
          );
        }) }),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
          h && /* @__PURE__ */ e(qe, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => h(r),
              className: m(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                y.actionBtn
              ),
              children: /* @__PURE__ */ e(Ir, { className: y.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            jt,
            {
              items: [
                ...x ? [
                  {
                    key: "pin",
                    label: (S = t.find((v) => v.path === r)) != null && S.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }),
                    onClick: () => x(r)
                  }
                ] : [],
                ...i ? [
                  {
                    key: "others",
                    label: "关闭其他页签",
                    onClick: () => i(r)
                  }
                ] : [],
                ...b ? [
                  {
                    key: "right",
                    label: "关闭右侧页签",
                    onClick: () => b(r)
                  }
                ] : [],
                ...u ? [
                  {
                    key: "all",
                    label: "关闭全部可关页签",
                    danger: !0,
                    dividerAbove: !0,
                    onClick: () => u()
                  }
                ] : []
              ],
              children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "页签批量操作",
                  className: m(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    y.actionBtn
                  ),
                  children: /* @__PURE__ */ e(ha, { className: y.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, md = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o = 0,
  activeClassName: l,
  children: i
}) => {
  const b = le(/* @__PURE__ */ new Map()), u = le(0), x = le(/* @__PURE__ */ new Map()), h = le(t);
  if (ie(() => {
    const d = s == null ? void 0 : s.current;
    if (!d) return;
    h.current && h.current !== t && x.current.set(h.current, d.scrollTop), h.current = t;
    const f = x.current.get(t) ?? 0;
    requestAnimationFrame(() => {
      s != null && s.current && (s.current.scrollTop = f);
    });
  }, [t, s]), ie(() => {
    if (typeof window > "u") return;
    const d = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(d);
  }, [t]), !r)
    return b.current.clear(), /* @__PURE__ */ e("div", { className: m("min-h-full", l), children: i }, `${t}_${o}`);
  if (n && n.length > 0) {
    const d = /* @__PURE__ */ new Set([...n, t]);
    for (const f of Array.from(b.current.keys()))
      d.has(f) || (b.current.delete(f), x.current.delete(f));
  }
  u.current += 1;
  const g = b.current.get(t);
  for (b.current.set(t, {
    key: t,
    seed: o,
    lastActiveTick: u.current,
    node: g && g.seed === o ? g.node : i
  }); b.current.size > a; ) {
    let d = null, f = 1 / 0;
    for (const [p, y] of b.current.entries())
      p !== t && y.lastActiveTick < f && (f = y.lastActiveTick, d = p);
    if (d)
      b.current.delete(d);
    else
      break;
  }
  return /* @__PURE__ */ e(De, { children: Array.from(b.current.values()).map((d) => {
    const f = d.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: f ? "block" : "none" },
        className: m("min-h-full", f && l),
        children: d.node
      },
      `${d.key}_${d.seed}`
    );
  }) });
}, ts = "abc_cmd_recent_v1", rs = 5;
function sn() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem(ts);
    if (!t) return [];
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function on(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(ts, JSON.stringify(t.slice(0, rs)));
    } catch {
    }
}
function as(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const o = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && a.push(...as(s.children, o));
  }
  return a;
}
function cn(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const l = t.slice(0, o), i = t.slice(o, o + a.length), b = t.slice(o + a.length);
  return /* @__PURE__ */ c(De, { children: [
    l,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: i }),
    b
  ] });
}
const fd = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = Ve(), [l, i] = O(""), [b, u] = O("all"), [x, h] = O(0), [g, d] = O(() => sn()), f = le(null), p = le(null);
  ie(() => {
    t ? d(sn()) : (i(""), u("all"), h(0));
  }, [t]);
  const y = ce(() => [
    ...as(a).map(({ item: C, trail: L }) => ({
      id: `nav_${C.key}`,
      title: C.label,
      subtitle: `${L}${C.path ? ` · ${C.path}` : ""}`,
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
  }, [y]), v = ce(() => {
    const w = l.trim(), C = (A) => b !== "all" && b !== "__recent__" && A.group !== b ? !1 : w ? nt(A.title, w) || !!(A.subtitle && nt(A.subtitle, w)) || !!(A.keywords && nt(A.keywords, w)) : !0, L = [];
    if (b === "__recent__") {
      const A = g.map((W) => y.find((Y) => Y.id === W)).filter((W) => W !== void 0 && C(W));
      return A.length > 0 && L.push({ groupName: "最近访问", isRecent: !0, items: A }), L;
    }
    const D = /* @__PURE__ */ new Set();
    if (!w && b === "all" && g.length > 0) {
      const A = g.map((W) => y.find((Y) => Y.id === W)).filter((W) => W !== void 0);
      A.length > 0 && (A.forEach((W) => D.add(W.id)), L.push({ groupName: "最近访问", isRecent: !0, items: A }));
    }
    const M = /* @__PURE__ */ new Map();
    for (const A of y) {
      if (D.has(A.id) || !C(A)) continue;
      const W = A.group || "其他", Y = M.get(W) ?? [];
      Y.push(A), M.set(W, Y);
    }
    for (const [A, W] of M.entries())
      W.length > 0 && L.push({ groupName: A, items: W });
    return L;
  }, [y, l, b, g]), N = ce(
    () => v.flatMap((w) => w.items),
    [v]
  );
  ie(() => {
    h(0);
  }, [l, b]), ie(() => {
    var C;
    if (!t || !p.current) return;
    const w = p.current.querySelector(`[data-cmd-idx="${x}"]`);
    (C = w == null ? void 0 : w.scrollIntoView) == null || C.call(w, { block: "nearest" });
  }, [x, t]);
  const E = (w) => {
    if (!w) return;
    const C = [w.id, ...g.filter((L) => L !== w.id)].slice(
      0,
      rs
    );
    d(C), on(C), w.onTrigger(), r();
  }, _ = () => {
    d([]), on([]), b === "__recent__" && u("all");
  }, T = ce(() => {
    const w = ["all"];
    return g.length > 0 && w.push("__recent__"), [...w, ...S];
  }, [g.length, S]);
  let k = -1;
  return /* @__PURE__ */ e(
    wt,
    {
      open: t,
      onClose: r,
      width: "min(720px, 92vw)",
      draggable: !1,
      fullscreenable: !1,
      className: "rounded-[var(--abc-radius-xl)]",
      children: /* @__PURE__ */ c(
        "div",
        {
          onKeyDown: (w) => {
            if (w.key === "ArrowDown")
              w.preventDefault(), h((C) => N.length ? (C + 1) % N.length : 0);
            else if (w.key === "ArrowUp")
              w.preventDefault(), h(
                (C) => N.length ? (C - 1 + N.length) % N.length : 0
              );
            else if (w.key === "Tab") {
              w.preventDefault();
              const C = T.indexOf(b), L = w.shiftKey ? -1 : 1, D = T[(C + L + T.length) % T.length];
              D && u(D);
            } else w.key === "Enter" && N[x] && (w.preventDefault(), E(N[x]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(dt, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: f,
                  type: "text",
                  autoFocus: !0,
                  value: l,
                  onChange: (w) => i(w.target.value),
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
                    i(""), (w = f.current) == null || w.focus();
                  },
                  className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ue, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(At, { className: "shrink-0", children: "ESC" })
            ] }),
            S.length > 0 && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => u("all"),
                    className: m(
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
                g.length > 0 && /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => u("__recent__"),
                    className: m(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(hr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                S.map((w) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => u(w),
                    className: m(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === w ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: w
                  },
                  w
                ))
              ] }),
              g.length > 0 && /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  onClick: _,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(Ot, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: p, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: N.length === 0 ? /* @__PURE__ */ c("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Mr, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ c("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                l,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: v.map((w) => /* @__PURE__ */ c("div", { className: "space-y-1", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5", children: [
                  w.isRecent && /* @__PURE__ */ e(hr, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: w.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: w.items.length })
              ] }),
              w.items.map((C) => {
                k += 1;
                const L = k, D = L === x;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": L,
                    onMouseEnter: () => h(L),
                    onClick: () => E(C),
                    className: m(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      D ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: m(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              D ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: C.icon ? typeof C.icon == "string" ? /* @__PURE__ */ e(yt, { name: C.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: C.icon }) : /* @__PURE__ */ e(dt, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ c("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: m(
                                "truncate text-sm font-semibold",
                                D ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: cn(C.title, l)
                            }
                          ),
                          C.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: cn(C.subtitle, l) })
                        ] })
                      ] }),
                      /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
                        C.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: m(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              D ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: C.group
                          }
                        ),
                        D && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(yc, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${w.isRecent ? "recent" : "std"}_${C.id}`
                );
              })
            ] }, w.groupName)) }) }),
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(At, { children: /* @__PURE__ */ e(ta, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(At, { children: /* @__PURE__ */ e(ra, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(At, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(At, { children: "Tab" }),
                  /* @__PURE__ */ e("span", { children: "切换分类" })
                ] })
              ] }),
              /* @__PURE__ */ c("span", { className: "font-mono", children: [
                "共 ",
                N.length,
                " 项结果"
              ] })
            ] })
          ]
        }
      )
    }
  );
}, mb = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: l,
  className: i,
  children: b
}) => /* @__PURE__ */ c("div", { className: m("flex min-h-full flex-col gap-4", l && "pb-16", i), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((u, x) => {
      const h = x === n.length - 1;
      return /* @__PURE__ */ c(Oe.Fragment, { children: [
        x > 0 && /* @__PURE__ */ e(bt, { className: "h-3 w-3 opacity-60" }),
        u.onClick && !h ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: u.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: u.label
          }
        ) : /* @__PURE__ */ e("span", { className: m(h && "font-medium text-[var(--abc-fg-secondary)]"), children: u.label })
      ] }, x);
    }) }),
    (t || s) && /* @__PURE__ */ c("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ c("div", { className: "min-w-0", children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
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
] }), pd = ({
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
  children: i,
  className: b
}) => r === "centered" ? /* @__PURE__ */ c(
  "div",
  {
    className: m(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      b
    ),
    children: [
      /* @__PURE__ */ e(Ja, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(Dt, { brand: t }) }),
      /* @__PURE__ */ c("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(Za, {}),
        i
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: l })
    ]
  }
) : /* @__PURE__ */ c(
  "div",
  {
    className: m(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      b
    ),
    children: [
      /* @__PURE__ */ c("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Ja, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Dt, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ c("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((u, x) => /* @__PURE__ */ c("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(pt, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: u })
          ] }, x)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: l })
      ] }),
      /* @__PURE__ */ c("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(Dt, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ c("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(Za, {}),
          i
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: l })
      ] })
    ]
  }
), hd = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], vd = [
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
], gd = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, ln = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var se;
  const {
    theme: o,
    pageTransition: l,
    watermarkEnabled: i,
    setThemeMode: b,
    setBrand: u,
    setCustomBrandColor: x,
    setDensity: h,
    setRadius: g,
    setFontScale: d,
    setVisualMode: f,
    setComponentSize: p,
    setMotion: y,
    updateTheme: S,
    setPageTransition: v,
    setWatermarkEnabled: N,
    resetTheme: E,
    toast: _
  } = Ve(), [T, k] = O(1), [w, C] = O(!0), [L, D] = O("实时 Token 响应预览"), [M, A] = O(0), [W, Y] = O(!1), [P, $] = O(""), [j, K] = O(o.customBrandColor ?? "#0ea5e9"), re = o.componentSize ?? "sm", Q = a.sidebarWidth ?? sd[re], Ce = a.headerHeight ?? od[re], B = o.customBrandColor || ((se = Fr[o.brand]) == null ? void 0 : se.swatch) || "#2563eb", U = (R, me) => {
    R.theme.mode && R.theme.mode !== o.mode && b(R.theme.mode, { clientX: me.clientX, clientY: me.clientY }), S(R.theme), n(R.layout), v(R.transition), A((Pe) => Pe + 1), _.success(`已切换至「${R.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    Sa,
    {
      open: t,
      onClose: r,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ c("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            _e,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                E(), s == null || s(), _.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            _e,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(fn, { className: "h-3.5 w-3.5" }),
              onClick: () => Y((R) => !R),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            _e,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(wc, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const R = JSON.stringify(o, null, 2), me = JSON.stringify(a, null, 2), Pe = `<AbcProvider
  defaultTheme={${R}}
  defaultPageTransition="${l}"
  defaultWatermarkEnabled={${i}}
>
  <ProLayout
    defaultSettings={${me}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(Pe), _.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  _.error("复制代码失败");
                }
              },
              children: "复制 JSX"
            }
          ),
          /* @__PURE__ */ e(
            _e,
            {
              variant: "primary",
              size: "xs",
              icon: /* @__PURE__ */ e(va, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const R = {
                  theme: o,
                  layout: a,
                  pageTransition: l,
                  watermarkEnabled: i
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(R, null, 2)), _.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  _.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ c("div", { className: "space-y-6", children: [
        W && /* @__PURE__ */ c("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
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
            Ar,
            {
              rows: 4,
              value: P,
              onChange: (R) => $(R.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(_e, { size: "xs", variant: "primary", onClick: () => {
            try {
              const R = JSON.parse(P);
              R.theme && typeof R.theme == "object" && S(R.theme), R.layout && typeof R.layout == "object" && n(R.layout), typeof R.pageTransition == "string" && v(R.pageTransition), typeof R.watermarkEnabled == "boolean" && N(R.watermarkEnabled), Y(!1), $(""), _.success("已成功导入并应用自定义配置");
            } catch {
              _.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(Mr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => A((R) => R + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(hn, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c(
            "div",
            {
              className: m(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                gd[l]
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ c(_e, { variant: "primary", onClick: () => k((R) => R + 1), children: [
                      "按压回弹 #",
                      T
                    ] }),
                    /* @__PURE__ */ e(_e, { variant: "outline", onClick: () => C((R) => !R), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(zt, { status: w ? "success" : "warning", dot: !0, children: w ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      at,
                      {
                        checked: w,
                        onChange: C,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  et,
                  {
                    allowClear: !0,
                    value: L,
                    onChange: (R) => D(R.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ c("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: B })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((R) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${R}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${R})` }
                    },
                    R
                  )) })
                ] })
              ]
            },
            M
          )
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: vd.map((R) => /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: (me) => U(R, me),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: R.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: R.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: R.badge })
              ]
            },
            R.id
          )) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: hd.map((R) => {
            const me = a.mode === R.mode;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: R.mode }),
                className: m(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  me ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ c("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    R.mode === "sidebar" && /* @__PURE__ */ c(De, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    R.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    R.mode === "mix" && /* @__PURE__ */ c("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    R.mode === "dual-column" && /* @__PURE__ */ c(De, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    R.mode === "auth" && /* @__PURE__ */ c(De, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: R.title }),
                    me && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: R.desc })
                ]
              },
              R.mode
            );
          }) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "3. 明暗外观与动态品牌色引擎" }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "色彩模式" }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: o.mode,
                onChange: (R) => b(R),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(aa, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(na, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(gn, { className: "h-3 w-3" }),
                      " 系统"
                    ] })
                  }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏视觉色调" }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: a.sidebarTone,
                onChange: (R) => n({ sidebarTone: R }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(Fr).map((R) => {
            const me = Fr[R], Pe = !o.customBrandColor && o.brand === R;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => u(R),
                className: m(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Pe ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: me.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: me.label.split(" ")[0] })
                ]
              },
              R
            );
          }) }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(vn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || j,
                  onChange: (R) => {
                    const me = R.target.value;
                    K(me), x(me);
                  },
                  className: "h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  maxLength: 7,
                  value: o.customBrandColor ?? j,
                  onChange: (R) => {
                    const me = R.target.value;
                    K(me), /^#[0-9a-fA-F]{6}$/.test(me) && x(me);
                  },
                  className: "w-20 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-xs uppercase text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                }
              ),
              o.customBrandColor && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => x(void 0),
                  className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: "清除"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "4. 密度、圆角与排版规格" }),
          /* @__PURE__ */ c("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "表单与按钮高度密度" }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: o.density,
                onChange: (R) => h(R),
                options: Object.keys(Wa).map((R) => ({
                  value: R,
                  label: Wa[R].label
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局控件与卡片圆角" }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: o.radius,
                onChange: (R) => g(R),
                options: Object.keys(Fa).map((R) => ({
                  value: R,
                  label: Fa[R].label.split(" ")[0]
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "全局字号缩放比例" }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: o.fontScale ?? "md",
                onChange: (R) => d(R),
                options: [
                  { value: "sm", label: "紧凑 94%" },
                  { value: "md", label: "标准 100%" },
                  { value: "lg", label: "舒适 106%" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件与导航尺寸" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: o.componentSize ?? "自动 (随组件)" })
            ] }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: o.componentSize ?? "auto",
                onChange: (R) => p(R === "auto" ? void 0 : R),
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
          /* @__PURE__ */ c("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件微交互动效" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: Xt[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: (R) => {
                  y(R), A((me) => me + 1);
                },
                options: Object.keys(Xt).map((R) => ({
                  value: R,
                  label: Xt[R].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              Xt[o.motion ?? "smooth"].label,
              "：",
              Xt[o.motion ?? "smooth"].description
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "5. 壳层几何尺寸与页签风格" }),
          /* @__PURE__ */ c("div", { className: "space-y-1", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "侧边栏展开宽度" }),
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                a.sidebarWidth !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ sidebarWidth: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ c("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  Q,
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
                value: Q,
                onChange: (R) => n({ sidebarWidth: Number(R.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "space-y-1", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "顶部导航栏高度" }),
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                a.headerHeight !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ headerHeight: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ c("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  Ce,
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
                value: Ce,
                onChange: (R) => n({ headerHeight: Number(R.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "多页签视觉形态" }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: a.tabStyle ?? "card",
                onChange: (R) => n({ tabStyle: R }),
                options: [
                  { value: "card", label: "卡片式" },
                  { value: "pill", label: "胶囊式" },
                  { value: "underline", label: "下划线" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示多页签栏 (MultiTabBar)" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.showTabs,
                onChange: (R) => n({ showTabs: R })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.keepAlive,
                onChange: (R) => n({ keepAlive: R })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.headerBlur !== !1,
                onChange: (R) => n({ headerBlur: R })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (R) => n({ showBreadcrumb: R })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.sidebarAccordion,
                onChange: (R) => n({ sidebarAccordion: R })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: !!a.showFooter,
                onChange: (R) => n({ showFooter: R })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: i,
                onChange: (R) => N(R)
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: a.contentWidth,
                onChange: (R) => n({ contentWidth: R }),
                options: [
                  { value: "fluid", label: "流式铺满" },
                  { value: "fixed", label: "定宽居中" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-[var(--abc-fg-secondary)]", children: "页面切换动效" }),
            /* @__PURE__ */ e(
              Nt,
              {
                size: "xs",
                className: "w-44",
                value: l,
                onChange: (R) => {
                  v(R), A((me) => me + 1);
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
        /* @__PURE__ */ c("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ c("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e(Wt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            rt,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: (R) => f(R),
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
}, xd = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, yd = {
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
}, fb = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: r,
  pathname: a,
  onNavigate: n,
  settings: s,
  defaultSettings: o,
  onSettingsChange: l,
  user: i,
  headerExtra: b,
  commandActions: u = [],
  tabs: x,
  onTabsChange: h,
  authRender: g,
  authProps: d,
  showCustomizerTrigger: f = !0,
  size: p,
  motion: y,
  children: S
}) => {
  const {
    resolvedTheme: v,
    toggleTheme: N,
    pageTransition: E,
    watermarkEnabled: _,
    watermarkText: T
  } = Ve(), k = be(p, "sm"), w = ne(y), C = yd[k], L = ce(
    () => ({ ...cd, ...o }),
    [o]
  ), [D, M] = Je({
    value: s ? { ...L, ...s } : void 0,
    defaultValue: L,
    onChange: l
  }), A = he(
    (H) => {
      M((G) => ({ ...G, ...H }));
    },
    [M]
  ), [W, Y] = O(!1), [P, $] = O(!1), [j, K] = O(!1), [re, Q] = O({}), Ce = le(null), [B, U] = Je({
    value: x,
    defaultValue: [],
    onChange: h
  }), V = ce(
    () => es(r, a),
    [r, a]
  );
  ie(() => {
    const H = V[V.length - 1];
    !H || !H.path || U((G) => G.some((we) => we.path === H.path) ? G : [
      ...G,
      {
        path: H.path,
        title: H.label,
        icon: H.icon,
        pinned: G.length === 0
      }
    ]);
  }, [V, U]), ie(() => {
    const H = (G) => {
      (G.metaKey || G.ctrlKey) && G.key.toLowerCase() === "k" && (G.preventDefault(), $((we) => !we));
    };
    return window.addEventListener("keydown", H), () => window.removeEventListener("keydown", H);
  }, []);
  const X = ce(
    () => r.find((H) => lt(H, a)) ?? r[0],
    [r, a]
  ), [J, se] = O((X == null ? void 0 : X.key) ?? "");
  ie(() => {
    X != null && X.key && se(X.key);
  }, [X == null ? void 0 : X.key]);
  const R = ce(() => {
    const H = r.find((G) => G.key === J) ?? X;
    return (H == null ? void 0 : H.children) ?? [];
  }, [r, J, X]), me = (H) => {
    const G = B.findIndex((Te) => Te.path === H), we = B.filter((Te) => Te.path !== H || Te.pinned);
    if (U(we), H === a && we.length > 0) {
      const Te = we[Math.max(0, G - 1)] ?? we[0];
      Te && n(Te.path);
    }
  }, Pe = ce(() => T || [(i == null ? void 0 : i.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [T, i == null ? void 0 : i.name, t.name]);
  if (D.mode === "auth")
    return /* @__PURE__ */ c(De, { children: [
      /* @__PURE__ */ e(
        pd,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (H) => N({ clientX: H.clientX, clientY: H.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: v === "dark" ? /* @__PURE__ */ e(aa, { className: "h-4 w-4" }) : /* @__PURE__ */ e(na, { className: "h-4 w-4" })
              }
            ),
            f && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => K(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Qr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...d,
          children: g ?? S
        }
      ),
      /* @__PURE__ */ e(
        ln,
        {
          open: j,
          onClose: () => K(!1),
          layoutSettings: D,
          onLayoutChange: A,
          onResetAll: () => M(L)
        }
      )
    ] });
  const je = D.mode === "sidebar", ae = D.mode === "top", oe = D.mode === "mix", ue = D.mode === "dual-column", F = /* @__PURE__ */ c(
    "header",
    {
      className: m(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        C.headerPad,
        D.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => Y(!0),
              className: m(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                C.iconBtn
              ),
              children: /* @__PURE__ */ e(xn, { className: C.iconCls })
            }
          ),
          (ae || oe) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Dt, { brand: t, size: k, className: "px-0 pr-3" }) }),
          (je || oe && R.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": D.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => A({ sidebarCollapsed: !D.sidebarCollapsed }),
              className: m(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                C.iconBtn
              ),
              children: D.sidebarCollapsed ? /* @__PURE__ */ e(Nc, { className: C.iconCls }) : /* @__PURE__ */ e(kc, { className: C.iconCls })
            }
          ),
          ae && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            nn,
            {
              items: r,
              pathname: a,
              size: k,
              motion: w,
              onNavigate: (H, G) => n(H, G)
            }
          ) }),
          oe && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            nn,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: J,
              size: k,
              motion: w,
              onSelectRoot: (H) => {
                var G, we;
                se(H.key), H.path && (!H.children || H.children.length === 0) ? n(H.path, H) : (we = (G = H.children) == null ? void 0 : G[0]) != null && we.path && n(H.children[0].path, H.children[0]);
              },
              onNavigate: (H, G) => n(H, G)
            }
          ) }),
          (je || ue) && D.showBreadcrumb !== !1 && V.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: m(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                C.breadcrumb
              ),
              children: V.map((H, G) => {
                const we = G === V.length - 1;
                return /* @__PURE__ */ c(Oe.Fragment, { children: [
                  G > 0 && /* @__PURE__ */ e(bt, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: m(
                        "truncate",
                        we && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: H.label
                    }
                  )
                ] }, H.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => $(!0),
              className: m(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                C.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(dt, { className: C.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(At, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          b,
          /* @__PURE__ */ e(qe, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (H) => N({ clientX: H.clientX, clientY: H.clientY }),
              className: m(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                C.iconBtn
              ),
              children: v === "dark" ? /* @__PURE__ */ e(aa, { className: C.iconCls }) : /* @__PURE__ */ e(na, { className: C.iconCls })
            }
          ) }),
          f && /* @__PURE__ */ e(qe, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => K(!0),
              className: m(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                C.iconBtn
              ),
              children: /* @__PURE__ */ e(Qr, { className: C.iconCls })
            }
          ) }),
          i && /* @__PURE__ */ e(
            jt,
            {
              items: i.menuItems ?? [
                { key: "profile", label: `当前账号：${i.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(Hi, { src: i.avatar, name: i.name, size: C.avatarSize }),
                /* @__PURE__ */ c("div", { className: "hidden text-left md:block", children: [
                  /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-xs font-semibold text-[var(--abc-fg)] leading-tight", children: i.name }),
                  i.role && /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-[10px] text-[var(--abc-fg-muted)] leading-tight", children: i.role })
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  ), ee = /* @__PURE__ */ c("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !oe && F,
    D.showTabs && /* @__PURE__ */ e(
      ud,
      {
        tabs: B,
        activePath: a,
        variant: D.tabStyle ?? "card",
        size: k,
        motion: w,
        onSelect: (H) => n(H),
        onClose: me,
        onTogglePin: (H) => U(
          (G) => G.map((we) => we.path === H ? { ...we, pinned: !we.pinned } : we)
        ),
        onCloseOthers: (H) => U((G) => G.filter((we) => we.pinned || we.path === H)),
        onCloseRight: (H) => {
          const G = B.findIndex((we) => we.path === H);
          G < 0 || U((we) => we.filter((Te, Ae) => Ae <= G || Te.pinned));
        },
        onCloseAll: () => {
          const H = B.filter((G) => G.pinned);
          U(H), H[0] && H[0].path !== a && n(H[0].path);
        },
        onRefresh: (H) => Q((G) => ({ ...G, [H]: (G[H] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: Ce,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ c(
          Ol,
          {
            enabled: _,
            content: Pe,
            className: m(
              "min-h-full",
              D.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                md,
                {
                  activeKey: a,
                  enabled: D.keepAlive,
                  aliveKeys: B.map((H) => H.path),
                  scrollContainerRef: Ce,
                  refreshSeed: re[a] ?? 0,
                  activeClassName: xd[E],
                  children: S
                }
              ),
              D.showFooter && /* @__PURE__ */ c("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
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
  ] }), de = {
    "--abc-sidebar-w": D.sidebarWidth ? `${D.sidebarWidth}px` : void 0,
    "--abc-header-h": D.headerHeight ? `${D.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-size": k,
      "data-motion": w,
      style: de,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        oe && F,
        /* @__PURE__ */ c("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          oe && R.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            qr,
            {
              items: R,
              pathname: a,
              collapsed: D.sidebarCollapsed,
              accordion: D.sidebarAccordion,
              tone: D.sidebarTone,
              size: k,
              motion: w,
              onNavigate: (H, G) => n(H, G)
            }
          ) }),
          je && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            qr,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: D.sidebarCollapsed,
              accordion: D.sidebarAccordion,
              tone: D.sidebarTone,
              size: k,
              motion: w,
              onNavigate: (H, G) => n(H, G)
            }
          ) }),
          ue && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            dd,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: D.sidebarTone,
              size: k,
              motion: w,
              onNavigate: (H, G) => n(H, G)
            }
          ) }),
          ee
        ] }),
        /* @__PURE__ */ e(
          Sa,
          {
            open: W,
            onClose: () => Y(!1),
            placement: "left",
            width: C.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              qr,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: k,
                motion: w,
                onNavigate: (H, G) => {
                  n(H, G), Y(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          fd,
          {
            open: P,
            onClose: () => $(!1),
            menuItems: r,
            onNavigate: (H, G) => n(H, G),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: v === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => N()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => K(!0)
              },
              ...u
            ]
          }
        ),
        /* @__PURE__ */ e(
          ln,
          {
            open: j,
            onClose: () => K(!1),
            layoutSettings: D,
            onLayoutChange: A,
            onResetAll: () => M(L)
          }
        )
      ]
    }
  );
};
function ns() {
  const { permissionAdapter: t } = Ve();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const wd = ({
  permission: t,
  code: r,
  mode: a = "any",
  fallbackStrategy: n = "hide",
  disabledTip: s = "暂无操作权限",
  fallback: o,
  fallbackNode: l,
  children: i
}) => {
  var h;
  const { hasPermission: b } = ns(), u = t ?? r;
  if (!u) return /* @__PURE__ */ e(De, { children: i });
  if (b(u, a)) return /* @__PURE__ */ e(De, { children: i });
  if (n === "hide")
    return /* @__PURE__ */ e(De, { children: o ?? l ?? null });
  if (Oe.isValidElement(i)) {
    const g = i, d = Oe.cloneElement(g, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((h = g.props) == null ? void 0 : h.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(qe, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: d }) });
  }
  return null;
}, pb = wd;
function ss(t) {
  const { dictAdapter: r } = Ve(), [a, n] = O([]), [s, o] = O(!1);
  return ie(() => {
    if (!r || !t) {
      n([]);
      return;
    }
    let l = !0;
    const i = r(t);
    return i instanceof Promise ? (o(!0), i.then((b) => {
      l && n(b);
    }).finally(() => {
      l && o(!1);
    })) : n(i), () => {
      l = !1;
    };
  }, [r, t]), { options: a, loading: s };
}
const hb = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...l
}) => {
  const i = t ?? r ?? "", { options: b, loading: u } = ss(i), x = ce(
    () => [...a, ...b, ...n],
    [a, b, n]
  );
  return /* @__PURE__ */ e(
    Nt,
    {
      options: x,
      placeholder: u && x.length === 0 ? "字典加载中..." : s,
      disabled: o || u && x.length === 0,
      ...l
    }
  );
}, vb = ({
  dictCode: t,
  dictKey: r,
  value: a,
  dot: n = !0,
  size: s,
  motion: o,
  emptyText: l = "-",
  fallbackTone: i = "neutral",
  className: b
}) => {
  const u = t ?? r ?? "", { options: x } = ss(u);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: l });
  const h = x.find((g) => String(g.value) === String(a));
  return /* @__PURE__ */ e(
    zt,
    {
      tone: (h == null ? void 0 : h.tone) ?? i,
      dot: n,
      size: s,
      motion: o,
      className: b,
      children: (h == null ? void 0 : h.label) ?? String(a)
    }
  );
}, dn = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, Nd = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: m("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(wr, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: m("grid gap-4", dn[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: m("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ c(
  "div",
  {
    className: m(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ c("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(wr, { children: /* @__PURE__ */ e("div", { className: m("grid gap-4", dn[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function gb({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = Ve(), [l, i] = O(r), [b, u] = O(!1), [x, h] = O({});
  ie(() => {
    i(r);
  }, [r]);
  const g = (f, p) => {
    i((y) => ({ ...y, [f]: p })), x[f] && h((y) => {
      const S = { ...y };
      return delete S[f], S;
    });
  };
  return /* @__PURE__ */ c("form", { onSubmit: async (f) => {
    f.preventDefault();
    const p = {};
    for (const y of t)
      for (const S of y.fields)
        if (S.required) {
          const v = l[S.name];
          (v == null || String(v).trim() === "") && (p[S.name] = `请填写${S.label}`);
        }
    if (Object.keys(p).length > 0) {
      h(p), o.warning("请完善必填配置项后再提交");
      return;
    }
    u(!0);
    try {
      await n(l), o.success("配置已保存生效");
    } catch (y) {
      o.error((y == null ? void 0 : y.message) || "保存失败");
    } finally {
      u(!1);
    }
  }, className: "space-y-6", children: [
    /* @__PURE__ */ e(
      Nd,
      {
        mode: a,
        sections: t.map((f) => ({
          key: f.key,
          title: f.title,
          description: f.description,
          columns: f.columns ?? 1,
          children: f.fields.map((p) => {
            const y = l[p.name], S = x[p.name], v = p.type ?? "text";
            return /* @__PURE__ */ e(
              la,
              {
                label: p.label,
                required: p.required,
                helperText: p.helperText,
                error: S,
                children: v === "switch" ? /* @__PURE__ */ e(
                  at,
                  {
                    checked: !!y,
                    onChange: (N) => g(p.name, N)
                  }
                ) : v === "number" ? /* @__PURE__ */ e(
                  ia,
                  {
                    value: y ?? null,
                    placeholder: p.placeholder,
                    invalid: !!S,
                    onChange: (N) => g(p.name, N)
                  }
                ) : v === "textarea" ? /* @__PURE__ */ e(
                  Ar,
                  {
                    value: y ?? "",
                    placeholder: p.placeholder,
                    invalid: !!S,
                    onChange: (N) => g(p.name, N.target.value)
                  }
                ) : v === "select" ? /* @__PURE__ */ e(
                  Nt,
                  {
                    options: p.options ?? [],
                    value: y ?? "",
                    placeholder: p.placeholder,
                    invalid: !!S,
                    onChange: (N) => g(p.name, N)
                  }
                ) : v === "image" ? p.allowDirectUrlInput !== !1 ? /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    Jn,
                    {
                      src: String(y ?? ""),
                      alt: p.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    et,
                    {
                      allowClear: !0,
                      value: y ?? "",
                      placeholder: p.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (N) => g(p.name, N.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  Sl,
                  {
                    value: String(y ?? ""),
                    onChange: (N) => g(p.name, N)
                  }
                ) : /* @__PURE__ */ e(
                  et,
                  {
                    type: v === "password" ? "password" : "text",
                    allowClear: !0,
                    value: y ?? "",
                    placeholder: p.placeholder,
                    invalid: !!S,
                    onChange: (N) => g(p.name, N.target.value)
                  }
                )
              },
              p.name
            );
          })
        }))
      }
    ),
    /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4", children: [
      /* @__PURE__ */ e(
        _e,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            i(r), h({}), o.info("已还原初始配置值");
          },
          children: "重置更改"
        }
      ),
      /* @__PURE__ */ e(
        _e,
        {
          type: "submit",
          variant: "primary",
          loading: b,
          icon: /* @__PURE__ */ e(Cc, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
function Zr(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function kd(t, r) {
  const a = t.filter((o) => !o.hideInTable && o.key !== "__abc_actions__"), n = a.map((o) => Zr(o.title)).join(","), s = r.map(
    (o) => a.map((l) => {
      const i = o[l.dataIndex ?? l.key];
      if (l.options && l.options.length > 0) {
        const b = l.options.find((u) => String(u.value) === String(i));
        if (b) return Zr(b.label);
      }
      return Zr(i);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function Cd(t, r, a) {
  const n = kd(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), l = document.createElement("a");
    l.href = o, l.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o);
  }
  return n;
}
const Sd = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  value: n,
  onApply: s
}) => {
  const [o, l] = O(!1), [i, b] = O(n ?? "");
  ie(() => {
    o && b(n ?? "");
  }, [o, n]);
  const u = n != null && String(n).trim() !== "", x = (h) => {
    s(h), l(!1);
  };
  return /* @__PURE__ */ e(
    Yn,
    {
      open: o,
      onOpenChange: l,
      placement: "bottomRight",
      panelClassName: "w-60 p-3",
      content: /* @__PURE__ */ c(
        "div",
        {
          onClick: (h) => h.stopPropagation(),
          className: "space-y-2.5 text-xs font-normal text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ c("div", { className: "font-semibold text-[var(--abc-fg-secondary)]", children: [
              "筛选：",
              t
            ] }),
            r === "select" && a ? /* @__PURE__ */ e(
              Nt,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `选择${t}`,
                options: a,
                value: i ?? "",
                onChange: (h) => b(h)
              }
            ) : /* @__PURE__ */ e(
              et,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `输入${t}关键字`,
                value: i ?? "",
                onChange: (h) => b(h.target.value),
                onKeyDown: (h) => {
                  h.key === "Enter" && (h.preventDefault(), x(i));
                }
              }
            ),
            /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                _e,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    b(""), x("");
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(_e, { variant: "primary", size: "xs", onClick: () => x(i), children: "筛选" })
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
          className: m(
            "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
            u ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(er, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function Md({
  columns: t,
  searchableFieldNames: r,
  settings: a,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: o,
  onToggleVisible: l,
  onSetAllVisible: i,
  onSetFixed: b,
  onSetWidth: u,
  onSetOrder: x,
  onSetSearchVisible: h,
  onReset: g
}) {
  const d = ne(o), [f, p] = O(!1), [y, S] = O(""), [v, N] = O("all"), [E, _] = O(null), T = le(null), k = le(!1);
  ie(() => {
    if (!E) return;
    const P = ($) => {
      if ($.key === "Escape") {
        const j = T.current;
        _(null), T.current = null, k.current = !1, j && x(j);
      }
    };
    return document.addEventListener("keydown", P, !0), () => document.removeEventListener("keydown", P, !0);
  }, [E, x]);
  const w = ce(
    () => t.filter((P) => !P.hideInTable && P.key !== "__abc_actions__"),
    [t]
  ), C = ce(() => a.columnOrder.length === 0 ? w : [...w].sort((P, $) => {
    const j = a.columnOrder.indexOf(P.key), K = a.columnOrder.indexOf($.key);
    return j === -1 && K === -1 ? 0 : j === -1 ? 1 : K === -1 ? -1 : j - K;
  }), [w, a.columnOrder]), L = (P) => P.key in a.columnFixed ? a.columnFixed[P.key] ?? void 0 : P.fixed, D = ce(() => {
    const P = y.trim().toLowerCase();
    return C.filter(($) => {
      if (P && !$.title.toLowerCase().includes(P) && !$.key.toLowerCase().includes(P))
        return !1;
      const j = a.hiddenKeys.includes($.key), K = L($);
      return v === "fixed" ? !!K : v === "hidden" ? j : !0;
    });
  }, [C, y, v, a.hiddenKeys, a.columnFixed]), M = ce(() => w.map((P) => P.key), [w]), A = ce(
    () => t.find((P) => P.key === "__abc_actions__"),
    [t]
  ), W = !!(n || A), Y = a.columnWidths.__abc_actions__ ?? (A == null ? void 0 : A.width) ?? s;
  return /* @__PURE__ */ e(
    Yn,
    {
      open: f,
      onOpenChange: p,
      placement: "bottomRight",
      motion: d,
      panelClassName: "w-[356px] overflow-hidden p-0",
      content: /* @__PURE__ */ c("div", { className: "text-xs select-none", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3.5 py-2.5", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "列设置与偏好" }),
            /* @__PURE__ */ c("span", { className: "rounded bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: [
              w.length,
              " 列"
            ] })
          ] }),
          /* @__PURE__ */ e(
            _e,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(kt, { className: "h-3 w-3" }),
              onClick: g,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ c("div", { className: "relative", children: [
            /* @__PURE__ */ e(dt, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: y,
                onChange: (P) => S(P.target.value),
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
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5", children: [
              { key: "all", label: "全部" },
              { key: "fixed", label: "已固定" },
              { key: "hidden", label: "已隐藏" }
            ].map((P) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => N(P.key),
                className: m(
                  "rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer",
                  v === P.key ? "bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: P.label
              },
              P.key
            )) }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => i(M, !0),
                  className: "text-[var(--abc-primary)] hover:underline cursor-pointer",
                  children: "全显"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => i(M, !1),
                  className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: "全隐"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: D.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : D.map((P) => {
          const $ = !a.hiddenKeys.includes(P.key), j = L(P), K = String(P.dataIndex ?? P.key), re = r.has(K), Q = a.searchVisible[K] !== !1, Ce = a.columnWidths[P.key] ?? P.width ?? "";
          return /* @__PURE__ */ c(
            "div",
            {
              "data-dragging": E === P.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                T.current = C.map((B) => B.key), k.current = !1, _(P.key);
              },
              onDragOver: (B) => {
                if (!E || E === P.key) return;
                B.preventDefault();
                const U = C.map((me) => me.key), V = U.indexOf(E), X = U.indexOf(P.key);
                if (V < 0 || X < 0 || V === X) return;
                const J = B.currentTarget.getBoundingClientRect();
                if (J.height > 0 && (V < X && B.clientY < J.top + J.height * 0.35 || V > X && B.clientY > J.top + J.height * 0.65))
                  return;
                const se = [...U], [R] = se.splice(V, 1);
                se.splice(X, 0, R), k.current = !0, x(se);
              },
              onDrop: () => {
                if (E && E !== P.key && !k.current) {
                  const B = C.map((X) => X.key), U = B.indexOf(E), V = B.indexOf(P.key);
                  if (U >= 0 && V >= 0) {
                    const X = [...B], [J] = X.splice(U, 1);
                    X.splice(V, 0, J), x(X);
                  }
                }
                _(null), T.current = null, k.current = !1;
              },
              onDragEnd: () => {
                _(null), T.current = null, k.current = !1;
              },
              className: m(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                E === P.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(ya, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(tr, { checked: $, onChange: () => l(P.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: m(
                        "truncate text-xs",
                        $ ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: P.title
                    }
                  ),
                  j && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: j === "left" ? "左固" : "右固" })
                ] }),
                /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "number",
                      min: 64,
                      max: 800,
                      "aria-label": `${P.title} 列宽`,
                      placeholder: "宽px",
                      defaultValue: Ce,
                      onBlur: (B) => {
                        const U = parseInt(B.target.value, 10);
                        !Number.isNaN(U) && U >= 64 && u(P.key, U);
                      },
                      onKeyDown: (B) => {
                        if (B.key === "Enter") {
                          const U = parseInt(B.target.value, 10);
                          !Number.isNaN(U) && U >= 64 && u(P.key, U);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${P.key}_${Ce}`
                  ),
                  re && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: Q ? "在筛选栏显示（点击隐藏）" : "已在筛选栏隐藏（点击显示）",
                      "aria-label": `切换 ${P.title} 筛选项显示`,
                      onClick: () => h(K, !Q),
                      className: m(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        Q ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: /* @__PURE__ */ e(er, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: j === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${P.title} 到左侧`,
                      onClick: () => b(P.key, j === "left" ? null : "left"),
                      className: m(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        j === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Pt, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: j === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${P.title} 到右侧`,
                      onClick: () => b(P.key, j === "right" ? null : "right"),
                      className: m(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        j === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Pt, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            P.key
          );
        }) }),
        W && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
          /* @__PURE__ */ c("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("div", { className: "text-[11px] font-medium text-[var(--abc-fg)]", children: "操作列固定宽度" }),
            /* @__PURE__ */ e("div", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: "可在表头左缘拖拽或直接设置" })
          ] }),
          /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "number",
                min: 80,
                max: 600,
                "aria-label": "操作 列宽",
                placeholder: "宽px",
                defaultValue: Y,
                onBlur: (P) => {
                  const $ = parseInt(P.target.value, 10);
                  !Number.isNaN($) && $ >= 80 && u("__abc_actions__", $);
                },
                onKeyDown: (P) => {
                  if (P.key === "Enter") {
                    const $ = parseInt(P.target.value, 10);
                    !Number.isNaN($) && $ >= 80 && u("__abc_actions__", $);
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
      children: /* @__PURE__ */ e(qe, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: m(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            f ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(Sc, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const Id = ({ actions: t, maxInline: r = 3 }) => {
  if (t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  if (t.length <= r)
    return /* @__PURE__ */ e("div", { className: "inline-flex items-center justify-end gap-1", children: t.map((s) => /* @__PURE__ */ e(
      _e,
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
  return /* @__PURE__ */ c("div", { className: "inline-flex items-center justify-end gap-1", children: [
    a.map((s) => /* @__PURE__ */ e(
      _e,
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
      jt,
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
            children: /* @__PURE__ */ e(ha, { className: "h-3.5 w-3.5" })
          }
        )
      }
    )
  ] });
};
function Ed({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  onBatchDelete: n,
  onClear: s,
  motion: o
}) {
  const l = ne(o);
  return t.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      role: "region",
      "aria-label": "批量操作栏",
      "data-motion": l,
      className: m(
        "fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--abc-border-strong)] bg-[var(--abc-bg-elevated)]/95 px-4 py-2 shadow-[var(--abc-shadow-modal)] backdrop-blur-md",
        l !== "none" && "abc-floating-bar-in"
      ),
      children: [
        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]", children: [
          "已选择 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-bold tabular-nums", children: t.length }),
          " 项"
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          a.map((i) => /* @__PURE__ */ e(
            _e,
            {
              variant: i.variant ?? "secondary",
              size: "xs",
              icon: i.icon,
              onClick: () => i.onClick(t, r),
              children: i.label
            },
            i.key
          )),
          n && /* @__PURE__ */ e(
            _e,
            {
              variant: "danger",
              size: "xs",
              icon: /* @__PURE__ */ e(Ot, { className: "h-3 w-3" }),
              onClick: n,
              children: "批量删除"
            }
          ),
          /* @__PURE__ */ c(
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
const bn = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
];
function xb({
  storageKey: t,
  title: r,
  columns: a,
  fields: n = [],
  dataSource: s,
  request: o,
  rowKey: l = "id",
  defaultPageSize: i = 10,
  clientFilter: b,
  showClientFilterSwitch: u = !1,
  defaultSearchCollapsed: x = !0,
  autoRefresh: h,
  exportable: g = !0,
  onExport: d,
  syncToUrl: f = !1,
  viewable: p = !1,
  formContainer: y = "dialog",
  formColumns: S,
  rowActions: v = [],
  maxInlineActions: N = 3,
  rowSelection: E,
  batchActions: _ = [],
  expandable: T,
  maxHeight: k,
  permissions: w,
  toolbarExtra: C,
  motion: L,
  onSaveRecord: D,
  onDeleteRecords: M
}) {
  var Ba;
  const { toast: A } = Ve(), W = ne(L), { hasPermission: Y } = ns(), {
    settings: P,
    toggleColumnVisible: $,
    setAllColumnsVisible: j,
    setColumnFixed: K,
    setColumnWidth: re,
    setColumnOrder: Q,
    setSearchFieldVisible: Ce,
    setDensity: B,
    resetSettings: U
  } = xi(t), V = ce(() => !f || typeof window > "u" ? {} : Pc(window.location.search), [f]), [X, J] = O(
    () => b ?? !o
  ), [se, R] = O(!1), [me, Pe] = O(!0), [je, ae] = O(x), [oe, ue] = O(() => {
    const { page: I, pageSize: Z, ...xe } = V;
    return xe;
  }), [F, ee] = O(() => {
    const { page: I, pageSize: Z, ...xe } = V;
    return xe;
  }), [de, H] = O(""), [G, we] = O({
    key: "",
    direction: null
  }), [Te, Ae] = O(() => Number(V.page) || 1), [Ye, sr] = O(
    () => Number(V.pageSize) || i
  ), [or, cr] = O(!1), [Mt, ir] = O([]), [Rr, zr] = O(0), [It, Et] = O([]), [lr, z] = O([]), [q, te] = O(!1), ye = h ?? !!o, [pe, Me] = O(!1), [ve, fe] = O(1e4), ge = le(0), [Ee, Le] = O(null), Ie = gi(t ? `${t}_form` : void 0), [Be, Re] = O(!1), [We, Kt] = O(null), [Ut, Vt] = O({}), [Ia, Gt] = O({}), [os, Ea] = O(!1), cs = !(w != null && w.create) || Y(w.create), dr = !(w != null && w.update) || Y(w.update), Yt = !(w != null && w.delete) || Y(w.delete);
  ie(() => {
    if (!f || typeof window > "u") return;
    const I = [
      ...n.filter((Se) => !Se.hideInSearch).map((Se) => Se.name),
      ...a.map((Se) => String(Se.dataIndex ?? Se.key)),
      "page",
      "pageSize"
    ], Z = Bc(window.location.search, I, {
      ...F,
      page: Te > 1 ? Te : void 0,
      pageSize: Ye !== i ? Ye : void 0
    }), xe = `${window.location.pathname}${Z}${window.location.hash}`;
    window.history.replaceState(null, "", xe);
  }, [f, n, a, F, Te, Ye, i]), ie(() => {
    if (!q) return;
    const I = (Z) => {
      Z.key === "Escape" && !Be && !Ee && te(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [q, Be, Ee]);
  const Ta = he(
    (I, Z) => typeof l == "function" ? l(I) : (I == null ? void 0 : I[l]) ?? Z,
    [l]
  ), gt = he(async () => {
    if (!o) return;
    const I = ++ge.current;
    cr(!0);
    try {
      const Z = await o({
        current: Te,
        pageSize: Ye,
        filters: X ? {} : Ka(F),
        sortField: G.direction ? G.key : void 0,
        sortOrder: G.direction
      });
      if (I !== ge.current) return;
      ir(Z.data), zr(Z.total);
    } catch (Z) {
      I === ge.current && A.error((Z == null ? void 0 : Z.message) || "加载表格数据失败");
    } finally {
      I === ge.current && cr(!1);
    }
  }, [o, Te, Ye, X, F, G, A]);
  ie(() => {
    o && gt();
  }, [o, gt]), ie(() => {
    if (!pe || !o || typeof window > "u") return;
    const I = window.setInterval(() => {
      gt();
    }, ve);
    return () => window.clearInterval(I);
  }, [pe, ve, o, gt]);
  const br = ce(() => {
    const I = a.filter(
      (Z) => !Z.hideInTable && !P.hiddenKeys.includes(Z.key)
    );
    return P.columnOrder.length === 0 ? I : [...I].sort((Z, xe) => {
      const Se = P.columnOrder.indexOf(Z.key), Fe = P.columnOrder.indexOf(xe.key);
      return Se === -1 && Fe === -1 ? 0 : Se === -1 ? 1 : Fe === -1 ? -1 : Se - Fe;
    });
  }, [a, P.hiddenKeys, P.columnOrder]), Dr = s ?? Mt, Tt = ce(() => {
    if (!X && o) return Dr;
    const I = a.map((Z) => String(Z.dataIndex ?? Z.key));
    return Dc({
      rows: Dr,
      quickKeyword: de,
      searchableKeys: I,
      fieldFilters: F,
      sortField: G.key,
      sortOrder: G.direction
    });
  }, [X, o, Dr, de, F, a, G]), is = ce(() => {
    if (!o) {
      const I = (Te - 1) * Ye;
      return Tt.slice(I, I + Ye);
    }
    return X ? Tt : Mt;
  }, [o, X, Tt, Mt, Te, Ye]), ls = o ? X ? Tt.length : Rr : Tt.length, ur = ce(
    () => n.filter((I) => !I.hideInSearch),
    [n]
  ), ds = ce(
    () => new Set(ur.map((I) => I.name)),
    [ur]
  ), xt = ce(
    () => ur.filter((I) => P.searchVisible[I.name] !== !1),
    [ur, P.searchVisible]
  ), bs = ce(() => !je || xt.length <= 3 ? xt : xt.slice(0, 3), [xt, je]), _t = ce(
    () => n.filter((I) => !I.hideInForm),
    [n]
  ), Pr = ce(() => Object.keys(Ka(F)).length + (de.trim() ? 1 : 0), [F, de]), Br = he(() => {
    ue({}), ee({}), H(""), Ae(1);
  }, []), jr = he(() => {
    const I = {};
    for (const Z of _t)
      Z.defaultValue !== void 0 && (I[Z.name] = Z.defaultValue);
    return I;
  }, [_t]), us = () => {
    Kt(null), Gt({});
    const I = Ie.readDraft();
    Vt(I ?? jr()), Re(!0);
  }, _a = (I) => {
    Kt(I), Gt({}), Vt({ ...I }), Re(!0);
  }, Aa = async (I) => {
    if (I.preventDefault(), !D) return;
    const Z = {};
    for (const xe of _t) {
      const Se = Ut[xe.name], Fe = Se == null || typeof Se == "string" && Se.trim() === "" || Array.isArray(Se) && Se.length === 0;
      if (xe.required && Fe) {
        Z[xe.name] = `请填写${xe.label}`;
        continue;
      }
      if (xe.validator) {
        const ut = xe.validator(Se, Ut);
        ut && (Z[xe.name] = ut);
      }
    }
    if (Object.keys(Z).length > 0) {
      Gt(Z);
      const xe = Object.values(Z)[0];
      A.warning(xe);
      return;
    }
    Gt({}), Ea(!0);
    try {
      await D(Ut, We), We || Ie.clearDraft(), Re(!1), A.success(We ? "更新成功" : "创建成功"), o && gt();
    } catch (xe) {
      A.error((xe == null ? void 0 : xe.message) || "提交失败");
    } finally {
      Ea(!1);
    }
  }, La = async (I) => {
    !M || I.length === 0 || !await Na({
      title: "确认删除选中记录",
      message: `即将删除 ${I.length} 条数据，删除后不可恢复，是否继续？`,
      tone: "danger",
      confirmText: "确认删除"
    }) || (await M(I), Et([]), z([]), A.success(`已删除 ${I.length} 条记录`), o && gt());
  }, Ra = ce(
    () => _.filter((I) => !I.permission || Y(I.permission)),
    [_, Y]
  ), Or = E ?? !!(M && Yt || Ra.length > 0), $r = p || !!D && dr || !!M && Yt || v.length > 0, ms = ce(() => $r ? [
    ...br,
    {
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: p || v.length > 0 ? 184 : 136,
      align: "right",
      render: (I, Z, xe) => {
        var ut;
        const Se = Ta(Z, xe), Fe = [];
        p && Fe.push({
          key: "__view__",
          label: "详情",
          icon: /* @__PURE__ */ e(Wt, { className: "h-3 w-3" }),
          onClick: () => Le(Z)
        }), D && dr && Fe.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(ea, { className: "h-3 w-3" }),
          onClick: () => _a(Z)
        });
        for (const Ze of v)
          Ze.permission && !Y(Ze.permission) || (ut = Ze.hidden) != null && ut.call(Ze, Z) || Fe.push({
            key: Ze.key,
            label: Ze.label,
            icon: Ze.icon,
            danger: Ze.danger,
            onClick: () => Ze.onClick(Z)
          });
        return M && Yt && Fe.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(Ot, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => La([Se])
        }), /* @__PURE__ */ e(Id, { actions: Fe, maxInline: N });
      }
    }
  ] : br, [
    br,
    $r,
    p,
    D,
    dr,
    M,
    Yt,
    v,
    N,
    Y,
    Ta
  ]), fs = () => {
    const I = X || !o ? Tt : Mt;
    if (d) {
      d(I);
      return;
    }
    const Z = typeof r == "string" && r.trim() ? r.trim() : t || "table-export";
    Cd(Z, br, I), A.success(`已导出 ${I.length} 条记录`);
  }, ps = (I) => {
    const Z = oe[I.name], xe = (Se) => ue((Fe) => ({ ...Fe, [I.name]: Se }));
    return I.type === "select" ? /* @__PURE__ */ e(
      Nt,
      {
        allowClear: !0,
        searchable: !0,
        multiple: I.multiple,
        options: I.options ?? [],
        placeholder: I.placeholder ?? `全部${I.label}`,
        value: Z ?? (I.multiple ? [] : ""),
        onChange: xe
      }
    ) : I.type === "date" ? /* @__PURE__ */ e(
      da,
      {
        value: Z ?? "",
        placeholder: I.placeholder ?? `选择${I.label}`,
        onChange: xe
      }
    ) : I.type === "dateRange" ? /* @__PURE__ */ e(
      ba,
      {
        value: Z ?? null,
        onChange: xe
      }
    ) : I.type === "number" ? /* @__PURE__ */ e(
      ia,
      {
        value: Z ?? null,
        placeholder: I.placeholder ?? `输入${I.label}`,
        onChange: xe
      }
    ) : /* @__PURE__ */ e(
      et,
      {
        allowClear: !0,
        placeholder: I.placeholder ?? `搜索${I.label}`,
        value: Z ?? "",
        onChange: (Se) => xe(Se.target.value)
      }
    );
  }, hs = (I) => {
    const Z = Ut[I.name], xe = typeof I.disabled == "function" ? I.disabled(We) : !!I.disabled, Se = (Fe) => {
      const ut = { ...Ut, [I.name]: Fe };
      Vt(ut), Ia[I.name] && Gt((Ze) => {
        const ja = { ...Ze };
        return delete ja[I.name], ja;
      }), We || Ie.saveDraft(ut);
    };
    return I.type === "select" ? /* @__PURE__ */ e(
      Nt,
      {
        searchable: !0,
        multiple: I.multiple,
        disabled: xe,
        options: I.options ?? [],
        value: Z ?? (I.multiple ? [] : ""),
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "number" ? /* @__PURE__ */ e(
      ia,
      {
        disabled: xe,
        value: Z ?? null,
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "textarea" ? /* @__PURE__ */ e(
      Ar,
      {
        disabled: xe,
        value: Z ?? "",
        placeholder: I.placeholder,
        onChange: (Fe) => Se(Fe.target.value)
      }
    ) : I.type === "switch" ? /* @__PURE__ */ e(at, { disabled: xe, checked: !!Z, onChange: Se }) : I.type === "date" ? /* @__PURE__ */ e(
      da,
      {
        disabled: xe,
        value: Z ?? "",
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "dateRange" ? /* @__PURE__ */ e(
      ba,
      {
        disabled: xe,
        value: Z ?? null,
        onChange: Se
      }
    ) : I.type === "tags" ? /* @__PURE__ */ e(
      Tl,
      {
        disabled: xe,
        value: Array.isArray(Z) ? Z : [],
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "icon" ? /* @__PURE__ */ e(Ri, { value: Z ?? "", onChange: Se }) : /* @__PURE__ */ e(
      et,
      {
        disabled: xe,
        value: Z ?? "",
        placeholder: I.placeholder,
        onChange: (Fe) => Se(Fe.target.value)
      }
    );
  }, mr = S ?? (_t.length >= 6 ? 2 : 1), za = /* @__PURE__ */ c(De, { children: [
    !We && Ie.hasDraft && /* @__PURE__ */ e(
      _e,
      {
        variant: "ghost",
        onClick: () => {
          Ie.clearDraft(), Vt(jr());
        },
        children: "清空草稿"
      }
    ),
    /* @__PURE__ */ e(_e, { variant: "secondary", onClick: () => Re(!1), children: "取消" }),
    /* @__PURE__ */ e(_e, { variant: "primary", loading: os, onClick: Aa, children: "确认提交" })
  ] }), Da = /* @__PURE__ */ c("form", { onSubmit: Aa, className: "space-y-3.5", children: [
    !We && Ie.hasDraft && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-primary)]/25 bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-fg-secondary)]", children: [
      /* @__PURE__ */ e("span", { children: "已自动为您恢复上次未提交的本地表单草稿" }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => {
            Ie.clearDraft(), Vt(jr());
          },
          className: "shrink-0 font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
          children: "丢弃草稿"
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: m(
          "grid gap-3.5",
          mr === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        ),
        children: _t.map((I) => {
          const Z = mr === 2 && (I.span === 2 || I.type === "textarea");
          return /* @__PURE__ */ e(
            la,
            {
              label: I.label,
              required: I.required,
              helperText: I.helperText,
              error: Ia[I.name],
              className: Z ? "sm:col-span-2" : void 0,
              children: hs(I)
            },
            I.name
          );
        })
      }
    )
  ] }), Pa = ((Ba = bn.find((I) => I.key === ve)) == null ? void 0 : Ba.label) ?? "10秒";
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": W,
      className: m(
        "relative space-y-3",
        q && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        xt.length > 0 && !se && /* @__PURE__ */ c(wr, { padding: "none", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(er, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选检索" }),
              Pr > 0 && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Pr,
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
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-expanded": me,
                onClick: () => Pe((I) => !I),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e("span", { children: me ? "收起面板" : "展开面板" }),
                  me ? /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": me, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ c(
            "form",
            {
              onSubmit: (I) => {
                I.preventDefault(), Ae(1), ee({ ...oe });
              },
              className: "grid grid-cols-1 items-end gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                bs.map((I) => /* @__PURE__ */ e(
                  la,
                  {
                    label: I.label,
                    className: I.span === 2 || I.type === "dateRange" ? "sm:col-span-2" : void 0,
                    children: ps(I)
                  },
                  I.name
                )),
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ e(_e, { type: "submit", variant: "primary", icon: /* @__PURE__ */ e(dt, { className: "h-3.5 w-3.5" }), children: "搜索" }),
                  /* @__PURE__ */ e(
                    _e,
                    {
                      type: "button",
                      variant: "secondary",
                      icon: /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5" }),
                      onClick: Br,
                      children: "重置"
                    }
                  ),
                  xt.length > 3 && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      onClick: () => ae((I) => !I),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                      children: [
                        /* @__PURE__ */ e("span", { children: je ? `展开 (${xt.length - 3})` : "收起" }),
                        je ? /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] }),
        /* @__PURE__ */ c(wr, { padding: "none", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
              r && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: r }),
              D && _t.length > 0 && cs && /* @__PURE__ */ e(
                _e,
                {
                  variant: "primary",
                  icon: /* @__PURE__ */ e(pa, { className: "h-3.5 w-3.5" }),
                  onClick: us,
                  children: "新建记录"
                }
              ),
              C
            ] }),
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              X && /* @__PURE__ */ e(
                et,
                {
                  size: "xs",
                  allowClear: !0,
                  prefix: /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
                  placeholder: "当前数据即时检索（支持拼音）...",
                  value: de,
                  onChange: (I) => {
                    H(I.target.value), Ae(1);
                  },
                  wrapperClassName: "w-52"
                }
              ),
              u && /* @__PURE__ */ e(
                qe,
                {
                  content: X ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": X,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const I = !X;
                        J(I), Ae(1), A.info(I ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式");
                      },
                      className: m(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        X ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(er, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: X ? "前端筛选" : "接口筛选" })
                      ]
                    }
                  )
                }
              ),
              ye && o && /* @__PURE__ */ c("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
                /* @__PURE__ */ e(
                  qe,
                  {
                    content: pe ? `定时轮询运行中：每 ${Pa} 自动刷新（点击暂停）` : "点击开启自动定时轮询刷新",
                    children: /* @__PURE__ */ c(
                      "button",
                      {
                        type: "button",
                        "aria-label": "切换定时自动刷新",
                        onClick: () => Me((I) => !I),
                        className: m(
                          "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                          pe ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                        ),
                        children: [
                          /* @__PURE__ */ e(
                            hr,
                            {
                              className: m("h-3.5 w-3.5", pe && "animate-pulse")
                            }
                          ),
                          pe && /* @__PURE__ */ e("span", { children: Pa })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(
                  jt,
                  {
                    placement: "bottomRight",
                    items: bn.map((I) => ({
                      key: String(I.key),
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ c("span", { children: [
                          "每 ",
                          I.label,
                          " 刷新"
                        ] }),
                        ve === I.key && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => {
                        fe(I.key), Me(!0);
                      }
                    })),
                    children: /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "选择轮询频率",
                        className: "inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(ct, { className: "h-3 w-3" })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ e(qe, { content: se ? "关闭表头内联筛选行" : "开启表头内联筛选行", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => R((I) => !I),
                  className: m(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    se ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(Mc, { className: "h-3.5 w-3.5" })
                }
              ) }),
              g && /* @__PURE__ */ e(qe, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "导出数据",
                  onClick: fs,
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" })
                }
              ) }),
              o && /* @__PURE__ */ e(qe, { content: "刷新表格数据", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "刷新数据",
                  onClick: gt,
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Er, { className: m("h-3.5 w-3.5", or && "animate-spin") })
                }
              ) }),
              /* @__PURE__ */ e(
                jt,
                {
                  placement: "bottomRight",
                  items: [
                    {
                      key: "comfortable",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "宽松密度" }),
                        P.density === "comfortable" && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => B("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "标准密度" }),
                        P.density === "default" && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => B("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑密度" }),
                        P.density === "compact" && /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => B("compact")
                    }
                  ],
                  children: /* @__PURE__ */ e(qe, { content: "表格行密度", children: /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "表格行密度",
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ic, { className: "h-3.5 w-3.5" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ e(qe, { content: q ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": q ? "退出全屏" : "全屏展示",
                  onClick: () => te((I) => !I),
                  className: m(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    q ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: q ? /* @__PURE__ */ e(ma, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(fa, { className: "h-3.5 w-3.5" })
                }
              ) }),
              /* @__PURE__ */ e(
                Md,
                {
                  columns: a,
                  searchableFieldNames: ds,
                  settings: P,
                  hasActionColumn: $r,
                  defaultActionWidth: p || v.length > 0 ? 184 : 136,
                  motion: W,
                  onToggleVisible: $,
                  onSetAllVisible: j,
                  onSetFixed: K,
                  onSetWidth: re,
                  onSetOrder: Q,
                  onSetSearchVisible: Ce,
                  onReset: U
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            ql,
            {
              columns: ms,
              data: is,
              rowKey: l,
              loading: or,
              density: P.density,
              motion: W,
              selectedKeys: Or ? It : void 0,
              onSelectionChange: Or ? (I, Z) => {
                Et(I), z(Z);
              } : void 0,
              sortState: G,
              onSortChange: (I, Z) => we({ key: I, direction: Z }),
              headerFilterMode: se,
              headerFilters: F,
              onHeaderFilterChange: (I, Z) => {
                Ae(1), ue((xe) => ({ ...xe, [I]: Z })), ee((xe) => ({ ...xe, [I]: Z }));
              },
              headerFilterRender: se ? void 0 : (I) => {
                const Z = String(I.dataIndex ?? I.key);
                return /* @__PURE__ */ e(
                  Sd,
                  {
                    title: I.title,
                    filterType: I.filterType,
                    filterOptions: I.filterOptions,
                    value: F[Z],
                    onApply: (xe) => {
                      Ae(1), ue((Se) => ({ ...Se, [Z]: xe })), ee((Se) => ({ ...Se, [Z]: xe }));
                    }
                  }
                );
              },
              columnWidths: P.columnWidths,
              onColumnResize: re,
              columnFixed: P.columnFixed,
              onColumnPin: K,
              onColumnHide: $,
              onResetColumns: U,
              onColumnReorder: Q,
              expandable: T,
              onRowView: p ? (I) => Le(I) : void 0,
              onEmptyReset: Pr > 0 ? Br : void 0,
              maxHeight: k,
              className: "rounded-none border-0"
            }
          ),
          /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] px-4 py-3", children: /* @__PURE__ */ e(
            $i,
            {
              current: Te,
              pageSize: Ye,
              motion: W,
              total: ls,
              onChange: (I, Z) => {
                Ae(I), sr(Z);
              }
            }
          ) })
        ] }),
        Or && It.length > 0 && /* @__PURE__ */ e(
          Ed,
          {
            selectedKeys: It,
            selectedRows: lr,
            batchActions: Ra,
            motion: W,
            onBatchDelete: M && Yt ? () => La(It) : void 0,
            onClear: () => {
              Et([]), z([]);
            }
          }
        ),
        /* @__PURE__ */ e(
          wt,
          {
            open: !!Ee,
            onClose: () => Le(null),
            title: "记录详情",
            size: "lg",
            footer: /* @__PURE__ */ c(De, { children: [
              Ee && D && dr && /* @__PURE__ */ e(
                _e,
                {
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(ea, { className: "h-3.5 w-3.5" }),
                  onClick: () => {
                    const I = Ee;
                    Le(null), _a(I);
                  },
                  children: "编辑此记录"
                }
              ),
              /* @__PURE__ */ e(_e, { variant: "primary", onClick: () => Le(null), children: "关闭" })
            ] }),
            children: Ee && /* @__PURE__ */ e(
              Al,
              {
                bordered: !0,
                column: 2,
                items: a.filter((I) => !I.hideInTable).map((I) => {
                  const Z = Ee[I.dataIndex ?? I.key];
                  return {
                    key: I.key,
                    label: I.title,
                    children: I.render ? I.render(Z, Ee, 0) : String(Z ?? "-")
                  };
                })
              }
            )
          }
        ),
        y === "drawer" ? /* @__PURE__ */ e(
          Sa,
          {
            open: Be,
            onClose: () => Re(!1),
            title: We ? "编辑记录" : "新建记录",
            size: mr === 2 ? "lg" : "md",
            footer: za,
            children: Da
          }
        ) : /* @__PURE__ */ e(
          wt,
          {
            open: Be,
            onClose: () => Re(!1),
            title: We ? "编辑记录" : "新建记录",
            size: mr === 2 ? "lg" : "md",
            footer: za,
            children: Da
          }
        )
      ]
    }
  );
}
export {
  Fr as ABC_BRAND_PRESETS,
  Wa as ABC_DENSITY_PRESETS,
  od as ABC_HEADER_HEIGHT_BY_SIZE,
  Xt as ABC_MOTION_PRESETS,
  Fa as ABC_RADIUS_PRESETS,
  sd as ABC_SIDEBAR_WIDTH_BY_SIZE,
  Dd as ABC_SIZE_PRESETS,
  jn as AbcConfirmHost,
  $d as AbcProvider,
  Ii as AbcToastViewport,
  Jd as ActionCard,
  bb as Alert,
  Ja as AuroraBackground,
  pd as AuthLayout,
  Hi as Avatar,
  Ud as Badge,
  rb as BentoCard,
  tb as BentoGrid,
  Za as BorderBeam,
  Dt as BrandLogoBlock,
  ab as Breadcrumb,
  _e as Button,
  wr as Card,
  Zi as CardContent,
  qi as CardDescription,
  Ji as CardFooter,
  Yi as CardHeader,
  Xi as CardTitle,
  Zd as CheckCard,
  qd as CheckCardGroup,
  tr as Checkbox,
  ib as Collapse,
  Qd as CollapsibleCard,
  fd as CommandPalette,
  Od as ConfirmProvider,
  Bi as CopyableText,
  cd as DEFAULT_ABC_LAYOUT_SETTINGS,
  Ge as DEFAULT_ABC_THEME,
  da as DatePicker,
  ba as DateRangePicker,
  Al as Descriptions,
  wt as Dialog,
  hb as DictSelect,
  vb as DictTag,
  Vd as Divider,
  Sa as Drawer,
  jt as Dropdown,
  dd as DualColumnNav,
  ji as EmptyState,
  Yl as ErrorBoundary,
  la as FormField,
  Sd as HeaderColumnFilterPopover,
  qa as ICON_CATALOG,
  yt as Icon,
  Ri as IconPicker,
  Jn as ImagePreview,
  Sl as ImageUpload,
  et as Input,
  ia as InputNumber,
  At as Kbd,
  md as KeepAliveContainer,
  db as Loading,
  Xd as MetricCard,
  ud as MultiTabBar,
  mb as PageContainer,
  $i as Pagination,
  pb as Permission,
  wd as PermissionGuard,
  Yn as Popover,
  eb as PricingCard,
  Md as ProColumnSettingsPopover,
  gb as ProConfigForm,
  Ed as ProFloatingBatchBar,
  Nd as ProFormLayout,
  fb as ProLayout,
  Id as ProRowActionsOverflow,
  xb as ProTable,
  Ul as Progress,
  rt as RadioGroup,
  Gl as Result,
  Nt as Select,
  qr as SidebarNav,
  He as Skeleton,
  Fd as SkeletonCard,
  Kd as SkeletonChart,
  Hd as SkeletonTable,
  ob as SliderVerify,
  Gd as Space,
  Yd as SpotlightCard,
  zt as StatusTag,
  nb as Steps,
  at as Switch,
  ub as TabErrorBoundary,
  Zl as Table,
  Ql as TableBody,
  nd as TableCaption,
  ad as TableCell,
  ql as TableCore,
  ed as TableFooter,
  rd as TableHead,
  Jl as TableHeader,
  td as TableRow,
  cb as Tabs,
  Tl as TagInput,
  Ar as Textarea,
  ln as ThemeCustomizer,
  lb as Timeline,
  qe as Tooltip,
  nn as TopHorizontalNav,
  sb as Tree,
  Ol as Watermark,
  Na as abcConfirm,
  Wn as abcToast,
  Xe as applyAbcThemeToDocument,
  vt as baseFieldControlClass,
  sa as buildCalendarMonthGrid,
  kd as buildCsvContent,
  Pd as buttonVariants,
  Ka as cleanQueryObject,
  m as cn,
  Kr as collectAllExpandableKeys,
  En as computeTreeCheckState,
  Bd as confirm,
  zi as copyToClipboard,
  $n as dismissToast,
  Cd as downloadTableCsv,
  Dc as filterAndSortClientRows,
  zc as filterTreeNodes,
  es as findBreadcrumbChain,
  fr as formatIsoDate,
  Ac as getCharInitial,
  _r as getOverlayPortalContainer,
  Lc as getPinyinInitials,
  Zn as isSvgSource,
  nt as matchKeywordWithPinyin,
  lt as menuContainsPath,
  pr as pushToast,
  Pc as readQueryFromUrlSearch,
  Wd as registerAbcIcons,
  Lt as resolveAbcThemeMode,
  Rc as toggleTreeNodeChecked,
  _c as transitionAbcTheme,
  Ve as useAbcConfig,
  ss as useAbcDict,
  ne as useAbcMotion,
  ns as useAbcPermission,
  be as useAbcSize,
  jd as useConfirm,
  Je as useControllableState,
  gi as useDraftStorage,
  ar as useFloatingPosition,
  Ct as usePresence,
  xi as useTableSettings,
  Bc as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
