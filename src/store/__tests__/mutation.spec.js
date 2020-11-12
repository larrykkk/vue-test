import mutations from "@/store/mutations.js";

describe("測試 setStudentPersonalInfo", () => {
  it("正確地設置了學生個人資訊", () => {
    const state = {
      studentPersonalInfo: {
        name: "",
        gender: "",
        age: 0,
      },
    };
    const info = {
      name: "larry",
      gender: "male",
      age: 15,
    };
    
    mutations.setStudentPersonalInfo(state, info);

    expect(state.studentPersonalInfo).toEqual({
      name: "larry",
      gender: "male",
      age: 15,
    });
  });
});
