var oc = Object.defineProperty;
var ic = (t, r, a) => r in t ? oc(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var Hr = (t, r, a) => ic(t, typeof r != "symbol" ? r + "" : r, a);
import * as Ne from "react";
import dt, { useState as $, useEffect as ge, useRef as be, useCallback as fe, useLayoutEffect as Na, createContext as as, useId as It, useContext as Ea, useMemo as ce, useImperativeHandle as bn, Component as Po } from "react";
import { jsxs as i, jsx as e, Fragment as Ke } from "react/jsx-runtime";
import { Loader2 as or, Minimize2 as ns, Maximize2 as ss, X as Ct, Trash2 as kr, AlertTriangle as Cr, CheckCircle2 as Sr, HelpCircle as Jr, Info as _a, AlertCircle as Rr, Zap as lc, XCircle as cc, Wrench as dc, Wallet as uc, Video as bc, Users as mc, UserCog as fc, UserCheck as pc, User as hc, Upload as mn, Unlock as gc, TrendingUp as vc, Trash as xc, Timer as yc, Ticket as wc, Terminal as Nc, Tags as kc, Tag as Sc, Store as Cc, StarOff as Ec, Star as _c, Sparkles as Ta, Smartphone as Tc, SlidersHorizontal as Kn, Sliders as Ic, ShoppingCart as Mc, ShoppingBag as Ac, ShieldCheck as os, ShieldAlert as fn, Shield as Rc, Share2 as Dc, Share as Lc, Settings as Bc, Server as Pc, Send as zc, Search as zt, ScrollText as jc, RotateCw as pn, RotateCcw as ir, RefreshCw as jr, Receipt as Fc, Radio as Oc, PlusCircle as $c, Plus as hn, Play as zo, PieChart as Hc, PhoneCall as Kc, Phone as Wc, Pause as Vc, PanelTop as Uc, PanelLeft as Gc, Palette as is, Package as Yc, Network as qc, MoreHorizontal as ls, Monitor as cs, Minus as gn, MessagesSquare as Xc, MessageSquareText as Zc, MessageSquareQuote as Jc, MessageSquare as Qc, MessageCircle as ed, Menu as jo, Megaphone as td, MapPin as rd, Lock as ad, ListOrdered as nd, ListChecks as sd, Link2 as od, LineChart as id, LayoutGrid as ld, LayoutDashboard as cd, Layers as ds, KeyRound as Fo, Key as dd, Image as Oo, Home as us, History as ud, Headphones as bd, HardDrive as md, Handshake as fd, Globe2 as pd, Globe as hd, FolderTree as $o, FolderPlus as gd, FolderOpen as vd, FolderGit2 as xd, Folder as yd, Flame as wd, FileText as Nd, FileSpreadsheet as kd, FileClock as Sd, FileCheck as Cd, Eye as Qr, Edit3 as Ya, Edit as Ed, Download as Wn, Database as _d, CreditCard as Td, Cpu as Id, Copy as Fr, Compass as Ho, Coins as Md, Clock as Za, CircleDollarSign as Ad, CheckSquare as Rd, CheckCircle as Ko, Check as St, Camera as Dd, CalendarCheck as Ld, Calendar as bs, Building2 as Wo, Boxes as Bd, BookMarked as Pd, BellRing as zd, Bell as jd, BarChart3 as Fd, BarChart2 as Od, AlertOctagon as $d, Activity as Hd, EyeOff as Vo, ChevronDown as er, FolderSearch as Kd, ChevronLeft as Ja, ChevronRight as nr, ArrowUpRight as Uo, ArrowDownRight as Wd, ChevronsLeft as Go, ChevronsRight as Yo, UploadCloud as Vd, ArrowRight as qo, ChevronsUpDown as Ud, ChevronsDownUp as Gd, ZoomOut as Yd, ZoomIn as qd, WifiOff as Xd, CircleAlert as Zd, Sun as ka, Moon as Sa, GripVertical as vn, ServerCrash as Jd, FileSearch as Qd, ArrowUp as ms, ArrowDown as fs, ArrowUpDown as Xo, Pin as Xr, PinOff as eu, ArrowLeft as tu, Columns as ru, Pencil as au, CornerDownLeft as Zo, Code2 as nu, PanelLeftOpen as su, PanelLeftClose as ou, Save as Jo, Filter as Qa, Settings2 as iu, ChevronUp as en, ListFilter as lu, AlignJustify as cu, BookOpen as du } from "lucide-react";
import { createPortal as cr } from "react-dom";
import We from "dayjs";
const Ln = {
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
}, qs = {
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
}, Xs = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, Wp = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, fa = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Kt = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, Zs = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function uu(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of Zs)
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
  for (const s of Zs)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function Ur(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function bu(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Vt(t) {
  const r = Ur(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return bu(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), uu(a, t.customBrandColor), r;
}
function mu(t, r) {
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
const Bn = [
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
function fu(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = Bn.length - 1; r >= 0; r--)
    if (t.localeCompare(Bn[r].start, "zh-CN") >= 0)
      return Bn[r].letter;
  return t.toLowerCase();
}
function pu(t) {
  return Array.from(t).map(fu).join("");
}
function ar(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : pu(t).includes(a);
}
function Qo(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      Qo(a, r);
  return r;
}
function ps(t, r, a = !1) {
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
function ei(t, r, a, n, s = !1) {
  const o = new Set(r);
  if (s)
    return n ? o.add(a.key) : o.delete(a.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const d = Qo(a);
  for (const c of d)
    n ? o.add(c) : o.delete(c);
  return ps(t, Array.from(o), !1);
}
function hu(t, r) {
  const a = r.trim();
  if (!a)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(o) {
    const d = [];
    for (const c of o) {
      const b = c.children ? s(c.children) : [], l = ar(c.title, a);
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
function Gr(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function Js(t, r, a) {
  const n = t[r] !== void 0 ? t[r] : t.label !== void 0 ? t.label : t.title;
  return typeof n == "string" || typeof n == "number" ? { title: String(n), rawLabel: n } : typeof t.title == "string" || typeof t.title == "number" ? { title: String(t.title), rawLabel: n ?? t.title } : { title: String(a), rawLabel: n ?? String(a) };
}
function gu(t = [], r) {
  const a = (r == null ? void 0 : r.fieldNames) ?? {}, n = a.label ?? "label", s = a.value ?? "value", o = a.children ?? "children", d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), b = r == null ? void 0 : r.treeDataSimpleMode;
  if (b) {
    const m = (typeof b == "object" ? b.id : void 0) ?? "id", p = (typeof b == "object" ? b.pId : void 0) ?? "pId", f = typeof b == "object" && "rootPId" in b ? b.rootPId : null, h = [], v = /* @__PURE__ */ new Map();
    t.forEach((g, N) => {
      const _ = g[s] !== void 0 ? g[s] : g[m] !== void 0 ? g[m] : g.value !== void 0 ? g.value : g.key !== void 0 ? g.key : N, A = typeof _ == "string" || typeof _ == "number" ? _ : String(_ ?? N), { title: L, rawLabel: C } = Js(g, n, A), y = g[m] !== void 0 ? g[m] : A, T = g[p], E = {
        key: A,
        value: A,
        title: L,
        rawLabel: C,
        disabled: !!g.disabled,
        selectable: g.selectable,
        checkable: g.checkable,
        isLeaf: g.isLeaf,
        icon: typeof g.icon == "string" ? g.icon : void 0,
        badge: typeof g.badge == "string" || typeof g.badge == "number" ? g.badge : void 0,
        raw: g
      }, D = String(y), M = String(E.key);
      d.set(M, E);
      const R = {
        idStr: D,
        pIdRaw: T,
        pIdStr: T == null || T === "" ? null : String(T),
        node: E
      };
      h.push(R), v.set(D, R);
    });
    const w = [], k = f == null ? null : String(f);
    for (const g of h) {
      const N = g.pIdStr !== null && g.pIdStr !== k ? v.get(g.pIdStr) : void 0;
      N && N !== g ? (N.node.children || (N.node.children = []), N.node.children.push(g.node), c.set(String(g.node.key), String(N.node.key))) : (w.push(g.node), c.set(String(g.node.key), null));
    }
    return { treeNodes: w, nodeMap: d, parentMap: c };
  }
  function l(m, p, f) {
    return m.map((h, v) => {
      const k = a.value !== void 0 && h[s] !== void 0 ? h[s] : h.value !== void 0 ? h.value : h.key !== void 0 ? h.key : `${f}-${v}`, g = typeof k == "string" || typeof k == "number" ? k : String(k), { title: N, rawLabel: _ } = Js(h, n, g), A = String(g), L = h[o] ?? h.children, C = Array.isArray(L) ? l(L, A, `${f}-${v}`) : void 0, y = {
        key: g,
        value: g,
        title: N,
        rawLabel: _,
        disabled: !!h.disabled,
        selectable: h.selectable,
        checkable: h.checkable,
        isLeaf: h.isLeaf,
        icon: typeof h.icon == "string" ? h.icon : void 0,
        badge: typeof h.badge == "string" || typeof h.badge == "number" ? h.badge : void 0,
        children: C,
        raw: h
      };
      return d.set(A, y), c.set(A, p), y;
    });
  }
  return { treeNodes: l(t, null, "root"), nodeMap: d, parentMap: c };
}
function ti(t, r) {
  if (!t.disabled && t.checkable !== !1 && r.push(t.key), t.children)
    for (const a of t.children)
      ti(a, r);
}
function vu(t, r, a = !1) {
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
      n.has(p) && !m.disabled && m.checkable !== !1 ? (o.add(p), ti(m, s)) : m.children && m.children.length > 0 && d(m.children);
    }
  }
  d(t);
  const c = ps(t, s, !1), b = new Set(c.checkedKeys.map((u) => String(u))), l = [];
  for (const u of r) {
    const m = String(u);
    if (!o.has(m) && !b.has(m)) {
      let f = function(h) {
        for (const v of h)
          if (String(v.key) === m || v.children && f(v.children))
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
function Qs(t, r, a = "SHOW_ALL", n = !1) {
  const s = new Set(r.map((l) => String(l))), o = /* @__PURE__ */ new Set(), d = [], c = /* @__PURE__ */ new Set();
  function b(l) {
    for (const u of l)
      c.add(String(u.key)), u.children && b(u.children);
  }
  if (b(t), n || a === "SHOW_ALL") {
    let l = function(u) {
      for (const m of u) {
        const p = String(m.key);
        s.has(p) && !o.has(p) && (o.add(p), d.push(m.key)), m.children && l(m.children);
      }
    };
    l(t);
  } else if (a === "SHOW_PARENT") {
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
  for (const l of r) {
    const u = String(l);
    !c.has(u) && !o.has(u) && (o.add(u), d.push(l));
  }
  return d;
}
function xu(t, r, a = "both") {
  const n = r.trim();
  if (!n)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const s = n.toLowerCase(), o = [];
  function d(c) {
    const b = [];
    for (const l of c) {
      const u = l.children ? d(l.children) : [], m = a !== "value" && ar(l.title, n), p = a !== "title" && String(l.value).toLowerCase().includes(s);
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
function yu(t, r, a) {
  const n = [];
  function s(o, d, c) {
    const b = o.length;
    o.forEach((l, u) => {
      const m = String(l.key), p = a ? a(l) : !!(l.children && l.children.length > 0), f = p && r.has(m);
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
function ri(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function Kr(t, r) {
  if (!(!t || typeof t != "object")) {
    if (r in t)
      return t[r];
    if (r.includes("."))
      return r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t);
  }
}
function wu({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let d = [...t];
  const c = a.trim();
  c && (d = d.filter((b) => (r && r.length > 0 ? r : Object.keys(b)).some((u) => {
    const m = Kr(b, u);
    return m != null && ar(String(m), c);
  })));
  for (const [b, l] of Object.entries(n))
    if (l != null) {
      if (Array.isArray(l)) {
        if (l.length === 0)
          continue;
        d = d.filter((u) => {
          const m = Kr(u, b);
          return m == null ? !1 : Array.isArray(m) ? l.some((p) => m.map(String).includes(String(p))) : l.some((p) => String(m) === String(p) || ar(String(m), String(p)));
        });
        continue;
      }
      if (ri(l)) {
        const u = (l.start ?? "").trim(), m = (l.end ?? "").trim();
        if (!u && !m)
          continue;
        d = d.filter((p) => {
          const f = Kr(p, b);
          if (f == null)
            return !1;
          const h = String(f).slice(0, 10);
          return !(u && h < u || m && h > m);
        });
        continue;
      }
      String(l).trim() !== "" && (d = d.filter((u) => {
        const m = Kr(u, b);
        return m == null ? !1 : ar(String(m), String(l));
      }));
    }
  if (s && o) {
    const b = o === "asc" ? 1 : -1;
    d.sort((l, u) => {
      const m = Kr(l, s), p = Kr(u, s);
      return typeof m == "number" && typeof p == "number" ? (m - p) * b : String(m ?? "").localeCompare(String(p ?? ""), "zh-CN") * b;
    });
  }
  return d;
}
function qa(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || ri(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function Nu(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((o, d) => {
    o && (s && !s.has(d) || (n[d] = o));
  }), n;
}
function ku(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of r)
    n.delete(o);
  for (const [o, d] of Object.entries(a))
    d == null || Array.isArray(d) || typeof d == "object" || String(d).trim() !== "" && n.set(o, String(d));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function Wa(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), d = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${d}`;
}
function Vn(t, r, a = /* @__PURE__ */ new Date()) {
  const n = Wa(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), o = new Date(t, r + 1, 0).getDate(), d = new Date(t, r, 0).getDate(), c = [];
  for (let l = s - 1; l >= 0; l--) {
    const u = d - l, m = Wa(t, r - 1, u);
    c.push({ iso: m, day: u, inCurrentMonth: !1, isToday: m === n });
  }
  for (let l = 1; l <= o; l++) {
    const u = Wa(t, r, l);
    c.push({ iso: u, day: l, inCurrentMonth: !0, isToday: u === n });
  }
  let b = 1;
  for (; c.length < 42; ) {
    const l = Wa(t, r + 1, b);
    c.push({ iso: l, day: b, inCurrentMonth: !1, isToday: l === n }), b += 1;
  }
  return c;
}
function ai(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = ai(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function Su() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = ai(t)) && (n && (n += " "), n += r);
  return n;
}
const hs = "-", Cu = (t) => {
  const r = _u(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (d) => {
      const c = d.split(hs);
      return c[0] === "" && c.length !== 1 && c.shift(), ni(c, r) || Eu(d);
    },
    getConflictingClassGroupIds: (d, c) => {
      const b = a[d] || [];
      return c && n[d] ? [...b, ...n[d]] : b;
    }
  };
}, ni = (t, r) => {
  var d;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? ni(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = t.join(hs);
  return (d = r.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : d.classGroupId;
}, eo = /^\[(.+)\]$/, Eu = (t) => {
  if (eo.test(t)) {
    const r = eo.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, _u = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Iu(Object.entries(t.classGroups), a).forEach(([o, d]) => {
    Un(d, n, o, r);
  }), n;
}, Un = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : to(r, s);
      o.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (Tu(s)) {
        Un(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([o, d]) => {
      Un(d, to(r, o), a, n);
    });
  });
}, to = (t, r) => {
  let a = t;
  return r.split(hs).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Tu = (t) => t.isThemeGetter, Iu = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([d, c]) => [r + d, c])) : o);
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
}, si = "!", Au = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], o = r.length, d = (c) => {
    const b = [];
    let l = 0, u = 0, m;
    for (let w = 0; w < c.length; w++) {
      let k = c[w];
      if (l === 0) {
        if (k === s && (n || c.slice(w, w + o) === r)) {
          b.push(c.slice(u, w)), u = w + o;
          continue;
        }
        if (k === "/") {
          m = w;
          continue;
        }
      }
      k === "[" ? l++ : k === "]" && l--;
    }
    const p = b.length === 0 ? c : c.substring(u), f = p.startsWith(si), h = f ? p.substring(1) : p, v = m && m > u ? m - u : void 0;
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
}, Ru = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, Du = (t) => ({
  cache: Mu(t.cacheSize),
  parseClassName: Au(t),
  ...Cu(t)
}), Lu = /\s+/, Bu = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], d = t.trim().split(Lu);
  let c = "";
  for (let b = d.length - 1; b >= 0; b -= 1) {
    const l = d[b], {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: f
    } = a(l);
    let h = !!f, v = n(h ? p.substring(0, f) : p);
    if (!v) {
      if (!h) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = n(p), !v) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      h = !1;
    }
    const w = Ru(u).join(":"), k = m ? w + si : w, g = k + v;
    if (o.includes(g))
      continue;
    o.push(g);
    const N = s(v, h);
    for (let _ = 0; _ < N.length; ++_) {
      const A = N[_];
      o.push(k + A);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Pu() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = oi(r)) && (n && (n += " "), n += a);
  return n;
}
const oi = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = oi(t[n])) && (a && (a += " "), a += r);
  return a;
};
function zu(t, ...r) {
  let a, n, s, o = d;
  function d(b) {
    const l = r.reduce((u, m) => m(u), t());
    return a = Du(l), n = a.cache.get, s = a.cache.set, o = c, c(b);
  }
  function c(b) {
    const l = n(b);
    if (l)
      return l;
    const u = Bu(b, a);
    return s(b, u), u;
  }
  return function() {
    return o(Pu.apply(null, arguments));
  };
}
const wt = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, ii = /^\[(?:([a-z-]+):)?(.+)\]$/i, ju = /^\d+\/\d+$/, Fu = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ou = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $u = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ku = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xr = (t) => Yr(t) || Fu.has(t) || ju.test(t), Ir = (t) => ea(t, "length", Ju), Yr = (t) => !!t && !Number.isNaN(Number(t)), Pn = (t) => ea(t, "number", Yr), pa = (t) => !!t && Number.isInteger(Number(t)), Vu = (t) => t.endsWith("%") && Yr(t.slice(0, -1)), Ue = (t) => ii.test(t), Mr = (t) => Ou.test(t), Uu = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Gu = (t) => ea(t, Uu, li), Yu = (t) => ea(t, "position", li), qu = /* @__PURE__ */ new Set(["image", "url"]), Xu = (t) => ea(t, qu, eb), Zu = (t) => ea(t, "", Qu), ha = () => !0, ea = (t, r, a) => {
  const n = ii.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, Ju = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $u.test(t) && !Hu.test(t)
), li = () => !1, Qu = (t) => Ku.test(t), eb = (t) => Wu.test(t), tb = () => {
  const t = wt("colors"), r = wt("spacing"), a = wt("blur"), n = wt("brightness"), s = wt("borderColor"), o = wt("borderRadius"), d = wt("borderSpacing"), c = wt("borderWidth"), b = wt("contrast"), l = wt("grayscale"), u = wt("hueRotate"), m = wt("invert"), p = wt("gap"), f = wt("gradientColorStops"), h = wt("gradientColorStopPositions"), v = wt("inset"), w = wt("margin"), k = wt("opacity"), g = wt("padding"), N = wt("saturate"), _ = wt("scale"), A = wt("sepia"), L = wt("skew"), C = wt("space"), y = wt("translate"), T = () => ["auto", "contain", "none"], E = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", Ue, r], M = () => [Ue, r], R = () => ["", xr, Ir], O = () => ["auto", Yr, Ue], P = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], S = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], I = () => ["", "0", Ue], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [Yr, Ue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ha],
      spacing: [xr, Ir],
      blur: ["none", "", Mr, Ue],
      brightness: H(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Mr, Ue],
      borderSpacing: M(),
      borderWidth: R(),
      contrast: H(),
      grayscale: I(),
      hueRotate: H(),
      invert: I(),
      gap: M(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Vu, Ir],
      inset: D(),
      margin: D(),
      opacity: H(),
      padding: M(),
      saturate: H(),
      scale: H(),
      sepia: I(),
      skew: H(),
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
        aspect: ["auto", "square", "video", Ue]
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
        columns: [Mr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
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
        object: [...P(), Ue]
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
        z: ["auto", pa, Ue]
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
        flex: ["1", "auto", "initial", "none", Ue]
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
        order: ["first", "last", "none", pa, Ue]
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
          span: ["full", pa, Ue]
        }, Ue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
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
          span: [pa, Ue]
        }, Ue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": ["auto", "min", "max", "fr", Ue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ue]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ue, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ue, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ue, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [Mr]
        }, Mr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ue, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ue, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ue, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ue, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Mr, Ir]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Yr, Pn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xr, Ue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ue]
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
        decoration: ["auto", "from-font", xr, Ir]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xr, Ue]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ue]
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
        content: ["none", Ue]
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
        bg: [...P(), Yu]
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
        }, Xu]
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
        "outline-offset": [xr, Ue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xr, Ir]
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xr, Ir]
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
        shadow: ["", "inner", "none", Mr, Zu]
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
        "mix-blend": [...B(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "drop-shadow": ["", "none", Mr, Ue]
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
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [A]
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
        "backdrop-sepia": [A]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ue]
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
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pa, Ue]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ue]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ue]
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
        "will-change": ["auto", "scroll", "contents", "transform", Ue]
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
        stroke: [xr, Ir, Pn]
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
}, rb = /* @__PURE__ */ zu(tb);
function x(...t) {
  return rb(Su(t));
}
const ab = "w-full h-8.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", nb = "w-full rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] hover:border-[var(--abc-border-strong)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none transition-all disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", sb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-primary)] hover:bg-[var(--abc-primary-hover)] active:bg-[var(--abc-primary-active)] px-3.5 py-1.5 text-xs font-medium text-[var(--abc-primary-fg)] transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none", ob = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:border-[var(--abc-border-strong)] px-3.5 py-1.5 text-xs font-medium transition-all disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer select-none", ib = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md,0.5rem)] bg-[var(--abc-danger)] hover:opacity-90 active:opacity-95 px-3.5 py-1.5 text-xs font-medium text-white transition-all shadow-2xs active:scale-[0.99] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer select-none", lb = "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-sm,0.375rem)] bg-transparent text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer select-none", cb = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]", db = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]", ub = "rounded-[var(--abc-radius-lg,0.75rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] overflow-hidden", bb = "bg-[var(--abc-bg-muted)] border-b border-[var(--abc-border)] text-xs font-semibold text-[var(--abc-fg-secondary)]", mb = "px-4 py-3 text-xs font-semibold text-[var(--abc-fg-secondary)] whitespace-nowrap", fb = "px-4 py-3 text-xs text-[var(--abc-fg-secondary)]", pb = "flex flex-col sm:flex-row sm:items-center justify-between gap-3", hb = "text-base font-bold text-[var(--abc-fg)] tracking-tight", gb = "text-xs text-[var(--abc-fg-muted)] mt-0.5", vb = "block text-xs font-medium text-[var(--abc-fg-secondary)] mb-1.5", Vp = {
  input: ab,
  textarea: nb,
  button: sb,
  secondary: ob,
  dangerButton: ib,
  textButton: lb,
  panel: cb,
  filterCard: db,
  tableCard: ub,
  tableHead: bb,
  tableHeaderCell: mb,
  tableCell: fb,
  pageHeader: pb,
  pageTitle: hb,
  pageSubTitle: gb,
  label: vb
};
function xb() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Dr(t, r = 200) {
  const [a, n] = $(t), s = xb();
  return t && !a && n(!0), ge(() => {
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
function lr({
  value: t,
  defaultValue: r,
  onChange: a
}) {
  const [n, s] = $(r), o = t !== void 0, d = o ? t : n, c = be(d);
  c.current = d;
  const b = be(a);
  b.current = a;
  const l = fe(
    (u) => {
      var p;
      const m = typeof u == "function" ? u(c.current) : u;
      o || s(m), (p = b.current) == null || p.call(b, m);
    },
    [o]
  );
  return [d, l];
}
function yb(t) {
  const r = t ? `abc_draft_${t}` : "", a = fe(() => {
    if (!r || typeof window > "u") return null;
    try {
      const c = window.localStorage.getItem(r);
      return c ? JSON.parse(c) : null;
    } catch {
      return null;
    }
  }, [r]), [n, s] = $(() => !!a()), o = fe(
    (c) => {
      if (!(!r || typeof window > "u"))
        try {
          window.localStorage.setItem(r, JSON.stringify(c)), s(!0);
        } catch {
        }
    },
    [r]
  ), d = fe(() => {
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
const Gn = "#3b82f6", ro = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  filterHighlightColor: Gn,
  density: "default"
};
function wb(t, r = "default", a = []) {
  const n = t ? `abc_table_${t}` : "", s = t ? `table_settings_${t}` : "", [o, d] = $(() => {
    const w = {
      ...ro,
      hiddenKeys: a,
      density: r
    };
    if (!n || typeof window > "u") return w;
    try {
      const k = window.localStorage.getItem(n);
      if (k) {
        const A = JSON.parse(k);
        return {
          hiddenKeys: Array.isArray(A.hiddenKeys) ? A.hiddenKeys : a,
          columnOrder: Array.isArray(A.columnOrder) ? A.columnOrder : [],
          columnWidths: A.columnWidths && typeof A.columnWidths == "object" ? A.columnWidths : {},
          columnFixed: A.columnFixed && typeof A.columnFixed == "object" ? A.columnFixed : {},
          searchVisible: A.searchVisible && typeof A.searchVisible == "object" ? A.searchVisible : {},
          filterHighlightColor: typeof A.filterHighlightColor == "string" && A.filterHighlightColor ? A.filterHighlightColor : Gn,
          density: A.density ?? r
        };
      }
      const g = s ? window.localStorage.getItem(s) : null;
      if (!g) return w;
      const N = JSON.parse(g), _ = new Set(a);
      return N.columnVisible && typeof N.columnVisible == "object" && Object.entries(N.columnVisible).forEach(([A, L]) => {
        L === !1 ? _.add(A) : L === !0 && _.delete(A);
      }), {
        hiddenKeys: Array.from(_),
        columnOrder: Array.isArray(N.columnOrder) ? N.columnOrder : [],
        columnWidths: N.columnWidths && typeof N.columnWidths == "object" ? N.columnWidths : {},
        columnFixed: N.columnFixed && typeof N.columnFixed == "object" ? N.columnFixed : {},
        searchVisible: N.searchVisible && typeof N.searchVisible == "object" ? N.searchVisible : {},
        filterHighlightColor: typeof N.filterHighlightColor == "string" && N.filterHighlightColor ? N.filterHighlightColor : Gn,
        density: N.density ?? r
      };
    } catch {
      return w;
    }
  });
  ge(() => {
    if (!(!n || typeof window > "u"))
      try {
        window.localStorage.setItem(n, JSON.stringify(o));
      } catch {
      }
  }, [n, o]);
  const c = fe((w) => {
    d((k) => ({
      ...k,
      hiddenKeys: k.hiddenKeys.includes(w) ? k.hiddenKeys.filter((g) => g !== w) : [...k.hiddenKeys, w]
    }));
  }, []), b = fe((w, k) => {
    d((g) => ({
      ...g,
      hiddenKeys: k ? [] : Array.from(new Set(w))
    }));
  }, []), l = fe(
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
  ), u = fe((w, k) => {
    d((g) => ({
      ...g,
      columnWidths: { ...g.columnWidths, [w]: Math.max(64, Math.round(k)) }
    }));
  }, []), m = fe((w) => {
    d((k) => ({ ...k, columnOrder: w }));
  }, []), p = fe((w, k) => {
    d((g) => ({
      ...g,
      searchVisible: { ...g.searchVisible, [w]: k }
    }));
  }, []), f = fe((w) => {
    d((k) => ({ ...k, density: w }));
  }, []), h = fe((w) => {
    d((k) => ({ ...k, filterHighlightColor: w }));
  }, []), v = fe(() => {
    if (s && typeof window < "u")
      try {
        window.localStorage.removeItem(s);
      } catch {
      }
    d({ ...ro, hiddenKeys: a, density: r });
  }, [r, a, s]);
  return {
    settings: o,
    toggleColumnVisible: c,
    setAllColumnsVisible: b,
    setColumnFixed: l,
    setColumnWidth: u,
    setColumnOrder: m,
    setSearchFieldVisible: p,
    setDensity: f,
    setFilterHighlightColor: h,
    resetSettings: v
  };
}
const Nb = typeof window < "u" ? Na : ge;
function xn(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function kb(t) {
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
function zn(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function ta({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: d = 8
}) {
  const { side: c, align: b } = kb(n), [l, u] = $(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: c,
    arrowOffset: 16,
    transformOrigin: zn(c, b),
    positioned: !1
  })), m = fe(() => {
    if (typeof window > "u" || !r.current) return;
    const f = r.current.getBoundingClientRect(), h = a.current, v = h == null ? void 0 : h.getBoundingClientRect(), w = window.innerWidth || 1024, k = window.innerHeight || 768, g = d, N = h ? h.offsetWidth : 0, _ = h ? h.offsetHeight : 0, A = N || (v == null ? void 0 : v.width) || (o ? f.width : 180), L = o ? Math.max(A, f.width) : A, C = _ || (v == null ? void 0 : v.height) || 40;
    if (f.width === 0 && f.height === 0 && f.top === 0 && f.left === 0) {
      u({
        top: s,
        left: g,
        minWidth: o && f.width > 0 ? f.width : void 0,
        actualSide: c,
        arrowOffset: 16,
        transformOrigin: zn(c, b),
        positioned: !0
      });
      return;
    }
    let y = c;
    if (c === "bottom") {
      const j = k - f.bottom - s - g, I = f.top - s - g;
      C > j && I > j && (y = "top");
    } else if (c === "top") {
      const j = f.top - s - g, I = k - f.bottom - s - g;
      C > j && I > j && (y = "bottom");
    } else if (c === "left") {
      const j = f.left - s - g, I = w - f.right - s - g;
      L > j && I > j && (y = "right");
    } else if (c === "right") {
      const j = w - f.right - s - g, I = f.left - s - g;
      L > j && I > j && (y = "left");
    }
    let T = 0, E = 0;
    y === "bottom" || y === "top" ? (T = y === "bottom" ? f.bottom + s : f.top - C - s, b === "start" ? E = f.left : b === "end" ? E = f.right - L : E = f.left + f.width / 2 - L / 2) : (E = y === "right" ? f.right + s : f.left - L - s, b === "start" ? T = f.top : b === "end" ? T = f.bottom - C : T = f.top + f.height / 2 - C / 2);
    const D = Math.max(g, w - L - g), M = Math.max(g, k - C - g), R = Math.min(Math.max(g, E), D), O = Math.min(Math.max(g, T), M), P = y === "top" || y === "bottom" ? Math.min(
      Math.max(10, f.left + f.width / 2 - R),
      Math.max(10, L - 10)
    ) : Math.min(
      Math.max(10, f.top + f.height / 2 - O),
      Math.max(10, C - 10)
    ), S = zn(y, b), B = o ? Math.round(f.width) : void 0;
    u((j) => j.positioned && Math.abs(j.top - O) < 0.5 && Math.abs(j.left - R) < 0.5 && j.minWidth === B && j.actualSide === y && Math.abs(j.arrowOffset - P) < 0.5 && j.transformOrigin === S ? j : {
      top: Math.round(O * 10) / 10,
      left: Math.round(R * 10) / 10,
      minWidth: B,
      actualSide: y,
      arrowOffset: Math.round(P),
      transformOrigin: S,
      positioned: !0
    });
  }, [r, a, c, b, s, o, d]);
  Nb(() => {
    if (!t) {
      u((h) => h.positioned ? { ...h, positioned: !1 } : h);
      return;
    }
    m();
    const f = typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(m) : 0;
    return () => {
      f && typeof window < "u" && window.cancelAnimationFrame(f);
    };
  }, [t, m]), ge(() => {
    if (!t || typeof window > "u") return;
    window.addEventListener("resize", m, { passive: !0 }), window.addEventListener("scroll", m, !0);
    let f = null;
    return typeof ResizeObserver < "u" && (f = new ResizeObserver(() => m()), a.current && f.observe(a.current), r.current && f.observe(r.current)), () => {
      window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0), f == null || f.disconnect();
    };
  }, [t, m, a, r]);
  const p = t ? xn(r.current) : null;
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
const tn = {
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
}, rn = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  default: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm",
  icon: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  "icon-sm": "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0"
}, Yn = {
  xs: "h-[var(--abc-control-h-xs)] w-[var(--abc-control-h-xs)] p-0",
  sm: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  default: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  md: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  lg: "h-[var(--abc-control-h-lg)] w-[var(--abc-control-h-lg)] p-0"
};
function Up({
  variant: t = "primary",
  size: r = "sm",
  iconOnly: a = !1,
  className: n
} = {}) {
  const s = tn[t] || tn.primary, o = a ? Yn[r] || Yn.sm : rn[r] || rn.sm;
  return x(
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
    "disabled:opacity-45 disabled:cursor-not-allowed",
    s,
    o,
    n
  );
}
const Ae = dt.forwardRef(
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
    rightIcon: l,
    iconOnly: u = !1,
    block: m = !1,
    asChild: p = !1,
    type: f,
    children: h,
    ...v
  }, w) => {
    const k = a === "icon" || a === "icon-sm", _ = Be(k ? void 0 : a === "default" ? "sm" : a, "sm"), A = Me(n), L = !!(d || s), C = b ?? c, y = x(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      tn[r] || tn.primary,
      k ? rn[a] : u ? Yn[_] : rn[_],
      m && "w-full",
      t
    );
    if (p && dt.isValidElement(h)) {
      const T = h;
      return dt.cloneElement(T, {
        className: x(y, T.props.className),
        ...v
      });
    }
    return /* @__PURE__ */ i(
      "button",
      {
        ref: w,
        type: f,
        disabled: L,
        "data-motion": A,
        className: y,
        ...v,
        children: [
          s ? /* @__PURE__ */ e(or, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : C && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: C }),
          s && o !== void 0 ? o : h,
          !s && l && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: l })
        ]
      }
    );
  }
);
Ae.displayName = "Button";
const gs = as(null);
function Sb() {
  return Ea(gs);
}
const Cb = {
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
  title: l,
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
  onFullscreenChange: _,
  motion: A,
  className: L
}) => {
  const C = t ?? r ?? a ?? !1, y = Me(A), { isMounted: T, isVisible: E } = Dr(C, y === "none" ? 0 : 180), D = It(), M = It(), R = be(null), O = be(null), P = be(!1), S = fe(() => {
    c || (n ? n() : s ? s() : o && o(!1));
  }, [c, n, s, o]), B = be(S);
  B.current = S;
  const j = !!(l !== void 0 || g), [I, z] = $(!1), H = N !== void 0 ? N : I, [U, K] = $({ x: 0, y: 0 }), ee = be(
    null
  ), q = fe(() => {
    const G = !H;
    N === void 0 && z(G), _ == null || _(G);
  }, [H, N, _]);
  ge(() => {
    if (!T) return;
    const G = R.current;
    if (!G) return;
    let ye = !1;
    if (typeof G.showModal == "function")
      if (G.open)
        ye = !0;
      else
        try {
          G.showModal(), ye = !0;
        } catch {
          G.setAttribute("open", "");
        }
    else
      G.setAttribute("open", "");
    const Ie = (me) => {
      me.preventDefault(), B.current();
    }, ne = (me) => {
      me.key === "Escape" && (me.stopPropagation(), B.current());
    };
    return G.addEventListener("cancel", Ie), (!ye || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", ne), () => {
      if (G.removeEventListener("cancel", Ie), window.removeEventListener("keydown", ne), G.open && typeof G.close == "function")
        try {
          G.close();
        } catch {
          G.removeAttribute("open");
        }
    };
  }, [T]), ge(() => {
    C || (K({ x: 0, y: 0 }), N === void 0 && z(!1));
  }, [C, N]);
  const V = (G) => {
    var me;
    const ye = G.target;
    if ((me = ye == null ? void 0 : ye.closest) != null && me.call(ye, "[data-abc-floating]"))
      return !1;
    const Ie = O.current;
    if (!Ie) return !1;
    const ne = Ie.getBoundingClientRect();
    return ne.width === 0 && ne.height === 0 ? !Ie.contains(G.target) : G.clientX < ne.left || G.clientX > ne.right || G.clientY < ne.top || G.clientY > ne.bottom;
  }, Z = (G) => {
    if (!k || H || G.button !== 0 || G.target.closest('button, a, input, [role="button"]')) return;
    ee.current = {
      startX: G.clientX,
      startY: G.clientY,
      origX: U.x,
      origY: U.y
    };
    const ye = (ne) => {
      ee.current && K({
        x: ee.current.origX + (ne.clientX - ee.current.startX),
        y: ee.current.origY + (ne.clientY - ee.current.startY)
      });
    }, Ie = () => {
      ee.current = null, window.removeEventListener("mousemove", ye), window.removeEventListener("mouseup", Ie);
    };
    window.addEventListener("mousemove", ye), window.addEventListener("mouseup", Ie);
  };
  if (!T || typeof document > "u") return null;
  const oe = f || h, F = Cb[oe] || oe;
  return cr(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: R,
        "data-motion": y,
        "aria-labelledby": D,
        "aria-describedby": u ? M : void 0,
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
          padding: H ? 0 : "1rem",
          border: "none",
          backgroundColor: "rgba(2, 6, 23, 0.5)",
          backdropFilter: "blur(2px)",
          zIndex: 1100
        },
        onPointerDown: (G) => {
          P.current = w && V(G);
        },
        onPointerUp: (G) => {
          w && P.current && V(G) && B.current(), P.current = !1;
        },
        onClick: (G) => {
          w && G.target === R.current && !P.current && B.current();
        },
        className: x(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          H && "p-0",
          y !== "none" && (E ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: O,
            "data-dialog-panel": "",
            "data-motion": y,
            style: {
              width: !H && v ? v : void 0,
              transform: !H && (U.x !== 0 || U.y !== 0) ? `translate3d(${U.x}px, ${U.y}px, 0)` : void 0
            },
            className: x(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              H ? "h-dvh w-dvw rounded-none" : x("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !v && F),
              y !== "none" && (E ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              L
            ),
            children: /* @__PURE__ */ i(gs.Provider, { value: { isOpen: C, handleClose: S, closeDisabled: c, hasHeader: j, titleId: D }, children: [
              (l !== void 0 || g) && /* @__PURE__ */ i(
                "div",
                {
                  onMouseDown: Z,
                  onDoubleClick: g ? q : void 0,
                  className: x(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    k && !H && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                      l && /* @__PURE__ */ e("h2", { id: D, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: l }),
                      u && /* @__PURE__ */ e("p", { id: M, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: u })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                      g && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": H ? "还原窗口" : "全屏",
                          title: H ? "退出全屏" : "全屏显示",
                          onClick: (G) => {
                            G.stopPropagation(), q();
                          },
                          onMouseDown: (G) => G.stopPropagation(),
                          onPointerDown: (G) => G.stopPropagation(),
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: H ? /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ss, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": b,
                          title: b,
                          disabled: c,
                          onClick: (G) => {
                            G.stopPropagation(), S();
                          },
                          onMouseDown: (G) => G.stopPropagation(),
                          onPointerDown: (G) => G.stopPropagation(),
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
}, Eb = dr;
function vs({
  className: t,
  children: r,
  closeLabel: a = "关闭",
  closeDisabled: n,
  closable: s,
  onClose: o,
  ...d
}) {
  const c = Ea(gs), b = s ?? (c ? !c.hasHeader : !1), l = n ?? (c == null ? void 0 : c.closeDisabled) ?? !1;
  return /* @__PURE__ */ i("div", { "data-slot": "dialog-content", className: x("relative space-y-4", t), ...d, children: [
    b && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": a,
        title: a,
        disabled: l,
        onClick: (u) => {
          u.stopPropagation(), o ? o() : c && c.handleClose();
        },
        onMouseDown: (u) => u.stopPropagation(),
        onPointerDown: (u) => u.stopPropagation(),
        className: x(
          "absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10",
          l && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
        ),
        children: /* @__PURE__ */ e(Ct, { className: "h-4 w-4" })
      }
    ),
    r
  ] });
}
function xs({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: x("flex flex-col space-y-1.5 text-left", t), ...a, children: r });
}
function ys({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: x("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...a, children: r });
}
function ws({ className: t, children: r, id: a, ...n }) {
  const s = Sb();
  return /* @__PURE__ */ e("h2", { id: a ?? (s == null ? void 0 : s.titleId), "data-slot": "dialog-title", className: x("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...n, children: r });
}
function Ns({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: x("text-xs text-[var(--abc-fg-muted)]", t), ...a, children: r });
}
const an = /* @__PURE__ */ new Set();
let ci = null, xa = 0;
function di(t) {
  ci = t, an.forEach((r) => r(t));
}
function _b(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function nn(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (xa === 0 && typeof window < "u" && an.size === 0) {
    const s = r.content ?? r.message, o = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    di({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: _b(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const Gp = nn;
function Yp() {
  return nn;
}
const ui = () => {
  const [t, r] = $(!1), [a, n] = $(() => ci), [s, o] = $(!1);
  if (ge(() => {
    xa += 1, r(xa === 1);
    const l = (u) => n(u);
    return an.add(l), () => {
      xa = Math.max(0, xa - 1), an.delete(l);
    };
  }, []), !t || !a) return null;
  const d = async (b) => {
    var l;
    if (!(!a || s)) {
      if (b && a.onConfirm)
        try {
          o(!0), await a.onConfirm();
        } finally {
          o(!1);
        }
      else b || (l = a.onCancel) == null || l.call(a);
      a.resolve(b), di(null);
    }
  }, c = a.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(kr, { className: "h-4 w-4" }) }) : a.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e(Cr, { className: "h-4 w-4" }) }) : a.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(Sr, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Jr, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    dr,
    {
      open: !!a,
      onClose: () => d(!1),
      title: a.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ i(Ke, { children: [
        /* @__PURE__ */ e(
          Ae,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: a.resolvedTone === "danger",
            onClick: () => d(!1),
            children: a.cancelText
          }
        ),
        /* @__PURE__ */ e(
          Ae,
          {
            variant: a.resolvedTone === "danger" ? "danger" : a.resolvedTone === "warning" ? "warning" : a.resolvedTone === "success" ? "success" : "primary",
            loading: s,
            autoFocus: a.resolvedTone !== "danger",
            onClick: () => d(!0),
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
}, qp = ({ children: t }) => /* @__PURE__ */ i(Ke, { children: [
  t,
  /* @__PURE__ */ e(ui, {})
] });
let Qt = [];
const qn = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Map();
let Tb = 0;
function ks() {
  const t = [...Qt];
  qn.forEach((r) => r(t));
}
function Ib(t) {
  const r = yr.get(t);
  if (!r || r.isPaused || r.remaining <= 0) return;
  r.timerId && (clearTimeout(r.timerId), r.timerId = void 0);
  const a = Date.now() - r.startedAt;
  r.remaining = Math.max(0, r.remaining - a), r.isPaused = !0;
}
function Mb(t) {
  const r = yr.get(t);
  !r || !r.isPaused || r.remaining <= 0 || (r.isPaused = !1, r.startedAt = Date.now(), typeof window < "u" && (r.timerId = window.setTimeout(r.onExpire, r.remaining)));
}
function Ss(t) {
  var n;
  const r = yr.get(t);
  r != null && r.timerId && clearTimeout(r.timerId), yr.delete(t);
  const a = Qt.find((s) => s.id === t);
  a && ((n = a.onClose) == null || n.call(a)), Qt = Qt.filter((s) => s.id !== t), ks();
}
function Ab() {
  yr.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), yr.clear(), Qt.forEach((t) => {
    var r;
    return (r = t.onClose) == null ? void 0 : r.call(t);
  }), Qt = [], ks();
}
function Wr(t, r, a) {
  const n = `abc_toast_${++Tb}_${Date.now()}`;
  let s = {};
  r !== null && typeof r == "object" && !dt.isValidElement(r) ? s = r : s = { message: r };
  const o = s.tone ?? t, d = o === "danger" ? "error" : o, c = s.content ?? s.message ?? s.description ?? "", b = d === "error" ? 4200 : d === "warning" ? 3600 : d === "loading" ? 0 : 3e3, l = s.duration ?? a ?? b, u = {
    ...s,
    id: n,
    tone: d,
    message: c,
    duration: l,
    createdAt: Date.now()
  };
  if (Qt.length >= 30 && (Qt.slice(0, Qt.length - 29).forEach((p) => {
    const f = yr.get(p.id);
    f != null && f.timerId && clearTimeout(f.timerId), yr.delete(p.id);
  }), Qt = Qt.slice(-29)), Qt = [...Qt, u], ks(), l > 0 && typeof window < "u") {
    const m = {
      startedAt: Date.now(),
      remaining: l,
      isPaused: !1,
      onExpire: () => Ss(n)
    };
    m.timerId = window.setTimeout(m.onExpire, l), yr.set(n, m);
  }
  return n;
}
const Cs = {
  success: (t, r) => Wr("success", t, r),
  error: (t, r) => Wr("error", t, r ?? 4200),
  info: (t, r) => Wr("info", t, r),
  warning: (t, r) => Wr("warning", t, r ?? 3600),
  loading: (t, r = 0) => Wr("loading", t, r),
  push: (t, r, a) => Wr(t, r, a),
  dismiss: (t) => Ss(t),
  clear: () => Ab()
}, Xp = Cs, ao = {
  success: /* @__PURE__ */ e(Sr, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(Rr, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(Rr, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(Cr, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(_a, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(or, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, Rb = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Db = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, Lb = ({
  item: t,
  resolvedSize: r,
  resolvedMotion: a,
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
      "data-motion": a,
      onMouseEnter: () => {
        s && Ib(t.id);
      },
      onMouseLeave: () => {
        s && Mb(t.id);
      },
      style: { ...d, ...t.style },
      className: x(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        l ? "items-start" : "items-center",
        Rb[r],
        a !== "none" && "abc-animate-popover-in",
        o,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: x("shrink-0", l && "mt-0.5"), children: t.icon ?? ao[t.tone] ?? ao.info }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          t.title && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)] leading-snug", children: t.title }),
          t.message && /* @__PURE__ */ e(
            "div",
            {
              className: x(
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
            children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, Bb = ({
  position: t = "top-right",
  size: r,
  motion: a,
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
  items: h,
  onDismiss: v
}) => {
  const [w, k] = $(() => [...Qt]), g = Be(r, "sm"), N = Me(a);
  ge(() => {
    if (h !== void 0) return;
    const E = (D) => k(D);
    return qn.add(E), () => {
      qn.delete(E);
    };
  }, [h]);
  const A = (h ?? w).filter((E) => !(E.containerId && p && E.containerId !== p || E.position && E.position !== t));
  let L = A;
  o ? L = [...A].reverse().slice(0, n) : n > 0 && (L = A.slice(-n));
  const C = (E) => {
    v ? v(E) : Ss(E);
  };
  if (typeof document > "u" || L.length === 0)
    return null;
  const y = typeof m == "function" ? m() : m !== void 0 ? m : typeof document < "u" ? document.body : null;
  if (!y) return null;
  const T = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: x(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        Db[t],
        c
      ),
      style: b,
      children: L.map((E) => f ? /* @__PURE__ */ e(dt.Fragment, { children: f(E, () => C(E.id)) }, E.id) : /* @__PURE__ */ e(
        Lb,
        {
          item: E,
          resolvedSize: g,
          resolvedMotion: N,
          closable: d,
          pauseOnHover: s,
          toastClassName: l,
          toastStyle: u,
          onDismiss: C
        },
        E.id
      ))
    }
  );
  return cr(T, y);
}, Pb = (t) => /* @__PURE__ */ e(Bb, { ...t }), Es = "abc_design_theme_v1", sn = "color-scheme", _s = as(null);
function no(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(sn), n = window.localStorage.getItem(Es), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, d = ["xs", "sm", "md", "lg"], c = ["none", "subtle", "smooth", "spring"], b = s.componentSize && d.includes(s.componentSize) ? s.componentSize : t.componentSize, l = s.motion && c.includes(s.motion) ? s.motion : t.motion ?? "smooth";
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
function zb(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(sn) : window.localStorage.setItem(sn, t.mode), window.localStorage.setItem(Es, JSON.stringify(t));
    } catch {
    }
}
const Zp = ({
  children: t,
  defaultTheme: r,
  defaultPageTransition: a = "fade-slide",
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
  const h = ce(
    () => ({ ...Kt, ...r }),
    [r]
  ), [v, w] = $(() => no(h, o)), [k, g] = $(
    () => Ur(v.mode)
  ), [N, _] = $(a), [A, L] = $(s);
  ge(() => {
    const z = Vt(v);
    g(z), zb(v, o);
  }, [v, o]), ge(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const z = window.matchMedia("(prefers-color-scheme: dark)"), H = () => {
      if (v.mode === "system") {
        const U = Vt(v);
        g(U);
      }
    };
    return z.addEventListener("change", H), () => z.removeEventListener("change", H);
  }, [v]), ge(() => {
    if (!o || typeof window > "u") return;
    const z = (H) => {
      (H.key === Es || H.key === sn) && w(no(h, !0));
    };
    return window.addEventListener("storage", z), () => window.removeEventListener("storage", z);
  }, [o, h]);
  const C = fe(
    (z, H) => {
      mu(() => {
        w((U) => {
          const K = { ...U, mode: z };
          return Vt(K), K;
        });
      }, H);
    },
    []
  ), y = fe(
    (z) => {
      const U = Ur(v.mode) === "dark" ? "light" : "dark", K = Ur("system");
      C(U === K ? "system" : U, z);
    },
    [v.mode, C]
  ), T = fe((z) => {
    w((H) => ({ ...H, brand: z, customBrandColor: void 0 }));
  }, []), E = fe((z) => {
    w((H) => ({ ...H, customBrandColor: z }));
  }, []), D = fe((z) => {
    w((H) => ({ ...H, density: z }));
  }, []), M = fe((z) => {
    w((H) => ({ ...H, radius: z }));
  }, []), R = fe((z) => {
    w((H) => ({ ...H, fontScale: z }));
  }, []), O = fe((z) => {
    w((H) => ({ ...H, visualMode: z }));
  }, []), P = fe((z) => {
    w((H) => ({ ...H, componentSize: z }));
  }, []), S = fe((z) => {
    w((H) => ({ ...H, motion: z }));
  }, []), B = fe((z) => {
    w((H) => ({ ...H, ...z }));
  }, []), j = fe(() => {
    w(h), _(a), L(s);
  }, [h, a, s]), I = ce(
    () => ({
      theme: v,
      resolvedTheme: k,
      pageTransition: N,
      watermarkText: n,
      watermarkEnabled: A,
      setThemeMode: C,
      toggleTheme: y,
      setBrand: T,
      setCustomBrandColor: E,
      setDensity: D,
      setRadius: M,
      setFontScale: R,
      setVisualMode: O,
      setComponentSize: P,
      setMotion: S,
      updateTheme: B,
      setPageTransition: _,
      setWatermarkEnabled: L,
      resetTheme: j,
      toast: d ?? Cs,
      uploadAdapter: b,
      dictAdapter: l,
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
      A,
      C,
      y,
      T,
      E,
      D,
      M,
      R,
      O,
      P,
      S,
      B,
      j,
      d,
      b,
      l,
      u,
      m,
      p,
      f
    ]
  );
  return /* @__PURE__ */ i(_s.Provider, { value: I, children: [
    t,
    !d && /* @__PURE__ */ e(Pb, { ...c }),
    /* @__PURE__ */ e(ui, {})
  ] });
};
function jb() {
  return Ea(_s);
}
function Mt() {
  const t = Ea(_s);
  return t || {
    theme: Kt,
    resolvedTheme: Ur(Kt.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Vt({ ...Kt, mode: r });
    },
    toggleTheme: () => {
      const r = Ur(Kt.mode) === "dark" ? "light" : "dark";
      Vt({ ...Kt, mode: r });
    },
    setBrand: (r) => {
      Vt({ ...Kt, brand: r });
    },
    setCustomBrandColor: (r) => {
      Vt({ ...Kt, customBrandColor: r });
    },
    setDensity: (r) => {
      Vt({ ...Kt, density: r });
    },
    setRadius: (r) => {
      Vt({ ...Kt, radius: r });
    },
    setFontScale: (r) => {
      Vt({ ...Kt, fontScale: r });
    },
    setVisualMode: (r) => {
      Vt({ ...Kt, visualMode: r });
    },
    setComponentSize: (r) => {
      Vt({ ...Kt, componentSize: r });
    },
    setMotion: (r) => {
      Vt({ ...Kt, motion: r });
    },
    updateTheme: (r) => {
      Vt({ ...Kt, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Vt(Kt);
    },
    toast: Cs,
    iconRegistry: {}
  };
}
function Be(t, r = "sm") {
  const { theme: a } = Mt();
  return (t === "default" ? void 0 : t) ?? a.componentSize ?? r;
}
function Me(t) {
  const { theme: r } = Mt();
  return t ?? r.motion ?? "smooth";
}
function Fb(t) {
  const r = Mt();
  return t ?? r.defaultDrawerCascadeMode ?? "adjacent";
}
function Jp(t = null) {
  const [r, a] = $([t]), n = r[r.length - 1] ?? null, s = r.length > 1, o = fe((b) => {
    a((l) => [...l, b]);
  }, []), d = fe(() => {
    a((b) => b.length > 1 ? b.slice(0, -1) : b);
  }, []), c = fe(() => {
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
  Activity: Hd,
  AlertCircle: Rr,
  AlertOctagon: $d,
  AlertTriangle: Cr,
  BarChart2: Od,
  BarChart3: Fd,
  Bell: jd,
  BellRing: zd,
  BookMarked: Pd,
  Boxes: Bd,
  Building2: Wo,
  Calendar: bs,
  CalendarCheck: Ld,
  Camera: Dd,
  Check: St,
  CheckCircle: Ko,
  CheckCircle2: Sr,
  CheckSquare: Rd,
  CircleDollarSign: Ad,
  Clock: Za,
  Coins: Md,
  Compass: Ho,
  Copy: Fr,
  Cpu: Id,
  CreditCard: Td,
  Database: _d,
  Download: Wn,
  Edit: Ed,
  Edit3: Ya,
  Eye: Qr,
  FileCheck: Cd,
  FileClock: Sd,
  FileSpreadsheet: kd,
  FileText: Nd,
  Flame: wd,
  Folder: yd,
  FolderGit2: xd,
  FolderOpen: vd,
  FolderPlus: gd,
  FolderTree: $o,
  Globe: hd,
  Globe2: pd,
  Handshake: fd,
  HardDrive: md,
  Headphones: bd,
  HelpCircle: Jr,
  History: ud,
  Home: us,
  Image: Oo,
  Info: _a,
  Key: dd,
  KeyRound: Fo,
  Layers: ds,
  LayoutDashboard: cd,
  LayoutGrid: ld,
  LineChart: id,
  Link2: od,
  ListChecks: sd,
  ListOrdered: nd,
  Lock: ad,
  MapPin: rd,
  Megaphone: td,
  Menu: jo,
  MessageCircle: ed,
  MessageSquare: Qc,
  MessageSquareQuote: Jc,
  MessageSquareText: Zc,
  MessagesSquare: Xc,
  Minus: gn,
  Monitor: cs,
  MoreHorizontal: ls,
  Network: qc,
  Package: Yc,
  Palette: is,
  PanelLeft: Gc,
  PanelTop: Uc,
  Pause: Vc,
  Phone: Wc,
  PhoneCall: Kc,
  PieChart: Hc,
  Play: zo,
  Plus: hn,
  PlusCircle: $c,
  Radio: Oc,
  Receipt: Fc,
  RefreshCw: jr,
  RotateCcw: ir,
  RotateCw: pn,
  ScrollText: jc,
  Search: zt,
  Send: zc,
  Server: Pc,
  Settings: Bc,
  Share: Lc,
  Share2: Dc,
  Shield: Rc,
  ShieldAlert: fn,
  ShieldCheck: os,
  ShoppingBag: Ac,
  ShoppingCart: Mc,
  Sliders: Ic,
  SlidersHorizontal: Kn,
  Smartphone: Tc,
  Sparkles: Ta,
  Star: _c,
  StarOff: Ec,
  Store: Cc,
  Tag: Sc,
  Tags: kc,
  Terminal: Nc,
  Ticket: wc,
  Timer: yc,
  Trash: xc,
  Trash2: kr,
  TrendingUp: vc,
  Unlock: gc,
  Upload: mn,
  User: hc,
  UserCheck: pc,
  UserCog: fc,
  Users: mc,
  Video: bc,
  Wallet: uc,
  Wrench: dc,
  X: Ct,
  XCircle: cc,
  Zap: lc
}, jn = {
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
}, so = [
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
function Ob(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const bi = {};
function Qp(t) {
  Object.assign(bi, t);
}
const hr = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (r) {
    const m = r.toLowerCase();
    for (const p of so)
      if (p.keywords.some((f) => m.includes(f))) {
        const f = ga[p.iconName];
        if (f)
          return /* @__PURE__ */ e(f, { size: a, strokeWidth: n, className: x("shrink-0", s) });
      }
  }
  const d = (t || "").replace(/^el-icon-/, "").trim(), c = d.replace(/^s-/, ""), b = jn[d] ?? jn[c] ?? jn[t];
  let l = (o == null ? void 0 : o[d]) ?? bi[d] ?? (b ? ga[b] : void 0) ?? ga[d] ?? (d ? ga[Ob(d)] : void 0);
  if (!l && d) {
    const m = d.toLowerCase();
    for (const p of so)
      if (p.keywords.some((f) => m.includes(f))) {
        l = ga[p.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(l ?? Ho, { size: a, strokeWidth: n, className: x("shrink-0", s) });
}, mi = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, $b = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  default: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, Er = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", yt = dt.forwardRef(
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
    allowClear: l,
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
    defaultValue: _,
    maxLength: A,
    onChange: L,
    disabled: C,
    readOnly: y,
    className: T,
    wrapperClassName: E,
    ...D
  }, M) => {
    const R = Be(t, "sm"), O = Me(r), P = It(), S = k || P, B = be(null);
    bn(M, () => B.current, []);
    const j = N !== void 0, [I, z] = $(
      () => _ != null ? String(_) : ""
    ), [H, U] = $(!1), ee = g === "password" && m !== !1, q = ee && H ? "text" : g, Z = (j ? String(N ?? "") : I).length, oe = Z > 0, F = !!((l ?? u) && oe && !C && !y), G = !!(w || n), ye = o ?? d, Ie = c ?? b, ne = (we) => {
      j || z(we.target.value), L == null || L(we);
    }, me = fe(
      (we) => {
        if (we.preventDefault(), we.stopPropagation(), C || y) return;
        j || z(""), v == null || v();
        const Se = B.current;
        if (Se && (Se.value = "", Se.focus()), L) {
          const X = Se ?? { value: "" };
          L({
            target: X,
            currentTarget: X,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [C, y, j, v, L]
    ), pe = (F ? 1 : 0) + (ee ? 1 : 0) + (Ie ? 1 : 0), de = pe >= 3 ? "pr-20" : pe === 2 ? "pr-14" : pe === 1 ? "pr-9" : "pr-3", Ce = /\bw-(?!full\b)\S+/.test(T || ""), ke = /* @__PURE__ */ i(
      "div",
      {
        className: x(
          "relative flex items-center",
          !Ce && "w-full",
          E
        ),
        children: [
          ye && /* @__PURE__ */ e(
            "div",
            {
              className: x(
                "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
                R === "xs" ? "left-2 [&>svg]:h-3.5 [&>svg]:w-3.5" : "left-2.5 [&>svg]:h-4 [&>svg]:w-4"
              ),
              children: ye
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              ref: B,
              id: S,
              type: q,
              value: N,
              defaultValue: _,
              maxLength: A,
              onChange: ne,
              disabled: C,
              readOnly: y,
              "data-motion": O,
              "aria-invalid": G || void 0,
              className: x(
                Er,
                mi[R],
                ye ? R === "xs" ? "pl-7" : "pl-8" : R === "xs" ? "pl-2" : "pl-3",
                de,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                q === "number" && pe > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                G && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                C && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                T
              ),
              ...D
            }
          ),
          (F || ee || Ie) && /* @__PURE__ */ i("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            F && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (we) => we.preventDefault(),
                onClick: me,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
              }
            ),
            ee && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: C,
                "data-testid": "password-toggle",
                "aria-label": H ? f ?? "隐藏密码" : p ?? "显示密码",
                title: H ? f ?? "隐藏密码" : p ?? "显示密码",
                onMouseDown: (we) => we.preventDefault(),
                onClick: (we) => {
                  we.preventDefault(), we.stopPropagation(), !C && U((Se) => !Se);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: H ? /* @__PURE__ */ e(Vo, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Qr, { className: "h-3.5 w-3.5" })
              }
            ),
            Ie && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: Ie })
          ] })
        ]
      }
    );
    return !a && !n && !s && !h ? ke : /* @__PURE__ */ i("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: S,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      ke,
      (n || s || h) && /* @__PURE__ */ i("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        h && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: A !== void 0 ? `${Z}/${A}` : Z
          }
        )
      ] })
    ] });
  }
);
yt.displayName = "Input";
const yn = ({
  value: t,
  defaultValue: r,
  onChange: a,
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
  const p = Be(d, "sm"), f = Me(c), h = It(), [v, w] = $(r ?? null), k = t !== void 0 ? t : v, g = (N) => {
    let _ = N;
    _ !== null && Number.isFinite(_) ? (n !== void 0 && (_ = Math.max(n, _)), s !== void 0 && (_ = Math.min(s, _))) : _ = null, t === void 0 && w(_), a == null || a(_);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: x(
        "inline-flex w-full items-center overflow-hidden",
        Er,
        mi[p],
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
            children: /* @__PURE__ */ e(gn, { className: "h-3 w-3" })
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
            placeholder: l,
            onChange: (N) => {
              const _ = N.target.value;
              g(_ === "" ? null : Number(_));
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
            children: /* @__PURE__ */ e(hn, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Ia = dt.forwardRef(
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
    value: l,
    defaultValue: u,
    maxLength: m,
    onChange: p,
    rows: f = 3,
    className: h,
    ...v
  }, w) => {
    const k = Be(t, "sm"), g = Me(r), N = It(), _ = b || N, [A, L] = $(
      () => String(u ?? "").length
    ), C = l !== void 0 ? String(l ?? "").length : A, y = !!(d || n), E = /* @__PURE__ */ e(
      "textarea",
      {
        ref: w,
        id: _,
        rows: f,
        value: l,
        defaultValue: u,
        maxLength: m,
        onChange: (D) => {
          l === void 0 && L(D.target.value.length), p == null || p(D);
        },
        "data-motion": g,
        "aria-invalid": y || void 0,
        className: x(
          Er,
          $b[k],
          "leading-relaxed resize-y",
          c && "font-mono",
          y && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          h
        ),
        ...v
      }
    );
    return !a && !n && !s && !o ? E : /* @__PURE__ */ i("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: _,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      E,
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
Ia.displayName = "Textarea";
const oo = [
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
], Hb = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], Kb = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, io = ({
  open: t,
  current: r,
  value: a,
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
  const p = Be(l, "sm"), f = Me(u), [h, v] = $(!1), [w, k] = $(""), [g, N] = $("all"), _ = typeof t == "boolean", A = _ ? t : h, L = a ?? r ?? "", C = () => {
    _ ? n == null || n() : v(!1);
  }, y = (M) => {
    s == null || s(M), o == null || o(M), C();
  }, T = ce(() => {
    const M = w.trim();
    return oo.filter((R) => g !== "all" && R.category !== g ? !1 : M ? ar(`${R.label} ${R.name}`, M) : !0);
  }, [w, g]), E = ce(
    () => oo.find((M) => M.name.toLowerCase() === L.toLowerCase()),
    [L]
  ), D = /* @__PURE__ */ e(dr, { open: A, onClose: C, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ i("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        yt,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: w,
          prefix: /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5" }),
          onChange: (M) => k(M.target.value)
        }
      ) }),
      L && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(hr, { name: L, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: L })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: Hb.map((M) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => N(M.id),
        className: x(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          g === M.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: M.label
      },
      M.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: T.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: T.map((M) => {
      const R = L === M.name;
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => y(M.name),
          className: x(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            R ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            R && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              hr,
              {
                name: M.name,
                size: 20,
                className: x(
                  "transition-transform group-hover:scale-110",
                  R ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: M.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: M.name })
          ]
        },
        M.name
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
  return _ ? D : /* @__PURE__ */ i(Ke, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: "button",
        tabIndex: b ? -1 : 0,
        "data-motion": f,
        onClick: () => !b && v(!0),
        onKeyDown: (M) => {
          !b && (M.key === "Enter" || M.key === " ") && (M.preventDefault(), v(!0));
        },
        className: x(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          Kb[p],
          Er,
          b && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          m
        ),
        children: [
          L ? /* @__PURE__ */ i("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(hr, { name: L, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: E ? `${E.label} (${L})` : L })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: d }),
          /* @__PURE__ */ i("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && L && !b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (M) => {
                  M.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(er, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    D
  ] });
};
async function wn(t) {
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
const Wb = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, Vb = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, lo = ({
  text: t,
  displayText: r,
  children: a,
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
  const f = Be(u, "sm"), h = Me(m), { toast: v } = Mt(), [w, k] = $(!1), g = be(null), N = c ?? d ?? "已复制到剪贴板";
  ge(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const _ = fe(
    async (C) => {
      C.stopPropagation(), C.preventDefault(), await wn(t) ? (k(!0), v.success(N), l == null || l(t), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        k(!1), g.current = null;
      }, 1500)) : v.error("复制失败，请手动复制");
    },
    [t, N, l, v]
  ), A = b !== void 0 ? b : w ? N : "点击复制", L = w ? /* @__PURE__ */ e(
    St,
    {
      "data-testid": "copy-icon-check",
      className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]",
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ e(
    Fr,
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
      title: A,
      "aria-label": b || "复制",
      "data-motion": h,
      onClick: _,
      className: x(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        p
      ),
      children: L
    }
  ) : /* @__PURE__ */ i(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: A,
      "data-motion": h,
      onClick: _,
      onKeyDown: (C) => {
        (C.key === "Enter" || C.key === " ") && _(C);
      },
      className: x(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        Wb[f],
        o && "font-mono tabular-nums",
        p
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && L
      ]
    }
  );
}, Vr = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = Be(t, "sm"), d = Me(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": d,
      className: x(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        Vb[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, eh = ({
  value: t,
  title: r,
  copyLabel: a = "复制",
  copiedLabel: n = "已复制",
  successDuration: s = 1800,
  className: o,
  ...d
}) => {
  const [c, b] = $(!1), l = r || a;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": c ? n : l,
      title: c ? n : l,
      onClick: async (m) => {
        m.stopPropagation(), await wn(t) && (b(!0), setTimeout(() => b(!1), s));
      },
      className: x(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] transition-all hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] cursor-pointer",
        c && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
        o
      ),
      ...d,
      children: c ? /* @__PURE__ */ e(St, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(Fr, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
    }
  );
}, Ub = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, Gb = {
  xs: "px-1.5 py-0.2 text-[10px] gap-1",
  sm: "px-2 py-0.5 text-xs gap-1.5",
  md: "px-2.5 py-1 text-xs gap-2"
};
function th({
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
      className: x(
        "inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none",
        Ub[a],
        Gb[n],
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
function Yb({
  text: t,
  iconSize: r = 14,
  preserveSrToken: a = !1,
  className: n,
  ...s
}) {
  const o = t ? t.replace(/\[icon:[^\]]+\]/g, "").trim() : "";
  return /* @__PURE__ */ e("span", { className: x("inline-flex items-center gap-1.5", n), ...s, children: /* @__PURE__ */ e("span", { children: o || t }) });
}
function Ca(t) {
  return t == null || typeof t == "boolean" ? "" : typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(Ca).join("") : dt.isValidElement(t) ? Ca(t.props.children) : "";
}
function Xn(t, r) {
  const a = [];
  return dt.Children.forEach(t, (n) => {
    if (dt.isValidElement(n)) {
      if (n.type === dt.Fragment) {
        const s = n.props;
        a.push(...Xn(s.children, r));
        return;
      }
      if (n.type === "optgroup") {
        const s = n.props;
        a.push(...Xn(s.children, s.label ?? ""));
        return;
      }
      if (n.type === "option") {
        const s = n.props, o = Ca(s.children), d = s.value !== void 0 ? s.value : o;
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
const qb = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Xb = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
};
function co(t, r = !0) {
  return t.textLabel.includes("[icon:") ? /* @__PURE__ */ e(
    Yb,
    {
      text: t.textLabel,
      iconSize: 13,
      preserveSrToken: r
    }
  ) : t.label;
}
const sr = dt.forwardRef(
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
    error: l,
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
    invalid: _ = !1,
    size: A,
    motion: L,
    className: C,
    wrapperClassName: y,
    containerClassName: T,
    dropdownClassName: E,
    popoverClassName: D,
    matchWidth: M = !0,
    hideChevron: R = !1,
    container: O,
    "aria-label": P,
    ...S
  }, B) => {
    var Ze, tt, Tt;
    const j = t === void 0 && r !== void 0, I = h !== void 0 ? h : j ? "" : "请选择", z = Be(A === "ghost" ? "sm" : A, "sm"), H = Me(L), U = It(), K = m || U, ee = typeof process < "u" && ((Ze = process.env) == null ? void 0 : Ze.NODE_ENV) === "test" || typeof import.meta < "u" && !1, q = ce(() => t !== void 0 ? t.map((J) => ({
      value: String(J.value),
      rawValue: J.value,
      label: J.label,
      textLabel: typeof J.label == "string" ? J.label : Ca(J.label),
      disabled: !!J.disabled,
      description: J.description,
      group: J.group
    })) : Xn(r), [t, r]), V = a !== void 0, [Z, oe] = $(() => {
      if (n !== void 0) return n;
      if (j && !v && !h) {
        const J = q.find((le) => !le.disabled) ?? q[0];
        return J ? J.value : "";
      }
      return v ? [] : "";
    });
    ge(() => {
      if (V || !j || v || h || q.length === 0) return;
      if (!q.some((le) => le.value === String(Z ?? "")))
        if (n !== void 0 && q.some((le) => le.value === String(n)))
          oe(n);
        else {
          const le = q.find((Le) => !Le.disabled) ?? q[0];
          le && oe(le.value);
        }
    }, [V, j, v, h, q, Z, n]);
    const F = V ? a : Z, [G, ye] = $(!1), [Ie, ne] = $(""), [me, pe] = $(0), { isMounted: de, isVisible: Ce } = Dr(
      G,
      H === "none" || ee ? 0 : 140
    ), ke = be(null), we = be(null), Se = be(null), X = be(null), te = be(null), Re = be([]), qe = dt.useCallback(
      (J) => {
        te.current = J, typeof B == "function" ? B(J) : B && (B.current = J);
      },
      [B]
    ), Xe = !!(k ?? g), Je = !!(_ || l), { style: ot, actualSide: rt, portalContainer: jt } = ta({
      open: de,
      triggerRef: we,
      floatingRef: Se,
      placement: "bottomLeft",
      offset: 4,
      matchWidth: M
    }), Pt = O ?? jt;
    ge(() => {
      if (!G) {
        ne("");
        return;
      }
      const J = (Le) => {
        var ct, nt;
        const Pe = Le.target;
        Pe && ((ct = ke.current) != null && ct.contains(Pe) || (nt = Se.current) != null && nt.contains(Pe) || ye(!1));
      }, le = (Le) => {
        var Pe, ct;
        Le.key === "Escape" && (Le.preventDefault(), Le.stopPropagation(), ye(!1), j ? (Pe = te.current) == null || Pe.focus() : (ct = we.current) == null || ct.focus());
      };
      return document.addEventListener("mousedown", J), document.addEventListener("touchstart", J, { passive: !0 }), document.addEventListener("keydown", le, !0), () => {
        document.removeEventListener("mousedown", J), document.removeEventListener("touchstart", J), document.removeEventListener("keydown", le, !0);
      };
    }, [G, j]), ge(() => {
      var ct;
      if (!G) return;
      const J = Re.current[me], le = (ct = Se.current) == null ? void 0 : ct.querySelector("[data-select-scroll-host]");
      if (!J || !le) return;
      const Le = J.offsetTop, Pe = Le + J.offsetHeight;
      Le < le.scrollTop ? le.scrollTop = Le : Pe > le.scrollTop + le.clientHeight && (le.scrollTop = Pe - le.clientHeight);
    }, [G, me]);
    const mt = ce(() => {
      const J = Ie.trim();
      return J ? q.filter(
        (le) => ar(le.textLabel, J) || le.value.toLowerCase().includes(J.toLowerCase())
      ) : q;
    }, [q, Ie]), Fe = ce(() => v ? Array.isArray(F) ? F : F != null && F !== "" ? [F] : [] : F != null && F !== "" ? [F] : [], [v, F]), De = ce(() => Fe.map((J) => {
      const le = q.find((Le) => Le.value === String(J));
      return {
        value: J,
        option: le,
        label: le ? le.label : String(J),
        textLabel: le ? le.textLabel : String(J)
      };
    }), [q, Fe]), _t = (J) => {
      if (V || oe(J), j) {
        const le = Array.isArray(J) ? String(J[0] ?? "") : String(J ?? "");
        o == null || o(le);
        const Le = te.current;
        Le && (Le.value = le, Le.dispatchEvent(new Event("change", { bubbles: !0 })));
        return;
      }
      Array.isArray(J) || o == null || o(String(J ?? "")), s == null || s(J);
    }, at = () => {
      const J = mt.findIndex(
        (le) => !le.disabled && Fe.some((Le) => String(Le) === le.value)
      );
      if (J >= 0)
        pe(J);
      else {
        const le = mt.findIndex((Le) => !Le.disabled);
        pe(le >= 0 ? le : 0);
      }
      ye(!0);
    }, Dt = (J) => {
      var Le;
      if (mt.length === 0) return;
      let le = me;
      for (let Pe = 0; Pe < mt.length; Pe++)
        if (le = (le + J + mt.length) % mt.length, !((Le = mt[le]) != null && Le.disabled)) {
          pe(le);
          return;
        }
    }, it = (J) => {
      var le, Le;
      if (!J.disabled)
        if (v) {
          const ct = Fe.some((nt) => String(nt) === J.value) ? Fe.filter((nt) => String(nt) !== J.value) : [...Fe, J.rawValue];
          _t(ct);
        } else
          _t(J.rawValue), ye(!1), j ? (le = te.current) == null || le.focus() : (Le = we.current) == null || Le.focus();
    }, ut = (J) => {
      if (c == null || c(J), !N) {
        if (J.key === "Escape") {
          G && (J.preventDefault(), J.stopPropagation(), ye(!1));
          return;
        }
        if (J.key === "Tab") {
          G && ye(!1);
          return;
        }
        if (J.key === "ArrowDown") {
          J.preventDefault(), G ? Dt(1) : at();
          return;
        }
        if (J.key === "ArrowUp") {
          J.preventDefault(), G ? Dt(-1) : at();
          return;
        }
        if (J.key === "Enter" || J.key === " " && J.target !== X.current)
          if (J.preventDefault(), !G)
            at();
          else {
            const le = mt[me];
            le && !le.disabled && it(le);
          }
      }
    }, At = y || T, pt = E || D, lt = ce(() => mt.some((J) => !!J.group), [mt]), Nt = j ? { "aria-hidden": !0 } : {
      id: K,
      title: f,
      role: "combobox",
      "aria-label": P,
      "aria-expanded": G,
      "aria-haspopup": "listbox",
      "aria-controls": `${K}-listbox`,
      "aria-activedescendant": G ? `${K}-opt-${me}` : void 0,
      "aria-disabled": N || void 0,
      tabIndex: N ? -1 : 0,
      onBlur: (J) => {
        var Le;
        const le = J.relatedTarget;
        le && ((Le = Se.current) != null && Le.contains(le)) || d == null || d(J);
      },
      onKeyDown: ut
    };
    return /* @__PURE__ */ i(
      "div",
      {
        ref: ke,
        "data-slot": "select-wrapper",
        "data-state": G ? "open" : "closed",
        className: x(
          "relative min-w-0",
          A === "ghost" ? "inline-flex w-auto" : At || "w-full"
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
          j ? /* @__PURE__ */ i(
            "select",
            {
              ...S,
              ref: qe,
              id: K,
              name: p,
              title: f,
              "aria-label": P,
              "aria-invalid": S["aria-invalid"] ?? (Je || void 0),
              disabled: N,
              multiple: v || void 0,
              value: V ? Array.isArray(a) ? a.map(String) : String(a ?? "") : String(Z ?? ""),
              onBlur: (J) => {
                var Le;
                const le = J.relatedTarget;
                le && ((Le = Se.current) != null && Le.contains(le)) || d == null || d(J);
              },
              onClick: (J) => {
                var le;
                (le = S.onClick) == null || le.call(S, J), !J.defaultPrevented && (J.stopPropagation(), !N && (G ? ye(!1) : at()));
              },
              onKeyDown: ut,
              onChange: (J) => {
                V || oe(J.target.value), o == null || o(J.target.value), s == null || s(J);
              },
              className: "peer pointer-events-none absolute inset-0 h-full w-full appearance-none opacity-0",
              children: [
                I && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: I }),
                q.map((J, le) => /* @__PURE__ */ e("option", { value: J.value, disabled: J.disabled, children: J.textLabel }, `${J.value}-${le}`))
              ]
            }
          ) : p ? /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: p,
              value: v ? Fe.join(",") : String(Fe[0] ?? "")
            }
          ) : null,
          /* @__PURE__ */ i(
            "div",
            {
              ref: we,
              "data-slot": "select-trigger",
              "data-state": G ? "open" : "closed",
              ...Nt,
              onClick: (J) => {
                var le;
                j && (J.preventDefault(), (le = te.current) == null || le.focus()), J.stopPropagation(), !N && (G ? ye(!1) : at());
              },
              "data-motion": H,
              className: x(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                A === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : x(
                  "w-full px-2.5 py-1",
                  Er,
                  v ? Xb[z] : qb[z],
                  G && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  Je && "border-[var(--abc-danger)]",
                  N && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                C
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: De.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: I }) : v ? De.map((J) => /* @__PURE__ */ i(
                  "span",
                  {
                    "data-testid": "select-tag",
                    className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: J.label }),
                      !N && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": `移除 ${J.textLabel}`,
                          onClick: (le) => {
                            le.stopPropagation(), _t(
                              Fe.filter((Le) => String(Le) !== String(J.value))
                            );
                          },
                          className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                          children: /* @__PURE__ */ e(Ct, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  String(J.value)
                )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (tt = De[0]) != null && tt.option ? co(De[0].option, !1) : (Tt = De[0]) == null ? void 0 : Tt.label }) }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  Xe && De.length > 0 && !N && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "select-clear",
                      "aria-label": "清空",
                      onClick: (J) => {
                        J.stopPropagation(), _t(v ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  !R && /* @__PURE__ */ e(
                    er,
                    {
                      className: x(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        G && "rotate-180"
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          de && Pt && cr(
            /* @__PURE__ */ i(
              "div",
              {
                ref: Se,
                id: `${K}-listbox`,
                role: "listbox",
                "data-slot": "select-popover",
                "data-abc-floating": "",
                "data-motion": H,
                "data-placement": rt,
                "aria-multiselectable": v || void 0,
                onMouseDown: (J) => J.stopPropagation(),
                style: ot,
                className: x(
                  "z-[1500] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                  M ? "min-w-full" : "min-w-[140px]",
                  Ce ? "abc-animate-popover-in" : "abc-animate-popover-out",
                  pt
                ),
                children: [
                  w && /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                    /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e(
                      "input",
                      {
                        ref: X,
                        type: "text",
                        autoFocus: !0,
                        "data-testid": "select-search-input",
                        value: Ie,
                        onClick: (J) => J.stopPropagation(),
                        onKeyDown: ut,
                        onChange: (J) => {
                          const le = J.target.value;
                          ne(le);
                          const Pe = (le.trim() ? q.filter(
                            (ct) => ar(ct.textLabel, le) || ct.value.toLowerCase().includes(le.toLowerCase())
                          ) : q).findIndex((ct) => !ct.disabled);
                          pe(Pe >= 0 ? Pe : 0);
                        },
                        placeholder: "搜索或输入拼音首字母...",
                        className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e("div", { "data-select-scroll-host": "", className: "max-h-56 overflow-y-auto p-1", children: mt.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : mt.map((J, le) => {
                    var kt;
                    const Le = Fe.some((bt) => String(bt) === J.value), Pe = le === me, ct = le > 0 ? (kt = mt[le - 1]) == null ? void 0 : kt.group : void 0, nt = lt && J.group && J.group !== ct;
                    return /* @__PURE__ */ i(dt.Fragment, { children: [
                      nt && /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]", children: J.group }),
                      /* @__PURE__ */ i(
                        "button",
                        {
                          ref: (bt) => {
                            Re.current[le] = bt;
                          },
                          id: `${K}-opt-${le}`,
                          type: "button",
                          role: "option",
                          "aria-selected": Le,
                          disabled: J.disabled,
                          onMouseEnter: () => {
                            J.disabled || pe(le);
                          },
                          onMouseDown: (bt) => bt.stopPropagation(),
                          onClick: (bt) => {
                            bt.preventDefault(), bt.stopPropagation(), it(J);
                          },
                          className: x(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            Le ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : Pe && !J.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                            J.disabled && "opacity-45 cursor-not-allowed"
                          ),
                          children: [
                            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                              /* @__PURE__ */ e("div", { className: "truncate", children: co(J, !0) }),
                              J.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: J.description })
                            ] }),
                            Le && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 shrink-0" })
                          ]
                        }
                      )
                    ] }, `${J.value}-${le}`);
                  }) })
                ]
              }
            ),
            Pt
          ),
          l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
          u && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: u })
        ]
      }
    );
  }
);
sr.displayName = "Select";
function rh({
  value: t,
  defaultValue: r,
  onValueChange: a,
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
  disabled: h,
  triggerClassName: v,
  contentClassName: w,
  size: k
}) {
  return /* @__PURE__ */ e(
    sr,
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
      searchable: l,
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
const fi = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: d,
  motion: c,
  compact: b = !1,
  className: l
}) => {
  const u = Be(d, "md"), m = Me(c), h = {
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
      className: x(
        "flex flex-col items-center justify-center text-center select-none",
        h.container,
        m !== "none" && "abc-animate-fade-in",
        l
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
            children: a ?? /* @__PURE__ */ e(Kd, { className: h.iconSize })
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
          Ae,
          {
            variant: "secondary",
            size: h.btnSize,
            motion: m,
            icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, Zb = {
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
}, on = ({
  mode: t,
  current: r,
  currentPage: a,
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
  showTotal: h = !0,
  showQuickJumper: v = !0,
  className: w,
  hasNext: k,
  hasPrev: g,
  nextCursor: N,
  prevCursor: _,
  currentCursor: A,
  loadedCount: L,
  onNext: C,
  onPrev: y,
  onResetCursor: T,
  loading: E = !1
}) => {
  const D = r ?? a ?? n ?? 1, M = s ?? (typeof o == "number" ? o : void 0) ?? 10, R = Be(
    d ?? (typeof o == "string" ? o : void 0),
    "sm"
  ), O = Me(c), P = Zb[R], S = t ?? (b === void 0 && (k !== void 0 || g !== void 0 || C !== void 0) ? "cursor" : "offset"), B = (Z) => {
    u == null || u(1, Z), p == null || p(Z), f == null || f(Z);
  }, j = ce(() => (l || []).map((Z) => ({
    label: `${Z} 条/页`,
    value: Z
  })), [l]);
  if (S === "cursor")
    return /* @__PURE__ */ i(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": O,
        className: x(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          P.wrap,
          w
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            h === !1 ? null : typeof h == "function" ? h(L ?? 0) : L !== void 0 ? /* @__PURE__ */ i("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: L }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            T && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: T,
                disabled: E || !g,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            l && l.length > 0 && (p || f || u) && /* @__PURE__ */ e(
              sr,
              {
                "aria-label": "每页条数",
                size: R,
                value: M,
                disabled: E,
                onChange: (Z) => B(Number(Z)),
                options: j,
                searchable: !1,
                clearable: !1,
                wrapperClassName: P.selectWrap,
                className: x("cursor-pointer font-sans tabular-nums select-none", P.select)
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !g || E,
                onClick: y,
                className: x(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  P.navBtn
                ),
                children: [
                  /* @__PURE__ */ e(Ja, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "上一页" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "下一页",
                disabled: !k || E,
                onClick: C,
                className: x(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  P.navBtn
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "下一页" }),
                  /* @__PURE__ */ e(nr, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ]
      }
    );
  const I = b ?? 0, z = Math.max(1, Math.ceil(I / Math.max(1, M))), [H, U] = $(""), K = be(null);
  if (I <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": O,
        className: x(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          P.wrap,
          w
        ),
        children: /* @__PURE__ */ e("div", { children: h === !1 ? null : typeof h == "function" ? h(0) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const ee = (Z) => {
    const oe = Math.min(Math.max(1, Z), z);
    oe !== D && (u == null || u(oe, M), m == null || m(oe));
  }, q = () => {
    const Z = H.trim();
    if (!Z) {
      K.current = null;
      return;
    }
    if (Z === K.current) return;
    const oe = parseInt(Z, 10);
    if (Number.isNaN(oe)) {
      U(""), K.current = null;
      return;
    }
    const F = Math.min(Math.max(1, oe), z);
    K.current = Z, U(String(F)), ee(F);
  }, V = [];
  if (z <= 7)
    for (let Z = 1; Z <= z; Z++) V.push(Z);
  else {
    V.push(1), D > 3 && V.push("...");
    const Z = Math.max(2, D - 1), oe = Math.min(z - 1, D + 1);
    for (let F = Z; F <= oe; F++) V.push(F);
    D < z - 2 && V.push("..."), V.push(z);
  }
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": O,
      className: x(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        P.wrap,
        w
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: h === !1 ? null : typeof h == "function" ? h(I) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: I }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          l && l.length > 0 && /* @__PURE__ */ e(
            sr,
            {
              "aria-label": "每页条数",
              size: R,
              value: M,
              disabled: E,
              onChange: (Z) => B(Number(Z)),
              options: j,
              searchable: !1,
              clearable: !1,
              wrapperClassName: P.selectWrap,
              className: x("cursor-pointer font-sans tabular-nums select-none", P.select)
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: D <= 1,
              onClick: () => ee(D - 1),
              className: x(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                P.navBtn
              ),
              children: /* @__PURE__ */ e(Ja, { className: "h-3.5 w-3.5" })
            }
          ),
          V.map(
            (Z, oe) => Z === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${oe}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => ee(Z),
                className: x(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  P.pageBtn,
                  Z === D ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: Z
              },
              Z
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: D >= z,
              onClick: () => ee(D + 1),
              className: x(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                P.navBtn
              ),
              children: /* @__PURE__ */ e(nr, { className: "h-3.5 w-3.5" })
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
                    value: H,
                    onChange: (Z) => {
                      K.current = null, U(Z.target.value);
                    },
                    onKeyDown: (Z) => {
                      Z.key === "Enter" && (Z.preventDefault(), q());
                    },
                    onBlur: q,
                    className: x(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors",
                      P.input
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
}, ah = (t) => /* @__PURE__ */ e(on, { mode: "cursor", ...t }), uo = (t) => /* @__PURE__ */ e(on, { ...t }), Bt = ({
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
  const l = Me(a), u = l === "none" ? "none" : r, m = {
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
}, nh = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ i(
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
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(Bt, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(Bt, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(Bt, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(Bt, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), sh = ({
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
    children: /* @__PURE__ */ i("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((d, c) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Bt,
        {
          variant: "text",
          width: c === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, c)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((d, c) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((b, l) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        Bt,
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
), oh = ({
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
    className: x(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      a
    ),
    ...s,
    children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(Bt, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(Bt, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, d) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        Bt,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, d)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, d) => /* @__PURE__ */ e(Bt, { variant: "text", width: 36, height: 10, animation: r }, d)) })
    ]
  }
), zr = {
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
function Jb(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in zr ? n : "neutral";
}
const Ar = ({
  tone: t,
  status: r,
  color: a,
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
  const p = Jb(t, r, a), f = zr[p], h = n ?? s ?? u, v = Be(c, "sm"), w = Me(b);
  return /* @__PURE__ */ i(
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
        l
      ),
      ...m,
      children: [
        o && /* @__PURE__ */ i("span", { className: "relative inline-flex h-1.5 w-1.5 shrink-0", children: [
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
}, ih = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  variant: s,
  size: o,
  motion: d,
  children: c,
  className: b,
  ...l
}) => {
  const u = Be(o, "sm"), m = Me(d);
  if (s) {
    const N = {
      default: "border-transparent bg-[var(--abc-primary,#2563eb)] text-white",
      secondary: "border-transparent bg-[var(--abc-bg-subtle,#f1f5f9)] text-[var(--abc-fg-secondary,#64748b)]",
      outline: "border-[var(--abc-border,#e2e8f0)] text-[var(--abc-fg,#0f172a)] bg-transparent",
      destructive: "border-transparent bg-[var(--abc-danger,#ef4444)] text-white",
      danger: zr.danger.tag,
      success: zr.success.tag,
      warning: zr.warning.tag,
      info: zr.info.tag,
      neutral: zr.neutral.tag
    }, _ = N[s] ?? N.default;
    return /* @__PURE__ */ e(
      "span",
      {
        "data-motion": m,
        className: x(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--abc-primary)] focus:ring-offset-2",
          _,
          b
        ),
        ...l,
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
  return c ? /* @__PURE__ */ i("span", { "data-motion": m, className: x("relative inline-flex shrink-0", b), children: [
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
}, Qb = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, em = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = Be(a, "sm"), d = Me(n), [c, b] = $(!1), l = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": d,
      className: x(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        Qb[o],
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
      ) : /* @__PURE__ */ e("span", { children: l })
    }
  );
};
function lh(t = {}) {
  return "";
}
const tm = ({
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
    Ar,
    {
      tone: d,
      dot: r,
      className: x(t === "outline" && "bg-transparent border-[var(--abc-border)]", a),
      ...s,
      children: n
    }
  );
};
tm.displayName = "Tag";
const rm = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, am = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, nm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, sm = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, ln = ({
  as: t = "div",
  title: r,
  subtitle: a,
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
  bodyClassName: h,
  children: v,
  ...w
}) => {
  const k = t, g = Be(o, "md"), N = Me(m), _ = d ?? g;
  return /* @__PURE__ */ i(
    k,
    {
      "data-motion": N,
      "data-size": g,
      className: x(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        sm[c],
        p && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        f
      ),
      ...w,
      children: [
        b && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: b }),
        (r || n || l) && /* @__PURE__ */ i(
          "div",
          {
            className: x(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              am[g]
            ),
            children: [
              /* @__PURE__ */ i("div", { className: "min-w-0", children: [
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
              (n || l) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                l && /* @__PURE__ */ e(Ar, { tone: l.tone ?? "primary", size: "xs", dot: !1, children: l.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: x(rm[_], h), children: u ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(Bt, { width: "45%", height: 14, motion: N }),
          /* @__PURE__ */ e(Bt, { width: "90%", height: 12, motion: N }),
          /* @__PURE__ */ e(Bt, { width: "70%", height: 12, motion: N })
        ] }) : v }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: x(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              nm[g]
            ),
            children: s
          }
        )
      ]
    }
  );
}, om = dt.forwardRef(
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
om.displayName = "CardHeader";
const im = dt.forwardRef(
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
im.displayName = "CardTitle";
const lm = dt.forwardRef(
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
lm.displayName = "CardDescription";
const cm = dt.forwardRef(
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
cm.displayName = "CardContent";
const dm = dt.forwardRef(
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
dm.displayName = "CardFooter";
const ch = ({
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
) : r ? /* @__PURE__ */ i(
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
), um = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, bm = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, dh = ({
  direction: t = "horizontal",
  size: r,
  wrap: a = !1,
  align: n = "center",
  className: s,
  children: o,
  ...d
}) => {
  const c = Be(r, "sm");
  return /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : bm[n],
        um[c],
        a && "flex-wrap",
        s
      ),
      ...d,
      children: o
    }
  );
}, mm = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, uh = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: o,
  ...d
}) => {
  const c = Be(r, "md"), b = Me(a), l = be(null), [u, m] = $({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ i(
    "div",
    {
      ref: l,
      "data-motion": b,
      "data-size": c,
      onMouseMove: (p) => {
        var h;
        const f = (h = l.current) == null ? void 0 : h.getBoundingClientRect();
        f && m({ x: p.clientX - f.left, y: p.clientY - f.top, active: !0 });
      },
      onMouseLeave: () => m((p) => ({ ...p, active: !1 })),
      className: x(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        mm[c],
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
}, bo = ({ duration: t = 8, motion: r, className: a }) => {
  const n = Me(r);
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
}, mo = ({
  motion: t,
  className: r
}) => {
  const a = Me(t), n = a === "none";
  return /* @__PURE__ */ i(
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
}, ra = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, Ma = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Nn = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, pi = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, Ts = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, bh = ({
  title: t,
  value: r,
  prefix: a,
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
  const h = Be(u, "md"), v = Me(m), w = It().replace(/:/g, ""), k = dt.useMemo(() => {
    if (!o || o.length < 2) return null;
    const N = Math.min(...o), A = Math.max(...o) - N || 1, L = 120, C = 32, T = `M ${o.map((D, M) => {
      const R = M / (o.length - 1) * L, O = C - 4 - (D - N) / A * (C - 8);
      return `${R.toFixed(1)},${O.toFixed(1)}`;
    }).join(" L ")}`, E = `${T} L ${L},${C} L 0,${C} Z`;
    return { linePath: T, areaPath: E, width: L, height: C };
  }, [o]), g = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": v,
      "data-size": h,
      className: x(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        ra[h],
        l && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        p
      ),
      ...f,
      children: b ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(Bt, { width: "45%", height: 13, motion: v }),
          /* @__PURE__ */ e(Bt, { variant: "rounded", width: 30, height: 30, motion: v })
        ] }),
        /* @__PURE__ */ e(Bt, { width: "60%", height: 26, motion: v }),
        /* @__PURE__ */ e(Bt, { width: "80%", height: 18, motion: v })
      ] }) : /* @__PURE__ */ i(Ke, { children: [
        /* @__PURE__ */ i("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          d && /* @__PURE__ */ e(
            "span",
            {
              className: x(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                Ts[h]
              ),
              children: d
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: pi[h], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || k) && /* @__PURE__ */ i("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ i(
              "span",
              {
                className: x(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  g
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(Uo, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(Wd, { className: "h-3 w-3" }) : /* @__PURE__ */ e(gn, { className: "h-3 w-3" }),
                  s.value
                ]
              }
            ),
            s.label && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: s.label })
          ] }),
          k && /* @__PURE__ */ i(
            "svg",
            {
              viewBox: `0 0 ${k.width} ${k.height}`,
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              className: "h-7 w-24 shrink-0 overflow-visible",
              children: [
                /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ i("linearGradient", { id: `abc-spark-${w}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
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
}, hi = as(null), fm = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, mh = ({
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  columns: c = 2,
  className: b,
  children: l
}) => {
  const u = It(), m = Be(o, "md"), p = Me(d), [f, h] = lr({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), v = (w) => {
    if (!s)
      if (t) {
        const k = Array.isArray(f) ? f : [], N = k.includes(w) ? k.filter((_) => _ !== w) : [...k, w];
        h(N);
      } else
        h(w);
  };
  return /* @__PURE__ */ e(
    hi.Provider,
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
          className: x("grid gap-3", fm[c], b),
          children: l
        }
      )
    }
  );
}, fh = ({
  value: t,
  title: r,
  description: a,
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
  const h = Ea(hi), v = Be(u ?? (h == null ? void 0 : h.size), "md"), w = Me(m ?? (h == null ? void 0 : h.motion)), k = !!(l || h != null && h.disabled), g = !!(h && t !== void 0), N = h && !h.multiple ? "radio" : "checkbox", [_, A] = lr({
    value: d,
    defaultValue: c,
    onChange: b
  }), L = g ? h.multiple ? Array.isArray(h.value) && h.value.includes(t) : h.value === t : _, C = (y) => {
    k || (g ? h.toggleValue(t) : A(y));
  };
  return /* @__PURE__ */ i(
    "label",
    {
      "data-motion": w,
      "data-size": v,
      "data-checked": L ? "true" : "false",
      className: x(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        ra[v],
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
              Ts[v]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: x("font-semibold text-[var(--abc-fg)]", Ma[v]), children: r }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          a && /* @__PURE__ */ e("p", { className: x("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Nn[v]), children: a }),
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
}, ph = ({
  title: t,
  description: r,
  icon: a,
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
  const p = Be(l, "md"), f = Me(u), h = !!((o || b) && !c), v = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": f,
      "data-size": p,
      className: x(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        ra[p],
        h && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
        c && "opacity-55 cursor-not-allowed",
        m
      ),
      children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { className: "flex items-start justify-between gap-2.5", children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-2.5", children: [
              a && /* @__PURE__ */ e(
                "span",
                {
                  className: x(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    Ts[p]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: x("min-w-0 truncate", Ma[p]), children: o && !c ? /* @__PURE__ */ e(
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
          r && /* @__PURE__ */ e("p", { className: x("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", Nn[p]), children: r })
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
}, pm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, hh = ({
  title: t,
  subtitle: r,
  icon: a,
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
  const p = Be(c, "md"), f = Me(b), h = It(), [v, w] = lr({
    value: o,
    defaultValue: s,
    onChange: d
  });
  return /* @__PURE__ */ i(
    "section",
    {
      "data-motion": f,
      "data-size": p,
      className: x(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        l
      ),
      children: [
        /* @__PURE__ */ i("div", { className: x("flex items-center justify-between gap-3", pm[p]), children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              "aria-expanded": v,
              "aria-controls": h,
              onClick: () => w(!v),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  er,
                  {
                    className: x(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      v ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: a }),
                /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: x("truncate font-semibold text-[var(--abc-fg)]", Ma[p]), children: t }),
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
              ra[p],
              u
            ),
            children: m
          }
        ) }) })
      ]
    }
  );
}, gh = ({
  tier: t,
  price: r,
  period: a = "/ 月",
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
  const h = Be(m, "md"), v = Me(p);
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": v,
      "data-size": h,
      className: x(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        ra[h],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        f
      ),
      children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: x("font-bold text-[var(--abc-fg)]", Ma[h]), children: t }),
            o && d && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(Ta, { className: "h-2.5 w-2.5" }),
              d
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: x("mt-1.5 text-[var(--abc-fg-muted)]", Nn[h]), children: n }),
          /* @__PURE__ */ i("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: x("font-extrabold text-[var(--abc-fg)]", pi[h]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((w, k) => {
            const g = typeof w == "string" ? { text: w, included: !0 } : w, N = g.included !== !1;
            return /* @__PURE__ */ i(
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
          Ae,
          {
            variant: o ? "primary" : "secondary",
            size: h,
            motion: v,
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
}, hm = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, vh = ({
  columns: t = 3,
  gap: r,
  className: a,
  children: n,
  ...s
}) => {
  const o = Be(r, "md");
  return /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "grid auto-rows-[minmax(148px,auto)]",
        hm[t],
        gm[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, gm = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, xh = ({
  colSpan: t = 1,
  rowSpan: r = 1,
  eyebrow: a,
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
  const h = Be(l, "md"), v = Me(u), w = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", k = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": v,
      "data-size": h,
      className: x(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        ra[h],
        w,
        k,
        b && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        m
      ),
      ...f,
      children: [
        /* @__PURE__ */ i("div", { children: [
          (a || o) && /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: x("font-bold text-[var(--abc-fg)]", Ma[h]), children: n }),
          s && /* @__PURE__ */ e("p", { className: x("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", Nn[h]), children: s })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: d }),
        p,
        c && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, vm = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, yh = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const o = Be(a, "sm"), d = Me(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": d,
      className: x("abc-breadcrumb", vm[o], s),
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
            className: x(
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
}, xm = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, ym = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, wh = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: d,
  className: c
}) => {
  const b = n === "vertical", l = Be(s, "sm"), u = Me(o);
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
        return /* @__PURE__ */ i(
          "li",
          {
            className: x(
              "relative flex min-w-0",
              b ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ i(
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
                          xm[l],
                          w
                        ),
                        children: m.icon ? m.icon : f === "finish" ? /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5" }) : f === "error" ? /* @__PURE__ */ e(Rr, { className: "h-3.5 w-3.5" }) : p + 1
                      }
                    ),
                    /* @__PURE__ */ i("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: x(
                            "block font-semibold",
                            ym[l],
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
}, wm = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, Nm = {
  xs: "px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]",
  sm: "px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]",
  md: "px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]",
  lg: "px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]"
};
function Nh({
  options: t,
  value: r,
  onChange: a,
  onValueChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  block: c = !1,
  className: b,
  ...l
}) {
  const u = Be(o, "sm"), m = Me(d), p = a ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "segmented-control",
      "data-motion": m,
      className: x(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        c ? "flex w-full" : "inline-flex",
        wm[u],
        b
      ),
      ...l,
      children: t.map((f) => {
        const h = f.value === r, v = s || !!f.disabled;
        return /* @__PURE__ */ i(
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
              Nm[u],
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
const Ut = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: d
}) => {
  const c = Me(s), [b, l] = $(!1), [u, m] = $(!1), p = It(), f = be(null), h = be(null), v = be(null), w = be(null), k = fe(() => {
    typeof window > "u" || (v.current !== null && (window.clearTimeout(v.current), v.current = null), w.current !== null && (window.clearTimeout(w.current), w.current = null));
  }, []);
  ge(() => () => k(), [k]);
  const g = fe(
    (M = !1) => {
      a || !t || (k(), m(!1), M || n <= 0 || typeof window > "u" ? l(!0) : v.current = window.setTimeout(() => {
        l(!0), v.current = null;
      }, n));
    },
    [a, t, n, k]
  ), N = fe(() => {
    if (k(), typeof window > "u") {
      l(!1);
      return;
    }
    w.current = window.setTimeout(() => {
      l(!1), w.current = null;
    }, 60);
  }, [k]), _ = fe(() => {
    k(), m(!0), l(!1);
  }, [k]), { isMounted: A, isVisible: L } = Dr(
    b && !a && !!t,
    c === "none" || u ? 0 : 100
  ), { style: C, actualSide: y, arrowOffset: T, portalContainer: E } = ta({
    open: A,
    triggerRef: f,
    floatingRef: h,
    placement: r,
    offset: 8
  });
  if (ge(() => {
    if (!b) return;
    const M = (R) => {
      R.key === "Escape" && _();
    };
    return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [b, _]), !t || a) return /* @__PURE__ */ e(Ke, { children: o });
  const D = y === "top" ? { left: `${T}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "bottom" ? { left: `${T}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "left" ? { top: `${T}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${T}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ i(Ke, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: f,
        "data-motion": c,
        "aria-describedby": b ? p : void 0,
        onMouseEnter: () => g(!1),
        onMouseLeave: N,
        onFocus: () => g(!0),
        onBlur: _,
        onPointerDown: _,
        className: x("inline-flex items-center", d),
        children: o
      }
    ),
    A && E && cr(
      /* @__PURE__ */ i(
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
                style: D,
                className: "pointer-events-none absolute h-2 w-2 bg-slate-900 dark:border-slate-700 dark:bg-slate-800"
              }
            )
          ]
        }
      ),
      E
    )
  ] });
}, Aa = ({
  items: t = [],
  content: r,
  align: a,
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
  const p = Me(b), [f, h] = lr({
    value: o,
    defaultValue: d,
    onChange: c
  }), { isMounted: v, isVisible: w } = Dr(f, p === "none" ? 0 : 140), k = be(null), g = be(null), N = be(null), _ = It(), A = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: L, actualSide: C, portalContainer: y } = ta({
    open: v,
    triggerRef: k,
    floatingRef: g,
    placement: A,
    offset: 6
  }), T = fe(() => {
    N.current !== null && typeof window < "u" && (window.clearTimeout(N.current), N.current = null);
  }, []);
  ge(() => () => T(), [T]);
  const E = fe(() => {
    s === "hover" && (T(), h(!0));
  }, [s, T, h]), D = fe(() => {
    s === "hover" && (T(), typeof window < "u" && (N.current = window.setTimeout(() => {
      h(!1), N.current = null;
    }, 140)));
  }, [s, T, h]), M = fe((B) => {
    var H;
    const j = g.current;
    if (!j) return;
    const I = Array.from(
      j.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (I.length === 0) return;
    const z = (B % I.length + I.length) % I.length;
    (H = I[z]) == null || H.focus();
  }, []);
  ge(() => {
    if (!f) return;
    const B = (I) => {
      var H, U;
      const z = I.target;
      (H = k.current) != null && H.contains(z) || (U = g.current) != null && U.contains(z) || h(!1);
    }, j = (I) => {
      var z;
      if (I.key === "Escape") {
        I.preventDefault(), I.stopPropagation(), h(!1);
        const H = (z = k.current) == null ? void 0 : z.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        H == null || H.focus();
      }
    };
    return document.addEventListener("mousedown", B), document.addEventListener("keydown", j, !0), () => {
      document.removeEventListener("mousedown", B), document.removeEventListener("keydown", j, !0);
    };
  }, [f, h]);
  const R = !r, O = (B) => {
    B.key === "ArrowDown" ? (B.preventDefault(), h(!0), R && typeof window < "u" && window.requestAnimationFrame(() => M(0))) : (B.key === "Enter" || B.key === " ") && B.target === B.currentTarget && (B.preventDefault(), h(!f));
  }, P = (B) => {
    if (!R) return;
    const j = g.current;
    if (!j) return;
    const I = Array.from(
      j.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (I.length === 0) return;
    const z = I.indexOf(document.activeElement);
    B.key === "ArrowDown" ? (B.preventDefault(), M(z < 0 ? 0 : z + 1)) : B.key === "ArrowUp" ? (B.preventDefault(), M(z <= 0 ? I.length - 1 : z - 1)) : B.key === "Home" ? (B.preventDefault(), M(0)) : B.key === "End" && (B.preventDefault(), M(I.length - 1));
  }, S = s === "hover" ? C === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : C === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : C === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ i(Ke, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: k,
        "data-motion": p,
        onMouseEnter: E,
        onMouseLeave: D,
        className: x("inline-flex", u),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": f,
            "aria-controls": f ? _ : void 0,
            "aria-haspopup": R ? "menu" : void 0,
            onClick: () => h(!f),
            onKeyDown: O,
            className: "inline-flex cursor-pointer items-center",
            children: l
          }
        )
      }
    ),
    v && y && cr(
      /* @__PURE__ */ e(
        "div",
        {
          ref: g,
          id: _,
          role: R ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": p,
          "data-placement": C,
          style: L,
          onMouseEnter: E,
          onMouseLeave: D,
          onKeyDown: P,
          className: x(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            S,
            p !== "none" && (w ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            m
          ),
          children: r || t.map(
            (B) => B.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, B.key) : /* @__PURE__ */ i(dt.Fragment, { children: [
              B.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: B.disabled,
                  onClick: () => {
                    var j;
                    B.disabled || ((j = B.onClick) == null || j.call(B), h(!1));
                  },
                  className: x(
                    "abc-motion-control flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
                    B.danger ? "text-[var(--abc-danger)] enabled:hover:bg-[var(--abc-danger-soft)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                    B.disabled && "opacity-45 cursor-not-allowed"
                  ),
                  children: [
                    B.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: B.icon }),
                    /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: B.label })
                  ]
                }
              )
            ] }, B.key)
          )
        }
      ),
      y
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
  const d = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    Aa,
    {
      ...o,
      placement: n ?? (d && d === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: x(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, gi = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Ms = ({
  label: t,
  htmlFor: r,
  required: a = !1,
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
  const p = Be(b, "sm"), f = Me(l);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: x(
        c === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        u
      ),
      children: [
        (t || d) && /* @__PURE__ */ i(
          "div",
          {
            className: x(
              "flex items-center justify-between gap-2",
              c === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ i(
                "label",
                {
                  htmlFor: r,
                  className: x(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    gi[p]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(Ut, { content: n, children: /* @__PURE__ */ e(Jr, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
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
}, km = dt.forwardRef(
  ({ className: t, size: r = "sm", required: a, children: n, ...s }, o) => /* @__PURE__ */ i(
    "label",
    {
      ref: o,
      className: x(
        "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
        gi[r] || "text-xs",
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
km.displayName = "Label";
const Sm = Ne.forwardRef(
  ({
    className: t,
    containerClassName: r,
    wrapperClassName: a,
    onClear: n,
    clearLabel: s = "清空搜索",
    size: o = "sm",
    ...d
  }, c) => /* @__PURE__ */ e("div", { className: x("relative block min-w-[200px]", r, a), children: /* @__PURE__ */ e(
    yt,
    {
      ref: c,
      size: o,
      allowClear: !!n,
      onClear: n,
      prefix: /* @__PURE__ */ e(
        zt,
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
Sm.displayName = "SearchInput";
const fo = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, po = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, Cm = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, aa = dt.forwardRef(
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
    description: l,
    className: u,
    ...m
  }, p) => {
    const f = Be(d, "sm"), h = Me(c), v = It(), w = t || v, k = be(null);
    bn(p, () => k.current, []);
    const [g, N] = lr({
      value: r,
      defaultValue: a
    });
    ge(() => {
      k.current && (k.current.indeterminate = !!n);
    }, [n]);
    const _ = !!(b || l);
    return /* @__PURE__ */ i(
      "label",
      {
        htmlFor: w,
        "data-motion": h,
        className: x(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          Cm[f],
          _ ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          u
        ),
        children: [
          /* @__PURE__ */ i(
            "span",
            {
              className: x(
                "relative inline-flex shrink-0 items-center justify-center",
                fo[f],
                _ && "mt-0.5"
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
                    onChange: (A) => {
                      if (o) return;
                      const L = A.target.checked;
                      N(L), s == null || s(L, A);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: x(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      fo[f],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      g || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(gn, { className: x(po[f], "stroke-[2.5] abc-motion-pop") }) : g && /* @__PURE__ */ e(St, { className: x(po[f], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          _ && /* @__PURE__ */ i("span", { className: "flex flex-col", children: [
            b && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: b }),
            l && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
          ] })
        ]
      }
    );
  }
);
aa.displayName = "Checkbox";
const Em = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, _m = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, Tm = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-3.5 w-3.5 translate-x-0.5",
  md: "h-4.5 w-4.5 translate-x-0.5",
  lg: "h-5.5 w-5.5 translate-x-0.5"
}, rr = ({
  checked: t,
  defaultChecked: r = !1,
  onChange: a,
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
  const h = Be(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), v = Me(d), [w, k] = lr({
    value: t,
    defaultValue: r,
    onChange: a
  }), g = !!(n || s), N = c ?? l, _ = b ?? u;
  return /* @__PURE__ */ i(
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
        Em[h],
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
              w ? _m[h] : Tm[h]
            ),
            children: s && /* @__PURE__ */ e(or, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (N || _) && /* @__PURE__ */ e("span", { className: "sr-only", children: w ? N : _ })
      ]
    }
  );
}, Im = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, Mm = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, Am = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, Rm = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, Dm = {
  xs: "text-xs gap-1.5",
  sm: "text-xs gap-2",
  md: "text-sm gap-2",
  lg: "text-sm gap-2.5"
}, fr = ({
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
  const l = Be(o, "sm"), u = Me(d), [m, p] = lr({
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
        Im[l],
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
              Mm[l],
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
        return /* @__PURE__ */ i(
          "label",
          {
            className: x(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              Dm[l],
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
                    Am[l],
                    v ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: v && /* @__PURE__ */ e(
                    "span",
                    {
                      className: x(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        Rm[l]
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
}, Lm = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, Bm = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Pm = 40, ho = 6;
function go(t, r) {
  return Array.isArray(t) ? t.filter((a) => a != null) : t != null && t !== "" ? r ? [t] : [t] : [];
}
function Zn(t) {
  return t.rawLabel !== void 0 && t.rawLabel !== null && t.rawLabel !== "" ? t.rawLabel : t.title;
}
const zm = ({ state: t }) => {
  const {
    flattenedRows: r,
    loadingKeys: a,
    activeIndex: n,
    isCheckable: s,
    checkedKeyStrSet: o,
    selectedRawKeys: d,
    halfCheckedKeyStrSet: c,
    isRowSelectionBlocked: b,
    rowRefs: l,
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
    actualSide: _,
    floatingStyle: A,
    matchWidth: L,
    dropdownClassName: C,
    isVisible: y,
    isSearchable: T,
    resolvedShowToolbar: E,
    searchInputRef: D,
    effectiveKeyword: M,
    handleKeyDown: R,
    searchValue: O,
    setInternalKeyword: P,
    onSearch: S,
    setScrollTop: B,
    scrollHostRef: j,
    searchPlaceholder: I,
    normalized: z,
    commitExpandedKeys: H,
    treeId: U,
    ariaLabel: K,
    label: ee,
    isMultiMode: q,
    listHeight: V,
    emptyText: Z,
    totalVirtualHeight: oe,
    renderedRows: F,
    virtualStartIndex: G,
    itemHeight: ye
  } = t, Ie = (ne, me, pe) => {
    const { node: de, keyStr: Ce, depth: ke, posInSet: we, setSize: Se, hasChildren: X, isExpanded: te } = ne, Re = a.has(Ce), qe = me === n, Xe = s ? o.has(Ce) : d.some((rt) => String(rt) === Ce), Je = s && c.has(Ce), ot = b(de);
    return /* @__PURE__ */ i(
      "div",
      {
        ref: (rt) => {
          l.current[Ce] = rt;
        },
        role: "treeitem",
        "aria-level": ke + 1,
        "aria-posinset": we,
        "aria-setsize": Se,
        "aria-expanded": X ? te : void 0,
        "aria-selected": s ? void 0 : Xe,
        "aria-checked": s && de.checkable !== !1 ? Je ? "mixed" : Xe : void 0,
        "aria-disabled": de.disabled || void 0,
        "data-testid": `tree-select-node-${Ce}`,
        "data-active": qe ? "true" : void 0,
        style: {
          paddingLeft: `${ke * 18 + 8}px`,
          paddingRight: "8px",
          ...pe
        },
        onMouseEnter: () => {
          de.disabled || u(me);
        },
        onMouseDown: (rt) => rt.stopPropagation(),
        onClick: (rt) => {
          rt.preventDefault(), rt.stopPropagation(), m(de);
        },
        className: x(
          "flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] text-xs transition-colors",
          !p && "py-1.5",
          de.disabled ? "opacity-45 cursor-not-allowed" : ot && f && X ? "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]" : Xe && !s ? "cursor-pointer bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : qe ? "cursor-pointer bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: [
          X ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              tabIndex: -1,
              "data-testid": `tree-select-expand-${Ce}`,
              "aria-label": te ? `收起 ${de.title}` : `展开 ${de.title}`,
              onClick: (rt) => {
                rt.stopPropagation(), h(de);
              },
              className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: Re ? /* @__PURE__ */ e(or, { className: "h-3 w-3 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }) : /* @__PURE__ */ e(
                nr,
                {
                  className: x(
                    "h-3.5 w-3.5 transition-transform duration-150",
                    te && "rotate-90"
                  ),
                  "aria-hidden": "true"
                }
              )
            }
          ) : /* @__PURE__ */ e("span", { className: "inline-block h-4 w-4 shrink-0", "aria-hidden": "true" }),
          s && de.checkable !== !1 && /* @__PURE__ */ e(
            "span",
            {
              className: "inline-flex shrink-0 items-center",
              onClick: (rt) => rt.stopPropagation(),
              onMouseDown: (rt) => rt.stopPropagation(),
              children: /* @__PURE__ */ e(
                aa,
                {
                  size: "xs",
                  tabIndex: -1,
                  "aria-label": de.title,
                  disabled: de.disabled,
                  checked: Xe,
                  indeterminate: Je,
                  onChange: (rt) => v(de, rt)
                }
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate", children: Zn(de) }),
          de.badge !== void 0 && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: de.badge }),
          !s && Xe && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-primary)]", "aria-hidden": "true" })
        ]
      },
      Ce
    );
  };
  return /* @__PURE__ */ e(Ke, { children: w && k && cr(
    /* @__PURE__ */ i(
      "div",
      {
        ref: g,
        "data-slot": "tree-select-popover",
        "data-abc-floating": "",
        "data-motion": N,
        "data-placement": _,
        onMouseDown: (ne) => ne.stopPropagation(),
        style: A,
        className: x(
          "z-[1500] max-w-[min(520px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
          L ? "min-w-full" : "min-w-[240px]",
          y ? "abc-animate-popover-in" : "abc-animate-popover-out",
          C
        ),
        children: [
          (T || E) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
            T ? /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                zt,
                {
                  className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: D,
                  type: "text",
                  autoFocus: !0,
                  "data-testid": "tree-select-search-input",
                  value: M,
                  onClick: (ne) => ne.stopPropagation(),
                  onKeyDown: R,
                  onChange: (ne) => {
                    const me = ne.target.value;
                    O === void 0 && P(me), S == null || S(me), u(0), B(0), j.current && (j.current.scrollTop = 0);
                  },
                  placeholder: I,
                  className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              )
            ] }) : /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 text-[11px] font-medium text-[var(--abc-fg-muted)]", children: [
              /* @__PURE__ */ e($o, { className: "h-3 w-3", "aria-hidden": "true" }),
              /* @__PURE__ */ e("span", { children: "节点结构" })
            ] }),
            E && z.treeNodes.length > 0 && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[11px]", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "data-testid": "tree-select-expand-all",
                  onClick: (ne) => {
                    ne.stopPropagation(), H(Gr(z.treeNodes));
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
                  onClick: (ne) => {
                    ne.stopPropagation(), H([]);
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
              ref: j,
              id: U,
              role: "tree",
              "aria-label": K || (typeof ee == "string" ? ee : "树形选项列表"),
              "aria-multiselectable": q || void 0,
              "data-tree-scroll-host": "",
              "data-virtual": p ? "true" : "false",
              onScroll: (ne) => {
                p && B(ne.currentTarget.scrollTop);
              },
              style: { maxHeight: `${V}px` },
              className: "overflow-y-auto p-1",
              children: r.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: Z }) : p ? /* @__PURE__ */ e(
                "div",
                {
                  "data-testid": "tree-select-virtual-spacer",
                  style: {
                    height: `${oe}px`,
                    position: "relative"
                  },
                  children: F.map((ne, me) => {
                    const pe = G + me;
                    return Ie(ne, pe, {
                      position: "absolute",
                      top: `${pe * ye}px`,
                      left: 0,
                      right: 0,
                      height: `${ye}px`
                    });
                  })
                }
              ) : F.map((ne, me) => Ie(ne, me))
            }
          )
        ]
      }
    ),
    k
  ) });
};
function jm(t, r) {
  var ca;
  const {
    treeData: a = [],
    fieldNames: n,
    treeDataSimpleMode: s = !1,
    loadData: o,
    treeLoadedKeys: d,
    value: c,
    defaultValue: b,
    onChange: l,
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
    onTreeExpand: _,
    showToolbar: A,
    searchable: L,
    showSearch: C,
    searchValue: y,
    onSearch: T,
    searchPlaceholder: E = "搜索节点或输入拼音首字母...",
    treeNodeFilterProp: D = "both",
    virtual: M = !0,
    listHeight: R = 280,
    itemHeight: O = 30,
    label: P,
    error: S,
    invalid: B = !1,
    helperText: j,
    required: I = !1,
    placeholder: z = "请选择",
    allowClear: H,
    clearable: U,
    disabled: K = !1,
    id: ee,
    name: q,
    size: V,
    motion: Z,
    className: oe,
    wrapperClassName: F,
    dropdownClassName: G,
    matchWidth: ye = !0,
    portalContainer: Ie,
    container: ne,
    emptyText: me = "暂无匹配节点",
    "aria-label": pe,
    "aria-describedby": de,
    ...Ce
  } = t, ke = Be(V === "ghost" ? "sm" : V, "sm"), we = Me(Z), Se = It(), X = ee || `abc-treeselect-${Se}`, te = `${X}-tree`, Re = `${X}-feedback`, qe = typeof process < "u" && ((ca = process.env) == null ? void 0 : ca.NODE_ENV) === "test" || typeof import.meta < "u" && !1, Xe = !!p, Je = !!(m || Xe), ot = h ?? (Xe && !f ? "SHOW_PARENT" : "SHOW_ALL"), rt = !!(L ?? C), jt = !!(H ?? U), Pt = !!(B || S), mt = A ?? (Je || rt), Fe = ce(
    () => gu(a, {
      fieldNames: n,
      treeDataSimpleMode: s
    }),
    [a, n, s]
  ), De = c !== void 0, [_t, at] = $(() => b !== void 0 ? b : Je ? [] : ""), Dt = De ? c : _t, it = ce(
    () => go(Dt, Je),
    [Dt, Je]
  ), ut = ce(() => Xe ? vu(
    Fe.treeNodes,
    it,
    f
  ) : {
    checkedKeys: it,
    halfCheckedKeys: []
  }, [Xe, Fe.treeNodes, it, f]), At = ce(
    () => new Set(ut.checkedKeys.map((re) => String(re))),
    [ut.checkedKeys]
  ), pt = ce(
    () => new Set(ut.halfCheckedKeys.map((re) => String(re))),
    [ut.halfCheckedKeys]
  ), lt = ce(() => Je ? Xe ? Qs(
    Fe.treeNodes,
    ut.checkedKeys,
    ot,
    f
  ) : it : it.slice(0, 1), [
    Je,
    Xe,
    it,
    Fe.treeNodes,
    ut.checkedKeys,
    ot,
    f
  ]), Nt = ce(
    () => lt.map((re) => {
      const Oe = Fe.nodeMap.get(String(re)), je = Oe ? Zn(Oe) : String(re), Ye = Oe ? Oe.title : typeof je == "string" || typeof je == "number" ? String(je) : Ca(je) || String(re);
      return {
        key: re,
        keyStr: String(re),
        node: Oe,
        label: je,
        title: Ye
      };
    }),
    [lt, Fe.nodeMap]
  ), Ze = N !== void 0, [tt, Tt] = $(
    () => g && g.length > 0 ? g : k ? Gr(Fe.treeNodes) : []
  ), J = be(
    !!(g != null && g.length) || Fe.treeNodes.length > 0
  );
  ge(() => {
    Ze || !k || !J.current && Fe.treeNodes.length > 0 && (J.current = !0, Tt(Gr(Fe.treeNodes)));
  }, [Ze, k, Fe.treeNodes]);
  const [le, Le] = $(() => /* @__PURE__ */ new Set()), [Pe, ct] = $(() => /* @__PURE__ */ new Set()), nt = ce(() => d !== void 0 ? new Set(d.map((re) => String(re))) : le, [d, le]), [kt, bt] = $(!1), [Yt, Ot] = $(""), Rt = y !== void 0 ? y : Yt, [se, Ve] = $(0), [Qe, st] = $(0), { isMounted: et, isVisible: Et } = Dr(
    kt,
    we === "none" || qe ? 0 : 140
  ), Wt = be(null), Ft = be(null), ze = be(null), tr = be(null), qt = be(null), mr = be({}), vr = fe(
    (re) => {
      Ft.current = re, typeof r == "function" ? r(re) : r && (r.current = re);
    },
    [r]
  ), { style: ie, actualSide: he, portalContainer: Te } = ta({
    open: et,
    triggerRef: Ft,
    floatingRef: ze,
    placement: "bottomLeft",
    offset: 6,
    matchWidth: ye
  }), W = Ie ?? ne ?? Te, { filteredNodes: Y, autoExpandedKeys: ue } = ce(
    () => xu(Fe.treeNodes, Rt, D),
    [Fe.treeNodes, Rt, D]
  ), ae = Ze ? N : tt, ve = ce(() => {
    const re = new Set(ae.map((Oe) => String(Oe)));
    return Rt.trim() && ue.forEach((Oe) => re.add(String(Oe))), re;
  }, [ae, Rt, ue]), xe = fe(
    (re) => !!(re.children && re.children.length > 0 || o && re.isLeaf !== !0 && !nt.has(String(re.key))),
    [o, nt]
  ), Ee = ce(
    () => yu(Y, ve, xe),
    [Y, ve, xe]
  ), Ge = fe(
    (re) => !xe(re),
    [xe]
  ), gt = fe(
    (re) => re.disabled ? !0 : Xe ? re.checkable === !1 : !!(re.selectable === !1 || v && !Ge(re)),
    [Xe, v, Ge]
  ), vt = fe(
    (re) => {
      Ze || Tt(re), _ == null || _(re);
    },
    [Ze, _]
  ), Lt = fe(
    async (re) => {
      const Oe = String(re.key);
      if (ve.has(Oe)) {
        vt(ae.filter((Ye) => String(Ye) !== Oe));
        return;
      }
      if (o && (!re.children || re.children.length === 0) && re.isLeaf !== !0 && !nt.has(Oe)) {
        if (Pe.has(Oe)) return;
        ct((Ye) => {
          const xt = new Set(Ye);
          return xt.add(Oe), xt;
        });
        try {
          await o(re), d === void 0 && Le((Ye) => {
            const xt = new Set(Ye);
            return xt.add(Oe), xt;
          });
        } finally {
          ct((Ye) => {
            const xt = new Set(Ye);
            return xt.delete(Oe), xt;
          });
        }
      }
      vt([...ae, re.key]);
    },
    [
      ve,
      ae,
      vt,
      o,
      nt,
      Pe,
      d
    ]
  ), ht = fe(
    (re, Oe = {}) => {
      De || at(re);
      const Ye = go(re, Je).map((xt) => {
        const ft = Fe.nodeMap.get(String(xt));
        return ft ? Zn(ft) : String(xt);
      });
      u == null || u(re), l == null || l(re, Ye, Oe);
    },
    [De, Je, Fe.nodeMap, u, l]
  ), Xt = fe(
    (re, Oe) => {
      if (re.disabled || re.checkable === !1) return;
      const je = String(re.key), Ye = At.has(je), xt = Oe !== void 0 ? Oe : !Ye, ft = ei(
        Fe.treeNodes,
        ut.checkedKeys,
        re,
        xt,
        f
      ), ur = Qs(
        Fe.treeNodes,
        ft.checkedKeys,
        ot,
        f
      );
      ht(ur, {
        triggerNode: re,
        checked: xt,
        halfCheckedKeys: ft.halfCheckedKeys
      });
    },
    [
      At,
      Fe.treeNodes,
      ut.checkedKeys,
      f,
      ot,
      ht
    ]
  ), $t = fe(
    (re) => {
      var Oe;
      if (!re.disabled) {
        if (Xe) {
          if (re.checkable === !1) {
            xe(re) && Lt(re);
            return;
          }
          Xt(re);
          return;
        }
        if (v && !Ge(re)) {
          Lt(re);
          return;
        }
        if (re.selectable === !1) {
          xe(re) && Lt(re);
          return;
        }
        if (Je) {
          const je = String(re.key), Ye = it.some((ft) => String(ft) === je), xt = Ye ? it.filter((ft) => String(ft) !== je) : [...it, re.value];
          ht(xt, { triggerNode: re, checked: !Ye });
          return;
        }
        ht(re.value, { triggerNode: re, checked: !0 }), bt(!1), (Oe = Ft.current) == null || Oe.focus();
      }
    },
    [
      Xe,
      xe,
      Lt,
      Xt,
      v,
      Ge,
      Je,
      it,
      ht
    ]
  );
  ge(() => {
    if (!kt) {
      y === void 0 && Ot(""), st(0);
      return;
    }
    const re = (je) => {
      var xt, ft;
      const Ye = je.target;
      Ye && ((xt = Wt.current) != null && xt.contains(Ye) || (ft = ze.current) != null && ft.contains(Ye) || bt(!1));
    }, Oe = (je) => {
      var Ye;
      je.key === "Escape" && (je.preventDefault(), je.stopPropagation(), bt(!1), (Ye = Ft.current) == null || Ye.focus());
    };
    return document.addEventListener("mousedown", re), document.addEventListener("touchstart", re, { passive: !0 }), document.addEventListener("keydown", Oe, !0), () => {
      document.removeEventListener("mousedown", re), document.removeEventListener("touchstart", re), document.removeEventListener("keydown", Oe, !0);
    };
  }, [kt, y]), ge(() => {
    if (Ee.length === 0) {
      se !== 0 && Ve(0);
      return;
    }
    se >= Ee.length && Ve(Ee.length - 1);
  }, [Ee.length, se]);
  const Ht = M && Ee.length > Pm;
  ge(() => {
    if (!kt || Ee.length === 0) return;
    const re = qt.current;
    if (!re) return;
    if (Ht) {
      const ft = se * O, ur = ft + O;
      if (ft < re.scrollTop)
        re.scrollTop = ft, st(ft);
      else if (ur > re.scrollTop + R) {
        const Pr = ur - R;
        re.scrollTop = Pr, st(Pr);
      }
      return;
    }
    const Oe = Ee[se];
    if (!Oe) return;
    const je = mr.current[Oe.keyStr];
    if (!je) return;
    const Ye = je.offsetTop, xt = Ye + je.offsetHeight;
    Ye < re.scrollTop ? re.scrollTop = Ye : xt > re.scrollTop + re.clientHeight && (re.scrollTop = xt - re.clientHeight);
  }, [kt, se, Ht, O, R, Ee]);
  const Lr = () => {
    if (K) return;
    const re = new Set(it.map((je) => String(je))), Oe = Ee.findIndex(
      (je) => !je.node.disabled && re.has(je.keyStr)
    );
    if (Oe >= 0)
      Ve(Oe);
    else {
      const je = Ee.findIndex((Ye) => !Ye.node.disabled);
      Ve(je >= 0 ? je : 0);
    }
    bt(!0);
  }, sa = (re) => {
    var je;
    if (Ee.length === 0) return;
    let Oe = se;
    for (let Ye = 0; Ye < Ee.length; Ye++)
      if (Oe = (Oe + re + Ee.length) % Ee.length, !((je = Ee[Oe]) != null && je.node.disabled)) {
        Ve(Oe);
        return;
      }
  }, Cn = (re) => {
    var Ye, xt;
    if (K) return;
    const Oe = re.target === tr.current;
    if (re.key === "Escape") {
      kt && (re.preventDefault(), re.stopPropagation(), bt(!1), (Ye = Ft.current) == null || Ye.focus());
      return;
    }
    if (re.key === "Tab") {
      kt && bt(!1);
      return;
    }
    if (!kt) {
      if (re.key === "ArrowDown" || re.key === "ArrowUp" || re.key === "Enter" || re.key === " ") {
        re.preventDefault(), Lr();
        return;
      }
      if (re.key === "Backspace" && Je && Nt.length > 0) {
        const ft = Nt[Nt.length - 1];
        ft && !((xt = ft.node) != null && xt.disabled) && (re.preventDefault(), Xe && ft.node ? Xt(ft.node, !1) : ht(it.filter((ur) => String(ur) !== ft.keyStr)));
      }
      return;
    }
    if (re.key === "ArrowDown") {
      re.preventDefault(), sa(1);
      return;
    }
    if (re.key === "ArrowUp") {
      re.preventDefault(), sa(-1);
      return;
    }
    const je = Ee[se];
    if (je) {
      if (re.key === "ArrowRight" && !Oe) {
        re.preventDefault(), je.hasChildren && !je.isExpanded ? Lt(je.node) : je.hasChildren && je.isExpanded && sa(1);
        return;
      }
      if (re.key === "ArrowLeft" && !Oe) {
        if (re.preventDefault(), je.hasChildren && je.isExpanded)
          Lt(je.node);
        else if (je.parentKey !== null) {
          const ft = String(je.parentKey), ur = Ee.findIndex((Pr) => Pr.keyStr === ft);
          ur >= 0 && Ve(ur);
        }
        return;
      }
      (re.key === "Enter" || re.key === " " && !Oe) && (re.preventDefault(), $t(je.node));
    }
  }, oa = w === "responsive" ? 3 : typeof w == "number" && w >= 0 ? w : Number.POSITIVE_INFINITY, ia = Je ? Nt.slice(0, oa) : Nt, Br = Je ? Nt.slice(oa) : [], En = Ee.length * O, la = Ht ? Math.max(0, Math.floor(Qe / O) - ho) : 0, Pa = Ht ? Math.ceil(R / O) + ho * 2 : Ee.length, za = Ht ? Math.min(Ee.length, la + Pa) : Ee.length, ja = Ht ? Ee.slice(la, za) : Ee, _n = [
    de,
    S || j ? Re : void 0
  ].filter(Boolean).join(" ");
  return {
    resolvedSize: ke,
    resolvedMotion: we,
    triggerId: X,
    treeId: te,
    feedbackId: Re,
    isCheckable: Xe,
    isMultiMode: Je,
    isSearchable: rt,
    isClearable: jt,
    isInvalid: Pt,
    resolvedShowToolbar: mt,
    normalized: Fe,
    selectedRawKeys: it,
    checkedKeyStrSet: At,
    halfCheckedKeyStrSet: pt,
    displayTagKeys: lt,
    displayItems: Nt,
    loadedKeyStrSet: nt,
    effectiveKeyword: Rt,
    setInternalKeyword: Ot,
    wrapperRef: Wt,
    triggerRef: Ft,
    popoverRef: ze,
    searchInputRef: tr,
    scrollHostRef: qt,
    rowRefs: mr,
    mergeTriggerRef: vr,
    effectivePortalContainer: W,
    flattenedRows: Ee,
    isRowSelectionBlocked: gt,
    commitExpandedKeys: vt,
    toggleExpandNode: Lt,
    emitValueChange: ht,
    handleToggleCheck: Xt,
    handleSelectRow: $t,
    loadingKeys: Pe,
    activeIndex: se,
    setActiveIndex: Ve,
    open: kt,
    setOpen: bt,
    openMenu: Lr,
    handleKeyDown: Cn,
    effectiveMaxTags: oa,
    visibleTags: ia,
    hiddenTags: Br,
    totalVirtualHeight: En,
    virtualStartIndex: la,
    renderedRows: ja,
    useVirtualWindow: Ht,
    describedByIds: _n,
    actualSide: he,
    floatingStyle: ie,
    isMounted: et,
    isVisible: Et,
    setScrollTop: st,
    wrapperClassName: F,
    label: P,
    required: I,
    name: q,
    restTriggerProps: Ce,
    disabled: K,
    ariaLabel: pe,
    placeholder: z,
    size: V,
    className: oe,
    matchWidth: ye,
    dropdownClassName: G,
    searchValue: y,
    onSearch: T,
    searchPlaceholder: E,
    listHeight: R,
    emptyText: me,
    itemHeight: O,
    error: S,
    helperText: j,
    selectableLeafOnly: v
  };
}
const vi = dt.forwardRef(
  (t, r) => {
    var K;
    const a = jm(t, r), {
      wrapperRef: n,
      wrapperClassName: s,
      label: o,
      triggerId: d,
      required: c,
      name: b,
      isMultiMode: l,
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
      ariaLabel: _,
      placeholder: A,
      resolvedMotion: L,
      handleKeyDown: C,
      setOpen: y,
      openMenu: T,
      size: E,
      resolvedSize: D,
      className: M,
      displayItems: R,
      visibleTags: O,
      isCheckable: P,
      handleToggleCheck: S,
      emitValueChange: B,
      hiddenTags: j,
      isClearable: I,
      error: z,
      feedbackId: H,
      helperText: U
    } = a;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: n,
        "data-slot": "tree-select-wrapper",
        className: x("w-full", s),
        children: [
          o && /* @__PURE__ */ i(
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
              value: l ? u.join(",") : String(m[0] ?? "")
            }
          ),
          /* @__PURE__ */ i(
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
              "aria-label": _ || (typeof o == "string" ? o : A),
              "data-slot": "tree-select-trigger",
              "data-state": v ? "open" : "closed",
              "data-motion": L,
              onKeyDown: C,
              onClick: (ee) => {
                ee.stopPropagation(), !h && (v ? y(!1) : T());
              },
              className: x(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                E === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : x(
                  "w-full px-2.5 py-1",
                  Er,
                  l ? Bm[D] : Lm[D],
                  v && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  g && "border-[var(--abc-danger)]",
                  h && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                M
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: R.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: A }) : l ? /* @__PURE__ */ i(Ke, { children: [
                  O.map((ee) => {
                    var q;
                    return /* @__PURE__ */ i(
                      "span",
                      {
                        "data-testid": "tree-select-tag",
                        className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                        children: [
                          /* @__PURE__ */ e("span", { className: "max-w-32 truncate", children: ee.label }),
                          !h && !((q = ee.node) != null && q.disabled) && /* @__PURE__ */ e(
                            "button",
                            {
                              type: "button",
                              "aria-label": `移除 ${ee.title}`,
                              onClick: (V) => {
                                V.stopPropagation(), P && ee.node ? S(ee.node, !1) : B(
                                  m.filter((Z) => String(Z) !== ee.keyStr)
                                );
                              },
                              className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                              children: /* @__PURE__ */ e(Ct, { className: "h-2.5 w-2.5", "aria-hidden": "true" })
                            }
                          )
                        ]
                      },
                      ee.keyStr
                    );
                  }),
                  j.length > 0 && /* @__PURE__ */ i(
                    "span",
                    {
                      "data-testid": "tree-select-max-tag",
                      title: j.map((ee) => ee.title).join("、"),
                      className: "inline-flex items-center rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)]",
                      children: [
                        "+",
                        j.length
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (K = R[0]) == null ? void 0 : K.label }) }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  I && R.length > 0 && !h && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "tree-select-clear",
                      "aria-label": "清空",
                      onClick: (ee) => {
                        ee.stopPropagation(), B(l ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    er,
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
          /* @__PURE__ */ e(zm, { state: a }),
          z && /* @__PURE__ */ e("p", { id: H, className: "mt-1 text-xs text-[var(--abc-danger)]", children: z }),
          U && !z && /* @__PURE__ */ e("p", { id: H, className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: U })
        ]
      }
    );
  }
);
vi.displayName = "TreeSelect";
const Ra = Object.assign(vi, {
  SHOW_ALL: "SHOW_ALL",
  SHOW_PARENT: "SHOW_PARENT",
  SHOW_CHILD: "SHOW_CHILD"
});
function kh({
  triggerClassName: t,
  contentClassName: r,
  ...a
}) {
  return /* @__PURE__ */ e(
    Ra,
    {
      ...a,
      className: t,
      dropdownClassName: r
    }
  );
}
const xi = ["日", "一", "二", "三", "四", "五", "六"], yi = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
};
function Fn(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const Da = dt.forwardRef(
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
    id: l,
    name: u,
    minDate: m,
    maxDate: p,
    size: f,
    motion: h,
    className: v
  }, w) => {
    const k = Be(f, "sm"), g = Me(h), N = It(), _ = l || N, A = be(null), L = be(null);
    bn(w, () => A.current, []);
    const C = t !== void 0, [y, T] = $(r), E = C ? t ?? "" : y, [D, M] = $(!1), [R, O] = $({ top: 0, left: 0 }), [P, S] = $(
      () => E && We(E).isValid() ? We(E) : We()
    ), j = !!((s ?? o ?? !0) && E && !d);
    ge(() => {
      D && S(
        E && We(E).isValid() ? We(E) : We()
      );
    }, [D, E]);
    const I = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      { label: "今天", value: () => We().format(c) },
      { label: "昨天", value: () => We().subtract(1, "day").format(c) },
      { label: "明天", value: () => We().add(1, "day").format(c) },
      { label: "一周前", value: () => We().subtract(7, "day").format(c) }
    ], [b, c]);
    ge(() => {
      if (!D) return;
      const K = () => {
        if (!A.current || typeof window > "u") return;
        const ee = A.current.getBoundingClientRect(), q = I.length > 0 ? 340 : 300, V = 280, oe = window.innerHeight - ee.bottom < q && ee.top > q ? ee.top - q - 4 : ee.bottom + 4;
        let F = ee.left;
        F + V > window.innerWidth - 8 && (F = Math.max(8, window.innerWidth - V - 8)), O({ top: Math.max(8, oe), left: Math.max(8, F) });
      };
      return K(), window.addEventListener("resize", K), window.addEventListener("scroll", K, !0), () => {
        window.removeEventListener("resize", K), window.removeEventListener("scroll", K, !0);
      };
    }, [D, I.length]), ge(() => {
      if (!D) return;
      const K = (q) => {
        var Z, oe;
        const V = q.target;
        (Z = A.current) != null && Z.contains(V) || (oe = L.current) != null && oe.contains(V) || M(!1);
      }, ee = (q) => {
        q.key === "Escape" && (q.preventDefault(), q.stopPropagation(), M(!1));
      };
      return document.addEventListener("mousedown", K), document.addEventListener("keydown", ee, !0), () => {
        document.removeEventListener("mousedown", K), document.removeEventListener("keydown", ee, !0);
      };
    }, [D]);
    const z = (K) => {
      C || T(K), a == null || a(K);
    }, H = ce(
      () => Vn(P.year(), P.month()),
      [P]
    ), U = ce(() => {
      if (!E) return "";
      const K = We(E);
      return K.isValid() ? K.format("YYYY-MM-DD") : E;
    }, [E]);
    return /* @__PURE__ */ i(Ke, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: A,
          id: _,
          "data-datepicker-trigger": "",
          "data-motion": g,
          role: "combobox",
          "aria-expanded": D,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && M((K) => !K),
          onKeyDown: (K) => {
            !d && (K.key === "Enter" || K.key === " ") && (K.preventDefault(), M((ee) => !ee));
          },
          className: x(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            Er,
            yi[k],
            D && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            v
          ),
          children: [
            /* @__PURE__ */ e(bs, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
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
            j && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (K) => {
                  K.stopPropagation(), z("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      D && typeof document < "u" && cr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: L,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": g,
            "aria-label": "日期选择面板",
            style: { top: R.top, left: R.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              I.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: I.map((K) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const ee = typeof K.value == "function" ? K.value() : K.value;
                    z(ee), M(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: K.label
                },
                K.label
              )) }),
              /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => S((K) => K.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Go, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => S((K) => K.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ja, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: P.format("YYYY 年 M 月") }),
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => S((K) => K.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(nr, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => S((K) => K.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Yo, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: xi.map((K) => /* @__PURE__ */ e("span", { className: "py-1", children: K }, K)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: H.map((K) => {
                const ee = We(K.iso), q = c === "YYYY-MM-DD" ? K.iso : ee.format(c), V = K.iso === U, Z = !!(m && ee.isBefore(We(m), "day") || p && ee.isAfter(We(p), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": q,
                    disabled: Z,
                    onClick: () => {
                      Z || (z(q), M(!1));
                    },
                    className: x(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      V ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : K.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      K.isToday && !V && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: K.day
                  },
                  K.iso
                );
              }) })
            ]
          }
        ),
        xn(A.current) ?? document.body
      )
    ] });
  }
);
Da.displayName = "DatePicker";
const La = dt.forwardRef(
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
    id: l,
    minDate: u,
    maxDate: m,
    size: p,
    motion: f,
    className: h
  }, v) => {
    const w = Be(p, "sm"), k = Me(f), g = It(), N = l || g, _ = be(null), A = be(null);
    bn(v, () => _.current, []);
    const L = Array.isArray(t) || t === void 0 && Array.isArray(r), C = t !== void 0, [y, T] = $(
      () => Fn(r)
    ), E = C ? Fn(t) : y, [D, M] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [R, O] = $(!1), [P, S] = $({ top: 0, left: 0 }), [B, j] = $(null), [I, z] = $(null), [H, U] = $(
      () => E.start && We(E.start).isValid() ? We(E.start) : We()
    ), K = ce(() => H.add(1, "month"), [H]), q = !!((s ?? o ?? !0) && (E.start || E.end) && !d);
    ge(() => {
      R ? (j(null), z(null), U(
        E.start && We(E.start).isValid() ? We(E.start) : We()
      )) : (j(null), z(null));
    }, [R, E.start]);
    const V = ce(() => b === !1 ? [] : Array.isArray(b) ? b : [
      {
        label: "今天",
        getValue: () => {
          const ne = We().format(c);
          return { start: ne, end: ne };
        }
      },
      {
        label: "近 7 天",
        getValue: () => ({
          start: We().subtract(6, "day").format(c),
          end: We().format(c)
        })
      },
      {
        label: "近 30 天",
        getValue: () => ({
          start: We().subtract(29, "day").format(c),
          end: We().format(c)
        })
      },
      {
        label: "本月",
        getValue: () => ({
          start: We().startOf("month").format(c),
          end: We().format(c)
        })
      }
    ], [b, c]);
    ge(() => {
      if (!R) return;
      const ne = () => {
        if (!_.current || typeof window > "u") return;
        const me = _.current.getBoundingClientRect(), pe = V.length > 0 ? 370 : 330, de = 556, ke = window.innerHeight - me.bottom < pe && me.top > pe ? me.top - pe - 4 : me.bottom + 4;
        let we = me.left;
        we + de > window.innerWidth - 8 && (we = Math.max(8, window.innerWidth - de - 8)), S({ top: Math.max(8, ke), left: Math.max(8, we) });
      };
      return ne(), window.addEventListener("resize", ne), window.addEventListener("scroll", ne, !0), () => {
        window.removeEventListener("resize", ne), window.removeEventListener("scroll", ne, !0);
      };
    }, [R, V.length]), ge(() => {
      if (!R) return;
      const ne = (pe) => {
        var Ce, ke;
        const de = pe.target;
        (Ce = _.current) != null && Ce.contains(de) || (ke = A.current) != null && ke.contains(de) || O(!1);
      }, me = (pe) => {
        pe.key === "Escape" && (pe.preventDefault(), pe.stopPropagation(), O(!1));
      };
      return document.addEventListener("mousedown", ne), document.addEventListener("keydown", me, !0), () => {
        document.removeEventListener("mousedown", ne), document.removeEventListener("keydown", me, !0);
      };
    }, [R]);
    const Z = (ne) => {
      C || T(ne), L ? a == null || a([ne.start, ne.end]) : a == null || a(ne);
    }, oe = ce(() => {
      if (B) {
        const ne = We(B);
        if (!I) return { start: ne, end: null };
        const me = We(I);
        return me.isBefore(ne, "day") ? { start: me, end: ne } : { start: ne, end: me };
      }
      return {
        start: E.start && We(E.start).isValid() ? We(E.start) : null,
        end: E.end && We(E.end).isValid() ? We(E.end) : null
      };
    }, [B, I, E]), F = ce(
      () => Vn(H.year(), H.month()),
      [H]
    ), G = ce(
      () => Vn(K.year(), K.month()),
      [K]
    ), ye = (ne) => {
      const me = We(ne), pe = c === "YYYY-MM-DD" ? ne : me.format(c);
      if (!B) {
        j(pe), z(null);
        return;
      }
      const de = We(B), [Ce, ke] = me.isBefore(de, "day") ? [me, de] : [de, me];
      Z({ start: Ce.format(c), end: ke.format(c) }), j(null), z(null), O(!1);
    }, Ie = (ne, me, pe) => /* @__PURE__ */ i("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
        pe === "left" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => U((de) => de.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Go, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => U((de) => de.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Ja, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: ne.format("YYYY 年 M 月") }),
        pe === "right" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一月",
              onClick: () => U((de) => de.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(nr, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => U((de) => de.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Yo, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: xi.map((de) => /* @__PURE__ */ e("span", { className: "py-1", children: de }, de)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: me.map((de) => {
        const Ce = We(de.iso), ke = c === "YYYY-MM-DD" ? de.iso : Ce.format(c), we = !!(oe.start && Ce.isSame(oe.start, "day")), Se = !!(oe.end && Ce.isSame(oe.end, "day")), X = !!(oe.start && oe.end && Ce.isAfter(oe.start, "day") && Ce.isBefore(oe.end, "day")), te = !!(u && Ce.isBefore(We(u), "day") || m && Ce.isAfter(We(m), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": ke,
            disabled: te,
            onMouseEnter: () => B && z(ke),
            onClick: () => !te && ye(de.iso),
            className: x(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              we || Se ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : X ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : de.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              de.isToday && !we && !Se && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: de.day
          },
          `${pe}-${de.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ i(Ke, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: _,
          id: N,
          "data-daterangepicker-trigger": "",
          "data-motion": k,
          role: "combobox",
          "aria-expanded": R,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && O((ne) => !ne),
          onKeyDown: (ne) => {
            !d && (ne.key === "Enter" || ne.key === " ") && (ne.preventDefault(), O((me) => !me));
          },
          className: x(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            Er,
            yi[w],
            R && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            h
          ),
          children: [
            /* @__PURE__ */ e(bs, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: D,
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
                placeholder: M,
                value: E.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            q && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (ne) => {
                  ne.stopPropagation(), Z({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      R && typeof document < "u" && cr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: A,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": k,
            "aria-label": "日期范围选择面板",
            style: { top: P.top, left: P.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              V.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: V.map((ne) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const me = ne.getValue(), pe = Fn(me);
                    Z(pe), j(null), z(null), O(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: ne.label
                },
                ne.label
              )) }),
              /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: Ie(H, F, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: Ie(K, G, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: B ? `已选起始日：${B}，请继续点击截止日期` : E.start && E.end ? `已选区间：${E.start} 至 ${E.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        xn(_.current) ?? document.body
      )
    ] });
  }
);
La.displayName = "DateRangePicker";
const Fm = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, Om = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function $m(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function Hm(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const wi = ({
  value: t = "",
  onChange: r,
  label: a,
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
  const f = Be(l, "sm"), h = Me(u), v = It(), w = be(null), { uploadAdapter: k, toast: g } = Mt(), [N, _] = $(!1), [A, L] = $(!1), [C, y] = $(!1), T = async (M) => {
    if (!M || c || N) return;
    if (!(M.type.startsWith("image/") || M.name.toLowerCase().endsWith(".svg"))) {
      g.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (M.size >= d * 1024 * 1024) {
      g.error(`上传图片大小不能超过 ${d}MB`);
      return;
    }
    _(!0);
    try {
      const P = await (b ?? k ?? Hm)(M);
      P ? (r == null || r(P), g.success("上传成功")) : g.error("上传失败，未获取到图片地址");
    } catch (O) {
      g.error((O == null ? void 0 : O.message) || "上传图片失败，请重试");
    } finally {
      _(!1), w.current && (w.current.value = "");
    }
  }, E = (t == null ? void 0 : t.trim()) ?? "", D = $m(E);
  return /* @__PURE__ */ i("div", { "data-motion": h, className: "w-full", children: [
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
        onChange: (M) => {
          var R;
          return T((R = M.target.files) == null ? void 0 : R[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        onClick: () => {
          var M;
          !E && !c && !N && ((M = w.current) == null || M.click());
        },
        onDragOver: (M) => {
          M.preventDefault(), M.stopPropagation(), !c && !N && L(!0);
        },
        onDragLeave: (M) => {
          M.preventDefault(), M.stopPropagation(), L(!1);
        },
        onDrop: (M) => {
          var R;
          M.preventDefault(), M.stopPropagation(), L(!1), !c && !N && T((R = M.dataTransfer.files) == null ? void 0 : R[0]);
        },
        className: x(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          A ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !c && !A && "hover:border-[var(--abc-primary)]",
          !E && !c && "cursor-pointer",
          c && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          Fm[f],
          p
        ),
        children: [
          E ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: x(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  Om[f]
                ),
                children: [
                  D ? /* @__PURE__ */ e(
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
                      onClick: (M) => {
                        M.stopPropagation(), y(!0);
                      },
                      className: "absolute inset-0 flex items-center justify-center bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
                      children: /* @__PURE__ */ e(Qr, { className: "h-4 w-4" })
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
                    disabled: N,
                    onClick: (M) => {
                      var R;
                      M.stopPropagation(), (R = w.current) == null || R.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(jr, { className: x("h-3 w-3", N && "animate-spin") }),
                      /* @__PURE__ */ e("span", { children: "更换图片" })
                    ]
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: N,
                    onClick: (M) => {
                      M.stopPropagation(), r == null || r("");
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-danger)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(kr, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "删除" })
                    ]
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-2 text-center select-none", children: [
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Vd, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: m }),
            /* @__PURE__ */ i("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              d,
              "MB"
            ] })
          ] }),
          N && /* @__PURE__ */ i("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(or, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
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
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: D ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: E }
          }
        ) : /* @__PURE__ */ e("img", { src: E, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, Km = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, Sh = ({
  treeData: t,
  checkable: r = !1,
  checkStrictly: a = !1,
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
  renderExtra: h,
  className: v
}) => {
  const w = Be(p, "sm"), k = Me(f), [g, N] = $(""), [_, A] = $(
    () => b ? new Set(Gr(t)) : /* @__PURE__ */ new Set()
  ), [L, C] = $(s), [y, T] = $([]);
  ge(() => {
    b && t.length > 0 && _.size === 0 && A(new Set(Gr(t)));
  }, [t, b]);
  const E = n !== void 0 ? n : L, D = d !== void 0 ? d : y, { checkedKeys: M, halfCheckedKeys: R } = ce(
    () => ps(t, E, a),
    [t, E, a]
  ), O = ce(() => new Set(M), [M]), P = ce(() => new Set(R), [R]), { filteredNodes: S, autoExpandedKeys: B } = ce(
    () => hu(t, g),
    [t, g]
  ), j = ce(() => g.trim() ? /* @__PURE__ */ new Set([..._, ...B]) : _, [_, B, g]), I = (K) => {
    A((ee) => {
      const q = new Set(ee);
      return q.has(K) ? q.delete(K) : q.add(K), q;
    });
  }, z = (K, ee) => {
    const q = ei(t, M, K, ee, a);
    n === void 0 && C(q.checkedKeys), o == null || o(q.checkedKeys, {
      halfCheckedKeys: q.halfCheckedKeys,
      node: K,
      checked: ee
    });
  }, H = (K) => {
    if (K.disabled) return;
    const ee = [K.key];
    d === void 0 && T(ee), c == null || c(ee, K);
  }, U = (K, ee = 0) => /* @__PURE__ */ e("ul", { role: ee === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: K.map((q) => {
    const V = !!(q.children && q.children.length > 0), Z = j.has(q.key), oe = O.has(q.key), F = P.has(q.key), G = D.includes(q.key);
    return /* @__PURE__ */ i("li", { role: "treeitem", "aria-expanded": V ? Z : void 0, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { paddingInlineStart: `${ee * 18 + 6}px` },
          className: x(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            Km[w],
            G ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            q.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              V ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": Z ? `收起 ${q.title}` : `展开 ${q.title}`,
                  onClick: () => I(q.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    nr,
                    {
                      className: x(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        Z && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                aa,
                {
                  size: w,
                  motion: k,
                  checked: oe,
                  indeterminate: F,
                  disabled: q.disabled,
                  onChange: (ye) => z(q, ye)
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  disabled: q.disabled,
                  onClick: () => {
                    r && !c ? z(q, !oe) : H(q);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    q.icon && /* @__PURE__ */ e(hr, { name: q.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: q.title })
                  ]
                }
              )
            ] }),
            h && /* @__PURE__ */ e("div", { className: "shrink-0", children: h(q) })
          ]
        }
      ),
      V && Z && U(q.children, ee + 1)
    ] }, q.key);
  }) });
  return /* @__PURE__ */ i("div", { "data-motion": k, className: x("space-y-2", v), children: [
    (l || m) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
      l && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        yt,
        {
          size: w,
          motion: k,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5" }),
          placeholder: u,
          value: g,
          onChange: (K) => N(K.target.value)
        }
      ) }),
      m && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => A(new Set(Gr(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Ud, { className: "h-3 w-3" }),
              "全部展开"
            ]
          }
        ),
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => A(/* @__PURE__ */ new Set()),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Gd, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: S.length > 0 ? U(S) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, Wm = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, Vm = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, Um = ({
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
  const l = Be(d, "sm"), u = Me(c), [m, p] = $(r), [f, h] = $(""), v = t !== void 0 ? t : m, w = (N) => {
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
    o || w(v.filter((_, A) => A !== N));
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": u,
      className: x(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        Wm[l],
        Er,
        o && "opacity-65 cursor-not-allowed",
        b
      ),
      children: [
        v.map((N, _) => /* @__PURE__ */ i(
          "span",
          {
            className: x(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              Vm[l]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: N }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${N}`,
                  onClick: () => g(_),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${N}_${_}`
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
function vo(t, r) {
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
const Gm = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, Ch = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: d
}) => {
  const c = Be(a, "md"), b = Me(n), { captchaAdapter: l } = Mt(), u = d ?? l, [m, p] = $(null), [f, h] = $(!0), [v, w] = $(!1), [k, g] = $(!1), [N, _] = $(0), [A, L] = $(0), C = be(!1), y = be(0), T = be(0), E = fe(async () => {
    h(!0), w(!1), g(!1), _(0), L(0);
    try {
      if (u) {
        const O = await u();
        p(O);
      } else
        p(vo(t, r));
    } catch {
      p(vo(t, r));
    } finally {
      h(!1);
    }
  }, [u, t, r]);
  ge(() => {
    E();
  }, [E]);
  const D = (O) => {
    f || v || (C.current = !0, y.current = O, T.current = Date.now());
  }, M = fe(
    (O) => {
      if (!C.current || f || v) return;
      const P = O - y.current, S = t - 40, B = Math.max(0, Math.min(S, P));
      _(B), L((t - 60) / S * B);
    },
    [t, f, v]
  ), R = fe(() => {
    if (!C.current || f || v) return;
    if (C.current = !1, Date.now() - T.current > 1e4 || !m) {
      g(!0), o == null || o(), setTimeout(E, 600);
      return;
    }
    const P = Math.round(A);
    if (typeof m.targetX == "number" && Math.abs(P - m.targetX) > 10) {
      g(!0), o == null || o(), setTimeout(E, 550);
      return;
    }
    w(!0), s({
      nonceStr: m.nonceStr,
      value: P
    });
  }, [A, m, f, v, o, s, E]);
  return ge(() => {
    const O = (j) => M(j.clientX), P = () => R(), S = (j) => {
      j.touches[0] && M(j.touches[0].clientX);
    }, B = () => R();
    return window.addEventListener("mousemove", O), window.addEventListener("mouseup", P), window.addEventListener("touchmove", S), window.addEventListener("touchend", B), () => {
      window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", P), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", B);
    };
  }, [M, R]), /* @__PURE__ */ i("div", { "data-motion": b, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          f ? /* @__PURE__ */ i("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : m && /* @__PURE__ */ i(Ke, { children: [
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
                style: { top: m.blockY, left: A }
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
              children: /* @__PURE__ */ e(pn, { className: x("h-3.5 w-3.5", f && "animate-spin") })
            }
          ),
          v && /* @__PURE__ */ i("div", { className: "absolute inset-0 flex items-center justify-center gap-2 bg-[var(--abc-success)]/90 text-sm font-medium text-white backdrop-blur-xs abc-animate-fade-in", children: [
            /* @__PURE__ */ e(Sr, { className: "h-5 w-5" }),
            /* @__PURE__ */ e("span", { children: "验证通过" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: x(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          Gm[c],
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
              onMouseDown: (O) => D(O.clientX),
              onTouchStart: (O) => {
                O.touches[0] && D(O.touches[0].clientX);
              },
              className: x(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                v ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: N },
              children: v ? /* @__PURE__ */ e(Sr, { className: "h-4 w-4" }) : /* @__PURE__ */ e(qo, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}, cn = ["B", "KB", "MB", "GB", "TB"], dn = ["s", "m", "h", "d"], Ni = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
}, ki = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400
}, Ym = ["TB", "GB", "MB", "KB", "B"], qm = ["h", "m", "d", "s"];
function un(t, r = 2) {
  return Number.isFinite(t) ? t.toFixed(r).replace(/\.?0+$/, "") : "0";
}
function Si(t, r) {
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
function Ci(t, r, a, n, s, o, d) {
  const c = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (c === 0)
    return { unit: n.includes(r) ? r : n[n.length - 1], amount: "0" };
  for (const l of s) {
    if (!n.includes(l)) continue;
    const u = o[l];
    if (c >= u && c % u === 0)
      return { unit: l, amount: String(c / u) };
  }
  const b = n.includes(a) ? a : n[0];
  return {
    unit: b,
    amount: un(c / o[b], d)
  };
}
function Ei(t, r = "GB", a = cn) {
  const n = a.length > 0 ? a : cn;
  return Ci(t, r, "B", n, Ym, Ni, 4);
}
function _i(t, r = "h", a = dn) {
  const n = a.length > 0 ? a : dn;
  return Ci(
    t,
    r,
    "s",
    n,
    qm,
    ki,
    2
  );
}
function Eh(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = Ei(n);
  return `${o} ${s}`;
}
function _h(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = _i(n);
  return `${o} ${Si(s, r)}`;
}
function Xm(t, r, a) {
  let n = Math.max(r, Math.round(t));
  return typeof a == "number" && Number.isFinite(a) && (n = Math.min(a, n)), n;
}
function Ti({
  id: t,
  fallbackIdSuffix: r,
  value: a,
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
  formatUnitLabel: h,
  buildHintText: v,
  "aria-label": w,
  "aria-describedby": k,
  placeholder: g
}) {
  const N = Ne.useId(), _ = t ?? `${N}-${r}`, A = `${_}-hint`, L = Number.isFinite(a) && a >= 0 ? Math.round(a) : 0, C = Ne.useMemo(
    () => f(L),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [y, T] = Ne.useState(C.unit), [E, D] = Ne.useState(C.amount), M = Ne.useRef(L);
  Ne.useEffect(() => {
    if (L === M.current) return;
    M.current = L;
    const j = f(L);
    T(j.unit), D(j.amount);
  }, [L, f]);
  const R = m[y], O = (j) => {
    const I = j.target.value;
    if (I !== "" && !/^\d*\.?\d*$/.test(I) || (D(I), I.trim() === "")) return;
    const z = Number(I);
    if (!Number.isFinite(z) || z < 0) return;
    const H = Xm(z * R, s, o);
    M.current = H, n(H);
  }, P = (j) => {
    const I = j.target.value;
    if (!p.includes(I)) return;
    T(I);
    const z = m[I];
    D(L === 0 ? "0" : un(L / z, 2));
  }, S = () => {
    (E.trim() === "" || !Number.isFinite(Number(E)) || Number(E) < 0) && D(L === 0 ? "0" : un(L / R, 2));
  }, B = [k, b ? void 0 : A].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ i("div", { className: x("space-y-1", l), children: [
    /* @__PURE__ */ i(
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
              id: _,
              type: "number",
              step: R === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: c,
              value: E,
              "aria-label": w,
              "aria-describedby": B,
              placeholder: g,
              onChange: O,
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
          /* @__PURE__ */ i("div", { className: "relative flex items-center shrink-0", children: [
            /* @__PURE__ */ e(
              "select",
              {
                "aria-label": u,
                disabled: c,
                value: y,
                onChange: P,
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
                children: p.map((j) => /* @__PURE__ */ e("option", { value: j, className: "bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]", children: h(j) }, j))
              }
            ),
            /* @__PURE__ */ e(er, { className: "pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" })
          ] })
        ]
      }
    ),
    !b && /* @__PURE__ */ e("div", { id: A, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: v(L, y) }) })
  ] });
}
function Th({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "GB",
  allowedUnits: n = cn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : cn, c = Ne.useCallback(
    (u) => Ei(u, a, d),
    [a, d]
  ), b = Ne.useCallback((u) => u, []), l = Ne.useCallback(
    (u) => u === 0 && r ? t === "zh" ? "= 0 (无上限)" : "= 0 (Unlimited)" : `= ${u.toLocaleString()} Bytes`,
    [t, r]
  );
  return /* @__PURE__ */ e(
    Ti,
    {
      ...o,
      fallbackIdSuffix: "bytes",
      factors: Ni,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "字节单位" : "Byte unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: l
    }
  );
}
function Ih({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "h",
  allowedUnits: n = dn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : dn, c = Ne.useCallback(
    (u) => _i(u, a, d),
    [a, d]
  ), b = Ne.useCallback(
    (u) => Si(u, t),
    [t]
  ), l = Ne.useCallback(
    (u, m) => {
      if (u === 0 && r)
        return t === "zh" ? "= 0 秒 (无上限)" : "= 0s (Unlimited)";
      if (m === "s") {
        const p = un(u / 3600, 2);
        return t === "zh" ? `≈ ${p} 小时 (${u.toLocaleString()} 秒)` : `≈ ${p} hr (${u.toLocaleString()}s)`;
      }
      return `= ${u.toLocaleString()} ${t === "zh" ? "秒" : "Seconds"}`;
    },
    [t, r]
  );
  return /* @__PURE__ */ e(
    Ti,
    {
      ...o,
      fallbackIdSuffix: "duration",
      factors: ki,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: c,
      formatUnitLabel: b,
      buildHintText: l
    }
  );
}
function Mh({
  items: t,
  activeKey: r,
  value: a,
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
  var _;
  const p = Be(d, "md"), f = Me(c), h = It(), [v, w] = lr({
    value: r ?? a,
    defaultValue: n ?? ((_ = t[0]) == null ? void 0 : _.key) ?? "",
    onChange: s
  }), k = (A, L) => {
    const C = t.filter((T) => !T.disabled);
    if (C.length === 0) return;
    const y = C.findIndex((T) => {
      var E;
      return T.key === ((E = t[L]) == null ? void 0 : E.key);
    });
    if (A.key === "ArrowRight") {
      A.preventDefault();
      const T = C[(y + 1) % C.length];
      T && w(T.key);
    } else if (A.key === "ArrowLeft") {
      A.preventDefault();
      const T = C[(y - 1 + C.length) % C.length];
      T && w(T.key);
    }
  }, g = t.some((A) => A.children !== void 0), N = p === "xs" ? "px-2.5 py-1 text-[11px]" : p === "sm" ? "px-3 py-1.5 text-xs" : p === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ i("div", { "data-motion": f, className: x("w-full", u), children: [
    /* @__PURE__ */ i(
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
              children: t.map((A, L) => {
                const C = A.key === v, y = `${h}-tab-${A.key}`;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    id: y,
                    type: "button",
                    role: "tab",
                    "aria-selected": C,
                    tabIndex: C ? 0 : -1,
                    disabled: A.disabled,
                    onClick: () => !A.disabled && w(A.key),
                    onKeyDown: (T) => k(T, L),
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
                      A.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: A.icon }),
                      /* @__PURE__ */ e("span", { children: A.label }),
                      A.badge !== void 0 && (typeof A.badge == "number" || typeof A.badge == "string" ? /* @__PURE__ */ e("span", { className: "rounded-full bg-[var(--abc-bg-subtle)] px-1.5 py-0.2 font-mono text-[10px] tabular-nums", children: A.badge }) : A.badge)
                    ]
                  },
                  A.key
                );
              })
            }
          ),
          l && /* @__PURE__ */ e("div", { className: "shrink-0", children: l })
        ]
      }
    ),
    g && /* @__PURE__ */ e("div", { children: t.map((A) => {
      const L = A.key === v, C = `${h}-tab-${A.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": C,
          tabIndex: L ? 0 : void 0,
          ...L ? {} : { hidden: "until-found" },
          children: L && /* @__PURE__ */ e("div", { className: x("pt-4", f !== "none" && "abc-animate-fade-in", m), children: A.children })
        },
        A.key
      );
    }) })
  ] });
}
const xo = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function Ii(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const Ba = ({
  src: t,
  alt: r = "图片预览",
  size: a,
  motion: n,
  width: s,
  height: o,
  rounded: d = !1,
  fit: c = "contain",
  placeholder: b,
  className: l,
  zoomable: u = !0
}) => {
  const m = Be(a, "sm"), p = Me(n), f = s ?? xo[m], h = o ?? xo[m], [v, w] = $(!1), [k, g] = $(!1), [N, _] = $(1), [A, L] = $(0), C = typeof t == "string" ? t.trim() : "", y = Ii(C), T = ce(() => C ? y && C.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(C)}` : C : "", [C, y]);
  if (ge(() => {
    w(!1);
  }, [C]), !C || v)
    return b ? /* @__PURE__ */ e(Ke, { children: b }) : /* @__PURE__ */ e(
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
          l
        ),
        children: v ? /* @__PURE__ */ e(Rr, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Oo, { className: "h-4 w-4" })
      }
    );
  const E = (D) => {
    D.stopPropagation(), u && (_(1), L(0), g(!0));
  };
  return /* @__PURE__ */ i(Ke, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        "data-motion": p,
        title: "点击预览大图 / 矢量图",
        "aria-label": u ? `预览 ${r}` : void 0,
        onClick: E,
        onKeyDown: (D) => {
          u && (D.key === "Enter" || D.key === " ") && (D.preventDefault(), E(D));
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
          l
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: T,
              alt: r,
              onError: () => w(!0),
              className: x(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                y || c === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          u && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e(Qr, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ i(
      dr,
      {
        open: k,
        onClose: () => g(!1),
        title: r,
        size: "lg",
        motion: p,
        footer: /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => _((D) => Math.max(0.4, Number((D - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Yd, { className: "h-3.5 w-3.5" }),
                " 缩小"
              ]
            }
          ),
          /* @__PURE__ */ i("span", { className: "min-w-14 text-center font-mono text-xs tabular-nums text-[var(--abc-fg-muted)]", children: [
            Math.round(N * 100),
            "%"
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => _((D) => Math.min(3, Number((D + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(qd, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => L((D) => (D + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(pn, { className: "h-3.5 w-3.5" }),
                " 旋转"
              ]
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ e("div", { className: "flex min-h-72 flex-col items-center justify-center overflow-auto rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-6", children: /* @__PURE__ */ e(
            "div",
            {
              style: { transform: `scale(${N}) rotate(${A}deg)` },
              className: "transition-transform duration-150",
              children: /* @__PURE__ */ e("img", { src: T, alt: r, className: "max-h-96 max-w-full object-contain" })
            }
          ) }),
          /* @__PURE__ */ e("p", { className: "mt-2.5 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "按 ESC 或点击背景任意处关闭大图预览" })
        ]
      }
    )
  ] });
}, Ah = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const b = Be(o, "sm"), l = Me(d), u = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", p = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[b];
  return /* @__PURE__ */ i("div", { "data-motion": l, className: x("space-y-2.5", c), children: [
    (t || r) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
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
          return s ? /* @__PURE__ */ i(
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
          ) : /* @__PURE__ */ i("div", { className: x("min-w-0 space-y-0.5", v), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: f.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: f.children ?? "-" })
          ] }, f.key ?? h);
        })
      }
    )
  ] });
}, Zm = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Jm = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, Rh = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: d,
  className: c
}) => {
  const b = It(), l = Be(o, "sm"), u = Me(d), [m, p] = $(a), f = n !== void 0 ? n : m, h = (v, w) => {
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
        return /* @__PURE__ */ i(
          "details",
          {
            name: r ? b : void 0,
            open: w,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ i(
                "summary",
                {
                  "aria-disabled": v.disabled || void 0,
                  onClick: (k) => {
                    k.preventDefault(), !v.disabled && h(v.key, !w);
                  },
                  className: x(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    Zm[l],
                    v.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        er,
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
                    Jm[l]
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
}, Qm = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, Dh = ({ items: t, size: r, motion: a, className: n }) => {
  const s = Be(r, "sm"), o = Me(a), d = {
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
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: x("m-0 list-none space-y-0 p-0", n), children: t.map((l, u) => {
    const m = u === t.length - 1, p = l.tone ?? "primary";
    return /* @__PURE__ */ i("li", { className: x("relative flex", d[s]), children: [
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
          className: x(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            Qm[p]
          )
        }
      ) }),
      /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: x("font-medium text-[var(--abc-fg)]", c[s]), children: l.title }),
          l.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: l.time })
        ] }),
        l.description && /* @__PURE__ */ e("div", { className: x("leading-relaxed text-[var(--abc-fg-muted)]", b[s]), children: l.description })
      ] })
    ] }, l.key ?? u);
  }) });
}, Mi = Ne.forwardRef(
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
    const [l, u] = Ne.useState(!1), m = async (p) => {
      if (p.stopPropagation(), !t) return;
      await wn(t) && (u(!0), setTimeout(() => u(!1), 1600));
    };
    return /* @__PURE__ */ i(
      "span",
      {
        ref: b,
        "data-slot": "copyable-code",
        "data-copied": l ? "true" : void 0,
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
              "aria-label": l ? n : `${a}: ${t}`,
              title: l ? n : a,
              className: x(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                l && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: l ? /* @__PURE__ */ e(St, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(Fr, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
Mi.displayName = "CopyableCode";
const ef = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
  full: "col-span-full"
}, As = Ne.forwardRef(
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
    ...l
  }, u) => {
    const m = a ?? r;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: u,
        "data-slot": "description-item",
        className: x(
          "min-w-0",
          d === "cards" && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]",
          d === "divided" && "border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0",
          ef[o],
          c
        ),
        ...l,
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
                Mi,
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
As.displayName = "DescriptionItem";
const Lh = As, tf = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, Ai = Ne.forwardRef(
  ({ columns: t = 2, variant: r = "default", density: a, bordered: n = !1, items: s, children: o, className: d, ...c }, b) => {
    const l = a === "compact" && r === "default" ? "compact" : r;
    return /* @__PURE__ */ e(
      "dl",
      {
        ref: b,
        "data-slot": "description-list",
        className: x(
          "grid",
          l === "compact" ? "gap-2.5" : "gap-3.5",
          n && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3",
          tf[t],
          d
        ),
        ...c,
        children: s ? s.map((u, m) => /* @__PURE__ */ e(
          As,
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
Ai.displayName = "DescriptionList";
const rf = ({
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
  const l = (t ?? r ?? "").toLowerCase().trim(), u = l && a ? a[l] : void 0, m = s ? "mask" : n ? "image" : (u == null ? void 0 : u.mode) ?? (u != null && u.src ? "image" : void 0), p = s ?? n ?? (u == null ? void 0 : u.src), f = d ?? (u == null ? void 0 : u.alt) ?? (l || "Brand"), h = o ?? (u == null ? void 0 : u.maskClassName) ?? "bg-[var(--abc-primary)]", [v, w] = $(!1);
  return ge(() => {
    w(!1);
  }, [l, p]), m === "mask" && p ? /* @__PURE__ */ e(
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
  ) : m === "image" && p ? v ? u != null && u.fallbackIcon ? /* @__PURE__ */ e(Ke, { children: u.fallbackIcon }) : c ? /* @__PURE__ */ e(Ke, { children: c }) : /* @__PURE__ */ e(ds, { className: x("shrink-0 text-[var(--abc-primary)]", b) }) : /* @__PURE__ */ e(
    "img",
    {
      src: p,
      alt: f,
      className: x("shrink-0 object-contain", b),
      onError: () => w(!0),
      loading: "lazy"
    }
  ) : c ? /* @__PURE__ */ e(Ke, { children: c }) : /* @__PURE__ */ e(Wo, { className: x("shrink-0 text-[var(--abc-fg-placeholder)]", b) });
}, Bh = rf, af = {
  error: {
    container: "border-red-500/25 bg-red-50/50 text-red-950 dark:bg-red-950/20 dark:text-red-200 dark:border-red-500/30",
    badge: "border-red-500/30 bg-white/80 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    iconWrap: "bg-red-500/15 text-red-600 dark:text-red-400",
    Icon: Rr,
    defaultRole: "alert"
  },
  warning: {
    container: "border-amber-500/25 bg-amber-50/50 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-500/30",
    badge: "border-amber-500/30 bg-white/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    iconWrap: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    Icon: Cr,
    defaultRole: "alert"
  },
  success: {
    container: "border-emerald-500/25 bg-emerald-50/50 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-200 dark:border-emerald-500/30",
    badge: "border-emerald-500/30 bg-white/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    iconWrap: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    Icon: Sr,
    defaultRole: "status"
  },
  info: {
    container: "border-blue-500/25 bg-blue-50/50 text-blue-950 dark:bg-blue-950/20 dark:text-blue-200 dark:border-blue-500/30",
    badge: "border-blue-500/30 bg-white/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    iconWrap: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    Icon: _a,
    defaultRole: "status"
  }
}, Or = Ne.forwardRef(
  function({
    variant: r = "error",
    title: a,
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
    className: h,
    children: v,
    ...w
  }, k) {
    const g = af[r], N = g.Icon, _ = n ?? v;
    return /* @__PURE__ */ i(
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
          /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
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
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-1", children: [
              (a || o || d != null || c) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 font-medium", children: [
                d != null && /* @__PURE__ */ i(
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
              _ && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: _ }),
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
                children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    );
  }
);
Or.displayName = "NotificationBanner";
function Ph({
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
  const l = t, u = (l == null ? void 0 : l.message) || a;
  return /* @__PURE__ */ e(
    Or,
    {
      variant: "error",
      title: r,
      message: u,
      status: l == null ? void 0 : l.status,
      code: l == null ? void 0 : l.code,
      requestId: l == null ? void 0 : l.requestId,
      className: c,
      action: n ?? (s ? /* @__PURE__ */ i(
        Ae,
        {
          size: "xs",
          variant: "outline",
          onClick: s,
          disabled: d,
          className: "h-7 text-xs bg-white/70 dark:bg-slate-900/60",
          children: [
            d ? /* @__PURE__ */ e(or, { className: "mr-1 h-3 w-3 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ e(jr, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: o })
          ]
        }
      ) : null),
      ...b
    }
  );
}
function zh({
  message: t,
  code: r,
  status: a,
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
    Ae,
    {
      variant: "outline",
      size: "sm",
      disabled: b,
      onClick: s,
      "aria-label": c,
      children: [
        /* @__PURE__ */ e(
          jr,
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
    Or,
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
function jh({
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
      className: x(
        "flex items-center gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-xs text-[var(--abc-fg-muted)] shadow-2xs",
        a === "sm" ? "px-3 py-2 text-[11px]" : "p-3.5",
        r && "border-amber-500/30 bg-amber-50/50 text-amber-900 dark:bg-amber-950/20 dark:text-amber-200",
        n
      ),
      ...s,
      children: [
        r ? /* @__PURE__ */ e(Xd, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-amber-600" }) : /* @__PURE__ */ e(
          or,
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
function Fh({
  items: t,
  emptyMessage: r = "当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。",
  className: a
}) {
  return t.length === 0 ? /* @__PURE__ */ e(
    Or,
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
        const o = "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]", d = !!n.restriction, c = /* @__PURE__ */ i(Ke, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: x(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                n.severity === "critical" && "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400",
                n.severity === "high" && "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
                !["critical", "high"].includes(n.severity) && "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
              ),
              children: /* @__PURE__ */ e(Zd, { "aria-hidden": "true", className: "h-4 w-4" })
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
            !d && (n.href || n.onClick) && /* @__PURE__ */ e(Uo, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--abc-fg-muted)]" })
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
const Jn = "color-scheme", Va = "abc:color-scheme-change", Ri = "(prefers-color-scheme: dark)";
function ya() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? "light" : window.matchMedia(Ri).matches ? "dark" : "light";
}
function Ua() {
  if (typeof window > "u") return "system";
  try {
    const t = window.localStorage.getItem(Jn);
    if (t === "light" || t === "dark") return t;
  } catch {
  }
  return "system";
}
function Ga(t) {
  if (typeof document > "u") return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  !a && document.head && (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a && (a.content = r);
  const n = t === "system" ? ya() : t, s = document.documentElement;
  s.setAttribute("data-abc-theme", n), s.setAttribute("data-abc-theme-mode", t), s.classList.toggle("dark", n === "dark"), s.classList.toggle("light", n === "light");
}
function nf() {
  const t = jb(), [r, a] = Ne.useState(
    () => Ua()
  ), [n, s] = Ne.useState(
    () => ya()
  );
  Ne.useEffect(() => {
    var p;
    t || Ga(Ua());
    const l = typeof window.matchMedia == "function" ? window.matchMedia(Ri) : null, u = () => {
      s(ya()), !t && Ua() === "system" && Ga("system");
    }, m = () => {
      const f = Ua();
      a(f), s(ya()), t || Ga(f);
    };
    return (p = l == null ? void 0 : l.addEventListener) == null || p.call(l, "change", u), window.addEventListener("storage", m), window.addEventListener(Va, m), () => {
      var f;
      (f = l == null ? void 0 : l.removeEventListener) == null || f.call(l, "change", u), window.removeEventListener("storage", m), window.removeEventListener(Va, m);
    };
  }, [t]);
  const o = t ? t.theme.mode : r, d = t ? t.resolvedTheme : o === "system" ? n : o, c = Ne.useCallback(
    (l, u) => {
      try {
        l === "system" ? window.localStorage.removeItem(Jn) : window.localStorage.setItem(Jn, l);
      } catch {
      }
      a(l), t ? t.setThemeMode(l, u) : Ga(l), typeof window < "u" && window.dispatchEvent(new Event(Va));
    },
    [t]
  ), b = Ne.useCallback(
    (l) => {
      const u = l && "clientX" in l && typeof l.clientX == "number" ? { clientX: l.clientX, clientY: l.clientY } : void 0;
      if (t) {
        t.toggleTheme(u), typeof window < "u" && window.dispatchEvent(new Event(Va));
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
const sf = Ne.forwardRef(
  ({ locale: t = "zh-CN", mode: r = "toggle", dark: a = !1, label: n, className: s, ...o }, d) => {
    const c = t.toLowerCase().startsWith("zh"), { preference: b, resolvedScheme: l, systemScheme: u, setPreference: m, toggleScheme: p } = nf();
    if (r === "segmented") {
      const h = u === "dark" ? c ? "当前深色" : "Currently dark" : c ? "当前浅色" : "Currently light";
      return /* @__PURE__ */ i(
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
            /* @__PURE__ */ i(
              Ae,
              {
                size: "xs",
                variant: b === "light" ? "default" : "ghost",
                onClick: (v) => m("light", { clientX: v.clientX, clientY: v.clientY }),
                "aria-pressed": b === "light",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(ka, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "浅色" : "Light" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              Ae,
              {
                size: "xs",
                variant: b === "dark" ? "default" : "ghost",
                onClick: (v) => m("dark", { clientX: v.clientX, clientY: v.clientY }),
                "aria-pressed": b === "dark",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Sa, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "深色" : "Dark" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              Ae,
              {
                size: "xs",
                variant: b === "system" ? "default" : "ghost",
                onClick: (v) => m("system", { clientX: v.clientX, clientY: v.clientY }),
                "aria-pressed": b === "system",
                title: `${c ? "跟随系统" : "System"} (${h})`,
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(cs, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ i("span", { children: [
                    c ? "跟随系统" : "System",
                    /* @__PURE__ */ i("span", { className: "ml-1 opacity-75", children: [
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
        className: x(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
          a ? "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs hover:bg-[var(--abc-bg-subtle)]",
          s
        ),
        ...o,
        children: [
          l === "dark" ? /* @__PURE__ */ e(ka, { className: "h-3.5 w-3.5 text-amber-400", "aria-hidden": "true" }) : /* @__PURE__ */ e(Sa, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: f })
        ]
      }
    );
  }
);
sf.displayName = "ThemeSwitcher";
function Oh({
  open: t,
  title: r,
  description: a,
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
    dr,
    {
      open: t,
      onClose: u,
      onCancel: u,
      onOpenChange: (h) => !h && u(),
      closeDisabled: c,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        vs,
        {
          "data-slot": "confirm-dialog",
          className: x("w-full max-w-md", l),
          closeLabel: b,
          closeDisabled: c,
          children: [
            /* @__PURE__ */ i(xs, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5", children: [
                f ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(Cr, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Jr, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(ws, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              a && /* @__PURE__ */ e(Ns, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            p && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: p }),
            /* @__PURE__ */ i(ys, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                Ae,
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
                Ae,
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
let Gt = [];
const Qn = /* @__PURE__ */ new Set();
function es() {
  Qn.forEach((t) => t());
}
function of(t) {
  const r = Gt.findIndex((a) => a.id === t.id);
  if (r >= 0) {
    const a = Gt[r];
    (a.cascadeMode !== t.cascadeMode || a.widthPx !== t.widthPx) && (Gt[r] = t, es());
  } else
    Gt = [...Gt, t], es();
}
function yo(t) {
  Gt.some((r) => r.id === t) && (Gt = Gt.filter((r) => r.id !== t), es());
}
const lf = {
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
  width: l,
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
  className: _,
  role: A = "dialog"
}) => {
  const L = Fb(k), C = k ?? L, y = It(), T = It(), E = t ?? r ?? !1, D = Me(b), { isMounted: M, isVisible: R } = Dr(E, D === "none" ? 0 : 220), O = be(a);
  O.current = a;
  const [, P] = $(0), [S, B] = $(!1), [j, I] = $(!1), [z, H] = $(() => {
    if (!h || typeof window > "u") return null;
    try {
      const ke = Number(window.localStorage.getItem(`abc_drawer_w_${h}`));
      return Number.isFinite(ke) && ke >= f ? ke : null;
    } catch {
      return null;
    }
  });
  ge(() => {
    const ke = () => P((we) => we + 1);
    return Qn.add(ke), () => {
      Qn.delete(ke);
    };
  }, []);
  const U = typeof l == "number" ? l : z ?? (c ? lf[c] : 560) ?? 560;
  ge(() => {
    if (E)
      return of({
        id: y,
        cascadeMode: C,
        widthPx: U
      }), () => yo(y);
    yo(y);
  }, [E, y, C, U]), ge(() => {
    if (!M) return;
    const ke = (we) => {
      const Se = Gt[Gt.length - 1];
      we.key === "Escape" && (!Se || Se.id === y) && (we.stopPropagation(), O.current());
    };
    return document.addEventListener("keydown", ke), () => document.removeEventListener("keydown", ke);
  }, [M, y]);
  const [K, ee] = $(
    () => typeof window < "u" ? window.innerWidth : 1440
  );
  ge(() => {
    if (typeof window > "u") return;
    const ke = () => ee(window.innerWidth);
    return window.addEventListener("resize", ke), () => window.removeEventListener("resize", ke);
  }, []);
  const q = Gt.findIndex((ke) => ke.id === y), V = q >= 0 ? Math.max(0, Gt.length - 1 - q) : 0, Z = q >= 0 ? q + 1 : 1, oe = q >= 0 ? Gt.slice(q + 1) : [], F = Gt.some((ke) => ke.cascadeMode === "adjacent"), G = C === "adjacent" || F, ye = oe.reduce((ke, we) => ke + (we.widthPx || 560), 0);
  let Ie = U;
  if (G && V > 0 && ye > 0) {
    const ke = Math.max(f, K - ye - 24);
    Ie > ke && (Ie = ke);
  }
  const ne = v && V > 0 ? G ? g ?? ye : V * w : 0, me = v && V > 0 ? G ? 1 : Math.max(0.92, 1 - V * 0.025) : 1, pe = u === "right" ? -1 : 1, de = (ke) => {
    ke.preventDefault(), I(!0);
    const we = (X) => {
      const te = Math.max(f, window.innerWidth - 32), Re = u === "right" ? window.innerWidth - X.clientX : X.clientX, qe = Math.min(te, Math.max(f, Re));
      if (B(!1), H(qe), h)
        try {
          window.localStorage.setItem(`abc_drawer_w_${h}`, String(Math.round(qe)));
        } catch {
        }
    }, Se = () => {
      I(!1), window.removeEventListener("mousemove", we), window.removeEventListener("mouseup", Se);
    };
    window.addEventListener("mousemove", we), window.addEventListener("mouseup", Se);
  };
  if (!M || typeof document > "u") return null;
  const Ce = S ? "100dvw" : z ? `${z}px` : typeof l == "number" ? `${Ie}px` : `${Ie}px`;
  return cr(
    /* @__PURE__ */ i(
      "div",
      {
        role: A,
        "aria-modal": A === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? T : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, q) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          q === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                m && a();
              },
              "data-motion": D,
              className: x(
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
                width: Ce,
                transform: D === "none" ? ne > 0 ? `translate3d(${pe * ne}px, 0, 0) scale(${me})` : void 0 : R ? ne > 0 ? `translate3d(${pe * ne}px, 0, 0) scale(${me})` : "translate3d(0, 0, 0)" : u === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: D === "none" || j ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: x(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                G && q > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                u === "right" ? "ml-auto border-l" : "mr-auto border-r",
                _
              ),
              children: [
                p && !S && /* @__PURE__ */ i(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: de,
                    className: x(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      u === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(vn, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                      Gt.length > 1 && /* @__PURE__ */ i(
                        "span",
                        {
                          title: G ? `并排抽屉层级: ${Z} 级` : `抽屉栈深度: ${Z} 级`,
                          className: x(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            V === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(ds, { className: "h-2.5 w-2.5" }),
                            "L",
                            Z,
                            G && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: V === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: T, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                    p && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": S ? "还原默认宽度" : "全宽展开",
                        onClick: () => B((ke) => !ke),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: S ? /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ss, { className: "h-3.5 w-3.5" })
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
function cf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-header",
      className: x("flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5", t),
      ...r
    }
  );
}
function df({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "h2",
    {
      "data-slot": "drawer-title",
      className: x("text-lg font-semibold tracking-tight text-[var(--abc-fg)]", t),
      ...r
    }
  );
}
function uf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: x("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...r
    }
  );
}
function bf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: x("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...r
    }
  );
}
function mf({ className: t, ...r }) {
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
const ff = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, pf = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, hf = ({
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
  const l = r ?? a, u = !!(o || d), m = Be(n, "md"), p = Me(s), f = /* @__PURE__ */ i(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": p,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(or, { className: x("animate-spin", ff[m]) }),
        l && /* @__PURE__ */ e("span", { className: x("font-medium text-[var(--abc-fg-muted)]", pf[m]), children: l })
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
  ) : null : b !== void 0 ? /* @__PURE__ */ i("div", { "data-motion": p, className: x("relative", c), children: [
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
}, gf = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  opacity: s,
  children: o,
  className: d,
  ...c
}) => {
  const { resolvedTheme: b } = Mt(), l = be(null), u = be(null), m = be(""), p = be(null), f = fe(() => {
    const h = l.current;
    if (!h) return;
    if (p.current && (p.current.disconnect(), p.current = null), !r || !t || Array.isArray(t) && t.length === 0) {
      u.current && u.current.parentNode === h && h.removeChild(u.current), u.current = null, m.current = "";
      return;
    }
    if (typeof document > "u") return;
    const v = document.createElement("canvas"), w = v.getContext("2d");
    if (!w) return;
    const k = Array.isArray(t) ? t : [t], g = Math.max(window.devicePixelRatio || 1, 1), N = 210 + n[0], _ = 90 + n[1];
    v.width = N * g, v.height = _ * g;
    let A = "";
    try {
      w.scale(g, g), w.translate(N / 2, _ / 2), w.rotate(a * Math.PI / 180), w.font = "500 12px Inter, -apple-system, sans-serif";
      const y = typeof s == "number" && Number.isFinite(s) ? Math.max(0, Math.min(1, s)) : b === "dark" ? 0.065 : 0.055;
      w.fillStyle = b === "dark" ? `rgba(226, 232, 240, ${y})` : `rgba(15, 23, 42, ${y})`, w.textAlign = "center", w.textBaseline = "middle", k.forEach((T, E) => {
        const D = (E - (k.length - 1) / 2) * 18;
        w.fillText(T, 0, D);
      }), A = v.toDataURL();
    } catch {
      return;
    }
    if (!A) return;
    let L = u.current;
    L || (L = document.createElement("div"), u.current = L), L.getAttribute("data-watermark-overlay") !== "true" && L.setAttribute("data-watermark-overlay", "true");
    const C = [
      "position: absolute",
      "inset: 0",
      "pointer-events: none",
      "z-index: 40",
      `background-image: url(${A})`,
      "background-repeat: repeat",
      `background-size: ${N}px ${_}px`
    ].join(" !important; ") + " !important;";
    if (m.current = C, L.getAttribute("style") !== C && L.setAttribute("style", C), L.parentNode !== h && h.appendChild(L), typeof MutationObserver < "u") {
      const y = new MutationObserver((T) => {
        const E = l.current, D = u.current;
        if (!E || !D) return;
        let M = !1;
        for (const R of T)
          if (R.type === "childList") {
            if (Array.from(R.removedNodes).includes(D)) {
              M = !0;
              break;
            }
          } else if (R.type === "attributes" && R.target === D && ((D.getAttribute("style") || "") !== m.current || D.hidden)) {
            M = !0;
            break;
          }
        M && f();
      });
      p.current = y, y.observe(h, { childList: !0, subtree: !1 }), y.observe(L, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
    }
  }, [t, r, n, s, b, a]);
  return ge(() => (f(), () => {
    p.current && (p.current.disconnect(), p.current = null);
  }), [f]), /* @__PURE__ */ e("div", { ref: l, className: x("relative", d), ...c, children: o });
};
class vf extends Po {
  constructor() {
    super(...arguments);
    Hr(this, "state", {
      hasError: !1,
      error: null,
      errorInfo: null,
      showDetails: !1
    });
    Hr(this, "reset", () => {
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
        homeText: l = "返回仪表盘",
        className: u
      } = this.props, { error: m, errorInfo: p, showDetails: f } = this.state;
      return /* @__PURE__ */ e(
        "div",
        {
          className: x(
            "flex min-h-[500px] w-full items-center justify-center p-6 md:p-10",
            u
          ),
          children: /* @__PURE__ */ i("div", { className: "w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]", children: [
            /* @__PURE__ */ e("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-500 shadow-xs dark:border-amber-800 dark:bg-amber-950/40", children: /* @__PURE__ */ e(Cr, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ i("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg font-semibold tracking-tight text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ e("p", { className: "mx-auto max-w-md text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: d }),
              a && /* @__PURE__ */ e("div", { className: "inline-block rounded-[var(--abc-radius-sm)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg-muted)]", children: a })
            ] }),
            m && /* @__PURE__ */ i("div", { className: "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-3 text-left text-xs", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: () => this.setState((h) => ({ showDetails: !h.showDetails })),
                  className: "flex cursor-pointer items-center gap-1.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] select-none hover:text-[var(--abc-fg)]",
                  children: [
                    f ? /* @__PURE__ */ e(er, { size: 14 }) : /* @__PURE__ */ e(nr, { size: 14 }),
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
                    /* @__PURE__ */ e(jr, { size: 14 }),
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
                    /* @__PURE__ */ e(Ct, { size: 14 }),
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
                    /* @__PURE__ */ e(us, { size: 14 }),
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
class $h extends Po {
  constructor() {
    super(...arguments);
    Hr(this, "state", {
      hasError: !1,
      error: null,
      errorInfo: null
    });
    Hr(this, "reset", () => {
      var a, n, s, o;
      this.setState({ hasError: !1, error: null, errorInfo: null }), this.props.onReload || this.props.onReset ? ((n = (a = this.props).onReload) == null || n.call(a), (o = (s = this.props).onReset) == null || o.call(s)) : typeof window < "u" && window.location.reload();
    });
    Hr(this, "handleHome", () => {
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
          className: x(
            "flex items-center justify-center p-6 text-[var(--abc-fg)]",
            s === "fullscreen" ? "min-h-screen bg-[var(--abc-bg-canvas)]" : "min-h-[260px] w-full",
            p
          ),
          children: /* @__PURE__ */ i("div", { className: "w-full max-w-xl space-y-6 rounded-[var(--abc-radius-xl,1rem)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-8 text-center shadow-[var(--abc-shadow-popover)]", children: [
            /* @__PURE__ */ e("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-500 dark:border-rose-800 dark:bg-rose-950/40", children: /* @__PURE__ */ e(Cr, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ i("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("h2", { className: "text-2xl font-bold tracking-tight text-[var(--abc-fg)]", children: f }),
              /* @__PURE__ */ e("p", { className: "text-sm text-[var(--abc-fg-muted)]", children: c })
            ] }),
            /* @__PURE__ */ i("div", { className: "max-h-48 overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-4 text-left font-mono text-xs text-rose-600 dark:text-rose-400", children: [
              /* @__PURE__ */ e("div", { className: "mb-1 font-semibold", children: this.state.error.toString() }),
              ((a = this.state.errorInfo) == null ? void 0 : a.componentStack) && /* @__PURE__ */ e("pre", { className: "mt-2 text-[11px] whitespace-pre-wrap text-[var(--abc-fg-muted)]", children: this.state.errorInfo.componentStack })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center justify-center gap-3 pt-2", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: this.reset,
                  className: "inline-flex cursor-pointer items-center gap-2 rounded-[var(--abc-radius-lg)] bg-[var(--abc-primary)] px-5 py-2.5 text-sm font-medium text-[var(--abc-primary-fg)] shadow-xs transition-all hover:bg-[var(--abc-primary-hover)] active:scale-95",
                  children: [
                    /* @__PURE__ */ e(jr, { className: "h-4 w-4" }),
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
                    /* @__PURE__ */ e(us, { className: "h-4 w-4" }),
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
const xf = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(_a, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Sr, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Cr, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Rr, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, yf = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Hh = ({
  tone: t = "info",
  title: r,
  description: a,
  children: n,
  showIcon: s = !0,
  closable: o = !1,
  onClose: d,
  action: c,
  size: b,
  motion: l,
  className: u
}) => {
  const [m, p] = $(!1), f = Be(b, "sm"), h = Me(l);
  if (m) return null;
  const v = xf[t], w = a ?? n;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alert",
      "data-motion": h,
      className: x(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        yf[f],
        h !== "none" && "abc-animate-fade-in",
        v.box,
        u
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: v.icon }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
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
}, wf = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, Nf = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, kf = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, Sf = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  strokeColor: n,
  showInfo: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const b = Be(typeof o == "string" ? o : void 0, "sm"), l = Me(d), u = Math.max(0, Math.min(100, Math.round(t))), m = n || kf[a];
  if (r === "circle") {
    const f = typeof o == "number" ? o : wf[b], h = Math.max(4, Math.round(f * 0.09)), v = (f - h) / 2, w = 2 * Math.PI * v, k = w - u / 100 * w;
    return /* @__PURE__ */ i(
      "div",
      {
        role: "progressbar",
        "data-motion": l,
        "aria-valuenow": u,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: x("relative inline-flex items-center justify-center", c),
        style: { width: f, height: f },
        children: [
          /* @__PURE__ */ i("svg", { width: f, height: f, className: "-rotate-90", children: [
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
          s && /* @__PURE__ */ i("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            u,
            "%"
          ] })
        ]
      }
    );
  }
  const p = typeof o == "number" ? o : Nf[b];
  return /* @__PURE__ */ i(
    "div",
    {
      role: "progressbar",
      "data-motion": l,
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
        s && /* @__PURE__ */ i("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          u,
          "%"
        ] })
      ]
    }
  );
}, Cf = {
  success: {
    icon: /* @__PURE__ */ e(Sr, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(_a, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e(Cr, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e(Rr, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(fn, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(Qd, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(Jd, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, Kh = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: d,
  className: c
}) => {
  const b = Cf[t], l = Be(o, "md"), u = Me(d);
  return /* @__PURE__ */ i(
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
        }[l],
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
function Wh({
  title: t,
  secret: r,
  open: a,
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
  const h = r ?? n ?? null, v = a !== void 0 ? a : !!h, [w, k] = Ne.useState(!1), [g, N] = Ne.useState(!1), [_, A] = Ne.useState(null);
  if (Ne.useEffect(() => {
    v || (k(!1), N(!1), A(null));
  }, [v]), !v || !h)
    return null;
  const L = async () => {
    A(null), await wn(h) ? (k(!0), setTimeout(() => k(!1), 2e3)) : A(m);
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
      children: /* @__PURE__ */ i(
        vs,
        {
          "data-slot": "one-time-secret-dialog",
          className: x("w-full max-w-lg", p),
          closeLabel: c,
          children: [
            /* @__PURE__ */ i(xs, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300", children: /* @__PURE__ */ e(Fo, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(ws, { className: "text-base font-semibold leading-tight", children: t })
              ] }),
              /* @__PURE__ */ e(Ns, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: s })
            ] }),
            /* @__PURE__ */ i("div", { className: "space-y-3 py-2 text-xs", children: [
              /* @__PURE__ */ e(
                Or,
                {
                  variant: "warning",
                  title: "请立即备份",
                  message: "关闭此窗口后将无法再次检索该明文内容，丢失将需要重新生成。"
                }
              ),
              o && /* @__PURE__ */ e("span", { className: "block font-medium text-[var(--abc-fg)]", children: o }),
              /* @__PURE__ */ i("div", { className: "relative rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3 pr-12", children: [
                /* @__PURE__ */ e("code", { className: "block select-all break-all font-mono text-xs text-[var(--abc-fg)]", children: h }),
                /* @__PURE__ */ e(
                  Ae,
                  {
                    type: "button",
                    variant: "outline",
                    size: "xs",
                    onClick: L,
                    className: "absolute right-2 top-2 h-7 w-7 p-0",
                    title: w ? u : l,
                    "aria-label": w ? u : l,
                    children: w ? /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(Fr, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                  }
                )
              ] }),
              _ && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: _ }),
              d.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
                Ai,
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
                    checked: g,
                    onChange: (C) => N(C.target.checked),
                    className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: b })
              ] })
            ] }),
            /* @__PURE__ */ e(ys, { className: "pt-2", children: /* @__PURE__ */ e(
              Ae,
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
const va = /* @__PURE__ */ new Set(), Ef = {
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
}, Di = ({
  activeKey: t,
  loading: r,
  skipInitial: a = !0,
  height: n = 2,
  color: s = "var(--abc-primary)",
  zIndex: o = 9999,
  className: d
}) => {
  const [c, b] = $(!1), [l, u] = $(0), m = be(!0), p = be(null), f = be(null), h = () => {
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
  return ge(() => Ef.subscribe((k) => {
    k.action === "start" ? v() : k.action === "done" ? w() : k.action === "set" && typeof k.value == "number" && (h(), b(!0), u(k.value), k.value >= 100 && w());
  }), []), ge(() => {
    if (r !== void 0)
      return r ? v() : c && w(), () => h();
  }, [r]), ge(() => {
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
  }, [t, a]), ge(() => () => h(), []), c ? /* @__PURE__ */ e(
    "div",
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": Math.round(l),
      "aria-label": "页面加载进度",
      style: { zIndex: o, height: n },
      className: x("pointer-events-none fixed top-0 right-0 left-0 overflow-hidden", d),
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
}, _f = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Vh = ({
  activeKey: t,
  transition: r,
  showProgress: a = !0,
  className: n,
  children: s
}) => {
  const { pageTransition: o } = Mt(), c = _f[r ?? o] ?? "";
  return /* @__PURE__ */ i(Ke, { children: [
    a && t !== void 0 && /* @__PURE__ */ e(Di, { activeKey: t }),
    /* @__PURE__ */ e("div", { className: x("w-full min-w-0", c, n), children: s }, t)
  ] });
}, Tf = {
  default: "xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]",
  balanced: "xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]",
  "wide-master": "xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]"
};
function Uh({
  children: t,
  inspector: r,
  ratio: a = "default",
  stickyInspector: n = !0,
  className: s,
  ...o
}) {
  const d = Ne.Children.toArray(t), c = r !== void 0 ? t : d[0], b = r !== void 0 ? r : d.slice(1);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: x("grid items-start gap-6", Tf[a], s),
      ...o,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: c }),
        /* @__PURE__ */ e("div", { className: x("min-w-0", n && "xl:sticky xl:top-20"), children: b })
      ]
    }
  );
}
const If = Ne.forwardRef(
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
    error: l,
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
    const _ = m !== void 0 ? !m : u, A = !!(t || r || a || n);
    return /* @__PURE__ */ i(
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
          A && /* @__PURE__ */ i("header", { className: "mb-4 flex items-start justify-between gap-3 border-b border-[var(--abc-border)] pb-3.5", children: [
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
                Ae,
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
          c ? /* @__PURE__ */ i("div", { className: "flex min-h-[220px] flex-col items-center justify-center gap-2.5 py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e(or, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: b })
          ] }) : l ? /* @__PURE__ */ e("div", { className: "my-2", children: l }) : _ ? /* @__PURE__ */ i("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
            p ?? /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Ta, { className: "h-5 w-5 stroke-[1.5]", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg)]", children: f }),
            h && /* @__PURE__ */ e("p", { className: "max-w-[280px] text-[11px] text-[var(--abc-fg-muted)]", children: h })
          ] }) : /* @__PURE__ */ e("div", { className: "flex-1 space-y-4", children: w }),
          v && /* @__PURE__ */ e("footer", { className: "mt-4 border-t border-[var(--abc-border)] pt-3.5", children: v })
        ]
      }
    );
  }
);
If.displayName = "InspectorPanel";
function kn(t, r) {
  if (!(!t || r == null || r === ""))
    return Array.isArray(r) ? r.reduce((a, n) => a == null ? void 0 : a[n], t) : typeof r == "string" && r.includes(".") ? r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t) : t[r];
}
function Mf(t, r = 150) {
  if (typeof t == "number" && Number.isFinite(t)) return t;
  if (typeof t == "string") {
    const a = parseFloat(t);
    if (Number.isFinite(a) && !t.trim().endsWith("%")) return a;
  }
  return r;
}
const ts = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
}, wo = {
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
}, No = [
  "info",
  "success",
  "warning",
  "danger",
  "purple",
  "cyan",
  "orange",
  "teal",
  "pink"
], Af = [
  { color: "#3b82f6", label: "经典蓝" },
  { color: "#10b981", label: "翡翠绿" },
  { color: "#f59e0b", label: "琥珀橙" },
  { color: "#f43f5e", label: "珊瑚红" },
  { color: "#8b5cf6", label: "极光紫" }
];
function ko(t) {
  if (typeof t == "number")
    return We(t < 1e11 ? t * 1e3 : t);
  const r = String(t).trim();
  return /^\d{10}$/.test(r) ? We(Number(r) * 1e3) : /^\d{13}$/.test(r) ? We(Number(r)) : We(t);
}
function Rf({
  value: t,
  record: r,
  config: a
}) {
  const { toast: n } = Mt(), s = (u) => a.checkedValue !== void 0 ? String(u) === String(a.checkedValue) : u === !0 || u === 1 || u === "1", [o, d] = $(() => s(t)), [c, b] = $(!1);
  ge(() => {
    d(s(t));
  }, [t, a.checkedValue]);
  const l = async (u) => {
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
  return /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ e(
      rr,
      {
        size: "sm",
        checked: o,
        loading: c,
        disabled: !a.onChange,
        onChange: l
      }
    ),
    (a.checkedChildren || a.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: o ? a.checkedChildren : a.unCheckedChildren })
  ] });
}
function Li(t, r, a, n) {
  const s = a.type === "switch" || typeof a.type == "object" && a.type !== null && a.type.type === "switch", o = typeof a.type == "object" && a.type !== null ? a.type : a.type ? { type: a.type } : a.valueType ? { type: a.valueType } : void 0;
  if ((o == null ? void 0 : o.type) === "switch" && (s || o.onChange || o.checkedValue !== void 0))
    return /* @__PURE__ */ e(Rf, { value: t, record: r, config: o });
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const d = (o == null ? void 0 : o.options) ?? a.options;
  if (d && d.length > 0) {
    const l = String(t);
    let u = d.findIndex((m) => String(m.value) === l);
    if (u < 0) {
      const m = l.toLowerCase();
      u = d.findIndex((p) => String(p.value).toLowerCase() === m);
    }
    if (u >= 0) {
      const m = d[u], p = m.status ? String(m.status).toLowerCase() : "", f = m.color ? String(m.color).toLowerCase() : "", h = (p ? wo[p] : void 0) ?? (f ? wo[f] : void 0) ?? (!m.status && !m.color ? No[u % No.length] : void 0), v = !a.__autoOptionsFromSearch;
      return /* @__PURE__ */ e(
        Ar,
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
      const l = ko(t), u = (o == null ? void 0 : o.format) || "YYYY-MM-DD";
      b = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: l.isValid() ? l.format(u) : String(t) });
      break;
    }
    case "datetime": {
      const l = ko(t), u = (o == null ? void 0 : o.format) || "YYYY-MM-DD HH:mm:ss";
      b = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: l.isValid() ? l.format(u) : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(
        Ba,
        {
          src: String(t),
          width: (o == null ? void 0 : o.imageWidth) ?? 32,
          height: (o == null ? void 0 : o.imageHeight) ?? 32
        }
      );
    case "progress":
      return /* @__PURE__ */ e(
        Sf,
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
      return /* @__PURE__ */ e(lo, { text: String(t) });
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
      return /* @__PURE__ */ e(Ar, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
    case "badge":
      return /* @__PURE__ */ e(Ar, { dot: !0, children: String(t) });
    default:
      b = String(t);
  }
  if (a.linkToView && n) {
    const l = typeof a.linkToView == "string" ? a.linkToView : void 0;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: (u) => {
          u.stopPropagation(), n(r, l);
        },
        className: "max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
        children: b
      }
    );
  }
  return a.copyable ? /* @__PURE__ */ e(lo, { text: String(t), displayText: b }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: b }) : b;
}
function Df({ state: t }) {
  const {
    loading: r,
    flattenedRows: a,
    selectable: n,
    hasExpandColumn: s,
    orderedColumns: o,
    density: d,
    totalColSpan: c,
    emptyText: b,
    onEmptyReset: l,
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
    stickyMeta: _,
    scrollEdge: A,
    toggleOne: L,
    toggleExpandRow: C,
    getEffectiveFixed: y,
    onRowView: T,
    indentPx: E,
    draggingKey: D
  } = t;
  return /* @__PURE__ */ e("tbody", { children: r && a.length === 0 ? Array.from({ length: 5 }).map((M, R) => /* @__PURE__ */ i("tr", { children: [
    n && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2.5 py-3 text-center", children: /* @__PURE__ */ e(Bt, { width: 16, height: 16 }) }),
    s && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
    o.map((O) => /* @__PURE__ */ e(
      "td",
      {
        className: x("border-b border-[var(--abc-border)]", ts[d]),
        children: /* @__PURE__ */ e(Bt, { variant: "text", className: "w-4/5" })
      },
      O.key
    ))
  ] }, `sk_${R}`)) : a.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: c, children: /* @__PURE__ */ e(fi, { title: b, onReset: l }) }) }) : a.map(({ record: M, key: R, rowIdx: O, depth: P, hasTreeChildren: S }) => {
    var K, ee, q;
    const B = !!(n && (u != null && u.includes(R))), j = !!((ee = (K = m == null ? void 0 : m.getCheckboxProps) == null ? void 0 : K.call(m, M)) != null && ee.disabled), I = p != null && String(p) === String(R), z = f.includes(R), H = s ? h ? S : !!(v != null && v.expandedRowRender && (!v.rowExpandable || v.rowExpandable(M))) || !!((q = v == null ? void 0 : v.rowExpandable) != null && q.call(v, M)) : !1, U = (w == null ? void 0 : w(M, O)) ?? {};
    return /* @__PURE__ */ i(dt.Fragment, { children: [
      /* @__PURE__ */ i(
        "tr",
        {
          ...U,
          draggable: k || U.draggable,
          onDragStart: (V) => {
            var Z;
            (Z = U.onDragStart) == null || Z.call(U, V), k && V.dataTransfer && (V.dataTransfer.setData("text/plain", String(R)), V.dataTransfer.effectAllowed = "move");
          },
          onDragOver: (V) => {
            var Z;
            (Z = U.onDragOver) == null || Z.call(U, V), k && V.preventDefault();
          },
          onDrop: (V) => {
            var oe, F;
            if ((oe = U.onDrop) == null || oe.call(U, V), !k || !g) return;
            V.preventDefault();
            const Z = (F = V.dataTransfer) == null ? void 0 : F.getData("text/plain");
            Z && Z !== String(R) && g(Z, R);
          },
          "data-state": I || B ? "selected" : void 0,
          tabIndex: N ? 0 : U.tabIndex,
          onClick: (V) => {
            var oe;
            if ((oe = U.onClick) == null || oe.call(U, V), !N) return;
            const Z = V.target;
            Z && Z.closest(
              'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
            ) || N(M, V);
          },
          onKeyDown: (V) => {
            var Z;
            (Z = U.onKeyDown) == null || Z.call(U, V), N && V.target === V.currentTarget && (V.key === "Enter" || V.key === " ") && (V.preventDefault(), N(M, V));
          },
          className: x(
            "group transition-colors duration-150",
            k && "cursor-grab active:cursor-grabbing",
            P === 1 && "border-l-4 border-l-blue-400 bg-blue-50/75 dark:border-l-blue-500 dark:bg-blue-950/30",
            P >= 2 && "border-l-4 border-l-amber-400 bg-amber-50/75 dark:border-l-amber-500 dark:bg-amber-950/20",
            N && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
            B || I ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85",
            U.className
          ),
          children: [
            n && /* @__PURE__ */ e(
              "td",
              {
                style: { left: 0 },
                className: x(
                  "sticky z-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2.5 text-center group-hover:bg-[var(--abc-bg-muted)]",
                  (B || I) && "bg-[var(--abc-primary-soft)]/60",
                  !_.hasAnyLeftFixed && A.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
                ),
                children: /* @__PURE__ */ e(
                  aa,
                  {
                    checked: B,
                    disabled: j,
                    onChange: () => L(R)
                  }
                )
              }
            ),
            s && /* @__PURE__ */ e(
              "td",
              {
                style: _.hasAnyLeftFixed ? { left: n ? 44 : 0 } : void 0,
                className: x(
                  "border-b border-[var(--abc-border)] px-2 py-2.5 text-center whitespace-nowrap",
                  _.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                ),
                children: H ? /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": z ? "收起详情行" : "展开详情行",
                    "aria-expanded": z,
                    onClick: () => C(R, M),
                    className: "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: /* @__PURE__ */ e(
                      nr,
                      {
                        className: x(
                          "h-3.5 w-3.5 transition-transform duration-150",
                          z && "rotate-90 text-[var(--abc-primary)]"
                        )
                      }
                    )
                  }
                ) : /* @__PURE__ */ e("span", { className: "inline-block w-4" })
              }
            ),
            o.map((V, Z) => {
              const oe = V.dataIndex ?? V.key, F = kn(M, oe), G = y(V), ye = V.key === "__abc_actions__" || V.key === "__actions__", Ie = V.render ? V.render(F, M, h ? P : O, {
                depth: P,
                rowIndex: O,
                isExpanded: z
              }) : Li(F, M, V, T), ne = !s && Z === 0 && (P > 0 || S), me = s && Z === 0 && P > 0;
              return /* @__PURE__ */ e(
                "td",
                {
                  "data-col-cell": V.key,
                  style: {
                    ...G === "left" ? { left: `${_.leftOffsets[V.key] ?? 0}px` } : {},
                    ...G === "right" ? { right: `${_.rightOffsets[V.key] ?? 0}px` } : {},
                    ...me ? { paddingLeft: `${12 + P * E}px` } : {}
                  },
                  className: x(
                    "overflow-hidden border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                    ts[d],
                    V.align === "center" && "text-center",
                    V.align === "right" && "text-right",
                    D === V.key && "bg-[var(--abc-primary-soft)]/30",
                    G === "left" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                    G === "right" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                    (B || I) && (G === "left" || G === "right") && "bg-[var(--abc-primary-soft)]/60",
                    V.key === _.lastLeftKey && A.left && "shadow-[6px_0_8px_-6px_rgba(15,23,42,0.22)]",
                    V.key === _.firstRightKey && A.right && "shadow-[-6px_0_8px_-6px_rgba(15,23,42,0.22)]"
                  ),
                  children: ne ? /* @__PURE__ */ i(
                    "div",
                    {
                      style: { paddingLeft: `${P * E}px` },
                      className: "inline-flex max-w-full items-center gap-1",
                      children: [
                        S ? /* @__PURE__ */ e(
                          "button",
                          {
                            type: "button",
                            "aria-label": z ? "收起子项" : "展开子项",
                            "aria-expanded": z,
                            onClick: () => C(R, M),
                            className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                            children: /* @__PURE__ */ e(
                              nr,
                              {
                                className: x(
                                  "h-3 w-3 transition-transform duration-150",
                                  z && "rotate-90 text-[var(--abc-primary)]"
                                )
                              }
                            )
                          }
                        ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: Ie })
                      ]
                    }
                  ) : V.ellipsis === !1 ? Ie : /* @__PURE__ */ e(
                    "div",
                    {
                      title: ye || F === void 0 || F === null || typeof F == "object" ? void 0 : String(F),
                      className: x(
                        "overflow-hidden text-ellipsis whitespace-nowrap",
                        ye ? "w-full min-w-0" : "w-0 min-w-full"
                      ),
                      children: Ie
                    }
                  )
                },
                V.key
              );
            })
          ]
        }
      ),
      H && z && (v == null ? void 0 : v.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
        "td",
        {
          colSpan: c,
          className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
          children: v.expandedRowRender(M, O, P, z)
        }
      ) })
    ] }, String(R));
  }) });
}
function Lf({ state: t }) {
  const {
    contextMenu: r,
    portalTarget: a,
    getEffectiveFixed: n,
    movableColumns: s,
    filterHighlightColor: o,
    contextMenuRef: d,
    resolvedMotion: c,
    isColSortable: b,
    onSortChange: l,
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
    hiddenColumnKeys: _,
    onFilterHighlightColorChange: A,
    onResetColumns: L
  } = t;
  return /* @__PURE__ */ e(Ke, { children: r && a && (() => {
    const C = n(r.col), y = s.findIndex((R) => R.key === r.col.key), T = y > 0 && !C, E = y >= 0 && y < s.length - 1 && !C, D = s.length > 1, M = o || "#3b82f6";
    return cr(
      /* @__PURE__ */ i(
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
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
              /* @__PURE__ */ e("span", { className: "truncate font-semibold text-[var(--abc-fg)]", children: r.col.title }),
              /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "列属性" })
            ] }),
            b(r.col) && l && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    l(r.col.key, "asc"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(ms, { className: "h-3.5 w-3.5" }),
                      " 升序排列"
                    ] }),
                    (m == null ? void 0 : m.key) === r.col.key && m.direction === "asc" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    l(r.col.key, "desc"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(fs, { className: "h-3.5 w-3.5" }),
                      " 降序排列"
                    ] }),
                    (m == null ? void 0 : m.key) === r.col.key && m.direction === "desc" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              (m == null ? void 0 : m.key) === r.col.key && m.direction && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    l(r.col.key, null), u(null);
                  },
                  className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(Xo, { className: "h-3.5 w-3.5" }),
                    " 清除排序"
                  ]
                }
              )
            ] }),
            p && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    p(r.col.key, C === "left" ? null : "left"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(Xr, { className: "h-3.5 w-3.5 -rotate-45" }),
                      " 固定到左侧"
                    ] }),
                    C === "left" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    p(r.col.key, C === "right" ? null : "right"), u(null);
                  },
                  className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                      /* @__PURE__ */ e(Xr, { className: "h-3.5 w-3.5 rotate-45" }),
                      " 固定到右侧"
                    ] }),
                    C === "right" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                  ]
                }
              ),
              C && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    p(r.col.key, null), u(null);
                  },
                  className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(eu, { className: "h-3.5 w-3.5" }),
                    " 取消固定"
                  ]
                }
              )
            ] }),
            f && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: !T,
                  onClick: () => h(r.col.key, "left"),
                  className: x(
                    "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                    T ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ e(tu, { className: "h-3.5 w-3.5" }),
                    " 向左移动"
                  ]
                }
              ),
              /* @__PURE__ */ i(
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
                    /* @__PURE__ */ e(qo, { className: "h-3.5 w-3.5" }),
                    " 向右移动"
                  ]
                }
              )
            ] }),
            (v || w && k.length > 0) && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
              v && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: !D,
                  onClick: () => {
                    D && (v(r.col.key), u(null));
                  },
                  className: x(
                    "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                    D ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                  ),
                  children: [
                    /* @__PURE__ */ e(Vo, { className: "h-3.5 w-3.5" }),
                    " 隐藏当前列"
                  ]
                }
              ),
              w && k.length > 0 && /* @__PURE__ */ i(
                "div",
                {
                  className: "relative",
                  onMouseEnter: () => g(!0),
                  onMouseLeave: () => g(!1),
                  children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        role: "menuitem",
                        "aria-haspopup": "menu",
                        "aria-expanded": N,
                        onClick: () => g((R) => !R),
                        className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: [
                          /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                            /* @__PURE__ */ e(ru, { className: "h-3.5 w-3.5" }),
                            " 显示 / 隐藏列"
                          ] }),
                          /* @__PURE__ */ e(nr, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]" })
                        ]
                      }
                    ),
                    N && /* @__PURE__ */ i(
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
                          k.map((R) => {
                            const O = !_.includes(R.key), P = O && s.length <= 1;
                            return /* @__PURE__ */ i(
                              "button",
                              {
                                type: "button",
                                role: "menuitemcheckbox",
                                "aria-checked": O,
                                disabled: P,
                                onClick: () => {
                                  P || w(R.key);
                                },
                                className: x(
                                  "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left",
                                  P ? "text-[var(--abc-fg-placeholder)] cursor-not-allowed" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                                ),
                                children: [
                                  /* @__PURE__ */ e("span", { className: "truncate", children: R.title }),
                                  /* @__PURE__ */ e(
                                    "span",
                                    {
                                      className: x(
                                        "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors",
                                        O ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                      ),
                                      children: O && /* @__PURE__ */ e(St, { className: "h-2.5 w-2.5 stroke-[3]" })
                                    }
                                  )
                                ]
                              },
                              R.key
                            );
                          })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            A && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] px-2.5 py-2", children: [
              /* @__PURE__ */ i("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ e(is, { className: "h-3 w-3" }),
                /* @__PURE__ */ e("span", { children: "筛选高亮颜色" })
              ] }),
              /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: Af.map((R) => {
                const O = M === R.color;
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    title: R.label,
                    "aria-label": `筛选高亮颜色 ${R.label}`,
                    onClick: () => A(R.color),
                    style: { backgroundColor: R.color },
                    className: x(
                      "h-4 w-4 rounded-full transition-transform cursor-pointer",
                      O ? "scale-110 ring-2 ring-slate-900 ring-offset-1 dark:ring-white dark:ring-offset-slate-900" : "opacity-80 hover:scale-110 hover:opacity-100"
                    )
                  },
                  R.color
                );
              }) })
            ] }),
            L && /* @__PURE__ */ e("div", { className: "pt-1", children: /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                role: "menuitem",
                onClick: () => {
                  L(), u(null);
                },
                className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
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
function Bf({ state: t }) {
  const {
    selectable: r,
    stickyMeta: a,
    scrollEdge: n,
    allSelected: s,
    someSelected: o,
    toggleAll: d,
    hasExpandColumn: c,
    orderedColumns: b,
    colWidthMeta: l,
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
    liveDragOrder: _,
    wrapperRef: A,
    prevColRectsRef: L,
    hasLiveSwappedRef: C,
    setLiveDragOrder: y,
    handleHeaderContextMenu: T,
    preDragOrderRef: E,
    setDraggingKey: D,
    density: M,
    handleSortClick: R,
    isResizable: O,
    startResizeColumn: P,
    hasInlineHeaderFilterRow: S,
    headerFilters: B,
    onHeaderFilterChange: j
  } = t;
  return /* @__PURE__ */ i("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
    /* @__PURE__ */ i("tr", { children: [
      r && /* @__PURE__ */ e(
        "th",
        {
          style: { left: 0 },
          className: x(
            "sticky z-30 w-11 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2.5 py-3 text-center",
            !a.hasAnyLeftFixed && n.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
          ),
          children: /* @__PURE__ */ e(
            aa,
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
      b.map((I, z) => {
        const H = l.resolvedWidths[I.key], U = u(I), K = m(I), ee = (p == null ? void 0 : p.key) === I.key ? p.direction : null, q = f === I.key, V = !!(h != null && h.includes(I.key)), Z = v == null ? void 0 : v[I.key], oe = b[z + 1], F = oe ? u(oe) : void 0, G = !!(oe && F !== "right"), ye = I.key === a.firstRightKey, Ie = w && (I.filterable || k) ? w(I) : null, ne = {
          width: H ? `${H}px` : void 0,
          ...U === "left" ? { left: `${a.leftOffsets[I.key] ?? 0}px` } : {},
          ...U === "right" ? { right: `${a.rightOffsets[I.key] ?? 0}px` } : {},
          ...V ? {
            backgroundColor: g || "#3b82f6",
            color: "#ffffff"
          } : {}
        }, me = (pe) => {
          if (!f || !N) return;
          const de = _ && _.length > 0 ? _ : b.filter((X) => X.key !== "__abc_actions__" && X.key !== "__actions__").map((X) => X.key), Ce = de.indexOf(f), ke = de.indexOf(pe);
          if (Ce < 0 || ke < 0 || Ce === ke) return;
          if (A.current) {
            const X = /* @__PURE__ */ new Map();
            A.current.querySelectorAll("[data-col-key]").forEach((te) => {
              const Re = te.dataset.colKey;
              Re && X.set(Re, te.getBoundingClientRect().left);
            }), L.current = X;
          }
          const we = [...de], [Se] = we.splice(Ce, 1);
          we.splice(ke, 0, Se), C.current = !0, y(we), N(we);
        };
        return /* @__PURE__ */ i(
          "th",
          {
            "data-col-key": I.key,
            "data-dragging": q ? "true" : void 0,
            draggable: !!(N && !U && I.key !== "__abc_actions__" && I.key !== "__actions__" && I.key !== "__drag_handle__"),
            onContextMenu: (pe) => T(pe, I),
            onDragStart: (pe) => {
              const de = b.filter((Ce) => Ce.key !== "__abc_actions__" && Ce.key !== "__actions__").map((Ce) => Ce.key);
              E.current = de, C.current = !1, D(I.key), y(de), pe.dataTransfer && (pe.dataTransfer.effectAllowed = "move");
            },
            onDragOver: (pe) => {
              if (!f || f === I.key || U || I.key === "__abc_actions__" || I.key === "__actions__" || !N)
                return;
              pe.preventDefault();
              const de = _ && _.length > 0 ? _ : b.filter((Se) => Se.key !== "__abc_actions__" && Se.key !== "__actions__").map((Se) => Se.key), Ce = de.indexOf(f), ke = de.indexOf(I.key);
              if (Ce < 0 || ke < 0 || Ce === ke) return;
              const we = pe.currentTarget.getBoundingClientRect();
              we.width > 0 && (Ce < ke && pe.clientX < we.left + we.width * 0.35 || Ce > ke && pe.clientX > we.left + we.width * 0.65) || me(I.key);
            },
            onDrop: () => {
              f && f !== I.key && !C.current && !U && I.key !== "__abc_actions__" && I.key !== "__actions__" && me(I.key), D(null), y(null), E.current = null, C.current = !1;
            },
            onDragEnd: () => {
              D(null), y(null), E.current = null, C.current = !1;
            },
            style: ne,
            className: x(
              "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
              U === "right" ? "overflow-visible" : "overflow-hidden",
              ts[M],
              I.align === "center" && "text-center",
              I.align === "right" && "text-right",
              U === "left" && "sticky z-30",
              U === "right" && "sticky z-30",
              q && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
              I.key === a.lastLeftKey && n.left && "shadow-[3px_0_6px_-2px_rgba(15,23,42,0.14)]",
              I.key === a.firstRightKey && n.right && "shadow-[-3px_0_6px_-2px_rgba(15,23,42,0.14)]"
            ),
            children: [
              ye && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 left-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
              G && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 right-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: x(
                    "flex min-w-0 items-center gap-1",
                    I.align === "right" && "justify-end",
                    I.align === "center" && "justify-center"
                  ),
                  children: [
                    /* @__PURE__ */ i(
                      "span",
                      {
                        className: x(
                          "inline-flex min-w-0 items-center gap-1",
                          K && (V ? "cursor-pointer opacity-95 hover:opacity-100" : "cursor-pointer hover:text-[var(--abc-primary)]")
                        ),
                        onClick: () => R(I),
                        children: [
                          N && !U && I.key !== "__abc_actions__" && I.key !== "__actions__" && I.key !== "__drag_handle__" && /* @__PURE__ */ e(
                            vn,
                            {
                              className: x(
                                "h-3 w-3 shrink-0 -ml-0.5 cursor-grab opacity-0 transition-opacity group-hover:opacity-100",
                                V ? "text-white/80" : "text-[var(--abc-fg-placeholder)]"
                              )
                            }
                          ),
                          /* @__PURE__ */ e(
                            "span",
                            {
                              className: "min-w-0 truncate whitespace-nowrap",
                              title: Z ? I.title : void 0,
                              children: Z || I.title
                            }
                          ),
                          I.tooltip && /* @__PURE__ */ e(Ut, { content: I.tooltip, children: /* @__PURE__ */ e(
                            "span",
                            {
                              onClick: (pe) => pe.stopPropagation(),
                              className: x(
                                "inline-flex shrink-0",
                                V ? "text-white/85 hover:text-white" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                              ),
                              children: /* @__PURE__ */ e(Jr, { className: "h-3 w-3" })
                            }
                          ) }),
                          K && /* @__PURE__ */ e(
                            "span",
                            {
                              className: x(
                                "inline-flex shrink-0",
                                V ? "text-white" : "text-[var(--abc-fg-muted)]"
                              ),
                              children: ee === "asc" ? /* @__PURE__ */ e(
                                ms,
                                {
                                  className: x(
                                    "h-3 w-3",
                                    V ? "text-white" : "text-[var(--abc-primary)]"
                                  )
                                }
                              ) : ee === "desc" ? /* @__PURE__ */ e(
                                fs,
                                {
                                  className: x(
                                    "h-3 w-3",
                                    V ? "text-white" : "text-[var(--abc-primary)]"
                                  )
                                }
                              ) : /* @__PURE__ */ e(Xo, { className: "h-3 w-3 opacity-55" })
                            }
                          )
                        ]
                      }
                    ),
                    Ie && /* @__PURE__ */ e(
                      "span",
                      {
                        "data-header-filter": "",
                        onClick: (pe) => pe.stopPropagation(),
                        className: "inline-flex shrink-0 items-center",
                        children: Ie
                      }
                    )
                  ]
                }
              ),
              O && (U === "right" ? /* @__PURE__ */ e(
                "span",
                {
                  role: "separator",
                  "aria-orientation": "vertical",
                  "aria-label": `拖拽调节 ${I.title} 列宽`,
                  onMouseDown: (pe) => P(pe, I, "left"),
                  className: "absolute top-0 bottom-0 -left-1 z-30 w-2.5 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                }
              ) : /* @__PURE__ */ e(
                "span",
                {
                  role: "separator",
                  "aria-orientation": "vertical",
                  "aria-label": `拖拽调节 ${I.title} 列宽`,
                  onMouseDown: (pe) => P(pe, I, "right"),
                  className: "absolute top-0 right-0 bottom-0 z-20 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                }
              ))
            ]
          },
          I.key
        );
      })
    ] }),
    S && /* @__PURE__ */ i("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
      r && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2.5 py-1.5" }),
      c && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
      b.map((I) => {
        const z = u(I);
        return /* @__PURE__ */ e(
          "th",
          {
            style: {
              ...z === "left" ? { left: `${a.leftOffsets[I.key] ?? 0}px` } : {},
              ...z === "right" ? { right: `${a.rightOffsets[I.key] ?? 0}px` } : {}
            },
            className: x(
              "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
              z === "left" && "sticky z-20",
              z === "right" && "sticky z-20"
            ),
            children: I.filterable ? I.filterType === "select" && I.filterOptions ? /* @__PURE__ */ e(
              sr,
              {
                size: "xs",
                allowClear: !0,
                placeholder: "全部",
                options: I.filterOptions,
                value: B[I.key] ?? "",
                onChange: (H) => j == null ? void 0 : j(I.key, H)
              }
            ) : /* @__PURE__ */ e(
              yt,
              {
                size: "xs",
                allowClear: !0,
                placeholder: `筛选${I.title}`,
                value: B[I.key] ?? "",
                onChange: (H) => j == null ? void 0 : j(I.key, H.target.value)
              }
            ) : null
          },
          `${I.key}_filter`
        );
      })
    ] })
  ] });
}
function Pf(t) {
  const {
    columns: r,
    data: a,
    dataSource: n,
    rowKey: s = "id",
    loading: o = !1,
    density: d = "default",
    selectedKeys: c,
    onSelectionChange: b,
    rowSelection: l,
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
    allColumns: _,
    hiddenColumnKeys: A = [],
    onToggleColumnVisible: L,
    columnWidths: C = {},
    onColumnResize: y,
    resizable: T,
    motion: E,
    columnFixed: D = {},
    onColumnPin: M,
    onColumnHide: R,
    onResetColumns: O,
    onColumnReorder: P,
    expandable: S,
    treeData: B = !1,
    rowDraggable: j,
    draggable: I,
    onRowDragEnd: z,
    onDragEnd: H,
    onRowView: U,
    activeRowKey: K,
    onRowClick: ee,
    onRow: q,
    onEmptyReset: V,
    maxHeight: Z,
    ariaLabel: oe = "数据表格",
    emptyText: F = "暂无符合条件的数据",
    className: G
  } = t, ye = a ?? n ?? [], Ie = !!(j ?? I), ne = ce(() => {
    if (z) return z;
    if (H)
      return (W, Y) => H(String(W), String(Y));
  }, [z, H]), me = Me(E), pe = be(null), de = be(null), [Ce, ke] = $(null), [we, Se] = $(null), X = be(null), te = be(!1), Re = be(null), [qe, Xe] = $({}), [Je, ot] = $(0), [rt, jt] = $({ left: !1, right: !1 }), [Pt, mt] = $(!1), [Fe, De] = $(null), _t = ce(
    () => ({ ...qe, ...C }),
    [qe, C]
  ), at = T ?? !!y, Dt = (W, Y) => {
    Xe((ue) => ({ ...ue, [W]: Y })), y == null || y(W, Y);
  }, it = () => {
    const W = pe.current;
    if (!W) return;
    const Y = W.scrollLeft > 1, ue = W.scrollWidth - W.clientWidth - W.scrollLeft > 1;
    jt((ae) => ae.left === Y && ae.right === ue ? ae : { left: Y, right: ue });
  };
  Na(() => {
    const W = pe.current;
    if (!W) return;
    const Y = () => {
      W.clientWidth > 0 && ot(W.clientWidth), it();
    };
    if (Y(), typeof ResizeObserver > "u") return;
    const ue = new ResizeObserver((ae) => {
      var xe, Ee;
      const ve = (Ee = (xe = ae[0]) == null ? void 0 : xe.contentRect) == null ? void 0 : Ee.width;
      typeof ve == "number" && ve > 0 ? ot(Math.floor(ve)) : Y(), it();
    });
    return ue.observe(W), () => ue.disconnect();
  }, []);
  const ut = (W, Y) => typeof s == "function" ? s(W) : (W == null ? void 0 : W[s]) ?? Y, At = (W) => W.key in D ? D[W.key] ?? void 0 : W.fixed, pt = ce(() => {
    const W = we && we.length > 0 ? [...r].sort((ve, xe) => {
      const Ee = we.indexOf(ve.key), Ge = we.indexOf(xe.key);
      return Ee === -1 && Ge === -1 ? 0 : Ee === -1 ? 1 : Ge === -1 ? -1 : Ee - Ge;
    }) : r, Y = [], ue = [], ae = [];
    for (const ve of W) {
      const xe = At(ve);
      xe === "left" ? Y.push(ve) : xe === "right" ? ae.push(ve) : ue.push(ve);
    }
    return [...Y, ...ue, ...ae];
  }, [r, D, we]), lt = c ?? (l == null ? void 0 : l.selectedRowKeys), Nt = b ?? (l == null ? void 0 : l.onChange), Ze = Array.isArray(lt) && typeof Nt == "function", tt = !!S, Tt = (S == null ? void 0 : S.childrenColumnName) || "children", J = (S == null ? void 0 : S.indentSize) ?? 18, le = (W) => {
    const Y = [], ue = (ae) => {
      ae.forEach((ve, xe) => {
        const Ee = ut(ve, xe), Ge = ve == null ? void 0 : ve[Tt], gt = Array.isArray(Ge) && Ge.length > 0;
        (gt || S != null && S.expandedRowRender && (!S.rowExpandable || S.rowExpandable(ve))) && Y.push(Ee), gt && ue(Ge);
      });
    };
    return ue(W), Array.from(new Set(Y));
  }, Le = ce(() => S != null && S.defaultExpandAllRows ? le(ye) : [], []), [Pe, ct] = lr({
    value: S == null ? void 0 : S.expandedRowKeys,
    defaultValue: Le,
    onChange: S == null ? void 0 : S.onExpandedRowsChange
  }), nt = be(Le.length > 0);
  ge(() => {
    if (!(S != null && S.defaultExpandAllRows) || (S == null ? void 0 : S.expandedRowKeys) !== void 0 || nt.current || ye.length === 0)
      return;
    const W = le(ye);
    W.length > 0 && (nt.current = !0, ct(W));
  }, [S == null ? void 0 : S.defaultExpandAllRows, S == null ? void 0 : S.expandedRowKeys, ye, Tt]);
  const kt = (W, Y) => {
    var ae;
    const ue = Pe.includes(W);
    ct(
      ue ? Pe.filter((ve) => ve !== W) : [...Pe, W]
    ), Y && ((ae = S == null ? void 0 : S.onExpand) == null || ae.call(S, !ue, Y));
  }, bt = ce(() => {
    const W = [], Y = (ue, ae) => {
      ue.forEach((ve, xe) => {
        var vt;
        const Ee = ut(ve, xe), Ge = Array.isArray(ve == null ? void 0 : ve[Tt]) ? ve[Tt] : [], gt = Ge.length > 0 || !!(B && ((vt = S == null ? void 0 : S.rowExpandable) != null && vt.call(S, ve)));
        W.push({ record: ve, key: Ee, rowIdx: xe, depth: ae, hasTreeChildren: gt }), Ge.length > 0 && Pe.includes(Ee) && Y(Ge, ae + 1);
      });
    };
    return Y(ye, 0), W;
  }, [ye, Pe, s, Tt, B, S == null ? void 0 : S.rowExpandable]), Yt = ce(() => {
    const W = (Ze ? 44 : 0) + (tt ? 40 : 0), Y = {};
    let ue = 0;
    for (const Ge of pt) {
      const gt = Math.max(120, Array.from(Ge.title || "").length * 14 + 76), vt = _t[Ge.key] ?? Mf(Ge.width, gt);
      Y[Ge.key] = vt, ue += vt;
    }
    const ae = { ...Y }, ve = Je, xe = ve > W + ue ? ve - (W + ue) : 0;
    if (xe > 0) {
      const Ge = (ht) => ht.key === "__abc_actions__" || ht.key === "__actions__" || ht.key === "__drag_handle__" || ht.key in _t || !!At(ht), gt = pt.filter((ht) => !Ge(ht)), vt = pt.filter(
        (ht) => ht.key !== "__abc_actions__" && ht.key !== "__actions__" && ht.key !== "__drag_handle__"
      ), Lt = gt.length > 0 ? gt : vt;
      if (Lt.length > 0) {
        const ht = Lt.reduce(($t, Ht) => $t + Y[Ht.key], 0) || Lt.length;
        let Xt = 0;
        Lt.forEach(($t, Ht) => {
          const Lr = Ht === Lt.length - 1 ? xe - Xt : Math.floor(xe * Y[$t.key] / ht);
          Xt += Lr, ae[$t.key] = Y[$t.key] + Math.max(0, Lr);
        });
      }
    }
    const Ee = W + pt.reduce((Ge, gt) => Ge + (ae[gt.key] ?? 150), 0);
    return {
      resolvedWidths: ae,
      resolvedTableWidth: ve > 0 ? Math.max(ve, Ee) : void 0
    };
  }, [pt, _t, D, Je, Ze, tt]), Ot = ce(() => {
    const W = {}, Y = {};
    let ue = "", ae = "", ve = (Ze ? 44 : 0) + (tt ? 40 : 0);
    for (const Ee of pt)
      At(Ee) === "left" && (W[Ee.key] = ve, ve += Yt.resolvedWidths[Ee.key] ?? 150, ue = Ee.key);
    let xe = 0;
    for (let Ee = pt.length - 1; Ee >= 0; Ee--) {
      const Ge = pt[Ee];
      At(Ge) === "right" && (Y[Ge.key] = xe, xe += Yt.resolvedWidths[Ge.key] ?? 150, ae = Ge.key);
    }
    return {
      leftOffsets: W,
      rightOffsets: Y,
      lastLeftKey: ue,
      firstRightKey: ae,
      hasAnyLeftFixed: !!ue
    };
  }, [pt, Yt, D, Ze, tt]);
  ge(() => {
    it();
  }, [Yt.resolvedTableWidth, ye.length]);
  const Rt = ce(
    () => bt.filter(
      (W) => {
        var Y, ue;
        return !((ue = (Y = l == null ? void 0 : l.getCheckboxProps) == null ? void 0 : Y.call(l, W.record)) != null && ue.disabled);
      }
    ),
    [bt, l]
  ), se = ce(
    () => Rt.map((W) => W.key),
    [Rt]
  ), Ve = Ze && se.length > 0 && se.every((W) => lt.includes(W)), Qe = Ze && !Ve && se.some((W) => lt.includes(W)), st = (W) => {
    if (!Ze) return;
    if (Qe ? !0 : W) {
      const ue = Array.from(/* @__PURE__ */ new Set([...lt, ...se]));
      Nt(
        ue,
        bt.filter((ae) => ue.includes(ae.key)).map((ae) => ae.record)
      );
    } else {
      const ue = lt.filter((ae) => !se.includes(ae));
      Nt(ue, []);
    }
  }, et = (W) => {
    if (!Ze) return;
    const ue = lt.includes(W) ? lt.filter((ae) => ae !== W) : [...lt, W];
    Nt(
      ue,
      bt.filter((ae) => ue.includes(ae.key)).map((ae) => ae.record)
    );
  }, Et = (W, Y, ue = "right") => {
    if (!at) return;
    W.preventDefault(), W.stopPropagation();
    const ae = W.clientX, ve = W.currentTarget.parentElement, xe = _t[Y.key] ?? (typeof Y.width == "number" ? Y.width : void 0) ?? Yt.resolvedWidths[Y.key] ?? (ve == null ? void 0 : ve.offsetWidth) ?? 140, Ee = Y.key === "__abc_actions__" ? 80 : 72, Ge = typeof document < "u" ? document.body.style.cursor : "", gt = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const vt = (ht) => {
      const Xt = ht.clientX - ae, $t = ue === "left" ? Math.max(Ee, Math.round(xe - Xt)) : Math.max(Ee, Math.round(xe + Xt));
      Dt(Y.key, $t);
    }, Lt = () => {
      typeof document < "u" && (document.body.style.cursor = Ge, document.body.style.userSelect = gt), window.removeEventListener("mousemove", vt), window.removeEventListener("mouseup", Lt);
    };
    window.addEventListener("mousemove", vt), window.addEventListener("mouseup", Lt);
  };
  ge(() => {
    if (!Ce) return;
    const W = (Y) => {
      if (Y.key === "Escape") {
        const ue = X.current;
        ke(null), Se(null), X.current = null, Re.current = null, te.current = !1, ue && P && P(ue);
      }
    };
    return document.addEventListener("keydown", W, !0), () => document.removeEventListener("keydown", W, !0);
  }, [Ce, P]);
  const Wt = pt.map((W) => W.key).join("|");
  Na(() => {
    const W = Re.current;
    if (!W) return;
    Re.current = null;
    const Y = pe.current;
    if (!Y || me === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ae = me === "subtle" ? 140 : 220, ve = "cubic-bezier(0.22, 1, 0.36, 1)";
    Y.querySelectorAll("[data-col-key]").forEach((xe) => {
      const Ee = xe.dataset.colKey;
      if (!Ee) return;
      const Ge = W.get(Ee);
      if (Ge === void 0) return;
      const gt = xe.getBoundingClientRect().left, vt = Ge - gt;
      if (Math.abs(vt) <= 1) return;
      typeof xe.animate == "function" && xe.animate([{ translate: `${vt}px 0` }, { translate: "0 0" }], {
        duration: ae,
        easing: ve
      });
      const Lt = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(Ee) : Ee, ht = Y.querySelectorAll(`[data-col-cell="${Lt}"]`), Xt = Math.min(ht.length, 20);
      for (let $t = 0; $t < Xt; $t++) {
        const Ht = ht[$t];
        typeof Ht.animate == "function" && Ht.animate([{ translate: `${vt}px 0` }, { translate: "0 0" }], {
          duration: ae,
          easing: ve
        });
      }
    });
  }, [Wt, me]);
  const Ft = (W) => !!(W.sortable || W.sorter), ze = (W) => {
    if (!Ft(W) || !m) return;
    const Y = (u == null ? void 0 : u.key) === W.key ? u.direction : null, ue = Y === null ? "asc" : Y === "asc" ? "desc" : null;
    m(W.key, ue);
  };
  ge(() => {
    if (!Fe) return;
    const W = (ue) => {
      var ae;
      ue && ue.type === "mousedown" && ((ae = de.current) != null && ae.contains(ue.target)) || De(null);
    }, Y = (ue) => {
      ue.key === "Escape" && De(null);
    };
    return document.addEventListener("mousedown", W), document.addEventListener("keydown", Y, !0), window.addEventListener("scroll", W, !0), () => {
      document.removeEventListener("mousedown", W), document.removeEventListener("keydown", Y, !0), window.removeEventListener("scroll", W, !0);
    };
  }, [Fe]);
  const tr = (W, Y) => {
    if (Y.key === "__abc_actions__" || Y.key === "__actions__" || Y.key === "__drag_handle__" || !!!(Ft(Y) && m || M || P || R || L || N || O)) return;
    W.preventDefault(), mt(!1);
    const ae = typeof window < "u" ? window.innerWidth : 1024, ve = typeof window < "u" ? window.innerHeight : 768;
    De({
      col: Y,
      x: Math.max(8, Math.min(W.clientX, ae - 208 - 8)),
      y: Math.max(8, Math.min(W.clientY, ve - 340 - 8))
    });
  }, qt = ce(
    () => pt.filter(
      (W) => W.key !== "__abc_actions__" && W.key !== "__actions__" && W.key !== "__drag_handle__"
    ),
    [pt]
  ), mr = ce(
    () => (_ ?? qt).filter(
      (W) => !W.hideInTable && W.key !== "__abc_actions__" && W.key !== "__actions__" && W.key !== "__drag_handle__"
    ),
    [_, qt]
  ), vr = (W, Y) => {
    if (!P) return;
    const ue = qt.map((Ee) => Ee.key), ae = ue.indexOf(W);
    if (ae < 0) return;
    const ve = Y === "left" ? ae - 1 : ae + 1;
    if (ve < 0 || ve >= ue.length) return;
    const xe = [...ue];
    [xe[ae], xe[ve]] = [xe[ve], xe[ae]], P(xe), De(null);
  }, ie = pt.length + (Ze ? 1 : 0) + (tt ? 1 : 0), he = Fe ? xn(pe.current) : null, Te = !!(p && pt.some((W) => W.filterable));
  return {
    wrapperRef: pe,
    contextMenuRef: de,
    prevColRectsRef: Re,
    hasLiveSwappedRef: te,
    preDragOrderRef: X,
    resolvedMotion: me,
    liveDragOrder: we,
    setLiveDragOrder: Se,
    draggingKey: Ce,
    setDraggingKey: ke,
    contextMenu: Fe,
    setContextMenu: De,
    visibilitySubmenuOpen: Pt,
    setVisibilitySubmenuOpen: mt,
    scrollEdge: rt,
    isResizable: at,
    resolveKey: ut,
    getEffectiveFixed: At,
    orderedColumns: pt,
    effectiveSelectedKeys: lt,
    selectable: Ze,
    hasExpandColumn: tt,
    indentPx: J,
    flattenedRows: bt,
    colWidthMeta: Yt,
    stickyMeta: Ot,
    allSelected: Ve,
    someSelected: Qe,
    toggleAll: st,
    toggleOne: et,
    startResizeColumn: Et,
    isColSortable: Ft,
    handleSortClick: ze,
    handleHeaderContextMenu: tr,
    movableColumns: qt,
    submenuConfigurableCols: mr,
    handleMoveColumnStep: vr,
    totalColSpan: ie,
    portalTarget: he,
    hasInlineHeaderFilterRow: Te,
    expandedKeys: Pe,
    toggleExpandRow: kt,
    columns: r,
    allColumns: _,
    loading: o,
    emptyText: F,
    onEmptyReset: V,
    rowKey: s,
    rowSelection: l,
    activeRowKey: K,
    treeData: B,
    expandable: S,
    onRow: q,
    onRowClick: ee,
    onRowView: U,
    isRowDraggable: Ie,
    emitRowDragEnd: ne,
    updateScrollEdge: it,
    maxHeight: Z,
    ariaLabel: oe,
    onColumnReorder: P,
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
    onColumnPin: M,
    onColumnHide: R,
    onToggleColumnVisible: L,
    hiddenColumnKeys: A,
    onResetColumns: O,
    density: d,
    scrollY,
    className: G
  };
}
function Bi(t) {
  const r = Pf(t), {
    wrapperRef: a,
    className: n,
    colWidthMeta: s,
    resolvedMotion: o,
    loading: d,
    flattenedRows: c,
    ariaLabel: b,
    updateScrollEdge: l,
    maxHeight: u,
    selectable: m,
    hasExpandColumn: p,
    orderedColumns: f
  } = r;
  return /* @__PURE__ */ i("div", { className: "relative", children: [
    d && c.length > 0 && /* @__PURE__ */ e(
      "div",
      {
        "aria-live": "polite",
        "aria-busy": "true",
        className: "pointer-events-auto absolute inset-0 z-30 flex items-center justify-center rounded-[var(--abc-radius-lg)] bg-[var(--abc-bg-surface)]/60 backdrop-blur-[1px] transition-opacity",
        children: /* @__PURE__ */ e(or, { className: "h-6 w-6 animate-spin text-[var(--abc-primary)]" })
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
        onScroll: l,
        style: u !== void 0 ? { maxHeight: typeof u == "number" ? `${u}px` : u } : void 0,
        className: x(
          "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          n
        ),
        children: /* @__PURE__ */ i(
          "table",
          {
            style: {
              width: s.resolvedTableWidth ? `${s.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ i("colgroup", { children: [
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
              /* @__PURE__ */ e(Bf, { state: r }),
              /* @__PURE__ */ e(Df, { state: r })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ e(Lf, { state: r })
  ] });
}
const Pi = Ne.forwardRef(
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
Pi.displayName = "Table";
const zi = Ne.forwardRef(
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
zi.displayName = "TableHeader";
const ji = Ne.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: x("[&_tr:last-child]:border-0", t), ...r }));
ji.displayName = "TableBody";
const zf = Ne.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: x("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
zf.displayName = "TableFooter";
const wa = Ne.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
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
const Fi = Ne.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
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
Fi.displayName = "TableHead";
const Xa = Ne.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: x("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
Xa.displayName = "TableCell";
const jf = Ne.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: x("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
jf.displayName = "TableCaption";
const On = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
}, So = {
  compact: "px-3 py-2 text-xs",
  xs: "px-3 py-2 text-xs",
  sm: "px-3.5 py-2.5 text-sm",
  comfortable: "px-3.5 py-2.5 text-sm",
  md: "px-4 py-3 text-sm",
  relaxed: "px-4 py-3.5 text-sm",
  lg: "px-4 py-3.5 text-sm"
};
function Ff(t) {
  if (typeof t == "number") return { width: `${t}px` };
  if (typeof t == "string" && !t.includes("w-")) return { width: t };
}
function Co(t) {
  if (typeof t == "string" && t.includes("w-")) return t;
}
function Of({
  columns: t,
  data: r,
  rows: a,
  keyExtractor: n,
  rowKey: s,
  emptyNode: o,
  emptyTitle: d = "暂无数据",
  emptyDescription: c,
  emptyAction: b,
  loading: l = !1,
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
  caption: _,
  className: A
}) {
  const L = r ?? a ?? [], C = n ?? s ?? ((D, M) => M), y = So[g] ?? So.comfortable, T = f ? "overflow-hidden rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs" : "overflow-hidden", E = () => o ?? /* @__PURE__ */ e(
    fi,
    {
      title: typeof d == "string" ? d : "暂无数据",
      description: typeof c == "string" ? c : void 0,
      action: b,
      compact: !0
    }
  );
  return !l && L.length === 0 && !p ? /* @__PURE__ */ i("div", { className: x(T, "p-4", A), children: [
    E(),
    N ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(uo, { ...N }) }) : null
  ] }) : /* @__PURE__ */ i("div", { className: x(T, A), "aria-busy": l || void 0, children: [
    l ? /* @__PURE__ */ e("span", { className: "sr-only", role: "status", "aria-live": "polite", children: m }) : null,
    /* @__PURE__ */ e(
      "div",
      {
        role: "region",
        "aria-label": w,
        tabIndex: 0,
        className: "w-full overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
        children: /* @__PURE__ */ i(Pi, { children: [
          _ ? /* @__PURE__ */ e("caption", { className: "sr-only", children: _ }) : null,
          /* @__PURE__ */ e(
            zi,
            {
              className: x(
                k && "sticky top-0 z-10 bg-[var(--abc-bg-subtle)]/95 backdrop-blur-sm"
              ),
              children: /* @__PURE__ */ e(wa, { className: "hover:bg-transparent", children: t.map((D) => /* @__PURE__ */ e(
                Fi,
                {
                  style: {
                    ...Ff(D.width),
                    ...typeof D.minWidth == "number" ? { minWidth: `${D.minWidth}px` } : typeof D.minWidth == "string" && !D.minWidth.includes("w-") ? { minWidth: D.minWidth } : void 0
                  },
                  className: x(
                    y,
                    On[D.align ?? "left"],
                    Co(D.width),
                    Co(D.minWidth),
                    D.headerClassName
                  ),
                  children: D.header ?? D.title
                },
                D.key
              )) })
            }
          ),
          /* @__PURE__ */ e(ji, { children: l ? Array.from({ length: Math.max(1, u) }).map((D, M) => /* @__PURE__ */ e(wa, { className: "hover:bg-transparent", children: t.map((R, O) => /* @__PURE__ */ e(
            Xa,
            {
              className: x(y, On[R.align ?? "left"]),
              children: /* @__PURE__ */ e(
                Bt,
                {
                  className: x(
                    "h-4",
                    O === 0 ? "w-3/4" : O === t.length - 1 ? "ml-auto w-14" : "w-2/3"
                  )
                }
              )
            },
            `${R.key}-skeleton-${O}`
          )) }, `skeleton-${M}`)) : L.length === 0 ? /* @__PURE__ */ e(wa, { className: "hover:bg-transparent", children: /* @__PURE__ */ e(Xa, { colSpan: Math.max(1, t.length), className: "p-6 text-center", children: E() }) }) : L.map((D, M) => {
            const R = C(D, M), O = v != null && R === v, P = !!h;
            return /* @__PURE__ */ e(
              wa,
              {
                "data-state": O ? "selected" : void 0,
                "aria-selected": P ? O : void 0,
                tabIndex: P ? 0 : void 0,
                onClick: P ? () => h == null ? void 0 : h(D) : void 0,
                onKeyDown: P ? (S) => {
                  (S.key === "Enter" || S.key === " ") && (S.preventDefault(), h == null || h(D));
                } : void 0,
                className: x(
                  P && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                  O && "bg-[var(--abc-primary-soft)]/50"
                ),
                children: t.map((S) => {
                  const B = S.render ? S.render(D, M) : S.cell ? S.cell(D, M) : D[S.key];
                  return /* @__PURE__ */ e(
                    Xa,
                    {
                      className: x(
                        y,
                        On[S.align ?? "left"],
                        S.mono && "font-mono text-xs",
                        S.className,
                        S.cellClassName
                      ),
                      children: B
                    },
                    S.key
                  );
                })
              },
              R
            );
          }) })
        ] })
      }
    ),
    N ? /* @__PURE__ */ e("div", { className: "border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-4 py-2.5", children: /* @__PURE__ */ e(uo, { ...N }) }) : null
  ] });
}
Of.displayName = "DataTable";
const $f = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, Hf = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, Kf = {
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
}, $r = {
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
}, wr = "transition-[background-color,color,box-shadow,transform] duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-active)] motion-safe:enabled:active:scale-[var(--abc-press-scale)]";
function Nr(t, r) {
  var a;
  return t.path && (r === t.path || r.startsWith(`${t.path}/`)) ? !0 : !!((a = t.children) != null && a.some((n) => Nr(n, r)));
}
function Oi(t, r, a = []) {
  var n;
  for (const s of t) {
    const o = [...a, s];
    if (s.path === r) return o;
    if ((n = s.children) != null && n.length) {
      const d = Oi(s.children, r, o);
      if (d.length > 0) return d;
    }
  }
  return [];
}
function gr(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(hr, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const Rs = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: o = 0 }) => {
  const d = $r[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: x(
        "space-y-0.5",
        o > 0 && x("border-l border-[var(--abc-border)]", d.flyoutSubIndent)
      ),
      children: t.map((c) => {
        const b = !!(c.children && c.children.length > 0), l = c.path === r, u = b && Nr(c, r);
        return b ? /* @__PURE__ */ i("div", { className: "py-0.5", children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: x(
                "flex items-center gap-1.5 font-semibold select-none",
                d.flyoutHeadingText,
                u ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
              ),
              children: [
                gr(c.icon, a, d.flyoutHeadingIcon),
                /* @__PURE__ */ e("span", { className: "truncate", children: c.label })
              ]
            }
          ),
          /* @__PURE__ */ e(
            Rs,
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
            className: x(
              "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
              wr,
              d.flyoutItem,
              l ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
              c.disabled && "opacity-45 cursor-not-allowed"
            ),
            children: [
              gr(c.icon, a, d.flyoutIcon),
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
}, qr = ({ brand: t, collapsed: r = !1, tone: a = "light", size: n, className: s }) => {
  const o = Be(n, "sm"), d = $r[o], c = a === "dark", b = ce(() => t.logo ? typeof t.logo == "string" ? Ii(t.logo) ? /* @__PURE__ */ e(
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
  return /* @__PURE__ */ i(
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
        /* @__PURE__ */ i(
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
              !r && /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
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
            onClick: (l) => {
              var u;
              l.stopPropagation(), (u = t.onEditBrand) == null || u.call(t);
            },
            className: x(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              c ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(au, { className: d.brandEditIcon })
          }
        )
      ]
    }
  );
}, Wf = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = $r[s], [b, l] = $(!1), { isMounted: u, isVisible: m } = Dr(b, o === "none" ? 0 : 140), p = be(null), f = be(null), h = be(null), v = It(), w = Nr(t, r), { style: k, actualSide: g, portalContainer: N } = ta({
    open: u,
    triggerRef: p,
    floatingRef: f,
    placement: "rightStart",
    offset: 8
  }), _ = fe(() => {
    h.current !== null && typeof window < "u" && (window.clearTimeout(h.current), h.current = null);
  }, []);
  ge(() => () => _(), [_]);
  const A = () => {
    _(), l(!0);
  }, L = () => {
    _(), typeof window < "u" && (h.current = window.setTimeout(() => {
      l(!1), h.current = null;
    }, 140));
  };
  return ge(() => {
    if (!b) return;
    const C = (T) => {
      var D, M;
      const E = T.target;
      (D = p.current) != null && D.contains(E) || (M = f.current) != null && M.contains(E) || l(!1);
    }, y = (T) => {
      var E;
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), l(!1), (E = p.current) == null || E.focus());
    };
    return document.addEventListener("mousedown", C), document.addEventListener("keydown", y, !0), () => {
      document.removeEventListener("mousedown", C), document.removeEventListener("keydown", y, !0);
    };
  }, [b]), /* @__PURE__ */ i(Ke, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: A, onMouseLeave: L, children: /* @__PURE__ */ e(
      "button",
      {
        ref: p,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": b,
        "aria-haspopup": "menu",
        "aria-controls": b ? v : void 0,
        onClick: () => l((C) => !C),
        onKeyDown: (C) => {
          (C.key === "ArrowRight" || C.key === "ArrowDown") && (C.preventDefault(), l(!0), window.requestAnimationFrame(() => {
            var y, T;
            (T = (y = f.current) == null ? void 0 : y.querySelector('[role="menuitem"]:not(:disabled)')) == null || T.focus();
          }));
        },
        className: x(
          "flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer",
          wr,
          c.collapsedBtn,
          w ? a ? "bg-white/12 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : a ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: gr(t.icon ?? "folder", n, c.collapsedIcon)
      }
    ) }),
    u && N && cr(
      /* @__PURE__ */ i(
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
          onMouseEnter: A,
          onMouseLeave: L,
          onKeyDown: (C) => {
            var E, D, M;
            const y = Array.from(
              ((E = f.current) == null ? void 0 : E.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const T = y.indexOf(document.activeElement);
            C.key === "ArrowDown" ? (C.preventDefault(), (D = y[(T + 1) % y.length]) == null || D.focus()) : C.key === "ArrowUp" && (C.preventDefault(), (M = y[(T - 1 + y.length) % y.length]) == null || M.focus());
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
              Rs,
              {
                items: t.children ?? [],
                pathname: r,
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
      N
    )
  ] });
}, $n = ({
  brand: t,
  items: r,
  pathname: a,
  collapsed: n = !1,
  accordion: s = !0,
  tone: o = "dark",
  size: d,
  motion: c,
  onNavigate: b,
  className: l
}) => {
  const { iconRegistry: u } = Mt(), m = Be(d, "sm"), p = Me(c), f = $r[m], h = o === "dark", [v, w] = $(
    () => r.filter((g) => {
      var N;
      return ((N = g.children) == null ? void 0 : N.length) && Nr(g, a);
    }).map((g) => g.key)
  );
  ge(() => {
    const g = r.filter((N) => {
      var _;
      return ((_ = N.children) == null ? void 0 : _.length) && Nr(N, a);
    }).map((N) => N.key);
    g.length > 0 && w(
      (N) => s ? [g[0]] : Array.from(/* @__PURE__ */ new Set([...N, ...g]))
    );
  }, [a, r, s]);
  const k = (g) => {
    w((N) => N.includes(g) ? N.filter((_) => _ !== g) : s ? [g] : [...N, g]);
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
      className: x(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        h ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        l
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: x(
              "flex h-[var(--abc-header-h)] shrink-0 items-center border-b",
              h ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              qr,
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
          const N = !!(g.children && g.children.length > 0), _ = g.path === a, A = Nr(g, a), L = v.includes(g.key);
          if (!N) {
            const C = /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                disabled: g.disabled,
                "aria-label": n ? g.label : void 0,
                onClick: () => g.path && b(g.path, g),
                className: x(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  wr,
                  f.itemButton,
                  n && x("justify-center px-0", f.collapsedBtn),
                  _ ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : h ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  g.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  gr(g.icon, u, n ? f.collapsedIcon : f.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: g.label }),
                  !n && g.badge !== void 0 && /* @__PURE__ */ e("span", { className: x("rounded-full bg-white/15 font-mono", f.badge), children: g.badge })
                ]
              },
              g.key
            );
            return n ? /* @__PURE__ */ e(
              Ut,
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
            Wf,
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
          ) : /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-expanded": L,
                onClick: () => k(g.key),
                className: x(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  wr,
                  f.itemButton,
                  A ? h ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : h ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  gr(g.icon, u, f.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: g.label }),
                  /* @__PURE__ */ e(
                    er,
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
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: C.disabled,
                          onClick: () => C.path && b(C.path, C),
                          className: x(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            wr,
                            f.subButton,
                            y ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : h ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            C.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            gr(C.icon, u, f.subIcon),
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
}, Vf = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = $r[s], [b, l] = $(!1), { isMounted: u, isVisible: m } = Dr(b, o === "none" ? 0 : 140), p = be(null), f = be(null), h = be(null), v = It(), { style: w, actualSide: k, portalContainer: g } = ta({
    open: u,
    triggerRef: p,
    floatingRef: f,
    placement: "bottomLeft",
    offset: 6
  }), N = fe(() => {
    h.current !== null && typeof window < "u" && (window.clearTimeout(h.current), h.current = null);
  }, []);
  ge(() => () => N(), [N]);
  const _ = () => {
    N(), l(!0);
  }, A = () => {
    N(), typeof window < "u" && (h.current = window.setTimeout(() => {
      l(!1), h.current = null;
    }, 150));
  };
  ge(() => {
    if (!b) return;
    const C = (T) => {
      var D, M;
      const E = T.target;
      (D = p.current) != null && D.contains(E) || (M = f.current) != null && M.contains(E) || l(!1);
    }, y = (T) => {
      var E;
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), l(!1), (E = p.current) == null || E.focus());
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
  return /* @__PURE__ */ i(Ke, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: _,
        onMouseLeave: A,
        className: "relative flex-none",
        children: /* @__PURE__ */ i(
          "button",
          {
            ref: p,
            type: "button",
            "aria-expanded": b,
            "aria-haspopup": "menu",
            "aria-controls": b ? v : void 0,
            onClick: () => l((C) => !C),
            onKeyDown: (C) => {
              C.key === "ArrowDown" && (C.preventDefault(), l(!0), L());
            },
            className: x(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              wr,
              c.topItem,
              a ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : b ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              gr(t.icon, n, c.topIcon),
              /* @__PURE__ */ e("span", { children: t.label }),
              /* @__PURE__ */ e(
                er,
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
          onMouseEnter: _,
          onMouseLeave: A,
          onKeyDown: (C) => {
            var E, D, M, R, O;
            const y = Array.from(
              ((E = f.current) == null ? void 0 : E.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const T = y.indexOf(document.activeElement);
            C.key === "ArrowDown" ? (C.preventDefault(), (D = y[(T + 1) % y.length]) == null || D.focus()) : C.key === "ArrowUp" ? (C.preventDefault(), (M = y[(T - 1 + y.length) % y.length]) == null || M.focus()) : C.key === "Home" ? (C.preventDefault(), (R = y[0]) == null || R.focus()) : C.key === "End" && (C.preventDefault(), (O = y[y.length - 1]) == null || O.focus());
          },
          className: x(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            k === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            c.flyoutPanel,
            o !== "none" && (m ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            Rs,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (C, y) => {
                d(C, y), l(!1);
              }
            }
          )
        }
      ),
      g
    )
  ] });
}, Eo = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: d,
  onNavigate: c
}) => {
  const { iconRegistry: b } = Mt(), l = Be(s, "sm"), u = Me(o), m = $r[l];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": l,
      "data-motion": u,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((p) => {
        var h;
        const f = a ? n === p.key : Nr(p, r);
        return a || !((h = p.children) != null && h.length) ? /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => {
              a && d ? d(p) : p.path && c(p.path, p);
            },
            className: x(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              wr,
              m.topItem,
              f ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              gr(p.icon, b, m.topIcon),
              /* @__PURE__ */ e("span", { children: p.label })
            ]
          },
          p.key
        ) : /* @__PURE__ */ e(
          Vf,
          {
            item: p,
            pathname: r,
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
}, Uf = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: d, onNavigate: c }) => {
  const { iconRegistry: b } = Mt(), l = Be(s, "sm"), u = Me(o), m = $r[l], p = n === "dark", f = ce(
    () => r.find((g) => Nr(g, a)) ?? r[0],
    [r, a]
  ), [h, v] = $((f == null ? void 0 : f.key) ?? "");
  ge(() => {
    f != null && f.key && v(f.key);
  }, [f == null ? void 0 : f.key]);
  const w = r.find((g) => g.key === h) ?? f, k = (w == null ? void 0 : w.children) ?? [];
  return /* @__PURE__ */ i(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": l,
      "data-motion": u,
      className: x("flex h-full shrink-0 select-none", d),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: x(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              p ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(qr, { brand: t, collapsed: !0, tone: n, size: l }) }),
              /* @__PURE__ */ e("div", { className: x("flex w-full flex-1 flex-col items-center overflow-y-auto", m.dualRailWrap), children: r.map((g) => {
                const N = g.key === (w == null ? void 0 : w.key);
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _, A, L;
                      v(g.key), !((_ = g.children) != null && _.length) && g.path ? c(g.path, g) : (L = (A = g.children) == null ? void 0 : A[0]) != null && L.path && c(g.children[0].path, g.children[0]);
                    },
                    className: x(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      wr,
                      m.dualRailItem,
                      N ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : p ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      gr(g.icon ?? "folder", b, m.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: x("truncate", m.dualRailLabelMaxW), children: g.label.slice(0, 4) })
                    ]
                  },
                  g.key
                );
              }) })
            ]
          }
        ),
        k.length > 0 && /* @__PURE__ */ i(
          "div",
          {
            style: { width: "var(--abc-dual-panel-w)" },
            className: "flex h-full flex-col border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)] transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
            children: [
              /* @__PURE__ */ i(
                "div",
                {
                  className: x(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    m.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: x("truncate font-bold text-[var(--abc-fg)]", m.dualPanelTitle), children: w == null ? void 0 : w.label }),
                    /* @__PURE__ */ e(nr, { className: x("text-[var(--abc-fg-muted)]", m.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: x("flex-1 overflow-y-auto", m.dualPanelWrap), children: k.map((g) => {
                const N = g.path === a;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: g.disabled,
                    onClick: () => !g.disabled && g.path && c(g.path, g),
                    className: x(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      wr,
                      m.dualPanelItem,
                      N ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      g.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      gr(g.icon, b, m.dualPanelIcon),
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
}, Gf = {
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
}, Yf = ({
  tabs: t,
  activePath: r,
  variant: a = "card",
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
  var k;
  const { iconRegistry: f } = Mt(), h = Be(n, "sm"), v = Me(s), w = Gf[h];
  return t.length === 0 ? null : /* @__PURE__ */ i(
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
          const N = g.path === r, _ = g.closable !== !1 && !g.pinned, A = a === "pill" ? N ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? N ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : N ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ i(
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
                A
              ),
              children: [
                g.pinned && /* @__PURE__ */ e(Xr, { className: x("shrink-0 opacity-75", w.pinIcon) }),
                g.icon && (typeof g.icon == "string" ? /* @__PURE__ */ e(hr, { name: g.icon, size: w.tabIcon, registry: f }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: g.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: g.title }),
                _ && d && /* @__PURE__ */ e(
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
        /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
          m && /* @__PURE__ */ e(Ut, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => m(r),
              className: x(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                w.actionBtn
              ),
              children: /* @__PURE__ */ e(pn, { className: w.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            Aa,
            {
              items: [
                ...u ? [
                  {
                    key: "pin",
                    label: (k = t.find((g) => g.path === r)) != null && k.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(Xr, { className: "h-3.5 w-3.5" }),
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
                  className: x(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    w.actionBtn
                  ),
                  children: /* @__PURE__ */ e(ls, { className: w.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, qf = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
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
  const f = be(/* @__PURE__ */ new Map()), h = be(0), v = be(/* @__PURE__ */ new Map()), w = (d == null ? void 0 : d[t]) ?? o ?? 0;
  ge(() => {
    const N = s == null ? void 0 : s.current;
    if (!N) return;
    const _ = () => {
      t && v.current.set(t, N.scrollTop);
    };
    return N.addEventListener("scroll", _, { passive: !0 }), () => N.removeEventListener("scroll", _);
  }, [t, s]), Na(() => {
    const N = s == null ? void 0 : s.current;
    N && (r ? N.scrollTop = v.current.get(t) ?? 0 : N.scrollTop = 0);
  }, [t, r, w, s]), ge(() => {
    if (typeof window > "u") return;
    const N = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(N);
  }, [t]);
  const k = (N, _) => b ? /* @__PURE__ */ e(
    vf,
    {
      path: N,
      onReload: l ? () => l(N) : void 0,
      onClose: u ? () => u(N) : void 0,
      onNavigateHome: m,
      children: _
    }
  ) : _;
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
    for (const _ of Array.from(f.current.keys()))
      N.has(_) || (f.current.delete(_), v.current.delete(_));
  }
  h.current += 1;
  const g = f.current.get(t);
  for (f.current.set(t, {
    key: t,
    seed: w,
    lastActiveTick: h.current,
    node: g && g.seed === w ? g.node : p
  }); f.current.size > a; ) {
    let N = null, _ = 1 / 0;
    for (const [A, L] of f.current.entries())
      A !== t && L.lastActiveTick < _ && (_ = L.lastActiveTick, N = A);
    if (N)
      f.current.delete(N), v.current.delete(N);
    else
      break;
  }
  return /* @__PURE__ */ e(Ke, { children: Array.from(f.current.values()).map((N) => {
    const _ = N.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: _ ? "block" : "none" },
        className: x("min-h-full w-full min-w-0", _ && c),
        children: k(N.key, N.node)
      },
      `${N.key}_${N.seed}`
    );
  }) });
}, $i = "abc_cmd_recent_v1", Hi = 5;
function _o() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem($i);
    if (!t) return [];
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function To(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem($i, JSON.stringify(t.slice(0, Hi)));
    } catch {
    }
}
function Ki(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const o = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && a.push(...Ki(s.children, o));
  }
  return a;
}
function Io(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const d = t.slice(0, o), c = t.slice(o, o + a.length), b = t.slice(o + a.length);
  return /* @__PURE__ */ i(Ke, { children: [
    d,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: c }),
    b
  ] });
}
const Xf = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = Mt(), [d, c] = $(""), [b, l] = $("all"), [u, m] = $(0), [p, f] = $(() => _o()), h = be(null), v = be(null);
  ge(() => {
    t ? f(_o()) : (c(""), l("all"), m(0));
  }, [t]);
  const w = ce(() => [
    ...Ki(a).map(({ item: T, trail: E }) => ({
      id: `nav_${T.key}`,
      title: T.label,
      subtitle: `${E}${T.path ? ` · ${T.path}` : ""}`,
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
  ], [a, n, s]), k = ce(() => {
    const y = /* @__PURE__ */ new Set();
    for (const T of w)
      T.group && y.add(T.group);
    return Array.from(y);
  }, [w]), g = ce(() => {
    const y = d.trim(), T = (R) => b !== "all" && b !== "__recent__" && R.group !== b ? !1 : y ? ar(R.title, y) || !!(R.subtitle && ar(R.subtitle, y)) || !!(R.keywords && ar(R.keywords, y)) : !0, E = [];
    if (b === "__recent__") {
      const R = p.map((O) => w.find((P) => P.id === O)).filter((O) => O !== void 0 && T(O));
      return R.length > 0 && E.push({ groupName: "最近访问", isRecent: !0, items: R }), E;
    }
    const D = /* @__PURE__ */ new Set();
    if (!y && b === "all" && p.length > 0) {
      const R = p.map((O) => w.find((P) => P.id === O)).filter((O) => O !== void 0);
      R.length > 0 && (R.forEach((O) => D.add(O.id)), E.push({ groupName: "最近访问", isRecent: !0, items: R }));
    }
    const M = /* @__PURE__ */ new Map();
    for (const R of w) {
      if (D.has(R.id) || !T(R)) continue;
      const O = R.group || "其他", P = M.get(O) ?? [];
      P.push(R), M.set(O, P);
    }
    for (const [R, O] of M.entries())
      O.length > 0 && E.push({ groupName: R, items: O });
    return E;
  }, [w, d, b, p]), N = ce(
    () => g.flatMap((y) => y.items),
    [g]
  );
  ge(() => {
    m(0);
  }, [d, b]), ge(() => {
    var T;
    if (!t || !v.current) return;
    const y = v.current.querySelector(`[data-cmd-idx="${u}"]`);
    (T = y == null ? void 0 : y.scrollIntoView) == null || T.call(y, { block: "nearest" });
  }, [u, t]);
  const _ = (y) => {
    if (!y) return;
    const T = [y.id, ...p.filter((E) => E !== y.id)].slice(
      0,
      Hi
    );
    f(T), To(T), y.onTrigger(), r();
  }, A = () => {
    f([]), To([]), b === "__recent__" && l("all");
  }, L = ce(() => {
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
      children: /* @__PURE__ */ i(
        "div",
        {
          onKeyDown: (y) => {
            if (y.key === "ArrowDown")
              y.preventDefault(), m((T) => N.length ? (T + 1) % N.length : 0);
            else if (y.key === "ArrowUp")
              y.preventDefault(), m(
                (T) => N.length ? (T - 1 + N.length) % N.length : 0
              );
            else if (y.key === "Tab") {
              y.preventDefault();
              const T = L.indexOf(b), E = y.shiftKey ? -1 : 1, D = L[(T + E + L.length) % L.length];
              D && l(D);
            } else y.key === "Enter" && N[u] && (y.preventDefault(), _(N[u]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(zt, { className: "h-4.5 w-4.5" }) }),
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
              /* @__PURE__ */ e(Vr, { className: "shrink-0", children: "ESC" })
            ] }),
            k.length > 0 && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("all"),
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
                p.length > 0 && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("__recent__"),
                    className: x(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      b === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(Za, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                k.map((y) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => l(y),
                    className: x(
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
                  onClick: A,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(kr, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: v, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: N.length === 0 ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(Ta, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ i("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                d,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: g.map((y) => /* @__PURE__ */ i("div", { className: "space-y-1", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5", children: [
                  y.isRecent && /* @__PURE__ */ e(Za, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: y.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: y.items.length })
              ] }),
              y.items.map((T) => {
                C += 1;
                const E = C, D = E === u;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": E,
                    onMouseEnter: () => m(E),
                    onClick: () => _(T),
                    className: x(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      D ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: x(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              D ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: T.icon ? typeof T.icon == "string" ? /* @__PURE__ */ e(hr, { name: T.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: T.icon }) : /* @__PURE__ */ e(zt, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ i("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: x(
                                "truncate text-sm font-semibold",
                                D ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: Io(T.title, d)
                            }
                          ),
                          T.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: Io(T.subtitle, d) })
                        ] })
                      ] }),
                      /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                        T.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: x(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              D ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: T.group
                          }
                        ),
                        D && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Zo, { className: "h-3.5 w-3.5" }) })
                      ] })
                    ]
                  },
                  `${y.isRecent ? "recent" : "std"}_${T.id}`
                );
              })
            ] }, y.groupName)) }) }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 px-5 py-2.5 text-[11px] text-[var(--abc-fg-muted)] select-none", children: [
              /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3.5", children: [
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Vr, { children: /* @__PURE__ */ e(ms, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(Vr, { children: /* @__PURE__ */ e(fs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Vr, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(Vr, { children: "Tab" }),
                  /* @__PURE__ */ e("span", { children: "切换分类" })
                ] })
              ] }),
              /* @__PURE__ */ i("span", { className: "font-mono", children: [
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
}, Gh = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: d,
  className: c,
  children: b
}) => /* @__PURE__ */ i("div", { className: x("flex min-h-full flex-col gap-4", d && "pb-16", c), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((l, u) => {
      const m = u === n.length - 1;
      return /* @__PURE__ */ i(dt.Fragment, { children: [
        u > 0 && /* @__PURE__ */ e(nr, { className: "h-3 w-3 opacity-60" }),
        l.onClick && !m ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: l.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: l.label
          }
        ) : /* @__PURE__ */ e("span", { className: x(m && "font-medium text-[var(--abc-fg-secondary)]"), children: l.label })
      ] }, u);
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
  d && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: d })
] }), Zf = ({
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
}) => r === "centered" ? /* @__PURE__ */ i(
  "div",
  {
    className: x(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      b
    ),
    children: [
      /* @__PURE__ */ e(mo, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(qr, { brand: t }) }),
      /* @__PURE__ */ i("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(bo, {}),
        c
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: d })
    ]
  }
) : /* @__PURE__ */ i(
  "div",
  {
    className: x(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      b
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(mo, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(qr, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ i("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((l, u) => /* @__PURE__ */ i("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(Sr, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: l })
          ] }, u)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: d })
      ] }),
      /* @__PURE__ */ i("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(qr, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ i("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(bo, {}),
          c
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: d })
      ] })
    ]
  }
), Jf = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], Qf = [
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
], ep = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, Mo = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var oe;
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
    setVisualMode: h,
    setComponentSize: v,
    setMotion: w,
    updateTheme: k,
    setPageTransition: g,
    setWatermarkEnabled: N,
    resetTheme: _,
    toast: A
  } = Mt(), [L, C] = $(1), [y, T] = $(!0), [E, D] = $("实时 Token 响应预览"), [M, R] = $(0), [O, P] = $(!1), [S, B] = $(""), [j, I] = $(o.customBrandColor ?? "#0ea5e9"), z = o.componentSize ?? "sm", H = a.sidebarWidth ?? $f[z], U = a.headerHeight ?? Hf[z], K = o.customBrandColor || ((oe = Ln[o.brand]) == null ? void 0 : oe.swatch) || "#2563eb", ee = (F, G) => {
    F.theme.mode && F.theme.mode !== o.mode && b(F.theme.mode, { clientX: G.clientX, clientY: G.clientY }), k(F.theme), n(F.layout), g(F.transition), R((ye) => ye + 1), A.success(`已切换至「${F.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    na,
    {
      open: t,
      onClose: r,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ i("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Ae,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                _(), s == null || s(), A.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            Ae,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(mn, { className: "h-3.5 w-3.5" }),
              onClick: () => P((F) => !F),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Ae,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(nu, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const F = JSON.stringify(o, null, 2), G = JSON.stringify(a, null, 2), ye = `<AbcProvider
  defaultTheme={${F}}
  defaultPageTransition="${d}"
  defaultWatermarkEnabled={${c}}
>
  <ProLayout
    defaultSettings={${G}}
    menuItems={menuItems}
    pathname={pathname}
    onNavigate={navigate}
  >
    {children}
  </ProLayout>
</AbcProvider>`;
                try {
                  await navigator.clipboard.writeText(ye), A.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  A.error("复制代码失败");
                }
              },
              children: "复制 JSX"
            }
          ),
          /* @__PURE__ */ e(
            Ae,
            {
              variant: "primary",
              size: "xs",
              icon: /* @__PURE__ */ e(Fr, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const F = {
                  theme: o,
                  layout: a,
                  pageTransition: d,
                  watermarkEnabled: c
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(F, null, 2)), A.success("已复制完整设计系统与布局 JSON 配置");
                } catch {
                  A.error("复制失败");
                }
              },
              children: "复制 JSON"
            }
          )
        ] })
      ] }),
      children: /* @__PURE__ */ i("div", { className: "space-y-6", children: [
        O && /* @__PURE__ */ i("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => P(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            Ia,
            {
              rows: 4,
              value: S,
              onChange: (F) => B(F.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(Ae, { size: "xs", variant: "primary", onClick: () => {
            try {
              const F = JSON.parse(S);
              F.theme && typeof F.theme == "object" && k(F.theme), F.layout && typeof F.layout == "object" && n(F.layout), typeof F.pageTransition == "string" && g(F.pageTransition), typeof F.watermarkEnabled == "boolean" && N(F.watermarkEnabled), P(!1), B(""), A.success("已成功导入并应用自定义配置");
            } catch {
              A.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(Ta, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => R((F) => F + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(zo, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i(
            "div",
            {
              className: x(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                ep[d]
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i(Ae, { variant: "primary", onClick: () => C((F) => F + 1), children: [
                      "按压回弹 #",
                      L
                    ] }),
                    /* @__PURE__ */ e(Ae, { variant: "outline", onClick: () => T((F) => !F), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Ar, { status: y ? "success" : "warning", dot: !0, children: y ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      rr,
                      {
                        checked: y,
                        onChange: T,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  yt,
                  {
                    allowClear: !0,
                    value: E,
                    onChange: (F) => D(F.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ i("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: K })
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
            M
          )
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: Qf.map((F) => /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: (G) => ee(F, G),
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
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: Jf.map((F) => {
            const G = a.mode === F.mode;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: F.mode }),
                className: x(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  G ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ i("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    F.mode === "sidebar" && /* @__PURE__ */ i(Ke, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    F.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    F.mode === "mix" && /* @__PURE__ */ i("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    F.mode === "dual-column" && /* @__PURE__ */ i(Ke, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    F.mode === "auth" && /* @__PURE__ */ i(Ke, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: F.title }),
                    G && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
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
              fr,
              {
                variant: "segmented",
                value: o.mode,
                onChange: (F) => b(F),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(ka, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(Sa, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(cs, { className: "h-3 w-3" }),
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
              fr,
              {
                variant: "segmented",
                value: a.sidebarTone,
                onChange: (F) => n({ sidebarTone: F }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(Ln).map((F) => {
            const G = Ln[F], ye = !o.customBrandColor && o.brand === F;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => l(F),
                className: x(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  ye ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                ),
                children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "h-3.5 w-3.5 shrink-0 rounded-full",
                      style: { backgroundColor: G.swatch }
                    }
                  ),
                  /* @__PURE__ */ e("span", { className: "truncate", children: G.label.split(" ")[0] })
                ]
              },
              F
            );
          }) }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50 px-3 py-2", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(is, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || j,
                  onChange: (F) => {
                    const G = F.target.value;
                    I(G), u(G);
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
                  onChange: (F) => {
                    const G = F.target.value;
                    I(G), /^#[0-9a-fA-F]{6}$/.test(G) && u(G);
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
              fr,
              {
                variant: "segmented",
                value: o.density,
                onChange: (F) => m(F),
                options: Object.keys(qs).map((F) => ({
                  value: F,
                  label: qs[F].label
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "全局控件与卡片圆角" }),
            /* @__PURE__ */ e(
              fr,
              {
                variant: "segmented",
                value: o.radius,
                onChange: (F) => p(F),
                options: Object.keys(Xs).map((F) => ({
                  value: F,
                  label: Xs[F].label.split(" ")[0]
                })),
                className: "w-full justify-between"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "全局字号缩放比例" }),
            /* @__PURE__ */ e(
              fr,
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
              fr,
              {
                variant: "segmented",
                value: o.componentSize ?? "auto",
                onChange: (F) => v(F === "auto" ? void 0 : F),
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
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: fa[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              fr,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: (F) => {
                  w(F), R((G) => G + 1);
                },
                options: Object.keys(fa).map((F) => ({
                  value: F,
                  label: fa[F].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ i("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              fa[o.motion ?? "smooth"].label,
              "：",
              fa[o.motion ?? "smooth"].description
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
                  H,
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
                value: H,
                onChange: (F) => n({ sidebarWidth: Number(F.target.value) }),
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
                onChange: (F) => n({ headerHeight: Number(F.target.value) }),
                className: "w-full cursor-pointer accent-[var(--abc-primary)]"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "多页签视觉形态" }),
            /* @__PURE__ */ e(
              fr,
              {
                variant: "segmented",
                value: a.tabStyle ?? "card",
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
              rr,
              {
                checked: a.showTabs,
                onChange: (F) => n({ showTabs: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              rr,
              {
                checked: a.keepAlive,
                onChange: (F) => n({ keepAlive: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              rr,
              {
                checked: a.headerBlur !== !1,
                onChange: (F) => n({ headerBlur: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              rr,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (F) => n({ showBreadcrumb: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              rr,
              {
                checked: a.sidebarAccordion,
                onChange: (F) => n({ sidebarAccordion: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              rr,
              {
                checked: !!a.showFooter,
                onChange: (F) => n({ showFooter: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              rr,
              {
                checked: c,
                onChange: (F) => N(F)
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              fr,
              {
                variant: "segmented",
                value: a.contentWidth,
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
              sr,
              {
                size: "xs",
                className: "w-44",
                value: d,
                onChange: (F) => {
                  g(F), R((G) => G + 1);
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
            /* @__PURE__ */ e(Qr, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            fr,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: (F) => h(F),
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
}, tp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, rp = {
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
}, Yh = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: r,
  pathname: a,
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
  showCustomizerTrigger: h = !0,
  isolateTabError: v = !0,
  homePath: w = "/",
  size: k,
  motion: g,
  children: N
}) => {
  const {
    resolvedTheme: _,
    toggleTheme: A,
    pageTransition: L,
    watermarkEnabled: C,
    watermarkText: y
  } = Mt(), T = Be(k, "sm"), E = Me(g), D = rp[T], M = ce(
    () => ({ ...Kf, ...o }),
    [o]
  ), [R, O] = lr({
    value: s ? { ...M, ...s } : void 0,
    defaultValue: M,
    onChange: d
  }), P = fe(
    (X) => {
      O((te) => ({ ...te, ...X }));
    },
    [O]
  ), [S, B] = $(!1), [j, I] = $(!1), [z, H] = $(!1), [U, K] = $({}), ee = be(null), [q, V] = lr({
    value: u,
    defaultValue: [],
    onChange: m
  }), Z = ce(
    () => Oi(r, a),
    [r, a]
  );
  ge(() => {
    const X = Z[Z.length - 1];
    !X || !X.path || V((te) => te.some((Re) => Re.path === X.path) ? te : [
      ...te,
      {
        path: X.path,
        title: X.label,
        icon: X.icon,
        pinned: te.length === 0
      }
    ]);
  }, [Z, V]), ge(() => {
    const X = (te) => {
      (te.metaKey || te.ctrlKey) && te.key.toLowerCase() === "k" && (te.preventDefault(), I((Re) => !Re));
    };
    return window.addEventListener("keydown", X), () => window.removeEventListener("keydown", X);
  }, []);
  const oe = ce(
    () => r.find((X) => Nr(X, a)) ?? r[0],
    [r, a]
  ), [F, G] = $((oe == null ? void 0 : oe.key) ?? "");
  ge(() => {
    oe != null && oe.key && G(oe.key);
  }, [oe == null ? void 0 : oe.key]);
  const ye = ce(() => {
    const X = r.find((te) => te.key === F) ?? oe;
    return (X == null ? void 0 : X.children) ?? [];
  }, [r, F, oe]), Ie = (X) => {
    const te = q.findIndex((qe) => qe.path === X), Re = q.filter((qe) => qe.path !== X || qe.pinned);
    if (V(Re), X === a && Re.length > 0) {
      const qe = Re[Math.max(0, te - 1)] ?? Re[0];
      qe && n(qe.path);
    }
  }, ne = ce(() => y || [(c == null ? void 0 : c.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [y, c == null ? void 0 : c.name, t.name]);
  if (R.mode === "auth")
    return /* @__PURE__ */ i(Ke, { children: [
      /* @__PURE__ */ e(
        Zf,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (X) => A({ clientX: X.clientX, clientY: X.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: _ === "dark" ? /* @__PURE__ */ e(ka, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Sa, { className: "h-4 w-4" })
              }
            ),
            h && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => H(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Kn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
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
        Mo,
        {
          open: z,
          onClose: () => H(!1),
          layoutSettings: R,
          onLayoutChange: P,
          onResetAll: () => O(M)
        }
      )
    ] });
  const me = R.mode === "sidebar", pe = R.mode === "top", de = R.mode === "mix", Ce = R.mode === "dual-column", ke = /* @__PURE__ */ i(
    "header",
    {
      className: x(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        D.headerPad,
        R.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => B(!0),
              className: x(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                D.iconBtn
              ),
              children: /* @__PURE__ */ e(jo, { className: D.iconCls })
            }
          ),
          (pe || de) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(qr, { brand: t, size: T, className: "px-0 pr-3" }) }),
          (me || de && ye.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": R.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => P({ sidebarCollapsed: !R.sidebarCollapsed }),
              className: x(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                D.iconBtn
              ),
              children: R.sidebarCollapsed ? /* @__PURE__ */ e(su, { className: D.iconCls }) : /* @__PURE__ */ e(ou, { className: D.iconCls })
            }
          ),
          pe && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Eo,
            {
              items: r,
              pathname: a,
              size: T,
              motion: E,
              onNavigate: (X, te) => n(X, te)
            }
          ) }),
          de && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Eo,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: F,
              size: T,
              motion: E,
              onSelectRoot: (X) => {
                var te, Re;
                G(X.key), X.path && (!X.children || X.children.length === 0) ? n(X.path, X) : (Re = (te = X.children) == null ? void 0 : te[0]) != null && Re.path && n(X.children[0].path, X.children[0]);
              },
              onNavigate: (X, te) => n(X, te)
            }
          ) }),
          (me || Ce) && R.showBreadcrumb !== !1 && Z.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: x(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                D.breadcrumb
              ),
              children: Z.map((X, te) => {
                const Re = te === Z.length - 1;
                return /* @__PURE__ */ i(dt.Fragment, { children: [
                  te > 0 && /* @__PURE__ */ e(nr, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: x(
                        "truncate",
                        Re && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: X.label
                    }
                  )
                ] }, X.key);
              })
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => I(!0),
              className: x(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                D.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(zt, { className: D.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(Vr, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          b,
          /* @__PURE__ */ e(Ut, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (X) => A({ clientX: X.clientX, clientY: X.clientY }),
              className: x(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                D.iconBtn
              ),
              children: _ === "dark" ? /* @__PURE__ */ e(ka, { className: D.iconCls }) : /* @__PURE__ */ e(Sa, { className: D.iconCls })
            }
          ) }),
          h && /* @__PURE__ */ e(Ut, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => H(!0),
              className: x(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                D.iconBtn
              ),
              children: /* @__PURE__ */ e(Kn, { className: D.iconCls })
            }
          ) }),
          c && /* @__PURE__ */ e(
            Aa,
            {
              items: c.menuItems ?? [
                { key: "profile", label: `当前账号：${c.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(em, { src: c.avatar, name: c.name, size: D.avatarSize }),
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
  ), we = /* @__PURE__ */ i("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !de && ke,
    R.showTabs && /* @__PURE__ */ e(
      Yf,
      {
        tabs: q,
        activePath: a,
        variant: R.tabStyle ?? "card",
        size: T,
        motion: E,
        onSelect: (X) => n(X),
        onClose: Ie,
        onTogglePin: (X) => V(
          (te) => te.map((Re) => Re.path === X ? { ...Re, pinned: !Re.pinned } : Re)
        ),
        onCloseOthers: (X) => V((te) => te.filter((Re) => Re.pinned || Re.path === X)),
        onCloseRight: (X) => {
          const te = q.findIndex((Re) => Re.path === X);
          te < 0 || V((Re) => Re.filter((qe, Xe) => Xe <= te || qe.pinned));
        },
        onCloseAll: () => {
          const X = q.filter((te) => te.pinned);
          V(X), X[0] && X[0].path !== a && n(X[0].path);
        },
        onRefresh: (X) => K((te) => ({ ...te, [X]: (te[X] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: ee,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ i(
          gf,
          {
            enabled: C,
            content: ne,
            className: x(
              "min-h-full",
              R.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                qf,
                {
                  activeKey: a,
                  enabled: R.keepAlive,
                  aliveKeys: q.map((X) => X.path),
                  scrollContainerRef: ee,
                  refreshSeed: U[a] ?? 0,
                  refreshKeys: U,
                  activeClassName: tp[L],
                  isolateError: v,
                  onTabReload: (X) => K((te) => ({ ...te, [X]: (te[X] ?? 0) + 1 })),
                  onTabClose: R.showTabs ? (X) => Ie(X) : void 0,
                  onNavigateHome: () => n(w),
                  children: N
                }
              ),
              R.showFooter && /* @__PURE__ */ i("footer", { className: "mt-8 border-t border-[var(--abc-border)] pt-4 pb-2 text-center text-[11px] text-[var(--abc-fg-muted)]", children: [
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
  ] }), Se = {
    "--abc-sidebar-w": R.sidebarWidth ? `${R.sidebarWidth}px` : void 0,
    "--abc-header-h": R.headerHeight ? `${R.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-size": T,
      "data-motion": E,
      style: Se,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        R.routeProgress !== !1 && /* @__PURE__ */ e(Di, { activeKey: a }),
        de && ke,
        /* @__PURE__ */ i("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          de && ye.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            $n,
            {
              items: ye,
              pathname: a,
              collapsed: R.sidebarCollapsed,
              accordion: R.sidebarAccordion,
              tone: R.sidebarTone,
              size: T,
              motion: E,
              onNavigate: (X, te) => n(X, te)
            }
          ) }),
          me && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            $n,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: R.sidebarCollapsed,
              accordion: R.sidebarAccordion,
              tone: R.sidebarTone,
              size: T,
              motion: E,
              onNavigate: (X, te) => n(X, te)
            }
          ) }),
          Ce && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            Uf,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: R.sidebarTone,
              size: T,
              motion: E,
              onNavigate: (X, te) => n(X, te)
            }
          ) }),
          we
        ] }),
        /* @__PURE__ */ e(
          na,
          {
            open: S,
            onClose: () => B(!1),
            placement: "left",
            width: D.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              $n,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: T,
                motion: E,
                onNavigate: (X, te) => {
                  n(X, te), B(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          Xf,
          {
            open: j,
            onClose: () => I(!1),
            menuItems: r,
            onNavigate: (X, te) => n(X, te),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: _ === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => A()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => H(!0)
              },
              ...l
            ]
          }
        ),
        /* @__PURE__ */ e(
          Mo,
          {
            open: z,
            onClose: () => H(!1),
            layoutSettings: R,
            onLayoutChange: P,
            onResetAll: () => O(M)
          }
        )
      ]
    }
  );
};
function Ds() {
  const { permissionAdapter: t } = Mt();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const ap = ({
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
  const { hasPermission: b } = Ds(), l = t ?? r;
  if (!l) return /* @__PURE__ */ e(Ke, { children: c });
  if (b(l, a)) return /* @__PURE__ */ e(Ke, { children: c });
  if (n === "hide")
    return /* @__PURE__ */ e(Ke, { children: o ?? d ?? null });
  if (dt.isValidElement(c)) {
    const p = c, f = dt.cloneElement(p, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((m = p.props) == null ? void 0 : m.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(Ut, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: f }) });
  }
  return null;
}, qh = ap;
function Wi(t) {
  const { dictAdapter: r } = Mt(), [a, n] = $([]), [s, o] = $(!1);
  return ge(() => {
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
const Xh = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...d
}) => {
  const c = t ?? r ?? "", { options: b, loading: l } = Wi(c), u = ce(
    () => [...a, ...b, ...n],
    [a, b, n]
  );
  return /* @__PURE__ */ e(
    sr,
    {
      options: u,
      placeholder: l && u.length === 0 ? "字典加载中..." : s,
      disabled: o || l && u.length === 0,
      ...d
    }
  );
}, Zh = ({
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
  const l = t ?? r ?? "", { options: u } = Wi(l);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: d });
  const m = u.find((p) => String(p.value) === String(a));
  return /* @__PURE__ */ e(
    Ar,
    {
      tone: (m == null ? void 0 : m.tone) ?? c,
      dot: n,
      size: s,
      motion: o,
      className: b,
      children: (m == null ? void 0 : m.label) ?? String(a)
    }
  );
}, Ao = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, np = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: x("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(ln, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: x("grid gap-4", Ao[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: x("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ i(
  "div",
  {
    className: x(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(ln, { children: /* @__PURE__ */ e("div", { className: x("grid gap-4", Ao[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function pr(t) {
  if (!t || typeof t != "object" || !("code" in t)) return !1;
  const r = t.code;
  return r == null ? !1 : r !== 200 && r !== 0 && r !== "200" && r !== "0";
}
function rs(t, r) {
  const a = (t == null ? void 0 : t.data) ?? t, n = Array.isArray(a == null ? void 0 : a.records) ? a.records : Array.isArray(a == null ? void 0 : a.list) ? a.list : Array.isArray(t == null ? void 0 : t.list) ? t.list : Array.isArray(t == null ? void 0 : t.records) ? t.records : Array.isArray(a) ? a : [], s = r ? n.map(r) : n, o = typeof (a == null ? void 0 : a.total) == "number" ? a.total : typeof (t == null ? void 0 : t.total) == "number" ? t.total : n.length;
  return { list: s, total: o, raw: t };
}
function Ro(t) {
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
function Sn(t, r) {
  const a = typeof t == "function" ? { list: t, ...r } : t;
  return {
    list: async (n) => {
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, b = s ?? o, l = a.defaultParams || a.params;
      let u = {
        ...b !== void 0 ? { pageNo: b, pageNum: b } : {},
        ...d !== void 0 ? { pageSize: d } : {},
        ...l,
        ...c
      };
      (b !== void 0 && !("pageNum" in (n || {})) || b !== void 0) && delete u.pageNum, a.transformQuery && (u = a.transformQuery(u)), u = Ro(u);
      const m = await a.list(u);
      if (pr(m))
        return m;
      const p = rs(m, a.transformRecord);
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
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, b = a.defaultParams || a.params, l = Ro({
        ...b,
        ...c
      }), u = await a.export(l);
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
const Jh = Sn;
function sp(t, r = []) {
  const a = be(t);
  return a.current = t, ce(() => Sn(a.current), [r]);
}
const Qh = sp;
function op(t, r = []) {
  const [a, n] = $(0), s = be(null), [o, d] = $([]), c = fe(() => d([]), []), b = be(t);
  b.current = t;
  const l = fe(() => {
    s.current ? s.current(!1) : n((f) => f + 1);
  }, []), u = fe(() => {
    d([]), s.current ? s.current(!0) : n((f) => f + 1);
  }, []), m = ce(() => Sn(b.current), [a, ...r]);
  return {
    tableProps: ce(
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
    refreshKey: a,
    selectedRowKeys: o,
    setSelectedRowKeys: d,
    clearSelection: c
  };
}
const eg = op;
function Vi(t, r) {
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
const tg = Vi;
function Zr(t) {
  return String(t.key ?? t.name ?? "");
}
function ip({
  defaultValues: t,
  schema: r,
  fields: a = [],
  onValuesChange: n
} = {}) {
  const s = be(t ?? {});
  s.current = t ?? {};
  const o = be(a);
  o.current = a;
  const d = be(r);
  d.current = r;
  const c = be(n);
  c.current = n;
  const b = be({ ...t ?? {} }), l = be({}), u = be(!1), [, m] = $(0), p = be(/* @__PURE__ */ new Set()), f = fe((C) => {
    var T;
    m((E) => E + 1);
    const y = { ...b.current };
    (T = c.current) == null || T.call(c, y, C), p.current.forEach((E) => E(y, { name: C }));
  }, []), h = fe((C) => C === void 0 ? { ...b.current } : C.includes(".") ? kn(b.current, C) : b.current[C], []), v = fe(
    (C, y) => {
      if (b.current = {
        ...b.current,
        [C]: y
      }, u.current = !0, l.current[C]) {
        const T = { ...l.current };
        delete T[C], l.current = T;
      }
      f(C);
    },
    [f]
  ), w = fe((C) => typeof C == "function" ? (p.current.add(C), {
    unsubscribe: () => {
      p.current.delete(C);
    }
  }) : C === void 0 ? { ...b.current } : Array.isArray(C) ? C.map((y) => b.current[y]) : b.current[C], []), k = fe((C) => {
    b.current = {
      ...s.current ?? {},
      ...C ?? {}
    }, l.current = {}, u.current = !1, m((y) => y + 1);
  }, []), g = fe((C, y) => {
    l.current = {
      ...l.current,
      [C]: y
    }, m((T) => T + 1);
  }, []), N = fe((C) => {
    if (!C)
      l.current = {};
    else if (Array.isArray(C)) {
      const y = { ...l.current };
      C.forEach((T) => delete y[T]), l.current = y;
    } else {
      const y = { ...l.current };
      delete y[C], l.current = y;
    }
    m((y) => y + 1);
  }, []), _ = fe(() => {
    var D, M;
    const C = { ...b.current }, y = {};
    for (const R of o.current) {
      const O = Zr(R);
      if (!O) continue;
      const P = C[O], S = P == null || typeof P == "string" && P.trim() === "" || Array.isArray(P) && P.length === 0;
      if (R.required && S) {
        y[O] = { type: "required", message: `请填写${R.label}` };
        continue;
      }
      if (R.validator) {
        const B = R.validator(P, C);
        B && (y[O] = { type: "validate", message: B });
      }
    }
    let T = C;
    const E = d.current;
    if (E && typeof E.safeParse == "function") {
      const R = E.safeParse(C);
      if (R.success)
        R.data && typeof R.data == "object" && (T = { ...C, ...R.data });
      else {
        const O = ((D = R.error) == null ? void 0 : D.issues) ?? ((M = R.error) == null ? void 0 : M.errors) ?? [];
        for (const P of O) {
          const S = Array.isArray(P.path) && P.path.length > 0 ? String(P.path[0]) : "";
          S && !y[S] && (y[S] = {
            type: "schema",
            message: P.message || "字段格式不正确"
          });
        }
      }
    }
    return l.current = y, m((R) => R + 1), {
      valid: Object.keys(y).length === 0,
      data: T
    };
  }, []), A = fe(async () => _().valid, [_]), L = fe(
    (C) => async (y) => {
      var D;
      (D = y == null ? void 0 : y.preventDefault) == null || D.call(y);
      const { valid: T, data: E } = _();
      T && await C(E);
    },
    [_]
  );
  return {
    getValues: h,
    setValue: v,
    watch: w,
    reset: k,
    setError: g,
    clearErrors: N,
    trigger: A,
    handleSubmit: L,
    formState: {
      errors: l.current,
      isDirty: u.current
    }
  };
}
function lp(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const Ui = ({
  value: t,
  disabled: r = !1,
  maxCount: a = 9,
  customUpload: n,
  onChange: s
}) => {
  const { uploadAdapter: o, toast: d } = Mt(), [c, b] = $(!1), l = ce(() => Array.isArray(t) ? t.filter(Boolean) : String(t || "").split(",").map((p) => p.trim()).filter(Boolean), [t]), u = async (p) => {
    const f = p.target.files;
    if (!f || f.length === 0 || r || c) return;
    const h = [...l];
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
        } else o ? k = await o(w) : k = await lp(w);
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
    const f = l.filter((h, v) => v !== p);
    s(f.join(","));
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-wrap gap-3", children: [
    l.map((p, f) => /* @__PURE__ */ i(
      "div",
      {
        className: "group relative h-24 w-24 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        children: [
          /* @__PURE__ */ e(Ba, { src: p, width: 96, height: 96, className: "h-full w-full object-cover" }),
          !r && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => m(f),
              "aria-label": "移除图片",
              title: "移除图片",
              className: "absolute top-1 right-1 rounded-full bg-[var(--abc-danger)]/90 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
              children: /* @__PURE__ */ e(kr, { className: "h-3 w-3" })
            }
          )
        ]
      },
      `${p}-${f}`
    )),
    l.length < a && !r && /* @__PURE__ */ i("label", { className: "flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]", children: [
      c ? /* @__PURE__ */ e(or, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(hn, { className: "h-5 w-5" }),
      /* @__PURE__ */ e("span", { className: "text-[11px]", children: c ? "上传中..." : `上传(${l.length}/${a})` }),
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
}, rg = Ui, cp = ({
  value: t,
  disabled: r = !1,
  placeholder: a,
  presetIcons: n,
  onChange: s
}) => {
  const [o, d] = $(!1);
  return !n || n.length === 0 ? /* @__PURE__ */ e(
    io,
    {
      value: t,
      disabled: r,
      placeholder: a,
      onChange: s
    }
  ) : /* @__PURE__ */ i("div", { className: "space-y-2", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(hr, { name: t || "Sparkles", size: 16 }) }),
      /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
        yt,
        {
          placeholder: a || "输入或从右侧选择图标",
          disabled: r,
          value: t || "",
          onChange: (c) => s(c.target.value)
        }
      ) }),
      /* @__PURE__ */ e(
        Ae,
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
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
      /* @__PURE__ */ e("span", { className: "mr-1 text-[11px] text-[var(--abc-fg-muted)]", children: "常用推荐:" }),
      n.map((c) => /* @__PURE__ */ i(
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
            /* @__PURE__ */ e(hr, { name: c, size: 12 }),
            /* @__PURE__ */ e("span", { children: c })
          ]
        },
        c
      ))
    ] }),
    /* @__PURE__ */ e(
      io,
      {
        open: o,
        current: t,
        onClose: () => d(!1),
        onSelect: s
      }
    )
  ] });
};
function dp({
  field: t,
  form: r,
  isEdit: a,
  editingRecord: n
}) {
  const s = Zr(t);
  if ((typeof t.hidden == "function" ? t.hidden(a, r) : !!t.hidden) || t.formGroup === "hidden") return null;
  if (t.type === "custom" && t.render)
    return /* @__PURE__ */ e(Ke, { children: t.render(r, a) });
  const d = typeof t.disabled == "function" ? t.__fromFieldSchema ? t.disabled(n) : t.disabled(a, r) : !!t.disabled, c = r.getValues(s), b = (l) => {
    var u;
    r.setValue(s, l), (u = t.onChange) == null || u.call(t, l, r);
  };
  switch (t.type) {
    case "number":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        yn,
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
        yt,
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
        yt,
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
        Ia,
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
      const l = typeof t.options == "function" ? t.options(r, a) : t.options ?? [];
      if (t.type === "radio" || t.type === "checkbox")
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 py-1", children: l.map((m) => /* @__PURE__ */ i(
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
      const u = l.map((m) => ({
        label: m.label,
        value: typeof m.value == "boolean" ? String(m.value) : m.value,
        disabled: m.disabled
      }));
      return /* @__PURE__ */ e(
        sr,
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
      const l = typeof t.treeData == "function" ? t.treeData(r, a) : t.treeData ?? [], u = !!(t.multiple || t.treeCheckable);
      return /* @__PURE__ */ e(
        Ra,
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
          rr,
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
        Da,
        {
          disabled: d,
          value: c ?? "",
          placeholder: t.placeholder,
          onChange: b
        }
      ) : /* @__PURE__ */ e(
        yt,
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
        yt,
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
          La,
          {
            disabled: d,
            value: c ?? null,
            onChange: b
          }
        );
      const l = Array.isArray(c) ? c : ["", ""];
      return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          yt,
          {
            type: "date",
            disabled: d,
            value: l[0] || "",
            onChange: (u) => b([u.target.value, l[1] || ""])
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "至" }),
        /* @__PURE__ */ e(
          yt,
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
          yt,
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
        cp,
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
        Um,
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
        Ui,
        {
          value: c ?? "",
          disabled: d,
          maxCount: t.maxCount,
          customUpload: t.customUpload,
          onChange: b
        }
      ) : /* @__PURE__ */ e(
        wi,
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
        yt,
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
function Gi({
  layout: t = "grid",
  columnsCount: r = 2,
  fields: a,
  isEdit: n,
  form: s,
  errors: o = {},
  formSchema: d,
  columns: c = [],
  isFieldRequired: b = Vi,
  renderFormField: l
}) {
  const u = (p) => p.formGroup === "hidden" ? !0 : typeof p.hidden == "function" && s ? !!p.hidden(n, s) : !!p.hidden, m = (p) => {
    const f = Zr(p), h = !!(p.required || b(d, f)), v = o[f], w = typeof v == "string" ? v : v == null ? void 0 : v.message, k = c.find((N) => {
      const _ = Array.isArray(N.dataIndex) ? N.dataIndex[0] : N.dataIndex ?? N.key;
      return String(_) === f;
    }), g = p.tooltip ?? (k == null ? void 0 : k.tooltip);
    return /* @__PURE__ */ e(
      Ms,
      {
        label: p.label,
        required: h,
        tooltip: g,
        helperText: p.helperText,
        error: w,
        children: l(p)
      },
      f
    );
  };
  if (t === "split") {
    const p = a.filter((g) => !u(g)), f = p.filter((g) => g.formGroup === "top"), h = p.filter((g) => {
      const N = g.formGroup || "left";
      return N === "left" || N === "full";
    }), v = p.filter((g) => g.formGroup === "right"), w = p.filter((g) => g.formGroup === "bottom"), k = p.filter((g) => g.formGroup === "extra");
    return /* @__PURE__ */ i("div", { className: "space-y-4", children: [
      f.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: f.map((g) => m(g)) }),
      /* @__PURE__ */ i(
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
        const f = Zr(p), h = r === 2 && (p.span === 2 || p.formGroup === "full" || p.__fromFieldSchema && p.type === "textarea");
        return /* @__PURE__ */ e("div", { className: h ? "col-span-1 sm:col-span-2" : "col-span-1", children: m(p) }, f);
      })
    }
  );
}
const ag = Gi;
function up({
  open: t,
  onClose: r,
  isEdit: a,
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
  formDetailLoading: h,
  formError: v,
  onSubmit: w,
  draftEnabled: k = !1,
  showDraftButton: g = !1,
  showDraftBanner: N = !1,
  draftBannerMode: _ = "prompt",
  onSaveDraft: A,
  onRestoreDraft: L,
  onDiscardDraft: C,
  submitButtonText: y = "保存",
  renderFormExtra: T,
  renderCustomForm: E,
  onSuccessFetch: D
}) {
  if (E)
    return /* @__PURE__ */ e(Ke, { children: E({
      open: t,
      onClose: r,
      record: n,
      isEdit: a,
      onSuccess: () => {
        r(), D == null || D();
      }
    }) });
  const M = a ? (o == null ? void 0 : o.edit) || "编辑" : (o == null ? void 0 : o.add) || "新增", R = d ?? (b === 2 ? "lg" : "md"), O = /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2.5", children: [
    k && g && A && /* @__PURE__ */ e(Ae, { variant: "secondary", size: "sm", type: "button", onClick: A, children: "保存草稿" }),
    !a && N && _ === "auto-restored" && C && /* @__PURE__ */ e(Ae, { variant: "ghost", size: "sm", type: "button", onClick: C, children: "清空草稿" }),
    /* @__PURE__ */ e(Ae, { variant: "secondary", size: "sm", type: "button", onClick: r, disabled: f, children: "取消" }),
    /* @__PURE__ */ e(Ae, { variant: "primary", size: "sm", type: "button", loading: f, onClick: w, children: y })
  ] }), P = /* @__PURE__ */ i("form", { onSubmit: w, className: "space-y-3.5 py-1", children: [
    h && /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
      /* @__PURE__ */ e(or, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
      /* @__PURE__ */ e("span", { children: "正在同步最新完整数据..." })
    ] }),
    v && /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-3 py-2 text-xs text-[var(--abc-danger)]", children: v }),
    N && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-fg)]", children: [
      /* @__PURE__ */ e("span", { children: _ === "auto-restored" ? "已自动为您恢复上次未提交的本地表单草稿" : "检测到未提交的草稿" }),
      /* @__PURE__ */ i("span", { className: "inline-flex shrink-0 items-center gap-2.5", children: [
        _ === "prompt" && L && /* @__PURE__ */ e(
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
            children: _ === "auto-restored" ? "丢弃草稿" : "丢弃"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      Gi,
      {
        layout: c,
        columnsCount: b,
        fields: l,
        isEdit: a,
        form: u,
        errors: u.formState.errors,
        formSchema: m,
        columns: p,
        renderFormField: (S) => /* @__PURE__ */ e(
          dp,
          {
            field: S,
            form: u,
            isEdit: a,
            editingRecord: n
          }
        )
      }
    ),
    T == null ? void 0 : T(u, a)
  ] });
  if (s === "drawer") {
    const B = ["xs", "sm", "md", "lg", "xl", "2xl"].includes(R) ? R : "lg";
    return /* @__PURE__ */ e(
      na,
      {
        open: t,
        onClose: r,
        title: M,
        size: B,
        footer: O,
        children: P
      }
    );
  }
  return /* @__PURE__ */ e(
    dr,
    {
      open: t,
      onClose: r,
      title: M,
      size: R,
      footer: O,
      children: P
    }
  );
}
function bp({
  open: t,
  onClose: r,
  record: a,
  columns: n,
  viewTitle: s = "详情",
  viewSize: o = "lg",
  viewLoading: d = !1,
  canEdit: c = !1,
  onEditRecord: b,
  renderViewExtra: l,
  renderViewFooter: u
}) {
  const m = typeof s == "function" ? a ? s(a) : "详情" : s;
  return /* @__PURE__ */ i(
    dr,
    {
      open: t,
      onClose: r,
      title: m,
      size: o,
      footer: u && a ? u(a, r) : /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2", children: [
        a && c && b && /* @__PURE__ */ e(
          Ae,
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
        /* @__PURE__ */ e(Ae, { variant: "primary", size: "sm", onClick: r, children: "关闭" })
      ] }),
      children: [
        d && /* @__PURE__ */ i("div", { className: "mb-3 flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
          /* @__PURE__ */ e(or, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
          /* @__PURE__ */ e("span", { children: "正在更新详细数据..." })
        ] }),
        a && /* @__PURE__ */ i("div", { className: "space-y-4 py-1", children: [
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-3 text-xs md:grid-cols-2", children: n.map((p) => {
            if (p.view === !1 || p.key === "actions" || p.key === "__actions__" || p.key === "__abc_actions__" || p.key === "__drag_handle__")
              return null;
            const f = kn(a, p.dataIndex ?? p.key), h = typeof p.type == "object" ? p.type : void 0, v = typeof p.search == "object" && p.search !== null && Array.isArray(p.search.options) ? p.search.options.filter((g) => g.value !== "") : void 0, w = !p.options && !(h != null && h.options) && v ? { ...p, options: v, __autoOptionsFromSearch: !0 } : p;
            let k;
            return p.viewRender ? k = p.viewRender(f, a) : p.render ? k = p.render(f, a, 0) : (p.type === "image" || (h == null ? void 0 : h.type) === "image" || p.valueType === "image") && f ? k = /* @__PURE__ */ e(Ba, { src: String(f), width: 56, height: 56 }) : k = Li(f, a, w), /* @__PURE__ */ i(
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
          l == null ? void 0 : l(a)
        ] })
      ]
    }
  );
}
function ng({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = Mt(), [d, c] = $(r), [b, l] = $(!1), [u, m] = $({});
  ge(() => {
    c(r);
  }, [r]);
  const p = (h, v) => {
    c((w) => ({ ...w, [h]: v })), u[h] && m((w) => {
      const k = { ...w };
      return delete k[h], k;
    });
  };
  return /* @__PURE__ */ i("form", { onSubmit: async (h) => {
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
      np,
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
              Ms,
              {
                label: v.label,
                required: v.required,
                helperText: v.helperText,
                error: k,
                children: g === "switch" ? /* @__PURE__ */ e(
                  rr,
                  {
                    checked: !!w,
                    onChange: (N) => p(v.name, N)
                  }
                ) : g === "number" ? /* @__PURE__ */ e(
                  yn,
                  {
                    value: w ?? null,
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N)
                  }
                ) : g === "textarea" ? /* @__PURE__ */ e(
                  Ia,
                  {
                    value: w ?? "",
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N.target.value)
                  }
                ) : g === "select" ? /* @__PURE__ */ e(
                  sr,
                  {
                    options: v.options ?? [],
                    value: w ?? "",
                    placeholder: v.placeholder,
                    invalid: !!k,
                    onChange: (N) => p(v.name, N)
                  }
                ) : g === "treeSelect" ? /* @__PURE__ */ e(
                  Ra,
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
                ) : g === "image" ? v.allowDirectUrlInput !== !1 ? /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    Ba,
                    {
                      src: String(w ?? ""),
                      alt: v.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    yt,
                    {
                      allowClear: !0,
                      value: w ?? "",
                      placeholder: v.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (N) => p(v.name, N.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  wi,
                  {
                    value: String(w ?? ""),
                    onChange: (N) => p(v.name, N)
                  }
                ) : /* @__PURE__ */ e(
                  yt,
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
    /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] pt-4", children: [
      /* @__PURE__ */ e(
        Ae,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            c(r), m({}), o.info("已还原初始配置值");
          },
          children: "重置更改"
        }
      ),
      /* @__PURE__ */ e(
        Ae,
        {
          type: "submit",
          variant: "primary",
          loading: b,
          icon: /* @__PURE__ */ e(Jo, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
function mp({
  title: t,
  subTitle: r,
  permission: a,
  hasPermission: n,
  customUpload: s,
  saveButtonText: o = "保存当前配置",
  defaultValues: d,
  fetchConfig: c,
  saveConfig: b,
  transformBeforeSave: l,
  tabs: u
}) {
  var j;
  const { toast: m, uploadAdapter: p } = Mt(), { hasPermission: f } = Ds(), [h, v] = $(((j = u[0]) == null ? void 0 : j.key) || ""), [w, k] = $(!1), [g, N] = $(!1), [_, A] = $(!1), [L, C] = $(null), [y, T] = $(d), E = be(null);
  ge(() => () => {
    E.current !== null && typeof window < "u" && window.clearTimeout(E.current);
  }, []);
  const D = fe(async () => {
    k(!0);
    try {
      const I = await c();
      if (pr(I) && !(I != null && I.data)) {
        m.error((I == null ? void 0 : I.msg) || "获取配置数据失败");
        return;
      }
      const z = I != null && I.data && typeof I.data == "object" ? I.data : I;
      z && typeof z == "object" && T((H) => ({ ...H, ...z }));
    } catch {
      m.error("获取配置数据失败");
    } finally {
      k(!1);
    }
  }, [c, m]);
  ge(() => {
    D();
  }, [D]);
  const M = fe((I, z) => {
    T((H) => ({ ...H, [I]: z }));
  }, []), R = async () => {
    N(!0);
    try {
      const I = l ? l(y) : y, z = await b(I);
      if (pr(z)) {
        m.error((z == null ? void 0 : z.msg) || "保存配置失败");
        return;
      }
      A(!0), m.success("配置保存成功"), typeof window < "u" && (E.current !== null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        A(!1), E.current = null;
      }, 3e3));
    } catch {
      m.error("保存配置失败");
    } finally {
      N(!1);
    }
  }, O = u.find((I) => I.key === h) || u[0], P = a ? n ? n(a) : f(a) : !0, S = async (I, z) => {
    C(I);
    try {
      let H;
      if (s) {
        const U = await s(z);
        H = typeof U == "string" ? U : U == null ? void 0 : U.url;
      } else p && (H = await p(z));
      H && M(I, H);
    } catch (H) {
      m.error((H == null ? void 0 : H.message) || "图片上传失败");
    } finally {
      C(null);
    }
  }, B = (I) => {
    const z = y[I.key], H = I.type || "input";
    if (H === "custom" && I.render)
      return I.render(y, M, T);
    switch (H) {
      case "switch":
        return /* @__PURE__ */ e(
          rr,
          {
            checked: !!z,
            onChange: (U) => M(I.key, U)
          }
        );
      case "radio":
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-4 pt-0.5", children: (I.options || []).map((U) => {
          const K = typeof U.value == "number" ? Number(z) === U.value : String(z ?? "") === String(U.value);
          return /* @__PURE__ */ i(
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
                    onChange: () => M(I.key, U.value)
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
          String(z || "").split(",").filter(Boolean)
        );
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 pt-0.5 text-xs text-[var(--abc-fg-secondary)]", children: (I.options || []).map((K) => {
          const ee = String(K.value), q = U.has(ee), V = !!K.locked;
          return /* @__PURE__ */ i(
            "label",
            {
              className: x(
                "flex items-center gap-1.5",
                V ? "cursor-not-allowed opacity-75" : "cursor-pointer"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    disabled: V,
                    checked: q || V,
                    onChange: () => {
                      if (V) return;
                      const Z = new Set(U);
                      Z.has(ee) ? Z.delete(ee) : Z.add(ee), M(I.key, Array.from(Z).join(","));
                    }
                  }
                ),
                /* @__PURE__ */ e("span", { children: K.label })
              ]
            },
            ee
          );
        }) });
      }
      case "select":
        return /* @__PURE__ */ e(
          sr,
          {
            value: z ?? "",
            options: I.options || [],
            onChange: (U) => {
              const K = U && typeof U == "object" && "target" in U ? U.target.value : U;
              M(I.key, K);
            }
          }
        );
      case "textarea":
        return /* @__PURE__ */ e(
          Ia,
          {
            rows: I.rows || 4,
            value: z || "",
            onChange: (U) => M(I.key, U.target.value),
            placeholder: I.placeholder,
            className: I.className
          }
        );
      case "image-url": {
        const U = I.previewShape === "circle", K = !!(I.allowUpload && (s || p));
        return /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(
            Ba,
            {
              src: z ? String(z) : void 0,
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
            yt,
            {
              value: z || "",
              onChange: (ee) => M(I.key, ee.target.value),
              placeholder: I.placeholder || "请输入图片完整直链 URL 或 SVG 矢量代码"
            }
          ) }),
          K && /* @__PURE__ */ i("label", { className: "inline-flex shrink-0 cursor-pointer", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (ee) => {
                  var V;
                  const q = (V = ee.target.files) == null ? void 0 : V[0];
                  q && S(I.key, q), ee.target.value = "";
                }
              }
            ),
            /* @__PURE__ */ i("span", { className: "inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]", children: [
              /* @__PURE__ */ e(mn, { className: "h-3.5 w-3.5" }),
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
          yt,
          {
            type: H === "password" ? "password" : H === "number" ? "number" : "text",
            value: z ?? "",
            onChange: (U) => M(I.key, U.target.value),
            placeholder: I.placeholder,
            className: I.className
          }
        );
    }
  };
  return /* @__PURE__ */ i("div", { className: "space-y-6", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-4 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-[var(--abc-shadow-card)]", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-lg font-bold text-[var(--abc-fg)]", children: t }),
        r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
        _ && /* @__PURE__ */ i("span", { className: "flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-success)]", children: [
          /* @__PURE__ */ e(Ko, { className: "h-4 w-4" }),
          "配置保存成功"
        ] }),
        /* @__PURE__ */ e(
          Ae,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => void D(),
            disabled: w || g,
            icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
            children: "刷新"
          }
        ),
        P && /* @__PURE__ */ e(
          Ae,
          {
            onClick: () => void R(),
            loading: g,
            icon: /* @__PURE__ */ e(Jo, { className: "h-4 w-4" }),
            children: o
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-4", children: [
      /* @__PURE__ */ e("div", { className: "h-fit space-y-1.5 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-[var(--abc-shadow-card)] lg:col-span-1", children: u.map((I) => {
        const z = I.icon, H = (O == null ? void 0 : O.key) === I.key;
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => v(I.key),
            className: x(
              "flex w-full cursor-pointer items-center gap-3 rounded-[var(--abc-radius-lg)] px-4 py-3 text-sm font-medium transition-all",
              H ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
            ),
            children: [
              z && /* @__PURE__ */ e(
                z,
                {
                  className: x(
                    "h-4 w-4",
                    H ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
                  )
                }
              ),
              /* @__PURE__ */ e("span", { children: I.label })
            ]
          },
          I.key
        );
      }) }),
      /* @__PURE__ */ i("div", { className: "relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-6 shadow-[var(--abc-shadow-card)] lg:col-span-3", children: [
        w && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-[var(--abc-radius-xl)] bg-[var(--abc-bg-surface)]/65 backdrop-blur-xs", children: /* @__PURE__ */ e(hf, {}) }),
        O && /* @__PURE__ */ i("div", { className: "space-y-6", children: [
          /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] pb-4", children: [
            /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)]", children: O.sectionTitle }),
            O.sectionDescription && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: O.sectionDescription })
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: x(
                "grid grid-cols-1 gap-4",
                (O.columns ?? 2) === 2 && "sm:grid-cols-2"
              ),
              children: O.fields.map((I) => {
                const z = (O.columns ?? 2) === 1 || I.span === 2;
                return /* @__PURE__ */ i(
                  "div",
                  {
                    className: x(
                      z && (O.columns ?? 2) === 2 && "sm:col-span-2"
                    ),
                    children: [
                      I.label && /* @__PURE__ */ i("div", { className: "mb-1.5 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ e("label", { className: "block text-xs font-medium text-[var(--abc-fg-secondary)]", children: I.label }),
                        I.tooltip && /* @__PURE__ */ e(
                          "span",
                          {
                            title: I.tooltip,
                            className: "cursor-help text-[var(--abc-fg-muted)]",
                            children: /* @__PURE__ */ e(Jr, { className: "h-3.5 w-3.5" })
                          }
                        )
                      ] }),
                      B(I)
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
const sg = mp, fp = Ne.forwardRef(
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
    ...l
  }, u) => /* @__PURE__ */ i(
    "div",
    {
      ref: u,
      "data-slot": "filter-toolbar",
      className: x(
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
        r && a || d ? /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
          r && a ? /* @__PURE__ */ i(
            Ae,
            {
              variant: "ghost",
              size: "xs",
              onClick: a,
              className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
              children: [
                /* @__PURE__ */ e(ir, { className: "h-3 w-3 mr-1", "aria-hidden": "true" }),
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
fp.displayName = "FilterToolbar";
function og({
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
        return /* @__PURE__ */ i(
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
function ig({
  label: t,
  items: r,
  selectedId: a = null,
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
      className: x(
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
              className: x(
                "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                a === null ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
              ),
              children: d
            }
          ),
          r.map((b, l) => {
            const u = b.id ?? b.key ?? b.code ?? String(l), m = b.active !== void 0 ? b.active : a === u;
            return /* @__PURE__ */ i(
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
function lg({
  open: t,
  title: r,
  description: a,
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
  destructive: h = !1,
  variant: v,
  pending: w = !1,
  confirmDisabled: k = !1,
  error: g = null,
  maxWidthClass: N = "sm:max-w-lg",
  className: _,
  children: A,
  onOpenChange: L,
  onConfirm: C
}) {
  const [y, T] = Ne.useState(""), E = Ne.useId(), D = h || v === "destructive";
  Ne.useEffect(() => {
    t || T("");
  }, [t]);
  const M = y.trim(), R = M.length < p, O = M.length > f, P = !w && !k && !R && !O, S = () => {
    P && C(M);
  }, B = (I) => {
    I.key === "Enter" && P && (I.preventDefault(), S());
  }, j = () => {
    o == null || o(), L == null || L(!1);
  };
  return /* @__PURE__ */ e(
    dr,
    {
      open: t,
      closeLabel: m,
      onClose: j,
      onCancel: j,
      onOpenChange: L,
      closeDisabled: !1,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        vs,
        {
          "data-slot": "reasoned-action-dialog",
          className: x("w-full max-w-lg", N, _),
          closeLabel: m,
          closeDisabled: !1,
          closable: !0,
          children: [
            /* @__PURE__ */ i(xs, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                D ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(fn, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(os, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(ws, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              /* @__PURE__ */ e(Ns, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            A && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: A }),
            g && /* @__PURE__ */ e(
              Or,
              {
                variant: "error",
                title: "操作失败",
                message: g,
                className: "my-1 text-xs"
              }
            ),
            /* @__PURE__ */ i("div", { className: "space-y-1.5 py-1", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ i("label", { htmlFor: E, className: "font-medium text-[var(--abc-fg)]", children: [
                  c,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
                ] }),
                /* @__PURE__ */ i(
                  "span",
                  {
                    className: x(
                      "font-mono text-[11px] tabular-nums",
                      O ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
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
                yt,
                {
                  id: E,
                  "aria-label": "Reason",
                  value: y,
                  disabled: w,
                  placeholder: b,
                  onChange: (I) => T(I.target.value),
                  onKeyDown: B,
                  className: x(
                    "w-full text-xs",
                    O && "border-red-500 focus-visible:ring-red-500/20"
                  )
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: x(
                    "text-[11px]",
                    O ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: O ? u : l
                }
              )
            ] }),
            /* @__PURE__ */ i(ys, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                Ae,
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
                Ae,
                {
                  type: "button",
                  variant: D ? "danger" : "primary",
                  size: "sm",
                  disabled: !P,
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
function cg({
  open: t,
  onClose: r,
  title: a,
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
  pending: h = !1,
  confirmDisabled: v = !1,
  error: w = null,
  width: k = 560,
  cascadeMode: g = "adjacent",
  children: N,
  onConfirm: _
}) {
  const [A, L] = Ne.useState(""), C = Ne.useId();
  Ne.useEffect(() => {
    t || L("");
  }, [t]);
  const y = A.trim(), T = y.length < m, E = y.length > p, D = !h && !v && !T && !E, M = () => {
    D && _(y);
  };
  return /* @__PURE__ */ i(
    na,
    {
      open: t,
      onClose: r,
      width: k,
      cascadeMode: g,
      role: "dialog",
      children: [
        /* @__PURE__ */ i(cf, { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            f ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(fn, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(df, { className: "text-base font-semibold", children: a })
          ] }),
          n && /* @__PURE__ */ e(uf, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ i(bf, { className: "space-y-4", children: [
          w && /* @__PURE__ */ e(
            Or,
            {
              variant: "error",
              title: "操作失败",
              message: w,
              className: "text-xs"
            }
          ),
          N,
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
                  className: x(
                    "font-mono text-[11px] tabular-nums",
                    E ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: [
                    A.length,
                    "/",
                    p
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e(
              yt,
              {
                id: C,
                "aria-label": "Reason",
                value: A,
                disabled: h,
                placeholder: b,
                onChange: (R) => L(R.target.value),
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
                children: E ? u : l
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(mf, { children: [
          /* @__PURE__ */ e(
            Ae,
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
            Ae,
            {
              type: "button",
              variant: f ? "danger" : "primary",
              size: "sm",
              disabled: !D,
              loading: h,
              onClick: M,
              children: h ? d : s
            }
          )
        ] })
      ]
    }
  );
}
function Hn(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function pp(t, r) {
  const a = t.filter(
    (o) => !o.hideInTable && o.key !== "__abc_actions__" && o.key !== "__actions__" && o.key !== "__drag_handle__"
  ), n = a.map((o) => Hn(o.title)).join(","), s = r.map(
    (o) => a.map((d) => {
      const c = kn(o, d.dataIndex ?? d.key), b = typeof d.type == "object" ? d.type.options : void 0, l = d.options ?? b;
      if (l && l.length > 0) {
        const u = l.find((m) => String(m.value) === String(c));
        if (u) return Hn(u.label);
      }
      return Hn(c);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function Do(t, r, a) {
  const n = pp(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), d = document.createElement("a");
    d.href = o, d.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(o);
  }
  return n;
}
function hp(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : String(t).trim() !== "";
}
const gp = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
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
  const [f, h] = $(!1), v = s ? [] : r === "dateRange" ? {} : "", [w, k] = $(m ?? v), [g, N] = $("");
  ge(() => {
    f && (k(m ?? (s ? [] : r === "dateRange" ? {} : "")), N(""));
  }, [f, m, s, r]);
  const _ = hp(m), A = (y) => {
    p(y), h(!1);
  }, L = ce(() => {
    const y = (a ?? []).filter((E) => E.value !== ""), T = g.trim().toLowerCase();
    return T ? y.filter(
      (E) => String(E.label ?? "").toLowerCase().includes(T) || String(E.value ?? "").toLowerCase().includes(T)
    ) : y;
  }, [a, g]);
  return /* @__PURE__ */ e(
    Is,
    {
      open: f,
      onOpenChange: h,
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
              if (r === "select" && a) {
                if (s) {
                  const y = Array.isArray(w) ? w.map(String) : [], T = o || L.length > 6 || !!g;
                  return /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
                    T && /* @__PURE__ */ e(
                      yt,
                      {
                        size: "xs",
                        allowClear: !0,
                        placeholder: "搜索选项...",
                        value: g,
                        onChange: (E) => N(E.target.value)
                      }
                    ),
                    /* @__PURE__ */ e("div", { className: "max-h-48 space-y-0.5 overflow-y-auto rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 p-1", children: L.length === 0 ? /* @__PURE__ */ e("div", { className: "py-3 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : L.map((E) => {
                      const D = String(E.value), M = y.includes(D);
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: E.disabled,
                          onClick: () => {
                            const R = M ? y.filter((O) => O !== D) : [...y, D];
                            k(R);
                          },
                          className: x(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-xs)] px-2 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            M ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                          ),
                          children: [
                            /* @__PURE__ */ e("span", { className: "truncate", children: E.label }),
                            /* @__PURE__ */ e(
                              "span",
                              {
                                className: x(
                                  "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border",
                                  M ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                ),
                                children: M && /* @__PURE__ */ e(St, { className: "h-2.5 w-2.5 stroke-[3]" })
                              }
                            )
                          ]
                        },
                        D
                      );
                    }) })
                  ] });
                }
                return /* @__PURE__ */ e(
                  sr,
                  {
                    size: "xs",
                    allowClear: !0,
                    searchable: o,
                    placeholder: d || `选择${t}`,
                    options: a,
                    value: w ?? "",
                    onChange: (y) => {
                      const T = y && typeof y == "object" && "target" in y ? y.target.value : y;
                      k(T);
                    }
                  }
                );
              }
              return r === "treeSelect" ? /* @__PURE__ */ e(
                Ra,
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
                Da,
                {
                  size: "xs",
                  value: w ?? "",
                  format: c,
                  placeholder: d || `选择${t}`,
                  onChange: (y) => k(y)
                }
              ) : r === "dateRange" ? /* @__PURE__ */ e(
                La,
                {
                  size: "xs",
                  value: w && typeof w == "object" ? w : null,
                  format: c,
                  onChange: (y) => k(y)
                }
              ) : r === "number" ? /* @__PURE__ */ e(
                yn,
                {
                  size: "xs",
                  value: w === "" ? null : w,
                  placeholder: d || `输入${t}`,
                  onChange: (y) => k(y ?? "")
                }
              ) : /* @__PURE__ */ e(
                yt,
                {
                  size: "xs",
                  allowClear: !0,
                  placeholder: d || `输入${t}关键字`,
                  value: w ?? "",
                  onChange: (y) => k(y.target.value),
                  onKeyDown: (y) => {
                    y.key === "Enter" && (y.preventDefault(), A(w));
                  }
                }
              );
            })(),
            /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                Ae,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    const y = s ? [] : r === "dateRange" ? {} : "";
                    k(y), A(y);
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(Ae, { variant: "primary", size: "xs", onClick: () => A(w), children: u ?? (l === "search" ? "查询" : "筛选") })
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
            b ? "text-white/95 hover:bg-white/20 hover:text-white" : _ ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: l === "search" ? /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Qa, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function vp({
  columns: t,
  searchableFieldNames: r,
  settings: a,
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
  const f = Me(o), [h, v] = $(!1), [w, k] = $(""), [g, N] = $("all"), [_, A] = $(null), L = be(null), C = be(!1);
  ge(() => {
    if (!_) return;
    const S = (B) => {
      if (B.key === "Escape") {
        const j = L.current;
        A(null), L.current = null, C.current = !1, j && u(j);
      }
    };
    return document.addEventListener("keydown", S, !0), () => document.removeEventListener("keydown", S, !0);
  }, [_, u]);
  const y = ce(
    () => t.filter(
      (S) => !S.hideInTable && S.key !== "__abc_actions__" && S.key !== "__actions__" && S.key !== "__drag_handle__"
    ),
    [t]
  ), T = ce(() => a.columnOrder.length === 0 ? y : [...y].sort((S, B) => {
    const j = a.columnOrder.indexOf(S.key), I = a.columnOrder.indexOf(B.key);
    return j === -1 && I === -1 ? 0 : j === -1 ? 1 : I === -1 ? -1 : j - I;
  }), [y, a.columnOrder]), E = (S) => S.key in a.columnFixed ? a.columnFixed[S.key] ?? void 0 : S.fixed, D = ce(() => {
    const S = w.trim().toLowerCase();
    return T.filter((B) => {
      if (S && !B.title.toLowerCase().includes(S) && !B.key.toLowerCase().includes(S))
        return !1;
      const j = a.hiddenKeys.includes(B.key), I = E(B);
      return g === "fixed" ? !!I : g === "hidden" ? j : !0;
    });
  }, [T, w, g, a.hiddenKeys, a.columnFixed]), M = ce(() => y.map((S) => S.key), [y]), R = ce(
    () => t.find((S) => S.key === "__abc_actions__"),
    [t]
  ), O = !!(n || R), P = a.columnWidths.__abc_actions__ ?? (typeof (R == null ? void 0 : R.width) == "number" ? R.width : void 0) ?? s;
  return /* @__PURE__ */ e(
    Is,
    {
      open: h,
      onOpenChange: v,
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
            Ae,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(ir, { className: "h-3 w-3" }),
              onClick: p,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ e(zt, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
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
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[11px]", children: [
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
            /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(M, !0),
                  className: "text-[var(--abc-primary)] hover:underline cursor-pointer",
                  children: "全显"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(M, !1),
                  className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: "全隐"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: D.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : D.map((S) => {
          const B = !a.hiddenKeys.includes(S.key), j = E(S), I = Array.isArray(S.dataIndex) ? S.dataIndex.join(".") : String(S.dataIndex ?? S.key), z = r.has(I) || r.has(S.key), H = a.searchVisible[I] !== void 0 ? !!a.searchVisible[I] : a.searchVisible[S.key] !== void 0 ? !!a.searchVisible[S.key] : z, U = a.columnWidths[S.key] ?? (typeof S.width == "number" ? S.width : "");
          return /* @__PURE__ */ i(
            "div",
            {
              "data-dragging": _ === S.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                L.current = T.map((K) => K.key), C.current = !1, A(S.key);
              },
              onDragOver: (K) => {
                if (!_ || _ === S.key) return;
                K.preventDefault();
                const ee = T.map((G) => G.key), q = ee.indexOf(_), V = ee.indexOf(S.key);
                if (q < 0 || V < 0 || q === V) return;
                const Z = K.currentTarget.getBoundingClientRect();
                if (Z.height > 0 && (q < V && K.clientY < Z.top + Z.height * 0.35 || q > V && K.clientY > Z.top + Z.height * 0.65))
                  return;
                const oe = [...ee], [F] = oe.splice(q, 1);
                oe.splice(V, 0, F), C.current = !0, u(oe);
              },
              onDrop: () => {
                if (_ && _ !== S.key && !C.current) {
                  const K = T.map((V) => V.key), ee = K.indexOf(_), q = K.indexOf(S.key);
                  if (ee >= 0 && q >= 0) {
                    const V = [...K], [Z] = V.splice(ee, 1);
                    V.splice(q, 0, Z), u(V);
                  }
                }
                A(null), L.current = null, C.current = !1;
              },
              onDragEnd: () => {
                A(null), L.current = null, C.current = !1;
              },
              className: x(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                _ === S.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(vn, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(aa, { checked: B, onChange: () => d(S.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: x(
                        "truncate text-xs",
                        B ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: S.title
                    }
                  ),
                  j && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: j === "left" ? "左固" : "右固" })
                ] }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
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
                        const ee = parseInt(K.target.value, 10);
                        !Number.isNaN(ee) && ee >= 64 && l(S.key, ee);
                      },
                      onKeyDown: (K) => {
                        if (K.key === "Enter") {
                          const ee = parseInt(K.target.value, 10);
                          !Number.isNaN(ee) && ee >= 64 && l(S.key, ee);
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
                      title: H ? "从筛选条件中移除" : "加入筛选条件",
                      "aria-label": `切换 ${S.title} 筛选项显示`,
                      onClick: () => m(I, !H),
                      className: x(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        H ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(zt, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: j === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${S.title} 到左侧`,
                      onClick: () => b(S.key, j === "left" ? null : "left"),
                      className: x(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        j === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Xr, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: j === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${S.title} 到右侧`,
                      onClick: () => b(S.key, j === "right" ? null : "right"),
                      className: x(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        j === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Xr, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            S.key
          );
        }) }),
        O && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
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
                defaultValue: P,
                onBlur: (S) => {
                  const B = parseInt(S.target.value, 10);
                  !Number.isNaN(B) && B >= 80 && l("__abc_actions__", B);
                },
                onKeyDown: (S) => {
                  if (S.key === "Enter") {
                    const B = parseInt(S.target.value, 10);
                    !Number.isNaN(B) && B >= 80 && l("__abc_actions__", B);
                  }
                },
                className: "h-6 w-14 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
              },
              `__abc_actions___${P}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(Ut, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: x(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            h ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(iu, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const xp = ({ actions: t, maxInline: r = 3, autoFit: a = !0, align: n = "right" }) => {
  const s = be(null), o = be(null), [d, c] = $(null), b = t.map((h) => h.key).join("|");
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
      const _ = 4, A = 30, L = N.map((E) => E.offsetWidth);
      if (L.reduce((E, D) => E + D, 0) + Math.max(0, L.length - 1) * _ <= g) {
        c(Math.min(t.length, r));
        return;
      }
      let y = 0, T = 0;
      for (let E = 0; E < L.length; E++) {
        const D = (E > 0 ? y + _ : 0) + L[E];
        if (D + _ + A <= g)
          y = D, T = E + 1;
        else
          break;
      }
      c(Math.min(T, Math.max(1, r - 1)));
    };
    if (w(), typeof ResizeObserver > "u") return;
    const k = new ResizeObserver(() => w());
    return k.observe(h), () => k.disconnect();
  }, [a, b, t.length, r]), t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const l = (h) => /* @__PURE__ */ e(
    Ae,
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
  return /* @__PURE__ */ i(
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
            children: t.map(l)
          }
        ),
        p.map(l),
        f.length > 0 && /* @__PURE__ */ e(
          Aa,
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
                children: /* @__PURE__ */ e(ls, { className: "h-3.5 w-3.5" })
              }
            )
          }
        )
      ]
    }
  );
};
function yp({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  extraContent: n,
  onBatchDelete: s,
  onClear: o,
  motion: d
}) {
  const c = Me(d);
  return t.length === 0 ? null : /* @__PURE__ */ i(
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
        /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--abc-primary-soft)] px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)]", children: [
          "已选择 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-bold tabular-nums", children: t.length }),
          " 项"
        ] }),
        /* @__PURE__ */ e("span", { className: "h-4 w-px bg-[var(--abc-border)]" }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          n,
          a.map((b) => /* @__PURE__ */ e(
            Ae,
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
          s && /* @__PURE__ */ i(
            Ae,
            {
              variant: "danger",
              size: "xs",
              icon: /* @__PURE__ */ e(kr, { className: "h-3 w-3" }),
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
                /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function dg(t, r) {
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
const Lo = 3, wp = ({
  searchFields: t,
  query: r,
  onQueryChange: a,
  onSearch: n,
  onReset: s,
  renderSearchExtra: o,
  isSearchVisible: d = () => !0,
  defaultCollapsed: c = !0,
  collapsed: b,
  onCollapseChange: l,
  className: u
}) => {
  const m = b !== void 0, [p, f] = $(!1), [h, v] = $(c), w = m ? b : h, k = () => {
    const y = !w;
    m || v(y), l == null || l(y);
  }, g = o ? o({ query: r, onQueryChange: a, isSearchVisible: d }) : null, N = !!g, { firstRowKeys: _, hasExtraInFirstRow: A, canCollapse: L } = ce(() => {
    let y = 0;
    const T = /* @__PURE__ */ new Set();
    let E = !1;
    for (const M of t) {
      const R = M.span === 2 ? 2 : 1;
      if (y + R <= Lo)
        y += R, T.add(M.key);
      else
        break;
    }
    N && y < Lo && (E = !0, y += 1);
    const D = T.size < t.length || N && !E;
    return {
      firstRowKeys: T,
      hasExtraInFirstRow: E,
      canCollapse: D
    };
  }, [t, N]);
  if (!t || t.length === 0)
    return null;
  const C = (y) => {
    const T = r[y.key] ?? "";
    switch (y.type) {
      case "select":
        return /* @__PURE__ */ e(
          sr,
          {
            value: T,
            multiple: y.multiple,
            searchable: y.searchable,
            options: y.options || [],
            placeholder: y.placeholder || `请选择${y.label}`,
            clearable: y.clearable !== !1,
            onChange: (E) => {
              var D;
              return a(y.key, ((D = E == null ? void 0 : E.target) == null ? void 0 : D.value) ?? E);
            }
          }
        );
      case "date":
        return /* @__PURE__ */ e(
          Da,
          {
            value: T,
            onChange: (E) => a(y.key, E),
            placeholder: y.placeholder || `请选择${y.label}`,
            format: y.format
          }
        );
      case "datetimePicker":
        return /* @__PURE__ */ e(
          yt,
          {
            type: "datetime-local",
            value: T ? String(T).replace(" ", "T").slice(0, 16) : "",
            onChange: (E) => {
              const D = E.target.value;
              a(y.key, D ? `${D.replace("T", " ")}:00` : "");
            },
            onKeyDown: (E) => E.key === "Enter" && n(),
            placeholder: y.placeholder,
            clearable: y.clearable !== !1
          }
        );
      case "dateRange": {
        const E = r[y.key] || {};
        return /* @__PURE__ */ e(
          La,
          {
            value: E,
            onChange: (D) => a(y.key, D),
            placeholder: y.placeholder ? [y.placeholder, y.placeholder] : ["开始日期", "结束日期"],
            format: y.format
          }
        );
      }
      case "input":
      default:
        return /* @__PURE__ */ e(
          yt,
          {
            value: T,
            onChange: (E) => a(y.key, E.target.value),
            onKeyDown: (E) => E.key === "Enter" && n(),
            placeholder: y.placeholder || `请输入${y.label}`,
            clearable: y.clearable !== !1
          }
        );
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: x(
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
                p ? /* @__PURE__ */ e(er, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(en, { className: "ml-0.5 h-3.5 w-3.5" })
              ]
            }
          )
        ] }),
        !p && /* @__PURE__ */ i("div", { className: "mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4", children: [
          t.map((y) => {
            const T = !w || !L || _.has(y.key);
            return /* @__PURE__ */ i(
              "div",
              {
                className: x(
                  y.span === 2 ? "md:col-span-2" : "flex flex-col justify-end",
                  !T && "hidden"
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
                w && L && !A && "hidden"
              ),
              children: g
            }
          ),
          /* @__PURE__ */ i("div", { className: "flex items-end gap-2 md:col-start-4 md:justify-end", children: [
            /* @__PURE__ */ e(
              Ae,
              {
                variant: "primary",
                size: "sm",
                onClick: n,
                icon: /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "搜索"
              }
            ),
            /* @__PURE__ */ e(
              Ae,
              {
                variant: "secondary",
                size: "sm",
                onClick: s,
                icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "重置"
              }
            ),
            L && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: k,
                className: "ml-1 inline-flex items-center justify-center px-1 py-2 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
                children: [
                  /* @__PURE__ */ e("span", { children: w ? "展开" : "收起" }),
                  w ? /* @__PURE__ */ e(er, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(en, { className: "ml-0.5 h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}, ug = wp, Yi = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
], Np = {};
function Bo(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : !0;
}
function kp(t, r) {
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
function Sp({ ctx: t }) {
  const {
    title: r,
    columns: a,
    showExport: n,
    showImport: s,
    onImport: o,
    showBatchDelete: d,
    columnSettingsEnabled: c,
    toolbarButtons: b,
    onDeleteRecords: l,
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
    setSearchFieldVisible: _,
    setDensity: A,
    resetSettings: L,
    hasRemoteSource: C,
    isClientFilter: y,
    setIsClientFilter: T,
    headerFilterMode: E,
    updateHeaderFilterMode: D,
    extraFilterCollapsed: M,
    setExtraFilterCollapsed: R,
    quickKeyword: O,
    setQuickKeyword: P,
    setCurrent: S,
    exporting: B,
    loading: j,
    selectedKeys: I,
    isFullScreen: z,
    autoRefreshPopoverOpen: H,
    setAutoRefreshPopoverOpen: U,
    showAutoRefreshControl: K,
    autoRefreshEnabled: ee,
    setAutoRefreshEnabled: q,
    autoRefreshInterval: V,
    setAutoRefreshInterval: Z,
    searchableFieldNames: oe,
    allSearchFields: F,
    visibleSearchFields: G,
    extraFilterFields: ye,
    canBatchDelete: Ie,
    effectiveExportable: ne,
    canOpenAdd: me,
    toggleFullScreen: pe,
    fetchServerData: de,
    updateSelectedState: Ce,
    resetAllFilters: ke,
    openCreateModal: we,
    handleBatchDelete: Se,
    selectionEnabled: X,
    hasAnyRowAction: te,
    defaultActionColWidth: Re,
    handleExportAction: qe,
    submitSearch: Xe,
    renderSearchControl: Je,
    effectiveShowClientFilterSwitch: ot,
    currentIntervalLabel: rt,
    showHeaderFilterToggle: jt,
    showTopPageHeader: Pt,
    resolvedToolbarExtra: mt,
    resolvedAddText: Fe
  } = t;
  return /* @__PURE__ */ i(Ke, { children: [
    E && M && ye.length > 0 && /* @__PURE__ */ e("div", { className: "border-b border-[var(--abc-border)] px-4 py-2.5", children: /* @__PURE__ */ i("div", { className: "flex flex-wrap items-end gap-3", children: [
      ye.map((De) => /* @__PURE__ */ i("div", { className: "w-48", children: [
        /* @__PURE__ */ e("div", { className: "mb-1 text-[11px] text-[var(--abc-fg-muted)]", children: De.label }),
        Je(De)
      ] }, De.key)),
      /* @__PURE__ */ e(
        Ae,
        {
          variant: "primary",
          size: "sm",
          onClick: () => Xe(),
          icon: /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5" }),
          children: "查询"
        }
      )
    ] }) }),
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
      /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
        !Pt && r && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: r }),
        me && /* @__PURE__ */ e(
          Ae,
          {
            variant: "primary",
            size: "sm",
            icon: /* @__PURE__ */ e(hn, { className: "h-3.5 w-3.5" }),
            onClick: () => void we(),
            children: Fe
          }
        ),
        d && Ie && (l || (f == null ? void 0 : f.delete)) && /* @__PURE__ */ e(
          Ae,
          {
            variant: "danger",
            size: "sm",
            disabled: I.length === 0,
            icon: /* @__PURE__ */ e(kr, { className: "h-3.5 w-3.5" }),
            onClick: () => void Se(I),
            children: "批量删除"
          }
        ),
        n && ne && /* @__PURE__ */ e(
          Ae,
          {
            variant: "secondary",
            size: "sm",
            loading: B,
            icon: /* @__PURE__ */ e(Wn, { className: "h-3.5 w-3.5" }),
            onClick: () => void qe(),
            children: "导出"
          }
        ),
        s && /* @__PURE__ */ e(
          Ae,
          {
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ e(mn, { className: "h-3.5 w-3.5" }),
            onClick: () => void (o == null ? void 0 : o()),
            children: "导入"
          }
        ),
        b.filter((De) => p(De.permission)).map((De) => /* @__PURE__ */ e(
          Ae,
          {
            variant: De.variant ?? De.type ?? "secondary",
            size: "sm",
            icon: De.icon,
            onClick: De.onClick,
            children: De.label
          },
          De.key
        )),
        mt,
        E && ye.length > 0 && /* @__PURE__ */ e(
          Ae,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => R((De) => !De),
            children: M ? "收起筛选" : "展开筛选"
          }
        ),
        E && G.length > 0 && /* @__PURE__ */ e(
          Ae,
          {
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
            onClick: ke,
            children: "重置"
          }
        ),
        X && I.length > 0 && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-2 rounded-full bg-[var(--abc-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--abc-primary)]", children: [
          /* @__PURE__ */ i("span", { children: [
            "已选择 ",
            I.length,
            " 项"
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => Ce([], []),
              className: "hover:underline cursor-pointer",
              children: "取消"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
        y && F.length === 0 && /* @__PURE__ */ e(
          yt,
          {
            size: "xs",
            allowClear: !0,
            prefix: /* @__PURE__ */ e(Qa, { className: "h-3 w-3" }),
            placeholder: "当前数据即时检索（支持拼音）...",
            value: O,
            onChange: (De) => {
              P(De.target.value), S(1);
            },
            wrapperClassName: "w-52"
          }
        ),
        K && C && /* @__PURE__ */ i("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
          /* @__PURE__ */ e(
            Ut,
            {
              content: ee ? `自动刷新运行中：每 ${rt} 轮询（点击暂停）` : "点击开启自动刷新",
              children: /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  "aria-label": "切换定时自动刷新",
                  onClick: () => q((De) => !De),
                  className: x(
                    "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                    ee ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      Za,
                      {
                        className: x("h-3.5 w-3.5", ee && "animate-pulse")
                      }
                    ),
                    ee && /* @__PURE__ */ e("span", { children: rt })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ e(
            Is,
            {
              open: H,
              onOpenChange: U,
              placement: "bottomRight",
              panelClassName: "w-44 p-2.5",
              content: /* @__PURE__ */ i("div", { className: "space-y-2 text-xs text-[var(--abc-fg)]", children: [
                /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] pb-2", children: [
                  /* @__PURE__ */ e("span", { className: "font-semibold", children: "自动刷新" }),
                  /* @__PURE__ */ e(
                    rr,
                    {
                      size: "xs",
                      checked: ee,
                      onChange: (De) => q(De)
                    }
                  )
                ] }),
                /* @__PURE__ */ i("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ e("div", { className: "px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "刷新间隔" }),
                  Yi.map((De) => /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        Z(De.key), q(!0), U(!1);
                      },
                      className: x(
                        "flex w-full items-center justify-between rounded-[var(--abc-radius-xs)] px-2 py-1 text-left text-xs transition-colors cursor-pointer",
                        V === De.key ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: [
                        /* @__PURE__ */ e("span", { children: De.label }),
                        V === De.key && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ]
                    },
                    De.key
                  ))
                ] })
              ] }),
              children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "选择轮询频率",
                  className: "inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(er, { className: "h-3 w-3" })
                }
              )
            }
          )
        ] }),
        ot && /* @__PURE__ */ e(
          Ut,
          {
            content: y ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
            children: /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-pressed": y,
                "aria-label": "切换前端本地筛选模式",
                onClick: () => {
                  const De = !y;
                  T(De), S(1), u.info(
                    De ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式"
                  );
                },
                className: x(
                  "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                  y ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  /* @__PURE__ */ e(Qa, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: y ? "前端筛选" : "接口筛选" })
                ]
              }
            )
          }
        ),
        jt && /* @__PURE__ */ e(Ut, { content: E ? "关闭表头内联筛选" : "开启表头内联筛选", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "切换表头内联筛选",
            onClick: () => D(!E),
            className: x(
              "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
              E ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(lu, { className: "h-3.5 w-3.5" })
          }
        ) }),
        ne && !n && /* @__PURE__ */ e(Ut, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "导出数据",
            onClick: () => void qe(),
            className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Wn, { className: "h-3.5 w-3.5" })
          }
        ) }),
        C && /* @__PURE__ */ e(Ut, { content: "刷新表格数据", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "刷新数据",
            onClick: () => void de(),
            className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(jr, { className: x("h-3.5 w-3.5", j && "animate-spin") })
          }
        ) }),
        /* @__PURE__ */ e(
          Aa,
          {
            placement: "bottomRight",
            items: [
              {
                key: "comfortable",
                label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ e("span", { children: "宽松" }),
                  h.density === "comfortable" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                ] }),
                onClick: () => A("comfortable")
              },
              {
                key: "default",
                label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ e("span", { children: "默认" }),
                  h.density === "default" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                ] }),
                onClick: () => A("default")
              },
              {
                key: "compact",
                label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ e("span", { children: "紧凑" }),
                  h.density === "compact" && /* @__PURE__ */ e(St, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                ] }),
                onClick: () => A("compact")
              }
            ],
            children: /* @__PURE__ */ e(Ut, { content: "表格行密度", children: /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "表格行密度",
                className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(cu, { className: "h-3.5 w-3.5" })
              }
            ) })
          }
        ),
        /* @__PURE__ */ e(Ut, { content: z ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": z ? "退出全屏" : "全屏展示",
            onClick: pe,
            className: x(
              "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
              z ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: z ? /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(ss, { className: "h-3.5 w-3.5" })
          }
        ) }),
        c && /* @__PURE__ */ e(
          vp,
          {
            columns: a,
            searchableFieldNames: oe,
            settings: h,
            hasActionColumn: te,
            defaultActionWidth: Re,
            motion: m,
            onToggleVisible: v,
            onSetAllVisible: w,
            onSetFixed: k,
            onSetWidth: g,
            onSetOrder: N,
            onSetSearchVisible: _,
            onReset: L
          }
        )
      ] })
    ] })
  ] });
}
function Cp({ ctx: t }) {
  const {
    columns: r,
    formSchema: a,
    dialogTitle: n,
    dialogSize: s,
    formLayout: o,
    draftConfig: d,
    apiProp: c,
    viewTitle: b,
    viewSize: l,
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
    hasRemoteSource: _,
    permittedBatchActions: A,
    selectedKeys: L,
    viewingRecord: C,
    setViewingRecord: y,
    viewLoading: T,
    resolvedFormFields: E,
    buildDefaultFormValues: D,
    form: M,
    draftEnabled: R,
    autoRestoreDraft: O,
    draft: P,
    modalOpen: S,
    setModalOpen: B,
    isEdit: j,
    editingRecord: I,
    formSubmitting: z,
    formDetailLoading: H,
    formError: U,
    showDraftBanner: K,
    setShowDraftBanner: ee,
    canBatchDelete: q,
    canOpenEdit: V,
    fetchServerData: Z,
    updateSelectedState: oe,
    selectedRows: F,
    openEditModal: G,
    handleFormSubmit: ye,
    handleBatchDelete: Ie,
    selectionEnabled: ne,
    effectiveFormColumns: me
  } = t;
  return /* @__PURE__ */ i(Ke, { children: [
    ne && L.length > 0 && /* @__PURE__ */ e(
      yp,
      {
        selectedKeys: L,
        selectedRows: F,
        batchActions: A,
        extraContent: f == null ? void 0 : f(L, F),
        motion: g,
        onBatchDelete: q && (w || N != null && N.delete) ? () => void Ie(L) : void 0,
        onClear: () => oe([], [])
      }
    ),
    /* @__PURE__ */ e(
      bp,
      {
        open: !!C,
        onClose: () => y(null),
        record: C,
        columns: r,
        viewTitle: b ?? (c ? "详情" : "记录详情"),
        viewSize: l,
        viewLoading: T,
        canEdit: V,
        onEditRecord: (pe) => void G(pe),
        renderViewExtra: u,
        renderViewFooter: m
      }
    ),
    /* @__PURE__ */ e(
      up,
      {
        open: S,
        onClose: () => B(!1),
        isEdit: j,
        currentRecord: I,
        container: p,
        dialogTitle: n ?? (c ? { add: "新增", edit: "编辑" } : { add: "新建记录", edit: "编辑记录" }),
        dialogSize: s,
        formLayout: o,
        formColumns: me,
        formFields: E,
        form: M,
        formSchema: a,
        columns: r,
        formSubmitting: z,
        formDetailLoading: H,
        formError: U,
        onSubmit: ye,
        draftEnabled: R,
        showDraftButton: !!(d != null && d.showDraftButton && R),
        showDraftBanner: K,
        draftBannerMode: O ? "auto-restored" : "prompt",
        onSaveDraft: R ? () => {
          P.saveDraft(M.getValues()), k.success("草稿已保存");
        } : void 0,
        onRestoreDraft: () => {
          const pe = P.readDraft();
          pe && M.reset({ ...D(), ...pe }), ee(!1);
        },
        onDiscardDraft: () => {
          P.clearDraft(), O && M.reset(D()), ee(!1);
        },
        submitButtonText: c ? "保存" : "确认提交",
        renderFormExtra: h,
        renderCustomForm: v,
        onSuccessFetch: () => {
          _ && Z();
        }
      }
    )
  ] });
}
function Ep({ ctx: t }) {
  const {
    title: r,
    subTitle: a,
    searchVariant: n,
    renderSearchExtra: s,
    settings: o,
    headerFilterMode: d,
    searchPanelExpanded: c,
    setSearchPanelExpanded: b,
    searchFieldsCollapsed: l,
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
    renderSearchControl: _,
    showTopPageHeader: A,
    resolvedHeaderExtra: L,
    resolvedCardExtra: C
  } = t;
  return /* @__PURE__ */ i(Ke, { children: [
    A && (r || a || L) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ i("div", { children: [
        r && /* @__PURE__ */ e("h2", { className: "text-lg font-bold tracking-tight text-[var(--abc-fg)]", children: r }),
        a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
      ] }),
      L && /* @__PURE__ */ e("div", { children: L })
    ] }),
    C,
    n === "toolbar" && (f.length > 0 || !!s) && !d && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ i(
      "form",
      {
        onSubmit: (y) => {
          y.preventDefault(), N();
        },
        className: "flex flex-wrap items-center gap-2.5",
        children: [
          v.map((y) => /* @__PURE__ */ e("div", { className: "flex items-center", children: _(y, {
            input: y.span === 2 ? "w-80 sm:w-96" : "w-72 sm:w-80",
            select: "w-40"
          }) }, y.key)),
          s == null ? void 0 : s({
            query: m,
            onQueryChange: g,
            isSearchVisible: (y) => o.searchVisible[y] !== !1
          }),
          /* @__PURE__ */ e(
            Ae,
            {
              size: "sm",
              type: "submit",
              variant: "primary",
              icon: /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5" }),
              children: "搜索"
            }
          ),
          /* @__PURE__ */ e(
            Ae,
            {
              size: "sm",
              type: "button",
              variant: "secondary",
              icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
              onClick: k,
              children: "重置"
            }
          ),
          w > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
            "已生效 ",
            w,
            " 项"
          ] })
        ]
      }
    ) }),
    n === "card" && (f.length > 0 || !!s) && !d && /* @__PURE__ */ e("div", { ref: p, children: /* @__PURE__ */ i(ln, { padding: "none", children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(Qa, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选条件" }),
          w > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
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
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            "aria-expanded": c,
            onClick: () => b((y) => !y),
            className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer select-none",
            children: [
              /* @__PURE__ */ e("span", { children: c ? "收起" : "展开" }),
              c ? /* @__PURE__ */ e(en, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(er, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": c, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ i(
        "form",
        {
          onSubmit: (y) => {
            y.preventDefault(), N();
          },
          className: "grid grid-cols-1 items-end gap-3.5 p-4 sm:grid-cols-2 lg:grid-cols-4",
          children: [
            v.map((y) => /* @__PURE__ */ e(
              Ms,
              {
                label: y.label,
                className: y.span === 2 || y.type === "dateRange" ? "sm:col-span-2" : void 0,
                children: _(y)
              },
              y.key
            )),
            (!l || !h.canCollapse || h.extraFitsFirstRow) && (s == null ? void 0 : s({
              query: m,
              onQueryChange: g,
              isSearchVisible: (y) => o.searchVisible[y] !== !1
            })),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2 lg:col-start-4 lg:justify-end", children: [
              /* @__PURE__ */ e(
                Ae,
                {
                  size: "sm",
                  type: "submit",
                  variant: "primary",
                  icon: /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5" }),
                  children: "搜索"
                }
              ),
              /* @__PURE__ */ e(
                Ae,
                {
                  size: "sm",
                  type: "button",
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(ir, { className: "h-3.5 w-3.5" }),
                  onClick: k,
                  children: "重置"
                }
              ),
              h.canCollapse && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: () => u((y) => !y),
                  className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:underline cursor-pointer select-none",
                  children: [
                    /* @__PURE__ */ e("span", { children: l ? `展开 (${h.hiddenCount})` : "收起" }),
                    l ? /* @__PURE__ */ e(er, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(en, { className: "h-3.5 w-3.5" })
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
function _p(t, r) {
  var Rt;
  const {
    title: a,
    storageKey: n,
    subTitle: s,
    apiProp: o,
    defaultQuery: d,
    rowKey: c,
    onSearchChange: b,
    onSearchSubmit: l,
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
    rowSelection: _,
    showRowSelection: A,
    batchActions: L,
    renderBatchActions: C,
    treeData: y,
    expandable: T,
    sortable: E,
    toolbarExtra: D,
    renderToolbarExtra: M,
    headerExtra: R,
    renderExtra: O,
    cardExtra: P,
    renderCardExtra: S,
    onDeleteRecords: B,
    toast: j,
    checkPermission: I,
    resolvedApi: z,
    apiRef: H,
    settings: U,
    hasRemoteSource: K,
    isClientFilter: ee,
    searchInputs: q,
    setSearchInputs: V,
    searchInputsRef: Z,
    appliedFilters: oe,
    setAppliedFilters: F,
    current: G,
    setCurrent: ye,
    pageSize: Ie,
    setExporting: ne,
    remoteRows: me,
    childrenData: pe,
    childrenLoading: de,
    childrenError: Ce,
    autoRefreshInterval: ke,
    allSearchFields: we,
    resolvedFormFields: Se,
    canBatchDelete: X,
    effectiveViewable: te,
    canOpenEdit: Re,
    canOpenDelete: qe,
    resolveRowKey: Xe
  } = t, {
    fetchServerData: Je,
    visibleColumns: ot,
    processedClientRows: rt,
    openEditModal: jt,
    openViewModal: Pt,
    handleSingleDelete: mt,
    handleExpandRow: Fe
  } = r, De = ce(
    () => L.filter((se) => I(se.permission)),
    [L, I]
  ), _t = _ ?? A ?? !!(X && (B || z != null && z.delete) || De.length > 0 || C), at = N ?? (k.length > 0 && w.length === 0 ? 6 : 3), Dt = te || Re || qe || w.length > 0 || k.length > 0, it = g !== void 0 ? k.length > 0 ? Math.max(g, 220) : g : k.length > 0 || o ? 220 : te || w.length > 0 ? 184 : 136, ut = k.length > 0 || o ? "left" : "right", At = ce(() => {
    const se = [...ot];
    return E != null && E.enabled && se.unshift({
      key: "__drag_handle__",
      title: "排序",
      width: 68,
      align: "center",
      sortable: !1,
      sorter: !1,
      render: () => /* @__PURE__ */ e(vn, { className: "mx-auto h-4 w-4 cursor-grab text-[var(--abc-fg-placeholder)]" })
    }), Dt && se.push({
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: it,
      align: ut,
      sortable: !1,
      sorter: !1,
      render: (Ve, Qe, st) => {
        var Ft;
        const et = [];
        let Et = !1, Wt = !1;
        te && et.push({
          key: "__view__",
          label: o ? "查看" : "详情",
          icon: /* @__PURE__ */ e(Qr, { className: "h-3 w-3" }),
          onClick: () => void Pt(Qe)
        });
        for (const ze of k) {
          if (ze.key === "edit" && !ze.onClick) {
            Et = !0, Re && et.push({
              key: "__edit__",
              label: ze.label ?? "编辑",
              icon: /* @__PURE__ */ e(Ya, { className: "h-3 w-3" }),
              onClick: () => void jt(Qe)
            });
            continue;
          }
          if (ze.key === "delete" && !ze.onClick) {
            Wt = !0, qe && et.push({
              key: "__delete__",
              label: ze.label ?? "删除",
              icon: /* @__PURE__ */ e(kr, { className: "h-3 w-3" }),
              danger: !0,
              onClick: () => void mt(Qe, st)
            });
            continue;
          }
          if (ze.key === "edit" && (Et = !0), ze.key === "delete" && (Wt = !0), !(typeof ze.show == "function" ? ze.show(Qe) : ze.show !== !1) || !I(ze.permission)) continue;
          const qt = typeof ze.disabled == "function" ? ze.disabled(Qe) : !!ze.disabled, mr = typeof ze.title == "function" ? ze.title(Qe) : ze.title, vr = typeof ze.icon == "string" ? /* @__PURE__ */ e(hr, { name: ze.icon, size: 13 }) : ze.icon;
          et.push({
            key: ze.key,
            label: ze.label,
            icon: vr,
            variant: ze.variant ?? ze.type ?? "text",
            danger: (ze.variant ?? ze.type) === "danger",
            disabled: qt,
            title: mr,
            className: ze.className,
            onClick: async () => {
              var he;
              if (qt) return;
              const ie = (he = ze.onClick) == null ? void 0 : he.call(ze, Qe);
              ie && typeof ie.then == "function" && (await ie, K && Je());
            }
          });
        }
        !Et && Re && k.length === 0 && et.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Ya, { className: "h-3 w-3" }),
          onClick: () => void jt(Qe)
        });
        for (const ze of w)
          I(ze.permission) && ((Ft = ze.hidden) != null && Ft.call(ze, Qe) || et.push({
            key: ze.key,
            label: ze.label,
            icon: ze.icon,
            danger: ze.danger,
            onClick: async () => {
              const tr = ze.onClick(Qe);
              tr && typeof tr.then == "function" && (await tr, K && Je());
            }
          }));
        return !Et && Re && k.length > 0 && et.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(Ya, { className: "h-3 w-3" }),
          onClick: () => void jt(Qe)
        }), !Wt && qe && et.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(kr, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => void mt(Qe, st)
        }), /* @__PURE__ */ e(
          xp,
          {
            actions: et,
            maxInline: at,
            autoFit: N === void 0,
            align: ut
          }
        );
      }
    }), se;
  }, [
    ot,
    E == null ? void 0 : E.enabled,
    Dt,
    it,
    ut,
    te,
    o,
    k,
    Re,
    qe,
    w,
    at,
    N,
    I,
    Pt,
    jt,
    mt,
    K,
    Je
  ]), pt = ce(() => {
    if (!T && !(z != null && z.children)) return;
    const se = (Ve, Qe, st = 0, et = !0) => {
      if (T != null && T.expandedRowRender)
        return T.expandedRowRender(Ve, Qe, st, et);
      const Et = Xe(Ve, Qe);
      if (de[Et])
        return /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "加载中..." });
      if (Ce[Et])
        return /* @__PURE__ */ i("div", { className: "py-5 text-center text-xs text-[var(--abc-danger)]", children: [
          /* @__PURE__ */ e("span", { children: Ce[Et] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => void Fe(!0, Ve),
              className: "ml-2 text-[var(--abc-primary)] hover:underline cursor-pointer",
              children: "重试"
            }
          )
        ] });
      const Wt = pe[Et] || [];
      return Wt.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无子项数据" }) : /* @__PURE__ */ e(
        Bi,
        {
          columns: ot,
          data: Wt,
          rowKey: c,
          density: U.density
        }
      );
    };
    return {
      ...T,
      rowExpandable: (T == null ? void 0 : T.rowExpandable) ?? (z != null && z.children ? () => !0 : void 0),
      expandedRowRender: y ? void 0 : z != null && z.children || T != null && T.expandedRowRender ? se : void 0,
      onExpand: Fe
    };
  }, [
    T,
    z == null ? void 0 : z.children,
    y,
    Xe,
    de,
    Ce,
    pe,
    Fe,
    ot,
    c,
    U.density
  ]), lt = async () => {
    var Qe;
    const se = ee || !K ? rt : me;
    if (o) {
      ne(!0);
      try {
        const st = qa({
          ...d,
          ...oe,
          pageNum: G,
          pageSize: Ie
        });
        if (f)
          await f(st);
        else if ((Qe = H.current) != null && Qe.export)
          await H.current.export(st);
        else {
          const et = typeof a == "string" && a.trim() ? a.trim() : n || "table-export";
          Do(et, ot, se);
        }
        j.success("导出成功");
      } catch (st) {
        j.error((st == null ? void 0 : st.message) || "导出失败");
      } finally {
        ne(!1);
      }
      return;
    }
    if (f) {
      await f(se);
      return;
    }
    const Ve = typeof a == "string" && a.trim() ? a.trim() : n || "table-export";
    Do(Ve, ot, se), j.success(`已导出 ${se.length} 条记录`);
  }, Nt = fe(
    (se, Ve) => {
      V((Qe) => {
        const st = { ...Qe, [se]: Ve };
        return Z.current = st, b == null || b(st), st;
      });
    },
    [b]
  ), Ze = fe(
    (se) => {
      const Ve = { ...Z.current, ...se || {} };
      Z.current = Ve, V(Ve), F(Ve), ye(1), l == null || l(Ve);
    },
    [l]
  ), tt = (se, Ve) => {
    const Qe = q[se.key], st = (et) => Nt(se.key, et);
    if (se.type === "select")
      return /* @__PURE__ */ e(
        sr,
        {
          allowClear: se.clearable !== !1,
          searchable: se.searchable ?? !0,
          multiple: se.multiple,
          options: se.options ?? [],
          placeholder: se.placeholder ?? (se.__fromFieldSchema ? `全部${se.label}` : `请选择${se.label}`),
          value: Qe ?? (se.multiple ? [] : ""),
          onChange: (et) => {
            const Et = et && typeof et == "object" && "target" in et ? et.target.value : et;
            st(Et);
          },
          className: Ve == null ? void 0 : Ve.select
        }
      );
    if (se.type === "treeSelect") {
      const et = !!(se.multiple || se.treeCheckable);
      return /* @__PURE__ */ e(
        Ra,
        {
          "aria-label": se.label,
          allowClear: se.clearable !== !1,
          searchable: se.searchable ?? !0,
          multiple: se.multiple,
          treeCheckable: se.treeCheckable,
          treeCheckStrictly: se.treeCheckStrictly,
          showCheckedStrategy: se.showCheckedStrategy,
          selectableLeafOnly: se.selectableLeafOnly,
          fieldNames: se.fieldNames,
          treeDataSimpleMode: se.treeDataSimpleMode,
          maxTagCount: se.maxTagCount,
          treeDefaultExpandAll: se.treeDefaultExpandAll,
          treeData: se.treeData ?? [],
          placeholder: se.placeholder ?? (se.__fromFieldSchema ? `全部${se.label}` : `请选择${se.label}`),
          value: Qe ?? (et ? [] : ""),
          onChange: (Et) => st(Et),
          className: Ve == null ? void 0 : Ve.select
        }
      );
    }
    return se.type === "date" || se.type === "datetimePicker" ? /* @__PURE__ */ e(
      Da,
      {
        value: Qe ?? "",
        placeholder: se.placeholder ?? (se.__fromFieldSchema ? `选择${se.label}` : `请选择${se.label}`),
        onChange: st
      }
    ) : se.type === "dateRange" ? /* @__PURE__ */ e(La, { value: Qe ?? null, onChange: st }) : se.type === "number" ? /* @__PURE__ */ e(
      yn,
      {
        value: Qe ?? null,
        placeholder: se.placeholder ?? `输入${se.label}`,
        onChange: st,
        className: Ve == null ? void 0 : Ve.input
      }
    ) : /* @__PURE__ */ e(
      yt,
      {
        allowClear: se.clearable !== !1,
        placeholder: se.placeholder ?? (se.__fromFieldSchema ? `搜索${se.label}` : `请输入${se.label}`),
        value: Qe ?? "",
        onChange: (et) => st(et.target.value),
        wrapperClassName: Ve == null ? void 0 : Ve.input
      }
    );
  }, Tt = h ?? (o || Se.length >= 6 ? 2 : 1), J = p ?? !!(o && we.length > 0), le = ((Rt = Yi.find((se) => se.key === ke)) == null ? void 0 : Rt.label) ?? "5秒", Le = m ?? u === void 0, Pe = !!(s || R || O || o && a), ct = R ?? (O == null ? void 0 : O()), nt = P ?? (S == null ? void 0 : S()), kt = D ?? (M == null ? void 0 : M()), bt = v ?? (o ? "新增" : "新建记录"), Yt = ce(
    () => we.filter((se) => Bo(oe[se.key])).map((se) => se.columnKey || se.key),
    [we, oe]
  ), Ot = ce(
    () => Object.fromEntries(
      we.filter((se) => Bo(oe[se.key])).map((se) => [se.columnKey || se.key, kp(se, oe[se.key])])
    ),
    [we, oe]
  );
  return {
    selectionEnabled: _t,
    effectiveMaxInlineActions: at,
    permittedBatchActions: De,
    hasAnyRowAction: Dt,
    defaultActionColWidth: it,
    actionColAlign: ut,
    finalColumns: At,
    resolvedExpandable: pt,
    handleExportAction: lt,
    updateSearchInput: Nt,
    submitSearch: Ze,
    renderSearchControl: tt,
    effectiveFormColumns: Tt,
    effectiveShowClientFilterSwitch: J,
    currentIntervalLabel: le,
    showHeaderFilterToggle: Le,
    showTopPageHeader: Pe,
    resolvedHeaderExtra: ct,
    resolvedCardExtra: nt,
    resolvedToolbarExtra: kt,
    resolvedAddText: bt,
    activeFilterKeys: Yt,
    activeFilterLabels: Ot
  };
}
function Tp(t) {
  const {
    columns: r,
    draftConfig: a,
    dataSource: n,
    request: s,
    apiProp: o,
    defaultQuery: d,
    rowKey: c,
    hidePagination: b,
    pagination: l,
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
    openEditRef: _,
    onAdd: A,
    onEdit: L,
    onDelete: C,
    onBeforeAdd: y,
    onBeforeEdit: T,
    onBeforeSubmit: E,
    onBeforeDelete: D,
    onBeforeBatchDelete: M,
    onAfterSave: R,
    onAfterDelete: O,
    onAfterBatchDelete: P,
    onSaveRecord: S,
    onDeleteRecords: B,
    toast: j,
    apiRef: I,
    onListLoadedRef: z,
    settings: H,
    hasRemoteSource: U,
    isClientFilter: K,
    setSearchInputs: ee,
    searchInputsRef: q,
    appliedFilters: V,
    setAppliedFilters: Z,
    quickKeyword: oe,
    setQuickKeyword: F,
    sortState: G,
    setSortState: ye,
    current: Ie,
    setCurrent: ne,
    pageSize: me,
    setInternalLoading: pe,
    remoteRows: de,
    setRemoteRows: Ce,
    remoteTotal: ke,
    setRemoteTotal: we,
    setInternalSelectedKeys: Se,
    selectedKeys: X,
    cachedSelectedRows: te,
    setCachedSelectedRows: Re,
    childrenData: qe,
    setChildrenData: Xe,
    setChildrenLoading: Je,
    setChildrenError: ot,
    autoRefreshEnabled: rt,
    autoRefreshInterval: jt,
    requestSeqRef: Pt,
    setViewingRecord: mt,
    setViewLoading: Fe,
    resolvedFormFields: De,
    buildDefaultFormValues: _t,
    form: at,
    draftEnabled: Dt,
    autoRestoreDraft: it,
    draft: ut,
    modalOpen: At,
    setModalOpen: pt,
    isEdit: lt,
    setIsEdit: Nt,
    editingRecord: Ze,
    setEditingRecord: tt,
    setFormSubmitting: Tt,
    setFormDetailLoading: J,
    setFormError: le,
    setShowDraftBanner: Le,
    resolveRowKey: Pe
  } = t, ct = ce(
    () => K ? Np : V,
    [K, V]
  ), nt = fe(async () => {
    var he, Te, W;
    if (!s && !((he = I.current) != null && he.list)) return;
    const ie = ++Pt.current;
    pe(!0);
    try {
      if (s) {
        const Ee = await s({
          current: Ie,
          pageSize: me,
          filters: qa(ct),
          sortField: G.direction ? G.key : void 0,
          sortOrder: G.direction
        });
        if (ie !== Pt.current) return;
        Ce(Ee.data), we(Ee.total), (Te = z.current) == null || Te.call(z, Ee.data);
        return;
      }
      const Y = I.current;
      if (!(Y != null && Y.list)) return;
      const ue = qa({
        ...d,
        ...ct,
        pageNum: Ie,
        pageSize: me,
        ...G.direction ? {
          orderBy: G.key,
          orderType: G.direction,
          sortField: G.key,
          sortOrder: G.direction
        } : {}
      }), ae = await Y.list(ue);
      if (ie !== Pt.current) return;
      if (pr(ae) && !(ae != null && ae.data) && !(ae != null && ae.list)) {
        j.error((ae == null ? void 0 : ae.msg) || "获取表格数据失败"), Ce([]), we(0);
        return;
      }
      const { list: ve, total: xe } = rs(ae);
      Ce(ve), we(xe), (W = z.current) == null || W.call(z, ve);
    } catch (Y) {
      ie === Pt.current && j.error((Y == null ? void 0 : Y.message) || "加载表格数据失败");
    } finally {
      ie === Pt.current && pe(!1);
    }
  }, [
    s,
    d,
    Ie,
    me,
    ct,
    G,
    j
  ]);
  ge(() => {
    U && nt();
  }, [U, nt]), ge(() => {
    if (g)
      return g.current = (ie = !1) => {
        ie && Ie !== 1 ? ne(1) : nt();
      }, () => {
        g.current = null;
      };
  }, [g, Ie, nt]), ge(() => {
    if (!rt || !U || jt <= 0 || typeof window > "u")
      return;
    const ie = window.setInterval(() => {
      nt();
    }, jt);
    return () => window.clearInterval(ie);
  }, [rt, jt, U, nt]), ge(() => {
    At && De.forEach((ie) => {
      var he;
      return (he = ie.onFormReady) == null ? void 0 : he.call(ie, at, lt);
    });
  }, [At, lt, De, at]), ge(() => {
    if (!(!At || !Dt)) {
      if (it && !lt) {
        const ie = at.watch((he) => {
          ut.saveDraft(he);
        });
        return () => ie.unsubscribe();
      }
      if (a != null && a.autoSave) {
        let ie;
        const he = () => {
          ie !== void 0 && window.clearTimeout(ie), ie = window.setTimeout(() => {
            ut.saveDraft(at.getValues()), Le(!1);
          }, a.autoSaveInterval || 3e4);
        };
        he();
        const Te = at.watch(() => {
          he();
        });
        return () => {
          ie !== void 0 && window.clearTimeout(ie), Te.unsubscribe();
        };
      }
    }
  }, [
    At,
    Dt,
    it,
    lt,
    a == null ? void 0 : a.autoSave,
    a == null ? void 0 : a.autoSaveInterval,
    at,
    ut
  ]);
  const kt = fe(
    (ie, he) => {
      f === void 0 && Se(ie);
      const W = he ?? (n ?? de).filter((Y, ue) => ie.includes(Pe(Y, ue)));
      Re(W), h == null || h(ie, W);
    },
    [f, n, de, Pe, h]
  ), bt = ce(() => te.length > 0 && te.length === X.length ? te : (n ?? de).filter((he, Te) => X.includes(Pe(he, Te))), [te, X, n, de, Pe]), Yt = ce(() => {
    const ie = r.filter((he) => !he.hideInTable && !H.hiddenKeys.includes(he.key)).sort((he, Te) => (he.order ?? 999) - (Te.order ?? 999)).map((he) => {
      const Te = typeof he.type == "object" && he.type !== null ? he.type : void 0, W = typeof he.search == "object" && he.search !== null && Array.isArray(he.search.options) ? he.search.options.filter((ue) => ue.value !== "") : void 0, Y = !!(!he.options && !(Te != null && Te.options) && W);
      return {
        ...he,
        options: he.options ?? W,
        ...Y ? { __autoOptionsFromSearch: !0 } : {},
        sorter: he.sorter !== void 0 ? he.sorter : o && he.sortable === void 0 ? !0 : he.sorter
      };
    });
    return H.columnOrder.length === 0 ? ie : [...ie].sort((he, Te) => {
      const W = H.columnOrder.indexOf(he.key), Y = H.columnOrder.indexOf(Te.key);
      return W === -1 && Y === -1 ? 0 : W === -1 ? 1 : Y === -1 ? -1 : W - Y;
    });
  }, [r, H.hiddenKeys, H.columnOrder, o]), Ot = n ?? de, Rt = ce(() => {
    if (!K && U) return Ot;
    const ie = r.map(
      (he) => Array.isArray(he.dataIndex) ? he.dataIndex.join(".") : String(he.dataIndex ?? he.key)
    );
    return wu({
      rows: Ot,
      quickKeyword: oe,
      searchableKeys: ie,
      fieldFilters: V,
      sortField: G.key,
      sortOrder: G.direction
    });
  }, [K, U, Ot, oe, V, r, G]), se = ce(() => {
    if (!U || K) {
      if (b || l === !1) return Rt;
      if (Rt.length > me || !U) {
        const ie = (Ie - 1) * me;
        return Rt.slice(ie, ie + me);
      }
      return Rt;
    }
    return de;
  }, [
    U,
    K,
    b,
    l,
    Rt,
    de,
    Ie,
    me
  ]), Ve = !U || K ? Rt.length : ke, Qe = ce(() => {
    const ie = d ? new Set(Object.keys(d)) : null;
    return Object.entries(qa(V)).filter(([Te, W]) => !(ie && ie.has(Te) && d[Te] === W)).length + (oe.trim() ? 1 : 0);
  }, [V, oe, d]), st = fe(() => {
    const ie = { ...d };
    q.current = ie, ee(ie), Z(ie), F(""), ye({ key: "", direction: null }), ne(1), m == null || m(), u == null || u(ie);
  }, [d, m, u]), et = fe(
    async (ie) => {
      if (A && !ie) {
        A();
        return;
      }
      let he = {
        ..._t(),
        ...ie
      };
      if (y) {
        const W = await y(he);
        if (W === !1) return;
        W && typeof W == "object" && (he = { ...he, ...W });
      }
      tt(null), Nt(!1), le(null), at.clearErrors();
      const Te = Dt ? ut.readDraft() : null;
      Te && it && !ie ? (at.reset({ ...he, ...Te }), Le(!0)) : (at.reset(he), Le(!!(Te && Dt && !ie))), pt(!0);
    },
    [
      A,
      _t,
      y,
      at,
      Dt,
      ut,
      it
    ]
  ), Et = fe(
    async (ie) => {
      var W;
      if (L) {
        L(ie);
        return;
      }
      let he = { ..._t(), ...ie };
      if (T) {
        const Y = await T(ie, ie);
        if (Y === !1) return;
        Y && typeof Y == "object" && (he = { ..._t(), ...Y });
      }
      const Te = Pe(ie);
      if (tt(ie), Nt(!0), le(null), Le(!1), at.clearErrors(), at.reset(he), pt(!0), (W = I.current) != null && W.get && Te !== void 0 && Te !== null) {
        J(!0);
        try {
          const Y = await I.current.get(Te), ue = Y != null && Y.data && !Array.isArray(Y.data) ? Y.data : Y;
          if (!pr(Y) && ue && typeof ue == "object") {
            let ae = { ...he, ...ue };
            if (T) {
              const ve = await T(ae, ie);
              ve && typeof ve == "object" && (ae = { ..._t(), ...ve });
            }
            at.reset(ae);
          }
        } catch {
        } finally {
          J(!1);
        }
      }
    },
    [L, _t, T, Pe, at]
  );
  ge(() => {
    if (N)
      return N.current = (ie) => {
        et(ie);
      }, () => {
        N.current = null;
      };
  }, [N, et]), ge(() => {
    if (_)
      return _.current = (ie) => {
        Et(ie);
      }, () => {
        _.current = null;
      };
  }, [_, Et]);
  const Wt = fe(
    async (ie, he) => {
      var Te, W;
      if (he) {
        if (he.startsWith("/") || he.startsWith("http")) {
          p == null || p(he, ie);
          return;
        }
        const Y = (Te = I.current) == null ? void 0 : Te[he];
        if (typeof Y == "function") {
          await Y(ie);
          return;
        }
      }
      if (mt(ie), (W = I.current) != null && W.view) {
        Fe(!0);
        try {
          const Y = await I.current.view(Pe(ie)), ue = Y != null && Y.data && !Array.isArray(Y.data) ? Y.data : Y;
          !pr(Y) && ue && typeof ue == "object" && mt({ ...ie, ...ue });
        } catch {
        } finally {
          Fe(!1);
        }
      }
    },
    [p, Pe]
  ), Ft = async (ie) => {
    var he, Te;
    Tt(!0), le(null);
    try {
      let W = ie, Y = !1;
      if (E) {
        const ue = await E(ie, lt, Ze);
        if (ue === !1) {
          Tt(!1);
          return;
        }
        ue && typeof ue == "object" && (W = ue, Y = !0);
      }
      if (S)
        await S(W, Ze);
      else if (I.current) {
        const ue = typeof c == "string" ? c : "id", ae = Ze ? Pe(Ze) : void 0, ve = Y ? {
          ...W,
          ...lt && ae != null ? { [ue]: ae } : {}
        } : {
          ...Ze || {},
          ...W,
          ...lt && ae != null ? { [ue]: ae } : {}
        }, xe = lt ? await ((he = I.current.update || I.current.edit || I.current.add) == null ? void 0 : he(
          ve
        )) : await ((Te = I.current.add || I.current.create) == null ? void 0 : Te(W));
        if (pr(xe)) {
          le((xe == null ? void 0 : xe.msg) || "保存失败");
          return;
        }
      }
      Dt && (ut.clearDraft(), Le(!1)), pt(!1), j.success(lt ? "更新成功" : o ? "新增成功" : "创建成功"), R == null || R(W), U && nt();
    } catch (W) {
      const Y = (W == null ? void 0 : W.message) || "提交失败";
      le(Y), o || j.error(Y);
    } finally {
      Tt(!1);
    }
  }, ze = async (ie) => {
    var Te;
    if (ie == null || ie.preventDefault(), !await at.trigger()) {
      const W = (Te = Object.values(at.formState.errors).find((Y) => Y == null ? void 0 : Y.message)) == null ? void 0 : Te.message;
      W && !o && j.warning(W);
      return;
    }
    await Ft(at.getValues());
  }, tr = fe(
    async (ie, he = 0) => {
      var Y, ue;
      if (C) {
        C(ie);
        return;
      }
      if (D && await D(ie) === !1)
        return;
      const Te = Pe(ie, he);
      if (!(!B && !((Y = I.current) != null && Y.delete) || !await nn({
        title: "确认删除",
        message: "确定要删除这条数据吗？此操作无法撤销。",
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (B)
            await B([Te]);
          else if ((ue = I.current) != null && ue.delete) {
            const ae = await I.current.delete([Te]);
            if (pr(ae)) {
              j.error((ae == null ? void 0 : ae.msg) || "删除失败");
              return;
            }
          }
          kt(X.filter((ae) => ae !== Te)), j.success("删除成功"), O == null || O(), U && nt();
        } catch (ae) {
          j.error((ae == null ? void 0 : ae.message) || "删除失败");
        }
    },
    [
      C,
      D,
      Pe,
      B,
      X,
      kt,
      j,
      O,
      U,
      nt
    ]
  ), qt = fe(
    async (ie) => {
      var Te, W;
      if (ie.length === 0) {
        j.warning("请先选择要删除的数据行");
        return;
      }
      if (!(M && await M(ie) === !1 || !B && !((Te = I.current) != null && Te.delete) || !await nn({
        title: "确认删除选中记录",
        message: `即将删除 ${ie.length} 条数据，删除后不可恢复，是否继续？`,
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (B)
            await B(ie);
          else if ((W = I.current) != null && W.delete) {
            const Y = await I.current.delete(ie);
            if (pr(Y)) {
              j.error((Y == null ? void 0 : Y.msg) || "批量删除失败");
              return;
            }
          }
          kt([], []), j.success(`已删除 ${ie.length} 条记录`), P == null || P(), U && nt();
        } catch (Y) {
          j.error((Y == null ? void 0 : Y.message) || "批量删除失败");
        }
    },
    [
      M,
      B,
      kt,
      j,
      P,
      U,
      nt
    ]
  ), mr = fe(
    async (ie, he) => {
      var W, Y;
      const Te = Pe(he);
      if (ie && ((W = I.current) != null && W.children)) {
        const ue = qe[Te];
        if (!ue || ue.length === 0) {
          Je((ae) => ({ ...ae, [Te]: !0 })), ot((ae) => ({ ...ae, [Te]: "" }));
          try {
            const ae = await I.current.children(he);
            if (pr(ae))
              ot((ve) => ({ ...ve, [Te]: (ae == null ? void 0 : ae.msg) || "加载失败" }));
            else {
              const { list: ve } = rs(ae);
              Xe((xe) => ({ ...xe, [Te]: ve })), v && Ce((xe) => {
                const Ee = (Ge) => Ge.map((gt) => Pe(gt) === Te ? { ...gt, children: ve } : Array.isArray(gt.children) ? { ...gt, children: Ee(gt.children) } : gt);
                return Ee(xe);
              });
            }
          } catch {
            ot((ae) => ({ ...ae, [Te]: "加载失败" }));
          } finally {
            Je((ae) => ({ ...ae, [Te]: !1 }));
          }
        }
      }
      (Y = w == null ? void 0 : w.onExpand) == null || Y.call(w, ie, he);
    },
    [Pe, qe, v, w]
  ), vr = fe(
    (ie, he) => {
      var ae;
      const Te = [...Ot], W = Te.findIndex(
        (ve, xe) => String(Pe(ve, xe)) === String(ie)
      ), Y = Te.findIndex(
        (ve, xe) => String(Pe(ve, xe)) === String(he)
      );
      if (W < 0 || Y < 0 || W === Y) return;
      const [ue] = Te.splice(W, 1);
      Te.splice(Y, 0, ue), n || Ce(Te), (ae = k == null ? void 0 : k.onSort) == null || ae.call(k, Te);
    },
    [Ot, Pe, n, k]
  );
  return {
    fetchServerData: nt,
    updateSelectedState: kt,
    selectedRows: bt,
    visibleColumns: Yt,
    rawRows: Ot,
    processedClientRows: Rt,
    displayRows: se,
    displayTotal: Ve,
    activeFilterCount: Qe,
    resetAllFilters: st,
    openCreateModal: et,
    openEditModal: Et,
    openViewModal: Wt,
    handleValidFormSubmit: Ft,
    handleFormSubmit: ze,
    handleSingleDelete: tr,
    handleBatchDelete: qt,
    handleExpandRow: mr,
    handleRowReorder: vr
  };
}
function Ip(t) {
  const {
    storageKey: r,
    tableId: a,
    title: n,
    subTitle: s,
    columns: o,
    fields: d = [],
    searchFields: c,
    formFields: b,
    formSchema: l,
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
    onListLoaded: _,
    rowKey: A = "id",
    defaultPageSize: L = 10,
    pageSizeOptions: C,
    hidePagination: y = !1,
    pagination: T,
    renderPagination: E,
    selectedRowKey: D,
    onRowClick: M,
    onRow: R,
    searchVariant: O = "card",
    onSearchChange: P,
    onSearchSubmit: S,
    onSearchReset: B,
    headerFilterMode: j,
    onHeaderFilterModeChange: I,
    showHeaderFilterToggle: z,
    clientFilter: H,
    showClientFilterSwitch: U,
    defaultSearchCollapsed: K = !0,
    autoRefresh: ee,
    autoRefreshConfig: q,
    refetchInterval: V,
    exportable: Z,
    showExport: oe,
    onExport: F,
    showImport: G = !1,
    onImport: ye,
    syncToUrl: Ie = !1,
    viewable: ne,
    showView: me,
    viewTitle: pe,
    viewSize: de = "lg",
    renderViewExtra: Ce,
    renderViewFooter: ke,
    onNavigate: we,
    formContainer: Se = "dialog",
    formColumns: X,
    showAdd: te,
    addButtonText: Re,
    showEdit: qe,
    showDelete: Xe,
    showBatchDelete: Je,
    rowActions: ot = [],
    actionButtons: rt = [],
    actionColumnWidth: jt,
    maxInlineActions: Pt,
    rowSelection: mt,
    showRowSelection: Fe,
    selectedRowKeys: De,
    onRowSelectionChange: _t,
    batchActions: at = [],
    renderBatchActions: Dt,
    treeData: it = !1,
    expandable: ut,
    sortable: At,
    columnSettingsEnabled: pt = !0,
    maxHeight: lt,
    autoFitHeight: Nt = !1,
    permissions: Ze,
    permission: tt,
    hasPermission: Tt,
    toolbarButtons: J = [],
    toolbarExtra: le,
    renderToolbarExtra: Le,
    headerExtra: Pe,
    renderExtra: ct,
    cardExtra: nt,
    renderCardExtra: kt,
    renderSearchExtra: bt,
    renderFormExtra: Yt,
    renderCustomForm: Ot,
    onRefreshRef: Rt,
    onAddWithValuesRef: se,
    openEditRef: Ve,
    onAdd: Qe,
    onEdit: st,
    onDelete: et,
    onBeforeAdd: Et,
    onBeforeEdit: Wt,
    onBeforeSubmit: Ft,
    onBeforeDelete: ze,
    onBeforeBatchDelete: tr,
    onAfterSave: qt,
    onAfterDelete: mr,
    onAfterBatchDelete: vr,
    motion: ie,
    onSaveRecord: he,
    onDeleteRecords: Te
  } = t, W = r ?? a, { toast: Y } = Mt(), ue = Me(ie), { hasPermission: ae } = Ds(), ve = fe(
    (_e) => _e ? Tt ? Tt(_e) : ae(_e) : !0,
    [Tt, ae]
  ), xe = ce(() => {
    if (g)
      return typeof g == "function" ? Sn(g) : g;
  }, [g]), Ee = be(xe);
  Ee.current = xe;
  const Ge = be(_);
  Ge.current = _;
  const gt = ce(
    () => o.filter((_e) => _e.visible === !1).map((_e) => _e.key),
    [o]
  ), {
    settings: vt,
    toggleColumnVisible: Lt,
    setAllColumnsVisible: ht,
    setColumnFixed: Xt,
    setColumnWidth: $t,
    setColumnOrder: Ht,
    setSearchFieldVisible: Lr,
    setDensity: sa,
    setFilterHighlightColor: Cn,
    resetSettings: oa
  } = wb(pt ? W : void 0, "default", gt), ia = !!(k || xe != null && xe.list), Br = ce(() => !Ie || typeof window > "u" ? {} : Nu(window.location.search), [Ie]), [En, la] = $(
    () => H ?? !ia
  ), [Pa, za] = $(!1), ja = j ?? Pa, _n = (_e) => {
    j === void 0 && za(_e), I == null || I(_e);
  }, [ca, re] = $(!0), [Oe, je] = $(!0), [Ye, xt] = $(K), [ft, ur] = $(() => {
    const { page: _e, pageSize: Q, ...He } = Br;
    return { ...N, ...He };
  }), Pr = be(ft);
  Pr.current = ft;
  const [Tn, Xi] = $(() => {
    const { page: _e, pageSize: Q, ...He } = Br;
    return { ...N, ...He };
  }), [Zi, Ji] = $(""), [Qi, el] = $(() => ({
    key: String((N == null ? void 0 : N.orderBy) ?? ""),
    direction: (N == null ? void 0 : N.orderType) ?? null
  })), [Fa, tl] = $(() => Number(Br.page) || 1), [Oa, rl] = $(
    () => Number(Br.pageSize) || L
  ), [Ls, al] = $(!1), [nl, sl] = $(!1), ol = w !== void 0 ? w : Ls, [il, ll] = $([]), [cl, dl] = $(0), $a = be(null), In = be(null), Bs = be(null), Ps = be(null), [ul, Mn] = $(void 0), [zs, bl] = $([]), ml = De ?? zs, [fl, pl] = $([]), [_r, da] = $(!1), [hl, gl] = $(!1), [vl, xl] = $({}), [yl, wl] = $({}), [Nl, kl] = $({}), Sl = ee ?? (q ? q.show !== !1 : ia), [Cl, El] = $(
    (q == null ? void 0 : q.defaultEnabled) ?? !1
  ), [_l, Tl] = $(
    V ?? (q == null ? void 0 : q.defaultInterval) ?? (g ? 5e3 : 1e4)
  ), Il = be(0), [An, Ml] = $(null), [Al, Rl] = $(!1), ua = ce(() => {
    const _e = /* @__PURE__ */ new Map();
    return d.filter((Q) => !Q.hideInSearch).forEach((Q) => {
      _e.set(Q.name, {
        key: Q.name,
        columnKey: Q.name,
        label: Q.label,
        type: Q.type ?? "text",
        placeholder: Q.placeholder,
        options: Q.options,
        treeData: Q.treeData,
        treeCheckable: Q.treeCheckable,
        treeCheckStrictly: Q.treeCheckStrictly,
        showCheckedStrategy: Q.showCheckedStrategy,
        selectableLeafOnly: Q.selectableLeafOnly,
        fieldNames: Q.fieldNames,
        treeDataSimpleMode: Q.treeDataSimpleMode,
        maxTagCount: Q.maxTagCount,
        treeDefaultExpandAll: Q.treeDefaultExpandAll,
        multiple: Q.multiple,
        span: Q.span,
        __fromFieldSchema: !0
      });
    }), o.forEach((Q) => {
      if (!(Q.search === !0 || typeof Q.search == "object" && Q.search !== null || Q.searchable === !0)) return;
      const $e = typeof Q.search == "object" && Q.search !== null ? Q.search : {};
      if ($e.custom) return;
      const Zt = typeof Q.type == "object" ? Q.type : void 0, Jt = $e.options ?? (Zt == null ? void 0 : Zt.options) ?? Q.options, br = $e.type ?? (Jt ? "select" : "input"), Ka = String(
        $e.key ?? (Array.isArray(Q.dataIndex) ? Q.dataIndex.join(".") : Q.dataIndex) ?? Q.key
      );
      _e.set(Ka, {
        key: Ka,
        columnKey: Q.key,
        label: Q.title,
        type: br,
        placeholder: $e.placeholder,
        options: Jt,
        treeData: $e.treeData,
        treeCheckable: $e.treeCheckable,
        treeCheckStrictly: $e.treeCheckStrictly,
        showCheckedStrategy: $e.showCheckedStrategy,
        selectableLeafOnly: $e.selectableLeafOnly,
        fieldNames: $e.fieldNames,
        treeDataSimpleMode: $e.treeDataSimpleMode,
        maxTagCount: $e.maxTagCount,
        treeDefaultExpandAll: $e.treeDefaultExpandAll,
        searchable: $e.searchable,
        multiple: $e.multiple,
        span: $e.span,
        order: $e.order,
        format: $e.format,
        clearable: $e.clearable,
        __fromFieldSchema: !1
      });
    }), (c ?? []).forEach((Q) => {
      const He = _e.get(Q.key);
      _e.set(Q.key, {
        ...He,
        ...Q,
        __fromFieldSchema: !1
      });
    }), Array.from(_e.values()).sort((Q, He) => (Q.order ?? 999) - (He.order ?? 999));
  }, [d, o, c]), Dl = ce(
    () => new Set(ua.map((_e) => _e.key)),
    [ua]
  ), ba = ce(() => {
    const _e = /* @__PURE__ */ new Map();
    return ua.forEach((Q) => _e.set(Q.key, Q)), o.forEach((Q) => {
      if (Q.hideInTable || Q.key === "__abc_actions__" || Q.key === "__actions__" || Q.key === "__drag_handle__")
        return;
      const He = Array.isArray(Q.dataIndex) ? Q.dataIndex.join(".") : String(Q.dataIndex ?? Q.key);
      if (!_e.has(He) && (vt.searchVisible[He] === !0 || vt.searchVisible[Q.key] === !0)) {
        const $e = typeof Q.type == "object" ? Q.type : void 0, Zt = ($e == null ? void 0 : $e.options) ?? Q.options, Jt = Zt == null ? void 0 : Zt.map((br) => ({
          label: br.label,
          value: typeof br.value == "boolean" ? String(br.value) : br.value
        }));
        _e.set(He, {
          key: He,
          columnKey: Q.key,
          label: Q.title,
          type: Jt && Jt.length > 0 ? "select" : "input",
          options: Jt,
          order: Q.order,
          __fromFieldSchema: !1
        });
      }
    }), Array.from(_e.values()).sort((Q, He) => (Q.order ?? 999) - (He.order ?? 999));
  }, [ua, o, vt.searchVisible]), Tr = ce(
    () => ba.filter((_e) => !(vt.searchVisible[_e.key] === !1 || _e.columnKey && vt.searchVisible[_e.columnKey] === !1)),
    [ba, vt.searchVisible]
  ), Ll = ce(
    () => Tr.filter(
      (_e) => !o.some((Q) => Q.key === (_e.columnKey || _e.key))
    ),
    [Tr, o]
  ), Ha = ce(() => {
    let _e = 0;
    const Q = [];
    for (const Jt of Tr) {
      const br = Jt.span === 2 || Jt.type === "dateRange" ? 2 : 1;
      if (_e + br <= 3)
        _e += br, Q.push(Jt);
      else
        break;
    }
    const He = !!bt, $e = He && _e < 3, Zt = Tr.length - Q.length + (He && !$e ? 1 : 0);
    return {
      firstRow: Q,
      extraFitsFirstRow: $e,
      canCollapse: Zt > 0,
      hiddenCount: Zt
    };
  }, [Tr, bt]), Bl = ce(() => !Ye || !Ha.canCollapse ? Tr : Ha.firstRow, [Tr, Ye, Ha]), ma = ce(() => {
    const _e = /* @__PURE__ */ new Map();
    return d.filter((Q) => !Q.hideInForm).forEach((Q) => {
      _e.set(Q.name, {
        key: Q.name,
        name: Q.name,
        label: Q.label,
        type: Q.type ?? "text",
        options: Q.options,
        treeData: Q.treeData,
        treeCheckable: Q.treeCheckable,
        treeCheckStrictly: Q.treeCheckStrictly,
        showCheckedStrategy: Q.showCheckedStrategy,
        selectableLeafOnly: Q.selectableLeafOnly,
        fieldNames: Q.fieldNames,
        treeDataSimpleMode: Q.treeDataSimpleMode,
        maxTagCount: Q.maxTagCount,
        treeDefaultExpandAll: Q.treeDefaultExpandAll,
        multiple: Q.multiple,
        placeholder: Q.placeholder,
        helperText: Q.helperText,
        defaultValue: Q.defaultValue,
        span: Q.span,
        required: Q.required,
        disabled: Q.disabled,
        validator: Q.validator,
        __fromFieldSchema: !0
      });
    }), o.filter((Q) => Q.form === !0 || typeof Q.form == "object" && Q.form !== null).forEach((Q) => {
      const He = typeof Q.form == "object" && Q.form !== null ? Q.form : {}, $e = String(
        He.key ?? He.name ?? (Array.isArray(Q.dataIndex) ? Q.dataIndex[0] : Q.dataIndex) ?? Q.key
      );
      _e.set($e, {
        ...He,
        key: $e,
        label: He.label ?? Q.title,
        tooltip: He.tooltip ?? Q.tooltip,
        type: He.type ?? "input"
      });
    }), (b ?? []).forEach((Q) => {
      const He = Zr(Q);
      if (!He) return;
      const $e = _e.get(He);
      _e.set(He, {
        ...$e,
        ...Q,
        key: He
      });
    }), Array.from(_e.values()).sort((Q, He) => (Q.order ?? 999) - (He.order ?? 999));
  }, [d, o, b]), js = fe(() => {
    const _e = { ...u };
    for (const Q of ma) {
      const He = Zr(Q);
      He && Q.defaultValue !== void 0 && _e[He] === void 0 && (_e[He] = Q.defaultValue);
    }
    return _e;
  }, [u, ma]), Pl = ip({
    defaultValues: js(),
    schema: l,
    fields: ma
  }), Fs = h ? !!h.enabled : !!(W && !g), zl = !h && !!(W && !g), jl = yb(
    Fs && W ? `${W}_form` : void 0
  ), [Rn, Fl] = $(!1), [Ol, $l] = $(!1), [Hl, Kl] = $(null), [Wl, Vl] = $(!1), [Ul, Gl] = $(!1), [Yl, ql] = $(null), [Xl, Zl] = $(!1), Os = (tt == null ? void 0 : tt.add) ?? (Ze == null ? void 0 : Ze.create), $s = (tt == null ? void 0 : tt.edit) ?? (Ze == null ? void 0 : Ze.update), Dn = (tt == null ? void 0 : tt.delete) ?? (Ze == null ? void 0 : Ze.delete), Hs = (tt == null ? void 0 : tt.batchDelete) ?? Dn, Ks = tt == null ? void 0 : tt.export, Ws = tt == null ? void 0 : tt.view, Vs = (te ?? !0) && ve(Os), Us = (qe ?? !0) && ve($s), Gs = (Xe ?? !0) && ve(Dn), Jl = (Je ?? !!Te) && ve(Hs), Ql = (oe ?? Z ?? !g) && ve(Ks), ec = (me ?? ne ?? !1) && ve(Ws), tc = Vs && !!(Qe || Ot || he && ma.length > 0 || xe != null && xe.add || xe != null && xe.create), rc = Us && !!(st || Ot || he || xe != null && xe.update || xe != null && xe.edit), ac = Gs && !!(et || Te || xe != null && xe.delete);
  ge(() => {
    if (!Ie || typeof window > "u") return;
    const _e = [
      ...ba.map(($e) => $e.key),
      ...o.map(
        ($e) => Array.isArray($e.dataIndex) ? $e.dataIndex.join(".") : String($e.dataIndex ?? $e.key)
      ),
      "page",
      "pageSize"
    ], Q = ku(window.location.search, _e, {
      ...Tn,
      page: Fa > 1 ? Fa : void 0,
      pageSize: Oa !== L ? Oa : void 0
    }), He = `${window.location.pathname}${Q}${window.location.hash}`;
    window.history.replaceState(null, "", He);
  }, [Ie, ba, o, Tn, Fa, Oa, L]);
  const nc = fe(() => {
    if (typeof document > "u") {
      da((Q) => !Q);
      return;
    }
    const _e = !_r;
    _e && $a.current && typeof $a.current.requestFullscreen == "function" ? $a.current.requestFullscreen().catch(() => {
    }) : !_e && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
    }), da(_e);
  }, [_r]);
  ge(() => {
    if (typeof document > "u") return;
    const _e = () => {
      !document.fullscreenElement && _r && da(!1);
    };
    return document.addEventListener("fullscreenchange", _e), () => document.removeEventListener("fullscreenchange", _e);
  }, [_r]), ge(() => {
    if (!_r) return;
    const _e = (Q) => {
      Q.key === "Escape" && !Rn && !An && (typeof document < "u" && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
      }), da(!1));
    };
    return document.addEventListener("keydown", _e), () => document.removeEventListener("keydown", _e);
  }, [_r, Rn, An]), ge(() => {
    if (!Nt || lt !== void 0 || typeof window > "u") {
      Mn(void 0);
      return;
    }
    let _e = 0;
    const Q = () => {
      var Ys;
      const Zt = Bs.current;
      if (!Zt) return;
      const Jt = Zt.getBoundingClientRect();
      if (Jt.top === 0 && Jt.height === 0 && Zt.clientWidth === 0) return;
      const br = !y && T !== !1 ? ((Ys = Ps.current) == null ? void 0 : Ys.offsetHeight) ?? 52 : 0, Ka = window.innerHeight - Jt.top - br - 16;
      Mn(Math.max(Math.floor(Ka), 240));
    }, He = () => {
      window.cancelAnimationFrame(_e), _e = window.requestAnimationFrame(Q);
    };
    He(), window.addEventListener("resize", He);
    let $e;
    return typeof ResizeObserver < "u" && In.current && ($e = new ResizeObserver(He), $e.observe(In.current)), () => {
      window.cancelAnimationFrame(_e), window.removeEventListener("resize", He), $e == null || $e.disconnect();
    };
  }, [
    Nt,
    lt,
    _r,
    ja,
    Oe,
    Ye,
    ca,
    y,
    T
  ]);
  const sc = fe(
    (_e, Q = 0) => typeof A == "function" ? A(_e) : (_e == null ? void 0 : _e[A]) ?? Q,
    [A]
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
    formSchema: l,
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
    onListLoaded: _,
    rowKey: A,
    defaultPageSize: L,
    pageSizeOptions: C,
    hidePagination: y,
    pagination: T,
    renderPagination: E,
    selectedRowKey: D,
    onRowClick: M,
    onRow: R,
    searchVariant: O,
    onSearchChange: P,
    onSearchSubmit: S,
    onSearchReset: B,
    controlledHeaderFilterMode: j,
    onHeaderFilterModeChange: I,
    propShowHeaderFilterToggle: z,
    initialClientFilter: H,
    showClientFilterSwitch: U,
    defaultSearchCollapsed: K,
    autoRefresh: ee,
    autoRefreshConfig: q,
    refetchInterval: V,
    exportable: Z,
    showExport: oe,
    onExport: F,
    showImport: G,
    onImport: ye,
    syncToUrl: Ie,
    viewable: ne,
    showView: me,
    viewTitle: pe,
    viewSize: de,
    renderViewExtra: Ce,
    renderViewFooter: ke,
    onNavigate: we,
    formContainer: Se,
    formColumns: X,
    showAdd: te,
    addButtonText: Re,
    showEdit: qe,
    showDelete: Xe,
    showBatchDelete: Je,
    rowActions: ot,
    actionButtons: rt,
    actionColumnWidth: jt,
    maxInlineActions: Pt,
    rowSelection: mt,
    showRowSelection: Fe,
    controlledSelectedRowKeys: De,
    onRowSelectionChange: _t,
    batchActions: at,
    renderBatchActions: Dt,
    treeData: it,
    expandable: ut,
    sortable: At,
    columnSettingsEnabled: pt,
    maxHeight: lt,
    autoFitHeight: Nt,
    permissions: Ze,
    permission: tt,
    customHasPermission: Tt,
    toolbarButtons: J,
    toolbarExtra: le,
    renderToolbarExtra: Le,
    headerExtra: Pe,
    renderExtra: ct,
    cardExtra: nt,
    renderCardExtra: kt,
    renderSearchExtra: bt,
    renderFormExtra: Yt,
    renderCustomForm: Ot,
    onRefreshRef: Rt,
    onAddWithValuesRef: se,
    openEditRef: Ve,
    onAdd: Qe,
    onEdit: st,
    onDelete: et,
    onBeforeAdd: Et,
    onBeforeEdit: Wt,
    onBeforeSubmit: Ft,
    onBeforeDelete: ze,
    onBeforeBatchDelete: tr,
    onAfterSave: qt,
    onAfterDelete: mr,
    onAfterBatchDelete: vr,
    motion: ie,
    onSaveRecord: he,
    onDeleteRecords: Te,
    toast: Y,
    resolvedMotion: ue,
    abcHasPermission: ae,
    checkPermission: ve,
    resolvedApi: xe,
    apiRef: Ee,
    onListLoadedRef: Ge,
    defaultHiddenKeys: gt,
    settings: vt,
    toggleColumnVisible: Lt,
    setAllColumnsVisible: ht,
    setColumnFixed: Xt,
    setColumnWidth: $t,
    setColumnOrder: Ht,
    setSearchFieldVisible: Lr,
    setDensity: sa,
    setFilterHighlightColor: Cn,
    resetSettings: oa,
    hasRemoteSource: ia,
    initialUrlParams: Br,
    isClientFilter: En,
    setIsClientFilter: la,
    internalHeaderFilterMode: Pa,
    setInternalHeaderFilterMode: za,
    headerFilterMode: ja,
    updateHeaderFilterMode: _n,
    extraFilterCollapsed: ca,
    setExtraFilterCollapsed: re,
    searchPanelExpanded: Oe,
    setSearchPanelExpanded: je,
    searchFieldsCollapsed: Ye,
    setSearchFieldsCollapsed: xt,
    searchInputs: ft,
    setSearchInputs: ur,
    searchInputsRef: Pr,
    appliedFilters: Tn,
    setAppliedFilters: Xi,
    quickKeyword: Zi,
    setQuickKeyword: Ji,
    sortState: Qi,
    setSortState: el,
    current: Fa,
    setCurrent: tl,
    pageSize: Oa,
    setPageSize: rl,
    internalLoading: Ls,
    setInternalLoading: al,
    exporting: nl,
    setExporting: sl,
    loading: ol,
    remoteRows: il,
    setRemoteRows: ll,
    remoteTotal: cl,
    setRemoteTotal: dl,
    containerRef: $a,
    searchCardMeasureRef: In,
    tableScrollMeasureRef: Bs,
    paginationWrapRef: Ps,
    computedScrollY: ul,
    setComputedScrollY: Mn,
    internalSelectedKeys: zs,
    setInternalSelectedKeys: bl,
    selectedKeys: ml,
    cachedSelectedRows: fl,
    setCachedSelectedRows: pl,
    isFullScreen: _r,
    setIsFullScreen: da,
    autoRefreshPopoverOpen: hl,
    setAutoRefreshPopoverOpen: gl,
    childrenData: vl,
    setChildrenData: xl,
    childrenLoading: yl,
    setChildrenLoading: wl,
    childrenError: Nl,
    setChildrenError: kl,
    showAutoRefreshControl: Sl,
    autoRefreshEnabled: Cl,
    setAutoRefreshEnabled: El,
    autoRefreshInterval: _l,
    setAutoRefreshInterval: Tl,
    requestSeqRef: Il,
    viewingRecord: An,
    setViewingRecord: Ml,
    viewLoading: Al,
    setViewLoading: Rl,
    baseSearchFields: ua,
    searchableFieldNames: Dl,
    allSearchFields: ba,
    visibleSearchFields: Tr,
    extraFilterFields: Ll,
    searchCollapseMeta: Ha,
    displayedSearchFields: Bl,
    resolvedFormFields: ma,
    buildDefaultFormValues: js,
    form: Pl,
    draftEnabled: Fs,
    autoRestoreDraft: zl,
    draft: jl,
    modalOpen: Rn,
    setModalOpen: Fl,
    isEdit: Ol,
    setIsEdit: $l,
    editingRecord: Hl,
    setEditingRecord: Kl,
    formSubmitting: Wl,
    setFormSubmitting: Vl,
    formDetailLoading: Ul,
    setFormDetailLoading: Gl,
    formError: Yl,
    setFormError: ql,
    showDraftBanner: Xl,
    setShowDraftBanner: Zl,
    addPermCode: Os,
    editPermCode: $s,
    deletePermCode: Dn,
    batchDeletePermCode: Hs,
    exportPermCode: Ks,
    viewPermCode: Ws,
    canCreate: Vs,
    canUpdate: Us,
    canDelete: Gs,
    canBatchDelete: Jl,
    effectiveExportable: Ql,
    effectiveViewable: ec,
    canOpenAdd: tc,
    canOpenEdit: rc,
    canOpenDelete: ac,
    toggleFullScreen: nc,
    resolveRowKey: sc,
    storageKey: W
  };
}
function qi(t) {
  const r = Ip(t), a = Tp(r), n = _p(r, a), s = { ...r, ...a, ...n }, {
    columns: o,
    rowKey: d,
    pageSizeOptions: c,
    hidePagination: b,
    pagination: l,
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
    toggleColumnVisible: _,
    setColumnFixed: A,
    setColumnWidth: L,
    setColumnOrder: C,
    setFilterHighlightColor: y,
    resetSettings: T,
    headerFilterMode: E,
    appliedFilters: D,
    setAppliedFilters: M,
    sortState: R,
    setSortState: O,
    current: P,
    setCurrent: S,
    pageSize: B,
    setPageSize: j,
    loading: I,
    containerRef: z,
    tableScrollMeasureRef: H,
    paginationWrapRef: U,
    computedScrollY: K,
    selectedKeys: ee,
    isFullScreen: q,
    visibleSearchFields: V,
    updateSelectedState: Z,
    displayRows: oe,
    displayTotal: F,
    activeFilterCount: G,
    resetAllFilters: ye,
    openViewModal: Ie,
    handleRowReorder: ne,
    selectionEnabled: me,
    finalColumns: pe,
    resolvedExpandable: de,
    updateSearchInput: Ce,
    activeFilterKeys: ke,
    activeFilterLabels: we
  } = s;
  return /* @__PURE__ */ i(
    "div",
    {
      ref: z,
      "data-motion": g,
      className: x(
        "relative space-y-3",
        q && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        /* @__PURE__ */ e(Ep, { ctx: s }),
        /* @__PURE__ */ i(ln, { padding: "none", className: "overflow-hidden", children: [
          /* @__PURE__ */ e(Sp, { ctx: s }),
          /* @__PURE__ */ e("div", { ref: H, children: /* @__PURE__ */ e(
            Bi,
            {
              columns: pe,
              allColumns: o,
              hiddenColumnKeys: N.hiddenKeys,
              onToggleColumnVisible: w ? _ : void 0,
              data: oe,
              rowKey: d,
              loading: I,
              density: N.density,
              motion: g,
              selectedKeys: me ? ee : void 0,
              onSelectionChange: me ? (Se, X) => {
                Z(Se, X);
              } : void 0,
              sortState: R,
              onSortChange: (Se, X) => {
                O({ key: Se, direction: X }), S(1);
              },
              headerFilterMode: E,
              headerFilters: D,
              onHeaderFilterChange: (Se, X) => {
                S(1), Ce(Se, X), M((te) => ({ ...te, [Se]: X }));
              },
              headerFilterRender: (Se) => {
                const X = Array.isArray(Se.dataIndex) ? Se.dataIndex.join(".") : String(Se.dataIndex ?? Se.key), te = V.find(
                  (ot) => ot.columnKey === Se.key || ot.key === X
                );
                if (E) {
                  if (!te && !Se.filterable) return null;
                } else if (!Se.filterable) return null;
                const Re = Se.filterOptions ?? (te == null ? void 0 : te.options), qe = (te == null ? void 0 : te.type) ?? Se.filterType ?? (Re && Re.length > 0 ? "select" : "text"), Xe = (te == null ? void 0 : te.key) ?? X, Je = ke.includes(Se.key);
                return /* @__PURE__ */ e(
                  gp,
                  {
                    title: Se.title,
                    filterType: qe,
                    filterOptions: Re,
                    treeData: te == null ? void 0 : te.treeData,
                    multiple: te == null ? void 0 : te.multiple,
                    searchable: te == null ? void 0 : te.searchable,
                    placeholder: te == null ? void 0 : te.placeholder,
                    format: te == null ? void 0 : te.format,
                    highlighted: Je,
                    iconType: E ? "search" : "filter",
                    value: D[Xe],
                    onApply: (ot) => {
                      S(1), Ce(Xe, ot), M((rt) => ({ ...rt, [Xe]: ot }));
                    }
                  }
                );
              },
              activeFilterKeys: ke,
              activeFilterLabels: we,
              filterHighlightColor: N.filterHighlightColor,
              onFilterHighlightColorChange: w ? y : void 0,
              columnWidths: N.columnWidths,
              onColumnResize: L,
              columnFixed: N.columnFixed,
              onColumnPin: A,
              onColumnHide: w ? _ : void 0,
              onResetColumns: w ? T : void 0,
              onColumnReorder: w ? C : void 0,
              treeData: h,
              expandable: de,
              rowDraggable: !!(v != null && v.enabled),
              onRowDragEnd: v != null && v.enabled ? ne : void 0,
              activeRowKey: m,
              onRowClick: p,
              onRow: f,
              onRowView: (Se, X) => void Ie(Se, X),
              onEmptyReset: G > 0 ? ye : void 0,
              maxHeight: k ?? K,
              className: "rounded-none border-0"
            }
          ) }),
          !b && l !== !1 && /* @__PURE__ */ e("div", { ref: U, className: "border-t border-[var(--abc-border)] px-4 py-3", children: u ? u({
            current: P,
            pageSize: B,
            total: F,
            mode: typeof l == "object" && l.mode ? l.mode : "offset"
          }) : typeof l == "object" ? /* @__PURE__ */ e(
            on,
            {
              current: P,
              pageSize: B,
              pageSizeOptions: c,
              motion: g,
              total: F,
              onChange: (Se, X) => {
                S(Se), j(X);
              },
              ...l
            }
          ) : /* @__PURE__ */ e(
            on,
            {
              current: P,
              pageSize: B,
              pageSizeOptions: c,
              motion: g,
              total: F,
              onChange: (Se, X) => {
                S(Se), j(X);
              }
            }
          ) })
        ] }),
        /* @__PURE__ */ e(Cp, { ctx: s })
      ]
    }
  );
}
const bg = qi, mg = qi;
function Mp(t, r) {
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
function Ap({
  title: t,
  description: r,
  triggerLabel: a,
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
  modalHeaderActions: h,
  inlineInTestEnv: v,
  renderInlineContainer: w,
  renderSummaryContainer: k,
  className: g,
  children: N
}) {
  var M;
  const _ = v ?? (typeof process < "u" && ((M = process.env) == null ? void 0 : M.NODE_ENV) === "test" || typeof import.meta < "u" && !1), [A, L] = $(!1), C = l !== void 0 ? l : A, y = (R) => {
    l === void 0 && L(R), u == null || u(R);
  };
  if (_)
    return w ? /* @__PURE__ */ e(Ke, { children: w({
      title: t,
      description: r,
      headerActions: f,
      modalHeaderActions: h,
      summarySlot: m,
      className: g,
      children: N
    }) }) : /* @__PURE__ */ i(
      "section",
      {
        "data-slot": "pro-form-inline",
        className: x(
          "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          g
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            (f || h) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
              f,
              h
            ] })
          ] }),
          m,
          /* @__PURE__ */ e("div", { children: N })
        ]
      }
    );
  const D = /* @__PURE__ */ i(
    Ae,
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
  return /* @__PURE__ */ i(Ke, { children: [
    k ? k({
      title: t,
      description: r,
      triggerButton: D,
      headerActions: f,
      summarySlot: m,
      emptySummaryHint: p,
      className: g
    }) : /* @__PURE__ */ i(
      "section",
      {
        "data-slot": "pro-form-summary",
        className: x(
          "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          g
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
              f,
              D
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
        size: Mp(d, c),
        footer: b ?? h,
        className: c,
        children: N
      }
    ) : /* @__PURE__ */ e(
      Eb,
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
const fg = Ap, Rp = {
  searchPlaceholder: "过滤日志内容…",
  stickBottomLabel: "自动贴底",
  copyLabel: "复制",
  copiedLabel: "已复制",
  emptyText: "无符合筛选条件的日志。",
  clearSearchLabel: "清空搜索",
  formatLineCount: (t, r) => `${t} / ${r} 行`
}, Dp = ["all", "info", "warn", "error"];
function Lp({
  logs: t,
  heightClass: r = "h-[440px]",
  estimateSize: a = 26,
  overscan: n = 12,
  defaultStickBottom: s = !1,
  labels: o,
  className: d
}) {
  var O;
  const c = { ...Rp, ...o }, b = Ne.useRef(null), [l, u] = Ne.useState(""), [m, p] = Ne.useState("all"), [f, h] = Ne.useState(s), [v, w] = Ne.useState(!1), [k, g] = Ne.useState(0), [N, _] = Ne.useState(0), A = typeof process < "u" && ((O = process.env) == null ? void 0 : O.NODE_ENV) === "test" || typeof import.meta < "u" && !1, L = Ne.useMemo(() => t.map((P, S) => {
    if (typeof P == "string") {
      const B = P.toLowerCase(), j = B.includes("error") ? "error" : B.includes("warn") ? "warn" : "info";
      return { seq: S + 1, level: j, message: P };
    }
    return {
      seq: P.seq ?? S + 1,
      level: P.level || "info",
      message: P.message || "",
      detail: P.detail,
      created_at: P.created_at
    };
  }), [t]), C = Ne.useMemo(() => {
    const P = l.trim().toLowerCase();
    return L.filter((S) => {
      var B;
      return m !== "all" && ((B = S.level) == null ? void 0 : B.toLowerCase()) !== m ? !1 : P ? S.message.toLowerCase().includes(P) || (S.created_at ? S.created_at.toLowerCase().includes(P) : !1) || (S.detail ? JSON.stringify(S.detail).toLowerCase().includes(P) : !1) : !0;
    });
  }, [L, l, m]);
  Ne.useEffect(() => {
    const P = b.current;
    if (!P) return;
    const S = () => {
      P.clientHeight > 0 && _(P.clientHeight);
    };
    if (S(), typeof ResizeObserver > "u") return;
    const B = new ResizeObserver(S);
    return B.observe(P), () => B.disconnect();
  }, []), Ne.useEffect(() => {
    const P = b.current;
    !f || !P || C.length === 0 || (P.scrollTop = P.scrollHeight, g(P.scrollTop));
  }, [C.length, f]);
  const y = !A && C.length > 80 && N > 0, T = C.length * a, { startIndex: E, endIndex: D } = Ne.useMemo(() => {
    if (!y)
      return { startIndex: 0, endIndex: Math.max(0, C.length - 1) };
    const P = Math.ceil(N / a), S = Math.floor(k / a) - n, B = Math.max(0, S), j = Math.min(C.length - 1, Math.floor(k / a) + P + n);
    return { startIndex: B, endIndex: j };
  }, [y, C.length, N, a, k, n]), M = Ne.useMemo(() => C.length === 0 ? [] : C.slice(E, D + 1).map((P, S) => ({
    log: P,
    index: E + S
  })), [C, E, D]), R = async () => {
    const P = C.map(
      (S) => `[${S.created_at || "LOG"}][${(S.level || "INFO").toUpperCase()}] ${S.message} ${S.detail ? JSON.stringify(S.detail) : ""}`.trim()
    ).join(`
`);
    try {
      await navigator.clipboard.writeText(P), w(!0), setTimeout(() => w(!1), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "pro-log-viewer",
      className: x(
        "flex flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-slate-800 bg-slate-950 font-mono text-slate-200 shadow-md",
        d
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2 text-xs", children: [
          /* @__PURE__ */ i("div", { className: "flex min-w-44 flex-1 items-center gap-2", children: [
            /* @__PURE__ */ i("div", { className: "relative max-w-sm flex-1", children: [
              /* @__PURE__ */ e(
                zt,
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
                  onChange: (P) => u(P.target.value),
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
                  children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 p-0.5", children: Dp.map((P) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => p(P),
                className: x(
                  "rounded px-2 py-0.5 text-[10px] font-semibold uppercase transition cursor-pointer",
                  m === P ? P === "error" ? "bg-rose-500/20 text-rose-300" : P === "warn" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/25 text-blue-300" : "text-slate-400 hover:text-slate-200"
                ),
                children: P
              },
              P
            )) })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center gap-3 text-[11px] text-slate-400", children: [
            /* @__PURE__ */ e("span", { className: "tabular-nums", children: c.formatLineCount(C.length, L.length) }),
            /* @__PURE__ */ i("label", { className: "flex cursor-pointer items-center gap-1.5 select-none hover:text-slate-200", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: f,
                  onChange: (P) => h(P.target.checked),
                  className: "h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-0"
                }
              ),
              /* @__PURE__ */ e("span", { children: c.stickBottomLabel })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => void R(),
                className: "flex items-center gap-1 rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer",
                children: v ? /* @__PURE__ */ i(Ke, { children: [
                  /* @__PURE__ */ e(St, { className: "h-3 w-3 text-emerald-400", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { className: "text-emerald-300", children: c.copiedLabel })
                ] }) : /* @__PURE__ */ i(Ke, { children: [
                  /* @__PURE__ */ e(Fr, { className: "h-3 w-3", "aria-hidden": "true" }),
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
            onScroll: (P) => g(P.currentTarget.scrollTop),
            className: x("relative w-full overflow-auto", r),
            children: C.length === 0 ? /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center p-8 text-xs text-slate-500", children: c.emptyText }) : /* @__PURE__ */ e(
              "div",
              {
                style: y ? { height: `${T}px`, width: "100%", position: "relative" } : { width: "100%" },
                children: M.map(({ log: P, index: S }) => {
                  var z;
                  const B = ((z = P.level) == null ? void 0 : z.toLowerCase()) || "info", j = B === "error" || B === "fatal", I = B === "warn" || B === "warning";
                  return /* @__PURE__ */ i(
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
                        j ? "bg-rose-950/20 text-rose-200" : I ? "bg-amber-950/15 text-amber-200" : "text-slate-300"
                      ),
                      children: [
                        /* @__PURE__ */ e("span", { className: "w-10 shrink-0 select-none text-right text-[10px] text-slate-600 tabular-nums", children: P.seq }),
                        P.created_at && /* @__PURE__ */ e("span", { className: "shrink-0 select-none text-[11px] text-slate-500 tabular-nums", children: P.created_at.length >= 19 ? P.created_at.slice(11, 19) : P.created_at }),
                        /* @__PURE__ */ e(
                          "span",
                          {
                            className: x(
                              "inline-block w-12 shrink-0 select-none rounded px-1 py-0.5 text-center text-[9px] font-bold uppercase leading-none",
                              j ? "bg-rose-500/25 text-rose-300" : I ? "bg-amber-500/25 text-amber-300" : "bg-slate-800 text-slate-400"
                            ),
                            children: B.slice(0, 5)
                          }
                        ),
                        /* @__PURE__ */ i(
                          "div",
                          {
                            className: x(
                              "min-w-0 flex-1",
                              y ? "truncate" : "break-all whitespace-pre-wrap"
                            ),
                            title: y ? `${P.message}${P.detail ? ` ${JSON.stringify(P.detail)}` : ""}` : void 0,
                            children: [
                              /* @__PURE__ */ e("span", { children: P.message }),
                              P.detail && Object.keys(P.detail).length > 0 && /* @__PURE__ */ e("span", { className: "ml-2 text-[11px] text-slate-500", children: JSON.stringify(P.detail) })
                            ]
                          }
                        )
                      ]
                    },
                    `${P.seq ?? S}-${S}`
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
const pg = Lp, Bp = {
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
}, Pp = {
  blue: "bg-blue-500/15 text-blue-500 dark:text-blue-300",
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  purple: "bg-purple-500/15 text-purple-600 dark:text-purple-300",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-300"
};
function hg({
  open: t,
  onOpenChange: r,
  enableShortcut: a = !0,
  entityMatchers: n = [],
  pages: s = [],
  onNavigate: o,
  actions: d = [],
  labels: c,
  searchQuery: b,
  onSearchQueryChange: l
}) {
  const u = { ...Bp, ...c }, [m, p] = Ne.useState(!1), [f, h] = Ne.useState(""), [v, w] = Ne.useState(0), k = Ne.useRef(null), g = Ne.useRef([]), N = typeof t == "boolean", _ = N ? t : m, A = Ne.useCallback(
    (S) => {
      N || p(S), r == null || r(S);
    },
    [N, r]
  ), L = b !== void 0 ? b : f, C = Ne.useCallback(
    (S) => {
      b === void 0 && h(S), l == null || l(S);
    },
    [b, l]
  );
  Ne.useEffect(() => {
    if (!a || typeof window > "u") return;
    const S = (B) => {
      (B.metaKey || B.ctrlKey) && B.key.toLowerCase() === "k" && (B.preventDefault(), A(!_));
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [a, _, A]), Ne.useEffect(() => {
    if (!_) return;
    w(0);
    const S = setTimeout(() => {
      var B;
      (B = k.current) == null || B.focus();
    }, 10);
    return () => clearTimeout(S);
  }, [_]);
  const y = L.trim(), T = Ne.useMemo(() => y ? n.filter((S) => S.match ? S.match(y) : S.prefix ? y.startsWith(S.prefix) : !1) : [], [n, y]), E = Ne.useMemo(() => y ? s.filter(
    (S) => ar(`${S.label} ${S.group ?? ""} ${S.to} ${S.keywords ?? ""}`, y)
  ) : s, [s, y]), D = Ne.useMemo(() => y ? d.filter(
    (S) => ar(`${S.label} ${S.group ?? ""} ${S.keywords ?? ""}`, y)
  ) : d, [d, y]), M = Ne.useCallback(
    (S) => {
      A(!1), C(""), S();
    },
    [A, C]
  ), R = Ne.useMemo(() => {
    const S = [];
    for (const B of T)
      S.push({
        key: `entity-${B.id}-${y}`,
        trigger: () => M(() => B.onSelect(y))
      });
    for (const B of E)
      S.push({
        key: `page-${B.id ?? B.to}`,
        trigger: () => M(() => {
          B.onSelect ? B.onSelect() : o == null || o(B.to, B);
        })
      });
    for (const B of D)
      S.push({
        key: `action-${B.id}`,
        trigger: () => M(B.onSelect)
      });
    return S;
  }, [T, E, D, y, M, o]);
  Ne.useEffect(() => {
    w(0);
  }, [y]), Ne.useEffect(() => {
    const S = g.current[v];
    S && typeof S.scrollIntoView == "function" && S.scrollIntoView({ block: "nearest" });
  }, [v]);
  const O = (S) => {
    if (S.key === "ArrowDown") {
      S.preventDefault(), R.length > 0 && w((B) => (B + 1) % R.length);
      return;
    }
    if (S.key === "ArrowUp") {
      S.preventDefault(), R.length > 0 && w((B) => (B - 1 + R.length) % R.length);
      return;
    }
    if (S.key === "Enter") {
      const B = R[v];
      B && (S.preventDefault(), B.trigger());
    }
  };
  let P = 0;
  return /* @__PURE__ */ e(
    dr,
    {
      open: _,
      onClose: () => A(!1),
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
              /* @__PURE__ */ e(zt, { className: "mr-2.5 h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: k,
                  type: "text",
                  value: L,
                  onChange: (S) => C(S.target.value),
                  onKeyDown: O,
                  placeholder: u.searchPlaceholder,
                  "aria-label": u.searchPlaceholder,
                  className: "h-12 w-full bg-transparent text-sm text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              ),
              /* @__PURE__ */ e("kbd", { className: "hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] sm:inline-block", children: "ESC" })
            ] }),
            /* @__PURE__ */ e("div", { role: "listbox", className: "max-h-96 space-y-2 overflow-y-auto p-2", children: R.length === 0 ? /* @__PURE__ */ e("div", { className: "py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: u.emptyText }) : /* @__PURE__ */ i(Ke, { children: [
              T.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-primary)]", children: u.entityGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: T.map((S) => {
                  const B = P++, j = B === v, I = Pp[S.tone ?? "blue"];
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (z) => {
                        g.current[B] = z;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": j,
                      "data-selected": j ? "true" : void 0,
                      onMouseEnter: () => w(B),
                      onClick: () => M(() => S.onSelect(y)),
                      className: x(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        j ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: [
                        S.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: S.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate font-mono", children: S.renderLabel ? S.renderLabel(y) : /* @__PURE__ */ i(Ke, { children: [
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
              E.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: u.pagesGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: E.map((S) => {
                  const B = P++, j = B === v;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (I) => {
                        g.current[B] = I;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": j,
                      "data-selected": j ? "true" : void 0,
                      onMouseEnter: () => w(B),
                      onClick: () => M(() => {
                        S.onSelect ? S.onSelect() : o == null || o(S.to, S);
                      }),
                      className: x(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        j ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
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
              D.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: u.actionsGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: D.map((S) => {
                  const B = P++, j = B === v;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (I) => {
                        g.current[B] = I;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": j,
                      "data-selected": j ? "true" : void 0,
                      onMouseEnter: () => w(B),
                      onClick: () => M(S.onSelect),
                      className: x(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        S.danger ? j ? "bg-red-500/15 text-[var(--abc-danger)]" : "text-[var(--abc-danger)] hover:bg-red-500/10" : j ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        S.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: S.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: S.label }),
                        j && /* @__PURE__ */ e(Zo, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
                      ]
                    },
                    `action-${S.id}`
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
function gg({
  onClick: t,
  placeholder: r = "快速搜索页面、实体 ID…",
  mobilePlaceholder: a = "搜索…",
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
      className: x(
        "group inline-flex h-8.5 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs text-[var(--abc-fg-muted)] shadow-2xs transition cursor-pointer",
        "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        s
      ),
      ...o,
      children: [
        /* @__PURE__ */ e(zt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)]", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: r }),
        /* @__PURE__ */ e("span", { className: "sm:hidden", children: a }),
        /* @__PURE__ */ e("kbd", { className: "ml-1 hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)] sm:inline-block", children: d ? "⌘K" : "Ctrl+K" })
      ]
    }
  );
}
const zp = ({
  title: t,
  description: r,
  breadcrumb: a,
  tags: n,
  actions: s,
  guide: o,
  guideButtonLabel: d = "操作说明",
  guideDrawerTitle: c,
  guideCloseLabel: b = "关闭",
  guideDrawerWidth: l = 480,
  guideOpen: u,
  defaultGuideOpen: m = !1,
  onGuideOpenChange: p,
  hideGuide: f = !1,
  children: h,
  className: v
}) => {
  const [w, k] = lr({
    value: u,
    defaultValue: m,
    onChange: p
  }), g = !!(o && !f), N = typeof d == "string" ? d : "操作说明";
  return /* @__PURE__ */ i("header", { className: x("mb-5 border-b border-[var(--abc-border)] pb-4", v), children: [
    a ? /* @__PURE__ */ e("div", { className: "mb-2", children: a }) : null,
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
      /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-1", children: [
        t || n ? /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
          t ? /* @__PURE__ */ e("h1", { className: "text-xl font-semibold tracking-tight text-[var(--abc-fg-primary)]", children: t }) : null,
          n
        ] }) : null,
        r ? /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-[var(--abc-fg-secondary)]", children: r }) : null
      ] }),
      s || g ? /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
        s,
        g && o ? /* @__PURE__ */ e(
          Ae,
          {
            type: "button",
            variant: "secondary",
            size: "sm",
            icon: /* @__PURE__ */ e(du, { className: "h-3.5 w-3.5" }),
            "aria-expanded": w,
            onClick: () => k(!0),
            children: d
          }
        ) : null
      ] }) : null
    ] }),
    g && o ? /* @__PURE__ */ i(Ke, { children: [
      /* @__PURE__ */ i("details", { className: "sr-only", "aria-label": N, children: [
        /* @__PURE__ */ e("summary", { children: o.title }),
        /* @__PURE__ */ e("ol", { children: o.steps.map((_, A) => /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ i("span", { children: [
            _.step ?? A + 1,
            ". ",
            _.title
          ] }),
          _.description ? /* @__PURE__ */ i("span", { children: [
            " — ",
            _.description
          ] }) : null
        ] }, A)) })
      ] }),
      /* @__PURE__ */ e(
        na,
        {
          open: w,
          onClose: () => k(!1),
          placement: "right",
          width: l,
          title: c ?? o.title,
          description: o.subtitle,
          footer: /* @__PURE__ */ e("div", { className: "flex justify-end", children: /* @__PURE__ */ e(Ae, { type: "button", variant: "secondary", size: "sm", onClick: () => k(!1), children: b }) }),
          children: /* @__PURE__ */ i("div", { className: "space-y-4", children: [
            o.badge ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Ar, { tone: "info", children: o.badge }) }) : null,
            /* @__PURE__ */ e("ol", { className: "space-y-3", "aria-label": N, children: o.steps.map((_, A) => /* @__PURE__ */ e(
              "li",
              {
                className: "rounded-lg border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)]/60 p-3.5",
                children: /* @__PURE__ */ i("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ e("span", { className: "mt-0.5 inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] px-1.5 font-mono text-xs font-semibold text-[var(--abc-primary)]", children: _.step ?? A + 1 }),
                  /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-1", children: [
                    /* @__PURE__ */ e("div", { className: "text-sm font-medium text-[var(--abc-fg-primary)]", children: _.title }),
                    _.description ? /* @__PURE__ */ e("p", { className: "text-xs leading-relaxed text-[var(--abc-fg-secondary)]", children: _.description }) : null
                  ] })
                ] })
              },
              A
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
zp.displayName = "ProPageHeader";
export {
  Ln as ABC_BRAND_PRESETS,
  qs as ABC_DENSITY_PRESETS,
  Hf as ABC_HEADER_HEIGHT_BY_SIZE,
  fa as ABC_MOTION_PRESETS,
  Xs as ABC_RADIUS_PRESETS,
  $f as ABC_SIDEBAR_WIDTH_BY_SIZE,
  Wp as ABC_SIZE_PRESETS,
  No as AUTO_OPTION_TONES,
  ui as AbcConfirmHost,
  Zp as AbcProvider,
  Pb as AbcToastViewport,
  ph as ActionCard,
  Hh as Alert,
  Ph as AsyncInlineError,
  Fh as AttentionList,
  mo as AuroraBackground,
  Zf as AuthLayout,
  em as Avatar,
  cn as BYTE_UNITS,
  Ni as BYTE_UNIT_FACTORS,
  ih as Badge,
  xh as BentoCard,
  vh as BentoGrid,
  bo as BorderBeam,
  rf as BrandIcon,
  qr as BrandLogoBlock,
  yh as Breadcrumb,
  Ae as Button,
  Th as ByteQuotaInput,
  wo as COLOR_ALIAS_TO_TONE,
  ln as Card,
  cm as CardContent,
  lm as CardDescription,
  dm as CardFooter,
  om as CardHeader,
  im as CardTitle,
  fh as CheckCard,
  mh as CheckCardGroup,
  aa as Checkbox,
  Rh as Collapse,
  hh as CollapsibleCard,
  Xf as CommandPalette,
  gg as CommandTriggerButton,
  Oh as ConfirmDialog,
  qp as ConfirmProvider,
  eh as CopyButton,
  Mi as CopyableCode,
  lo as CopyableText,
  sg as CrudConfigPage,
  ag as CrudFormLayout,
  ug as CrudSearchForm,
  mg as CrudTable,
  ah as CursorPagination,
  Kf as DEFAULT_ABC_LAYOUT_SETTINGS,
  Kt as DEFAULT_ABC_THEME,
  ts as DENSITY_CELL_PY,
  dn as DURATION_UNITS,
  ki as DURATION_UNIT_FACTORS,
  Of as DataTable,
  Da as DatePicker,
  La as DateRangePicker,
  Ai as DescriptionList,
  Lh as DescriptionListItem,
  Ah as Descriptions,
  dr as Dialog,
  vs as DialogContent,
  gs as DialogContext,
  Ns as DialogDescription,
  ys as DialogFooter,
  xs as DialogHeader,
  ws as DialogTitle,
  Xh as DictSelect,
  Zh as DictTag,
  ch as Divider,
  na as Drawer,
  bf as DrawerBody,
  uf as DrawerDescription,
  mf as DrawerFooter,
  cf as DrawerHeader,
  df as DrawerTitle,
  Aa as Dropdown,
  Uf as DualColumnNav,
  Ih as DurationQuotaInput,
  fi as EmptyState,
  $h as ErrorBoundary,
  Af as FILTER_HIGHLIGHT_SWATCHES,
  og as FilterPillGroup,
  fp as FilterToolbar,
  fg as FormDrawerDialog,
  Ms as FormField,
  gp as HeaderColumnFilterPopover,
  oo as ICON_CATALOG,
  hr as Icon,
  th as IconBadge,
  io as IconPicker,
  Ba as ImagePreview,
  wi as ImageUpload,
  yt as Input,
  yn as InputNumber,
  If as InspectorPanel,
  Vr as Kbd,
  qf as KeepAliveContainer,
  km as Label,
  hf as Loading,
  jh as LoadingStateCard,
  bh as MetricCard,
  Eb as Modal,
  rg as MultiImageFieldControl,
  Yf as MultiTabBar,
  Or as NotificationBanner,
  Wh as OneTimeSecretDialog,
  Gh as PageContainer,
  Vh as PageTransition,
  on as Pagination,
  qh as Permission,
  ap as PermissionGuard,
  Is as Popover,
  gh as PricingCard,
  vp as ProColumnSettingsPopover,
  hg as ProCommandPalette,
  ng as ProConfigForm,
  mp as ProConfigPage,
  dp as ProCrudFormFieldControl,
  Gi as ProCrudFormLayout,
  up as ProCrudFormModal,
  wp as ProCrudSearchForm,
  bg as ProCrudTable,
  bp as ProCrudViewModal,
  yp as ProFloatingBatchBar,
  Ap as ProFormContainer,
  np as ProFormLayout,
  cp as ProIconFieldControl,
  Yh as ProLayout,
  Lp as ProLogViewer,
  Ui as ProMultiImageUpload,
  zp as ProPageHeader,
  xp as ProRowActionsOverflow,
  qi as ProTable,
  Sf as Progress,
  ig as QuickSelectBar,
  fr as RadioGroup,
  zh as ReadErrorBanner,
  lg as ReasonedActionDialog,
  cg as ReasonedActionDrawer,
  Kh as Result,
  Yb as RichIconText,
  Sm as SearchInput,
  Nh as SegmentedControl,
  sr as Select,
  rh as SelectField,
  $n as SidebarNav,
  Bt as Skeleton,
  nh as SkeletonCard,
  oh as SkeletonChart,
  sh as SkeletonTable,
  Ch as SliderVerify,
  uo as SmartPagination,
  dh as Space,
  Uh as SplitInspectorLayout,
  uh as SpotlightCard,
  Ar as StatusTag,
  wh as Steps,
  rr as Switch,
  ao as TONE_ICONS,
  vf as TabErrorBoundary,
  Pi as Table,
  ji as TableBody,
  jf as TableCaption,
  Xa as TableCell,
  Bi as TableCore,
  zf as TableFooter,
  Fi as TableHead,
  zi as TableHeader,
  wa as TableRow,
  Mh as Tabs,
  tm as Tag,
  Um as TagInput,
  Bh as TenantIcon,
  Ia as Textarea,
  Mo as ThemeCustomizer,
  sf as ThemeSwitcher,
  Dh as Timeline,
  Bb as ToastContainer,
  Lb as ToastItemView,
  Ut as Tooltip,
  Eo as TopHorizontalNav,
  Di as TopProgressBar,
  Sh as Tree,
  Ra as TreeSelect,
  kh as TreeSelectField,
  pg as VirtualLogViewer,
  gf as Watermark,
  nn as abcConfirm,
  Ef as abcProgress,
  Cs as abcToast,
  Vp as abcUiClasses,
  Vt as applyAbcThemeToDocument,
  Er as baseFieldControlClass,
  Vn as buildCalendarMonthGrid,
  pp as buildCsvContent,
  sb as buttonClass,
  Up as buttonVariants,
  qa as cleanQueryObject,
  Ab as clearToasts,
  x as cn,
  Gr as collectAllExpandableKeys,
  ps as computeTreeCheckState,
  Gp as confirm,
  wn as copyToClipboard,
  Sn as createProTableApi,
  Jh as createTableApi,
  ib as dangerButtonClass,
  Ss as dismissToast,
  Do as downloadTableCsv,
  wu as filterAndSortClientRows,
  db as filterCardClass,
  hu as filterTreeNodes,
  xu as filterTreeSelectNodes,
  Oi as findBreadcrumbChain,
  Ca as flattenNodeText,
  yu as flattenVisibleTreeNodes,
  dg as formatFilterText,
  Wa as formatIsoDate,
  Eh as formatQuotaBytes,
  _h as formatQuotaDuration,
  Qs as formatTreeCheckedStrategy,
  fu as getCharInitial,
  kn as getNestedValue,
  xn as getOverlayPortalContainer,
  pu as getPinyinInitials,
  ab as inputClass,
  tg as isFieldRequired,
  pr as isProApiFailure,
  Vi as isSchemaFieldRequired,
  Ii as isSvgSource,
  vb as labelClass,
  ar as matchKeywordWithPinyin,
  Nr as menuContainsPath,
  rs as normalizeProListResponse,
  gu as normalizeTreeSelectData,
  pb as pageHeaderClass,
  gb as pageSubTitleClass,
  hb as pageTitleClass,
  cb as panelClass,
  Mf as parseNumericWidth,
  Xn as parseSelectChildren,
  Ib as pauseToast,
  Ei as pickBestByteUnit,
  _i as pickBestDurationUnit,
  Wr as pushToast,
  Nu as readQueryFromUrlSearch,
  Qp as registerAbcIcons,
  Li as renderBuiltInValue,
  Ur as resolveAbcThemeMode,
  Zr as resolveFieldKey,
  vu as resolveTreeCheckedStateFromValue,
  Mb as resumeToast,
  ob as secondaryClass,
  ub as tableCardClass,
  fb as tableCellClass,
  bb as tableHeadClass,
  mb as tableHeaderCellClass,
  lh as tagVariants,
  lb as textButtonClass,
  nb as textareaClass,
  Xp as toast,
  ei as toggleTreeNodeChecked,
  mu as transitionAbcTheme,
  Mt as useAbcConfig,
  Wi as useAbcDict,
  Fb as useAbcDrawerCascadeMode,
  Me as useAbcMotion,
  Ds as useAbcPermission,
  Be as useAbcSize,
  nf as useColorScheme,
  Yp as useConfirm,
  lr as useControllableState,
  eg as useCrudTable,
  Jp as useCursorStack,
  Sb as useDialog,
  yb as useDraftStorage,
  ta as useFloatingPosition,
  jb as useOptionalAbcConfig,
  Dr as usePresence,
  ip as useProForm,
  op as useProTable,
  sp as useProTableApi,
  Qh as useTableApi,
  wb as useTableSettings,
  ku as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
