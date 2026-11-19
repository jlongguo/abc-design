import '@testing-library/jest-dom/vitest'

// jsdom 缺少 ResizeObserver 时为 ReactFlow 画布单测提供最小安全 polyfill
if (typeof globalThis.ResizeObserver === 'undefined') {
  class ResizeObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  globalThis.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver
}
