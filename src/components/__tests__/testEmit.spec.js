import { mount } from '@vue/test-utils';
import testEmit from '@/components/testEmit.vue';
describe('testEmit.vue', () => {
  it('submit 以後會發送 emit 事件', async () => {
    const wrapper = mount(testEmit);

    wrapper.find('[data-text]').setValue('larry');
    wrapper.find('button').trigger('click');

    expect(wrapper.emitted().submit[0]).toEqual(['larry']);
  });
});
