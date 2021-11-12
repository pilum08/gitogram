import logo from './logo.vue'
export default {
  title: 'Logo',
  component: { logo }
}
const template = () => ({
  components: { xLogo: logo },
  template: `
    <xLogo / >
    `
})

export const Default = template.bind({})
