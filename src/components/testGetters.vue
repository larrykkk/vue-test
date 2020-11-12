<template>
  <ul>
    <li
      data-fatmalestudent
      v-for="(item, index) in $store.getters.fatMaleStudent"
      :key="index"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
