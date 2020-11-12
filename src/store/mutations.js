export default {
  setStudentPersonalInfo(state, { name, gender, age }) {
    state.studentPersonalInfo.name = name;
    state.studentPersonalInfo.gender = gender;
    state.studentPersonalInfo.age = age;
  },
};
