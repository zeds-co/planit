<template>
  <div class="popUpCover">
    <div class="popUp">
      <h2>Add a spot!</h2>
      <p>
        <input class="popupInput" type="text" id="planText" />
      </p>
      <div class="buttons">
        <button v-on:click="closePopUp" class="cancelBtn">CANCEL</button
        ><button v-on:click="closePopUp" class="addBtn">ADD</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    itinerarys: []
  },
  methods: {
    closePopUp() {
      const plan = document.getElementById("planText").value;
      this.$emit("closePopUp", plan);
      document.getElementById("planText").value = "";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: auto;
  padding: 20px;
  margin: auto;
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

h2 {
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.addBtn {
  border: 3px solid #383733;
  text-align: center;
  width: 130px;
  height: auto;
  font-size: 18pt;
  font-weight: bold;
  border-radius: 10px;
  margin: 10px;
  bottom: 20px;
  background: #3f50b5;
  color: white;
}

.cancelBtn {
  width: 130px;
  height: auto;
  font-size: 18pt;
  font-weight: bold;
  border: 3px solid #383733;
  border-radius: 10px;
  margin: 10px;
  bottom: 20px;
  padding: 10px;
  background: #999;
  color: white;
}
</style>
