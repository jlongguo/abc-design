import { jsx as b } from "react/jsx-runtime";
import S, { useRef as A, useState as D, useEffect as M, useImperativeHandle as $ } from "react";
import q from "@uiw/react-md-editor";
import { useAbcConfig as F } from "@abc-design/react";
import { clsx as N } from "clsx";
import { twMerge as O } from "tailwind-merge";
function i() {
  if (typeof document > "u") return null;
  const n = document.documentElement, e = n.getAttribute("data-abc-theme") || n.getAttribute("data-color-mode");
  return e === "dark" || e === "light" ? e : n.classList.contains("dark") ? "dark" : null;
}
const B = S.forwardRef(
  function({
    value: e = "",
    onChange: a,
    height: p = 450,
    preview: h = "live",
    colorMode: o = "auto",
    hideToolbar: k = !1,
    placeholder: w,
    disabled: s = !1,
    className: x,
    editorProps: c
  }, v) {
    const d = A(null), { resolvedTheme: g } = F(), [E, u] = D(() => i());
    M(() => {
      if (o !== "auto" || typeof document > "u" || typeof MutationObserver > "u")
        return;
      u(i());
      const r = new MutationObserver(() => {
        u(i());
      });
      return r.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["class", "data-abc-theme", "data-color-mode"]
      }), () => r.disconnect();
    }, [o]);
    const m = o === "dark" || o === "light" ? o : g === "dark" || E === "dark" ? "dark" : "light";
    return $(v, () => ({
      insertText(r) {
        var l;
        const t = (l = d.current) == null ? void 0 : l.querySelector("textarea"), f = typeof document < "u" && document.activeElement === t, y = f && t ? t.selectionStart : e.length, T = f && t ? t.selectionEnd : e.length, R = `${e.slice(0, y)}${r}${e.slice(T)}`;
        a == null || a(R);
      },
      focus() {
        var r, t;
        (t = (r = d.current) == null ? void 0 : r.querySelector("textarea")) == null || t.focus();
      }
    })), /* @__PURE__ */ b(
      "div",
      {
        ref: d,
        "data-testid": "markdown-editor-wrapper",
        "data-color-mode": m,
        className: O(
          N(
            "w-full overflow-hidden rounded-[var(--abc-radius-lg,0.75rem)] border border-slate-200 bg-white shadow-xs transition-colors dark:border-slate-700 dark:bg-slate-900",
            s && "pointer-events-none opacity-60",
            x
          )
        ),
        children: /* @__PURE__ */ b(
          q,
          {
            value: e,
            onChange: s ? void 0 : a,
            height: p,
            preview: h,
            hideToolbar: k,
            textareaProps: {
              placeholder: w,
              disabled: s,
              ...c == null ? void 0 : c.textareaProps
            },
            "data-color-mode": m,
            className: "w-full",
            ...c
          }
        )
      }
    );
  }
);
export {
  B as MarkdownEditor,
  B as default
};
//# sourceMappingURL=index.js.map
