import '@testing-library/jest-dom/vitest'

// 为 JSDOM 补充 IntersectionObserver / ResizeObserver 基础桩以完整挂载全站交互页面
if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  } as unknown as typeof IntersectionObserver
}

if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver
}
