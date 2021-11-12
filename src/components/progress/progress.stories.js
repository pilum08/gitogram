import progress from './progress.vue'
export default {
  title: 'Progress',
  component: progress,
  argTypes: {
    onFinish: {
      action: 'onFinish'
    }
  }
}
const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: '<x-progress @onFinish="args.onFinish"/>'
})

export const Default = template.bind({})
