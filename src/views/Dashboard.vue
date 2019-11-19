<template>
  <div class="dashboard">
    <div class="header">
      <div class="locationWrap">
        <div class="location">{{ location }}</div>
        <div class="term">{{ term }} DAY TRIP ( {{ date }} )</div>
      </div>
      <div class="exchangeWrap">
        <div class="exchange">1 CNY = 15.4621 JPY</div>
        <div class="exchange">100 JPY = 6.46743 CNY</div>
      </div>
    </div>
    <div class="contents">
      <div class="dayWrap">
        <div class="dayHeader">
          <div class="day">DAY1 (12/27/2019)</div>
          <div class="weather">SUNNY</div>
        </div>
        <div class="itineraryWrap">
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
        </div>
      </div>
      <div class="dayWrap">
        <div class="dayHeader">
          <div class="day">DAY2 (12/28/2019)</div>
          <div class="weather">SNOW</div>
        </div>
        <div class="itineraryWrap">
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
        </div>
      </div>
      <div class="dayWrap">
        <div class="dayHeader">
          <div class="day">DAY3 (12/29/2019)</div>
          <div class="weather">SNOW</div>
        </div>
        <div class="itineraryWrap">
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
          <div class="itinerary">
            <button class="addBtn" v-on:click="addPlan">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    location: "Shanghai",
    term: 3,
    date: "12/27/2019 - 12/29/2019"
  }),
  methods: {
    addPlan() {
      // store.commit("Click Add Button");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  padding: 4rem;
}
.header {
  display: flex;
  justify-content: space-between;
}
.location {
  font-size: 42px;
}
.contents {
  display: flex;
  overflow-x: scroll;
  background: #eee;
  height: 80%;
  padding: 10px;
  margin-top: 50px;
}
.dayHeader {
  display: flex;
  justify-content: space-between;
  margin: 15px;
  font-size: 20px;
}
.dayWrap {
  height: 500px;
  flex: 0 0 350px;
}
.itineraryWrap {
  border: 1px #999 solid;
  margin: 15px;
}
.itinerary {
  width: 90%;
  height: 100px;
  border: 1px #ccc solid;
  margin: 15px auto;
}
.addBtn {
  width: 50px;
  height: 50px;
  font-size: 30px;
  border: none;
}
</style>
