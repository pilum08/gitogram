import xMenu from './xMenu.vue'
export default {
  title: 'xMenu',
  component: { xMenu }
}
const template = () => ({
  components: { xXmenu: xMenu },
  template: `
  <xXmenu />
    `
})

export const Default = template.bind({})
