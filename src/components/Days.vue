<template>
  <div class="contents">
    <div class="dayWrap">
      <div class="dayHeader">
        <div class="day">DAY 1</div>
        <div class="day">12/28/2019</div>
        <div class="weather">SUNNY</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="addPlan">+</button>
      </div>
    </div>
    <div class="dayWrap">
      <div class="dayHeader">
        <div class="day">DAY 2</div>
        <div class="day">12/29/2019</div>
        <div class="weather">SNOW</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="addPlan">+</button>
        <div class="itinerarys">
          <div class="itinerary">
            <div id="itin-name">Yu Garden</div>
          </div>
          <div class="itinerary">
            <div id="itin-name">Starbucks Reserve Roastery</div>
          </div>
          <div class="itinerary">
            <div id="itin-name">The Jade Buddha Temple</div>
          </div>
          <div class="itinerary">
            <div id="itin-name">The Shanghai Museum</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dayWrap">
      <div class="dayHeader">
        <div class="day">DAY 3</div>
        <div class="day">12/30/2019</div>
        <div class="weather">SNOW</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="addPlan">+</button>
        <div class="itinerary">
          <div id="itin-name">The Oriental Pearl Tower</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Days",
  props: {},
  methods: {
    addPlan() {
      // store.commit("Click Add Button");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents {
  display: flex;
  overflow-x: scroll;
  background: #eee;
  height: 80%;
  padding: 10px;
  margin-top: 30px;
}
.dayHeader {
  display: flex;
  justify-content: space-between;
  margin: 15px;
  font-size: 20px;
}
.dayWrap {
  height: 550px;
  flex: 0 0 350px;
}
.itineraryWrap {
  background: rgb(156, 169, 248);
  background: linear-gradient(
    3deg,
    rgba(156, 169, 248, 1) 0%,
    rgba(63, 80, 181, 1) 100%
  );
  position: relative;
  border: 3px solid #383733;
  border-radius: 15px;
  margin: 15px;
  height: 450px;
  flex: 0 0 350px;
}
.itinerarys {
  height: 100%;
  overflow-y: scroll;
}
.itinerary {
  width: 90%;
  height: 100px;
  margin: 15px auto;
  padding: 5px;
  border-radius: 15px;
  background: #383733;
  color: white;
}

#itin-name {
  padding: 5px 5px 5px 5px;
  text-align: center;
  font-size: 13pt;
}

.addBtn {
  width: 101%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: -1.5px;
  font-size: 30px;
  border: 5px solid rgba(63, 80, 181, 1);
  border-radius: 0px 0px 13px 13px;
  font-size: 30px;
  background: rgba(63, 80, 181, 1);
  color: white;
  cursor: pointer;
}
</style>
