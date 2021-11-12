import toggler from './toggler.vue'
export default {
  title: 'toggler',
  component: { toggler }
}
const template = () => ({
  components: { xToggler: toggler },
  template: `
    <xToggler / >
    `
})

export const Default = template.bind({})
