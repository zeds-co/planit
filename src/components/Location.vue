<template>
  <div class="location">
    <label for="country">Country:</label>
    <input
      type="text"
      id="country"
      name="trip-country"
      size="15"
      @change="e => onCountryChange(e.target.value)"
    />
    <label for="city">City:</label>
    <input
      type="text"
      id="city"
      name="trip-city"
      size="15"
      @change="e => onCityChange(e.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Location",
  methods: {
    onCountryChange(country) {
      this.$emit("country-change", country);
    },
    onCityChange(city) {
      this.$emit("city-change", city);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
