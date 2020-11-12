import actions from "@/store/actions.js";

let url = "";
let body = {};
let mockError = false;

jest.mock("axios", () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) throw Error();
      url = _url;
      body = _body;
      resolve(true);
    });
  },
}));

describe("測試 actions.getStudentInfo", () => {
  it("輸入學生ID，透過 API 取得學生資訊，然後 commit", async () => {
    const commit = jest.fn();
    const studentID = "C042";

    await actions.getStudentInfo({ commit }, { studentID });

    expect(url).toBe("/api/student.info");
    expect(body).toEqual({
      studentID,
    });
    expect(commit).toHaveBeenCalledWith("setStudentPersonalInfo", true);
  });

  it("catches an error", async () => {
    mockError = true;

    await expect(
      actions.getStudentInfo({ commit: jest.fn() }, {})
    ).rejects.toThrow("API Error occurred.");
  });
});
