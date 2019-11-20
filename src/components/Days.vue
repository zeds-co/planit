<template>
  <div class="contents">
    <div class="dayWrap">
      <div class="dayHeader">
        <div class="day">DAY1 (12/27/2019)</div>
        <div class="weather">SUNNY</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="openPopUp(true)">+</button>
      </div>
    </div>
    <div class="dayWrap">
      <div class="dayHeader">
        <div class="day">DAY2 (12/28/2019)</div>
        <div class="weather">SNOW</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="openPopUp(true)">+</button>
        <div class="itinerarys">
          <div class="itinerary">
            <div>Yu Garden</div>
          </div>
          <div class="itinerary">
            <div>Starbucks Reserve Roastery Shanghai</div>
          </div>
          <div class="itinerary">
            <div>The Jade Buddha Temple</div>
          </div>
          <div class="itinerary">
            <div>The Shanghai Museum</div>
          </div>
          <div class="itinerary">
            <div>The Shanghai Museum</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dayWrap">
      <div class="dayHeader">
        <div class="day">DAY3 (12/29/2019)</div>
        <div class="weather">SNOW</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="openPopUp(true)">+</button>
        <div class="itinerary">
          <div>The Oriental Pearl Tower</div>
        </div>
      </div>
    </div>
    <popup v-show="this.showPopUp === true" v-on:closePopUp="closePopUp" />
  </div>
</template>

<script>
import Popup from "./Popup";
import axios from "axios";
export default {
  name: "Days",
  components: {
    popup: Popup
  },
  data: () => ({
    showPopUp: false,
    data: null
  }),
  mounted: () => {
    axios
    .get("https://community-open-weather-map.p.rapidapi.com/forecast/daily",
    { params: 
      {"q": "san francisco,us",
      "lat": "35",
      "lon": "139",
      "cnt": "10",
      "units": "metric or imperial"
      },
      header:
      {"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "b6e4f9fc03msh80db2bc55980af4p181a67jsnb4b3c557714d"
      }
    })
    .then(response => this.data = response);
  },
  methods: {
    openPopUp() {
      this.showPopUp = true;
    },
    closePopUp(plan) {
      this.showPopUp = false;
      alert(plan);
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
  margin-top: 50px;
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
  position: relative;
  border: 1px #999 solid;
  margin: 15px;
  height: 450px;
}
.itinerarys {
  height: 100%;
  overflow-y: scroll;
}
.itinerary {
  width: 90%;
  height: 100px;
  margin: 15px auto;
  border: 1px #ccc solid;
}
.addBtn {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  font-size: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.8);
}
</style>
