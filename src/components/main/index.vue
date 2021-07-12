<template>
  <main class="app-main">
    <slot name="main"></slot>
  </main>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style lang="scss" scoped>
.app-main {
  width: percentage(1250/1920);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
