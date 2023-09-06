import { Slot } from 'vue'
export default defineComponent({
  setup() {
    const modelValue = ref(false)
    const mySlots = {
      default: () => <div>我是default的插槽</div>,
      footer: () => <div>我是footer的插槽</div>,
    }
    return () => {
      return <xf-modal modelValue={modelValue.value} v-slots={mySlots}></xf-modal>
    }
  },
})
