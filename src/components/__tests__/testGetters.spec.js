import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import testGetters from "@/components/testGetters.vue";
import getters from "@/store/getters";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    students: [
      { name: "larry", gender: "male", bmi: 24.1 },
      { name: "peter", gender: "male", bmi: 19 },
    ],
  },
  getters,
});

it("renders a username using a real Vuex getter", () => {
  const wrapper = shallowMount(testGetters, { store, localVue });
  // console.log(wrapper.html());
  expect(wrapper.find("[data-fatmalestudent]").text()).toMatch("larry");
});
