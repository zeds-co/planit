<template>
  <header class="navbar">
    <div id="links">
      <router-link to="/">
        <img alt="planit" class="logo" src="../assets/planit-logo.png"
      /></router-link>

      <!-- <div v-if="isUserLoggedIn" class="nav-item">
        <router-link to="/dashboard">DASHBOARD</router-link>
      </div> -->

      <!-- <div v-if="!isUserLoggedIn" class="nav-item">
        <router-link to="/login">LOGIN</router-link>
      </div>

      <div v-if="isUserLoggedIn" class="nav-item">
        <a>LOGOUT</a>
      </div> -->

      <!-- <img
          v-if="isUserLoggedIn"
          class="user-picture"
          :src="user.photoURL"
          alt="Avatar"
        /> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    isUserLoggedIn: true
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  height: 130px;
  box-sizing: border-box;
  border-bottom: 1px solid #ceccc2;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: #383733;
}

.logo {
  height: 80px;
  margin: 1rem;
}

#links {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nav-item {
  margin: 0.5rem;
}

user {
  max-height: 32px;
  margin-left: 1.5rem;
  border-radius: 50%;
}

.user-picture {
  max-height: 32px;
  margin-left: 1.5rem;
  border-radius: 50%;
}
</style>
