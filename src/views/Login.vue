<template>
  <div class="login">
    <h3>Login</h3>
    <input type="text" placeholder="email" />
    <br />
    <input type="text" placeholder="password" />
    <br />
    <button>connection</button>
    <p>don't have an account? create one</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
