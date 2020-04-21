<template>
  <div id="app">
    <router-view :key="routeKey" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
    routeKey() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
