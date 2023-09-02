//获取页面级别的scrollTop，scrollLeft
export function getDomNode() {
  const bodyDom = document.body
  const docElement = document.documentElement
  return {
    scrollTop: docElement.scrollTop || bodyDom.scrollTop,
    scrollLeft: docElement.scrollLeft || bodyDom.scrollLeft,
    visibleHeight: docElement.clientHeight || bodyDom.clientHeight,
    visibleWidth: docElement.clientWidth || bodyDom.clientWidth,
  }
}
