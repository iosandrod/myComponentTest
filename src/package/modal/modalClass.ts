import { ModalMethods, ModalReactData, VxeModalEmits, VxeModalMethods, VxeModalProps } from '@/type/modal'
import { Ref } from 'vue'
import basicComponent from '../basicComponent'
import modalProp from './modalProp'
import { ValueOf } from 'element-plus/es/components/table/src/table-column/defaults'
class XfModal extends basicComponent implements ModalMethods, VxeModalMethods {
  xID?: string
  props?: typeof modalProp
  context?: {
    attrs: any
    slots: any
    emit: (
      event: 'update:modelValue' | 'show' | 'hide' | 'before-hide' | 'close' | 'confirm' | 'cancel' | 'zoom',
      ...args: any[]
    ) => void
    expose: any
  }
  reactData: ModalReactData = {
    inited: false,
    visible: false,
    contentVisible: false,
    modalTop: 0,
    modalZindex: 0,
    zoomLocat: null,
    firstOpen: true,
  }
  dispatchEvent(
    type: 'update:modelValue' | 'show' | 'hide' | 'before-hide' | 'close' | 'confirm' | 'cancel' | 'zoom',
    params: any,
    evnt?: Event | undefined,
  ): void {
    throw new Error('Method not implemented.')
  }
  open(): Promise<any> {
    throw new Error('Method not implemented.')
  }
  close(): Promise<any> {
    throw new Error('Method not implemented.')
  }
  getBox(): HTMLElement {
    throw new Error('Method not implemented.')
  }
  getPosition(): { top?: number | undefined; left?: number | undefined } | null {
    throw new Error('Method not implemented.')
  }
  setPosition(top?: number | undefined, left?: number | undefined): Promise<any> {
    throw new Error('Method not implemented.')
  }
  isMaximized(): boolean {
    throw new Error('Method not implemented.')
  }
  zoom(): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  maximize(): Promise<any> {
    throw new Error('Method not implemented.')
  }
  revert(): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
export default XfModal
