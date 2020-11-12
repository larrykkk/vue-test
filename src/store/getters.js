export default {
  maleStudent(state) {
    return state.students.filter((student) => student.gender === "male");
  },
  fatMaleStudent(state) {
    return state.students.filter(
      (student) => student.gender === "male" && student.bmi > 24
    );
  },
};
