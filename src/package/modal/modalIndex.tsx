//设计xfModal

import { GlobalConfig } from '..'
import { PropType, Teleport, Component } from 'vue'
import modalHeader from './modalHeader'
import modalFooter from './modalFooter'
import XEUtils from 'xe-utils'
import {
  VxeModalConstructor, //constructor的作用是什么呢
  VxeModalPropTypes, //传入的外部数据,是这个组件的外部属性
  ModalReactData, //
  VxeModalEmits, //
  ModalEventTypes, //模态框的事件类型
  //   VxeButtonInstance,
  ModalMethods, //模态框的方法
  ModalPrivateRef, //
  VxeModalMethods,
  VxeModalProps,
  ModalType, //模态框的方法
} from '@/type/all'
import { useSize } from '../hook/size'
import { VNodeStyle } from '@/type/component'
import { getModalWrapClass, getModalWrapStyle } from './modalcss'
import modalProp from './modalProp'
import XfModal from './modalClass'
export default defineComponent({
  props: modalProp,
  setup(props, context) {
    const refElem = ref() as Ref<HTMLDivElement>
    //@ts-ignore
    const $xemodal = reactive(new XfModal({ props: props, context: context }, refElem))
    const reactData = $xemodal.reactData
    const renderVN = () => {
      return <div></div>
    }
    return () => {
      return renderVN()
    }
  },
})
