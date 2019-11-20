<template>
  <div class="location">
    <h2>Where are you going?</h2>
    <label for="city">City:</label>
    <input
      type="text"
      id="city"
      name="trip-city"
      size="15"
      @change="e => onCityChange(e.target.value)"
    />
    <label for="country">Country:</label>
    <input
      type="text"
      id="country"
      name="trip-country"
      size="15"
      @change="e => onCountryChange(e.target.value)"
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
<style scoped>
#location {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.location {
  margin: 2rem;
}

label {
  font-size: 18pt;
  margin: 1rem;
}

input {
  width: 300px;
  margin: 1rem;
}

h2 {
  text-align: center;
}
</style>
