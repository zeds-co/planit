<template>
  <div class="contents">
    <div class="dayWrap" v-for="(item, indexDay) in days" v-bind:key="indexDay">
      <div class="dayHeader">
        <div class="day">{{ item.day }}</div>
        <div class="weather">{{ item.weather }}</div>
      </div>
      <div class="itineraryWrap">
        <button class="addBtn" v-on:click="openPopUp(indexDay)">+</button>
        <div class="itinerarys">
          <div
            class="itinerary"
            v-for="(itinerary, indexItinerary) in item.itinerary"
            v-bind:key="indexItinerary"
          >
            <button class="deleteBtn">
              <i
                class="material-icons"
                v-on:click="deleteItinerary(indexDay, indexItinerary)"
              >
                close
              </i>
            </button>
            <!-- <button
              class="deleteBtn"
              v-on:click="deleteItinerary(indexDay, indexItinerary)"
            >
              x
            </button> -->
            <div>{{ wheather }}</div>
            <div>{{ itinerary.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <popup v-show="this.showPopUp=true" v-on:closePopUp="closePopUp" /> -->
    <popup v-show="this.showPopUp" v-on:closePopUp="closePopUp" />
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
    weather: null,
    duration: localStorage.duration,
    startDate: new Date(localStorage.tripStart),
    endDate: new Date(localStorage.tripEnd),
    selectedButton: null,
    days: [
      // {
      //   day: "DAY1 (12/27/2019)",
      //   weather: "SUNNY",
      //   itinerary: []
      // },
      // {
      //   day: "DAY2 (12/28/2019)",
      //   weather: "SNOW",
      //   itinerary: [
      //     { text: "First Place" },
      //     { text: "Second Place" },
      //     { text: "Third Place" },
      //     { text: "Starbucks Reserve Roastery Shanghai" }
      //   ]
      // },
      // {
      //   day: "DAY3 (12/29/2019)",
      //   weather: "SNOW",
      //   itinerary: []
      // }
    ]
  }),
  mounted() {
    this.createDays(this.duration);
    this.getWeather();
  },
  methods: {
    createDays(duration) {
      for (let i = 0; i < duration; i++) {
        this.days.push({
          day: `DAY ${i + 1} (${this.startDate.getMonth() +
            1}/${this.startDate.getDate() + i}/${this.startDate.getFullYear()})`
        });
      }
    },
    getWeather() {
      axios
        .get(
          "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=01cd0fb825adbf948e05b406259dddf5"
        )
        .then(response => {
          this.weather = response.data;
          localStorage.weather = response.data;
        });
    },
    openPopUp(index) {
      this.selectedButton = index;
      this.showPopUp = true;
    },
    closePopUp(plan) {
      const selectedIndex = this.selectedButton;
      this.showPopUp = false;
      this.itinerarys[selectedIndex].itinerary.push({ text: plan });
    },
    deleteItinerary(indexDay, indexItinerary) {
      this.itinerarys[indexDay].itinerary.splice(indexItinerary, 1);
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
  overflow: hidden;
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

.itinerary::-webkit-scrollbar {
  width: 0 !important;
}

.itinerary {
  position: relative;
  width: 90%;
  height: 100px;
  margin: 15px auto;
  padding: 15px;
  text-align: center;
  border-radius: 15px;
  background: #383733;
  color: white;
}
.itinerary:last-child {
  margin-bottom: 70px;
}

#itin-name {
  font-weight: bold;
  font-size: 20pt;
  padding: 5px 5px 5px 5px;
  text-align: center;
  font-size: 13pt;
}
.addBtn {
  font-weight: bold;
  z-index: 1;
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
.deleteBtn {
  display: flex;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -8px;
  width: 28px;
  height: 28px;
  background: #efefef;
  color: #333;
  border-radius: 50%;
}
.deleteBtn i {
  font-size: 18px;
}
button:focus {
  outline: 0;
}
</style>
