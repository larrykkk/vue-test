<template>
  <div>
    <input data-text type="text" v-model="text" />
    <button @click="$emit('submit', text)">送出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {}
    };
  }
};
</script>
