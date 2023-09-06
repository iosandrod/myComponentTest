import { VxeModalPropTypes } from '@/type/modal'
import { GlobalConfig } from '..'

export default {
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
}
