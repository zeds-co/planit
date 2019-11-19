<template>
  <div id="app">
    <dashboard location="Shanghai" term="3" date="12/27/2019 - 12/29/2019" />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";

export default {
  name: "app",
  components: {
    dashboard: Dashboard
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
