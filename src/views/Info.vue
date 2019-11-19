<template>
  <div class="info">
    <div>{{ duration }}</div>
    <div>{{ tripLocation }}</div>
    <Location v-on:location-change="location => onLocationChange(location)" />
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
      tripLocation: null,
      tripStart: null,
      tripEnd: null,
      duration: null
    };
  },
  methods: {
    onLocationChange(location) {
      this.tripLocation = location;
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
      if (this.tripLocation && this.tripStart && this.tripEnd) {
        localStorage.tripLocation = this.tripLocation;
        localStorage.tripStart = this.tripStart;
        localStorage.tripEnd = this.tripEnd;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
