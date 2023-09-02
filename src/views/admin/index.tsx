export default defineComponent({
  setup() {
    const num = ref<number>(1)
    const modalValue = ref(false)
    return () => {
      return <xf-modal modalValue={modalValue.value}></xf-modal>
    }
  },
})
