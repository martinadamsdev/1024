<template>
  <div class="layout-home">
    <app-header></app-header>
    <app-main>
      <template #main>
        <app-home></app-home>
      </template>
    </app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    AppHeader: () => import(/* webpackChunkName: "app-header" */ "@/components/header"),
    AppMain: () => import(/* webpackChunkName: "app-main" */ "@/components/main"),
    AppFooter: () => import(/* webpackChunkName: "app-footer" */ "@/components/footer"),
    AppHome: () => import(/* webpackChunkName: "app-home" */ "./components/app-home"),
  },
};
</script>

<style lang="scss" scoped>
.layout-home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
