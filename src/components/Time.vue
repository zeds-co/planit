<template>
  <div class="time">
    <div id="time-item">
      <h2>From</h2>
      <datetime
        placeholder="START"
        class="theme-orange"
        v-model="date"
        :value="new Date()"
        :min="new Date()"
        @input="value => onStartInput(value)"
      ></datetime>
    </div>
    <div id="time-item">
      <h2>Until</h2>
      <datetime
        placeholder="END"
        v-model="date"
        :value="new Date()"
        :min="new Date()"
        @input="date => onEndInput(date)"
      ></datetime>
    </div>
  </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "Time",
  components: { datetime: Datetime },
  methods: {
    onStartInput(start) {
      this.tripStart = start;
      this.$emit("start-input", start);
    },
    onEndInput(end) {
      this.tripEnd = end;
      this.$emit("end-input", end);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

.location {
  margin: 2rem;
}

h2 {
  font-size: 18pt;
  font-weight: bold;
  margin: 1rem;
  text-align: center;
}

#time-item {
  margin: 10px;
  width: auto;
}

input {
  width: auto;
  margin: 5px;
  padding: 5px;
  text-align: center;
}
</style>
