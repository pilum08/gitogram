import counters from './counters.vue'
export default {
  title: 'Counters',
  component: { counters }
}
const template = () => ({
  components: { xCounters: counters },
  template: `
    <xCounters stars="300" forks="120" / >
    `
})

export const Default = template.bind({})
