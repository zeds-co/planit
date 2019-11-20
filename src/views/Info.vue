<template>
  <div class="info">
    <div>{{ duration }}</div>
    <div v-if="city !== null && country !== null">
      {{ `${city}, ${country}` }}
    </div>
    <Location
      v-on:city-change="city => onCityChange(city)"
      v-on:country-change="country => onCountryChange(country)"
    />
    <Time
      v-on:start-input="start => onStartInput(start)"
      v-on:end-input="end => onEndInput(end)"
    />
    <button type="button" v-on:click="onClick()">Submit</button>
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
    },
    onCityChange(city) {
      this.city = city;
    },
    onStartInput(start) {
      this.tripStart = start;
      if (this.tripEnd) {
        const startDate = new Date(this.tripStart);
        const endDate = new Date(this.tripEnd);
        this.duration = (endDate.getTime() - startDate.getTime()) / 86400000;
      }
    },
    onEndInput(end) {
      this.tripEnd = end;
      if (this.tripStart) {
        const startDate = new Date(this.tripStart);
        const endDate = new Date(this.tripEnd);
        this.duration = (endDate.getTime() - startDate.getTime()) / 86400000;
      }
    },
    onClick() {
      if (this.country && this.city && this.tripStart && this.tripEnd) {
        localStorage.country = this.country;
        localStorage.city = this.city;
        localStorage.tripStart = this.tripStart;
        localStorage.tripEnd = this.tripEnd;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
