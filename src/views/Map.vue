<template>
  <div class="map">
    <GmapMap
      :zoom="zoom"
      :center="center"
      map-type-id="roadmap"
      ref="map"
      style="width: 100%; height: 300px"
    >
      <div v-if="!foundDirection">
        <GmapMarker
          v-for="(task, indexTask) in itinerary"
          :ref="indexTask"
          :key="indexTask"
          :position="task.position"
          :icon="'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'"
        />
      </div>
    </GmapMap>
    <div class="dayWrap">
      <div class="dayHeader">
        <div>{{ indexDay }}</div>
        <div class="day">
          {{ day.split(" ")[0] + " " + day.split(" ")[1] }}
        </div>
        <div class="date">{{ day.split(" ")[2] }}</div>
      </div>
      <div class="itineraryWrap">
        <div class="itinerarys">
          <div
            class="itinerary"
            v-for="(task, indexTask) in itinerary"
            v-bind:key="indexTask"
          >
            <div>{{ task.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { gmapApi } from "vue2-google-maps";
// import * as GmapCustomMarker from "vue2-gmap-custom-marker";
export default {
  name: "Map",
  data: () => {
    return {
      city: "",
      country: "",
      indexDay: "",
      zoom: 13,
      center: {},
      day: "",
      weather: "",
      itinerary: [],
      foundDirection: false
    };
  },
  async created() {
    const { indexDay } = this.$route.params;
    const data = JSON.parse(localStorage.days)[indexDay];
    this.city = localStorage.city;
    this.country = localStorage.country;
    this.day = data.day;
    this.weather = data.weather;
    const itinerary = data.itinerary;
    const locationInfoArr = await Promise.all(
      itinerary.map(item => this.getPosition(item.text))
    );
    itinerary.forEach(
      (item, index) =>
        (item.position =
          locationInfoArr[index].data.candidates[0].geometry.location)
    );
    this.itinerary = itinerary;
    this.center = await this.getCenter();
    const locations = this.itinerary.map(item => item.text);
    localStorage.locations = locations;
    this.getDirection(locations);
    localStorage.itinerary = JSON.stringify(this.itinerary);
  },
  methods: {
    async getCenter() {
      let searchString = [];
      searchString.push(this.city);
      searchString.push(this.country);
      searchString = searchString.join("%20");
      const center = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchString}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDJ3sPnmTBMN1DZGJBX9gxuNg-O9mgHOAo`
      );
      localStorage.center = JSON.stringify(center);
      return center.data.candidates[0].geometry.location;
    },
    async getPosition(text) {
      let searchString = text.split(" ");
      searchString.push(this.city);
      searchString.push(this.country);
      searchString = searchString.join("%20");
      const position = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchString}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDJ3sPnmTBMN1DZGJBX9gxuNg-O9mgHOAo`
      );
      return position;
    },
    async getDirection(textArr) {
      localStorage.textArr = textArr;
      let query = {};
      if (textArr.length === 2) {
        query = {
          origin: textArr[0],
          destination: textArr[1],
          travelMode: window.google.maps.DirectionsTravelMode.DRIVING
        };
      } else if (textArr.length > 2) {
        const waypoints = textArr.slice(1, textArr.length - 1).map(item => ({
          location: item,
          stopover: true
        }));
        query = {
          origin: textArr[0],
          destination: textArr[textArr.length - 1],
          waypoints,
          travelMode: window.google.maps.DirectionsTravelMode.DRIVING
        };
      }

      this.$gmapApiPromiseLazy().then(() => {
        this.directionsService = new window.google.maps.DirectionsService();
        this.directionsDisplay = new window.google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(this.$refs.map.$mapObject);
        this.directionsDisplay.set("directions", null);
        this.directionsService.route(query, (response, status) => {
          if (status === "OK") {
            this.foundDirection = true;
            localStorage.response = JSON.stringify(response);
            this.directionsDisplay.setDirections(response);
          }
        });
      });
    }
  }
  // computed() {
  //   google: gmapApi;
  // }
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
  margin: 10px;
}

.dayHeader {
  display: flex;
  justify-content: flex-start;
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
@media screen and (max-width: 480px) {
  .contents {
    margin-top: 10px !important;
  }
  .itineraryWrap {
    margin-left: 5px;
  }
}
</style>
