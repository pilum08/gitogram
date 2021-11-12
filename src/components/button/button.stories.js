import xButton from './button'
export default {
  title: 'Button',
  component: { xButton }
}
const template = () => ({
  components: { xxButton: xButton },
  template: `
  <xButton textButton="Button"></xButton>
  `
})

export const Default = template.bind({})
