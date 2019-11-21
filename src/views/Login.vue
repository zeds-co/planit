<template>
  <div class="login">
    <h2>Login</h2>
    <input type="text" placeholder="email" />
    <br />
    <input type="text" placeholder="password" />
    <br />
    <button class="submit" type="button">LOGIN</button>
    <p>Don't have an account? <u>Create one!</u></p>

    <!-- <button>
      <h1>Test</h1>
      <button @click="handleClickGetAuth" :disabled="!isInit">
        get auth code
      </button>
      <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">
        signIn
      </button>
      <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">
        signOout
      </button>
    </button> -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isInit: false,
      isSignIn: false
    };
    // },
    // methods: {
    //   handleClickGetAuth() {
    //     this.$gAuth
    //       .getAuthCode()
    //       .then(authCode => {
    //         // On success
    //         return this.$http.post("http://your-backend-server.com/auth/google", {
    //           code: authCode,
    //           redirect_uri: "postmessage"
    //         });
    //       })
    //       .then(response => {
    //         // And then
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   },
    //   handleClickSignIn() {
    //     this.$gAuth
    //       .signIn()
    //       .then(user => {
    //         // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
    //         console.log("user", GoogleUser);
    //         this.isSignIn = this.$gAuth.isAuthorized;
    //       })
    //       .catch(error => {
    //         // On fail do something
    //       });
    //   },
    //   handleClickSignOut() {
    //     this.$gAuth
    //       .signOut()
    //       .then(() => {
    //         // On success do something
    //         this.isSignIn = this.$gAuth.isAuthorized;
    //       })
    //       .catch(error => {
    //         // On fail do something
    //       });
    //   }
    // },
    // mounted() {
    //   let that = this;
    //   let checkGauthLoad = setInterval(function() {
    //     that.isInit = that.$gAuth.isInit;
    //     that.isSignIn = that.$gAuth.isAuthorized;
    //     if (that.isInit) clearInterval(checkGauthLoad);
    //   }, 1000);
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

body {
  background: none;
}

input {
  width: 280px;
  height: 80px;
  font-size: 18pt;
}

.login {
  justify-content: center;
  text-align: center;
}

button {
  width: 280px;
  height: 80px;
}
</style>
