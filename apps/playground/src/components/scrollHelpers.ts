/**
 * 现代浏览器滚动完成等待与特性探测工具
 * - 优先使用 Element.scrollIntoView 返回的原生 Promise；
 * - 旧版浏览器自动降级为监听滚动容器的 scrollend + 空闲超时兜底。
 */
export function supportsScrollTargetGroup(): boolean {
  if (typeof window === 'undefined' || typeof CSS === 'undefined' || !CSS.supports) return false
  return CSS.supports('scroll-target-group: auto')
}

export function supportsHiddenUntilFound(): boolean {
  if (typeof HTMLElement === 'undefined') return false
  return 'onbeforematch' in HTMLElement.prototype
}

export function findNearestScrollContainer(element: HTMLElement | null): HTMLElement | Window {
  if (typeof window === 'undefined' || !element) return typeof window !== 'undefined' ? window : ({} as Window)
  let cur: HTMLElement | null = element.parentElement
  while (cur && cur !== document.body) {
    const style = window.getComputedStyle(cur)
    if (/(auto|scroll)/.test(style.overflowY)) {
      return cur
    }
    cur = cur.parentElement
  }
  return window
}

export function scrollIntoViewAsync(
  element: HTMLElement,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' }
): Promise<void> {
  const scroller = findNearestScrollContainer(element)
  const rawResult = element.scrollIntoView(options) as unknown

  if (rawResult instanceof Promise) {
    return rawResult.then(() => undefined)
  }

  return new Promise<void>((resolve) => {
    let timerId: number | undefined

    const finish = () => {
      if (timerId !== undefined) window.clearTimeout(timerId)
      scroller.removeEventListener('scrollend', finish)
      scroller.removeEventListener('scroll', onScroll)
      resolve()
    }

    const onScroll = () => {
      if (timerId !== undefined) window.clearTimeout(timerId)
      timerId = window.setTimeout(finish, 110)
    }

    scroller.addEventListener('scrollend', finish, { once: true })
    scroller.addEventListener('scroll', onScroll, { passive: true })
    timerId = window.setTimeout(finish, 110)
  })
}
