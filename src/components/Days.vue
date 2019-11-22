<template>
  <div class="contents">
    <div class="dayWrap" v-for="(item, indexDay) in days" v-bind:key="indexDay">
      <div class="dayHeader">
        <div class="day">
          {{ item.day.split(" ")[0] + " " + item.day.split(" ")[1] }}
        </div>
        <div class="date">{{ item.day.split(" ")[2] }}</div>
        <div class="weather" v-show="checkDate(item.unixtime, indexDay)">
          <img
            v-if="item.weatherIcon"
            class="wicon"
            :src="item.weatherIcon"
            alt="Weather icon"
          />
        </div>
        <router-link :to="`/map/${indexDay}`"
          ><img
            id="map-icon"
            src="https://img.icons8.com/ios-glyphs/30/000000/google-maps.png"
        /></router-link>
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
            <div>{{ itinerary.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <popup
      v-show="this.showPopUp"
      v-on:cancelPopUp="cancelPopUp"
      v-on:closePopUp="closePopUp"
    />
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
    selectedButton: null,
    weather: null,
    days: [],
    duration: localStorage.duration,
    startDate: localStorage.tripStart,
    endDate: localStorage.tripEnd,
    countryCode: localStorage.countryCode,
    city: localStorage.city
  }),
  mounted() {
    this.createDays(this.duration);
    this.getWeather();
  },
  methods: {
    createDays(duration) {
      let date = new Date(this.startDate);
      for (let i = 0; i < duration; i++) {
        this.days.push({
          day: `DAY ${i + 1} ${date.getMonth() +
            1}/${date.getDate()}/${date.getFullYear()}`,
          weather: "",
          unixtime: date.getTime() / 1000,
          itinerary: []
        });
        date.setDate(date.getDate() + 1);
      }
    },
    getWeather() {
      axios
        .get(
          "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
          {
            headers: {
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
              "x-rapidapi-key":
                "f8458b1c78msh0cabb0870fc79a6p1d44adjsn84de5db4361c"
            },
            params: {
              q: `${this.city},${this.countryCode}`,
              cnt: "17"
            }
          }
        )
        .then(response => {
          this.weather = response.data;
          localStorage.weather = response.data;
        })
        .catch(error => {
          this.weather = error;
        });
    },
    checkDate(day, index) {
      if (this.weather) {
        this.weather.list.forEach(item => {
          if (item.dt <= day && day < item.dt + 24 * 60 * 60) {
            this.days[index].weather = item.weather[0].main;
            this.days[index].weatherIcon =
              "http://openweathermap.org/img/w/" +
              item.weather[0].icon +
              ".png";
          }
        });
      }
      return true;
    },
    openPopUp(index) {
      this.selectedButton = index;
      this.showPopUp = true;
    },
    cancelPopUp() {
      this.showPopUp = false;
    },
    closePopUp(plan) {
      const selectedIndex = this.selectedButton;
      this.showPopUp = false;
      this.days[selectedIndex].itinerary.push({ text: plan });
      localStorage.days = JSON.stringify(this.days);
    },
    deleteItinerary(indexDay, indexItinerary) {
      this.days[indexDay].itinerary.splice(indexItinerary, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents {
  display: flex;
  overflow-x: scroll;
  background: white;
  height: 80%;
  padding: 10px;
  margin-top: 30px;
}

.day {
  border-radius: 15px 15px 0px 0px;
  background: #383733;
  color: white;
  font-size: 16pt;
  padding: 12px;
}

.date {
}

.dayHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 15px 0px 15px;
  font-size: 20px;
}
.dayWrap {
  height: 550px;
  flex: 0 0 345px;
}

#map-icon {
  width: 30px;
  padding: 2px 0px 0px 5px;
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
  border-radius: 0px 15px 15px 15px;
  margin: 0px 15px 15px 15px;
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
.weather {
  line-height: 15px;
}
@media screen and (max-width: 480px) {
  .contents {
    margin-top: 10px !important;
  }
  .itineraryWrap {
    margin-left: 5px;
  }
}
</style>
