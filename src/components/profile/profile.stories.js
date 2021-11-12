import profile from './profile.vue'
export default {
  title: 'profile',
  component: { profile }
}
const template = () => ({
  components: { xProfile: profile },
  template: `
    <xProfile / >
    `
})

export const Default = template.bind({})
