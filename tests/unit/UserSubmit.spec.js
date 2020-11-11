import { mount } from "@vue/test-utils";
import UserSubmit from "@/components/UserSubmit.vue";

describe("UserSubmit.vue", () => {
  it("當 submit 後 message 將會顯示", async () => {
    const wrapper = mount(UserSubmit);

    wrapper.find("[data-username]").setValue("larry");
    wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".message").text()).toBe("感謝提交, larry");
  });
});
