var vc = Object.defineProperty;
var xc = (t, r, a) => r in t ? vc(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var Wr = (t, r, a) => xc(t, typeof r != "symbol" ? r + "" : r, a);
import * as Me from "react";
import pt, { useState as H, useEffect as we, useRef as ce, useCallback as ge, useLayoutEffect as Na, createContext as os, useId as Tt, useContext as Ta, useMemo as oe, useImperativeHandle as pn, Component as $o } from "react";
import { jsxs as l, jsx as e, Fragment as Ue } from "react/jsx-runtime";
import { Loader2 as Jt, Minimize2 as ls, Maximize2 as is, X as Ct, Trash2 as mr, AlertTriangle as Ir, CheckCircle2 as xr, HelpCircle as ea, Info as Ia, AlertCircle as Er, Zap as yc, XCircle as wc, Wrench as Nc, Wallet as kc, Video as Sc, Users as Cc, UserCog as Ec, UserCheck as Tc, User as Ic, Upload as hn, Unlock as _c, TrendingUp as Mc, Trash as Ac, Timer as Rc, Ticket as Dc, Terminal as Lc, Tags as Bc, Tag as Pc, Store as zc, StarOff as jc, Star as Fc, Sparkles as _a, Smartphone as Oc, SlidersHorizontal as Un, Sliders as $c, ShoppingCart as Kc, ShoppingBag as Hc, ShieldCheck as cs, ShieldAlert as gn, Shield as Wc, Share2 as Vc, Share as Uc, Settings as Gc, Server as Yc, Send as qc, Search as Pt, ScrollText as Xc, RotateCw as vn, RotateCcw as lr, RefreshCw as Fr, Receipt as Zc, Radio as Jc, PlusCircle as Qc, Plus as xn, Play as Ko, PieChart as ed, PhoneCall as td, Phone as rd, Pause as ad, PanelTop as nd, PanelLeft as sd, Palette as ds, Package as od, Network as ld, MoreHorizontal as us, Monitor as bs, Minus as yn, MessagesSquare as id, MessageSquareText as cd, MessageSquareQuote as dd, MessageSquare as ud, MessageCircle as bd, Menu as Ho, Megaphone as md, MapPin as fd, Lock as pd, ListOrdered as hd, ListChecks as gd, Link2 as vd, LineChart as xd, LayoutGrid as yd, LayoutDashboard as wd, Layers as ms, KeyRound as Wo, Key as Nd, Image as Vo, Home as fs, History as kd, Headphones as Sd, HardDrive as Cd, Handshake as Ed, Globe2 as Td, Globe as Id, FolderTree as Uo, FolderPlus as _d, FolderOpen as Md, FolderGit2 as Ad, Folder as Rd, Flame as Dd, FileText as Go, FileSpreadsheet as Ld, FileClock as Bd, FileCheck as Pd, Eye as ta, Edit3 as Za, Edit as zd, Download as Gn, Database as jd, CreditCard as Fd, Cpu as Od, Copy as Or, Compass as Yo, Coins as $d, Clock as tn, CircleDollarSign as Kd, CheckSquare as Hd, CheckCircle as qo, Check as St, Camera as Wd, CalendarCheck as Vd, Calendar as ps, Building2 as Xo, Boxes as Ud, BookMarked as Gd, BellRing as Yd, Bell as qd, BarChart3 as Xd, BarChart2 as Zd, AlertOctagon as Jd, Activity as Qd, EyeOff as Zo, ChevronDown as Xt, FolderSearch as eu, ChevronLeft as ka, ChevronRight as Zt, ArrowUpRight as Jo, ArrowDownRight as tu, ChevronsLeft as Qo, ChevronsRight as el, UploadCloud as tl, ServerCrash as ru, FileSearch as au, ArrowRight as rl, ChevronsUpDown as nu, ChevronsDownUp as su, ZoomOut as ou, ZoomIn as lu, WifiOff as iu, CircleAlert as cu, Sun as Sa, Moon as Ca, GripVertical as wn, ArrowUp as hs, ArrowDown as gs, ArrowUpDown as al, Pin as Jr, PinOff as du, ArrowLeft as uu, Columns as bu, Pencil as mu, CornerDownLeft as nl, Code2 as fu, PanelLeftOpen as pu, PanelLeftClose as hu, Save as sl, Filter as rn, Settings2 as gu, ChevronUp as an, ListFilter as vu, AlignJustify as xu, BookOpen as yu } from "lucide-react";
import { createPortal as cr } from "react-dom";
import qe from "dayjs";
const zn = {
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
}, Js = {
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
}, Qs = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, ah = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, fa = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Ht = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, eo = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function wu(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of eo)
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
  for (const s of eo)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function Yr(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Nu(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Gt(t) {
  const r = Yr(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return Nu(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), wu(a, t.customBrandColor), r;
}
function ku(t, r) {
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
const jn = [
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
function Su(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = jn.length - 1; r >= 0; r--)
    if (t.localeCompare(jn[r].start, "zh-CN") >= 0)
      return jn[r].letter;
  return t.toLowerCase();
}
function Cu(t) {
  return Array.from(t).map(Su).join("");
}
function Wt(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : Cu(t).includes(a);
}
function ol(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      ol(a, r);
  return r;
}
function vs(t, r, a = !1) {
  const n = new Set(r), s = /* @__PURE__ */ new Set();
  if (a)
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
    let b = !0, i = !1;
    for (const u of c) {
      const m = o(u);
      m.allChecked || (b = !1), m.someChecked && (i = !0);
    }
    return b ? (n.add(d.key), s.delete(d.key)) : i ? (n.delete(d.key), s.add(d.key)) : (n.delete(d.key), s.delete(d.key)), { allChecked: b, someChecked: i };
  }
  for (const d of t)
    o(d);
  return {
    checkedKeys: Array.from(n),
    halfCheckedKeys: Array.from(s)
  };
}
function ll(t, r, a, n, s = !1) {
  const o = new Set(r);
  if (s)
    return n ? o.add(a.key) : o.delete(a.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const d = ol(a);
  for (const c of d)
    n ? o.add(c) : o.delete(c);
  return vs(t, Array.from(o), !1);
}
function Eu(t, r) {
  const a = r.trim();
  if (!a)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(o) {
    const d = [];
    for (const c of o) {
      const b = c.children ? s(c.children) : [], i = Wt(c.title, a);
      (i || b.length > 0) && (b.length > 0 && n.push(c.key), d.push({
        ...c,
        children: b.length > 0 ? b : c.children && i ? c.children : void 0
      }));
    }
    return d;
  }
  return {
    filteredNodes: s(t),
    autoExpandedKeys: n
  };
}
function qr(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function to(t, r, a) {
  const n = t[r] !== void 0 ? t[r] : t.label !== void 0 ? t.label : t.title;
  return typeof n == "string" || typeof n == "number" ? { title: String(n), rawLabel: n } : typeof t.title == "string" || typeof t.title == "number" ? { title: String(t.title), rawLabel: n ?? t.title } : { title: String(a), rawLabel: n ?? String(a) };
}
function Tu(t = [], r) {
  const a = (r == null ? void 0 : r.fieldNames) ?? {}, n = a.label ?? "label", s = a.value ?? "value", o = a.children ?? "children", d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), b = r == null ? void 0 : r.treeDataSimpleMode;
  if (b) {
    const m = (typeof b == "object" ? b.id : void 0) ?? "id", p = (typeof b == "object" ? b.pId : void 0) ?? "pId", f = typeof b == "object" && "rootPId" in b ? b.rootPId : null, h = [], v = /* @__PURE__ */ new Map();
    t.forEach((g, N) => {
      const T = g[s] !== void 0 ? g[s] : g[m] !== void 0 ? g[m] : g.value !== void 0 ? g.value : g.key !== void 0 ? g.key : N, M = typeof T == "string" || typeof T == "number" ? T : String(T ?? N), { title: L, rawLabel: C } = to(g, n, M), y = g[m] !== void 0 ? g[m] : M, _ = g[p], E = {
        key: M,
        value: M,
        title: L,
        rawLabel: C,
        disabled: !!g.disabled,
        selectable: g.selectable,
        checkable: g.checkable,
        isLeaf: g.isLeaf,
        icon: typeof g.icon == "string" ? g.icon : void 0,
        badge: typeof g.badge == "string" || typeof g.badge == "number" ? g.badge : void 0,
        raw: g
      }, R = String(y), D = String(E.key);
      d.set(D, E);
      const A = {
        idStr: R,
        pIdRaw: _,
        pIdStr: _ == null || _ === "" ? null : String(_),
        node: E
      };
      h.push(A), v.set(R, A);
    });
    const w = [], k = f == null ? null : String(f);
    for (const g of h) {
      const N = g.pIdStr !== null && g.pIdStr !== k ? v.get(g.pIdStr) : void 0;
      N && N !== g ? (N.node.children || (N.node.children = []), N.node.children.push(g.node), c.set(String(g.node.key), String(N.node.key))) : (w.push(g.node), c.set(String(g.node.key), null));
    }
    return { treeNodes: w, nodeMap: d, parentMap: c };
  }
  function i(m, p, f) {
    return m.map((h, v) => {
      const k = a.value !== void 0 && h[s] !== void 0 ? h[s] : h.value !== void 0 ? h.value : h.key !== void 0 ? h.key : `${f}-${v}`, g = typeof k == "string" || typeof k == "number" ? k : String(k), { title: N, rawLabel: T } = to(h, n, g), M = String(g), L = h[o] ?? h.children, C = Array.isArray(L) ? i(L, M, `${f}-${v}`) : void 0, y = {
        key: g,
        value: g,
        title: N,
        rawLabel: T,
        disabled: !!h.disabled,
        selectable: h.selectable,
        checkable: h.checkable,
        isLeaf: h.isLeaf,
        icon: typeof h.icon == "string" ? h.icon : void 0,
        badge: typeof h.badge == "string" || typeof h.badge == "number" ? h.badge : void 0,
        children: C,
        raw: h
      };
      return d.set(M, y), c.set(M, p), y;
    });
  }
  return { treeNodes: i(t, null, "root"), nodeMap: d, parentMap: c };
}
function il(t, r) {
  if (!t.disabled && t.checkable !== !1 && r.push(t.key), t.children)
    for (const a of t.children)
      il(a, r);
}
function Iu(t, r, a = !1) {
  const n = new Set(r.map((u) => String(u)));
  if (a) {
    let p = function(f) {
      for (const h of f) {
        const v = String(h.key);
        n.has(v) && !u.has(v) && (u.add(v), m.push(h.key)), h.children && p(h.children);
      }
    };
    const u = /* @__PURE__ */ new Set(), m = [];
    p(t);
    for (const f of r)
      u.has(String(f)) || m.push(f);
    return { checkedKeys: m, halfCheckedKeys: [] };
  }
  const s = [], o = /* @__PURE__ */ new Set();
  function d(u) {
    for (const m of u) {
      const p = String(m.key);
      n.has(p) && !m.disabled && m.checkable !== !1 ? (o.add(p), il(m, s)) : m.children && m.children.length > 0 && d(m.children);
    }
  }
  d(t);
  const c = vs(t, s, !1), b = new Set(c.checkedKeys.map((u) => String(u))), i = [];
  for (const u of r) {
    const m = String(u);
    if (!o.has(m) && !b.has(m)) {
      let f = function(h) {
        for (const v of h)
          if (String(v.key) === m || v.children && f(v.children))
            return !0;
        return !1;
      }, p = !1;
      p = f(t), p || i.push(u);
    }
  }
  return {
    checkedKeys: [...c.checkedKeys, ...i],
    halfCheckedKeys: c.halfCheckedKeys
  };
}
function ro(t, r, a = "SHOW_ALL", n = !1) {
  const s = new Set(r.map((i) => String(i))), o = /* @__PURE__ */ new Set(), d = [], c = /* @__PURE__ */ new Set();
  function b(i) {
    for (const u of i)
      c.add(String(u.key)), u.children && b(u.children);
  }
  if (b(t), n || a === "SHOW_ALL") {
    let i = function(u) {
      for (const m of u) {
        const p = String(m.key);
        s.has(p) && !o.has(p) && (o.add(p), d.push(m.key)), m.children && i(m.children);
      }
    };
    i(t);
  } else if (a === "SHOW_PARENT") {
    let i = function(u) {
      for (const m of u) {
        const p = String(m.key);
        if (!m.disabled && m.checkable !== !1 && s.has(p)) {
          o.has(p) || (o.add(p), d.push(m.key));
          continue;
        }
        m.children && m.children.length > 0 && i(m.children);
      }
    };
    i(t);
  } else {
    let i = function(u) {
      for (const m of u)
        if ((m.children ?? []).filter((f) => !f.disabled && f.checkable !== !1).length === 0) {
          const f = String(m.key);
          !m.disabled && m.checkable !== !1 && s.has(f) && !o.has(f) && (o.add(f), d.push(m.key));
        } else
          i(m.children ?? []);
    };
    i(t);
  }
  for (const i of r) {
    const u = String(i);
    !c.has(u) && !o.has(u) && (o.add(u), d.push(i));
  }
  return d;
}
function _u(t, r, a = "both") {
  const n = r.trim();
  if (!n)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const s = n.toLowerCase(), o = [];
  function d(c) {
    const b = [];
    for (const i of c) {
      const u = i.children ? d(i.children) : [], m = a !== "value" && Wt(i.title, n), p = a !== "title" && String(i.value).toLowerCase().includes(s);
      (m || p || u.length > 0) && (u.length > 0 && o.push(i.key), b.push({
        ...i,
        children: u.length > 0 ? u : i.children && (m || p) ? i.children : void 0
      }));
    }
    return b;
  }
  return {
    filteredNodes: d(t),
    autoExpandedKeys: o
  };
}
function Mu(t, r, a) {
  const n = [];
  function s(o, d, c) {
    const b = o.length;
    o.forEach((i, u) => {
      const m = String(i.key), p = a ? a(i) : !!(i.children && i.children.length > 0), f = p && r.has(m);
      n.push({
        node: i,
        keyStr: m,
        depth: d,
        posInSet: u + 1,
        setSize: b,
        hasChildren: p,
        isExpanded: f,
        parentKey: c
      }), f && i.children && i.children.length > 0 && s(i.children, d + 1, i.key);
    });
  }
  return s(t, 0, null), n;
}
function cl(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function Vr(t, r) {
  if (!(!t || typeof t != "object")) {
    if (r in t)
      return t[r];
    if (r.includes("."))
      return r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t);
  }
}
function Au({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let d = [...t];
  const c = a.trim();
  c && (d = d.filter((b) => (r && r.length > 0 ? r : Object.keys(b)).some((u) => {
    const m = Vr(b, u);
    return m != null && Wt(String(m), c);
  })));
  for (const [b, i] of Object.entries(n))
    if (i != null) {
      if (Array.isArray(i)) {
        if (i.length === 0)
          continue;
        d = d.filter((u) => {
          const m = Vr(u, b);
          return m == null ? !1 : Array.isArray(m) ? i.some((p) => m.map(String).includes(String(p))) : i.some((p) => String(m) === String(p) || Wt(String(m), String(p)));
        });
        continue;
      }
      if (cl(i)) {
        const u = (i.start ?? "").trim(), m = (i.end ?? "").trim();
        if (!u && !m)
          continue;
        d = d.filter((p) => {
          const f = Vr(p, b);
          if (f == null)
            return !1;
          const h = String(f).slice(0, 10);
          return !(u && h < u || m && h > m);
        });
        continue;
      }
      String(i).trim() !== "" && (d = d.filter((u) => {
        const m = Vr(u, b);
        return m == null ? !1 : Wt(String(m), String(i));
      }));
    }
  if (s && o) {
    const b = o === "asc" ? 1 : -1;
    d.sort((i, u) => {
      const m = Vr(i, s), p = Vr(u, s);
      return typeof m == "number" && typeof p == "number" ? (m - p) * b : String(m ?? "").localeCompare(String(p ?? ""), "zh-CN") * b;
    });
  }
  return d;
}
function Ja(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || cl(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function Ru(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((o, d) => {
    o && (s && !s.has(d) || (n[d] = o));
  }), n;
}
function Du(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of r)
    n.delete(o);
  for (const [o, d] of Object.entries(a))
    d == null || Array.isArray(d) || typeof d == "object" || String(d).trim() !== "" && n.set(o, String(d));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function Va(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), d = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${d}`;
}
function Yn(t, r, a = /* @__PURE__ */ new Date()) {
  const n = Va(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), o = new Date(t, r + 1, 0).getDate(), d = new Date(t, r, 0).getDate(), c = [];
  for (let i = s - 1; i >= 0; i--) {
    const u = d - i, m = Va(t, r - 1, u);
    c.push({ iso: m, day: u, inCurrentMonth: !1, isToday: m === n });
  }
  for (let i = 1; i <= o; i++) {
    const u = Va(t, r, i);
    c.push({ iso: u, day: i, inCurrentMonth: !0, isToday: u === n });
  }
  let b = 1;
  for (; c.length < 42; ) {
    const i = Va(t, r + 1, b);
    c.push({ iso: i, day: b, inCurrentMonth: !1, isToday: i === n }), b += 1;
  }
  return c;
}
function dl(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = dl(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Lu() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = dl(t)) && (n && (n += " "), n += r);
  return n;
}
const xs = "-", Bu = (t) => {
  const r = zu(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (d) => {
      const c = d.split(xs);
      return c[0] === "" && c.length !== 1 && c.shift(), ul(c, r) || Pu(d);
    },
    getConflictingClassGroupIds: (d, c) => {
      const b = a[d] || [];
      return c && n[d] ? [...b, ...n[d]] : b;
    }
  };
}, ul = (t, r) => {
  var d;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? ul(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = t.join(xs);
  return (d = r.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : d.classGroupId;
}, ao = /^\[(.+)\]$/, Pu = (t) => {
  if (ao.test(t)) {
    const r = ao.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, zu = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Fu(Object.entries(t.classGroups), a).forEach(([o, d]) => {
    qn(d, n, o, r);
  }), n;
}, qn = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : no(r, s);
      o.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (ju(s)) {
        qn(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([o, d]) => {
      qn(d, no(r, o), a, n);
    });
  });
}, no = (t, r) => {
  let a = t;
  return r.split(xs).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, ju = (t) => t.isThemeGetter, Fu = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([d, c]) => [r + d, c])) : o);
  return [a, s];
}) : t, Ou = (t) => {
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
}, bl = "!", $u = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], o = r.length, d = (c) => {
    const b = [];
    let i = 0, u = 0, m;
    for (let w = 0; w < c.length; w++) {
      let k = c[w];
      if (i === 0) {
        if (k === s && (n || c.slice(w, w + o) === r)) {
          b.push(c.slice(u, w)), u = w + o;
          continue;
        }
        if (k === "/") {
          m = w;
          continue;
        }
      }
      k === "[" ? i++ : k === "]" && i--;
    }
    const p = b.length === 0 ? c : c.substring(u), f = p.startsWith(bl), h = f ? p.substring(1) : p, v = m && m > u ? m - u : void 0;
    return {
      modifiers: b,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: v
    };
  };
  return a ? (c) => a({
    className: c,
    parseClassName: d
  }) : d;
}, Ku = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, Hu = (t) => ({
  cache: Ou(t.cacheSize),
  parseClassName: $u(t),
  ...Bu(t)
}), Wu = /\s+/, Vu = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], d = t.trim().split(Wu);
  let c = "";
  for (let b = d.length - 1; b >= 0; b -= 1) {
    const i = d[b], {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: f
    } = a(i);
    let h = !!f, v = n(h ? p.substring(0, f) : p);
    if (!v) {
      if (!h) {
        c = i + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = n(p), !v) {
        c = i + (c.length > 0 ? " " + c : c);
        continue;
      }
      h = !1;
    }
    const w = Ku(u).join(":"), k = m ? w + bl : w, g = k + v;
    if (o.includes(g))
      continue;
    o.push(g);
    const N = s(v, h);
    for (let T = 0; T < N.length; ++T) {
      const M = N[T];
      o.push(k + M);
    }
    c = i + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Uu() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = ml(r)) && (n && (n += " "), n += a);
  return n;
}
const ml = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = ml(t[n])) && (a && (a += " "), a += r);
  return a;
};
function Gu(t, ...r) {
  let a, n, s, o = d;
  function d(b) {
    const i = r.reduce((u, m) => m(u), t());
    return a = Hu(i), n = a.cache.get, s = a.cache.set, o = c, c(b);
  }
  function c(b) {
    const i = n(b);
    if (i)
      return i;
    const u = Vu(b, a);
    return s(b, u), u;
  }
  return function() {
    return o(Uu.apply(null, arguments));
  };
}
const Et = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, fl = /^\[(?:([a-z-]+):)?(.+)\]$/i, Yu = /^\d+\/\d+$/, qu = /* @__PURE__ */ new Set(["px", "full", "screen"]), Xu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ju = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Qu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, eb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nr = (t) => Xr(t) || qu.has(t) || Yu.test(t), Rr = (t) => ra(t, "length", ib), Xr = (t) => !!t && !Number.isNaN(Number(t)), Fn = (t) => ra(t, "number", Xr), pa = (t) => !!t && Number.isInteger(Number(t)), tb = (t) => t.endsWith("%") && Xr(t.slice(0, -1)), Je = (t) => fl.test(t), Dr = (t) => Xu.test(t), rb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ab = (t) => ra(t, rb, pl), nb = (t) => ra(t, "position", pl), sb = /* @__PURE__ */ new Set(["image", "url"]), ob = (t) => ra(t, sb, db), lb = (t) => ra(t, "", cb), ha = () => !0, ra = (t, r, a) => {
  const n = fl.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, ib = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Zu.test(t) && !Ju.test(t)
), pl = () => !1, cb = (t) => Qu.test(t), db = (t) => eb.test(t), ub = () => {
  const t = Et("colors"), r = Et("spacing"), a = Et("blur"), n = Et("brightness"), s = Et("borderColor"), o = Et("borderRadius"), d = Et("borderSpacing"), c = Et("borderWidth"), b = Et("contrast"), i = Et("grayscale"), u = Et("hueRotate"), m = Et("invert"), p = Et("gap"), f = Et("gradientColorStops"), h = Et("gradientColorStopPositions"), v = Et("inset"), w = Et("margin"), k = Et("opacity"), g = Et("padding"), N = Et("saturate"), T = Et("scale"), M = Et("sepia"), L = Et("skew"), C = Et("space"), y = Et("translate"), _ = () => ["auto", "contain", "none"], E = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", Je, r], D = () => [Je, r], A = () => ["", Nr, Rr], $ = () => ["auto", Xr, Je], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], S = () => ["solid", "dashed", "dotted", "double", "none"], z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], I = () => ["", "0", Je], O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [Xr, Je];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ha],
      spacing: [Nr, Rr],
      blur: ["none", "", Dr, Je],
      brightness: j(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Dr, Je],
      borderSpacing: D(),
      borderWidth: A(),
      contrast: j(),
      grayscale: I(),
      hueRotate: j(),
      invert: I(),
      gap: D(),
      gradientColorStops: [t],
      gradientColorStopPositions: [tb, Rr],
      inset: R(),
      margin: R(),
      opacity: j(),
      padding: D(),
      saturate: j(),
      scale: j(),
      sepia: I(),
      skew: j(),
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
        aspect: ["auto", "square", "video", Je]
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
        columns: [Dr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: [...B(), Je]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        z: ["auto", pa, Je]
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
        flex: ["1", "auto", "initial", "none", Je]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: I()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: I()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pa, Je]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ha]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pa, Je]
        }, Je]
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
        "grid-rows": [ha]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pa, Je]
        }, Je]
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
        "auto-cols": ["auto", "min", "max", "fr", Je]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Je]
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
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Je, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Je, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Je, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Dr]
        }, Dr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Je, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Je, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Je, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Je, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Dr, Rr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ha]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Je]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Xr, Fn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nr, Je]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Je]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Je]
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
        "placeholder-opacity": [k]
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
        "text-opacity": [k]
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
        decoration: [...S(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Nr, Rr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Nr, Je]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Je]
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
        content: ["none", Je]
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
        "bg-opacity": [k]
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
        bg: [...B(), nb]
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
        bg: ["auto", "cover", "contain", ab]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ob]
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
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...S(), "hidden"]
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
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: S()
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
        outline: ["", ...S()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Nr, Je]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Nr, Rr]
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Nr, Rr]
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
        shadow: ["", "inner", "none", Dr, lb]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ha]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
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
        contrast: [b]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Dr, Je]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [i]
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
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [M]
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
        "backdrop-grayscale": [i]
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
        "backdrop-opacity": [k]
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
        "backdrop-sepia": [M]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Je]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: j()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Je]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: j()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Je]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pa, Je]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Je]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Je]
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
        "will-change": ["auto", "scroll", "contents", "transform", Je]
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
        stroke: [Nr, Rr, Fn]
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
}, bb = /* @__PURE__ */ Gu(ub);
function x(...t) {
  return bb(Lu(t));
}
const mb = "w-full h-8.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", fb = "w-full rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", pb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-primary)] hover:bg-[var(--abc-primary-hover)] active:bg-[var(--abc-primary-active)] px-3.5 py-1.5 text-xs font-medium text-[var(--abc-primary-fg)] transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none", hb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:border-[var(--abc-border-strong)] px-3.5 py-1.5 text-xs font-medium transition-all disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer select-none", gb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-danger)] hover:opacity-90 active:opacity-95 px-3.5 py-1.5 text-xs font-medium text-white transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none", vb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-sm,0.375rem)] bg-transparent text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer select-none", xb = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]", yb = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]", wb = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] overflow-hidden", Nb = "bg-[var(--abc-bg-muted)] border-b border-[var(--abc-border)] text-xs font-semibold text-[var(--abc-fg-secondary)]", kb = "px-4 py-3 text-xs font-semibold text-[var(--abc-fg-secondary)] whitespace-nowrap", Sb = "px-4 py-3 text-xs text-[var(--abc-fg-secondary)]", Cb = "flex flex-col sm:flex-row sm:items-center justify-between gap-3", Eb = "text-base font-bold text-[var(--abc-fg)] tracking-tight", Tb = "text-xs text-[var(--abc-fg-muted)] mt-0.5", Ib = "block text-xs font-medium text-[var(--abc-fg-secondary)] mb-1.5", nh = {
  input: mb,
  textarea: fb,
  button: pb,
  secondary: hb,
  dangerButton: gb,
  textButton: vb,
  panel: xb,
  filterCard: yb,
  tableCard: wb,
  tableHead: Nb,
  tableHeaderCell: kb,
  tableCell: Sb,
  pageHeader: Cb,
  pageTitle: Eb,
  pageSubTitle: Tb,
  label: Ib
};
function _b() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function _r(t, r = 200) {
  const [a, n] = H(t), s = _b();
  return t && !a && n(!0), we(() => {
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
function Vt({
  value: t,
  defaultValue: r,
  onChange: a
}) {
  const [n, s] = H(r), o = t !== void 0, d = o ? t : n, c = ce(d);
  c.current = d;
  const b = ce(a);
  b.current = a;
  const i = ge(
    (u) => {
      var p;
      const m = typeof u == "function" ? u(c.current) : u;
      o || s(m), (p = b.current) == null || p.call(b, m);
    },
    [o]
  );
  return [d, i];
}
function Mb(t) {
  const r = t ? `abc_draft_${t}` : "", a = ge(() => {
    if (!r || typeof window > "u") return null;
    try {
      const c = window.localStorage.getItem(r);
      return c ? JSON.parse(c) : null;
    } catch {
      return null;
    }
  }, [r]), [n, s] = H(() => !!a()), o = ge(
    (c) => {
      if (!(!r || typeof window > "u"))
        try {
          window.localStorage.setItem(r, JSON.stringify(c)), s(!0);
        } catch {
        }
    },
    [r]
  ), d = ge(() => {
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
const Xn = "#3b82f6", so = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  filterHighlightColor: Xn,
  density: "default"
};
function Ab(t, r = "default", a = []) {
  const n = t ? `abc_table_${t}` : "", s = t ? `table_settings_${t}` : "", [o, d] = H(() => {
    const w = {
      ...so,
      hiddenKeys: a,
      density: r
    };
    if (!n || typeof window > "u") return w;
    try {
      const k = window.localStorage.getItem(n);
      if (k) {
        const M = JSON.parse(k);
        return {
          hiddenKeys: Array.isArray(M.hiddenKeys) ? M.hiddenKeys : a,
          columnOrder: Array.isArray(M.columnOrder) ? M.columnOrder : [],
          columnWidths: M.columnWidths && typeof M.columnWidths == "object" ? M.columnWidths : {},
          columnFixed: M.columnFixed && typeof M.columnFixed == "object" ? M.columnFixed : {},
          searchVisible: M.searchVisible && typeof M.searchVisible == "object" ? M.searchVisible : {},
          filterHighlightColor: typeof M.filterHighlightColor == "string" && M.filterHighlightColor ? M.filterHighlightColor : Xn,
          density: M.density ?? r
        };
      }
      const g = s ? window.localStorage.getItem(s) : null;
      if (!g) return w;
      const N = JSON.parse(g), T = new Set(a);
      return N.columnVisible && typeof N.columnVisible == "object" && Object.entries(N.columnVisible).forEach(([M, L]) => {
        L === !1 ? T.add(M) : L === !0 && T.delete(M);
      }), {
        hiddenKeys: Array.from(T),
        columnOrder: Array.isArray(N.columnOrder) ? N.columnOrder : [],
        columnWidths: N.columnWidths && typeof N.columnWidths == "object" ? N.columnWidths : {},
        columnFixed: N.columnFixed && typeof N.columnFixed == "object" ? N.columnFixed : {},
        searchVisible: N.searchVisible && typeof N.searchVisible == "object" ? N.searchVisible : {},
        filterHighlightColor: typeof N.filterHighlightColor == "string" && N.filterHighlightColor ? N.filterHighlightColor : Xn,
        density: N.density ?? r
      };
    } catch {
      return w;
    }
  });
  we(() => {
    if (!(!n || typeof window > "u"))
      try {
        window.localStorage.setItem(n, JSON.stringify(o));
      } catch {
      }
  }, [n, o]);
  const c = ge((w) => {
    d((k) => ({
      ...k,
      hiddenKeys: k.hiddenKeys.includes(w) ? k.hiddenKeys.filter((g) => g !== w) : [...k.hiddenKeys, w]
    }));
  }, []), b = ge((w, k) => {
    d((g) => ({
      ...g,
      hiddenKeys: k ? [] : Array.from(new Set(w))
    }));
  }, []), i = ge(
    (w, k) => {
      d((g) => {
        const N = { ...g.columnFixed };
        return k === void 0 ? delete N[w] : N[w] = k, {
          ...g,
          columnFixed: N
        };
      });
    },
    []
  ), u = ge((w, k) => {
    d((g) => ({
      ...g,
      columnWidths: { ...g.columnWidths, [w]: Math.max(64, Math.round(k)) }
    }));
  }, []), m = ge((w) => {
    d((k) => ({ ...k, columnOrder: w }));
  }, []), p = ge((w, k) => {
    d((g) => ({
      ...g,
      searchVisible: { ...g.searchVisible, [w]: k }
    }));
  }, []), f = ge((w) => {
    d((k) => ({ ...k, density: w }));
  }, []), h = ge((w) => {
    d((k) => ({ ...k, filterHighlightColor: w }));
  }, []), v = ge(() => {
    if (s && typeof window < "u")
      try {
        window.localStorage.removeItem(s);
      } catch {
      }
    d({ ...so, hiddenKeys: a, density: r });
  }, [r, a, s]);
  return {
    settings: o,
    toggleColumnVisible: c,
    setAllColumnsVisible: b,
    setColumnFixed: i,
    setColumnWidth: u,
    setColumnOrder: m,
    setSearchFieldVisible: p,
    setDensity: f,
    setFilterHighlightColor: h,
    resetSettings: v
  };
}
const Rb = typeof window < "u" ? Na : we;
function Nn(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function Db(t) {
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
function On(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function $r({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: d = 8
}) {
  const { side: c, align: b } = Db(n), [i, u] = H(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: c,
    arrowOffset: 16,
    transformOrigin: On(c, b),
    positioned: !1
  })), m = ge(() => {
    if (typeof window > "u" || !r.current) return;
    const f = r.current.getBoundingClientRect(), h = a.current, v = h == null ? void 0 : h.getBoundingClientRect(), w = window.innerWidth || 1024, k = window.innerHeight || 768, g = d, N = h ? h.offsetWidth : 0, T = h ? h.offsetHeight : 0, M = N || (v == null ? void 0 : v.width) || (o ? f.width : 180), L = o ? Math.max(M, f.width) : M, C = T || (v == null ? void 0 : v.height) || 40;
    if (f.width === 0 && f.height === 0 && f.top === 0 && f.left === 0) {
      u({
        top: s,
        left: g,
        minWidth: o && f.width > 0 ? f.width : void 0,
        actualSide: c,
        arrowOffset: 16,
        transformOrigin: On(c, b),
        positioned: !0
      });
      return;
    }
    let y = c;
    if (c === "bottom") {
      const F = k - f.bottom - s - g, I = f.top - s - g;
      C > F && I > F && (y = "top");
    } else if (c === "top") {
      const F = f.top - s - g, I = k - f.bottom - s - g;
      C > F && I > F && (y = "bottom");
    } else if (c === "left") {
      const F = f.left - s - g, I = w - f.right - s - g;
      L > F && I > F && (y = "right");
    } else if (c === "right") {
      const F = w - f.right - s - g, I = f.left - s - g;
      L > F && I > F && (y = "left");
    }
    let _ = 0, E = 0;
    y === "bottom" || y === "top" ? (_ = y === "bottom" ? f.bottom + s : f.top - C - s, b === "start" ? E = f.left : b === "end" ? E = f.right - L : E = f.left + f.width / 2 - L / 2) : (E = y === "right" ? f.right + s : f.left - L - s, b === "start" ? _ = f.top : b === "end" ? _ = f.bottom - C : _ = f.top + f.height / 2 - C / 2);
    const R = Math.max(g, w - L - g), D = Math.max(g, k - C - g), A = Math.min(Math.max(g, E), R), $ = Math.min(Math.max(g, _), D), B = y === "top" || y === "bottom" ? Math.min(
      Math.max(10, f.left + f.width / 2 - A),
      Math.max(10, L - 10)
    ) : Math.min(
      Math.max(10, f.top + f.height / 2 - $),
      Math.max(10, C - 10)
    ), S = On(y, b), z = o ? Math.round(f.width) : void 0;
    u((F) => F.positioned && Math.abs(F.top - $) < 0.5 && Math.abs(F.left - A) < 0.5 && F.minWidth === z && F.actualSide === y && Math.abs(F.arrowOffset - B) < 0.5 && F.transformOrigin === S ? F : {
      top: Math.round($ * 10) / 10,
      left: Math.round(A * 10) / 10,
      minWidth: z,
      actualSide: y,
      arrowOffset: Math.round(B),
      transformOrigin: S,
      positioned: !0
    });
  }, [r, a, c, b, s, o, d]);
  Rb(() => {
    if (!t) {
      u((h) => h.positioned ? { ...h, positioned: !1 } : h);
      return;
    }
    m();
    const f = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(m) : 0;
    return () => {
      f && typeof window < "u" && window.cancelAnimationFrame(f);
    };
  }, [t, m]), we(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", m, { passive: !0 }), window.addEventListener("scroll", m, !0);
    let f = null;
    return typeof ResizeObserver < "u" && (f = new ResizeObserver(() => m()), a.current && f.observe(a.current), r.current && f.observe(r.current)), () => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), f == null || f.disconnect();
    };
  }, [t, m, a, r]);
  const p = t ? Nn(r.current) : null;
  return {
    style: {
      position: "fixed",
      top: `${i.top}px`,
      left: `${i.left}px`,
      minWidth: i.minWidth ? `${i.minWidth}px` : void 0,
      transformOrigin: i.transformOrigin,
      // 尚未完成首帧同步坐标测算前先隐藏，防止残影在 (0, 0) 或上次位置闪现一帧
      visibility: t && !i.positioned ? "hidden" : void 0
    },
    actualSide: i.actualSide,
    arrowOffset: i.arrowOffset,
    portalContainer: p,
    update: m
  };
}
const nn = {
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
}, sn = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  default: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm",
  icon: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  "icon-sm": "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0"
}, Zn = {
  xs: "h-[var(--abc-control-h-xs)] w-[var(--abc-control-h-xs)] p-0",
  sm: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  default: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  md: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  lg: "h-[var(--abc-control-h-lg)] w-[var(--abc-control-h-lg)] p-0"
};
function sh({
  variant: t = "primary",
  size: r = "sm",
  iconOnly: a = !1,
  className: n
} = {}) {
  const s = nn[t] || nn.primary, o = a ? Zn[r] || Zn.sm : sn[r] || sn.sm;
  return x(
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
    "disabled:opacity-45 disabled:cursor-not-allowed",
    s,
    o,
    n
  );
}
const Le = pt.forwardRef(
  ({
    className: t,
    variant: r = "primary",
    size: a,
    motion: n,
    loading: s = !1,
    loadingText: o,
    disabled: d,
    icon: c,
    leftIcon: b,
    rightIcon: i,
    iconOnly: u = !1,
    block: m = !1,
    asChild: p = !1,
    type: f,
    children: h,
    ...v
  }, w) => {
    const k = a === "icon" || a === "icon-sm", T = je(k ? void 0 : a === "default" ? "sm" : a, "sm"), M = Be(n), L = !!(d || s), C = b ?? c, y = x(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      nn[r] || nn.primary,
      k ? sn[a] : u ? Zn[T] : sn[T],
      m && "w-full",
      t
    );
    if (p && pt.isValidElement(h)) {
      const _ = h;
      return pt.cloneElement(_, {
        className: x(y, _.props.className),
        ...v
      });
    }
    return /* @__PURE__ */ l(
      "button",
      {
        ref: w,
        type: f,
        disabled: L,
        "data-motion": M,
        className: y,
        ...v,
        children: [
          s ? /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : C && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: C }),
          s && o !== void 0 ? o : h,
          !s && i && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: i })
        ]
      }
    );
  }
);
Le.displayName = "Button";
const ys = os(null);
function Lb() {
  return Ta(ys);
}
const Bb = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-3xl",
  "2xl": "max-w-4xl",
  "3xl": "max-w-5xl",
  "4xl": "max-w-6xl",
  "5xl": "max-w-7xl"
}, dr = ({
  open: t,
  visible: r,
  isOpen: a,
  onClose: n,
  onCancel: s,
  onOpenChange: o,
  closable: d = !0,
  closeDisabled: c = !1,
  closeLabel: b = "关闭",
  title: i,
  description: u,
  children: m,
  footer: p,
  size: f,
  maxWidth: h = "md",
  width: v,
  closeOnClickModal: w = !0,
  draggable: k = !0,
  fullscreenable: g = !0,
  fullscreen: N,
  onFullscreenChange: T,
  motion: M,
  className: L
}) => {
  const C = t ?? r ?? a ?? !1, y = Be(M), { isMounted: _, isVisible: E } = _r(C, y === "none" ? 0 : 180), R = Tt(), D = Tt(), A = ce(null), $ = ce(null), B = ce(!1), S = ge(() => {
    c || (n ? n() : s ? s() : o && o(!1));
  }, [c, n, s, o]), z = ce(S);
  z.current = S;
  const F = !!(i !== void 0 || g), [I, O] = H(!1), j = N !== void 0 ? N : I, [U, K] = H({ x: 0, y: 0 }), q = ce(
    null
  ), G = ge(() => {
    const V = !j;
    N === void 0 && O(V), T == null || T(V);
  }, [j, N, T]);
  we(() => {
    if (!_) return;
    const V = A.current;
    if (!V) return;
    let de = !1;
    if (typeof V.showModal == "function")
      if (V.open)
        de = !0;
      else
        try {
          V.showModal(), de = !0;
        } catch {
          V.setAttribute("open", "");
        }
    else
      V.setAttribute("open", "");
    const ke = (fe) => {
      fe.preventDefault(), z.current();
    }, te = (fe) => {
      fe.key === "Escape" && (fe.stopPropagation(), z.current());
    };
    return V.addEventListener("cancel", ke), (!de || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", te), () => {
      if (V.removeEventListener("cancel", ke), window.removeEventListener("keydown", te), V.open && typeof V.close == "function")
        try {
          V.close();
        } catch {
          V.removeAttribute("open");
        }
    };
  }, [_]), we(() => {
    C || (K({ x: 0, y: 0 }), N === void 0 && O(!1));
  }, [C, N]);
  const W = (V) => {
    var fe;
    const de = V.target;
    if ((fe = de == null ? void 0 : de.closest) != null && fe.call(de, "[data-abc-floating]"))
      return !1;
    const ke = $.current;
    if (!ke) return !1;
    const te = ke.getBoundingClientRect();
    return te.width === 0 && te.height === 0 ? !ke.contains(V.target) : V.clientX < te.left || V.clientX > te.right || V.clientY < te.top || V.clientY > te.bottom;
  }, X = (V) => {
    if (!k || j || V.button !== 0 || V.target.closest('button, a, input, [role="button"]')) return;
    q.current = {
      startX: V.clientX,
      startY: V.clientY,
      origX: U.x,
      origY: U.y
    };
    const de = (te) => {
      q.current && K({
        x: q.current.origX + (te.clientX - q.current.startX),
        y: q.current.origY + (te.clientY - q.current.startY)
      });
    }, ke = () => {
      q.current = null, window.removeEventListener("mousemove", de), window.removeEventListener("mouseup", ke);
    };
    window.addEventListener("mousemove", de), window.addEventListener("mouseup", ke);
  };
  if (!_ || typeof document > "u") return null;
  const se = f || h, P = Bb[se] || se;
  return cr(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: A,
        "data-motion": y,
        "aria-labelledby": R,
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
          padding: j ? 0 : "1rem",
          border: "none",
          backgroundColor: "rgba(2, 6, 23, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1100
        },
        onPointerDown: (V) => {
          B.current = w && W(V);
        },
        onPointerUp: (V) => {
          w && B.current && W(V) && z.current(), B.current = !1;
        },
        onClick: (V) => {
          w && V.target === A.current && !B.current && z.current();
        },
        className: x(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          j && "p-0",
          y !== "none" && (E ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: $,
            "data-dialog-panel": "",
            "data-motion": y,
            style: {
              width: !j && v ? v : void 0,
              transform: !j && (U.x !== 0 || U.y !== 0) ? `translate3d(${U.x}px, ${U.y}px, 0)` : void 0
            },
            className: x(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              j ? "h-dvh w-dvw rounded-none" : x("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !v && P),
              y !== "none" && (E ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              L
            ),
            children: /* @__PURE__ */ l(ys.Provider, { value: { isOpen: C, handleClose: S, closeDisabled: c, hasHeader: F, titleId: R }, children: [
              (i !== void 0 || g) && /* @__PURE__ */ l(
                "div",
                {
                  onMouseDown: X,
                  onDoubleClick: g ? G : void 0,
                  className: x(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    k && !j && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
                      i && /* @__PURE__ */ e("h2", { id: R, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: i }),
                      u && /* @__PURE__ */ e("p", { id: D, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: u })
                    ] }),
                    /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1", children: [
                      g && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": j ? "还原窗口" : "全屏",
                          title: j ? "退出全屏" : "全屏显示",
                          onClick: (V) => {
                            V.stopPropagation(), G();
                          },
                          onMouseDown: (V) => V.stopPropagation(),
                          onPointerDown: (V) => V.stopPropagation(),
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: j ? /* @__PURE__ */ e(ls, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": b,
                          title: b,
                          disabled: c,
                          onClick: (V) => {
                            V.stopPropagation(), S();
                          },
                          onMouseDown: (V) => V.stopPropagation(),
                          onPointerDown: (V) => V.stopPropagation(),
                          className: x(
                            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                            c && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
                          ),
                          children: /* @__PURE__ */ e(Ct, { className: "h-4 w-4" })
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
}, Pb = dr;
function ws({
  className: t,
  children: r,
  closeLabel: a = "关闭",
  closeDisabled: n,
  closable: s,
  onClose: o,
  ...d
}) {
  const c = Ta(ys), b = s ?? (c ? !c.hasHeader : !1), i = n ?? (c == null ? void 0 : c.closeDisabled) ?? !1;
  return /* @__PURE__ */ l("div", { "data-slot": "dialog-content", className: x("relative space-y-4", t), ...d, children: [
    b && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": a,
        title: a,
        disabled: i,
        onClick: (u) => {
          u.stopPropagation(), o ? o() : c && c.handleClose();
        },
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        className: x(
          "absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10",
          i && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
        ),
        children: /* @__PURE__ */ e(Ct, { className: "h-4 w-4" })
      }
    ),
    r
  ] });
}
function Ns({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: x("flex flex-col space-y-1.5 text-left", t), ...a, children: r });
}
function ks({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: x("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...a, children: r });
}
function Ss({ className: t, children: r, id: a, ...n }) {
  const s = Lb();
  return /* @__PURE__ */ e("h2", { id: a ?? (s == null ? void 0 : s.titleId), "data-slot": "dialog-title", className: x("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...n, children: r });
}
function Cs({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: x("text-xs text-[var(--abc-fg-muted)]", t), ...a, children: r });
}
const on = /* @__PURE__ */ new Set();
let hl = null, xa = 0;
function gl(t) {
  hl = t, on.forEach((r) => r(t));
}
function zb(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function ln(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (xa === 0 && typeof window < "u" && on.size === 0) {
    const s = r.content ?? r.message, o = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    gl({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: zb(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const oh = ln;
function lh() {
  return ln;
}
const vl = () => {
  const [t, r] = H(!1), [a, n] = H(() => hl), [s, o] = H(!1);
  if (we(() => {
    xa += 1, r(xa === 1);
    const i = (u) => n(u);
    return on.add(i), () => {
      xa = Math.max(0, xa - 1), on.delete(i);
    };
  }, []), !t || !a) return null;
  const d = async (b) => {
    var i;
    if (!(!a || s)) {
      if (b && a.onConfirm)
        try {
          o(!0), await a.onConfirm();
        } finally {
          o(!1);
        }
      else b || (i = a.onCancel) == null || i.call(a);
      a.resolve(b), gl(null);
    }
  }, c = a.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(mr, { className: "h-4 w-4" }) }) : a.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e(Ir, { className: "h-4 w-4" }) }) : a.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(xr, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(ea, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    dr,
    {
      open: !!a,
      onClose: () => d(!1),
      title: a.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ l(Ue, { children: [
        /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: a.resolvedTone === "danger",
            onClick: () => d(!1),
            children: a.cancelText
          }
        ),
        /* @__PURE__ */ e(
          Le,
          {
            variant: a.resolvedTone === "danger" ? "danger" : a.resolvedTone === "warning" ? "warning" : a.resolvedTone === "success" ? "success" : "primary",
            loading: s,
            autoFocus: a.resolvedTone !== "danger",
            onClick: () => d(!0),
            children: a.confirmText
          }
        )
      ] }),
      children: /* @__PURE__ */ l("div", { className: "flex items-start gap-3.5 py-1", children: [
        c,
        /* @__PURE__ */ e("div", { className: "pt-1 text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: a.message })
      ] })
    }
  );
}, ih = ({ children: t }) => /* @__PURE__ */ l(Ue, { children: [
  t,
  /* @__PURE__ */ e(vl, {})
] });
let nr = [];
const Jn = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Map();
let jb = 0;
function Es() {
  const t = [...nr];
  Jn.forEach((r) => r(t));
}
function Fb(t) {
  const r = kr.get(t);
  if (!r || r.isPaused || r.remaining <= 0) return;
  r.timerId && (clearTimeout(r.timerId), r.timerId = void 0);
  const a = Date.now() - r.startedAt;
  r.remaining = Math.max(0, r.remaining - a), r.isPaused = !0;
}
function Ob(t) {
  const r = kr.get(t);
  !r || !r.isPaused || r.remaining <= 0 || (r.isPaused = !1, r.startedAt = Date.now(), typeof window < "u" && (r.timerId = window.setTimeout(r.onExpire, r.remaining)));
}
function Ts(t) {
  var n;
  const r = kr.get(t);
  r != null && r.timerId && clearTimeout(r.timerId), kr.delete(t);
  const a = nr.find((s) => s.id === t);
  a && ((n = a.onClose) == null || n.call(a)), nr = nr.filter((s) => s.id !== t), Es();
}
function $b() {
  kr.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), kr.clear(), nr.forEach((t) => {
    var r;
    return (r = t.onClose) == null ? void 0 : r.call(t);
  }), nr = [], Es();
}
function Ur(t, r, a) {
  const n = `abc_toast_${++jb}_${Date.now()}`;
  let s = {};
  r !== null && typeof r == "object" && !pt.isValidElement(r) ? s = r : s = { message: r };
  const o = s.tone ?? t, d = o === "danger" ? "error" : o, c = s.content ?? s.message ?? s.description ?? "", b = d === "error" ? 4200 : d === "warning" ? 3600 : d === "loading" ? 0 : 3e3, i = s.duration ?? a ?? b, u = {
    ...s,
    id: n,
    tone: d,
    message: c,
    duration: i,
    createdAt: Date.now()
  };
  if (nr.length >= 30 && (nr.slice(0, nr.length - 29).forEach((p) => {
    const f = kr.get(p.id);
    f != null && f.timerId && clearTimeout(f.timerId), kr.delete(p.id);
  }), nr = nr.slice(-29)), nr = [...nr, u], Es(), i > 0 && typeof window < "u") {
    const m = {
      startedAt: Date.now(),
      remaining: i,
      isPaused: !1,
      onExpire: () => Ts(n)
    };
    m.timerId = window.setTimeout(m.onExpire, i), kr.set(n, m);
  }
  return n;
}
const Is = {
  success: (t, r) => Ur("success", t, r),
  error: (t, r) => Ur("error", t, r ?? 4200),
  info: (t, r) => Ur("info", t, r),
  warning: (t, r) => Ur("warning", t, r ?? 3600),
  loading: (t, r = 0) => Ur("loading", t, r),
  push: (t, r, a) => Ur(t, r, a),
  dismiss: (t) => Ts(t),
  clear: () => $b()
}, ch = Is, oo = {
  success: /* @__PURE__ */ e(xr, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(Er, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(Er, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(Ir, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(Ia, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(Jt, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, Kb = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Hb = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, Wb = ({
  item: t,
  resolvedSize: r,
  resolvedMotion: a,
  closable: n,
  pauseOnHover: s,
  toastClassName: o,
  toastStyle: d,
  onDismiss: c
}) => {
  const b = t.closable ?? n, i = !!t.title;
  return /* @__PURE__ */ l(
    "div",
    {
      role: t.tone === "error" || t.tone === "warning" ? "alert" : "status",
      "aria-live": t.tone === "error" ? "assertive" : "polite",
      "data-motion": a,
      onMouseEnter: () => {
        s && Fb(t.id);
      },
      onMouseLeave: () => {
        s && Ob(t.id);
      },
      style: { ...d, ...t.style },
      className: x(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        i ? "items-start" : "items-center",
        Kb[r],
        a !== "none" && "abc-animate-popover-in",
        o,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: x("shrink-0", i && "mt-0.5"), children: t.icon ?? oo[t.tone] ?? oo.info }),
        /* @__PURE__ */ l("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          t.title && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)] leading-snug", children: t.title }),
          t.message && /* @__PURE__ */ e(
            "div",
            {
              className: x(
                "leading-relaxed break-words",
                i ? "text-xs text-[var(--abc-fg-secondary)]" : "font-medium"
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
            children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, Vb = ({
  position: t = "top-right",
  size: r,
  motion: a,
  maxCount: n = 5,
  pauseOnHover: s = !0,
  newestOnTop: o = !1,
  closable: d = !0,
  className: c,
  style: b,
  toastClassName: i,
  toastStyle: u,
  container: m,
  containerId: p,
  renderItem: f,
  items: h,
  onDismiss: v
}) => {
  const [w, k] = H(() => [...nr]), g = je(r, "sm"), N = Be(a);
  we(() => {
    if (h !== void 0) return;
    const E = (R) => k(R);
    return Jn.add(E), () => {
      Jn.delete(E);
    };
  }, [h]);
  const M = (h ?? w).filter((E) => !(E.containerId && p && E.containerId !== p || E.position && E.position !== t));
  let L = M;
  o ? L = [...M].reverse().slice(0, n) : n > 0 && (L = M.slice(-n));
  const C = (E) => {
    v ? v(E) : Ts(E);
  };
  if (typeof document > "u" || L.length === 0)
    return null;
  const y = typeof m == "function" ? m() : m !== void 0 ? m : typeof document < "u" ? document.body : null;
  if (!y) return null;
  const _ = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: x(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        Hb[t],
        c
      ),
      style: b,
      children: L.map((E) => f ? /* @__PURE__ */ e(pt.Fragment, { children: f(E, () => C(E.id)) }, E.id) : /* @__PURE__ */ e(
        Wb,
        {
          item: E,
          resolvedSize: g,
          resolvedMotion: N,
          closable: d,
          pauseOnHover: s,
          toastClassName: i,
          toastStyle: u,
          onDismiss: C
        },
        E.id
      ))
    }
  );
  return cr(_, y);
}, Ub = (t) => /* @__PURE__ */ e(Vb, { ...t }), _s = "abc_design_theme_v1", cn = "color-scheme", Ms = os(null);
function lo(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(cn), n = window.localStorage.getItem(_s), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, d = ["xs", "sm", "md", "lg"], c = ["none", "subtle", "smooth", "spring"], b = s.componentSize && d.includes(s.componentSize) ? s.componentSize : t.componentSize, i = s.motion && c.includes(s.motion) ? s.motion : t.motion ?? "smooth";
    return {
      mode: o,
      brand: s.brand ?? t.brand,
      customBrandColor: s.customBrandColor ?? t.customBrandColor,
      density: s.density ?? t.density,
      radius: s.radius ?? t.radius,
      fontScale: s.fontScale ?? t.fontScale ?? "md",
      visualMode: s.visualMode ?? t.visualMode ?? "default",
      componentSize: b,
      motion: i
    };
  } catch {
    return t;
  }
}
function Gb(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(cn) : window.localStorage.setItem(cn, t.mode), window.localStorage.setItem(_s, JSON.stringify(t));
    } catch {
    }
}
const dh = ({
  children: t,
  defaultTheme: r,
  defaultPageTransition: a = "fade-slide",
  watermarkText: n,
  defaultWatermarkEnabled: s = !1,
  persist: o = !0,
  toastAdapter: d,
  toastContainerProps: c,
  uploadAdapter: b,
  dictAdapter: i,
  permissionAdapter: u,
  captchaAdapter: m,
  iconRegistry: p = {},
  defaultDrawerCascadeMode: f = "adjacent"
}) => {
  const h = oe(
    () => ({ ...Ht, ...r }),
    [r]
  ), [v, w] = H(() => lo(h, o)), [k, g] = H(
    () => Yr(v.mode)
  ), [N, T] = H(a), [M, L] = H(s);
  we(() => {
    const O = Gt(v);
    g(O), Gb(v, o);
  }, [v, o]), we(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const O = window.matchMedia("(prefers-color-scheme: dark)"), j = () => {
      if (v.mode === "system") {
        const U = Gt(v);
        g(U);
      }
    };
    return O.addEventListener("change", j), () => O.removeEventListener("change", j);
  }, [v]), we(() => {
    if (!o || typeof window > "u") return;
    const O = (j) => {
      (j.key === _s || j.key === cn) && w(lo(h, !0));
    };
    return window.addEventListener("storage", O), () => window.removeEventListener("storage", O);
  }, [o, h]);
  const C = ge(
    (O, j) => {
      ku(() => {
        w((U) => {
          const K = { ...U, mode: O };
          return Gt(K), K;
        });
      }, j);
    },
    []
  ), y = ge(
    (O) => {
      const U = Yr(v.mode) === "dark" ? "light" : "dark", K = Yr("system");
      C(U === K ? "system" : U, O);
    },
    [v.mode, C]
  ), _ = ge((O) => {
    w((j) => ({ ...j, brand: O, customBrandColor: void 0 }));
  }, []), E = ge((O) => {
    w((j) => ({ ...j, customBrandColor: O }));
  }, []), R = ge((O) => {
    w((j) => ({ ...j, density: O }));
  }, []), D = ge((O) => {
    w((j) => ({ ...j, radius: O }));
  }, []), A = ge((O) => {
    w((j) => ({ ...j, fontScale: O }));
  }, []), $ = ge((O) => {
    w((j) => ({ ...j, visualMode: O }));
  }, []), B = ge((O) => {
    w((j) => ({ ...j, componentSize: O }));
  }, []), S = ge((O) => {
    w((j) => ({ ...j, motion: O }));
  }, []), z = ge((O) => {
    w((j) => ({ ...j, ...O }));
  }, []), F = ge(() => {
    w(h), T(a), L(s);
  }, [h, a, s]), I = oe(
    () => ({
      theme: v,
      resolvedTheme: k,
      pageTransition: N,
      watermarkText: n,
      watermarkEnabled: M,
      setThemeMode: C,
      toggleTheme: y,
      setBrand: _,
      setCustomBrandColor: E,
      setDensity: R,
      setRadius: D,
      setFontScale: A,
      setVisualMode: $,
      setComponentSize: B,
      setMotion: S,
      updateTheme: z,
      setPageTransition: T,
      setWatermarkEnabled: L,
      resetTheme: F,
      toast: d ?? Is,
      uploadAdapter: b,
      dictAdapter: i,
      permissionAdapter: u,
      captchaAdapter: m,
      iconRegistry: p,
      defaultDrawerCascadeMode: f
    }),
    [
      v,
      k,
      N,
      n,
      M,
      C,
      y,
      _,
      E,
      R,
      D,
      A,
      $,
      B,
      S,
      z,
      F,
      d,
      b,
      i,
      u,
      m,
      p,
      f
    ]
  );
  return /* @__PURE__ */ l(Ms.Provider, { value: I, children: [
    t,
    !d && /* @__PURE__ */ e(Ub, { ...c }),
    /* @__PURE__ */ e(vl, {})
  ] });
};
function Yb() {
  return Ta(Ms);
}
function At() {
  const t = Ta(Ms);
  return t || {
    theme: Ht,
    resolvedTheme: Yr(Ht.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Gt({ ...Ht, mode: r });
    },
    toggleTheme: () => {
      const r = Yr(Ht.mode) === "dark" ? "light" : "dark";
      Gt({ ...Ht, mode: r });
    },
    setBrand: (r) => {
      Gt({ ...Ht, brand: r });
    },
    setCustomBrandColor: (r) => {
      Gt({ ...Ht, customBrandColor: r });
    },
    setDensity: (r) => {
      Gt({ ...Ht, density: r });
    },
    setRadius: (r) => {
      Gt({ ...Ht, radius: r });
    },
    setFontScale: (r) => {
      Gt({ ...Ht, fontScale: r });
    },
    setVisualMode: (r) => {
      Gt({ ...Ht, visualMode: r });
    },
    setComponentSize: (r) => {
      Gt({ ...Ht, componentSize: r });
    },
    setMotion: (r) => {
      Gt({ ...Ht, motion: r });
    },
    updateTheme: (r) => {
      Gt({ ...Ht, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Gt(Ht);
    },
    toast: Is,
    iconRegistry: {}
  };
}
function je(t, r = "sm") {
  const { theme: a } = At();
  return (t === "default" ? void 0 : t) ?? a.componentSize ?? r;
}
function Be(t) {
  const { theme: r } = At();
  return t ?? r.motion ?? "smooth";
}
function qb(t) {
  const r = At();
  return t ?? r.defaultDrawerCascadeMode ?? "adjacent";
}
function uh(t = null) {
  const [r, a] = H([t]), n = r[r.length - 1] ?? null, s = r.length > 1, o = ge((b) => {
    a((i) => [...i, b]);
  }, []), d = ge(() => {
    a((b) => b.length > 1 ? b.slice(0, -1) : b);
  }, []), c = ge(() => {
    a([null]);
  }, []);
  return {
    currentCursor: n,
    hasPrev: s,
    pushCursor: o,
    popCursor: d,
    resetCursor: c
  };
}
const ga = {
  Activity: Qd,
  AlertCircle: Er,
  AlertOctagon: Jd,
  AlertTriangle: Ir,
  BarChart2: Zd,
  BarChart3: Xd,
  Bell: qd,
  BellRing: Yd,
  BookMarked: Gd,
  Boxes: Ud,
  Building2: Xo,
  Calendar: ps,
  CalendarCheck: Vd,
  Camera: Wd,
  Check: St,
  CheckCircle: qo,
  CheckCircle2: xr,
  CheckSquare: Hd,
  CircleDollarSign: Kd,
  Clock: tn,
  Coins: $d,
  Compass: Yo,
  Copy: Or,
  Cpu: Od,
  CreditCard: Fd,
  Database: jd,
  Download: Gn,
  Edit: zd,
  Edit3: Za,
  Eye: ta,
  FileCheck: Pd,
  FileClock: Bd,
  FileSpreadsheet: Ld,
  FileText: Go,
  Flame: Dd,
  Folder: Rd,
  FolderGit2: Ad,
  FolderOpen: Md,
  FolderPlus: _d,
  FolderTree: Uo,
  Globe: Id,
  Globe2: Td,
  Handshake: Ed,
  HardDrive: Cd,
  Headphones: Sd,
  HelpCircle: ea,
  History: kd,
  Home: fs,
  Image: Vo,
  Info: Ia,
  Key: Nd,
  KeyRound: Wo,
  Layers: ms,
  LayoutDashboard: wd,
  LayoutGrid: yd,
  LineChart: xd,
  Link2: vd,
  ListChecks: gd,
  ListOrdered: hd,
  Lock: pd,
  MapPin: fd,
  Megaphone: md,
  Menu: Ho,
  MessageCircle: bd,
  MessageSquare: ud,
  MessageSquareQuote: dd,
  MessageSquareText: cd,
  MessagesSquare: id,
  Minus: yn,
  Monitor: bs,
  MoreHorizontal: us,
  Network: ld,
  Package: od,
  Palette: ds,
  PanelLeft: sd,
  PanelTop: nd,
  Pause: ad,
  Phone: rd,
  PhoneCall: td,
  PieChart: ed,
  Play: Ko,
  Plus: xn,
  PlusCircle: Qc,
  Radio: Jc,
  Receipt: Zc,
  RefreshCw: Fr,
  RotateCcw: lr,
  RotateCw: vn,
  ScrollText: Xc,
  Search: Pt,
  Send: qc,
  Server: Yc,
  Settings: Gc,
  Share: Uc,
  Share2: Vc,
  Shield: Wc,
  ShieldAlert: gn,
  ShieldCheck: cs,
  ShoppingBag: Hc,
  ShoppingCart: Kc,
  Sliders: $c,
  SlidersHorizontal: Un,
  Smartphone: Oc,
  Sparkles: _a,
  Star: Fc,
  StarOff: jc,
  Store: zc,
  Tag: Pc,
  Tags: Bc,
  Terminal: Lc,
  Ticket: Dc,
  Timer: Rc,
  Trash: Ac,
  Trash2: mr,
  TrendingUp: Mc,
  Unlock: _c,
  Upload: hn,
  User: Ic,
  UserCheck: Tc,
  UserCog: Ec,
  Users: Cc,
  Video: Sc,
  Wallet: kc,
  Wrench: Nc,
  X: Ct,
  XCircle: wc,
  Zap: yc
}, $n = {
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
}, io = [
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
function Xb(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const xl = {};
function bh(t) {
  Object.assign(xl, t);
}
const gr = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (r) {
    const m = r.toLowerCase();
    for (const p of io)
      if (p.keywords.some((f) => m.includes(f))) {
        const f = ga[p.iconName];
        if (f)
          return /* @__PURE__ */ e(f, { size: a, strokeWidth: n, className: x("shrink-0", s) });
      }
  }
  const d = (t || "").replace(/^el-icon-/, "").trim(), c = d.replace(/^s-/, ""), b = $n[d] ?? $n[c] ?? $n[t];
  let i = (o == null ? void 0 : o[d]) ?? xl[d] ?? (b ? ga[b] : void 0) ?? ga[d] ?? (d ? ga[Xb(d)] : void 0);
  if (!i && d) {
    const m = d.toLowerCase();
    for (const p of io)
      if (p.keywords.some((f) => m.includes(f))) {
        i = ga[p.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(i ?? Yo, { size: a, strokeWidth: n, className: x("shrink-0", s) });
}, yl = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Zb = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  default: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, yr = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", kt = pt.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    prefix: o,
    prefixIcon: d,
    suffix: c,
    suffixIcon: b,
    allowClear: i,
    clearable: u,
    passwordToggle: m = !0,
    showPasswordLabel: p,
    hidePasswordLabel: f,
    showCount: h = !1,
    onClear: v,
    invalid: w = !1,
    id: k,
    type: g = "text",
    value: N,
    defaultValue: T,
    maxLength: M,
    onChange: L,
    disabled: C,
    readOnly: y,
    className: _,
    wrapperClassName: E,
    ...R
  }, D) => {
    const A = je(t, "sm"), $ = Be(r), B = Tt(), S = k || B, z = ce(null);
    pn(D, () => z.current, []);
    const F = N !== void 0, [I, O] = H(
      () => T != null ? String(T) : ""
    ), [j, U] = H(!1), q = g === "password" && m !== !1, G = q && j ? "text" : g, X = (F ? String(N ?? "") : I).length, se = X > 0, P = !!((i ?? u) && se && !C && !y), V = !!(w || n), de = o ?? d, ke = c ?? b, te = (Ee) => {
      F || O(Ee.target.value), L == null || L(Ee);
    }, fe = ge(
      (Ee) => {
        if (Ee.preventDefault(), Ee.stopPropagation(), C || y) return;
        F || O(""), v == null || v();
        const _e = z.current;
        if (_e && (_e.value = "", _e.focus()), L) {
          const Z = _e ?? { value: "" };
          L({
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
      [C, y, F, v, L]
    ), ve = (P ? 1 : 0) + (q ? 1 : 0) + (ke ? 1 : 0), ue = ve >= 3 ? "pr-20" : ve === 2 ? "pr-14" : ve === 1 ? "pr-9" : "pr-3", Ne = /\bw-(?!full\b)\S+/.test(_ || ""), Ie = /* @__PURE__ */ l(
      "div",
      {
        className: x(
          "relative flex items-center",
          !Ne && "w-full",
          E
        ),
        children: [
          de && /* @__PURE__ */ e(
            "div",
            {
              className: x(
                "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
                A === "xs" ? "left-2 [&>svg]:h-3.5 [&>svg]:w-3.5" : "left-2.5 [&>svg]:h-4 [&>svg]:w-4"
              ),
              children: de
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              ref: z,
              id: S,
              type: G,
              value: N,
              defaultValue: T,
              maxLength: M,
              onChange: te,
              disabled: C,
              readOnly: y,
              "data-motion": $,
              "aria-invalid": V || void 0,
              className: x(
                yr,
                yl[A],
                de ? A === "xs" ? "pl-7" : "pl-8" : A === "xs" ? "pl-2" : "pl-3",
                ue,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                G === "number" && ve > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                V && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                C && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                _
              ),
              ...R
            }
          ),
          (P || q || ke) && /* @__PURE__ */ l("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            P && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (Ee) => Ee.preventDefault(),
                onClick: fe,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
              }
            ),
            q && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: C,
                "data-testid": "password-toggle",
                "aria-label": j ? f ?? "隐藏密码" : p ?? "显示密码",
                title: j ? f ?? "隐藏密码" : p ?? "显示密码",
                onMouseDown: (Ee) => Ee.preventDefault(),
                onClick: (Ee) => {
                  Ee.preventDefault(), Ee.stopPropagation(), !C && U((_e) => !_e);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: j ? /* @__PURE__ */ e(Zo, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ta, { className: "h-3.5 w-3.5" })
              }
            ),
            ke && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: ke })
          ] })
        ]
      }
    );
    return !a && !n && !s && !h ? Ie : /* @__PURE__ */ l("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: S,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      Ie,
      (n || s || h) && /* @__PURE__ */ l("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        h && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: M !== void 0 ? `${X}/${M}` : X
          }
        )
      ] })
    ] });
  }
);
kt.displayName = "Input";
const kn = ({
  value: t,
  defaultValue: r,
  onChange: a,
  min: n,
  max: s,
  step: o = 1,
  size: d,
  motion: c,
  disabled: b = !1,
  placeholder: i,
  invalid: u = !1,
  className: m
}) => {
  const p = je(d, "sm"), f = Be(c), h = Tt(), [v, w] = H(r ?? null), k = t !== void 0 ? t : v, g = (N) => {
    let T = N;
    T !== null && Number.isFinite(T) ? (n !== void 0 && (T = Math.max(n, T)), s !== void 0 && (T = Math.min(s, T))) : T = null, t === void 0 && w(T), a == null || a(T);
  };
  return /* @__PURE__ */ l(
    "div",
    {
      "data-motion": f,
      className: x(
        "inline-flex w-full items-center overflow-hidden",
        yr,
        yl[p],
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
            disabled: b || n !== void 0 && (k ?? 0) <= n,
            onClick: () => g((k ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(yn, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: h,
            type: "number",
            value: k ?? "",
            min: n,
            max: s,
            step: o,
            disabled: b,
            placeholder: i,
            onChange: (N) => {
              const T = N.target.value;
              g(T === "" ? null : Number(T));
            },
            className: "h-full w-full min-w-0 flex-1 bg-transparent px-2.5 text-center font-mono tabular-nums focus:outline-none"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "增加数值",
            disabled: b || s !== void 0 && (k ?? 0) >= s,
            onClick: () => g((k ?? 0) + o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(xn, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Ma = pt.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    showCount: o = !1,
    invalid: d = !1,
    mono: c = !1,
    id: b,
    value: i,
    defaultValue: u,
    maxLength: m,
    onChange: p,
    rows: f = 3,
    className: h,
    ...v
  }, w) => {
    const k = je(t, "sm"), g = Be(r), N = Tt(), T = b || N, [M, L] = H(
      () => String(u ?? "").length
    ), C = i !== void 0 ? String(i ?? "").length : M, y = !!(d || n), E = /* @__PURE__ */ e(
      "textarea",
      {
        ref: w,
        id: T,
        rows: f,
        value: i,
        defaultValue: u,
        maxLength: m,
        onChange: (R) => {
          i === void 0 && L(R.target.value.length), p == null || p(R);
        },
        "data-motion": g,
        "aria-invalid": y || void 0,
        className: x(
          yr,
          Zb[k],
          "leading-relaxed resize-y",
          c && "font-mono",
          y && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          h
        ),
        ...v
      }
    );
    return !a && !n && !s && !o ? E : /* @__PURE__ */ l("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: T,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      E,
      (n || s || o) && /* @__PURE__ */ l("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
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
Ma.displayName = "Textarea";
const co = [
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
], Jb = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], Qb = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, uo = ({
  open: t,
  current: r,
  value: a,
  onClose: n,
  onSelect: s,
  onChange: o,
  placeholder: d = "点击选择菜单图标",
  clearable: c = !0,
  disabled: b = !1,
  size: i,
  motion: u,
  className: m
}) => {
  const p = je(i, "sm"), f = Be(u), [h, v] = H(!1), [w, k] = H(""), [g, N] = H("all"), T = typeof t == "boolean", M = T ? t : h, L = a ?? r ?? "", C = () => {
    T ? n == null || n() : v(!1);
  }, y = (D) => {
    s == null || s(D), o == null || o(D), C();
  }, _ = oe(() => {
    const D = w.trim();
    return co.filter((A) => g !== "all" && A.category !== g ? !1 : D ? Wt(`${A.label} ${A.name}`, D) : !0);
  }, [w, g]), E = oe(
    () => co.find((D) => D.name.toLowerCase() === L.toLowerCase()),
    [L]
  ), R = /* @__PURE__ */ e(dr, { open: M, onClose: C, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ l("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        kt,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: w,
          prefix: /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }),
          onChange: (D) => k(D.target.value)
        }
      ) }),
      L && /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(gr, { name: L, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: L })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: Jb.map((D) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => N(D.id),
        className: x(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          g === D.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: D.label
      },
      D.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: _.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: _.map((D) => {
      const A = L === D.name;
      return /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: () => y(D.name),
          className: x(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            A ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            A && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              gr,
              {
                name: D.name,
                size: 20,
                className: x(
                  "transition-transform group-hover:scale-110",
                  A ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: D.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: D.name })
          ]
        },
        D.name
      );
    }) }) : /* @__PURE__ */ l("div", { className: "py-10 text-center text-xs text-[var(--abc-fg-muted)]", children: [
      /* @__PURE__ */ l("p", { children: [
        "未找到匹配 “",
        w,
        "” 的预设图标"
      ] }),
      w.trim() && /* @__PURE__ */ l(
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
  return T ? R : /* @__PURE__ */ l(Ue, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        role: "button",
        tabIndex: b ? -1 : 0,
        "data-motion": f,
        onClick: () => !b && v(!0),
        onKeyDown: (D) => {
          !b && (D.key === "Enter" || D.key === " ") && (D.preventDefault(), v(!0));
        },
        className: x(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          Qb[p],
          yr,
          b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          m
        ),
        children: [
          L ? /* @__PURE__ */ l("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(gr, { name: L, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: E ? `${E.label} (${L})` : L })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: d }),
          /* @__PURE__ */ l("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && L && !b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (D) => {
                  D.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(Xt, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    R
  ] });
};
async function Sn(t) {
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
const em = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, tm = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, bo = ({
  text: t,
  displayText: r,
  children: a,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: o = !0,
  successMessage: d,
  successText: c,
  tooltip: b,
  onCopy: i,
  size: u,
  motion: m,
  className: p
}) => {
  const f = je(u, "sm"), h = Be(m), { toast: v } = At(), [w, k] = H(!1), g = ce(null), N = c ?? d ?? "已复制到剪贴板";
  we(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const T = ge(
    async (C) => {
      C.stopPropagation(), C.preventDefault(), await Sn(t) ? (k(!0), v.success(N), i == null || i(t), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        k(!1), g.current = null;
      }, 1500)) : v.error("复制失败，请手动复制");
    },
    [t, N, i, v]
  ), M = b !== void 0 ? b : w ? N : "点击复制", L = w ? /* @__PURE__ */ e(
    St,
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
      title: M,
      "aria-label": b || "复制",
      "data-motion": h,
      onClick: T,
      className: x(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        p
      ),
      children: L
    }
  ) : /* @__PURE__ */ l(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: M,
      "data-motion": h,
      onClick: T,
      onKeyDown: (C) => {
        (C.key === "Enter" || C.key === " ") && T(C);
      },
      className: x(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        em[f],
        o && "font-mono tabular-nums",
        p
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && L
      ]
    }
  );
}, Gr = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = je(t, "sm"), d = Be(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": d,
      className: x(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        tm[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, mh = ({
  value: t,
  title: r,
  copyLabel: a = "复制",
  copiedLabel: n = "已复制",
  successDuration: s = 1800,
  className: o,
  ...d
}) => {
  const [c, b] = H(!1), i = r || a;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": c ? n : i,
      title: c ? n : i,
      onClick: async (m) => {
        m.stopPropagation(), await Sn(t) && (b(!0), setTimeout(() => b(!1), s));
      },
      className: x(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] transition-all hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] cursor-pointer",
        c && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
        o
      ),
      ...d,
      children: c ? /* @__PURE__ */ e(St, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(Or, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
    }
  );
}, rm = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, am = {
  xs: "px-1.5 py-0.2 text-[10px] gap-1",
  sm: "px-2 py-0.5 text-xs gap-1.5",
  md: "px-2.5 py-1 text-xs gap-2"
};
function fh({
  icon: t,
  label: r,
  variant: a = "default",
  size: n = "sm",
  className: s,
  ...o
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "data-slot": "icon-badge",
      className: x(
        "inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none",
        rm[a],
        am[n],
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
function nm({
  text: t,
  iconSize: r = 14,
  preserveSrToken: a = !1,
  className: n,
  ...s
}) {
  const o = t ? t.replace(/\[icon:[^\]]+\]/g, "").trim() : "";
  return /* @__PURE__ */ e("span", { className: x("inline-flex items-center gap-1.5", n), ...s, children: /* @__PURE__ */ e("span", { children: o || t }) });
}
function Ea(t) {
  return t == null || typeof t == "boolean" ? "" : typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(Ea).join("") : pt.isValidElement(t) ? Ea(t.props.children) : "";
}
function Qn(t, r) {
  const a = [];
  return pt.Children.forEach(t, (n) => {
    if (pt.isValidElement(n)) {
      if (n.type === pt.Fragment) {
        const s = n.props;
        a.push(...Qn(s.children, r));
        return;
      }
      if (n.type === "optgroup") {
        const s = n.props;
        a.push(...Qn(s.children, s.label ?? ""));
        return;
      }
      if (n.type === "option") {
        const s = n.props, o = Ea(s.children), d = s.value !== void 0 ? s.value : o;
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
const sm = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, om = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
};
function mo(t, r = !0) {
  return t.textLabel.includes("[icon:") ? /* @__PURE__ */ e(
    nm,
    {
      text: t.textLabel,
      iconSize: 13,
      preserveSrToken: r
    }
  ) : t.label;
}
const ir = pt.forwardRef(
  ({
    options: t,
    children: r,
    value: a,
    defaultValue: n,
    onChange: s,
    onValueChange: o,
    onBlur: d,
    onKeyDown: c,
    label: b,
    error: i,
    helperText: u,
    id: m,
    name: p,
    title: f,
    placeholder: h,
    multiple: v = !1,
    searchable: w = !1,
    allowClear: k,
    clearable: g,
    disabled: N = !1,
    invalid: T = !1,
    size: M,
    motion: L,
    className: C,
    wrapperClassName: y,
    containerClassName: _,
    dropdownClassName: E,
    popoverClassName: R,
    matchWidth: D = !0,
    hideChevron: A = !1,
    container: $,
    "aria-label": B,
    ...S
  }, z) => {
    var at, it, Rt;
    const F = t === void 0 && r !== void 0, I = h !== void 0 ? h : F ? "" : "请选择", O = je(M === "ghost" ? "sm" : M, "sm"), j = Be(L), U = Tt(), K = m || U, q = typeof process < "u" && ((at = process.env) == null ? void 0 : at.NODE_ENV) === "test" || typeof import.meta < "u" && !1, G = oe(() => t !== void 0 ? t.map((Q) => ({
      value: String(Q.value),
      rawValue: Q.value,
      label: Q.label,
      textLabel: typeof Q.label == "string" ? Q.label : Ea(Q.label),
      disabled: !!Q.disabled,
      description: Q.description,
      group: Q.group
    })) : Qn(r), [t, r]), W = a !== void 0, [X, se] = H(() => {
      if (n !== void 0) return n;
      if (F && !v && !h) {
        const Q = G.find((me) => !me.disabled) ?? G[0];
        return Q ? Q.value : "";
      }
      return v ? [] : "";
    });
    we(() => {
      if (W || !F || v || h || G.length === 0) return;
      if (!G.some((me) => me.value === String(X ?? "")))
        if (n !== void 0 && G.some((me) => me.value === String(n)))
          se(n);
        else {
          const me = G.find((ze) => !ze.disabled) ?? G[0];
          me && se(me.value);
        }
    }, [W, F, v, h, G, X, n]);
    const P = W ? a : X, [V, de] = H(!1), [ke, te] = H(""), [fe, ve] = H(0), { isMounted: ue, isVisible: Ne } = _r(
      V,
      j === "none" || q ? 0 : 140
    ), Ie = ce(null), Ee = ce(null), _e = ce(null), Z = ce(null), re = ce(null), Pe = ce([]), Ye = pt.useCallback(
      (Q) => {
        re.current = Q, typeof z == "function" ? z(Q) : z && (z.current = Q);
      },
      [z]
    ), Xe = !!(k ?? g), rt = !!(T || i), { style: ct, actualSide: nt, portalContainer: Dt } = $r({
      open: ue,
      triggerRef: Ee,
      floatingRef: _e,
      placement: "bottomLeft",
      offset: 4,
      matchWidth: D
    }), be = $ ?? Dt;
    we(() => {
      if (!V) {
        te("");
        return;
      }
      const Q = (ze) => {
        var ft, ut;
        const Fe = ze.target;
        Fe && ((ft = Ie.current) != null && ft.contains(Fe) || (ut = _e.current) != null && ut.contains(Fe) || de(!1));
      }, me = (ze) => {
        var Fe, ft;
        ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), de(!1), F ? (Fe = re.current) == null || Fe.focus() : (ft = Ee.current) == null || ft.focus());
      };
      return document.addEventListener("mousedown", Q), document.addEventListener("touchstart", Q, { passive: !0 }), document.addEventListener("keydown", me, !0), () => {
        document.removeEventListener("mousedown", Q), document.removeEventListener("touchstart", Q), document.removeEventListener("keydown", me, !0);
      };
    }, [V, F]), we(() => {
      var ft;
      if (!V) return;
      const Q = Pe.current[fe], me = (ft = _e.current) == null ? void 0 : ft.querySelector("[data-select-scroll-host]");
      if (!Q || !me) return;
      const ze = Q.offsetTop, Fe = ze + Q.offsetHeight;
      ze < me.scrollTop ? me.scrollTop = ze : Fe > me.scrollTop + me.clientHeight && (me.scrollTop = Fe - me.clientHeight);
    }, [V, fe]);
    const Te = oe(() => {
      const Q = ke.trim();
      return Q ? G.filter(
        (me) => Wt(me.textLabel, Q) || me.value.toLowerCase().includes(Q.toLowerCase())
      ) : G;
    }, [G, ke]), pe = oe(() => v ? Array.isArray(P) ? P : P != null && P !== "" ? [P] : [] : P != null && P !== "" ? [P] : [], [v, P]), xe = oe(() => pe.map((Q) => {
      const me = G.find((ze) => ze.value === String(Q));
      return {
        value: Q,
        option: me,
        label: me ? me.label : String(Q),
        textLabel: me ? me.textLabel : String(Q)
      };
    }), [G, pe]), dt = (Q) => {
      if (W || se(Q), F) {
        const me = Array.isArray(Q) ? String(Q[0] ?? "") : String(Q ?? "");
        o == null || o(me);
        const ze = re.current;
        ze && (ze.value = me, ze.dispatchEvent(new Event("change", { bubbles: !0 })));
        return;
      }
      Array.isArray(Q) || o == null || o(String(Q ?? "")), s == null || s(Q);
    }, We = () => {
      const Q = Te.findIndex(
        (me) => !me.disabled && pe.some((ze) => String(ze) === me.value)
      );
      if (Q >= 0)
        ve(Q);
      else {
        const me = Te.findIndex((ze) => !ze.disabled);
        ve(me >= 0 ? me : 0);
      }
      de(!0);
    }, $e = (Q) => {
      var ze;
      if (Te.length === 0) return;
      let me = fe;
      for (let Fe = 0; Fe < Te.length; Fe++)
        if (me = (me + Q + Te.length) % Te.length, !((ze = Te[me]) != null && ze.disabled)) {
          ve(me);
          return;
        }
    }, Qe = (Q) => {
      var me, ze;
      if (!Q.disabled)
        if (v) {
          const ft = pe.some((ut) => String(ut) === Q.value) ? pe.filter((ut) => String(ut) !== Q.value) : [...pe, Q.rawValue];
          dt(ft);
        } else
          dt(Q.rawValue), de(!1), F ? (me = re.current) == null || me.focus() : (ze = Ee.current) == null || ze.focus();
    }, lt = (Q) => {
      if (c == null || c(Q), !N) {
        if (Q.key === "Escape") {
          V && (Q.preventDefault(), Q.stopPropagation(), de(!1));
          return;
        }
        if (Q.key === "Tab") {
          V && de(!1);
          return;
        }
        if (Q.key === "ArrowDown") {
          Q.preventDefault(), V ? $e(1) : We();
          return;
        }
        if (Q.key === "ArrowUp") {
          Q.preventDefault(), V ? $e(-1) : We();
          return;
        }
        if (Q.key === "Enter" || Q.key === " " && Q.target !== Z.current)
          if (Q.preventDefault(), !V)
            We();
          else {
            const me = Te[fe];
            me && !me.disabled && Qe(me);
          }
      }
    }, Lt = y || _, vt = E || R, mt = oe(() => Te.some((Q) => !!Q.group), [Te]), It = F ? { "aria-hidden": !0 } : {
      id: K,
      title: f,
      role: "combobox",
      "aria-label": B,
      "aria-expanded": V,
      "aria-haspopup": "listbox",
      "aria-controls": `${K}-listbox`,
      "aria-activedescendant": V ? `${K}-opt-${fe}` : void 0,
      "aria-disabled": N || void 0,
      tabIndex: N ? -1 : 0,
      onBlur: (Q) => {
        var ze;
        const me = Q.relatedTarget;
        me && ((ze = _e.current) != null && ze.contains(me)) || d == null || d(Q);
      },
      onKeyDown: lt
    };
    return /* @__PURE__ */ l(
      "div",
      {
        ref: Ie,
        "data-slot": "select-wrapper",
        "data-state": V ? "open" : "closed",
        className: x(
          "relative min-w-0",
          M === "ghost" ? "inline-flex w-auto" : Lt || "w-full"
        ),
        children: [
          b && /* @__PURE__ */ e(
            "label",
            {
              htmlFor: K,
              className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
              children: b
            }
          ),
          F ? /* @__PURE__ */ l(
            "select",
            {
              ...S,
              ref: Ye,
              id: K,
              name: p,
              title: f,
              "aria-label": B,
              "aria-invalid": S["aria-invalid"] ?? (rt || void 0),
              disabled: N,
              multiple: v || void 0,
              value: W ? Array.isArray(a) ? a.map(String) : String(a ?? "") : String(X ?? ""),
              onBlur: (Q) => {
                var ze;
                const me = Q.relatedTarget;
                me && ((ze = _e.current) != null && ze.contains(me)) || d == null || d(Q);
              },
              onClick: (Q) => {
                var me;
                (me = S.onClick) == null || me.call(S, Q), !Q.defaultPrevented && (Q.stopPropagation(), !N && (V ? de(!1) : We()));
              },
              onKeyDown: lt,
              onChange: (Q) => {
                W || se(Q.target.value), o == null || o(Q.target.value), s == null || s(Q);
              },
              className: "peer pointer-events-none absolute inset-0 h-full w-full appearance-none opacity-0",
              children: [
                I && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: I }),
                G.map((Q, me) => /* @__PURE__ */ e("option", { value: Q.value, disabled: Q.disabled, children: Q.textLabel }, `${Q.value}-${me}`))
              ]
            }
          ) : p ? /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: p,
              value: v ? pe.join(",") : String(pe[0] ?? "")
            }
          ) : null,
          /* @__PURE__ */ l(
            "div",
            {
              ref: Ee,
              "data-slot": "select-trigger",
              "data-state": V ? "open" : "closed",
              ...It,
              onClick: (Q) => {
                var me;
                F && (Q.preventDefault(), (me = re.current) == null || me.focus()), Q.stopPropagation(), !N && (V ? de(!1) : We());
              },
              "data-motion": j,
              className: x(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                M === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : x(
                  "w-full px-2.5 py-1",
                  yr,
                  v ? om[O] : sm[O],
                  V && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  rt && "border-[var(--abc-danger)]",
                  N && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                C
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: xe.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: I }) : v ? xe.map((Q) => /* @__PURE__ */ l(
                  "span",
                  {
                    "data-testid": "select-tag",
                    className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: Q.label }),
                      !N && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": `移除 ${Q.textLabel}`,
                          onClick: (me) => {
                            me.stopPropagation(), dt(
                              pe.filter((ze) => String(ze) !== String(Q.value))
                            );
                          },
                          className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                          children: /* @__PURE__ */ e(Ct, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  String(Q.value)
                )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (it = xe[0]) != null && it.option ? mo(xe[0].option, !1) : (Rt = xe[0]) == null ? void 0 : Rt.label }) }),
                /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  Xe && xe.length > 0 && !N && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "select-clear",
                      "aria-label": "清空",
                      onClick: (Q) => {
                        Q.stopPropagation(), dt(v ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  !A && /* @__PURE__ */ e(
                    Xt,
                    {
                      className: x(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        V && "rotate-180"
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          ue && be && cr(
            /* @__PURE__ */ l(
              "div",
              {
                ref: _e,
                id: `${K}-listbox`,
                role: "listbox",
                "data-slot": "select-popover",
                "data-abc-floating": "",
                "data-motion": j,
                "data-placement": nt,
                "aria-multiselectable": v || void 0,
                onMouseDown: (Q) => Q.stopPropagation(),
                style: ct,
                className: x(
                  "z-[1500] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                  D ? "min-w-full" : "min-w-[140px]",
                  Ne ? "abc-animate-popover-in" : "abc-animate-popover-out",
                  vt
                ),
                children: [
                  w && /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                    /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e(
                      "input",
                      {
                        ref: Z,
                        type: "text",
                        autoFocus: !0,
                        "data-testid": "select-search-input",
                        value: ke,
                        onClick: (Q) => Q.stopPropagation(),
                        onKeyDown: lt,
                        onChange: (Q) => {
                          const me = Q.target.value;
                          te(me);
                          const Fe = (me.trim() ? G.filter(
                            (ft) => Wt(ft.textLabel, me) || ft.value.toLowerCase().includes(me.toLowerCase())
                          ) : G).findIndex((ft) => !ft.disabled);
                          ve(Fe >= 0 ? Fe : 0);
                        },
                        placeholder: "搜索或输入拼音首字母...",
                        className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e("div", { "data-select-scroll-host": "", className: "max-h-56 overflow-y-auto p-1", children: Te.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : Te.map((Q, me) => {
                    var _t;
                    const ze = pe.some((ht) => String(ht) === Q.value), Fe = me === fe, ft = me > 0 ? (_t = Te[me - 1]) == null ? void 0 : _t.group : void 0, ut = mt && Q.group && Q.group !== ft;
                    return /* @__PURE__ */ l(pt.Fragment, { children: [
                      ut && /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]", children: Q.group }),
                      /* @__PURE__ */ l(
                        "button",
                        {
                          ref: (ht) => {
                            Pe.current[me] = ht;
                          },
                          id: `${K}-opt-${me}`,
                          type: "button",
                          role: "option",
                          "aria-selected": ze,
                          disabled: Q.disabled,
                          onMouseEnter: () => {
                            Q.disabled || ve(me);
                          },
                          onMouseDown: (ht) => ht.stopPropagation(),
                          onClick: (ht) => {
                            ht.preventDefault(), ht.stopPropagation(), Qe(Q);
                          },
                          className: x(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            ze ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : Fe && !Q.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                            Q.disabled && "opacity-45 cursor-not-allowed"
                          ),
                          children: [
                            /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
                              /* @__PURE__ */ e("div", { className: "truncate", children: mo(Q, !0) }),
                              Q.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: Q.description })
                            ] }),
                            ze && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 shrink-0" })
                          ]
                        }
                      )
                    ] }, `${Q.value}-${me}`);
                  }) })
                ]
              }
            ),
            be
          ),
          i && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: i }),
          u && !i && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: u })
        ]
      }
    );
  }
);
ir.displayName = "Select";
function ph({
  value: t,
  defaultValue: r,
  onValueChange: a,
  onChange: n,
  options: s,
  label: o,
  error: d,
  helperText: c,
  placeholder: b,
  searchable: i,
  allowClear: u,
  clearable: m,
  "aria-label": p,
  id: f,
  disabled: h,
  triggerClassName: v,
  contentClassName: w,
  size: k
}) {
  return /* @__PURE__ */ e(
    ir,
    {
      id: f,
      "aria-label": p,
      disabled: h,
      label: o,
      error: d,
      helperText: c,
      value: t,
      defaultValue: r,
      onValueChange: a,
      onChange: n,
      searchable: i,
      allowClear: u,
      clearable: m,
      className: v,
      dropdownClassName: w,
      size: k,
      placeholder: b,
      options: s
    }
  );
}
const wl = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: d,
  motion: c,
  compact: b = !1,
  className: i
}) => {
  const u = je(d, "md"), m = Be(c), h = {
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
  return /* @__PURE__ */ l(
    "div",
    {
      "data-testid": "empty-state",
      "data-motion": m,
      className: x(
        "flex flex-col items-center justify-center text-center select-none",
        h.container,
        m !== "none" && "abc-animate-fade-in",
        i
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "empty-state-icon",
            className: x(
              "flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]",
              h.iconBox
            ),
            children: a ?? /* @__PURE__ */ e(eu, { className: h.iconSize })
          }
        ),
        t && /* @__PURE__ */ e(
          "h4",
          {
            "data-testid": "empty-state-title",
            className: x("mt-3 text-[var(--abc-fg)]", h.title),
            children: t
          }
        ),
        r && /* @__PURE__ */ e(
          "p",
          {
            "data-testid": "empty-state-description",
            className: x("max-w-sm leading-relaxed text-[var(--abc-fg-muted)]", h.desc),
            children: r
          }
        ),
        (n || s) && /* @__PURE__ */ e("div", { "data-testid": "empty-state-action", className: "mt-4 flex items-center justify-center gap-2", children: n ?? /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: h.btnSize,
            motion: m,
            icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, lm = {
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
}, dn = ({
  mode: t,
  current: r,
  currentPage: a,
  page: n,
  pageSize: s,
  size: o,
  controlSize: d,
  motion: c,
  total: b,
  pageSizeOptions: i = [10, 20, 50, 100],
  onChange: u,
  onPageChange: m,
  onSizeChange: p,
  onPageSizeChange: f,
  showTotal: h = !0,
  showQuickJumper: v = !0,
  className: w,
  hasNext: k,
  hasPrev: g,
  nextCursor: N,
  prevCursor: T,
  currentCursor: M,
  loadedCount: L,
  onNext: C,
  onPrev: y,
  onResetCursor: _,
  loading: E = !1
}) => {
  const R = r ?? a ?? n ?? 1, D = s ?? (typeof o == "number" ? o : void 0) ?? 10, A = je(
    d ?? (typeof o == "string" ? o : void 0),
    "sm"
  ), $ = Be(c), B = lm[A], S = t ?? (b === void 0 && (k !== void 0 || g !== void 0 || C !== void 0) ? "cursor" : "offset"), z = (X) => {
    u == null || u(1, X), p == null || p(X), f == null || f(X);
  }, F = oe(() => (i || []).map((X) => ({
    label: `${X} 条/页`,
    value: X
  })), [i]);
  if (S === "cursor")
    return /* @__PURE__ */ l(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": $,
        className: x(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          B.wrap,
          w
        ),
        children: [
          /* @__PURE__ */ l("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            h === !1 ? null : typeof h == "function" ? h(L ?? 0) : L !== void 0 ? /* @__PURE__ */ l("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: L }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            _ && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: _,
                disabled: E || !g,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            i && i.length > 0 && (p || f || u) && /* @__PURE__ */ e(
              ir,
              {
                "aria-label": "每页条数",
                size: A,
                value: D,
                disabled: E,
                onChange: (X) => z(Number(X)),
                options: F,
                searchable: !1,
                clearable: !1,
                wrapperClassName: B.selectWrap,
                className: x("cursor-pointer font-sans tabular-nums select-none", B.select)
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !g || E,
                onClick: y,
                className: x(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  B.navBtn
                ),
                children: [
                  /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "上一页" })
                ]
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                "aria-label": "下一页",
                disabled: !k || E,
                onClick: C,
                className: x(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  B.navBtn
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "下一页" }),
                  /* @__PURE__ */ e(Zt, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ]
      }
    );
  const I = b ?? 0, O = Math.max(1, Math.ceil(I / Math.max(1, D))), [j, U] = H(""), K = ce(null);
  if (I <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": $,
        className: x(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          B.wrap,
          w
        ),
        children: /* @__PURE__ */ e("div", { children: h === !1 ? null : typeof h == "function" ? h(0) : /* @__PURE__ */ l("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const q = (X) => {
    const se = Math.min(Math.max(1, X), O);
    se !== R && (u == null || u(se, D), m == null || m(se));
  }, G = () => {
    const X = j.trim();
    if (!X) {
      K.current = null;
      return;
    }
    if (X === K.current) return;
    const se = parseInt(X, 10);
    if (Number.isNaN(se)) {
      U(""), K.current = null;
      return;
    }
    const P = Math.min(Math.max(1, se), O);
    K.current = X, U(String(P)), q(P);
  }, W = [];
  if (O <= 7)
    for (let X = 1; X <= O; X++) W.push(X);
  else {
    W.push(1), R > 3 && W.push("...");
    const X = Math.max(2, R - 1), se = Math.min(O - 1, R + 1);
    for (let P = X; P <= se; P++) W.push(P);
    R < O - 2 && W.push("..."), W.push(O);
  }
  return /* @__PURE__ */ l(
    "div",
    {
      "data-motion": $,
      className: x(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        B.wrap,
        w
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: h === !1 ? null : typeof h == "function" ? h(I) : /* @__PURE__ */ l("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: I }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          i && i.length > 0 && /* @__PURE__ */ e(
            ir,
            {
              "aria-label": "每页条数",
              size: A,
              value: D,
              disabled: E,
              onChange: (X) => z(Number(X)),
              options: F,
              searchable: !1,
              clearable: !1,
              wrapperClassName: B.selectWrap,
              className: x("cursor-pointer font-sans tabular-nums select-none", B.select)
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: R <= 1,
              onClick: () => q(R - 1),
              className: x(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                B.navBtn
              ),
              children: /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5" })
            }
          ),
          W.map(
            (X, se) => X === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${se}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => q(X),
                className: x(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  B.pageBtn,
                  X === R ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: X
              },
              X
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: R >= O,
              onClick: () => q(R + 1),
              className: x(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                B.navBtn
              ),
              children: /* @__PURE__ */ e(Zt, { className: "h-3.5 w-3.5" })
            }
          ),
          v && /* @__PURE__ */ l(
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
                    value: j,
                    onChange: (X) => {
                      K.current = null, U(X.target.value);
                    },
                    onKeyDown: (X) => {
                      X.key === "Enter" && (X.preventDefault(), G());
                    },
                    onBlur: G,
                    className: x(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors",
                      B.input
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
}, hh = (t) => /* @__PURE__ */ e(dn, { mode: "cursor", ...t }), fo = (t) => /* @__PURE__ */ e(dn, { ...t }), jt = ({
  variant: t = "text",
  animation: r = "pulse",
  motion: a,
  width: n,
  height: s,
  className: o,
  style: d,
  children: c,
  ...b
}) => {
  const i = Be(a), u = i === "none" ? "none" : r, m = {
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
      "data-motion": i,
      style: m,
      className: x(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && x("rounded-md", s === void 0 && "h-4"),
        u === "wave" && "abc-skeleton-wave skeleton-wave",
        u === "pulse" && "animate-pulse",
        o
      ),
      ...b,
      children: c
    }
  );
}, gh = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ l(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-card",
    className: x(
      "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]",
      r
    ),
    ...a,
    children: [
      /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(jt, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(jt, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(jt, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(jt, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), vh = ({
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
    className: x(
      "overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      s
    ),
    ...o,
    children: /* @__PURE__ */ l("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((d, c) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        jt,
        {
          variant: "text",
          width: c === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, c)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((d, c) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((b, i) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        jt,
        {
          variant: "text",
          width: `${Math.max(40, 85 - (c + i) % 4 * 15)}%`,
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-cell"
        }
      ) }, i)) }, c)) })
    ] })
  }
), xh = ({
  height: t = 288,
  animation: r = "wave",
  className: a,
  style: n,
  ...s
}) => /* @__PURE__ */ l(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-chart",
    style: { ...n, height: typeof t == "number" ? `${t}px` : t },
    className: x(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      a
    ),
    ...s,
    children: [
      /* @__PURE__ */ l("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(jt, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(jt, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, d) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        jt,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, d)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, d) => /* @__PURE__ */ e(jt, { variant: "text", width: 36, height: 10, animation: r }, d)) })
    ]
  }
), jr = {
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
function im(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in jr ? n : "neutral";
}
const Lr = ({
  tone: t,
  status: r,
  color: a,
  text: n,
  label: s,
  dot: o = !0,
  pulse: d = !1,
  size: c,
  motion: b,
  className: i,
  children: u,
  ...m
}) => {
  const p = im(t, r, a), f = jr[p], h = n ?? s ?? u, v = je(c, "sm"), w = Be(b);
  return /* @__PURE__ */ l(
    "span",
    {
      "data-motion": w,
      className: x(
        "abc-motion-pop inline-flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] border font-medium whitespace-nowrap",
        {
          xs: "px-1.5 py-0 text-[10px]",
          sm: "px-2 py-0.5 text-[11px]",
          md: "px-2.5 py-1 text-xs",
          lg: "px-3 py-1.5 text-sm"
        }[v],
        f.tag,
        i
      ),
      ...m,
      children: [
        o && /* @__PURE__ */ l("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
          d && /* @__PURE__ */ e(
            "span",
            {
              className: x(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                f.dot
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: x("relative inline-flex h-1.5 w-1.5 rounded-full", f.dot) })
        ] }),
        /* @__PURE__ */ e("span", { children: h })
      ]
    }
  );
}, yh = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  variant: s,
  size: o,
  motion: d,
  children: c,
  className: b,
  ...i
}) => {
  const u = je(o, "sm"), m = Be(d);
  if (s) {
    const N = {
      default: "border-transparent bg-[var(--abc-primary,#2563eb)] text-white",
      secondary: "border-transparent bg-[var(--abc-bg-subtle,#f1f5f9)] text-[var(--abc-fg-secondary,#64748b)]",
      outline: "border-[var(--abc-border,#e2e8f0)] text-[var(--abc-fg,#0f172a)] bg-transparent",
      destructive: "border-transparent bg-[var(--abc-danger,#ef4444)] text-white",
      danger: jr.danger.tag,
      success: jr.success.tag,
      warning: jr.warning.tag,
      info: jr.info.tag,
      neutral: jr.neutral.tag
    }, T = N[s] ?? N.default;
    return /* @__PURE__ */ e(
      "span",
      {
        "data-motion": m,
        className: x(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--abc-primary)] focus:ring-offset-2",
          T,
          b
        ),
        ...i,
        children: c
      }
    );
  }
  const p = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", f = a || t > 0, h = t > r ? `${r}+` : String(t), v = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, w = {
    xs: "h-4 min-w-4 px-1 text-[9px]",
    sm: "h-4.5 min-w-4.5 px-1.5 text-[10px]",
    md: "h-5 min-w-5 px-1.5 text-[11px]",
    lg: "h-6 min-w-6 px-2 text-xs"
  }, k = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3"
  }, g = {
    xs: "h-3.5 min-w-3.5 px-1 text-[9px]",
    sm: "h-4 min-w-4 px-1 text-[10px]",
    md: "h-4.5 min-w-4.5 px-1.5 text-[11px]",
    lg: "h-5 min-w-5 px-1.5 text-xs"
  };
  return c ? /* @__PURE__ */ l("span", { "data-motion": m, className: x("relative inline-flex shrink-0", b), children: [
    c,
    f && (a ? /* @__PURE__ */ e(
      "span",
      {
        className: x(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          k[u],
          p
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: x(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          g[u],
          p
        ),
        children: h
      }
    ))
  ] }) : f ? a ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": m,
      className: x("abc-motion-pop inline-block rounded-full", v[u], p, b)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": m,
      className: x(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        w[u],
        p,
        b
      ),
      children: h
    }
  ) : null;
}, cm = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, dm = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = je(a, "sm"), d = Be(n), [c, b] = H(!1), i = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": d,
      className: x(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        cm[o],
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
      ) : /* @__PURE__ */ e("span", { children: i })
    }
  );
};
function wh(t = {}) {
  return "";
}
const um = ({
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
    Lr,
    {
      tone: d,
      dot: r,
      className: x(t === "outline" && "bg-transparent border-[var(--abc-border)]", a),
      ...s,
      children: n
    }
  );
};
um.displayName = "Tag";
const bm = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, mm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, fm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, pm = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, un = ({
  as: t = "div",
  title: r,
  subtitle: a,
  extra: n,
  footer: s,
  size: o,
  padding: d,
  variant: c = "default",
  cover: b,
  statusRibbon: i,
  loading: u = !1,
  motion: m,
  hoverable: p = !1,
  className: f,
  bodyClassName: h,
  children: v,
  ...w
}) => {
  const k = t, g = je(o, "md"), N = Be(m), T = d ?? g;
  return /* @__PURE__ */ l(
    k,
    {
      "data-motion": N,
      "data-size": g,
      className: x(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        pm[c],
        p && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        f
      ),
      ...w,
      children: [
        b && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: b }),
        (r || n || i) && /* @__PURE__ */ l(
          "div",
          {
            className: x(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              mm[g]
            ),
            children: [
              /* @__PURE__ */ l("div", { className: "min-w-0", children: [
                r && /* @__PURE__ */ e(
                  "h3",
                  {
                    className: x(
                      "font-semibold text-[var(--abc-fg)] leading-snug",
                      g === "xs" ? "text-xs" : g === "lg" ? "text-base" : "text-sm"
                    ),
                    children: r
                  }
                ),
                a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
              ] }),
              (n || i) && /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-2", children: [
                i && /* @__PURE__ */ e(Lr, { tone: i.tone ?? "primary", size: "xs", dot: !1, children: i.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: x(bm[T], h), children: u ? /* @__PURE__ */ l("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(jt, { width: "45%", height: 14, motion: N }),
          /* @__PURE__ */ e(jt, { width: "90%", height: 12, motion: N }),
          /* @__PURE__ */ e(jt, { width: "70%", height: 12, motion: N })
        ] }) : v }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: x(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              fm[g]
            ),
            children: s
          }
        )
      ]
    }
  );
}, hm = pt.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-header",
      className: x("flex flex-col gap-1.5 p-6 border-b border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
hm.displayName = "CardHeader";
const gm = pt.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "h3",
    {
      ref: a,
      "data-slot": "card-title",
      className: x("font-semibold leading-none tracking-tight text-[var(--abc-fg)] text-base", t),
      ...r
    }
  )
);
gm.displayName = "CardTitle";
const vm = pt.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "p",
    {
      ref: a,
      "data-slot": "card-description",
      className: x("text-sm text-[var(--abc-fg-muted)] leading-relaxed", t),
      ...r
    }
  )
);
vm.displayName = "CardDescription";
const xm = pt.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-content",
      className: x("p-6 pt-0", t),
      ...r
    }
  )
);
xm.displayName = "CardContent";
const ym = pt.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-footer",
      className: x("flex items-center p-6 pt-0 border-t border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
ym.displayName = "CardFooter";
const Nh = ({
  orientation: t = "horizontal",
  label: r,
  className: a,
  ...n
}) => t === "vertical" ? /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    "aria-orientation": "vertical",
    className: x("mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle", a),
    ...n
  }
) : r ? /* @__PURE__ */ l(
  "div",
  {
    role: "separator",
    className: x("my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]", a),
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
    className: x("my-3 h-px w-full bg-[var(--abc-border)]", a),
    ...n
  }
), wm = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Nm = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, kh = ({
  direction: t = "horizontal",
  size: r,
  wrap: a = !1,
  align: n = "center",
  className: s,
  children: o,
  ...d
}) => {
  const c = je(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Nm[n],
        wm[c],
        a && "flex-wrap",
        s
      ),
      ...d,
      children: o
    }
  );
}, km = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, Sh = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: o,
  ...d
}) => {
  const c = je(r, "md"), b = Be(a), i = ce(null), [u, m] = H({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ l(
    "div",
    {
      ref: i,
      "data-motion": b,
      "data-size": c,
      onMouseMove: (p) => {
        var h;
        const f = (h = i.current) == null ? void 0 : h.getBoundingClientRect();
        f && m({ x: p.clientX - f.left, y: p.clientY - f.top, active: !0 });
      },
      onMouseLeave: () => m((p) => ({ ...p, active: !1 })),
      className: x(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        km[c],
        n && "abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md",
        s
      ),
      ...d,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": "true",
            className: x(
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
}, po = ({ duration: t = 8, motion: r, className: a }) => {
  const n = Be(r);
  return n === "none" ? null : /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": n,
      className: x(
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
}, ho = ({
  motion: t,
  className: r
}) => {
  const a = Be(t), n = a === "none";
  return /* @__PURE__ */ l(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": a,
      className: x("pointer-events-none absolute inset-0 overflow-hidden", r),
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
}, aa = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, Aa = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Cn = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Nl = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, As = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, Ch = ({
  title: t,
  value: r,
  prefix: a,
  suffix: n,
  trend: s,
  sparkline: o,
  icon: d,
  footer: c,
  loading: b = !1,
  hoverable: i = !0,
  size: u,
  motion: m,
  className: p,
  ...f
}) => {
  const h = je(u, "md"), v = Be(m), w = Tt().replace(/:/g, ""), k = pt.useMemo(() => {
    if (!o || o.length < 2) return null;
    const N = Math.min(...o), M = Math.max(...o) - N || 1, L = 120, C = 32, _ = `M ${o.map((R, D) => {
      const A = D / (o.length - 1) * L, $ = C - 4 - (R - N) / M * (C - 8);
      return `${A.toFixed(1)},${$.toFixed(1)}`;
    }).join(" L ")}`, E = `${_} L ${L},${C} L 0,${C} Z`;
    return { linePath: _, areaPath: E, width: L, height: C };
  }, [o]), g = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": v,
      "data-size": h,
      className: x(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        aa[h],
        i && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        p
      ),
      ...f,
      children: b ? /* @__PURE__ */ l("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(jt, { width: "45%", height: 13, motion: v }),
          /* @__PURE__ */ e(jt, { variant: "rounded", width: 30, height: 30, motion: v })
        ] }),
        /* @__PURE__ */ e(jt, { width: "60%", height: 26, motion: v }),
        /* @__PURE__ */ e(jt, { width: "80%", height: 18, motion: v })
      ] }) : /* @__PURE__ */ l(Ue, { children: [
        /* @__PURE__ */ l("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          d && /* @__PURE__ */ e(
            "span",
            {
              className: x(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                As[h]
              ),
              children: d
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: Nl[h], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || k) && /* @__PURE__ */ l("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ l(
              "span",
              {
                className: x(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  g
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(Jo, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(tu, { className: "h-3 w-3" }) : /* @__PURE__ */ e(yn, { className: "h-3 w-3" }),
                  s.value
                ]
              }
            ),
            s.label && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: s.label })
          ] }),
          k && /* @__PURE__ */ l(
            "svg",
            {
              viewBox: `0 0 ${k.width} ${k.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ l("linearGradient", { id: `abc-spark-${w}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ e("stop", { offset: "0%", stopColor: "var(--abc-primary)", stopOpacity: "0.28" }),
                  /* @__PURE__ */ e("stop", { offset: "100%", stopColor: "var(--abc-primary)", stopOpacity: "0" })
                ] }) }),
                /* @__PURE__ */ e("path", { d: k.areaPath, fill: `url(#abc-spark-${w})` }),
                /* @__PURE__ */ e(
                  "path",
                  {
                    d: k.linePath,
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
}, kl = os(null), Sm = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Eh = ({
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  columns: c = 2,
  className: b,
  children: i
}) => {
  const u = Tt(), m = je(o, "md"), p = Be(d), [f, h] = Vt({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), v = (w) => {
    if (!s)
      if (t) {
        const k = Array.isArray(f) ? f : [], N = k.includes(w) ? k.filter((T) => T !== w) : [...k, w];
        h(N);
      } else
        h(w);
  };
  return /* @__PURE__ */ e(
    kl.Provider,
    {
      value: {
        multiple: t,
        value: f,
        disabled: s,
        size: m,
        motion: p,
        name: u,
        toggleValue: v
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          role: t ? "group" : "radiogroup",
          "data-motion": p,
          className: x("grid gap-3", Sm[c], b),
          children: i
        }
      )
    }
  );
}, Th = ({
  value: t,
  title: r,
  description: a,
  avatar: n,
  icon: s,
  extra: o,
  checked: d,
  defaultChecked: c = !1,
  onChange: b,
  disabled: i = !1,
  size: u,
  motion: m,
  className: p,
  children: f
}) => {
  const h = Ta(kl), v = je(u ?? (h == null ? void 0 : h.size), "md"), w = Be(m ?? (h == null ? void 0 : h.motion)), k = !!(i || h != null && h.disabled), g = !!(h && t !== void 0), N = h && !h.multiple ? "radio" : "checkbox", [T, M] = Vt({
    value: d,
    defaultValue: c,
    onChange: b
  }), L = g ? h.multiple ? Array.isArray(h.value) && h.value.includes(t) : h.value === t : T, C = (y) => {
    k || (g ? h.toggleValue(t) : M(y));
  };
  return /* @__PURE__ */ l(
    "label",
    {
      "data-motion": w,
      "data-size": v,
      "data-checked": L ? "true" : "false",
      className: x(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        aa[v],
        L ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !k && !L && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        k ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1",
        p
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: N,
            name: h == null ? void 0 : h.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!L,
            disabled: k,
            onChange: (y) => C(y.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: x(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              As[v]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ l("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: x("font-semibold text-[var(--abc-fg)]", Aa[v]), children: r }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          a && /* @__PURE__ */ e("p", { className: x("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Cn[v]), children: a }),
          f && /* @__PURE__ */ e("div", { className: "mt-2", children: f })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: x(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              L ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(St, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Ih = ({
  title: t,
  description: r,
  icon: a,
  tags: n,
  extra: s,
  href: o,
  target: d,
  disabled: c = !1,
  onClick: b,
  size: i,
  motion: u,
  className: m
}) => {
  const p = je(i, "md"), f = Be(u), h = !!((o || b) && !c), v = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ l(
    "article",
    {
      "data-motion": f,
      "data-size": p,
      className: x(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        aa[p],
        h && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
        c && "opacity-55 cursor-not-allowed",
        m
      ),
      children: [
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ l("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ l("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              a && /* @__PURE__ */ e(
                "span",
                {
                  className: x(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    As[p]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: x("min-w-0 truncate", Aa[p]), children: o && !c ? /* @__PURE__ */ e(
                "a",
                {
                  href: o,
                  target: d,
                  rel: d === "_blank" ? "noreferrer" : void 0,
                  onClick: () => b == null ? void 0 : b(),
                  className: x(v, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : b && !c ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: b,
                  className: x(v, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          r && /* @__PURE__ */ e("p", { className: x("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", Cn[p]), children: r })
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
}, Cm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, _h = ({
  title: t,
  subtitle: r,
  icon: a,
  extra: n,
  defaultOpen: s = !0,
  open: o,
  onOpenChange: d,
  size: c,
  motion: b,
  className: i,
  bodyClassName: u,
  children: m
}) => {
  const p = je(c, "md"), f = Be(b), h = Tt(), [v, w] = Vt({
    value: o,
    defaultValue: s,
    onChange: d
  });
  return /* @__PURE__ */ l(
    "section",
    {
      "data-motion": f,
      "data-size": p,
      className: x(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        i
      ),
      children: [
        /* @__PURE__ */ l("div", { className: x("flex items-center justify-between gap-3", Cm[p]), children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-expanded": v,
              "aria-controls": h,
              onClick: () => w(!v),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  Xt,
                  {
                    className: x(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      v ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: a }),
                /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: x("truncate font-semibold text-[var(--abc-fg)]", Aa[p]), children: t }),
                  r && /* @__PURE__ */ e("div", { className: "truncate text-[11px] text-[var(--abc-fg-muted)]", children: r })
                ] })
              ]
            }
          ),
          n && /* @__PURE__ */ e(
            "div",
            {
              onClick: (k) => k.stopPropagation(),
              className: "flex shrink-0 items-center gap-2",
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { id: h, className: "abc-collapse-grid", "data-open": v, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ e(
          "div",
          {
            className: x(
              "border-t border-[var(--abc-border)]",
              aa[p],
              u
            ),
            children: m
          }
        ) }) })
      ]
    }
  );
}, Mh = ({
  tier: t,
  price: r,
  period: a = "/ 月",
  description: n,
  features: s,
  recommended: o = !1,
  badge: d = "推荐方案",
  ctaText: c = "选择此方案",
  disabled: b = !1,
  loading: i = !1,
  onSelect: u,
  size: m,
  motion: p,
  className: f
}) => {
  const h = je(m, "md"), v = Be(p);
  return /* @__PURE__ */ l(
    "article",
    {
      "data-motion": v,
      "data-size": h,
      className: x(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        aa[h],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        f
      ),
      children: [
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: x("font-bold text-[var(--abc-fg)]", Aa[h]), children: t }),
            o && d && /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(_a, { className: "h-2.5 w-2.5" }),
              d
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: x("mt-1.5 text-[var(--abc-fg-muted)]", Cn[h]), children: n }),
          /* @__PURE__ */ l("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: x("font-extrabold text-[var(--abc-fg)]", Nl[h]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((w, k) => {
            const g = typeof w == "string" ? { text: w, included: !0 } : w, N = g.included !== !1;
            return /* @__PURE__ */ l(
              "li",
              {
                className: x(
                  "flex items-start gap-2 text-xs",
                  N ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  N ? /* @__PURE__ */ e(St, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(Ct, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: g.text })
                ]
              },
              k
            );
          }) })
        ] }),
        u && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          Le,
          {
            variant: o ? "primary" : "secondary",
            size: h,
            motion: v,
            block: !0,
            disabled: b,
            loading: i,
            onClick: u,
            children: c
          }
        ) })
      ]
    }
  );
}, Em = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, Ah = ({
  columns: t = 3,
  gap: r,
  className: a,
  children: n,
  ...s
}) => {
  const o = je(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "grid auto-rows-[minmax(148px,auto)]",
        Em[t],
        Tm[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, Tm = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, Rh = ({
  colSpan: t = 1,
  rowSpan: r = 1,
  eyebrow: a,
  title: n,
  description: s,
  icon: o,
  graphic: d,
  footer: c,
  hoverable: b = !0,
  size: i,
  motion: u,
  className: m,
  children: p,
  ...f
}) => {
  const h = je(i, "md"), v = Be(u), w = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", k = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ l(
    "article",
    {
      "data-motion": v,
      "data-size": h,
      className: x(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        aa[h],
        w,
        k,
        b && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        m
      ),
      ...f,
      children: [
        /* @__PURE__ */ l("div", { children: [
          (a || o) && /* @__PURE__ */ l("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: x("font-bold text-[var(--abc-fg)]", Aa[h]), children: n }),
          s && /* @__PURE__ */ e("p", { className: x("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Cn[h]), children: s })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: d }),
        p,
        c && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, Im = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Dh = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const o = je(a, "sm"), d = Be(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": d,
      className: x("abc-breadcrumb", Im[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((c, b) => {
        const i = b === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ l(
          "a",
          {
            href: c.href ?? "#",
            "aria-current": i ? "page" : void 0,
            onClick: (u) => {
              var m;
              (!c.href || c.href === "#" || c.onClick) && u.preventDefault(), i || (m = c.onClick) == null || m.call(c, u);
            },
            className: x(
              "abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              i ? "font-semibold text-[var(--abc-fg)] cursor-default no-underline" : "text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer"
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
}, _m = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, Mm = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, Lh = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: d,
  className: c
}) => {
  const b = n === "vertical", i = je(s, "sm"), u = Be(o);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": u,
      className: x(
        "m-0 list-none p-0",
        b ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        c
      ),
      children: t.map((m, p) => {
        const f = m.status ?? (p < r ? "finish" : p === r ? a : "wait"), h = !!(d && !m.disabled), v = p === t.length - 1, w = f === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : f === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : f === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ l(
          "li",
          {
            className: x(
              "relative flex min-w-0",
              b ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  disabled: !h,
                  onClick: () => h && (d == null ? void 0 : d(p)),
                  className: x(
                    "abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]",
                    h ? "cursor-pointer" : "cursor-default"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: x(
                          "abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors",
                          _m[i],
                          w
                        ),
                        children: m.icon ? m.icon : f === "finish" ? /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }) : f === "error" ? /* @__PURE__ */ e(Er, { className: "h-3.5 w-3.5" }) : p + 1
                      }
                    ),
                    /* @__PURE__ */ l("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: x(
                            "block font-semibold",
                            Mm[i],
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
              !v && !b && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: x(
                    "hidden h-px flex-1 sm:block",
                    p < r ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border)]"
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
}, Am = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, Rm = {
  xs: "px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]",
  sm: "px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]",
  md: "px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]",
  lg: "px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]"
};
function Bh({
  options: t,
  value: r,
  onChange: a,
  onValueChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  block: c = !1,
  className: b,
  ...i
}) {
  const u = je(o, "sm"), m = Be(d), p = a ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "segmented-control",
      "data-motion": m,
      className: x(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        c ? "flex w-full" : "inline-flex",
        Am[u],
        b
      ),
      ...i,
      children: t.map((f) => {
        const h = f.value === r, v = s || !!f.disabled;
        return /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            disabled: v,
            onClick: () => p == null ? void 0 : p(f.value),
            className: x(
              "inline-flex cursor-pointer select-none items-center justify-center gap-1.5 font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              c && "flex-1",
              Rm[u],
              h ? "bg-[var(--abc-bg-surface)] font-semibold text-[var(--abc-primary)] shadow-2xs ring-1 ring-[var(--abc-border)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
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
const Yt = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: d
}) => {
  const c = Be(s), [b, i] = H(!1), [u, m] = H(!1), p = Tt(), f = ce(null), h = ce(null), v = ce(null), w = ce(null), k = ge(() => {
    typeof window > "u" || (v.current !== null && (window.clearTimeout(v.current), v.current = null), w.current !== null && (window.clearTimeout(w.current), w.current = null));
  }, []);
  we(() => () => k(), [k]);
  const g = ge(
    (D = !1) => {
      a || !t || (k(), m(!1), D || n <= 0 || typeof window > "u" ? i(!0) : v.current = window.setTimeout(() => {
        i(!0), v.current = null;
      }, n));
    },
    [a, t, n, k]
  ), N = ge(() => {
    if (k(), typeof window > "u") {
      i(!1);
      return;
    }
    w.current = window.setTimeout(() => {
      i(!1), w.current = null;
    }, 60);
  }, [k]), T = ge(() => {
    k(), m(!0), i(!1);
  }, [k]), { isMounted: M, isVisible: L } = _r(
    b && !a && !!t,
    c === "none" || u ? 0 : 100
  ), { style: C, actualSide: y, arrowOffset: _, portalContainer: E } = $r({
    open: M,
    triggerRef: f,
    floatingRef: h,
    placement: r,
    offset: 8
  });
  if (we(() => {
    if (!b) return;
    const D = (A) => {
      A.key === "Escape" && T();
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [b, T]), !t || a) return /* @__PURE__ */ e(Ue, { children: o });
  const R = y === "top" ? { left: `${_}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "bottom" ? { left: `${_}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "left" ? { top: `${_}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${_}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ l(Ue, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: f,
        "data-motion": c,
        "aria-describedby": b ? p : void 0,
        onMouseEnter: () => g(!1),
        onMouseLeave: N,
        onFocus: () => g(!0),
        onBlur: T,
        onPointerDown: T,
        className: x("inline-flex items-center", d),
        children: o
      }
    ),
    M && E && cr(
      /* @__PURE__ */ l(
        "div",
        {
          ref: h,
          id: p,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": c,
          "data-placement": y,
          style: C,
          className: x(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            c !== "none" && (L ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
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
      E
    )
  ] });
}, Ra = ({
  items: t = [],
  content: r,
  align: a,
  placement: n,
  trigger: s = "click",
  open: o,
  defaultOpen: d = !1,
  onOpenChange: c,
  motion: b,
  children: i,
  className: u,
  panelClassName: m
}) => {
  const p = Be(b), [f, h] = Vt({
    value: o,
    defaultValue: d,
    onChange: c
  }), { isMounted: v, isVisible: w } = _r(f, p === "none" ? 0 : 140), k = ce(null), g = ce(null), N = ce(null), T = Tt(), M = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: L, actualSide: C, portalContainer: y } = $r({
    open: v,
    triggerRef: k,
    floatingRef: g,
    placement: M,
    offset: 6
  }), _ = ge(() => {
    N.current !== null && typeof window < "u" && (window.clearTimeout(N.current), N.current = null);
  }, []);
  we(() => () => _(), [_]);
  const E = ge(() => {
    s === "hover" && (_(), h(!0));
  }, [s, _, h]), R = ge(() => {
    s === "hover" && (_(), typeof window < "u" && (N.current = window.setTimeout(() => {
      h(!1), N.current = null;
    }, 140)));
  }, [s, _, h]), D = ge((z) => {
    var j;
    const F = g.current;
    if (!F) return;
    const I = Array.from(
      F.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (I.length === 0) return;
    const O = (z % I.length + I.length) % I.length;
    (j = I[O]) == null || j.focus();
  }, []);
  we(() => {
    if (!f) return;
    const z = (I) => {
      var j, U;
      const O = I.target;
      (j = k.current) != null && j.contains(O) || (U = g.current) != null && U.contains(O) || h(!1);
    }, F = (I) => {
      var O;
      if (I.key === "Escape") {
        I.preventDefault(), I.stopPropagation(), h(!1);
        const j = (O = k.current) == null ? void 0 : O.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        j == null || j.focus();
      }
    };
    return document.addEventListener("mousedown", z), document.addEventListener("keydown", F, !0), () => {
      document.removeEventListener("mousedown", z), document.removeEventListener("keydown", F, !0);
    };
  }, [f, h]);
  const A = !r, $ = (z) => {
    z.key === "ArrowDown" ? (z.preventDefault(), h(!0), A && typeof window < "u" && window.requestAnimationFrame(() => D(0))) : (z.key === "Enter" || z.key === " ") && z.target === z.currentTarget && (z.preventDefault(), h(!f));
  }, B = (z) => {
    if (!A) return;
    const F = g.current;
    if (!F) return;
    const I = Array.from(
      F.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (I.length === 0) return;
    const O = I.indexOf(document.activeElement);
    z.key === "ArrowDown" ? (z.preventDefault(), D(O < 0 ? 0 : O + 1)) : z.key === "ArrowUp" ? (z.preventDefault(), D(O <= 0 ? I.length - 1 : O - 1)) : z.key === "Home" ? (z.preventDefault(), D(0)) : z.key === "End" && (z.preventDefault(), D(I.length - 1));
  }, S = s === "hover" ? C === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : C === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : C === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ l(Ue, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: k,
        "data-motion": p,
        onMouseEnter: E,
        onMouseLeave: R,
        className: x("inline-flex", u),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": f,
            "aria-controls": f ? T : void 0,
            "aria-haspopup": A ? "menu" : void 0,
            onClick: () => h(!f),
            onKeyDown: $,
            className: "inline-flex cursor-pointer items-center",
            children: i
          }
        )
      }
    ),
    v && y && cr(
      /* @__PURE__ */ e(
        "div",
        {
          ref: g,
          id: T,
          role: A ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": p,
          "data-placement": C,
          style: L,
          onMouseEnter: E,
          onMouseLeave: R,
          onKeyDown: B,
          className: x(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            S,
            p !== "none" && (w ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            m
          ),
          children: r || t.map(
            (z) => z.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, z.key) : /* @__PURE__ */ l(pt.Fragment, { children: [
              z.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: z.disabled,
                  onClick: () => {
                    var F;
                    z.disabled || ((F = z.onClick) == null || F.call(z), h(!1));
                  },
                  className: x(
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
      y
    )
  ] });
}, Rs = ({
  title: t,
  content: r,
  align: a,
  placement: n,
  panelClassName: s,
  ...o
}) => {
  const d = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    Ra,
    {
      ...o,
      placement: n ?? (d && d === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: x(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, Sl = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Ds = ({
  label: t,
  htmlFor: r,
  required: a = !1,
  tooltip: n,
  error: s,
  helperText: o,
  extra: d,
  layout: c = "vertical",
  size: b,
  motion: i,
  className: u,
  children: m
}) => {
  const p = je(b, "sm"), f = Be(i);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-motion": f,
      className: x(
        c === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        u
      ),
      children: [
        (t || d) && /* @__PURE__ */ l(
          "div",
          {
            className: x(
              "flex items-center justify-between gap-2",
              c === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ l(
                "label",
                {
                  htmlFor: r,
                  className: x(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    Sl[p]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(Yt, { content: n, children: /* @__PURE__ */ e(ea, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
                  ]
                }
              ),
              d && /* @__PURE__ */ e("div", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: d })
            ]
          }
        ),
        /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
          m,
          s ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] font-medium text-[var(--abc-danger)]", children: s }) : o && /* @__PURE__ */ e("p", { className: "mt-1 text-[11px] leading-relaxed text-[var(--abc-fg-muted)]", children: o })
        ] })
      ]
    }
  );
}, Dm = pt.forwardRef(
  ({ className: t, size: r = "sm", required: a, children: n, ...s }, o) => /* @__PURE__ */ l(
    "label",
    {
      ref: o,
      className: x(
        "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
        Sl[r] || "text-xs",
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
Dm.displayName = "Label";
const Lm = Me.forwardRef(
  ({
    className: t,
    containerClassName: r,
    wrapperClassName: a,
    onClear: n,
    clearLabel: s = "清空搜索",
    size: o = "sm",
    ...d
  }, c) => /* @__PURE__ */ e("div", { className: x("relative block min-w-[200px]", r, a), children: /* @__PURE__ */ e(
    kt,
    {
      ref: c,
      size: o,
      allowClear: !!n,
      onClear: n,
      prefix: /* @__PURE__ */ e(
        Pt,
        {
          className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)] shrink-0",
          "aria-hidden": "true"
        }
      ),
      className: x("text-xs", t),
      ...d
    }
  ) })
);
Lm.displayName = "SearchInput";
const go = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, vo = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, Bm = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Tr = pt.forwardRef(
  ({
    id: t,
    checked: r,
    defaultChecked: a = !1,
    indeterminate: n = !1,
    onChange: s,
    disabled: o = !1,
    size: d,
    motion: c,
    label: b,
    description: i,
    className: u,
    ...m
  }, p) => {
    const f = je(d, "sm"), h = Be(c), v = Tt(), w = t || v, k = ce(null);
    pn(p, () => k.current, []);
    const [g, N] = Vt({
      value: r,
      defaultValue: a
    });
    we(() => {
      k.current && (k.current.indeterminate = !!n);
    }, [n]);
    const T = !!(b || i);
    return /* @__PURE__ */ l(
      "label",
      {
        htmlFor: w,
        "data-motion": h,
        className: x(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          Bm[f],
          T ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          u
        ),
        children: [
          /* @__PURE__ */ l(
            "span",
            {
              className: x(
                "relative inline-flex shrink-0 items-center justify-center",
                go[f],
                T && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...m,
                    ref: k,
                    id: w,
                    type: "checkbox",
                    checked: g,
                    disabled: o,
                    onChange: (M) => {
                      if (o) return;
                      const L = M.target.checked;
                      N(L), s == null || s(L, M);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: x(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      go[f],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      g || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(yn, { className: x(vo[f], "stroke-[2.5] abc-motion-pop") }) : g && /* @__PURE__ */ e(St, { className: x(vo[f], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          T && /* @__PURE__ */ l("span", { className: "flex flex-col", children: [
            b && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: b }),
            i && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: i })
          ] })
        ]
      }
    );
  }
);
Tr.displayName = "Checkbox";
const Pm = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, zm = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, jm = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-3.5 w-3.5 translate-x-0.5",
  md: "h-4.5 w-4.5 translate-x-0.5",
  lg: "h-5.5 w-5.5 translate-x-0.5"
}, or = ({
  checked: t,
  defaultChecked: r = !1,
  onChange: a,
  disabled: n = !1,
  loading: s = !1,
  size: o,
  motion: d,
  checkedLabel: c,
  uncheckedLabel: b,
  checkedChildren: i,
  unCheckedChildren: u,
  ariaLabel: m,
  className: p
}) => {
  const h = je(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), v = Be(d), [w, k] = Vt({
    value: t,
    defaultValue: r,
    onChange: a
  }), g = !!(n || s), N = c ?? i, T = b ?? u;
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": w,
      "aria-label": m,
      disabled: g,
      "data-motion": v,
      onClick: () => {
        g || k(!w);
      },
      className: x(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        Pm[h],
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
            className: x(
              "pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform",
              w ? zm[h] : jm[h]
            ),
            children: s && /* @__PURE__ */ e(Jt, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (N || T) && /* @__PURE__ */ e("span", { className: "sr-only", children: w ? N : T })
      ]
    }
  );
}, Fm = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, Om = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, $m = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, Km = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, Hm = {
  xs: "text-xs gap-1.5",
  sm: "text-xs gap-2",
  md: "text-sm gap-2",
  lg: "text-sm gap-2.5"
}, pr = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  variant: s = "default",
  size: o,
  motion: d,
  disabled: c = !1,
  className: b
}) => {
  var f;
  const i = je(o, "sm"), u = Be(d), [m, p] = Vt({
    value: r,
    defaultValue: a ?? ((f = t[0]) == null ? void 0 : f.value) ?? "",
    onChange: n
  });
  return s === "segmented" ? /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": u,
      className: x(
        "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        Fm[i],
        b
      ),
      children: t.map((h) => {
        const v = String(m) === String(h.value), w = !!(c || h.disabled);
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": v,
            disabled: w,
            onClick: () => p(h.value),
            className: x(
              "rounded-[var(--abc-radius-sm)] font-medium cursor-pointer select-none abc-motion-control",
              Om[i],
              v ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]",
              w && "opacity-45 cursor-not-allowed"
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
      "data-motion": u,
      className: x("inline-flex flex-wrap items-center gap-4", b),
      children: t.map((h) => {
        const v = String(m) === String(h.value), w = !!(c || h.disabled);
        return /* @__PURE__ */ l(
          "label",
          {
            className: x(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              Hm[i],
              w ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "radio",
                  checked: v,
                  disabled: w,
                  onChange: () => p(h.value),
                  className: "peer sr-only"
                }
              ),
              /* @__PURE__ */ e(
                "span",
                {
                  className: x(
                    "flex items-center justify-center rounded-full border abc-motion-control",
                    $m[i],
                    v ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: v && /* @__PURE__ */ e(
                    "span",
                    {
                      className: x(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        Km[i]
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
}, Wm = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Vm = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Um = 40, xo = 6;
function yo(t, r) {
  return Array.isArray(t) ? t.filter((a) => a != null) : t != null && t !== "" ? r ? [t] : [t] : [];
}
function es(t) {
  return t.rawLabel !== void 0 && t.rawLabel !== null && t.rawLabel !== "" ? t.rawLabel : t.title;
}
const Gm = ({ state: t }) => {
  const {
    flattenedRows: r,
    loadingKeys: a,
    activeIndex: n,
    isCheckable: s,
    checkedKeyStrSet: o,
    selectedRawKeys: d,
    halfCheckedKeyStrSet: c,
    isRowSelectionBlocked: b,
    rowRefs: i,
    setActiveIndex: u,
    handleSelectRow: m,
    useVirtualWindow: p,
    selectableLeafOnly: f,
    toggleExpandNode: h,
    handleToggleCheck: v,
    isMounted: w,
    effectivePortalContainer: k,
    popoverRef: g,
    resolvedMotion: N,
    actualSide: T,
    floatingStyle: M,
    matchWidth: L,
    dropdownClassName: C,
    isVisible: y,
    isSearchable: _,
    resolvedShowToolbar: E,
    searchInputRef: R,
    effectiveKeyword: D,
    handleKeyDown: A,
    searchValue: $,
    setInternalKeyword: B,
    onSearch: S,
    setScrollTop: z,
    scrollHostRef: F,
    searchPlaceholder: I,
    normalized: O,
    commitExpandedKeys: j,
    treeId: U,
    ariaLabel: K,
    label: q,
    isMultiMode: G,
    listHeight: W,
    emptyText: X,
    totalVirtualHeight: se,
    renderedRows: P,
    virtualStartIndex: V,
    itemHeight: de
  } = t, ke = (te, fe, ve) => {
    const { node: ue, keyStr: Ne, depth: Ie, posInSet: Ee, setSize: _e, hasChildren: Z, isExpanded: re } = te, Pe = a.has(Ne), Ye = fe === n, Xe = s ? o.has(Ne) : d.some((nt) => String(nt) === Ne), rt = s && c.has(Ne), ct = b(ue);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: (nt) => {
          i.current[Ne] = nt;
        },
        role: "treeitem",
        "aria-level": Ie + 1,
        "aria-posinset": Ee,
        "aria-setsize": _e,
        "aria-expanded": Z ? re : void 0,
        "aria-selected": s ? void 0 : Xe,
        "aria-checked": s && ue.checkable !== !1 ? rt ? "mixed" : Xe : void 0,
        "aria-disabled": ue.disabled || void 0,
        "data-testid": `tree-select-node-${Ne}`,
        "data-active": Ye ? "true" : void 0,
        style: {
          paddingLeft: `${Ie * 18 + 8}px`,
          paddingRight: "8px",
          ...ve
        },
        onMouseEnter: () => {
          ue.disabled || u(fe);
        },
        onMouseDown: (nt) => nt.stopPropagation(),
        onClick: (nt) => {
          nt.preventDefault(), nt.stopPropagation(), m(ue);
        },
        className: x(
          "flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] text-xs transition-colors",
          !p && "py-1.5",
          ue.disabled ? "opacity-45 cursor-not-allowed" : ct && f && Z ? "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]" : Xe && !s ? "cursor-pointer bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : Ye ? "cursor-pointer bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: [
          Z ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              tabIndex: -1,
              "data-testid": `tree-select-expand-${Ne}`,
              "aria-label": re ? `收起 ${ue.title}` : `展开 ${ue.title}`,
              onClick: (nt) => {
                nt.stopPropagation(), h(ue);
              },
              className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: Pe ? /* @__PURE__ */ e(Jt, { className: "h-3 w-3 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }) : /* @__PURE__ */ e(
                Zt,
                {
                  className: x(
                    "h-3.5 w-3.5 transition-transform duration-150",
                    re && "rotate-90"
                  ),
                  "aria-hidden": "true"
                }
              )
            }
          ) : /* @__PURE__ */ e("span", { className: "inline-block h-4 w-4 shrink-0", "aria-hidden": "true" }),
          s && ue.checkable !== !1 && /* @__PURE__ */ e(
            "span",
            {
              className: "inline-flex shrink-0 items-center",
              onClick: (nt) => nt.stopPropagation(),
              onMouseDown: (nt) => nt.stopPropagation(),
              children: /* @__PURE__ */ e(
                Tr,
                {
                  size: "xs",
                  tabIndex: -1,
                  "aria-label": ue.title,
                  disabled: ue.disabled,
                  checked: Xe,
                  indeterminate: rt,
                  onChange: (nt) => v(ue, nt)
                }
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate", children: es(ue) }),
          ue.badge !== void 0 && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: ue.badge }),
          !s && Xe && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-primary)]", "aria-hidden": "true" })
        ]
      },
      Ne
    );
  };
  return /* @__PURE__ */ e(Ue, { children: w && k && cr(
    /* @__PURE__ */ l(
      "div",
      {
        ref: g,
        "data-slot": "tree-select-popover",
        "data-abc-floating": "",
        "data-motion": N,
        "data-placement": T,
        onMouseDown: (te) => te.stopPropagation(),
        style: M,
        className: x(
          "z-[1500] max-w-[min(520px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
          L ? "min-w-full" : "min-w-[240px]",
          y ? "abc-animate-popover-in" : "abc-animate-popover-out",
          C
        ),
        children: [
          (_ || E) && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
            _ ? /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                Pt,
                {
                  className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: R,
                  type: "text",
                  autoFocus: !0,
                  "data-testid": "tree-select-search-input",
                  value: D,
                  onClick: (te) => te.stopPropagation(),
                  onKeyDown: A,
                  onChange: (te) => {
                    const fe = te.target.value;
                    $ === void 0 && B(fe), S == null || S(fe), u(0), z(0), F.current && (F.current.scrollTop = 0);
                  },
                  placeholder: I,
                  className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              )
            ] }) : /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1 text-[11px] font-medium text-[var(--abc-fg-muted)]", children: [
              /* @__PURE__ */ e(Uo, { className: "h-3 w-3", "aria-hidden": "true" }),
              /* @__PURE__ */ e("span", { children: "节点结构" })
            ] }),
            E && O.treeNodes.length > 0 && /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1 text-[11px]", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "data-testid": "tree-select-expand-all",
                  onClick: (te) => {
                    te.stopPropagation(), j(qr(O.treeNodes));
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
                  onClick: (te) => {
                    te.stopPropagation(), j([]);
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
              ref: F,
              id: U,
              role: "tree",
              "aria-label": K || (typeof q == "string" ? q : "树形选项列表"),
              "aria-multiselectable": G || void 0,
              "data-tree-scroll-host": "",
              "data-virtual": p ? "true" : "false",
              onScroll: (te) => {
                p && z(te.currentTarget.scrollTop);
              },
              style: { maxHeight: `${W}px` },
              className: "overflow-y-auto p-1",
              children: r.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: X }) : p ? /* @__PURE__ */ e(
                "div",
                {
                  "data-testid": "tree-select-virtual-spacer",
                  style: {
                    height: `${se}px`,
                    position: "relative"
                  },
                  children: P.map((te, fe) => {
                    const ve = V + fe;
                    return ke(te, ve, {
                      position: "absolute",
                      top: `${ve * de}px`,
                      left: 0,
                      right: 0,
                      height: `${de}px`
                    });
                  })
                }
              ) : P.map((te, fe) => ke(te, fe))
            }
          )
        ]
      }
    ),
    k
  ) });
};
function Ym(t, r) {
  var ca;
  const {
    treeData: a = [],
    fieldNames: n,
    treeDataSimpleMode: s = !1,
    loadData: o,
    treeLoadedKeys: d,
    value: c,
    defaultValue: b,
    onChange: i,
    onValueChange: u,
    multiple: m = !1,
    treeCheckable: p = !1,
    treeCheckStrictly: f = !1,
    showCheckedStrategy: h,
    selectableLeafOnly: v = !1,
    maxTagCount: w,
    treeDefaultExpandAll: k = !1,
    treeDefaultExpandedKeys: g,
    treeExpandedKeys: N,
    onTreeExpand: T,
    showToolbar: M,
    searchable: L,
    showSearch: C,
    searchValue: y,
    onSearch: _,
    searchPlaceholder: E = "搜索节点或输入拼音首字母...",
    treeNodeFilterProp: R = "both",
    virtual: D = !0,
    listHeight: A = 280,
    itemHeight: $ = 30,
    label: B,
    error: S,
    invalid: z = !1,
    helperText: F,
    required: I = !1,
    placeholder: O = "请选择",
    allowClear: j,
    clearable: U,
    disabled: K = !1,
    id: q,
    name: G,
    size: W,
    motion: X,
    className: se,
    wrapperClassName: P,
    dropdownClassName: V,
    matchWidth: de = !0,
    portalContainer: ke,
    container: te,
    emptyText: fe = "暂无匹配节点",
    "aria-label": ve,
    "aria-describedby": ue,
    ...Ne
  } = t, Ie = je(W === "ghost" ? "sm" : W, "sm"), Ee = Be(X), _e = Tt(), Z = q || `abc-treeselect-${_e}`, re = `${Z}-tree`, Pe = `${Z}-feedback`, Ye = typeof process < "u" && ((ca = process.env) == null ? void 0 : ca.NODE_ENV) === "test" || typeof import.meta < "u" && !1, Xe = !!p, rt = !!(m || Xe), ct = h ?? (Xe && !f ? "SHOW_PARENT" : "SHOW_ALL"), nt = !!(L ?? C), Dt = !!(j ?? U), be = !!(z || S), Te = M ?? (rt || nt), pe = oe(
    () => Tu(a, {
      fieldNames: n,
      treeDataSimpleMode: s
    }),
    [a, n, s]
  ), xe = c !== void 0, [dt, We] = H(() => b !== void 0 ? b : rt ? [] : ""), $e = xe ? c : dt, Qe = oe(
    () => yo($e, rt),
    [$e, rt]
  ), lt = oe(() => Xe ? Iu(
    pe.treeNodes,
    Qe,
    f
  ) : {
    checkedKeys: Qe,
    halfCheckedKeys: []
  }, [Xe, pe.treeNodes, Qe, f]), Lt = oe(
    () => new Set(lt.checkedKeys.map((ae) => String(ae))),
    [lt.checkedKeys]
  ), vt = oe(
    () => new Set(lt.halfCheckedKeys.map((ae) => String(ae))),
    [lt.halfCheckedKeys]
  ), mt = oe(() => rt ? Xe ? ro(
    pe.treeNodes,
    lt.checkedKeys,
    ct,
    f
  ) : Qe : Qe.slice(0, 1), [
    rt,
    Xe,
    Qe,
    pe.treeNodes,
    lt.checkedKeys,
    ct,
    f
  ]), It = oe(
    () => mt.map((ae) => {
      const He = pe.nodeMap.get(String(ae)), Ke = He ? es(He) : String(ae), tt = He ? He.title : typeof Ke == "string" || typeof Ke == "number" ? String(Ke) : Ea(Ke) || String(ae);
      return {
        key: ae,
        keyStr: String(ae),
        node: He,
        label: Ke,
        title: tt
      };
    }),
    [mt, pe.nodeMap]
  ), at = N !== void 0, [it, Rt] = H(
    () => g && g.length > 0 ? g : k ? qr(pe.treeNodes) : []
  ), Q = ce(
    !!(g != null && g.length) || pe.treeNodes.length > 0
  );
  we(() => {
    at || !k || !Q.current && pe.treeNodes.length > 0 && (Q.current = !0, Rt(qr(pe.treeNodes)));
  }, [at, k, pe.treeNodes]);
  const [me, ze] = H(() => /* @__PURE__ */ new Set()), [Fe, ft] = H(() => /* @__PURE__ */ new Set()), ut = oe(() => d !== void 0 ? new Set(d.map((ae) => String(ae))) : me, [d, me]), [_t, ht] = H(!1), [Qt, Ot] = H(""), Bt = y !== void 0 ? y : Qt, [le, Ze] = H(0), [st, bt] = H(0), { isMounted: ot, isVisible: Mt } = _r(
    _t,
    Ee === "none" || Ye ? 0 : 140
  ), Ut = ce(null), Ft = ce(null), Oe = ce(null), sr = ce(null), er = ce(null), fr = ce({}), wr = ge(
    (ae) => {
      Ft.current = ae, typeof r == "function" ? r(ae) : r && (r.current = ae);
    },
    [r]
  ), { style: ie, actualSide: ye, portalContainer: De } = $r({
    open: ot,
    triggerRef: Ft,
    floatingRef: Oe,
    placement: "bottomLeft",
    offset: 6,
    matchWidth: de
  }), Y = ke ?? te ?? De, { filteredNodes: J, autoExpandedKeys: he } = oe(
    () => _u(pe.treeNodes, Bt, R),
    [pe.treeNodes, Bt, R]
  ), ne = at ? N : it, Se = oe(() => {
    const ae = new Set(ne.map((He) => String(He)));
    return Bt.trim() && he.forEach((He) => ae.add(String(He))), ae;
  }, [ne, Bt, he]), Ce = ge(
    (ae) => !!(ae.children && ae.children.length > 0 || o && ae.isLeaf !== !0 && !ut.has(String(ae.key))),
    [o, ut]
  ), Ae = oe(
    () => Mu(J, Se, Ce),
    [J, Se, Ce]
  ), et = ge(
    (ae) => !Ce(ae),
    [Ce]
  ), yt = ge(
    (ae) => ae.disabled ? !0 : Xe ? ae.checkable === !1 : !!(ae.selectable === !1 || v && !et(ae)),
    [Xe, v, et]
  ), wt = ge(
    (ae) => {
      at || Rt(ae), T == null || T(ae);
    },
    [at, T]
  ), zt = ge(
    async (ae) => {
      const He = String(ae.key);
      if (Se.has(He)) {
        wt(ne.filter((tt) => String(tt) !== He));
        return;
      }
      if (o && (!ae.children || ae.children.length === 0) && ae.isLeaf !== !0 && !ut.has(He)) {
        if (Fe.has(He)) return;
        ft((tt) => {
          const Nt = new Set(tt);
          return Nt.add(He), Nt;
        });
        try {
          await o(ae), d === void 0 && ze((tt) => {
            const Nt = new Set(tt);
            return Nt.add(He), Nt;
          });
        } finally {
          ft((tt) => {
            const Nt = new Set(tt);
            return Nt.delete(He), Nt;
          });
        }
      }
      wt([...ne, ae.key]);
    },
    [
      Se,
      ne,
      wt,
      o,
      ut,
      Fe,
      d
    ]
  ), xt = ge(
    (ae, He = {}) => {
      xe || We(ae);
      const tt = yo(ae, rt).map((Nt) => {
        const gt = pe.nodeMap.get(String(Nt));
        return gt ? es(gt) : String(Nt);
      });
      u == null || u(ae), i == null || i(ae, tt, He);
    },
    [xe, rt, pe.nodeMap, u, i]
  ), tr = ge(
    (ae, He) => {
      if (ae.disabled || ae.checkable === !1) return;
      const Ke = String(ae.key), tt = Lt.has(Ke), Nt = He !== void 0 ? He : !tt, gt = ll(
        pe.treeNodes,
        lt.checkedKeys,
        ae,
        Nt,
        f
      ), ur = ro(
        pe.treeNodes,
        gt.checkedKeys,
        ct,
        f
      );
      xt(ur, {
        triggerNode: ae,
        checked: Nt,
        halfCheckedKeys: gt.halfCheckedKeys
      });
    },
    [
      Lt,
      pe.treeNodes,
      lt.checkedKeys,
      f,
      ct,
      xt
    ]
  ), $t = ge(
    (ae) => {
      var He;
      if (!ae.disabled) {
        if (Xe) {
          if (ae.checkable === !1) {
            Ce(ae) && zt(ae);
            return;
          }
          tr(ae);
          return;
        }
        if (v && !et(ae)) {
          zt(ae);
          return;
        }
        if (ae.selectable === !1) {
          Ce(ae) && zt(ae);
          return;
        }
        if (rt) {
          const Ke = String(ae.key), tt = Qe.some((gt) => String(gt) === Ke), Nt = tt ? Qe.filter((gt) => String(gt) !== Ke) : [...Qe, ae.value];
          xt(Nt, { triggerNode: ae, checked: !tt });
          return;
        }
        xt(ae.value, { triggerNode: ae, checked: !0 }), ht(!1), (He = Ft.current) == null || He.focus();
      }
    },
    [
      Xe,
      Ce,
      zt,
      tr,
      v,
      et,
      rt,
      Qe,
      xt
    ]
  );
  we(() => {
    if (!_t) {
      y === void 0 && Ot(""), bt(0);
      return;
    }
    const ae = (Ke) => {
      var Nt, gt;
      const tt = Ke.target;
      tt && ((Nt = Ut.current) != null && Nt.contains(tt) || (gt = Oe.current) != null && gt.contains(tt) || ht(!1));
    }, He = (Ke) => {
      var tt;
      Ke.key === "Escape" && (Ke.preventDefault(), Ke.stopPropagation(), ht(!1), (tt = Ft.current) == null || tt.focus());
    };
    return document.addEventListener("mousedown", ae), document.addEventListener("touchstart", ae, { passive: !0 }), document.addEventListener("keydown", He, !0), () => {
      document.removeEventListener("mousedown", ae), document.removeEventListener("touchstart", ae), document.removeEventListener("keydown", He, !0);
    };
  }, [_t, y]), we(() => {
    if (Ae.length === 0) {
      le !== 0 && Ze(0);
      return;
    }
    le >= Ae.length && Ze(Ae.length - 1);
  }, [Ae.length, le]);
  const Kt = D && Ae.length > Um;
  we(() => {
    if (!_t || Ae.length === 0) return;
    const ae = er.current;
    if (!ae) return;
    if (Kt) {
      const gt = le * $, ur = gt + $;
      if (gt < ae.scrollTop)
        ae.scrollTop = gt, bt(gt);
      else if (ur > ae.scrollTop + A) {
        const zr = ur - A;
        ae.scrollTop = zr, bt(zr);
      }
      return;
    }
    const He = Ae[le];
    if (!He) return;
    const Ke = fr.current[He.keyStr];
    if (!Ke) return;
    const tt = Ke.offsetTop, Nt = tt + Ke.offsetHeight;
    tt < ae.scrollTop ? ae.scrollTop = tt : Nt > ae.scrollTop + ae.clientHeight && (ae.scrollTop = Nt - ae.clientHeight);
  }, [_t, le, Kt, $, A, Ae]);
  const Br = () => {
    if (K) return;
    const ae = new Set(Qe.map((Ke) => String(Ke))), He = Ae.findIndex(
      (Ke) => !Ke.node.disabled && ae.has(Ke.keyStr)
    );
    if (He >= 0)
      Ze(He);
    else {
      const Ke = Ae.findIndex((tt) => !tt.node.disabled);
      Ze(Ke >= 0 ? Ke : 0);
    }
    ht(!0);
  }, sa = (ae) => {
    var Ke;
    if (Ae.length === 0) return;
    let He = le;
    for (let tt = 0; tt < Ae.length; tt++)
      if (He = (He + ae + Ae.length) % Ae.length, !((Ke = Ae[He]) != null && Ke.node.disabled)) {
        Ze(He);
        return;
      }
  }, In = (ae) => {
    var tt, Nt;
    if (K) return;
    const He = ae.target === sr.current;
    if (ae.key === "Escape") {
      _t && (ae.preventDefault(), ae.stopPropagation(), ht(!1), (tt = Ft.current) == null || tt.focus());
      return;
    }
    if (ae.key === "Tab") {
      _t && ht(!1);
      return;
    }
    if (!_t) {
      if (ae.key === "ArrowDown" || ae.key === "ArrowUp" || ae.key === "Enter" || ae.key === " ") {
        ae.preventDefault(), Br();
        return;
      }
      if (ae.key === "Backspace" && rt && It.length > 0) {
        const gt = It[It.length - 1];
        gt && !((Nt = gt.node) != null && Nt.disabled) && (ae.preventDefault(), Xe && gt.node ? tr(gt.node, !1) : xt(Qe.filter((ur) => String(ur) !== gt.keyStr)));
      }
      return;
    }
    if (ae.key === "ArrowDown") {
      ae.preventDefault(), sa(1);
      return;
    }
    if (ae.key === "ArrowUp") {
      ae.preventDefault(), sa(-1);
      return;
    }
    const Ke = Ae[le];
    if (Ke) {
      if (ae.key === "ArrowRight" && !He) {
        ae.preventDefault(), Ke.hasChildren && !Ke.isExpanded ? zt(Ke.node) : Ke.hasChildren && Ke.isExpanded && sa(1);
        return;
      }
      if (ae.key === "ArrowLeft" && !He) {
        if (ae.preventDefault(), Ke.hasChildren && Ke.isExpanded)
          zt(Ke.node);
        else if (Ke.parentKey !== null) {
          const gt = String(Ke.parentKey), ur = Ae.findIndex((zr) => zr.keyStr === gt);
          ur >= 0 && Ze(ur);
        }
        return;
      }
      (ae.key === "Enter" || ae.key === " " && !He) && (ae.preventDefault(), $t(Ke.node));
    }
  }, oa = w === "responsive" ? 3 : typeof w == "number" && w >= 0 ? w : Number.POSITIVE_INFINITY, la = rt ? It.slice(0, oa) : It, Pr = rt ? It.slice(oa) : [], _n = Ae.length * $, ia = Kt ? Math.max(0, Math.floor(st / $) - xo) : 0, za = Kt ? Math.ceil(A / $) + xo * 2 : Ae.length, ja = Kt ? Math.min(Ae.length, ia + za) : Ae.length, Fa = Kt ? Ae.slice(ia, ja) : Ae, Mn = [
    ue,
    S || F ? Pe : void 0
  ].filter(Boolean).join(" ");
  return {
    resolvedSize: Ie,
    resolvedMotion: Ee,
    triggerId: Z,
    treeId: re,
    feedbackId: Pe,
    isCheckable: Xe,
    isMultiMode: rt,
    isSearchable: nt,
    isClearable: Dt,
    isInvalid: be,
    resolvedShowToolbar: Te,
    normalized: pe,
    selectedRawKeys: Qe,
    checkedKeyStrSet: Lt,
    halfCheckedKeyStrSet: vt,
    displayTagKeys: mt,
    displayItems: It,
    loadedKeyStrSet: ut,
    effectiveKeyword: Bt,
    setInternalKeyword: Ot,
    wrapperRef: Ut,
    triggerRef: Ft,
    popoverRef: Oe,
    searchInputRef: sr,
    scrollHostRef: er,
    rowRefs: fr,
    mergeTriggerRef: wr,
    effectivePortalContainer: Y,
    flattenedRows: Ae,
    isRowSelectionBlocked: yt,
    commitExpandedKeys: wt,
    toggleExpandNode: zt,
    emitValueChange: xt,
    handleToggleCheck: tr,
    handleSelectRow: $t,
    loadingKeys: Fe,
    activeIndex: le,
    setActiveIndex: Ze,
    open: _t,
    setOpen: ht,
    openMenu: Br,
    handleKeyDown: In,
    effectiveMaxTags: oa,
    visibleTags: la,
    hiddenTags: Pr,
    totalVirtualHeight: _n,
    virtualStartIndex: ia,
    renderedRows: Fa,
    useVirtualWindow: Kt,
    describedByIds: Mn,
    actualSide: ye,
    floatingStyle: ie,
    isMounted: ot,
    isVisible: Mt,
    setScrollTop: bt,
    wrapperClassName: P,
    label: B,
    required: I,
    name: G,
    restTriggerProps: Ne,
    disabled: K,
    ariaLabel: ve,
    placeholder: O,
    size: W,
    className: se,
    matchWidth: de,
    dropdownClassName: V,
    searchValue: y,
    onSearch: _,
    searchPlaceholder: E,
    listHeight: A,
    emptyText: fe,
    itemHeight: $,
    error: S,
    helperText: F,
    selectableLeafOnly: v
  };
}
const Cl = pt.forwardRef(
  (t, r) => {
    var K;
    const a = Ym(t, r), {
      wrapperRef: n,
      wrapperClassName: s,
      label: o,
      triggerId: d,
      required: c,
      name: b,
      isMultiMode: i,
      displayTagKeys: u,
      selectedRawKeys: m,
      mergeTriggerRef: p,
      restTriggerProps: f,
      disabled: h,
      open: v,
      isMounted: w,
      treeId: k,
      isInvalid: g,
      describedByIds: N,
      ariaLabel: T,
      placeholder: M,
      resolvedMotion: L,
      handleKeyDown: C,
      setOpen: y,
      openMenu: _,
      size: E,
      resolvedSize: R,
      className: D,
      displayItems: A,
      visibleTags: $,
      isCheckable: B,
      handleToggleCheck: S,
      emitValueChange: z,
      hiddenTags: F,
      isClearable: I,
      error: O,
      feedbackId: j,
      helperText: U
    } = a;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: n,
        "data-slot": "tree-select-wrapper",
        className: x("w-full", s),
        children: [
          o && /* @__PURE__ */ l(
            "label",
            {
              htmlFor: d,
              className: "mb-1.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)] select-none",
              children: [
                /* @__PURE__ */ e("span", { children: o }),
                c && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" })
              ]
            }
          ),
          b && /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: b,
              value: i ? u.join(",") : String(m[0] ?? "")
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              ref: p,
              ...f,
              id: d,
              role: "combobox",
              tabIndex: h ? -1 : 0,
              "aria-expanded": v,
              "aria-haspopup": "tree",
              "aria-controls": w ? k : void 0,
              "aria-invalid": g || void 0,
              "aria-describedby": N || void 0,
              "aria-disabled": h || void 0,
              "aria-label": T || (typeof o == "string" ? o : M),
              "data-slot": "tree-select-trigger",
              "data-state": v ? "open" : "closed",
              "data-motion": L,
              onKeyDown: C,
              onClick: (q) => {
                q.stopPropagation(), !h && (v ? y(!1) : _());
              },
              className: x(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                E === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : x(
                  "w-full px-2.5 py-1",
                  yr,
                  i ? Vm[R] : Wm[R],
                  v && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  g && "border-[var(--abc-danger)]",
                  h && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                D
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: A.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: M }) : i ? /* @__PURE__ */ l(Ue, { children: [
                  $.map((q) => {
                    var G;
                    return /* @__PURE__ */ l(
                      "span",
                      {
                        "data-testid": "tree-select-tag",
                        className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                        children: [
                          /* @__PURE__ */ e("span", { className: "max-w-32 truncate", children: q.label }),
                          !h && !((G = q.node) != null && G.disabled) && /* @__PURE__ */ e(
                            "button",
                            {
                              type: "button",
                              "aria-label": `移除 ${q.title}`,
                              onClick: (W) => {
                                W.stopPropagation(), B && q.node ? S(q.node, !1) : z(
                                  m.filter((X) => String(X) !== q.keyStr)
                                );
                              },
                              className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                              children: /* @__PURE__ */ e(Ct, { className: "h-2.5 w-2.5", "aria-hidden": "true" })
                            }
                          )
                        ]
                      },
                      q.keyStr
                    );
                  }),
                  F.length > 0 && /* @__PURE__ */ l(
                    "span",
                    {
                      "data-testid": "tree-select-max-tag",
                      title: F.map((q) => q.title).join("、"),
                      className: "inline-flex items-center rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)]",
                      children: [
                        "+",
                        F.length
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (K = A[0]) == null ? void 0 : K.label }) }),
                /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  I && A.length > 0 && !h && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "tree-select-clear",
                      "aria-label": "清空",
                      onClick: (q) => {
                        q.stopPropagation(), z(i ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    Xt,
                    {
                      className: x(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        v && "rotate-180"
                      ),
                      "aria-hidden": "true"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e(Gm, { state: a }),
          O && /* @__PURE__ */ e("p", { id: j, className: "mt-1 text-xs text-[var(--abc-danger)]", children: O }),
          U && !O && /* @__PURE__ */ e("p", { id: j, className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: U })
        ]
      }
    );
  }
);
Cl.displayName = "TreeSelect";
const Da = Object.assign(Cl, {
  SHOW_ALL: "SHOW_ALL",
  SHOW_PARENT: "SHOW_PARENT",
  SHOW_CHILD: "SHOW_CHILD"
});
function Ph({
  triggerClassName: t,
  contentClassName: r,
  ...a
}) {
  return /* @__PURE__ */ e(
    Da,
    {
      ...a,
      className: t,
      dropdownClassName: r
    }
  );
}
const qm = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
};
function Qa(t, r) {
  return String(typeof t == "string" || typeof t == "number" ? t : r);
}
function Ua(t, r) {
  return t.length === r.length && t.every((a, n) => String(a) === String(r[n]));
}
function Ga(t, r) {
  const a = [];
  let n = t;
  for (const s of r) {
    const o = n.find((d) => String(d.value) === String(s));
    if (!o) break;
    a.push(o), n = o.children ?? [];
  }
  return a;
}
function El(t, r, a, n = [], s = [], o = !1) {
  const d = [];
  for (const c of t) {
    const b = [...n, c.value], i = [...s, c], u = o || !!c.disabled, m = !!(c.children && c.children.length > 0);
    (!m || a) && d.push({
      path: b,
      options: i,
      text: i.map((p) => Qa(p.label, p.value)).join(r),
      disabled: u
    }), m && d.push(
      ...El(c.children, r, a, b, i, u)
    );
  }
  return d;
}
const Tl = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  multiple: s = !1,
  changeOnSelect: o = !1,
  searchable: d = !1,
  clearable: c = !1,
  expandTrigger: b = "click",
  separator: i = " / ",
  showFullPath: u = !0,
  maxTagCount: m = 3,
  loadData: p,
  label: f,
  error: h,
  helperText: v,
  required: w = !1,
  placeholder: k = "请选择",
  disabled: g = !1,
  size: N,
  motion: T,
  matchWidth: M = !1,
  emptyText: L = "暂无匹配项",
  ariaLabel: C,
  id: y,
  className: _
}) => {
  const E = je(N, "sm"), R = Be(T), D = Tt(), A = y || `abc-cascader-${D}`, $ = `${A}-panel`, B = `${A}-feedback`, S = s ? [] : [], [z, F] = Vt({
    value: r,
    defaultValue: a ?? S
  }), [I, O] = H(!1), [j, U] = H(""), [K, q] = H([]), [G, W] = H(() => /* @__PURE__ */ new Set()), [X, se] = H(0), P = ce(null), V = ce(null), de = ce(null), { isMounted: ke, isVisible: te } = _r(I, R === "none" ? 0 : 180), { style: fe, actualSide: ve, portalContainer: ue } = $r({
    open: ke,
    triggerRef: P,
    floatingRef: V,
    placement: "bottomLeft",
    offset: 6,
    matchWidth: M
  }), Ne = oe(() => {
    if (s)
      return Array.isArray(z) ? z.filter((Te) => Array.isArray(Te)) : [];
    const be = Array.isArray(z) ? z.filter(
      (Te) => typeof Te == "string" || typeof Te == "number"
    ) : [];
    return be.length > 0 ? [be] : [];
  }, [z, s]), Ie = oe(() => {
    const be = [t];
    let Te = t;
    for (const pe of K) {
      const xe = Te.find((dt) => String(dt.value) === String(pe));
      if (!xe || !xe.children || xe.children.length === 0) break;
      be.push(xe.children), Te = xe.children;
    }
    return be;
  }, [t, K]), Ee = oe(() => {
    if (!d || !j.trim()) return [];
    const be = j.trim();
    return El(t, i, s ? !1 : o).filter(
      (Te) => Wt(Te.text, be)
    );
  }, [d, j, t, i, s, o]);
  we(() => {
    if (!I) {
      U("");
      return;
    }
    !s && Ne[0] ? q(Ne[0]) : K.length === 0 && t[0] && q([]), se(0), d && window.setTimeout(() => {
      var be;
      return (be = de.current) == null ? void 0 : be.focus();
    }, 0);
  }, [I]), we(() => {
    if (!I) return;
    const be = (Te) => {
      var xe, dt;
      const pe = Te.target;
      (xe = P.current) != null && xe.contains(pe) || (dt = V.current) != null && dt.contains(pe) || O(!1);
    };
    return document.addEventListener("mousedown", be), () => document.removeEventListener("mousedown", be);
  }, [I]);
  const _e = (be) => {
    var pe;
    const Te = Ga(t, be);
    F(be), n == null || n(be, Te), O(!1), (pe = P.current) == null || pe.focus();
  }, Z = (be) => {
    const pe = Ne.some((xe) => Ua(xe, be)) ? Ne.filter((xe) => !Ua(xe, be)) : [...Ne, be];
    F(pe), n == null || n(
      pe,
      pe.map((xe) => Ga(t, xe))
    );
  }, re = async (be, Te) => {
    if (be.disabled) return;
    const pe = [...K.slice(0, Te), be.value];
    q(pe), se(Te);
    const xe = !!(be.children && be.children.length > 0);
    if (!!(p && !xe && be.isLeaf === !1) && p) {
      const We = pe.map(String).join(">");
      W(($e) => new Set($e).add(We));
      try {
        await p(Ga(t, pe));
      } finally {
        W(($e) => {
          const Qe = new Set($e);
          return Qe.delete(We), Qe;
        });
      }
      return;
    }
    if (s) {
      xe || Z(pe);
      return;
    }
    (!xe || o) && _e(pe);
  }, Pe = (be, Te) => {
    b !== "hover" || be.disabled || be.children && be.children.length > 0 && q([...K.slice(0, Te), be.value]);
  }, Ye = ge(
    (be) => {
      const Te = Ga(t, be);
      if (Te.length === 0) return be.join(i);
      if (!u) {
        const pe = Te[Te.length - 1];
        return Qa(pe.label, pe.value);
      }
      return Te.map((pe) => Qa(pe.label, pe.value)).join(i);
    },
    [t, i, u]
  ), Xe = (be) => {
    var dt, We;
    if (g) return;
    if (!I) {
      (be.key === "ArrowDown" || be.key === "Enter" || be.key === " ") && (be.preventDefault(), O(!0));
      return;
    }
    if (be.key === "Escape") {
      be.preventDefault(), O(!1), (dt = P.current) == null || dt.focus();
      return;
    }
    const Te = (Ie[X] ?? []).filter(($e) => !$e.disabled);
    if (Te.length === 0) return;
    const pe = K[X], xe = Te.findIndex(($e) => String($e.value) === String(pe));
    if (be.key === "ArrowDown") {
      be.preventDefault();
      const $e = Te[(xe + 1 + Te.length) % Te.length];
      q([...K.slice(0, X), $e.value]);
    } else if (be.key === "ArrowUp") {
      be.preventDefault();
      const $e = Te[(xe - 1 + Te.length) % Te.length];
      q([...K.slice(0, X), $e.value]);
    } else if (be.key === "ArrowRight") {
      be.preventDefault();
      const $e = Te[Math.max(0, xe)];
      if ((We = $e == null ? void 0 : $e.children) != null && We.length) {
        const Qe = $e.children.find((lt) => !lt.disabled);
        q(
          Qe ? [...K.slice(0, X), $e.value, Qe.value] : [...K.slice(0, X), $e.value]
        ), se((lt) => lt + 1);
      }
    } else if (be.key === "ArrowLeft")
      be.preventDefault(), X > 0 && (q(($e) => $e.slice(0, X)), se(($e) => Math.max(0, $e - 1)));
    else if (be.key === "Enter") {
      be.preventDefault();
      const $e = Te[Math.max(0, xe)];
      $e && re($e, X);
    }
  }, rt = (be) => {
    be.stopPropagation();
    const Te = s ? [] : [];
    F(Te), q([]), n == null || n(Te, []);
  }, ct = Ne.length > 0, nt = s ? Ne.slice(0, m) : [], Dt = s ? Math.max(0, Ne.length - m) : 0;
  return /* @__PURE__ */ l("div", { className: x("w-full", _), children: [
    f ? /* @__PURE__ */ l(
      "label",
      {
        htmlFor: A,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: [
          f,
          w ? /* @__PURE__ */ e("span", { className: "ml-0.5 text-[var(--abc-danger)]", children: "*" }) : null
        ]
      }
    ) : null,
    /* @__PURE__ */ l(
      "button",
      {
        ref: P,
        id: A,
        type: "button",
        role: "combobox",
        "aria-label": C,
        "aria-expanded": I,
        "aria-controls": ke ? $ : void 0,
        "aria-haspopup": "listbox",
        "aria-invalid": !!h || void 0,
        "aria-describedby": h || v ? B : void 0,
        disabled: g,
        onClick: () => !g && O((be) => !be),
        onKeyDown: Xe,
        className: x(
          yr,
          qm[E],
          "flex items-center justify-between gap-2 px-2.5 py-1 text-left",
          h && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20"
        ),
        children: [
          /* @__PURE__ */ e("span", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: ct ? s ? /* @__PURE__ */ l(Ue, { children: [
            nt.map((be) => {
              const Te = be.map(String).join(">");
              return /* @__PURE__ */ l(
                "span",
                {
                  className: "inline-flex max-w-[180px] items-center gap-1 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg)]",
                  children: [
                    /* @__PURE__ */ e("span", { className: "truncate", children: Ye(be) }),
                    g ? null : /* @__PURE__ */ e(
                      "span",
                      {
                        role: "button",
                        tabIndex: -1,
                        "aria-label": `移除 ${Ye(be)}`,
                        onClick: (pe) => {
                          pe.stopPropagation(), Z(be);
                        },
                        className: "rounded hover:text-[var(--abc-danger)]",
                        children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
                      }
                    )
                  ]
                },
                Te
              );
            }),
            Dt > 0 ? /* @__PURE__ */ l("span", { className: "rounded bg-[var(--abc-primary-soft)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-primary)]", children: [
              "+",
              Dt
            ] }) : null
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: Ye(Ne[0]) }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: k }) }),
          /* @__PURE__ */ l("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && ct && !g ? /* @__PURE__ */ e(
              "span",
              {
                role: "button",
                tabIndex: -1,
                "aria-label": "清空级联选择",
                onClick: rt,
                className: "rounded p-0.5 hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]",
                children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
              }
            ) : null,
            /* @__PURE__ */ e(
              Xt,
              {
                className: x(
                  "h-3.5 w-3.5 transition-transform duration-150",
                  I && "rotate-180"
                )
              }
            )
          ] })
        ]
      }
    ),
    ke && ue && cr(
      /* @__PURE__ */ l(
        "div",
        {
          ref: V,
          id: $,
          role: "listbox",
          "aria-multiselectable": s || void 0,
          "data-side": ve,
          "data-motion": R,
          style: fe,
          onKeyDown: Xe,
          className: x(
            "abc-motion-popover z-[1050] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-xl",
            te ? "opacity-100 scale-100" : "opacity-0 scale-95"
          ),
          children: [
            d ? /* @__PURE__ */ e("div", { className: "border-b border-[var(--abc-border)] p-2", children: /* @__PURE__ */ l("div", { className: "relative", children: [
              /* @__PURE__ */ e(Pt, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-muted)]" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: de,
                  type: "text",
                  value: j,
                  onChange: (be) => U(be.target.value),
                  placeholder: "搜索全路径或输入拼音首字母...",
                  "aria-label": "搜索级联选项",
                  className: "h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-8 pr-2.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none"
                }
              )
            ] }) }) : null,
            d && j.trim() ? /* @__PURE__ */ e("div", { className: "max-h-60 min-w-[240px] overflow-y-auto p-1", children: Ee.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: L }) : Ee.map((be) => {
              const Te = be.path.map(String).join(">"), pe = Ne.some((xe) => Ua(xe, be.path));
              return /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "option",
                  "aria-selected": pe,
                  disabled: be.disabled,
                  onClick: () => s ? Z(be.path) : _e(be.path),
                  className: x(
                    "flex w-full items-center justify-between gap-2 rounded px-2.5 py-1.5 text-left text-xs transition-colors",
                    be.disabled ? "cursor-not-allowed opacity-50" : "hover:bg-[var(--abc-bg-muted)]",
                    pe && "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]"
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: "truncate", children: be.text }),
                    pe ? /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 shrink-0" }) : null
                  ]
                },
                Te
              );
            }) }) : /* @__PURE__ */ e("div", { className: "flex max-h-64 divide-x divide-[var(--abc-border)] overflow-x-auto", children: Ie.map((be, Te) => /* @__PURE__ */ e(
              "ul",
              {
                className: "min-w-[160px] max-w-[220px] flex-shrink-0 overflow-y-auto p-1",
                children: be.length === 0 ? /* @__PURE__ */ e("li", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: L }) : be.map((pe) => {
                  const xe = String(K[Te] ?? "") === String(pe.value), dt = [...K.slice(0, Te), pe.value], We = Ne.some((lt) => Ua(lt, dt)), $e = !!(pe.children && pe.children.length > 0), Qe = G.has(dt.map(String).join(">"));
                  return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ l(
                    "div",
                    {
                      onMouseEnter: () => Pe(pe, Te),
                      className: x(
                        "flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-xs transition-colors",
                        pe.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]",
                        xe && "bg-[var(--abc-bg-muted)] font-medium",
                        We && "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]"
                      ),
                      children: [
                        s && !$e ? /* @__PURE__ */ e(
                          Tr,
                          {
                            size: "xs",
                            checked: We,
                            disabled: pe.disabled,
                            onChange: () => Z(dt),
                            "aria-label": Qa(pe.label, pe.value)
                          }
                        ) : null,
                        /* @__PURE__ */ l(
                          "button",
                          {
                            type: "button",
                            role: "option",
                            "aria-selected": We || xe,
                            disabled: pe.disabled,
                            onClick: () => void re(pe, Te),
                            className: "flex min-w-0 flex-1 items-center justify-between gap-2 text-left",
                            children: [
                              /* @__PURE__ */ e("span", { className: "truncate", children: pe.label }),
                              /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: Qe ? /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 animate-spin" }) : $e || pe.isLeaf === !1 ? /* @__PURE__ */ e(Zt, { className: "h-3.5 w-3.5" }) : We && !s ? /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }) : null })
                            ]
                          }
                        )
                      ]
                    }
                  ) }, String(pe.value));
                })
              },
              Te
            )) })
          ]
        }
      ),
      ue
    ),
    h ? /* @__PURE__ */ e("p", { id: B, role: "alert", className: "mt-1 text-xs text-[var(--abc-danger)]", children: h }) : v ? /* @__PURE__ */ e("p", { id: B, className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: v }) : null
  ] });
};
Tl.displayName = "Cascader";
const Xm = 40, wo = 6, No = ({
  paneId: t,
  title: r,
  items: a,
  selectedSet: n,
  onToggleKey: s,
  onToggleAll: o,
  onInvertSelection: d,
  searchable: c,
  searchPlaceholder: b,
  keyword: i,
  onKeywordChange: u,
  showSelectAll: m,
  virtual: p,
  listHeight: f,
  itemHeight: h,
  disabled: v,
  emptyText: w,
  oneWayRemove: k
}) => {
  const [g, N] = H(0), T = oe(() => {
    const B = i.trim();
    return B ? a.filter(
      (S) => Wt(S.title, B) || (S.description ? Wt(S.description, B) : !1)
    ) : a;
  }, [a, i]), M = oe(
    () => T.filter((B) => !B.disabled).map((B) => B.key),
    [T]
  ), L = oe(
    () => M.filter((B) => n.has(B)).length,
    [M, n]
  ), C = M.length > 0 && L === M.length, y = L > 0 && L < M.length, _ = p && T.length > Xm, E = T.length * h, R = _ ? Math.max(0, Math.floor(g / h) - wo) : 0, D = _ ? Math.ceil(f / h) + wo * 2 : T.length, A = _ ? Math.min(T.length, R + D) : T.length, $ = T.slice(R, A);
  return /* @__PURE__ */ l(
    "section",
    {
      "aria-labelledby": `${t}-title`,
      className: "flex min-w-[220px] flex-1 flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/70 px-3 py-2", children: [
          /* @__PURE__ */ l("div", { className: "flex min-w-0 items-center gap-2", children: [
            m && !k ? /* @__PURE__ */ e(
              Tr,
              {
                size: "xs",
                checked: C,
                indeterminate: y,
                disabled: v || M.length === 0,
                onChange: (B) => o(M, B),
                "aria-label": `全选 ${typeof r == "string" ? r : "列表"}`
              }
            ) : null,
            /* @__PURE__ */ e(
              "span",
              {
                id: `${t}-title`,
                className: "truncate text-xs font-semibold text-[var(--abc-fg-primary)]",
                children: r
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
            m && !k && M.length > 0 ? /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                disabled: v,
                onClick: () => d(M),
                className: "rounded px-1 py-0.5 text-[11px] text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] disabled:opacity-40",
                children: "反选"
              }
            ) : null,
            /* @__PURE__ */ e("span", { className: "font-mono tabular-nums", children: k ? `${T.length}` : `${L}/${T.length}` })
          ] })
        ] }),
        c ? /* @__PURE__ */ e("div", { className: "border-b border-[var(--abc-border)] p-2", children: /* @__PURE__ */ l("div", { className: "relative", children: [
          /* @__PURE__ */ e(Pt, { className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-muted)]" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              value: i,
              disabled: v,
              onChange: (B) => {
                u(B.target.value), N(0);
              },
              placeholder: b,
              "aria-label": `${typeof r == "string" ? r : "列表"}搜索`,
              className: "h-7 w-full rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] pl-8 pr-2.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none disabled:bg-[var(--abc-bg-muted)]"
            }
          )
        ] }) }) : null,
        /* @__PURE__ */ e(
          "div",
          {
            role: "listbox",
            "aria-multiselectable": !k || void 0,
            style: { height: f },
            onScroll: _ ? (B) => N(B.currentTarget.scrollTop) : void 0,
            className: "overflow-y-auto p-1",
            children: T.length === 0 ? /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center text-xs text-[var(--abc-fg-muted)]", children: w }) : /* @__PURE__ */ e(
              "div",
              {
                style: _ ? { height: E, position: "relative" } : void 0,
                children: $.map((B, S) => {
                  const z = R + S, F = n.has(B.key), I = v || !!B.disabled;
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      style: _ ? {
                        position: "absolute",
                        top: z * h,
                        left: 0,
                        right: 0,
                        height: h
                      } : void 0,
                      className: x(
                        "flex items-center justify-between gap-2 rounded px-2 py-1.5 text-xs transition-colors",
                        I ? "cursor-not-allowed opacity-50" : "hover:bg-[var(--abc-bg-muted)]",
                        F && !k && "bg-[var(--abc-primary-soft)]/50"
                      ),
                      children: k ? /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 items-center justify-between gap-2", children: [
                        /* @__PURE__ */ l("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e("div", { className: "truncate font-medium text-[var(--abc-fg)]", children: B.title }),
                          B.description ? /* @__PURE__ */ e("div", { className: "truncate text-[11px] text-[var(--abc-fg-muted)]", children: B.description }) : null
                        ] }),
                        /* @__PURE__ */ e(
                          "button",
                          {
                            type: "button",
                            disabled: I,
                            "aria-label": `移除 ${B.title}`,
                            onClick: () => k(B.key),
                            className: "rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)] disabled:opacity-40",
                            children: /* @__PURE__ */ e(mr, { className: "h-3.5 w-3.5" })
                          }
                        )
                      ] }) : /* @__PURE__ */ e(
                        Tr,
                        {
                          size: "xs",
                          checked: F,
                          disabled: I,
                          onChange: () => s(B.key),
                          label: B.title,
                          description: B.description,
                          className: "w-full"
                        }
                      )
                    },
                    B.key
                  );
                })
              }
            )
          }
        )
      ]
    }
  );
}, Il = ({
  dataSource: t,
  targetKeys: r,
  defaultTargetKeys: a = [],
  onChange: n,
  selectedKeys: s,
  onSelectChange: o,
  titles: d = ["待选列表", "已选列表"],
  searchable: c = !0,
  searchPlaceholder: b = "搜索名称或拼音首字母...",
  showSelectAll: i = !0,
  virtual: u = !0,
  listHeight: m = 280,
  itemHeight: p = 40,
  disabled: f = !1,
  oneWay: h = !1,
  emptyText: v = "暂无数据",
  label: w,
  error: k,
  helperText: g,
  required: N = !1,
  id: T,
  className: M
}) => {
  const L = Tt(), C = T || `abc-transfer-${L}`, y = `${C}-feedback`, [_, E] = Vt({
    value: r,
    defaultValue: a
  }), [R, D] = Vt({
    value: s,
    defaultValue: []
  }), [A, $] = H(""), [B, S] = H(""), z = oe(() => new Set(_), [_]), F = oe(() => new Set(R), [R]), I = oe(
    () => t.filter((P) => !z.has(P.key)),
    [t, z]
  ), O = oe(
    () => t.filter((P) => z.has(P.key)),
    [t, z]
  ), j = (P) => {
    D(P);
    const V = new Set(P), de = I.filter((te) => V.has(te.key)).map((te) => te.key), ke = O.filter((te) => V.has(te.key)).map((te) => te.key);
    o == null || o(de, ke);
  }, U = (P) => {
    const V = F.has(P) ? R.filter((de) => de !== P) : [...R, P];
    j(V);
  }, K = (P, V) => {
    const de = new Set(P), ke = R.filter((fe) => !de.has(fe)), te = V ? [...ke, ...P] : ke;
    j(te);
  }, q = (P) => {
    const V = new Set(P), de = R.filter((te) => !V.has(te)), ke = P.filter((te) => !F.has(te));
    j([...de, ...ke]);
  }, G = oe(
    () => I.filter((P) => !P.disabled && F.has(P.key)).map((P) => P.key),
    [I, F]
  ), W = oe(
    () => O.filter((P) => !P.disabled && F.has(P.key)).map((P) => P.key),
    [O, F]
  ), X = () => {
    if (G.length === 0 || f) return;
    const P = [..._, ...G];
    E(P);
    const V = new Set(G);
    j(R.filter((de) => !V.has(de))), n == null || n(P, "right", G);
  }, se = (P) => {
    const V = P ?? W;
    if (V.length === 0 || f) return;
    const de = new Set(V), ke = _.filter((te) => !de.has(te));
    E(ke), j(R.filter((te) => !de.has(te))), n == null || n(ke, "left", V);
  };
  return /* @__PURE__ */ l("div", { id: C, className: x("w-full", M), "aria-describedby": k || g ? y : void 0, children: [
    w ? /* @__PURE__ */ l("div", { className: "mb-1.5 text-xs font-medium text-[var(--abc-fg-secondary)]", children: [
      w,
      N ? /* @__PURE__ */ e("span", { className: "ml-0.5 text-[var(--abc-danger)]", children: "*" }) : null
    ] }) : null,
    /* @__PURE__ */ l("div", { className: "flex flex-col items-stretch gap-3 md:flex-row md:items-center", children: [
      /* @__PURE__ */ e(
        No,
        {
          paneId: `${C}-left`,
          title: d[0],
          items: I,
          selectedSet: F,
          onToggleKey: U,
          onToggleAll: K,
          onInvertSelection: q,
          searchable: c,
          searchPlaceholder: b,
          keyword: A,
          onKeywordChange: $,
          showSelectAll: i,
          virtual: u,
          listHeight: m,
          itemHeight: p,
          disabled: f,
          emptyText: v
        }
      ),
      /* @__PURE__ */ l("div", { className: "flex shrink-0 flex-row items-center justify-center gap-2 md:flex-col", children: [
        /* @__PURE__ */ e(
          Le,
          {
            type: "button",
            size: "sm",
            variant: "secondary",
            "aria-label": "移至右侧已选列表",
            disabled: f || G.length === 0,
            onClick: X,
            icon: /* @__PURE__ */ e(Zt, { className: "h-4 w-4" }),
            iconOnly: !0
          }
        ),
        h ? null : /* @__PURE__ */ e(
          Le,
          {
            type: "button",
            size: "sm",
            variant: "secondary",
            "aria-label": "移回左侧待选列表",
            disabled: f || W.length === 0,
            onClick: () => se(),
            icon: /* @__PURE__ */ e(ka, { className: "h-4 w-4" }),
            iconOnly: !0
          }
        )
      ] }),
      /* @__PURE__ */ e(
        No,
        {
          paneId: `${C}-right`,
          title: d[1],
          items: O,
          selectedSet: F,
          onToggleKey: U,
          onToggleAll: K,
          onInvertSelection: q,
          searchable: c,
          searchPlaceholder: b,
          keyword: B,
          onKeywordChange: S,
          showSelectAll: i,
          virtual: u,
          listHeight: m,
          itemHeight: p,
          disabled: f,
          emptyText: v,
          oneWayRemove: h ? (P) => se([P]) : void 0
        }
      )
    ] }),
    k ? /* @__PURE__ */ e("p", { id: y, role: "alert", className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: k }) : g ? /* @__PURE__ */ e("p", { id: y, className: "mt-1.5 text-xs text-[var(--abc-fg-muted)]", children: g }) : null
  ] });
};
Il.displayName = "Transfer";
const _l = ["日", "一", "二", "三", "四", "五", "六"], Ml = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
};
function Kn(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const La = pt.forwardRef(
  ({
    value: t,
    defaultValue: r = "",
    onChange: a,
    placeholder: n = "请选择日期",
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: i,
    name: u,
    minDate: m,
    maxDate: p,
    size: f,
    motion: h,
    className: v
  }, w) => {
    const k = je(f, "sm"), g = Be(h), N = Tt(), T = i || N, M = ce(null), L = ce(null);
    pn(w, () => M.current, []);
    const C = t !== void 0, [y, _] = H(r), E = C ? t ?? "" : y, [R, D] = H(!1), [A, $] = H({ top: 0, left: 0 }), [B, S] = H(
      () => E && qe(E).isValid() ? qe(E) : qe()
    ), F = !!((s ?? o ?? !0) && E && !d);
    we(() => {
      R && S(
        E && qe(E).isValid() ? qe(E) : qe()
      );
    }, [R, E]);
    const I = oe(() => b === !1 ? [] : Array.isArray(b) ? b : [
      { label: "今天", value: () => qe().format(c) },
      { label: "昨天", value: () => qe().subtract(1, "day").format(c) },
      { label: "明天", value: () => qe().add(1, "day").format(c) },
      { label: "一周前", value: () => qe().subtract(7, "day").format(c) }
    ], [b, c]);
    we(() => {
      if (!R) return;
      const K = () => {
        if (!M.current || typeof window > "u") return;
        const q = M.current.getBoundingClientRect(), G = I.length > 0 ? 340 : 300, W = 280, se = window.innerHeight - q.bottom < G && q.top > G ? q.top - G - 4 : q.bottom + 4;
        let P = q.left;
        P + W > window.innerWidth - 8 && (P = Math.max(8, window.innerWidth - W - 8)), $({ top: Math.max(8, se), left: Math.max(8, P) });
      };
      return K(), window.addEventListener("resize", K), window.addEventListener("scroll", K, !0), () => {
        window.removeEventListener("resize", K), window.removeEventListener("scroll", K, !0);
      };
    }, [R, I.length]), we(() => {
      if (!R) return;
      const K = (G) => {
        var X, se;
        const W = G.target;
        (X = M.current) != null && X.contains(W) || (se = L.current) != null && se.contains(W) || D(!1);
      }, q = (G) => {
        G.key === "Escape" && (G.preventDefault(), G.stopPropagation(), D(!1));
      };
      return document.addEventListener("mousedown", K), document.addEventListener("keydown", q, !0), () => {
        document.removeEventListener("mousedown", K), document.removeEventListener("keydown", q, !0);
      };
    }, [R]);
    const O = (K) => {
      C || _(K), a == null || a(K);
    }, j = oe(
      () => Yn(B.year(), B.month()),
      [B]
    ), U = oe(() => {
      if (!E) return "";
      const K = qe(E);
      return K.isValid() ? K.format("YYYY-MM-DD") : E;
    }, [E]);
    return /* @__PURE__ */ l(Ue, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: M,
          id: T,
          "data-datepicker-trigger": "",
          "data-motion": g,
          role: "combobox",
          "aria-expanded": R,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && D((K) => !K),
          onKeyDown: (K) => {
            !d && (K.key === "Enter" || K.key === " ") && (K.preventDefault(), D((q) => !q));
          },
          className: x(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            yr,
            Ml[k],
            R && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            v
          ),
          children: [
            /* @__PURE__ */ e(ps, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: n,
                value: E,
                name: u,
                tabIndex: -1,
                className: "w-full min-w-0 flex-1 bg-transparent p-0 font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            F && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (K) => {
                  K.stopPropagation(), O("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      R && typeof document < "u" && cr(
        /* @__PURE__ */ l(
          "div",
          {
            ref: L,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": g,
            "aria-label": "日期选择面板",
            style: { top: A.top, left: A.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              I.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: I.map((K) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const q = typeof K.value == "function" ? K.value() : K.value;
                    O(q), D(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: K.label
                },
                K.label
              )) }),
              /* @__PURE__ */ l("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ l("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => S((K) => K.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Qo, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => S((K) => K.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: B.format("YYYY 年 M 月") }),
                /* @__PURE__ */ l("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => S((K) => K.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Zt, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => S((K) => K.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(el, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: _l.map((K) => /* @__PURE__ */ e("span", { className: "py-1", children: K }, K)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: j.map((K) => {
                const q = qe(K.iso), G = c === "YYYY-MM-DD" ? K.iso : q.format(c), W = K.iso === U, X = !!(m && q.isBefore(qe(m), "day") || p && q.isAfter(qe(p), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": G,
                    disabled: X,
                    onClick: () => {
                      X || (O(G), D(!1));
                    },
                    className: x(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      W ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : K.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      K.isToday && !W && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: K.day
                  },
                  K.iso
                );
              }) })
            ]
          }
        ),
        Nn(M.current) ?? document.body
      )
    ] });
  }
);
La.displayName = "DatePicker";
const Ba = pt.forwardRef(
  ({
    value: t,
    defaultValue: r,
    onChange: a,
    placeholder: n = ["开始日期", "结束日期"],
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: b = !0,
    id: i,
    minDate: u,
    maxDate: m,
    size: p,
    motion: f,
    className: h
  }, v) => {
    const w = je(p, "sm"), k = Be(f), g = Tt(), N = i || g, T = ce(null), M = ce(null);
    pn(v, () => T.current, []);
    const L = Array.isArray(t) || t === void 0 && Array.isArray(r), C = t !== void 0, [y, _] = H(
      () => Kn(r)
    ), E = C ? Kn(t) : y, [R, D] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [A, $] = H(!1), [B, S] = H({ top: 0, left: 0 }), [z, F] = H(null), [I, O] = H(null), [j, U] = H(
      () => E.start && qe(E.start).isValid() ? qe(E.start) : qe()
    ), K = oe(() => j.add(1, "month"), [j]), G = !!((s ?? o ?? !0) && (E.start || E.end) && !d);
    we(() => {
      A ? (F(null), O(null), U(
        E.start && qe(E.start).isValid() ? qe(E.start) : qe()
      )) : (F(null), O(null));
    }, [A, E.start]);
    const W = oe(() => b === !1 ? [] : Array.isArray(b) ? b : [
      {
        label: "今天",
        getValue: () => {
          const te = qe().format(c);
          return { start: te, end: te };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: qe().subtract(6, "day").format(c),
          end: qe().format(c)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: qe().subtract(29, "day").format(c),
          end: qe().format(c)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: qe().startOf("month").format(c),
          end: qe().format(c)
        })
      }
    ], [b, c]);
    we(() => {
      if (!A) return;
      const te = () => {
        if (!T.current || typeof window > "u") return;
        const fe = T.current.getBoundingClientRect(), ve = W.length > 0 ? 370 : 330, ue = 556, Ie = window.innerHeight - fe.bottom < ve && fe.top > ve ? fe.top - ve - 4 : fe.bottom + 4;
        let Ee = fe.left;
        Ee + ue > window.innerWidth - 8 && (Ee = Math.max(8, window.innerWidth - ue - 8)), S({ top: Math.max(8, Ie), left: Math.max(8, Ee) });
      };
      return te(), window.addEventListener("resize", te), window.addEventListener("scroll", te, !0), () => {
        window.removeEventListener("resize", te), window.removeEventListener("scroll", te, !0);
      };
    }, [A, W.length]), we(() => {
      if (!A) return;
      const te = (ve) => {
        var Ne, Ie;
        const ue = ve.target;
        (Ne = T.current) != null && Ne.contains(ue) || (Ie = M.current) != null && Ie.contains(ue) || $(!1);
      }, fe = (ve) => {
        ve.key === "Escape" && (ve.preventDefault(), ve.stopPropagation(), $(!1));
      };
      return document.addEventListener("mousedown", te), document.addEventListener("keydown", fe, !0), () => {
        document.removeEventListener("mousedown", te), document.removeEventListener("keydown", fe, !0);
      };
    }, [A]);
    const X = (te) => {
      C || _(te), L ? a == null || a([te.start, te.end]) : a == null || a(te);
    }, se = oe(() => {
      if (z) {
        const te = qe(z);
        if (!I) return { start: te, end: null };
        const fe = qe(I);
        return fe.isBefore(te, "day") ? { start: fe, end: te } : { start: te, end: fe };
      }
      return {
        start: E.start && qe(E.start).isValid() ? qe(E.start) : null,
        end: E.end && qe(E.end).isValid() ? qe(E.end) : null
      };
    }, [z, I, E]), P = oe(
      () => Yn(j.year(), j.month()),
      [j]
    ), V = oe(
      () => Yn(K.year(), K.month()),
      [K]
    ), de = (te) => {
      const fe = qe(te), ve = c === "YYYY-MM-DD" ? te : fe.format(c);
      if (!z) {
        F(ve), O(null);
        return;
      }
      const ue = qe(z), [Ne, Ie] = fe.isBefore(ue, "day") ? [fe, ue] : [ue, fe];
      X({ start: Ne.format(c), end: Ie.format(c) }), F(null), O(null), $(!1);
    }, ke = (te, fe, ve) => /* @__PURE__ */ l("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ l("div", { className: "mb-2 flex items-center justify-between", children: [
        ve === "left" ? /* @__PURE__ */ l("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => U((ue) => ue.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Qo, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => U((ue) => ue.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: te.format("YYYY 年 M 月") }),
        ve === "right" ? /* @__PURE__ */ l("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => U((ue) => ue.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Zt, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => U((ue) => ue.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(el, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: _l.map((ue) => /* @__PURE__ */ e("span", { className: "py-1", children: ue }, ue)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: fe.map((ue) => {
        const Ne = qe(ue.iso), Ie = c === "YYYY-MM-DD" ? ue.iso : Ne.format(c), Ee = !!(se.start && Ne.isSame(se.start, "day")), _e = !!(se.end && Ne.isSame(se.end, "day")), Z = !!(se.start && se.end && Ne.isAfter(se.start, "day") && Ne.isBefore(se.end, "day")), re = !!(u && Ne.isBefore(qe(u), "day") || m && Ne.isAfter(qe(m), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": Ie,
            disabled: re,
            onMouseEnter: () => z && O(Ie),
            onClick: () => !re && de(ue.iso),
            className: x(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              Ee || _e ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : Z ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : ue.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              ue.isToday && !Ee && !_e && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: ue.day
          },
          `${ve}-${ue.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ l(Ue, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: T,
          id: N,
          "data-daterangepicker-trigger": "",
          "data-motion": k,
          role: "combobox",
          "aria-expanded": A,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && $((te) => !te),
          onKeyDown: (te) => {
            !d && (te.key === "Enter" || te.key === " ") && (te.preventDefault(), $((fe) => !fe));
          },
          className: x(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            yr,
            Ml[w],
            A && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            h
          ),
          children: [
            /* @__PURE__ */ e(ps, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: R,
                value: E.start,
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
                value: E.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            G && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (te) => {
                  te.stopPropagation(), X({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      A && typeof document < "u" && cr(
        /* @__PURE__ */ l(
          "div",
          {
            ref: M,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": k,
            "aria-label": "日期范围选择面板",
            style: { top: B.top, left: B.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              W.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: W.map((te) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const fe = te.getValue(), ve = Kn(fe);
                    X(ve), F(null), O(null), $(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: te.label
                },
                te.label
              )) }),
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: ke(j, P, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: ke(K, V, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: z ? `已选起始日：${z}，请继续点击截止日期` : E.start && E.end ? `已选区间：${E.start} 至 ${E.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        Nn(T.current) ?? document.body
      )
    ] });
  }
);
Ba.displayName = "DateRangePicker";
const Zm = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, Jm = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function Qm(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function ef(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const Al = ({
  value: t = "",
  onChange: r,
  label: a,
  helperText: n,
  error: s,
  accept: o = "image/*,.svg",
  maxSizeMB: d = 5,
  disabled: c = !1,
  customUpload: b,
  size: i,
  motion: u,
  placeholder: m = "点击或拖拽图片至此处上传",
  className: p
}) => {
  const f = je(i, "sm"), h = Be(u), v = Tt(), w = ce(null), { uploadAdapter: k, toast: g } = At(), [N, T] = H(!1), [M, L] = H(!1), [C, y] = H(!1), _ = async (D) => {
    if (!D || c || N) return;
    if (!(D.type.startsWith("image/") || D.name.toLowerCase().endsWith(".svg"))) {
      g.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (D.size >= d * 1024 * 1024) {
      g.error(`上传图片大小不能超过 ${d}MB`);
      return;
    }
    T(!0);
    try {
      const B = await (b ?? k ?? ef)(D);
      B ? (r == null || r(B), g.success("上传成功")) : g.error("上传失败，未获取到图片地址");
    } catch ($) {
      g.error(($ == null ? void 0 : $.message) || "上传图片失败，请重试");
    } finally {
      T(!1), w.current && (w.current.value = "");
    }
  }, E = (t == null ? void 0 : t.trim()) ?? "", R = Qm(E);
  return /* @__PURE__ */ l("div", { "data-motion": h, className: "w-full", children: [
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
        ref: w,
        id: v,
        type: "file",
        accept: o,
        disabled: c || N,
        onChange: (D) => {
          var A;
          return _((A = D.target.files) == null ? void 0 : A[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ l(
      "div",
      {
        onClick: () => {
          var D;
          !E && !c && !N && ((D = w.current) == null || D.click());
        },
        onDragOver: (D) => {
          D.preventDefault(), D.stopPropagation(), !c && !N && L(!0);
        },
        onDragLeave: (D) => {
          D.preventDefault(), D.stopPropagation(), L(!1);
        },
        onDrop: (D) => {
          var A;
          D.preventDefault(), D.stopPropagation(), L(!1), !c && !N && _((A = D.dataTransfer.files) == null ? void 0 : A[0]);
        },
        className: x(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          M ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !c && !M && "hover:border-[var(--abc-primary)]",
          !E && !c && "cursor-pointer",
          c && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          Zm[f],
          p
        ),
        children: [
          E ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: x(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  Jm[f]
                ),
                children: [
                  R ? /* @__PURE__ */ e(
                    "div",
                    {
                      className: "flex h-full w-full items-center justify-center p-2 [&>svg]:max-h-full [&>svg]:max-w-full",
                      dangerouslySetInnerHTML: { __html: E }
                    }
                  ) : /* @__PURE__ */ e("img", { src: E, alt: "凭证预览", className: "h-full w-full object-contain p-1" }),
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
                      children: /* @__PURE__ */ e(ta, { className: "h-4 w-4" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ l("div", { className: "flex flex-1 flex-col items-center space-y-1 text-center sm:items-start sm:text-left", children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-medium text-[var(--abc-fg)]", children: "已上传图片资源" }),
              /* @__PURE__ */ e("p", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: "支持点击放大预览、重新选择或移除" }),
              !c && /* @__PURE__ */ l("div", { className: "flex items-center gap-2.5 pt-1", children: [
                /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    disabled: N,
                    onClick: (D) => {
                      var A;
                      D.stopPropagation(), (A = w.current) == null || A.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(Fr, { className: x("h-3 w-3", N && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    disabled: N,
                    onClick: (D) => {
                      D.stopPropagation(), r == null || r("");
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-danger)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(mr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "删除" })
                    ]
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(tl, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: m }),
            /* @__PURE__ */ l("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              d,
              "MB"
            ] })
          ] }),
          N && /* @__PURE__ */ l("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(Jt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "正在上传中..." })
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: s }),
    n && !s && /* @__PURE__ */ e("p", { className: "mt-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: n }),
    /* @__PURE__ */ e(
      dr,
      {
        open: C,
        onClose: () => y(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: R ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: E }
          }
        ) : /* @__PURE__ */ e("img", { src: E, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
};
class tf extends $o {
  constructor() {
    super(...arguments);
    Wr(this, "state", {
      hasError: !1,
      error: null,
      errorInfo: null,
      showDetails: !1
    });
    Wr(this, "reset", () => {
      var a, n, s, o;
      this.setState({
        hasError: !1,
        error: null,
        errorInfo: null,
        showDetails: !1
      }), (n = (a = this.props).onReload) == null || n.call(a), (o = (s = this.props).onReset) == null || o.call(s);
    });
  }
  static getDerivedStateFromError(a) {
    return { hasError: !0, error: a };
  }
  componentDidCatch(a, n) {
    var s, o;
    console.error(`[TabErrorBoundary] 页面异常 [${this.props.path || "unknown"}]:`, a, n), this.setState({ errorInfo: n }), (o = (s = this.props).onError) == null || o.call(s, a, n);
  }
  componentDidUpdate(a) {
    this.state.hasError && a.resetKey !== this.props.resetKey && this.setState({
      hasError: !1,
      error: null,
      errorInfo: null,
      showDetails: !1
    });
  }
  render() {
    if (this.state.hasError) {
      const {
        path: a,
        onClose: n,
        onNavigateHome: s,
        title: o = "当前页面渲染发生异常",
        description: d = "该页签在加载或交互时遭遇未捕获错误。此故障已被安全隔离在当前页签内，其他已打开的页签与导航系统依然正常可用。",
        reloadText: c = "重新加载本页",
        closeText: b = "关闭此页签",
        homeText: i = "返回仪表盘",
        className: u
      } = this.props, { error: m, errorInfo: p, showDetails: f } = this.state;
      return /* @__PURE__ */ e(
        "div",
        {
          className: x(
            "flex min-h-[500px] w-full items-center justify-center p-6 md:p-10",
            u
          ),
          children: /* @__PURE__ */ l("div", { className: "w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]", children: [
            /* @__PURE__ */ e("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-500 shadow-xs dark:border-amber-800 dark:bg-amber-950/40", children: /* @__PURE__ */ e(Ir, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ l("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg font-semibold tracking-tight text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ e("p", { className: "mx-auto max-w-md text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: d }),
              a && /* @__PURE__ */ e("div", { className: "inline-block rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]", children: a })
            ] }),
            m && /* @__PURE__ */ l("div", { className: "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-left text-xs", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: () => this.setState((h) => ({ showDetails: !h.showDetails })),
                  className: "flex cursor-pointer items-center gap-1.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] select-none hover:text-[var(--abc-fg)]",
                  children: [
                    f ? /* @__PURE__ */ e(Xt, { size: 14 }) : /* @__PURE__ */ e(Zt, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: f ? "收起技术排查详情" : "展开技术排查详情" })
                  ]
                }
              ),
              f && /* @__PURE__ */ l("div", { className: "mt-2.5 space-y-1.5", children: [
                /* @__PURE__ */ l("p", { className: "font-mono font-semibold break-all text-rose-600 select-all dark:text-rose-400", children: [
                  m.name,
                  ": ",
                  m.message
                ] }),
                (p == null ? void 0 : p.componentStack) && /* @__PURE__ */ e("pre", { className: "max-h-40 overflow-auto font-mono text-[10px] whitespace-pre-wrap text-[var(--abc-fg-muted)] select-all", children: p.componentStack })
              ] })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-center gap-3 pt-2", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: this.reset,
                  className: "inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] bg-[var(--abc-primary)] px-4 py-2 text-xs font-medium text-[var(--abc-primary-fg)] shadow-xs transition-colors hover:bg-[var(--abc-primary-hover)]",
                  children: [
                    /* @__PURE__ */ e(Fr, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: c })
                  ]
                }
              ),
              n && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: n,
                  className: "inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-4 py-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  children: [
                    /* @__PURE__ */ e(Ct, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: b })
                  ]
                }
              ),
              s && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: s,
                  className: "inline-flex cursor-pointer items-center gap-1.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-4 py-2 text-xs font-medium text-[var(--abc-fg-secondary)] transition-colors hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  children: [
                    /* @__PURE__ */ e(fs, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: i })
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
class zh extends $o {
  constructor() {
    super(...arguments);
    Wr(this, "state", {
      hasError: !1,
      error: null,
      errorInfo: null
    });
    Wr(this, "reset", () => {
      var a, n, s, o;
      this.setState({ hasError: !1, error: null, errorInfo: null }), this.props.onReload || this.props.onReset ? ((n = (a = this.props).onReload) == null || n.call(a), (o = (s = this.props).onReset) == null || o.call(s)) : typeof window < "u" && window.location.reload();
    });
    Wr(this, "handleHome", () => {
      this.props.onNavigateHome ? (this.setState({ hasError: !1, error: null, errorInfo: null }), this.props.onNavigateHome()) : typeof window < "u" && (window.location.href = "/");
    });
  }
  static getDerivedStateFromError(a) {
    return { hasError: !0, error: a, errorInfo: null };
  }
  componentDidCatch(a, n) {
    var s, o;
    console.error("Uncaught error:", a, n), this.setState({ error: a, errorInfo: n }), (o = (s = this.props).onError) == null || o.call(s, a, n);
  }
  componentDidUpdate(a) {
    this.state.hasError && a.resetKey !== this.props.resetKey && this.setState({ hasError: !1, error: null, errorInfo: null });
  }
  render() {
    var a;
    if (this.state.hasError && this.state.error) {
      const n = !!(this.props.onReset || this.props.resetKey !== void 0 || this.props.tabTitle), {
        variant: s = n ? "panel" : "fullscreen",
        title: o,
        tabTitle: d,
        description: c = "应用程序在运行过程中遇到未预期的错误，您可以尝试刷新页面或返回首页。",
        reloadText: b = n ? "重新加载此模块" : "刷新页面",
        homeText: i = "返回首页",
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
          className: x(
            "flex items-center justify-center p-6 text-[var(--abc-fg)]",
            s === "fullscreen" ? "min-h-screen bg-[var(--abc-bg-canvas)]" : "min-h-[260px] w-full",
            p
          ),
          children: /* @__PURE__ */ l("div", { className: "w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]", children: [
            /* @__PURE__ */ e("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-800 dark:bg-rose-950/40", children: /* @__PURE__ */ e(Ir, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ l("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("h2", { className: "text-2xl font-bold tracking-tight text-[var(--abc-fg)]", children: f }),
              /* @__PURE__ */ e("p", { className: "text-sm text-[var(--abc-fg-muted)]", children: c })
            ] }),
            /* @__PURE__ */ l("div", { className: "max-h-48 overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-left font-mono text-xs text-rose-600 dark:text-rose-400", children: [
              /* @__PURE__ */ e("div", { className: "mb-1 font-semibold", children: this.state.error.toString() }),
              ((a = this.state.errorInfo) == null ? void 0 : a.componentStack) && /* @__PURE__ */ e("pre", { className: "mt-2 text-[11px] whitespace-pre-wrap text-[var(--abc-fg-muted)]", children: this.state.errorInfo.componentStack })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex items-center justify-center gap-3 pt-2", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: this.reset,
                  className: "inline-flex cursor-pointer items-center gap-2 rounded-[var(--abc-radius-lg)] bg-[var(--abc-primary)] px-5 py-2.5 text-sm font-medium text-[var(--abc-primary-fg)] shadow-xs transition-all hover:bg-[var(--abc-primary-hover)] active:scale-95",
                  children: [
                    /* @__PURE__ */ e(Fr, { className: "h-4 w-4" }),
                    b
                  ]
                }
              ),
              u && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: this.handleHome,
                  className: "inline-flex cursor-pointer items-center gap-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-5 py-2.5 text-sm font-medium text-[var(--abc-fg-secondary)] transition-all hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] active:scale-95",
                  children: [
                    /* @__PURE__ */ e(fs, { className: "h-4 w-4" }),
                    i
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
const rf = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Ia, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(xr, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Ir, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Er, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, af = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, jh = ({
  tone: t = "info",
  title: r,
  description: a,
  children: n,
  showIcon: s = !0,
  closable: o = !1,
  onClose: d,
  action: c,
  size: b,
  motion: i,
  className: u
}) => {
  const [m, p] = H(!1), f = je(b, "sm"), h = Be(i);
  if (m) return null;
  const v = rf[t], w = a ?? n;
  return /* @__PURE__ */ l(
    "div",
    {
      role: "alert",
      "data-motion": h,
      className: x(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        af[f],
        h !== "none" && "abc-animate-fade-in",
        v.box,
        u
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: v.icon }),
        /* @__PURE__ */ l("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          r && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)]", children: r }),
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
            children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, nf = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, sf = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, of = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, Rl = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  strokeColor: n,
  showInfo: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const b = je(typeof o == "string" ? o : void 0, "sm"), i = Be(d), u = Math.max(0, Math.min(100, Math.round(t))), m = n || of[a];
  if (r === "circle") {
    const f = typeof o == "number" ? o : nf[b], h = Math.max(4, Math.round(f * 0.09)), v = (f - h) / 2, w = 2 * Math.PI * v, k = w - u / 100 * w;
    return /* @__PURE__ */ l(
      "div",
      {
        role: "progressbar",
        "data-motion": i,
        "aria-valuenow": u,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: x("relative inline-flex items-center justify-center", c),
        style: { width: f, height: f },
        children: [
          /* @__PURE__ */ l("svg", { width: f, height: f, className: "-rotate-90", children: [
            /* @__PURE__ */ e(
              "circle",
              {
                cx: f / 2,
                cy: f / 2,
                r: v,
                fill: "none",
                stroke: "var(--abc-bg-subtle)",
                strokeWidth: h
              }
            ),
            /* @__PURE__ */ e(
              "circle",
              {
                cx: f / 2,
                cy: f / 2,
                r: v,
                fill: "none",
                stroke: m,
                strokeWidth: h,
                strokeLinecap: "round",
                strokeDasharray: w,
                strokeDashoffset: k,
                className: "transition-all duration-[var(--abc-motion-slow)]"
              }
            )
          ] }),
          s && /* @__PURE__ */ l("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            u,
            "%"
          ] })
        ]
      }
    );
  }
  const p = typeof o == "number" ? o : sf[b];
  return /* @__PURE__ */ l(
    "div",
    {
      role: "progressbar",
      "data-motion": i,
      "aria-valuenow": u,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: x("flex w-full items-center gap-2.5", c),
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
        s && /* @__PURE__ */ l("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          u,
          "%"
        ] })
      ]
    }
  );
}, lf = {
  success: {
    icon: /* @__PURE__ */ e(xr, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(Ia, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e(Ir, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e(Er, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(gn, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(au, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(ru, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, Fh = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: d,
  className: c
}) => {
  const b = lf[t], i = je(o, "md"), u = Be(d);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-motion": u,
      className: x(
        "flex flex-col items-center justify-center text-center",
        {
          xs: "px-4 py-6",
          sm: "px-5 py-8",
          md: "px-6 py-12",
          lg: "px-8 py-16"
        }[i],
        u !== "none" && "abc-animate-fade-in",
        c
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: x(
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
function cf(t) {
  return !Number.isFinite(t) || t < 1024 ? `${Math.max(0, t)} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / (1024 * 1024)).toFixed(2)} MB`;
}
function df(t, r) {
  if (!r || !r.trim()) return !0;
  const a = r.split(",").map((o) => o.trim().toLowerCase()).filter(Boolean);
  if (a.length === 0) return !0;
  const n = t.name.toLowerCase(), s = (t.type || "").toLowerCase();
  return a.some((o) => {
    if (o.startsWith(".")) return n.endsWith(o);
    if (o.endsWith("/*")) {
      const d = o.slice(0, o.length - 1);
      return s.startsWith(d);
    }
    return s === o;
  });
}
const Dl = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  customUpload: n,
  accept: s,
  multiple: o = !0,
  maxCount: d,
  maxSizeMB: c = 20,
  disabled: b = !1,
  label: i,
  error: u,
  helperText: m,
  required: p = !1,
  dragTitle: f = "点击或拖拽文件至此处上传",
  dragHint: h,
  id: v,
  className: w
}) => {
  const { uploadAdapter: k } = At(), g = Tt(), N = v || `abc-fileupload-${g}`, T = `${N}-feedback`, [M, L] = Vt({
    value: t,
    defaultValue: r
  }), [C, y] = H(!1), [_, E] = H(null), R = ce(null), D = ce(/* @__PURE__ */ new Map()), A = ce(M);
  A.current = M;
  const $ = (j) => {
    A.current = j, L(j), a == null || a(j);
  }, B = async (j, U) => {
    const K = n ?? k;
    try {
      let q = "";
      if (K) {
        const G = await K(U, (W) => {
          $(
            A.current.map(
              (X) => X.uid === j ? { ...X, status: "uploading", percent: W } : X
            )
          );
        });
        q = typeof G == "string" ? G : (G == null ? void 0 : G.url) ?? "";
      } else typeof URL < "u" && typeof URL.createObjectURL == "function" && (q = URL.createObjectURL(U));
      $(
        A.current.map(
          (G) => G.uid === j ? { ...G, status: "done", percent: 100, url: q, error: void 0 } : G
        )
      );
    } catch (q) {
      const G = q instanceof Error ? q.message : "文件上传失败";
      $(
        A.current.map(
          (W) => W.uid === j ? { ...W, status: "error", error: G } : W
        )
      );
    }
  }, S = (j) => {
    if (!j || j.length === 0 || b) return;
    const U = Array.from(j), K = c * 1024 * 1024, q = [], G = [], W = typeof d == "number" ? Math.max(0, d - A.current.length) : U.length;
    for (const P of U) {
      if (!df(P, s)) {
        q.push(`${P.name}: 不支持的文件格式（允许 ${s}）`);
        continue;
      }
      if (P.size > K) {
        q.push(`${P.name}: 文件超过 ${c}MB 上限`);
        continue;
      }
      if (o && G.length >= W) {
        q.push(`最多上传 ${d} 个文件`);
        break;
      }
      if (G.push(P), !o) break;
    }
    if (E(q.length > 0 ? q[0] : null), G.length === 0) return;
    const X = G.map((P, V) => {
      const de = `${Date.now()}-${V}-${Math.random().toString(36).slice(2, 8)}`;
      return D.current.set(de, P), {
        uid: de,
        name: P.name,
        size: P.size,
        type: P.type,
        status: "uploading",
        percent: 25
      };
    }), se = o ? A.current : [];
    $([...se, ...X]), X.forEach((P, V) => {
      B(P.uid, G[V]);
    });
  }, z = (j) => {
    D.current.delete(j), $(M.filter((U) => U.uid !== j)), E(null);
  }, F = (j) => {
    const U = D.current.get(j);
    U && ($(
      M.map(
        (K) => K.uid === j ? { ...K, status: "uploading", percent: 25, error: void 0 } : K
      )
    ), B(j, U));
  }, I = u || _ || void 0, O = h ?? [
    s ? `支持格式: ${s}` : null,
    c ? `单文件上限 ${c}MB` : null,
    typeof d == "number" ? `最多 ${d} 个` : null
  ].filter(Boolean).join(" · ");
  return /* @__PURE__ */ l("div", { className: x("w-full", w), children: [
    i ? /* @__PURE__ */ l(
      "label",
      {
        htmlFor: N,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: [
          i,
          p ? /* @__PURE__ */ e("span", { className: "ml-0.5 text-[var(--abc-danger)]", children: "*" }) : null
        ]
      }
    ) : null,
    /* @__PURE__ */ e(
      "input",
      {
        ref: R,
        id: N,
        type: "file",
        accept: s,
        multiple: o,
        disabled: b,
        className: "sr-only",
        onChange: (j) => {
          S(j.target.files), j.currentTarget.value = "";
        }
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        onDragOver: (j) => {
          j.preventDefault(), b || y(!0);
        },
        onDragLeave: () => y(!1),
        onDrop: (j) => {
          j.preventDefault(), y(!1), S(j.dataTransfer.files);
        },
        className: x(
          "rounded-[var(--abc-radius-lg)] border border-dashed p-4 text-center transition-colors",
          C ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/50" : "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/40 hover:border-[var(--abc-border-strong)]",
          I && "border-[var(--abc-danger)]",
          b && "cursor-not-allowed opacity-60"
        ),
        children: /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            disabled: b,
            "aria-describedby": I || m ? T : void 0,
            onClick: () => {
              var j;
              return (j = R.current) == null ? void 0 : j.click();
            },
            className: "flex w-full flex-col items-center justify-center gap-1.5 rounded py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
            children: [
              /* @__PURE__ */ e(tl, { className: "h-7 w-7 text-[var(--abc-primary)]", "aria-hidden": "true" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-primary)]", children: f }),
              O ? /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: O }) : null
            ]
          }
        )
      }
    ),
    M.length > 0 ? /* @__PURE__ */ e("ul", { className: "mt-2.5 space-y-1.5", "aria-label": "已上传文件列表", children: M.map((j) => /* @__PURE__ */ l(
      "li",
      {
        className: x(
          "rounded-[var(--abc-radius-md)] border px-3 py-2 text-xs",
          j.status === "error" ? "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/40" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]"
        ),
        children: [
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
              j.status === "uploading" ? /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 shrink-0 animate-spin text-[var(--abc-primary)]" }) : j.status === "error" ? /* @__PURE__ */ e(Er, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-danger)]" }) : /* @__PURE__ */ e(xr, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }),
              /* @__PURE__ */ e(Go, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
              /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: j.name }),
              /* @__PURE__ */ e("span", { className: "shrink-0 font-mono text-[11px] text-[var(--abc-fg-muted)]", children: cf(j.size) })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1", children: [
              j.status === "error" && D.current.has(j.uid) ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  disabled: b,
                  "aria-label": `重试上传 ${j.name}`,
                  onClick: () => F(j.uid),
                  className: "rounded p-1 text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)]",
                  children: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" })
                }
              ) : null,
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  disabled: b,
                  "aria-label": `删除文件 ${j.name}`,
                  onClick: () => z(j.uid),
                  className: "rounded p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-danger-soft)] hover:text-[var(--abc-danger)] disabled:opacity-40",
                  children: /* @__PURE__ */ e(mr, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ] }),
          j.status === "uploading" && typeof j.percent == "number" ? /* @__PURE__ */ e("div", { className: "mt-1.5", children: /* @__PURE__ */ e(Rl, { percent: j.percent, size: "xs", showInfo: !1 }) }) : null,
          j.status === "error" && j.error ? /* @__PURE__ */ e("p", { role: "alert", className: "mt-1 text-[11px] text-[var(--abc-danger)]", children: j.error }) : null
        ]
      },
      j.uid
    )) }) : null,
    I ? /* @__PURE__ */ e("p", { id: T, role: "alert", className: "mt-1.5 text-xs text-[var(--abc-danger)]", children: I }) : m ? /* @__PURE__ */ e("p", { id: T, className: "mt-1.5 text-xs text-[var(--abc-fg-muted)]", children: m }) : null
  ] });
};
Dl.displayName = "FileUpload";
const uf = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, Oh = ({
  treeData: t,
  checkable: r = !1,
  checkStrictly: a = !1,
  checkedKeys: n,
  defaultCheckedKeys: s = [],
  onCheck: o,
  selectedKeys: d,
  onSelect: c,
  defaultExpandAll: b = !0,
  searchable: i = !1,
  searchPlaceholder: u = "搜索节点名称（支持拼音首字母）...",
  showToolbar: m = !1,
  size: p,
  motion: f,
  renderExtra: h,
  className: v
}) => {
  const w = je(p, "sm"), k = Be(f), [g, N] = H(""), [T, M] = H(
    () => b ? new Set(qr(t)) : /* @__PURE__ */ new Set()
  ), [L, C] = H(s), [y, _] = H([]);
  we(() => {
    b && t.length > 0 && T.size === 0 && M(new Set(qr(t)));
  }, [t, b]);
  const E = n !== void 0 ? n : L, R = d !== void 0 ? d : y, { checkedKeys: D, halfCheckedKeys: A } = oe(
    () => vs(t, E, a),
    [t, E, a]
  ), $ = oe(() => new Set(D), [D]), B = oe(() => new Set(A), [A]), { filteredNodes: S, autoExpandedKeys: z } = oe(
    () => Eu(t, g),
    [t, g]
  ), F = oe(() => g.trim() ? /* @__PURE__ */ new Set([...T, ...z]) : T, [T, z, g]), I = (K) => {
    M((q) => {
      const G = new Set(q);
      return G.has(K) ? G.delete(K) : G.add(K), G;
    });
  }, O = (K, q) => {
    const G = ll(t, D, K, q, a);
    n === void 0 && C(G.checkedKeys), o == null || o(G.checkedKeys, {
      halfCheckedKeys: G.halfCheckedKeys,
      node: K,
      checked: q
    });
  }, j = (K) => {
    if (K.disabled) return;
    const q = [K.key];
    d === void 0 && _(q), c == null || c(q, K);
  }, U = (K, q = 0) => /* @__PURE__ */ e("ul", { role: q === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: K.map((G) => {
    const W = !!(G.children && G.children.length > 0), X = F.has(G.key), se = $.has(G.key), P = B.has(G.key), V = R.includes(G.key);
    return /* @__PURE__ */ l("li", { role: "treeitem", "aria-expanded": W ? X : void 0, children: [
      /* @__PURE__ */ l(
        "div",
        {
          style: { paddingInlineStart: `${q * 18 + 6}px` },
          className: x(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            uf[w],
            V ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            G.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              W ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": X ? `收起 ${G.title}` : `展开 ${G.title}`,
                  onClick: () => I(G.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    Zt,
                    {
                      className: x(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        X && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                Tr,
                {
                  size: w,
                  motion: k,
                  checked: se,
                  indeterminate: P,
                  disabled: G.disabled,
                  onChange: (de) => O(G, de)
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  disabled: G.disabled,
                  onClick: () => {
                    r && !c ? O(G, !se) : j(G);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    G.icon && /* @__PURE__ */ e(gr, { name: G.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: G.title })
                  ]
                }
              )
            ] }),
            h && /* @__PURE__ */ e("div", { className: "shrink-0", children: h(G) })
          ]
        }
      ),
      W && X && U(G.children, q + 1)
    ] }, G.key);
  }) });
  return /* @__PURE__ */ l("div", { "data-motion": k, className: x("space-y-2", v), children: [
    (i || m) && /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-2", children: [
      i && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        kt,
        {
          size: w,
          motion: k,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }),
          placeholder: u,
          value: g,
          onChange: (K) => N(K.target.value)
        }
      ) }),
      m && /* @__PURE__ */ l("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => M(new Set(qr(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(nu, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => M(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(su, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: S.length > 0 ? U(S) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, bf = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, mf = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, ff = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: o = !1,
  size: d,
  motion: c,
  className: b
}) => {
  const i = je(d, "sm"), u = Be(c), [m, p] = H(r), [f, h] = H(""), v = t !== void 0 ? t : m, w = (N) => {
    t === void 0 && p(N), a == null || a(N);
  }, k = () => {
    const N = f.trim();
    if (!(!N || o)) {
      if (v.includes(N) || v.length >= s) {
        h("");
        return;
      }
      w([...v, N]), h("");
    }
  }, g = (N) => {
    o || w(v.filter((T, M) => M !== N));
  };
  return /* @__PURE__ */ l(
    "div",
    {
      "data-motion": u,
      className: x(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        bf[i],
        yr,
        o && "opacity-65 cursor-not-allowed",
        b
      ),
      children: [
        v.map((N, T) => /* @__PURE__ */ l(
          "span",
          {
            className: x(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              mf[i]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: N }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${N}`,
                  onClick: () => g(T),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${N}_${T}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: o || v.length >= s,
            value: f,
            placeholder: v.length === 0 ? n : "",
            onChange: (N) => h(N.target.value),
            onBlur: k,
            onKeyDown: (N) => {
              N.key === "Enter" || N.key === "," ? (N.preventDefault(), k()) : N.key === "Backspace" && !f && v.length > 0 && g(v.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function ko(t, r) {
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
const pf = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, $h = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: d
}) => {
  const c = je(a, "md"), b = Be(n), { captchaAdapter: i } = At(), u = d ?? i, [m, p] = H(null), [f, h] = H(!0), [v, w] = H(!1), [k, g] = H(!1), [N, T] = H(0), [M, L] = H(0), C = ce(!1), y = ce(0), _ = ce(0), E = ge(async () => {
    h(!0), w(!1), g(!1), T(0), L(0);
    try {
      if (u) {
        const $ = await u();
        p($);
      } else
        p(ko(t, r));
    } catch {
      p(ko(t, r));
    } finally {
      h(!1);
    }
  }, [u, t, r]);
  we(() => {
    E();
  }, [E]);
  const R = ($) => {
    f || v || (C.current = !0, y.current = $, _.current = Date.now());
  }, D = ge(
    ($) => {
      if (!C.current || f || v) return;
      const B = $ - y.current, S = t - 40, z = Math.max(0, Math.min(S, B));
      T(z), L((t - 60) / S * z);
    },
    [t, f, v]
  ), A = ge(() => {
    if (!C.current || f || v) return;
    if (C.current = !1, Date.now() - _.current > 1e4 || !m) {
      g(!0), o == null || o(), setTimeout(E, 600);
      return;
    }
    const B = Math.round(M);
    if (typeof m.targetX == "number" && Math.abs(B - m.targetX) > 10) {
      g(!0), o == null || o(), setTimeout(E, 550);
      return;
    }
    w(!0), s({
      nonceStr: m.nonceStr,
      value: B
    });
  }, [M, m, f, v, o, s, E]);
  return we(() => {
    const $ = (F) => D(F.clientX), B = () => A(), S = (F) => {
      F.touches[0] && D(F.touches[0].clientX);
    }, z = () => A();
    return window.addEventListener("mousemove", $), window.addEventListener("mouseup", B), window.addEventListener("touchmove", S), window.addEventListener("touchend", z), () => {
      window.removeEventListener("mousemove", $), window.removeEventListener("mouseup", B), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", z);
    };
  }, [D, A]), /* @__PURE__ */ l("div", { "data-motion": b, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          f ? /* @__PURE__ */ l("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : m && /* @__PURE__ */ l(Ue, { children: [
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
                style: { top: m.blockY, left: M }
              }
            )
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新拼图",
              title: "刷新拼图",
              onClick: E,
              className: "absolute top-2 right-2 rounded-[var(--abc-radius-sm)] bg-black/45 p-1.5 text-white backdrop-blur-xs transition-colors hover:bg-black/65 cursor-pointer",
              children: /* @__PURE__ */ e(vn, { className: x("h-3.5 w-3.5", f && "animate-spin") })
            }
          ),
          v && /* @__PURE__ */ l("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(xr, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l(
      "div",
      {
        className: x(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          pf[c],
          v ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : k ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        ),
        style: { width: t },
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: x(
                "absolute inset-y-0 left-0",
                v ? "bg-[var(--abc-success)]/20" : "bg-[var(--abc-primary)]/20"
              ),
              style: { width: N + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: v ? "验证成功" : k ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
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
              className: x(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                v ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: N },
              children: v ? /* @__PURE__ */ e(xr, { className: "h-4 w-4" }) : /* @__PURE__ */ e(rl, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}, bn = ["B", "KB", "MB", "GB", "TB"], mn = ["s", "m", "h", "d"], Ll = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
}, Bl = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400
}, hf = ["TB", "GB", "MB", "KB", "B"], gf = ["h", "m", "d", "s"];
function fn(t, r = 2) {
  return Number.isFinite(t) ? t.toFixed(r).replace(/\.?0+$/, "") : "0";
}
function Pl(t, r) {
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
function zl(t, r, a, n, s, o, d) {
  const c = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (c === 0)
    return { unit: n.includes(r) ? r : n[n.length - 1], amount: "0" };
  for (const i of s) {
    if (!n.includes(i)) continue;
    const u = o[i];
    if (c >= u && c % u === 0)
      return { unit: i, amount: String(c / u) };
  }
  const b = n.includes(a) ? a : n[0];
  return {
    unit: b,
    amount: fn(c / o[b], d)
  };
}
function jl(t, r = "GB", a = bn) {
  const n = a.length > 0 ? a : bn;
  return zl(t, r, "B", n, hf, Ll, 4);
}
function Fl(t, r = "h", a = mn) {
  const n = a.length > 0 ? a : mn;
  return zl(
    t,
    r,
    "s",
    n,
    gf,
    Bl,
    2
  );
}
function Kh(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = jl(n);
  return `${o} ${s}`;
}
function Hh(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = Fl(n);
  return `${o} ${Pl(s, r)}`;
}
function vf(t, r, a) {
  let n = Math.max(r, Math.round(t));
  return typeof a == "number" && Number.isFinite(a) && (n = Math.min(a, n)), n;
}
function Ol({
  id: t,
  fallbackIdSuffix: r,
  value: a,
  onChange: n,
  min: s = 0,
  max: o,
  size: d = "default",
  disabled: c = !1,
  hideHint: b = !1,
  className: i,
  resolvedUnitLabel: u,
  factors: m,
  allowedUnits: p,
  pickBest: f,
  formatUnitLabel: h,
  buildHintText: v,
  "aria-label": w,
  "aria-describedby": k,
  placeholder: g
}) {
  const N = Me.useId(), T = t ?? `${N}-${r}`, M = `${T}-hint`, L = Number.isFinite(a) && a >= 0 ? Math.round(a) : 0, C = Me.useMemo(
    () => f(L),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [y, _] = Me.useState(C.unit), [E, R] = Me.useState(C.amount), D = Me.useRef(L);
  Me.useEffect(() => {
    if (L === D.current) return;
    D.current = L;
    const F = f(L);
    _(F.unit), R(F.amount);
  }, [L, f]);
  const A = m[y], $ = (F) => {
    const I = F.target.value;
    if (I !== "" && !/^\d*\.?\d*$/.test(I) || (R(I), I.trim() === "")) return;
    const O = Number(I);
    if (!Number.isFinite(O) || O < 0) return;
    const j = vf(O * A, s, o);
    D.current = j, n(j);
  }, B = (F) => {
    const I = F.target.value;
    if (!p.includes(I)) return;
    _(I);
    const O = m[I];
    R(L === 0 ? "0" : fn(L / O, 2));
  }, S = () => {
    (E.trim() === "" || !Number.isFinite(Number(E)) || Number(E) < 0) && R(L === 0 ? "0" : fn(L / A, 2));
  }, z = [k, b ? void 0 : M].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ l("div", { className: x("space-y-1", i), children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: x(
          "flex items-stretch rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-surface,#ffffff)] shadow-2xs transition-colors focus-within:border-[var(--abc-primary,#2563eb)] focus-within:ring-1 focus-within:ring-[var(--abc-primary,#2563eb)] overflow-hidden w-full",
          c && "opacity-50 cursor-not-allowed",
          d === "sm" ? "h-8" : "h-9"
        ),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: T,
              type: "number",
              step: A === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: c,
              value: E,
              "aria-label": w,
              "aria-describedby": z,
              placeholder: g,
              onChange: $,
              onBlur: S,
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
          /* @__PURE__ */ l("div", { className: "relative flex items-center shrink-0", children: [
            /* @__PURE__ */ e(
              "select",
              {
                "aria-label": u,
                disabled: c,
                value: y,
                onChange: B,
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
                children: p.map((F) => /* @__PURE__ */ e("option", { value: F, className: "bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]", children: h(F) }, F))
              }
            ),
            /* @__PURE__ */ e(Xt, { className: "pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" })
          ] })
        ]
      }
    ),
    !b && /* @__PURE__ */ e("div", { id: M, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: v(L, y) }) })
  ] });
}
function Wh({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "GB",
  allowedUnits: n = bn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : bn, c = Me.useCallback(
    (u) => jl(u, a, d),
    [a, d]
  ), b = Me.useCallback((u) => u, []), i = Me.useCallback(
    (u) => u === 0 && r ? t === "zh" ? "= 0 (无上限)" : "= 0 (Unlimited)" : `= ${u.toLocaleString()} Bytes`,
    [t, r]
  );
  return /* @__PURE__ */ e(
    Ol,
    {
      ...o,
      fallbackIdSuffix: "bytes",
      factors: Ll,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "字节单位" : "Byte unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: i
    }
  );
}
function Vh({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "h",
  allowedUnits: n = mn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : mn, c = Me.useCallback(
    (u) => Fl(u, a, d),
    [a, d]
  ), b = Me.useCallback(
    (u) => Pl(u, t),
    [t]
  ), i = Me.useCallback(
    (u, m) => {
      if (u === 0 && r)
        return t === "zh" ? "= 0 秒 (无上限)" : "= 0s (Unlimited)";
      if (m === "s") {
        const p = fn(u / 3600, 2);
        return t === "zh" ? `≈ ${p} 小时 (${u.toLocaleString()} 秒)` : `≈ ${p} hr (${u.toLocaleString()}s)`;
      }
      return `= ${u.toLocaleString()} ${t === "zh" ? "秒" : "Seconds"}`;
    },
    [t, r]
  );
  return /* @__PURE__ */ e(
    Ol,
    {
      ...o,
      fallbackIdSuffix: "duration",
      factors: Bl,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: i
    }
  );
}
function Uh({
  items: t,
  activeKey: r,
  value: a,
  defaultActiveKey: n,
  onChange: s,
  variant: o = "line",
  size: d,
  motion: c,
  ariaLabel: b = "内容切换标签",
  extra: i,
  className: u,
  panelClassName: m
}) {
  var T;
  const p = je(d, "md"), f = Be(c), h = Tt(), [v, w] = Vt({
    value: r ?? a,
    defaultValue: n ?? ((T = t[0]) == null ? void 0 : T.key) ?? "",
    onChange: s
  }), k = (M, L) => {
    const C = t.filter((_) => !_.disabled);
    if (C.length === 0) return;
    const y = C.findIndex((_) => {
      var E;
      return _.key === ((E = t[L]) == null ? void 0 : E.key);
    });
    if (M.key === "ArrowRight") {
      M.preventDefault();
      const _ = C[(y + 1) % C.length];
      _ && w(_.key);
    } else if (M.key === "ArrowLeft") {
      M.preventDefault();
      const _ = C[(y - 1 + C.length) % C.length];
      _ && w(_.key);
    }
  }, g = t.some((M) => M.children !== void 0), N = p === "xs" ? "px-2.5 py-1 text-[11px]" : p === "sm" ? "px-3 py-1.5 text-xs" : p === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ l("div", { "data-motion": f, className: x("w-full", u), children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: x(
          "flex items-center justify-between gap-3",
          o === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": b,
              className: x(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((M, L) => {
                const C = M.key === v, y = `${h}-tab-${M.key}`;
                return /* @__PURE__ */ l(
                  "button",
                  {
                    id: y,
                    type: "button",
                    role: "tab",
                    "aria-selected": C,
                    tabIndex: C ? 0 : -1,
                    disabled: M.disabled,
                    onClick: () => !M.disabled && w(M.key),
                    onKeyDown: (_) => k(_, L),
                    className: x(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      N,
                      o === "line" ? x(
                        "abc-tab-trigger",
                        C ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? x(
                        "rounded-[var(--abc-radius-sm)]",
                        C ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : x(
                        "rounded-[var(--abc-radius-md)] border",
                        C ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]"
                      )
                    ),
                    children: [
                      M.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: M.icon }),
                      /* @__PURE__ */ e("span", { children: M.label }),
                      M.badge !== void 0 && (typeof M.badge == "number" || typeof M.badge == "string" ? /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums", children: M.badge }) : M.badge)
                    ]
                  },
                  M.key
                );
              })
            }
          ),
          i && /* @__PURE__ */ e("div", { className: "shrink-0", children: i })
        ]
      }
    ),
    g && /* @__PURE__ */ e("div", { children: t.map((M) => {
      const L = M.key === v, C = `${h}-tab-${M.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": C,
          tabIndex: L ? 0 : void 0,
          ...L ? {} : { hidden: "until-found" },
          children: L && /* @__PURE__ */ e("div", { className: x("pt-4", f !== "none" && "abc-animate-fade-in", m), children: M.children })
        },
        M.key
      );
    }) })
  ] });
}
const So = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function $l(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const Pa = ({
  src: t,
  alt: r = "图片预览",
  size: a,
  motion: n,
  width: s,
  height: o,
  rounded: d = !1,
  fit: c = "contain",
  placeholder: b,
  className: i,
  zoomable: u = !0
}) => {
  const m = je(a, "sm"), p = Be(n), f = s ?? So[m], h = o ?? So[m], [v, w] = H(!1), [k, g] = H(!1), [N, T] = H(1), [M, L] = H(0), C = typeof t == "string" ? t.trim() : "", y = $l(C), _ = oe(() => C ? y && C.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(C)}` : C : "", [C, y]);
  if (we(() => {
    w(!1);
  }, [C]), !C || v)
    return b ? /* @__PURE__ */ e(Ue, { children: b }) : /* @__PURE__ */ e(
      "div",
      {
        "data-motion": p,
        title: v ? "图片加载失败，请检查 URL 是否有效" : "暂无图片",
        style: {
          width: f,
          height: h,
          minWidth: typeof f == "number" ? f : void 0
        },
        className: x(
          "inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          v && "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]",
          i
        ),
        children: v ? /* @__PURE__ */ e(Er, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Vo, { className: "h-4 w-4" })
      }
    );
  const E = (R) => {
    R.stopPropagation(), u && (T(1), L(0), g(!0));
  };
  return /* @__PURE__ */ l(Ue, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        "data-motion": p,
        title: "点击预览大图 / 矢量图",
        "aria-label": u ? `预览 ${r}` : void 0,
        onClick: E,
        onKeyDown: (R) => {
          u && (R.key === "Enter" || R.key === " ") && (R.preventDefault(), E(R));
        },
        style: {
          width: f,
          height: h,
          minWidth: typeof f == "number" ? f : void 0
        },
        className: x(
          "abc-motion-control group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          u && "cursor-zoom-in hover:border-[var(--abc-primary)]",
          i
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: _,
              alt: r,
              onError: () => w(!0),
              className: x(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                y || c === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          u && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e(ta, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      dr,
      {
        open: k,
        onClose: () => g(!1),
        title: r,
        size: "lg",
        motion: p,
        footer: /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => T((R) => Math.max(0.4, Number((R - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(ou, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ l("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(N * 100),
            "%"
          ] }),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => T((R) => Math.min(3, Number((R + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(lu, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => L((R) => (R + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(vn, { className: "h-3.5 w-3.5" }),
                " 旋转"
              ]
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6", children: /* @__PURE__ */ e(
            "div",
            {
              style: { transform: `scale(${N}) rotate(${M}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: _, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Gh = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const b = je(o, "sm"), i = Be(d), u = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", p = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[b];
  return /* @__PURE__ */ l("div", { "data-motion": i, className: x("space-y-2.5", c), children: [
    (t || r) && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: x("font-semibold text-[var(--abc-fg)]", b === "lg" ? "text-sm" : "text-xs"), children: t }),
      r && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: r })
    ] }),
    /* @__PURE__ */ e(
      "dl",
      {
        className: x(
          "m-0 grid",
          u,
          s ? "overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px" : "gap-x-6 gap-y-3"
        ),
        children: a.map((f, h) => {
          const v = f.span && f.span >= n ? "sm:col-span-full" : f.span === 2 ? "sm:col-span-2" : f.span === 3 ? "lg:col-span-3" : void 0;
          return s ? /* @__PURE__ */ l(
            "div",
            {
              className: x("flex min-w-0 bg-[var(--abc-bg-surface)]", v),
              children: [
                /* @__PURE__ */ e(
                  "dt",
                  {
                    className: x(
                      "w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center",
                      p
                    ),
                    children: f.label
                  }
                ),
                /* @__PURE__ */ e("dd", { className: x("m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center", p), children: f.children ?? "-" })
              ]
            },
            f.key ?? h
          ) : /* @__PURE__ */ l("div", { className: x("min-w-0 space-y-0.5", v), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: f.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: f.children ?? "-" })
          ] }, f.key ?? h);
        })
      }
    )
  ] });
}, xf = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, yf = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, Yh = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: d,
  className: c
}) => {
  const b = Tt(), i = je(o, "sm"), u = Be(d), [m, p] = H(a), f = n !== void 0 ? n : m, h = (v, w) => {
    let k;
    r ? k = w ? [v] : [] : k = w ? Array.from(/* @__PURE__ */ new Set([...f, v])) : f.filter((g) => g !== v), n === void 0 && p(k), s == null || s(k);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-motion": u,
      className: x(
        "divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        c
      ),
      children: t.map((v) => {
        const w = f.includes(v.key);
        return /* @__PURE__ */ l(
          "details",
          {
            name: r ? b : void 0,
            open: w,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ l(
                "summary",
                {
                  "aria-disabled": v.disabled || void 0,
                  onClick: (k) => {
                    k.preventDefault(), !v.disabled && h(v.key, !w);
                  },
                  className: x(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    xf[i],
                    v.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ l("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        Xt,
                        {
                          className: x(
                            "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-fast)]",
                            w ? "rotate-0" : "-rotate-90"
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
                  className: x(
                    "border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] leading-relaxed text-[var(--abc-fg-secondary)]",
                    yf[i]
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
}, wf = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, qh = ({ items: t, size: r, motion: a, className: n }) => {
  const s = je(r, "sm"), o = Be(a), d = {
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
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: x("m-0 list-none space-y-0 p-0", n), children: t.map((i, u) => {
    const m = u === t.length - 1, p = i.tone ?? "primary";
    return /* @__PURE__ */ l("li", { className: x("relative flex", d[s]), children: [
      !m && /* @__PURE__ */ e(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute top-3.5 bottom-0 left-[5px] w-px bg-[var(--abc-border)]"
        }
      ),
      /* @__PURE__ */ e("span", { className: "relative z-10 mt-1 flex h-3 w-3 shrink-0 items-center justify-center", children: i.icon ? i.icon : /* @__PURE__ */ e(
        "span",
        {
          className: x(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            wf[p]
          )
        }
      ) }),
      /* @__PURE__ */ l("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ l("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: x("font-medium text-[var(--abc-fg)]", c[s]), children: i.title }),
          i.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: i.time })
        ] }),
        i.description && /* @__PURE__ */ e("div", { className: x("leading-relaxed text-[var(--abc-fg-muted)]", b[s]), children: i.description })
      ] })
    ] }, i.key ?? u);
  }) });
}, Kl = Me.forwardRef(
  ({
    value: t,
    displayValue: r,
    copyLabel: a = "复制",
    copiedLabel: n = "已复制",
    hideCopyButton: s = !1,
    className: o,
    codeClassName: d,
    ...c
  }, b) => {
    const [i, u] = Me.useState(!1), m = async (p) => {
      if (p.stopPropagation(), !t) return;
      await Sn(t) && (u(!0), setTimeout(() => u(!1), 1600));
    };
    return /* @__PURE__ */ l(
      "span",
      {
        ref: b,
        "data-slot": "copyable-code",
        "data-copied": i ? "true" : void 0,
        className: x("inline-flex max-w-full items-center gap-1.5 align-baseline", o),
        ...c,
        children: [
          /* @__PURE__ */ e(
            "code",
            {
              title: t,
              className: x(
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
              onClick: m,
              "aria-label": i ? n : `${a}: ${t}`,
              title: i ? n : a,
              className: x(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                i && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: i ? /* @__PURE__ */ e(St, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(Or, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
Kl.displayName = "CopyableCode";
const Nf = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
  full: "col-span-full"
}, Ls = Me.forwardRef(
  ({
    label: t,
    value: r,
    children: a,
    mono: n = !1,
    copyValue: s,
    span: o = 1,
    variant: d = "default",
    className: c,
    valueClassName: b,
    ...i
  }, u) => {
    const m = a ?? r;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: u,
        "data-slot": "description-item",
        className: x(
          "min-w-0",
          d === "cards" && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]",
          d === "divided" && "border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0",
          Nf[o],
          c
        ),
        ...i,
        children: [
          /* @__PURE__ */ e(
            "dt",
            {
              "data-slot": "description-term",
              className: x(
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
              className: x(
                "mt-1 break-all text-xs text-[var(--abc-fg,#0f172a)]",
                d === "compact" && "mt-0.5 text-xs",
                n && "font-mono text-xs",
                b
              ),
              children: s ? /* @__PURE__ */ e(
                Kl,
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
Ls.displayName = "DescriptionItem";
const Xh = Ls, kf = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Hl = Me.forwardRef(
  ({ columns: t = 2, variant: r = "default", density: a, bordered: n = !1, items: s, children: o, className: d, ...c }, b) => {
    const i = a === "compact" && r === "default" ? "compact" : r;
    return /* @__PURE__ */ e(
      "dl",
      {
        ref: b,
        "data-slot": "description-list",
        className: x(
          "grid",
          i === "compact" ? "gap-2.5" : "gap-3.5",
          n && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3",
          kf[t],
          d
        ),
        ...c,
        children: s ? s.map((u, m) => /* @__PURE__ */ e(
          Ls,
          {
            label: u.label,
            value: u.value,
            mono: u.mono,
            copyValue: u.copyValue,
            span: u.span,
            variant: i,
            className: u.className
          },
          u.key ?? (typeof u.label == "string" ? u.label : m)
        )) : o
      }
    );
  }
);
Hl.displayName = "DescriptionList";
const Sf = ({
  code: t,
  tenantCode: r,
  presets: a,
  src: n,
  maskSrc: s,
  maskClassName: o,
  alt: d,
  fallbackIcon: c,
  className: b = "w-4 h-4"
}) => {
  const i = (t ?? r ?? "").toLowerCase().trim(), u = i && a ? a[i] : void 0, m = s ? "mask" : n ? "image" : (u == null ? void 0 : u.mode) ?? (u != null && u.src ? "image" : void 0), p = s ?? n ?? (u == null ? void 0 : u.src), f = d ?? (u == null ? void 0 : u.alt) ?? (i || "Brand"), h = o ?? (u == null ? void 0 : u.maskClassName) ?? "bg-[var(--abc-primary)]", [v, w] = H(!1);
  return we(() => {
    w(!1);
  }, [i, p]), m === "mask" && p ? /* @__PURE__ */ e(
    "span",
    {
      className: x("block shrink-0", h, b),
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
  ) : m === "image" && p ? v ? u != null && u.fallbackIcon ? /* @__PURE__ */ e(Ue, { children: u.fallbackIcon }) : c ? /* @__PURE__ */ e(Ue, { children: c }) : /* @__PURE__ */ e(ms, { className: x("shrink-0 text-[var(--abc-primary)]", b) }) : /* @__PURE__ */ e(
    "img",
    {
      src: p,
      alt: f,
      className: x("shrink-0 object-contain", b),
      onError: () => w(!0),
      loading: "lazy"
    }
  ) : c ? /* @__PURE__ */ e(Ue, { children: c }) : /* @__PURE__ */ e(Xo, { className: x("shrink-0 text-[var(--abc-fg-placeholder)]", b) });
}, Zh = Sf, Cf = {
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
    Icon: Ir,
    defaultRole: "alert"
  },
  success: {
    container: "border-emerald-500/25 bg-emerald-50/50 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-500/30",
    badge: "border-emerald-500/30 bg-white/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    iconWrap: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    Icon: xr,
    defaultRole: "status"
  },
  info: {
    container: "border-blue-500/25 bg-blue-50/50 text-blue-950 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-500/30",
    badge: "border-blue-500/30 bg-white/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    iconWrap: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Icon: Ia,
    defaultRole: "status"
  }
}, Kr = Me.forwardRef(
  function({
    variant: r = "error",
    title: a,
    message: n,
    description: s,
    code: o,
    status: d,
    requestId: c,
    actionHint: b,
    action: i,
    onDismiss: u,
    dismissLabel: m = "关闭通知",
    hideIcon: p = !1,
    role: f,
    className: h,
    children: v,
    ...w
  }, k) {
    const g = Cf[r], N = g.Icon, T = n ?? v;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: k,
        role: f ?? g.defaultRole,
        "data-slot": "notification-banner",
        "data-variant": r,
        className: x(
          "relative flex flex-col gap-2 rounded-[var(--abc-radius-lg,0.625rem)] border p-3.5 text-xs shadow-2xs transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-3",
          g.container,
          h
        ),
        ...w,
        children: [
          /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
            !p && /* @__PURE__ */ e(
              "span",
              {
                className: x(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  g.iconWrap
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(N, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ l("div", { className: "min-w-0 flex-1 space-y-1", children: [
              (a || o || d != null || c) && /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5 font-medium", children: [
                d != null && /* @__PURE__ */ l(
                  "span",
                  {
                    className: x(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      g.badge
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
                    className: x(
                      "rounded px-1.5 py-0.2 font-mono text-[10px] border",
                      g.badge
                    ),
                    children: o
                  }
                ),
                c && /* @__PURE__ */ l(
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
              T && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: T }),
              s && /* @__PURE__ */ e("div", { className: "text-[11px] leading-normal opacity-85", children: s }),
              b && /* @__PURE__ */ e("div", { className: "pt-0.5 text-[11px] font-medium text-primary", children: b })
            ] })
          ] }),
          (i || u) && /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-2 self-end sm:self-start", children: [
            i,
            u && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": m,
                onClick: u,
                className: "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded text-current opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current",
                children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    );
  }
);
Kr.displayName = "NotificationBanner";
function Jh({
  error: t,
  fallbackTitle: r = "加载失败",
  fallbackMessage: a = "无法加载该区块数据，请重试。",
  action: n,
  retry: s,
  retryLabel: o = "重试",
  isRetrying: d = !1,
  className: c,
  ...b
}) {
  if (!t) return null;
  const i = t, u = (i == null ? void 0 : i.message) || a;
  return /* @__PURE__ */ e(
    Kr,
    {
      variant: "error",
      title: r,
      message: u,
      status: i == null ? void 0 : i.status,
      code: i == null ? void 0 : i.code,
      requestId: i == null ? void 0 : i.requestId,
      className: c,
      action: n ?? (s ? /* @__PURE__ */ l(
        Le,
        {
          size: "xs",
          variant: "outline",
          onClick: s,
          disabled: d,
          className: "h-7 text-xs bg-white/70 dark:bg-slate-900/60",
          children: [
            d ? /* @__PURE__ */ e(Jt, { className: "mr-1 h-3 w-3 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ e(Fr, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: o })
          ]
        }
      ) : null),
      ...b
    }
  );
}
function Qh({
  message: t,
  code: r,
  status: a,
  requestId: n,
  onRetry: s,
  retryLabel: o = "重试读取",
  pendingLabel: d,
  retryAriaLabel: c,
  pending: b = !1,
  action: i,
  ...u
}) {
  const m = i ?? (s ? /* @__PURE__ */ l(
    Le,
    {
      variant: "outline",
      size: "sm",
      disabled: b,
      onClick: s,
      "aria-label": c,
      children: [
        /* @__PURE__ */ e(
          Fr,
          {
            "aria-hidden": "true",
            className: x(
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
    Kr,
    {
      variant: "error",
      role: "alert",
      message: t,
      code: r,
      status: a,
      requestId: n,
      action: m,
      ...u
    }
  );
}
function eg({
  message: t,
  paused: r = !1,
  size: a = "md",
  className: n,
  ...s
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      role: "status",
      "data-slot": "loading-state-card",
      className: x(
        "flex items-center gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-xs text-[var(--abc-fg-muted)] shadow-2xs",
        a === "sm" ? "px-3 py-2 text-[11px]" : "p-3.5",
        r && "border-amber-500/30 bg-amber-50/50 text-amber-900 dark:bg-amber-950/20 dark:text-amber-200",
        n
      ),
      ...s,
      children: [
        r ? /* @__PURE__ */ e(iu, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-amber-600" }) : /* @__PURE__ */ e(
          Jt,
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
function tg({
  items: t,
  emptyMessage: r = "当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。",
  className: a
}) {
  return t.length === 0 ? /* @__PURE__ */ e(
    Kr,
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
      className: x(
        "divide-y divide-[var(--abc-border)] rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs",
        a
      ),
      children: t.map((n, s) => {
        const o = "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]", d = !!n.restriction, c = /* @__PURE__ */ l(Ue, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: x(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                n.severity === "critical" && "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400",
                n.severity === "high" && "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
                !["critical", "high"].includes(n.severity) && "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
              ),
              children: /* @__PURE__ */ e(cu, { "aria-hidden": "true", className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ l("span", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("span", { className: "block text-sm font-medium text-[var(--abc-fg)]", children: n.label }),
            n.restriction ? /* @__PURE__ */ e("span", { className: "block text-xs text-[var(--abc-fg-muted)]", children: n.restriction }) : /* @__PURE__ */ l(
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
          /* @__PURE__ */ l("span", { className: "flex shrink-0 items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-xs font-semibold text-[var(--abc-fg-secondary)]", children: n.count }),
            !d && (n.href || n.onClick) && /* @__PURE__ */ e(Jo, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--abc-fg-muted)]" })
          ] })
        ] });
        return !d && n.href ? /* @__PURE__ */ e("a", { href: n.href, className: o, children: c }, n.kind || s) : !d && n.onClick ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n.onClick,
            className: x(o, "w-full text-left cursor-pointer"),
            children: c
          },
          n.kind || s
        ) : /* @__PURE__ */ e("div", { className: o, children: c }, n.kind || s);
      })
    }
  );
}
const ts = "color-scheme", Ya = "abc:color-scheme-change", Wl = "(prefers-color-scheme: dark)";
function ya() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? "light" : window.matchMedia(Wl).matches ? "dark" : "light";
}
function qa() {
  if (typeof window > "u") return "system";
  try {
    const t = window.localStorage.getItem(ts);
    if (t === "light" || t === "dark") return t;
  } catch {
  }
  return "system";
}
function Xa(t) {
  if (typeof document > "u") return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  !a && document.head && (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a && (a.content = r);
  const n = t === "system" ? ya() : t, s = document.documentElement;
  s.setAttribute("data-abc-theme", n), s.setAttribute("data-abc-theme-mode", t), s.classList.toggle("dark", n === "dark"), s.classList.toggle("light", n === "light");
}
function Ef() {
  const t = Yb(), [r, a] = Me.useState(
    () => qa()
  ), [n, s] = Me.useState(
    () => ya()
  );
  Me.useEffect(() => {
    var p;
    t || Xa(qa());
    const i = typeof window.matchMedia == "function" ? window.matchMedia(Wl) : null, u = () => {
      s(ya()), !t && qa() === "system" && Xa("system");
    }, m = () => {
      const f = qa();
      a(f), s(ya()), t || Xa(f);
    };
    return (p = i == null ? void 0 : i.addEventListener) == null || p.call(i, "change", u), window.addEventListener("storage", m), window.addEventListener(Ya, m), () => {
      var f;
      (f = i == null ? void 0 : i.removeEventListener) == null || f.call(i, "change", u), window.removeEventListener("storage", m), window.removeEventListener(Ya, m);
    };
  }, [t]);
  const o = t ? t.theme.mode : r, d = t ? t.resolvedTheme : o === "system" ? n : o, c = Me.useCallback(
    (i, u) => {
      try {
        i === "system" ? window.localStorage.removeItem(ts) : window.localStorage.setItem(ts, i);
      } catch {
      }
      a(i), t ? t.setThemeMode(i, u) : Xa(i), typeof window < "u" && window.dispatchEvent(new Event(Ya));
    },
    [t]
  ), b = Me.useCallback(
    (i) => {
      const u = i && "clientX" in i && typeof i.clientX == "number" ? { clientX: i.clientX, clientY: i.clientY } : void 0;
      if (t) {
        t.toggleTheme(u), typeof window < "u" && window.dispatchEvent(new Event(Ya));
        return;
      }
      const m = ya(), f = (o === "system" ? m : o) === "dark" ? "light" : "dark";
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
const Tf = Me.forwardRef(
  ({ locale: t = "zh-CN", mode: r = "toggle", dark: a = !1, label: n, className: s, ...o }, d) => {
    const c = t.toLowerCase().startsWith("zh"), { preference: b, resolvedScheme: i, systemScheme: u, setPreference: m, toggleScheme: p } = Ef();
    if (r === "segmented") {
      const h = u === "dark" ? c ? "当前深色" : "Currently dark" : c ? "当前浅色" : "Currently light";
      return /* @__PURE__ */ l(
        "div",
        {
          role: "group",
          "data-slot": "theme-switcher",
          "aria-label": n ?? (c ? "颜色主题偏好" : "Color theme preference"),
          className: x(
            "inline-flex flex-wrap items-center gap-1 rounded-lg border p-1 shadow-2xs transition-colors",
            a ? "border-slate-700/90 bg-slate-900/90" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
            s
          ),
          children: [
            /* @__PURE__ */ l(
              Le,
              {
                size: "xs",
                variant: b === "light" ? "default" : "ghost",
                onClick: (v) => m("light", { clientX: v.clientX, clientY: v.clientY }),
                "aria-pressed": b === "light",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Sa, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "浅色" : "Light" })
                ]
              }
            ),
            /* @__PURE__ */ l(
              Le,
              {
                size: "xs",
                variant: b === "dark" ? "default" : "ghost",
                onClick: (v) => m("dark", { clientX: v.clientX, clientY: v.clientY }),
                "aria-pressed": b === "dark",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Ca, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "深色" : "Dark" })
                ]
              }
            ),
            /* @__PURE__ */ l(
              Le,
              {
                size: "xs",
                variant: b === "system" ? "default" : "ghost",
                onClick: (v) => m("system", { clientX: v.clientX, clientY: v.clientY }),
                "aria-pressed": b === "system",
                title: `${c ? "跟随系统" : "System"} (${h})`,
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(bs, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ l("span", { children: [
                    c ? "跟随系统" : "System",
                    /* @__PURE__ */ l("span", { className: "ml-1 opacity-75", children: [
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
    const f = i === "dark" ? c ? "切换到浅色主题" : "Switch to light theme" : c ? "切换到深色主题" : "Switch to dark theme";
    return /* @__PURE__ */ l(
      "button",
      {
        ref: d,
        type: "button",
        "data-slot": "theme-switcher",
        "data-color-scheme": i,
        "data-color-preference": b,
        onClick: p,
        title: n ?? f,
        "aria-label": n ?? f,
        className: x(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
          a ? "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs hover:bg-[var(--abc-bg-subtle)]",
          s
        ),
        ...o,
        children: [
          i === "dark" ? /* @__PURE__ */ e(Sa, { className: "h-3.5 w-3.5 text-amber-400", "aria-hidden": "true" }) : /* @__PURE__ */ e(Ca, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: f })
        ]
      }
    );
  }
);
Tf.displayName = "ThemeSwitcher";
function rg({
  open: t,
  title: r,
  description: a,
  cancelLabel: n = "取消",
  confirmLabel: s = "确认",
  workingLabel: o = "正在处理…",
  variant: d = "default",
  loading: c = !1,
  closeLabel: b = "关闭",
  className: i,
  onCancel: u,
  onConfirm: m,
  children: p
}) {
  const f = d === "destructive";
  return /* @__PURE__ */ e(
    dr,
    {
      open: t,
      onClose: u,
      onCancel: u,
      onOpenChange: (h) => !h && u(),
      closeDisabled: c,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ l(
        ws,
        {
          "data-slot": "confirm-dialog",
          className: x("w-full max-w-md", i),
          closeLabel: b,
          closeDisabled: c,
          children: [
            /* @__PURE__ */ l(Ns, { children: [
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2.5", children: [
                f ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Ir, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(ea, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Ss, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              a && /* @__PURE__ */ e(Cs, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            p && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: p }),
            /* @__PURE__ */ l(ks, { className: "gap-2 pt-2", children: [
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
let qt = [];
const rs = /* @__PURE__ */ new Set();
function as() {
  rs.forEach((t) => t());
}
function If(t) {
  const r = qt.findIndex((a) => a.id === t.id);
  if (r >= 0) {
    const a = qt[r];
    (a.cascadeMode !== t.cascadeMode || a.widthPx !== t.widthPx) && (qt[r] = t, as());
  } else
    qt = [...qt, t], as();
}
function Co(t) {
  qt.some((r) => r.id === t) && (qt = qt.filter((r) => r.id !== t), as());
}
const _f = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, na = ({
  open: t,
  visible: r,
  onClose: a,
  title: n,
  description: s,
  children: o,
  footer: d,
  size: c = "md",
  motion: b,
  width: i,
  placement: u = "right",
  closeOnClickModal: m = !0,
  resizable: p = !0,
  minWidth: f = 340,
  storageKey: h,
  push: v = !0,
  pushDistance: w = 140,
  cascadeMode: k,
  adjacentOffset: g,
  bodyClassName: N,
  className: T,
  role: M = "dialog"
}) => {
  const L = qb(k), C = k ?? L, y = Tt(), _ = Tt(), E = t ?? r ?? !1, R = Be(b), { isMounted: D, isVisible: A } = _r(E, R === "none" ? 0 : 220), $ = ce(a);
  $.current = a;
  const [, B] = H(0), [S, z] = H(!1), [F, I] = H(!1), [O, j] = H(() => {
    if (!h || typeof window > "u") return null;
    try {
      const Ie = Number(window.localStorage.getItem(`abc_drawer_w_${h}`));
      return Number.isFinite(Ie) && Ie >= f ? Ie : null;
    } catch {
      return null;
    }
  });
  we(() => {
    const Ie = () => B((Ee) => Ee + 1);
    return rs.add(Ie), () => {
      rs.delete(Ie);
    };
  }, []);
  const U = typeof i == "number" ? i : O ?? (c ? _f[c] : 560) ?? 560;
  we(() => {
    if (E)
      return If({
        id: y,
        cascadeMode: C,
        widthPx: U
      }), () => Co(y);
    Co(y);
  }, [E, y, C, U]), we(() => {
    if (!D) return;
    const Ie = (Ee) => {
      const _e = qt[qt.length - 1];
      Ee.key === "Escape" && (!_e || _e.id === y) && (Ee.stopPropagation(), $.current());
    };
    return document.addEventListener("keydown", Ie), () => document.removeEventListener("keydown", Ie);
  }, [D, y]);
  const [K, q] = H(
    () => typeof window < "u" ? window.innerWidth : 1440
  );
  we(() => {
    if (typeof window > "u") return;
    const Ie = () => q(window.innerWidth);
    return window.addEventListener("resize", Ie), () => window.removeEventListener("resize", Ie);
  }, []);
  const G = qt.findIndex((Ie) => Ie.id === y), W = G >= 0 ? Math.max(0, qt.length - 1 - G) : 0, X = G >= 0 ? G + 1 : 1, se = G >= 0 ? qt.slice(G + 1) : [], P = qt.some((Ie) => Ie.cascadeMode === "adjacent"), V = C === "adjacent" || P, de = se.reduce((Ie, Ee) => Ie + (Ee.widthPx || 560), 0);
  let ke = U;
  if (V && W > 0 && de > 0) {
    const Ie = Math.max(f, K - de - 24);
    ke > Ie && (ke = Ie);
  }
  const te = v && W > 0 ? V ? g ?? de : W * w : 0, fe = v && W > 0 ? V ? 1 : Math.max(0.92, 1 - W * 0.025) : 1, ve = u === "right" ? -1 : 1, ue = (Ie) => {
    Ie.preventDefault(), I(!0);
    const Ee = (Z) => {
      const re = Math.max(f, window.innerWidth - 32), Pe = u === "right" ? window.innerWidth - Z.clientX : Z.clientX, Ye = Math.min(re, Math.max(f, Pe));
      if (z(!1), j(Ye), h)
        try {
          window.localStorage.setItem(`abc_drawer_w_${h}`, String(Math.round(Ye)));
        } catch {
        }
    }, _e = () => {
      I(!1), window.removeEventListener("mousemove", Ee), window.removeEventListener("mouseup", _e);
    };
    window.addEventListener("mousemove", Ee), window.addEventListener("mouseup", _e);
  };
  if (!D || typeof document > "u") return null;
  const Ne = S ? "100dvw" : O ? `${O}px` : typeof i == "number" ? `${ke}px` : `${ke}px`;
  return cr(
    /* @__PURE__ */ l(
      "div",
      {
        role: M,
        "aria-modal": M === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? _ : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, G) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          G === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                m && a();
              },
              "data-motion": R,
              className: x(
                "fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto",
                R !== "none" && (A ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ) : null,
          /* @__PURE__ */ l(
            "div",
            {
              "data-motion": R,
              style: {
                width: Ne,
                transform: R === "none" ? te > 0 ? `translate3d(${ve * te}px, 0, 0) scale(${fe})` : void 0 : A ? te > 0 ? `translate3d(${ve * te}px, 0, 0) scale(${fe})` : "translate3d(0, 0, 0)" : u === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: R === "none" || F ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: x(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                V && G > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                u === "right" ? "ml-auto border-l" : "mr-auto border-r",
                T
              ),
              children: [
                p && !S && /* @__PURE__ */ l(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: ue,
                    className: x(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      u === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(wn, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                      qt.length > 1 && /* @__PURE__ */ l(
                        "span",
                        {
                          title: V ? `并排抽屉层级: ${X} 级` : `抽屉栈深度: ${X} 级`,
                          className: x(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            W === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(ms, { className: "h-2.5 w-2.5" }),
                            "L",
                            X,
                            V && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: W === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: _, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1", children: [
                    p && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": S ? "还原默认宽度" : "全宽展开",
                        onClick: () => z((Ie) => !Ie),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: S ? /* @__PURE__ */ e(ls, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "关闭抽屉",
                        onClick: a,
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(Ct, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: x("flex-1 overflow-y-auto px-5 py-4 text-xs", N), children: o }),
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
function Mf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-header",
      className: x("flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5", t),
      ...r
    }
  );
}
function Af({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "h2",
    {
      "data-slot": "drawer-title",
      className: x("text-lg font-semibold tracking-tight text-[var(--abc-fg)]", t),
      ...r
    }
  );
}
function Rf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: x("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...r
    }
  );
}
function Df({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: x("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...r
    }
  );
}
function Lf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-footer",
      className: x(
        "flex flex-wrap items-center justify-between gap-3 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-6 py-4",
        t
      ),
      ...r
    }
  );
}
const Bf = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Pf = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, zf = ({
  spinning: t = !0,
  tip: r,
  text: a,
  size: n,
  motion: s,
  fullscreen: o = !1,
  fullScreen: d = !1,
  className: c,
  children: b
}) => {
  const i = r ?? a, u = !!(o || d), m = je(n, "md"), p = Be(s), f = /* @__PURE__ */ l(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": p,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(Jt, { className: x("animate-spin", Bf[m]) }),
        i && /* @__PURE__ */ e("span", { className: x("font-medium text-[var(--abc-fg-muted)]", Pf[m]), children: i })
      ]
    }
  );
  return u ? t ? /* @__PURE__ */ e(
    "div",
    {
      "data-motion": p,
      className: x(
        "fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs",
        p !== "none" && "abc-animate-fade-in"
      ),
      children: f
    }
  ) : null : b !== void 0 ? /* @__PURE__ */ l("div", { "data-motion": p, className: x("relative", c), children: [
    b,
    t && /* @__PURE__ */ e(
      "div",
      {
        className: x(
          "absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]",
          p !== "none" && "abc-animate-fade-in"
        ),
        children: f
      }
    )
  ] }) : t ? /* @__PURE__ */ e("div", { "data-motion": p, className: x("flex items-center justify-center py-8", c), children: f }) : null;
}, jf = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  opacity: s,
  children: o,
  className: d,
  ...c
}) => {
  const { resolvedTheme: b } = At(), i = ce(null), u = ce(null), m = ce(""), p = ce(null), f = ge(() => {
    const h = i.current;
    if (!h) return;
    if (p.current && (p.current.disconnect(), p.current = null), !r || !t || Array.isArray(t) && t.length === 0) {
      u.current && u.current.parentNode === h && h.removeChild(u.current), u.current = null, m.current = "";
      return;
    }
    if (typeof document > "u") return;
    const v = document.createElement("canvas"), w = v.getContext("2d");
    if (!w) return;
    const k = Array.isArray(t) ? t : [t], g = Math.max(window.devicePixelRatio || 1, 1), N = 210 + n[0], T = 90 + n[1];
    v.width = N * g, v.height = T * g;
    let M = "";
    try {
      w.scale(g, g), w.translate(N / 2, T / 2), w.rotate(a * Math.PI / 180), w.font = "500 12px Inter, -apple-system, sans-serif";
      const y = typeof s == "number" && Number.isFinite(s) ? Math.max(0, Math.min(1, s)) : b === "dark" ? 0.065 : 0.055;
      w.fillStyle = b === "dark" ? `rgba(226, 232, 240, ${y})` : `rgba(15, 23, 42, ${y})`, w.textAlign = "center", w.textBaseline = "middle", k.forEach((_, E) => {
        const R = (E - (k.length - 1) / 2) * 18;
        w.fillText(_, 0, R);
      }), M = v.toDataURL();
    } catch {
      return;
    }
    if (!M) return;
    let L = u.current;
    L || (L = document.createElement("div"), u.current = L), L.getAttribute("data-watermark-overlay") !== "true" && L.setAttribute("data-watermark-overlay", "true");
    const C = [
      "position: absolute",
      "inset: 0",
      "pointer-events: none",
      "z-index: 40",
      `background-image: url(${M})`,
      "background-repeat: repeat",
      `background-size: ${N}px ${T}px`
    ].join(" !important; ") + " !important;";
    if (m.current = C, L.getAttribute("style") !== C && L.setAttribute("style", C), L.parentNode !== h && h.appendChild(L), typeof MutationObserver < "u") {
      const y = new MutationObserver((_) => {
        const E = i.current, R = u.current;
        if (!E || !R) return;
        let D = !1;
        for (const A of _)
          if (A.type === "childList") {
            if (Array.from(A.removedNodes).includes(R)) {
              D = !0;
              break;
            }
          } else if (A.type === "attributes" && A.target === R && ((R.getAttribute("style") || "") !== m.current || R.hidden)) {
            D = !0;
            break;
          }
        D && f();
      });
      p.current = y, y.observe(h, { childList: !0, subtree: !1 }), y.observe(L, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
    }
  }, [t, r, n, s, b, a]);
  return we(() => (f(), () => {
    p.current && (p.current.disconnect(), p.current = null);
  }), [f]), /* @__PURE__ */ e("div", { ref: i, className: x("relative", d), ...c, children: o });
};
function ag({
  title: t,
  secret: r,
  open: a,
  secretValue: n,
  description: s = "此密钥仅显示一次。请在关闭前复制并安全存储。",
  secretLabel: o,
  metadata: d = [],
  closeLabel: c = "关闭",
  acknowledgeLabel: b = "我已妥善保存此密钥",
  copyLabel: i = "复制密钥",
  copiedLabel: u = "已复制",
  copyErrorMessage: m = "剪贴板写入失败，请手动选择复制。",
  className: p,
  onClose: f
}) {
  const h = r ?? n ?? null, v = a !== void 0 ? a : !!h, [w, k] = Me.useState(!1), [g, N] = Me.useState(!1), [T, M] = Me.useState(null);
  if (Me.useEffect(() => {
    v || (k(!1), N(!1), M(null));
  }, [v]), !v || !h)
    return null;
  const L = async () => {
    M(null), await Sn(h) ? (k(!0), setTimeout(() => k(!1), 2e3)) : M(m);
  };
  return /* @__PURE__ */ e(
    dr,
    {
      open: v,
      onClose: f,
      onCancel: f,
      onOpenChange: (C) => !C && f(),
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ l(
        ws,
        {
          "data-slot": "one-time-secret-dialog",
          className: x("w-full max-w-lg", p),
          closeLabel: c,
          children: [
            /* @__PURE__ */ l(Ns, { children: [
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300", children: /* @__PURE__ */ e(Wo, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Ss, { className: "text-base font-semibold leading-tight", children: t })
              ] }),
              /* @__PURE__ */ e(Cs, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: s })
            ] }),
            /* @__PURE__ */ l("div", { className: "space-y-3 py-2 text-xs", children: [
              /* @__PURE__ */ e(
                Kr,
                {
                  variant: "warning",
                  title: "请立即备份",
                  message: "关闭此窗口后将无法再次检索该明文内容，丢失将需要重新生成。"
                }
              ),
              o && /* @__PURE__ */ e("span", { className: "block font-medium text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ l("div", { className: "relative rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3 pr-12", children: [
                /* @__PURE__ */ e("code", { className: "block select-all break-all font-mono text-xs text-[var(--abc-fg)]", children: h }),
                /* @__PURE__ */ e(
                  Le,
                  {
                    type: "button",
                    variant: "outline",
                    size: "xs",
                    onClick: L,
                    className: "absolute right-2 top-2 h-7 w-7 p-0",
                    title: w ? u : i,
                    "aria-label": w ? u : i,
                    children: w ? /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(Or, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                  }
                )
              ] }),
              T && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: T }),
              d.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
                Hl,
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
              /* @__PURE__ */ l("label", { className: "flex cursor-pointer items-start gap-2 pt-1 select-none", children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    checked: g,
                    onChange: (C) => N(C.target.checked),
                    className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: b })
              ] })
            ] }),
            /* @__PURE__ */ e(ks, { className: "pt-2", children: /* @__PURE__ */ e(
              Le,
              {
                type: "button",
                variant: "primary",
                size: "sm",
                disabled: !g,
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
const va = /* @__PURE__ */ new Set(), Ff = {
  start() {
    va.forEach((t) => t({ action: "start" }));
  },
  done() {
    va.forEach((t) => t({ action: "done" }));
  },
  set(t) {
    va.forEach(
      (r) => r({ action: "set", value: Math.max(0, Math.min(100, t)) })
    );
  },
  subscribe(t) {
    return va.add(t), () => {
      va.delete(t);
    };
  }
}, Vl = ({
  activeKey: t,
  loading: r,
  skipInitial: a = !0,
  height: n = 2,
  color: s = "var(--abc-primary)",
  zIndex: o = 9999,
  className: d
}) => {
  const [c, b] = H(!1), [i, u] = H(0), m = ce(!0), p = ce(null), f = ce(null), h = () => {
    p.current !== null && typeof window < "u" && (window.clearInterval(p.current), p.current = null), f.current !== null && typeof window < "u" && (window.clearTimeout(f.current), f.current = null);
  }, v = () => {
    h(), b(!0), u(22), typeof window < "u" && (p.current = window.setInterval(() => {
      u((k) => k >= 88 ? k : k + Math.max(2, (90 - k) * 0.18));
    }, 120));
  }, w = () => {
    p.current !== null && typeof window < "u" && (window.clearInterval(p.current), p.current = null), u(100), typeof window < "u" && (f.current = window.setTimeout(() => {
      b(!1), u(0);
    }, 220));
  };
  return we(() => Ff.subscribe((k) => {
    k.action === "start" ? v() : k.action === "done" ? w() : k.action === "set" && typeof k.value == "number" && (h(), b(!0), u(k.value), k.value >= 100 && w());
  }), []), we(() => {
    if (r !== void 0)
      return r ? v() : c && w(), () => h();
  }, [r]), we(() => {
    if (t === void 0) return;
    if (a && m.current) {
      m.current = !1;
      return;
    }
    m.current = !1, v();
    const k = typeof window < "u" ? window.setTimeout(() => {
      w();
    }, 160) : null;
    return () => {
      k !== null && typeof window < "u" && window.clearTimeout(k);
    };
  }, [t, a]), we(() => () => h(), []), c ? /* @__PURE__ */ e(
    "div",
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": Math.round(i),
      "aria-label": "页面加载进度",
      style: { zIndex: o, height: n },
      className: x("pointer-events-none fixed top-0 right-0 left-0 overflow-hidden", d),
      children: /* @__PURE__ */ e(
        "div",
        {
          style: {
            width: `${i}%`,
            backgroundColor: s,
            boxShadow: `0 0 8px ${s}`,
            transition: i === 100 ? "width 160ms ease-out, opacity 200ms ease-out" : "width 220ms cubic-bezier(0.22, 1, 0.36, 1)",
            opacity: i === 100 ? 0.85 : 1
          },
          className: "h-full"
        }
      )
    }
  ) : null;
}, Of = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, ng = ({
  activeKey: t,
  transition: r,
  showProgress: a = !0,
  className: n,
  children: s
}) => {
  const { pageTransition: o } = At(), c = Of[r ?? o] ?? "";
  return /* @__PURE__ */ l(Ue, { children: [
    a && t !== void 0 && /* @__PURE__ */ e(Vl, { activeKey: t }),
    /* @__PURE__ */ e("div", { className: x("w-full min-w-0", c, n), children: s }, t)
  ] });
}, $f = {
  default: "xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]",
  balanced: "xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]",
  "wide-master": "xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]"
};
function sg({
  children: t,
  inspector: r,
  ratio: a = "default",
  stickyInspector: n = !0,
  className: s,
  ...o
}) {
  const d = Me.Children.toArray(t), c = r !== void 0 ? t : d[0], b = r !== void 0 ? r : d.slice(1);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: x("grid items-start gap-6", $f[a], s),
      ...o,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: c }),
        /* @__PURE__ */ e("div", { className: x("min-w-0", n && "xl:sticky xl:top-20"), children: b })
      ]
    }
  );
}
const Kf = Me.forwardRef(
  ({
    title: t,
    subtitle: r,
    badge: a,
    headerActions: n,
    showClear: s = !1,
    onClear: o,
    clearLabel: d = "清除选中",
    loading: c = !1,
    loadingText: b = "正在加载详情…",
    error: i,
    isEmpty: u = !1,
    hasSelection: m,
    emptyIcon: p,
    emptyMessage: f = "请在左侧选择一项以检视详细信息",
    emptyDescription: h,
    footer: v,
    children: w,
    className: k,
    ...g
  }, N) => {
    const T = m !== void 0 ? !m : u, M = !!(t || r || a || n);
    return /* @__PURE__ */ l(
      "aside",
      {
        ref: N,
        "data-slot": "inspector-panel",
        className: x(
          "flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all",
          k
        ),
        ...g,
        children: [
          M && /* @__PURE__ */ l("header", { className: "mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5", children: [
            /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-2", children: [
                typeof t == "string" ? /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)] tracking-tight", children: t }) : t,
                a
              ] }),
              r && /* @__PURE__ */ e("div", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1.5", children: [
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
                  children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          c ? /* @__PURE__ */ l("div", { className: "flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e(Jt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: b })
          ] }) : i ? /* @__PURE__ */ e("div", { className: "my-2", children: i }) : T ? /* @__PURE__ */ l("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
            p ?? /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(_a, { className: "h-5 w-5 stroke-[1.5]", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg)]", children: f }),
            h && /* @__PURE__ */ e("p", { className: "max-w-[280px] text-[11px] text-[var(--abc-fg-muted)]", children: h })
          ] }) : /* @__PURE__ */ e("div", { className: "flex-1 space-y-4", children: w }),
          v && /* @__PURE__ */ e("footer", { className: "mt-4 border-t border-[var(--abc-border)] pt-3.5", children: v })
        ]
      }
    );
  }
);
Kf.displayName = "InspectorPanel";
function En(t, r) {
  if (!(!t || r == null || r === ""))
    return Array.isArray(r) ? r.reduce((a, n) => a == null ? void 0 : a[n], t) : typeof r == "string" && r.includes(".") ? r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t) : t[r];
}
function Hf(t, r = 150) {
  if (typeof t == "number" && Number.isFinite(t)) return t;
  if (typeof t == "string") {
    const a = parseFloat(t);
    if (Number.isFinite(a) && !t.trim().endsWith("%")) return a;
  }
  return r;
}
const ns = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
}, Eo = {
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
}, To = [
  "info",
  "success",
  "warning",
  "danger",
  "purple",
  "cyan",
  "orange",
  "teal",
  "pink"
], Wf = [
  { color: "#3b82f6", label: "经典蓝" },
  { color: "#10b981", label: "翡翠绿" },
  { color: "#f59e0b", label: "琥珀橙" },
  { color: "#f43f5e", label: "珊瑚红" },
  { color: "#8b5cf6", label: "极光紫" }
];
function Io(t) {
  if (typeof t == "number")
    return qe(t < 1e11 ? t * 1e3 : t);
  const r = String(t).trim();
  return /^\d{10}$/.test(r) ? qe(Number(r) * 1e3) : /^\d{13}$/.test(r) ? qe(Number(r)) : qe(t);
}
function Vf({
  value: t,
  record: r,
  config: a
}) {
  const { toast: n } = At(), s = (u) => a.checkedValue !== void 0 ? String(u) === String(a.checkedValue) : u === !0 || u === 1 || u === "1", [o, d] = H(() => s(t)), [c, b] = H(!1);
  we(() => {
    d(s(t));
  }, [t, a.checkedValue]);
  const i = async (u) => {
    if (!a.onChange || c) return;
    const m = o;
    d(u), b(!0);
    try {
      await a.onChange(u, r);
    } catch (p) {
      d(m), n.error((p == null ? void 0 : p.message) || "更新状态失败");
    } finally {
      b(!1);
    }
  };
  return /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1.5", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ e(
      or,
      {
        size: "sm",
        checked: o,
        loading: c,
        disabled: !a.onChange,
        onChange: i
      }
    ),
    (a.checkedChildren || a.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: o ? a.checkedChildren : a.unCheckedChildren })
  ] });
}
function Ul(t, r, a, n) {
  const s = a.type === "switch" || typeof a.type == "object" && a.type !== null && a.type.type === "switch", o = typeof a.type == "object" && a.type !== null ? a.type : a.type ? { type: a.type } : a.valueType ? { type: a.valueType } : void 0;
  if ((o == null ? void 0 : o.type) === "switch" && (s || o.onChange || o.checkedValue !== void 0))
    return /* @__PURE__ */ e(Vf, { value: t, record: r, config: o });
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const d = (o == null ? void 0 : o.options) ?? a.options;
  if (d && d.length > 0) {
    const i = String(t);
    let u = d.findIndex((m) => String(m.value) === i);
    if (u < 0) {
      const m = i.toLowerCase();
      u = d.findIndex((p) => String(p.value).toLowerCase() === m);
    }
    if (u >= 0) {
      const m = d[u], p = m.status ? String(m.status).toLowerCase() : "", f = m.color ? String(m.color).toLowerCase() : "", h = (p ? Eo[p] : void 0) ?? (f ? Eo[f] : void 0) ?? (!m.status && !m.color ? To[u % To.length] : void 0), v = !a.__autoOptionsFromSearch;
      return /* @__PURE__ */ e(
        Lr,
        {
          tone: h,
          status: m.status,
          color: m.color,
          dot: v,
          children: m.label
        }
      );
    }
  }
  const c = o == null ? void 0 : o.type;
  let b;
  switch (c) {
    case "money": {
      const i = Number(t);
      b = Number.isNaN(i) ? String(t) : /* @__PURE__ */ l("span", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: [
        "¥",
        i.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      ] });
      break;
    }
    case "number": {
      const i = Number(t);
      b = Number.isNaN(i) ? String(t) : /* @__PURE__ */ e("span", { className: "font-mono tabular-nums", children: i.toLocaleString("zh-CN") });
      break;
    }
    case "date": {
      const i = Io(t), u = (o == null ? void 0 : o.format) || "YYYY-MM-DD";
      b = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: i.isValid() ? i.format(u) : String(t) });
      break;
    }
    case "datetime": {
      const i = Io(t), u = (o == null ? void 0 : o.format) || "YYYY-MM-DD HH:mm:ss";
      b = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: i.isValid() ? i.format(u) : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(
        Pa,
        {
          src: String(t),
          width: (o == null ? void 0 : o.imageWidth) ?? 32,
          height: (o == null ? void 0 : o.imageHeight) ?? 32
        }
      );
    case "progress":
      return /* @__PURE__ */ e(
        Rl,
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
      return /* @__PURE__ */ e(bo, { text: String(t) });
    case "link":
      return /* @__PURE__ */ e(
        "a",
        {
          href: String(t),
          target: (o == null ? void 0 : o.target) ?? "_blank",
          rel: "noreferrer",
          onClick: (i) => i.stopPropagation(),
          className: "text-[var(--abc-primary)] hover:underline",
          children: String(t)
        }
      );
    case "switch":
      return /* @__PURE__ */ e(Lr, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
    case "badge":
      return /* @__PURE__ */ e(Lr, { dot: !0, children: String(t) });
    default:
      b = String(t);
  }
  if (a.linkToView && n) {
    const i = typeof a.linkToView == "string" ? a.linkToView : void 0;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: (u) => {
          u.stopPropagation(), n(r, i);
        },
        className: "max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
        children: b
      }
    );
  }
  return a.copyable ? /* @__PURE__ */ e(bo, { text: String(t), displayText: b }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: b }) : b;
}
function Uf({ state: t }) {
  const {
    loading: r,
    flattenedRows: a,
    selectable: n,
    hasExpandColumn: s,
    orderedColumns: o,
    density: d,
    totalColSpan: c,
    emptyText: b,
    onEmptyReset: i,
    effectiveSelectedKeys: u,
    rowSelection: m,
    activeRowKey: p,
    expandedKeys: f,
    treeData: h,
    expandable: v,
    onRow: w,
    isRowDraggable: k,
    emitRowDragEnd: g,
    onRowClick: N,
    stickyMeta: T,
    scrollEdge: M,
    toggleOne: L,
    toggleExpandRow: C,
    getEffectiveFixed: y,
    onRowView: _,
    indentPx: E,
    draggingKey: R
  } = t;
  return /* @__PURE__ */ e("tbody", { children: r && a.length === 0 ? Array.from({ length: 5 }).map((D, A) => /* @__PURE__ */ l("tr", { children: [
    n && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2.5 py-3 text-center", children: /* @__PURE__ */ e(jt, { width: 16, height: 16 }) }),
    s && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
    o.map(($) => /* @__PURE__ */ e(
      "td",
      {
        className: x("border-b border-[var(--abc-border)]", ns[d]),
        children: /* @__PURE__ */ e(jt, { variant: "text", className: "w-4/5" })
      },
      $.key
    ))
  ] }, `sk_${A}`)) : a.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: c, children: /* @__PURE__ */ e(wl, { title: b, onReset: i }) }) }) : a.map(({ record: D, key: A, rowIdx: $, depth: B, hasTreeChildren: S }) => {
    var K, q, G;
    const z = !!(n && (u != null && u.includes(A))), F = !!((q = (K = m == null ? void 0 : m.getCheckboxProps) == null ? void 0 : K.call(m, D)) != null && q.disabled), I = p != null && String(p) === String(A), O = f.includes(A), j = s ? h ? S : !!(v != null && v.expandedRowRender && (!v.rowExpandable || v.rowExpandable(D))) || !!((G = v == null ? void 0 : v.rowExpandable) != null && G.call(v, D)) : !1, U = (w == null ? void 0 : w(D, $)) ?? {};
    return /* @__PURE__ */ l(pt.Fragment, { children: [
      /* @__PURE__ */ l(
        "tr",
        {
          ...U,
          draggable: k || U.draggable,
          onDragStart: (W) => {
            var X;
            (X = U.onDragStart) == null || X.call(U, W), k && W.dataTransfer && (W.dataTransfer.setData("text/plain", String(A)), W.dataTransfer.effectAllowed = "move");
          },
          onDragOver: (W) => {
            var X;
            (X = U.onDragOver) == null || X.call(U, W), k && W.preventDefault();
          },
          onDrop: (W) => {
            var se, P;
            if ((se = U.onDrop) == null || se.call(U, W), !k || !g) return;
            W.preventDefault();
            const X = (P = W.dataTransfer) == null ? void 0 : P.getData("text/plain");
            X && X !== String(A) && g(X, A);
          },
          "data-state": I || z ? "selected" : void 0,
          tabIndex: N ? 0 : U.tabIndex,
          onClick: (W) => {
            var se;
            if ((se = U.onClick) == null || se.call(U, W), !N) return;
            const X = W.target;
            X && X.closest(
              'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
            ) || N(D, W);
          },
          onKeyDown: (W) => {
            var X;
            (X = U.onKeyDown) == null || X.call(U, W), N && W.target === W.currentTarget && (W.key === "Enter" || W.key === " ") && (W.preventDefault(), N(D, W));
          },
          className: x(
            "group transition-colors duration-150",
            k && "cursor-grab active:cursor-grabbing",
            B === 1 && "border-l-4 border-l-blue-400 bg-blue-50/75 dark:border-l-blue-500 dark:bg-blue-950/30",
            B >= 2 && "border-l-4 border-l-amber-400 bg-amber-50/75 dark:border-l-amber-500 dark:bg-amber-950/20",
            N && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
            z || I ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85",
            U.className
          ),
          children: [
            n && /* @__PURE__ */ e(
              "td",
              {
                style: { left: 0 },
                className: x(
                  "sticky z-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2.5 text-center group-hover:bg-[var(--abc-bg-muted)]",
                  (z || I) && "bg-[var(--abc-primary-soft)]/60",
                  !T.hasAnyLeftFixed && M.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
                ),
                children: /* @__PURE__ */ e(
                  Tr,
                  {
                    checked: z,
                    disabled: F,
                    onChange: () => L(A)
                  }
                )
              }
            ),
            s && /* @__PURE__ */ e(
              "td",
              {
                style: T.hasAnyLeftFixed ? { left: n ? 44 : 0 } : void 0,
                className: x(
                  "border-b border-[var(--abc-border)] px-2 py-2.5 text-center whitespace-nowrap",
                  T.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                ),
                children: j ? /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": O ? "收起详情行" : "展开详情行",
                    "aria-expanded": O,
                    onClick: () => C(A, D),
                    className: "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: /* @__PURE__ */ e(
                      Zt,
                      {
                        className: x(
                          "h-3.5 w-3.5 transition-transform duration-150",
                          O && "rotate-90 text-[var(--abc-primary)]"
                        )
                      }
                    )
                  }
                ) : /* @__PURE__ */ e("span", { className: "inline-block w-4" })
              }
            ),
            o.map((W, X) => {
              const se = W.dataIndex ?? W.key, P = En(D, se), V = y(W), de = W.key === "__abc_actions__" || W.key === "__actions__", ke = W.render ? W.render(P, D, h ? B : $, {
                depth: B,
                rowIndex: $,
                isExpanded: O
              }) : Ul(P, D, W, _), te = !s && X === 0 && (B > 0 || S), fe = s && X === 0 && B > 0;
              return /* @__PURE__ */ e(
                "td",
                {
                  "data-col-cell": W.key,
                  style: {
                    ...V === "left" ? { left: `${T.leftOffsets[W.key] ?? 0}px` } : {},
                    ...V === "right" ? { right: `${T.rightOffsets[W.key] ?? 0}px` } : {},
                    ...fe ? { paddingLeft: `${12 + B * E}px` } : {}
                  },
                  className: x(
                    "overflow-hidden border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                    ns[d],
                    W.align === "center" && "text-center",
                    W.align === "right" && "text-right",
                    R === W.key && "bg-[var(--abc-primary-soft)]/30",
                    V === "left" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                    V === "right" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                    (z || I) && (V === "left" || V === "right") && "bg-[var(--abc-primary-soft)]/60",
                    W.key === T.lastLeftKey && M.left && "shadow-[6px_0_8px_-6px_rgba(15,23,42,0.22)]",
                    W.key === T.firstRightKey && M.right && "shadow-[-6px_0_8px_-6px_rgba(15,23,42,0.22)]"
                  ),
                  children: te ? /* @__PURE__ */ l(
                    "div",
                    {
                      style: { paddingLeft: `${B * E}px` },
                      className: "inline-flex max-w-full items-center gap-1",
                      children: [
                        S ? /* @__PURE__ */ e(
                          "button",
                          {
                            type: "button",
                            "aria-label": O ? "收起子项" : "展开子项",
                            "aria-expanded": O,
                            onClick: () => C(A, D),
                            className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                            children: /* @__PURE__ */ e(
                              Zt,
                              {
                                className: x(
                                  "h-3 w-3 transition-transform duration-150",
                                  O && "rotate-90 text-[var(--abc-primary)]"
                                )
                              }
                            )
                          }
                        ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: ke })
                      ]
                    }
                  ) : W.ellipsis === !1 ? ke : /* @__PURE__ */ e(
                    "div",
                    {
                      title: de || P === void 0 || P === null || typeof P == "object" ? void 0 : String(P),
                      className: x(
                        "overflow-hidden text-ellipsis whitespace-nowrap",
                        de ? "w-full min-w-0" : "w-0 min-w-full"
                      ),
                      children: ke
                    }
                  )
                },
                W.key
              );
            })
          ]
        }
      ),
      j && O && (v == null ? void 0 : v.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
        "td",
        {
          colSpan: c,
          className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
          children: v.expandedRowRender(D, $, B, O)
        }
      ) })
    ] }, String(A));
  }) });
}
function Gf({ state: t }) {
  const {
    contextMenu: r,
    portalTarget: a,
    getEffectiveFixed: n,
    movableColumns: s,
    filterHighlightColor: o,
    contextMenuRef: d,
    resolvedMotion: c,
    isColSortable: b,
    onSortChange: i,
    setContextMenu: u,
    sortState: m,
    onColumnPin: p,
    onColumnReorder: f,
    handleMoveColumnStep: h,
    onColumnHide: v,
    onToggleColumnVisible: w,
    submenuConfigurableCols: k,
    setVisibilitySubmenuOpen: g,
    visibilitySubmenuOpen: N,
    hiddenColumnKeys: T,
    onFilterHighlightColorChange: M,
    onResetColumns: L
  } = t;
  return /* @__PURE__ */ e(Ue, { children: r && a && (() => {
    const C = n(r.col), y = s.findIndex((A) => A.key === r.col.key), _ = y > 0 && !C, E = y >= 0 && y < s.length - 1 && !C, R = s.length > 1, D = o || "#3b82f6";
    return cr(
      /* @__PURE__ */ l(
        "div",
        {
          ref: d,
          role: "menu",
          "aria-label": `${r.col.title} 列操作菜单`,
          "data-abc-floating": "",
          "data-motion": c,
          style: { top: `${r.y}px`, left: `${r.x}px` },
          className: x(
            "fixed z-[1350] w-50 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
            c !== "none" && "abc-animate-popover-in"
          ),
          children: [
            /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-semibold text-[var(--abc-fg)]", children: r.col.title }),
              /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "列属性" })
            ] }),
            b(r.col) && i && /* @__PURE__ */ l("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    i(r.col.key, "asc"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(hs, { className: "h-3.5 w-3.5" }),
                      " 升序排列"
                    ] }),
                    (m == null ? void 0 : m.key) === r.col.key && m.direction === "asc" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    i(r.col.key, "desc"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(gs, { className: "h-3.5 w-3.5" }),
                      " 降序排列"
                    ] }),
                    (m == null ? void 0 : m.key) === r.col.key && m.direction === "desc" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              (m == null ? void 0 : m.key) === r.col.key && m.direction && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    i(r.col.key, null), u(null);
                  },
                  className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(al, { className: "h-3.5 w-3.5" }),
                    " 清除排序"
                  ]
                }
              )
            ] }),
            p && /* @__PURE__ */ l("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    p(r.col.key, C === "left" ? null : "left"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(Jr, { className: "h-3.5 w-3.5 -rotate-45" }),
                      " 固定到左侧"
                    ] }),
                    C === "left" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    p(r.col.key, C === "right" ? null : "right"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(Jr, { className: "h-3.5 w-3.5 rotate-45" }),
                      " 固定到右侧"
                    ] }),
                    C === "right" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              C && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    p(r.col.key, null), u(null);
                  },
                  className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(du, { className: "h-3.5 w-3.5" }),
                    " 取消固定"
                  ]
                }
              )
            ] }),
            f && /* @__PURE__ */ l("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: !_,
                  onClick: () => h(r.col.key, "left"),
                  className: x(
                    "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                    _ ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ e(uu, { className: "h-3.5 w-3.5" }),
                    " 向左移动"
                  ]
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: !E,
                  onClick: () => h(r.col.key, "right"),
                  className: x(
                    "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                    E ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ e(rl, { className: "h-3.5 w-3.5" }),
                    " 向右移动"
                  ]
                }
              )
            ] }),
            (v || w && k.length > 0) && /* @__PURE__ */ l("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              v && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: !R,
                  onClick: () => {
                    R && (v(r.col.key), u(null));
                  },
                  className: x(
                    "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                    R ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ e(Zo, { className: "h-3.5 w-3.5" }),
                    " 隐藏当前列"
                  ]
                }
              ),
              w && k.length > 0 && /* @__PURE__ */ l(
                "div",
                {
                  className: "relative",
                  onMouseEnter: () => g(!0),
                  onMouseLeave: () => g(!1),
                  children: [
                    /* @__PURE__ */ l(
                      "button",
                      {
                        type: "button",
                        role: "menuitem",
                        "aria-haspopup": "menu",
                        "aria-expanded": N,
                        onClick: () => g((A) => !A),
                        className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: [
                          /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-2", children: [
                            /* @__PURE__ */ e(bu, { className: "h-3.5 w-3.5" }),
                            " 显示 / 隐藏列"
                          ] }),
                          /* @__PURE__ */ e(Zt, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]" })
                        ]
                      }
                    ),
                    N && /* @__PURE__ */ l(
                      "div",
                      {
                        role: "menu",
                        "aria-label": "显示与隐藏列清单",
                        style: {
                          left: typeof window < "u" && r.x + 208 + 196 > window.innerWidth ? void 0 : "100%",
                          right: typeof window < "u" && r.x + 208 + 196 > window.innerWidth ? "100%" : void 0,
                          top: -4
                        },
                        className: "absolute z-[1360] mx-1 max-h-64 w-46 overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
                        children: [
                          /* @__PURE__ */ e("div", { className: "px-2 py-1 text-[10px] font-medium text-[var(--abc-fg-muted)]", children: "勾选以显示列" }),
                          k.map((A) => {
                            const $ = !T.includes(A.key), B = $ && s.length <= 1;
                            return /* @__PURE__ */ l(
                              "button",
                              {
                                type: "button",
                                role: "menuitemcheckbox",
                                "aria-checked": $,
                                disabled: B,
                                onClick: () => {
                                  B || w(A.key);
                                },
                                className: x(
                                  "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left",
                                  B ? "text-[var(--abc-fg-placeholder)] cursor-not-allowed" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                                ),
                                children: [
                                  /* @__PURE__ */ e("span", { className: "truncate", children: A.title }),
                                  /* @__PURE__ */ e(
                                    "span",
                                    {
                                      className: x(
                                        "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors",
                                        $ ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                      ),
                                      children: $ && /* @__PURE__ */ e(St, { className: "h-2.5 w-2.5 stroke-[3]" })
                                    }
                                  )
                                ]
                              },
                              A.key
                            );
                          })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            M && /* @__PURE__ */ l("div", { className: "border-b border-[var(--abc-border)] px-2.5 py-2", children: [
              /* @__PURE__ */ l("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ e(ds, { className: "h-3 w-3" }),
                /* @__PURE__ */ e("span", { children: "筛选高亮颜色" })
              ] }),
              /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: Wf.map((A) => {
                const $ = D === A.color;
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    title: A.label,
                    "aria-label": `筛选高亮颜色 ${A.label}`,
                    onClick: () => M(A.color),
                    style: { backgroundColor: A.color },
                    className: x(
                      "h-4 w-4 rounded-full transition-transform cursor-pointer",
                      $ ? "scale-110 ring-2 ring-slate-900 ring-offset-1 dark:ring-white dark:ring-offset-slate-900" : "opacity-80 hover:scale-110 hover:opacity-100"
                    )
                  },
                  A.color
                );
              }) })
            ] }),
            L && /* @__PURE__ */ e("div", { className: "pt-1", children: /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                role: "menuitem",
                onClick: () => {
                  L(), u(null);
                },
                className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
                  " 重置列配置"
                ]
              }
            ) })
          ]
        }
      ),
      a
    );
  })() });
}
function Yf({ state: t }) {
  const {
    selectable: r,
    stickyMeta: a,
    scrollEdge: n,
    allSelected: s,
    someSelected: o,
    toggleAll: d,
    hasExpandColumn: c,
    orderedColumns: b,
    colWidthMeta: i,
    getEffectiveFixed: u,
    isColSortable: m,
    sortState: p,
    draggingKey: f,
    activeFilterKeys: h,
    activeFilterLabels: v,
    headerFilterRender: w,
    headerFilterMode: k,
    filterHighlightColor: g,
    onColumnReorder: N,
    liveDragOrder: T,
    wrapperRef: M,
    prevColRectsRef: L,
    hasLiveSwappedRef: C,
    setLiveDragOrder: y,
    handleHeaderContextMenu: _,
    preDragOrderRef: E,
    setDraggingKey: R,
    density: D,
    handleSortClick: A,
    isResizable: $,
    startResizeColumn: B,
    hasInlineHeaderFilterRow: S,
    headerFilters: z,
    onHeaderFilterChange: F
  } = t;
  return /* @__PURE__ */ l("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
    /* @__PURE__ */ l("tr", { children: [
      r && /* @__PURE__ */ e(
        "th",
        {
          style: { left: 0 },
          className: x(
            "sticky z-30 w-11 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2.5 py-3 text-center",
            !a.hasAnyLeftFixed && n.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
          ),
          children: /* @__PURE__ */ e(
            Tr,
            {
              checked: s,
              indeterminate: o,
              onChange: d
            }
          )
        }
      ),
      c && /* @__PURE__ */ e(
        "th",
        {
          style: a.hasAnyLeftFixed ? { left: r ? 44 : 0 } : void 0,
          "aria-label": "展开列",
          className: x(
            "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
            a.hasAnyLeftFixed && "sticky z-20"
          )
        }
      ),
      b.map((I, O) => {
        const j = i.resolvedWidths[I.key], U = u(I), K = m(I), q = (p == null ? void 0 : p.key) === I.key ? p.direction : null, G = f === I.key, W = !!(h != null && h.includes(I.key)), X = v == null ? void 0 : v[I.key], se = b[O + 1], P = se ? u(se) : void 0, V = !!(se && P !== "right"), de = I.key === a.firstRightKey, ke = w && (I.filterable || k) ? w(I) : null, te = {
          width: j ? `${j}px` : void 0,
          ...U === "left" ? { left: `${a.leftOffsets[I.key] ?? 0}px` } : {},
          ...U === "right" ? { right: `${a.rightOffsets[I.key] ?? 0}px` } : {},
          ...W ? {
            backgroundColor: g || "#3b82f6",
            color: "#ffffff"
          } : {}
        }, fe = (ve) => {
          if (!f || !N) return;
          const ue = T && T.length > 0 ? T : b.filter((Z) => Z.key !== "__abc_actions__" && Z.key !== "__actions__").map((Z) => Z.key), Ne = ue.indexOf(f), Ie = ue.indexOf(ve);
          if (Ne < 0 || Ie < 0 || Ne === Ie) return;
          if (M.current) {
            const Z = /* @__PURE__ */ new Map();
            M.current.querySelectorAll("[data-col-key]").forEach((re) => {
              const Pe = re.dataset.colKey;
              Pe && Z.set(Pe, re.getBoundingClientRect().left);
            }), L.current = Z;
          }
          const Ee = [...ue], [_e] = Ee.splice(Ne, 1);
          Ee.splice(Ie, 0, _e), C.current = !0, y(Ee), N(Ee);
        };
        return /* @__PURE__ */ l(
          "th",
          {
            "data-col-key": I.key,
            "data-dragging": G ? "true" : void 0,
            draggable: !!(N && !U && I.key !== "__abc_actions__" && I.key !== "__actions__" && I.key !== "__drag_handle__"),
            onContextMenu: (ve) => _(ve, I),
            onDragStart: (ve) => {
              const ue = b.filter((Ne) => Ne.key !== "__abc_actions__" && Ne.key !== "__actions__").map((Ne) => Ne.key);
              E.current = ue, C.current = !1, R(I.key), y(ue), ve.dataTransfer && (ve.dataTransfer.effectAllowed = "move");
            },
            onDragOver: (ve) => {
              if (!f || f === I.key || U || I.key === "__abc_actions__" || I.key === "__actions__" || !N)
                return;
              ve.preventDefault();
              const ue = T && T.length > 0 ? T : b.filter((_e) => _e.key !== "__abc_actions__" && _e.key !== "__actions__").map((_e) => _e.key), Ne = ue.indexOf(f), Ie = ue.indexOf(I.key);
              if (Ne < 0 || Ie < 0 || Ne === Ie) return;
              const Ee = ve.currentTarget.getBoundingClientRect();
              Ee.width > 0 && (Ne < Ie && ve.clientX < Ee.left + Ee.width * 0.35 || Ne > Ie && ve.clientX > Ee.left + Ee.width * 0.65) || fe(I.key);
            },
            onDrop: () => {
              f && f !== I.key && !C.current && !U && I.key !== "__abc_actions__" && I.key !== "__actions__" && fe(I.key), R(null), y(null), E.current = null, C.current = !1;
            },
            onDragEnd: () => {
              R(null), y(null), E.current = null, C.current = !1;
            },
            style: te,
            className: x(
              "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
              U === "right" ? "overflow-visible" : "overflow-hidden",
              ns[D],
              I.align === "center" && "text-center",
              I.align === "right" && "text-right",
              U === "left" && "sticky z-30",
              U === "right" && "sticky z-30",
              G && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
              I.key === a.lastLeftKey && n.left && "shadow-[3px_0_6px_-2px_rgba(15,23,42,0.14)]",
              I.key === a.firstRightKey && n.right && "shadow-[-3px_0_6px_-2px_rgba(15,23,42,0.14)]"
            ),
            children: [
              de && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 left-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
              V && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 right-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
              /* @__PURE__ */ l(
                "div",
                {
                  className: x(
                    "flex min-w-0 items-center gap-1",
                    I.align === "right" && "justify-end",
                    I.align === "center" && "justify-center"
                  ),
                  children: [
                    /* @__PURE__ */ l(
                      "span",
                      {
                        className: x(
                          "inline-flex min-w-0 items-center gap-1",
                          K && (W ? "cursor-pointer opacity-95 hover:opacity-100" : "cursor-pointer hover:text-[var(--abc-primary)]")
                        ),
                        onClick: () => A(I),
                        children: [
                          N && !U && I.key !== "__abc_actions__" && I.key !== "__actions__" && I.key !== "__drag_handle__" && /* @__PURE__ */ e(
                            wn,
                            {
                              className: x(
                                "h-3 w-3 shrink-0 -ml-0.5 cursor-grab opacity-0 transition-opacity group-hover:opacity-100",
                                W ? "text-white/80" : "text-[var(--abc-fg-placeholder)]"
                              )
                            }
                          ),
                          /* @__PURE__ */ e(
                            "span",
                            {
                              className: "min-w-0 truncate whitespace-nowrap",
                              title: X ? I.title : void 0,
                              children: X || I.title
                            }
                          ),
                          I.tooltip && /* @__PURE__ */ e(Yt, { content: I.tooltip, children: /* @__PURE__ */ e(
                            "span",
                            {
                              onClick: (ve) => ve.stopPropagation(),
                              className: x(
                                "inline-flex shrink-0",
                                W ? "text-white/85 hover:text-white" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                              ),
                              children: /* @__PURE__ */ e(ea, { className: "h-3 w-3" })
                            }
                          ) }),
                          K && /* @__PURE__ */ e(
                            "span",
                            {
                              className: x(
                                "inline-flex shrink-0",
                                W ? "text-white" : "text-[var(--abc-fg-muted)]"
                              ),
                              children: q === "asc" ? /* @__PURE__ */ e(
                                hs,
                                {
                                  className: x(
                                    "h-3 w-3",
                                    W ? "text-white" : "text-[var(--abc-primary)]"
                                  )
                                }
                              ) : q === "desc" ? /* @__PURE__ */ e(
                                gs,
                                {
                                  className: x(
                                    "h-3 w-3",
                                    W ? "text-white" : "text-[var(--abc-primary)]"
                                  )
                                }
                              ) : /* @__PURE__ */ e(al, { className: "h-3 w-3 opacity-55" })
                            }
                          )
                        ]
                      }
                    ),
                    ke && /* @__PURE__ */ e(
                      "span",
                      {
                        "data-header-filter": "",
                        onClick: (ve) => ve.stopPropagation(),
                        className: "inline-flex shrink-0 items-center",
                        children: ke
                      }
                    )
                  ]
                }
              ),
              $ && (U === "right" ? /* @__PURE__ */ e(
                "span",
                {
                  role: "separator",
                  "aria-orientation": "vertical",
                  "aria-label": `拖拽调节 ${I.title} 列宽`,
                  onMouseDown: (ve) => B(ve, I, "left"),
                  className: "absolute top-0 bottom-0 -left-1 z-30 w-2.5 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                }
              ) : /* @__PURE__ */ e(
                "span",
                {
                  role: "separator",
                  "aria-orientation": "vertical",
                  "aria-label": `拖拽调节 ${I.title} 列宽`,
                  onMouseDown: (ve) => B(ve, I, "right"),
                  className: "absolute top-0 right-0 bottom-0 z-20 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                }
              ))
            ]
          },
          I.key
        );
      })
    ] }),
    S && /* @__PURE__ */ l("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
      r && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2.5 py-1.5" }),
      c && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
      b.map((I) => {
        const O = u(I);
        return /* @__PURE__ */ e(
          "th",
          {
            style: {
              ...O === "left" ? { left: `${a.leftOffsets[I.key] ?? 0}px` } : {},
              ...O === "right" ? { right: `${a.rightOffsets[I.key] ?? 0}px` } : {}
            },
            className: x(
              "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
              O === "left" && "sticky z-20",
              O === "right" && "sticky z-20"
            ),
            children: I.filterable ? I.filterType === "select" && I.filterOptions ? /* @__PURE__ */ e(
              ir,
              {
                size: "xs",
                allowClear: !0,
                placeholder: "全部",
                options: I.filterOptions,
                value: z[I.key] ?? "",
                onChange: (j) => F == null ? void 0 : F(I.key, j)
              }
            ) : /* @__PURE__ */ e(
              kt,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `筛选${I.title}`,
                value: z[I.key] ?? "",
                onChange: (j) => F == null ? void 0 : F(I.key, j.target.value)
              }
            ) : null
          },
          `${I.key}_filter`
        );
      })
    ] })
  ] });
}
function qf(t) {
  const {
    columns: r,
    data: a,
    dataSource: n,
    rowKey: s = "id",
    loading: o = !1,
    density: d = "default",
    selectedKeys: c,
    onSelectionChange: b,
    rowSelection: i,
    sortState: u,
    onSortChange: m,
    headerFilterMode: p = !1,
    headerFilters: f = {},
    onHeaderFilterChange: h,
    headerFilterRender: v,
    activeFilterKeys: w,
    activeFilterLabels: k,
    filterHighlightColor: g,
    onFilterHighlightColorChange: N,
    allColumns: T,
    hiddenColumnKeys: M = [],
    onToggleColumnVisible: L,
    columnWidths: C = {},
    onColumnResize: y,
    resizable: _,
    motion: E,
    columnFixed: R = {},
    onColumnPin: D,
    onColumnHide: A,
    onResetColumns: $,
    onColumnReorder: B,
    expandable: S,
    treeData: z = !1,
    rowDraggable: F,
    draggable: I,
    onRowDragEnd: O,
    onDragEnd: j,
    onRowView: U,
    activeRowKey: K,
    onRowClick: q,
    onRow: G,
    onEmptyReset: W,
    maxHeight: X,
    ariaLabel: se = "数据表格",
    emptyText: P = "暂无符合条件的数据",
    className: V
  } = t, de = a ?? n ?? [], ke = !!(F ?? I), te = oe(() => {
    if (O) return O;
    if (j)
      return (Y, J) => j(String(Y), String(J));
  }, [O, j]), fe = Be(E), ve = ce(null), ue = ce(null), [Ne, Ie] = H(null), [Ee, _e] = H(null), Z = ce(null), re = ce(!1), Pe = ce(null), [Ye, Xe] = H({}), [rt, ct] = H(0), [nt, Dt] = H({ left: !1, right: !1 }), [be, Te] = H(!1), [pe, xe] = H(null), dt = oe(
    () => ({ ...Ye, ...C }),
    [Ye, C]
  ), We = _ ?? !!y, $e = (Y, J) => {
    Xe((he) => ({ ...he, [Y]: J })), y == null || y(Y, J);
  }, Qe = () => {
    const Y = ve.current;
    if (!Y) return;
    const J = Y.scrollLeft > 1, he = Y.scrollWidth - Y.clientWidth - Y.scrollLeft > 1;
    Dt((ne) => ne.left === J && ne.right === he ? ne : { left: J, right: he });
  };
  Na(() => {
    const Y = ve.current;
    if (!Y) return;
    const J = () => {
      Y.clientWidth > 0 && ct(Y.clientWidth), Qe();
    };
    if (J(), typeof ResizeObserver > "u") return;
    const he = new ResizeObserver((ne) => {
      var Ce, Ae;
      const Se = (Ae = (Ce = ne[0]) == null ? void 0 : Ce.contentRect) == null ? void 0 : Ae.width;
      typeof Se == "number" && Se > 0 ? ct(Math.floor(Se)) : J(), Qe();
    });
    return he.observe(Y), () => he.disconnect();
  }, []);
  const lt = (Y, J) => typeof s == "function" ? s(Y) : (Y == null ? void 0 : Y[s]) ?? J, Lt = (Y) => Y.key in R ? R[Y.key] ?? void 0 : Y.fixed, vt = oe(() => {
    const Y = Ee && Ee.length > 0 ? [...r].sort((Se, Ce) => {
      const Ae = Ee.indexOf(Se.key), et = Ee.indexOf(Ce.key);
      return Ae === -1 && et === -1 ? 0 : Ae === -1 ? 1 : et === -1 ? -1 : Ae - et;
    }) : r, J = [], he = [], ne = [];
    for (const Se of Y) {
      const Ce = Lt(Se);
      Ce === "left" ? J.push(Se) : Ce === "right" ? ne.push(Se) : he.push(Se);
    }
    return [...J, ...he, ...ne];
  }, [r, R, Ee]), mt = c ?? (i == null ? void 0 : i.selectedRowKeys), It = b ?? (i == null ? void 0 : i.onChange), at = Array.isArray(mt) && typeof It == "function", it = !!S, Rt = (S == null ? void 0 : S.childrenColumnName) || "children", Q = (S == null ? void 0 : S.indentSize) ?? 18, me = (Y) => {
    const J = [], he = (ne) => {
      ne.forEach((Se, Ce) => {
        const Ae = lt(Se, Ce), et = Se == null ? void 0 : Se[Rt], yt = Array.isArray(et) && et.length > 0;
        (yt || S != null && S.expandedRowRender && (!S.rowExpandable || S.rowExpandable(Se))) && J.push(Ae), yt && he(et);
      });
    };
    return he(Y), Array.from(new Set(J));
  }, ze = oe(() => S != null && S.defaultExpandAllRows ? me(de) : [], []), [Fe, ft] = Vt({
    value: S == null ? void 0 : S.expandedRowKeys,
    defaultValue: ze,
    onChange: S == null ? void 0 : S.onExpandedRowsChange
  }), ut = ce(ze.length > 0);
  we(() => {
    if (!(S != null && S.defaultExpandAllRows) || (S == null ? void 0 : S.expandedRowKeys) !== void 0 || ut.current || de.length === 0)
      return;
    const Y = me(de);
    Y.length > 0 && (ut.current = !0, ft(Y));
  }, [S == null ? void 0 : S.defaultExpandAllRows, S == null ? void 0 : S.expandedRowKeys, de, Rt]);
  const _t = (Y, J) => {
    var ne;
    const he = Fe.includes(Y);
    ft(
      he ? Fe.filter((Se) => Se !== Y) : [...Fe, Y]
    ), J && ((ne = S == null ? void 0 : S.onExpand) == null || ne.call(S, !he, J));
  }, ht = oe(() => {
    const Y = [], J = (he, ne) => {
      he.forEach((Se, Ce) => {
        var wt;
        const Ae = lt(Se, Ce), et = Array.isArray(Se == null ? void 0 : Se[Rt]) ? Se[Rt] : [], yt = et.length > 0 || !!(z && ((wt = S == null ? void 0 : S.rowExpandable) != null && wt.call(S, Se)));
        Y.push({ record: Se, key: Ae, rowIdx: Ce, depth: ne, hasTreeChildren: yt }), et.length > 0 && Fe.includes(Ae) && J(et, ne + 1);
      });
    };
    return J(de, 0), Y;
  }, [de, Fe, s, Rt, z, S == null ? void 0 : S.rowExpandable]), Qt = oe(() => {
    const Y = (at ? 44 : 0) + (it ? 40 : 0), J = {};
    let he = 0;
    for (const et of vt) {
      const yt = Math.max(120, Array.from(et.title || "").length * 14 + 76), wt = dt[et.key] ?? Hf(et.width, yt);
      J[et.key] = wt, he += wt;
    }
    const ne = { ...J }, Se = rt, Ce = Se > Y + he ? Se - (Y + he) : 0;
    if (Ce > 0) {
      const et = (xt) => xt.key === "__abc_actions__" || xt.key === "__actions__" || xt.key === "__drag_handle__" || xt.key in dt || !!Lt(xt), yt = vt.filter((xt) => !et(xt)), wt = vt.filter(
        (xt) => xt.key !== "__abc_actions__" && xt.key !== "__actions__" && xt.key !== "__drag_handle__"
      ), zt = yt.length > 0 ? yt : wt;
      if (zt.length > 0) {
        const xt = zt.reduce(($t, Kt) => $t + J[Kt.key], 0) || zt.length;
        let tr = 0;
        zt.forEach(($t, Kt) => {
          const Br = Kt === zt.length - 1 ? Ce - tr : Math.floor(Ce * J[$t.key] / xt);
          tr += Br, ne[$t.key] = J[$t.key] + Math.max(0, Br);
        });
      }
    }
    const Ae = Y + vt.reduce((et, yt) => et + (ne[yt.key] ?? 150), 0);
    return {
      resolvedWidths: ne,
      resolvedTableWidth: Se > 0 ? Math.max(Se, Ae) : void 0
    };
  }, [vt, dt, R, rt, at, it]), Ot = oe(() => {
    const Y = {}, J = {};
    let he = "", ne = "", Se = (at ? 44 : 0) + (it ? 40 : 0);
    for (const Ae of vt)
      Lt(Ae) === "left" && (Y[Ae.key] = Se, Se += Qt.resolvedWidths[Ae.key] ?? 150, he = Ae.key);
    let Ce = 0;
    for (let Ae = vt.length - 1; Ae >= 0; Ae--) {
      const et = vt[Ae];
      Lt(et) === "right" && (J[et.key] = Ce, Ce += Qt.resolvedWidths[et.key] ?? 150, ne = et.key);
    }
    return {
      leftOffsets: Y,
      rightOffsets: J,
      lastLeftKey: he,
      firstRightKey: ne,
      hasAnyLeftFixed: !!he
    };
  }, [vt, Qt, R, at, it]);
  we(() => {
    Qe();
  }, [Qt.resolvedTableWidth, de.length]);
  const Bt = oe(
    () => ht.filter(
      (Y) => {
        var J, he;
        return !((he = (J = i == null ? void 0 : i.getCheckboxProps) == null ? void 0 : J.call(i, Y.record)) != null && he.disabled);
      }
    ),
    [ht, i]
  ), le = oe(
    () => Bt.map((Y) => Y.key),
    [Bt]
  ), Ze = at && le.length > 0 && le.every((Y) => mt.includes(Y)), st = at && !Ze && le.some((Y) => mt.includes(Y)), bt = (Y) => {
    if (!at) return;
    if (st ? !0 : Y) {
      const he = Array.from(/* @__PURE__ */ new Set([...mt, ...le]));
      It(
        he,
        ht.filter((ne) => he.includes(ne.key)).map((ne) => ne.record)
      );
    } else {
      const he = mt.filter((ne) => !le.includes(ne));
      It(he, []);
    }
  }, ot = (Y) => {
    if (!at) return;
    const he = mt.includes(Y) ? mt.filter((ne) => ne !== Y) : [...mt, Y];
    It(
      he,
      ht.filter((ne) => he.includes(ne.key)).map((ne) => ne.record)
    );
  }, Mt = (Y, J, he = "right") => {
    if (!We) return;
    Y.preventDefault(), Y.stopPropagation();
    const ne = Y.clientX, Se = Y.currentTarget.parentElement, Ce = dt[J.key] ?? (typeof J.width == "number" ? J.width : void 0) ?? Qt.resolvedWidths[J.key] ?? (Se == null ? void 0 : Se.offsetWidth) ?? 140, Ae = J.key === "__abc_actions__" ? 80 : 72, et = typeof document < "u" ? document.body.style.cursor : "", yt = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const wt = (xt) => {
      const tr = xt.clientX - ne, $t = he === "left" ? Math.max(Ae, Math.round(Ce - tr)) : Math.max(Ae, Math.round(Ce + tr));
      $e(J.key, $t);
    }, zt = () => {
      typeof document < "u" && (document.body.style.cursor = et, document.body.style.userSelect = yt), window.removeEventListener("mousemove", wt), window.removeEventListener("mouseup", zt);
    };
    window.addEventListener("mousemove", wt), window.addEventListener("mouseup", zt);
  };
  we(() => {
    if (!Ne) return;
    const Y = (J) => {
      if (J.key === "Escape") {
        const he = Z.current;
        Ie(null), _e(null), Z.current = null, Pe.current = null, re.current = !1, he && B && B(he);
      }
    };
    return document.addEventListener("keydown", Y, !0), () => document.removeEventListener("keydown", Y, !0);
  }, [Ne, B]);
  const Ut = vt.map((Y) => Y.key).join("|");
  Na(() => {
    const Y = Pe.current;
    if (!Y) return;
    Pe.current = null;
    const J = ve.current;
    if (!J || fe === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ne = fe === "subtle" ? 140 : 220, Se = "cubic-bezier(0.22, 1, 0.36, 1)";
    J.querySelectorAll("[data-col-key]").forEach((Ce) => {
      const Ae = Ce.dataset.colKey;
      if (!Ae) return;
      const et = Y.get(Ae);
      if (et === void 0) return;
      const yt = Ce.getBoundingClientRect().left, wt = et - yt;
      if (Math.abs(wt) <= 1) return;
      typeof Ce.animate == "function" && Ce.animate([{ translate: `${wt}px 0` }, { translate: "0 0" }], {
        duration: ne,
        easing: Se
      });
      const zt = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(Ae) : Ae, xt = J.querySelectorAll(`[data-col-cell="${zt}"]`), tr = Math.min(xt.length, 20);
      for (let $t = 0; $t < tr; $t++) {
        const Kt = xt[$t];
        typeof Kt.animate == "function" && Kt.animate([{ translate: `${wt}px 0` }, { translate: "0 0" }], {
          duration: ne,
          easing: Se
        });
      }
    });
  }, [Ut, fe]);
  const Ft = (Y) => !!(Y.sortable || Y.sorter), Oe = (Y) => {
    if (!Ft(Y) || !m) return;
    const J = (u == null ? void 0 : u.key) === Y.key ? u.direction : null, he = J === null ? "asc" : J === "asc" ? "desc" : null;
    m(Y.key, he);
  };
  we(() => {
    if (!pe) return;
    const Y = (he) => {
      var ne;
      he && he.type === "mousedown" && ((ne = ue.current) != null && ne.contains(he.target)) || xe(null);
    }, J = (he) => {
      he.key === "Escape" && xe(null);
    };
    return document.addEventListener("mousedown", Y), document.addEventListener("keydown", J, !0), window.addEventListener("scroll", Y, !0), () => {
      document.removeEventListener("mousedown", Y), document.removeEventListener("keydown", J, !0), window.removeEventListener("scroll", Y, !0);
    };
  }, [pe]);
  const sr = (Y, J) => {
    if (J.key === "__abc_actions__" || J.key === "__actions__" || J.key === "__drag_handle__" || !!!(Ft(J) && m || D || B || A || L || N || $)) return;
    Y.preventDefault(), Te(!1);
    const ne = typeof window < "u" ? window.innerWidth : 1024, Se = typeof window < "u" ? window.innerHeight : 768;
    xe({
      col: J,
      x: Math.max(8, Math.min(Y.clientX, ne - 208 - 8)),
      y: Math.max(8, Math.min(Y.clientY, Se - 340 - 8))
    });
  }, er = oe(
    () => vt.filter(
      (Y) => Y.key !== "__abc_actions__" && Y.key !== "__actions__" && Y.key !== "__drag_handle__"
    ),
    [vt]
  ), fr = oe(
    () => (T ?? er).filter(
      (Y) => !Y.hideInTable && Y.key !== "__abc_actions__" && Y.key !== "__actions__" && Y.key !== "__drag_handle__"
    ),
    [T, er]
  ), wr = (Y, J) => {
    if (!B) return;
    const he = er.map((Ae) => Ae.key), ne = he.indexOf(Y);
    if (ne < 0) return;
    const Se = J === "left" ? ne - 1 : ne + 1;
    if (Se < 0 || Se >= he.length) return;
    const Ce = [...he];
    [Ce[ne], Ce[Se]] = [Ce[Se], Ce[ne]], B(Ce), xe(null);
  }, ie = vt.length + (at ? 1 : 0) + (it ? 1 : 0), ye = pe ? Nn(ve.current) : null, De = !!(p && vt.some((Y) => Y.filterable));
  return {
    wrapperRef: ve,
    contextMenuRef: ue,
    prevColRectsRef: Pe,
    hasLiveSwappedRef: re,
    preDragOrderRef: Z,
    resolvedMotion: fe,
    liveDragOrder: Ee,
    setLiveDragOrder: _e,
    draggingKey: Ne,
    setDraggingKey: Ie,
    contextMenu: pe,
    setContextMenu: xe,
    visibilitySubmenuOpen: be,
    setVisibilitySubmenuOpen: Te,
    scrollEdge: nt,
    isResizable: We,
    resolveKey: lt,
    getEffectiveFixed: Lt,
    orderedColumns: vt,
    effectiveSelectedKeys: mt,
    selectable: at,
    hasExpandColumn: it,
    indentPx: Q,
    flattenedRows: ht,
    colWidthMeta: Qt,
    stickyMeta: Ot,
    allSelected: Ze,
    someSelected: st,
    toggleAll: bt,
    toggleOne: ot,
    startResizeColumn: Mt,
    isColSortable: Ft,
    handleSortClick: Oe,
    handleHeaderContextMenu: sr,
    movableColumns: er,
    submenuConfigurableCols: fr,
    handleMoveColumnStep: wr,
    totalColSpan: ie,
    portalTarget: ye,
    hasInlineHeaderFilterRow: De,
    expandedKeys: Fe,
    toggleExpandRow: _t,
    columns: r,
    allColumns: T,
    loading: o,
    emptyText: P,
    onEmptyReset: W,
    rowKey: s,
    rowSelection: i,
    activeRowKey: K,
    treeData: z,
    expandable: S,
    onRow: G,
    onRowClick: q,
    onRowView: U,
    isRowDraggable: ke,
    emitRowDragEnd: te,
    updateScrollEdge: Qe,
    maxHeight: X,
    ariaLabel: se,
    onColumnReorder: B,
    onSortChange: m,
    sortState: u,
    headerFilterMode: p,
    headerFilterRender: v,
    headerFilters: f,
    onHeaderFilterChange: h,
    activeFilterKeys: w,
    activeFilterLabels: k,
    filterHighlightColor: g,
    onFilterHighlightColorChange: N,
    onColumnPin: D,
    onColumnHide: A,
    onToggleColumnVisible: L,
    hiddenColumnKeys: M,
    onResetColumns: $,
    density: d,
    scrollY,
    className: V
  };
}
function Gl(t) {
  const r = qf(t), {
    wrapperRef: a,
    className: n,
    colWidthMeta: s,
    resolvedMotion: o,
    loading: d,
    flattenedRows: c,
    ariaLabel: b,
    updateScrollEdge: i,
    maxHeight: u,
    selectable: m,
    hasExpandColumn: p,
    orderedColumns: f
  } = r;
  return /* @__PURE__ */ l("div", { className: "relative", children: [
    d && c.length > 0 && /* @__PURE__ */ e(
      "div",
      {
        "aria-live": "polite",
        "aria-busy": "true",
        className: "pointer-events-auto absolute inset-0 z-30 flex items-center justify-center rounded-[var(--abc-radius-lg)] bg-[var(--abc-bg-surface)]/60 backdrop-blur-[1px] transition-opacity",
        children: /* @__PURE__ */ e(Jt, { className: "h-6 w-6 animate-spin text-[var(--abc-primary)]" })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        ref: a,
        tabIndex: 0,
        role: "region",
        "aria-label": b,
        "data-motion": o,
        onScroll: i,
        style: u !== void 0 ? { maxHeight: typeof u == "number" ? `${u}px` : u } : void 0,
        className: x(
          "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          n
        ),
        children: /* @__PURE__ */ l(
          "table",
          {
            style: {
              width: s.resolvedTableWidth ? `${s.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ l("colgroup", { children: [
                m && /* @__PURE__ */ e("col", { style: { width: "44px" } }),
                p && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                f.map((h) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": h.key,
                    style: { width: `${s.resolvedWidths[h.key]}px` }
                  },
                  h.key
                ))
              ] }),
              /* @__PURE__ */ e(Yf, { state: r }),
              /* @__PURE__ */ e(Uf, { state: r })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ e(Gf, { state: r })
  ] });
}
const Yl = Me.forwardRef(
  ({ className: t, scrollLabel: r, wrapperClassName: a, ...n }, s) => /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "table-wrapper",
      role: r ? "region" : void 0,
      "aria-label": r,
      tabIndex: r ? 0 : void 0,
      className: x(
        "relative w-full max-w-full overflow-auto [container-type:inline-size] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        a
      ),
      children: /* @__PURE__ */ e(
        "table",
        {
          ref: s,
          className: x("w-full caption-bottom text-sm border-collapse text-[var(--abc-fg)]", t),
          ...n
        }
      )
    }
  )
);
Yl.displayName = "Table";
const ql = Me.forwardRef(
  ({ className: t, sticky: r = !1, ...a }, n) => /* @__PURE__ */ e(
    "thead",
    {
      ref: n,
      className: x(
        "bg-[var(--abc-bg-muted)] [&_tr]:border-b [&_tr]:border-[var(--abc-border)]",
        r && "sticky top-0 z-10 bg-[var(--abc-bg-surface)] backdrop-blur-xs shadow-[0_1px_0_0_var(--abc-border)]",
        t
      ),
      ...a
    }
  )
);
ql.displayName = "TableHeader";
const Xl = Me.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: x("[&_tr:last-child]:border-0", t), ...r }));
Xl.displayName = "TableBody";
const Xf = Me.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: x("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
Xf.displayName = "TableFooter";
const wa = Me.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tr",
  {
    ref: a,
    className: x(
      "border-b border-[var(--abc-border)] transition-colors hover:bg-[var(--abc-bg-subtle)] data-[state=selected]:bg-[var(--abc-primary-soft)]",
      t
    ),
    ...r
  }
));
wa.displayName = "TableRow";
const Zl = Me.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
  "th",
  {
    ref: n,
    scope: r,
    className: x(
      "h-10 px-3 text-left align-middle text-[11px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]",
      t
    ),
    ...a
  }
));
Zl.displayName = "TableHead";
const en = Me.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: x("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
en.displayName = "TableCell";
const Zf = Me.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: x("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
Zf.displayName = "TableCaption";
const Hn = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
}, _o = {
  compact: "px-3 py-2 text-xs",
  xs: "px-3 py-2 text-xs",
  sm: "px-3.5 py-2.5 text-sm",
  comfortable: "px-3.5 py-2.5 text-sm",
  md: "px-4 py-3 text-sm",
  relaxed: "px-4 py-3.5 text-sm",
  lg: "px-4 py-3.5 text-sm"
};
function Jf(t) {
  if (typeof t == "number") return { width: `${t}px` };
  if (typeof t == "string" && !t.includes("w-")) return { width: t };
}
function Mo(t) {
  if (typeof t == "string" && t.includes("w-")) return t;
}
function Qf({
  columns: t,
  data: r,
  rows: a,
  keyExtractor: n,
  rowKey: s,
  emptyNode: o,
  emptyTitle: d = "暂无数据",
  emptyDescription: c,
  emptyAction: b,
  loading: i = !1,
  skeletonRows: u = 5,
  loadingStatusText: m = "正在加载表格数据...",
  keepHeaderWhenEmpty: p = !1,
  framed: f = !0,
  onRowClick: h,
  selectedRowKey: v,
  scrollLabel: w = "数据表格内容",
  stickyHeader: k = !1,
  density: g = "comfortable",
  pagination: N,
  caption: T,
  className: M
}) {
  const L = r ?? a ?? [], C = n ?? s ?? ((R, D) => D), y = _o[g] ?? _o.comfortable, _ = f ? "overflow-hidden rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs" : "overflow-hidden", E = () => o ?? /* @__PURE__ */ e(
    wl,
    {
      title: typeof d == "string" ? d : "暂无数据",
      description: typeof c == "string" ? c : void 0,
      action: b,
      compact: !0
    }
  );
  return !i && L.length === 0 && !p ? /* @__PURE__ */ l("div", { className: x(_, "p-4", M), children: [
    E(),
    N ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(fo, { ...N }) }) : null
  ] }) : /* @__PURE__ */ l("div", { className: x(_, M), "aria-busy": i || void 0, children: [
    i ? /* @__PURE__ */ e("span", { className: "sr-only", role: "status", "aria-live": "polite", children: m }) : null,
    /* @__PURE__ */ e(
      "div",
      {
        role: "region",
        "aria-label": w,
        tabIndex: 0,
        className: "w-full overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
        children: /* @__PURE__ */ l(Yl, { children: [
          T ? /* @__PURE__ */ e("caption", { className: "sr-only", children: T }) : null,
          /* @__PURE__ */ e(
            ql,
            {
              className: x(
                k && "sticky top-0 z-10 bg-[var(--abc-bg-subtle)]/95 backdrop-blur-sm"
              ),
              children: /* @__PURE__ */ e(wa, { className: "hover:bg-transparent", children: t.map((R) => /* @__PURE__ */ e(
                Zl,
                {
                  style: {
                    ...Jf(R.width),
                    ...typeof R.minWidth == "number" ? { minWidth: `${R.minWidth}px` } : typeof R.minWidth == "string" && !R.minWidth.includes("w-") ? { minWidth: R.minWidth } : void 0
                  },
                  className: x(
                    y,
                    Hn[R.align ?? "left"],
                    Mo(R.width),
                    Mo(R.minWidth),
                    R.headerClassName
                  ),
                  children: R.header ?? R.title
                },
                R.key
              )) })
            }
          ),
          /* @__PURE__ */ e(Xl, { children: i ? Array.from({ length: Math.max(1, u) }).map((R, D) => /* @__PURE__ */ e(wa, { className: "hover:bg-transparent", children: t.map((A, $) => /* @__PURE__ */ e(
            en,
            {
              className: x(y, Hn[A.align ?? "left"]),
              children: /* @__PURE__ */ e(
                jt,
                {
                  "aria-hidden": "true",
                  className: x(
                    "h-4",
                    $ === 0 ? "w-3/4" : $ === t.length - 1 ? "ml-auto w-14" : "w-2/3"
                  )
                }
              )
            },
            `${A.key}-skeleton-${$}`
          )) }, `skeleton-${D}`)) : L.length === 0 ? /* @__PURE__ */ e(wa, { className: "hover:bg-transparent", children: /* @__PURE__ */ e(en, { colSpan: Math.max(1, t.length), className: "p-6 text-center", children: E() }) }) : L.map((R, D) => {
            const A = C(R, D), $ = v != null && A === v, B = !!h;
            return /* @__PURE__ */ e(
              wa,
              {
                "data-state": $ ? "selected" : void 0,
                "aria-selected": B ? $ : void 0,
                tabIndex: B ? 0 : void 0,
                onClick: B ? () => h == null ? void 0 : h(R) : void 0,
                onKeyDown: B ? (S) => {
                  (S.key === "Enter" || S.key === " ") && (S.preventDefault(), h == null || h(R));
                } : void 0,
                className: x(
                  B && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                  $ && "bg-[var(--abc-primary-soft)]/50"
                ),
                children: t.map((S) => {
                  const z = S.render ? S.render(R, D) : S.cell ? S.cell(R, D) : R[S.key];
                  return /* @__PURE__ */ e(
                    en,
                    {
                      className: x(
                        y,
                        Hn[S.align ?? "left"],
                        S.mono && "font-mono text-xs",
                        S.className,
                        S.cellClassName
                      ),
                      children: z
                    },
                    S.key
                  );
                })
              },
              A
            );
          }) })
        ] })
      }
    ),
    N ? /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-4 py-2.5", children: /* @__PURE__ */ e(fo, { ...N }) }) : null
  ] });
}
Qf.displayName = "DataTable";
const ep = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, tp = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, rp = {
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
}, Sr = "transition-[background-color,color,box-shadow,transform] duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-active)] motion-safe:enabled:active:scale-[var(--abc-press-scale)]";
function Cr(t, r) {
  var a;
  return t.path && (r === t.path || r.startsWith(`${t.path}/`)) ? !0 : !!((a = t.children) != null && a.some((n) => Cr(n, r)));
}
function Jl(t, r, a = []) {
  var n;
  for (const s of t) {
    const o = [...a, s];
    if (s.path === r) return o;
    if ((n = s.children) != null && n.length) {
      const d = Jl(s.children, r, o);
      if (d.length > 0) return d;
    }
  }
  return [];
}
function vr(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(gr, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const Bs = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: o = 0 }) => {
  const d = Hr[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "space-y-0.5",
        o > 0 && x("border-l border-[var(--abc-border)]", d.flyoutSubIndent)
      ),
      children: t.map((c) => {
        const b = !!(c.children && c.children.length > 0), i = c.path === r, u = b && Cr(c, r);
        return b ? /* @__PURE__ */ l("div", { className: "py-0.5", children: [
          /* @__PURE__ */ l(
            "div",
            {
              className: x(
                "flex items-center gap-1.5 font-semibold select-none",
                d.flyoutHeadingText,
                u ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
              ),
              children: [
                vr(c.icon, a, d.flyoutHeadingIcon),
                /* @__PURE__ */ e("span", { className: "truncate", children: c.label })
              ]
            }
          ),
          /* @__PURE__ */ e(
            Bs,
            {
              items: c.children,
              pathname: r,
              registry: a,
              size: n,
              onSelect: s,
              depth: o + 1
            }
          )
        ] }, c.key) : /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            role: "menuitem",
            disabled: c.disabled,
            onClick: () => {
              !c.disabled && c.path && s(c.path, c);
            },
            className: x(
              "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
              Sr,
              d.flyoutItem,
              i ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
              c.disabled && "opacity-45 cursor-not-allowed"
            ),
            children: [
              vr(c.icon, a, d.flyoutIcon),
              /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: c.label }),
              c.badge !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: x(
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
}, Zr = ({ brand: t, collapsed: r = !1, tone: a = "light", size: n, className: s }) => {
  const o = je(n, "sm"), d = Hr[o], c = a === "dark", b = oe(() => t.logo ? typeof t.logo == "string" ? $l(t.logo) ? /* @__PURE__ */ e(
    "div",
    {
      className: x(
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
      className: x("shrink-0 rounded-[var(--abc-radius-md)] object-contain", d.brandLogoBox)
    }
  ) : /* @__PURE__ */ e("div", { className: "shrink-0", children: t.logo }) : /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary)] font-bold text-[var(--abc-primary-fg)] shadow-xs transition-transform duration-[var(--abc-motion-fast)] group-hover:scale-[1.03]",
        d.brandLogoBox
      ),
      children: t.name.slice(0, 1).toUpperCase()
    }
  ), [t.logo, t.name, d.brandLogoBox]);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-size": o,
      className: x(
        "group flex items-center select-none",
        d.brandGap,
        r ? x("justify-center", d.brandWrapCollapsed) : d.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ l(
          "div",
          {
            onClick: t.onClick,
            className: x(
              "flex min-w-0 flex-1 items-center",
              d.brandGap,
              t.onClick && "cursor-pointer"
            ),
            children: [
              b,
              !r && /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: x(
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
                    className: x(
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
        !r && t.onEditBrand && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "编辑品牌信息",
            title: "修改品牌 Logo 与名称",
            onClick: (i) => {
              var u;
              i.stopPropagation(), (u = t.onEditBrand) == null || u.call(t);
            },
            className: x(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              c ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(mu, { className: d.brandEditIcon })
          }
        )
      ]
    }
  );
}, ap = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = Hr[s], [b, i] = H(!1), { isMounted: u, isVisible: m } = _r(b, o === "none" ? 0 : 140), p = ce(null), f = ce(null), h = ce(null), v = Tt(), w = Cr(t, r), { style: k, actualSide: g, portalContainer: N } = $r({
    open: u,
    triggerRef: p,
    floatingRef: f,
    placement: "rightStart",
    offset: 8
  }), T = ge(() => {
    h.current !== null && typeof window < "u" && (window.clearTimeout(h.current), h.current = null);
  }, []);
  we(() => () => T(), [T]);
  const M = () => {
    T(), i(!0);
  }, L = () => {
    T(), typeof window < "u" && (h.current = window.setTimeout(() => {
      i(!1), h.current = null;
    }, 140));
  };
  return we(() => {
    if (!b) return;
    const C = (_) => {
      var R, D;
      const E = _.target;
      (R = p.current) != null && R.contains(E) || (D = f.current) != null && D.contains(E) || i(!1);
    }, y = (_) => {
      var E;
      _.key === "Escape" && (_.preventDefault(), _.stopPropagation(), i(!1), (E = p.current) == null || E.focus());
    };
    return document.addEventListener("mousedown", C), document.addEventListener("keydown", y, !0), () => {
      document.removeEventListener("mousedown", C), document.removeEventListener("keydown", y, !0);
    };
  }, [b]), /* @__PURE__ */ l(Ue, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: M, onMouseLeave: L, children: /* @__PURE__ */ e(
      "button",
      {
        ref: p,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": b,
        "aria-haspopup": "menu",
        "aria-controls": b ? v : void 0,
        onClick: () => i((C) => !C),
        onKeyDown: (C) => {
          (C.key === "ArrowRight" || C.key === "ArrowDown") && (C.preventDefault(), i(!0), window.requestAnimationFrame(() => {
            var y, _;
            (_ = (y = f.current) == null ? void 0 : y.querySelector('[role="menuitem"]:not(:disabled)')) == null || _.focus();
          }));
        },
        className: x(
          "flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer",
          Sr,
          c.collapsedBtn,
          w ? a ? "bg-white/12 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : a ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: vr(t.icon ?? "folder", n, c.collapsedIcon)
      }
    ) }),
    u && N && cr(
      /* @__PURE__ */ l(
        "div",
        {
          ref: f,
          id: v,
          role: "menu",
          "aria-label": t.label,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": g,
          style: k,
          onMouseEnter: M,
          onMouseLeave: L,
          onKeyDown: (C) => {
            var E, R, D;
            const y = Array.from(
              ((E = f.current) == null ? void 0 : E.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const _ = y.indexOf(document.activeElement);
            C.key === "ArrowDown" ? (C.preventDefault(), (R = y[(_ + 1) % y.length]) == null || R.focus()) : C.key === "ArrowUp" && (C.preventDefault(), (D = y[(_ - 1 + y.length) % y.length]) == null || D.focus());
          },
          className: x(
            "z-[1250] max-w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
            // 在触发器与 Portal 浮层 8px 间隙之间铺设透明悬停桥接，防止移入子菜单瞬间断触
            g === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3",
            c.flyoutPanel,
            o !== "none" && (m ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: x(
                  "mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]",
                  c.flyoutHeader
                ),
                children: t.label
              }
            ),
            /* @__PURE__ */ e(
              Bs,
              {
                items: t.children ?? [],
                pathname: r,
                registry: n,
                size: s,
                onSelect: (C, y) => {
                  d(C, y), i(!1);
                }
              }
            )
          ]
        }
      ),
      N
    )
  ] });
}, Wn = ({
  brand: t,
  items: r,
  pathname: a,
  collapsed: n = !1,
  accordion: s = !0,
  tone: o = "dark",
  size: d,
  motion: c,
  onNavigate: b,
  className: i
}) => {
  const { iconRegistry: u } = At(), m = je(d, "sm"), p = Be(c), f = Hr[m], h = o === "dark", [v, w] = H(
    () => r.filter((g) => {
      var N;
      return ((N = g.children) == null ? void 0 : N.length) && Cr(g, a);
    }).map((g) => g.key)
  );
  we(() => {
    const g = r.filter((N) => {
      var T;
      return ((T = N.children) == null ? void 0 : T.length) && Cr(N, a);
    }).map((N) => N.key);
    g.length > 0 && w(
      (N) => s ? [g[0]] : Array.from(/* @__PURE__ */ new Set([...N, ...g]))
    );
  }, [a, r, s]);
  const k = (g) => {
    w((N) => N.includes(g) ? N.filter((T) => T !== g) : s ? [g] : [...N, g]);
  };
  return /* @__PURE__ */ l(
    "aside",
    {
      "aria-label": "侧边主导航",
      "data-size": m,
      "data-motion": p,
      style: {
        width: n ? "var(--abc-sidebar-collapsed-w)" : "var(--abc-sidebar-w)"
      },
      className: x(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        h ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        i
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: x(
              "flex h-[var(--abc-header-h)] z-10 shrink-0 items-center border-b",
              h ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              Zr,
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
        /* @__PURE__ */ e("nav", { className: x("flex-1 overflow-y-auto", f.navPadding), children: r.map((g) => {
          const N = !!(g.children && g.children.length > 0), T = g.path === a, M = Cr(g, a), L = v.includes(g.key);
          if (!N) {
            const C = /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                disabled: g.disabled,
                "aria-label": n ? g.label : void 0,
                onClick: () => g.path && b(g.path, g),
                className: x(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Sr,
                  f.itemButton,
                  n && x("justify-center px-0", f.collapsedBtn),
                  T ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : h ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  g.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  vr(g.icon, u, n ? f.collapsedIcon : f.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: g.label }),
                  !n && g.badge !== void 0 && /* @__PURE__ */ e("span", { className: x("rounded-full bg-white/15 font-mono", f.badge), children: g.badge })
                ]
              },
              g.key
            );
            return n ? /* @__PURE__ */ e(
              Yt,
              {
                content: g.label,
                placement: "right",
                motion: p,
                className: "flex w-full",
                children: C
              },
              g.key
            ) : C;
          }
          return n ? /* @__PURE__ */ e(
            ap,
            {
              item: g,
              pathname: a,
              isDark: h,
              registry: u,
              size: m,
              motion: p,
              onNavigate: b
            },
            g.key
          ) : /* @__PURE__ */ l("div", { className: "relative", children: [
            /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                "aria-expanded": L,
                onClick: () => k(g.key),
                className: x(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Sr,
                  f.itemButton,
                  M ? h ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : h ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  vr(g.icon, u, f.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: g.label }),
                  /* @__PURE__ */ e(
                    Xt,
                    {
                      className: x(
                        "shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]",
                        f.chevron,
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
                className: x(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  L ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: x(
                      "border-l",
                      f.subWrap,
                      h ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: g.children.map((C) => {
                      const y = C.path === a;
                      return /* @__PURE__ */ l(
                        "button",
                        {
                          type: "button",
                          disabled: C.disabled,
                          onClick: () => C.path && b(C.path, C),
                          className: x(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            Sr,
                            f.subButton,
                            y ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : h ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            C.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            vr(C.icon, u, f.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: C.label }),
                            C.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: x(
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
          ] }, g.key);
        }) })
      ]
    }
  );
}, np = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = Hr[s], [b, i] = H(!1), { isMounted: u, isVisible: m } = _r(b, o === "none" ? 0 : 140), p = ce(null), f = ce(null), h = ce(null), v = Tt(), { style: w, actualSide: k, portalContainer: g } = $r({
    open: u,
    triggerRef: p,
    floatingRef: f,
    placement: "bottomLeft",
    offset: 6
  }), N = ge(() => {
    h.current !== null && typeof window < "u" && (window.clearTimeout(h.current), h.current = null);
  }, []);
  we(() => () => N(), [N]);
  const T = () => {
    N(), i(!0);
  }, M = () => {
    N(), typeof window < "u" && (h.current = window.setTimeout(() => {
      i(!1), h.current = null;
    }, 150));
  };
  we(() => {
    if (!b) return;
    const C = (_) => {
      var R, D;
      const E = _.target;
      (R = p.current) != null && R.contains(E) || (D = f.current) != null && D.contains(E) || i(!1);
    }, y = (_) => {
      var E;
      _.key === "Escape" && (_.preventDefault(), _.stopPropagation(), i(!1), (E = p.current) == null || E.focus());
    };
    return document.addEventListener("mousedown", C), document.addEventListener("keydown", y, !0), () => {
      document.removeEventListener("mousedown", C), document.removeEventListener("keydown", y, !0);
    };
  }, [b]);
  const L = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var C, y;
      (y = (C = f.current) == null ? void 0 : C.querySelector('[role="menuitem"]:not(:disabled)')) == null || y.focus();
    });
  };
  return /* @__PURE__ */ l(Ue, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: T,
        onMouseLeave: M,
        className: "relative flex-none",
        children: /* @__PURE__ */ l(
          "button",
          {
            ref: p,
            type: "button",
            "aria-expanded": b,
            "aria-haspopup": "menu",
            "aria-controls": b ? v : void 0,
            onClick: () => i((C) => !C),
            onKeyDown: (C) => {
              C.key === "ArrowDown" && (C.preventDefault(), i(!0), L());
            },
            className: x(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Sr,
              c.topItem,
              a ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : b ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              vr(t.icon, n, c.topIcon),
              /* @__PURE__ */ e("span", { children: t.label }),
              /* @__PURE__ */ e(
                Xt,
                {
                  className: x(
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
    u && g && cr(
      /* @__PURE__ */ e(
        "div",
        {
          ref: f,
          id: v,
          role: "menu",
          "aria-label": `${t.label} 子菜单`,
          "data-abc-floating": "",
          "data-size": s,
          "data-motion": o,
          "data-placement": k,
          style: w,
          onMouseEnter: T,
          onMouseLeave: M,
          onKeyDown: (C) => {
            var E, R, D, A, $;
            const y = Array.from(
              ((E = f.current) == null ? void 0 : E.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const _ = y.indexOf(document.activeElement);
            C.key === "ArrowDown" ? (C.preventDefault(), (R = y[(_ + 1) % y.length]) == null || R.focus()) : C.key === "ArrowUp" ? (C.preventDefault(), (D = y[(_ - 1 + y.length) % y.length]) == null || D.focus()) : C.key === "Home" ? (C.preventDefault(), (A = y[0]) == null || A.focus()) : C.key === "End" && (C.preventDefault(), ($ = y[y.length - 1]) == null || $.focus());
          },
          className: x(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            k === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            c.flyoutPanel,
            o !== "none" && (m ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            Bs,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (C, y) => {
                d(C, y), i(!1);
              }
            }
          )
        }
      ),
      g
    )
  ] });
}, Ao = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: d,
  onNavigate: c
}) => {
  const { iconRegistry: b } = At(), i = je(s, "sm"), u = Be(o), m = Hr[i];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": i,
      "data-motion": u,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((p) => {
        var h;
        const f = a ? n === p.key : Cr(p, r);
        return a || !((h = p.children) != null && h.length) ? /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => {
              a && d ? d(p) : p.path && c(p.path, p);
            },
            className: x(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Sr,
              m.topItem,
              f ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              vr(p.icon, b, m.topIcon),
              /* @__PURE__ */ e("span", { children: p.label })
            ]
          },
          p.key
        ) : /* @__PURE__ */ e(
          np,
          {
            item: p,
            pathname: r,
            isActive: f,
            registry: b,
            size: i,
            motion: u,
            onNavigate: c
          },
          p.key
        );
      })
    }
  );
}, sp = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: d, onNavigate: c }) => {
  const { iconRegistry: b } = At(), i = je(s, "sm"), u = Be(o), m = Hr[i], p = n === "dark", f = oe(
    () => r.find((g) => Cr(g, a)) ?? r[0],
    [r, a]
  ), [h, v] = H((f == null ? void 0 : f.key) ?? "");
  we(() => {
    f != null && f.key && v(f.key);
  }, [f == null ? void 0 : f.key]);
  const w = r.find((g) => g.key === h) ?? f, k = (w == null ? void 0 : w.children) ?? [];
  return /* @__PURE__ */ l(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": i,
      "data-motion": u,
      className: x("flex h-full shrink-0 select-none", d),
      children: [
        /* @__PURE__ */ l(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: x(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              p ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Zr, { brand: t, collapsed: !0, tone: n, size: i }) }),
              /* @__PURE__ */ e("div", { className: x("flex w-full flex-1 flex-col items-center overflow-y-auto", m.dualRailWrap), children: r.map((g) => {
                const N = g.key === (w == null ? void 0 : w.key);
                return /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var T, M, L;
                      v(g.key), !((T = g.children) != null && T.length) && g.path ? c(g.path, g) : (L = (M = g.children) == null ? void 0 : M[0]) != null && L.path && c(g.children[0].path, g.children[0]);
                    },
                    className: x(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      Sr,
                      m.dualRailItem,
                      N ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : p ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      vr(g.icon ?? "folder", b, m.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: x("truncate", m.dualRailLabelMaxW), children: g.label.slice(0, 4) })
                    ]
                  },
                  g.key
                );
              }) })
            ]
          }
        ),
        k.length > 0 && /* @__PURE__ */ l(
          "div",
          {
            style: { width: "var(--abc-dual-panel-w)" },
            className: "flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
            children: [
              /* @__PURE__ */ l(
                "div",
                {
                  className: x(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    m.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: x("truncate font-bold text-[var(--abc-fg)]", m.dualPanelTitle), children: w == null ? void 0 : w.label }),
                    /* @__PURE__ */ e(Zt, { className: x("text-[var(--abc-fg-muted)]", m.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: x("flex-1 overflow-y-auto", m.dualPanelWrap), children: k.map((g) => {
                const N = g.path === a;
                return /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    disabled: g.disabled,
                    onClick: () => !g.disabled && g.path && c(g.path, g),
                    className: x(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      Sr,
                      m.dualPanelItem,
                      N ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      g.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      vr(g.icon, b, m.dualPanelIcon),
                      /* @__PURE__ */ e("span", { className: "truncate", children: g.label })
                    ]
                  },
                  g.key
                );
              }) })
            ]
          }
        )
      ]
    }
  );
}, op = {
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
}, lp = ({
  tabs: t,
  activePath: r,
  variant: a = "card",
  size: n,
  motion: s,
  onSelect: o,
  onClose: d,
  onCloseOthers: c,
  onCloseRight: b,
  onCloseAll: i,
  onTogglePin: u,
  onRefresh: m,
  className: p
}) => {
  var k;
  const { iconRegistry: f } = At(), h = je(n, "sm"), v = Be(s), w = op[h];
  return t.length === 0 ? null : /* @__PURE__ */ l(
    "div",
    {
      "data-size": h,
      "data-motion": v,
      className: x(
        "flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none",
        w.barPadding,
        p
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]", children: t.map((g) => {
          const N = g.path === r, T = g.closable !== !1 && !g.pinned, M = a === "pill" ? N ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? N ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : N ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ l(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(g.path),
              onKeyDown: (L) => {
                (L.key === "Enter" || L.key === " ") && (L.preventDefault(), o(g.path));
              },
              className: x(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                w.tabItem,
                M
              ),
              children: [
                g.pinned && /* @__PURE__ */ e(Jr, { className: x("shrink-0 opacity-75", w.pinIcon) }),
                g.icon && (typeof g.icon == "string" ? /* @__PURE__ */ e(gr, { name: g.icon, size: w.tabIcon, registry: f }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: g.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: g.title }),
                T && d && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${g.title}`,
                    onClick: (L) => {
                      L.stopPropagation(), d(g.path);
                    },
                    className: x(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && N ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(Ct, { className: w.closeIcon })
                  }
                )
              ]
            },
            g.path
          );
        }) }),
        /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1", children: [
          m && /* @__PURE__ */ e(Yt, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => m(r),
              className: x(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                w.actionBtn
              ),
              children: /* @__PURE__ */ e(vn, { className: w.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            Ra,
            {
              items: [
                ...u ? [
                  {
                    key: "pin",
                    label: (k = t.find((g) => g.path === r)) != null && k.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(Jr, { className: "h-3.5 w-3.5" }),
                    onClick: () => u(r)
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
                ...i ? [
                  {
                    key: "all",
                    label: "关闭全部可关页签",
                    danger: !0,
                    dividerAbove: !0,
                    onClick: () => i()
                  }
                ] : []
              ],
              children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "页签批量操作",
                  className: x(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    w.actionBtn
                  ),
                  children: /* @__PURE__ */ e(us, { className: w.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, ip = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o,
  refreshKeys: d,
  activeClassName: c,
  isolateError: b = !1,
  onTabReload: i,
  onTabClose: u,
  onNavigateHome: m,
  children: p
}) => {
  const f = ce(/* @__PURE__ */ new Map()), h = ce(0), v = ce(/* @__PURE__ */ new Map()), w = (d == null ? void 0 : d[t]) ?? o ?? 0;
  we(() => {
    const N = s == null ? void 0 : s.current;
    if (!N) return;
    const T = () => {
      t && v.current.set(t, N.scrollTop);
    };
    return N.addEventListener("scroll", T, { passive: !0 }), () => N.removeEventListener("scroll", T);
  }, [t, s]), Na(() => {
    const N = s == null ? void 0 : s.current;
    N && (r ? N.scrollTop = v.current.get(t) ?? 0 : N.scrollTop = 0);
  }, [t, r, w, s]), we(() => {
    if (typeof window > "u") return;
    const N = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(N);
  }, [t]);
  const k = (N, T) => b ? /* @__PURE__ */ e(
    tf,
    {
      path: N,
      onReload: i ? () => i(N) : void 0,
      onClose: u ? () => u(N) : void 0,
      onNavigateHome: m,
      children: T
    }
  ) : T;
  if (!r)
    return f.current.clear(), /* @__PURE__ */ e(
      "div",
      {
        className: x("min-h-full w-full min-w-0", c),
        children: k(t, p)
      },
      `${t}_${w}`
    );
  if (n && n.length > 0) {
    const N = /* @__PURE__ */ new Set([...n, t]);
    for (const T of Array.from(f.current.keys()))
      N.has(T) || (f.current.delete(T), v.current.delete(T));
  }
  h.current += 1;
  const g = f.current.get(t);
  for (f.current.set(t, {
    key: t,
    seed: w,
    lastActiveTick: h.current,
    node: g && g.seed === w ? g.node : p
  }); f.current.size > a; ) {
    let N = null, T = 1 / 0;
    for (const [M, L] of f.current.entries())
      M !== t && L.lastActiveTick < T && (T = L.lastActiveTick, N = M);
    if (N)
      f.current.delete(N), v.current.delete(N);
    else
      break;
  }
  return /* @__PURE__ */ e(Ue, { children: Array.from(f.current.values()).map((N) => {
    const T = N.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: T ? "block" : "none" },
        className: x("min-h-full w-full min-w-0", T && c),
        children: k(N.key, N.node)
      },
      `${N.key}_${N.seed}`
    );
  }) });
}, Ql = "abc_cmd_recent_v1", ei = 5;
function Ro() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem(Ql);
    if (!t) return [];
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function Do(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Ql, JSON.stringify(t.slice(0, ei)));
    } catch {
    }
}
function ti(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const o = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && a.push(...ti(s.children, o));
  }
  return a;
}
function Lo(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const d = t.slice(0, o), c = t.slice(o, o + a.length), b = t.slice(o + a.length);
  return /* @__PURE__ */ l(Ue, { children: [
    d,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: c }),
    b
  ] });
}
const cp = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = At(), [d, c] = H(""), [b, i] = H("all"), [u, m] = H(0), [p, f] = H(() => Ro()), h = ce(null), v = ce(null);
  we(() => {
    t ? f(Ro()) : (c(""), i("all"), m(0));
  }, [t]);
  const w = oe(() => [
    ...ti(a).map(({ item: _, trail: E }) => ({
      id: `nav_${_.key}`,
      title: _.label,
      subtitle: `${E}${_.path ? ` · ${_.path}` : ""}`,
      group: "页面导航",
      icon: _.icon ?? "file",
      keywords: _.path,
      onTrigger: () => {
        _.path && (n == null || n(_.path, _));
      }
    })),
    ...s.map((_) => ({
      ..._,
      group: _.group || "快捷指令"
    }))
  ], [a, n, s]), k = oe(() => {
    const y = /* @__PURE__ */ new Set();
    for (const _ of w)
      _.group && y.add(_.group);
    return Array.from(y);
  }, [w]), g = oe(() => {
    const y = d.trim(), _ = (A) => b !== "all" && b !== "__recent__" && A.group !== b ? !1 : y ? Wt(A.title, y) || !!(A.subtitle && Wt(A.subtitle, y)) || !!(A.keywords && Wt(A.keywords, y)) : !0, E = [];
    if (b === "__recent__") {
      const A = p.map(($) => w.find((B) => B.id === $)).filter(($) => $ !== void 0 && _($));
      return A.length > 0 && E.push({ groupName: "最近访问", isRecent: !0, items: A }), E;
    }
    const R = /* @__PURE__ */ new Set();
    if (!y && b === "all" && p.length > 0) {
      const A = p.map(($) => w.find((B) => B.id === $)).filter(($) => $ !== void 0);
      A.length > 0 && (A.forEach(($) => R.add($.id)), E.push({ groupName: "最近访问", isRecent: !0, items: A }));
    }
    const D = /* @__PURE__ */ new Map();
    for (const A of w) {
      if (R.has(A.id) || !_(A)) continue;
      const $ = A.group || "其他", B = D.get($) ?? [];
      B.push(A), D.set($, B);
    }
    for (const [A, $] of D.entries())
      $.length > 0 && E.push({ groupName: A, items: $ });
    return E;
  }, [w, d, b, p]), N = oe(
    () => g.flatMap((y) => y.items),
    [g]
  );
  we(() => {
    m(0);
  }, [d, b]), we(() => {
    var _;
    if (!t || !v.current) return;
    const y = v.current.querySelector(`[data-cmd-idx="${u}"]`);
    (_ = y == null ? void 0 : y.scrollIntoView) == null || _.call(y, { block: "nearest" });
  }, [u, t]);
  const T = (y) => {
    if (!y) return;
    const _ = [y.id, ...p.filter((E) => E !== y.id)].slice(
      0,
      ei
    );
    f(_), Do(_), y.onTrigger(), r();
  }, M = () => {
    f([]), Do([]), b === "__recent__" && i("all");
  }, L = oe(() => {
    const y = ["all"];
    return p.length > 0 && y.push("__recent__"), [...y, ...k];
  }, [p.length, k]);
  let C = -1;
  return /* @__PURE__ */ e(
    dr,
    {
      open: t,
      onClose: r,
      width: "min(720px, 92vw)",
      draggable: !1,
      fullscreenable: !1,
      className: "rounded-[var(--abc-radius-xl)]",
      children: /* @__PURE__ */ l(
        "div",
        {
          onKeyDown: (y) => {
            if (y.key === "ArrowDown")
              y.preventDefault(), m((_) => N.length ? (_ + 1) % N.length : 0);
            else if (y.key === "ArrowUp")
              y.preventDefault(), m(
                (_) => N.length ? (_ - 1 + N.length) % N.length : 0
              );
            else if (y.key === "Tab") {
              y.preventDefault();
              const _ = L.indexOf(b), E = y.shiftKey ? -1 : 1, R = L[(_ + E + L.length) % L.length];
              R && i(R);
            } else y.key === "Enter" && N[u] && (y.preventDefault(), T(N[u]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ l("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Pt, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: h,
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
                    c(""), (y = h.current) == null || y.focus();
                  },
                  className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(Gr, { className: "shrink-0", children: "ESC" })
            ] }),
            k.length > 0 && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => i("all"),
                    className: x(
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
                p.length > 0 && /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => i("__recent__"),
                    className: x(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(tn, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                k.map((y) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => i(y),
                    className: x(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === y ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: y
                  },
                  y
                ))
              ] }),
              p.length > 0 && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: M,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(mr, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: v, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: N.length === 0 ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(_a, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ l("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                d,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: g.map((y) => /* @__PURE__ */ l("div", { className: "space-y-1", children: [
              /* @__PURE__ */ l("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1.5", children: [
                  y.isRecent && /* @__PURE__ */ e(tn, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: y.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: y.items.length })
              ] }),
              y.items.map((_) => {
                C += 1;
                const E = C, R = E === u;
                return /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": E,
                    onMouseEnter: () => m(E),
                    onClick: () => T(_),
                    className: x(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      R ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ l("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: x(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              R ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: _.icon ? typeof _.icon == "string" ? /* @__PURE__ */ e(gr, { name: _.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: _.icon }) : /* @__PURE__ */ e(Pt, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ l("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: x(
                                "truncate text-sm font-semibold",
                                R ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: Lo(_.title, d)
                            }
                          ),
                          _.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: Lo(_.subtitle, d) })
                        ] })
                      ] }),
                      /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-2", children: [
                        _.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: x(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              R ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: _.group
                          }
                        ),
                        R && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(nl, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${y.isRecent ? "recent" : "std"}_${_.id}`
                );
              })
            ] }, y.groupName)) }) }),
            /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Gr, { children: /* @__PURE__ */ e(hs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(Gr, { children: /* @__PURE__ */ e(gs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Gr, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Gr, { children: "Tab" }),
                  /* @__PURE__ */ e("span", { children: "切换分类" })
                ] })
              ] }),
              /* @__PURE__ */ l("span", { className: "font-mono", children: [
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
}, og = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: d,
  className: c,
  children: b
}) => /* @__PURE__ */ l("div", { className: x("flex min-h-full flex-col gap-4", d && "pb-16", c), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ l("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((i, u) => {
      const m = u === n.length - 1;
      return /* @__PURE__ */ l(pt.Fragment, { children: [
        u > 0 && /* @__PURE__ */ e(Zt, { className: "h-3 w-3 opacity-60" }),
        i.onClick && !m ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: i.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: i.label
          }
        ) : /* @__PURE__ */ e("span", { className: x(m && "font-medium text-[var(--abc-fg-secondary)]"), children: i.label })
      ] }, u);
    }) }),
    (t || s) && /* @__PURE__ */ l("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ l("div", { className: "min-w-0", children: [
        /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-2", children: [
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
  d && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: d })
] }), dp = ({
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
  children: c,
  className: b
}) => r === "centered" ? /* @__PURE__ */ l(
  "div",
  {
    className: x(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      b
    ),
    children: [
      /* @__PURE__ */ e(ho, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(Zr, { brand: t }) }),
      /* @__PURE__ */ l("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(po, {}),
        c
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: d })
    ]
  }
) : /* @__PURE__ */ l(
  "div",
  {
    className: x(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      b
    ),
    children: [
      /* @__PURE__ */ l("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(ho, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Zr, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ l("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((i, u) => /* @__PURE__ */ l("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(xr, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: i })
          ] }, u)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: d })
      ] }),
      /* @__PURE__ */ l("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(Zr, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ l("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(po, {}),
          c
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: d })
      ] })
    ]
  }
), up = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], bp = [
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
], mp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Bo = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var se;
  const {
    theme: o,
    pageTransition: d,
    watermarkEnabled: c,
    setThemeMode: b,
    setBrand: i,
    setCustomBrandColor: u,
    setDensity: m,
    setRadius: p,
    setFontScale: f,
    setVisualMode: h,
    setComponentSize: v,
    setMotion: w,
    updateTheme: k,
    setPageTransition: g,
    setWatermarkEnabled: N,
    resetTheme: T,
    toast: M
  } = At(), [L, C] = H(1), [y, _] = H(!0), [E, R] = H("实时 Token 响应预览"), [D, A] = H(0), [$, B] = H(!1), [S, z] = H(""), [F, I] = H(o.customBrandColor ?? "#0ea5e9"), O = o.componentSize ?? "sm", j = a.sidebarWidth ?? ep[O], U = a.headerHeight ?? tp[O], K = o.customBrandColor || ((se = zn[o.brand]) == null ? void 0 : se.swatch) || "#2563eb", q = (P, V) => {
    P.theme.mode && P.theme.mode !== o.mode && b(P.theme.mode, { clientX: V.clientX, clientY: V.clientY }), k(P.theme), n(P.layout), g(P.transition), A((de) => de + 1), M.success(`已切换至「${P.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    na,
    {
      open: t,
      onClose: r,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ l("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Le,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                T(), s == null || s(), M.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            Le,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(hn, { className: "h-3.5 w-3.5" }),
              onClick: () => B((P) => !P),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Le,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(fu, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const P = JSON.stringify(o, null, 2), V = JSON.stringify(a, null, 2), de = `<AbcProvider
  defaultTheme={${P}}
  defaultPageTransition="${d}"
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
                  await navigator.clipboard.writeText(de), M.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  M.error("复制代码失败");
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
              icon: /* @__PURE__ */ e(Or, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const P = {
                  theme: o,
                  layout: a,
                  pageTransition: d,
                  watermarkEnabled: c
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(P, null, 2)), M.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  M.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ l("div", { className: "space-y-6", children: [
        $ && /* @__PURE__ */ l("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => B(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            Ma,
            {
              rows: 4,
              value: S,
              onChange: (P) => z(P.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(Le, { size: "xs", variant: "primary", onClick: () => {
            try {
              const P = JSON.parse(S);
              P.theme && typeof P.theme == "object" && k(P.theme), P.layout && typeof P.layout == "object" && n(P.layout), typeof P.pageTransition == "string" && g(P.pageTransition), typeof P.watermarkEnabled == "boolean" && N(P.watermarkEnabled), B(!1), z(""), M.success("已成功导入并应用自定义配置");
            } catch {
              M.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ l("section", { className: "space-y-2", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ l("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(_a, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                onClick: () => A((P) => P + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Ko, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l(
            "div",
            {
              className: x(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                mp[d]
              ),
              children: [
                /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ l(Le, { variant: "primary", onClick: () => C((P) => P + 1), children: [
                      "按压回弹 #",
                      L
                    ] }),
                    /* @__PURE__ */ e(Le, { variant: "outline", onClick: () => _((P) => !P), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Lr, { status: y ? "success" : "warning", dot: !0, children: y ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      or,
                      {
                        checked: y,
                        onChange: _,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  kt,
                  {
                    allowClear: !0,
                    value: E,
                    onChange: (P) => R(P.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ l("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: K })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-11 overflow-hidden rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)]", children: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((P) => /* @__PURE__ */ e(
                    "span",
                    {
                      title: `--abc-brand-${P}`,
                      className: "h-3.5",
                      style: { backgroundColor: `var(--abc-brand-${P})` }
                    },
                    P
                  )) })
                ] })
              ]
            },
            D
          )
        ] }),
        /* @__PURE__ */ l("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: bp.map((P) => /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: (V) => q(P, V),
              className: "group flex flex-col items-start gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2.5 text-left transition-all hover:border-[var(--abc-primary)] hover:shadow-2xs motion-safe:active:scale-[0.98] cursor-pointer",
              children: [
                /* @__PURE__ */ e("div", { className: "flex w-full items-center justify-between gap-1.5", children: /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-fg)] group-hover:text-[var(--abc-primary)]", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-2.5 w-2.5 shrink-0 rounded-full",
                      style: { backgroundColor: P.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: P.name })
                ] }) }),
                /* @__PURE__ */ e("span", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.2 text-[10px] text-[var(--abc-fg-muted)]", children: P.badge })
              ]
            },
            P.id
          )) })
        ] }),
        /* @__PURE__ */ l("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "2. 导航布局模式 (5 种企业拓扑)" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: up.map((P) => {
            const V = a.mode === P.mode;
            return /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: P.mode }),
                className: x(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  V ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ l("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    P.mode === "sidebar" && /* @__PURE__ */ l(Ue, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    P.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    P.mode === "mix" && /* @__PURE__ */ l("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    P.mode === "dual-column" && /* @__PURE__ */ l(Ue, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    P.mode === "auth" && /* @__PURE__ */ l(Ue, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: P.title }),
                    V && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: P.desc })
                ]
              },
              P.mode
            );
          }) })
        ] }),
        /* @__PURE__ */ l("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "3. 明暗外观与动态品牌色引擎" }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "色彩模式" }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: o.mode,
                onChange: (P) => b(P),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Sa, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Ca, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(bs, { className: "h-3 w-3" }),
                      " 系统"
                    ] })
                  }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏视觉色调" }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: a.sidebarTone,
                onChange: (P) => n({ sidebarTone: P }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(zn).map((P) => {
            const V = zn[P], de = !o.customBrandColor && o.brand === P;
            return /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                onClick: () => i(P),
                className: x(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  de ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
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
              P
            );
          }) }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(ds, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || F,
                  onChange: (P) => {
                    const V = P.target.value;
                    I(V), u(V);
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
                  onChange: (P) => {
                    const V = P.target.value;
                    I(V), /^#[0-9a-fA-F]{6}$/.test(V) && u(V);
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
        /* @__PURE__ */ l("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "4. 密度、圆角与排版规格" }),
          /* @__PURE__ */ l("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "表单与按钮高度密度" }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: o.density,
                onChange: (P) => m(P),
                options: Object.keys(Js).map((P) => ({
                  value: P,
                  label: Js[P].label
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局控件与卡片圆角" }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: o.radius,
                onChange: (P) => p(P),
                options: Object.keys(Qs).map((P) => ({
                  value: P,
                  label: Qs[P].label.split(" ")[0]
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "全局字号缩放比例" }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: o.fontScale ?? "md",
                onChange: (P) => f(P),
                options: [
                  { value: "sm", label: "紧凑 94%" },
                  { value: "md", label: "标准 100%" },
                  { value: "lg", label: "舒适 106%" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件与导航尺寸" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: o.componentSize ?? "自动 (随组件)" })
            ] }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: o.componentSize ?? "auto",
                onChange: (P) => v(P === "auto" ? void 0 : P),
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
          /* @__PURE__ */ l("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局组件微交互动效" }),
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: fa[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: (P) => {
                  w(P), A((V) => V + 1);
                },
                options: Object.keys(fa).map((P) => ({
                  value: P,
                  label: fa[P].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ l("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              fa[o.motion ?? "smooth"].label,
              "：",
              fa[o.motion ?? "smooth"].description
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l("section", { className: "space-y-3 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "5. 壳层几何尺寸与页签风格" }),
          /* @__PURE__ */ l("div", { className: "space-y-1", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "侧边栏展开宽度" }),
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                a.sidebarWidth !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ sidebarWidth: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ l("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  j,
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
                value: j,
                onChange: (P) => n({ sidebarWidth: Number(P.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "space-y-1", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-secondary)]", children: "顶部导航栏高度" }),
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                a.headerHeight !== void 0 && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => n({ headerHeight: void 0 }),
                    className: "rounded-[var(--abc-radius-xs)] px-1.5 py-0.2 text-[10px] font-medium text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer",
                    children: "跟随尺寸"
                  }
                ),
                /* @__PURE__ */ l("span", { className: "font-mono text-[11px] font-semibold text-[var(--abc-primary)]", children: [
                  U,
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
                value: U,
                onChange: (P) => n({ headerHeight: Number(P.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "多页签视觉形态" }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: a.tabStyle ?? "card",
                onChange: (P) => n({ tabStyle: P }),
                options: [
                  { value: "card", label: "卡片式" },
                  { value: "pill", label: "胶囊式" },
                  { value: "underline", label: "下划线" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示多页签栏 (MultiTabBar)" }),
            /* @__PURE__ */ e(
              or,
              {
                checked: a.showTabs,
                onChange: (P) => n({ showTabs: P })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              or,
              {
                checked: a.keepAlive,
                onChange: (P) => n({ keepAlive: P })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              or,
              {
                checked: a.headerBlur !== !1,
                onChange: (P) => n({ headerBlur: P })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              or,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (P) => n({ showBreadcrumb: P })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              or,
              {
                checked: a.sidebarAccordion,
                onChange: (P) => n({ sidebarAccordion: P })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              or,
              {
                checked: !!a.showFooter,
                onChange: (P) => n({ showFooter: P })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              or,
              {
                checked: c,
                onChange: (P) => N(P)
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              pr,
              {
                variant: "segmented",
                value: a.contentWidth,
                onChange: (P) => n({ contentWidth: P }),
                options: [
                  { value: "fluid", label: "流式铺满" },
                  { value: "fixed", label: "定宽居中" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ e("span", { className: "shrink-0 text-xs text-[var(--abc-fg-secondary)]", children: "页面切换动效" }),
            /* @__PURE__ */ e(
              ir,
              {
                size: "xs",
                className: "w-44",
                value: d,
                onChange: (P) => {
                  g(P), A((V) => V + 1);
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
        /* @__PURE__ */ l("section", { className: "space-y-2.5 border-t border-[var(--abc-border)] pt-4", children: [
          /* @__PURE__ */ l("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e(ta, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            pr,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: (P) => h(P),
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
}, fp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, pp = {
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
}, lg = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: r,
  pathname: a,
  onNavigate: n,
  settings: s,
  defaultSettings: o,
  onSettingsChange: d,
  user: c,
  headerExtra: b,
  commandActions: i = [],
  tabs: u,
  onTabsChange: m,
  authRender: p,
  authProps: f,
  showCustomizerTrigger: h = !0,
  isolateTabError: v = !0,
  homePath: w = "/",
  size: k,
  motion: g,
  children: N
}) => {
  const {
    resolvedTheme: T,
    toggleTheme: M,
    pageTransition: L,
    watermarkEnabled: C,
    watermarkText: y
  } = At(), _ = je(k, "sm"), E = Be(g), R = pp[_], D = oe(
    () => ({ ...rp, ...o }),
    [o]
  ), [A, $] = Vt({
    value: s ? { ...D, ...s } : void 0,
    defaultValue: D,
    onChange: d
  }), B = ge(
    (Z) => {
      $((re) => ({ ...re, ...Z }));
    },
    [$]
  ), [S, z] = H(!1), [F, I] = H(!1), [O, j] = H(!1), [U, K] = H({}), q = ce(null), [G, W] = Vt({
    value: u,
    defaultValue: [],
    onChange: m
  }), X = oe(
    () => Jl(r, a),
    [r, a]
  );
  we(() => {
    const Z = X[X.length - 1];
    !Z || !Z.path || W((re) => re.some((Pe) => Pe.path === Z.path) ? re : [
      ...re,
      {
        path: Z.path,
        title: Z.label,
        icon: Z.icon,
        pinned: re.length === 0
      }
    ]);
  }, [X, W]), we(() => {
    const Z = (re) => {
      (re.metaKey || re.ctrlKey) && re.key.toLowerCase() === "k" && (re.preventDefault(), I((Pe) => !Pe));
    };
    return window.addEventListener("keydown", Z), () => window.removeEventListener("keydown", Z);
  }, []);
  const se = oe(
    () => r.find((Z) => Cr(Z, a)) ?? r[0],
    [r, a]
  ), [P, V] = H((se == null ? void 0 : se.key) ?? "");
  we(() => {
    se != null && se.key && V(se.key);
  }, [se == null ? void 0 : se.key]);
  const de = oe(() => {
    const Z = r.find((re) => re.key === P) ?? se;
    return (Z == null ? void 0 : Z.children) ?? [];
  }, [r, P, se]), ke = (Z) => {
    const re = G.findIndex((Ye) => Ye.path === Z), Pe = G.filter((Ye) => Ye.path !== Z || Ye.pinned);
    if (W(Pe), Z === a && Pe.length > 0) {
      const Ye = Pe[Math.max(0, re - 1)] ?? Pe[0];
      Ye && n(Ye.path);
    }
  }, te = oe(() => y || [(c == null ? void 0 : c.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [y, c == null ? void 0 : c.name, t.name]);
  if (A.mode === "auth")
    return /* @__PURE__ */ l(Ue, { children: [
      /* @__PURE__ */ e(
        dp,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (Z) => M({ clientX: Z.clientX, clientY: Z.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: T === "dark" ? /* @__PURE__ */ e(Sa, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Ca, { className: "h-4 w-4" })
              }
            ),
            h && /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => j(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Un, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...f,
          children: p ?? N
        }
      ),
      /* @__PURE__ */ e(
        Bo,
        {
          open: O,
          onClose: () => j(!1),
          layoutSettings: A,
          onLayoutChange: B,
          onResetAll: () => $(D)
        }
      )
    ] });
  const fe = A.mode === "sidebar", ve = A.mode === "top", ue = A.mode === "mix", Ne = A.mode === "dual-column", Ie = /* @__PURE__ */ l(
    "header",
    {
      className: x(
        "flex h-[var(--abc-header-h)] z-10 shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        R.headerPad,
        A.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => z(!0),
              className: x(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                R.iconBtn
              ),
              children: /* @__PURE__ */ e(Ho, { className: R.iconCls })
            }
          ),
          (ve || ue) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Zr, { brand: t, size: _, className: "px-0 pr-3" }) }),
          (fe || ue && de.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": A.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => B({ sidebarCollapsed: !A.sidebarCollapsed }),
              className: x(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                R.iconBtn
              ),
              children: A.sidebarCollapsed ? /* @__PURE__ */ e(pu, { className: R.iconCls }) : /* @__PURE__ */ e(hu, { className: R.iconCls })
            }
          ),
          ve && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Ao,
            {
              items: r,
              pathname: a,
              size: _,
              motion: E,
              onNavigate: (Z, re) => n(Z, re)
            }
          ) }),
          ue && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Ao,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: P,
              size: _,
              motion: E,
              onSelectRoot: (Z) => {
                var re, Pe;
                V(Z.key), Z.path && (!Z.children || Z.children.length === 0) ? n(Z.path, Z) : (Pe = (re = Z.children) == null ? void 0 : re[0]) != null && Pe.path && n(Z.children[0].path, Z.children[0]);
              },
              onNavigate: (Z, re) => n(Z, re)
            }
          ) }),
          (fe || Ne) && A.showBreadcrumb !== !1 && X.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: x(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                R.breadcrumb
              ),
              children: X.map((Z, re) => {
                const Pe = re === X.length - 1;
                return /* @__PURE__ */ l(pt.Fragment, { children: [
                  re > 0 && /* @__PURE__ */ e(Zt, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: x(
                        "truncate",
                        Pe && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: Z.label
                    }
                  )
                ] }, Z.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => I(!0),
              className: x(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                R.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(Pt, { className: R.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(Gr, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          b,
          /* @__PURE__ */ e(Yt, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (Z) => M({ clientX: Z.clientX, clientY: Z.clientY }),
              className: x(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                R.iconBtn
              ),
              children: T === "dark" ? /* @__PURE__ */ e(Sa, { className: R.iconCls }) : /* @__PURE__ */ e(Ca, { className: R.iconCls })
            }
          ) }),
          h && /* @__PURE__ */ e(Yt, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => j(!0),
              className: x(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                R.iconBtn
              ),
              children: /* @__PURE__ */ e(Un, { className: R.iconCls })
            }
          ) }),
          c && /* @__PURE__ */ e(
            Ra,
            {
              items: c.menuItems ?? [
                { key: "profile", label: `当前账号：${c.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ l("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(dm, { src: c.avatar, name: c.name, size: R.avatarSize }),
                /* @__PURE__ */ l("div", { className: "hidden text-left md:block", children: [
                  /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-xs font-semibold text-[var(--abc-fg)] leading-tight", children: c.name }),
                  c.role && /* @__PURE__ */ e("div", { className: "max-w-24 truncate text-[10px] text-[var(--abc-fg-muted)] leading-tight", children: c.role })
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  ), Ee = /* @__PURE__ */ l("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !ue && Ie,
    A.showTabs && /* @__PURE__ */ e(
      lp,
      {
        tabs: G,
        activePath: a,
        variant: A.tabStyle ?? "card",
        size: _,
        motion: E,
        onSelect: (Z) => n(Z),
        onClose: ke,
        onTogglePin: (Z) => W(
          (re) => re.map((Pe) => Pe.path === Z ? { ...Pe, pinned: !Pe.pinned } : Pe)
        ),
        onCloseOthers: (Z) => W((re) => re.filter((Pe) => Pe.pinned || Pe.path === Z)),
        onCloseRight: (Z) => {
          const re = G.findIndex((Pe) => Pe.path === Z);
          re < 0 || W((Pe) => Pe.filter((Ye, Xe) => Xe <= re || Ye.pinned));
        },
        onCloseAll: () => {
          const Z = G.filter((re) => re.pinned);
          W(Z), Z[0] && Z[0].path !== a && n(Z[0].path);
        },
        onRefresh: (Z) => K((re) => ({ ...re, [Z]: (re[Z] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: q,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ l(
          jf,
          {
            enabled: C,
            content: te,
            className: x(
              "min-h-full",
              A.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                ip,
                {
                  activeKey: a,
                  enabled: A.keepAlive,
                  aliveKeys: G.map((Z) => Z.path),
                  scrollContainerRef: q,
                  refreshSeed: U[a] ?? 0,
                  refreshKeys: U,
                  activeClassName: fp[L],
                  isolateError: v,
                  onTabReload: (Z) => K((re) => ({ ...re, [Z]: (re[Z] ?? 0) + 1 })),
                  onTabClose: A.showTabs ? (Z) => ke(Z) : void 0,
                  onNavigateHome: () => n(w),
                  children: N
                }
              ),
              A.showFooter && /* @__PURE__ */ l("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
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
  ] }), _e = {
    "--abc-sidebar-w": A.sidebarWidth ? `${A.sidebarWidth}px` : void 0,
    "--abc-header-h": A.headerHeight ? `${A.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ l(
    "div",
    {
      "data-size": _,
      "data-motion": E,
      style: _e,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        A.routeProgress !== !1 && /* @__PURE__ */ e(Vl, { activeKey: a }),
        ue && Ie,
        /* @__PURE__ */ l("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          ue && de.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Wn,
            {
              items: de,
              pathname: a,
              collapsed: A.sidebarCollapsed,
              accordion: A.sidebarAccordion,
              tone: A.sidebarTone,
              size: _,
              motion: E,
              onNavigate: (Z, re) => n(Z, re)
            }
          ) }),
          fe && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Wn,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: A.sidebarCollapsed,
              accordion: A.sidebarAccordion,
              tone: A.sidebarTone,
              size: _,
              motion: E,
              onNavigate: (Z, re) => n(Z, re)
            }
          ) }),
          Ne && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            sp,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: A.sidebarTone,
              size: _,
              motion: E,
              onNavigate: (Z, re) => n(Z, re)
            }
          ) }),
          Ee
        ] }),
        /* @__PURE__ */ e(
          na,
          {
            open: S,
            onClose: () => z(!1),
            placement: "left",
            width: R.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              Wn,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: _,
                motion: E,
                onNavigate: (Z, re) => {
                  n(Z, re), z(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          cp,
          {
            open: F,
            onClose: () => I(!1),
            menuItems: r,
            onNavigate: (Z, re) => n(Z, re),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: T === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => M()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => j(!0)
              },
              ...i
            ]
          }
        ),
        /* @__PURE__ */ e(
          Bo,
          {
            open: O,
            onClose: () => j(!1),
            layoutSettings: A,
            onLayoutChange: B,
            onResetAll: () => $(D)
          }
        )
      ]
    }
  );
};
function Ps() {
  const { permissionAdapter: t } = At();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const hp = ({
  permission: t,
  code: r,
  mode: a = "any",
  fallbackStrategy: n = "hide",
  disabledTip: s = "暂无操作权限",
  fallback: o,
  fallbackNode: d,
  children: c
}) => {
  var m;
  const { hasPermission: b } = Ps(), i = t ?? r;
  if (!i) return /* @__PURE__ */ e(Ue, { children: c });
  if (b(i, a)) return /* @__PURE__ */ e(Ue, { children: c });
  if (n === "hide")
    return /* @__PURE__ */ e(Ue, { children: o ?? d ?? null });
  if (pt.isValidElement(c)) {
    const p = c, f = pt.cloneElement(p, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((m = p.props) == null ? void 0 : m.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(Yt, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: f }) });
  }
  return null;
}, ig = hp;
function ri(t) {
  const { dictAdapter: r } = At(), [a, n] = H([]), [s, o] = H(!1);
  return we(() => {
    if (!r || !t) {
      n([]);
      return;
    }
    let d = !0;
    const c = r(t);
    return c instanceof Promise ? (o(!0), c.then((b) => {
      d && n(b);
    }).finally(() => {
      d && o(!1);
    })) : n(c), () => {
      d = !1;
    };
  }, [r, t]), { options: a, loading: s };
}
const cg = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...d
}) => {
  const c = t ?? r ?? "", { options: b, loading: i } = ri(c), u = oe(
    () => [...a, ...b, ...n],
    [a, b, n]
  );
  return /* @__PURE__ */ e(
    ir,
    {
      options: u,
      placeholder: i && u.length === 0 ? "字典加载中..." : s,
      disabled: o || i && u.length === 0,
      ...d
    }
  );
}, dg = ({
  dictCode: t,
  dictKey: r,
  value: a,
  dot: n = !0,
  size: s,
  motion: o,
  emptyText: d = "-",
  fallbackTone: c = "neutral",
  className: b
}) => {
  const i = t ?? r ?? "", { options: u } = ri(i);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: d });
  const m = u.find((p) => String(p.value) === String(a));
  return /* @__PURE__ */ e(
    Lr,
    {
      tone: (m == null ? void 0 : m.tone) ?? c,
      dot: n,
      size: s,
      motion: o,
      className: b,
      children: (m == null ? void 0 : m.label) ?? String(a)
    }
  );
}, Po = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, gp = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: x("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(un, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: x("grid gap-4", Po[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: x("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ l(
  "div",
  {
    className: x(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ l("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(un, { children: /* @__PURE__ */ e("div", { className: x("grid gap-4", Po[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function hr(t) {
  if (!t || typeof t != "object" || !("code" in t)) return !1;
  const r = t.code;
  return r == null ? !1 : r !== 200 && r !== 0 && r !== "200" && r !== "0";
}
function ss(t, r) {
  const a = (t == null ? void 0 : t.data) ?? t, n = Array.isArray(a == null ? void 0 : a.records) ? a.records : Array.isArray(a == null ? void 0 : a.list) ? a.list : Array.isArray(t == null ? void 0 : t.list) ? t.list : Array.isArray(t == null ? void 0 : t.records) ? t.records : Array.isArray(a) ? a : [], s = r ? n.map(r) : n, o = typeof (a == null ? void 0 : a.total) == "number" ? a.total : typeof (t == null ? void 0 : t.total) == "number" ? t.total : n.length;
  return { list: s, total: o, raw: t };
}
function zo(t) {
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
function Tn(t, r) {
  const a = typeof t == "function" ? { list: t, ...r } : t;
  return {
    list: async (n) => {
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, b = s ?? o, i = a.defaultParams || a.params;
      let u = {
        ...b !== void 0 ? { pageNo: b, pageNum: b } : {},
        ...d !== void 0 ? { pageSize: d } : {},
        ...i,
        ...c
      };
      (b !== void 0 && !("pageNum" in (n || {})) || b !== void 0) && delete u.pageNum, a.transformQuery && (u = a.transformQuery(u)), u = zo(u);
      const m = await a.list(u);
      if (hr(m))
        return m;
      const p = ss(m, a.transformRecord);
      return {
        ...m && typeof m == "object" && !Array.isArray(m) ? m : {},
        list: p.list,
        total: p.total
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
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, b = a.defaultParams || a.params, i = zo({
        ...b,
        ...c
      }), u = await a.export(i);
      if (typeof window > "u" || typeof document > "u")
        return u;
      const m = u instanceof Blob ? u : new Blob([u], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }), p = window.URL.createObjectURL(m), f = document.createElement("a"), h = /* @__PURE__ */ new Date(), v = (k) => String(k).padStart(2, "0"), w = `${h.getFullYear()}${v(h.getMonth() + 1)}${v(h.getDate())}_${v(
        h.getHours()
      )}${v(h.getMinutes())}${v(h.getSeconds())}`;
      return f.href = p, f.download = `${a.exportFileName || "数据导出"}_${w}.xlsx`, document.body.appendChild(f), f.click(), f.remove(), window.URL.revokeObjectURL(p), u;
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
const ug = Tn;
function vp(t, r = []) {
  const a = ce(t);
  return a.current = t, oe(() => Tn(a.current), [r]);
}
const bg = vp;
function xp(t, r = []) {
  const [a, n] = H(0), s = ce(null), [o, d] = H([]), c = ge(() => d([]), []), b = ce(t);
  b.current = t;
  const i = ge(() => {
    s.current ? s.current(!1) : n((f) => f + 1);
  }, []), u = ge(() => {
    d([]), s.current ? s.current(!0) : n((f) => f + 1);
  }, []), m = oe(() => Tn(b.current), [a, ...r]);
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
    refresh: i,
    reload: u,
    refreshKey: a,
    selectedRowKeys: o,
    setSelectedRowKeys: d,
    clearSelection: c
  };
}
const mg = xp;
function ai(t, r) {
  var a, n;
  if (!t || typeof t != "object") return !1;
  try {
    const s = typeof t.shape == "function" ? t.shape() : t.shape ?? ((n = (a = t._def) == null ? void 0 : a.shape) == null ? void 0 : n.call(a)), o = s == null ? void 0 : s[r];
    if (!o) return !1;
    const d = typeof o.isOptional == "function" ? !!o.isOptional() : !1, c = typeof o.isNullable == "function" ? !!o.isNullable() : !1;
    return !d && !c;
  } catch {
    return !1;
  }
}
const fg = ai;
function Qr(t) {
  return String(t.key ?? t.name ?? "");
}
function yp({
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
  const c = ce(n);
  c.current = n;
  const b = ce({ ...t ?? {} }), i = ce({}), u = ce(!1), [, m] = H(0), p = ce(/* @__PURE__ */ new Set()), f = ge((C) => {
    var _;
    m((E) => E + 1);
    const y = { ...b.current };
    (_ = c.current) == null || _.call(c, y, C), p.current.forEach((E) => E(y, { name: C }));
  }, []), h = ge((C) => C === void 0 ? { ...b.current } : C.includes(".") ? En(b.current, C) : b.current[C], []), v = ge(
    (C, y) => {
      if (b.current = {
        ...b.current,
        [C]: y
      }, u.current = !0, i.current[C]) {
        const _ = { ...i.current };
        delete _[C], i.current = _;
      }
      f(C);
    },
    [f]
  ), w = ge((C) => typeof C == "function" ? (p.current.add(C), {
    unsubscribe: () => {
      p.current.delete(C);
    }
  }) : C === void 0 ? { ...b.current } : Array.isArray(C) ? C.map((y) => b.current[y]) : b.current[C], []), k = ge((C) => {
    b.current = {
      ...s.current ?? {},
      ...C ?? {}
    }, i.current = {}, u.current = !1, m((y) => y + 1);
  }, []), g = ge((C, y) => {
    i.current = {
      ...i.current,
      [C]: y
    }, m((_) => _ + 1);
  }, []), N = ge((C) => {
    if (!C)
      i.current = {};
    else if (Array.isArray(C)) {
      const y = { ...i.current };
      C.forEach((_) => delete y[_]), i.current = y;
    } else {
      const y = { ...i.current };
      delete y[C], i.current = y;
    }
    m((y) => y + 1);
  }, []), T = ge(() => {
    var R, D;
    const C = { ...b.current }, y = {};
    for (const A of o.current) {
      const $ = Qr(A);
      if (!$) continue;
      const B = C[$], S = B == null || typeof B == "string" && B.trim() === "" || Array.isArray(B) && B.length === 0;
      if (A.required && S) {
        y[$] = { type: "required", message: `请填写${A.label}` };
        continue;
      }
      if (A.validator) {
        const z = A.validator(B, C);
        z && (y[$] = { type: "validate", message: z });
      }
    }
    let _ = C;
    const E = d.current;
    if (E && typeof E.safeParse == "function") {
      const A = E.safeParse(C);
      if (A.success)
        A.data && typeof A.data == "object" && (_ = { ...C, ...A.data });
      else {
        const $ = ((R = A.error) == null ? void 0 : R.issues) ?? ((D = A.error) == null ? void 0 : D.errors) ?? [];
        for (const B of $) {
          const S = Array.isArray(B.path) && B.path.length > 0 ? String(B.path[0]) : "";
          S && !y[S] && (y[S] = {
            type: "schema",
            message: B.message || "字段格式不正确"
          });
        }
      }
    }
    return i.current = y, m((A) => A + 1), {
      valid: Object.keys(y).length === 0,
      data: _
    };
  }, []), M = ge(async () => T().valid, [T]), L = ge(
    (C) => async (y) => {
      var R;
      (R = y == null ? void 0 : y.preventDefault) == null || R.call(y);
      const { valid: _, data: E } = T();
      _ && await C(E);
    },
    [T]
  );
  return {
    getValues: h,
    setValue: v,
    watch: w,
    reset: k,
    setError: g,
    clearErrors: N,
    trigger: M,
    handleSubmit: L,
    formState: {
      errors: i.current,
      isDirty: u.current
    }
  };
}
function wp(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const ni = ({
  value: t,
  disabled: r = !1,
  maxCount: a = 9,
  customUpload: n,
  onChange: s
}) => {
  const { uploadAdapter: o, toast: d } = At(), [c, b] = H(!1), i = oe(() => Array.isArray(t) ? t.filter(Boolean) : String(t || "").split(",").map((p) => p.trim()).filter(Boolean), [t]), u = async (p) => {
    const f = p.target.files;
    if (!f || f.length === 0 || r || c) return;
    const h = [...i];
    b(!0);
    try {
      for (let v = 0; v < f.length; v++) {
        if (h.length >= a) {
          d.error(`最多支持上传 ${a} 张图片`);
          break;
        }
        const w = f[v];
        let k = "";
        if (n) {
          const g = await n(w);
          k = typeof g == "string" ? g : (g == null ? void 0 : g.url) || "";
        } else o ? k = await o(w) : k = await wp(w);
        k && h.push(k);
      }
      s(h.join(","));
    } catch (v) {
      d.error((v == null ? void 0 : v.message) || "上传图片失败");
    } finally {
      b(!1), p.target.value = "";
    }
  }, m = (p) => {
    if (r) return;
    const f = i.filter((h, v) => v !== p);
    s(f.join(","));
  };
  return /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-3", children: [
    i.map((p, f) => /* @__PURE__ */ l(
      "div",
      {
        className: "group relative h-24 w-24 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        children: [
          /* @__PURE__ */ e(Pa, { src: p, width: 96, height: 96, className: "h-full w-full object-cover" }),
          !r && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => m(f),
              "aria-label": "移除图片",
              title: "移除图片",
              className: "absolute top-1 right-1 rounded-full bg-[var(--abc-danger)]/90 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
              children: /* @__PURE__ */ e(mr, { className: "h-3 w-3" })
            }
          )
        ]
      },
      `${p}-${f}`
    )),
    i.length < a && !r && /* @__PURE__ */ l("label", { className: "flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]", children: [
      c ? /* @__PURE__ */ e(Jt, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(xn, { className: "h-5 w-5" }),
      /* @__PURE__ */ e("span", { className: "text-[11px]", children: c ? "上传中..." : `上传(${i.length}/${a})` }),
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
}, pg = ni, Np = ({
  value: t,
  disabled: r = !1,
  placeholder: a,
  presetIcons: n,
  onChange: s
}) => {
  const [o, d] = H(!1);
  return !n || n.length === 0 ? /* @__PURE__ */ e(
    uo,
    {
      value: t,
      disabled: r,
      placeholder: a,
      onChange: s
    }
  ) : /* @__PURE__ */ l("div", { className: "space-y-2", children: [
    /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(gr, { name: t || "Sparkles", size: 16 }) }),
      /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
        kt,
        {
          placeholder: a || "输入或从右侧选择图标",
          disabled: r,
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
          disabled: r,
          onClick: () => d(!0),
          children: "打开图标库"
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5", children: [
      /* @__PURE__ */ e("span", { className: "mr-1 text-[11px] text-[var(--abc-fg-muted)]", children: "常用推荐:" }),
      n.map((c) => /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          disabled: r,
          onClick: () => s(c),
          className: x(
            "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border px-2 py-1 text-[11px] transition-colors cursor-pointer",
            t === c ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-secondary)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            /* @__PURE__ */ e(gr, { name: c, size: 12 }),
            /* @__PURE__ */ e("span", { children: c })
          ]
        },
        c
      ))
    ] }),
    /* @__PURE__ */ e(
      uo,
      {
        open: o,
        current: t,
        onClose: () => d(!1),
        onSelect: s
      }
    )
  ] });
};
function kp({
  field: t,
  form: r,
  isEdit: a,
  editingRecord: n
}) {
  const s = Qr(t);
  if ((typeof t.hidden == "function" ? t.hidden(a, r) : !!t.hidden) || t.formGroup === "hidden") return null;
  if (t.type === "custom" && t.render)
    return /* @__PURE__ */ e(Ue, { children: t.render(r, a) });
  const d = typeof t.disabled == "function" ? t.__fromFieldSchema ? t.disabled(n) : t.disabled(a, r) : !!t.disabled, c = r.getValues(s), b = (i) => {
    var u;
    r.setValue(s, i), (u = t.onChange) == null || u.call(t, i, r);
  };
  switch (t.type) {
    case "number":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        kn,
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
        kt,
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
          onChange: (i) => {
            const u = i.target.value, m = u === "" ? "" : /^-?\d*\.\d*0$/.test(u) || u === "-" || Number.isNaN(Number(u)) ? u : Number(u);
            b(m);
          }
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        kt,
        {
          type: "password",
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (i) => b(i.target.value)
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        Ma,
        {
          rows: t.rows || 3,
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (i) => b(i.target.value)
        }
      );
    case "select":
    case "radio":
    case "checkbox": {
      const i = typeof t.options == "function" ? t.options(r, a) : t.options ?? [];
      if (t.type === "radio" || t.type === "checkbox")
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 py-1", children: i.map((m) => /* @__PURE__ */ l(
          "label",
          {
            className: x(
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
                    const f = Array.isArray(c) ? [...c] : [], h = p.target.checked ? [...f, m.value] : f.filter((v) => String(v) !== String(m.value));
                    b(h);
                  }
                }
              ),
              /* @__PURE__ */ e("span", { children: m.label })
            ]
          },
          String(m.value)
        )) });
      const u = i.map((m) => ({
        label: m.label,
        value: typeof m.value == "boolean" ? String(m.value) : m.value,
        disabled: m.disabled
      }));
      return /* @__PURE__ */ e(
        ir,
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
      const i = typeof t.treeData == "function" ? t.treeData(r, a) : t.treeData ?? [], u = !!(t.multiple || t.treeCheckable);
      return /* @__PURE__ */ e(
        Da,
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
          treeData: i,
          placeholder: t.placeholder || `请选择${t.label}`,
          allowClear: t.clearable !== !1,
          onChange: (m) => b(m)
        }
      );
    }
    case "switch":
      return /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-2 py-1", children: [
        /* @__PURE__ */ e(
          or,
          {
            disabled: d,
            checked: !!c,
            onChange: (i) => b(i)
          }
        ),
        (t.checkedChildren || t.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: c ? t.checkedChildren : t.unCheckedChildren })
      ] });
    case "date":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        La,
        {
          disabled: d,
          value: c ?? "",
          placeholder: t.placeholder,
          onChange: b
        }
      ) : /* @__PURE__ */ e(
        kt,
        {
          type: "date",
          disabled: d,
          value: c ?? "",
          onChange: (i) => b(i.target.value)
        }
      );
    case "datetime":
    case "datetimePicker":
      return /* @__PURE__ */ e(
        kt,
        {
          type: "datetime-local",
          disabled: d,
          value: c ? String(c).replace(" ", "T").slice(0, 16) : "",
          onChange: (i) => {
            const u = i.target.value;
            b(u ? `${u.replace("T", " ")}:00` : "");
          }
        }
      );
    case "dateRange": {
      if (t.__fromFieldSchema)
        return /* @__PURE__ */ e(
          Ba,
          {
            disabled: d,
            value: c ?? null,
            onChange: b
          }
        );
      const i = Array.isArray(c) ? c : ["", ""];
      return /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          kt,
          {
            type: "date",
            disabled: d,
            value: i[0] || "",
            onChange: (u) => b([u.target.value, i[1] || ""])
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "至" }),
        /* @__PURE__ */ e(
          kt,
          {
            type: "date",
            disabled: d,
            value: i[1] || "",
            onChange: (u) => b([i[0] || "", u.target.value])
          }
        )
      ] });
    }
    case "color":
      return /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            disabled: d,
            value: c || "#2563eb",
            onChange: (i) => b(i.target.value),
            className: "h-8.5 w-11 shrink-0 cursor-pointer rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5"
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
          kt,
          {
            type: "text",
            disabled: d,
            value: c ?? "",
            placeholder: t.placeholder || "#2563eb",
            onChange: (i) => b(i.target.value)
          }
        ) })
      ] });
    case "icon":
      return /* @__PURE__ */ e(
        Np,
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
        ff,
        {
          disabled: d,
          value: Array.isArray(c) ? c : [],
          placeholder: t.placeholder,
          onChange: b
        }
      );
    case "image": {
      const i = t.customUpload ? async (u) => {
        const m = await t.customUpload(u);
        return typeof m == "string" ? m : (m == null ? void 0 : m.url) || "";
      } : void 0;
      return t.multiple ? /* @__PURE__ */ e(
        ni,
        {
          value: c ?? "",
          disabled: d,
          maxCount: t.maxCount,
          customUpload: t.customUpload,
          onChange: b
        }
      ) : /* @__PURE__ */ e(
        Al,
        {
          value: c ? String(c) : "",
          disabled: d,
          maxSizeMB: t.maxSize,
          customUpload: i,
          onChange: b
        }
      );
    }
    case "file":
    case "upload": {
      const i = t.customUpload ? async (u) => {
        const m = await t.customUpload(u);
        return { url: typeof m == "string" ? m : (m == null ? void 0 : m.url) ?? "" };
      } : void 0;
      return /* @__PURE__ */ e(
        Dl,
        {
          value: Array.isArray(c) ? c : [],
          accept: t.accept,
          multiple: t.multiple,
          maxCount: t.maxCount,
          maxSizeMB: t.maxSize,
          disabled: d,
          customUpload: i,
          onChange: b
        }
      );
    }
    case "cascader": {
      const i = typeof t.cascaderOptions == "function" ? t.cascaderOptions(r, a) : t.cascaderOptions ?? (typeof t.options == "function" ? t.options(r, a) : t.options) ?? [];
      return /* @__PURE__ */ e(
        Tl,
        {
          options: i,
          ariaLabel: t.label,
          value: Array.isArray(c) ? c : [],
          multiple: t.multiple,
          searchable: t.searchable,
          clearable: t.clearable !== !1,
          disabled: d,
          placeholder: t.placeholder,
          onChange: (u) => b(u)
        }
      );
    }
    case "transfer": {
      const i = typeof t.transferItems == "function" ? t.transferItems(r, a) : t.transferItems, u = typeof t.options == "function" ? t.options(r, a) : t.options ?? [], m = i ?? u.map((p) => ({
        key: String(p.value),
        title: typeof p.label == "string" ? p.label : String(p.value),
        disabled: p.disabled
      }));
      return /* @__PURE__ */ e(
        Il,
        {
          dataSource: m,
          targetKeys: Array.isArray(c) ? c.map(String) : [],
          searchable: t.searchable !== !1,
          disabled: d,
          onChange: (p) => b(p)
        }
      );
    }
    case "text":
    case "input":
    default:
      return /* @__PURE__ */ e(
        kt,
        {
          type: "text",
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder ?? (t.__fromFieldSchema ? void 0 : `请输入${t.label}`),
          clearable: t.__fromFieldSchema ? void 0 : t.clearable !== !1,
          onChange: (i) => b(i.target.value)
        }
      );
  }
}
function si({
  layout: t = "grid",
  columnsCount: r = 2,
  fields: a,
  isEdit: n,
  form: s,
  errors: o = {},
  formSchema: d,
  columns: c = [],
  isFieldRequired: b = ai,
  renderFormField: i
}) {
  const u = (p) => p.formGroup === "hidden" ? !0 : typeof p.hidden == "function" && s ? !!p.hidden(n, s) : !!p.hidden, m = (p) => {
    const f = Qr(p), h = !!(p.required || b(d, f)), v = o[f], w = typeof v == "string" ? v : v == null ? void 0 : v.message, k = c.find((N) => {
      const T = Array.isArray(N.dataIndex) ? N.dataIndex[0] : N.dataIndex ?? N.key;
      return String(T) === f;
    }), g = p.tooltip ?? (k == null ? void 0 : k.tooltip);
    return /* @__PURE__ */ e(
      Ds,
      {
        label: p.label,
        required: h,
        tooltip: g,
        helperText: p.helperText,
        error: w,
        children: i(p)
      },
      f
    );
  };
  if (t === "split") {
    const p = a.filter((g) => !u(g)), f = p.filter((g) => g.formGroup === "top"), h = p.filter((g) => {
      const N = g.formGroup || "left";
      return N === "left" || N === "full";
    }), v = p.filter((g) => g.formGroup === "right"), w = p.filter((g) => g.formGroup === "bottom"), k = p.filter((g) => g.formGroup === "extra");
    return /* @__PURE__ */ l("div", { className: "space-y-4", children: [
      f.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: f.map((g) => m(g)) }),
      /* @__PURE__ */ l(
        "div",
        {
          className: x(
            "grid grid-cols-1 gap-5",
            v.length > 0 && "md:grid-cols-2"
          ),
          children: [
            /* @__PURE__ */ e("div", { className: "space-y-3.5", children: h.map((g) => m(g)) }),
            v.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: v.map((g) => m(g)) })
          ]
        }
      ),
      w.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: w.map((g) => m(g)) }),
      k.length > 0 && /* @__PURE__ */ e("div", { className: "mt-4 space-y-3.5 border-t border-[var(--abc-border)] pt-4", children: k.map((g) => m(g)) })
    ] });
  }
  return /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "grid gap-3.5",
        r === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      ),
      children: a.map((p) => {
        if (u(p)) return null;
        const f = Qr(p), h = r === 2 && (p.span === 2 || p.formGroup === "full" || p.__fromFieldSchema && p.type === "textarea");
        return /* @__PURE__ */ e("div", { className: h ? "col-span-1 sm:col-span-2" : "col-span-1", children: m(p) }, f);
      })
    }
  );
}
const hg = si;
function Sp({
  open: t,
  onClose: r,
  isEdit: a,
  currentRecord: n,
  container: s = "dialog",
  dialogTitle: o,
  dialogSize: d,
  formLayout: c = "grid",
  formColumns: b = 2,
  formFields: i,
  form: u,
  formSchema: m,
  columns: p,
  formSubmitting: f,
  formDetailLoading: h,
  formError: v,
  onSubmit: w,
  draftEnabled: k = !1,
  showDraftButton: g = !1,
  showDraftBanner: N = !1,
  draftBannerMode: T = "prompt",
  onSaveDraft: M,
  onRestoreDraft: L,
  onDiscardDraft: C,
  submitButtonText: y = "保存",
  renderFormExtra: _,
  renderCustomForm: E,
  onSuccessFetch: R
}) {
  if (E)
    return /* @__PURE__ */ e(Ue, { children: E({
      open: t,
      onClose: r,
      record: n,
      isEdit: a,
      onSuccess: () => {
        r(), R == null || R();
      }
    }) });
  const D = a ? (o == null ? void 0 : o.edit) || "编辑" : (o == null ? void 0 : o.add) || "新增", A = d ?? (b === 2 ? "lg" : "md"), $ = /* @__PURE__ */ l("div", { className: "flex items-center justify-end gap-2.5", children: [
    k && g && M && /* @__PURE__ */ e(Le, { variant: "secondary", size: "sm", type: "button", onClick: M, children: "保存草稿" }),
    !a && N && T === "auto-restored" && C && /* @__PURE__ */ e(Le, { variant: "ghost", size: "sm", type: "button", onClick: C, children: "清空草稿" }),
    /* @__PURE__ */ e(Le, { variant: "secondary", size: "sm", type: "button", onClick: r, disabled: f, children: "取消" }),
    /* @__PURE__ */ e(Le, { variant: "primary", size: "sm", type: "button", loading: f, onClick: w, children: y })
  ] }), B = /* @__PURE__ */ l("form", { onSubmit: w, className: "space-y-3.5 py-1", children: [
    h && /* @__PURE__ */ l("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
      /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
      /* @__PURE__ */ e("span", { children: "正在同步最新完整数据..." })
    ] }),
    v && /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-3 py-2 text-xs text-[var(--abc-danger)]", children: v }),
    N && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-fg)]", children: [
      /* @__PURE__ */ e("span", { children: T === "auto-restored" ? "已自动为您恢复上次未提交的本地表单草稿" : "检测到未提交的草稿" }),
      /* @__PURE__ */ l("span", { className: "inline-flex shrink-0 items-center gap-2.5", children: [
        T === "prompt" && L && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: L,
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
            children: T === "auto-restored" ? "丢弃草稿" : "丢弃"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      si,
      {
        layout: c,
        columnsCount: b,
        fields: i,
        isEdit: a,
        form: u,
        errors: u.formState.errors,
        formSchema: m,
        columns: p,
        renderFormField: (S) => /* @__PURE__ */ e(
          kp,
          {
            field: S,
            form: u,
            isEdit: a,
            editingRecord: n
          }
        )
      }
    ),
    _ == null ? void 0 : _(u, a)
  ] });
  if (s === "drawer") {
    const z = ["xs", "sm", "md", "lg", "xl", "2xl"].includes(A) ? A : "lg";
    return /* @__PURE__ */ e(
      na,
      {
        open: t,
        onClose: r,
        title: D,
        size: z,
        footer: $,
        children: B
      }
    );
  }
  return /* @__PURE__ */ e(
    dr,
    {
      open: t,
      onClose: r,
      title: D,
      size: A,
      footer: $,
      children: B
    }
  );
}
function Cp({
  open: t,
  onClose: r,
  record: a,
  columns: n,
  viewTitle: s = "详情",
  viewSize: o = "lg",
  viewLoading: d = !1,
  canEdit: c = !1,
  onEditRecord: b,
  renderViewExtra: i,
  renderViewFooter: u
}) {
  const m = typeof s == "function" ? a ? s(a) : "详情" : s;
  return /* @__PURE__ */ l(
    dr,
    {
      open: t,
      onClose: r,
      title: m,
      size: o,
      footer: u && a ? u(a, r) : /* @__PURE__ */ l("div", { className: "flex items-center justify-end gap-2", children: [
        a && c && b && /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => {
              const p = a;
              r(), b(p);
            },
            children: "编辑此记录"
          }
        ),
        /* @__PURE__ */ e(Le, { variant: "primary", size: "sm", onClick: r, children: "关闭" })
      ] }),
      children: [
        d && /* @__PURE__ */ l("div", { className: "mb-3 flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
          /* @__PURE__ */ e(Jt, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
          /* @__PURE__ */ e("span", { children: "正在更新详细数据..." })
        ] }),
        a && /* @__PURE__ */ l("div", { className: "space-y-4 py-1", children: [
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-3 text-xs md:grid-cols-2", children: n.map((p) => {
            if (p.view === !1 || p.key === "actions" || p.key === "__actions__" || p.key === "__abc_actions__" || p.key === "__drag_handle__")
              return null;
            const f = En(a, p.dataIndex ?? p.key), h = typeof p.type == "object" ? p.type : void 0, v = typeof p.search == "object" && p.search !== null && Array.isArray(p.search.options) ? p.search.options.filter((g) => g.value !== "") : void 0, w = !p.options && !(h != null && h.options) && v ? { ...p, options: v, __autoOptionsFromSearch: !0 } : p;
            let k;
            return p.viewRender ? k = p.viewRender(f, a) : p.render ? k = p.render(f, a, 0) : (p.type === "image" || (h == null ? void 0 : h.type) === "image" || p.valueType === "image") && f ? k = /* @__PURE__ */ e(Pa, { src: String(f), width: 56, height: 56 }) : k = Ul(f, a, w), /* @__PURE__ */ l(
              "div",
              {
                className: x(
                  "flex flex-col gap-1 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 p-3",
                  p.viewSpan === 2 && "md:col-span-2"
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "font-semibold text-[var(--abc-fg-muted)]", children: p.title }),
                  /* @__PURE__ */ e("div", { className: "font-medium break-all text-[var(--abc-fg)]", children: k })
                ]
              },
              p.key
            );
          }) }),
          i == null ? void 0 : i(a)
        ] })
      ]
    }
  );
}
function gg({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = At(), [d, c] = H(r), [b, i] = H(!1), [u, m] = H({});
  we(() => {
    c(r);
  }, [r]);
  const p = (h, v) => {
    c((w) => ({ ...w, [h]: v })), u[h] && m((w) => {
      const k = { ...w };
      return delete k[h], k;
    });
  };
  return /* @__PURE__ */ l("form", { onSubmit: async (h) => {
    h.preventDefault();
    const v = {};
    for (const w of t)
      for (const k of w.fields)
        if (k.required) {
          const g = d[k.name];
          (g == null || String(g).trim() === "") && (v[k.name] = `请填写${k.label}`);
        }
    if (Object.keys(v).length > 0) {
      m(v), o.warning("请完善必填配置项后再提交");
      return;
    }
    i(!0);
    try {
      await n(d), o.success("配置已保存生效");
    } catch (w) {
      o.error((w == null ? void 0 : w.message) || "保存失败");
    } finally {
      i(!1);
    }
  }, className: "space-y-6", children: [
    /* @__PURE__ */ e(
      gp,
      {
        mode: a,
        sections: t.map((h) => ({
          key: h.key,
          title: h.title,
          description: h.description,
          columns: h.columns ?? 1,
          children: h.fields.map((v) => {
            const w = d[v.name], k = u[v.name], g = v.type ?? "text";
            return /* @__PURE__ */ e(
              Ds,
              {
                label: v.label,
                required: v.required,
                helperText: v.helperText,
                error: k,
                children: g === "switch" ? /* @__PURE__ */ e(
                  or,
                  {
                    checked: !!w,
                    onChange: (N) => p(v.name, N)
                  }
                ) : g === "number" ? /* @__PURE__ */ e(
                  kn,
                  {
                    value: w ?? null,
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N)
                  }
                ) : g === "textarea" ? /* @__PURE__ */ e(
                  Ma,
                  {
                    value: w ?? "",
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N.target.value)
                  }
                ) : g === "select" ? /* @__PURE__ */ e(
                  ir,
                  {
                    options: v.options ?? [],
                    value: w ?? "",
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N)
                  }
                ) : g === "treeSelect" ? /* @__PURE__ */ e(
                  Da,
                  {
                    "aria-label": v.label,
                    treeData: v.treeData ?? [],
                    value: w ?? (v.multiple || v.treeCheckable ? [] : ""),
                    multiple: v.multiple,
                    treeCheckable: v.treeCheckable,
                    treeCheckStrictly: v.treeCheckStrictly,
                    showCheckedStrategy: v.showCheckedStrategy,
                    selectableLeafOnly: v.selectableLeafOnly,
                    fieldNames: v.fieldNames,
                    treeDataSimpleMode: v.treeDataSimpleMode,
                    maxTagCount: v.maxTagCount,
                    searchable: !0,
                    allowClear: !v.required,
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N)
                  }
                ) : g === "image" ? v.allowDirectUrlInput !== !1 ? /* @__PURE__ */ l("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    Pa,
                    {
                      src: String(w ?? ""),
                      alt: v.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    kt,
                    {
                      allowClear: !0,
                      value: w ?? "",
                      placeholder: v.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (N) => p(v.name, N.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  Al,
                  {
                    value: String(w ?? ""),
                    onChange: (N) => p(v.name, N)
                  }
                ) : /* @__PURE__ */ e(
                  kt,
                  {
                    type: g === "password" ? "password" : "text",
                    allowClear: !0,
                    value: w ?? "",
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N.target.value)
                  }
                )
              },
              v.name
            );
          })
        }))
      }
    ),
    /* @__PURE__ */ l("div", { className: "flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4", children: [
      /* @__PURE__ */ e(
        Le,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            c(r), m({}), o.info("已还原初始配置值");
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
          icon: /* @__PURE__ */ e(sl, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
function Ep({
  title: t,
  subTitle: r,
  permission: a,
  hasPermission: n,
  customUpload: s,
  saveButtonText: o = "保存当前配置",
  defaultValues: d,
  fetchConfig: c,
  saveConfig: b,
  transformBeforeSave: i,
  tabs: u
}) {
  var F;
  const { toast: m, uploadAdapter: p } = At(), { hasPermission: f } = Ps(), [h, v] = H(((F = u[0]) == null ? void 0 : F.key) || ""), [w, k] = H(!1), [g, N] = H(!1), [T, M] = H(!1), [L, C] = H(null), [y, _] = H(d), E = ce(null);
  we(() => () => {
    E.current !== null && typeof window < "u" && window.clearTimeout(E.current);
  }, []);
  const R = ge(async () => {
    k(!0);
    try {
      const I = await c();
      if (hr(I) && !(I != null && I.data)) {
        m.error((I == null ? void 0 : I.msg) || "获取配置数据失败");
        return;
      }
      const O = I != null && I.data && typeof I.data == "object" ? I.data : I;
      O && typeof O == "object" && _((j) => ({ ...j, ...O }));
    } catch {
      m.error("获取配置数据失败");
    } finally {
      k(!1);
    }
  }, [c, m]);
  we(() => {
    R();
  }, [R]);
  const D = ge((I, O) => {
    _((j) => ({ ...j, [I]: O }));
  }, []), A = async () => {
    N(!0);
    try {
      const I = i ? i(y) : y, O = await b(I);
      if (hr(O)) {
        m.error((O == null ? void 0 : O.msg) || "保存配置失败");
        return;
      }
      M(!0), m.success("配置保存成功"), typeof window < "u" && (E.current !== null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        M(!1), E.current = null;
      }, 3e3));
    } catch {
      m.error("保存配置失败");
    } finally {
      N(!1);
    }
  }, $ = u.find((I) => I.key === h) || u[0], B = a ? n ? n(a) : f(a) : !0, S = async (I, O) => {
    C(I);
    try {
      let j;
      if (s) {
        const U = await s(O);
        j = typeof U == "string" ? U : U == null ? void 0 : U.url;
      } else p && (j = await p(O));
      j && D(I, j);
    } catch (j) {
      m.error((j == null ? void 0 : j.message) || "图片上传失败");
    } finally {
      C(null);
    }
  }, z = (I) => {
    const O = y[I.key], j = I.type || "input";
    if (j === "custom" && I.render)
      return I.render(y, D, _);
    switch (j) {
      case "switch":
        return /* @__PURE__ */ e(
          or,
          {
            checked: !!O,
            onChange: (U) => D(I.key, U)
          }
        );
      case "radio":
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-4 pt-0.5", children: (I.options || []).map((U) => {
          const K = typeof U.value == "number" ? Number(O) === U.value : String(O ?? "") === String(U.value);
          return /* @__PURE__ */ l(
            "label",
            {
              className: "flex cursor-pointer items-center gap-2 text-sm text-[var(--abc-fg-secondary)]",
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "radio",
                    name: I.key,
                    checked: K,
                    onChange: () => D(I.key, U.value)
                  }
                ),
                U.label
              ]
            },
            String(U.value)
          );
        }) });
      case "checkbox-csv": {
        const U = new Set(
          String(O || "").split(",").filter(Boolean)
        );
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 pt-0.5 text-xs text-[var(--abc-fg-secondary)]", children: (I.options || []).map((K) => {
          const q = String(K.value), G = U.has(q), W = !!K.locked;
          return /* @__PURE__ */ l(
            "label",
            {
              className: x(
                "flex items-center gap-1.5",
                W ? "cursor-not-allowed opacity-75" : "cursor-pointer"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    disabled: W,
                    checked: G || W,
                    onChange: () => {
                      if (W) return;
                      const X = new Set(U);
                      X.has(q) ? X.delete(q) : X.add(q), D(I.key, Array.from(X).join(","));
                    }
                  }
                ),
                /* @__PURE__ */ e("span", { children: K.label })
              ]
            },
            q
          );
        }) });
      }
      case "select":
        return /* @__PURE__ */ e(
          ir,
          {
            value: O ?? "",
            options: I.options || [],
            onChange: (U) => {
              const K = U && typeof U == "object" && "target" in U ? U.target.value : U;
              D(I.key, K);
            }
          }
        );
      case "textarea":
        return /* @__PURE__ */ e(
          Ma,
          {
            rows: I.rows || 4,
            value: O || "",
            onChange: (U) => D(I.key, U.target.value),
            placeholder: I.placeholder,
            className: I.className
          }
        );
      case "image-url": {
        const U = I.previewShape === "circle", K = !!(I.allowUpload && (s || p));
        return /* @__PURE__ */ l("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(
            Pa,
            {
              src: O ? String(O) : void 0,
              alt: I.label,
              width: U ? 44 : 40,
              height: U ? 44 : 40,
              rounded: U,
              className: x(
                "shrink-0 overflow-hidden border border-[var(--abc-border)] shadow-2xs",
                U ? "rounded-full" : "rounded-[var(--abc-radius-lg)]"
              )
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
            kt,
            {
              value: O || "",
              onChange: (q) => D(I.key, q.target.value),
              placeholder: I.placeholder || "请输入图片完整直链 URL 或 SVG 矢量代码"
            }
          ) }),
          K && /* @__PURE__ */ l("label", { className: "inline-flex shrink-0 cursor-pointer", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (q) => {
                  var W;
                  const G = (W = q.target.files) == null ? void 0 : W[0];
                  G && S(I.key, G), q.target.value = "";
                }
              }
            ),
            /* @__PURE__ */ l("span", { className: "inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]", children: [
              /* @__PURE__ */ e(hn, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ e("span", { children: L === I.key ? "上传中..." : "上传" })
            ] })
          ] })
        ] });
      }
      case "password":
      case "number":
      case "input":
      default:
        return /* @__PURE__ */ e(
          kt,
          {
            type: j === "password" ? "password" : j === "number" ? "number" : "text",
            value: O ?? "",
            onChange: (U) => D(I.key, U.target.value),
            placeholder: I.placeholder,
            className: I.className
          }
        );
    }
  };
  return /* @__PURE__ */ l("div", { className: "space-y-6", children: [
    /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-4 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-[var(--abc-shadow-card)]", children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-bold text-[var(--abc-fg)]", children: t }),
        r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex items-center gap-3", children: [
        T && /* @__PURE__ */ l("span", { className: "flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-success)]", children: [
          /* @__PURE__ */ e(qo, { className: "h-4 w-4" }),
          "配置保存成功"
        ] }),
        /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => void R(),
            disabled: w || g,
            icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
            children: "刷新"
          }
        ),
        B && /* @__PURE__ */ e(
          Le,
          {
            onClick: () => void A(),
            loading: g,
            icon: /* @__PURE__ */ e(sl, { className: "h-4 w-4" }),
            children: o
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-4", children: [
      /* @__PURE__ */ e("div", { className: "h-fit space-y-1.5 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-[var(--abc-shadow-card)] lg:col-span-1", children: u.map((I) => {
        const O = I.icon, j = ($ == null ? void 0 : $.key) === I.key;
        return /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => v(I.key),
            className: x(
              "flex w-full cursor-pointer items-center gap-3 rounded-[var(--abc-radius-lg)] px-4 py-3 text-sm font-medium transition-all",
              j ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
            ),
            children: [
              O && /* @__PURE__ */ e(
                O,
                {
                  className: x(
                    "h-4 w-4",
                    j ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: I.label })
            ]
          },
          I.key
        );
      }) }),
      /* @__PURE__ */ l("div", { className: "relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-6 shadow-[var(--abc-shadow-card)] lg:col-span-3", children: [
        w && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-[var(--abc-radius-xl)] bg-[var(--abc-bg-surface)]/65 backdrop-blur-xs", children: /* @__PURE__ */ e(zf, {}) }),
        $ && /* @__PURE__ */ l("div", { className: "space-y-6", children: [
          /* @__PURE__ */ l("div", { className: "border-b border-[var(--abc-border)] pb-4", children: [
            /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)]", children: $.sectionTitle }),
            $.sectionDescription && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: $.sectionDescription })
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: x(
                "grid grid-cols-1 gap-4",
                ($.columns ?? 2) === 2 && "sm:grid-cols-2"
              ),
              children: $.fields.map((I) => {
                const O = ($.columns ?? 2) === 1 || I.span === 2;
                return /* @__PURE__ */ l(
                  "div",
                  {
                    className: x(
                      O && ($.columns ?? 2) === 2 && "sm:col-span-2"
                    ),
                    children: [
                      I.label && /* @__PURE__ */ l("div", { className: "mb-1.5 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ e("label", { className: "block text-xs font-medium text-[var(--abc-fg-secondary)]", children: I.label }),
                        I.tooltip && /* @__PURE__ */ e(
                          "span",
                          {
                            title: I.tooltip,
                            className: "cursor-help text-[var(--abc-fg-muted)]",
                            children: /* @__PURE__ */ e(ea, { className: "h-3.5 w-3.5" })
                          }
                        )
                      ] }),
                      z(I)
                    ]
                  },
                  I.key
                );
              })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const vg = Ep, Tp = Me.forwardRef(
  ({
    surface: t = !1,
    hasActiveFilters: r = !1,
    onReset: a,
    resetLabel: n = "重置筛选",
    search: s,
    filters: o,
    trailing: d,
    children: c,
    className: b,
    ...i
  }, u) => /* @__PURE__ */ l(
    "div",
    {
      ref: u,
      "data-slot": "filter-toolbar",
      className: x(
        "flex flex-wrap items-center justify-between gap-2.5",
        t && "rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 shadow-2xs",
        b
      ),
      ...i,
      children: [
        /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-2", children: [
          s,
          o,
          c
        ] }),
        r && a || d ? /* @__PURE__ */ l("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
          r && a ? /* @__PURE__ */ l(
            Le,
            {
              variant: "ghost",
              size: "xs",
              onClick: a,
              className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
              children: [
                /* @__PURE__ */ e(lr, { className: "h-3 w-3 mr-1", "aria-hidden": "true" }),
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
Tp.displayName = "FilterToolbar";
function xg({
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
      className: x("inline-flex flex-wrap items-center gap-1.5", s),
      ...o,
      children: t.map((d) => {
        const c = d.value === r;
        return /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            disabled: d.disabled,
            "aria-pressed": c,
            onClick: () => a(d.value),
            className: x(
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
                  className: x(
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
function yg({
  label: t,
  items: r,
  selectedId: a = null,
  headerAction: n,
  onSelect: s,
  onClear: o,
  allLabel: d = "全部",
  className: c
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "quick-select-bar",
      className: x(
        "flex flex-wrap items-center gap-2 rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] px-3 py-2 text-xs",
        c
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l("span", { className: "font-medium text-[var(--abc-fg-secondary)]", children: [
            t,
            "："
          ] }),
          n
        ] }),
        /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          s && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => s(null),
              className: x(
                "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                a === null ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
              ),
              children: d
            }
          ),
          r.map((b, i) => {
            const u = b.id ?? b.key ?? b.code ?? String(i), m = b.active !== void 0 ? b.active : a === u;
            return /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                onClick: () => {
                  b.onSelect ? b.onSelect() : s && s(u);
                },
                className: x(
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
function wg({
  open: t,
  title: r,
  description: a,
  confirmLabel: n,
  cancelLabel: s = "取消",
  onCancel: o,
  workingLabel: d = "正在处理…",
  reasonLabel: c = "操作原因",
  reasonPlaceholder: b = "请详细填写本次变更的业务原因或工单号",
  reasonHint: i = "需输入 8–512 字符，作为运维审计依据留痕",
  reasonTooLongMessage: u = "操作原因不能超过 512 字符",
  closeLabel: m = "关闭",
  minReasonLength: p = 8,
  maxReasonLength: f = 512,
  destructive: h = !1,
  variant: v,
  pending: w = !1,
  confirmDisabled: k = !1,
  error: g = null,
  maxWidthClass: N = "sm:max-w-lg",
  className: T,
  children: M,
  onOpenChange: L,
  onConfirm: C
}) {
  const [y, _] = Me.useState(""), E = Me.useId(), R = h || v === "destructive";
  Me.useEffect(() => {
    t || _("");
  }, [t]);
  const D = y.trim(), A = D.length < p, $ = D.length > f, B = !w && !k && !A && !$, S = () => {
    B && C(D);
  }, z = (I) => {
    I.key === "Enter" && B && (I.preventDefault(), S());
  }, F = () => {
    o == null || o(), L == null || L(!1);
  };
  return /* @__PURE__ */ e(
    dr,
    {
      open: t,
      closeLabel: m,
      onClose: F,
      onCancel: F,
      onOpenChange: L,
      closeDisabled: !1,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ l(
        ws,
        {
          "data-slot": "reasoned-action-dialog",
          className: x("w-full max-w-lg", N, T),
          closeLabel: m,
          closeDisabled: !1,
          closable: !0,
          children: [
            /* @__PURE__ */ l(Ns, { children: [
              /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
                R ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(gn, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(cs, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(Ss, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              /* @__PURE__ */ e(Cs, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            M && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: M }),
            g && /* @__PURE__ */ e(
              Kr,
              {
                variant: "error",
                title: "操作失败",
                message: g,
                className: "my-1 text-xs"
              }
            ),
            /* @__PURE__ */ l("div", { className: "space-y-1.5 py-1", children: [
              /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ l("label", { htmlFor: E, className: "font-medium text-[var(--abc-fg)]", children: [
                  c,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ l(
                  "span",
                  {
                    className: x(
                      "font-mono text-[11px] tabular-nums",
                      $ ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
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
                kt,
                {
                  id: E,
                  "aria-label": "Reason",
                  value: y,
                  disabled: w,
                  placeholder: b,
                  onChange: (I) => _(I.target.value),
                  onKeyDown: z,
                  className: x(
                    "w-full text-xs",
                    $ && "border-red-500 focus-visible:ring-red-500/20"
                  )
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: x(
                    "text-[11px]",
                    $ ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: $ ? u : i
                }
              )
            ] }),
            /* @__PURE__ */ l(ks, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                Le,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: w,
                  onClick: () => L(!1),
                  children: s
                }
              ),
              /* @__PURE__ */ e(
                Le,
                {
                  type: "button",
                  variant: R ? "danger" : "primary",
                  size: "sm",
                  disabled: !B,
                  loading: w,
                  onClick: S,
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
function Ng({
  open: t,
  onClose: r,
  title: a,
  description: n,
  confirmLabel: s,
  cancelLabel: o = "Cancel",
  workingLabel: d = "Working…",
  reasonLabel: c = "Reason",
  reasonPlaceholder: b = "Record why this change is required",
  reasonHint: i = "8–512 characters. Stored in the operation audit.",
  reasonTooLongMessage: u = "Shorten the reason to 512 characters or fewer.",
  minReasonLength: m = 8,
  maxReasonLength: p = 512,
  destructive: f = !1,
  pending: h = !1,
  confirmDisabled: v = !1,
  error: w = null,
  width: k = 560,
  cascadeMode: g = "adjacent",
  children: N,
  onConfirm: T
}) {
  const [M, L] = Me.useState(""), C = Me.useId();
  Me.useEffect(() => {
    t || L("");
  }, [t]);
  const y = M.trim(), _ = y.length < m, E = y.length > p, R = !h && !v && !_ && !E, D = () => {
    R && T(y);
  };
  return /* @__PURE__ */ l(
    na,
    {
      open: t,
      onClose: r,
      width: k,
      cascadeMode: g,
      role: "dialog",
      children: [
        /* @__PURE__ */ l(Mf, { children: [
          /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
            f ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(gn, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(cs, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(Af, { className: "text-base font-semibold", children: a })
          ] }),
          n && /* @__PURE__ */ e(Rf, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ l(Df, { className: "space-y-4", children: [
          w && /* @__PURE__ */ e(
            Kr,
            {
              variant: "error",
              title: "操作失败",
              message: w,
              className: "text-xs"
            }
          ),
          N,
          /* @__PURE__ */ l("div", { className: "rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2", children: [
            /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ l("label", { htmlFor: C, className: "font-semibold text-[var(--abc-fg)]", children: [
                c,
                " ",
                /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ l(
                "span",
                {
                  className: x(
                    "font-mono text-[11px] tabular-nums",
                    E ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: [
                    M.length,
                    "/",
                    p
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e(
              kt,
              {
                id: C,
                "aria-label": "Reason",
                value: M,
                disabled: h,
                placeholder: b,
                onChange: (A) => L(A.target.value),
                className: x(
                  "w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs",
                  E && "border-red-500 focus-visible:ring-red-500/20"
                )
              }
            ),
            /* @__PURE__ */ e(
              "p",
              {
                className: x(
                  "text-[11px]",
                  E ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                ),
                children: E ? u : i
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l(Lf, { children: [
          /* @__PURE__ */ e(
            Le,
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
            Le,
            {
              type: "button",
              variant: f ? "danger" : "primary",
              size: "sm",
              disabled: !R,
              loading: h,
              onClick: D,
              children: h ? d : s
            }
          )
        ] })
      ]
    }
  );
}
function Vn(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function Ip(t, r) {
  const a = t.filter(
    (o) => !o.hideInTable && o.key !== "__abc_actions__" && o.key !== "__actions__" && o.key !== "__drag_handle__"
  ), n = a.map((o) => Vn(o.title)).join(","), s = r.map(
    (o) => a.map((d) => {
      const c = En(o, d.dataIndex ?? d.key), b = typeof d.type == "object" ? d.type.options : void 0, i = d.options ?? b;
      if (i && i.length > 0) {
        const u = i.find((m) => String(m.value) === String(c));
        if (u) return Vn(u.label);
      }
      return Vn(c);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function jo(t, r, a) {
  const n = Ip(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), d = document.createElement("a");
    d.href = o, d.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(o);
  }
  return n;
}
function _p(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : String(t).trim() !== "";
}
const Mp = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  treeData: n,
  multiple: s = !1,
  searchable: o = !1,
  placeholder: d,
  format: c,
  highlighted: b = !1,
  iconType: i = "filter",
  confirmText: u,
  value: m,
  onApply: p
}) => {
  const [f, h] = H(!1), v = s ? [] : r === "dateRange" ? {} : "", [w, k] = H(m ?? v), [g, N] = H("");
  we(() => {
    f && (k(m ?? (s ? [] : r === "dateRange" ? {} : "")), N(""));
  }, [f, m, s, r]);
  const T = _p(m), M = (y) => {
    p(y), h(!1);
  }, L = oe(() => {
    const y = (a ?? []).filter((E) => E.value !== ""), _ = g.trim().toLowerCase();
    return _ ? y.filter(
      (E) => String(E.label ?? "").toLowerCase().includes(_) || String(E.value ?? "").toLowerCase().includes(_)
    ) : y;
  }, [a, g]);
  return /* @__PURE__ */ e(
    Rs,
    {
      open: f,
      onOpenChange: h,
      placement: "bottomRight",
      panelClassName: "w-64 p-3",
      content: /* @__PURE__ */ l(
        "div",
        {
          "data-header-filter": "",
          onClick: (y) => y.stopPropagation(),
          className: "space-y-2.5 text-xs font-normal text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ l("div", { className: "font-semibold text-[var(--abc-fg-secondary)]", children: [
              "筛选：",
              t
            ] }),
            (() => {
              if (r === "select" && a) {
                if (s) {
                  const y = Array.isArray(w) ? w.map(String) : [], _ = o || L.length > 6 || !!g;
                  return /* @__PURE__ */ l("div", { className: "space-y-1.5", children: [
                    _ && /* @__PURE__ */ e(
                      kt,
                      {
                        size: "xs",
                        allowClear: !0,
                        placeholder: "搜索选项...",
                        value: g,
                        onChange: (E) => N(E.target.value)
                      }
                    ),
                    /* @__PURE__ */ e("div", { className: "max-h-48 space-y-0.5 overflow-y-auto rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 p-1", children: L.length === 0 ? /* @__PURE__ */ e("div", { className: "py-3 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : L.map((E) => {
                      const R = String(E.value), D = y.includes(R);
                      return /* @__PURE__ */ l(
                        "button",
                        {
                          type: "button",
                          disabled: E.disabled,
                          onClick: () => {
                            const A = D ? y.filter(($) => $ !== R) : [...y, R];
                            k(A);
                          },
                          className: x(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-xs)] px-2 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            D ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                          ),
                          children: [
                            /* @__PURE__ */ e("span", { className: "truncate", children: E.label }),
                            /* @__PURE__ */ e(
                              "span",
                              {
                                className: x(
                                  "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border",
                                  D ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                ),
                                children: D && /* @__PURE__ */ e(St, { className: "h-2.5 w-2.5 stroke-[3]" })
                              }
                            )
                          ]
                        },
                        R
                      );
                    }) })
                  ] });
                }
                return /* @__PURE__ */ e(
                  ir,
                  {
                    size: "xs",
                    allowClear: !0,
                    searchable: o,
                    placeholder: d || `选择${t}`,
                    options: a,
                    value: w ?? "",
                    onChange: (y) => {
                      const _ = y && typeof y == "object" && "target" in y ? y.target.value : y;
                      k(_);
                    }
                  }
                );
              }
              return r === "treeSelect" ? /* @__PURE__ */ e(
                Da,
                {
                  size: "xs",
                  allowClear: !0,
                  searchable: o,
                  multiple: s,
                  treeData: n ?? [],
                  placeholder: d || `选择${t}`,
                  value: w ?? (s ? [] : ""),
                  onChange: (y) => k(y)
                }
              ) : r === "date" || r === "datetimePicker" ? /* @__PURE__ */ e(
                La,
                {
                  size: "xs",
                  value: w ?? "",
                  format: c,
                  placeholder: d || `选择${t}`,
                  onChange: (y) => k(y)
                }
              ) : r === "dateRange" ? /* @__PURE__ */ e(
                Ba,
                {
                  size: "xs",
                  value: w && typeof w == "object" ? w : null,
                  format: c,
                  onChange: (y) => k(y)
                }
              ) : r === "number" ? /* @__PURE__ */ e(
                kn,
                {
                  size: "xs",
                  value: w === "" ? null : w,
                  placeholder: d || `输入${t}`,
                  onChange: (y) => k(y ?? "")
                }
              ) : /* @__PURE__ */ e(
                kt,
                {
                  size: "xs",
                  allowClear: !0,
                  placeholder: d || `输入${t}关键字`,
                  value: w ?? "",
                  onChange: (y) => k(y.target.value),
                  onKeyDown: (y) => {
                    y.key === "Enter" && (y.preventDefault(), M(w));
                  }
                }
              );
            })(),
            /* @__PURE__ */ l("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                Le,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    const y = s ? [] : r === "dateRange" ? {} : "";
                    k(y), M(y);
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(Le, { variant: "primary", size: "xs", onClick: () => M(w), children: u ?? (i === "search" ? "查询" : "筛选") })
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
          className: x(
            "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
            b ? "text-white/95 hover:bg-white/20 hover:text-white" : T ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: i === "search" ? /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(rn, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function Ap({
  columns: t,
  searchableFieldNames: r,
  settings: a,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: o,
  onToggleVisible: d,
  onSetAllVisible: c,
  onSetFixed: b,
  onSetWidth: i,
  onSetOrder: u,
  onSetSearchVisible: m,
  onReset: p
}) {
  const f = Be(o), [h, v] = H(!1), [w, k] = H(""), [g, N] = H("all"), [T, M] = H(null), L = ce(null), C = ce(!1);
  we(() => {
    if (!T) return;
    const S = (z) => {
      if (z.key === "Escape") {
        const F = L.current;
        M(null), L.current = null, C.current = !1, F && u(F);
      }
    };
    return document.addEventListener("keydown", S, !0), () => document.removeEventListener("keydown", S, !0);
  }, [T, u]);
  const y = oe(
    () => t.filter(
      (S) => !S.hideInTable && S.key !== "__abc_actions__" && S.key !== "__actions__" && S.key !== "__drag_handle__"
    ),
    [t]
  ), _ = oe(() => a.columnOrder.length === 0 ? y : [...y].sort((S, z) => {
    const F = a.columnOrder.indexOf(S.key), I = a.columnOrder.indexOf(z.key);
    return F === -1 && I === -1 ? 0 : F === -1 ? 1 : I === -1 ? -1 : F - I;
  }), [y, a.columnOrder]), E = (S) => S.key in a.columnFixed ? a.columnFixed[S.key] ?? void 0 : S.fixed, R = oe(() => {
    const S = w.trim().toLowerCase();
    return _.filter((z) => {
      if (S && !z.title.toLowerCase().includes(S) && !z.key.toLowerCase().includes(S))
        return !1;
      const F = a.hiddenKeys.includes(z.key), I = E(z);
      return g === "fixed" ? !!I : g === "hidden" ? F : !0;
    });
  }, [_, w, g, a.hiddenKeys, a.columnFixed]), D = oe(() => y.map((S) => S.key), [y]), A = oe(
    () => t.find((S) => S.key === "__abc_actions__"),
    [t]
  ), $ = !!(n || A), B = a.columnWidths.__abc_actions__ ?? (typeof (A == null ? void 0 : A.width) == "number" ? A.width : void 0) ?? s;
  return /* @__PURE__ */ e(
    Rs,
    {
      open: h,
      onOpenChange: v,
      placement: "bottomRight",
      motion: f,
      panelClassName: "w-[356px] overflow-hidden p-0",
      content: /* @__PURE__ */ l("div", { className: "text-xs select-none", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3.5 py-2.5", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "列设置与偏好" }),
            /* @__PURE__ */ l("span", { className: "rounded bg-[var(--abc-bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: [
              y.length,
              " 列"
            ] })
          ] }),
          /* @__PURE__ */ e(
            Le,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(lr, { className: "h-3 w-3" }),
              onClick: p,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ l("div", { className: "relative", children: [
            /* @__PURE__ */ e(Pt, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: w,
                onChange: (S) => k(S.target.value),
                placeholder: "搜索列名称或字段标识...",
                className: "h-7 w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] pr-7 pl-8 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:border-[var(--abc-primary)] focus:outline-none"
              }
            ),
            w && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空列搜索",
                onClick: () => k(""),
                className: "absolute top-1/2 right-2 -translate-y-1/2 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] p-0.5", children: [
              { key: "all", label: "全部" },
              { key: "fixed", label: "已固定" },
              { key: "hidden", label: "已隐藏" }
            ].map((S) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => N(S.key),
                className: x(
                  "rounded-[var(--abc-radius-xs)] px-2 py-0.5 transition-colors cursor-pointer",
                  g === S.key ? "bg-[var(--abc-bg-surface)] font-medium text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                ),
                children: S.label
              },
              S.key
            )) }),
            /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5", children: [
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
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: R.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : R.map((S) => {
          const z = !a.hiddenKeys.includes(S.key), F = E(S), I = Array.isArray(S.dataIndex) ? S.dataIndex.join(".") : String(S.dataIndex ?? S.key), O = r.has(I) || r.has(S.key), j = a.searchVisible[I] !== void 0 ? !!a.searchVisible[I] : a.searchVisible[S.key] !== void 0 ? !!a.searchVisible[S.key] : O, U = a.columnWidths[S.key] ?? (typeof S.width == "number" ? S.width : "");
          return /* @__PURE__ */ l(
            "div",
            {
              "data-dragging": T === S.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                L.current = _.map((K) => K.key), C.current = !1, M(S.key);
              },
              onDragOver: (K) => {
                if (!T || T === S.key) return;
                K.preventDefault();
                const q = _.map((V) => V.key), G = q.indexOf(T), W = q.indexOf(S.key);
                if (G < 0 || W < 0 || G === W) return;
                const X = K.currentTarget.getBoundingClientRect();
                if (X.height > 0 && (G < W && K.clientY < X.top + X.height * 0.35 || G > W && K.clientY > X.top + X.height * 0.65))
                  return;
                const se = [...q], [P] = se.splice(G, 1);
                se.splice(W, 0, P), C.current = !0, u(se);
              },
              onDrop: () => {
                if (T && T !== S.key && !C.current) {
                  const K = _.map((W) => W.key), q = K.indexOf(T), G = K.indexOf(S.key);
                  if (q >= 0 && G >= 0) {
                    const W = [...K], [X] = W.splice(q, 1);
                    W.splice(G, 0, X), u(W);
                  }
                }
                M(null), L.current = null, C.current = !1;
              },
              onDragEnd: () => {
                M(null), L.current = null, C.current = !1;
              },
              className: x(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                T === S.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ l("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(wn, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(Tr, { checked: z, onChange: () => d(S.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: x(
                        "truncate text-xs",
                        z ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: S.title
                    }
                  ),
                  F && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: F === "left" ? "左固" : "右固" })
                ] }),
                /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1", children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "number",
                      min: 64,
                      max: 800,
                      "aria-label": `${S.title} 列宽`,
                      placeholder: "宽px",
                      defaultValue: U,
                      onBlur: (K) => {
                        const q = parseInt(K.target.value, 10);
                        !Number.isNaN(q) && q >= 64 && i(S.key, q);
                      },
                      onKeyDown: (K) => {
                        if (K.key === "Enter") {
                          const q = parseInt(K.target.value, 10);
                          !Number.isNaN(q) && q >= 64 && i(S.key, q);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${S.key}_${U}`
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: j ? "从筛选条件中移除" : "加入筛选条件",
                      "aria-label": `切换 ${S.title} 筛选项显示`,
                      onClick: () => m(I, !j),
                      className: x(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        j ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Pt, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: F === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${S.title} 到左侧`,
                      onClick: () => b(S.key, F === "left" ? null : "left"),
                      className: x(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        F === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Jr, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: F === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${S.title} 到右侧`,
                      onClick: () => b(S.key, F === "right" ? null : "right"),
                      className: x(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        F === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Jr, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            S.key
          );
        }) }),
        $ && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
          /* @__PURE__ */ l("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("div", { className: "text-[11px] font-medium text-[var(--abc-fg)]", children: "操作列固定宽度" }),
            /* @__PURE__ */ e("div", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: "可在表头左缘拖拽或直接设置" })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex shrink-0 items-center gap-1", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "number",
                min: 80,
                max: 600,
                "aria-label": "操作 列宽",
                placeholder: "宽px",
                defaultValue: B,
                onBlur: (S) => {
                  const z = parseInt(S.target.value, 10);
                  !Number.isNaN(z) && z >= 80 && i("__abc_actions__", z);
                },
                onKeyDown: (S) => {
                  if (S.key === "Enter") {
                    const z = parseInt(S.target.value, 10);
                    !Number.isNaN(z) && z >= 80 && i("__abc_actions__", z);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${B}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(Yt, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: x(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            h ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(gu, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const Rp = ({ actions: t, maxInline: r = 3, autoFit: a = !0, align: n = "right" }) => {
  const s = ce(null), o = ce(null), [d, c] = H(null), b = t.map((h) => h.key).join("|");
  if (Na(() => {
    if (!a || t.length <= 1) {
      c(null);
      return;
    }
    const h = s.current, v = o.current;
    if (!h || !v) return;
    const w = () => {
      const g = h.clientWidth;
      if (g <= 0) {
        c(null);
        return;
      }
      const N = Array.from(v.children);
      if (N.length === 0) return;
      const T = 4, M = 30, L = N.map((E) => E.offsetWidth);
      if (L.reduce((E, R) => E + R, 0) + Math.max(0, L.length - 1) * T <= g) {
        c(Math.min(t.length, r));
        return;
      }
      let y = 0, _ = 0;
      for (let E = 0; E < L.length; E++) {
        const R = (E > 0 ? y + T : 0) + L[E];
        if (R + T + M <= g)
          y = R, _ = E + 1;
        else
          break;
      }
      c(Math.min(_, Math.max(1, r - 1)));
    };
    if (w(), typeof ResizeObserver > "u") return;
    const k = new ResizeObserver(() => w());
    return k.observe(h), () => k.disconnect();
  }, [a, b, t.length, r]), t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const i = (h) => /* @__PURE__ */ e(
    Le,
    {
      variant: h.variant ?? "text",
      size: "xs",
      disabled: h.disabled,
      title: h.title,
      icon: h.icon,
      onClick: h.onClick,
      className: x(
        h.danger && "text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]",
        h.className
      ),
      children: h.label
    },
    h.key
  ), u = t.length <= r ? t.length : Math.max(1, r - 1), m = d ?? u, p = t.slice(0, m), f = t.slice(m);
  return /* @__PURE__ */ l(
    "div",
    {
      ref: s,
      className: x(
        "relative flex w-full min-w-0 items-center gap-1 whitespace-nowrap",
        n === "right" ? "justify-end" : "justify-start"
      ),
      children: [
        a && t.length > 1 && /* @__PURE__ */ e(
          "div",
          {
            ref: o,
            "aria-hidden": "true",
            className: "pointer-events-none invisible fixed -top-[9999px] -left-[9999px] flex items-center gap-1 whitespace-nowrap",
            children: t.map(i)
          }
        ),
        p.map(i),
        f.length > 0 && /* @__PURE__ */ e(
          Ra,
          {
            placement: "bottomRight",
            items: f.map((h) => ({
              key: h.key,
              label: h.label ?? h.title ?? h.key,
              icon: h.icon,
              danger: h.danger,
              disabled: h.disabled,
              onClick: h.onClick
            })),
            children: /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "更多操作",
                className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(us, { className: "h-3.5 w-3.5" })
              }
            )
          }
        )
      ]
    }
  );
};
function Dp({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  extraContent: n,
  onBatchDelete: s,
  onClear: o,
  motion: d
}) {
  const c = Be(d);
  return t.length === 0 ? null : /* @__PURE__ */ l(
    "div",
    {
      role: "region",
      "aria-label": "批量操作栏",
      "data-motion": c,
      className: x(
        "fixed bottom-6 left-1/2 z-40 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--abc-border-strong)] bg-[var(--abc-bg-elevated)]/95 px-4 py-2 shadow-[var(--abc-shadow-modal)] backdrop-blur-md",
        c !== "none" && "abc-floating-bar-in"
      ),
      children: [
        /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]", children: [
          "已选择 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-bold tabular-nums", children: t.length }),
          " 项"
        ] }),
        /* @__PURE__ */ e("span", { className: "h-4 w-px bg-[var(--abc-border)]" }),
        /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          n,
          a.map((b) => /* @__PURE__ */ e(
            Le,
            {
              variant: b.variant ?? b.type ?? "secondary",
              size: "xs",
              icon: b.icon,
              className: "rounded-full",
              onClick: () => b.onClick(t, r),
              children: b.label
            },
            b.key
          )),
          s && /* @__PURE__ */ l(
            Le,
            {
              variant: "danger",
              size: "xs",
              icon: /* @__PURE__ */ e(mr, { className: "h-3 w-3" }),
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
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-label": "取消多选",
              onClick: o,
              className: "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: [
                /* @__PURE__ */ e("span", { children: "取消选择" }),
                /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function kg(t, r) {
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
const Fo = 3, Lp = ({
  searchFields: t,
  query: r,
  onQueryChange: a,
  onSearch: n,
  onReset: s,
  renderSearchExtra: o,
  isSearchVisible: d = () => !0,
  defaultCollapsed: c = !0,
  collapsed: b,
  onCollapseChange: i,
  className: u
}) => {
  const m = b !== void 0, [p, f] = H(!1), [h, v] = H(c), w = m ? b : h, k = () => {
    const y = !w;
    m || v(y), i == null || i(y);
  }, g = o ? o({ query: r, onQueryChange: a, isSearchVisible: d }) : null, N = !!g, { firstRowKeys: T, hasExtraInFirstRow: M, canCollapse: L } = oe(() => {
    let y = 0;
    const _ = /* @__PURE__ */ new Set();
    let E = !1;
    for (const D of t) {
      const A = D.span === 2 ? 2 : 1;
      if (y + A <= Fo)
        y += A, _.add(D.key);
      else
        break;
    }
    N && y < Fo && (E = !0, y += 1);
    const R = _.size < t.length || N && !E;
    return {
      firstRowKeys: _,
      hasExtraInFirstRow: E,
      canCollapse: R
    };
  }, [t, N]);
  if (!t || t.length === 0)
    return null;
  const C = (y) => {
    const _ = r[y.key] ?? "";
    switch (y.type) {
      case "select":
        return /* @__PURE__ */ e(
          ir,
          {
            value: _,
            multiple: y.multiple,
            searchable: y.searchable,
            options: y.options || [],
            placeholder: y.placeholder || `请选择${y.label}`,
            clearable: y.clearable !== !1,
            onChange: (E) => {
              var R;
              return a(y.key, ((R = E == null ? void 0 : E.target) == null ? void 0 : R.value) ?? E);
            }
          }
        );
      case "date":
        return /* @__PURE__ */ e(
          La,
          {
            value: _,
            onChange: (E) => a(y.key, E),
            placeholder: y.placeholder || `请选择${y.label}`,
            format: y.format
          }
        );
      case "datetimePicker":
        return /* @__PURE__ */ e(
          kt,
          {
            type: "datetime-local",
            value: _ ? String(_).replace(" ", "T").slice(0, 16) : "",
            onChange: (E) => {
              const R = E.target.value;
              a(y.key, R ? `${R.replace("T", " ")}:00` : "");
            },
            onKeyDown: (E) => E.key === "Enter" && n(),
            placeholder: y.placeholder,
            clearable: y.clearable !== !1
          }
        );
      case "dateRange": {
        const E = r[y.key] || {};
        return /* @__PURE__ */ e(
          Ba,
          {
            value: E,
            onChange: (R) => a(y.key, R),
            placeholder: y.placeholder ? [y.placeholder, y.placeholder] : ["开始日期", "结束日期"],
            format: y.format
          }
        );
      }
      case "input":
      default:
        return /* @__PURE__ */ e(
          kt,
          {
            value: _,
            onChange: (E) => a(y.key, E.target.value),
            onKeyDown: (E) => E.key === "Enter" && n(),
            placeholder: y.placeholder || `请输入${y.label}`,
            clearable: y.clearable !== !1
          }
        );
    }
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: x(
        "rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-2xs transition-all",
        u
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选条件" }),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => f((y) => !y),
              className: "inline-flex items-center text-xs font-medium text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
              children: [
                /* @__PURE__ */ e("span", { children: p ? "展开" : "收起" }),
                p ? /* @__PURE__ */ e(Xt, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(an, { className: "ml-0.5 h-3.5 w-3.5" })
              ]
            }
          )
        ] }),
        !p && /* @__PURE__ */ l("div", { className: "mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4", children: [
          t.map((y) => {
            const _ = !w || !L || T.has(y.key);
            return /* @__PURE__ */ l(
              "div",
              {
                className: x(
                  y.span === 2 ? "md:col-span-2" : "flex flex-col justify-end",
                  !_ && "hidden"
                ),
                children: [
                  /* @__PURE__ */ e("label", { className: "mb-1.5 block text-xs font-semibold tracking-wide text-[var(--abc-fg-secondary)]", children: y.label }),
                  C(y)
                ]
              },
              y.key
            );
          }),
          g && /* @__PURE__ */ e(
            "div",
            {
              className: x(
                "flex flex-col justify-end",
                w && L && !M && "hidden"
              ),
              children: g
            }
          ),
          /* @__PURE__ */ l("div", { className: "flex items-end gap-2 md:col-start-4 md:justify-end", children: [
            /* @__PURE__ */ e(
              Le,
              {
                variant: "primary",
                size: "sm",
                onClick: n,
                icon: /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }),
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
                icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "重置"
              }
            ),
            L && /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                onClick: k,
                className: "ml-1 inline-flex items-center justify-center px-1 py-2 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
                children: [
                  /* @__PURE__ */ e("span", { children: w ? "展开" : "收起" }),
                  w ? /* @__PURE__ */ e(Xt, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(an, { className: "ml-0.5 h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Sg = Lp, oi = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
], Bp = {};
function Oo(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : !0;
}
function Pp(t, r) {
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
function zp({ ctx: t }) {
  const {
    title: r,
    columns: a,
    showExport: n,
    showImport: s,
    onImport: o,
    showBatchDelete: d,
    columnSettingsEnabled: c,
    toolbarButtons: b,
    onDeleteRecords: i,
    toast: u,
    resolvedMotion: m,
    checkPermission: p,
    resolvedApi: f,
    settings: h,
    toggleColumnVisible: v,
    setAllColumnsVisible: w,
    setColumnFixed: k,
    setColumnWidth: g,
    setColumnOrder: N,
    setSearchFieldVisible: T,
    setDensity: M,
    resetSettings: L,
    hasRemoteSource: C,
    isClientFilter: y,
    setIsClientFilter: _,
    headerFilterMode: E,
    updateHeaderFilterMode: R,
    extraFilterCollapsed: D,
    setExtraFilterCollapsed: A,
    quickKeyword: $,
    setQuickKeyword: B,
    setCurrent: S,
    exporting: z,
    loading: F,
    selectedKeys: I,
    isFullScreen: O,
    autoRefreshPopoverOpen: j,
    setAutoRefreshPopoverOpen: U,
    showAutoRefreshControl: K,
    autoRefreshEnabled: q,
    setAutoRefreshEnabled: G,
    autoRefreshInterval: W,
    setAutoRefreshInterval: X,
    searchableFieldNames: se,
    allSearchFields: P,
    visibleSearchFields: V,
    extraFilterFields: de,
    canBatchDelete: ke,
    effectiveExportable: te,
    canOpenAdd: fe,
    toggleFullScreen: ve,
    fetchServerData: ue,
    updateSelectedState: Ne,
    resetAllFilters: Ie,
    openCreateModal: Ee,
    handleBatchDelete: _e,
    selectionEnabled: Z,
    hasAnyRowAction: re,
    defaultActionColWidth: Pe,
    handleExportAction: Ye,
    submitSearch: Xe,
    renderSearchControl: rt,
    effectiveShowClientFilterSwitch: ct,
    currentIntervalLabel: nt,
    showHeaderFilterToggle: Dt,
    showTopPageHeader: be,
    resolvedToolbarExtra: Te,
    resolvedAddText: pe
  } = t;
  return /* @__PURE__ */ l(Ue, { children: [
    E && D && de.length > 0 && /* @__PURE__ */ e("div", { className: "border-b border-[var(--abc-border)] px-4 py-2.5", children: /* @__PURE__ */ l("div", { className: "flex flex-wrap items-end gap-3", children: [
      de.map((xe) => /* @__PURE__ */ l("div", { className: "w-48", children: [
        /* @__PURE__ */ e("div", { className: "mb-1 text-[11px] text-[var(--abc-fg-muted)]", children: xe.label }),
        rt(xe)
      ] }, xe.key)),
      /* @__PURE__ */ e(
        Le,
        {
          variant: "primary",
          size: "sm",
          onClick: () => Xe(),
          icon: /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }),
          children: "查询"
        }
      )
    ] }) }),
    /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
      /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-2", children: [
        !be && r && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: r }),
        fe && /* @__PURE__ */ e(
          Le,
          {
            variant: "primary",
            size: "sm",
            icon: /* @__PURE__ */ e(xn, { className: "h-3.5 w-3.5" }),
            onClick: () => void Ee(),
            children: pe
          }
        ),
        d && ke && (i || (f == null ? void 0 : f.delete)) && /* @__PURE__ */ e(
          Le,
          {
            variant: "danger",
            size: "sm",
            disabled: I.length === 0,
            icon: /* @__PURE__ */ e(mr, { className: "h-3.5 w-3.5" }),
            onClick: () => void _e(I),
            children: "批量删除"
          }
        ),
        n && te && /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            loading: z,
            icon: /* @__PURE__ */ e(Gn, { className: "h-3.5 w-3.5" }),
            onClick: () => void Ye(),
            children: "导出"
          }
        ),
        s && /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ e(hn, { className: "h-3.5 w-3.5" }),
            onClick: () => void (o == null ? void 0 : o()),
            children: "导入"
          }
        ),
        b.filter((xe) => p(xe.permission)).map((xe) => /* @__PURE__ */ e(
          Le,
          {
            variant: xe.variant ?? xe.type ?? "secondary",
            size: "sm",
            icon: xe.icon,
            onClick: xe.onClick,
            children: xe.label
          },
          xe.key
        )),
        Te,
        E && de.length > 0 && /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => A((xe) => !xe),
            children: D ? "收起筛选" : "展开筛选"
          }
        ),
        E && V.length > 0 && /* @__PURE__ */ e(
          Le,
          {
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
            onClick: Ie,
            children: "重置"
          }
        ),
        Z && I.length > 0 && /* @__PURE__ */ l("div", { className: "inline-flex items-center gap-2 rounded-full bg-[var(--abc-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--abc-primary)]", children: [
          /* @__PURE__ */ l("span", { children: [
            "已选择 ",
            I.length,
            " 项"
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => Ne([], []),
              className: "hover:underline cursor-pointer",
              children: "取消"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-1.5", children: [
        y && P.length === 0 && /* @__PURE__ */ e(
          kt,
          {
            size: "xs",
            allowClear: !0,
            prefix: /* @__PURE__ */ e(rn, { className: "h-3 w-3" }),
            placeholder: "当前数据即时检索（支持拼音）...",
            value: $,
            onChange: (xe) => {
              B(xe.target.value), S(1);
            },
            wrapperClassName: "w-52"
          }
        ),
        K && C && /* @__PURE__ */ l("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
          /* @__PURE__ */ e(
            Yt,
            {
              content: q ? `自动刷新运行中：每 ${nt} 轮询（点击暂停）` : "点击开启自动刷新",
              children: /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  "aria-label": "切换定时自动刷新",
                  onClick: () => G((xe) => !xe),
                  className: x(
                    "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                    q ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      tn,
                      {
                        className: x("h-3.5 w-3.5", q && "animate-pulse")
                      }
                    ),
                    q && /* @__PURE__ */ e("span", { children: nt })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ e(
            Rs,
            {
              open: j,
              onOpenChange: U,
              placement: "bottomRight",
              panelClassName: "w-44 p-2.5",
              content: /* @__PURE__ */ l("div", { className: "space-y-2 text-xs text-[var(--abc-fg)]", children: [
                /* @__PURE__ */ l("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] pb-2", children: [
                  /* @__PURE__ */ e("span", { className: "font-semibold", children: "自动刷新" }),
                  /* @__PURE__ */ e(
                    or,
                    {
                      size: "xs",
                      checked: q,
                      onChange: (xe) => G(xe)
                    }
                  )
                ] }),
                /* @__PURE__ */ l("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ e("div", { className: "px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "刷新间隔" }),
                  oi.map((xe) => /* @__PURE__ */ l(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        X(xe.key), G(!0), U(!1);
                      },
                      className: x(
                        "flex w-full items-center justify-between rounded-[var(--abc-radius-xs)] px-2 py-1 text-left text-xs transition-colors cursor-pointer",
                        W === xe.key ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: [
                        /* @__PURE__ */ e("span", { children: xe.label }),
                        W === xe.key && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    },
                    xe.key
                  ))
                ] })
              ] }),
              children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "选择轮询频率",
                  className: "inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Xt, { className: "h-3 w-3" })
                }
              )
            }
          )
        ] }),
        ct && /* @__PURE__ */ e(
          Yt,
          {
            content: y ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
            children: /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                "aria-pressed": y,
                "aria-label": "切换前端本地筛选模式",
                onClick: () => {
                  const xe = !y;
                  _(xe), S(1), u.info(
                    xe ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式"
                  );
                },
                className: x(
                  "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                  y ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ e(rn, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: y ? "前端筛选" : "接口筛选" })
                ]
              }
            )
          }
        ),
        Dt && /* @__PURE__ */ e(Yt, { content: E ? "关闭表头内联筛选" : "开启表头内联筛选", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "切换表头内联筛选",
            onClick: () => R(!E),
            className: x(
              "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
              E ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(vu, { className: "h-3.5 w-3.5" })
          }
        ) }),
        te && !n && /* @__PURE__ */ e(Yt, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "导出数据",
            onClick: () => void Ye(),
            className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Gn, { className: "h-3.5 w-3.5" })
          }
        ) }),
        C && /* @__PURE__ */ e(Yt, { content: "刷新表格数据", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "刷新数据",
            onClick: () => void ue(),
            className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Fr, { className: x("h-3.5 w-3.5", F && "animate-spin") })
          }
        ) }),
        /* @__PURE__ */ e(
          Ra,
          {
            placement: "bottomRight",
            items: [
              {
                key: "comfortable",
                label: /* @__PURE__ */ l("span", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ e("span", { children: "宽松" }),
                  h.density === "comfortable" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                ] }),
                onClick: () => M("comfortable")
              },
              {
                key: "default",
                label: /* @__PURE__ */ l("span", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ e("span", { children: "默认" }),
                  h.density === "default" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                ] }),
                onClick: () => M("default")
              },
              {
                key: "compact",
                label: /* @__PURE__ */ l("span", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ e("span", { children: "紧凑" }),
                  h.density === "compact" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                ] }),
                onClick: () => M("compact")
              }
            ],
            children: /* @__PURE__ */ e(Yt, { content: "表格行密度", children: /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "表格行密度",
                className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(xu, { className: "h-3.5 w-3.5" })
              }
            ) })
          }
        ),
        /* @__PURE__ */ e(Yt, { content: O ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": O ? "退出全屏" : "全屏展示",
            onClick: ve,
            className: x(
              "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
              O ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: O ? /* @__PURE__ */ e(ls, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5" })
          }
        ) }),
        c && /* @__PURE__ */ e(
          Ap,
          {
            columns: a,
            searchableFieldNames: se,
            settings: h,
            hasActionColumn: re,
            defaultActionWidth: Pe,
            motion: m,
            onToggleVisible: v,
            onSetAllVisible: w,
            onSetFixed: k,
            onSetWidth: g,
            onSetOrder: N,
            onSetSearchVisible: T,
            onReset: L
          }
        )
      ] })
    ] })
  ] });
}
function jp({ ctx: t }) {
  const {
    columns: r,
    formSchema: a,
    dialogTitle: n,
    dialogSize: s,
    formLayout: o,
    draftConfig: d,
    apiProp: c,
    viewTitle: b,
    viewSize: i,
    renderViewExtra: u,
    renderViewFooter: m,
    formContainer: p,
    renderBatchActions: f,
    renderFormExtra: h,
    renderCustomForm: v,
    onDeleteRecords: w,
    toast: k,
    resolvedMotion: g,
    resolvedApi: N,
    hasRemoteSource: T,
    permittedBatchActions: M,
    selectedKeys: L,
    viewingRecord: C,
    setViewingRecord: y,
    viewLoading: _,
    resolvedFormFields: E,
    buildDefaultFormValues: R,
    form: D,
    draftEnabled: A,
    autoRestoreDraft: $,
    draft: B,
    modalOpen: S,
    setModalOpen: z,
    isEdit: F,
    editingRecord: I,
    formSubmitting: O,
    formDetailLoading: j,
    formError: U,
    showDraftBanner: K,
    setShowDraftBanner: q,
    canBatchDelete: G,
    canOpenEdit: W,
    fetchServerData: X,
    updateSelectedState: se,
    selectedRows: P,
    openEditModal: V,
    handleFormSubmit: de,
    handleBatchDelete: ke,
    selectionEnabled: te,
    effectiveFormColumns: fe
  } = t;
  return /* @__PURE__ */ l(Ue, { children: [
    te && L.length > 0 && /* @__PURE__ */ e(
      Dp,
      {
        selectedKeys: L,
        selectedRows: P,
        batchActions: M,
        extraContent: f == null ? void 0 : f(L, P),
        motion: g,
        onBatchDelete: G && (w || N != null && N.delete) ? () => void ke(L) : void 0,
        onClear: () => se([], [])
      }
    ),
    /* @__PURE__ */ e(
      Cp,
      {
        open: !!C,
        onClose: () => y(null),
        record: C,
        columns: r,
        viewTitle: b ?? (c ? "详情" : "记录详情"),
        viewSize: i,
        viewLoading: _,
        canEdit: W,
        onEditRecord: (ve) => void V(ve),
        renderViewExtra: u,
        renderViewFooter: m
      }
    ),
    /* @__PURE__ */ e(
      Sp,
      {
        open: S,
        onClose: () => z(!1),
        isEdit: F,
        currentRecord: I,
        container: p,
        dialogTitle: n ?? (c ? { add: "新增", edit: "编辑" } : { add: "新建记录", edit: "编辑记录" }),
        dialogSize: s,
        formLayout: o,
        formColumns: fe,
        formFields: E,
        form: D,
        formSchema: a,
        columns: r,
        formSubmitting: O,
        formDetailLoading: j,
        formError: U,
        onSubmit: de,
        draftEnabled: A,
        showDraftButton: !!(d != null && d.showDraftButton && A),
        showDraftBanner: K,
        draftBannerMode: $ ? "auto-restored" : "prompt",
        onSaveDraft: A ? () => {
          B.saveDraft(D.getValues()), k.success("草稿已保存");
        } : void 0,
        onRestoreDraft: () => {
          const ve = B.readDraft();
          ve && D.reset({ ...R(), ...ve }), q(!1);
        },
        onDiscardDraft: () => {
          B.clearDraft(), $ && D.reset(R()), q(!1);
        },
        submitButtonText: c ? "保存" : "确认提交",
        renderFormExtra: h,
        renderCustomForm: v,
        onSuccessFetch: () => {
          T && X();
        }
      }
    )
  ] });
}
function Fp({ ctx: t }) {
  const {
    title: r,
    subTitle: a,
    searchVariant: n,
    renderSearchExtra: s,
    settings: o,
    headerFilterMode: d,
    searchPanelExpanded: c,
    setSearchPanelExpanded: b,
    searchFieldsCollapsed: i,
    setSearchFieldsCollapsed: u,
    searchInputs: m,
    searchCardMeasureRef: p,
    visibleSearchFields: f,
    searchCollapseMeta: h,
    displayedSearchFields: v,
    activeFilterCount: w,
    resetAllFilters: k,
    updateSearchInput: g,
    submitSearch: N,
    renderSearchControl: T,
    showTopPageHeader: M,
    resolvedHeaderExtra: L,
    resolvedCardExtra: C
  } = t;
  return /* @__PURE__ */ l(Ue, { children: [
    M && (r || a || L) && /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ l("div", { children: [
        r && /* @__PURE__ */ e("h2", { className: "text-lg font-bold tracking-tight text-[var(--abc-fg)]", children: r }),
        a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
      ] }),
      L && /* @__PURE__ */ e("div", { children: L })
    ] }),
    C,
    n === "toolbar" && (f.length > 0 || !!s) && !d && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ l(
      "form",
      {
        onSubmit: (y) => {
          y.preventDefault(), N();
        },
        className: "flex flex-wrap items-center gap-2.5",
        children: [
          v.map((y) => /* @__PURE__ */ e("div", { className: "flex items-center", children: T(y, {
            input: y.span === 2 ? "w-80 sm:w-96" : "w-72 sm:w-80",
            select: "w-40"
          }) }, y.key)),
          s == null ? void 0 : s({
            query: m,
            onQueryChange: g,
            isSearchVisible: (y) => o.searchVisible[y] !== !1
          }),
          /* @__PURE__ */ e(
            Le,
            {
              size: "sm",
              type: "submit",
              variant: "primary",
              icon: /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }),
              children: "搜索"
            }
          ),
          /* @__PURE__ */ e(
            Le,
            {
              size: "sm",
              type: "button",
              variant: "secondary",
              icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
              onClick: k,
              children: "重置"
            }
          ),
          w > 0 && /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
            "已生效 ",
            w,
            " 项"
          ] })
        ]
      }
    ) }),
    n === "card" && (f.length > 0 || !!s) && !d && /* @__PURE__ */ e("div", { ref: p, children: /* @__PURE__ */ l(un, { padding: "none", children: [
      /* @__PURE__ */ l("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
        /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(rn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选条件" }),
          w > 0 && /* @__PURE__ */ l("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
            "已生效 ",
            w,
            " 项",
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "一键清空已生效筛选",
                onClick: k,
                className: "ml-0.5 hover:underline cursor-pointer",
                children: "清空"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            "aria-expanded": c,
            onClick: () => b((y) => !y),
            className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer select-none",
            children: [
              /* @__PURE__ */ e("span", { children: c ? "收起" : "展开" }),
              c ? /* @__PURE__ */ e(an, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Xt, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": c, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ l(
        "form",
        {
          onSubmit: (y) => {
            y.preventDefault(), N();
          },
          className: "grid grid-cols-1 items-end gap-3.5 p-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [
            v.map((y) => /* @__PURE__ */ e(
              Ds,
              {
                label: y.label,
                className: y.span === 2 || y.type === "dateRange" ? "sm:col-span-2" : void 0,
                children: T(y)
              },
              y.key
            )),
            (!i || !h.canCollapse || h.extraFitsFirstRow) && (s == null ? void 0 : s({
              query: m,
              onQueryChange: g,
              isSearchVisible: (y) => o.searchVisible[y] !== !1
            })),
            /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-2 lg:col-start-4 lg:justify-end", children: [
              /* @__PURE__ */ e(
                Le,
                {
                  size: "sm",
                  type: "submit",
                  variant: "primary",
                  icon: /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5" }),
                  children: "搜索"
                }
              ),
              /* @__PURE__ */ e(
                Le,
                {
                  size: "sm",
                  type: "button",
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }),
                  onClick: k,
                  children: "重置"
                }
              ),
              h.canCollapse && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: () => u((y) => !y),
                  className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:underline cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ e("span", { children: i ? `展开 (${h.hiddenCount})` : "收起" }),
                    i ? /* @__PURE__ */ e(Xt, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(an, { className: "h-3.5 w-3.5" })
                  ]
                }
              )
            ] })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
function Op(t, r) {
  var Bt;
  const {
    title: a,
    storageKey: n,
    subTitle: s,
    apiProp: o,
    defaultQuery: d,
    rowKey: c,
    onSearchChange: b,
    onSearchSubmit: i,
    controlledHeaderFilterMode: u,
    propShowHeaderFilterToggle: m,
    showClientFilterSwitch: p,
    onExport: f,
    formColumns: h,
    addButtonText: v,
    rowActions: w,
    actionButtons: k,
    actionColumnWidth: g,
    maxInlineActions: N,
    rowSelection: T,
    showRowSelection: M,
    batchActions: L,
    renderBatchActions: C,
    treeData: y,
    expandable: _,
    sortable: E,
    toolbarExtra: R,
    renderToolbarExtra: D,
    headerExtra: A,
    renderExtra: $,
    cardExtra: B,
    renderCardExtra: S,
    onDeleteRecords: z,
    toast: F,
    checkPermission: I,
    resolvedApi: O,
    apiRef: j,
    settings: U,
    hasRemoteSource: K,
    isClientFilter: q,
    searchInputs: G,
    setSearchInputs: W,
    searchInputsRef: X,
    appliedFilters: se,
    setAppliedFilters: P,
    current: V,
    setCurrent: de,
    pageSize: ke,
    setExporting: te,
    remoteRows: fe,
    childrenData: ve,
    childrenLoading: ue,
    childrenError: Ne,
    autoRefreshInterval: Ie,
    allSearchFields: Ee,
    resolvedFormFields: _e,
    canBatchDelete: Z,
    effectiveViewable: re,
    canOpenEdit: Pe,
    canOpenDelete: Ye,
    resolveRowKey: Xe
  } = t, {
    fetchServerData: rt,
    visibleColumns: ct,
    processedClientRows: nt,
    openEditModal: Dt,
    openViewModal: be,
    handleSingleDelete: Te,
    handleExpandRow: pe
  } = r, xe = oe(
    () => L.filter((le) => I(le.permission)),
    [L, I]
  ), dt = T ?? M ?? !!(Z && (z || O != null && O.delete) || xe.length > 0 || C), We = N ?? (k.length > 0 && w.length === 0 ? 6 : 3), $e = re || Pe || Ye || w.length > 0 || k.length > 0, Qe = g !== void 0 ? k.length > 0 ? Math.max(g, 220) : g : k.length > 0 || o ? 220 : re || w.length > 0 ? 184 : 136, lt = k.length > 0 || o ? "left" : "right", Lt = oe(() => {
    const le = [...ct];
    return E != null && E.enabled && le.unshift({
      key: "__drag_handle__",
      title: "排序",
      width: 68,
      align: "center",
      sortable: !1,
      sorter: !1,
      render: () => /* @__PURE__ */ e(wn, { className: "mx-auto h-4 w-4 cursor-grab text-[var(--abc-fg-placeholder)]" })
    }), $e && le.push({
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: Qe,
      align: lt,
      sortable: !1,
      sorter: !1,
      render: (Ze, st, bt) => {
        var Ft;
        const ot = [];
        let Mt = !1, Ut = !1;
        re && ot.push({
          key: "__view__",
          label: o ? "查看" : "详情",
          icon: /* @__PURE__ */ e(ta, { className: "h-3 w-3" }),
          onClick: () => void be(st)
        });
        for (const Oe of k) {
          if (Oe.key === "edit" && !Oe.onClick) {
            Mt = !0, Pe && ot.push({
              key: "__edit__",
              label: Oe.label ?? "编辑",
              icon: /* @__PURE__ */ e(Za, { className: "h-3 w-3" }),
              onClick: () => void Dt(st)
            });
            continue;
          }
          if (Oe.key === "delete" && !Oe.onClick) {
            Ut = !0, Ye && ot.push({
              key: "__delete__",
              label: Oe.label ?? "删除",
              icon: /* @__PURE__ */ e(mr, { className: "h-3 w-3" }),
              danger: !0,
              onClick: () => void Te(st, bt)
            });
            continue;
          }
          if (Oe.key === "edit" && (Mt = !0), Oe.key === "delete" && (Ut = !0), !(typeof Oe.show == "function" ? Oe.show(st) : Oe.show !== !1) || !I(Oe.permission)) continue;
          const er = typeof Oe.disabled == "function" ? Oe.disabled(st) : !!Oe.disabled, fr = typeof Oe.title == "function" ? Oe.title(st) : Oe.title, wr = typeof Oe.icon == "string" ? /* @__PURE__ */ e(gr, { name: Oe.icon, size: 13 }) : Oe.icon;
          ot.push({
            key: Oe.key,
            label: Oe.label,
            icon: wr,
            variant: Oe.variant ?? Oe.type ?? "text",
            danger: (Oe.variant ?? Oe.type) === "danger",
            disabled: er,
            title: fr,
            className: Oe.className,
            onClick: async () => {
              var ye;
              if (er) return;
              const ie = (ye = Oe.onClick) == null ? void 0 : ye.call(Oe, st);
              ie && typeof ie.then == "function" && (await ie, K && rt());
            }
          });
        }
        !Mt && Pe && k.length === 0 && ot.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Za, { className: "h-3 w-3" }),
          onClick: () => void Dt(st)
        });
        for (const Oe of w)
          I(Oe.permission) && ((Ft = Oe.hidden) != null && Ft.call(Oe, st) || ot.push({
            key: Oe.key,
            label: Oe.label,
            icon: Oe.icon,
            danger: Oe.danger,
            onClick: async () => {
              const sr = Oe.onClick(st);
              sr && typeof sr.then == "function" && (await sr, K && rt());
            }
          }));
        return !Mt && Pe && k.length > 0 && ot.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Za, { className: "h-3 w-3" }),
          onClick: () => void Dt(st)
        }), !Ut && Ye && ot.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(mr, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => void Te(st, bt)
        }), /* @__PURE__ */ e(
          Rp,
          {
            actions: ot,
            maxInline: We,
            autoFit: N === void 0,
            align: lt
          }
        );
      }
    }), le;
  }, [
    ct,
    E == null ? void 0 : E.enabled,
    $e,
    Qe,
    lt,
    re,
    o,
    k,
    Pe,
    Ye,
    w,
    We,
    N,
    I,
    be,
    Dt,
    Te,
    K,
    rt
  ]), vt = oe(() => {
    if (!_ && !(O != null && O.children)) return;
    const le = (Ze, st, bt = 0, ot = !0) => {
      if (_ != null && _.expandedRowRender)
        return _.expandedRowRender(Ze, st, bt, ot);
      const Mt = Xe(Ze, st);
      if (ue[Mt])
        return /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "加载中..." });
      if (Ne[Mt])
        return /* @__PURE__ */ l("div", { className: "py-5 text-center text-xs text-[var(--abc-danger)]", children: [
          /* @__PURE__ */ e("span", { children: Ne[Mt] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => void pe(!0, Ze),
              className: "ml-2 text-[var(--abc-primary)] hover:underline cursor-pointer",
              children: "重试"
            }
          )
        ] });
      const Ut = ve[Mt] || [];
      return Ut.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无子项数据" }) : /* @__PURE__ */ e(
        Gl,
        {
          columns: ct,
          data: Ut,
          rowKey: c,
          density: U.density
        }
      );
    };
    return {
      ..._,
      rowExpandable: (_ == null ? void 0 : _.rowExpandable) ?? (O != null && O.children ? () => !0 : void 0),
      expandedRowRender: y ? void 0 : O != null && O.children || _ != null && _.expandedRowRender ? le : void 0,
      onExpand: pe
    };
  }, [
    _,
    O == null ? void 0 : O.children,
    y,
    Xe,
    ue,
    Ne,
    ve,
    pe,
    ct,
    c,
    U.density
  ]), mt = async () => {
    var st;
    const le = q || !K ? nt : fe;
    if (o) {
      te(!0);
      try {
        const bt = Ja({
          ...d,
          ...se,
          pageNum: V,
          pageSize: ke
        });
        if (f)
          await f(bt);
        else if ((st = j.current) != null && st.export)
          await j.current.export(bt);
        else {
          const ot = typeof a == "string" && a.trim() ? a.trim() : n || "table-export";
          jo(ot, ct, le);
        }
        F.success("导出成功");
      } catch (bt) {
        F.error((bt == null ? void 0 : bt.message) || "导出失败");
      } finally {
        te(!1);
      }
      return;
    }
    if (f) {
      await f(le);
      return;
    }
    const Ze = typeof a == "string" && a.trim() ? a.trim() : n || "table-export";
    jo(Ze, ct, le), F.success(`已导出 ${le.length} 条记录`);
  }, It = ge(
    (le, Ze) => {
      W((st) => {
        const bt = { ...st, [le]: Ze };
        return X.current = bt, b == null || b(bt), bt;
      });
    },
    [b]
  ), at = ge(
    (le) => {
      const Ze = { ...X.current, ...le || {} };
      X.current = Ze, W(Ze), P(Ze), de(1), i == null || i(Ze);
    },
    [i]
  ), it = (le, Ze) => {
    const st = G[le.key], bt = (ot) => It(le.key, ot);
    if (le.type === "select")
      return /* @__PURE__ */ e(
        ir,
        {
          allowClear: le.clearable !== !1,
          searchable: le.searchable ?? !0,
          multiple: le.multiple,
          options: le.options ?? [],
          placeholder: le.placeholder ?? (le.__fromFieldSchema ? `全部${le.label}` : `请选择${le.label}`),
          value: st ?? (le.multiple ? [] : ""),
          onChange: (ot) => {
            const Mt = ot && typeof ot == "object" && "target" in ot ? ot.target.value : ot;
            bt(Mt);
          },
          className: Ze == null ? void 0 : Ze.select
        }
      );
    if (le.type === "treeSelect") {
      const ot = !!(le.multiple || le.treeCheckable);
      return /* @__PURE__ */ e(
        Da,
        {
          "aria-label": le.label,
          allowClear: le.clearable !== !1,
          searchable: le.searchable ?? !0,
          multiple: le.multiple,
          treeCheckable: le.treeCheckable,
          treeCheckStrictly: le.treeCheckStrictly,
          showCheckedStrategy: le.showCheckedStrategy,
          selectableLeafOnly: le.selectableLeafOnly,
          fieldNames: le.fieldNames,
          treeDataSimpleMode: le.treeDataSimpleMode,
          maxTagCount: le.maxTagCount,
          treeDefaultExpandAll: le.treeDefaultExpandAll,
          treeData: le.treeData ?? [],
          placeholder: le.placeholder ?? (le.__fromFieldSchema ? `全部${le.label}` : `请选择${le.label}`),
          value: st ?? (ot ? [] : ""),
          onChange: (Mt) => bt(Mt),
          className: Ze == null ? void 0 : Ze.select
        }
      );
    }
    return le.type === "date" || le.type === "datetimePicker" ? /* @__PURE__ */ e(
      La,
      {
        value: st ?? "",
        placeholder: le.placeholder ?? (le.__fromFieldSchema ? `选择${le.label}` : `请选择${le.label}`),
        onChange: bt
      }
    ) : le.type === "dateRange" ? /* @__PURE__ */ e(Ba, { value: st ?? null, onChange: bt }) : le.type === "number" ? /* @__PURE__ */ e(
      kn,
      {
        value: st ?? null,
        placeholder: le.placeholder ?? `输入${le.label}`,
        onChange: bt,
        className: Ze == null ? void 0 : Ze.input
      }
    ) : /* @__PURE__ */ e(
      kt,
      {
        allowClear: le.clearable !== !1,
        placeholder: le.placeholder ?? (le.__fromFieldSchema ? `搜索${le.label}` : `请输入${le.label}`),
        value: st ?? "",
        onChange: (ot) => bt(ot.target.value),
        wrapperClassName: Ze == null ? void 0 : Ze.input
      }
    );
  }, Rt = h ?? (o || _e.length >= 6 ? 2 : 1), Q = p ?? !!(o && Ee.length > 0), me = ((Bt = oi.find((le) => le.key === Ie)) == null ? void 0 : Bt.label) ?? "5秒", ze = m ?? u === void 0, Fe = !!(s || A || $ || o && a), ft = A ?? ($ == null ? void 0 : $()), ut = B ?? (S == null ? void 0 : S()), _t = R ?? (D == null ? void 0 : D()), ht = v ?? (o ? "新增" : "新建记录"), Qt = oe(
    () => Ee.filter((le) => Oo(se[le.key])).map((le) => le.columnKey || le.key),
    [Ee, se]
  ), Ot = oe(
    () => Object.fromEntries(
      Ee.filter((le) => Oo(se[le.key])).map((le) => [le.columnKey || le.key, Pp(le, se[le.key])])
    ),
    [Ee, se]
  );
  return {
    selectionEnabled: dt,
    effectiveMaxInlineActions: We,
    permittedBatchActions: xe,
    hasAnyRowAction: $e,
    defaultActionColWidth: Qe,
    actionColAlign: lt,
    finalColumns: Lt,
    resolvedExpandable: vt,
    handleExportAction: mt,
    updateSearchInput: It,
    submitSearch: at,
    renderSearchControl: it,
    effectiveFormColumns: Rt,
    effectiveShowClientFilterSwitch: Q,
    currentIntervalLabel: me,
    showHeaderFilterToggle: ze,
    showTopPageHeader: Fe,
    resolvedHeaderExtra: ft,
    resolvedCardExtra: ut,
    resolvedToolbarExtra: _t,
    resolvedAddText: ht,
    activeFilterKeys: Qt,
    activeFilterLabels: Ot
  };
}
function $p(t) {
  const {
    columns: r,
    draftConfig: a,
    dataSource: n,
    request: s,
    apiProp: o,
    defaultQuery: d,
    rowKey: c,
    hidePagination: b,
    pagination: i,
    onSearchChange: u,
    onSearchReset: m,
    onNavigate: p,
    controlledSelectedRowKeys: f,
    onRowSelectionChange: h,
    treeData: v,
    expandable: w,
    sortable: k,
    onRefreshRef: g,
    onAddWithValuesRef: N,
    openEditRef: T,
    onAdd: M,
    onEdit: L,
    onDelete: C,
    onBeforeAdd: y,
    onBeforeEdit: _,
    onBeforeSubmit: E,
    onBeforeDelete: R,
    onBeforeBatchDelete: D,
    onAfterSave: A,
    onAfterDelete: $,
    onAfterBatchDelete: B,
    onSaveRecord: S,
    onDeleteRecords: z,
    toast: F,
    apiRef: I,
    onListLoadedRef: O,
    settings: j,
    hasRemoteSource: U,
    isClientFilter: K,
    setSearchInputs: q,
    searchInputsRef: G,
    appliedFilters: W,
    setAppliedFilters: X,
    quickKeyword: se,
    setQuickKeyword: P,
    sortState: V,
    setSortState: de,
    current: ke,
    setCurrent: te,
    pageSize: fe,
    setInternalLoading: ve,
    remoteRows: ue,
    setRemoteRows: Ne,
    remoteTotal: Ie,
    setRemoteTotal: Ee,
    setInternalSelectedKeys: _e,
    selectedKeys: Z,
    cachedSelectedRows: re,
    setCachedSelectedRows: Pe,
    childrenData: Ye,
    setChildrenData: Xe,
    setChildrenLoading: rt,
    setChildrenError: ct,
    autoRefreshEnabled: nt,
    autoRefreshInterval: Dt,
    requestSeqRef: be,
    setViewingRecord: Te,
    setViewLoading: pe,
    resolvedFormFields: xe,
    buildDefaultFormValues: dt,
    form: We,
    draftEnabled: $e,
    autoRestoreDraft: Qe,
    draft: lt,
    modalOpen: Lt,
    setModalOpen: vt,
    isEdit: mt,
    setIsEdit: It,
    editingRecord: at,
    setEditingRecord: it,
    setFormSubmitting: Rt,
    setFormDetailLoading: Q,
    setFormError: me,
    setShowDraftBanner: ze,
    resolveRowKey: Fe
  } = t, ft = oe(
    () => K ? Bp : W,
    [K, W]
  ), ut = ge(async () => {
    var ye, De, Y;
    if (!s && !((ye = I.current) != null && ye.list)) return;
    const ie = ++be.current;
    ve(!0);
    try {
      if (s) {
        const Ae = await s({
          current: ke,
          pageSize: fe,
          filters: Ja(ft),
          sortField: V.direction ? V.key : void 0,
          sortOrder: V.direction
        });
        if (ie !== be.current) return;
        Ne(Ae.data), Ee(Ae.total), (De = O.current) == null || De.call(O, Ae.data);
        return;
      }
      const J = I.current;
      if (!(J != null && J.list)) return;
      const he = Ja({
        ...d,
        ...ft,
        pageNum: ke,
        pageSize: fe,
        ...V.direction ? {
          orderBy: V.key,
          orderType: V.direction,
          sortField: V.key,
          sortOrder: V.direction
        } : {}
      }), ne = await J.list(he);
      if (ie !== be.current) return;
      if (hr(ne) && !(ne != null && ne.data) && !(ne != null && ne.list)) {
        F.error((ne == null ? void 0 : ne.msg) || "获取表格数据失败"), Ne([]), Ee(0);
        return;
      }
      const { list: Se, total: Ce } = ss(ne);
      Ne(Se), Ee(Ce), (Y = O.current) == null || Y.call(O, Se);
    } catch (J) {
      ie === be.current && F.error((J == null ? void 0 : J.message) || "加载表格数据失败");
    } finally {
      ie === be.current && ve(!1);
    }
  }, [
    s,
    d,
    ke,
    fe,
    ft,
    V,
    F
  ]);
  we(() => {
    U && ut();
  }, [U, ut]), we(() => {
    if (g)
      return g.current = (ie = !1) => {
        ie && ke !== 1 ? te(1) : ut();
      }, () => {
        g.current = null;
      };
  }, [g, ke, ut]), we(() => {
    if (!nt || !U || Dt <= 0 || typeof window > "u")
      return;
    const ie = window.setInterval(() => {
      ut();
    }, Dt);
    return () => window.clearInterval(ie);
  }, [nt, Dt, U, ut]), we(() => {
    Lt && xe.forEach((ie) => {
      var ye;
      return (ye = ie.onFormReady) == null ? void 0 : ye.call(ie, We, mt);
    });
  }, [Lt, mt, xe, We]), we(() => {
    if (!(!Lt || !$e)) {
      if (Qe && !mt) {
        const ie = We.watch((ye) => {
          lt.saveDraft(ye);
        });
        return () => ie.unsubscribe();
      }
      if (a != null && a.autoSave) {
        let ie;
        const ye = () => {
          ie !== void 0 && window.clearTimeout(ie), ie = window.setTimeout(() => {
            lt.saveDraft(We.getValues()), ze(!1);
          }, a.autoSaveInterval || 3e4);
        };
        ye();
        const De = We.watch(() => {
          ye();
        });
        return () => {
          ie !== void 0 && window.clearTimeout(ie), De.unsubscribe();
        };
      }
    }
  }, [
    Lt,
    $e,
    Qe,
    mt,
    a == null ? void 0 : a.autoSave,
    a == null ? void 0 : a.autoSaveInterval,
    We,
    lt
  ]);
  const _t = ge(
    (ie, ye) => {
      f === void 0 && _e(ie);
      const Y = ye ?? (n ?? ue).filter((J, he) => ie.includes(Fe(J, he)));
      Pe(Y), h == null || h(ie, Y);
    },
    [f, n, ue, Fe, h]
  ), ht = oe(() => re.length > 0 && re.length === Z.length ? re : (n ?? ue).filter((ye, De) => Z.includes(Fe(ye, De))), [re, Z, n, ue, Fe]), Qt = oe(() => {
    const ie = r.filter((ye) => !ye.hideInTable && !j.hiddenKeys.includes(ye.key)).sort((ye, De) => (ye.order ?? 999) - (De.order ?? 999)).map((ye) => {
      const De = typeof ye.type == "object" && ye.type !== null ? ye.type : void 0, Y = typeof ye.search == "object" && ye.search !== null && Array.isArray(ye.search.options) ? ye.search.options.filter((he) => he.value !== "") : void 0, J = !!(!ye.options && !(De != null && De.options) && Y);
      return {
        ...ye,
        options: ye.options ?? Y,
        ...J ? { __autoOptionsFromSearch: !0 } : {},
        sorter: ye.sorter !== void 0 ? ye.sorter : o && ye.sortable === void 0 ? !0 : ye.sorter
      };
    });
    return j.columnOrder.length === 0 ? ie : [...ie].sort((ye, De) => {
      const Y = j.columnOrder.indexOf(ye.key), J = j.columnOrder.indexOf(De.key);
      return Y === -1 && J === -1 ? 0 : Y === -1 ? 1 : J === -1 ? -1 : Y - J;
    });
  }, [r, j.hiddenKeys, j.columnOrder, o]), Ot = n ?? ue, Bt = oe(() => {
    if (!K && U) return Ot;
    const ie = r.map(
      (ye) => Array.isArray(ye.dataIndex) ? ye.dataIndex.join(".") : String(ye.dataIndex ?? ye.key)
    );
    return Au({
      rows: Ot,
      quickKeyword: se,
      searchableKeys: ie,
      fieldFilters: W,
      sortField: V.key,
      sortOrder: V.direction
    });
  }, [K, U, Ot, se, W, r, V]), le = oe(() => {
    if (!U || K) {
      if (b || i === !1) return Bt;
      if (Bt.length > fe || !U) {
        const ie = (ke - 1) * fe;
        return Bt.slice(ie, ie + fe);
      }
      return Bt;
    }
    return ue;
  }, [
    U,
    K,
    b,
    i,
    Bt,
    ue,
    ke,
    fe
  ]), Ze = !U || K ? Bt.length : Ie, st = oe(() => {
    const ie = d ? new Set(Object.keys(d)) : null;
    return Object.entries(Ja(W)).filter(([De, Y]) => !(ie && ie.has(De) && d[De] === Y)).length + (se.trim() ? 1 : 0);
  }, [W, se, d]), bt = ge(() => {
    const ie = { ...d };
    G.current = ie, q(ie), X(ie), P(""), de({ key: "", direction: null }), te(1), m == null || m(), u == null || u(ie);
  }, [d, m, u]), ot = ge(
    async (ie) => {
      if (M && !ie) {
        M();
        return;
      }
      let ye = {
        ...dt(),
        ...ie
      };
      if (y) {
        const Y = await y(ye);
        if (Y === !1) return;
        Y && typeof Y == "object" && (ye = { ...ye, ...Y });
      }
      it(null), It(!1), me(null), We.clearErrors();
      const De = $e ? lt.readDraft() : null;
      De && Qe && !ie ? (We.reset({ ...ye, ...De }), ze(!0)) : (We.reset(ye), ze(!!(De && $e && !ie))), vt(!0);
    },
    [
      M,
      dt,
      y,
      We,
      $e,
      lt,
      Qe
    ]
  ), Mt = ge(
    async (ie) => {
      var Y;
      if (L) {
        L(ie);
        return;
      }
      let ye = { ...dt(), ...ie };
      if (_) {
        const J = await _(ie, ie);
        if (J === !1) return;
        J && typeof J == "object" && (ye = { ...dt(), ...J });
      }
      const De = Fe(ie);
      if (it(ie), It(!0), me(null), ze(!1), We.clearErrors(), We.reset(ye), vt(!0), (Y = I.current) != null && Y.get && De !== void 0 && De !== null) {
        Q(!0);
        try {
          const J = await I.current.get(De), he = J != null && J.data && !Array.isArray(J.data) ? J.data : J;
          if (!hr(J) && he && typeof he == "object") {
            let ne = { ...ye, ...he };
            if (_) {
              const Se = await _(ne, ie);
              Se && typeof Se == "object" && (ne = { ...dt(), ...Se });
            }
            We.reset(ne);
          }
        } catch {
        } finally {
          Q(!1);
        }
      }
    },
    [L, dt, _, Fe, We]
  );
  we(() => {
    if (N)
      return N.current = (ie) => {
        ot(ie);
      }, () => {
        N.current = null;
      };
  }, [N, ot]), we(() => {
    if (T)
      return T.current = (ie) => {
        Mt(ie);
      }, () => {
        T.current = null;
      };
  }, [T, Mt]);
  const Ut = ge(
    async (ie, ye) => {
      var De, Y;
      if (ye) {
        if (ye.startsWith("/") || ye.startsWith("http")) {
          p == null || p(ye, ie);
          return;
        }
        const J = (De = I.current) == null ? void 0 : De[ye];
        if (typeof J == "function") {
          await J(ie);
          return;
        }
      }
      if (Te(ie), (Y = I.current) != null && Y.view) {
        pe(!0);
        try {
          const J = await I.current.view(Fe(ie)), he = J != null && J.data && !Array.isArray(J.data) ? J.data : J;
          !hr(J) && he && typeof he == "object" && Te({ ...ie, ...he });
        } catch {
        } finally {
          pe(!1);
        }
      }
    },
    [p, Fe]
  ), Ft = async (ie) => {
    var ye, De;
    Rt(!0), me(null);
    try {
      let Y = ie, J = !1;
      if (E) {
        const he = await E(ie, mt, at);
        if (he === !1) {
          Rt(!1);
          return;
        }
        he && typeof he == "object" && (Y = he, J = !0);
      }
      if (S)
        await S(Y, at);
      else if (I.current) {
        const he = typeof c == "string" ? c : "id", ne = at ? Fe(at) : void 0, Se = J ? {
          ...Y,
          ...mt && ne != null ? { [he]: ne } : {}
        } : {
          ...at || {},
          ...Y,
          ...mt && ne != null ? { [he]: ne } : {}
        }, Ce = mt ? await ((ye = I.current.update || I.current.edit || I.current.add) == null ? void 0 : ye(
          Se
        )) : await ((De = I.current.add || I.current.create) == null ? void 0 : De(Y));
        if (hr(Ce)) {
          me((Ce == null ? void 0 : Ce.msg) || "保存失败");
          return;
        }
      }
      $e && (lt.clearDraft(), ze(!1)), vt(!1), F.success(mt ? "更新成功" : o ? "新增成功" : "创建成功"), A == null || A(Y), U && ut();
    } catch (Y) {
      const J = (Y == null ? void 0 : Y.message) || "提交失败";
      me(J), o || F.error(J);
    } finally {
      Rt(!1);
    }
  }, Oe = async (ie) => {
    var De;
    if (ie == null || ie.preventDefault(), !await We.trigger()) {
      const Y = (De = Object.values(We.formState.errors).find((J) => J == null ? void 0 : J.message)) == null ? void 0 : De.message;
      Y && !o && F.warning(Y);
      return;
    }
    await Ft(We.getValues());
  }, sr = ge(
    async (ie, ye = 0) => {
      var J, he;
      if (C) {
        C(ie);
        return;
      }
      if (R && await R(ie) === !1)
        return;
      const De = Fe(ie, ye);
      if (!(!z && !((J = I.current) != null && J.delete) || !await ln({
        title: "确认删除",
        message: "确定要删除这条数据吗？此操作无法撤销。",
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (z)
            await z([De]);
          else if ((he = I.current) != null && he.delete) {
            const ne = await I.current.delete([De]);
            if (hr(ne)) {
              F.error((ne == null ? void 0 : ne.msg) || "删除失败");
              return;
            }
          }
          _t(Z.filter((ne) => ne !== De)), F.success("删除成功"), $ == null || $(), U && ut();
        } catch (ne) {
          F.error((ne == null ? void 0 : ne.message) || "删除失败");
        }
    },
    [
      C,
      R,
      Fe,
      z,
      Z,
      _t,
      F,
      $,
      U,
      ut
    ]
  ), er = ge(
    async (ie) => {
      var De, Y;
      if (ie.length === 0) {
        F.warning("请先选择要删除的数据行");
        return;
      }
      if (!(D && await D(ie) === !1 || !z && !((De = I.current) != null && De.delete) || !await ln({
        title: "确认删除选中记录",
        message: `即将删除 ${ie.length} 条数据，删除后不可恢复，是否继续？`,
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (z)
            await z(ie);
          else if ((Y = I.current) != null && Y.delete) {
            const J = await I.current.delete(ie);
            if (hr(J)) {
              F.error((J == null ? void 0 : J.msg) || "批量删除失败");
              return;
            }
          }
          _t([], []), F.success(`已删除 ${ie.length} 条记录`), B == null || B(), U && ut();
        } catch (J) {
          F.error((J == null ? void 0 : J.message) || "批量删除失败");
        }
    },
    [
      D,
      z,
      _t,
      F,
      B,
      U,
      ut
    ]
  ), fr = ge(
    async (ie, ye) => {
      var Y, J;
      const De = Fe(ye);
      if (ie && ((Y = I.current) != null && Y.children)) {
        const he = Ye[De];
        if (!he || he.length === 0) {
          rt((ne) => ({ ...ne, [De]: !0 })), ct((ne) => ({ ...ne, [De]: "" }));
          try {
            const ne = await I.current.children(ye);
            if (hr(ne))
              ct((Se) => ({ ...Se, [De]: (ne == null ? void 0 : ne.msg) || "加载失败" }));
            else {
              const { list: Se } = ss(ne);
              Xe((Ce) => ({ ...Ce, [De]: Se })), v && Ne((Ce) => {
                const Ae = (et) => et.map((yt) => Fe(yt) === De ? { ...yt, children: Se } : Array.isArray(yt.children) ? { ...yt, children: Ae(yt.children) } : yt);
                return Ae(Ce);
              });
            }
          } catch {
            ct((ne) => ({ ...ne, [De]: "加载失败" }));
          } finally {
            rt((ne) => ({ ...ne, [De]: !1 }));
          }
        }
      }
      (J = w == null ? void 0 : w.onExpand) == null || J.call(w, ie, ye);
    },
    [Fe, Ye, v, w]
  ), wr = ge(
    (ie, ye) => {
      var ne;
      const De = [...Ot], Y = De.findIndex(
        (Se, Ce) => String(Fe(Se, Ce)) === String(ie)
      ), J = De.findIndex(
        (Se, Ce) => String(Fe(Se, Ce)) === String(ye)
      );
      if (Y < 0 || J < 0 || Y === J) return;
      const [he] = De.splice(Y, 1);
      De.splice(J, 0, he), n || Ne(De), (ne = k == null ? void 0 : k.onSort) == null || ne.call(k, De);
    },
    [Ot, Fe, n, k]
  );
  return {
    fetchServerData: ut,
    updateSelectedState: _t,
    selectedRows: ht,
    visibleColumns: Qt,
    rawRows: Ot,
    processedClientRows: Bt,
    displayRows: le,
    displayTotal: Ze,
    activeFilterCount: st,
    resetAllFilters: bt,
    openCreateModal: ot,
    openEditModal: Mt,
    openViewModal: Ut,
    handleValidFormSubmit: Ft,
    handleFormSubmit: Oe,
    handleSingleDelete: sr,
    handleBatchDelete: er,
    handleExpandRow: fr,
    handleRowReorder: wr
  };
}
function Kp(t) {
  const {
    storageKey: r,
    tableId: a,
    title: n,
    subTitle: s,
    columns: o,
    fields: d = [],
    searchFields: c,
    formFields: b,
    formSchema: i,
    defaultFormValues: u,
    dialogTitle: m,
    dialogSize: p,
    formLayout: f = "grid",
    draftConfig: h,
    dataSource: v,
    loading: w,
    request: k,
    api: g,
    defaultQuery: N,
    onListLoaded: T,
    rowKey: M = "id",
    defaultPageSize: L = 10,
    pageSizeOptions: C,
    hidePagination: y = !1,
    pagination: _,
    renderPagination: E,
    selectedRowKey: R,
    onRowClick: D,
    onRow: A,
    searchVariant: $ = "card",
    onSearchChange: B,
    onSearchSubmit: S,
    onSearchReset: z,
    headerFilterMode: F,
    onHeaderFilterModeChange: I,
    showHeaderFilterToggle: O,
    clientFilter: j,
    showClientFilterSwitch: U,
    defaultSearchCollapsed: K = !0,
    autoRefresh: q,
    autoRefreshConfig: G,
    refetchInterval: W,
    exportable: X,
    showExport: se,
    onExport: P,
    showImport: V = !1,
    onImport: de,
    syncToUrl: ke = !1,
    viewable: te,
    showView: fe,
    viewTitle: ve,
    viewSize: ue = "lg",
    renderViewExtra: Ne,
    renderViewFooter: Ie,
    onNavigate: Ee,
    formContainer: _e = "dialog",
    formColumns: Z,
    showAdd: re,
    addButtonText: Pe,
    showEdit: Ye,
    showDelete: Xe,
    showBatchDelete: rt,
    rowActions: ct = [],
    actionButtons: nt = [],
    actionColumnWidth: Dt,
    maxInlineActions: be,
    rowSelection: Te,
    showRowSelection: pe,
    selectedRowKeys: xe,
    onRowSelectionChange: dt,
    batchActions: We = [],
    renderBatchActions: $e,
    treeData: Qe = !1,
    expandable: lt,
    sortable: Lt,
    columnSettingsEnabled: vt = !0,
    maxHeight: mt,
    autoFitHeight: It = !1,
    permissions: at,
    permission: it,
    hasPermission: Rt,
    toolbarButtons: Q = [],
    toolbarExtra: me,
    renderToolbarExtra: ze,
    headerExtra: Fe,
    renderExtra: ft,
    cardExtra: ut,
    renderCardExtra: _t,
    renderSearchExtra: ht,
    renderFormExtra: Qt,
    renderCustomForm: Ot,
    onRefreshRef: Bt,
    onAddWithValuesRef: le,
    openEditRef: Ze,
    onAdd: st,
    onEdit: bt,
    onDelete: ot,
    onBeforeAdd: Mt,
    onBeforeEdit: Ut,
    onBeforeSubmit: Ft,
    onBeforeDelete: Oe,
    onBeforeBatchDelete: sr,
    onAfterSave: er,
    onAfterDelete: fr,
    onAfterBatchDelete: wr,
    motion: ie,
    onSaveRecord: ye,
    onDeleteRecords: De
  } = t, Y = r ?? a, { toast: J } = At(), he = Be(ie), { hasPermission: ne } = Ps(), Se = ge(
    (Re) => Re ? Rt ? Rt(Re) : ne(Re) : !0,
    [Rt, ne]
  ), Ce = oe(() => {
    if (g)
      return typeof g == "function" ? Tn(g) : g;
  }, [g]), Ae = ce(Ce);
  Ae.current = Ce;
  const et = ce(T);
  et.current = T;
  const yt = oe(
    () => o.filter((Re) => Re.visible === !1).map((Re) => Re.key),
    [o]
  ), {
    settings: wt,
    toggleColumnVisible: zt,
    setAllColumnsVisible: xt,
    setColumnFixed: tr,
    setColumnWidth: $t,
    setColumnOrder: Kt,
    setSearchFieldVisible: Br,
    setDensity: sa,
    setFilterHighlightColor: In,
    resetSettings: oa
  } = Ab(vt ? Y : void 0, "default", yt), la = !!(k || Ce != null && Ce.list), Pr = oe(() => !ke || typeof window > "u" ? {} : Ru(window.location.search), [ke]), [_n, ia] = H(
    () => j ?? !la
  ), [za, ja] = H(!1), Fa = F ?? za, Mn = (Re) => {
    F === void 0 && ja(Re), I == null || I(Re);
  }, [ca, ae] = H(!0), [He, Ke] = H(!0), [tt, Nt] = H(K), [gt, ur] = H(() => {
    const { page: Re, pageSize: ee, ...Ge } = Pr;
    return { ...N, ...Ge };
  }), zr = ce(gt);
  zr.current = gt;
  const [An, ii] = H(() => {
    const { page: Re, pageSize: ee, ...Ge } = Pr;
    return { ...N, ...Ge };
  }), [ci, di] = H(""), [ui, bi] = H(() => ({
    key: String((N == null ? void 0 : N.orderBy) ?? ""),
    direction: (N == null ? void 0 : N.orderType) ?? null
  })), [Oa, mi] = H(() => Number(Pr.page) || 1), [$a, fi] = H(
    () => Number(Pr.pageSize) || L
  ), [zs, pi] = H(!1), [hi, gi] = H(!1), vi = w !== void 0 ? w : zs, [xi, yi] = H([]), [wi, Ni] = H(0), Ka = ce(null), Rn = ce(null), js = ce(null), Fs = ce(null), [ki, Dn] = H(void 0), [Os, Si] = H([]), Ci = xe ?? Os, [Ei, Ti] = H([]), [Mr, da] = H(!1), [Ii, _i] = H(!1), [Mi, Ai] = H({}), [Ri, Di] = H({}), [Li, Bi] = H({}), Pi = q ?? (G ? G.show !== !1 : la), [zi, ji] = H(
    (G == null ? void 0 : G.defaultEnabled) ?? !1
  ), [Fi, Oi] = H(
    W ?? (G == null ? void 0 : G.defaultInterval) ?? (g ? 5e3 : 1e4)
  ), $i = ce(0), [Ln, Ki] = H(null), [Hi, Wi] = H(!1), ua = oe(() => {
    const Re = /* @__PURE__ */ new Map();
    return d.filter((ee) => !ee.hideInSearch).forEach((ee) => {
      Re.set(ee.name, {
        key: ee.name,
        columnKey: ee.name,
        label: ee.label,
        type: ee.type ?? "text",
        placeholder: ee.placeholder,
        options: ee.options,
        treeData: ee.treeData,
        treeCheckable: ee.treeCheckable,
        treeCheckStrictly: ee.treeCheckStrictly,
        showCheckedStrategy: ee.showCheckedStrategy,
        selectableLeafOnly: ee.selectableLeafOnly,
        fieldNames: ee.fieldNames,
        treeDataSimpleMode: ee.treeDataSimpleMode,
        maxTagCount: ee.maxTagCount,
        treeDefaultExpandAll: ee.treeDefaultExpandAll,
        multiple: ee.multiple,
        span: ee.span,
        __fromFieldSchema: !0
      });
    }), o.forEach((ee) => {
      if (!(ee.search === !0 || typeof ee.search == "object" && ee.search !== null || ee.searchable === !0)) return;
      const Ve = typeof ee.search == "object" && ee.search !== null ? ee.search : {};
      if (Ve.custom) return;
      const rr = typeof ee.type == "object" ? ee.type : void 0, ar = Ve.options ?? (rr == null ? void 0 : rr.options) ?? ee.options, br = Ve.type ?? (ar ? "select" : "input"), Wa = String(
        Ve.key ?? (Array.isArray(ee.dataIndex) ? ee.dataIndex.join(".") : ee.dataIndex) ?? ee.key
      );
      Re.set(Wa, {
        key: Wa,
        columnKey: ee.key,
        label: ee.title,
        type: br,
        placeholder: Ve.placeholder,
        options: ar,
        treeData: Ve.treeData,
        treeCheckable: Ve.treeCheckable,
        treeCheckStrictly: Ve.treeCheckStrictly,
        showCheckedStrategy: Ve.showCheckedStrategy,
        selectableLeafOnly: Ve.selectableLeafOnly,
        fieldNames: Ve.fieldNames,
        treeDataSimpleMode: Ve.treeDataSimpleMode,
        maxTagCount: Ve.maxTagCount,
        treeDefaultExpandAll: Ve.treeDefaultExpandAll,
        searchable: Ve.searchable,
        multiple: Ve.multiple,
        span: Ve.span,
        order: Ve.order,
        format: Ve.format,
        clearable: Ve.clearable,
        __fromFieldSchema: !1
      });
    }), (c ?? []).forEach((ee) => {
      const Ge = Re.get(ee.key);
      Re.set(ee.key, {
        ...Ge,
        ...ee,
        __fromFieldSchema: !1
      });
    }), Array.from(Re.values()).sort((ee, Ge) => (ee.order ?? 999) - (Ge.order ?? 999));
  }, [d, o, c]), Vi = oe(
    () => new Set(ua.map((Re) => Re.key)),
    [ua]
  ), ba = oe(() => {
    const Re = /* @__PURE__ */ new Map();
    return ua.forEach((ee) => Re.set(ee.key, ee)), o.forEach((ee) => {
      if (ee.hideInTable || ee.key === "__abc_actions__" || ee.key === "__actions__" || ee.key === "__drag_handle__")
        return;
      const Ge = Array.isArray(ee.dataIndex) ? ee.dataIndex.join(".") : String(ee.dataIndex ?? ee.key);
      if (!Re.has(Ge) && (wt.searchVisible[Ge] === !0 || wt.searchVisible[ee.key] === !0)) {
        const Ve = typeof ee.type == "object" ? ee.type : void 0, rr = (Ve == null ? void 0 : Ve.options) ?? ee.options, ar = rr == null ? void 0 : rr.map((br) => ({
          label: br.label,
          value: typeof br.value == "boolean" ? String(br.value) : br.value
        }));
        Re.set(Ge, {
          key: Ge,
          columnKey: ee.key,
          label: ee.title,
          type: ar && ar.length > 0 ? "select" : "input",
          options: ar,
          order: ee.order,
          __fromFieldSchema: !1
        });
      }
    }), Array.from(Re.values()).sort((ee, Ge) => (ee.order ?? 999) - (Ge.order ?? 999));
  }, [ua, o, wt.searchVisible]), Ar = oe(
    () => ba.filter((Re) => !(wt.searchVisible[Re.key] === !1 || Re.columnKey && wt.searchVisible[Re.columnKey] === !1)),
    [ba, wt.searchVisible]
  ), Ui = oe(
    () => Ar.filter(
      (Re) => !o.some((ee) => ee.key === (Re.columnKey || Re.key))
    ),
    [Ar, o]
  ), Ha = oe(() => {
    let Re = 0;
    const ee = [];
    for (const ar of Ar) {
      const br = ar.span === 2 || ar.type === "dateRange" ? 2 : 1;
      if (Re + br <= 3)
        Re += br, ee.push(ar);
      else
        break;
    }
    const Ge = !!ht, Ve = Ge && Re < 3, rr = Ar.length - ee.length + (Ge && !Ve ? 1 : 0);
    return {
      firstRow: ee,
      extraFitsFirstRow: Ve,
      canCollapse: rr > 0,
      hiddenCount: rr
    };
  }, [Ar, ht]), Gi = oe(() => !tt || !Ha.canCollapse ? Ar : Ha.firstRow, [Ar, tt, Ha]), ma = oe(() => {
    const Re = /* @__PURE__ */ new Map();
    return d.filter((ee) => !ee.hideInForm).forEach((ee) => {
      Re.set(ee.name, {
        key: ee.name,
        name: ee.name,
        label: ee.label,
        type: ee.type ?? "text",
        options: ee.options,
        treeData: ee.treeData,
        treeCheckable: ee.treeCheckable,
        treeCheckStrictly: ee.treeCheckStrictly,
        showCheckedStrategy: ee.showCheckedStrategy,
        selectableLeafOnly: ee.selectableLeafOnly,
        fieldNames: ee.fieldNames,
        treeDataSimpleMode: ee.treeDataSimpleMode,
        maxTagCount: ee.maxTagCount,
        treeDefaultExpandAll: ee.treeDefaultExpandAll,
        multiple: ee.multiple,
        placeholder: ee.placeholder,
        helperText: ee.helperText,
        defaultValue: ee.defaultValue,
        span: ee.span,
        required: ee.required,
        disabled: ee.disabled,
        validator: ee.validator,
        __fromFieldSchema: !0
      });
    }), o.filter((ee) => ee.form === !0 || typeof ee.form == "object" && ee.form !== null).forEach((ee) => {
      const Ge = typeof ee.form == "object" && ee.form !== null ? ee.form : {}, Ve = String(
        Ge.key ?? Ge.name ?? (Array.isArray(ee.dataIndex) ? ee.dataIndex[0] : ee.dataIndex) ?? ee.key
      );
      Re.set(Ve, {
        ...Ge,
        key: Ve,
        label: Ge.label ?? ee.title,
        tooltip: Ge.tooltip ?? ee.tooltip,
        type: Ge.type ?? "input"
      });
    }), (b ?? []).forEach((ee) => {
      const Ge = Qr(ee);
      if (!Ge) return;
      const Ve = Re.get(Ge);
      Re.set(Ge, {
        ...Ve,
        ...ee,
        key: Ge
      });
    }), Array.from(Re.values()).sort((ee, Ge) => (ee.order ?? 999) - (Ge.order ?? 999));
  }, [d, o, b]), $s = ge(() => {
    const Re = { ...u };
    for (const ee of ma) {
      const Ge = Qr(ee);
      Ge && ee.defaultValue !== void 0 && Re[Ge] === void 0 && (Re[Ge] = ee.defaultValue);
    }
    return Re;
  }, [u, ma]), Yi = yp({
    defaultValues: $s(),
    schema: i,
    fields: ma
  }), Ks = h ? !!h.enabled : !!(Y && !g), qi = !h && !!(Y && !g), Xi = Mb(
    Ks && Y ? `${Y}_form` : void 0
  ), [Bn, Zi] = H(!1), [Ji, Qi] = H(!1), [ec, tc] = H(null), [rc, ac] = H(!1), [nc, sc] = H(!1), [oc, lc] = H(null), [ic, cc] = H(!1), Hs = (it == null ? void 0 : it.add) ?? (at == null ? void 0 : at.create), Ws = (it == null ? void 0 : it.edit) ?? (at == null ? void 0 : at.update), Pn = (it == null ? void 0 : it.delete) ?? (at == null ? void 0 : at.delete), Vs = (it == null ? void 0 : it.batchDelete) ?? Pn, Us = it == null ? void 0 : it.export, Gs = it == null ? void 0 : it.view, Ys = (re ?? !0) && Se(Hs), qs = (Ye ?? !0) && Se(Ws), Xs = (Xe ?? !0) && Se(Pn), dc = (rt ?? !!De) && Se(Vs), uc = (se ?? X ?? !g) && Se(Us), bc = (fe ?? te ?? !1) && Se(Gs), mc = Ys && !!(st || Ot || ye && ma.length > 0 || Ce != null && Ce.add || Ce != null && Ce.create), fc = qs && !!(bt || Ot || ye || Ce != null && Ce.update || Ce != null && Ce.edit), pc = Xs && !!(ot || De || Ce != null && Ce.delete);
  we(() => {
    if (!ke || typeof window > "u") return;
    const Re = [
      ...ba.map((Ve) => Ve.key),
      ...o.map(
        (Ve) => Array.isArray(Ve.dataIndex) ? Ve.dataIndex.join(".") : String(Ve.dataIndex ?? Ve.key)
      ),
      "page",
      "pageSize"
    ], ee = Du(window.location.search, Re, {
      ...An,
      page: Oa > 1 ? Oa : void 0,
      pageSize: $a !== L ? $a : void 0
    }), Ge = `${window.location.pathname}${ee}${window.location.hash}`;
    window.history.replaceState(null, "", Ge);
  }, [ke, ba, o, An, Oa, $a, L]);
  const hc = ge(() => {
    if (typeof document > "u") {
      da((ee) => !ee);
      return;
    }
    const Re = !Mr;
    Re && Ka.current && typeof Ka.current.requestFullscreen == "function" ? Ka.current.requestFullscreen().catch(() => {
    }) : !Re && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
    }), da(Re);
  }, [Mr]);
  we(() => {
    if (typeof document > "u") return;
    const Re = () => {
      !document.fullscreenElement && Mr && da(!1);
    };
    return document.addEventListener("fullscreenchange", Re), () => document.removeEventListener("fullscreenchange", Re);
  }, [Mr]), we(() => {
    if (!Mr) return;
    const Re = (ee) => {
      ee.key === "Escape" && !Bn && !Ln && (typeof document < "u" && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
      }), da(!1));
    };
    return document.addEventListener("keydown", Re), () => document.removeEventListener("keydown", Re);
  }, [Mr, Bn, Ln]), we(() => {
    if (!It || mt !== void 0 || typeof window > "u") {
      Dn(void 0);
      return;
    }
    let Re = 0;
    const ee = () => {
      var Zs;
      const rr = js.current;
      if (!rr) return;
      const ar = rr.getBoundingClientRect();
      if (ar.top === 0 && ar.height === 0 && rr.clientWidth === 0) return;
      const br = !y && _ !== !1 ? ((Zs = Fs.current) == null ? void 0 : Zs.offsetHeight) ?? 52 : 0, Wa = window.innerHeight - ar.top - br - 16;
      Dn(Math.max(Math.floor(Wa), 240));
    }, Ge = () => {
      window.cancelAnimationFrame(Re), Re = window.requestAnimationFrame(ee);
    };
    Ge(), window.addEventListener("resize", Ge);
    let Ve;
    return typeof ResizeObserver < "u" && Rn.current && (Ve = new ResizeObserver(Ge), Ve.observe(Rn.current)), () => {
      window.cancelAnimationFrame(Re), window.removeEventListener("resize", Ge), Ve == null || Ve.disconnect();
    };
  }, [
    It,
    mt,
    Mr,
    Fa,
    He,
    tt,
    ca,
    y,
    _
  ]);
  const gc = ge(
    (Re, ee = 0) => typeof M == "function" ? M(Re) : (Re == null ? void 0 : Re[M]) ?? ee,
    [M]
  );
  return {
    propStorageKey: r,
    tableId: a,
    title: n,
    subTitle: s,
    columns: o,
    fields: d,
    propSearchFields: c,
    propFormFields: b,
    formSchema: i,
    defaultFormValues: u,
    dialogTitle: m,
    dialogSize: p,
    formLayout: f,
    draftConfig: h,
    dataSource: v,
    propLoading: w,
    request: k,
    apiProp: g,
    defaultQuery: N,
    onListLoaded: T,
    rowKey: M,
    defaultPageSize: L,
    pageSizeOptions: C,
    hidePagination: y,
    pagination: _,
    renderPagination: E,
    selectedRowKey: R,
    onRowClick: D,
    onRow: A,
    searchVariant: $,
    onSearchChange: B,
    onSearchSubmit: S,
    onSearchReset: z,
    controlledHeaderFilterMode: F,
    onHeaderFilterModeChange: I,
    propShowHeaderFilterToggle: O,
    initialClientFilter: j,
    showClientFilterSwitch: U,
    defaultSearchCollapsed: K,
    autoRefresh: q,
    autoRefreshConfig: G,
    refetchInterval: W,
    exportable: X,
    showExport: se,
    onExport: P,
    showImport: V,
    onImport: de,
    syncToUrl: ke,
    viewable: te,
    showView: fe,
    viewTitle: ve,
    viewSize: ue,
    renderViewExtra: Ne,
    renderViewFooter: Ie,
    onNavigate: Ee,
    formContainer: _e,
    formColumns: Z,
    showAdd: re,
    addButtonText: Pe,
    showEdit: Ye,
    showDelete: Xe,
    showBatchDelete: rt,
    rowActions: ct,
    actionButtons: nt,
    actionColumnWidth: Dt,
    maxInlineActions: be,
    rowSelection: Te,
    showRowSelection: pe,
    controlledSelectedRowKeys: xe,
    onRowSelectionChange: dt,
    batchActions: We,
    renderBatchActions: $e,
    treeData: Qe,
    expandable: lt,
    sortable: Lt,
    columnSettingsEnabled: vt,
    maxHeight: mt,
    autoFitHeight: It,
    permissions: at,
    permission: it,
    customHasPermission: Rt,
    toolbarButtons: Q,
    toolbarExtra: me,
    renderToolbarExtra: ze,
    headerExtra: Fe,
    renderExtra: ft,
    cardExtra: ut,
    renderCardExtra: _t,
    renderSearchExtra: ht,
    renderFormExtra: Qt,
    renderCustomForm: Ot,
    onRefreshRef: Bt,
    onAddWithValuesRef: le,
    openEditRef: Ze,
    onAdd: st,
    onEdit: bt,
    onDelete: ot,
    onBeforeAdd: Mt,
    onBeforeEdit: Ut,
    onBeforeSubmit: Ft,
    onBeforeDelete: Oe,
    onBeforeBatchDelete: sr,
    onAfterSave: er,
    onAfterDelete: fr,
    onAfterBatchDelete: wr,
    motion: ie,
    onSaveRecord: ye,
    onDeleteRecords: De,
    toast: J,
    resolvedMotion: he,
    abcHasPermission: ne,
    checkPermission: Se,
    resolvedApi: Ce,
    apiRef: Ae,
    onListLoadedRef: et,
    defaultHiddenKeys: yt,
    settings: wt,
    toggleColumnVisible: zt,
    setAllColumnsVisible: xt,
    setColumnFixed: tr,
    setColumnWidth: $t,
    setColumnOrder: Kt,
    setSearchFieldVisible: Br,
    setDensity: sa,
    setFilterHighlightColor: In,
    resetSettings: oa,
    hasRemoteSource: la,
    initialUrlParams: Pr,
    isClientFilter: _n,
    setIsClientFilter: ia,
    internalHeaderFilterMode: za,
    setInternalHeaderFilterMode: ja,
    headerFilterMode: Fa,
    updateHeaderFilterMode: Mn,
    extraFilterCollapsed: ca,
    setExtraFilterCollapsed: ae,
    searchPanelExpanded: He,
    setSearchPanelExpanded: Ke,
    searchFieldsCollapsed: tt,
    setSearchFieldsCollapsed: Nt,
    searchInputs: gt,
    setSearchInputs: ur,
    searchInputsRef: zr,
    appliedFilters: An,
    setAppliedFilters: ii,
    quickKeyword: ci,
    setQuickKeyword: di,
    sortState: ui,
    setSortState: bi,
    current: Oa,
    setCurrent: mi,
    pageSize: $a,
    setPageSize: fi,
    internalLoading: zs,
    setInternalLoading: pi,
    exporting: hi,
    setExporting: gi,
    loading: vi,
    remoteRows: xi,
    setRemoteRows: yi,
    remoteTotal: wi,
    setRemoteTotal: Ni,
    containerRef: Ka,
    searchCardMeasureRef: Rn,
    tableScrollMeasureRef: js,
    paginationWrapRef: Fs,
    computedScrollY: ki,
    setComputedScrollY: Dn,
    internalSelectedKeys: Os,
    setInternalSelectedKeys: Si,
    selectedKeys: Ci,
    cachedSelectedRows: Ei,
    setCachedSelectedRows: Ti,
    isFullScreen: Mr,
    setIsFullScreen: da,
    autoRefreshPopoverOpen: Ii,
    setAutoRefreshPopoverOpen: _i,
    childrenData: Mi,
    setChildrenData: Ai,
    childrenLoading: Ri,
    setChildrenLoading: Di,
    childrenError: Li,
    setChildrenError: Bi,
    showAutoRefreshControl: Pi,
    autoRefreshEnabled: zi,
    setAutoRefreshEnabled: ji,
    autoRefreshInterval: Fi,
    setAutoRefreshInterval: Oi,
    requestSeqRef: $i,
    viewingRecord: Ln,
    setViewingRecord: Ki,
    viewLoading: Hi,
    setViewLoading: Wi,
    baseSearchFields: ua,
    searchableFieldNames: Vi,
    allSearchFields: ba,
    visibleSearchFields: Ar,
    extraFilterFields: Ui,
    searchCollapseMeta: Ha,
    displayedSearchFields: Gi,
    resolvedFormFields: ma,
    buildDefaultFormValues: $s,
    form: Yi,
    draftEnabled: Ks,
    autoRestoreDraft: qi,
    draft: Xi,
    modalOpen: Bn,
    setModalOpen: Zi,
    isEdit: Ji,
    setIsEdit: Qi,
    editingRecord: ec,
    setEditingRecord: tc,
    formSubmitting: rc,
    setFormSubmitting: ac,
    formDetailLoading: nc,
    setFormDetailLoading: sc,
    formError: oc,
    setFormError: lc,
    showDraftBanner: ic,
    setShowDraftBanner: cc,
    addPermCode: Hs,
    editPermCode: Ws,
    deletePermCode: Pn,
    batchDeletePermCode: Vs,
    exportPermCode: Us,
    viewPermCode: Gs,
    canCreate: Ys,
    canUpdate: qs,
    canDelete: Xs,
    canBatchDelete: dc,
    effectiveExportable: uc,
    effectiveViewable: bc,
    canOpenAdd: mc,
    canOpenEdit: fc,
    canOpenDelete: pc,
    toggleFullScreen: hc,
    resolveRowKey: gc,
    storageKey: Y
  };
}
function li(t) {
  const r = Kp(t), a = $p(r), n = Op(r, a), s = { ...r, ...a, ...n }, {
    columns: o,
    rowKey: d,
    pageSizeOptions: c,
    hidePagination: b,
    pagination: i,
    renderPagination: u,
    selectedRowKey: m,
    onRowClick: p,
    onRow: f,
    treeData: h,
    sortable: v,
    columnSettingsEnabled: w,
    maxHeight: k,
    resolvedMotion: g,
    settings: N,
    toggleColumnVisible: T,
    setColumnFixed: M,
    setColumnWidth: L,
    setColumnOrder: C,
    setFilterHighlightColor: y,
    resetSettings: _,
    headerFilterMode: E,
    appliedFilters: R,
    setAppliedFilters: D,
    sortState: A,
    setSortState: $,
    current: B,
    setCurrent: S,
    pageSize: z,
    setPageSize: F,
    loading: I,
    containerRef: O,
    tableScrollMeasureRef: j,
    paginationWrapRef: U,
    computedScrollY: K,
    selectedKeys: q,
    isFullScreen: G,
    visibleSearchFields: W,
    updateSelectedState: X,
    displayRows: se,
    displayTotal: P,
    activeFilterCount: V,
    resetAllFilters: de,
    openViewModal: ke,
    handleRowReorder: te,
    selectionEnabled: fe,
    finalColumns: ve,
    resolvedExpandable: ue,
    updateSearchInput: Ne,
    activeFilterKeys: Ie,
    activeFilterLabels: Ee
  } = s;
  return /* @__PURE__ */ l(
    "div",
    {
      ref: O,
      "data-motion": g,
      className: x(
        "relative space-y-3",
        G && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        /* @__PURE__ */ e(Fp, { ctx: s }),
        /* @__PURE__ */ l(un, { padding: "none", className: "overflow-hidden", children: [
          /* @__PURE__ */ e(zp, { ctx: s }),
          /* @__PURE__ */ e("div", { ref: j, children: /* @__PURE__ */ e(
            Gl,
            {
              columns: ve,
              allColumns: o,
              hiddenColumnKeys: N.hiddenKeys,
              onToggleColumnVisible: w ? T : void 0,
              data: se,
              rowKey: d,
              loading: I,
              density: N.density,
              motion: g,
              selectedKeys: fe ? q : void 0,
              onSelectionChange: fe ? (_e, Z) => {
                X(_e, Z);
              } : void 0,
              sortState: A,
              onSortChange: (_e, Z) => {
                $({ key: _e, direction: Z }), S(1);
              },
              headerFilterMode: E,
              headerFilters: R,
              onHeaderFilterChange: (_e, Z) => {
                S(1), Ne(_e, Z), D((re) => ({ ...re, [_e]: Z }));
              },
              headerFilterRender: (_e) => {
                const Z = Array.isArray(_e.dataIndex) ? _e.dataIndex.join(".") : String(_e.dataIndex ?? _e.key), re = W.find(
                  (ct) => ct.columnKey === _e.key || ct.key === Z
                );
                if (E) {
                  if (!re && !_e.filterable) return null;
                } else if (!_e.filterable) return null;
                const Pe = _e.filterOptions ?? (re == null ? void 0 : re.options), Ye = (re == null ? void 0 : re.type) ?? _e.filterType ?? (Pe && Pe.length > 0 ? "select" : "text"), Xe = (re == null ? void 0 : re.key) ?? Z, rt = Ie.includes(_e.key);
                return /* @__PURE__ */ e(
                  Mp,
                  {
                    title: _e.title,
                    filterType: Ye,
                    filterOptions: Pe,
                    treeData: re == null ? void 0 : re.treeData,
                    multiple: re == null ? void 0 : re.multiple,
                    searchable: re == null ? void 0 : re.searchable,
                    placeholder: re == null ? void 0 : re.placeholder,
                    format: re == null ? void 0 : re.format,
                    highlighted: rt,
                    iconType: E ? "search" : "filter",
                    value: R[Xe],
                    onApply: (ct) => {
                      S(1), Ne(Xe, ct), D((nt) => ({ ...nt, [Xe]: ct }));
                    }
                  }
                );
              },
              activeFilterKeys: Ie,
              activeFilterLabels: Ee,
              filterHighlightColor: N.filterHighlightColor,
              onFilterHighlightColorChange: w ? y : void 0,
              columnWidths: N.columnWidths,
              onColumnResize: L,
              columnFixed: N.columnFixed,
              onColumnPin: M,
              onColumnHide: w ? T : void 0,
              onResetColumns: w ? _ : void 0,
              onColumnReorder: w ? C : void 0,
              treeData: h,
              expandable: ue,
              rowDraggable: !!(v != null && v.enabled),
              onRowDragEnd: v != null && v.enabled ? te : void 0,
              activeRowKey: m,
              onRowClick: p,
              onRow: f,
              onRowView: (_e, Z) => void ke(_e, Z),
              onEmptyReset: V > 0 ? de : void 0,
              maxHeight: k ?? K,
              className: "rounded-none border-0"
            }
          ) }),
          !b && i !== !1 && /* @__PURE__ */ e("div", { ref: U, className: "border-t border-[var(--abc-border)] px-4 py-3", children: u ? u({
            current: B,
            pageSize: z,
            total: P,
            mode: typeof i == "object" && i.mode ? i.mode : "offset"
          }) : typeof i == "object" ? /* @__PURE__ */ e(
            dn,
            {
              current: B,
              pageSize: z,
              pageSizeOptions: c,
              motion: g,
              total: P,
              onChange: (_e, Z) => {
                S(_e), F(Z);
              },
              ...i
            }
          ) : /* @__PURE__ */ e(
            dn,
            {
              current: B,
              pageSize: z,
              pageSizeOptions: c,
              motion: g,
              total: P,
              onChange: (_e, Z) => {
                S(_e), F(Z);
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ e(jp, { ctx: s })
      ]
    }
  );
}
const Cg = li, Eg = li;
function Hp(t, r) {
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
function Wp({
  title: t,
  description: r,
  triggerLabel: a,
  triggerIcon: n,
  triggerVariant: s = "primary",
  mode: o = "modal",
  size: d,
  maxWidthClass: c,
  footer: b,
  open: i,
  onOpenChange: u,
  summarySlot: m,
  emptySummaryHint: p,
  headerActions: f,
  modalHeaderActions: h,
  inlineInTestEnv: v,
  renderInlineContainer: w,
  renderSummaryContainer: k,
  className: g,
  children: N
}) {
  var D;
  const T = v ?? (typeof process < "u" && ((D = process.env) == null ? void 0 : D.NODE_ENV) === "test" || typeof import.meta < "u" && !1), [M, L] = H(!1), C = i !== void 0 ? i : M, y = (A) => {
    i === void 0 && L(A), u == null || u(A);
  };
  if (T)
    return w ? /* @__PURE__ */ e(Ue, { children: w({
      title: t,
      description: r,
      headerActions: f,
      modalHeaderActions: h,
      summarySlot: m,
      className: g,
      children: N
    }) }) : /* @__PURE__ */ l(
      "section",
      {
        "data-slot": "pro-form-inline",
        className: x(
          "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          g
        ),
        children: [
          /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ l("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            (f || h) && /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-2", children: [
              f,
              h
            ] })
          ] }),
          m,
          /* @__PURE__ */ e("div", { children: N })
        ]
      }
    );
  const R = /* @__PURE__ */ l(
    Le,
    {
      size: "sm",
      variant: s === "outline" ? "outline" : s === "secondary" ? "secondary" : "primary",
      onClick: () => y(!0),
      className: "gap-1.5 text-xs font-semibold cursor-pointer",
      children: [
        n ?? /* @__PURE__ */ e("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", fill: "none", className: "h-3.5 w-3.5 shrink-0", children: /* @__PURE__ */ e("path", { d: "M8 3.25v9.5M3.25 8h9.5", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }) }),
        /* @__PURE__ */ e("span", { children: a })
      ]
    }
  );
  return /* @__PURE__ */ l(Ue, { children: [
    k ? k({
      title: t,
      description: r,
      triggerButton: R,
      headerActions: f,
      summarySlot: m,
      emptySummaryHint: p,
      className: g
    }) : /* @__PURE__ */ l(
      "section",
      {
        "data-slot": "pro-form-summary",
        className: x(
          "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          g
        ),
        children: [
          /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
            /* @__PURE__ */ l("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ l("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
              f,
              R
            ] })
          ] }),
          m ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: m }) : p ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3 text-xs text-[var(--abc-fg-muted)]", children: p }) : null
        ]
      }
    ),
    o === "drawer" ? /* @__PURE__ */ e(
      na,
      {
        open: C,
        onClose: () => y(!1),
        title: t,
        description: r,
        size: Hp(d, c),
        footer: b ?? h,
        className: c,
        children: N
      }
    ) : /* @__PURE__ */ e(
      Pb,
      {
        open: C,
        onClose: () => y(!1),
        title: t,
        description: r,
        footer: b ?? h,
        className: c,
        children: N
      }
    )
  ] });
}
const Tg = Wp, Vp = {
  searchPlaceholder: "过滤日志内容…",
  stickBottomLabel: "自动贴底",
  copyLabel: "复制",
  copiedLabel: "已复制",
  emptyText: "无符合筛选条件的日志。",
  clearSearchLabel: "清空搜索",
  formatLineCount: (t, r) => `${t} / ${r} 行`
}, Up = ["all", "info", "warn", "error"];
function Gp({
  logs: t,
  heightClass: r = "h-[440px]",
  estimateSize: a = 26,
  overscan: n = 12,
  defaultStickBottom: s = !1,
  labels: o,
  className: d
}) {
  var $;
  const c = { ...Vp, ...o }, b = Me.useRef(null), [i, u] = Me.useState(""), [m, p] = Me.useState("all"), [f, h] = Me.useState(s), [v, w] = Me.useState(!1), [k, g] = Me.useState(0), [N, T] = Me.useState(0), M = typeof process < "u" && (($ = process.env) == null ? void 0 : $.NODE_ENV) === "test" || typeof import.meta < "u" && !1, L = Me.useMemo(() => t.map((B, S) => {
    if (typeof B == "string") {
      const z = B.toLowerCase(), F = z.includes("error") ? "error" : z.includes("warn") ? "warn" : "info";
      return { seq: S + 1, level: F, message: B };
    }
    return {
      seq: B.seq ?? S + 1,
      level: B.level || "info",
      message: B.message || "",
      detail: B.detail,
      created_at: B.created_at
    };
  }), [t]), C = Me.useMemo(() => {
    const B = i.trim().toLowerCase();
    return L.filter((S) => {
      var z;
      return m !== "all" && ((z = S.level) == null ? void 0 : z.toLowerCase()) !== m ? !1 : B ? S.message.toLowerCase().includes(B) || (S.created_at ? S.created_at.toLowerCase().includes(B) : !1) || (S.detail ? JSON.stringify(S.detail).toLowerCase().includes(B) : !1) : !0;
    });
  }, [L, i, m]);
  Me.useEffect(() => {
    const B = b.current;
    if (!B) return;
    const S = () => {
      B.clientHeight > 0 && T(B.clientHeight);
    };
    if (S(), typeof ResizeObserver > "u") return;
    const z = new ResizeObserver(S);
    return z.observe(B), () => z.disconnect();
  }, []), Me.useEffect(() => {
    const B = b.current;
    !f || !B || C.length === 0 || (B.scrollTop = B.scrollHeight, g(B.scrollTop));
  }, [C.length, f]);
  const y = !M && C.length > 80 && N > 0, _ = C.length * a, { startIndex: E, endIndex: R } = Me.useMemo(() => {
    if (!y)
      return { startIndex: 0, endIndex: Math.max(0, C.length - 1) };
    const B = Math.ceil(N / a), S = Math.floor(k / a) - n, z = Math.max(0, S), F = Math.min(C.length - 1, Math.floor(k / a) + B + n);
    return { startIndex: z, endIndex: F };
  }, [y, C.length, N, a, k, n]), D = Me.useMemo(() => C.length === 0 ? [] : C.slice(E, R + 1).map((B, S) => ({
    log: B,
    index: E + S
  })), [C, E, R]), A = async () => {
    const B = C.map(
      (S) => `[${S.created_at || "LOG"}][${(S.level || "INFO").toUpperCase()}] ${S.message} ${S.detail ? JSON.stringify(S.detail) : ""}`.trim()
    ).join(`
`);
    try {
      await navigator.clipboard.writeText(B), w(!0), setTimeout(() => w(!1), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "pro-log-viewer",
      className: x(
        "flex flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-slate-800 bg-slate-950 font-mono text-slate-200 shadow-md",
        d
      ),
      children: [
        /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2 text-xs", children: [
          /* @__PURE__ */ l("div", { className: "flex min-w-44 flex-1 items-center gap-2", children: [
            /* @__PURE__ */ l("div", { className: "relative max-w-sm flex-1", children: [
              /* @__PURE__ */ e(
                Pt,
                {
                  className: "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  value: i,
                  onChange: (B) => u(B.target.value),
                  placeholder: c.searchPlaceholder,
                  className: "h-7 w-full rounded-md border border-slate-700 bg-slate-950 pl-8 pr-7 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                }
              ),
              i && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": c.clearSearchLabel,
                  onClick: () => u(""),
                  className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer",
                  children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 p-0.5", children: Up.map((B) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => p(B),
                className: x(
                  "rounded px-2 py-0.5 text-[10px] font-semibold uppercase transition cursor-pointer",
                  m === B ? B === "error" ? "bg-rose-500/20 text-rose-300" : B === "warn" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/25 text-blue-300" : "text-slate-400 hover:text-slate-200"
                ),
                children: B
              },
              B
            )) })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex items-center gap-3 text-[11px] text-slate-400", children: [
            /* @__PURE__ */ e("span", { className: "tabular-nums", children: c.formatLineCount(C.length, L.length) }),
            /* @__PURE__ */ l("label", { className: "flex cursor-pointer items-center gap-1.5 select-none hover:text-slate-200", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: f,
                  onChange: (B) => h(B.target.checked),
                  className: "h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-0"
                }
              ),
              /* @__PURE__ */ e("span", { children: c.stickBottomLabel })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => void A(),
                className: "flex items-center gap-1 rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer",
                children: v ? /* @__PURE__ */ l(Ue, { children: [
                  /* @__PURE__ */ e(St, { className: "h-3 w-3 text-emerald-400", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { className: "text-emerald-300", children: c.copiedLabel })
                ] }) : /* @__PURE__ */ l(Ue, { children: [
                  /* @__PURE__ */ e(Or, { className: "h-3 w-3", "aria-hidden": "true" }),
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
            onScroll: (B) => g(B.currentTarget.scrollTop),
            className: x("relative w-full overflow-auto", r),
            children: C.length === 0 ? /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center p-8 text-xs text-slate-500", children: c.emptyText }) : /* @__PURE__ */ e(
              "div",
              {
                style: y ? { height: `${_}px`, width: "100%", position: "relative" } : { width: "100%" },
                children: D.map(({ log: B, index: S }) => {
                  var O;
                  const z = ((O = B.level) == null ? void 0 : O.toLowerCase()) || "info", F = z === "error" || z === "fatal", I = z === "warn" || z === "warning";
                  return /* @__PURE__ */ l(
                    "div",
                    {
                      "data-index": S,
                      style: y ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${a}px`,
                        transform: `translateY(${S * a}px)`
                      } : void 0,
                      className: x(
                        "flex items-center gap-2.5 px-3 py-1 text-xs leading-5 transition-colors hover:bg-slate-900/60",
                        y ? "overflow-hidden whitespace-nowrap" : "items-start",
                        F ? "bg-rose-950/20 text-rose-200" : I ? "bg-amber-950/15 text-amber-200" : "text-slate-300"
                      ),
                      children: [
                        /* @__PURE__ */ e("span", { className: "w-10 shrink-0 select-none text-right text-[10px] text-slate-600 tabular-nums", children: B.seq }),
                        B.created_at && /* @__PURE__ */ e("span", { className: "shrink-0 select-none text-[11px] text-slate-500 tabular-nums", children: B.created_at.length >= 19 ? B.created_at.slice(11, 19) : B.created_at }),
                        /* @__PURE__ */ e(
                          "span",
                          {
                            className: x(
                              "inline-block w-12 shrink-0 select-none rounded px-1 py-0.5 text-center text-[9px] font-bold uppercase leading-none",
                              F ? "bg-rose-500/25 text-rose-300" : I ? "bg-amber-500/25 text-amber-300" : "bg-slate-800 text-slate-400"
                            ),
                            children: z.slice(0, 5)
                          }
                        ),
                        /* @__PURE__ */ l(
                          "div",
                          {
                            className: x(
                              "min-w-0 flex-1",
                              y ? "truncate" : "break-all whitespace-pre-wrap"
                            ),
                            title: y ? `${B.message}${B.detail ? ` ${JSON.stringify(B.detail)}` : ""}` : void 0,
                            children: [
                              /* @__PURE__ */ e("span", { children: B.message }),
                              B.detail && Object.keys(B.detail).length > 0 && /* @__PURE__ */ e("span", { className: "ml-2 text-[11px] text-slate-500", children: JSON.stringify(B.detail) })
                            ]
                          }
                        )
                      ]
                    },
                    `${B.seq ?? S}-${S}`
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
const Ig = Gp, Yp = {
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
}, qp = {
  blue: "bg-blue-500/15 text-blue-500 dark:text-blue-300",
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  purple: "bg-purple-500/15 text-purple-600 dark:text-purple-300",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-300"
};
function _g({
  open: t,
  onOpenChange: r,
  enableShortcut: a = !0,
  entityMatchers: n = [],
  pages: s = [],
  onNavigate: o,
  actions: d = [],
  labels: c,
  searchQuery: b,
  onSearchQueryChange: i
}) {
  const u = { ...Yp, ...c }, [m, p] = Me.useState(!1), [f, h] = Me.useState(""), [v, w] = Me.useState(0), k = Me.useRef(null), g = Me.useRef([]), N = typeof t == "boolean", T = N ? t : m, M = Me.useCallback(
    (S) => {
      N || p(S), r == null || r(S);
    },
    [N, r]
  ), L = b !== void 0 ? b : f, C = Me.useCallback(
    (S) => {
      b === void 0 && h(S), i == null || i(S);
    },
    [b, i]
  );
  Me.useEffect(() => {
    if (!a || typeof window > "u") return;
    const S = (z) => {
      (z.metaKey || z.ctrlKey) && z.key.toLowerCase() === "k" && (z.preventDefault(), M(!T));
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [a, T, M]), Me.useEffect(() => {
    if (!T) return;
    w(0);
    const S = setTimeout(() => {
      var z;
      (z = k.current) == null || z.focus();
    }, 10);
    return () => clearTimeout(S);
  }, [T]);
  const y = L.trim(), _ = Me.useMemo(() => y ? n.filter((S) => S.match ? S.match(y) : S.prefix ? y.startsWith(S.prefix) : !1) : [], [n, y]), E = Me.useMemo(() => y ? s.filter(
    (S) => Wt(`${S.label} ${S.group ?? ""} ${S.to} ${S.keywords ?? ""}`, y)
  ) : s, [s, y]), R = Me.useMemo(() => y ? d.filter(
    (S) => Wt(`${S.label} ${S.group ?? ""} ${S.keywords ?? ""}`, y)
  ) : d, [d, y]), D = Me.useCallback(
    (S) => {
      M(!1), C(""), S();
    },
    [M, C]
  ), A = Me.useMemo(() => {
    const S = [];
    for (const z of _)
      S.push({
        key: `entity-${z.id}-${y}`,
        trigger: () => D(() => z.onSelect(y))
      });
    for (const z of E)
      S.push({
        key: `page-${z.id ?? z.to}`,
        trigger: () => D(() => {
          z.onSelect ? z.onSelect() : o == null || o(z.to, z);
        })
      });
    for (const z of R)
      S.push({
        key: `action-${z.id}`,
        trigger: () => D(z.onSelect)
      });
    return S;
  }, [_, E, R, y, D, o]);
  Me.useEffect(() => {
    w(0);
  }, [y]), Me.useEffect(() => {
    const S = g.current[v];
    S && typeof S.scrollIntoView == "function" && S.scrollIntoView({ block: "nearest" });
  }, [v]);
  const $ = (S) => {
    if (S.key === "ArrowDown") {
      S.preventDefault(), A.length > 0 && w((z) => (z + 1) % A.length);
      return;
    }
    if (S.key === "ArrowUp") {
      S.preventDefault(), A.length > 0 && w((z) => (z - 1 + A.length) % A.length);
      return;
    }
    if (S.key === "Enter") {
      const z = A[v];
      z && (S.preventDefault(), z.trigger());
    }
  };
  let B = 0;
  return /* @__PURE__ */ e(
    dr,
    {
      open: T,
      onClose: () => M(!1),
      closable: !1,
      draggable: !1,
      fullscreenable: !1,
      width: "min(680px, 92vw)",
      "aria-label": u.dialogLabel,
      className: "overflow-hidden [&>[data-dialog-body]]:p-0",
      children: /* @__PURE__ */ l(
        "div",
        {
          "data-slot": "pro-command-palette",
          className: "flex flex-col bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ l("div", { className: "flex items-center border-b border-[var(--abc-border)] px-4", children: [
              /* @__PURE__ */ e(Pt, { className: "mr-2.5 h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: k,
                  type: "text",
                  value: L,
                  onChange: (S) => C(S.target.value),
                  onKeyDown: $,
                  placeholder: u.searchPlaceholder,
                  "aria-label": u.searchPlaceholder,
                  className: "h-12 w-full bg-transparent text-sm text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              ),
              /* @__PURE__ */ e("kbd", { className: "hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] sm:inline-block", children: "ESC" })
            ] }),
            /* @__PURE__ */ e("div", { role: "listbox", className: "max-h-96 space-y-2 overflow-y-auto p-2", children: A.length === 0 ? /* @__PURE__ */ e("div", { className: "py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: u.emptyText }) : /* @__PURE__ */ l(Ue, { children: [
              _.length > 0 && /* @__PURE__ */ l("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-primary)]", children: u.entityGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: _.map((S) => {
                  const z = B++, F = z === v, I = qp[S.tone ?? "blue"];
                  return /* @__PURE__ */ l(
                    "button",
                    {
                      ref: (O) => {
                        g.current[z] = O;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": F,
                      "data-selected": F ? "true" : void 0,
                      onMouseEnter: () => w(z),
                      onClick: () => D(() => S.onSelect(y)),
                      className: x(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        F ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: [
                        S.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: S.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate font-mono", children: S.renderLabel ? S.renderLabel(y) : /* @__PURE__ */ l(Ue, { children: [
                          S.labelPrefix ? `${S.labelPrefix} ` : "",
                          /* @__PURE__ */ e("strong", { className: "font-semibold", children: y })
                        ] }) }),
                        /* @__PURE__ */ e("span", { className: x("rounded px-1.5 py-0.5 text-[10px] font-mono", I), children: u.enterKeyLabel })
                      ]
                    },
                    `entity-${S.id}`
                  );
                }) })
              ] }),
              E.length > 0 && /* @__PURE__ */ l("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: u.pagesGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: E.map((S) => {
                  const z = B++, F = z === v;
                  return /* @__PURE__ */ l(
                    "button",
                    {
                      ref: (I) => {
                        g.current[z] = I;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": F,
                      "data-selected": F ? "true" : void 0,
                      onMouseEnter: () => w(z),
                      onClick: () => D(() => {
                        S.onSelect ? S.onSelect() : o == null || o(S.to, S);
                      }),
                      className: x(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        F ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        S.icon && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-fg-muted)]", children: S.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: S.label }),
                        S.group && /* @__PURE__ */ e("span", { className: "shrink-0 text-[10px] text-[var(--abc-fg-muted)]", children: S.group })
                      ]
                    },
                    `page-${S.id ?? S.to}`
                  );
                }) })
              ] }),
              R.length > 0 && /* @__PURE__ */ l("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: u.actionsGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: R.map((S) => {
                  const z = B++, F = z === v;
                  return /* @__PURE__ */ l(
                    "button",
                    {
                      ref: (I) => {
                        g.current[z] = I;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": F,
                      "data-selected": F ? "true" : void 0,
                      onMouseEnter: () => w(z),
                      onClick: () => D(S.onSelect),
                      className: x(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        S.danger ? F ? "bg-red-500/15 text-[var(--abc-danger)]" : "text-[var(--abc-danger)] hover:bg-red-500/10" : F ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        S.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: S.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: S.label }),
                        F && /* @__PURE__ */ e(nl, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
                      ]
                    },
                    `action-${S.id}`
                  );
                }) })
              ] })
            ] }) }),
            /* @__PURE__ */ l("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-4 py-2 text-[11px] text-[var(--abc-fg-muted)]", children: [
              /* @__PURE__ */ l("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ l("span", { children: [
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↑" }),
                  " ",
                  /* @__PURE__ */ e("kbd", { className: "rounded border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 py-0.5 font-mono", children: "↓" }),
                  " ",
                  u.navigateHint
                ] }),
                /* @__PURE__ */ l("span", { children: [
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
function Mg({
  onClick: t,
  placeholder: r = "快速搜索页面、实体 ID…",
  mobilePlaceholder: a = "搜索…",
  ariaLabel: n = "打开全局命令面板",
  className: s,
  ...o
}) {
  const d = typeof navigator < "u" && /mac|iphone|ipad|ipod/i.test(navigator.userAgent);
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      "data-slot": "command-trigger-button",
      onClick: t,
      "aria-label": n,
      className: x(
        "group inline-flex h-8.5 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs text-[var(--abc-fg-muted)] shadow-2xs transition cursor-pointer",
        "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        s
      ),
      ...o,
      children: [
        /* @__PURE__ */ e(Pt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)]", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: r }),
        /* @__PURE__ */ e("span", { className: "sm:hidden", children: a }),
        /* @__PURE__ */ e("kbd", { className: "ml-1 hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)] sm:inline-block", children: d ? "⌘K" : "Ctrl+K" })
      ]
    }
  );
}
const Xp = ({
  title: t,
  description: r,
  breadcrumb: a,
  tags: n,
  actions: s,
  guide: o,
  guideButtonLabel: d = "操作说明",
  guideDrawerTitle: c,
  guideCloseLabel: b = "关闭",
  guideDrawerWidth: i = 480,
  guideOpen: u,
  defaultGuideOpen: m = !1,
  onGuideOpenChange: p,
  hideGuide: f = !1,
  children: h,
  className: v
}) => {
  const [w, k] = Vt({
    value: u,
    defaultValue: m,
    onChange: p
  }), g = !!(o && !f), N = typeof d == "string" ? d : "操作说明";
  return /* @__PURE__ */ l("header", { className: x("mb-5 border-b border-[var(--abc-border)] pb-4", v), children: [
    a ? /* @__PURE__ */ e("div", { className: "mb-2", children: a }) : null,
    /* @__PURE__ */ l("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
      /* @__PURE__ */ l("div", { className: "min-w-0 flex-1 space-y-1", children: [
        t || n ? /* @__PURE__ */ l("div", { className: "flex flex-wrap items-center gap-2", children: [
          t ? /* @__PURE__ */ e("h1", { className: "text-xl font-semibold tracking-tight text-[var(--abc-fg-primary)]", children: t }) : null,
          n
        ] }) : null,
        r ? /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-[var(--abc-fg-secondary)]", children: r }) : null
      ] }),
      s || g ? /* @__PURE__ */ l("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
        s,
        g && o ? /* @__PURE__ */ e(
          Le,
          {
            type: "button",
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ e(yu, { className: "h-3.5 w-3.5" }),
            "aria-expanded": w,
            onClick: () => k(!0),
            children: d
          }
        ) : null
      ] }) : null
    ] }),
    g && o ? /* @__PURE__ */ l(Ue, { children: [
      /* @__PURE__ */ l("details", { className: "sr-only", "aria-label": N, children: [
        /* @__PURE__ */ e("summary", { children: o.title }),
        /* @__PURE__ */ e("ol", { children: o.steps.map((T, M) => /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ l("span", { children: [
            T.step ?? M + 1,
            ". "
          ] }),
          /* @__PURE__ */ e("strong", { children: T.title }),
          T.description ? /* @__PURE__ */ l(Ue, { children: [
            ": ",
            /* @__PURE__ */ e("span", { children: T.description })
          ] }) : null
        ] }, M)) })
      ] }),
      /* @__PURE__ */ e(
        na,
        {
          open: w,
          onClose: () => k(!1),
          placement: "right",
          width: i,
          title: c ?? o.title,
          description: o.subtitle,
          footer: /* @__PURE__ */ e("div", { className: "flex justify-end", children: /* @__PURE__ */ e(Le, { type: "button", variant: "secondary", size: "sm", onClick: () => k(!1), children: b }) }),
          children: /* @__PURE__ */ l("div", { className: "space-y-4", children: [
            o.badge ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Lr, { tone: "info", children: o.badge }) }) : null,
            /* @__PURE__ */ e("ol", { className: "space-y-3", "aria-label": N, children: o.steps.map((T, M) => /* @__PURE__ */ e(
              "li",
              {
                className: "rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60 p-3.5",
                children: /* @__PURE__ */ l("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ e("span", { className: "mt-0.5 inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] px-1.5 font-mono text-xs font-semibold text-[var(--abc-primary)]", children: T.step ?? M + 1 }),
                  /* @__PURE__ */ l("div", { className: "min-w-0 flex-1 space-y-1", children: [
                    /* @__PURE__ */ e("div", { className: "text-sm font-medium text-[var(--abc-fg-primary)]", children: T.title }),
                    T.description ? /* @__PURE__ */ e("p", { className: "text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: T.description }) : null
                  ] })
                ] })
              },
              M
            )) }),
            o.summary ? /* @__PURE__ */ e("div", { className: "rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: o.summary }) : null,
            o.extra
          ] })
        }
      )
    ] }) : null,
    h ? /* @__PURE__ */ e("div", { className: "mt-4", children: h }) : null
  ] });
};
Xp.displayName = "ProPageHeader";
export {
  zn as ABC_BRAND_PRESETS,
  Js as ABC_DENSITY_PRESETS,
  tp as ABC_HEADER_HEIGHT_BY_SIZE,
  fa as ABC_MOTION_PRESETS,
  Qs as ABC_RADIUS_PRESETS,
  ep as ABC_SIDEBAR_WIDTH_BY_SIZE,
  ah as ABC_SIZE_PRESETS,
  To as AUTO_OPTION_TONES,
  vl as AbcConfirmHost,
  dh as AbcProvider,
  Ub as AbcToastViewport,
  Ih as ActionCard,
  jh as Alert,
  Jh as AsyncInlineError,
  tg as AttentionList,
  ho as AuroraBackground,
  dp as AuthLayout,
  dm as Avatar,
  bn as BYTE_UNITS,
  Ll as BYTE_UNIT_FACTORS,
  yh as Badge,
  Rh as BentoCard,
  Ah as BentoGrid,
  po as BorderBeam,
  Sf as BrandIcon,
  Zr as BrandLogoBlock,
  Dh as Breadcrumb,
  Le as Button,
  Wh as ByteQuotaInput,
  Eo as COLOR_ALIAS_TO_TONE,
  un as Card,
  xm as CardContent,
  vm as CardDescription,
  ym as CardFooter,
  hm as CardHeader,
  gm as CardTitle,
  Tl as Cascader,
  Th as CheckCard,
  Eh as CheckCardGroup,
  Tr as Checkbox,
  Yh as Collapse,
  _h as CollapsibleCard,
  cp as CommandPalette,
  Mg as CommandTriggerButton,
  rg as ConfirmDialog,
  ih as ConfirmProvider,
  mh as CopyButton,
  Kl as CopyableCode,
  bo as CopyableText,
  vg as CrudConfigPage,
  hg as CrudFormLayout,
  Sg as CrudSearchForm,
  Eg as CrudTable,
  hh as CursorPagination,
  rp as DEFAULT_ABC_LAYOUT_SETTINGS,
  Ht as DEFAULT_ABC_THEME,
  ns as DENSITY_CELL_PY,
  mn as DURATION_UNITS,
  Bl as DURATION_UNIT_FACTORS,
  Qf as DataTable,
  La as DatePicker,
  Ba as DateRangePicker,
  Hl as DescriptionList,
  Xh as DescriptionListItem,
  Gh as Descriptions,
  dr as Dialog,
  ws as DialogContent,
  ys as DialogContext,
  Cs as DialogDescription,
  ks as DialogFooter,
  Ns as DialogHeader,
  Ss as DialogTitle,
  cg as DictSelect,
  dg as DictTag,
  Nh as Divider,
  na as Drawer,
  Df as DrawerBody,
  Rf as DrawerDescription,
  Lf as DrawerFooter,
  Mf as DrawerHeader,
  Af as DrawerTitle,
  Ra as Dropdown,
  sp as DualColumnNav,
  Vh as DurationQuotaInput,
  wl as EmptyState,
  zh as ErrorBoundary,
  Wf as FILTER_HIGHLIGHT_SWATCHES,
  Dl as FileUpload,
  xg as FilterPillGroup,
  Tp as FilterToolbar,
  Tg as FormDrawerDialog,
  Ds as FormField,
  Mp as HeaderColumnFilterPopover,
  co as ICON_CATALOG,
  gr as Icon,
  fh as IconBadge,
  uo as IconPicker,
  Pa as ImagePreview,
  Al as ImageUpload,
  kt as Input,
  kn as InputNumber,
  Kf as InspectorPanel,
  Gr as Kbd,
  ip as KeepAliveContainer,
  Dm as Label,
  zf as Loading,
  eg as LoadingStateCard,
  Ch as MetricCard,
  Pb as Modal,
  pg as MultiImageFieldControl,
  lp as MultiTabBar,
  Kr as NotificationBanner,
  ag as OneTimeSecretDialog,
  og as PageContainer,
  ng as PageTransition,
  dn as Pagination,
  ig as Permission,
  hp as PermissionGuard,
  Rs as Popover,
  Mh as PricingCard,
  Ap as ProColumnSettingsPopover,
  _g as ProCommandPalette,
  gg as ProConfigForm,
  Ep as ProConfigPage,
  kp as ProCrudFormFieldControl,
  si as ProCrudFormLayout,
  Sp as ProCrudFormModal,
  Lp as ProCrudSearchForm,
  Cg as ProCrudTable,
  Cp as ProCrudViewModal,
  Dp as ProFloatingBatchBar,
  Wp as ProFormContainer,
  gp as ProFormLayout,
  Np as ProIconFieldControl,
  lg as ProLayout,
  Gp as ProLogViewer,
  ni as ProMultiImageUpload,
  Xp as ProPageHeader,
  Rp as ProRowActionsOverflow,
  li as ProTable,
  Rl as Progress,
  yg as QuickSelectBar,
  pr as RadioGroup,
  Qh as ReadErrorBanner,
  wg as ReasonedActionDialog,
  Ng as ReasonedActionDrawer,
  Fh as Result,
  nm as RichIconText,
  Lm as SearchInput,
  Bh as SegmentedControl,
  ir as Select,
  ph as SelectField,
  Wn as SidebarNav,
  jt as Skeleton,
  gh as SkeletonCard,
  xh as SkeletonChart,
  vh as SkeletonTable,
  $h as SliderVerify,
  fo as SmartPagination,
  kh as Space,
  sg as SplitInspectorLayout,
  Sh as SpotlightCard,
  Lr as StatusTag,
  Lh as Steps,
  or as Switch,
  oo as TONE_ICONS,
  tf as TabErrorBoundary,
  Yl as Table,
  Xl as TableBody,
  Zf as TableCaption,
  en as TableCell,
  Gl as TableCore,
  Xf as TableFooter,
  Zl as TableHead,
  ql as TableHeader,
  wa as TableRow,
  Uh as Tabs,
  um as Tag,
  ff as TagInput,
  Zh as TenantIcon,
  Ma as Textarea,
  Bo as ThemeCustomizer,
  Tf as ThemeSwitcher,
  qh as Timeline,
  Vb as ToastContainer,
  Wb as ToastItemView,
  Yt as Tooltip,
  Ao as TopHorizontalNav,
  Vl as TopProgressBar,
  Il as Transfer,
  Oh as Tree,
  Da as TreeSelect,
  Ph as TreeSelectField,
  Ig as VirtualLogViewer,
  jf as Watermark,
  ln as abcConfirm,
  Ff as abcProgress,
  Is as abcToast,
  nh as abcUiClasses,
  Gt as applyAbcThemeToDocument,
  yr as baseFieldControlClass,
  Yn as buildCalendarMonthGrid,
  Ip as buildCsvContent,
  pb as buttonClass,
  sh as buttonVariants,
  Ja as cleanQueryObject,
  $b as clearToasts,
  x as cn,
  qr as collectAllExpandableKeys,
  vs as computeTreeCheckState,
  oh as confirm,
  Sn as copyToClipboard,
  Tn as createProTableApi,
  ug as createTableApi,
  gb as dangerButtonClass,
  Ts as dismissToast,
  jo as downloadTableCsv,
  Au as filterAndSortClientRows,
  yb as filterCardClass,
  Eu as filterTreeNodes,
  _u as filterTreeSelectNodes,
  Jl as findBreadcrumbChain,
  Ea as flattenNodeText,
  Mu as flattenVisibleTreeNodes,
  kg as formatFilterText,
  Va as formatIsoDate,
  Kh as formatQuotaBytes,
  Hh as formatQuotaDuration,
  ro as formatTreeCheckedStrategy,
  Su as getCharInitial,
  En as getNestedValue,
  Nn as getOverlayPortalContainer,
  Cu as getPinyinInitials,
  mb as inputClass,
  fg as isFieldRequired,
  hr as isProApiFailure,
  ai as isSchemaFieldRequired,
  $l as isSvgSource,
  Ib as labelClass,
  Wt as matchKeywordWithPinyin,
  Cr as menuContainsPath,
  ss as normalizeProListResponse,
  Tu as normalizeTreeSelectData,
  Cb as pageHeaderClass,
  Tb as pageSubTitleClass,
  Eb as pageTitleClass,
  xb as panelClass,
  Hf as parseNumericWidth,
  Qn as parseSelectChildren,
  Fb as pauseToast,
  jl as pickBestByteUnit,
  Fl as pickBestDurationUnit,
  Ur as pushToast,
  Ru as readQueryFromUrlSearch,
  bh as registerAbcIcons,
  Ul as renderBuiltInValue,
  Yr as resolveAbcThemeMode,
  Qr as resolveFieldKey,
  Iu as resolveTreeCheckedStateFromValue,
  Ob as resumeToast,
  hb as secondaryClass,
  wb as tableCardClass,
  Sb as tableCellClass,
  Nb as tableHeadClass,
  kb as tableHeaderCellClass,
  wh as tagVariants,
  vb as textButtonClass,
  fb as textareaClass,
  ch as toast,
  ll as toggleTreeNodeChecked,
  ku as transitionAbcTheme,
  At as useAbcConfig,
  ri as useAbcDict,
  qb as useAbcDrawerCascadeMode,
  Be as useAbcMotion,
  Ps as useAbcPermission,
  je as useAbcSize,
  Ef as useColorScheme,
  lh as useConfirm,
  Vt as useControllableState,
  mg as useCrudTable,
  uh as useCursorStack,
  Lb as useDialog,
  Mb as useDraftStorage,
  $r as useFloatingPosition,
  Yb as useOptionalAbcConfig,
  _r as usePresence,
  yp as useProForm,
  xp as useProTable,
  vp as useProTableApi,
  bg as useTableApi,
  Ab as useTableSettings,
  Du as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
