<template>
  <div class="locationWrap">
    <h1>Where is your destination?</h1>
    <div class="location">
      <input
        type="text"
        placeholder="CITY"
        id="city"
        name="trip-city"
        size="15"
        @change="e => onCityChange(e.target.value)"
      />
      <input
        placeholder="COUNTRY"
        type="text"
        id="country"
        name="trip-country"
        size="15"
        @change="e => onCountryChange(e.target.value)"
      />
    </div>
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

.locationWrap {
  margin: 2rem;
}
.location {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  font-size: 18pt;
  margin: 1rem;
}

input {
  width: 300px;
  margin: 1rem;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
}
</style>
