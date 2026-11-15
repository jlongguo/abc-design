var Ol = Object.defineProperty;
var $l = (t, r, a) => r in t ? Ol(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var Bs = (t, r, a) => $l(t, typeof r != "symbol" ? r + "" : r, a);
import * as ve from "react";
import at, { useState as $, useEffect as ge, useRef as ce, useCallback as ue, useLayoutEffect as $n, createContext as io, useId as Tt, useContext as dn, useMemo as se, useImperativeHandle as es } from "react";
import { jsxs as i, jsx as e, Fragment as tt } from "react/jsx-runtime";
import { Loader2 as br, Minimize2 as co, Maximize2 as lo, X as Ct, Trash2 as Vr, AlertTriangle as ha, CheckCircle2 as Xr, HelpCircle as $a, Info as un, AlertCircle as oa, Zap as Fl, XCircle as Wl, Wrench as Kl, Wallet as Hl, Video as Ul, Users as Vl, UserCog as Gl, UserCheck as Yl, User as ql, Upload as ts, Unlock as Xl, TrendingUp as Zl, Trash as Jl, Timer as Ql, Ticket as ed, Terminal as td, Tags as rd, Tag as ad, Store as nd, StarOff as sd, Star as od, Sparkles as bn, Smartphone as id, SlidersHorizontal as Gs, Sliders as cd, ShoppingCart as ld, ShoppingBag as dd, ShieldCheck as uo, ShieldAlert as rs, Shield as ud, Share2 as bd, Share as md, Settings as fd, Server as pd, Send as hd, Search as Ot, ScrollText as gd, RotateCw as as, RotateCcw as gr, RefreshCw as Fa, Receipt as vd, Radio as xd, PlusCircle as yd, Plus as ns, Play as Gi, PieChart as wd, PhoneCall as Nd, Phone as kd, Pause as Sd, PanelTop as Cd, PanelLeft as _d, Palette as bo, Package as Id, Network as Td, MoreHorizontal as mo, Monitor as fo, Minus as ss, MessagesSquare as Md, MessageSquareText as Ed, MessageSquareQuote as Ad, MessageSquare as Ld, MessageCircle as Dd, Menu as Yi, Megaphone as Rd, MapPin as jd, Lock as Bd, ListOrdered as Pd, ListChecks as zd, Link2 as Od, LineChart as $d, LayoutGrid as Fd, LayoutDashboard as Wd, Layers as qi, KeyRound as Xi, Key as Kd, Image as Zi, Home as Hd, History as Ud, Headphones as Vd, HardDrive as Gd, Handshake as Yd, Globe2 as qd, Globe as Xd, FolderTree as Ji, FolderPlus as Zd, FolderOpen as Jd, FolderGit2 as Qd, Folder as eu, Flame as tu, FileText as ru, FileSpreadsheet as au, FileClock as nu, FileCheck as su, Eye as Wa, Edit3 as zn, Edit as ou, Download as Ys, Database as iu, CreditCard as cu, Cpu as lu, Copy as ga, Compass as Qi, Coins as du, Clock as Fn, CircleDollarSign as uu, CheckSquare as bu, CheckCircle as ec, Check as Nt, Camera as mu, CalendarCheck as fu, Calendar as po, Building2 as pu, Boxes as hu, BookMarked as gu, BellRing as vu, Bell as xu, BarChart3 as yu, BarChart2 as wu, AlertOctagon as Nu, Activity as ku, EyeOff as tc, ChevronDown as lr, FolderSearch as Su, ChevronLeft as Wn, ChevronRight as vr, ArrowUpRight as rc, ArrowDownRight as Cu, ChevronsLeft as ac, ChevronsRight as nc, UploadCloud as _u, ArrowRight as sc, ChevronsUpDown as Iu, ChevronsDownUp as Tu, ZoomOut as Mu, ZoomIn as Eu, WifiOff as Au, CircleAlert as Lu, Sun as on, Moon as cn, GripVertical as os, ServerCrash as Du, FileSearch as Ru, ArrowUp as qs, ArrowDown as Xs, ArrowUpDown as ii, Pin as Pa, PinOff as ju, ArrowLeft as Bu, Columns as Pu, Pencil as zu, CornerDownLeft as oc, Code2 as Ou, PanelLeftOpen as $u, PanelLeftClose as Fu, Save as ic, ChevronUp as Kn, Filter as On, Settings2 as Wu, ListFilter as Ku, AlignJustify as Hu } from "lucide-react";
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
}, ci = {
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
}, li = {
  none: { label: "直角硬朗 (0px)", controlRadius: "0px", panelRadius: "0px" },
  sm: { label: "微圆角 (6px)", controlRadius: "6px", panelRadius: "8px" },
  md: { label: "标准圆角 (8px)", controlRadius: "8px", panelRadius: "12px" },
  lg: { label: "柔和圆角 (12px)", controlRadius: "12px", panelRadius: "16px" }
}, Jp = {
  xs: { label: "超小 xs", heightVar: "var(--abc-control-h-xs)", fontSize: "12px" },
  sm: { label: "紧凑 sm", heightVar: "var(--abc-control-h-sm)", fontSize: "12px" },
  md: { label: "标准 md", heightVar: "var(--abc-control-h-md)", fontSize: "14px" },
  lg: { label: "宽松 lg", heightVar: "var(--abc-control-h-lg)", fontSize: "14px" }
}, en = {
  none: { label: "静默无动效", description: "零动画即时反馈，无障碍极速模式", durationBase: "0ms" },
  subtle: { label: "克制微动", description: "轻量化高速阻尼，无回弹高效率", durationBase: "140ms" },
  smooth: { label: "丝滑阻尼", description: "标准企业级物理缓动曲线", durationBase: "220ms" },
  spring: { label: "灵动弹簧", description: "带物理过冲感的高阶弹性微交互", durationBase: "280ms" }
}, Gt = {
  mode: "system",
  brand: "blue",
  density: "default",
  radius: "md",
  fontScale: "md",
  visualMode: "default",
  motion: "smooth"
}, di = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function Uu(t, r) {
  const a = r == null ? void 0 : r.trim();
  if (!a || !/^#[0-9a-fA-F]{6}$/.test(a)) {
    for (const s of di)
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
  for (const s of di)
    t.style.setProperty(`--abc-brand-${s}`, n[s]);
}
function Da(t) {
  return t === "light" || t === "dark" ? t : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Vu(t) {
  if (typeof document > "u")
    return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  a || (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a.content !== r && (a.content = r);
}
function Qt(t) {
  const r = Da(t.mode);
  if (typeof document > "u")
    return r;
  const a = document.documentElement;
  return Vu(t.mode), a.setAttribute("data-abc-theme", r), a.setAttribute("data-abc-theme-mode", t.mode), a.setAttribute("data-abc-brand", t.brand), a.setAttribute("data-abc-density", t.density), a.setAttribute("data-abc-radius", t.radius), a.setAttribute("data-abc-font-scale", t.fontScale ?? "md"), a.setAttribute("data-abc-visual", t.visualMode ?? "default"), a.setAttribute("data-abc-size", t.componentSize ?? "sm"), a.setAttribute("data-abc-motion", t.motion ?? "smooth"), a.classList.toggle("dark", r === "dark"), Uu(a, t.customBrandColor), r;
}
function Gu(t, r) {
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
const zs = [
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
function Yu(t) {
  if (!/[\u4e00-\u9fa5]/.test(t))
    return t.toLowerCase();
  for (let r = zs.length - 1; r >= 0; r--)
    if (t.localeCompare(zs[r].start, "zh-CN") >= 0)
      return zs[r].letter;
  return t.toLowerCase();
}
function qu(t) {
  return Array.from(t).map(Yu).join("");
}
function dr(t, r) {
  const a = r.trim().toLowerCase();
  return !a || t.toLowerCase().includes(a) ? !0 : qu(t).includes(a);
}
function cc(t, r = []) {
  if (t.disabled || r.push(t.key), t.children)
    for (const a of t.children)
      cc(a, r);
  return r;
}
function ho(t, r, a = !1) {
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
    const c = d.children.filter((b) => !b.disabled);
    if (c.length === 0) {
      const b = n.has(d.key);
      return { allChecked: b, someChecked: b };
    }
    let u = !0, l = !1;
    for (const b of c) {
      const m = o(b);
      m.allChecked || (u = !1), m.someChecked && (l = !0);
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
function lc(t, r, a, n, s = !1) {
  const o = new Set(r);
  if (s)
    return n ? o.add(a.key) : o.delete(a.key), { checkedKeys: Array.from(o), halfCheckedKeys: [] };
  const d = cc(a);
  for (const c of d)
    n ? o.add(c) : o.delete(c);
  return ho(t, Array.from(o), !1);
}
function Xu(t, r) {
  const a = r.trim();
  if (!a)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const n = [];
  function s(o) {
    const d = [];
    for (const c of o) {
      const u = c.children ? s(c.children) : [], l = dr(c.title, a);
      (l || u.length > 0) && (u.length > 0 && n.push(c.key), d.push({
        ...c,
        children: u.length > 0 ? u : c.children && l ? c.children : void 0
      }));
    }
    return d;
  }
  return {
    filteredNodes: s(t),
    autoExpandedKeys: n
  };
}
function Ra(t) {
  const r = [];
  function a(n) {
    for (const s of n)
      s.children && s.children.length > 0 && (r.push(s.key), a(s.children));
  }
  return a(t), r;
}
function ui(t, r, a) {
  const n = t[r] !== void 0 ? t[r] : t.label !== void 0 ? t.label : t.title;
  return typeof n == "string" || typeof n == "number" ? { title: String(n), rawLabel: n } : typeof t.title == "string" || typeof t.title == "number" ? { title: String(t.title), rawLabel: n ?? t.title } : { title: String(a), rawLabel: n ?? String(a) };
}
function Zu(t = [], r) {
  const a = (r == null ? void 0 : r.fieldNames) ?? {}, n = a.label ?? "label", s = a.value ?? "value", o = a.children ?? "children", d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = r == null ? void 0 : r.treeDataSimpleMode;
  if (u) {
    const m = (typeof u == "object" ? u.id : void 0) ?? "id", h = (typeof u == "object" ? u.pId : void 0) ?? "pId", f = typeof u == "object" && "rootPId" in u ? u.rootPId : null, p = [], x = /* @__PURE__ */ new Map();
    t.forEach((v, C) => {
      const L = v[s] !== void 0 ? v[s] : v[m] !== void 0 ? v[m] : v.value !== void 0 ? v.value : v.key !== void 0 ? v.key : C, D = typeof L == "string" || typeof L == "number" ? L : String(L ?? C), { title: j, rawLabel: S } = ui(v, n, D), y = v[m] !== void 0 ? v[m] : D, T = v[h], _ = {
        key: D,
        value: D,
        title: j,
        rawLabel: S,
        disabled: !!v.disabled,
        selectable: v.selectable,
        checkable: v.checkable,
        isLeaf: v.isLeaf,
        icon: typeof v.icon == "string" ? v.icon : void 0,
        badge: typeof v.badge == "string" || typeof v.badge == "number" ? v.badge : void 0,
        raw: v
      }, R = String(y), A = String(_.key);
      d.set(A, _);
      const z = {
        idStr: R,
        pIdRaw: T,
        pIdStr: T == null || T === "" ? null : String(T),
        node: _
      };
      p.push(z), x.set(R, z);
    });
    const w = [], k = f == null ? null : String(f);
    for (const v of p) {
      const C = v.pIdStr !== null && v.pIdStr !== k ? x.get(v.pIdStr) : void 0;
      C && C !== v ? (C.node.children || (C.node.children = []), C.node.children.push(v.node), c.set(String(v.node.key), String(C.node.key))) : (w.push(v.node), c.set(String(v.node.key), null));
    }
    return { treeNodes: w, nodeMap: d, parentMap: c };
  }
  function l(m, h, f) {
    return m.map((p, x) => {
      const k = a.value !== void 0 && p[s] !== void 0 ? p[s] : p.value !== void 0 ? p.value : p.key !== void 0 ? p.key : `${f}-${x}`, v = typeof k == "string" || typeof k == "number" ? k : String(k), { title: C, rawLabel: L } = ui(p, n, v), D = String(v), j = p[o] ?? p.children, S = Array.isArray(j) ? l(j, D, `${f}-${x}`) : void 0, y = {
        key: v,
        value: v,
        title: C,
        rawLabel: L,
        disabled: !!p.disabled,
        selectable: p.selectable,
        checkable: p.checkable,
        isLeaf: p.isLeaf,
        icon: typeof p.icon == "string" ? p.icon : void 0,
        badge: typeof p.badge == "string" || typeof p.badge == "number" ? p.badge : void 0,
        children: S,
        raw: p
      };
      return d.set(D, y), c.set(D, h), y;
    });
  }
  return { treeNodes: l(t, null, "root"), nodeMap: d, parentMap: c };
}
function dc(t, r) {
  if (!t.disabled && t.checkable !== !1 && r.push(t.key), t.children)
    for (const a of t.children)
      dc(a, r);
}
function Ju(t, r, a = !1) {
  const n = new Set(r.map((b) => String(b)));
  if (a) {
    let h = function(f) {
      for (const p of f) {
        const x = String(p.key);
        n.has(x) && !b.has(x) && (b.add(x), m.push(p.key)), p.children && h(p.children);
      }
    };
    const b = /* @__PURE__ */ new Set(), m = [];
    h(t);
    for (const f of r)
      b.has(String(f)) || m.push(f);
    return { checkedKeys: m, halfCheckedKeys: [] };
  }
  const s = [], o = /* @__PURE__ */ new Set();
  function d(b) {
    for (const m of b) {
      const h = String(m.key);
      n.has(h) && !m.disabled && m.checkable !== !1 ? (o.add(h), dc(m, s)) : m.children && m.children.length > 0 && d(m.children);
    }
  }
  d(t);
  const c = ho(t, s, !1), u = new Set(c.checkedKeys.map((b) => String(b))), l = [];
  for (const b of r) {
    const m = String(b);
    if (!o.has(m) && !u.has(m)) {
      let f = function(p) {
        for (const x of p)
          if (String(x.key) === m || x.children && f(x.children))
            return !0;
        return !1;
      }, h = !1;
      h = f(t), h || l.push(b);
    }
  }
  return {
    checkedKeys: [...c.checkedKeys, ...l],
    halfCheckedKeys: c.halfCheckedKeys
  };
}
function bi(t, r, a = "SHOW_ALL", n = !1) {
  const s = new Set(r.map((l) => String(l))), o = /* @__PURE__ */ new Set(), d = [], c = /* @__PURE__ */ new Set();
  function u(l) {
    for (const b of l)
      c.add(String(b.key)), b.children && u(b.children);
  }
  if (u(t), n || a === "SHOW_ALL") {
    let l = function(b) {
      for (const m of b) {
        const h = String(m.key);
        s.has(h) && !o.has(h) && (o.add(h), d.push(m.key)), m.children && l(m.children);
      }
    };
    l(t);
  } else if (a === "SHOW_PARENT") {
    let l = function(b) {
      for (const m of b) {
        const h = String(m.key);
        if (!m.disabled && m.checkable !== !1 && s.has(h)) {
          o.has(h) || (o.add(h), d.push(m.key));
          continue;
        }
        m.children && m.children.length > 0 && l(m.children);
      }
    };
    l(t);
  } else {
    let l = function(b) {
      for (const m of b)
        if ((m.children ?? []).filter((f) => !f.disabled && f.checkable !== !1).length === 0) {
          const f = String(m.key);
          !m.disabled && m.checkable !== !1 && s.has(f) && !o.has(f) && (o.add(f), d.push(m.key));
        } else
          l(m.children ?? []);
    };
    l(t);
  }
  for (const l of r) {
    const b = String(l);
    !c.has(b) && !o.has(b) && (o.add(b), d.push(l));
  }
  return d;
}
function Qu(t, r, a = "both") {
  const n = r.trim();
  if (!n)
    return { filteredNodes: t, autoExpandedKeys: [] };
  const s = n.toLowerCase(), o = [];
  function d(c) {
    const u = [];
    for (const l of c) {
      const b = l.children ? d(l.children) : [], m = a !== "value" && dr(l.title, n), h = a !== "title" && String(l.value).toLowerCase().includes(s);
      (m || h || b.length > 0) && (b.length > 0 && o.push(l.key), u.push({
        ...l,
        children: b.length > 0 ? b : l.children && (m || h) ? l.children : void 0
      }));
    }
    return u;
  }
  return {
    filteredNodes: d(t),
    autoExpandedKeys: o
  };
}
function eb(t, r, a) {
  const n = [];
  function s(o, d, c) {
    const u = o.length;
    o.forEach((l, b) => {
      const m = String(l.key), h = a ? a(l) : !!(l.children && l.children.length > 0), f = h && r.has(m);
      n.push({
        node: l,
        keyStr: m,
        depth: d,
        posInSet: b + 1,
        setSize: u,
        hasChildren: h,
        isExpanded: f,
        parentKey: c
      }), f && l.children && l.children.length > 0 && s(l.children, d + 1, l.key);
    });
  }
  return s(t, 0, null), n;
}
function uc(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t) && ("start" in t || "end" in t);
}
function Ea(t, r) {
  if (!(!t || typeof t != "object")) {
    if (r in t)
      return t[r];
    if (r.includes("."))
      return r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t);
  }
}
function tb({ rows: t, searchableKeys: r, quickKeyword: a = "", fieldFilters: n = {}, sortField: s, sortOrder: o }) {
  let d = [...t];
  const c = a.trim();
  c && (d = d.filter((u) => (r && r.length > 0 ? r : Object.keys(u)).some((b) => {
    const m = Ea(u, b);
    return m != null && dr(String(m), c);
  })));
  for (const [u, l] of Object.entries(n))
    if (l != null) {
      if (Array.isArray(l)) {
        if (l.length === 0)
          continue;
        d = d.filter((b) => {
          const m = Ea(b, u);
          return m == null ? !1 : Array.isArray(m) ? l.some((h) => m.map(String).includes(String(h))) : l.some((h) => String(m) === String(h) || dr(String(m), String(h)));
        });
        continue;
      }
      if (uc(l)) {
        const b = (l.start ?? "").trim(), m = (l.end ?? "").trim();
        if (!b && !m)
          continue;
        d = d.filter((h) => {
          const f = Ea(h, u);
          if (f == null)
            return !1;
          const p = String(f).slice(0, 10);
          return !(b && p < b || m && p > m);
        });
        continue;
      }
      String(l).trim() !== "" && (d = d.filter((b) => {
        const m = Ea(b, u);
        return m == null ? !1 : dr(String(m), String(l));
      }));
    }
  if (s && o) {
    const u = o === "asc" ? 1 : -1;
    d.sort((l, b) => {
      const m = Ea(l, s), h = Ea(b, s);
      return typeof m == "number" && typeof h == "number" ? (m - h) * u : String(m ?? "").localeCompare(String(h ?? ""), "zh-CN") * u;
    });
  }
  return d;
}
function Dn(t) {
  const r = {};
  for (const [a, n] of Object.entries(t))
    n == null || n === "" || Array.isArray(n) && n.length === 0 || uc(n) && !n.start && !n.end || (r[a] = n);
  return r;
}
function rb(t, r) {
  const a = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t), n = {}, s = r ? new Set(r) : null;
  return a.forEach((o, d) => {
    o && (s && !s.has(d) || (n[d] = o));
  }), n;
}
function ab(t, r, a) {
  const n = new URLSearchParams(t.startsWith("?") ? t.slice(1) : t);
  for (const o of r)
    n.delete(o);
  for (const [o, d] of Object.entries(a))
    d == null || Array.isArray(d) || typeof d == "object" || String(d).trim() !== "" && n.set(o, String(d));
  const s = n.toString();
  return s ? `?${s}` : "";
}
function Rn(t, r, a) {
  const n = new Date(t, r, a), s = n.getFullYear(), o = String(n.getMonth() + 1).padStart(2, "0"), d = String(n.getDate()).padStart(2, "0");
  return `${s}-${o}-${d}`;
}
function Zs(t, r, a = /* @__PURE__ */ new Date()) {
  const n = Rn(a.getFullYear(), a.getMonth(), a.getDate()), s = new Date(t, r, 1).getDay(), o = new Date(t, r + 1, 0).getDate(), d = new Date(t, r, 0).getDate(), c = [];
  for (let l = s - 1; l >= 0; l--) {
    const b = d - l, m = Rn(t, r - 1, b);
    c.push({ iso: m, day: b, inCurrentMonth: !1, isToday: m === n });
  }
  for (let l = 1; l <= o; l++) {
    const b = Rn(t, r, l);
    c.push({ iso: b, day: l, inCurrentMonth: !0, isToday: b === n });
  }
  let u = 1;
  for (; c.length < 42; ) {
    const l = Rn(t, r + 1, u);
    c.push({ iso: l, day: u, inCurrentMonth: !1, isToday: l === n }), u += 1;
  }
  return c;
}
function bc(t) {
  var r, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (r = 0; r < s; r++) t[r] && (a = bc(t[r])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function nb() {
  for (var t, r, a = 0, n = "", s = arguments.length; a < s; a++) (t = arguments[a]) && (r = bc(t)) && (n && (n += " "), n += r);
  return n;
}
const go = "-", sb = (t) => {
  const r = ib(t), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (d) => {
      const c = d.split(go);
      return c[0] === "" && c.length !== 1 && c.shift(), mc(c, r) || ob(d);
    },
    getConflictingClassGroupIds: (d, c) => {
      const u = a[d] || [];
      return c && n[d] ? [...u, ...n[d]] : u;
    }
  };
}, mc = (t, r) => {
  var d;
  if (t.length === 0)
    return r.classGroupId;
  const a = t[0], n = r.nextPart.get(a), s = n ? mc(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = t.join(go);
  return (d = r.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : d.classGroupId;
}, mi = /^\[(.+)\]$/, ob = (t) => {
  if (mi.test(t)) {
    const r = mi.exec(t)[1], a = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, ib = (t) => {
  const {
    theme: r,
    prefix: a
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return lb(Object.entries(t.classGroups), a).forEach(([o, d]) => {
    Js(d, n, o, r);
  }), n;
}, Js = (t, r, a, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : fi(r, s);
      o.classGroupId = a;
      return;
    }
    if (typeof s == "function") {
      if (cb(s)) {
        Js(s(n), r, a, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: a
      });
      return;
    }
    Object.entries(s).forEach(([o, d]) => {
      Js(d, fi(r, o), a, n);
    });
  });
}, fi = (t, r) => {
  let a = t;
  return r.split(go).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, cb = (t) => t.isThemeGetter, lb = (t, r) => r ? t.map(([a, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([d, c]) => [r + d, c])) : o);
  return [a, s];
}) : t, db = (t) => {
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
}, fc = "!", ub = (t) => {
  const {
    separator: r,
    experimentalParseClassName: a
  } = t, n = r.length === 1, s = r[0], o = r.length, d = (c) => {
    const u = [];
    let l = 0, b = 0, m;
    for (let w = 0; w < c.length; w++) {
      let k = c[w];
      if (l === 0) {
        if (k === s && (n || c.slice(w, w + o) === r)) {
          u.push(c.slice(b, w)), b = w + o;
          continue;
        }
        if (k === "/") {
          m = w;
          continue;
        }
      }
      k === "[" ? l++ : k === "]" && l--;
    }
    const h = u.length === 0 ? c : c.substring(b), f = h.startsWith(fc), p = f ? h.substring(1) : h, x = m && m > b ? m - b : void 0;
    return {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: x
    };
  };
  return a ? (c) => a({
    className: c,
    parseClassName: d
  }) : d;
}, bb = (t) => {
  if (t.length <= 1)
    return t;
  const r = [];
  let a = [];
  return t.forEach((n) => {
    n[0] === "[" ? (r.push(...a.sort(), n), a = []) : a.push(n);
  }), r.push(...a.sort()), r;
}, mb = (t) => ({
  cache: db(t.cacheSize),
  parseClassName: ub(t),
  ...sb(t)
}), fb = /\s+/, pb = (t, r) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], d = t.trim().split(fb);
  let c = "";
  for (let u = d.length - 1; u >= 0; u -= 1) {
    const l = d[u], {
      modifiers: b,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: f
    } = a(l);
    let p = !!f, x = n(p ? h.substring(0, f) : h);
    if (!x) {
      if (!p) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (x = n(h), !x) {
        c = l + (c.length > 0 ? " " + c : c);
        continue;
      }
      p = !1;
    }
    const w = bb(b).join(":"), k = m ? w + fc : w, v = k + x;
    if (o.includes(v))
      continue;
    o.push(v);
    const C = s(x, p);
    for (let L = 0; L < C.length; ++L) {
      const D = C[L];
      o.push(k + D);
    }
    c = l + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function hb() {
  let t = 0, r, a, n = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (a = pc(r)) && (n && (n += " "), n += a);
  return n;
}
const pc = (t) => {
  if (typeof t == "string")
    return t;
  let r, a = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (r = pc(t[n])) && (a && (a += " "), a += r);
  return a;
};
function gb(t, ...r) {
  let a, n, s, o = d;
  function d(u) {
    const l = r.reduce((b, m) => m(b), t());
    return a = mb(l), n = a.cache.get, s = a.cache.set, o = c, c(u);
  }
  function c(u) {
    const l = n(u);
    if (l)
      return l;
    const b = pb(u, a);
    return s(u, b), b;
  }
  return function() {
    return o(hb.apply(null, arguments));
  };
}
const xt = (t) => {
  const r = (a) => a[t] || [];
  return r.isThemeGetter = !0, r;
}, hc = /^\[(?:([a-z-]+):)?(.+)\]$/i, vb = /^\d+\/\d+$/, xb = /* @__PURE__ */ new Set(["px", "full", "screen"]), yb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, kb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Sb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ur = (t) => ja(t) || xb.has(t) || vb.test(t), na = (t) => Ka(t, "length", Lb), ja = (t) => !!t && !Number.isNaN(Number(t)), Os = (t) => Ka(t, "number", ja), tn = (t) => !!t && Number.isInteger(Number(t)), Cb = (t) => t.endsWith("%") && ja(t.slice(0, -1)), We = (t) => hc.test(t), sa = (t) => yb.test(t), _b = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ib = (t) => Ka(t, _b, gc), Tb = (t) => Ka(t, "position", gc), Mb = /* @__PURE__ */ new Set(["image", "url"]), Eb = (t) => Ka(t, Mb, Rb), Ab = (t) => Ka(t, "", Db), rn = () => !0, Ka = (t, r, a) => {
  const n = hc.exec(t);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : a(n[2]) : !1;
}, Lb = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wb.test(t) && !Nb.test(t)
), gc = () => !1, Db = (t) => kb.test(t), Rb = (t) => Sb.test(t), jb = () => {
  const t = xt("colors"), r = xt("spacing"), a = xt("blur"), n = xt("brightness"), s = xt("borderColor"), o = xt("borderRadius"), d = xt("borderSpacing"), c = xt("borderWidth"), u = xt("contrast"), l = xt("grayscale"), b = xt("hueRotate"), m = xt("invert"), h = xt("gap"), f = xt("gradientColorStops"), p = xt("gradientColorStopPositions"), x = xt("inset"), w = xt("margin"), k = xt("opacity"), v = xt("padding"), C = xt("saturate"), L = xt("scale"), D = xt("sepia"), j = xt("skew"), S = xt("space"), y = xt("translate"), T = () => ["auto", "contain", "none"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", We, r], A = () => [We, r], z = () => ["", Ur, na], K = () => ["auto", ja, We], E = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], I = () => ["solid", "dashed", "dotted", "double", "none"], P = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], O = () => ["", "0", We], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [ja, We];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [rn],
      spacing: [Ur, na],
      blur: ["none", "", sa, We],
      brightness: Y(),
      borderColor: [t],
      borderRadius: ["none", "", "full", sa, We],
      borderSpacing: A(),
      borderWidth: z(),
      contrast: Y(),
      grayscale: O(),
      hueRotate: Y(),
      invert: O(),
      gap: A(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Cb, na],
      inset: R(),
      margin: R(),
      opacity: Y(),
      padding: A(),
      saturate: Y(),
      scale: Y(),
      sepia: O(),
      skew: Y(),
      space: A(),
      translate: A()
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
        columns: [sa]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: [...E(), We]
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
        z: ["auto", tn, We]
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
        order: ["first", "last", "none", tn, We]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [rn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", tn, We]
        }, We]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [rn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [tn, We]
        }, We]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...H()]
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
        content: ["normal", ...H(), "baseline"]
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
        "place-content": [...H(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", We, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [We, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [We, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [sa]
        }, sa]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [We, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [We, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [We, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [We, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", sa, na]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Os]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rn]
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
        "line-clamp": ["none", ja, Os]
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
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ur, na]
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
        indent: A()
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
        bg: [...E(), Tb]
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
        bg: ["auto", "cover", "contain", Ib]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Eb]
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
        "divide-opacity": [k]
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
        outline: [Ur, na]
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ur, na]
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
        shadow: ["", "inner", "none", sa, Ab]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [rn]
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
        "drop-shadow": ["", "none", sa, We]
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
        invert: [m]
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
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [tn, We]
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
        "skew-x": [j]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [j]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        stroke: [Ur, na, Os]
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
}, Bb = /* @__PURE__ */ gb(jb);
function g(...t) {
  return Bb(nb(t));
}
function Pb() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ia(t, r = 200) {
  const [a, n] = $(t), s = Pb();
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
function _r({
  value: t,
  defaultValue: r,
  onChange: a
}) {
  const [n, s] = $(r), o = t !== void 0, d = o ? t : n, c = ce(d);
  c.current = d;
  const u = ce(a);
  u.current = a;
  const l = ue(
    (b) => {
      var h;
      const m = typeof b == "function" ? b(c.current) : b;
      o || s(m), (h = u.current) == null || h.call(u, m);
    },
    [o]
  );
  return [d, l];
}
function zb(t) {
  const r = t ? `abc_draft_${t}` : "", a = ue(() => {
    if (!r || typeof window > "u") return null;
    try {
      const c = window.localStorage.getItem(r);
      return c ? JSON.parse(c) : null;
    } catch {
      return null;
    }
  }, [r]), [n, s] = $(() => !!a()), o = ue(
    (c) => {
      if (!(!r || typeof window > "u"))
        try {
          window.localStorage.setItem(r, JSON.stringify(c)), s(!0);
        } catch {
        }
    },
    [r]
  ), d = ue(() => {
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
const Qs = "#3b82f6", pi = {
  hiddenKeys: [],
  columnOrder: [],
  columnWidths: {},
  columnFixed: {},
  searchVisible: {},
  filterHighlightColor: Qs,
  density: "default"
};
function Ob(t, r = "default", a = []) {
  const n = t ? `abc_table_${t}` : "", s = t ? `table_settings_${t}` : "", [o, d] = $(() => {
    const w = {
      ...pi,
      hiddenKeys: a,
      density: r
    };
    if (!n || typeof window > "u") return w;
    try {
      const k = window.localStorage.getItem(n);
      if (k) {
        const D = JSON.parse(k);
        return {
          hiddenKeys: Array.isArray(D.hiddenKeys) ? D.hiddenKeys : a,
          columnOrder: Array.isArray(D.columnOrder) ? D.columnOrder : [],
          columnWidths: D.columnWidths && typeof D.columnWidths == "object" ? D.columnWidths : {},
          columnFixed: D.columnFixed && typeof D.columnFixed == "object" ? D.columnFixed : {},
          searchVisible: D.searchVisible && typeof D.searchVisible == "object" ? D.searchVisible : {},
          filterHighlightColor: typeof D.filterHighlightColor == "string" && D.filterHighlightColor ? D.filterHighlightColor : Qs,
          density: D.density ?? r
        };
      }
      const v = s ? window.localStorage.getItem(s) : null;
      if (!v) return w;
      const C = JSON.parse(v), L = new Set(a);
      return C.columnVisible && typeof C.columnVisible == "object" && Object.entries(C.columnVisible).forEach(([D, j]) => {
        j === !1 ? L.add(D) : j === !0 && L.delete(D);
      }), {
        hiddenKeys: Array.from(L),
        columnOrder: Array.isArray(C.columnOrder) ? C.columnOrder : [],
        columnWidths: C.columnWidths && typeof C.columnWidths == "object" ? C.columnWidths : {},
        columnFixed: C.columnFixed && typeof C.columnFixed == "object" ? C.columnFixed : {},
        searchVisible: C.searchVisible && typeof C.searchVisible == "object" ? C.searchVisible : {},
        filterHighlightColor: typeof C.filterHighlightColor == "string" && C.filterHighlightColor ? C.filterHighlightColor : Qs,
        density: C.density ?? r
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
  const c = ue((w) => {
    d((k) => ({
      ...k,
      hiddenKeys: k.hiddenKeys.includes(w) ? k.hiddenKeys.filter((v) => v !== w) : [...k.hiddenKeys, w]
    }));
  }, []), u = ue((w, k) => {
    d((v) => ({
      ...v,
      hiddenKeys: k ? [] : Array.from(new Set(w))
    }));
  }, []), l = ue(
    (w, k) => {
      d((v) => {
        const C = { ...v.columnFixed };
        return k === void 0 ? delete C[w] : C[w] = k, {
          ...v,
          columnFixed: C
        };
      });
    },
    []
  ), b = ue((w, k) => {
    d((v) => ({
      ...v,
      columnWidths: { ...v.columnWidths, [w]: Math.max(64, Math.round(k)) }
    }));
  }, []), m = ue((w) => {
    d((k) => ({ ...k, columnOrder: w }));
  }, []), h = ue((w, k) => {
    d((v) => ({
      ...v,
      searchVisible: { ...v.searchVisible, [w]: k }
    }));
  }, []), f = ue((w) => {
    d((k) => ({ ...k, density: w }));
  }, []), p = ue((w) => {
    d((k) => ({ ...k, filterHighlightColor: w }));
  }, []), x = ue(() => {
    if (s && typeof window < "u")
      try {
        window.localStorage.removeItem(s);
      } catch {
      }
    d({ ...pi, hiddenKeys: a, density: r });
  }, [r, a, s]);
  return {
    settings: o,
    toggleColumnVisible: c,
    setAllColumnsVisible: u,
    setColumnFixed: l,
    setColumnWidth: b,
    setColumnOrder: m,
    setSearchFieldVisible: h,
    setDensity: f,
    setFilterHighlightColor: p,
    resetSettings: x
  };
}
const $b = typeof window < "u" ? $n : ge;
function is(t) {
  var a;
  return typeof document > "u" ? null : ((a = t == null ? void 0 : t.closest) == null ? void 0 : a.call(t, "dialog[open]")) ?? document.body;
}
function Fb(t) {
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
function $s(t, r) {
  return t === "bottom" ? r === "start" ? "top left" : r === "end" ? "top right" : "top center" : t === "top" ? r === "start" ? "bottom left" : r === "end" ? "bottom right" : "bottom center" : t === "left" ? r === "start" ? "right top" : "right center" : r === "start" ? "left top" : "left center";
}
function Ha({
  open: t,
  triggerRef: r,
  floatingRef: a,
  placement: n = "bottomLeft",
  offset: s = 6,
  matchWidth: o = !1,
  viewportPadding: d = 8
}) {
  const { side: c, align: u } = Fb(n), [l, b] = $(() => ({
    top: 0,
    left: 0,
    minWidth: void 0,
    actualSide: c,
    arrowOffset: 16,
    transformOrigin: $s(c, u),
    positioned: !1
  })), m = ue(() => {
    if (typeof window > "u" || !r.current) return;
    const f = r.current.getBoundingClientRect(), p = a.current, x = p == null ? void 0 : p.getBoundingClientRect(), w = window.innerWidth || 1024, k = window.innerHeight || 768, v = d, C = p ? p.offsetWidth : 0, L = p ? p.offsetHeight : 0, D = C || (x == null ? void 0 : x.width) || (o ? f.width : 180), j = o ? Math.max(D, f.width) : D, S = L || (x == null ? void 0 : x.height) || 40;
    if (f.width === 0 && f.height === 0 && f.top === 0 && f.left === 0) {
      b({
        top: s,
        left: v,
        minWidth: o && f.width > 0 ? f.width : void 0,
        actualSide: c,
        arrowOffset: 16,
        transformOrigin: $s(c, u),
        positioned: !0
      });
      return;
    }
    let y = c;
    if (c === "bottom") {
      const H = k - f.bottom - s - v, O = f.top - s - v;
      S > H && O > H && (y = "top");
    } else if (c === "top") {
      const H = f.top - s - v, O = k - f.bottom - s - v;
      S > H && O > H && (y = "bottom");
    } else if (c === "left") {
      const H = f.left - s - v, O = w - f.right - s - v;
      j > H && O > H && (y = "right");
    } else if (c === "right") {
      const H = w - f.right - s - v, O = f.left - s - v;
      j > H && O > H && (y = "left");
    }
    let T = 0, _ = 0;
    y === "bottom" || y === "top" ? (T = y === "bottom" ? f.bottom + s : f.top - S - s, u === "start" ? _ = f.left : u === "end" ? _ = f.right - j : _ = f.left + f.width / 2 - j / 2) : (_ = y === "right" ? f.right + s : f.left - j - s, u === "start" ? T = f.top : u === "end" ? T = f.bottom - S : T = f.top + f.height / 2 - S / 2);
    const R = Math.max(v, w - j - v), A = Math.max(v, k - S - v), z = Math.min(Math.max(v, _), R), K = Math.min(Math.max(v, T), A), E = y === "top" || y === "bottom" ? Math.min(
      Math.max(10, f.left + f.width / 2 - z),
      Math.max(10, j - 10)
    ) : Math.min(
      Math.max(10, f.top + f.height / 2 - K),
      Math.max(10, S - 10)
    ), I = $s(y, u), P = o ? Math.round(f.width) : void 0;
    b((H) => H.positioned && Math.abs(H.top - K) < 0.5 && Math.abs(H.left - z) < 0.5 && H.minWidth === P && H.actualSide === y && Math.abs(H.arrowOffset - E) < 0.5 && H.transformOrigin === I ? H : {
      top: Math.round(K * 10) / 10,
      left: Math.round(z * 10) / 10,
      minWidth: P,
      actualSide: y,
      arrowOffset: Math.round(E),
      transformOrigin: I,
      positioned: !0
    });
  }, [r, a, c, u, s, o, d]);
  $b(() => {
    if (!t) {
      b((p) => p.positioned ? { ...p, positioned: !1 } : p);
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
  const h = t ? is(r.current) : null;
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
    portalContainer: h,
    update: m
  };
}
const Hn = {
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
}, Un = {
  xs: "h-[var(--abc-control-h-xs)] px-2.5 text-xs",
  sm: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  default: "h-[var(--abc-control-h-sm)] px-3 text-xs",
  md: "h-[var(--abc-control-h-md)] px-4 text-sm",
  lg: "h-[var(--abc-control-h-lg)] px-5 text-sm",
  icon: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  "icon-sm": "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0"
}, eo = {
  xs: "h-[var(--abc-control-h-xs)] w-[var(--abc-control-h-xs)] p-0",
  sm: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  default: "h-[var(--abc-control-h-sm)] w-[var(--abc-control-h-sm)] p-0",
  md: "h-[var(--abc-control-h-md)] w-[var(--abc-control-h-md)] p-0",
  lg: "h-[var(--abc-control-h-lg)] w-[var(--abc-control-h-lg)] p-0"
};
function Qp({
  variant: t = "primary",
  size: r = "sm",
  iconOnly: a = !1,
  className: n
} = {}) {
  const s = Hn[t] || Hn.primary, o = a ? eo[r] || eo.sm : Un[r] || Un.sm;
  return g(
    "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
    "disabled:opacity-45 disabled:cursor-not-allowed",
    s,
    o,
    n
  );
}
const Ee = at.forwardRef(
  ({
    className: t,
    variant: r = "primary",
    size: a,
    motion: n,
    loading: s = !1,
    loadingText: o,
    disabled: d,
    icon: c,
    leftIcon: u,
    rightIcon: l,
    iconOnly: b = !1,
    block: m = !1,
    asChild: h = !1,
    type: f,
    children: p,
    ...x
  }, w) => {
    const k = a === "icon" || a === "icon-sm", L = Be(k ? void 0 : a === "default" ? "sm" : a, "sm"), D = Ie(n), j = !!(d || s), S = u ?? c, y = g(
      "inline-flex items-center justify-center gap-1.5 rounded-[var(--abc-radius-md)] font-medium select-none shrink-0 cursor-pointer abc-motion-control",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--abc-bg-surface)]",
      "disabled:opacity-45 disabled:cursor-not-allowed",
      Hn[r] || Hn.primary,
      k ? Un[a] : b ? eo[L] : Un[L],
      m && "w-full",
      t
    );
    if (h && at.isValidElement(p)) {
      const T = p;
      return at.cloneElement(T, {
        className: g(y, T.props.className),
        ...x
      });
    }
    return /* @__PURE__ */ i(
      "button",
      {
        ref: w,
        type: f,
        disabled: j,
        "data-motion": D,
        className: y,
        ...x,
        children: [
          s ? /* @__PURE__ */ e(br, { className: "h-3.5 w-3.5 shrink-0 animate-spin", "aria-hidden": "true" }) : S && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: S }),
          s && o !== void 0 ? o : p,
          !s && l && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: l })
        ]
      }
    );
  }
);
Ee.displayName = "Button";
const vo = io(null);
function Wb() {
  return dn(vo);
}
const Kb = {
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
  visible: r,
  isOpen: a,
  onClose: n,
  onCancel: s,
  onOpenChange: o,
  closable: d = !0,
  closeDisabled: c = !1,
  closeLabel: u = "关闭",
  title: l,
  description: b,
  children: m,
  footer: h,
  size: f,
  maxWidth: p = "md",
  width: x,
  closeOnClickModal: w = !0,
  draggable: k = !0,
  fullscreenable: v = !0,
  fullscreen: C,
  onFullscreenChange: L,
  motion: D,
  className: j
}) => {
  const S = t ?? r ?? a ?? !1, y = Ie(D), { isMounted: T, isVisible: _ } = ia(S, y === "none" ? 0 : 180), R = Tt(), A = Tt(), z = ce(null), K = ce(null), E = ce(!1), I = ue(() => {
    c || (n ? n() : s ? s() : o && o(!1));
  }, [c, n, s, o]), P = ce(I);
  P.current = I;
  const H = !!(l !== void 0 || v), [O, G] = $(!1), Y = C !== void 0 ? C : O, [ie, V] = $({ x: 0, y: 0 }), re = ce(
    null
  ), te = ue(() => {
    const Z = !Y;
    C === void 0 && G(Z), L == null || L(Z);
  }, [Y, C, L]);
  ge(() => {
    if (!T) return;
    const Z = z.current;
    if (!Z) return;
    let Re = !1;
    if (typeof Z.showModal == "function")
      if (Z.open)
        Re = !0;
      else
        try {
          Z.showModal(), Re = !0;
        } catch {
          Z.setAttribute("open", "");
        }
    else
      Z.setAttribute("open", "");
    const Ue = (Se) => {
      Se.preventDefault(), P.current();
    }, he = (Se) => {
      Se.key === "Escape" && (Se.stopPropagation(), P.current());
    };
    return Z.addEventListener("cancel", Ue), (!Re || typeof navigator < "u" && /jsdom/i.test(navigator.userAgent)) && window.addEventListener("keydown", he), () => {
      if (Z.removeEventListener("cancel", Ue), window.removeEventListener("keydown", he), Z.open && typeof Z.close == "function")
        try {
          Z.close();
        } catch {
          Z.removeAttribute("open");
        }
    };
  }, [T]), ge(() => {
    S || (V({ x: 0, y: 0 }), C === void 0 && G(!1));
  }, [S, C]);
  const le = (Z) => {
    var Se;
    const Re = Z.target;
    if ((Se = Re == null ? void 0 : Re.closest) != null && Se.call(Re, "[data-abc-floating]"))
      return !1;
    const Ue = K.current;
    if (!Ue) return !1;
    const he = Ue.getBoundingClientRect();
    return he.width === 0 && he.height === 0 ? !Ue.contains(Z.target) : Z.clientX < he.left || Z.clientX > he.right || Z.clientY < he.top || Z.clientY > he.bottom;
  }, oe = (Z) => {
    if (!k || Y || Z.button !== 0 || Z.target.closest('button, a, input, [role="button"]')) return;
    re.current = {
      startX: Z.clientX,
      startY: Z.clientY,
      origX: ie.x,
      origY: ie.y
    };
    const Re = (he) => {
      re.current && V({
        x: re.current.origX + (he.clientX - re.current.startX),
        y: re.current.origY + (he.clientY - re.current.startY)
      });
    }, Ue = () => {
      re.current = null, window.removeEventListener("mousemove", Re), window.removeEventListener("mouseup", Ue);
    };
    window.addEventListener("mousemove", Re), window.addEventListener("mouseup", Ue);
  };
  if (!T || typeof document > "u") return null;
  const Ae = f || p, F = Kb[Ae] || Ae;
  return xr(
    /* @__PURE__ */ e(
      "dialog",
      {
        ref: z,
        "data-motion": y,
        "aria-labelledby": R,
        "aria-describedby": b ? A : void 0,
        style: {
          display: S ? "flex" : "none",
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
          E.current = w && le(Z);
        },
        onPointerUp: (Z) => {
          w && E.current && le(Z) && P.current(), E.current = !1;
        },
        onClick: (Z) => {
          w && Z.target === z.current && !E.current && P.current();
        },
        className: g(
          "fixed inset-0 z-[1100] m-0 h-dvh max-h-none w-dvw max-w-none border-0 p-4 flex items-center justify-center",
          Y && "p-0",
          y !== "none" && (_ ? "abc-animate-fade-in" : "abc-animate-fade-out")
        ),
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: K,
            "data-dialog-panel": "",
            "data-motion": y,
            style: {
              width: !Y && x ? x : void 0,
              transform: !Y && (ie.x !== 0 || ie.y !== 0) ? `translate3d(${ie.x}px, ${ie.y}px, 0)` : void 0
            },
            className: g(
              "relative flex flex-col overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-dialog)] m-auto",
              Y ? "h-dvh w-dvw rounded-none" : g("max-h-[88dvh] w-full rounded-[var(--abc-radius-xl)]", !x && F),
              y !== "none" && (_ ? "abc-animate-modal-in" : "abc-animate-modal-out"),
              j
            ),
            children: /* @__PURE__ */ i(vo.Provider, { value: { isOpen: S, handleClose: I, closeDisabled: c, hasHeader: H, titleId: R }, children: [
              (l !== void 0 || v) && /* @__PURE__ */ i(
                "div",
                {
                  onMouseDown: oe,
                  onDoubleClick: v ? te : void 0,
                  className: g(
                    "flex shrink-0 items-start justify-between gap-4 border-b border-[var(--abc-border)] px-5 py-3.5 select-none",
                    k && !Y && "cursor-move"
                  ),
                  children: [
                    /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                      l && /* @__PURE__ */ e("h2", { id: R, className: "text-sm font-semibold text-[var(--abc-fg)] leading-snug", children: l }),
                      b && /* @__PURE__ */ e("p", { id: A, className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: b })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                      v && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": Y ? "还原窗口" : "全屏",
                          title: Y ? "退出全屏" : "全屏显示",
                          onClick: (Z) => {
                            Z.stopPropagation(), te();
                          },
                          onMouseDown: (Z) => Z.stopPropagation(),
                          onPointerDown: (Z) => Z.stopPropagation(),
                          className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: Y ? /* @__PURE__ */ e(co, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(lo, { className: "h-3.5 w-3.5" })
                        }
                      ),
                      d && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": u,
                          title: u,
                          disabled: c,
                          onClick: (Z) => {
                            Z.stopPropagation(), I();
                          },
                          onMouseDown: (Z) => Z.stopPropagation(),
                          onPointerDown: (Z) => Z.stopPropagation(),
                          className: g(
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
              h && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-5 py-3", children: h })
            ] })
          }
        )
      }
    ),
    document.body
  );
}, Hb = yr;
function xo({
  className: t,
  children: r,
  closeLabel: a = "关闭",
  closeDisabled: n,
  closable: s,
  onClose: o,
  ...d
}) {
  const c = dn(vo), u = s ?? (c ? !c.hasHeader : !1), l = n ?? (c == null ? void 0 : c.closeDisabled) ?? !1;
  return /* @__PURE__ */ i("div", { "data-slot": "dialog-content", className: g("relative space-y-4", t), ...d, children: [
    u && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        "aria-label": a,
        title: a,
        disabled: l,
        onClick: (b) => {
          b.stopPropagation(), o ? o() : c && c.handleClose();
        },
        onMouseDown: (b) => b.stopPropagation(),
        onPointerDown: (b) => b.stopPropagation(),
        className: g(
          "absolute right-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer z-10",
          l && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-[var(--abc-fg-muted)]"
        ),
        children: /* @__PURE__ */ e(Ct, { className: "h-4 w-4" })
      }
    ),
    r
  ] });
}
function yo({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-header", className: g("flex flex-col space-y-1.5 text-left", t), ...a, children: r });
}
function wo({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("div", { "data-slot": "dialog-footer", className: g("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2", t), ...a, children: r });
}
function No({ className: t, children: r, id: a, ...n }) {
  const s = Wb();
  return /* @__PURE__ */ e("h2", { id: a ?? (s == null ? void 0 : s.titleId), "data-slot": "dialog-title", className: g("text-base font-semibold leading-none tracking-tight text-[var(--abc-fg)]", t), ...n, children: r });
}
function ko({ className: t, children: r, ...a }) {
  return /* @__PURE__ */ e("p", { "data-slot": "dialog-description", className: g("text-xs text-[var(--abc-fg-muted)]", t), ...a, children: r });
}
const Vn = /* @__PURE__ */ new Set();
let vc = null, nn = 0;
function xc(t) {
  vc = t, Vn.forEach((r) => r(t));
}
function Ub(t, r) {
  return t || (r === "error" || r === "danger" ? "danger" : r === "warning" ? "warning" : r === "success" ? "success" : "primary");
}
function Gn(t) {
  var a, n;
  const r = typeof t == "string" ? { message: t } : t;
  if (nn === 0 && typeof window < "u" && Vn.size === 0) {
    const s = r.content ?? r.message, o = typeof s == "string" ? s : r.title || "确认执行该操作？";
    return window.confirm(o) ? Promise.resolve((a = r.onConfirm) == null ? void 0 : a.call(r)).then(() => !0) : ((n = r.onCancel) == null || n.call(r), Promise.resolve(!1));
  }
  return new Promise((s) => {
    xc({
      ...r,
      title: r.title ?? "操作确认",
      confirmText: r.confirmText ?? "确认",
      cancelText: r.cancelText ?? "取消",
      resolvedTone: Ub(r.tone, r.type),
      message: r.content ?? r.message,
      resolve: s
    });
  });
}
const eh = Gn;
function th() {
  return Gn;
}
const yc = () => {
  const [t, r] = $(!1), [a, n] = $(() => vc), [s, o] = $(!1);
  if (ge(() => {
    nn += 1, r(nn === 1);
    const l = (b) => n(b);
    return Vn.add(l), () => {
      nn = Math.max(0, nn - 1), Vn.delete(l);
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
      a.resolve(u), xc(null);
    }
  }, c = a.resolvedTone === "danger" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]", children: /* @__PURE__ */ e(Vr, { className: "h-4 w-4" }) }) : a.resolvedTone === "warning" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-warning-soft)] text-[var(--abc-warning)]", children: /* @__PURE__ */ e(ha, { className: "h-4 w-4" }) }) : a.resolvedTone === "success" ? /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-success-soft)] text-[var(--abc-success)]", children: /* @__PURE__ */ e(Xr, { className: "h-4 w-4" }) }) : /* @__PURE__ */ e("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e($a, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ e(
    yr,
    {
      open: !!a,
      onClose: () => d(!1),
      title: a.title,
      size: "sm",
      fullscreenable: !1,
      footer: /* @__PURE__ */ i(tt, { children: [
        /* @__PURE__ */ e(
          Ee,
          {
            variant: "secondary",
            disabled: s,
            autoFocus: a.resolvedTone === "danger",
            onClick: () => d(!1),
            children: a.cancelText
          }
        ),
        /* @__PURE__ */ e(
          Ee,
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
}, rh = ({ children: t }) => /* @__PURE__ */ i(tt, { children: [
  t,
  /* @__PURE__ */ e(yc, {})
] });
let ar = [];
const to = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Map();
let Vb = 0;
function So() {
  const t = [...ar];
  to.forEach((r) => r(t));
}
function Gb(t) {
  const r = Gr.get(t);
  if (!r || r.isPaused || r.remaining <= 0) return;
  r.timerId && (clearTimeout(r.timerId), r.timerId = void 0);
  const a = Date.now() - r.startedAt;
  r.remaining = Math.max(0, r.remaining - a), r.isPaused = !0;
}
function Yb(t) {
  const r = Gr.get(t);
  !r || !r.isPaused || r.remaining <= 0 || (r.isPaused = !1, r.startedAt = Date.now(), typeof window < "u" && (r.timerId = window.setTimeout(r.onExpire, r.remaining)));
}
function Co(t) {
  var n;
  const r = Gr.get(t);
  r != null && r.timerId && clearTimeout(r.timerId), Gr.delete(t);
  const a = ar.find((s) => s.id === t);
  a && ((n = a.onClose) == null || n.call(a)), ar = ar.filter((s) => s.id !== t), So();
}
function qb() {
  Gr.forEach((t) => {
    t.timerId && clearTimeout(t.timerId);
  }), Gr.clear(), ar.forEach((t) => {
    var r;
    return (r = t.onClose) == null ? void 0 : r.call(t);
  }), ar = [], So();
}
function Aa(t, r, a) {
  const n = `abc_toast_${++Vb}_${Date.now()}`;
  let s = {};
  r !== null && typeof r == "object" && !at.isValidElement(r) ? s = r : s = { message: r };
  const o = s.tone ?? t, d = o === "danger" ? "error" : o, c = s.content ?? s.message ?? s.description ?? "", u = d === "error" ? 4200 : d === "warning" ? 3600 : d === "loading" ? 0 : 3e3, l = s.duration ?? a ?? u, b = {
    ...s,
    id: n,
    tone: d,
    message: c,
    duration: l,
    createdAt: Date.now()
  };
  if (ar.length >= 30 && (ar.slice(0, ar.length - 29).forEach((h) => {
    const f = Gr.get(h.id);
    f != null && f.timerId && clearTimeout(f.timerId), Gr.delete(h.id);
  }), ar = ar.slice(-29)), ar = [...ar, b], So(), l > 0 && typeof window < "u") {
    const m = {
      startedAt: Date.now(),
      remaining: l,
      isPaused: !1,
      onExpire: () => Co(n)
    };
    m.timerId = window.setTimeout(m.onExpire, l), Gr.set(n, m);
  }
  return n;
}
const _o = {
  success: (t, r) => Aa("success", t, r),
  error: (t, r) => Aa("error", t, r ?? 4200),
  info: (t, r) => Aa("info", t, r),
  warning: (t, r) => Aa("warning", t, r ?? 3600),
  loading: (t, r = 0) => Aa("loading", t, r),
  push: (t, r, a) => Aa(t, r, a),
  dismiss: (t) => Co(t),
  clear: () => qb()
}, ah = _o, hi = {
  success: /* @__PURE__ */ e(Xr, { className: "h-4 w-4 shrink-0 text-[var(--abc-success)]" }),
  error: /* @__PURE__ */ e(oa, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  danger: /* @__PURE__ */ e(oa, { className: "h-4 w-4 shrink-0 text-[var(--abc-danger)]" }),
  warning: /* @__PURE__ */ e(ha, { className: "h-4 w-4 shrink-0 text-[var(--abc-warning)]" }),
  info: /* @__PURE__ */ e(un, { className: "h-4 w-4 shrink-0 text-[var(--abc-info)]" }),
  loading: /* @__PURE__ */ e(br, { className: "h-4 w-4 shrink-0 animate-spin text-[var(--abc-primary)]" })
}, Xb = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Zb = {
  "top-right": "top-4 right-4 items-end",
  "top-left": "top-4 left-4 items-start",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center"
}, Jb = ({
  item: t,
  resolvedSize: r,
  resolvedMotion: a,
  closable: n,
  pauseOnHover: s,
  toastClassName: o,
  toastStyle: d,
  onDismiss: c
}) => {
  const u = t.closable ?? n, l = !!t.title;
  return /* @__PURE__ */ i(
    "div",
    {
      role: t.tone === "error" || t.tone === "warning" ? "alert" : "status",
      "aria-live": t.tone === "error" ? "assertive" : "polite",
      "data-motion": a,
      onMouseEnter: () => {
        s && Gb(t.id);
      },
      onMouseLeave: () => {
        s && Yb(t.id);
      },
      style: { ...d, ...t.style },
      className: g(
        "pointer-events-auto flex gap-2.5 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)]",
        "bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-popover)]",
        l ? "items-start" : "items-center",
        Xb[r],
        a !== "none" && "abc-animate-popover-in",
        o,
        t.className
      ),
      children: [
        /* @__PURE__ */ e("span", { className: g("shrink-0", l && "mt-0.5"), children: t.icon ?? hi[t.tone] ?? hi.info }),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
          t.title && /* @__PURE__ */ e("div", { className: "font-semibold text-[var(--abc-fg)] leading-snug", children: t.title }),
          t.message && /* @__PURE__ */ e(
            "div",
            {
              className: g(
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
              b.stopPropagation(), c(t.id);
            },
            className: "rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer transition-colors",
            children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, Qb = ({
  position: t = "top-right",
  size: r,
  motion: a,
  maxCount: n = 5,
  pauseOnHover: s = !0,
  newestOnTop: o = !1,
  closable: d = !0,
  className: c,
  style: u,
  toastClassName: l,
  toastStyle: b,
  container: m,
  containerId: h,
  renderItem: f,
  items: p,
  onDismiss: x
}) => {
  const [w, k] = $(() => [...ar]), v = Be(r, "sm"), C = Ie(a);
  ge(() => {
    if (p !== void 0) return;
    const _ = (R) => k(R);
    return to.add(_), () => {
      to.delete(_);
    };
  }, [p]);
  const D = (p ?? w).filter((_) => !(_.containerId && h && _.containerId !== h || _.position && _.position !== t));
  let j = D;
  o ? j = [...D].reverse().slice(0, n) : n > 0 && (j = D.slice(-n));
  const S = (_) => {
    x ? x(_) : Co(_);
  };
  if (typeof document > "u" || j.length === 0)
    return null;
  const y = typeof m == "function" ? m() : m !== void 0 ? m : typeof document < "u" ? document.body : null;
  if (!y) return null;
  const T = /* @__PURE__ */ e(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: g(
        "pointer-events-none fixed z-[10050] flex max-w-sm flex-col gap-2",
        Zb[t],
        c
      ),
      style: u,
      children: j.map((_) => f ? /* @__PURE__ */ e(at.Fragment, { children: f(_, () => S(_.id)) }, _.id) : /* @__PURE__ */ e(
        Jb,
        {
          item: _,
          resolvedSize: v,
          resolvedMotion: C,
          closable: d,
          pauseOnHover: s,
          toastClassName: l,
          toastStyle: b,
          onDismiss: S
        },
        _.id
      ))
    }
  );
  return xr(T, y);
}, em = (t) => /* @__PURE__ */ e(Qb, { ...t }), Io = "abc_design_theme_v1", Yn = "color-scheme", To = io(null);
function gi(t, r) {
  if (!r || typeof window > "u") return t;
  try {
    const a = window.localStorage.getItem(Yn), n = window.localStorage.getItem(Io), s = n ? JSON.parse(n) : {}, o = a === "light" || a === "dark" ? a : s.mode === "light" || s.mode === "dark" || s.mode === "system" ? s.mode : t.mode, d = ["xs", "sm", "md", "lg"], c = ["none", "subtle", "smooth", "spring"], u = s.componentSize && d.includes(s.componentSize) ? s.componentSize : t.componentSize, l = s.motion && c.includes(s.motion) ? s.motion : t.motion ?? "smooth";
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
function tm(t, r) {
  if (!(!r || typeof window > "u"))
    try {
      t.mode === "system" ? window.localStorage.removeItem(Yn) : window.localStorage.setItem(Yn, t.mode), window.localStorage.setItem(Io, JSON.stringify(t));
    } catch {
    }
}
const nh = ({
  children: t,
  defaultTheme: r,
  defaultPageTransition: a = "fade-slide",
  watermarkText: n,
  defaultWatermarkEnabled: s = !1,
  persist: o = !0,
  toastAdapter: d,
  toastContainerProps: c,
  uploadAdapter: u,
  dictAdapter: l,
  permissionAdapter: b,
  captchaAdapter: m,
  iconRegistry: h = {},
  defaultDrawerCascadeMode: f = "adjacent"
}) => {
  const p = se(
    () => ({ ...Gt, ...r }),
    [r]
  ), [x, w] = $(() => gi(p, o)), [k, v] = $(
    () => Da(x.mode)
  ), [C, L] = $(a), [D, j] = $(s);
  ge(() => {
    const G = Qt(x);
    v(G), tm(x, o);
  }, [x, o]), ge(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function") return;
    const G = window.matchMedia("(prefers-color-scheme: dark)"), Y = () => {
      if (x.mode === "system") {
        const ie = Qt(x);
        v(ie);
      }
    };
    return G.addEventListener("change", Y), () => G.removeEventListener("change", Y);
  }, [x]), ge(() => {
    if (!o || typeof window > "u") return;
    const G = (Y) => {
      (Y.key === Io || Y.key === Yn) && w(gi(p, !0));
    };
    return window.addEventListener("storage", G), () => window.removeEventListener("storage", G);
  }, [o, p]);
  const S = ue(
    (G, Y) => {
      Gu(() => {
        w((ie) => {
          const V = { ...ie, mode: G };
          return Qt(V), V;
        });
      }, Y);
    },
    []
  ), y = ue(
    (G) => {
      const ie = Da(x.mode) === "dark" ? "light" : "dark", V = Da("system");
      S(ie === V ? "system" : ie, G);
    },
    [x.mode, S]
  ), T = ue((G) => {
    w((Y) => ({ ...Y, brand: G, customBrandColor: void 0 }));
  }, []), _ = ue((G) => {
    w((Y) => ({ ...Y, customBrandColor: G }));
  }, []), R = ue((G) => {
    w((Y) => ({ ...Y, density: G }));
  }, []), A = ue((G) => {
    w((Y) => ({ ...Y, radius: G }));
  }, []), z = ue((G) => {
    w((Y) => ({ ...Y, fontScale: G }));
  }, []), K = ue((G) => {
    w((Y) => ({ ...Y, visualMode: G }));
  }, []), E = ue((G) => {
    w((Y) => ({ ...Y, componentSize: G }));
  }, []), I = ue((G) => {
    w((Y) => ({ ...Y, motion: G }));
  }, []), P = ue((G) => {
    w((Y) => ({ ...Y, ...G }));
  }, []), H = ue(() => {
    w(p), L(a), j(s);
  }, [p, a, s]), O = se(
    () => ({
      theme: x,
      resolvedTheme: k,
      pageTransition: C,
      watermarkText: n,
      watermarkEnabled: D,
      setThemeMode: S,
      toggleTheme: y,
      setBrand: T,
      setCustomBrandColor: _,
      setDensity: R,
      setRadius: A,
      setFontScale: z,
      setVisualMode: K,
      setComponentSize: E,
      setMotion: I,
      updateTheme: P,
      setPageTransition: L,
      setWatermarkEnabled: j,
      resetTheme: H,
      toast: d ?? _o,
      uploadAdapter: u,
      dictAdapter: l,
      permissionAdapter: b,
      captchaAdapter: m,
      iconRegistry: h,
      defaultDrawerCascadeMode: f
    }),
    [
      x,
      k,
      C,
      n,
      D,
      S,
      y,
      T,
      _,
      R,
      A,
      z,
      K,
      E,
      I,
      P,
      H,
      d,
      u,
      l,
      b,
      m,
      h,
      f
    ]
  );
  return /* @__PURE__ */ i(To.Provider, { value: O, children: [
    t,
    !d && /* @__PURE__ */ e(em, { ...c }),
    /* @__PURE__ */ e(yc, {})
  ] });
};
function rm() {
  return dn(To);
}
function At() {
  const t = dn(To);
  return t || {
    theme: Gt,
    resolvedTheme: Da(Gt.mode),
    pageTransition: "fade-slide",
    watermarkEnabled: !1,
    setThemeMode: (r) => {
      Qt({ ...Gt, mode: r });
    },
    toggleTheme: () => {
      const r = Da(Gt.mode) === "dark" ? "light" : "dark";
      Qt({ ...Gt, mode: r });
    },
    setBrand: (r) => {
      Qt({ ...Gt, brand: r });
    },
    setCustomBrandColor: (r) => {
      Qt({ ...Gt, customBrandColor: r });
    },
    setDensity: (r) => {
      Qt({ ...Gt, density: r });
    },
    setRadius: (r) => {
      Qt({ ...Gt, radius: r });
    },
    setFontScale: (r) => {
      Qt({ ...Gt, fontScale: r });
    },
    setVisualMode: (r) => {
      Qt({ ...Gt, visualMode: r });
    },
    setComponentSize: (r) => {
      Qt({ ...Gt, componentSize: r });
    },
    setMotion: (r) => {
      Qt({ ...Gt, motion: r });
    },
    updateTheme: (r) => {
      Qt({ ...Gt, ...r });
    },
    setPageTransition: () => {
    },
    setWatermarkEnabled: () => {
    },
    resetTheme: () => {
      Qt(Gt);
    },
    toast: _o,
    iconRegistry: {}
  };
}
function Be(t, r = "sm") {
  const { theme: a } = At();
  return (t === "default" ? void 0 : t) ?? a.componentSize ?? r;
}
function Ie(t) {
  const { theme: r } = At();
  return t ?? r.motion ?? "smooth";
}
function am(t) {
  const r = At();
  return t ?? r.defaultDrawerCascadeMode ?? "adjacent";
}
const an = {
  Activity: ku,
  AlertCircle: oa,
  AlertOctagon: Nu,
  AlertTriangle: ha,
  BarChart2: wu,
  BarChart3: yu,
  Bell: xu,
  BellRing: vu,
  BookMarked: gu,
  Boxes: hu,
  Building2: pu,
  Calendar: po,
  CalendarCheck: fu,
  Camera: mu,
  Check: Nt,
  CheckCircle: ec,
  CheckCircle2: Xr,
  CheckSquare: bu,
  CircleDollarSign: uu,
  Clock: Fn,
  Coins: du,
  Compass: Qi,
  Copy: ga,
  Cpu: lu,
  CreditCard: cu,
  Database: iu,
  Download: Ys,
  Edit: ou,
  Edit3: zn,
  Eye: Wa,
  FileCheck: su,
  FileClock: nu,
  FileSpreadsheet: au,
  FileText: ru,
  Flame: tu,
  Folder: eu,
  FolderGit2: Qd,
  FolderOpen: Jd,
  FolderPlus: Zd,
  FolderTree: Ji,
  Globe: Xd,
  Globe2: qd,
  Handshake: Yd,
  HardDrive: Gd,
  Headphones: Vd,
  HelpCircle: $a,
  History: Ud,
  Home: Hd,
  Image: Zi,
  Info: un,
  Key: Kd,
  KeyRound: Xi,
  Layers: qi,
  LayoutDashboard: Wd,
  LayoutGrid: Fd,
  LineChart: $d,
  Link2: Od,
  ListChecks: zd,
  ListOrdered: Pd,
  Lock: Bd,
  MapPin: jd,
  Megaphone: Rd,
  Menu: Yi,
  MessageCircle: Dd,
  MessageSquare: Ld,
  MessageSquareQuote: Ad,
  MessageSquareText: Ed,
  MessagesSquare: Md,
  Minus: ss,
  Monitor: fo,
  MoreHorizontal: mo,
  Network: Td,
  Package: Id,
  Palette: bo,
  PanelLeft: _d,
  PanelTop: Cd,
  Pause: Sd,
  Phone: kd,
  PhoneCall: Nd,
  PieChart: wd,
  Play: Gi,
  Plus: ns,
  PlusCircle: yd,
  Radio: xd,
  Receipt: vd,
  RefreshCw: Fa,
  RotateCcw: gr,
  RotateCw: as,
  ScrollText: gd,
  Search: Ot,
  Send: hd,
  Server: pd,
  Settings: fd,
  Share: md,
  Share2: bd,
  Shield: ud,
  ShieldAlert: rs,
  ShieldCheck: uo,
  ShoppingBag: dd,
  ShoppingCart: ld,
  Sliders: cd,
  SlidersHorizontal: Gs,
  Smartphone: id,
  Sparkles: bn,
  Star: od,
  StarOff: sd,
  Store: nd,
  Tag: ad,
  Tags: rd,
  Terminal: td,
  Ticket: ed,
  Timer: Ql,
  Trash: Jl,
  Trash2: Vr,
  TrendingUp: Zl,
  Unlock: Xl,
  Upload: ts,
  User: ql,
  UserCheck: Yl,
  UserCog: Gl,
  Users: Vl,
  Video: Ul,
  Wallet: Hl,
  Wrench: Kl,
  X: Ct,
  XCircle: Wl,
  Zap: Fl
}, Fs = {
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
}, vi = [
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
function nm(t) {
  return t.split(/[-_]/).map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase()).join("");
}
const wc = {};
function sh(t) {
  Object.assign(wc, t);
}
const jr = ({
  name: t = "",
  text: r = "",
  size: a = 16,
  strokeWidth: n = 1.85,
  className: s,
  registry: o
}) => {
  if (r) {
    const m = r.toLowerCase();
    for (const h of vi)
      if (h.keywords.some((f) => m.includes(f))) {
        const f = an[h.iconName];
        if (f)
          return /* @__PURE__ */ e(f, { size: a, strokeWidth: n, className: g("shrink-0", s) });
      }
  }
  const d = (t || "").replace(/^el-icon-/, "").trim(), c = d.replace(/^s-/, ""), u = Fs[d] ?? Fs[c] ?? Fs[t];
  let l = (o == null ? void 0 : o[d]) ?? wc[d] ?? (u ? an[u] : void 0) ?? an[d] ?? (d ? an[nm(d)] : void 0);
  if (!l && d) {
    const m = d.toLowerCase();
    for (const h of vi)
      if (h.keywords.some((f) => m.includes(f))) {
        l = an[h.iconName];
        break;
      }
  }
  return /* @__PURE__ */ e(l ?? Qi, { size: a, strokeWidth: n, className: g("shrink-0", s) });
}, Nc = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, sm = {
  xs: "px-2 py-1 text-xs min-h-[60px]",
  sm: "px-2.5 py-1.5 text-xs min-h-[72px]",
  default: "px-2.5 py-1.5 text-xs min-h-[72px]",
  md: "px-3 py-2 text-sm min-h-[84px]",
  lg: "px-3.5 py-2.5 text-sm min-h-[98px]"
}, Zr = "w-full rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] leading-normal py-0 transition-[color,background-color,border-color,box-shadow] duration-[var(--abc-motion-fast,140ms)] ease-out enabled:hover:border-[var(--abc-border-strong)] focus-within:border-[var(--abc-primary)] focus-within:ring-2 focus-within:ring-[var(--abc-ring)] focus:border-[var(--abc-primary)] focus:ring-2 focus:ring-[var(--abc-ring)] focus:outline-none disabled:bg-[var(--abc-bg-muted)] disabled:text-[var(--abc-fg-muted)] disabled:cursor-not-allowed", pt = at.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    prefix: o,
    prefixIcon: d,
    suffix: c,
    suffixIcon: u,
    allowClear: l,
    clearable: b,
    passwordToggle: m = !0,
    showPasswordLabel: h,
    hidePasswordLabel: f,
    showCount: p = !1,
    onClear: x,
    invalid: w = !1,
    id: k,
    type: v = "text",
    value: C,
    defaultValue: L,
    maxLength: D,
    onChange: j,
    disabled: S,
    readOnly: y,
    className: T,
    wrapperClassName: _,
    ...R
  }, A) => {
    const z = Be(t, "sm"), K = Ie(r), E = Tt(), I = k || E, P = ce(null);
    es(A, () => P.current, []);
    const H = C !== void 0, [O, G] = $(
      () => L != null ? String(L) : ""
    ), [Y, ie] = $(!1), re = v === "password" && m !== !1, te = re && Y ? "text" : v, oe = (H ? String(C ?? "") : O).length, Ae = oe > 0, F = !!((l ?? b) && Ae && !S && !y), Z = !!(w || n), Re = o ?? d, Ue = c ?? u, he = (J) => {
      H || G(J.target.value), j == null || j(J);
    }, Se = ue(
      (J) => {
        if (J.preventDefault(), J.stopPropagation(), S || y) return;
        H || G(""), x == null || x();
        const me = P.current;
        if (me && (me.value = "", me.focus()), j) {
          const ze = me ?? { value: "" };
          j({
            target: ze,
            currentTarget: ze,
            type: "change",
            preventDefault: () => {
            },
            stopPropagation: () => {
            }
          });
        }
      },
      [S, y, H, x, j]
    ), Fe = (F ? 1 : 0) + (re ? 1 : 0) + (Ue ? 1 : 0), Le = Fe >= 3 ? "pr-20" : Fe === 2 ? "pr-14" : Fe === 1 ? "pr-9" : "pr-3", nt = /\bw-(?!full\b)\S+/.test(T || ""), we = /* @__PURE__ */ i(
      "div",
      {
        className: g(
          "relative flex items-center",
          !nt && "w-full",
          _
        ),
        children: [
          Re && /* @__PURE__ */ e(
            "div",
            {
              className: g(
                "pointer-events-none absolute inset-y-0 z-10 flex items-center justify-center text-[var(--abc-fg-muted)] [&>svg]:shrink-0",
                z === "xs" ? "left-2 [&>svg]:h-3.5 [&>svg]:w-3.5" : "left-2.5 [&>svg]:h-4 [&>svg]:w-4"
              ),
              children: Re
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              ref: P,
              id: I,
              type: te,
              value: C,
              defaultValue: L,
              maxLength: D,
              onChange: he,
              disabled: S,
              readOnly: y,
              "data-motion": K,
              "aria-invalid": Z || void 0,
              className: g(
                Zr,
                Nc[z],
                Re ? z === "xs" ? "pl-7" : "pl-8" : z === "xs" ? "pl-2" : "pl-3",
                Le,
                "[&::-ms-reveal]:hidden [&::-ms-clear]:hidden",
                te === "number" && Fe > 0 && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                Z && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)] focus:ring-[var(--abc-danger)]/20",
                S && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
                T
              ),
              ...R
            }
          ),
          (F || re || Ue) && /* @__PURE__ */ i("div", { className: "absolute inset-y-0 right-2.5 z-10 flex items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            F && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": "input-clear",
                "aria-label": "清空输入",
                onMouseDown: (J) => J.preventDefault(),
                onClick: Se,
                className: "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
              }
            ),
            re && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                disabled: S,
                "data-testid": "password-toggle",
                "aria-label": Y ? f ?? "隐藏密码" : h ?? "显示密码",
                title: Y ? f ?? "隐藏密码" : h ?? "显示密码",
                onMouseDown: (J) => J.preventDefault(),
                onClick: (J) => {
                  J.preventDefault(), J.stopPropagation(), !S && ie((me) => !me);
                },
                className: "inline-flex shrink-0 items-center justify-center rounded-xs p-0.5 text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)] enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: Y ? /* @__PURE__ */ e(tc, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Wa, { className: "h-3.5 w-3.5" })
              }
            ),
            Ue && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center text-[var(--abc-fg-muted)]", children: Ue })
          ] })
        ]
      }
    );
    return !a && !n && !s && !p ? we : /* @__PURE__ */ i("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: I,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
        }
      ),
      we,
      (n || s || p) && /* @__PURE__ */ i("div", { className: "mt-1 flex items-center justify-between gap-2 text-xs", children: [
        /* @__PURE__ */ e("div", { className: "min-w-0 flex-1", children: n ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-danger)]", children: n }) : s ? /* @__PURE__ */ e("p", { className: "text-[var(--abc-fg-muted)]", children: s }) : null }),
        p && /* @__PURE__ */ e(
          "span",
          {
            "data-testid": "input-count",
            className: "ml-auto shrink-0 font-mono text-xs text-[var(--abc-fg-muted)] tabular-nums select-none",
            children: D !== void 0 ? `${oe}/${D}` : oe
          }
        )
      ] })
    ] });
  }
);
pt.displayName = "Input";
const cs = ({
  value: t,
  defaultValue: r,
  onChange: a,
  min: n,
  max: s,
  step: o = 1,
  size: d,
  motion: c,
  disabled: u = !1,
  placeholder: l,
  invalid: b = !1,
  className: m
}) => {
  const h = Be(d, "sm"), f = Ie(c), p = Tt(), [x, w] = $(r ?? null), k = t !== void 0 ? t : x, v = (C) => {
    let L = C;
    L !== null && Number.isFinite(L) ? (n !== void 0 && (L = Math.max(n, L)), s !== void 0 && (L = Math.min(s, L))) : L = null, t === void 0 && w(L), a == null || a(L);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: g(
        "inline-flex w-full items-center overflow-hidden",
        Zr,
        Nc[h],
        b && "border-[var(--abc-danger)]",
        u && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
        m
      ),
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "减少数值",
            disabled: u || n !== void 0 && (k ?? 0) <= n,
            onClick: () => v((k ?? 0) - o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-r border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(ss, { className: "h-3 w-3" })
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            id: p,
            type: "number",
            value: k ?? "",
            min: n,
            max: s,
            step: o,
            disabled: u,
            placeholder: l,
            onChange: (C) => {
              const L = C.target.value;
              v(L === "" ? null : Number(L));
            },
            className: "h-full w-full min-w-0 flex-1 bg-transparent px-2.5 text-center font-mono tabular-nums focus:outline-none"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "增加数值",
            disabled: u || s !== void 0 && (k ?? 0) >= s,
            onClick: () => v((k ?? 0) + o),
            className: "flex h-full w-7 shrink-0 items-center justify-center border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)] disabled:opacity-40 cursor-pointer abc-motion-control",
            children: /* @__PURE__ */ e(ns, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, mn = at.forwardRef(
  ({
    size: t,
    motion: r,
    label: a,
    error: n,
    helperText: s,
    showCount: o = !1,
    invalid: d = !1,
    mono: c = !1,
    id: u,
    value: l,
    defaultValue: b,
    maxLength: m,
    onChange: h,
    rows: f = 3,
    className: p,
    ...x
  }, w) => {
    const k = Be(t, "sm"), v = Ie(r), C = Tt(), L = u || C, [D, j] = $(
      () => String(b ?? "").length
    ), S = l !== void 0 ? String(l ?? "").length : D, y = !!(d || n), _ = /* @__PURE__ */ e(
      "textarea",
      {
        ref: w,
        id: L,
        rows: f,
        value: l,
        defaultValue: b,
        maxLength: m,
        onChange: (R) => {
          l === void 0 && j(R.target.value.length), h == null || h(R);
        },
        "data-motion": v,
        "aria-invalid": y || void 0,
        className: g(
          Zr,
          sm[k],
          "leading-relaxed resize-y",
          c && "font-mono",
          y && "border-[var(--abc-danger)] focus:border-[var(--abc-danger)]",
          p
        ),
        ...x
      }
    );
    return !a && !n && !s && !o ? _ : /* @__PURE__ */ i("div", { className: "w-full", children: [
      a && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: L,
          className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
          children: a
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
            children: m !== void 0 ? `${S}/${m}` : S
          }
        )
      ] })
    ] });
  }
);
mn.displayName = "Textarea";
const xi = [
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
], om = [
  { id: "all", label: "全部图标" },
  { id: "nav", label: "导航大盘" },
  { id: "user", label: "用户组织" },
  { id: "order", label: "业务交易" },
  { id: "data", label: "数据报表" },
  { id: "content", label: "内容资讯" },
  { id: "system", label: "系统运维" },
  { id: "tool", label: "通用工具" }
], im = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, yi = ({
  open: t,
  current: r,
  value: a,
  onClose: n,
  onSelect: s,
  onChange: o,
  placeholder: d = "点击选择菜单图标",
  clearable: c = !0,
  disabled: u = !1,
  size: l,
  motion: b,
  className: m
}) => {
  const h = Be(l, "sm"), f = Ie(b), [p, x] = $(!1), [w, k] = $(""), [v, C] = $("all"), L = typeof t == "boolean", D = L ? t : p, j = a ?? r ?? "", S = () => {
    L ? n == null || n() : x(!1);
  }, y = (A) => {
    s == null || s(A), o == null || o(A), S();
  }, T = se(() => {
    const A = w.trim();
    return xi.filter((z) => v !== "all" && z.category !== v ? !1 : A ? dr(`${z.label} ${z.name}`, A) : !0);
  }, [w, v]), _ = se(
    () => xi.find((A) => A.name.toLowerCase() === j.toLowerCase()),
    [j]
  ), R = /* @__PURE__ */ e(yr, { open: D, onClose: S, title: "选择系统图标", size: "xl", children: /* @__PURE__ */ i("div", { className: "space-y-3.5", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ e("div", { className: "min-w-[200px] flex-1", children: /* @__PURE__ */ e(
        pt,
        {
          allowClear: !0,
          placeholder: "搜索图标英文名、中文含义或拼音首字母（如 yhgl / Users）...",
          value: w,
          prefix: /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }),
          onChange: (A) => k(A.target.value)
        }
      ) }),
      j && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-3 py-1.5 text-xs", children: [
        /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: "当前选择:" }),
        /* @__PURE__ */ e(jr, { name: j, size: 15, className: "text-[var(--abc-primary)]" }),
        /* @__PURE__ */ e("span", { className: "font-mono font-medium text-[var(--abc-fg)]", children: j })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center gap-1 overflow-x-auto border-b border-[var(--abc-border-subtle)] pb-1.5 text-xs", children: om.map((A) => /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: () => C(A.id),
        className: g(
          "whitespace-nowrap rounded-[var(--abc-radius-sm)] px-2.5 py-1 font-medium transition-colors cursor-pointer",
          v === A.id ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
        ),
        children: A.label
      },
      A.id
    )) }),
    /* @__PURE__ */ e("div", { className: "max-h-[360px] overflow-y-auto pr-1", children: T.length > 0 ? /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5", children: T.map((A) => {
      const z = j === A.name;
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: () => y(A.name),
          className: g(
            "group relative flex flex-col items-center justify-center rounded-[var(--abc-radius-lg)] border p-3 text-center transition-all cursor-pointer",
            z ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-primary)]"
          ),
          children: [
            z && /* @__PURE__ */ e("span", { className: "absolute top-1.5 right-1.5 text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ e("div", { className: "mb-1.5 rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-2 transition-colors group-hover:bg-[var(--abc-primary-soft)]", children: /* @__PURE__ */ e(
              jr,
              {
                name: A.name,
                size: 20,
                className: g(
                  "transition-transform group-hover:scale-110",
                  z ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] group-hover:text-[var(--abc-primary)]"
                )
              }
            ) }),
            /* @__PURE__ */ e("span", { className: "w-full truncate text-xs font-medium text-[var(--abc-fg)]", children: A.label }),
            /* @__PURE__ */ e("span", { className: "mt-0.5 w-full truncate font-mono text-[10px] text-[var(--abc-fg-muted)]", children: A.name })
          ]
        },
        A.name
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
  return L ? R : /* @__PURE__ */ i(tt, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: "button",
        tabIndex: u ? -1 : 0,
        "data-motion": f,
        onClick: () => !u && x(!0),
        onKeyDown: (A) => {
          !u && (A.key === "Enter" || A.key === " ") && (A.preventDefault(), x(!0));
        },
        className: g(
          "flex w-full items-center justify-between gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
          im[h],
          Zr,
          u && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
          m
        ),
        children: [
          j ? /* @__PURE__ */ i("span", { className: "flex min-w-0 items-center gap-2", children: [
            /* @__PURE__ */ e(jr, { name: j, size: 15, className: "shrink-0 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { className: "truncate font-medium text-[var(--abc-fg)]", children: _ ? `${_.label} (${j})` : j })
          ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: d }),
          /* @__PURE__ */ i("span", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
            c && j && !u && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空图标",
                onClick: (A) => {
                  A.stopPropagation(), s == null || s(""), o == null || o("");
                },
                className: "rounded-full p-0.5 hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            ),
            /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" })
          ] })
        ]
      }
    ),
    R
  ] });
};
async function ls(t) {
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
const cm = {
  xs: "text-[11px] px-1 py-0",
  sm: "text-xs px-1 py-0.5",
  md: "text-sm px-1.5 py-0.5",
  lg: "text-base px-2 py-1"
}, lm = {
  xs: "h-4 min-w-4 px-1 text-[9px]",
  sm: "h-5 min-w-5 px-1.5 text-[10px]",
  md: "h-6 min-w-6 px-2 text-xs",
  lg: "h-7 min-w-7 px-2.5 text-xs"
}, wi = ({
  text: t,
  displayText: r,
  children: a,
  showIcon: n = !0,
  iconOnly: s = !1,
  mono: o = !0,
  successMessage: d,
  successText: c,
  tooltip: u,
  onCopy: l,
  size: b,
  motion: m,
  className: h
}) => {
  const f = Be(b, "sm"), p = Ie(m), { toast: x } = At(), [w, k] = $(!1), v = ce(null), C = c ?? d ?? "已复制到剪贴板";
  ge(() => () => {
    v.current && clearTimeout(v.current);
  }, []);
  const L = ue(
    async (S) => {
      S.stopPropagation(), S.preventDefault(), await ls(t) ? (k(!0), x.success(C), l == null || l(t), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        k(!1), v.current = null;
      }, 1500)) : x.error("复制失败，请手动复制");
    },
    [t, C, l, x]
  ), D = u !== void 0 ? u : w ? C : "点击复制", j = w ? /* @__PURE__ */ e(
    Nt,
    {
      "data-testid": "copy-icon-check",
      className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]",
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ e(
    ga,
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
      "aria-label": u || "复制",
      "data-motion": p,
      onClick: L,
      className: g(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer select-none abc-motion-control",
        h
      ),
      children: j
    }
  ) : /* @__PURE__ */ i(
    "span",
    {
      role: "button",
      tabIndex: 0,
      title: D,
      "data-motion": p,
      onClick: L,
      onKeyDown: (S) => {
        (S.key === "Enter" || S.key === " ") && L(S);
      },
      className: g(
        "group inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-primary)] cursor-pointer select-none abc-motion-control",
        cm[f],
        o && "font-mono tabular-nums",
        h
      ),
      children: [
        /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: r ?? a ?? t }),
        n && j
      ]
    }
  );
}, La = ({ size: t, motion: r, className: a, children: n, ...s }) => {
  const o = Be(t, "sm"), d = Ie(r);
  return /* @__PURE__ */ e(
    "kbd",
    {
      "data-motion": d,
      className: g(
        "inline-flex items-center justify-center rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-mono font-medium text-[var(--abc-fg-muted)] abc-motion-control",
        lm[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, oh = ({
  value: t,
  title: r,
  copyLabel: a = "复制",
  copiedLabel: n = "已复制",
  successDuration: s = 1800,
  className: o,
  ...d
}) => {
  const [c, u] = $(!1), l = r || a;
  return /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      "aria-label": c ? n : l,
      title: c ? n : l,
      onClick: async (m) => {
        m.stopPropagation(), await ls(t) && (u(!0), setTimeout(() => u(!1), s));
      },
      className: g(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-sm,6px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-muted)] transition-all hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] cursor-pointer",
        c && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
        o
      ),
      ...d,
      children: c ? /* @__PURE__ */ e(Nt, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(ga, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
    }
  );
}, dm = {
  default: "border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]",
  success: "border-emerald-500/30 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  warning: "border-amber-500/30 bg-amber-50/60 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300",
  error: "border-red-500/30 bg-red-50/60 text-red-700 dark:bg-red-950/30 dark:text-red-300",
  info: "border-blue-500/30 bg-blue-50/60 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300"
}, um = {
  xs: "px-1.5 py-0.2 text-[10px] gap-1",
  sm: "px-2 py-0.5 text-xs gap-1.5",
  md: "px-2.5 py-1 text-xs gap-2"
};
function ih({
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
      className: g(
        "inline-flex items-center rounded-[var(--abc-radius-xs,4px)] border font-medium leading-none select-none",
        dm[a],
        um[n],
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
function bm({
  text: t,
  iconSize: r = 14,
  preserveSrToken: a = !1,
  className: n,
  ...s
}) {
  const o = t ? t.replace(/\[icon:[^\]]+\]/g, "").trim() : "";
  return /* @__PURE__ */ e("span", { className: g("inline-flex items-center gap-1.5", n), ...s, children: /* @__PURE__ */ e("span", { children: o || t }) });
}
function ln(t) {
  return t == null || typeof t == "boolean" ? "" : typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(ln).join("") : at.isValidElement(t) ? ln(t.props.children) : "";
}
function ro(t, r) {
  const a = [];
  return at.Children.forEach(t, (n) => {
    if (at.isValidElement(n)) {
      if (n.type === at.Fragment) {
        const s = n.props;
        a.push(...ro(s.children, r));
        return;
      }
      if (n.type === "optgroup") {
        const s = n.props;
        a.push(...ro(s.children, s.label ?? ""));
        return;
      }
      if (n.type === "option") {
        const s = n.props, o = ln(s.children), d = s.value !== void 0 ? s.value : o;
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
const mm = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, fm = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
};
function Ni(t, r = !0) {
  return t.textLabel.includes("[icon:") ? /* @__PURE__ */ e(
    bm,
    {
      text: t.textLabel,
      iconSize: 13,
      preserveSrToken: r
    }
  ) : t.label;
}
const ur = at.forwardRef(
  ({
    options: t,
    children: r,
    value: a,
    defaultValue: n,
    onChange: s,
    onValueChange: o,
    onBlur: d,
    onKeyDown: c,
    label: u,
    error: l,
    helperText: b,
    id: m,
    name: h,
    title: f,
    placeholder: p,
    multiple: x = !1,
    searchable: w = !1,
    allowClear: k,
    clearable: v,
    disabled: C = !1,
    invalid: L = !1,
    size: D,
    motion: j,
    className: S,
    wrapperClassName: y,
    containerClassName: T,
    dropdownClassName: _,
    popoverClassName: R,
    matchWidth: A = !0,
    hideChevron: z = !1,
    container: K,
    "aria-label": E,
    ...I
  }, P) => {
    var Ve, qt, Ir;
    const H = t === void 0 && r !== void 0, O = p !== void 0 ? p : H ? "" : "请选择", G = Be(D === "ghost" ? "sm" : D, "sm"), Y = Ie(j), ie = Tt(), V = m || ie, re = typeof process < "u" && ((Ve = process.env) == null ? void 0 : Ve.NODE_ENV) === "test" || typeof import.meta < "u" && !1, te = se(() => t !== void 0 ? t.map((q) => ({
      value: String(q.value),
      rawValue: q.value,
      label: q.label,
      textLabel: typeof q.label == "string" ? q.label : ln(q.label),
      disabled: !!q.disabled,
      description: q.description,
      group: q.group
    })) : ro(r), [t, r]), le = a !== void 0, [oe, Ae] = $(() => {
      if (n !== void 0) return n;
      if (H && !x && !p) {
        const q = te.find((de) => !de.disabled) ?? te[0];
        return q ? q.value : "";
      }
      return x ? [] : "";
    });
    ge(() => {
      if (le || !H || x || p || te.length === 0) return;
      if (!te.some((de) => de.value === String(oe ?? "")))
        if (n !== void 0 && te.some((de) => de.value === String(n)))
          Ae(n);
        else {
          const de = te.find((je) => !je.disabled) ?? te[0];
          de && Ae(de.value);
        }
    }, [le, H, x, p, te, oe, n]);
    const F = le ? a : oe, [Z, Re] = $(!1), [Ue, he] = $(""), [Se, Fe] = $(0), { isMounted: Le, isVisible: nt } = ia(
      Z,
      Y === "none" || re ? 0 : 140
    ), we = ce(null), J = ce(null), me = ce(null), ze = ce(null), rt = ce(null), nr = ce([]), bt = at.useCallback(
      (q) => {
        rt.current = q, typeof P == "function" ? P(q) : P && (P.current = q);
      },
      [P]
    ), ht = !!(k ?? v), Wt = !!(L || l), { style: _t, actualSide: Pr, portalContainer: wr } = Ha({
      open: Le,
      triggerRef: J,
      floatingRef: me,
      placement: "bottomLeft",
      offset: 4,
      matchWidth: A
    }), mr = K ?? wr;
    ge(() => {
      if (!Z) {
        he("");
        return;
      }
      const q = (je) => {
        var ft, dt;
        const lt = je.target;
        lt && ((ft = we.current) != null && ft.contains(lt) || (dt = me.current) != null && dt.contains(lt) || Re(!1));
      }, de = (je) => {
        var lt, ft;
        je.key === "Escape" && (je.preventDefault(), je.stopPropagation(), Re(!1), H ? (lt = rt.current) == null || lt.focus() : (ft = J.current) == null || ft.focus());
      };
      return document.addEventListener("mousedown", q), document.addEventListener("touchstart", q, { passive: !0 }), document.addEventListener("keydown", de, !0), () => {
        document.removeEventListener("mousedown", q), document.removeEventListener("touchstart", q), document.removeEventListener("keydown", de, !0);
      };
    }, [Z, H]), ge(() => {
      var ft;
      if (!Z) return;
      const q = nr.current[Se], de = (ft = me.current) == null ? void 0 : ft.querySelector("[data-select-scroll-host]");
      if (!q || !de) return;
      const je = q.offsetTop, lt = je + q.offsetHeight;
      je < de.scrollTop ? de.scrollTop = je : lt > de.scrollTop + de.clientHeight && (de.scrollTop = lt - de.clientHeight);
    }, [Z, Se]);
    const Ce = se(() => {
      const q = Ue.trim();
      return q ? te.filter(
        (de) => dr(de.textLabel, q) || de.value.toLowerCase().includes(q.toLowerCase())
      ) : te;
    }, [te, Ue]), st = se(() => x ? Array.isArray(F) ? F : F != null && F !== "" ? [F] : [] : F != null && F !== "" ? [F] : [], [x, F]), $t = se(() => st.map((q) => {
      const de = te.find((je) => je.value === String(q));
      return {
        value: q,
        option: de,
        label: de ? de.label : String(q),
        textLabel: de ? de.textLabel : String(q)
      };
    }), [te, st]), fr = (q) => {
      if (le || Ae(q), H) {
        const de = Array.isArray(q) ? String(q[0] ?? "") : String(q ?? "");
        o == null || o(de);
        const je = rt.current;
        je && (je.value = de, je.dispatchEvent(new Event("change", { bubbles: !0 })));
        return;
      }
      Array.isArray(q) || o == null || o(String(q ?? "")), s == null || s(q);
    }, Yt = () => {
      const q = Ce.findIndex(
        (de) => !de.disabled && st.some((je) => String(je) === de.value)
      );
      if (q >= 0)
        Fe(q);
      else {
        const de = Ce.findIndex((je) => !je.disabled);
        Fe(de >= 0 ? de : 0);
      }
      Re(!0);
    }, ct = (q) => {
      var je;
      if (Ce.length === 0) return;
      let de = Se;
      for (let lt = 0; lt < Ce.length; lt++)
        if (de = (de + q + Ce.length) % Ce.length, !((je = Ce[de]) != null && je.disabled)) {
          Fe(de);
          return;
        }
    }, Je = (q) => {
      var de, je;
      if (!q.disabled)
        if (x) {
          const ft = st.some((dt) => String(dt) === q.value) ? st.filter((dt) => String(dt) !== q.value) : [...st, q.rawValue];
          fr(ft);
        } else
          fr(q.rawValue), Re(!1), H ? (de = rt.current) == null || de.focus() : (je = J.current) == null || je.focus();
    }, Ge = (q) => {
      if (c == null || c(q), !C) {
        if (q.key === "Escape") {
          Z && (q.preventDefault(), q.stopPropagation(), Re(!1));
          return;
        }
        if (q.key === "Tab") {
          Z && Re(!1);
          return;
        }
        if (q.key === "ArrowDown") {
          q.preventDefault(), Z ? ct(1) : Yt();
          return;
        }
        if (q.key === "ArrowUp") {
          q.preventDefault(), Z ? ct(-1) : Yt();
          return;
        }
        if (q.key === "Enter" || q.key === " " && q.target !== ze.current)
          if (q.preventDefault(), !Z)
            Yt();
          else {
            const de = Ce[Se];
            de && !de.disabled && Je(de);
          }
      }
    }, Ye = y || T, Rt = _ || R, jt = se(() => Ce.some((q) => !!q.group), [Ce]), Xe = H ? { "aria-hidden": !0 } : {
      id: V,
      title: f,
      role: "combobox",
      "aria-label": E,
      "aria-expanded": Z,
      "aria-haspopup": "listbox",
      "aria-controls": `${V}-listbox`,
      "aria-activedescendant": Z ? `${V}-opt-${Se}` : void 0,
      "aria-disabled": C || void 0,
      tabIndex: C ? -1 : 0,
      onBlur: (q) => {
        var je;
        const de = q.relatedTarget;
        de && ((je = me.current) != null && je.contains(de)) || d == null || d(q);
      },
      onKeyDown: Ge
    };
    return /* @__PURE__ */ i(
      "div",
      {
        ref: we,
        "data-slot": "select-wrapper",
        "data-state": Z ? "open" : "closed",
        className: g(
          "relative min-w-0",
          D === "ghost" ? "inline-flex w-auto" : Ye || "w-full"
        ),
        children: [
          u && /* @__PURE__ */ e(
            "label",
            {
              htmlFor: V,
              className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
              children: u
            }
          ),
          H ? /* @__PURE__ */ i(
            "select",
            {
              ...I,
              ref: bt,
              id: V,
              name: h,
              title: f,
              "aria-label": E,
              "aria-invalid": I["aria-invalid"] ?? (Wt || void 0),
              disabled: C,
              multiple: x || void 0,
              value: le ? Array.isArray(a) ? a.map(String) : String(a ?? "") : String(oe ?? ""),
              onBlur: (q) => {
                var je;
                const de = q.relatedTarget;
                de && ((je = me.current) != null && je.contains(de)) || d == null || d(q);
              },
              onClick: (q) => {
                var de;
                (de = I.onClick) == null || de.call(I, q), !q.defaultPrevented && (q.stopPropagation(), !C && (Z ? Re(!1) : Yt()));
              },
              onKeyDown: Ge,
              onChange: (q) => {
                le || Ae(q.target.value), o == null || o(q.target.value), s == null || s(q);
              },
              className: "peer pointer-events-none absolute inset-0 h-full w-full appearance-none opacity-0",
              children: [
                O && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: O }),
                te.map((q, de) => /* @__PURE__ */ e("option", { value: q.value, disabled: q.disabled, children: q.textLabel }, `${q.value}-${de}`))
              ]
            }
          ) : h ? /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: h,
              value: x ? st.join(",") : String(st[0] ?? "")
            }
          ) : null,
          /* @__PURE__ */ i(
            "div",
            {
              ref: J,
              "data-slot": "select-trigger",
              "data-state": Z ? "open" : "closed",
              ...Xe,
              onClick: (q) => {
                var de;
                H && (q.preventDefault(), (de = rt.current) == null || de.focus()), q.stopPropagation(), !C && (Z ? Re(!1) : Yt());
              },
              "data-motion": Y,
              className: g(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                D === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : g(
                  "w-full px-2.5 py-1",
                  Zr,
                  x ? fm[G] : mm[G],
                  Z && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  Wt && "border-[var(--abc-danger)]",
                  C && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                S
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: $t.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: O }) : x ? $t.map((q) => /* @__PURE__ */ i(
                  "span",
                  {
                    "data-testid": "select-tag",
                    className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                    children: [
                      /* @__PURE__ */ e("span", { className: "max-w-28 truncate", children: q.label }),
                      !C && /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "aria-label": `移除 ${q.textLabel}`,
                          onClick: (de) => {
                            de.stopPropagation(), fr(
                              st.filter((je) => String(je) !== String(q.value))
                            );
                          },
                          className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                          children: /* @__PURE__ */ e(Ct, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  String(q.value)
                )) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (qt = $t[0]) != null && qt.option ? Ni($t[0].option, !1) : (Ir = $t[0]) == null ? void 0 : Ir.label }) }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  ht && $t.length > 0 && !C && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "select-clear",
                      "aria-label": "清空",
                      onClick: (q) => {
                        q.stopPropagation(), fr(x ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  !z && /* @__PURE__ */ e(
                    lr,
                    {
                      className: g(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        Z && "rotate-180"
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          Le && mr && xr(
            /* @__PURE__ */ i(
              "div",
              {
                ref: me,
                id: `${V}-listbox`,
                role: "listbox",
                "data-slot": "select-popover",
                "data-abc-floating": "",
                "data-motion": Y,
                "data-placement": Pr,
                "aria-multiselectable": x || void 0,
                onMouseDown: (q) => q.stopPropagation(),
                style: _t,
                className: g(
                  "z-[1500] max-w-[min(480px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                  A ? "min-w-full" : "min-w-[140px]",
                  nt ? "abc-animate-popover-in" : "abc-animate-popover-out",
                  Rt
                ),
                children: [
                  w && /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                    /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e(
                      "input",
                      {
                        ref: ze,
                        type: "text",
                        autoFocus: !0,
                        "data-testid": "select-search-input",
                        value: Ue,
                        onClick: (q) => q.stopPropagation(),
                        onKeyDown: Ge,
                        onChange: (q) => {
                          const de = q.target.value;
                          he(de);
                          const lt = (de.trim() ? te.filter(
                            (ft) => dr(ft.textLabel, de) || ft.value.toLowerCase().includes(de.toLowerCase())
                          ) : te).findIndex((ft) => !ft.disabled);
                          Fe(lt >= 0 ? lt : 0);
                        },
                        placeholder: "搜索或输入拼音首字母...",
                        className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e("div", { "data-select-scroll-host": "", className: "max-h-56 overflow-y-auto p-1", children: Ce.length === 0 ? /* @__PURE__ */ e("div", { className: "py-4 text-center text-xs text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : Ce.map((q, de) => {
                    var it;
                    const je = st.some((It) => String(It) === q.value), lt = de === Se, ft = de > 0 ? (it = Ce[de - 1]) == null ? void 0 : it.group : void 0, dt = jt && q.group && q.group !== ft;
                    return /* @__PURE__ */ i(at.Fragment, { children: [
                      dt && /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]", children: q.group }),
                      /* @__PURE__ */ i(
                        "button",
                        {
                          ref: (It) => {
                            nr.current[de] = It;
                          },
                          id: `${V}-opt-${de}`,
                          type: "button",
                          role: "option",
                          "aria-selected": je,
                          disabled: q.disabled,
                          onMouseEnter: () => {
                            q.disabled || Fe(de);
                          },
                          onMouseDown: (It) => It.stopPropagation(),
                          onClick: (It) => {
                            It.preventDefault(), It.stopPropagation(), Je(q);
                          },
                          className: g(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            je ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : lt && !q.disabled ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
                            q.disabled && "opacity-45 cursor-not-allowed"
                          ),
                          children: [
                            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                              /* @__PURE__ */ e("div", { className: "truncate", children: Ni(q, !0) }),
                              q.description && /* @__PURE__ */ e("div", { className: "truncate text-[10px] text-[var(--abc-fg-muted)]", children: q.description })
                            ] }),
                            je && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 shrink-0" })
                          ]
                        }
                      )
                    ] }, `${q.value}-${de}`);
                  }) })
                ]
              }
            ),
            mr
          ),
          l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-danger)]", children: l }),
          b && !l && /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: b })
        ]
      }
    );
  }
);
ur.displayName = "Select";
function ch({
  value: t,
  defaultValue: r,
  onValueChange: a,
  onChange: n,
  options: s,
  label: o,
  error: d,
  helperText: c,
  placeholder: u,
  searchable: l,
  allowClear: b,
  clearable: m,
  "aria-label": h,
  id: f,
  disabled: p,
  triggerClassName: x,
  contentClassName: w,
  size: k
}) {
  return /* @__PURE__ */ e(
    ur,
    {
      id: f,
      "aria-label": h,
      disabled: p,
      label: o,
      error: d,
      helperText: c,
      value: t,
      defaultValue: r,
      onValueChange: a,
      onChange: n,
      searchable: l,
      allowClear: b,
      clearable: m,
      className: x,
      dropdownClassName: w,
      size: k,
      placeholder: u,
      options: s
    }
  );
}
const pm = ({
  title: t = "暂无匹配数据",
  description: r = "未检索到符合条件的数据记录，建议调整筛选或搜索关键词",
  icon: a,
  action: n,
  onReset: s,
  resetText: o = "重置筛选条件",
  size: d,
  motion: c,
  compact: u = !1,
  className: l
}) => {
  const b = Be(d, "md"), m = Ie(c), p = {
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
  return /* @__PURE__ */ i(
    "div",
    {
      "data-testid": "empty-state",
      "data-motion": m,
      className: g(
        "flex flex-col items-center justify-center text-center select-none",
        p.container,
        m !== "none" && "abc-animate-fade-in",
        l
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "empty-state-icon",
            className: g(
              "flex items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]",
              p.iconBox
            ),
            children: a ?? /* @__PURE__ */ e(Su, { className: p.iconSize })
          }
        ),
        t && /* @__PURE__ */ e(
          "h4",
          {
            "data-testid": "empty-state-title",
            className: g("mt-3 text-[var(--abc-fg)]", p.title),
            children: t
          }
        ),
        r && /* @__PURE__ */ e(
          "p",
          {
            "data-testid": "empty-state-description",
            className: g("max-w-sm leading-relaxed text-[var(--abc-fg-muted)]", p.desc),
            children: r
          }
        ),
        (n || s) && /* @__PURE__ */ e("div", { "data-testid": "empty-state-action", className: "mt-4 flex items-center justify-center gap-2", children: n ?? /* @__PURE__ */ e(
          Ee,
          {
            variant: "secondary",
            size: p.btnSize,
            motion: m,
            icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
            onClick: s,
            children: o
          }
        ) })
      ]
    }
  );
}, hm = {
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
}, qn = ({
  mode: t,
  current: r,
  currentPage: a,
  page: n,
  pageSize: s,
  size: o,
  controlSize: d,
  motion: c,
  total: u,
  pageSizeOptions: l = [10, 20, 50, 100],
  onChange: b,
  onPageChange: m,
  onSizeChange: h,
  onPageSizeChange: f,
  showTotal: p = !0,
  showQuickJumper: x = !0,
  className: w,
  hasNext: k,
  hasPrev: v,
  nextCursor: C,
  prevCursor: L,
  currentCursor: D,
  loadedCount: j,
  onNext: S,
  onPrev: y,
  onResetCursor: T,
  loading: _ = !1
}) => {
  const R = r ?? a ?? n ?? 1, A = s ?? (typeof o == "number" ? o : void 0) ?? 10, z = Be(
    d ?? (typeof o == "string" ? o : void 0),
    "sm"
  ), K = Ie(c), E = hm[z], I = t ?? (u === void 0 && (k !== void 0 || v !== void 0 || S !== void 0) ? "cursor" : "offset"), P = (oe) => {
    b == null || b(1, oe), h == null || h(oe), f == null || f(oe);
  }, H = se(() => (l || []).map((oe) => ({
    label: `${oe} 条/页`,
    value: oe
  })), [l]);
  if (I === "cursor")
    return /* @__PURE__ */ i(
      "div",
      {
        "data-testid": "pagination-cursor",
        "data-motion": K,
        className: g(
          "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
          E.wrap,
          w
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2 font-mono tabular-nums", children: [
            p === !1 ? null : typeof p == "function" ? p(j ?? 0) : j !== void 0 ? /* @__PURE__ */ i("span", { children: [
              "已连续加载 ",
              /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: j }),
              " 条记录"
            ] }) : /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "流水式游标分页" }),
            T && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: T,
                disabled: _ || !v,
                className: "text-xs text-[var(--abc-primary)] hover:underline disabled:opacity-40 disabled:hover:no-underline cursor-pointer",
                children: "返回最新"
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
            l && l.length > 0 && (h || f || b) && /* @__PURE__ */ e(
              ur,
              {
                "aria-label": "每页条数",
                size: z,
                value: A,
                disabled: _,
                onChange: (oe) => P(Number(oe)),
                options: H,
                searchable: !1,
                clearable: !1,
                wrapperClassName: E.selectWrap,
                className: g("cursor-pointer font-sans tabular-nums select-none", E.select)
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "上一页",
                disabled: !v || _,
                onClick: y,
                className: g(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  E.navBtn
                ),
                children: [
                  /* @__PURE__ */ e(Wn, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "上一页" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "下一页",
                disabled: !k || _,
                onClick: S,
                className: g(
                  "abc-motion-control inline-flex items-center justify-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                  E.navBtn
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "text-xs", children: "下一页" }),
                  /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ]
      }
    );
  const O = u ?? 0, G = Math.max(1, Math.ceil(O / Math.max(1, A))), [Y, ie] = $(""), V = ce(null);
  if (O <= 0)
    return /* @__PURE__ */ e(
      "div",
      {
        "data-testid": "pagination-empty",
        "data-motion": K,
        className: g(
          "flex flex-wrap items-center justify-between gap-3 py-1 text-[var(--abc-fg-muted)] select-none",
          E.wrap,
          w
        ),
        children: /* @__PURE__ */ e("div", { children: p === !1 ? null : typeof p == "function" ? p(0) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: "0" }),
          " 条记录"
        ] }) })
      }
    );
  const re = (oe) => {
    const Ae = Math.min(Math.max(1, oe), G);
    Ae !== R && (b == null || b(Ae, A), m == null || m(Ae));
  }, te = () => {
    const oe = Y.trim();
    if (!oe) {
      V.current = null;
      return;
    }
    if (oe === V.current) return;
    const Ae = parseInt(oe, 10);
    if (Number.isNaN(Ae)) {
      ie(""), V.current = null;
      return;
    }
    const F = Math.min(Math.max(1, Ae), G);
    V.current = oe, ie(String(F)), re(F);
  }, le = [];
  if (G <= 7)
    for (let oe = 1; oe <= G; oe++) le.push(oe);
  else {
    le.push(1), R > 3 && le.push("...");
    const oe = Math.max(2, R - 1), Ae = Math.min(G - 1, R + 1);
    for (let F = oe; F <= Ae; F++) le.push(F);
    R < G - 2 && le.push("..."), le.push(G);
  }
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": K,
      className: g(
        "flex flex-wrap items-center justify-between gap-3 text-[var(--abc-fg-muted)] select-none",
        E.wrap,
        w
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "font-mono tabular-nums", children: p === !1 ? null : typeof p == "function" ? p(O) : /* @__PURE__ */ i("span", { children: [
          "共 ",
          /* @__PURE__ */ e("strong", { className: "font-semibold text-[var(--abc-fg)]", children: O }),
          " 条记录"
        ] }) }),
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
          l && l.length > 0 && /* @__PURE__ */ e(
            ur,
            {
              "aria-label": "每页条数",
              size: z,
              value: A,
              disabled: _,
              onChange: (oe) => P(Number(oe)),
              options: H,
              searchable: !1,
              clearable: !1,
              wrapperClassName: E.selectWrap,
              className: g("cursor-pointer font-sans tabular-nums select-none", E.select)
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一页",
              disabled: R <= 1,
              onClick: () => re(R - 1),
              className: g(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                E.navBtn
              ),
              children: /* @__PURE__ */ e(Wn, { className: "h-3.5 w-3.5" })
            }
          ),
          le.map(
            (oe, Ae) => oe === "..." ? /* @__PURE__ */ e("span", { className: "px-1 text-[var(--abc-fg-muted)]", children: "..." }, `dots-${Ae}`) : /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => re(oe),
                className: g(
                  "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] font-mono tabular-nums transition-colors cursor-pointer",
                  E.pageBtn,
                  oe === R ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                ),
                children: oe
              },
              oe
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一页",
              disabled: R >= G,
              onClick: () => re(R + 1),
              className: g(
                "abc-motion-control inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] disabled:opacity-40 cursor-pointer",
                E.navBtn
              ),
              children: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" })
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
                    onChange: (oe) => {
                      V.current = null, ie(oe.target.value);
                    },
                    onKeyDown: (oe) => {
                      oe.key === "Enter" && (oe.preventDefault(), te());
                    },
                    onBlur: te,
                    className: g(
                      "rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1.5 text-center font-mono text-[var(--abc-fg)] tabular-nums focus:border-[var(--abc-primary)] focus:ring-1 focus:ring-[var(--abc-ring)] focus:outline-none transition-colors",
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
}, lh = (t) => /* @__PURE__ */ e(qn, { mode: "cursor", ...t }), dh = (t) => /* @__PURE__ */ e(qn, { ...t }), zt = ({
  variant: t = "text",
  animation: r = "pulse",
  motion: a,
  width: n,
  height: s,
  className: o,
  style: d,
  children: c,
  ...u
}) => {
  const l = Ie(a), b = l === "none" ? "none" : r, m = {
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
      className: g(
        "bg-[var(--abc-bg-subtle)] bg-slate-200 dark:bg-slate-800",
        t === "circular" && "rounded-full",
        t === "rectangular" && "rounded-none",
        t === "rounded" && "rounded-lg",
        t === "text" && g("rounded-md", s === void 0 && "h-4"),
        b === "wave" && "abc-skeleton-wave skeleton-wave",
        b === "pulse" && "animate-pulse",
        o
      ),
      ...u,
      children: c
    }
  );
}, uh = ({
  animation: t = "wave",
  className: r,
  ...a
}) => /* @__PURE__ */ i(
  "div",
  {
    role: "status",
    "aria-busy": "true",
    "data-testid": "skeleton-card",
    className: g(
      "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-[var(--abc-shadow-card)]",
      r
    ),
    ...a,
    children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e(zt, { variant: "text", width: "45%", height: 15, animation: t, "data-testid": "skeleton-card-title" }),
        /* @__PURE__ */ e(zt, { variant: "rounded", width: 34, height: 34, animation: t, "data-testid": "skeleton-card-icon" })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-2.5", children: /* @__PURE__ */ e(zt, { variant: "rounded", width: "65%", height: 30, animation: t, "data-testid": "skeleton-card-value" }) }),
      /* @__PURE__ */ e("div", { className: "mt-2", children: /* @__PURE__ */ e(zt, { variant: "text", width: "50%", height: 13, animation: t, "data-testid": "skeleton-card-hint" }) })
    ]
  }
), bh = ({
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
    className: g(
      "overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
      s
    ),
    ...o,
    children: /* @__PURE__ */ i("table", { className: "w-full border-collapse", children: [
      a && /* @__PURE__ */ e("thead", { className: "border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: /* @__PURE__ */ e("tr", { children: Array.from({ length: r }).map((d, c) => /* @__PURE__ */ e("th", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        zt,
        {
          variant: "text",
          width: c === 0 ? "60%" : "75%",
          height: 14,
          animation: n,
          "data-testid": "skeleton-table-head-cell"
        }
      ) }, c)) }) }),
      /* @__PURE__ */ e("tbody", { className: "divide-y divide-[var(--abc-border)]", children: Array.from({ length: t }).map((d, c) => /* @__PURE__ */ e("tr", { "data-testid": "skeleton-table-row", children: Array.from({ length: r }).map((u, l) => /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
        zt,
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
), mh = ({
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
    className: g(
      "relative flex w-full flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 p-4",
      a
    ),
    ...s,
    children: [
      /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-3", children: [
        /* @__PURE__ */ e(zt, { variant: "text", width: 60, height: 12, animation: r }),
        /* @__PURE__ */ e(zt, { variant: "text", width: 60, height: 12, animation: r })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex h-44 items-end justify-between gap-2 px-2 pt-4", children: [45, 75, 55, 90, 60, 80, 50, 85, 65, 95].map((o, d) => /* @__PURE__ */ e("div", { className: "flex h-full flex-1 flex-col items-center justify-end", children: /* @__PURE__ */ e(
        zt,
        {
          variant: "rounded",
          height: `${o}%`,
          width: "80%",
          animation: r,
          className: "rounded-t-md"
        }
      ) }, d)) }),
      /* @__PURE__ */ e("div", { className: "flex items-center justify-between border-t border-[var(--abc-border)] pt-2", children: Array.from({ length: 5 }).map((o, d) => /* @__PURE__ */ e(zt, { variant: "text", width: 36, height: 10, animation: r }, d)) })
    ]
  }
), kc = {
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
function gm(t, r, a) {
  if (t) return t;
  const n = (r ?? a ?? "").toLowerCase();
  return !n || n === "default" ? "neutral" : n === "error" ? "danger" : n in kc ? n : "neutral";
}
const pa = ({
  tone: t,
  status: r,
  color: a,
  text: n,
  label: s,
  dot: o = !0,
  pulse: d = !1,
  size: c,
  motion: u,
  className: l,
  children: b,
  ...m
}) => {
  const h = gm(t, r, a), f = kc[h], p = n ?? s ?? b, x = Be(c, "sm"), w = Ie(u);
  return /* @__PURE__ */ i(
    "span",
    {
      "data-motion": w,
      className: g(
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
              className: g(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                f.dot
              )
            }
          ),
          /* @__PURE__ */ e("span", { className: g("relative inline-flex h-1.5 w-1.5 rounded-full", f.dot) })
        ] }),
        /* @__PURE__ */ e("span", { children: p })
      ]
    }
  );
}, fh = ({
  count: t = 0,
  maxCount: r = 99,
  dot: a = !1,
  tone: n = "danger",
  variant: s,
  size: o,
  motion: d,
  children: c,
  className: u
}) => {
  const l = Be(o, "sm"), b = Ie(d);
  if (s)
    return /* @__PURE__ */ e(
      "span",
      {
        "data-motion": b,
        className: g(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--abc-primary)] focus:ring-offset-2",
          s === "secondary" ? "border-transparent bg-[var(--abc-bg-subtle,#f1f5f9)] text-[var(--abc-fg-secondary,#64748b)]" : s === "outline" ? "border-[var(--abc-border,#e2e8f0)] text-[var(--abc-fg,#0f172a)] bg-transparent" : s === "destructive" ? "border-transparent bg-[var(--abc-danger,#ef4444)] text-white" : "border-transparent bg-[var(--abc-primary,#2563eb)] text-white",
          u
        ),
        children: c
      }
    );
  const m = n === "primary" ? "bg-[var(--abc-primary)]" : n === "success" ? "bg-[var(--abc-success)]" : "bg-[var(--abc-danger)]", h = a || t > 0, f = t > r ? `${r}+` : String(t), p = {
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
  }, k = {
    xs: "h-3.5 min-w-3.5 px-1 text-[9px]",
    sm: "h-4 min-w-4 px-1 text-[10px]",
    md: "h-4.5 min-w-4.5 px-1.5 text-[11px]",
    lg: "h-5 min-w-5 px-1.5 text-xs"
  };
  return c ? /* @__PURE__ */ i("span", { "data-motion": b, className: g("relative inline-flex shrink-0", u), children: [
    c,
    h && (a ? /* @__PURE__ */ e(
      "span",
      {
        className: g(
          "abc-motion-pop absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-[var(--abc-bg-surface)]",
          w[l],
          m
        )
      }
    ) : /* @__PURE__ */ e(
      "span",
      {
        className: g(
          "abc-motion-pop absolute -top-1.5 -right-2 inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums ring-2 ring-[var(--abc-bg-surface)]",
          k[l],
          m
        ),
        children: f
      }
    ))
  ] }) : h ? a ? /* @__PURE__ */ e(
    "span",
    {
      "data-motion": b,
      className: g("abc-motion-pop inline-block rounded-full", p[l], m, u)
    }
  ) : /* @__PURE__ */ e(
    "span",
    {
      "data-motion": b,
      className: g(
        "abc-motion-pop inline-flex items-center justify-center rounded-full font-mono font-semibold text-white tabular-nums",
        x[l],
        m,
        u
      ),
      children: f
    }
  ) : null;
}, vm = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base"
}, xm = ({ src: t, name: r = "U", size: a, motion: n, className: s }) => {
  const o = Be(a, "sm"), d = Ie(n), [c, u] = $(!1), l = r.trim().slice(0, 1).toUpperCase() || "U";
  return /* @__PURE__ */ e(
    "span",
    {
      "data-motion": d,
      className: g(
        "abc-motion-control inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)] select-none",
        vm[o],
        s
      ),
      children: t && !c ? /* @__PURE__ */ e(
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
function ph(t = {}) {
  return "";
}
const ym = ({
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
    pa,
    {
      tone: d,
      dot: r,
      className: g(t === "outline" && "bg-transparent border-[var(--abc-border)]", a),
      ...s,
      children: n
    }
  );
};
ym.displayName = "Tag";
const wm = {
  none: "p-0",
  xs: "p-2.5",
  sm: "p-3",
  md: "p-4",
  lg: "p-6"
}, Nm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-6 py-4"
}, km = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2",
  md: "px-4 py-2.5",
  lg: "px-6 py-3"
}, Sm = {
  default: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)]",
  bordered: "border border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] shadow-none",
  ghost: "border border-transparent bg-transparent shadow-none",
  elevated: "border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-md",
  glass: "border border-[var(--abc-border)]/75 bg-[var(--abc-bg-surface)]/80 backdrop-blur-md shadow-[var(--abc-shadow-card)]"
}, Xn = ({
  as: t = "div",
  title: r,
  subtitle: a,
  extra: n,
  footer: s,
  size: o,
  padding: d,
  variant: c = "default",
  cover: u,
  statusRibbon: l,
  loading: b = !1,
  motion: m,
  hoverable: h = !1,
  className: f,
  bodyClassName: p,
  children: x,
  ...w
}) => {
  const k = t, v = Be(o, "md"), C = Ie(m), L = d ?? v;
  return /* @__PURE__ */ i(
    k,
    {
      "data-motion": C,
      "data-size": v,
      className: g(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] text-[var(--abc-fg)]",
        Sm[c],
        h && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        f
      ),
      ...w,
      children: [
        u && /* @__PURE__ */ e("div", { className: "aspect-video w-full overflow-hidden border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]", children: u }),
        (r || n || l) && /* @__PURE__ */ i(
          "div",
          {
            className: g(
              "flex items-center justify-between gap-3 border-b border-[var(--abc-border)]",
              Nm[v]
            ),
            children: [
              /* @__PURE__ */ i("div", { className: "min-w-0", children: [
                r && /* @__PURE__ */ e(
                  "h3",
                  {
                    className: g(
                      "font-semibold text-[var(--abc-fg)] leading-snug",
                      v === "xs" ? "text-xs" : v === "lg" ? "text-base" : "text-sm"
                    ),
                    children: r
                  }
                ),
                a && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: a })
              ] }),
              (n || l) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                l && /* @__PURE__ */ e(pa, { tone: l.tone ?? "primary", size: "xs", dot: !1, children: l.text }),
                n
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { className: g(wm[L], p), children: b ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
          /* @__PURE__ */ e(zt, { width: "45%", height: 14, motion: C }),
          /* @__PURE__ */ e(zt, { width: "90%", height: 12, motion: C }),
          /* @__PURE__ */ e(zt, { width: "70%", height: 12, motion: C })
        ] }) : x }),
        s && /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/50",
              km[v]
            ),
            children: s
          }
        )
      ]
    }
  );
}, Cm = at.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-header",
      className: g("flex flex-col gap-1.5 p-6 border-b border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Cm.displayName = "CardHeader";
const _m = at.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "h3",
    {
      ref: a,
      "data-slot": "card-title",
      className: g("font-semibold leading-none tracking-tight text-[var(--abc-fg)] text-base", t),
      ...r
    }
  )
);
_m.displayName = "CardTitle";
const Im = at.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "p",
    {
      ref: a,
      "data-slot": "card-description",
      className: g("text-sm text-[var(--abc-fg-muted)] leading-relaxed", t),
      ...r
    }
  )
);
Im.displayName = "CardDescription";
const Tm = at.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-content",
      className: g("p-6 pt-0", t),
      ...r
    }
  )
);
Tm.displayName = "CardContent";
const Mm = at.forwardRef(
  ({ className: t, ...r }, a) => /* @__PURE__ */ e(
    "div",
    {
      ref: a,
      "data-slot": "card-footer",
      className: g("flex items-center p-6 pt-0 border-t border-[var(--abc-border)]/40", t),
      ...r
    }
  )
);
Mm.displayName = "CardFooter";
const hh = ({
  orientation: t = "horizontal",
  label: r,
  className: a,
  ...n
}) => t === "vertical" ? /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    "aria-orientation": "vertical",
    className: g("mx-1.5 inline-block h-4 w-px shrink-0 bg-[var(--abc-border)] align-middle", a),
    ...n
  }
) : r ? /* @__PURE__ */ i(
  "div",
  {
    role: "separator",
    className: g("my-4 flex items-center gap-3 text-xs text-[var(--abc-fg-muted)]", a),
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
    className: g("my-3 h-px w-full bg-[var(--abc-border)]", a),
    ...n
  }
), Em = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4"
}, Am = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, gh = ({
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
      className: g(
        "flex",
        t === "vertical" ? "flex-col items-stretch" : Am[n],
        Em[c],
        a && "flex-wrap",
        s
      ),
      ...d,
      children: o
    }
  );
}, Lm = {
  xs: "p-3",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
}, vh = ({
  spotlightColor: t = "color-mix(in srgb, var(--abc-primary) 16%, transparent)",
  size: r,
  motion: a,
  hoverable: n = !1,
  className: s,
  children: o,
  ...d
}) => {
  const c = Be(r, "md"), u = Ie(a), l = ce(null), [b, m] = $({ x: 0, y: 0, active: !1 });
  return /* @__PURE__ */ i(
    "div",
    {
      ref: l,
      "data-motion": u,
      "data-size": c,
      onMouseMove: (h) => {
        var p;
        const f = (p = l.current) == null ? void 0 : p.getBoundingClientRect();
        f && m({ x: h.clientX - f.left, y: h.clientY - f.top, active: !0 });
      },
      onMouseLeave: () => m((h) => ({ ...h, active: !1 })),
      className: g(
        "@container relative overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-[var(--abc-shadow-card)] transition-colors",
        Lm[c],
        n && "abc-motion-surface hover:border-[var(--abc-border-strong)] hover:shadow-md",
        s
      ),
      ...d,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": "true",
            className: g(
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
}, ki = ({ duration: t = 8, motion: r, className: a }) => {
  const n = Ie(r);
  return n === "none" ? null : /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": n,
      className: g(
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
}, Si = ({
  motion: t,
  className: r
}) => {
  const a = Ie(t), n = a === "none";
  return /* @__PURE__ */ i(
    "div",
    {
      "aria-hidden": "true",
      "data-motion": a,
      className: g("pointer-events-none absolute inset-0 overflow-hidden", r),
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
}, Ua = {
  xs: "p-2.5",
  sm: "p-3.5",
  md: "p-4",
  lg: "p-5"
}, fn = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ds = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Sc = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl"
}, Mo = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11"
}, xh = ({
  title: t,
  value: r,
  prefix: a,
  suffix: n,
  trend: s,
  sparkline: o,
  icon: d,
  footer: c,
  loading: u = !1,
  hoverable: l = !0,
  size: b,
  motion: m,
  className: h,
  ...f
}) => {
  const p = Be(b, "md"), x = Ie(m), w = Tt().replace(/:/g, ""), k = at.useMemo(() => {
    if (!o || o.length < 2) return null;
    const C = Math.min(...o), D = Math.max(...o) - C || 1, j = 120, S = 32, T = `M ${o.map((R, A) => {
      const z = A / (o.length - 1) * j, K = S - 4 - (R - C) / D * (S - 8);
      return `${z.toFixed(1)},${K.toFixed(1)}`;
    }).join(" L ")}`, _ = `${T} L ${j},${S} L 0,${S} Z`;
    return { linePath: T, areaPath: _, width: j, height: S };
  }, [o]), v = (s == null ? void 0 : s.direction) === "up" ? "bg-[var(--abc-success-soft)] text-[var(--abc-success)]" : (s == null ? void 0 : s.direction) === "down" ? "bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
  return /* @__PURE__ */ e(
    "article",
    {
      "data-motion": x,
      "data-size": p,
      className: g(
        "@container relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ua[p],
        l && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-sm",
        h
      ),
      ...f,
      children: u ? /* @__PURE__ */ i("div", { className: "space-y-2.5", "aria-busy": "true", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e(zt, { width: "45%", height: 13, motion: x }),
          /* @__PURE__ */ e(zt, { variant: "rounded", width: 30, height: 30, motion: x })
        ] }),
        /* @__PURE__ */ e(zt, { width: "60%", height: 26, motion: x }),
        /* @__PURE__ */ e(zt, { width: "80%", height: 18, motion: x })
      ] }) : /* @__PURE__ */ i(tt, { children: [
        /* @__PURE__ */ i("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: "truncate text-xs font-medium text-[var(--abc-fg-muted)]", children: t }),
          d && /* @__PURE__ */ e(
            "span",
            {
              className: g(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                Mo[p]
              ),
              children: d
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "mt-2 flex items-baseline gap-1.5 font-mono font-bold tracking-tight text-[var(--abc-fg)] tabular-nums", children: [
          a && /* @__PURE__ */ e("span", { className: "text-sm font-medium text-[var(--abc-fg-muted)]", children: a }),
          /* @__PURE__ */ e("span", { className: Sc[p], children: r }),
          n && /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-muted)]", children: n })
        ] }),
        (s || k) && /* @__PURE__ */ i("div", { className: "mt-3 flex flex-col gap-2 @xs:flex-row @xs:items-end @xs:justify-between", children: [
          s && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 text-[11px]", children: [
            /* @__PURE__ */ i(
              "span",
              {
                className: g(
                  "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono font-semibold tabular-nums",
                  v
                ),
                children: [
                  s.direction === "up" ? /* @__PURE__ */ e(rc, { className: "h-3 w-3" }) : s.direction === "down" ? /* @__PURE__ */ e(Cu, { className: "h-3 w-3" }) : /* @__PURE__ */ e(ss, { className: "h-3 w-3" }),
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
}, Cc = io(null), Dm = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, yh = ({
  multiple: t = !1,
  value: r,
  defaultValue: a,
  onChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  columns: c = 2,
  className: u,
  children: l
}) => {
  const b = Tt(), m = Be(o, "md"), h = Ie(d), [f, p] = _r({
    value: r,
    defaultValue: a ?? (t ? [] : ""),
    onChange: n
  }), x = (w) => {
    if (!s)
      if (t) {
        const k = Array.isArray(f) ? f : [], C = k.includes(w) ? k.filter((L) => L !== w) : [...k, w];
        p(C);
      } else
        p(w);
  };
  return /* @__PURE__ */ e(
    Cc.Provider,
    {
      value: {
        multiple: t,
        value: f,
        disabled: s,
        size: m,
        motion: h,
        name: b,
        toggleValue: x
      },
      children: /* @__PURE__ */ e(
        "div",
        {
          role: t ? "group" : "radiogroup",
          "data-motion": h,
          className: g("grid gap-3", Dm[c], u),
          children: l
        }
      )
    }
  );
}, wh = ({
  value: t,
  title: r,
  description: a,
  avatar: n,
  icon: s,
  extra: o,
  checked: d,
  defaultChecked: c = !1,
  onChange: u,
  disabled: l = !1,
  size: b,
  motion: m,
  className: h,
  children: f
}) => {
  const p = dn(Cc), x = Be(b ?? (p == null ? void 0 : p.size), "md"), w = Ie(m ?? (p == null ? void 0 : p.motion)), k = !!(l || p != null && p.disabled), v = !!(p && t !== void 0), C = p && !p.multiple ? "radio" : "checkbox", [L, D] = _r({
    value: d,
    defaultValue: c,
    onChange: u
  }), j = v ? p.multiple ? Array.isArray(p.value) && p.value.includes(t) : p.value === t : L, S = (y) => {
    k || (v ? p.toggleValue(t) : D(y));
  };
  return /* @__PURE__ */ i(
    "label",
    {
      "data-motion": w,
      "data-size": x,
      "data-checked": j ? "true" : "false",
      className: g(
        "@container abc-motion-control group relative flex items-start gap-3 rounded-[var(--abc-radius-lg)] border transition-colors select-none",
        Ua[x],
        j ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-primary)]/20" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        !k && !j && "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-muted)]/50",
        k ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--abc-ring)] has-[:focus-visible]:ring-offset-1",
        h
      ),
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: C,
            name: p == null ? void 0 : p.name,
            value: t !== void 0 ? String(t) : void 0,
            checked: !!j,
            disabled: k,
            onChange: (y) => S(y.target.checked),
            className: "sr-only"
          }
        ),
        (n || s) && /* @__PURE__ */ e(
          "span",
          {
            className: g(
              "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]",
              Mo[x]
            ),
            children: n ?? s
          }
        ),
        /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 pr-5", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("span", { className: g("font-semibold text-[var(--abc-fg)]", fn[x]), children: r }),
            o && /* @__PURE__ */ e("span", { className: "shrink-0", children: o })
          ] }),
          a && /* @__PURE__ */ e("p", { className: g("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", ds[x]), children: a }),
          f && /* @__PURE__ */ e("div", { className: "mt-2", children: f })
        ] }),
        /* @__PURE__ */ e(
          "span",
          {
            "aria-hidden": "true",
            className: g(
              "absolute top-2.5 right-2.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border transition-colors",
              j ? "abc-motion-pop border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)] text-transparent"
            ),
            children: /* @__PURE__ */ e(Nt, { className: "h-3 w-3" })
          }
        )
      ]
    }
  );
}, Nh = ({
  title: t,
  description: r,
  icon: a,
  tags: n,
  extra: s,
  href: o,
  target: d,
  disabled: c = !1,
  onClick: u,
  size: l,
  motion: b,
  className: m
}) => {
  const h = Be(l, "md"), f = Ie(b), p = !!((o || u) && !c), x = 'text-left font-semibold text-[var(--abc-fg)] after:absolute after:inset-0 after:content-[""] focus:outline-none focus-visible:after:rounded-[var(--abc-radius-lg)] focus-visible:after:ring-2 focus-visible:after:ring-[var(--abc-ring)]';
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": f,
      "data-size": h,
      className: g(
        "@container relative flex flex-col justify-between rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ua[h],
        p && "abc-motion-surface cursor-pointer transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-primary)]/60 hover:shadow-sm",
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
                  className: g(
                    "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]",
                    Mo[h]
                  ),
                  children: a
                }
              ),
              /* @__PURE__ */ e("h3", { className: g("min-w-0 truncate", fn[h]), children: o && !c ? /* @__PURE__ */ e(
                "a",
                {
                  href: o,
                  target: d,
                  rel: d === "_blank" ? "noreferrer" : void 0,
                  onClick: () => u == null ? void 0 : u(),
                  className: g(x, "hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : u && !c ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: u,
                  className: g(x, "cursor-pointer hover:text-[var(--abc-primary)]"),
                  children: t
                }
              ) : t })
            ] }),
            s && /* @__PURE__ */ e("div", { className: "relative z-10 flex shrink-0 items-center gap-1", children: s })
          ] }),
          r && /* @__PURE__ */ e("p", { className: g("mt-2 line-clamp-2 leading-relaxed text-[var(--abc-fg-muted)]", ds[h]), children: r })
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
}, Rm = {
  xs: "px-3 py-2",
  sm: "px-3.5 py-2.5",
  md: "px-4 py-3",
  lg: "px-5 py-3.5"
}, kh = ({
  title: t,
  subtitle: r,
  icon: a,
  extra: n,
  defaultOpen: s = !0,
  open: o,
  onOpenChange: d,
  size: c,
  motion: u,
  className: l,
  bodyClassName: b,
  children: m
}) => {
  const h = Be(c, "md"), f = Ie(u), p = Tt(), [x, w] = _r({
    value: o,
    defaultValue: s,
    onChange: d
  });
  return /* @__PURE__ */ i(
    "section",
    {
      "data-motion": f,
      "data-size": h,
      className: g(
        "@container overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        l
      ),
      children: [
        /* @__PURE__ */ i("div", { className: g("flex items-center justify-between gap-3", Rm[h]), children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              "aria-expanded": x,
              "aria-controls": p,
              onClick: () => w(!x),
              className: "flex min-w-0 flex-1 items-center gap-2.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-xs)]",
              children: [
                /* @__PURE__ */ e(
                  lr,
                  {
                    className: g(
                      "h-4 w-4 shrink-0 text-[var(--abc-fg-muted)] transition-transform duration-[var(--abc-motion-base)]",
                      x ? "rotate-0 text-[var(--abc-primary)]" : "-rotate-90"
                    )
                  }
                ),
                a && /* @__PURE__ */ e("span", { className: "shrink-0 text-[var(--abc-primary)]", children: a }),
                /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e("div", { className: g("truncate font-semibold text-[var(--abc-fg)]", fn[h]), children: t }),
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
        /* @__PURE__ */ e("div", { id: p, className: "abc-collapse-grid", "data-open": x, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "border-t border-[var(--abc-border)]",
              Ua[h],
              b
            ),
            children: m
          }
        ) }) })
      ]
    }
  );
}, Sh = ({
  tier: t,
  price: r,
  period: a = "/ 月",
  description: n,
  features: s,
  recommended: o = !1,
  badge: d = "推荐方案",
  ctaText: c = "选择此方案",
  disabled: u = !1,
  loading: l = !1,
  onSelect: b,
  size: m,
  motion: h,
  className: f
}) => {
  const p = Be(m, "md"), x = Ie(h);
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": x,
      "data-size": p,
      className: g(
        "@container abc-motion-surface relative flex flex-col justify-between rounded-[var(--abc-radius-xl)] border bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)] transition-all duration-[var(--abc-motion-fast)]",
        Ua[p],
        o ? "border-[var(--abc-primary)] ring-2 ring-[var(--abc-primary)]/15" : "border-[var(--abc-border)] hover:border-[var(--abc-border-strong)]",
        f
      ),
      children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ e("h3", { className: g("font-bold text-[var(--abc-fg)]", fn[p]), children: t }),
            o && d && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--abc-primary)]", children: [
              /* @__PURE__ */ e(bn, { className: "h-2.5 w-2.5" }),
              d
            ] })
          ] }),
          n && /* @__PURE__ */ e("p", { className: g("mt-1.5 text-[var(--abc-fg-muted)]", ds[p]), children: n }),
          /* @__PURE__ */ i("div", { className: "mt-4 flex items-baseline gap-1 font-mono tabular-nums", children: [
            /* @__PURE__ */ e("span", { className: g("font-extrabold text-[var(--abc-fg)]", Sc[p]), children: r }),
            a && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: a })
          ] }),
          /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2 border-t border-[var(--abc-border-subtle)] pt-4", children: s.map((w, k) => {
            const v = typeof w == "string" ? { text: w, included: !0 } : w, C = v.included !== !1;
            return /* @__PURE__ */ i(
              "li",
              {
                className: g(
                  "flex items-start gap-2 text-xs",
                  C ? "text-[var(--abc-fg-secondary)]" : "text-[var(--abc-fg-placeholder)] line-through"
                ),
                children: [
                  C ? /* @__PURE__ */ e(Nt, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-success)]" }) : /* @__PURE__ */ e(Ct, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e("span", { children: v.text })
                ]
              },
              k
            );
          }) })
        ] }),
        b && /* @__PURE__ */ e("div", { className: "mt-5", children: /* @__PURE__ */ e(
          Ee,
          {
            variant: o ? "primary" : "secondary",
            size: p,
            motion: x,
            block: !0,
            disabled: u,
            loading: l,
            onClick: b,
            children: c
          }
        ) })
      ]
    }
  );
}, jm = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
}, Ch = ({
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
      className: g(
        "grid auto-rows-[minmax(148px,auto)]",
        jm[t],
        Bm[o],
        a
      ),
      ...s,
      children: n
    }
  );
}, Bm = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5"
}, _h = ({
  colSpan: t = 1,
  rowSpan: r = 1,
  eyebrow: a,
  title: n,
  description: s,
  icon: o,
  graphic: d,
  footer: c,
  hoverable: u = !0,
  size: l,
  motion: b,
  className: m,
  children: h,
  ...f
}) => {
  const p = Be(l, "md"), x = Ie(b), w = t === 2 ? "md:col-span-2" : t === 3 ? "md:col-span-2 lg:col-span-3" : "", k = r === 2 ? "row-span-2" : "";
  return /* @__PURE__ */ i(
    "article",
    {
      "data-motion": x,
      "data-size": p,
      className: g(
        "@container relative flex flex-col justify-between overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
        Ua[p],
        w,
        k,
        u && "abc-motion-surface transition-all duration-[var(--abc-motion-fast)] hover:border-[var(--abc-border-strong)] hover:shadow-md",
        m
      ),
      ...f,
      children: [
        /* @__PURE__ */ i("div", { children: [
          (a || o) && /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            a ? /* @__PURE__ */ e("span", { className: "text-[11px] font-semibold tracking-wide text-[var(--abc-primary)] uppercase", children: a }) : /* @__PURE__ */ e("span", {}),
            o && /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-muted)]", children: o })
          ] }),
          /* @__PURE__ */ e("h3", { className: g("font-bold text-[var(--abc-fg)]", fn[p]), children: n }),
          s && /* @__PURE__ */ e("p", { className: g("mt-1 leading-relaxed text-[var(--abc-fg-muted)]", ds[p]), children: s })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "my-3 overflow-hidden rounded-[var(--abc-radius-md)]", children: d }),
        h,
        c && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border-subtle)] pt-2.5 text-xs text-[var(--abc-fg-muted)]", children: c })
      ]
    }
  );
}, Pm = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Ih = ({
  items: t,
  ariaLabel: r = "面包屑导航",
  size: a,
  motion: n,
  className: s
}) => {
  const o = Be(a, "sm"), d = Ie(n);
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": r,
      "data-motion": d,
      className: g("abc-breadcrumb", Pm[o], s),
      children: /* @__PURE__ */ e("ol", { className: "m-0 flex list-none flex-wrap items-center p-0", children: t.map((c, u) => {
        const l = u === t.length - 1;
        return /* @__PURE__ */ e("li", { className: "inline-flex items-center", children: /* @__PURE__ */ i(
          "a",
          {
            href: c.href ?? "#",
            "aria-current": l ? "page" : void 0,
            onClick: (b) => {
              var m;
              (!c.href || c.href === "#" || c.onClick) && b.preventDefault(), l || (m = c.onClick) == null || m.call(c, b);
            },
            className: g(
              "abc-motion-control inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1 py-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              l ? "font-semibold text-[var(--abc-fg)] cursor-default no-underline" : "text-[var(--abc-fg-muted)] underline-offset-4 hover:text-[var(--abc-primary)] hover:underline cursor-pointer"
            ),
            children: [
              c.icon && /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: c.icon }),
              /* @__PURE__ */ e("span", { children: c.label })
            ]
          }
        ) }, c.key ?? u);
      }) })
    }
  );
}, zm = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-6 w-6 text-xs",
  md: "h-7 w-7 text-xs",
  lg: "h-8 w-8 text-sm"
}, Om = {
  xs: "text-[11px] leading-5",
  sm: "text-xs leading-6",
  md: "text-sm leading-7",
  lg: "text-base leading-8"
}, Th = ({
  items: t,
  current: r = 0,
  status: a = "process",
  direction: n = "horizontal",
  size: s,
  motion: o,
  onChange: d,
  className: c
}) => {
  const u = n === "vertical", l = Be(s, "sm"), b = Ie(o);
  return /* @__PURE__ */ e(
    "ol",
    {
      "data-motion": b,
      className: g(
        "m-0 list-none p-0",
        u ? "flex flex-col gap-4" : "flex flex-wrap items-start gap-3 sm:flex-nowrap",
        c
      ),
      children: t.map((m, h) => {
        const f = m.status ?? (h < r ? "finish" : h === r ? a : "wait"), p = !!(d && !m.disabled), x = h === t.length - 1, w = f === "finish" ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : f === "process" ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : f === "error" ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)] text-[var(--abc-danger)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]";
        return /* @__PURE__ */ i(
          "li",
          {
            className: g(
              "relative flex min-w-0",
              u ? "items-start gap-3" : "flex-1 items-center gap-2.5"
            ),
            children: [
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  disabled: !p,
                  onClick: () => p && (d == null ? void 0 : d(h)),
                  className: g(
                    "abc-motion-control group flex min-w-0 items-start gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)] rounded-[var(--abc-radius-sm)]",
                    p ? "cursor-pointer" : "cursor-default"
                  ),
                  children: [
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: g(
                          "abc-motion-pop inline-flex shrink-0 items-center justify-center rounded-full border font-mono font-semibold transition-colors",
                          zm[l],
                          w
                        ),
                        children: m.icon ? m.icon : f === "finish" ? /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5" }) : f === "error" ? /* @__PURE__ */ e(oa, { className: "h-3.5 w-3.5" }) : h + 1
                      }
                    ),
                    /* @__PURE__ */ i("span", { className: "min-w-0", children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: g(
                            "block font-semibold",
                            Om[l],
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
              !x && !u && /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": "true",
                  className: g(
                    "hidden h-px flex-1 sm:block",
                    h < r ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border)]"
                  )
                }
              )
            ]
          },
          m.key ?? h
        );
      })
    }
  );
}, $m = {
  xs: "p-0.5 gap-0.5 rounded-[var(--abc-radius-sm,6px)]",
  sm: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  md: "p-1 gap-1 rounded-[var(--abc-radius-md,8px)]",
  lg: "p-1.5 gap-1.5 rounded-[var(--abc-radius-lg,10px)]"
}, Fm = {
  xs: "px-2.5 py-0.5 text-[11px] h-6 rounded-[var(--abc-radius-xs,4px)]",
  sm: "px-3 py-1 text-xs h-7 rounded-[var(--abc-radius-sm,6px)]",
  md: "px-3.5 py-1.5 text-xs h-8 rounded-[var(--abc-radius-sm,6px)]",
  lg: "px-4 py-2 text-sm h-9 rounded-[var(--abc-radius-md,8px)]"
};
function Mh({
  options: t,
  value: r,
  onChange: a,
  onValueChange: n,
  disabled: s = !1,
  size: o,
  motion: d,
  block: c = !1,
  className: u,
  ...l
}) {
  const b = Be(o, "sm"), m = Ie(d), h = a ?? n;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "segmented-control",
      "data-motion": m,
      className: g(
        "inline-flex items-center border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)] shadow-2xs",
        c ? "flex w-full" : "inline-flex",
        $m[b],
        u
      ),
      ...l,
      children: t.map((f) => {
        const p = f.value === r, x = s || !!f.disabled;
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: x,
            onClick: () => h == null ? void 0 : h(f.value),
            className: g(
              "inline-flex cursor-pointer select-none items-center justify-center gap-1.5 font-medium transition-all outline-none",
              "focus-visible:ring-1 focus-visible:ring-[var(--abc-primary)] disabled:cursor-not-allowed disabled:opacity-40",
              c && "flex-1",
              Fm[b],
              p ? "bg-[var(--abc-bg-surface)] font-semibold text-[var(--abc-primary)] shadow-2xs ring-1 ring-[var(--abc-border)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
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
const er = ({
  content: t,
  placement: r = "top",
  disabled: a = !1,
  delay: n = 0,
  motion: s,
  children: o,
  className: d
}) => {
  const c = Ie(s), [u, l] = $(!1), [b, m] = $(!1), h = Tt(), f = ce(null), p = ce(null), x = ce(null), w = ce(null), k = ue(() => {
    typeof window > "u" || (x.current !== null && (window.clearTimeout(x.current), x.current = null), w.current !== null && (window.clearTimeout(w.current), w.current = null));
  }, []);
  ge(() => () => k(), [k]);
  const v = ue(
    (A = !1) => {
      a || !t || (k(), m(!1), A || n <= 0 || typeof window > "u" ? l(!0) : x.current = window.setTimeout(() => {
        l(!0), x.current = null;
      }, n));
    },
    [a, t, n, k]
  ), C = ue(() => {
    if (k(), typeof window > "u") {
      l(!1);
      return;
    }
    w.current = window.setTimeout(() => {
      l(!1), w.current = null;
    }, 60);
  }, [k]), L = ue(() => {
    k(), m(!0), l(!1);
  }, [k]), { isMounted: D, isVisible: j } = ia(
    u && !a && !!t,
    c === "none" || b ? 0 : 100
  ), { style: S, actualSide: y, arrowOffset: T, portalContainer: _ } = Ha({
    open: D,
    triggerRef: f,
    floatingRef: p,
    placement: r,
    offset: 8
  });
  if (ge(() => {
    if (!u) return;
    const A = (z) => {
      z.key === "Escape" && L();
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [u, L]), !t || a) return /* @__PURE__ */ e(tt, { children: o });
  const R = y === "top" ? { left: `${T}px`, bottom: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "bottom" ? { left: `${T}px`, top: "-4px", transform: "translateX(-50%) rotate(45deg)" } : y === "left" ? { top: `${T}px`, right: "-4px", transform: "translateY(-50%) rotate(45deg)" } : { top: `${T}px`, left: "-4px", transform: "translateY(-50%) rotate(45deg)" };
  return /* @__PURE__ */ i(tt, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: f,
        "data-motion": c,
        "aria-describedby": u ? h : void 0,
        onMouseEnter: () => v(!1),
        onMouseLeave: C,
        onFocus: () => v(!0),
        onBlur: L,
        onPointerDown: L,
        className: g("inline-flex items-center", d),
        children: o
      }
    ),
    D && _ && xr(
      /* @__PURE__ */ i(
        "div",
        {
          ref: p,
          id: h,
          role: "tooltip",
          "data-abc-floating": "",
          "data-motion": c,
          "data-placement": y,
          style: S,
          className: g(
            "pointer-events-none select-none z-[1400] max-w-xs rounded-[var(--abc-radius-sm)] bg-slate-900 px-2.5 py-1.5 text-[11px] leading-snug font-medium text-white shadow-lg dark:border dark:border-slate-700 dark:bg-slate-800",
            c !== "none" && (j ? "abc-animate-tooltip-in" : "abc-animate-tooltip-out")
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
      _
    )
  ] });
}, pn = ({
  items: t = [],
  content: r,
  align: a,
  placement: n,
  trigger: s = "click",
  open: o,
  defaultOpen: d = !1,
  onOpenChange: c,
  motion: u,
  children: l,
  className: b,
  panelClassName: m
}) => {
  const h = Ie(u), [f, p] = _r({
    value: o,
    defaultValue: d,
    onChange: c
  }), { isMounted: x, isVisible: w } = ia(f, h === "none" ? 0 : 140), k = ce(null), v = ce(null), C = ce(null), L = Tt(), D = n ?? (a === "left" ? "bottomLeft" : "bottomRight"), { style: j, actualSide: S, portalContainer: y } = Ha({
    open: x,
    triggerRef: k,
    floatingRef: v,
    placement: D,
    offset: 6
  }), T = ue(() => {
    C.current !== null && typeof window < "u" && (window.clearTimeout(C.current), C.current = null);
  }, []);
  ge(() => () => T(), [T]);
  const _ = ue(() => {
    s === "hover" && (T(), p(!0));
  }, [s, T, p]), R = ue(() => {
    s === "hover" && (T(), typeof window < "u" && (C.current = window.setTimeout(() => {
      p(!1), C.current = null;
    }, 140)));
  }, [s, T, p]), A = ue((P) => {
    var Y;
    const H = v.current;
    if (!H) return;
    const O = Array.from(
      H.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (O.length === 0) return;
    const G = (P % O.length + O.length) % O.length;
    (Y = O[G]) == null || Y.focus();
  }, []);
  ge(() => {
    if (!f) return;
    const P = (O) => {
      var Y, ie;
      const G = O.target;
      (Y = k.current) != null && Y.contains(G) || (ie = v.current) != null && ie.contains(G) || p(!1);
    }, H = (O) => {
      var G;
      if (O.key === "Escape") {
        O.preventDefault(), O.stopPropagation(), p(!1);
        const Y = (G = k.current) == null ? void 0 : G.querySelector(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        Y == null || Y.focus();
      }
    };
    return document.addEventListener("mousedown", P), document.addEventListener("keydown", H, !0), () => {
      document.removeEventListener("mousedown", P), document.removeEventListener("keydown", H, !0);
    };
  }, [f, p]);
  const z = !r, K = (P) => {
    P.key === "ArrowDown" ? (P.preventDefault(), p(!0), z && typeof window < "u" && window.requestAnimationFrame(() => A(0))) : (P.key === "Enter" || P.key === " ") && P.target === P.currentTarget && (P.preventDefault(), p(!f));
  }, E = (P) => {
    if (!z) return;
    const H = v.current;
    if (!H) return;
    const O = Array.from(
      H.querySelectorAll('[role="menuitem"]:not(:disabled)')
    );
    if (O.length === 0) return;
    const G = O.indexOf(document.activeElement);
    P.key === "ArrowDown" ? (P.preventDefault(), A(G < 0 ? 0 : G + 1)) : P.key === "ArrowUp" ? (P.preventDefault(), A(G <= 0 ? O.length - 1 : G - 1)) : P.key === "Home" ? (P.preventDefault(), A(0)) : P.key === "End" && (P.preventDefault(), A(O.length - 1));
  }, I = s === "hover" ? S === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : S === "left" ? "before:content-[''] before:absolute before:inset-y-0 before:-right-3 before:w-3" : S === "right" ? "before:content-[''] before:absolute before:inset-y-0 before:-left-3 before:w-3" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5" : void 0;
  return /* @__PURE__ */ i(tt, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: k,
        "data-motion": h,
        onMouseEnter: _,
        onMouseLeave: R,
        className: g("inline-flex", b),
        children: /* @__PURE__ */ e(
          "div",
          {
            "aria-expanded": f,
            "aria-controls": f ? L : void 0,
            "aria-haspopup": z ? "menu" : void 0,
            onClick: () => p(!f),
            onKeyDown: K,
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
          id: L,
          role: z ? "menu" : "dialog",
          "data-abc-floating": "",
          "data-motion": h,
          "data-placement": S,
          style: j,
          onMouseEnter: _,
          onMouseLeave: R,
          onKeyDown: E,
          className: g(
            "z-[1300] min-w-[168px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
            I,
            h !== "none" && (w ? "abc-animate-popover-in" : "abc-animate-popover-out"),
            m
          ),
          children: r || t.map(
            (P) => P.divider ? /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }, P.key) : /* @__PURE__ */ i(at.Fragment, { children: [
              P.dividerAbove && /* @__PURE__ */ e("div", { role: "separator", className: "my-1 h-px bg-[var(--abc-border)]" }),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  disabled: P.disabled,
                  onClick: () => {
                    var H;
                    P.disabled || ((H = P.onClick) == null || H.call(P), p(!1));
                  },
                  className: g(
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
}, Eo = ({
  title: t,
  content: r,
  align: a,
  placement: n,
  panelClassName: s,
  ...o
}) => {
  const d = a === "start" ? "left" : a === "end" ? "right" : a;
  return /* @__PURE__ */ e(
    pn,
    {
      ...o,
      placement: n ?? (d && d === "right" ? "bottomRight" : "bottomLeft"),
      panelClassName: g(
        t ? "min-w-[220px] p-3 text-xs text-[var(--abc-fg)]" : void 0,
        s
      ),
      content: t ? /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ e("div", { className: "mb-2 border-b border-[var(--abc-border-subtle)] pb-1.5 font-semibold text-[var(--abc-fg)]", children: t }),
        /* @__PURE__ */ e("div", { children: r })
      ] }) : r
    }
  );
}, _c = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, Ao = ({
  label: t,
  htmlFor: r,
  required: a = !1,
  tooltip: n,
  error: s,
  helperText: o,
  extra: d,
  layout: c = "vertical",
  size: u,
  motion: l,
  className: b,
  children: m
}) => {
  const h = Be(u, "sm"), f = Ie(l);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": f,
      className: g(
        c === "horizontal" ? "grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4" : "flex flex-col gap-1.5",
        b
      ),
      children: [
        (t || d) && /* @__PURE__ */ i(
          "div",
          {
            className: g(
              "flex items-center justify-between gap-2",
              c === "horizontal" && "sm:pt-2"
            ),
            children: [
              t && /* @__PURE__ */ i(
                "label",
                {
                  htmlFor: r,
                  className: g(
                    "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
                    _c[h]
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { children: t }),
                    a && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" }),
                    n && /* @__PURE__ */ e(er, { content: n, children: /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5 cursor-help text-[var(--abc-fg-muted)]" }) })
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
}, Wm = at.forwardRef(
  ({ className: t, size: r = "sm", required: a, children: n, ...s }, o) => /* @__PURE__ */ i(
    "label",
    {
      ref: o,
      className: g(
        "inline-flex items-center gap-1 font-medium text-[var(--abc-fg-secondary)] select-none",
        _c[r] || "text-xs",
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
Wm.displayName = "Label";
const Km = ve.forwardRef(
  ({
    className: t,
    containerClassName: r,
    wrapperClassName: a,
    onClear: n,
    clearLabel: s = "清空搜索",
    size: o = "sm",
    ...d
  }, c) => /* @__PURE__ */ e("div", { className: g("relative block min-w-[200px]", r, a), children: /* @__PURE__ */ e(
    pt,
    {
      ref: c,
      size: o,
      allowClear: !!n,
      onClear: n,
      prefix: /* @__PURE__ */ e(
        Ot,
        {
          className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)] shrink-0",
          "aria-hidden": "true"
        }
      ),
      className: g("text-xs", t),
      ...d
    }
  ) })
);
Km.displayName = "SearchInput";
const Ci = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, _i = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-3.5 w-3.5"
}, Hm = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-sm"
}, za = at.forwardRef(
  ({
    id: t,
    checked: r,
    defaultChecked: a = !1,
    indeterminate: n = !1,
    onChange: s,
    disabled: o = !1,
    size: d,
    motion: c,
    label: u,
    description: l,
    className: b,
    ...m
  }, h) => {
    const f = Be(d, "sm"), p = Ie(c), x = Tt(), w = t || x, k = ce(null);
    es(h, () => k.current, []);
    const [v, C] = _r({
      value: r,
      defaultValue: a
    });
    ge(() => {
      k.current && (k.current.indeterminate = !!n);
    }, [n]);
    const L = !!(u || l);
    return /* @__PURE__ */ i(
      "label",
      {
        htmlFor: w,
        "data-motion": p,
        className: g(
          "inline-flex text-[var(--abc-fg-secondary)] select-none",
          Hm[f],
          L ? "items-start gap-2" : "items-center justify-center",
          o ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          b
        ),
        children: [
          /* @__PURE__ */ i(
            "span",
            {
              className: g(
                "relative inline-flex shrink-0 items-center justify-center",
                Ci[f],
                L && "mt-0.5"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    ...m,
                    ref: k,
                    id: w,
                    type: "checkbox",
                    checked: v,
                    disabled: o,
                    onChange: (D) => {
                      if (o) return;
                      const j = D.target.checked;
                      C(j), s == null || s(j, D);
                    },
                    className: "peer sr-only"
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: g(
                      "flex items-center justify-center rounded-[var(--abc-radius-xs)] border abc-motion-control",
                      Ci[f],
                      "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--abc-ring)]",
                      v || n ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                    ),
                    children: n ? /* @__PURE__ */ e(ss, { className: g(_i[f], "stroke-[2.5] abc-motion-pop") }) : v && /* @__PURE__ */ e(Nt, { className: g(_i[f], "stroke-[2.5] abc-motion-pop") })
                  }
                )
              ]
            }
          ),
          L && /* @__PURE__ */ i("span", { className: "flex flex-col", children: [
            u && /* @__PURE__ */ e("span", { className: "font-medium text-[var(--abc-fg)]", children: u }),
            l && /* @__PURE__ */ e("span", { className: "text-[11px] text-[var(--abc-fg-muted)]", children: l })
          ] })
        ]
      }
    );
  }
);
za.displayName = "Checkbox";
const Um = {
  xs: "h-4 w-7",
  sm: "h-4.5 w-8",
  md: "h-5.5 w-10",
  lg: "h-6.5 w-12"
}, Vm = {
  xs: "h-3 w-3 translate-x-3",
  sm: "h-3.5 w-3.5 translate-x-3.5",
  md: "h-4.5 w-4.5 translate-x-4.5",
  lg: "h-5.5 w-5.5 translate-x-5.5"
}, Gm = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-3.5 w-3.5 translate-x-0.5",
  md: "h-4.5 w-4.5 translate-x-0.5",
  lg: "h-5.5 w-5.5 translate-x-0.5"
}, cr = ({
  checked: t,
  defaultChecked: r = !1,
  onChange: a,
  disabled: n = !1,
  loading: s = !1,
  size: o,
  motion: d,
  checkedLabel: c,
  uncheckedLabel: u,
  checkedChildren: l,
  unCheckedChildren: b,
  ariaLabel: m,
  className: h
}) => {
  const p = Be(o === "small" ? "sm" : o === "default" ? "md" : o, "md"), x = Ie(d), [w, k] = _r({
    value: t,
    defaultValue: r,
    onChange: a
  }), v = !!(n || s), C = c ?? l, L = u ?? b;
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
        v || k(!w);
      },
      className: g(
        "relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors duration-[var(--abc-motion-base,220ms)] cursor-pointer select-none abc-motion-control",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        Um[p],
        w ? "bg-[var(--abc-primary)]" : "bg-[var(--abc-border-strong)]",
        h
      ),
      children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              transitionDuration: "var(--abc-motion-base, 220ms)",
              transitionTimingFunction: "var(--abc-ease-active, cubic-bezier(0.16, 1, 0.3, 1))"
            },
            className: g(
              "pointer-events-none inline-flex items-center justify-center rounded-full bg-white shadow-xs transition-transform",
              w ? Vm[p] : Gm[p]
            ),
            children: s && /* @__PURE__ */ e(br, { className: "h-2.5 w-2.5 animate-spin text-[var(--abc-primary)]" })
          }
        ),
        (C || L) && /* @__PURE__ */ e("span", { className: "sr-only", children: w ? C : L })
      ]
    }
  );
}, Ym = {
  xs: "p-0.5 gap-0.5",
  sm: "p-0.5 gap-0.5",
  md: "p-1 gap-1",
  lg: "p-1 gap-1"
}, qm = {
  xs: "px-2 py-0.5 text-[11px]",
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm"
}, Xm = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4.5 w-4.5",
  lg: "h-5 w-5"
}, Zm = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5"
}, Jm = {
  xs: "text-xs gap-1.5",
  sm: "text-xs gap-2",
  md: "text-sm gap-2",
  lg: "text-sm gap-2.5"
}, Dr = ({
  options: t,
  value: r,
  defaultValue: a,
  onChange: n,
  variant: s = "default",
  size: o,
  motion: d,
  disabled: c = !1,
  className: u
}) => {
  var f;
  const l = Be(o, "sm"), b = Ie(d), [m, h] = _r({
    value: r,
    defaultValue: a ?? ((f = t[0]) == null ? void 0 : f.value) ?? "",
    onChange: n
  });
  return s === "segmented" ? /* @__PURE__ */ e(
    "div",
    {
      role: "radiogroup",
      "data-motion": b,
      className: g(
        "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        Ym[l],
        u
      ),
      children: t.map((p) => {
        const x = String(m) === String(p.value), w = !!(c || p.disabled);
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": x,
            disabled: w,
            onClick: () => h(p.value),
            className: g(
              "rounded-[var(--abc-radius-sm)] font-medium cursor-pointer select-none abc-motion-control",
              qm[l],
              x ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]",
              w && "opacity-45 cursor-not-allowed"
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
      "data-motion": b,
      className: g("inline-flex flex-wrap items-center gap-4", u),
      children: t.map((p) => {
        const x = String(m) === String(p.value), w = !!(c || p.disabled);
        return /* @__PURE__ */ i(
          "label",
          {
            className: g(
              "inline-flex items-center text-[var(--abc-fg-secondary)] select-none",
              Jm[l],
              w ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "radio",
                  checked: x,
                  disabled: w,
                  onChange: () => h(p.value),
                  className: "peer sr-only"
                }
              ),
              /* @__PURE__ */ e(
                "span",
                {
                  className: g(
                    "flex items-center justify-center rounded-full border abc-motion-control",
                    Xm[l],
                    x ? "border-[var(--abc-primary)]" : "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
                  ),
                  children: x && /* @__PURE__ */ e(
                    "span",
                    {
                      className: g(
                        "rounded-full bg-[var(--abc-primary)] abc-motion-pop",
                        Zm[l]
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
}, Qm = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, ef = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  default: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, tf = 40, Ii = 6;
function Ti(t, r) {
  return Array.isArray(t) ? t.filter((a) => a != null) : t != null && t !== "" ? r ? [t] : [t] : [];
}
function Ws(t) {
  return t.rawLabel !== void 0 && t.rawLabel !== null && t.rawLabel !== "" ? t.rawLabel : t.title;
}
const Ic = at.forwardRef(
  ({
    treeData: t = [],
    fieldNames: r,
    treeDataSimpleMode: a = !1,
    loadData: n,
    treeLoadedKeys: s,
    value: o,
    defaultValue: d,
    onChange: c,
    onValueChange: u,
    multiple: l = !1,
    treeCheckable: b = !1,
    treeCheckStrictly: m = !1,
    showCheckedStrategy: h,
    selectableLeafOnly: f = !1,
    maxTagCount: p,
    treeDefaultExpandAll: x = !1,
    treeDefaultExpandedKeys: w,
    treeExpandedKeys: k,
    onTreeExpand: v,
    showToolbar: C,
    searchable: L,
    showSearch: D,
    searchValue: j,
    onSearch: S,
    searchPlaceholder: y = "搜索节点或输入拼音首字母...",
    treeNodeFilterProp: T = "both",
    virtual: _ = !0,
    listHeight: R = 280,
    itemHeight: A = 30,
    label: z,
    error: K,
    invalid: E = !1,
    helperText: I,
    required: P = !1,
    placeholder: H = "请选择",
    allowClear: O,
    clearable: G,
    disabled: Y = !1,
    id: ie,
    name: V,
    size: re,
    motion: te,
    className: le,
    wrapperClassName: oe,
    dropdownClassName: Ae,
    matchWidth: F = !0,
    portalContainer: Z,
    container: Re,
    emptyText: Ue = "暂无匹配节点",
    "aria-label": he,
    "aria-describedby": Se,
    ...Fe
  }, Le) => {
    var wn, ea;
    const nt = Be(re === "ghost" ? "sm" : re, "sm"), we = Ie(te), J = Tt(), me = ie || `abc-treeselect-${J}`, ze = `${me}-tree`, rt = `${me}-feedback`, nr = typeof process < "u" && ((wn = process.env) == null ? void 0 : wn.NODE_ENV) === "test" || typeof import.meta < "u" && !1, bt = !!b, ht = !!(l || bt), Wt = h ?? (bt && !m ? "SHOW_PARENT" : "SHOW_ALL"), _t = !!(L ?? D), Pr = !!(O ?? G), wr = !!(E || K), mr = C ?? (ht || _t), Ce = se(
      () => Zu(t, {
        fieldNames: r,
        treeDataSimpleMode: a
      }),
      [t, r, a]
    ), st = o !== void 0, [$t, fr] = $(() => d !== void 0 ? d : ht ? [] : ""), Yt = st ? o : $t, ct = se(
      () => Ti(Yt, ht),
      [Yt, ht]
    ), Je = se(() => bt ? Ju(
      Ce.treeNodes,
      ct,
      m
    ) : {
      checkedKeys: ct,
      halfCheckedKeys: []
    }, [bt, Ce.treeNodes, ct, m]), Ge = se(
      () => new Set(Je.checkedKeys.map((U) => String(U))),
      [Je.checkedKeys]
    ), Ye = se(
      () => new Set(Je.halfCheckedKeys.map((U) => String(U))),
      [Je.halfCheckedKeys]
    ), Rt = se(() => ht ? bt ? bi(
      Ce.treeNodes,
      Je.checkedKeys,
      Wt,
      m
    ) : ct : ct.slice(0, 1), [
      ht,
      bt,
      ct,
      Ce.treeNodes,
      Je.checkedKeys,
      Wt,
      m
    ]), jt = se(
      () => Rt.map((U) => {
        const ke = Ce.nodeMap.get(String(U)), De = ke ? Ws(ke) : String(U), Me = ke ? ke.title : typeof De == "string" || typeof De == "number" ? String(De) : ln(De) || String(U);
        return {
          key: U,
          keyStr: String(U),
          node: ke,
          label: De,
          title: Me
        };
      }),
      [Rt, Ce.nodeMap]
    ), Xe = k !== void 0, [Ve, qt] = $(
      () => w && w.length > 0 ? w : x ? Ra(Ce.treeNodes) : []
    ), Ir = ce(
      !!(w != null && w.length) || Ce.treeNodes.length > 0
    );
    ge(() => {
      Xe || !x || !Ir.current && Ce.treeNodes.length > 0 && (Ir.current = !0, qt(Ra(Ce.treeNodes)));
    }, [Xe, x, Ce.treeNodes]);
    const [q, de] = $(() => /* @__PURE__ */ new Set()), [je, lt] = $(() => /* @__PURE__ */ new Set()), ft = se(() => s !== void 0 ? new Set(s.map((U) => String(U))) : q, [s, q]), [dt, it] = $(!1), [It, yt] = $(""), sr = j !== void 0 ? j : It, [Lt, Kt] = $(0), [zr, pr] = $(0), { isMounted: Tr, isVisible: Jr } = ia(
      dt,
      we === "none" || nr ? 0 : 140
    ), Mr = ce(null), or = ce(null), Or = ce(null), Qr = ce(null), Ht = ce(null), Nr = ce({}), $r = ue(
      (U) => {
        or.current = U, typeof Le == "function" ? Le(U) : Le && (Le.current = U);
      },
      [Le]
    ), { style: ya, actualSide: Fr, portalContainer: Ft } = Ha({
      open: Tr,
      triggerRef: or,
      floatingRef: Or,
      placement: "bottomLeft",
      offset: 6,
      matchWidth: F
    }), B = Z ?? Re ?? Ft, { filteredNodes: Q, autoExpandedKeys: fe } = se(
      () => Qu(Ce.treeNodes, sr, T),
      [Ce.treeNodes, sr, T]
    ), be = Xe ? k : Ve, pe = se(() => {
      const U = new Set(be.map((ke) => String(ke)));
      return sr.trim() && fe.forEach((ke) => U.add(String(ke))), U;
    }, [be, sr, fe]), ne = ue(
      (U) => !!(U.children && U.children.length > 0 || n && U.isLeaf !== !0 && !ft.has(String(U.key))),
      [n, ft]
    ), ae = se(
      () => eb(Q, pe, ne),
      [Q, pe, ne]
    ), Ne = ue(
      (U) => !ne(U),
      [ne]
    ), qe = ue(
      (U) => U.disabled ? !0 : bt ? U.checkable === !1 : !!(U.selectable === !1 || f && !Ne(U)),
      [bt, f, Ne]
    ), Pe = ue(
      (U) => {
        Xe || qt(U), v == null || v(U);
      },
      [Xe, v]
    ), Oe = ue(
      async (U) => {
        const ke = String(U.key);
        if (pe.has(ke)) {
          Pe(be.filter((Me) => String(Me) !== ke));
          return;
        }
        if (n && (!U.children || U.children.length === 0) && U.isLeaf !== !0 && !ft.has(ke)) {
          if (je.has(ke)) return;
          lt((Me) => {
            const He = new Set(Me);
            return He.add(ke), He;
          });
          try {
            await n(U), s === void 0 && de((Me) => {
              const He = new Set(Me);
              return He.add(ke), He;
            });
          } finally {
            lt((Me) => {
              const He = new Set(Me);
              return He.delete(ke), He;
            });
          }
        }
        Pe([...be, U.key]);
      },
      [
        pe,
        be,
        Pe,
        n,
        ft,
        je,
        s
      ]
    ), Qe = ue(
      (U, ke = {}) => {
        st || fr(U);
        const Me = Ti(U, ht).map((He) => {
          const et = Ce.nodeMap.get(String(He));
          return et ? Ws(et) : String(He);
        });
        u == null || u(U), c == null || c(U, Me, ke);
      },
      [st, ht, Ce.nodeMap, u, c]
    ), Mt = ue(
      (U, ke) => {
        if (U.disabled || U.checkable === !1) return;
        const De = String(U.key), Me = Ge.has(De), He = ke !== void 0 ? ke : !Me, et = lc(
          Ce.treeNodes,
          Je.checkedKeys,
          U,
          He,
          m
        ), mt = bi(
          Ce.treeNodes,
          et.checkedKeys,
          Wt,
          m
        );
        Qe(mt, {
          triggerNode: U,
          checked: He,
          halfCheckedKeys: et.halfCheckedKeys
        });
      },
      [
        Ge,
        Ce.treeNodes,
        Je.checkedKeys,
        m,
        Wt,
        Qe
      ]
    ), kt = ue(
      (U) => {
        var ke;
        if (!U.disabled) {
          if (bt) {
            if (U.checkable === !1) {
              ne(U) && Oe(U);
              return;
            }
            Mt(U);
            return;
          }
          if (f && !Ne(U)) {
            Oe(U);
            return;
          }
          if (U.selectable === !1) {
            ne(U) && Oe(U);
            return;
          }
          if (ht) {
            const De = String(U.key), Me = ct.some((et) => String(et) === De), He = Me ? ct.filter((et) => String(et) !== De) : [...ct, U.value];
            Qe(He, { triggerNode: U, checked: !Me });
            return;
          }
          Qe(U.value, { triggerNode: U, checked: !0 }), it(!1), (ke = or.current) == null || ke.focus();
        }
      },
      [
        bt,
        ne,
        Oe,
        Mt,
        f,
        Ne,
        ht,
        ct,
        Qe
      ]
    );
    ge(() => {
      if (!dt) {
        j === void 0 && yt(""), pr(0);
        return;
      }
      const U = (De) => {
        var He, et;
        const Me = De.target;
        Me && ((He = Mr.current) != null && He.contains(Me) || (et = Or.current) != null && et.contains(Me) || it(!1));
      }, ke = (De) => {
        var Me;
        De.key === "Escape" && (De.preventDefault(), De.stopPropagation(), it(!1), (Me = or.current) == null || Me.focus());
      };
      return document.addEventListener("mousedown", U), document.addEventListener("touchstart", U, { passive: !0 }), document.addEventListener("keydown", ke, !0), () => {
        document.removeEventListener("mousedown", U), document.removeEventListener("touchstart", U), document.removeEventListener("keydown", ke, !0);
      };
    }, [dt, j]), ge(() => {
      if (ae.length === 0) {
        Lt !== 0 && Kt(0);
        return;
      }
      Lt >= ae.length && Kt(ae.length - 1);
    }, [ae.length, Lt]);
    const ye = _ && ae.length > tf;
    ge(() => {
      if (!dt || ae.length === 0) return;
      const U = Ht.current;
      if (!U) return;
      if (ye) {
        const et = Lt * A, mt = et + A;
        if (et < U.scrollTop)
          U.scrollTop = et, pr(et);
        else if (mt > U.scrollTop + R) {
          const kr = mt - R;
          U.scrollTop = kr, pr(kr);
        }
        return;
      }
      const ke = ae[Lt];
      if (!ke) return;
      const De = Nr.current[ke.keyStr];
      if (!De) return;
      const Me = De.offsetTop, He = Me + De.offsetHeight;
      Me < U.scrollTop ? U.scrollTop = Me : He > U.scrollTop + U.clientHeight && (U.scrollTop = He - U.clientHeight);
    }, [dt, Lt, ye, A, R, ae]);
    const ut = () => {
      if (Y) return;
      const U = new Set(ct.map((De) => String(De))), ke = ae.findIndex(
        (De) => !De.node.disabled && U.has(De.keyStr)
      );
      if (ke >= 0)
        Kt(ke);
      else {
        const De = ae.findIndex((Me) => !Me.node.disabled);
        Kt(De >= 0 ? De : 0);
      }
      it(!0);
    }, Ze = (U) => {
      var De;
      if (ae.length === 0) return;
      let ke = Lt;
      for (let Me = 0; Me < ae.length; Me++)
        if (ke = (ke + U + ae.length) % ae.length, !((De = ae[ke]) != null && De.node.disabled)) {
          Kt(ke);
          return;
        }
    }, wt = (U) => {
      var Me, He;
      if (Y) return;
      const ke = U.target === Qr.current;
      if (U.key === "Escape") {
        dt && (U.preventDefault(), U.stopPropagation(), it(!1), (Me = or.current) == null || Me.focus());
        return;
      }
      if (U.key === "Tab") {
        dt && it(!1);
        return;
      }
      if (!dt) {
        if (U.key === "ArrowDown" || U.key === "ArrowUp" || U.key === "Enter" || U.key === " ") {
          U.preventDefault(), ut();
          return;
        }
        if (U.key === "Backspace" && ht && jt.length > 0) {
          const et = jt[jt.length - 1];
          et && !((He = et.node) != null && He.disabled) && (U.preventDefault(), bt && et.node ? Mt(et.node, !1) : Qe(ct.filter((mt) => String(mt) !== et.keyStr)));
        }
        return;
      }
      if (U.key === "ArrowDown") {
        U.preventDefault(), Ze(1);
        return;
      }
      if (U.key === "ArrowUp") {
        U.preventDefault(), Ze(-1);
        return;
      }
      const De = ae[Lt];
      if (De) {
        if (U.key === "ArrowRight" && !ke) {
          U.preventDefault(), De.hasChildren && !De.isExpanded ? Oe(De.node) : De.hasChildren && De.isExpanded && Ze(1);
          return;
        }
        if (U.key === "ArrowLeft" && !ke) {
          if (U.preventDefault(), De.hasChildren && De.isExpanded)
            Oe(De.node);
          else if (De.parentKey !== null) {
            const et = String(De.parentKey), mt = ae.findIndex((kr) => kr.keyStr === et);
            mt >= 0 && Kt(mt);
          }
          return;
        }
        (U.key === "Enter" || U.key === " " && !ke) && (U.preventDefault(), kt(De.node));
      }
    }, gt = p === "responsive" ? 3 : typeof p == "number" && p >= 0 ? p : Number.POSITIVE_INFINITY, Ke = ht ? jt.slice(0, gt) : jt, St = ht ? jt.slice(gt) : [], vt = ae.length * A, Xt = ye ? Math.max(0, Math.floor(zr / A) - Ii) : 0, wa = ye ? Math.ceil(R / A) + Ii * 2 : ae.length, Na = ye ? Math.min(ae.length, Xt + wa) : ae.length, Zt = ye ? ae.slice(Xt, Na) : ae, ms = [
      Se,
      K || I ? rt : void 0
    ].filter(Boolean).join(" "), ka = (U, ke, De) => {
      const { node: Me, keyStr: He, depth: et, posInSet: mt, setSize: kr, hasChildren: Wr, isExpanded: Sa } = U, Jt = je.has(He), Va = ke === Lt, Dt = bt ? Ge.has(He) : ct.some((Bt) => String(Bt) === He), ir = bt && Ye.has(He), Ut = qe(Me);
      return /* @__PURE__ */ i(
        "div",
        {
          ref: (Bt) => {
            Nr.current[He] = Bt;
          },
          role: "treeitem",
          "aria-level": et + 1,
          "aria-posinset": mt,
          "aria-setsize": kr,
          "aria-expanded": Wr ? Sa : void 0,
          "aria-selected": bt ? void 0 : Dt,
          "aria-checked": bt && Me.checkable !== !1 ? ir ? "mixed" : Dt : void 0,
          "aria-disabled": Me.disabled || void 0,
          "data-testid": `tree-select-node-${He}`,
          "data-active": Va ? "true" : void 0,
          style: {
            paddingLeft: `${et * 18 + 8}px`,
            paddingRight: "8px",
            ...De
          },
          onMouseEnter: () => {
            Me.disabled || Kt(ke);
          },
          onMouseDown: (Bt) => Bt.stopPropagation(),
          onClick: (Bt) => {
            Bt.preventDefault(), Bt.stopPropagation(), kt(Me);
          },
          className: g(
            "flex items-center gap-1.5 rounded-[var(--abc-radius-sm)] text-xs transition-colors",
            !ye && "py-1.5",
            Me.disabled ? "opacity-45 cursor-not-allowed" : Ut && f && Wr ? "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]" : Dt && !bt ? "cursor-pointer bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : Va ? "cursor-pointer bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "cursor-pointer text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: [
            Wr ? /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "data-testid": `tree-select-expand-${He}`,
                "aria-label": Sa ? `收起 ${Me.title}` : `展开 ${Me.title}`,
                onClick: (Bt) => {
                  Bt.stopPropagation(), Oe(Me);
                },
                className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: Jt ? /* @__PURE__ */ e(br, { className: "h-3 w-3 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }) : /* @__PURE__ */ e(
                  vr,
                  {
                    className: g(
                      "h-3.5 w-3.5 transition-transform duration-150",
                      Sa && "rotate-90"
                    ),
                    "aria-hidden": "true"
                  }
                )
              }
            ) : /* @__PURE__ */ e("span", { className: "inline-block h-4 w-4 shrink-0", "aria-hidden": "true" }),
            bt && Me.checkable !== !1 && /* @__PURE__ */ e(
              "span",
              {
                className: "inline-flex shrink-0 items-center",
                onClick: (Bt) => Bt.stopPropagation(),
                onMouseDown: (Bt) => Bt.stopPropagation(),
                children: /* @__PURE__ */ e(
                  za,
                  {
                    size: "xs",
                    tabIndex: -1,
                    "aria-label": Me.title,
                    disabled: Me.disabled,
                    checked: Dt,
                    indeterminate: ir,
                    onChange: (Bt) => Mt(Me, Bt)
                  }
                )
              }
            ),
            /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate", children: Ws(Me) }),
            Me.badge !== void 0 && /* @__PURE__ */ e("span", { className: "shrink-0 rounded-full bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)]", children: Me.badge }),
            !bt && Dt && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-primary)]", "aria-hidden": "true" })
          ]
        },
        He
      );
    };
    return /* @__PURE__ */ i(
      "div",
      {
        ref: Mr,
        "data-slot": "tree-select-wrapper",
        className: g("w-full", oe),
        children: [
          z && /* @__PURE__ */ i(
            "label",
            {
              htmlFor: me,
              className: "mb-1.5 inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-fg-secondary)] select-none",
              children: [
                /* @__PURE__ */ e("span", { children: z }),
                P && /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "text-[var(--abc-danger)]", children: "*" })
              ]
            }
          ),
          V && /* @__PURE__ */ e(
            "input",
            {
              type: "hidden",
              name: V,
              value: ht ? Rt.join(",") : String(ct[0] ?? "")
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              ref: $r,
              ...Fe,
              id: me,
              role: "combobox",
              tabIndex: Y ? -1 : 0,
              "aria-expanded": dt,
              "aria-haspopup": "tree",
              "aria-controls": Tr ? ze : void 0,
              "aria-invalid": wr || void 0,
              "aria-describedby": ms || void 0,
              "aria-disabled": Y || void 0,
              "aria-label": he || (typeof z == "string" ? z : H),
              "data-slot": "tree-select-trigger",
              "data-state": dt ? "open" : "closed",
              "data-motion": we,
              onKeyDown: wt,
              onClick: (U) => {
                U.stopPropagation(), !Y && (dt ? it(!1) : ut());
              },
              className: g(
                "flex items-center justify-between gap-1.5 cursor-pointer select-none abc-motion-control",
                re === "ghost" ? "h-auto w-auto border-transparent bg-transparent p-0 text-xs text-[var(--abc-fg)] shadow-none focus:outline-none" : g(
                  "w-full px-2.5 py-1",
                  Zr,
                  ht ? ef[nt] : Qm[nt],
                  dt && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
                  wr && "border-[var(--abc-danger)]",
                  Y && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]"
                ),
                le
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1", children: jt.length === 0 ? /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg-placeholder)]", children: H }) : ht ? /* @__PURE__ */ i(tt, { children: [
                  Ke.map((U) => {
                    var ke;
                    return /* @__PURE__ */ i(
                      "span",
                      {
                        "data-testid": "tree-select-tag",
                        className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]",
                        children: [
                          /* @__PURE__ */ e("span", { className: "max-w-32 truncate", children: U.label }),
                          !Y && !((ke = U.node) != null && ke.disabled) && /* @__PURE__ */ e(
                            "button",
                            {
                              type: "button",
                              "aria-label": `移除 ${U.title}`,
                              onClick: (De) => {
                                De.stopPropagation(), bt && U.node ? Mt(U.node, !1) : Qe(
                                  ct.filter((Me) => String(Me) !== U.keyStr)
                                );
                              },
                              className: "inline-flex items-center justify-center rounded-full hover:opacity-75 cursor-pointer",
                              children: /* @__PURE__ */ e(Ct, { className: "h-2.5 w-2.5", "aria-hidden": "true" })
                            }
                          )
                        ]
                      },
                      U.keyStr
                    );
                  }),
                  St.length > 0 && /* @__PURE__ */ i(
                    "span",
                    {
                      "data-testid": "tree-select-max-tag",
                      title: St.map((U) => U.title).join("、"),
                      className: "inline-flex items-center rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)]",
                      children: [
                        "+",
                        St.length
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ e("span", { className: "truncate text-[var(--abc-fg)]", children: (ea = jt[0]) == null ? void 0 : ea.label }) }),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[var(--abc-fg-muted)]", children: [
                  Pr && jt.length > 0 && !Y && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "data-testid": "tree-select-clear",
                      "aria-label": "清空",
                      onClick: (U) => {
                        U.stopPropagation(), Qe(ht ? [] : "");
                      },
                      className: "rounded-full p-0.5 hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    lr,
                    {
                      className: g(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        dt && "rotate-180"
                      ),
                      "aria-hidden": "true"
                    }
                  )
                ] })
              ]
            }
          ),
          Tr && B && xr(
            /* @__PURE__ */ i(
              "div",
              {
                ref: Or,
                "data-slot": "tree-select-popover",
                "data-abc-floating": "",
                "data-motion": we,
                "data-placement": Fr,
                onMouseDown: (U) => U.stopPropagation(),
                style: ya,
                className: g(
                  "z-[1500] max-w-[min(520px,calc(100vw-16px))] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
                  F ? "min-w-full" : "min-w-[240px]",
                  Jr ? "abc-animate-popover-in" : "abc-animate-popover-out",
                  Ae
                ),
                children: [
                  (_t || mr) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                    _t ? /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                      /* @__PURE__ */ e(
                        Ot,
                        {
                          className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]",
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ e(
                        "input",
                        {
                          ref: Qr,
                          type: "text",
                          autoFocus: !0,
                          "data-testid": "tree-select-search-input",
                          value: sr,
                          onClick: (U) => U.stopPropagation(),
                          onKeyDown: wt,
                          onChange: (U) => {
                            const ke = U.target.value;
                            j === void 0 && yt(ke), S == null || S(ke), Kt(0), pr(0), Ht.current && (Ht.current.scrollTop = 0);
                          },
                          placeholder: y,
                          className: "w-full bg-transparent text-xs text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                        }
                      )
                    ] }) : /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 text-[11px] font-medium text-[var(--abc-fg-muted)]", children: [
                      /* @__PURE__ */ e(Ji, { className: "h-3 w-3", "aria-hidden": "true" }),
                      /* @__PURE__ */ e("span", { children: "节点结构" })
                    ] }),
                    mr && Ce.treeNodes.length > 0 && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1 text-[11px]", children: [
                      /* @__PURE__ */ e(
                        "button",
                        {
                          type: "button",
                          "data-testid": "tree-select-expand-all",
                          onClick: (U) => {
                            U.stopPropagation(), Pe(Ra(Ce.treeNodes));
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
                            U.stopPropagation(), Pe([]);
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
                      ref: Ht,
                      id: ze,
                      role: "tree",
                      "aria-label": he || (typeof z == "string" ? z : "树形选项列表"),
                      "aria-multiselectable": ht || void 0,
                      "data-tree-scroll-host": "",
                      "data-virtual": ye ? "true" : "false",
                      onScroll: (U) => {
                        ye && pr(U.currentTarget.scrollTop);
                      },
                      style: { maxHeight: `${R}px` },
                      className: "overflow-y-auto p-1",
                      children: ae.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: Ue }) : ye ? /* @__PURE__ */ e(
                        "div",
                        {
                          "data-testid": "tree-select-virtual-spacer",
                          style: {
                            height: `${vt}px`,
                            position: "relative"
                          },
                          children: Zt.map((U, ke) => {
                            const De = Xt + ke;
                            return ka(U, De, {
                              position: "absolute",
                              top: `${De * A}px`,
                              left: 0,
                              right: 0,
                              height: `${A}px`
                            });
                          })
                        }
                      ) : Zt.map((U, ke) => ka(U, ke))
                    }
                  )
                ]
              }
            ),
            B
          ),
          K && /* @__PURE__ */ e("p", { id: rt, className: "mt-1 text-xs text-[var(--abc-danger)]", children: K }),
          I && !K && /* @__PURE__ */ e("p", { id: rt, className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: I })
        ]
      }
    );
  }
);
Ic.displayName = "TreeSelect";
const hn = Object.assign(Ic, {
  SHOW_ALL: "SHOW_ALL",
  SHOW_PARENT: "SHOW_PARENT",
  SHOW_CHILD: "SHOW_CHILD"
});
function Eh({
  triggerClassName: t,
  contentClassName: r,
  ...a
}) {
  return /* @__PURE__ */ e(
    hn,
    {
      ...a,
      className: t,
      dropdownClassName: r
    }
  );
}
const Tc = ["日", "一", "二", "三", "四", "五", "六"], Mc = {
  xs: "h-[var(--abc-control-h-xs)] text-xs",
  sm: "h-[var(--abc-control-h-sm)] text-xs",
  default: "h-[var(--abc-control-h-sm)] text-xs",
  md: "h-[var(--abc-control-h-md)] text-sm",
  lg: "h-[var(--abc-control-h-lg)] text-sm"
}, gn = at.forwardRef(
  ({
    value: t,
    defaultValue: r = "",
    onChange: a,
    placeholder: n = "请选择日期",
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: u = !0,
    id: l,
    name: b,
    minDate: m,
    maxDate: h,
    size: f,
    motion: p,
    className: x
  }, w) => {
    const k = Be(f, "sm"), v = Ie(p), C = Tt(), L = l || C, D = ce(null), j = ce(null);
    es(w, () => D.current, []);
    const S = t !== void 0, [y, T] = $(r), _ = S ? t ?? "" : y, [R, A] = $(!1), [z, K] = $({ top: 0, left: 0 }), [E, I] = $(
      () => _ && $e(_).isValid() ? $e(_) : $e()
    ), H = !!((s ?? o ?? !0) && _ && !d);
    ge(() => {
      R && I(
        _ && $e(_).isValid() ? $e(_) : $e()
      );
    }, [R, _]);
    const O = se(() => u === !1 ? [] : Array.isArray(u) ? u : [
      { label: "今天", value: () => $e().format(c) },
      { label: "昨天", value: () => $e().subtract(1, "day").format(c) },
      { label: "明天", value: () => $e().add(1, "day").format(c) },
      { label: "一周前", value: () => $e().subtract(7, "day").format(c) }
    ], [u, c]);
    ge(() => {
      if (!R) return;
      const V = () => {
        if (!D.current || typeof window > "u") return;
        const re = D.current.getBoundingClientRect(), te = O.length > 0 ? 340 : 300, le = 280, Ae = window.innerHeight - re.bottom < te && re.top > te ? re.top - te - 4 : re.bottom + 4;
        let F = re.left;
        F + le > window.innerWidth - 8 && (F = Math.max(8, window.innerWidth - le - 8)), K({ top: Math.max(8, Ae), left: Math.max(8, F) });
      };
      return V(), window.addEventListener("resize", V), window.addEventListener("scroll", V, !0), () => {
        window.removeEventListener("resize", V), window.removeEventListener("scroll", V, !0);
      };
    }, [R, O.length]), ge(() => {
      if (!R) return;
      const V = (te) => {
        var oe, Ae;
        const le = te.target;
        (oe = D.current) != null && oe.contains(le) || (Ae = j.current) != null && Ae.contains(le) || A(!1);
      }, re = (te) => {
        te.key === "Escape" && (te.preventDefault(), te.stopPropagation(), A(!1));
      };
      return document.addEventListener("mousedown", V), document.addEventListener("keydown", re, !0), () => {
        document.removeEventListener("mousedown", V), document.removeEventListener("keydown", re, !0);
      };
    }, [R]);
    const G = (V) => {
      S || T(V), a == null || a(V);
    }, Y = se(
      () => Zs(E.year(), E.month()),
      [E]
    ), ie = se(() => {
      if (!_) return "";
      const V = $e(_);
      return V.isValid() ? V.format("YYYY-MM-DD") : _;
    }, [_]);
    return /* @__PURE__ */ i(tt, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: D,
          id: L,
          "data-datepicker-trigger": "",
          "data-motion": v,
          role: "combobox",
          "aria-expanded": R,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && A((V) => !V),
          onKeyDown: (V) => {
            !d && (V.key === "Enter" || V.key === " ") && (V.preventDefault(), A((re) => !re));
          },
          className: g(
            "relative flex w-full items-center gap-2 px-2.5 cursor-pointer select-none abc-motion-control",
            Zr,
            Mc[k],
            R && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            x
          ),
          children: [
            /* @__PURE__ */ e(po, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
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
            H && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期",
                onClick: (V) => {
                  V.stopPropagation(), G("");
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      R && typeof document < "u" && xr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: j,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": v,
            "aria-label": "日期选择面板",
            style: { top: z.top, left: z.left },
            className: "fixed z-[1300] w-[280px] rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              O.length > 0 && /* @__PURE__ */ e("div", { className: "mb-2.5 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2", children: O.map((V) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const re = typeof V.value == "function" ? V.value() : V.value;
                    G(re), A(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: V.label
                },
                V.label
              )) }),
              /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一年",
                      onClick: () => I((V) => V.subtract(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(ac, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "上一月",
                      onClick: () => I((V) => V.subtract(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Wn, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: E.format("YYYY 年 M 月") }),
                /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一月",
                      onClick: () => I((V) => V.add(1, "month")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "下一年",
                      onClick: () => I((V) => V.add(1, "year")),
                      className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(nc, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Tc.map((V) => /* @__PURE__ */ e("span", { className: "py-1", children: V }, V)) }),
              /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-0.5", children: Y.map((V) => {
                const re = $e(V.iso), te = c === "YYYY-MM-DD" ? V.iso : re.format(c), le = V.iso === ie, oe = !!(m && re.isBefore($e(m), "day") || h && re.isAfter($e(h), "day"));
                return /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": te,
                    disabled: oe,
                    onClick: () => {
                      oe || (G(te), A(!1));
                    },
                    className: g(
                      "h-7 rounded-[var(--abc-radius-xs)] font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
                      le ? "bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : V.inCurrentMonth ? "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "text-[var(--abc-fg-muted)]/50 hover:bg-[var(--abc-bg-subtle)]",
                      V.isToday && !le && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
                    ),
                    children: V.day
                  },
                  V.iso
                );
              }) })
            ]
          }
        ),
        is(D.current) ?? document.body
      )
    ] });
  }
);
gn.displayName = "DatePicker";
function Ks(t) {
  return t ? Array.isArray(t) ? { start: t[0] ?? "", end: t[1] ?? "" } : { start: t.start ?? "", end: t.end ?? "" } : { start: "", end: "" };
}
const vn = at.forwardRef(
  ({
    value: t,
    defaultValue: r,
    onChange: a,
    placeholder: n = ["开始日期", "结束日期"],
    allowClear: s,
    clearable: o,
    disabled: d = !1,
    format: c = "YYYY-MM-DD",
    shortcuts: u = !0,
    id: l,
    minDate: b,
    maxDate: m,
    size: h,
    motion: f,
    className: p
  }, x) => {
    const w = Be(h, "sm"), k = Ie(f), v = Tt(), C = l || v, L = ce(null), D = ce(null);
    es(x, () => L.current, []);
    const j = Array.isArray(t) || t === void 0 && Array.isArray(r), S = t !== void 0, [y, T] = $(
      () => Ks(r)
    ), _ = S ? Ks(t) : y, [R, A] = Array.isArray(n) ? [n[0] || "开始日期", n[1] || "结束日期"] : [n || "开始日期", n || "结束日期"], [z, K] = $(!1), [E, I] = $({ top: 0, left: 0 }), [P, H] = $(null), [O, G] = $(null), [Y, ie] = $(
      () => _.start && $e(_.start).isValid() ? $e(_.start) : $e()
    ), V = se(() => Y.add(1, "month"), [Y]), te = !!((s ?? o ?? !0) && (_.start || _.end) && !d);
    ge(() => {
      z ? (H(null), G(null), ie(
        _.start && $e(_.start).isValid() ? $e(_.start) : $e()
      )) : (H(null), G(null));
    }, [z, _.start]);
    const le = se(() => u === !1 ? [] : Array.isArray(u) ? u : [
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
    ], [u, c]);
    ge(() => {
      if (!z) return;
      const he = () => {
        if (!L.current || typeof window > "u") return;
        const Se = L.current.getBoundingClientRect(), Fe = le.length > 0 ? 370 : 330, Le = 556, we = window.innerHeight - Se.bottom < Fe && Se.top > Fe ? Se.top - Fe - 4 : Se.bottom + 4;
        let J = Se.left;
        J + Le > window.innerWidth - 8 && (J = Math.max(8, window.innerWidth - Le - 8)), I({ top: Math.max(8, we), left: Math.max(8, J) });
      };
      return he(), window.addEventListener("resize", he), window.addEventListener("scroll", he, !0), () => {
        window.removeEventListener("resize", he), window.removeEventListener("scroll", he, !0);
      };
    }, [z, le.length]), ge(() => {
      if (!z) return;
      const he = (Fe) => {
        var nt, we;
        const Le = Fe.target;
        (nt = L.current) != null && nt.contains(Le) || (we = D.current) != null && we.contains(Le) || K(!1);
      }, Se = (Fe) => {
        Fe.key === "Escape" && (Fe.preventDefault(), Fe.stopPropagation(), K(!1));
      };
      return document.addEventListener("mousedown", he), document.addEventListener("keydown", Se, !0), () => {
        document.removeEventListener("mousedown", he), document.removeEventListener("keydown", Se, !0);
      };
    }, [z]);
    const oe = (he) => {
      S || T(he), j ? a == null || a([he.start, he.end]) : a == null || a(he);
    }, Ae = se(() => {
      if (P) {
        const he = $e(P);
        if (!O) return { start: he, end: null };
        const Se = $e(O);
        return Se.isBefore(he, "day") ? { start: Se, end: he } : { start: he, end: Se };
      }
      return {
        start: _.start && $e(_.start).isValid() ? $e(_.start) : null,
        end: _.end && $e(_.end).isValid() ? $e(_.end) : null
      };
    }, [P, O, _]), F = se(
      () => Zs(Y.year(), Y.month()),
      [Y]
    ), Z = se(
      () => Zs(V.year(), V.month()),
      [V]
    ), Re = (he) => {
      const Se = $e(he), Fe = c === "YYYY-MM-DD" ? he : Se.format(c);
      if (!P) {
        H(Fe), G(null);
        return;
      }
      const Le = $e(P), [nt, we] = Se.isBefore(Le, "day") ? [Se, Le] : [Le, Se];
      oe({ start: nt.format(c), end: we.format(c) }), H(null), G(null), K(!1);
    }, Ue = (he, Se, Fe) => /* @__PURE__ */ i("div", { className: "w-[252px]", children: [
      /* @__PURE__ */ i("div", { className: "mb-2 flex items-center justify-between", children: [
        Fe === "left" ? /* @__PURE__ */ i("div", { className: "flex items-center gap-0.5", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一年",
              onClick: () => ie((Le) => Le.subtract(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(ac, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "上一月",
              onClick: () => ie((Le) => Le.subtract(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(Wn, { className: "h-3.5 w-3.5" })
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
              onClick: () => ie((Le) => Le.add(1, "month")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "下一年",
              onClick: () => ie((Le) => Le.add(1, "year")),
              className: "rounded-xs p-1 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
              children: /* @__PURE__ */ e(nc, { className: "h-3.5 w-3.5" })
            }
          )
        ] }) : /* @__PURE__ */ e("span", { className: "w-12" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-[var(--abc-fg-muted)]", children: Tc.map((Le) => /* @__PURE__ */ e("span", { className: "py-1", children: Le }, Le)) }),
      /* @__PURE__ */ e("div", { className: "mt-1 grid grid-cols-7 gap-y-0.5", children: Se.map((Le) => {
        const nt = $e(Le.iso), we = c === "YYYY-MM-DD" ? Le.iso : nt.format(c), J = !!(Ae.start && nt.isSame(Ae.start, "day")), me = !!(Ae.end && nt.isSame(Ae.end, "day")), ze = !!(Ae.start && Ae.end && nt.isAfter(Ae.start, "day") && nt.isBefore(Ae.end, "day")), rt = !!(b && nt.isBefore($e(b), "day") || m && nt.isAfter($e(m), "day"));
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": we,
            disabled: rt,
            onMouseEnter: () => P && G(we),
            onClick: () => !rt && Re(Le.iso),
            className: g(
              "h-7 font-mono text-xs tabular-nums transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed",
              J || me ? "rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary)] font-semibold text-[var(--abc-primary-fg)]" : ze ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : Le.inCurrentMonth ? "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]" : "rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)]/45 hover:bg-[var(--abc-bg-subtle)]",
              Le.isToday && !J && !me && "border border-[var(--abc-primary)] text-[var(--abc-primary)]"
            ),
            children: Le.day
          },
          `${Fe}-${Le.iso}`
        );
      }) })
    ] });
    return /* @__PURE__ */ i(tt, { children: [
      /* @__PURE__ */ i(
        "div",
        {
          ref: L,
          id: C,
          "data-daterangepicker-trigger": "",
          "data-motion": k,
          role: "combobox",
          "aria-expanded": z,
          "aria-haspopup": "dialog",
          tabIndex: d ? -1 : 0,
          onClick: () => !d && K((he) => !he),
          onKeyDown: (he) => {
            !d && (he.key === "Enter" || he.key === " ") && (he.preventDefault(), K((Se) => !Se));
          },
          className: g(
            "relative flex w-full items-center gap-1.5 px-2.5 cursor-pointer select-none abc-motion-control",
            Zr,
            Mc[w],
            z && "border-[var(--abc-primary)] ring-2 ring-[var(--abc-ring)]",
            d && "opacity-65 cursor-not-allowed bg-[var(--abc-bg-muted)]",
            p
          ),
          children: [
            /* @__PURE__ */ e(po, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                readOnly: !0,
                disabled: d,
                placeholder: R,
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
                placeholder: A,
                value: _.end,
                tabIndex: -1,
                className: "w-full min-w-0 bg-transparent p-0 text-center font-mono text-xs text-[var(--abc-fg)] tabular-nums placeholder:font-sans placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none cursor-pointer disabled:cursor-not-allowed truncate"
              }
            ),
            te && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "清空日期范围",
                onClick: (he) => {
                  he.stopPropagation(), oe({ start: "", end: "" });
                },
                className: "shrink-0 rounded-full p-0.5 text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              }
            )
          ]
        }
      ),
      z && typeof document < "u" && xr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: D,
            role: "dialog",
            "data-abc-floating": "",
            "data-motion": k,
            "aria-label": "日期范围选择面板",
            style: { top: E.top, left: E.left },
            className: "fixed z-[1300] max-w-[calc(100vw-16px)] overflow-x-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-3.5 shadow-[var(--abc-shadow-popover)] abc-animate-popover-in select-none",
            children: [
              le.length > 0 && /* @__PURE__ */ e("div", { className: "mb-3 flex flex-wrap items-center gap-1.5 border-b border-[var(--abc-border)] pb-2.5", children: le.map((he) => /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    const Se = he.getValue(), Fe = Ks(Se);
                    oe(Fe), H(null), G(null), K(!1);
                  },
                  className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-primary-soft)] hover:text-[var(--abc-primary)] cursor-pointer",
                  children: he.label
                },
                he.label
              )) }),
              /* @__PURE__ */ i("div", { className: "flex flex-col gap-4 sm:flex-row sm:divide-x sm:divide-[var(--abc-border)]", children: [
                /* @__PURE__ */ e("div", { children: Ue(Y, F, "left") }),
                /* @__PURE__ */ e("div", { className: "sm:pl-4", children: Ue(V, Z, "right") })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-3 flex items-center justify-between border-t border-[var(--abc-border)] pt-2 text-[11px] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e("span", { children: P ? `已选起始日：${P}，请继续点击截止日期` : _.start && _.end ? `已选区间：${_.start} 至 ${_.end}` : "请依次点击选择起始与截止日期" }) })
            ]
          }
        ),
        is(L.current) ?? document.body
      )
    ] });
  }
);
vn.displayName = "DateRangePicker";
const rf = {
  xs: "min-h-[82px] w-full p-2.5",
  sm: "min-h-[108px] w-full p-3.5",
  md: "min-h-[124px] w-full p-4",
  lg: "min-h-[144px] w-full p-5"
}, af = {
  xs: "h-14 w-14",
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28"
};
function nf(t) {
  return !!(t && t.trim().startsWith("<svg"));
}
function sf(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const Ec = ({
  value: t = "",
  onChange: r,
  label: a,
  helperText: n,
  error: s,
  accept: o = "image/*,.svg",
  maxSizeMB: d = 5,
  disabled: c = !1,
  customUpload: u,
  size: l,
  motion: b,
  placeholder: m = "点击或拖拽图片至此处上传",
  className: h
}) => {
  const f = Be(l, "sm"), p = Ie(b), x = Tt(), w = ce(null), { uploadAdapter: k, toast: v } = At(), [C, L] = $(!1), [D, j] = $(!1), [S, y] = $(!1), T = async (A) => {
    if (!A || c || C) return;
    if (!(A.type.startsWith("image/") || A.name.toLowerCase().endsWith(".svg"))) {
      v.error("只能上传图片或 SVG 格式文件");
      return;
    }
    if (A.size >= d * 1024 * 1024) {
      v.error(`上传图片大小不能超过 ${d}MB`);
      return;
    }
    L(!0);
    try {
      const E = await (u ?? k ?? sf)(A);
      E ? (r == null || r(E), v.success("上传成功")) : v.error("上传失败，未获取到图片地址");
    } catch (K) {
      v.error((K == null ? void 0 : K.message) || "上传图片失败，请重试");
    } finally {
      L(!1), w.current && (w.current.value = "");
    }
  }, _ = (t == null ? void 0 : t.trim()) ?? "", R = nf(_);
  return /* @__PURE__ */ i("div", { "data-motion": p, className: "w-full", children: [
    a && /* @__PURE__ */ e(
      "label",
      {
        htmlFor: x,
        className: "mb-1.5 block text-xs font-medium text-[var(--abc-fg-secondary)]",
        children: a
      }
    ),
    /* @__PURE__ */ e(
      "input",
      {
        ref: w,
        id: x,
        type: "file",
        accept: o,
        disabled: c || C,
        onChange: (A) => {
          var z;
          return T((z = A.target.files) == null ? void 0 : z[0]);
        },
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        onClick: () => {
          var A;
          !_ && !c && !C && ((A = w.current) == null || A.click());
        },
        onDragOver: (A) => {
          A.preventDefault(), A.stopPropagation(), !c && !C && j(!0);
        },
        onDragLeave: (A) => {
          A.preventDefault(), A.stopPropagation(), j(!1);
        },
        onDrop: (A) => {
          var z;
          A.preventDefault(), A.stopPropagation(), j(!1), !c && !C && T((z = A.dataTransfer.files) == null ? void 0 : z[0]);
        },
        className: g(
          "group relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-dashed bg-[var(--abc-bg-muted)]/75 transition-all",
          D ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/35 ring-2 ring-[var(--abc-ring)]" : "border-[var(--abc-border-strong)]",
          !c && !D && "hover:border-[var(--abc-primary)]",
          !_ && !c && "cursor-pointer",
          c && "opacity-60 cursor-not-allowed",
          s && "border-[var(--abc-danger)]",
          rf[f],
          h
        ),
        children: [
          _ ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center gap-3.5 sm:flex-row", children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: g(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
                  af[f]
                ),
                children: [
                  R ? /* @__PURE__ */ e(
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
                      onClick: (A) => {
                        A.stopPropagation(), y(!0);
                      },
                      className: "absolute inset-0 flex items-center justify-center bg-slate-950/55 text-white opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer",
                      children: /* @__PURE__ */ e(Wa, { className: "h-4 w-4" })
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
                    onClick: (A) => {
                      var z;
                      A.stopPropagation(), (z = w.current) == null || z.click();
                    },
                    className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(Fa, { className: g("h-3 w-3", C && "animate-spin") }),
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
                    onClick: (A) => {
                      A.stopPropagation(), r == null || r("");
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
            /* @__PURE__ */ e("div", { className: "mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(_u, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: m }),
            /* @__PURE__ */ i("p", { className: "mt-0.5 text-[11px] text-[var(--abc-fg-muted)]", children: [
              "支持 JPG / PNG / WEBP / SVG，单文件不超过 ",
              d,
              "MB"
            ] })
          ] }),
          C && /* @__PURE__ */ i("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-[var(--abc-bg-surface)]/80 backdrop-blur-2xs", children: [
            /* @__PURE__ */ e(br, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }),
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
        open: S,
        onClose: () => y(!1),
        title: "图形资源预览",
        size: "lg",
        children: /* @__PURE__ */ e("div", { className: "flex min-h-56 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-bg-muted)] p-4", children: R ? /* @__PURE__ */ e(
          "div",
          {
            className: "flex max-h-96 max-w-full items-center justify-center [&>svg]:max-h-80 [&>svg]:w-auto",
            dangerouslySetInnerHTML: { __html: _ }
          }
        ) : /* @__PURE__ */ e("img", { src: _, alt: "大图预览", className: "max-h-96 max-w-full object-contain" }) })
      }
    )
  ] });
}, of = {
  xs: "py-0.5 text-[11px]",
  sm: "py-1 text-xs",
  md: "py-1.5 text-sm",
  lg: "py-2 text-sm"
}, Ah = ({
  treeData: t,
  checkable: r = !1,
  checkStrictly: a = !1,
  checkedKeys: n,
  defaultCheckedKeys: s = [],
  onCheck: o,
  selectedKeys: d,
  onSelect: c,
  defaultExpandAll: u = !0,
  searchable: l = !1,
  searchPlaceholder: b = "搜索节点名称（支持拼音首字母）...",
  showToolbar: m = !1,
  size: h,
  motion: f,
  renderExtra: p,
  className: x
}) => {
  const w = Be(h, "sm"), k = Ie(f), [v, C] = $(""), [L, D] = $(
    () => u ? new Set(Ra(t)) : /* @__PURE__ */ new Set()
  ), [j, S] = $(s), [y, T] = $([]);
  ge(() => {
    u && t.length > 0 && L.size === 0 && D(new Set(Ra(t)));
  }, [t, u]);
  const _ = n !== void 0 ? n : j, R = d !== void 0 ? d : y, { checkedKeys: A, halfCheckedKeys: z } = se(
    () => ho(t, _, a),
    [t, _, a]
  ), K = se(() => new Set(A), [A]), E = se(() => new Set(z), [z]), { filteredNodes: I, autoExpandedKeys: P } = se(
    () => Xu(t, v),
    [t, v]
  ), H = se(() => v.trim() ? /* @__PURE__ */ new Set([...L, ...P]) : L, [L, P, v]), O = (V) => {
    D((re) => {
      const te = new Set(re);
      return te.has(V) ? te.delete(V) : te.add(V), te;
    });
  }, G = (V, re) => {
    const te = lc(t, A, V, re, a);
    n === void 0 && S(te.checkedKeys), o == null || o(te.checkedKeys, {
      halfCheckedKeys: te.halfCheckedKeys,
      node: V,
      checked: re
    });
  }, Y = (V) => {
    if (V.disabled) return;
    const re = [V.key];
    d === void 0 && T(re), c == null || c(re, V);
  }, ie = (V, re = 0) => /* @__PURE__ */ e("ul", { role: re === 0 ? "tree" : "group", className: "m-0 list-none space-y-0.5 p-0", children: V.map((te) => {
    const le = !!(te.children && te.children.length > 0), oe = H.has(te.key), Ae = K.has(te.key), F = E.has(te.key), Z = R.includes(te.key);
    return /* @__PURE__ */ i("li", { role: "treeitem", "aria-expanded": le ? oe : void 0, children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: { paddingInlineStart: `${re * 18 + 6}px` },
          className: g(
            "group flex items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] pr-2 transition-colors",
            of[w],
            Z ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-muted)]",
            te.disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
              le ? /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": oe ? `收起 ${te.title}` : `展开 ${te.title}`,
                  onClick: () => O(te.key),
                  className: "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer abc-motion-control",
                  children: /* @__PURE__ */ e(
                    vr,
                    {
                      className: g(
                        "h-3.5 w-3.5 transition-transform duration-[var(--abc-motion-fast,140ms)]",
                        oe && "rotate-90"
                      )
                    }
                  )
                }
              ) : /* @__PURE__ */ e("span", { className: "inline-block h-5 w-5 shrink-0" }),
              r && /* @__PURE__ */ e(
                za,
                {
                  size: w,
                  motion: k,
                  checked: Ae,
                  indeterminate: F,
                  disabled: te.disabled,
                  onChange: (Re) => G(te, Re)
                }
              ),
              /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  disabled: te.disabled,
                  onClick: () => {
                    r && !c ? G(te, !Ae) : Y(te);
                  },
                  className: "inline-flex min-w-0 flex-1 items-center gap-1.5 truncate text-left cursor-pointer disabled:cursor-not-allowed",
                  children: [
                    te.icon && /* @__PURE__ */ e(jr, { name: te.icon, size: 14, className: "text-[var(--abc-fg-muted)]" }),
                    /* @__PURE__ */ e("span", { className: "truncate", children: te.title })
                  ]
                }
              )
            ] }),
            p && /* @__PURE__ */ e("div", { className: "shrink-0", children: p(te) })
          ]
        }
      ),
      le && oe && ie(te.children, re + 1)
    ] }, te.key);
  }) });
  return /* @__PURE__ */ i("div", { "data-motion": k, className: g("space-y-2", x), children: [
    (l || m) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
      l && /* @__PURE__ */ e("div", { className: "min-w-[180px] flex-1", children: /* @__PURE__ */ e(
        pt,
        {
          size: w,
          motion: k,
          allowClear: !0,
          prefix: /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }),
          placeholder: b,
          value: v,
          onChange: (V) => C(V.target.value)
        }
      ) }),
      m && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => D(new Set(Ra(t))),
            className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2 py-1 text-[11px] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] cursor-pointer",
            children: [
              /* @__PURE__ */ e(Iu, { className: "h-3 w-3" }),
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
              /* @__PURE__ */ e(Tu, { className: "h-3 w-3" }),
              "全部折叠"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-2", children: I.length > 0 ? ie(I) : /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无匹配的节点" }) })
  ] });
}, cf = {
  xs: "min-h-[var(--abc-control-h-xs)] text-xs",
  sm: "min-h-[var(--abc-control-h-sm)] text-xs",
  md: "min-h-[var(--abc-control-h-md)] text-sm",
  lg: "min-h-[var(--abc-control-h-lg)] text-sm"
}, lf = {
  xs: "px-1.5 py-0 text-[11px]",
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-2.5 py-1 text-sm"
}, df = ({
  value: t,
  defaultValue: r = [],
  onChange: a,
  placeholder: n = "输入后按回车添加标签...",
  maxTags: s = 20,
  disabled: o = !1,
  size: d,
  motion: c,
  className: u
}) => {
  const l = Be(d, "sm"), b = Ie(c), [m, h] = $(r), [f, p] = $(""), x = t !== void 0 ? t : m, w = (C) => {
    t === void 0 && h(C), a == null || a(C);
  }, k = () => {
    const C = f.trim();
    if (!(!C || o)) {
      if (x.includes(C) || x.length >= s) {
        p("");
        return;
      }
      w([...x, C]), p("");
    }
  }, v = (C) => {
    o || w(x.filter((L, D) => D !== C));
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": b,
      className: g(
        "flex flex-wrap items-center gap-1.5 px-2 py-1",
        cf[l],
        Zr,
        o && "opacity-65 cursor-not-allowed",
        u
      ),
      children: [
        x.map((C, L) => /* @__PURE__ */ i(
          "span",
          {
            className: g(
              "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)] abc-motion-pop",
              lf[l]
            ),
            children: [
              /* @__PURE__ */ e("span", { children: C }),
              !o && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": `移除标签 ${C}`,
                  onClick: () => v(L),
                  className: "rounded-full hover:opacity-75 cursor-pointer",
                  children: /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
                }
              )
            ]
          },
          `${C}_${L}`
        )),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            "aria-label": "添加标签输入",
            disabled: o || x.length >= s,
            value: f,
            placeholder: x.length === 0 ? n : "",
            onChange: (C) => p(C.target.value),
            onBlur: k,
            onKeyDown: (C) => {
              C.key === "Enter" || C.key === "," ? (C.preventDefault(), k()) : C.key === "Backspace" && !f && x.length > 0 && v(x.length - 1);
            },
            className: "min-w-[110px] flex-1 bg-transparent text-inherit text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
          }
        )
      ]
    }
  );
};
function Mi(t, r) {
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
const uf = {
  xs: "h-[var(--abc-control-h-xs)]",
  sm: "h-[var(--abc-control-h-sm)]",
  md: "h-[var(--abc-control-h-md)]",
  lg: "h-[var(--abc-control-h-lg)]"
}, Lh = ({
  canvasWidth: t = 320,
  canvasHeight: r = 155,
  size: a,
  motion: n,
  onSuccess: s,
  onFail: o,
  captchaFetcher: d
}) => {
  const c = Be(a, "md"), u = Ie(n), { captchaAdapter: l } = At(), b = d ?? l, [m, h] = $(null), [f, p] = $(!0), [x, w] = $(!1), [k, v] = $(!1), [C, L] = $(0), [D, j] = $(0), S = ce(!1), y = ce(0), T = ce(0), _ = ue(async () => {
    p(!0), w(!1), v(!1), L(0), j(0);
    try {
      if (b) {
        const K = await b();
        h(K);
      } else
        h(Mi(t, r));
    } catch {
      h(Mi(t, r));
    } finally {
      p(!1);
    }
  }, [b, t, r]);
  ge(() => {
    _();
  }, [_]);
  const R = (K) => {
    f || x || (S.current = !0, y.current = K, T.current = Date.now());
  }, A = ue(
    (K) => {
      if (!S.current || f || x) return;
      const E = K - y.current, I = t - 40, P = Math.max(0, Math.min(I, E));
      L(P), j((t - 60) / I * P);
    },
    [t, f, x]
  ), z = ue(() => {
    if (!S.current || f || x) return;
    if (S.current = !1, Date.now() - T.current > 1e4 || !m) {
      v(!0), o == null || o(), setTimeout(_, 600);
      return;
    }
    const E = Math.round(D);
    if (typeof m.targetX == "number" && Math.abs(E - m.targetX) > 10) {
      v(!0), o == null || o(), setTimeout(_, 550);
      return;
    }
    w(!0), s({
      nonceStr: m.nonceStr,
      value: E
    });
  }, [D, m, f, x, o, s, _]);
  return ge(() => {
    const K = (H) => A(H.clientX), E = () => z(), I = (H) => {
      H.touches[0] && A(H.touches[0].clientX);
    }, P = () => z();
    return window.addEventListener("mousemove", K), window.addEventListener("mouseup", E), window.addEventListener("touchmove", I), window.addEventListener("touchend", P), () => {
      window.removeEventListener("mousemove", K), window.removeEventListener("mouseup", E), window.removeEventListener("touchmove", I), window.removeEventListener("touchend", P);
    };
  }, [A, z]), /* @__PURE__ */ i("div", { "data-motion": u, className: "relative flex flex-col items-center select-none", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "relative overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        style: { width: t, height: r },
        children: [
          f ? /* @__PURE__ */ i("div", { className: "flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-[var(--abc-fg-muted)]", children: [
            /* @__PURE__ */ e("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-[var(--abc-primary)] border-t-transparent" }),
            /* @__PURE__ */ e("span", { children: "加载安全拼图中..." })
          ] }) : m && /* @__PURE__ */ i(tt, { children: [
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
                style: { top: m.blockY, left: D }
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
              children: /* @__PURE__ */ e(as, { className: g("h-3.5 w-3.5", f && "animate-spin") })
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
        className: g(
          "relative mt-3.5 flex items-center overflow-hidden rounded-[var(--abc-radius-md)] border transition-colors",
          uf[c],
          x ? "border-[var(--abc-success)] bg-[var(--abc-success-soft)]" : k ? "border-[var(--abc-danger)] bg-[var(--abc-danger-soft)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)]"
        ),
        style: { width: t },
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: g(
                "absolute inset-y-0 left-0",
                x ? "bg-[var(--abc-success)]/20" : "bg-[var(--abc-primary)]/20"
              ),
              style: { width: C + 40 }
            }
          ),
          /* @__PURE__ */ e("div", { className: "pointer-events-none w-full text-center text-xs font-medium text-[var(--abc-fg-muted)]", children: x ? "验证成功" : k ? "对齐偏差较大，请重试" : "向右拖动滑块对齐缺口" }),
          /* @__PURE__ */ e(
            "div",
            {
              role: "slider",
              "aria-label": "向右拖动滑块完成验证",
              "aria-valuenow": Math.round(C),
              "aria-valuemin": 0,
              "aria-valuemax": t - 40,
              tabIndex: 0,
              onMouseDown: (K) => R(K.clientX),
              onTouchStart: (K) => {
                K.touches[0] && R(K.touches[0].clientX);
              },
              className: g(
                "absolute top-0.5 bottom-0.5 flex w-10 items-center justify-center rounded-[var(--abc-radius-sm)] shadow-xs cursor-grab active:cursor-grabbing",
                x ? "bg-[var(--abc-success)] text-white" : "bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-primary)]"
              ),
              style: { left: C },
              children: x ? /* @__PURE__ */ e(Xr, { className: "h-4 w-4" }) : /* @__PURE__ */ e(sc, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}, Zn = ["B", "KB", "MB", "GB", "TB"], Jn = ["s", "m", "h", "d"], Ac = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4
}, Lc = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400
}, bf = ["TB", "GB", "MB", "KB", "B"], mf = ["h", "m", "d", "s"];
function Qn(t, r = 2) {
  return Number.isFinite(t) ? t.toFixed(r).replace(/\.?0+$/, "") : "0";
}
function Dc(t, r) {
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
function Rc(t, r, a, n, s, o, d) {
  const c = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (c === 0)
    return { unit: n.includes(r) ? r : n[n.length - 1], amount: "0" };
  for (const l of s) {
    if (!n.includes(l)) continue;
    const b = o[l];
    if (c >= b && c % b === 0)
      return { unit: l, amount: String(c / b) };
  }
  const u = n.includes(a) ? a : n[0];
  return {
    unit: u,
    amount: Qn(c / o[u], d)
  };
}
function jc(t, r = "GB", a = Zn) {
  const n = a.length > 0 ? a : Zn;
  return Rc(t, r, "B", n, bf, Ac, 4);
}
function Bc(t, r = "h", a = Jn) {
  const n = a.length > 0 ? a : Jn;
  return Rc(
    t,
    r,
    "s",
    n,
    mf,
    Lc,
    2
  );
}
function Dh(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = jc(n);
  return `${o} ${s}`;
}
function Rh(t, r = "en", a) {
  const n = Number.isFinite(t) && t >= 0 ? Math.round(t) : 0;
  if (n === 0 && a) return a;
  const { unit: s, amount: o } = Bc(n);
  return `${o} ${Dc(s, r)}`;
}
function ff(t, r, a) {
  let n = Math.max(r, Math.round(t));
  return typeof a == "number" && Number.isFinite(a) && (n = Math.min(a, n)), n;
}
function Pc({
  id: t,
  fallbackIdSuffix: r,
  value: a,
  onChange: n,
  min: s = 0,
  max: o,
  size: d = "default",
  disabled: c = !1,
  hideHint: u = !1,
  className: l,
  resolvedUnitLabel: b,
  factors: m,
  allowedUnits: h,
  pickBest: f,
  formatUnitLabel: p,
  buildHintText: x,
  "aria-label": w,
  "aria-describedby": k,
  placeholder: v
}) {
  const C = ve.useId(), L = t ?? `${C}-${r}`, D = `${L}-hint`, j = Number.isFinite(a) && a >= 0 ? Math.round(a) : 0, S = ve.useMemo(
    () => f(j),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [y, T] = ve.useState(S.unit), [_, R] = ve.useState(S.amount), A = ve.useRef(j);
  ve.useEffect(() => {
    if (j === A.current) return;
    A.current = j;
    const H = f(j);
    T(H.unit), R(H.amount);
  }, [j, f]);
  const z = m[y], K = (H) => {
    const O = H.target.value;
    if (O !== "" && !/^\d*\.?\d*$/.test(O) || (R(O), O.trim() === "")) return;
    const G = Number(O);
    if (!Number.isFinite(G) || G < 0) return;
    const Y = ff(G * z, s, o);
    A.current = Y, n(Y);
  }, E = (H) => {
    const O = H.target.value;
    if (!h.includes(O)) return;
    T(O);
    const G = m[O];
    R(j === 0 ? "0" : Qn(j / G, 2));
  }, I = () => {
    (_.trim() === "" || !Number.isFinite(Number(_)) || Number(_) < 0) && R(j === 0 ? "0" : Qn(j / z, 2));
  }, P = [k, u ? void 0 : D].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ i("div", { className: g("space-y-1", l), children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: g(
          "flex items-stretch rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-surface,#ffffff)] shadow-2xs transition-colors focus-within:border-[var(--abc-primary,#2563eb)] focus-within:ring-1 focus-within:ring-[var(--abc-primary,#2563eb)] overflow-hidden w-full",
          c && "opacity-50 cursor-not-allowed",
          d === "sm" ? "h-8" : "h-9"
        ),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              id: L,
              type: "number",
              step: z === 1 ? 1 : "any",
              min: 0,
              autoComplete: "off",
              disabled: c,
              value: _,
              "aria-label": w,
              "aria-describedby": P,
              placeholder: v,
              onChange: K,
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
                "aria-label": b,
                disabled: c,
                value: y,
                onChange: E,
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
                children: h.map((H) => /* @__PURE__ */ e("option", { value: H, className: "bg-[var(--abc-bg-surface,#ffffff)] text-[var(--abc-fg,#0f172a)]", children: p(H) }, H))
              }
            ),
            /* @__PURE__ */ e(lr, { className: "pointer-events-none absolute right-2 h-3 w-3 text-[var(--abc-fg-muted,#94a3b8)] opacity-70" })
          ] })
        ]
      }
    ),
    !u && /* @__PURE__ */ e("div", { id: D, className: "pt-0.5", children: /* @__PURE__ */ e("span", { className: "inline-block rounded-[var(--abc-radius-xs,4px)] border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted,#64748b)]", children: x(j, y) }) })
  ] });
}
function jh({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "GB",
  allowedUnits: n = Zn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : Zn, c = ve.useCallback(
    (b) => jc(b, a, d),
    [a, d]
  ), u = ve.useCallback((b) => b, []), l = ve.useCallback(
    (b) => b === 0 && r ? t === "zh" ? "= 0 (无上限)" : "= 0 (Unlimited)" : `= ${b.toLocaleString()} Bytes`,
    [t, r]
  );
  return /* @__PURE__ */ e(
    Pc,
    {
      ...o,
      fallbackIdSuffix: "bytes",
      factors: Ac,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "字节单位" : "Byte unit"),
      pickBest: c,
      formatUnitLabel: u,
      buildHintText: l
    }
  );
}
function Bh({
  locale: t = "en",
  zeroMeansUnlimited: r = !0,
  defaultZeroUnit: a = "h",
  allowedUnits: n = Jn,
  unitAriaLabel: s,
  ...o
}) {
  const d = n.length > 0 ? n : Jn, c = ve.useCallback(
    (b) => Bc(b, a, d),
    [a, d]
  ), u = ve.useCallback(
    (b) => Dc(b, t),
    [t]
  ), l = ve.useCallback(
    (b, m) => {
      if (b === 0 && r)
        return t === "zh" ? "= 0 秒 (无上限)" : "= 0s (Unlimited)";
      if (m === "s") {
        const h = Qn(b / 3600, 2);
        return t === "zh" ? `≈ ${h} 小时 (${b.toLocaleString()} 秒)` : `≈ ${h} hr (${b.toLocaleString()}s)`;
      }
      return `= ${b.toLocaleString()} ${t === "zh" ? "秒" : "Seconds"}`;
    },
    [t, r]
  );
  return /* @__PURE__ */ e(
    Pc,
    {
      ...o,
      fallbackIdSuffix: "duration",
      factors: Lc,
      allowedUnits: d,
      resolvedUnitLabel: s ?? (t === "zh" ? "时长单位" : "Duration unit"),
      pickBest: c,
      formatUnitLabel: u,
      buildHintText: l
    }
  );
}
function Ph({
  items: t,
  activeKey: r,
  value: a,
  defaultActiveKey: n,
  onChange: s,
  variant: o = "line",
  size: d,
  motion: c,
  ariaLabel: u = "内容切换标签",
  extra: l,
  className: b,
  panelClassName: m
}) {
  var L;
  const h = Be(d, "md"), f = Ie(c), p = Tt(), [x, w] = _r({
    value: r ?? a,
    defaultValue: n ?? ((L = t[0]) == null ? void 0 : L.key) ?? "",
    onChange: s
  }), k = (D, j) => {
    const S = t.filter((T) => !T.disabled);
    if (S.length === 0) return;
    const y = S.findIndex((T) => {
      var _;
      return T.key === ((_ = t[j]) == null ? void 0 : _.key);
    });
    if (D.key === "ArrowRight") {
      D.preventDefault();
      const T = S[(y + 1) % S.length];
      T && w(T.key);
    } else if (D.key === "ArrowLeft") {
      D.preventDefault();
      const T = S[(y - 1 + S.length) % S.length];
      T && w(T.key);
    }
  }, v = t.some((D) => D.children !== void 0), C = h === "xs" ? "px-2.5 py-1 text-[11px]" : h === "sm" ? "px-3 py-1.5 text-xs" : h === "lg" ? "px-4.5 py-2.5 text-sm" : o === "line" ? "px-3.5 py-2.5 text-xs" : "px-3.5 py-1.5 text-xs";
  return /* @__PURE__ */ i("div", { "data-motion": f, className: g("w-full", b), children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: g(
          "flex items-center justify-between gap-3",
          o === "line" && "border-b border-[var(--abc-border)]"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              className: g(
                "flex flex-nowrap items-center overflow-x-auto [scrollbar-width:none]",
                o === "segmented" ? "gap-1 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] p-1" : o === "pills" ? "gap-1.5" : "gap-1"
              ),
              children: t.map((D, j) => {
                const S = D.key === x, y = `${p}-tab-${D.key}`;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    id: y,
                    type: "button",
                    role: "tab",
                    "aria-selected": S,
                    tabIndex: S ? 0 : -1,
                    disabled: D.disabled,
                    onClick: () => !D.disabled && w(D.key),
                    onKeyDown: (T) => k(T, j),
                    className: g(
                      "abc-motion-control relative inline-flex flex-none items-center gap-1.5 font-medium whitespace-nowrap transition-colors cursor-pointer select-none",
                      "disabled:opacity-45 disabled:cursor-not-allowed",
                      C,
                      o === "line" ? g(
                        "abc-tab-trigger",
                        S ? "font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : o === "segmented" ? g(
                        "rounded-[var(--abc-radius-sm)]",
                        S ? "bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-muted)] enabled:hover:text-[var(--abc-fg)]"
                      ) : g(
                        "rounded-[var(--abc-radius-md)] border",
                        S ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] enabled:hover:border-[var(--abc-border-strong)]"
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
          l && /* @__PURE__ */ e("div", { className: "shrink-0", children: l })
        ]
      }
    ),
    v && /* @__PURE__ */ e("div", { children: t.map((D) => {
      const j = D.key === x, S = `${p}-tab-${D.key}`;
      return /* @__PURE__ */ e(
        "div",
        {
          role: "tabpanel",
          "aria-labelledby": S,
          tabIndex: j ? 0 : void 0,
          ...j ? {} : { hidden: "until-found" },
          children: j && /* @__PURE__ */ e("div", { className: g("pt-4", f !== "none" && "abc-animate-fade-in", m), children: D.children })
        },
        D.key
      );
    }) })
  ] });
}
const Ei = {
  xs: 28,
  sm: 40,
  md: 52,
  lg: 64
};
function zc(t) {
  return t ? t.trim().startsWith("<svg") : !1;
}
const xn = ({
  src: t,
  alt: r = "图片预览",
  size: a,
  motion: n,
  width: s,
  height: o,
  rounded: d = !1,
  fit: c = "contain",
  placeholder: u,
  className: l,
  zoomable: b = !0
}) => {
  const m = Be(a, "sm"), h = Ie(n), f = s ?? Ei[m], p = o ?? Ei[m], [x, w] = $(!1), [k, v] = $(!1), [C, L] = $(1), [D, j] = $(0), S = typeof t == "string" ? t.trim() : "", y = zc(S), T = se(() => S ? y && S.endsWith("</svg>") ? `data:image/svg+xml;utf8,${encodeURIComponent(S)}` : S : "", [S, y]);
  if (ge(() => {
    w(!1);
  }, [S]), !S || x)
    return u ? /* @__PURE__ */ e(tt, { children: u }) : /* @__PURE__ */ e(
      "div",
      {
        "data-motion": h,
        title: x ? "图片加载失败，请检查 URL 是否有效" : "暂无图片",
        style: {
          width: f,
          height: p,
          minWidth: typeof f == "number" ? f : void 0
        },
        className: g(
          "inline-flex shrink-0 items-center justify-center border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-placeholder)] select-none",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          x && "border-[var(--abc-danger)]/40 bg-[var(--abc-danger-soft)]/50 text-[var(--abc-danger)]",
          l
        ),
        children: x ? /* @__PURE__ */ e(oa, { className: "h-4 w-4" }) : /* @__PURE__ */ e(Zi, { className: "h-4 w-4" })
      }
    );
  const _ = (R) => {
    R.stopPropagation(), b && (L(1), j(0), v(!0));
  };
  return /* @__PURE__ */ i(tt, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: b ? "button" : void 0,
        tabIndex: b ? 0 : void 0,
        "data-motion": h,
        title: "点击预览大图 / 矢量图",
        "aria-label": b ? `预览 ${r}` : void 0,
        onClick: _,
        onKeyDown: (R) => {
          b && (R.key === "Enter" || R.key === " ") && (R.preventDefault(), _(R));
        },
        style: {
          width: f,
          height: p,
          minWidth: typeof f == "number" ? f : void 0
        },
        className: g(
          "abc-motion-control group relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
          d ? "rounded-full" : "rounded-[var(--abc-radius-md)]",
          b && "cursor-zoom-in hover:border-[var(--abc-primary)]",
          l
        ),
        children: [
          /* @__PURE__ */ e(
            "img",
            {
              src: T,
              alt: r,
              onError: () => w(!0),
              className: g(
                "h-full w-full transition-transform duration-150 group-hover:scale-105",
                y || c === "contain" ? "object-contain p-1" : "object-cover"
              )
            }
          ),
          b && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/40 text-white opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ e(Wa, { className: "h-3.5 w-3.5" }) })
        ]
      }
    ),
    /* @__PURE__ */ i(
      yr,
      {
        open: k,
        onClose: () => v(!1),
        title: r,
        size: "lg",
        motion: h,
        footer: /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-center gap-2", children: [
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => L((R) => Math.max(0.4, Number((R - 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Mu, { className: "h-3.5 w-3.5" }),
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
              onClick: () => L((R) => Math.min(3, Number((R + 0.2).toFixed(2)))),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(Eu, { className: "h-3.5 w-3.5" }),
                " 放大"
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: () => j((R) => (R + 90) % 360),
              className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-1 text-xs text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer",
              children: [
                /* @__PURE__ */ e(as, { className: "h-3.5 w-3.5" }),
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
}, zh = ({
  title: t,
  extra: r,
  items: a,
  column: n = 2,
  bordered: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const u = Be(o, "sm"), l = Ie(d), b = n === 1 ? "grid-cols-1" : n === 2 ? "grid-cols-1 sm:grid-cols-2" : n === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", h = {
    xs: "px-2.5 py-1.5 text-[11px]",
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-sm"
  }[u];
  return /* @__PURE__ */ i("div", { "data-motion": l, className: g("space-y-2.5", c), children: [
    (t || r) && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2", children: [
      t && /* @__PURE__ */ e("h4", { className: g("font-semibold text-[var(--abc-fg)]", u === "lg" ? "text-sm" : "text-xs"), children: t }),
      r && /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: r })
    ] }),
    /* @__PURE__ */ e(
      "dl",
      {
        className: g(
          "m-0 grid",
          b,
          s ? "overflow-hidden rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-border)] gap-px" : "gap-x-6 gap-y-3"
        ),
        children: a.map((f, p) => {
          const x = f.span && f.span >= n ? "sm:col-span-full" : f.span === 2 ? "sm:col-span-2" : f.span === 3 ? "lg:col-span-3" : void 0;
          return s ? /* @__PURE__ */ i(
            "div",
            {
              className: g("flex min-w-0 bg-[var(--abc-bg-surface)]", x),
              children: [
                /* @__PURE__ */ e(
                  "dt",
                  {
                    className: g(
                      "w-28 shrink-0 border-r border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg-secondary)] flex items-center",
                      h
                    ),
                    children: f.label
                  }
                ),
                /* @__PURE__ */ e("dd", { className: g("m-0 min-w-0 flex-1 break-words text-[var(--abc-fg)] flex items-center", h), children: f.children ?? "-" })
              ]
            },
            f.key ?? p
          ) : /* @__PURE__ */ i("div", { className: g("min-w-0 space-y-0.5", x), children: [
            /* @__PURE__ */ e("dt", { className: "text-[11px] font-medium text-[var(--abc-fg-muted)]", children: f.label }),
            /* @__PURE__ */ e("dd", { className: "m-0 text-xs font-medium text-[var(--abc-fg)] break-words", children: f.children ?? "-" })
          ] }, f.key ?? p);
        })
      }
    )
  ] });
}, pf = {
  xs: "px-3 py-1.5 text-[11px]",
  sm: "px-4 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, hf = {
  xs: "px-3 py-2 text-[11px]",
  sm: "px-4 py-3 text-xs",
  md: "px-4 py-3.5 text-xs",
  lg: "px-5 py-4 text-sm"
}, Oh = ({
  items: t,
  accordion: r = !1,
  defaultActiveKeys: a = [],
  activeKeys: n,
  onChange: s,
  size: o,
  motion: d,
  className: c
}) => {
  const u = Tt(), l = Be(o, "sm"), b = Ie(d), [m, h] = $(a), f = n !== void 0 ? n : m, p = (x, w) => {
    let k;
    r ? k = w ? [x] : [] : k = w ? Array.from(/* @__PURE__ */ new Set([...f, x])) : f.filter((v) => v !== x), n === void 0 && h(k), s == null || s(k);
  };
  return /* @__PURE__ */ e(
    "div",
    {
      "data-motion": b,
      className: g(
        "divide-y divide-[var(--abc-border)] overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
        c
      ),
      children: t.map((x) => {
        const w = f.includes(x.key);
        return /* @__PURE__ */ i(
          "details",
          {
            name: r ? u : void 0,
            open: w,
            className: "abc-collapse-item group",
            children: [
              /* @__PURE__ */ i(
                "summary",
                {
                  "aria-disabled": x.disabled || void 0,
                  onClick: (k) => {
                    k.preventDefault(), !x.disabled && p(x.key, !w);
                  },
                  className: g(
                    "abc-motion-control flex items-center justify-between gap-3 font-medium text-[var(--abc-fg)] select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-ring)]",
                    pf[l],
                    x.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[var(--abc-bg-muted)]"
                  ),
                  children: [
                    /* @__PURE__ */ i("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                      /* @__PURE__ */ e(
                        lr,
                        {
                          className: g(
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
                  className: g(
                    "border-t border-[var(--abc-border-subtle)] bg-[var(--abc-bg-surface)] leading-relaxed text-[var(--abc-fg-secondary)]",
                    hf[l]
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
}, gf = {
  primary: "border-[var(--abc-primary)] bg-[var(--abc-primary)]",
  success: "border-[var(--abc-success)] bg-[var(--abc-success)]",
  warning: "border-[var(--abc-warning)] bg-[var(--abc-warning)]",
  danger: "border-[var(--abc-danger)] bg-[var(--abc-danger)]",
  neutral: "border-[var(--abc-border-strong)] bg-[var(--abc-bg-surface)]"
}, $h = ({ items: t, size: r, motion: a, className: n }) => {
  const s = Be(r, "sm"), o = Ie(a), d = {
    xs: "gap-2.5 pb-2.5 last:pb-0",
    sm: "gap-3 pb-4 last:pb-0",
    md: "gap-3.5 pb-5 last:pb-0",
    lg: "gap-4 pb-6 last:pb-0"
  }, c = {
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
  return /* @__PURE__ */ e("ol", { "data-motion": o, className: g("m-0 list-none space-y-0 p-0", n), children: t.map((l, b) => {
    const m = b === t.length - 1, h = l.tone ?? "primary";
    return /* @__PURE__ */ i("li", { className: g("relative flex", d[s]), children: [
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
          className: g(
            "abc-motion-pop h-2.5 w-2.5 rounded-full border-2 ring-2 ring-[var(--abc-bg-surface)]",
            gf[h]
          )
        }
      ) }),
      /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-0.5", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ e("span", { className: g("font-medium text-[var(--abc-fg)]", c[s]), children: l.title }),
          l.time && /* @__PURE__ */ e("time", { className: "font-mono text-[11px] text-[var(--abc-fg-muted)] tabular-nums", children: l.time })
        ] }),
        l.description && /* @__PURE__ */ e("div", { className: g("leading-relaxed text-[var(--abc-fg-muted)]", u[s]), children: l.description })
      ] })
    ] }, l.key ?? b);
  }) });
}, Oc = ve.forwardRef(
  ({
    value: t,
    displayValue: r,
    copyLabel: a = "复制",
    copiedLabel: n = "已复制",
    hideCopyButton: s = !1,
    className: o,
    codeClassName: d,
    ...c
  }, u) => {
    const [l, b] = ve.useState(!1), m = async (h) => {
      if (h.stopPropagation(), !t) return;
      await ls(t) && (b(!0), setTimeout(() => b(!1), 1600));
    };
    return /* @__PURE__ */ i(
      "span",
      {
        ref: u,
        "data-slot": "copyable-code",
        "data-copied": l ? "true" : void 0,
        className: g("inline-flex max-w-full items-center gap-1.5 align-baseline", o),
        ...c,
        children: [
          /* @__PURE__ */ e(
            "code",
            {
              title: t,
              className: g(
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
              className: g(
                "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-transparent text-[var(--abc-fg-muted,#64748b)] transition-all",
                "opacity-70 hover:border-[var(--abc-border,#e2e8f0)] hover:bg-[var(--abc-bg-muted,#f8fafc)] hover:text-[var(--abc-fg,#0f172a)] cursor-pointer",
                l && "border-emerald-500/50 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 opacity-100"
              ),
              children: l ? /* @__PURE__ */ e(Nt, { className: "h-3 w-3 stroke-[2.5]", "aria-hidden": "true" }) : /* @__PURE__ */ e(ga, { className: "h-3 w-3 stroke-[2]", "aria-hidden": "true" })
            }
          ) : null
        ]
      }
    );
  }
);
Oc.displayName = "CopyableCode";
const vf = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
  full: "col-span-full"
}, Lo = ve.forwardRef(
  ({
    label: t,
    value: r,
    children: a,
    mono: n = !1,
    copyValue: s,
    span: o = 1,
    variant: d = "default",
    className: c,
    valueClassName: u,
    ...l
  }, b) => {
    const m = a ?? r;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: b,
        "data-slot": "description-item",
        className: g(
          "min-w-0",
          d === "cards" && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] px-3 py-2.5 transition-colors hover:bg-[var(--abc-bg-muted,#f1f5f9)]",
          d === "divided" && "border-b border-[var(--abc-border,#e2e8f0)] pb-2.5 last:border-b-0 last:pb-0",
          vf[o],
          c
        ),
        ...l,
        children: [
          /* @__PURE__ */ e(
            "dt",
            {
              "data-slot": "description-term",
              className: g(
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
              className: g(
                "mt-1 break-all text-xs text-[var(--abc-fg,#0f172a)]",
                d === "compact" && "mt-0.5 text-xs",
                n && "font-mono text-xs",
                u
              ),
              children: s ? /* @__PURE__ */ e(
                Oc,
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
Lo.displayName = "DescriptionItem";
const Fh = Lo, xf = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
}, $c = ve.forwardRef(
  ({ columns: t = 2, variant: r = "default", density: a, bordered: n = !1, items: s, children: o, className: d, ...c }, u) => {
    const l = a === "compact" && r === "default" ? "compact" : r;
    return /* @__PURE__ */ e(
      "dl",
      {
        ref: u,
        "data-slot": "description-list",
        className: g(
          "grid",
          l === "compact" ? "gap-2.5" : "gap-3.5",
          n && "rounded-lg border border-[var(--abc-border,#e2e8f0)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3",
          xf[t],
          d
        ),
        ...c,
        children: s ? s.map((b, m) => /* @__PURE__ */ e(
          Lo,
          {
            label: b.label,
            value: b.value,
            mono: b.mono,
            copyValue: b.copyValue,
            span: b.span,
            variant: l,
            className: b.className
          },
          b.key ?? (typeof b.label == "string" ? b.label : m)
        )) : o
      }
    );
  }
);
$c.displayName = "DescriptionList";
const yf = {
  error: {
    container: "border-red-500/25 bg-red-50/50 text-red-950 dark:bg-red-950/20 dark:text-red-200 dark:border-red-500/30",
    badge: "border-red-500/30 bg-white/80 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    iconWrap: "bg-red-500/15 text-red-600 dark:text-red-400",
    Icon: oa,
    defaultRole: "alert"
  },
  warning: {
    container: "border-amber-500/25 bg-amber-50/50 text-amber-950 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-500/30",
    badge: "border-amber-500/30 bg-white/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    iconWrap: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    Icon: ha,
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
    Icon: un,
    defaultRole: "status"
  }
}, va = ve.forwardRef(
  function({
    variant: r = "error",
    title: a,
    message: n,
    description: s,
    code: o,
    status: d,
    requestId: c,
    actionHint: u,
    action: l,
    onDismiss: b,
    dismissLabel: m = "关闭通知",
    hideIcon: h = !1,
    role: f,
    className: p,
    children: x,
    ...w
  }, k) {
    const v = yf[r], C = v.Icon, L = n ?? x;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: k,
        role: f ?? v.defaultRole,
        "data-slot": "notification-banner",
        "data-variant": r,
        className: g(
          "relative flex flex-col gap-2 rounded-[var(--abc-radius-lg,0.625rem)] border p-3.5 text-xs shadow-2xs transition-colors sm:flex-row sm:items-start sm:justify-between sm:gap-3",
          v.container,
          p
        ),
        ...w,
        children: [
          /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-start gap-2.5", children: [
            !h && /* @__PURE__ */ e(
              "span",
              {
                className: g(
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  v.iconWrap
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(C, { className: "h-3.5 w-3.5" })
              }
            ),
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1 space-y-1", children: [
              (a || o || d != null || c) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5 font-medium", children: [
                d != null && /* @__PURE__ */ i(
                  "span",
                  {
                    className: g(
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
                    className: g(
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
                a && /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: a })
              ] }),
              L && /* @__PURE__ */ e("div", { className: "leading-relaxed font-normal text-foreground/90 break-words", children: L }),
              s && /* @__PURE__ */ e("div", { className: "text-[11px] leading-normal opacity-85", children: s }),
              u && /* @__PURE__ */ e("div", { className: "pt-0.5 text-[11px] font-medium text-primary", children: u })
            ] })
          ] }),
          (l || b) && /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2 self-end sm:self-start", children: [
            l,
            b && /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": m,
                onClick: b,
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
va.displayName = "NotificationBanner";
function Wh({
  error: t,
  fallbackTitle: r = "加载失败",
  fallbackMessage: a = "无法加载该区块数据，请重试。",
  action: n,
  retry: s,
  retryLabel: o = "重试",
  isRetrying: d = !1,
  className: c,
  ...u
}) {
  if (!t) return null;
  const l = t, b = (l == null ? void 0 : l.message) || a;
  return /* @__PURE__ */ e(
    va,
    {
      variant: "error",
      title: r,
      message: b,
      status: l == null ? void 0 : l.status,
      code: l == null ? void 0 : l.code,
      requestId: l == null ? void 0 : l.requestId,
      className: c,
      action: n ?? (s ? /* @__PURE__ */ i(
        Ee,
        {
          size: "xs",
          variant: "outline",
          onClick: s,
          disabled: d,
          className: "h-7 text-xs bg-white/70 dark:bg-slate-900/60",
          children: [
            d ? /* @__PURE__ */ e(br, { className: "mr-1 h-3 w-3 animate-spin", "aria-hidden": "true" }) : /* @__PURE__ */ e(Fa, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: o })
          ]
        }
      ) : null),
      ...u
    }
  );
}
function Kh({
  message: t,
  code: r,
  status: a,
  requestId: n,
  onRetry: s,
  retryLabel: o = "重试读取",
  pendingLabel: d,
  retryAriaLabel: c,
  pending: u = !1,
  action: l,
  ...b
}) {
  const m = l ?? (s ? /* @__PURE__ */ i(
    Ee,
    {
      variant: "outline",
      size: "sm",
      disabled: u,
      onClick: s,
      "aria-label": c,
      children: [
        /* @__PURE__ */ e(
          Fa,
          {
            "aria-hidden": "true",
            className: g(
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
    va,
    {
      variant: "error",
      role: "alert",
      message: t,
      code: r,
      status: a,
      requestId: n,
      action: m,
      ...b
    }
  );
}
function Hh({
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
      className: g(
        "flex items-center gap-3 rounded-xl border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-xs text-[var(--abc-fg-muted)] shadow-2xs",
        a === "sm" ? "px-3 py-2 text-[11px]" : "p-3.5",
        r && "border-amber-500/30 bg-amber-50/50 text-amber-900 dark:bg-amber-950/20 dark:text-amber-200",
        n
      ),
      ...s,
      children: [
        r ? /* @__PURE__ */ e(Au, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-amber-600" }) : /* @__PURE__ */ e(
          br,
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
function Uh({
  items: t,
  emptyMessage: r = "当前无活动运营告警。任务队列、Runner 集群与投递状态均符合策略阈值。",
  className: a
}) {
  return t.length === 0 ? /* @__PURE__ */ e(
    va,
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
      className: g(
        "divide-y divide-[var(--abc-border)] rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] shadow-2xs",
        a
      ),
      children: t.map((n, s) => {
        const o = "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[var(--abc-bg-subtle)]", d = !!n.restriction, c = /* @__PURE__ */ i(tt, { children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: g(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                n.severity === "critical" && "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400",
                n.severity === "high" && "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
                !["critical", "high"].includes(n.severity) && "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
              ),
              children: /* @__PURE__ */ e(Lu, { "aria-hidden": "true", className: "h-4 w-4" })
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
            !d && (n.href || n.onClick) && /* @__PURE__ */ e(rc, { "aria-hidden": "true", className: "h-4 w-4 text-[var(--abc-fg-muted)]" })
          ] })
        ] });
        return !d && n.href ? /* @__PURE__ */ e("a", { href: n.href, className: o, children: c }, n.kind || s) : !d && n.onClick ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: n.onClick,
            className: g(o, "w-full text-left cursor-pointer"),
            children: c
          },
          n.kind || s
        ) : /* @__PURE__ */ e("div", { className: o, children: c }, n.kind || s);
      })
    }
  );
}
const ao = "color-scheme", jn = "abc:color-scheme-change", Fc = "(prefers-color-scheme: dark)";
function sn() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? "light" : window.matchMedia(Fc).matches ? "dark" : "light";
}
function Bn() {
  if (typeof window > "u") return "system";
  try {
    const t = window.localStorage.getItem(ao);
    if (t === "light" || t === "dark") return t;
  } catch {
  }
  return "system";
}
function Pn(t) {
  if (typeof document > "u") return;
  const r = t === "system" ? "light dark" : t;
  let a = document.querySelector('meta[name="color-scheme"]');
  !a && document.head && (a = document.createElement("meta"), a.name = "color-scheme", document.head.prepend(a)), a && (a.content = r);
  const n = t === "system" ? sn() : t, s = document.documentElement;
  s.setAttribute("data-abc-theme", n), s.setAttribute("data-abc-theme-mode", t), s.classList.toggle("dark", n === "dark"), s.classList.toggle("light", n === "light");
}
function wf() {
  const t = rm(), [r, a] = ve.useState(
    () => Bn()
  ), [n, s] = ve.useState(
    () => sn()
  );
  ve.useEffect(() => {
    var h;
    t || Pn(Bn());
    const l = typeof window.matchMedia == "function" ? window.matchMedia(Fc) : null, b = () => {
      s(sn()), !t && Bn() === "system" && Pn("system");
    }, m = () => {
      const f = Bn();
      a(f), s(sn()), t || Pn(f);
    };
    return (h = l == null ? void 0 : l.addEventListener) == null || h.call(l, "change", b), window.addEventListener("storage", m), window.addEventListener(jn, m), () => {
      var f;
      (f = l == null ? void 0 : l.removeEventListener) == null || f.call(l, "change", b), window.removeEventListener("storage", m), window.removeEventListener(jn, m);
    };
  }, [t]);
  const o = t ? t.theme.mode : r, d = t ? t.resolvedTheme : o === "system" ? n : o, c = ve.useCallback(
    (l, b) => {
      try {
        l === "system" ? window.localStorage.removeItem(ao) : window.localStorage.setItem(ao, l);
      } catch {
      }
      a(l), t ? t.setThemeMode(l, b) : Pn(l), typeof window < "u" && window.dispatchEvent(new Event(jn));
    },
    [t]
  ), u = ve.useCallback(
    (l) => {
      const b = l && "clientX" in l && typeof l.clientX == "number" ? { clientX: l.clientX, clientY: l.clientY } : void 0;
      if (t) {
        t.toggleTheme(b), typeof window < "u" && window.dispatchEvent(new Event(jn));
        return;
      }
      const m = sn(), f = (o === "system" ? m : o) === "dark" ? "light" : "dark";
      c(f === m ? "system" : f);
    },
    [t, o, c]
  );
  return {
    preference: o,
    resolvedScheme: d,
    systemScheme: n,
    setPreference: c,
    toggleScheme: u
  };
}
const Nf = ve.forwardRef(
  ({ locale: t = "zh-CN", mode: r = "toggle", dark: a = !1, label: n, className: s, ...o }, d) => {
    const c = t.toLowerCase().startsWith("zh"), { preference: u, resolvedScheme: l, systemScheme: b, setPreference: m, toggleScheme: h } = wf();
    if (r === "segmented") {
      const p = b === "dark" ? c ? "当前深色" : "Currently dark" : c ? "当前浅色" : "Currently light";
      return /* @__PURE__ */ i(
        "div",
        {
          role: "group",
          "data-slot": "theme-switcher",
          "aria-label": n ?? (c ? "颜色主题偏好" : "Color theme preference"),
          className: g(
            "inline-flex flex-wrap items-center gap-1 rounded-lg border p-1 shadow-2xs transition-colors",
            a ? "border-slate-700/90 bg-slate-900/90" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)]",
            s
          ),
          children: [
            /* @__PURE__ */ i(
              Ee,
              {
                size: "xs",
                variant: u === "light" ? "default" : "ghost",
                onClick: (x) => m("light", { clientX: x.clientX, clientY: x.clientY }),
                "aria-pressed": u === "light",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(on, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "浅色" : "Light" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              Ee,
              {
                size: "xs",
                variant: u === "dark" ? "default" : "ghost",
                onClick: (x) => m("dark", { clientX: x.clientX, clientY: x.clientY }),
                "aria-pressed": u === "dark",
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(cn, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c ? "深色" : "Dark" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              Ee,
              {
                size: "xs",
                variant: u === "system" ? "default" : "ghost",
                onClick: (x) => m("system", { clientX: x.clientX, clientY: x.clientY }),
                "aria-pressed": u === "system",
                title: `${c ? "跟随系统" : "System"} (${p})`,
                className: "h-7 gap-1.5 rounded-md px-2.5 text-xs font-medium cursor-pointer",
                children: [
                  /* @__PURE__ */ e(fo, { size: 13, "aria-hidden": "true" }),
                  /* @__PURE__ */ i("span", { children: [
                    c ? "跟随系统" : "System",
                    /* @__PURE__ */ i("span", { className: "ml-1 opacity-75", children: [
                      "(",
                      p,
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
        "data-color-preference": u,
        onClick: h,
        title: n ?? f,
        "aria-label": n ?? f,
        className: g(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer",
          a ? "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] shadow-2xs hover:bg-[var(--abc-bg-subtle)]",
          s
        ),
        ...o,
        children: [
          l === "dark" ? /* @__PURE__ */ e(on, { className: "h-3.5 w-3.5 text-amber-400", "aria-hidden": "true" }) : /* @__PURE__ */ e(cn, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: f })
        ]
      }
    );
  }
);
Nf.displayName = "ThemeSwitcher";
function Vh({
  open: t,
  title: r,
  description: a,
  cancelLabel: n = "取消",
  confirmLabel: s = "确认",
  workingLabel: o = "正在处理…",
  variant: d = "default",
  loading: c = !1,
  closeLabel: u = "关闭",
  className: l,
  onCancel: b,
  onConfirm: m,
  children: h
}) {
  const f = d === "destructive";
  return /* @__PURE__ */ e(
    yr,
    {
      open: t,
      onClose: b,
      onCancel: b,
      onOpenChange: (p) => !p && b(),
      closeDisabled: c,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        xo,
        {
          "data-slot": "confirm-dialog",
          className: g("w-full max-w-md", l),
          closeLabel: u,
          closeDisabled: c,
          children: [
            /* @__PURE__ */ i(yo, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2.5", children: [
                f ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(ha, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e($a, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(No, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              a && /* @__PURE__ */ e(ko, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            h && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: h }),
            /* @__PURE__ */ i(wo, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                Ee,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: c,
                  onClick: b,
                  children: n
                }
              ),
              /* @__PURE__ */ e(
                Ee,
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
let tr = [];
const no = /* @__PURE__ */ new Set();
function so() {
  no.forEach((t) => t());
}
function kf(t) {
  const r = tr.findIndex((a) => a.id === t.id);
  if (r >= 0) {
    const a = tr[r];
    (a.cascadeMode !== t.cascadeMode || a.widthPx !== t.widthPx) && (tr[r] = t, so());
  } else
    tr = [...tr, t], so();
}
function Ai(t) {
  tr.some((r) => r.id === t) && (tr = tr.filter((r) => r.id !== t), so());
}
const Sf = {
  xs: 320,
  sm: 380,
  md: 480,
  lg: 620,
  xl: 780,
  "2xl": 960
}, yn = ({
  open: t,
  visible: r,
  onClose: a,
  title: n,
  description: s,
  children: o,
  footer: d,
  size: c = "md",
  motion: u,
  width: l,
  placement: b = "right",
  closeOnClickModal: m = !0,
  resizable: h = !0,
  minWidth: f = 340,
  storageKey: p,
  push: x = !0,
  pushDistance: w = 140,
  cascadeMode: k,
  adjacentOffset: v,
  bodyClassName: C,
  className: L,
  role: D = "dialog"
}) => {
  const j = am(k), S = k ?? j, y = Tt(), T = Tt(), _ = t ?? r ?? !1, R = Ie(u), { isMounted: A, isVisible: z } = ia(_, R === "none" ? 0 : 220), K = ce(a);
  K.current = a;
  const [, E] = $(0), [I, P] = $(!1), [H, O] = $(!1), [G, Y] = $(() => {
    if (!p || typeof window > "u") return null;
    try {
      const we = Number(window.localStorage.getItem(`abc_drawer_w_${p}`));
      return Number.isFinite(we) && we >= f ? we : null;
    } catch {
      return null;
    }
  });
  ge(() => {
    const we = () => E((J) => J + 1);
    return no.add(we), () => {
      no.delete(we);
    };
  }, []);
  const ie = typeof l == "number" ? l : G ?? (c ? Sf[c] : 560) ?? 560;
  ge(() => {
    if (_)
      return kf({
        id: y,
        cascadeMode: S,
        widthPx: ie
      }), () => Ai(y);
    Ai(y);
  }, [_, y, S, ie]), ge(() => {
    if (!A) return;
    const we = (J) => {
      const me = tr[tr.length - 1];
      J.key === "Escape" && (!me || me.id === y) && (J.stopPropagation(), K.current());
    };
    return document.addEventListener("keydown", we), () => document.removeEventListener("keydown", we);
  }, [A, y]);
  const [V, re] = $(
    () => typeof window < "u" ? window.innerWidth : 1440
  );
  ge(() => {
    if (typeof window > "u") return;
    const we = () => re(window.innerWidth);
    return window.addEventListener("resize", we), () => window.removeEventListener("resize", we);
  }, []);
  const te = tr.findIndex((we) => we.id === y), le = te >= 0 ? Math.max(0, tr.length - 1 - te) : 0, oe = te >= 0 ? te + 1 : 1, Ae = te >= 0 ? tr.slice(te + 1) : [], F = tr.some((we) => we.cascadeMode === "adjacent"), Z = S === "adjacent" || F, Re = Ae.reduce((we, J) => we + (J.widthPx || 560), 0);
  let Ue = ie;
  if (Z && le > 0 && Re > 0) {
    const we = Math.max(f, V - Re - 24);
    Ue > we && (Ue = we);
  }
  const he = x && le > 0 ? Z ? v ?? Re : le * w : 0, Se = x && le > 0 ? Z ? 1 : Math.max(0.92, 1 - le * 0.025) : 1, Fe = b === "right" ? -1 : 1, Le = (we) => {
    we.preventDefault(), O(!0);
    const J = (ze) => {
      const rt = Math.max(f, window.innerWidth - 32), nr = b === "right" ? window.innerWidth - ze.clientX : ze.clientX, bt = Math.min(rt, Math.max(f, nr));
      if (P(!1), Y(bt), p)
        try {
          window.localStorage.setItem(`abc_drawer_w_${p}`, String(Math.round(bt)));
        } catch {
        }
    }, me = () => {
      O(!1), window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", me);
    };
    window.addEventListener("mousemove", J), window.addEventListener("mouseup", me);
  };
  if (!A || typeof document > "u") return null;
  const nt = I ? "100dvw" : G ? `${G}px` : typeof l == "number" ? `${Ue}px` : `${Ue}px`;
  return xr(
    /* @__PURE__ */ i(
      "div",
      {
        role: D,
        "aria-modal": D === "dialog" ? "true" : void 0,
        "aria-labelledby": n ? T : void 0,
        "aria-label": n ? void 0 : "侧边抽屉面板",
        style: { zIndex: 1020 + Math.max(0, te) * 10 },
        className: "fixed inset-0 flex overflow-hidden pointer-events-none",
        children: [
          te === 0 ? /* @__PURE__ */ e(
            "div",
            {
              onClick: () => {
                m && a();
              },
              "data-motion": R,
              className: g(
                "fixed inset-0 overscroll-contain transition-opacity bg-slate-950/45 backdrop-blur-[1.5px] pointer-events-auto",
                R !== "none" && (z ? "abc-animate-fade-in" : "abc-animate-fade-out")
              )
            }
          ) : null,
          /* @__PURE__ */ i(
            "div",
            {
              "data-motion": R,
              style: {
                width: nt,
                transform: R === "none" ? he > 0 ? `translate3d(${Fe * he}px, 0, 0) scale(${Se})` : void 0 : z ? he > 0 ? `translate3d(${Fe * he}px, 0, 0) scale(${Se})` : "translate3d(0, 0, 0)" : b === "right" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
                transitionProperty: "transform, width",
                transitionDuration: R === "none" || H ? "0ms" : "var(--abc-motion-base, 240ms)",
                transitionTimingFunction: "var(--abc-ease-standard, cubic-bezier(0.16, 1, 0.3, 1))"
              },
              className: g(
                "relative z-10 flex h-dvh max-w-full flex-col border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg)] pointer-events-auto",
                // 并排模式下去除破坏性重阴影，使用更清晰的高对比度分割线
                Z && te > 0 ? "shadow-[-12px_0_28px_-6px_rgba(0,0,0,0.18)] border-l-2" : "shadow-[var(--abc-shadow-dialog)]",
                b === "right" ? "ml-auto border-l" : "mr-auto border-r",
                L
              ),
              children: [
                h && !I && /* @__PURE__ */ i(
                  "div",
                  {
                    role: "separator",
                    "aria-orientation": "vertical",
                    "aria-label": "拖拽调节抽屉宽度",
                    onMouseDown: Le,
                    className: g(
                      "group absolute top-0 bottom-0 z-20 flex w-2 items-center justify-center cursor-col-resize select-none",
                      b === "right" ? "-left-1" : "-right-1"
                    ),
                    children: [
                      /* @__PURE__ */ e("div", { className: "h-12 w-1 rounded-full bg-transparent transition-colors group-hover:bg-[var(--abc-primary)]/60" }),
                      /* @__PURE__ */ e(os, { className: "pointer-events-none absolute h-3.5 w-3.5 text-[var(--abc-fg-muted)] opacity-0 transition-opacity group-hover:opacity-100" })
                    ]
                  }
                ),
                /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] px-5 py-3.5", children: [
                  /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                      tr.length > 1 && /* @__PURE__ */ i(
                        "span",
                        {
                          title: Z ? `并排抽屉层级: ${oe} 级` : `抽屉栈深度: ${oe} 级`,
                          className: g(
                            "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-1.5 py-0.5 font-mono text-[10px] font-semibold transition-colors",
                            le === 0 ? "bg-[var(--abc-primary)] text-[var(--abc-primary-contrast,#fff)]" : "border border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-secondary)]"
                          ),
                          children: [
                            /* @__PURE__ */ e(qi, { className: "h-2.5 w-2.5" }),
                            "L",
                            oe,
                            Z && /* @__PURE__ */ e("span", { className: "font-sans text-[9px] opacity-80", children: le === 0 ? "(当前)" : "(参考)" })
                          ]
                        }
                      ),
                      n && /* @__PURE__ */ e("h2", { id: T, className: "truncate text-sm font-semibold text-[var(--abc-fg)]", children: n })
                    ] }),
                    s && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: s })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
                    h && /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": I ? "还原默认宽度" : "全宽展开",
                        onClick: () => P((we) => !we),
                        className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: I ? /* @__PURE__ */ e(co, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(lo, { className: "h-3.5 w-3.5" })
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
                /* @__PURE__ */ e("div", { className: g("flex-1 overflow-y-auto px-5 py-4 text-xs", C), children: o }),
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
function Cf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-header",
      className: g("flex items-start justify-between gap-4 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/30 px-6 py-5", t),
      ...r
    }
  );
}
function _f({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "h2",
    {
      "data-slot": "drawer-title",
      className: g("text-lg font-semibold tracking-tight text-[var(--abc-fg)]", t),
      ...r
    }
  );
}
function If({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "p",
    {
      "data-slot": "drawer-description",
      className: g("mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", t),
      ...r
    }
  );
}
function Tf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-body",
      className: g("flex-1 space-y-6 overflow-y-auto px-6 py-5", t),
      ...r
    }
  );
}
function Mf({ className: t, ...r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "drawer-footer",
      className: g(
        "flex flex-wrap items-center justify-between gap-3 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 px-6 py-4",
        t
      ),
      ...r
    }
  );
}
const Ef = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
}, Af = {
  xs: "text-[11px]",
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm"
}, Lf = ({
  spinning: t = !0,
  tip: r,
  text: a,
  size: n,
  motion: s,
  fullscreen: o = !1,
  fullScreen: d = !1,
  className: c,
  children: u
}) => {
  const l = r ?? a, b = !!(o || d), m = Be(n, "md"), h = Ie(s), f = /* @__PURE__ */ i(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-motion": h,
      className: "inline-flex flex-col items-center justify-center gap-2 text-[var(--abc-primary)]",
      children: [
        /* @__PURE__ */ e(br, { className: g("animate-spin", Ef[m]) }),
        l && /* @__PURE__ */ e("span", { className: g("font-medium text-[var(--abc-fg-muted)]", Af[m]), children: l })
      ]
    }
  );
  return b ? t ? /* @__PURE__ */ e(
    "div",
    {
      "data-motion": h,
      className: g(
        "fixed inset-0 z-[1040] flex items-center justify-center bg-[var(--abc-bg-canvas)]/75 backdrop-blur-xs",
        h !== "none" && "abc-animate-fade-in"
      ),
      children: f
    }
  ) : null : u !== void 0 ? /* @__PURE__ */ i("div", { "data-motion": h, className: g("relative", c), children: [
    u,
    t && /* @__PURE__ */ e(
      "div",
      {
        className: g(
          "absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-[var(--abc-bg-surface)]/70 backdrop-blur-[1px]",
          h !== "none" && "abc-animate-fade-in"
        ),
        children: f
      }
    )
  ] }) : t ? /* @__PURE__ */ e("div", { "data-motion": h, className: g("flex items-center justify-center py-8", c), children: f }) : null;
}, Df = ({
  content: t,
  enabled: r = !0,
  rotate: a = -22,
  gap: n = [110, 96],
  opacity: s,
  children: o,
  className: d,
  ...c
}) => {
  const { resolvedTheme: u } = At(), l = ce(null), b = ce(null), m = ce(""), h = ce(null), f = ue(() => {
    const p = l.current;
    if (!p) return;
    if (h.current && (h.current.disconnect(), h.current = null), !r || !t || Array.isArray(t) && t.length === 0) {
      b.current && b.current.parentNode === p && p.removeChild(b.current), b.current = null, m.current = "";
      return;
    }
    if (typeof document > "u") return;
    const x = document.createElement("canvas"), w = x.getContext("2d");
    if (!w) return;
    const k = Array.isArray(t) ? t : [t], v = Math.max(window.devicePixelRatio || 1, 1), C = 210 + n[0], L = 90 + n[1];
    x.width = C * v, x.height = L * v;
    let D = "";
    try {
      w.scale(v, v), w.translate(C / 2, L / 2), w.rotate(a * Math.PI / 180), w.font = "500 12px Inter, -apple-system, sans-serif";
      const y = typeof s == "number" && Number.isFinite(s) ? Math.max(0, Math.min(1, s)) : u === "dark" ? 0.065 : 0.055;
      w.fillStyle = u === "dark" ? `rgba(226, 232, 240, ${y})` : `rgba(15, 23, 42, ${y})`, w.textAlign = "center", w.textBaseline = "middle", k.forEach((T, _) => {
        const R = (_ - (k.length - 1) / 2) * 18;
        w.fillText(T, 0, R);
      }), D = x.toDataURL();
    } catch {
      return;
    }
    if (!D) return;
    let j = b.current;
    j || (j = document.createElement("div"), b.current = j), j.getAttribute("data-watermark-overlay") !== "true" && j.setAttribute("data-watermark-overlay", "true");
    const S = [
      "position: absolute",
      "inset: 0",
      "pointer-events: none",
      "z-index: 40",
      `background-image: url(${D})`,
      "background-repeat: repeat",
      `background-size: ${C}px ${L}px`
    ].join(" !important; ") + " !important;";
    if (m.current = S, j.getAttribute("style") !== S && j.setAttribute("style", S), j.parentNode !== p && p.appendChild(j), typeof MutationObserver < "u") {
      const y = new MutationObserver((T) => {
        const _ = l.current, R = b.current;
        if (!_ || !R) return;
        let A = !1;
        for (const z of T)
          if (z.type === "childList") {
            if (Array.from(z.removedNodes).includes(R)) {
              A = !0;
              break;
            }
          } else if (z.type === "attributes" && z.target === R && ((R.getAttribute("style") || "") !== m.current || R.hidden)) {
            A = !0;
            break;
          }
        A && f();
      });
      h.current = y, y.observe(p, { childList: !0, subtree: !1 }), y.observe(j, {
        attributes: !0,
        attributeFilter: ["style", "class", "hidden"]
      });
    }
  }, [t, r, n, s, u, a]);
  return ge(() => (f(), () => {
    h.current && (h.current.disconnect(), h.current = null);
  }), [f]), /* @__PURE__ */ e("div", { ref: l, className: g("relative", d), ...c, children: o });
}, Rf = {
  info: {
    box: "border-[var(--abc-info)]/25 bg-[var(--abc-info-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(un, { className: "h-4 w-4 text-[var(--abc-info)]" })
  },
  success: {
    box: "border-[var(--abc-success)]/25 bg-[var(--abc-success-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(Xr, { className: "h-4 w-4 text-[var(--abc-success)]" })
  },
  warning: {
    box: "border-[var(--abc-warning)]/25 bg-[var(--abc-warning-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(ha, { className: "h-4 w-4 text-[var(--abc-warning)]" })
  },
  danger: {
    box: "border-[var(--abc-danger)]/25 bg-[var(--abc-danger-soft)] text-[var(--abc-fg)]",
    icon: /* @__PURE__ */ e(oa, { className: "h-4 w-4 text-[var(--abc-danger)]" })
  }
}, jf = {
  xs: "px-2.5 py-1.5 text-[11px]",
  sm: "px-3.5 py-2.5 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm"
}, Gh = ({
  tone: t = "info",
  title: r,
  description: a,
  children: n,
  showIcon: s = !0,
  closable: o = !1,
  onClose: d,
  action: c,
  size: u,
  motion: l,
  className: b
}) => {
  const [m, h] = $(!1), f = Be(u, "sm"), p = Ie(l);
  if (m) return null;
  const x = Rf[t], w = a ?? n;
  return /* @__PURE__ */ i(
    "div",
    {
      role: "alert",
      "data-motion": p,
      className: g(
        "abc-motion-surface flex items-start gap-2.5 rounded-[var(--abc-radius-md)] border",
        jf[f],
        p !== "none" && "abc-animate-fade-in",
        x.box,
        b
      ),
      children: [
        s && /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: x.icon }),
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
              h(!0), d == null || d();
            },
            className: "shrink-0 rounded-xs p-0.5 text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
            children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    }
  );
}, Bf = {
  xs: 48,
  sm: 68,
  md: 84,
  lg: 104
}, Pf = {
  xs: 4,
  sm: 7,
  md: 9,
  lg: 12
}, zf = {
  primary: "var(--abc-primary)",
  success: "var(--abc-success)",
  warning: "var(--abc-warning)",
  danger: "var(--abc-danger)"
}, Of = ({
  percent: t,
  type: r = "line",
  tone: a = "primary",
  strokeColor: n,
  showInfo: s = !0,
  size: o,
  motion: d,
  className: c
}) => {
  const u = Be(typeof o == "string" ? o : void 0, "sm"), l = Ie(d), b = Math.max(0, Math.min(100, Math.round(t))), m = n || zf[a];
  if (r === "circle") {
    const f = typeof o == "number" ? o : Bf[u], p = Math.max(4, Math.round(f * 0.09)), x = (f - p) / 2, w = 2 * Math.PI * x, k = w - b / 100 * w;
    return /* @__PURE__ */ i(
      "div",
      {
        role: "progressbar",
        "data-motion": l,
        "aria-valuenow": b,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: g("relative inline-flex items-center justify-center", c),
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
                strokeWidth: p
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
                strokeWidth: p,
                strokeLinecap: "round",
                strokeDasharray: w,
                strokeDashoffset: k,
                className: "transition-all duration-[var(--abc-motion-slow)]"
              }
            )
          ] }),
          s && /* @__PURE__ */ i("span", { className: "absolute font-mono text-xs font-semibold text-[var(--abc-fg)] tabular-nums", children: [
            b,
            "%"
          ] })
        ]
      }
    );
  }
  const h = typeof o == "number" ? o : Pf[u];
  return /* @__PURE__ */ i(
    "div",
    {
      role: "progressbar",
      "data-motion": l,
      "aria-valuenow": b,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      className: g("flex w-full items-center gap-2.5", c),
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
                style: { width: `${b}%`, backgroundColor: m }
              }
            )
          }
        ),
        s && /* @__PURE__ */ i("span", { className: "w-9 shrink-0 text-right font-mono text-xs text-[var(--abc-fg-secondary)] tabular-nums", children: [
          b,
          "%"
        ] })
      ]
    }
  );
}, $f = {
  success: {
    icon: /* @__PURE__ */ e(Xr, { className: "h-8 w-8 text-[var(--abc-success)]" }),
    badgeClass: "bg-[var(--abc-success-soft)]"
  },
  info: {
    icon: /* @__PURE__ */ e(un, { className: "h-8 w-8 text-[var(--abc-info)]" }),
    badgeClass: "bg-[var(--abc-info-soft)]"
  },
  warning: {
    icon: /* @__PURE__ */ e(ha, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  error: {
    icon: /* @__PURE__ */ e(oa, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  },
  403: {
    icon: /* @__PURE__ */ e(rs, { className: "h-8 w-8 text-[var(--abc-warning)]" }),
    badgeClass: "bg-[var(--abc-warning-soft)]"
  },
  404: {
    icon: /* @__PURE__ */ e(Ru, { className: "h-8 w-8 text-[var(--abc-primary)]" }),
    badgeClass: "bg-[var(--abc-primary-soft)]"
  },
  500: {
    icon: /* @__PURE__ */ e(Du, { className: "h-8 w-8 text-[var(--abc-danger)]" }),
    badgeClass: "bg-[var(--abc-danger-soft)]"
  }
}, Ff = ({
  status: t = "info",
  title: r,
  subTitle: a,
  extra: n,
  children: s,
  size: o,
  motion: d,
  className: c
}) => {
  const u = $f[t], l = Be(o, "md"), b = Ie(d);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-motion": b,
      className: g(
        "flex flex-col items-center justify-center text-center",
        {
          xs: "px-4 py-6",
          sm: "px-5 py-8",
          md: "px-6 py-12",
          lg: "px-8 py-16"
        }[l],
        b !== "none" && "abc-animate-fade-in",
        c
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: g(
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
class Wf extends at.Component {
  constructor() {
    super(...arguments);
    Bs(this, "state", { error: null });
    Bs(this, "handleReset", () => {
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
      Ff,
      {
        status: "500",
        title: `${n}加载或渲染发生异常`,
        subTitle: a.message || "捕获到未知运行时渲染错误，其他工作区页签不受影响。",
        extra: /* @__PURE__ */ e(
          Ee,
          {
            variant: "primary",
            icon: /* @__PURE__ */ e(Fa, { className: "h-3.5 w-3.5" }),
            onClick: this.handleReset,
            children: "重新加载此模块"
          }
        )
      }
    );
  }
}
const Yh = Wf;
function qh({
  title: t,
  secret: r,
  open: a,
  secretValue: n,
  description: s = "此密钥仅显示一次。请在关闭前复制并安全存储。",
  secretLabel: o,
  metadata: d = [],
  closeLabel: c = "关闭",
  acknowledgeLabel: u = "我已妥善保存此密钥",
  copyLabel: l = "复制密钥",
  copiedLabel: b = "已复制",
  copyErrorMessage: m = "剪贴板写入失败，请手动选择复制。",
  className: h,
  onClose: f
}) {
  const p = r ?? n ?? null, x = a !== void 0 ? a : !!p, [w, k] = ve.useState(!1), [v, C] = ve.useState(!1), [L, D] = ve.useState(null);
  if (ve.useEffect(() => {
    x || (k(!1), C(!1), D(null));
  }, [x]), !x || !p)
    return null;
  const j = async () => {
    D(null), await ls(p) ? (k(!0), setTimeout(() => k(!1), 2e3)) : D(m);
  };
  return /* @__PURE__ */ e(
    yr,
    {
      open: x,
      onClose: f,
      onCancel: f,
      onOpenChange: (S) => !S && f(),
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        xo,
        {
          "data-slot": "one-time-secret-dialog",
          className: g("w-full max-w-lg", h),
          closeLabel: c,
          children: [
            /* @__PURE__ */ i(yo, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300", children: /* @__PURE__ */ e(Xi, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(No, { className: "text-base font-semibold leading-tight", children: t })
              ] }),
              /* @__PURE__ */ e(ko, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: s })
            ] }),
            /* @__PURE__ */ i("div", { className: "space-y-3 py-2 text-xs", children: [
              /* @__PURE__ */ e(
                va,
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
                  Ee,
                  {
                    type: "button",
                    variant: "outline",
                    size: "xs",
                    onClick: j,
                    className: "absolute right-2 top-2 h-7 w-7 p-0",
                    title: w ? b : l,
                    "aria-label": w ? b : l,
                    children: w ? /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-emerald-600", "aria-hidden": "true" }) : /* @__PURE__ */ e(ga, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                  }
                )
              ] }),
              L && /* @__PURE__ */ e("p", { className: "text-[11px] text-red-600 dark:text-red-400", children: L }),
              d.length > 0 && /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: /* @__PURE__ */ e(
                $c,
                {
                  items: d.map((S) => ({
                    label: S.label,
                    value: S.value,
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
                    onChange: (S) => C(S.target.checked),
                    className: "mt-0.5 h-4 w-4 rounded border-[var(--abc-border)] text-[var(--abc-primary)] focus:ring-[var(--abc-primary)] cursor-pointer"
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg)] font-medium leading-tight", children: u })
              ] })
            ] }),
            /* @__PURE__ */ e(wo, { className: "pt-2", children: /* @__PURE__ */ e(
              Ee,
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
const Kf = {
  default: "xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]",
  balanced: "xl:grid-cols-[minmax(0,1.2fr)_minmax(400px,0.8fr)]",
  "wide-master": "xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.5fr)]"
};
function Xh({
  children: t,
  inspector: r,
  ratio: a = "default",
  stickyInspector: n = !0,
  className: s,
  ...o
}) {
  const d = ve.Children.toArray(t), c = r !== void 0 ? t : d[0], u = r !== void 0 ? r : d.slice(1);
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "split-inspector-layout",
      className: g("grid items-start gap-6", Kf[a], s),
      ...o,
      children: [
        /* @__PURE__ */ e("div", { className: "min-w-0", children: c }),
        /* @__PURE__ */ e("div", { className: g("min-w-0", n && "xl:sticky xl:top-20"), children: u })
      ]
    }
  );
}
const Hf = ve.forwardRef(
  ({
    title: t,
    subtitle: r,
    badge: a,
    headerActions: n,
    showClear: s = !1,
    onClear: o,
    clearLabel: d = "清除选中",
    loading: c = !1,
    loadingText: u = "正在加载详情…",
    error: l,
    isEmpty: b = !1,
    hasSelection: m,
    emptyIcon: h,
    emptyMessage: f = "请在左侧选择一项以检视详细信息",
    emptyDescription: p,
    footer: x,
    children: w,
    className: k,
    ...v
  }, C) => {
    const L = m !== void 0 ? !m : b, D = !!(t || r || a || n);
    return /* @__PURE__ */ i(
      "aside",
      {
        ref: C,
        "data-slot": "inspector-panel",
        className: g(
          "flex flex-col rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-5 shadow-2xs transition-all",
          k
        ),
        ...v,
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
                Ee,
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
            /* @__PURE__ */ e(br, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { children: u })
          ] }) : l ? /* @__PURE__ */ e("div", { className: "my-2", children: l }) : L ? /* @__PURE__ */ i("div", { className: "flex min-h-[240px] flex-col items-center justify-center gap-2 rounded-[var(--abc-radius-md)] border border-dashed border-[var(--abc-border)] bg-[var(--abc-bg-subtle)] p-6 text-center", children: [
            h ?? /* @__PURE__ */ e("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(bn, { className: "h-5 w-5 stroke-[1.5]", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e("p", { className: "text-xs font-medium text-[var(--abc-fg)]", children: f }),
            p && /* @__PURE__ */ e("p", { className: "max-w-[280px] text-[11px] text-[var(--abc-fg-muted)]", children: p })
          ] }) : /* @__PURE__ */ e("div", { className: "flex-1 space-y-4", children: w }),
          x && /* @__PURE__ */ e("footer", { className: "mt-4 border-t border-[var(--abc-border)] pt-3.5", children: x })
        ]
      }
    );
  }
);
Hf.displayName = "InspectorPanel";
function us(t, r) {
  if (!(!t || r == null || r === ""))
    return Array.isArray(r) ? r.reduce((a, n) => a == null ? void 0 : a[n], t) : typeof r == "string" && r.includes(".") ? r.split(".").reduce((a, n) => a == null ? void 0 : a[n], t) : t[r];
}
function Uf(t, r = 150) {
  if (typeof t == "number" && Number.isFinite(t)) return t;
  if (typeof t == "string") {
    const a = parseFloat(t);
    if (Number.isFinite(a) && !t.trim().endsWith("%")) return a;
  }
  return r;
}
const Hs = {
  compact: "py-2 px-3",
  default: "py-3 px-4",
  comfortable: "py-3.5 px-4"
}, Li = {
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
}, Di = [
  "info",
  "success",
  "warning",
  "danger",
  "purple",
  "cyan",
  "orange",
  "teal",
  "pink"
], Vf = [
  { color: "#3b82f6", label: "经典蓝" },
  { color: "#10b981", label: "翡翠绿" },
  { color: "#f59e0b", label: "琥珀橙" },
  { color: "#f43f5e", label: "珊瑚红" },
  { color: "#8b5cf6", label: "极光紫" }
];
function Ri(t) {
  if (typeof t == "number")
    return $e(t < 1e11 ? t * 1e3 : t);
  const r = String(t).trim();
  return /^\d{10}$/.test(r) ? $e(Number(r) * 1e3) : /^\d{13}$/.test(r) ? $e(Number(r)) : $e(t);
}
function Gf({
  value: t,
  record: r,
  config: a
}) {
  const { toast: n } = At(), s = (b) => a.checkedValue !== void 0 ? String(b) === String(a.checkedValue) : b === !0 || b === 1 || b === "1", [o, d] = $(() => s(t)), [c, u] = $(!1);
  ge(() => {
    d(s(t));
  }, [t, a.checkedValue]);
  const l = async (b) => {
    if (!a.onChange || c) return;
    const m = o;
    d(b), u(!0);
    try {
      await a.onChange(b, r);
    } catch (h) {
      d(m), n.error((h == null ? void 0 : h.message) || "更新状态失败");
    } finally {
      u(!1);
    }
  };
  return /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5", onClick: (b) => b.stopPropagation(), children: [
    /* @__PURE__ */ e(
      cr,
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
function Wc(t, r, a, n) {
  const s = a.type === "switch" || typeof a.type == "object" && a.type !== null && a.type.type === "switch", o = typeof a.type == "object" && a.type !== null ? a.type : a.type ? { type: a.type } : a.valueType ? { type: a.valueType } : void 0;
  if ((o == null ? void 0 : o.type) === "switch" && (s || o.onChange || o.checkedValue !== void 0))
    return /* @__PURE__ */ e(Gf, { value: t, record: r, config: o });
  if (t == null || t === "")
    return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const d = (o == null ? void 0 : o.options) ?? a.options;
  if (d && d.length > 0) {
    const l = String(t);
    let b = d.findIndex((m) => String(m.value) === l);
    if (b < 0) {
      const m = l.toLowerCase();
      b = d.findIndex((h) => String(h.value).toLowerCase() === m);
    }
    if (b >= 0) {
      const m = d[b], h = m.status ? String(m.status).toLowerCase() : "", f = m.color ? String(m.color).toLowerCase() : "", p = (h ? Li[h] : void 0) ?? (f ? Li[f] : void 0) ?? (!m.status && !m.color ? Di[b % Di.length] : void 0), x = !a.__autoOptionsFromSearch;
      return /* @__PURE__ */ e(
        pa,
        {
          tone: p,
          status: m.status,
          color: m.color,
          dot: x,
          children: m.label
        }
      );
    }
  }
  const c = o == null ? void 0 : o.type;
  let u;
  switch (c) {
    case "money": {
      const l = Number(t);
      u = Number.isNaN(l) ? String(t) : /* @__PURE__ */ i("span", { className: "font-mono font-semibold text-[var(--abc-fg)] tabular-nums", children: [
        "¥",
        l.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      ] });
      break;
    }
    case "number": {
      const l = Number(t);
      u = Number.isNaN(l) ? String(t) : /* @__PURE__ */ e("span", { className: "font-mono tabular-nums", children: l.toLocaleString("zh-CN") });
      break;
    }
    case "date": {
      const l = Ri(t), b = (o == null ? void 0 : o.format) || "YYYY-MM-DD";
      u = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: l.isValid() ? l.format(b) : String(t) });
      break;
    }
    case "datetime": {
      const l = Ri(t), b = (o == null ? void 0 : o.format) || "YYYY-MM-DD HH:mm:ss";
      u = /* @__PURE__ */ e("span", { className: "font-mono text-[var(--abc-fg-muted)] tabular-nums", children: l.isValid() ? l.format(b) : String(t) });
      break;
    }
    case "image":
      return /* @__PURE__ */ e(
        xn,
        {
          src: String(t),
          width: (o == null ? void 0 : o.imageWidth) ?? 32,
          height: (o == null ? void 0 : o.imageHeight) ?? 32
        }
      );
    case "progress":
      return /* @__PURE__ */ e(
        Of,
        {
          percent: Number(t) || 0,
          strokeColor: o == null ? void 0 : o.progressColor,
          className: "min-w-[92px]"
        }
      );
    case "code":
      u = /* @__PURE__ */ e("code", { className: "rounded-[var(--abc-radius-xs)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--abc-fg)]", children: String(t) });
      break;
    case "copy":
      return /* @__PURE__ */ e(wi, { text: String(t) });
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
      return /* @__PURE__ */ e(pa, { tone: t ? "success" : "neutral", dot: !0, children: t ? "已启用" : "已停用" });
    case "status":
    case "tag":
    case "badge":
      return /* @__PURE__ */ e(pa, { dot: !0, children: String(t) });
    default:
      u = String(t);
  }
  if (a.linkToView && n) {
    const l = typeof a.linkToView == "string" ? a.linkToView : void 0;
    return /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        onClick: (b) => {
          b.stopPropagation(), n(r, l);
        },
        className: "max-w-full truncate text-left font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
        children: u
      }
    );
  }
  return a.copyable ? /* @__PURE__ */ e(wi, { text: String(t), displayText: u }) : a.ellipsis ? /* @__PURE__ */ e("span", { title: String(t), className: "block max-w-full truncate", children: u }) : u;
}
function ji({
  columns: t,
  data: r,
  dataSource: a,
  rowKey: n = "id",
  loading: s = !1,
  density: o = "default",
  selectedKeys: d,
  onSelectionChange: c,
  rowSelection: u,
  sortState: l,
  onSortChange: b,
  headerFilterMode: m = !1,
  headerFilters: h = {},
  onHeaderFilterChange: f,
  headerFilterRender: p,
  activeFilterKeys: x,
  activeFilterLabels: w,
  filterHighlightColor: k,
  onFilterHighlightColorChange: v,
  allColumns: C,
  hiddenColumnKeys: L = [],
  onToggleColumnVisible: D,
  columnWidths: j = {},
  onColumnResize: S,
  resizable: y,
  motion: T,
  columnFixed: _ = {},
  onColumnPin: R,
  onColumnHide: A,
  onResetColumns: z,
  onColumnReorder: K,
  expandable: E,
  treeData: I = !1,
  rowDraggable: P,
  draggable: H,
  onRowDragEnd: O,
  onDragEnd: G,
  onRowView: Y,
  activeRowKey: ie,
  onRowClick: V,
  onRow: re,
  onEmptyReset: te,
  maxHeight: le,
  ariaLabel: oe = "数据表格",
  emptyText: Ae = "暂无符合条件的数据",
  className: F
}) {
  const Z = r ?? a ?? [], Re = !!(P ?? H), Ue = se(() => {
    if (O) return O;
    if (G)
      return (B, Q) => G(String(B), String(Q));
  }, [O, G]), he = Ie(T), Se = ce(null), Fe = ce(null), [Le, nt] = $(null), [we, J] = $(null), me = ce(null), ze = ce(!1), rt = ce(null), [nr, bt] = $({}), [ht, Wt] = $(0), [_t, Pr] = $({ left: !1, right: !1 }), [wr, mr] = $(!1), [Ce, st] = $(null), $t = se(
    () => ({ ...nr, ...j }),
    [nr, j]
  ), fr = y ?? !!S, Yt = (B, Q) => {
    bt((fe) => ({ ...fe, [B]: Q })), S == null || S(B, Q);
  }, ct = () => {
    const B = Se.current;
    if (!B) return;
    const Q = B.scrollLeft > 1, fe = B.scrollWidth - B.clientWidth - B.scrollLeft > 1;
    Pr((be) => be.left === Q && be.right === fe ? be : { left: Q, right: fe });
  };
  $n(() => {
    const B = Se.current;
    if (!B) return;
    const Q = () => {
      B.clientWidth > 0 && Wt(B.clientWidth), ct();
    };
    if (Q(), typeof ResizeObserver > "u") return;
    const fe = new ResizeObserver((be) => {
      var ne, ae;
      const pe = (ae = (ne = be[0]) == null ? void 0 : ne.contentRect) == null ? void 0 : ae.width;
      typeof pe == "number" && pe > 0 ? Wt(Math.floor(pe)) : Q(), ct();
    });
    return fe.observe(B), () => fe.disconnect();
  }, []);
  const Je = (B, Q) => typeof n == "function" ? n(B) : (B == null ? void 0 : B[n]) ?? Q, Ge = (B) => B.key in _ ? _[B.key] ?? void 0 : B.fixed, Ye = se(() => {
    const B = we && we.length > 0 ? [...t].sort((pe, ne) => {
      const ae = we.indexOf(pe.key), Ne = we.indexOf(ne.key);
      return ae === -1 && Ne === -1 ? 0 : ae === -1 ? 1 : Ne === -1 ? -1 : ae - Ne;
    }) : t, Q = [], fe = [], be = [];
    for (const pe of B) {
      const ne = Ge(pe);
      ne === "left" ? Q.push(pe) : ne === "right" ? be.push(pe) : fe.push(pe);
    }
    return [...Q, ...fe, ...be];
  }, [t, _, we]), Rt = d ?? (u == null ? void 0 : u.selectedRowKeys), jt = c ?? (u == null ? void 0 : u.onChange), Xe = Array.isArray(Rt) && typeof jt == "function", Ve = !!E, qt = (E == null ? void 0 : E.childrenColumnName) || "children", Ir = (E == null ? void 0 : E.indentSize) ?? 18, q = (B) => {
    const Q = [], fe = (be) => {
      be.forEach((pe, ne) => {
        const ae = Je(pe, ne), Ne = pe == null ? void 0 : pe[qt], qe = Array.isArray(Ne) && Ne.length > 0;
        (qe || E != null && E.expandedRowRender && (!E.rowExpandable || E.rowExpandable(pe))) && Q.push(ae), qe && fe(Ne);
      });
    };
    return fe(B), Array.from(new Set(Q));
  }, de = se(() => E != null && E.defaultExpandAllRows ? q(Z) : [], []), [je, lt] = _r({
    value: E == null ? void 0 : E.expandedRowKeys,
    defaultValue: de,
    onChange: E == null ? void 0 : E.onExpandedRowsChange
  }), ft = ce(de.length > 0);
  ge(() => {
    if (!(E != null && E.defaultExpandAllRows) || (E == null ? void 0 : E.expandedRowKeys) !== void 0 || ft.current || Z.length === 0)
      return;
    const B = q(Z);
    B.length > 0 && (ft.current = !0, lt(B));
  }, [E == null ? void 0 : E.defaultExpandAllRows, E == null ? void 0 : E.expandedRowKeys, Z, qt]);
  const dt = (B, Q) => {
    var be;
    const fe = je.includes(B);
    lt(
      fe ? je.filter((pe) => pe !== B) : [...je, B]
    ), Q && ((be = E == null ? void 0 : E.onExpand) == null || be.call(E, !fe, Q));
  }, it = se(() => {
    const B = [], Q = (fe, be) => {
      fe.forEach((pe, ne) => {
        var Pe;
        const ae = Je(pe, ne), Ne = Array.isArray(pe == null ? void 0 : pe[qt]) ? pe[qt] : [], qe = Ne.length > 0 || !!(I && ((Pe = E == null ? void 0 : E.rowExpandable) != null && Pe.call(E, pe)));
        B.push({ record: pe, key: ae, rowIdx: ne, depth: be, hasTreeChildren: qe }), Ne.length > 0 && je.includes(ae) && Q(Ne, be + 1);
      });
    };
    return Q(Z, 0), B;
  }, [Z, je, n, qt, I, E == null ? void 0 : E.rowExpandable]), It = se(() => {
    const B = (Xe ? 44 : 0) + (Ve ? 40 : 0), Q = {};
    let fe = 0;
    for (const Ne of Ye) {
      const qe = Math.max(120, Array.from(Ne.title || "").length * 14 + 76), Pe = $t[Ne.key] ?? Uf(Ne.width, qe);
      Q[Ne.key] = Pe, fe += Pe;
    }
    const be = { ...Q }, pe = ht, ne = pe > B + fe ? pe - (B + fe) : 0;
    if (ne > 0) {
      const Ne = (Qe) => Qe.key === "__abc_actions__" || Qe.key === "__actions__" || Qe.key === "__drag_handle__" || Qe.key in $t || !!Ge(Qe), qe = Ye.filter((Qe) => !Ne(Qe)), Pe = Ye.filter(
        (Qe) => Qe.key !== "__abc_actions__" && Qe.key !== "__actions__" && Qe.key !== "__drag_handle__"
      ), Oe = qe.length > 0 ? qe : Pe;
      if (Oe.length > 0) {
        const Qe = Oe.reduce((kt, ye) => kt + Q[ye.key], 0) || Oe.length;
        let Mt = 0;
        Oe.forEach((kt, ye) => {
          const ut = ye === Oe.length - 1 ? ne - Mt : Math.floor(ne * Q[kt.key] / Qe);
          Mt += ut, be[kt.key] = Q[kt.key] + Math.max(0, ut);
        });
      }
    }
    const ae = B + Ye.reduce((Ne, qe) => Ne + (be[qe.key] ?? 150), 0);
    return {
      resolvedWidths: be,
      resolvedTableWidth: pe > 0 ? Math.max(pe, ae) : void 0
    };
  }, [Ye, $t, _, ht, Xe, Ve]), yt = se(() => {
    const B = {}, Q = {};
    let fe = "", be = "", pe = (Xe ? 44 : 0) + (Ve ? 40 : 0);
    for (const ae of Ye)
      Ge(ae) === "left" && (B[ae.key] = pe, pe += It.resolvedWidths[ae.key] ?? 150, fe = ae.key);
    let ne = 0;
    for (let ae = Ye.length - 1; ae >= 0; ae--) {
      const Ne = Ye[ae];
      Ge(Ne) === "right" && (Q[Ne.key] = ne, ne += It.resolvedWidths[Ne.key] ?? 150, be = Ne.key);
    }
    return {
      leftOffsets: B,
      rightOffsets: Q,
      lastLeftKey: fe,
      firstRightKey: be,
      hasAnyLeftFixed: !!fe
    };
  }, [Ye, It, _, Xe, Ve]);
  ge(() => {
    ct();
  }, [It.resolvedTableWidth, Z.length]);
  const sr = se(
    () => it.filter(
      (B) => {
        var Q, fe;
        return !((fe = (Q = u == null ? void 0 : u.getCheckboxProps) == null ? void 0 : Q.call(u, B.record)) != null && fe.disabled);
      }
    ),
    [it, u]
  ), Lt = se(
    () => sr.map((B) => B.key),
    [sr]
  ), Kt = Xe && Lt.length > 0 && Lt.every((B) => Rt.includes(B)), zr = Xe && !Kt && Lt.some((B) => Rt.includes(B)), pr = (B) => {
    if (!Xe) return;
    if (zr ? !0 : B) {
      const fe = Array.from(/* @__PURE__ */ new Set([...Rt, ...Lt]));
      jt(
        fe,
        it.filter((be) => fe.includes(be.key)).map((be) => be.record)
      );
    } else {
      const fe = Rt.filter((be) => !Lt.includes(be));
      jt(fe, []);
    }
  }, Tr = (B) => {
    if (!Xe) return;
    const fe = Rt.includes(B) ? Rt.filter((be) => be !== B) : [...Rt, B];
    jt(
      fe,
      it.filter((be) => fe.includes(be.key)).map((be) => be.record)
    );
  }, Jr = (B, Q, fe = "right") => {
    if (!fr) return;
    B.preventDefault(), B.stopPropagation();
    const be = B.clientX, pe = B.currentTarget.parentElement, ne = $t[Q.key] ?? (typeof Q.width == "number" ? Q.width : void 0) ?? It.resolvedWidths[Q.key] ?? (pe == null ? void 0 : pe.offsetWidth) ?? 140, ae = Q.key === "__abc_actions__" ? 80 : 72, Ne = typeof document < "u" ? document.body.style.cursor : "", qe = typeof document < "u" ? document.body.style.userSelect : "";
    typeof document < "u" && (document.body.style.cursor = "col-resize", document.body.style.userSelect = "none");
    const Pe = (Qe) => {
      const Mt = Qe.clientX - be, kt = fe === "left" ? Math.max(ae, Math.round(ne - Mt)) : Math.max(ae, Math.round(ne + Mt));
      Yt(Q.key, kt);
    }, Oe = () => {
      typeof document < "u" && (document.body.style.cursor = Ne, document.body.style.userSelect = qe), window.removeEventListener("mousemove", Pe), window.removeEventListener("mouseup", Oe);
    };
    window.addEventListener("mousemove", Pe), window.addEventListener("mouseup", Oe);
  };
  ge(() => {
    if (!Le) return;
    const B = (Q) => {
      if (Q.key === "Escape") {
        const fe = me.current;
        nt(null), J(null), me.current = null, rt.current = null, ze.current = !1, fe && K && K(fe);
      }
    };
    return document.addEventListener("keydown", B, !0), () => document.removeEventListener("keydown", B, !0);
  }, [Le, K]);
  const Mr = Ye.map((B) => B.key).join("|");
  $n(() => {
    const B = rt.current;
    if (!B) return;
    rt.current = null;
    const Q = Se.current;
    if (!Q || he === "none" || typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const be = he === "subtle" ? 140 : 220, pe = "cubic-bezier(0.22, 1, 0.36, 1)";
    Q.querySelectorAll("[data-col-key]").forEach((ne) => {
      const ae = ne.dataset.colKey;
      if (!ae) return;
      const Ne = B.get(ae);
      if (Ne === void 0) return;
      const qe = ne.getBoundingClientRect().left, Pe = Ne - qe;
      if (Math.abs(Pe) <= 1) return;
      typeof ne.animate == "function" && ne.animate([{ translate: `${Pe}px 0` }, { translate: "0 0" }], {
        duration: be,
        easing: pe
      });
      const Oe = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(ae) : ae, Qe = Q.querySelectorAll(`[data-col-cell="${Oe}"]`), Mt = Math.min(Qe.length, 20);
      for (let kt = 0; kt < Mt; kt++) {
        const ye = Qe[kt];
        typeof ye.animate == "function" && ye.animate([{ translate: `${Pe}px 0` }, { translate: "0 0" }], {
          duration: be,
          easing: pe
        });
      }
    });
  }, [Mr, he]);
  const or = (B) => !!(B.sortable || B.sorter), Or = (B) => {
    if (!or(B) || !b) return;
    const Q = (l == null ? void 0 : l.key) === B.key ? l.direction : null, fe = Q === null ? "asc" : Q === "asc" ? "desc" : null;
    b(B.key, fe);
  };
  ge(() => {
    if (!Ce) return;
    const B = (fe) => {
      var be;
      fe && fe.type === "mousedown" && ((be = Fe.current) != null && be.contains(fe.target)) || st(null);
    }, Q = (fe) => {
      fe.key === "Escape" && st(null);
    };
    return document.addEventListener("mousedown", B), document.addEventListener("keydown", Q, !0), window.addEventListener("scroll", B, !0), () => {
      document.removeEventListener("mousedown", B), document.removeEventListener("keydown", Q, !0), window.removeEventListener("scroll", B, !0);
    };
  }, [Ce]);
  const Qr = (B, Q) => {
    if (Q.key === "__abc_actions__" || Q.key === "__actions__" || Q.key === "__drag_handle__" || !!!(or(Q) && b || R || K || A || D || v || z)) return;
    B.preventDefault(), mr(!1);
    const be = typeof window < "u" ? window.innerWidth : 1024, pe = typeof window < "u" ? window.innerHeight : 768;
    st({
      col: Q,
      x: Math.max(8, Math.min(B.clientX, be - 208 - 8)),
      y: Math.max(8, Math.min(B.clientY, pe - 340 - 8))
    });
  }, Ht = se(
    () => Ye.filter(
      (B) => B.key !== "__abc_actions__" && B.key !== "__actions__" && B.key !== "__drag_handle__"
    ),
    [Ye]
  ), Nr = se(
    () => (C ?? Ht).filter(
      (B) => !B.hideInTable && B.key !== "__abc_actions__" && B.key !== "__actions__" && B.key !== "__drag_handle__"
    ),
    [C, Ht]
  ), $r = (B, Q) => {
    if (!K) return;
    const fe = Ht.map((ae) => ae.key), be = fe.indexOf(B);
    if (be < 0) return;
    const pe = Q === "left" ? be - 1 : be + 1;
    if (pe < 0 || pe >= fe.length) return;
    const ne = [...fe];
    [ne[be], ne[pe]] = [ne[pe], ne[be]], K(ne), st(null);
  }, ya = Ye.length + (Xe ? 1 : 0) + (Ve ? 1 : 0), Fr = Ce ? is(Se.current) : null, Ft = !!(m && Ye.some((B) => B.filterable));
  return /* @__PURE__ */ i("div", { className: "relative", children: [
    s && it.length > 0 && /* @__PURE__ */ e(
      "div",
      {
        "aria-live": "polite",
        "aria-busy": "true",
        className: "pointer-events-auto absolute inset-0 z-30 flex items-center justify-center rounded-[var(--abc-radius-lg)] bg-[var(--abc-bg-surface)]/60 backdrop-blur-[1px] transition-opacity",
        children: /* @__PURE__ */ e(br, { className: "h-6 w-6 animate-spin text-[var(--abc-primary)]" })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        ref: Se,
        tabIndex: 0,
        role: "region",
        "aria-label": oe,
        "data-motion": he,
        onScroll: ct,
        style: le !== void 0 ? { maxHeight: typeof le == "number" ? `${le}px` : le } : void 0,
        className: g(
          "abc-table-wrapper overflow-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
          F
        ),
        children: /* @__PURE__ */ i(
          "table",
          {
            style: {
              width: It.resolvedTableWidth ? `${It.resolvedTableWidth}px` : "100%",
              tableLayout: "fixed"
            },
            className: "w-full border-separate border-spacing-0 text-left text-xs",
            children: [
              /* @__PURE__ */ i("colgroup", { children: [
                Xe && /* @__PURE__ */ e("col", { style: { width: "44px" } }),
                Ve && /* @__PURE__ */ e("col", { style: { width: "40px" } }),
                Ye.map((B) => /* @__PURE__ */ e(
                  "col",
                  {
                    "data-col-width-key": B.key,
                    style: { width: `${It.resolvedWidths[B.key]}px` }
                  },
                  B.key
                ))
              ] }),
              /* @__PURE__ */ i("thead", { className: "sticky top-0 z-20 bg-[var(--abc-bg-muted)]", children: [
                /* @__PURE__ */ i("tr", { children: [
                  Xe && /* @__PURE__ */ e(
                    "th",
                    {
                      style: { left: 0 },
                      className: g(
                        "sticky z-30 w-11 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2.5 py-3 text-center",
                        !yt.hasAnyLeftFixed && _t.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
                      ),
                      children: /* @__PURE__ */ e(
                        za,
                        {
                          checked: Kt,
                          indeterminate: zr,
                          onChange: pr
                        }
                      )
                    }
                  ),
                  Ve && /* @__PURE__ */ e(
                    "th",
                    {
                      style: yt.hasAnyLeftFixed ? { left: Xe ? 44 : 0 } : void 0,
                      "aria-label": "展开列",
                      className: g(
                        "w-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-2 py-3",
                        yt.hasAnyLeftFixed && "sticky z-20"
                      )
                    }
                  ),
                  Ye.map((B, Q) => {
                    const fe = It.resolvedWidths[B.key], be = Ge(B), pe = or(B), ne = (l == null ? void 0 : l.key) === B.key ? l.direction : null, ae = Le === B.key, Ne = !!(x != null && x.includes(B.key)), qe = w == null ? void 0 : w[B.key], Pe = Ye[Q + 1], Oe = Pe ? Ge(Pe) : void 0, Qe = !!(Pe && Oe !== "right"), Mt = B.key === yt.firstRightKey, kt = p && (B.filterable || m) ? p(B) : null, ye = {
                      width: fe ? `${fe}px` : void 0,
                      ...be === "left" ? { left: `${yt.leftOffsets[B.key] ?? 0}px` } : {},
                      ...be === "right" ? { right: `${yt.rightOffsets[B.key] ?? 0}px` } : {},
                      ...Ne ? {
                        backgroundColor: k || "#3b82f6",
                        color: "#ffffff"
                      } : {}
                    }, ut = (Ze) => {
                      if (!Le || !K) return;
                      const wt = we && we.length > 0 ? we : Ye.filter((Xt) => Xt.key !== "__abc_actions__" && Xt.key !== "__actions__").map((Xt) => Xt.key), gt = wt.indexOf(Le), Ke = wt.indexOf(Ze);
                      if (gt < 0 || Ke < 0 || gt === Ke) return;
                      if (Se.current) {
                        const Xt = /* @__PURE__ */ new Map();
                        Se.current.querySelectorAll("[data-col-key]").forEach((wa) => {
                          const Na = wa.dataset.colKey;
                          Na && Xt.set(Na, wa.getBoundingClientRect().left);
                        }), rt.current = Xt;
                      }
                      const St = [...wt], [vt] = St.splice(gt, 1);
                      St.splice(Ke, 0, vt), ze.current = !0, J(St), K(St);
                    };
                    return /* @__PURE__ */ i(
                      "th",
                      {
                        "data-col-key": B.key,
                        "data-dragging": ae ? "true" : void 0,
                        draggable: !!(K && !be && B.key !== "__abc_actions__" && B.key !== "__actions__" && B.key !== "__drag_handle__"),
                        onContextMenu: (Ze) => Qr(Ze, B),
                        onDragStart: (Ze) => {
                          const wt = Ye.filter((gt) => gt.key !== "__abc_actions__" && gt.key !== "__actions__").map((gt) => gt.key);
                          me.current = wt, ze.current = !1, nt(B.key), J(wt), Ze.dataTransfer && (Ze.dataTransfer.effectAllowed = "move");
                        },
                        onDragOver: (Ze) => {
                          if (!Le || Le === B.key || be || B.key === "__abc_actions__" || B.key === "__actions__" || !K)
                            return;
                          Ze.preventDefault();
                          const wt = we && we.length > 0 ? we : Ye.filter((vt) => vt.key !== "__abc_actions__" && vt.key !== "__actions__").map((vt) => vt.key), gt = wt.indexOf(Le), Ke = wt.indexOf(B.key);
                          if (gt < 0 || Ke < 0 || gt === Ke) return;
                          const St = Ze.currentTarget.getBoundingClientRect();
                          St.width > 0 && (gt < Ke && Ze.clientX < St.left + St.width * 0.35 || gt > Ke && Ze.clientX > St.left + St.width * 0.65) || ut(B.key);
                        },
                        onDrop: () => {
                          Le && Le !== B.key && !ze.current && !be && B.key !== "__abc_actions__" && B.key !== "__actions__" && ut(B.key), nt(null), J(null), me.current = null, ze.current = !1;
                        },
                        onDragEnd: () => {
                          nt(null), J(null), me.current = null, ze.current = !1;
                        },
                        style: ye,
                        className: g(
                          "group relative border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-semibold whitespace-nowrap text-[var(--abc-fg-secondary)] select-none transition-colors duration-[var(--abc-motion-fast)]",
                          be === "right" ? "overflow-visible" : "overflow-hidden",
                          Hs[o],
                          B.align === "center" && "text-center",
                          B.align === "right" && "text-right",
                          be === "left" && "sticky z-30",
                          be === "right" && "sticky z-30",
                          ae && "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-[inset_0_2px_0_0_var(--abc-primary)]",
                          B.key === yt.lastLeftKey && _t.left && "shadow-[3px_0_6px_-2px_rgba(15,23,42,0.14)]",
                          B.key === yt.firstRightKey && _t.right && "shadow-[-3px_0_6px_-2px_rgba(15,23,42,0.14)]"
                        ),
                        children: [
                          Mt && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 left-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
                          Qe && /* @__PURE__ */ e("span", { className: "pointer-events-none absolute top-1/2 right-0 z-10 h-4 w-px -translate-y-1/2 bg-[var(--abc-border-strong)]/65" }),
                          /* @__PURE__ */ i(
                            "div",
                            {
                              className: g(
                                "flex min-w-0 items-center gap-1",
                                B.align === "right" && "justify-end",
                                B.align === "center" && "justify-center"
                              ),
                              children: [
                                /* @__PURE__ */ i(
                                  "span",
                                  {
                                    className: g(
                                      "inline-flex min-w-0 items-center gap-1",
                                      pe && (Ne ? "cursor-pointer opacity-95 hover:opacity-100" : "cursor-pointer hover:text-[var(--abc-primary)]")
                                    ),
                                    onClick: () => Or(B),
                                    children: [
                                      K && !be && B.key !== "__abc_actions__" && B.key !== "__actions__" && B.key !== "__drag_handle__" && /* @__PURE__ */ e(
                                        os,
                                        {
                                          className: g(
                                            "h-3 w-3 shrink-0 -ml-0.5 cursor-grab opacity-0 transition-opacity group-hover:opacity-100",
                                            Ne ? "text-white/80" : "text-[var(--abc-fg-placeholder)]"
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ e(
                                        "span",
                                        {
                                          className: "min-w-0 truncate whitespace-nowrap",
                                          title: qe ? B.title : void 0,
                                          children: qe || B.title
                                        }
                                      ),
                                      B.tooltip && /* @__PURE__ */ e(er, { content: B.tooltip, children: /* @__PURE__ */ e(
                                        "span",
                                        {
                                          onClick: (Ze) => Ze.stopPropagation(),
                                          className: g(
                                            "inline-flex shrink-0",
                                            Ne ? "text-white/85 hover:text-white" : "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]"
                                          ),
                                          children: /* @__PURE__ */ e($a, { className: "h-3 w-3" })
                                        }
                                      ) }),
                                      pe && /* @__PURE__ */ e(
                                        "span",
                                        {
                                          className: g(
                                            "inline-flex shrink-0",
                                            Ne ? "text-white" : "text-[var(--abc-fg-muted)]"
                                          ),
                                          children: ne === "asc" ? /* @__PURE__ */ e(
                                            qs,
                                            {
                                              className: g(
                                                "h-3 w-3",
                                                Ne ? "text-white" : "text-[var(--abc-primary)]"
                                              )
                                            }
                                          ) : ne === "desc" ? /* @__PURE__ */ e(
                                            Xs,
                                            {
                                              className: g(
                                                "h-3 w-3",
                                                Ne ? "text-white" : "text-[var(--abc-primary)]"
                                              )
                                            }
                                          ) : /* @__PURE__ */ e(ii, { className: "h-3 w-3 opacity-55" })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                kt && /* @__PURE__ */ e(
                                  "span",
                                  {
                                    "data-header-filter": "",
                                    onClick: (Ze) => Ze.stopPropagation(),
                                    className: "inline-flex shrink-0 items-center",
                                    children: kt
                                  }
                                )
                              ]
                            }
                          ),
                          fr && (be === "right" ? /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${B.title} 列宽`,
                              onMouseDown: (Ze) => Jr(Ze, B, "left"),
                              className: "absolute top-0 bottom-0 -left-1 z-30 w-2.5 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ) : /* @__PURE__ */ e(
                            "span",
                            {
                              role: "separator",
                              "aria-orientation": "vertical",
                              "aria-label": `拖拽调节 ${B.title} 列宽`,
                              onMouseDown: (Ze) => Jr(Ze, B, "right"),
                              className: "absolute top-0 right-0 bottom-0 z-20 w-2 cursor-col-resize select-none hover:bg-[var(--abc-primary)]/60 active:bg-[var(--abc-primary)]"
                            }
                          ))
                        ]
                      },
                      B.key
                    );
                  })
                ] }),
                Ft && /* @__PURE__ */ i("tr", { className: "bg-[var(--abc-bg-surface)]", children: [
                  Xe && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2.5 py-1.5" }),
                  Ve && /* @__PURE__ */ e("th", { className: "border-b border-[var(--abc-border)] px-2 py-1.5" }),
                  Ye.map((B) => {
                    const Q = Ge(B);
                    return /* @__PURE__ */ e(
                      "th",
                      {
                        style: {
                          ...Q === "left" ? { left: `${yt.leftOffsets[B.key] ?? 0}px` } : {},
                          ...Q === "right" ? { right: `${yt.rightOffsets[B.key] ?? 0}px` } : {}
                        },
                        className: g(
                          "border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 py-1.5 font-normal",
                          Q === "left" && "sticky z-20",
                          Q === "right" && "sticky z-20"
                        ),
                        children: B.filterable ? B.filterType === "select" && B.filterOptions ? /* @__PURE__ */ e(
                          ur,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: "全部",
                            options: B.filterOptions,
                            value: h[B.key] ?? "",
                            onChange: (fe) => f == null ? void 0 : f(B.key, fe)
                          }
                        ) : /* @__PURE__ */ e(
                          pt,
                          {
                            size: "xs",
                            allowClear: !0,
                            placeholder: `筛选${B.title}`,
                            value: h[B.key] ?? "",
                            onChange: (fe) => f == null ? void 0 : f(B.key, fe.target.value)
                          }
                        ) : null
                      },
                      `${B.key}_filter`
                    );
                  })
                ] })
              ] }),
              /* @__PURE__ */ e("tbody", { children: s && it.length === 0 ? Array.from({ length: 5 }).map((B, Q) => /* @__PURE__ */ i("tr", { children: [
                Xe && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2.5 py-3 text-center", children: /* @__PURE__ */ e(zt, { width: 16, height: 16 }) }),
                Ve && /* @__PURE__ */ e("td", { className: "border-b border-[var(--abc-border)] px-2 py-3" }),
                Ye.map((fe) => /* @__PURE__ */ e(
                  "td",
                  {
                    className: g("border-b border-[var(--abc-border)]", Hs[o]),
                    children: /* @__PURE__ */ e(zt, { variant: "text", className: "w-4/5" })
                  },
                  fe.key
                ))
              ] }, `sk_${Q}`)) : it.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: ya, children: /* @__PURE__ */ e(pm, { title: Ae, onReset: te }) }) }) : it.map(({ record: B, key: Q, rowIdx: fe, depth: be, hasTreeChildren: pe }) => {
                var Qe, Mt, kt;
                const ne = !!(Xe && Rt.includes(Q)), ae = !!((Mt = (Qe = u == null ? void 0 : u.getCheckboxProps) == null ? void 0 : Qe.call(u, B)) != null && Mt.disabled), Ne = ie != null && String(ie) === String(Q), qe = je.includes(Q), Pe = Ve ? I ? pe : !!(E != null && E.expandedRowRender && (!E.rowExpandable || E.rowExpandable(B))) || !!((kt = E == null ? void 0 : E.rowExpandable) != null && kt.call(E, B)) : !1, Oe = (re == null ? void 0 : re(B, fe)) ?? {};
                return /* @__PURE__ */ i(at.Fragment, { children: [
                  /* @__PURE__ */ i(
                    "tr",
                    {
                      ...Oe,
                      draggable: Re || Oe.draggable,
                      onDragStart: (ye) => {
                        var ut;
                        (ut = Oe.onDragStart) == null || ut.call(Oe, ye), Re && ye.dataTransfer && (ye.dataTransfer.setData("text/plain", String(Q)), ye.dataTransfer.effectAllowed = "move");
                      },
                      onDragOver: (ye) => {
                        var ut;
                        (ut = Oe.onDragOver) == null || ut.call(Oe, ye), Re && ye.preventDefault();
                      },
                      onDrop: (ye) => {
                        var Ze, wt;
                        if ((Ze = Oe.onDrop) == null || Ze.call(Oe, ye), !Re || !Ue) return;
                        ye.preventDefault();
                        const ut = (wt = ye.dataTransfer) == null ? void 0 : wt.getData("text/plain");
                        ut && ut !== String(Q) && Ue(ut, Q);
                      },
                      "data-state": Ne || ne ? "selected" : void 0,
                      tabIndex: V ? 0 : Oe.tabIndex,
                      onClick: (ye) => {
                        var Ze;
                        if ((Ze = Oe.onClick) == null || Ze.call(Oe, ye), !V) return;
                        const ut = ye.target;
                        ut && ut.closest(
                          'button, a, input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], details'
                        ) || V(B, ye);
                      },
                      onKeyDown: (ye) => {
                        var ut;
                        (ut = Oe.onKeyDown) == null || ut.call(Oe, ye), V && ye.target === ye.currentTarget && (ye.key === "Enter" || ye.key === " ") && (ye.preventDefault(), V(B, ye));
                      },
                      className: g(
                        "group transition-colors duration-150",
                        Re && "cursor-grab active:cursor-grabbing",
                        be === 1 && "border-l-4 border-l-blue-400 bg-blue-50/75 dark:border-l-blue-500 dark:bg-blue-950/30",
                        be >= 2 && "border-l-4 border-l-amber-400 bg-amber-50/75 dark:border-l-amber-500 dark:bg-amber-950/20",
                        V && "cursor-pointer focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--abc-primary)]",
                        ne || Ne ? "bg-[var(--abc-primary-soft)]/60" : "hover:bg-[var(--abc-bg-muted)]/85",
                        Oe.className
                      ),
                      children: [
                        Xe && /* @__PURE__ */ e(
                          "td",
                          {
                            style: { left: 0 },
                            className: g(
                              "sticky z-10 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 py-2.5 text-center group-hover:bg-[var(--abc-bg-muted)]",
                              (ne || Ne) && "bg-[var(--abc-primary-soft)]/60",
                              !yt.hasAnyLeftFixed && _t.left && "shadow-[4px_0_8px_-4px_rgba(15,23,42,0.16)]"
                            ),
                            children: /* @__PURE__ */ e(
                              za,
                              {
                                checked: ne,
                                disabled: ae,
                                onChange: () => Tr(Q)
                              }
                            )
                          }
                        ),
                        Ve && /* @__PURE__ */ e(
                          "td",
                          {
                            style: yt.hasAnyLeftFixed ? { left: Xe ? 44 : 0 } : void 0,
                            className: g(
                              "border-b border-[var(--abc-border)] px-2 py-2.5 text-center whitespace-nowrap",
                              yt.hasAnyLeftFixed && "sticky z-10 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]"
                            ),
                            children: Pe ? /* @__PURE__ */ e(
                              "button",
                              {
                                type: "button",
                                "aria-label": qe ? "收起详情行" : "展开详情行",
                                "aria-expanded": qe,
                                onClick: () => dt(Q, B),
                                className: "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                children: /* @__PURE__ */ e(
                                  vr,
                                  {
                                    className: g(
                                      "h-3.5 w-3.5 transition-transform duration-150",
                                      qe && "rotate-90 text-[var(--abc-primary)]"
                                    )
                                  }
                                )
                              }
                            ) : /* @__PURE__ */ e("span", { className: "inline-block w-4" })
                          }
                        ),
                        Ye.map((ye, ut) => {
                          const Ze = ye.dataIndex ?? ye.key, wt = us(B, Ze), gt = Ge(ye), Ke = ye.key === "__abc_actions__" || ye.key === "__actions__", St = ye.render ? ye.render(wt, B, I ? be : fe, {
                            depth: be,
                            rowIndex: fe,
                            isExpanded: qe
                          }) : Wc(wt, B, ye, Y), vt = !Ve && ut === 0 && (be > 0 || pe), Xt = Ve && ut === 0 && be > 0;
                          return /* @__PURE__ */ e(
                            "td",
                            {
                              "data-col-cell": ye.key,
                              style: {
                                ...gt === "left" ? { left: `${yt.leftOffsets[ye.key] ?? 0}px` } : {},
                                ...gt === "right" ? { right: `${yt.rightOffsets[ye.key] ?? 0}px` } : {},
                                ...Xt ? { paddingLeft: `${12 + be * Ir}px` } : {}
                              },
                              className: g(
                                "overflow-hidden border-b border-[var(--abc-border)] text-[var(--abc-fg-secondary)] transition-colors duration-[var(--abc-motion-fast)]",
                                Hs[o],
                                ye.align === "center" && "text-center",
                                ye.align === "right" && "text-right",
                                Le === ye.key && "bg-[var(--abc-primary-soft)]/30",
                                gt === "left" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                gt === "right" && "sticky z-20 bg-[var(--abc-bg-surface)] group-hover:bg-[var(--abc-bg-muted)]",
                                (ne || Ne) && (gt === "left" || gt === "right") && "bg-[var(--abc-primary-soft)]/60",
                                ye.key === yt.lastLeftKey && _t.left && "shadow-[6px_0_8px_-6px_rgba(15,23,42,0.22)]",
                                ye.key === yt.firstRightKey && _t.right && "shadow-[-6px_0_8px_-6px_rgba(15,23,42,0.22)]"
                              ),
                              children: vt ? /* @__PURE__ */ i(
                                "div",
                                {
                                  style: { paddingLeft: `${be * Ir}px` },
                                  className: "inline-flex max-w-full items-center gap-1",
                                  children: [
                                    pe ? /* @__PURE__ */ e(
                                      "button",
                                      {
                                        type: "button",
                                        "aria-label": qe ? "收起子项" : "展开子项",
                                        "aria-expanded": qe,
                                        onClick: () => dt(Q, B),
                                        className: "inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                                        children: /* @__PURE__ */ e(
                                          vr,
                                          {
                                            className: g(
                                              "h-3 w-3 transition-transform duration-150",
                                              qe && "rotate-90 text-[var(--abc-primary)]"
                                            )
                                          }
                                        )
                                      }
                                    ) : /* @__PURE__ */ e("span", { className: "inline-block w-4.5 shrink-0" }),
                                    /* @__PURE__ */ e("span", { className: "min-w-0 truncate", children: St })
                                  ]
                                }
                              ) : ye.ellipsis === !1 ? St : /* @__PURE__ */ e(
                                "div",
                                {
                                  title: Ke || wt === void 0 || wt === null || typeof wt == "object" ? void 0 : String(wt),
                                  className: g(
                                    "overflow-hidden text-ellipsis whitespace-nowrap",
                                    Ke ? "w-full min-w-0" : "w-0 min-w-full"
                                  ),
                                  children: St
                                }
                              )
                            },
                            ye.key
                          );
                        })
                      ]
                    }
                  ),
                  Pe && qe && (E == null ? void 0 : E.expandedRowRender) && /* @__PURE__ */ e("tr", { className: "bg-[var(--abc-bg-muted)]/45", children: /* @__PURE__ */ e(
                    "td",
                    {
                      colSpan: ya,
                      className: "border-b border-[var(--abc-border)] px-6 py-3.5 text-xs text-[var(--abc-fg-secondary)]",
                      children: E.expandedRowRender(B, fe, be, qe)
                    }
                  ) })
                ] }, String(Q));
              }) })
            ]
          }
        )
      }
    ),
    Ce && Fr && (() => {
      const B = Ge(Ce.col), Q = Ht.findIndex((ae) => ae.key === Ce.col.key), fe = Q > 0 && !B, be = Q >= 0 && Q < Ht.length - 1 && !B, pe = Ht.length > 1, ne = k || "#3b82f6";
      return xr(
        /* @__PURE__ */ i(
          "div",
          {
            ref: Fe,
            role: "menu",
            "aria-label": `${Ce.col.title} 列操作菜单`,
            "data-abc-floating": "",
            "data-motion": he,
            style: { top: `${Ce.y}px`, left: `${Ce.x}px` },
            className: g(
              "fixed z-[1350] w-50 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 text-xs shadow-[var(--abc-shadow-popover)] select-none",
              he !== "none" && "abc-animate-popover-in"
            ),
            children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] px-2.5 py-1.5", children: [
                /* @__PURE__ */ e("span", { className: "truncate font-semibold text-[var(--abc-fg)]", children: Ce.col.title }),
                /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-bg-muted)] px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "列属性" })
              ] }),
              or(Ce.col) && b && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      b(Ce.col.key, "asc"), st(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(qs, { className: "h-3.5 w-3.5" }),
                        " 升序排列"
                      ] }),
                      (l == null ? void 0 : l.key) === Ce.col.key && l.direction === "asc" && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      b(Ce.col.key, "desc"), st(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(Xs, { className: "h-3.5 w-3.5" }),
                        " 降序排列"
                      ] }),
                      (l == null ? void 0 : l.key) === Ce.col.key && l.direction === "desc" && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                (l == null ? void 0 : l.key) === Ce.col.key && l.direction && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      b(Ce.col.key, null), st(null);
                    },
                    className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(ii, { className: "h-3.5 w-3.5" }),
                      " 清除排序"
                    ]
                  }
                )
              ] }),
              R && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      R(Ce.col.key, B === "left" ? null : "left"), st(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(Pa, { className: "h-3.5 w-3.5 -rotate-45" }),
                        " 固定到左侧"
                      ] }),
                      B === "left" && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      R(Ce.col.key, B === "right" ? null : "right"), st(null);
                    },
                    className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ e(Pa, { className: "h-3.5 w-3.5 rotate-45" }),
                        " 固定到右侧"
                      ] }),
                      B === "right" && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                    ]
                  }
                ),
                B && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    onClick: () => {
                      R(Ce.col.key, null), st(null);
                    },
                    className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    children: [
                      /* @__PURE__ */ e(ju, { className: "h-3.5 w-3.5" }),
                      " 取消固定"
                    ]
                  }
                )
              ] }),
              K && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    disabled: !fe,
                    onClick: () => $r(Ce.col.key, "left"),
                    className: g(
                      "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                      fe ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ e(Bu, { className: "h-3.5 w-3.5" }),
                      " 向左移动"
                    ]
                  }
                ),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    disabled: !be,
                    onClick: () => $r(Ce.col.key, "right"),
                    className: g(
                      "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                      be ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ e(sc, { className: "h-3.5 w-3.5" }),
                      " 向右移动"
                    ]
                  }
                )
              ] }),
              (A || D && Nr.length > 0) && /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] py-1", children: [
                A && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    disabled: !pe,
                    onClick: () => {
                      pe && (A(Ce.col.key), st(null));
                    },
                    className: g(
                      "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left",
                      pe ? "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer" : "text-[var(--abc-fg-placeholder)] cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ e(tc, { className: "h-3.5 w-3.5" }),
                      " 隐藏当前列"
                    ]
                  }
                ),
                D && Nr.length > 0 && /* @__PURE__ */ i(
                  "div",
                  {
                    className: "relative",
                    onMouseEnter: () => mr(!0),
                    onMouseLeave: () => mr(!1),
                    children: [
                      /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          role: "menuitem",
                          "aria-haspopup": "menu",
                          "aria-expanded": wr,
                          onClick: () => mr((ae) => !ae),
                          className: "flex w-full items-center justify-between rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                          children: [
                            /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2", children: [
                              /* @__PURE__ */ e(Pu, { className: "h-3.5 w-3.5" }),
                              " 显示 / 隐藏列"
                            ] }),
                            /* @__PURE__ */ e(vr, { className: "h-3.5 w-3.5 text-[var(--abc-fg-muted)]" })
                          ]
                        }
                      ),
                      wr && /* @__PURE__ */ i(
                        "div",
                        {
                          role: "menu",
                          "aria-label": "显示与隐藏列清单",
                          style: {
                            left: typeof window < "u" && Ce.x + 208 + 196 > window.innerWidth ? void 0 : "100%",
                            right: typeof window < "u" && Ce.x + 208 + 196 > window.innerWidth ? "100%" : void 0,
                            top: -4
                          },
                          className: "absolute z-[1360] mx-1 max-h-64 w-46 overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] p-1 shadow-[var(--abc-shadow-popover)]",
                          children: [
                            /* @__PURE__ */ e("div", { className: "px-2 py-1 text-[10px] font-medium text-[var(--abc-fg-muted)]", children: "勾选以显示列" }),
                            Nr.map((ae) => {
                              const Ne = !L.includes(ae.key), qe = Ne && Ht.length <= 1;
                              return /* @__PURE__ */ i(
                                "button",
                                {
                                  type: "button",
                                  role: "menuitemcheckbox",
                                  "aria-checked": Ne,
                                  disabled: qe,
                                  onClick: () => {
                                    qe || D(ae.key);
                                  },
                                  className: g(
                                    "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-sm)] px-2 py-1.5 text-left",
                                    qe ? "text-[var(--abc-fg-placeholder)] cursor-not-allowed" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer"
                                  ),
                                  children: [
                                    /* @__PURE__ */ e("span", { className: "truncate", children: ae.title }),
                                    /* @__PURE__ */ e(
                                      "span",
                                      {
                                        className: g(
                                          "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors",
                                          Ne ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                        ),
                                        children: Ne && /* @__PURE__ */ e(Nt, { className: "h-2.5 w-2.5 stroke-[3]" })
                                      }
                                    )
                                  ]
                                },
                                ae.key
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
                  /* @__PURE__ */ e(bo, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "筛选高亮颜色" })
                ] }),
                /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: Vf.map((ae) => {
                  const Ne = ne === ae.color;
                  return /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: ae.label,
                      "aria-label": `筛选高亮颜色 ${ae.label}`,
                      onClick: () => v(ae.color),
                      style: { backgroundColor: ae.color },
                      className: g(
                        "h-4 w-4 rounded-full transition-transform cursor-pointer",
                        Ne ? "scale-110 ring-2 ring-slate-900 ring-offset-1 dark:ring-white dark:ring-offset-slate-900" : "opacity-80 hover:scale-110 hover:opacity-100"
                      )
                    },
                    ae.color
                  );
                }) })
              ] }),
              z && /* @__PURE__ */ e("div", { className: "pt-1", children: /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => {
                    z(), st(null);
                  },
                  className: "flex w-full items-center gap-2 rounded-[var(--abc-radius-sm)] px-2.5 py-1.5 text-left text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
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
const Yf = ve.forwardRef(
  ({ className: t, scrollLabel: r, wrapperClassName: a, ...n }, s) => /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "table-wrapper",
      role: r ? "region" : void 0,
      "aria-label": r,
      tabIndex: r ? 0 : void 0,
      className: g(
        "relative w-full max-w-full overflow-auto [container-type:inline-size] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        a
      ),
      children: /* @__PURE__ */ e(
        "table",
        {
          ref: s,
          className: g("w-full caption-bottom text-sm border-collapse text-[var(--abc-fg)]", t),
          ...n
        }
      )
    }
  )
);
Yf.displayName = "Table";
const qf = ve.forwardRef(
  ({ className: t, sticky: r = !1, ...a }, n) => /* @__PURE__ */ e(
    "thead",
    {
      ref: n,
      className: g(
        "bg-[var(--abc-bg-muted)] [&_tr]:border-b [&_tr]:border-[var(--abc-border)]",
        r && "sticky top-0 z-10 bg-[var(--abc-bg-surface)] backdrop-blur-xs shadow-[0_1px_0_0_var(--abc-border)]",
        t
      ),
      ...a
    }
  )
);
qf.displayName = "TableHeader";
const Xf = ve.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("tbody", { ref: a, className: g("[&_tr:last-child]:border-0", t), ...r }));
Xf.displayName = "TableBody";
const Zf = ve.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tfoot",
  {
    ref: a,
    className: g("border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)] font-medium text-[var(--abc-fg)]", t),
    ...r
  }
));
Zf.displayName = "TableFooter";
const Jf = ve.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e(
  "tr",
  {
    ref: a,
    className: g(
      "border-b border-[var(--abc-border)] transition-colors hover:bg-[var(--abc-bg-subtle)] data-[state=selected]:bg-[var(--abc-primary-soft)]",
      t
    ),
    ...r
  }
));
Jf.displayName = "TableRow";
const Qf = ve.forwardRef(({ className: t, scope: r = "col", ...a }, n) => /* @__PURE__ */ e(
  "th",
  {
    ref: n,
    scope: r,
    className: g(
      "h-10 px-3 text-left align-middle text-[11px] font-semibold uppercase tracking-wider text-[var(--abc-fg-muted)]",
      t
    ),
    ...a
  }
));
Qf.displayName = "TableHead";
const ep = ve.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("td", { ref: a, className: g("px-3 py-2.5 align-middle text-[var(--abc-fg)]", t), ...r }));
ep.displayName = "TableCell";
const tp = ve.forwardRef(({ className: t, ...r }, a) => /* @__PURE__ */ e("caption", { ref: a, className: g("mt-4 text-sm text-[var(--abc-fg-muted)]", t), ...r }));
tp.displayName = "TableCaption";
const rp = {
  xs: 208,
  sm: 232,
  md: 248,
  lg: 268
}, ap = {
  xs: 48,
  sm: 54,
  md: 58,
  lg: 62
}, np = {
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
}, xa = {
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
function qr(t, r) {
  var a;
  return t.path && (r === t.path || r.startsWith(`${t.path}/`)) ? !0 : !!((a = t.children) != null && a.some((n) => qr(n, r)));
}
function Kc(t, r, a = []) {
  var n;
  for (const s of t) {
    const o = [...a, s];
    if (s.path === r) return o;
    if ((n = s.children) != null && n.length) {
      const d = Kc(s.children, r, o);
      if (d.length > 0) return d;
    }
  }
  return [];
}
function Br(t, r, a = 16) {
  return t ? typeof t == "string" ? /* @__PURE__ */ e(jr, { name: t, size: a, registry: r }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0 items-center", children: t }) : null;
}
const Do = ({ items: t, pathname: r, registry: a, size: n, onSelect: s, depth: o = 0 }) => {
  const d = xa[n];
  return /* @__PURE__ */ e(
    "div",
    {
      className: g(
        "space-y-0.5",
        o > 0 && g("border-l border-[var(--abc-border)]", d.flyoutSubIndent)
      ),
      children: t.map((c) => {
        const u = !!(c.children && c.children.length > 0), l = c.path === r, b = u && qr(c, r);
        return u ? /* @__PURE__ */ i("div", { className: "py-0.5", children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: g(
                "flex items-center gap-1.5 font-semibold select-none",
                d.flyoutHeadingText,
                b ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)]"
              ),
              children: [
                Br(c.icon, a, d.flyoutHeadingIcon),
                /* @__PURE__ */ e("span", { className: "truncate", children: c.label })
              ]
            }
          ),
          /* @__PURE__ */ e(
            Do,
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
            className: g(
              "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer focus:outline-none focus-visible:bg-[var(--abc-bg-subtle)] focus-visible:text-[var(--abc-fg)]",
              Yr,
              d.flyoutItem,
              l ? "bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] enabled:hover:bg-[var(--abc-bg-subtle)] enabled:hover:text-[var(--abc-fg)]",
              c.disabled && "opacity-45 cursor-not-allowed"
            ),
            children: [
              Br(c.icon, a, d.flyoutIcon),
              /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: c.label }),
              c.badge !== void 0 && /* @__PURE__ */ e(
                "span",
                {
                  className: g(
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
}, Ba = ({ brand: t, collapsed: r = !1, tone: a = "light", size: n, className: s }) => {
  const o = Be(n, "sm"), d = xa[o], c = a === "dark", u = se(() => t.logo ? typeof t.logo == "string" ? zc(t.logo) ? /* @__PURE__ */ e(
    "div",
    {
      className: g(
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
      className: g("shrink-0 rounded-[var(--abc-radius-md)] object-contain", d.brandLogoBox)
    }
  ) : /* @__PURE__ */ e("div", { className: "shrink-0", children: t.logo }) : /* @__PURE__ */ e(
    "div",
    {
      className: g(
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
      className: g(
        "group flex items-center select-none",
        d.brandGap,
        r ? g("justify-center", d.brandWrapCollapsed) : d.brandWrapExpanded,
        s
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            onClick: t.onClick,
            className: g(
              "flex min-w-0 flex-1 items-center",
              d.brandGap,
              t.onClick && "cursor-pointer"
            ),
            children: [
              u,
              !r && /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: g(
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
                    className: g(
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
              var b;
              l.stopPropagation(), (b = t.onEditBrand) == null || b.call(t);
            },
            className: g(
              "rounded-[var(--abc-radius-xs)] p-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 cursor-pointer",
              c ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: /* @__PURE__ */ e(zu, { className: d.brandEditIcon })
          }
        )
      ]
    }
  );
}, sp = ({ item: t, pathname: r, isDark: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = xa[s], [u, l] = $(!1), { isMounted: b, isVisible: m } = ia(u, o === "none" ? 0 : 140), h = ce(null), f = ce(null), p = ce(null), x = Tt(), w = qr(t, r), { style: k, actualSide: v, portalContainer: C } = Ha({
    open: b,
    triggerRef: h,
    floatingRef: f,
    placement: "rightStart",
    offset: 8
  }), L = ue(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  ge(() => () => L(), [L]);
  const D = () => {
    L(), l(!0);
  }, j = () => {
    L(), typeof window < "u" && (p.current = window.setTimeout(() => {
      l(!1), p.current = null;
    }, 140));
  };
  return ge(() => {
    if (!u) return;
    const S = (T) => {
      var R, A;
      const _ = T.target;
      (R = h.current) != null && R.contains(_) || (A = f.current) != null && A.contains(_) || l(!1);
    }, y = (T) => {
      var _;
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), l(!1), (_ = h.current) == null || _.focus());
    };
    return document.addEventListener("mousedown", S), document.addEventListener("keydown", y, !0), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", y, !0);
    };
  }, [u]), /* @__PURE__ */ i(tt, { children: [
    /* @__PURE__ */ e("div", { onMouseEnter: D, onMouseLeave: j, children: /* @__PURE__ */ e(
      "button",
      {
        ref: h,
        type: "button",
        "aria-label": t.label,
        "aria-expanded": u,
        "aria-haspopup": "menu",
        "aria-controls": u ? x : void 0,
        onClick: () => l((S) => !S),
        onKeyDown: (S) => {
          (S.key === "ArrowRight" || S.key === "ArrowDown") && (S.preventDefault(), l(!0), window.requestAnimationFrame(() => {
            var y, T;
            (T = (y = f.current) == null ? void 0 : y.querySelector('[role="menuitem"]:not(:disabled)')) == null || T.focus();
          }));
        },
        className: g(
          "flex w-full items-center justify-center rounded-[var(--abc-radius-md)] text-xs font-medium cursor-pointer",
          Yr,
          c.collapsedBtn,
          w ? a ? "bg-white/12 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : a ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
        ),
        children: Br(t.icon ?? "folder", n, c.collapsedIcon)
      }
    ) }),
    b && C && xr(
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
          style: k,
          onMouseEnter: D,
          onMouseLeave: j,
          onKeyDown: (S) => {
            var _, R, A;
            const y = Array.from(
              ((_ = f.current) == null ? void 0 : _.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const T = y.indexOf(document.activeElement);
            S.key === "ArrowDown" ? (S.preventDefault(), (R = y[(T + 1) % y.length]) == null || R.focus()) : S.key === "ArrowUp" && (S.preventDefault(), (A = y[(T - 1 + y.length) % y.length]) == null || A.focus());
          },
          className: g(
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
                className: g(
                  "mb-1 border-b border-[var(--abc-border)] font-semibold text-[var(--abc-fg)]",
                  c.flyoutHeader
                ),
                children: t.label
              }
            ),
            /* @__PURE__ */ e(
              Do,
              {
                items: t.children ?? [],
                pathname: r,
                registry: n,
                size: s,
                onSelect: (S, y) => {
                  d(S, y), l(!1);
                }
              }
            )
          ]
        }
      ),
      C
    )
  ] });
}, Us = ({
  brand: t,
  items: r,
  pathname: a,
  collapsed: n = !1,
  accordion: s = !0,
  tone: o = "dark",
  size: d,
  motion: c,
  onNavigate: u,
  className: l
}) => {
  const { iconRegistry: b } = At(), m = Be(d, "sm"), h = Ie(c), f = xa[m], p = o === "dark", [x, w] = $(
    () => r.filter((v) => {
      var C;
      return ((C = v.children) == null ? void 0 : C.length) && qr(v, a);
    }).map((v) => v.key)
  );
  ge(() => {
    const v = r.filter((C) => {
      var L;
      return ((L = C.children) == null ? void 0 : L.length) && qr(C, a);
    }).map((C) => C.key);
    v.length > 0 && w(
      (C) => s ? [v[0]] : Array.from(/* @__PURE__ */ new Set([...C, ...v]))
    );
  }, [a, r, s]);
  const k = (v) => {
    w((C) => C.includes(v) ? C.filter((L) => L !== v) : s ? [v] : [...C, v]);
  };
  return /* @__PURE__ */ i(
    "aside",
    {
      "aria-label": "侧边主导航",
      "data-size": m,
      "data-motion": h,
      style: {
        width: n ? "var(--abc-sidebar-collapsed-w)" : "var(--abc-sidebar-w)"
      },
      className: g(
        "flex h-full shrink-0 flex-col border-r transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)] select-none",
        p ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-[var(--abc-sidebar-dark-fg)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)]",
        l
      ),
      children: [
        t && /* @__PURE__ */ e(
          "div",
          {
            className: g(
              "flex h-[var(--abc-header-h)] shrink-0 items-center border-b",
              p ? "border-[var(--abc-sidebar-dark-border)]" : "border-[var(--abc-border)]"
            ),
            children: /* @__PURE__ */ e(
              Ba,
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
        /* @__PURE__ */ e("nav", { className: g("flex-1 overflow-y-auto", f.navPadding), children: r.map((v) => {
          const C = !!(v.children && v.children.length > 0), L = v.path === a, D = qr(v, a), j = x.includes(v.key);
          if (!C) {
            const S = /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                disabled: v.disabled,
                "aria-label": n ? v.label : void 0,
                onClick: () => v.path && u(v.path, v),
                className: g(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Yr,
                  f.itemButton,
                  n && g("justify-center px-0", f.collapsedBtn),
                  L ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : p ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                  v.disabled && "opacity-40 cursor-not-allowed"
                ),
                children: [
                  Br(v.icon, b, n ? f.collapsedIcon : f.itemIcon),
                  !n && /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: v.label }),
                  !n && v.badge !== void 0 && /* @__PURE__ */ e("span", { className: g("rounded-full bg-white/15 font-mono", f.badge), children: v.badge })
                ]
              },
              v.key
            );
            return n ? /* @__PURE__ */ e(
              er,
              {
                content: v.label,
                placement: "right",
                motion: h,
                className: "flex w-full",
                children: S
              },
              v.key
            ) : S;
          }
          return n ? /* @__PURE__ */ e(
            sp,
            {
              item: v,
              pathname: a,
              isDark: p,
              registry: b,
              size: m,
              motion: h,
              onNavigate: u
            },
            v.key
          ) : /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-expanded": j,
                onClick: () => k(v.key),
                className: g(
                  "flex w-full items-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                  Yr,
                  f.itemButton,
                  D ? p ? "bg-white/10 text-white" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : p ? "text-slate-300 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                ),
                children: [
                  Br(v.icon, b, f.itemIcon),
                  /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: v.label }),
                  /* @__PURE__ */ e(
                    lr,
                    {
                      className: g(
                        "shrink-0 opacity-70 transition-transform duration-[var(--abc-motion-fast)] ease-[var(--abc-ease-out)]",
                        f.chevron,
                        !j && "-rotate-90"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e(
              "div",
              {
                inert: j ? void 0 : "",
                className: g(
                  "grid transition-[grid-template-rows,opacity] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
                  j ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                ),
                children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e(
                  "div",
                  {
                    className: g(
                      "border-l",
                      f.subWrap,
                      p ? "border-slate-700/80" : "border-[var(--abc-border)]"
                    ),
                    children: v.children.map((S) => {
                      const y = S.path === a;
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: S.disabled,
                          onClick: () => S.path && u(S.path, S),
                          className: g(
                            "flex w-full items-center rounded-[var(--abc-radius-sm)] text-left cursor-pointer",
                            Yr,
                            f.subButton,
                            y ? "bg-[var(--abc-primary)] font-medium text-[var(--abc-primary-fg)]" : p ? "text-slate-400 hover:bg-white/8 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                            S.disabled && "opacity-40 cursor-not-allowed"
                          ),
                          children: [
                            Br(S.icon, b, f.subIcon),
                            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: S.label }),
                            S.badge !== void 0 && /* @__PURE__ */ e(
                              "span",
                              {
                                className: g(
                                  "rounded-full font-mono",
                                  f.badge,
                                  y ? "bg-white/20" : "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]"
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
          ] }, v.key);
        }) })
      ]
    }
  );
}, op = ({ item: t, pathname: r, isActive: a, registry: n, size: s, motion: o, onNavigate: d }) => {
  const c = xa[s], [u, l] = $(!1), { isMounted: b, isVisible: m } = ia(u, o === "none" ? 0 : 140), h = ce(null), f = ce(null), p = ce(null), x = Tt(), { style: w, actualSide: k, portalContainer: v } = Ha({
    open: b,
    triggerRef: h,
    floatingRef: f,
    placement: "bottomLeft",
    offset: 6
  }), C = ue(() => {
    p.current !== null && typeof window < "u" && (window.clearTimeout(p.current), p.current = null);
  }, []);
  ge(() => () => C(), [C]);
  const L = () => {
    C(), l(!0);
  }, D = () => {
    C(), typeof window < "u" && (p.current = window.setTimeout(() => {
      l(!1), p.current = null;
    }, 150));
  };
  ge(() => {
    if (!u) return;
    const S = (T) => {
      var R, A;
      const _ = T.target;
      (R = h.current) != null && R.contains(_) || (A = f.current) != null && A.contains(_) || l(!1);
    }, y = (T) => {
      var _;
      T.key === "Escape" && (T.preventDefault(), T.stopPropagation(), l(!1), (_ = h.current) == null || _.focus());
    };
    return document.addEventListener("mousedown", S), document.addEventListener("keydown", y, !0), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", y, !0);
    };
  }, [u]);
  const j = () => {
    typeof window > "u" || window.requestAnimationFrame(() => {
      var S, y;
      (y = (S = f.current) == null ? void 0 : S.querySelector('[role="menuitem"]:not(:disabled)')) == null || y.focus();
    });
  };
  return /* @__PURE__ */ i(tt, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        onMouseEnter: L,
        onMouseLeave: D,
        className: "relative flex-none",
        children: /* @__PURE__ */ i(
          "button",
          {
            ref: h,
            type: "button",
            "aria-expanded": u,
            "aria-haspopup": "menu",
            "aria-controls": u ? x : void 0,
            onClick: () => l((S) => !S),
            onKeyDown: (S) => {
              S.key === "ArrowDown" && (S.preventDefault(), l(!0), j());
            },
            className: g(
              "inline-flex items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Yr,
              c.topItem,
              a ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : u ? "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              Br(t.icon, n, c.topIcon),
              /* @__PURE__ */ e("span", { children: t.label }),
              /* @__PURE__ */ e(
                lr,
                {
                  className: g(
                    "opacity-70 transition-transform duration-[var(--abc-motion-fast)]",
                    c.topChevron,
                    u && "rotate-180 text-[var(--abc-primary)] opacity-100"
                  )
                }
              )
            ]
          }
        )
      }
    ),
    b && v && xr(
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
          "data-placement": k,
          style: w,
          onMouseEnter: L,
          onMouseLeave: D,
          onKeyDown: (S) => {
            var _, R, A, z, K;
            const y = Array.from(
              ((_ = f.current) == null ? void 0 : _.querySelectorAll(
                '[role="menuitem"]:not(:disabled)'
              )) ?? []
            );
            if (!y.length) return;
            const T = y.indexOf(document.activeElement);
            S.key === "ArrowDown" ? (S.preventDefault(), (R = y[(T + 1) % y.length]) == null || R.focus()) : S.key === "ArrowUp" ? (S.preventDefault(), (A = y[(T - 1 + y.length) % y.length]) == null || A.focus()) : S.key === "Home" ? (S.preventDefault(), (z = y[0]) == null || z.focus()) : S.key === "End" && (S.preventDefault(), (K = y[y.length - 1]) == null || K.focus());
          },
          className: g(
            "z-[1250] max-w-[300px] max-h-[min(70dvh,480px)] overflow-y-auto rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-elevated)] shadow-[var(--abc-shadow-popover)]",
            k === "top" ? "before:content-[''] before:absolute before:inset-x-0 before:-bottom-2.5 before:h-2.5" : "before:content-[''] before:absolute before:inset-x-0 before:-top-2.5 before:h-2.5",
            c.flyoutPanel,
            o !== "none" && (m ? "abc-animate-popover-in" : "abc-animate-popover-out")
          ),
          children: /* @__PURE__ */ e(
            Do,
            {
              items: t.children ?? [],
              pathname: r,
              registry: n,
              size: s,
              onSelect: (S, y) => {
                d(S, y), l(!1);
              }
            }
          )
        }
      ),
      v
    )
  ] });
}, Bi = ({
  items: t,
  pathname: r,
  topLevelOnly: a = !1,
  activeRootKey: n,
  size: s,
  motion: o,
  onSelectRoot: d,
  onNavigate: c
}) => {
  const { iconRegistry: u } = At(), l = Be(s, "sm"), b = Ie(o), m = xa[l];
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "顶部主导航",
      "data-size": l,
      "data-motion": b,
      className: "flex min-w-0 items-center gap-1 overflow-x-auto py-0.5 [scrollbar-width:none]",
      children: t.map((h) => {
        var p;
        const f = a ? n === h.key : qr(h, r);
        return a || !((p = h.children) != null && p.length) ? /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => {
              a && d ? d(h) : h.path && c(h.path, h);
            },
            className: g(
              "inline-flex flex-none items-center rounded-[var(--abc-radius-md)] font-medium whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
              Yr,
              m.topItem,
              f ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
            ),
            children: [
              Br(h.icon, u, m.topIcon),
              /* @__PURE__ */ e("span", { children: h.label })
            ]
          },
          h.key
        ) : /* @__PURE__ */ e(
          op,
          {
            item: h,
            pathname: r,
            isActive: f,
            registry: u,
            size: l,
            motion: b,
            onNavigate: c
          },
          h.key
        );
      })
    }
  );
}, ip = ({ brand: t, items: r, pathname: a, tone: n = "dark", size: s, motion: o, className: d, onNavigate: c }) => {
  const { iconRegistry: u } = At(), l = Be(s, "sm"), b = Ie(o), m = xa[l], h = n === "dark", f = se(
    () => r.find((v) => qr(v, a)) ?? r[0],
    [r, a]
  ), [p, x] = $((f == null ? void 0 : f.key) ?? "");
  ge(() => {
    f != null && f.key && x(f.key);
  }, [f == null ? void 0 : f.key]);
  const w = r.find((v) => v.key === p) ?? f, k = (w == null ? void 0 : w.children) ?? [];
  return /* @__PURE__ */ i(
    "div",
    {
      "aria-label": "双栏侧边导航",
      "data-size": l,
      "data-motion": b,
      className: g("flex h-full shrink-0 select-none", d),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            style: { width: "var(--abc-dual-rail-w)" },
            className: g(
              "flex h-full flex-col items-center border-r py-2.5 transition-[width] duration-[var(--abc-motion-base)] ease-[var(--abc-ease-out)]",
              h ? "border-[var(--abc-sidebar-dark-border)] bg-[var(--abc-sidebar-dark-bg)] text-slate-300" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)]"
            ),
            children: [
              t && /* @__PURE__ */ e("div", { className: "mb-3", children: /* @__PURE__ */ e(Ba, { brand: t, collapsed: !0, tone: n, size: l }) }),
              /* @__PURE__ */ e("div", { className: g("flex w-full flex-1 flex-col items-center overflow-y-auto", m.dualRailWrap), children: r.map((v) => {
                const C = v.key === (w == null ? void 0 : w.key);
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var L, D, j;
                      x(v.key), !((L = v.children) != null && L.length) && v.path ? c(v.path, v) : (j = (D = v.children) == null ? void 0 : D[0]) != null && j.path && c(v.children[0].path, v.children[0]);
                    },
                    className: g(
                      "flex w-full flex-col items-center justify-center rounded-[var(--abc-radius-md)] font-medium cursor-pointer",
                      Yr,
                      m.dualRailItem,
                      C ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : h ? "text-slate-400 hover:bg-white/10 hover:text-white" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      Br(v.icon ?? "folder", u, m.dualRailIcon),
                      /* @__PURE__ */ e("span", { className: g("truncate", m.dualRailLabelMaxW), children: v.label.slice(0, 4) })
                    ]
                  },
                  v.key
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
                  className: g(
                    "flex h-[var(--abc-header-h)] items-center justify-between border-b border-[var(--abc-border)]",
                    m.dualPanelHeader
                  ),
                  children: [
                    /* @__PURE__ */ e("span", { className: g("truncate font-bold text-[var(--abc-fg)]", m.dualPanelTitle), children: w == null ? void 0 : w.label }),
                    /* @__PURE__ */ e(vr, { className: g("text-[var(--abc-fg-muted)]", m.chevron) })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: g("flex-1 overflow-y-auto", m.dualPanelWrap), children: k.map((v) => {
                const C = v.path === a;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    disabled: v.disabled,
                    onClick: () => !v.disabled && v.path && c(v.path, v),
                    className: g(
                      "flex w-full items-center rounded-[var(--abc-radius-md)] text-left font-medium cursor-pointer",
                      Yr,
                      m.dualPanelItem,
                      C ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]",
                      v.disabled && "opacity-40 cursor-not-allowed"
                    ),
                    children: [
                      Br(v.icon, u, m.dualPanelIcon),
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
}, cp = {
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
  onCloseRight: u,
  onCloseAll: l,
  onTogglePin: b,
  onRefresh: m,
  className: h
}) => {
  var k;
  const { iconRegistry: f } = At(), p = Be(n, "sm"), x = Ie(s), w = cp[p];
  return t.length === 0 ? null : /* @__PURE__ */ i(
    "div",
    {
      "data-size": p,
      "data-motion": x,
      className: g(
        "flex h-[var(--abc-tabbar-h)] shrink-0 items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)] select-none",
        w.barPadding,
        h
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-1 [scrollbar-width:none]", children: t.map((v) => {
          const C = v.path === r, L = v.closable !== !1 && !v.pinned, D = a === "pill" ? C ? "rounded-full border-[var(--abc-primary)] bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "rounded-full border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]" : a === "underline" ? C ? "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-[var(--abc-primary)] bg-transparent text-[var(--abc-primary)] font-semibold" : "relative rounded-none border-x-0 border-t-0 border-b-2 border-b-transparent text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]" : C ? "rounded-[var(--abc-radius-sm)] border-[var(--abc-primary)]/30 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "rounded-[var(--abc-radius-sm)] border-transparent text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]";
          return /* @__PURE__ */ i(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => o(v.path),
              onKeyDown: (j) => {
                (j.key === "Enter" || j.key === " ") && (j.preventDefault(), o(v.path));
              },
              className: g(
                "group inline-flex flex-none items-center border font-medium transition-[background-color,color,border-color,box-shadow] duration-[var(--abc-motion-fast)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-ring)]",
                w.tabItem,
                D
              ),
              children: [
                v.pinned && /* @__PURE__ */ e(Pa, { className: g("shrink-0 opacity-75", w.pinIcon) }),
                v.icon && (typeof v.icon == "string" ? /* @__PURE__ */ e(jr, { name: v.icon, size: w.tabIcon, registry: f }) : /* @__PURE__ */ e("span", { className: "shrink-0", children: v.icon })),
                /* @__PURE__ */ e("span", { className: "max-w-36 truncate", children: v.title }),
                L && d && /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": `关闭 ${v.title}`,
                    onClick: (j) => {
                      j.stopPropagation(), d(v.path);
                    },
                    className: g(
                      "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 cursor-pointer",
                      a === "pill" && C ? "hover:bg-white/20" : "hover:bg-black/10 dark:hover:bg-white/15"
                    ),
                    children: /* @__PURE__ */ e(Ct, { className: w.closeIcon })
                  }
                )
              ]
            },
            v.path
          );
        }) }),
        /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-1", children: [
          m && /* @__PURE__ */ e(er, { content: "刷新当前页签", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "刷新当前页签",
              onClick: () => m(r),
              className: g(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                w.actionBtn
              ),
              children: /* @__PURE__ */ e(as, { className: w.actionIcon })
            }
          ) }),
          /* @__PURE__ */ e(
            pn,
            {
              items: [
                ...b ? [
                  {
                    key: "pin",
                    label: (k = t.find((v) => v.path === r)) != null && k.pinned ? "取消固定当前页签" : "固定当前页签",
                    icon: /* @__PURE__ */ e(Pa, { className: "h-3.5 w-3.5" }),
                    onClick: () => b(r)
                  }
                ] : [],
                ...c ? [
                  {
                    key: "others",
                    label: "关闭其他页签",
                    onClick: () => c(r)
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
                  className: g(
                    "inline-flex items-center justify-center rounded-[var(--abc-radius-sm)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                    w.actionBtn
                  ),
                  children: /* @__PURE__ */ e(mo, { className: w.actionIcon })
                }
              )
            }
          )
        ] })
      ]
    }
  );
}, dp = ({
  activeKey: t,
  enabled: r = !0,
  maxCached: a = 12,
  aliveKeys: n,
  scrollContainerRef: s,
  refreshSeed: o = 0,
  activeClassName: d,
  children: c
}) => {
  const u = ce(/* @__PURE__ */ new Map()), l = ce(0), b = ce(/* @__PURE__ */ new Map()), m = ce(t);
  if (ge(() => {
    const f = s == null ? void 0 : s.current;
    if (!f) return;
    m.current && m.current !== t && b.current.set(m.current, f.scrollTop), m.current = t;
    const p = b.current.get(t) ?? 0;
    requestAnimationFrame(() => {
      s != null && s.current && (s.current.scrollTop = p);
    });
  }, [t, s]), ge(() => {
    if (typeof window > "u") return;
    const f = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 60);
    return () => window.clearTimeout(f);
  }, [t]), !r)
    return u.current.clear(), /* @__PURE__ */ e("div", { className: g("min-h-full", d), children: c }, `${t}_${o}`);
  if (n && n.length > 0) {
    const f = /* @__PURE__ */ new Set([...n, t]);
    for (const p of Array.from(u.current.keys()))
      f.has(p) || (u.current.delete(p), b.current.delete(p));
  }
  l.current += 1;
  const h = u.current.get(t);
  for (u.current.set(t, {
    key: t,
    seed: o,
    lastActiveTick: l.current,
    node: h && h.seed === o ? h.node : c
  }); u.current.size > a; ) {
    let f = null, p = 1 / 0;
    for (const [x, w] of u.current.entries())
      x !== t && w.lastActiveTick < p && (p = w.lastActiveTick, f = x);
    if (f)
      u.current.delete(f);
    else
      break;
  }
  return /* @__PURE__ */ e(tt, { children: Array.from(u.current.values()).map((f) => {
    const p = f.key === t;
    return /* @__PURE__ */ e(
      "div",
      {
        style: { display: p ? "block" : "none" },
        className: g("min-h-full", p && d),
        children: f.node
      },
      `${f.key}_${f.seed}`
    );
  }) });
}, Hc = "abc_cmd_recent_v1", Uc = 5;
function Pi() {
  if (typeof window > "u") return [];
  try {
    const t = window.localStorage.getItem(Hc);
    if (!t) return [];
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function zi(t) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(Hc, JSON.stringify(t.slice(0, Uc)));
    } catch {
    }
}
function Vc(t, r = []) {
  var n;
  const a = [];
  for (const s of t) {
    const o = [...r, s.label];
    s.path && (!s.children || s.children.length === 0) && a.push({ item: s, trail: o.join(" / ") }), (n = s.children) != null && n.length && a.push(...Vc(s.children, o));
  }
  return a;
}
function Oi(t, r) {
  const a = r.trim();
  if (!a) return t;
  const n = t.toLowerCase(), s = a.toLowerCase(), o = n.indexOf(s);
  if (o < 0) return t;
  const d = t.slice(0, o), c = t.slice(o, o + a.length), u = t.slice(o + a.length);
  return /* @__PURE__ */ i(tt, { children: [
    d,
    /* @__PURE__ */ e("mark", { className: "rounded-[2px] bg-[var(--abc-primary)]/18 px-0.5 text-[var(--abc-primary)] font-semibold", children: c }),
    u
  ] });
}
const up = ({
  open: t,
  onClose: r,
  menuItems: a = [],
  onNavigate: n,
  extraActions: s = []
}) => {
  const { iconRegistry: o } = At(), [d, c] = $(""), [u, l] = $("all"), [b, m] = $(0), [h, f] = $(() => Pi()), p = ce(null), x = ce(null);
  ge(() => {
    t ? f(Pi()) : (c(""), l("all"), m(0));
  }, [t]);
  const w = se(() => [
    ...Vc(a).map(({ item: T, trail: _ }) => ({
      id: `nav_${T.key}`,
      title: T.label,
      subtitle: `${_}${T.path ? ` · ${T.path}` : ""}`,
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
  ], [a, n, s]), k = se(() => {
    const y = /* @__PURE__ */ new Set();
    for (const T of w)
      T.group && y.add(T.group);
    return Array.from(y);
  }, [w]), v = se(() => {
    const y = d.trim(), T = (z) => u !== "all" && u !== "__recent__" && z.group !== u ? !1 : y ? dr(z.title, y) || !!(z.subtitle && dr(z.subtitle, y)) || !!(z.keywords && dr(z.keywords, y)) : !0, _ = [];
    if (u === "__recent__") {
      const z = h.map((K) => w.find((E) => E.id === K)).filter((K) => K !== void 0 && T(K));
      return z.length > 0 && _.push({ groupName: "最近访问", isRecent: !0, items: z }), _;
    }
    const R = /* @__PURE__ */ new Set();
    if (!y && u === "all" && h.length > 0) {
      const z = h.map((K) => w.find((E) => E.id === K)).filter((K) => K !== void 0);
      z.length > 0 && (z.forEach((K) => R.add(K.id)), _.push({ groupName: "最近访问", isRecent: !0, items: z }));
    }
    const A = /* @__PURE__ */ new Map();
    for (const z of w) {
      if (R.has(z.id) || !T(z)) continue;
      const K = z.group || "其他", E = A.get(K) ?? [];
      E.push(z), A.set(K, E);
    }
    for (const [z, K] of A.entries())
      K.length > 0 && _.push({ groupName: z, items: K });
    return _;
  }, [w, d, u, h]), C = se(
    () => v.flatMap((y) => y.items),
    [v]
  );
  ge(() => {
    m(0);
  }, [d, u]), ge(() => {
    var T;
    if (!t || !x.current) return;
    const y = x.current.querySelector(`[data-cmd-idx="${b}"]`);
    (T = y == null ? void 0 : y.scrollIntoView) == null || T.call(y, { block: "nearest" });
  }, [b, t]);
  const L = (y) => {
    if (!y) return;
    const T = [y.id, ...h.filter((_) => _ !== y.id)].slice(
      0,
      Uc
    );
    f(T), zi(T), y.onTrigger(), r();
  }, D = () => {
    f([]), zi([]), u === "__recent__" && l("all");
  }, j = se(() => {
    const y = ["all"];
    return h.length > 0 && y.push("__recent__"), [...y, ...k];
  }, [h.length, k]);
  let S = -1;
  return /* @__PURE__ */ e(
    yr,
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
              y.preventDefault(), m((T) => C.length ? (T + 1) % C.length : 0);
            else if (y.key === "ArrowUp")
              y.preventDefault(), m(
                (T) => C.length ? (T - 1 + C.length) % C.length : 0
              );
            else if (y.key === "Tab") {
              y.preventDefault();
              const T = j.indexOf(u), _ = y.shiftKey ? -1 : 1, R = j[(T + _ + j.length) % j.length];
              R && l(R);
            } else y.key === "Enter" && C[b] && (y.preventDefault(), L(C[b]));
          },
          className: "-mx-5 -my-4 flex flex-col",
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-3 border-b border-[var(--abc-border)] px-5 py-4", children: [
              /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(Ot, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: p,
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
                    c(""), (y = p.current) == null || y.focus();
                  },
                  className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ e(La, { className: "shrink-0", children: "ESC" })
            ] }),
            k.length > 0 && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-b border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 px-5 py-2", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none]", children: [
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("all"),
                    className: g(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      u === "all" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      "全部 (",
                      w.length,
                      ")"
                    ]
                  }
                ),
                h.length > 0 && /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    onClick: () => l("__recent__"),
                    className: g(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      u === "__recent__" ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: [
                      /* @__PURE__ */ e(Fn, { className: "h-3 w-3" }),
                      /* @__PURE__ */ e("span", { children: "最近访问" })
                    ]
                  }
                ),
                k.map((y) => /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => l(y),
                    className: g(
                      "rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                      u === y ? "bg-[var(--abc-primary)] text-[var(--abc-primary-fg)] shadow-2xs" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                    ),
                    children: y
                  },
                  y
                ))
              ] }),
              h.length > 0 && /* @__PURE__ */ i(
                "button",
                {
                  type: "button",
                  onClick: D,
                  className: "inline-flex shrink-0 items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: [
                    /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
                    /* @__PURE__ */ e("span", { children: "清空历史" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { ref: x, className: "max-h-[min(460px,60dvh)] min-h-[240px] overflow-y-auto px-3 py-2.5", children: C.length === 0 ? /* @__PURE__ */ i("div", { className: "flex flex-col items-center justify-center py-14 text-center", children: [
              /* @__PURE__ */ e("div", { className: "mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]", children: /* @__PURE__ */ e(bn, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ i("p", { className: "text-sm font-medium text-[var(--abc-fg)]", children: [
                "未找到与 “",
                d,
                "” 匹配的菜单或快捷指令"
              ] }),
              /* @__PURE__ */ e("p", { className: "mt-1 text-xs text-[var(--abc-fg-muted)]", children: "支持直接输入中文名称、URL 路径片段或拼音首字母（例如：yhgl、ddgl）" })
            ] }) : /* @__PURE__ */ e("div", { className: "space-y-3", children: v.map((y) => /* @__PURE__ */ i("div", { className: "space-y-1", children: [
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[var(--abc-fg-muted)]", children: [
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1.5", children: [
                  y.isRecent && /* @__PURE__ */ e(Fn, { className: "h-3 w-3 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: y.groupName })
                ] }),
                /* @__PURE__ */ e("span", { className: "font-mono text-[10px] opacity-75", children: y.items.length })
              ] }),
              y.items.map((T) => {
                S += 1;
                const _ = S, R = _ === b;
                return /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    "data-cmd-idx": _,
                    onMouseEnter: () => m(_),
                    onClick: () => L(T),
                    className: g(
                      "group relative flex w-full items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] px-3.5 py-2.5 text-left transition-colors cursor-pointer",
                      R ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
                    ),
                    children: [
                      /* @__PURE__ */ i("div", { className: "flex min-w-0 items-center gap-3", children: [
                        /* @__PURE__ */ e(
                          "div",
                          {
                            className: g(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border transition-colors",
                              R ? "border-[var(--abc-primary)]/30 bg-[var(--abc-bg-surface)] text-[var(--abc-primary)] shadow-2xs" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)]"
                            ),
                            children: T.icon ? typeof T.icon == "string" ? /* @__PURE__ */ e(jr, { name: T.icon, size: 17, registry: o }) : /* @__PURE__ */ e("span", { className: "inline-flex shrink-0", children: T.icon }) : /* @__PURE__ */ e(Ot, { className: "h-4 w-4" })
                          }
                        ),
                        /* @__PURE__ */ i("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ e(
                            "div",
                            {
                              className: g(
                                "truncate text-sm font-semibold",
                                R ? "text-[var(--abc-primary)]" : "text-[var(--abc-fg)]"
                              ),
                              children: Oi(T.title, d)
                            }
                          ),
                          T.subtitle && /* @__PURE__ */ e("div", { className: "mt-0.5 truncate text-xs text-[var(--abc-fg-muted)]", children: Oi(T.subtitle, d) })
                        ] })
                      ] }),
                      /* @__PURE__ */ i("div", { className: "flex shrink-0 items-center gap-2", children: [
                        T.group && /* @__PURE__ */ e(
                          "span",
                          {
                            className: g(
                              "rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium",
                              R ? "bg-[var(--abc-primary)]/12 text-[var(--abc-primary)]" : "bg-[var(--abc-bg-subtle)] text-[var(--abc-fg-muted)]"
                            ),
                            children: T.group
                          }
                        ),
                        R && /* @__PURE__ */ e("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-[var(--abc-primary)]", children: /* @__PURE__ */ e(oc, { className: "h-3.5 w-3.5" }) })
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
                  /* @__PURE__ */ e(La, { children: /* @__PURE__ */ e(qs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e(La, { children: /* @__PURE__ */ e(Xs, { className: "h-2.5 w-2.5" }) }),
                  /* @__PURE__ */ e("span", { children: "上下选择" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(La, { children: "↵" }),
                  /* @__PURE__ */ e("span", { children: "立即跳转" })
                ] }),
                /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ e(La, { children: "Tab" }),
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
}, Zh = ({
  title: t,
  subtitle: r,
  tags: a,
  breadcrumbs: n,
  extra: s,
  headerContent: o,
  footer: d,
  className: c,
  children: u
}) => /* @__PURE__ */ i("div", { className: g("flex min-h-full flex-col gap-4", d && "pb-16", c), children: [
  ((n == null ? void 0 : n.length) || t || s || o) && /* @__PURE__ */ i("div", { className: "flex flex-col gap-2.5", children: [
    n && n.length > 0 && /* @__PURE__ */ e("nav", { "aria-label": "页面路径面包屑", className: "flex items-center gap-1 text-xs text-[var(--abc-fg-muted)]", children: n.map((l, b) => {
      const m = b === n.length - 1;
      return /* @__PURE__ */ i(at.Fragment, { children: [
        b > 0 && /* @__PURE__ */ e(vr, { className: "h-3 w-3 opacity-60" }),
        l.onClick && !m ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: l.onClick,
            className: "hover:text-[var(--abc-primary)] cursor-pointer",
            children: l.label
          }
        ) : /* @__PURE__ */ e("span", { className: g(m && "font-medium text-[var(--abc-fg-secondary)]"), children: l.label })
      ] }, b);
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
  /* @__PURE__ */ e("div", { className: "flex-1", children: u }),
  d && /* @__PURE__ */ e("div", { className: "sticky bottom-0 z-30 -mx-4 mt-4 flex items-center justify-end gap-2.5 border-t border-[var(--abc-border)] bg-[var(--abc-bg-surface)]/92 px-6 py-3 backdrop-blur-md", children: d })
] }), bp = ({
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
  className: u
}) => r === "centered" ? /* @__PURE__ */ i(
  "div",
  {
    className: g(
      "relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[var(--abc-bg-canvas)] p-6",
      u
    ),
    children: [
      /* @__PURE__ */ e(Si, {}),
      o && /* @__PURE__ */ e("div", { className: "fixed top-4 right-5 z-20", children: o }),
      /* @__PURE__ */ e("div", { className: "relative z-10 mb-6", children: /* @__PURE__ */ e(Ba, { brand: t }) }),
      /* @__PURE__ */ i("div", { className: "relative z-10 w-full max-w-md overflow-hidden rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-dialog)]", children: [
        /* @__PURE__ */ e(ki, {}),
        c
      ] }),
      /* @__PURE__ */ e("footer", { className: "relative z-10 mt-8 text-xs text-[var(--abc-fg-muted)]", children: d })
    ]
  }
) : /* @__PURE__ */ i(
  "div",
  {
    className: g(
      "relative grid min-h-dvh w-full grid-cols-1 bg-[var(--abc-bg-canvas)] lg:grid-cols-12",
      u
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:col-span-6 lg:flex xl:col-span-7", children: [
        /* @__PURE__ */ e(Si, {}),
        /* @__PURE__ */ e("div", { className: "relative z-10", children: /* @__PURE__ */ e(Ba, { brand: t, tone: "dark", className: "px-0" }) }),
        /* @__PURE__ */ i("div", { className: "relative z-10 my-auto max-w-lg space-y-6", children: [
          /* @__PURE__ */ e("h1", { className: "text-3xl font-bold tracking-tight leading-tight text-white", children: a }),
          /* @__PURE__ */ e("p", { className: "text-sm leading-relaxed text-slate-300", children: n }),
          /* @__PURE__ */ e("ul", { className: "space-y-3 pt-2", children: s.map((l, b) => /* @__PURE__ */ i("li", { className: "flex items-start gap-2.5 text-xs text-slate-200", children: [
            /* @__PURE__ */ e(Xr, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--abc-brand-400)]" }),
            /* @__PURE__ */ e("span", { children: l })
          ] }, b)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 text-xs text-slate-400", children: d })
      ] }),
      /* @__PURE__ */ i("div", { className: "relative flex flex-col justify-between p-6 sm:p-10 lg:col-span-6 xl:col-span-5", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e("div", { className: "lg:hidden", children: /* @__PURE__ */ e(Ba, { brand: t, className: "px-0" }) }),
          /* @__PURE__ */ e("div", { className: "ml-auto", children: o })
        ] }),
        /* @__PURE__ */ i("div", { className: "mx-auto my-auto w-full max-w-md overflow-hidden relative rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-7 shadow-[var(--abc-shadow-card)]", children: [
          /* @__PURE__ */ e(ki, {}),
          c
        ] }),
        /* @__PURE__ */ e("div", { className: "text-center text-xs text-[var(--abc-fg-muted)] lg:hidden", children: d })
      ] })
    ]
  }
), mp = [
  { mode: "sidebar", title: "经典侧边栏", desc: "左侧树形导航 + 右侧工作区" },
  { mode: "top", title: "顶部水平导航", desc: "全宽视野，含顶层子菜单" },
  { mode: "mix", title: "混合分栏导航", desc: "顶栏一级域 + 侧栏子菜单" },
  { mode: "dual-column", title: "双栏紧凑侧栏", desc: "窄主轨 + 二级菜单面板" },
  { mode: "auth", title: "认证分屏页", desc: "登录 / SSO 品牌分屏模式" }
], fp = [
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
], pp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, $i = ({
  open: t,
  onClose: r,
  layoutSettings: a,
  onLayoutChange: n,
  onResetAll: s
}) => {
  var Ae;
  const {
    theme: o,
    pageTransition: d,
    watermarkEnabled: c,
    setThemeMode: u,
    setBrand: l,
    setCustomBrandColor: b,
    setDensity: m,
    setRadius: h,
    setFontScale: f,
    setVisualMode: p,
    setComponentSize: x,
    setMotion: w,
    updateTheme: k,
    setPageTransition: v,
    setWatermarkEnabled: C,
    resetTheme: L,
    toast: D
  } = At(), [j, S] = $(1), [y, T] = $(!0), [_, R] = $("实时 Token 响应预览"), [A, z] = $(0), [K, E] = $(!1), [I, P] = $(""), [H, O] = $(o.customBrandColor ?? "#0ea5e9"), G = o.componentSize ?? "sm", Y = a.sidebarWidth ?? rp[G], ie = a.headerHeight ?? ap[G], V = o.customBrandColor || ((Ae = Ps[o.brand]) == null ? void 0 : Ae.swatch) || "#2563eb", re = (F, Z) => {
    F.theme.mode && F.theme.mode !== o.mode && u(F.theme.mode, { clientX: Z.clientX, clientY: Z.clientY }), k(F.theme), n(F.layout), v(F.transition), z((Re) => Re + 1), D.success(`已切换至「${F.name}」场景预设`);
  };
  return /* @__PURE__ */ e(
    yn,
    {
      open: t,
      onClose: r,
      title: "设计系统与布局实时定制",
      description: "所有 Token、色阶、尺寸与过渡动画实时生效，支持一键预设切换与工程代码生成",
      width: 440,
      footer: /* @__PURE__ */ i("div", { className: "flex w-full flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Ee,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
              onClick: () => {
                L(), s == null || s(), D.info("已恢复默认主题与布局设置");
              },
              children: "重置"
            }
          ),
          /* @__PURE__ */ e(
            Ee,
            {
              variant: "ghost",
              size: "xs",
              icon: /* @__PURE__ */ e(ts, { className: "h-3.5 w-3.5" }),
              onClick: () => E((F) => !F),
              children: "导入 JSON"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            Ee,
            {
              variant: "outline",
              size: "xs",
              icon: /* @__PURE__ */ e(Ou, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const F = JSON.stringify(o, null, 2), Z = JSON.stringify(a, null, 2), Re = `<AbcProvider
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
                  await navigator.clipboard.writeText(Re), D.success("已复制 <AbcProvider> + <ProLayout> 工程接入代码");
                } catch {
                  D.error("复制代码失败");
                }
              },
              children: "复制 JSX"
            }
          ),
          /* @__PURE__ */ e(
            Ee,
            {
              variant: "primary",
              size: "xs",
              icon: /* @__PURE__ */ e(ga, { className: "h-3.5 w-3.5" }),
              onClick: async () => {
                const F = {
                  theme: o,
                  layout: a,
                  pageTransition: d,
                  watermarkEnabled: c
                };
                try {
                  await navigator.clipboard.writeText(JSON.stringify(F, null, 2)), D.success("已复制完整设计系统与布局 JSON 配置");
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
        K && /* @__PURE__ */ i("section", { className: "space-y-2 rounded-[var(--abc-radius-lg)] border border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)]/35 p-3 abc-animate-popover-in", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs font-semibold text-[var(--abc-fg)]", children: [
            /* @__PURE__ */ e("span", { children: "粘贴团队共享的 JSON 配置" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => E(!1),
                className: "text-[11px] text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: "收起"
              }
            )
          ] }),
          /* @__PURE__ */ e(
            mn,
            {
              rows: 4,
              value: I,
              onChange: (F) => P(F.target.value),
              placeholder: '{"theme": {"mode": "dark", "brand": "indigo"}, "layout": {"mode": "top"}}',
              className: "font-mono text-[11px]"
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ e(Ee, { size: "xs", variant: "primary", onClick: () => {
            try {
              const F = JSON.parse(I);
              F.theme && typeof F.theme == "object" && k(F.theme), F.layout && typeof F.layout == "object" && n(F.layout), typeof F.pageTransition == "string" && v(F.pageTransition), typeof F.watermarkEnabled == "boolean" && C(F.watermarkEnabled), E(!1), P(""), D.success("已成功导入并应用自定义配置");
            } catch {
              D.error("JSON 格式解析失败，请检查粘贴内容");
            }
          }, children: "立即应用配置" }) })
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ i("h3", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[var(--abc-fg)]", children: [
              /* @__PURE__ */ e(bn, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { children: "实时交互体验沙盒" })
            ] }),
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => z((F) => F + 1),
                className: "inline-flex items-center gap-1 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-primary-soft)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Gi, { className: "h-3 w-3" }),
                  /* @__PURE__ */ e("span", { children: "重播过渡动效" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i(
            "div",
            {
              className: g(
                "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/65 p-3.5 shadow-[var(--abc-shadow-card)]",
                pp[d]
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ i(Ee, { variant: "primary", onClick: () => S((F) => F + 1), children: [
                      "按压回弹 #",
                      j
                    ] }),
                    /* @__PURE__ */ e(Ee, { variant: "outline", onClick: () => T((F) => !F), children: "次级操作" })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(pa, { status: y ? "success" : "warning", dot: !0, children: y ? "服务在线" : "维护挂起" }),
                    /* @__PURE__ */ e(
                      cr,
                      {
                        checked: y,
                        onChange: T,
                        ariaLabel: "切换沙盒状态"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  pt,
                  {
                    allowClear: !0,
                    value: _,
                    onChange: (F) => R(F.target.value),
                    placeholder: "在此输入测试圆角、聚焦环与全局尺寸/动效..."
                  }
                ),
                /* @__PURE__ */ i("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-[10px] text-[var(--abc-fg-muted)]", children: [
                    /* @__PURE__ */ e("span", { children: "当前主色阶梯 (50 → 950)" }),
                    /* @__PURE__ */ e("span", { className: "font-mono uppercase", children: V })
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
            A
          )
        ] }),
        /* @__PURE__ */ i("section", { className: "space-y-2.5", children: [
          /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-[var(--abc-fg)]", children: "1. 一键场景风格预设" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2", children: fp.map((F) => /* @__PURE__ */ i(
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
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-2.5", children: mp.map((F) => {
            const Z = a.mode === F.mode;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => n({ mode: F.mode }),
                className: g(
                  "flex flex-col items-start gap-1.5 rounded-[var(--abc-radius-lg)] border p-2.5 text-left transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Z ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 ring-1 ring-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] hover:border-[var(--abc-border-strong)]"
                ),
                children: [
                  /* @__PURE__ */ i("div", { className: "flex h-9 w-full overflow-hidden rounded-xs border border-[var(--abc-border)] bg-[var(--abc-bg-canvas)]", children: [
                    F.mode === "sidebar" && /* @__PURE__ */ i(tt, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-4 bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ e("span", { className: "h-2.5 w-full border-b border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    F.mode === "top" && /* @__PURE__ */ e("span", { className: "flex w-full flex-col", children: /* @__PURE__ */ e("span", { className: "h-3 w-full bg-slate-800" }) }),
                    F.mode === "mix" && /* @__PURE__ */ i("span", { className: "flex w-full flex-col", children: [
                      /* @__PURE__ */ e("span", { className: "h-2.5 w-full bg-slate-800" }),
                      /* @__PURE__ */ e("span", { className: "flex flex-1", children: /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" }) })
                    ] }),
                    F.mode === "dual-column" && /* @__PURE__ */ i(tt, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-2.5 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "h-full w-3.5 border-r border-[var(--abc-border)] bg-[var(--abc-bg-surface)]" })
                    ] }),
                    F.mode === "auth" && /* @__PURE__ */ i(tt, { children: [
                      /* @__PURE__ */ e("span", { className: "h-full w-1/2 bg-slate-900" }),
                      /* @__PURE__ */ e("span", { className: "flex h-full w-1/2 items-center justify-center bg-[var(--abc-bg-surface)]", children: /* @__PURE__ */ e("span", { className: "h-4 w-5 rounded-[2px] border border-[var(--abc-border)]" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ i("div", { className: "flex w-full items-center justify-between", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: F.title }),
                    Z && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
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
                onChange: (F) => u(F),
                options: [
                  {
                    value: "light",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(on, { className: "h-3 w-3" }),
                      " 亮色"
                    ] })
                  },
                  {
                    value: "dark",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(cn, { className: "h-3 w-3" }),
                      " 暗黑"
                    ] })
                  },
                  {
                    value: "system",
                    label: /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1", children: [
                      /* @__PURE__ */ e(fo, { className: "h-3 w-3" }),
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
                value: a.sidebarTone,
                onChange: (F) => n({ sidebarTone: F }),
                options: [
                  { value: "dark", label: "经典深色" },
                  { value: "light", label: "通透浅色" }
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-2 pt-1", children: Object.keys(Ps).map((F) => {
            const Z = Ps[F], Re = !o.customBrandColor && o.brand === F;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => l(F),
                className: g(
                  "flex items-center gap-2 rounded-[var(--abc-radius-md)] border px-2.5 py-2 text-xs transition-all motion-safe:active:scale-[0.98] cursor-pointer",
                  Re ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] font-semibold text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)]"
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
              /* @__PURE__ */ e(bo, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-medium text-[var(--abc-fg-secondary)]", children: "自定义品牌 HEX" })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "color",
                  "aria-label": "拾取自定义品牌色",
                  value: o.customBrandColor || H,
                  onChange: (F) => {
                    const Z = F.target.value;
                    O(Z), b(Z);
                  },
                  className: "h-6 w-7 cursor-pointer rounded border-0 bg-transparent p-0"
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  maxLength: 7,
                  value: o.customBrandColor ?? H,
                  onChange: (F) => {
                    const Z = F.target.value;
                    O(Z), /^#[0-9a-fA-F]{6}$/.test(Z) && b(Z);
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
                options: Object.keys(ci).map((F) => ({
                  value: F,
                  label: ci[F].label
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
                onChange: (F) => h(F),
                options: Object.keys(li).map((F) => ({
                  value: F,
                  label: li[F].label.split(" ")[0]
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
              /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-primary)]", children: en[o.motion ?? "smooth"].durationBase })
            ] }),
            /* @__PURE__ */ e(
              Dr,
              {
                variant: "segmented",
                value: o.motion ?? "smooth",
                onChange: (F) => {
                  w(F), z((Z) => Z + 1);
                },
                options: Object.keys(en).map((F) => ({
                  value: F,
                  label: en[F].label.slice(0, 2)
                })),
                className: "w-full justify-between"
              }
            ),
            /* @__PURE__ */ i("p", { className: "text-[10px] text-[var(--abc-fg-muted)]", children: [
              en[o.motion ?? "smooth"].label,
              "：",
              en[o.motion ?? "smooth"].description
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
              cr,
              {
                checked: a.showTabs,
                onChange: (F) => n({ showTabs: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "开启多页签 DOM 保活 (KeepAlive)" }),
            /* @__PURE__ */ e(
              cr,
              {
                checked: a.keepAlive,
                onChange: (F) => n({ keepAlive: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏毛玻璃半透明模糊" }),
            /* @__PURE__ */ e(
              cr,
              {
                checked: a.headerBlur !== !1,
                onChange: (F) => n({ headerBlur: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "顶栏显示面包屑路径" }),
            /* @__PURE__ */ e(
              cr,
              {
                checked: a.showBreadcrumb !== !1,
                onChange: (F) => n({ showBreadcrumb: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "侧边栏手风琴互斥展开" }),
            /* @__PURE__ */ e(
              cr,
              {
                checked: a.sidebarAccordion,
                onChange: (F) => n({ sidebarAccordion: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "显示底部版权页脚" }),
            /* @__PURE__ */ e(
              cr,
              {
                checked: !!a.showFooter,
                onChange: (F) => n({ showFooter: F })
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "防篡改全局安全水印" }),
            /* @__PURE__ */ e(
              cr,
              {
                checked: c,
                onChange: (F) => C(F)
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: "内容区域宽度策略" }),
            /* @__PURE__ */ e(
              Dr,
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
              ur,
              {
                size: "xs",
                className: "w-44",
                value: d,
                onChange: (F) => {
                  v(F), z((Z) => Z + 1);
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
            /* @__PURE__ */ e(Wa, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
            /* @__PURE__ */ e("span", { children: "6. 视觉辅助与特殊色彩滤镜" })
          ] }),
          /* @__PURE__ */ e(
            Dr,
            {
              variant: "segmented",
              value: o.visualMode ?? "default",
              onChange: (F) => p(F),
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
}, hp = {
  "fade-slide": "abc-page-fade-slide",
  fade: "abc-page-fade",
  zoom: "abc-page-zoom",
  "slide-left": "abc-page-slide-left",
  none: ""
}, gp = {
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
}, Jh = ({
  brand: t = { name: "ABC Console", subtitle: "Enterprise UI" },
  menuItems: r,
  pathname: a,
  onNavigate: n,
  settings: s,
  defaultSettings: o,
  onSettingsChange: d,
  user: c,
  headerExtra: u,
  commandActions: l = [],
  tabs: b,
  onTabsChange: m,
  authRender: h,
  authProps: f,
  showCustomizerTrigger: p = !0,
  size: x,
  motion: w,
  children: k
}) => {
  const {
    resolvedTheme: v,
    toggleTheme: C,
    pageTransition: L,
    watermarkEnabled: D,
    watermarkText: j
  } = At(), S = Be(x, "sm"), y = Ie(w), T = gp[S], _ = se(
    () => ({ ...np, ...o }),
    [o]
  ), [R, A] = _r({
    value: s ? { ..._, ...s } : void 0,
    defaultValue: _,
    onChange: d
  }), z = ue(
    (J) => {
      A((me) => ({ ...me, ...J }));
    },
    [A]
  ), [K, E] = $(!1), [I, P] = $(!1), [H, O] = $(!1), [G, Y] = $({}), ie = ce(null), [V, re] = _r({
    value: b,
    defaultValue: [],
    onChange: m
  }), te = se(
    () => Kc(r, a),
    [r, a]
  );
  ge(() => {
    const J = te[te.length - 1];
    !J || !J.path || re((me) => me.some((ze) => ze.path === J.path) ? me : [
      ...me,
      {
        path: J.path,
        title: J.label,
        icon: J.icon,
        pinned: me.length === 0
      }
    ]);
  }, [te, re]), ge(() => {
    const J = (me) => {
      (me.metaKey || me.ctrlKey) && me.key.toLowerCase() === "k" && (me.preventDefault(), P((ze) => !ze));
    };
    return window.addEventListener("keydown", J), () => window.removeEventListener("keydown", J);
  }, []);
  const le = se(
    () => r.find((J) => qr(J, a)) ?? r[0],
    [r, a]
  ), [oe, Ae] = $((le == null ? void 0 : le.key) ?? "");
  ge(() => {
    le != null && le.key && Ae(le.key);
  }, [le == null ? void 0 : le.key]);
  const F = se(() => {
    const J = r.find((me) => me.key === oe) ?? le;
    return (J == null ? void 0 : J.children) ?? [];
  }, [r, oe, le]), Z = (J) => {
    const me = V.findIndex((rt) => rt.path === J), ze = V.filter((rt) => rt.path !== J || rt.pinned);
    if (re(ze), J === a && ze.length > 0) {
      const rt = ze[Math.max(0, me - 1)] ?? ze[0];
      rt && n(rt.path);
    }
  }, Re = se(() => j || [(c == null ? void 0 : c.name) || t.name, (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)], [j, c == null ? void 0 : c.name, t.name]);
  if (R.mode === "auth")
    return /* @__PURE__ */ i(tt, { children: [
      /* @__PURE__ */ e(
        bp,
        {
          brand: t,
          topRightExtra: /* @__PURE__ */ i("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "切换明暗主题",
                onClick: (J) => C({ clientX: J.clientX, clientY: J.clientY }),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: v === "dark" ? /* @__PURE__ */ e(on, { className: "h-4 w-4" }) : /* @__PURE__ */ e(cn, { className: "h-4 w-4" })
              }
            ),
            p && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                "aria-label": "打开布局与主题配置",
                onClick: () => O(!0),
                className: "inline-flex h-8 items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs font-medium text-[var(--abc-fg)] hover:border-[var(--abc-primary)] cursor-pointer",
                children: [
                  /* @__PURE__ */ e(Gs, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
                  /* @__PURE__ */ e("span", { children: "切换布局" })
                ]
              }
            )
          ] }),
          ...f,
          children: h ?? k
        }
      ),
      /* @__PURE__ */ e(
        $i,
        {
          open: H,
          onClose: () => O(!1),
          layoutSettings: R,
          onLayoutChange: z,
          onResetAll: () => A(_)
        }
      )
    ] });
  const Ue = R.mode === "sidebar", he = R.mode === "top", Se = R.mode === "mix", Fe = R.mode === "dual-column", Le = /* @__PURE__ */ i(
    "header",
    {
      className: g(
        "flex h-[var(--abc-header-h)] shrink-0 items-center justify-between gap-3 border-b border-[var(--abc-border)] select-none transition-colors",
        T.headerPad,
        R.headerBlur !== !1 ? "bg-[var(--abc-bg-surface)]/85 backdrop-blur-md" : "bg-[var(--abc-bg-surface)]"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "展开移动端菜单",
              onClick: () => E(!0),
              className: g(
                "inline-flex shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] md:hidden cursor-pointer",
                T.iconBtn
              ),
              children: /* @__PURE__ */ e(Yi, { className: T.iconCls })
            }
          ),
          (he || Se) && /* @__PURE__ */ e("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ e(Ba, { brand: t, size: S, className: "px-0 pr-3" }) }),
          (Ue || Se && F.length > 0) && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": R.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏",
              onClick: () => z({ sidebarCollapsed: !R.sidebarCollapsed }),
              className: g(
                "hidden shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] md:inline-flex cursor-pointer",
                T.iconBtn
              ),
              children: R.sidebarCollapsed ? /* @__PURE__ */ e($u, { className: T.iconCls }) : /* @__PURE__ */ e(Fu, { className: T.iconCls })
            }
          ),
          he && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Bi,
            {
              items: r,
              pathname: a,
              size: S,
              motion: y,
              onNavigate: (J, me) => n(J, me)
            }
          ) }),
          Se && /* @__PURE__ */ e("div", { className: "hidden min-w-0 flex-1 md:block", children: /* @__PURE__ */ e(
            Bi,
            {
              items: r,
              pathname: a,
              topLevelOnly: !0,
              activeRootKey: oe,
              size: S,
              motion: y,
              onSelectRoot: (J) => {
                var me, ze;
                Ae(J.key), J.path && (!J.children || J.children.length === 0) ? n(J.path, J) : (ze = (me = J.children) == null ? void 0 : me[0]) != null && ze.path && n(J.children[0].path, J.children[0]);
              },
              onNavigate: (J, me) => n(J, me)
            }
          ) }),
          (Ue || Fe) && R.showBreadcrumb !== !1 && te.length > 0 && /* @__PURE__ */ e(
            "nav",
            {
              "aria-label": "当前位置",
              className: g(
                "hidden min-w-0 items-center gap-1.5 text-[var(--abc-fg-muted)] sm:flex",
                T.breadcrumb
              ),
              children: te.map((J, me) => {
                const ze = me === te.length - 1;
                return /* @__PURE__ */ i(at.Fragment, { children: [
                  me > 0 && /* @__PURE__ */ e(vr, { className: "h-3 w-3 shrink-0 opacity-50" }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: g(
                        "truncate",
                        ze && "font-semibold text-[var(--abc-fg)]"
                      ),
                      children: J.label
                    }
                  )
                ] }, J.key);
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
              className: g(
                "inline-flex items-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-border-strong)] hover:text-[var(--abc-fg)] cursor-pointer",
                T.searchBtn
              ),
              children: [
                /* @__PURE__ */ e(Ot, { className: T.searchIcon }),
                /* @__PURE__ */ e("span", { className: "hidden lg:inline", children: "搜索菜单..." }),
                /* @__PURE__ */ e(La, { className: "hidden sm:inline-flex", children: "⌘K" })
              ]
            }
          ),
          u,
          /* @__PURE__ */ e(er, { content: "切换亮色 / 暗黑模式", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "切换亮暗模式",
              onClick: (J) => C({ clientX: J.clientX, clientY: J.clientY }),
              className: g(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                T.iconBtn
              ),
              children: v === "dark" ? /* @__PURE__ */ e(on, { className: T.iconCls }) : /* @__PURE__ */ e(cn, { className: T.iconCls })
            }
          ) }),
          p && /* @__PURE__ */ e(er, { content: "设计系统与布局实时定制", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              "aria-label": "打开主题与布局配置抽屉",
              onClick: () => O(!0),
              className: g(
                "inline-flex items-center justify-center rounded-[var(--abc-radius-md)] text-[var(--abc-primary)] bg-[var(--abc-primary-soft)] hover:brightness-95 cursor-pointer",
                T.iconBtn
              ),
              children: /* @__PURE__ */ e(Gs, { className: T.iconCls })
            }
          ) }),
          c && /* @__PURE__ */ e(
            pn,
            {
              items: c.menuItems ?? [
                { key: "profile", label: `当前账号：${c.name}`, disabled: !0 }
              ],
              children: /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] px-2 py-1 hover:bg-[var(--abc-bg-subtle)]", children: [
                /* @__PURE__ */ e(xm, { src: c.avatar, name: c.name, size: T.avatarSize }),
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
  ), nt = /* @__PURE__ */ i("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", children: [
    !Se && Le,
    R.showTabs && /* @__PURE__ */ e(
      lp,
      {
        tabs: V,
        activePath: a,
        variant: R.tabStyle ?? "card",
        size: S,
        motion: y,
        onSelect: (J) => n(J),
        onClose: Z,
        onTogglePin: (J) => re(
          (me) => me.map((ze) => ze.path === J ? { ...ze, pinned: !ze.pinned } : ze)
        ),
        onCloseOthers: (J) => re((me) => me.filter((ze) => ze.pinned || ze.path === J)),
        onCloseRight: (J) => {
          const me = V.findIndex((ze) => ze.path === J);
          me < 0 || re((ze) => ze.filter((rt, nr) => nr <= me || rt.pinned));
        },
        onCloseAll: () => {
          const J = V.filter((me) => me.pinned);
          re(J), J[0] && J[0].path !== a && n(J[0].path);
        },
        onRefresh: (J) => Y((me) => ({ ...me, [J]: (me[J] ?? 0) + 1 }))
      }
    ),
    /* @__PURE__ */ e(
      "main",
      {
        ref: ie,
        className: "flex-1 overflow-y-auto bg-[var(--abc-bg-canvas)] p-4 sm:p-5",
        children: /* @__PURE__ */ i(
          Df,
          {
            enabled: D,
            content: Re,
            className: g(
              "min-h-full",
              R.contentWidth === "fixed" && "mx-auto max-w-7xl"
            ),
            children: [
              /* @__PURE__ */ e(
                dp,
                {
                  activeKey: a,
                  enabled: R.keepAlive,
                  aliveKeys: V.map((J) => J.path),
                  scrollContainerRef: ie,
                  refreshSeed: G[a] ?? 0,
                  activeClassName: hp[L],
                  children: k
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
  ] }), we = {
    "--abc-sidebar-w": R.sidebarWidth ? `${R.sidebarWidth}px` : void 0,
    "--abc-header-h": R.headerHeight ? `${R.headerHeight}px` : void 0
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-size": S,
      "data-motion": y,
      style: we,
      className: "flex h-dvh w-dvw flex-col overflow-hidden bg-[var(--abc-bg-canvas)] text-[var(--abc-fg)]",
      children: [
        Se && Le,
        /* @__PURE__ */ i("div", { className: "flex min-h-0 flex-1 overflow-hidden", children: [
          Se && F.length > 0 && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Us,
            {
              items: F,
              pathname: a,
              collapsed: R.sidebarCollapsed,
              accordion: R.sidebarAccordion,
              tone: R.sidebarTone,
              size: S,
              motion: y,
              onNavigate: (J, me) => n(J, me)
            }
          ) }),
          Ue && /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(
            Us,
            {
              brand: t,
              items: r,
              pathname: a,
              collapsed: R.sidebarCollapsed,
              accordion: R.sidebarAccordion,
              tone: R.sidebarTone,
              size: S,
              motion: y,
              onNavigate: (J, me) => n(J, me)
            }
          ) }),
          Fe && /* @__PURE__ */ e("div", { className: "hidden md:flex", children: /* @__PURE__ */ e(
            ip,
            {
              brand: t,
              items: r,
              pathname: a,
              tone: R.sidebarTone,
              size: S,
              motion: y,
              onNavigate: (J, me) => n(J, me)
            }
          ) }),
          nt
        ] }),
        /* @__PURE__ */ e(
          yn,
          {
            open: K,
            onClose: () => E(!1),
            placement: "left",
            width: T.mobileDrawerWidth,
            resizable: !1,
            title: t.name,
            bodyClassName: "p-0",
            children: /* @__PURE__ */ e(
              Us,
              {
                items: r,
                pathname: a,
                tone: "light",
                size: S,
                motion: y,
                onNavigate: (J, me) => {
                  n(J, me), E(!1);
                },
                className: "!w-full border-r-0"
              }
            )
          }
        ),
        /* @__PURE__ */ e(
          up,
          {
            open: I,
            onClose: () => P(!1),
            menuItems: r,
            onNavigate: (J, me) => n(J, me),
            extraActions: [
              {
                id: "cmd_toggle_theme",
                title: v === "dark" ? "切换为亮色模式" : "切换为暗黑模式",
                group: "系统偏好",
                icon: "palette",
                onTrigger: () => C()
              },
              {
                id: "cmd_open_customizer",
                title: "打开设计系统与布局定制抽屉",
                group: "系统偏好",
                icon: "config",
                onTrigger: () => O(!0)
              },
              ...l
            ]
          }
        ),
        /* @__PURE__ */ e(
          $i,
          {
            open: H,
            onClose: () => O(!1),
            layoutSettings: R,
            onLayoutChange: z,
            onResetAll: () => A(_)
          }
        )
      ]
    }
  );
};
function Ro() {
  const { permissionAdapter: t } = At();
  return { hasPermission: (a, n = "any") => t ? t(a, n) : !0 };
}
const vp = ({
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
  const { hasPermission: u } = Ro(), l = t ?? r;
  if (!l) return /* @__PURE__ */ e(tt, { children: c });
  if (u(l, a)) return /* @__PURE__ */ e(tt, { children: c });
  if (n === "hide")
    return /* @__PURE__ */ e(tt, { children: o ?? d ?? null });
  if (at.isValidElement(c)) {
    const h = c, f = at.cloneElement(h, {
      disabled: !0,
      "aria-disabled": !0,
      onClick: void 0,
      className: `${((m = h.props) == null ? void 0 : m.className) || ""} opacity-50 cursor-not-allowed pointer-events-none select-none`.trim()
    });
    return /* @__PURE__ */ e(er, { content: s, placement: "top", children: /* @__PURE__ */ e("span", { className: "inline-block cursor-not-allowed align-middle", children: f }) });
  }
  return null;
}, Qh = vp;
function Gc(t) {
  const { dictAdapter: r } = At(), [a, n] = $([]), [s, o] = $(!1);
  return ge(() => {
    if (!r || !t) {
      n([]);
      return;
    }
    let d = !0;
    const c = r(t);
    return c instanceof Promise ? (o(!0), c.then((u) => {
      d && n(u);
    }).finally(() => {
      d && o(!1);
    })) : n(c), () => {
      d = !1;
    };
  }, [r, t]), { options: a, loading: s };
}
const eg = ({
  dictCode: t,
  dictKey: r,
  prependOptions: a = [],
  appendOptions: n = [],
  placeholder: s = "请选择",
  disabled: o,
  ...d
}) => {
  const c = t ?? r ?? "", { options: u, loading: l } = Gc(c), b = se(
    () => [...a, ...u, ...n],
    [a, u, n]
  );
  return /* @__PURE__ */ e(
    ur,
    {
      options: b,
      placeholder: l && b.length === 0 ? "字典加载中..." : s,
      disabled: o || l && b.length === 0,
      ...d
    }
  );
}, tg = ({
  dictCode: t,
  dictKey: r,
  value: a,
  dot: n = !0,
  size: s,
  motion: o,
  emptyText: d = "-",
  fallbackTone: c = "neutral",
  className: u
}) => {
  const l = t ?? r ?? "", { options: b } = Gc(l);
  if (a == null || a === "")
    return /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: d });
  const m = b.find((h) => String(h.value) === String(a));
  return /* @__PURE__ */ e(
    pa,
    {
      tone: (m == null ? void 0 : m.tone) ?? c,
      dot: n,
      size: s,
      motion: o,
      className: u,
      children: (m == null ? void 0 : m.label) ?? String(a)
    }
  );
}, Fi = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
}, xp = ({
  mode: t = "split",
  sections: r,
  className: a
}) => t === "grid" ? /* @__PURE__ */ e("div", { className: g("space-y-4", a), children: r.map((n) => /* @__PURE__ */ e(Xn, { title: n.title, subtitle: n.description, children: /* @__PURE__ */ e("div", { className: g("grid gap-4", Fi[n.columns ?? 2]), children: n.children }) }, n.key)) }) : /* @__PURE__ */ e("div", { className: g("space-y-6", a), children: r.map((n, s) => /* @__PURE__ */ i(
  "div",
  {
    className: g(
      "grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8",
      s > 0 && "border-t border-[var(--abc-border)] pt-6"
    ),
    children: [
      /* @__PURE__ */ i("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: n.title }),
        n.description && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-relaxed text-[var(--abc-fg-muted)]", children: n.description })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e(Xn, { children: /* @__PURE__ */ e("div", { className: g("grid gap-4", Fi[n.columns ?? 1]), children: n.children }) }) })
    ]
  },
  n.key
)) });
function Rr(t) {
  if (!t || typeof t != "object" || !("code" in t)) return !1;
  const r = t.code;
  return r == null ? !1 : r !== 200 && r !== 0 && r !== "200" && r !== "0";
}
function oo(t, r) {
  const a = (t == null ? void 0 : t.data) ?? t, n = Array.isArray(a == null ? void 0 : a.records) ? a.records : Array.isArray(a == null ? void 0 : a.list) ? a.list : Array.isArray(t == null ? void 0 : t.list) ? t.list : Array.isArray(t == null ? void 0 : t.records) ? t.records : Array.isArray(a) ? a : [], s = r ? n.map(r) : n, o = typeof (a == null ? void 0 : a.total) == "number" ? a.total : typeof (t == null ? void 0 : t.total) == "number" ? t.total : n.length;
  return { list: s, total: o, raw: t };
}
function Wi(t) {
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
function bs(t, r) {
  const a = typeof t == "function" ? { list: t, ...r } : t;
  return {
    list: async (n) => {
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, u = s ?? o, l = a.defaultParams || a.params;
      let b = {
        ...u !== void 0 ? { pageNo: u, pageNum: u } : {},
        ...d !== void 0 ? { pageSize: d } : {},
        ...l,
        ...c
      };
      (u !== void 0 && !("pageNum" in (n || {})) || u !== void 0) && delete b.pageNum, a.transformQuery && (b = a.transformQuery(b)), b = Wi(b);
      const m = await a.list(b);
      if (Rr(m))
        return m;
      const h = oo(m, a.transformRecord);
      return {
        ...m && typeof m == "object" && !Array.isArray(m) ? m : {},
        list: h.list,
        total: h.total
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
      const { pageNum: s, page: o, pageSize: d, ...c } = n || {}, u = a.defaultParams || a.params, l = Wi({
        ...u,
        ...c
      }), b = await a.export(l);
      if (typeof window > "u" || typeof document > "u")
        return b;
      const m = b instanceof Blob ? b : new Blob([b], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }), h = window.URL.createObjectURL(m), f = document.createElement("a"), p = /* @__PURE__ */ new Date(), x = (k) => String(k).padStart(2, "0"), w = `${p.getFullYear()}${x(p.getMonth() + 1)}${x(p.getDate())}_${x(
        p.getHours()
      )}${x(p.getMinutes())}${x(p.getSeconds())}`;
      return f.href = h, f.download = `${a.exportFileName || "数据导出"}_${w}.xlsx`, document.body.appendChild(f), f.click(), f.remove(), window.URL.revokeObjectURL(h), b;
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
const rg = bs;
function yp(t, r = []) {
  const a = ce(t);
  return a.current = t, se(() => bs(a.current), [r]);
}
const ag = yp;
function wp(t, r = []) {
  const [a, n] = $(0), s = ce(null), [o, d] = $([]), c = ue(() => d([]), []), u = ce(t);
  u.current = t;
  const l = ue(() => {
    s.current ? s.current(!1) : n((f) => f + 1);
  }, []), b = ue(() => {
    d([]), s.current ? s.current(!0) : n((f) => f + 1);
  }, []), m = se(() => bs(u.current), [a, ...r]);
  return {
    tableProps: se(
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
    reload: b,
    refreshKey: a,
    selectedRowKeys: o,
    setSelectedRowKeys: d,
    clearSelection: c
  };
}
const ng = wp;
function Yc(t, r) {
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
const sg = Yc;
function Oa(t) {
  return String(t.key ?? t.name ?? "");
}
function Np({
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
  const u = ce({ ...t ?? {} }), l = ce({}), b = ce(!1), [, m] = $(0), h = ce(/* @__PURE__ */ new Set()), f = ue((S) => {
    var T;
    m((_) => _ + 1);
    const y = { ...u.current };
    (T = c.current) == null || T.call(c, y, S), h.current.forEach((_) => _(y, { name: S }));
  }, []), p = ue((S) => S === void 0 ? { ...u.current } : S.includes(".") ? us(u.current, S) : u.current[S], []), x = ue(
    (S, y) => {
      if (u.current = {
        ...u.current,
        [S]: y
      }, b.current = !0, l.current[S]) {
        const T = { ...l.current };
        delete T[S], l.current = T;
      }
      f(S);
    },
    [f]
  ), w = ue((S) => typeof S == "function" ? (h.current.add(S), {
    unsubscribe: () => {
      h.current.delete(S);
    }
  }) : S === void 0 ? { ...u.current } : Array.isArray(S) ? S.map((y) => u.current[y]) : u.current[S], []), k = ue((S) => {
    u.current = {
      ...s.current ?? {},
      ...S ?? {}
    }, l.current = {}, b.current = !1, m((y) => y + 1);
  }, []), v = ue((S, y) => {
    l.current = {
      ...l.current,
      [S]: y
    }, m((T) => T + 1);
  }, []), C = ue((S) => {
    if (!S)
      l.current = {};
    else if (Array.isArray(S)) {
      const y = { ...l.current };
      S.forEach((T) => delete y[T]), l.current = y;
    } else {
      const y = { ...l.current };
      delete y[S], l.current = y;
    }
    m((y) => y + 1);
  }, []), L = ue(() => {
    var R, A;
    const S = { ...u.current }, y = {};
    for (const z of o.current) {
      const K = Oa(z);
      if (!K) continue;
      const E = S[K], I = E == null || typeof E == "string" && E.trim() === "" || Array.isArray(E) && E.length === 0;
      if (z.required && I) {
        y[K] = { type: "required", message: `请填写${z.label}` };
        continue;
      }
      if (z.validator) {
        const P = z.validator(E, S);
        P && (y[K] = { type: "validate", message: P });
      }
    }
    let T = S;
    const _ = d.current;
    if (_ && typeof _.safeParse == "function") {
      const z = _.safeParse(S);
      if (z.success)
        z.data && typeof z.data == "object" && (T = { ...S, ...z.data });
      else {
        const K = ((R = z.error) == null ? void 0 : R.issues) ?? ((A = z.error) == null ? void 0 : A.errors) ?? [];
        for (const E of K) {
          const I = Array.isArray(E.path) && E.path.length > 0 ? String(E.path[0]) : "";
          I && !y[I] && (y[I] = {
            type: "schema",
            message: E.message || "字段格式不正确"
          });
        }
      }
    }
    return l.current = y, m((z) => z + 1), {
      valid: Object.keys(y).length === 0,
      data: T
    };
  }, []), D = ue(async () => L().valid, [L]), j = ue(
    (S) => async (y) => {
      var R;
      (R = y == null ? void 0 : y.preventDefault) == null || R.call(y);
      const { valid: T, data: _ } = L();
      T && await S(_);
    },
    [L]
  );
  return {
    getValues: p,
    setValue: x,
    watch: w,
    reset: k,
    setError: v,
    clearErrors: C,
    trigger: D,
    handleSubmit: j,
    formState: {
      errors: l.current,
      isDirty: b.current
    }
  };
}
function kp(t) {
  return new Promise((r, a) => {
    const n = new FileReader();
    n.onload = () => r(String(n.result || "")), n.onerror = () => a(new Error("文件读取失败")), n.readAsDataURL(t);
  });
}
const qc = ({
  value: t,
  disabled: r = !1,
  maxCount: a = 9,
  customUpload: n,
  onChange: s
}) => {
  const { uploadAdapter: o, toast: d } = At(), [c, u] = $(!1), l = se(() => Array.isArray(t) ? t.filter(Boolean) : String(t || "").split(",").map((h) => h.trim()).filter(Boolean), [t]), b = async (h) => {
    const f = h.target.files;
    if (!f || f.length === 0 || r || c) return;
    const p = [...l];
    u(!0);
    try {
      for (let x = 0; x < f.length; x++) {
        if (p.length >= a) {
          d.error(`最多支持上传 ${a} 张图片`);
          break;
        }
        const w = f[x];
        let k = "";
        if (n) {
          const v = await n(w);
          k = typeof v == "string" ? v : (v == null ? void 0 : v.url) || "";
        } else o ? k = await o(w) : k = await kp(w);
        k && p.push(k);
      }
      s(p.join(","));
    } catch (x) {
      d.error((x == null ? void 0 : x.message) || "上传图片失败");
    } finally {
      u(!1), h.target.value = "";
    }
  }, m = (h) => {
    if (r) return;
    const f = l.filter((p, x) => x !== h);
    s(f.join(","));
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-wrap gap-3", children: [
    l.map((h, f) => /* @__PURE__ */ i(
      "div",
      {
        className: "group relative h-24 w-24 overflow-hidden rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]",
        children: [
          /* @__PURE__ */ e(xn, { src: h, width: 96, height: 96, className: "h-full w-full object-cover" }),
          !r && /* @__PURE__ */ e(
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
      `${h}-${f}`
    )),
    l.length < a && !r && /* @__PURE__ */ i("label", { className: "flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-[var(--abc-radius-lg)] border-2 border-dashed border-[var(--abc-border-strong)] bg-[var(--abc-bg-muted)]/40 text-[var(--abc-fg-muted)] transition-colors hover:border-[var(--abc-primary)] hover:text-[var(--abc-primary)]", children: [
      c ? /* @__PURE__ */ e(br, { className: "h-5 w-5 animate-spin text-[var(--abc-primary)]" }) : /* @__PURE__ */ e(ns, { className: "h-5 w-5" }),
      /* @__PURE__ */ e("span", { className: "text-[11px]", children: c ? "上传中..." : `上传(${l.length}/${a})` }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "file",
          accept: "image/*",
          multiple: !0,
          className: "hidden",
          disabled: c,
          onChange: b
        }
      )
    ] })
  ] });
}, og = qc, Sp = ({
  value: t,
  disabled: r = !1,
  placeholder: a,
  presetIcons: n,
  onChange: s
}) => {
  const [o, d] = $(!1);
  return !n || n.length === 0 ? /* @__PURE__ */ e(
    yi,
    {
      value: t,
      disabled: r,
      placeholder: a,
      onChange: s
    }
  ) : /* @__PURE__ */ i("div", { className: "space-y-2", children: [
    /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(jr, { name: t || "Sparkles", size: 16 }) }),
      /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
        pt,
        {
          placeholder: a || "输入或从右侧选择图标",
          disabled: r,
          value: t || "",
          onChange: (c) => s(c.target.value)
        }
      ) }),
      /* @__PURE__ */ e(
        Ee,
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
          className: g(
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
      yi,
      {
        open: o,
        current: t,
        onClose: () => d(!1),
        onSelect: s
      }
    )
  ] });
};
function Cp({
  field: t,
  form: r,
  isEdit: a,
  editingRecord: n
}) {
  const s = Oa(t);
  if ((typeof t.hidden == "function" ? t.hidden(a, r) : !!t.hidden) || t.formGroup === "hidden") return null;
  if (t.type === "custom" && t.render)
    return /* @__PURE__ */ e(tt, { children: t.render(r, a) });
  const d = typeof t.disabled == "function" ? t.__fromFieldSchema ? t.disabled(n) : t.disabled(a, r) : !!t.disabled, c = r.getValues(s), u = (l) => {
    var b;
    r.setValue(s, l), (b = t.onChange) == null || b.call(t, l, r);
  };
  switch (t.type) {
    case "number":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        cs,
        {
          disabled: d,
          min: t.min,
          max: t.max,
          step: t.step,
          value: c ?? null,
          placeholder: t.placeholder,
          onChange: u
        }
      ) : /* @__PURE__ */ e(
        pt,
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
            const b = l.target.value, m = b === "" ? "" : /^-?\d*\.\d*0$/.test(b) || b === "-" || Number.isNaN(Number(b)) ? b : Number(b);
            u(m);
          }
        }
      );
    case "password":
      return /* @__PURE__ */ e(
        pt,
        {
          type: "password",
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (l) => u(l.target.value)
        }
      );
    case "textarea":
      return /* @__PURE__ */ e(
        mn,
        {
          rows: t.rows || 3,
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder || `请输入${t.label}`,
          onChange: (l) => u(l.target.value)
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
            className: g(
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
                  onChange: (h) => {
                    if (t.type === "radio") {
                      u(m.value);
                      return;
                    }
                    const f = Array.isArray(c) ? [...c] : [], p = h.target.checked ? [...f, m.value] : f.filter((x) => String(x) !== String(m.value));
                    u(p);
                  }
                }
              ),
              /* @__PURE__ */ e("span", { children: m.label })
            ]
          },
          String(m.value)
        )) });
      const b = l.map((m) => ({
        label: m.label,
        value: typeof m.value == "boolean" ? String(m.value) : m.value,
        disabled: m.disabled
      }));
      return /* @__PURE__ */ e(
        ur,
        {
          value: c ?? (t.multiple ? [] : ""),
          disabled: d,
          searchable: t.searchable ?? !0,
          multiple: t.multiple,
          options: b,
          placeholder: t.placeholder || `请选择${t.label}`,
          allowClear: t.clearable !== !1,
          onChange: (m) => {
            const h = m && typeof m == "object" && "target" in m ? m.target.value : m;
            u(h);
          }
        }
      );
    }
    case "treeSelect": {
      const l = typeof t.treeData == "function" ? t.treeData(r, a) : t.treeData ?? [], b = !!(t.multiple || t.treeCheckable);
      return /* @__PURE__ */ e(
        hn,
        {
          "aria-label": t.label,
          value: c ?? (b ? [] : ""),
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
          onChange: (m) => u(m)
        }
      );
    }
    case "switch":
      return /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-2 py-1", children: [
        /* @__PURE__ */ e(
          cr,
          {
            disabled: d,
            checked: !!c,
            onChange: (l) => u(l)
          }
        ),
        (t.checkedChildren || t.unCheckedChildren) && /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-secondary)]", children: c ? t.checkedChildren : t.unCheckedChildren })
      ] });
    case "date":
      return t.__fromFieldSchema ? /* @__PURE__ */ e(
        gn,
        {
          disabled: d,
          value: c ?? "",
          placeholder: t.placeholder,
          onChange: u
        }
      ) : /* @__PURE__ */ e(
        pt,
        {
          type: "date",
          disabled: d,
          value: c ?? "",
          onChange: (l) => u(l.target.value)
        }
      );
    case "datetime":
    case "datetimePicker":
      return /* @__PURE__ */ e(
        pt,
        {
          type: "datetime-local",
          disabled: d,
          value: c ? String(c).replace(" ", "T").slice(0, 16) : "",
          onChange: (l) => {
            const b = l.target.value;
            u(b ? `${b.replace("T", " ")}:00` : "");
          }
        }
      );
    case "dateRange": {
      if (t.__fromFieldSchema)
        return /* @__PURE__ */ e(
          vn,
          {
            disabled: d,
            value: c ?? null,
            onChange: u
          }
        );
      const l = Array.isArray(c) ? c : ["", ""];
      return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          pt,
          {
            type: "date",
            disabled: d,
            value: l[0] || "",
            onChange: (b) => u([b.target.value, l[1] || ""])
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-xs text-[var(--abc-fg-muted)]", children: "至" }),
        /* @__PURE__ */ e(
          pt,
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
      return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            disabled: d,
            value: c || "#2563eb",
            onChange: (l) => u(l.target.value),
            className: "h-8.5 w-11 shrink-0 cursor-pointer rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-0.5"
          }
        ),
        /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
          pt,
          {
            type: "text",
            disabled: d,
            value: c ?? "",
            placeholder: t.placeholder || "#2563eb",
            onChange: (l) => u(l.target.value)
          }
        ) })
      ] });
    case "icon":
      return /* @__PURE__ */ e(
        Sp,
        {
          value: c ? String(c) : "",
          disabled: d,
          placeholder: t.placeholder,
          presetIcons: t.presetIcons,
          onChange: u
        }
      );
    case "tags":
      return /* @__PURE__ */ e(
        df,
        {
          disabled: d,
          value: Array.isArray(c) ? c : [],
          placeholder: t.placeholder,
          onChange: u
        }
      );
    case "image": {
      const l = t.customUpload ? async (b) => {
        const m = await t.customUpload(b);
        return typeof m == "string" ? m : (m == null ? void 0 : m.url) || "";
      } : void 0;
      return t.multiple ? /* @__PURE__ */ e(
        qc,
        {
          value: c ?? "",
          disabled: d,
          maxCount: t.maxCount,
          customUpload: t.customUpload,
          onChange: u
        }
      ) : /* @__PURE__ */ e(
        Ec,
        {
          value: c ? String(c) : "",
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
        pt,
        {
          type: "text",
          disabled: d,
          maxLength: t.maxLength,
          value: c ?? "",
          placeholder: t.placeholder ?? (t.__fromFieldSchema ? void 0 : `请输入${t.label}`),
          clearable: t.__fromFieldSchema ? void 0 : t.clearable !== !1,
          onChange: (l) => u(l.target.value)
        }
      );
  }
}
function Xc({
  layout: t = "grid",
  columnsCount: r = 2,
  fields: a,
  isEdit: n,
  form: s,
  errors: o = {},
  formSchema: d,
  columns: c = [],
  isFieldRequired: u = Yc,
  renderFormField: l
}) {
  const b = (h) => h.formGroup === "hidden" ? !0 : typeof h.hidden == "function" && s ? !!h.hidden(n, s) : !!h.hidden, m = (h) => {
    const f = Oa(h), p = !!(h.required || u(d, f)), x = o[f], w = typeof x == "string" ? x : x == null ? void 0 : x.message, k = c.find((C) => {
      const L = Array.isArray(C.dataIndex) ? C.dataIndex[0] : C.dataIndex ?? C.key;
      return String(L) === f;
    }), v = h.tooltip ?? (k == null ? void 0 : k.tooltip);
    return /* @__PURE__ */ e(
      Ao,
      {
        label: h.label,
        required: p,
        tooltip: v,
        helperText: h.helperText,
        error: w,
        children: l(h)
      },
      f
    );
  };
  if (t === "split") {
    const h = a.filter((v) => !b(v)), f = h.filter((v) => v.formGroup === "top"), p = h.filter((v) => {
      const C = v.formGroup || "left";
      return C === "left" || C === "full";
    }), x = h.filter((v) => v.formGroup === "right"), w = h.filter((v) => v.formGroup === "bottom"), k = h.filter((v) => v.formGroup === "extra");
    return /* @__PURE__ */ i("div", { className: "space-y-4", children: [
      f.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: f.map((v) => m(v)) }),
      /* @__PURE__ */ i(
        "div",
        {
          className: g(
            "grid grid-cols-1 gap-5",
            x.length > 0 && "md:grid-cols-2"
          ),
          children: [
            /* @__PURE__ */ e("div", { className: "space-y-3.5", children: p.map((v) => m(v)) }),
            x.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: x.map((v) => m(v)) })
          ]
        }
      ),
      w.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-3.5", children: w.map((v) => m(v)) }),
      k.length > 0 && /* @__PURE__ */ e("div", { className: "mt-4 space-y-3.5 border-t border-[var(--abc-border)] pt-4", children: k.map((v) => m(v)) })
    ] });
  }
  return /* @__PURE__ */ e(
    "div",
    {
      className: g(
        "grid gap-3.5",
        r === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
      ),
      children: a.map((h) => {
        if (b(h)) return null;
        const f = Oa(h), p = r === 2 && (h.span === 2 || h.formGroup === "full" || h.__fromFieldSchema && h.type === "textarea");
        return /* @__PURE__ */ e("div", { className: p ? "col-span-1 sm:col-span-2" : "col-span-1", children: m(h) }, f);
      })
    }
  );
}
const ig = Xc;
function _p({
  open: t,
  onClose: r,
  isEdit: a,
  currentRecord: n,
  container: s = "dialog",
  dialogTitle: o,
  dialogSize: d,
  formLayout: c = "grid",
  formColumns: u = 2,
  formFields: l,
  form: b,
  formSchema: m,
  columns: h,
  formSubmitting: f,
  formDetailLoading: p,
  formError: x,
  onSubmit: w,
  draftEnabled: k = !1,
  showDraftButton: v = !1,
  showDraftBanner: C = !1,
  draftBannerMode: L = "prompt",
  onSaveDraft: D,
  onRestoreDraft: j,
  onDiscardDraft: S,
  submitButtonText: y = "保存",
  renderFormExtra: T,
  renderCustomForm: _,
  onSuccessFetch: R
}) {
  if (_)
    return /* @__PURE__ */ e(tt, { children: _({
      open: t,
      onClose: r,
      record: n,
      isEdit: a,
      onSuccess: () => {
        r(), R == null || R();
      }
    }) });
  const A = a ? (o == null ? void 0 : o.edit) || "编辑" : (o == null ? void 0 : o.add) || "新增", z = d ?? (u === 2 ? "lg" : "md"), K = /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2.5", children: [
    k && v && D && /* @__PURE__ */ e(Ee, { variant: "secondary", size: "sm", type: "button", onClick: D, children: "保存草稿" }),
    !a && C && L === "auto-restored" && S && /* @__PURE__ */ e(Ee, { variant: "ghost", size: "sm", type: "button", onClick: S, children: "清空草稿" }),
    /* @__PURE__ */ e(Ee, { variant: "secondary", size: "sm", type: "button", onClick: r, disabled: f, children: "取消" }),
    /* @__PURE__ */ e(Ee, { variant: "primary", size: "sm", type: "button", loading: f, onClick: w, children: y })
  ] }), E = /* @__PURE__ */ i("form", { onSubmit: w, className: "space-y-3.5 py-1", children: [
    p && /* @__PURE__ */ i("div", { className: "flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
      /* @__PURE__ */ e(br, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
      /* @__PURE__ */ e("span", { children: "正在同步最新完整数据..." })
    ] }),
    x && /* @__PURE__ */ e("div", { className: "rounded-[var(--abc-radius-md)] border border-[var(--abc-danger)]/30 bg-[var(--abc-danger-soft)] px-3 py-2 text-xs text-[var(--abc-danger)]", children: x }),
    C && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-3 rounded-[var(--abc-radius-md)] border border-[var(--abc-warning)]/30 bg-[var(--abc-warning-soft)] px-3 py-2 text-xs text-[var(--abc-fg)]", children: [
      /* @__PURE__ */ e("span", { children: L === "auto-restored" ? "已自动为您恢复上次未提交的本地表单草稿" : "检测到未提交的草稿" }),
      /* @__PURE__ */ i("span", { className: "inline-flex shrink-0 items-center gap-2.5", children: [
        L === "prompt" && j && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: j,
            className: "font-medium text-[var(--abc-primary)] hover:underline cursor-pointer",
            children: "恢复"
          }
        ),
        S && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: S,
            className: "font-medium text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)] hover:underline cursor-pointer",
            children: L === "auto-restored" ? "丢弃草稿" : "丢弃"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      Xc,
      {
        layout: c,
        columnsCount: u,
        fields: l,
        isEdit: a,
        form: b,
        errors: b.formState.errors,
        formSchema: m,
        columns: h,
        renderFormField: (I) => /* @__PURE__ */ e(
          Cp,
          {
            field: I,
            form: b,
            isEdit: a,
            editingRecord: n
          }
        )
      }
    ),
    T == null ? void 0 : T(b, a)
  ] });
  if (s === "drawer") {
    const P = ["xs", "sm", "md", "lg", "xl", "2xl"].includes(z) ? z : "lg";
    return /* @__PURE__ */ e(
      yn,
      {
        open: t,
        onClose: r,
        title: A,
        size: P,
        footer: K,
        children: E
      }
    );
  }
  return /* @__PURE__ */ e(
    yr,
    {
      open: t,
      onClose: r,
      title: A,
      size: z,
      footer: K,
      children: E
    }
  );
}
function Ip({
  open: t,
  onClose: r,
  record: a,
  columns: n,
  viewTitle: s = "详情",
  viewSize: o = "lg",
  viewLoading: d = !1,
  canEdit: c = !1,
  onEditRecord: u,
  renderViewExtra: l,
  renderViewFooter: b
}) {
  const m = typeof s == "function" ? a ? s(a) : "详情" : s;
  return /* @__PURE__ */ i(
    yr,
    {
      open: t,
      onClose: r,
      title: m,
      size: o,
      footer: b && a ? b(a, r) : /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-2", children: [
        a && c && u && /* @__PURE__ */ e(
          Ee,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => {
              const h = a;
              r(), u(h);
            },
            children: "编辑此记录"
          }
        ),
        /* @__PURE__ */ e(Ee, { variant: "primary", size: "sm", onClick: r, children: "关闭" })
      ] }),
      children: [
        d && /* @__PURE__ */ i("div", { className: "mb-3 flex items-center gap-2 rounded-[var(--abc-radius-md)] bg-[var(--abc-primary-soft)]/70 px-3 py-2 text-xs text-[var(--abc-primary)]", children: [
          /* @__PURE__ */ e(br, { className: "h-3.5 w-3.5 shrink-0 animate-spin" }),
          /* @__PURE__ */ e("span", { children: "正在更新详细数据..." })
        ] }),
        a && /* @__PURE__ */ i("div", { className: "space-y-4 py-1", children: [
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-3 text-xs md:grid-cols-2", children: n.map((h) => {
            if (h.view === !1 || h.key === "actions" || h.key === "__actions__" || h.key === "__abc_actions__" || h.key === "__drag_handle__")
              return null;
            const f = us(a, h.dataIndex ?? h.key), p = typeof h.type == "object" ? h.type : void 0, x = typeof h.search == "object" && h.search !== null && Array.isArray(h.search.options) ? h.search.options.filter((v) => v.value !== "") : void 0, w = !h.options && !(p != null && p.options) && x ? { ...h, options: x, __autoOptionsFromSearch: !0 } : h;
            let k;
            return h.viewRender ? k = h.viewRender(f, a) : h.render ? k = h.render(f, a, 0) : (h.type === "image" || (p == null ? void 0 : p.type) === "image" || h.valueType === "image") && f ? k = /* @__PURE__ */ e(xn, { src: String(f), width: 56, height: 56 }) : k = Wc(f, a, w), /* @__PURE__ */ i(
              "div",
              {
                className: g(
                  "flex flex-col gap-1 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/55 p-3",
                  h.viewSpan === 2 && "md:col-span-2"
                ),
                children: [
                  /* @__PURE__ */ e("span", { className: "font-semibold text-[var(--abc-fg-muted)]", children: h.title }),
                  /* @__PURE__ */ e("div", { className: "font-medium break-all text-[var(--abc-fg)]", children: k })
                ]
              },
              h.key
            );
          }) }),
          l == null ? void 0 : l(a)
        ] })
      ]
    }
  );
}
function cg({
  groups: t,
  initialValues: r,
  layoutMode: a = "split",
  onSubmit: n,
  submitText: s = "保存配置"
}) {
  const { toast: o } = At(), [d, c] = $(r), [u, l] = $(!1), [b, m] = $({});
  ge(() => {
    c(r);
  }, [r]);
  const h = (p, x) => {
    c((w) => ({ ...w, [p]: x })), b[p] && m((w) => {
      const k = { ...w };
      return delete k[p], k;
    });
  };
  return /* @__PURE__ */ i("form", { onSubmit: async (p) => {
    p.preventDefault();
    const x = {};
    for (const w of t)
      for (const k of w.fields)
        if (k.required) {
          const v = d[k.name];
          (v == null || String(v).trim() === "") && (x[k.name] = `请填写${k.label}`);
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
      xp,
      {
        mode: a,
        sections: t.map((p) => ({
          key: p.key,
          title: p.title,
          description: p.description,
          columns: p.columns ?? 1,
          children: p.fields.map((x) => {
            const w = d[x.name], k = b[x.name], v = x.type ?? "text";
            return /* @__PURE__ */ e(
              Ao,
              {
                label: x.label,
                required: x.required,
                helperText: x.helperText,
                error: k,
                children: v === "switch" ? /* @__PURE__ */ e(
                  cr,
                  {
                    checked: !!w,
                    onChange: (C) => h(x.name, C)
                  }
                ) : v === "number" ? /* @__PURE__ */ e(
                  cs,
                  {
                    value: w ?? null,
                    placeholder: x.placeholder,
                    invalid: !!k,
                    onChange: (C) => h(x.name, C)
                  }
                ) : v === "textarea" ? /* @__PURE__ */ e(
                  mn,
                  {
                    value: w ?? "",
                    placeholder: x.placeholder,
                    invalid: !!k,
                    onChange: (C) => h(x.name, C.target.value)
                  }
                ) : v === "select" ? /* @__PURE__ */ e(
                  ur,
                  {
                    options: x.options ?? [],
                    value: w ?? "",
                    placeholder: x.placeholder,
                    invalid: !!k,
                    onChange: (C) => h(x.name, C)
                  }
                ) : v === "treeSelect" ? /* @__PURE__ */ e(
                  hn,
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
                    invalid: !!k,
                    onChange: (C) => h(x.name, C)
                  }
                ) : v === "image" ? x.allowDirectUrlInput !== !1 ? /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ e(
                    xn,
                    {
                      src: String(w ?? ""),
                      alt: x.label,
                      width: 42,
                      height: 42
                    }
                  ),
                  /* @__PURE__ */ e(
                    pt,
                    {
                      allowClear: !0,
                      value: w ?? "",
                      placeholder: x.placeholder ?? "输入图片 https:// 直链或粘贴 <svg>...</svg> 代码",
                      onChange: (C) => h(x.name, C.target.value)
                    }
                  )
                ] }) : /* @__PURE__ */ e(
                  Ec,
                  {
                    value: String(w ?? ""),
                    onChange: (C) => h(x.name, C)
                  }
                ) : /* @__PURE__ */ e(
                  pt,
                  {
                    type: v === "password" ? "password" : "text",
                    allowClear: !0,
                    value: w ?? "",
                    placeholder: x.placeholder,
                    invalid: !!k,
                    onChange: (C) => h(x.name, C.target.value)
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
        Ee,
        {
          type: "button",
          variant: "secondary",
          icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
          onClick: () => {
            c(r), m({}), o.info("已还原初始配置值");
          },
          children: "重置更改"
        }
      ),
      /* @__PURE__ */ e(
        Ee,
        {
          type: "submit",
          variant: "primary",
          loading: u,
          icon: /* @__PURE__ */ e(ic, { className: "h-3.5 w-3.5" }),
          children: s
        }
      )
    ] })
  ] });
}
function Tp({
  title: t,
  subTitle: r,
  permission: a,
  hasPermission: n,
  customUpload: s,
  saveButtonText: o = "保存当前配置",
  defaultValues: d,
  fetchConfig: c,
  saveConfig: u,
  transformBeforeSave: l,
  tabs: b
}) {
  var H;
  const { toast: m, uploadAdapter: h } = At(), { hasPermission: f } = Ro(), [p, x] = $(((H = b[0]) == null ? void 0 : H.key) || ""), [w, k] = $(!1), [v, C] = $(!1), [L, D] = $(!1), [j, S] = $(null), [y, T] = $(d), _ = ce(null);
  ge(() => () => {
    _.current !== null && typeof window < "u" && window.clearTimeout(_.current);
  }, []);
  const R = ue(async () => {
    k(!0);
    try {
      const O = await c();
      if (Rr(O) && !(O != null && O.data)) {
        m.error((O == null ? void 0 : O.msg) || "获取配置数据失败");
        return;
      }
      const G = O != null && O.data && typeof O.data == "object" ? O.data : O;
      G && typeof G == "object" && T((Y) => ({ ...Y, ...G }));
    } catch {
      m.error("获取配置数据失败");
    } finally {
      k(!1);
    }
  }, [c, m]);
  ge(() => {
    R();
  }, [R]);
  const A = ue((O, G) => {
    T((Y) => ({ ...Y, [O]: G }));
  }, []), z = async () => {
    C(!0);
    try {
      const O = l ? l(y) : y, G = await u(O);
      if (Rr(G)) {
        m.error((G == null ? void 0 : G.msg) || "保存配置失败");
        return;
      }
      D(!0), m.success("配置保存成功"), typeof window < "u" && (_.current !== null && window.clearTimeout(_.current), _.current = window.setTimeout(() => {
        D(!1), _.current = null;
      }, 3e3));
    } catch {
      m.error("保存配置失败");
    } finally {
      C(!1);
    }
  }, K = b.find((O) => O.key === p) || b[0], E = a ? n ? n(a) : f(a) : !0, I = async (O, G) => {
    S(O);
    try {
      let Y;
      if (s) {
        const ie = await s(G);
        Y = typeof ie == "string" ? ie : ie == null ? void 0 : ie.url;
      } else h && (Y = await h(G));
      Y && A(O, Y);
    } catch (Y) {
      m.error((Y == null ? void 0 : Y.message) || "图片上传失败");
    } finally {
      S(null);
    }
  }, P = (O) => {
    const G = y[O.key], Y = O.type || "input";
    if (Y === "custom" && O.render)
      return O.render(y, A, T);
    switch (Y) {
      case "switch":
        return /* @__PURE__ */ e(
          cr,
          {
            checked: !!G,
            onChange: (ie) => A(O.key, ie)
          }
        );
      case "radio":
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-4 pt-0.5", children: (O.options || []).map((ie) => {
          const V = typeof ie.value == "number" ? Number(G) === ie.value : String(G ?? "") === String(ie.value);
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
                    checked: V,
                    onChange: () => A(O.key, ie.value)
                  }
                ),
                ie.label
              ]
            },
            String(ie.value)
          );
        }) });
      case "checkbox-csv": {
        const ie = new Set(
          String(G || "").split(",").filter(Boolean)
        );
        return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 pt-0.5 text-xs text-[var(--abc-fg-secondary)]", children: (O.options || []).map((V) => {
          const re = String(V.value), te = ie.has(re), le = !!V.locked;
          return /* @__PURE__ */ i(
            "label",
            {
              className: g(
                "flex items-center gap-1.5",
                le ? "cursor-not-allowed opacity-75" : "cursor-pointer"
              ),
              children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "checkbox",
                    disabled: le,
                    checked: te || le,
                    onChange: () => {
                      if (le) return;
                      const oe = new Set(ie);
                      oe.has(re) ? oe.delete(re) : oe.add(re), A(O.key, Array.from(oe).join(","));
                    }
                  }
                ),
                /* @__PURE__ */ e("span", { children: V.label })
              ]
            },
            re
          );
        }) });
      }
      case "select":
        return /* @__PURE__ */ e(
          ur,
          {
            value: G ?? "",
            options: O.options || [],
            onChange: (ie) => {
              const V = ie && typeof ie == "object" && "target" in ie ? ie.target.value : ie;
              A(O.key, V);
            }
          }
        );
      case "textarea":
        return /* @__PURE__ */ e(
          mn,
          {
            rows: O.rows || 4,
            value: G || "",
            onChange: (ie) => A(O.key, ie.target.value),
            placeholder: O.placeholder,
            className: O.className
          }
        );
      case "image-url": {
        const ie = O.previewShape === "circle", V = !!(O.allowUpload && (s || h));
        return /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e(
            xn,
            {
              src: G ? String(G) : void 0,
              alt: O.label,
              width: ie ? 44 : 40,
              height: ie ? 44 : 40,
              rounded: ie,
              className: g(
                "shrink-0 overflow-hidden border border-[var(--abc-border)] shadow-2xs",
                ie ? "rounded-full" : "rounded-[var(--abc-radius-lg)]"
              )
            }
          ),
          /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ e(
            pt,
            {
              value: G || "",
              onChange: (re) => A(O.key, re.target.value),
              placeholder: O.placeholder || "请输入图片完整直链 URL 或 SVG 矢量代码"
            }
          ) }),
          V && /* @__PURE__ */ i("label", { className: "inline-flex shrink-0 cursor-pointer", children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: (re) => {
                  var le;
                  const te = (le = re.target.files) == null ? void 0 : le[0];
                  te && I(O.key, te), re.target.value = "";
                }
              }
            ),
            /* @__PURE__ */ i("span", { className: "inline-flex h-[var(--abc-control-h-sm)] items-center gap-1.5 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-3 text-xs font-medium text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]", children: [
              /* @__PURE__ */ e(ts, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ e("span", { children: j === O.key ? "上传中..." : "上传" })
            ] })
          ] })
        ] });
      }
      case "password":
      case "number":
      case "input":
      default:
        return /* @__PURE__ */ e(
          pt,
          {
            type: Y === "password" ? "password" : Y === "number" ? "number" : "text",
            value: G ?? "",
            onChange: (ie) => A(O.key, ie.target.value),
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
        r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
        L && /* @__PURE__ */ i("span", { className: "flex items-center gap-1.5 text-xs font-semibold text-[var(--abc-success)]", children: [
          /* @__PURE__ */ e(ec, { className: "h-4 w-4" }),
          "配置保存成功"
        ] }),
        /* @__PURE__ */ e(
          Ee,
          {
            variant: "secondary",
            size: "sm",
            onClick: () => void R(),
            disabled: w || v,
            icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
            children: "刷新"
          }
        ),
        E && /* @__PURE__ */ e(
          Ee,
          {
            onClick: () => void z(),
            loading: v,
            icon: /* @__PURE__ */ e(ic, { className: "h-4 w-4" }),
            children: o
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-4", children: [
      /* @__PURE__ */ e("div", { className: "h-fit space-y-1.5 rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 shadow-[var(--abc-shadow-card)] lg:col-span-1", children: b.map((O) => {
        const G = O.icon, Y = (K == null ? void 0 : K.key) === O.key;
        return /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: () => x(O.key),
            className: g(
              "flex w-full cursor-pointer items-center gap-3 rounded-[var(--abc-radius-lg)] px-4 py-3 text-sm font-medium transition-all",
              Y ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)] shadow-2xs" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
            ),
            children: [
              G && /* @__PURE__ */ e(
                G,
                {
                  className: g(
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
        w && /* @__PURE__ */ e("div", { className: "absolute inset-0 z-10 flex items-center justify-center rounded-[var(--abc-radius-xl)] bg-[var(--abc-bg-surface)]/65 backdrop-blur-xs", children: /* @__PURE__ */ e(Lf, {}) }),
        K && /* @__PURE__ */ i("div", { className: "space-y-6", children: [
          /* @__PURE__ */ i("div", { className: "border-b border-[var(--abc-border)] pb-4", children: [
            /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-[var(--abc-fg)]", children: K.sectionTitle }),
            K.sectionDescription && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: K.sectionDescription })
          ] }),
          /* @__PURE__ */ e(
            "div",
            {
              className: g(
                "grid grid-cols-1 gap-4",
                (K.columns ?? 2) === 2 && "sm:grid-cols-2"
              ),
              children: K.fields.map((O) => {
                const G = (K.columns ?? 2) === 1 || O.span === 2;
                return /* @__PURE__ */ i(
                  "div",
                  {
                    className: g(
                      G && (K.columns ?? 2) === 2 && "sm:col-span-2"
                    ),
                    children: [
                      O.label && /* @__PURE__ */ i("div", { className: "mb-1.5 flex items-center gap-1.5", children: [
                        /* @__PURE__ */ e("label", { className: "block text-xs font-medium text-[var(--abc-fg-secondary)]", children: O.label }),
                        O.tooltip && /* @__PURE__ */ e(
                          "span",
                          {
                            title: O.tooltip,
                            className: "cursor-help text-[var(--abc-fg-muted)]",
                            children: /* @__PURE__ */ e($a, { className: "h-3.5 w-3.5" })
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
const lg = Tp, Mp = ve.forwardRef(
  ({
    surface: t = !1,
    hasActiveFilters: r = !1,
    onReset: a,
    resetLabel: n = "重置筛选",
    search: s,
    filters: o,
    trailing: d,
    children: c,
    className: u,
    ...l
  }, b) => /* @__PURE__ */ i(
    "div",
    {
      ref: b,
      "data-slot": "filter-toolbar",
      className: g(
        "flex flex-wrap items-center justify-between gap-2.5",
        t && "rounded-[var(--abc-radius-lg,12px)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3.5 shadow-2xs",
        u
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
            Ee,
            {
              variant: "ghost",
              size: "xs",
              onClick: a,
              className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-fg)]",
              children: [
                /* @__PURE__ */ e(gr, { className: "h-3 w-3 mr-1", "aria-hidden": "true" }),
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
Mp.displayName = "FilterToolbar";
function dg({
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
      className: g("inline-flex flex-wrap items-center gap-1.5", s),
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
            className: g(
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
                  className: g(
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
function ug({
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
      className: g(
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
              className: g(
                "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                a === null ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
              ),
              children: d
            }
          ),
          r.map((u, l) => {
            const b = u.id ?? u.key ?? u.code ?? String(l), m = u.active !== void 0 ? u.active : a === b;
            return /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: () => {
                  u.onSelect ? u.onSelect() : s && s(b);
                },
                className: g(
                  "cursor-pointer rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs transition-colors",
                  m ? "bg-[var(--abc-primary)] font-semibold text-white" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-muted)] hover:text-[var(--abc-fg)]"
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
function bg({
  open: t,
  title: r,
  description: a,
  confirmLabel: n,
  cancelLabel: s = "取消",
  onCancel: o,
  workingLabel: d = "正在处理…",
  reasonLabel: c = "操作原因",
  reasonPlaceholder: u = "请详细填写本次变更的业务原因或工单号",
  reasonHint: l = "需输入 8–512 字符，作为运维审计依据留痕",
  reasonTooLongMessage: b = "操作原因不能超过 512 字符",
  closeLabel: m = "关闭",
  minReasonLength: h = 8,
  maxReasonLength: f = 512,
  destructive: p = !1,
  variant: x,
  pending: w = !1,
  confirmDisabled: k = !1,
  error: v = null,
  maxWidthClass: C = "sm:max-w-lg",
  className: L,
  children: D,
  onOpenChange: j,
  onConfirm: S
}) {
  const [y, T] = ve.useState(""), _ = ve.useId(), R = p || x === "destructive";
  ve.useEffect(() => {
    t || T("");
  }, [t]);
  const A = y.trim(), z = A.length < h, K = A.length > f, E = !w && !k && !z && !K, I = () => {
    E && S(A);
  }, P = (O) => {
    O.key === "Enter" && E && (O.preventDefault(), I());
  }, H = () => {
    o == null || o(), j == null || j(!1);
  };
  return /* @__PURE__ */ e(
    yr,
    {
      open: t,
      closeLabel: m,
      onClose: H,
      onCancel: H,
      onOpenChange: j,
      closeDisabled: !1,
      fullscreenable: !1,
      draggable: !1,
      children: /* @__PURE__ */ i(
        xo,
        {
          "data-slot": "reasoned-action-dialog",
          className: g("w-full max-w-lg", C, L),
          closeLabel: m,
          closeDisabled: !1,
          closable: !0,
          children: [
            /* @__PURE__ */ i(yo, { children: [
              /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                R ? /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(rs, { className: "h-4 w-4", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(uo, { className: "h-4 w-4", "aria-hidden": "true" }) }),
                /* @__PURE__ */ e(No, { className: "text-base font-semibold leading-tight", children: r })
              ] }),
              /* @__PURE__ */ e(ko, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: a })
            ] }),
            D && /* @__PURE__ */ e("div", { className: "py-2 text-xs", children: D }),
            v && /* @__PURE__ */ e(
              va,
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
                    className: g(
                      "font-mono text-[11px] tabular-nums",
                      K ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
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
                pt,
                {
                  id: _,
                  "aria-label": "Reason",
                  value: y,
                  disabled: w,
                  placeholder: u,
                  onChange: (O) => T(O.target.value),
                  onKeyDown: P,
                  className: g(
                    "w-full text-xs",
                    K && "border-red-500 focus-visible:ring-red-500/20"
                  )
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: g(
                    "text-[11px]",
                    K ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: K ? b : l
                }
              )
            ] }),
            /* @__PURE__ */ i(wo, { className: "gap-2 pt-2", children: [
              /* @__PURE__ */ e(
                Ee,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: w,
                  onClick: () => j(!1),
                  children: s
                }
              ),
              /* @__PURE__ */ e(
                Ee,
                {
                  type: "button",
                  variant: R ? "danger" : "primary",
                  size: "sm",
                  disabled: !E,
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
function mg({
  open: t,
  onClose: r,
  title: a,
  description: n,
  confirmLabel: s,
  cancelLabel: o = "Cancel",
  workingLabel: d = "Working…",
  reasonLabel: c = "Reason",
  reasonPlaceholder: u = "Record why this change is required",
  reasonHint: l = "8–512 characters. Stored in the operation audit.",
  reasonTooLongMessage: b = "Shorten the reason to 512 characters or fewer.",
  minReasonLength: m = 8,
  maxReasonLength: h = 512,
  destructive: f = !1,
  pending: p = !1,
  confirmDisabled: x = !1,
  error: w = null,
  width: k = 560,
  cascadeMode: v = "adjacent",
  children: C,
  onConfirm: L
}) {
  const [D, j] = ve.useState(""), S = ve.useId();
  ve.useEffect(() => {
    t || j("");
  }, [t]);
  const y = D.trim(), T = y.length < m, _ = y.length > h, R = !p && !x && !T && !_, A = () => {
    R && L(y);
  };
  return /* @__PURE__ */ i(
    yn,
    {
      open: t,
      onClose: r,
      width: k,
      cascadeMode: v,
      role: "dialog",
      children: [
        /* @__PURE__ */ i(Cf, { children: [
          /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
            f ? /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400", children: /* @__PURE__ */ e(rs, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }) : /* @__PURE__ */ e("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--abc-primary-subtle,#eff6ff)] text-[var(--abc-primary)]", children: /* @__PURE__ */ e(uo, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ e(_f, { className: "text-base font-semibold", children: a })
          ] }),
          n && /* @__PURE__ */ e(If, { className: "pt-1 text-xs text-[var(--abc-fg-secondary)] leading-relaxed", children: n })
        ] }),
        /* @__PURE__ */ i(Tf, { className: "space-y-4", children: [
          w && /* @__PURE__ */ e(
            va,
            {
              variant: "error",
              title: "操作失败",
              message: w,
              className: "text-xs"
            }
          ),
          C,
          /* @__PURE__ */ i("div", { className: "rounded-[var(--abc-radius-md,8px)] border border-[var(--abc-border)] bg-[var(--abc-bg-subtle,#f8fafc)] p-3.5 space-y-2", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ i("label", { htmlFor: S, className: "font-semibold text-[var(--abc-fg)]", children: [
                c,
                " ",
                /* @__PURE__ */ e("span", { className: "text-red-500", children: "*" })
              ] }),
              /* @__PURE__ */ i(
                "span",
                {
                  className: g(
                    "font-mono text-[11px] tabular-nums",
                    _ ? "text-red-600 dark:text-red-400 font-semibold" : "text-[var(--abc-fg-muted)]"
                  ),
                  children: [
                    D.length,
                    "/",
                    h
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e(
              pt,
              {
                id: S,
                "aria-label": "Reason",
                value: D,
                disabled: p,
                placeholder: u,
                onChange: (z) => j(z.target.value),
                className: g(
                  "w-full bg-[var(--abc-bg-surface,#ffffff)] text-xs",
                  _ && "border-red-500 focus-visible:ring-red-500/20"
                )
              }
            ),
            /* @__PURE__ */ e(
              "p",
              {
                className: g(
                  "text-[11px]",
                  _ ? "text-red-600 dark:text-red-400" : "text-[var(--abc-fg-muted)]"
                ),
                children: _ ? b : l
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(Mf, { children: [
          /* @__PURE__ */ e(
            Ee,
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
            Ee,
            {
              type: "button",
              variant: f ? "danger" : "primary",
              size: "sm",
              disabled: !R,
              loading: p,
              onClick: A,
              children: p ? d : s
            }
          )
        ] })
      ]
    }
  );
}
function Vs(t) {
  if (t == null) return "";
  const r = String(t);
  return /[",\r\n]/.test(r) ? `"${r.replace(/"/g, '""')}"` : r;
}
function Ep(t, r) {
  const a = t.filter(
    (o) => !o.hideInTable && o.key !== "__abc_actions__" && o.key !== "__actions__" && o.key !== "__drag_handle__"
  ), n = a.map((o) => Vs(o.title)).join(","), s = r.map(
    (o) => a.map((d) => {
      const c = us(o, d.dataIndex ?? d.key), u = typeof d.type == "object" ? d.type.options : void 0, l = d.options ?? u;
      if (l && l.length > 0) {
        const b = l.find((m) => String(m.value) === String(c));
        if (b) return Vs(b.label);
      }
      return Vs(c);
    }).join(",")
  );
  return `\uFEFF${[n, ...s].join(`\r
`)}`;
}
function Ki(t, r, a) {
  const n = Ep(r, a);
  if (typeof window < "u" && typeof Blob < "u" && typeof URL < "u" && typeof URL.createObjectURL == "function") {
    const s = new Blob([n], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(s), d = document.createElement("a");
    d.href = o, d.download = t.endsWith(".csv") ? t : `${t}.csv`, document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(o);
  }
  return n;
}
function Ap(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : String(t).trim() !== "";
}
const Lp = ({
  title: t,
  filterType: r = "text",
  filterOptions: a,
  treeData: n,
  multiple: s = !1,
  searchable: o = !1,
  placeholder: d,
  format: c,
  highlighted: u = !1,
  iconType: l = "filter",
  confirmText: b,
  value: m,
  onApply: h
}) => {
  const [f, p] = $(!1), x = s ? [] : r === "dateRange" ? {} : "", [w, k] = $(m ?? x), [v, C] = $("");
  ge(() => {
    f && (k(m ?? (s ? [] : r === "dateRange" ? {} : "")), C(""));
  }, [f, m, s, r]);
  const L = Ap(m), D = (y) => {
    h(y), p(!1);
  }, j = se(() => {
    const y = (a ?? []).filter((_) => _.value !== ""), T = v.trim().toLowerCase();
    return T ? y.filter(
      (_) => String(_.label ?? "").toLowerCase().includes(T) || String(_.value ?? "").toLowerCase().includes(T)
    ) : y;
  }, [a, v]);
  return /* @__PURE__ */ e(
    Eo,
    {
      open: f,
      onOpenChange: p,
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
                  const y = Array.isArray(w) ? w.map(String) : [], T = o || j.length > 6 || !!v;
                  return /* @__PURE__ */ i("div", { className: "space-y-1.5", children: [
                    T && /* @__PURE__ */ e(
                      pt,
                      {
                        size: "xs",
                        allowClear: !0,
                        placeholder: "搜索选项...",
                        value: v,
                        onChange: (_) => C(_.target.value)
                      }
                    ),
                    /* @__PURE__ */ e("div", { className: "max-h-48 space-y-0.5 overflow-y-auto rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/40 p-1", children: j.length === 0 ? /* @__PURE__ */ e("div", { className: "py-3 text-center text-[11px] text-[var(--abc-fg-muted)]", children: "无匹配选项" }) : j.map((_) => {
                      const R = String(_.value), A = y.includes(R);
                      return /* @__PURE__ */ i(
                        "button",
                        {
                          type: "button",
                          disabled: _.disabled,
                          onClick: () => {
                            const z = A ? y.filter((K) => K !== R) : [...y, R];
                            k(z);
                          },
                          className: g(
                            "flex w-full items-center justify-between gap-2 rounded-[var(--abc-radius-xs)] px-2 py-1.5 text-left text-xs transition-colors cursor-pointer",
                            A ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                          ),
                          children: [
                            /* @__PURE__ */ e("span", { className: "truncate", children: _.label }),
                            /* @__PURE__ */ e(
                              "span",
                              {
                                className: g(
                                  "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border",
                                  A ? "border-[var(--abc-primary)] bg-[var(--abc-primary)] text-white" : "border-[var(--abc-border-strong)] bg-transparent"
                                ),
                                children: A && /* @__PURE__ */ e(Nt, { className: "h-2.5 w-2.5 stroke-[3]" })
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
                  ur,
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
                hn,
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
                gn,
                {
                  size: "xs",
                  value: w ?? "",
                  format: c,
                  placeholder: d || `选择${t}`,
                  onChange: (y) => k(y)
                }
              ) : r === "dateRange" ? /* @__PURE__ */ e(
                vn,
                {
                  size: "xs",
                  value: w && typeof w == "object" ? w : null,
                  format: c,
                  onChange: (y) => k(y)
                }
              ) : r === "number" ? /* @__PURE__ */ e(
                cs,
                {
                  size: "xs",
                  value: w === "" ? null : w,
                  placeholder: d || `输入${t}`,
                  onChange: (y) => k(y ?? "")
                }
              ) : /* @__PURE__ */ e(
                pt,
                {
                  size: "xs",
                  allowClear: !0,
                  placeholder: d || `输入${t}关键字`,
                  value: w ?? "",
                  onChange: (y) => k(y.target.value),
                  onKeyDown: (y) => {
                    y.key === "Enter" && (y.preventDefault(), D(w));
                  }
                }
              );
            })(),
            /* @__PURE__ */ i("div", { className: "flex items-center justify-end gap-1.5 pt-0.5", children: [
              /* @__PURE__ */ e(
                Ee,
                {
                  variant: "secondary",
                  size: "xs",
                  onClick: () => {
                    const y = s ? [] : r === "dateRange" ? {} : "";
                    k(y), D(y);
                  },
                  children: "重置"
                }
              ),
              /* @__PURE__ */ e(Ee, { variant: "primary", size: "xs", onClick: () => D(w), children: b ?? (l === "search" ? "查询" : "筛选") })
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
          className: g(
            "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
            u ? "text-white/95 hover:bg-white/20 hover:text-white" : L ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: l === "search" ? /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(On, { className: "h-3 w-3" })
        }
      )
    }
  );
};
function Dp({
  columns: t,
  searchableFieldNames: r,
  settings: a,
  hasActionColumn: n,
  defaultActionWidth: s = 184,
  motion: o,
  onToggleVisible: d,
  onSetAllVisible: c,
  onSetFixed: u,
  onSetWidth: l,
  onSetOrder: b,
  onSetSearchVisible: m,
  onReset: h
}) {
  const f = Ie(o), [p, x] = $(!1), [w, k] = $(""), [v, C] = $("all"), [L, D] = $(null), j = ce(null), S = ce(!1);
  ge(() => {
    if (!L) return;
    const I = (P) => {
      if (P.key === "Escape") {
        const H = j.current;
        D(null), j.current = null, S.current = !1, H && b(H);
      }
    };
    return document.addEventListener("keydown", I, !0), () => document.removeEventListener("keydown", I, !0);
  }, [L, b]);
  const y = se(
    () => t.filter(
      (I) => !I.hideInTable && I.key !== "__abc_actions__" && I.key !== "__actions__" && I.key !== "__drag_handle__"
    ),
    [t]
  ), T = se(() => a.columnOrder.length === 0 ? y : [...y].sort((I, P) => {
    const H = a.columnOrder.indexOf(I.key), O = a.columnOrder.indexOf(P.key);
    return H === -1 && O === -1 ? 0 : H === -1 ? 1 : O === -1 ? -1 : H - O;
  }), [y, a.columnOrder]), _ = (I) => I.key in a.columnFixed ? a.columnFixed[I.key] ?? void 0 : I.fixed, R = se(() => {
    const I = w.trim().toLowerCase();
    return T.filter((P) => {
      if (I && !P.title.toLowerCase().includes(I) && !P.key.toLowerCase().includes(I))
        return !1;
      const H = a.hiddenKeys.includes(P.key), O = _(P);
      return v === "fixed" ? !!O : v === "hidden" ? H : !0;
    });
  }, [T, w, v, a.hiddenKeys, a.columnFixed]), A = se(() => y.map((I) => I.key), [y]), z = se(
    () => t.find((I) => I.key === "__abc_actions__"),
    [t]
  ), K = !!(n || z), E = a.columnWidths.__abc_actions__ ?? (typeof (z == null ? void 0 : z.width) == "number" ? z.width : void 0) ?? s;
  return /* @__PURE__ */ e(
    Eo,
    {
      open: p,
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
            Ee,
            {
              variant: "secondary",
              size: "xs",
              icon: /* @__PURE__ */ e(gr, { className: "h-3 w-3" }),
              onClick: h,
              children: "重置"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "space-y-2 border-b border-[var(--abc-border)] p-3", children: [
          /* @__PURE__ */ i("div", { className: "relative", children: [
            /* @__PURE__ */ e(Ot, { className: "pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[var(--abc-fg-placeholder)]" }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                value: w,
                onChange: (I) => k(I.target.value),
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
            ].map((I) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => C(I.key),
                className: g(
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
                  onClick: () => c(A, !0),
                  className: "text-[var(--abc-primary)] hover:underline cursor-pointer",
                  children: "全显"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[var(--abc-border-strong)]", children: "|" }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  onClick: () => c(A, !1),
                  className: "text-[var(--abc-fg-muted)] hover:text-[var(--abc-danger)] cursor-pointer",
                  children: "全隐"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "max-h-72 space-y-1 overflow-y-auto p-2", children: R.length === 0 ? /* @__PURE__ */ e("div", { className: "py-6 text-center text-xs text-[var(--abc-fg-muted)]", children: "未匹配到相关列字段" }) : R.map((I) => {
          const P = !a.hiddenKeys.includes(I.key), H = _(I), O = Array.isArray(I.dataIndex) ? I.dataIndex.join(".") : String(I.dataIndex ?? I.key), G = r.has(O) || r.has(I.key), Y = a.searchVisible[O] !== void 0 ? !!a.searchVisible[O] : a.searchVisible[I.key] !== void 0 ? !!a.searchVisible[I.key] : G, ie = a.columnWidths[I.key] ?? (typeof I.width == "number" ? I.width : "");
          return /* @__PURE__ */ i(
            "div",
            {
              "data-dragging": L === I.key ? "true" : void 0,
              draggable: !0,
              onDragStart: () => {
                j.current = T.map((V) => V.key), S.current = !1, D(I.key);
              },
              onDragOver: (V) => {
                if (!L || L === I.key) return;
                V.preventDefault();
                const re = T.map((Z) => Z.key), te = re.indexOf(L), le = re.indexOf(I.key);
                if (te < 0 || le < 0 || te === le) return;
                const oe = V.currentTarget.getBoundingClientRect();
                if (oe.height > 0 && (te < le && V.clientY < oe.top + oe.height * 0.35 || te > le && V.clientY > oe.top + oe.height * 0.65))
                  return;
                const Ae = [...re], [F] = Ae.splice(te, 1);
                Ae.splice(le, 0, F), S.current = !0, b(Ae);
              },
              onDrop: () => {
                if (L && L !== I.key && !S.current) {
                  const V = T.map((le) => le.key), re = V.indexOf(L), te = V.indexOf(I.key);
                  if (re >= 0 && te >= 0) {
                    const le = [...V], [oe] = le.splice(re, 1);
                    le.splice(te, 0, oe), b(le);
                  }
                }
                D(null), j.current = null, S.current = !1;
              },
              onDragEnd: () => {
                D(null), j.current = null, S.current = !1;
              },
              className: g(
                "flex items-center justify-between gap-2 rounded-[var(--abc-radius-md)] border border-transparent px-2 py-1.5 transition-colors hover:border-[var(--abc-border)] hover:bg-[var(--abc-bg-muted)]/70",
                L === I.key && "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)]/60 opacity-90"
              ),
              children: [
                /* @__PURE__ */ i("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
                  /* @__PURE__ */ e(os, { className: "h-3.5 w-3.5 shrink-0 cursor-grab text-[var(--abc-fg-placeholder)]" }),
                  /* @__PURE__ */ e(za, { checked: P, onChange: () => d(I.key) }),
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: g(
                        "truncate text-xs",
                        P ? "font-medium text-[var(--abc-fg)]" : "text-[var(--abc-fg-muted)] line-through"
                      ),
                      children: I.title
                    }
                  ),
                  H && /* @__PURE__ */ e("span", { className: "shrink-0 rounded bg-[var(--abc-primary-soft)] px-1 py-0.2 text-[10px] font-medium text-[var(--abc-primary)]", children: H === "left" ? "左固" : "右固" })
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
                      defaultValue: ie,
                      onBlur: (V) => {
                        const re = parseInt(V.target.value, 10);
                        !Number.isNaN(re) && re >= 64 && l(I.key, re);
                      },
                      onKeyDown: (V) => {
                        if (V.key === "Enter") {
                          const re = parseInt(V.target.value, 10);
                          !Number.isNaN(re) && re >= 64 && l(I.key, re);
                        }
                      },
                      className: "h-6 w-13 rounded-[var(--abc-radius-xs)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-1 text-center font-mono text-[11px] text-[var(--abc-fg)] focus:border-[var(--abc-primary)] focus:outline-none"
                    },
                    `${I.key}_${ie}`
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: Y ? "从筛选条件中移除" : "加入筛选条件",
                      "aria-label": `切换 ${I.title} 筛选项显示`,
                      onClick: () => m(O, !Y),
                      className: g(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        Y ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Ot, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: H === "left" ? "取消左侧固定" : "固定到左侧",
                      "aria-label": `固定 ${I.title} 到左侧`,
                      onClick: () => u(I.key, H === "left" ? null : "left"),
                      className: g(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        H === "left" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Pa, { className: "h-3 w-3 -rotate-45" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      title: H === "right" ? "取消右侧固定" : "固定到右侧",
                      "aria-label": `固定 ${I.title} 到右侧`,
                      onClick: () => u(I.key, H === "right" ? null : "right"),
                      className: g(
                        "inline-flex h-6 w-6 items-center justify-center rounded-[var(--abc-radius-xs)] transition-colors cursor-pointer",
                        H === "right" ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-placeholder)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: /* @__PURE__ */ e(Pa, { className: "h-3 w-3 rotate-45" })
                    }
                  )
                ] })
              ]
            },
            I.key
          );
        }) }),
        K && /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--abc-border)] bg-[var(--abc-bg-muted)]/60 px-3 py-2", children: [
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
                defaultValue: E,
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
              `__abc_actions___${E}`
            ),
            /* @__PURE__ */ e("span", { className: "font-mono text-[10px] text-[var(--abc-fg-muted)]", children: "px" })
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ e(er, { content: "列设置与筛选偏好", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          "aria-label": "列与密度设置",
          className: g(
            "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
            p ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
          ),
          children: /* @__PURE__ */ e(Wu, { className: "h-3.5 w-3.5" })
        }
      ) })
    }
  );
}
const Rp = ({ actions: t, maxInline: r = 3, autoFit: a = !0, align: n = "right" }) => {
  const s = ce(null), o = ce(null), [d, c] = $(null), u = t.map((p) => p.key).join("|");
  if ($n(() => {
    if (!a || t.length <= 1) {
      c(null);
      return;
    }
    const p = s.current, x = o.current;
    if (!p || !x) return;
    const w = () => {
      const v = p.clientWidth;
      if (v <= 0) {
        c(null);
        return;
      }
      const C = Array.from(x.children);
      if (C.length === 0) return;
      const L = 4, D = 30, j = C.map((_) => _.offsetWidth);
      if (j.reduce((_, R) => _ + R, 0) + Math.max(0, j.length - 1) * L <= v) {
        c(Math.min(t.length, r));
        return;
      }
      let y = 0, T = 0;
      for (let _ = 0; _ < j.length; _++) {
        const R = (_ > 0 ? y + L : 0) + j[_];
        if (R + L + D <= v)
          y = R, T = _ + 1;
        else
          break;
      }
      c(Math.min(T, Math.max(1, r - 1)));
    };
    if (w(), typeof ResizeObserver > "u") return;
    const k = new ResizeObserver(() => w());
    return k.observe(p), () => k.disconnect();
  }, [a, u, t.length, r]), t.length === 0) return /* @__PURE__ */ e("span", { className: "text-[var(--abc-fg-placeholder)]", children: "-" });
  const l = (p) => /* @__PURE__ */ e(
    Ee,
    {
      variant: p.variant ?? "text",
      size: "xs",
      disabled: p.disabled,
      title: p.title,
      icon: p.icon,
      onClick: p.onClick,
      className: g(
        p.danger && "text-[var(--abc-danger)] enabled:hover:text-[var(--abc-danger)]",
        p.className
      ),
      children: p.label
    },
    p.key
  ), b = t.length <= r ? t.length : Math.max(1, r - 1), m = d ?? b, h = t.slice(0, m), f = t.slice(m);
  return /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      className: g(
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
        h.map(l),
        f.length > 0 && /* @__PURE__ */ e(
          pn,
          {
            placement: "bottomRight",
            items: f.map((p) => ({
              key: p.key,
              label: p.label ?? p.title ?? p.key,
              icon: p.icon,
              danger: p.danger,
              disabled: p.disabled,
              onClick: p.onClick
            })),
            children: /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                "aria-label": "更多操作",
                className: "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--abc-radius-xs)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                children: /* @__PURE__ */ e(mo, { className: "h-3.5 w-3.5" })
              }
            )
          }
        )
      ]
    }
  );
};
function jp({
  selectedKeys: t,
  selectedRows: r,
  batchActions: a = [],
  extraContent: n,
  onBatchDelete: s,
  onClear: o,
  motion: d
}) {
  const c = Ie(d);
  return t.length === 0 ? null : /* @__PURE__ */ i(
    "div",
    {
      role: "region",
      "aria-label": "批量操作栏",
      "data-motion": c,
      className: g(
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
          a.map((u) => /* @__PURE__ */ e(
            Ee,
            {
              variant: u.variant ?? u.type ?? "secondary",
              size: "xs",
              icon: u.icon,
              className: "rounded-full",
              onClick: () => u.onClick(t, r),
              children: u.label
            },
            u.key
          )),
          s && /* @__PURE__ */ i(
            Ee,
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
                /* @__PURE__ */ e(Ct, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function fg(t, r) {
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
const Hi = 3, Bp = ({
  searchFields: t,
  query: r,
  onQueryChange: a,
  onSearch: n,
  onReset: s,
  renderSearchExtra: o,
  isSearchVisible: d = () => !0,
  defaultCollapsed: c = !0,
  collapsed: u,
  onCollapseChange: l,
  className: b
}) => {
  const m = u !== void 0, [h, f] = $(!1), [p, x] = $(c), w = m ? u : p, k = () => {
    const y = !w;
    m || x(y), l == null || l(y);
  }, v = o ? o({ query: r, onQueryChange: a, isSearchVisible: d }) : null, C = !!v, { firstRowKeys: L, hasExtraInFirstRow: D, canCollapse: j } = se(() => {
    let y = 0;
    const T = /* @__PURE__ */ new Set();
    let _ = !1;
    for (const A of t) {
      const z = A.span === 2 ? 2 : 1;
      if (y + z <= Hi)
        y += z, T.add(A.key);
      else
        break;
    }
    C && y < Hi && (_ = !0, y += 1);
    const R = T.size < t.length || C && !_;
    return {
      firstRowKeys: T,
      hasExtraInFirstRow: _,
      canCollapse: R
    };
  }, [t, C]);
  if (!t || t.length === 0)
    return null;
  const S = (y) => {
    const T = r[y.key] ?? "";
    switch (y.type) {
      case "select":
        return /* @__PURE__ */ e(
          ur,
          {
            value: T,
            multiple: y.multiple,
            searchable: y.searchable,
            options: y.options || [],
            placeholder: y.placeholder || `请选择${y.label}`,
            clearable: y.clearable !== !1,
            onChange: (_) => {
              var R;
              return a(y.key, ((R = _ == null ? void 0 : _.target) == null ? void 0 : R.value) ?? _);
            }
          }
        );
      case "date":
        return /* @__PURE__ */ e(
          gn,
          {
            value: T,
            onChange: (_) => a(y.key, _),
            placeholder: y.placeholder || `请选择${y.label}`,
            format: y.format
          }
        );
      case "datetimePicker":
        return /* @__PURE__ */ e(
          pt,
          {
            type: "datetime-local",
            value: T ? String(T).replace(" ", "T").slice(0, 16) : "",
            onChange: (_) => {
              const R = _.target.value;
              a(y.key, R ? `${R.replace("T", " ")}:00` : "");
            },
            onKeyDown: (_) => _.key === "Enter" && n(),
            placeholder: y.placeholder,
            clearable: y.clearable !== !1
          }
        );
      case "dateRange": {
        const _ = r[y.key] || {};
        return /* @__PURE__ */ e(
          vn,
          {
            value: _,
            onChange: (R) => a(y.key, R),
            placeholder: y.placeholder ? [y.placeholder, y.placeholder] : ["开始日期", "结束日期"],
            format: y.format
          }
        );
      }
      case "input":
      default:
        return /* @__PURE__ */ e(
          pt,
          {
            value: T,
            onChange: (_) => a(y.key, _.target.value),
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
      className: g(
        "rounded-[var(--abc-radius-xl)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 shadow-2xs transition-all",
        b
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
                /* @__PURE__ */ e("span", { children: h ? "展开" : "收起" }),
                h ? /* @__PURE__ */ e(lr, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(Kn, { className: "ml-0.5 h-3.5 w-3.5" })
              ]
            }
          )
        ] }),
        !h && /* @__PURE__ */ i("div", { className: "mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4", children: [
          t.map((y) => {
            const T = !w || !j || L.has(y.key);
            return /* @__PURE__ */ i(
              "div",
              {
                className: g(
                  y.span === 2 ? "md:col-span-2" : "flex flex-col justify-end",
                  !T && "hidden"
                ),
                children: [
                  /* @__PURE__ */ e("label", { className: "mb-1.5 block text-xs font-semibold tracking-wide text-[var(--abc-fg-secondary)]", children: y.label }),
                  S(y)
                ]
              },
              y.key
            );
          }),
          v && /* @__PURE__ */ e(
            "div",
            {
              className: g(
                "flex flex-col justify-end",
                w && j && !D && "hidden"
              ),
              children: v
            }
          ),
          /* @__PURE__ */ i("div", { className: "flex items-end gap-2 md:col-start-4 md:justify-end", children: [
            /* @__PURE__ */ e(
              Ee,
              {
                variant: "primary",
                size: "sm",
                onClick: n,
                icon: /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "搜索"
              }
            ),
            /* @__PURE__ */ e(
              Ee,
              {
                variant: "secondary",
                size: "sm",
                onClick: s,
                icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
                className: "min-w-[76px] flex-1 md:flex-initial",
                children: "重置"
              }
            ),
            j && /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                onClick: k,
                className: "ml-1 inline-flex items-center justify-center px-1 py-2 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:opacity-85 cursor-pointer select-none",
                children: [
                  /* @__PURE__ */ e("span", { children: w ? "展开" : "收起" }),
                  w ? /* @__PURE__ */ e(lr, { className: "ml-0.5 h-3.5 w-3.5" }) : /* @__PURE__ */ e(Kn, { className: "ml-0.5 h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}, pg = Bp, Ui = [
  { key: 5e3, label: "5秒" },
  { key: 1e4, label: "10秒" },
  { key: 3e4, label: "30秒" },
  { key: 6e4, label: "1分钟" },
  { key: 3e5, label: "5分钟" }
], Pp = {};
function Vi(t) {
  return t == null || t === "" ? !1 : Array.isArray(t) ? t.length > 0 : typeof t == "object" && ("start" in t || "end" in t) ? !!(t.start || t.end) : !0;
}
function zp(t, r) {
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
function Zc({
  storageKey: t,
  tableId: r,
  title: a,
  subTitle: n,
  columns: s,
  fields: o = [],
  searchFields: d,
  formFields: c,
  formSchema: u,
  defaultFormValues: l,
  dialogTitle: b,
  dialogSize: m,
  formLayout: h = "grid",
  draftConfig: f,
  dataSource: p,
  loading: x,
  request: w,
  api: k,
  defaultQuery: v,
  onListLoaded: C,
  rowKey: L = "id",
  defaultPageSize: D = 10,
  pageSizeOptions: j,
  hidePagination: S = !1,
  pagination: y,
  renderPagination: T,
  selectedRowKey: _,
  onRowClick: R,
  onRow: A,
  searchVariant: z = "card",
  onSearchChange: K,
  onSearchSubmit: E,
  onSearchReset: I,
  headerFilterMode: P,
  onHeaderFilterModeChange: H,
  showHeaderFilterToggle: O,
  clientFilter: G,
  showClientFilterSwitch: Y,
  defaultSearchCollapsed: ie = !0,
  autoRefresh: V,
  autoRefreshConfig: re,
  refetchInterval: te,
  exportable: le,
  showExport: oe,
  onExport: Ae,
  showImport: F = !1,
  onImport: Z,
  syncToUrl: Re = !1,
  viewable: Ue,
  showView: he,
  viewTitle: Se,
  viewSize: Fe = "lg",
  renderViewExtra: Le,
  renderViewFooter: nt,
  onNavigate: we,
  formContainer: J = "dialog",
  formColumns: me,
  showAdd: ze,
  addButtonText: rt,
  showEdit: nr,
  showDelete: bt,
  showBatchDelete: ht,
  rowActions: Wt = [],
  actionButtons: _t = [],
  actionColumnWidth: Pr,
  maxInlineActions: wr,
  rowSelection: mr,
  showRowSelection: Ce,
  selectedRowKeys: st,
  onRowSelectionChange: $t,
  batchActions: fr = [],
  renderBatchActions: Yt,
  treeData: ct = !1,
  expandable: Je,
  sortable: Ge,
  columnSettingsEnabled: Ye = !0,
  maxHeight: Rt,
  autoFitHeight: jt = !1,
  permissions: Xe,
  permission: Ve,
  hasPermission: qt,
  toolbarButtons: Ir = [],
  toolbarExtra: q,
  renderToolbarExtra: de,
  headerExtra: je,
  renderExtra: lt,
  cardExtra: ft,
  renderCardExtra: dt,
  renderSearchExtra: it,
  renderFormExtra: It,
  renderCustomForm: yt,
  onRefreshRef: sr,
  onAddWithValuesRef: Lt,
  openEditRef: Kt,
  onAdd: zr,
  onEdit: pr,
  onDelete: Tr,
  onBeforeAdd: Jr,
  onBeforeEdit: Mr,
  onBeforeSubmit: or,
  onBeforeDelete: Or,
  onBeforeBatchDelete: Qr,
  onAfterSave: Ht,
  onAfterDelete: Nr,
  onAfterBatchDelete: $r,
  motion: ya,
  onSaveRecord: Fr,
  onDeleteRecords: Ft
}) {
  var si;
  const B = t ?? r, { toast: Q } = At(), fe = Ie(ya), { hasPermission: be } = Ro(), pe = ue(
    (N) => N ? qt ? qt(N) : be(N) : !0,
    [qt, be]
  ), ne = se(() => {
    if (k)
      return typeof k == "function" ? bs(k) : k;
  }, [k]), ae = ce(ne);
  ae.current = ne;
  const Ne = ce(C);
  Ne.current = C;
  const qe = se(
    () => s.filter((N) => N.visible === !1).map((N) => N.key),
    [s]
  ), {
    settings: Pe,
    toggleColumnVisible: Oe,
    setAllColumnsVisible: Qe,
    setColumnFixed: Mt,
    setColumnWidth: kt,
    setColumnOrder: ye,
    setSearchFieldVisible: ut,
    setDensity: Ze,
    setFilterHighlightColor: wt,
    resetSettings: gt
  } = Ob(Ye ? B : void 0, "default", qe), Ke = !!(w || ne != null && ne.list), St = se(() => !Re || typeof window > "u" ? {} : rb(window.location.search), [Re]), [vt, Xt] = $(
    () => G ?? !Ke
  ), [wa, Na] = $(!1), Zt = P ?? wa, ms = (N) => {
    P === void 0 && Na(N), H == null || H(N);
  }, [ka, wn] = $(!0), [ea, U] = $(!0), [ke, De] = $(ie), [Me, He] = $(() => {
    const { page: N, pageSize: M, ...W } = St;
    return { ...v, ...W };
  }), et = ce(Me);
  et.current = Me;
  const [mt, kr] = $(() => {
    const { page: N, pageSize: M, ...W } = St;
    return { ...v, ...W };
  }), [Wr, Sa] = $(""), [Jt, Va] = $(() => ({
    key: String((v == null ? void 0 : v.orderBy) ?? ""),
    direction: (v == null ? void 0 : v.orderType) ?? null
  })), [Dt, ir] = $(() => Number(St.page) || 1), [Ut, Bt] = $(
    () => Number(St.pageSize) || D
  ), [Jc, jo] = $(!1), [Qc, Bo] = $(!1), Po = x !== void 0 ? x : Jc, [ta, Ga] = $([]), [el, fs] = $(0), Nn = ce(null), ps = ce(null), zo = ce(null), Oo = ce(null), [tl, $o] = $(void 0), [rl, al] = $([]), rr = st ?? rl, [kn, nl] = $([]), [hr, Sn] = $(!1), [sl, Fo] = $(!1), [Cn, ol] = $({}), [Wo, Ko] = $({}), [hs, gs] = $({}), il = V ?? (re ? re.show !== !1 : Ke), [ca, vs] = $(
    (re == null ? void 0 : re.defaultEnabled) ?? !1
  ), [Ca, cl] = $(
    te ?? (re == null ? void 0 : re.defaultInterval) ?? (k ? 5e3 : 1e4)
  ), Ya = ce(0), [_n, xs] = $(null), [ll, Ho] = $(!1), In = se(() => {
    const N = /* @__PURE__ */ new Map();
    return o.filter((M) => !M.hideInSearch).forEach((M) => {
      N.set(M.name, {
        key: M.name,
        columnKey: M.name,
        label: M.label,
        type: M.type ?? "text",
        placeholder: M.placeholder,
        options: M.options,
        treeData: M.treeData,
        treeCheckable: M.treeCheckable,
        treeCheckStrictly: M.treeCheckStrictly,
        showCheckedStrategy: M.showCheckedStrategy,
        selectableLeafOnly: M.selectableLeafOnly,
        fieldNames: M.fieldNames,
        treeDataSimpleMode: M.treeDataSimpleMode,
        maxTagCount: M.maxTagCount,
        treeDefaultExpandAll: M.treeDefaultExpandAll,
        multiple: M.multiple,
        span: M.span,
        __fromFieldSchema: !0
      });
    }), s.forEach((M) => {
      if (!(M.search === !0 || typeof M.search == "object" && M.search !== null || M.searchable === !0)) return;
      const X = typeof M.search == "object" && M.search !== null ? M.search : {};
      if (X.custom) return;
      const ee = typeof M.type == "object" ? M.type : void 0, _e = X.options ?? (ee == null ? void 0 : ee.options) ?? M.options, xe = X.type ?? (_e ? "select" : "input"), ot = String(
        X.key ?? (Array.isArray(M.dataIndex) ? M.dataIndex.join(".") : M.dataIndex) ?? M.key
      );
      N.set(ot, {
        key: ot,
        columnKey: M.key,
        label: M.title,
        type: xe,
        placeholder: X.placeholder,
        options: _e,
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
    }), (d ?? []).forEach((M) => {
      const W = N.get(M.key);
      N.set(M.key, {
        ...W,
        ...M,
        __fromFieldSchema: !1
      });
    }), Array.from(N.values()).sort((M, W) => (M.order ?? 999) - (W.order ?? 999));
  }, [o, s, d]), dl = se(
    () => new Set(In.map((N) => N.key)),
    [In]
  ), Er = se(() => {
    const N = /* @__PURE__ */ new Map();
    return In.forEach((M) => N.set(M.key, M)), s.forEach((M) => {
      if (M.hideInTable || M.key === "__abc_actions__" || M.key === "__actions__" || M.key === "__drag_handle__")
        return;
      const W = Array.isArray(M.dataIndex) ? M.dataIndex.join(".") : String(M.dataIndex ?? M.key);
      if (!N.has(W) && (Pe.searchVisible[W] === !0 || Pe.searchVisible[M.key] === !0)) {
        const X = typeof M.type == "object" ? M.type : void 0, ee = (X == null ? void 0 : X.options) ?? M.options, _e = ee == null ? void 0 : ee.map((xe) => ({
          label: xe.label,
          value: typeof xe.value == "boolean" ? String(xe.value) : xe.value
        }));
        N.set(W, {
          key: W,
          columnKey: M.key,
          label: M.title,
          type: _e && _e.length > 0 ? "select" : "input",
          options: _e,
          order: M.order,
          __fromFieldSchema: !1
        });
      }
    }), Array.from(N.values()).sort((M, W) => (M.order ?? 999) - (W.order ?? 999));
  }, [In, s, Pe.searchVisible]), Sr = se(
    () => Er.filter((N) => !(Pe.searchVisible[N.key] === !1 || N.columnKey && Pe.searchVisible[N.columnKey] === !1)),
    [Er, Pe.searchVisible]
  ), ys = se(
    () => Sr.filter(
      (N) => !s.some((M) => M.key === (N.columnKey || N.key))
    ),
    [Sr, s]
  ), la = se(() => {
    let N = 0;
    const M = [];
    for (const _e of Sr) {
      const xe = _e.span === 2 || _e.type === "dateRange" ? 2 : 1;
      if (N + xe <= 3)
        N += xe, M.push(_e);
      else
        break;
    }
    const W = !!it, X = W && N < 3, ee = Sr.length - M.length + (W && !X ? 1 : 0);
    return {
      firstRow: M,
      extraFitsFirstRow: X,
      canCollapse: ee > 0,
      hiddenCount: ee
    };
  }, [Sr, it]), Uo = se(() => !ke || !la.canCollapse ? Sr : la.firstRow, [Sr, ke, la]), ra = se(() => {
    const N = /* @__PURE__ */ new Map();
    return o.filter((M) => !M.hideInForm).forEach((M) => {
      N.set(M.name, {
        key: M.name,
        name: M.name,
        label: M.label,
        type: M.type ?? "text",
        options: M.options,
        treeData: M.treeData,
        treeCheckable: M.treeCheckable,
        treeCheckStrictly: M.treeCheckStrictly,
        showCheckedStrategy: M.showCheckedStrategy,
        selectableLeafOnly: M.selectableLeafOnly,
        fieldNames: M.fieldNames,
        treeDataSimpleMode: M.treeDataSimpleMode,
        maxTagCount: M.maxTagCount,
        treeDefaultExpandAll: M.treeDefaultExpandAll,
        multiple: M.multiple,
        placeholder: M.placeholder,
        helperText: M.helperText,
        defaultValue: M.defaultValue,
        span: M.span,
        required: M.required,
        disabled: M.disabled,
        validator: M.validator,
        __fromFieldSchema: !0
      });
    }), s.filter((M) => M.form === !0 || typeof M.form == "object" && M.form !== null).forEach((M) => {
      const W = typeof M.form == "object" && M.form !== null ? M.form : {}, X = String(
        W.key ?? W.name ?? (Array.isArray(M.dataIndex) ? M.dataIndex[0] : M.dataIndex) ?? M.key
      );
      N.set(X, {
        ...W,
        key: X,
        label: W.label ?? M.title,
        tooltip: W.tooltip ?? M.tooltip,
        type: W.type ?? "input"
      });
    }), (c ?? []).forEach((M) => {
      const W = Oa(M);
      if (!W) return;
      const X = N.get(W);
      N.set(W, {
        ...X,
        ...M,
        key: W
      });
    }), Array.from(N.values()).sort((M, W) => (M.order ?? 999) - (W.order ?? 999));
  }, [o, s, c]), Kr = ue(() => {
    const N = { ...l };
    for (const M of ra) {
      const W = Oa(M);
      W && M.defaultValue !== void 0 && N[W] === void 0 && (N[W] = M.defaultValue);
    }
    return N;
  }, [l, ra]), Et = Np({
    defaultValues: Kr(),
    schema: u,
    fields: ra
  }), Ar = f ? !!f.enabled : !!(B && !k), _a = !f && !!(B && !k), Hr = zb(
    Ar && B ? `${B}_form` : void 0
  ), [da, Tn] = $(!1), [Lr, Vo] = $(!1), [Ia, Go] = $(null), [ul, ws] = $(!1), [bl, Yo] = $(!1), [ml, qa] = $(null), [fl, ua] = $(!1), pl = (Ve == null ? void 0 : Ve.add) ?? (Xe == null ? void 0 : Xe.create), hl = (Ve == null ? void 0 : Ve.edit) ?? (Xe == null ? void 0 : Xe.update), qo = (Ve == null ? void 0 : Ve.delete) ?? (Xe == null ? void 0 : Xe.delete), gl = (Ve == null ? void 0 : Ve.batchDelete) ?? qo, vl = Ve == null ? void 0 : Ve.export, xl = Ve == null ? void 0 : Ve.view, yl = (ze ?? !0) && pe(pl), wl = (nr ?? !0) && pe(hl), Nl = (bt ?? !0) && pe(qo), Ns = (ht ?? !!Ft) && pe(gl), Xo = (oe ?? le ?? !k) && pe(vl), Mn = (he ?? Ue ?? !1) && pe(xl), kl = yl && !!(zr || yt || Fr && ra.length > 0 || ne != null && ne.add || ne != null && ne.create), Ta = wl && !!(pr || yt || Fr || ne != null && ne.update || ne != null && ne.edit), En = Nl && !!(Tr || Ft || ne != null && ne.delete);
  ge(() => {
    if (!Re || typeof window > "u") return;
    const N = [
      ...Er.map((X) => X.key),
      ...s.map(
        (X) => Array.isArray(X.dataIndex) ? X.dataIndex.join(".") : String(X.dataIndex ?? X.key)
      ),
      "page",
      "pageSize"
    ], M = ab(window.location.search, N, {
      ...mt,
      page: Dt > 1 ? Dt : void 0,
      pageSize: Ut !== D ? Ut : void 0
    }), W = `${window.location.pathname}${M}${window.location.hash}`;
    window.history.replaceState(null, "", W);
  }, [Re, Er, s, mt, Dt, Ut, D]);
  const Sl = ue(() => {
    if (typeof document > "u") {
      Sn((M) => !M);
      return;
    }
    const N = !hr;
    N && Nn.current && typeof Nn.current.requestFullscreen == "function" ? Nn.current.requestFullscreen().catch(() => {
    }) : !N && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
    }), Sn(N);
  }, [hr]);
  ge(() => {
    if (typeof document > "u") return;
    const N = () => {
      !document.fullscreenElement && hr && Sn(!1);
    };
    return document.addEventListener("fullscreenchange", N), () => document.removeEventListener("fullscreenchange", N);
  }, [hr]), ge(() => {
    if (!hr) return;
    const N = (M) => {
      M.key === "Escape" && !da && !_n && (typeof document < "u" && document.fullscreenElement && typeof document.exitFullscreen == "function" && document.exitFullscreen().catch(() => {
      }), Sn(!1));
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [hr, da, _n]), ge(() => {
    if (!jt || Rt !== void 0 || typeof window > "u") {
      $o(void 0);
      return;
    }
    let N = 0;
    const M = () => {
      var Te;
      const ee = zo.current;
      if (!ee) return;
      const _e = ee.getBoundingClientRect();
      if (_e.top === 0 && _e.height === 0 && ee.clientWidth === 0) return;
      const xe = !S && y !== !1 ? ((Te = Oo.current) == null ? void 0 : Te.offsetHeight) ?? 52 : 0, ot = window.innerHeight - _e.top - xe - 16;
      $o(Math.max(Math.floor(ot), 240));
    }, W = () => {
      window.cancelAnimationFrame(N), N = window.requestAnimationFrame(M);
    };
    W(), window.addEventListener("resize", W);
    let X;
    return typeof ResizeObserver < "u" && ps.current && (X = new ResizeObserver(W), X.observe(ps.current)), () => {
      window.cancelAnimationFrame(N), window.removeEventListener("resize", W), X == null || X.disconnect();
    };
  }, [
    jt,
    Rt,
    hr,
    Zt,
    ea,
    ke,
    ka,
    S,
    y
  ]);
  const Pt = ue(
    (N, M = 0) => typeof L == "function" ? L(N) : (N == null ? void 0 : N[L]) ?? M,
    [L]
  ), ks = se(
    () => vt ? Pp : mt,
    [vt, mt]
  ), Vt = ue(async () => {
    var M, W, X;
    if (!w && !((M = ae.current) != null && M.list)) return;
    const N = ++Ya.current;
    jo(!0);
    try {
      if (w) {
        const Cr = await w({
          current: Dt,
          pageSize: Ut,
          filters: Dn(ks),
          sortField: Jt.direction ? Jt.key : void 0,
          sortOrder: Jt.direction
        });
        if (N !== Ya.current) return;
        Ga(Cr.data), fs(Cr.total), (W = Ne.current) == null || W.call(Ne, Cr.data);
        return;
      }
      const ee = ae.current;
      if (!(ee != null && ee.list)) return;
      const _e = Dn({
        ...v,
        ...ks,
        pageNum: Dt,
        pageSize: Ut,
        ...Jt.direction ? {
          orderBy: Jt.key,
          orderType: Jt.direction,
          sortField: Jt.key,
          sortOrder: Jt.direction
        } : {}
      }), xe = await ee.list(_e);
      if (N !== Ya.current) return;
      if (Rr(xe) && !(xe != null && xe.data) && !(xe != null && xe.list)) {
        Q.error((xe == null ? void 0 : xe.msg) || "获取表格数据失败"), Ga([]), fs(0);
        return;
      }
      const { list: ot, total: Te } = oo(xe);
      Ga(ot), fs(Te), (X = Ne.current) == null || X.call(Ne, ot);
    } catch (ee) {
      N === Ya.current && Q.error((ee == null ? void 0 : ee.message) || "加载表格数据失败");
    } finally {
      N === Ya.current && jo(!1);
    }
  }, [
    w,
    v,
    Dt,
    Ut,
    ks,
    Jt,
    Q
  ]);
  ge(() => {
    Ke && Vt();
  }, [Ke, Vt]), ge(() => {
    if (sr)
      return sr.current = (N = !1) => {
        N && Dt !== 1 ? ir(1) : Vt();
      }, () => {
        sr.current = null;
      };
  }, [sr, Dt, Vt]), ge(() => {
    if (!ca || !Ke || Ca <= 0 || typeof window > "u")
      return;
    const N = window.setInterval(() => {
      Vt();
    }, Ca);
    return () => window.clearInterval(N);
  }, [ca, Ca, Ke, Vt]), ge(() => {
    da && ra.forEach((N) => {
      var M;
      return (M = N.onFormReady) == null ? void 0 : M.call(N, Et, Lr);
    });
  }, [da, Lr, ra, Et]), ge(() => {
    if (!(!da || !Ar)) {
      if (_a && !Lr) {
        const N = Et.watch((M) => {
          Hr.saveDraft(M);
        });
        return () => N.unsubscribe();
      }
      if (f != null && f.autoSave) {
        let N;
        const M = () => {
          N !== void 0 && window.clearTimeout(N), N = window.setTimeout(() => {
            Hr.saveDraft(Et.getValues()), ua(!1);
          }, f.autoSaveInterval || 3e4);
        };
        M();
        const W = Et.watch(() => {
          M();
        });
        return () => {
          N !== void 0 && window.clearTimeout(N), W.unsubscribe();
        };
      }
    }
  }, [
    da,
    Ar,
    _a,
    Lr,
    f == null ? void 0 : f.autoSave,
    f == null ? void 0 : f.autoSaveInterval,
    Et,
    Hr
  ]);
  const ba = ue(
    (N, M) => {
      st === void 0 && al(N);
      const X = M ?? (p ?? ta).filter((ee, _e) => N.includes(Pt(ee, _e)));
      nl(X), $t == null || $t(N, X);
    },
    [st, p, ta, Pt, $t]
  ), Zo = se(() => kn.length > 0 && kn.length === rr.length ? kn : (p ?? ta).filter((M, W) => rr.includes(Pt(M, W))), [kn, rr, p, ta, Pt]), Ma = se(() => {
    const N = s.filter((M) => !M.hideInTable && !Pe.hiddenKeys.includes(M.key)).sort((M, W) => (M.order ?? 999) - (W.order ?? 999)).map((M) => {
      const W = typeof M.type == "object" && M.type !== null ? M.type : void 0, X = typeof M.search == "object" && M.search !== null && Array.isArray(M.search.options) ? M.search.options.filter((_e) => _e.value !== "") : void 0, ee = !!(!M.options && !(W != null && W.options) && X);
      return {
        ...M,
        options: M.options ?? X,
        ...ee ? { __autoOptionsFromSearch: !0 } : {},
        sorter: M.sorter !== void 0 ? M.sorter : k && M.sortable === void 0 ? !0 : M.sorter
      };
    });
    return Pe.columnOrder.length === 0 ? N : [...N].sort((M, W) => {
      const X = Pe.columnOrder.indexOf(M.key), ee = Pe.columnOrder.indexOf(W.key);
      return X === -1 && ee === -1 ? 0 : X === -1 ? 1 : ee === -1 ? -1 : X - ee;
    });
  }, [s, Pe.hiddenKeys, Pe.columnOrder, k]), Xa = p ?? ta, ma = se(() => {
    if (!vt && Ke) return Xa;
    const N = s.map(
      (M) => Array.isArray(M.dataIndex) ? M.dataIndex.join(".") : String(M.dataIndex ?? M.key)
    );
    return tb({
      rows: Xa,
      quickKeyword: Wr,
      searchableKeys: N,
      fieldFilters: mt,
      sortField: Jt.key,
      sortOrder: Jt.direction
    });
  }, [vt, Ke, Xa, Wr, mt, s, Jt]), Cl = se(() => {
    if (!Ke || vt) {
      if (S || y === !1) return ma;
      if (ma.length > Ut || !Ke) {
        const N = (Dt - 1) * Ut;
        return ma.slice(N, N + Ut);
      }
      return ma;
    }
    return ta;
  }, [
    Ke,
    vt,
    S,
    y,
    ma,
    ta,
    Dt,
    Ut
  ]), Ss = !Ke || vt ? ma.length : el, Za = se(() => {
    const N = v ? new Set(Object.keys(v)) : null;
    return Object.entries(Dn(mt)).filter(([W, X]) => !(N && N.has(W) && v[W] === X)).length + (Wr.trim() ? 1 : 0);
  }, [mt, Wr, v]), Ja = ue(() => {
    const N = { ...v };
    et.current = N, He(N), kr(N), Sa(""), Va({ key: "", direction: null }), ir(1), I == null || I(), K == null || K(N);
  }, [v, I, K]), Cs = ue(
    async (N) => {
      if (zr && !N) {
        zr();
        return;
      }
      let M = {
        ...Kr(),
        ...N
      };
      if (Jr) {
        const X = await Jr(M);
        if (X === !1) return;
        X && typeof X == "object" && (M = { ...M, ...X });
      }
      Go(null), Vo(!1), qa(null), Et.clearErrors();
      const W = Ar ? Hr.readDraft() : null;
      W && _a && !N ? (Et.reset({ ...M, ...W }), ua(!0)) : (Et.reset(M), ua(!!(W && Ar && !N))), Tn(!0);
    },
    [
      zr,
      Kr,
      Jr,
      Et,
      Ar,
      Hr,
      _a
    ]
  ), fa = ue(
    async (N) => {
      var X;
      if (pr) {
        pr(N);
        return;
      }
      let M = { ...Kr(), ...N };
      if (Mr) {
        const ee = await Mr(N, N);
        if (ee === !1) return;
        ee && typeof ee == "object" && (M = { ...Kr(), ...ee });
      }
      const W = Pt(N);
      if (Go(N), Vo(!0), qa(null), ua(!1), Et.clearErrors(), Et.reset(M), Tn(!0), (X = ae.current) != null && X.get && W !== void 0 && W !== null) {
        Yo(!0);
        try {
          const ee = await ae.current.get(W), _e = ee != null && ee.data && !Array.isArray(ee.data) ? ee.data : ee;
          if (!Rr(ee) && _e && typeof _e == "object") {
            let xe = { ...M, ..._e };
            if (Mr) {
              const ot = await Mr(xe, N);
              ot && typeof ot == "object" && (xe = { ...Kr(), ...ot });
            }
            Et.reset(xe);
          }
        } catch {
        } finally {
          Yo(!1);
        }
      }
    },
    [pr, Kr, Mr, Pt, Et]
  );
  ge(() => {
    if (Lt)
      return Lt.current = (N) => {
        Cs(N);
      }, () => {
        Lt.current = null;
      };
  }, [Lt, Cs]), ge(() => {
    if (Kt)
      return Kt.current = (N) => {
        fa(N);
      }, () => {
        Kt.current = null;
      };
  }, [Kt, fa]);
  const _s = ue(
    async (N, M) => {
      var W, X;
      if (M) {
        if (M.startsWith("/") || M.startsWith("http")) {
          we == null || we(M, N);
          return;
        }
        const ee = (W = ae.current) == null ? void 0 : W[M];
        if (typeof ee == "function") {
          await ee(N);
          return;
        }
      }
      if (xs(N), (X = ae.current) != null && X.view) {
        Ho(!0);
        try {
          const ee = await ae.current.view(Pt(N)), _e = ee != null && ee.data && !Array.isArray(ee.data) ? ee.data : ee;
          !Rr(ee) && _e && typeof _e == "object" && xs({ ...N, ..._e });
        } catch {
        } finally {
          Ho(!1);
        }
      }
    },
    [we, Pt]
  ), _l = async (N) => {
    var M, W;
    ws(!0), qa(null);
    try {
      let X = N, ee = !1;
      if (or) {
        const _e = await or(N, Lr, Ia);
        if (_e === !1) {
          ws(!1);
          return;
        }
        _e && typeof _e == "object" && (X = _e, ee = !0);
      }
      if (Fr)
        await Fr(X, Ia);
      else if (ae.current) {
        const _e = typeof L == "string" ? L : "id", xe = Ia ? Pt(Ia) : void 0, ot = ee ? {
          ...X,
          ...Lr && xe != null ? { [_e]: xe } : {}
        } : {
          ...Ia || {},
          ...X,
          ...Lr && xe != null ? { [_e]: xe } : {}
        }, Te = Lr ? await ((M = ae.current.update || ae.current.edit || ae.current.add) == null ? void 0 : M(
          ot
        )) : await ((W = ae.current.add || ae.current.create) == null ? void 0 : W(X));
        if (Rr(Te)) {
          qa((Te == null ? void 0 : Te.msg) || "保存失败");
          return;
        }
      }
      Ar && (Hr.clearDraft(), ua(!1)), Tn(!1), Q.success(Lr ? "更新成功" : k ? "新增成功" : "创建成功"), Ht == null || Ht(X), Ke && Vt();
    } catch (X) {
      const ee = (X == null ? void 0 : X.message) || "提交失败";
      qa(ee), k || Q.error(ee);
    } finally {
      ws(!1);
    }
  }, Il = async (N) => {
    var W;
    if (N == null || N.preventDefault(), !await Et.trigger()) {
      const X = (W = Object.values(Et.formState.errors).find((ee) => ee == null ? void 0 : ee.message)) == null ? void 0 : W.message;
      X && !k && Q.warning(X);
      return;
    }
    await _l(Et.getValues());
  }, Is = ue(
    async (N, M = 0) => {
      var ee, _e;
      if (Tr) {
        Tr(N);
        return;
      }
      if (Or && await Or(N) === !1)
        return;
      const W = Pt(N, M);
      if (!(!Ft && !((ee = ae.current) != null && ee.delete) || !await Gn({
        title: "确认删除",
        message: "确定要删除这条数据吗？此操作无法撤销。",
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (Ft)
            await Ft([W]);
          else if ((_e = ae.current) != null && _e.delete) {
            const xe = await ae.current.delete([W]);
            if (Rr(xe)) {
              Q.error((xe == null ? void 0 : xe.msg) || "删除失败");
              return;
            }
          }
          ba(rr.filter((xe) => xe !== W)), Q.success("删除成功"), Nr == null || Nr(), Ke && Vt();
        } catch (xe) {
          Q.error((xe == null ? void 0 : xe.message) || "删除失败");
        }
    },
    [
      Tr,
      Or,
      Pt,
      Ft,
      rr,
      ba,
      Q,
      Nr,
      Ke,
      Vt
    ]
  ), Jo = ue(
    async (N) => {
      var W, X;
      if (N.length === 0) {
        Q.warning("请先选择要删除的数据行");
        return;
      }
      if (!(Qr && await Qr(N) === !1 || !Ft && !((W = ae.current) != null && W.delete) || !await Gn({
        title: "确认删除选中记录",
        message: `即将删除 ${N.length} 条数据，删除后不可恢复，是否继续？`,
        tone: "danger",
        confirmText: "确认删除"
      })))
        try {
          if (Ft)
            await Ft(N);
          else if ((X = ae.current) != null && X.delete) {
            const ee = await ae.current.delete(N);
            if (Rr(ee)) {
              Q.error((ee == null ? void 0 : ee.msg) || "批量删除失败");
              return;
            }
          }
          ba([], []), Q.success(`已删除 ${N.length} 条记录`), $r == null || $r(), Ke && Vt();
        } catch (ee) {
          Q.error((ee == null ? void 0 : ee.message) || "批量删除失败");
        }
    },
    [
      Qr,
      Ft,
      ba,
      Q,
      $r,
      Ke,
      Vt
    ]
  ), Ts = ue(
    async (N, M) => {
      var X, ee;
      const W = Pt(M);
      if (N && ((X = ae.current) != null && X.children)) {
        const _e = Cn[W];
        if (!_e || _e.length === 0) {
          Ko((xe) => ({ ...xe, [W]: !0 })), gs((xe) => ({ ...xe, [W]: "" }));
          try {
            const xe = await ae.current.children(M);
            if (Rr(xe))
              gs((ot) => ({ ...ot, [W]: (xe == null ? void 0 : xe.msg) || "加载失败" }));
            else {
              const { list: ot } = oo(xe);
              ol((Te) => ({ ...Te, [W]: ot })), ct && Ga((Te) => {
                const Cr = (Ln) => Ln.map((aa) => Pt(aa) === W ? { ...aa, children: ot } : Array.isArray(aa.children) ? { ...aa, children: Cr(aa.children) } : aa);
                return Cr(Te);
              });
            }
          } catch {
            gs((xe) => ({ ...xe, [W]: "加载失败" }));
          } finally {
            Ko((xe) => ({ ...xe, [W]: !1 }));
          }
        }
      }
      (ee = Je == null ? void 0 : Je.onExpand) == null || ee.call(Je, N, M);
    },
    [Pt, Cn, ct, Je]
  ), Tl = ue(
    (N, M) => {
      var xe;
      const W = [...Xa], X = W.findIndex(
        (ot, Te) => String(Pt(ot, Te)) === String(N)
      ), ee = W.findIndex(
        (ot, Te) => String(Pt(ot, Te)) === String(M)
      );
      if (X < 0 || ee < 0 || X === ee) return;
      const [_e] = W.splice(X, 1);
      W.splice(ee, 0, _e), p || Ga(W), (xe = Ge == null ? void 0 : Ge.onSort) == null || xe.call(Ge, W);
    },
    [Xa, Pt, p, Ge]
  ), Qo = se(
    () => fr.filter((N) => pe(N.permission)),
    [fr, pe]
  ), An = mr ?? Ce ?? !!(Ns && (Ft || ne != null && ne.delete) || Qo.length > 0 || Yt), ei = wr ?? (_t.length > 0 && Wt.length === 0 ? 6 : 3), Ms = Mn || Ta || En || Wt.length > 0 || _t.length > 0, Es = Pr !== void 0 ? _t.length > 0 ? Math.max(Pr, 220) : Pr : _t.length > 0 || k ? 220 : Mn || Wt.length > 0 ? 184 : 136, As = _t.length > 0 || k ? "left" : "right", Ml = se(() => {
    const N = [...Ma];
    return Ge != null && Ge.enabled && N.unshift({
      key: "__drag_handle__",
      title: "排序",
      width: 68,
      align: "center",
      sortable: !1,
      sorter: !1,
      render: () => /* @__PURE__ */ e(os, { className: "mx-auto h-4 w-4 cursor-grab text-[var(--abc-fg-placeholder)]" })
    }), Ms && N.push({
      key: "__abc_actions__",
      title: "操作",
      fixed: "right",
      width: Es,
      align: As,
      sortable: !1,
      sorter: !1,
      render: (M, W, X) => {
        var ot;
        const ee = [];
        let _e = !1, xe = !1;
        Mn && ee.push({
          key: "__view__",
          label: k ? "查看" : "详情",
          icon: /* @__PURE__ */ e(Wa, { className: "h-3 w-3" }),
          onClick: () => void _s(W)
        });
        for (const Te of _t) {
          if (Te.key === "edit" && !Te.onClick) {
            _e = !0, Ta && ee.push({
              key: "__edit__",
              label: Te.label ?? "编辑",
              icon: /* @__PURE__ */ e(zn, { className: "h-3 w-3" }),
              onClick: () => void fa(W)
            });
            continue;
          }
          if (Te.key === "delete" && !Te.onClick) {
            xe = !0, En && ee.push({
              key: "__delete__",
              label: Te.label ?? "删除",
              icon: /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
              danger: !0,
              onClick: () => void Is(W, X)
            });
            continue;
          }
          if (Te.key === "edit" && (_e = !0), Te.key === "delete" && (xe = !0), !(typeof Te.show == "function" ? Te.show(W) : Te.show !== !1) || !pe(Te.permission)) continue;
          const Ln = typeof Te.disabled == "function" ? Te.disabled(W) : !!Te.disabled, aa = typeof Te.title == "function" ? Te.title(W) : Te.title, zl = typeof Te.icon == "string" ? /* @__PURE__ */ e(jr, { name: Te.icon, size: 13 }) : Te.icon;
          ee.push({
            key: Te.key,
            label: Te.label,
            icon: zl,
            variant: Te.variant ?? Te.type ?? "text",
            danger: (Te.variant ?? Te.type) === "danger",
            disabled: Ln,
            title: aa,
            className: Te.className,
            onClick: async () => {
              var oi;
              if (Ln) return;
              const js = (oi = Te.onClick) == null ? void 0 : oi.call(Te, W);
              js && typeof js.then == "function" && (await js, Ke && Vt());
            }
          });
        }
        !_e && Ta && _t.length === 0 && ee.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(zn, { className: "h-3 w-3" }),
          onClick: () => void fa(W)
        });
        for (const Te of Wt)
          pe(Te.permission) && ((ot = Te.hidden) != null && ot.call(Te, W) || ee.push({
            key: Te.key,
            label: Te.label,
            icon: Te.icon,
            danger: Te.danger,
            onClick: async () => {
              const Cr = Te.onClick(W);
              Cr && typeof Cr.then == "function" && (await Cr, Ke && Vt());
            }
          }));
        return !_e && Ta && _t.length > 0 && ee.push({
          key: "__edit__",
          label: "编辑",
          icon: /* @__PURE__ */ e(zn, { className: "h-3 w-3" }),
          onClick: () => void fa(W)
        }), !xe && En && ee.push({
          key: "__delete__",
          label: "删除",
          icon: /* @__PURE__ */ e(Vr, { className: "h-3 w-3" }),
          danger: !0,
          onClick: () => void Is(W, X)
        }), /* @__PURE__ */ e(
          Rp,
          {
            actions: ee,
            maxInline: ei,
            autoFit: wr === void 0,
            align: As
          }
        );
      }
    }), N;
  }, [
    Ma,
    Ge == null ? void 0 : Ge.enabled,
    Ms,
    Es,
    As,
    Mn,
    k,
    _t,
    Ta,
    En,
    Wt,
    ei,
    wr,
    pe,
    _s,
    fa,
    Is,
    Ke,
    Vt
  ]), El = se(() => {
    if (!Je && !(ne != null && ne.children)) return;
    const N = (M, W, X = 0, ee = !0) => {
      if (Je != null && Je.expandedRowRender)
        return Je.expandedRowRender(M, W, X, ee);
      const _e = Pt(M, W);
      if (Wo[_e])
        return /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "加载中..." });
      if (hs[_e])
        return /* @__PURE__ */ i("div", { className: "py-5 text-center text-xs text-[var(--abc-danger)]", children: [
          /* @__PURE__ */ e("span", { children: hs[_e] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => void Ts(!0, M),
              className: "ml-2 text-[var(--abc-primary)] hover:underline cursor-pointer",
              children: "重试"
            }
          )
        ] });
      const xe = Cn[_e] || [];
      return xe.length === 0 ? /* @__PURE__ */ e("div", { className: "py-5 text-center text-xs text-[var(--abc-fg-muted)]", children: "暂无子项数据" }) : /* @__PURE__ */ e(
        ji,
        {
          columns: Ma,
          data: xe,
          rowKey: L,
          density: Pe.density
        }
      );
    };
    return {
      ...Je,
      rowExpandable: (Je == null ? void 0 : Je.rowExpandable) ?? (ne != null && ne.children ? () => !0 : void 0),
      expandedRowRender: ct ? void 0 : ne != null && ne.children || Je != null && Je.expandedRowRender ? N : void 0,
      onExpand: Ts
    };
  }, [
    Je,
    ne == null ? void 0 : ne.children,
    ct,
    Pt,
    Wo,
    hs,
    Cn,
    Ts,
    Ma,
    L,
    Pe.density
  ]), ti = async () => {
    var W;
    const N = vt || !Ke ? ma : ta;
    if (k) {
      Bo(!0);
      try {
        const X = Dn({
          ...v,
          ...mt,
          pageNum: Dt,
          pageSize: Ut
        });
        if (Ae)
          await Ae(X);
        else if ((W = ae.current) != null && W.export)
          await ae.current.export(X);
        else {
          const ee = typeof a == "string" && a.trim() ? a.trim() : B || "table-export";
          Ki(ee, Ma, N);
        }
        Q.success("导出成功");
      } catch (X) {
        Q.error((X == null ? void 0 : X.message) || "导出失败");
      } finally {
        Bo(!1);
      }
      return;
    }
    if (Ae) {
      await Ae(N);
      return;
    }
    const M = typeof a == "string" && a.trim() ? a.trim() : B || "table-export";
    Ki(M, Ma, N), Q.success(`已导出 ${N.length} 条记录`);
  }, Qa = ue(
    (N, M) => {
      He((W) => {
        const X = { ...W, [N]: M };
        return et.current = X, K == null || K(X), X;
      });
    },
    [K]
  ), Ls = ue(
    (N) => {
      const M = { ...et.current, ...N || {} };
      et.current = M, He(M), kr(M), ir(1), E == null || E(M);
    },
    [E]
  ), Ds = (N, M) => {
    const W = Me[N.key], X = (ee) => Qa(N.key, ee);
    if (N.type === "select")
      return /* @__PURE__ */ e(
        ur,
        {
          allowClear: N.clearable !== !1,
          searchable: N.searchable ?? !0,
          multiple: N.multiple,
          options: N.options ?? [],
          placeholder: N.placeholder ?? (N.__fromFieldSchema ? `全部${N.label}` : `请选择${N.label}`),
          value: W ?? (N.multiple ? [] : ""),
          onChange: (ee) => {
            const _e = ee && typeof ee == "object" && "target" in ee ? ee.target.value : ee;
            X(_e);
          },
          className: M == null ? void 0 : M.select
        }
      );
    if (N.type === "treeSelect") {
      const ee = !!(N.multiple || N.treeCheckable);
      return /* @__PURE__ */ e(
        hn,
        {
          "aria-label": N.label,
          allowClear: N.clearable !== !1,
          searchable: N.searchable ?? !0,
          multiple: N.multiple,
          treeCheckable: N.treeCheckable,
          treeCheckStrictly: N.treeCheckStrictly,
          showCheckedStrategy: N.showCheckedStrategy,
          selectableLeafOnly: N.selectableLeafOnly,
          fieldNames: N.fieldNames,
          treeDataSimpleMode: N.treeDataSimpleMode,
          maxTagCount: N.maxTagCount,
          treeDefaultExpandAll: N.treeDefaultExpandAll,
          treeData: N.treeData ?? [],
          placeholder: N.placeholder ?? (N.__fromFieldSchema ? `全部${N.label}` : `请选择${N.label}`),
          value: W ?? (ee ? [] : ""),
          onChange: (_e) => X(_e),
          className: M == null ? void 0 : M.select
        }
      );
    }
    return N.type === "date" || N.type === "datetimePicker" ? /* @__PURE__ */ e(
      gn,
      {
        value: W ?? "",
        placeholder: N.placeholder ?? (N.__fromFieldSchema ? `选择${N.label}` : `请选择${N.label}`),
        onChange: X
      }
    ) : N.type === "dateRange" ? /* @__PURE__ */ e(vn, { value: W ?? null, onChange: X }) : N.type === "number" ? /* @__PURE__ */ e(
      cs,
      {
        value: W ?? null,
        placeholder: N.placeholder ?? `输入${N.label}`,
        onChange: X,
        className: M == null ? void 0 : M.input
      }
    ) : /* @__PURE__ */ e(
      pt,
      {
        allowClear: N.clearable !== !1,
        placeholder: N.placeholder ?? (N.__fromFieldSchema ? `搜索${N.label}` : `请输入${N.label}`),
        value: W ?? "",
        onChange: (ee) => X(ee.target.value),
        wrapperClassName: M == null ? void 0 : M.input
      }
    );
  }, Al = me ?? (k || ra.length >= 6 ? 2 : 1), Ll = Y ?? !!(k && Er.length > 0), ri = ((si = Ui.find((N) => N.key === Ca)) == null ? void 0 : si.label) ?? "5秒", Dl = O ?? P === void 0, ai = !!(n || je || lt || k && a), Rs = je ?? (lt == null ? void 0 : lt()), Rl = ft ?? (dt == null ? void 0 : dt()), jl = q ?? (de == null ? void 0 : de()), Bl = rt ?? (k ? "新增" : "新建记录"), ni = se(
    () => Er.filter((N) => Vi(mt[N.key])).map((N) => N.columnKey || N.key),
    [Er, mt]
  ), Pl = se(
    () => Object.fromEntries(
      Er.filter((N) => Vi(mt[N.key])).map((N) => [N.columnKey || N.key, zp(N, mt[N.key])])
    ),
    [Er, mt]
  );
  return /* @__PURE__ */ i(
    "div",
    {
      ref: Nn,
      "data-motion": fe,
      className: g(
        "relative space-y-3",
        hr && "fixed inset-0 z-[950] m-0 overflow-auto bg-[var(--abc-bg-canvas)] p-4"
      ),
      children: [
        ai && (a || n || Rs) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ i("div", { children: [
            a && /* @__PURE__ */ e("h2", { className: "text-lg font-bold tracking-tight text-[var(--abc-fg)]", children: a }),
            n && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: n })
          ] }),
          Rs && /* @__PURE__ */ e("div", { children: Rs })
        ] }),
        Rl,
        z === "toolbar" && (Sr.length > 0 || !!it) && !Zt && /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-3 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]", children: /* @__PURE__ */ i(
          "form",
          {
            onSubmit: (N) => {
              N.preventDefault(), Ls();
            },
            className: "flex flex-wrap items-center gap-2.5",
            children: [
              Uo.map((N) => /* @__PURE__ */ e("div", { className: "flex items-center", children: Ds(N, {
                input: N.span === 2 ? "w-80 sm:w-96" : "w-72 sm:w-80",
                select: "w-40"
              }) }, N.key)),
              it == null ? void 0 : it({
                query: Me,
                onQueryChange: Qa,
                isSearchVisible: (N) => Pe.searchVisible[N] !== !1
              }),
              /* @__PURE__ */ e(
                Ee,
                {
                  size: "sm",
                  type: "submit",
                  variant: "primary",
                  icon: /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }),
                  children: "搜索"
                }
              ),
              /* @__PURE__ */ e(
                Ee,
                {
                  size: "sm",
                  type: "button",
                  variant: "secondary",
                  icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
                  onClick: Ja,
                  children: "重置"
                }
              ),
              Za > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Za,
                " 项"
              ] })
            ]
          }
        ) }),
        z === "card" && (Sr.length > 0 || !!it) && !Zt && /* @__PURE__ */ e("div", { ref: ps, children: /* @__PURE__ */ i(Xn, { padding: "none", children: [
          /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)]/70 px-4 py-2.5", children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(On, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-[var(--abc-fg)]", children: "筛选条件" }),
              Za > 0 && /* @__PURE__ */ i("span", { className: "inline-flex items-center gap-1 rounded-full bg-[var(--abc-primary-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--abc-primary)]", children: [
                "已生效 ",
                Za,
                " 项",
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    "aria-label": "一键清空已生效筛选",
                    onClick: Ja,
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
                "aria-expanded": ea,
                onClick: () => U((N) => !N),
                className: "inline-flex items-center gap-0.5 rounded-[var(--abc-radius-xs)] px-2 py-0.5 text-xs font-medium text-[var(--abc-primary)] hover:bg-[var(--abc-bg-subtle)] cursor-pointer select-none",
                children: [
                  /* @__PURE__ */ e("span", { children: ea ? "收起" : "展开" }),
                  ea ? /* @__PURE__ */ e(Kn, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "abc-collapse-grid", "data-open": ea, children: /* @__PURE__ */ e("div", { className: "abc-collapse-inner", children: /* @__PURE__ */ i(
            "form",
            {
              onSubmit: (N) => {
                N.preventDefault(), Ls();
              },
              className: "grid grid-cols-1 items-end gap-3.5 p-4 sm:grid-cols-2 lg:grid-cols-4",
              children: [
                Uo.map((N) => /* @__PURE__ */ e(
                  Ao,
                  {
                    label: N.label,
                    className: N.span === 2 || N.type === "dateRange" ? "sm:col-span-2" : void 0,
                    children: Ds(N)
                  },
                  N.key
                )),
                (!ke || !la.canCollapse || la.extraFitsFirstRow) && (it == null ? void 0 : it({
                  query: Me,
                  onQueryChange: Qa,
                  isSearchVisible: (N) => Pe.searchVisible[N] !== !1
                })),
                /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2 lg:col-start-4 lg:justify-end", children: [
                  /* @__PURE__ */ e(
                    Ee,
                    {
                      size: "sm",
                      type: "submit",
                      variant: "primary",
                      icon: /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }),
                      children: "搜索"
                    }
                  ),
                  /* @__PURE__ */ e(
                    Ee,
                    {
                      size: "sm",
                      type: "button",
                      variant: "secondary",
                      icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
                      onClick: Ja,
                      children: "重置"
                    }
                  ),
                  la.canCollapse && /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      onClick: () => De((N) => !N),
                      className: "inline-flex items-center gap-0.5 px-1.5 py-1 text-xs font-medium whitespace-nowrap text-[var(--abc-primary)] hover:underline cursor-pointer select-none",
                      children: [
                        /* @__PURE__ */ e("span", { children: ke ? `展开 (${la.hiddenCount})` : "收起" }),
                        ke ? /* @__PURE__ */ e(lr, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(Kn, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] }) }),
        /* @__PURE__ */ i(Xn, { padding: "none", children: [
          Zt && ka && ys.length > 0 && /* @__PURE__ */ e("div", { className: "border-b border-[var(--abc-border)] px-4 py-2.5", children: /* @__PURE__ */ i("div", { className: "flex flex-wrap items-end gap-3", children: [
            ys.map((N) => /* @__PURE__ */ i("div", { className: "w-48", children: [
              /* @__PURE__ */ e("div", { className: "mb-1 text-[11px] text-[var(--abc-fg-muted)]", children: N.label }),
              Ds(N)
            ] }, N.key)),
            /* @__PURE__ */ e(
              Ee,
              {
                variant: "primary",
                size: "sm",
                onClick: () => Ls(),
                icon: /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5" }),
                children: "查询"
              }
            )
          ] }) }),
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[var(--abc-border)] px-4 py-3", children: [
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
              !ai && a && /* @__PURE__ */ e("h3", { className: "mr-1 text-sm font-semibold text-[var(--abc-fg)]", children: a }),
              kl && /* @__PURE__ */ e(
                Ee,
                {
                  variant: "primary",
                  size: "sm",
                  icon: /* @__PURE__ */ e(ns, { className: "h-3.5 w-3.5" }),
                  onClick: () => void Cs(),
                  children: Bl
                }
              ),
              ht && Ns && (Ft || (ne == null ? void 0 : ne.delete)) && /* @__PURE__ */ e(
                Ee,
                {
                  variant: "danger",
                  size: "sm",
                  disabled: rr.length === 0,
                  icon: /* @__PURE__ */ e(Vr, { className: "h-3.5 w-3.5" }),
                  onClick: () => void Jo(rr),
                  children: "批量删除"
                }
              ),
              oe && Xo && /* @__PURE__ */ e(
                Ee,
                {
                  variant: "secondary",
                  size: "sm",
                  loading: Qc,
                  icon: /* @__PURE__ */ e(Ys, { className: "h-3.5 w-3.5" }),
                  onClick: () => void ti(),
                  children: "导出"
                }
              ),
              F && /* @__PURE__ */ e(
                Ee,
                {
                  variant: "secondary",
                  size: "sm",
                  icon: /* @__PURE__ */ e(ts, { className: "h-3.5 w-3.5" }),
                  onClick: () => void (Z == null ? void 0 : Z()),
                  children: "导入"
                }
              ),
              Ir.filter((N) => pe(N.permission)).map((N) => /* @__PURE__ */ e(
                Ee,
                {
                  variant: N.variant ?? N.type ?? "secondary",
                  size: "sm",
                  icon: N.icon,
                  onClick: N.onClick,
                  children: N.label
                },
                N.key
              )),
              jl,
              Zt && ys.length > 0 && /* @__PURE__ */ e(
                Ee,
                {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => wn((N) => !N),
                  children: ka ? "收起筛选" : "展开筛选"
                }
              ),
              Zt && Sr.length > 0 && /* @__PURE__ */ e(
                Ee,
                {
                  variant: "secondary",
                  size: "sm",
                  icon: /* @__PURE__ */ e(gr, { className: "h-3.5 w-3.5" }),
                  onClick: Ja,
                  children: "重置"
                }
              ),
              An && rr.length > 0 && /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-2 rounded-full bg-[var(--abc-primary-soft)] px-3 py-1 text-xs font-medium text-[var(--abc-primary)]", children: [
                /* @__PURE__ */ i("span", { children: [
                  "已选择 ",
                  rr.length,
                  " 项"
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    onClick: () => ba([], []),
                    className: "hover:underline cursor-pointer",
                    children: "取消"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-1.5", children: [
              vt && Er.length === 0 && /* @__PURE__ */ e(
                pt,
                {
                  size: "xs",
                  allowClear: !0,
                  prefix: /* @__PURE__ */ e(On, { className: "h-3 w-3" }),
                  placeholder: "当前数据即时检索（支持拼音）...",
                  value: Wr,
                  onChange: (N) => {
                    Sa(N.target.value), ir(1);
                  },
                  wrapperClassName: "w-52"
                }
              ),
              il && Ke && /* @__PURE__ */ i("div", { className: "inline-flex h-7 items-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)]", children: [
                /* @__PURE__ */ e(
                  er,
                  {
                    content: ca ? `自动刷新运行中：每 ${ri} 轮询（点击暂停）` : "点击开启自动刷新",
                    children: /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        "aria-label": "切换定时自动刷新",
                        onClick: () => vs((N) => !N),
                        className: g(
                          "inline-flex h-full items-center gap-1 rounded-l-[var(--abc-radius-sm)] px-2 text-[11px] transition-colors cursor-pointer",
                          ca ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                        ),
                        children: [
                          /* @__PURE__ */ e(
                            Fn,
                            {
                              className: g("h-3.5 w-3.5", ca && "animate-pulse")
                            }
                          ),
                          ca && /* @__PURE__ */ e("span", { children: ri })
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e(
                  Eo,
                  {
                    open: sl,
                    onOpenChange: Fo,
                    placement: "bottomRight",
                    panelClassName: "w-44 p-2.5",
                    content: /* @__PURE__ */ i("div", { className: "space-y-2 text-xs text-[var(--abc-fg)]", children: [
                      /* @__PURE__ */ i("div", { className: "flex items-center justify-between border-b border-[var(--abc-border)] pb-2", children: [
                        /* @__PURE__ */ e("span", { className: "font-semibold", children: "自动刷新" }),
                        /* @__PURE__ */ e(
                          cr,
                          {
                            size: "xs",
                            checked: ca,
                            onChange: (N) => vs(N)
                          }
                        )
                      ] }),
                      /* @__PURE__ */ i("div", { className: "space-y-0.5", children: [
                        /* @__PURE__ */ e("div", { className: "px-1.5 py-0.5 text-[10px] text-[var(--abc-fg-muted)]", children: "刷新间隔" }),
                        Ui.map((N) => /* @__PURE__ */ i(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              cl(N.key), vs(!0), Fo(!1);
                            },
                            className: g(
                              "flex w-full items-center justify-between rounded-[var(--abc-radius-xs)] px-2 py-1 text-left text-xs transition-colors cursor-pointer",
                              Ca === N.key ? "bg-[var(--abc-primary-soft)] font-medium text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)]"
                            ),
                            children: [
                              /* @__PURE__ */ e("span", { children: N.label }),
                              Ca === N.key && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                            ]
                          },
                          N.key
                        ))
                      ] })
                    ] }),
                    children: /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        "aria-label": "选择轮询频率",
                        className: "inline-flex h-full w-5 items-center justify-center rounded-r-[var(--abc-radius-sm)] border-l border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                        children: /* @__PURE__ */ e(lr, { className: "h-3 w-3" })
                      }
                    )
                  }
                )
              ] }),
              Ll && /* @__PURE__ */ e(
                er,
                {
                  content: vt ? "当前为【前端本地筛选】：直接过滤已加载数据（支持汉字拼音首字母），点击切换为接口查询" : "当前为【服务端接口查询】：点击切换为前端本地即时筛选模式",
                  children: /* @__PURE__ */ i(
                    "button",
                    {
                      type: "button",
                      "aria-pressed": vt,
                      "aria-label": "切换前端本地筛选模式",
                      onClick: () => {
                        const N = !vt;
                        Xt(N), ir(1), Q.info(
                          N ? "已切换至前端本地筛选模式" : "已切换至服务端接口查询模式"
                        );
                      },
                      className: g(
                        "inline-flex h-7 items-center gap-1.5 rounded-[var(--abc-radius-sm)] border px-2.5 text-[11px] font-medium transition-colors cursor-pointer select-none",
                        vt ? "border-[var(--abc-primary)]/40 bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] bg-[var(--abc-bg-muted)] text-[var(--abc-fg-secondary)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        /* @__PURE__ */ e(On, { className: "h-3 w-3" }),
                        /* @__PURE__ */ e("span", { children: vt ? "前端筛选" : "接口筛选" })
                      ]
                    }
                  )
                }
              ),
              Dl && /* @__PURE__ */ e(er, { content: Zt ? "关闭表头内联筛选" : "开启表头内联筛选", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "切换表头内联筛选",
                  onClick: () => ms(!Zt),
                  className: g(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    Zt ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: /* @__PURE__ */ e(Ku, { className: "h-3.5 w-3.5" })
                }
              ) }),
              Xo && !oe && /* @__PURE__ */ e(er, { content: "导出当前数据 (CSV)", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "导出数据",
                  onClick: () => void ti(),
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Ys, { className: "h-3.5 w-3.5" })
                }
              ) }),
              Ke && /* @__PURE__ */ e(er, { content: "刷新表格数据", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": "刷新数据",
                  onClick: () => void Vt(),
                  className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                  children: /* @__PURE__ */ e(Fa, { className: g("h-3.5 w-3.5", Po && "animate-spin") })
                }
              ) }),
              /* @__PURE__ */ e(
                pn,
                {
                  placement: "bottomRight",
                  items: [
                    {
                      key: "comfortable",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "宽松" }),
                        Pe.density === "comfortable" && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => Ze("comfortable")
                    },
                    {
                      key: "default",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "默认" }),
                        Pe.density === "default" && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => Ze("default")
                    },
                    {
                      key: "compact",
                      label: /* @__PURE__ */ i("span", { className: "flex items-center justify-between gap-4", children: [
                        /* @__PURE__ */ e("span", { children: "紧凑" }),
                        Pe.density === "compact" && /* @__PURE__ */ e(Nt, { className: "h-3.5 w-3.5 text-[var(--abc-primary)]" })
                      ] }),
                      onClick: () => Ze("compact")
                    }
                  ],
                  children: /* @__PURE__ */ e(er, { content: "表格行密度", children: /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      "aria-label": "表格行密度",
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] cursor-pointer",
                      children: /* @__PURE__ */ e(Hu, { className: "h-3.5 w-3.5" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ e(er, { content: hr ? "退出全屏 (Esc)" : "全屏展示表格", children: /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": hr ? "退出全屏" : "全屏展示",
                  onClick: Sl,
                  className: g(
                    "inline-flex h-7 w-7 items-center justify-center rounded-[var(--abc-radius-sm)] border transition-colors cursor-pointer",
                    hr ? "border-[var(--abc-primary)] bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "border-[var(--abc-border)] text-[var(--abc-fg-muted)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                  ),
                  children: hr ? /* @__PURE__ */ e(co, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ e(lo, { className: "h-3.5 w-3.5" })
                }
              ) }),
              Ye && /* @__PURE__ */ e(
                Dp,
                {
                  columns: s,
                  searchableFieldNames: dl,
                  settings: Pe,
                  hasActionColumn: Ms,
                  defaultActionWidth: Es,
                  motion: fe,
                  onToggleVisible: Oe,
                  onSetAllVisible: Qe,
                  onSetFixed: Mt,
                  onSetWidth: kt,
                  onSetOrder: ye,
                  onSetSearchVisible: ut,
                  onReset: gt
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e("div", { ref: zo, children: /* @__PURE__ */ e(
            ji,
            {
              columns: Ml,
              allColumns: s,
              hiddenColumnKeys: Pe.hiddenKeys,
              onToggleColumnVisible: Ye ? Oe : void 0,
              data: Cl,
              rowKey: L,
              loading: Po,
              density: Pe.density,
              motion: fe,
              selectedKeys: An ? rr : void 0,
              onSelectionChange: An ? (N, M) => {
                ba(N, M);
              } : void 0,
              sortState: Jt,
              onSortChange: (N, M) => {
                Va({ key: N, direction: M }), ir(1);
              },
              headerFilterMode: Zt,
              headerFilters: mt,
              onHeaderFilterChange: (N, M) => {
                ir(1), Qa(N, M), kr((W) => ({ ...W, [N]: M }));
              },
              headerFilterRender: (N) => {
                const M = Array.isArray(N.dataIndex) ? N.dataIndex.join(".") : String(N.dataIndex ?? N.key), W = Sr.find(
                  (ot) => ot.columnKey === N.key || ot.key === M
                );
                if (Zt) {
                  if (!W && !N.filterable) return null;
                } else if (!N.filterable) return null;
                const X = N.filterOptions ?? (W == null ? void 0 : W.options), ee = (W == null ? void 0 : W.type) ?? N.filterType ?? (X && X.length > 0 ? "select" : "text"), _e = (W == null ? void 0 : W.key) ?? M, xe = ni.includes(N.key);
                return /* @__PURE__ */ e(
                  Lp,
                  {
                    title: N.title,
                    filterType: ee,
                    filterOptions: X,
                    treeData: W == null ? void 0 : W.treeData,
                    multiple: W == null ? void 0 : W.multiple,
                    searchable: W == null ? void 0 : W.searchable,
                    placeholder: W == null ? void 0 : W.placeholder,
                    format: W == null ? void 0 : W.format,
                    highlighted: xe,
                    iconType: Zt ? "search" : "filter",
                    value: mt[_e],
                    onApply: (ot) => {
                      ir(1), Qa(_e, ot), kr((Te) => ({ ...Te, [_e]: ot }));
                    }
                  }
                );
              },
              activeFilterKeys: ni,
              activeFilterLabels: Pl,
              filterHighlightColor: Pe.filterHighlightColor,
              onFilterHighlightColorChange: Ye ? wt : void 0,
              columnWidths: Pe.columnWidths,
              onColumnResize: kt,
              columnFixed: Pe.columnFixed,
              onColumnPin: Mt,
              onColumnHide: Ye ? Oe : void 0,
              onResetColumns: Ye ? gt : void 0,
              onColumnReorder: Ye ? ye : void 0,
              treeData: ct,
              expandable: El,
              rowDraggable: !!(Ge != null && Ge.enabled),
              onRowDragEnd: Ge != null && Ge.enabled ? Tl : void 0,
              activeRowKey: _,
              onRowClick: R,
              onRow: A,
              onRowView: (N, M) => void _s(N, M),
              onEmptyReset: Za > 0 ? Ja : void 0,
              maxHeight: Rt ?? tl,
              className: "rounded-none border-0"
            }
          ) }),
          !S && y !== !1 && /* @__PURE__ */ e("div", { ref: Oo, className: "border-t border-[var(--abc-border)] px-4 py-3", children: T ? T({
            current: Dt,
            pageSize: Ut,
            total: Ss,
            mode: typeof y == "object" && y.mode ? y.mode : "offset"
          }) : typeof y == "object" ? /* @__PURE__ */ e(
            qn,
            {
              current: Dt,
              pageSize: Ut,
              pageSizeOptions: j,
              motion: fe,
              total: Ss,
              onChange: (N, M) => {
                ir(N), Bt(M);
              },
              ...y
            }
          ) : /* @__PURE__ */ e(
            qn,
            {
              current: Dt,
              pageSize: Ut,
              pageSizeOptions: j,
              motion: fe,
              total: Ss,
              onChange: (N, M) => {
                ir(N), Bt(M);
              }
            }
          ) })
        ] }),
        An && rr.length > 0 && /* @__PURE__ */ e(
          jp,
          {
            selectedKeys: rr,
            selectedRows: Zo,
            batchActions: Qo,
            extraContent: Yt == null ? void 0 : Yt(rr, Zo),
            motion: fe,
            onBatchDelete: Ns && (Ft || ne != null && ne.delete) ? () => void Jo(rr) : void 0,
            onClear: () => ba([], [])
          }
        ),
        /* @__PURE__ */ e(
          Ip,
          {
            open: !!_n,
            onClose: () => xs(null),
            record: _n,
            columns: s,
            viewTitle: Se ?? (k ? "详情" : "记录详情"),
            viewSize: Fe,
            viewLoading: ll,
            canEdit: Ta,
            onEditRecord: (N) => void fa(N),
            renderViewExtra: Le,
            renderViewFooter: nt
          }
        ),
        /* @__PURE__ */ e(
          _p,
          {
            open: da,
            onClose: () => Tn(!1),
            isEdit: Lr,
            currentRecord: Ia,
            container: J,
            dialogTitle: b ?? (k ? { add: "新增", edit: "编辑" } : { add: "新建记录", edit: "编辑记录" }),
            dialogSize: m,
            formLayout: h,
            formColumns: Al,
            formFields: ra,
            form: Et,
            formSchema: u,
            columns: s,
            formSubmitting: ul,
            formDetailLoading: bl,
            formError: ml,
            onSubmit: Il,
            draftEnabled: Ar,
            showDraftButton: !!(f != null && f.showDraftButton && Ar),
            showDraftBanner: fl,
            draftBannerMode: _a ? "auto-restored" : "prompt",
            onSaveDraft: Ar ? () => {
              Hr.saveDraft(Et.getValues()), Q.success("草稿已保存");
            } : void 0,
            onRestoreDraft: () => {
              const N = Hr.readDraft();
              N && Et.reset({ ...Kr(), ...N }), ua(!1);
            },
            onDiscardDraft: () => {
              Hr.clearDraft(), _a && Et.reset(Kr()), ua(!1);
            },
            submitButtonText: k ? "保存" : "确认提交",
            renderFormExtra: It,
            renderCustomForm: yt,
            onSuccessFetch: () => {
              Ke && Vt();
            }
          }
        )
      ]
    }
  );
}
const hg = Zc, gg = Zc;
function Op(t, r) {
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
function $p({
  title: t,
  description: r,
  triggerLabel: a,
  triggerIcon: n,
  triggerVariant: s = "primary",
  mode: o = "modal",
  size: d,
  maxWidthClass: c,
  footer: u,
  open: l,
  onOpenChange: b,
  summarySlot: m,
  emptySummaryHint: h,
  headerActions: f,
  modalHeaderActions: p,
  inlineInTestEnv: x,
  renderInlineContainer: w,
  renderSummaryContainer: k,
  className: v,
  children: C
}) {
  var A;
  const L = x ?? (typeof process < "u" && ((A = process.env) == null ? void 0 : A.NODE_ENV) === "test" || typeof import.meta < "u" && !1), [D, j] = $(!1), S = l !== void 0 ? l : D, y = (z) => {
    l === void 0 && j(z), b == null || b(z);
  };
  if (L)
    return w ? /* @__PURE__ */ e(tt, { children: w({
      title: t,
      description: r,
      headerActions: f,
      modalHeaderActions: p,
      summarySlot: m,
      className: v,
      children: C
    }) }) : /* @__PURE__ */ i(
      "section",
      {
        "data-slot": "pro-form-inline",
        className: g(
          "space-y-3 rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          v
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            (f || p) && /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center gap-2", children: [
              f,
              p
            ] })
          ] }),
          m,
          /* @__PURE__ */ e("div", { children: C })
        ]
      }
    );
  const R = /* @__PURE__ */ i(
    Ee,
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
  return /* @__PURE__ */ i(tt, { children: [
    k ? k({
      title: t,
      description: r,
      triggerButton: R,
      headerActions: f,
      summarySlot: m,
      emptySummaryHint: h,
      className: v
    }) : /* @__PURE__ */ i(
      "section",
      {
        "data-slot": "pro-form-summary",
        className: g(
          "rounded-[var(--abc-radius-lg)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] p-4 text-[var(--abc-fg)] shadow-[var(--abc-shadow-card)]",
          v
        ),
        children: [
          /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
            /* @__PURE__ */ i("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ e("h3", { className: "text-sm font-semibold text-[var(--abc-fg)]", children: t }),
              r && /* @__PURE__ */ e("p", { className: "mt-0.5 text-xs text-[var(--abc-fg-muted)]", children: r })
            ] }),
            /* @__PURE__ */ i("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: [
              f,
              R
            ] })
          ] }),
          m ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3", children: m }) : h ? /* @__PURE__ */ e("div", { className: "mt-3 border-t border-[var(--abc-border)] pt-3 text-xs text-[var(--abc-fg-muted)]", children: h }) : null
        ]
      }
    ),
    o === "drawer" ? /* @__PURE__ */ e(
      yn,
      {
        open: S,
        onClose: () => y(!1),
        title: t,
        description: r,
        size: Op(d, c),
        footer: u ?? p,
        className: c,
        children: C
      }
    ) : /* @__PURE__ */ e(
      Hb,
      {
        open: S,
        onClose: () => y(!1),
        title: t,
        description: r,
        footer: u ?? p,
        className: c,
        children: C
      }
    )
  ] });
}
const vg = $p, Fp = {
  searchPlaceholder: "过滤日志内容…",
  stickBottomLabel: "自动贴底",
  copyLabel: "复制",
  copiedLabel: "已复制",
  emptyText: "无符合筛选条件的日志。",
  clearSearchLabel: "清空搜索",
  formatLineCount: (t, r) => `${t} / ${r} 行`
}, Wp = ["all", "info", "warn", "error"];
function Kp({
  logs: t,
  heightClass: r = "h-[440px]",
  estimateSize: a = 26,
  overscan: n = 12,
  defaultStickBottom: s = !1,
  labels: o,
  className: d
}) {
  var K;
  const c = { ...Fp, ...o }, u = ve.useRef(null), [l, b] = ve.useState(""), [m, h] = ve.useState("all"), [f, p] = ve.useState(s), [x, w] = ve.useState(!1), [k, v] = ve.useState(0), [C, L] = ve.useState(0), D = typeof process < "u" && ((K = process.env) == null ? void 0 : K.NODE_ENV) === "test" || typeof import.meta < "u" && !1, j = ve.useMemo(() => t.map((E, I) => {
    if (typeof E == "string") {
      const P = E.toLowerCase(), H = P.includes("error") ? "error" : P.includes("warn") ? "warn" : "info";
      return { seq: I + 1, level: H, message: E };
    }
    return {
      seq: E.seq ?? I + 1,
      level: E.level || "info",
      message: E.message || "",
      detail: E.detail,
      created_at: E.created_at
    };
  }), [t]), S = ve.useMemo(() => {
    const E = l.trim().toLowerCase();
    return j.filter((I) => {
      var P;
      return m !== "all" && ((P = I.level) == null ? void 0 : P.toLowerCase()) !== m ? !1 : E ? I.message.toLowerCase().includes(E) || (I.created_at ? I.created_at.toLowerCase().includes(E) : !1) || (I.detail ? JSON.stringify(I.detail).toLowerCase().includes(E) : !1) : !0;
    });
  }, [j, l, m]);
  ve.useEffect(() => {
    const E = u.current;
    if (!E) return;
    const I = () => {
      E.clientHeight > 0 && L(E.clientHeight);
    };
    if (I(), typeof ResizeObserver > "u") return;
    const P = new ResizeObserver(I);
    return P.observe(E), () => P.disconnect();
  }, []), ve.useEffect(() => {
    const E = u.current;
    !f || !E || S.length === 0 || (E.scrollTop = E.scrollHeight, v(E.scrollTop));
  }, [S.length, f]);
  const y = !D && S.length > 80 && C > 0, T = S.length * a, { startIndex: _, endIndex: R } = ve.useMemo(() => {
    if (!y)
      return { startIndex: 0, endIndex: Math.max(0, S.length - 1) };
    const E = Math.ceil(C / a), I = Math.floor(k / a) - n, P = Math.max(0, I), H = Math.min(S.length - 1, Math.floor(k / a) + E + n);
    return { startIndex: P, endIndex: H };
  }, [y, S.length, C, a, k, n]), A = ve.useMemo(() => S.length === 0 ? [] : S.slice(_, R + 1).map((E, I) => ({
    log: E,
    index: _ + I
  })), [S, _, R]), z = async () => {
    const E = S.map(
      (I) => `[${I.created_at || "LOG"}][${(I.level || "INFO").toUpperCase()}] ${I.message} ${I.detail ? JSON.stringify(I.detail) : ""}`.trim()
    ).join(`
`);
    try {
      await navigator.clipboard.writeText(E), w(!0), setTimeout(() => w(!1), 2e3);
    } catch {
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      "data-slot": "pro-log-viewer",
      className: g(
        "flex flex-col overflow-hidden rounded-[var(--abc-radius-lg)] border border-slate-800 bg-slate-950 font-mono text-slate-200 shadow-md",
        d
      ),
      children: [
        /* @__PURE__ */ i("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2 text-xs", children: [
          /* @__PURE__ */ i("div", { className: "flex min-w-44 flex-1 items-center gap-2", children: [
            /* @__PURE__ */ i("div", { className: "relative max-w-sm flex-1", children: [
              /* @__PURE__ */ e(
                Ot,
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
                  onChange: (E) => b(E.target.value),
                  placeholder: c.searchPlaceholder,
                  className: "h-7 w-full rounded-md border border-slate-700 bg-slate-950 pl-8 pr-7 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
                }
              ),
              l && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  "aria-label": c.clearSearchLabel,
                  onClick: () => b(""),
                  className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer",
                  children: /* @__PURE__ */ e(Ct, { className: "h-3.5 w-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 p-0.5", children: Wp.map((E) => /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => h(E),
                className: g(
                  "rounded px-2 py-0.5 text-[10px] font-semibold uppercase transition cursor-pointer",
                  m === E ? E === "error" ? "bg-rose-500/20 text-rose-300" : E === "warn" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/25 text-blue-300" : "text-slate-400 hover:text-slate-200"
                ),
                children: E
              },
              E
            )) })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex items-center gap-3 text-[11px] text-slate-400", children: [
            /* @__PURE__ */ e("span", { className: "tabular-nums", children: c.formatLineCount(S.length, j.length) }),
            /* @__PURE__ */ i("label", { className: "flex cursor-pointer items-center gap-1.5 select-none hover:text-slate-200", children: [
              /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: f,
                  onChange: (E) => p(E.target.checked),
                  className: "h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-0"
                }
              ),
              /* @__PURE__ */ e("span", { children: c.stickBottomLabel })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: () => void z(),
                className: "flex items-center gap-1 rounded border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 transition hover:bg-slate-700 hover:text-white cursor-pointer",
                children: x ? /* @__PURE__ */ i(tt, { children: [
                  /* @__PURE__ */ e(Nt, { className: "h-3 w-3 text-emerald-400", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { className: "text-emerald-300", children: c.copiedLabel })
                ] }) : /* @__PURE__ */ i(tt, { children: [
                  /* @__PURE__ */ e(ga, { className: "h-3 w-3", "aria-hidden": "true" }),
                  /* @__PURE__ */ e("span", { children: c.copyLabel })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            ref: u,
            onScroll: (E) => v(E.currentTarget.scrollTop),
            className: g("relative w-full overflow-auto", r),
            children: S.length === 0 ? /* @__PURE__ */ e("div", { className: "flex h-full items-center justify-center p-8 text-xs text-slate-500", children: c.emptyText }) : /* @__PURE__ */ e(
              "div",
              {
                style: y ? { height: `${T}px`, width: "100%", position: "relative" } : { width: "100%" },
                children: A.map(({ log: E, index: I }) => {
                  var G;
                  const P = ((G = E.level) == null ? void 0 : G.toLowerCase()) || "info", H = P === "error" || P === "fatal", O = P === "warn" || P === "warning";
                  return /* @__PURE__ */ i(
                    "div",
                    {
                      "data-index": I,
                      style: y ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${a}px`,
                        transform: `translateY(${I * a}px)`
                      } : void 0,
                      className: g(
                        "flex items-center gap-2.5 px-3 py-1 text-xs leading-5 transition-colors hover:bg-slate-900/60",
                        y ? "overflow-hidden whitespace-nowrap" : "items-start",
                        H ? "bg-rose-950/20 text-rose-200" : O ? "bg-amber-950/15 text-amber-200" : "text-slate-300"
                      ),
                      children: [
                        /* @__PURE__ */ e("span", { className: "w-10 shrink-0 select-none text-right text-[10px] text-slate-600 tabular-nums", children: E.seq }),
                        E.created_at && /* @__PURE__ */ e("span", { className: "shrink-0 select-none text-[11px] text-slate-500 tabular-nums", children: E.created_at.length >= 19 ? E.created_at.slice(11, 19) : E.created_at }),
                        /* @__PURE__ */ e(
                          "span",
                          {
                            className: g(
                              "inline-block w-12 shrink-0 select-none rounded px-1 py-0.5 text-center text-[9px] font-bold uppercase leading-none",
                              H ? "bg-rose-500/25 text-rose-300" : O ? "bg-amber-500/25 text-amber-300" : "bg-slate-800 text-slate-400"
                            ),
                            children: P.slice(0, 5)
                          }
                        ),
                        /* @__PURE__ */ i(
                          "div",
                          {
                            className: g(
                              "min-w-0 flex-1",
                              y ? "truncate" : "break-all whitespace-pre-wrap"
                            ),
                            title: y ? `${E.message}${E.detail ? ` ${JSON.stringify(E.detail)}` : ""}` : void 0,
                            children: [
                              /* @__PURE__ */ e("span", { children: E.message }),
                              E.detail && Object.keys(E.detail).length > 0 && /* @__PURE__ */ e("span", { className: "ml-2 text-[11px] text-slate-500", children: JSON.stringify(E.detail) })
                            ]
                          }
                        )
                      ]
                    },
                    `${E.seq ?? I}-${I}`
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
const xg = Kp, Hp = {
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
}, Up = {
  blue: "bg-blue-500/15 text-blue-500 dark:text-blue-300",
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  purple: "bg-purple-500/15 text-purple-600 dark:text-purple-300",
  amber: "bg-amber-500/15 text-amber-600 dark:text-amber-300"
};
function yg({
  open: t,
  onOpenChange: r,
  enableShortcut: a = !0,
  entityMatchers: n = [],
  pages: s = [],
  onNavigate: o,
  actions: d = [],
  labels: c,
  searchQuery: u,
  onSearchQueryChange: l
}) {
  const b = { ...Hp, ...c }, [m, h] = ve.useState(!1), [f, p] = ve.useState(""), [x, w] = ve.useState(0), k = ve.useRef(null), v = ve.useRef([]), C = typeof t == "boolean", L = C ? t : m, D = ve.useCallback(
    (I) => {
      C || h(I), r == null || r(I);
    },
    [C, r]
  ), j = u !== void 0 ? u : f, S = ve.useCallback(
    (I) => {
      u === void 0 && p(I), l == null || l(I);
    },
    [u, l]
  );
  ve.useEffect(() => {
    if (!a || typeof window > "u") return;
    const I = (P) => {
      (P.metaKey || P.ctrlKey) && P.key.toLowerCase() === "k" && (P.preventDefault(), D(!L));
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [a, L, D]), ve.useEffect(() => {
    if (!L) return;
    w(0);
    const I = setTimeout(() => {
      var P;
      (P = k.current) == null || P.focus();
    }, 10);
    return () => clearTimeout(I);
  }, [L]);
  const y = j.trim(), T = ve.useMemo(() => y ? n.filter((I) => I.match ? I.match(y) : I.prefix ? y.startsWith(I.prefix) : !1) : [], [n, y]), _ = ve.useMemo(() => y ? s.filter(
    (I) => dr(`${I.label} ${I.group ?? ""} ${I.to} ${I.keywords ?? ""}`, y)
  ) : s, [s, y]), R = ve.useMemo(() => y ? d.filter(
    (I) => dr(`${I.label} ${I.group ?? ""} ${I.keywords ?? ""}`, y)
  ) : d, [d, y]), A = ve.useCallback(
    (I) => {
      D(!1), S(""), I();
    },
    [D, S]
  ), z = ve.useMemo(() => {
    const I = [];
    for (const P of T)
      I.push({
        key: `entity-${P.id}-${y}`,
        trigger: () => A(() => P.onSelect(y))
      });
    for (const P of _)
      I.push({
        key: `page-${P.id ?? P.to}`,
        trigger: () => A(() => {
          P.onSelect ? P.onSelect() : o == null || o(P.to, P);
        })
      });
    for (const P of R)
      I.push({
        key: `action-${P.id}`,
        trigger: () => A(P.onSelect)
      });
    return I;
  }, [T, _, R, y, A, o]);
  ve.useEffect(() => {
    w(0);
  }, [y]), ve.useEffect(() => {
    const I = v.current[x];
    I && typeof I.scrollIntoView == "function" && I.scrollIntoView({ block: "nearest" });
  }, [x]);
  const K = (I) => {
    if (I.key === "ArrowDown") {
      I.preventDefault(), z.length > 0 && w((P) => (P + 1) % z.length);
      return;
    }
    if (I.key === "ArrowUp") {
      I.preventDefault(), z.length > 0 && w((P) => (P - 1 + z.length) % z.length);
      return;
    }
    if (I.key === "Enter") {
      const P = z[x];
      P && (I.preventDefault(), P.trigger());
    }
  };
  let E = 0;
  return /* @__PURE__ */ e(
    yr,
    {
      open: L,
      onClose: () => D(!1),
      closable: !1,
      draggable: !1,
      fullscreenable: !1,
      width: "min(680px, 92vw)",
      "aria-label": b.dialogLabel,
      className: "overflow-hidden [&>[data-dialog-body]]:p-0",
      children: /* @__PURE__ */ i(
        "div",
        {
          "data-slot": "pro-command-palette",
          className: "flex flex-col bg-[var(--abc-bg-elevated)] text-[var(--abc-fg)]",
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center border-b border-[var(--abc-border)] px-4", children: [
              /* @__PURE__ */ e(Ot, { className: "mr-2.5 h-4 w-4 shrink-0 text-[var(--abc-fg-muted)]", "aria-hidden": "true" }),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: k,
                  type: "text",
                  value: j,
                  onChange: (I) => S(I.target.value),
                  onKeyDown: K,
                  placeholder: b.searchPlaceholder,
                  "aria-label": b.searchPlaceholder,
                  className: "h-12 w-full bg-transparent text-sm text-[var(--abc-fg)] placeholder:text-[var(--abc-fg-placeholder)] focus:outline-none"
                }
              ),
              /* @__PURE__ */ e("kbd", { className: "hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] sm:inline-block", children: "ESC" })
            ] }),
            /* @__PURE__ */ e("div", { role: "listbox", className: "max-h-96 space-y-2 overflow-y-auto p-2", children: z.length === 0 ? /* @__PURE__ */ e("div", { className: "py-8 text-center text-xs text-[var(--abc-fg-muted)]", children: b.emptyText }) : /* @__PURE__ */ i(tt, { children: [
              T.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-primary)]", children: b.entityGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: T.map((I) => {
                  const P = E++, H = P === x, O = Up[I.tone ?? "blue"];
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (G) => {
                        v.current[P] = G;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": H,
                      "data-selected": H ? "true" : void 0,
                      onMouseEnter: () => w(P),
                      onClick: () => A(() => I.onSelect(y)),
                      className: g(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        H ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg)] hover:bg-[var(--abc-bg-subtle)]"
                      ),
                      children: [
                        I.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: I.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate font-mono", children: I.renderLabel ? I.renderLabel(y) : /* @__PURE__ */ i(tt, { children: [
                          I.labelPrefix ? `${I.labelPrefix} ` : "",
                          /* @__PURE__ */ e("strong", { className: "font-semibold", children: y })
                        ] }) }),
                        /* @__PURE__ */ e("span", { className: g("rounded px-1.5 py-0.5 text-[10px] font-mono", O), children: b.enterKeyLabel })
                      ]
                    },
                    `entity-${I.id}`
                  );
                }) })
              ] }),
              _.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: b.pagesGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: _.map((I) => {
                  const P = E++, H = P === x;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (O) => {
                        v.current[P] = O;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": H,
                      "data-selected": H ? "true" : void 0,
                      onMouseEnter: () => w(P),
                      onClick: () => A(() => {
                        I.onSelect ? I.onSelect() : o == null || o(I.to, I);
                      }),
                      className: g(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        H ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
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
              R.length > 0 && /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ e("div", { className: "px-2.5 py-1 text-[11px] font-semibold text-[var(--abc-fg-muted)]", children: b.actionsGroupHeading }),
                /* @__PURE__ */ e("div", { className: "space-y-0.5", children: R.map((I) => {
                  const P = E++, H = P === x;
                  return /* @__PURE__ */ i(
                    "button",
                    {
                      ref: (O) => {
                        v.current[P] = O;
                      },
                      type: "button",
                      role: "option",
                      "aria-selected": H,
                      "data-selected": H ? "true" : void 0,
                      onMouseEnter: () => w(P),
                      onClick: () => A(I.onSelect),
                      className: g(
                        "flex w-full cursor-pointer items-center gap-2.5 rounded-[var(--abc-radius-md)] px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        I.danger ? H ? "bg-red-500/15 text-[var(--abc-danger)]" : "text-[var(--abc-danger)] hover:bg-red-500/10" : H ? "bg-[var(--abc-primary-soft)] text-[var(--abc-primary)]" : "text-[var(--abc-fg-secondary)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)]"
                      ),
                      children: [
                        I.icon && /* @__PURE__ */ e("span", { className: "shrink-0", children: I.icon }),
                        /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: I.label }),
                        H && /* @__PURE__ */ e(oc, { className: "h-3.5 w-3.5 shrink-0 opacity-70" })
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
                  b.navigateHint
                ] }),
                /* @__PURE__ */ i("span", { children: [
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
function wg({
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
      className: g(
        "group inline-flex h-8.5 items-center gap-2 rounded-[var(--abc-radius-md)] border border-[var(--abc-border)] bg-[var(--abc-bg-surface)] px-2.5 text-xs text-[var(--abc-fg-muted)] shadow-2xs transition cursor-pointer",
        "hover:border-[var(--abc-border-strong)] hover:bg-[var(--abc-bg-subtle)] hover:text-[var(--abc-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--abc-primary)]",
        s
      ),
      ...o,
      children: [
        /* @__PURE__ */ e(Ot, { className: "h-3.5 w-3.5 shrink-0 text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)]", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: r }),
        /* @__PURE__ */ e("span", { className: "sm:hidden", children: a }),
        /* @__PURE__ */ e("kbd", { className: "ml-1 hidden rounded border border-[var(--abc-border)] bg-[var(--abc-bg-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--abc-fg-muted)] group-hover:text-[var(--abc-fg)] sm:inline-block", children: d ? "⌘K" : "Ctrl+K" })
      ]
    }
  );
}
export {
  Ps as ABC_BRAND_PRESETS,
  ci as ABC_DENSITY_PRESETS,
  ap as ABC_HEADER_HEIGHT_BY_SIZE,
  en as ABC_MOTION_PRESETS,
  li as ABC_RADIUS_PRESETS,
  rp as ABC_SIDEBAR_WIDTH_BY_SIZE,
  Jp as ABC_SIZE_PRESETS,
  yc as AbcConfirmHost,
  nh as AbcProvider,
  em as AbcToastViewport,
  Nh as ActionCard,
  Gh as Alert,
  Wh as AsyncInlineError,
  Uh as AttentionList,
  Si as AuroraBackground,
  bp as AuthLayout,
  xm as Avatar,
  Zn as BYTE_UNITS,
  Ac as BYTE_UNIT_FACTORS,
  fh as Badge,
  _h as BentoCard,
  Ch as BentoGrid,
  ki as BorderBeam,
  Ba as BrandLogoBlock,
  Ih as Breadcrumb,
  Ee as Button,
  jh as ByteQuotaInput,
  Xn as Card,
  Tm as CardContent,
  Im as CardDescription,
  Mm as CardFooter,
  Cm as CardHeader,
  _m as CardTitle,
  wh as CheckCard,
  yh as CheckCardGroup,
  za as Checkbox,
  Oh as Collapse,
  kh as CollapsibleCard,
  up as CommandPalette,
  wg as CommandTriggerButton,
  Vh as ConfirmDialog,
  rh as ConfirmProvider,
  oh as CopyButton,
  Oc as CopyableCode,
  wi as CopyableText,
  lg as CrudConfigPage,
  ig as CrudFormLayout,
  pg as CrudSearchForm,
  gg as CrudTable,
  lh as CursorPagination,
  np as DEFAULT_ABC_LAYOUT_SETTINGS,
  Gt as DEFAULT_ABC_THEME,
  Jn as DURATION_UNITS,
  Lc as DURATION_UNIT_FACTORS,
  gn as DatePicker,
  vn as DateRangePicker,
  $c as DescriptionList,
  Fh as DescriptionListItem,
  zh as Descriptions,
  yr as Dialog,
  xo as DialogContent,
  vo as DialogContext,
  ko as DialogDescription,
  wo as DialogFooter,
  yo as DialogHeader,
  No as DialogTitle,
  eg as DictSelect,
  tg as DictTag,
  hh as Divider,
  yn as Drawer,
  Tf as DrawerBody,
  If as DrawerDescription,
  Mf as DrawerFooter,
  Cf as DrawerHeader,
  _f as DrawerTitle,
  pn as Dropdown,
  ip as DualColumnNav,
  Bh as DurationQuotaInput,
  pm as EmptyState,
  Wf as ErrorBoundary,
  dg as FilterPillGroup,
  Mp as FilterToolbar,
  vg as FormDrawerDialog,
  Ao as FormField,
  Lp as HeaderColumnFilterPopover,
  xi as ICON_CATALOG,
  jr as Icon,
  ih as IconBadge,
  yi as IconPicker,
  xn as ImagePreview,
  Ec as ImageUpload,
  pt as Input,
  cs as InputNumber,
  Hf as InspectorPanel,
  La as Kbd,
  dp as KeepAliveContainer,
  Wm as Label,
  Lf as Loading,
  Hh as LoadingStateCard,
  xh as MetricCard,
  Hb as Modal,
  og as MultiImageFieldControl,
  lp as MultiTabBar,
  va as NotificationBanner,
  qh as OneTimeSecretDialog,
  Zh as PageContainer,
  qn as Pagination,
  Qh as Permission,
  vp as PermissionGuard,
  Eo as Popover,
  Sh as PricingCard,
  Dp as ProColumnSettingsPopover,
  yg as ProCommandPalette,
  cg as ProConfigForm,
  Tp as ProConfigPage,
  Cp as ProCrudFormFieldControl,
  Xc as ProCrudFormLayout,
  _p as ProCrudFormModal,
  Bp as ProCrudSearchForm,
  hg as ProCrudTable,
  Ip as ProCrudViewModal,
  jp as ProFloatingBatchBar,
  $p as ProFormContainer,
  xp as ProFormLayout,
  Sp as ProIconFieldControl,
  Jh as ProLayout,
  Kp as ProLogViewer,
  qc as ProMultiImageUpload,
  Rp as ProRowActionsOverflow,
  Zc as ProTable,
  Of as Progress,
  ug as QuickSelectBar,
  Dr as RadioGroup,
  Kh as ReadErrorBanner,
  bg as ReasonedActionDialog,
  mg as ReasonedActionDrawer,
  Ff as Result,
  bm as RichIconText,
  Km as SearchInput,
  Mh as SegmentedControl,
  ur as Select,
  ch as SelectField,
  Us as SidebarNav,
  zt as Skeleton,
  uh as SkeletonCard,
  mh as SkeletonChart,
  bh as SkeletonTable,
  Lh as SliderVerify,
  dh as SmartPagination,
  gh as Space,
  Xh as SplitInspectorLayout,
  vh as SpotlightCard,
  pa as StatusTag,
  Th as Steps,
  cr as Switch,
  hi as TONE_ICONS,
  Yh as TabErrorBoundary,
  Yf as Table,
  Xf as TableBody,
  tp as TableCaption,
  ep as TableCell,
  ji as TableCore,
  Zf as TableFooter,
  Qf as TableHead,
  qf as TableHeader,
  Jf as TableRow,
  Ph as Tabs,
  ym as Tag,
  df as TagInput,
  mn as Textarea,
  $i as ThemeCustomizer,
  Nf as ThemeSwitcher,
  $h as Timeline,
  Qb as ToastContainer,
  Jb as ToastItemView,
  er as Tooltip,
  Bi as TopHorizontalNav,
  Ah as Tree,
  hn as TreeSelect,
  Eh as TreeSelectField,
  xg as VirtualLogViewer,
  Df as Watermark,
  Gn as abcConfirm,
  _o as abcToast,
  Qt as applyAbcThemeToDocument,
  Zr as baseFieldControlClass,
  Zs as buildCalendarMonthGrid,
  Ep as buildCsvContent,
  Qp as buttonVariants,
  Dn as cleanQueryObject,
  qb as clearToasts,
  g as cn,
  Ra as collectAllExpandableKeys,
  ho as computeTreeCheckState,
  eh as confirm,
  ls as copyToClipboard,
  bs as createProTableApi,
  rg as createTableApi,
  Co as dismissToast,
  Ki as downloadTableCsv,
  tb as filterAndSortClientRows,
  Xu as filterTreeNodes,
  Qu as filterTreeSelectNodes,
  Kc as findBreadcrumbChain,
  ln as flattenNodeText,
  eb as flattenVisibleTreeNodes,
  fg as formatFilterText,
  Rn as formatIsoDate,
  Dh as formatQuotaBytes,
  Rh as formatQuotaDuration,
  bi as formatTreeCheckedStrategy,
  Yu as getCharInitial,
  us as getNestedValue,
  is as getOverlayPortalContainer,
  qu as getPinyinInitials,
  sg as isFieldRequired,
  Rr as isProApiFailure,
  Yc as isSchemaFieldRequired,
  zc as isSvgSource,
  dr as matchKeywordWithPinyin,
  qr as menuContainsPath,
  oo as normalizeProListResponse,
  Zu as normalizeTreeSelectData,
  ro as parseSelectChildren,
  Gb as pauseToast,
  jc as pickBestByteUnit,
  Bc as pickBestDurationUnit,
  Aa as pushToast,
  rb as readQueryFromUrlSearch,
  sh as registerAbcIcons,
  Wc as renderBuiltInValue,
  Da as resolveAbcThemeMode,
  Oa as resolveFieldKey,
  Ju as resolveTreeCheckedStateFromValue,
  Yb as resumeToast,
  ph as tagVariants,
  ah as toast,
  lc as toggleTreeNodeChecked,
  Gu as transitionAbcTheme,
  At as useAbcConfig,
  Gc as useAbcDict,
  am as useAbcDrawerCascadeMode,
  Ie as useAbcMotion,
  Ro as useAbcPermission,
  Be as useAbcSize,
  wf as useColorScheme,
  th as useConfirm,
  _r as useControllableState,
  ng as useCrudTable,
  Wb as useDialog,
  zb as useDraftStorage,
  Ha as useFloatingPosition,
  rm as useOptionalAbcConfig,
  ia as usePresence,
  Np as useProForm,
  wp as useProTable,
  yp as useProTableApi,
  ag as useTableApi,
  Ob as useTableSettings,
  ab as writeQueryToUrlSearch
};
//# sourceMappingURL=index.js.map
