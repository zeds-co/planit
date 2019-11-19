<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <!-- if user is not logged in, show login -->
    <!-- if user is logged in  show dashboard -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    navbar: Navbar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 1rem;
  /* padding: 1rem; */
}
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
