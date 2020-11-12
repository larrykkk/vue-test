import getters from "@/store/getters.js";

const students = [
  { name: "larry", gender: "male", bmi: 24.1 },
  { name: "leo", gender: "male", bmi: 20 },
  { name: "sdu", gender: "male", bmi: 22 },
  { name: "neil", gender: "male", bmi: 22 },
  { name: "annie", gender: "female", bmi: 18 },
  { name: "717", gender: "female", bmi: 22 },
  { name: "eleanore", gender: "female", bmi: 20 },
];

const state = { students };

describe("學生們", () => {
  test("getters.maleStudent 會回傳男學生的資料", () => {
    const result = getters.maleStudent(state);

    expect(result).toEqual([
      { name: "larry", gender: "male", bmi: 24.1 },
      { name: "leo", gender: "male", bmi: 20 },
      { name: "sdu", gender: "male", bmi: 22 },
      { name: "neil", gender: "male", bmi: 22 },
    ]);
  });
});

describe("學生們", () => {
  test("getters.fatMaleStudent 會回傳過胖的男學生資料", () => {
    const result = getters.fatMaleStudent(state);

    expect(result).toEqual([{ name: "larry", gender: "male", bmi: 24.1 }]);
  });
});
