import axios from "axios";

export default {
  async getStudentInfo({ commit }, { studentID }) {
    try {
      const studentInfo = await axios.post("/api/student.info", {
        studentID,
      });

      commit("setStudentPersonalInfo", studentInfo);
    } catch (error) {
      throw Error("API Error occurred.");
    }
  },
};
