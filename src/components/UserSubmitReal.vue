<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>
<span>summer</span>
    <div class="message" v-if="submitted">
      <div>嗨, {{ username }},</div>
      <div>你最喜歡的食物是: {{ favorFood }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FormSubmitter",

  data() {
    return {
      submitted: false,
      username: "",
      favorFood: "",
    };
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },

    async handleSubmitAsync() {
      axios
        .post("/api/v1/submit", { username: this.username })
        .then((res) => {
          // console.log(res);
          this.submitted = true;
          this.username = res.data.payload.username;
          this.favorFood = res.data.payload.favorFood;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
