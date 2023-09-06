import { onMounted, onUnmounted } from 'vue'
import XEUtil from 'xe-utils'
export default class basicComponent {
  XEUtil = XEUtil
  constructor() {}
  onMOunted() {
    onMounted(async () => {})
  }
  onUnmounted() {
    onUnmounted(async () => {})
  }
}
