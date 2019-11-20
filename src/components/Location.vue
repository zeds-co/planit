<template>
  <div class="locationWrap">
    <h1>Where is your destination?</h1>
    <div class="location">
      <select @change="e => onCountryChange(e.target.value)">
        <option value="Discrete Mathematics" selected>COUNTRY</option
        ><option v-for="country in countries" :key="country" :value="country">{{
          country
        }}</option>
      </select>
      <input
        type="text"
        placeholder="CITY"
        id="city"
        name="trip-city"
        size="15"
        @change="e => onCityChange(e.target.value)"
      />
    </div>
  </div>
</template>

<script>
import countryDetails from "../../data/country_details.json";
export default {
  name: "Location",
  data: () => ({
    countries: []
  }),
  mounted() {
    this.countries = countryDetails.map(item => item.country);
  },
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
option {
  text-align: center;
  border-radius: 15px;
}

select {
  text-align: center;
  border-radius: 15px;
}

select .lt {
  text-align: center;
  border-radius: 15px;
}

#location {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
input,
select {
  width: 300px;
  margin: 1rem;
  font-family: Alata;
  font-size: 10pt;
  text-align: center;
  height: 50px;
  border: 2px solid #eaecef;
  border-radius: 15px;
  background: #fff;
  padding: 5px;
}
h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
</style>
