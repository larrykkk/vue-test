import { mount } from "@vue/test-utils";
import Profile from "@/components/profile.vue";

describe("Profile.vue", () => {
  it("當 isAdmin 為 true，將顯示: 哈囉! ${username}", () => {
    const wrapper = mount(Profile, {
      propsData: {
        isAdmin: true,
        username: "larry",
      },
    });
    expect(wrapper.text()).toMatch("哈囉! larry");
  });

  it("當 isAdmin 為 false，將顯示: 沒有權限訪問", () => {
    const wrapper = mount(Profile, {
      propsData: {
        isAdmin: false,
      },
    });
    expect(wrapper.text()).toMatch("沒有權限訪問");
  });
});
