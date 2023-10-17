import { Subject } from 'rxjs'
import { System } from './system'
import { ComponentPublicInstance } from 'vue'

export type baseConstructor = {
  props: any
  context: {
    attrs: any
    slots: any
  }
}
export type Context = {
  slots: any
  attrs: any
}
//一个表格 一个表单
type ParentCom<T> = Base<T> & {
  [key: string]: any
}
export class Base<T> {
  comId?: number //组件唯一标识
  comRef?: any
  styleConfig = { show: false, rootStyle: {} }
  protected styleComputed = {}
  childrenCom = [] //子组件
  parentCom?: any
  eventSubject = new Subject() //事件发射器   {event}
  behaviorSubject = new Subject() //行为发射器
  props: T
  context: Context
  $system?: System
  $refs: any
  constructor(componentConfig: baseConstructor) {
    this.props = componentConfig.props
    this.context = componentConfig.context
  }
  initStyleConfig() {
    this.styleConfig.show = true
  }
  //组件聚焦
  focus() {}
  dispatchEvent() {}
  dispatchBehavior() {}
  initChildren() {}
  async onMounted(instance: ComponentPublicInstance) {
    const $refs = instance.$refs
    this.$refs = $refs
  }
  async onUnmounted() {}
  hidden() {}
  destroy() {}
  showBefore() {}
  destroyBefore() {}
}
