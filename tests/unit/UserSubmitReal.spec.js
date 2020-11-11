import { mount } from "@vue/test-utils";
import UserSubmitReal from "@/components/UserSubmitReal.vue";
import flushPromises from "flush-promises";

jest.mock("axios", () => ({
  post: (_url, _data) =>
    Promise.resolve({
      data: {
        success: true,
        code: 200,
        payload: { username: _data.username, favorFood: "熱狗" },
      },
    }),
}));

describe("UserSubmitReal.vue", () => {
  it("當 submit 成功後將會顯示使用者最喜歡的食物", async () => {
    const wrapper = mount(UserSubmitReal);

    wrapper.find("[data-username]").setValue("larry");
    wrapper.find("form").trigger("submit.prevent");
    await flushPromises();

    console.log(wrapper.html());
    expect(wrapper.find(".message").text()).toBe(
      "嗨, larry, 你最喜歡的食物是: 熱狗"
    );
  });
});

describe("UserSubmitReal.vue", () => {
  it("當 submit 成功後將會顯示使用者最喜歡的食物", async () => {
    const wrapper = mount(UserSubmitReal);

    expect(wrapper.element).toMatchSnapshot();
  });
});
