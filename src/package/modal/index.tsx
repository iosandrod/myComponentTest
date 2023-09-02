//设计xfModal

import { GlobalConfig } from '..'
import { PropType, Teleport, Component } from 'vue'
import test from './test'
import {
  VxeModalConstructor, //constructor的作用是什么呢
  VxeModalPropTypes, //传入的外部数据,是这个组件的外部属性
  ModalReactData, //
  VxeModalEmits, //
  ModalEventTypes, //模态框的事件类型
  //   VxeButtonInstance,
  ModalMethods, //模态框的方法
  ModalPrivateRef, //
  VxeModalMethods, //模态框的方法
} from '@/type/all'
import { useSize } from '../hook/size'
import { VNodeStyle } from '@/type/component'
export default defineComponent({
  name: 'XfModal',
  props: {
    modelValue: Boolean,
    id: String,
    type: {
      type: String,
      default: 'modal',
    },
    loading: {
      type: Boolean,
      default: null,
    },
    status: String,
    iconStatus: String,
    className: String,
    top: {
      type: [Number, String],
      default: () => GlobalConfig.modal.top,
    },
    position: [String, Object],
    title: String as PropType<VxeModalPropTypes.Title>,
    duration: {
      type: [Number, String] as PropType<VxeModalPropTypes.Duration>,
      default: () => GlobalConfig.modal.duration,
    },
    message: [Number, String] as PropType<VxeModalPropTypes.Message>,
    content: [Number, String] as PropType<VxeModalPropTypes.Content>,
    cancelButtonText: {
      type: String as PropType<VxeModalPropTypes.CancelButtonText>,
      default: () => GlobalConfig.modal.cancelButtonText,
    },
    confirmButtonText: {
      type: String as PropType<VxeModalPropTypes.ConfirmButtonText>,
      default: () => GlobalConfig.modal.confirmButtonText,
    },
    lockView: {
      type: Boolean as PropType<VxeModalPropTypes.LockView>,
      default: () => GlobalConfig.modal.lockView,
    },
    lockScroll: Boolean as PropType<VxeModalPropTypes.LockScroll>,
    mask: {
      //是否显示遮罩层,对于我来说可有可无
      type: Boolean as PropType<VxeModalPropTypes.Mask>,
      default: () => GlobalConfig.modal.mask,
    },
    maskClosable: {
      type: Boolean as PropType<VxeModalPropTypes.MaskClosable>,
      default: () => GlobalConfig.modal.maskClosable,
    },
    escClosable: {
      type: Boolean as PropType<VxeModalPropTypes.EscClosable>,
      default: () => GlobalConfig.modal.escClosable,
    }, //业务能力+结构化能力+数据抽象化能力
    resize: Boolean as PropType<VxeModalPropTypes.Resize>,
    showHeader: {
      type: Boolean as PropType<VxeModalPropTypes.ShowHeader>,
      default: () => GlobalConfig.modal.showHeader,
    },
    showFooter: {
      type: Boolean as PropType<VxeModalPropTypes.ShowFooter>,
      default: () => GlobalConfig.modal.showFooter,
    },
    showZoom: Boolean as PropType<VxeModalPropTypes.ShowZoom>,
    showClose: {
      type: Boolean as PropType<VxeModalPropTypes.ShowClose>,
      default: () => GlobalConfig.modal.showClose,
    },
    dblclickZoom: {
      type: Boolean as PropType<VxeModalPropTypes.DblclickZoom>,
      default: () => GlobalConfig.modal.dblclickZoom,
    },
    width: [Number, String] as PropType<VxeModalPropTypes.Width>,
    height: [Number, String] as PropType<VxeModalPropTypes.Height>,
    minWidth: {
      type: [Number, String] as PropType<VxeModalPropTypes.MinWidth>,
      default: () => GlobalConfig.modal.minWidth,
    },
    minHeight: {
      type: [Number, String] as PropType<VxeModalPropTypes.MinHeight>,
      default: () => GlobalConfig.modal.minHeight,
    },
    zIndex: Number as PropType<VxeModalPropTypes.ZIndex>,
    marginSize: {
      type: [Number, String] as PropType<VxeModalPropTypes.MarginSize>,
      default: () => GlobalConfig.modal.marginSize,
    },
    fullscreen: Boolean as PropType<VxeModalPropTypes.Fullscreen>,
    draggable: {
      type: Boolean as PropType<VxeModalPropTypes.Draggable>,
      default: () => GlobalConfig.modal.draggable,
    },
    remember: { type: Boolean, default: () => GlobalConfig.modal.remember },
    destroyOnClose: {
      type: Boolean as PropType<VxeModalPropTypes.DestroyOnClose>,
      default: () => GlobalConfig.modal.destroyOnClose,
    },
    showTitleOverflow: {
      type: Boolean as PropType<VxeModalPropTypes.ShowTitleOverflow>,
      default: () => GlobalConfig.modal.showTitleOverflow,
    },
    transfer: {
      type: Boolean as PropType<VxeModalPropTypes.Transfer>,
      default: () => GlobalConfig.modal.transfer,
    },
    storage: {
      type: Boolean as PropType<VxeModalPropTypes.Storage>,
      default: () => GlobalConfig.modal.storage,
    },
    storageKey: {
      type: String as PropType<VxeModalPropTypes.StorageKey>,
      default: () => GlobalConfig.modal.storageKey,
    },
    animat: {
      type: Boolean as PropType<VxeModalPropTypes.Animat>,
      default: () => GlobalConfig.modal.animat,
    },
    size: {
      type: String as PropType<VxeModalPropTypes.Size>,
      default: () => GlobalConfig.modal.size || GlobalConfig.size,
    },
    beforeHideMethod: {
      //
      type: Function as PropType<VxeModalPropTypes.BeforeHideMethod>,
      default: () => GlobalConfig.modal.beforeHideMethod,
    },
    slots: Object as PropType<VxeModalPropTypes.Slots>,
  },
  setup(props, context) {
    //需求分析能力
    //定结构
    //定数据

    //定结构:Teleport为最外层，把这个弹框放到body，方便设定宽和高
    //渲染函数->拿数据 ->一般不做数据更改
    const computeSize = useSize(props)
    const reactData = reactive<ModalReactData>({
      inited: false,
      visible: false,
      contentVisible: false,
      modalTop: 0,
      modalZindex: 0,
      zoomLocat: null,
      firstOpen: true,
    }) //初始化ReactData
    //这个数据是模态框顶层的warp的数据
    const modalWrapClass: ComputedRef<Array<string | Object>> = computed(() => {
      const { className, type, animat, loading, status, lockScroll, lockView, mask, resize } = props
      const vSize = computeSize.value
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
    }) //这个的teleport节点的class数据
    const modalWarpStyle = computed(() => {
      let style = {}
      return style
    })
    const value = ref(1)
    setInterval(() => {
      value.value++
    }, 1000)
    /* 
     <div class={modalWrapClass.value} style={modalWarpStyle.value}>
            {computedValue.value}
          </div>
    */
    const computedValue = computed(() => {
      return value.value
    })
    const renderVN = () => {
      const { transfer } = props //transfer是指放到body节点的数据
      // const outSizeNode = <div>{computedValue.value}</div>
      return (
        <Teleport to={'body'} disabled={transfer}>
          <div class={modalWrapClass.value}>模态框</div>
        </Teleport>
      )
    }
    return () => {
      return renderVN()
    }
  },
})
