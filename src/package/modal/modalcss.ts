import { ModalReactData, VxeModal, VxeModalProps } from '@/type/modal'
import { useSize } from '../hook/size'
// type allModalPropTypes = typeof VxeModalPropTypes

export function getModalWrapClass(props: VxeModalProps, reactData: ModalReactData): ComputedRef {
  const vSize = useSize(props)
  return computed(() => {
    const { className, type, animat, loading, status, lockScroll, lockView, mask, resize } = props
    const { inited, zoomLocat, modalTop, contentVisible, visible } = reactData
    const arr: Array<string | Object> = [
      'vxe-modal--wrapper',
      `type--${type}`,
      className || '', //它这种写法是使用父级选择器&
      {
        //这么写有什么好处吗
        [`size--${vSize}`]: vSize, //大小,这里是指字体大小
        [`status--${status}`]: status, //颜色,这里是指模态框的类型，是警告还是成功，表示背景色
        'is--animat': animat, //动效制作
        'lock--scroll': lockScroll, //锁住滚动
        'lock--view': lockView, //
        'is--resize': resize, //
        'is--mask': mask, //
        'is--maximize': zoomLocat, //
        'is--visible': contentVisible, //contentVisible
        'is--active': visible, //
        'is--loading': loading,
      },
    ] //
    return arr
  })
}
export function getModalWrapStyle(props: VxeModalProps, reactData: ModalReactData) {
  return computed(() => {
    let style = {}
    return style
  })
}
