var cl = Object.defineProperty;
var il = (t, r, a) => r in t ? cl(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var as = (t, r, a) => il(t, typeof r != "symbol" ? r + "" : r, a);
import * as le from "react";
import Ge, { useState as F, useEffect as me, useRef as ce, useCallback as de, useLayoutEffect as fs, createContext as Ts, useId as mt, useContext as Ba, useMemo as oe, useImperativeHandle as wn } from "react";
import { jsxs as c, jsx as e, Fragment as Ue } from "react/jsx-runtime";
import { Loader2 as rr, Minimize2 as Ms, Maximize2 as Es, X as ft, Trash2 as gr, AlertTriangle as $r, CheckCircle2 as Nr, HelpCircle as la, Info as ja, AlertCircle as Er, Zap as ll, XCircle as dl, Wrench as ul, Wallet as bl, Video as ml, Users as fl, UserCog as pl, UserCheck as hl, User as vl, Upload as Nn, Unlock as gl, TrendingUp as xl, Trash as yl, Timer as wl, Ticket as Nl, Terminal as kl, Tags as Cl, Tag as Sl, Store as Il, StarOff as _l, Star as Tl, Sparkles as Ra, Smartphone as Ml, SlidersHorizontal as ps, Sliders as El, ShoppingCart as Al, ShoppingBag as Ll, ShieldCheck as As, ShieldAlert as kn, Shield as Dl, Share2 as Pl, Share as Bl, Settings as jl, Server as Rl, Send as zl, Search as It, ScrollText as $l, RotateCw as Cn, RotateCcw as Vt, RefreshCw as da, Receipt as Ol, Radio as Fl, PlusCircle as Wl, Plus as Sn, Play as bc, PieChart as Hl, PhoneCall as Kl, Phone as Ul, Pause as Gl, PanelTop as Vl, PanelLeft as Yl, Palette as mc, Package as ql, Network as Xl, MoreHorizontal as Ls, Monitor as Ds, Minus as In, MessagesSquare as Zl, MessageSquareText as Jl, MessageSquareQuote as Ql, MessageSquare as ed, MessageCircle as td, Menu as fc, Megaphone as rd, MapPin as ad, Lock as nd, ListOrdered as sd, ListChecks as od, Link2 as cd, LineChart as id, LayoutGrid as ld, LayoutDashboard as dd, Layers as pc, KeyRound as hc, Key as ud, Image as vc, Home as bd, History as md, Headphones as fd, HardDrive as pd, Handshake as hd, Globe2 as vd, Globe as gd, FolderTree as xd, FolderPlus as yd, FolderOpen as wd, FolderGit2 as Nd, Folder as kd, Flame as Cd, FileText as Sd, FileSpreadsheet as Id, FileClock as _d, FileCheck as Td, Eye as ua, Edit3 as sn, Edit as Md, Download as hs, Database as Ed, CreditCard as Ad, Cpu as Ld, Copy as Or, Compass as gc, Coins as Dd, Clock as on, CircleDollarSign as Pd, CheckSquare as Bd, CheckCircle as xc, Check as bt, Camera as jd, CalendarCheck as Rd, Calendar as Ps, Building2 as zd, Boxes as $d, BookMarked as Od, BellRing as Fd, Bell as Wd, BarChart3 as Hd, BarChart2 as Kd, AlertOctagon as Ud, Activity as Gd, EyeOff as yc, ChevronDown as Yt, FolderSearch as Vd, ChevronLeft as cn, ChevronRight as br, ArrowUpRight as wc, ArrowDownRight as Yd, ChevronsLeft as Nc, ChevronsRight as kc, UploadCloud as qd, ArrowRight as Xd, ChevronsUpDown as Zd, ChevronsDownUp as Jd, ZoomOut as Qd, ZoomIn as eu, WifiOff as tu, CircleAlert as ru, Sun as La, Moon as Da, GripVertical as _n, ServerCrash as au, FileSearch as nu, ArrowUp as vs, ArrowDown as gs, ArrowUpDown as Lo, Pin as oa, PinOff as su, Pencil as ou, CornerDownLeft as Cc, Code2 as cu, PanelLeftOpen as iu, PanelLeftClose as lu, Save as Sc, ChevronUp as ln, Filter as Aa, Settings2 as du, ListFilter as uu, AlignJustify as bu } from "lucide-react";
import { createPortal as ar } from "react-dom";
import ze from "dayjs";
const ns = {
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
}, Do = {
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
}, Po = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, mp = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, Sa = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, St = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, Bo = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function mu(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of Bo)
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
  for (const s of Bo)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function aa(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function fu(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Mt(t) {
  const r = aa(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return fu(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), mu(a, t.customBrandColor), r;
}
function pu(t, r) {
  if (typeof document > "u" || typeof window > "u") {
    t();
    return;
  }
  const a = document, n = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!r || typeof a.startViewTransition != "function" || n) {
    t();
    return;
  }
  const s = r.clientX, o = r.clientY, d = Math.hypot(Math.max(s, window.innerWidth - s), Math.max(o, window.innerHeight - o));
  a.startViewTransition(() => {
    t();
  }).ready.then(() => {
    document.documentElement.animate({
      clipPath: [`circle(0px at ${s}px ${o}px)`, `circle(${d}px at ${s}px ${o}px)`]
    }, {
      duration: 380,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      pseudoElement: "::view-transition-new(root)"
    });
  }).catch(() => {
  });
}
const ss = [
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
function hu(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = ss.length - 1; r >= 0; r--)
    if (t.localeCompare(ss[r].start, "zh-CN") >= 0)
      return ss[r].letter;
  return t.toLowerCase();
}
function vu(t) {
  return Array.from(t).map(hu).join("");
}
function qt(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : vu(t).includes(a);
}
function Ic(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      Ic(a, r);
  return r;
}
function _c(t, r, a = !1) {
  const n = new Set(r), s = /* @__PURE__ */ new Set();
  if (a)
    return {
      checkedKeys: Array.from(n),
      halfCheckedKeys: []
    };
  function o(d) {
    if (!d.children || d.children.length === 0) {
      const b = n.has(d.key);
      return { allChecked: b, someChecked: b };
    }
    const i = d.children.filter((b) => !b.disabled);
    if (i.length === 0) {
      const b = n.has(d.key);
      return { allChecked: b, someChecked: b };
    }
    let u = !0, l = !1;
    for (const b of i) {
      const f = o(b);
      f.allChecked || (u = !1), f.someChecked && (l = !0);
    }
    return u ? (n.add(d.key), s.delete(d.key)) : l ? (n.delete(d.key), s.add(d.key)) : (n.delete(d.key), s.delete(d.key)), { allChecked: u, someChecked: l };
  }
  for (const d of t)
    o(d);
  return {
    checkedKeys: Array.from(n),
    halfCheckedKeys: Array.from(s)
  };
}
function gu(t, r, a, n, s = !1) {
  const o = new Set(r);
  if (s)
    return n ? o.add(a.key) : o.delete(a.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const d = Ic(a);
  for (const i of d)
    n ? o.add(i) : o.delete(i);
  return _c(t, Array.from(o), !1);
}
function xu(t, r) {
  const a = r.trim();
  if (!a)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(o) {
    const d = [];
    for (const i of o) {
      const u = i.children ? s(i.children) : [], l = qt(i.title, a);
      (l || u.length > 0) && (u.length > 0 && n.push(i.key), d.push({
        ...i,
        children: u.length > 0 ? u : i.children && l ? i.children : void 0
      }));
    }
    return d;
  }
  return {
    filteredNodes: s(t),
    autoExpandedKeys: n
  };
}
function os(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function Tc(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function ea(t, r) {
  if (!(!t || typeof t != "object")) {
    if (r in t)
      return t[r];
    if (r.includes("."))
      return r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t);
  }
}
function yu({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let d = [...t];
  const i = a.trim();
  i && (d = d.filter((u) => (r && r.length > 0 ? r : Object.keys(u)).some((b) => {
    const f = ea(u, b);
    return f != null && qt(String(f), i);
  })));
  for (const [u, l] of Object.entries(n))
    if (l != null) {
      if (Array.isArray(l)) {
        if (l.length === 0)
          continue;
        d = d.filter((b) => {
          const f = ea(b, u);
          return f == null ? !1 : Array.isArray(f) ? l.some((v) => f.map(String).includes(String(v))) : l.some((v) => String(f) === String(v) || qt(String(f), String(v)));
        });
        continue;
      }
      if (Tc(l)) {
        const b = (l.start ?? "").trim(), f = (l.end ?? "").trim();
        if (!b && !f)
          continue;
        d = d.filter((v) => {
          const m = ea(v, u);
          if (m == null)
            return !1;
          const h = String(m).slice(0, 10);
          return !(b && h < b || f && h > f);
        });
        continue;
      }
      String(l).trim() !== "" && (d = d.filter((b) => {
        const f = ea(b, u);
        return f == null ? !1 : qt(String(f), String(l));
      }));
    }
  if (s && o) {
    const u = o === "asc" ? 1 : -1;
    d.sort((l, b) => {
      const f = ea(l, s), v = ea(b, s);
      return typeof f == "number" && typeof v == "number" ? (f - v) * u : String(f ?? "").localeCompare(String(v ?? ""), "zh-CN") * u;
    });
  }
  return d;
}
function en(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || Tc(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function wu(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((o, d) => {
    o && (s && !s.has(d) || (n[d] = o));
  }), n;
}
function Nu(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of r)
    n.delete(o);
  for (const [o, d] of Object.entries(a))
    d == null || Array.isArray(d) || typeof d == "object" || String(d).trim() !== "" && n.set(o, String(d));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function tn(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), d = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${d}`;
}
function xs(t, r, a = /* @__PURE__ */ new Date()) {
  const n = tn(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), o = new Date(t, r + 1, 0).getDate(), d = new Date(t, r, 0).getDate(), i = [];
  for (let l = s - 1; l >= 0; l--) {
    const b = d - l, f = tn(t, r - 1, b);
    i.push({ iso: f, day: b, inCurrentMonth: !1, isToday: f === n });
  }
  for (let l = 1; l <= o; l++) {
    const b = tn(t, r, l);
    i.push({ iso: b, day: l, inCurrentMonth: !0, isToday: b === n });
  }
  let u = 1;
  for (; i.length < 42; ) {
    const l = tn(t, r + 1, u);
    i.push({ iso: l, day: u, inCurrentMonth: !1, isToday: l === n }), u += 1;
  }
  return i;
}
function Mc(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = Mc(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function ku() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = Mc(t)) && (n && (n += " "), n += r);
  return n;
}
const Bs = "-", Cu = (t) => {
  const r = Iu(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (d) => {
      const i = d.split(Bs);
      return i[0] === "" && i.length !== 1 && i.shift(), Ec(i, r) || Su(d);
    },
    getConflictingClassGroupIds: (d, i) => {
      const u = a[d] || [];
      return i && n[d] ? [...u, ...n[d]] : u;
    }
  };
}, Ec = (t, r) => {
  var d;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? Ec(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = t.join(Bs);
  return (d = r.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : d.classGroupId;
}, jo = /^\[(.+)\]$/, Su = (t) => {
  if (jo.test(t)) {
    const r = jo.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Iu = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Tu(Object.entries(t.classGroups), a).forEach(([o, d]) => {
    ys(d, n, o, r);
  }), n;
}, ys = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : Ro(r, s);
      o.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (_u(s)) {
        ys(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([o, d]) => {
      ys(d, Ro(r, o), a, n);
    });
  });
}, Ro = (t, r) => {
  let a = t;
  return r.split(Bs).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, _u = (t) => t.isThemeGetter, Tu = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([d, i]) => [r + d, i])) : o);
  return [a, s];
}) : t, Mu = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (o, d) => {
    a.set(o, d), r++, r > t && (r = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let d = a.get(o);
      if (d !== void 0)
        return d;
      if ((d = n.get(o)) !== void 0)
        return s(o, d), d;
    },
    set(o, d) {
      a.has(o) ? a.set(o, d) : s(o, d);
    }
  };
}, Ac = "!", Eu = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], o = r.length, d = (i) => {
    const u = [];
    let l = 0, b = 0, f;
    for (let y = 0; y < i.length; y++) {
      let C = i[y];
      if (l === 0) {
        if (C === s && (n || i.slice(y, y + o) === r)) {
          u.push(i.slice(b, y)), b = y + o;
          continue;
        }
        if (C === "/") {
          f = y;
          continue;
        }
      }
      C === "[" ? l++ : C === "]" && l--;
    }
    const v = u.length === 0 ? i : i.substring(b), m = v.startsWith(Ac), h = m ? v.substring(1) : v, g = f && f > b ? f - b : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: d
  }) : d;
}, Au = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, Lu = (t) => ({
  cache: Mu(t.cacheSize),
  parseClassName: Eu(t),
  ...Cu(t)
}), Du = /\s+/, Pu = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], d = t.trim().split(Du);
  let i = "";
  for (let u = d.length - 1; u >= 0; u -= 1) {
    const l = d[u], {
      modifiers: b,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: m
    } = a(l);
    let h = !!m, g = n(h ? v.substring(0, m) : v);
    if (!g) {
      if (!h) {
        i = l + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (g = n(v), !g) {
        i = l + (i.length > 0 ? " " + i : i);
        continue;
      }
      h = !1;
    }
    const y = Au(b).join(":"), C = f ? y + Ac : y, x = C + g;
    if (o.includes(x))
      continue;
    o.push(x);
    const I = s(g, h);
    for (let A = 0; A < I.length; ++A) {
      const B = I[A];
      o.push(C + B);
    }
    i = l + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Bu() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = Lc(r)) && (n && (n += " "), n += a);
  return n;
}
const Lc = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = Lc(t[n])) && (a && (a += " "), a += r);
  return a;
};
function ju(t, ...r) {
  let a, n, s, o = d;
  function d(u) {
    const l = r.reduce((b, f) => f(b), t());
    return a = Lu(l), n = a.cache.get, s = a.cache.set, o = i, i(u);
  }
  function i(u) {
    const l = n(u);
    if (l)
      return l;
    const b = Pu(u, a);
    return s(u, b), b;
  }
  return function() {
    return o(Bu.apply(null, arguments));
  };
}
const rt = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, Dc = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ru = /^\d+\/\d+$/, zu = /* @__PURE__ */ new Set(["px", "full", "screen"]), $u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ou = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Wu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Hu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vr = (t) => na(t) || zu.has(t) || Ru.test(t), _r = (t) => ba(t, "length", Zu), na = (t) => !!t && !Number.isNaN(Number(t)), cs = (t) => ba(t, "number", na), Ia = (t) => !!t && Number.isInteger(Number(t)), Ku = (t) => t.endsWith("%") && na(t.slice(0, -1)), je = (t) => Dc.test(t), Tr = (t) => $u.test(t), Uu = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Gu = (t) => ba(t, Uu, Pc), Vu = (t) => ba(t, "position", Pc), Yu = /* @__PURE__ */ new Set(["image", "url"]), qu = (t) => ba(t, Yu, Qu), Xu = (t) => ba(t, "", Ju), _a = () => !0, ba = (t, r, a) => {
  const n = Dc.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, Zu = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ou.test(t) && !Fu.test(t)
), Pc = () => !1, Ju = (t) => Wu.test(t), Qu = (t) => Hu.test(t), eb = () => {
  const t = rt("colors"), r = rt("spacing"), a = rt("blur"), n = rt("brightness"), s = rt("borderColor"), o = rt("borderRadius"), d = rt("borderSpacing"), i = rt("borderWidth"), u = rt("contrast"), l = rt("grayscale"), b = rt("hueRotate"), f = rt("invert"), v = rt("gap"), m = rt("gradientColorStops"), h = rt("gradientColorStopPositions"), g = rt("inset"), y = rt("margin"), C = rt("opacity"), x = rt("padding"), I = rt("saturate"), A = rt("scale"), B = rt("sepia"), L = rt("skew"), N = rt("space"), w = rt("translate"), M = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", je, r], E = () => [je, r], z = () => ["", vr, _r], U = () => ["auto", na, je], R = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], T = () => ["solid", "dashed", "dotted", "double", "none"], P = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", je], K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], V = () => [na, je];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [_a],
      spacing: [vr, _r],
      blur: ["none", "", Tr, je],
      brightness: V(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Tr, je],
      borderSpacing: E(),
      borderWidth: z(),
      contrast: V(),
      grayscale: j(),
      hueRotate: V(),
      invert: j(),
      gap: E(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Ku, _r],
      inset: S(),
      margin: S(),
      opacity: V(),
      padding: E(),
      saturate: V(),
      scale: V(),
      sepia: j(),
      skew: V(),
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
        aspect: ["auto", "square", "video", je]
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
        columns: [Tr]
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
        object: [...R(), je]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", Ia, je]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: S()
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
        flex: ["1", "auto", "initial", "none", je]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: j()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: j()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ia, je]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_a]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ia, je]
        }, je]
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
        "grid-rows": [_a]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ia, je]
        }, je]
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
        "auto-cols": ["auto", "min", "max", "fr", je]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", je]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", je, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [je, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [je, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Tr]
        }, Tr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [je, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [je, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [je, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [je, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Tr, _r]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", cs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_a]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", je]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", na, cs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vr, je]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", je]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", je]
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
        decoration: [...T(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", vr, _r]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", vr, je]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", je]
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
        content: ["none", je]
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
        bg: [...R(), Vu]
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
        bg: ["auto", "cover", "contain", Gu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, qu]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...T(), "hidden"]
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
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: T()
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
        outline: ["", ...T()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [vr, je]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [vr, _r]
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
        ring: z()
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
        "ring-offset": [vr, _r]
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
        shadow: ["", "inner", "none", Tr, Xu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_a]
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
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Tr, je]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I]
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
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
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
        "backdrop-saturate": [I]
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
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", je]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: V()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", je]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: V()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", je]
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
        rotate: [Ia, je]
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
        "skew-x": [L]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [L]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", je]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", je]
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
        "will-change": ["auto", "scroll", "contents", "transform", je]
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
        stroke: [vr, _r, cs]
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
}, tb = /* @__PURE__ */ ju(eb);
function p(...t) {
  return tb(ku(t));
}
function rb() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Fr(t, r = 200) {
  const [a, n] = F(t), s = rb();
  return t && !a && n(!0), me(() => {
    if (t) {
      n(!0);
      return;
    }
    if (typeof process < "u" && process.env.NODE_ENV === "test" || s || r <= 0) {
      n(!1);
      return;
    }
    const i = window.setTimeout(() => {
      n(!1);
    }, r);
    return () => window.clearTimeout(i);
  }, [t, r, s]), { isMounted: t ? !0 : s || r <= 0 ? !1 : a, isVisible: t };
}
function tr({
  value: t,
  defaultValue: r,
  onChange: a
}) {
  const [n, s] = F(r), o = t !== void 0, d = o ? t : n, i = ce(d);
  i.current = d;
  const u = ce(a);
  u.current = a;
  const l = de(
    (b) => {
      var v;
      const f = typeof b == "function" ? b(i.current) : b;
      o || s(f), (v = u.current) == null || v.call(u, f);
    },
    [o]
  );
  return [d, l];
}
function ab(t) {
  const r = t ? `abc_draft_${t}` : "", a = de(() => {
    if (!r || typeof window > "u") return null;
    try {
      const i = window.localStorage.getItem(r);
      return i ? JSON.parse(i) : null;
    } catch {
      return null;
    }
  }, [r]), [n, s] = F(() => !!a()), o = de(
    (i) => {
      if (!(!r || typeof window > "u"))
        try {
          window.localStorage.setItem(r, JSON.stringify(i)), s(!0);
        } catch {
        }
    },
    [r]
  ), d = de(() => {
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
    clearDraft: d
  };
}
const zo = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  density: "default"
};
function nb(t, r = "default", a = []) {
  const n = t ? `abc_table_${t}` : "", [s, o] = F(() => {
    const h = {
      ...zo,
      hiddenKeys: a,
      density: r
    };
    if (!n || typeof window > "u") return h;
    try {
      const g = window.localStorage.getItem(n);
      if (!g) return h;
      const y = JSON.parse(g);
      return {
        hiddenKeys: Array.isArray(y.hiddenKeys) ? y.hiddenKeys : a,
        columnOrder: Array.isArray(y.columnOrder) ? y.columnOrder : [],
        columnWidths: y.columnWidths && typeof y.columnWidths == "object" ? y.columnWidths : {},
        columnFixed: y.columnFixed && typeof y.columnFixed == "object" ? y.columnFixed : {},
        searchVisible: y.searchVisible && typeof y.searchVisible == "object" ? y.searchVisible : {},
        density: y.density ?? r
      };
    } catch {
      return h;
    }
  });
  me(() => {
    if (!(!n || typeof window > "u"))
      try {
        window.localStorage.setItem(n, JSON.stringify(s));
      } catch {
      }
  }, [n, s]);
  const d = de((h) => {
    o((g) => ({
      ...g,
      hiddenKeys: g.hiddenKeys.includes(h) ? g.hiddenKeys.filter((y) => y !== h) : [...g.hiddenKeys, h]
    }));
  }, []), i = de((h, g) => {
    o((y) => ({
      ...y,
      hiddenKeys: g ? [] : Array.from(new Set(h))
    }));
  }, []), u = de(
    (h, g) => {
      o((y) => {
        const C = { ...y.columnFixed };
        return g === void 0 ? delete C[h] : C[h] = g, {
          ...y,
          columnFixed: C
        };
      });
    },
    []
  ), l = de((h, g) => {
    o((y) => ({
      ...y,
      columnWidths: { ...y.columnWidths, [h]: Math.max(64, Math.round(g)) }
    }));
  }, []), b = de((h) => {
    o((g) => ({ ...g, columnOrder: h }));
  }, []), f = de((h, g) => {
    o((y) => ({
      ...y,
      searchVisible: { ...y.searchVisible, [h]: g }
    }));
  }, []), v = de((h) => {
    o((g) => ({ ...g, density: h }));
  }, []), m = de(() => {
    o({ ...zo, hiddenKeys: a, density: r });
  }, [r, a]);
  return {
    settings: s,
    toggleColumnVisible: d,
    setAllColumnsVisible: i,
    setColumnFixed: u,
    setColumnWidth: l,
    setColumnOrder: b,
    setSearchFieldVisible: f,
    setDensity: v,
    resetSettings: m
  };
}
const sb = typeof window < "u" ? fs : me;
function Tn(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function ob(t) {
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
function is(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function za({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: d = 8
}) {
  const { side: i, align: u } = ob(n), [l, b] = F(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: i,
    arrowOffset: 16,
    transformOrigin: is(i, u),
    positioned: !1
  })), f = de(() => {
    if (typeof window > "u" || !r.current) return;
    const m = r.current.getBoundingClientRect(), h = a.current, g = h == null ? void 0 : h.getBoundingClientRect(), y = window.innerWidth || 1024, C = window.innerHeight || 768, x = d, I = h ? h.offsetWidth : 0, A = h ? h.offsetHeight : 0, B = I || (g == null ? void 0 : g.width) || (o ? m.width : 180), L = o ? Math.max(B, m.width) : B, N = A || (g == null ? void 0 : g.height) || 40;
    if (m.width === 0 && m.height === 0 && m.top === 0 && m.left === 0) {
      b({
        top: s,
        left: x,
        minWidth: o && m.width > 0 ? m.width : void 0,
        actualSide: i,
        arrowOffset: 16,
        transformOrigin: is(i, u),
        positioned: !0
      });
      return;
    }
    let w = i;
    if (i === "bottom") {
      const W = C - m.bottom - s - x, j = m.top - s - x;
      N > W && j > W && (w = "top");
    } else if (i === "top") {
      const W = m.top - s - x, j = C - m.bottom - s - x;
      N > W && j > W && (w = "bottom");
    } else if (i === "left") {
      const W = m.left - s - x, j = y - m.right - s - x;
      L > W && j > W && (w = "right");
    } else if (i === "right") {
      const W = y - m.right - s - x, j = m.left - s - x;
      L > W && j > W && (w = "left");
    }
    let M = 0, _ = 0;
    w === "bottom" || w === "top" ? (M = w === "bottom" ? m.bottom + s : m.top - N - s, u === "start" ? _ = m.left : u === "end" ? _ = m.right - L : _ = m.left + m.width / 2 - L / 2) : (_ = w === "right" ? m.right + s : m.left - L - s, u === "start" ? M = m.top : u === "end" ? M = m.bottom - N : M = m.top + m.height / 2 - N / 2);
    const S = Math.max(x, y - L - x), E = Math.max(x, C - N - x), z = Math.min(Math.max(x, _), S), U = Math.min(Math.max(x, M), E), R = w === "top" || w === "bottom" ? Math.min(
      Math.max(10, m.left + m.width / 2 - z),
      Math.max(10, L - 10)
    ) : Math.min(
      Math.max(10, m.top + m.height / 2 - U),
      Math.max(10, N - 10)
    ), T = is(w, u), P = o ? Math.round(m.width) : void 0;
    b((W) => W.positioned && Math.abs(W.top - U) < 0.5 && Math.abs(W.left - z) < 0.5 && W.minWidth === P && W.actualSide === w && Math.abs(W.arrowOffset - R) < 0.5 && W.transformOrigin === T ? W : {
      top: Math.round(U * 10) / 10,
      left: Math.round(z * 10) / 10,
      minWidth: P,
      actualSide: w,
      arrowOffset: Math.round(R),
      transformOrigin: T,
      positioned: !0
    });
  }, [r, a, i, u, s, o, d]);
  sb(() => {
    if (!t) {
      b((h) => h.positioned ? { ...h, positioned: !1 } : h);
      return;
    }
    f();
    const m = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(f) : 0;
    return () => {
      m && typeof window < "u" && window.cancelAnimationFrame(m);
    };
  }, [t, f]), me(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", f, { passive: !0 }), window.addEventListener("scroll", f, !0);
    let m = null;
    return typeof ResizeObserver < "u" && (m = new ResizeObserver(() => f()), a.current && m.observe(a.current), r.current && m.observe(r.current)), () => {
      window.removeEventListener("resize", f), window.removeEventListener("scroll", f, !0), m == null || m.disconnect();
    };
  }, [t, f, a, r]);
  const v = t ? Tn(r.current) : null;
  return {
    style: {
      position: "fixed",
      top: `${l.top}px`,
      left: `${l.left}px`,
      minWidth: l.minWidth ? `${l.minWidth}px` : void 0,
      transformOrigin: l.transformOrigin,
      // 尚未完成首帧同步坐标测算前先隐藏，防止残影在 (0, 0) 或上次位置闪现一帧
      visibility: t && !l.positioned ? "hidden" : void 0
    },
    actualSide: l.actualSide,
    arrowOffset: l.arrowOffset,
    portalContainer: v,
    update: f
  };
}
const dn = {
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
}, un = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  default: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm",
  icon: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  "icon-sm": "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0"
}, ws = {
  xs: "h-[var(--abc-control-h-xs)] w-[var(--abc-control-h-xs)] p-0",
  sm: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  default: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  md: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  lg: "h-[var(--abc-control-h-lg)] w-[var(--abc-control-h-lg)] p-0"
};
function fp({
  variant: t = "primary",
  size: r = "sm",
  iconOnly: a = !1,
  className: n
} = {}) {
  const s = dn[t] || dn.primary, o = a ? ws[r] || ws.sm : un[r] || un.sm;
  return p(
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
    "disabled:opacity-45 disabled:cursor-not-allowed",
    s,
    o,
    n
  );
}
const xe = Ge.forwardRef(
  ({
    className: t,
    variant: r = "primary",
    size: a,
    motion: n,
    loading: s = !1,
    loadingText: o,
    disabled: d,
    icon: i,
    leftIcon: u,
    rightIcon: l,
    iconOnly: b = !1,
    block: f = !1,
    asChild: v = !1,
    type: m,
    children: h,
    ...g
  }, y) => {
    const C = a === "icon" || a === "icon-sm", A = Se(C ? void 0 : a === "default" ? "sm" : a, "sm"), B = ve(n), L = !!(d || s), N = u ?? i, w = p(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      dn[r] || dn.primary,
      C ? un[a] : b ? ws[A] : un[A],
      f && "w-full",
      t
    );
    if (v && Ge.isValidElement(h)) {
      const M = h;
      return Ge.cloneElement(M, {
        className: p(w, M.props.className),
        ...g
      });
    }
    return /* @__PURE__ */ c(
      "button",
      {
        ref: y,
        type: m,
        disabled: L,
        "data-motion": B,
        className: w,
        ...g,
        children: [
          s ? /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : N && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: N }),
          s && o !== void 0 ? o : h,
          !s && l && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: l })
        ]
      }
    );
  }
);
xe.displayName = "Button";
const js = Ts(null);
function cb() {
  return Ba(js);
}
const ib = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  "2xl": "max-w-4xl",
  "3xl": "max-w-5xl",
  "4xl": "max-w-6xl",
  "5xl": "max-w-7xl"
}, Xt = ({
  open: t,
  visible: r,
  isOpen: a,
  onClose: n,
  onCancel: s,
  onOpenChange: o,
  closable: d = !0,
  closeDisabled: i = !1,
  closeLabel: u = "关闭",
  title: l,
  description: b,
  children: f,
  footer: v,
  size: m,
  maxWidth: h = "md",
  width: g,
  closeOnClickModal: y = !0,
  draggable: C = !0,
  fullscreenable: x = !0,
  fullscreen: I,
  onFullscreenChange: A,
  motion: B,
  className: L
}) => {
  const N = t ?? r ?? a ?? !1, w = ve(B), { isMounted: M, isVisible: _ } = Fr(N, w === "none" ? 0 : 180), S = mt(), E = mt(), z = ce(null), U = ce(null), R = ce(!1), T = de(() => {
    i || (n ? n() : s ? s() : o && o(!1));
  }, [i, n, s, o]), P = ce(T);
  P.current = T;
  const W = !!(l !== void 0 || x), [j, K] = F(!1), V = I !== void 0 ? I : j, [ne, H] = F({ x: 0, y: 0 }), te = ce(
    null
  ), Z = de(() => {
    const Y = !V;
    I === void 0 && K(Y), A == null || A(Y);
  }, [V, I, A]);
  me(() => {
    if (!M) return;
    const Y = z.current;
    if (!Y) return;
    let Te = !1;
    if (typeof Y.showModal == "function")
      if (Y.open)
        Te = !0;
      else
        try {
          Y.showModal(), Te = !0;
        } catch {
          Y.setAttribute("open", "");
        }
    else
      Y.setAttribute("open", "");
    const Le = (fe) => {
      fe.preventDefault(), P.current();
    }, be = (fe) => {
      fe.key === "Escape" && (fe.stopPropagation(), P.current());
    };
    return Y.addEventListener("cancel", Le), (!Te || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", be), () => {
      if (Y.removeEventListener("cancel", Le), window.removeEventListener("keydown", be), Y.open && typeof Y.close == "function")
        try {
          Y.close();
        } catch {
          Y.removeAttribute("open");
        }
    };
  }, [M]), me(() => {
    N || (H({ x: 0, y: 0 }), I === void 0 && K(!1));
  }, [N, I]);
  const re = (Y) => {
    var fe;
    const Te = Y.target;
    if ((fe = Te == null ? void 0 : Te.closest) != null && fe.call(Te, "[data-abc-floating]"))
      return !1;
    const Le = U.current;
    if (!Le) return !1;
    const be = Le.getBoundingClientRect();
    return be.width === 0 && be.height === 0 ? !Le.contains(Y.target) : Y.clientX < be.left || Y.clientX > be.right || Y.clientY < be.top || Y.clientY > be.bottom;
  }, ee = (Y) => {
    if (!C || V || Y.button !== 0 || Y.target.closest('button, a, input, [role="button"]')) return;
    te.current = {
      startX: Y.clientX,
      startY: Y.clientY,
      origX: ne.x,
      origY: ne.y
    };
    const Te = (be) => {
      te.current && H({
        x: te.current.origX + (be.clientX - te.current.startX),
        y: te.current.origY + (be.clientY - te.current.startY)
      });
    }, Le = () => {
      te.current = null, window.removeEventListener("mousemove", Te), window.removeEventListener("mouseup", Le);
    };
    window.addEventListener("mousemove", Te), window.addEventListener("mouseup", Le);
  };
  if (!M || typeof document > "u") return null;
  const Ne = m || h, $ = ib[Ne] || Ne;
  return ar(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: z,
        "data-motion": w,
        "aria-labelledby": S,
        "aria-describedby": b ? E : void 0,
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
          padding: V ? 0 : "1rem",
          border: "none",
          backgroundColor: "rgba(2, 6, 23, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1100
        },
        onPointerDown: (Y) => {
          R.current = y && re(Y);
        },
        onPointerUp: (Y) => {
          y && R.current && re(Y) && P.current(), R.current = !1;
        },
        onClick: (Y) => {
          y && Y.target === z.current && !R.current && P.current();
        },
        className: p(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          V && "p-0",
          w !== "none" && (_ ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: U,
            "data-dialog-panel": "",
            "data-motion": w,
            style: {
              width: !V && g ? g : void 0,
              transform: !V && (ne.x !== 0 || ne.y !== 0) ? `translate3d(${ne.x}px, ${ne.y}px, 0)` : void 0
            },
            className: p(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              V ? "h-dvh w-dvw rounded-none" : p("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !g && $),
              w !== "none" && (_ ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              L
            ),
            children: /* @__PURE__ */ c(js.Provider, { value: { isOpen: N, handleClose: T, closeDisabled: i, hasHeader: W, titleId: S }, children: [
              (l !== void 0 || x) && /* @__PURE__ */ c(
                "div",
                {
                  onMouseDown: ee,
                  onDoubleClick: x ? Z : void 0,
                  className: p(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    C && !V && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                      l && /* @__PURE__ */ e("h2", { id: S, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: l }),
                      b && /* @__PURE__ */ e("p", { id: E, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: b })
                    ] }),
                    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
                      x && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": V ? "还原窗口" : "全屏",
                          title: V ? "退出全屏" : "全屏显示",
                          onClick: (Y) => {
                            Y.stopPropagation(), Z();
                          },
                          onMouseDown: (Y) => Y.stopPropagation(),
                          onPointerDown: (Y) => Y.stopPropagation(),
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: V ? /* @__PURE__ */ e(Ms, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Es, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": u,
                          title: u,
                          disabled: i,
                          onClick: (Y) => {
                            Y.stopPropagation(), T();
                          },
                          onMouseDown: (Y) => Y.stopPropagation(),
                          onPointerDown: (Y) => Y.stopPropagation(),
                          className: p(
                            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                            i && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
                          ),
                          children: /* @__PURE__ */ e(ft, { className: "h-4 w-4" })
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
              v && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: v })
            ] })
          }
        )
      }
    ),
    document.body
  );
}, lb = Xt;
function Rs({
  className: t,
  children: r,
  closeLabel: a = "关闭",
  closeDisabled: n,
  closable: s,
  onClose: o,
  ...d
}) {
  const i = Ba(js), u = s ?? (i ? !i.hasHeader : !1), l = n ?? (i == null ? void 0 : i.closeDisabled) ?? !1;
  return /* @__PURE__ */ c("div", { "data-slot": "dialog-content", className: p("relative space-y-4", t), ...d, children: [
    u && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": a,
        title: a,
        disabled: l,
        onClick: (b) => {
          b.stopPropagation(), o ? o() : i && i.handleClose();
        },
        onMouseDown: (b) => b.stopPropagation(),
        onPointerDown: (b) => b.stopPropagation(),
        className: p(
          "absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10",
          l && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
        ),
        children: /* @__PURE__ */ e(ft, { className: "h-4 w-4" })
      }
    ),
    r
  ] });
}
function zs({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: p("flex flex-col space-y-1.5 text-left", t), ...a, children: r });
}
function $s({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: p("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...a, children: r });
}
function Os({ className: t, children: r, id: a, ...n }) {
  const s = cb();
  return /* @__PURE__ */ e("h2", { id: a ?? (s == null ? void 0 : s.titleId), "data-slot": "dialog-title", className: p("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...n, children: r });
}
function Fs({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: p("text-xs text-[var(--abc-fg-muted)]", t), ...a, children: r });
}
const bn = /* @__PURE__ */ new Set();
let Bc = null, Ma = 0;
function jc(t) {
  Bc = t, bn.forEach((r) => r(t));
}
function db(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function mn(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (Ma === 0 && typeof window < "u" && bn.size === 0) {
    const s = r.content ?? r.message, o = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    jc({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: db(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const pp = mn;
function hp() {
  return mn;
}
const Rc = () => {
  const [t, r] = F(!1), [a, n] = F(() => Bc), [s, o] = F(!1);
  if (me(() => {
    Ma += 1, r(Ma === 1);
    const l = (b) => n(b);
    return bn.add(l), () => {
      Ma = Math.max(0, Ma - 1), bn.delete(l);
    };
  }, []), !t || !a) return null;
  const d = async (u) => {
    var l;
    if (!(!a || s)) {
      if (u && a.onConfirm)
        try {
          o(!0), await a.onConfirm();
        } finally {
          o(!1);
        }
      else u || (l = a.onCancel) == null || l.call(a);
      a.resolve(u), jc(null);
    }
  }, i = a.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(gr, { className: "h-4 w-4" }) }) : a.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e($r, { className: "h-4 w-4" }) }) : a.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(Nr, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(la, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    Xt,
    {
      open: !!a,
      onClose: () => d(!1),
      title: a.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ c(Ue, { children: [
        /* @__PURE__ */ e(
          xe,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: a.resolvedTone === "danger",
            onClick: () => d(!1),
            children: a.cancelText
          }
        ),
        /* @__PURE__ */ e(
          xe,
          {
            variant: a.resolvedTone === "danger" ? "danger" : a.resolvedTone === "warning" ? "warning" : a.resolvedTone === "success" ? "success" : "primary",
            loading: s,
            autoFocus: a.resolvedTone !== "danger",
            onClick: () => d(!0),
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
}, vp = ({ children: t }) => /* @__PURE__ */ c(Ue, { children: [
  t,
  /* @__PURE__ */ e(Rc, {})
] });
let Bt = [];
const Ns = /* @__PURE__ */ new Set(), xr = /* @__PURE__ */ new Map();
let ub = 0;
function Ws() {
  const t = [...Bt];
  Ns.forEach((r) => r(t));
}
function bb(t) {
  const r = xr.get(t);
  if (!r || r.isPaused || r.remaining <= 0) return;
  r.timerId && (clearTimeout(r.timerId), r.timerId = void 0);
  const a = Date.now() - r.startedAt;
  r.remaining = Math.max(0, r.remaining - a), r.isPaused = !0;
}
function mb(t) {
  const r = xr.get(t);
  !r || !r.isPaused || r.remaining <= 0 || (r.isPaused = !1, r.startedAt = Date.now(), typeof window < "u" && (r.timerId = window.setTimeout(r.onExpire, r.remaining)));
}
function Hs(t) {
  var n;
  const r = xr.get(t);
  r != null && r.timerId && clearTimeout(r.timerId), xr.delete(t);
  const a = Bt.find((s) => s.id === t);
  a && ((n = a.onClose) == null || n.call(a)), Bt = Bt.filter((s) => s.id !== t), Ws();
}
function fb() {
  xr.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), xr.clear(), Bt.forEach((t) => {
    var r;
    return (r = t.onClose) == null ? void 0 : r.call(t);
  }), Bt = [], Ws();
}
function ta(t, r, a) {
  const n = `abc_toast_${++ub}_${Date.now()}`;
  let s = {};
  r !== null && typeof r == "object" && !Ge.isValidElement(r) ? s = r : s = { message: r };
  const o = s.tone ?? t, d = o === "danger" ? "error" : o, i = s.content ?? s.message ?? s.description ?? "", u = d === "error" ? 4200 : d === "warning" ? 3600 : d === "loading" ? 0 : 3e3, l = s.duration ?? a ?? u, b = {
    ...s,
    id: n,
    tone: d,
    message: i,
    duration: l,
    createdAt: Date.now()
  };
  if (Bt.length >= 30 && (Bt.slice(0, Bt.length - 29).forEach((v) => {
    const m = xr.get(v.id);
    m != null && m.timerId && clearTimeout(m.timerId), xr.delete(v.id);
  }), Bt = Bt.slice(-29)), Bt = [...Bt, b], Ws(), l > 0 && typeof window < "u") {
    const f = {
      startedAt: Date.now(),
      remaining: l,
      isPaused: !1,
      onExpire: () => Hs(n)
    };
    f.timerId = window.setTimeout(f.onExpire, l), xr.set(n, f);
  }
  return n;
}
const Ks = {
  success: (t, r) => ta("success", t, r),
  error: (t, r) => ta("error", t, r ?? 4200),
  info: (t, r) => ta("info", t, r),
  warning: (t, r) => ta("warning", t, r ?? 3600),
  loading: (t, r = 0) => ta("loading", t, r),
  push: (t, r, a) => ta(t, r, a),
  dismiss: (t) => Hs(t),
  clear: () => fb()
}, gp = Ks, $o = {
  success: /* @__PURE__ */ e(Nr, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(Er, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(Er, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e($r, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(ja, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(rr, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, pb = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, hb = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, vb = ({
  item: t,
  resolvedSize: r,
  resolvedMotion: a,
  closable: n,
  pauseOnHover: s,
  toastClassName: o,
  toastStyle: d,
  onDismiss: i
}) => {
  const u = t.closable ?? n, l = !!t.title;
  return /* @__PURE__ */ c(
    "div",
    {
      role: t.tone === "error" || t.tone === "warning" ? "alert" : "status",
      "aria-live": t.tone === "error" ? "assertive" : "polite",
      "data-motion": a,
      onMouseEnter: () => {
        s && bb(t.id);
      },
      onMouseLeave: () => {
        s && mb(t.id);
      },
      style: { ...d, ...t.style },
      className: p(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        l ? "items-start" : "items-center",
        pb[r],
        a !== "none" && "abc-animate-popover-in",
        o,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: p("shrink-0", l && "mt-0.5"), children: t.icon ?? $o[t.tone] ?? $o.info }),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          t.title && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)] leading-snug", children: t.title }),
          t.message && /* @__PURE__ */ e(
            "div",
            {
              className: p(
                "leading-relaxed break-words",
                l ? "text-xs text-[var(--abc-fg-secondary)]" : "font-medium"
              ),
              children: t.message
            }
          ),
          t.action && /* @__PURE__ */ e("div", { className: "mt-1.5 flex items-center gap-2", children: t.action })
        ] }),
        u && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "关闭通知",
            onClick: (b) => {
              b.stopPropagation(), i(t.id);
            },
            className: "rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer transition-colors",
            children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, gb = ({
  position: t = "top-right",
  size: r,
  motion: a,
  maxCount: n = 5,
  pauseOnHover: s = !0,
  newestOnTop: o = !1,
  closable: d = !0,
  className: i,
  style: u,
  toastClassName: l,
  toastStyle: b,
  container: f,
  containerId: v,
  renderItem: m,
  items: h,
  onDismiss: g
}) => {
  const [y, C] = F(() => [...Bt]), x = Se(r, "sm"), I = ve(a);
  me(() => {
    if (h !== void 0) return;
    const _ = (S) => C(S);
    return Ns.add(_), () => {
      Ns.delete(_);
    };
  }, [h]);
  const B = (h ?? y).filter((_) => !(_.containerId && v && _.containerId !== v || _.position && _.position !== t));
  let L = B;
  o ? L = [...B].reverse().slice(0, n) : n > 0 && (L = B.slice(-n));
  const N = (_) => {
    g ? g(_) : Hs(_);
  };
  if (typeof document > "u" || L.length === 0)
    return null;
  const w = typeof f == "function" ? f() : f !== void 0 ? f : typeof document < "u" ? document.body : null;
  if (!w) return null;
  const M = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: p(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        hb[t],
        i
      ),
      style: u,
      children: L.map((_) => m ? /* @__PURE__ */ e(Ge.Fragment, { children: m(_, () => N(_.id)) }, _.id) : /* @__PURE__ */ e(
        vb,
        {
          item: _,
          resolvedSize: x,
          resolvedMotion: I,
          closable: d,
          pauseOnHover: s,
          toastClassName: l,
          toastStyle: b,
          onDismiss: N
        },
        _.id
      ))
    }
  );
  return ar(M, w);
}, xb = (t) => /* @__PURE__ */ e(gb, { ...t }), Us = "abc_design_theme_v1", fn = "color-scheme", Gs = Ts(null);
function Oo(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(fn), n = window.localStorage.getItem(Us), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, d = ["xs", "sm", "md", "lg"], i = ["none", "subtle", "smooth", "spring"], u = s.componentSize && d.includes(s.componentSize) ? s.componentSize : t.componentSize, l = s.motion && i.includes(s.motion) ? s.motion : t.motion ?? "smooth";
    return {
      mode: o,
      brand: s.brand ?? t.brand,
      customBrandColor: s.customBrandColor ?? t.customBrandColor,
      density: s.density ?? t.density,
      radius: s.radius ?? t.radius,
      fontScale: s.fontScale ?? t.fontScale ?? "md",
      visualMode: s.visualMode ?? t.visualMode ?? "default",
      componentSize: u,
      motion: l
    };
  } catch {
    return t;
  }
}
function yb(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(fn) : window.localStorage.setItem(fn, t.mode), window.localStorage.setItem(Us, JSON.stringify(t));
    } catch {
    }
}
const xp = ({
  children: t,
  defaultTheme: r,
  defaultPageTransition: a = "fade-slide",
  watermarkText: n,
  defaultWatermarkEnabled: s = !1,
  persist: o = !0,
  toastAdapter: d,
  toastContainerProps: i,
  uploadAdapter: u,
  dictAdapter: l,
  permissionAdapter: b,
  captchaAdapter: f,
  iconRegistry: v = {},
  defaultDrawerCascadeMode: m = "adjacent"
}) => {
  const h = oe(
    () => ({ ...St, ...r }),
    [r]
  ), [g, y] = F(() => Oo(h, o)), [C, x] = F(
    () => aa(g.mode)
  ), [I, A] = F(a), [B, L] = F(s);
  me(() => {
    const K = Mt(g);
    x(K), yb(g, o);
  }, [g, o]), me(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const K = window.matchMedia("(prefers-color-scheme: dark)"), V = () => {
      if (g.mode === "system") {
        const ne = Mt(g);
        x(ne);
      }
    };
    return K.addEventListener("change", V), () => K.removeEventListener("change", V);
  }, [g]), me(() => {
    if (!o || typeof window > "u") return;
    const K = (V) => {
      (V.key === Us || V.key === fn) && y(Oo(h, !0));
    };
    return window.addEventListener("storage", K), () => window.removeEventListener("storage", K);
  }, [o, h]);
  const N = de(
    (K, V) => {
      pu(() => {
        y((ne) => {
          const H = { ...ne, mode: K };
          return Mt(H), H;
        });
      }, V);
    },
    []
  ), w = de(
    (K) => {
      const ne = aa(g.mode) === "dark" ? "light" : "dark", H = aa("system");
      N(ne === H ? "system" : ne, K);
    },
    [g.mode, N]
  ), M = de((K) => {
    y((V) => ({ ...V, brand: K, customBrandColor: void 0 }));
  }, []), _ = de((K) => {
    y((V) => ({ ...V, customBrandColor: K }));
  }, []), S = de((K) => {
    y((V) => ({ ...V, density: K }));
  }, []), E = de((K) => {
    y((V) => ({ ...V, radius: K }));
  }, []), z = de((K) => {
    y((V) => ({ ...V, fontScale: K }));
  }, []), U = de((K) => {
    y((V) => ({ ...V, visualMode: K }));
  }, []), R = de((K) => {
    y((V) => ({ ...V, componentSize: K }));
  }, []), T = de((K) => {
    y((V) => ({ ...V, motion: K }));
  }, []), P = de((K) => {
    y((V) => ({ ...V, ...K }));
  }, []), W = de(() => {
    y(h), A(a), L(s);
  }, [h, a, s]), j = oe(
    () => ({
      theme: g,
      resolvedTheme: C,
      pageTransition: I,
      watermarkText: n,
      watermarkEnabled: B,
      setThemeMode: N,
      toggleTheme: w,
      setBrand: M,
      setCustomBrandColor: _,
      setDensity: S,
      setRadius: E,
      setFontScale: z,
      setVisualMode: U,
      setComponentSize: R,
      setMotion: T,
      updateTheme: P,
      setPageTransition: A,
      setWatermarkEnabled: L,
      resetTheme: W,
      toast: d ?? Ks,
      uploadAdapter: u,
      dictAdapter: l,
      permissionAdapter: b,
      captchaAdapter: f,
      iconRegistry: v,
      defaultDrawerCascadeMode: m
    }),
    [
      g,
      C,
      I,
      n,
      B,
      N,
      w,
      M,
      _,
      S,
      E,
      z,
      U,
      R,
      T,
      P,
      W,
      d,
      u,
      l,
      b,
      f,
      v,
      m
    ]
  );
  return /* @__PURE__ */ c(Gs.Provider, { value: j, children: [
    t,
    !d && /* @__PURE__ */ e(xb, { ...i }),
    /* @__PURE__ */ e(Rc, {})
  ] });
};
function wb() {
  return Ba(Gs);
}
function pt() {
  const t = Ba(Gs);
  return t || {
    theme: St,
    resolvedTheme: aa(St.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Mt({ ...St, mode: r });
    },
    toggleTheme: () => {
      const r = aa(St.mode) === "dark" ? "light" : "dark";
      Mt({ ...St, mode: r });
    },
    setBrand: (r) => {
      Mt({ ...St, brand: r });
    },
    setCustomBrandColor: (r) => {
      Mt({ ...St, customBrandColor: r });
    },
    setDensity: (r) => {
      Mt({ ...St, density: r });
    },
    setRadius: (r) => {
      Mt({ ...St, radius: r });
    },
    setFontScale: (r) => {
      Mt({ ...St, fontScale: r });
    },
    setVisualMode: (r) => {
      Mt({ ...St, visualMode: r });
    },
    setComponentSize: (r) => {
      Mt({ ...St, componentSize: r });
    },
    setMotion: (r) => {
      Mt({ ...St, motion: r });
    },
    updateTheme: (r) => {
      Mt({ ...St, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Mt(St);
    },
    toast: Ks,
    iconRegistry: {}
  };
}
function Se(t, r = "sm") {
  const { theme: a } = pt();
  return (t === "default" ? void 0 : t) ?? a.componentSize ?? r;
}
function ve(t) {
  const { theme: r } = pt();
  return t ?? r.motion ?? "smooth";
}
function Nb(t) {
  const r = pt();
  return t ?? r.defaultDrawerCascadeMode ?? "adjacent";
}
const Ta = {
  Activity: Gd,
  AlertCircle: Er,
  AlertOctagon: Ud,
  AlertTriangle: $r,
  BarChart2: Kd,
  BarChart3: Hd,
  Bell: Wd,
  BellRing: Fd,
  BookMarked: Od,
  Boxes: $d,
  Building2: zd,
  Calendar: Ps,
  CalendarCheck: Rd,
  Camera: jd,
  Check: bt,
  CheckCircle: xc,
  CheckCircle2: Nr,
  CheckSquare: Bd,
  CircleDollarSign: Pd,
  Clock: on,
  Coins: Dd,
  Compass: gc,
  Copy: Or,
  Cpu: Ld,
  CreditCard: Ad,
  Database: Ed,
  Download: hs,
  Edit: Md,
  Edit3: sn,
  Eye: ua,
  FileCheck: Td,
  FileClock: _d,
  FileSpreadsheet: Id,
  FileText: Sd,
  Flame: Cd,
  Folder: kd,
  FolderGit2: Nd,
  FolderOpen: wd,
  FolderPlus: yd,
  FolderTree: xd,
  Globe: gd,
  Globe2: vd,
  Handshake: hd,
  HardDrive: pd,
  Headphones: fd,
  HelpCircle: la,
  History: md,
  Home: bd,
  Image: vc,
  Info: ja,
  Key: ud,
  KeyRound: hc,
  Layers: pc,
  LayoutDashboard: dd,
  LayoutGrid: ld,
  LineChart: id,
  Link2: cd,
  ListChecks: od,
  ListOrdered: sd,
  Lock: nd,
  MapPin: ad,
  Megaphone: rd,
  Menu: fc,
  MessageCircle: td,
  MessageSquare: ed,
  MessageSquareQuote: Ql,
  MessageSquareText: Jl,
  MessagesSquare: Zl,
  Minus: In,
  Monitor: Ds,
  MoreHorizontal: Ls,
  Network: Xl,
  Package: ql,
  Palette: mc,
  PanelLeft: Yl,
  PanelTop: Vl,
  Pause: Gl,
  Phone: Ul,
  PhoneCall: Kl,
  PieChart: Hl,
  Play: bc,
  Plus: Sn,
  PlusCircle: Wl,
  Radio: Fl,
  Receipt: Ol,
  RefreshCw: da,
  RotateCcw: Vt,
  RotateCw: Cn,
  ScrollText: $l,
  Search: It,
  Send: zl,
  Server: Rl,
  Settings: jl,
  Share: Bl,
  Share2: Pl,
  Shield: Dl,
  ShieldAlert: kn,
  ShieldCheck: As,
  ShoppingBag: Ll,
  ShoppingCart: Al,
  Sliders: El,
  SlidersHorizontal: ps,
  Smartphone: Ml,
  Sparkles: Ra,
  Star: Tl,
  StarOff: _l,
  Store: Il,
  Tag: Sl,
  Tags: Cl,
  Terminal: kl,
  Ticket: Nl,
  Timer: wl,
  Trash: yl,
  Trash2: gr,
  TrendingUp: xl,
  Unlock: gl,
  Upload: Nn,
  User: vl,
  UserCheck: hl,
  UserCog: pl,
  Users: fl,
  Video: ml,
  Wallet: bl,
  Wrench: ul,
  X: ft,
  XCircle: dl,
  Zap: ll
}, ls = {
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
}, Fo = [
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
function kb(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const zc = {};
function yp(t) {
  Object.assign(zc, t);
}
const dr = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (r) {
    const f = r.toLowerCase();
    for (const v of Fo)
      if (v.keywords.some((m) => f.includes(m))) {
        const m = Ta[v.iconName];
        if (m)
          return /* @__PURE__ */ e(m, { size: a, strokeWidth: n, className: p("shrink-0", s) });
      }
  }
  const d = (t || "").replace(/^el-icon-/, "").trim(), i = d.replace(/^s-/, ""), u = ls[d] ?? ls[i] ?? ls[t];
  let l = (o == null ? void 0 : o[d]) ?? zc[d] ?? (u ? Ta[u] : void 0) ?? Ta[d] ?? (d ? Ta[kb(d)] : void 0);
  if (!l && d) {
    const f = d.toLowerCase();
    for (const v of Fo)
      if (v.keywords.some((m) => f.includes(m))) {
        l = Ta[v.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(l ?? gc, { size: a, strokeWidth: n, className: p("shrink-0", s) });
}, $c = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Cb = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  default: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, Ar = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", Qe = Ge.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    prefix: o,
    prefixIcon: d,
    suffix: i,
    suffixIcon: u,
    allowClear: l,
    clearable: b,
    passwordToggle: f = !0,
    showPasswordLabel: v,
    hidePasswordLabel: m,
    showCount: h = !1,
    onClear: g,
    invalid: y = !1,
    id: C,
    type: x = "text",
    value: I,
    defaultValue: A,
    maxLength: B,
    onChange: L,
    disabled: N,
    readOnly: w,
    className: M,
    wrapperClassName: _,
    ...S
  }, E) => {
    const z = Se(t, "sm"), U = ve(r), R = mt(), T = C || R, P = ce(null);
    wn(E, () => P.current, []);
    const W = I !== void 0, [j, K] = F(
      () => A != null ? String(A) : ""
    ), [V, ne] = F(!1), te = x === "password" && f !== !1, Z = te && V ? "text" : x, ee = (W ? String(I ?? "") : j).length, Ne = ee > 0, $ = !!((l ?? b) && Ne && !N && !w), Y = !!(y || n), Te = o ?? d, Le = i ?? u, be = (X) => {
      W || K(X.target.value), L == null || L(X);
    }, fe = de(
      (X) => {
        if (X.preventDefault(), X.stopPropagation(), N || w) return;
        W || K(""), g == null || g();
        const ie = P.current;
        if (ie && (ie.value = "", ie.focus()), L) {
          const Be = ie ?? { value: "" };
          L({
            target: Be,
            currentTarget: Be,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [N, w, W, g, L]
    ), Pe = ($ ? 1 : 0) + (te ? 1 : 0) + (Le ? 1 : 0), Me = Pe >= 3 ? "pr-20" : Pe === 2 ? "pr-14" : Pe === 1 ? "pr-9" : "pr-3", We = /\bw-(?!full\b)\S+/.test(M || ""), Ie = /* @__PURE__ */ c(
      "div",
      {
        className: p(
          "relative flex items-center",
          !We && "w-full",
          _
        ),
        children: [
          Te && /* @__PURE__ */ e(
            "div",
            {
              className: p(
                "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
                z === "xs" ? "left-2 [&>svg]:h-3.5 [&>svg]:w-3.5" : "left-2.5 [&>svg]:h-4 [&>svg]:w-4"
              ),
              children: Te
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              ref: P,
              id: T,
              type: Z,
              value: I,
              defaultValue: A,
              maxLength: B,
              onChange: be,
              disabled: N,
              readOnly: w,
              "data-motion": U,
              "aria-invalid": Y || void 0,
              className: p(
                Ar,
                $c[z],
                Te ? z === "xs" ? "pl-7" : "pl-8" : z === "xs" ? "pl-2" : "pl-3",
                Me,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                Z === "number" && Pe > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                Y && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                N && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                M
              ),
              ...S
            }
          ),
          ($ || te || Le) && /* @__PURE__ */ c("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            $ && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (X) => X.preventDefault(),
                onClick: fe,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5" })
              }
            ),
            te && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: N,
                "data-testid": "password-toggle",
                "aria-label": V ? m ?? "隐藏密码" : v ?? "显示密码",
                title: V ? m ?? "隐藏密码" : v ?? "显示密码",
                onMouseDown: (X) => X.preventDefault(),
                onClick: (X) => {
                  X.preventDefault(), X.stopPropagation(), !N && ne((ie) => !ie);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: V ? /* @__PURE__ */ e(yc, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ua, { className: "h-3.5 w-3.5" })
              }
            ),
            Le && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: Le })
          ] })
        ]
      }
    );
    return !a && !n && !s && !h ? Ie : /* @__PURE__ */ c("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: T,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      Ie,
      (n || s || h) && /* @__PURE__ */ c("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        h && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: B !== void 0 ? `${ee}/${B}` : ee
          }
        )
      ] })
    ] });
  }
);
Qe.displayName = "Input";
const Vs = ({
  value: t,
  defaultValue: r,
  onChange: a,
  min: n,
  max: s,
  step: o = 1,
  size: d,
  motion: i,
  disabled: u = !1,
  placeholder: l,
  invalid: b = !1,
  className: f
}) => {
  const v = Se(d, "sm"), m = ve(i), h = mt(), [g, y] = F(r ?? null), C = t !== void 0 ? t : g, x = (I) => {
    let A = I;
    A !== null && Number.isFinite(A) ? (n !== void 0 && (A = Math.max(n, A)), s !== void 0 && (A = Math.min(s, A))) : A = null, t === void 0 && y(A), a == null || a(A);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": m,
      className: p(
        "inline-flex w-full items-center overflow-hidden",
        Ar,
        $c[v],
        b && "border-[var(--abc-danger)]",
        u && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
        f
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "减少数值",
            disabled: u || n !== void 0 && (C ?? 0) <= n,
            onClick: () => x((C ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(In, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: h,
            type: "number",
            value: C ?? "",
            min: n,
            max: s,
            step: o,
            disabled: u,
            placeholder: l,
            onChange: (I) => {
              const A = I.target.value;
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
            disabled: u || s !== void 0 && (C ?? 0) >= s,
            onClick: () => x((C ?? 0) + o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(Sn, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, $a = Ge.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    showCount: o = !1,
    invalid: d = !1,
    mono: i = !1,
    id: u,
    value: l,
    defaultValue: b,
    maxLength: f,
    onChange: v,
    rows: m = 3,
    className: h,
    ...g
  }, y) => {
    const C = Se(t, "sm"), x = ve(r), I = mt(), A = u || I, [B, L] = F(
      () => String(b ?? "").length
    ), N = l !== void 0 ? String(l ?? "").length : B, w = !!(d || n), _ = /* @__PURE__ */ e(
      "textarea",
      {
        ref: y,
        id: A,
        rows: m,
        value: l,
        defaultValue: b,
        maxLength: f,
        onChange: (S) => {
          l === void 0 && L(S.target.value.length), v == null || v(S);
        },
        "data-motion": x,
        "aria-invalid": w || void 0,
        className: p(
          Ar,
          Cb[C],
          "leading-relaxed resize-y",
          i && "font-mono",
          w && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          h
        ),
        ...g
      }
    );
    return !a && !n && !s && !o ? _ : /* @__PURE__ */ c("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: A,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      _,
      (n || s || o) && /* @__PURE__ */ c("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        o && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "textarea-count",
            className: "ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums",
            children: f !== void 0 ? `${N}/${f}` : N
          }
        )
      ] })
    ] });
  }
);
$a.displayName = "Textarea";
const Wo = [
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
], Sb = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], Ib = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Ho = ({
  open: t,
  current: r,
  value: a,
  onClose: n,
  onSelect: s,
  onChange: o,
  placeholder: d = "点击选择菜单图标",
  clearable: i = !0,
  disabled: u = !1,
  size: l,
  motion: b,
  className: f
}) => {
  const v = Se(l, "sm"), m = ve(b), [h, g] = F(!1), [y, C] = F(""), [x, I] = F("all"), A = typeof t == "boolean", B = A ? t : h, L = a ?? r ?? "", N = () => {
    A ? n == null || n() : g(!1);
  }, w = (E) => {
    s == null || s(E), o == null || o(E), N();
  }, M = oe(() => {
    const E = y.trim();
    return Wo.filter((z) => x !== "all" && z.category !== x ? !1 : E ? qt(`${z.label} ${z.name}`, E) : !0);
  }, [y, x]), _ = oe(
    () => Wo.find((E) => E.name.toLowerCase() === L.toLowerCase()),
    [L]
  ), S = /* @__PURE__ */ e(Xt, { open: B, onClose: N, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ c("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        Qe,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: y,
          prefix: /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5" }),
          onChange: (E) => C(E.target.value)
        }
      ) }),
      L && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(dr, { name: L, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: L })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: Sb.map((E) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => I(E.id),
        className: p(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          x === E.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: E.label
      },
      E.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: M.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: M.map((E) => {
      const z = L === E.name;
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => w(E.name),
          className: p(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            z ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            z && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              dr,
              {
                name: E.name,
                size: 20,
                className: p(
                  "transition-transform group-hover:scale-110",
                  z ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: E.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: E.name })
          ]
        },
        E.name
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
  return A ? S : /* @__PURE__ */ c(Ue, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: "button",
        tabIndex: u ? -1 : 0,
        "data-motion": m,
        onClick: () => !u && g(!0),
        onKeyDown: (E) => {
          !u && (E.key === "Enter" || E.key === " ") && (E.preventDefault(), g(!0));
        },
        className: p(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          Ib[v],
          Ar,
          u && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          f
        ),
        children: [
          L ? /* @__PURE__ */ c("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(dr, { name: L, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: _ ? `${_.label} (${L})` : L })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: d }),
          /* @__PURE__ */ c("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            i && L && !u && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (E) => {
                  E.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(ft, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(Yt, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    S
  ] });
};
async function Mn(t) {
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
const _b = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, Tb = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, Ko = ({
  text: t,
  displayText: r,
  children: a,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: o = !0,
  successMessage: d,
  successText: i,
  tooltip: u,
  onCopy: l,
  size: b,
  motion: f,
  className: v
}) => {
  const m = Se(b, "sm"), h = ve(f), { toast: g } = pt(), [y, C] = F(!1), x = ce(null), I = i ?? d ?? "已复制到剪贴板";
  me(() => () => {
    x.current && clearTimeout(x.current);
  }, []);
  const A = de(
    async (N) => {
      N.stopPropagation(), N.preventDefault(), await Mn(t) ? (C(!0), g.success(I), l == null || l(t), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        C(!1), x.current = null;
      }, 1500)) : g.error("复制失败，请手动复制");
    },
    [t, I, l, g]
  ), B = u !== void 0 ? u : y ? I : "点击复制", L = y ? /* @__PURE__ */ e(
    bt,
    {
      "data-testid": "copy-icon-check",
      className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]",
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ e(
    Or,
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
      "aria-label": u || "复制",
      "data-motion": h,
      onClick: A,
      className: p(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        v
      ),
      children: L
    }
  ) : /* @__PURE__ */ c(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: B,
      "data-motion": h,
      onClick: A,
      onKeyDown: (N) => {
        (N.key === "Enter" || N.key === " ") && A(N);
      },
      className: p(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        _b[m],
        o && "font-mono tabular-nums",
        v
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && L
      ]
    }
  );
}, ra = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = Se(t, "sm"), d = ve(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": d,
      className: p(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        Tb[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, wp = ({
  value: t,
  title: r,
  copyLabel: a = "复制",
  copiedLabel: n = "已复制",
  successDuration: s = 1800,
  className: o,
  ...d
}) => {
  const [i, u] = F(!1), l = r || a;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": i ? n : l,
      title: i ? n : l,
      onClick: async (f) => {
        f.stopPropagation(), await Mn(t) && (u(!0), setTimeout(() => u(!1), s));
      },
      className: p(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] transition-all hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] cursor-pointer",
        i && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
        o
      ),
      ...d,
      children: i ? /* @__PURE__ */ e(bt, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(Or, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
    }
  );
}, Mb = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, Eb = {
  xs: "px-1.5 py-0.2 text-[10px] gap-1",
  sm: "px-2 py-0.5 text-xs gap-1.5",
  md: "px-2.5 py-1 text-xs gap-2"
};
function Np({
  icon: t,
  label: r,
  variant: a = "default",
  size: n = "sm",
  className: s,
  ...o
}) {
  return /* @__PURE__ */ c(
    "span",
    {
      "data-slot": "icon-badge",
      className: p(
        "inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none",
        Mb[a],
        Eb[n],
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
function Ab({
  text: t,
  iconSize: r = 14,
  preserveSrToken: a = !1,
  className: n,
  ...s
}) {
  const o = t ? t.replace(/\[icon:[^\]]+\]/g, "").trim() : "";
  return /* @__PURE__ */ e("span", { className: p("inline-flex items-center gap-1.5", n), ...s, children: /* @__PURE__ */ e("span", { children: o || t }) });
}
function pn(t) {
  return t == null || typeof t == "boolean" ? "" : typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(pn).join("") : Ge.isValidElement(t) ? pn(t.props.children) : "";
}
function ks(t, r) {
  const a = [];
  return Ge.Children.forEach(t, (n) => {
    if (Ge.isValidElement(n)) {
      if (n.type === Ge.Fragment) {
        const s = n.props;
        a.push(...ks(s.children, r));
        return;
      }
      if (n.type === "optgroup") {
        const s = n.props;
        a.push(...ks(s.children, s.label ?? ""));
        return;
      }
      if (n.type === "option") {
        const s = n.props, o = pn(s.children), d = s.value !== void 0 ? s.value : o;
        a.push({
          value: String(d),
          rawValue: d,
          label: s.children,
          textLabel: o,
          disabled: !!s.disabled,
          group: r
        });
      }
    }
  }), a;
}
const Lb = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Db = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
};
function Uo(t, r = !0) {
  return t.textLabel.includes("[icon:") ? /* @__PURE__ */ e(
    Ab,
    {
      text: t.textLabel,
      iconSize: 13,
      preserveSrToken: r
    }
  ) : t.label;
}
const Ot = Ge.forwardRef(
  ({
    options: t,
    children: r,
    value: a,
    defaultValue: n,
    onChange: s,
    onValueChange: o,
    onBlur: d,
    onKeyDown: i,
    label: u,
    error: l,
    helperText: b,
    id: f,
    name: v,
    title: m,
    placeholder: h,
    multiple: g = !1,
    searchable: y = !1,
    allowClear: C,
    clearable: x,
    disabled: I = !1,
    invalid: A = !1,
    size: B,
    motion: L,
    className: N,
    wrapperClassName: w,
    containerClassName: M,
    dropdownClassName: _,
    popoverClassName: S,
    matchWidth: E = !0,
    hideChevron: z = !1,
    container: U,
    "aria-label": R,
    ...T
  }, P) => {
    var Jt, Rt, et;
    const W = t === void 0 && r !== void 0, j = h !== void 0 ? h : W ? "" : "请选择", K = Se(B === "ghost" ? "sm" : B, "sm"), V = ve(L), ne = mt(), H = f || ne, te = typeof process < "u" && ((Jt = process.env) == null ? void 0 : Jt.NODE_ENV) === "test" || typeof import.meta < "u" && !1, Z = oe(() => t !== void 0 ? t.map((G) => ({
      value: String(G.value),
      rawValue: G.value,
      label: G.label,
      textLabel: typeof G.label == "string" ? G.label : pn(G.label),
      disabled: !!G.disabled,
      description: G.description,
      group: G.group
    })) : ks(r), [t, r]), re = a !== void 0, [ee, Ne] = F(() => {
      if (n !== void 0) return n;
      if (W && !g && !h) {
        const G = Z.find((ae) => !ae.disabled) ?? Z[0];
        return G ? G.value : "";
      }
      return g ? [] : "";
    });
    me(() => {
      if (re || !W || g || h || Z.length === 0) return;
      if (!Z.some((ae) => ae.value === String(ee ?? "")))
        if (n !== void 0 && Z.some((ae) => ae.value === String(n)))
          Ne(n);
        else {
          const ae = Z.find((Ee) => !Ee.disabled) ?? Z[0];
          ae && Ne(ae.value);
        }
    }, [re, W, g, h, Z, ee, n]);
    const $ = re ? a : ee, [Y, Te] = F(!1), [Le, be] = F(""), [fe, Pe] = F(0), { isMounted: Me, isVisible: We } = Fr(
      Y,
      V === "none" || te ? 0 : 140
    ), Ie = ce(null), X = ce(null), ie = ce(null), Be = ce(null), Ze = ce(null), He = ce([]), gt = Ge.useCallback(
      (G) => {
        Ze.current = G, typeof P == "function" ? P(G) : P && (P.current = G);
      },
      [P]
    ), Ft = !!(C ?? x), jt = !!(A || l), { style: Kr, actualSide: Ur, portalContainer: kt } = za({
      open: Me,
      triggerRef: X,
      floatingRef: ie,
      placement: "bottomLeft",
      offset: 4,
      matchWidth: E
    }), at = U ?? kt;
    me(() => {
      if (!Y) {
        be("");
        return;
      }
      const G = (Ee) => {
        var Ye, Ht;
        const tt = Ee.target;
        tt && ((Ye = Ie.current) != null && Ye.contains(tt) || (Ht = ie.current) != null && Ht.contains(tt) || Te(!1));
      }, ae = (Ee) => {
        var tt, Ye;
        Ee.key === "Escape" && (Ee.preventDefault(), Ee.stopPropagation(), Te(!1), W ? (tt = Ze.current) == null || tt.focus() : (Ye = X.current) == null || Ye.focus());
      };
      return document.addEventListener("mousedown", G), document.addEventListener("touchstart", G, { passive: !0 }), document.addEventListener("keydown", ae, !0), () => {
        document.removeEventListener("mousedown", G), document.removeEventListener("touchstart", G), document.removeEventListener("keydown", ae, !0);
      };
    }, [Y, W]), me(() => {
      var Ye;
      if (!Y) return;
      const G = He.current[fe], ae = (Ye = ie.current) == null ? void 0 : Ye.querySelector("[data-select-scroll-host]");
      if (!G || !ae) return;
      const Ee = G.offsetTop, tt = Ee + G.offsetHeight;
      Ee < ae.scrollTop ? ae.scrollTop = Ee : tt > ae.scrollTop + ae.clientHeight && (ae.scrollTop = tt - ae.clientHeight);
    }, [Y, fe]);
    const qe = oe(() => {
      const G = Le.trim();
      return G ? Z.filter(
        (ae) => qt(ae.textLabel, G) || ae.value.toLowerCase().includes(G.toLowerCase())
      ) : Z;
    }, [Z, Le]), ht = oe(() => g ? Array.isArray($) ? $ : $ != null && $ !== "" ? [$] : [] : $ != null && $ !== "" ? [$] : [], [g, $]), Xe = oe(() => ht.map((G) => {
      const ae = Z.find((Ee) => Ee.value === String(G));
      return {
        value: G,
        option: ae,
        label: ae ? ae.label : String(G),
        textLabel: ae ? ae.textLabel : String(G)
      };
    }), [Z, ht]), dt = (G) => {
      if (re || Ne(G), W) {
        const ae = Array.isArray(G) ? String(G[0] ?? "") : String(G ?? "");
        o == null || o(ae);
        const Ee = Ze.current;
        Ee && (Ee.value = ae, Ee.dispatchEvent(new Event("change", { bubbles: !0 })));
        return;
      }
      Array.isArray(G) || o == null || o(String(G ?? "")), s == null || s(G);
    }, wt = () => {
      const G = qe.findIndex(
        (ae) => !ae.disabled && ht.some((Ee) => String(Ee) === ae.value)
      );
      if (G >= 0)
        Pe(G);
      else {
        const ae = qe.findIndex((Ee) => !Ee.disabled);
        Pe(ae >= 0 ? ae : 0);
      }
      Te(!0);
    }, nt = (G) => {
      var Ee;
      if (qe.length === 0) return;
      let ae = fe;
      for (let tt = 0; tt < qe.length; tt++)
        if (ae = (ae + G + qe.length) % qe.length, !((Ee = qe[ae]) != null && Ee.disabled)) {
          Pe(ae);
          return;
        }
    }, st = (G) => {
      var ae, Ee;
      if (!G.disabled)
        if (g) {
          const Ye = ht.some((Ht) => String(Ht) === G.value) ? ht.filter((Ht) => String(Ht) !== G.value) : [...ht, G.rawValue];
          dt(Ye);
        } else
          dt(G.rawValue), Te(!1), W ? (ae = Ze.current) == null || ae.focus() : (Ee = X.current) == null || Ee.focus();
    }, Wt = (G) => {
      if (i == null || i(G), !I) {
        if (G.key === "Escape") {
          Y && (G.preventDefault(), G.stopPropagation(), Te(!1));
          return;
        }
        if (G.key === "Tab") {
          Y && Te(!1);
          return;
        }
        if (G.key === "ArrowDown") {
          G.preventDefault(), Y ? nt(1) : wt();
          return;
        }
        if (G.key === "ArrowUp") {
          G.preventDefault(), Y ? nt(-1) : wt();
          return;
        }
        if (G.key === "Enter" || G.key === " " && G.target !== Be.current)
          if (G.preventDefault(), !Y)
            wt();
          else {
            const ae = qe[fe];
            ae && !ae.disabled && st(ae);
          }
      }
    }, Zt = w || M, Lt = _ || S, ct = oe(() => qe.some((G) => !!G.group), [qe]), kr = W ? { "aria-hidden": !0 } : {
      id: H,
      title: m,
      role: "combobox",
      "aria-label": R,
      "aria-expanded": Y,
      "aria-haspopup": "listbox",
      "aria-controls": `${H}-listbox`,
      "aria-activedescendant": Y ? `${H}-opt-${fe}` : void 0,
      "aria-disabled": I || void 0,
      tabIndex: I ? -1 : 0,
      onBlur: (G) => {
        var Ee;
        const ae = G.relatedTarget;
        ae && ((Ee = ie.current) != null && Ee.contains(ae)) || d == null || d(G);
      },
      onKeyDown: Wt
    };
    return /* @__PURE__ */ c(
      "div",
      {
        ref: Ie,
        "data-slot": "select-wrapper",
        "data-state": Y ? "open" : "closed",
        className: p(
          "relative min-w-0",
          B === "ghost" ? "inline-flex w-auto" : Zt || "w-full"
        ),
        children: [
          u && /* @__PURE__ */ e(
            "label",
            {
              htmlFor: H,
              className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
              children: u
            }
          ),
          W ? /* @__PURE__ */ c(
            "select",
            {
              ...T,
              ref: gt,
              id: H,
              name: v,
              title: m,
              "aria-label": R,
              "aria-invalid": T["aria-invalid"] ?? (jt || void 0),
              disabled: I,
              multiple: g || void 0,
              value: re ? Array.isArray(a) ? a.map(String) : String(a ?? "") : String(ee ?? ""),
              onBlur: (G) => {
                var Ee;
                const ae = G.relatedTarget;
                ae && ((Ee = ie.current) != null && Ee.contains(ae)) || d == null || d(G);
              },
              onClick: (G) => {
                var ae;
                (ae = T.onClick) == null || ae.call(T, G), !G.defaultPrevented && (G.stopPropagation(), !I && (Y ? Te(!1) : wt()));
              },
              onKeyDown: Wt,
              onChange: (G) => {
                re || Ne(G.target.value), o == null || o(G.target.value), s == null || s(G);
              },
              className: "peer pointer-events-none absolute inset-0 h-full w-full appearance-none opacity-0",
              children: [
                j && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: j }),
                Z.map((G, ae) => /* @__PURE__ */ e("option", { value: G.value, disabled: G.disabled, children: G.textLabel }, `${G.value}-${ae}`))
              ]
            }
          ) : v ? /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: v,
              value: g ? ht.join(",") : String(ht[0] ?? "")
            }
          ) : null,
          /* @__PURE__ */ c(
            "div",
            {
              ref: X,
              "data-slot": "select-trigger",
              "data-state": Y ? "open" : "closed",
              ...kr,
              onClick: (G) => {
                var ae;
                W && (G.preventDefault(), (ae = Ze.current) == null || ae.focus()), G.stopPropagation(), !I && (Y ? Te(!1) : wt());
              },
              "data-motion": V,
              className: p(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                B === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : p(
                  "w-full px-2.5 py-1",
                  Ar,
                  g ? Db[K] : Lb[K],
                  Y && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  jt && "border-[var(--abc-danger)]",
                  I && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                N
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: Xe.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: j }) : g ? Xe.map((G) => /* @__PURE__ */ c(
                  "span",
                  {
                    "data-testid": "select-tag",
                    className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: G.label }),
                      !I && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": `移除 ${G.textLabel}`,
                          onClick: (ae) => {
                            ae.stopPropagation(), dt(
                              ht.filter((Ee) => String(Ee) !== String(G.value))
                            );
                          },
                          className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                          children: /* @__PURE__ */ e(ft, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  String(G.value)
                )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (Rt = Xe[0]) != null && Rt.option ? Uo(Xe[0].option, !1) : (et = Xe[0]) == null ? void 0 : et.label }) }),
                /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  Ft && Xe.length > 0 && !I && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "select-clear",
                      "aria-label": "清空",
                      onClick: (G) => {
                        G.stopPropagation(), dt(g ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  !z && /* @__PURE__ */ e(
                    Yt,
                    {
                      className: p(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        Y && "rotate-180"
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          Me && at && ar(
            /* @__PURE__ */ c(
              "div",
              {
                ref: ie,
                id: `${H}-listbox`,
                role: "listbox",
                "data-slot": "select-popover",
                "data-abc-floating": "",
                "data-motion": V,
                "data-placement": Ur,
                "aria-multiselectable": g || void 0,
                onMouseDown: (G) => G.stopPropagation(),
                style: Kr,
                className: p(
                  "z-[1500] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                  E ? "min-w-full" : "min-w-[140px]",
                  We ? "abc-animate-popover-in" : "abc-animate-popover-out",
                  Lt
                ),
                children: [
                  y && /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                    /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e(
                      "input",
                      {
                        ref: Be,
                        type: "text",
                        autoFocus: !0,
                        "data-testid": "select-search-input",
                        value: Le,
                        onClick: (G) => G.stopPropagation(),
                        onKeyDown: Wt,
                        onChange: (G) => {
                          const ae = G.target.value;
                          be(ae);
                          const tt = (ae.trim() ? Z.filter(
                            (Ye) => qt(Ye.textLabel, ae) || Ye.value.toLowerCase().includes(ae.toLowerCase())
                          ) : Z).findIndex((Ye) => !Ye.disabled);
                          Pe(tt >= 0 ? tt : 0);
                        },
                        placeholder: "搜索或输入拼音首字母...",
                        className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e("div", { "data-select-scroll-host": "", className: "max-h-56 overflow-y-auto p-1", children: qe.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : qe.map((G, ae) => {
                    var mr;
                    const Ee = ht.some((_t) => String(_t) === G.value), tt = ae === fe, Ye = ae > 0 ? (mr = qe[ae - 1]) == null ? void 0 : mr.group : void 0, Ht = ct && G.group && G.group !== Ye;
                    return /* @__PURE__ */ c(Ge.Fragment, { children: [
                      Ht && /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]", children: G.group }),
                      /* @__PURE__ */ c(
                        "button",
                        {
                          ref: (_t) => {
                            He.current[ae] = _t;
                          },
                          id: `${H}-opt-${ae}`,
                          type: "button",
                          role: "option",
                          "aria-selected": Ee,
                          disabled: G.disabled,
                          onMouseEnter: () => {
                            G.disabled || Pe(ae);
                          },
                          onMouseDown: (_t) => _t.stopPropagation(),
                          onClick: (_t) => {
                            _t.preventDefault(), _t.stopPropagation(), st(G);
                          },
                          className: p(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            Ee ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : tt && !G.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                            G.disabled && "opacity-45 cursor-not-allowed"
                          ),
                          children: [
                            /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                              /* @__PURE__ */ e("div", { className: "truncate", children: Uo(G, !0) }),
                              G.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: G.description })
                            ] }),
                            Ee && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 shrink-0" })
                          ]
                        }
                      )
                    ] }, `${G.value}-${ae}`);
                  }) })
                ]
              }
            ),
            at
          ),
          l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
          b && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: b })
        ]
      }
    );
  }
);
Ot.displayName = "Select";
function kp({
  value: t,
  defaultValue: r,
  onValueChange: a,
  onChange: n,
  options: s,
  label: o,
  error: d,
  helperText: i,
  placeholder: u,
  searchable: l,
  allowClear: b,
  clearable: f,
  "aria-label": v,
  id: m,
  disabled: h,
  triggerClassName: g,
  contentClassName: y,
  size: C
}) {
  return /* @__PURE__ */ e(
    Ot,
    {
      id: m,
      "aria-label": v,
      disabled: h,
      label: o,
      error: d,
      helperText: i,
      value: t,
      defaultValue: r,
      onValueChange: a,
      onChange: n,
      searchable: l,
      allowClear: b,
      clearable: f,
      className: g,
      dropdownClassName: y,
      size: C,
      placeholder: u,
      options: s
    }
  );
}
const Pb = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: d,
  motion: i,
  compact: u = !1,
  className: l
}) => {
  const b = Se(d, "md"), f = ve(i), h = {
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
  }[u ? "sm" : b];
  return /* @__PURE__ */ c(
    "div",
    {
      "data-testid": "empty-state",
      "data-motion": f,
      className: p(
        "flex flex-col items-center justify-center text-center select-none",
        h.container,
        f !== "none" && "abc-animate-fade-in",
        l
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "empty-state-icon",
            className: p(
              "flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]",
              h.iconBox
            ),
            children: a ?? /* @__PURE__ */ e(Vd, { className: h.iconSize })
          }
        ),
        t && /* @__PURE__ */ e(
          "h4",
          {
            "data-testid": "empty-state-title",
            className: p("mt-3 text-[var(--abc-fg)]", h.title),
            children: t
          }
        ),
        r && /* @__PURE__ */ e(
          "p",
          {
            "data-testid": "empty-state-description",
            className: p("max-w-sm leading-relaxed text-[var(--abc-fg-muted)]", h.desc),
            children: r
          }
        ),
        (n || s) && /* @__PURE__ */ e("div", { "data-testid": "empty-state-action", className: "mt-4 flex items-center justify-center gap-2", children: n ?? /* @__PURE__ */ e(
          xe,
          {
            variant: "secondary",
            size: h.btnSize,
            motion: f,
            icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, Bb = {
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
}, hn = ({
  mode: t,
  current: r,
  currentPage: a,
  page: n,
  pageSize: s,
  size: o,
  controlSize: d,
  motion: i,
  total: u,
  pageSizeOptions: l = [10, 20, 50, 100],
  onChange: b,
  onPageChange: f,
  onSizeChange: v,
  onPageSizeChange: m,
  showTotal: h = !0,
  showQuickJumper: g = !0,
  className: y,
  hasNext: C,
  hasPrev: x,
  nextCursor: I,
  prevCursor: A,
  currentCursor: B,
  loadedCount: L,
  onNext: N,
  onPrev: w,
  onResetCursor: M,
  loading: _ = !1
}) => {
  const S = r ?? a ?? n ?? 1, E = s ?? (typeof o == "number" ? o : void 0) ?? 10, z = Se(
    d ?? (typeof o == "string" ? o : void 0),
    "sm"
  ), U = ve(i), R = Bb[z], T = t ?? (u === void 0 && (C !== void 0 || x !== void 0 || N !== void 0) ? "cursor" : "offset"), P = (ee) => {
    b == null || b(1, ee), v == null || v(ee), m == null || m(ee);
  }, W = oe(() => (l || []).map((ee) => ({
    label: `${ee} 条/页`,
    value: ee
  })), [l]);
  if (T === "cursor")
    return /* @__PURE__ */ c(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": U,
        className: p(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          R.wrap,
          y
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            h === !1 ? null : typeof h == "function" ? h(L ?? 0) : L !== void 0 ? /* @__PURE__ */ c("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: L }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            M && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: M,
                disabled: _ || !x,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            l && l.length > 0 && (v || m || b) && /* @__PURE__ */ e(
              Ot,
              {
                "aria-label": "每页条数",
                size: z,
                value: E,
                disabled: _,
                onChange: (ee) => P(Number(ee)),
                options: W,
                searchable: !1,
                clearable: !1,
                wrapperClassName: R.selectWrap,
                className: p("cursor-pointer font-sans tabular-nums select-none", R.select)
              }
            ),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !x || _,
                onClick: w,
                className: p(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  R.navBtn
                ),
                children: [
                  /* @__PURE__ */ e(cn, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "上一页" })
                ]
              }
            ),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-label": "下一页",
                disabled: !C || _,
                onClick: N,
                className: p(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  R.navBtn
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "下一页" }),
                  /* @__PURE__ */ e(br, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ]
      }
    );
  const j = u ?? 0, K = Math.max(1, Math.ceil(j / Math.max(1, E))), [V, ne] = F(""), H = ce(null);
  if (j <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": U,
        className: p(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          R.wrap,
          y
        ),
        children: /* @__PURE__ */ e("div", { children: h === !1 ? null : typeof h == "function" ? h(0) : /* @__PURE__ */ c("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const te = (ee) => {
    const Ne = Math.min(Math.max(1, ee), K);
    Ne !== S && (b == null || b(Ne, E), f == null || f(Ne));
  }, Z = () => {
    const ee = V.trim();
    if (!ee) {
      H.current = null;
      return;
    }
    if (ee === H.current) return;
    const Ne = parseInt(ee, 10);
    if (Number.isNaN(Ne)) {
      ne(""), H.current = null;
      return;
    }
    const $ = Math.min(Math.max(1, Ne), K);
    H.current = ee, ne(String($)), te($);
  }, re = [];
  if (K <= 7)
    for (let ee = 1; ee <= K; ee++) re.push(ee);
  else {
    re.push(1), S > 3 && re.push("...");
    const ee = Math.max(2, S - 1), Ne = Math.min(K - 1, S + 1);
    for (let $ = ee; $ <= Ne; $++) re.push($);
    S < K - 2 && re.push("..."), re.push(K);
  }
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": U,
      className: p(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        R.wrap,
        y
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: h === !1 ? null : typeof h == "function" ? h(j) : /* @__PURE__ */ c("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: j }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          l && l.length > 0 && /* @__PURE__ */ e(
            Ot,
            {
              "aria-label": "每页条数",
              size: z,
              value: E,
              disabled: _,
              onChange: (ee) => P(Number(ee)),
              options: W,
              searchable: !1,
              clearable: !1,
              wrapperClassName: R.selectWrap,
              className: p("cursor-pointer font-sans tabular-nums select-none", R.select)
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: S <= 1,
              onClick: () => te(S - 1),
              className: p(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                R.navBtn
              ),
              children: /* @__PURE__ */ e(cn, { className: "h-3.5 w-3.5" })
            }
          ),
          re.map(
            (ee, Ne) => ee === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${Ne}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => te(ee),
                className: p(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  R.pageBtn,
                  ee === S ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: ee
              },
              ee
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: S >= K,
              onClick: () => te(S + 1),
              className: p(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                R.navBtn
              ),
              children: /* @__PURE__ */ e(br, { className: "h-3.5 w-3.5" })
            }
          ),
          g && /* @__PURE__ */ c(
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
                    value: V,
                    onChange: (ee) => {
                      H.current = null, ne(ee.target.value);
                    },
                    onKeyDown: (ee) => {
                      ee.key === "Enter" && (ee.preventDefault(), Z());
                    },
                    onBlur: Z,
                    className: p(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors",
                      R.input
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
}, Cp = (t) => /* @__PURE__ */ e(hn, { mode: "cursor", ...t }), Sp = (t) => /* @__PURE__ */ e(hn, { ...t }), yt = ({
  variant: t = "text",
  animation: r = "pulse",
  motion: a,
  width: n,
  height: s,
  className: o,
  style: d,
  children: i,
  ...u
}) => {
  const l = ve(a), b = l === "none" ? "none" : r, f = {
    ...d,
    ...n !== void 0 ? { width: typeof n == "number" ? `${n}px` : n } : {},
    ...s !== void 0 ? { height: typeof s == "number" ? `${s}px` : s } : {}
  };
  return /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-live": "polite",
      "data-motion": l,
      style: f,
      className: p(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && p("rounded-md", s === void 0 && "h-4"),
        b === "wave" && "abc-skeleton-wave skeleton-wave",
        b === "pulse" && "animate-pulse",
        o
      ),
      ...u,
      children: i
    }
  );
}, Ip = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ c(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-card",
    className: p(
      "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]",
      r
    ),
    ...a,
    children: [
      /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(yt, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(yt, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(yt, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(yt, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), _p = ({
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
    className: p(
      "overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      s
    ),
    ...o,
    children: /* @__PURE__ */ c("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((d, i) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        yt,
        {
          variant: "text",
          width: i === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, i)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((d, i) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((u, l) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        yt,
        {
          variant: "text",
          width: `${Math.max(40, 85 - (i + l) % 4 * 15)}%`,
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-cell"
        }
      ) }, l)) }, i)) })
    ] })
  }
), Tp = ({
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
    className: p(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      a
    ),
    ...s,
    children: [
      /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(yt, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(yt, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, d) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        yt,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, d)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, d) => /* @__PURE__ */ e(yt, { variant: "text", width: 36, height: 10, animation: r }, d)) })
    ]
  }
), Oc = {
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
function jb(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in Oc ? n : "neutral";
}
const Mr = ({
  tone: t,
  status: r,
  color: a,
  text: n,
  label: s,
  dot: o = !0,
  pulse: d = !1,
  size: i,
  motion: u,
  className: l,
  children: b,
  ...f
}) => {
  const v = jb(t, r, a), m = Oc[v], h = n ?? s ?? b, g = Se(i, "sm"), y = ve(u);
  return /* @__PURE__ */ c(
    "span",
    {
      "data-motion": y,
      className: p(
        "abc-motion-pop inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap",
        {
          xs: "px-1.5 py-0 text-[10px]",
          sm: "px-2 py-0.5 text-[11px]",
          md: "px-2.5 py-1 text-xs",
          lg: "px-3 py-1.5 text-sm"
        }[g],
        m.tag,
        l
      ),
      ...f,
      children: [
        o && /* @__PURE__ */ c("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
          d && /* @__PURE__ */ e(
            "span",
            {
              className: p(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                m.dot
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: p("relative inline-flex h-1.5 w-1.5 rounded-full", m.dot) })
        ] }),
        /* @__PURE__ */ e("span", { children: h })
      ]
    }
  );
}, Mp = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  variant: s,
  size: o,
  motion: d,
  children: i,
  className: u
}) => {
  const l = Se(o, "sm"), b = ve(d);
  if (s)
    return /* @__PURE__ */ e(
      "span",
      {
        "data-motion": b,
        className: p(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--abc-primary)] focus:ring-offset-2",
          s === "secondary" ? "border-transparent bg-[var(--abc-bg-subtle,#f1f5f9)] text-[var(--abc-fg-secondary,#64748b)]" : s === "outline" ? "border-[var(--abc-border,#e2e8f0)] text-[var(--abc-fg,#0f172a)] bg-transparent" : s === "destructive" ? "border-transparent bg-[var(--abc-danger,#ef4444)] text-white" : "border-transparent bg-[var(--abc-primary,#2563eb)] text-white",
          u
        ),
        children: i
      }
    );
  const f = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", v = a || t > 0, m = t > r ? `${r}+` : String(t), h = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, g = {
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
  return i ? /* @__PURE__ */ c("span", { "data-motion": b, className: p("relative inline-flex shrink-0", u), children: [
    i,
    v && (a ? /* @__PURE__ */ e(
      "span",
      {
        className: p(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          y[l],
          f
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: p(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          C[l],
          f
        ),
        children: m
      }
    ))
  ] }) : v ? a ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": b,
      className: p("abc-motion-pop inline-block rounded-full", h[l], f, u)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": b,
      className: p(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        g[l],
        f,
        u
      ),
      children: m
    }
  ) : null;
}, Rb = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, zb = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = Se(a, "sm"), d = ve(n), [i, u] = F(!1), l = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": d,
      className: p(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        Rb[o],
        s
      ),
      children: t && !i ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: r,
          onError: () => u(!0),
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ e("span", { children: l })
    }
  );
};
function Ep(t = {}) {
  return "";
}
const $b = ({
  variant: t = "default",
  dot: r = !1,
  className: a,
  children: n,
  ...s
}) => {
  const d = {
    default: "primary",
    secondary: "neutral",
    destructive: "danger",
    outline: "neutral",
    success: "success",
    warning: "warning",
    info: "info"
  }[t] ?? "neutral";
  return /* @__PURE__ */ e(
    Mr,
    {
      tone: d,
      dot: r,
      className: p(t === "outline" && "bg-transparent border-[var(--abc-border)]", a),
      ...s,
      children: n
    }
  );
};
$b.displayName = "Tag";
const Ob = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Fb = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, Wb = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, Hb = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, vn = ({
  as: t = "div",
  title: r,
  subtitle: a,
  extra: n,
  footer: s,
  size: o,
  padding: d,
  variant: i = "default",
  cover: u,
  statusRibbon: l,
  loading: b = !1,
  motion: f,
  hoverable: v = !1,
  className: m,
  bodyClassName: h,
  children: g,
  ...y
}) => {
  const C = t, x = Se(o, "md"), I = ve(f), A = d ?? x;
  return /* @__PURE__ */ c(
    C,
    {
      "data-motion": I,
      "data-size": x,
      className: p(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        Hb[i],
        v && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        m
      ),
      ...y,
      children: [
        u && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: u }),
        (r || n || l) && /* @__PURE__ */ c(
          "div",
          {
            className: p(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Fb[x]
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "min-w-0", children: [
                r && /* @__PURE__ */ e(
                  "h3",
                  {
                    className: p(
                      "font-semibold text-[var(--abc-fg)] leading-snug",
                      x === "xs" ? "text-xs" : x === "lg" ? "text-base" : "text-sm"
                    ),
                    children: r
                  }
                ),
                a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
              ] }),
              (n || l) && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
                l && /* @__PURE__ */ e(Mr, { tone: l.tone ?? "primary", size: "xs", dot: !1, children: l.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: p(Ob[A], h), children: b ? /* @__PURE__ */ c("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(yt, { width: "45%", height: 14, motion: I }),
          /* @__PURE__ */ e(yt, { width: "90%", height: 12, motion: I }),
          /* @__PURE__ */ e(yt, { width: "70%", height: 12, motion: I })
        ] }) : g }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              Wb[x]
            ),
            children: s
          }
        )
      ]
    }
  );
}, Kb = Ge.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-header",
      className: p("flex flex-col gap-1.5 p-6 border-b border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Kb.displayName = "CardHeader";
const Ub = Ge.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "h3",
    {
      ref: a,
      "data-slot": "card-title",
      className: p("font-semibold leading-none tracking-tight text-[var(--abc-fg)] text-base", t),
      ...r
    }
  )
);
Ub.displayName = "CardTitle";
const Gb = Ge.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "p",
    {
      ref: a,
      "data-slot": "card-description",
      className: p("text-sm text-[var(--abc-fg-muted)] leading-relaxed", t),
      ...r
    }
  )
);
Gb.displayName = "CardDescription";
const Vb = Ge.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-content",
      className: p("p-6 pt-0", t),
      ...r
    }
  )
);
Vb.displayName = "CardContent";
const Yb = Ge.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-footer",
      className: p("flex items-center p-6 pt-0 border-t border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Yb.displayName = "CardFooter";
const Ap = ({
  orientation: t = "horizontal",
  label: r,
  className: a,
  ...n
}) => t === "vertical" ? /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    "aria-orientation": "vertical",
    className: p("mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle", a),
    ...n
  }
) : r ? /* @__PURE__ */ c(
  "div",
  {
    role: "separator",
    className: p("my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]", a),
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
    className: p("my-3 h-px w-full bg-[var(--abc-border)]", a),
    ...n
  }
), qb = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Xb = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, Lp = ({
  direction: t = "horizontal",
  size: r,
  wrap: a = !1,
  align: n = "center",
  className: s,
  children: o,
  ...d
}) => {
  const i = Se(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Xb[n],
        qb[i],
        a && "flex-wrap",
        s
      ),
      ...d,
      children: o
    }
  );
}, Zb = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, Dp = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: o,
  ...d
}) => {
  const i = Se(r, "md"), u = ve(a), l = ce(null), [b, f] = F({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ c(
    "div",
    {
      ref: l,
      "data-motion": u,
      "data-size": i,
      onMouseMove: (v) => {
        var h;
        const m = (h = l.current) == null ? void 0 : h.getBoundingClientRect();
        m && f({ x: v.clientX - m.left, y: v.clientY - m.top, active: !0 });
      },
      onMouseLeave: () => f((v) => ({ ...v, active: !1 })),
      className: p(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        Zb[i],
        n && "abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md",
        s
      ),
      ...d,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": "true",
            className: p(
              "pointer-events-none absolute -inset-px",
              u !== "none" && "transition-opacity duration-[var(--abc-motion-base)]"
            ),
            style: {
              opacity: b.active ? 1 : 0,
              background: `radial-gradient(360px circle at ${b.x}px ${b.y}px, ${t}, transparent 75%)`
            }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: o })
      ]
    }
  );
}, Go = ({ duration: t = 8, motion: r, className: a }) => {
  const n = ve(r);
  return n === "none" ? null : /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": n,
      className: p(
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
}, Vo = ({
  motion: t,
  className: r
}) => {
  const a = ve(t), n = a === "none";
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": a,
      className: p("pointer-events-none absolute inset-0 overflow-hidden", r),
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
}, ma = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, Oa = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, En = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Fc = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, Ys = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, Pp = ({
  title: t,
  value: r,
  prefix: a,
  suffix: n,
  trend: s,
  sparkline: o,
  icon: d,
  footer: i,
  loading: u = !1,
  hoverable: l = !0,
  size: b,
  motion: f,
  className: v,
  ...m
}) => {
  const h = Se(b, "md"), g = ve(f), y = mt().replace(/:/g, ""), C = Ge.useMemo(() => {
    if (!o || o.length < 2) return null;
    const I = Math.min(...o), B = Math.max(...o) - I || 1, L = 120, N = 32, M = `M ${o.map((S, E) => {
      const z = E / (o.length - 1) * L, U = N - 4 - (S - I) / B * (N - 8);
      return `${z.toFixed(1)},${U.toFixed(1)}`;
    }).join(" L ")}`, _ = `${M} L ${L},${N} L 0,${N} Z`;
    return { linePath: M, areaPath: _, width: L, height: N };
  }, [o]), x = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": g,
      "data-size": h,
      className: p(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        ma[h],
        l && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        v
      ),
      ...m,
      children: u ? /* @__PURE__ */ c("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(yt, { width: "45%", height: 13, motion: g }),
          /* @__PURE__ */ e(yt, { variant: "rounded", width: 30, height: 30, motion: g })
        ] }),
        /* @__PURE__ */ e(yt, { width: "60%", height: 26, motion: g }),
        /* @__PURE__ */ e(yt, { width: "80%", height: 18, motion: g })
      ] }) : /* @__PURE__ */ c(Ue, { children: [
        /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          d && /* @__PURE__ */ e(
            "span",
            {
              className: p(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                Ys[h]
              ),
              children: d
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: Fc[h], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || C) && /* @__PURE__ */ c("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ c(
              "span",
              {
                className: p(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  x
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(wc, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(Yd, { className: "h-3 w-3" }) : /* @__PURE__ */ e(In, { className: "h-3 w-3" }),
                  s.value
                ]
              }
            ),
            s.label && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: s.label })
          ] }),
          C && /* @__PURE__ */ c(
            "svg",
            {
              viewBox: `0 0 ${C.width} ${C.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ c("linearGradient", { id: `abc-spark-${y}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
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
        i && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: i })
      ] })
    }
  );
}, Wc = Ts(null), Jb = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Bp = ({
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  columns: i = 2,
  className: u,
  children: l
}) => {
  const b = mt(), f = Se(o, "md"), v = ve(d), [m, h] = tr({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), g = (y) => {
    if (!s)
      if (t) {
        const C = Array.isArray(m) ? m : [], I = C.includes(y) ? C.filter((A) => A !== y) : [...C, y];
        h(I);
      } else
        h(y);
  };
  return /* @__PURE__ */ e(
    Wc.Provider,
    {
      value: {
        multiple: t,
        value: m,
        disabled: s,
        size: f,
        motion: v,
        name: b,
        toggleValue: g
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          role: t ? "group" : "radiogroup",
          "data-motion": v,
          className: p("grid gap-3", Jb[i], u),
          children: l
        }
      )
    }
  );
}, jp = ({
  value: t,
  title: r,
  description: a,
  avatar: n,
  icon: s,
  extra: o,
  checked: d,
  defaultChecked: i = !1,
  onChange: u,
  disabled: l = !1,
  size: b,
  motion: f,
  className: v,
  children: m
}) => {
  const h = Ba(Wc), g = Se(b ?? (h == null ? void 0 : h.size), "md"), y = ve(f ?? (h == null ? void 0 : h.motion)), C = !!(l || h != null && h.disabled), x = !!(h && t !== void 0), I = h && !h.multiple ? "radio" : "checkbox", [A, B] = tr({
    value: d,
    defaultValue: i,
    onChange: u
  }), L = x ? h.multiple ? Array.isArray(h.value) && h.value.includes(t) : h.value === t : A, N = (w) => {
    C || (x ? h.toggleValue(t) : B(w));
  };
  return /* @__PURE__ */ c(
    "label",
    {
      "data-motion": y,
      "data-size": g,
      "data-checked": L ? "true" : "false",
      className: p(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        ma[g],
        L ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !C && !L && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        C ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1",
        v
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: I,
            name: h == null ? void 0 : h.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!L,
            disabled: C,
            onChange: (w) => N(w.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: p(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              Ys[g]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: p("font-semibold text-[var(--abc-fg)]", Oa[g]), children: r }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          a && /* @__PURE__ */ e("p", { className: p("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", En[g]), children: a }),
          m && /* @__PURE__ */ e("div", { className: "mt-2", children: m })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: p(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              L ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(bt, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Rp = ({
  title: t,
  description: r,
  icon: a,
  tags: n,
  extra: s,
  href: o,
  target: d,
  disabled: i = !1,
  onClick: u,
  size: l,
  motion: b,
  className: f
}) => {
  const v = Se(l, "md"), m = ve(b), h = !!((o || u) && !i), g = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": m,
      "data-size": v,
      className: p(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        ma[v],
        h && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
        i && "opacity-55 cursor-not-allowed",
        f
      ),
      children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              a && /* @__PURE__ */ e(
                "span",
                {
                  className: p(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    Ys[v]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: p("min-w-0 truncate", Oa[v]), children: o && !i ? /* @__PURE__ */ e(
                "a",
                {
                  href: o,
                  target: d,
                  rel: d === "_blank" ? "noreferrer" : void 0,
                  onClick: () => u == null ? void 0 : u(),
                  className: p(g, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : u && !i ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: u,
                  className: p(g, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          r && /* @__PURE__ */ e("p", { className: p("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", En[v]), children: r })
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
}, Qb = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, zp = ({
  title: t,
  subtitle: r,
  icon: a,
  extra: n,
  defaultOpen: s = !0,
  open: o,
  onOpenChange: d,
  size: i,
  motion: u,
  className: l,
  bodyClassName: b,
  children: f
}) => {
  const v = Se(i, "md"), m = ve(u), h = mt(), [g, y] = tr({
    value: o,
    defaultValue: s,
    onChange: d
  });
  return /* @__PURE__ */ c(
    "section",
    {
      "data-motion": m,
      "data-size": v,
      className: p(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        l
      ),
      children: [
        /* @__PURE__ */ c("div", { className: p("flex items-center justify-between gap-3", Qb[v]), children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              "aria-expanded": g,
              "aria-controls": h,
              onClick: () => y(!g),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  Yt,
                  {
                    className: p(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      g ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: a }),
                /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: p("truncate font-semibold text-[var(--abc-fg)]", Oa[v]), children: t }),
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
        /* @__PURE__ */ e("div", { id: h, className: "abc-collapse-grid", "data-open": g, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "border-t border-[var(--abc-border)]",
              ma[v],
              b
            ),
            children: f
          }
        ) }) })
      ]
    }
  );
}, $p = ({
  tier: t,
  price: r,
  period: a = "/ 月",
  description: n,
  features: s,
  recommended: o = !1,
  badge: d = "推荐方案",
  ctaText: i = "选择此方案",
  disabled: u = !1,
  loading: l = !1,
  onSelect: b,
  size: f,
  motion: v,
  className: m
}) => {
  const h = Se(f, "md"), g = ve(v);
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": g,
      "data-size": h,
      className: p(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        ma[h],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        m
      ),
      children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: p("font-bold text-[var(--abc-fg)]", Oa[h]), children: t }),
            o && d && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(Ra, { className: "h-2.5 w-2.5" }),
              d
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: p("mt-1.5 text-[var(--abc-fg-muted)]", En[h]), children: n }),
          /* @__PURE__ */ c("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: p("font-extrabold text-[var(--abc-fg)]", Fc[h]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((y, C) => {
            const x = typeof y == "string" ? { text: y, included: !0 } : y, I = x.included !== !1;
            return /* @__PURE__ */ c(
              "li",
              {
                className: p(
                  "flex items-start gap-2 text-xs",
                  I ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  I ? /* @__PURE__ */ e(bt, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(ft, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: x.text })
                ]
              },
              C
            );
          }) })
        ] }),
        b && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          xe,
          {
            variant: o ? "primary" : "secondary",
            size: h,
            motion: g,
            block: !0,
            disabled: u,
            loading: l,
            onClick: b,
            children: i
          }
        ) })
      ]
    }
  );
}, em = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, Op = ({
  columns: t = 3,
  gap: r,
  className: a,
  children: n,
  ...s
}) => {
  const o = Se(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "grid auto-rows-[minmax(148px,auto)]",
        em[t],
        tm[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, tm = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, Fp = ({
  colSpan: t = 1,
  rowSpan: r = 1,
  eyebrow: a,
  title: n,
  description: s,
  icon: o,
  graphic: d,
  footer: i,
  hoverable: u = !0,
  size: l,
  motion: b,
  className: f,
  children: v,
  ...m
}) => {
  const h = Se(l, "md"), g = ve(b), y = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", C = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": g,
      "data-size": h,
      className: p(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        ma[h],
        y,
        C,
        u && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        f
      ),
      ...m,
      children: [
        /* @__PURE__ */ c("div", { children: [
          (a || o) && /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: p("font-bold text-[var(--abc-fg)]", Oa[h]), children: n }),
          s && /* @__PURE__ */ e("p", { className: p("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", En[h]), children: s })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: d }),
        v,
        i && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: i })
      ]
    }
  );
}, rm = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Wp = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const o = Se(a, "sm"), d = ve(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": d,
      className: p("abc-breadcrumb", rm[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((i, u) => {
        const l = u === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ c(
          "a",
          {
            href: i.href ?? "#",
            "aria-current": l ? "page" : void 0,
            onClick: (b) => {
              var f;
              (!i.href || i.href === "#" || i.onClick) && b.preventDefault(), l || (f = i.onClick) == null || f.call(i, b);
            },
            className: p(
              "abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              l ? "font-semibold text-[var(--abc-fg)] cursor-default no-underline" : "text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer"
            ),
            children: [
              i.icon && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: i.icon }),
              /* @__PURE__ */ e("span", { children: i.label })
            ]
          }
        ) }, i.key ?? u);
      }) })
    }
  );
}, am = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, nm = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, Hp = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: d,
  className: i
}) => {
  const u = n === "vertical", l = Se(s, "sm"), b = ve(o);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": b,
      className: p(
        "m-0 list-none p-0",
        u ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        i
      ),
      children: t.map((f, v) => {
        const m = f.status ?? (v < r ? "finish" : v === r ? a : "wait"), h = !!(d && !f.disabled), g = v === t.length - 1, y = m === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : m === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : m === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ c(
          "li",
          {
            className: p(
              "relative flex min-w-0",
              u ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: !h,
                  onClick: () => h && (d == null ? void 0 : d(v)),
                  className: p(
                    "abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]",
                    h ? "cursor-pointer" : "cursor-default"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: p(
                          "abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors",
                          am[l],
                          y
                        ),
                        children: f.icon ? f.icon : m === "finish" ? /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" }) : m === "error" ? /* @__PURE__ */ e(Er, { className: "h-3.5 w-3.5" }) : v + 1
                      }
                    ),
                    /* @__PURE__ */ c("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: p(
                            "block font-semibold",
                            nm[l],
                            m === "wait" ? "text-[var(--abc-fg-muted)]" : m === "error" ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg)]"
                          ),
                          children: f.title
                        }
                      ),
                      f.description && /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: f.description })
                    ] })
                  ]
                }
              ),
              !g && !u && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: p(
                    "hidden h-px flex-1 sm:block",
                    v < r ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border)]"
                  )
                }
              )
            ]
          },
          f.key ?? v
        );
      })
    }
  );
}, sm = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, om = {
  xs: "px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]",
  sm: "px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]",
  md: "px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]",
  lg: "px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]"
};
function Kp({
  options: t,
  value: r,
  onChange: a,
  onValueChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  block: i = !1,
  className: u,
  ...l
}) {
  const b = Se(o, "sm"), f = ve(d), v = a ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "segmented-control",
      "data-motion": f,
      className: p(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        i ? "flex w-full" : "inline-flex",
        sm[b],
        u
      ),
      ...l,
      children: t.map((m) => {
        const h = m.value === r, g = s || !!m.disabled;
        return /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            disabled: g,
            onClick: () => v == null ? void 0 : v(m.value),
            className: p(
              "inline-flex cursor-pointer select-none items-center justify-center gap-1.5 font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              i && "flex-1",
              om[b],
              h ? "bg-[var(--abc-bg-surface)] font-semibold text-[var(--abc-primary)] shadow-2xs ring-1 ring-[var(--abc-border)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
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
const Et = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: d
}) => {
  const i = ve(s), [u, l] = F(!1), [b, f] = F(!1), v = mt(), m = ce(null), h = ce(null), g = ce(null), y = ce(null), C = de(() => {
    typeof window > "u" || (g.current !== null && (window.clearTimeout(g.current), g.current = null), y.current !== null && (window.clearTimeout(y.current), y.current = null));
  }, []);
  me(() => () => C(), [C]);
  const x = de(
    (E = !1) => {
      a || !t || (C(), f(!1), E || n <= 0 || typeof window > "u" ? l(!0) : g.current = window.setTimeout(() => {
        l(!0), g.current = null;
      }, n));
    },
    [a, t, n, C]
  ), I = de(() => {
    if (C(), typeof window > "u") {
      l(!1);
      return;
    }
    y.current = window.setTimeout(() => {
      l(!1), y.current = null;
    }, 60);
  }, [C]), A = de(() => {
    C(), f(!0), l(!1);
  }, [C]), { isMounted: B, isVisible: L } = Fr(
    u && !a && !!t,
    i === "none" || b ? 0 : 100
  ), { style: N, actualSide: w, arrowOffset: M, portalContainer: _ } = za({
    open: B,
    triggerRef: m,
    floatingRef: h,
    placement: r,
    offset: 8
  });
  if (me(() => {
    if (!u) return;
    const E = (z) => {
      z.key === "Escape" && A();
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [u, A]), !t || a) return /* @__PURE__ */ e(Ue, { children: o });
  const S = w === "top" ? { left: `${M}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "bottom" ? { left: `${M}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "left" ? { top: `${M}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${M}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ c(Ue, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: m,
        "data-motion": i,
        "aria-describedby": u ? v : void 0,
        onMouseEnter: () => x(!1),
        onMouseLeave: I,
        onFocus: () => x(!0),
        onBlur: A,
        onPointerDown: A,
        className: p("inline-flex items-center", d),
        children: o
      }
    ),
    B && _ && ar(
      /* @__PURE__ */ c(
        "div",
        {
          ref: h,
          id: v,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": i,
          "data-placement": w,
          style: N,
          className: p(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            i !== "none" && (L ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "relative z-10 block", children: t }),
            /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                style: S,
                className: "pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
              }
            )
          ]
        }
      ),
      _
    )
  ] });
}, ca = ({
  items: t = [],
  content: r,
  align: a,
  placement: n,
  trigger: s = "click",
  open: o,
  defaultOpen: d = !1,
  onOpenChange: i,
  motion: u,
  children: l,
  className: b,
  panelClassName: f
}) => {
  const v = ve(u), [m, h] = tr({
    value: o,
    defaultValue: d,
    onChange: i
  }), { isMounted: g, isVisible: y } = Fr(m, v === "none" ? 0 : 140), C = ce(null), x = ce(null), I = ce(null), A = mt(), B = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: L, actualSide: N, portalContainer: w } = za({
    open: g,
    triggerRef: C,
    floatingRef: x,
    placement: B,
    offset: 6
  }), M = de(() => {
    I.current !== null && typeof window < "u" && (window.clearTimeout(I.current), I.current = null);
  }, []);
  me(() => () => M(), [M]);
  const _ = de(() => {
    s === "hover" && (M(), h(!0));
  }, [s, M, h]), S = de(() => {
    s === "hover" && (M(), typeof window < "u" && (I.current = window.setTimeout(() => {
      h(!1), I.current = null;
    }, 140)));
  }, [s, M, h]), E = de((P) => {
    var V;
    const W = x.current;
    if (!W) return;
    const j = Array.from(
      W.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (j.length === 0) return;
    const K = (P % j.length + j.length) % j.length;
    (V = j[K]) == null || V.focus();
  }, []);
  me(() => {
    if (!m) return;
    const P = (j) => {
      var V, ne;
      const K = j.target;
      (V = C.current) != null && V.contains(K) || (ne = x.current) != null && ne.contains(K) || h(!1);
    }, W = (j) => {
      var K;
      if (j.key === "Escape") {
        j.preventDefault(), j.stopPropagation(), h(!1);
        const V = (K = C.current) == null ? void 0 : K.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        V == null || V.focus();
      }
    };
    return document.addEventListener("mousedown", P), document.addEventListener("keydown", W, !0), () => {
      document.removeEventListener("mousedown", P), document.removeEventListener("keydown", W, !0);
    };
  }, [m, h]);
  const z = !r, U = (P) => {
    P.key === "ArrowDown" ? (P.preventDefault(), h(!0), z && typeof window < "u" && window.requestAnimationFrame(() => E(0))) : (P.key === "Enter" || P.key === " ") && P.target === P.currentTarget && (P.preventDefault(), h(!m));
  }, R = (P) => {
    if (!z) return;
    const W = x.current;
    if (!W) return;
    const j = Array.from(
      W.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (j.length === 0) return;
    const K = j.indexOf(document.activeElement);
    P.key === "ArrowDown" ? (P.preventDefault(), E(K < 0 ? 0 : K + 1)) : P.key === "ArrowUp" ? (P.preventDefault(), E(K <= 0 ? j.length - 1 : K - 1)) : P.key === "Home" ? (P.preventDefault(), E(0)) : P.key === "End" && (P.preventDefault(), E(j.length - 1));
  }, T = s === "hover" ? N === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : N === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : N === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ c(Ue, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: C,
        "data-motion": v,
        onMouseEnter: _,
        onMouseLeave: S,
        className: p("inline-flex", b),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": m,
            "aria-controls": m ? A : void 0,
            "aria-haspopup": z ? "menu" : void 0,
            onClick: () => h(!m),
            onKeyDown: U,
            className: "inline-flex cursor-pointer items-center",
            children: l
          }
        )
      }
    ),
    g && w && ar(
      /* @__PURE__ */ e(
        "div",
        {
          ref: x,
          id: A,
          role: z ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": v,
          "data-placement": N,
          style: L,
          onMouseEnter: _,
          onMouseLeave: S,
          onKeyDown: R,
          className: p(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            T,
            v !== "none" && (y ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            f
          ),
          children: r || t.map(
            (P) => P.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, P.key) : /* @__PURE__ */ c(Ge.Fragment, { children: [
              P.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: P.disabled,
                  onClick: () => {
                    var W;
                    P.disabled || ((W = P.onClick) == null || W.call(P), h(!1));
                  },
                  className: p(
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
}, Hc = ({
  title: t,
  content: r,
  align: a,
  placement: n,
  panelClassName: s,
  ...o
}) => {
  const d = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    ca,
    {
      ...o,
      placement: n ?? (d && d === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: p(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, Kc = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, qs = ({
  label: t,
  htmlFor: r,
  required: a = !1,
  tooltip: n,
  error: s,
  helperText: o,
  extra: d,
  layout: i = "vertical",
  size: u,
  motion: l,
  className: b,
  children: f
}) => {
  const v = Se(u, "sm"), m = ve(l);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": m,
      className: p(
        i === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        b
      ),
      children: [
        (t || d) && /* @__PURE__ */ c(
          "div",
          {
            className: p(
              "flex items-center justify-between gap-2",
              i === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ c(
                "label",
                {
                  htmlFor: r,
                  className: p(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    Kc[v]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(Et, { content: n, children: /* @__PURE__ */ e(la, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
                  ]
                }
              ),
              d && /* @__PURE__ */ e("div", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: d })
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
          f,
          s ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] font-medium text-[var(--abc-danger)]", children: s }) : o && /* @__PURE__ */ e("p", { className: "mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: o })
        ] })
      ]
    }
  );
}, cm = Ge.forwardRef(
  ({ className: t, size: r = "sm", required: a, children: n, ...s }, o) => /* @__PURE__ */ c(
    "label",
    {
      ref: o,
      className: p(
        "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
        Kc[r] || "text-xs",
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
cm.displayName = "Label";
const im = le.forwardRef(
  ({
    className: t,
    containerClassName: r,
    wrapperClassName: a,
    onClear: n,
    clearLabel: s = "清空搜索",
    size: o = "sm",
    ...d
  }, i) => /* @__PURE__ */ e("div", { className: p("relative block min-w-[200px]", r, a), children: /* @__PURE__ */ e(
    Qe,
    {
      ref: i,
      size: o,
      allowClear: !!n,
      onClear: n,
      prefix: /* @__PURE__ */ e(
        It,
        {
          className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)] shrink-0",
          "aria-hidden": "true"
        }
      ),
      className: p("text-xs", t),
      ...d
    }
  ) })
);
im.displayName = "SearchInput";
const Yo = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, qo = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, lm = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Pa = Ge.forwardRef(
  ({
    id: t,
    checked: r,
    defaultChecked: a = !1,
    indeterminate: n = !1,
    onChange: s,
    disabled: o = !1,
    size: d,
    motion: i,
    label: u,
    description: l,
    className: b,
    ...f
  }, v) => {
    const m = Se(d, "sm"), h = ve(i), g = mt(), y = t || g, C = ce(null);
    wn(v, () => C.current, []);
    const [x, I] = tr({
      value: r,
      defaultValue: a
    });
    me(() => {
      C.current && (C.current.indeterminate = !!n);
    }, [n]);
    const A = !!(u || l);
    return /* @__PURE__ */ c(
      "label",
      {
        htmlFor: y,
        "data-motion": h,
        className: p(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          lm[m],
          A ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          b
        ),
        children: [
          /* @__PURE__ */ c(
            "span",
            {
              className: p(
                "relative inline-flex shrink-0 items-center justify-center",
                Yo[m],
                A && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...f,
                    ref: C,
                    id: y,
                    type: "checkbox",
                    checked: x,
                    disabled: o,
                    onChange: (B) => {
                      if (o) return;
                      const L = B.target.checked;
                      I(L), s == null || s(L, B);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: p(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      Yo[m],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      x || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(In, { className: p(qo[m], "stroke-[2.5] abc-motion-pop") }) : x && /* @__PURE__ */ e(bt, { className: p(qo[m], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          A && /* @__PURE__ */ c("span", { className: "flex flex-col", children: [
            u && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: u }),
            l && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
          ] })
        ]
      }
    );
  }
);
Pa.displayName = "Checkbox";
const dm = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, um = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, bm = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-3.5 w-3.5 translate-x-0.5",
  md: "h-4.5 w-4.5 translate-x-0.5",
  lg: "h-5.5 w-5.5 translate-x-0.5"
}, Gt = ({
  checked: t,
  defaultChecked: r = !1,
  onChange: a,
  disabled: n = !1,
  loading: s = !1,
  size: o,
  motion: d,
  checkedLabel: i,
  uncheckedLabel: u,
  checkedChildren: l,
  unCheckedChildren: b,
  ariaLabel: f,
  className: v
}) => {
  const h = Se(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), g = ve(d), [y, C] = tr({
    value: t,
    defaultValue: r,
    onChange: a
  }), x = !!(n || s), I = i ?? l, A = u ?? b;
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": y,
      "aria-label": f,
      disabled: x,
      "data-motion": g,
      onClick: () => {
        x || C(!y);
      },
      className: p(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        dm[h],
        y ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border-strong)]",
        v
      ),
      children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              transitionDuration: "var(--abc-motion-base, 220ms)",
              transitionTimingFunction: "var(--abc-ease-active, cubic-bezier(0.16, 1, 0.3, 1))"
            },
            className: p(
              "pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform",
              y ? um[h] : bm[h]
            ),
            children: s && /* @__PURE__ */ e(rr, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (I || A) && /* @__PURE__ */ e("span", { className: "sr-only", children: y ? I : A })
      ]
    }
  );
}, mm = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, fm = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, pm = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, hm = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, vm = {
  xs: "text-xs gap-1.5",
  sm: "text-xs gap-2",
  md: "text-sm gap-2",
  lg: "text-sm gap-2.5"
}, ir = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  variant: s = "default",
  size: o,
  motion: d,
  disabled: i = !1,
  className: u
}) => {
  var m;
  const l = Se(o, "sm"), b = ve(d), [f, v] = tr({
    value: r,
    defaultValue: a ?? ((m = t[0]) == null ? void 0 : m.value) ?? "",
    onChange: n
  });
  return s === "segmented" ? /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": b,
      className: p(
        "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        mm[l],
        u
      ),
      children: t.map((h) => {
        const g = String(f) === String(h.value), y = !!(i || h.disabled);
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": g,
            disabled: y,
            onClick: () => v(h.value),
            className: p(
              "rounded-[var(--abc-radius-sm)] font-medium cursor-pointer select-none abc-motion-control",
              fm[l],
              g ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]",
              y && "opacity-45 cursor-not-allowed"
            ),
            children: h.label
          },
          String(h.value)
        );
      })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": b,
      className: p("inline-flex flex-wrap items-center gap-4", u),
      children: t.map((h) => {
        const g = String(f) === String(h.value), y = !!(i || h.disabled);
        return /* @__PURE__ */ c(
          "label",
          {
            className: p(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              vm[l],
              y ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "radio",
                  checked: g,
                  disabled: y,
                  onChange: () => v(h.value),
                  className: "peer sr-only"
                }
              ),
              /* @__PURE__ */ e(
                "span",
                {
                  className: p(
                    "flex items-center justify-center rounded-full border abc-motion-control",
                    pm[l],
                    g ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: g && /* @__PURE__ */ e(
                    "span",
                    {
                      className: p(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        hm[l]
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: h.label })
            ]
          },
          String(h.value)
        );
      })
    }
  );
}, Uc = ["日", "一", "二", "三", "四", "五", "六"], Gc = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, An = Ge.forwardRef(
  ({
    value: t,
    defaultValue: r = "",
    onChange: a,
    placeholder: n = "请选择日期",
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: i = "YYYY-MM-DD",
    shortcuts: u = !0,
    id: l,
    name: b,
    minDate: f,
    maxDate: v,
    size: m,
    motion: h,
    className: g
  }, y) => {
    const C = Se(m, "sm"), x = ve(h), I = mt(), A = l || I, B = ce(null), L = ce(null);
    wn(y, () => B.current, []);
    const N = t !== void 0, [w, M] = F(r), _ = N ? t ?? "" : w, [S, E] = F(!1), [z, U] = F({ top: 0, left: 0 }), [R, T] = F(
      () => _ && ze(_).isValid() ? ze(_) : ze()
    ), W = !!((s ?? o ?? !0) && _ && !d);
    me(() => {
      S && T(
        _ && ze(_).isValid() ? ze(_) : ze()
      );
    }, [S, _]);
    const j = oe(() => u === !1 ? [] : Array.isArray(u) ? u : [
      { label: "今天", value: () => ze().format(i) },
      { label: "昨天", value: () => ze().subtract(1, "day").format(i) },
      { label: "明天", value: () => ze().add(1, "day").format(i) },
      { label: "一周前", value: () => ze().subtract(7, "day").format(i) }
    ], [u, i]);
    me(() => {
      if (!S) return;
      const H = () => {
        if (!B.current || typeof window > "u") return;
        const te = B.current.getBoundingClientRect(), Z = j.length > 0 ? 340 : 300, re = 280, Ne = window.innerHeight - te.bottom < Z && te.top > Z ? te.top - Z - 4 : te.bottom + 4;
        let $ = te.left;
        $ + re > window.innerWidth - 8 && ($ = Math.max(8, window.innerWidth - re - 8)), U({ top: Math.max(8, Ne), left: Math.max(8, $) });
      };
      return H(), window.addEventListener("resize", H), window.addEventListener("scroll", H, !0), () => {
        window.removeEventListener("resize", H), window.removeEventListener("scroll", H, !0);
      };
    }, [S, j.length]), me(() => {
      if (!S) return;
      const H = (Z) => {
        var ee, Ne;
        const re = Z.target;
        (ee = B.current) != null && ee.contains(re) || (Ne = L.current) != null && Ne.contains(re) || E(!1);
      }, te = (Z) => {
        Z.key === "Escape" && (Z.preventDefault(), Z.stopPropagation(), E(!1));
      };
      return document.addEventListener("mousedown", H), document.addEventListener("keydown", te, !0), () => {
        document.removeEventListener("mousedown", H), document.removeEventListener("keydown", te, !0);
      };
    }, [S]);
    const K = (H) => {
      N || M(H), a == null || a(H);
    }, V = oe(
      () => xs(R.year(), R.month()),
      [R]
    ), ne = oe(() => {
      if (!_) return "";
      const H = ze(_);
      return H.isValid() ? H.format("YYYY-MM-DD") : _;
    }, [_]);
    return /* @__PURE__ */ c(Ue, { children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: B,
          id: A,
          "data-datepicker-trigger": "",
          "data-motion": x,
          role: "combobox",
          "aria-expanded": S,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && E((H) => !H),
          onKeyDown: (H) => {
            !d && (H.key === "Enter" || H.key === " ") && (H.preventDefault(), E((te) => !te));
          },
          className: p(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            Ar,
            Gc[C],
            S && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            g
          ),
          children: [
            /* @__PURE__ */ e(Ps, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: n,
                value: _,
                name: b,
                tabIndex: -1,
                className: "w-full min-w-0 flex-1 bg-transparent p-0 font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            W && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (H) => {
                  H.stopPropagation(), K("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(ft, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      S && typeof document < "u" && ar(
        /* @__PURE__ */ c(
          "div",
          {
            ref: L,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": x,
            "aria-label": "日期选择面板",
            style: { top: z.top, left: z.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              j.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: j.map((H) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const te = typeof H.value == "function" ? H.value() : H.value;
                    K(te), E(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: H.label
                },
                H.label
              )) }),
              /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => T((H) => H.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Nc, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => T((H) => H.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(cn, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: R.format("YYYY 年 M 月") }),
                /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => T((H) => H.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(br, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => T((H) => H.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(kc, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Uc.map((H) => /* @__PURE__ */ e("span", { className: "py-1", children: H }, H)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: V.map((H) => {
                const te = ze(H.iso), Z = i === "YYYY-MM-DD" ? H.iso : te.format(i), re = H.iso === ne, ee = !!(f && te.isBefore(ze(f), "day") || v && te.isAfter(ze(v), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": Z,
                    disabled: ee,
                    onClick: () => {
                      ee || (K(Z), E(!1));
                    },
                    className: p(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      re ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : H.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      H.isToday && !re && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: H.day
                  },
                  H.iso
                );
              }) })
            ]
          }
        ),
        Tn(B.current) ?? document.body
      )
    ] });
  }
);
An.displayName = "DatePicker";
function ds(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const Ln = Ge.forwardRef(
  ({
    value: t,
    defaultValue: r,
    onChange: a,
    placeholder: n = ["开始日期", "结束日期"],
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: i = "YYYY-MM-DD",
    shortcuts: u = !0,
    id: l,
    minDate: b,
    maxDate: f,
    size: v,
    motion: m,
    className: h
  }, g) => {
    const y = Se(v, "sm"), C = ve(m), x = mt(), I = l || x, A = ce(null), B = ce(null);
    wn(g, () => A.current, []);
    const L = Array.isArray(t) || t === void 0 && Array.isArray(r), N = t !== void 0, [w, M] = F(
      () => ds(r)
    ), _ = N ? ds(t) : w, [S, E] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [z, U] = F(!1), [R, T] = F({ top: 0, left: 0 }), [P, W] = F(null), [j, K] = F(null), [V, ne] = F(
      () => _.start && ze(_.start).isValid() ? ze(_.start) : ze()
    ), H = oe(() => V.add(1, "month"), [V]), Z = !!((s ?? o ?? !0) && (_.start || _.end) && !d);
    me(() => {
      z ? (W(null), K(null), ne(
        _.start && ze(_.start).isValid() ? ze(_.start) : ze()
      )) : (W(null), K(null));
    }, [z, _.start]);
    const re = oe(() => u === !1 ? [] : Array.isArray(u) ? u : [
      {
        label: "今天",
        getValue: () => {
          const be = ze().format(i);
          return { start: be, end: be };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: ze().subtract(6, "day").format(i),
          end: ze().format(i)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: ze().subtract(29, "day").format(i),
          end: ze().format(i)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: ze().startOf("month").format(i),
          end: ze().format(i)
        })
      }
    ], [u, i]);
    me(() => {
      if (!z) return;
      const be = () => {
        if (!A.current || typeof window > "u") return;
        const fe = A.current.getBoundingClientRect(), Pe = re.length > 0 ? 370 : 330, Me = 556, Ie = window.innerHeight - fe.bottom < Pe && fe.top > Pe ? fe.top - Pe - 4 : fe.bottom + 4;
        let X = fe.left;
        X + Me > window.innerWidth - 8 && (X = Math.max(8, window.innerWidth - Me - 8)), T({ top: Math.max(8, Ie), left: Math.max(8, X) });
      };
      return be(), window.addEventListener("resize", be), window.addEventListener("scroll", be, !0), () => {
        window.removeEventListener("resize", be), window.removeEventListener("scroll", be, !0);
      };
    }, [z, re.length]), me(() => {
      if (!z) return;
      const be = (Pe) => {
        var We, Ie;
        const Me = Pe.target;
        (We = A.current) != null && We.contains(Me) || (Ie = B.current) != null && Ie.contains(Me) || U(!1);
      }, fe = (Pe) => {
        Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), U(!1));
      };
      return document.addEventListener("mousedown", be), document.addEventListener("keydown", fe, !0), () => {
        document.removeEventListener("mousedown", be), document.removeEventListener("keydown", fe, !0);
      };
    }, [z]);
    const ee = (be) => {
      N || M(be), L ? a == null || a([be.start, be.end]) : a == null || a(be);
    }, Ne = oe(() => {
      if (P) {
        const be = ze(P);
        if (!j) return { start: be, end: null };
        const fe = ze(j);
        return fe.isBefore(be, "day") ? { start: fe, end: be } : { start: be, end: fe };
      }
      return {
        start: _.start && ze(_.start).isValid() ? ze(_.start) : null,
        end: _.end && ze(_.end).isValid() ? ze(_.end) : null
      };
    }, [P, j, _]), $ = oe(
      () => xs(V.year(), V.month()),
      [V]
    ), Y = oe(
      () => xs(H.year(), H.month()),
      [H]
    ), Te = (be) => {
      const fe = ze(be), Pe = i === "YYYY-MM-DD" ? be : fe.format(i);
      if (!P) {
        W(Pe), K(null);
        return;
      }
      const Me = ze(P), [We, Ie] = fe.isBefore(Me, "day") ? [fe, Me] : [Me, fe];
      ee({ start: We.format(i), end: Ie.format(i) }), W(null), K(null), U(!1);
    }, Le = (be, fe, Pe) => /* @__PURE__ */ c("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between", children: [
        Pe === "left" ? /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => ne((Me) => Me.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Nc, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => ne((Me) => Me.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(cn, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: be.format("YYYY 年 M 月") }),
        Pe === "right" ? /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => ne((Me) => Me.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(br, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => ne((Me) => Me.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(kc, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Uc.map((Me) => /* @__PURE__ */ e("span", { className: "py-1", children: Me }, Me)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: fe.map((Me) => {
        const We = ze(Me.iso), Ie = i === "YYYY-MM-DD" ? Me.iso : We.format(i), X = !!(Ne.start && We.isSame(Ne.start, "day")), ie = !!(Ne.end && We.isSame(Ne.end, "day")), Be = !!(Ne.start && Ne.end && We.isAfter(Ne.start, "day") && We.isBefore(Ne.end, "day")), Ze = !!(b && We.isBefore(ze(b), "day") || f && We.isAfter(ze(f), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": Ie,
            disabled: Ze,
            onMouseEnter: () => P && K(Ie),
            onClick: () => !Ze && Te(Me.iso),
            className: p(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              X || ie ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : Be ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : Me.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              Me.isToday && !X && !ie && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: Me.day
          },
          `${Pe}-${Me.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ c(Ue, { children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: A,
          id: I,
          "data-daterangepicker-trigger": "",
          "data-motion": C,
          role: "combobox",
          "aria-expanded": z,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && U((be) => !be),
          onKeyDown: (be) => {
            !d && (be.key === "Enter" || be.key === " ") && (be.preventDefault(), U((fe) => !fe));
          },
          className: p(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            Ar,
            Gc[y],
            z && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            h
          ),
          children: [
            /* @__PURE__ */ e(Ps, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: S,
                value: _.start,
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
                disabled: d,
                placeholder: E,
                value: _.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            Z && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (be) => {
                  be.stopPropagation(), ee({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(ft, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      z && typeof document < "u" && ar(
        /* @__PURE__ */ c(
          "div",
          {
            ref: B,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": C,
            "aria-label": "日期范围选择面板",
            style: { top: R.top, left: R.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              re.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: re.map((be) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const fe = be.getValue(), Pe = ds(fe);
                    ee(Pe), W(null), K(null), U(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: be.label
                },
                be.label
              )) }),
              /* @__PURE__ */ c("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: Le(V, $, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: Le(H, Y, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: P ? `已选起始日：${P}，请继续点击截止日期` : _.start && _.end ? `已选区间：${_.start} 至 ${_.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        Tn(A.current) ?? document.body
      )
    ] });
  }
);
Ln.displayName = "DateRangePicker";
const gm = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, xm = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function ym(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function wm(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const Vc = ({
  value: t = "",
  onChange: r,
  label: a,
  helperText: n,
  error: s,
  accept: o = "image/*,.svg",
  maxSizeMB: d = 5,
  disabled: i = !1,
  customUpload: u,
  size: l,
  motion: b,
  placeholder: f = "点击或拖拽图片至此处上传",
  className: v
}) => {
  const m = Se(l, "sm"), h = ve(b), g = mt(), y = ce(null), { uploadAdapter: C, toast: x } = pt(), [I, A] = F(!1), [B, L] = F(!1), [N, w] = F(!1), M = async (E) => {
    if (!E || i || I) return;
    if (!(E.type.startsWith("image/") || E.name.toLowerCase().endsWith(".svg"))) {
      x.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (E.size >= d * 1024 * 1024) {
      x.error(`上传图片大小不能超过 ${d}MB`);
      return;
    }
    A(!0);
    try {
      const R = await (u ?? C ?? wm)(E);
      R ? (r == null || r(R), x.success("上传成功")) : x.error("上传失败，未获取到图片地址");
    } catch (U) {
      x.error((U == null ? void 0 : U.message) || "上传图片失败，请重试");
    } finally {
      A(!1), y.current && (y.current.value = "");
    }
  }, _ = (t == null ? void 0 : t.trim()) ?? "", S = ym(_);
  return /* @__PURE__ */ c("div", { "data-motion": h, className: "w-full", children: [
    a && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: g,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: a
      }
    ),
    /* @__PURE__ */ e(
      "input",
      {
        ref: y,
        id: g,
        type: "file",
        accept: o,
        disabled: i || I,
        onChange: (E) => {
          var z;
          return M((z = E.target.files) == null ? void 0 : z[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        onClick: () => {
          var E;
          !_ && !i && !I && ((E = y.current) == null || E.click());
        },
        onDragOver: (E) => {
          E.preventDefault(), E.stopPropagation(), !i && !I && L(!0);
        },
        onDragLeave: (E) => {
          E.preventDefault(), E.stopPropagation(), L(!1);
        },
        onDrop: (E) => {
          var z;
          E.preventDefault(), E.stopPropagation(), L(!1), !i && !I && M((z = E.dataTransfer.files) == null ? void 0 : z[0]);
        },
        className: p(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          B ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !i && !B && "hover:border-[var(--abc-primary)]",
          !_ && !i && "cursor-pointer",
          i && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          gm[m],
          v
        ),
        children: [
          _ ? /* @__PURE__ */ c("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: p(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  xm[m]
                ),
                children: [
                  S ? /* @__PURE__ */ e(
                    "div",
                    {
                      className: "flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full",
                      dangerouslySetInnerHTML: { __html: _ }
                    }
                  ) : /* @__PURE__ */ e("img", { src: _, alt: "凭证预览", className: "h-full w-full object-contain p-1" }),
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
                      children: /* @__PURE__ */ e(ua, { className: "h-4 w-4" })
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
                    disabled: I,
                    onClick: (E) => {
                      var z;
                      E.stopPropagation(), (z = y.current) == null || z.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(da, { className: p("h-3 w-3", I && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    disabled: I,
                    onClick: (E) => {
                      E.stopPropagation(), r == null || r("");
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-danger)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "删除" })
                    ]
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ c("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(qd, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: f }),
            /* @__PURE__ */ c("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              d,
              "MB"
            ] })
          ] }),
          I && /* @__PURE__ */ c("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(rr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "正在上传中..." })
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: s }),
    n && !s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: n }),
    /* @__PURE__ */ e(
      Xt,
      {
        open: N,
        onClose: () => w(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: S ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: _ }
          }
        ) : /* @__PURE__ */ e("img", { src: _, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, Nm = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, Up = ({
  treeData: t,
  checkable: r = !1,
  checkStrictly: a = !1,
  checkedKeys: n,
  defaultCheckedKeys: s = [],
  onCheck: o,
  selectedKeys: d,
  onSelect: i,
  defaultExpandAll: u = !0,
  searchable: l = !1,
  searchPlaceholder: b = "搜索节点名称（支持拼音首字母）...",
  showToolbar: f = !1,
  size: v,
  motion: m,
  renderExtra: h,
  className: g
}) => {
  const y = Se(v, "sm"), C = ve(m), [x, I] = F(""), [A, B] = F(
    () => u ? new Set(os(t)) : /* @__PURE__ */ new Set()
  ), [L, N] = F(s), [w, M] = F([]);
  me(() => {
    u && t.length > 0 && A.size === 0 && B(new Set(os(t)));
  }, [t, u]);
  const _ = n !== void 0 ? n : L, S = d !== void 0 ? d : w, { checkedKeys: E, halfCheckedKeys: z } = oe(
    () => _c(t, _, a),
    [t, _, a]
  ), U = oe(() => new Set(E), [E]), R = oe(() => new Set(z), [z]), { filteredNodes: T, autoExpandedKeys: P } = oe(
    () => xu(t, x),
    [t, x]
  ), W = oe(() => x.trim() ? /* @__PURE__ */ new Set([...A, ...P]) : A, [A, P, x]), j = (H) => {
    B((te) => {
      const Z = new Set(te);
      return Z.has(H) ? Z.delete(H) : Z.add(H), Z;
    });
  }, K = (H, te) => {
    const Z = gu(t, E, H, te, a);
    n === void 0 && N(Z.checkedKeys), o == null || o(Z.checkedKeys, {
      halfCheckedKeys: Z.halfCheckedKeys,
      node: H,
      checked: te
    });
  }, V = (H) => {
    if (H.disabled) return;
    const te = [H.key];
    d === void 0 && M(te), i == null || i(te, H);
  }, ne = (H, te = 0) => /* @__PURE__ */ e("ul", { role: te === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: H.map((Z) => {
    const re = !!(Z.children && Z.children.length > 0), ee = W.has(Z.key), Ne = U.has(Z.key), $ = R.has(Z.key), Y = S.includes(Z.key);
    return /* @__PURE__ */ c("li", { role: "treeitem", "aria-expanded": re ? ee : void 0, children: [
      /* @__PURE__ */ c(
        "div",
        {
          style: { paddingInlineStart: `${te * 18 + 6}px` },
          className: p(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            Nm[y],
            Y ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            Z.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              re ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": ee ? `收起 ${Z.title}` : `展开 ${Z.title}`,
                  onClick: () => j(Z.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    br,
                    {
                      className: p(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        ee && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                Pa,
                {
                  size: y,
                  motion: C,
                  checked: Ne,
                  indeterminate: $,
                  disabled: Z.disabled,
                  onChange: (Te) => K(Z, Te)
                }
              ),
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: Z.disabled,
                  onClick: () => {
                    r && !i ? K(Z, !Ne) : V(Z);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    Z.icon && /* @__PURE__ */ e(dr, { name: Z.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: Z.title })
                  ]
                }
              )
            ] }),
            h && /* @__PURE__ */ e("div", { className: "shrink-0", children: h(Z) })
          ]
        }
      ),
      re && ee && ne(Z.children, te + 1)
    ] }, Z.key);
  }) });
  return /* @__PURE__ */ c("div", { "data-motion": C, className: p("space-y-2", g), children: [
    (l || f) && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
      l && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        Qe,
        {
          size: y,
          motion: C,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5" }),
          placeholder: b,
          value: x,
          onChange: (H) => I(H.target.value)
        }
      ) }),
      f && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => B(new Set(os(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Zd, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => B(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Jd, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: T.length > 0 ? ne(T) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, km = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Cm = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, Sm = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: o = !1,
  size: d,
  motion: i,
  className: u
}) => {
  const l = Se(d, "sm"), b = ve(i), [f, v] = F(r), [m, h] = F(""), g = t !== void 0 ? t : f, y = (I) => {
    t === void 0 && v(I), a == null || a(I);
  }, C = () => {
    const I = m.trim();
    if (!(!I || o)) {
      if (g.includes(I) || g.length >= s) {
        h("");
        return;
      }
      y([...g, I]), h("");
    }
  }, x = (I) => {
    o || y(g.filter((A, B) => B !== I));
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": b,
      className: p(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        km[l],
        Ar,
        o && "opacity-65 cursor-not-allowed",
        u
      ),
      children: [
        g.map((I, A) => /* @__PURE__ */ c(
          "span",
          {
            className: p(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              Cm[l]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: I }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${I}`,
                  onClick: () => x(A),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(ft, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${I}_${A}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: o || g.length >= s,
            value: m,
            placeholder: g.length === 0 ? n : "",
            onChange: (I) => h(I.target.value),
            onBlur: C,
            onKeyDown: (I) => {
              I.key === "Enter" || I.key === "," ? (I.preventDefault(), C()) : I.key === "Backspace" && !m && g.length > 0 && x(g.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function Xo(t, r) {
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
const Im = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, Gp = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: d
}) => {
  const i = Se(a, "md"), u = ve(n), { captchaAdapter: l } = pt(), b = d ?? l, [f, v] = F(null), [m, h] = F(!0), [g, y] = F(!1), [C, x] = F(!1), [I, A] = F(0), [B, L] = F(0), N = ce(!1), w = ce(0), M = ce(0), _ = de(async () => {
    h(!0), y(!1), x(!1), A(0), L(0);
    try {
      if (b) {
        const U = await b();
        v(U);
      } else
        v(Xo(t, r));
    } catch {
      v(Xo(t, r));
    } finally {
      h(!1);
    }
  }, [b, t, r]);
  me(() => {
    _();
  }, [_]);
  const S = (U) => {
    m || g || (N.current = !0, w.current = U, M.current = Date.now());
  }, E = de(
    (U) => {
      if (!N.current || m || g) return;
      const R = U - w.current, T = t - 40, P = Math.max(0, Math.min(T, R));
      A(P), L((t - 60) / T * P);
    },
    [t, m, g]
  ), z = de(() => {
    if (!N.current || m || g) return;
    if (N.current = !1, Date.now() - M.current > 1e4 || !f) {
      x(!0), o == null || o(), setTimeout(_, 600);
      return;
    }
    const R = Math.round(B);
    if (typeof f.targetX == "number" && Math.abs(R - f.targetX) > 10) {
      x(!0), o == null || o(), setTimeout(_, 550);
      return;
    }
    y(!0), s({
      nonceStr: f.nonceStr,
      value: R
    });
  }, [B, f, m, g, o, s, _]);
  return me(() => {
    const U = (W) => E(W.clientX), R = () => z(), T = (W) => {
      W.touches[0] && E(W.touches[0].clientX);
    }, P = () => z();
    return window.addEventListener("mousemove", U), window.addEventListener("mouseup", R), window.addEventListener("touchmove", T), window.addEventListener("touchend", P), () => {
      window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", R), window.removeEventListener("touchmove", T), window.removeEventListener("touchend", P);
    };
  }, [E, z]), /* @__PURE__ */ c("div", { "data-motion": u, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          m ? /* @__PURE__ */ c("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : f && /* @__PURE__ */ c(Ue, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: f.canvasSrc,
                alt: "安全验证背景",
                className: "pointer-events-none h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(
              "img",
              {
                src: f.blockSrc,
                alt: "安全验证滑块",
                className: "pointer-events-none absolute drop-shadow-md",
                style: { top: f.blockY, left: B }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新拼图",
              title: "刷新拼图",
              onClick: _,
              className: "absolute top-2 right-2 rounded-[var(--abc-radius-sm)] bg-black/45 p-1.5 text-white backdrop-blur-xs transition-colors hover:bg-black/65 cursor-pointer",
              children: /* @__PURE__ */ e(Cn, { className: p("h-3.5 w-3.5", m && "animate-spin") })
            }
          ),
          g && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(Nr, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: p(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          Im[i],
          g ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : C ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        ),
        style: { width: t },
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: p(
                "absolute inset-y-0 left-0",
                g ? "bg-[var(--abc-success)]/20" : "bg-[var(--abc-primary)]/20"
              ),
              style: { width: I + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: g ? "验证成功" : C ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(I),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: (U) => S(U.clientX),
              onTouchStart: (U) => {
                U.touches[0] && S(U.touches[0].clientX);
              },
              className: p(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                g ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: I },
              children: g ? /* @__PURE__ */ e(Nr, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Xd, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}, gn = ["B", "KB", "MB", "GB", "TB"], xn = ["s", "m", "h", "d"], Yc = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
}, qc = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400
}, _m = ["TB", "GB", "MB", "KB", "B"], Tm = ["h", "m", "d", "s"];
function yn(t, r = 2) {
  return Number.isFinite(t) ? t.toFixed(r).replace(/\.?0+$/, "") : "0";
}
function Xc(t, r) {
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
function Zc(t, r, a, n, s, o, d) {
  const i = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (i === 0)
    return { unit: n.includes(r) ? r : n[n.length - 1], amount: "0" };
  for (const l of s) {
    if (!n.includes(l)) continue;
    const b = o[l];
    if (i >= b && i % b === 0)
      return { unit: l, amount: String(i / b) };
  }
  const u = n.includes(a) ? a : n[0];
  return {
    unit: u,
    amount: yn(i / o[u], d)
  };
}
function Jc(t, r = "GB", a = gn) {
  const n = a.length > 0 ? a : gn;
  return Zc(t, r, "B", n, _m, Yc, 4);
}
function Qc(t, r = "h", a = xn) {
  const n = a.length > 0 ? a : xn;
  return Zc(
    t,
    r,
    "s",
    n,
    Tm,
    qc,
    2
  );
}
function Vp(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = Jc(n);
  return `${o} ${s}`;
}
function Yp(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = Qc(n);
  return `${o} ${Xc(s, r)}`;
}
function Mm(t, r, a) {
  let n = Math.max(r, Math.round(t));
  return typeof a == "number" && Number.isFinite(a) && (n = Math.min(a, n)), n;
}
function ei({
  id: t,
  fallbackIdSuffix: r,
  value: a,
  onChange: n,
  min: s = 0,
  max: o,
  size: d = "default",
  disabled: i = !1,
  hideHint: u = !1,
  className: l,
  resolvedUnitLabel: b,
  factors: f,
  allowedUnits: v,
  pickBest: m,
  formatUnitLabel: h,
  buildHintText: g,
  "aria-label": y,
  "aria-describedby": C,
  placeholder: x
}) {
  const I = le.useId(), A = t ?? `${I}-${r}`, B = `${A}-hint`, L = Number.isFinite(a) && a >= 0 ? Math.round(a) : 0, N = le.useMemo(
    () => m(L),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [w, M] = le.useState(N.unit), [_, S] = le.useState(N.amount), E = le.useRef(L);
  le.useEffect(() => {
    if (L === E.current) return;
    E.current = L;
    const W = m(L);
    M(W.unit), S(W.amount);
  }, [L, m]);
  const z = f[w], U = (W) => {
    const j = W.target.value;
    if (j !== "" && !/^\d*\.?\d*$/.test(j) || (S(j), j.trim() === "")) return;
    const K = Number(j);
    if (!Number.isFinite(K) || K < 0) return;
    const V = Mm(K * z, s, o);
    E.current = V, n(V);
  }, R = (W) => {
    const j = W.target.value;
    if (!v.includes(j)) return;
    M(j);
    const K = f[j];
    S(L === 0 ? "0" : yn(L / K, 2));
  }, T = () => {
    (_.trim() === "" || !Number.isFinite(Number(_)) || Number(_) < 0) && S(L === 0 ? "0" : yn(L / z, 2));
  }, P = [C, u ? void 0 : B].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ c("div", { className: p("space-y-1", l), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: p(
          "flex items-stretch rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-surface,#ffffff)] shadow-2xs transition-colors focus-within:border-[var(--abc-primary,#2563eb)] focus-within:ring-1 focus-within:ring-[var(--abc-primary,#2563eb)] overflow-hidden w-full",
          i && "opacity-50 cursor-not-allowed",
          d === "sm" ? "h-8" : "h-9"
        ),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: A,
              type: "number",
              step: z === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: i,
              value: _,
              "aria-label": y,
              "aria-describedby": P,
              placeholder: x,
              onChange: U,
              onBlur: T,
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
          /* @__PURE__ */ c("div", { className: "relative flex items-center shrink-0", children: [
            /* @__PURE__ */ e(
              "select",
              {
                "aria-label": b,
                disabled: i,
                value: w,
                onChange: R,
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
                children: v.map((W) => /* @__PURE__ */ e("option", { value: W, className: "bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]", children: h(W) }, W))
              }
            ),
            /* @__PURE__ */ e(Yt, { className: "pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" })
          ] })
        ]
      }
    ),
    !u && /* @__PURE__ */ e("div", { id: B, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: g(L, w) }) })
  ] });
}
function qp({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "GB",
  allowedUnits: n = gn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : gn, i = le.useCallback(
    (b) => Jc(b, a, d),
    [a, d]
  ), u = le.useCallback((b) => b, []), l = le.useCallback(
    (b) => b === 0 && r ? t === "zh" ? "= 0 (无上限)" : "= 0 (Unlimited)" : `= ${b.toLocaleString()} Bytes`,
    [t, r]
  );
  return /* @__PURE__ */ e(
    ei,
    {
      ...o,
      fallbackIdSuffix: "bytes",
      factors: Yc,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "字节单位" : "Byte unit"),
      pickBest: i,
      formatUnitLabel: u,
      buildHintText: l
    }
  );
}
function Xp({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "h",
  allowedUnits: n = xn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : xn, i = le.useCallback(
    (b) => Qc(b, a, d),
    [a, d]
  ), u = le.useCallback(
    (b) => Xc(b, t),
    [t]
  ), l = le.useCallback(
    (b, f) => {
      if (b === 0 && r)
        return t === "zh" ? "= 0 秒 (无上限)" : "= 0s (Unlimited)";
      if (f === "s") {
        const v = yn(b / 3600, 2);
        return t === "zh" ? `≈ ${v} 小时 (${b.toLocaleString()} 秒)` : `≈ ${v} hr (${b.toLocaleString()}s)`;
      }
      return `= ${b.toLocaleString()} ${t === "zh" ? "秒" : "Seconds"}`;
    },
    [t, r]
  );
  return /* @__PURE__ */ e(
    ei,
    {
      ...o,
      fallbackIdSuffix: "duration",
      factors: qc,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: i,
      formatUnitLabel: u,
      buildHintText: l
    }
  );
}
function Zp({
  items: t,
  activeKey: r,
  value: a,
  defaultActiveKey: n,
  onChange: s,
  variant: o = "line",
  size: d,
  motion: i,
  ariaLabel: u = "内容切换标签",
  extra: l,
  className: b,
  panelClassName: f
}) {
  var A;
  const v = Se(d, "md"), m = ve(i), h = mt(), [g, y] = tr({
    value: r ?? a,
    defaultValue: n ?? ((A = t[0]) == null ? void 0 : A.key) ?? "",
    onChange: s
  }), C = (B, L) => {
    const N = t.filter((M) => !M.disabled);
    if (N.length === 0) return;
    const w = N.findIndex((M) => {
      var _;
      return M.key === ((_ = t[L]) == null ? void 0 : _.key);
    });
    if (B.key === "ArrowRight") {
      B.preventDefault();
      const M = N[(w + 1) % N.length];
      M && y(M.key);
    } else if (B.key === "ArrowLeft") {
      B.preventDefault();
      const M = N[(w - 1 + N.length) % N.length];
      M && y(M.key);
    }
  }, x = t.some((B) => B.children !== void 0), I = v === "xs" ? "px-2.5 py-1 text-[11px]" : v === "sm" ? "px-3 py-1.5 text-xs" : v === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ c("div", { "data-motion": m, className: p("w-full", b), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: p(
          "flex items-center justify-between gap-3",
          o === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              className: p(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((B, L) => {
                const N = B.key === g, w = `${h}-tab-${B.key}`;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    id: w,
                    type: "button",
                    role: "tab",
                    "aria-selected": N,
                    tabIndex: N ? 0 : -1,
                    disabled: B.disabled,
                    onClick: () => !B.disabled && y(B.key),
                    onKeyDown: (M) => C(M, L),
                    className: p(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      I,
                      o === "line" ? p(
                        "abc-tab-trigger",
                        N ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? p(
                        "rounded-[var(--abc-radius-sm)]",
                        N ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : p(
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
          l && /* @__PURE__ */ e("div", { className: "shrink-0", children: l })
        ]
      }
    ),
    x && /* @__PURE__ */ e("div", { children: t.map((B) => {
      const L = B.key === g, N = `${h}-tab-${B.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": N,
          tabIndex: L ? 0 : void 0,
          ...L ? {} : { hidden: "until-found" },
          children: L && /* @__PURE__ */ e("div", { className: p("pt-4", m !== "none" && "abc-animate-fade-in", f), children: B.children })
        },
        B.key
      );
    }) })
  ] });
}
const Zo = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function ti(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const Fa = ({
  src: t,
  alt: r = "图片预览",
  size: a,
  motion: n,
  width: s,
  height: o,
  rounded: d = !1,
  fit: i = "contain",
  placeholder: u,
  className: l,
  zoomable: b = !0
}) => {
  const f = Se(a, "sm"), v = ve(n), m = s ?? Zo[f], h = o ?? Zo[f], [g, y] = F(!1), [C, x] = F(!1), [I, A] = F(1), [B, L] = F(0), N = typeof t == "string" ? t.trim() : "", w = ti(N), M = oe(() => N ? w && N.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(N)}` : N : "", [N, w]);
  if (me(() => {
    y(!1);
  }, [N]), !N || g)
    return u ? /* @__PURE__ */ e(Ue, { children: u }) : /* @__PURE__ */ e(
      "div",
      {
        "data-motion": v,
        title: g ? "图片加载失败，请检查 URL 是否有效" : "暂无图片",
        style: {
          width: m,
          height: h,
          minWidth: typeof m == "number" ? m : void 0
        },
        className: p(
          "inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          g && "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]",
          l
        ),
        children: g ? /* @__PURE__ */ e(Er, { className: "h-4 w-4" }) : /* @__PURE__ */ e(vc, { className: "h-4 w-4" })
      }
    );
  const _ = (S) => {
    S.stopPropagation(), b && (A(1), L(0), x(!0));
  };
  return /* @__PURE__ */ c(Ue, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: b ? "button" : void 0,
        tabIndex: b ? 0 : void 0,
        "data-motion": v,
        title: "点击预览大图 / 矢量图",
        "aria-label": b ? `预览 ${r}` : void 0,
        onClick: _,
        onKeyDown: (S) => {
          b && (S.key === "Enter" || S.key === " ") && (S.preventDefault(), _(S));
        },
        style: {
          width: m,
          height: h,
          minWidth: typeof m == "number" ? m : void 0
        },
        className: p(
          "abc-motion-control group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          b && "cursor-zoom-in hover:border-[var(--abc-primary)]",
          l
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: M,
              alt: r,
              onError: () => y(!0),
              className: p(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                w || i === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          b && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e(ua, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ c(
      Xt,
      {
        open: C,
        onClose: () => x(!1),
        title: r,
        size: "lg",
        motion: v,
        footer: /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => A((S) => Math.max(0.4, Number((S - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Qd, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ c("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(I * 100),
            "%"
          ] }),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => A((S) => Math.min(3, Number((S + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(eu, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => L((S) => (S + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Cn, { className: "h-3.5 w-3.5" }),
                " 旋转"
              ]
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6", children: /* @__PURE__ */ e(
            "div",
            {
              style: { transform: `scale(${I}) rotate(${B}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: M, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Jp = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: d,
  className: i
}) => {
  const u = Se(o, "sm"), l = ve(d), b = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", v = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[u];
  return /* @__PURE__ */ c("div", { "data-motion": l, className: p("space-y-2.5", i), children: [
    (t || r) && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: p("font-semibold text-[var(--abc-fg)]", u === "lg" ? "text-sm" : "text-xs"), children: t }),
      r && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: r })
    ] }),
    /* @__PURE__ */ e(
      "dl",
      {
        className: p(
          "m-0 grid",
          b,
          s ? "overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px" : "gap-x-6 gap-y-3"
        ),
        children: a.map((m, h) => {
          const g = m.span && m.span >= n ? "sm:col-span-full" : m.span === 2 ? "sm:col-span-2" : m.span === 3 ? "lg:col-span-3" : void 0;
          return s ? /* @__PURE__ */ c(
            "div",
            {
              className: p("flex min-w-0 bg-[var(--abc-bg-surface)]", g),
              children: [
                /* @__PURE__ */ e(
                  "dt",
                  {
                    className: p(
                      "w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center",
                      v
                    ),
                    children: m.label
                  }
                ),
                /* @__PURE__ */ e("dd", { className: p("m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center", v), children: m.children ?? "-" })
              ]
            },
            m.key ?? h
          ) : /* @__PURE__ */ c("div", { className: p("min-w-0 space-y-0.5", g), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: m.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: m.children ?? "-" })
          ] }, m.key ?? h);
        })
      }
    )
  ] });
}, Em = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Am = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, Qp = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: d,
  className: i
}) => {
  const u = mt(), l = Se(o, "sm"), b = ve(d), [f, v] = F(a), m = n !== void 0 ? n : f, h = (g, y) => {
    let C;
    r ? C = y ? [g] : [] : C = y ? Array.from(/* @__PURE__ */ new Set([...m, g])) : m.filter((x) => x !== g), n === void 0 && v(C), s == null || s(C);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-motion": b,
      className: p(
        "divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        i
      ),
      children: t.map((g) => {
        const y = m.includes(g.key);
        return /* @__PURE__ */ c(
          "details",
          {
            name: r ? u : void 0,
            open: y,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ c(
                "summary",
                {
                  "aria-disabled": g.disabled || void 0,
                  onClick: (C) => {
                    C.preventDefault(), !g.disabled && h(g.key, !y);
                  },
                  className: p(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Em[l],
                    g.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ c("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        Yt,
                        {
                          className: p(
                            "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-fast)]",
                            y ? "rotate-0" : "-rotate-90"
                          )
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "truncate", children: g.label })
                    ] }),
                    g.extra && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: g.extra })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: p(
                    "border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] leading-relaxed text-[var(--abc-fg-secondary)]",
                    Am[l]
                  ),
                  children: g.children
                }
              )
            ]
          },
          g.key
        );
      })
    }
  );
}, Lm = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, eh = ({ items: t, size: r, motion: a, className: n }) => {
  const s = Se(r, "sm"), o = ve(a), d = {
    xs: "gap-2.5 pb-2.5 last:pb-0",
    sm: "gap-3 pb-4 last:pb-0",
    md: "gap-3.5 pb-5 last:pb-0",
    lg: "gap-4 pb-6 last:pb-0"
  }, i = {
    xs: "text-[11px]",
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }, u = {
    xs: "text-[11px]",
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm"
  };
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: p("m-0 list-none space-y-0 p-0", n), children: t.map((l, b) => {
    const f = b === t.length - 1, v = l.tone ?? "primary";
    return /* @__PURE__ */ c("li", { className: p("relative flex", d[s]), children: [
      !f && /* @__PURE__ */ e(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
        }
      ),
      /* @__PURE__ */ e("span", { className: "relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center", children: l.icon ? l.icon : /* @__PURE__ */ e(
        "span",
        {
          className: p(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            Lm[v]
          )
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: p("font-medium text-[var(--abc-fg)]", i[s]), children: l.title }),
          l.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: l.time })
        ] }),
        l.description && /* @__PURE__ */ e("div", { className: p("leading-relaxed text-[var(--abc-fg-muted)]", u[s]), children: l.description })
      ] })
    ] }, l.key ?? b);
  }) });
}, ri = le.forwardRef(
  ({
    value: t,
    displayValue: r,
    copyLabel: a = "复制",
    copiedLabel: n = "已复制",
    hideCopyButton: s = !1,
    className: o,
    codeClassName: d,
    ...i
  }, u) => {
    const [l, b] = le.useState(!1), f = async (v) => {
      if (v.stopPropagation(), !t) return;
      await Mn(t) && (b(!0), setTimeout(() => b(!1), 1600));
    };
    return /* @__PURE__ */ c(
      "span",
      {
        ref: u,
        "data-slot": "copyable-code",
        "data-copied": l ? "true" : void 0,
        className: p("inline-flex max-w-full items-center gap-1.5 align-baseline", o),
        ...i,
        children: [
          /* @__PURE__ */ e(
            "code",
            {
              title: t,
              className: p(
                "break-all rounded bg-[var(--abc-bg-subtle,#f1f5f9)] px-1.5 py-0.5 font-mono text-xs text-[var(--abc-fg,#0f172a)]",
                d
              ),
              children: r ?? t
            }
          ),
          !s && t ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: f,
              "aria-label": l ? n : `${a}: ${t}`,
              title: l ? n : a,
              className: p(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                l && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: l ? /* @__PURE__ */ e(bt, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(Or, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
ri.displayName = "CopyableCode";
const Dm = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
  full: "col-span-full"
}, Xs = le.forwardRef(
  ({
    label: t,
    value: r,
    children: a,
    mono: n = !1,
    copyValue: s,
    span: o = 1,
    variant: d = "default",
    className: i,
    valueClassName: u,
    ...l
  }, b) => {
    const f = a ?? r;
    return /* @__PURE__ */ c(
      "div",
      {
        ref: b,
        "data-slot": "description-item",
        className: p(
          "min-w-0",
          d === "cards" && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]",
          d === "divided" && "border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0",
          Dm[o],
          i
        ),
        ...l,
        children: [
          /* @__PURE__ */ e(
            "dt",
            {
              "data-slot": "description-term",
              className: p(
                "text-xs font-medium text-[var(--abc-fg-muted,#64748b)]",
                d === "cards" && "text-[11px] uppercase tracking-wider"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ e(
            "dd",
            {
              "data-slot": "description-details",
              className: p(
                "mt-1 break-all text-xs text-[var(--abc-fg,#0f172a)]",
                d === "compact" && "mt-0.5 text-xs",
                n && "font-mono text-xs",
                u
              ),
              children: s ? /* @__PURE__ */ e(
                ri,
                {
                  value: s,
                  displayValue: f,
                  codeClassName: "bg-transparent px-0 py-0 text-inherit"
                }
              ) : f
            }
          )
        ]
      }
    );
  }
);
Xs.displayName = "DescriptionItem";
const th = Xs, Pm = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, ai = le.forwardRef(
  ({ columns: t = 2, variant: r = "default", density: a, bordered: n = !1, items: s, children: o, className: d, ...i }, u) => {
    const l = a === "compact" && r === "default" ? "compact" : r;
    return /* @__PURE__ */ e(
      "dl",
      {
        ref: u,
        "data-slot": "description-list",
        className: p(
          "grid",
          l === "compact" ? "gap-2.5" : "gap-3.5",
          n && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3",
          Pm[t],
          d
        ),
        ...i,
        children: s ? s.map((b, f) => /* @__PURE__ */ e(
          Xs,
          {
            label: b.label,
            value: b.value,
            mono: b.mono,
            copyValue: b.copyValue,
            span: b.span,
            variant: l,
            className: b.className
          },
          b.key ?? (typeof b.label == "string" ? b.label : f)
        )) : o
      }
    );
  }
);
ai.displayName = "DescriptionList";
const Bm = {
  error: {
    container: "border-red-500/25 bg-red-50/50 text-red-950 dark:bg-red-950/20 dark:text-red-200 dark:border-red-500/30",
    badge: "border-red-500/30 bg-white/80 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    iconWrap: "bg-red-500/15 text-red-600 dark:text-red-400",
    Icon: Er,
    defaultRole: "alert"
  },
  warning: {
    container: "border-amber-500/25 bg-amber-50/50 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-500/30",
    badge: "border-amber-500/30 bg-white/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    iconWrap: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    Icon: $r,
    defaultRole: "alert"
  },
  success: {
    container: "border-emerald-500/25 bg-emerald-50/50 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-500/30",
    badge: "border-emerald-500/30 bg-white/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    iconWrap: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    Icon: Nr,
    defaultRole: "status"
  },
  info: {
    container: "border-blue-500/25 bg-blue-50/50 text-blue-950 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-500/30",
    badge: "border-blue-500/30 bg-white/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    iconWrap: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Icon: ja,
    defaultRole: "status"
  }
}, Wr = le.forwardRef(
  function({
    variant: r = "error",
    title: a,
    message: n,
    description: s,
    code: o,
    status: d,
    requestId: i,
    actionHint: u,
    action: l,
    onDismiss: b,
    dismissLabel: f = "关闭通知",
    hideIcon: v = !1,
    role: m,
    className: h,
    children: g,
    ...y
  }, C) {
    const x = Bm[r], I = x.Icon, A = n ?? g;
    return /* @__PURE__ */ c(
      "div",
      {
        ref: C,
        role: m ?? x.defaultRole,
        "data-slot": "notification-banner",
        "data-variant": r,
        className: p(
          "relative flex flex-col gap-2 rounded-[var(--abc-radius-lg,0.625rem)] border p-3.5 text-xs shadow-2xs transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-3",
          x.container,
          h
        ),
        ...y,
        children: [
          /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
            !v && /* @__PURE__ */ e(
              "span",
              {
                className: p(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  x.iconWrap
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(I, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 space-y-1", children: [
              (a || o || d != null || i) && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5 font-medium", children: [
                d != null && /* @__PURE__ */ c(
                  "span",
                  {
                    className: p(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      x.badge
                    ),
                    children: [
                      "HTTP ",
                      d
                    ]
                  }
                ),
                o && /* @__PURE__ */ e(
                  "span",
                  {
                    className: p(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      x.badge
                    ),
                    children: o
                  }
                ),
                i && /* @__PURE__ */ c(
                  "span",
                  {
                    className: "font-mono text-[10px] opacity-75 truncate max-w-[200px]",
                    title: `Request ID: ${i}`,
                    children: [
                      "req: ",
                      i
                    ]
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: a })
              ] }),
              A && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: A }),
              s && /* @__PURE__ */ e("div", { className: "text-[11px] leading-normal opacity-85", children: s }),
              u && /* @__PURE__ */ e("div", { className: "pt-0.5 text-[11px] font-medium text-primary", children: u })
            ] })
          ] }),
          (l || b) && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2 self-end sm:self-start", children: [
            l,
            b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": f,
                onClick: b,
                className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    );
  }
);
Wr.displayName = "NotificationBanner";
function rh({
  error: t,
  fallbackTitle: r = "加载失败",
  fallbackMessage: a = "无法加载该区块数据，请重试。",
  action: n,
  retry: s,
  retryLabel: o = "重试",
  isRetrying: d = !1,
  className: i,
  ...u
}) {
  if (!t) return null;
  const l = t, b = (l == null ? void 0 : l.message) || a;
  return /* @__PURE__ */ e(
    Wr,
    {
      variant: "error",
      title: r,
      message: b,
      status: l == null ? void 0 : l.status,
      code: l == null ? void 0 : l.code,
      requestId: l == null ? void 0 : l.requestId,
      className: i,
      action: n ?? (s ? /* @__PURE__ */ c(
        xe,
        {
          size: "xs",
          variant: "outline",
          onClick: s,
          disabled: d,
          className: "h-7 text-xs bg-white/70 dark:bg-slate-900/60",
          children: [
            d ? /* @__PURE__ */ e(rr, { className: "mr-1 h-3 w-3 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ e(da, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: o })
          ]
        }
      ) : null),
      ...u
    }
  );
}
function ah({
  message: t,
  code: r,
  status: a,
  requestId: n,
  onRetry: s,
  retryLabel: o = "重试读取",
  pendingLabel: d,
  retryAriaLabel: i,
  pending: u = !1,
  action: l,
  ...b
}) {
  const f = l ?? (s ? /* @__PURE__ */ c(
    xe,
    {
      variant: "outline",
      size: "sm",
      disabled: u,
      onClick: s,
      "aria-label": i,
      children: [
        /* @__PURE__ */ e(
          da,
          {
            "aria-hidden": "true",
            className: p(
              "mr-1 h-3 w-3",
              u && "animate-spin motion-reduce:animate-[spin_6s_linear_infinite]"
            )
          }
        ),
        /* @__PURE__ */ e("span", { children: u && d ? d : o })
      ]
    }
  ) : void 0);
  return /* @__PURE__ */ e(
    Wr,
    {
      variant: "error",
      role: "alert",
      message: t,
      code: r,
      status: a,
      requestId: n,
      action: f,
      ...b
    }
  );
}
function nh({
  message: t,
  paused: r = !1,
  size: a = "md",
  className: n,
  ...s
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      role: "status",
      "data-slot": "loading-state-card",
      className: p(
        "flex items-center gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-xs text-[var(--abc-fg-muted)] shadow-2xs",
        a === "sm" ? "px-3 py-2 text-[11px]" : "p-3.5",
        r && "border-amber-500/30 bg-amber-50/50 text-amber-900 dark:bg-amber-950/20 dark:text-amber-200",
        n
      ),
      ...s,
      children: [
        r ? /* @__PURE__ */ e(tu, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-amber-600" }) : /* @__PURE__ */ e(
          rr,
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
function sh({
  items: t,
  emptyMessage: r = "当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。",
  className: a
}) {
  return t.length === 0 ? /* @__PURE__ */ e(
    Wr,
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
      className: p(
        "divide-y divide-[var(--abc-border)] rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs",
        a
      ),
      children: t.map((n, s) => {
        const o = "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]", d = !!n.restriction, i = /* @__PURE__ */ c(Ue, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: p(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                n.severity === "critical" && "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400",
                n.severity === "high" && "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
                !["critical", "high"].includes(n.severity) && "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
              ),
              children: /* @__PURE__ */ e(ru, { "aria-hidden": "true", className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ c("span", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-[var(--abc-fg)]", children: n.label }),
            n.restriction ? /* @__PURE__ */ e("span", { className: "block text-xs text-[var(--abc-fg-muted)]", children: n.restriction }) : /* @__PURE__ */ c(
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
          /* @__PURE__ */ c("span", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--abc-fg-secondary)]", children: n.count }),
            !d && (n.href || n.onClick) && /* @__PURE__ */ e(wc, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--abc-fg-muted)]" })
          ] })
        ] });
        return !d && n.href ? /* @__PURE__ */ e("a", { href: n.href, className: o, children: i }, n.kind || s) : !d && n.onClick ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n.onClick,
            className: p(o, "w-full text-left cursor-pointer"),
            children: i
          },
          n.kind || s
        ) : /* @__PURE__ */ e("div", { className: o, children: i }, n.kind || s);
      })
    }
  );
}
const Cs = "color-scheme", rn = "abc:color-scheme-change", ni = "(prefers-color-scheme: dark)";
function Ea() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? "light" : window.matchMedia(ni).matches ? "dark" : "light";
}
function an() {
  if (typeof window > "u") return "system";
  try {
    const t = window.localStorage.getItem(Cs);
    if (t === "light" || t === "dark") return t;
  } catch {
  }
  return "system";
}
function nn(t) {
  if (typeof document > "u") return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  !a && document.head && (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a && (a.content = r);
  const n = t === "system" ? Ea() : t, s = document.documentElement;
  s.setAttribute("data-abc-theme", n), s.setAttribute("data-abc-theme-mode", t), s.classList.toggle("dark", n === "dark"), s.classList.toggle("light", n === "light");
}
function jm() {
  const t = wb(), [r, a] = le.useState(
    () => an()
  ), [n, s] = le.useState(
    () => Ea()
  );
  le.useEffect(() => {
    var v;
    t || nn(an());
    const l = typeof window.matchMedia == "function" ? window.matchMedia(ni) : null, b = () => {
      s(Ea()), !t && an() === "system" && nn("system");
    }, f = () => {
      const m = an();
      a(m), s(Ea()), t || nn(m);
    };
    return (v = l == null ? void 0 : l.addEventListener) == null || v.call(l, "change", b), window.addEventListener("storage", f), window.addEventListener(rn, f), () => {
      var m;
      (m = l == null ? void 0 : l.removeEventListener) == null || m.call(l, "change", b), window.removeEventListener("storage", f), window.removeEventListener(rn, f);
    };
  }, [t]);
  const o = t ? t.theme.mode : r, d = t ? t.resolvedTheme : o === "system" ? n : o, i = le.useCallback(
    (l, b) => {
      try {
        l === "system" ? window.localStorage.removeItem(Cs) : window.localStorage.setItem(Cs, l);
      } catch {
      }
      a(l), t ? t.setThemeMode(l, b) : nn(l), typeof window < "u" && window.dispatchEvent(new Event(rn));
    },
    [t]
  ), u = le.useCallback(
    (l) => {
      const b = l && "clientX" in l && typeof l.clientX == "number" ? { clientX: l.clientX, clientY: l.clientY } : void 0;
      if (t) {
        t.toggleTheme(b), typeof window < "u" && window.dispatchEvent(new Event(rn));
        return;
      }
      const f = Ea(), m = (o === "system" ? f : o) === "dark" ? "light" : "dark";
      i(m === f ? "system" : m);
    },
    [t, o, i]
  );
  return {
    preference: o,
    resolvedScheme: d,
    systemScheme: n,
    setPreference: i,
    toggleScheme: u
  };
}
const Rm = le.forwardRef(
  ({ locale: t = "zh-CN", mode: r = "toggle", dark: a = !1, label: n, className: s, ...o }, d) => {
    const i = t.toLowerCase().startsWith("zh"), { preference: u, resolvedScheme: l, systemScheme: b, setPreference: f, toggleScheme: v } = jm();
    if (r === "segmented") {
      const h = b === "dark" ? i ? "当前深色" : "Currently dark" : i ? "当前浅色" : "Currently light";
      return /* @__PURE__ */ c(
        "div",
        {
          role: "group",
          "data-slot": "theme-switcher",
          "aria-label": n ?? (i ? "颜色主题偏好" : "Color theme preference"),
          className: p(
            "inline-flex flex-wrap items-center gap-1 rounded-lg border p-1 shadow-2xs transition-colors",
            a ? "border-slate-700/90 bg-slate-900/90" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
            s
          ),
          children: [
            /* @__PURE__ */ c(
              xe,
              {
                size: "xs",
                variant: u === "light" ? "default" : "ghost",
                onClick: (g) => f("light", { clientX: g.clientX, clientY: g.clientY }),
                "aria-pressed": u === "light",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(La, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: i ? "浅色" : "Light" })
                ]
              }
            ),
            /* @__PURE__ */ c(
              xe,
              {
                size: "xs",
                variant: u === "dark" ? "default" : "ghost",
                onClick: (g) => f("dark", { clientX: g.clientX, clientY: g.clientY }),
                "aria-pressed": u === "dark",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Da, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: i ? "深色" : "Dark" })
                ]
              }
            ),
            /* @__PURE__ */ c(
              xe,
              {
                size: "xs",
                variant: u === "system" ? "default" : "ghost",
                onClick: (g) => f("system", { clientX: g.clientX, clientY: g.clientY }),
                "aria-pressed": u === "system",
                title: `${i ? "跟随系统" : "System"} (${h})`,
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Ds, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ c("span", { children: [
                    i ? "跟随系统" : "System",
                    /* @__PURE__ */ c("span", { className: "ml-1 opacity-75", children: [
                      "(",
                      h,
                      ")"
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      );
    }
    const m = l === "dark" ? i ? "切换到浅色主题" : "Switch to light theme" : i ? "切换到深色主题" : "Switch to dark theme";
    return /* @__PURE__ */ c(
      "button",
      {
        ref: d,
        type: "button",
        "data-slot": "theme-switcher",
        "data-color-scheme": l,
        "data-color-preference": u,
        onClick: v,
        title: n ?? m,
        "aria-label": n ?? m,
        className: p(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
          a ? "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs hover:bg-[var(--abc-bg-subtle)]",
          s
        ),
        ...o,
        children: [
          l === "dark" ? /* @__PURE__ */ e(La, { className: "h-3.5 w-3.5 text-amber-400", "aria-hidden": "true" }) : /* @__PURE__ */ e(Da, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: m })
        ]
      }
    );
  }
);
Rm.displayName = "ThemeSwitcher";
function oh({
  open: t,
  title: r,
  description: a,
  cancelLabel: n = "取消",
  confirmLabel: s = "确认",
  workingLabel: o = "正在处理…",
  variant: d = "default",
  loading: i = !1,
  closeLabel: u = "关闭",
  className: l,
  onCancel: b,
  onConfirm: f,
  children: v
}) {
  const m = d === "destructive";
  return /* @__PURE__ */ e(
    Xt,
    {
      open: t,
      onClose: b,
      onCancel: b,
      onOpenChange: (h) => !h && b(),
      closeDisabled: i,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ c(
        Rs,
        {
          "data-slot": "confirm-dialog",
          className: p("w-full max-w-md", l),
          closeLabel: u,
          closeDisabled: i,
          children: [
            /* @__PURE__ */ c(zs, { children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2.5", children: [
                m ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e($r, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(la, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Os, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              a && /* @__PURE__ */ e(Fs, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            v && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: v }),
            /* @__PURE__ */ c($s, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                xe,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: i,
                  onClick: b,
                  children: n
                }
              ),
              /* @__PURE__ */ e(
                xe,
                {
                  type: "button",
                  variant: m ? "danger" : "primary",
                  size: "sm",
                  loading: i,
                  onClick: f,
                  children: i ? o : s
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
let At = [];
const Ss = /* @__PURE__ */ new Set();
function Is() {
  Ss.forEach((t) => t());
}
function zm(t) {
  const r = At.findIndex((a) => a.id === t.id);
  if (r >= 0) {
    const a = At[r];
    (a.cascadeMode !== t.cascadeMode || a.widthPx !== t.widthPx) && (At[r] = t, Is());
  } else
    At = [...At, t], Is();
}
function Jo(t) {
  At.some((r) => r.id === t) && (At = At.filter((r) => r.id !== t), Is());
}
const $m = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, Wa = ({
  open: t,
  visible: r,
  onClose: a,
  title: n,
  description: s,
  children: o,
  footer: d,
  size: i = "md",
  motion: u,
  width: l,
  placement: b = "right",
  closeOnClickModal: f = !0,
  resizable: v = !0,
  minWidth: m = 340,
  storageKey: h,
  push: g = !0,
  pushDistance: y = 140,
  cascadeMode: C,
  adjacentOffset: x,
  bodyClassName: I,
  className: A,
  role: B = "dialog"
}) => {
  const L = Nb(C), N = C ?? L, w = mt(), M = mt(), _ = t ?? r ?? !1, S = ve(u), { isMounted: E, isVisible: z } = Fr(_, S === "none" ? 0 : 220), U = ce(a);
  U.current = a;
  const [, R] = F(0), [T, P] = F(!1), [W, j] = F(!1), [K, V] = F(() => {
    if (!h || typeof window > "u") return null;
    try {
      const Ie = Number(window.localStorage.getItem(`abc_drawer_w_${h}`));
      return Number.isFinite(Ie) && Ie >= m ? Ie : null;
    } catch {
      return null;
    }
  });
  me(() => {
    const Ie = () => R((X) => X + 1);
    return Ss.add(Ie), () => {
      Ss.delete(Ie);
    };
  }, []);
  const ne = typeof l == "number" ? l : K ?? (i ? $m[i] : 560) ?? 560;
  me(() => {
    if (_)
      return zm({
        id: w,
        cascadeMode: N,
        widthPx: ne
      }), () => Jo(w);
    Jo(w);
  }, [_, w, N, ne]), me(() => {
    if (!E) return;
    const Ie = (X) => {
      const ie = At[At.length - 1];
      X.key === "Escape" && (!ie || ie.id === w) && (X.stopPropagation(), U.current());
    };
    return document.addEventListener("keydown", Ie), () => document.removeEventListener("keydown", Ie);
  }, [E, w]);
  const [H, te] = F(
    () => typeof window < "u" ? window.innerWidth : 1440
  );
  me(() => {
    if (typeof window > "u") return;
    const Ie = () => te(window.innerWidth);
    return window.addEventListener("resize", Ie), () => window.removeEventListener("resize", Ie);
  }, []);
  const Z = At.findIndex((Ie) => Ie.id === w), re = Z >= 0 ? Math.max(0, At.length - 1 - Z) : 0, ee = Z >= 0 ? Z + 1 : 1, Ne = Z >= 0 ? At.slice(Z + 1) : [], $ = At.some((Ie) => Ie.cascadeMode === "adjacent"), Y = N === "adjacent" || $, Te = Ne.reduce((Ie, X) => Ie + (X.widthPx || 560), 0);
  let Le = ne;
  if (Y && re > 0 && Te > 0) {
    const Ie = Math.max(m, H - Te - 24);
    Le > Ie && (Le = Ie);
  }
  const be = g && re > 0 ? Y ? x ?? Te : re * y : 0, fe = g && re > 0 ? Y ? 1 : Math.max(0.92, 1 - re * 0.025) : 1, Pe = b === "right" ? -1 : 1, Me = (Ie) => {
    Ie.preventDefault(), j(!0);
    const X = (Be) => {
      const Ze = Math.max(m, window.innerWidth - 32), He = b === "right" ? window.innerWidth - Be.clientX : Be.clientX, gt = Math.min(Ze, Math.max(m, He));
      if (P(!1), V(gt), h)
        try {
          window.localStorage.setItem(`abc_drawer_w_${h}`, String(Math.round(gt)));
        } catch {
        }
    }, ie = () => {
      j(!1), window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", ie);
    };
    window.addEventListener("mousemove", X), window.addEventListener("mouseup", ie);
  };
  if (!E || typeof document > "u") return null;
  const We = T ? "100dvw" : K ? `${K}px` : typeof l == "number" ? `${Le}px` : `${Le}px`;
  return ar(
    /* @__PURE__ */ c(
      "div",
      {
        role: B,
        "aria-modal": B === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? M : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, Z) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          Z === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                f && a();
              },
              "data-motion": S,
              className: p(
                "fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto",
                S !== "none" && (z ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ) : null,
          /* @__PURE__ */ c(
            "div",
            {
              "data-motion": S,
              style: {
                width: We,
                transform: S === "none" ? be > 0 ? `translate3d(${Pe * be}px, 0, 0) scale(${fe})` : void 0 : z ? be > 0 ? `translate3d(${Pe * be}px, 0, 0) scale(${fe})` : "translate3d(0, 0, 0)" : b === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: S === "none" || W ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: p(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                Y && Z > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                b === "right" ? "ml-auto border-l" : "mr-auto border-r",
                A
              ),
              children: [
                v && !T && /* @__PURE__ */ c(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: Me,
                    className: p(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      b === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(_n, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                      At.length > 1 && /* @__PURE__ */ c(
                        "span",
                        {
                          title: Y ? `并排抽屉层级: ${ee} 级` : `抽屉栈深度: ${ee} 级`,
                          className: p(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            re === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(pc, { className: "h-2.5 w-2.5" }),
                            "L",
                            ee,
                            Y && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: re === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: M, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
                    v && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": T ? "还原默认宽度" : "全宽展开",
                        onClick: () => P((Ie) => !Ie),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: T ? /* @__PURE__ */ e(Ms, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Es, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "关闭抽屉",
                        onClick: a,
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(ft, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: p("flex-1 overflow-y-auto px-5 py-4 text-xs", I), children: o }),
                d && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: d })
              ]
            }
          )
        ]
      }
    ),
    document.body
  );
};
function Om({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-header",
      className: p("flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5", t),
      ...r
    }
  );
}
function Fm({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "h2",
    {
      "data-slot": "drawer-title",
      className: p("text-lg font-semibold tracking-tight text-[var(--abc-fg)]", t),
      ...r
    }
  );
}
function Wm({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: p("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...r
    }
  );
}
function Hm({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: p("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...r
    }
  );
}
function Km({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-footer",
      className: p(
        "flex flex-wrap items-center justify-between gap-3 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-6 py-4",
        t
      ),
      ...r
    }
  );
}
const Um = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Gm = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Vm = ({
  spinning: t = !0,
  tip: r,
  text: a,
  size: n,
  motion: s,
  fullscreen: o = !1,
  fullScreen: d = !1,
  className: i,
  children: u
}) => {
  const l = r ?? a, b = !!(o || d), f = Se(n, "md"), v = ve(s), m = /* @__PURE__ */ c(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": v,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(rr, { className: p("animate-spin", Um[f]) }),
        l && /* @__PURE__ */ e("span", { className: p("font-medium text-[var(--abc-fg-muted)]", Gm[f]), children: l })
      ]
    }
  );
  return b ? t ? /* @__PURE__ */ e(
    "div",
    {
      "data-motion": v,
      className: p(
        "fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs",
        v !== "none" && "abc-animate-fade-in"
      ),
      children: m
    }
  ) : null : u !== void 0 ? /* @__PURE__ */ c("div", { "data-motion": v, className: p("relative", i), children: [
    u,
    t && /* @__PURE__ */ e(
      "div",
      {
        className: p(
          "absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]",
          v !== "none" && "abc-animate-fade-in"
        ),
        children: m
      }
    )
  ] }) : t ? /* @__PURE__ */ e("div", { "data-motion": v, className: p("flex items-center justify-center py-8", i), children: m }) : null;
}, Ym = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  opacity: s,
  children: o,
  className: d,
  ...i
}) => {
  const { resolvedTheme: u } = pt(), l = ce(null), b = ce(null), f = ce(""), v = ce(null), m = de(() => {
    const h = l.current;
    if (!h) return;
    if (v.current && (v.current.disconnect(), v.current = null), !r || !t || Array.isArray(t) && t.length === 0) {
      b.current && b.current.parentNode === h && h.removeChild(b.current), b.current = null, f.current = "";
      return;
    }
    if (typeof document > "u") return;
    const g = document.createElement("canvas"), y = g.getContext("2d");
    if (!y) return;
    const C = Array.isArray(t) ? t : [t], x = Math.max(window.devicePixelRatio || 1, 1), I = 210 + n[0], A = 90 + n[1];
    g.width = I * x, g.height = A * x;
    let B = "";
    try {
      y.scale(x, x), y.translate(I / 2, A / 2), y.rotate(a * Math.PI / 180), y.font = "500 12px Inter, -apple-system, sans-serif";
      const w = typeof s == "number" && Number.isFinite(s) ? Math.max(0, Math.min(1, s)) : u === "dark" ? 0.065 : 0.055;
      y.fillStyle = u === "dark" ? `rgba(226, 232, 240, ${w})` : `rgba(15, 23, 42, ${w})`, y.textAlign = "center", y.textBaseline = "middle", C.forEach((M, _) => {
        const S = (_ - (C.length - 1) / 2) * 18;
        y.fillText(M, 0, S);
      }), B = g.toDataURL();
    } catch {
      return;
    }
    if (!B) return;
    let L = b.current;
    L || (L = document.createElement("div"), b.current = L), L.getAttribute("data-watermark-overlay") !== "true" && L.setAttribute("data-watermark-overlay", "true");
    const N = [
      "position: absolute",
      "inset: 0",
      "pointer-events: none",
      "z-index: 40",
      `background-image: url(${B})`,
      "background-repeat: repeat",
      `background-size: ${I}px ${A}px`
    ].join(" !important; ") + " !important;";
    if (f.current = N, L.getAttribute("style") !== N && L.setAttribute("style", N), L.parentNode !== h && h.appendChild(L), typeof MutationObserver < "u") {
      const w = new MutationObserver((M) => {
        const _ = l.current, S = b.current;
        if (!_ || !S) return;
        let E = !1;
        for (const z of M)
          if (z.type === "childList") {
            if (Array.from(z.removedNodes).includes(S)) {
              E = !0;
              break;
            }
          } else if (z.type === "attributes" && z.target === S && ((S.getAttribute("style") || "") !== f.current || S.hidden)) {
            E = !0;
            break;
          }
        E && m();
      });
      v.current = w, w.observe(h, { childList: !0, subtree: !1 }), w.observe(L, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
    }
  }, [t, r, n, s, u, a]);
  return me(() => (m(), () => {
    v.current && (v.current.disconnect(), v.current = null);
  }), [m]), /* @__PURE__ */ e("div", { ref: l, className: p("relative", d), ...i, children: o });
}, qm = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(ja, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Nr, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e($r, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Er, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, Xm = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, ch = ({
  tone: t = "info",
  title: r,
  description: a,
  children: n,
  showIcon: s = !0,
  closable: o = !1,
  onClose: d,
  action: i,
  size: u,
  motion: l,
  className: b
}) => {
  const [f, v] = F(!1), m = Se(u, "sm"), h = ve(l);
  if (f) return null;
  const g = qm[t], y = a ?? n;
  return /* @__PURE__ */ c(
    "div",
    {
      role: "alert",
      "data-motion": h,
      className: p(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        Xm[m],
        h !== "none" && "abc-animate-fade-in",
        g.box,
        b
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: g.icon }),
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
              v(!0), d == null || d();
            },
            className: "shrink-0 rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, Zm = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, Jm = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, Qm = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, ef = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  strokeColor: n,
  showInfo: s = !0,
  size: o,
  motion: d,
  className: i
}) => {
  const u = Se(typeof o == "string" ? o : void 0, "sm"), l = ve(d), b = Math.max(0, Math.min(100, Math.round(t))), f = n || Qm[a];
  if (r === "circle") {
    const m = typeof o == "number" ? o : Zm[u], h = Math.max(4, Math.round(m * 0.09)), g = (m - h) / 2, y = 2 * Math.PI * g, C = y - b / 100 * y;
    return /* @__PURE__ */ c(
      "div",
      {
        role: "progressbar",
        "data-motion": l,
        "aria-valuenow": b,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: p("relative inline-flex items-center justify-center", i),
        style: { width: m, height: m },
        children: [
          /* @__PURE__ */ c("svg", { width: m, height: m, className: "-rotate-90", children: [
            /* @__PURE__ */ e(
              "circle",
              {
                cx: m / 2,
                cy: m / 2,
                r: g,
                fill: "none",
                stroke: "var(--abc-bg-subtle)",
                strokeWidth: h
              }
            ),
            /* @__PURE__ */ e(
              "circle",
              {
                cx: m / 2,
                cy: m / 2,
                r: g,
                fill: "none",
                stroke: f,
                strokeWidth: h,
                strokeLinecap: "round",
                strokeDasharray: y,
                strokeDashoffset: C,
                className: "transition-all duration-[var(--abc-motion-slow)]"
              }
            )
          ] }),
          s && /* @__PURE__ */ c("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            b,
            "%"
          ] })
        ]
      }
    );
  }
  const v = typeof o == "number" ? o : Jm[u];
  return /* @__PURE__ */ c(
    "div",
    {
      role: "progressbar",
      "data-motion": l,
      "aria-valuenow": b,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: p("flex w-full items-center gap-2.5", i),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "flex-1 overflow-hidden rounded-full bg-[var(--abc-bg-subtle)]",
            style: { height: v },
            children: /* @__PURE__ */ e(
              "div",
              {
                className: "h-full rounded-full transition-all duration-[var(--abc-motion-slow)]",
                style: { width: `${b}%`, backgroundColor: f }
              }
            )
          }
        ),
        s && /* @__PURE__ */ c("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          b,
          "%"
        ] })
      ]
    }
  );
}, tf = {
  success: {
    icon: /* @__PURE__ */ e(Nr, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(ja, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e($r, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e(Er, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(kn, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(nu, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(au, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, rf = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: d,
  className: i
}) => {
  const u = tf[t], l = Se(o, "md"), b = ve(d);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": b,
      className: p(
        "flex flex-col items-center justify-center text-center",
        {
          xs: "px-4 py-6",
          sm: "px-5 py-8",
          md: "px-6 py-12",
          lg: "px-8 py-16"
        }[l],
        b !== "none" && "abc-animate-fade-in",
        i
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl",
              u.badgeClass
            ),
            children: u.icon
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
class af extends Ge.Component {
  constructor() {
    super(...arguments);
    as(this, "state", { error: null });
    as(this, "handleReset", () => {
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
      rf,
      {
        status: "500",
        title: `${n}加载或渲染发生异常`,
        subTitle: a.message || "捕获到未知运行时渲染错误，其他工作区页签不受影响。",
        extra: /* @__PURE__ */ e(
          xe,
          {
            variant: "primary",
            icon: /* @__PURE__ */ e(da, { className: "h-3.5 w-3.5" }),
            onClick: this.handleReset,
            children: "重新加载此模块"
          }
        )
      }
    );
  }
}
const ih = af;
function lh({
  title: t,
  secret: r,
  open: a,
  secretValue: n,
  description: s = "此密钥仅显示一次。请在关闭前复制并安全存储。",
  secretLabel: o,
  metadata: d = [],
  closeLabel: i = "关闭",
  acknowledgeLabel: u = "我已妥善保存此密钥",
  copyLabel: l = "复制密钥",
  copiedLabel: b = "已复制",
  copyErrorMessage: f = "剪贴板写入失败，请手动选择复制。",
  className: v,
  onClose: m
}) {
  const h = r ?? n ?? null, g = a !== void 0 ? a : !!h, [y, C] = le.useState(!1), [x, I] = le.useState(!1), [A, B] = le.useState(null);
  if (le.useEffect(() => {
    g || (C(!1), I(!1), B(null));
  }, [g]), !g || !h)
    return null;
  const L = async () => {
    B(null), await Mn(h) ? (C(!0), setTimeout(() => C(!1), 2e3)) : B(f);
  };
  return /* @__PURE__ */ e(
    Xt,
    {
      open: g,
      onClose: m,
      onCancel: m,
      onOpenChange: (N) => !N && m(),
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ c(
        Rs,
        {
          "data-slot": "one-time-secret-dialog",
          className: p("w-full max-w-lg", v),
          closeLabel: i,
          children: [
            /* @__PURE__ */ c(zs, { children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300", children: /* @__PURE__ */ e(hc, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Os, { className: "text-base font-semibold leading-tight", children: t })
              ] }),
              /* @__PURE__ */ e(Fs, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: s })
            ] }),
            /* @__PURE__ */ c("div", { className: "space-y-3 py-2 text-xs", children: [
              /* @__PURE__ */ e(
                Wr,
                {
                  variant: "warning",
                  title: "请立即备份",
                  message: "关闭此窗口后将无法再次检索该明文内容，丢失将需要重新生成。"
                }
              ),
              o && /* @__PURE__ */ e("span", { className: "block font-medium text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ c("div", { className: "relative rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3 pr-12", children: [
                /* @__PURE__ */ e("code", { className: "block select-all break-all font-mono text-xs text-[var(--abc-fg)]", children: h }),
                /* @__PURE__ */ e(
                  xe,
                  {
                    type: "button",
                    variant: "outline",
                    size: "xs",
                    onClick: L,
                    className: "absolute right-2 top-2 h-7 w-7 p-0",
                    title: y ? b : l,
                    "aria-label": y ? b : l,
                    children: y ? /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(Or, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                  }
                )
              ] }),
              A && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: A }),
              d.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
                ai,
                {
                  items: d.map((N) => ({
                    label: N.label,
                    value: N.value,
                    mono: !0
                  })),
                  variant: "compact",
                  columns: 1
                }
              ) }),
              /* @__PURE__ */ c("label", { className: "flex cursor-pointer items-start gap-2 pt-1 select-none", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: x,
                    onChange: (N) => I(N.target.checked),
                    className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: u })
              ] })
            ] }),
            /* @__PURE__ */ e($s, { className: "pt-2", children: /* @__PURE__ */ e(
              xe,
              {
                type: "button",
                variant: "primary",
                size: "sm",
                disabled: !x,
                onClick: m,
                children: i
              }
            ) })
          ]
        }
      )
    }
  );
}
const nf = {
  default: "xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]",
  balanced: "xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]",
  "wide-master": "xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]"
};
function dh({
  children: t,
  inspector: r,
  ratio: a = "default",
  stickyInspector: n = !0,
  className: s,
  ...o
}) {
  const d = le.Children.toArray(t), i = r !== void 0 ? t : d[0], u = r !== void 0 ? r : d.slice(1);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: p("grid items-start gap-6", nf[a], s),
      ...o,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: i }),
        /* @__PURE__ */ e("div", { className: p("min-w-0", n && "xl:sticky xl:top-20"), children: u })
      ]
    }
  );
}
const sf = le.forwardRef(
  ({
    title: t,
    subtitle: r,
    badge: a,
    headerActions: n,
    showClear: s = !1,
    onClear: o,
    clearLabel: d = "清除选中",
    loading: i = !1,
    loadingText: u = "正在加载详情…",
    error: l,
    isEmpty: b = !1,
    hasSelection: f,
    emptyIcon: v,
    emptyMessage: m = "请在左侧选择一项以检视详细信息",
    emptyDescription: h,
    footer: g,
    children: y,
    className: C,
    ...x
  }, I) => {
    const A = f !== void 0 ? !f : b, B = !!(t || r || a || n);
    return /* @__PURE__ */ c(
      "aside",
      {
        ref: I,
        "data-slot": "inspector-panel",
        className: p(
          "flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all",
          C
        ),
        ...x,
        children: [
          B && /* @__PURE__ */ c("header", { className: "mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5", children: [
            /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
                typeof t == "string" ? /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)] tracking-tight", children: t }) : t,
                a
              ] }),
              r && /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1.5", children: [
              n,
              s && o && /* @__PURE__ */ e(
                xe,
                {
                  variant: "ghost",
                  size: "xs",
                  onClick: o,
                  "aria-label": d,
                  title: d,
                  className: "h-7 w-7 p-0 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                  children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          i ? /* @__PURE__ */ c("div", { className: "flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e(rr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: u })
          ] }) : l ? /* @__PURE__ */ e("div", { className: "my-2", children: l }) : A ? /* @__PURE__ */ c("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
            v ?? /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Ra, { className: "h-5 w-5 stroke-[1.5]", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg)]", children: m }),
            h && /* @__PURE__ */ e("p", { className: "max-w-[280px] text-[11px] text-[var(--abc-fg-muted)]", children: h })
          ] }) : /* @__PURE__ */ e("div", { className: "flex-1 space-y-4", children: y }),
          g && /* @__PURE__ */ e("footer", { className: "mt-4 border-t border-[var(--abc-border)] pt-3.5", children: g })
        ]
      }
    );
  }
);
sf.displayName = "InspectorPanel";
function Dn(t, r) {
  if (!(!t || r == null || r === ""))
    return Array.isArray(r) ? r.reduce((a, n) => a == null ? void 0 : a[n], t) : typeof r == "string" && r.includes(".") ? r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t) : t[r];
}
function of(t, r = 150) {
  if (typeof t == "number" && Number.isFinite(t)) return t;
  if (typeof t == "string") {
    const a = parseFloat(t);
    if (Number.isFinite(a) && !t.trim().endsWith("%")) return a;
  }
  return r;
}
const us = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
}, Qo = {
  green: "success",
  emerald: "success",
  red: "danger",
  rose: "danger",
  yellow: "warning",
  amber: "warning",
  orange: "warning",
  blue: "info",
  cyan: "info",
  purple: "info",
  gray: "neutral",
  slate: "neutral"
};
function cf({
  value: t,
  record: r,
  config: a
}) {
  const { toast: n } = pt(), s = a.checkedValue !== void 0 ? a.checkedValue : !0, o = (f) => f === s || f === 1 || f === "1" || f === !0, [d, i] = F(() => o(t)), [u, l] = F(!1);
  me(() => {
    i(o(t));
  }, [t, s]);
  const b = async (f) => {
    if (!a.onChange || u) return;
    const v = d;
    i(f), l(!0);
    try {
      await a.onChange(f, r);
    } catch (m) {
      i(v), n.error((m == null ? void 0 : m.message) || "更新状态失败");
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5", onClick: (f) => f.stopPropagation(), children: [
    /* @__PURE__ */ e(
      Gt,
      {
        size: "sm",
        checked: d,
        loading: u,
        disabled: !a.onChange,
        onChange: b
      }
    ),
    (a.checkedChildren || a.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: d ? a.checkedChildren : a.unCheckedChildren })
  ] });
}
function lf(t, r, a, n) {
  const s = typeof a.type == "object" && a.type !== null ? a.type : a.type ? { type: a.type } : a.valueType ? { type: a.valueType } : void 0;
  if ((s == null ? void 0 : s.type) === "switch" && (s.onChange || s.checkedValue !== void 0))
    return /* @__PURE__ */ e(cf, { value: t, record: r, config: s });
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const o = (s == null ? void 0 : s.options) ?? a.options;
  if (o && o.length > 0) {
    const u = o.find((l) => String(l.value) === String(t));
    if (u) {
      const l = !u.status && u.color ? Qo[u.color] : void 0, b = u.color && !Qo[u.color] ? u.color : void 0;
      return /* @__PURE__ */ e(Mr, { status: u.status ?? l, color: b, dot: !0, children: u.label });
    }
  }
  const d = s == null ? void 0 : s.type;
  let i;
  switch (d) {
    case "money": {
      const u = Number(t);
      i = Number.isNaN(u) ? String(t) : /* @__PURE__ */ c("span", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: [
        "¥",
        u.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      ] });
      break;
    }
    case "number": {
      const u = Number(t);
      i = Number.isNaN(u) ? String(t) : /* @__PURE__ */ e("span", { className: "font-mono tabular-nums", children: u.toLocaleString("zh-CN") });
      break;
    }
    case "date": {
      const u = ze(t), l = (s == null ? void 0 : s.format) || "YYYY-MM-DD";
      i = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: u.isValid() ? u.format(l) : String(t) });
      break;
    }
    case "datetime": {
      const u = ze(t), l = (s == null ? void 0 : s.format) || "YYYY-MM-DD HH:mm:ss";
      i = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: u.isValid() ? u.format(l) : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(
        Fa,
        {
          src: String(t),
          width: (s == null ? void 0 : s.imageWidth) ?? 32,
          height: (s == null ? void 0 : s.imageHeight) ?? 32
        }
      );
    case "progress":
      return /* @__PURE__ */ e(
        ef,
        {
          percent: Number(t) || 0,
          strokeColor: s == null ? void 0 : s.progressColor,
          className: "min-w-[92px]"
        }
      );
    case "code":
      i = /* @__PURE__ */ e("code", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg)]", children: String(t) });
      break;
    case "copy":
      return /* @__PURE__ */ e(Ko, { text: String(t) });
    case "link":
      return /* @__PURE__ */ e(
        "a",
        {
          href: String(t),
          target: (s == null ? void 0 : s.target) ?? "_blank",
          rel: "noreferrer",
          onClick: (u) => u.stopPropagation(),
          className: "text-[var(--abc-primary)] hover:underline",
          children: String(t)
        }
      );
    case "switch":
      return /* @__PURE__ */ e(Mr, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
    case "badge":
      return /* @__PURE__ */ e(Mr, { dot: !0, children: String(t) });
    default:
      i = String(t);
  }
  if (a.linkToView && n) {
    const u = typeof a.linkToView == "string" ? a.linkToView : void 0;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: (l) => {
          l.stopPropagation(), n(r, u);
        },
        className: "max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
        children: i
      }
    );
  }
  return a.copyable ? /* @__PURE__ */ e(Ko, { text: String(t), displayText: i }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: i }) : i;
}
function ec({
  columns: t,
  data: r,
  dataSource: a,
  rowKey: n = "id",
  loading: s = !1,
  density: o = "default",
  selectedKeys: d,
  onSelectionChange: i,
  rowSelection: u,
  sortState: l,
  onSortChange: b,
  headerFilterMode: f = !1,
  headerFilters: v = {},
  onHeaderFilterChange: m,
  headerFilterRender: h,
  activeFilterKeys: g,
  activeFilterLabels: y,
  filterHighlightColor: C,
  columnWidths: x = {},
  onColumnResize: I,
  resizable: A,
  motion: B,
  columnFixed: L = {},
  onColumnPin: N,
  onColumnHide: w,
  onResetColumns: M,
  onColumnReorder: _,
  expandable: S,
  treeData: E = !1,
  rowDraggable: z,
  draggable: U,
  onRowDragEnd: R,
  onDragEnd: T,
  onRowView: P,
  activeRowKey: W,
  onRowClick: j,
  onRow: K,
  onEmptyReset: V,
  maxHeight: ne,
  ariaLabel: H = "数据表格",
  emptyText: te = "暂无符合条件的数据",
  className: Z
}) {
  const re = r ?? a ?? [], ee = !!(z ?? U), Ne = oe(() => {
    if (R) return R;
    if (T)
      return (O, se) => T(String(O), String(se));
  }, [R, T]), $ = ve(B), Y = ce(null), Te = ce(null), [Le, be] = F(null), [fe, Pe] = F(null), Me = ce(null), We = ce(!1), Ie = ce(null), [X, ie] = F({}), [Be, Ze] = F(0), [He, gt] = F(null), Ft = oe(
    () => ({ ...X, ...x }),
    [X, x]
  ), jt = A ?? !!I, Kr = (O, se) => {
    ie((ue) => ({ ...ue, [O]: se })), I == null || I(O, se);
  };
  fs(() => {
    const O = Y.current;
    if (!O) return;
    const se = () => {
      O.clientWidth > 0 && Ze(O.clientWidth);
    };
    if (se(), typeof ResizeObserver > "u") return;
    const ue = new ResizeObserver((ye) => {
      var $e, De;
      const Ce = (De = ($e = ye[0]) == null ? void 0 : $e.contentRect) == null ? void 0 : De.width;
      typeof Ce == "number" && Ce > 0 ? Ze(Math.floor(Ce)) : se();
    });
    return ue.observe(O), () => ue.disconnect();
  }, []);
  const Ur = (O, se) => typeof n == "function" ? n(O) : (O == null ? void 0 : O[n]) ?? se, kt = (O) => O.key in L ? L[O.key] ?? void 0 : O.fixed, at = oe(() => {
    const O = fe && fe.length > 0 ? [...t].sort((Ce, $e) => {
      const De = fe.indexOf(Ce.key), Re = fe.indexOf($e.key);
      return De === -1 && Re === -1 ? 0 : De === -1 ? 1 : Re === -1 ? -1 : De - Re;
    }) : t, se = [], ue = [], ye = [];
    for (const Ce of O) {
      const $e = kt(Ce);
      $e === "left" ? se.push(Ce) : $e === "right" ? ye.push(Ce) : ue.push(Ce);
    }
    return [...se, ...ue, ...ye];
  }, [t, L, fe]), qe = d ?? (u == null ? void 0 : u.selectedRowKeys), ht = i ?? (u == null ? void 0 : u.onChange), Xe = Array.isArray(qe) && typeof ht == "function", dt = !!(S != null && S.expandedRowRender), wt = (S == null ? void 0 : S.childrenColumnName) || "children", nt = (S == null ? void 0 : S.indentSize) ?? 18, st = (O) => {
    const se = [], ue = (ye) => {
      ye.forEach((Ce, $e) => {
        const De = Ur(Ce, $e), Re = Ce == null ? void 0 : Ce[wt], Ve = Array.isArray(Re) && Re.length > 0;
        (Ve || S != null && S.expandedRowRender && (!S.rowExpandable || S.rowExpandable(Ce))) && se.push(De), Ve && ue(Re);
      });
    };
    return ue(O), Array.from(new Set(se));
  }, Wt = oe(() => S != null && S.defaultExpandAllRows ? st(re) : [], []), [Zt, Lt] = tr({
    value: S == null ? void 0 : S.expandedRowKeys,
    defaultValue: Wt,
    onChange: S == null ? void 0 : S.onExpandedRowsChange
  }), ct = ce(Wt.length > 0);
  me(() => {
    if (!(S != null && S.defaultExpandAllRows) || (S == null ? void 0 : S.expandedRowKeys) !== void 0 || ct.current || re.length === 0)
      return;
    const O = st(re);
    O.length > 0 && (ct.current = !0, Lt(O));
  }, [S == null ? void 0 : S.defaultExpandAllRows, S == null ? void 0 : S.expandedRowKeys, re, wt]);
  const kr = (O, se) => {
    var ye;
    const ue = Zt.includes(O);
    Lt(
      ue ? Zt.filter((Ce) => Ce !== O) : [...Zt, O]
    ), se && ((ye = S == null ? void 0 : S.onExpand) == null || ye.call(S, !ue, se));
  }, Jt = oe(() => {
    const O = [], se = (ue, ye) => {
      ue.forEach((Ce, $e) => {
        var lt;
        const De = Ur(Ce, $e), Re = Array.isArray(Ce == null ? void 0 : Ce[wt]) ? Ce[wt] : [], Ve = Re.length > 0 || !!(E && ((lt = S == null ? void 0 : S.rowExpandable) != null && lt.call(S, Ce)));
        O.push({ record: Ce, key: De, rowIdx: $e, depth: ye, hasTreeChildren: Ve }), Re.length > 0 && Zt.includes(De) && se(Re, ye + 1);
      });
    };
    return se(re, 0), O;
  }, [re, Zt, n, wt, E, S == null ? void 0 : S.rowExpandable]), Rt = oe(() => {
    const O = (Xe ? 40 : 0) + (dt ? 36 : 0), se = {};
    let ue = 0;
    for (const Re of at) {
      const Ve = Ft[Re.key] ?? of(Re.width, 150);
      se[Re.key] = Ve, ue += Ve;
    }
    const ye = { ...se }, Ce = Be, $e = Ce > O + ue ? Ce - (O + ue) : 0;
    if ($e > 0) {
      const Re = (Oe) => Oe.key === "__abc_actions__" || Oe.key in Ft || !!kt(Oe), Ve = at.filter((Oe) => !Re(Oe)), lt = at.filter((Oe) => Oe.key !== "__abc_actions__"), he = Ve.length > 0 ? Ve : lt;
      if (he.length > 0) {
        const Oe = Math.floor($e / he.length);
        let Ae = $e - Oe * he.length;
        for (const pe of he) {
          const Fe = Oe + (Ae > 0 ? 1 : 0);
          Ae > 0 && (Ae -= 1), ye[pe.key] = se[pe.key] + Fe;
        }
      }
    }
    const De = O + at.reduce((Re, Ve) => Re + (ye[Ve.key] ?? 150), 0);
    return {
      resolvedWidths: ye,
      resolvedTableWidth: Ce > 0 ? Math.max(Ce, De) : void 0
    };
  }, [at, Ft, L, Be, Xe, dt]), et = oe(() => {
    const O = {}, se = {};
    let ue = "", ye = "", Ce = (Xe ? 40 : 0) + (dt ? 36 : 0);
    for (const De of at)
      kt(De) === "left" && (O[De.key] = Ce, Ce += Rt.resolvedWidths[De.key] ?? 150, ue = De.key);
    let $e = 0;
    for (let De = at.length - 1; De >= 0; De--) {
      const Re = at[De];
      kt(Re) === "right" && (se[Re.key] = $e, $e += Rt.resolvedWidths[Re.key] ?? 150, ye = Re.key);
    }
    return {
      leftOffsets: O,
      rightOffsets: se,
      lastLeftKey: ue,
      firstRightKey: ye,
      hasAnyLeftFixed: !!ue
    };
  }, [at, Rt, L, Xe, dt]), G = oe(
    () => Jt.filter(
      (O) => {
        var se, ue;
        return !((ue = (se = u == null ? void 0 : u.getCheckboxProps) == null ? void 0 : se.call(u, O.record)) != null && ue.disabled);
      }
    ),
    [Jt, u]
  ), ae = oe(
    () => G.map((O) => O.key),
    [G]
  ), Ee = Xe && ae.length > 0 && ae.every((O) => qe.includes(O)), tt = Xe && !Ee && ae.some((O) => qe.includes(O)), Ye = (O) => {
    if (!Xe) return;
    if (tt ? !0 : O) {
      const ue = Array.from(/* @__PURE__ */ new Set([...qe, ...ae]));
      ht(
        ue,
        Jt.filter((ye) => ue.includes(ye.key)).map((ye) => ye.record)
      );
    } else {
      const ue = qe.filter((ye) => !ae.includes(ye));
      ht(ue, []);
    }
  }, Ht = (O) => {
    if (!Xe) return;
    const ue = qe.includes(O) ? qe.filter((ye) => ye !== O) : [...qe, O];
    ht(
      ue,
      Jt.filter((ye) => ue.includes(ye.key)).map((ye) => ye.record)
    );
  }, mr = (O, se, ue = "right") => {
    if (!jt) return;
    O.preventDefault(), O.stopPropagation();
    const ye = O.clientX, Ce = O.currentTarget.parentElement, $e = Ft[se.key] ?? (typeof se.width == "number" ? se.width : void 0) ?? Rt.resolvedWidths[se.key] ?? (Ce == null ? void 0 : Ce.offsetWidth) ?? 140, De = se.key === "__abc_actions__" ? 80 : 72, Re = typeof document < "u" ? document.body.style.cursor : "", Ve = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const lt = (Oe) => {
      const Ae = Oe.clientX - ye, pe = ue === "left" ? Math.max(De, Math.round($e - Ae)) : Math.max(De, Math.round($e + Ae));
      Kr(se.key, pe);
    }, he = () => {
      typeof document < "u" && (document.body.style.cursor = Re, document.body.style.userSelect = Ve), window.removeEventListener("mousemove", lt), window.removeEventListener("mouseup", he);
    };
    window.addEventListener("mousemove", lt), window.addEventListener("mouseup", he);
  };
  me(() => {
    if (!Le) return;
    const O = (se) => {
      if (se.key === "Escape") {
        const ue = Me.current;
        be(null), Pe(null), Me.current = null, Ie.current = null, We.current = !1, ue && _ && _(ue);
      }
    };
    return document.addEventListener("keydown", O, !0), () => document.removeEventListener("keydown", O, !0);
  }, [Le, _]);
  const _t = at.map((O) => O.key).join("|");
  fs(() => {
    const O = Ie.current;
    if (!O) return;
    Ie.current = null;
    const se = Y.current;
    if (!se || $ === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ye = $ === "subtle" ? 140 : 220, Ce = "cubic-bezier(0.22, 1, 0.36, 1)";
    se.querySelectorAll("[data-col-key]").forEach(($e) => {
      const De = $e.dataset.colKey;
      if (!De) return;
      const Re = O.get(De);
      if (Re === void 0) return;
      const Ve = $e.getBoundingClientRect().left, lt = Re - Ve;
      if (Math.abs(lt) <= 1) return;
      typeof $e.animate == "function" && $e.animate([{ translate: `${lt}px 0` }, { translate: "0 0" }], {
        duration: ye,
        easing: Ce
      });
      const he = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(De) : De, Oe = se.querySelectorAll(`[data-col-cell="${he}"]`), Ae = Math.min(Oe.length, 20);
      for (let pe = 0; pe < Ae; pe++) {
        const Fe = Oe[pe];
        typeof Fe.animate == "function" && Fe.animate([{ translate: `${lt}px 0` }, { translate: "0 0" }], {
          duration: ye,
          easing: Ce
        });
      }
    });
  }, [_t, $]);
  const fr = (O) => !!(O.sortable || O.sorter), Gr = (O) => {
    if (!fr(O) || !b) return;
    const se = (l == null ? void 0 : l.key) === O.key ? l.direction : null, ue = se === null ? "asc" : se === "asc" ? "desc" : null;
    b(O.key, ue);
  };
  me(() => {
    if (!He) return;
    const O = (ue) => {
      var ye;
      ue && ue.type === "mousedown" && ((ye = Te.current) != null && ye.contains(ue.target)) || gt(null);
    }, se = (ue) => {
      ue.key === "Escape" && gt(null);
    };
    return document.addEventListener("mousedown", O), document.addEventListener("keydown", se, !0), window.addEventListener("scroll", O, !0), () => {
      document.removeEventListener("mousedown", O), document.removeEventListener("keydown", se, !0), window.removeEventListener("scroll", O, !0);
    };
  }, [He]);
  const Vr = (O, se) => {
    if (se.key === "__abc_actions__" || !!!(fr(se) && b || N || w || M)) return;
    O.preventDefault();
    const ye = typeof window < "u" ? window.innerWidth : 1024, Ce = typeof window < "u" ? window.innerHeight : 768;
    gt({
      col: se,
      x: Math.max(8, Math.min(O.clientX, ye - 176 - 8)),
      y: Math.max(8, Math.min(O.clientY, Ce - 220 - 8))
    });
  }, Lr = at.length + (Xe ? 1 : 0) + (dt ? 1 : 0), Dr = He ? Tn(Y.current) : null;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: Y,
      tabIndex: 0,
      role: "region",
      "aria-label": H,
      "data-motion": $,
      style: ne !== void 0 ? { maxHeight: typeof ne == "number" ? `${ne}px` : ne } : void 0,
      className: p(
        "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        Z
      ),
      children: [
        /* @__PURE__ */ c(
          "table",
          {
            style: {
              width: Rt.resolvedTableWidth ? `${Rt.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ c("colgroup", { children: [
                Xe && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                dt && /* @__PURE__ */ e("col", { style: { width: "36px" } }),
                at.map((O) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": O.key,
                    style: { width: `${Rt.resolvedWidths[O.key]}px` }
                  },
                  O.key
                ))
              ] }),
              /* @__PURE__ */ c("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
                /* @__PURE__ */ c("tr", { children: [
                  Xe && /* @__PURE__ */ e(
                    "th",
                    {
                      style: et.hasAnyLeftFixed ? { left: 0 } : void 0,
                      className: p(
                        "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-3 text-center",
                        et.hasAnyLeftFixed && "sticky z-20"
                      ),
                      children: /* @__PURE__ */ e(
                        Pa,
                        {
                          checked: Ee,
                          indeterminate: tt,
                          onChange: Ye
                        }
                      )
                    }
                  ),
                  dt && /* @__PURE__ */ e(
                    "th",
                    {
                      style: et.hasAnyLeftFixed ? { left: Xe ? 40 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: p(
                        "w-9 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        et.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  at.map((O) => {
                    const se = Rt.resolvedWidths[O.key], ue = kt(O), ye = fr(O), Ce = (l == null ? void 0 : l.key) === O.key ? l.direction : null, $e = Le === O.key, De = !!(g != null && g.includes(O.key)), Re = y == null ? void 0 : y[O.key], Ve = {
                      width: se ? `${se}px` : void 0,
                      ...ue === "left" ? { left: `${et.leftOffsets[O.key] ?? 0}px` } : {},
                      ...ue === "right" ? { right: `${et.rightOffsets[O.key] ?? 0}px` } : {},
                      ...De ? {
                        backgroundColor: C || "var(--abc-primary)",
                        color: "#ffffff"
                      } : {}
                    }, lt = (he) => {
                      if (!Le || !_) return;
                      const Oe = fe && fe.length > 0 ? fe : at.filter((ke) => ke.key !== "__abc_actions__").map((ke) => ke.key), Ae = Oe.indexOf(Le), pe = Oe.indexOf(he);
                      if (Ae < 0 || pe < 0 || Ae === pe) return;
                      if (Y.current) {
                        const ke = /* @__PURE__ */ new Map();
                        Y.current.querySelectorAll("[data-col-key]").forEach((Ke) => {
                          const zt = Ke.dataset.colKey;
                          zt && ke.set(zt, Ke.getBoundingClientRect().left);
                        }), Ie.current = ke;
                      }
                      const Fe = [...Oe], [Je] = Fe.splice(Ae, 1);
                      Fe.splice(pe, 0, Je), We.current = !0, Pe(Fe), _(Fe);
                    };
                    return /* @__PURE__ */ c(
                      "th",
                      {
                        "data-col-key": O.key,
                        "data-dragging": $e ? "true" : void 0,
                        draggable: !!(_ && !ue && O.key !== "__abc_actions__"),
                        onContextMenu: (he) => Vr(he, O),
                        onDragStart: (he) => {
                          const Oe = at.filter((Ae) => Ae.key !== "__abc_actions__").map((Ae) => Ae.key);
                          Me.current = Oe, We.current = !1, be(O.key), Pe(Oe), he.dataTransfer && (he.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (he) => {
                          if (!Le || Le === O.key || ue || O.key === "__abc_actions__" || !_)
                            return;
                          he.preventDefault();
                          const Oe = fe && fe.length > 0 ? fe : at.filter((Je) => Je.key !== "__abc_actions__").map((Je) => Je.key), Ae = Oe.indexOf(Le), pe = Oe.indexOf(O.key);
                          if (Ae < 0 || pe < 0 || Ae === pe) return;
                          const Fe = he.currentTarget.getBoundingClientRect();
                          Fe.width > 0 && (Ae < pe && he.clientX < Fe.left + Fe.width * 0.35 || Ae > pe && he.clientX > Fe.left + Fe.width * 0.65) || lt(O.key);
                        },
                        onDrop: () => {
                          Le && Le !== O.key && !We.current && !ue && O.key !== "__abc_actions__" && lt(O.key), be(null), Pe(null), Me.current = null, We.current = !1;
                        },
                        onDragEnd: () => {
                          be(null), Pe(null), Me.current = null, We.current = !1;
                        },
                        style: Ve,
                        className: p(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          us[o],
                          O.align === "center" && "text-center",
                          O.align === "right" && "text-right",
                          ue === "left" && "sticky z-20",
                          ue === "right" && "sticky z-20",
                          $e && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
                          O.key === et.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.12)]",
                          O.key === et.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.12)]"
                        ),
                        children: [
                          /* @__PURE__ */ c(
                            "div",
                            {
                              className: p(
                                "inline-flex items-center gap-1",
                                O.align === "right" && "justify-end",
                                O.align === "center" && "justify-center"
                              ),
                              children: [
                                /* @__PURE__ */ c(
                                  "span",
                                  {
                                    className: p(
                                      "inline-flex items-center gap-1",
                                      ye && (De ? "cursor-pointer opacity-95 hover:opacity-100" : "cursor-pointer hover:text-[var(--abc-primary)]")
                                    ),
                                    onClick: () => Gr(O),
                                    children: [
                                      _ && !ue && O.key !== "__abc_actions__" && /* @__PURE__ */ e(_n, { className: "h-3 w-3 cursor-grab text-[var(--abc-fg-placeholder)] opacity-0 transition-opacity group-hover:opacity-100" }),
                                      /* @__PURE__ */ e("span", { title: Re ? O.title : void 0, children: Re || O.title }),
                                      O.tooltip && /* @__PURE__ */ e(Et, { content: O.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (he) => he.stopPropagation(),
                                          className: "inline-flex text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                                          children: /* @__PURE__ */ e(la, { className: "h-3 w-3" })
                                        }
                                      ) }),
                                      ye && /* @__PURE__ */ e(
                                        "span",
                                        {
                                          className: p(
                                            "inline-flex",
                                            De ? "text-white" : "text-[var(--abc-fg-muted)]"
                                          ),
                                          children: Ce === "asc" ? /* @__PURE__ */ e(
                                            vs,
                                            {
                                              className: p(
                                                "h-3 w-3",
                                                De ? "text-white" : "text-[var(--abc-primary)]"
                                              )
                                            }
                                          ) : Ce === "desc" ? /* @__PURE__ */ e(
                                            gs,
                                            {
                                              className: p(
                                                "h-3 w-3",
                                                De ? "text-white" : "text-[var(--abc-primary)]"
                                              )
                                            }
                                          ) : /* @__PURE__ */ e(Lo, { className: "h-3 w-3 opacity-50" })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                h && O.filterable && /* @__PURE__ */ e(
                                  "span",
                                  {
                                    onClick: (he) => he.stopPropagation(),
                                    className: "inline-flex items-center",
                                    children: h(O)
                                  }
                                )
                              ]
                            }
                          ),
                          jt && (ue === "right" ? /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${O.title} 列宽`,
                              onMouseDown: (he) => mr(he, O, "left"),
                              className: "absolute top-0 bottom-0 left-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ) : /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${O.title} 列宽`,
                              onMouseDown: (he) => mr(he, O, "right"),
                              className: "absolute top-0 right-0 bottom-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ))
                        ]
                      },
                      O.key
                    );
                  })
                ] }),
                f && /* @__PURE__ */ c("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  Xe && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-3 py-1.5" }),
                  dt && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  at.map((O) => {
                    const se = kt(O);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...se === "left" ? { left: `${et.leftOffsets[O.key] ?? 0}px` } : {},
                          ...se === "right" ? { right: `${et.rightOffsets[O.key] ?? 0}px` } : {}
                        },
                        className: p(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          se === "left" && "sticky z-20",
                          se === "right" && "sticky z-20"
                        ),
                        children: O.filterable ? O.filterType === "select" && O.filterOptions ? /* @__PURE__ */ e(
                          Ot,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: "全部",
                            options: O.filterOptions,
                            value: v[O.key] ?? "",
                            onChange: (ue) => m == null ? void 0 : m(O.key, ue)
                          }
                        ) : /* @__PURE__ */ e(
                          Qe,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: `筛选${O.title}`,
                            value: v[O.key] ?? "",
                            onChange: (ue) => m == null ? void 0 : m(O.key, ue.target.value)
                          }
                        ) : null
                      },
                      `${O.key}_filter`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e("tbody", { children: s ? Array.from({ length: 5 }).map((O, se) => /* @__PURE__ */ c("tr", { children: [
                Xe && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-3 py-3 text-center", children: /* @__PURE__ */ e(yt, { width: 16, height: 16 }) }),
                dt && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                at.map((ue) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: p("border-b border-[var(--abc-border)]", us[o]),
                    children: /* @__PURE__ */ e(yt, { variant: "text", className: "w-4/5" })
                  },
                  ue.key
                ))
              ] }, `sk_${se}`)) : Jt.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: Lr, children: /* @__PURE__ */ e(Pb, { title: te, onReset: V }) }) }) : Jt.map(({ record: O, key: se, rowIdx: ue, depth: ye, hasTreeChildren: Ce }) => {
                var Oe, Ae;
                const $e = !!(Xe && qe.includes(se)), De = !!((Ae = (Oe = u == null ? void 0 : u.getCheckboxProps) == null ? void 0 : Oe.call(u, O)) != null && Ae.disabled), Re = W != null && String(W) === String(se), Ve = Zt.includes(se), lt = dt && (!(S != null && S.rowExpandable) || S.rowExpandable(O)), he = (K == null ? void 0 : K(O, ue)) ?? {};
                return /* @__PURE__ */ c(Ge.Fragment, { children: [
                  /* @__PURE__ */ c(
                    "tr",
                    {
                      ...he,
                      draggable: ee || he.draggable,
                      onDragStart: (pe) => {
                        var Fe;
                        (Fe = he.onDragStart) == null || Fe.call(he, pe), ee && pe.dataTransfer && (pe.dataTransfer.setData("text/plain", String(se)), pe.dataTransfer.effectAllowed = "move");
                      },
                      onDragOver: (pe) => {
                        var Fe;
                        (Fe = he.onDragOver) == null || Fe.call(he, pe), ee && pe.preventDefault();
                      },
                      onDrop: (pe) => {
                        var Je, ke;
                        if ((Je = he.onDrop) == null || Je.call(he, pe), !ee || !Ne) return;
                        pe.preventDefault();
                        const Fe = (ke = pe.dataTransfer) == null ? void 0 : ke.getData("text/plain");
                        Fe && Fe !== String(se) && Ne(Fe, se);
                      },
                      "data-state": Re || $e ? "selected" : void 0,
                      tabIndex: j ? 0 : he.tabIndex,
                      onClick: (pe) => {
                        var Je;
                        if ((Je = he.onClick) == null || Je.call(he, pe), !j) return;
                        const Fe = pe.target;
                        Fe && Fe.closest(
                          'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                        ) || j(O, pe);
                      },
                      onKeyDown: (pe) => {
                        var Fe;
                        (Fe = he.onKeyDown) == null || Fe.call(he, pe), j && pe.target === pe.currentTarget && (pe.key === "Enter" || pe.key === " ") && (pe.preventDefault(), j(O, pe));
                      },
                      className: p(
                        "group transition-colors duration-150",
                        ee && "cursor-grab active:cursor-grabbing",
                        E && ye === 1 && "bg-[var(--abc-primary-soft)]/25",
                        E && ye >= 2 && "bg-[var(--abc-warning-soft)]/25",
                        j && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                        $e || Re ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85",
                        he.className
                      ),
                      children: [
                        Xe && /* @__PURE__ */ e(
                          "td",
                          {
                            style: et.hasAnyLeftFixed ? { left: 0 } : void 0,
                            className: p(
                              "border-b border-[var(--abc-border)] px-3 py-2.5 text-center",
                              et.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: /* @__PURE__ */ e(
                              Pa,
                              {
                                checked: $e,
                                disabled: De,
                                onChange: () => Ht(se)
                              }
                            )
                          }
                        ),
                        dt && /* @__PURE__ */ e(
                          "td",
                          {
                            style: et.hasAnyLeftFixed ? { left: Xe ? 40 : 0 } : void 0,
                            className: p(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center",
                              et.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: lt && /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": Ve ? "收起详情行" : "展开详情行",
                                "aria-expanded": Ve,
                                onClick: () => kr(se, O),
                                className: "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                children: /* @__PURE__ */ e(
                                  br,
                                  {
                                    className: p(
                                      "h-3.5 w-3.5 transition-transform duration-150",
                                      Ve && "rotate-90 text-[var(--abc-primary)]"
                                    )
                                  }
                                )
                              }
                            )
                          }
                        ),
                        at.map((pe, Fe) => {
                          const Je = pe.dataIndex ?? pe.key, ke = Dn(O, Je), Ke = kt(pe), zt = pe.render ? pe.render(ke, O, E ? ye : ue, {
                            depth: ye,
                            rowIndex: ue,
                            isExpanded: Ve
                          }) : lf(ke, O, pe, P), Bn = Fe === 0 && (ye > 0 || Ce);
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": pe.key,
                              style: {
                                ...Ke === "left" ? { left: `${et.leftOffsets[pe.key] ?? 0}px` } : {},
                                ...Ke === "right" ? { right: `${et.rightOffsets[pe.key] ?? 0}px` } : {}
                              },
                              className: p(
                                "border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                us[o],
                                pe.align === "center" && "text-center",
                                pe.align === "right" && "text-right",
                                Le === pe.key && "bg-[var(--abc-primary-soft)]/30",
                                Ke === "left" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                Ke === "right" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                pe.key === et.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.08)]",
                                pe.key === et.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.08)]"
                              ),
                              children: Bn ? /* @__PURE__ */ c(
                                "div",
                                {
                                  style: { paddingLeft: `${ye * nt}px` },
                                  className: "inline-flex items-center gap-1",
                                  children: [
                                    Ce ? /* @__PURE__ */ e(
                                      "button",
                                      {
                                        type: "button",
                                        "aria-label": Ve ? "收起子项" : "展开子项",
                                        "aria-expanded": Ve,
                                        onClick: () => kr(se, O),
                                        className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                        children: /* @__PURE__ */ e(
                                          br,
                                          {
                                            className: p(
                                              "h-3 w-3 transition-transform duration-150",
                                              Ve && "rotate-90 text-[var(--abc-primary)]"
                                            )
                                          }
                                        )
                                      }
                                    ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                                    /* @__PURE__ */ e("span", { className: "min-w-0", children: zt })
                                  ]
                                }
                              ) : zt
                            },
                            pe.key
                          );
                        })
                      ]
                    }
                  ),
                  lt && Ve && (S == null ? void 0 : S.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: Lr,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: S.expandedRowRender(O, ue, ye, Ve)
                    }
                  ) })
                ] }, String(se));
              }) })
            ]
          }
        ),
        He && Dr && ar(
          /* @__PURE__ */ c(
            "div",
            {
              ref: Te,
              role: "menu",
              "aria-label": `${He.col.title} 列操作菜单`,
              "data-abc-floating": "",
              "data-motion": $,
              style: { top: `${He.y}px`, left: `${He.x}px` },
              className: p(
                "fixed z-[1350] w-44 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
                $ !== "none" && "abc-animate-popover-in"
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "truncate border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: [
                  "列：",
                  He.col.title
                ] }),
                fr(He.col) && b && /* @__PURE__ */ c("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(He.col.key, "asc"), gt(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(vs, { className: "h-3.5 w-3.5" }),
                          " 升序排列"
                        ] }),
                        (l == null ? void 0 : l.key) === He.col.key && l.direction === "asc" && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(He.col.key, "desc"), gt(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(gs, { className: "h-3.5 w-3.5" }),
                          " 降序排列"
                        ] }),
                        (l == null ? void 0 : l.key) === He.col.key && l.direction === "desc" && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  (l == null ? void 0 : l.key) === He.col.key && l.direction && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(He.col.key, null), gt(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(Lo, { className: "h-3.5 w-3.5" }),
                        " 清除排序"
                      ]
                    }
                  )
                ] }),
                N && /* @__PURE__ */ c("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const O = kt(He.col);
                        N(He.col.key, O === "left" ? null : "left"), gt(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(oa, { className: "h-3.5 w-3.5 -rotate-45" }),
                          " 固定到左侧"
                        ] }),
                        kt(He.col) === "left" && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const O = kt(He.col);
                        N(He.col.key, O === "right" ? null : "right"), gt(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(oa, { className: "h-3.5 w-3.5 rotate-45" }),
                          " 固定到右侧"
                        ] }),
                        kt(He.col) === "right" && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  kt(He.col) && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        N(He.col.key, null), gt(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(su, { className: "h-3.5 w-3.5" }),
                        " 取消固定"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "pt-1", children: [
                  w && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        w(He.col.key), gt(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(yc, { className: "h-3.5 w-3.5" }),
                        " 隐藏此列"
                      ]
                    }
                  ),
                  M && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        M(), gt(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
                        " 重置列配置"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          Dr
        )
      ]
    }
  );
}
const df = le.forwardRef(
  ({ className: t, scrollLabel: r, wrapperClassName: a, ...n }, s) => /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "table-wrapper",
      role: r ? "region" : void 0,
      "aria-label": r,
      tabIndex: r ? 0 : void 0,
      className: p(
        "relative w-full max-w-full overflow-auto [container-type:inline-size] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        a
      ),
      children: /* @__PURE__ */ e(
        "table",
        {
          ref: s,
          className: p("w-full caption-bottom text-sm border-collapse text-[var(--abc-fg)]", t),
          ...n
        }
      )
    }
  )
);
df.displayName = "Table";
const uf = le.forwardRef(
  ({ className: t, sticky: r = !1, ...a }, n) => /* @__PURE__ */ e(
    "thead",
    {
      ref: n,
      className: p(
        "bg-[var(--abc-bg-muted)] [&_tr]:border-b [&_tr]:border-[var(--abc-border)]",
        r && "sticky top-0 z-10 bg-[var(--abc-bg-surface)] backdrop-blur-xs shadow-[0_1px_0_0_var(--abc-border)]",
        t
      ),
      ...a
    }
  )
);
uf.displayName = "TableHeader";
const bf = le.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: p("[&_tr:last-child]:border-0", t), ...r }));
bf.displayName = "TableBody";
const mf = le.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: p("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
mf.displayName = "TableFooter";
const ff = le.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tr",
  {
    ref: a,
    className: p(
      "border-b border-[var(--abc-border)] transition-colors hover:bg-[var(--abc-bg-subtle)] data-[state=selected]:bg-[var(--abc-primary-soft)]",
      t
    ),
    ...r
  }
));
ff.displayName = "TableRow";
const pf = le.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
  "th",
  {
    ref: n,
    scope: r,
    className: p(
      "h-10 px-3 text-left align-middle text-[11px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]",
      t
    ),
    ...a
  }
));
pf.displayName = "TableHead";
const hf = le.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: p("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
hf.displayName = "TableCell";
const vf = le.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: p("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
vf.displayName = "TableCaption";
const gf = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, xf = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, yf = {
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
}, Hr = {
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
}, yr = "transition-[background-color,color,box-shadow,transform] duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-active)] motion-safe:enabled:active:scale-[var(--abc-press-scale)]";
function wr(t, r) {
  var a;
  return t.path && (r === t.path || r.startsWith(`${t.path}/`)) ? !0 : !!((a = t.children) != null && a.some((n) => wr(n, r)));
}
function si(t, r, a = []) {
  var n;
  for (const s of t) {
    const o = [...a, s];
    if (s.path === r) return o;
    if ((n = s.children) != null && n.length) {
      const d = si(s.children, r, o);
      if (d.length > 0) return d;
    }
  }
  return [];
}
function ur(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(dr, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const Zs = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: o = 0 }) => {
  const d = Hr[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "space-y-0.5",
        o > 0 && p("border-l border-[var(--abc-border)]", d.flyoutSubIndent)
      ),
      children: t.map((i) => {
        const u = !!(i.children && i.children.length > 0), l = i.path === r, b = u && wr(i, r);
        return u ? /* @__PURE__ */ c("div", { className: "py-0.5", children: [
          /* @__PURE__ */ c(
            "div",
            {
              className: p(
                "flex items-center gap-1.5 font-semibold select-none",
                d.flyoutHeadingText,
                b ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
              ),
              children: [
                ur(i.icon, a, d.flyoutHeadingIcon),
                /* @__PURE__ */ e("span", { className: "truncate", children: i.label })
              ]
            }
          ),
          /* @__PURE__ */ e(
            Zs,
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
            className: p(
              "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
              yr,
              d.flyoutItem,
              l ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
              i.disabled && "opacity-45 cursor-not-allowed"
            ),
            children: [
              ur(i.icon, a, d.flyoutIcon),
              /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: i.label }),
              i.badge !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: p(
                    "rounded-full bg-[var(--abc-primary-soft)] font-mono text-[var(--abc-primary)]",
                    d.badge
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
}, sa = ({ brand: t, collapsed: r = !1, tone: a = "light", size: n, className: s }) => {
  const o = Se(n, "sm"), d = Hr[o], i = a === "dark", u = oe(() => t.logo ? typeof t.logo == "string" ? ti(t.logo) ? /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)]/15 p-1 text-[var(--abc-primary)] [&>svg]:max-h-full [&>svg]:max-w-full",
        d.brandLogoBox
      ),
      dangerouslySetInnerHTML: { __html: t.logo }
    }
  ) : /* @__PURE__ */ e(
    "img",
    {
      src: t.logo,
      alt: t.name,
      className: p("shrink-0 rounded-[var(--abc-radius-md)] object-contain", d.brandLogoBox)
    }
  ) : /* @__PURE__ */ e("div", { className: "shrink-0", children: t.logo }) : /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-[var(--abc-motion-fast)] group-hover:scale-[1.03]",
        d.brandLogoBox
      ),
      children: t.name.slice(0, 1).toUpperCase()
    }
  ), [t.logo, t.name, d.brandLogoBox]);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-size": o,
      className: p(
        "group flex items-center select-none",
        d.brandGap,
        r ? p("justify-center", d.brandWrapCollapsed) : d.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            onClick: t.onClick,
            className: p(
              "flex min-w-0 flex-1 items-center",
              d.brandGap,
              t.onClick && "cursor-pointer"
            ),
            children: [
              u,
              !r && /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: p(
                      "truncate font-bold tracking-tight",
                      d.brandTitle,
                      i ? "text-white" : "text-[var(--abc-fg)]"
                    ),
                    children: t.name
                  }
                ),
                t.subtitle && /* @__PURE__ */ e(
                  "div",
                  {
                    className: p(
                      "truncate",
                      d.brandSubtitle,
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
            onClick: (l) => {
              var b;
              l.stopPropagation(), (b = t.onEditBrand) == null || b.call(t);
            },
            className: p(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              i ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(ou, { className: d.brandEditIcon })
          }
        )
      ]
    }
  );
}, wf = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const i = Hr[s], [u, l] = F(!1), { isMounted: b, isVisible: f } = Fr(u, o === "none" ? 0 : 140), v = ce(null), m = ce(null), h = ce(null), g = mt(), y = wr(t, r), { style: C, actualSide: x, portalContainer: I } = za({
    open: b,
    triggerRef: v,
    floatingRef: m,
    placement: "rightStart",
    offset: 8
  }), A = de(() => {
    h.current !== null && typeof window < "u" && (window.clearTimeout(h.current), h.current = null);
  }, []);
  me(() => () => A(), [A]);
  const B = () => {
    A(), l(!0);
  }, L = () => {
    A(), typeof window < "u" && (h.current = window.setTimeout(() => {
      l(!1), h.current = null;
    }, 140));
  };
  return me(() => {
    if (!u) return;
    const N = (M) => {
      var S, E;
      const _ = M.target;
      (S = v.current) != null && S.contains(_) || (E = m.current) != null && E.contains(_) || l(!1);
    }, w = (M) => {
      var _;
      M.key === "Escape" && (M.preventDefault(), M.stopPropagation(), l(!1), (_ = v.current) == null || _.focus());
    };
    return document.addEventListener("mousedown", N), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", w, !0);
    };
  }, [u]), /* @__PURE__ */ c(Ue, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: B, onMouseLeave: L, children: /* @__PURE__ */ e(
      "button",
      {
        ref: v,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": u,
        "aria-haspopup": "menu",
        "aria-controls": u ? g : void 0,
        onClick: () => l((N) => !N),
        onKeyDown: (N) => {
          (N.key === "ArrowRight" || N.key === "ArrowDown") && (N.preventDefault(), l(!0), window.requestAnimationFrame(() => {
            var w, M;
            (M = (w = m.current) == null ? void 0 : w.querySelector('[role="menuitem"]:not(:disabled)')) == null || M.focus();
          }));
        },
        className: p(
          "flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer",
          yr,
          i.collapsedBtn,
          y ? a ? "bg-white/12 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : a ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: ur(t.icon ?? "folder", n, i.collapsedIcon)
      }
    ) }),
    b && I && ar(
      /* @__PURE__ */ c(
        "div",
        {
          ref: m,
          id: g,
          role: "menu",
          "aria-label": t.label,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": x,
          style: C,
          onMouseEnter: B,
          onMouseLeave: L,
          onKeyDown: (N) => {
            var _, S, E;
            const w = Array.from(
              ((_ = m.current) == null ? void 0 : _.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const M = w.indexOf(document.activeElement);
            N.key === "ArrowDown" ? (N.preventDefault(), (S = w[(M + 1) % w.length]) == null || S.focus()) : N.key === "ArrowUp" && (N.preventDefault(), (E = w[(M - 1 + w.length) % w.length]) == null || E.focus());
          },
          className: p(
            "z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
            // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
            x === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
            i.flyoutPanel,
            o !== "none" && (f ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: p(
                  "mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]",
                  i.flyoutHeader
                ),
                children: t.label
              }
            ),
            /* @__PURE__ */ e(
              Zs,
              {
                items: t.children ?? [],
                pathname: r,
                registry: n,
                size: s,
                onSelect: (N, w) => {
                  d(N, w), l(!1);
                }
              }
            )
          ]
        }
      ),
      I
    )
  ] });
}, bs = ({
  brand: t,
  items: r,
  pathname: a,
  collapsed: n = !1,
  accordion: s = !0,
  tone: o = "dark",
  size: d,
  motion: i,
  onNavigate: u,
  className: l
}) => {
  const { iconRegistry: b } = pt(), f = Se(d, "sm"), v = ve(i), m = Hr[f], h = o === "dark", [g, y] = F(
    () => r.filter((x) => {
      var I;
      return ((I = x.children) == null ? void 0 : I.length) && wr(x, a);
    }).map((x) => x.key)
  );
  me(() => {
    const x = r.filter((I) => {
      var A;
      return ((A = I.children) == null ? void 0 : A.length) && wr(I, a);
    }).map((I) => I.key);
    x.length > 0 && y(
      (I) => s ? [x[0]] : Array.from(/* @__PURE__ */ new Set([...I, ...x]))
    );
  }, [a, r, s]);
  const C = (x) => {
    y((I) => I.includes(x) ? I.filter((A) => A !== x) : s ? [x] : [...I, x]);
  };
  return /* @__PURE__ */ c(
    "aside",
    {
      "aria-label": "侧边主导航",
      "data-size": f,
      "data-motion": v,
      style: {
        width: n ? "var(--abc-sidebar-collapsed-w)" : "var(--abc-sidebar-w)"
      },
      className: p(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        h ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        l
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: p(
              "flex h-[var(--abc-header-h)] shrink-0 items-center border-b",
              h ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              sa,
              {
                brand: t,
                collapsed: n,
                tone: o,
                size: f,
                className: "w-full"
              }
            )
          }
        ),
        /* @__PURE__ */ e("nav", { className: p("flex-1 overflow-y-auto", m.navPadding), children: r.map((x) => {
          const I = !!(x.children && x.children.length > 0), A = x.path === a, B = wr(x, a), L = g.includes(x.key);
          if (!I) {
            const N = /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                disabled: x.disabled,
                "aria-label": n ? x.label : void 0,
                onClick: () => x.path && u(x.path, x),
                className: p(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  yr,
                  m.itemButton,
                  n && p("justify-center px-0", m.collapsedBtn),
                  A ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : h ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  x.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  ur(x.icon, b, n ? m.collapsedIcon : m.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: x.label }),
                  !n && x.badge !== void 0 && /* @__PURE__ */ e("span", { className: p("rounded-full bg-white/15 font-mono", m.badge), children: x.badge })
                ]
              },
              x.key
            );
            return n ? /* @__PURE__ */ e(
              Et,
              {
                content: x.label,
                placement: "right",
                motion: v,
                className: "flex w-full",
                children: N
              },
              x.key
            ) : N;
          }
          return n ? /* @__PURE__ */ e(
            wf,
            {
              item: x,
              pathname: a,
              isDark: h,
              registry: b,
              size: f,
              motion: v,
              onNavigate: u
            },
            x.key
          ) : /* @__PURE__ */ c("div", { className: "relative", children: [
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-expanded": L,
                onClick: () => C(x.key),
                className: p(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  yr,
                  m.itemButton,
                  B ? h ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : h ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  ur(x.icon, b, m.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: x.label }),
                  /* @__PURE__ */ e(
                    Yt,
                    {
                      className: p(
                        "shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]",
                        m.chevron,
                        !L && "-rotate-90"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                inert: L ? void 0 : "",
                className: p(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  L ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: p(
                      "border-l",
                      m.subWrap,
                      h ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: x.children.map((N) => {
                      const w = N.path === a;
                      return /* @__PURE__ */ c(
                        "button",
                        {
                          type: "button",
                          disabled: N.disabled,
                          onClick: () => N.path && u(N.path, N),
                          className: p(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            yr,
                            m.subButton,
                            w ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : h ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            N.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            ur(N.icon, b, m.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: N.label }),
                            N.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: p(
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
}, Nf = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const i = Hr[s], [u, l] = F(!1), { isMounted: b, isVisible: f } = Fr(u, o === "none" ? 0 : 140), v = ce(null), m = ce(null), h = ce(null), g = mt(), { style: y, actualSide: C, portalContainer: x } = za({
    open: b,
    triggerRef: v,
    floatingRef: m,
    placement: "bottomLeft",
    offset: 6
  }), I = de(() => {
    h.current !== null && typeof window < "u" && (window.clearTimeout(h.current), h.current = null);
  }, []);
  me(() => () => I(), [I]);
  const A = () => {
    I(), l(!0);
  }, B = () => {
    I(), typeof window < "u" && (h.current = window.setTimeout(() => {
      l(!1), h.current = null;
    }, 150));
  };
  me(() => {
    if (!u) return;
    const N = (M) => {
      var S, E;
      const _ = M.target;
      (S = v.current) != null && S.contains(_) || (E = m.current) != null && E.contains(_) || l(!1);
    }, w = (M) => {
      var _;
      M.key === "Escape" && (M.preventDefault(), M.stopPropagation(), l(!1), (_ = v.current) == null || _.focus());
    };
    return document.addEventListener("mousedown", N), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", N), document.removeEventListener("keydown", w, !0);
    };
  }, [u]);
  const L = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var N, w;
      (w = (N = m.current) == null ? void 0 : N.querySelector('[role="menuitem"]:not(:disabled)')) == null || w.focus();
    });
  };
  return /* @__PURE__ */ c(Ue, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: A,
        onMouseLeave: B,
        className: "relative flex-none",
        children: /* @__PURE__ */ c(
          "button",
          {
            ref: v,
            type: "button",
            "aria-expanded": u,
            "aria-haspopup": "menu",
            "aria-controls": u ? g : void 0,
            onClick: () => l((N) => !N),
            onKeyDown: (N) => {
              N.key === "ArrowDown" && (N.preventDefault(), l(!0), L());
            },
            className: p(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              yr,
              i.topItem,
              a ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : u ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              ur(t.icon, n, i.topIcon),
              /* @__PURE__ */ e("span", { children: t.label }),
              /* @__PURE__ */ e(
                Yt,
                {
                  className: p(
                    "opacity-70 transition-transform duration-[var(--abc-motion-fast)]",
                    i.topChevron,
                    u && "rotate-180 text-[var(--abc-primary)] opacity-100"
                  )
                }
              )
            ]
          }
        )
      }
    ),
    b && x && ar(
      /* @__PURE__ */ e(
        "div",
        {
          ref: m,
          id: g,
          role: "menu",
          "aria-label": `${t.label} 子菜单`,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": C,
          style: y,
          onMouseEnter: A,
          onMouseLeave: B,
          onKeyDown: (N) => {
            var _, S, E, z, U;
            const w = Array.from(
              ((_ = m.current) == null ? void 0 : _.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const M = w.indexOf(document.activeElement);
            N.key === "ArrowDown" ? (N.preventDefault(), (S = w[(M + 1) % w.length]) == null || S.focus()) : N.key === "ArrowUp" ? (N.preventDefault(), (E = w[(M - 1 + w.length) % w.length]) == null || E.focus()) : N.key === "Home" ? (N.preventDefault(), (z = w[0]) == null || z.focus()) : N.key === "End" && (N.preventDefault(), (U = w[w.length - 1]) == null || U.focus());
          },
          className: p(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            C === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            i.flyoutPanel,
            o !== "none" && (f ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            Zs,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (N, w) => {
                d(N, w), l(!1);
              }
            }
          )
        }
      ),
      x
    )
  ] });
}, tc = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: d,
  onNavigate: i
}) => {
  const { iconRegistry: u } = pt(), l = Se(s, "sm"), b = ve(o), f = Hr[l];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": l,
      "data-motion": b,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((v) => {
        var h;
        const m = a ? n === v.key : wr(v, r);
        return a || !((h = v.children) != null && h.length) ? /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => {
              a && d ? d(v) : v.path && i(v.path, v);
            },
            className: p(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              yr,
              f.topItem,
              m ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              ur(v.icon, u, f.topIcon),
              /* @__PURE__ */ e("span", { children: v.label })
            ]
          },
          v.key
        ) : /* @__PURE__ */ e(
          Nf,
          {
            item: v,
            pathname: r,
            isActive: m,
            registry: u,
            size: l,
            motion: b,
            onNavigate: i
          },
          v.key
        );
      })
    }
  );
}, kf = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: d, onNavigate: i }) => {
  const { iconRegistry: u } = pt(), l = Se(s, "sm"), b = ve(o), f = Hr[l], v = n === "dark", m = oe(
    () => r.find((x) => wr(x, a)) ?? r[0],
    [r, a]
  ), [h, g] = F((m == null ? void 0 : m.key) ?? "");
  me(() => {
    m != null && m.key && g(m.key);
  }, [m == null ? void 0 : m.key]);
  const y = r.find((x) => x.key === h) ?? m, C = (y == null ? void 0 : y.children) ?? [];
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": l,
      "data-motion": b,
      className: p("flex h-full shrink-0 select-none", d),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: p(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              v ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(sa, { brand: t, collapsed: !0, tone: n, size: l }) }),
              /* @__PURE__ */ e("div", { className: p("flex w-full flex-1 flex-col items-center overflow-y-auto", f.dualRailWrap), children: r.map((x) => {
                const I = x.key === (y == null ? void 0 : y.key);
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var A, B, L;
                      g(x.key), !((A = x.children) != null && A.length) && x.path ? i(x.path, x) : (L = (B = x.children) == null ? void 0 : B[0]) != null && L.path && i(x.children[0].path, x.children[0]);
                    },
                    className: p(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      yr,
                      f.dualRailItem,
                      I ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : v ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      ur(x.icon ?? "folder", u, f.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: p("truncate", f.dualRailLabelMaxW), children: x.label.slice(0, 4) })
                    ]
                  },
                  x.key
                );
              }) })
            ]
          }
        ),
        C.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            style: { width: "var(--abc-dual-panel-w)" },
            className: "flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: p(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    f.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: p("truncate font-bold text-[var(--abc-fg)]", f.dualPanelTitle), children: y == null ? void 0 : y.label }),
                    /* @__PURE__ */ e(br, { className: p("text-[var(--abc-fg-muted)]", f.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: p("flex-1 overflow-y-auto", f.dualPanelWrap), children: C.map((x) => {
                const I = x.path === a;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    disabled: x.disabled,
                    onClick: () => !x.disabled && x.path && i(x.path, x),
                    className: p(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      yr,
                      f.dualPanelItem,
                      I ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      x.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      ur(x.icon, u, f.dualPanelIcon),
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
}, Cf = {
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
}, Sf = ({
  tabs: t,
  activePath: r,
  variant: a = "card",
  size: n,
  motion: s,
  onSelect: o,
  onClose: d,
  onCloseOthers: i,
  onCloseRight: u,
  onCloseAll: l,
  onTogglePin: b,
  onRefresh: f,
  className: v
}) => {
  var C;
  const { iconRegistry: m } = pt(), h = Se(n, "sm"), g = ve(s), y = Cf[h];
  return t.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      "data-size": h,
      "data-motion": g,
      className: p(
        "flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none",
        y.barPadding,
        v
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]", children: t.map((x) => {
          const I = x.path === r, A = x.closable !== !1 && !x.pinned, B = a === "pill" ? I ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? I ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : I ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ c(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(x.path),
              onKeyDown: (L) => {
                (L.key === "Enter" || L.key === " ") && (L.preventDefault(), o(x.path));
              },
              className: p(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                y.tabItem,
                B
              ),
              children: [
                x.pinned && /* @__PURE__ */ e(oa, { className: p("shrink-0 opacity-75", y.pinIcon) }),
                x.icon && (typeof x.icon == "string" ? /* @__PURE__ */ e(dr, { name: x.icon, size: y.tabIcon, registry: m }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: x.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: x.title }),
                A && d && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${x.title}`,
                    onClick: (L) => {
                      L.stopPropagation(), d(x.path);
                    },
                    className: p(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && I ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(ft, { className: y.closeIcon })
                  }
                )
              ]
            },
            x.path
          );
        }) }),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
          f && /* @__PURE__ */ e(Et, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => f(r),
              className: p(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                y.actionBtn
              ),
              children: /* @__PURE__ */ e(Cn, { className: y.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            ca,
            {
              items: [
                ...b ? [
                  {
                    key: "pin",
                    label: (C = t.find((x) => x.path === r)) != null && C.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(oa, { className: "h-3.5 w-3.5" }),
                    onClick: () => b(r)
                  }
                ] : [],
                ...i ? [
                  {
                    key: "others",
                    label: "关闭其他页签",
                    onClick: () => i(r)
                  }
                ] : [],
                ...u ? [
                  {
                    key: "right",
                    label: "关闭右侧页签",
                    onClick: () => u(r)
                  }
                ] : [],
                ...l ? [
                  {
                    key: "all",
                    label: "关闭全部可关页签",
                    danger: !0,
                    dividerAbove: !0,
                    onClick: () => l()
                  }
                ] : []
              ],
              children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "页签批量操作",
                  className: p(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    y.actionBtn
                  ),
                  children: /* @__PURE__ */ e(Ls, { className: y.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, If = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o = 0,
  activeClassName: d,
  children: i
}) => {
  const u = ce(/* @__PURE__ */ new Map()), l = ce(0), b = ce(/* @__PURE__ */ new Map()), f = ce(t);
  if (me(() => {
    const m = s == null ? void 0 : s.current;
    if (!m) return;
    f.current && f.current !== t && b.current.set(f.current, m.scrollTop), f.current = t;
    const h = b.current.get(t) ?? 0;
    requestAnimationFrame(() => {
      s != null && s.current && (s.current.scrollTop = h);
    });
  }, [t, s]), me(() => {
    if (typeof window > "u") return;
    const m = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(m);
  }, [t]), !r)
    return u.current.clear(), /* @__PURE__ */ e("div", { className: p("min-h-full", d), children: i }, `${t}_${o}`);
  if (n && n.length > 0) {
    const m = /* @__PURE__ */ new Set([...n, t]);
    for (const h of Array.from(u.current.keys()))
      m.has(h) || (u.current.delete(h), b.current.delete(h));
  }
  l.current += 1;
  const v = u.current.get(t);
  for (u.current.set(t, {
    key: t,
    seed: o,
    lastActiveTick: l.current,
    node: v && v.seed === o ? v.node : i
  }); u.current.size > a; ) {
    let m = null, h = 1 / 0;
    for (const [g, y] of u.current.entries())
      g !== t && y.lastActiveTick < h && (h = y.lastActiveTick, m = g);
    if (m)
      u.current.delete(m);
    else
      break;
  }
  return /* @__PURE__ */ e(Ue, { children: Array.from(u.current.values()).map((m) => {
    const h = m.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: h ? "block" : "none" },
        className: p("min-h-full", h && d),
        children: m.node
      },
      `${m.key}_${m.seed}`
    );
  }) });
}, oi = "abc_cmd_recent_v1", ci = 5;
function rc() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem(oi);
    if (!t) return [];
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function ac(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(oi, JSON.stringify(t.slice(0, ci)));
    } catch {
    }
}
function ii(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const o = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && a.push(...ii(s.children, o));
  }
  return a;
}
function nc(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const d = t.slice(0, o), i = t.slice(o, o + a.length), u = t.slice(o + a.length);
  return /* @__PURE__ */ c(Ue, { children: [
    d,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: i }),
    u
  ] });
}
const _f = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = pt(), [d, i] = F(""), [u, l] = F("all"), [b, f] = F(0), [v, m] = F(() => rc()), h = ce(null), g = ce(null);
  me(() => {
    t ? m(rc()) : (i(""), l("all"), f(0));
  }, [t]);
  const y = oe(() => [
    ...ii(a).map(({ item: M, trail: _ }) => ({
      id: `nav_${M.key}`,
      title: M.label,
      subtitle: `${_}${M.path ? ` · ${M.path}` : ""}`,
      group: "页面导航",
      icon: M.icon ?? "file",
      keywords: M.path,
      onTrigger: () => {
        M.path && (n == null || n(M.path, M));
      }
    })),
    ...s.map((M) => ({
      ...M,
      group: M.group || "快捷指令"
    }))
  ], [a, n, s]), C = oe(() => {
    const w = /* @__PURE__ */ new Set();
    for (const M of y)
      M.group && w.add(M.group);
    return Array.from(w);
  }, [y]), x = oe(() => {
    const w = d.trim(), M = (z) => u !== "all" && u !== "__recent__" && z.group !== u ? !1 : w ? qt(z.title, w) || !!(z.subtitle && qt(z.subtitle, w)) || !!(z.keywords && qt(z.keywords, w)) : !0, _ = [];
    if (u === "__recent__") {
      const z = v.map((U) => y.find((R) => R.id === U)).filter((U) => U !== void 0 && M(U));
      return z.length > 0 && _.push({ groupName: "最近访问", isRecent: !0, items: z }), _;
    }
    const S = /* @__PURE__ */ new Set();
    if (!w && u === "all" && v.length > 0) {
      const z = v.map((U) => y.find((R) => R.id === U)).filter((U) => U !== void 0);
      z.length > 0 && (z.forEach((U) => S.add(U.id)), _.push({ groupName: "最近访问", isRecent: !0, items: z }));
    }
    const E = /* @__PURE__ */ new Map();
    for (const z of y) {
      if (S.has(z.id) || !M(z)) continue;
      const U = z.group || "其他", R = E.get(U) ?? [];
      R.push(z), E.set(U, R);
    }
    for (const [z, U] of E.entries())
      U.length > 0 && _.push({ groupName: z, items: U });
    return _;
  }, [y, d, u, v]), I = oe(
    () => x.flatMap((w) => w.items),
    [x]
  );
  me(() => {
    f(0);
  }, [d, u]), me(() => {
    var M;
    if (!t || !g.current) return;
    const w = g.current.querySelector(`[data-cmd-idx="${b}"]`);
    (M = w == null ? void 0 : w.scrollIntoView) == null || M.call(w, { block: "nearest" });
  }, [b, t]);
  const A = (w) => {
    if (!w) return;
    const M = [w.id, ...v.filter((_) => _ !== w.id)].slice(
      0,
      ci
    );
    m(M), ac(M), w.onTrigger(), r();
  }, B = () => {
    m([]), ac([]), u === "__recent__" && l("all");
  }, L = oe(() => {
    const w = ["all"];
    return v.length > 0 && w.push("__recent__"), [...w, ...C];
  }, [v.length, C]);
  let N = -1;
  return /* @__PURE__ */ e(
    Xt,
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
              w.preventDefault(), f((M) => I.length ? (M + 1) % I.length : 0);
            else if (w.key === "ArrowUp")
              w.preventDefault(), f(
                (M) => I.length ? (M - 1 + I.length) % I.length : 0
              );
            else if (w.key === "Tab") {
              w.preventDefault();
              const M = L.indexOf(u), _ = w.shiftKey ? -1 : 1, S = L[(M + _ + L.length) % L.length];
              S && l(S);
            } else w.key === "Enter" && I[b] && (w.preventDefault(), A(I[b]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(It, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: h,
                  type: "text",
                  autoFocus: !0,
                  value: d,
                  onChange: (w) => i(w.target.value),
                  placeholder: "搜索菜单名称、路由路径、快捷指令或输入拼音首字母（如 yhgl）...",
                  className: "w-full bg-transparent text-[15px] font-medium text-[var(--abc-fg)] placeholder:font-normal placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              ),
              d && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "清空搜索词",
                  onClick: () => {
                    var w;
                    i(""), (w = h.current) == null || w.focus();
                  },
                  className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(ra, { className: "shrink-0", children: "ESC" })
            ] }),
            C.length > 0 && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("all"),
                    className: p(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      u === "all" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      "全部 (",
                      y.length,
                      ")"
                    ]
                  }
                ),
                v.length > 0 && /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("__recent__"),
                    className: p(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      u === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(on, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                C.map((w) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => l(w),
                    className: p(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      u === w ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: w
                  },
                  w
                ))
              ] }),
              v.length > 0 && /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  onClick: B,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: g, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: I.length === 0 ? /* @__PURE__ */ c("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Ra, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ c("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                d,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: x.map((w) => /* @__PURE__ */ c("div", { className: "space-y-1", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5", children: [
                  w.isRecent && /* @__PURE__ */ e(on, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: w.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: w.items.length })
              ] }),
              w.items.map((M) => {
                N += 1;
                const _ = N, S = _ === b;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": _,
                    onMouseEnter: () => f(_),
                    onClick: () => A(M),
                    className: p(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      S ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: p(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              S ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: M.icon ? typeof M.icon == "string" ? /* @__PURE__ */ e(dr, { name: M.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: M.icon }) : /* @__PURE__ */ e(It, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ c("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: p(
                                "truncate text-sm font-semibold",
                                S ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: nc(M.title, d)
                            }
                          ),
                          M.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: nc(M.subtitle, d) })
                        ] })
                      ] }),
                      /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
                        M.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: p(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              S ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: M.group
                          }
                        ),
                        S && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Cc, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${w.isRecent ? "recent" : "std"}_${M.id}`
                );
              })
            ] }, w.groupName)) }) }),
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(ra, { children: /* @__PURE__ */ e(vs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(ra, { children: /* @__PURE__ */ e(gs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(ra, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(ra, { children: "Tab" }),
                  /* @__PURE__ */ e("span", { children: "切换分类" })
                ] })
              ] }),
              /* @__PURE__ */ c("span", { className: "font-mono", children: [
                "共 ",
                I.length,
                " 项结果"
              ] })
            ] })
          ]
        }
      )
    }
  );
}, uh = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: d,
  className: i,
  children: u
}) => /* @__PURE__ */ c("div", { className: p("flex min-h-full flex-col gap-4", d && "pb-16", i), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((l, b) => {
      const f = b === n.length - 1;
      return /* @__PURE__ */ c(Ge.Fragment, { children: [
        b > 0 && /* @__PURE__ */ e(br, { className: "h-3 w-3 opacity-60" }),
        l.onClick && !f ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: l.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: l.label
          }
        ) : /* @__PURE__ */ e("span", { className: p(f && "font-medium text-[var(--abc-fg-secondary)]"), children: l.label })
      ] }, b);
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
  /* @__PURE__ */ e("div", { className: "flex-1", children: u }),
  d && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: d })
] }), Tf = ({
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
  copyright: d = `© ${(/* @__PURE__ */ new Date()).getFullYear()} ABC Design System. All rights reserved.`,
  children: i,
  className: u
}) => r === "centered" ? /* @__PURE__ */ c(
  "div",
  {
    className: p(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      u
    ),
    children: [
      /* @__PURE__ */ e(Vo, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(sa, { brand: t }) }),
      /* @__PURE__ */ c("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(Go, {}),
        i
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: d })
    ]
  }
) : /* @__PURE__ */ c(
  "div",
  {
    className: p(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      u
    ),
    children: [
      /* @__PURE__ */ c("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Vo, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(sa, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ c("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((l, b) => /* @__PURE__ */ c("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(Nr, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: l })
          ] }, b)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: d })
      ] }),
      /* @__PURE__ */ c("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(sa, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ c("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(Go, {}),
          i
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: d })
      ] })
    ]
  }
), Mf = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], Ef = [
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
], Af = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, sc = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var Ne;
  const {
    theme: o,
    pageTransition: d,
    watermarkEnabled: i,
    setThemeMode: u,
    setBrand: l,
    setCustomBrandColor: b,
    setDensity: f,
    setRadius: v,
    setFontScale: m,
    setVisualMode: h,
    setComponentSize: g,
    setMotion: y,
    updateTheme: C,
    setPageTransition: x,
    setWatermarkEnabled: I,
    resetTheme: A,
    toast: B
  } = pt(), [L, N] = F(1), [w, M] = F(!0), [_, S] = F("实时 Token 响应预览"), [E, z] = F(0), [U, R] = F(!1), [T, P] = F(""), [W, j] = F(o.customBrandColor ?? "#0ea5e9"), K = o.componentSize ?? "sm", V = a.sidebarWidth ?? gf[K], ne = a.headerHeight ?? xf[K], H = o.customBrandColor || ((Ne = ns[o.brand]) == null ? void 0 : Ne.swatch) || "#2563eb", te = ($, Y) => {
    $.theme.mode && $.theme.mode !== o.mode && u($.theme.mode, { clientX: Y.clientX, clientY: Y.clientY }), C($.theme), n($.layout), x($.transition), z((Te) => Te + 1), B.success(`已切换至「${$.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    Wa,
    {
      open: t,
      onClose: r,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ c("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            xe,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                A(), s == null || s(), B.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            xe,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" }),
              onClick: () => R(($) => !$),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            xe,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(cu, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const $ = JSON.stringify(o, null, 2), Y = JSON.stringify(a, null, 2), Te = `<AbcProvider
  defaultTheme={${$}}
  defaultPageTransition="${d}"
  defaultWatermarkEnabled={${i}}
>
  <ProLayout
    defaultSettings={${Y}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(Te), B.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  B.error("复制代码失败");
                }
              },
              children: "复制 JSX"
            }
          ),
          /* @__PURE__ */ e(
            xe,
            {
              variant: "primary",
              size: "xs",
              icon: /* @__PURE__ */ e(Or, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const $ = {
                  theme: o,
                  layout: a,
                  pageTransition: d,
                  watermarkEnabled: i
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify($, null, 2)), B.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  B.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ c("div", { className: "space-y-6", children: [
        U && /* @__PURE__ */ c("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => R(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            $a,
            {
              rows: 4,
              value: T,
              onChange: ($) => P($.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(xe, { size: "xs", variant: "primary", onClick: () => {
            try {
              const $ = JSON.parse(T);
              $.theme && typeof $.theme == "object" && C($.theme), $.layout && typeof $.layout == "object" && n($.layout), typeof $.pageTransition == "string" && x($.pageTransition), typeof $.watermarkEnabled == "boolean" && I($.watermarkEnabled), R(!1), P(""), B.success("已成功导入并应用自定义配置");
            } catch {
              B.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(Ra, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => z(($) => $ + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(bc, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c(
            "div",
            {
              className: p(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                Af[d]
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ c(xe, { variant: "primary", onClick: () => N(($) => $ + 1), children: [
                      "按压回弹 #",
                      L
                    ] }),
                    /* @__PURE__ */ e(xe, { variant: "outline", onClick: () => M(($) => !$), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Mr, { status: w ? "success" : "warning", dot: !0, children: w ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      Gt,
                      {
                        checked: w,
                        onChange: M,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  Qe,
                  {
                    allowClear: !0,
                    value: _,
                    onChange: ($) => S($.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ c("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: H })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(($) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${$}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${$})` }
                    },
                    $
                  )) })
                ] })
              ]
            },
            E
          )
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: Ef.map(($) => /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: (Y) => te($, Y),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: $.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: $.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: $.badge })
              ]
            },
            $.id
          )) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: Mf.map(($) => {
            const Y = a.mode === $.mode;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: $.mode }),
                className: p(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Y ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ c("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    $.mode === "sidebar" && /* @__PURE__ */ c(Ue, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    $.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    $.mode === "mix" && /* @__PURE__ */ c("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    $.mode === "dual-column" && /* @__PURE__ */ c(Ue, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    $.mode === "auth" && /* @__PURE__ */ c(Ue, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: $.title }),
                    Y && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: $.desc })
                ]
              },
              $.mode
            );
          }) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "3. 明暗外观与动态品牌色引擎" }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "色彩模式" }),
            /* @__PURE__ */ e(
              ir,
              {
                variant: "segmented",
                value: o.mode,
                onChange: ($) => u($),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(La, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Da, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Ds, { className: "h-3 w-3" }),
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
              ir,
              {
                variant: "segmented",
                value: a.sidebarTone,
                onChange: ($) => n({ sidebarTone: $ }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(ns).map(($) => {
            const Y = ns[$], Te = !o.customBrandColor && o.brand === $;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => l($),
                className: p(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Te ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: Y.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: Y.label.split(" ")[0] })
                ]
              },
              $
            );
          }) }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(mc, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || W,
                  onChange: ($) => {
                    const Y = $.target.value;
                    j(Y), b(Y);
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
                  onChange: ($) => {
                    const Y = $.target.value;
                    j(Y), /^#[0-9a-fA-F]{6}$/.test(Y) && b(Y);
                  },
                  className: "w-20 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-xs uppercase text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                }
              ),
              o.customBrandColor && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => b(void 0),
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
              ir,
              {
                variant: "segmented",
                value: o.density,
                onChange: ($) => f($),
                options: Object.keys(Do).map(($) => ({
                  value: $,
                  label: Do[$].label
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局控件与卡片圆角" }),
            /* @__PURE__ */ e(
              ir,
              {
                variant: "segmented",
                value: o.radius,
                onChange: ($) => v($),
                options: Object.keys(Po).map(($) => ({
                  value: $,
                  label: Po[$].label.split(" ")[0]
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "全局字号缩放比例" }),
            /* @__PURE__ */ e(
              ir,
              {
                variant: "segmented",
                value: o.fontScale ?? "md",
                onChange: ($) => m($),
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
              ir,
              {
                variant: "segmented",
                value: o.componentSize ?? "auto",
                onChange: ($) => g($ === "auto" ? void 0 : $),
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
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: Sa[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              ir,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: ($) => {
                  y($), z((Y) => Y + 1);
                },
                options: Object.keys(Sa).map(($) => ({
                  value: $,
                  label: Sa[$].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              Sa[o.motion ?? "smooth"].label,
              "：",
              Sa[o.motion ?? "smooth"].description
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
                  V,
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
                value: V,
                onChange: ($) => n({ sidebarWidth: Number($.target.value) }),
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
                onChange: ($) => n({ headerHeight: Number($.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "多页签视觉形态" }),
            /* @__PURE__ */ e(
              ir,
              {
                variant: "segmented",
                value: a.tabStyle ?? "card",
                onChange: ($) => n({ tabStyle: $ }),
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
              Gt,
              {
                checked: a.showTabs,
                onChange: ($) => n({ showTabs: $ })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              Gt,
              {
                checked: a.keepAlive,
                onChange: ($) => n({ keepAlive: $ })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              Gt,
              {
                checked: a.headerBlur !== !1,
                onChange: ($) => n({ headerBlur: $ })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              Gt,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: ($) => n({ showBreadcrumb: $ })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              Gt,
              {
                checked: a.sidebarAccordion,
                onChange: ($) => n({ sidebarAccordion: $ })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              Gt,
              {
                checked: !!a.showFooter,
                onChange: ($) => n({ showFooter: $ })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              Gt,
              {
                checked: i,
                onChange: ($) => I($)
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              ir,
              {
                variant: "segmented",
                value: a.contentWidth,
                onChange: ($) => n({ contentWidth: $ }),
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
              Ot,
              {
                size: "xs",
                className: "w-44",
                value: d,
                onChange: ($) => {
                  x($), z((Y) => Y + 1);
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
            /* @__PURE__ */ e(ua, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            ir,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: ($) => h($),
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
}, Lf = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Df = {
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
}, bh = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: r,
  pathname: a,
  onNavigate: n,
  settings: s,
  defaultSettings: o,
  onSettingsChange: d,
  user: i,
  headerExtra: u,
  commandActions: l = [],
  tabs: b,
  onTabsChange: f,
  authRender: v,
  authProps: m,
  showCustomizerTrigger: h = !0,
  size: g,
  motion: y,
  children: C
}) => {
  const {
    resolvedTheme: x,
    toggleTheme: I,
    pageTransition: A,
    watermarkEnabled: B,
    watermarkText: L
  } = pt(), N = Se(g, "sm"), w = ve(y), M = Df[N], _ = oe(
    () => ({ ...yf, ...o }),
    [o]
  ), [S, E] = tr({
    value: s ? { ..._, ...s } : void 0,
    defaultValue: _,
    onChange: d
  }), z = de(
    (X) => {
      E((ie) => ({ ...ie, ...X }));
    },
    [E]
  ), [U, R] = F(!1), [T, P] = F(!1), [W, j] = F(!1), [K, V] = F({}), ne = ce(null), [H, te] = tr({
    value: b,
    defaultValue: [],
    onChange: f
  }), Z = oe(
    () => si(r, a),
    [r, a]
  );
  me(() => {
    const X = Z[Z.length - 1];
    !X || !X.path || te((ie) => ie.some((Be) => Be.path === X.path) ? ie : [
      ...ie,
      {
        path: X.path,
        title: X.label,
        icon: X.icon,
        pinned: ie.length === 0
      }
    ]);
  }, [Z, te]), me(() => {
    const X = (ie) => {
      (ie.metaKey || ie.ctrlKey) && ie.key.toLowerCase() === "k" && (ie.preventDefault(), P((Be) => !Be));
    };
    return window.addEventListener("keydown", X), () => window.removeEventListener("keydown", X);
  }, []);
  const re = oe(
    () => r.find((X) => wr(X, a)) ?? r[0],
    [r, a]
  ), [ee, Ne] = F((re == null ? void 0 : re.key) ?? "");
  me(() => {
    re != null && re.key && Ne(re.key);
  }, [re == null ? void 0 : re.key]);
  const $ = oe(() => {
    const X = r.find((ie) => ie.key === ee) ?? re;
    return (X == null ? void 0 : X.children) ?? [];
  }, [r, ee, re]), Y = (X) => {
    const ie = H.findIndex((Ze) => Ze.path === X), Be = H.filter((Ze) => Ze.path !== X || Ze.pinned);
    if (te(Be), X === a && Be.length > 0) {
      const Ze = Be[Math.max(0, ie - 1)] ?? Be[0];
      Ze && n(Ze.path);
    }
  }, Te = oe(() => L || [(i == null ? void 0 : i.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [L, i == null ? void 0 : i.name, t.name]);
  if (S.mode === "auth")
    return /* @__PURE__ */ c(Ue, { children: [
      /* @__PURE__ */ e(
        Tf,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (X) => I({ clientX: X.clientX, clientY: X.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: x === "dark" ? /* @__PURE__ */ e(La, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Da, { className: "h-4 w-4" })
              }
            ),
            h && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => j(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(ps, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...m,
          children: v ?? C
        }
      ),
      /* @__PURE__ */ e(
        sc,
        {
          open: W,
          onClose: () => j(!1),
          layoutSettings: S,
          onLayoutChange: z,
          onResetAll: () => E(_)
        }
      )
    ] });
  const Le = S.mode === "sidebar", be = S.mode === "top", fe = S.mode === "mix", Pe = S.mode === "dual-column", Me = /* @__PURE__ */ c(
    "header",
    {
      className: p(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        M.headerPad,
        S.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => R(!0),
              className: p(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                M.iconBtn
              ),
              children: /* @__PURE__ */ e(fc, { className: M.iconCls })
            }
          ),
          (be || fe) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(sa, { brand: t, size: N, className: "px-0 pr-3" }) }),
          (Le || fe && $.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": S.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => z({ sidebarCollapsed: !S.sidebarCollapsed }),
              className: p(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                M.iconBtn
              ),
              children: S.sidebarCollapsed ? /* @__PURE__ */ e(iu, { className: M.iconCls }) : /* @__PURE__ */ e(lu, { className: M.iconCls })
            }
          ),
          be && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            tc,
            {
              items: r,
              pathname: a,
              size: N,
              motion: w,
              onNavigate: (X, ie) => n(X, ie)
            }
          ) }),
          fe && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            tc,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: ee,
              size: N,
              motion: w,
              onSelectRoot: (X) => {
                var ie, Be;
                Ne(X.key), X.path && (!X.children || X.children.length === 0) ? n(X.path, X) : (Be = (ie = X.children) == null ? void 0 : ie[0]) != null && Be.path && n(X.children[0].path, X.children[0]);
              },
              onNavigate: (X, ie) => n(X, ie)
            }
          ) }),
          (Le || Pe) && S.showBreadcrumb !== !1 && Z.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: p(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                M.breadcrumb
              ),
              children: Z.map((X, ie) => {
                const Be = ie === Z.length - 1;
                return /* @__PURE__ */ c(Ge.Fragment, { children: [
                  ie > 0 && /* @__PURE__ */ e(br, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: p(
                        "truncate",
                        Be && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: X.label
                    }
                  )
                ] }, X.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => P(!0),
              className: p(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                M.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(It, { className: M.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(ra, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          u,
          /* @__PURE__ */ e(Et, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (X) => I({ clientX: X.clientX, clientY: X.clientY }),
              className: p(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                M.iconBtn
              ),
              children: x === "dark" ? /* @__PURE__ */ e(La, { className: M.iconCls }) : /* @__PURE__ */ e(Da, { className: M.iconCls })
            }
          ) }),
          h && /* @__PURE__ */ e(Et, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => j(!0),
              className: p(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                M.iconBtn
              ),
              children: /* @__PURE__ */ e(ps, { className: M.iconCls })
            }
          ) }),
          i && /* @__PURE__ */ e(
            ca,
            {
              items: i.menuItems ?? [
                { key: "profile", label: `当前账号：${i.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(zb, { src: i.avatar, name: i.name, size: M.avatarSize }),
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
  ), We = /* @__PURE__ */ c("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !fe && Me,
    S.showTabs && /* @__PURE__ */ e(
      Sf,
      {
        tabs: H,
        activePath: a,
        variant: S.tabStyle ?? "card",
        size: N,
        motion: w,
        onSelect: (X) => n(X),
        onClose: Y,
        onTogglePin: (X) => te(
          (ie) => ie.map((Be) => Be.path === X ? { ...Be, pinned: !Be.pinned } : Be)
        ),
        onCloseOthers: (X) => te((ie) => ie.filter((Be) => Be.pinned || Be.path === X)),
        onCloseRight: (X) => {
          const ie = H.findIndex((Be) => Be.path === X);
          ie < 0 || te((Be) => Be.filter((Ze, He) => He <= ie || Ze.pinned));
        },
        onCloseAll: () => {
          const X = H.filter((ie) => ie.pinned);
          te(X), X[0] && X[0].path !== a && n(X[0].path);
        },
        onRefresh: (X) => V((ie) => ({ ...ie, [X]: (ie[X] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: ne,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ c(
          Ym,
          {
            enabled: B,
            content: Te,
            className: p(
              "min-h-full",
              S.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                If,
                {
                  activeKey: a,
                  enabled: S.keepAlive,
                  aliveKeys: H.map((X) => X.path),
                  scrollContainerRef: ne,
                  refreshSeed: K[a] ?? 0,
                  activeClassName: Lf[A],
                  children: C
                }
              ),
              S.showFooter && /* @__PURE__ */ c("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
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
  ] }), Ie = {
    "--abc-sidebar-w": S.sidebarWidth ? `${S.sidebarWidth}px` : void 0,
    "--abc-header-h": S.headerHeight ? `${S.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-size": N,
      "data-motion": w,
      style: Ie,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        fe && Me,
        /* @__PURE__ */ c("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          fe && $.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            bs,
            {
              items: $,
              pathname: a,
              collapsed: S.sidebarCollapsed,
              accordion: S.sidebarAccordion,
              tone: S.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (X, ie) => n(X, ie)
            }
          ) }),
          Le && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            bs,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: S.sidebarCollapsed,
              accordion: S.sidebarAccordion,
              tone: S.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (X, ie) => n(X, ie)
            }
          ) }),
          Pe && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            kf,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: S.sidebarTone,
              size: N,
              motion: w,
              onNavigate: (X, ie) => n(X, ie)
            }
          ) }),
          We
        ] }),
        /* @__PURE__ */ e(
          Wa,
          {
            open: U,
            onClose: () => R(!1),
            placement: "left",
            width: M.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              bs,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: N,
                motion: w,
                onNavigate: (X, ie) => {
                  n(X, ie), R(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          _f,
          {
            open: T,
            onClose: () => P(!1),
            menuItems: r,
            onNavigate: (X, ie) => n(X, ie),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: x === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => I()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => j(!0)
              },
              ...l
            ]
          }
        ),
        /* @__PURE__ */ e(
          sc,
          {
            open: W,
            onClose: () => j(!1),
            layoutSettings: S,
            onLayoutChange: z,
            onResetAll: () => E(_)
          }
        )
      ]
    }
  );
};
function Js() {
  const { permissionAdapter: t } = pt();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const Pf = ({
  permission: t,
  code: r,
  mode: a = "any",
  fallbackStrategy: n = "hide",
  disabledTip: s = "暂无操作权限",
  fallback: o,
  fallbackNode: d,
  children: i
}) => {
  var f;
  const { hasPermission: u } = Js(), l = t ?? r;
  if (!l) return /* @__PURE__ */ e(Ue, { children: i });
  if (u(l, a)) return /* @__PURE__ */ e(Ue, { children: i });
  if (n === "hide")
    return /* @__PURE__ */ e(Ue, { children: o ?? d ?? null });
  if (Ge.isValidElement(i)) {
    const v = i, m = Ge.cloneElement(v, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((f = v.props) == null ? void 0 : f.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(Et, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: m }) });
  }
  return null;
}, mh = Pf;
function li(t) {
  const { dictAdapter: r } = pt(), [a, n] = F([]), [s, o] = F(!1);
  return me(() => {
    if (!r || !t) {
      n([]);
      return;
    }
    let d = !0;
    const i = r(t);
    return i instanceof Promise ? (o(!0), i.then((u) => {
      d && n(u);
    }).finally(() => {
      d && o(!1);
    })) : n(i), () => {
      d = !1;
    };
  }, [r, t]), { options: a, loading: s };
}
const fh = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...d
}) => {
  const i = t ?? r ?? "", { options: u, loading: l } = li(i), b = oe(
    () => [...a, ...u, ...n],
    [a, u, n]
  );
  return /* @__PURE__ */ e(
    Ot,
    {
      options: b,
      placeholder: l && b.length === 0 ? "字典加载中..." : s,
      disabled: o || l && b.length === 0,
      ...d
    }
  );
}, ph = ({
  dictCode: t,
  dictKey: r,
  value: a,
  dot: n = !0,
  size: s,
  motion: o,
  emptyText: d = "-",
  fallbackTone: i = "neutral",
  className: u
}) => {
  const l = t ?? r ?? "", { options: b } = li(l);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: d });
  const f = b.find((v) => String(v.value) === String(a));
  return /* @__PURE__ */ e(
    Mr,
    {
      tone: (f == null ? void 0 : f.tone) ?? i,
      dot: n,
      size: s,
      motion: o,
      className: u,
      children: (f == null ? void 0 : f.label) ?? String(a)
    }
  );
}, oc = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, Bf = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: p("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(vn, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: p("grid gap-4", oc[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: p("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ c(
  "div",
  {
    className: p(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ c("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(vn, { children: /* @__PURE__ */ e("div", { className: p("grid gap-4", oc[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function lr(t) {
  if (!t || typeof t != "object" || !("code" in t)) return !1;
  const r = t.code;
  return r == null ? !1 : r !== 200 && r !== 0 && r !== "200" && r !== "0";
}
function _s(t, r) {
  const a = (t == null ? void 0 : t.data) ?? t, n = Array.isArray(a == null ? void 0 : a.records) ? a.records : Array.isArray(a == null ? void 0 : a.list) ? a.list : Array.isArray(t == null ? void 0 : t.list) ? t.list : Array.isArray(t == null ? void 0 : t.records) ? t.records : Array.isArray(a) ? a : [], s = r ? n.map(r) : n, o = typeof (a == null ? void 0 : a.total) == "number" ? a.total : typeof (t == null ? void 0 : t.total) == "number" ? t.total : n.length;
  return { list: s, total: o, raw: t };
}
function cc(t) {
  const r = { ...t };
  return Object.keys(r).forEach((a) => {
    const n = r[a];
    if (typeof n == "string") {
      const s = n.trim();
      s === "" ? delete r[a] : r[a] = s;
      return;
    }
    (n == null || Array.isArray(n) && n.length === 0) && delete r[a];
  }), r;
}
function Pn(t, r) {
  const a = typeof t == "function" ? { list: t, ...r } : t;
  return {
    list: async (n) => {
      const { pageNum: s, page: o, pageSize: d, ...i } = n || {}, u = s ?? o, l = a.defaultParams || a.params;
      let b = {
        ...u !== void 0 ? { pageNo: u, pageNum: u } : {},
        ...d !== void 0 ? { pageSize: d } : {},
        ...l,
        ...i
      };
      (u !== void 0 && !("pageNum" in (n || {})) || u !== void 0) && delete b.pageNum, a.transformQuery && (b = a.transformQuery(b)), b = cc(b);
      const f = await a.list(b);
      if (lr(f))
        return f;
      const v = _s(f, a.transformRecord);
      return {
        ...f && typeof f == "object" && !Array.isArray(f) ? f : {},
        list: v.list,
        total: v.total
      };
    },
    delete: a.delete ? async (n) => {
      try {
        return await a.delete({ ids: n });
      } catch {
        return await a.delete(n);
      }
    } : void 0,
    export: a.export ? async (n) => {
      const { pageNum: s, page: o, pageSize: d, ...i } = n || {}, u = a.defaultParams || a.params, l = cc({
        ...u,
        ...i
      }), b = await a.export(l);
      if (typeof window > "u" || typeof document > "u")
        return b;
      const f = b instanceof Blob ? b : new Blob([b], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }), v = window.URL.createObjectURL(f), m = document.createElement("a"), h = /* @__PURE__ */ new Date(), g = (C) => String(C).padStart(2, "0"), y = `${h.getFullYear()}${g(h.getMonth() + 1)}${g(h.getDate())}_${g(
        h.getHours()
      )}${g(h.getMinutes())}${g(h.getSeconds())}`;
      return m.href = v, m.download = `${a.exportFileName || "数据导出"}_${y}.xlsx`, document.body.appendChild(m), m.click(), m.remove(), window.URL.revokeObjectURL(v), b;
    } : void 0,
    get: a.get,
    view: a.view,
    children: a.children,
    create: a.create || a.add,
    add: a.add || a.create,
    update: a.update || a.edit,
    edit: a.edit || a.update
  };
}
const hh = Pn;
function jf(t, r = []) {
  const a = ce(t);
  return a.current = t, oe(() => Pn(a.current), [r]);
}
const vh = jf;
function Rf(t, r = []) {
  const [a, n] = F(0), s = ce(null), [o, d] = F([]), i = de(() => d([]), []), u = ce(t);
  u.current = t;
  const l = de(() => {
    s.current ? s.current(!1) : n((m) => m + 1);
  }, []), b = de(() => {
    d([]), s.current ? s.current(!0) : n((m) => m + 1);
  }, []), f = oe(() => Pn(u.current), [a, ...r]);
  return {
    tableProps: oe(
      () => ({
        api: f,
        onRefreshRef: s,
        selectedRowKeys: o,
        onRowSelectionChange: d
      }),
      [f, o]
    ),
    api: f,
    refresh: l,
    reload: b,
    refreshKey: a,
    selectedRowKeys: o,
    setSelectedRowKeys: d,
    clearSelection: i
  };
}
const gh = Rf;
function di(t, r) {
  var a, n;
  if (!t || typeof t != "object") return !1;
  try {
    const s = typeof t.shape == "function" ? t.shape() : t.shape ?? ((n = (a = t._def) == null ? void 0 : a.shape) == null ? void 0 : n.call(a)), o = s == null ? void 0 : s[r];
    if (!o) return !1;
    const d = typeof o.isOptional == "function" ? !!o.isOptional() : !1, i = typeof o.isNullable == "function" ? !!o.isNullable() : !1;
    return !d && !i;
  } catch {
    return !1;
  }
}
const xh = di;
function ia(t) {
  return String(t.key ?? t.name ?? "");
}
function zf({
  defaultValues: t,
  schema: r,
  fields: a = [],
  onValuesChange: n
} = {}) {
  const s = ce(t ?? {});
  s.current = t ?? {};
  const o = ce(a);
  o.current = a;
  const d = ce(r);
  d.current = r;
  const i = ce(n);
  i.current = n;
  const u = ce({ ...t ?? {} }), l = ce({}), b = ce(!1), [, f] = F(0), v = ce(/* @__PURE__ */ new Set()), m = de((N) => {
    var M;
    f((_) => _ + 1);
    const w = { ...u.current };
    (M = i.current) == null || M.call(i, w, N), v.current.forEach((_) => _(w, { name: N }));
  }, []), h = de((N) => N === void 0 ? { ...u.current } : N.includes(".") ? Dn(u.current, N) : u.current[N], []), g = de(
    (N, w) => {
      if (u.current = {
        ...u.current,
        [N]: w
      }, b.current = !0, l.current[N]) {
        const M = { ...l.current };
        delete M[N], l.current = M;
      }
      m(N);
    },
    [m]
  ), y = de((N) => typeof N == "function" ? (v.current.add(N), {
    unsubscribe: () => {
      v.current.delete(N);
    }
  }) : N === void 0 ? { ...u.current } : Array.isArray(N) ? N.map((w) => u.current[w]) : u.current[N], []), C = de((N) => {
    u.current = {
      ...s.current ?? {},
      ...N ?? {}
    }, l.current = {}, b.current = !1, f((w) => w + 1);
  }, []), x = de((N, w) => {
    l.current = {
      ...l.current,
      [N]: w
    }, f((M) => M + 1);
  }, []), I = de((N) => {
    if (!N)
      l.current = {};
    else if (Array.isArray(N)) {
      const w = { ...l.current };
      N.forEach((M) => delete w[M]), l.current = w;
    } else {
      const w = { ...l.current };
      delete w[N], l.current = w;
    }
    f((w) => w + 1);
  }, []), A = de(() => {
    var S, E;
    const N = { ...u.current }, w = {};
    for (const z of o.current) {
      const U = ia(z);
      if (!U) continue;
      const R = N[U], T = R == null || typeof R == "string" && R.trim() === "" || Array.isArray(R) && R.length === 0;
      if (z.required && T) {
        w[U] = { type: "required", message: `请填写${z.label}` };
        continue;
      }
      if (z.validator) {
        const P = z.validator(R, N);
        P && (w[U] = { type: "validate", message: P });
      }
    }
    let M = N;
    const _ = d.current;
    if (_ && typeof _.safeParse == "function") {
      const z = _.safeParse(N);
      if (z.success)
        z.data && typeof z.data == "object" && (M = { ...N, ...z.data });
      else {
        const U = ((S = z.error) == null ? void 0 : S.issues) ?? ((E = z.error) == null ? void 0 : E.errors) ?? [];
        for (const R of U) {
          const T = Array.isArray(R.path) && R.path.length > 0 ? String(R.path[0]) : "";
          T && !w[T] && (w[T] = {
            type: "schema",
            message: R.message || "字段格式不正确"
          });
        }
      }
    }
    return l.current = w, f((z) => z + 1), {
      valid: Object.keys(w).length === 0,
      data: M
    };
  }, []), B = de(async () => A().valid, [A]), L = de(
    (N) => async (w) => {
      var S;
      (S = w == null ? void 0 : w.preventDefault) == null || S.call(w);
      const { valid: M, data: _ } = A();
      M && await N(_);
    },
    [A]
  );
  return {
    getValues: h,
    setValue: g,
    watch: y,
    reset: C,
    setError: x,
    clearErrors: I,
    trigger: B,
    handleSubmit: L,
    formState: {
      errors: l.current,
      isDirty: b.current
    }
  };
}
function $f(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const ui = ({
  value: t,
  disabled: r = !1,
  maxCount: a = 9,
  customUpload: n,
  onChange: s
}) => {
  const { uploadAdapter: o, toast: d } = pt(), [i, u] = F(!1), l = oe(() => Array.isArray(t) ? t.filter(Boolean) : String(t || "").split(",").map((v) => v.trim()).filter(Boolean), [t]), b = async (v) => {
    const m = v.target.files;
    if (!m || m.length === 0 || r || i) return;
    const h = [...l];
    u(!0);
    try {
      for (let g = 0; g < m.length; g++) {
        if (h.length >= a) {
          d.error(`最多支持上传 ${a} 张图片`);
          break;
        }
        const y = m[g];
        let C = "";
        if (n) {
          const x = await n(y);
          C = typeof x == "string" ? x : (x == null ? void 0 : x.url) || "";
        } else o ? C = await o(y) : C = await $f(y);
        C && h.push(C);
      }
      s(h.join(","));
    } catch (g) {
      d.error((g == null ? void 0 : g.message) || "上传图片失败");
    } finally {
      u(!1), v.target.value = "";
    }
  }, f = (v) => {
    if (r) return;
    const m = l.filter((h, g) => g !== v);
    s(m.join(","));
  };
  return /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-3", children: [
    l.map((v, m) => /* @__PURE__ */ c(
      "div",
      {
        className: "group relative h-24 w-24 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        children: [
          /* @__PURE__ */ e(Fa, { src: v, width: 96, height: 96, className: "h-full w-full object-cover" }),
          !r && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => f(m),
              "aria-label": "移除图片",
              title: "移除图片",
              className: "absolute top-1 right-1 rounded-full bg-[var(--abc-danger)]/90 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
              children: /* @__PURE__ */ e(gr, { className: "h-3 w-3" })
            }
          )
        ]
      },
      `${v}-${m}`
    )),
    l.length < a && !r && /* @__PURE__ */ c("label", { className: "flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]", children: [
      i ? /* @__PURE__ */ e(rr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(Sn, { className: "h-5 w-5" }),
      /* @__PURE__ */ e("span", { className: "text-[11px]", children: i ? "上传中..." : `上传(${l.length}/${a})` }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "file",
          accept: "image/*",
          multiple: !0,
          className: "hidden",
          disabled: i,
          onChange: b
        }
      )
    ] })
  ] });
}, yh = ui, Of = ({
  value: t,
  disabled: r = !1,
  placeholder: a,
  presetIcons: n,
  onChange: s
}) => {
  const [o, d] = F(!1);
  return !n || n.length === 0 ? /* @__PURE__ */ e(
    Ho,
    {
      value: t,
      disabled: r,
      placeholder: a,
      onChange: s
    }
  ) : /* @__PURE__ */ c("div", { className: "space-y-2", children: [
    /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(dr, { name: t || "Sparkles", size: 16 }) }),
      /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
        Qe,
        {
          placeholder: a || "输入或从右侧选择图标",
          disabled: r,
          value: t || "",
          onChange: (i) => s(i.target.value)
        }
      ) }),
      /* @__PURE__ */ e(
        xe,
        {
          type: "button",
          variant: "secondary",
          size: "sm",
          disabled: r,
          onClick: () => d(!0),
          children: "打开图标库"
        }
      )
    ] }),
    /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
      /* @__PURE__ */ e("span", { className: "mr-1 text-[11px] text-[var(--abc-fg-muted)]", children: "常用推荐:" }),
      n.map((i) => /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          disabled: r,
          onClick: () => s(i),
          className: p(
            "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border px-2 py-1 text-[11px] transition-colors cursor-pointer",
            t === i ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            /* @__PURE__ */ e(dr, { name: i, size: 12 }),
            /* @__PURE__ */ e("span", { children: i })
          ]
        },
        i
      ))
    ] }),
    /* @__PURE__ */ e(
      Ho,
      {
        open: o,
        current: t,
        onClose: () => d(!1),
        onSelect: s
      }
    )
  ] });
};
function Ff({
  field: t,
  form: r,
  isEdit: a,
  editingRecord: n
}) {
  const s = ia(t);
  if ((typeof t.hidden == "function" ? t.hidden(a, r) : !!t.hidden) || t.formGroup === "hidden") return null;
  if (t.type === "custom" && t.render)
    return /* @__PURE__ */ e(Ue, { children: t.render(r, a) });
  const d = typeof t.disabled == "function" ? t.__fromFieldSchema ? t.disabled(n) : t.disabled(a, r) : !!t.disabled, i = r.getValues(s), u = (l) => {
    var b;
    r.setValue(s, l), (b = t.onChange) == null || b.call(t, l, r);
  };
  switch (t.type) {
    case "number":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        Vs,
        {
          disabled: d,
          min: t.min,
          max: t.max,
          step: t.step,
          value: i ?? null,
          placeholder: t.placeholder,
          onChange: u
        }
      ) : /* @__PURE__ */ e(
        Qe,
        {
          type: "number",
          disabled: d,
          min: t.min,
          max: t.max,
          step: t.step,
          prefix: t.prefix,
          suffix: t.suffix,
          maxLength: t.maxLength,
          value: i ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          clearable: t.clearable !== !1,
          onChange: (l) => {
            const b = l.target.value, f = b === "" ? "" : /^-?\d*\.\d*0$/.test(b) || b === "-" || Number.isNaN(Number(b)) ? b : Number(b);
            u(f);
          }
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        Qe,
        {
          type: "password",
          disabled: d,
          maxLength: t.maxLength,
          value: i ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (l) => u(l.target.value)
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        $a,
        {
          rows: t.rows || 3,
          disabled: d,
          maxLength: t.maxLength,
          value: i ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (l) => u(l.target.value)
        }
      );
    case "select":
    case "radio":
    case "checkbox": {
      const l = typeof t.options == "function" ? t.options(r, a) : t.options ?? [];
      if (t.type === "radio" || t.type === "checkbox")
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 py-1", children: l.map((f) => /* @__PURE__ */ c(
          "label",
          {
            className: p(
              "inline-flex items-center gap-1.5 text-xs text-[var(--abc-fg-secondary)] select-none",
              d || f.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: t.type === "radio" ? "radio" : "checkbox",
                  disabled: d || f.disabled,
                  checked: t.type === "radio" ? String(i ?? "") === String(f.value) : Array.isArray(i) && i.map(String).includes(String(f.value)),
                  onChange: (v) => {
                    if (t.type === "radio") {
                      u(f.value);
                      return;
                    }
                    const m = Array.isArray(i) ? [...i] : [], h = v.target.checked ? [...m, f.value] : m.filter((g) => String(g) !== String(f.value));
                    u(h);
                  }
                }
              ),
              /* @__PURE__ */ e("span", { children: f.label })
            ]
          },
          String(f.value)
        )) });
      const b = l.map((f) => ({
        label: f.label,
        value: typeof f.value == "boolean" ? String(f.value) : f.value,
        disabled: f.disabled
      }));
      return /* @__PURE__ */ e(
        Ot,
        {
          value: i ?? (t.multiple ? [] : ""),
          disabled: d,
          searchable: t.searchable ?? !0,
          multiple: t.multiple,
          options: b,
          placeholder: t.placeholder || `请选择${t.label}`,
          allowClear: t.clearable !== !1,
          onChange: (f) => {
            const v = f && typeof f == "object" && "target" in f ? f.target.value : f;
            u(v);
          }
        }
      );
    }
    case "switch":
      return /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2 py-1", children: [
        /* @__PURE__ */ e(
          Gt,
          {
            disabled: d,
            checked: !!i,
            onChange: (l) => u(l)
          }
        ),
        (t.checkedChildren || t.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: i ? t.checkedChildren : t.unCheckedChildren })
      ] });
    case "date":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        An,
        {
          disabled: d,
          value: i ?? "",
          placeholder: t.placeholder,
          onChange: u
        }
      ) : /* @__PURE__ */ e(
        Qe,
        {
          type: "date",
          disabled: d,
          value: i ?? "",
          onChange: (l) => u(l.target.value)
        }
      );
    case "datetime":
    case "datetimePicker":
      return /* @__PURE__ */ e(
        Qe,
        {
          type: "datetime-local",
          disabled: d,
          value: i ? String(i).replace(" ", "T").slice(0, 16) : "",
          onChange: (l) => {
            const b = l.target.value;
            u(b ? `${b.replace("T", " ")}:00` : "");
          }
        }
      );
    case "dateRange": {
      if (t.__fromFieldSchema)
        return /* @__PURE__ */ e(
          Ln,
          {
            disabled: d,
            value: i ?? null,
            onChange: u
          }
        );
      const l = Array.isArray(i) ? i : ["", ""];
      return /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          Qe,
          {
            type: "date",
            disabled: d,
            value: l[0] || "",
            onChange: (b) => u([b.target.value, l[1] || ""])
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "至" }),
        /* @__PURE__ */ e(
          Qe,
          {
            type: "date",
            disabled: d,
            value: l[1] || "",
            onChange: (b) => u([l[0] || "", b.target.value])
          }
        )
      ] });
    }
    case "color":
      return /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            disabled: d,
            value: i || "#2563eb",
            onChange: (l) => u(l.target.value),
            className: "h-8.5 w-11 shrink-0 cursor-pointer rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5"
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
          Qe,
          {
            type: "text",
            disabled: d,
            value: i ?? "",
            placeholder: t.placeholder || "#2563eb",
            onChange: (l) => u(l.target.value)
          }
        ) })
      ] });
    case "icon":
      return /* @__PURE__ */ e(
        Of,
        {
          value: i ? String(i) : "",
          disabled: d,
          placeholder: t.placeholder,
          presetIcons: t.presetIcons,
          onChange: u
        }
      );
    case "tags":
      return /* @__PURE__ */ e(
        Sm,
        {
          disabled: d,
          value: Array.isArray(i) ? i : [],
          placeholder: t.placeholder,
          onChange: u
        }
      );
    case "image": {
      const l = t.customUpload ? async (b) => {
        const f = await t.customUpload(b);
        return typeof f == "string" ? f : (f == null ? void 0 : f.url) || "";
      } : void 0;
      return t.multiple ? /* @__PURE__ */ e(
        ui,
        {
          value: i ?? "",
          disabled: d,
          maxCount: t.maxCount,
          customUpload: t.customUpload,
          onChange: u
        }
      ) : /* @__PURE__ */ e(
        Vc,
        {
          value: i ? String(i) : "",
          disabled: d,
          maxSizeMB: t.maxSize,
          customUpload: l,
          onChange: u
        }
      );
    }
    case "text":
    case "input":
    default:
      return /* @__PURE__ */ e(
        Qe,
        {
          type: "text",
          disabled: d,
          maxLength: t.maxLength,
          value: i ?? "",
          placeholder: t.placeholder ?? (t.__fromFieldSchema ? void 0 : `请输入${t.label}`),
          clearable: t.__fromFieldSchema ? void 0 : t.clearable !== !1,
          onChange: (l) => u(l.target.value)
        }
      );
  }
}
function bi({
  layout: t = "grid",
  columnsCount: r = 2,
  fields: a,
  isEdit: n,
  form: s,
  errors: o = {},
  formSchema: d,
  columns: i = [],
  isFieldRequired: u = di,
  renderFormField: l
}) {
  const b = (v) => v.formGroup === "hidden" ? !0 : typeof v.hidden == "function" && s ? !!v.hidden(n, s) : !!v.hidden, f = (v) => {
    const m = ia(v), h = !!(v.required || u(d, m)), g = o[m], y = typeof g == "string" ? g : g == null ? void 0 : g.message, C = i.find((I) => {
      const A = Array.isArray(I.dataIndex) ? I.dataIndex[0] : I.dataIndex ?? I.key;
      return String(A) === m;
    }), x = v.tooltip ?? (C == null ? void 0 : C.tooltip);
    return /* @__PURE__ */ e(
      qs,
      {
        label: v.label,
        required: h,
        tooltip: x,
        helperText: v.helperText,
        error: y,
        children: l(v)
      },
      m
    );
  };
  if (t === "split") {
    const v = a.filter((x) => !b(x)), m = v.filter((x) => x.formGroup === "top"), h = v.filter((x) => {
      const I = x.formGroup || "left";
      return I === "left" || I === "full";
    }), g = v.filter((x) => x.formGroup === "right"), y = v.filter((x) => x.formGroup === "bottom"), C = v.filter((x) => x.formGroup === "extra");
    return /* @__PURE__ */ c("div", { className: "space-y-4", children: [
      m.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: m.map((x) => f(x)) }),
      /* @__PURE__ */ c(
        "div",
        {
          className: p(
            "grid grid-cols-1 gap-5",
            g.length > 0 && "md:grid-cols-2"
          ),
          children: [
            /* @__PURE__ */ e("div", { className: "space-y-3.5", children: h.map((x) => f(x)) }),
            g.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: g.map((x) => f(x)) })
          ]
        }
      ),
      y.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: y.map((x) => f(x)) }),
      C.length > 0 && /* @__PURE__ */ e("div", { className: "mt-4 space-y-3.5 border-t border-[var(--abc-border)] pt-4", children: C.map((x) => f(x)) })
    ] });
  }
  return /* @__PURE__ */ e(
    "div",
    {
      className: p(
        "grid gap-3.5",
        r === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      ),
      children: a.map((v) => {
        if (b(v)) return null;
        const m = ia(v), h = r === 2 && (v.span === 2 || v.formGroup === "full" || v.__fromFieldSchema && v.type === "textarea");
        return /* @__PURE__ */ e("div", { className: h ? "col-span-1 sm:col-span-2" : "col-span-1", children: f(v) }, m);
      })
    }
  );
}
const wh = bi;
function Wf({
  open: t,
  onClose: r,
  isEdit: a,
  currentRecord: n,
  container: s = "dialog",
  dialogTitle: o,
  dialogSize: d,
  formLayout: i = "grid",
  formColumns: u = 2,
  formFields: l,
  form: b,
  formSchema: f,
  columns: v,
  formSubmitting: m,
  formDetailLoading: h,
  formError: g,
  onSubmit: y,
  draftEnabled: C = !1,
  showDraftButton: x = !1,
  showDraftBanner: I = !1,
  draftBannerMode: A = "prompt",
  onSaveDraft: B,
  onRestoreDraft: L,
  onDiscardDraft: N,
  submitButtonText: w = "保存",
  renderFormExtra: M,
  renderCustomForm: _,
  onSuccessFetch: S
}) {
  if (_)
    return /* @__PURE__ */ e(Ue, { children: _({
      open: t,
      onClose: r,
      record: n,
      isEdit: a,
      onSuccess: () => {
        r(), S == null || S();
      }
    }) });
  const E = a ? (o == null ? void 0 : o.edit) || "编辑" : (o == null ? void 0 : o.add) || "新增", z = d ?? (u === 2 ? "lg" : "md"), U = /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-2.5", children: [
    C && x && B && /* @__PURE__ */ e(xe, { variant: "secondary", size: "sm", type: "button", onClick: B, children: "保存草稿" }),
    !a && I && A === "auto-restored" && N && /* @__PURE__ */ e(xe, { variant: "ghost", size: "sm", type: "button", onClick: N, children: "清空草稿" }),
    /* @__PURE__ */ e(xe, { variant: "secondary", size: "sm", type: "button", onClick: r, disabled: m, children: "取消" }),
    /* @__PURE__ */ e(xe, { variant: "primary", size: "sm", type: "button", loading: m, onClick: y, children: w })
  ] }), R = /* @__PURE__ */ c("form", { onSubmit: y, className: "space-y-3.5 py-1", children: [
    h && /* @__PURE__ */ c("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
      /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
      /* @__PURE__ */ e("span", { children: "正在同步最新完整数据..." })
    ] }),
    g && /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-3 py-2 text-xs text-[var(--abc-danger)]", children: g }),
    I && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-fg)]", children: [
      /* @__PURE__ */ e("span", { children: A === "auto-restored" ? "已自动为您恢复上次未提交的本地表单草稿" : "检测到未提交的草稿" }),
      /* @__PURE__ */ c("span", { className: "inline-flex shrink-0 items-center gap-2.5", children: [
        A === "prompt" && L && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: L,
            className: "font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
            children: "恢复"
          }
        ),
        N && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: N,
            className: "font-medium text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] hover:underline cursor-pointer",
            children: A === "auto-restored" ? "丢弃草稿" : "丢弃"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      bi,
      {
        layout: i,
        columnsCount: u,
        fields: l,
        isEdit: a,
        form: b,
        errors: b.formState.errors,
        formSchema: f,
        columns: v,
        renderFormField: (T) => /* @__PURE__ */ e(
          Ff,
          {
            field: T,
            form: b,
            isEdit: a,
            editingRecord: n
          }
        )
      }
    ),
    M == null ? void 0 : M(b, a)
  ] });
  if (s === "drawer") {
    const P = ["xs", "sm", "md", "lg", "xl", "2xl"].includes(z) ? z : "lg";
    return /* @__PURE__ */ e(
      Wa,
      {
        open: t,
        onClose: r,
        title: E,
        size: P,
        footer: U,
        children: R
      }
    );
  }
  return /* @__PURE__ */ e(
    Xt,
    {
      open: t,
      onClose: r,
      title: E,
      size: z,
      footer: U,
      children: R
    }
  );
}
const Hf = {
  green: "success",
  emerald: "success",
  red: "danger",
  rose: "danger",
  yellow: "warning",
  amber: "warning",
  orange: "warning",
  blue: "info",
  cyan: "info",
  purple: "info",
  gray: "neutral",
  slate: "neutral"
};
function Kf({
  open: t,
  onClose: r,
  record: a,
  columns: n,
  viewTitle: s = "详情",
  viewSize: o = "lg",
  viewLoading: d = !1,
  canEdit: i = !1,
  onEditRecord: u,
  renderViewExtra: l,
  renderViewFooter: b
}) {
  const f = typeof s == "function" ? a ? s(a) : "详情" : s;
  return /* @__PURE__ */ c(
    Xt,
    {
      open: t,
      onClose: r,
      title: f,
      size: o,
      footer: b && a ? b(a, r) : /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-2", children: [
        a && i && u && /* @__PURE__ */ e(
          xe,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => {
              const v = a;
              r(), u(v);
            },
            children: "编辑此记录"
          }
        ),
        /* @__PURE__ */ e(xe, { variant: "primary", size: "sm", onClick: r, children: "关闭" })
      ] }),
      children: [
        d && /* @__PURE__ */ c("div", { className: "mb-3 flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
          /* @__PURE__ */ e(rr, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
          /* @__PURE__ */ e("span", { children: "正在更新详细数据..." })
        ] }),
        a && /* @__PURE__ */ c("div", { className: "space-y-4 py-1", children: [
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-3 text-xs md:grid-cols-2", children: n.map((v) => {
            if (v.view === !1 || v.key === "actions" || v.key === "__actions__" || v.key === "__abc_actions__" || v.key === "__drag_handle__")
              return null;
            const m = Dn(a, v.dataIndex ?? v.key), h = typeof v.type == "object" ? v.type : void 0, g = (h == null ? void 0 : h.options) ?? v.options, y = g && m !== void 0 && m !== null && m !== "" ? g.find((x) => String(x.value) === String(m)) : void 0;
            let C;
            if (v.viewRender)
              C = v.viewRender(m, a);
            else if (v.render)
              C = v.render(m, a, 0);
            else if (y) {
              const x = y.color ? Hf[y.color] : void 0;
              C = /* @__PURE__ */ e(Mr, { status: y.status ?? x, dot: !0, children: y.label });
            } else (v.type === "image" || (h == null ? void 0 : h.type) === "image" || v.valueType === "image") && m ? C = /* @__PURE__ */ e(Fa, { src: String(m), width: 56, height: 56 }) : C = m == null || m === "" ? "-" : String(m);
            return /* @__PURE__ */ c(
              "div",
              {
                className: p(
                  "flex flex-col gap-1 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 p-3",
                  v.viewSpan === 2 && "md:col-span-2"
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "font-semibold text-[var(--abc-fg-muted)]", children: v.title }),
                  /* @__PURE__ */ e("div", { className: "font-medium break-all text-[var(--abc-fg)]", children: C })
                ]
              },
              v.key
            );
          }) }),
          l == null ? void 0 : l(a)
        ] })
      ]
    }
  );
}
function Nh({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = pt(), [d, i] = F(r), [u, l] = F(!1), [b, f] = F({});
  me(() => {
    i(r);
  }, [r]);
  const v = (h, g) => {
    i((y) => ({ ...y, [h]: g })), b[h] && f((y) => {
      const C = { ...y };
      return delete C[h], C;
    });
  };
  return /* @__PURE__ */ c("form", { onSubmit: async (h) => {
    h.preventDefault();
    const g = {};
    for (const y of t)
      for (const C of y.fields)
        if (C.required) {
          const x = d[C.name];
          (x == null || String(x).trim() === "") && (g[C.name] = `请填写${C.label}`);
        }
    if (Object.keys(g).length > 0) {
      f(g), o.warning("请完善必填配置项后再提交");
      return;
    }
    l(!0);
    try {
      await n(d), o.success("配置已保存生效");
    } catch (y) {
      o.error((y == null ? void 0 : y.message) || "保存失败");
    } finally {
      l(!1);
    }
  }, className: "space-y-6", children: [
    /* @__PURE__ */ e(
      Bf,
      {
        mode: a,
        sections: t.map((h) => ({
          key: h.key,
          title: h.title,
          description: h.description,
          columns: h.columns ?? 1,
          children: h.fields.map((g) => {
            const y = d[g.name], C = b[g.name], x = g.type ?? "text";
            return /* @__PURE__ */ e(
              qs,
              {
                label: g.label,
                required: g.required,
                helperText: g.helperText,
                error: C,
                children: x === "switch" ? /* @__PURE__ */ e(
                  Gt,
                  {
                    checked: !!y,
                    onChange: (I) => v(g.name, I)
                  }
                ) : x === "number" ? /* @__PURE__ */ e(
                  Vs,
                  {
                    value: y ?? null,
                    placeholder: g.placeholder,
                    invalid: !!C,
                    onChange: (I) => v(g.name, I)
                  }
                ) : x === "textarea" ? /* @__PURE__ */ e(
                  $a,
                  {
                    value: y ?? "",
                    placeholder: g.placeholder,
                    invalid: !!C,
                    onChange: (I) => v(g.name, I.target.value)
                  }
                ) : x === "select" ? /* @__PURE__ */ e(
                  Ot,
                  {
                    options: g.options ?? [],
                    value: y ?? "",
                    placeholder: g.placeholder,
                    invalid: !!C,
                    onChange: (I) => v(g.name, I)
                  }
                ) : x === "image" ? g.allowDirectUrlInput !== !1 ? /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    Fa,
                    {
                      src: String(y ?? ""),
                      alt: g.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    Qe,
                    {
                      allowClear: !0,
                      value: y ?? "",
                      placeholder: g.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (I) => v(g.name, I.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  Vc,
                  {
                    value: String(y ?? ""),
                    onChange: (I) => v(g.name, I)
                  }
                ) : /* @__PURE__ */ e(
                  Qe,
                  {
                    type: x === "password" ? "password" : "text",
                    allowClear: !0,
                    value: y ?? "",
                    placeholder: g.placeholder,
                    invalid: !!C,
                    onChange: (I) => v(g.name, I.target.value)
                  }
                )
              },
              g.name
            );
          })
        }))
      }
    ),
    /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4", children: [
      /* @__PURE__ */ e(
        xe,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            i(r), f({}), o.info("已还原初始配置值");
          },
          children: "重置更改"
        }
      ),
      /* @__PURE__ */ e(
        xe,
        {
          type: "submit",
          variant: "primary",
          loading: u,
          icon: /* @__PURE__ */ e(Sc, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
function Uf({
  title: t,
  subTitle: r,
  permission: a,
  hasPermission: n,
  customUpload: s,
  saveButtonText: o = "保存当前配置",
  defaultValues: d,
  fetchConfig: i,
  saveConfig: u,
  transformBeforeSave: l,
  tabs: b
}) {
  var W;
  const { toast: f, uploadAdapter: v } = pt(), { hasPermission: m } = Js(), [h, g] = F(((W = b[0]) == null ? void 0 : W.key) || ""), [y, C] = F(!1), [x, I] = F(!1), [A, B] = F(!1), [L, N] = F(null), [w, M] = F(d), _ = ce(null);
  me(() => () => {
    _.current !== null && typeof window < "u" && window.clearTimeout(_.current);
  }, []);
  const S = de(async () => {
    C(!0);
    try {
      const j = await i();
      if (lr(j) && !(j != null && j.data)) {
        f.error((j == null ? void 0 : j.msg) || "获取配置数据失败");
        return;
      }
      const K = j != null && j.data && typeof j.data == "object" ? j.data : j;
      K && typeof K == "object" && M((V) => ({ ...V, ...K }));
    } catch {
      f.error("获取配置数据失败");
    } finally {
      C(!1);
    }
  }, [i, f]);
  me(() => {
    S();
  }, [S]);
  const E = de((j, K) => {
    M((V) => ({ ...V, [j]: K }));
  }, []), z = async () => {
    I(!0);
    try {
      const j = l ? l(w) : w, K = await u(j);
      if (lr(K)) {
        f.error((K == null ? void 0 : K.msg) || "保存配置失败");
        return;
      }
      B(!0), f.success("配置保存成功"), typeof window < "u" && (_.current !== null && window.clearTimeout(_.current), _.current = window.setTimeout(() => {
        B(!1), _.current = null;
      }, 3e3));
    } catch {
      f.error("保存配置失败");
    } finally {
      I(!1);
    }
  }, U = b.find((j) => j.key === h) || b[0], R = a ? n ? n(a) : m(a) : !0, T = async (j, K) => {
    N(j);
    try {
      let V;
      if (s) {
        const ne = await s(K);
        V = typeof ne == "string" ? ne : ne == null ? void 0 : ne.url;
      } else v && (V = await v(K));
      V && E(j, V);
    } catch (V) {
      f.error((V == null ? void 0 : V.message) || "图片上传失败");
    } finally {
      N(null);
    }
  }, P = (j) => {
    const K = w[j.key], V = j.type || "input";
    if (V === "custom" && j.render)
      return j.render(w, E, M);
    switch (V) {
      case "switch":
        return /* @__PURE__ */ e(
          Gt,
          {
            checked: !!K,
            onChange: (ne) => E(j.key, ne)
          }
        );
      case "radio":
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-4 pt-0.5", children: (j.options || []).map((ne) => {
          const H = typeof ne.value == "number" ? Number(K) === ne.value : String(K ?? "") === String(ne.value);
          return /* @__PURE__ */ c(
            "label",
            {
              className: "flex cursor-pointer items-center gap-2 text-sm text-[var(--abc-fg-secondary)]",
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "radio",
                    name: j.key,
                    checked: H,
                    onChange: () => E(j.key, ne.value)
                  }
                ),
                ne.label
              ]
            },
            String(ne.value)
          );
        }) });
      case "checkbox-csv": {
        const ne = new Set(
          String(K || "").split(",").filter(Boolean)
        );
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 pt-0.5 text-xs text-[var(--abc-fg-secondary)]", children: (j.options || []).map((H) => {
          const te = String(H.value), Z = ne.has(te), re = !!H.locked;
          return /* @__PURE__ */ c(
            "label",
            {
              className: p(
                "flex items-center gap-1.5",
                re ? "cursor-not-allowed opacity-75" : "cursor-pointer"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    disabled: re,
                    checked: Z || re,
                    onChange: () => {
                      if (re) return;
                      const ee = new Set(ne);
                      ee.has(te) ? ee.delete(te) : ee.add(te), E(j.key, Array.from(ee).join(","));
                    }
                  }
                ),
                /* @__PURE__ */ e("span", { children: H.label })
              ]
            },
            te
          );
        }) });
      }
      case "select":
        return /* @__PURE__ */ e(
          Ot,
          {
            value: K ?? "",
            options: j.options || [],
            onChange: (ne) => {
              const H = ne && typeof ne == "object" && "target" in ne ? ne.target.value : ne;
              E(j.key, H);
            }
          }
        );
      case "textarea":
        return /* @__PURE__ */ e(
          $a,
          {
            rows: j.rows || 4,
            value: K || "",
            onChange: (ne) => E(j.key, ne.target.value),
            placeholder: j.placeholder,
            className: j.className
          }
        );
      case "image-url": {
        const ne = j.previewShape === "circle", H = !!(j.allowUpload && (s || v));
        return /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(
            Fa,
            {
              src: K ? String(K) : void 0,
              alt: j.label,
              width: ne ? 44 : 40,
              height: ne ? 44 : 40,
              rounded: ne,
              className: p(
                "shrink-0 overflow-hidden border border-[var(--abc-border)] shadow-2xs",
                ne ? "rounded-full" : "rounded-[var(--abc-radius-lg)]"
              )
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
            Qe,
            {
              value: K || "",
              onChange: (te) => E(j.key, te.target.value),
              placeholder: j.placeholder || "请输入图片完整直链 URL 或 SVG 矢量代码"
            }
          ) }),
          H && /* @__PURE__ */ c("label", { className: "inline-flex shrink-0 cursor-pointer", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (te) => {
                  var re;
                  const Z = (re = te.target.files) == null ? void 0 : re[0];
                  Z && T(j.key, Z), te.target.value = "";
                }
              }
            ),
            /* @__PURE__ */ c("span", { className: "inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]", children: [
              /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ e("span", { children: L === j.key ? "上传中..." : "上传" })
            ] })
          ] })
        ] });
      }
      case "password":
      case "number":
      case "input":
      default:
        return /* @__PURE__ */ e(
          Qe,
          {
            type: V === "password" ? "password" : V === "number" ? "number" : "text",
            value: K ?? "",
            onChange: (ne) => E(j.key, ne.target.value),
            placeholder: j.placeholder,
            className: j.className
          }
        );
    }
  };
  return /* @__PURE__ */ c("div", { className: "space-y-6", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-4 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-[var(--abc-shadow-card)]", children: [
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-bold text-[var(--abc-fg)]", children: t }),
        r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
      ] }),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
        A && /* @__PURE__ */ c("span", { className: "flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-success)]", children: [
          /* @__PURE__ */ e(xc, { className: "h-4 w-4" }),
          "配置保存成功"
        ] }),
        /* @__PURE__ */ e(
          xe,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => void S(),
            disabled: y || x,
            icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
            children: "刷新"
          }
        ),
        R && /* @__PURE__ */ e(
          xe,
          {
            onClick: () => void z(),
            loading: x,
            icon: /* @__PURE__ */ e(Sc, { className: "h-4 w-4" }),
            children: o
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-4", children: [
      /* @__PURE__ */ e("div", { className: "h-fit space-y-1.5 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-[var(--abc-shadow-card)] lg:col-span-1", children: b.map((j) => {
        const K = j.icon, V = (U == null ? void 0 : U.key) === j.key;
        return /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => g(j.key),
            className: p(
              "flex w-full cursor-pointer items-center gap-3 rounded-[var(--abc-radius-lg)] px-4 py-3 text-sm font-medium transition-all",
              V ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
            ),
            children: [
              K && /* @__PURE__ */ e(
                K,
                {
                  className: p(
                    "h-4 w-4",
                    V ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: j.label })
            ]
          },
          j.key
        );
      }) }),
      /* @__PURE__ */ c("div", { className: "relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-6 shadow-[var(--abc-shadow-card)] lg:col-span-3", children: [
        y && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-[var(--abc-radius-xl)] bg-[var(--abc-bg-surface)]/65 backdrop-blur-xs", children: /* @__PURE__ */ e(Vm, {}) }),
        U && /* @__PURE__ */ c("div", { className: "space-y-6", children: [
          /* @__PURE__ */ c("div", { className: "border-b border-[var(--abc-border)] pb-4", children: [
            /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)]", children: U.sectionTitle }),
            U.sectionDescription && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: U.sectionDescription })
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: p(
                "grid grid-cols-1 gap-4",
                (U.columns ?? 2) === 2 && "sm:grid-cols-2"
              ),
              children: U.fields.map((j) => {
                const K = (U.columns ?? 2) === 1 || j.span === 2;
                return /* @__PURE__ */ c(
                  "div",
                  {
                    className: p(
                      K && (U.columns ?? 2) === 2 && "sm:col-span-2"
                    ),
                    children: [
                      j.label && /* @__PURE__ */ c("div", { className: "mb-1.5 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ e("label", { className: "block text-xs font-medium text-[var(--abc-fg-secondary)]", children: j.label }),
                        j.tooltip && /* @__PURE__ */ e(
                          "span",
                          {
                            title: j.tooltip,
                            className: "cursor-help text-[var(--abc-fg-muted)]",
                            children: /* @__PURE__ */ e(la, { className: "h-3.5 w-3.5" })
                          }
                        )
                      ] }),
                      P(j)
                    ]
                  },
                  j.key
                );
              })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const kh = Uf, Gf = le.forwardRef(
  ({
    surface: t = !1,
    hasActiveFilters: r = !1,
    onReset: a,
    resetLabel: n = "重置筛选",
    search: s,
    filters: o,
    trailing: d,
    children: i,
    className: u,
    ...l
  }, b) => /* @__PURE__ */ c(
    "div",
    {
      ref: b,
      "data-slot": "filter-toolbar",
      className: p(
        "flex flex-wrap items-center justify-between gap-2.5",
        t && "rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 shadow-2xs",
        u
      ),
      ...l,
      children: [
        /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
          s,
          o,
          i
        ] }),
        r && a || d ? /* @__PURE__ */ c("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
          r && a ? /* @__PURE__ */ c(
            xe,
            {
              variant: "ghost",
              size: "xs",
              onClick: a,
              className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
              children: [
                /* @__PURE__ */ e(Vt, { className: "h-3 w-3 mr-1", "aria-hidden": "true" }),
                /* @__PURE__ */ e("span", { children: n })
              ]
            }
          ) : null,
          d
        ] }) : null
      ]
    }
  )
);
Gf.displayName = "FilterToolbar";
function Ch({
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
      className: p("inline-flex flex-wrap items-center gap-1.5", s),
      ...o,
      children: t.map((d) => {
        const i = d.value === r;
        return /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            disabled: d.disabled,
            "aria-pressed": i,
            onClick: () => a(d.value),
            className: p(
              "inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full border font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              n === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs",
              i ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#ffffff)] shadow-2xs font-semibold" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-border-hover,#cbd5e1)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              d.icon,
              /* @__PURE__ */ e("span", { children: d.label }),
              d.count !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: p(
                    "rounded-full px-1.5 py-0.2 text-[10px] tabular-nums font-mono",
                    i ? "bg-white/20 text-white" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                  ),
                  children: d.count
                }
              )
            ]
          },
          d.value
        );
      })
    }
  );
}
function Sh({
  label: t,
  items: r,
  selectedId: a = null,
  headerAction: n,
  onSelect: s,
  onClear: o,
  allLabel: d = "全部",
  className: i
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "quick-select-bar",
      className: p(
        "flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs",
        i
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c("span", { className: "font-medium text-[var(--abc-fg-secondary)]", children: [
            t,
            "："
          ] }),
          n
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          s && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s(null),
              className: p(
                "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                a === null ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
              ),
              children: d
            }
          ),
          r.map((u, l) => {
            const b = u.id ?? u.key ?? u.code ?? String(l), f = u.active !== void 0 ? u.active : a === b;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => {
                  u.onSelect ? u.onSelect() : s && s(b);
                },
                className: p(
                  "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                  f ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  u.label,
                  u.count !== void 0 ? ` (${u.count})` : ""
                ]
              },
              b
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
function Ih({
  open: t,
  title: r,
  description: a,
  confirmLabel: n,
  cancelLabel: s = "取消",
  onCancel: o,
  workingLabel: d = "正在处理…",
  reasonLabel: i = "操作原因",
  reasonPlaceholder: u = "请详细填写本次变更的业务原因或工单号",
  reasonHint: l = "需输入 8–512 字符，作为运维审计依据留痕",
  reasonTooLongMessage: b = "操作原因不能超过 512 字符",
  closeLabel: f = "关闭",
  minReasonLength: v = 8,
  maxReasonLength: m = 512,
  destructive: h = !1,
  variant: g,
  pending: y = !1,
  confirmDisabled: C = !1,
  error: x = null,
  maxWidthClass: I = "sm:max-w-lg",
  className: A,
  children: B,
  onOpenChange: L,
  onConfirm: N
}) {
  const [w, M] = le.useState(""), _ = le.useId(), S = h || g === "destructive";
  le.useEffect(() => {
    t || M("");
  }, [t]);
  const E = w.trim(), z = E.length < v, U = E.length > m, R = !y && !C && !z && !U, T = () => {
    R && N(E);
  }, P = (j) => {
    j.key === "Enter" && R && (j.preventDefault(), T());
  }, W = () => {
    o == null || o(), L == null || L(!1);
  };
  return /* @__PURE__ */ e(
    Xt,
    {
      open: t,
      closeLabel: f,
      onClose: W,
      onCancel: W,
      onOpenChange: L,
      closeDisabled: !1,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ c(
        Rs,
        {
          "data-slot": "reasoned-action-dialog",
          className: p("w-full max-w-lg", I, A),
          closeLabel: f,
          closeDisabled: !1,
          closable: !0,
          children: [
            /* @__PURE__ */ c(zs, { children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                S ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(kn, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(As, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Os, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              /* @__PURE__ */ e(Fs, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            B && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: B }),
            x && /* @__PURE__ */ e(
              Wr,
              {
                variant: "error",
                title: "操作失败",
                message: x,
                className: "my-1 text-xs"
              }
            ),
            /* @__PURE__ */ c("div", { className: "space-y-1.5 py-1", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ c("label", { htmlFor: _, className: "font-medium text-[var(--abc-fg)]", children: [
                  i,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ c(
                  "span",
                  {
                    className: p(
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
                Qe,
                {
                  id: _,
                  "aria-label": "Reason",
                  value: w,
                  disabled: y,
                  placeholder: u,
                  onChange: (j) => M(j.target.value),
                  onKeyDown: P,
                  className: p(
                    "w-full text-xs",
                    U && "border-red-500 focus-visible:ring-red-500/20"
                  )
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: p(
                    "text-[11px]",
                    U ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: U ? b : l
                }
              )
            ] }),
            /* @__PURE__ */ c($s, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                xe,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: y,
                  onClick: () => L(!1),
                  children: s
                }
              ),
              /* @__PURE__ */ e(
                xe,
                {
                  type: "button",
                  variant: S ? "danger" : "primary",
                  size: "sm",
                  disabled: !R,
                  loading: y,
                  onClick: T,
                  children: y ? d : n
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function _h({
  open: t,
  onClose: r,
  title: a,
  description: n,
  confirmLabel: s,
  cancelLabel: o = "Cancel",
  workingLabel: d = "Working…",
  reasonLabel: i = "Reason",
  reasonPlaceholder: u = "Record why this change is required",
  reasonHint: l = "8–512 characters. Stored in the operation audit.",
  reasonTooLongMessage: b = "Shorten the reason to 512 characters or fewer.",
  minReasonLength: f = 8,
  maxReasonLength: v = 512,
  destructive: m = !1,
  pending: h = !1,
  confirmDisabled: g = !1,
  error: y = null,
  width: C = 560,
  cascadeMode: x = "adjacent",
  children: I,
  onConfirm: A
}) {
  const [B, L] = le.useState(""), N = le.useId();
  le.useEffect(() => {
    t || L("");
  }, [t]);
  const w = B.trim(), M = w.length < f, _ = w.length > v, S = !h && !g && !M && !_, E = () => {
    S && A(w);
  };
  return /* @__PURE__ */ c(
    Wa,
    {
      open: t,
      onClose: r,
      width: C,
      cascadeMode: x,
      role: "dialog",
      children: [
        /* @__PURE__ */ c(Om, { children: [
          /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
            m ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(kn, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(As, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(Fm, { className: "text-base font-semibold", children: a })
          ] }),
          n && /* @__PURE__ */ e(Wm, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ c(Hm, { className: "space-y-4", children: [
          y && /* @__PURE__ */ e(
            Wr,
            {
              variant: "error",
              title: "操作失败",
              message: y,
              className: "text-xs"
            }
          ),
          I,
          /* @__PURE__ */ c("div", { className: "rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ c("label", { htmlFor: N, className: "font-semibold text-[var(--abc-fg)]", children: [
                i,
                " ",
                /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ c(
                "span",
                {
                  className: p(
                    "font-mono text-[11px] tabular-nums",
                    _ ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: [
                    B.length,
                    "/",
                    v
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e(
              Qe,
              {
                id: N,
                "aria-label": "Reason",
                value: B,
                disabled: h,
                placeholder: u,
                onChange: (z) => L(z.target.value),
                className: p(
                  "w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs",
                  _ && "border-red-500 focus-visible:ring-red-500/20"
                )
              }
            ),
            /* @__PURE__ */ e(
              "p",
              {
                className: p(
                  "text-[11px]",
                  _ ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                ),
                children: _ ? b : l
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c(Km, { children: [
          /* @__PURE__ */ e(
            xe,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: h,
              onClick: r,
              children: o
            }
          ),
          /* @__PURE__ */ e(
            xe,
            {
              type: "button",
              variant: m ? "danger" : "primary",
              size: "sm",
              disabled: !S,
              loading: h,
              onClick: E,
              children: h ? d : s
            }
          )
        ] })
      ]
    }
  );
}
function ms(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function Vf(t, r) {
  const a = t.filter(
    (o) => !o.hideInTable && o.key !== "__abc_actions__" && o.key !== "__actions__" && o.key !== "__drag_handle__"
  ), n = a.map((o) => ms(o.title)).join(","), s = r.map(
    (o) => a.map((d) => {
      const i = Dn(o, d.dataIndex ?? d.key), u = typeof d.type == "object" ? d.type.options : void 0, l = d.options ?? u;
      if (l && l.length > 0) {
        const b = l.find((f) => String(f.value) === String(i));
        if (b) return ms(b.label);
      }
      return ms(i);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function ic(t, r, a) {
  const n = Vf(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), d = document.createElement("a");
    d.href = o, d.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(o);
  }
  return n;
}
const Yf = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  value: n,
  onApply: s
}) => {
  const [o, d] = F(!1), [i, u] = F(n ?? "");
  me(() => {
    o && u(n ?? "");
  }, [o, n]);
  const l = n != null && String(n).trim() !== "", b = (f) => {
    s(f), d(!1);
  };
  return /* @__PURE__ */ e(
    Hc,
    {
      open: o,
      onOpenChange: d,
      placement: "bottomRight",
      panelClassName: "w-60 p-3",
      content: /* @__PURE__ */ c(
        "div",
        {
          onClick: (f) => f.stopPropagation(),
          className: "space-y-2.5 text-xs font-normal text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ c("div", { className: "font-semibold text-[var(--abc-fg-secondary)]", children: [
              "筛选：",
              t
            ] }),
            r === "select" && a ? /* @__PURE__ */ e(
              Ot,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `选择${t}`,
                options: a,
                value: i ?? "",
                onChange: (f) => u(f)
              }
            ) : /* @__PURE__ */ e(
              Qe,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `输入${t}关键字`,
                value: i ?? "",
                onChange: (f) => u(f.target.value),
                onKeyDown: (f) => {
                  f.key === "Enter" && (f.preventDefault(), b(i));
                }
              }
            ),
            /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                xe,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    u(""), b("");
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(xe, { variant: "primary", size: "xs", onClick: () => b(i), children: "筛选" })
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
          className: p(
            "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
            l ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(Aa, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function qf({
  columns: t,
  searchableFieldNames: r,
  settings: a,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: o,
  onToggleVisible: d,
  onSetAllVisible: i,
  onSetFixed: u,
  onSetWidth: l,
  onSetOrder: b,
  onSetSearchVisible: f,
  onReset: v
}) {
  const m = ve(o), [h, g] = F(!1), [y, C] = F(""), [x, I] = F("all"), [A, B] = F(null), L = ce(null), N = ce(!1);
  me(() => {
    if (!A) return;
    const T = (P) => {
      if (P.key === "Escape") {
        const W = L.current;
        B(null), L.current = null, N.current = !1, W && b(W);
      }
    };
    return document.addEventListener("keydown", T, !0), () => document.removeEventListener("keydown", T, !0);
  }, [A, b]);
  const w = oe(
    () => t.filter(
      (T) => !T.hideInTable && T.key !== "__abc_actions__" && T.key !== "__actions__" && T.key !== "__drag_handle__"
    ),
    [t]
  ), M = oe(() => a.columnOrder.length === 0 ? w : [...w].sort((T, P) => {
    const W = a.columnOrder.indexOf(T.key), j = a.columnOrder.indexOf(P.key);
    return W === -1 && j === -1 ? 0 : W === -1 ? 1 : j === -1 ? -1 : W - j;
  }), [w, a.columnOrder]), _ = (T) => T.key in a.columnFixed ? a.columnFixed[T.key] ?? void 0 : T.fixed, S = oe(() => {
    const T = y.trim().toLowerCase();
    return M.filter((P) => {
      if (T && !P.title.toLowerCase().includes(T) && !P.key.toLowerCase().includes(T))
        return !1;
      const W = a.hiddenKeys.includes(P.key), j = _(P);
      return x === "fixed" ? !!j : x === "hidden" ? W : !0;
    });
  }, [M, y, x, a.hiddenKeys, a.columnFixed]), E = oe(() => w.map((T) => T.key), [w]), z = oe(
    () => t.find((T) => T.key === "__abc_actions__"),
    [t]
  ), U = !!(n || z), R = a.columnWidths.__abc_actions__ ?? (typeof (z == null ? void 0 : z.width) == "number" ? z.width : void 0) ?? s;
  return /* @__PURE__ */ e(
    Hc,
    {
      open: h,
      onOpenChange: g,
      placement: "bottomRight",
      motion: m,
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
            xe,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(Vt, { className: "h-3 w-3" }),
              onClick: v,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ c("div", { className: "relative", children: [
            /* @__PURE__ */ e(It, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: y,
                onChange: (T) => C(T.target.value),
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
                children: /* @__PURE__ */ e(ft, { className: "h-3 w-3" })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5", children: [
              { key: "all", label: "全部" },
              { key: "fixed", label: "已固定" },
              { key: "hidden", label: "已隐藏" }
            ].map((T) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => I(T.key),
                className: p(
                  "rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer",
                  x === T.key ? "bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: T.label
              },
              T.key
            )) }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => i(E, !0),
                  className: "text-[var(--abc-primary)] hover:underline cursor-pointer",
                  children: "全显"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => i(E, !1),
                  className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: "全隐"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: S.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : S.map((T) => {
          const P = !a.hiddenKeys.includes(T.key), W = _(T), j = String(T.dataIndex ?? T.key), K = r.has(j), V = a.searchVisible[j] !== !1, ne = a.columnWidths[T.key] ?? (typeof T.width == "number" ? T.width : "");
          return /* @__PURE__ */ c(
            "div",
            {
              "data-dragging": A === T.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                L.current = M.map((H) => H.key), N.current = !1, B(T.key);
              },
              onDragOver: (H) => {
                if (!A || A === T.key) return;
                H.preventDefault();
                const te = M.map((Y) => Y.key), Z = te.indexOf(A), re = te.indexOf(T.key);
                if (Z < 0 || re < 0 || Z === re) return;
                const ee = H.currentTarget.getBoundingClientRect();
                if (ee.height > 0 && (Z < re && H.clientY < ee.top + ee.height * 0.35 || Z > re && H.clientY > ee.top + ee.height * 0.65))
                  return;
                const Ne = [...te], [$] = Ne.splice(Z, 1);
                Ne.splice(re, 0, $), N.current = !0, b(Ne);
              },
              onDrop: () => {
                if (A && A !== T.key && !N.current) {
                  const H = M.map((re) => re.key), te = H.indexOf(A), Z = H.indexOf(T.key);
                  if (te >= 0 && Z >= 0) {
                    const re = [...H], [ee] = re.splice(te, 1);
                    re.splice(Z, 0, ee), b(re);
                  }
                }
                B(null), L.current = null, N.current = !1;
              },
              onDragEnd: () => {
                B(null), L.current = null, N.current = !1;
              },
              className: p(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                A === T.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(_n, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(Pa, { checked: P, onChange: () => d(T.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: p(
                        "truncate text-xs",
                        P ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: T.title
                    }
                  ),
                  W && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: W === "left" ? "左固" : "右固" })
                ] }),
                /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "number",
                      min: 64,
                      max: 800,
                      "aria-label": `${T.title} 列宽`,
                      placeholder: "宽px",
                      defaultValue: ne,
                      onBlur: (H) => {
                        const te = parseInt(H.target.value, 10);
                        !Number.isNaN(te) && te >= 64 && l(T.key, te);
                      },
                      onKeyDown: (H) => {
                        if (H.key === "Enter") {
                          const te = parseInt(H.target.value, 10);
                          !Number.isNaN(te) && te >= 64 && l(T.key, te);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${T.key}_${ne}`
                  ),
                  K && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: V ? "在筛选栏显示（点击隐藏）" : "已在筛选栏隐藏（点击显示）",
                      "aria-label": `切换 ${T.title} 筛选项显示`,
                      onClick: () => f(j, !V),
                      className: p(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        V ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: /* @__PURE__ */ e(Aa, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: W === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${T.title} 到左侧`,
                      onClick: () => u(T.key, W === "left" ? null : "left"),
                      className: p(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        W === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(oa, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: W === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${T.title} 到右侧`,
                      onClick: () => u(T.key, W === "right" ? null : "right"),
                      className: p(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        W === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(oa, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            T.key
          );
        }) }),
        U && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
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
                defaultValue: R,
                onBlur: (T) => {
                  const P = parseInt(T.target.value, 10);
                  !Number.isNaN(P) && P >= 80 && l("__abc_actions__", P);
                },
                onKeyDown: (T) => {
                  if (T.key === "Enter") {
                    const P = parseInt(T.target.value, 10);
                    !Number.isNaN(P) && P >= 80 && l("__abc_actions__", P);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${R}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(Et, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: p(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            h ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(du, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const Xf = ({ actions: t, maxInline: r = 3 }) => {
  if (t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const a = (o) => /* @__PURE__ */ e(
    xe,
    {
      variant: o.variant ?? "text",
      size: "xs",
      disabled: o.disabled,
      title: o.title,
      icon: o.icon,
      onClick: o.onClick,
      className: p(
        o.danger && "text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]",
        o.className
      ),
      children: o.label
    },
    o.key
  );
  if (t.length <= r)
    return /* @__PURE__ */ e("div", { className: "inline-flex items-center justify-end gap-1", children: t.map(a) });
  const n = t.slice(0, Math.max(1, r - 1)), s = t.slice(Math.max(1, r - 1));
  return /* @__PURE__ */ c("div", { className: "inline-flex items-center justify-end gap-1", children: [
    n.map(a),
    /* @__PURE__ */ e(
      ca,
      {
        placement: "bottomRight",
        items: s.map((o) => ({
          key: o.key,
          label: o.label ?? o.title ?? o.key,
          icon: o.icon,
          danger: o.danger,
          disabled: o.disabled,
          onClick: o.onClick
        })),
        children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "更多操作",
            className: "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Ls, { className: "h-3.5 w-3.5" })
          }
        )
      }
    )
  ] });
};
function Zf({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  extraContent: n,
  onBatchDelete: s,
  onClear: o,
  motion: d
}) {
  const i = ve(d);
  return t.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      role: "region",
      "aria-label": "批量操作栏",
      "data-motion": i,
      className: p(
        "fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--abc-border-strong)] bg-[var(--abc-bg-elevated)]/95 px-4 py-2 shadow-[var(--abc-shadow-modal)] backdrop-blur-md",
        i !== "none" && "abc-floating-bar-in"
      ),
      children: [
        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]", children: [
          "已选择 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-bold tabular-nums", children: t.length }),
          " 项"
        ] }),
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          n,
          a.map((u) => /* @__PURE__ */ e(
            xe,
            {
              variant: u.variant ?? u.type ?? "secondary",
              size: "xs",
              icon: u.icon,
              onClick: () => u.onClick(t, r),
              children: u.label
            },
            u.key
          )),
          s && /* @__PURE__ */ e(
            xe,
            {
              variant: "danger",
              size: "xs",
              icon: /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
              onClick: s,
              children: "批量删除"
            }
          ),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              "aria-label": "取消多选",
              onClick: o,
              className: "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: [
                /* @__PURE__ */ e("span", { children: "取消选择" }),
                /* @__PURE__ */ e(ft, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Th(t, r) {
  if (r == null || r === "") return "";
  if (Array.isArray(r)) {
    const a = t.options || [];
    return r.map((n) => {
      const s = a.find((o) => String(o.value) === String(n));
      return s && (typeof s.label == "string" || typeof s.label == "number") ? String(s.label) : String(n);
    }).filter(Boolean).join("、");
  }
  if (typeof r == "object") {
    const a = r;
    return [a.start, a.end].filter(Boolean).join(" ~ ");
  }
  if (t.type === "select" && t.options) {
    const a = t.options.find((n) => String(n.value) === String(r));
    if (a && (typeof a.label == "string" || typeof a.label == "number"))
      return String(a.label);
  }
  return String(r);
}
const lc = 3, Jf = ({
  searchFields: t,
  query: r,
  onQueryChange: a,
  onSearch: n,
  onReset: s,
  renderSearchExtra: o,
  isSearchVisible: d = () => !0,
  defaultCollapsed: i = !0,
  collapsed: u,
  onCollapseChange: l,
  className: b
}) => {
  const f = u !== void 0, [v, m] = F(!1), [h, g] = F(i), y = f ? u : h, C = () => {
    const w = !y;
    f || g(w), l == null || l(w);
  }, x = o ? o({ query: r, onQueryChange: a, isSearchVisible: d }) : null, I = !!x, { firstRowKeys: A, hasExtraInFirstRow: B, canCollapse: L } = oe(() => {
    let w = 0;
    const M = /* @__PURE__ */ new Set();
    let _ = !1;
    for (const E of t) {
      const z = E.span === 2 ? 2 : 1;
      if (w + z <= lc)
        w += z, M.add(E.key);
      else
        break;
    }
    I && w < lc && (_ = !0, w += 1);
    const S = M.size < t.length || I && !_;
    return {
      firstRowKeys: M,
      hasExtraInFirstRow: _,
      canCollapse: S
    };
  }, [t, I]);
  if (!t || t.length === 0)
    return null;
  const N = (w) => {
    const M = r[w.key] ?? "";
    switch (w.type) {
      case "select":
        return /* @__PURE__ */ e(
          Ot,
          {
            value: M,
            multiple: w.multiple,
            searchable: w.searchable,
            options: w.options || [],
            placeholder: w.placeholder || `请选择${w.label}`,
            clearable: w.clearable !== !1,
            onChange: (_) => {
              var S;
              return a(w.key, ((S = _ == null ? void 0 : _.target) == null ? void 0 : S.value) ?? _);
            }
          }
        );
      case "date":
        return /* @__PURE__ */ e(
          An,
          {
            value: M,
            onChange: (_) => a(w.key, _),
            placeholder: w.placeholder || `请选择${w.label}`,
            format: w.format
          }
        );
      case "datetimePicker":
        return /* @__PURE__ */ e(
          Qe,
          {
            type: "datetime-local",
            value: M ? String(M).replace(" ", "T").slice(0, 16) : "",
            onChange: (_) => {
              const S = _.target.value;
              a(w.key, S ? `${S.replace("T", " ")}:00` : "");
            },
            onKeyDown: (_) => _.key === "Enter" && n(),
            placeholder: w.placeholder,
            clearable: w.clearable !== !1
          }
        );
      case "dateRange": {
        const _ = r[w.key] || {};
        return /* @__PURE__ */ e(
          Ln,
          {
            value: _,
            onChange: (S) => a(w.key, S),
            placeholder: w.placeholder ? [w.placeholder, w.placeholder] : ["开始日期", "结束日期"],
            format: w.format
          }
        );
      }
      case "input":
      default:
        return /* @__PURE__ */ e(
          Qe,
          {
            value: M,
            onChange: (_) => a(w.key, _.target.value),
            onKeyDown: (_) => _.key === "Enter" && n(),
            placeholder: w.placeholder || `请输入${w.label}`,
            clearable: w.clearable !== !1
          }
        );
    }
  };
  return /* @__PURE__ */ c(
    "div",
    {
      className: p(
        "rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-2xs transition-all",
        b
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选条件" }),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => m((w) => !w),
              className: "inline-flex items-center text-xs font-medium text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
              children: [
                /* @__PURE__ */ e("span", { children: v ? "展开" : "收起" }),
                v ? /* @__PURE__ */ e(Yt, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(ln, { className: "ml-0.5 h-3.5 w-3.5" })
              ]
            }
          )
        ] }),
        !v && /* @__PURE__ */ c("div", { className: "mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4", children: [
          t.map((w) => {
            const M = !y || !L || A.has(w.key);
            return /* @__PURE__ */ c(
              "div",
              {
                className: p(
                  w.span === 2 ? "md:col-span-2" : "flex flex-col justify-end",
                  !M && "hidden"
                ),
                children: [
                  /* @__PURE__ */ e("label", { className: "mb-1.5 block text-xs font-semibold tracking-wide text-[var(--abc-fg-secondary)]", children: w.label }),
                  N(w)
                ]
              },
              w.key
            );
          }),
          x && /* @__PURE__ */ e(
            "div",
            {
              className: p(
                "flex flex-col justify-end",
                y && L && !B && "hidden"
              ),
              children: x
            }
          ),
          /* @__PURE__ */ c("div", { className: "flex items-end gap-2 md:col-start-4 md:justify-end", children: [
            /* @__PURE__ */ e(
              xe,
              {
                variant: "primary",
                size: "sm",
                onClick: n,
                icon: /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "搜索"
              }
            ),
            /* @__PURE__ */ e(
              xe,
              {
                variant: "secondary",
                size: "sm",
                onClick: s,
                icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "重置"
              }
            ),
            L && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: C,
                className: "ml-1 inline-flex items-center justify-center px-1 py-2 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
                children: [
                  /* @__PURE__ */ e("span", { children: y ? "展开" : "收起" }),
                  y ? /* @__PURE__ */ e(Yt, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(ln, { className: "ml-0.5 h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Mh = Jf, dc = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
];
function uc(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : !0;
}
function Qf(t, r) {
  const a = (n, s) => String(typeof n == "string" || typeof n == "number" ? n : s ?? "");
  if (Array.isArray(r))
    return r.map((n) => {
      var o;
      const s = (o = t.options) == null ? void 0 : o.find((d) => String(d.value) === String(n));
      return s ? a(s.label, n) : String(n);
    }).join(", ");
  if (r && typeof r == "object" && ("start" in r || "end" in r))
    return `${r.start || "..."} ~ ${r.end || "..."}`;
  if (t.options && t.options.length > 0) {
    const n = t.options.find((s) => String(s.value) === String(r));
    if (n) return a(n.label, r);
  }
  return String(r ?? "");
}
function mi({
  storageKey: t,
  tableId: r,
  title: a,
  subTitle: n,
  columns: s,
  fields: o = [],
  searchFields: d,
  formFields: i,
  formSchema: u,
  defaultFormValues: l,
  dialogTitle: b,
  dialogSize: f,
  formLayout: v = "grid",
  draftConfig: m,
  dataSource: h,
  loading: g,
  request: y,
  api: C,
  defaultQuery: x,
  onListLoaded: I,
  rowKey: A = "id",
  defaultPageSize: B = 10,
  pageSizeOptions: L,
  hidePagination: N = !1,
  pagination: w,
  renderPagination: M,
  selectedRowKey: _,
  onRowClick: S,
  onRow: E,
  searchVariant: z = "card",
  onSearchChange: U,
  onSearchSubmit: R,
  onSearchReset: T,
  headerFilterMode: P,
  onHeaderFilterModeChange: W,
  clientFilter: j,
  showClientFilterSwitch: K,
  defaultSearchCollapsed: V = !0,
  autoRefresh: ne,
  autoRefreshConfig: H,
  refetchInterval: te,
  exportable: Z,
  showExport: re,
  onExport: ee,
  showImport: Ne = !1,
  onImport: $,
  syncToUrl: Y = !1,
  viewable: Te,
  showView: Le,
  viewTitle: be,
  viewSize: fe = "lg",
  renderViewExtra: Pe,
  renderViewFooter: Me,
  onNavigate: We,
  formContainer: Ie = "dialog",
  formColumns: X,
  showAdd: ie,
  addButtonText: Be,
  showEdit: Ze,
  showDelete: He,
  showBatchDelete: gt,
  rowActions: Ft = [],
  actionButtons: jt = [],
  actionColumnWidth: Kr,
  maxInlineActions: Ur,
  rowSelection: kt,
  showRowSelection: at,
  selectedRowKeys: qe,
  onRowSelectionChange: ht,
  batchActions: Xe = [],
  renderBatchActions: dt,
  treeData: wt = !1,
  expandable: nt,
  sortable: st,
  columnSettingsEnabled: Wt = !0,
  maxHeight: Zt,
  permissions: Lt,
  permission: ct,
  hasPermission: kr,
  toolbarButtons: Jt = [],
  toolbarExtra: Rt,
  renderToolbarExtra: et,
  headerExtra: G,
  renderExtra: ae,
  cardExtra: Ee,
  renderCardExtra: tt,
  renderSearchExtra: Ye,
  renderFormExtra: Ht,
  renderCustomForm: mr,
  onRefreshRef: _t,
  onAddWithValuesRef: fr,
  openEditRef: Gr,
  onAdd: Vr,
  onEdit: Lr,
  onDelete: Dr,
  onBeforeAdd: O,
  onBeforeEdit: se,
  onBeforeSubmit: ue,
  onBeforeDelete: ye,
  onBeforeBatchDelete: Ce,
  onAfterSave: $e,
  onAfterDelete: De,
  onAfterBatchDelete: Re,
  motion: Ve,
  onSaveRecord: lt,
  onDeleteRecords: he
}) {
  var Eo;
  const Oe = t ?? r, { toast: Ae } = pt(), pe = ve(Ve), { hasPermission: Fe } = Js(), Je = de(
    (k) => k ? kr ? kr(k) : Fe(k) : !0,
    [kr, Fe]
  ), ke = oe(() => {
    if (C)
      return typeof C == "function" ? Pn(C) : C;
  }, [C]), Ke = ce(ke);
  Ke.current = ke;
  const zt = ce(I);
  zt.current = I;
  const Bn = oe(
    () => s.filter((k) => k.visible === !1).map((k) => k.key),
    [s]
  ), {
    settings: vt,
    toggleColumnVisible: Qs,
    setAllColumnsVisible: fi,
    setColumnFixed: eo,
    setColumnWidth: to,
    setColumnOrder: ro,
    setSearchFieldVisible: pi,
    setDensity: jn,
    resetSettings: ao
  } = nb(Wt ? Oe : void 0, "default", Bn), ot = !!(y || ke != null && ke.list), Ha = oe(() => !Y || typeof window > "u" ? {} : wu(window.location.search), [Y]), [Tt, hi] = F(
    () => j ?? !ot
  ), [vi, gi] = F(!1), nr = P ?? vi, xi = (k) => {
    P === void 0 && gi(k), W == null || W(k);
  }, [no, yi] = F(!0), [Ka, wi] = F(!0), [Ua, Ni] = F(V), [fa, Rn] = F(() => {
    const { page: k, pageSize: D, ...q } = Ha;
    return { ...x, ...q };
  }), pa = ce(fa);
  pa.current = fa;
  const [Nt, Ga] = F(() => {
    const { page: k, pageSize: D, ...q } = Ha;
    return { ...x, ...q };
  }), [ha, so] = F(""), [$t, oo] = F(() => ({
    key: String((x == null ? void 0 : x.orderBy) ?? ""),
    direction: (x == null ? void 0 : x.orderType) ?? null
  })), [Dt, sr] = F(() => Number(Ha.page) || 1), [Pt, co] = F(
    () => Number(Ha.pageSize) || B
  ), [ki, io] = F(!1), [Ci, lo] = F(!1), uo = g !== void 0 ? g : ki, [Cr, va] = F([]), [Si, zn] = F(0), [Ii, _i] = F([]), Kt = qe ?? Ii, [Va, Ti] = F([]), [Pr, bo] = F(!1), [Ya, Mi] = F({}), [mo, fo] = F({}), [$n, On] = F({}), Ei = ne ?? (H ? H.show !== !1 : ot), [Yr, po] = F(
    (H == null ? void 0 : H.defaultEnabled) ?? !1
  ), [ga, Ai] = F(
    te ?? (H == null ? void 0 : H.defaultInterval) ?? 1e4
  ), xa = ce(0), [qa, Fn] = F(null), [Li, ho] = F(!1), Ut = oe(() => {
    const k = /* @__PURE__ */ new Map();
    return o.filter((D) => !D.hideInSearch).forEach((D) => {
      k.set(D.name, {
        key: D.name,
        columnKey: D.name,
        label: D.label,
        type: D.type ?? "text",
        placeholder: D.placeholder,
        options: D.options,
        multiple: D.multiple,
        span: D.span,
        __fromFieldSchema: !0
      });
    }), s.forEach((D) => {
      if (!(D.search === !0 || typeof D.search == "object" && D.search !== null || D.searchable === !0)) return;
      const J = typeof D.search == "object" && D.search !== null ? D.search : {};
      if (J.custom) return;
      const Q = typeof D.type == "object" ? D.type : void 0, _e = J.options ?? (Q == null ? void 0 : Q.options) ?? D.options, ge = J.type ?? (_e ? "select" : "input"), it = String(
        J.key ?? (Array.isArray(D.dataIndex) ? D.dataIndex.join(".") : D.dataIndex) ?? D.key
      );
      k.set(it, {
        key: it,
        columnKey: D.key,
        label: D.title,
        type: ge,
        placeholder: J.placeholder,
        options: _e,
        searchable: J.searchable,
        multiple: J.multiple,
        span: J.span,
        order: J.order,
        format: J.format,
        clearable: J.clearable,
        __fromFieldSchema: !1
      });
    }), (d ?? []).forEach((D) => {
      const q = k.get(D.key);
      k.set(D.key, {
        ...q,
        ...D,
        __fromFieldSchema: !1
      });
    }), Array.from(k.values()).sort((D, q) => (D.order ?? 999) - (q.order ?? 999));
  }, [o, s, d]), Di = oe(
    () => new Set(Ut.map((k) => k.key)),
    [Ut]
  ), Qt = oe(
    () => Ut.filter((k) => !(vt.searchVisible[k.key] === !1 || k.columnKey && vt.searchVisible[k.columnKey] === !1)),
    [Ut, vt.searchVisible]
  ), Wn = oe(
    () => Qt.filter(
      (k) => !s.some((D) => D.key === (k.columnKey || k.key))
    ),
    [Qt, s]
  ), vo = oe(() => !Ua || Qt.length <= 3 ? Qt : Qt.slice(0, 3), [Qt, Ua]), Sr = oe(() => {
    const k = /* @__PURE__ */ new Map();
    return o.filter((D) => !D.hideInForm).forEach((D) => {
      k.set(D.name, {
        key: D.name,
        name: D.name,
        label: D.label,
        type: D.type ?? "text",
        options: D.options,
        multiple: D.multiple,
        placeholder: D.placeholder,
        helperText: D.helperText,
        defaultValue: D.defaultValue,
        span: D.span,
        required: D.required,
        disabled: D.disabled,
        validator: D.validator,
        __fromFieldSchema: !0
      });
    }), s.filter((D) => D.form === !0 || typeof D.form == "object" && D.form !== null).forEach((D) => {
      const q = typeof D.form == "object" && D.form !== null ? D.form : {}, J = String(
        q.key ?? q.name ?? (Array.isArray(D.dataIndex) ? D.dataIndex[0] : D.dataIndex) ?? D.key
      );
      k.set(J, {
        ...q,
        key: J,
        label: q.label ?? D.title,
        tooltip: q.tooltip ?? D.tooltip,
        type: q.type ?? "input"
      });
    }), (i ?? []).forEach((D) => {
      const q = ia(D);
      if (!q) return;
      const J = k.get(q);
      k.set(q, {
        ...J,
        ...D,
        key: q
      });
    }), Array.from(k.values()).sort((D, q) => (D.order ?? 999) - (q.order ?? 999));
  }, [o, s, i]), pr = de(() => {
    const k = { ...l };
    for (const D of Sr) {
      const q = ia(D);
      q && D.defaultValue !== void 0 && k[q] === void 0 && (k[q] = D.defaultValue);
    }
    return k;
  }, [l, Sr]), ut = zf({
    defaultValues: pr(),
    schema: u,
    fields: Sr
  }), or = m ? !!m.enabled : !!(Oe && !C), qr = !m && !!(Oe && !C), hr = ab(
    or && Oe ? `${Oe}_form` : void 0
  ), [Br, Xa] = F(!1), [cr, go] = F(!1), [Xr, xo] = F(null), [Pi, Hn] = F(!1), [Bi, yo] = F(!1), [ji, ya] = F(null), [Ri, jr] = F(!1), zi = (ct == null ? void 0 : ct.add) ?? (Lt == null ? void 0 : Lt.create), $i = (ct == null ? void 0 : ct.edit) ?? (Lt == null ? void 0 : Lt.update), wo = (ct == null ? void 0 : ct.delete) ?? (Lt == null ? void 0 : Lt.delete), Oi = (ct == null ? void 0 : ct.batchDelete) ?? wo, Fi = ct == null ? void 0 : ct.export, Wi = ct == null ? void 0 : ct.view, Hi = (ie ?? !0) && Je(zi), Ki = (Ze ?? !0) && Je($i), Ui = (He ?? !0) && Je(wo), Kn = (gt ?? !!he) && Je(Oi), No = (re ?? Z ?? !C) && Je(Fi), Za = (Le ?? Te ?? !1) && Je(Wi), Gi = Hi && !!(Vr || mr || lt && Sr.length > 0 || ke != null && ke.add || ke != null && ke.create), Zr = Ki && !!(Lr || mr || lt || ke != null && ke.update || ke != null && ke.edit), Ja = Ui && !!(Dr || he || ke != null && ke.delete);
  me(() => {
    if (!Y || typeof window > "u") return;
    const k = [
      ...Ut.map((J) => J.key),
      ...s.map(
        (J) => Array.isArray(J.dataIndex) ? J.dataIndex.join(".") : String(J.dataIndex ?? J.key)
      ),
      "page",
      "pageSize"
    ], D = Nu(window.location.search, k, {
      ...Nt,
      page: Dt > 1 ? Dt : void 0,
      pageSize: Pt !== B ? Pt : void 0
    }), q = `${window.location.pathname}${D}${window.location.hash}`;
    window.history.replaceState(null, "", q);
  }, [Y, Ut, s, Nt, Dt, Pt, B]), me(() => {
    if (!Pr) return;
    const k = (D) => {
      D.key === "Escape" && !Br && !qa && bo(!1);
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [Pr, Br, qa]);
  const xt = de(
    (k, D = 0) => typeof A == "function" ? A(k) : (k == null ? void 0 : k[A]) ?? D,
    [A]
  ), Ct = de(async () => {
    var D, q, J;
    if (!y && !((D = Ke.current) != null && D.list)) return;
    const k = ++xa.current;
    io(!0);
    try {
      if (y) {
        const er = await y({
          current: Dt,
          pageSize: Pt,
          filters: Tt ? {} : en(Nt),
          sortField: $t.direction ? $t.key : void 0,
          sortOrder: $t.direction
        });
        if (k !== xa.current) return;
        va(er.data), zn(er.total), (q = zt.current) == null || q.call(zt, er.data);
        return;
      }
      const Q = Ke.current;
      if (!(Q != null && Q.list)) return;
      const _e = en({
        ...x,
        ...Tt ? {} : Nt,
        pageNum: Dt,
        pageSize: Pt,
        ...$t.direction ? {
          orderBy: $t.key,
          orderType: $t.direction,
          sortField: $t.key,
          sortOrder: $t.direction
        } : {}
      }), ge = await Q.list(_e);
      if (k !== xa.current) return;
      if (lr(ge) && !(ge != null && ge.data) && !(ge != null && ge.list)) {
        Ae.error((ge == null ? void 0 : ge.msg) || "获取表格数据失败"), va([]), zn(0);
        return;
      }
      const { list: it, total: we } = _s(ge);
      va(it), zn(we), (J = zt.current) == null || J.call(zt, it);
    } catch (Q) {
      k === xa.current && Ae.error((Q == null ? void 0 : Q.message) || "加载表格数据失败");
    } finally {
      k === xa.current && io(!1);
    }
  }, [
    y,
    x,
    Dt,
    Pt,
    Tt,
    Nt,
    $t,
    Ae
  ]);
  me(() => {
    ot && Ct();
  }, [ot, Ct]), me(() => {
    if (_t)
      return _t.current = (k = !1) => {
        k && Dt !== 1 ? sr(1) : Ct();
      }, () => {
        _t.current = null;
      };
  }, [_t, Dt, Ct]), me(() => {
    if (!Yr || !ot || ga <= 0 || typeof window > "u")
      return;
    const k = window.setInterval(() => {
      Ct();
    }, ga);
    return () => window.clearInterval(k);
  }, [Yr, ga, ot, Ct]), me(() => {
    Br && Sr.forEach((k) => {
      var D;
      return (D = k.onFormReady) == null ? void 0 : D.call(k, ut, cr);
    });
  }, [Br, cr, Sr, ut]), me(() => {
    if (!(!Br || !or)) {
      if (qr && !cr) {
        const k = ut.watch((D) => {
          hr.saveDraft(D);
        });
        return () => k.unsubscribe();
      }
      if (m != null && m.autoSave) {
        let k;
        const D = () => {
          k !== void 0 && window.clearTimeout(k), k = window.setTimeout(() => {
            hr.saveDraft(ut.getValues()), jr(!1);
          }, m.autoSaveInterval || 3e4);
        };
        D();
        const q = ut.watch(() => {
          D();
        });
        return () => {
          k !== void 0 && window.clearTimeout(k), q.unsubscribe();
        };
      }
    }
  }, [
    Br,
    or,
    qr,
    cr,
    m == null ? void 0 : m.autoSave,
    m == null ? void 0 : m.autoSaveInterval,
    ut,
    hr
  ]);
  const Jr = de(
    (k, D) => {
      qe === void 0 && _i(k);
      const J = D ?? (h ?? Cr).filter((Q, _e) => k.includes(xt(Q, _e)));
      Ti(J), ht == null || ht(k, J);
    },
    [qe, h, Cr, xt, ht]
  ), ko = oe(() => Va.length > 0 && Va.length === Kt.length ? Va : (h ?? Cr).filter((D, q) => Kt.includes(xt(D, q))), [Va, Kt, h, Cr, xt]), Qr = oe(() => {
    const k = s.filter((D) => !D.hideInTable && !vt.hiddenKeys.includes(D.key)).sort((D, q) => (D.order ?? 999) - (q.order ?? 999)).map((D) => {
      const q = typeof D.search == "object" && D.search !== null && Array.isArray(D.search.options) ? D.search.options.filter((J) => J.value !== "") : void 0;
      return {
        ...D,
        options: D.options ?? q,
        sorter: D.sorter !== void 0 ? D.sorter : C && D.sortable === void 0 ? !0 : D.sorter
      };
    });
    return vt.columnOrder.length === 0 ? k : [...k].sort((D, q) => {
      const J = vt.columnOrder.indexOf(D.key), Q = vt.columnOrder.indexOf(q.key);
      return J === -1 && Q === -1 ? 0 : J === -1 ? 1 : Q === -1 ? -1 : J - Q;
    });
  }, [s, vt.hiddenKeys, vt.columnOrder, C]), wa = h ?? Cr, Rr = oe(() => {
    if (!Tt && ot) return wa;
    const k = s.map(
      (D) => Array.isArray(D.dataIndex) ? D.dataIndex.join(".") : String(D.dataIndex ?? D.key)
    );
    return yu({
      rows: wa,
      quickKeyword: ha,
      searchableKeys: k,
      fieldFilters: Nt,
      sortField: $t.key,
      sortOrder: $t.direction
    });
  }, [Tt, ot, wa, ha, Nt, s, $t]), Vi = oe(() => {
    if (!ot || Tt) {
      if (N || w === !1) return Rr;
      if (Rr.length > Pt || !ot) {
        const k = (Dt - 1) * Pt;
        return Rr.slice(k, k + Pt);
      }
      return Rr;
    }
    return Cr;
  }, [
    ot,
    Tt,
    N,
    w,
    Rr,
    Cr,
    Dt,
    Pt
  ]), Un = !ot || Tt ? Rr.length : Si, Na = oe(() => {
    const k = x ? new Set(Object.keys(x)) : null;
    return Object.entries(en(Nt)).filter(([q, J]) => !(k && k.has(q) && x[q] === J)).length + (ha.trim() ? 1 : 0);
  }, [Nt, ha, x]), ka = de(() => {
    const k = { ...x };
    pa.current = k, Rn(k), Ga(k), so(""), oo({ key: "", direction: null }), sr(1), T == null || T(), U == null || U(k);
  }, [x, T, U]), Gn = de(
    async (k) => {
      if (Vr && !k) {
        Vr();
        return;
      }
      let D = {
        ...pr(),
        ...k
      };
      if (O) {
        const J = await O(D);
        if (J === !1) return;
        J && typeof J == "object" && (D = { ...D, ...J });
      }
      xo(null), go(!1), ya(null), ut.clearErrors();
      const q = or ? hr.readDraft() : null;
      q && qr && !k ? (ut.reset({ ...D, ...q }), jr(!0)) : (ut.reset(D), jr(!!(q && or && !k))), Xa(!0);
    },
    [
      Vr,
      pr,
      O,
      ut,
      or,
      hr,
      qr
    ]
  ), zr = de(
    async (k) => {
      var J;
      if (Lr) {
        Lr(k);
        return;
      }
      let D = { ...pr(), ...k };
      if (se) {
        const Q = await se(k, k);
        if (Q === !1) return;
        Q && typeof Q == "object" && (D = { ...pr(), ...Q });
      }
      const q = xt(k);
      if (xo(k), go(!0), ya(null), jr(!1), ut.clearErrors(), ut.reset(D), Xa(!0), (J = Ke.current) != null && J.get && q !== void 0 && q !== null) {
        yo(!0);
        try {
          const Q = await Ke.current.get(q), _e = Q != null && Q.data && !Array.isArray(Q.data) ? Q.data : Q;
          if (!lr(Q) && _e && typeof _e == "object") {
            let ge = { ...D, ..._e };
            if (se) {
              const it = await se(ge, k);
              it && typeof it == "object" && (ge = { ...pr(), ...it });
            }
            ut.reset(ge);
          }
        } catch {
        } finally {
          yo(!1);
        }
      }
    },
    [Lr, pr, se, xt, ut]
  );
  me(() => {
    if (fr)
      return fr.current = (k) => {
        Gn(k);
      }, () => {
        fr.current = null;
      };
  }, [fr, Gn]), me(() => {
    if (Gr)
      return Gr.current = (k) => {
        zr(k);
      }, () => {
        Gr.current = null;
      };
  }, [Gr, zr]);
  const Vn = de(
    async (k, D) => {
      var q, J;
      if (D) {
        if (D.startsWith("/") || D.startsWith("http")) {
          We == null || We(D, k);
          return;
        }
        const Q = (q = Ke.current) == null ? void 0 : q[D];
        if (typeof Q == "function") {
          await Q(k);
          return;
        }
      }
      if (Fn(k), (J = Ke.current) != null && J.view) {
        ho(!0);
        try {
          const Q = await Ke.current.view(xt(k)), _e = Q != null && Q.data && !Array.isArray(Q.data) ? Q.data : Q;
          !lr(Q) && _e && typeof _e == "object" && Fn({ ...k, ..._e });
        } catch {
        } finally {
          ho(!1);
        }
      }
    },
    [We, xt]
  ), Yi = async (k) => {
    var D, q;
    Hn(!0), ya(null);
    try {
      let J = k, Q = !1;
      if (ue) {
        const _e = await ue(k, cr, Xr);
        if (_e === !1) {
          Hn(!1);
          return;
        }
        _e && typeof _e == "object" && (J = _e, Q = !0);
      }
      if (lt)
        await lt(J, Xr);
      else if (Ke.current) {
        const _e = typeof A == "string" ? A : "id", ge = Xr ? xt(Xr) : void 0, it = Q ? {
          ...J,
          ...cr && ge != null ? { [_e]: ge } : {}
        } : {
          ...Xr || {},
          ...J,
          ...cr && ge != null ? { [_e]: ge } : {}
        }, we = cr ? await ((D = Ke.current.update || Ke.current.edit || Ke.current.add) == null ? void 0 : D(
          it
        )) : await ((q = Ke.current.add || Ke.current.create) == null ? void 0 : q(J));
        if (lr(we)) {
          ya((we == null ? void 0 : we.msg) || "保存失败");
          return;
        }
      }
      or && (hr.clearDraft(), jr(!1)), Xa(!1), Ae.success(cr ? "更新成功" : C ? "新增成功" : "创建成功"), $e == null || $e(J), ot && Ct();
    } catch (J) {
      const Q = (J == null ? void 0 : J.message) || "提交失败";
      ya(Q), C || Ae.error(Q);
    } finally {
      Hn(!1);
    }
  }, qi = async (k) => {
    var q;
    if (k == null || k.preventDefault(), !await ut.trigger()) {
      const J = (q = Object.values(ut.formState.errors).find((Q) => Q == null ? void 0 : Q.message)) == null ? void 0 : q.message;
      J && !C && Ae.warning(J);
      return;
    }
    await Yi(ut.getValues());
  }, Yn = de(
    async (k, D = 0) => {
      var Q, _e;
      if (Dr) {
        Dr(k);
        return;
      }
      if (ye && await ye(k) === !1)
        return;
      const q = xt(k, D);
      if (!(!he && !((Q = Ke.current) != null && Q.delete) || !await mn({
        title: "确认删除",
        message: "确定要删除这条数据吗？此操作无法撤销。",
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (he)
            await he([q]);
          else if ((_e = Ke.current) != null && _e.delete) {
            const ge = await Ke.current.delete([q]);
            if (lr(ge)) {
              Ae.error((ge == null ? void 0 : ge.msg) || "删除失败");
              return;
            }
          }
          Jr(Kt.filter((ge) => ge !== q)), Ae.success("删除成功"), De == null || De(), ot && Ct();
        } catch (ge) {
          Ae.error((ge == null ? void 0 : ge.message) || "删除失败");
        }
    },
    [
      Dr,
      ye,
      xt,
      he,
      Kt,
      Jr,
      Ae,
      De,
      ot,
      Ct
    ]
  ), Co = de(
    async (k) => {
      var q, J;
      if (k.length === 0) {
        Ae.warning("请先选择要删除的数据行");
        return;
      }
      if (!(Ce && await Ce(k) === !1 || !he && !((q = Ke.current) != null && q.delete) || !await mn({
        title: "确认删除选中记录",
        message: `即将删除 ${k.length} 条数据，删除后不可恢复，是否继续？`,
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (he)
            await he(k);
          else if ((J = Ke.current) != null && J.delete) {
            const Q = await Ke.current.delete(k);
            if (lr(Q)) {
              Ae.error((Q == null ? void 0 : Q.msg) || "批量删除失败");
              return;
            }
          }
          Jr([], []), Ae.success(`已删除 ${k.length} 条记录`), Re == null || Re(), ot && Ct();
        } catch (Q) {
          Ae.error((Q == null ? void 0 : Q.message) || "批量删除失败");
        }
    },
    [
      Ce,
      he,
      Jr,
      Ae,
      Re,
      ot,
      Ct
    ]
  ), qn = de(
    async (k, D) => {
      var J, Q;
      const q = xt(D);
      if (k && ((J = Ke.current) != null && J.children)) {
        const _e = Ya[q];
        if (!_e || _e.length === 0) {
          fo((ge) => ({ ...ge, [q]: !0 })), On((ge) => ({ ...ge, [q]: "" }));
          try {
            const ge = await Ke.current.children(D);
            if (lr(ge))
              On((it) => ({ ...it, [q]: (ge == null ? void 0 : ge.msg) || "加载失败" }));
            else {
              const { list: it } = _s(ge);
              Mi((we) => ({ ...we, [q]: it })), wt && va((we) => {
                const er = (Qa) => Qa.map((Ir) => xt(Ir) === q ? { ...Ir, children: it } : Array.isArray(Ir.children) ? { ...Ir, children: er(Ir.children) } : Ir);
                return er(we);
              });
            }
          } catch {
            On((ge) => ({ ...ge, [q]: "加载失败" }));
          } finally {
            fo((ge) => ({ ...ge, [q]: !1 }));
          }
        }
      }
      (Q = nt == null ? void 0 : nt.onExpand) == null || Q.call(nt, k, D);
    },
    [xt, Ya, wt, nt]
  ), Xi = de(
    (k, D) => {
      var ge;
      const q = [...wa], J = q.findIndex(
        (it, we) => String(xt(it, we)) === String(k)
      ), Q = q.findIndex(
        (it, we) => String(xt(it, we)) === String(D)
      );
      if (J < 0 || Q < 0 || J === Q) return;
      const [_e] = q.splice(J, 1);
      q.splice(Q, 0, _e), h || va(q), (ge = st == null ? void 0 : st.onSort) == null || ge.call(st, q);
    },
    [wa, xt, h, st]
  ), So = oe(
    () => Xe.filter((k) => Je(k.permission)),
    [Xe, Je]
  ), Xn = kt ?? at ?? !!(Kn && (he || ke != null && ke.delete) || So.length > 0 || dt), Io = Ur ?? (jt.length > 0 && Ft.length === 0 ? 6 : 3), Zn = Za || Zr || Ja || Ft.length > 0 || jt.length > 0, Jn = Kr ?? (jt.length > 0 ? Math.max(Kr ?? 140, 200) : Za || Ft.length > 0 ? 184 : 136), Zi = oe(() => {
    const k = [...Qr];
    return st != null && st.enabled && k.unshift({
      key: "__drag_handle__",
      title: "排序",
      width: 68,
      align: "center",
      sortable: !1,
      sorter: !1,
      render: () => /* @__PURE__ */ e(_n, { className: "mx-auto h-4 w-4 cursor-grab text-[var(--abc-fg-placeholder)]" })
    }), Zn && k.push({
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: Jn,
      align: "right",
      sortable: !1,
      sorter: !1,
      render: (D, q, J) => {
        var it;
        const Q = [];
        let _e = !1, ge = !1;
        Za && Q.push({
          key: "__view__",
          label: C ? "查看" : "详情",
          icon: /* @__PURE__ */ e(ua, { className: "h-3 w-3" }),
          onClick: () => void Vn(q)
        });
        for (const we of jt) {
          if (we.key === "edit" && !we.onClick) {
            _e = !0, Zr && Q.push({
              key: "__edit__",
              label: we.label ?? "编辑",
              icon: /* @__PURE__ */ e(sn, { className: "h-3 w-3" }),
              onClick: () => void zr(q)
            });
            continue;
          }
          if (we.key === "delete" && !we.onClick) {
            ge = !0, Ja && Q.push({
              key: "__delete__",
              label: we.label ?? "删除",
              icon: /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
              danger: !0,
              onClick: () => void Yn(q, J)
            });
            continue;
          }
          if (we.key === "edit" && (_e = !0), we.key === "delete" && (ge = !0), !(typeof we.show == "function" ? we.show(q) : we.show !== !1) || !Je(we.permission)) continue;
          const Qa = typeof we.disabled == "function" ? we.disabled(q) : !!we.disabled, Ir = typeof we.title == "function" ? we.title(q) : we.title, ol = typeof we.icon == "string" ? /* @__PURE__ */ e(dr, { name: we.icon, size: 13 }) : we.icon;
          Q.push({
            key: we.key,
            label: we.label,
            icon: ol,
            variant: we.variant ?? we.type ?? "text",
            danger: (we.variant ?? we.type) === "danger",
            disabled: Qa,
            title: Ir,
            className: we.className,
            onClick: async () => {
              var Ao;
              if (Qa) return;
              const rs = (Ao = we.onClick) == null ? void 0 : Ao.call(we, q);
              rs && typeof rs.then == "function" && (await rs, ot && Ct());
            }
          });
        }
        !_e && Zr && jt.length === 0 && Q.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(sn, { className: "h-3 w-3" }),
          onClick: () => void zr(q)
        });
        for (const we of Ft)
          Je(we.permission) && ((it = we.hidden) != null && it.call(we, q) || Q.push({
            key: we.key,
            label: we.label,
            icon: we.icon,
            danger: we.danger,
            onClick: async () => {
              const er = we.onClick(q);
              er && typeof er.then == "function" && (await er, ot && Ct());
            }
          }));
        return !_e && Zr && jt.length > 0 && Q.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(sn, { className: "h-3 w-3" }),
          onClick: () => void zr(q)
        }), !ge && Ja && Q.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => void Yn(q, J)
        }), /* @__PURE__ */ e(Xf, { actions: Q, maxInline: Io });
      }
    }), k;
  }, [
    Qr,
    st == null ? void 0 : st.enabled,
    Zn,
    Jn,
    Za,
    C,
    jt,
    Zr,
    Ja,
    Ft,
    Io,
    Je,
    Vn,
    zr,
    Yn,
    ot,
    Ct
  ]), Ji = oe(() => {
    if (!nt && !(ke != null && ke.children)) return;
    const k = (D, q, J = 0, Q = !0) => {
      if (nt != null && nt.expandedRowRender)
        return nt.expandedRowRender(D, q, J, Q);
      const _e = xt(D, q);
      if (mo[_e])
        return /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "加载中..." });
      if ($n[_e])
        return /* @__PURE__ */ c("div", { className: "py-5 text-center text-xs text-[var(--abc-danger)]", children: [
          /* @__PURE__ */ e("span", { children: $n[_e] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => void qn(!0, D),
              className: "ml-2 text-[var(--abc-primary)] hover:underline cursor-pointer",
              children: "重试"
            }
          )
        ] });
      const ge = Ya[_e] || [];
      return ge.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无子项数据" }) : /* @__PURE__ */ e(
        ec,
        {
          columns: Qr,
          data: ge,
          rowKey: A,
          density: vt.density
        }
      );
    };
    return {
      ...nt,
      rowExpandable: (nt == null ? void 0 : nt.rowExpandable) ?? (ke != null && ke.children ? () => !0 : void 0),
      expandedRowRender: wt ? void 0 : ke != null && ke.children || nt != null && nt.expandedRowRender ? k : void 0,
      onExpand: qn
    };
  }, [
    nt,
    ke == null ? void 0 : ke.children,
    wt,
    xt,
    mo,
    $n,
    Ya,
    qn,
    Qr,
    A,
    vt.density
  ]), _o = async () => {
    var q;
    const k = Tt || !ot ? Rr : Cr;
    if (C) {
      lo(!0);
      try {
        const J = en({
          ...x,
          ...Nt,
          pageNum: Dt,
          pageSize: Pt
        });
        if (ee)
          await ee(J);
        else if ((q = Ke.current) != null && q.export)
          await Ke.current.export(J);
        else {
          const Q = typeof a == "string" && a.trim() ? a.trim() : Oe || "table-export";
          ic(Q, Qr, k);
        }
        Ae.success("导出成功");
      } catch (J) {
        Ae.error((J == null ? void 0 : J.message) || "导出失败");
      } finally {
        lo(!1);
      }
      return;
    }
    if (ee) {
      await ee(k);
      return;
    }
    const D = typeof a == "string" && a.trim() ? a.trim() : Oe || "table-export";
    ic(D, Qr, k), Ae.success(`已导出 ${k.length} 条记录`);
  }, Ca = de(
    (k, D) => {
      Rn((q) => {
        const J = { ...q, [k]: D };
        return pa.current = J, U == null || U(J), J;
      });
    },
    [U]
  ), Qn = de(
    (k) => {
      const D = { ...pa.current, ...k || {} };
      pa.current = D, Rn(D), Ga(D), sr(1), R == null || R(D);
    },
    [R]
  ), es = (k, D) => {
    const q = fa[k.key], J = (Q) => Ca(k.key, Q);
    return k.type === "select" ? /* @__PURE__ */ e(
      Ot,
      {
        allowClear: k.clearable !== !1,
        searchable: k.searchable ?? !0,
        multiple: k.multiple,
        options: k.options ?? [],
        placeholder: k.placeholder ?? (k.__fromFieldSchema ? `全部${k.label}` : `请选择${k.label}`),
        value: q ?? (k.multiple ? [] : ""),
        onChange: (Q) => {
          const _e = Q && typeof Q == "object" && "target" in Q ? Q.target.value : Q;
          J(_e);
        },
        className: D == null ? void 0 : D.select
      }
    ) : k.type === "date" || k.type === "datetimePicker" ? /* @__PURE__ */ e(
      An,
      {
        value: q ?? "",
        placeholder: k.placeholder ?? (k.__fromFieldSchema ? `选择${k.label}` : `请选择${k.label}`),
        onChange: J
      }
    ) : k.type === "dateRange" ? /* @__PURE__ */ e(Ln, { value: q ?? null, onChange: J }) : k.type === "number" ? /* @__PURE__ */ e(
      Vs,
      {
        value: q ?? null,
        placeholder: k.placeholder ?? `输入${k.label}`,
        onChange: J,
        className: D == null ? void 0 : D.input
      }
    ) : /* @__PURE__ */ e(
      Qe,
      {
        allowClear: k.clearable !== !1,
        placeholder: k.placeholder ?? (k.__fromFieldSchema ? `搜索${k.label}` : `请输入${k.label}`),
        value: q ?? "",
        onChange: (Q) => J(Q.target.value),
        wrapperClassName: D == null ? void 0 : D.input
      }
    );
  }, Qi = X ?? (C || Sr.length >= 6 ? 2 : 1), el = K ?? !!(C && Ut.length > 0), To = ((Eo = dc.find((k) => k.key === ga)) == null ? void 0 : Eo.label) ?? "10秒", Mo = !!(n || G || ae || C && a), ts = G ?? (ae == null ? void 0 : ae()), tl = Ee ?? (tt == null ? void 0 : tt()), rl = Rt ?? (et == null ? void 0 : et()), al = Be ?? (C ? "新增" : "新建记录"), nl = oe(
    () => Ut.filter((k) => uc(Nt[k.key])).map((k) => k.columnKey || k.key),
    [Ut, Nt]
  ), sl = oe(
    () => Object.fromEntries(
      Ut.filter((k) => uc(Nt[k.key])).map((k) => [k.columnKey || k.key, Qf(k, Nt[k.key])])
    ),
    [Ut, Nt]
  );
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": pe,
      className: p(
        "relative space-y-3",
        Pr && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        Mo && (a || n || ts) && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ c("div", { children: [
            a && /* @__PURE__ */ e("h2", { className: "text-lg font-bold tracking-tight text-[var(--abc-fg)]", children: a }),
            n && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: n })
          ] }),
          ts && /* @__PURE__ */ e("div", { children: ts })
        ] }),
        tl,
        z === "toolbar" && (Qt.length > 0 || !!Ye) && !nr && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ c(
          "form",
          {
            onSubmit: (k) => {
              k.preventDefault(), Qn();
            },
            className: "flex flex-wrap items-center gap-2.5",
            children: [
              vo.map((k) => /* @__PURE__ */ e("div", { className: "flex items-center", children: es(k, {
                input: k.span === 2 ? "w-80 sm:w-96" : "w-72 sm:w-80",
                select: "w-40"
              }) }, k.key)),
              Ye == null ? void 0 : Ye({
                query: fa,
                onQueryChange: Ca,
                isSearchVisible: (k) => vt.searchVisible[k] !== !1
              }),
              /* @__PURE__ */ e(
                xe,
                {
                  size: "sm",
                  type: "submit",
                  variant: "primary",
                  icon: /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5" }),
                  children: "搜索"
                }
              ),
              /* @__PURE__ */ e(
                xe,
                {
                  size: "sm",
                  type: "button",
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
                  onClick: ka,
                  children: "重置"
                }
              ),
              Na > 0 && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Na,
                " 项"
              ] })
            ]
          }
        ) }),
        z === "card" && (Qt.length > 0 || !!Ye) && !nr && /* @__PURE__ */ c(vn, { padding: "none", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(Aa, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选检索" }),
              Na > 0 && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Na,
                " 项",
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": "一键清空已生效筛选",
                    onClick: ka,
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
                "aria-expanded": Ka,
                onClick: () => wi((k) => !k),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e("span", { children: Ka ? "收起面板" : "展开面板" }),
                  Ka ? /* @__PURE__ */ e(ln, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Yt, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": Ka, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ c(
            "form",
            {
              onSubmit: (k) => {
                k.preventDefault(), Qn();
              },
              className: "grid grid-cols-1 items-end gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                vo.map((k) => /* @__PURE__ */ e(
                  qs,
                  {
                    label: k.label,
                    className: k.span === 2 || k.type === "dateRange" ? "sm:col-span-2" : void 0,
                    children: es(k)
                  },
                  k.key
                )),
                Ye == null ? void 0 : Ye({
                  query: fa,
                  onQueryChange: Ca,
                  isSearchVisible: (k) => vt.searchVisible[k] !== !1
                }),
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    xe,
                    {
                      type: "submit",
                      variant: "primary",
                      icon: /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5" }),
                      children: "搜索"
                    }
                  ),
                  /* @__PURE__ */ e(
                    xe,
                    {
                      type: "button",
                      variant: "secondary",
                      icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
                      onClick: ka,
                      children: "重置"
                    }
                  ),
                  Qt.length > 3 && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      onClick: () => Ni((k) => !k),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                      children: [
                        /* @__PURE__ */ e("span", { children: Ua ? `展开 (${Qt.length - 3})` : "收起" }),
                        Ua ? /* @__PURE__ */ e(Yt, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ln, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] }),
        /* @__PURE__ */ c(vn, { padding: "none", children: [
          nr && no && Wn.length > 0 && /* @__PURE__ */ e("div", { className: "border-b border-[var(--abc-border)] px-4 py-2.5", children: /* @__PURE__ */ c("div", { className: "flex flex-wrap items-end gap-3", children: [
            Wn.map((k) => /* @__PURE__ */ c("div", { className: "w-48", children: [
              /* @__PURE__ */ e("div", { className: "mb-1 text-[11px] text-[var(--abc-fg-muted)]", children: k.label }),
              es(k)
            ] }, k.key)),
            /* @__PURE__ */ e(
              xe,
              {
                variant: "primary",
                size: "sm",
                onClick: () => Qn(),
                icon: /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5" }),
                children: "搜索"
              }
            )
          ] }) }),
          /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
              !Mo && a && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: a }),
              Gi && /* @__PURE__ */ e(
                xe,
                {
                  variant: "primary",
                  icon: /* @__PURE__ */ e(Sn, { className: "h-3.5 w-3.5" }),
                  onClick: () => void Gn(),
                  children: al
                }
              ),
              gt && Kn && (he || (ke == null ? void 0 : ke.delete)) && /* @__PURE__ */ e(
                xe,
                {
                  variant: "danger",
                  disabled: Kt.length === 0,
                  icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
                  onClick: () => void Co(Kt),
                  children: "批量删除"
                }
              ),
              re && No && /* @__PURE__ */ e(
                xe,
                {
                  variant: "secondary",
                  loading: Ci,
                  icon: /* @__PURE__ */ e(hs, { className: "h-3.5 w-3.5" }),
                  onClick: () => void _o(),
                  children: "导出"
                }
              ),
              Ne && /* @__PURE__ */ e(
                xe,
                {
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" }),
                  onClick: () => void ($ == null ? void 0 : $()),
                  children: "导入"
                }
              ),
              Jt.filter((k) => Je(k.permission)).map((k) => /* @__PURE__ */ e(
                xe,
                {
                  variant: k.variant ?? k.type ?? "secondary",
                  icon: k.icon,
                  onClick: k.onClick,
                  children: k.label
                },
                k.key
              )),
              rl,
              nr && Wn.length > 0 && /* @__PURE__ */ e(
                xe,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => yi((k) => !k),
                  children: no ? "收起筛选" : "展开筛选"
                }
              ),
              nr && Qt.length > 0 && /* @__PURE__ */ e(
                xe,
                {
                  variant: "secondary",
                  size: "sm",
                  icon: /* @__PURE__ */ e(Vt, { className: "h-3.5 w-3.5" }),
                  onClick: ka,
                  children: "重置"
                }
              )
            ] }),
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              Tt && /* @__PURE__ */ e(
                Qe,
                {
                  size: "xs",
                  allowClear: !0,
                  prefix: /* @__PURE__ */ e(Aa, { className: "h-3 w-3" }),
                  placeholder: "当前数据即时检索（支持拼音）...",
                  value: ha,
                  onChange: (k) => {
                    so(k.target.value), sr(1);
                  },
                  wrapperClassName: "w-52"
                }
              ),
              el && /* @__PURE__ */ e(
                Et,
                {
                  content: Tt ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      "aria-pressed": Tt,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const k = !Tt;
                        hi(k), sr(1), Ae.info(
                          k ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式"
                        );
                      },
                      className: p(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        Tt ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(Aa, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: Tt ? "前端筛选" : "接口筛选" })
                      ]
                    }
                  )
                }
              ),
              Ei && ot && /* @__PURE__ */ c("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
                /* @__PURE__ */ e(
                  Et,
                  {
                    content: Yr ? `定时轮询运行中：每 ${To} 自动刷新（点击暂停）` : "点击开启自动定时轮询刷新",
                    children: /* @__PURE__ */ c(
                      "button",
                      {
                        type: "button",
                        "aria-label": "切换定时自动刷新",
                        onClick: () => po((k) => !k),
                        className: p(
                          "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                          Yr ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                        ),
                        children: [
                          /* @__PURE__ */ e(
                            on,
                            {
                              className: p("h-3.5 w-3.5", Yr && "animate-pulse")
                            }
                          ),
                          Yr && /* @__PURE__ */ e("span", { children: To })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(
                  ca,
                  {
                    placement: "bottomRight",
                    items: dc.map((k) => ({
                      key: String(k.key),
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ c("span", { children: [
                          "每 ",
                          k.label,
                          " 刷新"
                        ] }),
                        ga === k.key && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => {
                        Ai(k.key), po(!0);
                      }
                    })),
                    children: /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "选择轮询频率",
                        className: "inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(Yt, { className: "h-3 w-3" })
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ e(Et, { content: nr ? "关闭表头内联筛选行" : "开启表头内联筛选行", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => xi(!nr),
                  className: p(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    nr ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(uu, { className: "h-3.5 w-3.5" })
                }
              ) }),
              No && !re && /* @__PURE__ */ e(Et, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "导出数据",
                  onClick: () => void _o(),
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(hs, { className: "h-3.5 w-3.5" })
                }
              ) }),
              ot && /* @__PURE__ */ e(Et, { content: "刷新表格数据", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "刷新数据",
                  onClick: () => void Ct(),
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(da, { className: p("h-3.5 w-3.5", uo && "animate-spin") })
                }
              ) }),
              /* @__PURE__ */ e(
                ca,
                {
                  placement: "bottomRight",
                  items: [
                    {
                      key: "comfortable",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "宽松密度" }),
                        vt.density === "comfortable" && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => jn("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "标准密度" }),
                        vt.density === "default" && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => jn("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑密度" }),
                        vt.density === "compact" && /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => jn("compact")
                    }
                  ],
                  children: /* @__PURE__ */ e(Et, { content: "表格行密度", children: /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "表格行密度",
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(bu, { className: "h-3.5 w-3.5" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ e(Et, { content: Pr ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": Pr ? "退出全屏" : "全屏展示",
                  onClick: () => bo((k) => !k),
                  className: p(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    Pr ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: Pr ? /* @__PURE__ */ e(Ms, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Es, { className: "h-3.5 w-3.5" })
                }
              ) }),
              Wt && /* @__PURE__ */ e(
                qf,
                {
                  columns: s,
                  searchableFieldNames: Di,
                  settings: vt,
                  hasActionColumn: Zn,
                  defaultActionWidth: Jn,
                  motion: pe,
                  onToggleVisible: Qs,
                  onSetAllVisible: fi,
                  onSetFixed: eo,
                  onSetWidth: to,
                  onSetOrder: ro,
                  onSetSearchVisible: pi,
                  onReset: ao
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            ec,
            {
              columns: Zi,
              data: Vi,
              rowKey: A,
              loading: uo,
              density: vt.density,
              motion: pe,
              selectedKeys: Xn ? Kt : void 0,
              onSelectionChange: Xn ? (k, D) => {
                Jr(k, D);
              } : void 0,
              sortState: $t,
              onSortChange: (k, D) => {
                oo({ key: k, direction: D }), sr(1);
              },
              headerFilterMode: nr,
              headerFilters: Nt,
              onHeaderFilterChange: (k, D) => {
                sr(1), Ca(k, D), Ga((q) => ({ ...q, [k]: D }));
              },
              headerFilterRender: nr ? void 0 : (k) => {
                const D = Array.isArray(k.dataIndex) ? k.dataIndex.join(".") : String(k.dataIndex ?? k.key), q = Ut.find(
                  (_e) => _e.columnKey === k.key || _e.key === D
                ), J = k.filterOptions ?? (q == null ? void 0 : q.options), Q = k.filterType ?? (J && J.length > 0 ? "select" : "text");
                return /* @__PURE__ */ e(
                  Yf,
                  {
                    title: k.title,
                    filterType: Q,
                    filterOptions: J,
                    value: Nt[D],
                    onApply: (_e) => {
                      sr(1), Ca(D, _e), Ga((ge) => ({ ...ge, [D]: _e }));
                    }
                  }
                );
              },
              activeFilterKeys: nl,
              activeFilterLabels: sl,
              columnWidths: vt.columnWidths,
              onColumnResize: to,
              columnFixed: vt.columnFixed,
              onColumnPin: eo,
              onColumnHide: Wt ? Qs : void 0,
              onResetColumns: Wt ? ao : void 0,
              onColumnReorder: Wt ? ro : void 0,
              treeData: wt,
              expandable: Ji,
              rowDraggable: !!(st != null && st.enabled),
              onRowDragEnd: st != null && st.enabled ? Xi : void 0,
              activeRowKey: _,
              onRowClick: S,
              onRow: E,
              onRowView: (k, D) => void Vn(k, D),
              onEmptyReset: Na > 0 ? ka : void 0,
              maxHeight: Zt,
              className: "rounded-none border-0"
            }
          ),
          !N && w !== !1 && /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] px-4 py-3", children: M ? M({
            current: Dt,
            pageSize: Pt,
            total: Un,
            mode: typeof w == "object" && w.mode ? w.mode : "offset"
          }) : typeof w == "object" ? /* @__PURE__ */ e(
            hn,
            {
              current: Dt,
              pageSize: Pt,
              pageSizeOptions: L,
              motion: pe,
              total: Un,
              onChange: (k, D) => {
                sr(k), co(D);
              },
              ...w
            }
          ) : /* @__PURE__ */ e(
            hn,
            {
              current: Dt,
              pageSize: Pt,
              pageSizeOptions: L,
              motion: pe,
              total: Un,
              onChange: (k, D) => {
                sr(k), co(D);
              }
            }
          ) })
        ] }),
        Xn && Kt.length > 0 && /* @__PURE__ */ e(
          Zf,
          {
            selectedKeys: Kt,
            selectedRows: ko,
            batchActions: So,
            extraContent: dt == null ? void 0 : dt(Kt, ko),
            motion: pe,
            onBatchDelete: Kn && (he || ke != null && ke.delete) ? () => void Co(Kt) : void 0,
            onClear: () => Jr([], [])
          }
        ),
        /* @__PURE__ */ e(
          Kf,
          {
            open: !!qa,
            onClose: () => Fn(null),
            record: qa,
            columns: s,
            viewTitle: be ?? (C ? "详情" : "记录详情"),
            viewSize: fe,
            viewLoading: Li,
            canEdit: Zr,
            onEditRecord: (k) => void zr(k),
            renderViewExtra: Pe,
            renderViewFooter: Me
          }
        ),
        /* @__PURE__ */ e(
          Wf,
          {
            open: Br,
            onClose: () => Xa(!1),
            isEdit: cr,
            currentRecord: Xr,
            container: Ie,
            dialogTitle: b ?? (C ? { add: "新增", edit: "编辑" } : { add: "新建记录", edit: "编辑记录" }),
            dialogSize: f,
            formLayout: v,
            formColumns: Qi,
            formFields: Sr,
            form: ut,
            formSchema: u,
            columns: s,
            formSubmitting: Pi,
            formDetailLoading: Bi,
            formError: ji,
            onSubmit: qi,
            draftEnabled: or,
            showDraftButton: !!(m != null && m.showDraftButton && or),
            showDraftBanner: Ri,
            draftBannerMode: qr ? "auto-restored" : "prompt",
            onSaveDraft: or ? () => {
              hr.saveDraft(ut.getValues()), Ae.success("草稿已保存");
            } : void 0,
            onRestoreDraft: () => {
              const k = hr.readDraft();
              k && ut.reset({ ...pr(), ...k }), jr(!1);
            },
            onDiscardDraft: () => {
              hr.clearDraft(), qr && ut.reset(pr()), jr(!1);
            },
            submitButtonText: C ? "保存" : "确认提交",
            renderFormExtra: Ht,
            renderCustomForm: mr,
            onSuccessFetch: () => {
              ot && Ct();
            }
          }
        )
      ]
    }
  );
}
const Eh = mi, Ah = mi;
function ep(t, r) {
  if (t) return t;
  if (r) {
    if (r.includes("max-w-5xl") || r.includes("max-w-4xl")) return "2xl";
    if (r.includes("max-w-3xl")) return "xl";
    if (r.includes("max-w-2xl") || r.includes("max-w-xl")) return "lg";
    if (r.includes("max-w-md")) return "md";
    if (r.includes("max-w-sm")) return "sm";
  }
  return "lg";
}
function tp({
  title: t,
  description: r,
  triggerLabel: a,
  triggerIcon: n,
  triggerVariant: s = "primary",
  mode: o = "modal",
  size: d,
  maxWidthClass: i,
  footer: u,
  open: l,
  onOpenChange: b,
  summarySlot: f,
  emptySummaryHint: v,
  headerActions: m,
  modalHeaderActions: h,
  inlineInTestEnv: g,
  renderInlineContainer: y,
  renderSummaryContainer: C,
  className: x,
  children: I
}) {
  var E;
  const A = g ?? (typeof process < "u" && ((E = process.env) == null ? void 0 : E.NODE_ENV) === "test" || typeof import.meta < "u" && !1), [B, L] = F(!1), N = l !== void 0 ? l : B, w = (z) => {
    l === void 0 && L(z), b == null || b(z);
  };
  if (A)
    return y ? /* @__PURE__ */ e(Ue, { children: y({
      title: t,
      description: r,
      headerActions: m,
      modalHeaderActions: h,
      summarySlot: f,
      className: x,
      children: I
    }) }) : /* @__PURE__ */ c(
      "section",
      {
        "data-slot": "pro-form-inline",
        className: p(
          "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          x
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ c("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            (m || h) && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
              m,
              h
            ] })
          ] }),
          f,
          /* @__PURE__ */ e("div", { children: I })
        ]
      }
    );
  const S = /* @__PURE__ */ c(
    xe,
    {
      size: "sm",
      variant: s === "outline" ? "outline" : s === "secondary" ? "secondary" : "primary",
      onClick: () => w(!0),
      className: "gap-1.5 text-xs font-semibold cursor-pointer",
      children: [
        n ?? /* @__PURE__ */ e("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", fill: "none", className: "h-3.5 w-3.5 shrink-0", children: /* @__PURE__ */ e("path", { d: "M8 3.25v9.5M3.25 8h9.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) }),
        /* @__PURE__ */ e("span", { children: a })
      ]
    }
  );
  return /* @__PURE__ */ c(Ue, { children: [
    C ? C({
      title: t,
      description: r,
      triggerButton: S,
      headerActions: m,
      summarySlot: f,
      emptySummaryHint: v,
      className: x
    }) : /* @__PURE__ */ c(
      "section",
      {
        "data-slot": "pro-form-summary",
        className: p(
          "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          x
        ),
        children: [
          /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
            /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ c("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
              m,
              S
            ] })
          ] }),
          f ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: f }) : v ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3 text-xs text-[var(--abc-fg-muted)]", children: v }) : null
        ]
      }
    ),
    o === "drawer" ? /* @__PURE__ */ e(
      Wa,
      {
        open: N,
        onClose: () => w(!1),
        title: t,
        description: r,
        size: ep(d, i),
        footer: u ?? h,
        className: i,
        children: I
      }
    ) : /* @__PURE__ */ e(
      lb,
      {
        open: N,
        onClose: () => w(!1),
        title: t,
        description: r,
        footer: u ?? h,
        className: i,
        children: I
      }
    )
  ] });
}
const Lh = tp, rp = {
  searchPlaceholder: "过滤日志内容…",
  stickBottomLabel: "自动贴底",
  copyLabel: "复制",
  copiedLabel: "已复制",
  emptyText: "无符合筛选条件的日志。",
  clearSearchLabel: "清空搜索",
  formatLineCount: (t, r) => `${t} / ${r} 行`
}, ap = ["all", "info", "warn", "error"];
function np({
  logs: t,
  heightClass: r = "h-[440px]",
  estimateSize: a = 26,
  overscan: n = 12,
  defaultStickBottom: s = !1,
  labels: o,
  className: d
}) {
  var U;
  const i = { ...rp, ...o }, u = le.useRef(null), [l, b] = le.useState(""), [f, v] = le.useState("all"), [m, h] = le.useState(s), [g, y] = le.useState(!1), [C, x] = le.useState(0), [I, A] = le.useState(0), B = typeof process < "u" && ((U = process.env) == null ? void 0 : U.NODE_ENV) === "test" || typeof import.meta < "u" && !1, L = le.useMemo(() => t.map((R, T) => {
    if (typeof R == "string") {
      const P = R.toLowerCase(), W = P.includes("error") ? "error" : P.includes("warn") ? "warn" : "info";
      return { seq: T + 1, level: W, message: R };
    }
    return {
      seq: R.seq ?? T + 1,
      level: R.level || "info",
      message: R.message || "",
      detail: R.detail,
      created_at: R.created_at
    };
  }), [t]), N = le.useMemo(() => {
    const R = l.trim().toLowerCase();
    return L.filter((T) => {
      var P;
      return f !== "all" && ((P = T.level) == null ? void 0 : P.toLowerCase()) !== f ? !1 : R ? T.message.toLowerCase().includes(R) || (T.created_at ? T.created_at.toLowerCase().includes(R) : !1) || (T.detail ? JSON.stringify(T.detail).toLowerCase().includes(R) : !1) : !0;
    });
  }, [L, l, f]);
  le.useEffect(() => {
    const R = u.current;
    if (!R) return;
    const T = () => {
      R.clientHeight > 0 && A(R.clientHeight);
    };
    if (T(), typeof ResizeObserver > "u") return;
    const P = new ResizeObserver(T);
    return P.observe(R), () => P.disconnect();
  }, []), le.useEffect(() => {
    const R = u.current;
    !m || !R || N.length === 0 || (R.scrollTop = R.scrollHeight, x(R.scrollTop));
  }, [N.length, m]);
  const w = !B && N.length > 80 && I > 0, M = N.length * a, { startIndex: _, endIndex: S } = le.useMemo(() => {
    if (!w)
      return { startIndex: 0, endIndex: Math.max(0, N.length - 1) };
    const R = Math.ceil(I / a), T = Math.floor(C / a) - n, P = Math.max(0, T), W = Math.min(N.length - 1, Math.floor(C / a) + R + n);
    return { startIndex: P, endIndex: W };
  }, [w, N.length, I, a, C, n]), E = le.useMemo(() => N.length === 0 ? [] : N.slice(_, S + 1).map((R, T) => ({
    log: R,
    index: _ + T
  })), [N, _, S]), z = async () => {
    const R = N.map(
      (T) => `[${T.created_at || "LOG"}][${(T.level || "INFO").toUpperCase()}] ${T.message} ${T.detail ? JSON.stringify(T.detail) : ""}`.trim()
    ).join(`
`);
    try {
      await navigator.clipboard.writeText(R), y(!0), setTimeout(() => y(!1), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "pro-log-viewer",
      className: p(
        "flex flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-slate-800 bg-slate-950 font-mono text-slate-200 shadow-md",
        d
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2 text-xs", children: [
          /* @__PURE__ */ c("div", { className: "flex min-w-44 flex-1 items-center gap-2", children: [
            /* @__PURE__ */ c("div", { className: "relative max-w-sm flex-1", children: [
              /* @__PURE__ */ e(
                It,
                {
                  className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: l,
                  onChange: (R) => b(R.target.value),
                  placeholder: i.searchPlaceholder,
                  className: "h-7 w-full rounded-md border border-slate-700 bg-slate-950 pl-8 pr-7 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                }
              ),
              l && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": i.clearSearchLabel,
                  onClick: () => b(""),
                  className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer",
                  children: /* @__PURE__ */ e(ft, { className: "h-3.5 w-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 p-0.5", children: ap.map((R) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => v(R),
                className: p(
                  "rounded px-2 py-0.5 text-[10px] font-semibold uppercase transition cursor-pointer",
                  f === R ? R === "error" ? "bg-rose-500/20 text-rose-300" : R === "warn" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/25 text-blue-300" : "text-slate-400 hover:text-slate-200"
                ),
                children: R
              },
              R
            )) })
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-3 text-[11px] text-slate-400", children: [
            /* @__PURE__ */ e("span", { className: "tabular-nums", children: i.formatLineCount(N.length, L.length) }),
            /* @__PURE__ */ c("label", { className: "flex cursor-pointer items-center gap-1.5 select-none hover:text-slate-200", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: m,
                  onChange: (R) => h(R.target.checked),
                  className: "h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-0"
                }
              ),
              /* @__PURE__ */ e("span", { children: i.stickBottomLabel })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => void z(),
                className: "flex items-center gap-1 rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer",
                children: g ? /* @__PURE__ */ c(Ue, { children: [
                  /* @__PURE__ */ e(bt, { className: "h-3 w-3 text-emerald-400", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { className: "text-emerald-300", children: i.copiedLabel })
                ] }) : /* @__PURE__ */ c(Ue, { children: [
                  /* @__PURE__ */ e(Or, { className: "h-3 w-3", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: i.copyLabel })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            ref: u,
            onScroll: (R) => x(R.currentTarget.scrollTop),
            className: p("relative w-full overflow-auto", r),
            children: N.length === 0 ? /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center p-8 text-xs text-slate-500", children: i.emptyText }) : /* @__PURE__ */ e(
              "div",
              {
                style: w ? { height: `${M}px`, width: "100%", position: "relative" } : { width: "100%" },
                children: E.map(({ log: R, index: T }) => {
                  var K;
                  const P = ((K = R.level) == null ? void 0 : K.toLowerCase()) || "info", W = P === "error" || P === "fatal", j = P === "warn" || P === "warning";
                  return /* @__PURE__ */ c(
                    "div",
                    {
                      "data-index": T,
                      style: w ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${a}px`,
                        transform: `translateY(${T * a}px)`
                      } : void 0,
                      className: p(
                        "flex items-center gap-2.5 px-3 py-1 text-xs leading-5 transition-colors hover:bg-slate-900/60",
                        w ? "overflow-hidden whitespace-nowrap" : "items-start",
                        W ? "bg-rose-950/20 text-rose-200" : j ? "bg-amber-950/15 text-amber-200" : "text-slate-300"
                      ),
                      children: [
                        /* @__PURE__ */ e("span", { className: "w-10 shrink-0 select-none text-right text-[10px] text-slate-600 tabular-nums", children: R.seq }),
                        R.created_at && /* @__PURE__ */ e("span", { className: "shrink-0 select-none text-[11px] text-slate-500 tabular-nums", children: R.created_at.length >= 19 ? R.created_at.slice(11, 19) : R.created_at }),
                        /* @__PURE__ */ e(
                          "span",
                          {
                            className: p(
                              "inline-block w-12 shrink-0 select-none rounded px-1 py-0.5 text-center text-[9px] font-bold uppercase leading-none",
                              W ? "bg-rose-500/25 text-rose-300" : j ? "bg-amber-500/25 text-amber-300" : "bg-slate-800 text-slate-400"
                            ),
                            children: P.slice(0, 5)
                          }
                        ),
                        /* @__PURE__ */ c(
                          "div",
                          {
                            className: p(
                              "min-w-0 flex-1",
                              w ? "truncate" : "break-all whitespace-pre-wrap"
                            ),
                            title: w ? `${R.message}${R.detail ? ` ${JSON.stringify(R.detail)}` : ""}` : void 0,
                            children: [
                              /* @__PURE__ */ e("span", { children: R.message }),
                              R.detail && Object.keys(R.detail).length > 0 && /* @__PURE__ */ e("span", { className: "ml-2 text-[11px] text-slate-500", children: JSON.stringify(R.detail) })
                            ]
                          }
                        )
                      ]
                    },
                    `${R.seq ?? T}-${T}`
                  );
                })
              }
            )
          }
        )
      ]
    }
  );
}
const Dh = np, sp = {
  dialogLabel: "全局命令面板",
  searchPlaceholder: "搜索页面，或输入实体 ID (如 job_ / org_)…",
  emptyText: "未找到匹配的页面或快捷操作。",
  entityGroupHeading: "实体智能精准定位",
  pagesGroupHeading: "后台功能模块直达",
  actionsGroupHeading: "常用系统偏好与操作",
  navigateHint: "选择",
  openHint: "打开",
  footerBrand: "ABC Design Command",
  enterKeyLabel: "Enter ↵"
}, op = {
  blue: "bg-blue-500/15 text-blue-500 dark:text-blue-300",
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  purple: "bg-purple-500/15 text-purple-600 dark:text-purple-300",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-300"
};
function Ph({
  open: t,
  onOpenChange: r,
  enableShortcut: a = !0,
  entityMatchers: n = [],
  pages: s = [],
  onNavigate: o,
  actions: d = [],
  labels: i,
  searchQuery: u,
  onSearchQueryChange: l
}) {
  const b = { ...sp, ...i }, [f, v] = le.useState(!1), [m, h] = le.useState(""), [g, y] = le.useState(0), C = le.useRef(null), x = le.useRef([]), I = typeof t == "boolean", A = I ? t : f, B = le.useCallback(
    (T) => {
      I || v(T), r == null || r(T);
    },
    [I, r]
  ), L = u !== void 0 ? u : m, N = le.useCallback(
    (T) => {
      u === void 0 && h(T), l == null || l(T);
    },
    [u, l]
  );
  le.useEffect(() => {
    if (!a || typeof window > "u") return;
    const T = (P) => {
      (P.metaKey || P.ctrlKey) && P.key.toLowerCase() === "k" && (P.preventDefault(), B(!A));
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [a, A, B]), le.useEffect(() => {
    if (!A) return;
    y(0);
    const T = setTimeout(() => {
      var P;
      (P = C.current) == null || P.focus();
    }, 10);
    return () => clearTimeout(T);
  }, [A]);
  const w = L.trim(), M = le.useMemo(() => w ? n.filter((T) => T.match ? T.match(w) : T.prefix ? w.startsWith(T.prefix) : !1) : [], [n, w]), _ = le.useMemo(() => w ? s.filter(
    (T) => qt(`${T.label} ${T.group ?? ""} ${T.to} ${T.keywords ?? ""}`, w)
  ) : s, [s, w]), S = le.useMemo(() => w ? d.filter(
    (T) => qt(`${T.label} ${T.group ?? ""} ${T.keywords ?? ""}`, w)
  ) : d, [d, w]), E = le.useCallback(
    (T) => {
      B(!1), N(""), T();
    },
    [B, N]
  ), z = le.useMemo(() => {
    const T = [];
    for (const P of M)
      T.push({
        key: `entity-${P.id}-${w}`,
        trigger: () => E(() => P.onSelect(w))
      });
    for (const P of _)
      T.push({
        key: `page-${P.id ?? P.to}`,
        trigger: () => E(() => {
          P.onSelect ? P.onSelect() : o == null || o(P.to, P);
        })
      });
    for (const P of S)
      T.push({
        key: `action-${P.id}`,
        trigger: () => E(P.onSelect)
      });
    return T;
  }, [M, _, S, w, E, o]);
  le.useEffect(() => {
    y(0);
  }, [w]), le.useEffect(() => {
    const T = x.current[g];
    T && typeof T.scrollIntoView == "function" && T.scrollIntoView({ block: "nearest" });
  }, [g]);
  const U = (T) => {
    if (T.key === "ArrowDown") {
      T.preventDefault(), z.length > 0 && y((P) => (P + 1) % z.length);
      return;
    }
    if (T.key === "ArrowUp") {
      T.preventDefault(), z.length > 0 && y((P) => (P - 1 + z.length) % z.length);
      return;
    }
    if (T.key === "Enter") {
      const P = z[g];
      P && (T.preventDefault(), P.trigger());
    }
  };
  let R = 0;
  return /* @__PURE__ */ e(
    Xt,
    {
      open: A,
      onClose: () => B(!1),
      closable: !1,
      draggable: !1,
      fullscreenable: !1,
      width: "min(680px, 92vw)",
      "aria-label": b.dialogLabel,
      className: "overflow-hidden [&>[data-dialog-body]]:p-0",
      children: /* @__PURE__ */ c(
        "div",
        {
          "data-slot": "pro-command-palette",
          className: "flex flex-col bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ c("div", { className: "flex items-center border-b border-[var(--abc-border)] px-4", children: [
              /* @__PURE__ */ e(It, { className: "mr-2.5 h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: C,
                  type: "text",
                  value: L,
                  onChange: (T) => N(T.target.value),
                  onKeyDown: U,
                  placeholder: b.searchPlaceholder,
                  "aria-label": b.searchPlaceholder,
                  className: "h-12 w-full bg-transparent text-sm text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              ),
              /* @__PURE__ */ e("kbd", { className: "hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] sm:inline-block", children: "ESC" })
            ] }),
            /* @__PURE__ */ e("div", { role: "listbox", className: "max-h-96 space-y-2 overflow-y-auto p-2", children: z.length === 0 ? /* @__PURE__ */ e("div", { className: "py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: b.emptyText }) : /* @__PURE__ */ c(Ue, { children: [
              M.length > 0 && /* @__PURE__ */ c("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-primary)]", children: b.entityGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: M.map((T) => {
                  const P = R++, W = P === g, j = op[T.tone ?? "blue"];
                  return /* @__PURE__ */ c(
                    "button",
                    {
                      ref: (K) => {
                        x.current[P] = K;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": W,
                      "data-selected": W ? "true" : void 0,
                      onMouseEnter: () => y(P),
                      onClick: () => E(() => T.onSelect(w)),
                      className: p(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        W ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: [
                        T.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: T.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate font-mono", children: T.renderLabel ? T.renderLabel(w) : /* @__PURE__ */ c(Ue, { children: [
                          T.labelPrefix ? `${T.labelPrefix} ` : "",
                          /* @__PURE__ */ e("strong", { className: "font-semibold", children: w })
                        ] }) }),
                        /* @__PURE__ */ e("span", { className: p("rounded px-1.5 py-0.5 text-[10px] font-mono", j), children: b.enterKeyLabel })
                      ]
                    },
                    `entity-${T.id}`
                  );
                }) })
              ] }),
              _.length > 0 && /* @__PURE__ */ c("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: b.pagesGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: _.map((T) => {
                  const P = R++, W = P === g;
                  return /* @__PURE__ */ c(
                    "button",
                    {
                      ref: (j) => {
                        x.current[P] = j;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": W,
                      "data-selected": W ? "true" : void 0,
                      onMouseEnter: () => y(P),
                      onClick: () => E(() => {
                        T.onSelect ? T.onSelect() : o == null || o(T.to, T);
                      }),
                      className: p(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        W ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        T.icon && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: T.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: T.label }),
                        T.group && /* @__PURE__ */ e("span", { className: "shrink-0 text-[10px] text-[var(--abc-fg-muted)]", children: T.group })
                      ]
                    },
                    `page-${T.id ?? T.to}`
                  );
                }) })
              ] }),
              S.length > 0 && /* @__PURE__ */ c("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: b.actionsGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: S.map((T) => {
                  const P = R++, W = P === g;
                  return /* @__PURE__ */ c(
                    "button",
                    {
                      ref: (j) => {
                        x.current[P] = j;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": W,
                      "data-selected": W ? "true" : void 0,
                      onMouseEnter: () => y(P),
                      onClick: () => E(T.onSelect),
                      className: p(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        T.danger ? W ? "bg-red-500/15 text-[var(--abc-danger)]" : "text-[var(--abc-danger)] hover:bg-red-500/10" : W ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        T.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: T.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: T.label }),
                        W && /* @__PURE__ */ e(Cc, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
                      ]
                    },
                    `action-${T.id}`
                  );
                }) })
              ] })
            ] }) }),
            /* @__PURE__ */ c("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-4 py-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ c("span", { children: [
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↑" }),
                  " ",
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↓" }),
                  " ",
                  b.navigateHint
                ] }),
                /* @__PURE__ */ c("span", { children: [
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↵" }),
                  " ",
                  b.openHint
                ] })
              ] }),
              /* @__PURE__ */ e("span", { children: b.footerBrand })
            ] })
          ]
        }
      )
    }
  );
}
function Bh({
  onClick: t,
  placeholder: r = "快速搜索页面、实体 ID…",
  mobilePlaceholder: a = "搜索…",
  ariaLabel: n = "打开全局命令面板",
  className: s,
  ...o
}) {
  const d = typeof navigator < "u" && /mac|iphone|ipad|ipod/i.test(navigator.userAgent);
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      "data-slot": "command-trigger-button",
      onClick: t,
      "aria-label": n,
      className: p(
        "group inline-flex h-8.5 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs text-[var(--abc-fg-muted)] shadow-2xs transition cursor-pointer",
        "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        s
      ),
      ...o,
      children: [
        /* @__PURE__ */ e(It, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)]", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: r }),
        /* @__PURE__ */ e("span", { className: "sm:hidden", children: a }),
        /* @__PURE__ */ e("kbd", { className: "ml-1 hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)] sm:inline-block", children: d ? "⌘K" : "Ctrl+K" })
      ]
    }
  );
}
export {
  ns as ABC_BRAND_PRESETS,
  Do as ABC_DENSITY_PRESETS,
  xf as ABC_HEADER_HEIGHT_BY_SIZE,
  Sa as ABC_MOTION_PRESETS,
  Po as ABC_RADIUS_PRESETS,
  gf as ABC_SIDEBAR_WIDTH_BY_SIZE,
  mp as ABC_SIZE_PRESETS,
  Rc as AbcConfirmHost,
  xp as AbcProvider,
  xb as AbcToastViewport,
  Rp as ActionCard,
  ch as Alert,
  rh as AsyncInlineError,
  sh as AttentionList,
  Vo as AuroraBackground,
  Tf as AuthLayout,
  zb as Avatar,
  gn as BYTE_UNITS,
  Yc as BYTE_UNIT_FACTORS,
  Mp as Badge,
  Fp as BentoCard,
  Op as BentoGrid,
  Go as BorderBeam,
  sa as BrandLogoBlock,
  Wp as Breadcrumb,
  xe as Button,
  qp as ByteQuotaInput,
  vn as Card,
  Vb as CardContent,
  Gb as CardDescription,
  Yb as CardFooter,
  Kb as CardHeader,
  Ub as CardTitle,
  jp as CheckCard,
  Bp as CheckCardGroup,
  Pa as Checkbox,
  Qp as Collapse,
  zp as CollapsibleCard,
  _f as CommandPalette,
  Bh as CommandTriggerButton,
  oh as ConfirmDialog,
  vp as ConfirmProvider,
  wp as CopyButton,
  ri as CopyableCode,
  Ko as CopyableText,
  kh as CrudConfigPage,
  wh as CrudFormLayout,
  Mh as CrudSearchForm,
  Ah as CrudTable,
  Cp as CursorPagination,
  yf as DEFAULT_ABC_LAYOUT_SETTINGS,
  St as DEFAULT_ABC_THEME,
  xn as DURATION_UNITS,
  qc as DURATION_UNIT_FACTORS,
  An as DatePicker,
  Ln as DateRangePicker,
  ai as DescriptionList,
  th as DescriptionListItem,
  Jp as Descriptions,
  Xt as Dialog,
  Rs as DialogContent,
  js as DialogContext,
  Fs as DialogDescription,
  $s as DialogFooter,
  zs as DialogHeader,
  Os as DialogTitle,
  fh as DictSelect,
  ph as DictTag,
  Ap as Divider,
  Wa as Drawer,
  Hm as DrawerBody,
  Wm as DrawerDescription,
  Km as DrawerFooter,
  Om as DrawerHeader,
  Fm as DrawerTitle,
  ca as Dropdown,
  kf as DualColumnNav,
  Xp as DurationQuotaInput,
  Pb as EmptyState,
  af as ErrorBoundary,
  Ch as FilterPillGroup,
  Gf as FilterToolbar,
  Lh as FormDrawerDialog,
  qs as FormField,
  Yf as HeaderColumnFilterPopover,
  Wo as ICON_CATALOG,
  dr as Icon,
  Np as IconBadge,
  Ho as IconPicker,
  Fa as ImagePreview,
  Vc as ImageUpload,
  Qe as Input,
  Vs as InputNumber,
  sf as InspectorPanel,
  ra as Kbd,
  If as KeepAliveContainer,
  cm as Label,
  Vm as Loading,
  nh as LoadingStateCard,
  Pp as MetricCard,
  lb as Modal,
  yh as MultiImageFieldControl,
  Sf as MultiTabBar,
  Wr as NotificationBanner,
  lh as OneTimeSecretDialog,
  uh as PageContainer,
  hn as Pagination,
  mh as Permission,
  Pf as PermissionGuard,
  Hc as Popover,
  $p as PricingCard,
  qf as ProColumnSettingsPopover,
  Ph as ProCommandPalette,
  Nh as ProConfigForm,
  Uf as ProConfigPage,
  Ff as ProCrudFormFieldControl,
  bi as ProCrudFormLayout,
  Wf as ProCrudFormModal,
  Jf as ProCrudSearchForm,
  Eh as ProCrudTable,
  Kf as ProCrudViewModal,
  Zf as ProFloatingBatchBar,
  tp as ProFormContainer,
  Bf as ProFormLayout,
  Of as ProIconFieldControl,
  bh as ProLayout,
  np as ProLogViewer,
  ui as ProMultiImageUpload,
  Xf as ProRowActionsOverflow,
  mi as ProTable,
  ef as Progress,
  Sh as QuickSelectBar,
  ir as RadioGroup,
  ah as ReadErrorBanner,
  Ih as ReasonedActionDialog,
  _h as ReasonedActionDrawer,
  rf as Result,
  Ab as RichIconText,
  im as SearchInput,
  Kp as SegmentedControl,
  Ot as Select,
  kp as SelectField,
  bs as SidebarNav,
  yt as Skeleton,
  Ip as SkeletonCard,
  Tp as SkeletonChart,
  _p as SkeletonTable,
  Gp as SliderVerify,
  Sp as SmartPagination,
  Lp as Space,
  dh as SplitInspectorLayout,
  Dp as SpotlightCard,
  Mr as StatusTag,
  Hp as Steps,
  Gt as Switch,
  $o as TONE_ICONS,
  ih as TabErrorBoundary,
  df as Table,
  bf as TableBody,
  vf as TableCaption,
  hf as TableCell,
  ec as TableCore,
  mf as TableFooter,
  pf as TableHead,
  uf as TableHeader,
  ff as TableRow,
  Zp as Tabs,
  $b as Tag,
  Sm as TagInput,
  $a as Textarea,
  sc as ThemeCustomizer,
  Rm as ThemeSwitcher,
  eh as Timeline,
  gb as ToastContainer,
  vb as ToastItemView,
  Et as Tooltip,
  tc as TopHorizontalNav,
  Up as Tree,
  Dh as VirtualLogViewer,
  Ym as Watermark,
  mn as abcConfirm,
  Ks as abcToast,
  Mt as applyAbcThemeToDocument,
  Ar as baseFieldControlClass,
  xs as buildCalendarMonthGrid,
  Vf as buildCsvContent,
  fp as buttonVariants,
  en as cleanQueryObject,
  fb as clearToasts,
  p as cn,
  os as collectAllExpandableKeys,
  _c as computeTreeCheckState,
  pp as confirm,
  Mn as copyToClipboard,
  Pn as createProTableApi,
  hh as createTableApi,
  Hs as dismissToast,
  ic as downloadTableCsv,
  yu as filterAndSortClientRows,
  xu as filterTreeNodes,
  si as findBreadcrumbChain,
  pn as flattenNodeText,
  Th as formatFilterText,
  tn as formatIsoDate,
  Vp as formatQuotaBytes,
  Yp as formatQuotaDuration,
  hu as getCharInitial,
  Dn as getNestedValue,
  Tn as getOverlayPortalContainer,
  vu as getPinyinInitials,
  xh as isFieldRequired,
  lr as isProApiFailure,
  di as isSchemaFieldRequired,
  ti as isSvgSource,
  qt as matchKeywordWithPinyin,
  wr as menuContainsPath,
  _s as normalizeProListResponse,
  ks as parseSelectChildren,
  bb as pauseToast,
  Jc as pickBestByteUnit,
  Qc as pickBestDurationUnit,
  ta as pushToast,
  wu as readQueryFromUrlSearch,
  yp as registerAbcIcons,
  aa as resolveAbcThemeMode,
  ia as resolveFieldKey,
  mb as resumeToast,
  Ep as tagVariants,
  gp as toast,
  gu as toggleTreeNodeChecked,
  pu as transitionAbcTheme,
  pt as useAbcConfig,
  li as useAbcDict,
  Nb as useAbcDrawerCascadeMode,
  ve as useAbcMotion,
  Js as useAbcPermission,
  Se as useAbcSize,
  jm as useColorScheme,
  hp as useConfirm,
  tr as useControllableState,
  gh as useCrudTable,
  cb as useDialog,
  ab as useDraftStorage,
  za as useFloatingPosition,
  wb as useOptionalAbcConfig,
  Fr as usePresence,
  zf as useProForm,
  Rf as useProTable,
  jf as useProTableApi,
  vh as useTableApi,
  nb as useTableSettings,
  Nu as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
