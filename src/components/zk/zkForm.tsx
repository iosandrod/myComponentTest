type FormProp = {}
import {} from 'vue'
import {} from 'vxe-table'
import { Form } from './form'
import { template } from 'lodash'
export default defineComponent({
  setup(props, context) {
    const formConfig = { props, context }
    const $form = reactive(new Form(formConfig))
    const { proxy: instance } = getCurrentInstance()!
    onMounted(async () => {
      await $form.onMounted(instance!)
    })
    onUnmounted(async () => {
      await $form.onUnmounted()
    })
    return { $form }
  },
  render() {
    return (
      <div>
        <vxe-from></vxe-from>
      </div>
    )
  },
})
