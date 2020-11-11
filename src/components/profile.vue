<template>
  <div>
    <div v-if="isAdmin">哈囉! {{ username }}</div>
    <div v-else>沒有權限訪問</div>
    <button>back</button>
  </div>
</template>

<script>
export default {
  props: ["isAdmin", "username"],
};
</script>
