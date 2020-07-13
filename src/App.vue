<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./_Shared/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  color: #2c3e50;
}
</style>
