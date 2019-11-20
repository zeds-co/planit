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
// import bg from "./assets/animation-bg.gif";

export default {
  name: "app",
  components: {
    navbar: Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Alata&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  /* margin: auto; */
}

html {
  min-height: 100%;
}

body {
  margin: 0rem;
  /* padding: 1rem; */
  background: rgb(232, 232, 232);
  /* background: linear-gradient(
    3deg,
    rgba(232, 232, 232, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  ); */
  min-height: 600px;
  background-image: url("./assets/animation-bg.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;
}
#app {
  font-family: "Alata", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #383733;
}
</style>
