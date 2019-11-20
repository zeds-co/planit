<template>
  <div class="contents">
    <div class="dayWrap" v-for="(item, index) in itinerarys" v-bind:key="index">
      <div class="dayHeader">
        <div class="day">{{ item.day }}</div>
        <div class="weather">{{ item.weather }}</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="openPopUp(index)">+</button>
        <div class="itinerarys">
          <div
            class="itinerary"
            v-for="(itinerary, index) in item.itinerary"
            v-bind:key="index"
          >
            <div>{{ itinerary.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <popup v-show="this.showPopUp === true" v-on:closePopUp="closePopUp" />
  </div>
</template>

<script>
import Popup from "./Popup";

export default {
  name: "Days",
  components: {
    popup: Popup
  },
  data: () => ({
    showPopUp: false,
    selectedButton: null,
    itinerarys: [
      {
        day: "DAY1 (12/27/2019)",
        weather: "SUNNY",
        itinerary: []
      },
      {
        day: "DAY2 (12/28/2019)",
        weather: "SNOW",
        itinerary: [
          { text: "First Place" },
          { text: "Second Place" },
          { text: "Third Place" },
          { text: "Starbucks Reserve Roastery Shanghai" }
        ]
      },
      {
        day: "DAY3 (12/29/2019)",
        weather: "SNOW",
        itinerary: []
      }
    ]
  }),
  methods: {
    openPopUp(index) {
      this.selectedButton = index;
      this.showPopUp = true;
    },
    closePopUp(plan) {
      const selectedIndex = this.selectedButton;
      this.showPopUp = false;
      this.itinerarys[selectedIndex].itinerary.push({ text: plan });
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
.itinerary:last-child {
  margin-bottom: 70px;
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
