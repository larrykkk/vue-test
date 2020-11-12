import { mount, shallowMount } from "@vue/test-utils";
import Mount from "@/components/Mount.vue";

describe("Mount.vue", () => {
  it("renders a Mount", () => {
    const wrapper = mount(Mount);

    // console.log(wrapper.html());
  });

  it("renders a shallowMount", () => {
    const wrapper = shallowMount(Mount);

    // console.log(wrapper.html());
  });
});
