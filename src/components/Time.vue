<template>
  <div class="time">
    <label for="start">Start date:</label>
    <input
      type="date"
      id="start"
      name="trip-start"
      :value="new Date()"
      :min="new Date()"
      @input="e => onStartInput(e.target.value)"
    />
    <label for="end">End date:</label>
    <input
      type="date"
      id="end"
      name="trip-end"
      :value="new Date()"
      :min="new Date()"
      @input="e => onEndInput(e.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Time",
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
<style scoped></style>
