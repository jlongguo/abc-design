var fs = Object.defineProperty;
var ps = (t, r, a) => r in t ? fs(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var jr = (t, r, a) => ps(t, typeof r != "symbol" ? r + "" : r, a);
import qe, { useState as O, useEffect as le, useRef as de, useCallback as he, useLayoutEffect as Xr, useId as je, useContext as ln, createContext as dn, useMemo as ce, useImperativeHandle as xr } from "react";
import { jsxs as c, jsx as e, Fragment as Re } from "react/jsx-runtime";
import { Loader2 as yr, Minimize2 as da, Maximize2 as ba, X as Ke, Trash2 as jt, AlertTriangle as tr, CheckCircle2 as pt, HelpCircle as wr, Info as Nr, AlertCircle as Ot, Zap as hs, XCircle as vs, Wrench as gs, Wallet as xs, Video as ys, Users as ws, UserCog as Ns, UserCheck as ks, User as Cs, Upload as bn, Unlock as Ss, TrendingUp as Ms, Trash as Is, Timer as Es, Ticket as Ts, Terminal as _s, Tags as As, Tag as Ls, Store as Ds, StarOff as Ps, Star as Rs, Sparkles as kr, Smartphone as zs, SlidersHorizontal as qr, Sliders as Bs, ShoppingCart as js, ShoppingBag as Os, ShieldCheck as $s, ShieldAlert as un, Shield as Ws, Share2 as Fs, Share as Hs, Settings as Ks, Server as Us, Send as Vs, Search as dt, ScrollText as Gs, RotateCw as Cr, RotateCcw as Nt, RefreshCw as Sr, Receipt as Ys, Radio as Xs, PlusCircle as qs, Plus as ua, Play as mn, PieChart as Zs, PhoneCall as Js, Phone as Qs, Pause as eo, PanelTop as to, PanelLeft as ro, Palette as fn, Package as ao, Network as no, MoreHorizontal as ma, Monitor as pn, Minus as Mr, MessagesSquare as so, MessageSquareText as oo, MessageSquareQuote as co, MessageSquare as io, MessageCircle as lo, Menu as hn, Megaphone as bo, MapPin as uo, Lock as mo, ListOrdered as fo, ListChecks as po, Link2 as ho, LineChart as vo, LayoutGrid as go, LayoutDashboard as xo, Layers as vn, KeyRound as yo, Key as wo, Image as gn, Home as No, History as ko, Headphones as Co, HardDrive as So, Handshake as Mo, Globe2 as Io, Globe as Eo, FolderTree as To, FolderPlus as _o, FolderOpen as Ao, FolderGit2 as Lo, Folder as Do, Flame as Po, FileText as Ro, FileSpreadsheet as zo, FileClock as Bo, FileCheck as jo, Eye as $t, Edit3 as Zr, Edit as Oo, Download as xn, Database as $o, CreditCard as Wo, Cpu as Fo, Copy as fa, Compass as yn, Coins as Ho, Clock as pr, CircleDollarSign as Ko, CheckSquare as Uo, CheckCircle as Vo, Check as He, Camera as Go, CalendarCheck as Yo, Calendar as pa, Building2 as Xo, Boxes as qo, BookMarked as Zo, BellRing as Jo, Bell as Qo, BarChart3 as ec, BarChart2 as tc, AlertOctagon as rc, Activity as ac, EyeOff as wn, ChevronDown as ct, FolderSearch as nc, ChevronLeft as ha, ChevronRight as bt, ArrowUpRight as sc, ArrowDownRight as oc, ChevronsLeft as Nn, ChevronsRight as kn, UploadCloud as cc, ArrowRight as ic, ChevronsUpDown as lc, ChevronsDownUp as dc, ZoomOut as bc, ZoomIn as uc, GripVertical as va, ServerCrash as mc, FileSearch as fc, ArrowUp as Jr, ArrowDown as Qr, ArrowUpDown as za, Pin as Rt, PinOff as pc, Pencil as hc, CornerDownLeft as vc, Sun as ea, Moon as ta, Code2 as gc, PanelLeftOpen as xc, PanelLeftClose as yc, Save as wc, Filter as Qt, Settings2 as Nc, ChevronUp as Ba, ListFilter as kc, AlignJustify as Cc } from "lucide-react";
import { createPortal as tt } from "react-dom";
import ke from "dayjs";
const Or = {
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
}, ja = {
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
}, Oa = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, wd = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, Yt = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Ve = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, $a = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function Sc(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of $a)
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
  for (const s of $a)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function At(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Mc(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Ye(t) {
  const r = At(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return Mc(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), Sc(a, t.customBrandColor), r;
}
function Ic(t, r) {
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
const $r = [
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
function Ec(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = $r.length - 1; r >= 0; r--)
    if (t.localeCompare($r[r].start, "zh-CN") >= 0)
      return $r[r].letter;
  return t.toLowerCase();
}
function Tc(t) {
  return Array.from(t).map(Ec).join("");
}
function nt(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : Tc(t).includes(a);
}
function Cn(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      Cn(a, r);
  return r;
}
function Sn(t, r, a = !1) {
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
      const p = o(x);
      p.allChecked || (b = !1), p.someChecked && (u = !0);
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
function _c(t, r, a, n, s = !1) {
  const o = new Set(r);
  if (s)
    return n ? o.add(a.key) : o.delete(a.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const l = Cn(a);
  for (const i of l)
    n ? o.add(i) : o.delete(i);
  return Sn(t, Array.from(o), !1);
}
function Ac(t, r) {
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
function Wr(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function Mn(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function Lc({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let l = [...t];
  const i = a.trim();
  i && (l = l.filter((b) => (r && r.length > 0 ? r : Object.keys(b)).some((x) => {
    const p = b[x];
    return p != null && nt(String(p), i);
  })));
  for (const [b, u] of Object.entries(n))
    if (u != null) {
      if (Array.isArray(u)) {
        if (u.length === 0)
          continue;
        l = l.filter((x) => {
          const p = x[b];
          return p == null ? !1 : u.some((g) => String(p) === String(g) || nt(String(p), String(g)));
        });
        continue;
      }
      if (Mn(u)) {
        const x = (u.start ?? "").trim(), p = (u.end ?? "").trim();
        if (!x && !p)
          continue;
        l = l.filter((g) => {
          const d = g[b];
          if (d == null)
            return !1;
          const m = String(d).slice(0, 10);
          return !(x && m < x || p && m > p);
        });
        continue;
      }
      String(u).trim() !== "" && (l = l.filter((x) => {
        const p = x[b];
        return p == null ? !1 : nt(String(p), String(u));
      }));
    }
  if (s && o) {
    const b = o === "asc" ? 1 : -1;
    l.sort((u, x) => {
      const p = u[s], g = x[s];
      return typeof p == "number" && typeof g == "number" ? (p - g) * b : String(p ?? "").localeCompare(String(g ?? ""), "zh-CN") * b;
    });
  }
  return l;
}
function Wa(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || Mn(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function Dc(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((o, l) => {
    o && (s && !s.has(l) || (n[l] = o));
  }), n;
}
function Pc(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of r)
    n.delete(o);
  for (const [o, l] of Object.entries(a))
    l == null || Array.isArray(l) || typeof l == "object" || String(l).trim() !== "" && n.set(o, String(l));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function mr(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), l = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${l}`;
}
function ra(t, r, a = /* @__PURE__ */ new Date()) {
  const n = mr(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), o = new Date(t, r + 1, 0).getDate(), l = new Date(t, r, 0).getDate(), i = [];
  for (let u = s - 1; u >= 0; u--) {
    const x = l - u, p = mr(t, r - 1, x);
    i.push({ iso: p, day: x, inCurrentMonth: !1, isToday: p === n });
  }
  for (let u = 1; u <= o; u++) {
    const x = mr(t, r, u);
    i.push({ iso: x, day: u, inCurrentMonth: !0, isToday: x === n });
  }
  let b = 1;
  for (; i.length < 42; ) {
    const u = mr(t, r + 1, b);
    i.push({ iso: u, day: b, inCurrentMonth: !1, isToday: u === n }), b += 1;
  }
  return i;
}
function In(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = In(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Rc() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = In(t)) && (n && (n += " "), n += r);
  return n;
}
const ga = "-", zc = (t) => {
  const r = jc(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (l) => {
      const i = l.split(ga);
      return i[0] === "" && i.length !== 1 && i.shift(), En(i, r) || Bc(l);
    },
    getConflictingClassGroupIds: (l, i) => {
      const b = a[l] || [];
      return i && n[l] ? [...b, ...n[l]] : b;
    }
  };
}, En = (t, r) => {
  var l;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? En(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = t.join(ga);
  return (l = r.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : l.classGroupId;
}, Fa = /^\[(.+)\]$/, Bc = (t) => {
  if (Fa.test(t)) {
    const r = Fa.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, jc = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return $c(Object.entries(t.classGroups), a).forEach(([o, l]) => {
    aa(l, n, o, r);
  }), n;
}, aa = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : Ha(r, s);
      o.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (Oc(s)) {
        aa(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([o, l]) => {
      aa(l, Ha(r, o), a, n);
    });
  });
}, Ha = (t, r) => {
  let a = t;
  return r.split(ga).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Oc = (t) => t.isThemeGetter, $c = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([l, i]) => [r + l, i])) : o);
  return [a, s];
}) : t, Wc = (t) => {
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
}, Tn = "!", Fc = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], o = r.length, l = (i) => {
    const b = [];
    let u = 0, x = 0, p;
    for (let y = 0; y < i.length; y++) {
      let C = i[y];
      if (u === 0) {
        if (C === s && (n || i.slice(y, y + o) === r)) {
          b.push(i.slice(x, y)), x = y + o;
          continue;
        }
        if (C === "/") {
          p = y;
          continue;
        }
      }
      C === "[" ? u++ : C === "]" && u--;
    }
    const g = b.length === 0 ? i : i.substring(x), d = g.startsWith(Tn), m = d ? g.substring(1) : g, v = p && p > x ? p - x : void 0;
    return {
      modifiers: b,
      hasImportantModifier: d,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: l
  }) : l;
}, Hc = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, Kc = (t) => ({
  cache: Wc(t.cacheSize),
  parseClassName: Fc(t),
  ...zc(t)
}), Uc = /\s+/, Vc = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], l = t.trim().split(Uc);
  let i = "";
  for (let b = l.length - 1; b >= 0; b -= 1) {
    const u = l[b], {
      modifiers: x,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: d
    } = a(u);
    let m = !!d, v = n(m ? g.substring(0, d) : g);
    if (!v) {
      if (!m) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (v = n(g), !v) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      m = !1;
    }
    const y = Hc(x).join(":"), C = p ? y + Tn : y, h = C + v;
    if (o.includes(h))
      continue;
    o.push(h);
    const N = s(v, m);
    for (let E = 0; E < N.length; ++E) {
      const T = N[E];
      o.push(C + T);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Gc() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = _n(r)) && (n && (n += " "), n += a);
  return n;
}
const _n = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = _n(t[n])) && (a && (a += " "), a += r);
  return a;
};
function Yc(t, ...r) {
  let a, n, s, o = l;
  function l(b) {
    const u = r.reduce((x, p) => p(x), t());
    return a = Kc(u), n = a.cache.get, s = a.cache.set, o = i, i(b);
  }
  function i(b) {
    const u = n(b);
    if (u)
      return u;
    const x = Vc(b, a);
    return s(b, x), x;
  }
  return function() {
    return o(Gc.apply(null, arguments));
  };
}
const Pe = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, An = /^\[(?:([a-z-]+):)?(.+)\]$/i, Xc = /^\d+\/\d+$/, qc = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ei = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ti = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ot = (t) => Lt(t) || qc.has(t) || Xc.test(t), mt = (t) => Wt(t, "length", li), Lt = (t) => !!t && !Number.isNaN(Number(t)), Fr = (t) => Wt(t, "number", Lt), Xt = (t) => !!t && Number.isInteger(Number(t)), ri = (t) => t.endsWith("%") && Lt(t.slice(0, -1)), Ne = (t) => An.test(t), ft = (t) => Zc.test(t), ai = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ni = (t) => Wt(t, ai, Ln), si = (t) => Wt(t, "position", Ln), oi = /* @__PURE__ */ new Set(["image", "url"]), ci = (t) => Wt(t, oi, bi), ii = (t) => Wt(t, "", di), qt = () => !0, Wt = (t, r, a) => {
  const n = An.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, li = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jc.test(t) && !Qc.test(t)
), Ln = () => !1, di = (t) => ei.test(t), bi = (t) => ti.test(t), ui = () => {
  const t = Pe("colors"), r = Pe("spacing"), a = Pe("blur"), n = Pe("brightness"), s = Pe("borderColor"), o = Pe("borderRadius"), l = Pe("borderSpacing"), i = Pe("borderWidth"), b = Pe("contrast"), u = Pe("grayscale"), x = Pe("hueRotate"), p = Pe("invert"), g = Pe("gap"), d = Pe("gradientColorStops"), m = Pe("gradientColorStopPositions"), v = Pe("inset"), y = Pe("margin"), C = Pe("opacity"), h = Pe("padding"), N = Pe("saturate"), E = Pe("scale"), T = Pe("sepia"), L = Pe("skew"), S = Pe("space"), w = Pe("translate"), k = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", Ne, r], M = () => [Ne, r], _ = () => ["", ot, mt], $ = () => ["auto", Lt, Ne], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], z = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], H = () => ["", "0", Ne], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [Lt, Ne];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [qt],
      spacing: [ot, mt],
      blur: ["none", "", ft, Ne],
      brightness: ee(),
      borderColor: [t],
      borderRadius: ["none", "", "full", ft, Ne],
      borderSpacing: M(),
      borderWidth: _(),
      contrast: ee(),
      grayscale: H(),
      hueRotate: ee(),
      invert: H(),
      gap: M(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ri, mt],
      inset: R(),
      margin: R(),
      opacity: ee(),
      padding: M(),
      saturate: ee(),
      scale: ee(),
      sepia: H(),
      skew: ee(),
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
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
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
        object: [...G(), Ne]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        z: ["auto", Xt, Ne]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: R()
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
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Xt, Ne]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [qt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Xt, Ne]
        }, Ne]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [qt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Xt, Ne]
        }, Ne]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
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
        p: [h]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h]
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
        "space-x": [S]
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
        "space-y": [S]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qt]
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
        "line-clamp": ["none", Lt, Fr]
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
        decoration: [...z(), "wavy"]
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
        bg: [...G(), si]
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
        bg: ["auto", "cover", "contain", ni]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ci]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...z(), "hidden"]
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
        divide: z()
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
        outline: ["", ...z()]
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
        ring: _()
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
        shadow: ["", "inner", "none", ft, ii]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [qt]
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
        "mix-blend": [...W(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
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
        invert: [p]
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
        sepia: [T]
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
        "backdrop-invert": [p]
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
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
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
        duration: ee()
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
        delay: ee()
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
        rotate: [Xt, Ne]
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
        stroke: [ot, mt, Fr]
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
}, mi = /* @__PURE__ */ Yc(ui);
function f(...t) {
  return mi(Rc(t));
}
function fi() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function kt(t, r = 200) {
  const [a, n] = O(t), s = fi();
  return t && !a && n(!0), le(() => {
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
  const [n, s] = O(r), o = t !== void 0, l = o ? t : n, i = de(l);
  i.current = l;
  const b = de(a);
  b.current = a;
  const u = he(
    (x) => {
      var g;
      const p = typeof x == "function" ? x(i.current) : x;
      o || s(p), (g = b.current) == null || g.call(b, p);
    },
    [o]
  );
  return [l, u];
}
function pi(t) {
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
const Ka = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  density: "default"
};
function hi(t, r = "default") {
  const a = t ? `abc_table_${t}` : "", [n, s] = O(() => {
    const d = { ...Ka, density: r };
    if (!a || typeof window > "u") return d;
    try {
      const m = window.localStorage.getItem(a);
      if (!m) return d;
      const v = JSON.parse(m);
      return {
        hiddenKeys: Array.isArray(v.hiddenKeys) ? v.hiddenKeys : [],
        columnOrder: Array.isArray(v.columnOrder) ? v.columnOrder : [],
        columnWidths: v.columnWidths && typeof v.columnWidths == "object" ? v.columnWidths : {},
        columnFixed: v.columnFixed && typeof v.columnFixed == "object" ? v.columnFixed : {},
        searchVisible: v.searchVisible && typeof v.searchVisible == "object" ? v.searchVisible : {},
        density: v.density ?? r
      };
    } catch {
      return d;
    }
  });
  le(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.setItem(a, JSON.stringify(n));
      } catch {
      }
  }, [a, n]);
  const o = he((d) => {
    s((m) => ({
      ...m,
      hiddenKeys: m.hiddenKeys.includes(d) ? m.hiddenKeys.filter((v) => v !== d) : [...m.hiddenKeys, d]
    }));
  }, []), l = he((d, m) => {
    s((v) => ({
      ...v,
      hiddenKeys: m ? [] : Array.from(new Set(d))
    }));
  }, []), i = he(
    (d, m) => {
      s((v) => {
        const y = { ...v.columnFixed };
        return m === void 0 ? delete y[d] : y[d] = m, {
          ...v,
          columnFixed: y
        };
      });
    },
    []
  ), b = he((d, m) => {
    s((v) => ({
      ...v,
      columnWidths: { ...v.columnWidths, [d]: Math.max(64, Math.round(m)) }
    }));
  }, []), u = he((d) => {
    s((m) => ({ ...m, columnOrder: d }));
  }, []), x = he((d, m) => {
    s((v) => ({
      ...v,
      searchVisible: { ...v.searchVisible, [d]: m }
    }));
  }, []), p = he((d) => {
    s((m) => ({ ...m, density: d }));
  }, []), g = he(() => {
    s({ ...Ka, density: r });
  }, [r]);
  return {
    settings: n,
    toggleColumnVisible: o,
    setAllColumnsVisible: l,
    setColumnFixed: i,
    setColumnWidth: b,
    setColumnOrder: u,
    setSearchFieldVisible: x,
    setDensity: p,
    resetSettings: g
  };
}
const vi = typeof window < "u" ? Xr : le;
function Ir(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function gi(t) {
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
function Hr(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function rr({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: l = 8
}) {
  const { side: i, align: b } = gi(n), [u, x] = O(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: i,
    arrowOffset: 16,
    transformOrigin: Hr(i, b),
    positioned: !1
  })), p = he(() => {
    if (typeof window > "u" || !r.current) return;
    const d = r.current.getBoundingClientRect(), m = a.current, v = m == null ? void 0 : m.getBoundingClientRect(), y = window.innerWidth || 1024, C = window.innerHeight || 768, h = l, N = m ? m.offsetWidth : 0, E = m ? m.offsetHeight : 0, T = N || (v == null ? void 0 : v.width) || (o ? d.width : 180), L = o ? Math.max(T, d.width) : T, S = E || (v == null ? void 0 : v.height) || 40;
    if (d.width === 0 && d.height === 0 && d.top === 0 && d.left === 0) {
      x({
        top: s,
        left: h,
        minWidth: o && d.width > 0 ? d.width : void 0,
        actualSide: i,
        arrowOffset: 16,
        transformOrigin: Hr(i, b),
        positioned: !0
      });
      return;
    }
    let w = i;
    if (i === "bottom") {
      const j = C - d.bottom - s - h, H = d.top - s - h;
      S > j && H > j && (w = "top");
    } else if (i === "top") {
      const j = d.top - s - h, H = C - d.bottom - s - h;
      S > j && H > j && (w = "bottom");
    } else if (i === "left") {
      const j = d.left - s - h, H = y - d.right - s - h;
      L > j && H > j && (w = "right");
    } else if (i === "right") {
      const j = y - d.right - s - h, H = d.left - s - h;
      L > j && H > j && (w = "left");
    }
    let k = 0, A = 0;
    w === "bottom" || w === "top" ? (k = w === "bottom" ? d.bottom + s : d.top - S - s, b === "start" ? A = d.left : b === "end" ? A = d.right - L : A = d.left + d.width / 2 - L / 2) : (A = w === "right" ? d.right + s : d.left - L - s, b === "start" ? k = d.top : b === "end" ? k = d.bottom - S : k = d.top + d.height / 2 - S / 2);
    const R = Math.max(h, y - L - h), M = Math.max(h, C - S - h), _ = Math.min(Math.max(h, A), R), $ = Math.min(Math.max(h, k), M), G = w === "top" || w === "bottom" ? Math.min(
      Math.max(10, d.left + d.width / 2 - _),
      Math.max(10, L - 10)
    ) : Math.min(
      Math.max(10, d.top + d.height / 2 - $),
      Math.max(10, S - 10)
    ), z = Hr(w, b), W = o ? Math.round(d.width) : void 0;
    x((j) => j.positioned && Math.abs(j.top - $) < 0.5 && Math.abs(j.left - _) < 0.5 && j.minWidth === W && j.actualSide === w && Math.abs(j.arrowOffset - G) < 0.5 && j.transformOrigin === z ? j : {
      top: Math.round($ * 10) / 10,
      left: Math.round(_ * 10) / 10,
      minWidth: W,
      actualSide: w,
      arrowOffset: Math.round(G),
      transformOrigin: z,
      positioned: !0
    });
  }, [r, a, i, b, s, o, l]);
  vi(() => {
    if (!t) {
      x((m) => m.positioned ? { ...m, positioned: !1 } : m);
      return;
    }
    p();
    const d = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(p) : 0;
    return () => {
      d && typeof window < "u" && window.cancelAnimationFrame(d);
    };
  }, [t, p]), le(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", p, { passive: !0 }), window.addEventListener("scroll", p, !0);
    let d = null;
    return typeof ResizeObserver < "u" && (d = new ResizeObserver(() => p()), a.current && d.observe(a.current), r.current && d.observe(r.current)), () => {
      window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0), d == null || d.disconnect();
    };
  }, [t, p, a, r]);
  const g = t ? Ir(r.current) : null;
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
    update: p
  };
}
const xi = {
  primary: "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs enabled:hover:bg-[var(--abc-primary-hover)] enabled:hover:shadow-sm enabled:active:bg-[var(--abc-primary-active)]",
  secondary: "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] border border-[var(--abc-border)] enabled:hover:bg-[var(--abc-bg-muted)] enabled:hover:border-[var(--abc-border-strong)] enabled:hover:shadow-2xs enabled:active:bg-[var(--abc-bg-subtle)]",
  outline: "bg-transparent border border-[var(--abc-primary)] text-[var(--abc-primary)] enabled:hover:bg-[var(--abc-primary-soft)] enabled:hover:shadow-2xs",
  danger: "bg-[var(--abc-danger)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90",
  success: "bg-[var(--abc-success)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90",
  warning: "bg-[var(--abc-warning)] text-white shadow-2xs enabled:hover:brightness-95 enabled:hover:shadow-sm enabled:active:brightness-90",
  ghost: "bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
  text: "bg-transparent text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-primary)]"
}, yi = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm"
}, _e = qe.forwardRef(
  ({
    className: t,
    variant: r = "primary",
    size: a,
    motion: n,
    loading: s = !1,
    disabled: o,
    icon: l,
    rightIcon: i,
    block: b = !1,
    type: u = "button",
    children: x,
    ...p
  }, g) => {
    const d = ue(a, "sm"), m = se(n);
    return /* @__PURE__ */ c(
      "button",
      {
        ref: g,
        type: u,
        disabled: !!(o || s),
        "data-motion": m,
        className: f(
          "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
          "disabled:opacity-45 disabled:cursor-not-allowed",
          xi[r],
          yi[d],
          b && "w-full",
          t
        ),
        ...p,
        children: [
          s ? /* @__PURE__ */ e(yr, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : l && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: l }),
          x,
          !s && i && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: i })
        ]
      }
    );
  }
);
_e.displayName = "Button";
const wi = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  "2xl": "max-w-4xl",
  "3xl": "max-w-5xl",
  "4xl": "max-w-6xl",
  "5xl": "max-w-7xl"
}, yt = ({
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
  closeOnClickModal: p = !0,
  draggable: g = !0,
  fullscreenable: d = !0,
  fullscreen: m,
  onFullscreenChange: v,
  motion: y,
  className: C
}) => {
  const h = t ?? r ?? a ?? !1, N = se(y), { isMounted: E, isVisible: T } = kt(h, N === "none" ? 0 : 180), L = je(), S = je(), w = de(null), k = de(null), A = de(!1), R = de(n);
  R.current = n;
  const [M, _] = O(!1), $ = m !== void 0 ? m : M, [G, z] = O({ x: 0, y: 0 }), W = de(
    null
  ), j = he(() => {
    const B = !$;
    m === void 0 && _(B), v == null || v(B);
  }, [$, m, v]);
  le(() => {
    if (!E) return;
    const B = w.current;
    if (!B) return;
    let V = !1;
    if (typeof B.showModal == "function")
      if (B.open)
        V = !0;
      else
        try {
          B.showModal(), V = !0;
        } catch {
          B.setAttribute("open", "");
        }
    else
      B.setAttribute("open", "");
    const U = (Q) => {
      Q.preventDefault(), R.current();
    }, Y = (Q) => {
      Q.key === "Escape" && (Q.stopPropagation(), R.current());
    };
    return B.addEventListener("cancel", U), (!V || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", Y), () => {
      if (B.removeEventListener("cancel", U), window.removeEventListener("keydown", Y), B.open && typeof B.close == "function")
        try {
          B.close();
        } catch {
          B.removeAttribute("open");
        }
    };
  }, [E]), le(() => {
    h || (z({ x: 0, y: 0 }), m === void 0 && _(!1));
  }, [h, m]);
  const H = (B) => {
    var Q;
    const V = B.target;
    if ((Q = V == null ? void 0 : V.closest) != null && Q.call(V, "[data-abc-floating]"))
      return !1;
    const U = k.current;
    if (!U) return !1;
    const Y = U.getBoundingClientRect();
    return Y.width === 0 && Y.height === 0 ? !U.contains(B.target) : B.clientX < Y.left || B.clientX > Y.right || B.clientY < Y.top || B.clientY > Y.bottom;
  }, ae = (B) => {
    if (!g || $ || B.button !== 0 || B.target.closest('button, a, input, [role="button"]')) return;
    W.current = {
      startX: B.clientX,
      startY: B.clientY,
      origX: G.x,
      origY: G.y
    };
    const V = (Y) => {
      W.current && z({
        x: W.current.origX + (Y.clientX - W.current.startX),
        y: W.current.origY + (Y.clientY - W.current.startY)
      });
    }, U = () => {
      W.current = null, window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", U);
    };
    window.addEventListener("mousemove", V), window.addEventListener("mouseup", U);
  };
  if (!E || typeof document > "u") return null;
  const ee = b || u, we = wi[ee] || ee;
  return tt(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: w,
        "data-motion": N,
        "aria-labelledby": s ? L : void 0,
        "aria-label": s ? void 0 : "对话框",
        "aria-describedby": o ? S : void 0,
        onPointerDown: (B) => {
          A.current = p && H(B);
        },
        onPointerUp: (B) => {
          p && A.current && H(B) && n(), A.current = !1;
        },
        onClick: (B) => {
          p && B.target === w.current && !A.current && n();
        },
        className: f(
          "fixed inset-0 z-[1000] m-0 h-dvh max-h-none w-dvw max-w-none border-0 bg-transparent p-4 open:flex items-center justify-center",
          $ && "p-0",
          N !== "none" && (T ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ c(
          "div",
          {
            ref: k,
            "data-dialog-panel": "",
            "data-motion": N,
            style: {
              width: !$ && x ? x : void 0,
              transform: !$ && (G.x !== 0 || G.y !== 0) ? `translate3d(${G.x}px, ${G.y}px, 0)` : void 0
            },
            className: f(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)]",
              $ ? "h-dvh w-dvw rounded-none" : f("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !x && we),
              N !== "none" && (T ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              C
            ),
            children: [
              (s !== void 0 || d) && /* @__PURE__ */ c(
                "div",
                {
                  onMouseDown: ae,
                  onDoubleClick: d ? j : void 0,
                  className: f(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    g && !$ && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                      s && /* @__PURE__ */ e("h2", { id: L, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: s }),
                      o && /* @__PURE__ */ e("p", { id: S, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: o })
                    ] }),
                    /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": $ ? "还原窗口" : "全屏",
                          title: $ ? "退出全屏" : "全屏显示",
                          onClick: j,
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: $ ? /* @__PURE__ */ e(da, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ba, { className: "h-3.5 w-3.5" })
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
                          children: /* @__PURE__ */ e(Ke, { className: "h-4 w-4" })
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
}, hr = /* @__PURE__ */ new Set();
let Dn = null, Jt = 0;
function Pn(t) {
  Dn = t, hr.forEach((r) => r(t));
}
function Ni(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function xa(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (Jt === 0 && typeof window < "u" && hr.size === 0) {
    const s = r.content ?? r.message, o = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    Pn({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: Ni(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const Nd = xa;
function kd() {
  return xa;
}
const Rn = () => {
  const [t, r] = O(!1), [a, n] = O(() => Dn), [s, o] = O(!1);
  if (le(() => {
    Jt += 1, r(Jt === 1);
    const u = (x) => n(x);
    return hr.add(u), () => {
      Jt = Math.max(0, Jt - 1), hr.delete(u);
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
      a.resolve(b), Pn(null);
    }
  }, i = a.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(jt, { className: "h-4 w-4" }) }) : a.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e(tr, { className: "h-4 w-4" }) }) : a.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(pt, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(wr, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    yt,
    {
      open: !!a,
      onClose: () => l(!1),
      title: a.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ c(Re, { children: [
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
}, Cd = ({ children: t }) => /* @__PURE__ */ c(Re, { children: [
  t,
  /* @__PURE__ */ e(Rn, {})
] });
let zt = [];
const na = /* @__PURE__ */ new Set();
let ki = 0;
function zn() {
  const t = [...zt];
  na.forEach((r) => r(t));
}
function Bn(t) {
  zt = zt.filter((r) => r.id !== t), zn();
}
function fr(t, r, a = 3e3) {
  const n = `abc_toast_${++ki}_${Date.now()}`;
  return zt = [...zt.slice(-4), { id: n, tone: t, message: r, duration: a }], zn(), a > 0 && typeof window < "u" && window.setTimeout(() => {
    Bn(n);
  }, a), n;
}
const jn = {
  success: (t) => fr("success", t),
  error: (t) => fr("error", t, 4200),
  info: (t) => fr("info", t),
  warning: (t) => fr("warning", t, 3600)
}, Ci = {
  success: /* @__PURE__ */ e(pt, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(Ot, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(tr, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(Nr, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" })
}, Si = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Mi = ({ size: t, motion: r }) => {
  const [a, n] = O(() => [...zt]), s = ue(t, "sm"), o = se(r);
  return le(() => {
    const l = (i) => n(i);
    return na.add(l), () => {
      na.delete(l);
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
            className: f(
              "pointer-events-auto flex items-center gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
              "bg-[var(--abc-bg-elevated)] font-medium text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
              Si[s],
              o !== "none" && "abc-animate-popover-in"
            ),
            children: [
              Ci[l.tone],
              /* @__PURE__ */ e("span", { className: "flex-1 leading-relaxed break-words", children: l.message }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "关闭通知",
                  onClick: () => Bn(l.id),
                  className: "rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5" })
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
}, ya = "abc_design_theme_v1", vr = "color-scheme", On = dn(null);
function Ua(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(vr), n = window.localStorage.getItem(ya), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, l = ["xs", "sm", "md", "lg"], i = ["none", "subtle", "smooth", "spring"], b = s.componentSize && l.includes(s.componentSize) ? s.componentSize : t.componentSize, u = s.motion && i.includes(s.motion) ? s.motion : t.motion ?? "smooth";
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
function Ii(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(vr) : window.localStorage.setItem(vr, t.mode), window.localStorage.setItem(ya, JSON.stringify(t));
    } catch {
    }
}
const Sd = ({
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
  iconRegistry: p = {}
}) => {
  const g = ce(
    () => ({ ...Ve, ...r }),
    [r]
  ), [d, m] = O(() => Ua(g, o)), [v, y] = O(
    () => At(d.mode)
  ), [C, h] = O(a), [N, E] = O(s);
  le(() => {
    const j = Ye(d);
    y(j), Ii(d, o);
  }, [d, o]), le(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const j = window.matchMedia("(prefers-color-scheme: dark)"), H = () => {
      if (d.mode === "system") {
        const ae = Ye(d);
        y(ae);
      }
    };
    return j.addEventListener("change", H), () => j.removeEventListener("change", H);
  }, [d]), le(() => {
    if (!o || typeof window > "u") return;
    const j = (H) => {
      (H.key === ya || H.key === vr) && m(Ua(g, !0));
    };
    return window.addEventListener("storage", j), () => window.removeEventListener("storage", j);
  }, [o, g]);
  const T = he(
    (j, H) => {
      Ic(() => {
        m((ae) => {
          const ee = { ...ae, mode: j };
          return Ye(ee), ee;
        });
      }, H);
    },
    []
  ), L = he(
    (j) => {
      const ae = At(d.mode) === "dark" ? "light" : "dark", ee = At("system");
      T(ae === ee ? "system" : ae, j);
    },
    [d.mode, T]
  ), S = he((j) => {
    m((H) => ({ ...H, brand: j, customBrandColor: void 0 }));
  }, []), w = he((j) => {
    m((H) => ({ ...H, customBrandColor: j }));
  }, []), k = he((j) => {
    m((H) => ({ ...H, density: j }));
  }, []), A = he((j) => {
    m((H) => ({ ...H, radius: j }));
  }, []), R = he((j) => {
    m((H) => ({ ...H, fontScale: j }));
  }, []), M = he((j) => {
    m((H) => ({ ...H, visualMode: j }));
  }, []), _ = he((j) => {
    m((H) => ({ ...H, componentSize: j }));
  }, []), $ = he((j) => {
    m((H) => ({ ...H, motion: j }));
  }, []), G = he((j) => {
    m((H) => ({ ...H, ...j }));
  }, []), z = he(() => {
    m(g), h(a), E(s);
  }, [g, a, s]), W = ce(
    () => ({
      theme: d,
      resolvedTheme: v,
      pageTransition: C,
      watermarkText: n,
      watermarkEnabled: N,
      setThemeMode: T,
      toggleTheme: L,
      setBrand: S,
      setCustomBrandColor: w,
      setDensity: k,
      setRadius: A,
      setFontScale: R,
      setVisualMode: M,
      setComponentSize: _,
      setMotion: $,
      updateTheme: G,
      setPageTransition: h,
      setWatermarkEnabled: E,
      resetTheme: z,
      toast: l ?? jn,
      uploadAdapter: i,
      dictAdapter: b,
      permissionAdapter: u,
      captchaAdapter: x,
      iconRegistry: p
    }),
    [
      d,
      v,
      C,
      n,
      N,
      T,
      L,
      S,
      w,
      k,
      A,
      R,
      M,
      _,
      $,
      G,
      z,
      l,
      i,
      b,
      u,
      x,
      p
    ]
  );
  return /* @__PURE__ */ c(On.Provider, { value: W, children: [
    t,
    !l && /* @__PURE__ */ e(Mi, {}),
    /* @__PURE__ */ e(Rn, {})
  ] });
};
function Ue() {
  const t = ln(On);
  return t || {
    theme: Ve,
    resolvedTheme: At(Ve.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Ye({ ...Ve, mode: r });
    },
    toggleTheme: () => {
      const r = At(Ve.mode) === "dark" ? "light" : "dark";
      Ye({ ...Ve, mode: r });
    },
    setBrand: (r) => {
      Ye({ ...Ve, brand: r });
    },
    setCustomBrandColor: (r) => {
      Ye({ ...Ve, customBrandColor: r });
    },
    setDensity: (r) => {
      Ye({ ...Ve, density: r });
    },
    setRadius: (r) => {
      Ye({ ...Ve, radius: r });
    },
    setFontScale: (r) => {
      Ye({ ...Ve, fontScale: r });
    },
    setVisualMode: (r) => {
      Ye({ ...Ve, visualMode: r });
    },
    setComponentSize: (r) => {
      Ye({ ...Ve, componentSize: r });
    },
    setMotion: (r) => {
      Ye({ ...Ve, motion: r });
    },
    updateTheme: (r) => {
      Ye({ ...Ve, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Ye(Ve);
    },
    toast: jn,
    iconRegistry: {}
  };
}
function ue(t, r = "sm") {
  const { theme: a } = Ue();
  return t ?? a.componentSize ?? r;
}
function se(t) {
  const { theme: r } = Ue();
  return t ?? r.motion ?? "smooth";
}
const Zt = {
  Activity: ac,
  AlertCircle: Ot,
  AlertOctagon: rc,
  AlertTriangle: tr,
  BarChart2: tc,
  BarChart3: ec,
  Bell: Qo,
  BellRing: Jo,
  BookMarked: Zo,
  Boxes: qo,
  Building2: Xo,
  Calendar: pa,
  CalendarCheck: Yo,
  Camera: Go,
  Check: He,
  CheckCircle: Vo,
  CheckCircle2: pt,
  CheckSquare: Uo,
  CircleDollarSign: Ko,
  Clock: pr,
  Coins: Ho,
  Compass: yn,
  Copy: fa,
  Cpu: Fo,
  CreditCard: Wo,
  Database: $o,
  Download: xn,
  Edit: Oo,
  Edit3: Zr,
  Eye: $t,
  FileCheck: jo,
  FileClock: Bo,
  FileSpreadsheet: zo,
  FileText: Ro,
  Flame: Po,
  Folder: Do,
  FolderGit2: Lo,
  FolderOpen: Ao,
  FolderPlus: _o,
  FolderTree: To,
  Globe: Eo,
  Globe2: Io,
  Handshake: Mo,
  HardDrive: So,
  Headphones: Co,
  HelpCircle: wr,
  History: ko,
  Home: No,
  Image: gn,
  Info: Nr,
  Key: wo,
  KeyRound: yo,
  Layers: vn,
  LayoutDashboard: xo,
  LayoutGrid: go,
  LineChart: vo,
  Link2: ho,
  ListChecks: po,
  ListOrdered: fo,
  Lock: mo,
  MapPin: uo,
  Megaphone: bo,
  Menu: hn,
  MessageCircle: lo,
  MessageSquare: io,
  MessageSquareQuote: co,
  MessageSquareText: oo,
  MessagesSquare: so,
  Minus: Mr,
  Monitor: pn,
  MoreHorizontal: ma,
  Network: no,
  Package: ao,
  Palette: fn,
  PanelLeft: ro,
  PanelTop: to,
  Pause: eo,
  Phone: Qs,
  PhoneCall: Js,
  PieChart: Zs,
  Play: mn,
  Plus: ua,
  PlusCircle: qs,
  Radio: Xs,
  Receipt: Ys,
  RefreshCw: Sr,
  RotateCcw: Nt,
  RotateCw: Cr,
  ScrollText: Gs,
  Search: dt,
  Send: Vs,
  Server: Us,
  Settings: Ks,
  Share: Hs,
  Share2: Fs,
  Shield: Ws,
  ShieldAlert: un,
  ShieldCheck: $s,
  ShoppingBag: Os,
  ShoppingCart: js,
  Sliders: Bs,
  SlidersHorizontal: qr,
  Smartphone: zs,
  Sparkles: kr,
  Star: Rs,
  StarOff: Ps,
  Store: Ds,
  Tag: Ls,
  Tags: As,
  Terminal: _s,
  Ticket: Ts,
  Timer: Es,
  Trash: Is,
  Trash2: jt,
  TrendingUp: Ms,
  Unlock: Ss,
  Upload: bn,
  User: Cs,
  UserCheck: ks,
  UserCog: Ns,
  Users: ws,
  Video: ys,
  Wallet: xs,
  Wrench: gs,
  X: Ke,
  XCircle: vs,
  Zap: hs
}, Kr = {
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
}, Va = [
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
function Ei(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const $n = {};
function Md(t) {
  Object.assign($n, t);
}
const xt = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (r) {
    const p = r.toLowerCase();
    for (const g of Va)
      if (g.keywords.some((d) => p.includes(d))) {
        const d = Zt[g.iconName];
        if (d)
          return /* @__PURE__ */ e(d, { size: a, strokeWidth: n, className: f("shrink-0", s) });
      }
  }
  const l = (t || "").replace(/^el-icon-/, "").trim(), i = l.replace(/^s-/, ""), b = Kr[l] ?? Kr[i] ?? Kr[t];
  let u = (o == null ? void 0 : o[l]) ?? $n[l] ?? (b ? Zt[b] : void 0) ?? Zt[l] ?? (l ? Zt[Ei(l)] : void 0);
  if (!u && l) {
    const p = l.toLowerCase();
    for (const g of Va)
      if (g.keywords.some((d) => p.includes(d))) {
        u = Zt[g.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(u ?? yn, { size: a, strokeWidth: n, className: f("shrink-0", s) });
}, Wn = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Ti = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, ht = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", et = qe.forwardRef(
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
    passwordToggle: p = !0,
    showCount: g = !1,
    onClear: d,
    invalid: m = !1,
    id: v,
    type: y = "text",
    value: C,
    defaultValue: h,
    maxLength: N,
    onChange: E,
    disabled: T,
    readOnly: L,
    className: S,
    wrapperClassName: w,
    ...k
  }, A) => {
    const R = ue(t, "sm"), M = se(r), _ = je(), $ = v || _, G = de(null);
    xr(A, () => G.current, []);
    const z = C !== void 0, [W, j] = O(
      () => h != null ? String(h) : ""
    ), [H, ae] = O(!1), we = y === "password" && p !== !1, B = we && H ? "text" : y, U = (z ? String(C ?? "") : W).length, Y = U > 0, Q = !!((u ?? x) && Y && !T && !L), ne = !!(m || n), D = o ?? l, be = i ?? b, Be = (Z) => {
      z || j(Z.target.value), E == null || E(Z);
    }, Oe = he(
      (Z) => {
        if (Z.preventDefault(), Z.stopPropagation(), T || L) return;
        z || j(""), d == null || d();
        const ie = G.current;
        if (ie && (ie.value = "", ie.focus()), E) {
          const K = ie ?? { value: "" };
          E({
            target: K,
            currentTarget: K,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [T, L, z, d, E]
    ), re = (Q ? 1 : 0) + (we ? 1 : 0) + (be ? 1 : 0), oe = re >= 3 ? "pr-20" : re === 2 ? "pr-14" : re === 1 ? "pr-9" : "pr-3", fe = /\bw-(?!full\b)\S+/.test(S || ""), F = /* @__PURE__ */ c(
      "div",
      {
        className: f(
          "relative flex items-center",
          !fe && "w-full",
          w
        ),
        children: [
          D && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-3 z-10 flex items-center text-[var(--abc-fg-muted)]", children: D }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: G,
              id: $,
              type: B,
              value: C,
              defaultValue: h,
              maxLength: N,
              onChange: Be,
              disabled: T,
              readOnly: L,
              "data-motion": M,
              "aria-invalid": ne || void 0,
              className: f(
                ht,
                Wn[R],
                D ? "pl-9" : "pl-3",
                oe,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                B === "number" && re > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                ne && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                T && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                S
              ),
              ...k
            }
          ),
          (Q || we || be) && /* @__PURE__ */ c("div", { className: "absolute right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            Q && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (Z) => Z.preventDefault(),
                onClick: Oe,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5" })
              }
            ),
            we && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: T,
                "data-testid": "password-toggle",
                "aria-label": H ? "隐藏密码" : "显示密码",
                onMouseDown: (Z) => Z.preventDefault(),
                onClick: (Z) => {
                  Z.preventDefault(), Z.stopPropagation(), !T && ae((ie) => !ie);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: H ? /* @__PURE__ */ e(wn, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" })
              }
            ),
            be && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: be })
          ] })
        ]
      }
    );
    return !a && !n && !s && !g ? F : /* @__PURE__ */ c("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: $,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      F,
      (n || s || g) && /* @__PURE__ */ c("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        g && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: N !== void 0 ? `${U}/${N}` : U
          }
        )
      ] })
    ] });
  }
);
et.displayName = "Input";
const sa = ({
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
  className: p
}) => {
  const g = ue(l, "sm"), d = se(i), m = je(), [v, y] = O(r ?? null), C = t !== void 0 ? t : v, h = (N) => {
    let E = N;
    E !== null && Number.isFinite(E) ? (n !== void 0 && (E = Math.max(n, E)), s !== void 0 && (E = Math.min(s, E))) : E = null, t === void 0 && y(E), a == null || a(E);
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": d,
      className: f(
        "inline-flex w-full items-center overflow-hidden",
        ht,
        Wn[g],
        x && "border-[var(--abc-danger)]",
        b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
        p
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "减少数值",
            disabled: b || n !== void 0 && (C ?? 0) <= n,
            onClick: () => h((C ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(Mr, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: m,
            type: "number",
            value: C ?? "",
            min: n,
            max: s,
            step: o,
            disabled: b,
            placeholder: u,
            onChange: (N) => {
              const E = N.target.value;
              h(E === "" ? null : Number(E));
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
            onClick: () => h((C ?? 0) + o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(ua, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Er = qe.forwardRef(
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
    onChange: p,
    rows: g = 3,
    className: d,
    ...m
  }, v) => {
    const y = ue(t, "sm"), C = se(r), h = je(), N = i || h, [E, T] = O(
      () => String(u ?? "").length
    ), L = b !== void 0 ? String(b ?? "").length : E, S = !!(l || n), k = /* @__PURE__ */ e(
      "textarea",
      {
        ref: v,
        id: N,
        rows: g,
        value: b,
        defaultValue: u,
        maxLength: x,
        onChange: (A) => {
          b === void 0 && T(A.target.value.length), p == null || p(A);
        },
        "data-motion": C,
        "aria-invalid": S || void 0,
        className: f(
          ht,
          Ti[y],
          "leading-relaxed resize-y",
          S && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          d
        ),
        ...m
      }
    );
    return !a && !n && !s && !o ? k : /* @__PURE__ */ c("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: N,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      k,
      (n || s || o) && /* @__PURE__ */ c("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        o && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "textarea-count",
            className: "ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums",
            children: x !== void 0 ? `${L}/${x}` : L
          }
        )
      ] })
    ] });
  }
);
Er.displayName = "Textarea";
const Ga = [
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
], _i = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], Ai = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Li = ({
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
  className: p
}) => {
  const g = ue(u, "sm"), d = se(x), [m, v] = O(!1), [y, C] = O(""), [h, N] = O("all"), E = typeof t == "boolean", T = E ? t : m, L = a ?? r ?? "", S = () => {
    E ? n == null || n() : v(!1);
  }, w = (M) => {
    s == null || s(M), o == null || o(M), S();
  }, k = ce(() => {
    const M = y.trim();
    return Ga.filter((_) => h !== "all" && _.category !== h ? !1 : M ? nt(`${_.label} ${_.name}`, M) : !0);
  }, [y, h]), A = ce(
    () => Ga.find((M) => M.name.toLowerCase() === L.toLowerCase()),
    [L]
  ), R = /* @__PURE__ */ e(yt, { open: T, onClose: S, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ c("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        et,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: y,
          prefix: /* @__PURE__ */ e(dt, { className: "h-3.5 w-3.5" }),
          onChange: (M) => C(M.target.value)
        }
      ) }),
      L && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(xt, { name: L, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: L })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: _i.map((M) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => N(M.id),
        className: f(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          h === M.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: M.label
      },
      M.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: k.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: k.map((M) => {
      const _ = L === M.name;
      return /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          onClick: () => w(M.name),
          className: f(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            _ ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            _ && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              xt,
              {
                name: M.name,
                size: 20,
                className: f(
                  "transition-transform group-hover:scale-110",
                  _ ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
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
  return E ? R : /* @__PURE__ */ c(Re, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: "button",
        tabIndex: b ? -1 : 0,
        "data-motion": d,
        onClick: () => !b && v(!0),
        onKeyDown: (M) => {
          !b && (M.key === "Enter" || M.key === " ") && (M.preventDefault(), v(!0));
        },
        className: f(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          Ai[g],
          ht,
          b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          p
        ),
        children: [
          L ? /* @__PURE__ */ c("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(xt, { name: L, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: A ? `${A.label} (${L})` : L })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: l }),
          /* @__PURE__ */ c("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            i && L && !b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (M) => {
                  M.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ke, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    R
  ] });
};
async function Di(t) {
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
const Pi = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, Ri = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, zi = ({
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
  motion: p,
  className: g
}) => {
  const d = ue(x, "sm"), m = se(p), { toast: v } = Ue(), [y, C] = O(!1), h = de(null), N = i ?? l ?? "已复制到剪贴板";
  le(() => () => {
    h.current && clearTimeout(h.current);
  }, []);
  const E = he(
    async (S) => {
      S.stopPropagation(), S.preventDefault(), await Di(t) ? (C(!0), v.success(N), u == null || u(t), h.current && clearTimeout(h.current), h.current = setTimeout(() => {
        C(!1), h.current = null;
      }, 1500)) : v.error("复制失败，请手动复制");
    },
    [t, N, u, v]
  ), T = b !== void 0 ? b : y ? N : "点击复制", L = y ? /* @__PURE__ */ e(
    He,
    {
      "data-testid": "copy-icon-check",
      className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]",
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ e(
    fa,
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
      title: T,
      "aria-label": b || "复制",
      "data-motion": m,
      onClick: E,
      className: f(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        g
      ),
      children: L
    }
  ) : /* @__PURE__ */ c(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: T,
      "data-motion": m,
      onClick: E,
      onKeyDown: (S) => {
        (S.key === "Enter" || S.key === " ") && E(S);
      },
      className: f(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        Pi[d],
        o && "font-mono tabular-nums",
        g
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && L
      ]
    }
  );
}, _t = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = ue(t, "sm"), l = se(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": l,
      className: f(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        Ri[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, Bi = ({
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
  const x = ue(l, "md"), p = se(i), m = {
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
      "data-motion": p,
      className: f(
        "flex flex-col items-center justify-center text-center select-none",
        m.container,
        p !== "none" && "abc-animate-fade-in",
        u
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "empty-state-icon",
            className: f(
              "flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]",
              m.iconBox
            ),
            children: a ?? /* @__PURE__ */ e(nc, { className: m.iconSize })
          }
        ),
        t && /* @__PURE__ */ e(
          "h4",
          {
            "data-testid": "empty-state-title",
            className: f("mt-3 text-[var(--abc-fg)]", m.title),
            children: t
          }
        ),
        r && /* @__PURE__ */ e(
          "p",
          {
            "data-testid": "empty-state-description",
            className: f("max-w-sm leading-relaxed text-[var(--abc-fg-muted)]", m.desc),
            children: r
          }
        ),
        (n || s) && /* @__PURE__ */ e("div", { "data-testid": "empty-state-action", className: "mt-4 flex items-center justify-center gap-2", children: n ?? /* @__PURE__ */ e(
          _e,
          {
            variant: "secondary",
            size: m.btnSize,
            motion: p,
            icon: /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, ji = {
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
}, Oi = ({
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
  onSizeChange: p,
  onPageSizeChange: g,
  showTotal: d = !0,
  showQuickJumper: m = !0,
  className: v
}) => {
  const y = t ?? r ?? a ?? 1, C = n ?? (typeof s == "number" ? s : void 0) ?? 10, h = ue(
    o ?? (typeof s == "string" ? s : void 0),
    "sm"
  ), N = se(l), E = ji[h], T = Math.max(1, Math.ceil(i / Math.max(1, C))), [L, S] = O(""), w = de(null);
  if (i <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": N,
        className: f(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          E.wrap,
          v
        ),
        children: /* @__PURE__ */ e("div", { children: d === !1 ? null : typeof d == "function" ? d(0) : /* @__PURE__ */ c("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const k = (_) => {
    const $ = Math.min(Math.max(1, _), T);
    $ !== y && (u == null || u($, C), x == null || x($));
  }, A = (_) => {
    u == null || u(1, _), p == null || p(_), g == null || g(_);
  }, R = () => {
    const _ = L.trim();
    if (!_) {
      w.current = null;
      return;
    }
    if (_ === w.current) return;
    const $ = parseInt(_, 10);
    if (Number.isNaN($)) {
      S(""), w.current = null;
      return;
    }
    const G = Math.min(Math.max(1, $), T);
    w.current = _, S(String(G)), k(G);
  }, M = [];
  if (T <= 7)
    for (let _ = 1; _ <= T; _++) M.push(_);
  else {
    M.push(1), y > 3 && M.push("...");
    const _ = Math.max(2, y - 1), $ = Math.min(T - 1, y + 1);
    for (let G = _; G <= $; G++) M.push(G);
    y < T - 2 && M.push("..."), M.push(T);
  }
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": N,
      className: f(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        E.wrap,
        v
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
              value: C,
              onChange: (_) => A(Number(_.target.value)),
              className: f(
                "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none cursor-pointer",
                E.select
              ),
              children: b.map((_) => /* @__PURE__ */ c("option", { value: _, children: [
                _,
                " 条/页"
              ] }, _))
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: y <= 1,
              onClick: () => k(y - 1),
              className: f(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                E.navBtn
              ),
              children: /* @__PURE__ */ e(ha, { className: "h-3.5 w-3.5" })
            }
          ),
          M.map(
            (_, $) => _ === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${$}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => k(_),
                className: f(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  E.pageBtn,
                  _ === y ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: _
              },
              _
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: y >= T,
              onClick: () => k(y + 1),
              className: f(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                E.navBtn
              ),
              children: /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" })
            }
          ),
          m && /* @__PURE__ */ c(
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
                    value: L,
                    onChange: (_) => {
                      w.current = null, S(_.target.value);
                    },
                    onKeyDown: (_) => {
                      _.key === "Enter" && (_.preventDefault(), R());
                    },
                    onBlur: R,
                    className: f(
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
}, Fe = ({
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
  const u = se(a), x = u === "none" ? "none" : r, p = {
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
      style: p,
      className: f(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && f("rounded-md", s === void 0 && "h-4"),
        x === "wave" && "abc-skeleton-wave skeleton-wave",
        x === "pulse" && "animate-pulse",
        o
      ),
      ...b,
      children: i
    }
  );
}, Id = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ c(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-card",
    className: f(
      "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]",
      r
    ),
    ...a,
    children: [
      /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(Fe, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(Fe, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(Fe, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(Fe, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), Ed = ({
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
    className: f(
      "overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      s
    ),
    ...o,
    children: /* @__PURE__ */ c("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((l, i) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Fe,
        {
          variant: "text",
          width: i === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, i)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((l, i) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((b, u) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Fe,
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
), Td = ({
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
    className: f(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      a
    ),
    ...s,
    children: [
      /* @__PURE__ */ c("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(Fe, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(Fe, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, l) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        Fe,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, l)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, l) => /* @__PURE__ */ e(Fe, { variant: "text", width: 36, height: 10, animation: r }, l)) })
    ]
  }
), Fn = {
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
function $i(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in Fn ? n : "neutral";
}
const Dt = ({
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
  ...p
}) => {
  const g = $i(t, r, a), d = Fn[g], m = n ?? s ?? x, v = ue(i, "sm"), y = se(b);
  return /* @__PURE__ */ c(
    "span",
    {
      "data-motion": y,
      className: f(
        "abc-motion-pop inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap",
        {
          xs: "px-1.5 py-0 text-[10px]",
          sm: "px-2 py-0.5 text-[11px]",
          md: "px-2.5 py-1 text-xs",
          lg: "px-3 py-1.5 text-sm"
        }[v],
        d.tag,
        u
      ),
      ...p,
      children: [
        o && /* @__PURE__ */ c("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
          l && /* @__PURE__ */ e(
            "span",
            {
              className: f(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                d.dot
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: f("relative inline-flex h-1.5 w-1.5 rounded-full", d.dot) })
        ] }),
        /* @__PURE__ */ e("span", { children: m })
      ]
    }
  );
}, _d = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  size: s,
  motion: o,
  children: l,
  className: i
}) => {
  const b = ue(s, "sm"), u = se(o), x = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", p = a || t > 0, g = t > r ? `${r}+` : String(t), d = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, m = {
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
  return l ? /* @__PURE__ */ c("span", { "data-motion": u, className: f("relative inline-flex shrink-0", i), children: [
    l,
    p && (a ? /* @__PURE__ */ e(
      "span",
      {
        className: f(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          v[b],
          x
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: f(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          y[b],
          x
        ),
        children: g
      }
    ))
  ] }) : p ? a ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": u,
      className: f("abc-motion-pop inline-block rounded-full", d[b], x, i)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": u,
      className: f(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        m[b],
        x,
        i
      ),
      children: g
    }
  ) : null;
}, Wi = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, Fi = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = ue(a, "sm"), l = se(n), [i, b] = O(!1), u = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": l,
      className: f(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        Wi[o],
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
}, Hi = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Ki = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, Ui = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, Vi = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, gr = ({
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
  motion: p,
  hoverable: g = !1,
  className: d,
  bodyClassName: m,
  children: v,
  ...y
}) => {
  const C = t, h = ue(o, "md"), N = se(p), E = l ?? h;
  return /* @__PURE__ */ c(
    C,
    {
      "data-motion": N,
      "data-size": h,
      className: f(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        Vi[i],
        g && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        d
      ),
      ...y,
      children: [
        b && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: b }),
        (r || n || u) && /* @__PURE__ */ c(
          "div",
          {
            className: f(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Ki[h]
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "min-w-0", children: [
                r && /* @__PURE__ */ e(
                  "h3",
                  {
                    className: f(
                      "font-semibold text-[var(--abc-fg)] leading-snug",
                      h === "xs" ? "text-xs" : h === "lg" ? "text-base" : "text-sm"
                    ),
                    children: r
                  }
                ),
                a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
              ] }),
              (n || u) && /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
                u && /* @__PURE__ */ e(Dt, { tone: u.tone ?? "primary", size: "xs", dot: !1, children: u.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: f(Hi[E], m), children: x ? /* @__PURE__ */ c("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(Fe, { width: "45%", height: 14, motion: N }),
          /* @__PURE__ */ e(Fe, { width: "90%", height: 12, motion: N }),
          /* @__PURE__ */ e(Fe, { width: "70%", height: 12, motion: N })
        ] }) : v }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: f(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              Ui[h]
            ),
            children: s
          }
        )
      ]
    }
  );
}, Ad = ({
  orientation: t = "horizontal",
  label: r,
  className: a,
  ...n
}) => t === "vertical" ? /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    "aria-orientation": "vertical",
    className: f("mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle", a),
    ...n
  }
) : r ? /* @__PURE__ */ c(
  "div",
  {
    role: "separator",
    className: f("my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]", a),
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
    className: f("my-3 h-px w-full bg-[var(--abc-border)]", a),
    ...n
  }
), Gi = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Yi = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, Ld = ({
  direction: t = "horizontal",
  size: r,
  wrap: a = !1,
  align: n = "center",
  className: s,
  children: o,
  ...l
}) => {
  const i = ue(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: f(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Yi[n],
        Gi[i],
        a && "flex-wrap",
        s
      ),
      ...l,
      children: o
    }
  );
}, Xi = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, Dd = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: o,
  ...l
}) => {
  const i = ue(r, "md"), b = se(a), u = de(null), [x, p] = O({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ c(
    "div",
    {
      ref: u,
      "data-motion": b,
      "data-size": i,
      onMouseMove: (g) => {
        var m;
        const d = (m = u.current) == null ? void 0 : m.getBoundingClientRect();
        d && p({ x: g.clientX - d.left, y: g.clientY - d.top, active: !0 });
      },
      onMouseLeave: () => p((g) => ({ ...g, active: !1 })),
      className: f(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        Xi[i],
        n && "abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md",
        s
      ),
      ...l,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": "true",
            className: f(
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
}, Ya = ({ duration: t = 8, motion: r, className: a }) => {
  const n = se(r);
  return n === "none" ? null : /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": n,
      className: f(
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
}, Xa = ({
  motion: t,
  className: r
}) => {
  const a = se(t), n = a === "none";
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": a,
      className: f("pointer-events-none absolute inset-0 overflow-hidden", r),
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
}, Ft = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, ar = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Tr = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Hn = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, wa = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, Pd = ({
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
  motion: p,
  className: g,
  ...d
}) => {
  const m = ue(x, "md"), v = se(p), y = je().replace(/:/g, ""), C = qe.useMemo(() => {
    if (!o || o.length < 2) return null;
    const N = Math.min(...o), T = Math.max(...o) - N || 1, L = 120, S = 32, k = `M ${o.map((R, M) => {
      const _ = M / (o.length - 1) * L, $ = S - 4 - (R - N) / T * (S - 8);
      return `${_.toFixed(1)},${$.toFixed(1)}`;
    }).join(" L ")}`, A = `${k} L ${L},${S} L 0,${S} Z`;
    return { linePath: k, areaPath: A, width: L, height: S };
  }, [o]), h = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": v,
      "data-size": m,
      className: f(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ft[m],
        u && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        g
      ),
      ...d,
      children: b ? /* @__PURE__ */ c("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(Fe, { width: "45%", height: 13, motion: v }),
          /* @__PURE__ */ e(Fe, { variant: "rounded", width: 30, height: 30, motion: v })
        ] }),
        /* @__PURE__ */ e(Fe, { width: "60%", height: 26, motion: v }),
        /* @__PURE__ */ e(Fe, { width: "80%", height: 18, motion: v })
      ] }) : /* @__PURE__ */ c(Re, { children: [
        /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          l && /* @__PURE__ */ e(
            "span",
            {
              className: f(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                wa[m]
              ),
              children: l
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: Hn[m], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || C) && /* @__PURE__ */ c("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ c(
              "span",
              {
                className: f(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  h
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(sc, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(oc, { className: "h-3 w-3" }) : /* @__PURE__ */ e(Mr, { className: "h-3 w-3" }),
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
}, Kn = dn(null), qi = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Rd = ({
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
  const x = je(), p = ue(o, "md"), g = se(l), [d, m] = Je({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), v = (y) => {
    if (!s)
      if (t) {
        const C = Array.isArray(d) ? d : [], N = C.includes(y) ? C.filter((E) => E !== y) : [...C, y];
        m(N);
      } else
        m(y);
  };
  return /* @__PURE__ */ e(
    Kn.Provider,
    {
      value: {
        multiple: t,
        value: d,
        disabled: s,
        size: p,
        motion: g,
        name: x,
        toggleValue: v
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          role: t ? "group" : "radiogroup",
          "data-motion": g,
          className: f("grid gap-3", qi[i], b),
          children: u
        }
      )
    }
  );
}, zd = ({
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
  motion: p,
  className: g,
  children: d
}) => {
  const m = ln(Kn), v = ue(x ?? (m == null ? void 0 : m.size), "md"), y = se(p ?? (m == null ? void 0 : m.motion)), C = !!(u || m != null && m.disabled), h = !!(m && t !== void 0), N = m && !m.multiple ? "radio" : "checkbox", [E, T] = Je({
    value: l,
    defaultValue: i,
    onChange: b
  }), L = h ? m.multiple ? Array.isArray(m.value) && m.value.includes(t) : m.value === t : E, S = (w) => {
    C || (h ? m.toggleValue(t) : T(w));
  };
  return /* @__PURE__ */ c(
    "label",
    {
      "data-motion": y,
      "data-size": v,
      "data-checked": L ? "true" : "false",
      className: f(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        Ft[v],
        L ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !C && !L && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        C ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1",
        g
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: N,
            name: m == null ? void 0 : m.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!L,
            disabled: C,
            onChange: (w) => S(w.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: f(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              wa[v]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: f("font-semibold text-[var(--abc-fg)]", ar[v]), children: r }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          a && /* @__PURE__ */ e("p", { className: f("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Tr[v]), children: a }),
          d && /* @__PURE__ */ e("div", { className: "mt-2", children: d })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: f(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              L ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(He, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Bd = ({
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
  className: p
}) => {
  const g = ue(u, "md"), d = se(x), m = !!((o || b) && !i), v = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": d,
      "data-size": g,
      className: f(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ft[g],
        m && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
        i && "opacity-55 cursor-not-allowed",
        p
      ),
      children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ c("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              a && /* @__PURE__ */ e(
                "span",
                {
                  className: f(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    wa[g]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: f("min-w-0 truncate", ar[g]), children: o && !i ? /* @__PURE__ */ e(
                "a",
                {
                  href: o,
                  target: l,
                  rel: l === "_blank" ? "noreferrer" : void 0,
                  onClick: () => b == null ? void 0 : b(),
                  className: f(v, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : b && !i ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: b,
                  className: f(v, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          r && /* @__PURE__ */ e("p", { className: f("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", Tr[g]), children: r })
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
}, Zi = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, jd = ({
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
  children: p
}) => {
  const g = ue(i, "md"), d = se(b), m = je(), [v, y] = Je({
    value: o,
    defaultValue: s,
    onChange: l
  });
  return /* @__PURE__ */ c(
    "section",
    {
      "data-motion": d,
      "data-size": g,
      className: f(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        u
      ),
      children: [
        /* @__PURE__ */ c("div", { className: f("flex items-center justify-between gap-3", Zi[g]), children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              "aria-expanded": v,
              "aria-controls": m,
              onClick: () => y(!v),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  ct,
                  {
                    className: f(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      v ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: a }),
                /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: f("truncate font-semibold text-[var(--abc-fg)]", ar[g]), children: t }),
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
        /* @__PURE__ */ e("div", { id: m, className: "abc-collapse-grid", "data-open": v, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ e(
          "div",
          {
            className: f(
              "border-t border-[var(--abc-border)]",
              Ft[g],
              x
            ),
            children: p
          }
        ) }) })
      ]
    }
  );
}, Od = ({
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
  size: p,
  motion: g,
  className: d
}) => {
  const m = ue(p, "md"), v = se(g);
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": v,
      "data-size": m,
      className: f(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        Ft[m],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        d
      ),
      children: [
        /* @__PURE__ */ c("div", { children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: f("font-bold text-[var(--abc-fg)]", ar[m]), children: t }),
            o && l && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(kr, { className: "h-2.5 w-2.5" }),
              l
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: f("mt-1.5 text-[var(--abc-fg-muted)]", Tr[m]), children: n }),
          /* @__PURE__ */ c("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: f("font-extrabold text-[var(--abc-fg)]", Hn[m]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((y, C) => {
            const h = typeof y == "string" ? { text: y, included: !0 } : y, N = h.included !== !1;
            return /* @__PURE__ */ c(
              "li",
              {
                className: f(
                  "flex items-start gap-2 text-xs",
                  N ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  N ? /* @__PURE__ */ e(He, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(Ke, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: h.text })
                ]
              },
              C
            );
          }) })
        ] }),
        x && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          _e,
          {
            variant: o ? "primary" : "secondary",
            size: m,
            motion: v,
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
}, Ji = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, $d = ({
  columns: t = 3,
  gap: r,
  className: a,
  children: n,
  ...s
}) => {
  const o = ue(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: f(
        "grid auto-rows-[minmax(148px,auto)]",
        Ji[t],
        Qi[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, Qi = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, Wd = ({
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
  className: p,
  children: g,
  ...d
}) => {
  const m = ue(u, "md"), v = se(x), y = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", C = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ c(
    "article",
    {
      "data-motion": v,
      "data-size": m,
      className: f(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ft[m],
        y,
        C,
        b && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        p
      ),
      ...d,
      children: [
        /* @__PURE__ */ c("div", { children: [
          (a || o) && /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: f("font-bold text-[var(--abc-fg)]", ar[m]), children: n }),
          s && /* @__PURE__ */ e("p", { className: f("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Tr[m]), children: s })
        ] }),
        l && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: l }),
        g,
        i && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: i })
      ]
    }
  );
}, el = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Fd = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const o = ue(a, "sm"), l = se(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": l,
      className: f("abc-breadcrumb", el[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((i, b) => {
        const u = b === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ c(
          "a",
          {
            href: i.href ?? "#",
            "aria-current": u ? "page" : void 0,
            onClick: (x) => {
              var p;
              (!i.href || i.href === "#" || i.onClick) && x.preventDefault(), u || (p = i.onClick) == null || p.call(i, x);
            },
            className: f(
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
}, tl = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, rl = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, Hd = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: l,
  className: i
}) => {
  const b = n === "vertical", u = ue(s, "sm"), x = se(o);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": x,
      className: f(
        "m-0 list-none p-0",
        b ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        i
      ),
      children: t.map((p, g) => {
        const d = p.status ?? (g < r ? "finish" : g === r ? a : "wait"), m = !!(l && !p.disabled), v = g === t.length - 1, y = d === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : d === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : d === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ c(
          "li",
          {
            className: f(
              "relative flex min-w-0",
              b ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: !m,
                  onClick: () => m && (l == null ? void 0 : l(g)),
                  className: f(
                    "abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]",
                    m ? "cursor-pointer" : "cursor-default"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: f(
                          "abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors",
                          tl[u],
                          y
                        ),
                        children: p.icon ? p.icon : d === "finish" ? /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5" }) : d === "error" ? /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }) : g + 1
                      }
                    ),
                    /* @__PURE__ */ c("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: f(
                            "block font-semibold",
                            rl[u],
                            d === "wait" ? "text-[var(--abc-fg-muted)]" : d === "error" ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg)]"
                          ),
                          children: p.title
                        }
                      ),
                      p.description && /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: p.description })
                    ] })
                  ]
                }
              ),
              !v && !b && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: f(
                    "hidden h-px flex-1 sm:block",
                    g < r ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border)]"
                  )
                }
              )
            ]
          },
          p.key ?? g
        );
      })
    }
  );
}, Xe = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: l
}) => {
  const i = se(s), [b, u] = O(!1), [x, p] = O(!1), g = je(), d = de(null), m = de(null), v = de(null), y = de(null), C = he(() => {
    typeof window > "u" || (v.current !== null && (window.clearTimeout(v.current), v.current = null), y.current !== null && (window.clearTimeout(y.current), y.current = null));
  }, []);
  le(() => () => C(), [C]);
  const h = he(
    (M = !1) => {
      a || !t || (C(), p(!1), M || n <= 0 || typeof window > "u" ? u(!0) : v.current = window.setTimeout(() => {
        u(!0), v.current = null;
      }, n));
    },
    [a, t, n, C]
  ), N = he(() => {
    if (C(), typeof window > "u") {
      u(!1);
      return;
    }
    y.current = window.setTimeout(() => {
      u(!1), y.current = null;
    }, 60);
  }, [C]), E = he(() => {
    C(), p(!0), u(!1);
  }, [C]), { isMounted: T, isVisible: L } = kt(
    b && !a && !!t,
    i === "none" || x ? 0 : 100
  ), { style: S, actualSide: w, arrowOffset: k, portalContainer: A } = rr({
    open: T,
    triggerRef: d,
    floatingRef: m,
    placement: r,
    offset: 8
  });
  if (le(() => {
    if (!b) return;
    const M = (_) => {
      _.key === "Escape" && E();
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [b, E]), !t || a) return /* @__PURE__ */ e(Re, { children: o });
  const R = w === "top" ? { left: `${k}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "bottom" ? { left: `${k}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : w === "left" ? { top: `${k}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${k}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ c(Re, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: d,
        "data-motion": i,
        "aria-describedby": b ? g : void 0,
        onMouseEnter: () => h(!1),
        onMouseLeave: N,
        onFocus: () => h(!0),
        onBlur: E,
        onPointerDown: E,
        className: f("inline-flex items-center", l),
        children: o
      }
    ),
    T && A && tt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: m,
          id: g,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": i,
          "data-placement": w,
          style: S,
          className: f(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            i !== "none" && (L ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "relative z-10 block", children: t }),
            /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                style: R,
                className: "pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
              }
            )
          ]
        }
      ),
      A
    )
  ] });
}, Bt = ({
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
  panelClassName: p
}) => {
  const g = se(b), [d, m] = Je({
    value: o,
    defaultValue: l,
    onChange: i
  }), { isMounted: v, isVisible: y } = kt(d, g === "none" ? 0 : 140), C = de(null), h = de(null), N = de(null), E = je(), T = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: L, actualSide: S, portalContainer: w } = rr({
    open: v,
    triggerRef: C,
    floatingRef: h,
    placement: T,
    offset: 6
  }), k = he(() => {
    N.current !== null && typeof window < "u" && (window.clearTimeout(N.current), N.current = null);
  }, []);
  le(() => () => k(), [k]);
  const A = he(() => {
    s === "hover" && (k(), m(!0));
  }, [s, k, m]), R = he(() => {
    s === "hover" && (k(), typeof window < "u" && (N.current = window.setTimeout(() => {
      m(!1), N.current = null;
    }, 140)));
  }, [s, k, m]), M = he((W) => {
    var ee;
    const j = h.current;
    if (!j) return;
    const H = Array.from(
      j.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (H.length === 0) return;
    const ae = (W % H.length + H.length) % H.length;
    (ee = H[ae]) == null || ee.focus();
  }, []);
  le(() => {
    if (!d) return;
    const W = (H) => {
      var ee, we;
      const ae = H.target;
      (ee = C.current) != null && ee.contains(ae) || (we = h.current) != null && we.contains(ae) || m(!1);
    }, j = (H) => {
      var ae;
      if (H.key === "Escape") {
        H.preventDefault(), H.stopPropagation(), m(!1);
        const ee = (ae = C.current) == null ? void 0 : ae.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        ee == null || ee.focus();
      }
    };
    return document.addEventListener("mousedown", W), document.addEventListener("keydown", j, !0), () => {
      document.removeEventListener("mousedown", W), document.removeEventListener("keydown", j, !0);
    };
  }, [d, m]);
  const _ = !r, $ = (W) => {
    W.key === "ArrowDown" ? (W.preventDefault(), m(!0), _ && typeof window < "u" && window.requestAnimationFrame(() => M(0))) : (W.key === "Enter" || W.key === " ") && W.target === W.currentTarget && (W.preventDefault(), m(!d));
  }, G = (W) => {
    if (!_) return;
    const j = h.current;
    if (!j) return;
    const H = Array.from(
      j.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (H.length === 0) return;
    const ae = H.indexOf(document.activeElement);
    W.key === "ArrowDown" ? (W.preventDefault(), M(ae < 0 ? 0 : ae + 1)) : W.key === "ArrowUp" ? (W.preventDefault(), M(ae <= 0 ? H.length - 1 : ae - 1)) : W.key === "Home" ? (W.preventDefault(), M(0)) : W.key === "End" && (W.preventDefault(), M(H.length - 1));
  }, z = s === "hover" ? S === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : S === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : S === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ c(Re, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: C,
        "data-motion": g,
        onMouseEnter: A,
        onMouseLeave: R,
        className: f("inline-flex", x),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": d,
            "aria-controls": d ? E : void 0,
            "aria-haspopup": _ ? "menu" : void 0,
            onClick: () => m(!d),
            onKeyDown: $,
            className: "inline-flex cursor-pointer items-center",
            children: u
          }
        )
      }
    ),
    v && w && tt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: h,
          id: E,
          role: _ ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": g,
          "data-placement": S,
          style: L,
          onMouseEnter: A,
          onMouseLeave: R,
          onKeyDown: G,
          className: f(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            z,
            g !== "none" && (y ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            p
          ),
          children: r || t.map(
            (W) => W.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, W.key) : /* @__PURE__ */ c(qe.Fragment, { children: [
              W.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: W.disabled,
                  onClick: () => {
                    var j;
                    W.disabled || ((j = W.onClick) == null || j.call(W), m(!1));
                  },
                  className: f(
                    "abc-motion-control flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
                    W.danger ? "text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    W.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    W.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: W.icon }),
                    /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: W.label })
                  ]
                }
              )
            ] }, W.key)
          )
        }
      ),
      w
    )
  ] });
}, Un = ({
  title: t,
  content: r,
  align: a,
  placement: n,
  panelClassName: s,
  ...o
}) => {
  const l = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    Bt,
    {
      ...o,
      placement: n ?? (l && l === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: f(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, al = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, oa = ({
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
  children: p
}) => {
  const g = ue(b, "sm"), d = se(u);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": d,
      className: f(
        i === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        x
      ),
      children: [
        (t || l) && /* @__PURE__ */ c(
          "div",
          {
            className: f(
              "flex items-center justify-between gap-2",
              i === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ c(
                "label",
                {
                  htmlFor: r,
                  className: f(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    al[g]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(Xe, { content: n, children: /* @__PURE__ */ e(wr, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
                  ]
                }
              ),
              l && /* @__PURE__ */ e("div", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
          p,
          s ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] font-medium text-[var(--abc-danger)]", children: s }) : o && /* @__PURE__ */ e("p", { className: "mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: o })
        ] })
      ]
    }
  );
}, nl = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, sl = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, wt = ({
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
  placeholder: p = "请选择",
  multiple: g = !1,
  searchable: d = !1,
  allowClear: m,
  clearable: v,
  disabled: y = !1,
  invalid: C = !1,
  size: h,
  motion: N,
  className: E
}) => {
  var fe;
  const T = ue(h, "sm"), L = se(N), S = je(), w = b || S, [k, A] = Je({
    value: r,
    defaultValue: a ?? (g ? [] : ""),
    onChange: n
  }), [R, M] = O(!1), [_, $] = O(""), [G, z] = O(0), { isMounted: W, isVisible: j } = kt(R, L === "none" ? 0 : 140), H = de(null), ae = de(null), ee = de(null), we = de(null), B = !!(m ?? v), V = !!(C || l), { style: U, actualSide: Y, portalContainer: Q } = rr({
    open: W,
    triggerRef: ae,
    floatingRef: ee,
    placement: "bottomLeft",
    offset: 4,
    matchWidth: !0
  });
  le(() => {
    if (!R) {
      $("");
      return;
    }
    const F = (ie) => {
      var X, Ce;
      const K = ie.target;
      (X = H.current) != null && X.contains(K) || (Ce = ee.current) != null && Ce.contains(K) || M(!1);
    }, Z = (ie) => {
      var K;
      ie.key === "Escape" && (ie.preventDefault(), ie.stopPropagation(), M(!1), (K = ae.current) == null || K.focus());
    };
    return document.addEventListener("mousedown", F), document.addEventListener("keydown", Z, !0), () => {
      document.removeEventListener("mousedown", F), document.removeEventListener("keydown", Z, !0);
    };
  }, [R]);
  const ne = ce(() => {
    const F = _.trim();
    return F ? t.filter(
      (Z) => nt(Z.label, F) || String(Z.value).toLowerCase().includes(F.toLowerCase())
    ) : t;
  }, [t, _]), D = ce(() => g ? Array.isArray(k) ? k : k != null && k !== "" ? [k] : [] : k != null && k !== "" ? [k] : [], [g, k]), be = ce(() => D.map((F) => {
    const Z = t.find((ie) => String(ie.value) === String(F));
    return { value: F, label: (Z == null ? void 0 : Z.label) ?? String(F) };
  }), [t, D]), Be = () => {
    const F = ne.findIndex(
      (Z) => !Z.disabled && D.some((ie) => String(ie) === String(Z.value))
    );
    if (F >= 0)
      z(F);
    else {
      const Z = ne.findIndex((ie) => !ie.disabled);
      z(Z >= 0 ? Z : 0);
    }
    M(!0);
  }, Oe = (F) => {
    var ie;
    if (ne.length === 0) return;
    let Z = G;
    for (let K = 0; K < ne.length; K++)
      if (Z = (Z + F + ne.length) % ne.length, !((ie = ne[Z]) != null && ie.disabled)) {
        z(Z);
        return;
      }
  }, re = (F) => {
    var Z;
    if (!F.disabled)
      if (g) {
        const K = D.some((X) => String(X) === String(F.value)) ? D.filter((X) => String(X) !== String(F.value)) : [...D, F.value];
        A(K);
      } else
        A(F.value), M(!1), (Z = ae.current) == null || Z.focus();
  }, oe = (F) => {
    if (!y) {
      if (F.key === "Escape") {
        F.preventDefault(), F.stopPropagation(), M(!1);
        return;
      }
      if (F.key === "ArrowDown") {
        F.preventDefault(), R ? Oe(1) : Be();
        return;
      }
      if (F.key === "ArrowUp") {
        F.preventDefault(), R ? Oe(-1) : Be();
        return;
      }
      if (F.key === "Enter" || F.key === " " && F.target !== we.current)
        if (F.preventDefault(), !R)
          Be();
        else {
          const Z = ne[G];
          Z && !Z.disabled && re(Z);
        }
    }
  };
  return /* @__PURE__ */ c("div", { ref: H, className: "relative min-w-0 w-full", children: [
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
        value: g ? D.join(",") : String(D[0] ?? "")
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        ref: ae,
        id: w,
        title: x,
        role: "combobox",
        "aria-expanded": R,
        "aria-haspopup": "listbox",
        "aria-controls": `${w}-listbox`,
        "aria-activedescendant": R ? `${w}-opt-${G}` : void 0,
        "aria-disabled": y || void 0,
        tabIndex: y ? -1 : 0,
        onBlur: (F) => {
          var ie;
          const Z = F.relatedTarget;
          Z && ((ie = ee.current) != null && ie.contains(Z)) || s == null || s(F);
        },
        onClick: () => {
          y || (R ? M(!1) : Be());
        },
        onKeyDown: oe,
        "data-motion": L,
        className: f(
          "flex w-full items-center justify-between gap-1.5 px-2.5 py-1 cursor-pointer select-none abc-motion-control",
          ht,
          g ? sl[T] : nl[T],
          R && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
          V && "border-[var(--abc-danger)]",
          y && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          E
        ),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: be.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: p }) : g ? be.map((F) => /* @__PURE__ */ c(
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
                    onClick: (Z) => {
                      Z.stopPropagation(), A(D.filter((ie) => String(ie) !== String(F.value)));
                    },
                    className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                    children: /* @__PURE__ */ e(Ke, { className: "h-2.5 w-2.5" })
                  }
                )
              ]
            },
            String(F.value)
          )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (fe = be[0]) == null ? void 0 : fe.label }) }),
          /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            B && be.length > 0 && !y && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "data-testid": "select-clear",
                "aria-label": "清空",
                onClick: (F) => {
                  F.stopPropagation(), A(g ? [] : "");
                },
                className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ e(
              ct,
              {
                className: f("h-3.5 w-3.5 transition-transform duration-150", R && "rotate-180")
              }
            )
          ] })
        ]
      }
    ),
    W && Q && tt(
      /* @__PURE__ */ c(
        "div",
        {
          ref: ee,
          id: `${w}-listbox`,
          role: "listbox",
          "data-abc-floating": "",
          "data-motion": L,
          "data-placement": Y,
          "aria-multiselectable": g || void 0,
          style: U,
          className: f(
            "z-[1300] min-w-[160px] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            j ? "abc-animate-popover-in" : "abc-animate-popover-out"
          ),
          children: [
            d && /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
              /* @__PURE__ */ e(dt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: we,
                  type: "text",
                  autoFocus: !0,
                  "data-testid": "select-search-input",
                  value: _,
                  onClick: (F) => F.stopPropagation(),
                  onKeyDown: oe,
                  onChange: (F) => {
                    const Z = F.target.value;
                    $(Z);
                    const K = (Z.trim() ? t.filter(
                      (X) => nt(X.label, Z) || String(X.value).toLowerCase().includes(Z.toLowerCase())
                    ) : t).findIndex((X) => !X.disabled);
                    z(K >= 0 ? K : 0);
                  },
                  placeholder: "搜索或输入拼音首字母...",
                  className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "max-h-56 overflow-y-auto p-1", children: ne.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : ne.map((F, Z) => {
              const ie = D.some((X) => String(X) === String(F.value)), K = Z === G;
              return /* @__PURE__ */ c(
                "button",
                {
                  id: `${w}-opt-${Z}`,
                  type: "button",
                  role: "option",
                  "aria-selected": ie,
                  disabled: F.disabled,
                  onMouseEnter: () => {
                    F.disabled || z(Z);
                  },
                  onClick: (X) => {
                    X.stopPropagation(), re(F);
                  },
                  className: f(
                    "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                    ie ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : K && !F.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    F.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "truncate", children: F.label }),
                      F.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: F.description })
                    ] }),
                    ie && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 shrink-0" })
                  ]
                },
                String(F.value)
              );
            }) })
          ]
        }
      ),
      Q
    ),
    l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
    i && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: i })
  ] });
}, qa = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, Za = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, ol = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, er = qe.forwardRef(
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
    ...p
  }, g) => {
    const d = ue(l, "sm"), m = se(i), v = je(), y = t || v, C = de(null);
    xr(g, () => C.current, []);
    const [h, N] = Je({
      value: r,
      defaultValue: a
    });
    le(() => {
      C.current && (C.current.indeterminate = !!n);
    }, [n]);
    const E = !!(b || u);
    return /* @__PURE__ */ c(
      "label",
      {
        htmlFor: y,
        "data-motion": m,
        className: f(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          ol[d],
          E ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          x
        ),
        children: [
          /* @__PURE__ */ c(
            "span",
            {
              className: f(
                "relative inline-flex shrink-0 items-center justify-center",
                qa[d],
                E && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...p,
                    ref: C,
                    id: y,
                    type: "checkbox",
                    checked: h,
                    disabled: o,
                    onChange: (T) => {
                      if (o) return;
                      const L = T.target.checked;
                      N(L), s == null || s(L, T);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: f(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      qa[d],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      h || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(Mr, { className: f(Za[d], "stroke-[2.5] abc-motion-pop") }) : h && /* @__PURE__ */ e(He, { className: f(Za[d], "stroke-[2.5] abc-motion-pop") })
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
er.displayName = "Checkbox";
const cl = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, il = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, ll = {
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
  ariaLabel: p,
  className: g
}) => {
  const m = ue(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), v = se(l), [y, C] = Je({
    value: t,
    defaultValue: r,
    onChange: a
  }), h = !!(n || s), N = i ?? u, E = b ?? x;
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": y,
      "aria-label": p,
      disabled: h,
      "data-motion": v,
      onClick: () => {
        h || C(!y);
      },
      className: f(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        cl[m],
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
            className: f(
              "pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform",
              y ? il[m] : ll[m]
            ),
            children: s && /* @__PURE__ */ e(yr, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (N || E) && /* @__PURE__ */ e("span", { className: "sr-only", children: y ? N : E })
      ]
    }
  );
}, dl = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, bl = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, ul = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, ml = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, fl = {
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
  const u = ue(o, "sm"), x = se(l), [p, g] = Je({
    value: r,
    defaultValue: a ?? ((d = t[0]) == null ? void 0 : d.value) ?? "",
    onChange: n
  });
  return s === "segmented" ? /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": x,
      className: f(
        "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        dl[u],
        b
      ),
      children: t.map((m) => {
        const v = String(p) === String(m.value), y = !!(i || m.disabled);
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": v,
            disabled: y,
            onClick: () => g(m.value),
            className: f(
              "rounded-[var(--abc-radius-sm)] font-medium cursor-pointer select-none abc-motion-control",
              bl[u],
              v ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]",
              y && "opacity-45 cursor-not-allowed"
            ),
            children: m.label
          },
          String(m.value)
        );
      })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": x,
      className: f("inline-flex flex-wrap items-center gap-4", b),
      children: t.map((m) => {
        const v = String(p) === String(m.value), y = !!(i || m.disabled);
        return /* @__PURE__ */ c(
          "label",
          {
            className: f(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              fl[u],
              y ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "radio",
                  checked: v,
                  disabled: y,
                  onChange: () => g(m.value),
                  className: "peer sr-only"
                }
              ),
              /* @__PURE__ */ e(
                "span",
                {
                  className: f(
                    "flex items-center justify-center rounded-full border abc-motion-control",
                    ul[u],
                    v ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: v && /* @__PURE__ */ e(
                    "span",
                    {
                      className: f(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        ml[u]
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: m.label })
            ]
          },
          String(m.value)
        );
      })
    }
  );
}, Vn = ["日", "一", "二", "三", "四", "五", "六"], Gn = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, ca = qe.forwardRef(
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
    minDate: p,
    maxDate: g,
    size: d,
    motion: m,
    className: v
  }, y) => {
    const C = ue(d, "sm"), h = se(m), N = je(), E = u || N, T = de(null), L = de(null);
    xr(y, () => T.current, []);
    const S = t !== void 0, [w, k] = O(r), A = S ? t ?? "" : w, [R, M] = O(!1), [_, $] = O({ top: 0, left: 0 }), [G, z] = O(
      () => A && ke(A).isValid() ? ke(A) : ke()
    ), j = !!((s ?? o ?? !0) && A && !l);
    le(() => {
      R && z(
        A && ke(A).isValid() ? ke(A) : ke()
      );
    }, [R, A]);
    const H = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      { label: "今天", value: () => ke().format(i) },
      { label: "昨天", value: () => ke().subtract(1, "day").format(i) },
      { label: "明天", value: () => ke().add(1, "day").format(i) },
      { label: "一周前", value: () => ke().subtract(7, "day").format(i) }
    ], [b, i]);
    le(() => {
      if (!R) return;
      const B = () => {
        if (!T.current || typeof window > "u") return;
        const V = T.current.getBoundingClientRect(), U = H.length > 0 ? 340 : 300, Y = 280, ne = window.innerHeight - V.bottom < U && V.top > U ? V.top - U - 4 : V.bottom + 4;
        let D = V.left;
        D + Y > window.innerWidth - 8 && (D = Math.max(8, window.innerWidth - Y - 8)), $({ top: Math.max(8, ne), left: Math.max(8, D) });
      };
      return B(), window.addEventListener("resize", B), window.addEventListener("scroll", B, !0), () => {
        window.removeEventListener("resize", B), window.removeEventListener("scroll", B, !0);
      };
    }, [R, H.length]), le(() => {
      if (!R) return;
      const B = (U) => {
        var Q, ne;
        const Y = U.target;
        (Q = T.current) != null && Q.contains(Y) || (ne = L.current) != null && ne.contains(Y) || M(!1);
      }, V = (U) => {
        U.key === "Escape" && (U.preventDefault(), U.stopPropagation(), M(!1));
      };
      return document.addEventListener("mousedown", B), document.addEventListener("keydown", V, !0), () => {
        document.removeEventListener("mousedown", B), document.removeEventListener("keydown", V, !0);
      };
    }, [R]);
    const ae = (B) => {
      S || k(B), a == null || a(B);
    }, ee = ce(
      () => ra(G.year(), G.month()),
      [G]
    ), we = ce(() => {
      if (!A) return "";
      const B = ke(A);
      return B.isValid() ? B.format("YYYY-MM-DD") : A;
    }, [A]);
    return /* @__PURE__ */ c(Re, { children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: T,
          id: E,
          "data-datepicker-trigger": "",
          "data-motion": h,
          role: "combobox",
          "aria-expanded": R,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && M((B) => !B),
          onKeyDown: (B) => {
            !l && (B.key === "Enter" || B.key === " ") && (B.preventDefault(), M((V) => !V));
          },
          className: f(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            ht,
            Gn[C],
            R && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            v
          ),
          children: [
            /* @__PURE__ */ e(pa, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: n,
                value: A,
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
                  B.stopPropagation(), ae("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ke, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      R && typeof document < "u" && tt(
        /* @__PURE__ */ c(
          "div",
          {
            ref: L,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": h,
            "aria-label": "日期选择面板",
            style: { top: _.top, left: _.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              H.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: H.map((B) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const V = typeof B.value == "function" ? B.value() : B.value;
                    ae(V), M(!1);
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
                      onClick: () => z((B) => B.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => z((B) => B.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(ha, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: G.format("YYYY 年 M 月") }),
                /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => z((B) => B.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => z((B) => B.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(kn, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Vn.map((B) => /* @__PURE__ */ e("span", { className: "py-1", children: B }, B)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: ee.map((B) => {
                const V = ke(B.iso), U = i === "YYYY-MM-DD" ? B.iso : V.format(i), Y = B.iso === we, Q = !!(p && V.isBefore(ke(p), "day") || g && V.isAfter(ke(g), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": U,
                    disabled: Q,
                    onClick: () => {
                      Q || (ae(U), M(!1));
                    },
                    className: f(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      Y ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : B.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      B.isToday && !Y && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: B.day
                  },
                  B.iso
                );
              }) })
            ]
          }
        ),
        Ir(T.current) ?? document.body
      )
    ] });
  }
);
ca.displayName = "DatePicker";
function Ur(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const ia = qe.forwardRef(
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
    maxDate: p,
    size: g,
    motion: d,
    className: m
  }, v) => {
    const y = ue(g, "sm"), C = se(d), h = je(), N = u || h, E = de(null), T = de(null);
    xr(v, () => E.current, []);
    const L = Array.isArray(t) || t === void 0 && Array.isArray(r), S = t !== void 0, [w, k] = O(
      () => Ur(r)
    ), A = S ? Ur(t) : w, [R, M] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [_, $] = O(!1), [G, z] = O({ top: 0, left: 0 }), [W, j] = O(null), [H, ae] = O(null), [ee, we] = O(
      () => A.start && ke(A.start).isValid() ? ke(A.start) : ke()
    ), B = ce(() => ee.add(1, "month"), [ee]), U = !!((s ?? o ?? !0) && (A.start || A.end) && !l);
    le(() => {
      _ ? (j(null), ae(null), we(
        A.start && ke(A.start).isValid() ? ke(A.start) : ke()
      )) : (j(null), ae(null));
    }, [_, A.start]);
    const Y = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      {
        label: "今天",
        getValue: () => {
          const re = ke().format(i);
          return { start: re, end: re };
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
    le(() => {
      if (!_) return;
      const re = () => {
        if (!E.current || typeof window > "u") return;
        const oe = E.current.getBoundingClientRect(), fe = Y.length > 0 ? 370 : 330, F = 556, ie = window.innerHeight - oe.bottom < fe && oe.top > fe ? oe.top - fe - 4 : oe.bottom + 4;
        let K = oe.left;
        K + F > window.innerWidth - 8 && (K = Math.max(8, window.innerWidth - F - 8)), z({ top: Math.max(8, ie), left: Math.max(8, K) });
      };
      return re(), window.addEventListener("resize", re), window.addEventListener("scroll", re, !0), () => {
        window.removeEventListener("resize", re), window.removeEventListener("scroll", re, !0);
      };
    }, [_, Y.length]), le(() => {
      if (!_) return;
      const re = (fe) => {
        var Z, ie;
        const F = fe.target;
        (Z = E.current) != null && Z.contains(F) || (ie = T.current) != null && ie.contains(F) || $(!1);
      }, oe = (fe) => {
        fe.key === "Escape" && (fe.preventDefault(), fe.stopPropagation(), $(!1));
      };
      return document.addEventListener("mousedown", re), document.addEventListener("keydown", oe, !0), () => {
        document.removeEventListener("mousedown", re), document.removeEventListener("keydown", oe, !0);
      };
    }, [_]);
    const Q = (re) => {
      S || k(re), L ? a == null || a([re.start, re.end]) : a == null || a(re);
    }, ne = ce(() => {
      if (W) {
        const re = ke(W);
        if (!H) return { start: re, end: null };
        const oe = ke(H);
        return oe.isBefore(re, "day") ? { start: oe, end: re } : { start: re, end: oe };
      }
      return {
        start: A.start && ke(A.start).isValid() ? ke(A.start) : null,
        end: A.end && ke(A.end).isValid() ? ke(A.end) : null
      };
    }, [W, H, A]), D = ce(
      () => ra(ee.year(), ee.month()),
      [ee]
    ), be = ce(
      () => ra(B.year(), B.month()),
      [B]
    ), Be = (re) => {
      const oe = ke(re), fe = i === "YYYY-MM-DD" ? re : oe.format(i);
      if (!W) {
        j(fe), ae(null);
        return;
      }
      const F = ke(W), [Z, ie] = oe.isBefore(F, "day") ? [oe, F] : [F, oe];
      Q({ start: Z.format(i), end: ie.format(i) }), j(null), ae(null), $(!1);
    }, Oe = (re, oe, fe) => /* @__PURE__ */ c("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ c("div", { className: "mb-2 flex items-center justify-between", children: [
        fe === "left" ? /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => we((F) => F.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Nn, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => we((F) => F.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(ha, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: re.format("YYYY 年 M 月") }),
        fe === "right" ? /* @__PURE__ */ c("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => we((F) => F.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(bt, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => we((F) => F.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(kn, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Vn.map((F) => /* @__PURE__ */ e("span", { className: "py-1", children: F }, F)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: oe.map((F) => {
        const Z = ke(F.iso), ie = i === "YYYY-MM-DD" ? F.iso : Z.format(i), K = !!(ne.start && Z.isSame(ne.start, "day")), X = !!(ne.end && Z.isSame(ne.end, "day")), Ce = !!(ne.start && ne.end && Z.isAfter(ne.start, "day") && Z.isBefore(ne.end, "day")), Te = !!(x && Z.isBefore(ke(x), "day") || p && Z.isAfter(ke(p), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": ie,
            disabled: Te,
            onMouseEnter: () => W && ae(ie),
            onClick: () => !Te && Be(F.iso),
            className: f(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              K || X ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : Ce ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : F.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              F.isToday && !K && !X && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: F.day
          },
          `${fe}-${F.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ c(Re, { children: [
      /* @__PURE__ */ c(
        "div",
        {
          ref: E,
          id: N,
          "data-daterangepicker-trigger": "",
          "data-motion": C,
          role: "combobox",
          "aria-expanded": _,
          "aria-haspopup": "dialog",
          tabIndex: l ? -1 : 0,
          onClick: () => !l && $((re) => !re),
          onKeyDown: (re) => {
            !l && (re.key === "Enter" || re.key === " ") && (re.preventDefault(), $((oe) => !oe));
          },
          className: f(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            ht,
            Gn[y],
            _ && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            l && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            m
          ),
          children: [
            /* @__PURE__ */ e(pa, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: l,
                placeholder: R,
                value: A.start,
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
                value: A.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            U && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (re) => {
                  re.stopPropagation(), Q({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ke, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      _ && typeof document < "u" && tt(
        /* @__PURE__ */ c(
          "div",
          {
            ref: T,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": C,
            "aria-label": "日期范围选择面板",
            style: { top: G.top, left: G.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              Y.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: Y.map((re) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const oe = re.getValue(), fe = Ur(oe);
                    Q(fe), j(null), ae(null), $(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: re.label
                },
                re.label
              )) }),
              /* @__PURE__ */ c("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: Oe(ee, D, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: Oe(B, be, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: W ? `已选起始日：${W}，请继续点击截止日期` : A.start && A.end ? `已选区间：${A.start} 至 ${A.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        Ir(E.current) ?? document.body
      )
    ] });
  }
);
ia.displayName = "DateRangePicker";
const pl = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, hl = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function vl(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function gl(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const xl = ({
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
  placeholder: p = "点击或拖拽图片至此处上传",
  className: g
}) => {
  const d = ue(u, "sm"), m = se(x), v = je(), y = de(null), { uploadAdapter: C, toast: h } = Ue(), [N, E] = O(!1), [T, L] = O(!1), [S, w] = O(!1), k = async (M) => {
    if (!M || i || N) return;
    if (!(M.type.startsWith("image/") || M.name.toLowerCase().endsWith(".svg"))) {
      h.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (M.size >= l * 1024 * 1024) {
      h.error(`上传图片大小不能超过 ${l}MB`);
      return;
    }
    E(!0);
    try {
      const G = await (b ?? C ?? gl)(M);
      G ? (r == null || r(G), h.success("上传成功")) : h.error("上传失败，未获取到图片地址");
    } catch ($) {
      h.error(($ == null ? void 0 : $.message) || "上传图片失败，请重试");
    } finally {
      E(!1), y.current && (y.current.value = "");
    }
  }, A = (t == null ? void 0 : t.trim()) ?? "", R = vl(A);
  return /* @__PURE__ */ c("div", { "data-motion": m, className: "w-full", children: [
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
        disabled: i || N,
        onChange: (M) => {
          var _;
          return k((_ = M.target.files) == null ? void 0 : _[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        onClick: () => {
          var M;
          !A && !i && !N && ((M = y.current) == null || M.click());
        },
        onDragOver: (M) => {
          M.preventDefault(), M.stopPropagation(), !i && !N && L(!0);
        },
        onDragLeave: (M) => {
          M.preventDefault(), M.stopPropagation(), L(!1);
        },
        onDrop: (M) => {
          var _;
          M.preventDefault(), M.stopPropagation(), L(!1), !i && !N && k((_ = M.dataTransfer.files) == null ? void 0 : _[0]);
        },
        className: f(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          T ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !i && !T && "hover:border-[var(--abc-primary)]",
          !A && !i && "cursor-pointer",
          i && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          pl[d],
          g
        ),
        children: [
          A ? /* @__PURE__ */ c("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ c(
              "div",
              {
                className: f(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  hl[d]
                ),
                children: [
                  R ? /* @__PURE__ */ e(
                    "div",
                    {
                      className: "flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full",
                      dangerouslySetInnerHTML: { __html: A }
                    }
                  ) : /* @__PURE__ */ e("img", { src: A, alt: "凭证预览", className: "h-full w-full object-contain p-1" }),
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
                      children: /* @__PURE__ */ e($t, { className: "h-4 w-4" })
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
                      var _;
                      M.stopPropagation(), (_ = y.current) == null || _.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(Sr, { className: f("h-3 w-3", N && "animate-spin") }),
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
                      /* @__PURE__ */ e(jt, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "删除" })
                    ]
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ c("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(cc, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: p }),
            /* @__PURE__ */ c("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              l,
              "MB"
            ] })
          ] }),
          N && /* @__PURE__ */ c("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(yr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "正在上传中..." })
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: s }),
    n && !s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: n }),
    /* @__PURE__ */ e(
      yt,
      {
        open: S,
        onClose: () => w(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: R ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: A }
          }
        ) : /* @__PURE__ */ e("img", { src: A, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, yl = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, Kd = ({
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
  showToolbar: p = !1,
  size: g,
  motion: d,
  renderExtra: m,
  className: v
}) => {
  const y = ue(g, "sm"), C = se(d), [h, N] = O(""), [E, T] = O(
    () => b ? new Set(Wr(t)) : /* @__PURE__ */ new Set()
  ), [L, S] = O(s), [w, k] = O([]);
  le(() => {
    b && t.length > 0 && E.size === 0 && T(new Set(Wr(t)));
  }, [t, b]);
  const A = n !== void 0 ? n : L, R = l !== void 0 ? l : w, { checkedKeys: M, halfCheckedKeys: _ } = ce(
    () => Sn(t, A, a),
    [t, A, a]
  ), $ = ce(() => new Set(M), [M]), G = ce(() => new Set(_), [_]), { filteredNodes: z, autoExpandedKeys: W } = ce(
    () => Ac(t, h),
    [t, h]
  ), j = ce(() => h.trim() ? /* @__PURE__ */ new Set([...E, ...W]) : E, [E, W, h]), H = (B) => {
    T((V) => {
      const U = new Set(V);
      return U.has(B) ? U.delete(B) : U.add(B), U;
    });
  }, ae = (B, V) => {
    const U = _c(t, M, B, V, a);
    n === void 0 && S(U.checkedKeys), o == null || o(U.checkedKeys, {
      halfCheckedKeys: U.halfCheckedKeys,
      node: B,
      checked: V
    });
  }, ee = (B) => {
    if (B.disabled) return;
    const V = [B.key];
    l === void 0 && k(V), i == null || i(V, B);
  }, we = (B, V = 0) => /* @__PURE__ */ e("ul", { role: V === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: B.map((U) => {
    const Y = !!(U.children && U.children.length > 0), Q = j.has(U.key), ne = $.has(U.key), D = G.has(U.key), be = R.includes(U.key);
    return /* @__PURE__ */ c("li", { role: "treeitem", "aria-expanded": Y ? Q : void 0, children: [
      /* @__PURE__ */ c(
        "div",
        {
          style: { paddingInlineStart: `${V * 18 + 6}px` },
          className: f(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            yl[y],
            be ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            U.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              Y ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": Q ? `收起 ${U.title}` : `展开 ${U.title}`,
                  onClick: () => H(U.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    bt,
                    {
                      className: f(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        Q && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                er,
                {
                  size: y,
                  motion: C,
                  checked: ne,
                  indeterminate: D,
                  disabled: U.disabled,
                  onChange: (Be) => ae(U, Be)
                }
              ),
              /* @__PURE__ */ c(
                "button",
                {
                  type: "button",
                  disabled: U.disabled,
                  onClick: () => {
                    r && !i ? ae(U, !ne) : ee(U);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    U.icon && /* @__PURE__ */ e(xt, { name: U.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: U.title })
                  ]
                }
              )
            ] }),
            m && /* @__PURE__ */ e("div", { className: "shrink-0", children: m(U) })
          ]
        }
      ),
      Y && Q && we(U.children, V + 1)
    ] }, U.key);
  }) });
  return /* @__PURE__ */ c("div", { "data-motion": C, className: f("space-y-2", v), children: [
    (u || p) && /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
      u && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        et,
        {
          size: y,
          motion: C,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(dt, { className: "h-3.5 w-3.5" }),
          placeholder: x,
          value: h,
          onChange: (B) => N(B.target.value)
        }
      ) }),
      p && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => T(new Set(Wr(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(lc, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => T(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(dc, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: z.length > 0 ? we(z) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, wl = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Nl = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, kl = ({
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
  const u = ue(l, "sm"), x = se(i), [p, g] = O(r), [d, m] = O(""), v = t !== void 0 ? t : p, y = (N) => {
    t === void 0 && g(N), a == null || a(N);
  }, C = () => {
    const N = d.trim();
    if (!(!N || o)) {
      if (v.includes(N) || v.length >= s) {
        m("");
        return;
      }
      y([...v, N]), m("");
    }
  }, h = (N) => {
    o || y(v.filter((E, T) => T !== N));
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": x,
      className: f(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        wl[u],
        ht,
        o && "opacity-65 cursor-not-allowed",
        b
      ),
      children: [
        v.map((N, E) => /* @__PURE__ */ c(
          "span",
          {
            className: f(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              Nl[u]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: N }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${N}`,
                  onClick: () => h(E),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ke, { className: "h-3 w-3" })
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
            disabled: o || v.length >= s,
            value: d,
            placeholder: v.length === 0 ? n : "",
            onChange: (N) => m(N.target.value),
            onBlur: C,
            onKeyDown: (N) => {
              N.key === "Enter" || N.key === "," ? (N.preventDefault(), C()) : N.key === "Backspace" && !d && v.length > 0 && h(v.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function Ja(t, r) {
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
const Cl = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, Ud = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: l
}) => {
  const i = ue(a, "md"), b = se(n), { captchaAdapter: u } = Ue(), x = l ?? u, [p, g] = O(null), [d, m] = O(!0), [v, y] = O(!1), [C, h] = O(!1), [N, E] = O(0), [T, L] = O(0), S = de(!1), w = de(0), k = de(0), A = he(async () => {
    m(!0), y(!1), h(!1), E(0), L(0);
    try {
      if (x) {
        const $ = await x();
        g($);
      } else
        g(Ja(t, r));
    } catch {
      g(Ja(t, r));
    } finally {
      m(!1);
    }
  }, [x, t, r]);
  le(() => {
    A();
  }, [A]);
  const R = ($) => {
    d || v || (S.current = !0, w.current = $, k.current = Date.now());
  }, M = he(
    ($) => {
      if (!S.current || d || v) return;
      const G = $ - w.current, z = t - 40, W = Math.max(0, Math.min(z, G));
      E(W), L((t - 60) / z * W);
    },
    [t, d, v]
  ), _ = he(() => {
    if (!S.current || d || v) return;
    if (S.current = !1, Date.now() - k.current > 1e4 || !p) {
      h(!0), o == null || o(), setTimeout(A, 600);
      return;
    }
    const G = Math.round(T);
    if (typeof p.targetX == "number" && Math.abs(G - p.targetX) > 10) {
      h(!0), o == null || o(), setTimeout(A, 550);
      return;
    }
    y(!0), s({
      nonceStr: p.nonceStr,
      value: G
    });
  }, [T, p, d, v, o, s, A]);
  return le(() => {
    const $ = (j) => M(j.clientX), G = () => _(), z = (j) => {
      j.touches[0] && M(j.touches[0].clientX);
    }, W = () => _();
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", G), window.addEventListener("touchmove", z), window.addEventListener("touchend", W), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", G), window.removeEventListener("touchmove", z), window.removeEventListener("touchend", W);
    };
  }, [M, _]), /* @__PURE__ */ c("div", { "data-motion": b, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          d ? /* @__PURE__ */ c("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : p && /* @__PURE__ */ c(Re, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: p.canvasSrc,
                alt: "安全验证背景",
                className: "pointer-events-none h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(
              "img",
              {
                src: p.blockSrc,
                alt: "安全验证滑块",
                className: "pointer-events-none absolute drop-shadow-md",
                style: { top: p.blockY, left: T }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新拼图",
              title: "刷新拼图",
              onClick: A,
              className: "absolute top-2 right-2 rounded-[var(--abc-radius-sm)] bg-black/45 p-1.5 text-white backdrop-blur-xs transition-colors hover:bg-black/65 cursor-pointer",
              children: /* @__PURE__ */ e(Cr, { className: f("h-3.5 w-3.5", d && "animate-spin") })
            }
          ),
          v && /* @__PURE__ */ c("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(pt, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c(
      "div",
      {
        className: f(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          Cl[i],
          v ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : C ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        ),
        style: { width: t },
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: f(
                "absolute inset-y-0 left-0",
                v ? "bg-[var(--abc-success)]/20" : "bg-[var(--abc-primary)]/20"
              ),
              style: { width: N + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: v ? "验证成功" : C ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(N),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: ($) => R($.clientX),
              onTouchStart: ($) => {
                $.touches[0] && R($.touches[0].clientX);
              },
              className: f(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                v ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: N },
              children: v ? /* @__PURE__ */ e(pt, { className: "h-4 w-4" }) : /* @__PURE__ */ e(ic, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
};
function Vd({
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
  panelClassName: p
}) {
  var E;
  const g = ue(l, "md"), d = se(i), m = je(), [v, y] = Je({
    value: r ?? a,
    defaultValue: n ?? ((E = t[0]) == null ? void 0 : E.key) ?? "",
    onChange: s
  }), C = (T, L) => {
    const S = t.filter((k) => !k.disabled);
    if (S.length === 0) return;
    const w = S.findIndex((k) => {
      var A;
      return k.key === ((A = t[L]) == null ? void 0 : A.key);
    });
    if (T.key === "ArrowRight") {
      T.preventDefault();
      const k = S[(w + 1) % S.length];
      k && y(k.key);
    } else if (T.key === "ArrowLeft") {
      T.preventDefault();
      const k = S[(w - 1 + S.length) % S.length];
      k && y(k.key);
    }
  }, h = t.some((T) => T.children !== void 0), N = g === "xs" ? "px-2.5 py-1 text-[11px]" : g === "sm" ? "px-3 py-1.5 text-xs" : g === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ c("div", { "data-motion": d, className: f("w-full", x), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: f(
          "flex items-center justify-between gap-3",
          o === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": b,
              className: f(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((T, L) => {
                const S = T.key === v, w = `${m}-tab-${T.key}`;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    id: w,
                    type: "button",
                    role: "tab",
                    "aria-selected": S,
                    tabIndex: S ? 0 : -1,
                    disabled: T.disabled,
                    onClick: () => !T.disabled && y(T.key),
                    onKeyDown: (k) => C(k, L),
                    className: f(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      N,
                      o === "line" ? f(
                        "abc-tab-trigger",
                        S ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? f(
                        "rounded-[var(--abc-radius-sm)]",
                        S ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : f(
                        "rounded-[var(--abc-radius-md)] border",
                        S ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]"
                      )
                    ),
                    children: [
                      T.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: T.icon }),
                      /* @__PURE__ */ e("span", { children: T.label }),
                      T.badge !== void 0 && (typeof T.badge == "number" || typeof T.badge == "string" ? /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums", children: T.badge }) : T.badge)
                    ]
                  },
                  T.key
                );
              })
            }
          ),
          u && /* @__PURE__ */ e("div", { className: "shrink-0", children: u })
        ]
      }
    ),
    h && /* @__PURE__ */ e("div", { children: t.map((T) => {
      const L = T.key === v, S = `${m}-tab-${T.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": S,
          tabIndex: L ? 0 : void 0,
          ...L ? {} : { hidden: "until-found" },
          children: L && /* @__PURE__ */ e("div", { className: f("pt-4", d !== "none" && "abc-animate-fade-in", p), children: T.children })
        },
        T.key
      );
    }) })
  ] });
}
const Qa = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function Yn(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const Xn = ({
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
  const p = ue(a, "sm"), g = se(n), d = s ?? Qa[p], m = o ?? Qa[p], [v, y] = O(!1), [C, h] = O(!1), [N, E] = O(1), [T, L] = O(0), S = typeof t == "string" ? t.trim() : "", w = Yn(S), k = ce(() => S ? w && S.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(S)}` : S : "", [S, w]);
  if (le(() => {
    y(!1);
  }, [S]), !S || v)
    return b ? /* @__PURE__ */ e(Re, { children: b }) : /* @__PURE__ */ e(
      "div",
      {
        "data-motion": g,
        title: v ? "图片加载失败，请检查 URL 是否有效" : "暂无图片",
        style: {
          width: d,
          height: m,
          minWidth: typeof d == "number" ? d : void 0
        },
        className: f(
          "inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none",
          l ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          v && "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]",
          u
        ),
        children: v ? /* @__PURE__ */ e(Ot, { className: "h-4 w-4" }) : /* @__PURE__ */ e(gn, { className: "h-4 w-4" })
      }
    );
  const A = (R) => {
    R.stopPropagation(), x && (E(1), L(0), h(!0));
  };
  return /* @__PURE__ */ c(Re, { children: [
    /* @__PURE__ */ c(
      "div",
      {
        role: x ? "button" : void 0,
        tabIndex: x ? 0 : void 0,
        "data-motion": g,
        title: "点击预览大图 / 矢量图",
        "aria-label": x ? `预览 ${r}` : void 0,
        onClick: A,
        onKeyDown: (R) => {
          x && (R.key === "Enter" || R.key === " ") && (R.preventDefault(), A(R));
        },
        style: {
          width: d,
          height: m,
          minWidth: typeof d == "number" ? d : void 0
        },
        className: f(
          "abc-motion-control group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
          l ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          x && "cursor-zoom-in hover:border-[var(--abc-primary)]",
          u
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: k,
              alt: r,
              onError: () => y(!0),
              className: f(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                w || i === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          x && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ c(
      yt,
      {
        open: C,
        onClose: () => h(!1),
        title: r,
        size: "lg",
        motion: g,
        footer: /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => E((R) => Math.max(0.4, Number((R - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(bc, { className: "h-3.5 w-3.5" }),
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
              onClick: () => E((R) => Math.min(3, Number((R + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(uc, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => L((R) => (R + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Cr, { className: "h-3.5 w-3.5" }),
                " 旋转"
              ]
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6", children: /* @__PURE__ */ e(
            "div",
            {
              style: { transform: `scale(${N}) rotate(${T}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: k, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Sl = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: l,
  className: i
}) => {
  const b = ue(o, "sm"), u = se(l), x = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", g = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[b];
  return /* @__PURE__ */ c("div", { "data-motion": u, className: f("space-y-2.5", i), children: [
    (t || r) && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: f("font-semibold text-[var(--abc-fg)]", b === "lg" ? "text-sm" : "text-xs"), children: t }),
      r && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: r })
    ] }),
    /* @__PURE__ */ e(
      "dl",
      {
        className: f(
          "m-0 grid",
          x,
          s ? "overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px" : "gap-x-6 gap-y-3"
        ),
        children: a.map((d, m) => {
          const v = d.span && d.span >= n ? "sm:col-span-full" : d.span === 2 ? "sm:col-span-2" : d.span === 3 ? "lg:col-span-3" : void 0;
          return s ? /* @__PURE__ */ c(
            "div",
            {
              className: f("flex min-w-0 bg-[var(--abc-bg-surface)]", v),
              children: [
                /* @__PURE__ */ e(
                  "dt",
                  {
                    className: f(
                      "w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center",
                      g
                    ),
                    children: d.label
                  }
                ),
                /* @__PURE__ */ e("dd", { className: f("m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center", g), children: d.children ?? "-" })
              ]
            },
            d.key ?? m
          ) : /* @__PURE__ */ c("div", { className: f("min-w-0 space-y-0.5", v), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: d.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: d.children ?? "-" })
          ] }, d.key ?? m);
        })
      }
    )
  ] });
}, Ml = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Il = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, Gd = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: l,
  className: i
}) => {
  const b = je(), u = ue(o, "sm"), x = se(l), [p, g] = O(a), d = n !== void 0 ? n : p, m = (v, y) => {
    let C;
    r ? C = y ? [v] : [] : C = y ? Array.from(/* @__PURE__ */ new Set([...d, v])) : d.filter((h) => h !== v), n === void 0 && g(C), s == null || s(C);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-motion": x,
      className: f(
        "divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        i
      ),
      children: t.map((v) => {
        const y = d.includes(v.key);
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
                  "aria-disabled": v.disabled || void 0,
                  onClick: (C) => {
                    C.preventDefault(), !v.disabled && m(v.key, !y);
                  },
                  className: f(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Ml[u],
                    v.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ c("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        ct,
                        {
                          className: f(
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
                  className: f(
                    "border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] leading-relaxed text-[var(--abc-fg-secondary)]",
                    Il[u]
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
}, El = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, Yd = ({ items: t, size: r, motion: a, className: n }) => {
  const s = ue(r, "sm"), o = se(a), l = {
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
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: f("m-0 list-none space-y-0 p-0", n), children: t.map((u, x) => {
    const p = x === t.length - 1, g = u.tone ?? "primary";
    return /* @__PURE__ */ c("li", { className: f("relative flex", l[s]), children: [
      !p && /* @__PURE__ */ e(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
        }
      ),
      /* @__PURE__ */ e("span", { className: "relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center", children: u.icon ? u.icon : /* @__PURE__ */ e(
        "span",
        {
          className: f(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            El[g]
          )
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: f("font-medium text-[var(--abc-fg)]", i[s]), children: u.title }),
          u.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: u.time })
        ] }),
        u.description && /* @__PURE__ */ e("div", { className: f("leading-relaxed text-[var(--abc-fg-muted)]", b[s]), children: u.description })
      ] })
    ] }, u.key ?? x);
  }) });
};
let Qe = [];
const la = /* @__PURE__ */ new Set();
function qn() {
  la.forEach((t) => t());
}
function Tl(t) {
  Qe.includes(t) || (Qe = [...Qe, t], qn());
}
function en(t) {
  Qe.includes(t) && (Qe = Qe.filter((r) => r !== t), qn());
}
const _l = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, Na = ({
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
  closeOnClickModal: p = !0,
  resizable: g = !0,
  minWidth: d = 340,
  storageKey: m,
  push: v = !0,
  pushDistance: y = 140,
  bodyClassName: C
}) => {
  const h = je(), N = je(), E = t ?? r ?? !1, T = se(b), { isMounted: L, isVisible: S } = kt(E, T === "none" ? 0 : 220), w = de(a);
  w.current = a;
  const [, k] = O(0), [A, R] = O(!1), [M, _] = O(!1), [$, G] = O(() => {
    if (!m || typeof window > "u") return null;
    try {
      const V = Number(window.localStorage.getItem(`abc_drawer_w_${m}`));
      return Number.isFinite(V) && V >= d ? V : null;
    } catch {
      return null;
    }
  });
  le(() => {
    const V = () => k((U) => U + 1);
    return la.add(V), () => {
      la.delete(V);
    };
  }, []), le(() => {
    if (E)
      return Tl(h), () => en(h);
    en(h);
  }, [E, h]), le(() => {
    if (!L) return;
    const V = (U) => {
      const Y = Qe[Qe.length - 1];
      U.key === "Escape" && (!Y || Y === h) && (U.stopPropagation(), w.current());
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [L, h]);
  const z = Qe.indexOf(h), W = z >= 0 ? Math.max(0, Qe.length - 1 - z) : 0, j = z >= 0 ? z + 1 : 1, H = (V) => {
    V.preventDefault(), _(!0);
    const U = (Q) => {
      const ne = Math.max(d, window.innerWidth - 32), D = x === "right" ? window.innerWidth - Q.clientX : Q.clientX, be = Math.min(ne, Math.max(d, D));
      if (R(!1), G(be), m)
        try {
          window.localStorage.setItem(`abc_drawer_w_${m}`, String(Math.round(be)));
        } catch {
        }
    }, Y = () => {
      _(!1), window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", Y);
    };
    window.addEventListener("mousemove", U), window.addEventListener("mouseup", Y);
  };
  if (!L || typeof document > "u") return null;
  const ae = A ? "100dvw" : $ ? `${$}px` : typeof u == "number" ? `${u}px` : u ?? `min(${_l[i]}px, 92dvw)`, ee = v && W > 0 ? W * y : 0, we = v && W > 0 ? Math.max(0.92, 1 - W * 0.025) : 1, B = x === "right" ? -1 : 1;
  return tt(
    /* @__PURE__ */ c(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": n ? N : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, z) * 10 },
        className: "fixed inset-0 flex overflow-hidden",
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                p && a();
              },
              "data-motion": T,
              className: f(
                "fixed inset-0 bg-slate-950/45 backdrop-blur-[1.5px] overscroll-contain",
                T !== "none" && (S ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ),
          /* @__PURE__ */ c(
            "div",
            {
              "data-motion": T,
              style: {
                width: ae,
                transform: ee > 0 ? `translate3d(${B * ee}px, 0, 0) scale(${we})` : void 0
              },
              className: f(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)]",
                !M && T !== "none" && "transition-transform duration-[var(--abc-motion-base)] ease-out",
                x === "right" ? "ml-auto border-l" : "mr-auto border-r",
                T !== "none" && (x === "right" ? S ? "abc-animate-drawer-right-in" : "abc-animate-drawer-right-out" : S ? "abc-animate-drawer-left-in" : "abc-animate-drawer-left-out")
              ),
              children: [
                g && !A && /* @__PURE__ */ c(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: H,
                    className: f(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      x === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(va, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ c("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                      Qe.length > 1 && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--abc-primary)]", children: [
                        /* @__PURE__ */ e(vn, { className: "h-2.5 w-2.5" }),
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
                        "aria-label": A ? "还原默认宽度" : "全宽展开",
                        onClick: () => R((V) => !V),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: A ? /* @__PURE__ */ e(da, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ba, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "关闭抽屉",
                        onClick: a,
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(Ke, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: f("flex-1 overflow-y-auto px-5 py-4 text-xs", C), children: o }),
                l && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: l })
              ]
            }
          )
        ]
      }
    ),
    document.body
  );
}, Al = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Ll = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Xd = ({
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
  const u = r ?? a, x = !!(o || l), p = ue(n, "md"), g = se(s), d = /* @__PURE__ */ c(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": g,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(yr, { className: f("animate-spin", Al[p]) }),
        u && /* @__PURE__ */ e("span", { className: f("font-medium text-[var(--abc-fg-muted)]", Ll[p]), children: u })
      ]
    }
  );
  return x ? t ? /* @__PURE__ */ e(
    "div",
    {
      "data-motion": g,
      className: f(
        "fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs",
        g !== "none" && "abc-animate-fade-in"
      ),
      children: d
    }
  ) : null : b !== void 0 ? /* @__PURE__ */ c("div", { "data-motion": g, className: f("relative", i), children: [
    b,
    t && /* @__PURE__ */ e(
      "div",
      {
        className: f(
          "absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]",
          g !== "none" && "abc-animate-fade-in"
        ),
        children: d
      }
    )
  ] }) : t ? /* @__PURE__ */ e("div", { "data-motion": g, className: f("flex items-center justify-center py-8", i), children: d }) : null;
}, Dl = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  children: s,
  className: o
}) => {
  const { resolvedTheme: l } = Ue(), i = de(null), b = de(null), u = he(() => {
    const x = i.current;
    if (!x) return;
    if (!r || !t || Array.isArray(t) && t.length === 0) {
      b.current && b.current.parentNode === x && x.removeChild(b.current), b.current = null;
      return;
    }
    if (typeof document > "u") return;
    const p = document.createElement("canvas"), g = p.getContext("2d");
    if (!g) return;
    const d = Array.isArray(t) ? t : [t], m = Math.max(window.devicePixelRatio || 1, 1), v = 210 + n[0], y = 90 + n[1];
    p.width = v * m, p.height = y * m;
    let C = "";
    try {
      g.scale(m, m), g.translate(v / 2, y / 2), g.rotate(a * Math.PI / 180), g.font = "500 12px Inter, -apple-system, sans-serif", g.fillStyle = l === "dark" ? "rgba(226, 232, 240, 0.065)" : "rgba(15, 23, 42, 0.055)", g.textAlign = "center", g.textBaseline = "middle", d.forEach((N, E) => {
        const T = (E - (d.length - 1) / 2) * 18;
        g.fillText(N, 0, T);
      }), C = p.toDataURL();
    } catch {
      return;
    }
    if (!C) return;
    let h = b.current;
    h || (h = document.createElement("div"), b.current = h), h.setAttribute("data-watermark-overlay", "true"), h.setAttribute(
      "style",
      [
        "position: absolute",
        "inset: 0",
        "pointer-events: none",
        "z-index: 40",
        `background-image: url(${C})`,
        "background-repeat: repeat",
        `background-size: ${v}px ${y}px`
      ].join(" !important; ") + " !important;"
    ), h.parentNode !== x && x.appendChild(h);
  }, [t, r, n, l, a]);
  return le(() => {
    u();
    const x = i.current;
    if (!x || !r || typeof MutationObserver > "u") return;
    const p = new MutationObserver((g) => {
      for (const d of g)
        if (d.type === "childList") {
          const m = Array.from(d.removedNodes);
          if (b.current && m.includes(b.current)) {
            b.current = null, u();
            break;
          }
        } else if (d.type === "attributes" && d.target === b.current) {
          u();
          break;
        }
    });
    return p.observe(x, {
      childList: !0,
      attributes: !0,
      subtree: !0,
      attributeFilter: ["style", "class", "hidden"]
    }), () => p.disconnect();
  }, [r, u]), /* @__PURE__ */ e("div", { ref: i, className: f("relative", o), children: s });
}, Pl = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Nr, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(pt, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(tr, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Ot, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, Rl = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, qd = ({
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
  const [p, g] = O(!1), d = ue(b, "sm"), m = se(u);
  if (p) return null;
  const v = Pl[t], y = a ?? n;
  return /* @__PURE__ */ c(
    "div",
    {
      role: "alert",
      "data-motion": m,
      className: f(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        Rl[d],
        m !== "none" && "abc-animate-fade-in",
        v.box,
        x
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: v.icon }),
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
            children: /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, zl = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, Bl = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, jl = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, Ol = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  showInfo: n = !0,
  size: s,
  motion: o,
  className: l
}) => {
  const i = ue(typeof s == "string" ? s : void 0, "sm"), b = se(o), u = Math.max(0, Math.min(100, Math.round(t))), x = jl[a];
  if (r === "circle") {
    const g = typeof s == "number" ? s : zl[i], d = Math.max(4, Math.round(g * 0.09)), m = (g - d) / 2, v = 2 * Math.PI * m, y = v - u / 100 * v;
    return /* @__PURE__ */ c(
      "div",
      {
        role: "progressbar",
        "data-motion": b,
        "aria-valuenow": u,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: f("relative inline-flex items-center justify-center", l),
        style: { width: g, height: g },
        children: [
          /* @__PURE__ */ c("svg", { width: g, height: g, className: "-rotate-90", children: [
            /* @__PURE__ */ e(
              "circle",
              {
                cx: g / 2,
                cy: g / 2,
                r: m,
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
                r: m,
                fill: "none",
                stroke: x,
                strokeWidth: d,
                strokeLinecap: "round",
                strokeDasharray: v,
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
  const p = typeof s == "number" ? s : Bl[i];
  return /* @__PURE__ */ c(
    "div",
    {
      role: "progressbar",
      "data-motion": b,
      "aria-valuenow": u,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: f("flex w-full items-center gap-2.5", l),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "flex-1 overflow-hidden rounded-full bg-[var(--abc-bg-subtle)]",
            style: { height: p },
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
}, $l = {
  success: {
    icon: /* @__PURE__ */ e(pt, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(Nr, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e(tr, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e(Ot, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(un, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(fc, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(mc, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, Wl = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: l,
  className: i
}) => {
  const b = $l[t], u = ue(o, "md"), x = se(l);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": x,
      className: f(
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
            className: f(
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
class Fl extends qe.Component {
  constructor() {
    super(...arguments);
    jr(this, "state", { error: null });
    jr(this, "handleReset", () => {
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
      Wl,
      {
        status: "500",
        title: `${n}加载或渲染发生异常`,
        subTitle: a.message || "捕获到未知运行时渲染错误，其他工作区页签不受影响。",
        extra: /* @__PURE__ */ e(
          _e,
          {
            variant: "primary",
            icon: /* @__PURE__ */ e(Sr, { className: "h-3.5 w-3.5" }),
            onClick: this.handleReset,
            children: "重新加载此模块"
          }
        )
      }
    );
  }
}
const Zd = Fl, Vr = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
};
function Hl(t, r, a, n) {
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  if (a.options && a.options.length > 0) {
    const o = a.options.find((l) => String(l.value) === String(t));
    if (o)
      return /* @__PURE__ */ e(Dt, { status: o.status, color: o.color, dot: !0, children: o.label });
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
      return /* @__PURE__ */ e(Xn, { src: String(t), width: 32, height: 32 });
    case "progress":
      return /* @__PURE__ */ e(Ol, { percent: Number(t) || 0, className: "min-w-[92px]" });
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
      return /* @__PURE__ */ e(Dt, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
      return /* @__PURE__ */ e(Dt, { dot: !0, children: String(t) });
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
  ) : a.copyable ? /* @__PURE__ */ e(zi, { text: String(t), displayText: s }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: s }) : s;
}
function Kl({
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
  onHeaderFilterChange: p,
  headerFilterRender: g,
  columnWidths: d = {},
  onColumnResize: m,
  resizable: v,
  motion: y,
  columnFixed: C = {},
  onColumnPin: h,
  onColumnHide: N,
  onResetColumns: E,
  onColumnReorder: T,
  expandable: L,
  onRowView: S,
  onEmptyReset: w,
  maxHeight: k,
  ariaLabel: A = "数据表格",
  emptyText: R = "暂无符合条件的数据",
  className: M
}) {
  const _ = se(y), $ = de(null), G = de(null), [z, W] = O(null), [j, H] = O(null), ae = de(null), ee = de(!1), we = de(null), [B, V] = O({}), [U, Y] = O(0), [Q, ne] = O(null), D = ce(
    () => ({ ...B, ...d }),
    [B, d]
  ), be = v ?? !!m, Be = (P, q) => {
    V((te) => ({ ...te, [P]: q })), m == null || m(P, q);
  };
  Xr(() => {
    const P = $.current;
    if (!P) return;
    const q = () => {
      P.clientWidth > 0 && Y(P.clientWidth);
    };
    if (q(), typeof ResizeObserver > "u") return;
    const te = new ResizeObserver((ye) => {
      var Me, ve;
      const pe = (ve = (Me = ye[0]) == null ? void 0 : Me.contentRect) == null ? void 0 : ve.width;
      typeof pe == "number" && pe > 0 ? Y(Math.floor(pe)) : q();
    });
    return te.observe(P), () => te.disconnect();
  }, []);
  const Oe = (P, q) => typeof a == "function" ? a(P) : (P == null ? void 0 : P[a]) ?? q, re = (P) => P.key in C ? C[P.key] ?? void 0 : P.fixed, oe = ce(() => {
    const P = j && j.length > 0 ? [...t].sort((pe, Me) => {
      const ve = j.indexOf(pe.key), me = j.indexOf(Me.key);
      return ve === -1 && me === -1 ? 0 : ve === -1 ? 1 : me === -1 ? -1 : ve - me;
    }) : t, q = [], te = [], ye = [];
    for (const pe of P) {
      const Me = re(pe);
      Me === "left" ? q.push(pe) : Me === "right" ? ye.push(pe) : te.push(pe);
    }
    return [...q, ...te, ...ye];
  }, [t, C, j]), fe = Array.isArray(o) && typeof l == "function", F = !!(L != null && L.expandedRowRender), Z = ce(() => {
    if (!(L != null && L.defaultExpandAllRows)) return [];
    const P = [], q = (te) => {
      te.forEach((ye, pe) => {
        const Me = Oe(ye, pe);
        (!L.rowExpandable || L.rowExpandable(ye)) && P.push(Me), Array.isArray(ye.children) && ye.children.length > 0 && (P.push(Me), q(ye.children));
      });
    };
    return q(r), P;
  }, []), [ie, K] = Je({
    value: L == null ? void 0 : L.expandedRowKeys,
    defaultValue: Z,
    onChange: L == null ? void 0 : L.onExpandedRowsChange
  }), X = (P) => {
    K(
      ie.includes(P) ? ie.filter((q) => q !== P) : [...ie, P]
    );
  }, Ce = ce(() => {
    const P = [], q = (te, ye) => {
      te.forEach((pe, Me) => {
        const ve = Oe(pe, Me), me = Array.isArray(pe.children) ? pe.children : [], ge = me.length > 0;
        P.push({ record: pe, key: ve, rowIdx: Me, depth: ye, hasTreeChildren: ge }), ge && ie.includes(ve) && q(me, ye + 1);
      });
    };
    return q(r, 0), P;
  }, [r, ie, a]), Te = ce(() => {
    const P = (fe ? 40 : 0) + (F ? 36 : 0), q = {};
    let te = 0;
    for (const me of oe) {
      const ge = D[me.key] ?? me.width ?? 150;
      q[me.key] = ge, te += ge;
    }
    const ye = { ...q }, pe = U, Me = pe > P + te ? pe - (P + te) : 0;
    if (Me > 0) {
      const me = (Ie) => Ie.key === "__abc_actions__" || Ie.key in D || !!re(Ie), ge = oe.filter((Ie) => !me(Ie)), Ee = oe.filter((Ie) => Ie.key !== "__abc_actions__"), Le = ge.length > 0 ? ge : Ee;
      if (Le.length > 0) {
        const Ie = Math.floor(Me / Le.length);
        let ze = Me - Ie * Le.length;
        for (const De of Le) {
          const $e = Ie + (ze > 0 ? 1 : 0);
          ze > 0 && (ze -= 1), ye[De.key] = q[De.key] + $e;
        }
      }
    }
    const ve = P + oe.reduce((me, ge) => me + (ye[ge.key] ?? 150), 0);
    return {
      resolvedWidths: ye,
      resolvedTableWidth: pe > 0 ? Math.max(pe, ve) : void 0
    };
  }, [oe, D, C, U, fe, F]), Ae = ce(() => {
    const P = {}, q = {};
    let te = "", ye = "", pe = (fe ? 40 : 0) + (F ? 36 : 0);
    for (const ve of oe)
      re(ve) === "left" && (P[ve.key] = pe, pe += Te.resolvedWidths[ve.key] ?? 150, te = ve.key);
    let Me = 0;
    for (let ve = oe.length - 1; ve >= 0; ve--) {
      const me = oe[ve];
      re(me) === "right" && (q[me.key] = Me, Me += Te.resolvedWidths[me.key] ?? 150, ye = me.key);
    }
    return {
      leftOffsets: P,
      rightOffsets: q,
      lastLeftKey: te,
      firstRightKey: ye,
      hasAnyLeftFixed: !!te
    };
  }, [oe, Te, C, fe, F]), Ge = ce(
    () => Ce.map((P) => P.key),
    [Ce]
  ), nr = fe && Ge.length > 0 && Ge.every((P) => o.includes(P)), sr = fe && !nr && Ge.some((P) => o.includes(P)), or = (P) => {
    if (fe)
      if (P) {
        const q = Array.from(/* @__PURE__ */ new Set([...o, ...Ge]));
        l(
          q,
          Ce.filter((te) => q.includes(te.key)).map((te) => te.record)
        );
      } else {
        const q = o.filter((te) => !Ge.includes(te));
        l(q, []);
      }
  }, St = (P) => {
    if (!fe) return;
    const te = o.includes(P) ? o.filter((ye) => ye !== P) : [...o, P];
    l(
      te,
      Ce.filter((ye) => te.includes(ye.key)).map((ye) => ye.record)
    );
  }, cr = (P, q, te = "right") => {
    if (!be) return;
    P.preventDefault(), P.stopPropagation();
    const ye = P.clientX, pe = P.currentTarget.parentElement, Me = D[q.key] ?? q.width ?? Te.resolvedWidths[q.key] ?? (pe == null ? void 0 : pe.offsetWidth) ?? 140, ve = q.key === "__abc_actions__" ? 80 : 72, me = typeof document < "u" ? document.body.style.cursor : "", ge = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const Ee = (Ie) => {
      const ze = Ie.clientX - ye, De = te === "left" ? Math.max(ve, Math.round(Me - ze)) : Math.max(ve, Math.round(Me + ze));
      Be(q.key, De);
    }, Le = () => {
      typeof document < "u" && (document.body.style.cursor = me, document.body.style.userSelect = ge), window.removeEventListener("mousemove", Ee), window.removeEventListener("mouseup", Le);
    };
    window.addEventListener("mousemove", Ee), window.addEventListener("mouseup", Le);
  };
  le(() => {
    if (!z) return;
    const P = (q) => {
      if (q.key === "Escape") {
        const te = ae.current;
        W(null), H(null), ae.current = null, we.current = null, ee.current = !1, te && T && T(te);
      }
    };
    return document.addEventListener("keydown", P, !0), () => document.removeEventListener("keydown", P, !0);
  }, [z, T]);
  const _r = oe.map((P) => P.key).join("|");
  Xr(() => {
    const P = we.current;
    if (!P) return;
    we.current = null;
    const q = $.current;
    if (!q || _ === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ye = _ === "subtle" ? 140 : 220, pe = "cubic-bezier(0.22, 1, 0.36, 1)";
    q.querySelectorAll("[data-col-key]").forEach((Me) => {
      const ve = Me.dataset.colKey;
      if (!ve) return;
      const me = P.get(ve);
      if (me === void 0) return;
      const ge = Me.getBoundingClientRect().left, Ee = me - ge;
      if (Math.abs(Ee) <= 1) return;
      typeof Me.animate == "function" && Me.animate([{ translate: `${Ee}px 0` }, { translate: "0 0" }], {
        duration: ye,
        easing: pe
      });
      const Le = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(ve) : ve, Ie = q.querySelectorAll(`[data-col-cell="${Le}"]`), ze = Math.min(Ie.length, 20);
      for (let De = 0; De < ze; De++) {
        const $e = Ie[De];
        typeof $e.animate == "function" && $e.animate([{ translate: `${Ee}px 0` }, { translate: "0 0" }], {
          duration: ye,
          easing: pe
        });
      }
    });
  }, [_r, _]);
  const Ar = (P) => {
    if (!P.sortable || !b) return;
    const q = (i == null ? void 0 : i.key) === P.key ? i.direction : null, te = q === null ? "asc" : q === "asc" ? "desc" : null;
    b(P.key, te);
  };
  le(() => {
    if (!Q) return;
    const P = (te) => {
      var ye;
      te && te.type === "mousedown" && ((ye = G.current) != null && ye.contains(te.target)) || ne(null);
    }, q = (te) => {
      te.key === "Escape" && ne(null);
    };
    return document.addEventListener("mousedown", P), document.addEventListener("keydown", q, !0), window.addEventListener("scroll", P, !0), () => {
      document.removeEventListener("mousedown", P), document.removeEventListener("keydown", q, !0), window.removeEventListener("scroll", P, !0);
    };
  }, [Q]);
  const Mt = (P, q) => {
    if (q.key === "__abc_actions__" || !!!(q.sortable && b || h || N || E)) return;
    P.preventDefault();
    const ye = typeof window < "u" ? window.innerWidth : 1024, pe = typeof window < "u" ? window.innerHeight : 768;
    ne({
      col: q,
      x: Math.max(8, Math.min(P.clientX, ye - 176 - 8)),
      y: Math.max(8, Math.min(P.clientY, pe - 220 - 8))
    });
  }, It = oe.length + (fe ? 1 : 0) + (F ? 1 : 0), ir = Q ? Ir($.current) : null;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: $,
      tabIndex: 0,
      role: "region",
      "aria-label": A,
      "data-motion": _,
      style: k !== void 0 ? { maxHeight: typeof k == "number" ? `${k}px` : k } : void 0,
      className: f(
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
                fe && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                F && /* @__PURE__ */ e("col", { style: { width: "36px" } }),
                oe.map((P) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": P.key,
                    style: { width: `${Te.resolvedWidths[P.key]}px` }
                  },
                  P.key
                ))
              ] }),
              /* @__PURE__ */ c("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
                /* @__PURE__ */ c("tr", { children: [
                  fe && /* @__PURE__ */ e(
                    "th",
                    {
                      style: Ae.hasAnyLeftFixed ? { left: 0 } : void 0,
                      className: f(
                        "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-3 text-center",
                        Ae.hasAnyLeftFixed && "sticky z-20"
                      ),
                      children: /* @__PURE__ */ e(
                        er,
                        {
                          checked: nr,
                          indeterminate: sr,
                          onChange: or
                        }
                      )
                    }
                  ),
                  F && /* @__PURE__ */ e(
                    "th",
                    {
                      style: Ae.hasAnyLeftFixed ? { left: fe ? 40 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: f(
                        "w-9 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        Ae.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  oe.map((P) => {
                    const q = Te.resolvedWidths[P.key], te = re(P), ye = (i == null ? void 0 : i.key) === P.key ? i.direction : null, pe = z === P.key, Me = {
                      width: q ? `${q}px` : void 0,
                      ...te === "left" ? { left: `${Ae.leftOffsets[P.key] ?? 0}px` } : {},
                      ...te === "right" ? { right: `${Ae.rightOffsets[P.key] ?? 0}px` } : {}
                    }, ve = (me) => {
                      if (!z || !T) return;
                      const ge = j && j.length > 0 ? j : oe.filter((De) => De.key !== "__abc_actions__").map((De) => De.key), Ee = ge.indexOf(z), Le = ge.indexOf(me);
                      if (Ee < 0 || Le < 0 || Ee === Le) return;
                      if ($.current) {
                        const De = /* @__PURE__ */ new Map();
                        $.current.querySelectorAll("[data-col-key]").forEach(($e) => {
                          const Ht = $e.dataset.colKey;
                          Ht && De.set(Ht, $e.getBoundingClientRect().left);
                        }), we.current = De;
                      }
                      const Ie = [...ge], [ze] = Ie.splice(Ee, 1);
                      Ie.splice(Le, 0, ze), ee.current = !0, H(Ie), T(Ie);
                    };
                    return /* @__PURE__ */ c(
                      "th",
                      {
                        "data-col-key": P.key,
                        "data-dragging": pe ? "true" : void 0,
                        draggable: !!(T && !te && P.key !== "__abc_actions__"),
                        onContextMenu: (me) => Mt(me, P),
                        onDragStart: (me) => {
                          const ge = oe.filter((Ee) => Ee.key !== "__abc_actions__").map((Ee) => Ee.key);
                          ae.current = ge, ee.current = !1, W(P.key), H(ge), me.dataTransfer && (me.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (me) => {
                          if (!z || z === P.key || te || P.key === "__abc_actions__" || !T)
                            return;
                          me.preventDefault();
                          const ge = j && j.length > 0 ? j : oe.filter((ze) => ze.key !== "__abc_actions__").map((ze) => ze.key), Ee = ge.indexOf(z), Le = ge.indexOf(P.key);
                          if (Ee < 0 || Le < 0 || Ee === Le) return;
                          const Ie = me.currentTarget.getBoundingClientRect();
                          Ie.width > 0 && (Ee < Le && me.clientX < Ie.left + Ie.width * 0.35 || Ee > Le && me.clientX > Ie.left + Ie.width * 0.65) || ve(P.key);
                        },
                        onDrop: () => {
                          z && z !== P.key && !ee.current && !te && P.key !== "__abc_actions__" && ve(P.key), W(null), H(null), ae.current = null, ee.current = !1;
                        },
                        onDragEnd: () => {
                          W(null), H(null), ae.current = null, ee.current = !1;
                        },
                        style: Me,
                        className: f(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          Vr[s],
                          P.align === "center" && "text-center",
                          P.align === "right" && "text-right",
                          te === "left" && "sticky z-20",
                          te === "right" && "sticky z-20",
                          pe && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
                          P.key === Ae.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.12)]",
                          P.key === Ae.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.12)]"
                        ),
                        children: [
                          /* @__PURE__ */ c(
                            "div",
                            {
                              className: f(
                                "inline-flex items-center gap-1",
                                P.align === "right" && "justify-end",
                                P.align === "center" && "justify-center"
                              ),
                              children: [
                                /* @__PURE__ */ c(
                                  "span",
                                  {
                                    className: f(
                                      "inline-flex items-center gap-1",
                                      P.sortable && "cursor-pointer hover:text-[var(--abc-primary)]"
                                    ),
                                    onClick: () => Ar(P),
                                    children: [
                                      T && !te && P.key !== "__abc_actions__" && /* @__PURE__ */ e(va, { className: "h-3 w-3 cursor-grab text-[var(--abc-fg-placeholder)] opacity-0 transition-opacity group-hover:opacity-100" }),
                                      /* @__PURE__ */ e("span", { children: P.title }),
                                      P.tooltip && /* @__PURE__ */ e(Xe, { content: P.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (me) => me.stopPropagation(),
                                          className: "inline-flex text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                                          children: /* @__PURE__ */ e(wr, { className: "h-3 w-3" })
                                        }
                                      ) }),
                                      P.sortable && /* @__PURE__ */ e("span", { className: "inline-flex text-[var(--abc-fg-muted)]", children: ye === "asc" ? /* @__PURE__ */ e(Jr, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : ye === "desc" ? /* @__PURE__ */ e(Qr, { className: "h-3 w-3 text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(za, { className: "h-3 w-3 opacity-50" }) })
                                    ]
                                  }
                                ),
                                g && P.filterable && /* @__PURE__ */ e(
                                  "span",
                                  {
                                    onClick: (me) => me.stopPropagation(),
                                    className: "inline-flex items-center",
                                    children: g(P)
                                  }
                                )
                              ]
                            }
                          ),
                          be && (te === "right" ? /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${P.title} 列宽`,
                              onMouseDown: (me) => cr(me, P, "left"),
                              className: "absolute top-0 bottom-0 left-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ) : /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${P.title} 列宽`,
                              onMouseDown: (me) => cr(me, P, "right"),
                              className: "absolute top-0 right-0 bottom-0 z-10 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ))
                        ]
                      },
                      P.key
                    );
                  })
                ] }),
                u && /* @__PURE__ */ c("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  fe && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-3 py-1.5" }),
                  F && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  oe.map((P) => {
                    const q = re(P);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...q === "left" ? { left: `${Ae.leftOffsets[P.key] ?? 0}px` } : {},
                          ...q === "right" ? { right: `${Ae.rightOffsets[P.key] ?? 0}px` } : {}
                        },
                        className: f(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          q === "left" && "sticky z-20",
                          q === "right" && "sticky z-20"
                        ),
                        children: P.filterable ? P.filterType === "select" && P.filterOptions ? /* @__PURE__ */ e(
                          wt,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: "全部",
                            options: P.filterOptions,
                            value: x[P.key] ?? "",
                            onChange: (te) => p == null ? void 0 : p(P.key, te)
                          }
                        ) : /* @__PURE__ */ e(
                          et,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: `筛选${P.title}`,
                            value: x[P.key] ?? "",
                            onChange: (te) => p == null ? void 0 : p(P.key, te.target.value)
                          }
                        ) : null
                      },
                      `${P.key}_filter`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e("tbody", { children: n ? Array.from({ length: 5 }).map((P, q) => /* @__PURE__ */ c("tr", { children: [
                fe && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-3 py-3 text-center", children: /* @__PURE__ */ e(Fe, { width: 16, height: 16 }) }),
                F && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                oe.map((te) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: f("border-b border-[var(--abc-border)]", Vr[s]),
                    children: /* @__PURE__ */ e(Fe, { variant: "text", className: "w-4/5" })
                  },
                  te.key
                ))
              ] }, `sk_${q}`)) : Ce.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: It, children: /* @__PURE__ */ e(Bi, { title: R, onReset: w }) }) }) : Ce.map(({ record: P, key: q, rowIdx: te, depth: ye, hasTreeChildren: pe }) => {
                const Me = !!(fe && o.includes(q)), ve = ie.includes(q), me = F && (!(L != null && L.rowExpandable) || L.rowExpandable(P));
                return /* @__PURE__ */ c(qe.Fragment, { children: [
                  /* @__PURE__ */ c(
                    "tr",
                    {
                      className: f(
                        "group transition-colors duration-150",
                        Me ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85"
                      ),
                      children: [
                        fe && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Ae.hasAnyLeftFixed ? { left: 0 } : void 0,
                            className: f(
                              "border-b border-[var(--abc-border)] px-3 py-2.5 text-center",
                              Ae.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: /* @__PURE__ */ e(er, { checked: Me, onChange: () => St(q) })
                          }
                        ),
                        F && /* @__PURE__ */ e(
                          "td",
                          {
                            style: Ae.hasAnyLeftFixed ? { left: fe ? 40 : 0 } : void 0,
                            className: f(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center",
                              Ae.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: me && /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": ve ? "收起详情行" : "展开详情行",
                                "aria-expanded": ve,
                                onClick: () => X(q),
                                className: "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                children: /* @__PURE__ */ e(
                                  bt,
                                  {
                                    className: f(
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
                          const Le = ge.dataIndex ?? ge.key, Ie = P == null ? void 0 : P[Le], ze = re(ge), De = ge.render ? ge.render(Ie, P, te) : Hl(Ie, P, ge, S), $e = Ee === 0 && (ye > 0 || pe);
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": ge.key,
                              style: {
                                ...ze === "left" ? { left: `${Ae.leftOffsets[ge.key] ?? 0}px` } : {},
                                ...ze === "right" ? { right: `${Ae.rightOffsets[ge.key] ?? 0}px` } : {}
                              },
                              className: f(
                                "border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                Vr[s],
                                ge.align === "center" && "text-center",
                                ge.align === "right" && "text-right",
                                z === ge.key && "bg-[var(--abc-primary-soft)]/30",
                                ze === "left" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                ze === "right" && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                ge.key === Ae.lastLeftKey && "shadow-[3px_0_6px_-3px_rgba(15,23,42,0.08)]",
                                ge.key === Ae.firstRightKey && "shadow-[-3px_0_6px_-3px_rgba(15,23,42,0.08)]"
                              ),
                              children: $e ? /* @__PURE__ */ c(
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
                                        onClick: () => X(q),
                                        className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                        children: /* @__PURE__ */ e(
                                          bt,
                                          {
                                            className: f(
                                              "h-3 w-3 transition-transform duration-150",
                                              ve && "rotate-90 text-[var(--abc-primary)]"
                                            )
                                          }
                                        )
                                      }
                                    ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                                    /* @__PURE__ */ e("span", { className: "min-w-0", children: De })
                                  ]
                                }
                              ) : De
                            },
                            ge.key
                          );
                        })
                      ]
                    }
                  ),
                  me && ve && (L == null ? void 0 : L.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: It,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: L.expandedRowRender(P, te)
                    }
                  ) })
                ] }, String(q));
              }) })
            ]
          }
        ),
        Q && ir && tt(
          /* @__PURE__ */ c(
            "div",
            {
              ref: G,
              role: "menu",
              "aria-label": `${Q.col.title} 列操作菜单`,
              "data-abc-floating": "",
              "data-motion": _,
              style: { top: `${Q.y}px`, left: `${Q.x}px` },
              className: f(
                "fixed z-[1350] w-44 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
                _ !== "none" && "abc-animate-popover-in"
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "truncate border-b border-[var(--abc-border)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: [
                  "列：",
                  Q.col.title
                ] }),
                Q.col.sortable && b && /* @__PURE__ */ c("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(Q.col.key, "asc"), ne(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Jr, { className: "h-3.5 w-3.5" }),
                          " 升序排列"
                        ] }),
                        (i == null ? void 0 : i.key) === Q.col.key && i.direction === "asc" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(Q.col.key, "desc"), ne(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Qr, { className: "h-3.5 w-3.5" }),
                          " 降序排列"
                        ] }),
                        (i == null ? void 0 : i.key) === Q.col.key && i.direction === "desc" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  (i == null ? void 0 : i.key) === Q.col.key && i.direction && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        b(Q.col.key, null), ne(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(za, { className: "h-3.5 w-3.5" }),
                        " 清除排序"
                      ]
                    }
                  )
                ] }),
                h && /* @__PURE__ */ c("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const P = re(Q.col);
                        h(Q.col.key, P === "left" ? null : "left"), ne(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Rt, { className: "h-3.5 w-3.5 -rotate-45" }),
                          " 固定到左侧"
                        ] }),
                        re(Q.col) === "left" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        const P = re(Q.col);
                        h(Q.col.key, P === "right" ? null : "right"), ne(null);
                      },
                      className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-2", children: [
                          /* @__PURE__ */ e(Rt, { className: "h-3.5 w-3.5 rotate-45" }),
                          " 固定到右侧"
                        ] }),
                        re(Q.col) === "right" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    }
                  ),
                  re(Q.col) && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      onClick: () => {
                        h(Q.col.key, null), ne(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(pc, { className: "h-3.5 w-3.5" }),
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
                        N(Q.col.key), ne(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(wn, { className: "h-3.5 w-3.5" }),
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
                        E(), ne(null);
                      },
                      className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: [
                        /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5" }),
                        " 重置列配置"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          ir
        )
      ]
    }
  );
}
const Ul = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, Vl = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, Gl = {
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
}, Ct = {
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
function Zn(t, r, a = []) {
  var n;
  for (const s of t) {
    const o = [...a, s];
    if (s.path === r) return o;
    if ((n = s.children) != null && n.length) {
      const l = Zn(s.children, r, o);
      if (l.length > 0) return l;
    }
  }
  return [];
}
function st(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(xt, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const ka = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: o = 0 }) => {
  const l = Ct[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: f(
        "space-y-0.5",
        o > 0 && f("border-l border-[var(--abc-border)]", l.flyoutSubIndent)
      ),
      children: t.map((i) => {
        const b = !!(i.children && i.children.length > 0), u = i.path === r, x = b && lt(i, r);
        return b ? /* @__PURE__ */ c("div", { className: "py-0.5", children: [
          /* @__PURE__ */ c(
            "div",
            {
              className: f(
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
            ka,
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
            className: f(
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
                  className: f(
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
}, Pt = ({ brand: t, collapsed: r = !1, tone: a = "light", size: n, className: s }) => {
  const o = ue(n, "sm"), l = Ct[o], i = a === "dark", b = ce(() => t.logo ? typeof t.logo == "string" ? Yn(t.logo) ? /* @__PURE__ */ e(
    "div",
    {
      className: f(
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
      className: f("shrink-0 rounded-[var(--abc-radius-md)] object-contain", l.brandLogoBox)
    }
  ) : /* @__PURE__ */ e("div", { className: "shrink-0", children: t.logo }) : /* @__PURE__ */ e(
    "div",
    {
      className: f(
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
      className: f(
        "group flex items-center select-none",
        l.brandGap,
        r ? f("justify-center", l.brandWrapCollapsed) : l.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            onClick: t.onClick,
            className: f(
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
                    className: f(
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
                    className: f(
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
            className: f(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              i ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(hc, { className: l.brandEditIcon })
          }
        )
      ]
    }
  );
}, Yl = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const i = Ct[s], [b, u] = O(!1), { isMounted: x, isVisible: p } = kt(b, o === "none" ? 0 : 140), g = de(null), d = de(null), m = de(null), v = je(), y = lt(t, r), { style: C, actualSide: h, portalContainer: N } = rr({
    open: x,
    triggerRef: g,
    floatingRef: d,
    placement: "rightStart",
    offset: 8
  }), E = he(() => {
    m.current !== null && typeof window < "u" && (window.clearTimeout(m.current), m.current = null);
  }, []);
  le(() => () => E(), [E]);
  const T = () => {
    E(), u(!0);
  }, L = () => {
    E(), typeof window < "u" && (m.current = window.setTimeout(() => {
      u(!1), m.current = null;
    }, 140));
  };
  return le(() => {
    if (!b) return;
    const S = (k) => {
      var R, M;
      const A = k.target;
      (R = g.current) != null && R.contains(A) || (M = d.current) != null && M.contains(A) || u(!1);
    }, w = (k) => {
      var A;
      k.key === "Escape" && (k.preventDefault(), k.stopPropagation(), u(!1), (A = g.current) == null || A.focus());
    };
    return document.addEventListener("mousedown", S), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", w, !0);
    };
  }, [b]), /* @__PURE__ */ c(Re, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: T, onMouseLeave: L, children: /* @__PURE__ */ e(
      "button",
      {
        ref: g,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": b,
        "aria-haspopup": "menu",
        "aria-controls": b ? v : void 0,
        onClick: () => u((S) => !S),
        onKeyDown: (S) => {
          (S.key === "ArrowRight" || S.key === "ArrowDown") && (S.preventDefault(), u(!0), window.requestAnimationFrame(() => {
            var w, k;
            (k = (w = d.current) == null ? void 0 : w.querySelector('[role="menuitem"]:not(:disabled)')) == null || k.focus();
          }));
        },
        className: f(
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
          id: v,
          role: "menu",
          "aria-label": t.label,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": h,
          style: C,
          onMouseEnter: T,
          onMouseLeave: L,
          onKeyDown: (S) => {
            var A, R, M;
            const w = Array.from(
              ((A = d.current) == null ? void 0 : A.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const k = w.indexOf(document.activeElement);
            S.key === "ArrowDown" ? (S.preventDefault(), (R = w[(k + 1) % w.length]) == null || R.focus()) : S.key === "ArrowUp" && (S.preventDefault(), (M = w[(k - 1 + w.length) % w.length]) == null || M.focus());
          },
          className: f(
            "z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
            // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
            h === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
            i.flyoutPanel,
            o !== "none" && (p ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: f(
                  "mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]",
                  i.flyoutHeader
                ),
                children: t.label
              }
            ),
            /* @__PURE__ */ e(
              ka,
              {
                items: t.children ?? [],
                pathname: r,
                registry: n,
                size: s,
                onSelect: (S, w) => {
                  l(S, w), u(!1);
                }
              }
            )
          ]
        }
      ),
      N
    )
  ] });
}, Gr = ({
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
  const { iconRegistry: x } = Ue(), p = ue(l, "sm"), g = se(i), d = Ct[p], m = o === "dark", [v, y] = O(
    () => r.filter((h) => {
      var N;
      return ((N = h.children) == null ? void 0 : N.length) && lt(h, a);
    }).map((h) => h.key)
  );
  le(() => {
    const h = r.filter((N) => {
      var E;
      return ((E = N.children) == null ? void 0 : E.length) && lt(N, a);
    }).map((N) => N.key);
    h.length > 0 && y(
      (N) => s ? [h[0]] : Array.from(/* @__PURE__ */ new Set([...N, ...h]))
    );
  }, [a, r, s]);
  const C = (h) => {
    y((N) => N.includes(h) ? N.filter((E) => E !== h) : s ? [h] : [...N, h]);
  };
  return /* @__PURE__ */ c(
    "aside",
    {
      "aria-label": "侧边主导航",
      "data-size": p,
      "data-motion": g,
      style: {
        width: n ? "var(--abc-sidebar-collapsed-w)" : "var(--abc-sidebar-w)"
      },
      className: f(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        m ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        u
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: f(
              "flex h-[var(--abc-header-h)] shrink-0 items-center border-b",
              m ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              Pt,
              {
                brand: t,
                collapsed: n,
                tone: o,
                size: p,
                className: "w-full"
              }
            )
          }
        ),
        /* @__PURE__ */ e("nav", { className: f("flex-1 overflow-y-auto", d.navPadding), children: r.map((h) => {
          const N = !!(h.children && h.children.length > 0), E = h.path === a, T = lt(h, a), L = v.includes(h.key);
          if (!N) {
            const S = /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                disabled: h.disabled,
                "aria-label": n ? h.label : void 0,
                onClick: () => h.path && b(h.path, h),
                className: f(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  it,
                  d.itemButton,
                  n && f("justify-center px-0", d.collapsedBtn),
                  E ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : m ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  h.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  st(h.icon, x, n ? d.collapsedIcon : d.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: h.label }),
                  !n && h.badge !== void 0 && /* @__PURE__ */ e("span", { className: f("rounded-full bg-white/15 font-mono", d.badge), children: h.badge })
                ]
              },
              h.key
            );
            return n ? /* @__PURE__ */ e(
              Xe,
              {
                content: h.label,
                placement: "right",
                motion: g,
                className: "flex w-full",
                children: S
              },
              h.key
            ) : S;
          }
          return n ? /* @__PURE__ */ e(
            Yl,
            {
              item: h,
              pathname: a,
              isDark: m,
              registry: x,
              size: p,
              motion: g,
              onNavigate: b
            },
            h.key
          ) : /* @__PURE__ */ c("div", { className: "relative", children: [
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-expanded": L,
                onClick: () => C(h.key),
                className: f(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  it,
                  d.itemButton,
                  T ? m ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : m ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  st(h.icon, x, d.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: h.label }),
                  /* @__PURE__ */ e(
                    ct,
                    {
                      className: f(
                        "shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]",
                        d.chevron,
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
                inert: !L,
                className: f(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  L ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: f(
                      "border-l",
                      d.subWrap,
                      m ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: h.children.map((S) => {
                      const w = S.path === a;
                      return /* @__PURE__ */ c(
                        "button",
                        {
                          type: "button",
                          disabled: S.disabled,
                          onClick: () => S.path && b(S.path, S),
                          className: f(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            it,
                            d.subButton,
                            w ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : m ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            S.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            st(S.icon, x, d.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: S.label }),
                            S.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: f(
                                  "rounded-full font-mono",
                                  d.badge,
                                  w ? "bg-white/20" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]"
                                ),
                                children: S.badge
                              }
                            )
                          ]
                        },
                        S.key
                      );
                    })
                  }
                ) })
              }
            )
          ] }, h.key);
        }) })
      ]
    }
  );
}, Xl = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: l }) => {
  const i = Ct[s], [b, u] = O(!1), { isMounted: x, isVisible: p } = kt(b, o === "none" ? 0 : 140), g = de(null), d = de(null), m = de(null), v = je(), { style: y, actualSide: C, portalContainer: h } = rr({
    open: x,
    triggerRef: g,
    floatingRef: d,
    placement: "bottomLeft",
    offset: 6
  }), N = he(() => {
    m.current !== null && typeof window < "u" && (window.clearTimeout(m.current), m.current = null);
  }, []);
  le(() => () => N(), [N]);
  const E = () => {
    N(), u(!0);
  }, T = () => {
    N(), typeof window < "u" && (m.current = window.setTimeout(() => {
      u(!1), m.current = null;
    }, 150));
  };
  le(() => {
    if (!b) return;
    const S = (k) => {
      var R, M;
      const A = k.target;
      (R = g.current) != null && R.contains(A) || (M = d.current) != null && M.contains(A) || u(!1);
    }, w = (k) => {
      var A;
      k.key === "Escape" && (k.preventDefault(), k.stopPropagation(), u(!1), (A = g.current) == null || A.focus());
    };
    return document.addEventListener("mousedown", S), document.addEventListener("keydown", w, !0), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", w, !0);
    };
  }, [b]);
  const L = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var S, w;
      (w = (S = d.current) == null ? void 0 : S.querySelector('[role="menuitem"]:not(:disabled)')) == null || w.focus();
    });
  };
  return /* @__PURE__ */ c(Re, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: E,
        onMouseLeave: T,
        className: "relative flex-none",
        children: /* @__PURE__ */ c(
          "button",
          {
            ref: g,
            type: "button",
            "aria-expanded": b,
            "aria-haspopup": "menu",
            "aria-controls": b ? v : void 0,
            onClick: () => u((S) => !S),
            onKeyDown: (S) => {
              S.key === "ArrowDown" && (S.preventDefault(), u(!0), L());
            },
            className: f(
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
                  className: f(
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
    x && h && tt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: d,
          id: v,
          role: "menu",
          "aria-label": `${t.label} 子菜单`,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": C,
          style: y,
          onMouseEnter: E,
          onMouseLeave: T,
          onKeyDown: (S) => {
            var A, R, M, _, $;
            const w = Array.from(
              ((A = d.current) == null ? void 0 : A.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!w.length) return;
            const k = w.indexOf(document.activeElement);
            S.key === "ArrowDown" ? (S.preventDefault(), (R = w[(k + 1) % w.length]) == null || R.focus()) : S.key === "ArrowUp" ? (S.preventDefault(), (M = w[(k - 1 + w.length) % w.length]) == null || M.focus()) : S.key === "Home" ? (S.preventDefault(), (_ = w[0]) == null || _.focus()) : S.key === "End" && (S.preventDefault(), ($ = w[w.length - 1]) == null || $.focus());
          },
          className: f(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            C === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            i.flyoutPanel,
            o !== "none" && (p ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            ka,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (S, w) => {
                l(S, w), u(!1);
              }
            }
          )
        }
      ),
      h
    )
  ] });
}, tn = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: l,
  onNavigate: i
}) => {
  const { iconRegistry: b } = Ue(), u = ue(s, "sm"), x = se(o), p = Ct[u];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": u,
      "data-motion": x,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((g) => {
        var m;
        const d = a ? n === g.key : lt(g, r);
        return a || !((m = g.children) != null && m.length) ? /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => {
              a && l ? l(g) : g.path && i(g.path, g);
            },
            className: f(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              it,
              p.topItem,
              d ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              st(g.icon, b, p.topIcon),
              /* @__PURE__ */ e("span", { children: g.label })
            ]
          },
          g.key
        ) : /* @__PURE__ */ e(
          Xl,
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
}, ql = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: l, onNavigate: i }) => {
  const { iconRegistry: b } = Ue(), u = ue(s, "sm"), x = se(o), p = Ct[u], g = n === "dark", d = ce(
    () => r.find((h) => lt(h, a)) ?? r[0],
    [r, a]
  ), [m, v] = O((d == null ? void 0 : d.key) ?? "");
  le(() => {
    d != null && d.key && v(d.key);
  }, [d == null ? void 0 : d.key]);
  const y = r.find((h) => h.key === m) ?? d, C = (y == null ? void 0 : y.children) ?? [];
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": u,
      "data-motion": x,
      className: f("flex h-full shrink-0 select-none", l),
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: f(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              g ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Pt, { brand: t, collapsed: !0, tone: n, size: u }) }),
              /* @__PURE__ */ e("div", { className: f("flex w-full flex-1 flex-col items-center overflow-y-auto", p.dualRailWrap), children: r.map((h) => {
                const N = h.key === (y == null ? void 0 : y.key);
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var E, T, L;
                      v(h.key), !((E = h.children) != null && E.length) && h.path ? i(h.path, h) : (L = (T = h.children) == null ? void 0 : T[0]) != null && L.path && i(h.children[0].path, h.children[0]);
                    },
                    className: f(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      it,
                      p.dualRailItem,
                      N ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : g ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      st(h.icon ?? "folder", b, p.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: f("truncate", p.dualRailLabelMaxW), children: h.label.slice(0, 4) })
                    ]
                  },
                  h.key
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
                  className: f(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    p.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: f("truncate font-bold text-[var(--abc-fg)]", p.dualPanelTitle), children: y == null ? void 0 : y.label }),
                    /* @__PURE__ */ e(bt, { className: f("text-[var(--abc-fg-muted)]", p.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: f("flex-1 overflow-y-auto", p.dualPanelWrap), children: C.map((h) => {
                const N = h.path === a;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    disabled: h.disabled,
                    onClick: () => !h.disabled && h.path && i(h.path, h),
                    className: f(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      it,
                      p.dualPanelItem,
                      N ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      h.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      st(h.icon, b, p.dualPanelIcon),
                      /* @__PURE__ */ e("span", { className: "truncate", children: h.label })
                    ]
                  },
                  h.key
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}, Zl = {
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
}, Jl = ({
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
  onRefresh: p,
  className: g
}) => {
  var C;
  const { iconRegistry: d } = Ue(), m = ue(n, "sm"), v = se(s), y = Zl[m];
  return t.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      "data-size": m,
      "data-motion": v,
      className: f(
        "flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none",
        y.barPadding,
        g
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]", children: t.map((h) => {
          const N = h.path === r, E = h.closable !== !1 && !h.pinned, T = a === "pill" ? N ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? N ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : N ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ c(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(h.path),
              onKeyDown: (L) => {
                (L.key === "Enter" || L.key === " ") && (L.preventDefault(), o(h.path));
              },
              className: f(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                y.tabItem,
                T
              ),
              children: [
                h.pinned && /* @__PURE__ */ e(Rt, { className: f("shrink-0 opacity-75", y.pinIcon) }),
                h.icon && (typeof h.icon == "string" ? /* @__PURE__ */ e(xt, { name: h.icon, size: y.tabIcon, registry: d }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: h.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: h.title }),
                E && l && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${h.title}`,
                    onClick: (L) => {
                      L.stopPropagation(), l(h.path);
                    },
                    className: f(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && N ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(Ke, { className: y.closeIcon })
                  }
                )
              ]
            },
            h.path
          );
        }) }),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-1", children: [
          p && /* @__PURE__ */ e(Xe, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => p(r),
              className: f(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                y.actionBtn
              ),
              children: /* @__PURE__ */ e(Cr, { className: y.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            Bt,
            {
              items: [
                ...x ? [
                  {
                    key: "pin",
                    label: (C = t.find((h) => h.path === r)) != null && C.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(Rt, { className: "h-3.5 w-3.5" }),
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
                  className: f(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    y.actionBtn
                  ),
                  children: /* @__PURE__ */ e(ma, { className: y.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, Ql = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o = 0,
  activeClassName: l,
  children: i
}) => {
  const b = de(/* @__PURE__ */ new Map()), u = de(0), x = de(/* @__PURE__ */ new Map()), p = de(t);
  if (le(() => {
    const d = s == null ? void 0 : s.current;
    if (!d) return;
    p.current && p.current !== t && x.current.set(p.current, d.scrollTop), p.current = t;
    const m = x.current.get(t) ?? 0;
    requestAnimationFrame(() => {
      s != null && s.current && (s.current.scrollTop = m);
    });
  }, [t, s]), le(() => {
    if (typeof window > "u") return;
    const d = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(d);
  }, [t]), !r)
    return b.current.clear(), /* @__PURE__ */ e("div", { className: f("min-h-full", l), children: i }, `${t}_${o}`);
  if (n && n.length > 0) {
    const d = /* @__PURE__ */ new Set([...n, t]);
    for (const m of Array.from(b.current.keys()))
      d.has(m) || (b.current.delete(m), x.current.delete(m));
  }
  u.current += 1;
  const g = b.current.get(t);
  for (b.current.set(t, {
    key: t,
    seed: o,
    lastActiveTick: u.current,
    node: g && g.seed === o ? g.node : i
  }); b.current.size > a; ) {
    let d = null, m = 1 / 0;
    for (const [v, y] of b.current.entries())
      v !== t && y.lastActiveTick < m && (m = y.lastActiveTick, d = v);
    if (d)
      b.current.delete(d);
    else
      break;
  }
  return /* @__PURE__ */ e(Re, { children: Array.from(b.current.values()).map((d) => {
    const m = d.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: m ? "block" : "none" },
        className: f("min-h-full", m && l),
        children: d.node
      },
      `${d.key}_${d.seed}`
    );
  }) });
}, Jn = "abc_cmd_recent_v1", Qn = 5;
function rn() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem(Jn);
    if (!t) return [];
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function an(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Jn, JSON.stringify(t.slice(0, Qn)));
    } catch {
    }
}
function es(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const o = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && a.push(...es(s.children, o));
  }
  return a;
}
function nn(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const l = t.slice(0, o), i = t.slice(o, o + a.length), b = t.slice(o + a.length);
  return /* @__PURE__ */ c(Re, { children: [
    l,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: i }),
    b
  ] });
}
const ed = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = Ue(), [l, i] = O(""), [b, u] = O("all"), [x, p] = O(0), [g, d] = O(() => rn()), m = de(null), v = de(null);
  le(() => {
    t ? d(rn()) : (i(""), u("all"), p(0));
  }, [t]);
  const y = ce(() => [
    ...es(a).map(({ item: k, trail: A }) => ({
      id: `nav_${k.key}`,
      title: k.label,
      subtitle: `${A}${k.path ? ` · ${k.path}` : ""}`,
      group: "页面导航",
      icon: k.icon ?? "file",
      keywords: k.path,
      onTrigger: () => {
        k.path && (n == null || n(k.path, k));
      }
    })),
    ...s.map((k) => ({
      ...k,
      group: k.group || "快捷指令"
    }))
  ], [a, n, s]), C = ce(() => {
    const w = /* @__PURE__ */ new Set();
    for (const k of y)
      k.group && w.add(k.group);
    return Array.from(w);
  }, [y]), h = ce(() => {
    const w = l.trim(), k = (_) => b !== "all" && b !== "__recent__" && _.group !== b ? !1 : w ? nt(_.title, w) || !!(_.subtitle && nt(_.subtitle, w)) || !!(_.keywords && nt(_.keywords, w)) : !0, A = [];
    if (b === "__recent__") {
      const _ = g.map(($) => y.find((G) => G.id === $)).filter(($) => $ !== void 0 && k($));
      return _.length > 0 && A.push({ groupName: "最近访问", isRecent: !0, items: _ }), A;
    }
    const R = /* @__PURE__ */ new Set();
    if (!w && b === "all" && g.length > 0) {
      const _ = g.map(($) => y.find((G) => G.id === $)).filter(($) => $ !== void 0);
      _.length > 0 && (_.forEach(($) => R.add($.id)), A.push({ groupName: "最近访问", isRecent: !0, items: _ }));
    }
    const M = /* @__PURE__ */ new Map();
    for (const _ of y) {
      if (R.has(_.id) || !k(_)) continue;
      const $ = _.group || "其他", G = M.get($) ?? [];
      G.push(_), M.set($, G);
    }
    for (const [_, $] of M.entries())
      $.length > 0 && A.push({ groupName: _, items: $ });
    return A;
  }, [y, l, b, g]), N = ce(
    () => h.flatMap((w) => w.items),
    [h]
  );
  le(() => {
    p(0);
  }, [l, b]), le(() => {
    var k;
    if (!t || !v.current) return;
    const w = v.current.querySelector(`[data-cmd-idx="${x}"]`);
    (k = w == null ? void 0 : w.scrollIntoView) == null || k.call(w, { block: "nearest" });
  }, [x, t]);
  const E = (w) => {
    if (!w) return;
    const k = [w.id, ...g.filter((A) => A !== w.id)].slice(
      0,
      Qn
    );
    d(k), an(k), w.onTrigger(), r();
  }, T = () => {
    d([]), an([]), b === "__recent__" && u("all");
  }, L = ce(() => {
    const w = ["all"];
    return g.length > 0 && w.push("__recent__"), [...w, ...C];
  }, [g.length, C]);
  let S = -1;
  return /* @__PURE__ */ e(
    yt,
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
              w.preventDefault(), p((k) => N.length ? (k + 1) % N.length : 0);
            else if (w.key === "ArrowUp")
              w.preventDefault(), p(
                (k) => N.length ? (k - 1 + N.length) % N.length : 0
              );
            else if (w.key === "Tab") {
              w.preventDefault();
              const k = L.indexOf(b), A = w.shiftKey ? -1 : 1, R = L[(k + A + L.length) % L.length];
              R && u(R);
            } else w.key === "Enter" && N[x] && (w.preventDefault(), E(N[x]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(dt, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: m,
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
                    i(""), (w = m.current) == null || w.focus();
                  },
                  className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ke, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(_t, { className: "shrink-0", children: "ESC" })
            ] }),
            C.length > 0 && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    onClick: () => u("all"),
                    className: f(
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
                    className: f(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(pr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                C.map((w) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => u(w),
                    className: f(
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
                  onClick: T,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(jt, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: v, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: N.length === 0 ? /* @__PURE__ */ c("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(kr, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ c("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                l,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: h.map((w) => /* @__PURE__ */ c("div", { className: "space-y-1", children: [
              /* @__PURE__ */ c("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5", children: [
                  w.isRecent && /* @__PURE__ */ e(pr, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: w.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: w.items.length })
              ] }),
              w.items.map((k) => {
                S += 1;
                const A = S, R = A === x;
                return /* @__PURE__ */ c(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": A,
                    onMouseEnter: () => p(A),
                    onClick: () => E(k),
                    className: f(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      R ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ c("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: f(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              R ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: k.icon ? typeof k.icon == "string" ? /* @__PURE__ */ e(xt, { name: k.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: k.icon }) : /* @__PURE__ */ e(dt, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ c("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: f(
                                "truncate text-sm font-semibold",
                                R ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: nn(k.title, l)
                            }
                          ),
                          k.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: nn(k.subtitle, l) })
                        ] })
                      ] }),
                      /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
                        k.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: f(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              R ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: k.group
                          }
                        ),
                        R && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(vc, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${w.isRecent ? "recent" : "std"}_${k.id}`
                );
              })
            ] }, w.groupName)) }) }),
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(_t, { children: /* @__PURE__ */ e(Jr, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(_t, { children: /* @__PURE__ */ e(Qr, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(_t, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(_t, { children: "Tab" }),
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
}, Jd = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: l,
  className: i,
  children: b
}) => /* @__PURE__ */ c("div", { className: f("flex min-h-full flex-col gap-4", l && "pb-16", i), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ c("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((u, x) => {
      const p = x === n.length - 1;
      return /* @__PURE__ */ c(qe.Fragment, { children: [
        x > 0 && /* @__PURE__ */ e(bt, { className: "h-3 w-3 opacity-60" }),
        u.onClick && !p ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: u.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: u.label
          }
        ) : /* @__PURE__ */ e("span", { className: f(p && "font-medium text-[var(--abc-fg-secondary)]"), children: u.label })
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
] }), td = ({
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
    className: f(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      b
    ),
    children: [
      /* @__PURE__ */ e(Xa, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(Pt, { brand: t }) }),
      /* @__PURE__ */ c("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(Ya, {}),
        i
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: l })
    ]
  }
) : /* @__PURE__ */ c(
  "div",
  {
    className: f(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      b
    ),
    children: [
      /* @__PURE__ */ c("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Xa, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Pt, { brand: t, tone: "dark", className: "px-0" }) }),
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
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(Pt, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ c("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(Ya, {}),
          i
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: l })
      ] })
    ]
  }
), rd = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], ad = [
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
], nd = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, sn = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var ne;
  const {
    theme: o,
    pageTransition: l,
    watermarkEnabled: i,
    setThemeMode: b,
    setBrand: u,
    setCustomBrandColor: x,
    setDensity: p,
    setRadius: g,
    setFontScale: d,
    setVisualMode: m,
    setComponentSize: v,
    setMotion: y,
    updateTheme: C,
    setPageTransition: h,
    setWatermarkEnabled: N,
    resetTheme: E,
    toast: T
  } = Ue(), [L, S] = O(1), [w, k] = O(!0), [A, R] = O("实时 Token 响应预览"), [M, _] = O(0), [$, G] = O(!1), [z, W] = O(""), [j, H] = O(o.customBrandColor ?? "#0ea5e9"), ae = o.componentSize ?? "sm", ee = a.sidebarWidth ?? Ul[ae], we = a.headerHeight ?? Vl[ae], B = o.customBrandColor || ((ne = Or[o.brand]) == null ? void 0 : ne.swatch) || "#2563eb", V = (D, be) => {
    D.theme.mode && D.theme.mode !== o.mode && b(D.theme.mode, { clientX: be.clientX, clientY: be.clientY }), C(D.theme), n(D.layout), h(D.transition), _((Be) => Be + 1), T.success(`已切换至「${D.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    Na,
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
              icon: /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                E(), s == null || s(), T.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            _e,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(bn, { className: "h-3.5 w-3.5" }),
              onClick: () => G((D) => !D),
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
              icon: /* @__PURE__ */ e(gc, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const D = JSON.stringify(o, null, 2), be = JSON.stringify(a, null, 2), Be = `<AbcProvider
  defaultTheme={${D}}
  defaultPageTransition="${l}"
  defaultWatermarkEnabled={${i}}
>
  <ProLayout
    defaultSettings={${be}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(Be), T.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  T.error("复制代码失败");
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
              icon: /* @__PURE__ */ e(fa, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const D = {
                  theme: o,
                  layout: a,
                  pageTransition: l,
                  watermarkEnabled: i
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(D, null, 2)), T.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  T.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ c("div", { className: "space-y-6", children: [
        $ && /* @__PURE__ */ c("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => G(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            Er,
            {
              rows: 4,
              value: z,
              onChange: (D) => W(D.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(_e, { size: "xs", variant: "primary", onClick: () => {
            try {
              const D = JSON.parse(z);
              D.theme && typeof D.theme == "object" && C(D.theme), D.layout && typeof D.layout == "object" && n(D.layout), typeof D.pageTransition == "string" && h(D.pageTransition), typeof D.watermarkEnabled == "boolean" && N(D.watermarkEnabled), G(!1), W(""), T.success("已成功导入并应用自定义配置");
            } catch {
              T.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(kr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => _((D) => D + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(mn, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ c(
            "div",
            {
              className: f(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                nd[l]
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ c(_e, { variant: "primary", onClick: () => S((D) => D + 1), children: [
                      "按压回弹 #",
                      L
                    ] }),
                    /* @__PURE__ */ e(_e, { variant: "outline", onClick: () => k((D) => !D), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Dt, { status: w ? "success" : "warning", dot: !0, children: w ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      at,
                      {
                        checked: w,
                        onChange: k,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  et,
                  {
                    allowClear: !0,
                    value: A,
                    onChange: (D) => R(D.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ c("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: B })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((D) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${D}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${D})` }
                    },
                    D
                  )) })
                ] })
              ]
            },
            M
          )
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: ad.map((D) => /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: (be) => V(D, be),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: D.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: D.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: D.badge })
              ]
            },
            D.id
          )) })
        ] }),
        /* @__PURE__ */ c("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: rd.map((D) => {
            const be = a.mode === D.mode;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: D.mode }),
                className: f(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  be ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ c("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    D.mode === "sidebar" && /* @__PURE__ */ c(Re, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    D.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    D.mode === "mix" && /* @__PURE__ */ c("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    D.mode === "dual-column" && /* @__PURE__ */ c(Re, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    D.mode === "auth" && /* @__PURE__ */ c(Re, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ c("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: D.title }),
                    be && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: D.desc })
                ]
              },
              D.mode
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
                onChange: (D) => b(D),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(ea, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(ta, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(pn, { className: "h-3 w-3" }),
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
                onChange: (D) => n({ sidebarTone: D }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(Or).map((D) => {
            const be = Or[D], Be = !o.customBrandColor && o.brand === D;
            return /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => u(D),
                className: f(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Be ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: be.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: be.label.split(" ")[0] })
                ]
              },
              D
            );
          }) }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(fn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || j,
                  onChange: (D) => {
                    const be = D.target.value;
                    H(be), x(be);
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
                  onChange: (D) => {
                    const be = D.target.value;
                    H(be), /^#[0-9a-fA-F]{6}$/.test(be) && x(be);
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
                onChange: (D) => p(D),
                options: Object.keys(ja).map((D) => ({
                  value: D,
                  label: ja[D].label
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
                onChange: (D) => g(D),
                options: Object.keys(Oa).map((D) => ({
                  value: D,
                  label: Oa[D].label.split(" ")[0]
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
                onChange: (D) => d(D),
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
                onChange: (D) => v(D === "auto" ? void 0 : D),
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
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: Yt[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              rt,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: (D) => {
                  y(D), _((be) => be + 1);
                },
                options: Object.keys(Yt).map((D) => ({
                  value: D,
                  label: Yt[D].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              Yt[o.motion ?? "smooth"].label,
              "：",
              Yt[o.motion ?? "smooth"].description
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
                  ee,
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
                value: ee,
                onChange: (D) => n({ sidebarWidth: Number(D.target.value) }),
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
                  we,
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
                value: we,
                onChange: (D) => n({ headerHeight: Number(D.target.value) }),
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
                onChange: (D) => n({ tabStyle: D }),
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
                onChange: (D) => n({ showTabs: D })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.keepAlive,
                onChange: (D) => n({ keepAlive: D })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.headerBlur !== !1,
                onChange: (D) => n({ headerBlur: D })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (D) => n({ showBreadcrumb: D })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: a.sidebarAccordion,
                onChange: (D) => n({ sidebarAccordion: D })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: !!a.showFooter,
                onChange: (D) => n({ showFooter: D })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              at,
              {
                checked: i,
                onChange: (D) => N(D)
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
                onChange: (D) => n({ contentWidth: D }),
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
              wt,
              {
                size: "xs",
                className: "w-44",
                value: l,
                onChange: (D) => {
                  h(D), _((be) => be + 1);
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
            /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            rt,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: (D) => m(D),
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
}, sd = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, od = {
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
}, Qd = ({
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
  onTabsChange: p,
  authRender: g,
  authProps: d,
  showCustomizerTrigger: m = !0,
  size: v,
  motion: y,
  children: C
}) => {
  const {
    resolvedTheme: h,
    toggleTheme: N,
    pageTransition: E,
    watermarkEnabled: T,
    watermarkText: L
  } = Ue(), S = ue(v, "sm"), w = se(y), k = od[S], A = ce(
    () => ({ ...Gl, ...o }),
    [o]
  ), [R, M] = Je({
    value: s ? { ...A, ...s } : void 0,
    defaultValue: A,
    onChange: l
  }), _ = he(
    (K) => {
      M((X) => ({ ...X, ...K }));
    },
    [M]
  ), [$, G] = O(!1), [z, W] = O(!1), [j, H] = O(!1), [ae, ee] = O({}), we = de(null), [B, V] = Je({
    value: x,
    defaultValue: [],
    onChange: p
  }), U = ce(
    () => Zn(r, a),
    [r, a]
  );
  le(() => {
    const K = U[U.length - 1];
    !K || !K.path || V((X) => X.some((Ce) => Ce.path === K.path) ? X : [
      ...X,
      {
        path: K.path,
        title: K.label,
        icon: K.icon,
        pinned: X.length === 0
      }
    ]);
  }, [U, V]), le(() => {
    const K = (X) => {
      (X.metaKey || X.ctrlKey) && X.key.toLowerCase() === "k" && (X.preventDefault(), W((Ce) => !Ce));
    };
    return window.addEventListener("keydown", K), () => window.removeEventListener("keydown", K);
  }, []);
  const Y = ce(
    () => r.find((K) => lt(K, a)) ?? r[0],
    [r, a]
  ), [Q, ne] = O((Y == null ? void 0 : Y.key) ?? "");
  le(() => {
    Y != null && Y.key && ne(Y.key);
  }, [Y == null ? void 0 : Y.key]);
  const D = ce(() => {
    const K = r.find((X) => X.key === Q) ?? Y;
    return (K == null ? void 0 : K.children) ?? [];
  }, [r, Q, Y]), be = (K) => {
    const X = B.findIndex((Te) => Te.path === K), Ce = B.filter((Te) => Te.path !== K || Te.pinned);
    if (V(Ce), K === a && Ce.length > 0) {
      const Te = Ce[Math.max(0, X - 1)] ?? Ce[0];
      Te && n(Te.path);
    }
  }, Be = ce(() => L || [(i == null ? void 0 : i.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [L, i == null ? void 0 : i.name, t.name]);
  if (R.mode === "auth")
    return /* @__PURE__ */ c(Re, { children: [
      /* @__PURE__ */ e(
        td,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (K) => N({ clientX: K.clientX, clientY: K.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: h === "dark" ? /* @__PURE__ */ e(ea, { className: "h-4 w-4" }) : /* @__PURE__ */ e(ta, { className: "h-4 w-4" })
              }
            ),
            m && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => H(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(qr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...d,
          children: g ?? C
        }
      ),
      /* @__PURE__ */ e(
        sn,
        {
          open: j,
          onClose: () => H(!1),
          layoutSettings: R,
          onLayoutChange: _,
          onResetAll: () => M(A)
        }
      )
    ] });
  const Oe = R.mode === "sidebar", re = R.mode === "top", oe = R.mode === "mix", fe = R.mode === "dual-column", F = /* @__PURE__ */ c(
    "header",
    {
      className: f(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        k.headerPad,
        R.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => G(!0),
              className: f(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                k.iconBtn
              ),
              children: /* @__PURE__ */ e(hn, { className: k.iconCls })
            }
          ),
          (re || oe) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Pt, { brand: t, size: S, className: "px-0 pr-3" }) }),
          (Oe || oe && D.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": R.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => _({ sidebarCollapsed: !R.sidebarCollapsed }),
              className: f(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                k.iconBtn
              ),
              children: R.sidebarCollapsed ? /* @__PURE__ */ e(xc, { className: k.iconCls }) : /* @__PURE__ */ e(yc, { className: k.iconCls })
            }
          ),
          re && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            tn,
            {
              items: r,
              pathname: a,
              size: S,
              motion: w,
              onNavigate: (K, X) => n(K, X)
            }
          ) }),
          oe && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            tn,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: Q,
              size: S,
              motion: w,
              onSelectRoot: (K) => {
                var X, Ce;
                ne(K.key), K.path && (!K.children || K.children.length === 0) ? n(K.path, K) : (Ce = (X = K.children) == null ? void 0 : X[0]) != null && Ce.path && n(K.children[0].path, K.children[0]);
              },
              onNavigate: (K, X) => n(K, X)
            }
          ) }),
          (Oe || fe) && R.showBreadcrumb !== !1 && U.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: f(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                k.breadcrumb
              ),
              children: U.map((K, X) => {
                const Ce = X === U.length - 1;
                return /* @__PURE__ */ c(qe.Fragment, { children: [
                  X > 0 && /* @__PURE__ */ e(bt, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: f(
                        "truncate",
                        Ce && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: K.label
                    }
                  )
                ] }, K.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => W(!0),
              className: f(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                k.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(dt, { className: k.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(_t, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          b,
          /* @__PURE__ */ e(Xe, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (K) => N({ clientX: K.clientX, clientY: K.clientY }),
              className: f(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                k.iconBtn
              ),
              children: h === "dark" ? /* @__PURE__ */ e(ea, { className: k.iconCls }) : /* @__PURE__ */ e(ta, { className: k.iconCls })
            }
          ) }),
          m && /* @__PURE__ */ e(Xe, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => H(!0),
              className: f(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                k.iconBtn
              ),
              children: /* @__PURE__ */ e(qr, { className: k.iconCls })
            }
          ) }),
          i && /* @__PURE__ */ e(
            Bt,
            {
              items: i.menuItems ?? [
                { key: "profile", label: `当前账号：${i.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(Fi, { src: i.avatar, name: i.name, size: k.avatarSize }),
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
  ), Z = /* @__PURE__ */ c("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !oe && F,
    R.showTabs && /* @__PURE__ */ e(
      Jl,
      {
        tabs: B,
        activePath: a,
        variant: R.tabStyle ?? "card",
        size: S,
        motion: w,
        onSelect: (K) => n(K),
        onClose: be,
        onTogglePin: (K) => V(
          (X) => X.map((Ce) => Ce.path === K ? { ...Ce, pinned: !Ce.pinned } : Ce)
        ),
        onCloseOthers: (K) => V((X) => X.filter((Ce) => Ce.pinned || Ce.path === K)),
        onCloseRight: (K) => {
          const X = B.findIndex((Ce) => Ce.path === K);
          X < 0 || V((Ce) => Ce.filter((Te, Ae) => Ae <= X || Te.pinned));
        },
        onCloseAll: () => {
          const K = B.filter((X) => X.pinned);
          V(K), K[0] && K[0].path !== a && n(K[0].path);
        },
        onRefresh: (K) => ee((X) => ({ ...X, [K]: (X[K] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: we,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ c(
          Dl,
          {
            enabled: T,
            content: Be,
            className: f(
              "min-h-full",
              R.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                Ql,
                {
                  activeKey: a,
                  enabled: R.keepAlive,
                  aliveKeys: B.map((K) => K.path),
                  scrollContainerRef: we,
                  refreshSeed: ae[a] ?? 0,
                  activeClassName: sd[E],
                  children: C
                }
              ),
              R.showFooter && /* @__PURE__ */ c("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
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
  ] }), ie = {
    "--abc-sidebar-w": R.sidebarWidth ? `${R.sidebarWidth}px` : void 0,
    "--abc-header-h": R.headerHeight ? `${R.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ c(
    "div",
    {
      "data-size": S,
      "data-motion": w,
      style: ie,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        oe && F,
        /* @__PURE__ */ c("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          oe && D.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Gr,
            {
              items: D,
              pathname: a,
              collapsed: R.sidebarCollapsed,
              accordion: R.sidebarAccordion,
              tone: R.sidebarTone,
              size: S,
              motion: w,
              onNavigate: (K, X) => n(K, X)
            }
          ) }),
          Oe && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Gr,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: R.sidebarCollapsed,
              accordion: R.sidebarAccordion,
              tone: R.sidebarTone,
              size: S,
              motion: w,
              onNavigate: (K, X) => n(K, X)
            }
          ) }),
          fe && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            ql,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: R.sidebarTone,
              size: S,
              motion: w,
              onNavigate: (K, X) => n(K, X)
            }
          ) }),
          Z
        ] }),
        /* @__PURE__ */ e(
          Na,
          {
            open: $,
            onClose: () => G(!1),
            placement: "left",
            width: k.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              Gr,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: S,
                motion: w,
                onNavigate: (K, X) => {
                  n(K, X), G(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          ed,
          {
            open: z,
            onClose: () => W(!1),
            menuItems: r,
            onNavigate: (K, X) => n(K, X),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: h === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => N()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => H(!0)
              },
              ...u
            ]
          }
        ),
        /* @__PURE__ */ e(
          sn,
          {
            open: j,
            onClose: () => H(!1),
            layoutSettings: R,
            onLayoutChange: _,
            onResetAll: () => M(A)
          }
        )
      ]
    }
  );
};
function ts() {
  const { permissionAdapter: t } = Ue();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const cd = ({
  permission: t,
  code: r,
  mode: a = "any",
  fallbackStrategy: n = "hide",
  disabledTip: s = "暂无操作权限",
  fallback: o,
  fallbackNode: l,
  children: i
}) => {
  var p;
  const { hasPermission: b } = ts(), u = t ?? r;
  if (!u) return /* @__PURE__ */ e(Re, { children: i });
  if (b(u, a)) return /* @__PURE__ */ e(Re, { children: i });
  if (n === "hide")
    return /* @__PURE__ */ e(Re, { children: o ?? l ?? null });
  if (qe.isValidElement(i)) {
    const g = i, d = qe.cloneElement(g, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((p = g.props) == null ? void 0 : p.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(Xe, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: d }) });
  }
  return null;
}, eb = cd;
function rs(t) {
  const { dictAdapter: r } = Ue(), [a, n] = O([]), [s, o] = O(!1);
  return le(() => {
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
const tb = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...l
}) => {
  const i = t ?? r ?? "", { options: b, loading: u } = rs(i), x = ce(
    () => [...a, ...b, ...n],
    [a, b, n]
  );
  return /* @__PURE__ */ e(
    wt,
    {
      options: x,
      placeholder: u && x.length === 0 ? "字典加载中..." : s,
      disabled: o || u && x.length === 0,
      ...l
    }
  );
}, rb = ({
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
  const u = t ?? r ?? "", { options: x } = rs(u);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: l });
  const p = x.find((g) => String(g.value) === String(a));
  return /* @__PURE__ */ e(
    Dt,
    {
      tone: (p == null ? void 0 : p.tone) ?? i,
      dot: n,
      size: s,
      motion: o,
      className: b,
      children: (p == null ? void 0 : p.label) ?? String(a)
    }
  );
}, on = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, id = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: f("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(gr, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: f("grid gap-4", on[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: f("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ c(
  "div",
  {
    className: f(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ c("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(gr, { children: /* @__PURE__ */ e("div", { className: f("grid gap-4", on[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function ab({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = Ue(), [l, i] = O(r), [b, u] = O(!1), [x, p] = O({});
  le(() => {
    i(r);
  }, [r]);
  const g = (m, v) => {
    i((y) => ({ ...y, [m]: v })), x[m] && p((y) => {
      const C = { ...y };
      return delete C[m], C;
    });
  };
  return /* @__PURE__ */ c("form", { onSubmit: async (m) => {
    m.preventDefault();
    const v = {};
    for (const y of t)
      for (const C of y.fields)
        if (C.required) {
          const h = l[C.name];
          (h == null || String(h).trim() === "") && (v[C.name] = `请填写${C.label}`);
        }
    if (Object.keys(v).length > 0) {
      p(v), o.warning("请完善必填配置项后再提交");
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
      id,
      {
        mode: a,
        sections: t.map((m) => ({
          key: m.key,
          title: m.title,
          description: m.description,
          columns: m.columns ?? 1,
          children: m.fields.map((v) => {
            const y = l[v.name], C = x[v.name], h = v.type ?? "text";
            return /* @__PURE__ */ e(
              oa,
              {
                label: v.label,
                required: v.required,
                helperText: v.helperText,
                error: C,
                children: h === "switch" ? /* @__PURE__ */ e(
                  at,
                  {
                    checked: !!y,
                    onChange: (N) => g(v.name, N)
                  }
                ) : h === "number" ? /* @__PURE__ */ e(
                  sa,
                  {
                    value: y ?? null,
                    placeholder: v.placeholder,
                    invalid: !!C,
                    onChange: (N) => g(v.name, N)
                  }
                ) : h === "textarea" ? /* @__PURE__ */ e(
                  Er,
                  {
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!C,
                    onChange: (N) => g(v.name, N.target.value)
                  }
                ) : h === "select" ? /* @__PURE__ */ e(
                  wt,
                  {
                    options: v.options ?? [],
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!C,
                    onChange: (N) => g(v.name, N)
                  }
                ) : h === "image" ? v.allowDirectUrlInput !== !1 ? /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    Xn,
                    {
                      src: String(y ?? ""),
                      alt: v.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    et,
                    {
                      allowClear: !0,
                      value: y ?? "",
                      placeholder: v.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (N) => g(v.name, N.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  xl,
                  {
                    value: String(y ?? ""),
                    onChange: (N) => g(v.name, N)
                  }
                ) : /* @__PURE__ */ e(
                  et,
                  {
                    type: h === "password" ? "password" : "text",
                    allowClear: !0,
                    value: y ?? "",
                    placeholder: v.placeholder,
                    invalid: !!C,
                    onChange: (N) => g(v.name, N.target.value)
                  }
                )
              },
              v.name
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
          icon: /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            i(r), p({}), o.info("已还原初始配置值");
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
          icon: /* @__PURE__ */ e(wc, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
function Yr(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function ld(t, r) {
  const a = t.filter((o) => !o.hideInTable && o.key !== "__abc_actions__"), n = a.map((o) => Yr(o.title)).join(","), s = r.map(
    (o) => a.map((l) => {
      const i = o[l.dataIndex ?? l.key];
      if (l.options && l.options.length > 0) {
        const b = l.options.find((u) => String(u.value) === String(i));
        if (b) return Yr(b.label);
      }
      return Yr(i);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function dd(t, r, a) {
  const n = ld(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), l = document.createElement("a");
    l.href = o, l.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(o);
  }
  return n;
}
const bd = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  value: n,
  onApply: s
}) => {
  const [o, l] = O(!1), [i, b] = O(n ?? "");
  le(() => {
    o && b(n ?? "");
  }, [o, n]);
  const u = n != null && String(n).trim() !== "", x = (p) => {
    s(p), l(!1);
  };
  return /* @__PURE__ */ e(
    Un,
    {
      open: o,
      onOpenChange: l,
      placement: "bottomRight",
      panelClassName: "w-60 p-3",
      content: /* @__PURE__ */ c(
        "div",
        {
          onClick: (p) => p.stopPropagation(),
          className: "space-y-2.5 text-xs font-normal text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ c("div", { className: "font-semibold text-[var(--abc-fg-secondary)]", children: [
              "筛选：",
              t
            ] }),
            r === "select" && a ? /* @__PURE__ */ e(
              wt,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `选择${t}`,
                options: a,
                value: i ?? "",
                onChange: (p) => b(p)
              }
            ) : /* @__PURE__ */ e(
              et,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `输入${t}关键字`,
                value: i ?? "",
                onChange: (p) => b(p.target.value),
                onKeyDown: (p) => {
                  p.key === "Enter" && (p.preventDefault(), x(i));
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
          className: f(
            "inline-flex h-5 w-5 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
            u ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(Qt, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function ud({
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
  onSetSearchVisible: p,
  onReset: g
}) {
  const d = se(o), [m, v] = O(!1), [y, C] = O(""), [h, N] = O("all"), [E, T] = O(null), L = de(null), S = de(!1);
  le(() => {
    if (!E) return;
    const z = (W) => {
      if (W.key === "Escape") {
        const j = L.current;
        T(null), L.current = null, S.current = !1, j && x(j);
      }
    };
    return document.addEventListener("keydown", z, !0), () => document.removeEventListener("keydown", z, !0);
  }, [E, x]);
  const w = ce(
    () => t.filter((z) => !z.hideInTable && z.key !== "__abc_actions__"),
    [t]
  ), k = ce(() => a.columnOrder.length === 0 ? w : [...w].sort((z, W) => {
    const j = a.columnOrder.indexOf(z.key), H = a.columnOrder.indexOf(W.key);
    return j === -1 && H === -1 ? 0 : j === -1 ? 1 : H === -1 ? -1 : j - H;
  }), [w, a.columnOrder]), A = (z) => z.key in a.columnFixed ? a.columnFixed[z.key] ?? void 0 : z.fixed, R = ce(() => {
    const z = y.trim().toLowerCase();
    return k.filter((W) => {
      if (z && !W.title.toLowerCase().includes(z) && !W.key.toLowerCase().includes(z))
        return !1;
      const j = a.hiddenKeys.includes(W.key), H = A(W);
      return h === "fixed" ? !!H : h === "hidden" ? j : !0;
    });
  }, [k, y, h, a.hiddenKeys, a.columnFixed]), M = ce(() => w.map((z) => z.key), [w]), _ = ce(
    () => t.find((z) => z.key === "__abc_actions__"),
    [t]
  ), $ = !!(n || _), G = a.columnWidths.__abc_actions__ ?? (_ == null ? void 0 : _.width) ?? s;
  return /* @__PURE__ */ e(
    Un,
    {
      open: m,
      onOpenChange: v,
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
              icon: /* @__PURE__ */ e(Nt, { className: "h-3 w-3" }),
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
                onChange: (z) => C(z.target.value),
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
                children: /* @__PURE__ */ e(Ke, { className: "h-3 w-3" })
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5", children: [
              { key: "all", label: "全部" },
              { key: "fixed", label: "已固定" },
              { key: "hidden", label: "已隐藏" }
            ].map((z) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => N(z.key),
                className: f(
                  "rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer",
                  h === z.key ? "bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: z.label
              },
              z.key
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
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: R.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : R.map((z) => {
          const W = !a.hiddenKeys.includes(z.key), j = A(z), H = String(z.dataIndex ?? z.key), ae = r.has(H), ee = a.searchVisible[H] !== !1, we = a.columnWidths[z.key] ?? z.width ?? "";
          return /* @__PURE__ */ c(
            "div",
            {
              "data-dragging": E === z.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                L.current = k.map((B) => B.key), S.current = !1, T(z.key);
              },
              onDragOver: (B) => {
                if (!E || E === z.key) return;
                B.preventDefault();
                const V = k.map((be) => be.key), U = V.indexOf(E), Y = V.indexOf(z.key);
                if (U < 0 || Y < 0 || U === Y) return;
                const Q = B.currentTarget.getBoundingClientRect();
                if (Q.height > 0 && (U < Y && B.clientY < Q.top + Q.height * 0.35 || U > Y && B.clientY > Q.top + Q.height * 0.65))
                  return;
                const ne = [...V], [D] = ne.splice(U, 1);
                ne.splice(Y, 0, D), S.current = !0, x(ne);
              },
              onDrop: () => {
                if (E && E !== z.key && !S.current) {
                  const B = k.map((Y) => Y.key), V = B.indexOf(E), U = B.indexOf(z.key);
                  if (V >= 0 && U >= 0) {
                    const Y = [...B], [Q] = Y.splice(V, 1);
                    Y.splice(U, 0, Q), x(Y);
                  }
                }
                T(null), L.current = null, S.current = !1;
              },
              onDragEnd: () => {
                T(null), L.current = null, S.current = !1;
              },
              className: f(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                E === z.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ c("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(va, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(er, { checked: W, onChange: () => l(z.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: f(
                        "truncate text-xs",
                        W ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: z.title
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
                      "aria-label": `${z.title} 列宽`,
                      placeholder: "宽px",
                      defaultValue: we,
                      onBlur: (B) => {
                        const V = parseInt(B.target.value, 10);
                        !Number.isNaN(V) && V >= 64 && u(z.key, V);
                      },
                      onKeyDown: (B) => {
                        if (B.key === "Enter") {
                          const V = parseInt(B.target.value, 10);
                          !Number.isNaN(V) && V >= 64 && u(z.key, V);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${z.key}_${we}`
                  ),
                  ae && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: ee ? "在筛选栏显示（点击隐藏）" : "已在筛选栏隐藏（点击显示）",
                      "aria-label": `切换 ${z.title} 筛选项显示`,
                      onClick: () => p(H, !ee),
                      className: f(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        ee ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: /* @__PURE__ */ e(Qt, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: j === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${z.title} 到左侧`,
                      onClick: () => b(z.key, j === "left" ? null : "left"),
                      className: f(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        j === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Rt, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: j === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${z.title} 到右侧`,
                      onClick: () => b(z.key, j === "right" ? null : "right"),
                      className: f(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        j === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Rt, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            z.key
          );
        }) }),
        $ && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
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
                defaultValue: G,
                onBlur: (z) => {
                  const W = parseInt(z.target.value, 10);
                  !Number.isNaN(W) && W >= 80 && u("__abc_actions__", W);
                },
                onKeyDown: (z) => {
                  if (z.key === "Enter") {
                    const W = parseInt(z.target.value, 10);
                    !Number.isNaN(W) && W >= 80 && u("__abc_actions__", W);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${G}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(Xe, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: f(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            m ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(Nc, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const md = ({ actions: t, maxInline: r = 3 }) => {
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
      Bt,
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
            children: /* @__PURE__ */ e(ma, { className: "h-3.5 w-3.5" })
          }
        )
      }
    )
  ] });
};
function fd({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  onBatchDelete: n,
  onClear: s,
  motion: o
}) {
  const l = se(o);
  return t.length === 0 ? null : /* @__PURE__ */ c(
    "div",
    {
      role: "region",
      "aria-label": "批量操作栏",
      "data-motion": l,
      className: f(
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
              icon: /* @__PURE__ */ e(jt, { className: "h-3 w-3" }),
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
                /* @__PURE__ */ e(Ke, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const cn = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
];
function nb({
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
  autoRefresh: p,
  exportable: g = !0,
  onExport: d,
  syncToUrl: m = !1,
  viewable: v = !1,
  formContainer: y = "dialog",
  formColumns: C,
  rowActions: h = [],
  maxInlineActions: N = 3,
  rowSelection: E,
  batchActions: T = [],
  expandable: L,
  maxHeight: S,
  permissions: w,
  toolbarExtra: k,
  motion: A,
  onSaveRecord: R,
  onDeleteRecords: M
}) {
  var Pa;
  const { toast: _ } = Ue(), $ = se(A), { hasPermission: G } = ts(), {
    settings: z,
    toggleColumnVisible: W,
    setAllColumnsVisible: j,
    setColumnFixed: H,
    setColumnWidth: ae,
    setColumnOrder: ee,
    setSearchFieldVisible: we,
    setDensity: B,
    resetSettings: V
  } = hi(t), U = ce(() => !m || typeof window > "u" ? {} : Dc(window.location.search), [m]), [Y, Q] = O(
    () => b ?? !o
  ), [ne, D] = O(!1), [be, Be] = O(!0), [Oe, re] = O(x), [oe, fe] = O(() => {
    const { page: I, pageSize: J, ...xe } = U;
    return xe;
  }), [F, Z] = O(() => {
    const { page: I, pageSize: J, ...xe } = U;
    return xe;
  }), [ie, K] = O(""), [X, Ce] = O({
    key: "",
    direction: null
  }), [Te, Ae] = O(() => Number(U.page) || 1), [Ge, nr] = O(
    () => Number(U.pageSize) || i
  ), [sr, or] = O(!1), [St, cr] = O([]), [_r, Ar] = O(0), [Mt, It] = O([]), [ir, P] = O([]), [q, te] = O(!1), ye = p ?? !!o, [pe, Me] = O(!1), [ve, me] = O(1e4), ge = de(0), [Ee, Le] = O(null), Ie = pi(t ? `${t}_form` : void 0), [ze, De] = O(!1), [$e, Ht] = O(null), [Kt, Ut] = O({}), [Ca, Vt] = O({}), [as, Sa] = O(!1), ns = !(w != null && w.create) || G(w.create), lr = !(w != null && w.update) || G(w.update), Gt = !(w != null && w.delete) || G(w.delete);
  le(() => {
    if (!m || typeof window > "u") return;
    const I = [
      ...n.filter((Se) => !Se.hideInSearch).map((Se) => Se.name),
      ...a.map((Se) => String(Se.dataIndex ?? Se.key)),
      "page",
      "pageSize"
    ], J = Pc(window.location.search, I, {
      ...F,
      page: Te > 1 ? Te : void 0,
      pageSize: Ge !== i ? Ge : void 0
    }), xe = `${window.location.pathname}${J}${window.location.hash}`;
    window.history.replaceState(null, "", xe);
  }, [m, n, a, F, Te, Ge, i]), le(() => {
    if (!q) return;
    const I = (J) => {
      J.key === "Escape" && !ze && !Ee && te(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [q, ze, Ee]);
  const Ma = he(
    (I, J) => typeof l == "function" ? l(I) : (I == null ? void 0 : I[l]) ?? J,
    [l]
  ), vt = he(async () => {
    if (!o) return;
    const I = ++ge.current;
    or(!0);
    try {
      const J = await o({
        current: Te,
        pageSize: Ge,
        filters: Y ? {} : Wa(F),
        sortField: X.direction ? X.key : void 0,
        sortOrder: X.direction
      });
      if (I !== ge.current) return;
      cr(J.data), Ar(J.total);
    } catch (J) {
      I === ge.current && _.error((J == null ? void 0 : J.message) || "加载表格数据失败");
    } finally {
      I === ge.current && or(!1);
    }
  }, [o, Te, Ge, Y, F, X, _]);
  le(() => {
    o && vt();
  }, [o, vt]), le(() => {
    if (!pe || !o || typeof window > "u") return;
    const I = window.setInterval(() => {
      vt();
    }, ve);
    return () => window.clearInterval(I);
  }, [pe, ve, o, vt]);
  const dr = ce(() => {
    const I = a.filter(
      (J) => !J.hideInTable && !z.hiddenKeys.includes(J.key)
    );
    return z.columnOrder.length === 0 ? I : [...I].sort((J, xe) => {
      const Se = z.columnOrder.indexOf(J.key), We = z.columnOrder.indexOf(xe.key);
      return Se === -1 && We === -1 ? 0 : Se === -1 ? 1 : We === -1 ? -1 : Se - We;
    });
  }, [a, z.hiddenKeys, z.columnOrder]), Lr = s ?? St, Et = ce(() => {
    if (!Y && o) return Lr;
    const I = a.map((J) => String(J.dataIndex ?? J.key));
    return Lc({
      rows: Lr,
      quickKeyword: ie,
      searchableKeys: I,
      fieldFilters: F,
      sortField: X.key,
      sortOrder: X.direction
    });
  }, [Y, o, Lr, ie, F, a, X]), ss = ce(() => {
    if (!o) {
      const I = (Te - 1) * Ge;
      return Et.slice(I, I + Ge);
    }
    return Y ? Et : St;
  }, [o, Y, Et, St, Te, Ge]), os = o ? Y ? Et.length : _r : Et.length, br = ce(
    () => n.filter((I) => !I.hideInSearch),
    [n]
  ), cs = ce(
    () => new Set(br.map((I) => I.name)),
    [br]
  ), gt = ce(
    () => br.filter((I) => z.searchVisible[I.name] !== !1),
    [br, z.searchVisible]
  ), is = ce(() => !Oe || gt.length <= 3 ? gt : gt.slice(0, 3), [gt, Oe]), Tt = ce(
    () => n.filter((I) => !I.hideInForm),
    [n]
  ), Dr = ce(() => Object.keys(Wa(F)).length + (ie.trim() ? 1 : 0), [F, ie]), Pr = he(() => {
    fe({}), Z({}), K(""), Ae(1);
  }, []), Rr = he(() => {
    const I = {};
    for (const J of Tt)
      J.defaultValue !== void 0 && (I[J.name] = J.defaultValue);
    return I;
  }, [Tt]), ls = () => {
    Ht(null), Vt({});
    const I = Ie.readDraft();
    Ut(I ?? Rr()), De(!0);
  }, Ia = (I) => {
    Ht(I), Vt({}), Ut({ ...I }), De(!0);
  }, Ea = async (I) => {
    if (I.preventDefault(), !R) return;
    const J = {};
    for (const xe of Tt) {
      const Se = Kt[xe.name], We = Se == null || typeof Se == "string" && Se.trim() === "" || Array.isArray(Se) && Se.length === 0;
      if (xe.required && We) {
        J[xe.name] = `请填写${xe.label}`;
        continue;
      }
      if (xe.validator) {
        const ut = xe.validator(Se, Kt);
        ut && (J[xe.name] = ut);
      }
    }
    if (Object.keys(J).length > 0) {
      Vt(J);
      const xe = Object.values(J)[0];
      _.warning(xe);
      return;
    }
    Vt({}), Sa(!0);
    try {
      await R(Kt, $e), $e || Ie.clearDraft(), De(!1), _.success($e ? "更新成功" : "创建成功"), o && vt();
    } catch (xe) {
      _.error((xe == null ? void 0 : xe.message) || "提交失败");
    } finally {
      Sa(!1);
    }
  }, Ta = async (I) => {
    !M || I.length === 0 || !await xa({
      title: "确认删除选中记录",
      message: `即将删除 ${I.length} 条数据，删除后不可恢复，是否继续？`,
      tone: "danger",
      confirmText: "确认删除"
    }) || (await M(I), It([]), P([]), _.success(`已删除 ${I.length} 条记录`), o && vt());
  }, _a = ce(
    () => T.filter((I) => !I.permission || G(I.permission)),
    [T, G]
  ), zr = E ?? !!(M && Gt || _a.length > 0), Br = v || !!R && lr || !!M && Gt || h.length > 0, ds = ce(() => Br ? [
    ...dr,
    {
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: v || h.length > 0 ? 184 : 136,
      align: "right",
      render: (I, J, xe) => {
        var ut;
        const Se = Ma(J, xe), We = [];
        v && We.push({
          key: "__view__",
          label: "详情",
          icon: /* @__PURE__ */ e($t, { className: "h-3 w-3" }),
          onClick: () => Le(J)
        }), R && lr && We.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Zr, { className: "h-3 w-3" }),
          onClick: () => Ia(J)
        });
        for (const Ze of h)
          Ze.permission && !G(Ze.permission) || (ut = Ze.hidden) != null && ut.call(Ze, J) || We.push({
            key: Ze.key,
            label: Ze.label,
            icon: Ze.icon,
            danger: Ze.danger,
            onClick: () => Ze.onClick(J)
          });
        return M && Gt && We.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(jt, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => Ta([Se])
        }), /* @__PURE__ */ e(md, { actions: We, maxInline: N });
      }
    }
  ] : dr, [
    dr,
    Br,
    v,
    R,
    lr,
    M,
    Gt,
    h,
    N,
    G,
    Ma
  ]), bs = () => {
    const I = Y || !o ? Et : St;
    if (d) {
      d(I);
      return;
    }
    const J = typeof r == "string" && r.trim() ? r.trim() : t || "table-export";
    dd(J, dr, I), _.success(`已导出 ${I.length} 条记录`);
  }, us = (I) => {
    const J = oe[I.name], xe = (Se) => fe((We) => ({ ...We, [I.name]: Se }));
    return I.type === "select" ? /* @__PURE__ */ e(
      wt,
      {
        allowClear: !0,
        searchable: !0,
        multiple: I.multiple,
        options: I.options ?? [],
        placeholder: I.placeholder ?? `全部${I.label}`,
        value: J ?? (I.multiple ? [] : ""),
        onChange: xe
      }
    ) : I.type === "date" ? /* @__PURE__ */ e(
      ca,
      {
        value: J ?? "",
        placeholder: I.placeholder ?? `选择${I.label}`,
        onChange: xe
      }
    ) : I.type === "dateRange" ? /* @__PURE__ */ e(
      ia,
      {
        value: J ?? null,
        onChange: xe
      }
    ) : I.type === "number" ? /* @__PURE__ */ e(
      sa,
      {
        value: J ?? null,
        placeholder: I.placeholder ?? `输入${I.label}`,
        onChange: xe
      }
    ) : /* @__PURE__ */ e(
      et,
      {
        allowClear: !0,
        placeholder: I.placeholder ?? `搜索${I.label}`,
        value: J ?? "",
        onChange: (Se) => xe(Se.target.value)
      }
    );
  }, ms = (I) => {
    const J = Kt[I.name], xe = typeof I.disabled == "function" ? I.disabled($e) : !!I.disabled, Se = (We) => {
      const ut = { ...Kt, [I.name]: We };
      Ut(ut), Ca[I.name] && Vt((Ze) => {
        const Ra = { ...Ze };
        return delete Ra[I.name], Ra;
      }), $e || Ie.saveDraft(ut);
    };
    return I.type === "select" ? /* @__PURE__ */ e(
      wt,
      {
        searchable: !0,
        multiple: I.multiple,
        disabled: xe,
        options: I.options ?? [],
        value: J ?? (I.multiple ? [] : ""),
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "number" ? /* @__PURE__ */ e(
      sa,
      {
        disabled: xe,
        value: J ?? null,
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "textarea" ? /* @__PURE__ */ e(
      Er,
      {
        disabled: xe,
        value: J ?? "",
        placeholder: I.placeholder,
        onChange: (We) => Se(We.target.value)
      }
    ) : I.type === "switch" ? /* @__PURE__ */ e(at, { disabled: xe, checked: !!J, onChange: Se }) : I.type === "date" ? /* @__PURE__ */ e(
      ca,
      {
        disabled: xe,
        value: J ?? "",
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "dateRange" ? /* @__PURE__ */ e(
      ia,
      {
        disabled: xe,
        value: J ?? null,
        onChange: Se
      }
    ) : I.type === "tags" ? /* @__PURE__ */ e(
      kl,
      {
        disabled: xe,
        value: Array.isArray(J) ? J : [],
        placeholder: I.placeholder,
        onChange: Se
      }
    ) : I.type === "icon" ? /* @__PURE__ */ e(Li, { value: J ?? "", onChange: Se }) : /* @__PURE__ */ e(
      et,
      {
        disabled: xe,
        value: J ?? "",
        placeholder: I.placeholder,
        onChange: (We) => Se(We.target.value)
      }
    );
  }, ur = C ?? (Tt.length >= 6 ? 2 : 1), Aa = /* @__PURE__ */ c(Re, { children: [
    !$e && Ie.hasDraft && /* @__PURE__ */ e(
      _e,
      {
        variant: "ghost",
        onClick: () => {
          Ie.clearDraft(), Ut(Rr());
        },
        children: "清空草稿"
      }
    ),
    /* @__PURE__ */ e(_e, { variant: "secondary", onClick: () => De(!1), children: "取消" }),
    /* @__PURE__ */ e(_e, { variant: "primary", loading: as, onClick: Ea, children: "确认提交" })
  ] }), La = /* @__PURE__ */ c("form", { onSubmit: Ea, className: "space-y-3.5", children: [
    !$e && Ie.hasDraft && /* @__PURE__ */ c("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-primary)]/25 bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-fg-secondary)]", children: [
      /* @__PURE__ */ e("span", { children: "已自动为您恢复上次未提交的本地表单草稿" }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => {
            Ie.clearDraft(), Ut(Rr());
          },
          className: "shrink-0 font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
          children: "丢弃草稿"
        }
      )
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: f(
          "grid gap-3.5",
          ur === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        ),
        children: Tt.map((I) => {
          const J = ur === 2 && (I.span === 2 || I.type === "textarea");
          return /* @__PURE__ */ e(
            oa,
            {
              label: I.label,
              required: I.required,
              helperText: I.helperText,
              error: Ca[I.name],
              className: J ? "sm:col-span-2" : void 0,
              children: ms(I)
            },
            I.name
          );
        })
      }
    )
  ] }), Da = ((Pa = cn.find((I) => I.key === ve)) == null ? void 0 : Pa.label) ?? "10秒";
  return /* @__PURE__ */ c(
    "div",
    {
      "data-motion": $,
      className: f(
        "relative space-y-3",
        q && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        gt.length > 0 && !ne && /* @__PURE__ */ c(gr, { padding: "none", children: [
          /* @__PURE__ */ c("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
            /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(Qt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选检索" }),
              Dr > 0 && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Dr,
                " 项",
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": "一键清空已生效筛选",
                    onClick: Pr,
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
                "aria-expanded": be,
                onClick: () => Be((I) => !I),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e("span", { children: be ? "收起面板" : "展开面板" }),
                  be ? /* @__PURE__ */ e(Ba, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": be, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ c(
            "form",
            {
              onSubmit: (I) => {
                I.preventDefault(), Ae(1), Z({ ...oe });
              },
              className: "grid grid-cols-1 items-end gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                is.map((I) => /* @__PURE__ */ e(
                  oa,
                  {
                    label: I.label,
                    className: I.span === 2 || I.type === "dateRange" ? "sm:col-span-2" : void 0,
                    children: us(I)
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
                      icon: /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5" }),
                      onClick: Pr,
                      children: "重置"
                    }
                  ),
                  gt.length > 3 && /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      onClick: () => re((I) => !I),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                      children: [
                        /* @__PURE__ */ e("span", { children: Oe ? `展开 (${gt.length - 3})` : "收起" }),
                        Oe ? /* @__PURE__ */ e(ct, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Ba, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] }),
        /* @__PURE__ */ c(gr, { padding: "none", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2", children: [
              r && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: r }),
              R && Tt.length > 0 && ns && /* @__PURE__ */ e(
                _e,
                {
                  variant: "primary",
                  icon: /* @__PURE__ */ e(ua, { className: "h-3.5 w-3.5" }),
                  onClick: ls,
                  children: "新建记录"
                }
              ),
              k
            ] }),
            /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              Y && /* @__PURE__ */ e(
                et,
                {
                  size: "xs",
                  allowClear: !0,
                  prefix: /* @__PURE__ */ e(Qt, { className: "h-3 w-3" }),
                  placeholder: "当前数据即时检索（支持拼音）...",
                  value: ie,
                  onChange: (I) => {
                    K(I.target.value), Ae(1);
                  },
                  wrapperClassName: "w-52"
                }
              ),
              u && /* @__PURE__ */ e(
                Xe,
                {
                  content: Y ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ c(
                    "button",
                    {
                      type: "button",
                      role: "switch",
                      "aria-checked": Y,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const I = !Y;
                        Q(I), Ae(1), _.info(I ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式");
                      },
                      className: f(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        Y ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(Qt, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: Y ? "前端筛选" : "接口筛选" })
                      ]
                    }
                  )
                }
              ),
              ye && o && /* @__PURE__ */ c("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
                /* @__PURE__ */ e(
                  Xe,
                  {
                    content: pe ? `定时轮询运行中：每 ${Da} 自动刷新（点击暂停）` : "点击开启自动定时轮询刷新",
                    children: /* @__PURE__ */ c(
                      "button",
                      {
                        type: "button",
                        "aria-label": "切换定时自动刷新",
                        onClick: () => Me((I) => !I),
                        className: f(
                          "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                          pe ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                        ),
                        children: [
                          /* @__PURE__ */ e(
                            pr,
                            {
                              className: f("h-3.5 w-3.5", pe && "animate-pulse")
                            }
                          ),
                          pe && /* @__PURE__ */ e("span", { children: Da })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(
                  Bt,
                  {
                    placement: "bottomRight",
                    items: cn.map((I) => ({
                      key: String(I.key),
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-3", children: [
                        /* @__PURE__ */ c("span", { children: [
                          "每 ",
                          I.label,
                          " 刷新"
                        ] }),
                        ve === I.key && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => {
                        me(I.key), Me(!0);
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
              /* @__PURE__ */ e(Xe, { content: ne ? "关闭表头内联筛选行" : "开启表头内联筛选行", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => D((I) => !I),
                  className: f(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    ne ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(kc, { className: "h-3.5 w-3.5" })
                }
              ) }),
              g && /* @__PURE__ */ e(Xe, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "导出数据",
                  onClick: bs,
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(xn, { className: "h-3.5 w-3.5" })
                }
              ) }),
              o && /* @__PURE__ */ e(Xe, { content: "刷新表格数据", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "刷新数据",
                  onClick: vt,
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Sr, { className: f("h-3.5 w-3.5", sr && "animate-spin") })
                }
              ) }),
              /* @__PURE__ */ e(
                Bt,
                {
                  placement: "bottomRight",
                  items: [
                    {
                      key: "comfortable",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "宽松密度" }),
                        z.density === "comfortable" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => B("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "标准密度" }),
                        z.density === "default" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => B("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ c("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑密度" }),
                        z.density === "compact" && /* @__PURE__ */ e(He, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => B("compact")
                    }
                  ],
                  children: /* @__PURE__ */ e(Xe, { content: "表格行密度", children: /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "表格行密度",
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Cc, { className: "h-3.5 w-3.5" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ e(Xe, { content: q ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": q ? "退出全屏" : "全屏展示",
                  onClick: () => te((I) => !I),
                  className: f(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    q ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: q ? /* @__PURE__ */ e(da, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ba, { className: "h-3.5 w-3.5" })
                }
              ) }),
              /* @__PURE__ */ e(
                ud,
                {
                  columns: a,
                  searchableFieldNames: cs,
                  settings: z,
                  hasActionColumn: Br,
                  defaultActionWidth: v || h.length > 0 ? 184 : 136,
                  motion: $,
                  onToggleVisible: W,
                  onSetAllVisible: j,
                  onSetFixed: H,
                  onSetWidth: ae,
                  onSetOrder: ee,
                  onSetSearchVisible: we,
                  onReset: V
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(
            Kl,
            {
              columns: ds,
              data: ss,
              rowKey: l,
              loading: sr,
              density: z.density,
              motion: $,
              selectedKeys: zr ? Mt : void 0,
              onSelectionChange: zr ? (I, J) => {
                It(I), P(J);
              } : void 0,
              sortState: X,
              onSortChange: (I, J) => Ce({ key: I, direction: J }),
              headerFilterMode: ne,
              headerFilters: F,
              onHeaderFilterChange: (I, J) => {
                Ae(1), fe((xe) => ({ ...xe, [I]: J })), Z((xe) => ({ ...xe, [I]: J }));
              },
              headerFilterRender: ne ? void 0 : (I) => {
                const J = String(I.dataIndex ?? I.key);
                return /* @__PURE__ */ e(
                  bd,
                  {
                    title: I.title,
                    filterType: I.filterType,
                    filterOptions: I.filterOptions,
                    value: F[J],
                    onApply: (xe) => {
                      Ae(1), fe((Se) => ({ ...Se, [J]: xe })), Z((Se) => ({ ...Se, [J]: xe }));
                    }
                  }
                );
              },
              columnWidths: z.columnWidths,
              onColumnResize: ae,
              columnFixed: z.columnFixed,
              onColumnPin: H,
              onColumnHide: W,
              onResetColumns: V,
              onColumnReorder: ee,
              expandable: L,
              onRowView: v ? (I) => Le(I) : void 0,
              onEmptyReset: Dr > 0 ? Pr : void 0,
              maxHeight: S,
              className: "rounded-none border-0"
            }
          ),
          /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] px-4 py-3", children: /* @__PURE__ */ e(
            Oi,
            {
              current: Te,
              pageSize: Ge,
              motion: $,
              total: os,
              onChange: (I, J) => {
                Ae(I), nr(J);
              }
            }
          ) })
        ] }),
        zr && Mt.length > 0 && /* @__PURE__ */ e(
          fd,
          {
            selectedKeys: Mt,
            selectedRows: ir,
            batchActions: _a,
            motion: $,
            onBatchDelete: M && Gt ? () => Ta(Mt) : void 0,
            onClear: () => {
              It([]), P([]);
            }
          }
        ),
        /* @__PURE__ */ e(
          yt,
          {
            open: !!Ee,
            onClose: () => Le(null),
            title: "记录详情",
            size: "lg",
            footer: /* @__PURE__ */ c(Re, { children: [
              Ee && R && lr && /* @__PURE__ */ e(
                _e,
                {
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(Zr, { className: "h-3.5 w-3.5" }),
                  onClick: () => {
                    const I = Ee;
                    Le(null), Ia(I);
                  },
                  children: "编辑此记录"
                }
              ),
              /* @__PURE__ */ e(_e, { variant: "primary", onClick: () => Le(null), children: "关闭" })
            ] }),
            children: Ee && /* @__PURE__ */ e(
              Sl,
              {
                bordered: !0,
                column: 2,
                items: a.filter((I) => !I.hideInTable).map((I) => {
                  const J = Ee[I.dataIndex ?? I.key];
                  return {
                    key: I.key,
                    label: I.title,
                    children: I.render ? I.render(J, Ee, 0) : String(J ?? "-")
                  };
                })
              }
            )
          }
        ),
        y === "drawer" ? /* @__PURE__ */ e(
          Na,
          {
            open: ze,
            onClose: () => De(!1),
            title: $e ? "编辑记录" : "新建记录",
            size: ur === 2 ? "lg" : "md",
            footer: Aa,
            children: La
          }
        ) : /* @__PURE__ */ e(
          yt,
          {
            open: ze,
            onClose: () => De(!1),
            title: $e ? "编辑记录" : "新建记录",
            size: ur === 2 ? "lg" : "md",
            footer: Aa,
            children: La
          }
        )
      ]
    }
  );
}
export {
  Or as ABC_BRAND_PRESETS,
  ja as ABC_DENSITY_PRESETS,
  Vl as ABC_HEADER_HEIGHT_BY_SIZE,
  Yt as ABC_MOTION_PRESETS,
  Oa as ABC_RADIUS_PRESETS,
  Ul as ABC_SIDEBAR_WIDTH_BY_SIZE,
  wd as ABC_SIZE_PRESETS,
  Rn as AbcConfirmHost,
  Sd as AbcProvider,
  Mi as AbcToastViewport,
  Bd as ActionCard,
  qd as Alert,
  Xa as AuroraBackground,
  td as AuthLayout,
  Fi as Avatar,
  _d as Badge,
  Wd as BentoCard,
  $d as BentoGrid,
  Ya as BorderBeam,
  Pt as BrandLogoBlock,
  Fd as Breadcrumb,
  _e as Button,
  gr as Card,
  zd as CheckCard,
  Rd as CheckCardGroup,
  er as Checkbox,
  Gd as Collapse,
  jd as CollapsibleCard,
  ed as CommandPalette,
  Cd as ConfirmProvider,
  zi as CopyableText,
  Gl as DEFAULT_ABC_LAYOUT_SETTINGS,
  Ve as DEFAULT_ABC_THEME,
  ca as DatePicker,
  ia as DateRangePicker,
  Sl as Descriptions,
  yt as Dialog,
  tb as DictSelect,
  rb as DictTag,
  Ad as Divider,
  Na as Drawer,
  Bt as Dropdown,
  ql as DualColumnNav,
  Bi as EmptyState,
  Fl as ErrorBoundary,
  oa as FormField,
  bd as HeaderColumnFilterPopover,
  Ga as ICON_CATALOG,
  xt as Icon,
  Li as IconPicker,
  Xn as ImagePreview,
  xl as ImageUpload,
  et as Input,
  sa as InputNumber,
  _t as Kbd,
  Ql as KeepAliveContainer,
  Xd as Loading,
  Pd as MetricCard,
  Jl as MultiTabBar,
  Jd as PageContainer,
  Oi as Pagination,
  eb as Permission,
  cd as PermissionGuard,
  Un as Popover,
  Od as PricingCard,
  ud as ProColumnSettingsPopover,
  ab as ProConfigForm,
  fd as ProFloatingBatchBar,
  id as ProFormLayout,
  Qd as ProLayout,
  md as ProRowActionsOverflow,
  nb as ProTable,
  Ol as Progress,
  rt as RadioGroup,
  Wl as Result,
  wt as Select,
  Gr as SidebarNav,
  Fe as Skeleton,
  Id as SkeletonCard,
  Td as SkeletonChart,
  Ed as SkeletonTable,
  Ud as SliderVerify,
  Ld as Space,
  Dd as SpotlightCard,
  Dt as StatusTag,
  Hd as Steps,
  at as Switch,
  Zd as TabErrorBoundary,
  Kl as TableCore,
  Vd as Tabs,
  kl as TagInput,
  Er as Textarea,
  sn as ThemeCustomizer,
  Yd as Timeline,
  Xe as Tooltip,
  tn as TopHorizontalNav,
  Kd as Tree,
  Dl as Watermark,
  xa as abcConfirm,
  jn as abcToast,
  Ye as applyAbcThemeToDocument,
  ht as baseFieldControlClass,
  ra as buildCalendarMonthGrid,
  ld as buildCsvContent,
  Wa as cleanQueryObject,
  f as cn,
  Wr as collectAllExpandableKeys,
  Sn as computeTreeCheckState,
  Nd as confirm,
  Di as copyToClipboard,
  Bn as dismissToast,
  dd as downloadTableCsv,
  Lc as filterAndSortClientRows,
  Ac as filterTreeNodes,
  Zn as findBreadcrumbChain,
  mr as formatIsoDate,
  Ec as getCharInitial,
  Ir as getOverlayPortalContainer,
  Tc as getPinyinInitials,
  Yn as isSvgSource,
  nt as matchKeywordWithPinyin,
  lt as menuContainsPath,
  fr as pushToast,
  Dc as readQueryFromUrlSearch,
  Md as registerAbcIcons,
  At as resolveAbcThemeMode,
  _c as toggleTreeNodeChecked,
  Ic as transitionAbcTheme,
  Ue as useAbcConfig,
  rs as useAbcDict,
  se as useAbcMotion,
  ts as useAbcPermission,
  ue as useAbcSize,
  kd as useConfirm,
  Je as useControllableState,
  pi as useDraftStorage,
  rr as useFloatingPosition,
  kt as usePresence,
  hi as useTableSettings,
  Pc as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
