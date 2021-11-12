import storie from './storie.vue'
export default {
  title: 'storie',
  component: { storie }
}
const template = () => ({
  components: { xStorie: storie },
  template: `
    <xStorie avatar="https://picsum.photos/200" / >
    `
})

export const Default = template.bind({})
