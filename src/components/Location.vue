<template>
  <div class="location">
    <label for="location">Where are you going?</label>
    <input
      type="text"
      id="location"
      name="trip-location"
      size="15"
      @change="e => onChange(e.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Location",
  methods: {
    onChange(location) {
      this.$emit("location-change", location);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
