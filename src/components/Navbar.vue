<template>
  <header class="navbar">
    <img alt="planit" class="logo" src="../assets/logo.png" />
    <div id="links">
      <div class="nav-item">
        <router-link to="/">Info</router-link>
      </div>

      <div v-if="!isUserLoggedIn" class="nav-item">
        <router-link to="/dashboard">Dashboard</router-link>
      </div>

      <div v-if="!isUserLoggedIn" class="nav-item">
        <router-link to="/login">Login</router-link>
      </div>

      <div v-if="isUserLoggedIn" class="nav-item">
        <a>Logout</a>
      </div>

      <img
        v-if="isUserLoggedIn"
        class="user-picture can-hide"
        :src="user.photoURL"
        alt="Avatar"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  height: 100px;
  background-color: $navbar-color;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  display: flex;
}

.logo {
  height: 50px;
  width: 50px;
  margin: 1rem;
}

.user-picture {
  max-height: 32px;
  margin-left: 1.5rem;
  border-radius: 50%;
}

#links {
  width: 30%;
  display: flex;
  flex-direction: row;
}

.nav-item {
  margin: 1rem;
}
</style>
