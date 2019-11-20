<template>
  <div class="info">
    <div id="info-item">{{ duration }}</div>
    <div id="info-item" v-if="city !== null && country !== null">
      {{ `${city}, ${country}` }}
    </div>
    <Location
      id="info-item"
      v-on:city-change="city => onCityChange(city)"
      v-on:country-change="country => onCountryChange(country)"
    />
    <Time
      id="info-item"
      v-on:start-input="start => onStartInput(start)"
      v-on:end-input="end => onEndInput(end)"
    />
    <router-link
      :to="{ path: '/dashboard' }"
      class="submit"
      tag="button"
      :disabled="!(this.country && this.city && this.tripStart && this.tripEnd)"
    >
      PLANIT »
    </router-link>
  </div>
</template>

<script>
import Location from "../components/Location.vue";
import Time from "../components/Time.vue";
export default {
  name: "Info",
  components: {
    Location,
    Time
  },
  data: () => {
    return {
      country: null,
      city: null,
      tripStart: null,
      tripEnd: null,
      duration: null
    };
  },
  methods: {
    onCountryChange(country) {
      this.country = country;
      localStorage.country = country;
    },
    onCityChange(city) {
      this.city = city;
      localStorage.city = city;
    },
    onStartInput(start) {
      this.tripStart = start;
      localStorage.tripStart = start;
      if (this.tripEnd) {
        const startDate = new Date(this.tripStart);
        const endDate = new Date(this.tripEnd);
        this.duration = (endDate.getTime() - startDate.getTime()) / 86400000;
      }
    },
    onEndInput(end) {
      this.tripEnd = end;
      localStorage.tripEnd = end;
      if (this.tripStart) {
        const startDate = new Date(this.tripStart);
        const endDate = new Date(this.tripEnd);
        this.duration = (endDate.getTime() - startDate.getTime()) / 86400000;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Alata&display=swap");

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  height: 600px;
}

#info-item {
  margin: 10px;
  width: 500px;
}

input {
  font-family: Alata;
  font-size: 10pt;
  text-align: center;
  height: 50px;
  border: 2px solid #eaecef;
  border-radius: 15px;
}

.submit {
  background: #3f50b5;
  letter-spacing: 5px;
  font-family: Alata;
  font-weight: bold;
  font-size: 18pt;
  border: 3px solid #383733;
  border-radius: 15px;
  color: white;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
}
</style>
