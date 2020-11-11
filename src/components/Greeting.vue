<template>
  <div>
    {{ greeting }}
    <p>123</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      greeting: "Vue and TDD",
    };
  },
};
</script>
