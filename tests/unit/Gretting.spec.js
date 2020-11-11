import { mount, shallowMount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting)

    expect(wrapper.text()).toMatch("Vue and TDD")
  })
})

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = shallowMount(Greeting)

    // console.log(wrapper.html())
  })
})


describe('Greeting.vue', () => {
  it('renders a p tag', () => {
    const wrapper = mount(Greeting)

    // console.log()

    expect(wrapper.get('p').text()).toBe('123')
  })
})