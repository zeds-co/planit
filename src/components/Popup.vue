<template>
  <div class="popUpCover">
    <div class="popUp">
      <div>Please input ...</div>
      <p>
        <input class="popupInput" type="text" />
      </p>
      <p><button v-on:click="closePopUp" class="okBtn">OK</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  methods: {
    closePopUp() {
      this.$emit("closePopUp");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popUpCover {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 33, 33, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popUp {
  position: relative;
  width: 400px;
  height: 200px;
  padding: 20px;
  background: #efefef;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.popupInput {
  width: 90%;
  height: 50px;
  margin: 0 20px;
  padding: 5px;
  font-size: 28px;
}
.okBtn {
  width: 100px;
  height: 40px;
  font-size: 26px;
  border: none;
  margin: 0 130px;
  position: absolute;
  bottom: 20px;
  background: #999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
