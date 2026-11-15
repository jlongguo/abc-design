var Kl = Object.defineProperty;
var Ul = (t, a, r) => a in t ? Kl(t, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[a] = r;
var Aa = (t, a, r) => Ul(t, typeof a != "symbol" ? a + "" : a, r);
import * as ge from "react";
import ct, { useState as $, useEffect as fe, useRef as ie, useCallback as de, useLayoutEffect as ln, createContext as co, useId as Et, useContext as mn, useMemo as oe, useImperativeHandle as rs, Component as Xi } from "react";
import { jsxs as i, jsx as e, Fragment as qe } from "react/jsx-runtime";
import { Loader2 as mr, Minimize2 as lo, Maximize2 as uo, X as St, Trash2 as Vr, AlertTriangle as Zr, CheckCircle2 as Xr, HelpCircle as Wa, Info as fn, AlertCircle as ia, Zap as Vl, XCircle as Gl, Wrench as Yl, Wallet as ql, Video as Xl, Users as Zl, UserCog as Jl, UserCheck as Ql, User as ed, Upload as as, Unlock as td, TrendingUp as rd, Trash as ad, Timer as nd, Ticket as sd, Terminal as od, Tags as id, Tag as cd, Store as ld, StarOff as dd, Star as ud, Sparkles as pn, Smartphone as bd, SlidersHorizontal as Ys, Sliders as md, ShoppingCart as fd, ShoppingBag as pd, ShieldCheck as bo, ShieldAlert as ns, Shield as hd, Share2 as gd, Share as vd, Settings as xd, Server as yd, Send as wd, Search as $t, ScrollText as Nd, RotateCw as ss, RotateCcw as vr, RefreshCw as ga, Receipt as kd, Radio as Sd, PlusCircle as Cd, Plus as os, Play as Zi, PieChart as _d, PhoneCall as Id, Phone as Td, Pause as Ed, PanelTop as Md, PanelLeft as Ad, Palette as mo, Package as Ld, Network as Dd, MoreHorizontal as fo, Monitor as po, Minus as is, MessagesSquare as Rd, MessageSquareText as jd, MessageSquareQuote as Bd, MessageSquare as zd, MessageCircle as Pd, Menu as Ji, Megaphone as Od, MapPin as $d, Lock as Fd, ListOrdered as Wd, ListChecks as Hd, Link2 as Kd, LineChart as Ud, LayoutGrid as Vd, LayoutDashboard as Gd, Layers as ho, KeyRound as Qi, Key as Yd, Image as ec, Home as go, History as qd, Headphones as Xd, HardDrive as Zd, Handshake as Jd, Globe2 as Qd, Globe as eu, FolderTree as tc, FolderPlus as tu, FolderOpen as ru, FolderGit2 as au, Folder as nu, Flame as su, FileText as ou, FileSpreadsheet as iu, FileClock as cu, FileCheck as lu, Eye as Ha, Edit3 as Fn, Edit as du, Download as qs, Database as uu, CreditCard as bu, Cpu as mu, Copy as va, Compass as rc, Coins as fu, Clock as Hn, CircleDollarSign as pu, CheckSquare as hu, CheckCircle as ac, Check as kt, Camera as gu, CalendarCheck as vu, Calendar as vo, Building2 as nc, Boxes as xu, BookMarked as yu, BellRing as wu, Bell as Nu, BarChart3 as ku, BarChart2 as Su, AlertOctagon as Cu, Activity as _u, EyeOff as sc, ChevronDown as sr, FolderSearch as Iu, ChevronLeft as Kn, ChevronRight as dr, ArrowUpRight as oc, ArrowDownRight as Tu, ChevronsLeft as ic, ChevronsRight as cc, UploadCloud as Eu, ArrowRight as lc, ChevronsUpDown as Mu, ChevronsDownUp as Au, ZoomOut as Lu, ZoomIn as Du, WifiOff as Ru, CircleAlert as ju, Sun as dn, Moon as un, GripVertical as cs, ServerCrash as Bu, FileSearch as zu, ArrowUp as Xs, ArrowDown as Zs, ArrowUpDown as di, Pin as Oa, PinOff as Pu, ArrowLeft as Ou, Columns as $u, Pencil as Fu, CornerDownLeft as dc, Code2 as Wu, PanelLeftOpen as Hu, PanelLeftClose as Ku, Save as uc, ChevronUp as Un, Filter as Wn, Settings2 as Uu, ListFilter as Vu, AlignJustify as Gu } from "lucide-react";
import { createPortal as xr } from "react-dom";
import $e from "dayjs";
const Ps = {
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
}, ui = {
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
}, bi = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, xh = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, tn = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Yt = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, mi = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function Yu(t, a) {
  const r = a == null ? void 0 : a.trim();
  if (!r || !/^#[0-9a-fA-F]{6}$/.test(r)) {
    for (const s of mi)
      t.style.removeProperty(`--abc-brand-${s}`);
    return;
  }
  const n = {
    50: `color-mix(in srgb, ${r} 8%, #ffffff)`,
    100: `color-mix(in srgb, ${r} 16%, #ffffff)`,
    200: `color-mix(in srgb, ${r} 30%, #ffffff)`,
    300: `color-mix(in srgb, ${r} 48%, #ffffff)`,
    400: `color-mix(in srgb, ${r} 70%, #ffffff)`,
    500: `color-mix(in srgb, ${r} 88%, #ffffff)`,
    600: r,
    700: `color-mix(in srgb, ${r} 84%, #020617)`,
    800: `color-mix(in srgb, ${r} 68%, #020617)`,
    900: `color-mix(in srgb, ${r} 52%, #020617)`,
    950: `color-mix(in srgb, ${r} 34%, #020617)`
  };
  for (const s of mi)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function ja(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function qu(t) {
  if (typeof document > "u")
    return;
  const a = t === "system" ? "light dark" : t;
  let r = document.querySelector('meta[name="color-scheme"]');
  r || (r = document.createElement("meta"), r.name = "color-scheme", document.head.prepend(r)), r.content !== a && (r.content = a);
}
function er(t) {
  const a = ja(t.mode);
  if (typeof document > "u")
    return a;
  const r = document.documentElement;
  return qu(t.mode), r.setAttribute("data-abc-theme", a), r.setAttribute("data-abc-theme-mode", t.mode), r.setAttribute("data-abc-brand", t.brand), r.setAttribute("data-abc-density", t.density), r.setAttribute("data-abc-radius", t.radius), r.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), r.setAttribute("data-abc-visual", t.visualMode ?? "default"), r.setAttribute("data-abc-size", t.componentSize ?? "sm"), r.setAttribute("data-abc-motion", t.motion ?? "smooth"), r.classList.toggle("dark", a === "dark"), Yu(r, t.customBrandColor), a;
}
function Xu(t, a) {
  if (typeof document > "u" || typeof window > "u") {
    t();
    return;
  }
  const r = document, n = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!a || typeof r.startViewTransition != "function" || n) {
    t();
    return;
  }
  const s = a.clientX, o = a.clientY, d = Math.hypot(Math.max(s, window.innerWidth - s), Math.max(o, window.innerHeight - o));
  r.startViewTransition(() => {
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
const Os = [
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
function Zu(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let a = Os.length - 1; a >= 0; a--)
    if (t.localeCompare(Os[a].start, "zh-CN") >= 0)
      return Os[a].letter;
  return t.toLowerCase();
}
function Ju(t) {
  return Array.from(t).map(Zu).join("");
}
function ur(t, a) {
  const r = a.trim().toLowerCase();
  return !r || t.toLowerCase().includes(r) ? !0 : Ju(t).includes(r);
}
function bc(t, a = []) {
  if (t.disabled || a.push(t.key), t.children)
    for (const r of t.children)
      bc(r, a);
  return a;
}
function xo(t, a, r = !1) {
  const n = new Set(a), s = /* @__PURE__ */ new Set();
  if (r)
    return {
      checkedKeys: Array.from(n),
      halfCheckedKeys: []
    };
  function o(d) {
    if (!d.children || d.children.length === 0) {
      const u = n.has(d.key);
      return { allChecked: u, someChecked: u };
    }
    const c = d.children.filter((u) => !u.disabled);
    if (c.length === 0) {
      const u = n.has(d.key);
      return { allChecked: u, someChecked: u };
    }
    let b = !0, l = !1;
    for (const u of c) {
      const m = o(u);
      m.allChecked || (b = !1), m.someChecked && (l = !0);
    }
    return b ? (n.add(d.key), s.delete(d.key)) : l ? (n.delete(d.key), s.add(d.key)) : (n.delete(d.key), s.delete(d.key)), { allChecked: b, someChecked: l };
  }
  for (const d of t)
    o(d);
  return {
    checkedKeys: Array.from(n),
    halfCheckedKeys: Array.from(s)
  };
}
function mc(t, a, r, n, s = !1) {
  const o = new Set(a);
  if (s)
    return n ? o.add(r.key) : o.delete(r.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const d = bc(r);
  for (const c of d)
    n ? o.add(c) : o.delete(c);
  return xo(t, Array.from(o), !1);
}
function Qu(t, a) {
  const r = a.trim();
  if (!r)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(o) {
    const d = [];
    for (const c of o) {
      const b = c.children ? s(c.children) : [], l = ur(c.title, r);
      (l || b.length > 0) && (b.length > 0 && n.push(c.key), d.push({
        ...c,
        children: b.length > 0 ? b : c.children && l ? c.children : void 0
      }));
    }
    return d;
  }
  return {
    filteredNodes: s(t),
    autoExpandedKeys: n
  };
}
function Ba(t) {
  const a = [];
  function r(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (a.push(s.key), r(s.children));
  }
  return r(t), a;
}
function fi(t, a, r) {
  const n = t[a] !== void 0 ? t[a] : t.label !== void 0 ? t.label : t.title;
  return typeof n == "string" || typeof n == "number" ? { title: String(n), rawLabel: n } : typeof t.title == "string" || typeof t.title == "number" ? { title: String(t.title), rawLabel: n ?? t.title } : { title: String(r), rawLabel: n ?? String(r) };
}
function eb(t = [], a) {
  const r = (a == null ? void 0 : a.fieldNames) ?? {}, n = r.label ?? "label", s = r.value ?? "value", o = r.children ?? "children", d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), b = a == null ? void 0 : a.treeDataSimpleMode;
  if (b) {
    const m = (typeof b == "object" ? b.id : void 0) ?? "id", p = (typeof b == "object" ? b.pId : void 0) ?? "pId", f = typeof b == "object" && "rootPId" in b ? b.rootPId : null, g = [], x = /* @__PURE__ */ new Map();
    t.forEach((v, S) => {
      const M = v[s] !== void 0 ? v[s] : v[m] !== void 0 ? v[m] : v.value !== void 0 ? v.value : v.key !== void 0 ? v.key : S, L = typeof M == "string" || typeof M == "number" ? M : String(M ?? S), { title: R, rawLabel: C } = fi(v, n, L), y = v[m] !== void 0 ? v[m] : L, E = v[p], _ = {
        key: L,
        value: L,
        title: R,
        rawLabel: C,
        disabled: !!v.disabled,
        selectable: v.selectable,
        checkable: v.checkable,
        isLeaf: v.isLeaf,
        icon: typeof v.icon == "string" ? v.icon : void 0,
        badge: typeof v.badge == "string" || typeof v.badge == "number" ? v.badge : void 0,
        raw: v
      }, j = String(y), D = String(_.key);
      d.set(D, _);
      const B = {
        idStr: j,
        pIdRaw: E,
        pIdStr: E == null || E === "" ? null : String(E),
        node: _
      };
      g.push(B), x.set(j, B);
    });
    const w = [], N = f == null ? null : String(f);
    for (const v of g) {
      const S = v.pIdStr !== null && v.pIdStr !== N ? x.get(v.pIdStr) : void 0;
      S && S !== v ? (S.node.children || (S.node.children = []), S.node.children.push(v.node), c.set(String(v.node.key), String(S.node.key))) : (w.push(v.node), c.set(String(v.node.key), null));
    }
    return { treeNodes: w, nodeMap: d, parentMap: c };
  }
  function l(m, p, f) {
    return m.map((g, x) => {
      const N = r.value !== void 0 && g[s] !== void 0 ? g[s] : g.value !== void 0 ? g.value : g.key !== void 0 ? g.key : `${f}-${x}`, v = typeof N == "string" || typeof N == "number" ? N : String(N), { title: S, rawLabel: M } = fi(g, n, v), L = String(v), R = g[o] ?? g.children, C = Array.isArray(R) ? l(R, L, `${f}-${x}`) : void 0, y = {
        key: v,
        value: v,
        title: S,
        rawLabel: M,
        disabled: !!g.disabled,
        selectable: g.selectable,
        checkable: g.checkable,
        isLeaf: g.isLeaf,
        icon: typeof g.icon == "string" ? g.icon : void 0,
        badge: typeof g.badge == "string" || typeof g.badge == "number" ? g.badge : void 0,
        children: C,
        raw: g
      };
      return d.set(L, y), c.set(L, p), y;
    });
  }
  return { treeNodes: l(t, null, "root"), nodeMap: d, parentMap: c };
}
function fc(t, a) {
  if (!t.disabled && t.checkable !== !1 && a.push(t.key), t.children)
    for (const r of t.children)
      fc(r, a);
}
function tb(t, a, r = !1) {
  const n = new Set(a.map((u) => String(u)));
  if (r) {
    let p = function(f) {
      for (const g of f) {
        const x = String(g.key);
        n.has(x) && !u.has(x) && (u.add(x), m.push(g.key)), g.children && p(g.children);
      }
    };
    const u = /* @__PURE__ */ new Set(), m = [];
    p(t);
    for (const f of a)
      u.has(String(f)) || m.push(f);
    return { checkedKeys: m, halfCheckedKeys: [] };
  }
  const s = [], o = /* @__PURE__ */ new Set();
  function d(u) {
    for (const m of u) {
      const p = String(m.key);
      n.has(p) && !m.disabled && m.checkable !== !1 ? (o.add(p), fc(m, s)) : m.children && m.children.length > 0 && d(m.children);
    }
  }
  d(t);
  const c = xo(t, s, !1), b = new Set(c.checkedKeys.map((u) => String(u))), l = [];
  for (const u of a) {
    const m = String(u);
    if (!o.has(m) && !b.has(m)) {
      let f = function(g) {
        for (const x of g)
          if (String(x.key) === m || x.children && f(x.children))
            return !0;
        return !1;
      }, p = !1;
      p = f(t), p || l.push(u);
    }
  }
  return {
    checkedKeys: [...c.checkedKeys, ...l],
    halfCheckedKeys: c.halfCheckedKeys
  };
}
function pi(t, a, r = "SHOW_ALL", n = !1) {
  const s = new Set(a.map((l) => String(l))), o = /* @__PURE__ */ new Set(), d = [], c = /* @__PURE__ */ new Set();
  function b(l) {
    for (const u of l)
      c.add(String(u.key)), u.children && b(u.children);
  }
  if (b(t), n || r === "SHOW_ALL") {
    let l = function(u) {
      for (const m of u) {
        const p = String(m.key);
        s.has(p) && !o.has(p) && (o.add(p), d.push(m.key)), m.children && l(m.children);
      }
    };
    l(t);
  } else if (r === "SHOW_PARENT") {
    let l = function(u) {
      for (const m of u) {
        const p = String(m.key);
        if (!m.disabled && m.checkable !== !1 && s.has(p)) {
          o.has(p) || (o.add(p), d.push(m.key));
          continue;
        }
        m.children && m.children.length > 0 && l(m.children);
      }
    };
    l(t);
  } else {
    let l = function(u) {
      for (const m of u)
        if ((m.children ?? []).filter((f) => !f.disabled && f.checkable !== !1).length === 0) {
          const f = String(m.key);
          !m.disabled && m.checkable !== !1 && s.has(f) && !o.has(f) && (o.add(f), d.push(m.key));
        } else
          l(m.children ?? []);
    };
    l(t);
  }
  for (const l of a) {
    const u = String(l);
    !c.has(u) && !o.has(u) && (o.add(u), d.push(l));
  }
  return d;
}
function rb(t, a, r = "both") {
  const n = a.trim();
  if (!n)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const s = n.toLowerCase(), o = [];
  function d(c) {
    const b = [];
    for (const l of c) {
      const u = l.children ? d(l.children) : [], m = r !== "value" && ur(l.title, n), p = r !== "title" && String(l.value).toLowerCase().includes(s);
      (m || p || u.length > 0) && (u.length > 0 && o.push(l.key), b.push({
        ...l,
        children: u.length > 0 ? u : l.children && (m || p) ? l.children : void 0
      }));
    }
    return b;
  }
  return {
    filteredNodes: d(t),
    autoExpandedKeys: o
  };
}
function ab(t, a, r) {
  const n = [];
  function s(o, d, c) {
    const b = o.length;
    o.forEach((l, u) => {
      const m = String(l.key), p = r ? r(l) : !!(l.children && l.children.length > 0), f = p && a.has(m);
      n.push({
        node: l,
        keyStr: m,
        depth: d,
        posInSet: u + 1,
        setSize: b,
        hasChildren: p,
        isExpanded: f,
        parentKey: c
      }), f && l.children && l.children.length > 0 && s(l.children, d + 1, l.key);
    });
  }
  return s(t, 0, null), n;
}
function pc(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function La(t, a) {
  if (!(!t || typeof t != "object")) {
    if (a in t)
      return t[a];
    if (a.includes("."))
      return a.split(".").reduce((r, n) => r == null ? void 0 : r[n], t);
  }
}
function nb({ rows: t, searchableKeys: a, quickKeyword: r = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let d = [...t];
  const c = r.trim();
  c && (d = d.filter((b) => (a && a.length > 0 ? a : Object.keys(b)).some((u) => {
    const m = La(b, u);
    return m != null && ur(String(m), c);
  })));
  for (const [b, l] of Object.entries(n))
    if (l != null) {
      if (Array.isArray(l)) {
        if (l.length === 0)
          continue;
        d = d.filter((u) => {
          const m = La(u, b);
          return m == null ? !1 : Array.isArray(m) ? l.some((p) => m.map(String).includes(String(p))) : l.some((p) => String(m) === String(p) || ur(String(m), String(p)));
        });
        continue;
      }
      if (pc(l)) {
        const u = (l.start ?? "").trim(), m = (l.end ?? "").trim();
        if (!u && !m)
          continue;
        d = d.filter((p) => {
          const f = La(p, b);
          if (f == null)
            return !1;
          const g = String(f).slice(0, 10);
          return !(u && g < u || m && g > m);
        });
        continue;
      }
      String(l).trim() !== "" && (d = d.filter((u) => {
        const m = La(u, b);
        return m == null ? !1 : ur(String(m), String(l));
      }));
    }
  if (s && o) {
    const b = o === "asc" ? 1 : -1;
    d.sort((l, u) => {
      const m = La(l, s), p = La(u, s);
      return typeof m == "number" && typeof p == "number" ? (m - p) * b : String(m ?? "").localeCompare(String(p ?? ""), "zh-CN") * b;
    });
  }
  return d;
}
function Bn(t) {
  const a = {};
  for (const [r, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || pc(n) && !n.start && !n.end || (a[r] = n);
  return a;
}
function sb(t, a) {
  const r = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = a ? new Set(a) : null;
  return r.forEach((o, d) => {
    o && (s && !s.has(d) || (n[d] = o));
  }), n;
}
function ob(t, a, r) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of a)
    n.delete(o);
  for (const [o, d] of Object.entries(r))
    d == null || Array.isArray(d) || typeof d == "object" || String(d).trim() !== "" && n.set(o, String(d));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function zn(t, a, r) {
  const n = new Date(t, a, r), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), d = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${d}`;
}
function Js(t, a, r = /* @__PURE__ */ new Date()) {
  const n = zn(r.getFullYear(), r.getMonth(), r.getDate()), s = new Date(t, a, 1).getDay(), o = new Date(t, a + 1, 0).getDate(), d = new Date(t, a, 0).getDate(), c = [];
  for (let l = s - 1; l >= 0; l--) {
    const u = d - l, m = zn(t, a - 1, u);
    c.push({ iso: m, day: u, inCurrentMonth: !1, isToday: m === n });
  }
  for (let l = 1; l <= o; l++) {
    const u = zn(t, a, l);
    c.push({ iso: u, day: l, inCurrentMonth: !0, isToday: u === n });
  }
  let b = 1;
  for (; c.length < 42; ) {
    const l = zn(t, a + 1, b);
    c.push({ iso: l, day: b, inCurrentMonth: !1, isToday: l === n }), b += 1;
  }
  return c;
}
function hc(t) {
  var a, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (a = 0; a < s; a++) t[a] && (r = hc(t[a])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function ib() {
  for (var t, a, r = 0, n = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (a = hc(t)) && (n && (n += " "), n += a);
  return n;
}
const yo = "-", cb = (t) => {
  const a = db(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (d) => {
      const c = d.split(yo);
      return c[0] === "" && c.length !== 1 && c.shift(), gc(c, a) || lb(d);
    },
    getConflictingClassGroupIds: (d, c) => {
      const b = r[d] || [];
      return c && n[d] ? [...b, ...n[d]] : b;
    }
  };
}, gc = (t, a) => {
  var d;
  if (t.length === 0)
    return a.classGroupId;
  const r = t[0], n = a.nextPart.get(r), s = n ? gc(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (a.validators.length === 0)
    return;
  const o = t.join(yo);
  return (d = a.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : d.classGroupId;
}, hi = /^\[(.+)\]$/, lb = (t) => {
  if (hi.test(t)) {
    const a = hi.exec(t)[1], r = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, db = (t) => {
  const {
    theme: a,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return bb(Object.entries(t.classGroups), r).forEach(([o, d]) => {
    Qs(d, n, o, a);
  }), n;
}, Qs = (t, a, r, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? a : gi(a, s);
      o.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (ub(s)) {
        Qs(s(n), a, r, n);
        return;
      }
      a.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([o, d]) => {
      Qs(d, gi(a, o), r, n);
    });
  });
}, gi = (t, a) => {
  let r = t;
  return a.split(yo).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, ub = (t) => t.isThemeGetter, bb = (t, a) => a ? t.map(([r, n]) => {
  const s = n.map((o) => typeof o == "string" ? a + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([d, c]) => [a + d, c])) : o);
  return [r, s];
}) : t, mb = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (o, d) => {
    r.set(o, d), a++, a > t && (a = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let d = r.get(o);
      if (d !== void 0)
        return d;
      if ((d = n.get(o)) !== void 0)
        return s(o, d), d;
    },
    set(o, d) {
      r.has(o) ? r.set(o, d) : s(o, d);
    }
  };
}, vc = "!", fb = (t) => {
  const {
    separator: a,
    experimentalParseClassName: r
  } = t, n = a.length === 1, s = a[0], o = a.length, d = (c) => {
    const b = [];
    let l = 0, u = 0, m;
    for (let w = 0; w < c.length; w++) {
      let N = c[w];
      if (l === 0) {
        if (N === s && (n || c.slice(w, w + o) === a)) {
          b.push(c.slice(u, w)), u = w + o;
          continue;
        }
        if (N === "/") {
          m = w;
          continue;
        }
      }
      N === "[" ? l++ : N === "]" && l--;
    }
    const p = b.length === 0 ? c : c.substring(u), f = p.startsWith(vc), g = f ? p.substring(1) : p, x = m && m > u ? m - u : void 0;
    return {
      modifiers: b,
      hasImportantModifier: f,
      baseClassName: g,
      maybePostfixModifierPosition: x
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: d
  }) : d;
}, pb = (t) => {
  if (t.length <= 1)
    return t;
  const a = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (a.push(...r.sort(), n), r = []) : r.push(n);
  }), a.push(...r.sort()), a;
}, hb = (t) => ({
  cache: mb(t.cacheSize),
  parseClassName: fb(t),
  ...cb(t)
}), gb = /\s+/, vb = (t, a) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = a, o = [], d = t.trim().split(gb);
  let c = "";
  for (let b = d.length - 1; b >= 0; b -= 1) {
    const l = d[b], {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: f
    } = r(l);
    let g = !!f, x = n(g ? p.substring(0, f) : p);
    if (!x) {
      if (!g) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (x = n(p), !x) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const w = pb(u).join(":"), N = m ? w + vc : w, v = N + x;
    if (o.includes(v))
      continue;
    o.push(v);
    const S = s(x, g);
    for (let M = 0; M < S.length; ++M) {
      const L = S[M];
      o.push(N + L);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function xb() {
  let t = 0, a, r, n = "";
  for (; t < arguments.length; )
    (a = arguments[t++]) && (r = xc(a)) && (n && (n += " "), n += r);
  return n;
}
const xc = (t) => {
  if (typeof t == "string")
    return t;
  let a, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (a = xc(t[n])) && (r && (r += " "), r += a);
  return r;
};
function yb(t, ...a) {
  let r, n, s, o = d;
  function d(b) {
    const l = a.reduce((u, m) => m(u), t());
    return r = hb(l), n = r.cache.get, s = r.cache.set, o = c, c(b);
  }
  function c(b) {
    const l = n(b);
    if (l)
      return l;
    const u = vb(b, r);
    return s(b, u), u;
  }
  return function() {
    return o(xb.apply(null, arguments));
  };
}
const yt = (t) => {
  const a = (r) => r[t] || [];
  return a.isThemeGetter = !0, a;
}, yc = /^\[(?:([a-z-]+):)?(.+)\]$/i, wb = /^\d+\/\d+$/, Nb = /* @__PURE__ */ new Set(["px", "full", "screen"]), kb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, _b = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ib = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ur = (t) => za(t) || Nb.has(t) || wb.test(t), sa = (t) => Ka(t, "length", jb), za = (t) => !!t && !Number.isNaN(Number(t)), $s = (t) => Ka(t, "number", za), rn = (t) => !!t && Number.isInteger(Number(t)), Tb = (t) => t.endsWith("%") && za(t.slice(0, -1)), We = (t) => yc.test(t), oa = (t) => kb.test(t), Eb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Mb = (t) => Ka(t, Eb, wc), Ab = (t) => Ka(t, "position", wc), Lb = /* @__PURE__ */ new Set(["image", "url"]), Db = (t) => Ka(t, Lb, zb), Rb = (t) => Ka(t, "", Bb), an = () => !0, Ka = (t, a, r) => {
  const n = yc.exec(t);
  return n ? n[1] ? typeof a == "string" ? n[1] === a : a.has(n[1]) : r(n[2]) : !1;
}, jb = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Sb.test(t) && !Cb.test(t)
), wc = () => !1, Bb = (t) => _b.test(t), zb = (t) => Ib.test(t), Pb = () => {
  const t = yt("colors"), a = yt("spacing"), r = yt("blur"), n = yt("brightness"), s = yt("borderColor"), o = yt("borderRadius"), d = yt("borderSpacing"), c = yt("borderWidth"), b = yt("contrast"), l = yt("grayscale"), u = yt("hueRotate"), m = yt("invert"), p = yt("gap"), f = yt("gradientColorStops"), g = yt("gradientColorStopPositions"), x = yt("inset"), w = yt("margin"), N = yt("opacity"), v = yt("padding"), S = yt("saturate"), M = yt("scale"), L = yt("sepia"), R = yt("skew"), C = yt("space"), y = yt("translate"), E = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", We, a], D = () => [We, a], B = () => ["", Ur, sa], H = () => ["auto", za, We], A = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], P = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], O = () => ["", "0", We], V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [za, We];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [an],
      spacing: [Ur, sa],
      blur: ["none", "", oa, We],
      brightness: Y(),
      borderColor: [t],
      borderRadius: ["none", "", "full", oa, We],
      borderSpacing: D(),
      borderWidth: B(),
      contrast: Y(),
      grayscale: O(),
      hueRotate: Y(),
      invert: O(),
      gap: D(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Tb, sa],
      inset: j(),
      margin: j(),
      opacity: Y(),
      padding: D(),
      saturate: Y(),
      scale: Y(),
      sepia: O(),
      skew: Y(),
      space: D(),
      translate: D()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", We]
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
        columns: [oa]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: [...A(), We]
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
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", rn, We]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
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
        flex: ["1", "auto", "initial", "none", We]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: O()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: O()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", rn, We]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [an]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", rn, We]
        }, We]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [an]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [rn, We]
        }, We]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": ["auto", "min", "max", "fr", We]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", We]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
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
        content: ["normal", ...K(), "baseline"]
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
        "place-content": [...K(), "baseline"]
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
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [C]
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
        "space-y": [C]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", We, a]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [We, a, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [We, a, "none", "full", "min", "max", "fit", "prose", {
          screen: [oa]
        }, oa]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [We, a, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [We, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [We, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [We, a, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", oa, sa]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $s]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [an]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", We]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", za, $s]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ur, We]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", We]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", We]
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
        "placeholder-opacity": [N]
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
        "text-opacity": [N]
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
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ur, sa]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ur, We]
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
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", We]
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
        content: ["none", We]
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
        "bg-opacity": [N]
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
        bg: [...A(), Ab]
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
        bg: ["auto", "cover", "contain", Mb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Db]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
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
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...I(), "hidden"]
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
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: I()
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
        outline: ["", ...I()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ur, We]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ur, sa]
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
        ring: B()
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
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ur, sa]
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
        shadow: ["", "inner", "none", oa, Rb]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [an]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
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
        blur: [r]
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
        "drop-shadow": ["", "none", oa, We]
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
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [L]
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
        "backdrop-blur": [r]
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
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [L]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", We]
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
        ease: ["linear", "in", "out", "in-out", We]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", We]
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
        scale: [M]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [M]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [M]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [rn, We]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [y]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [y]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [R]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [R]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", We]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", We]
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
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
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
        "will-change": ["auto", "scroll", "contents", "transform", We]
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
        stroke: [Ur, sa, $s]
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
}, Ob = /* @__PURE__ */ yb(Pb);
function h(...t) {
  return Ob(ib(t));
}
const $b = "w-full h-8.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", Fb = "w-full rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", Wb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-primary)] hover:bg-[var(--abc-primary-hover)] active:bg-[var(--abc-primary-active)] px-3.5 py-1.5 text-xs font-medium text-[var(--abc-primary-fg)] transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none", Hb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:border-[var(--abc-border-strong)] px-3.5 py-1.5 text-xs font-medium transition-all disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer select-none", Kb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-danger)] hover:opacity-90 active:opacity-95 px-3.5 py-1.5 text-xs font-medium text-white transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none", Ub = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-sm,0.375rem)] bg-transparent text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer select-none", Vb = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]", Gb = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]", Yb = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] overflow-hidden", qb = "bg-[var(--abc-bg-muted)] border-b border-[var(--abc-border)] text-xs font-semibold text-[var(--abc-fg-secondary)]", Xb = "px-4 py-3 text-xs font-semibold text-[var(--abc-fg-secondary)] whitespace-nowrap", Zb = "px-4 py-3 text-xs text-[var(--abc-fg-secondary)]", Jb = "flex flex-col sm:flex-row sm:items-center justify-between gap-3", Qb = "text-base font-bold text-[var(--abc-fg)] tracking-tight", em = "text-xs text-[var(--abc-fg-muted)] mt-0.5", tm = "block text-xs font-medium text-[var(--abc-fg-secondary)] mb-1.5", yh = {
  input: $b,
  textarea: Fb,
  button: Wb,
  secondary: Hb,
  dangerButton: Kb,
  textButton: Ub,
  panel: Vb,
  filterCard: Gb,
  tableCard: Yb,
  tableHead: qb,
  tableHeaderCell: Xb,
  tableCell: Zb,
  pageHeader: Jb,
  pageTitle: Qb,
  pageSubTitle: em,
  label: tm
};
function rm() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ca(t, a = 200) {
  const [r, n] = $(t), s = rm();
  return t && !r && n(!0), fe(() => {
    if (t) {
      n(!0);
      return;
    }
    if (typeof process < "u" && process.env.NODE_ENV === "test" || s || a <= 0) {
      n(!1);
      return;
    }
    const c = window.setTimeout(() => {
      n(!1);
    }, a);
    return () => window.clearTimeout(c);
  }, [t, a, s]), { isMounted: t ? !0 : s || a <= 0 ? !1 : r, isVisible: t };
}
function _r({
  value: t,
  defaultValue: a,
  onChange: r
}) {
  const [n, s] = $(a), o = t !== void 0, d = o ? t : n, c = ie(d);
  c.current = d;
  const b = ie(r);
  b.current = r;
  const l = de(
    (u) => {
      var p;
      const m = typeof u == "function" ? u(c.current) : u;
      o || s(m), (p = b.current) == null || p.call(b, m);
    },
    [o]
  );
  return [d, l];
}
function am(t) {
  const a = t ? `abc_draft_${t}` : "", r = de(() => {
    if (!a || typeof window > "u") return null;
    try {
      const c = window.localStorage.getItem(a);
      return c ? JSON.parse(c) : null;
    } catch {
      return null;
    }
  }, [a]), [n, s] = $(() => !!r()), o = de(
    (c) => {
      if (!(!a || typeof window > "u"))
        try {
          window.localStorage.setItem(a, JSON.stringify(c)), s(!0);
        } catch {
        }
    },
    [a]
  ), d = de(() => {
    if (!(!a || typeof window > "u"))
      try {
        window.localStorage.removeItem(a), s(!1);
      } catch {
      }
  }, [a]);
  return {
    hasDraft: n,
    readDraft: r,
    saveDraft: o,
    clearDraft: d
  };
}
const eo = "#3b82f6", vi = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  filterHighlightColor: eo,
  density: "default"
};
function nm(t, a = "default", r = []) {
  const n = t ? `abc_table_${t}` : "", s = t ? `table_settings_${t}` : "", [o, d] = $(() => {
    const w = {
      ...vi,
      hiddenKeys: r,
      density: a
    };
    if (!n || typeof window > "u") return w;
    try {
      const N = window.localStorage.getItem(n);
      if (N) {
        const L = JSON.parse(N);
        return {
          hiddenKeys: Array.isArray(L.hiddenKeys) ? L.hiddenKeys : r,
          columnOrder: Array.isArray(L.columnOrder) ? L.columnOrder : [],
          columnWidths: L.columnWidths && typeof L.columnWidths == "object" ? L.columnWidths : {},
          columnFixed: L.columnFixed && typeof L.columnFixed == "object" ? L.columnFixed : {},
          searchVisible: L.searchVisible && typeof L.searchVisible == "object" ? L.searchVisible : {},
          filterHighlightColor: typeof L.filterHighlightColor == "string" && L.filterHighlightColor ? L.filterHighlightColor : eo,
          density: L.density ?? a
        };
      }
      const v = s ? window.localStorage.getItem(s) : null;
      if (!v) return w;
      const S = JSON.parse(v), M = new Set(r);
      return S.columnVisible && typeof S.columnVisible == "object" && Object.entries(S.columnVisible).forEach(([L, R]) => {
        R === !1 ? M.add(L) : R === !0 && M.delete(L);
      }), {
        hiddenKeys: Array.from(M),
        columnOrder: Array.isArray(S.columnOrder) ? S.columnOrder : [],
        columnWidths: S.columnWidths && typeof S.columnWidths == "object" ? S.columnWidths : {},
        columnFixed: S.columnFixed && typeof S.columnFixed == "object" ? S.columnFixed : {},
        searchVisible: S.searchVisible && typeof S.searchVisible == "object" ? S.searchVisible : {},
        filterHighlightColor: typeof S.filterHighlightColor == "string" && S.filterHighlightColor ? S.filterHighlightColor : eo,
        density: S.density ?? a
      };
    } catch {
      return w;
    }
  });
  fe(() => {
    if (!(!n || typeof window > "u"))
      try {
        window.localStorage.setItem(n, JSON.stringify(o));
      } catch {
      }
  }, [n, o]);
  const c = de((w) => {
    d((N) => ({
      ...N,
      hiddenKeys: N.hiddenKeys.includes(w) ? N.hiddenKeys.filter((v) => v !== w) : [...N.hiddenKeys, w]
    }));
  }, []), b = de((w, N) => {
    d((v) => ({
      ...v,
      hiddenKeys: N ? [] : Array.from(new Set(w))
    }));
  }, []), l = de(
    (w, N) => {
      d((v) => {
        const S = { ...v.columnFixed };
        return N === void 0 ? delete S[w] : S[w] = N, {
          ...v,
          columnFixed: S
        };
      });
    },
    []
  ), u = de((w, N) => {
    d((v) => ({
      ...v,
      columnWidths: { ...v.columnWidths, [w]: Math.max(64, Math.round(N)) }
    }));
  }, []), m = de((w) => {
    d((N) => ({ ...N, columnOrder: w }));
  }, []), p = de((w, N) => {
    d((v) => ({
      ...v,
      searchVisible: { ...v.searchVisible, [w]: N }
    }));
  }, []), f = de((w) => {
    d((N) => ({ ...N, density: w }));
  }, []), g = de((w) => {
    d((N) => ({ ...N, filterHighlightColor: w }));
  }, []), x = de(() => {
    if (s && typeof window < "u")
      try {
        window.localStorage.removeItem(s);
      } catch {
      }
    d({ ...vi, hiddenKeys: r, density: a });
  }, [a, r, s]);
  return {
    settings: o,
    toggleColumnVisible: c,
    setAllColumnsVisible: b,
    setColumnFixed: l,
    setColumnWidth: u,
    setColumnOrder: m,
    setSearchFieldVisible: p,
    setDensity: f,
    setFilterHighlightColor: g,
    resetSettings: x
  };
}
const sm = typeof window < "u" ? ln : fe;
function ls(t) {
  var r;
  return typeof document > "u" ? null : ((r = t == null ? void 0 : t.closest) == null ? void 0 : r.call(t, "dialog[open]")) ?? document.body;
}
function om(t) {
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
function Fs(t, a) {
  return t === "bottom" ? a === "start" ? "top left" : a === "end" ? "top right" : "top center" : t === "top" ? a === "start" ? "bottom left" : a === "end" ? "bottom right" : "bottom center" : t === "left" ? a === "start" ? "right top" : "right center" : a === "start" ? "left top" : "left center";
}
function Ua({
  open: t,
  triggerRef: a,
  floatingRef: r,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: d = 8
}) {
  const { side: c, align: b } = om(n), [l, u] = $(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: c,
    arrowOffset: 16,
    transformOrigin: Fs(c, b),
    positioned: !1
  })), m = de(() => {
    if (typeof window > "u" || !a.current) return;
    const f = a.current.getBoundingClientRect(), g = r.current, x = g == null ? void 0 : g.getBoundingClientRect(), w = window.innerWidth || 1024, N = window.innerHeight || 768, v = d, S = g ? g.offsetWidth : 0, M = g ? g.offsetHeight : 0, L = S || (x == null ? void 0 : x.width) || (o ? f.width : 180), R = o ? Math.max(L, f.width) : L, C = M || (x == null ? void 0 : x.height) || 40;
    if (f.width === 0 && f.height === 0 && f.top === 0 && f.left === 0) {
      u({
        top: s,
        left: v,
        minWidth: o && f.width > 0 ? f.width : void 0,
        actualSide: c,
        arrowOffset: 16,
        transformOrigin: Fs(c, b),
        positioned: !0
      });
      return;
    }
    let y = c;
    if (c === "bottom") {
      const K = N - f.bottom - s - v, O = f.top - s - v;
      C > K && O > K && (y = "top");
    } else if (c === "top") {
      const K = f.top - s - v, O = N - f.bottom - s - v;
      C > K && O > K && (y = "bottom");
    } else if (c === "left") {
      const K = f.left - s - v, O = w - f.right - s - v;
      R > K && O > K && (y = "right");
    } else if (c === "right") {
      const K = w - f.right - s - v, O = f.left - s - v;
      R > K && O > K && (y = "left");
    }
    let E = 0, _ = 0;
    y === "bottom" || y === "top" ? (E = y === "bottom" ? f.bottom + s : f.top - C - s, b === "start" ? _ = f.left : b === "end" ? _ = f.right - R : _ = f.left + f.width / 2 - R / 2) : (_ = y === "right" ? f.right + s : f.left - R - s, b === "start" ? E = f.top : b === "end" ? E = f.bottom - C : E = f.top + f.height / 2 - C / 2);
    const j = Math.max(v, w - R - v), D = Math.max(v, N - C - v), B = Math.min(Math.max(v, _), j), H = Math.min(Math.max(v, E), D), A = y === "top" || y === "bottom" ? Math.min(
      Math.max(10, f.left + f.width / 2 - B),
      Math.max(10, R - 10)
    ) : Math.min(
      Math.max(10, f.top + f.height / 2 - H),
      Math.max(10, C - 10)
    ), I = Fs(y, b), P = o ? Math.round(f.width) : void 0;
    u((K) => K.positioned && Math.abs(K.top - H) < 0.5 && Math.abs(K.left - B) < 0.5 && K.minWidth === P && K.actualSide === y && Math.abs(K.arrowOffset - A) < 0.5 && K.transformOrigin === I ? K : {
      top: Math.round(H * 10) / 10,
      left: Math.round(B * 10) / 10,
      minWidth: P,
      actualSide: y,
      arrowOffset: Math.round(A),
      transformOrigin: I,
      positioned: !0
    });
  }, [a, r, c, b, s, o, d]);
  sm(() => {
    if (!t) {
      u((g) => g.positioned ? { ...g, positioned: !1 } : g);
      return;
    }
    m();
    const f = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(m) : 0;
    return () => {
      f && typeof window < "u" && window.cancelAnimationFrame(f);
    };
  }, [t, m]), fe(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", m, { passive: !0 }), window.addEventListener("scroll", m, !0);
    let f = null;
    return typeof ResizeObserver < "u" && (f = new ResizeObserver(() => m()), r.current && f.observe(r.current), a.current && f.observe(a.current)), () => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), f == null || f.disconnect();
    };
  }, [t, m, r, a]);
  const p = t ? ls(a.current) : null;
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
    portalContainer: p,
    update: m
  };
}
const Vn = {
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
}, Gn = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  default: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm",
  icon: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  "icon-sm": "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0"
}, to = {
  xs: "h-[var(--abc-control-h-xs)] w-[var(--abc-control-h-xs)] p-0",
  sm: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  default: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  md: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  lg: "h-[var(--abc-control-h-lg)] w-[var(--abc-control-h-lg)] p-0"
};
function wh({
  variant: t = "primary",
  size: a = "sm",
  iconOnly: r = !1,
  className: n
} = {}) {
  const s = Vn[t] || Vn.primary, o = r ? to[a] || to.sm : Gn[a] || Gn.sm;
  return h(
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
    "disabled:opacity-45 disabled:cursor-not-allowed",
    s,
    o,
    n
  );
}
const Le = ct.forwardRef(
  ({
    className: t,
    variant: a = "primary",
    size: r,
    motion: n,
    loading: s = !1,
    loadingText: o,
    disabled: d,
    icon: c,
    leftIcon: b,
    rightIcon: l,
    iconOnly: u = !1,
    block: m = !1,
    asChild: p = !1,
    type: f,
    children: g,
    ...x
  }, w) => {
    const N = r === "icon" || r === "icon-sm", M = Be(N ? void 0 : r === "default" ? "sm" : r, "sm"), L = Te(n), R = !!(d || s), C = b ?? c, y = h(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      Vn[a] || Vn.primary,
      N ? Gn[r] : u ? to[M] : Gn[M],
      m && "w-full",
      t
    );
    if (p && ct.isValidElement(g)) {
      const E = g;
      return ct.cloneElement(E, {
        className: h(y, E.props.className),
        ...x
      });
    }
    return /* @__PURE__ */ i(
      "button",
      {
        ref: w,
        type: f,
        disabled: R,
        "data-motion": L,
        className: y,
        ...x,
        children: [
          s ? /* @__PURE__ */ e(mr, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : C && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: C }),
          s && o !== void 0 ? o : g,
          !s && l && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: l })
        ]
      }
    );
  }
);
Le.displayName = "Button";
const wo = co(null);
function im() {
  return mn(wo);
}
const cm = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  "2xl": "max-w-4xl",
  "3xl": "max-w-5xl",
  "4xl": "max-w-6xl",
  "5xl": "max-w-7xl"
}, yr = ({
  open: t,
  visible: a,
  isOpen: r,
  onClose: n,
  onCancel: s,
  onOpenChange: o,
  closable: d = !0,
  closeDisabled: c = !1,
  closeLabel: b = "关闭",
  title: l,
  description: u,
  children: m,
  footer: p,
  size: f,
  maxWidth: g = "md",
  width: x,
  closeOnClickModal: w = !0,
  draggable: N = !0,
  fullscreenable: v = !0,
  fullscreen: S,
  onFullscreenChange: M,
  motion: L,
  className: R
}) => {
  const C = t ?? a ?? r ?? !1, y = Te(L), { isMounted: E, isVisible: _ } = ca(C, y === "none" ? 0 : 180), j = Et(), D = Et(), B = ie(null), H = ie(null), A = ie(!1), I = de(() => {
    c || (n ? n() : s ? s() : o && o(!1));
  }, [c, n, s, o]), P = ie(I);
  P.current = I;
  const K = !!(l !== void 0 || v), [O, V] = $(!1), Y = S !== void 0 ? S : O, [ce, G] = $({ x: 0, y: 0 }), re = ie(
    null
  ), ee = de(() => {
    const Z = !Y;
    S === void 0 && V(Z), M == null || M(Z);
  }, [Y, S, M]);
  fe(() => {
    if (!E) return;
    const Z = B.current;
    if (!Z) return;
    let De = !1;
    if (typeof Z.showModal == "function")
      if (Z.open)
        De = !0;
      else
        try {
          Z.showModal(), De = !0;
        } catch {
          Z.setAttribute("open", "");
        }
    else
      Z.setAttribute("open", "");
    const Xe = (Ae) => {
      Ae.preventDefault(), P.current();
    }, he = (Ae) => {
      Ae.key === "Escape" && (Ae.stopPropagation(), P.current());
    };
    return Z.addEventListener("cancel", Xe), (!De || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", he), () => {
      if (Z.removeEventListener("cancel", Xe), window.removeEventListener("keydown", he), Z.open && typeof Z.close == "function")
        try {
          Z.close();
        } catch {
          Z.removeAttribute("open");
        }
    };
  }, [E]), fe(() => {
    C || (G({ x: 0, y: 0 }), S === void 0 && V(!1));
  }, [C, S]);
  const me = (Z) => {
    var Ae;
    const De = Z.target;
    if ((Ae = De == null ? void 0 : De.closest) != null && Ae.call(De, "[data-abc-floating]"))
      return !1;
    const Xe = H.current;
    if (!Xe) return !1;
    const he = Xe.getBoundingClientRect();
    return he.width === 0 && he.height === 0 ? !Xe.contains(Z.target) : Z.clientX < he.left || Z.clientX > he.right || Z.clientY < he.top || Z.clientY > he.bottom;
  }, se = (Z) => {
    if (!N || Y || Z.button !== 0 || Z.target.closest('button, a, input, [role="button"]')) return;
    re.current = {
      startX: Z.clientX,
      startY: Z.clientY,
      origX: ce.x,
      origY: ce.y
    };
    const De = (he) => {
      re.current && G({
        x: re.current.origX + (he.clientX - re.current.startX),
        y: re.current.origY + (he.clientY - re.current.startY)
      });
    }, Xe = () => {
      re.current = null, window.removeEventListener("mousemove", De), window.removeEventListener("mouseup", Xe);
    };
    window.addEventListener("mousemove", De), window.addEventListener("mouseup", Xe);
  };
  if (!E || typeof document > "u") return null;
  const ye = f || g, F = cm[ye] || ye;
  return xr(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: B,
        "data-motion": y,
        "aria-labelledby": j,
        "aria-describedby": u ? D : void 0,
        style: {
          display: C ? "flex" : "none",
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100dvh",
          maxWidth: "100vw",
          maxHeight: "100dvh",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: Y ? 0 : "1rem",
          border: "none",
          backgroundColor: "rgba(2, 6, 23, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1100
        },
        onPointerDown: (Z) => {
          A.current = w && me(Z);
        },
        onPointerUp: (Z) => {
          w && A.current && me(Z) && P.current(), A.current = !1;
        },
        onClick: (Z) => {
          w && Z.target === B.current && !A.current && P.current();
        },
        className: h(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          Y && "p-0",
          y !== "none" && (_ ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: H,
            "data-dialog-panel": "",
            "data-motion": y,
            style: {
              width: !Y && x ? x : void 0,
              transform: !Y && (ce.x !== 0 || ce.y !== 0) ? `translate3d(${ce.x}px, ${ce.y}px, 0)` : void 0
            },
            className: h(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              Y ? "h-dvh w-dvw rounded-none" : h("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !x && F),
              y !== "none" && (_ ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              R
            ),
            children: /* @__PURE__ */ i(wo.Provider, { value: { isOpen: C, handleClose: I, closeDisabled: c, hasHeader: K, titleId: j }, children: [
              (l !== void 0 || v) && /* @__PURE__ */ i(
                "div",
                {
                  onMouseDown: se,
                  onDoubleClick: v ? ee : void 0,
                  className: h(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    N && !Y && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                      l && /* @__PURE__ */ e("h2", { id: j, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: l }),
                      u && /* @__PURE__ */ e("p", { id: D, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: u })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                      v && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": Y ? "还原窗口" : "全屏",
                          title: Y ? "退出全屏" : "全屏显示",
                          onClick: (Z) => {
                            Z.stopPropagation(), ee();
                          },
                          onMouseDown: (Z) => Z.stopPropagation(),
                          onPointerDown: (Z) => Z.stopPropagation(),
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: Y ? /* @__PURE__ */ e(lo, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(uo, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": b,
                          title: b,
                          disabled: c,
                          onClick: (Z) => {
                            Z.stopPropagation(), I();
                          },
                          onMouseDown: (Z) => Z.stopPropagation(),
                          onPointerDown: (Z) => Z.stopPropagation(),
                          className: h(
                            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                            c && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
                          ),
                          children: /* @__PURE__ */ e(St, { className: "h-4 w-4" })
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
                  children: m
                }
              ),
              p && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: p })
            ] })
          }
        )
      }
    ),
    document.body
  );
}, lm = yr;
function No({
  className: t,
  children: a,
  closeLabel: r = "关闭",
  closeDisabled: n,
  closable: s,
  onClose: o,
  ...d
}) {
  const c = mn(wo), b = s ?? (c ? !c.hasHeader : !1), l = n ?? (c == null ? void 0 : c.closeDisabled) ?? !1;
  return /* @__PURE__ */ i("div", { "data-slot": "dialog-content", className: h("relative space-y-4", t), ...d, children: [
    b && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": r,
        title: r,
        disabled: l,
        onClick: (u) => {
          u.stopPropagation(), o ? o() : c && c.handleClose();
        },
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        className: h(
          "absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10",
          l && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
        ),
        children: /* @__PURE__ */ e(St, { className: "h-4 w-4" })
      }
    ),
    a
  ] });
}
function ko({ className: t, children: a, ...r }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: h("flex flex-col space-y-1.5 text-left", t), ...r, children: a });
}
function So({ className: t, children: a, ...r }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: h("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...r, children: a });
}
function Co({ className: t, children: a, id: r, ...n }) {
  const s = im();
  return /* @__PURE__ */ e("h2", { id: r ?? (s == null ? void 0 : s.titleId), "data-slot": "dialog-title", className: h("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...n, children: a });
}
function _o({ className: t, children: a, ...r }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: h("text-xs text-[var(--abc-fg-muted)]", t), ...r, children: a });
}
const Yn = /* @__PURE__ */ new Set();
let Nc = null, on = 0;
function kc(t) {
  Nc = t, Yn.forEach((a) => a(t));
}
function dm(t, a) {
  return t || (a === "error" || a === "danger" ? "danger" : a === "warning" ? "warning" : a === "success" ? "success" : "primary");
}
function qn(t) {
  var r, n;
  const a = typeof t == "string" ? { message: t } : t;
  if (on === 0 && typeof window < "u" && Yn.size === 0) {
    const s = a.content ?? a.message, o = typeof s == "string" ? s : a.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((r = a.onConfirm) == null ? void 0 : r.call(a)).then(() => !0) : ((n = a.onCancel) == null || n.call(a), Promise.resolve(!1));
  }
  return new Promise((s) => {
    kc({
      ...a,
      title: a.title ?? "操作确认",
      confirmText: a.confirmText ?? "确认",
      cancelText: a.cancelText ?? "取消",
      resolvedTone: dm(a.tone, a.type),
      message: a.content ?? a.message,
      resolve: s
    });
  });
}
const Nh = qn;
function kh() {
  return qn;
}
const Sc = () => {
  const [t, a] = $(!1), [r, n] = $(() => Nc), [s, o] = $(!1);
  if (fe(() => {
    on += 1, a(on === 1);
    const l = (u) => n(u);
    return Yn.add(l), () => {
      on = Math.max(0, on - 1), Yn.delete(l);
    };
  }, []), !t || !r) return null;
  const d = async (b) => {
    var l;
    if (!(!r || s)) {
      if (b && r.onConfirm)
        try {
          o(!0), await r.onConfirm();
        } finally {
          o(!1);
        }
      else b || (l = r.onCancel) == null || l.call(r);
      r.resolve(b), kc(null);
    }
  }, c = r.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(Vr, { className: "h-4 w-4" }) }) : r.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e(Zr, { className: "h-4 w-4" }) }) : r.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(Xr, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Wa, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    yr,
    {
      open: !!r,
      onClose: () => d(!1),
      title: r.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ i(qe, { children: [
        /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: r.resolvedTone === "danger",
            onClick: () => d(!1),
            children: r.cancelText
          }
        ),
        /* @__PURE__ */ e(
          Le,
          {
            variant: r.resolvedTone === "danger" ? "danger" : r.resolvedTone === "warning" ? "warning" : r.resolvedTone === "success" ? "success" : "primary",
            loading: s,
            autoFocus: r.resolvedTone !== "danger",
            onClick: () => d(!0),
            children: r.confirmText
          }
        )
      ] }),
      children: /* @__PURE__ */ i("div", { className: "flex items-start gap-3.5 py-1", children: [
        c,
        /* @__PURE__ */ e("div", { className: "pt-1 text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: r.message })
      ] })
    }
  );
}, Sh = ({ children: t }) => /* @__PURE__ */ i(qe, { children: [
  t,
  /* @__PURE__ */ e(Sc, {})
] });
let nr = [];
const ro = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Map();
let um = 0;
function Io() {
  const t = [...nr];
  ro.forEach((a) => a(t));
}
function bm(t) {
  const a = Gr.get(t);
  if (!a || a.isPaused || a.remaining <= 0) return;
  a.timerId && (clearTimeout(a.timerId), a.timerId = void 0);
  const r = Date.now() - a.startedAt;
  a.remaining = Math.max(0, a.remaining - r), a.isPaused = !0;
}
function mm(t) {
  const a = Gr.get(t);
  !a || !a.isPaused || a.remaining <= 0 || (a.isPaused = !1, a.startedAt = Date.now(), typeof window < "u" && (a.timerId = window.setTimeout(a.onExpire, a.remaining)));
}
function To(t) {
  var n;
  const a = Gr.get(t);
  a != null && a.timerId && clearTimeout(a.timerId), Gr.delete(t);
  const r = nr.find((s) => s.id === t);
  r && ((n = r.onClose) == null || n.call(r)), nr = nr.filter((s) => s.id !== t), Io();
}
function fm() {
  Gr.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), Gr.clear(), nr.forEach((t) => {
    var a;
    return (a = t.onClose) == null ? void 0 : a.call(t);
  }), nr = [], Io();
}
function Da(t, a, r) {
  const n = `abc_toast_${++um}_${Date.now()}`;
  let s = {};
  a !== null && typeof a == "object" && !ct.isValidElement(a) ? s = a : s = { message: a };
  const o = s.tone ?? t, d = o === "danger" ? "error" : o, c = s.content ?? s.message ?? s.description ?? "", b = d === "error" ? 4200 : d === "warning" ? 3600 : d === "loading" ? 0 : 3e3, l = s.duration ?? r ?? b, u = {
    ...s,
    id: n,
    tone: d,
    message: c,
    duration: l,
    createdAt: Date.now()
  };
  if (nr.length >= 30 && (nr.slice(0, nr.length - 29).forEach((p) => {
    const f = Gr.get(p.id);
    f != null && f.timerId && clearTimeout(f.timerId), Gr.delete(p.id);
  }), nr = nr.slice(-29)), nr = [...nr, u], Io(), l > 0 && typeof window < "u") {
    const m = {
      startedAt: Date.now(),
      remaining: l,
      isPaused: !1,
      onExpire: () => To(n)
    };
    m.timerId = window.setTimeout(m.onExpire, l), Gr.set(n, m);
  }
  return n;
}
const Eo = {
  success: (t, a) => Da("success", t, a),
  error: (t, a) => Da("error", t, a ?? 4200),
  info: (t, a) => Da("info", t, a),
  warning: (t, a) => Da("warning", t, a ?? 3600),
  loading: (t, a = 0) => Da("loading", t, a),
  push: (t, a, r) => Da(t, a, r),
  dismiss: (t) => To(t),
  clear: () => fm()
}, Ch = Eo, xi = {
  success: /* @__PURE__ */ e(Xr, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(ia, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(ia, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(Zr, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(fn, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(mr, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, pm = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, hm = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, gm = ({
  item: t,
  resolvedSize: a,
  resolvedMotion: r,
  closable: n,
  pauseOnHover: s,
  toastClassName: o,
  toastStyle: d,
  onDismiss: c
}) => {
  const b = t.closable ?? n, l = !!t.title;
  return /* @__PURE__ */ i(
    "div",
    {
      role: t.tone === "error" || t.tone === "warning" ? "alert" : "status",
      "aria-live": t.tone === "error" ? "assertive" : "polite",
      "data-motion": r,
      onMouseEnter: () => {
        s && bm(t.id);
      },
      onMouseLeave: () => {
        s && mm(t.id);
      },
      style: { ...d, ...t.style },
      className: h(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        l ? "items-start" : "items-center",
        pm[a],
        r !== "none" && "abc-animate-popover-in",
        o,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: h("shrink-0", l && "mt-0.5"), children: t.icon ?? xi[t.tone] ?? xi.info }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          t.title && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)] leading-snug", children: t.title }),
          t.message && /* @__PURE__ */ e(
            "div",
            {
              className: h(
                "leading-relaxed break-words",
                l ? "text-xs text-[var(--abc-fg-secondary)]" : "font-medium"
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
            onClick: (u) => {
              u.stopPropagation(), c(t.id);
            },
            className: "rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer transition-colors",
            children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, vm = ({
  position: t = "top-right",
  size: a,
  motion: r,
  maxCount: n = 5,
  pauseOnHover: s = !0,
  newestOnTop: o = !1,
  closable: d = !0,
  className: c,
  style: b,
  toastClassName: l,
  toastStyle: u,
  container: m,
  containerId: p,
  renderItem: f,
  items: g,
  onDismiss: x
}) => {
  const [w, N] = $(() => [...nr]), v = Be(a, "sm"), S = Te(r);
  fe(() => {
    if (g !== void 0) return;
    const _ = (j) => N(j);
    return ro.add(_), () => {
      ro.delete(_);
    };
  }, [g]);
  const L = (g ?? w).filter((_) => !(_.containerId && p && _.containerId !== p || _.position && _.position !== t));
  let R = L;
  o ? R = [...L].reverse().slice(0, n) : n > 0 && (R = L.slice(-n));
  const C = (_) => {
    x ? x(_) : To(_);
  };
  if (typeof document > "u" || R.length === 0)
    return null;
  const y = typeof m == "function" ? m() : m !== void 0 ? m : typeof document < "u" ? document.body : null;
  if (!y) return null;
  const E = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: h(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        hm[t],
        c
      ),
      style: b,
      children: R.map((_) => f ? /* @__PURE__ */ e(ct.Fragment, { children: f(_, () => C(_.id)) }, _.id) : /* @__PURE__ */ e(
        gm,
        {
          item: _,
          resolvedSize: v,
          resolvedMotion: S,
          closable: d,
          pauseOnHover: s,
          toastClassName: l,
          toastStyle: u,
          onDismiss: C
        },
        _.id
      ))
    }
  );
  return xr(E, y);
}, xm = (t) => /* @__PURE__ */ e(vm, { ...t }), Mo = "abc_design_theme_v1", Xn = "color-scheme", Ao = co(null);
function yi(t, a) {
  if (!a || typeof window > "u") return t;
  try {
    const r = window.localStorage.getItem(Xn), n = window.localStorage.getItem(Mo), s = n ? JSON.parse(n) : {}, o = r === "light" || r === "dark" ? r : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, d = ["xs", "sm", "md", "lg"], c = ["none", "subtle", "smooth", "spring"], b = s.componentSize && d.includes(s.componentSize) ? s.componentSize : t.componentSize, l = s.motion && c.includes(s.motion) ? s.motion : t.motion ?? "smooth";
    return {
      mode: o,
      brand: s.brand ?? t.brand,
      customBrandColor: s.customBrandColor ?? t.customBrandColor,
      density: s.density ?? t.density,
      radius: s.radius ?? t.radius,
      fontScale: s.fontScale ?? t.fontScale ?? "md",
      visualMode: s.visualMode ?? t.visualMode ?? "default",
      componentSize: b,
      motion: l
    };
  } catch {
    return t;
  }
}
function ym(t, a) {
  if (!(!a || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(Xn) : window.localStorage.setItem(Xn, t.mode), window.localStorage.setItem(Mo, JSON.stringify(t));
    } catch {
    }
}
const _h = ({
  children: t,
  defaultTheme: a,
  defaultPageTransition: r = "fade-slide",
  watermarkText: n,
  defaultWatermarkEnabled: s = !1,
  persist: o = !0,
  toastAdapter: d,
  toastContainerProps: c,
  uploadAdapter: b,
  dictAdapter: l,
  permissionAdapter: u,
  captchaAdapter: m,
  iconRegistry: p = {},
  defaultDrawerCascadeMode: f = "adjacent"
}) => {
  const g = oe(
    () => ({ ...Yt, ...a }),
    [a]
  ), [x, w] = $(() => yi(g, o)), [N, v] = $(
    () => ja(x.mode)
  ), [S, M] = $(r), [L, R] = $(s);
  fe(() => {
    const V = er(x);
    v(V), ym(x, o);
  }, [x, o]), fe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const V = window.matchMedia("(prefers-color-scheme: dark)"), Y = () => {
      if (x.mode === "system") {
        const ce = er(x);
        v(ce);
      }
    };
    return V.addEventListener("change", Y), () => V.removeEventListener("change", Y);
  }, [x]), fe(() => {
    if (!o || typeof window > "u") return;
    const V = (Y) => {
      (Y.key === Mo || Y.key === Xn) && w(yi(g, !0));
    };
    return window.addEventListener("storage", V), () => window.removeEventListener("storage", V);
  }, [o, g]);
  const C = de(
    (V, Y) => {
      Xu(() => {
        w((ce) => {
          const G = { ...ce, mode: V };
          return er(G), G;
        });
      }, Y);
    },
    []
  ), y = de(
    (V) => {
      const ce = ja(x.mode) === "dark" ? "light" : "dark", G = ja("system");
      C(ce === G ? "system" : ce, V);
    },
    [x.mode, C]
  ), E = de((V) => {
    w((Y) => ({ ...Y, brand: V, customBrandColor: void 0 }));
  }, []), _ = de((V) => {
    w((Y) => ({ ...Y, customBrandColor: V }));
  }, []), j = de((V) => {
    w((Y) => ({ ...Y, density: V }));
  }, []), D = de((V) => {
    w((Y) => ({ ...Y, radius: V }));
  }, []), B = de((V) => {
    w((Y) => ({ ...Y, fontScale: V }));
  }, []), H = de((V) => {
    w((Y) => ({ ...Y, visualMode: V }));
  }, []), A = de((V) => {
    w((Y) => ({ ...Y, componentSize: V }));
  }, []), I = de((V) => {
    w((Y) => ({ ...Y, motion: V }));
  }, []), P = de((V) => {
    w((Y) => ({ ...Y, ...V }));
  }, []), K = de(() => {
    w(g), M(r), R(s);
  }, [g, r, s]), O = oe(
    () => ({
      theme: x,
      resolvedTheme: N,
      pageTransition: S,
      watermarkText: n,
      watermarkEnabled: L,
      setThemeMode: C,
      toggleTheme: y,
      setBrand: E,
      setCustomBrandColor: _,
      setDensity: j,
      setRadius: D,
      setFontScale: B,
      setVisualMode: H,
      setComponentSize: A,
      setMotion: I,
      updateTheme: P,
      setPageTransition: M,
      setWatermarkEnabled: R,
      resetTheme: K,
      toast: d ?? Eo,
      uploadAdapter: b,
      dictAdapter: l,
      permissionAdapter: u,
      captchaAdapter: m,
      iconRegistry: p,
      defaultDrawerCascadeMode: f
    }),
    [
      x,
      N,
      S,
      n,
      L,
      C,
      y,
      E,
      _,
      j,
      D,
      B,
      H,
      A,
      I,
      P,
      K,
      d,
      b,
      l,
      u,
      m,
      p,
      f
    ]
  );
  return /* @__PURE__ */ i(Ao.Provider, { value: O, children: [
    t,
    !d && /* @__PURE__ */ e(xm, { ...c }),
    /* @__PURE__ */ e(Sc, {})
  ] });
};
function wm() {
  return mn(Ao);
}
function Mt() {
  const t = mn(Ao);
  return t || {
    theme: Yt,
    resolvedTheme: ja(Yt.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (a) => {
      er({ ...Yt, mode: a });
    },
    toggleTheme: () => {
      const a = ja(Yt.mode) === "dark" ? "light" : "dark";
      er({ ...Yt, mode: a });
    },
    setBrand: (a) => {
      er({ ...Yt, brand: a });
    },
    setCustomBrandColor: (a) => {
      er({ ...Yt, customBrandColor: a });
    },
    setDensity: (a) => {
      er({ ...Yt, density: a });
    },
    setRadius: (a) => {
      er({ ...Yt, radius: a });
    },
    setFontScale: (a) => {
      er({ ...Yt, fontScale: a });
    },
    setVisualMode: (a) => {
      er({ ...Yt, visualMode: a });
    },
    setComponentSize: (a) => {
      er({ ...Yt, componentSize: a });
    },
    setMotion: (a) => {
      er({ ...Yt, motion: a });
    },
    updateTheme: (a) => {
      er({ ...Yt, ...a });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      er(Yt);
    },
    toast: Eo,
    iconRegistry: {}
  };
}
function Be(t, a = "sm") {
  const { theme: r } = Mt();
  return (t === "default" ? void 0 : t) ?? r.componentSize ?? a;
}
function Te(t) {
  const { theme: a } = Mt();
  return t ?? a.motion ?? "smooth";
}
function Nm(t) {
  const a = Mt();
  return t ?? a.defaultDrawerCascadeMode ?? "adjacent";
}
const nn = {
  Activity: _u,
  AlertCircle: ia,
  AlertOctagon: Cu,
  AlertTriangle: Zr,
  BarChart2: Su,
  BarChart3: ku,
  Bell: Nu,
  BellRing: wu,
  BookMarked: yu,
  Boxes: xu,
  Building2: nc,
  Calendar: vo,
  CalendarCheck: vu,
  Camera: gu,
  Check: kt,
  CheckCircle: ac,
  CheckCircle2: Xr,
  CheckSquare: hu,
  CircleDollarSign: pu,
  Clock: Hn,
  Coins: fu,
  Compass: rc,
  Copy: va,
  Cpu: mu,
  CreditCard: bu,
  Database: uu,
  Download: qs,
  Edit: du,
  Edit3: Fn,
  Eye: Ha,
  FileCheck: lu,
  FileClock: cu,
  FileSpreadsheet: iu,
  FileText: ou,
  Flame: su,
  Folder: nu,
  FolderGit2: au,
  FolderOpen: ru,
  FolderPlus: tu,
  FolderTree: tc,
  Globe: eu,
  Globe2: Qd,
  Handshake: Jd,
  HardDrive: Zd,
  Headphones: Xd,
  HelpCircle: Wa,
  History: qd,
  Home: go,
  Image: ec,
  Info: fn,
  Key: Yd,
  KeyRound: Qi,
  Layers: ho,
  LayoutDashboard: Gd,
  LayoutGrid: Vd,
  LineChart: Ud,
  Link2: Kd,
  ListChecks: Hd,
  ListOrdered: Wd,
  Lock: Fd,
  MapPin: $d,
  Megaphone: Od,
  Menu: Ji,
  MessageCircle: Pd,
  MessageSquare: zd,
  MessageSquareQuote: Bd,
  MessageSquareText: jd,
  MessagesSquare: Rd,
  Minus: is,
  Monitor: po,
  MoreHorizontal: fo,
  Network: Dd,
  Package: Ld,
  Palette: mo,
  PanelLeft: Ad,
  PanelTop: Md,
  Pause: Ed,
  Phone: Td,
  PhoneCall: Id,
  PieChart: _d,
  Play: Zi,
  Plus: os,
  PlusCircle: Cd,
  Radio: Sd,
  Receipt: kd,
  RefreshCw: ga,
  RotateCcw: vr,
  RotateCw: ss,
  ScrollText: Nd,
  Search: $t,
  Send: wd,
  Server: yd,
  Settings: xd,
  Share: vd,
  Share2: gd,
  Shield: hd,
  ShieldAlert: ns,
  ShieldCheck: bo,
  ShoppingBag: pd,
  ShoppingCart: fd,
  Sliders: md,
  SlidersHorizontal: Ys,
  Smartphone: bd,
  Sparkles: pn,
  Star: ud,
  StarOff: dd,
  Store: ld,
  Tag: cd,
  Tags: id,
  Terminal: od,
  Ticket: sd,
  Timer: nd,
  Trash: ad,
  Trash2: Vr,
  TrendingUp: rd,
  Unlock: td,
  Upload: as,
  User: ed,
  UserCheck: Ql,
  UserCog: Jl,
  Users: Zl,
  Video: Xl,
  Wallet: ql,
  Wrench: Yl,
  X: St,
  XCircle: Gl,
  Zap: Vl
}, Ws = {
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
}, wi = [
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
function km(t) {
  return t.split(/[-_]/).map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()).join("");
}
const Cc = {};
function Ih(t) {
  Object.assign(Cc, t);
}
const jr = ({
  name: t = "",
  text: a = "",
  size: r = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (a) {
    const m = a.toLowerCase();
    for (const p of wi)
      if (p.keywords.some((f) => m.includes(f))) {
        const f = nn[p.iconName];
        if (f)
          return /* @__PURE__ */ e(f, { size: r, strokeWidth: n, className: h("shrink-0", s) });
      }
  }
  const d = (t || "").replace(/^el-icon-/, "").trim(), c = d.replace(/^s-/, ""), b = Ws[d] ?? Ws[c] ?? Ws[t];
  let l = (o == null ? void 0 : o[d]) ?? Cc[d] ?? (b ? nn[b] : void 0) ?? nn[d] ?? (d ? nn[km(d)] : void 0);
  if (!l && d) {
    const m = d.toLowerCase();
    for (const p of wi)
      if (p.keywords.some((f) => m.includes(f))) {
        l = nn[p.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(l ?? rc, { size: r, strokeWidth: n, className: h("shrink-0", s) });
}, _c = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Sm = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  default: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, Jr = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", gt = ct.forwardRef(
  ({
    size: t,
    motion: a,
    label: r,
    error: n,
    helperText: s,
    prefix: o,
    prefixIcon: d,
    suffix: c,
    suffixIcon: b,
    allowClear: l,
    clearable: u,
    passwordToggle: m = !0,
    showPasswordLabel: p,
    hidePasswordLabel: f,
    showCount: g = !1,
    onClear: x,
    invalid: w = !1,
    id: N,
    type: v = "text",
    value: S,
    defaultValue: M,
    maxLength: L,
    onChange: R,
    disabled: C,
    readOnly: y,
    className: E,
    wrapperClassName: _,
    ...j
  }, D) => {
    const B = Be(t, "sm"), H = Te(a), A = Et(), I = N || A, P = ie(null);
    rs(D, () => P.current, []);
    const K = S !== void 0, [O, V] = $(
      () => M != null ? String(M) : ""
    ), [Y, ce] = $(!1), re = v === "password" && m !== !1, ee = re && Y ? "text" : v, se = (K ? String(S ?? "") : O).length, ye = se > 0, F = !!((l ?? u) && ye && !C && !y), Z = !!(w || n), De = o ?? d, Xe = c ?? b, he = (Pe) => {
      K || V(Pe.target.value), R == null || R(Pe);
    }, Ae = de(
      (Pe) => {
        if (Pe.preventDefault(), Pe.stopPropagation(), C || y) return;
        K || V(""), x == null || x();
        const Ve = P.current;
        if (Ve && (Ve.value = "", Ve.focus()), R) {
          const ae = Ve ?? { value: "" };
          R({
            target: ae,
            currentTarget: ae,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [C, y, K, x, R]
    ), Fe = (F ? 1 : 0) + (re ? 1 : 0) + (Xe ? 1 : 0), Ce = Fe >= 3 ? "pr-20" : Fe === 2 ? "pr-14" : Fe === 1 ? "pr-9" : "pr-3", st = /\bw-(?!full\b)\S+/.test(E || ""), we = /* @__PURE__ */ i(
      "div",
      {
        className: h(
          "relative flex items-center",
          !st && "w-full",
          _
        ),
        children: [
          De && /* @__PURE__ */ e(
            "div",
            {
              className: h(
                "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
                B === "xs" ? "left-2 [&>svg]:h-3.5 [&>svg]:w-3.5" : "left-2.5 [&>svg]:h-4 [&>svg]:w-4"
              ),
              children: De
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              ref: P,
              id: I,
              type: ee,
              value: S,
              defaultValue: M,
              maxLength: L,
              onChange: he,
              disabled: C,
              readOnly: y,
              "data-motion": H,
              "aria-invalid": Z || void 0,
              className: h(
                Jr,
                _c[B],
                De ? B === "xs" ? "pl-7" : "pl-8" : B === "xs" ? "pl-2" : "pl-3",
                Ce,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                ee === "number" && Fe > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                Z && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                C && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                E
              ),
              ...j
            }
          ),
          (F || re || Xe) && /* @__PURE__ */ i("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            F && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (Pe) => Pe.preventDefault(),
                onClick: Ae,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" })
              }
            ),
            re && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: C,
                "data-testid": "password-toggle",
                "aria-label": Y ? f ?? "隐藏密码" : p ?? "显示密码",
                title: Y ? f ?? "隐藏密码" : p ?? "显示密码",
                onMouseDown: (Pe) => Pe.preventDefault(),
                onClick: (Pe) => {
                  Pe.preventDefault(), Pe.stopPropagation(), !C && ce((Ve) => !Ve);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: Y ? /* @__PURE__ */ e(sc, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Ha, { className: "h-3.5 w-3.5" })
              }
            ),
            Xe && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: Xe })
          ] })
        ]
      }
    );
    return !r && !n && !s && !g ? we : /* @__PURE__ */ i("div", { className: "w-full", children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: I,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: r
        }
      ),
      we,
      (n || s || g) && /* @__PURE__ */ i("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        g && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: L !== void 0 ? `${se}/${L}` : se
          }
        )
      ] })
    ] });
  }
);
gt.displayName = "Input";
const ds = ({
  value: t,
  defaultValue: a,
  onChange: r,
  min: n,
  max: s,
  step: o = 1,
  size: d,
  motion: c,
  disabled: b = !1,
  placeholder: l,
  invalid: u = !1,
  className: m
}) => {
  const p = Be(d, "sm"), f = Te(c), g = Et(), [x, w] = $(a ?? null), N = t !== void 0 ? t : x, v = (S) => {
    let M = S;
    M !== null && Number.isFinite(M) ? (n !== void 0 && (M = Math.max(n, M)), s !== void 0 && (M = Math.min(s, M))) : M = null, t === void 0 && w(M), r == null || r(M);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: h(
        "inline-flex w-full items-center overflow-hidden",
        Jr,
        _c[p],
        u && "border-[var(--abc-danger)]",
        b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
        m
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "减少数值",
            disabled: b || n !== void 0 && (N ?? 0) <= n,
            onClick: () => v((N ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(is, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: g,
            type: "number",
            value: N ?? "",
            min: n,
            max: s,
            step: o,
            disabled: b,
            placeholder: l,
            onChange: (S) => {
              const M = S.target.value;
              v(M === "" ? null : Number(M));
            },
            className: "h-full w-full min-w-0 flex-1 bg-transparent px-2.5 text-center font-mono tabular-nums focus:outline-none"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "增加数值",
            disabled: b || s !== void 0 && (N ?? 0) >= s,
            onClick: () => v((N ?? 0) + o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(os, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, hn = ct.forwardRef(
  ({
    size: t,
    motion: a,
    label: r,
    error: n,
    helperText: s,
    showCount: o = !1,
    invalid: d = !1,
    mono: c = !1,
    id: b,
    value: l,
    defaultValue: u,
    maxLength: m,
    onChange: p,
    rows: f = 3,
    className: g,
    ...x
  }, w) => {
    const N = Be(t, "sm"), v = Te(a), S = Et(), M = b || S, [L, R] = $(
      () => String(u ?? "").length
    ), C = l !== void 0 ? String(l ?? "").length : L, y = !!(d || n), _ = /* @__PURE__ */ e(
      "textarea",
      {
        ref: w,
        id: M,
        rows: f,
        value: l,
        defaultValue: u,
        maxLength: m,
        onChange: (j) => {
          l === void 0 && R(j.target.value.length), p == null || p(j);
        },
        "data-motion": v,
        "aria-invalid": y || void 0,
        className: h(
          Jr,
          Sm[N],
          "leading-relaxed resize-y",
          c && "font-mono",
          y && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          g
        ),
        ...x
      }
    );
    return !r && !n && !s && !o ? _ : /* @__PURE__ */ i("div", { className: "w-full", children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: M,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: r
        }
      ),
      _,
      (n || s || o) && /* @__PURE__ */ i("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        o && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "textarea-count",
            className: "ml-2 shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums",
            children: m !== void 0 ? `${C}/${m}` : C
          }
        )
      ] })
    ] });
  }
);
hn.displayName = "Textarea";
const Ni = [
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
], Cm = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], _m = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, ki = ({
  open: t,
  current: a,
  value: r,
  onClose: n,
  onSelect: s,
  onChange: o,
  placeholder: d = "点击选择菜单图标",
  clearable: c = !0,
  disabled: b = !1,
  size: l,
  motion: u,
  className: m
}) => {
  const p = Be(l, "sm"), f = Te(u), [g, x] = $(!1), [w, N] = $(""), [v, S] = $("all"), M = typeof t == "boolean", L = M ? t : g, R = r ?? a ?? "", C = () => {
    M ? n == null || n() : x(!1);
  }, y = (D) => {
    s == null || s(D), o == null || o(D), C();
  }, E = oe(() => {
    const D = w.trim();
    return Ni.filter((B) => v !== "all" && B.category !== v ? !1 : D ? ur(`${B.label} ${B.name}`, D) : !0);
  }, [w, v]), _ = oe(
    () => Ni.find((D) => D.name.toLowerCase() === R.toLowerCase()),
    [R]
  ), j = /* @__PURE__ */ e(yr, { open: L, onClose: C, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ i("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        gt,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: w,
          prefix: /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }),
          onChange: (D) => N(D.target.value)
        }
      ) }),
      R && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(jr, { name: R, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: R })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: Cm.map((D) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => S(D.id),
        className: h(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          v === D.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: D.label
      },
      D.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: E.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: E.map((D) => {
      const B = R === D.name;
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => y(D.name),
          className: h(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            B ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            B && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              jr,
              {
                name: D.name,
                size: 20,
                className: h(
                  "transition-transform group-hover:scale-110",
                  B ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: D.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: D.name })
          ]
        },
        D.name
      );
    }) }) : /* @__PURE__ */ i("div", { className: "py-10 text-center text-xs text-[var(--abc-fg-muted)]", children: [
      /* @__PURE__ */ i("p", { children: [
        "未找到匹配 “",
        w,
        "” 的预设图标"
      ] }),
      w.trim() && /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => y(w.trim()),
          className: "mt-3 inline-flex items-center gap-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] px-3 py-1.5 font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { children: "使用自定义图标名:" }),
            /* @__PURE__ */ e("span", { className: "font-mono font-semibold", children: w.trim() })
          ]
        }
      )
    ] }) })
  ] }) });
  return M ? j : /* @__PURE__ */ i(qe, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: "button",
        tabIndex: b ? -1 : 0,
        "data-motion": f,
        onClick: () => !b && x(!0),
        onKeyDown: (D) => {
          !b && (D.key === "Enter" || D.key === " ") && (D.preventDefault(), x(!0));
        },
        className: h(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          _m[p],
          Jr,
          b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          m
        ),
        children: [
          R ? /* @__PURE__ */ i("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(jr, { name: R, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: _ ? `${_.label} (${R})` : R })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: d }),
          /* @__PURE__ */ i("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && R && !b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (D) => {
                  D.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(St, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(sr, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    j
  ] });
};
async function us(t) {
  if (typeof window > "u") return !1;
  if (typeof navigator < "u" && navigator.clipboard && typeof navigator.clipboard.writeText == "function")
    try {
      return await navigator.clipboard.writeText(t), !0;
    } catch {
    }
  try {
    const a = document.createElement("textarea");
    a.value = t, a.setAttribute("readonly", ""), a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.opacity = "0", document.body.appendChild(a), a.focus(), a.select();
    const r = document.execCommand("copy");
    return document.body.removeChild(a), r;
  } catch {
    return !1;
  }
}
const Im = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, Tm = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, Si = ({
  text: t,
  displayText: a,
  children: r,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: o = !0,
  successMessage: d,
  successText: c,
  tooltip: b,
  onCopy: l,
  size: u,
  motion: m,
  className: p
}) => {
  const f = Be(u, "sm"), g = Te(m), { toast: x } = Mt(), [w, N] = $(!1), v = ie(null), S = c ?? d ?? "已复制到剪贴板";
  fe(() => () => {
    v.current && clearTimeout(v.current);
  }, []);
  const M = de(
    async (C) => {
      C.stopPropagation(), C.preventDefault(), await us(t) ? (N(!0), x.success(S), l == null || l(t), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        N(!1), v.current = null;
      }, 1500)) : x.error("复制失败，请手动复制");
    },
    [t, S, l, x]
  ), L = b !== void 0 ? b : w ? S : "点击复制", R = w ? /* @__PURE__ */ e(
    kt,
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
      title: L,
      "aria-label": b || "复制",
      "data-motion": g,
      onClick: M,
      className: h(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        p
      ),
      children: R
    }
  ) : /* @__PURE__ */ i(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: L,
      "data-motion": g,
      onClick: M,
      onKeyDown: (C) => {
        (C.key === "Enter" || C.key === " ") && M(C);
      },
      className: h(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        Im[f],
        o && "font-mono tabular-nums",
        p
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: a ?? r ?? t }),
        n && R
      ]
    }
  );
}, Ra = ({ size: t, motion: a, className: r, children: n, ...s }) => {
  const o = Be(t, "sm"), d = Te(a);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": d,
      className: h(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        Tm[o],
        r
      ),
      ...s,
      children: n
    }
  );
}, Th = ({
  value: t,
  title: a,
  copyLabel: r = "复制",
  copiedLabel: n = "已复制",
  successDuration: s = 1800,
  className: o,
  ...d
}) => {
  const [c, b] = $(!1), l = a || r;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": c ? n : l,
      title: c ? n : l,
      onClick: async (m) => {
        m.stopPropagation(), await us(t) && (b(!0), setTimeout(() => b(!1), s));
      },
      className: h(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] transition-all hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] cursor-pointer",
        c && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
        o
      ),
      ...d,
      children: c ? /* @__PURE__ */ e(kt, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(va, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
    }
  );
}, Em = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, Mm = {
  xs: "px-1.5 py-0.2 text-[10px] gap-1",
  sm: "px-2 py-0.5 text-xs gap-1.5",
  md: "px-2.5 py-1 text-xs gap-2"
};
function Eh({
  icon: t,
  label: a,
  variant: r = "default",
  size: n = "sm",
  className: s,
  ...o
}) {
  return /* @__PURE__ */ i(
    "span",
    {
      "data-slot": "icon-badge",
      className: h(
        "inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none",
        Em[r],
        Mm[n],
        s
      ),
      ...o,
      children: [
        t && /* @__PURE__ */ e("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ e("span", { children: a })
      ]
    }
  );
}
function Am({
  text: t,
  iconSize: a = 14,
  preserveSrToken: r = !1,
  className: n,
  ...s
}) {
  const o = t ? t.replace(/\[icon:[^\]]+\]/g, "").trim() : "";
  return /* @__PURE__ */ e("span", { className: h("inline-flex items-center gap-1.5", n), ...s, children: /* @__PURE__ */ e("span", { children: o || t }) });
}
function bn(t) {
  return t == null || typeof t == "boolean" ? "" : typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(bn).join("") : ct.isValidElement(t) ? bn(t.props.children) : "";
}
function ao(t, a) {
  const r = [];
  return ct.Children.forEach(t, (n) => {
    if (ct.isValidElement(n)) {
      if (n.type === ct.Fragment) {
        const s = n.props;
        r.push(...ao(s.children, a));
        return;
      }
      if (n.type === "optgroup") {
        const s = n.props;
        r.push(...ao(s.children, s.label ?? ""));
        return;
      }
      if (n.type === "option") {
        const s = n.props, o = bn(s.children), d = s.value !== void 0 ? s.value : o;
        r.push({
          value: String(d),
          rawValue: d,
          label: s.children,
          textLabel: o,
          disabled: !!s.disabled,
          group: a
        });
      }
    }
  }), r;
}
const Lm = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Dm = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
};
function Ci(t, a = !0) {
  return t.textLabel.includes("[icon:") ? /* @__PURE__ */ e(
    Am,
    {
      text: t.textLabel,
      iconSize: 13,
      preserveSrToken: a
    }
  ) : t.label;
}
const br = ct.forwardRef(
  ({
    options: t,
    children: a,
    value: r,
    defaultValue: n,
    onChange: s,
    onValueChange: o,
    onBlur: d,
    onKeyDown: c,
    label: b,
    error: l,
    helperText: u,
    id: m,
    name: p,
    title: f,
    placeholder: g,
    multiple: x = !1,
    searchable: w = !1,
    allowClear: N,
    clearable: v,
    disabled: S = !1,
    invalid: M = !1,
    size: L,
    motion: R,
    className: C,
    wrapperClassName: y,
    containerClassName: E,
    dropdownClassName: _,
    popoverClassName: j,
    matchWidth: D = !0,
    hideChevron: B = !1,
    container: H,
    "aria-label": A,
    ...I
  }, P) => {
    var Ye, Xt, Ir;
    const K = t === void 0 && a !== void 0, O = g !== void 0 ? g : K ? "" : "请选择", V = Be(L === "ghost" ? "sm" : L, "sm"), Y = Te(R), ce = Et(), G = m || ce, re = typeof process < "u" && ((Ye = process.env) == null ? void 0 : Ye.NODE_ENV) === "test" || typeof import.meta < "u" && !1, ee = oe(() => t !== void 0 ? t.map((q) => ({
      value: String(q.value),
      rawValue: q.value,
      label: q.label,
      textLabel: typeof q.label == "string" ? q.label : bn(q.label),
      disabled: !!q.disabled,
      description: q.description,
      group: q.group
    })) : ao(a), [t, a]), me = r !== void 0, [se, ye] = $(() => {
      if (n !== void 0) return n;
      if (K && !x && !g) {
        const q = ee.find((le) => !le.disabled) ?? ee[0];
        return q ? q.value : "";
      }
      return x ? [] : "";
    });
    fe(() => {
      if (me || !K || x || g || ee.length === 0) return;
      if (!ee.some((le) => le.value === String(se ?? "")))
        if (n !== void 0 && ee.some((le) => le.value === String(n)))
          ye(n);
        else {
          const le = ee.find((je) => !je.disabled) ?? ee[0];
          le && ye(le.value);
        }
    }, [me, K, x, g, ee, se, n]);
    const F = me ? r : se, [Z, De] = $(!1), [Xe, he] = $(""), [Ae, Fe] = $(0), { isMounted: Ce, isVisible: st } = ca(
      Z,
      Y === "none" || re ? 0 : 140
    ), we = ie(null), Pe = ie(null), Ve = ie(null), ae = ie(null), ve = ie(null), Ge = ie([]), He = ct.useCallback(
      (q) => {
        ve.current = q, typeof P == "function" ? P(q) : P && (P.current = q);
      },
      [P]
    ), ft = !!(N ?? v), Ht = !!(M || l), { style: It, actualSide: zr, portalContainer: wr } = Ua({
      open: Ce,
      triggerRef: Pe,
      floatingRef: Ve,
      placement: "bottomLeft",
      offset: 4,
      matchWidth: D
    }), fr = H ?? wr;
    fe(() => {
      if (!Z) {
        he("");
        return;
      }
      const q = (je) => {
        var ht, bt;
        const ut = je.target;
        ut && ((ht = we.current) != null && ht.contains(ut) || (bt = Ve.current) != null && bt.contains(ut) || De(!1));
      }, le = (je) => {
        var ut, ht;
        je.key === "Escape" && (je.preventDefault(), je.stopPropagation(), De(!1), K ? (ut = ve.current) == null || ut.focus() : (ht = Pe.current) == null || ht.focus());
      };
      return document.addEventListener("mousedown", q), document.addEventListener("touchstart", q, { passive: !0 }), document.addEventListener("keydown", le, !0), () => {
        document.removeEventListener("mousedown", q), document.removeEventListener("touchstart", q), document.removeEventListener("keydown", le, !0);
      };
    }, [Z, K]), fe(() => {
      var ht;
      if (!Z) return;
      const q = Ge.current[Ae], le = (ht = Ve.current) == null ? void 0 : ht.querySelector("[data-select-scroll-host]");
      if (!q || !le) return;
      const je = q.offsetTop, ut = je + q.offsetHeight;
      je < le.scrollTop ? le.scrollTop = je : ut > le.scrollTop + le.clientHeight && (le.scrollTop = ut - le.clientHeight);
    }, [Z, Ae]);
    const _e = oe(() => {
      const q = Xe.trim();
      return q ? ee.filter(
        (le) => ur(le.textLabel, q) || le.value.toLowerCase().includes(q.toLowerCase())
      ) : ee;
    }, [ee, Xe]), ot = oe(() => x ? Array.isArray(F) ? F : F != null && F !== "" ? [F] : [] : F != null && F !== "" ? [F] : [], [x, F]), Ft = oe(() => ot.map((q) => {
      const le = ee.find((je) => je.value === String(q));
      return {
        value: q,
        option: le,
        label: le ? le.label : String(q),
        textLabel: le ? le.textLabel : String(q)
      };
    }), [ee, ot]), pr = (q) => {
      if (me || ye(q), K) {
        const le = Array.isArray(q) ? String(q[0] ?? "") : String(q ?? "");
        o == null || o(le);
        const je = ve.current;
        je && (je.value = le, je.dispatchEvent(new Event("change", { bubbles: !0 })));
        return;
      }
      Array.isArray(q) || o == null || o(String(q ?? "")), s == null || s(q);
    }, qt = () => {
      const q = _e.findIndex(
        (le) => !le.disabled && ot.some((je) => String(je) === le.value)
      );
      if (q >= 0)
        Fe(q);
      else {
        const le = _e.findIndex((je) => !je.disabled);
        Fe(le >= 0 ? le : 0);
      }
      De(!0);
    }, dt = (q) => {
      var je;
      if (_e.length === 0) return;
      let le = Ae;
      for (let ut = 0; ut < _e.length; ut++)
        if (le = (le + q + _e.length) % _e.length, !((je = _e[le]) != null && je.disabled)) {
          Fe(le);
          return;
        }
    }, rt = (q) => {
      var le, je;
      if (!q.disabled)
        if (x) {
          const ht = ot.some((bt) => String(bt) === q.value) ? ot.filter((bt) => String(bt) !== q.value) : [...ot, q.rawValue];
          pr(ht);
        } else
          pr(q.rawValue), De(!1), K ? (le = ve.current) == null || le.focus() : (je = Pe.current) == null || je.focus();
    }, Ze = (q) => {
      if (c == null || c(q), !S) {
        if (q.key === "Escape") {
          Z && (q.preventDefault(), q.stopPropagation(), De(!1));
          return;
        }
        if (q.key === "Tab") {
          Z && De(!1);
          return;
        }
        if (q.key === "ArrowDown") {
          q.preventDefault(), Z ? dt(1) : qt();
          return;
        }
        if (q.key === "ArrowUp") {
          q.preventDefault(), Z ? dt(-1) : qt();
          return;
        }
        if (q.key === "Enter" || q.key === " " && q.target !== ae.current)
          if (q.preventDefault(), !Z)
            qt();
          else {
            const le = _e[Ae];
            le && !le.disabled && rt(le);
          }
      }
    }, Je = y || E, jt = _ || j, Bt = oe(() => _e.some((q) => !!q.group), [_e]), et = K ? { "aria-hidden": !0 } : {
      id: G,
      title: f,
      role: "combobox",
      "aria-label": A,
      "aria-expanded": Z,
      "aria-haspopup": "listbox",
      "aria-controls": `${G}-listbox`,
      "aria-activedescendant": Z ? `${G}-opt-${Ae}` : void 0,
      "aria-disabled": S || void 0,
      tabIndex: S ? -1 : 0,
      onBlur: (q) => {
        var je;
        const le = q.relatedTarget;
        le && ((je = Ve.current) != null && je.contains(le)) || d == null || d(q);
      },
      onKeyDown: Ze
    };
    return /* @__PURE__ */ i(
      "div",
      {
        ref: we,
        "data-slot": "select-wrapper",
        "data-state": Z ? "open" : "closed",
        className: h(
          "relative min-w-0",
          L === "ghost" ? "inline-flex w-auto" : Je || "w-full"
        ),
        children: [
          b && /* @__PURE__ */ e(
            "label",
            {
              htmlFor: G,
              className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
              children: b
            }
          ),
          K ? /* @__PURE__ */ i(
            "select",
            {
              ...I,
              ref: He,
              id: G,
              name: p,
              title: f,
              "aria-label": A,
              "aria-invalid": I["aria-invalid"] ?? (Ht || void 0),
              disabled: S,
              multiple: x || void 0,
              value: me ? Array.isArray(r) ? r.map(String) : String(r ?? "") : String(se ?? ""),
              onBlur: (q) => {
                var je;
                const le = q.relatedTarget;
                le && ((je = Ve.current) != null && je.contains(le)) || d == null || d(q);
              },
              onClick: (q) => {
                var le;
                (le = I.onClick) == null || le.call(I, q), !q.defaultPrevented && (q.stopPropagation(), !S && (Z ? De(!1) : qt()));
              },
              onKeyDown: Ze,
              onChange: (q) => {
                me || ye(q.target.value), o == null || o(q.target.value), s == null || s(q);
              },
              className: "peer pointer-events-none absolute inset-0 h-full w-full appearance-none opacity-0",
              children: [
                O && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: O }),
                ee.map((q, le) => /* @__PURE__ */ e("option", { value: q.value, disabled: q.disabled, children: q.textLabel }, `${q.value}-${le}`))
              ]
            }
          ) : p ? /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: p,
              value: x ? ot.join(",") : String(ot[0] ?? "")
            }
          ) : null,
          /* @__PURE__ */ i(
            "div",
            {
              ref: Pe,
              "data-slot": "select-trigger",
              "data-state": Z ? "open" : "closed",
              ...et,
              onClick: (q) => {
                var le;
                K && (q.preventDefault(), (le = ve.current) == null || le.focus()), q.stopPropagation(), !S && (Z ? De(!1) : qt());
              },
              "data-motion": Y,
              className: h(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                L === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : h(
                  "w-full px-2.5 py-1",
                  Jr,
                  x ? Dm[V] : Lm[V],
                  Z && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  Ht && "border-[var(--abc-danger)]",
                  S && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                C
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: Ft.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: O }) : x ? Ft.map((q) => /* @__PURE__ */ i(
                  "span",
                  {
                    "data-testid": "select-tag",
                    className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: q.label }),
                      !S && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": `移除 ${q.textLabel}`,
                          onClick: (le) => {
                            le.stopPropagation(), pr(
                              ot.filter((je) => String(je) !== String(q.value))
                            );
                          },
                          className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                          children: /* @__PURE__ */ e(St, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  String(q.value)
                )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (Xt = Ft[0]) != null && Xt.option ? Ci(Ft[0].option, !1) : (Ir = Ft[0]) == null ? void 0 : Ir.label }) }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  ft && Ft.length > 0 && !S && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "select-clear",
                      "aria-label": "清空",
                      onClick: (q) => {
                        q.stopPropagation(), pr(x ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  !B && /* @__PURE__ */ e(
                    sr,
                    {
                      className: h(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        Z && "rotate-180"
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          Ce && fr && xr(
            /* @__PURE__ */ i(
              "div",
              {
                ref: Ve,
                id: `${G}-listbox`,
                role: "listbox",
                "data-slot": "select-popover",
                "data-abc-floating": "",
                "data-motion": Y,
                "data-placement": zr,
                "aria-multiselectable": x || void 0,
                onMouseDown: (q) => q.stopPropagation(),
                style: It,
                className: h(
                  "z-[1500] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                  D ? "min-w-full" : "min-w-[140px]",
                  st ? "abc-animate-popover-in" : "abc-animate-popover-out",
                  jt
                ),
                children: [
                  w && /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                    /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e(
                      "input",
                      {
                        ref: ae,
                        type: "text",
                        autoFocus: !0,
                        "data-testid": "select-search-input",
                        value: Xe,
                        onClick: (q) => q.stopPropagation(),
                        onKeyDown: Ze,
                        onChange: (q) => {
                          const le = q.target.value;
                          he(le);
                          const ut = (le.trim() ? ee.filter(
                            (ht) => ur(ht.textLabel, le) || ht.value.toLowerCase().includes(le.toLowerCase())
                          ) : ee).findIndex((ht) => !ht.disabled);
                          Fe(ut >= 0 ? ut : 0);
                        },
                        placeholder: "搜索或输入拼音首字母...",
                        className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e("div", { "data-select-scroll-host": "", className: "max-h-56 overflow-y-auto p-1", children: _e.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : _e.map((q, le) => {
                    var lt;
                    const je = ot.some((Tt) => String(Tt) === q.value), ut = le === Ae, ht = le > 0 ? (lt = _e[le - 1]) == null ? void 0 : lt.group : void 0, bt = Bt && q.group && q.group !== ht;
                    return /* @__PURE__ */ i(ct.Fragment, { children: [
                      bt && /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]", children: q.group }),
                      /* @__PURE__ */ i(
                        "button",
                        {
                          ref: (Tt) => {
                            Ge.current[le] = Tt;
                          },
                          id: `${G}-opt-${le}`,
                          type: "button",
                          role: "option",
                          "aria-selected": je,
                          disabled: q.disabled,
                          onMouseEnter: () => {
                            q.disabled || Fe(le);
                          },
                          onMouseDown: (Tt) => Tt.stopPropagation(),
                          onClick: (Tt) => {
                            Tt.preventDefault(), Tt.stopPropagation(), rt(q);
                          },
                          className: h(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            je ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : ut && !q.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                            q.disabled && "opacity-45 cursor-not-allowed"
                          ),
                          children: [
                            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                              /* @__PURE__ */ e("div", { className: "truncate", children: Ci(q, !0) }),
                              q.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: q.description })
                            ] }),
                            je && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 shrink-0" })
                          ]
                        }
                      )
                    ] }, `${q.value}-${le}`);
                  }) })
                ]
              }
            ),
            fr
          ),
          l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
          u && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: u })
        ]
      }
    );
  }
);
br.displayName = "Select";
function Mh({
  value: t,
  defaultValue: a,
  onValueChange: r,
  onChange: n,
  options: s,
  label: o,
  error: d,
  helperText: c,
  placeholder: b,
  searchable: l,
  allowClear: u,
  clearable: m,
  "aria-label": p,
  id: f,
  disabled: g,
  triggerClassName: x,
  contentClassName: w,
  size: N
}) {
  return /* @__PURE__ */ e(
    br,
    {
      id: f,
      "aria-label": p,
      disabled: g,
      label: o,
      error: d,
      helperText: c,
      value: t,
      defaultValue: a,
      onValueChange: r,
      onChange: n,
      searchable: l,
      allowClear: u,
      clearable: m,
      className: x,
      dropdownClassName: w,
      size: N,
      placeholder: b,
      options: s
    }
  );
}
const Rm = ({
  title: t = "暂无匹配数据",
  description: a = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: r,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: d,
  motion: c,
  compact: b = !1,
  className: l
}) => {
  const u = Be(d, "md"), m = Te(c), g = {
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
  }[b ? "sm" : u];
  return /* @__PURE__ */ i(
    "div",
    {
      "data-testid": "empty-state",
      "data-motion": m,
      className: h(
        "flex flex-col items-center justify-center text-center select-none",
        g.container,
        m !== "none" && "abc-animate-fade-in",
        l
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "empty-state-icon",
            className: h(
              "flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]",
              g.iconBox
            ),
            children: r ?? /* @__PURE__ */ e(Iu, { className: g.iconSize })
          }
        ),
        t && /* @__PURE__ */ e(
          "h4",
          {
            "data-testid": "empty-state-title",
            className: h("mt-3 text-[var(--abc-fg)]", g.title),
            children: t
          }
        ),
        a && /* @__PURE__ */ e(
          "p",
          {
            "data-testid": "empty-state-description",
            className: h("max-w-sm leading-relaxed text-[var(--abc-fg-muted)]", g.desc),
            children: a
          }
        ),
        (n || s) && /* @__PURE__ */ e("div", { "data-testid": "empty-state-action", className: "mt-4 flex items-center justify-center gap-2", children: n ?? /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: g.btnSize,
            motion: m,
            icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, jm = {
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
}, Zn = ({
  mode: t,
  current: a,
  currentPage: r,
  page: n,
  pageSize: s,
  size: o,
  controlSize: d,
  motion: c,
  total: b,
  pageSizeOptions: l = [10, 20, 50, 100],
  onChange: u,
  onPageChange: m,
  onSizeChange: p,
  onPageSizeChange: f,
  showTotal: g = !0,
  showQuickJumper: x = !0,
  className: w,
  hasNext: N,
  hasPrev: v,
  nextCursor: S,
  prevCursor: M,
  currentCursor: L,
  loadedCount: R,
  onNext: C,
  onPrev: y,
  onResetCursor: E,
  loading: _ = !1
}) => {
  const j = a ?? r ?? n ?? 1, D = s ?? (typeof o == "number" ? o : void 0) ?? 10, B = Be(
    d ?? (typeof o == "string" ? o : void 0),
    "sm"
  ), H = Te(c), A = jm[B], I = t ?? (b === void 0 && (N !== void 0 || v !== void 0 || C !== void 0) ? "cursor" : "offset"), P = (se) => {
    u == null || u(1, se), p == null || p(se), f == null || f(se);
  }, K = oe(() => (l || []).map((se) => ({
    label: `${se} 条/页`,
    value: se
  })), [l]);
  if (I === "cursor")
    return /* @__PURE__ */ i(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": H,
        className: h(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          A.wrap,
          w
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            g === !1 ? null : typeof g == "function" ? g(R ?? 0) : R !== void 0 ? /* @__PURE__ */ i("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: R }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            E && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: E,
                disabled: _ || !v,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            l && l.length > 0 && (p || f || u) && /* @__PURE__ */ e(
              br,
              {
                "aria-label": "每页条数",
                size: B,
                value: D,
                disabled: _,
                onChange: (se) => P(Number(se)),
                options: K,
                searchable: !1,
                clearable: !1,
                wrapperClassName: A.selectWrap,
                className: h("cursor-pointer font-sans tabular-nums select-none", A.select)
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !v || _,
                onClick: y,
                className: h(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  A.navBtn
                ),
                children: [
                  /* @__PURE__ */ e(Kn, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "上一页" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "下一页",
                disabled: !N || _,
                onClick: C,
                className: h(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  A.navBtn
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "下一页" }),
                  /* @__PURE__ */ e(dr, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ]
      }
    );
  const O = b ?? 0, V = Math.max(1, Math.ceil(O / Math.max(1, D))), [Y, ce] = $(""), G = ie(null);
  if (O <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": H,
        className: h(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          A.wrap,
          w
        ),
        children: /* @__PURE__ */ e("div", { children: g === !1 ? null : typeof g == "function" ? g(0) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const re = (se) => {
    const ye = Math.min(Math.max(1, se), V);
    ye !== j && (u == null || u(ye, D), m == null || m(ye));
  }, ee = () => {
    const se = Y.trim();
    if (!se) {
      G.current = null;
      return;
    }
    if (se === G.current) return;
    const ye = parseInt(se, 10);
    if (Number.isNaN(ye)) {
      ce(""), G.current = null;
      return;
    }
    const F = Math.min(Math.max(1, ye), V);
    G.current = se, ce(String(F)), re(F);
  }, me = [];
  if (V <= 7)
    for (let se = 1; se <= V; se++) me.push(se);
  else {
    me.push(1), j > 3 && me.push("...");
    const se = Math.max(2, j - 1), ye = Math.min(V - 1, j + 1);
    for (let F = se; F <= ye; F++) me.push(F);
    j < V - 2 && me.push("..."), me.push(V);
  }
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": H,
      className: h(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        A.wrap,
        w
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: g === !1 ? null : typeof g == "function" ? g(O) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: O }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          l && l.length > 0 && /* @__PURE__ */ e(
            br,
            {
              "aria-label": "每页条数",
              size: B,
              value: D,
              disabled: _,
              onChange: (se) => P(Number(se)),
              options: K,
              searchable: !1,
              clearable: !1,
              wrapperClassName: A.selectWrap,
              className: h("cursor-pointer font-sans tabular-nums select-none", A.select)
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: j <= 1,
              onClick: () => re(j - 1),
              className: h(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                A.navBtn
              ),
              children: /* @__PURE__ */ e(Kn, { className: "h-3.5 w-3.5" })
            }
          ),
          me.map(
            (se, ye) => se === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${ye}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => re(se),
                className: h(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  A.pageBtn,
                  se === j ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: se
              },
              se
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: j >= V,
              onClick: () => re(j + 1),
              className: h(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                A.navBtn
              ),
              children: /* @__PURE__ */ e(dr, { className: "h-3.5 w-3.5" })
            }
          ),
          x && /* @__PURE__ */ i(
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
                    value: Y,
                    onChange: (se) => {
                      G.current = null, ce(se.target.value);
                    },
                    onKeyDown: (se) => {
                      se.key === "Enter" && (se.preventDefault(), ee());
                    },
                    onBlur: ee,
                    className: h(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors",
                      A.input
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
}, Ah = (t) => /* @__PURE__ */ e(Zn, { mode: "cursor", ...t }), Lh = (t) => /* @__PURE__ */ e(Zn, { ...t }), Ot = ({
  variant: t = "text",
  animation: a = "pulse",
  motion: r,
  width: n,
  height: s,
  className: o,
  style: d,
  children: c,
  ...b
}) => {
  const l = Te(r), u = l === "none" ? "none" : a, m = {
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
      style: m,
      className: h(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && h("rounded-md", s === void 0 && "h-4"),
        u === "wave" && "abc-skeleton-wave skeleton-wave",
        u === "pulse" && "animate-pulse",
        o
      ),
      ...b,
      children: c
    }
  );
}, Dh = ({
  animation: t = "wave",
  className: a,
  ...r
}) => /* @__PURE__ */ i(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-card",
    className: h(
      "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]",
      a
    ),
    ...r,
    children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(Ot, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(Ot, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(Ot, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(Ot, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), Rh = ({
  rows: t = 5,
  columns: a = 4,
  showHeader: r = !0,
  animation: n = "wave",
  className: s,
  ...o
}) => /* @__PURE__ */ e(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-table",
    className: h(
      "overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      s
    ),
    ...o,
    children: /* @__PURE__ */ i("table", { className: "w-full border-collapse", children: [
      r && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: a }).map((d, c) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Ot,
        {
          variant: "text",
          width: c === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, c)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((d, c) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: a }).map((b, l) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Ot,
        {
          variant: "text",
          width: `${Math.max(40, 85 - (c + l) % 4 * 15)}%`,
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-cell"
        }
      ) }, l)) }, c)) })
    ] })
  }
), jh = ({
  height: t = 288,
  animation: a = "wave",
  className: r,
  style: n,
  ...s
}) => /* @__PURE__ */ i(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-chart",
    style: { ...n, height: typeof t == "number" ? `${t}px` : t },
    className: h(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      r
    ),
    ...s,
    children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(Ot, { variant: "text", width: 60, height: 12, animation: a }),
        /* @__PURE__ */ e(Ot, { variant: "text", width: 60, height: 12, animation: a })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, d) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        Ot,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: a,
          className: "rounded-t-md"
        }
      ) }, d)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, d) => /* @__PURE__ */ e(Ot, { variant: "text", width: 36, height: 10, animation: a }, d)) })
    ]
  }
), Ic = {
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
function Bm(t, a, r) {
  if (t) return t;
  const n = (a ?? r ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in Ic ? n : "neutral";
}
const ha = ({
  tone: t,
  status: a,
  color: r,
  text: n,
  label: s,
  dot: o = !0,
  pulse: d = !1,
  size: c,
  motion: b,
  className: l,
  children: u,
  ...m
}) => {
  const p = Bm(t, a, r), f = Ic[p], g = n ?? s ?? u, x = Be(c, "sm"), w = Te(b);
  return /* @__PURE__ */ i(
    "span",
    {
      "data-motion": w,
      className: h(
        "abc-motion-pop inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap",
        {
          xs: "px-1.5 py-0 text-[10px]",
          sm: "px-2 py-0.5 text-[11px]",
          md: "px-2.5 py-1 text-xs",
          lg: "px-3 py-1.5 text-sm"
        }[x],
        f.tag,
        l
      ),
      ...m,
      children: [
        o && /* @__PURE__ */ i("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
          d && /* @__PURE__ */ e(
            "span",
            {
              className: h(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                f.dot
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: h("relative inline-flex h-1.5 w-1.5 rounded-full", f.dot) })
        ] }),
        /* @__PURE__ */ e("span", { children: g })
      ]
    }
  );
}, Bh = ({
  count: t = 0,
  maxCount: a = 99,
  dot: r = !1,
  tone: n = "danger",
  variant: s,
  size: o,
  motion: d,
  children: c,
  className: b
}) => {
  const l = Be(o, "sm"), u = Te(d);
  if (s)
    return /* @__PURE__ */ e(
      "span",
      {
        "data-motion": u,
        className: h(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--abc-primary)] focus:ring-offset-2",
          s === "secondary" ? "border-transparent bg-[var(--abc-bg-subtle,#f1f5f9)] text-[var(--abc-fg-secondary,#64748b)]" : s === "outline" ? "border-[var(--abc-border,#e2e8f0)] text-[var(--abc-fg,#0f172a)] bg-transparent" : s === "destructive" ? "border-transparent bg-[var(--abc-danger,#ef4444)] text-white" : "border-transparent bg-[var(--abc-primary,#2563eb)] text-white",
          b
        ),
        children: c
      }
    );
  const m = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", p = r || t > 0, f = t > a ? `${a}+` : String(t), g = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, x = {
    xs: "h-4 min-w-4 px-1 text-[9px]",
    sm: "h-4.5 min-w-4.5 px-1.5 text-[10px]",
    md: "h-5 min-w-5 px-1.5 text-[11px]",
    lg: "h-6 min-w-6 px-2 text-xs"
  }, w = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, N = {
    xs: "h-3.5 min-w-3.5 px-1 text-[9px]",
    sm: "h-4 min-w-4 px-1 text-[10px]",
    md: "h-4.5 min-w-4.5 px-1.5 text-[11px]",
    lg: "h-5 min-w-5 px-1.5 text-xs"
  };
  return c ? /* @__PURE__ */ i("span", { "data-motion": u, className: h("relative inline-flex shrink-0", b), children: [
    c,
    p && (r ? /* @__PURE__ */ e(
      "span",
      {
        className: h(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          w[l],
          m
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: h(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          N[l],
          m
        ),
        children: f
      }
    ))
  ] }) : p ? r ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": u,
      className: h("abc-motion-pop inline-block rounded-full", g[l], m, b)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": u,
      className: h(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        x[l],
        m,
        b
      ),
      children: f
    }
  ) : null;
}, zm = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, Pm = ({ src: t, name: a = "U", size: r, motion: n, className: s }) => {
  const o = Be(r, "sm"), d = Te(n), [c, b] = $(!1), l = a.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": d,
      className: h(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        zm[o],
        s
      ),
      children: t && !c ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: a,
          onError: () => b(!0),
          className: "h-full w-full object-cover"
        }
      ) : /* @__PURE__ */ e("span", { children: l })
    }
  );
};
function zh(t = {}) {
  return "";
}
const Om = ({
  variant: t = "default",
  dot: a = !1,
  className: r,
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
    ha,
    {
      tone: d,
      dot: a,
      className: h(t === "outline" && "bg-transparent border-[var(--abc-border)]", r),
      ...s,
      children: n
    }
  );
};
Om.displayName = "Tag";
const $m = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Fm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, Wm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, Hm = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, Jn = ({
  as: t = "div",
  title: a,
  subtitle: r,
  extra: n,
  footer: s,
  size: o,
  padding: d,
  variant: c = "default",
  cover: b,
  statusRibbon: l,
  loading: u = !1,
  motion: m,
  hoverable: p = !1,
  className: f,
  bodyClassName: g,
  children: x,
  ...w
}) => {
  const N = t, v = Be(o, "md"), S = Te(m), M = d ?? v;
  return /* @__PURE__ */ i(
    N,
    {
      "data-motion": S,
      "data-size": v,
      className: h(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        Hm[c],
        p && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        f
      ),
      ...w,
      children: [
        b && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: b }),
        (a || n || l) && /* @__PURE__ */ i(
          "div",
          {
            className: h(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Fm[v]
            ),
            children: [
              /* @__PURE__ */ i("div", { className: "min-w-0", children: [
                a && /* @__PURE__ */ e(
                  "h3",
                  {
                    className: h(
                      "font-semibold text-[var(--abc-fg)] leading-snug",
                      v === "xs" ? "text-xs" : v === "lg" ? "text-base" : "text-sm"
                    ),
                    children: a
                  }
                ),
                r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
              ] }),
              (n || l) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                l && /* @__PURE__ */ e(ha, { tone: l.tone ?? "primary", size: "xs", dot: !1, children: l.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: h($m[M], g), children: u ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(Ot, { width: "45%", height: 14, motion: S }),
          /* @__PURE__ */ e(Ot, { width: "90%", height: 12, motion: S }),
          /* @__PURE__ */ e(Ot, { width: "70%", height: 12, motion: S })
        ] }) : x }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              Wm[v]
            ),
            children: s
          }
        )
      ]
    }
  );
}, Km = ct.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      "data-slot": "card-header",
      className: h("flex flex-col gap-1.5 p-6 border-b border-[var(--abc-border)]/40", t),
      ...a
    }
  )
);
Km.displayName = "CardHeader";
const Um = ct.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "h3",
    {
      ref: r,
      "data-slot": "card-title",
      className: h("font-semibold leading-none tracking-tight text-[var(--abc-fg)] text-base", t),
      ...a
    }
  )
);
Um.displayName = "CardTitle";
const Vm = ct.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "p",
    {
      ref: r,
      "data-slot": "card-description",
      className: h("text-sm text-[var(--abc-fg-muted)] leading-relaxed", t),
      ...a
    }
  )
);
Vm.displayName = "CardDescription";
const Gm = ct.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      "data-slot": "card-content",
      className: h("p-6 pt-0", t),
      ...a
    }
  )
);
Gm.displayName = "CardContent";
const Ym = ct.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      "data-slot": "card-footer",
      className: h("flex items-center p-6 pt-0 border-t border-[var(--abc-border)]/40", t),
      ...a
    }
  )
);
Ym.displayName = "CardFooter";
const Ph = ({
  orientation: t = "horizontal",
  label: a,
  className: r,
  ...n
}) => t === "vertical" ? /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    "aria-orientation": "vertical",
    className: h("mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle", r),
    ...n
  }
) : a ? /* @__PURE__ */ i(
  "div",
  {
    role: "separator",
    className: h("my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]", r),
    ...n,
    children: [
      /* @__PURE__ */ e("span", { className: "h-px flex-1 bg-[var(--abc-border)]" }),
      /* @__PURE__ */ e("span", { className: "shrink-0", children: a }),
      /* @__PURE__ */ e("span", { className: "h-px flex-1 bg-[var(--abc-border)]" })
    ]
  }
) : /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    className: h("my-3 h-px w-full bg-[var(--abc-border)]", r),
    ...n
  }
), qm = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Xm = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, Oh = ({
  direction: t = "horizontal",
  size: a,
  wrap: r = !1,
  align: n = "center",
  className: s,
  children: o,
  ...d
}) => {
  const c = Be(a, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Xm[n],
        qm[c],
        r && "flex-wrap",
        s
      ),
      ...d,
      children: o
    }
  );
}, Zm = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, $h = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: a,
  motion: r,
  hoverable: n = !1,
  className: s,
  children: o,
  ...d
}) => {
  const c = Be(a, "md"), b = Te(r), l = ie(null), [u, m] = $({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ i(
    "div",
    {
      ref: l,
      "data-motion": b,
      "data-size": c,
      onMouseMove: (p) => {
        var g;
        const f = (g = l.current) == null ? void 0 : g.getBoundingClientRect();
        f && m({ x: p.clientX - f.left, y: p.clientY - f.top, active: !0 });
      },
      onMouseLeave: () => m((p) => ({ ...p, active: !1 })),
      className: h(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        Zm[c],
        n && "abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md",
        s
      ),
      ...d,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": "true",
            className: h(
              "pointer-events-none absolute -inset-px",
              b !== "none" && "transition-opacity duration-[var(--abc-motion-base)]"
            ),
            style: {
              opacity: u.active ? 1 : 0,
              background: `radial-gradient(360px circle at ${u.x}px ${u.y}px, ${t}, transparent 75%)`
            }
          }
        ),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: o })
      ]
    }
  );
}, _i = ({ duration: t = 8, motion: a, className: r }) => {
  const n = Te(a);
  return n === "none" ? null : /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": n,
      className: h(
        "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        r
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
}, Ii = ({
  motion: t,
  className: a
}) => {
  const r = Te(t), n = r === "none";
  return /* @__PURE__ */ i(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": r,
      className: h("pointer-events-none absolute inset-0 overflow-hidden", a),
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
}, Va = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, gn = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, bs = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Tc = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, Lo = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, Fh = ({
  title: t,
  value: a,
  prefix: r,
  suffix: n,
  trend: s,
  sparkline: o,
  icon: d,
  footer: c,
  loading: b = !1,
  hoverable: l = !0,
  size: u,
  motion: m,
  className: p,
  ...f
}) => {
  const g = Be(u, "md"), x = Te(m), w = Et().replace(/:/g, ""), N = ct.useMemo(() => {
    if (!o || o.length < 2) return null;
    const S = Math.min(...o), L = Math.max(...o) - S || 1, R = 120, C = 32, E = `M ${o.map((j, D) => {
      const B = D / (o.length - 1) * R, H = C - 4 - (j - S) / L * (C - 8);
      return `${B.toFixed(1)},${H.toFixed(1)}`;
    }).join(" L ")}`, _ = `${E} L ${R},${C} L 0,${C} Z`;
    return { linePath: E, areaPath: _, width: R, height: C };
  }, [o]), v = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": x,
      "data-size": g,
      className: h(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Va[g],
        l && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        p
      ),
      ...f,
      children: b ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(Ot, { width: "45%", height: 13, motion: x }),
          /* @__PURE__ */ e(Ot, { variant: "rounded", width: 30, height: 30, motion: x })
        ] }),
        /* @__PURE__ */ e(Ot, { width: "60%", height: 26, motion: x }),
        /* @__PURE__ */ e(Ot, { width: "80%", height: 18, motion: x })
      ] }) : /* @__PURE__ */ i(qe, { children: [
        /* @__PURE__ */ i("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          d && /* @__PURE__ */ e(
            "span",
            {
              className: h(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                Lo[g]
              ),
              children: d
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          r && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: r }),
          /* @__PURE__ */ e("span", { className: Tc[g], children: a }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || N) && /* @__PURE__ */ i("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ i(
              "span",
              {
                className: h(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  v
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(oc, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(Tu, { className: "h-3 w-3" }) : /* @__PURE__ */ e(is, { className: "h-3 w-3" }),
                  s.value
                ]
              }
            ),
            s.label && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: s.label })
          ] }),
          N && /* @__PURE__ */ i(
            "svg",
            {
              viewBox: `0 0 ${N.width} ${N.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: `abc-spark-${w}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "var(--abc-primary)", stopOpacity: "0.28" }),
                  /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "var(--abc-primary)", stopOpacity: "0" })
                ] }) }),
                /* @__PURE__ */ e("path", { d: N.areaPath, fill: `url(#abc-spark-${w})` }),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: N.linePath,
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
}, Ec = co(null), Jm = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Wh = ({
  multiple: t = !1,
  value: a,
  defaultValue: r,
  onChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  columns: c = 2,
  className: b,
  children: l
}) => {
  const u = Et(), m = Be(o, "md"), p = Te(d), [f, g] = _r({
    value: a,
    defaultValue: r ?? (t ? [] : ""),
    onChange: n
  }), x = (w) => {
    if (!s)
      if (t) {
        const N = Array.isArray(f) ? f : [], S = N.includes(w) ? N.filter((M) => M !== w) : [...N, w];
        g(S);
      } else
        g(w);
  };
  return /* @__PURE__ */ e(
    Ec.Provider,
    {
      value: {
        multiple: t,
        value: f,
        disabled: s,
        size: m,
        motion: p,
        name: u,
        toggleValue: x
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          role: t ? "group" : "radiogroup",
          "data-motion": p,
          className: h("grid gap-3", Jm[c], b),
          children: l
        }
      )
    }
  );
}, Hh = ({
  value: t,
  title: a,
  description: r,
  avatar: n,
  icon: s,
  extra: o,
  checked: d,
  defaultChecked: c = !1,
  onChange: b,
  disabled: l = !1,
  size: u,
  motion: m,
  className: p,
  children: f
}) => {
  const g = mn(Ec), x = Be(u ?? (g == null ? void 0 : g.size), "md"), w = Te(m ?? (g == null ? void 0 : g.motion)), N = !!(l || g != null && g.disabled), v = !!(g && t !== void 0), S = g && !g.multiple ? "radio" : "checkbox", [M, L] = _r({
    value: d,
    defaultValue: c,
    onChange: b
  }), R = v ? g.multiple ? Array.isArray(g.value) && g.value.includes(t) : g.value === t : M, C = (y) => {
    N || (v ? g.toggleValue(t) : L(y));
  };
  return /* @__PURE__ */ i(
    "label",
    {
      "data-motion": w,
      "data-size": x,
      "data-checked": R ? "true" : "false",
      className: h(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        Va[x],
        R ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !N && !R && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        N ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1",
        p
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: S,
            name: g == null ? void 0 : g.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!R,
            disabled: N,
            onChange: (y) => C(y.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: h(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              Lo[x]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: h("font-semibold text-[var(--abc-fg)]", gn[x]), children: a }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          r && /* @__PURE__ */ e("p", { className: h("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", bs[x]), children: r }),
          f && /* @__PURE__ */ e("div", { className: "mt-2", children: f })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: h(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              R ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(kt, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Kh = ({
  title: t,
  description: a,
  icon: r,
  tags: n,
  extra: s,
  href: o,
  target: d,
  disabled: c = !1,
  onClick: b,
  size: l,
  motion: u,
  className: m
}) => {
  const p = Be(l, "md"), f = Te(u), g = !!((o || b) && !c), x = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": f,
      "data-size": p,
      className: h(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Va[p],
        g && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
        c && "opacity-55 cursor-not-allowed",
        m
      ),
      children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              r && /* @__PURE__ */ e(
                "span",
                {
                  className: h(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    Lo[p]
                  ),
                  children: r
                }
              ),
              /* @__PURE__ */ e("h3", { className: h("min-w-0 truncate", gn[p]), children: o && !c ? /* @__PURE__ */ e(
                "a",
                {
                  href: o,
                  target: d,
                  rel: d === "_blank" ? "noreferrer" : void 0,
                  onClick: () => b == null ? void 0 : b(),
                  className: h(x, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : b && !c ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: b,
                  className: h(x, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          a && /* @__PURE__ */ e("p", { className: h("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", bs[p]), children: a })
        ] }),
        n && n.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 flex flex-wrap gap-1.5", children: n.map((w) => /* @__PURE__ */ e(
          "span",
          {
            className: "rounded-[var(--abc-radius-xs)] border border-[var(--abc-border-subtle)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--abc-fg-secondary)]",
            children: w
          },
          w
        )) })
      ]
    }
  );
}, Qm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, Uh = ({
  title: t,
  subtitle: a,
  icon: r,
  extra: n,
  defaultOpen: s = !0,
  open: o,
  onOpenChange: d,
  size: c,
  motion: b,
  className: l,
  bodyClassName: u,
  children: m
}) => {
  const p = Be(c, "md"), f = Te(b), g = Et(), [x, w] = _r({
    value: o,
    defaultValue: s,
    onChange: d
  });
  return /* @__PURE__ */ i(
    "section",
    {
      "data-motion": f,
      "data-size": p,
      className: h(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        l
      ),
      children: [
        /* @__PURE__ */ i("div", { className: h("flex items-center justify-between gap-3", Qm[p]), children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              "aria-expanded": x,
              "aria-controls": g,
              onClick: () => w(!x),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  sr,
                  {
                    className: h(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      x ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                r && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: r }),
                /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: h("truncate font-semibold text-[var(--abc-fg)]", gn[p]), children: t }),
                  a && /* @__PURE__ */ e("div", { className: "truncate text-[11px] text-[var(--abc-fg-muted)]", children: a })
                ] })
              ]
            }
          ),
          n && /* @__PURE__ */ e(
            "div",
            {
              onClick: (N) => N.stopPropagation(),
              className: "flex shrink-0 items-center gap-2",
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { id: g, className: "abc-collapse-grid", "data-open": x, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "border-t border-[var(--abc-border)]",
              Va[p],
              u
            ),
            children: m
          }
        ) }) })
      ]
    }
  );
}, Vh = ({
  tier: t,
  price: a,
  period: r = "/ 月",
  description: n,
  features: s,
  recommended: o = !1,
  badge: d = "推荐方案",
  ctaText: c = "选择此方案",
  disabled: b = !1,
  loading: l = !1,
  onSelect: u,
  size: m,
  motion: p,
  className: f
}) => {
  const g = Be(m, "md"), x = Te(p);
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": x,
      "data-size": g,
      className: h(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        Va[g],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        f
      ),
      children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: h("font-bold text-[var(--abc-fg)]", gn[g]), children: t }),
            o && d && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(pn, { className: "h-2.5 w-2.5" }),
              d
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: h("mt-1.5 text-[var(--abc-fg-muted)]", bs[g]), children: n }),
          /* @__PURE__ */ i("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: h("font-extrabold text-[var(--abc-fg)]", Tc[g]), children: a }),
            r && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: r })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((w, N) => {
            const v = typeof w == "string" ? { text: w, included: !0 } : w, S = v.included !== !1;
            return /* @__PURE__ */ i(
              "li",
              {
                className: h(
                  "flex items-start gap-2 text-xs",
                  S ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  S ? /* @__PURE__ */ e(kt, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(St, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: v.text })
                ]
              },
              N
            );
          }) })
        ] }),
        u && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          Le,
          {
            variant: o ? "primary" : "secondary",
            size: g,
            motion: x,
            block: !0,
            disabled: b,
            loading: l,
            onClick: u,
            children: c
          }
        ) })
      ]
    }
  );
}, ef = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, Gh = ({
  columns: t = 3,
  gap: a,
  className: r,
  children: n,
  ...s
}) => {
  const o = Be(a, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "grid auto-rows-[minmax(148px,auto)]",
        ef[t],
        tf[o],
        r
      ),
      ...s,
      children: n
    }
  );
}, tf = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, Yh = ({
  colSpan: t = 1,
  rowSpan: a = 1,
  eyebrow: r,
  title: n,
  description: s,
  icon: o,
  graphic: d,
  footer: c,
  hoverable: b = !0,
  size: l,
  motion: u,
  className: m,
  children: p,
  ...f
}) => {
  const g = Be(l, "md"), x = Te(u), w = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", N = a === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": x,
      "data-size": g,
      className: h(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Va[g],
        w,
        N,
        b && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        m
      ),
      ...f,
      children: [
        /* @__PURE__ */ i("div", { children: [
          (r || o) && /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            r ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: r }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: h("font-bold text-[var(--abc-fg)]", gn[g]), children: n }),
          s && /* @__PURE__ */ e("p", { className: h("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", bs[g]), children: s })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: d }),
        p,
        c && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, rf = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, qh = ({
  items: t,
  ariaLabel: a = "面包屑导航",
  size: r,
  motion: n,
  className: s
}) => {
  const o = Be(r, "sm"), d = Te(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": a,
      "data-motion": d,
      className: h("abc-breadcrumb", rf[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((c, b) => {
        const l = b === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ i(
          "a",
          {
            href: c.href ?? "#",
            "aria-current": l ? "page" : void 0,
            onClick: (u) => {
              var m;
              (!c.href || c.href === "#" || c.onClick) && u.preventDefault(), l || (m = c.onClick) == null || m.call(c, u);
            },
            className: h(
              "abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              l ? "font-semibold text-[var(--abc-fg)] cursor-default no-underline" : "text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer"
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
}, af = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, nf = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, Xh = ({
  items: t,
  current: a = 0,
  status: r = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: d,
  className: c
}) => {
  const b = n === "vertical", l = Be(s, "sm"), u = Te(o);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": u,
      className: h(
        "m-0 list-none p-0",
        b ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        c
      ),
      children: t.map((m, p) => {
        const f = m.status ?? (p < a ? "finish" : p === a ? r : "wait"), g = !!(d && !m.disabled), x = p === t.length - 1, w = f === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : f === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : f === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ i(
          "li",
          {
            className: h(
              "relative flex min-w-0",
              b ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  disabled: !g,
                  onClick: () => g && (d == null ? void 0 : d(p)),
                  className: h(
                    "abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]",
                    g ? "cursor-pointer" : "cursor-default"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: h(
                          "abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors",
                          af[l],
                          w
                        ),
                        children: m.icon ? m.icon : f === "finish" ? /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5" }) : f === "error" ? /* @__PURE__ */ e(ia, { className: "h-3.5 w-3.5" }) : p + 1
                      }
                    ),
                    /* @__PURE__ */ i("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: h(
                            "block font-semibold",
                            nf[l],
                            f === "wait" ? "text-[var(--abc-fg-muted)]" : f === "error" ? "text-[var(--abc-danger)]" : "text-[var(--abc-fg)]"
                          ),
                          children: m.title
                        }
                      ),
                      m.description && /* @__PURE__ */ e("span", { className: "mt-0.5 block text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: m.description })
                    ] })
                  ]
                }
              ),
              !x && !b && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: h(
                    "hidden h-px flex-1 sm:block",
                    p < a ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border)]"
                  )
                }
              )
            ]
          },
          m.key ?? p
        );
      })
    }
  );
}, sf = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, of = {
  xs: "px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]",
  sm: "px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]",
  md: "px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]",
  lg: "px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]"
};
function Zh({
  options: t,
  value: a,
  onChange: r,
  onValueChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  block: c = !1,
  className: b,
  ...l
}) {
  const u = Be(o, "sm"), m = Te(d), p = r ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "segmented-control",
      "data-motion": m,
      className: h(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        c ? "flex w-full" : "inline-flex",
        sf[u],
        b
      ),
      ...l,
      children: t.map((f) => {
        const g = f.value === a, x = s || !!f.disabled;
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            "aria-pressed": g,
            disabled: x,
            onClick: () => p == null ? void 0 : p(f.value),
            className: h(
              "inline-flex cursor-pointer select-none items-center justify-center gap-1.5 font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              c && "flex-1",
              of[u],
              g ? "bg-[var(--abc-bg-surface)] font-semibold text-[var(--abc-primary)] shadow-2xs ring-1 ring-[var(--abc-border)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              f.icon,
              /* @__PURE__ */ e("span", { children: f.label }),
              f.badge
            ]
          },
          String(f.value)
        );
      })
    }
  );
}
const tr = ({
  content: t,
  placement: a = "top",
  disabled: r = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: d
}) => {
  const c = Te(s), [b, l] = $(!1), [u, m] = $(!1), p = Et(), f = ie(null), g = ie(null), x = ie(null), w = ie(null), N = de(() => {
    typeof window > "u" || (x.current !== null && (window.clearTimeout(x.current), x.current = null), w.current !== null && (window.clearTimeout(w.current), w.current = null));
  }, []);
  fe(() => () => N(), [N]);
  const v = de(
    (D = !1) => {
      r || !t || (N(), m(!1), D || n <= 0 || typeof window > "u" ? l(!0) : x.current = window.setTimeout(() => {
        l(!0), x.current = null;
      }, n));
    },
    [r, t, n, N]
  ), S = de(() => {
    if (N(), typeof window > "u") {
      l(!1);
      return;
    }
    w.current = window.setTimeout(() => {
      l(!1), w.current = null;
    }, 60);
  }, [N]), M = de(() => {
    N(), m(!0), l(!1);
  }, [N]), { isMounted: L, isVisible: R } = ca(
    b && !r && !!t,
    c === "none" || u ? 0 : 100
  ), { style: C, actualSide: y, arrowOffset: E, portalContainer: _ } = Ua({
    open: L,
    triggerRef: f,
    floatingRef: g,
    placement: a,
    offset: 8
  });
  if (fe(() => {
    if (!b) return;
    const D = (B) => {
      B.key === "Escape" && M();
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [b, M]), !t || r) return /* @__PURE__ */ e(qe, { children: o });
  const j = y === "top" ? { left: `${E}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "bottom" ? { left: `${E}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "left" ? { top: `${E}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${E}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ i(qe, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: f,
        "data-motion": c,
        "aria-describedby": b ? p : void 0,
        onMouseEnter: () => v(!1),
        onMouseLeave: S,
        onFocus: () => v(!0),
        onBlur: M,
        onPointerDown: M,
        className: h("inline-flex items-center", d),
        children: o
      }
    ),
    L && _ && xr(
      /* @__PURE__ */ i(
        "div",
        {
          ref: g,
          id: p,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": c,
          "data-placement": y,
          style: C,
          className: h(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            c !== "none" && (R ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "relative z-10 block", children: t }),
            /* @__PURE__ */ e(
              "span",
              {
                "aria-hidden": "true",
                style: j,
                className: "pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
              }
            )
          ]
        }
      ),
      _
    )
  ] });
}, vn = ({
  items: t = [],
  content: a,
  align: r,
  placement: n,
  trigger: s = "click",
  open: o,
  defaultOpen: d = !1,
  onOpenChange: c,
  motion: b,
  children: l,
  className: u,
  panelClassName: m
}) => {
  const p = Te(b), [f, g] = _r({
    value: o,
    defaultValue: d,
    onChange: c
  }), { isMounted: x, isVisible: w } = ca(f, p === "none" ? 0 : 140), N = ie(null), v = ie(null), S = ie(null), M = Et(), L = n ?? (r === "left" ? "bottomLeft" : "bottomRight"), { style: R, actualSide: C, portalContainer: y } = Ua({
    open: x,
    triggerRef: N,
    floatingRef: v,
    placement: L,
    offset: 6
  }), E = de(() => {
    S.current !== null && typeof window < "u" && (window.clearTimeout(S.current), S.current = null);
  }, []);
  fe(() => () => E(), [E]);
  const _ = de(() => {
    s === "hover" && (E(), g(!0));
  }, [s, E, g]), j = de(() => {
    s === "hover" && (E(), typeof window < "u" && (S.current = window.setTimeout(() => {
      g(!1), S.current = null;
    }, 140)));
  }, [s, E, g]), D = de((P) => {
    var Y;
    const K = v.current;
    if (!K) return;
    const O = Array.from(
      K.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (O.length === 0) return;
    const V = (P % O.length + O.length) % O.length;
    (Y = O[V]) == null || Y.focus();
  }, []);
  fe(() => {
    if (!f) return;
    const P = (O) => {
      var Y, ce;
      const V = O.target;
      (Y = N.current) != null && Y.contains(V) || (ce = v.current) != null && ce.contains(V) || g(!1);
    }, K = (O) => {
      var V;
      if (O.key === "Escape") {
        O.preventDefault(), O.stopPropagation(), g(!1);
        const Y = (V = N.current) == null ? void 0 : V.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        Y == null || Y.focus();
      }
    };
    return document.addEventListener("mousedown", P), document.addEventListener("keydown", K, !0), () => {
      document.removeEventListener("mousedown", P), document.removeEventListener("keydown", K, !0);
    };
  }, [f, g]);
  const B = !a, H = (P) => {
    P.key === "ArrowDown" ? (P.preventDefault(), g(!0), B && typeof window < "u" && window.requestAnimationFrame(() => D(0))) : (P.key === "Enter" || P.key === " ") && P.target === P.currentTarget && (P.preventDefault(), g(!f));
  }, A = (P) => {
    if (!B) return;
    const K = v.current;
    if (!K) return;
    const O = Array.from(
      K.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (O.length === 0) return;
    const V = O.indexOf(document.activeElement);
    P.key === "ArrowDown" ? (P.preventDefault(), D(V < 0 ? 0 : V + 1)) : P.key === "ArrowUp" ? (P.preventDefault(), D(V <= 0 ? O.length - 1 : V - 1)) : P.key === "Home" ? (P.preventDefault(), D(0)) : P.key === "End" && (P.preventDefault(), D(O.length - 1));
  }, I = s === "hover" ? C === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : C === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : C === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ i(qe, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: N,
        "data-motion": p,
        onMouseEnter: _,
        onMouseLeave: j,
        className: h("inline-flex", u),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": f,
            "aria-controls": f ? M : void 0,
            "aria-haspopup": B ? "menu" : void 0,
            onClick: () => g(!f),
            onKeyDown: H,
            className: "inline-flex cursor-pointer items-center",
            children: l
          }
        )
      }
    ),
    x && y && xr(
      /* @__PURE__ */ e(
        "div",
        {
          ref: v,
          id: M,
          role: B ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": p,
          "data-placement": C,
          style: R,
          onMouseEnter: _,
          onMouseLeave: j,
          onKeyDown: A,
          className: h(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            I,
            p !== "none" && (w ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            m
          ),
          children: a || t.map(
            (P) => P.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, P.key) : /* @__PURE__ */ i(ct.Fragment, { children: [
              P.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: P.disabled,
                  onClick: () => {
                    var K;
                    P.disabled || ((K = P.onClick) == null || K.call(P), g(!1));
                  },
                  className: h(
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
      y
    )
  ] });
}, Do = ({
  title: t,
  content: a,
  align: r,
  placement: n,
  panelClassName: s,
  ...o
}) => {
  const d = r === "start" ? "left" : r === "end" ? "right" : r;
  return /* @__PURE__ */ e(
    vn,
    {
      ...o,
      placement: n ?? (d && d === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: h(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: a })
      ] }) : a
    }
  );
}, Mc = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Ro = ({
  label: t,
  htmlFor: a,
  required: r = !1,
  tooltip: n,
  error: s,
  helperText: o,
  extra: d,
  layout: c = "vertical",
  size: b,
  motion: l,
  className: u,
  children: m
}) => {
  const p = Be(b, "sm"), f = Te(l);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: h(
        c === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        u
      ),
      children: [
        (t || d) && /* @__PURE__ */ i(
          "div",
          {
            className: h(
              "flex items-center justify-between gap-2",
              c === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ i(
                "label",
                {
                  htmlFor: a,
                  className: h(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    Mc[p]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    r && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(tr, { content: n, children: /* @__PURE__ */ e(Wa, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
                  ]
                }
              ),
              d && /* @__PURE__ */ e("div", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: d })
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
          m,
          s ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] font-medium text-[var(--abc-danger)]", children: s }) : o && /* @__PURE__ */ e("p", { className: "mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: o })
        ] })
      ]
    }
  );
}, cf = ct.forwardRef(
  ({ className: t, size: a = "sm", required: r, children: n, ...s }, o) => /* @__PURE__ */ i(
    "label",
    {
      ref: o,
      className: h(
        "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
        Mc[a] || "text-xs",
        t
      ),
      ...s,
      children: [
        n,
        r && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)] font-bold", children: "*" })
      ]
    }
  )
);
cf.displayName = "Label";
const lf = ge.forwardRef(
  ({
    className: t,
    containerClassName: a,
    wrapperClassName: r,
    onClear: n,
    clearLabel: s = "清空搜索",
    size: o = "sm",
    ...d
  }, c) => /* @__PURE__ */ e("div", { className: h("relative block min-w-[200px]", a, r), children: /* @__PURE__ */ e(
    gt,
    {
      ref: c,
      size: o,
      allowClear: !!n,
      onClear: n,
      prefix: /* @__PURE__ */ e(
        $t,
        {
          className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)] shrink-0",
          "aria-hidden": "true"
        }
      ),
      className: h("text-xs", t),
      ...d
    }
  ) })
);
lf.displayName = "SearchInput";
const Ti = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, Ei = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, df = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, $a = ct.forwardRef(
  ({
    id: t,
    checked: a,
    defaultChecked: r = !1,
    indeterminate: n = !1,
    onChange: s,
    disabled: o = !1,
    size: d,
    motion: c,
    label: b,
    description: l,
    className: u,
    ...m
  }, p) => {
    const f = Be(d, "sm"), g = Te(c), x = Et(), w = t || x, N = ie(null);
    rs(p, () => N.current, []);
    const [v, S] = _r({
      value: a,
      defaultValue: r
    });
    fe(() => {
      N.current && (N.current.indeterminate = !!n);
    }, [n]);
    const M = !!(b || l);
    return /* @__PURE__ */ i(
      "label",
      {
        htmlFor: w,
        "data-motion": g,
        className: h(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          df[f],
          M ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          u
        ),
        children: [
          /* @__PURE__ */ i(
            "span",
            {
              className: h(
                "relative inline-flex shrink-0 items-center justify-center",
                Ti[f],
                M && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...m,
                    ref: N,
                    id: w,
                    type: "checkbox",
                    checked: v,
                    disabled: o,
                    onChange: (L) => {
                      if (o) return;
                      const R = L.target.checked;
                      S(R), s == null || s(R, L);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: h(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      Ti[f],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      v || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(is, { className: h(Ei[f], "stroke-[2.5] abc-motion-pop") }) : v && /* @__PURE__ */ e(kt, { className: h(Ei[f], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          M && /* @__PURE__ */ i("span", { className: "flex flex-col", children: [
            b && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: b }),
            l && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
          ] })
        ]
      }
    );
  }
);
$a.displayName = "Checkbox";
const uf = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, bf = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, mf = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-3.5 w-3.5 translate-x-0.5",
  md: "h-4.5 w-4.5 translate-x-0.5",
  lg: "h-5.5 w-5.5 translate-x-0.5"
}, lr = ({
  checked: t,
  defaultChecked: a = !1,
  onChange: r,
  disabled: n = !1,
  loading: s = !1,
  size: o,
  motion: d,
  checkedLabel: c,
  uncheckedLabel: b,
  checkedChildren: l,
  unCheckedChildren: u,
  ariaLabel: m,
  className: p
}) => {
  const g = Be(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), x = Te(d), [w, N] = _r({
    value: t,
    defaultValue: a,
    onChange: r
  }), v = !!(n || s), S = c ?? l, M = b ?? u;
  return /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": w,
      "aria-label": m,
      disabled: v,
      "data-motion": x,
      onClick: () => {
        v || N(!w);
      },
      className: h(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        uf[g],
        w ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border-strong)]",
        p
      ),
      children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              transitionDuration: "var(--abc-motion-base, 220ms)",
              transitionTimingFunction: "var(--abc-ease-active, cubic-bezier(0.16, 1, 0.3, 1))"
            },
            className: h(
              "pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform",
              w ? bf[g] : mf[g]
            ),
            children: s && /* @__PURE__ */ e(mr, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (S || M) && /* @__PURE__ */ e("span", { className: "sr-only", children: w ? S : M })
      ]
    }
  );
}, ff = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, pf = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, hf = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, gf = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, vf = {
  xs: "text-xs gap-1.5",
  sm: "text-xs gap-2",
  md: "text-sm gap-2",
  lg: "text-sm gap-2.5"
}, Dr = ({
  options: t,
  value: a,
  defaultValue: r,
  onChange: n,
  variant: s = "default",
  size: o,
  motion: d,
  disabled: c = !1,
  className: b
}) => {
  var f;
  const l = Be(o, "sm"), u = Te(d), [m, p] = _r({
    value: a,
    defaultValue: r ?? ((f = t[0]) == null ? void 0 : f.value) ?? "",
    onChange: n
  });
  return s === "segmented" ? /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": u,
      className: h(
        "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        ff[l],
        b
      ),
      children: t.map((g) => {
        const x = String(m) === String(g.value), w = !!(c || g.disabled);
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": x,
            disabled: w,
            onClick: () => p(g.value),
            className: h(
              "rounded-[var(--abc-radius-sm)] font-medium cursor-pointer select-none abc-motion-control",
              pf[l],
              x ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]",
              w && "opacity-45 cursor-not-allowed"
            ),
            children: g.label
          },
          String(g.value)
        );
      })
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": u,
      className: h("inline-flex flex-wrap items-center gap-4", b),
      children: t.map((g) => {
        const x = String(m) === String(g.value), w = !!(c || g.disabled);
        return /* @__PURE__ */ i(
          "label",
          {
            className: h(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              vf[l],
              w ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "radio",
                  checked: x,
                  disabled: w,
                  onChange: () => p(g.value),
                  className: "peer sr-only"
                }
              ),
              /* @__PURE__ */ e(
                "span",
                {
                  className: h(
                    "flex items-center justify-center rounded-full border abc-motion-control",
                    hf[l],
                    x ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: x && /* @__PURE__ */ e(
                    "span",
                    {
                      className: h(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        gf[l]
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: g.label })
            ]
          },
          String(g.value)
        );
      })
    }
  );
}, xf = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, yf = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, wf = 40, Mi = 6;
function Ai(t, a) {
  return Array.isArray(t) ? t.filter((r) => r != null) : t != null && t !== "" ? a ? [t] : [t] : [];
}
function Hs(t) {
  return t.rawLabel !== void 0 && t.rawLabel !== null && t.rawLabel !== "" ? t.rawLabel : t.title;
}
const Ac = ct.forwardRef(
  ({
    treeData: t = [],
    fieldNames: a,
    treeDataSimpleMode: r = !1,
    loadData: n,
    treeLoadedKeys: s,
    value: o,
    defaultValue: d,
    onChange: c,
    onValueChange: b,
    multiple: l = !1,
    treeCheckable: u = !1,
    treeCheckStrictly: m = !1,
    showCheckedStrategy: p,
    selectableLeafOnly: f = !1,
    maxTagCount: g,
    treeDefaultExpandAll: x = !1,
    treeDefaultExpandedKeys: w,
    treeExpandedKeys: N,
    onTreeExpand: v,
    showToolbar: S,
    searchable: M,
    showSearch: L,
    searchValue: R,
    onSearch: C,
    searchPlaceholder: y = "搜索节点或输入拼音首字母...",
    treeNodeFilterProp: E = "both",
    virtual: _ = !0,
    listHeight: j = 280,
    itemHeight: D = 30,
    label: B,
    error: H,
    invalid: A = !1,
    helperText: I,
    required: P = !1,
    placeholder: K = "请选择",
    allowClear: O,
    clearable: V,
    disabled: Y = !1,
    id: ce,
    name: G,
    size: re,
    motion: ee,
    className: me,
    wrapperClassName: se,
    dropdownClassName: ye,
    matchWidth: F = !0,
    portalContainer: Z,
    container: De,
    emptyText: Xe = "暂无匹配节点",
    "aria-label": he,
    "aria-describedby": Ae,
    ...Fe
  }, Ce) => {
    var Sn, ta;
    const st = Be(re === "ghost" ? "sm" : re, "sm"), we = Te(ee), Pe = Et(), Ve = ce || `abc-treeselect-${Pe}`, ae = `${Ve}-tree`, ve = `${Ve}-feedback`, Ge = typeof process < "u" && ((Sn = process.env) == null ? void 0 : Sn.NODE_ENV) === "test" || typeof import.meta < "u" && !1, He = !!u, ft = !!(l || He), Ht = p ?? (He && !m ? "SHOW_PARENT" : "SHOW_ALL"), It = !!(M ?? L), zr = !!(O ?? V), wr = !!(A || H), fr = S ?? (ft || It), _e = oe(
      () => eb(t, {
        fieldNames: a,
        treeDataSimpleMode: r
      }),
      [t, a, r]
    ), ot = o !== void 0, [Ft, pr] = $(() => d !== void 0 ? d : ft ? [] : ""), qt = ot ? o : Ft, dt = oe(
      () => Ai(qt, ft),
      [qt, ft]
    ), rt = oe(() => He ? tb(
      _e.treeNodes,
      dt,
      m
    ) : {
      checkedKeys: dt,
      halfCheckedKeys: []
    }, [He, _e.treeNodes, dt, m]), Ze = oe(
      () => new Set(rt.checkedKeys.map((U) => String(U))),
      [rt.checkedKeys]
    ), Je = oe(
      () => new Set(rt.halfCheckedKeys.map((U) => String(U))),
      [rt.halfCheckedKeys]
    ), jt = oe(() => ft ? He ? pi(
      _e.treeNodes,
      rt.checkedKeys,
      Ht,
      m
    ) : dt : dt.slice(0, 1), [
      ft,
      He,
      dt,
      _e.treeNodes,
      rt.checkedKeys,
      Ht,
      m
    ]), Bt = oe(
      () => jt.map((U) => {
        const Se = _e.nodeMap.get(String(U)), Re = Se ? Hs(Se) : String(U), Me = Se ? Se.title : typeof Re == "string" || typeof Re == "number" ? String(Re) : bn(Re) || String(U);
        return {
          key: U,
          keyStr: String(U),
          node: Se,
          label: Re,
          title: Me
        };
      }),
      [jt, _e.nodeMap]
    ), et = N !== void 0, [Ye, Xt] = $(
      () => w && w.length > 0 ? w : x ? Ba(_e.treeNodes) : []
    ), Ir = ie(
      !!(w != null && w.length) || _e.treeNodes.length > 0
    );
    fe(() => {
      et || !x || !Ir.current && _e.treeNodes.length > 0 && (Ir.current = !0, Xt(Ba(_e.treeNodes)));
    }, [et, x, _e.treeNodes]);
    const [q, le] = $(() => /* @__PURE__ */ new Set()), [je, ut] = $(() => /* @__PURE__ */ new Set()), ht = oe(() => s !== void 0 ? new Set(s.map((U) => String(U))) : q, [s, q]), [bt, lt] = $(!1), [Tt, wt] = $(""), or = R !== void 0 ? R : Tt, [Dt, Kt] = $(0), [Pr, hr] = $(0), { isMounted: Tr, isVisible: Qr } = ca(
      bt,
      we === "none" || Ge ? 0 : 140
    ), Er = ie(null), ir = ie(null), Or = ie(null), ea = ie(null), Ut = ie(null), Nr = ie({}), $r = de(
      (U) => {
        ir.current = U, typeof Ce == "function" ? Ce(U) : Ce && (Ce.current = U);
      },
      [Ce]
    ), { style: wa, actualSide: Fr, portalContainer: Wt } = Ua({
      open: Tr,
      triggerRef: ir,
      floatingRef: Or,
      placement: "bottomLeft",
      offset: 6,
      matchWidth: F
    }), z = Z ?? De ?? Wt, { filteredNodes: J, autoExpandedKeys: be } = oe(
      () => rb(_e.treeNodes, or, E),
      [_e.treeNodes, or, E]
    ), ue = et ? N : Ye, pe = oe(() => {
      const U = new Set(ue.map((Se) => String(Se)));
      return or.trim() && be.forEach((Se) => U.add(String(Se))), U;
    }, [ue, or, be]), ne = de(
      (U) => !!(U.children && U.children.length > 0 || n && U.isLeaf !== !0 && !ht.has(String(U.key))),
      [n, ht]
    ), te = oe(
      () => ab(J, pe, ne),
      [J, pe, ne]
    ), ke = de(
      (U) => !ne(U),
      [ne]
    ), Qe = de(
      (U) => U.disabled ? !0 : He ? U.checkable === !1 : !!(U.selectable === !1 || f && !ke(U)),
      [He, f, ke]
    ), ze = de(
      (U) => {
        et || Xt(U), v == null || v(U);
      },
      [et, v]
    ), Oe = de(
      async (U) => {
        const Se = String(U.key);
        if (pe.has(Se)) {
          ze(ue.filter((Me) => String(Me) !== Se));
          return;
        }
        if (n && (!U.children || U.children.length === 0) && U.isLeaf !== !0 && !ht.has(Se)) {
          if (je.has(Se)) return;
          ut((Me) => {
            const Ue = new Set(Me);
            return Ue.add(Se), Ue;
          });
          try {
            await n(U), s === void 0 && le((Me) => {
              const Ue = new Set(Me);
              return Ue.add(Se), Ue;
            });
          } finally {
            ut((Me) => {
              const Ue = new Set(Me);
              return Ue.delete(Se), Ue;
            });
          }
        }
        ze([...ue, U.key]);
      },
      [
        pe,
        ue,
        ze,
        n,
        ht,
        je,
        s
      ]
    ), at = de(
      (U, Se = {}) => {
        ot || pr(U);
        const Me = Ai(U, ft).map((Ue) => {
          const nt = _e.nodeMap.get(String(Ue));
          return nt ? Hs(nt) : String(Ue);
        });
        b == null || b(U), c == null || c(U, Me, Se);
      },
      [ot, ft, _e.nodeMap, b, c]
    ), At = de(
      (U, Se) => {
        if (U.disabled || U.checkable === !1) return;
        const Re = String(U.key), Me = Ze.has(Re), Ue = Se !== void 0 ? Se : !Me, nt = mc(
          _e.treeNodes,
          rt.checkedKeys,
          U,
          Ue,
          m
        ), pt = pi(
          _e.treeNodes,
          nt.checkedKeys,
          Ht,
          m
        );
        at(pt, {
          triggerNode: U,
          checked: Ue,
          halfCheckedKeys: nt.halfCheckedKeys
        });
      },
      [
        Ze,
        _e.treeNodes,
        rt.checkedKeys,
        m,
        Ht,
        at
      ]
    ), Ct = de(
      (U) => {
        var Se;
        if (!U.disabled) {
          if (He) {
            if (U.checkable === !1) {
              ne(U) && Oe(U);
              return;
            }
            At(U);
            return;
          }
          if (f && !ke(U)) {
            Oe(U);
            return;
          }
          if (U.selectable === !1) {
            ne(U) && Oe(U);
            return;
          }
          if (ft) {
            const Re = String(U.key), Me = dt.some((nt) => String(nt) === Re), Ue = Me ? dt.filter((nt) => String(nt) !== Re) : [...dt, U.value];
            at(Ue, { triggerNode: U, checked: !Me });
            return;
          }
          at(U.value, { triggerNode: U, checked: !0 }), lt(!1), (Se = ir.current) == null || Se.focus();
        }
      },
      [
        He,
        ne,
        Oe,
        At,
        f,
        ke,
        ft,
        dt,
        at
      ]
    );
    fe(() => {
      if (!bt) {
        R === void 0 && wt(""), hr(0);
        return;
      }
      const U = (Re) => {
        var Ue, nt;
        const Me = Re.target;
        Me && ((Ue = Er.current) != null && Ue.contains(Me) || (nt = Or.current) != null && nt.contains(Me) || lt(!1));
      }, Se = (Re) => {
        var Me;
        Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), lt(!1), (Me = ir.current) == null || Me.focus());
      };
      return document.addEventListener("mousedown", U), document.addEventListener("touchstart", U, { passive: !0 }), document.addEventListener("keydown", Se, !0), () => {
        document.removeEventListener("mousedown", U), document.removeEventListener("touchstart", U), document.removeEventListener("keydown", Se, !0);
      };
    }, [bt, R]), fe(() => {
      if (te.length === 0) {
        Dt !== 0 && Kt(0);
        return;
      }
      Dt >= te.length && Kt(te.length - 1);
    }, [te.length, Dt]);
    const Ne = _ && te.length > wf;
    fe(() => {
      if (!bt || te.length === 0) return;
      const U = Ut.current;
      if (!U) return;
      if (Ne) {
        const nt = Dt * D, pt = nt + D;
        if (nt < U.scrollTop)
          U.scrollTop = nt, hr(nt);
        else if (pt > U.scrollTop + j) {
          const kr = pt - j;
          U.scrollTop = kr, hr(kr);
        }
        return;
      }
      const Se = te[Dt];
      if (!Se) return;
      const Re = Nr.current[Se.keyStr];
      if (!Re) return;
      const Me = Re.offsetTop, Ue = Me + Re.offsetHeight;
      Me < U.scrollTop ? U.scrollTop = Me : Ue > U.scrollTop + U.clientHeight && (U.scrollTop = Ue - U.clientHeight);
    }, [bt, Dt, Ne, D, j, te]);
    const mt = () => {
      if (Y) return;
      const U = new Set(dt.map((Re) => String(Re))), Se = te.findIndex(
        (Re) => !Re.node.disabled && U.has(Re.keyStr)
      );
      if (Se >= 0)
        Kt(Se);
      else {
        const Re = te.findIndex((Me) => !Me.node.disabled);
        Kt(Re >= 0 ? Re : 0);
      }
      lt(!0);
    }, tt = (U) => {
      var Re;
      if (te.length === 0) return;
      let Se = Dt;
      for (let Me = 0; Me < te.length; Me++)
        if (Se = (Se + U + te.length) % te.length, !((Re = te[Se]) != null && Re.node.disabled)) {
          Kt(Se);
          return;
        }
    }, Nt = (U) => {
      var Me, Ue;
      if (Y) return;
      const Se = U.target === ea.current;
      if (U.key === "Escape") {
        bt && (U.preventDefault(), U.stopPropagation(), lt(!1), (Me = ir.current) == null || Me.focus());
        return;
      }
      if (U.key === "Tab") {
        bt && lt(!1);
        return;
      }
      if (!bt) {
        if (U.key === "ArrowDown" || U.key === "ArrowUp" || U.key === "Enter" || U.key === " ") {
          U.preventDefault(), mt();
          return;
        }
        if (U.key === "Backspace" && ft && Bt.length > 0) {
          const nt = Bt[Bt.length - 1];
          nt && !((Ue = nt.node) != null && Ue.disabled) && (U.preventDefault(), He && nt.node ? At(nt.node, !1) : at(dt.filter((pt) => String(pt) !== nt.keyStr)));
        }
        return;
      }
      if (U.key === "ArrowDown") {
        U.preventDefault(), tt(1);
        return;
      }
      if (U.key === "ArrowUp") {
        U.preventDefault(), tt(-1);
        return;
      }
      const Re = te[Dt];
      if (Re) {
        if (U.key === "ArrowRight" && !Se) {
          U.preventDefault(), Re.hasChildren && !Re.isExpanded ? Oe(Re.node) : Re.hasChildren && Re.isExpanded && tt(1);
          return;
        }
        if (U.key === "ArrowLeft" && !Se) {
          if (U.preventDefault(), Re.hasChildren && Re.isExpanded)
            Oe(Re.node);
          else if (Re.parentKey !== null) {
            const nt = String(Re.parentKey), pt = te.findIndex((kr) => kr.keyStr === nt);
            pt >= 0 && Kt(pt);
          }
          return;
        }
        (U.key === "Enter" || U.key === " " && !Se) && (U.preventDefault(), Ct(Re.node));
      }
    }, vt = g === "responsive" ? 3 : typeof g == "number" && g >= 0 ? g : Number.POSITIVE_INFINITY, Ke = ft ? Bt.slice(0, vt) : Bt, _t = ft ? Bt.slice(vt) : [], xt = te.length * D, Zt = Ne ? Math.max(0, Math.floor(Pr / D) - Mi) : 0, Na = Ne ? Math.ceil(j / D) + Mi * 2 : te.length, ka = Ne ? Math.min(te.length, Zt + Na) : te.length, Jt = Ne ? te.slice(Zt, ka) : te, ps = [
      Ae,
      H || I ? ve : void 0
    ].filter(Boolean).join(" "), Sa = (U, Se, Re) => {
      const { node: Me, keyStr: Ue, depth: nt, posInSet: pt, setSize: kr, hasChildren: Wr, isExpanded: Ca } = U, Qt = je.has(Ue), Ga = Se === Dt, Rt = He ? Ze.has(Ue) : dt.some((zt) => String(zt) === Ue), cr = He && Je.has(Ue), Vt = Qe(Me);
      return /* @__PURE__ */ i(
        "div",
        {
          ref: (zt) => {
            Nr.current[Ue] = zt;
          },
          role: "treeitem",
          "aria-level": nt + 1,
          "aria-posinset": pt,
          "aria-setsize": kr,
          "aria-expanded": Wr ? Ca : void 0,
          "aria-selected": He ? void 0 : Rt,
          "aria-checked": He && Me.checkable !== !1 ? cr ? "mixed" : Rt : void 0,
          "aria-disabled": Me.disabled || void 0,
          "data-testid": `tree-select-node-${Ue}`,
          "data-active": Ga ? "true" : void 0,
          style: {
            paddingLeft: `${nt * 18 + 8}px`,
            paddingRight: "8px",
            ...Re
          },
          onMouseEnter: () => {
            Me.disabled || Kt(Se);
          },
          onMouseDown: (zt) => zt.stopPropagation(),
          onClick: (zt) => {
            zt.preventDefault(), zt.stopPropagation(), Ct(Me);
          },
          className: h(
            "flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] text-xs transition-colors",
            !Ne && "py-1.5",
            Me.disabled ? "opacity-45 cursor-not-allowed" : Vt && f && Wr ? "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]" : Rt && !He ? "cursor-pointer bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : Ga ? "cursor-pointer bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: [
            Wr ? /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": `tree-select-expand-${Ue}`,
                "aria-label": Ca ? `收起 ${Me.title}` : `展开 ${Me.title}`,
                onClick: (zt) => {
                  zt.stopPropagation(), Oe(Me);
                },
                className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: Qt ? /* @__PURE__ */ e(mr, { className: "h-3 w-3 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }) : /* @__PURE__ */ e(
                  dr,
                  {
                    className: h(
                      "h-3.5 w-3.5 transition-transform duration-150",
                      Ca && "rotate-90"
                    ),
                    "aria-hidden": "true"
                  }
                )
              }
            ) : /* @__PURE__ */ e("span", { className: "inline-block h-4 w-4 shrink-0", "aria-hidden": "true" }),
            He && Me.checkable !== !1 && /* @__PURE__ */ e(
              "span",
              {
                className: "inline-flex shrink-0 items-center",
                onClick: (zt) => zt.stopPropagation(),
                onMouseDown: (zt) => zt.stopPropagation(),
                children: /* @__PURE__ */ e(
                  $a,
                  {
                    size: "xs",
                    tabIndex: -1,
                    "aria-label": Me.title,
                    disabled: Me.disabled,
                    checked: Rt,
                    indeterminate: cr,
                    onChange: (zt) => At(Me, zt)
                  }
                )
              }
            ),
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate", children: Hs(Me) }),
            Me.badge !== void 0 && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: Me.badge }),
            !He && Rt && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-primary)]", "aria-hidden": "true" })
          ]
        },
        Ue
      );
    };
    return /* @__PURE__ */ i(
      "div",
      {
        ref: Er,
        "data-slot": "tree-select-wrapper",
        className: h("w-full", se),
        children: [
          B && /* @__PURE__ */ i(
            "label",
            {
              htmlFor: Ve,
              className: "mb-1.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)] select-none",
              children: [
                /* @__PURE__ */ e("span", { children: B }),
                P && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" })
              ]
            }
          ),
          G && /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: G,
              value: ft ? jt.join(",") : String(dt[0] ?? "")
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              ref: $r,
              ...Fe,
              id: Ve,
              role: "combobox",
              tabIndex: Y ? -1 : 0,
              "aria-expanded": bt,
              "aria-haspopup": "tree",
              "aria-controls": Tr ? ae : void 0,
              "aria-invalid": wr || void 0,
              "aria-describedby": ps || void 0,
              "aria-disabled": Y || void 0,
              "aria-label": he || (typeof B == "string" ? B : K),
              "data-slot": "tree-select-trigger",
              "data-state": bt ? "open" : "closed",
              "data-motion": we,
              onKeyDown: Nt,
              onClick: (U) => {
                U.stopPropagation(), !Y && (bt ? lt(!1) : mt());
              },
              className: h(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                re === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : h(
                  "w-full px-2.5 py-1",
                  Jr,
                  ft ? yf[st] : xf[st],
                  bt && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  wr && "border-[var(--abc-danger)]",
                  Y && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                me
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: Bt.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: K }) : ft ? /* @__PURE__ */ i(qe, { children: [
                  Ke.map((U) => {
                    var Se;
                    return /* @__PURE__ */ i(
                      "span",
                      {
                        "data-testid": "tree-select-tag",
                        className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                        children: [
                          /* @__PURE__ */ e("span", { className: "max-w-32 truncate", children: U.label }),
                          !Y && !((Se = U.node) != null && Se.disabled) && /* @__PURE__ */ e(
                            "button",
                            {
                              type: "button",
                              "aria-label": `移除 ${U.title}`,
                              onClick: (Re) => {
                                Re.stopPropagation(), He && U.node ? At(U.node, !1) : at(
                                  dt.filter((Me) => String(Me) !== U.keyStr)
                                );
                              },
                              className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                              children: /* @__PURE__ */ e(St, { className: "h-2.5 w-2.5", "aria-hidden": "true" })
                            }
                          )
                        ]
                      },
                      U.keyStr
                    );
                  }),
                  _t.length > 0 && /* @__PURE__ */ i(
                    "span",
                    {
                      "data-testid": "tree-select-max-tag",
                      title: _t.map((U) => U.title).join("、"),
                      className: "inline-flex items-center rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)]",
                      children: [
                        "+",
                        _t.length
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (ta = Bt[0]) == null ? void 0 : ta.label }) }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  zr && Bt.length > 0 && !Y && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "tree-select-clear",
                      "aria-label": "清空",
                      onClick: (U) => {
                        U.stopPropagation(), at(ft ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    sr,
                    {
                      className: h(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        bt && "rotate-180"
                      ),
                      "aria-hidden": "true"
                    }
                  )
                ] })
              ]
            }
          ),
          Tr && z && xr(
            /* @__PURE__ */ i(
              "div",
              {
                ref: Or,
                "data-slot": "tree-select-popover",
                "data-abc-floating": "",
                "data-motion": we,
                "data-placement": Fr,
                onMouseDown: (U) => U.stopPropagation(),
                style: wa,
                className: h(
                  "z-[1500] max-w-[min(520px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                  F ? "min-w-full" : "min-w-[240px]",
                  Qr ? "abc-animate-popover-in" : "abc-animate-popover-out",
                  ye
                ),
                children: [
                  (It || fr) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                    It ? /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                      /* @__PURE__ */ e(
                        $t,
                        {
                          className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]",
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ e(
                        "input",
                        {
                          ref: ea,
                          type: "text",
                          autoFocus: !0,
                          "data-testid": "tree-select-search-input",
                          value: or,
                          onClick: (U) => U.stopPropagation(),
                          onKeyDown: Nt,
                          onChange: (U) => {
                            const Se = U.target.value;
                            R === void 0 && wt(Se), C == null || C(Se), Kt(0), hr(0), Ut.current && (Ut.current.scrollTop = 0);
                          },
                          placeholder: y,
                          className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                        }
                      )
                    ] }) : /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 text-[11px] font-medium text-[var(--abc-fg-muted)]", children: [
                      /* @__PURE__ */ e(tc, { className: "h-3 w-3", "aria-hidden": "true" }),
                      /* @__PURE__ */ e("span", { children: "节点结构" })
                    ] }),
                    fr && _e.treeNodes.length > 0 && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[11px]", children: [
                      /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "data-testid": "tree-select-expand-all",
                          onClick: (U) => {
                            U.stopPropagation(), ze(Ba(_e.treeNodes));
                          },
                          className: "rounded px-1.5 py-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: "展开全部"
                        }
                      ),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "data-testid": "tree-select-collapse-all",
                          onClick: (U) => {
                            U.stopPropagation(), ze([]);
                          },
                          className: "rounded px-1.5 py-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: "收起"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ e(
                    "div",
                    {
                      ref: Ut,
                      id: ae,
                      role: "tree",
                      "aria-label": he || (typeof B == "string" ? B : "树形选项列表"),
                      "aria-multiselectable": ft || void 0,
                      "data-tree-scroll-host": "",
                      "data-virtual": Ne ? "true" : "false",
                      onScroll: (U) => {
                        Ne && hr(U.currentTarget.scrollTop);
                      },
                      style: { maxHeight: `${j}px` },
                      className: "overflow-y-auto p-1",
                      children: te.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: Xe }) : Ne ? /* @__PURE__ */ e(
                        "div",
                        {
                          "data-testid": "tree-select-virtual-spacer",
                          style: {
                            height: `${xt}px`,
                            position: "relative"
                          },
                          children: Jt.map((U, Se) => {
                            const Re = Zt + Se;
                            return Sa(U, Re, {
                              position: "absolute",
                              top: `${Re * D}px`,
                              left: 0,
                              right: 0,
                              height: `${D}px`
                            });
                          })
                        }
                      ) : Jt.map((U, Se) => Sa(U, Se))
                    }
                  )
                ]
              }
            ),
            z
          ),
          H && /* @__PURE__ */ e("p", { id: ve, className: "mt-1 text-xs text-[var(--abc-danger)]", children: H }),
          I && !H && /* @__PURE__ */ e("p", { id: ve, className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: I })
        ]
      }
    );
  }
);
Ac.displayName = "TreeSelect";
const xn = Object.assign(Ac, {
  SHOW_ALL: "SHOW_ALL",
  SHOW_PARENT: "SHOW_PARENT",
  SHOW_CHILD: "SHOW_CHILD"
});
function Jh({
  triggerClassName: t,
  contentClassName: a,
  ...r
}) {
  return /* @__PURE__ */ e(
    xn,
    {
      ...r,
      className: t,
      dropdownClassName: a
    }
  );
}
const Lc = ["日", "一", "二", "三", "四", "五", "六"], Dc = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, yn = ct.forwardRef(
  ({
    value: t,
    defaultValue: a = "",
    onChange: r,
    placeholder: n = "请选择日期",
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: l,
    name: u,
    minDate: m,
    maxDate: p,
    size: f,
    motion: g,
    className: x
  }, w) => {
    const N = Be(f, "sm"), v = Te(g), S = Et(), M = l || S, L = ie(null), R = ie(null);
    rs(w, () => L.current, []);
    const C = t !== void 0, [y, E] = $(a), _ = C ? t ?? "" : y, [j, D] = $(!1), [B, H] = $({ top: 0, left: 0 }), [A, I] = $(
      () => _ && $e(_).isValid() ? $e(_) : $e()
    ), K = !!((s ?? o ?? !0) && _ && !d);
    fe(() => {
      j && I(
        _ && $e(_).isValid() ? $e(_) : $e()
      );
    }, [j, _]);
    const O = oe(() => b === !1 ? [] : Array.isArray(b) ? b : [
      { label: "今天", value: () => $e().format(c) },
      { label: "昨天", value: () => $e().subtract(1, "day").format(c) },
      { label: "明天", value: () => $e().add(1, "day").format(c) },
      { label: "一周前", value: () => $e().subtract(7, "day").format(c) }
    ], [b, c]);
    fe(() => {
      if (!j) return;
      const G = () => {
        if (!L.current || typeof window > "u") return;
        const re = L.current.getBoundingClientRect(), ee = O.length > 0 ? 340 : 300, me = 280, ye = window.innerHeight - re.bottom < ee && re.top > ee ? re.top - ee - 4 : re.bottom + 4;
        let F = re.left;
        F + me > window.innerWidth - 8 && (F = Math.max(8, window.innerWidth - me - 8)), H({ top: Math.max(8, ye), left: Math.max(8, F) });
      };
      return G(), window.addEventListener("resize", G), window.addEventListener("scroll", G, !0), () => {
        window.removeEventListener("resize", G), window.removeEventListener("scroll", G, !0);
      };
    }, [j, O.length]), fe(() => {
      if (!j) return;
      const G = (ee) => {
        var se, ye;
        const me = ee.target;
        (se = L.current) != null && se.contains(me) || (ye = R.current) != null && ye.contains(me) || D(!1);
      }, re = (ee) => {
        ee.key === "Escape" && (ee.preventDefault(), ee.stopPropagation(), D(!1));
      };
      return document.addEventListener("mousedown", G), document.addEventListener("keydown", re, !0), () => {
        document.removeEventListener("mousedown", G), document.removeEventListener("keydown", re, !0);
      };
    }, [j]);
    const V = (G) => {
      C || E(G), r == null || r(G);
    }, Y = oe(
      () => Js(A.year(), A.month()),
      [A]
    ), ce = oe(() => {
      if (!_) return "";
      const G = $e(_);
      return G.isValid() ? G.format("YYYY-MM-DD") : _;
    }, [_]);
    return /* @__PURE__ */ i(qe, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: L,
          id: M,
          "data-datepicker-trigger": "",
          "data-motion": v,
          role: "combobox",
          "aria-expanded": j,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && D((G) => !G),
          onKeyDown: (G) => {
            !d && (G.key === "Enter" || G.key === " ") && (G.preventDefault(), D((re) => !re));
          },
          className: h(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            Jr,
            Dc[N],
            j && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            x
          ),
          children: [
            /* @__PURE__ */ e(vo, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: n,
                value: _,
                name: u,
                tabIndex: -1,
                className: "w-full min-w-0 flex-1 bg-transparent p-0 font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            K && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (G) => {
                  G.stopPropagation(), V("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(St, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      j && typeof document < "u" && xr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: R,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": v,
            "aria-label": "日期选择面板",
            style: { top: B.top, left: B.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              O.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: O.map((G) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const re = typeof G.value == "function" ? G.value() : G.value;
                    V(re), D(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: G.label
                },
                G.label
              )) }),
              /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => I((G) => G.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(ic, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => I((G) => G.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Kn, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: A.format("YYYY 年 M 月") }),
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => I((G) => G.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(dr, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => I((G) => G.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(cc, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Lc.map((G) => /* @__PURE__ */ e("span", { className: "py-1", children: G }, G)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: Y.map((G) => {
                const re = $e(G.iso), ee = c === "YYYY-MM-DD" ? G.iso : re.format(c), me = G.iso === ce, se = !!(m && re.isBefore($e(m), "day") || p && re.isAfter($e(p), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": ee,
                    disabled: se,
                    onClick: () => {
                      se || (V(ee), D(!1));
                    },
                    className: h(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      me ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : G.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      G.isToday && !me && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: G.day
                  },
                  G.iso
                );
              }) })
            ]
          }
        ),
        ls(L.current) ?? document.body
      )
    ] });
  }
);
yn.displayName = "DatePicker";
function Ks(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const wn = ct.forwardRef(
  ({
    value: t,
    defaultValue: a,
    onChange: r,
    placeholder: n = ["开始日期", "结束日期"],
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: l,
    minDate: u,
    maxDate: m,
    size: p,
    motion: f,
    className: g
  }, x) => {
    const w = Be(p, "sm"), N = Te(f), v = Et(), S = l || v, M = ie(null), L = ie(null);
    rs(x, () => M.current, []);
    const R = Array.isArray(t) || t === void 0 && Array.isArray(a), C = t !== void 0, [y, E] = $(
      () => Ks(a)
    ), _ = C ? Ks(t) : y, [j, D] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [B, H] = $(!1), [A, I] = $({ top: 0, left: 0 }), [P, K] = $(null), [O, V] = $(null), [Y, ce] = $(
      () => _.start && $e(_.start).isValid() ? $e(_.start) : $e()
    ), G = oe(() => Y.add(1, "month"), [Y]), ee = !!((s ?? o ?? !0) && (_.start || _.end) && !d);
    fe(() => {
      B ? (K(null), V(null), ce(
        _.start && $e(_.start).isValid() ? $e(_.start) : $e()
      )) : (K(null), V(null));
    }, [B, _.start]);
    const me = oe(() => b === !1 ? [] : Array.isArray(b) ? b : [
      {
        label: "今天",
        getValue: () => {
          const he = $e().format(c);
          return { start: he, end: he };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: $e().subtract(6, "day").format(c),
          end: $e().format(c)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: $e().subtract(29, "day").format(c),
          end: $e().format(c)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: $e().startOf("month").format(c),
          end: $e().format(c)
        })
      }
    ], [b, c]);
    fe(() => {
      if (!B) return;
      const he = () => {
        if (!M.current || typeof window > "u") return;
        const Ae = M.current.getBoundingClientRect(), Fe = me.length > 0 ? 370 : 330, Ce = 556, we = window.innerHeight - Ae.bottom < Fe && Ae.top > Fe ? Ae.top - Fe - 4 : Ae.bottom + 4;
        let Pe = Ae.left;
        Pe + Ce > window.innerWidth - 8 && (Pe = Math.max(8, window.innerWidth - Ce - 8)), I({ top: Math.max(8, we), left: Math.max(8, Pe) });
      };
      return he(), window.addEventListener("resize", he), window.addEventListener("scroll", he, !0), () => {
        window.removeEventListener("resize", he), window.removeEventListener("scroll", he, !0);
      };
    }, [B, me.length]), fe(() => {
      if (!B) return;
      const he = (Fe) => {
        var st, we;
        const Ce = Fe.target;
        (st = M.current) != null && st.contains(Ce) || (we = L.current) != null && we.contains(Ce) || H(!1);
      }, Ae = (Fe) => {
        Fe.key === "Escape" && (Fe.preventDefault(), Fe.stopPropagation(), H(!1));
      };
      return document.addEventListener("mousedown", he), document.addEventListener("keydown", Ae, !0), () => {
        document.removeEventListener("mousedown", he), document.removeEventListener("keydown", Ae, !0);
      };
    }, [B]);
    const se = (he) => {
      C || E(he), R ? r == null || r([he.start, he.end]) : r == null || r(he);
    }, ye = oe(() => {
      if (P) {
        const he = $e(P);
        if (!O) return { start: he, end: null };
        const Ae = $e(O);
        return Ae.isBefore(he, "day") ? { start: Ae, end: he } : { start: he, end: Ae };
      }
      return {
        start: _.start && $e(_.start).isValid() ? $e(_.start) : null,
        end: _.end && $e(_.end).isValid() ? $e(_.end) : null
      };
    }, [P, O, _]), F = oe(
      () => Js(Y.year(), Y.month()),
      [Y]
    ), Z = oe(
      () => Js(G.year(), G.month()),
      [G]
    ), De = (he) => {
      const Ae = $e(he), Fe = c === "YYYY-MM-DD" ? he : Ae.format(c);
      if (!P) {
        K(Fe), V(null);
        return;
      }
      const Ce = $e(P), [st, we] = Ae.isBefore(Ce, "day") ? [Ae, Ce] : [Ce, Ae];
      se({ start: st.format(c), end: we.format(c) }), K(null), V(null), H(!1);
    }, Xe = (he, Ae, Fe) => /* @__PURE__ */ i("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
        Fe === "left" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => ce((Ce) => Ce.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(ic, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => ce((Ce) => Ce.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Kn, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: he.format("YYYY 年 M 月") }),
        Fe === "right" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => ce((Ce) => Ce.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(dr, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => ce((Ce) => Ce.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(cc, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Lc.map((Ce) => /* @__PURE__ */ e("span", { className: "py-1", children: Ce }, Ce)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: Ae.map((Ce) => {
        const st = $e(Ce.iso), we = c === "YYYY-MM-DD" ? Ce.iso : st.format(c), Pe = !!(ye.start && st.isSame(ye.start, "day")), Ve = !!(ye.end && st.isSame(ye.end, "day")), ae = !!(ye.start && ye.end && st.isAfter(ye.start, "day") && st.isBefore(ye.end, "day")), ve = !!(u && st.isBefore($e(u), "day") || m && st.isAfter($e(m), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": we,
            disabled: ve,
            onMouseEnter: () => P && V(we),
            onClick: () => !ve && De(Ce.iso),
            className: h(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              Pe || Ve ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : ae ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : Ce.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              Ce.isToday && !Pe && !Ve && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: Ce.day
          },
          `${Fe}-${Ce.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ i(qe, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: M,
          id: S,
          "data-daterangepicker-trigger": "",
          "data-motion": N,
          role: "combobox",
          "aria-expanded": B,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && H((he) => !he),
          onKeyDown: (he) => {
            !d && (he.key === "Enter" || he.key === " ") && (he.preventDefault(), H((Ae) => !Ae));
          },
          className: h(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            Jr,
            Dc[w],
            B && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            g
          ),
          children: [
            /* @__PURE__ */ e(vo, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: j,
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
                placeholder: D,
                value: _.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            ee && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (he) => {
                  he.stopPropagation(), se({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(St, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      B && typeof document < "u" && xr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: L,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": N,
            "aria-label": "日期范围选择面板",
            style: { top: A.top, left: A.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              me.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: me.map((he) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const Ae = he.getValue(), Fe = Ks(Ae);
                    se(Fe), K(null), V(null), H(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: he.label
                },
                he.label
              )) }),
              /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: Xe(Y, F, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: Xe(G, Z, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: P ? `已选起始日：${P}，请继续点击截止日期` : _.start && _.end ? `已选区间：${_.start} 至 ${_.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        ls(M.current) ?? document.body
      )
    ] });
  }
);
wn.displayName = "DateRangePicker";
const Nf = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, kf = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function Sf(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function Cf(t) {
  return new Promise((a, r) => {
    const n = new FileReader();
    n.onload = () => a(String(n.result || "")), n.onerror = () => r(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const Rc = ({
  value: t = "",
  onChange: a,
  label: r,
  helperText: n,
  error: s,
  accept: o = "image/*,.svg",
  maxSizeMB: d = 5,
  disabled: c = !1,
  customUpload: b,
  size: l,
  motion: u,
  placeholder: m = "点击或拖拽图片至此处上传",
  className: p
}) => {
  const f = Be(l, "sm"), g = Te(u), x = Et(), w = ie(null), { uploadAdapter: N, toast: v } = Mt(), [S, M] = $(!1), [L, R] = $(!1), [C, y] = $(!1), E = async (D) => {
    if (!D || c || S) return;
    if (!(D.type.startsWith("image/") || D.name.toLowerCase().endsWith(".svg"))) {
      v.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (D.size >= d * 1024 * 1024) {
      v.error(`上传图片大小不能超过 ${d}MB`);
      return;
    }
    M(!0);
    try {
      const A = await (b ?? N ?? Cf)(D);
      A ? (a == null || a(A), v.success("上传成功")) : v.error("上传失败，未获取到图片地址");
    } catch (H) {
      v.error((H == null ? void 0 : H.message) || "上传图片失败，请重试");
    } finally {
      M(!1), w.current && (w.current.value = "");
    }
  }, _ = (t == null ? void 0 : t.trim()) ?? "", j = Sf(_);
  return /* @__PURE__ */ i("div", { "data-motion": g, className: "w-full", children: [
    r && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: x,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: r
      }
    ),
    /* @__PURE__ */ e(
      "input",
      {
        ref: w,
        id: x,
        type: "file",
        accept: o,
        disabled: c || S,
        onChange: (D) => {
          var B;
          return E((B = D.target.files) == null ? void 0 : B[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        onClick: () => {
          var D;
          !_ && !c && !S && ((D = w.current) == null || D.click());
        },
        onDragOver: (D) => {
          D.preventDefault(), D.stopPropagation(), !c && !S && R(!0);
        },
        onDragLeave: (D) => {
          D.preventDefault(), D.stopPropagation(), R(!1);
        },
        onDrop: (D) => {
          var B;
          D.preventDefault(), D.stopPropagation(), R(!1), !c && !S && E((B = D.dataTransfer.files) == null ? void 0 : B[0]);
        },
        className: h(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          L ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !c && !L && "hover:border-[var(--abc-primary)]",
          !_ && !c && "cursor-pointer",
          c && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          Nf[f],
          p
        ),
        children: [
          _ ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: h(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  kf[f]
                ),
                children: [
                  j ? /* @__PURE__ */ e(
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
                      onClick: (D) => {
                        D.stopPropagation(), y(!0);
                      },
                      className: "absolute inset-0 flex items-center justify-center bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
                      children: /* @__PURE__ */ e(Ha, { className: "h-4 w-4" })
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
                    disabled: S,
                    onClick: (D) => {
                      var B;
                      D.stopPropagation(), (B = w.current) == null || B.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(ga, { className: h("h-3 w-3", S && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: S,
                    onClick: (D) => {
                      D.stopPropagation(), a == null || a("");
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-danger)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "删除" })
                    ]
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Eu, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: m }),
            /* @__PURE__ */ i("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              d,
              "MB"
            ] })
          ] }),
          S && /* @__PURE__ */ i("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(mr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "正在上传中..." })
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: s }),
    n && !s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: n }),
    /* @__PURE__ */ e(
      yr,
      {
        open: C,
        onClose: () => y(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: j ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: _ }
          }
        ) : /* @__PURE__ */ e("img", { src: _, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, _f = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, Qh = ({
  treeData: t,
  checkable: a = !1,
  checkStrictly: r = !1,
  checkedKeys: n,
  defaultCheckedKeys: s = [],
  onCheck: o,
  selectedKeys: d,
  onSelect: c,
  defaultExpandAll: b = !0,
  searchable: l = !1,
  searchPlaceholder: u = "搜索节点名称（支持拼音首字母）...",
  showToolbar: m = !1,
  size: p,
  motion: f,
  renderExtra: g,
  className: x
}) => {
  const w = Be(p, "sm"), N = Te(f), [v, S] = $(""), [M, L] = $(
    () => b ? new Set(Ba(t)) : /* @__PURE__ */ new Set()
  ), [R, C] = $(s), [y, E] = $([]);
  fe(() => {
    b && t.length > 0 && M.size === 0 && L(new Set(Ba(t)));
  }, [t, b]);
  const _ = n !== void 0 ? n : R, j = d !== void 0 ? d : y, { checkedKeys: D, halfCheckedKeys: B } = oe(
    () => xo(t, _, r),
    [t, _, r]
  ), H = oe(() => new Set(D), [D]), A = oe(() => new Set(B), [B]), { filteredNodes: I, autoExpandedKeys: P } = oe(
    () => Qu(t, v),
    [t, v]
  ), K = oe(() => v.trim() ? /* @__PURE__ */ new Set([...M, ...P]) : M, [M, P, v]), O = (G) => {
    L((re) => {
      const ee = new Set(re);
      return ee.has(G) ? ee.delete(G) : ee.add(G), ee;
    });
  }, V = (G, re) => {
    const ee = mc(t, D, G, re, r);
    n === void 0 && C(ee.checkedKeys), o == null || o(ee.checkedKeys, {
      halfCheckedKeys: ee.halfCheckedKeys,
      node: G,
      checked: re
    });
  }, Y = (G) => {
    if (G.disabled) return;
    const re = [G.key];
    d === void 0 && E(re), c == null || c(re, G);
  }, ce = (G, re = 0) => /* @__PURE__ */ e("ul", { role: re === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: G.map((ee) => {
    const me = !!(ee.children && ee.children.length > 0), se = K.has(ee.key), ye = H.has(ee.key), F = A.has(ee.key), Z = j.includes(ee.key);
    return /* @__PURE__ */ i("li", { role: "treeitem", "aria-expanded": me ? se : void 0, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { paddingInlineStart: `${re * 18 + 6}px` },
          className: h(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            _f[w],
            Z ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            ee.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              me ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": se ? `收起 ${ee.title}` : `展开 ${ee.title}`,
                  onClick: () => O(ee.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    dr,
                    {
                      className: h(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        se && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              a && /* @__PURE__ */ e(
                $a,
                {
                  size: w,
                  motion: N,
                  checked: ye,
                  indeterminate: F,
                  disabled: ee.disabled,
                  onChange: (De) => V(ee, De)
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  disabled: ee.disabled,
                  onClick: () => {
                    a && !c ? V(ee, !ye) : Y(ee);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    ee.icon && /* @__PURE__ */ e(jr, { name: ee.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: ee.title })
                  ]
                }
              )
            ] }),
            g && /* @__PURE__ */ e("div", { className: "shrink-0", children: g(ee) })
          ]
        }
      ),
      me && se && ce(ee.children, re + 1)
    ] }, ee.key);
  }) });
  return /* @__PURE__ */ i("div", { "data-motion": N, className: h("space-y-2", x), children: [
    (l || m) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
      l && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        gt,
        {
          size: w,
          motion: N,
          allowClear: !0,
          prefix: /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }),
          placeholder: u,
          value: v,
          onChange: (G) => S(G.target.value)
        }
      ) }),
      m && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => L(new Set(Ba(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Mu, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => L(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Au, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: I.length > 0 ? ce(I) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, If = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Tf = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, Ef = ({
  value: t,
  defaultValue: a = [],
  onChange: r,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: o = !1,
  size: d,
  motion: c,
  className: b
}) => {
  const l = Be(d, "sm"), u = Te(c), [m, p] = $(a), [f, g] = $(""), x = t !== void 0 ? t : m, w = (S) => {
    t === void 0 && p(S), r == null || r(S);
  }, N = () => {
    const S = f.trim();
    if (!(!S || o)) {
      if (x.includes(S) || x.length >= s) {
        g("");
        return;
      }
      w([...x, S]), g("");
    }
  }, v = (S) => {
    o || w(x.filter((M, L) => L !== S));
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": u,
      className: h(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        If[l],
        Jr,
        o && "opacity-65 cursor-not-allowed",
        b
      ),
      children: [
        x.map((S, M) => /* @__PURE__ */ i(
          "span",
          {
            className: h(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              Tf[l]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: S }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${S}`,
                  onClick: () => v(M),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(St, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${S}_${M}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: o || x.length >= s,
            value: f,
            placeholder: x.length === 0 ? n : "",
            onChange: (S) => g(S.target.value),
            onBlur: N,
            onKeyDown: (S) => {
              S.key === "Enter" || S.key === "," ? (S.preventDefault(), N()) : S.key === "Backspace" && !f && x.length > 0 && v(x.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function Li(t, a) {
  const r = Math.floor(95 + Math.random() * Math.max(40, t - 165)), n = Math.floor(24 + Math.random() * Math.max(20, a - 80)), s = `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${a}" viewBox="0 0 ${t} ${a}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1e3a8a"/>
        <stop offset="55%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#0f766e"/>
      </linearGradient>
    </defs>
    <rect width="${t}" height="${a}" fill="url(#g)"/>
    <circle cx="${Math.round(t * 0.22)}" cy="${Math.round(a * 0.32)}" r="46" fill="rgba(255,255,255,0.08)"/>
    <circle cx="${Math.round(t * 0.78)}" cy="${Math.round(a * 0.7)}" r="58" fill="rgba(255,255,255,0.07)"/>
    <rect x="${r}" y="${n}" width="44" height="44" rx="8" fill="rgba(15,23,42,0.58)" stroke="rgba(255,255,255,0.65)" stroke-width="1.5"/>
  </svg>`;
  return {
    nonceStr: `local_${Date.now().toString(36)}`,
    canvasSrc: `data:image/svg+xml;utf8,${encodeURIComponent(s)}`,
    blockSrc: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
    <rect x="1" y="1" width="42" height="42" rx="8" fill="#38bdf8" fill-opacity="0.88" stroke="#ffffff" stroke-width="2"/>
  </svg>`)}`,
    blockY: n,
    targetX: r
  };
}
const Mf = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, eg = ({
  canvasWidth: t = 320,
  canvasHeight: a = 155,
  size: r,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: d
}) => {
  const c = Be(r, "md"), b = Te(n), { captchaAdapter: l } = Mt(), u = d ?? l, [m, p] = $(null), [f, g] = $(!0), [x, w] = $(!1), [N, v] = $(!1), [S, M] = $(0), [L, R] = $(0), C = ie(!1), y = ie(0), E = ie(0), _ = de(async () => {
    g(!0), w(!1), v(!1), M(0), R(0);
    try {
      if (u) {
        const H = await u();
        p(H);
      } else
        p(Li(t, a));
    } catch {
      p(Li(t, a));
    } finally {
      g(!1);
    }
  }, [u, t, a]);
  fe(() => {
    _();
  }, [_]);
  const j = (H) => {
    f || x || (C.current = !0, y.current = H, E.current = Date.now());
  }, D = de(
    (H) => {
      if (!C.current || f || x) return;
      const A = H - y.current, I = t - 40, P = Math.max(0, Math.min(I, A));
      M(P), R((t - 60) / I * P);
    },
    [t, f, x]
  ), B = de(() => {
    if (!C.current || f || x) return;
    if (C.current = !1, Date.now() - E.current > 1e4 || !m) {
      v(!0), o == null || o(), setTimeout(_, 600);
      return;
    }
    const A = Math.round(L);
    if (typeof m.targetX == "number" && Math.abs(A - m.targetX) > 10) {
      v(!0), o == null || o(), setTimeout(_, 550);
      return;
    }
    w(!0), s({
      nonceStr: m.nonceStr,
      value: A
    });
  }, [L, m, f, x, o, s, _]);
  return fe(() => {
    const H = (K) => D(K.clientX), A = () => B(), I = (K) => {
      K.touches[0] && D(K.touches[0].clientX);
    }, P = () => B();
    return window.addEventListener("mousemove", H), window.addEventListener("mouseup", A), window.addEventListener("touchmove", I), window.addEventListener("touchend", P), () => {
      window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", A), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", P);
    };
  }, [D, B]), /* @__PURE__ */ i("div", { "data-motion": b, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: a },
        children: [
          f ? /* @__PURE__ */ i("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : m && /* @__PURE__ */ i(qe, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: m.canvasSrc,
                alt: "安全验证背景",
                className: "pointer-events-none h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(
              "img",
              {
                src: m.blockSrc,
                alt: "安全验证滑块",
                className: "pointer-events-none absolute drop-shadow-md",
                style: { top: m.blockY, left: L }
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
              children: /* @__PURE__ */ e(ss, { className: h("h-3.5 w-3.5", f && "animate-spin") })
            }
          ),
          x && /* @__PURE__ */ i("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(Xr, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: h(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          Mf[c],
          x ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : N ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        ),
        style: { width: t },
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: h(
                "absolute inset-y-0 left-0",
                x ? "bg-[var(--abc-success)]/20" : "bg-[var(--abc-primary)]/20"
              ),
              style: { width: S + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: x ? "验证成功" : N ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(S),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: (H) => j(H.clientX),
              onTouchStart: (H) => {
                H.touches[0] && j(H.touches[0].clientX);
              },
              className: h(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                x ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: S },
              children: x ? /* @__PURE__ */ e(Xr, { className: "h-4 w-4" }) : /* @__PURE__ */ e(lc, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}, Qn = ["B", "KB", "MB", "GB", "TB"], es = ["s", "m", "h", "d"], jc = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
}, Bc = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400
}, Af = ["TB", "GB", "MB", "KB", "B"], Lf = ["h", "m", "d", "s"];
function ts(t, a = 2) {
  return Number.isFinite(t) ? t.toFixed(a).replace(/\.?0+$/, "") : "0";
}
function zc(t, a) {
  if (a === "zh")
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
function Pc(t, a, r, n, s, o, d) {
  const c = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (c === 0)
    return { unit: n.includes(a) ? a : n[n.length - 1], amount: "0" };
  for (const l of s) {
    if (!n.includes(l)) continue;
    const u = o[l];
    if (c >= u && c % u === 0)
      return { unit: l, amount: String(c / u) };
  }
  const b = n.includes(r) ? r : n[0];
  return {
    unit: b,
    amount: ts(c / o[b], d)
  };
}
function Oc(t, a = "GB", r = Qn) {
  const n = r.length > 0 ? r : Qn;
  return Pc(t, a, "B", n, Af, jc, 4);
}
function $c(t, a = "h", r = es) {
  const n = r.length > 0 ? r : es;
  return Pc(
    t,
    a,
    "s",
    n,
    Lf,
    Bc,
    2
  );
}
function tg(t, a = "en", r) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && r) return r;
  const { unit: s, amount: o } = Oc(n);
  return `${o} ${s}`;
}
function rg(t, a = "en", r) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && r) return r;
  const { unit: s, amount: o } = $c(n);
  return `${o} ${zc(s, a)}`;
}
function Df(t, a, r) {
  let n = Math.max(a, Math.round(t));
  return typeof r == "number" && Number.isFinite(r) && (n = Math.min(r, n)), n;
}
function Fc({
  id: t,
  fallbackIdSuffix: a,
  value: r,
  onChange: n,
  min: s = 0,
  max: o,
  size: d = "default",
  disabled: c = !1,
  hideHint: b = !1,
  className: l,
  resolvedUnitLabel: u,
  factors: m,
  allowedUnits: p,
  pickBest: f,
  formatUnitLabel: g,
  buildHintText: x,
  "aria-label": w,
  "aria-describedby": N,
  placeholder: v
}) {
  const S = ge.useId(), M = t ?? `${S}-${a}`, L = `${M}-hint`, R = Number.isFinite(r) && r >= 0 ? Math.round(r) : 0, C = ge.useMemo(
    () => f(R),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [y, E] = ge.useState(C.unit), [_, j] = ge.useState(C.amount), D = ge.useRef(R);
  ge.useEffect(() => {
    if (R === D.current) return;
    D.current = R;
    const K = f(R);
    E(K.unit), j(K.amount);
  }, [R, f]);
  const B = m[y], H = (K) => {
    const O = K.target.value;
    if (O !== "" && !/^\d*\.?\d*$/.test(O) || (j(O), O.trim() === "")) return;
    const V = Number(O);
    if (!Number.isFinite(V) || V < 0) return;
    const Y = Df(V * B, s, o);
    D.current = Y, n(Y);
  }, A = (K) => {
    const O = K.target.value;
    if (!p.includes(O)) return;
    E(O);
    const V = m[O];
    j(R === 0 ? "0" : ts(R / V, 2));
  }, I = () => {
    (_.trim() === "" || !Number.isFinite(Number(_)) || Number(_) < 0) && j(R === 0 ? "0" : ts(R / B, 2));
  }, P = [N, b ? void 0 : L].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ i("div", { className: h("space-y-1", l), children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: h(
          "flex items-stretch rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-surface,#ffffff)] shadow-2xs transition-colors focus-within:border-[var(--abc-primary,#2563eb)] focus-within:ring-1 focus-within:ring-[var(--abc-primary,#2563eb)] overflow-hidden w-full",
          c && "opacity-50 cursor-not-allowed",
          d === "sm" ? "h-8" : "h-9"
        ),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: M,
              type: "number",
              step: B === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: c,
              value: _,
              "aria-label": w,
              "aria-describedby": P,
              placeholder: v,
              onChange: H,
              onBlur: I,
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
                "aria-label": u,
                disabled: c,
                value: y,
                onChange: A,
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
                children: p.map((K) => /* @__PURE__ */ e("option", { value: K, className: "bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]", children: g(K) }, K))
              }
            ),
            /* @__PURE__ */ e(sr, { className: "pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" })
          ] })
        ]
      }
    ),
    !b && /* @__PURE__ */ e("div", { id: L, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: x(R, y) }) })
  ] });
}
function ag({
  locale: t = "en",
  zeroMeansUnlimited: a = !0,
  defaultZeroUnit: r = "GB",
  allowedUnits: n = Qn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : Qn, c = ge.useCallback(
    (u) => Oc(u, r, d),
    [r, d]
  ), b = ge.useCallback((u) => u, []), l = ge.useCallback(
    (u) => u === 0 && a ? t === "zh" ? "= 0 (无上限)" : "= 0 (Unlimited)" : `= ${u.toLocaleString()} Bytes`,
    [t, a]
  );
  return /* @__PURE__ */ e(
    Fc,
    {
      ...o,
      fallbackIdSuffix: "bytes",
      factors: jc,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "字节单位" : "Byte unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: l
    }
  );
}
function ng({
  locale: t = "en",
  zeroMeansUnlimited: a = !0,
  defaultZeroUnit: r = "h",
  allowedUnits: n = es,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : es, c = ge.useCallback(
    (u) => $c(u, r, d),
    [r, d]
  ), b = ge.useCallback(
    (u) => zc(u, t),
    [t]
  ), l = ge.useCallback(
    (u, m) => {
      if (u === 0 && a)
        return t === "zh" ? "= 0 秒 (无上限)" : "= 0s (Unlimited)";
      if (m === "s") {
        const p = ts(u / 3600, 2);
        return t === "zh" ? `≈ ${p} 小时 (${u.toLocaleString()} 秒)` : `≈ ${p} hr (${u.toLocaleString()}s)`;
      }
      return `= ${u.toLocaleString()} ${t === "zh" ? "秒" : "Seconds"}`;
    },
    [t, a]
  );
  return /* @__PURE__ */ e(
    Fc,
    {
      ...o,
      fallbackIdSuffix: "duration",
      factors: Bc,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: l
    }
  );
}
function sg({
  items: t,
  activeKey: a,
  value: r,
  defaultActiveKey: n,
  onChange: s,
  variant: o = "line",
  size: d,
  motion: c,
  ariaLabel: b = "内容切换标签",
  extra: l,
  className: u,
  panelClassName: m
}) {
  var M;
  const p = Be(d, "md"), f = Te(c), g = Et(), [x, w] = _r({
    value: a ?? r,
    defaultValue: n ?? ((M = t[0]) == null ? void 0 : M.key) ?? "",
    onChange: s
  }), N = (L, R) => {
    const C = t.filter((E) => !E.disabled);
    if (C.length === 0) return;
    const y = C.findIndex((E) => {
      var _;
      return E.key === ((_ = t[R]) == null ? void 0 : _.key);
    });
    if (L.key === "ArrowRight") {
      L.preventDefault();
      const E = C[(y + 1) % C.length];
      E && w(E.key);
    } else if (L.key === "ArrowLeft") {
      L.preventDefault();
      const E = C[(y - 1 + C.length) % C.length];
      E && w(E.key);
    }
  }, v = t.some((L) => L.children !== void 0), S = p === "xs" ? "px-2.5 py-1 text-[11px]" : p === "sm" ? "px-3 py-1.5 text-xs" : p === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ i("div", { "data-motion": f, className: h("w-full", u), children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: h(
          "flex items-center justify-between gap-3",
          o === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": b,
              className: h(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((L, R) => {
                const C = L.key === x, y = `${g}-tab-${L.key}`;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    id: y,
                    type: "button",
                    role: "tab",
                    "aria-selected": C,
                    tabIndex: C ? 0 : -1,
                    disabled: L.disabled,
                    onClick: () => !L.disabled && w(L.key),
                    onKeyDown: (E) => N(E, R),
                    className: h(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      S,
                      o === "line" ? h(
                        "abc-tab-trigger",
                        C ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? h(
                        "rounded-[var(--abc-radius-sm)]",
                        C ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : h(
                        "rounded-[var(--abc-radius-md)] border",
                        C ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]"
                      )
                    ),
                    children: [
                      L.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: L.icon }),
                      /* @__PURE__ */ e("span", { children: L.label }),
                      L.badge !== void 0 && (typeof L.badge == "number" || typeof L.badge == "string" ? /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums", children: L.badge }) : L.badge)
                    ]
                  },
                  L.key
                );
              })
            }
          ),
          l && /* @__PURE__ */ e("div", { className: "shrink-0", children: l })
        ]
      }
    ),
    v && /* @__PURE__ */ e("div", { children: t.map((L) => {
      const R = L.key === x, C = `${g}-tab-${L.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": C,
          tabIndex: R ? 0 : void 0,
          ...R ? {} : { hidden: "until-found" },
          children: R && /* @__PURE__ */ e("div", { className: h("pt-4", f !== "none" && "abc-animate-fade-in", m), children: L.children })
        },
        L.key
      );
    }) })
  ] });
}
const Di = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function Wc(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const Nn = ({
  src: t,
  alt: a = "图片预览",
  size: r,
  motion: n,
  width: s,
  height: o,
  rounded: d = !1,
  fit: c = "contain",
  placeholder: b,
  className: l,
  zoomable: u = !0
}) => {
  const m = Be(r, "sm"), p = Te(n), f = s ?? Di[m], g = o ?? Di[m], [x, w] = $(!1), [N, v] = $(!1), [S, M] = $(1), [L, R] = $(0), C = typeof t == "string" ? t.trim() : "", y = Wc(C), E = oe(() => C ? y && C.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(C)}` : C : "", [C, y]);
  if (fe(() => {
    w(!1);
  }, [C]), !C || x)
    return b ? /* @__PURE__ */ e(qe, { children: b }) : /* @__PURE__ */ e(
      "div",
      {
        "data-motion": p,
        title: x ? "图片加载失败，请检查 URL 是否有效" : "暂无图片",
        style: {
          width: f,
          height: g,
          minWidth: typeof f == "number" ? f : void 0
        },
        className: h(
          "inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          x && "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]",
          l
        ),
        children: x ? /* @__PURE__ */ e(ia, { className: "h-4 w-4" }) : /* @__PURE__ */ e(ec, { className: "h-4 w-4" })
      }
    );
  const _ = (j) => {
    j.stopPropagation(), u && (M(1), R(0), v(!0));
  };
  return /* @__PURE__ */ i(qe, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        "data-motion": p,
        title: "点击预览大图 / 矢量图",
        "aria-label": u ? `预览 ${a}` : void 0,
        onClick: _,
        onKeyDown: (j) => {
          u && (j.key === "Enter" || j.key === " ") && (j.preventDefault(), _(j));
        },
        style: {
          width: f,
          height: g,
          minWidth: typeof f == "number" ? f : void 0
        },
        className: h(
          "abc-motion-control group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          u && "cursor-zoom-in hover:border-[var(--abc-primary)]",
          l
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: E,
              alt: a,
              onError: () => w(!0),
              className: h(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                y || c === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          u && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e(Ha, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ i(
      yr,
      {
        open: N,
        onClose: () => v(!1),
        title: a,
        size: "lg",
        motion: p,
        footer: /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => M((j) => Math.max(0.4, Number((j - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Lu, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ i("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(S * 100),
            "%"
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => M((j) => Math.min(3, Number((j + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Du, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => R((j) => (j + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(ss, { className: "h-3.5 w-3.5" }),
                " 旋转"
              ]
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6", children: /* @__PURE__ */ e(
            "div",
            {
              style: { transform: `scale(${S}) rotate(${L}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: E, alt: a, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, og = ({
  title: t,
  extra: a,
  items: r,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const b = Be(o, "sm"), l = Te(d), u = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", p = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[b];
  return /* @__PURE__ */ i("div", { "data-motion": l, className: h("space-y-2.5", c), children: [
    (t || a) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: h("font-semibold text-[var(--abc-fg)]", b === "lg" ? "text-sm" : "text-xs"), children: t }),
      a && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: a })
    ] }),
    /* @__PURE__ */ e(
      "dl",
      {
        className: h(
          "m-0 grid",
          u,
          s ? "overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px" : "gap-x-6 gap-y-3"
        ),
        children: r.map((f, g) => {
          const x = f.span && f.span >= n ? "sm:col-span-full" : f.span === 2 ? "sm:col-span-2" : f.span === 3 ? "lg:col-span-3" : void 0;
          return s ? /* @__PURE__ */ i(
            "div",
            {
              className: h("flex min-w-0 bg-[var(--abc-bg-surface)]", x),
              children: [
                /* @__PURE__ */ e(
                  "dt",
                  {
                    className: h(
                      "w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center",
                      p
                    ),
                    children: f.label
                  }
                ),
                /* @__PURE__ */ e("dd", { className: h("m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center", p), children: f.children ?? "-" })
              ]
            },
            f.key ?? g
          ) : /* @__PURE__ */ i("div", { className: h("min-w-0 space-y-0.5", x), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: f.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: f.children ?? "-" })
          ] }, f.key ?? g);
        })
      }
    )
  ] });
}, Rf = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, jf = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, ig = ({
  items: t,
  accordion: a = !1,
  defaultActiveKeys: r = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: d,
  className: c
}) => {
  const b = Et(), l = Be(o, "sm"), u = Te(d), [m, p] = $(r), f = n !== void 0 ? n : m, g = (x, w) => {
    let N;
    a ? N = w ? [x] : [] : N = w ? Array.from(/* @__PURE__ */ new Set([...f, x])) : f.filter((v) => v !== x), n === void 0 && p(N), s == null || s(N);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-motion": u,
      className: h(
        "divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        c
      ),
      children: t.map((x) => {
        const w = f.includes(x.key);
        return /* @__PURE__ */ i(
          "details",
          {
            name: a ? b : void 0,
            open: w,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ i(
                "summary",
                {
                  "aria-disabled": x.disabled || void 0,
                  onClick: (N) => {
                    N.preventDefault(), !x.disabled && g(x.key, !w);
                  },
                  className: h(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Rf[l],
                    x.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        sr,
                        {
                          className: h(
                            "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-fast)]",
                            w ? "rotate-0" : "-rotate-90"
                          )
                        }
                      ),
                      /* @__PURE__ */ e("span", { className: "truncate", children: x.label })
                    ] }),
                    x.extra && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: x.extra })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: h(
                    "border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] leading-relaxed text-[var(--abc-fg-secondary)]",
                    jf[l]
                  ),
                  children: x.children
                }
              )
            ]
          },
          x.key
        );
      })
    }
  );
}, Bf = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, cg = ({ items: t, size: a, motion: r, className: n }) => {
  const s = Be(a, "sm"), o = Te(r), d = {
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
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: h("m-0 list-none space-y-0 p-0", n), children: t.map((l, u) => {
    const m = u === t.length - 1, p = l.tone ?? "primary";
    return /* @__PURE__ */ i("li", { className: h("relative flex", d[s]), children: [
      !m && /* @__PURE__ */ e(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
        }
      ),
      /* @__PURE__ */ e("span", { className: "relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center", children: l.icon ? l.icon : /* @__PURE__ */ e(
        "span",
        {
          className: h(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            Bf[p]
          )
        }
      ) }),
      /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: h("font-medium text-[var(--abc-fg)]", c[s]), children: l.title }),
          l.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: l.time })
        ] }),
        l.description && /* @__PURE__ */ e("div", { className: h("leading-relaxed text-[var(--abc-fg-muted)]", b[s]), children: l.description })
      ] })
    ] }, l.key ?? u);
  }) });
}, Hc = ge.forwardRef(
  ({
    value: t,
    displayValue: a,
    copyLabel: r = "复制",
    copiedLabel: n = "已复制",
    hideCopyButton: s = !1,
    className: o,
    codeClassName: d,
    ...c
  }, b) => {
    const [l, u] = ge.useState(!1), m = async (p) => {
      if (p.stopPropagation(), !t) return;
      await us(t) && (u(!0), setTimeout(() => u(!1), 1600));
    };
    return /* @__PURE__ */ i(
      "span",
      {
        ref: b,
        "data-slot": "copyable-code",
        "data-copied": l ? "true" : void 0,
        className: h("inline-flex max-w-full items-center gap-1.5 align-baseline", o),
        ...c,
        children: [
          /* @__PURE__ */ e(
            "code",
            {
              title: t,
              className: h(
                "break-all rounded bg-[var(--abc-bg-subtle,#f1f5f9)] px-1.5 py-0.5 font-mono text-xs text-[var(--abc-fg,#0f172a)]",
                d
              ),
              children: a ?? t
            }
          ),
          !s && t ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: m,
              "aria-label": l ? n : `${r}: ${t}`,
              title: l ? n : r,
              className: h(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                l && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: l ? /* @__PURE__ */ e(kt, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(va, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
Hc.displayName = "CopyableCode";
const zf = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
  full: "col-span-full"
}, jo = ge.forwardRef(
  ({
    label: t,
    value: a,
    children: r,
    mono: n = !1,
    copyValue: s,
    span: o = 1,
    variant: d = "default",
    className: c,
    valueClassName: b,
    ...l
  }, u) => {
    const m = r ?? a;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: u,
        "data-slot": "description-item",
        className: h(
          "min-w-0",
          d === "cards" && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]",
          d === "divided" && "border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0",
          zf[o],
          c
        ),
        ...l,
        children: [
          /* @__PURE__ */ e(
            "dt",
            {
              "data-slot": "description-term",
              className: h(
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
              className: h(
                "mt-1 break-all text-xs text-[var(--abc-fg,#0f172a)]",
                d === "compact" && "mt-0.5 text-xs",
                n && "font-mono text-xs",
                b
              ),
              children: s ? /* @__PURE__ */ e(
                Hc,
                {
                  value: s,
                  displayValue: m,
                  codeClassName: "bg-transparent px-0 py-0 text-inherit"
                }
              ) : m
            }
          )
        ]
      }
    );
  }
);
jo.displayName = "DescriptionItem";
const lg = jo, Pf = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Kc = ge.forwardRef(
  ({ columns: t = 2, variant: a = "default", density: r, bordered: n = !1, items: s, children: o, className: d, ...c }, b) => {
    const l = r === "compact" && a === "default" ? "compact" : a;
    return /* @__PURE__ */ e(
      "dl",
      {
        ref: b,
        "data-slot": "description-list",
        className: h(
          "grid",
          l === "compact" ? "gap-2.5" : "gap-3.5",
          n && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3",
          Pf[t],
          d
        ),
        ...c,
        children: s ? s.map((u, m) => /* @__PURE__ */ e(
          jo,
          {
            label: u.label,
            value: u.value,
            mono: u.mono,
            copyValue: u.copyValue,
            span: u.span,
            variant: l,
            className: u.className
          },
          u.key ?? (typeof u.label == "string" ? u.label : m)
        )) : o
      }
    );
  }
);
Kc.displayName = "DescriptionList";
const Of = ({
  code: t,
  tenantCode: a,
  presets: r,
  src: n,
  maskSrc: s,
  maskClassName: o,
  alt: d,
  fallbackIcon: c,
  className: b = "w-4 h-4"
}) => {
  const l = (t ?? a ?? "").toLowerCase().trim(), u = l && r ? r[l] : void 0, m = s ? "mask" : n ? "image" : (u == null ? void 0 : u.mode) ?? (u != null && u.src ? "image" : void 0), p = s ?? n ?? (u == null ? void 0 : u.src), f = d ?? (u == null ? void 0 : u.alt) ?? (l || "Brand"), g = o ?? (u == null ? void 0 : u.maskClassName) ?? "bg-[var(--abc-primary)]", [x, w] = $(!1);
  return fe(() => {
    w(!1);
  }, [l, p]), m === "mask" && p ? /* @__PURE__ */ e(
    "span",
    {
      className: h("block shrink-0", g, b),
      style: {
        maskImage: `url(${p})`,
        WebkitMaskImage: `url(${p})`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain"
      },
      "aria-hidden": "true"
    }
  ) : m === "image" && p ? x ? u != null && u.fallbackIcon ? /* @__PURE__ */ e(qe, { children: u.fallbackIcon }) : c ? /* @__PURE__ */ e(qe, { children: c }) : /* @__PURE__ */ e(ho, { className: h("shrink-0 text-[var(--abc-primary)]", b) }) : /* @__PURE__ */ e(
    "img",
    {
      src: p,
      alt: f,
      className: h("shrink-0 object-contain", b),
      onError: () => w(!0),
      loading: "lazy"
    }
  ) : c ? /* @__PURE__ */ e(qe, { children: c }) : /* @__PURE__ */ e(nc, { className: h("shrink-0 text-[var(--abc-fg-placeholder)]", b) });
}, dg = Of, $f = {
  error: {
    container: "border-red-500/25 bg-red-50/50 text-red-950 dark:bg-red-950/20 dark:text-red-200 dark:border-red-500/30",
    badge: "border-red-500/30 bg-white/80 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    iconWrap: "bg-red-500/15 text-red-600 dark:text-red-400",
    Icon: ia,
    defaultRole: "alert"
  },
  warning: {
    container: "border-amber-500/25 bg-amber-50/50 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-500/30",
    badge: "border-amber-500/30 bg-white/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    iconWrap: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    Icon: Zr,
    defaultRole: "alert"
  },
  success: {
    container: "border-emerald-500/25 bg-emerald-50/50 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-500/30",
    badge: "border-emerald-500/30 bg-white/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    iconWrap: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    Icon: Xr,
    defaultRole: "status"
  },
  info: {
    container: "border-blue-500/25 bg-blue-50/50 text-blue-950 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-500/30",
    badge: "border-blue-500/30 bg-white/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    iconWrap: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Icon: fn,
    defaultRole: "status"
  }
}, xa = ge.forwardRef(
  function({
    variant: a = "error",
    title: r,
    message: n,
    description: s,
    code: o,
    status: d,
    requestId: c,
    actionHint: b,
    action: l,
    onDismiss: u,
    dismissLabel: m = "关闭通知",
    hideIcon: p = !1,
    role: f,
    className: g,
    children: x,
    ...w
  }, N) {
    const v = $f[a], S = v.Icon, M = n ?? x;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: N,
        role: f ?? v.defaultRole,
        "data-slot": "notification-banner",
        "data-variant": a,
        className: h(
          "relative flex flex-col gap-2 rounded-[var(--abc-radius-lg,0.625rem)] border p-3.5 text-xs shadow-2xs transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-3",
          v.container,
          g
        ),
        ...w,
        children: [
          /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
            !p && /* @__PURE__ */ e(
              "span",
              {
                className: h(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  v.iconWrap
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(S, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-1", children: [
              (r || o || d != null || c) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 font-medium", children: [
                d != null && /* @__PURE__ */ i(
                  "span",
                  {
                    className: h(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      v.badge
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
                    className: h(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      v.badge
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
                r && /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: r })
              ] }),
              M && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: M }),
              s && /* @__PURE__ */ e("div", { className: "text-[11px] leading-normal opacity-85", children: s }),
              b && /* @__PURE__ */ e("div", { className: "pt-0.5 text-[11px] font-medium text-primary", children: b })
            ] })
          ] }),
          (l || u) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 self-end sm:self-start", children: [
            l,
            u && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": m,
                onClick: u,
                className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    );
  }
);
xa.displayName = "NotificationBanner";
function ug({
  error: t,
  fallbackTitle: a = "加载失败",
  fallbackMessage: r = "无法加载该区块数据，请重试。",
  action: n,
  retry: s,
  retryLabel: o = "重试",
  isRetrying: d = !1,
  className: c,
  ...b
}) {
  if (!t) return null;
  const l = t, u = (l == null ? void 0 : l.message) || r;
  return /* @__PURE__ */ e(
    xa,
    {
      variant: "error",
      title: a,
      message: u,
      status: l == null ? void 0 : l.status,
      code: l == null ? void 0 : l.code,
      requestId: l == null ? void 0 : l.requestId,
      className: c,
      action: n ?? (s ? /* @__PURE__ */ i(
        Le,
        {
          size: "xs",
          variant: "outline",
          onClick: s,
          disabled: d,
          className: "h-7 text-xs bg-white/70 dark:bg-slate-900/60",
          children: [
            d ? /* @__PURE__ */ e(mr, { className: "mr-1 h-3 w-3 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ e(ga, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: o })
          ]
        }
      ) : null),
      ...b
    }
  );
}
function bg({
  message: t,
  code: a,
  status: r,
  requestId: n,
  onRetry: s,
  retryLabel: o = "重试读取",
  pendingLabel: d,
  retryAriaLabel: c,
  pending: b = !1,
  action: l,
  ...u
}) {
  const m = l ?? (s ? /* @__PURE__ */ i(
    Le,
    {
      variant: "outline",
      size: "sm",
      disabled: b,
      onClick: s,
      "aria-label": c,
      children: [
        /* @__PURE__ */ e(
          ga,
          {
            "aria-hidden": "true",
            className: h(
              "mr-1 h-3 w-3",
              b && "animate-spin motion-reduce:animate-[spin_6s_linear_infinite]"
            )
          }
        ),
        /* @__PURE__ */ e("span", { children: b && d ? d : o })
      ]
    }
  ) : void 0);
  return /* @__PURE__ */ e(
    xa,
    {
      variant: "error",
      role: "alert",
      message: t,
      code: a,
      status: r,
      requestId: n,
      action: m,
      ...u
    }
  );
}
function mg({
  message: t,
  paused: a = !1,
  size: r = "md",
  className: n,
  ...s
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      role: "status",
      "data-slot": "loading-state-card",
      className: h(
        "flex items-center gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-xs text-[var(--abc-fg-muted)] shadow-2xs",
        r === "sm" ? "px-3 py-2 text-[11px]" : "p-3.5",
        a && "border-amber-500/30 bg-amber-50/50 text-amber-900 dark:bg-amber-950/20 dark:text-amber-200",
        n
      ),
      ...s,
      children: [
        a ? /* @__PURE__ */ e(Ru, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-amber-600" }) : /* @__PURE__ */ e(
          mr,
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
function fg({
  items: t,
  emptyMessage: a = "当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。",
  className: r
}) {
  return t.length === 0 ? /* @__PURE__ */ e(
    xa,
    {
      variant: "success",
      role: "status",
      message: a,
      className: r
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "attention-list",
      className: h(
        "divide-y divide-[var(--abc-border)] rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs",
        r
      ),
      children: t.map((n, s) => {
        const o = "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]", d = !!n.restriction, c = /* @__PURE__ */ i(qe, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: h(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                n.severity === "critical" && "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400",
                n.severity === "high" && "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
                !["critical", "high"].includes(n.severity) && "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
              ),
              children: /* @__PURE__ */ e(ju, { "aria-hidden": "true", className: "h-4 w-4" })
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
            !d && (n.href || n.onClick) && /* @__PURE__ */ e(oc, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--abc-fg-muted)]" })
          ] })
        ] });
        return !d && n.href ? /* @__PURE__ */ e("a", { href: n.href, className: o, children: c }, n.kind || s) : !d && n.onClick ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n.onClick,
            className: h(o, "w-full text-left cursor-pointer"),
            children: c
          },
          n.kind || s
        ) : /* @__PURE__ */ e("div", { className: o, children: c }, n.kind || s);
      })
    }
  );
}
const no = "color-scheme", Pn = "abc:color-scheme-change", Uc = "(prefers-color-scheme: dark)";
function cn() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? "light" : window.matchMedia(Uc).matches ? "dark" : "light";
}
function On() {
  if (typeof window > "u") return "system";
  try {
    const t = window.localStorage.getItem(no);
    if (t === "light" || t === "dark") return t;
  } catch {
  }
  return "system";
}
function $n(t) {
  if (typeof document > "u") return;
  const a = t === "system" ? "light dark" : t;
  let r = document.querySelector('meta[name="color-scheme"]');
  !r && document.head && (r = document.createElement("meta"), r.name = "color-scheme", document.head.prepend(r)), r && (r.content = a);
  const n = t === "system" ? cn() : t, s = document.documentElement;
  s.setAttribute("data-abc-theme", n), s.setAttribute("data-abc-theme-mode", t), s.classList.toggle("dark", n === "dark"), s.classList.toggle("light", n === "light");
}
function Ff() {
  const t = wm(), [a, r] = ge.useState(
    () => On()
  ), [n, s] = ge.useState(
    () => cn()
  );
  ge.useEffect(() => {
    var p;
    t || $n(On());
    const l = typeof window.matchMedia == "function" ? window.matchMedia(Uc) : null, u = () => {
      s(cn()), !t && On() === "system" && $n("system");
    }, m = () => {
      const f = On();
      r(f), s(cn()), t || $n(f);
    };
    return (p = l == null ? void 0 : l.addEventListener) == null || p.call(l, "change", u), window.addEventListener("storage", m), window.addEventListener(Pn, m), () => {
      var f;
      (f = l == null ? void 0 : l.removeEventListener) == null || f.call(l, "change", u), window.removeEventListener("storage", m), window.removeEventListener(Pn, m);
    };
  }, [t]);
  const o = t ? t.theme.mode : a, d = t ? t.resolvedTheme : o === "system" ? n : o, c = ge.useCallback(
    (l, u) => {
      try {
        l === "system" ? window.localStorage.removeItem(no) : window.localStorage.setItem(no, l);
      } catch {
      }
      r(l), t ? t.setThemeMode(l, u) : $n(l), typeof window < "u" && window.dispatchEvent(new Event(Pn));
    },
    [t]
  ), b = ge.useCallback(
    (l) => {
      const u = l && "clientX" in l && typeof l.clientX == "number" ? { clientX: l.clientX, clientY: l.clientY } : void 0;
      if (t) {
        t.toggleTheme(u), typeof window < "u" && window.dispatchEvent(new Event(Pn));
        return;
      }
      const m = cn(), f = (o === "system" ? m : o) === "dark" ? "light" : "dark";
      c(f === m ? "system" : f);
    },
    [t, o, c]
  );
  return {
    preference: o,
    resolvedScheme: d,
    systemScheme: n,
    setPreference: c,
    toggleScheme: b
  };
}
const Wf = ge.forwardRef(
  ({ locale: t = "zh-CN", mode: a = "toggle", dark: r = !1, label: n, className: s, ...o }, d) => {
    const c = t.toLowerCase().startsWith("zh"), { preference: b, resolvedScheme: l, systemScheme: u, setPreference: m, toggleScheme: p } = Ff();
    if (a === "segmented") {
      const g = u === "dark" ? c ? "当前深色" : "Currently dark" : c ? "当前浅色" : "Currently light";
      return /* @__PURE__ */ i(
        "div",
        {
          role: "group",
          "data-slot": "theme-switcher",
          "aria-label": n ?? (c ? "颜色主题偏好" : "Color theme preference"),
          className: h(
            "inline-flex flex-wrap items-center gap-1 rounded-lg border p-1 shadow-2xs transition-colors",
            r ? "border-slate-700/90 bg-slate-900/90" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
            s
          ),
          children: [
            /* @__PURE__ */ i(
              Le,
              {
                size: "xs",
                variant: b === "light" ? "default" : "ghost",
                onClick: (x) => m("light", { clientX: x.clientX, clientY: x.clientY }),
                "aria-pressed": b === "light",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(dn, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "浅色" : "Light" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              Le,
              {
                size: "xs",
                variant: b === "dark" ? "default" : "ghost",
                onClick: (x) => m("dark", { clientX: x.clientX, clientY: x.clientY }),
                "aria-pressed": b === "dark",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(un, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "深色" : "Dark" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              Le,
              {
                size: "xs",
                variant: b === "system" ? "default" : "ghost",
                onClick: (x) => m("system", { clientX: x.clientX, clientY: x.clientY }),
                "aria-pressed": b === "system",
                title: `${c ? "跟随系统" : "System"} (${g})`,
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(po, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ i("span", { children: [
                    c ? "跟随系统" : "System",
                    /* @__PURE__ */ i("span", { className: "ml-1 opacity-75", children: [
                      "(",
                      g,
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
    const f = l === "dark" ? c ? "切换到浅色主题" : "Switch to light theme" : c ? "切换到深色主题" : "Switch to dark theme";
    return /* @__PURE__ */ i(
      "button",
      {
        ref: d,
        type: "button",
        "data-slot": "theme-switcher",
        "data-color-scheme": l,
        "data-color-preference": b,
        onClick: p,
        title: n ?? f,
        "aria-label": n ?? f,
        className: h(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
          r ? "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs hover:bg-[var(--abc-bg-subtle)]",
          s
        ),
        ...o,
        children: [
          l === "dark" ? /* @__PURE__ */ e(dn, { className: "h-3.5 w-3.5 text-amber-400", "aria-hidden": "true" }) : /* @__PURE__ */ e(un, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: f })
        ]
      }
    );
  }
);
Wf.displayName = "ThemeSwitcher";
function pg({
  open: t,
  title: a,
  description: r,
  cancelLabel: n = "取消",
  confirmLabel: s = "确认",
  workingLabel: o = "正在处理…",
  variant: d = "default",
  loading: c = !1,
  closeLabel: b = "关闭",
  className: l,
  onCancel: u,
  onConfirm: m,
  children: p
}) {
  const f = d === "destructive";
  return /* @__PURE__ */ e(
    yr,
    {
      open: t,
      onClose: u,
      onCancel: u,
      onOpenChange: (g) => !g && u(),
      closeDisabled: c,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        No,
        {
          "data-slot": "confirm-dialog",
          className: h("w-full max-w-md", l),
          closeLabel: b,
          closeDisabled: c,
          children: [
            /* @__PURE__ */ i(ko, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5", children: [
                f ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Zr, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Wa, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Co, { className: "text-base font-semibold leading-tight", children: a })
              ] }),
              r && /* @__PURE__ */ e(_o, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: r })
            ] }),
            p && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: p }),
            /* @__PURE__ */ i(So, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                Le,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: c,
                  onClick: u,
                  children: n
                }
              ),
              /* @__PURE__ */ e(
                Le,
                {
                  type: "button",
                  variant: f ? "danger" : "primary",
                  size: "sm",
                  loading: c,
                  onClick: m,
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
let rr = [];
const so = /* @__PURE__ */ new Set();
function oo() {
  so.forEach((t) => t());
}
function Hf(t) {
  const a = rr.findIndex((r) => r.id === t.id);
  if (a >= 0) {
    const r = rr[a];
    (r.cascadeMode !== t.cascadeMode || r.widthPx !== t.widthPx) && (rr[a] = t, oo());
  } else
    rr = [...rr, t], oo();
}
function Ri(t) {
  rr.some((a) => a.id === t) && (rr = rr.filter((a) => a.id !== t), oo());
}
const Kf = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, kn = ({
  open: t,
  visible: a,
  onClose: r,
  title: n,
  description: s,
  children: o,
  footer: d,
  size: c = "md",
  motion: b,
  width: l,
  placement: u = "right",
  closeOnClickModal: m = !0,
  resizable: p = !0,
  minWidth: f = 340,
  storageKey: g,
  push: x = !0,
  pushDistance: w = 140,
  cascadeMode: N,
  adjacentOffset: v,
  bodyClassName: S,
  className: M,
  role: L = "dialog"
}) => {
  const R = Nm(N), C = N ?? R, y = Et(), E = Et(), _ = t ?? a ?? !1, j = Te(b), { isMounted: D, isVisible: B } = ca(_, j === "none" ? 0 : 220), H = ie(r);
  H.current = r;
  const [, A] = $(0), [I, P] = $(!1), [K, O] = $(!1), [V, Y] = $(() => {
    if (!g || typeof window > "u") return null;
    try {
      const we = Number(window.localStorage.getItem(`abc_drawer_w_${g}`));
      return Number.isFinite(we) && we >= f ? we : null;
    } catch {
      return null;
    }
  });
  fe(() => {
    const we = () => A((Pe) => Pe + 1);
    return so.add(we), () => {
      so.delete(we);
    };
  }, []);
  const ce = typeof l == "number" ? l : V ?? (c ? Kf[c] : 560) ?? 560;
  fe(() => {
    if (_)
      return Hf({
        id: y,
        cascadeMode: C,
        widthPx: ce
      }), () => Ri(y);
    Ri(y);
  }, [_, y, C, ce]), fe(() => {
    if (!D) return;
    const we = (Pe) => {
      const Ve = rr[rr.length - 1];
      Pe.key === "Escape" && (!Ve || Ve.id === y) && (Pe.stopPropagation(), H.current());
    };
    return document.addEventListener("keydown", we), () => document.removeEventListener("keydown", we);
  }, [D, y]);
  const [G, re] = $(
    () => typeof window < "u" ? window.innerWidth : 1440
  );
  fe(() => {
    if (typeof window > "u") return;
    const we = () => re(window.innerWidth);
    return window.addEventListener("resize", we), () => window.removeEventListener("resize", we);
  }, []);
  const ee = rr.findIndex((we) => we.id === y), me = ee >= 0 ? Math.max(0, rr.length - 1 - ee) : 0, se = ee >= 0 ? ee + 1 : 1, ye = ee >= 0 ? rr.slice(ee + 1) : [], F = rr.some((we) => we.cascadeMode === "adjacent"), Z = C === "adjacent" || F, De = ye.reduce((we, Pe) => we + (Pe.widthPx || 560), 0);
  let Xe = ce;
  if (Z && me > 0 && De > 0) {
    const we = Math.max(f, G - De - 24);
    Xe > we && (Xe = we);
  }
  const he = x && me > 0 ? Z ? v ?? De : me * w : 0, Ae = x && me > 0 ? Z ? 1 : Math.max(0.92, 1 - me * 0.025) : 1, Fe = u === "right" ? -1 : 1, Ce = (we) => {
    we.preventDefault(), O(!0);
    const Pe = (ae) => {
      const ve = Math.max(f, window.innerWidth - 32), Ge = u === "right" ? window.innerWidth - ae.clientX : ae.clientX, He = Math.min(ve, Math.max(f, Ge));
      if (P(!1), Y(He), g)
        try {
          window.localStorage.setItem(`abc_drawer_w_${g}`, String(Math.round(He)));
        } catch {
        }
    }, Ve = () => {
      O(!1), window.removeEventListener("mousemove", Pe), window.removeEventListener("mouseup", Ve);
    };
    window.addEventListener("mousemove", Pe), window.addEventListener("mouseup", Ve);
  };
  if (!D || typeof document > "u") return null;
  const st = I ? "100dvw" : V ? `${V}px` : typeof l == "number" ? `${Xe}px` : `${Xe}px`;
  return xr(
    /* @__PURE__ */ i(
      "div",
      {
        role: L,
        "aria-modal": L === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? E : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, ee) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          ee === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                m && r();
              },
              "data-motion": j,
              className: h(
                "fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto",
                j !== "none" && (B ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ) : null,
          /* @__PURE__ */ i(
            "div",
            {
              "data-motion": j,
              style: {
                width: st,
                transform: j === "none" ? he > 0 ? `translate3d(${Fe * he}px, 0, 0) scale(${Ae})` : void 0 : B ? he > 0 ? `translate3d(${Fe * he}px, 0, 0) scale(${Ae})` : "translate3d(0, 0, 0)" : u === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: j === "none" || K ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: h(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                Z && ee > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                u === "right" ? "ml-auto border-l" : "mr-auto border-r",
                M
              ),
              children: [
                p && !I && /* @__PURE__ */ i(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: Ce,
                    className: h(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      u === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(cs, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                      rr.length > 1 && /* @__PURE__ */ i(
                        "span",
                        {
                          title: Z ? `并排抽屉层级: ${se} 级` : `抽屉栈深度: ${se} 级`,
                          className: h(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            me === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(ho, { className: "h-2.5 w-2.5" }),
                            "L",
                            se,
                            Z && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: me === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: E, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                    p && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": I ? "还原默认宽度" : "全宽展开",
                        onClick: () => P((we) => !we),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: I ? /* @__PURE__ */ e(lo, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(uo, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "关闭抽屉",
                        onClick: r,
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(St, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: h("flex-1 overflow-y-auto px-5 py-4 text-xs", S), children: o }),
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
function Uf({ className: t, ...a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-header",
      className: h("flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5", t),
      ...a
    }
  );
}
function Vf({ className: t, ...a }) {
  return /* @__PURE__ */ e(
    "h2",
    {
      "data-slot": "drawer-title",
      className: h("text-lg font-semibold tracking-tight text-[var(--abc-fg)]", t),
      ...a
    }
  );
}
function Gf({ className: t, ...a }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: h("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...a
    }
  );
}
function Yf({ className: t, ...a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: h("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...a
    }
  );
}
function qf({ className: t, ...a }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-footer",
      className: h(
        "flex flex-wrap items-center justify-between gap-3 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-6 py-4",
        t
      ),
      ...a
    }
  );
}
const Xf = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Zf = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Jf = ({
  spinning: t = !0,
  tip: a,
  text: r,
  size: n,
  motion: s,
  fullscreen: o = !1,
  fullScreen: d = !1,
  className: c,
  children: b
}) => {
  const l = a ?? r, u = !!(o || d), m = Be(n, "md"), p = Te(s), f = /* @__PURE__ */ i(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": p,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(mr, { className: h("animate-spin", Xf[m]) }),
        l && /* @__PURE__ */ e("span", { className: h("font-medium text-[var(--abc-fg-muted)]", Zf[m]), children: l })
      ]
    }
  );
  return u ? t ? /* @__PURE__ */ e(
    "div",
    {
      "data-motion": p,
      className: h(
        "fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs",
        p !== "none" && "abc-animate-fade-in"
      ),
      children: f
    }
  ) : null : b !== void 0 ? /* @__PURE__ */ i("div", { "data-motion": p, className: h("relative", c), children: [
    b,
    t && /* @__PURE__ */ e(
      "div",
      {
        className: h(
          "absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]",
          p !== "none" && "abc-animate-fade-in"
        ),
        children: f
      }
    )
  ] }) : t ? /* @__PURE__ */ e("div", { "data-motion": p, className: h("flex items-center justify-center py-8", c), children: f }) : null;
}, Qf = ({
  content: t,
  enabled: a = !0,
  rotate: r = -22,
  gap: n = [110, 96],
  opacity: s,
  children: o,
  className: d,
  ...c
}) => {
  const { resolvedTheme: b } = Mt(), l = ie(null), u = ie(null), m = ie(""), p = ie(null), f = de(() => {
    const g = l.current;
    if (!g) return;
    if (p.current && (p.current.disconnect(), p.current = null), !a || !t || Array.isArray(t) && t.length === 0) {
      u.current && u.current.parentNode === g && g.removeChild(u.current), u.current = null, m.current = "";
      return;
    }
    if (typeof document > "u") return;
    const x = document.createElement("canvas"), w = x.getContext("2d");
    if (!w) return;
    const N = Array.isArray(t) ? t : [t], v = Math.max(window.devicePixelRatio || 1, 1), S = 210 + n[0], M = 90 + n[1];
    x.width = S * v, x.height = M * v;
    let L = "";
    try {
      w.scale(v, v), w.translate(S / 2, M / 2), w.rotate(r * Math.PI / 180), w.font = "500 12px Inter, -apple-system, sans-serif";
      const y = typeof s == "number" && Number.isFinite(s) ? Math.max(0, Math.min(1, s)) : b === "dark" ? 0.065 : 0.055;
      w.fillStyle = b === "dark" ? `rgba(226, 232, 240, ${y})` : `rgba(15, 23, 42, ${y})`, w.textAlign = "center", w.textBaseline = "middle", N.forEach((E, _) => {
        const j = (_ - (N.length - 1) / 2) * 18;
        w.fillText(E, 0, j);
      }), L = x.toDataURL();
    } catch {
      return;
    }
    if (!L) return;
    let R = u.current;
    R || (R = document.createElement("div"), u.current = R), R.getAttribute("data-watermark-overlay") !== "true" && R.setAttribute("data-watermark-overlay", "true");
    const C = [
      "position: absolute",
      "inset: 0",
      "pointer-events: none",
      "z-index: 40",
      `background-image: url(${L})`,
      "background-repeat: repeat",
      `background-size: ${S}px ${M}px`
    ].join(" !important; ") + " !important;";
    if (m.current = C, R.getAttribute("style") !== C && R.setAttribute("style", C), R.parentNode !== g && g.appendChild(R), typeof MutationObserver < "u") {
      const y = new MutationObserver((E) => {
        const _ = l.current, j = u.current;
        if (!_ || !j) return;
        let D = !1;
        for (const B of E)
          if (B.type === "childList") {
            if (Array.from(B.removedNodes).includes(j)) {
              D = !0;
              break;
            }
          } else if (B.type === "attributes" && B.target === j && ((j.getAttribute("style") || "") !== m.current || j.hidden)) {
            D = !0;
            break;
          }
        D && f();
      });
      p.current = y, y.observe(g, { childList: !0, subtree: !1 }), y.observe(R, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
    }
  }, [t, a, n, s, b, r]);
  return fe(() => (f(), () => {
    p.current && (p.current.disconnect(), p.current = null);
  }), [f]), /* @__PURE__ */ e("div", { ref: l, className: h("relative", d), ...c, children: o });
};
class ep extends Xi {
  constructor() {
    super(...arguments);
    Aa(this, "state", {
      hasError: !1,
      error: null,
      errorInfo: null,
      showDetails: !1
    });
    Aa(this, "reset", () => {
      var r, n, s, o;
      this.setState({
        hasError: !1,
        error: null,
        errorInfo: null,
        showDetails: !1
      }), (n = (r = this.props).onReload) == null || n.call(r), (o = (s = this.props).onReset) == null || o.call(s);
    });
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r };
  }
  componentDidCatch(r, n) {
    var s, o;
    console.error(`[TabErrorBoundary] 页面异常 [${this.props.path || "unknown"}]:`, r, n), this.setState({ errorInfo: n }), (o = (s = this.props).onError) == null || o.call(s, r, n);
  }
  componentDidUpdate(r) {
    this.state.hasError && r.resetKey !== this.props.resetKey && this.setState({
      hasError: !1,
      error: null,
      errorInfo: null,
      showDetails: !1
    });
  }
  render() {
    if (this.state.hasError) {
      const {
        path: r,
        onClose: n,
        onNavigateHome: s,
        title: o = "当前页面渲染发生异常",
        description: d = "该页签在加载或交互时遭遇未捕获错误。此故障已被安全隔离在当前页签内，其他已打开的页签与导航系统依然正常可用。",
        reloadText: c = "重新加载本页",
        closeText: b = "关闭此页签",
        homeText: l = "返回仪表盘",
        className: u
      } = this.props, { error: m, errorInfo: p, showDetails: f } = this.state;
      return /* @__PURE__ */ e(
        "div",
        {
          className: h(
            "flex min-h-[500px] w-full items-center justify-center p-6 md:p-10",
            u
          ),
          children: /* @__PURE__ */ i("div", { className: "w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]", children: [
            /* @__PURE__ */ e("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-500 shadow-xs dark:border-amber-800 dark:bg-amber-950/40", children: /* @__PURE__ */ e(Zr, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ i("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg font-semibold tracking-tight text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ e("p", { className: "mx-auto max-w-md text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: d }),
              r && /* @__PURE__ */ e("div", { className: "inline-block rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]", children: r })
            ] }),
            m && /* @__PURE__ */ i("div", { className: "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-left text-xs", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: () => this.setState((g) => ({ showDetails: !g.showDetails })),
                  className: "flex cursor-pointer items-center gap-1.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] select-none hover:text-[var(--abc-fg)]",
                  children: [
                    f ? /* @__PURE__ */ e(sr, { size: 14 }) : /* @__PURE__ */ e(dr, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: f ? "收起技术排查详情" : "展开技术排查详情" })
                  ]
                }
              ),
              f && /* @__PURE__ */ i("div", { className: "mt-2.5 space-y-1.5", children: [
                /* @__PURE__ */ i("p", { className: "font-mono font-semibold break-all text-rose-600 select-all dark:text-rose-400", children: [
                  m.name,
                  ": ",
                  m.message
                ] }),
                (p == null ? void 0 : p.componentStack) && /* @__PURE__ */ e("pre", { className: "max-h-40 overflow-auto font-mono text-[10px] whitespace-pre-wrap text-[var(--abc-fg-muted)] select-all", children: p.componentStack })
              ] })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: this.reset,
                  className: "inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] bg-[var(--abc-primary)] px-4 py-2 text-xs font-medium text-[var(--abc-primary-fg)] shadow-xs transition-colors hover:bg-[var(--abc-primary-hover)]",
                  children: [
                    /* @__PURE__ */ e(ga, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: c })
                  ]
                }
              ),
              n && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: n,
                  className: "inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-4 py-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  children: [
                    /* @__PURE__ */ e(St, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: b })
                  ]
                }
              ),
              s && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: s,
                  className: "inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-4 py-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  children: [
                    /* @__PURE__ */ e(go, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: l })
                  ]
                }
              )
            ] })
          ] })
        }
      );
    }
    return this.props.children;
  }
}
class hg extends Xi {
  constructor() {
    super(...arguments);
    Aa(this, "state", {
      hasError: !1,
      error: null,
      errorInfo: null
    });
    Aa(this, "reset", () => {
      var r, n, s, o;
      this.setState({ hasError: !1, error: null, errorInfo: null }), this.props.onReload || this.props.onReset ? ((n = (r = this.props).onReload) == null || n.call(r), (o = (s = this.props).onReset) == null || o.call(s)) : typeof window < "u" && window.location.reload();
    });
    Aa(this, "handleHome", () => {
      this.props.onNavigateHome ? (this.setState({ hasError: !1, error: null, errorInfo: null }), this.props.onNavigateHome()) : typeof window < "u" && (window.location.href = "/");
    });
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r, errorInfo: null };
  }
  componentDidCatch(r, n) {
    var s, o;
    console.error("Uncaught error:", r, n), this.setState({ error: r, errorInfo: n }), (o = (s = this.props).onError) == null || o.call(s, r, n);
  }
  componentDidUpdate(r) {
    this.state.hasError && r.resetKey !== this.props.resetKey && this.setState({ hasError: !1, error: null, errorInfo: null });
  }
  render() {
    var r;
    if (this.state.hasError && this.state.error) {
      const n = !!(this.props.onReset || this.props.resetKey !== void 0 || this.props.tabTitle), {
        variant: s = n ? "panel" : "fullscreen",
        title: o,
        tabTitle: d,
        description: c = "应用程序在运行过程中遇到未预期的错误，您可以尝试刷新页面或返回首页。",
        reloadText: b = n ? "重新加载此模块" : "刷新页面",
        homeText: l = "返回首页",
        showHomeButton: u = !n,
        fallback: m,
        className: p
      } = this.props;
      if (m !== void 0)
        return typeof m == "function" ? m(this.state.error, this.reset, this.state.errorInfo) : m;
      const f = o ?? (d ? `${d}加载或渲染发生异常` : "页面运行遇到异常");
      return /* @__PURE__ */ e(
        "div",
        {
          className: h(
            "flex items-center justify-center p-6 text-[var(--abc-fg)]",
            s === "fullscreen" ? "min-h-screen bg-[var(--abc-bg-canvas)]" : "min-h-[260px] w-full",
            p
          ),
          children: /* @__PURE__ */ i("div", { className: "w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]", children: [
            /* @__PURE__ */ e("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-800 dark:bg-rose-950/40", children: /* @__PURE__ */ e(Zr, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ i("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("h2", { className: "text-2xl font-bold tracking-tight text-[var(--abc-fg)]", children: f }),
              /* @__PURE__ */ e("p", { className: "text-sm text-[var(--abc-fg-muted)]", children: c })
            ] }),
            /* @__PURE__ */ i("div", { className: "max-h-48 overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-left font-mono text-xs text-rose-600 dark:text-rose-400", children: [
              /* @__PURE__ */ e("div", { className: "mb-1 font-semibold", children: this.state.error.toString() }),
              ((r = this.state.errorInfo) == null ? void 0 : r.componentStack) && /* @__PURE__ */ e("pre", { className: "mt-2 text-[11px] whitespace-pre-wrap text-[var(--abc-fg-muted)]", children: this.state.errorInfo.componentStack })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center justify-center gap-3 pt-2", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: this.reset,
                  className: "inline-flex cursor-pointer items-center gap-2 rounded-[var(--abc-radius-lg)] bg-[var(--abc-primary)] px-5 py-2.5 text-sm font-medium text-[var(--abc-primary-fg)] shadow-xs transition-all hover:bg-[var(--abc-primary-hover)] active:scale-95",
                  children: [
                    /* @__PURE__ */ e(ga, { className: "h-4 w-4" }),
                    b
                  ]
                }
              ),
              u && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: this.handleHome,
                  className: "inline-flex cursor-pointer items-center gap-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-5 py-2.5 text-sm font-medium text-[var(--abc-fg-secondary)] transition-all hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] active:scale-95",
                  children: [
                    /* @__PURE__ */ e(go, { className: "h-4 w-4" }),
                    l
                  ]
                }
              )
            ] })
          ] })
        }
      );
    }
    return this.props.children;
  }
}
const tp = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(fn, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Xr, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Zr, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(ia, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, rp = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, gg = ({
  tone: t = "info",
  title: a,
  description: r,
  children: n,
  showIcon: s = !0,
  closable: o = !1,
  onClose: d,
  action: c,
  size: b,
  motion: l,
  className: u
}) => {
  const [m, p] = $(!1), f = Be(b, "sm"), g = Te(l);
  if (m) return null;
  const x = tp[t], w = r ?? n;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alert",
      "data-motion": g,
      className: h(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        rp[f],
        g !== "none" && "abc-animate-fade-in",
        x.box,
        u
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: x.icon }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          a && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)]", children: a }),
          w && /* @__PURE__ */ e("div", { className: "leading-relaxed text-[var(--abc-fg-secondary)]", children: w })
        ] }),
        c && /* @__PURE__ */ e("div", { className: "shrink-0", children: c }),
        o && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "关闭提示",
            onClick: () => {
              p(!0), d == null || d();
            },
            className: "shrink-0 rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, ap = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, np = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, sp = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, op = ({
  percent: t,
  type: a = "line",
  tone: r = "primary",
  strokeColor: n,
  showInfo: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const b = Be(typeof o == "string" ? o : void 0, "sm"), l = Te(d), u = Math.max(0, Math.min(100, Math.round(t))), m = n || sp[r];
  if (a === "circle") {
    const f = typeof o == "number" ? o : ap[b], g = Math.max(4, Math.round(f * 0.09)), x = (f - g) / 2, w = 2 * Math.PI * x, N = w - u / 100 * w;
    return /* @__PURE__ */ i(
      "div",
      {
        role: "progressbar",
        "data-motion": l,
        "aria-valuenow": u,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: h("relative inline-flex items-center justify-center", c),
        style: { width: f, height: f },
        children: [
          /* @__PURE__ */ i("svg", { width: f, height: f, className: "-rotate-90", children: [
            /* @__PURE__ */ e(
              "circle",
              {
                cx: f / 2,
                cy: f / 2,
                r: x,
                fill: "none",
                stroke: "var(--abc-bg-subtle)",
                strokeWidth: g
              }
            ),
            /* @__PURE__ */ e(
              "circle",
              {
                cx: f / 2,
                cy: f / 2,
                r: x,
                fill: "none",
                stroke: m,
                strokeWidth: g,
                strokeLinecap: "round",
                strokeDasharray: w,
                strokeDashoffset: N,
                className: "transition-all duration-[var(--abc-motion-slow)]"
              }
            )
          ] }),
          s && /* @__PURE__ */ i("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            u,
            "%"
          ] })
        ]
      }
    );
  }
  const p = typeof o == "number" ? o : np[b];
  return /* @__PURE__ */ i(
    "div",
    {
      role: "progressbar",
      "data-motion": l,
      "aria-valuenow": u,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: h("flex w-full items-center gap-2.5", c),
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
                style: { width: `${u}%`, backgroundColor: m }
              }
            )
          }
        ),
        s && /* @__PURE__ */ i("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          u,
          "%"
        ] })
      ]
    }
  );
}, ip = {
  success: {
    icon: /* @__PURE__ */ e(Xr, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(fn, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e(Zr, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e(ia, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(ns, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(zu, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(Bu, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, vg = ({
  status: t = "info",
  title: a,
  subTitle: r,
  extra: n,
  children: s,
  size: o,
  motion: d,
  className: c
}) => {
  const b = ip[t], l = Be(o, "md"), u = Te(d);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": u,
      className: h(
        "flex flex-col items-center justify-center text-center",
        {
          xs: "px-4 py-6",
          sm: "px-5 py-8",
          md: "px-6 py-12",
          lg: "px-8 py-16"
        }[l],
        u !== "none" && "abc-animate-fade-in",
        c
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl",
              b.badgeClass
            ),
            children: b.icon
          }
        ),
        /* @__PURE__ */ e("h3", { className: "text-base font-bold text-[var(--abc-fg)]", children: a }),
        r && /* @__PURE__ */ e("p", { className: "mt-1.5 max-w-md text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: r }),
        n && /* @__PURE__ */ e("div", { className: "mt-5 flex flex-wrap items-center justify-center gap-2.5", children: n }),
        s && /* @__PURE__ */ e("div", { className: "mt-6 w-full max-w-xl rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-4 text-left text-xs", children: s })
      ]
    }
  );
};
function xg({
  title: t,
  secret: a,
  open: r,
  secretValue: n,
  description: s = "此密钥仅显示一次。请在关闭前复制并安全存储。",
  secretLabel: o,
  metadata: d = [],
  closeLabel: c = "关闭",
  acknowledgeLabel: b = "我已妥善保存此密钥",
  copyLabel: l = "复制密钥",
  copiedLabel: u = "已复制",
  copyErrorMessage: m = "剪贴板写入失败，请手动选择复制。",
  className: p,
  onClose: f
}) {
  const g = a ?? n ?? null, x = r !== void 0 ? r : !!g, [w, N] = ge.useState(!1), [v, S] = ge.useState(!1), [M, L] = ge.useState(null);
  if (ge.useEffect(() => {
    x || (N(!1), S(!1), L(null));
  }, [x]), !x || !g)
    return null;
  const R = async () => {
    L(null), await us(g) ? (N(!0), setTimeout(() => N(!1), 2e3)) : L(m);
  };
  return /* @__PURE__ */ e(
    yr,
    {
      open: x,
      onClose: f,
      onCancel: f,
      onOpenChange: (C) => !C && f(),
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        No,
        {
          "data-slot": "one-time-secret-dialog",
          className: h("w-full max-w-lg", p),
          closeLabel: c,
          children: [
            /* @__PURE__ */ i(ko, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300", children: /* @__PURE__ */ e(Qi, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Co, { className: "text-base font-semibold leading-tight", children: t })
              ] }),
              /* @__PURE__ */ e(_o, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: s })
            ] }),
            /* @__PURE__ */ i("div", { className: "space-y-3 py-2 text-xs", children: [
              /* @__PURE__ */ e(
                xa,
                {
                  variant: "warning",
                  title: "请立即备份",
                  message: "关闭此窗口后将无法再次检索该明文内容，丢失将需要重新生成。"
                }
              ),
              o && /* @__PURE__ */ e("span", { className: "block font-medium text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ i("div", { className: "relative rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3 pr-12", children: [
                /* @__PURE__ */ e("code", { className: "block select-all break-all font-mono text-xs text-[var(--abc-fg)]", children: g }),
                /* @__PURE__ */ e(
                  Le,
                  {
                    type: "button",
                    variant: "outline",
                    size: "xs",
                    onClick: R,
                    className: "absolute right-2 top-2 h-7 w-7 p-0",
                    title: w ? u : l,
                    "aria-label": w ? u : l,
                    children: w ? /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(va, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                  }
                )
              ] }),
              M && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: M }),
              d.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
                Kc,
                {
                  items: d.map((C) => ({
                    label: C.label,
                    value: C.value,
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
                    checked: v,
                    onChange: (C) => S(C.target.checked),
                    className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: b })
              ] })
            ] }),
            /* @__PURE__ */ e(So, { className: "pt-2", children: /* @__PURE__ */ e(
              Le,
              {
                type: "button",
                variant: "primary",
                size: "sm",
                disabled: !v,
                onClick: f,
                children: c
              }
            ) })
          ]
        }
      )
    }
  );
}
const sn = /* @__PURE__ */ new Set(), cp = {
  start() {
    sn.forEach((t) => t({ action: "start" }));
  },
  done() {
    sn.forEach((t) => t({ action: "done" }));
  },
  set(t) {
    sn.forEach(
      (a) => a({ action: "set", value: Math.max(0, Math.min(100, t)) })
    );
  },
  subscribe(t) {
    return sn.add(t), () => {
      sn.delete(t);
    };
  }
}, Vc = ({
  activeKey: t,
  loading: a,
  skipInitial: r = !0,
  height: n = 2,
  color: s = "var(--abc-primary)",
  zIndex: o = 9999,
  className: d
}) => {
  const [c, b] = $(!1), [l, u] = $(0), m = ie(!0), p = ie(null), f = ie(null), g = () => {
    p.current !== null && typeof window < "u" && (window.clearInterval(p.current), p.current = null), f.current !== null && typeof window < "u" && (window.clearTimeout(f.current), f.current = null);
  }, x = () => {
    g(), b(!0), u(22), typeof window < "u" && (p.current = window.setInterval(() => {
      u((N) => N >= 88 ? N : N + Math.max(2, (90 - N) * 0.18));
    }, 120));
  }, w = () => {
    p.current !== null && typeof window < "u" && (window.clearInterval(p.current), p.current = null), u(100), typeof window < "u" && (f.current = window.setTimeout(() => {
      b(!1), u(0);
    }, 220));
  };
  return fe(() => cp.subscribe((N) => {
    N.action === "start" ? x() : N.action === "done" ? w() : N.action === "set" && typeof N.value == "number" && (g(), b(!0), u(N.value), N.value >= 100 && w());
  }), []), fe(() => {
    if (a !== void 0)
      return a ? x() : c && w(), () => g();
  }, [a]), fe(() => {
    if (t === void 0) return;
    if (r && m.current) {
      m.current = !1;
      return;
    }
    m.current = !1, x();
    const N = typeof window < "u" ? window.setTimeout(() => {
      w();
    }, 160) : null;
    return () => {
      N !== null && typeof window < "u" && window.clearTimeout(N);
    };
  }, [t, r]), fe(() => () => g(), []), c ? /* @__PURE__ */ e(
    "div",
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": Math.round(l),
      "aria-label": "页面加载进度",
      style: { zIndex: o, height: n },
      className: h("pointer-events-none fixed top-0 right-0 left-0 overflow-hidden", d),
      children: /* @__PURE__ */ e(
        "div",
        {
          style: {
            width: `${l}%`,
            backgroundColor: s,
            boxShadow: `0 0 8px ${s}`,
            transition: l === 100 ? "width 160ms ease-out, opacity 200ms ease-out" : "width 220ms cubic-bezier(0.22, 1, 0.36, 1)",
            opacity: l === 100 ? 0.85 : 1
          },
          className: "h-full"
        }
      )
    }
  ) : null;
}, lp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, yg = ({
  activeKey: t,
  transition: a,
  showProgress: r = !0,
  className: n,
  children: s
}) => {
  const { pageTransition: o } = Mt(), c = lp[a ?? o] ?? "";
  return /* @__PURE__ */ i(qe, { children: [
    r && t !== void 0 && /* @__PURE__ */ e(Vc, { activeKey: t }),
    /* @__PURE__ */ e("div", { className: h("w-full min-w-0", c, n), children: s }, t)
  ] });
}, dp = {
  default: "xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]",
  balanced: "xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]",
  "wide-master": "xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]"
};
function wg({
  children: t,
  inspector: a,
  ratio: r = "default",
  stickyInspector: n = !0,
  className: s,
  ...o
}) {
  const d = ge.Children.toArray(t), c = a !== void 0 ? t : d[0], b = a !== void 0 ? a : d.slice(1);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: h("grid items-start gap-6", dp[r], s),
      ...o,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: c }),
        /* @__PURE__ */ e("div", { className: h("min-w-0", n && "xl:sticky xl:top-20"), children: b })
      ]
    }
  );
}
const up = ge.forwardRef(
  ({
    title: t,
    subtitle: a,
    badge: r,
    headerActions: n,
    showClear: s = !1,
    onClear: o,
    clearLabel: d = "清除选中",
    loading: c = !1,
    loadingText: b = "正在加载详情…",
    error: l,
    isEmpty: u = !1,
    hasSelection: m,
    emptyIcon: p,
    emptyMessage: f = "请在左侧选择一项以检视详细信息",
    emptyDescription: g,
    footer: x,
    children: w,
    className: N,
    ...v
  }, S) => {
    const M = m !== void 0 ? !m : u, L = !!(t || a || r || n);
    return /* @__PURE__ */ i(
      "aside",
      {
        ref: S,
        "data-slot": "inspector-panel",
        className: h(
          "flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all",
          N
        ),
        ...v,
        children: [
          L && /* @__PURE__ */ i("header", { className: "mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5", children: [
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
                typeof t == "string" ? /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)] tracking-tight", children: t }) : t,
                r
              ] }),
              a && /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: a })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1.5", children: [
              n,
              s && o && /* @__PURE__ */ e(
                Le,
                {
                  variant: "ghost",
                  size: "xs",
                  onClick: o,
                  "aria-label": d,
                  title: d,
                  className: "h-7 w-7 p-0 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
                  children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          c ? /* @__PURE__ */ i("div", { className: "flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e(mr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: b })
          ] }) : l ? /* @__PURE__ */ e("div", { className: "my-2", children: l }) : M ? /* @__PURE__ */ i("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
            p ?? /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(pn, { className: "h-5 w-5 stroke-[1.5]", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg)]", children: f }),
            g && /* @__PURE__ */ e("p", { className: "max-w-[280px] text-[11px] text-[var(--abc-fg-muted)]", children: g })
          ] }) : /* @__PURE__ */ e("div", { className: "flex-1 space-y-4", children: w }),
          x && /* @__PURE__ */ e("footer", { className: "mt-4 border-t border-[var(--abc-border)] pt-3.5", children: x })
        ]
      }
    );
  }
);
up.displayName = "InspectorPanel";
function ms(t, a) {
  if (!(!t || a == null || a === ""))
    return Array.isArray(a) ? a.reduce((r, n) => r == null ? void 0 : r[n], t) : typeof a == "string" && a.includes(".") ? a.split(".").reduce((r, n) => r == null ? void 0 : r[n], t) : t[a];
}
function bp(t, a = 150) {
  if (typeof t == "number" && Number.isFinite(t)) return t;
  if (typeof t == "string") {
    const r = parseFloat(t);
    if (Number.isFinite(r) && !t.trim().endsWith("%")) return r;
  }
  return a;
}
const Us = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
}, ji = {
  green: "success",
  emerald: "success",
  success: "success",
  red: "danger",
  rose: "danger",
  error: "danger",
  danger: "danger",
  yellow: "warning",
  amber: "warning",
  warning: "warning",
  orange: "orange",
  blue: "info",
  info: "info",
  primary: "primary",
  cyan: "cyan",
  purple: "purple",
  violet: "purple",
  teal: "teal",
  pink: "pink",
  gray: "neutral",
  slate: "neutral",
  default: "neutral",
  neutral: "neutral"
}, Bi = [
  "info",
  "success",
  "warning",
  "danger",
  "purple",
  "cyan",
  "orange",
  "teal",
  "pink"
], mp = [
  { color: "#3b82f6", label: "经典蓝" },
  { color: "#10b981", label: "翡翠绿" },
  { color: "#f59e0b", label: "琥珀橙" },
  { color: "#f43f5e", label: "珊瑚红" },
  { color: "#8b5cf6", label: "极光紫" }
];
function zi(t) {
  if (typeof t == "number")
    return $e(t < 1e11 ? t * 1e3 : t);
  const a = String(t).trim();
  return /^\d{10}$/.test(a) ? $e(Number(a) * 1e3) : /^\d{13}$/.test(a) ? $e(Number(a)) : $e(t);
}
function fp({
  value: t,
  record: a,
  config: r
}) {
  const { toast: n } = Mt(), s = (u) => r.checkedValue !== void 0 ? String(u) === String(r.checkedValue) : u === !0 || u === 1 || u === "1", [o, d] = $(() => s(t)), [c, b] = $(!1);
  fe(() => {
    d(s(t));
  }, [t, r.checkedValue]);
  const l = async (u) => {
    if (!r.onChange || c) return;
    const m = o;
    d(u), b(!0);
    try {
      await r.onChange(u, a);
    } catch (p) {
      d(m), n.error((p == null ? void 0 : p.message) || "更新状态失败");
    } finally {
      b(!1);
    }
  };
  return /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ e(
      lr,
      {
        size: "sm",
        checked: o,
        loading: c,
        disabled: !r.onChange,
        onChange: l
      }
    ),
    (r.checkedChildren || r.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: o ? r.checkedChildren : r.unCheckedChildren })
  ] });
}
function Gc(t, a, r, n) {
  const s = r.type === "switch" || typeof r.type == "object" && r.type !== null && r.type.type === "switch", o = typeof r.type == "object" && r.type !== null ? r.type : r.type ? { type: r.type } : r.valueType ? { type: r.valueType } : void 0;
  if ((o == null ? void 0 : o.type) === "switch" && (s || o.onChange || o.checkedValue !== void 0))
    return /* @__PURE__ */ e(fp, { value: t, record: a, config: o });
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const d = (o == null ? void 0 : o.options) ?? r.options;
  if (d && d.length > 0) {
    const l = String(t);
    let u = d.findIndex((m) => String(m.value) === l);
    if (u < 0) {
      const m = l.toLowerCase();
      u = d.findIndex((p) => String(p.value).toLowerCase() === m);
    }
    if (u >= 0) {
      const m = d[u], p = m.status ? String(m.status).toLowerCase() : "", f = m.color ? String(m.color).toLowerCase() : "", g = (p ? ji[p] : void 0) ?? (f ? ji[f] : void 0) ?? (!m.status && !m.color ? Bi[u % Bi.length] : void 0), x = !r.__autoOptionsFromSearch;
      return /* @__PURE__ */ e(
        ha,
        {
          tone: g,
          status: m.status,
          color: m.color,
          dot: x,
          children: m.label
        }
      );
    }
  }
  const c = o == null ? void 0 : o.type;
  let b;
  switch (c) {
    case "money": {
      const l = Number(t);
      b = Number.isNaN(l) ? String(t) : /* @__PURE__ */ i("span", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: [
        "¥",
        l.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      ] });
      break;
    }
    case "number": {
      const l = Number(t);
      b = Number.isNaN(l) ? String(t) : /* @__PURE__ */ e("span", { className: "font-mono tabular-nums", children: l.toLocaleString("zh-CN") });
      break;
    }
    case "date": {
      const l = zi(t), u = (o == null ? void 0 : o.format) || "YYYY-MM-DD";
      b = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: l.isValid() ? l.format(u) : String(t) });
      break;
    }
    case "datetime": {
      const l = zi(t), u = (o == null ? void 0 : o.format) || "YYYY-MM-DD HH:mm:ss";
      b = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: l.isValid() ? l.format(u) : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(
        Nn,
        {
          src: String(t),
          width: (o == null ? void 0 : o.imageWidth) ?? 32,
          height: (o == null ? void 0 : o.imageHeight) ?? 32
        }
      );
    case "progress":
      return /* @__PURE__ */ e(
        op,
        {
          percent: Number(t) || 0,
          strokeColor: o == null ? void 0 : o.progressColor,
          className: "min-w-[92px]"
        }
      );
    case "code":
      b = /* @__PURE__ */ e("code", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg)]", children: String(t) });
      break;
    case "copy":
      return /* @__PURE__ */ e(Si, { text: String(t) });
    case "link":
      return /* @__PURE__ */ e(
        "a",
        {
          href: String(t),
          target: (o == null ? void 0 : o.target) ?? "_blank",
          rel: "noreferrer",
          onClick: (l) => l.stopPropagation(),
          className: "text-[var(--abc-primary)] hover:underline",
          children: String(t)
        }
      );
    case "switch":
      return /* @__PURE__ */ e(ha, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
    case "badge":
      return /* @__PURE__ */ e(ha, { dot: !0, children: String(t) });
    default:
      b = String(t);
  }
  if (r.linkToView && n) {
    const l = typeof r.linkToView == "string" ? r.linkToView : void 0;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: (u) => {
          u.stopPropagation(), n(a, l);
        },
        className: "max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
        children: b
      }
    );
  }
  return r.copyable ? /* @__PURE__ */ e(Si, { text: String(t), displayText: b }) : r.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: b }) : b;
}
function Pi({
  columns: t,
  data: a,
  dataSource: r,
  rowKey: n = "id",
  loading: s = !1,
  density: o = "default",
  selectedKeys: d,
  onSelectionChange: c,
  rowSelection: b,
  sortState: l,
  onSortChange: u,
  headerFilterMode: m = !1,
  headerFilters: p = {},
  onHeaderFilterChange: f,
  headerFilterRender: g,
  activeFilterKeys: x,
  activeFilterLabels: w,
  filterHighlightColor: N,
  onFilterHighlightColorChange: v,
  allColumns: S,
  hiddenColumnKeys: M = [],
  onToggleColumnVisible: L,
  columnWidths: R = {},
  onColumnResize: C,
  resizable: y,
  motion: E,
  columnFixed: _ = {},
  onColumnPin: j,
  onColumnHide: D,
  onResetColumns: B,
  onColumnReorder: H,
  expandable: A,
  treeData: I = !1,
  rowDraggable: P,
  draggable: K,
  onRowDragEnd: O,
  onDragEnd: V,
  onRowView: Y,
  activeRowKey: ce,
  onRowClick: G,
  onRow: re,
  onEmptyReset: ee,
  maxHeight: me,
  ariaLabel: se = "数据表格",
  emptyText: ye = "暂无符合条件的数据",
  className: F
}) {
  const Z = a ?? r ?? [], De = !!(P ?? K), Xe = oe(() => {
    if (O) return O;
    if (V)
      return (z, J) => V(String(z), String(J));
  }, [O, V]), he = Te(E), Ae = ie(null), Fe = ie(null), [Ce, st] = $(null), [we, Pe] = $(null), Ve = ie(null), ae = ie(!1), ve = ie(null), [Ge, He] = $({}), [ft, Ht] = $(0), [It, zr] = $({ left: !1, right: !1 }), [wr, fr] = $(!1), [_e, ot] = $(null), Ft = oe(
    () => ({ ...Ge, ...R }),
    [Ge, R]
  ), pr = y ?? !!C, qt = (z, J) => {
    He((be) => ({ ...be, [z]: J })), C == null || C(z, J);
  }, dt = () => {
    const z = Ae.current;
    if (!z) return;
    const J = z.scrollLeft > 1, be = z.scrollWidth - z.clientWidth - z.scrollLeft > 1;
    zr((ue) => ue.left === J && ue.right === be ? ue : { left: J, right: be });
  };
  ln(() => {
    const z = Ae.current;
    if (!z) return;
    const J = () => {
      z.clientWidth > 0 && Ht(z.clientWidth), dt();
    };
    if (J(), typeof ResizeObserver > "u") return;
    const be = new ResizeObserver((ue) => {
      var ne, te;
      const pe = (te = (ne = ue[0]) == null ? void 0 : ne.contentRect) == null ? void 0 : te.width;
      typeof pe == "number" && pe > 0 ? Ht(Math.floor(pe)) : J(), dt();
    });
    return be.observe(z), () => be.disconnect();
  }, []);
  const rt = (z, J) => typeof n == "function" ? n(z) : (z == null ? void 0 : z[n]) ?? J, Ze = (z) => z.key in _ ? _[z.key] ?? void 0 : z.fixed, Je = oe(() => {
    const z = we && we.length > 0 ? [...t].sort((pe, ne) => {
      const te = we.indexOf(pe.key), ke = we.indexOf(ne.key);
      return te === -1 && ke === -1 ? 0 : te === -1 ? 1 : ke === -1 ? -1 : te - ke;
    }) : t, J = [], be = [], ue = [];
    for (const pe of z) {
      const ne = Ze(pe);
      ne === "left" ? J.push(pe) : ne === "right" ? ue.push(pe) : be.push(pe);
    }
    return [...J, ...be, ...ue];
  }, [t, _, we]), jt = d ?? (b == null ? void 0 : b.selectedRowKeys), Bt = c ?? (b == null ? void 0 : b.onChange), et = Array.isArray(jt) && typeof Bt == "function", Ye = !!A, Xt = (A == null ? void 0 : A.childrenColumnName) || "children", Ir = (A == null ? void 0 : A.indentSize) ?? 18, q = (z) => {
    const J = [], be = (ue) => {
      ue.forEach((pe, ne) => {
        const te = rt(pe, ne), ke = pe == null ? void 0 : pe[Xt], Qe = Array.isArray(ke) && ke.length > 0;
        (Qe || A != null && A.expandedRowRender && (!A.rowExpandable || A.rowExpandable(pe))) && J.push(te), Qe && be(ke);
      });
    };
    return be(z), Array.from(new Set(J));
  }, le = oe(() => A != null && A.defaultExpandAllRows ? q(Z) : [], []), [je, ut] = _r({
    value: A == null ? void 0 : A.expandedRowKeys,
    defaultValue: le,
    onChange: A == null ? void 0 : A.onExpandedRowsChange
  }), ht = ie(le.length > 0);
  fe(() => {
    if (!(A != null && A.defaultExpandAllRows) || (A == null ? void 0 : A.expandedRowKeys) !== void 0 || ht.current || Z.length === 0)
      return;
    const z = q(Z);
    z.length > 0 && (ht.current = !0, ut(z));
  }, [A == null ? void 0 : A.defaultExpandAllRows, A == null ? void 0 : A.expandedRowKeys, Z, Xt]);
  const bt = (z, J) => {
    var ue;
    const be = je.includes(z);
    ut(
      be ? je.filter((pe) => pe !== z) : [...je, z]
    ), J && ((ue = A == null ? void 0 : A.onExpand) == null || ue.call(A, !be, J));
  }, lt = oe(() => {
    const z = [], J = (be, ue) => {
      be.forEach((pe, ne) => {
        var ze;
        const te = rt(pe, ne), ke = Array.isArray(pe == null ? void 0 : pe[Xt]) ? pe[Xt] : [], Qe = ke.length > 0 || !!(I && ((ze = A == null ? void 0 : A.rowExpandable) != null && ze.call(A, pe)));
        z.push({ record: pe, key: te, rowIdx: ne, depth: ue, hasTreeChildren: Qe }), ke.length > 0 && je.includes(te) && J(ke, ue + 1);
      });
    };
    return J(Z, 0), z;
  }, [Z, je, n, Xt, I, A == null ? void 0 : A.rowExpandable]), Tt = oe(() => {
    const z = (et ? 44 : 0) + (Ye ? 40 : 0), J = {};
    let be = 0;
    for (const ke of Je) {
      const Qe = Math.max(120, Array.from(ke.title || "").length * 14 + 76), ze = Ft[ke.key] ?? bp(ke.width, Qe);
      J[ke.key] = ze, be += ze;
    }
    const ue = { ...J }, pe = ft, ne = pe > z + be ? pe - (z + be) : 0;
    if (ne > 0) {
      const ke = (at) => at.key === "__abc_actions__" || at.key === "__actions__" || at.key === "__drag_handle__" || at.key in Ft || !!Ze(at), Qe = Je.filter((at) => !ke(at)), ze = Je.filter(
        (at) => at.key !== "__abc_actions__" && at.key !== "__actions__" && at.key !== "__drag_handle__"
      ), Oe = Qe.length > 0 ? Qe : ze;
      if (Oe.length > 0) {
        const at = Oe.reduce((Ct, Ne) => Ct + J[Ne.key], 0) || Oe.length;
        let At = 0;
        Oe.forEach((Ct, Ne) => {
          const mt = Ne === Oe.length - 1 ? ne - At : Math.floor(ne * J[Ct.key] / at);
          At += mt, ue[Ct.key] = J[Ct.key] + Math.max(0, mt);
        });
      }
    }
    const te = z + Je.reduce((ke, Qe) => ke + (ue[Qe.key] ?? 150), 0);
    return {
      resolvedWidths: ue,
      resolvedTableWidth: pe > 0 ? Math.max(pe, te) : void 0
    };
  }, [Je, Ft, _, ft, et, Ye]), wt = oe(() => {
    const z = {}, J = {};
    let be = "", ue = "", pe = (et ? 44 : 0) + (Ye ? 40 : 0);
    for (const te of Je)
      Ze(te) === "left" && (z[te.key] = pe, pe += Tt.resolvedWidths[te.key] ?? 150, be = te.key);
    let ne = 0;
    for (let te = Je.length - 1; te >= 0; te--) {
      const ke = Je[te];
      Ze(ke) === "right" && (J[ke.key] = ne, ne += Tt.resolvedWidths[ke.key] ?? 150, ue = ke.key);
    }
    return {
      leftOffsets: z,
      rightOffsets: J,
      lastLeftKey: be,
      firstRightKey: ue,
      hasAnyLeftFixed: !!be
    };
  }, [Je, Tt, _, et, Ye]);
  fe(() => {
    dt();
  }, [Tt.resolvedTableWidth, Z.length]);
  const or = oe(
    () => lt.filter(
      (z) => {
        var J, be;
        return !((be = (J = b == null ? void 0 : b.getCheckboxProps) == null ? void 0 : J.call(b, z.record)) != null && be.disabled);
      }
    ),
    [lt, b]
  ), Dt = oe(
    () => or.map((z) => z.key),
    [or]
  ), Kt = et && Dt.length > 0 && Dt.every((z) => jt.includes(z)), Pr = et && !Kt && Dt.some((z) => jt.includes(z)), hr = (z) => {
    if (!et) return;
    if (Pr ? !0 : z) {
      const be = Array.from(/* @__PURE__ */ new Set([...jt, ...Dt]));
      Bt(
        be,
        lt.filter((ue) => be.includes(ue.key)).map((ue) => ue.record)
      );
    } else {
      const be = jt.filter((ue) => !Dt.includes(ue));
      Bt(be, []);
    }
  }, Tr = (z) => {
    if (!et) return;
    const be = jt.includes(z) ? jt.filter((ue) => ue !== z) : [...jt, z];
    Bt(
      be,
      lt.filter((ue) => be.includes(ue.key)).map((ue) => ue.record)
    );
  }, Qr = (z, J, be = "right") => {
    if (!pr) return;
    z.preventDefault(), z.stopPropagation();
    const ue = z.clientX, pe = z.currentTarget.parentElement, ne = Ft[J.key] ?? (typeof J.width == "number" ? J.width : void 0) ?? Tt.resolvedWidths[J.key] ?? (pe == null ? void 0 : pe.offsetWidth) ?? 140, te = J.key === "__abc_actions__" ? 80 : 72, ke = typeof document < "u" ? document.body.style.cursor : "", Qe = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const ze = (at) => {
      const At = at.clientX - ue, Ct = be === "left" ? Math.max(te, Math.round(ne - At)) : Math.max(te, Math.round(ne + At));
      qt(J.key, Ct);
    }, Oe = () => {
      typeof document < "u" && (document.body.style.cursor = ke, document.body.style.userSelect = Qe), window.removeEventListener("mousemove", ze), window.removeEventListener("mouseup", Oe);
    };
    window.addEventListener("mousemove", ze), window.addEventListener("mouseup", Oe);
  };
  fe(() => {
    if (!Ce) return;
    const z = (J) => {
      if (J.key === "Escape") {
        const be = Ve.current;
        st(null), Pe(null), Ve.current = null, ve.current = null, ae.current = !1, be && H && H(be);
      }
    };
    return document.addEventListener("keydown", z, !0), () => document.removeEventListener("keydown", z, !0);
  }, [Ce, H]);
  const Er = Je.map((z) => z.key).join("|");
  ln(() => {
    const z = ve.current;
    if (!z) return;
    ve.current = null;
    const J = Ae.current;
    if (!J || he === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ue = he === "subtle" ? 140 : 220, pe = "cubic-bezier(0.22, 1, 0.36, 1)";
    J.querySelectorAll("[data-col-key]").forEach((ne) => {
      const te = ne.dataset.colKey;
      if (!te) return;
      const ke = z.get(te);
      if (ke === void 0) return;
      const Qe = ne.getBoundingClientRect().left, ze = ke - Qe;
      if (Math.abs(ze) <= 1) return;
      typeof ne.animate == "function" && ne.animate([{ translate: `${ze}px 0` }, { translate: "0 0" }], {
        duration: ue,
        easing: pe
      });
      const Oe = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(te) : te, at = J.querySelectorAll(`[data-col-cell="${Oe}"]`), At = Math.min(at.length, 20);
      for (let Ct = 0; Ct < At; Ct++) {
        const Ne = at[Ct];
        typeof Ne.animate == "function" && Ne.animate([{ translate: `${ze}px 0` }, { translate: "0 0" }], {
          duration: ue,
          easing: pe
        });
      }
    });
  }, [Er, he]);
  const ir = (z) => !!(z.sortable || z.sorter), Or = (z) => {
    if (!ir(z) || !u) return;
    const J = (l == null ? void 0 : l.key) === z.key ? l.direction : null, be = J === null ? "asc" : J === "asc" ? "desc" : null;
    u(z.key, be);
  };
  fe(() => {
    if (!_e) return;
    const z = (be) => {
      var ue;
      be && be.type === "mousedown" && ((ue = Fe.current) != null && ue.contains(be.target)) || ot(null);
    }, J = (be) => {
      be.key === "Escape" && ot(null);
    };
    return document.addEventListener("mousedown", z), document.addEventListener("keydown", J, !0), window.addEventListener("scroll", z, !0), () => {
      document.removeEventListener("mousedown", z), document.removeEventListener("keydown", J, !0), window.removeEventListener("scroll", z, !0);
    };
  }, [_e]);
  const ea = (z, J) => {
    if (J.key === "__abc_actions__" || J.key === "__actions__" || J.key === "__drag_handle__" || !!!(ir(J) && u || j || H || D || L || v || B)) return;
    z.preventDefault(), fr(!1);
    const ue = typeof window < "u" ? window.innerWidth : 1024, pe = typeof window < "u" ? window.innerHeight : 768;
    ot({
      col: J,
      x: Math.max(8, Math.min(z.clientX, ue - 208 - 8)),
      y: Math.max(8, Math.min(z.clientY, pe - 340 - 8))
    });
  }, Ut = oe(
    () => Je.filter(
      (z) => z.key !== "__abc_actions__" && z.key !== "__actions__" && z.key !== "__drag_handle__"
    ),
    [Je]
  ), Nr = oe(
    () => (S ?? Ut).filter(
      (z) => !z.hideInTable && z.key !== "__abc_actions__" && z.key !== "__actions__" && z.key !== "__drag_handle__"
    ),
    [S, Ut]
  ), $r = (z, J) => {
    if (!H) return;
    const be = Ut.map((te) => te.key), ue = be.indexOf(z);
    if (ue < 0) return;
    const pe = J === "left" ? ue - 1 : ue + 1;
    if (pe < 0 || pe >= be.length) return;
    const ne = [...be];
    [ne[ue], ne[pe]] = [ne[pe], ne[ue]], H(ne), ot(null);
  }, wa = Je.length + (et ? 1 : 0) + (Ye ? 1 : 0), Fr = _e ? ls(Ae.current) : null, Wt = !!(m && Je.some((z) => z.filterable));
  return /* @__PURE__ */ i("div", { className: "relative", children: [
    s && lt.length > 0 && /* @__PURE__ */ e(
      "div",
      {
        "aria-live": "polite",
        "aria-busy": "true",
        className: "pointer-events-auto absolute inset-0 z-30 flex items-center justify-center rounded-[var(--abc-radius-lg)] bg-[var(--abc-bg-surface)]/60 backdrop-blur-[1px] transition-opacity",
        children: /* @__PURE__ */ e(mr, { className: "h-6 w-6 animate-spin text-[var(--abc-primary)]" })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        ref: Ae,
        tabIndex: 0,
        role: "region",
        "aria-label": se,
        "data-motion": he,
        onScroll: dt,
        style: me !== void 0 ? { maxHeight: typeof me == "number" ? `${me}px` : me } : void 0,
        className: h(
          "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          F
        ),
        children: /* @__PURE__ */ i(
          "table",
          {
            style: {
              width: Tt.resolvedTableWidth ? `${Tt.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ i("colgroup", { children: [
                et && /* @__PURE__ */ e("col", { style: { width: "44px" } }),
                Ye && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                Je.map((z) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": z.key,
                    style: { width: `${Tt.resolvedWidths[z.key]}px` }
                  },
                  z.key
                ))
              ] }),
              /* @__PURE__ */ i("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
                /* @__PURE__ */ i("tr", { children: [
                  et && /* @__PURE__ */ e(
                    "th",
                    {
                      style: { left: 0 },
                      className: h(
                        "sticky z-30 w-11 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2.5 py-3 text-center",
                        !wt.hasAnyLeftFixed && It.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
                      ),
                      children: /* @__PURE__ */ e(
                        $a,
                        {
                          checked: Kt,
                          indeterminate: Pr,
                          onChange: hr
                        }
                      )
                    }
                  ),
                  Ye && /* @__PURE__ */ e(
                    "th",
                    {
                      style: wt.hasAnyLeftFixed ? { left: et ? 44 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: h(
                        "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        wt.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  Je.map((z, J) => {
                    const be = Tt.resolvedWidths[z.key], ue = Ze(z), pe = ir(z), ne = (l == null ? void 0 : l.key) === z.key ? l.direction : null, te = Ce === z.key, ke = !!(x != null && x.includes(z.key)), Qe = w == null ? void 0 : w[z.key], ze = Je[J + 1], Oe = ze ? Ze(ze) : void 0, at = !!(ze && Oe !== "right"), At = z.key === wt.firstRightKey, Ct = g && (z.filterable || m) ? g(z) : null, Ne = {
                      width: be ? `${be}px` : void 0,
                      ...ue === "left" ? { left: `${wt.leftOffsets[z.key] ?? 0}px` } : {},
                      ...ue === "right" ? { right: `${wt.rightOffsets[z.key] ?? 0}px` } : {},
                      ...ke ? {
                        backgroundColor: N || "#3b82f6",
                        color: "#ffffff"
                      } : {}
                    }, mt = (tt) => {
                      if (!Ce || !H) return;
                      const Nt = we && we.length > 0 ? we : Je.filter((Zt) => Zt.key !== "__abc_actions__" && Zt.key !== "__actions__").map((Zt) => Zt.key), vt = Nt.indexOf(Ce), Ke = Nt.indexOf(tt);
                      if (vt < 0 || Ke < 0 || vt === Ke) return;
                      if (Ae.current) {
                        const Zt = /* @__PURE__ */ new Map();
                        Ae.current.querySelectorAll("[data-col-key]").forEach((Na) => {
                          const ka = Na.dataset.colKey;
                          ka && Zt.set(ka, Na.getBoundingClientRect().left);
                        }), ve.current = Zt;
                      }
                      const _t = [...Nt], [xt] = _t.splice(vt, 1);
                      _t.splice(Ke, 0, xt), ae.current = !0, Pe(_t), H(_t);
                    };
                    return /* @__PURE__ */ i(
                      "th",
                      {
                        "data-col-key": z.key,
                        "data-dragging": te ? "true" : void 0,
                        draggable: !!(H && !ue && z.key !== "__abc_actions__" && z.key !== "__actions__" && z.key !== "__drag_handle__"),
                        onContextMenu: (tt) => ea(tt, z),
                        onDragStart: (tt) => {
                          const Nt = Je.filter((vt) => vt.key !== "__abc_actions__" && vt.key !== "__actions__").map((vt) => vt.key);
                          Ve.current = Nt, ae.current = !1, st(z.key), Pe(Nt), tt.dataTransfer && (tt.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (tt) => {
                          if (!Ce || Ce === z.key || ue || z.key === "__abc_actions__" || z.key === "__actions__" || !H)
                            return;
                          tt.preventDefault();
                          const Nt = we && we.length > 0 ? we : Je.filter((xt) => xt.key !== "__abc_actions__" && xt.key !== "__actions__").map((xt) => xt.key), vt = Nt.indexOf(Ce), Ke = Nt.indexOf(z.key);
                          if (vt < 0 || Ke < 0 || vt === Ke) return;
                          const _t = tt.currentTarget.getBoundingClientRect();
                          _t.width > 0 && (vt < Ke && tt.clientX < _t.left + _t.width * 0.35 || vt > Ke && tt.clientX > _t.left + _t.width * 0.65) || mt(z.key);
                        },
                        onDrop: () => {
                          Ce && Ce !== z.key && !ae.current && !ue && z.key !== "__abc_actions__" && z.key !== "__actions__" && mt(z.key), st(null), Pe(null), Ve.current = null, ae.current = !1;
                        },
                        onDragEnd: () => {
                          st(null), Pe(null), Ve.current = null, ae.current = !1;
                        },
                        style: Ne,
                        className: h(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          ue === "right" ? "overflow-visible" : "overflow-hidden",
                          Us[o],
                          z.align === "center" && "text-center",
                          z.align === "right" && "text-right",
                          ue === "left" && "sticky z-30",
                          ue === "right" && "sticky z-30",
                          te && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
                          z.key === wt.lastLeftKey && It.left && "shadow-[3px_0_6px_-2px_rgba(15,23,42,0.14)]",
                          z.key === wt.firstRightKey && It.right && "shadow-[-3px_0_6px_-2px_rgba(15,23,42,0.14)]"
                        ),
                        children: [
                          At && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 left-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
                          at && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 right-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
                          /* @__PURE__ */ i(
                            "div",
                            {
                              className: h(
                                "flex min-w-0 items-center gap-1",
                                z.align === "right" && "justify-end",
                                z.align === "center" && "justify-center"
                              ),
                              children: [
                                /* @__PURE__ */ i(
                                  "span",
                                  {
                                    className: h(
                                      "inline-flex min-w-0 items-center gap-1",
                                      pe && (ke ? "cursor-pointer opacity-95 hover:opacity-100" : "cursor-pointer hover:text-[var(--abc-primary)]")
                                    ),
                                    onClick: () => Or(z),
                                    children: [
                                      H && !ue && z.key !== "__abc_actions__" && z.key !== "__actions__" && z.key !== "__drag_handle__" && /* @__PURE__ */ e(
                                        cs,
                                        {
                                          className: h(
                                            "h-3 w-3 shrink-0 -ml-0.5 cursor-grab opacity-0 transition-opacity group-hover:opacity-100",
                                            ke ? "text-white/80" : "text-[var(--abc-fg-placeholder)]"
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ e(
                                        "span",
                                        {
                                          className: "min-w-0 truncate whitespace-nowrap",
                                          title: Qe ? z.title : void 0,
                                          children: Qe || z.title
                                        }
                                      ),
                                      z.tooltip && /* @__PURE__ */ e(tr, { content: z.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (tt) => tt.stopPropagation(),
                                          className: h(
                                            "inline-flex shrink-0",
                                            ke ? "text-white/85 hover:text-white" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                                          ),
                                          children: /* @__PURE__ */ e(Wa, { className: "h-3 w-3" })
                                        }
                                      ) }),
                                      pe && /* @__PURE__ */ e(
                                        "span",
                                        {
                                          className: h(
                                            "inline-flex shrink-0",
                                            ke ? "text-white" : "text-[var(--abc-fg-muted)]"
                                          ),
                                          children: ne === "asc" ? /* @__PURE__ */ e(
                                            Xs,
                                            {
                                              className: h(
                                                "h-3 w-3",
                                                ke ? "text-white" : "text-[var(--abc-primary)]"
                                              )
                                            }
                                          ) : ne === "desc" ? /* @__PURE__ */ e(
                                            Zs,
                                            {
                                              className: h(
                                                "h-3 w-3",
                                                ke ? "text-white" : "text-[var(--abc-primary)]"
                                              )
                                            }
                                          ) : /* @__PURE__ */ e(di, { className: "h-3 w-3 opacity-55" })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                Ct && /* @__PURE__ */ e(
                                  "span",
                                  {
                                    "data-header-filter": "",
                                    onClick: (tt) => tt.stopPropagation(),
                                    className: "inline-flex shrink-0 items-center",
                                    children: Ct
                                  }
                                )
                              ]
                            }
                          ),
                          pr && (ue === "right" ? /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${z.title} 列宽`,
                              onMouseDown: (tt) => Qr(tt, z, "left"),
                              className: "absolute top-0 bottom-0 -left-1 z-30 w-2.5 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ) : /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${z.title} 列宽`,
                              onMouseDown: (tt) => Qr(tt, z, "right"),
                              className: "absolute top-0 right-0 bottom-0 z-20 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ))
                        ]
                      },
                      z.key
                    );
                  })
                ] }),
                Wt && /* @__PURE__ */ i("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  et && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2.5 py-1.5" }),
                  Ye && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  Je.map((z) => {
                    const J = Ze(z);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...J === "left" ? { left: `${wt.leftOffsets[z.key] ?? 0}px` } : {},
                          ...J === "right" ? { right: `${wt.rightOffsets[z.key] ?? 0}px` } : {}
                        },
                        className: h(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          J === "left" && "sticky z-20",
                          J === "right" && "sticky z-20"
                        ),
                        children: z.filterable ? z.filterType === "select" && z.filterOptions ? /* @__PURE__ */ e(
                          br,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: "全部",
                            options: z.filterOptions,
                            value: p[z.key] ?? "",
                            onChange: (be) => f == null ? void 0 : f(z.key, be)
                          }
                        ) : /* @__PURE__ */ e(
                          gt,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: `筛选${z.title}`,
                            value: p[z.key] ?? "",
                            onChange: (be) => f == null ? void 0 : f(z.key, be.target.value)
                          }
                        ) : null
                      },
                      `${z.key}_filter`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e("tbody", { children: s && lt.length === 0 ? Array.from({ length: 5 }).map((z, J) => /* @__PURE__ */ i("tr", { children: [
                et && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2.5 py-3 text-center", children: /* @__PURE__ */ e(Ot, { width: 16, height: 16 }) }),
                Ye && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                Je.map((be) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: h("border-b border-[var(--abc-border)]", Us[o]),
                    children: /* @__PURE__ */ e(Ot, { variant: "text", className: "w-4/5" })
                  },
                  be.key
                ))
              ] }, `sk_${J}`)) : lt.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: wa, children: /* @__PURE__ */ e(Rm, { title: ye, onReset: ee }) }) }) : lt.map(({ record: z, key: J, rowIdx: be, depth: ue, hasTreeChildren: pe }) => {
                var at, At, Ct;
                const ne = !!(et && jt.includes(J)), te = !!((At = (at = b == null ? void 0 : b.getCheckboxProps) == null ? void 0 : at.call(b, z)) != null && At.disabled), ke = ce != null && String(ce) === String(J), Qe = je.includes(J), ze = Ye ? I ? pe : !!(A != null && A.expandedRowRender && (!A.rowExpandable || A.rowExpandable(z))) || !!((Ct = A == null ? void 0 : A.rowExpandable) != null && Ct.call(A, z)) : !1, Oe = (re == null ? void 0 : re(z, be)) ?? {};
                return /* @__PURE__ */ i(ct.Fragment, { children: [
                  /* @__PURE__ */ i(
                    "tr",
                    {
                      ...Oe,
                      draggable: De || Oe.draggable,
                      onDragStart: (Ne) => {
                        var mt;
                        (mt = Oe.onDragStart) == null || mt.call(Oe, Ne), De && Ne.dataTransfer && (Ne.dataTransfer.setData("text/plain", String(J)), Ne.dataTransfer.effectAllowed = "move");
                      },
                      onDragOver: (Ne) => {
                        var mt;
                        (mt = Oe.onDragOver) == null || mt.call(Oe, Ne), De && Ne.preventDefault();
                      },
                      onDrop: (Ne) => {
                        var tt, Nt;
                        if ((tt = Oe.onDrop) == null || tt.call(Oe, Ne), !De || !Xe) return;
                        Ne.preventDefault();
                        const mt = (Nt = Ne.dataTransfer) == null ? void 0 : Nt.getData("text/plain");
                        mt && mt !== String(J) && Xe(mt, J);
                      },
                      "data-state": ke || ne ? "selected" : void 0,
                      tabIndex: G ? 0 : Oe.tabIndex,
                      onClick: (Ne) => {
                        var tt;
                        if ((tt = Oe.onClick) == null || tt.call(Oe, Ne), !G) return;
                        const mt = Ne.target;
                        mt && mt.closest(
                          'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                        ) || G(z, Ne);
                      },
                      onKeyDown: (Ne) => {
                        var mt;
                        (mt = Oe.onKeyDown) == null || mt.call(Oe, Ne), G && Ne.target === Ne.currentTarget && (Ne.key === "Enter" || Ne.key === " ") && (Ne.preventDefault(), G(z, Ne));
                      },
                      className: h(
                        "group transition-colors duration-150",
                        De && "cursor-grab active:cursor-grabbing",
                        ue === 1 && "border-l-4 border-l-blue-400 bg-blue-50/75 dark:border-l-blue-500 dark:bg-blue-950/30",
                        ue >= 2 && "border-l-4 border-l-amber-400 bg-amber-50/75 dark:border-l-amber-500 dark:bg-amber-950/20",
                        G && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                        ne || ke ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85",
                        Oe.className
                      ),
                      children: [
                        et && /* @__PURE__ */ e(
                          "td",
                          {
                            style: { left: 0 },
                            className: h(
                              "sticky z-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2.5 text-center group-hover:bg-[var(--abc-bg-muted)]",
                              (ne || ke) && "bg-[var(--abc-primary-soft)]/60",
                              !wt.hasAnyLeftFixed && It.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
                            ),
                            children: /* @__PURE__ */ e(
                              $a,
                              {
                                checked: ne,
                                disabled: te,
                                onChange: () => Tr(J)
                              }
                            )
                          }
                        ),
                        Ye && /* @__PURE__ */ e(
                          "td",
                          {
                            style: wt.hasAnyLeftFixed ? { left: et ? 44 : 0 } : void 0,
                            className: h(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center whitespace-nowrap",
                              wt.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: ze ? /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": Qe ? "收起详情行" : "展开详情行",
                                "aria-expanded": Qe,
                                onClick: () => bt(J, z),
                                className: "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                children: /* @__PURE__ */ e(
                                  dr,
                                  {
                                    className: h(
                                      "h-3.5 w-3.5 transition-transform duration-150",
                                      Qe && "rotate-90 text-[var(--abc-primary)]"
                                    )
                                  }
                                )
                              }
                            ) : /* @__PURE__ */ e("span", { className: "inline-block w-4" })
                          }
                        ),
                        Je.map((Ne, mt) => {
                          const tt = Ne.dataIndex ?? Ne.key, Nt = ms(z, tt), vt = Ze(Ne), Ke = Ne.key === "__abc_actions__" || Ne.key === "__actions__", _t = Ne.render ? Ne.render(Nt, z, I ? ue : be, {
                            depth: ue,
                            rowIndex: be,
                            isExpanded: Qe
                          }) : Gc(Nt, z, Ne, Y), xt = !Ye && mt === 0 && (ue > 0 || pe), Zt = Ye && mt === 0 && ue > 0;
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": Ne.key,
                              style: {
                                ...vt === "left" ? { left: `${wt.leftOffsets[Ne.key] ?? 0}px` } : {},
                                ...vt === "right" ? { right: `${wt.rightOffsets[Ne.key] ?? 0}px` } : {},
                                ...Zt ? { paddingLeft: `${12 + ue * Ir}px` } : {}
                              },
                              className: h(
                                "overflow-hidden border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                Us[o],
                                Ne.align === "center" && "text-center",
                                Ne.align === "right" && "text-right",
                                Ce === Ne.key && "bg-[var(--abc-primary-soft)]/30",
                                vt === "left" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                vt === "right" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                (ne || ke) && (vt === "left" || vt === "right") && "bg-[var(--abc-primary-soft)]/60",
                                Ne.key === wt.lastLeftKey && It.left && "shadow-[6px_0_8px_-6px_rgba(15,23,42,0.22)]",
                                Ne.key === wt.firstRightKey && It.right && "shadow-[-6px_0_8px_-6px_rgba(15,23,42,0.22)]"
                              ),
                              children: xt ? /* @__PURE__ */ i(
                                "div",
                                {
                                  style: { paddingLeft: `${ue * Ir}px` },
                                  className: "inline-flex max-w-full items-center gap-1",
                                  children: [
                                    pe ? /* @__PURE__ */ e(
                                      "button",
                                      {
                                        type: "button",
                                        "aria-label": Qe ? "收起子项" : "展开子项",
                                        "aria-expanded": Qe,
                                        onClick: () => bt(J, z),
                                        className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                        children: /* @__PURE__ */ e(
                                          dr,
                                          {
                                            className: h(
                                              "h-3 w-3 transition-transform duration-150",
                                              Qe && "rotate-90 text-[var(--abc-primary)]"
                                            )
                                          }
                                        )
                                      }
                                    ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                                    /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: _t })
                                  ]
                                }
                              ) : Ne.ellipsis === !1 ? _t : /* @__PURE__ */ e(
                                "div",
                                {
                                  title: Ke || Nt === void 0 || Nt === null || typeof Nt == "object" ? void 0 : String(Nt),
                                  className: h(
                                    "overflow-hidden text-ellipsis whitespace-nowrap",
                                    Ke ? "w-full min-w-0" : "w-0 min-w-full"
                                  ),
                                  children: _t
                                }
                              )
                            },
                            Ne.key
                          );
                        })
                      ]
                    }
                  ),
                  ze && Qe && (A == null ? void 0 : A.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: wa,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: A.expandedRowRender(z, be, ue, Qe)
                    }
                  ) })
                ] }, String(J));
              }) })
            ]
          }
        )
      }
    ),
    _e && Fr && (() => {
      const z = Ze(_e.col), J = Ut.findIndex((te) => te.key === _e.col.key), be = J > 0 && !z, ue = J >= 0 && J < Ut.length - 1 && !z, pe = Ut.length > 1, ne = N || "#3b82f6";
      return xr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: Fe,
            role: "menu",
            "aria-label": `${_e.col.title} 列操作菜单`,
            "data-abc-floating": "",
            "data-motion": he,
            style: { top: `${_e.y}px`, left: `${_e.x}px` },
            className: h(
              "fixed z-[1350] w-50 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
              he !== "none" && "abc-animate-popover-in"
            ),
            children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                /* @__PURE__ */ e("span", { className: "truncate font-semibold text-[var(--abc-fg)]", children: _e.col.title }),
                /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "列属性" })
              ] }),
              ir(_e.col) && u && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      u(_e.col.key, "asc"), ot(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(Xs, { className: "h-3.5 w-3.5" }),
                        " 升序排列"
                      ] }),
                      (l == null ? void 0 : l.key) === _e.col.key && l.direction === "asc" && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      u(_e.col.key, "desc"), ot(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(Zs, { className: "h-3.5 w-3.5" }),
                        " 降序排列"
                      ] }),
                      (l == null ? void 0 : l.key) === _e.col.key && l.direction === "desc" && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                (l == null ? void 0 : l.key) === _e.col.key && l.direction && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      u(_e.col.key, null), ot(null);
                    },
                    className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(di, { className: "h-3.5 w-3.5" }),
                      " 清除排序"
                    ]
                  }
                )
              ] }),
              j && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      j(_e.col.key, z === "left" ? null : "left"), ot(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(Oa, { className: "h-3.5 w-3.5 -rotate-45" }),
                        " 固定到左侧"
                      ] }),
                      z === "left" && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      j(_e.col.key, z === "right" ? null : "right"), ot(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(Oa, { className: "h-3.5 w-3.5 rotate-45" }),
                        " 固定到右侧"
                      ] }),
                      z === "right" && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                z && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      j(_e.col.key, null), ot(null);
                    },
                    className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(Pu, { className: "h-3.5 w-3.5" }),
                      " 取消固定"
                    ]
                  }
                )
              ] }),
              H && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    disabled: !be,
                    onClick: () => $r(_e.col.key, "left"),
                    className: h(
                      "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                      be ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ e(Ou, { className: "h-3.5 w-3.5" }),
                      " 向左移动"
                    ]
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    disabled: !ue,
                    onClick: () => $r(_e.col.key, "right"),
                    className: h(
                      "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                      ue ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ e(lc, { className: "h-3.5 w-3.5" }),
                      " 向右移动"
                    ]
                  }
                )
              ] }),
              (D || L && Nr.length > 0) && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                D && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    disabled: !pe,
                    onClick: () => {
                      pe && (D(_e.col.key), ot(null));
                    },
                    className: h(
                      "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                      pe ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ e(sc, { className: "h-3.5 w-3.5" }),
                      " 隐藏当前列"
                    ]
                  }
                ),
                L && Nr.length > 0 && /* @__PURE__ */ i(
                  "div",
                  {
                    className: "relative",
                    onMouseEnter: () => fr(!0),
                    onMouseLeave: () => fr(!1),
                    children: [
                      /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          role: "menuitem",
                          "aria-haspopup": "menu",
                          "aria-expanded": wr,
                          onClick: () => fr((te) => !te),
                          className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: [
                            /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                              /* @__PURE__ */ e($u, { className: "h-3.5 w-3.5" }),
                              " 显示 / 隐藏列"
                            ] }),
                            /* @__PURE__ */ e(dr, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]" })
                          ]
                        }
                      ),
                      wr && /* @__PURE__ */ i(
                        "div",
                        {
                          role: "menu",
                          "aria-label": "显示与隐藏列清单",
                          style: {
                            left: typeof window < "u" && _e.x + 208 + 196 > window.innerWidth ? void 0 : "100%",
                            right: typeof window < "u" && _e.x + 208 + 196 > window.innerWidth ? "100%" : void 0,
                            top: -4
                          },
                          className: "absolute z-[1360] mx-1 max-h-64 w-46 overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
                          children: [
                            /* @__PURE__ */ e("div", { className: "px-2 py-1 text-[10px] font-medium text-[var(--abc-fg-muted)]", children: "勾选以显示列" }),
                            Nr.map((te) => {
                              const ke = !M.includes(te.key), Qe = ke && Ut.length <= 1;
                              return /* @__PURE__ */ i(
                                "button",
                                {
                                  type: "button",
                                  role: "menuitemcheckbox",
                                  "aria-checked": ke,
                                  disabled: Qe,
                                  onClick: () => {
                                    Qe || L(te.key);
                                  },
                                  className: h(
                                    "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left",
                                    Qe ? "text-[var(--abc-fg-placeholder)] cursor-not-allowed" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                                  ),
                                  children: [
                                    /* @__PURE__ */ e("span", { className: "truncate", children: te.title }),
                                    /* @__PURE__ */ e(
                                      "span",
                                      {
                                        className: h(
                                          "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors",
                                          ke ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                        ),
                                        children: ke && /* @__PURE__ */ e(kt, { className: "h-2.5 w-2.5 stroke-[3]" })
                                      }
                                    )
                                  ]
                                },
                                te.key
                              );
                            })
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }),
              v && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] px-2.5 py-2", children: [
                /* @__PURE__ */ i("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
                  /* @__PURE__ */ e(mo, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "筛选高亮颜色" })
                ] }),
                /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: mp.map((te) => {
                  const ke = ne === te.color;
                  return /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: te.label,
                      "aria-label": `筛选高亮颜色 ${te.label}`,
                      onClick: () => v(te.color),
                      style: { backgroundColor: te.color },
                      className: h(
                        "h-4 w-4 rounded-full transition-transform cursor-pointer",
                        ke ? "scale-110 ring-2 ring-slate-900 ring-offset-1 dark:ring-white dark:ring-offset-slate-900" : "opacity-80 hover:scale-110 hover:opacity-100"
                      )
                    },
                    te.color
                  );
                }) })
              ] }),
              B && /* @__PURE__ */ e("div", { className: "pt-1", children: /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    B(), ot(null);
                  },
                  className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
                    " 重置列配置"
                  ]
                }
              ) })
            ]
          }
        ),
        Fr
      );
    })()
  ] });
}
const pp = ge.forwardRef(
  ({ className: t, scrollLabel: a, wrapperClassName: r, ...n }, s) => /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "table-wrapper",
      role: a ? "region" : void 0,
      "aria-label": a,
      tabIndex: a ? 0 : void 0,
      className: h(
        "relative w-full max-w-full overflow-auto [container-type:inline-size] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        r
      ),
      children: /* @__PURE__ */ e(
        "table",
        {
          ref: s,
          className: h("w-full caption-bottom text-sm border-collapse text-[var(--abc-fg)]", t),
          ...n
        }
      )
    }
  )
);
pp.displayName = "Table";
const hp = ge.forwardRef(
  ({ className: t, sticky: a = !1, ...r }, n) => /* @__PURE__ */ e(
    "thead",
    {
      ref: n,
      className: h(
        "bg-[var(--abc-bg-muted)] [&_tr]:border-b [&_tr]:border-[var(--abc-border)]",
        a && "sticky top-0 z-10 bg-[var(--abc-bg-surface)] backdrop-blur-xs shadow-[0_1px_0_0_var(--abc-border)]",
        t
      ),
      ...r
    }
  )
);
hp.displayName = "TableHeader";
const gp = ge.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("tbody", { ref: r, className: h("[&_tr:last-child]:border-0", t), ...a }));
gp.displayName = "TableBody";
const vp = ge.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: r,
    className: h("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...a
  }
));
vp.displayName = "TableFooter";
const xp = ge.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "tr",
  {
    ref: r,
    className: h(
      "border-b border-[var(--abc-border)] transition-colors hover:bg-[var(--abc-bg-subtle)] data-[state=selected]:bg-[var(--abc-primary-soft)]",
      t
    ),
    ...a
  }
));
xp.displayName = "TableRow";
const yp = ge.forwardRef(({ className: t, scope: a = "col", ...r }, n) => /* @__PURE__ */ e(
  "th",
  {
    ref: n,
    scope: a,
    className: h(
      "h-10 px-3 text-left align-middle text-[11px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]",
      t
    ),
    ...r
  }
));
yp.displayName = "TableHead";
const wp = ge.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("td", { ref: r, className: h("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...a }));
wp.displayName = "TableCell";
const Np = ge.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("caption", { ref: r, className: h("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...a }));
Np.displayName = "TableCaption";
const kp = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, Sp = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, Cp = {
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
  showFooter: !1,
  routeProgress: !0
}, ya = {
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
}, Yr = "transition-[background-color,color,box-shadow,transform] duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-active)] motion-safe:enabled:active:scale-[var(--abc-press-scale)]";
function qr(t, a) {
  var r;
  return t.path && (a === t.path || a.startsWith(`${t.path}/`)) ? !0 : !!((r = t.children) != null && r.some((n) => qr(n, a)));
}
function Yc(t, a, r = []) {
  var n;
  for (const s of t) {
    const o = [...r, s];
    if (s.path === a) return o;
    if ((n = s.children) != null && n.length) {
      const d = Yc(s.children, a, o);
      if (d.length > 0) return d;
    }
  }
  return [];
}
function Br(t, a, r = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(jr, { name: t, size: r, registry: a }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const Bo = ({ items: t, pathname: a, registry: r, size: n, onSelect: s, depth: o = 0 }) => {
  const d = ya[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "space-y-0.5",
        o > 0 && h("border-l border-[var(--abc-border)]", d.flyoutSubIndent)
      ),
      children: t.map((c) => {
        const b = !!(c.children && c.children.length > 0), l = c.path === a, u = b && qr(c, a);
        return b ? /* @__PURE__ */ i("div", { className: "py-0.5", children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: h(
                "flex items-center gap-1.5 font-semibold select-none",
                d.flyoutHeadingText,
                u ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
              ),
              children: [
                Br(c.icon, r, d.flyoutHeadingIcon),
                /* @__PURE__ */ e("span", { className: "truncate", children: c.label })
              ]
            }
          ),
          /* @__PURE__ */ e(
            Bo,
            {
              items: c.children,
              pathname: a,
              registry: r,
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
            className: h(
              "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
              Yr,
              d.flyoutItem,
              l ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
              c.disabled && "opacity-45 cursor-not-allowed"
            ),
            children: [
              Br(c.icon, r, d.flyoutIcon),
              /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: c.label }),
              c.badge !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: h(
                    "rounded-full bg-[var(--abc-primary-soft)] font-mono text-[var(--abc-primary)]",
                    d.badge
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
}, Pa = ({ brand: t, collapsed: a = !1, tone: r = "light", size: n, className: s }) => {
  const o = Be(n, "sm"), d = ya[o], c = r === "dark", b = oe(() => t.logo ? typeof t.logo == "string" ? Wc(t.logo) ? /* @__PURE__ */ e(
    "div",
    {
      className: h(
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
      className: h("shrink-0 rounded-[var(--abc-radius-md)] object-contain", d.brandLogoBox)
    }
  ) : /* @__PURE__ */ e("div", { className: "shrink-0", children: t.logo }) : /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-[var(--abc-motion-fast)] group-hover:scale-[1.03]",
        d.brandLogoBox
      ),
      children: t.name.slice(0, 1).toUpperCase()
    }
  ), [t.logo, t.name, d.brandLogoBox]);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-size": o,
      className: h(
        "group flex items-center select-none",
        d.brandGap,
        a ? h("justify-center", d.brandWrapCollapsed) : d.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            onClick: t.onClick,
            className: h(
              "flex min-w-0 flex-1 items-center",
              d.brandGap,
              t.onClick && "cursor-pointer"
            ),
            children: [
              b,
              !a && /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: h(
                      "truncate font-bold tracking-tight",
                      d.brandTitle,
                      c ? "text-white" : "text-[var(--abc-fg)]"
                    ),
                    children: t.name
                  }
                ),
                t.subtitle && /* @__PURE__ */ e(
                  "div",
                  {
                    className: h(
                      "truncate",
                      d.brandSubtitle,
                      c ? "text-slate-400" : "text-[var(--abc-fg-muted)]"
                    ),
                    children: t.subtitle
                  }
                )
              ] })
            ]
          }
        ),
        !a && t.onEditBrand && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "编辑品牌信息",
            title: "修改品牌 Logo 与名称",
            onClick: (l) => {
              var u;
              l.stopPropagation(), (u = t.onEditBrand) == null || u.call(t);
            },
            className: h(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              c ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(Fu, { className: d.brandEditIcon })
          }
        )
      ]
    }
  );
}, _p = ({ item: t, pathname: a, isDark: r, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = ya[s], [b, l] = $(!1), { isMounted: u, isVisible: m } = ca(b, o === "none" ? 0 : 140), p = ie(null), f = ie(null), g = ie(null), x = Et(), w = qr(t, a), { style: N, actualSide: v, portalContainer: S } = Ua({
    open: u,
    triggerRef: p,
    floatingRef: f,
    placement: "rightStart",
    offset: 8
  }), M = de(() => {
    g.current !== null && typeof window < "u" && (window.clearTimeout(g.current), g.current = null);
  }, []);
  fe(() => () => M(), [M]);
  const L = () => {
    M(), l(!0);
  }, R = () => {
    M(), typeof window < "u" && (g.current = window.setTimeout(() => {
      l(!1), g.current = null;
    }, 140));
  };
  return fe(() => {
    if (!b) return;
    const C = (E) => {
      var j, D;
      const _ = E.target;
      (j = p.current) != null && j.contains(_) || (D = f.current) != null && D.contains(_) || l(!1);
    }, y = (E) => {
      var _;
      E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), l(!1), (_ = p.current) == null || _.focus());
    };
    return document.addEventListener("mousedown", C), document.addEventListener("keydown", y, !0), () => {
      document.removeEventListener("mousedown", C), document.removeEventListener("keydown", y, !0);
    };
  }, [b]), /* @__PURE__ */ i(qe, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: L, onMouseLeave: R, children: /* @__PURE__ */ e(
      "button",
      {
        ref: p,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": b,
        "aria-haspopup": "menu",
        "aria-controls": b ? x : void 0,
        onClick: () => l((C) => !C),
        onKeyDown: (C) => {
          (C.key === "ArrowRight" || C.key === "ArrowDown") && (C.preventDefault(), l(!0), window.requestAnimationFrame(() => {
            var y, E;
            (E = (y = f.current) == null ? void 0 : y.querySelector('[role="menuitem"]:not(:disabled)')) == null || E.focus();
          }));
        },
        className: h(
          "flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer",
          Yr,
          c.collapsedBtn,
          w ? r ? "bg-white/12 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : r ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: Br(t.icon ?? "folder", n, c.collapsedIcon)
      }
    ) }),
    u && S && xr(
      /* @__PURE__ */ i(
        "div",
        {
          ref: f,
          id: x,
          role: "menu",
          "aria-label": t.label,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": v,
          style: N,
          onMouseEnter: L,
          onMouseLeave: R,
          onKeyDown: (C) => {
            var _, j, D;
            const y = Array.from(
              ((_ = f.current) == null ? void 0 : _.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const E = y.indexOf(document.activeElement);
            C.key === "ArrowDown" ? (C.preventDefault(), (j = y[(E + 1) % y.length]) == null || j.focus()) : C.key === "ArrowUp" && (C.preventDefault(), (D = y[(E - 1 + y.length) % y.length]) == null || D.focus());
          },
          className: h(
            "z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
            // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
            v === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
            c.flyoutPanel,
            o !== "none" && (m ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: h(
                  "mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]",
                  c.flyoutHeader
                ),
                children: t.label
              }
            ),
            /* @__PURE__ */ e(
              Bo,
              {
                items: t.children ?? [],
                pathname: a,
                registry: n,
                size: s,
                onSelect: (C, y) => {
                  d(C, y), l(!1);
                }
              }
            )
          ]
        }
      ),
      S
    )
  ] });
}, Vs = ({
  brand: t,
  items: a,
  pathname: r,
  collapsed: n = !1,
  accordion: s = !0,
  tone: o = "dark",
  size: d,
  motion: c,
  onNavigate: b,
  className: l
}) => {
  const { iconRegistry: u } = Mt(), m = Be(d, "sm"), p = Te(c), f = ya[m], g = o === "dark", [x, w] = $(
    () => a.filter((v) => {
      var S;
      return ((S = v.children) == null ? void 0 : S.length) && qr(v, r);
    }).map((v) => v.key)
  );
  fe(() => {
    const v = a.filter((S) => {
      var M;
      return ((M = S.children) == null ? void 0 : M.length) && qr(S, r);
    }).map((S) => S.key);
    v.length > 0 && w(
      (S) => s ? [v[0]] : Array.from(/* @__PURE__ */ new Set([...S, ...v]))
    );
  }, [r, a, s]);
  const N = (v) => {
    w((S) => S.includes(v) ? S.filter((M) => M !== v) : s ? [v] : [...S, v]);
  };
  return /* @__PURE__ */ i(
    "aside",
    {
      "aria-label": "侧边主导航",
      "data-size": m,
      "data-motion": p,
      style: {
        width: n ? "var(--abc-sidebar-collapsed-w)" : "var(--abc-sidebar-w)"
      },
      className: h(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        g ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        l
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: h(
              "flex h-[var(--abc-header-h)] shrink-0 items-center border-b",
              g ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              Pa,
              {
                brand: t,
                collapsed: n,
                tone: o,
                size: m,
                className: "w-full"
              }
            )
          }
        ),
        /* @__PURE__ */ e("nav", { className: h("flex-1 overflow-y-auto", f.navPadding), children: a.map((v) => {
          const S = !!(v.children && v.children.length > 0), M = v.path === r, L = qr(v, r), R = x.includes(v.key);
          if (!S) {
            const C = /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                disabled: v.disabled,
                "aria-label": n ? v.label : void 0,
                onClick: () => v.path && b(v.path, v),
                className: h(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Yr,
                  f.itemButton,
                  n && h("justify-center px-0", f.collapsedBtn),
                  M ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : g ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  v.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  Br(v.icon, u, n ? f.collapsedIcon : f.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: v.label }),
                  !n && v.badge !== void 0 && /* @__PURE__ */ e("span", { className: h("rounded-full bg-white/15 font-mono", f.badge), children: v.badge })
                ]
              },
              v.key
            );
            return n ? /* @__PURE__ */ e(
              tr,
              {
                content: v.label,
                placement: "right",
                motion: p,
                className: "flex w-full",
                children: C
              },
              v.key
            ) : C;
          }
          return n ? /* @__PURE__ */ e(
            _p,
            {
              item: v,
              pathname: r,
              isDark: g,
              registry: u,
              size: m,
              motion: p,
              onNavigate: b
            },
            v.key
          ) : /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-expanded": R,
                onClick: () => N(v.key),
                className: h(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Yr,
                  f.itemButton,
                  L ? g ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : g ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  Br(v.icon, u, f.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: v.label }),
                  /* @__PURE__ */ e(
                    sr,
                    {
                      className: h(
                        "shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]",
                        f.chevron,
                        !R && "-rotate-90"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                inert: R ? void 0 : "",
                className: h(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  R ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: h(
                      "border-l",
                      f.subWrap,
                      g ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: v.children.map((C) => {
                      const y = C.path === r;
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: C.disabled,
                          onClick: () => C.path && b(C.path, C),
                          className: h(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            Yr,
                            f.subButton,
                            y ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : g ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            C.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            Br(C.icon, u, f.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: C.label }),
                            C.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: h(
                                  "rounded-full font-mono",
                                  f.badge,
                                  y ? "bg-white/20" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]"
                                ),
                                children: C.badge
                              }
                            )
                          ]
                        },
                        C.key
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
}, Ip = ({ item: t, pathname: a, isActive: r, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = ya[s], [b, l] = $(!1), { isMounted: u, isVisible: m } = ca(b, o === "none" ? 0 : 140), p = ie(null), f = ie(null), g = ie(null), x = Et(), { style: w, actualSide: N, portalContainer: v } = Ua({
    open: u,
    triggerRef: p,
    floatingRef: f,
    placement: "bottomLeft",
    offset: 6
  }), S = de(() => {
    g.current !== null && typeof window < "u" && (window.clearTimeout(g.current), g.current = null);
  }, []);
  fe(() => () => S(), [S]);
  const M = () => {
    S(), l(!0);
  }, L = () => {
    S(), typeof window < "u" && (g.current = window.setTimeout(() => {
      l(!1), g.current = null;
    }, 150));
  };
  fe(() => {
    if (!b) return;
    const C = (E) => {
      var j, D;
      const _ = E.target;
      (j = p.current) != null && j.contains(_) || (D = f.current) != null && D.contains(_) || l(!1);
    }, y = (E) => {
      var _;
      E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), l(!1), (_ = p.current) == null || _.focus());
    };
    return document.addEventListener("mousedown", C), document.addEventListener("keydown", y, !0), () => {
      document.removeEventListener("mousedown", C), document.removeEventListener("keydown", y, !0);
    };
  }, [b]);
  const R = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var C, y;
      (y = (C = f.current) == null ? void 0 : C.querySelector('[role="menuitem"]:not(:disabled)')) == null || y.focus();
    });
  };
  return /* @__PURE__ */ i(qe, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: M,
        onMouseLeave: L,
        className: "relative flex-none",
        children: /* @__PURE__ */ i(
          "button",
          {
            ref: p,
            type: "button",
            "aria-expanded": b,
            "aria-haspopup": "menu",
            "aria-controls": b ? x : void 0,
            onClick: () => l((C) => !C),
            onKeyDown: (C) => {
              C.key === "ArrowDown" && (C.preventDefault(), l(!0), R());
            },
            className: h(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Yr,
              c.topItem,
              r ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : b ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              Br(t.icon, n, c.topIcon),
              /* @__PURE__ */ e("span", { children: t.label }),
              /* @__PURE__ */ e(
                sr,
                {
                  className: h(
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
    u && v && xr(
      /* @__PURE__ */ e(
        "div",
        {
          ref: f,
          id: x,
          role: "menu",
          "aria-label": `${t.label} 子菜单`,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": N,
          style: w,
          onMouseEnter: M,
          onMouseLeave: L,
          onKeyDown: (C) => {
            var _, j, D, B, H;
            const y = Array.from(
              ((_ = f.current) == null ? void 0 : _.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const E = y.indexOf(document.activeElement);
            C.key === "ArrowDown" ? (C.preventDefault(), (j = y[(E + 1) % y.length]) == null || j.focus()) : C.key === "ArrowUp" ? (C.preventDefault(), (D = y[(E - 1 + y.length) % y.length]) == null || D.focus()) : C.key === "Home" ? (C.preventDefault(), (B = y[0]) == null || B.focus()) : C.key === "End" && (C.preventDefault(), (H = y[y.length - 1]) == null || H.focus());
          },
          className: h(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            N === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            c.flyoutPanel,
            o !== "none" && (m ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            Bo,
            {
              items: t.children ?? [],
              pathname: a,
              registry: n,
              size: s,
              onSelect: (C, y) => {
                d(C, y), l(!1);
              }
            }
          )
        }
      ),
      v
    )
  ] });
}, Oi = ({
  items: t,
  pathname: a,
  topLevelOnly: r = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: d,
  onNavigate: c
}) => {
  const { iconRegistry: b } = Mt(), l = Be(s, "sm"), u = Te(o), m = ya[l];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": l,
      "data-motion": u,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((p) => {
        var g;
        const f = r ? n === p.key : qr(p, a);
        return r || !((g = p.children) != null && g.length) ? /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => {
              r && d ? d(p) : p.path && c(p.path, p);
            },
            className: h(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Yr,
              m.topItem,
              f ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              Br(p.icon, b, m.topIcon),
              /* @__PURE__ */ e("span", { children: p.label })
            ]
          },
          p.key
        ) : /* @__PURE__ */ e(
          Ip,
          {
            item: p,
            pathname: a,
            isActive: f,
            registry: b,
            size: l,
            motion: u,
            onNavigate: c
          },
          p.key
        );
      })
    }
  );
}, Tp = ({ brand: t, items: a, pathname: r, tone: n = "dark", size: s, motion: o, className: d, onNavigate: c }) => {
  const { iconRegistry: b } = Mt(), l = Be(s, "sm"), u = Te(o), m = ya[l], p = n === "dark", f = oe(
    () => a.find((v) => qr(v, r)) ?? a[0],
    [a, r]
  ), [g, x] = $((f == null ? void 0 : f.key) ?? "");
  fe(() => {
    f != null && f.key && x(f.key);
  }, [f == null ? void 0 : f.key]);
  const w = a.find((v) => v.key === g) ?? f, N = (w == null ? void 0 : w.children) ?? [];
  return /* @__PURE__ */ i(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": l,
      "data-motion": u,
      className: h("flex h-full shrink-0 select-none", d),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: h(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              p ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Pa, { brand: t, collapsed: !0, tone: n, size: l }) }),
              /* @__PURE__ */ e("div", { className: h("flex w-full flex-1 flex-col items-center overflow-y-auto", m.dualRailWrap), children: a.map((v) => {
                const S = v.key === (w == null ? void 0 : w.key);
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var M, L, R;
                      x(v.key), !((M = v.children) != null && M.length) && v.path ? c(v.path, v) : (R = (L = v.children) == null ? void 0 : L[0]) != null && R.path && c(v.children[0].path, v.children[0]);
                    },
                    className: h(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      Yr,
                      m.dualRailItem,
                      S ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : p ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      Br(v.icon ?? "folder", b, m.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: h("truncate", m.dualRailLabelMaxW), children: v.label.slice(0, 4) })
                    ]
                  },
                  v.key
                );
              }) })
            ]
          }
        ),
        N.length > 0 && /* @__PURE__ */ i(
          "div",
          {
            style: { width: "var(--abc-dual-panel-w)" },
            className: "flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
            children: [
              /* @__PURE__ */ i(
                "div",
                {
                  className: h(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    m.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: h("truncate font-bold text-[var(--abc-fg)]", m.dualPanelTitle), children: w == null ? void 0 : w.label }),
                    /* @__PURE__ */ e(dr, { className: h("text-[var(--abc-fg-muted)]", m.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: h("flex-1 overflow-y-auto", m.dualPanelWrap), children: N.map((v) => {
                const S = v.path === r;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: v.disabled,
                    onClick: () => !v.disabled && v.path && c(v.path, v),
                    className: h(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      Yr,
                      m.dualPanelItem,
                      S ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      v.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      Br(v.icon, b, m.dualPanelIcon),
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
}, Ep = {
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
}, Mp = ({
  tabs: t,
  activePath: a,
  variant: r = "card",
  size: n,
  motion: s,
  onSelect: o,
  onClose: d,
  onCloseOthers: c,
  onCloseRight: b,
  onCloseAll: l,
  onTogglePin: u,
  onRefresh: m,
  className: p
}) => {
  var N;
  const { iconRegistry: f } = Mt(), g = Be(n, "sm"), x = Te(s), w = Ep[g];
  return t.length === 0 ? null : /* @__PURE__ */ i(
    "div",
    {
      "data-size": g,
      "data-motion": x,
      className: h(
        "flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none",
        w.barPadding,
        p
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]", children: t.map((v) => {
          const S = v.path === a, M = v.closable !== !1 && !v.pinned, L = r === "pill" ? S ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : r === "underline" ? S ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : S ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ i(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(v.path),
              onKeyDown: (R) => {
                (R.key === "Enter" || R.key === " ") && (R.preventDefault(), o(v.path));
              },
              className: h(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                w.tabItem,
                L
              ),
              children: [
                v.pinned && /* @__PURE__ */ e(Oa, { className: h("shrink-0 opacity-75", w.pinIcon) }),
                v.icon && (typeof v.icon == "string" ? /* @__PURE__ */ e(jr, { name: v.icon, size: w.tabIcon, registry: f }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: v.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: v.title }),
                M && d && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${v.title}`,
                    onClick: (R) => {
                      R.stopPropagation(), d(v.path);
                    },
                    className: h(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      r === "pill" && S ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(St, { className: w.closeIcon })
                  }
                )
              ]
            },
            v.path
          );
        }) }),
        /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
          m && /* @__PURE__ */ e(tr, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => m(a),
              className: h(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                w.actionBtn
              ),
              children: /* @__PURE__ */ e(ss, { className: w.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            vn,
            {
              items: [
                ...u ? [
                  {
                    key: "pin",
                    label: (N = t.find((v) => v.path === a)) != null && N.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(Oa, { className: "h-3.5 w-3.5" }),
                    onClick: () => u(a)
                  }
                ] : [],
                ...c ? [
                  {
                    key: "others",
                    label: "关闭其他页签",
                    onClick: () => c(a)
                  }
                ] : [],
                ...b ? [
                  {
                    key: "right",
                    label: "关闭右侧页签",
                    onClick: () => b(a)
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
                  className: h(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    w.actionBtn
                  ),
                  children: /* @__PURE__ */ e(fo, { className: w.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, Ap = ({
  activeKey: t,
  enabled: a = !0,
  maxCached: r = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o,
  refreshKeys: d,
  activeClassName: c,
  isolateError: b = !1,
  onTabReload: l,
  onTabClose: u,
  onNavigateHome: m,
  children: p
}) => {
  const f = ie(/* @__PURE__ */ new Map()), g = ie(0), x = ie(/* @__PURE__ */ new Map()), w = (d == null ? void 0 : d[t]) ?? o ?? 0;
  fe(() => {
    const S = s == null ? void 0 : s.current;
    if (!S) return;
    const M = () => {
      t && x.current.set(t, S.scrollTop);
    };
    return S.addEventListener("scroll", M, { passive: !0 }), () => S.removeEventListener("scroll", M);
  }, [t, s]), ln(() => {
    const S = s == null ? void 0 : s.current;
    S && (a ? S.scrollTop = x.current.get(t) ?? 0 : S.scrollTop = 0);
  }, [t, a, w, s]), fe(() => {
    if (typeof window > "u") return;
    const S = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(S);
  }, [t]);
  const N = (S, M) => b ? /* @__PURE__ */ e(
    ep,
    {
      path: S,
      onReload: l ? () => l(S) : void 0,
      onClose: u ? () => u(S) : void 0,
      onNavigateHome: m,
      children: M
    }
  ) : M;
  if (!a)
    return f.current.clear(), /* @__PURE__ */ e(
      "div",
      {
        className: h("min-h-full w-full min-w-0", c),
        children: N(t, p)
      },
      `${t}_${w}`
    );
  if (n && n.length > 0) {
    const S = /* @__PURE__ */ new Set([...n, t]);
    for (const M of Array.from(f.current.keys()))
      S.has(M) || (f.current.delete(M), x.current.delete(M));
  }
  g.current += 1;
  const v = f.current.get(t);
  for (f.current.set(t, {
    key: t,
    seed: w,
    lastActiveTick: g.current,
    node: v && v.seed === w ? v.node : p
  }); f.current.size > r; ) {
    let S = null, M = 1 / 0;
    for (const [L, R] of f.current.entries())
      L !== t && R.lastActiveTick < M && (M = R.lastActiveTick, S = L);
    if (S)
      f.current.delete(S), x.current.delete(S);
    else
      break;
  }
  return /* @__PURE__ */ e(qe, { children: Array.from(f.current.values()).map((S) => {
    const M = S.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: M ? "block" : "none" },
        className: h("min-h-full w-full min-w-0", M && c),
        children: N(S.key, S.node)
      },
      `${S.key}_${S.seed}`
    );
  }) });
}, qc = "abc_cmd_recent_v1", Xc = 5;
function $i() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem(qc);
    if (!t) return [];
    const a = JSON.parse(t);
    return Array.isArray(a) ? a.filter((r) => typeof r == "string") : [];
  } catch {
    return [];
  }
}
function Fi(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(qc, JSON.stringify(t.slice(0, Xc)));
    } catch {
    }
}
function Zc(t, a = []) {
  var n;
  const r = [];
  for (const s of t) {
    const o = [...a, s.label];
    s.path && (!s.children || s.children.length === 0) && r.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && r.push(...Zc(s.children, o));
  }
  return r;
}
function Wi(t, a) {
  const r = a.trim();
  if (!r) return t;
  const n = t.toLowerCase(), s = r.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const d = t.slice(0, o), c = t.slice(o, o + r.length), b = t.slice(o + r.length);
  return /* @__PURE__ */ i(qe, { children: [
    d,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: c }),
    b
  ] });
}
const Lp = ({
  open: t,
  onClose: a,
  menuItems: r = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = Mt(), [d, c] = $(""), [b, l] = $("all"), [u, m] = $(0), [p, f] = $(() => $i()), g = ie(null), x = ie(null);
  fe(() => {
    t ? f($i()) : (c(""), l("all"), m(0));
  }, [t]);
  const w = oe(() => [
    ...Zc(r).map(({ item: E, trail: _ }) => ({
      id: `nav_${E.key}`,
      title: E.label,
      subtitle: `${_}${E.path ? ` · ${E.path}` : ""}`,
      group: "页面导航",
      icon: E.icon ?? "file",
      keywords: E.path,
      onTrigger: () => {
        E.path && (n == null || n(E.path, E));
      }
    })),
    ...s.map((E) => ({
      ...E,
      group: E.group || "快捷指令"
    }))
  ], [r, n, s]), N = oe(() => {
    const y = /* @__PURE__ */ new Set();
    for (const E of w)
      E.group && y.add(E.group);
    return Array.from(y);
  }, [w]), v = oe(() => {
    const y = d.trim(), E = (B) => b !== "all" && b !== "__recent__" && B.group !== b ? !1 : y ? ur(B.title, y) || !!(B.subtitle && ur(B.subtitle, y)) || !!(B.keywords && ur(B.keywords, y)) : !0, _ = [];
    if (b === "__recent__") {
      const B = p.map((H) => w.find((A) => A.id === H)).filter((H) => H !== void 0 && E(H));
      return B.length > 0 && _.push({ groupName: "最近访问", isRecent: !0, items: B }), _;
    }
    const j = /* @__PURE__ */ new Set();
    if (!y && b === "all" && p.length > 0) {
      const B = p.map((H) => w.find((A) => A.id === H)).filter((H) => H !== void 0);
      B.length > 0 && (B.forEach((H) => j.add(H.id)), _.push({ groupName: "最近访问", isRecent: !0, items: B }));
    }
    const D = /* @__PURE__ */ new Map();
    for (const B of w) {
      if (j.has(B.id) || !E(B)) continue;
      const H = B.group || "其他", A = D.get(H) ?? [];
      A.push(B), D.set(H, A);
    }
    for (const [B, H] of D.entries())
      H.length > 0 && _.push({ groupName: B, items: H });
    return _;
  }, [w, d, b, p]), S = oe(
    () => v.flatMap((y) => y.items),
    [v]
  );
  fe(() => {
    m(0);
  }, [d, b]), fe(() => {
    var E;
    if (!t || !x.current) return;
    const y = x.current.querySelector(`[data-cmd-idx="${u}"]`);
    (E = y == null ? void 0 : y.scrollIntoView) == null || E.call(y, { block: "nearest" });
  }, [u, t]);
  const M = (y) => {
    if (!y) return;
    const E = [y.id, ...p.filter((_) => _ !== y.id)].slice(
      0,
      Xc
    );
    f(E), Fi(E), y.onTrigger(), a();
  }, L = () => {
    f([]), Fi([]), b === "__recent__" && l("all");
  }, R = oe(() => {
    const y = ["all"];
    return p.length > 0 && y.push("__recent__"), [...y, ...N];
  }, [p.length, N]);
  let C = -1;
  return /* @__PURE__ */ e(
    yr,
    {
      open: t,
      onClose: a,
      width: "min(720px, 92vw)",
      draggable: !1,
      fullscreenable: !1,
      className: "rounded-[var(--abc-radius-xl)]",
      children: /* @__PURE__ */ i(
        "div",
        {
          onKeyDown: (y) => {
            if (y.key === "ArrowDown")
              y.preventDefault(), m((E) => S.length ? (E + 1) % S.length : 0);
            else if (y.key === "ArrowUp")
              y.preventDefault(), m(
                (E) => S.length ? (E - 1 + S.length) % S.length : 0
              );
            else if (y.key === "Tab") {
              y.preventDefault();
              const E = R.indexOf(b), _ = y.shiftKey ? -1 : 1, j = R[(E + _ + R.length) % R.length];
              j && l(j);
            } else y.key === "Enter" && S[u] && (y.preventDefault(), M(S[u]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e($t, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: g,
                  type: "text",
                  autoFocus: !0,
                  value: d,
                  onChange: (y) => c(y.target.value),
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
                    var y;
                    c(""), (y = g.current) == null || y.focus();
                  },
                  className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(Ra, { className: "shrink-0", children: "ESC" })
            ] }),
            N.length > 0 && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("all"),
                    className: h(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "all" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      "全部 (",
                      w.length,
                      ")"
                    ]
                  }
                ),
                p.length > 0 && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("__recent__"),
                    className: h(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(Hn, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                N.map((y) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => l(y),
                    className: h(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === y ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: y
                  },
                  y
                ))
              ] }),
              p.length > 0 && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: L,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: x, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: S.length === 0 ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(pn, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ i("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                d,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: v.map((y) => /* @__PURE__ */ i("div", { className: "space-y-1", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5", children: [
                  y.isRecent && /* @__PURE__ */ e(Hn, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: y.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: y.items.length })
              ] }),
              y.items.map((E) => {
                C += 1;
                const _ = C, j = _ === u;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": _,
                    onMouseEnter: () => m(_),
                    onClick: () => M(E),
                    className: h(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      j ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: h(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              j ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: E.icon ? typeof E.icon == "string" ? /* @__PURE__ */ e(jr, { name: E.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: E.icon }) : /* @__PURE__ */ e($t, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ i("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: h(
                                "truncate text-sm font-semibold",
                                j ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: Wi(E.title, d)
                            }
                          ),
                          E.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: Wi(E.subtitle, d) })
                        ] })
                      ] }),
                      /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                        E.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: h(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              j ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: E.group
                          }
                        ),
                        j && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(dc, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${y.isRecent ? "recent" : "std"}_${E.id}`
                );
              })
            ] }, y.groupName)) }) }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Ra, { children: /* @__PURE__ */ e(Xs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(Ra, { children: /* @__PURE__ */ e(Zs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Ra, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Ra, { children: "Tab" }),
                  /* @__PURE__ */ e("span", { children: "切换分类" })
                ] })
              ] }),
              /* @__PURE__ */ i("span", { className: "font-mono", children: [
                "共 ",
                S.length,
                " 项结果"
              ] })
            ] })
          ]
        }
      )
    }
  );
}, Ng = ({
  title: t,
  subtitle: a,
  tags: r,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: d,
  className: c,
  children: b
}) => /* @__PURE__ */ i("div", { className: h("flex min-h-full flex-col gap-4", d && "pb-16", c), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((l, u) => {
      const m = u === n.length - 1;
      return /* @__PURE__ */ i(ct.Fragment, { children: [
        u > 0 && /* @__PURE__ */ e(dr, { className: "h-3 w-3 opacity-60" }),
        l.onClick && !m ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: l.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: l.label
          }
        ) : /* @__PURE__ */ e("span", { className: h(m && "font-medium text-[var(--abc-fg-secondary)]"), children: l.label })
      ] }, u);
    }) }),
    (t || s) && /* @__PURE__ */ i("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ i("div", { className: "min-w-0", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
          t && /* @__PURE__ */ e("h1", { className: "text-base font-bold tracking-tight text-[var(--abc-fg)]", children: t }),
          r
        ] }),
        a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
      ] }),
      s && /* @__PURE__ */ e("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: s })
    ] }),
    o && /* @__PURE__ */ e("div", { children: o })
  ] }),
  /* @__PURE__ */ e("div", { className: "flex-1", children: b }),
  d && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: d })
] }), Dp = ({
  brand: t = { name: "ABC Enterprise", subtitle: "Design System & Console" },
  variant: a = "split",
  headline: r = "高密度、高可靠的企业级数字工作台",
  subheadline: n = "基于 ABC Design 统一语义化 Token 与多模态布局架构构建，助力多业务线高效协同。",
  highlights: s = [
    "三层语义化 Design Tokens，支持多品牌色与暗黑模式秒级切换",
    "5 大企业级自适应布局拓扑，一套组件无缝适配全终端业务",
    "零业务 API 耦合，Adapter 协议驱动安全接入任意后端架构"
  ],
  topRightExtra: o,
  copyright: d = `© ${(/* @__PURE__ */ new Date()).getFullYear()} ABC Design System. All rights reserved.`,
  children: c,
  className: b
}) => a === "centered" ? /* @__PURE__ */ i(
  "div",
  {
    className: h(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      b
    ),
    children: [
      /* @__PURE__ */ e(Ii, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(Pa, { brand: t }) }),
      /* @__PURE__ */ i("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(_i, {}),
        c
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: d })
    ]
  }
) : /* @__PURE__ */ i(
  "div",
  {
    className: h(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      b
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Ii, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Pa, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ i("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: r }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((l, u) => /* @__PURE__ */ i("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(Xr, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: l })
          ] }, u)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: d })
      ] }),
      /* @__PURE__ */ i("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(Pa, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ i("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(_i, {}),
          c
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: d })
      ] })
    ]
  }
), Rp = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], jp = [
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
], Bp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Hi = ({
  open: t,
  onClose: a,
  layoutSettings: r,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var ye;
  const {
    theme: o,
    pageTransition: d,
    watermarkEnabled: c,
    setThemeMode: b,
    setBrand: l,
    setCustomBrandColor: u,
    setDensity: m,
    setRadius: p,
    setFontScale: f,
    setVisualMode: g,
    setComponentSize: x,
    setMotion: w,
    updateTheme: N,
    setPageTransition: v,
    setWatermarkEnabled: S,
    resetTheme: M,
    toast: L
  } = Mt(), [R, C] = $(1), [y, E] = $(!0), [_, j] = $("实时 Token 响应预览"), [D, B] = $(0), [H, A] = $(!1), [I, P] = $(""), [K, O] = $(o.customBrandColor ?? "#0ea5e9"), V = o.componentSize ?? "sm", Y = r.sidebarWidth ?? kp[V], ce = r.headerHeight ?? Sp[V], G = o.customBrandColor || ((ye = Ps[o.brand]) == null ? void 0 : ye.swatch) || "#2563eb", re = (F, Z) => {
    F.theme.mode && F.theme.mode !== o.mode && b(F.theme.mode, { clientX: Z.clientX, clientY: Z.clientY }), N(F.theme), n(F.layout), v(F.transition), B((De) => De + 1), L.success(`已切换至「${F.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    kn,
    {
      open: t,
      onClose: a,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ i("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Le,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                M(), s == null || s(), L.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            Le,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(as, { className: "h-3.5 w-3.5" }),
              onClick: () => A((F) => !F),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Le,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(Wu, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const F = JSON.stringify(o, null, 2), Z = JSON.stringify(r, null, 2), De = `<AbcProvider
  defaultTheme={${F}}
  defaultPageTransition="${d}"
  defaultWatermarkEnabled={${c}}
>
  <ProLayout
    defaultSettings={${Z}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(De), L.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  L.error("复制代码失败");
                }
              },
              children: "复制 JSX"
            }
          ),
          /* @__PURE__ */ e(
            Le,
            {
              variant: "primary",
              size: "xs",
              icon: /* @__PURE__ */ e(va, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const F = {
                  theme: o,
                  layout: r,
                  pageTransition: d,
                  watermarkEnabled: c
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(F, null, 2)), L.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  L.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ i("div", { className: "space-y-6", children: [
        H && /* @__PURE__ */ i("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => A(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            hn,
            {
              rows: 4,
              value: I,
              onChange: (F) => P(F.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(Le, { size: "xs", variant: "primary", onClick: () => {
            try {
              const F = JSON.parse(I);
              F.theme && typeof F.theme == "object" && N(F.theme), F.layout && typeof F.layout == "object" && n(F.layout), typeof F.pageTransition == "string" && v(F.pageTransition), typeof F.watermarkEnabled == "boolean" && S(F.watermarkEnabled), A(!1), P(""), L.success("已成功导入并应用自定义配置");
            } catch {
              L.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(pn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => B((F) => F + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Zi, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i(
            "div",
            {
              className: h(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                Bp[d]
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i(Le, { variant: "primary", onClick: () => C((F) => F + 1), children: [
                      "按压回弹 #",
                      R
                    ] }),
                    /* @__PURE__ */ e(Le, { variant: "outline", onClick: () => E((F) => !F), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(ha, { status: y ? "success" : "warning", dot: !0, children: y ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      lr,
                      {
                        checked: y,
                        onChange: E,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  gt,
                  {
                    allowClear: !0,
                    value: _,
                    onChange: (F) => j(F.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ i("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: G })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((F) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${F}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${F})` }
                    },
                    F
                  )) })
                ] })
              ]
            },
            D
          )
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: jp.map((F) => /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: (Z) => re(F, Z),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: F.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: F.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: F.badge })
              ]
            },
            F.id
          )) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: Rp.map((F) => {
            const Z = r.mode === F.mode;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: F.mode }),
                className: h(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Z ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ i("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    F.mode === "sidebar" && /* @__PURE__ */ i(qe, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    F.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    F.mode === "mix" && /* @__PURE__ */ i("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    F.mode === "dual-column" && /* @__PURE__ */ i(qe, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    F.mode === "auth" && /* @__PURE__ */ i(qe, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: F.title }),
                    Z && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: F.desc })
                ]
              },
              F.mode
            );
          }) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "3. 明暗外观与动态品牌色引擎" }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "色彩模式" }),
            /* @__PURE__ */ e(
              Dr,
              {
                variant: "segmented",
                value: o.mode,
                onChange: (F) => b(F),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(dn, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(un, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(po, { className: "h-3 w-3" }),
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
              Dr,
              {
                variant: "segmented",
                value: r.sidebarTone,
                onChange: (F) => n({ sidebarTone: F }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(Ps).map((F) => {
            const Z = Ps[F], De = !o.customBrandColor && o.brand === F;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => l(F),
                className: h(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  De ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: Z.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: Z.label.split(" ")[0] })
                ]
              },
              F
            );
          }) }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(mo, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || K,
                  onChange: (F) => {
                    const Z = F.target.value;
                    O(Z), u(Z);
                  },
                  className: "h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  maxLength: 7,
                  value: o.customBrandColor ?? K,
                  onChange: (F) => {
                    const Z = F.target.value;
                    O(Z), /^#[0-9a-fA-F]{6}$/.test(Z) && u(Z);
                  },
                  className: "w-20 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-0.5 font-mono text-xs uppercase text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                }
              ),
              o.customBrandColor && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => u(void 0),
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
              Dr,
              {
                variant: "segmented",
                value: o.density,
                onChange: (F) => m(F),
                options: Object.keys(ui).map((F) => ({
                  value: F,
                  label: ui[F].label
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局控件与卡片圆角" }),
            /* @__PURE__ */ e(
              Dr,
              {
                variant: "segmented",
                value: o.radius,
                onChange: (F) => p(F),
                options: Object.keys(bi).map((F) => ({
                  value: F,
                  label: bi[F].label.split(" ")[0]
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "全局字号缩放比例" }),
            /* @__PURE__ */ e(
              Dr,
              {
                variant: "segmented",
                value: o.fontScale ?? "md",
                onChange: (F) => f(F),
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
              Dr,
              {
                variant: "segmented",
                value: o.componentSize ?? "auto",
                onChange: (F) => x(F === "auto" ? void 0 : F),
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
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: tn[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              Dr,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: (F) => {
                  w(F), B((Z) => Z + 1);
                },
                options: Object.keys(tn).map((F) => ({
                  value: F,
                  label: tn[F].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ i("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              tn[o.motion ?? "smooth"].label,
              "：",
              tn[o.motion ?? "smooth"].description
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "5. 壳层几何尺寸与页签风格" }),
          /* @__PURE__ */ i("div", { className: "space-y-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "侧边栏展开宽度" }),
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                r.sidebarWidth !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ sidebarWidth: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ i("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
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
                onChange: (F) => n({ sidebarWidth: Number(F.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "space-y-1", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "顶部导航栏高度" }),
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                r.headerHeight !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ headerHeight: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ i("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  ce,
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
                value: ce,
                onChange: (F) => n({ headerHeight: Number(F.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "多页签视觉形态" }),
            /* @__PURE__ */ e(
              Dr,
              {
                variant: "segmented",
                value: r.tabStyle ?? "card",
                onChange: (F) => n({ tabStyle: F }),
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
              lr,
              {
                checked: r.showTabs,
                onChange: (F) => n({ showTabs: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              lr,
              {
                checked: r.keepAlive,
                onChange: (F) => n({ keepAlive: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              lr,
              {
                checked: r.headerBlur !== !1,
                onChange: (F) => n({ headerBlur: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              lr,
              {
                checked: r.showBreadcrumb !== !1,
                onChange: (F) => n({ showBreadcrumb: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              lr,
              {
                checked: r.sidebarAccordion,
                onChange: (F) => n({ sidebarAccordion: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              lr,
              {
                checked: !!r.showFooter,
                onChange: (F) => n({ showFooter: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              lr,
              {
                checked: c,
                onChange: (F) => S(F)
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              Dr,
              {
                variant: "segmented",
                value: r.contentWidth,
                onChange: (F) => n({ contentWidth: F }),
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
              br,
              {
                size: "xs",
                className: "w-44",
                value: d,
                onChange: (F) => {
                  v(F), B((Z) => Z + 1);
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
            /* @__PURE__ */ e(Ha, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            Dr,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: (F) => g(F),
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
}, zp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Pp = {
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
}, kg = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: a,
  pathname: r,
  onNavigate: n,
  settings: s,
  defaultSettings: o,
  onSettingsChange: d,
  user: c,
  headerExtra: b,
  commandActions: l = [],
  tabs: u,
  onTabsChange: m,
  authRender: p,
  authProps: f,
  showCustomizerTrigger: g = !0,
  isolateTabError: x = !0,
  homePath: w = "/",
  size: N,
  motion: v,
  children: S
}) => {
  const {
    resolvedTheme: M,
    toggleTheme: L,
    pageTransition: R,
    watermarkEnabled: C,
    watermarkText: y
  } = Mt(), E = Be(N, "sm"), _ = Te(v), j = Pp[E], D = oe(
    () => ({ ...Cp, ...o }),
    [o]
  ), [B, H] = _r({
    value: s ? { ...D, ...s } : void 0,
    defaultValue: D,
    onChange: d
  }), A = de(
    (ae) => {
      H((ve) => ({ ...ve, ...ae }));
    },
    [H]
  ), [I, P] = $(!1), [K, O] = $(!1), [V, Y] = $(!1), [ce, G] = $({}), re = ie(null), [ee, me] = _r({
    value: u,
    defaultValue: [],
    onChange: m
  }), se = oe(
    () => Yc(a, r),
    [a, r]
  );
  fe(() => {
    const ae = se[se.length - 1];
    !ae || !ae.path || me((ve) => ve.some((Ge) => Ge.path === ae.path) ? ve : [
      ...ve,
      {
        path: ae.path,
        title: ae.label,
        icon: ae.icon,
        pinned: ve.length === 0
      }
    ]);
  }, [se, me]), fe(() => {
    const ae = (ve) => {
      (ve.metaKey || ve.ctrlKey) && ve.key.toLowerCase() === "k" && (ve.preventDefault(), O((Ge) => !Ge));
    };
    return window.addEventListener("keydown", ae), () => window.removeEventListener("keydown", ae);
  }, []);
  const ye = oe(
    () => a.find((ae) => qr(ae, r)) ?? a[0],
    [a, r]
  ), [F, Z] = $((ye == null ? void 0 : ye.key) ?? "");
  fe(() => {
    ye != null && ye.key && Z(ye.key);
  }, [ye == null ? void 0 : ye.key]);
  const De = oe(() => {
    const ae = a.find((ve) => ve.key === F) ?? ye;
    return (ae == null ? void 0 : ae.children) ?? [];
  }, [a, F, ye]), Xe = (ae) => {
    const ve = ee.findIndex((He) => He.path === ae), Ge = ee.filter((He) => He.path !== ae || He.pinned);
    if (me(Ge), ae === r && Ge.length > 0) {
      const He = Ge[Math.max(0, ve - 1)] ?? Ge[0];
      He && n(He.path);
    }
  }, he = oe(() => y || [(c == null ? void 0 : c.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [y, c == null ? void 0 : c.name, t.name]);
  if (B.mode === "auth")
    return /* @__PURE__ */ i(qe, { children: [
      /* @__PURE__ */ e(
        Dp,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (ae) => L({ clientX: ae.clientX, clientY: ae.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: M === "dark" ? /* @__PURE__ */ e(dn, { className: "h-4 w-4" }) : /* @__PURE__ */ e(un, { className: "h-4 w-4" })
              }
            ),
            g && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => Y(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Ys, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...f,
          children: p ?? S
        }
      ),
      /* @__PURE__ */ e(
        Hi,
        {
          open: V,
          onClose: () => Y(!1),
          layoutSettings: B,
          onLayoutChange: A,
          onResetAll: () => H(D)
        }
      )
    ] });
  const Ae = B.mode === "sidebar", Fe = B.mode === "top", Ce = B.mode === "mix", st = B.mode === "dual-column", we = /* @__PURE__ */ i(
    "header",
    {
      className: h(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        j.headerPad,
        B.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => P(!0),
              className: h(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                j.iconBtn
              ),
              children: /* @__PURE__ */ e(Ji, { className: j.iconCls })
            }
          ),
          (Fe || Ce) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Pa, { brand: t, size: E, className: "px-0 pr-3" }) }),
          (Ae || Ce && De.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": B.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => A({ sidebarCollapsed: !B.sidebarCollapsed }),
              className: h(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                j.iconBtn
              ),
              children: B.sidebarCollapsed ? /* @__PURE__ */ e(Hu, { className: j.iconCls }) : /* @__PURE__ */ e(Ku, { className: j.iconCls })
            }
          ),
          Fe && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Oi,
            {
              items: a,
              pathname: r,
              size: E,
              motion: _,
              onNavigate: (ae, ve) => n(ae, ve)
            }
          ) }),
          Ce && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Oi,
            {
              items: a,
              pathname: r,
              topLevelOnly: !0,
              activeRootKey: F,
              size: E,
              motion: _,
              onSelectRoot: (ae) => {
                var ve, Ge;
                Z(ae.key), ae.path && (!ae.children || ae.children.length === 0) ? n(ae.path, ae) : (Ge = (ve = ae.children) == null ? void 0 : ve[0]) != null && Ge.path && n(ae.children[0].path, ae.children[0]);
              },
              onNavigate: (ae, ve) => n(ae, ve)
            }
          ) }),
          (Ae || st) && B.showBreadcrumb !== !1 && se.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: h(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                j.breadcrumb
              ),
              children: se.map((ae, ve) => {
                const Ge = ve === se.length - 1;
                return /* @__PURE__ */ i(ct.Fragment, { children: [
                  ve > 0 && /* @__PURE__ */ e(dr, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: h(
                        "truncate",
                        Ge && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: ae.label
                    }
                  )
                ] }, ae.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => O(!0),
              className: h(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                j.searchBtn
              ),
              children: [
                /* @__PURE__ */ e($t, { className: j.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(Ra, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          b,
          /* @__PURE__ */ e(tr, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (ae) => L({ clientX: ae.clientX, clientY: ae.clientY }),
              className: h(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                j.iconBtn
              ),
              children: M === "dark" ? /* @__PURE__ */ e(dn, { className: j.iconCls }) : /* @__PURE__ */ e(un, { className: j.iconCls })
            }
          ) }),
          g && /* @__PURE__ */ e(tr, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => Y(!0),
              className: h(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                j.iconBtn
              ),
              children: /* @__PURE__ */ e(Ys, { className: j.iconCls })
            }
          ) }),
          c && /* @__PURE__ */ e(
            vn,
            {
              items: c.menuItems ?? [
                { key: "profile", label: `当前账号：${c.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(Pm, { src: c.avatar, name: c.name, size: j.avatarSize }),
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
  ), Pe = /* @__PURE__ */ i("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !Ce && we,
    B.showTabs && /* @__PURE__ */ e(
      Mp,
      {
        tabs: ee,
        activePath: r,
        variant: B.tabStyle ?? "card",
        size: E,
        motion: _,
        onSelect: (ae) => n(ae),
        onClose: Xe,
        onTogglePin: (ae) => me(
          (ve) => ve.map((Ge) => Ge.path === ae ? { ...Ge, pinned: !Ge.pinned } : Ge)
        ),
        onCloseOthers: (ae) => me((ve) => ve.filter((Ge) => Ge.pinned || Ge.path === ae)),
        onCloseRight: (ae) => {
          const ve = ee.findIndex((Ge) => Ge.path === ae);
          ve < 0 || me((Ge) => Ge.filter((He, ft) => ft <= ve || He.pinned));
        },
        onCloseAll: () => {
          const ae = ee.filter((ve) => ve.pinned);
          me(ae), ae[0] && ae[0].path !== r && n(ae[0].path);
        },
        onRefresh: (ae) => G((ve) => ({ ...ve, [ae]: (ve[ae] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: re,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ i(
          Qf,
          {
            enabled: C,
            content: he,
            className: h(
              "min-h-full",
              B.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                Ap,
                {
                  activeKey: r,
                  enabled: B.keepAlive,
                  aliveKeys: ee.map((ae) => ae.path),
                  scrollContainerRef: re,
                  refreshSeed: ce[r] ?? 0,
                  refreshKeys: ce,
                  activeClassName: zp[R],
                  isolateError: x,
                  onTabReload: (ae) => G((ve) => ({ ...ve, [ae]: (ve[ae] ?? 0) + 1 })),
                  onTabClose: B.showTabs ? (ae) => Xe(ae) : void 0,
                  onNavigateHome: () => n(w),
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
  ] }), Ve = {
    "--abc-sidebar-w": B.sidebarWidth ? `${B.sidebarWidth}px` : void 0,
    "--abc-header-h": B.headerHeight ? `${B.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-size": E,
      "data-motion": _,
      style: Ve,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        B.routeProgress !== !1 && /* @__PURE__ */ e(Vc, { activeKey: r }),
        Ce && we,
        /* @__PURE__ */ i("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          Ce && De.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Vs,
            {
              items: De,
              pathname: r,
              collapsed: B.sidebarCollapsed,
              accordion: B.sidebarAccordion,
              tone: B.sidebarTone,
              size: E,
              motion: _,
              onNavigate: (ae, ve) => n(ae, ve)
            }
          ) }),
          Ae && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Vs,
            {
              brand: t,
              items: a,
              pathname: r,
              collapsed: B.sidebarCollapsed,
              accordion: B.sidebarAccordion,
              tone: B.sidebarTone,
              size: E,
              motion: _,
              onNavigate: (ae, ve) => n(ae, ve)
            }
          ) }),
          st && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            Tp,
            {
              brand: t,
              items: a,
              pathname: r,
              tone: B.sidebarTone,
              size: E,
              motion: _,
              onNavigate: (ae, ve) => n(ae, ve)
            }
          ) }),
          Pe
        ] }),
        /* @__PURE__ */ e(
          kn,
          {
            open: I,
            onClose: () => P(!1),
            placement: "left",
            width: j.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              Vs,
              {
                items: a,
                pathname: r,
                tone: "light",
                size: E,
                motion: _,
                onNavigate: (ae, ve) => {
                  n(ae, ve), P(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          Lp,
          {
            open: K,
            onClose: () => O(!1),
            menuItems: a,
            onNavigate: (ae, ve) => n(ae, ve),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: M === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => L()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => Y(!0)
              },
              ...l
            ]
          }
        ),
        /* @__PURE__ */ e(
          Hi,
          {
            open: V,
            onClose: () => Y(!1),
            layoutSettings: B,
            onLayoutChange: A,
            onResetAll: () => H(D)
          }
        )
      ]
    }
  );
};
function zo() {
  const { permissionAdapter: t } = Mt();
  return { hasPermission: (r, n = "any") => t ? t(r, n) : !0 };
}
const Op = ({
  permission: t,
  code: a,
  mode: r = "any",
  fallbackStrategy: n = "hide",
  disabledTip: s = "暂无操作权限",
  fallback: o,
  fallbackNode: d,
  children: c
}) => {
  var m;
  const { hasPermission: b } = zo(), l = t ?? a;
  if (!l) return /* @__PURE__ */ e(qe, { children: c });
  if (b(l, r)) return /* @__PURE__ */ e(qe, { children: c });
  if (n === "hide")
    return /* @__PURE__ */ e(qe, { children: o ?? d ?? null });
  if (ct.isValidElement(c)) {
    const p = c, f = ct.cloneElement(p, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((m = p.props) == null ? void 0 : m.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(tr, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: f }) });
  }
  return null;
}, Sg = Op;
function Jc(t) {
  const { dictAdapter: a } = Mt(), [r, n] = $([]), [s, o] = $(!1);
  return fe(() => {
    if (!a || !t) {
      n([]);
      return;
    }
    let d = !0;
    const c = a(t);
    return c instanceof Promise ? (o(!0), c.then((b) => {
      d && n(b);
    }).finally(() => {
      d && o(!1);
    })) : n(c), () => {
      d = !1;
    };
  }, [a, t]), { options: r, loading: s };
}
const Cg = ({
  dictCode: t,
  dictKey: a,
  prependOptions: r = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...d
}) => {
  const c = t ?? a ?? "", { options: b, loading: l } = Jc(c), u = oe(
    () => [...r, ...b, ...n],
    [r, b, n]
  );
  return /* @__PURE__ */ e(
    br,
    {
      options: u,
      placeholder: l && u.length === 0 ? "字典加载中..." : s,
      disabled: o || l && u.length === 0,
      ...d
    }
  );
}, _g = ({
  dictCode: t,
  dictKey: a,
  value: r,
  dot: n = !0,
  size: s,
  motion: o,
  emptyText: d = "-",
  fallbackTone: c = "neutral",
  className: b
}) => {
  const l = t ?? a ?? "", { options: u } = Jc(l);
  if (r == null || r === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: d });
  const m = u.find((p) => String(p.value) === String(r));
  return /* @__PURE__ */ e(
    ha,
    {
      tone: (m == null ? void 0 : m.tone) ?? c,
      dot: n,
      size: s,
      motion: o,
      className: b,
      children: (m == null ? void 0 : m.label) ?? String(r)
    }
  );
}, Ki = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, $p = ({
  mode: t = "split",
  sections: a,
  className: r
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: h("space-y-4", r), children: a.map((n) => /* @__PURE__ */ e(Jn, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: h("grid gap-4", Ki[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: h("space-y-6", r), children: a.map((n, s) => /* @__PURE__ */ i(
  "div",
  {
    className: h(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(Jn, { children: /* @__PURE__ */ e("div", { className: h("grid gap-4", Ki[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function Rr(t) {
  if (!t || typeof t != "object" || !("code" in t)) return !1;
  const a = t.code;
  return a == null ? !1 : a !== 200 && a !== 0 && a !== "200" && a !== "0";
}
function io(t, a) {
  const r = (t == null ? void 0 : t.data) ?? t, n = Array.isArray(r == null ? void 0 : r.records) ? r.records : Array.isArray(r == null ? void 0 : r.list) ? r.list : Array.isArray(t == null ? void 0 : t.list) ? t.list : Array.isArray(t == null ? void 0 : t.records) ? t.records : Array.isArray(r) ? r : [], s = a ? n.map(a) : n, o = typeof (r == null ? void 0 : r.total) == "number" ? r.total : typeof (t == null ? void 0 : t.total) == "number" ? t.total : n.length;
  return { list: s, total: o, raw: t };
}
function Ui(t) {
  const a = { ...t };
  return Object.keys(a).forEach((r) => {
    const n = a[r];
    if (typeof n == "string") {
      const s = n.trim();
      s === "" ? delete a[r] : a[r] = s;
      return;
    }
    (n == null || Array.isArray(n) && n.length === 0) && delete a[r];
  }), a;
}
function fs(t, a) {
  const r = typeof t == "function" ? { list: t, ...a } : t;
  return {
    list: async (n) => {
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, b = s ?? o, l = r.defaultParams || r.params;
      let u = {
        ...b !== void 0 ? { pageNo: b, pageNum: b } : {},
        ...d !== void 0 ? { pageSize: d } : {},
        ...l,
        ...c
      };
      (b !== void 0 && !("pageNum" in (n || {})) || b !== void 0) && delete u.pageNum, r.transformQuery && (u = r.transformQuery(u)), u = Ui(u);
      const m = await r.list(u);
      if (Rr(m))
        return m;
      const p = io(m, r.transformRecord);
      return {
        ...m && typeof m == "object" && !Array.isArray(m) ? m : {},
        list: p.list,
        total: p.total
      };
    },
    delete: r.delete ? async (n) => {
      try {
        return await r.delete({ ids: n });
      } catch {
        return await r.delete(n);
      }
    } : void 0,
    export: r.export ? async (n) => {
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, b = r.defaultParams || r.params, l = Ui({
        ...b,
        ...c
      }), u = await r.export(l);
      if (typeof window > "u" || typeof document > "u")
        return u;
      const m = u instanceof Blob ? u : new Blob([u], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }), p = window.URL.createObjectURL(m), f = document.createElement("a"), g = /* @__PURE__ */ new Date(), x = (N) => String(N).padStart(2, "0"), w = `${g.getFullYear()}${x(g.getMonth() + 1)}${x(g.getDate())}_${x(
        g.getHours()
      )}${x(g.getMinutes())}${x(g.getSeconds())}`;
      return f.href = p, f.download = `${r.exportFileName || "数据导出"}_${w}.xlsx`, document.body.appendChild(f), f.click(), f.remove(), window.URL.revokeObjectURL(p), u;
    } : void 0,
    get: r.get,
    view: r.view,
    children: r.children,
    create: r.create || r.add,
    add: r.add || r.create,
    update: r.update || r.edit,
    edit: r.edit || r.update
  };
}
const Ig = fs;
function Fp(t, a = []) {
  const r = ie(t);
  return r.current = t, oe(() => fs(r.current), [a]);
}
const Tg = Fp;
function Wp(t, a = []) {
  const [r, n] = $(0), s = ie(null), [o, d] = $([]), c = de(() => d([]), []), b = ie(t);
  b.current = t;
  const l = de(() => {
    s.current ? s.current(!1) : n((f) => f + 1);
  }, []), u = de(() => {
    d([]), s.current ? s.current(!0) : n((f) => f + 1);
  }, []), m = oe(() => fs(b.current), [r, ...a]);
  return {
    tableProps: oe(
      () => ({
        api: m,
        onRefreshRef: s,
        selectedRowKeys: o,
        onRowSelectionChange: d
      }),
      [m, o]
    ),
    api: m,
    refresh: l,
    reload: u,
    refreshKey: r,
    selectedRowKeys: o,
    setSelectedRowKeys: d,
    clearSelection: c
  };
}
const Eg = Wp;
function Qc(t, a) {
  var r, n;
  if (!t || typeof t != "object") return !1;
  try {
    const s = typeof t.shape == "function" ? t.shape() : t.shape ?? ((n = (r = t._def) == null ? void 0 : r.shape) == null ? void 0 : n.call(r)), o = s == null ? void 0 : s[a];
    if (!o) return !1;
    const d = typeof o.isOptional == "function" ? !!o.isOptional() : !1, c = typeof o.isNullable == "function" ? !!o.isNullable() : !1;
    return !d && !c;
  } catch {
    return !1;
  }
}
const Mg = Qc;
function Fa(t) {
  return String(t.key ?? t.name ?? "");
}
function Hp({
  defaultValues: t,
  schema: a,
  fields: r = [],
  onValuesChange: n
} = {}) {
  const s = ie(t ?? {});
  s.current = t ?? {};
  const o = ie(r);
  o.current = r;
  const d = ie(a);
  d.current = a;
  const c = ie(n);
  c.current = n;
  const b = ie({ ...t ?? {} }), l = ie({}), u = ie(!1), [, m] = $(0), p = ie(/* @__PURE__ */ new Set()), f = de((C) => {
    var E;
    m((_) => _ + 1);
    const y = { ...b.current };
    (E = c.current) == null || E.call(c, y, C), p.current.forEach((_) => _(y, { name: C }));
  }, []), g = de((C) => C === void 0 ? { ...b.current } : C.includes(".") ? ms(b.current, C) : b.current[C], []), x = de(
    (C, y) => {
      if (b.current = {
        ...b.current,
        [C]: y
      }, u.current = !0, l.current[C]) {
        const E = { ...l.current };
        delete E[C], l.current = E;
      }
      f(C);
    },
    [f]
  ), w = de((C) => typeof C == "function" ? (p.current.add(C), {
    unsubscribe: () => {
      p.current.delete(C);
    }
  }) : C === void 0 ? { ...b.current } : Array.isArray(C) ? C.map((y) => b.current[y]) : b.current[C], []), N = de((C) => {
    b.current = {
      ...s.current ?? {},
      ...C ?? {}
    }, l.current = {}, u.current = !1, m((y) => y + 1);
  }, []), v = de((C, y) => {
    l.current = {
      ...l.current,
      [C]: y
    }, m((E) => E + 1);
  }, []), S = de((C) => {
    if (!C)
      l.current = {};
    else if (Array.isArray(C)) {
      const y = { ...l.current };
      C.forEach((E) => delete y[E]), l.current = y;
    } else {
      const y = { ...l.current };
      delete y[C], l.current = y;
    }
    m((y) => y + 1);
  }, []), M = de(() => {
    var j, D;
    const C = { ...b.current }, y = {};
    for (const B of o.current) {
      const H = Fa(B);
      if (!H) continue;
      const A = C[H], I = A == null || typeof A == "string" && A.trim() === "" || Array.isArray(A) && A.length === 0;
      if (B.required && I) {
        y[H] = { type: "required", message: `请填写${B.label}` };
        continue;
      }
      if (B.validator) {
        const P = B.validator(A, C);
        P && (y[H] = { type: "validate", message: P });
      }
    }
    let E = C;
    const _ = d.current;
    if (_ && typeof _.safeParse == "function") {
      const B = _.safeParse(C);
      if (B.success)
        B.data && typeof B.data == "object" && (E = { ...C, ...B.data });
      else {
        const H = ((j = B.error) == null ? void 0 : j.issues) ?? ((D = B.error) == null ? void 0 : D.errors) ?? [];
        for (const A of H) {
          const I = Array.isArray(A.path) && A.path.length > 0 ? String(A.path[0]) : "";
          I && !y[I] && (y[I] = {
            type: "schema",
            message: A.message || "字段格式不正确"
          });
        }
      }
    }
    return l.current = y, m((B) => B + 1), {
      valid: Object.keys(y).length === 0,
      data: E
    };
  }, []), L = de(async () => M().valid, [M]), R = de(
    (C) => async (y) => {
      var j;
      (j = y == null ? void 0 : y.preventDefault) == null || j.call(y);
      const { valid: E, data: _ } = M();
      E && await C(_);
    },
    [M]
  );
  return {
    getValues: g,
    setValue: x,
    watch: w,
    reset: N,
    setError: v,
    clearErrors: S,
    trigger: L,
    handleSubmit: R,
    formState: {
      errors: l.current,
      isDirty: u.current
    }
  };
}
function Kp(t) {
  return new Promise((a, r) => {
    const n = new FileReader();
    n.onload = () => a(String(n.result || "")), n.onerror = () => r(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const el = ({
  value: t,
  disabled: a = !1,
  maxCount: r = 9,
  customUpload: n,
  onChange: s
}) => {
  const { uploadAdapter: o, toast: d } = Mt(), [c, b] = $(!1), l = oe(() => Array.isArray(t) ? t.filter(Boolean) : String(t || "").split(",").map((p) => p.trim()).filter(Boolean), [t]), u = async (p) => {
    const f = p.target.files;
    if (!f || f.length === 0 || a || c) return;
    const g = [...l];
    b(!0);
    try {
      for (let x = 0; x < f.length; x++) {
        if (g.length >= r) {
          d.error(`最多支持上传 ${r} 张图片`);
          break;
        }
        const w = f[x];
        let N = "";
        if (n) {
          const v = await n(w);
          N = typeof v == "string" ? v : (v == null ? void 0 : v.url) || "";
        } else o ? N = await o(w) : N = await Kp(w);
        N && g.push(N);
      }
      s(g.join(","));
    } catch (x) {
      d.error((x == null ? void 0 : x.message) || "上传图片失败");
    } finally {
      b(!1), p.target.value = "";
    }
  }, m = (p) => {
    if (a) return;
    const f = l.filter((g, x) => x !== p);
    s(f.join(","));
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-wrap gap-3", children: [
    l.map((p, f) => /* @__PURE__ */ i(
      "div",
      {
        className: "group relative h-24 w-24 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        children: [
          /* @__PURE__ */ e(Nn, { src: p, width: 96, height: 96, className: "h-full w-full object-cover" }),
          !a && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => m(f),
              "aria-label": "移除图片",
              title: "移除图片",
              className: "absolute top-1 right-1 rounded-full bg-[var(--abc-danger)]/90 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
              children: /* @__PURE__ */ e(Vr, { className: "h-3 w-3" })
            }
          )
        ]
      },
      `${p}-${f}`
    )),
    l.length < r && !a && /* @__PURE__ */ i("label", { className: "flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]", children: [
      c ? /* @__PURE__ */ e(mr, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(os, { className: "h-5 w-5" }),
      /* @__PURE__ */ e("span", { className: "text-[11px]", children: c ? "上传中..." : `上传(${l.length}/${r})` }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "file",
          accept: "image/*",
          multiple: !0,
          className: "hidden",
          disabled: c,
          onChange: u
        }
      )
    ] })
  ] });
}, Ag = el, Up = ({
  value: t,
  disabled: a = !1,
  placeholder: r,
  presetIcons: n,
  onChange: s
}) => {
  const [o, d] = $(!1);
  return !n || n.length === 0 ? /* @__PURE__ */ e(
    ki,
    {
      value: t,
      disabled: a,
      placeholder: r,
      onChange: s
    }
  ) : /* @__PURE__ */ i("div", { className: "space-y-2", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(jr, { name: t || "Sparkles", size: 16 }) }),
      /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
        gt,
        {
          placeholder: r || "输入或从右侧选择图标",
          disabled: a,
          value: t || "",
          onChange: (c) => s(c.target.value)
        }
      ) }),
      /* @__PURE__ */ e(
        Le,
        {
          type: "button",
          variant: "secondary",
          size: "sm",
          disabled: a,
          onClick: () => d(!0),
          children: "打开图标库"
        }
      )
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
      /* @__PURE__ */ e("span", { className: "mr-1 text-[11px] text-[var(--abc-fg-muted)]", children: "常用推荐:" }),
      n.map((c) => /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          disabled: a,
          onClick: () => s(c),
          className: h(
            "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border px-2 py-1 text-[11px] transition-colors cursor-pointer",
            t === c ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            /* @__PURE__ */ e(jr, { name: c, size: 12 }),
            /* @__PURE__ */ e("span", { children: c })
          ]
        },
        c
      ))
    ] }),
    /* @__PURE__ */ e(
      ki,
      {
        open: o,
        current: t,
        onClose: () => d(!1),
        onSelect: s
      }
    )
  ] });
};
function Vp({
  field: t,
  form: a,
  isEdit: r,
  editingRecord: n
}) {
  const s = Fa(t);
  if ((typeof t.hidden == "function" ? t.hidden(r, a) : !!t.hidden) || t.formGroup === "hidden") return null;
  if (t.type === "custom" && t.render)
    return /* @__PURE__ */ e(qe, { children: t.render(a, r) });
  const d = typeof t.disabled == "function" ? t.__fromFieldSchema ? t.disabled(n) : t.disabled(r, a) : !!t.disabled, c = a.getValues(s), b = (l) => {
    var u;
    a.setValue(s, l), (u = t.onChange) == null || u.call(t, l, a);
  };
  switch (t.type) {
    case "number":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        ds,
        {
          disabled: d,
          min: t.min,
          max: t.max,
          step: t.step,
          value: c ?? null,
          placeholder: t.placeholder,
          onChange: b
        }
      ) : /* @__PURE__ */ e(
        gt,
        {
          type: "number",
          disabled: d,
          min: t.min,
          max: t.max,
          step: t.step,
          prefix: t.prefix,
          suffix: t.suffix,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          clearable: t.clearable !== !1,
          onChange: (l) => {
            const u = l.target.value, m = u === "" ? "" : /^-?\d*\.\d*0$/.test(u) || u === "-" || Number.isNaN(Number(u)) ? u : Number(u);
            b(m);
          }
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        gt,
        {
          type: "password",
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (l) => b(l.target.value)
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        hn,
        {
          rows: t.rows || 3,
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (l) => b(l.target.value)
        }
      );
    case "select":
    case "radio":
    case "checkbox": {
      const l = typeof t.options == "function" ? t.options(a, r) : t.options ?? [];
      if (t.type === "radio" || t.type === "checkbox")
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 py-1", children: l.map((m) => /* @__PURE__ */ i(
          "label",
          {
            className: h(
              "inline-flex items-center gap-1.5 text-xs text-[var(--abc-fg-secondary)] select-none",
              d || m.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: t.type === "radio" ? "radio" : "checkbox",
                  disabled: d || m.disabled,
                  checked: t.type === "radio" ? String(c ?? "") === String(m.value) : Array.isArray(c) && c.map(String).includes(String(m.value)),
                  onChange: (p) => {
                    if (t.type === "radio") {
                      b(m.value);
                      return;
                    }
                    const f = Array.isArray(c) ? [...c] : [], g = p.target.checked ? [...f, m.value] : f.filter((x) => String(x) !== String(m.value));
                    b(g);
                  }
                }
              ),
              /* @__PURE__ */ e("span", { children: m.label })
            ]
          },
          String(m.value)
        )) });
      const u = l.map((m) => ({
        label: m.label,
        value: typeof m.value == "boolean" ? String(m.value) : m.value,
        disabled: m.disabled
      }));
      return /* @__PURE__ */ e(
        br,
        {
          value: c ?? (t.multiple ? [] : ""),
          disabled: d,
          searchable: t.searchable ?? !0,
          multiple: t.multiple,
          options: u,
          placeholder: t.placeholder || `请选择${t.label}`,
          allowClear: t.clearable !== !1,
          onChange: (m) => {
            const p = m && typeof m == "object" && "target" in m ? m.target.value : m;
            b(p);
          }
        }
      );
    }
    case "treeSelect": {
      const l = typeof t.treeData == "function" ? t.treeData(a, r) : t.treeData ?? [], u = !!(t.multiple || t.treeCheckable);
      return /* @__PURE__ */ e(
        xn,
        {
          "aria-label": t.label,
          value: c ?? (u ? [] : ""),
          disabled: d,
          searchable: t.searchable ?? !0,
          multiple: t.multiple,
          treeCheckable: t.treeCheckable,
          treeCheckStrictly: t.treeCheckStrictly,
          showCheckedStrategy: t.showCheckedStrategy,
          selectableLeafOnly: t.selectableLeafOnly,
          fieldNames: t.fieldNames,
          treeDataSimpleMode: t.treeDataSimpleMode,
          maxTagCount: t.maxTagCount,
          treeDefaultExpandAll: t.treeDefaultExpandAll,
          loadData: t.loadData,
          treeData: l,
          placeholder: t.placeholder || `请选择${t.label}`,
          allowClear: t.clearable !== !1,
          onChange: (m) => b(m)
        }
      );
    }
    case "switch":
      return /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2 py-1", children: [
        /* @__PURE__ */ e(
          lr,
          {
            disabled: d,
            checked: !!c,
            onChange: (l) => b(l)
          }
        ),
        (t.checkedChildren || t.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: c ? t.checkedChildren : t.unCheckedChildren })
      ] });
    case "date":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        yn,
        {
          disabled: d,
          value: c ?? "",
          placeholder: t.placeholder,
          onChange: b
        }
      ) : /* @__PURE__ */ e(
        gt,
        {
          type: "date",
          disabled: d,
          value: c ?? "",
          onChange: (l) => b(l.target.value)
        }
      );
    case "datetime":
    case "datetimePicker":
      return /* @__PURE__ */ e(
        gt,
        {
          type: "datetime-local",
          disabled: d,
          value: c ? String(c).replace(" ", "T").slice(0, 16) : "",
          onChange: (l) => {
            const u = l.target.value;
            b(u ? `${u.replace("T", " ")}:00` : "");
          }
        }
      );
    case "dateRange": {
      if (t.__fromFieldSchema)
        return /* @__PURE__ */ e(
          wn,
          {
            disabled: d,
            value: c ?? null,
            onChange: b
          }
        );
      const l = Array.isArray(c) ? c : ["", ""];
      return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          gt,
          {
            type: "date",
            disabled: d,
            value: l[0] || "",
            onChange: (u) => b([u.target.value, l[1] || ""])
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "至" }),
        /* @__PURE__ */ e(
          gt,
          {
            type: "date",
            disabled: d,
            value: l[1] || "",
            onChange: (u) => b([l[0] || "", u.target.value])
          }
        )
      ] });
    }
    case "color":
      return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            disabled: d,
            value: c || "#2563eb",
            onChange: (l) => b(l.target.value),
            className: "h-8.5 w-11 shrink-0 cursor-pointer rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5"
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
          gt,
          {
            type: "text",
            disabled: d,
            value: c ?? "",
            placeholder: t.placeholder || "#2563eb",
            onChange: (l) => b(l.target.value)
          }
        ) })
      ] });
    case "icon":
      return /* @__PURE__ */ e(
        Up,
        {
          value: c ? String(c) : "",
          disabled: d,
          placeholder: t.placeholder,
          presetIcons: t.presetIcons,
          onChange: b
        }
      );
    case "tags":
      return /* @__PURE__ */ e(
        Ef,
        {
          disabled: d,
          value: Array.isArray(c) ? c : [],
          placeholder: t.placeholder,
          onChange: b
        }
      );
    case "image": {
      const l = t.customUpload ? async (u) => {
        const m = await t.customUpload(u);
        return typeof m == "string" ? m : (m == null ? void 0 : m.url) || "";
      } : void 0;
      return t.multiple ? /* @__PURE__ */ e(
        el,
        {
          value: c ?? "",
          disabled: d,
          maxCount: t.maxCount,
          customUpload: t.customUpload,
          onChange: b
        }
      ) : /* @__PURE__ */ e(
        Rc,
        {
          value: c ? String(c) : "",
          disabled: d,
          maxSizeMB: t.maxSize,
          customUpload: l,
          onChange: b
        }
      );
    }
    case "text":
    case "input":
    default:
      return /* @__PURE__ */ e(
        gt,
        {
          type: "text",
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder ?? (t.__fromFieldSchema ? void 0 : `请输入${t.label}`),
          clearable: t.__fromFieldSchema ? void 0 : t.clearable !== !1,
          onChange: (l) => b(l.target.value)
        }
      );
  }
}
function tl({
  layout: t = "grid",
  columnsCount: a = 2,
  fields: r,
  isEdit: n,
  form: s,
  errors: o = {},
  formSchema: d,
  columns: c = [],
  isFieldRequired: b = Qc,
  renderFormField: l
}) {
  const u = (p) => p.formGroup === "hidden" ? !0 : typeof p.hidden == "function" && s ? !!p.hidden(n, s) : !!p.hidden, m = (p) => {
    const f = Fa(p), g = !!(p.required || b(d, f)), x = o[f], w = typeof x == "string" ? x : x == null ? void 0 : x.message, N = c.find((S) => {
      const M = Array.isArray(S.dataIndex) ? S.dataIndex[0] : S.dataIndex ?? S.key;
      return String(M) === f;
    }), v = p.tooltip ?? (N == null ? void 0 : N.tooltip);
    return /* @__PURE__ */ e(
      Ro,
      {
        label: p.label,
        required: g,
        tooltip: v,
        helperText: p.helperText,
        error: w,
        children: l(p)
      },
      f
    );
  };
  if (t === "split") {
    const p = r.filter((v) => !u(v)), f = p.filter((v) => v.formGroup === "top"), g = p.filter((v) => {
      const S = v.formGroup || "left";
      return S === "left" || S === "full";
    }), x = p.filter((v) => v.formGroup === "right"), w = p.filter((v) => v.formGroup === "bottom"), N = p.filter((v) => v.formGroup === "extra");
    return /* @__PURE__ */ i("div", { className: "space-y-4", children: [
      f.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: f.map((v) => m(v)) }),
      /* @__PURE__ */ i(
        "div",
        {
          className: h(
            "grid grid-cols-1 gap-5",
            x.length > 0 && "md:grid-cols-2"
          ),
          children: [
            /* @__PURE__ */ e("div", { className: "space-y-3.5", children: g.map((v) => m(v)) }),
            x.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: x.map((v) => m(v)) })
          ]
        }
      ),
      w.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: w.map((v) => m(v)) }),
      N.length > 0 && /* @__PURE__ */ e("div", { className: "mt-4 space-y-3.5 border-t border-[var(--abc-border)] pt-4", children: N.map((v) => m(v)) })
    ] });
  }
  return /* @__PURE__ */ e(
    "div",
    {
      className: h(
        "grid gap-3.5",
        a === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      ),
      children: r.map((p) => {
        if (u(p)) return null;
        const f = Fa(p), g = a === 2 && (p.span === 2 || p.formGroup === "full" || p.__fromFieldSchema && p.type === "textarea");
        return /* @__PURE__ */ e("div", { className: g ? "col-span-1 sm:col-span-2" : "col-span-1", children: m(p) }, f);
      })
    }
  );
}
const Lg = tl;
function Gp({
  open: t,
  onClose: a,
  isEdit: r,
  currentRecord: n,
  container: s = "dialog",
  dialogTitle: o,
  dialogSize: d,
  formLayout: c = "grid",
  formColumns: b = 2,
  formFields: l,
  form: u,
  formSchema: m,
  columns: p,
  formSubmitting: f,
  formDetailLoading: g,
  formError: x,
  onSubmit: w,
  draftEnabled: N = !1,
  showDraftButton: v = !1,
  showDraftBanner: S = !1,
  draftBannerMode: M = "prompt",
  onSaveDraft: L,
  onRestoreDraft: R,
  onDiscardDraft: C,
  submitButtonText: y = "保存",
  renderFormExtra: E,
  renderCustomForm: _,
  onSuccessFetch: j
}) {
  if (_)
    return /* @__PURE__ */ e(qe, { children: _({
      open: t,
      onClose: a,
      record: n,
      isEdit: r,
      onSuccess: () => {
        a(), j == null || j();
      }
    }) });
  const D = r ? (o == null ? void 0 : o.edit) || "编辑" : (o == null ? void 0 : o.add) || "新增", B = d ?? (b === 2 ? "lg" : "md"), H = /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2.5", children: [
    N && v && L && /* @__PURE__ */ e(Le, { variant: "secondary", size: "sm", type: "button", onClick: L, children: "保存草稿" }),
    !r && S && M === "auto-restored" && C && /* @__PURE__ */ e(Le, { variant: "ghost", size: "sm", type: "button", onClick: C, children: "清空草稿" }),
    /* @__PURE__ */ e(Le, { variant: "secondary", size: "sm", type: "button", onClick: a, disabled: f, children: "取消" }),
    /* @__PURE__ */ e(Le, { variant: "primary", size: "sm", type: "button", loading: f, onClick: w, children: y })
  ] }), A = /* @__PURE__ */ i("form", { onSubmit: w, className: "space-y-3.5 py-1", children: [
    g && /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
      /* @__PURE__ */ e(mr, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
      /* @__PURE__ */ e("span", { children: "正在同步最新完整数据..." })
    ] }),
    x && /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-3 py-2 text-xs text-[var(--abc-danger)]", children: x }),
    S && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-fg)]", children: [
      /* @__PURE__ */ e("span", { children: M === "auto-restored" ? "已自动为您恢复上次未提交的本地表单草稿" : "检测到未提交的草稿" }),
      /* @__PURE__ */ i("span", { className: "inline-flex shrink-0 items-center gap-2.5", children: [
        M === "prompt" && R && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: R,
            className: "font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
            children: "恢复"
          }
        ),
        C && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: C,
            className: "font-medium text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] hover:underline cursor-pointer",
            children: M === "auto-restored" ? "丢弃草稿" : "丢弃"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      tl,
      {
        layout: c,
        columnsCount: b,
        fields: l,
        isEdit: r,
        form: u,
        errors: u.formState.errors,
        formSchema: m,
        columns: p,
        renderFormField: (I) => /* @__PURE__ */ e(
          Vp,
          {
            field: I,
            form: u,
            isEdit: r,
            editingRecord: n
          }
        )
      }
    ),
    E == null ? void 0 : E(u, r)
  ] });
  if (s === "drawer") {
    const P = ["xs", "sm", "md", "lg", "xl", "2xl"].includes(B) ? B : "lg";
    return /* @__PURE__ */ e(
      kn,
      {
        open: t,
        onClose: a,
        title: D,
        size: P,
        footer: H,
        children: A
      }
    );
  }
  return /* @__PURE__ */ e(
    yr,
    {
      open: t,
      onClose: a,
      title: D,
      size: B,
      footer: H,
      children: A
    }
  );
}
function Yp({
  open: t,
  onClose: a,
  record: r,
  columns: n,
  viewTitle: s = "详情",
  viewSize: o = "lg",
  viewLoading: d = !1,
  canEdit: c = !1,
  onEditRecord: b,
  renderViewExtra: l,
  renderViewFooter: u
}) {
  const m = typeof s == "function" ? r ? s(r) : "详情" : s;
  return /* @__PURE__ */ i(
    yr,
    {
      open: t,
      onClose: a,
      title: m,
      size: o,
      footer: u && r ? u(r, a) : /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2", children: [
        r && c && b && /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => {
              const p = r;
              a(), b(p);
            },
            children: "编辑此记录"
          }
        ),
        /* @__PURE__ */ e(Le, { variant: "primary", size: "sm", onClick: a, children: "关闭" })
      ] }),
      children: [
        d && /* @__PURE__ */ i("div", { className: "mb-3 flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
          /* @__PURE__ */ e(mr, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
          /* @__PURE__ */ e("span", { children: "正在更新详细数据..." })
        ] }),
        r && /* @__PURE__ */ i("div", { className: "space-y-4 py-1", children: [
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-3 text-xs md:grid-cols-2", children: n.map((p) => {
            if (p.view === !1 || p.key === "actions" || p.key === "__actions__" || p.key === "__abc_actions__" || p.key === "__drag_handle__")
              return null;
            const f = ms(r, p.dataIndex ?? p.key), g = typeof p.type == "object" ? p.type : void 0, x = typeof p.search == "object" && p.search !== null && Array.isArray(p.search.options) ? p.search.options.filter((v) => v.value !== "") : void 0, w = !p.options && !(g != null && g.options) && x ? { ...p, options: x, __autoOptionsFromSearch: !0 } : p;
            let N;
            return p.viewRender ? N = p.viewRender(f, r) : p.render ? N = p.render(f, r, 0) : (p.type === "image" || (g == null ? void 0 : g.type) === "image" || p.valueType === "image") && f ? N = /* @__PURE__ */ e(Nn, { src: String(f), width: 56, height: 56 }) : N = Gc(f, r, w), /* @__PURE__ */ i(
              "div",
              {
                className: h(
                  "flex flex-col gap-1 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 p-3",
                  p.viewSpan === 2 && "md:col-span-2"
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "font-semibold text-[var(--abc-fg-muted)]", children: p.title }),
                  /* @__PURE__ */ e("div", { className: "font-medium break-all text-[var(--abc-fg)]", children: N })
                ]
              },
              p.key
            );
          }) }),
          l == null ? void 0 : l(r)
        ] })
      ]
    }
  );
}
function Dg({
  groups: t,
  initialValues: a,
  layoutMode: r = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = Mt(), [d, c] = $(a), [b, l] = $(!1), [u, m] = $({});
  fe(() => {
    c(a);
  }, [a]);
  const p = (g, x) => {
    c((w) => ({ ...w, [g]: x })), u[g] && m((w) => {
      const N = { ...w };
      return delete N[g], N;
    });
  };
  return /* @__PURE__ */ i("form", { onSubmit: async (g) => {
    g.preventDefault();
    const x = {};
    for (const w of t)
      for (const N of w.fields)
        if (N.required) {
          const v = d[N.name];
          (v == null || String(v).trim() === "") && (x[N.name] = `请填写${N.label}`);
        }
    if (Object.keys(x).length > 0) {
      m(x), o.warning("请完善必填配置项后再提交");
      return;
    }
    l(!0);
    try {
      await n(d), o.success("配置已保存生效");
    } catch (w) {
      o.error((w == null ? void 0 : w.message) || "保存失败");
    } finally {
      l(!1);
    }
  }, className: "space-y-6", children: [
    /* @__PURE__ */ e(
      $p,
      {
        mode: r,
        sections: t.map((g) => ({
          key: g.key,
          title: g.title,
          description: g.description,
          columns: g.columns ?? 1,
          children: g.fields.map((x) => {
            const w = d[x.name], N = u[x.name], v = x.type ?? "text";
            return /* @__PURE__ */ e(
              Ro,
              {
                label: x.label,
                required: x.required,
                helperText: x.helperText,
                error: N,
                children: v === "switch" ? /* @__PURE__ */ e(
                  lr,
                  {
                    checked: !!w,
                    onChange: (S) => p(x.name, S)
                  }
                ) : v === "number" ? /* @__PURE__ */ e(
                  ds,
                  {
                    value: w ?? null,
                    placeholder: x.placeholder,
                    invalid: !!N,
                    onChange: (S) => p(x.name, S)
                  }
                ) : v === "textarea" ? /* @__PURE__ */ e(
                  hn,
                  {
                    value: w ?? "",
                    placeholder: x.placeholder,
                    invalid: !!N,
                    onChange: (S) => p(x.name, S.target.value)
                  }
                ) : v === "select" ? /* @__PURE__ */ e(
                  br,
                  {
                    options: x.options ?? [],
                    value: w ?? "",
                    placeholder: x.placeholder,
                    invalid: !!N,
                    onChange: (S) => p(x.name, S)
                  }
                ) : v === "treeSelect" ? /* @__PURE__ */ e(
                  xn,
                  {
                    "aria-label": x.label,
                    treeData: x.treeData ?? [],
                    value: w ?? (x.multiple || x.treeCheckable ? [] : ""),
                    multiple: x.multiple,
                    treeCheckable: x.treeCheckable,
                    treeCheckStrictly: x.treeCheckStrictly,
                    showCheckedStrategy: x.showCheckedStrategy,
                    selectableLeafOnly: x.selectableLeafOnly,
                    fieldNames: x.fieldNames,
                    treeDataSimpleMode: x.treeDataSimpleMode,
                    maxTagCount: x.maxTagCount,
                    searchable: !0,
                    allowClear: !x.required,
                    placeholder: x.placeholder,
                    invalid: !!N,
                    onChange: (S) => p(x.name, S)
                  }
                ) : v === "image" ? x.allowDirectUrlInput !== !1 ? /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    Nn,
                    {
                      src: String(w ?? ""),
                      alt: x.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    gt,
                    {
                      allowClear: !0,
                      value: w ?? "",
                      placeholder: x.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (S) => p(x.name, S.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  Rc,
                  {
                    value: String(w ?? ""),
                    onChange: (S) => p(x.name, S)
                  }
                ) : /* @__PURE__ */ e(
                  gt,
                  {
                    type: v === "password" ? "password" : "text",
                    allowClear: !0,
                    value: w ?? "",
                    placeholder: x.placeholder,
                    invalid: !!N,
                    onChange: (S) => p(x.name, S.target.value)
                  }
                )
              },
              x.name
            );
          })
        }))
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4", children: [
      /* @__PURE__ */ e(
        Le,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            c(a), m({}), o.info("已还原初始配置值");
          },
          children: "重置更改"
        }
      ),
      /* @__PURE__ */ e(
        Le,
        {
          type: "submit",
          variant: "primary",
          loading: b,
          icon: /* @__PURE__ */ e(uc, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
function qp({
  title: t,
  subTitle: a,
  permission: r,
  hasPermission: n,
  customUpload: s,
  saveButtonText: o = "保存当前配置",
  defaultValues: d,
  fetchConfig: c,
  saveConfig: b,
  transformBeforeSave: l,
  tabs: u
}) {
  var K;
  const { toast: m, uploadAdapter: p } = Mt(), { hasPermission: f } = zo(), [g, x] = $(((K = u[0]) == null ? void 0 : K.key) || ""), [w, N] = $(!1), [v, S] = $(!1), [M, L] = $(!1), [R, C] = $(null), [y, E] = $(d), _ = ie(null);
  fe(() => () => {
    _.current !== null && typeof window < "u" && window.clearTimeout(_.current);
  }, []);
  const j = de(async () => {
    N(!0);
    try {
      const O = await c();
      if (Rr(O) && !(O != null && O.data)) {
        m.error((O == null ? void 0 : O.msg) || "获取配置数据失败");
        return;
      }
      const V = O != null && O.data && typeof O.data == "object" ? O.data : O;
      V && typeof V == "object" && E((Y) => ({ ...Y, ...V }));
    } catch {
      m.error("获取配置数据失败");
    } finally {
      N(!1);
    }
  }, [c, m]);
  fe(() => {
    j();
  }, [j]);
  const D = de((O, V) => {
    E((Y) => ({ ...Y, [O]: V }));
  }, []), B = async () => {
    S(!0);
    try {
      const O = l ? l(y) : y, V = await b(O);
      if (Rr(V)) {
        m.error((V == null ? void 0 : V.msg) || "保存配置失败");
        return;
      }
      L(!0), m.success("配置保存成功"), typeof window < "u" && (_.current !== null && window.clearTimeout(_.current), _.current = window.setTimeout(() => {
        L(!1), _.current = null;
      }, 3e3));
    } catch {
      m.error("保存配置失败");
    } finally {
      S(!1);
    }
  }, H = u.find((O) => O.key === g) || u[0], A = r ? n ? n(r) : f(r) : !0, I = async (O, V) => {
    C(O);
    try {
      let Y;
      if (s) {
        const ce = await s(V);
        Y = typeof ce == "string" ? ce : ce == null ? void 0 : ce.url;
      } else p && (Y = await p(V));
      Y && D(O, Y);
    } catch (Y) {
      m.error((Y == null ? void 0 : Y.message) || "图片上传失败");
    } finally {
      C(null);
    }
  }, P = (O) => {
    const V = y[O.key], Y = O.type || "input";
    if (Y === "custom" && O.render)
      return O.render(y, D, E);
    switch (Y) {
      case "switch":
        return /* @__PURE__ */ e(
          lr,
          {
            checked: !!V,
            onChange: (ce) => D(O.key, ce)
          }
        );
      case "radio":
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-4 pt-0.5", children: (O.options || []).map((ce) => {
          const G = typeof ce.value == "number" ? Number(V) === ce.value : String(V ?? "") === String(ce.value);
          return /* @__PURE__ */ i(
            "label",
            {
              className: "flex cursor-pointer items-center gap-2 text-sm text-[var(--abc-fg-secondary)]",
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "radio",
                    name: O.key,
                    checked: G,
                    onChange: () => D(O.key, ce.value)
                  }
                ),
                ce.label
              ]
            },
            String(ce.value)
          );
        }) });
      case "checkbox-csv": {
        const ce = new Set(
          String(V || "").split(",").filter(Boolean)
        );
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 pt-0.5 text-xs text-[var(--abc-fg-secondary)]", children: (O.options || []).map((G) => {
          const re = String(G.value), ee = ce.has(re), me = !!G.locked;
          return /* @__PURE__ */ i(
            "label",
            {
              className: h(
                "flex items-center gap-1.5",
                me ? "cursor-not-allowed opacity-75" : "cursor-pointer"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    disabled: me,
                    checked: ee || me,
                    onChange: () => {
                      if (me) return;
                      const se = new Set(ce);
                      se.has(re) ? se.delete(re) : se.add(re), D(O.key, Array.from(se).join(","));
                    }
                  }
                ),
                /* @__PURE__ */ e("span", { children: G.label })
              ]
            },
            re
          );
        }) });
      }
      case "select":
        return /* @__PURE__ */ e(
          br,
          {
            value: V ?? "",
            options: O.options || [],
            onChange: (ce) => {
              const G = ce && typeof ce == "object" && "target" in ce ? ce.target.value : ce;
              D(O.key, G);
            }
          }
        );
      case "textarea":
        return /* @__PURE__ */ e(
          hn,
          {
            rows: O.rows || 4,
            value: V || "",
            onChange: (ce) => D(O.key, ce.target.value),
            placeholder: O.placeholder,
            className: O.className
          }
        );
      case "image-url": {
        const ce = O.previewShape === "circle", G = !!(O.allowUpload && (s || p));
        return /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(
            Nn,
            {
              src: V ? String(V) : void 0,
              alt: O.label,
              width: ce ? 44 : 40,
              height: ce ? 44 : 40,
              rounded: ce,
              className: h(
                "shrink-0 overflow-hidden border border-[var(--abc-border)] shadow-2xs",
                ce ? "rounded-full" : "rounded-[var(--abc-radius-lg)]"
              )
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
            gt,
            {
              value: V || "",
              onChange: (re) => D(O.key, re.target.value),
              placeholder: O.placeholder || "请输入图片完整直链 URL 或 SVG 矢量代码"
            }
          ) }),
          G && /* @__PURE__ */ i("label", { className: "inline-flex shrink-0 cursor-pointer", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (re) => {
                  var me;
                  const ee = (me = re.target.files) == null ? void 0 : me[0];
                  ee && I(O.key, ee), re.target.value = "";
                }
              }
            ),
            /* @__PURE__ */ i("span", { className: "inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]", children: [
              /* @__PURE__ */ e(as, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ e("span", { children: R === O.key ? "上传中..." : "上传" })
            ] })
          ] })
        ] });
      }
      case "password":
      case "number":
      case "input":
      default:
        return /* @__PURE__ */ e(
          gt,
          {
            type: Y === "password" ? "password" : Y === "number" ? "number" : "text",
            value: V ?? "",
            onChange: (ce) => D(O.key, ce.target.value),
            placeholder: O.placeholder,
            className: O.className
          }
        );
    }
  };
  return /* @__PURE__ */ i("div", { className: "space-y-6", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-4 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-[var(--abc-shadow-card)]", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-bold text-[var(--abc-fg)]", children: t }),
        a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
        M && /* @__PURE__ */ i("span", { className: "flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-success)]", children: [
          /* @__PURE__ */ e(ac, { className: "h-4 w-4" }),
          "配置保存成功"
        ] }),
        /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => void j(),
            disabled: w || v,
            icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
            children: "刷新"
          }
        ),
        A && /* @__PURE__ */ e(
          Le,
          {
            onClick: () => void B(),
            loading: v,
            icon: /* @__PURE__ */ e(uc, { className: "h-4 w-4" }),
            children: o
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-4", children: [
      /* @__PURE__ */ e("div", { className: "h-fit space-y-1.5 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-[var(--abc-shadow-card)] lg:col-span-1", children: u.map((O) => {
        const V = O.icon, Y = (H == null ? void 0 : H.key) === O.key;
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => x(O.key),
            className: h(
              "flex w-full cursor-pointer items-center gap-3 rounded-[var(--abc-radius-lg)] px-4 py-3 text-sm font-medium transition-all",
              Y ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
            ),
            children: [
              V && /* @__PURE__ */ e(
                V,
                {
                  className: h(
                    "h-4 w-4",
                    Y ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: O.label })
            ]
          },
          O.key
        );
      }) }),
      /* @__PURE__ */ i("div", { className: "relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-6 shadow-[var(--abc-shadow-card)] lg:col-span-3", children: [
        w && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-[var(--abc-radius-xl)] bg-[var(--abc-bg-surface)]/65 backdrop-blur-xs", children: /* @__PURE__ */ e(Jf, {}) }),
        H && /* @__PURE__ */ i("div", { className: "space-y-6", children: [
          /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] pb-4", children: [
            /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)]", children: H.sectionTitle }),
            H.sectionDescription && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: H.sectionDescription })
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: h(
                "grid grid-cols-1 gap-4",
                (H.columns ?? 2) === 2 && "sm:grid-cols-2"
              ),
              children: H.fields.map((O) => {
                const V = (H.columns ?? 2) === 1 || O.span === 2;
                return /* @__PURE__ */ i(
                  "div",
                  {
                    className: h(
                      V && (H.columns ?? 2) === 2 && "sm:col-span-2"
                    ),
                    children: [
                      O.label && /* @__PURE__ */ i("div", { className: "mb-1.5 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ e("label", { className: "block text-xs font-medium text-[var(--abc-fg-secondary)]", children: O.label }),
                        O.tooltip && /* @__PURE__ */ e(
                          "span",
                          {
                            title: O.tooltip,
                            className: "cursor-help text-[var(--abc-fg-muted)]",
                            children: /* @__PURE__ */ e(Wa, { className: "h-3.5 w-3.5" })
                          }
                        )
                      ] }),
                      P(O)
                    ]
                  },
                  O.key
                );
              })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Rg = qp, Xp = ge.forwardRef(
  ({
    surface: t = !1,
    hasActiveFilters: a = !1,
    onReset: r,
    resetLabel: n = "重置筛选",
    search: s,
    filters: o,
    trailing: d,
    children: c,
    className: b,
    ...l
  }, u) => /* @__PURE__ */ i(
    "div",
    {
      ref: u,
      "data-slot": "filter-toolbar",
      className: h(
        "flex flex-wrap items-center justify-between gap-2.5",
        t && "rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 shadow-2xs",
        b
      ),
      ...l,
      children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
          s,
          o,
          c
        ] }),
        a && r || d ? /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
          a && r ? /* @__PURE__ */ i(
            Le,
            {
              variant: "ghost",
              size: "xs",
              onClick: r,
              className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
              children: [
                /* @__PURE__ */ e(vr, { className: "h-3 w-3 mr-1", "aria-hidden": "true" }),
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
Xp.displayName = "FilterToolbar";
function jg({
  options: t,
  value: a,
  onValueChange: r,
  size: n = "sm",
  className: s,
  ...o
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "filter-pill-group",
      className: h("inline-flex flex-wrap items-center gap-1.5", s),
      ...o,
      children: t.map((d) => {
        const c = d.value === a;
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            disabled: d.disabled,
            "aria-pressed": c,
            onClick: () => r(d.value),
            className: h(
              "inline-flex cursor-pointer select-none items-center gap-1.5 rounded-full border font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              n === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs",
              c ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#ffffff)] shadow-2xs font-semibold" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-border-hover,#cbd5e1)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              d.icon,
              /* @__PURE__ */ e("span", { children: d.label }),
              d.count !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: h(
                    "rounded-full px-1.5 py-0.2 text-[10px] tabular-nums font-mono",
                    c ? "bg-white/20 text-white" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
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
function Bg({
  label: t,
  items: a,
  selectedId: r = null,
  headerAction: n,
  onSelect: s,
  onClear: o,
  allLabel: d = "全部",
  className: c
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "quick-select-bar",
      className: h(
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
              className: h(
                "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                r === null ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
              ),
              children: d
            }
          ),
          a.map((b, l) => {
            const u = b.id ?? b.key ?? b.code ?? String(l), m = b.active !== void 0 ? b.active : r === u;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => {
                  b.onSelect ? b.onSelect() : s && s(u);
                },
                className: h(
                  "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                  m ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  b.label,
                  b.count !== void 0 ? ` (${b.count})` : ""
                ]
              },
              u
            );
          })
        ] }),
        r !== null && o && /* @__PURE__ */ e(
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
function zg({
  open: t,
  title: a,
  description: r,
  confirmLabel: n,
  cancelLabel: s = "取消",
  onCancel: o,
  workingLabel: d = "正在处理…",
  reasonLabel: c = "操作原因",
  reasonPlaceholder: b = "请详细填写本次变更的业务原因或工单号",
  reasonHint: l = "需输入 8–512 字符，作为运维审计依据留痕",
  reasonTooLongMessage: u = "操作原因不能超过 512 字符",
  closeLabel: m = "关闭",
  minReasonLength: p = 8,
  maxReasonLength: f = 512,
  destructive: g = !1,
  variant: x,
  pending: w = !1,
  confirmDisabled: N = !1,
  error: v = null,
  maxWidthClass: S = "sm:max-w-lg",
  className: M,
  children: L,
  onOpenChange: R,
  onConfirm: C
}) {
  const [y, E] = ge.useState(""), _ = ge.useId(), j = g || x === "destructive";
  ge.useEffect(() => {
    t || E("");
  }, [t]);
  const D = y.trim(), B = D.length < p, H = D.length > f, A = !w && !N && !B && !H, I = () => {
    A && C(D);
  }, P = (O) => {
    O.key === "Enter" && A && (O.preventDefault(), I());
  }, K = () => {
    o == null || o(), R == null || R(!1);
  };
  return /* @__PURE__ */ e(
    yr,
    {
      open: t,
      closeLabel: m,
      onClose: K,
      onCancel: K,
      onOpenChange: R,
      closeDisabled: !1,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        No,
        {
          "data-slot": "reasoned-action-dialog",
          className: h("w-full max-w-lg", S, M),
          closeLabel: m,
          closeDisabled: !1,
          closable: !0,
          children: [
            /* @__PURE__ */ i(ko, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                j ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(ns, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(bo, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Co, { className: "text-base font-semibold leading-tight", children: a })
              ] }),
              /* @__PURE__ */ e(_o, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: r })
            ] }),
            L && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: L }),
            v && /* @__PURE__ */ e(
              xa,
              {
                variant: "error",
                title: "操作失败",
                message: v,
                className: "my-1 text-xs"
              }
            ),
            /* @__PURE__ */ i("div", { className: "space-y-1.5 py-1", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ i("label", { htmlFor: _, className: "font-medium text-[var(--abc-fg)]", children: [
                  c,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: h(
                      "font-mono text-[11px] tabular-nums",
                      H ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                    ),
                    children: [
                      y.length,
                      "/",
                      f
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ e(
                gt,
                {
                  id: _,
                  "aria-label": "Reason",
                  value: y,
                  disabled: w,
                  placeholder: b,
                  onChange: (O) => E(O.target.value),
                  onKeyDown: P,
                  className: h(
                    "w-full text-xs",
                    H && "border-red-500 focus-visible:ring-red-500/20"
                  )
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: h(
                    "text-[11px]",
                    H ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: H ? u : l
                }
              )
            ] }),
            /* @__PURE__ */ i(So, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                Le,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: w,
                  onClick: () => R(!1),
                  children: s
                }
              ),
              /* @__PURE__ */ e(
                Le,
                {
                  type: "button",
                  variant: j ? "danger" : "primary",
                  size: "sm",
                  disabled: !A,
                  loading: w,
                  onClick: I,
                  children: w ? d : n
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function Pg({
  open: t,
  onClose: a,
  title: r,
  description: n,
  confirmLabel: s,
  cancelLabel: o = "Cancel",
  workingLabel: d = "Working…",
  reasonLabel: c = "Reason",
  reasonPlaceholder: b = "Record why this change is required",
  reasonHint: l = "8–512 characters. Stored in the operation audit.",
  reasonTooLongMessage: u = "Shorten the reason to 512 characters or fewer.",
  minReasonLength: m = 8,
  maxReasonLength: p = 512,
  destructive: f = !1,
  pending: g = !1,
  confirmDisabled: x = !1,
  error: w = null,
  width: N = 560,
  cascadeMode: v = "adjacent",
  children: S,
  onConfirm: M
}) {
  const [L, R] = ge.useState(""), C = ge.useId();
  ge.useEffect(() => {
    t || R("");
  }, [t]);
  const y = L.trim(), E = y.length < m, _ = y.length > p, j = !g && !x && !E && !_, D = () => {
    j && M(y);
  };
  return /* @__PURE__ */ i(
    kn,
    {
      open: t,
      onClose: a,
      width: N,
      cascadeMode: v,
      role: "dialog",
      children: [
        /* @__PURE__ */ i(Uf, { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            f ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(bo, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(Vf, { className: "text-base font-semibold", children: r })
          ] }),
          n && /* @__PURE__ */ e(Gf, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ i(Yf, { className: "space-y-4", children: [
          w && /* @__PURE__ */ e(
            xa,
            {
              variant: "error",
              title: "操作失败",
              message: w,
              className: "text-xs"
            }
          ),
          S,
          /* @__PURE__ */ i("div", { className: "rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ i("label", { htmlFor: C, className: "font-semibold text-[var(--abc-fg)]", children: [
                c,
                " ",
                /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ i(
                "span",
                {
                  className: h(
                    "font-mono text-[11px] tabular-nums",
                    _ ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: [
                    L.length,
                    "/",
                    p
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e(
              gt,
              {
                id: C,
                "aria-label": "Reason",
                value: L,
                disabled: g,
                placeholder: b,
                onChange: (B) => R(B.target.value),
                className: h(
                  "w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs",
                  _ && "border-red-500 focus-visible:ring-red-500/20"
                )
              }
            ),
            /* @__PURE__ */ e(
              "p",
              {
                className: h(
                  "text-[11px]",
                  _ ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                ),
                children: _ ? u : l
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(qf, { children: [
          /* @__PURE__ */ e(
            Le,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              disabled: g,
              onClick: a,
              children: o
            }
          ),
          /* @__PURE__ */ e(
            Le,
            {
              type: "button",
              variant: f ? "danger" : "primary",
              size: "sm",
              disabled: !j,
              loading: g,
              onClick: D,
              children: g ? d : s
            }
          )
        ] })
      ]
    }
  );
}
function Gs(t) {
  if (t == null) return "";
  const a = String(t);
  return /[",\r\n]/.test(a) ? `"${a.replace(/"/g, '""')}"` : a;
}
function Zp(t, a) {
  const r = t.filter(
    (o) => !o.hideInTable && o.key !== "__abc_actions__" && o.key !== "__actions__" && o.key !== "__drag_handle__"
  ), n = r.map((o) => Gs(o.title)).join(","), s = a.map(
    (o) => r.map((d) => {
      const c = ms(o, d.dataIndex ?? d.key), b = typeof d.type == "object" ? d.type.options : void 0, l = d.options ?? b;
      if (l && l.length > 0) {
        const u = l.find((m) => String(m.value) === String(c));
        if (u) return Gs(u.label);
      }
      return Gs(c);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function Vi(t, a, r) {
  const n = Zp(a, r);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), d = document.createElement("a");
    d.href = o, d.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(o);
  }
  return n;
}
function Jp(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : String(t).trim() !== "";
}
const Qp = ({
  title: t,
  filterType: a = "text",
  filterOptions: r,
  treeData: n,
  multiple: s = !1,
  searchable: o = !1,
  placeholder: d,
  format: c,
  highlighted: b = !1,
  iconType: l = "filter",
  confirmText: u,
  value: m,
  onApply: p
}) => {
  const [f, g] = $(!1), x = s ? [] : a === "dateRange" ? {} : "", [w, N] = $(m ?? x), [v, S] = $("");
  fe(() => {
    f && (N(m ?? (s ? [] : a === "dateRange" ? {} : "")), S(""));
  }, [f, m, s, a]);
  const M = Jp(m), L = (y) => {
    p(y), g(!1);
  }, R = oe(() => {
    const y = (r ?? []).filter((_) => _.value !== ""), E = v.trim().toLowerCase();
    return E ? y.filter(
      (_) => String(_.label ?? "").toLowerCase().includes(E) || String(_.value ?? "").toLowerCase().includes(E)
    ) : y;
  }, [r, v]);
  return /* @__PURE__ */ e(
    Do,
    {
      open: f,
      onOpenChange: g,
      placement: "bottomRight",
      panelClassName: "w-64 p-3",
      content: /* @__PURE__ */ i(
        "div",
        {
          "data-header-filter": "",
          onClick: (y) => y.stopPropagation(),
          className: "space-y-2.5 text-xs font-normal text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ i("div", { className: "font-semibold text-[var(--abc-fg-secondary)]", children: [
              "筛选：",
              t
            ] }),
            (() => {
              if (a === "select" && r) {
                if (s) {
                  const y = Array.isArray(w) ? w.map(String) : [], E = o || R.length > 6 || !!v;
                  return /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
                    E && /* @__PURE__ */ e(
                      gt,
                      {
                        size: "xs",
                        allowClear: !0,
                        placeholder: "搜索选项...",
                        value: v,
                        onChange: (_) => S(_.target.value)
                      }
                    ),
                    /* @__PURE__ */ e("div", { className: "max-h-48 space-y-0.5 overflow-y-auto rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 p-1", children: R.length === 0 ? /* @__PURE__ */ e("div", { className: "py-3 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : R.map((_) => {
                      const j = String(_.value), D = y.includes(j);
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: _.disabled,
                          onClick: () => {
                            const B = D ? y.filter((H) => H !== j) : [...y, j];
                            N(B);
                          },
                          className: h(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-xs)] px-2 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            D ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                          ),
                          children: [
                            /* @__PURE__ */ e("span", { className: "truncate", children: _.label }),
                            /* @__PURE__ */ e(
                              "span",
                              {
                                className: h(
                                  "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border",
                                  D ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                ),
                                children: D && /* @__PURE__ */ e(kt, { className: "h-2.5 w-2.5 stroke-[3]" })
                              }
                            )
                          ]
                        },
                        j
                      );
                    }) })
                  ] });
                }
                return /* @__PURE__ */ e(
                  br,
                  {
                    size: "xs",
                    allowClear: !0,
                    searchable: o,
                    placeholder: d || `选择${t}`,
                    options: r,
                    value: w ?? "",
                    onChange: (y) => {
                      const E = y && typeof y == "object" && "target" in y ? y.target.value : y;
                      N(E);
                    }
                  }
                );
              }
              return a === "treeSelect" ? /* @__PURE__ */ e(
                xn,
                {
                  size: "xs",
                  allowClear: !0,
                  searchable: o,
                  multiple: s,
                  treeData: n ?? [],
                  placeholder: d || `选择${t}`,
                  value: w ?? (s ? [] : ""),
                  onChange: (y) => N(y)
                }
              ) : a === "date" || a === "datetimePicker" ? /* @__PURE__ */ e(
                yn,
                {
                  size: "xs",
                  value: w ?? "",
                  format: c,
                  placeholder: d || `选择${t}`,
                  onChange: (y) => N(y)
                }
              ) : a === "dateRange" ? /* @__PURE__ */ e(
                wn,
                {
                  size: "xs",
                  value: w && typeof w == "object" ? w : null,
                  format: c,
                  onChange: (y) => N(y)
                }
              ) : a === "number" ? /* @__PURE__ */ e(
                ds,
                {
                  size: "xs",
                  value: w === "" ? null : w,
                  placeholder: d || `输入${t}`,
                  onChange: (y) => N(y ?? "")
                }
              ) : /* @__PURE__ */ e(
                gt,
                {
                  size: "xs",
                  allowClear: !0,
                  placeholder: d || `输入${t}关键字`,
                  value: w ?? "",
                  onChange: (y) => N(y.target.value),
                  onKeyDown: (y) => {
                    y.key === "Enter" && (y.preventDefault(), L(w));
                  }
                }
              );
            })(),
            /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                Le,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    const y = s ? [] : a === "dateRange" ? {} : "";
                    N(y), L(y);
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(Le, { variant: "primary", size: "xs", onClick: () => L(w), children: u ?? (l === "search" ? "查询" : "筛选") })
            ] })
          ]
        }
      ),
      children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "data-header-filter": "",
          "aria-label": `筛选 ${t}`,
          title: `筛选 ${t}`,
          className: h(
            "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
            b ? "text-white/95 hover:bg-white/20 hover:text-white" : M ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: l === "search" ? /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Wn, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function eh({
  columns: t,
  searchableFieldNames: a,
  settings: r,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: o,
  onToggleVisible: d,
  onSetAllVisible: c,
  onSetFixed: b,
  onSetWidth: l,
  onSetOrder: u,
  onSetSearchVisible: m,
  onReset: p
}) {
  const f = Te(o), [g, x] = $(!1), [w, N] = $(""), [v, S] = $("all"), [M, L] = $(null), R = ie(null), C = ie(!1);
  fe(() => {
    if (!M) return;
    const I = (P) => {
      if (P.key === "Escape") {
        const K = R.current;
        L(null), R.current = null, C.current = !1, K && u(K);
      }
    };
    return document.addEventListener("keydown", I, !0), () => document.removeEventListener("keydown", I, !0);
  }, [M, u]);
  const y = oe(
    () => t.filter(
      (I) => !I.hideInTable && I.key !== "__abc_actions__" && I.key !== "__actions__" && I.key !== "__drag_handle__"
    ),
    [t]
  ), E = oe(() => r.columnOrder.length === 0 ? y : [...y].sort((I, P) => {
    const K = r.columnOrder.indexOf(I.key), O = r.columnOrder.indexOf(P.key);
    return K === -1 && O === -1 ? 0 : K === -1 ? 1 : O === -1 ? -1 : K - O;
  }), [y, r.columnOrder]), _ = (I) => I.key in r.columnFixed ? r.columnFixed[I.key] ?? void 0 : I.fixed, j = oe(() => {
    const I = w.trim().toLowerCase();
    return E.filter((P) => {
      if (I && !P.title.toLowerCase().includes(I) && !P.key.toLowerCase().includes(I))
        return !1;
      const K = r.hiddenKeys.includes(P.key), O = _(P);
      return v === "fixed" ? !!O : v === "hidden" ? K : !0;
    });
  }, [E, w, v, r.hiddenKeys, r.columnFixed]), D = oe(() => y.map((I) => I.key), [y]), B = oe(
    () => t.find((I) => I.key === "__abc_actions__"),
    [t]
  ), H = !!(n || B), A = r.columnWidths.__abc_actions__ ?? (typeof (B == null ? void 0 : B.width) == "number" ? B.width : void 0) ?? s;
  return /* @__PURE__ */ e(
    Do,
    {
      open: g,
      onOpenChange: x,
      placement: "bottomRight",
      motion: f,
      panelClassName: "w-[356px] overflow-hidden p-0",
      content: /* @__PURE__ */ i("div", { className: "text-xs select-none", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3.5 py-2.5", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "列设置与偏好" }),
            /* @__PURE__ */ i("span", { className: "rounded bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: [
              y.length,
              " 列"
            ] })
          ] }),
          /* @__PURE__ */ e(
            Le,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(vr, { className: "h-3 w-3" }),
              onClick: p,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ e($t, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: w,
                onChange: (I) => N(I.target.value),
                placeholder: "搜索列名称或字段标识...",
                className: "h-7 w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] pr-7 pl-8 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none"
              }
            ),
            w && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空列搜索",
                onClick: () => N(""),
                className: "absolute top-1/2 right-2 -translate-y-1/2 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(St, { className: "h-3 w-3" })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5", children: [
              { key: "all", label: "全部" },
              { key: "fixed", label: "已固定" },
              { key: "hidden", label: "已隐藏" }
            ].map((I) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => S(I.key),
                className: h(
                  "rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer",
                  v === I.key ? "bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: I.label
              },
              I.key
            )) }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(D, !0),
                  className: "text-[var(--abc-primary)] hover:underline cursor-pointer",
                  children: "全显"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(D, !1),
                  className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: "全隐"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: j.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : j.map((I) => {
          const P = !r.hiddenKeys.includes(I.key), K = _(I), O = Array.isArray(I.dataIndex) ? I.dataIndex.join(".") : String(I.dataIndex ?? I.key), V = a.has(O) || a.has(I.key), Y = r.searchVisible[O] !== void 0 ? !!r.searchVisible[O] : r.searchVisible[I.key] !== void 0 ? !!r.searchVisible[I.key] : V, ce = r.columnWidths[I.key] ?? (typeof I.width == "number" ? I.width : "");
          return /* @__PURE__ */ i(
            "div",
            {
              "data-dragging": M === I.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                R.current = E.map((G) => G.key), C.current = !1, L(I.key);
              },
              onDragOver: (G) => {
                if (!M || M === I.key) return;
                G.preventDefault();
                const re = E.map((Z) => Z.key), ee = re.indexOf(M), me = re.indexOf(I.key);
                if (ee < 0 || me < 0 || ee === me) return;
                const se = G.currentTarget.getBoundingClientRect();
                if (se.height > 0 && (ee < me && G.clientY < se.top + se.height * 0.35 || ee > me && G.clientY > se.top + se.height * 0.65))
                  return;
                const ye = [...re], [F] = ye.splice(ee, 1);
                ye.splice(me, 0, F), C.current = !0, u(ye);
              },
              onDrop: () => {
                if (M && M !== I.key && !C.current) {
                  const G = E.map((me) => me.key), re = G.indexOf(M), ee = G.indexOf(I.key);
                  if (re >= 0 && ee >= 0) {
                    const me = [...G], [se] = me.splice(re, 1);
                    me.splice(ee, 0, se), u(me);
                  }
                }
                L(null), R.current = null, C.current = !1;
              },
              onDragEnd: () => {
                L(null), R.current = null, C.current = !1;
              },
              className: h(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                M === I.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(cs, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e($a, { checked: P, onChange: () => d(I.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: h(
                        "truncate text-xs",
                        P ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: I.title
                    }
                  ),
                  K && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: K === "left" ? "左固" : "右固" })
                ] }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "number",
                      min: 64,
                      max: 800,
                      "aria-label": `${I.title} 列宽`,
                      placeholder: "宽px",
                      defaultValue: ce,
                      onBlur: (G) => {
                        const re = parseInt(G.target.value, 10);
                        !Number.isNaN(re) && re >= 64 && l(I.key, re);
                      },
                      onKeyDown: (G) => {
                        if (G.key === "Enter") {
                          const re = parseInt(G.target.value, 10);
                          !Number.isNaN(re) && re >= 64 && l(I.key, re);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${I.key}_${ce}`
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: Y ? "从筛选条件中移除" : "加入筛选条件",
                      "aria-label": `切换 ${I.title} 筛选项显示`,
                      onClick: () => m(O, !Y),
                      className: h(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        Y ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e($t, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: K === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${I.title} 到左侧`,
                      onClick: () => b(I.key, K === "left" ? null : "left"),
                      className: h(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        K === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Oa, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: K === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${I.title} 到右侧`,
                      onClick: () => b(I.key, K === "right" ? null : "right"),
                      className: h(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        K === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Oa, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            I.key
          );
        }) }),
        H && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
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
                defaultValue: A,
                onBlur: (I) => {
                  const P = parseInt(I.target.value, 10);
                  !Number.isNaN(P) && P >= 80 && l("__abc_actions__", P);
                },
                onKeyDown: (I) => {
                  if (I.key === "Enter") {
                    const P = parseInt(I.target.value, 10);
                    !Number.isNaN(P) && P >= 80 && l("__abc_actions__", P);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${A}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(tr, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: h(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            g ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(Uu, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const th = ({ actions: t, maxInline: a = 3, autoFit: r = !0, align: n = "right" }) => {
  const s = ie(null), o = ie(null), [d, c] = $(null), b = t.map((g) => g.key).join("|");
  if (ln(() => {
    if (!r || t.length <= 1) {
      c(null);
      return;
    }
    const g = s.current, x = o.current;
    if (!g || !x) return;
    const w = () => {
      const v = g.clientWidth;
      if (v <= 0) {
        c(null);
        return;
      }
      const S = Array.from(x.children);
      if (S.length === 0) return;
      const M = 4, L = 30, R = S.map((_) => _.offsetWidth);
      if (R.reduce((_, j) => _ + j, 0) + Math.max(0, R.length - 1) * M <= v) {
        c(Math.min(t.length, a));
        return;
      }
      let y = 0, E = 0;
      for (let _ = 0; _ < R.length; _++) {
        const j = (_ > 0 ? y + M : 0) + R[_];
        if (j + M + L <= v)
          y = j, E = _ + 1;
        else
          break;
      }
      c(Math.min(E, Math.max(1, a - 1)));
    };
    if (w(), typeof ResizeObserver > "u") return;
    const N = new ResizeObserver(() => w());
    return N.observe(g), () => N.disconnect();
  }, [r, b, t.length, a]), t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const l = (g) => /* @__PURE__ */ e(
    Le,
    {
      variant: g.variant ?? "text",
      size: "xs",
      disabled: g.disabled,
      title: g.title,
      icon: g.icon,
      onClick: g.onClick,
      className: h(
        g.danger && "text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]",
        g.className
      ),
      children: g.label
    },
    g.key
  ), u = t.length <= a ? t.length : Math.max(1, a - 1), m = d ?? u, p = t.slice(0, m), f = t.slice(m);
  return /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      className: h(
        "relative flex w-full min-w-0 items-center gap-1 whitespace-nowrap",
        n === "right" ? "justify-end" : "justify-start"
      ),
      children: [
        r && t.length > 1 && /* @__PURE__ */ e(
          "div",
          {
            ref: o,
            "aria-hidden": "true",
            className: "pointer-events-none invisible fixed -top-[9999px] -left-[9999px] flex items-center gap-1 whitespace-nowrap",
            children: t.map(l)
          }
        ),
        p.map(l),
        f.length > 0 && /* @__PURE__ */ e(
          vn,
          {
            placement: "bottomRight",
            items: f.map((g) => ({
              key: g.key,
              label: g.label ?? g.title ?? g.key,
              icon: g.icon,
              danger: g.danger,
              disabled: g.disabled,
              onClick: g.onClick
            })),
            children: /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "更多操作",
                className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(fo, { className: "h-3.5 w-3.5" })
              }
            )
          }
        )
      ]
    }
  );
};
function rh({
  selectedKeys: t,
  selectedRows: a,
  batchActions: r = [],
  extraContent: n,
  onBatchDelete: s,
  onClear: o,
  motion: d
}) {
  const c = Te(d);
  return t.length === 0 ? null : /* @__PURE__ */ i(
    "div",
    {
      role: "region",
      "aria-label": "批量操作栏",
      "data-motion": c,
      className: h(
        "fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--abc-border-strong)] bg-[var(--abc-bg-elevated)]/95 px-4 py-2 shadow-[var(--abc-shadow-modal)] backdrop-blur-md",
        c !== "none" && "abc-floating-bar-in"
      ),
      children: [
        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]", children: [
          "已选择 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-bold tabular-nums", children: t.length }),
          " 项"
        ] }),
        /* @__PURE__ */ e("span", { className: "h-4 w-px bg-[var(--abc-border)]" }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          n,
          r.map((b) => /* @__PURE__ */ e(
            Le,
            {
              variant: b.variant ?? b.type ?? "secondary",
              size: "xs",
              icon: b.icon,
              className: "rounded-full",
              onClick: () => b.onClick(t, a),
              children: b.label
            },
            b.key
          )),
          s && /* @__PURE__ */ i(
            Le,
            {
              variant: "danger",
              size: "xs",
              icon: /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
              className: "rounded-full",
              onClick: s,
              children: [
                "批量删除 (",
                t.length,
                ")"
              ]
            }
          ),
          /* @__PURE__ */ e("span", { className: "mx-0.5 h-4 w-px bg-[var(--abc-border)]" }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              "aria-label": "取消多选",
              onClick: o,
              className: "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: [
                /* @__PURE__ */ e("span", { children: "取消选择" }),
                /* @__PURE__ */ e(St, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Og(t, a) {
  if (a == null || a === "") return "";
  if (Array.isArray(a)) {
    const r = t.options || [];
    return a.map((n) => {
      const s = r.find((o) => String(o.value) === String(n));
      return s && (typeof s.label == "string" || typeof s.label == "number") ? String(s.label) : String(n);
    }).filter(Boolean).join("、");
  }
  if (typeof a == "object") {
    const r = a;
    return [r.start, r.end].filter(Boolean).join(" ~ ");
  }
  if (t.type === "select" && t.options) {
    const r = t.options.find((n) => String(n.value) === String(a));
    if (r && (typeof r.label == "string" || typeof r.label == "number"))
      return String(r.label);
  }
  return String(a);
}
const Gi = 3, ah = ({
  searchFields: t,
  query: a,
  onQueryChange: r,
  onSearch: n,
  onReset: s,
  renderSearchExtra: o,
  isSearchVisible: d = () => !0,
  defaultCollapsed: c = !0,
  collapsed: b,
  onCollapseChange: l,
  className: u
}) => {
  const m = b !== void 0, [p, f] = $(!1), [g, x] = $(c), w = m ? b : g, N = () => {
    const y = !w;
    m || x(y), l == null || l(y);
  }, v = o ? o({ query: a, onQueryChange: r, isSearchVisible: d }) : null, S = !!v, { firstRowKeys: M, hasExtraInFirstRow: L, canCollapse: R } = oe(() => {
    let y = 0;
    const E = /* @__PURE__ */ new Set();
    let _ = !1;
    for (const D of t) {
      const B = D.span === 2 ? 2 : 1;
      if (y + B <= Gi)
        y += B, E.add(D.key);
      else
        break;
    }
    S && y < Gi && (_ = !0, y += 1);
    const j = E.size < t.length || S && !_;
    return {
      firstRowKeys: E,
      hasExtraInFirstRow: _,
      canCollapse: j
    };
  }, [t, S]);
  if (!t || t.length === 0)
    return null;
  const C = (y) => {
    const E = a[y.key] ?? "";
    switch (y.type) {
      case "select":
        return /* @__PURE__ */ e(
          br,
          {
            value: E,
            multiple: y.multiple,
            searchable: y.searchable,
            options: y.options || [],
            placeholder: y.placeholder || `请选择${y.label}`,
            clearable: y.clearable !== !1,
            onChange: (_) => {
              var j;
              return r(y.key, ((j = _ == null ? void 0 : _.target) == null ? void 0 : j.value) ?? _);
            }
          }
        );
      case "date":
        return /* @__PURE__ */ e(
          yn,
          {
            value: E,
            onChange: (_) => r(y.key, _),
            placeholder: y.placeholder || `请选择${y.label}`,
            format: y.format
          }
        );
      case "datetimePicker":
        return /* @__PURE__ */ e(
          gt,
          {
            type: "datetime-local",
            value: E ? String(E).replace(" ", "T").slice(0, 16) : "",
            onChange: (_) => {
              const j = _.target.value;
              r(y.key, j ? `${j.replace("T", " ")}:00` : "");
            },
            onKeyDown: (_) => _.key === "Enter" && n(),
            placeholder: y.placeholder,
            clearable: y.clearable !== !1
          }
        );
      case "dateRange": {
        const _ = a[y.key] || {};
        return /* @__PURE__ */ e(
          wn,
          {
            value: _,
            onChange: (j) => r(y.key, j),
            placeholder: y.placeholder ? [y.placeholder, y.placeholder] : ["开始日期", "结束日期"],
            format: y.format
          }
        );
      }
      case "input":
      default:
        return /* @__PURE__ */ e(
          gt,
          {
            value: E,
            onChange: (_) => r(y.key, _.target.value),
            onKeyDown: (_) => _.key === "Enter" && n(),
            placeholder: y.placeholder || `请输入${y.label}`,
            clearable: y.clearable !== !1
          }
        );
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: h(
        "rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-2xs transition-all",
        u
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选条件" }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => f((y) => !y),
              className: "inline-flex items-center text-xs font-medium text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
              children: [
                /* @__PURE__ */ e("span", { children: p ? "展开" : "收起" }),
                p ? /* @__PURE__ */ e(sr, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(Un, { className: "ml-0.5 h-3.5 w-3.5" })
              ]
            }
          )
        ] }),
        !p && /* @__PURE__ */ i("div", { className: "mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4", children: [
          t.map((y) => {
            const E = !w || !R || M.has(y.key);
            return /* @__PURE__ */ i(
              "div",
              {
                className: h(
                  y.span === 2 ? "md:col-span-2" : "flex flex-col justify-end",
                  !E && "hidden"
                ),
                children: [
                  /* @__PURE__ */ e("label", { className: "mb-1.5 block text-xs font-semibold tracking-wide text-[var(--abc-fg-secondary)]", children: y.label }),
                  C(y)
                ]
              },
              y.key
            );
          }),
          v && /* @__PURE__ */ e(
            "div",
            {
              className: h(
                "flex flex-col justify-end",
                w && R && !L && "hidden"
              ),
              children: v
            }
          ),
          /* @__PURE__ */ i("div", { className: "flex items-end gap-2 md:col-start-4 md:justify-end", children: [
            /* @__PURE__ */ e(
              Le,
              {
                variant: "primary",
                size: "sm",
                onClick: n,
                icon: /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "搜索"
              }
            ),
            /* @__PURE__ */ e(
              Le,
              {
                variant: "secondary",
                size: "sm",
                onClick: s,
                icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "重置"
              }
            ),
            R && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: N,
                className: "ml-1 inline-flex items-center justify-center px-1 py-2 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
                children: [
                  /* @__PURE__ */ e("span", { children: w ? "展开" : "收起" }),
                  w ? /* @__PURE__ */ e(sr, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(Un, { className: "ml-0.5 h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}, $g = ah, Yi = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
], nh = {};
function qi(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : !0;
}
function sh(t, a) {
  const r = (n, s) => String(typeof n == "string" || typeof n == "number" ? n : s ?? "");
  if (Array.isArray(a))
    return a.map((n) => {
      var o;
      const s = (o = t.options) == null ? void 0 : o.find((d) => String(d.value) === String(n));
      return s ? r(s.label, n) : String(n);
    }).join(", ");
  if (a && typeof a == "object" && ("start" in a || "end" in a))
    return `${a.start || "..."} ~ ${a.end || "..."}`;
  if (t.options && t.options.length > 0) {
    const n = t.options.find((s) => String(s.value) === String(a));
    if (n) return r(n.label, a);
  }
  return String(a ?? "");
}
function rl({
  storageKey: t,
  tableId: a,
  title: r,
  subTitle: n,
  columns: s,
  fields: o = [],
  searchFields: d,
  formFields: c,
  formSchema: b,
  defaultFormValues: l,
  dialogTitle: u,
  dialogSize: m,
  formLayout: p = "grid",
  draftConfig: f,
  dataSource: g,
  loading: x,
  request: w,
  api: N,
  defaultQuery: v,
  onListLoaded: S,
  rowKey: M = "id",
  defaultPageSize: L = 10,
  pageSizeOptions: R,
  hidePagination: C = !1,
  pagination: y,
  renderPagination: E,
  selectedRowKey: _,
  onRowClick: j,
  onRow: D,
  searchVariant: B = "card",
  onSearchChange: H,
  onSearchSubmit: A,
  onSearchReset: I,
  headerFilterMode: P,
  onHeaderFilterModeChange: K,
  showHeaderFilterToggle: O,
  clientFilter: V,
  showClientFilterSwitch: Y,
  defaultSearchCollapsed: ce = !0,
  autoRefresh: G,
  autoRefreshConfig: re,
  refetchInterval: ee,
  exportable: me,
  showExport: se,
  onExport: ye,
  showImport: F = !1,
  onImport: Z,
  syncToUrl: De = !1,
  viewable: Xe,
  showView: he,
  viewTitle: Ae,
  viewSize: Fe = "lg",
  renderViewExtra: Ce,
  renderViewFooter: st,
  onNavigate: we,
  formContainer: Pe = "dialog",
  formColumns: Ve,
  showAdd: ae,
  addButtonText: ve,
  showEdit: Ge,
  showDelete: He,
  showBatchDelete: ft,
  rowActions: Ht = [],
  actionButtons: It = [],
  actionColumnWidth: zr,
  maxInlineActions: wr,
  rowSelection: fr,
  showRowSelection: _e,
  selectedRowKeys: ot,
  onRowSelectionChange: Ft,
  batchActions: pr = [],
  renderBatchActions: qt,
  treeData: dt = !1,
  expandable: rt,
  sortable: Ze,
  columnSettingsEnabled: Je = !0,
  maxHeight: jt,
  autoFitHeight: Bt = !1,
  permissions: et,
  permission: Ye,
  hasPermission: Xt,
  toolbarButtons: Ir = [],
  toolbarExtra: q,
  renderToolbarExtra: le,
  headerExtra: je,
  renderExtra: ut,
  cardExtra: ht,
  renderCardExtra: bt,
  renderSearchExtra: lt,
  renderFormExtra: Tt,
  renderCustomForm: wt,
  onRefreshRef: or,
  onAddWithValuesRef: Dt,
  openEditRef: Kt,
  onAdd: Pr,
  onEdit: hr,
  onDelete: Tr,
  onBeforeAdd: Qr,
  onBeforeEdit: Er,
  onBeforeSubmit: ir,
  onBeforeDelete: Or,
  onBeforeBatchDelete: ea,
  onAfterSave: Ut,
  onAfterDelete: Nr,
  onAfterBatchDelete: $r,
  motion: wa,
  onSaveRecord: Fr,
  onDeleteRecords: Wt
}) {
  var ci;
  const z = t ?? a, { toast: J } = Mt(), be = Te(wa), { hasPermission: ue } = zo(), pe = de(
    (k) => k ? Xt ? Xt(k) : ue(k) : !0,
    [Xt, ue]
  ), ne = oe(() => {
    if (N)
      return typeof N == "function" ? fs(N) : N;
  }, [N]), te = ie(ne);
  te.current = ne;
  const ke = ie(S);
  ke.current = S;
  const Qe = oe(
    () => s.filter((k) => k.visible === !1).map((k) => k.key),
    [s]
  ), {
    settings: ze,
    toggleColumnVisible: Oe,
    setAllColumnsVisible: at,
    setColumnFixed: At,
    setColumnWidth: Ct,
    setColumnOrder: Ne,
    setSearchFieldVisible: mt,
    setDensity: tt,
    setFilterHighlightColor: Nt,
    resetSettings: vt
  } = nm(Je ? z : void 0, "default", Qe), Ke = !!(w || ne != null && ne.list), _t = oe(() => !De || typeof window > "u" ? {} : sb(window.location.search), [De]), [xt, Zt] = $(
    () => V ?? !Ke
  ), [Na, ka] = $(!1), Jt = P ?? Na, ps = (k) => {
    P === void 0 && ka(k), K == null || K(k);
  }, [Sa, Sn] = $(!0), [ta, U] = $(!0), [Se, Re] = $(ce), [Me, Ue] = $(() => {
    const { page: k, pageSize: T, ...W } = _t;
    return { ...v, ...W };
  }), nt = ie(Me);
  nt.current = Me;
  const [pt, kr] = $(() => {
    const { page: k, pageSize: T, ...W } = _t;
    return { ...v, ...W };
  }), [Wr, Ca] = $(""), [Qt, Ga] = $(() => ({
    key: String((v == null ? void 0 : v.orderBy) ?? ""),
    direction: (v == null ? void 0 : v.orderType) ?? null
  })), [Rt, cr] = $(() => Number(_t.page) || 1), [Vt, zt] = $(
    () => Number(_t.pageSize) || L
  ), [al, Po] = $(!1), [nl, Oo] = $(!1), $o = x !== void 0 ? x : al, [ra, Ya] = $([]), [sl, hs] = $(0), Cn = ie(null), gs = ie(null), Fo = ie(null), Wo = ie(null), [ol, Ho] = $(void 0), [il, cl] = $([]), ar = ot ?? il, [_n, ll] = $([]), [gr, In] = $(!1), [dl, Ko] = $(!1), [Tn, ul] = $({}), [Uo, Vo] = $({}), [vs, xs] = $({}), bl = G ?? (re ? re.show !== !1 : Ke), [la, ys] = $(
    (re == null ? void 0 : re.defaultEnabled) ?? !1
  ), [_a, ml] = $(
    ee ?? (re == null ? void 0 : re.defaultInterval) ?? (N ? 5e3 : 1e4)
  ), qa = ie(0), [En, ws] = $(null), [fl, Go] = $(!1), Mn = oe(() => {
    const k = /* @__PURE__ */ new Map();
    return o.filter((T) => !T.hideInSearch).forEach((T) => {
      k.set(T.name, {
        key: T.name,
        columnKey: T.name,
        label: T.label,
        type: T.type ?? "text",
        placeholder: T.placeholder,
        options: T.options,
        treeData: T.treeData,
        treeCheckable: T.treeCheckable,
        treeCheckStrictly: T.treeCheckStrictly,
        showCheckedStrategy: T.showCheckedStrategy,
        selectableLeafOnly: T.selectableLeafOnly,
        fieldNames: T.fieldNames,
        treeDataSimpleMode: T.treeDataSimpleMode,
        maxTagCount: T.maxTagCount,
        treeDefaultExpandAll: T.treeDefaultExpandAll,
        multiple: T.multiple,
        span: T.span,
        __fromFieldSchema: !0
      });
    }), s.forEach((T) => {
      if (!(T.search === !0 || typeof T.search == "object" && T.search !== null || T.searchable === !0)) return;
      const X = typeof T.search == "object" && T.search !== null ? T.search : {};
      if (X.custom) return;
      const Q = typeof T.type == "object" ? T.type : void 0, Ie = X.options ?? (Q == null ? void 0 : Q.options) ?? T.options, xe = X.type ?? (Ie ? "select" : "input"), it = String(
        X.key ?? (Array.isArray(T.dataIndex) ? T.dataIndex.join(".") : T.dataIndex) ?? T.key
      );
      k.set(it, {
        key: it,
        columnKey: T.key,
        label: T.title,
        type: xe,
        placeholder: X.placeholder,
        options: Ie,
        treeData: X.treeData,
        treeCheckable: X.treeCheckable,
        treeCheckStrictly: X.treeCheckStrictly,
        showCheckedStrategy: X.showCheckedStrategy,
        selectableLeafOnly: X.selectableLeafOnly,
        fieldNames: X.fieldNames,
        treeDataSimpleMode: X.treeDataSimpleMode,
        maxTagCount: X.maxTagCount,
        treeDefaultExpandAll: X.treeDefaultExpandAll,
        searchable: X.searchable,
        multiple: X.multiple,
        span: X.span,
        order: X.order,
        format: X.format,
        clearable: X.clearable,
        __fromFieldSchema: !1
      });
    }), (d ?? []).forEach((T) => {
      const W = k.get(T.key);
      k.set(T.key, {
        ...W,
        ...T,
        __fromFieldSchema: !1
      });
    }), Array.from(k.values()).sort((T, W) => (T.order ?? 999) - (W.order ?? 999));
  }, [o, s, d]), pl = oe(
    () => new Set(Mn.map((k) => k.key)),
    [Mn]
  ), Mr = oe(() => {
    const k = /* @__PURE__ */ new Map();
    return Mn.forEach((T) => k.set(T.key, T)), s.forEach((T) => {
      if (T.hideInTable || T.key === "__abc_actions__" || T.key === "__actions__" || T.key === "__drag_handle__")
        return;
      const W = Array.isArray(T.dataIndex) ? T.dataIndex.join(".") : String(T.dataIndex ?? T.key);
      if (!k.has(W) && (ze.searchVisible[W] === !0 || ze.searchVisible[T.key] === !0)) {
        const X = typeof T.type == "object" ? T.type : void 0, Q = (X == null ? void 0 : X.options) ?? T.options, Ie = Q == null ? void 0 : Q.map((xe) => ({
          label: xe.label,
          value: typeof xe.value == "boolean" ? String(xe.value) : xe.value
        }));
        k.set(W, {
          key: W,
          columnKey: T.key,
          label: T.title,
          type: Ie && Ie.length > 0 ? "select" : "input",
          options: Ie,
          order: T.order,
          __fromFieldSchema: !1
        });
      }
    }), Array.from(k.values()).sort((T, W) => (T.order ?? 999) - (W.order ?? 999));
  }, [Mn, s, ze.searchVisible]), Sr = oe(
    () => Mr.filter((k) => !(ze.searchVisible[k.key] === !1 || k.columnKey && ze.searchVisible[k.columnKey] === !1)),
    [Mr, ze.searchVisible]
  ), Ns = oe(
    () => Sr.filter(
      (k) => !s.some((T) => T.key === (k.columnKey || k.key))
    ),
    [Sr, s]
  ), da = oe(() => {
    let k = 0;
    const T = [];
    for (const Ie of Sr) {
      const xe = Ie.span === 2 || Ie.type === "dateRange" ? 2 : 1;
      if (k + xe <= 3)
        k += xe, T.push(Ie);
      else
        break;
    }
    const W = !!lt, X = W && k < 3, Q = Sr.length - T.length + (W && !X ? 1 : 0);
    return {
      firstRow: T,
      extraFitsFirstRow: X,
      canCollapse: Q > 0,
      hiddenCount: Q
    };
  }, [Sr, lt]), Yo = oe(() => !Se || !da.canCollapse ? Sr : da.firstRow, [Sr, Se, da]), aa = oe(() => {
    const k = /* @__PURE__ */ new Map();
    return o.filter((T) => !T.hideInForm).forEach((T) => {
      k.set(T.name, {
        key: T.name,
        name: T.name,
        label: T.label,
        type: T.type ?? "text",
        options: T.options,
        treeData: T.treeData,
        treeCheckable: T.treeCheckable,
        treeCheckStrictly: T.treeCheckStrictly,
        showCheckedStrategy: T.showCheckedStrategy,
        selectableLeafOnly: T.selectableLeafOnly,
        fieldNames: T.fieldNames,
        treeDataSimpleMode: T.treeDataSimpleMode,
        maxTagCount: T.maxTagCount,
        treeDefaultExpandAll: T.treeDefaultExpandAll,
        multiple: T.multiple,
        placeholder: T.placeholder,
        helperText: T.helperText,
        defaultValue: T.defaultValue,
        span: T.span,
        required: T.required,
        disabled: T.disabled,
        validator: T.validator,
        __fromFieldSchema: !0
      });
    }), s.filter((T) => T.form === !0 || typeof T.form == "object" && T.form !== null).forEach((T) => {
      const W = typeof T.form == "object" && T.form !== null ? T.form : {}, X = String(
        W.key ?? W.name ?? (Array.isArray(T.dataIndex) ? T.dataIndex[0] : T.dataIndex) ?? T.key
      );
      k.set(X, {
        ...W,
        key: X,
        label: W.label ?? T.title,
        tooltip: W.tooltip ?? T.tooltip,
        type: W.type ?? "input"
      });
    }), (c ?? []).forEach((T) => {
      const W = Fa(T);
      if (!W) return;
      const X = k.get(W);
      k.set(W, {
        ...X,
        ...T,
        key: W
      });
    }), Array.from(k.values()).sort((T, W) => (T.order ?? 999) - (W.order ?? 999));
  }, [o, s, c]), Hr = de(() => {
    const k = { ...l };
    for (const T of aa) {
      const W = Fa(T);
      W && T.defaultValue !== void 0 && k[W] === void 0 && (k[W] = T.defaultValue);
    }
    return k;
  }, [l, aa]), Lt = Hp({
    defaultValues: Hr(),
    schema: b,
    fields: aa
  }), Ar = f ? !!f.enabled : !!(z && !N), Ia = !f && !!(z && !N), Kr = am(
    Ar && z ? `${z}_form` : void 0
  ), [ua, An] = $(!1), [Lr, qo] = $(!1), [Ta, Xo] = $(null), [hl, ks] = $(!1), [gl, Zo] = $(!1), [vl, Xa] = $(null), [xl, ba] = $(!1), yl = (Ye == null ? void 0 : Ye.add) ?? (et == null ? void 0 : et.create), wl = (Ye == null ? void 0 : Ye.edit) ?? (et == null ? void 0 : et.update), Jo = (Ye == null ? void 0 : Ye.delete) ?? (et == null ? void 0 : et.delete), Nl = (Ye == null ? void 0 : Ye.batchDelete) ?? Jo, kl = Ye == null ? void 0 : Ye.export, Sl = Ye == null ? void 0 : Ye.view, Cl = (ae ?? !0) && pe(yl), _l = (Ge ?? !0) && pe(wl), Il = (He ?? !0) && pe(Jo), Ss = (ft ?? !!Wt) && pe(Nl), Qo = (se ?? me ?? !N) && pe(kl), Ln = (he ?? Xe ?? !1) && pe(Sl), Tl = Cl && !!(Pr || wt || Fr && aa.length > 0 || ne != null && ne.add || ne != null && ne.create), Ea = _l && !!(hr || wt || Fr || ne != null && ne.update || ne != null && ne.edit), Dn = Il && !!(Tr || Wt || ne != null && ne.delete);
  fe(() => {
    if (!De || typeof window > "u") return;
    const k = [
      ...Mr.map((X) => X.key),
      ...s.map(
        (X) => Array.isArray(X.dataIndex) ? X.dataIndex.join(".") : String(X.dataIndex ?? X.key)
      ),
      "page",
      "pageSize"
    ], T = ob(window.location.search, k, {
      ...pt,
      page: Rt > 1 ? Rt : void 0,
      pageSize: Vt !== L ? Vt : void 0
    }), W = `${window.location.pathname}${T}${window.location.hash}`;
    window.history.replaceState(null, "", W);
  }, [De, Mr, s, pt, Rt, Vt, L]);
  const El = de(() => {
    if (typeof document > "u") {
      In((T) => !T);
      return;
    }
    const k = !gr;
    k && Cn.current && typeof Cn.current.requestFullscreen == "function" ? Cn.current.requestFullscreen().catch(() => {
    }) : !k && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
    }), In(k);
  }, [gr]);
  fe(() => {
    if (typeof document > "u") return;
    const k = () => {
      !document.fullscreenElement && gr && In(!1);
    };
    return document.addEventListener("fullscreenchange", k), () => document.removeEventListener("fullscreenchange", k);
  }, [gr]), fe(() => {
    if (!gr) return;
    const k = (T) => {
      T.key === "Escape" && !ua && !En && (typeof document < "u" && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
      }), In(!1));
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [gr, ua, En]), fe(() => {
    if (!Bt || jt !== void 0 || typeof window > "u") {
      Ho(void 0);
      return;
    }
    let k = 0;
    const T = () => {
      var Ee;
      const Q = Fo.current;
      if (!Q) return;
      const Ie = Q.getBoundingClientRect();
      if (Ie.top === 0 && Ie.height === 0 && Q.clientWidth === 0) return;
      const xe = !C && y !== !1 ? ((Ee = Wo.current) == null ? void 0 : Ee.offsetHeight) ?? 52 : 0, it = window.innerHeight - Ie.top - xe - 16;
      Ho(Math.max(Math.floor(it), 240));
    }, W = () => {
      window.cancelAnimationFrame(k), k = window.requestAnimationFrame(T);
    };
    W(), window.addEventListener("resize", W);
    let X;
    return typeof ResizeObserver < "u" && gs.current && (X = new ResizeObserver(W), X.observe(gs.current)), () => {
      window.cancelAnimationFrame(k), window.removeEventListener("resize", W), X == null || X.disconnect();
    };
  }, [
    Bt,
    jt,
    gr,
    Jt,
    ta,
    Se,
    Sa,
    C,
    y
  ]);
  const Pt = de(
    (k, T = 0) => typeof M == "function" ? M(k) : (k == null ? void 0 : k[M]) ?? T,
    [M]
  ), Cs = oe(
    () => xt ? nh : pt,
    [xt, pt]
  ), Gt = de(async () => {
    var T, W, X;
    if (!w && !((T = te.current) != null && T.list)) return;
    const k = ++qa.current;
    Po(!0);
    try {
      if (w) {
        const Cr = await w({
          current: Rt,
          pageSize: Vt,
          filters: Bn(Cs),
          sortField: Qt.direction ? Qt.key : void 0,
          sortOrder: Qt.direction
        });
        if (k !== qa.current) return;
        Ya(Cr.data), hs(Cr.total), (W = ke.current) == null || W.call(ke, Cr.data);
        return;
      }
      const Q = te.current;
      if (!(Q != null && Q.list)) return;
      const Ie = Bn({
        ...v,
        ...Cs,
        pageNum: Rt,
        pageSize: Vt,
        ...Qt.direction ? {
          orderBy: Qt.key,
          orderType: Qt.direction,
          sortField: Qt.key,
          sortOrder: Qt.direction
        } : {}
      }), xe = await Q.list(Ie);
      if (k !== qa.current) return;
      if (Rr(xe) && !(xe != null && xe.data) && !(xe != null && xe.list)) {
        J.error((xe == null ? void 0 : xe.msg) || "获取表格数据失败"), Ya([]), hs(0);
        return;
      }
      const { list: it, total: Ee } = io(xe);
      Ya(it), hs(Ee), (X = ke.current) == null || X.call(ke, it);
    } catch (Q) {
      k === qa.current && J.error((Q == null ? void 0 : Q.message) || "加载表格数据失败");
    } finally {
      k === qa.current && Po(!1);
    }
  }, [
    w,
    v,
    Rt,
    Vt,
    Cs,
    Qt,
    J
  ]);
  fe(() => {
    Ke && Gt();
  }, [Ke, Gt]), fe(() => {
    if (or)
      return or.current = (k = !1) => {
        k && Rt !== 1 ? cr(1) : Gt();
      }, () => {
        or.current = null;
      };
  }, [or, Rt, Gt]), fe(() => {
    if (!la || !Ke || _a <= 0 || typeof window > "u")
      return;
    const k = window.setInterval(() => {
      Gt();
    }, _a);
    return () => window.clearInterval(k);
  }, [la, _a, Ke, Gt]), fe(() => {
    ua && aa.forEach((k) => {
      var T;
      return (T = k.onFormReady) == null ? void 0 : T.call(k, Lt, Lr);
    });
  }, [ua, Lr, aa, Lt]), fe(() => {
    if (!(!ua || !Ar)) {
      if (Ia && !Lr) {
        const k = Lt.watch((T) => {
          Kr.saveDraft(T);
        });
        return () => k.unsubscribe();
      }
      if (f != null && f.autoSave) {
        let k;
        const T = () => {
          k !== void 0 && window.clearTimeout(k), k = window.setTimeout(() => {
            Kr.saveDraft(Lt.getValues()), ba(!1);
          }, f.autoSaveInterval || 3e4);
        };
        T();
        const W = Lt.watch(() => {
          T();
        });
        return () => {
          k !== void 0 && window.clearTimeout(k), W.unsubscribe();
        };
      }
    }
  }, [
    ua,
    Ar,
    Ia,
    Lr,
    f == null ? void 0 : f.autoSave,
    f == null ? void 0 : f.autoSaveInterval,
    Lt,
    Kr
  ]);
  const ma = de(
    (k, T) => {
      ot === void 0 && cl(k);
      const X = T ?? (g ?? ra).filter((Q, Ie) => k.includes(Pt(Q, Ie)));
      ll(X), Ft == null || Ft(k, X);
    },
    [ot, g, ra, Pt, Ft]
  ), ei = oe(() => _n.length > 0 && _n.length === ar.length ? _n : (g ?? ra).filter((T, W) => ar.includes(Pt(T, W))), [_n, ar, g, ra, Pt]), Ma = oe(() => {
    const k = s.filter((T) => !T.hideInTable && !ze.hiddenKeys.includes(T.key)).sort((T, W) => (T.order ?? 999) - (W.order ?? 999)).map((T) => {
      const W = typeof T.type == "object" && T.type !== null ? T.type : void 0, X = typeof T.search == "object" && T.search !== null && Array.isArray(T.search.options) ? T.search.options.filter((Ie) => Ie.value !== "") : void 0, Q = !!(!T.options && !(W != null && W.options) && X);
      return {
        ...T,
        options: T.options ?? X,
        ...Q ? { __autoOptionsFromSearch: !0 } : {},
        sorter: T.sorter !== void 0 ? T.sorter : N && T.sortable === void 0 ? !0 : T.sorter
      };
    });
    return ze.columnOrder.length === 0 ? k : [...k].sort((T, W) => {
      const X = ze.columnOrder.indexOf(T.key), Q = ze.columnOrder.indexOf(W.key);
      return X === -1 && Q === -1 ? 0 : X === -1 ? 1 : Q === -1 ? -1 : X - Q;
    });
  }, [s, ze.hiddenKeys, ze.columnOrder, N]), Za = g ?? ra, fa = oe(() => {
    if (!xt && Ke) return Za;
    const k = s.map(
      (T) => Array.isArray(T.dataIndex) ? T.dataIndex.join(".") : String(T.dataIndex ?? T.key)
    );
    return nb({
      rows: Za,
      quickKeyword: Wr,
      searchableKeys: k,
      fieldFilters: pt,
      sortField: Qt.key,
      sortOrder: Qt.direction
    });
  }, [xt, Ke, Za, Wr, pt, s, Qt]), Ml = oe(() => {
    if (!Ke || xt) {
      if (C || y === !1) return fa;
      if (fa.length > Vt || !Ke) {
        const k = (Rt - 1) * Vt;
        return fa.slice(k, k + Vt);
      }
      return fa;
    }
    return ra;
  }, [
    Ke,
    xt,
    C,
    y,
    fa,
    ra,
    Rt,
    Vt
  ]), _s = !Ke || xt ? fa.length : sl, Ja = oe(() => {
    const k = v ? new Set(Object.keys(v)) : null;
    return Object.entries(Bn(pt)).filter(([W, X]) => !(k && k.has(W) && v[W] === X)).length + (Wr.trim() ? 1 : 0);
  }, [pt, Wr, v]), Qa = de(() => {
    const k = { ...v };
    nt.current = k, Ue(k), kr(k), Ca(""), Ga({ key: "", direction: null }), cr(1), I == null || I(), H == null || H(k);
  }, [v, I, H]), Is = de(
    async (k) => {
      if (Pr && !k) {
        Pr();
        return;
      }
      let T = {
        ...Hr(),
        ...k
      };
      if (Qr) {
        const X = await Qr(T);
        if (X === !1) return;
        X && typeof X == "object" && (T = { ...T, ...X });
      }
      Xo(null), qo(!1), Xa(null), Lt.clearErrors();
      const W = Ar ? Kr.readDraft() : null;
      W && Ia && !k ? (Lt.reset({ ...T, ...W }), ba(!0)) : (Lt.reset(T), ba(!!(W && Ar && !k))), An(!0);
    },
    [
      Pr,
      Hr,
      Qr,
      Lt,
      Ar,
      Kr,
      Ia
    ]
  ), pa = de(
    async (k) => {
      var X;
      if (hr) {
        hr(k);
        return;
      }
      let T = { ...Hr(), ...k };
      if (Er) {
        const Q = await Er(k, k);
        if (Q === !1) return;
        Q && typeof Q == "object" && (T = { ...Hr(), ...Q });
      }
      const W = Pt(k);
      if (Xo(k), qo(!0), Xa(null), ba(!1), Lt.clearErrors(), Lt.reset(T), An(!0), (X = te.current) != null && X.get && W !== void 0 && W !== null) {
        Zo(!0);
        try {
          const Q = await te.current.get(W), Ie = Q != null && Q.data && !Array.isArray(Q.data) ? Q.data : Q;
          if (!Rr(Q) && Ie && typeof Ie == "object") {
            let xe = { ...T, ...Ie };
            if (Er) {
              const it = await Er(xe, k);
              it && typeof it == "object" && (xe = { ...Hr(), ...it });
            }
            Lt.reset(xe);
          }
        } catch {
        } finally {
          Zo(!1);
        }
      }
    },
    [hr, Hr, Er, Pt, Lt]
  );
  fe(() => {
    if (Dt)
      return Dt.current = (k) => {
        Is(k);
      }, () => {
        Dt.current = null;
      };
  }, [Dt, Is]), fe(() => {
    if (Kt)
      return Kt.current = (k) => {
        pa(k);
      }, () => {
        Kt.current = null;
      };
  }, [Kt, pa]);
  const Ts = de(
    async (k, T) => {
      var W, X;
      if (T) {
        if (T.startsWith("/") || T.startsWith("http")) {
          we == null || we(T, k);
          return;
        }
        const Q = (W = te.current) == null ? void 0 : W[T];
        if (typeof Q == "function") {
          await Q(k);
          return;
        }
      }
      if (ws(k), (X = te.current) != null && X.view) {
        Go(!0);
        try {
          const Q = await te.current.view(Pt(k)), Ie = Q != null && Q.data && !Array.isArray(Q.data) ? Q.data : Q;
          !Rr(Q) && Ie && typeof Ie == "object" && ws({ ...k, ...Ie });
        } catch {
        } finally {
          Go(!1);
        }
      }
    },
    [we, Pt]
  ), Al = async (k) => {
    var T, W;
    ks(!0), Xa(null);
    try {
      let X = k, Q = !1;
      if (ir) {
        const Ie = await ir(k, Lr, Ta);
        if (Ie === !1) {
          ks(!1);
          return;
        }
        Ie && typeof Ie == "object" && (X = Ie, Q = !0);
      }
      if (Fr)
        await Fr(X, Ta);
      else if (te.current) {
        const Ie = typeof M == "string" ? M : "id", xe = Ta ? Pt(Ta) : void 0, it = Q ? {
          ...X,
          ...Lr && xe != null ? { [Ie]: xe } : {}
        } : {
          ...Ta || {},
          ...X,
          ...Lr && xe != null ? { [Ie]: xe } : {}
        }, Ee = Lr ? await ((T = te.current.update || te.current.edit || te.current.add) == null ? void 0 : T(
          it
        )) : await ((W = te.current.add || te.current.create) == null ? void 0 : W(X));
        if (Rr(Ee)) {
          Xa((Ee == null ? void 0 : Ee.msg) || "保存失败");
          return;
        }
      }
      Ar && (Kr.clearDraft(), ba(!1)), An(!1), J.success(Lr ? "更新成功" : N ? "新增成功" : "创建成功"), Ut == null || Ut(X), Ke && Gt();
    } catch (X) {
      const Q = (X == null ? void 0 : X.message) || "提交失败";
      Xa(Q), N || J.error(Q);
    } finally {
      ks(!1);
    }
  }, Ll = async (k) => {
    var W;
    if (k == null || k.preventDefault(), !await Lt.trigger()) {
      const X = (W = Object.values(Lt.formState.errors).find((Q) => Q == null ? void 0 : Q.message)) == null ? void 0 : W.message;
      X && !N && J.warning(X);
      return;
    }
    await Al(Lt.getValues());
  }, Es = de(
    async (k, T = 0) => {
      var Q, Ie;
      if (Tr) {
        Tr(k);
        return;
      }
      if (Or && await Or(k) === !1)
        return;
      const W = Pt(k, T);
      if (!(!Wt && !((Q = te.current) != null && Q.delete) || !await qn({
        title: "确认删除",
        message: "确定要删除这条数据吗？此操作无法撤销。",
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (Wt)
            await Wt([W]);
          else if ((Ie = te.current) != null && Ie.delete) {
            const xe = await te.current.delete([W]);
            if (Rr(xe)) {
              J.error((xe == null ? void 0 : xe.msg) || "删除失败");
              return;
            }
          }
          ma(ar.filter((xe) => xe !== W)), J.success("删除成功"), Nr == null || Nr(), Ke && Gt();
        } catch (xe) {
          J.error((xe == null ? void 0 : xe.message) || "删除失败");
        }
    },
    [
      Tr,
      Or,
      Pt,
      Wt,
      ar,
      ma,
      J,
      Nr,
      Ke,
      Gt
    ]
  ), ti = de(
    async (k) => {
      var W, X;
      if (k.length === 0) {
        J.warning("请先选择要删除的数据行");
        return;
      }
      if (!(ea && await ea(k) === !1 || !Wt && !((W = te.current) != null && W.delete) || !await qn({
        title: "确认删除选中记录",
        message: `即将删除 ${k.length} 条数据，删除后不可恢复，是否继续？`,
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (Wt)
            await Wt(k);
          else if ((X = te.current) != null && X.delete) {
            const Q = await te.current.delete(k);
            if (Rr(Q)) {
              J.error((Q == null ? void 0 : Q.msg) || "批量删除失败");
              return;
            }
          }
          ma([], []), J.success(`已删除 ${k.length} 条记录`), $r == null || $r(), Ke && Gt();
        } catch (Q) {
          J.error((Q == null ? void 0 : Q.message) || "批量删除失败");
        }
    },
    [
      ea,
      Wt,
      ma,
      J,
      $r,
      Ke,
      Gt
    ]
  ), Ms = de(
    async (k, T) => {
      var X, Q;
      const W = Pt(T);
      if (k && ((X = te.current) != null && X.children)) {
        const Ie = Tn[W];
        if (!Ie || Ie.length === 0) {
          Vo((xe) => ({ ...xe, [W]: !0 })), xs((xe) => ({ ...xe, [W]: "" }));
          try {
            const xe = await te.current.children(T);
            if (Rr(xe))
              xs((it) => ({ ...it, [W]: (xe == null ? void 0 : xe.msg) || "加载失败" }));
            else {
              const { list: it } = io(xe);
              ul((Ee) => ({ ...Ee, [W]: it })), dt && Ya((Ee) => {
                const Cr = (jn) => jn.map((na) => Pt(na) === W ? { ...na, children: it } : Array.isArray(na.children) ? { ...na, children: Cr(na.children) } : na);
                return Cr(Ee);
              });
            }
          } catch {
            xs((xe) => ({ ...xe, [W]: "加载失败" }));
          } finally {
            Vo((xe) => ({ ...xe, [W]: !1 }));
          }
        }
      }
      (Q = rt == null ? void 0 : rt.onExpand) == null || Q.call(rt, k, T);
    },
    [Pt, Tn, dt, rt]
  ), Dl = de(
    (k, T) => {
      var xe;
      const W = [...Za], X = W.findIndex(
        (it, Ee) => String(Pt(it, Ee)) === String(k)
      ), Q = W.findIndex(
        (it, Ee) => String(Pt(it, Ee)) === String(T)
      );
      if (X < 0 || Q < 0 || X === Q) return;
      const [Ie] = W.splice(X, 1);
      W.splice(Q, 0, Ie), g || Ya(W), (xe = Ze == null ? void 0 : Ze.onSort) == null || xe.call(Ze, W);
    },
    [Za, Pt, g, Ze]
  ), ri = oe(
    () => pr.filter((k) => pe(k.permission)),
    [pr, pe]
  ), Rn = fr ?? _e ?? !!(Ss && (Wt || ne != null && ne.delete) || ri.length > 0 || qt), ai = wr ?? (It.length > 0 && Ht.length === 0 ? 6 : 3), As = Ln || Ea || Dn || Ht.length > 0 || It.length > 0, Ls = zr !== void 0 ? It.length > 0 ? Math.max(zr, 220) : zr : It.length > 0 || N ? 220 : Ln || Ht.length > 0 ? 184 : 136, Ds = It.length > 0 || N ? "left" : "right", Rl = oe(() => {
    const k = [...Ma];
    return Ze != null && Ze.enabled && k.unshift({
      key: "__drag_handle__",
      title: "排序",
      width: 68,
      align: "center",
      sortable: !1,
      sorter: !1,
      render: () => /* @__PURE__ */ e(cs, { className: "mx-auto h-4 w-4 cursor-grab text-[var(--abc-fg-placeholder)]" })
    }), As && k.push({
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: Ls,
      align: Ds,
      sortable: !1,
      sorter: !1,
      render: (T, W, X) => {
        var it;
        const Q = [];
        let Ie = !1, xe = !1;
        Ln && Q.push({
          key: "__view__",
          label: N ? "查看" : "详情",
          icon: /* @__PURE__ */ e(Ha, { className: "h-3 w-3" }),
          onClick: () => void Ts(W)
        });
        for (const Ee of It) {
          if (Ee.key === "edit" && !Ee.onClick) {
            Ie = !0, Ea && Q.push({
              key: "__edit__",
              label: Ee.label ?? "编辑",
              icon: /* @__PURE__ */ e(Fn, { className: "h-3 w-3" }),
              onClick: () => void pa(W)
            });
            continue;
          }
          if (Ee.key === "delete" && !Ee.onClick) {
            xe = !0, Dn && Q.push({
              key: "__delete__",
              label: Ee.label ?? "删除",
              icon: /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
              danger: !0,
              onClick: () => void Es(W, X)
            });
            continue;
          }
          if (Ee.key === "edit" && (Ie = !0), Ee.key === "delete" && (xe = !0), !(typeof Ee.show == "function" ? Ee.show(W) : Ee.show !== !1) || !pe(Ee.permission)) continue;
          const jn = typeof Ee.disabled == "function" ? Ee.disabled(W) : !!Ee.disabled, na = typeof Ee.title == "function" ? Ee.title(W) : Ee.title, Hl = typeof Ee.icon == "string" ? /* @__PURE__ */ e(jr, { name: Ee.icon, size: 13 }) : Ee.icon;
          Q.push({
            key: Ee.key,
            label: Ee.label,
            icon: Hl,
            variant: Ee.variant ?? Ee.type ?? "text",
            danger: (Ee.variant ?? Ee.type) === "danger",
            disabled: jn,
            title: na,
            className: Ee.className,
            onClick: async () => {
              var li;
              if (jn) return;
              const zs = (li = Ee.onClick) == null ? void 0 : li.call(Ee, W);
              zs && typeof zs.then == "function" && (await zs, Ke && Gt());
            }
          });
        }
        !Ie && Ea && It.length === 0 && Q.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Fn, { className: "h-3 w-3" }),
          onClick: () => void pa(W)
        });
        for (const Ee of Ht)
          pe(Ee.permission) && ((it = Ee.hidden) != null && it.call(Ee, W) || Q.push({
            key: Ee.key,
            label: Ee.label,
            icon: Ee.icon,
            danger: Ee.danger,
            onClick: async () => {
              const Cr = Ee.onClick(W);
              Cr && typeof Cr.then == "function" && (await Cr, Ke && Gt());
            }
          }));
        return !Ie && Ea && It.length > 0 && Q.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Fn, { className: "h-3 w-3" }),
          onClick: () => void pa(W)
        }), !xe && Dn && Q.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => void Es(W, X)
        }), /* @__PURE__ */ e(
          th,
          {
            actions: Q,
            maxInline: ai,
            autoFit: wr === void 0,
            align: Ds
          }
        );
      }
    }), k;
  }, [
    Ma,
    Ze == null ? void 0 : Ze.enabled,
    As,
    Ls,
    Ds,
    Ln,
    N,
    It,
    Ea,
    Dn,
    Ht,
    ai,
    wr,
    pe,
    Ts,
    pa,
    Es,
    Ke,
    Gt
  ]), jl = oe(() => {
    if (!rt && !(ne != null && ne.children)) return;
    const k = (T, W, X = 0, Q = !0) => {
      if (rt != null && rt.expandedRowRender)
        return rt.expandedRowRender(T, W, X, Q);
      const Ie = Pt(T, W);
      if (Uo[Ie])
        return /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "加载中..." });
      if (vs[Ie])
        return /* @__PURE__ */ i("div", { className: "py-5 text-center text-xs text-[var(--abc-danger)]", children: [
          /* @__PURE__ */ e("span", { children: vs[Ie] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => void Ms(!0, T),
              className: "ml-2 text-[var(--abc-primary)] hover:underline cursor-pointer",
              children: "重试"
            }
          )
        ] });
      const xe = Tn[Ie] || [];
      return xe.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无子项数据" }) : /* @__PURE__ */ e(
        Pi,
        {
          columns: Ma,
          data: xe,
          rowKey: M,
          density: ze.density
        }
      );
    };
    return {
      ...rt,
      rowExpandable: (rt == null ? void 0 : rt.rowExpandable) ?? (ne != null && ne.children ? () => !0 : void 0),
      expandedRowRender: dt ? void 0 : ne != null && ne.children || rt != null && rt.expandedRowRender ? k : void 0,
      onExpand: Ms
    };
  }, [
    rt,
    ne == null ? void 0 : ne.children,
    dt,
    Pt,
    Uo,
    vs,
    Tn,
    Ms,
    Ma,
    M,
    ze.density
  ]), ni = async () => {
    var W;
    const k = xt || !Ke ? fa : ra;
    if (N) {
      Oo(!0);
      try {
        const X = Bn({
          ...v,
          ...pt,
          pageNum: Rt,
          pageSize: Vt
        });
        if (ye)
          await ye(X);
        else if ((W = te.current) != null && W.export)
          await te.current.export(X);
        else {
          const Q = typeof r == "string" && r.trim() ? r.trim() : z || "table-export";
          Vi(Q, Ma, k);
        }
        J.success("导出成功");
      } catch (X) {
        J.error((X == null ? void 0 : X.message) || "导出失败");
      } finally {
        Oo(!1);
      }
      return;
    }
    if (ye) {
      await ye(k);
      return;
    }
    const T = typeof r == "string" && r.trim() ? r.trim() : z || "table-export";
    Vi(T, Ma, k), J.success(`已导出 ${k.length} 条记录`);
  }, en = de(
    (k, T) => {
      Ue((W) => {
        const X = { ...W, [k]: T };
        return nt.current = X, H == null || H(X), X;
      });
    },
    [H]
  ), Rs = de(
    (k) => {
      const T = { ...nt.current, ...k || {} };
      nt.current = T, Ue(T), kr(T), cr(1), A == null || A(T);
    },
    [A]
  ), js = (k, T) => {
    const W = Me[k.key], X = (Q) => en(k.key, Q);
    if (k.type === "select")
      return /* @__PURE__ */ e(
        br,
        {
          allowClear: k.clearable !== !1,
          searchable: k.searchable ?? !0,
          multiple: k.multiple,
          options: k.options ?? [],
          placeholder: k.placeholder ?? (k.__fromFieldSchema ? `全部${k.label}` : `请选择${k.label}`),
          value: W ?? (k.multiple ? [] : ""),
          onChange: (Q) => {
            const Ie = Q && typeof Q == "object" && "target" in Q ? Q.target.value : Q;
            X(Ie);
          },
          className: T == null ? void 0 : T.select
        }
      );
    if (k.type === "treeSelect") {
      const Q = !!(k.multiple || k.treeCheckable);
      return /* @__PURE__ */ e(
        xn,
        {
          "aria-label": k.label,
          allowClear: k.clearable !== !1,
          searchable: k.searchable ?? !0,
          multiple: k.multiple,
          treeCheckable: k.treeCheckable,
          treeCheckStrictly: k.treeCheckStrictly,
          showCheckedStrategy: k.showCheckedStrategy,
          selectableLeafOnly: k.selectableLeafOnly,
          fieldNames: k.fieldNames,
          treeDataSimpleMode: k.treeDataSimpleMode,
          maxTagCount: k.maxTagCount,
          treeDefaultExpandAll: k.treeDefaultExpandAll,
          treeData: k.treeData ?? [],
          placeholder: k.placeholder ?? (k.__fromFieldSchema ? `全部${k.label}` : `请选择${k.label}`),
          value: W ?? (Q ? [] : ""),
          onChange: (Ie) => X(Ie),
          className: T == null ? void 0 : T.select
        }
      );
    }
    return k.type === "date" || k.type === "datetimePicker" ? /* @__PURE__ */ e(
      yn,
      {
        value: W ?? "",
        placeholder: k.placeholder ?? (k.__fromFieldSchema ? `选择${k.label}` : `请选择${k.label}`),
        onChange: X
      }
    ) : k.type === "dateRange" ? /* @__PURE__ */ e(wn, { value: W ?? null, onChange: X }) : k.type === "number" ? /* @__PURE__ */ e(
      ds,
      {
        value: W ?? null,
        placeholder: k.placeholder ?? `输入${k.label}`,
        onChange: X,
        className: T == null ? void 0 : T.input
      }
    ) : /* @__PURE__ */ e(
      gt,
      {
        allowClear: k.clearable !== !1,
        placeholder: k.placeholder ?? (k.__fromFieldSchema ? `搜索${k.label}` : `请输入${k.label}`),
        value: W ?? "",
        onChange: (Q) => X(Q.target.value),
        wrapperClassName: T == null ? void 0 : T.input
      }
    );
  }, Bl = Ve ?? (N || aa.length >= 6 ? 2 : 1), zl = Y ?? !!(N && Mr.length > 0), si = ((ci = Yi.find((k) => k.key === _a)) == null ? void 0 : ci.label) ?? "5秒", Pl = O ?? P === void 0, oi = !!(n || je || ut || N && r), Bs = je ?? (ut == null ? void 0 : ut()), Ol = ht ?? (bt == null ? void 0 : bt()), $l = q ?? (le == null ? void 0 : le()), Fl = ve ?? (N ? "新增" : "新建记录"), ii = oe(
    () => Mr.filter((k) => qi(pt[k.key])).map((k) => k.columnKey || k.key),
    [Mr, pt]
  ), Wl = oe(
    () => Object.fromEntries(
      Mr.filter((k) => qi(pt[k.key])).map((k) => [k.columnKey || k.key, sh(k, pt[k.key])])
    ),
    [Mr, pt]
  );
  return /* @__PURE__ */ i(
    "div",
    {
      ref: Cn,
      "data-motion": be,
      className: h(
        "relative space-y-3",
        gr && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        oi && (r || n || Bs) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ i("div", { children: [
            r && /* @__PURE__ */ e("h2", { className: "text-lg font-bold tracking-tight text-[var(--abc-fg)]", children: r }),
            n && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: n })
          ] }),
          Bs && /* @__PURE__ */ e("div", { children: Bs })
        ] }),
        Ol,
        B === "toolbar" && (Sr.length > 0 || !!lt) && !Jt && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ i(
          "form",
          {
            onSubmit: (k) => {
              k.preventDefault(), Rs();
            },
            className: "flex flex-wrap items-center gap-2.5",
            children: [
              Yo.map((k) => /* @__PURE__ */ e("div", { className: "flex items-center", children: js(k, {
                input: k.span === 2 ? "w-80 sm:w-96" : "w-72 sm:w-80",
                select: "w-40"
              }) }, k.key)),
              lt == null ? void 0 : lt({
                query: Me,
                onQueryChange: en,
                isSearchVisible: (k) => ze.searchVisible[k] !== !1
              }),
              /* @__PURE__ */ e(
                Le,
                {
                  size: "sm",
                  type: "submit",
                  variant: "primary",
                  icon: /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }),
                  children: "搜索"
                }
              ),
              /* @__PURE__ */ e(
                Le,
                {
                  size: "sm",
                  type: "button",
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
                  onClick: Qa,
                  children: "重置"
                }
              ),
              Ja > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Ja,
                " 项"
              ] })
            ]
          }
        ) }),
        B === "card" && (Sr.length > 0 || !!lt) && !Jt && /* @__PURE__ */ e("div", { ref: gs, children: /* @__PURE__ */ i(Jn, { padding: "none", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(Wn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选条件" }),
              Ja > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Ja,
                " 项",
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": "一键清空已生效筛选",
                    onClick: Qa,
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
                "aria-expanded": ta,
                onClick: () => U((k) => !k),
                className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer select-none",
                children: [
                  /* @__PURE__ */ e("span", { children: ta ? "收起" : "展开" }),
                  ta ? /* @__PURE__ */ e(Un, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(sr, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": ta, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ i(
            "form",
            {
              onSubmit: (k) => {
                k.preventDefault(), Rs();
              },
              className: "grid grid-cols-1 items-end gap-3.5 p-4 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                Yo.map((k) => /* @__PURE__ */ e(
                  Ro,
                  {
                    label: k.label,
                    className: k.span === 2 || k.type === "dateRange" ? "sm:col-span-2" : void 0,
                    children: js(k)
                  },
                  k.key
                )),
                (!Se || !da.canCollapse || da.extraFitsFirstRow) && (lt == null ? void 0 : lt({
                  query: Me,
                  onQueryChange: en,
                  isSearchVisible: (k) => ze.searchVisible[k] !== !1
                })),
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2 lg:col-start-4 lg:justify-end", children: [
                  /* @__PURE__ */ e(
                    Le,
                    {
                      size: "sm",
                      type: "submit",
                      variant: "primary",
                      icon: /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }),
                      children: "搜索"
                    }
                  ),
                  /* @__PURE__ */ e(
                    Le,
                    {
                      size: "sm",
                      type: "button",
                      variant: "secondary",
                      icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
                      onClick: Qa,
                      children: "重置"
                    }
                  ),
                  da.canCollapse && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => Re((k) => !k),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:underline cursor-pointer select-none",
                      children: [
                        /* @__PURE__ */ e("span", { children: Se ? `展开 (${da.hiddenCount})` : "收起" }),
                        Se ? /* @__PURE__ */ e(sr, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Un, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] }) }),
        /* @__PURE__ */ i(Jn, { padding: "none", children: [
          Jt && Sa && Ns.length > 0 && /* @__PURE__ */ e("div", { className: "border-b border-[var(--abc-border)] px-4 py-2.5", children: /* @__PURE__ */ i("div", { className: "flex flex-wrap items-end gap-3", children: [
            Ns.map((k) => /* @__PURE__ */ i("div", { className: "w-48", children: [
              /* @__PURE__ */ e("div", { className: "mb-1 text-[11px] text-[var(--abc-fg-muted)]", children: k.label }),
              js(k)
            ] }, k.key)),
            /* @__PURE__ */ e(
              Le,
              {
                variant: "primary",
                size: "sm",
                onClick: () => Rs(),
                icon: /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5" }),
                children: "查询"
              }
            )
          ] }) }),
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
              !oi && r && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: r }),
              Tl && /* @__PURE__ */ e(
                Le,
                {
                  variant: "primary",
                  size: "sm",
                  icon: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5" }),
                  onClick: () => void Is(),
                  children: Fl
                }
              ),
              ft && Ss && (Wt || (ne == null ? void 0 : ne.delete)) && /* @__PURE__ */ e(
                Le,
                {
                  variant: "danger",
                  size: "sm",
                  disabled: ar.length === 0,
                  icon: /* @__PURE__ */ e(Vr, { className: "h-3.5 w-3.5" }),
                  onClick: () => void ti(ar),
                  children: "批量删除"
                }
              ),
              se && Qo && /* @__PURE__ */ e(
                Le,
                {
                  variant: "secondary",
                  size: "sm",
                  loading: nl,
                  icon: /* @__PURE__ */ e(qs, { className: "h-3.5 w-3.5" }),
                  onClick: () => void ni(),
                  children: "导出"
                }
              ),
              F && /* @__PURE__ */ e(
                Le,
                {
                  variant: "secondary",
                  size: "sm",
                  icon: /* @__PURE__ */ e(as, { className: "h-3.5 w-3.5" }),
                  onClick: () => void (Z == null ? void 0 : Z()),
                  children: "导入"
                }
              ),
              Ir.filter((k) => pe(k.permission)).map((k) => /* @__PURE__ */ e(
                Le,
                {
                  variant: k.variant ?? k.type ?? "secondary",
                  size: "sm",
                  icon: k.icon,
                  onClick: k.onClick,
                  children: k.label
                },
                k.key
              )),
              $l,
              Jt && Ns.length > 0 && /* @__PURE__ */ e(
                Le,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => Sn((k) => !k),
                  children: Sa ? "收起筛选" : "展开筛选"
                }
              ),
              Jt && Sr.length > 0 && /* @__PURE__ */ e(
                Le,
                {
                  variant: "secondary",
                  size: "sm",
                  icon: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" }),
                  onClick: Qa,
                  children: "重置"
                }
              ),
              Rn && ar.length > 0 && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-2 rounded-full bg-[var(--abc-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--abc-primary)]", children: [
                /* @__PURE__ */ i("span", { children: [
                  "已选择 ",
                  ar.length,
                  " 项"
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => ma([], []),
                    className: "hover:underline cursor-pointer",
                    children: "取消"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              xt && Mr.length === 0 && /* @__PURE__ */ e(
                gt,
                {
                  size: "xs",
                  allowClear: !0,
                  prefix: /* @__PURE__ */ e(Wn, { className: "h-3 w-3" }),
                  placeholder: "当前数据即时检索（支持拼音）...",
                  value: Wr,
                  onChange: (k) => {
                    Ca(k.target.value), cr(1);
                  },
                  wrapperClassName: "w-52"
                }
              ),
              bl && Ke && /* @__PURE__ */ i("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
                /* @__PURE__ */ e(
                  tr,
                  {
                    content: la ? `自动刷新运行中：每 ${si} 轮询（点击暂停）` : "点击开启自动刷新",
                    children: /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        "aria-label": "切换定时自动刷新",
                        onClick: () => ys((k) => !k),
                        className: h(
                          "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                          la ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                        ),
                        children: [
                          /* @__PURE__ */ e(
                            Hn,
                            {
                              className: h("h-3.5 w-3.5", la && "animate-pulse")
                            }
                          ),
                          la && /* @__PURE__ */ e("span", { children: si })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(
                  Do,
                  {
                    open: dl,
                    onOpenChange: Ko,
                    placement: "bottomRight",
                    panelClassName: "w-44 p-2.5",
                    content: /* @__PURE__ */ i("div", { className: "space-y-2 text-xs text-[var(--abc-fg)]", children: [
                      /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] pb-2", children: [
                        /* @__PURE__ */ e("span", { className: "font-semibold", children: "自动刷新" }),
                        /* @__PURE__ */ e(
                          lr,
                          {
                            size: "xs",
                            checked: la,
                            onChange: (k) => ys(k)
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i("div", { className: "space-y-0.5", children: [
                        /* @__PURE__ */ e("div", { className: "px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "刷新间隔" }),
                        Yi.map((k) => /* @__PURE__ */ i(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              ml(k.key), ys(!0), Ko(!1);
                            },
                            className: h(
                              "flex w-full items-center justify-between rounded-[var(--abc-radius-xs)] px-2 py-1 text-left text-xs transition-colors cursor-pointer",
                              _a === k.key ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                            ),
                            children: [
                              /* @__PURE__ */ e("span", { children: k.label }),
                              _a === k.key && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                            ]
                          },
                          k.key
                        ))
                      ] })
                    ] }),
                    children: /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "选择轮询频率",
                        className: "inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(sr, { className: "h-3 w-3" })
                      }
                    )
                  }
                )
              ] }),
              zl && /* @__PURE__ */ e(
                tr,
                {
                  content: xt ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      "aria-pressed": xt,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const k = !xt;
                        Zt(k), cr(1), J.info(
                          k ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式"
                        );
                      },
                      className: h(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        xt ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(Wn, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: xt ? "前端筛选" : "接口筛选" })
                      ]
                    }
                  )
                }
              ),
              Pl && /* @__PURE__ */ e(tr, { content: Jt ? "关闭表头内联筛选" : "开启表头内联筛选", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => ps(!Jt),
                  className: h(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    Jt ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(Vu, { className: "h-3.5 w-3.5" })
                }
              ) }),
              Qo && !se && /* @__PURE__ */ e(tr, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "导出数据",
                  onClick: () => void ni(),
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(qs, { className: "h-3.5 w-3.5" })
                }
              ) }),
              Ke && /* @__PURE__ */ e(tr, { content: "刷新表格数据", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "刷新数据",
                  onClick: () => void Gt(),
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(ga, { className: h("h-3.5 w-3.5", $o && "animate-spin") })
                }
              ) }),
              /* @__PURE__ */ e(
                vn,
                {
                  placement: "bottomRight",
                  items: [
                    {
                      key: "comfortable",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "宽松" }),
                        ze.density === "comfortable" && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => tt("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "默认" }),
                        ze.density === "default" && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => tt("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑" }),
                        ze.density === "compact" && /* @__PURE__ */ e(kt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => tt("compact")
                    }
                  ],
                  children: /* @__PURE__ */ e(tr, { content: "表格行密度", children: /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "表格行密度",
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Gu, { className: "h-3.5 w-3.5" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ e(tr, { content: gr ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": gr ? "退出全屏" : "全屏展示",
                  onClick: El,
                  className: h(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    gr ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: gr ? /* @__PURE__ */ e(lo, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(uo, { className: "h-3.5 w-3.5" })
                }
              ) }),
              Je && /* @__PURE__ */ e(
                eh,
                {
                  columns: s,
                  searchableFieldNames: pl,
                  settings: ze,
                  hasActionColumn: As,
                  defaultActionWidth: Ls,
                  motion: be,
                  onToggleVisible: Oe,
                  onSetAllVisible: at,
                  onSetFixed: At,
                  onSetWidth: Ct,
                  onSetOrder: Ne,
                  onSetSearchVisible: mt,
                  onReset: vt
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e("div", { ref: Fo, children: /* @__PURE__ */ e(
            Pi,
            {
              columns: Rl,
              allColumns: s,
              hiddenColumnKeys: ze.hiddenKeys,
              onToggleColumnVisible: Je ? Oe : void 0,
              data: Ml,
              rowKey: M,
              loading: $o,
              density: ze.density,
              motion: be,
              selectedKeys: Rn ? ar : void 0,
              onSelectionChange: Rn ? (k, T) => {
                ma(k, T);
              } : void 0,
              sortState: Qt,
              onSortChange: (k, T) => {
                Ga({ key: k, direction: T }), cr(1);
              },
              headerFilterMode: Jt,
              headerFilters: pt,
              onHeaderFilterChange: (k, T) => {
                cr(1), en(k, T), kr((W) => ({ ...W, [k]: T }));
              },
              headerFilterRender: (k) => {
                const T = Array.isArray(k.dataIndex) ? k.dataIndex.join(".") : String(k.dataIndex ?? k.key), W = Sr.find(
                  (it) => it.columnKey === k.key || it.key === T
                );
                if (Jt) {
                  if (!W && !k.filterable) return null;
                } else if (!k.filterable) return null;
                const X = k.filterOptions ?? (W == null ? void 0 : W.options), Q = (W == null ? void 0 : W.type) ?? k.filterType ?? (X && X.length > 0 ? "select" : "text"), Ie = (W == null ? void 0 : W.key) ?? T, xe = ii.includes(k.key);
                return /* @__PURE__ */ e(
                  Qp,
                  {
                    title: k.title,
                    filterType: Q,
                    filterOptions: X,
                    treeData: W == null ? void 0 : W.treeData,
                    multiple: W == null ? void 0 : W.multiple,
                    searchable: W == null ? void 0 : W.searchable,
                    placeholder: W == null ? void 0 : W.placeholder,
                    format: W == null ? void 0 : W.format,
                    highlighted: xe,
                    iconType: Jt ? "search" : "filter",
                    value: pt[Ie],
                    onApply: (it) => {
                      cr(1), en(Ie, it), kr((Ee) => ({ ...Ee, [Ie]: it }));
                    }
                  }
                );
              },
              activeFilterKeys: ii,
              activeFilterLabels: Wl,
              filterHighlightColor: ze.filterHighlightColor,
              onFilterHighlightColorChange: Je ? Nt : void 0,
              columnWidths: ze.columnWidths,
              onColumnResize: Ct,
              columnFixed: ze.columnFixed,
              onColumnPin: At,
              onColumnHide: Je ? Oe : void 0,
              onResetColumns: Je ? vt : void 0,
              onColumnReorder: Je ? Ne : void 0,
              treeData: dt,
              expandable: jl,
              rowDraggable: !!(Ze != null && Ze.enabled),
              onRowDragEnd: Ze != null && Ze.enabled ? Dl : void 0,
              activeRowKey: _,
              onRowClick: j,
              onRow: D,
              onRowView: (k, T) => void Ts(k, T),
              onEmptyReset: Ja > 0 ? Qa : void 0,
              maxHeight: jt ?? ol,
              className: "rounded-none border-0"
            }
          ) }),
          !C && y !== !1 && /* @__PURE__ */ e("div", { ref: Wo, className: "border-t border-[var(--abc-border)] px-4 py-3", children: E ? E({
            current: Rt,
            pageSize: Vt,
            total: _s,
            mode: typeof y == "object" && y.mode ? y.mode : "offset"
          }) : typeof y == "object" ? /* @__PURE__ */ e(
            Zn,
            {
              current: Rt,
              pageSize: Vt,
              pageSizeOptions: R,
              motion: be,
              total: _s,
              onChange: (k, T) => {
                cr(k), zt(T);
              },
              ...y
            }
          ) : /* @__PURE__ */ e(
            Zn,
            {
              current: Rt,
              pageSize: Vt,
              pageSizeOptions: R,
              motion: be,
              total: _s,
              onChange: (k, T) => {
                cr(k), zt(T);
              }
            }
          ) })
        ] }),
        Rn && ar.length > 0 && /* @__PURE__ */ e(
          rh,
          {
            selectedKeys: ar,
            selectedRows: ei,
            batchActions: ri,
            extraContent: qt == null ? void 0 : qt(ar, ei),
            motion: be,
            onBatchDelete: Ss && (Wt || ne != null && ne.delete) ? () => void ti(ar) : void 0,
            onClear: () => ma([], [])
          }
        ),
        /* @__PURE__ */ e(
          Yp,
          {
            open: !!En,
            onClose: () => ws(null),
            record: En,
            columns: s,
            viewTitle: Ae ?? (N ? "详情" : "记录详情"),
            viewSize: Fe,
            viewLoading: fl,
            canEdit: Ea,
            onEditRecord: (k) => void pa(k),
            renderViewExtra: Ce,
            renderViewFooter: st
          }
        ),
        /* @__PURE__ */ e(
          Gp,
          {
            open: ua,
            onClose: () => An(!1),
            isEdit: Lr,
            currentRecord: Ta,
            container: Pe,
            dialogTitle: u ?? (N ? { add: "新增", edit: "编辑" } : { add: "新建记录", edit: "编辑记录" }),
            dialogSize: m,
            formLayout: p,
            formColumns: Bl,
            formFields: aa,
            form: Lt,
            formSchema: b,
            columns: s,
            formSubmitting: hl,
            formDetailLoading: gl,
            formError: vl,
            onSubmit: Ll,
            draftEnabled: Ar,
            showDraftButton: !!(f != null && f.showDraftButton && Ar),
            showDraftBanner: xl,
            draftBannerMode: Ia ? "auto-restored" : "prompt",
            onSaveDraft: Ar ? () => {
              Kr.saveDraft(Lt.getValues()), J.success("草稿已保存");
            } : void 0,
            onRestoreDraft: () => {
              const k = Kr.readDraft();
              k && Lt.reset({ ...Hr(), ...k }), ba(!1);
            },
            onDiscardDraft: () => {
              Kr.clearDraft(), Ia && Lt.reset(Hr()), ba(!1);
            },
            submitButtonText: N ? "保存" : "确认提交",
            renderFormExtra: Tt,
            renderCustomForm: wt,
            onSuccessFetch: () => {
              Ke && Gt();
            }
          }
        )
      ]
    }
  );
}
const Fg = rl, Wg = rl;
function oh(t, a) {
  if (t) return t;
  if (a) {
    if (a.includes("max-w-5xl") || a.includes("max-w-4xl")) return "2xl";
    if (a.includes("max-w-3xl")) return "xl";
    if (a.includes("max-w-2xl") || a.includes("max-w-xl")) return "lg";
    if (a.includes("max-w-md")) return "md";
    if (a.includes("max-w-sm")) return "sm";
  }
  return "lg";
}
function ih({
  title: t,
  description: a,
  triggerLabel: r,
  triggerIcon: n,
  triggerVariant: s = "primary",
  mode: o = "modal",
  size: d,
  maxWidthClass: c,
  footer: b,
  open: l,
  onOpenChange: u,
  summarySlot: m,
  emptySummaryHint: p,
  headerActions: f,
  modalHeaderActions: g,
  inlineInTestEnv: x,
  renderInlineContainer: w,
  renderSummaryContainer: N,
  className: v,
  children: S
}) {
  var D;
  const M = x ?? (typeof process < "u" && ((D = process.env) == null ? void 0 : D.NODE_ENV) === "test" || typeof import.meta < "u" && !1), [L, R] = $(!1), C = l !== void 0 ? l : L, y = (B) => {
    l === void 0 && R(B), u == null || u(B);
  };
  if (M)
    return w ? /* @__PURE__ */ e(qe, { children: w({
      title: t,
      description: a,
      headerActions: f,
      modalHeaderActions: g,
      summarySlot: m,
      className: v,
      children: S
    }) }) : /* @__PURE__ */ i(
      "section",
      {
        "data-slot": "pro-form-inline",
        className: h(
          "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          v
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
            ] }),
            (f || g) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
              f,
              g
            ] })
          ] }),
          m,
          /* @__PURE__ */ e("div", { children: S })
        ]
      }
    );
  const j = /* @__PURE__ */ i(
    Le,
    {
      size: "sm",
      variant: s === "outline" ? "outline" : s === "secondary" ? "secondary" : "primary",
      onClick: () => y(!0),
      className: "gap-1.5 text-xs font-semibold cursor-pointer",
      children: [
        n ?? /* @__PURE__ */ e("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", fill: "none", className: "h-3.5 w-3.5 shrink-0", children: /* @__PURE__ */ e("path", { d: "M8 3.25v9.5M3.25 8h9.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) }),
        /* @__PURE__ */ e("span", { children: r })
      ]
    }
  );
  return /* @__PURE__ */ i(qe, { children: [
    N ? N({
      title: t,
      description: a,
      triggerButton: j,
      headerActions: f,
      summarySlot: m,
      emptySummaryHint: p,
      className: v
    }) : /* @__PURE__ */ i(
      "section",
      {
        "data-slot": "pro-form-summary",
        className: h(
          "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          v
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
              f,
              j
            ] })
          ] }),
          m ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: m }) : p ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3 text-xs text-[var(--abc-fg-muted)]", children: p }) : null
        ]
      }
    ),
    o === "drawer" ? /* @__PURE__ */ e(
      kn,
      {
        open: C,
        onClose: () => y(!1),
        title: t,
        description: a,
        size: oh(d, c),
        footer: b ?? g,
        className: c,
        children: S
      }
    ) : /* @__PURE__ */ e(
      lm,
      {
        open: C,
        onClose: () => y(!1),
        title: t,
        description: a,
        footer: b ?? g,
        className: c,
        children: S
      }
    )
  ] });
}
const Hg = ih, ch = {
  searchPlaceholder: "过滤日志内容…",
  stickBottomLabel: "自动贴底",
  copyLabel: "复制",
  copiedLabel: "已复制",
  emptyText: "无符合筛选条件的日志。",
  clearSearchLabel: "清空搜索",
  formatLineCount: (t, a) => `${t} / ${a} 行`
}, lh = ["all", "info", "warn", "error"];
function dh({
  logs: t,
  heightClass: a = "h-[440px]",
  estimateSize: r = 26,
  overscan: n = 12,
  defaultStickBottom: s = !1,
  labels: o,
  className: d
}) {
  var H;
  const c = { ...ch, ...o }, b = ge.useRef(null), [l, u] = ge.useState(""), [m, p] = ge.useState("all"), [f, g] = ge.useState(s), [x, w] = ge.useState(!1), [N, v] = ge.useState(0), [S, M] = ge.useState(0), L = typeof process < "u" && ((H = process.env) == null ? void 0 : H.NODE_ENV) === "test" || typeof import.meta < "u" && !1, R = ge.useMemo(() => t.map((A, I) => {
    if (typeof A == "string") {
      const P = A.toLowerCase(), K = P.includes("error") ? "error" : P.includes("warn") ? "warn" : "info";
      return { seq: I + 1, level: K, message: A };
    }
    return {
      seq: A.seq ?? I + 1,
      level: A.level || "info",
      message: A.message || "",
      detail: A.detail,
      created_at: A.created_at
    };
  }), [t]), C = ge.useMemo(() => {
    const A = l.trim().toLowerCase();
    return R.filter((I) => {
      var P;
      return m !== "all" && ((P = I.level) == null ? void 0 : P.toLowerCase()) !== m ? !1 : A ? I.message.toLowerCase().includes(A) || (I.created_at ? I.created_at.toLowerCase().includes(A) : !1) || (I.detail ? JSON.stringify(I.detail).toLowerCase().includes(A) : !1) : !0;
    });
  }, [R, l, m]);
  ge.useEffect(() => {
    const A = b.current;
    if (!A) return;
    const I = () => {
      A.clientHeight > 0 && M(A.clientHeight);
    };
    if (I(), typeof ResizeObserver > "u") return;
    const P = new ResizeObserver(I);
    return P.observe(A), () => P.disconnect();
  }, []), ge.useEffect(() => {
    const A = b.current;
    !f || !A || C.length === 0 || (A.scrollTop = A.scrollHeight, v(A.scrollTop));
  }, [C.length, f]);
  const y = !L && C.length > 80 && S > 0, E = C.length * r, { startIndex: _, endIndex: j } = ge.useMemo(() => {
    if (!y)
      return { startIndex: 0, endIndex: Math.max(0, C.length - 1) };
    const A = Math.ceil(S / r), I = Math.floor(N / r) - n, P = Math.max(0, I), K = Math.min(C.length - 1, Math.floor(N / r) + A + n);
    return { startIndex: P, endIndex: K };
  }, [y, C.length, S, r, N, n]), D = ge.useMemo(() => C.length === 0 ? [] : C.slice(_, j + 1).map((A, I) => ({
    log: A,
    index: _ + I
  })), [C, _, j]), B = async () => {
    const A = C.map(
      (I) => `[${I.created_at || "LOG"}][${(I.level || "INFO").toUpperCase()}] ${I.message} ${I.detail ? JSON.stringify(I.detail) : ""}`.trim()
    ).join(`
`);
    try {
      await navigator.clipboard.writeText(A), w(!0), setTimeout(() => w(!1), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "pro-log-viewer",
      className: h(
        "flex flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-slate-800 bg-slate-950 font-mono text-slate-200 shadow-md",
        d
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2 text-xs", children: [
          /* @__PURE__ */ i("div", { className: "flex min-w-44 flex-1 items-center gap-2", children: [
            /* @__PURE__ */ i("div", { className: "relative max-w-sm flex-1", children: [
              /* @__PURE__ */ e(
                $t,
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
                  onChange: (A) => u(A.target.value),
                  placeholder: c.searchPlaceholder,
                  className: "h-7 w-full rounded-md border border-slate-700 bg-slate-950 pl-8 pr-7 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                }
              ),
              l && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": c.clearSearchLabel,
                  onClick: () => u(""),
                  className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer",
                  children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 p-0.5", children: lh.map((A) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => p(A),
                className: h(
                  "rounded px-2 py-0.5 text-[10px] font-semibold uppercase transition cursor-pointer",
                  m === A ? A === "error" ? "bg-rose-500/20 text-rose-300" : A === "warn" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/25 text-blue-300" : "text-slate-400 hover:text-slate-200"
                ),
                children: A
              },
              A
            )) })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center gap-3 text-[11px] text-slate-400", children: [
            /* @__PURE__ */ e("span", { className: "tabular-nums", children: c.formatLineCount(C.length, R.length) }),
            /* @__PURE__ */ i("label", { className: "flex cursor-pointer items-center gap-1.5 select-none hover:text-slate-200", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: f,
                  onChange: (A) => g(A.target.checked),
                  className: "h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-0"
                }
              ),
              /* @__PURE__ */ e("span", { children: c.stickBottomLabel })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => void B(),
                className: "flex items-center gap-1 rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer",
                children: x ? /* @__PURE__ */ i(qe, { children: [
                  /* @__PURE__ */ e(kt, { className: "h-3 w-3 text-emerald-400", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { className: "text-emerald-300", children: c.copiedLabel })
                ] }) : /* @__PURE__ */ i(qe, { children: [
                  /* @__PURE__ */ e(va, { className: "h-3 w-3", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c.copyLabel })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            ref: b,
            onScroll: (A) => v(A.currentTarget.scrollTop),
            className: h("relative w-full overflow-auto", a),
            children: C.length === 0 ? /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center p-8 text-xs text-slate-500", children: c.emptyText }) : /* @__PURE__ */ e(
              "div",
              {
                style: y ? { height: `${E}px`, width: "100%", position: "relative" } : { width: "100%" },
                children: D.map(({ log: A, index: I }) => {
                  var V;
                  const P = ((V = A.level) == null ? void 0 : V.toLowerCase()) || "info", K = P === "error" || P === "fatal", O = P === "warn" || P === "warning";
                  return /* @__PURE__ */ i(
                    "div",
                    {
                      "data-index": I,
                      style: y ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${r}px`,
                        transform: `translateY(${I * r}px)`
                      } : void 0,
                      className: h(
                        "flex items-center gap-2.5 px-3 py-1 text-xs leading-5 transition-colors hover:bg-slate-900/60",
                        y ? "overflow-hidden whitespace-nowrap" : "items-start",
                        K ? "bg-rose-950/20 text-rose-200" : O ? "bg-amber-950/15 text-amber-200" : "text-slate-300"
                      ),
                      children: [
                        /* @__PURE__ */ e("span", { className: "w-10 shrink-0 select-none text-right text-[10px] text-slate-600 tabular-nums", children: A.seq }),
                        A.created_at && /* @__PURE__ */ e("span", { className: "shrink-0 select-none text-[11px] text-slate-500 tabular-nums", children: A.created_at.length >= 19 ? A.created_at.slice(11, 19) : A.created_at }),
                        /* @__PURE__ */ e(
                          "span",
                          {
                            className: h(
                              "inline-block w-12 shrink-0 select-none rounded px-1 py-0.5 text-center text-[9px] font-bold uppercase leading-none",
                              K ? "bg-rose-500/25 text-rose-300" : O ? "bg-amber-500/25 text-amber-300" : "bg-slate-800 text-slate-400"
                            ),
                            children: P.slice(0, 5)
                          }
                        ),
                        /* @__PURE__ */ i(
                          "div",
                          {
                            className: h(
                              "min-w-0 flex-1",
                              y ? "truncate" : "break-all whitespace-pre-wrap"
                            ),
                            title: y ? `${A.message}${A.detail ? ` ${JSON.stringify(A.detail)}` : ""}` : void 0,
                            children: [
                              /* @__PURE__ */ e("span", { children: A.message }),
                              A.detail && Object.keys(A.detail).length > 0 && /* @__PURE__ */ e("span", { className: "ml-2 text-[11px] text-slate-500", children: JSON.stringify(A.detail) })
                            ]
                          }
                        )
                      ]
                    },
                    `${A.seq ?? I}-${I}`
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
const Kg = dh, uh = {
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
}, bh = {
  blue: "bg-blue-500/15 text-blue-500 dark:text-blue-300",
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  purple: "bg-purple-500/15 text-purple-600 dark:text-purple-300",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-300"
};
function Ug({
  open: t,
  onOpenChange: a,
  enableShortcut: r = !0,
  entityMatchers: n = [],
  pages: s = [],
  onNavigate: o,
  actions: d = [],
  labels: c,
  searchQuery: b,
  onSearchQueryChange: l
}) {
  const u = { ...uh, ...c }, [m, p] = ge.useState(!1), [f, g] = ge.useState(""), [x, w] = ge.useState(0), N = ge.useRef(null), v = ge.useRef([]), S = typeof t == "boolean", M = S ? t : m, L = ge.useCallback(
    (I) => {
      S || p(I), a == null || a(I);
    },
    [S, a]
  ), R = b !== void 0 ? b : f, C = ge.useCallback(
    (I) => {
      b === void 0 && g(I), l == null || l(I);
    },
    [b, l]
  );
  ge.useEffect(() => {
    if (!r || typeof window > "u") return;
    const I = (P) => {
      (P.metaKey || P.ctrlKey) && P.key.toLowerCase() === "k" && (P.preventDefault(), L(!M));
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [r, M, L]), ge.useEffect(() => {
    if (!M) return;
    w(0);
    const I = setTimeout(() => {
      var P;
      (P = N.current) == null || P.focus();
    }, 10);
    return () => clearTimeout(I);
  }, [M]);
  const y = R.trim(), E = ge.useMemo(() => y ? n.filter((I) => I.match ? I.match(y) : I.prefix ? y.startsWith(I.prefix) : !1) : [], [n, y]), _ = ge.useMemo(() => y ? s.filter(
    (I) => ur(`${I.label} ${I.group ?? ""} ${I.to} ${I.keywords ?? ""}`, y)
  ) : s, [s, y]), j = ge.useMemo(() => y ? d.filter(
    (I) => ur(`${I.label} ${I.group ?? ""} ${I.keywords ?? ""}`, y)
  ) : d, [d, y]), D = ge.useCallback(
    (I) => {
      L(!1), C(""), I();
    },
    [L, C]
  ), B = ge.useMemo(() => {
    const I = [];
    for (const P of E)
      I.push({
        key: `entity-${P.id}-${y}`,
        trigger: () => D(() => P.onSelect(y))
      });
    for (const P of _)
      I.push({
        key: `page-${P.id ?? P.to}`,
        trigger: () => D(() => {
          P.onSelect ? P.onSelect() : o == null || o(P.to, P);
        })
      });
    for (const P of j)
      I.push({
        key: `action-${P.id}`,
        trigger: () => D(P.onSelect)
      });
    return I;
  }, [E, _, j, y, D, o]);
  ge.useEffect(() => {
    w(0);
  }, [y]), ge.useEffect(() => {
    const I = v.current[x];
    I && typeof I.scrollIntoView == "function" && I.scrollIntoView({ block: "nearest" });
  }, [x]);
  const H = (I) => {
    if (I.key === "ArrowDown") {
      I.preventDefault(), B.length > 0 && w((P) => (P + 1) % B.length);
      return;
    }
    if (I.key === "ArrowUp") {
      I.preventDefault(), B.length > 0 && w((P) => (P - 1 + B.length) % B.length);
      return;
    }
    if (I.key === "Enter") {
      const P = B[x];
      P && (I.preventDefault(), P.trigger());
    }
  };
  let A = 0;
  return /* @__PURE__ */ e(
    yr,
    {
      open: M,
      onClose: () => L(!1),
      closable: !1,
      draggable: !1,
      fullscreenable: !1,
      width: "min(680px, 92vw)",
      "aria-label": u.dialogLabel,
      className: "overflow-hidden [&>[data-dialog-body]]:p-0",
      children: /* @__PURE__ */ i(
        "div",
        {
          "data-slot": "pro-command-palette",
          className: "flex flex-col bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center border-b border-[var(--abc-border)] px-4", children: [
              /* @__PURE__ */ e($t, { className: "mr-2.5 h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: N,
                  type: "text",
                  value: R,
                  onChange: (I) => C(I.target.value),
                  onKeyDown: H,
                  placeholder: u.searchPlaceholder,
                  "aria-label": u.searchPlaceholder,
                  className: "h-12 w-full bg-transparent text-sm text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              ),
              /* @__PURE__ */ e("kbd", { className: "hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] sm:inline-block", children: "ESC" })
            ] }),
            /* @__PURE__ */ e("div", { role: "listbox", className: "max-h-96 space-y-2 overflow-y-auto p-2", children: B.length === 0 ? /* @__PURE__ */ e("div", { className: "py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: u.emptyText }) : /* @__PURE__ */ i(qe, { children: [
              E.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-primary)]", children: u.entityGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: E.map((I) => {
                  const P = A++, K = P === x, O = bh[I.tone ?? "blue"];
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (V) => {
                        v.current[P] = V;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": K,
                      "data-selected": K ? "true" : void 0,
                      onMouseEnter: () => w(P),
                      onClick: () => D(() => I.onSelect(y)),
                      className: h(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        K ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: [
                        I.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: I.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate font-mono", children: I.renderLabel ? I.renderLabel(y) : /* @__PURE__ */ i(qe, { children: [
                          I.labelPrefix ? `${I.labelPrefix} ` : "",
                          /* @__PURE__ */ e("strong", { className: "font-semibold", children: y })
                        ] }) }),
                        /* @__PURE__ */ e("span", { className: h("rounded px-1.5 py-0.5 text-[10px] font-mono", O), children: u.enterKeyLabel })
                      ]
                    },
                    `entity-${I.id}`
                  );
                }) })
              ] }),
              _.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: u.pagesGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: _.map((I) => {
                  const P = A++, K = P === x;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (O) => {
                        v.current[P] = O;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": K,
                      "data-selected": K ? "true" : void 0,
                      onMouseEnter: () => w(P),
                      onClick: () => D(() => {
                        I.onSelect ? I.onSelect() : o == null || o(I.to, I);
                      }),
                      className: h(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        K ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        I.icon && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: I.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: I.label }),
                        I.group && /* @__PURE__ */ e("span", { className: "shrink-0 text-[10px] text-[var(--abc-fg-muted)]", children: I.group })
                      ]
                    },
                    `page-${I.id ?? I.to}`
                  );
                }) })
              ] }),
              j.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: u.actionsGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: j.map((I) => {
                  const P = A++, K = P === x;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (O) => {
                        v.current[P] = O;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": K,
                      "data-selected": K ? "true" : void 0,
                      onMouseEnter: () => w(P),
                      onClick: () => D(I.onSelect),
                      className: h(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        I.danger ? K ? "bg-red-500/15 text-[var(--abc-danger)]" : "text-[var(--abc-danger)] hover:bg-red-500/10" : K ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        I.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: I.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: I.label }),
                        K && /* @__PURE__ */ e(dc, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
                      ]
                    },
                    `action-${I.id}`
                  );
                }) })
              ] })
            ] }) }),
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-4 py-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ i("span", { children: [
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↑" }),
                  " ",
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↓" }),
                  " ",
                  u.navigateHint
                ] }),
                /* @__PURE__ */ i("span", { children: [
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↵" }),
                  " ",
                  u.openHint
                ] })
              ] }),
              /* @__PURE__ */ e("span", { children: u.footerBrand })
            ] })
          ]
        }
      )
    }
  );
}
function Vg({
  onClick: t,
  placeholder: a = "快速搜索页面、实体 ID…",
  mobilePlaceholder: r = "搜索…",
  ariaLabel: n = "打开全局命令面板",
  className: s,
  ...o
}) {
  const d = typeof navigator < "u" && /mac|iphone|ipad|ipod/i.test(navigator.userAgent);
  return /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      "data-slot": "command-trigger-button",
      onClick: t,
      "aria-label": n,
      className: h(
        "group inline-flex h-8.5 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs text-[var(--abc-fg-muted)] shadow-2xs transition cursor-pointer",
        "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        s
      ),
      ...o,
      children: [
        /* @__PURE__ */ e($t, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)]", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: a }),
        /* @__PURE__ */ e("span", { className: "sm:hidden", children: r }),
        /* @__PURE__ */ e("kbd", { className: "ml-1 hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)] sm:inline-block", children: d ? "⌘K" : "Ctrl+K" })
      ]
    }
  );
}
export {
  Ps as ABC_BRAND_PRESETS,
  ui as ABC_DENSITY_PRESETS,
  Sp as ABC_HEADER_HEIGHT_BY_SIZE,
  tn as ABC_MOTION_PRESETS,
  bi as ABC_RADIUS_PRESETS,
  kp as ABC_SIDEBAR_WIDTH_BY_SIZE,
  xh as ABC_SIZE_PRESETS,
  Sc as AbcConfirmHost,
  _h as AbcProvider,
  xm as AbcToastViewport,
  Kh as ActionCard,
  gg as Alert,
  ug as AsyncInlineError,
  fg as AttentionList,
  Ii as AuroraBackground,
  Dp as AuthLayout,
  Pm as Avatar,
  Qn as BYTE_UNITS,
  jc as BYTE_UNIT_FACTORS,
  Bh as Badge,
  Yh as BentoCard,
  Gh as BentoGrid,
  _i as BorderBeam,
  Of as BrandIcon,
  Pa as BrandLogoBlock,
  qh as Breadcrumb,
  Le as Button,
  ag as ByteQuotaInput,
  Jn as Card,
  Gm as CardContent,
  Vm as CardDescription,
  Ym as CardFooter,
  Km as CardHeader,
  Um as CardTitle,
  Hh as CheckCard,
  Wh as CheckCardGroup,
  $a as Checkbox,
  ig as Collapse,
  Uh as CollapsibleCard,
  Lp as CommandPalette,
  Vg as CommandTriggerButton,
  pg as ConfirmDialog,
  Sh as ConfirmProvider,
  Th as CopyButton,
  Hc as CopyableCode,
  Si as CopyableText,
  Rg as CrudConfigPage,
  Lg as CrudFormLayout,
  $g as CrudSearchForm,
  Wg as CrudTable,
  Ah as CursorPagination,
  Cp as DEFAULT_ABC_LAYOUT_SETTINGS,
  Yt as DEFAULT_ABC_THEME,
  es as DURATION_UNITS,
  Bc as DURATION_UNIT_FACTORS,
  yn as DatePicker,
  wn as DateRangePicker,
  Kc as DescriptionList,
  lg as DescriptionListItem,
  og as Descriptions,
  yr as Dialog,
  No as DialogContent,
  wo as DialogContext,
  _o as DialogDescription,
  So as DialogFooter,
  ko as DialogHeader,
  Co as DialogTitle,
  Cg as DictSelect,
  _g as DictTag,
  Ph as Divider,
  kn as Drawer,
  Yf as DrawerBody,
  Gf as DrawerDescription,
  qf as DrawerFooter,
  Uf as DrawerHeader,
  Vf as DrawerTitle,
  vn as Dropdown,
  Tp as DualColumnNav,
  ng as DurationQuotaInput,
  Rm as EmptyState,
  hg as ErrorBoundary,
  jg as FilterPillGroup,
  Xp as FilterToolbar,
  Hg as FormDrawerDialog,
  Ro as FormField,
  Qp as HeaderColumnFilterPopover,
  Ni as ICON_CATALOG,
  jr as Icon,
  Eh as IconBadge,
  ki as IconPicker,
  Nn as ImagePreview,
  Rc as ImageUpload,
  gt as Input,
  ds as InputNumber,
  up as InspectorPanel,
  Ra as Kbd,
  Ap as KeepAliveContainer,
  cf as Label,
  Jf as Loading,
  mg as LoadingStateCard,
  Fh as MetricCard,
  lm as Modal,
  Ag as MultiImageFieldControl,
  Mp as MultiTabBar,
  xa as NotificationBanner,
  xg as OneTimeSecretDialog,
  Ng as PageContainer,
  yg as PageTransition,
  Zn as Pagination,
  Sg as Permission,
  Op as PermissionGuard,
  Do as Popover,
  Vh as PricingCard,
  eh as ProColumnSettingsPopover,
  Ug as ProCommandPalette,
  Dg as ProConfigForm,
  qp as ProConfigPage,
  Vp as ProCrudFormFieldControl,
  tl as ProCrudFormLayout,
  Gp as ProCrudFormModal,
  ah as ProCrudSearchForm,
  Fg as ProCrudTable,
  Yp as ProCrudViewModal,
  rh as ProFloatingBatchBar,
  ih as ProFormContainer,
  $p as ProFormLayout,
  Up as ProIconFieldControl,
  kg as ProLayout,
  dh as ProLogViewer,
  el as ProMultiImageUpload,
  th as ProRowActionsOverflow,
  rl as ProTable,
  op as Progress,
  Bg as QuickSelectBar,
  Dr as RadioGroup,
  bg as ReadErrorBanner,
  zg as ReasonedActionDialog,
  Pg as ReasonedActionDrawer,
  vg as Result,
  Am as RichIconText,
  lf as SearchInput,
  Zh as SegmentedControl,
  br as Select,
  Mh as SelectField,
  Vs as SidebarNav,
  Ot as Skeleton,
  Dh as SkeletonCard,
  jh as SkeletonChart,
  Rh as SkeletonTable,
  eg as SliderVerify,
  Lh as SmartPagination,
  Oh as Space,
  wg as SplitInspectorLayout,
  $h as SpotlightCard,
  ha as StatusTag,
  Xh as Steps,
  lr as Switch,
  xi as TONE_ICONS,
  ep as TabErrorBoundary,
  pp as Table,
  gp as TableBody,
  Np as TableCaption,
  wp as TableCell,
  Pi as TableCore,
  vp as TableFooter,
  yp as TableHead,
  hp as TableHeader,
  xp as TableRow,
  sg as Tabs,
  Om as Tag,
  Ef as TagInput,
  dg as TenantIcon,
  hn as Textarea,
  Hi as ThemeCustomizer,
  Wf as ThemeSwitcher,
  cg as Timeline,
  vm as ToastContainer,
  gm as ToastItemView,
  tr as Tooltip,
  Oi as TopHorizontalNav,
  Vc as TopProgressBar,
  Qh as Tree,
  xn as TreeSelect,
  Jh as TreeSelectField,
  Kg as VirtualLogViewer,
  Qf as Watermark,
  qn as abcConfirm,
  cp as abcProgress,
  Eo as abcToast,
  yh as abcUiClasses,
  er as applyAbcThemeToDocument,
  Jr as baseFieldControlClass,
  Js as buildCalendarMonthGrid,
  Zp as buildCsvContent,
  Wb as buttonClass,
  wh as buttonVariants,
  Bn as cleanQueryObject,
  fm as clearToasts,
  h as cn,
  Ba as collectAllExpandableKeys,
  xo as computeTreeCheckState,
  Nh as confirm,
  us as copyToClipboard,
  fs as createProTableApi,
  Ig as createTableApi,
  Kb as dangerButtonClass,
  To as dismissToast,
  Vi as downloadTableCsv,
  nb as filterAndSortClientRows,
  Gb as filterCardClass,
  Qu as filterTreeNodes,
  rb as filterTreeSelectNodes,
  Yc as findBreadcrumbChain,
  bn as flattenNodeText,
  ab as flattenVisibleTreeNodes,
  Og as formatFilterText,
  zn as formatIsoDate,
  tg as formatQuotaBytes,
  rg as formatQuotaDuration,
  pi as formatTreeCheckedStrategy,
  Zu as getCharInitial,
  ms as getNestedValue,
  ls as getOverlayPortalContainer,
  Ju as getPinyinInitials,
  $b as inputClass,
  Mg as isFieldRequired,
  Rr as isProApiFailure,
  Qc as isSchemaFieldRequired,
  Wc as isSvgSource,
  tm as labelClass,
  ur as matchKeywordWithPinyin,
  qr as menuContainsPath,
  io as normalizeProListResponse,
  eb as normalizeTreeSelectData,
  Jb as pageHeaderClass,
  em as pageSubTitleClass,
  Qb as pageTitleClass,
  Vb as panelClass,
  ao as parseSelectChildren,
  bm as pauseToast,
  Oc as pickBestByteUnit,
  $c as pickBestDurationUnit,
  Da as pushToast,
  sb as readQueryFromUrlSearch,
  Ih as registerAbcIcons,
  Gc as renderBuiltInValue,
  ja as resolveAbcThemeMode,
  Fa as resolveFieldKey,
  tb as resolveTreeCheckedStateFromValue,
  mm as resumeToast,
  Hb as secondaryClass,
  Yb as tableCardClass,
  Zb as tableCellClass,
  qb as tableHeadClass,
  Xb as tableHeaderCellClass,
  zh as tagVariants,
  Ub as textButtonClass,
  Fb as textareaClass,
  Ch as toast,
  mc as toggleTreeNodeChecked,
  Xu as transitionAbcTheme,
  Mt as useAbcConfig,
  Jc as useAbcDict,
  Nm as useAbcDrawerCascadeMode,
  Te as useAbcMotion,
  zo as useAbcPermission,
  Be as useAbcSize,
  Ff as useColorScheme,
  kh as useConfirm,
  _r as useControllableState,
  Eg as useCrudTable,
  im as useDialog,
  am as useDraftStorage,
  Ua as useFloatingPosition,
  wm as useOptionalAbcConfig,
  ca as usePresence,
  Hp as useProForm,
  Wp as useProTable,
  Fp as useProTableApi,
  Tg as useTableApi,
  nm as useTableSettings,
  ob as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
