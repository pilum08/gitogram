import slide from './slide.vue'
export default {
  title: 'Slide',
  component: { slide }
}
const template = () => ({
  components: { xSlide: slide },
  template: `
    <xSlide / >
    `
})

export const Default = template.bind({})
