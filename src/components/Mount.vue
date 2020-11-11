<template>
  <div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld";
export default {
  name: "Greeting",
  components: {
    HelloWorld,
  },
  data() {
    return {
      greeting: "Vue and TDD",
    };
  },
};
</script>
