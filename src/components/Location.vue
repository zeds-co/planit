<template>
  <div class="locationWrap">
    <h1>Where is your destination?</h1>
    <div class="location">
      <select @change="e => onCountryChange(e.target.value)">
        <option>COUNTRY</option>
        <option
          v-for="country in countries"
          :key="country.countryCode"
          :value="country.countryName"
          >{{ country.countryName }}</option
        >
      </select>
      <select @change="e => onCityChange(e.target.value)">
        <option v-for="city in cities" :key="city" :value="city">{{
          city
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
import axios from "axios";
export default {
  name: "Location",
  data: () => ({
    countries: [],
    cities: []
  }),
  mounted() {
    this.countries = countryDetails.map(item => ({
      countryName: item.country,
      countryCode: item.country_code
    }));
  },
  methods: {
    async onCountryChange(countryName, countryCode) {
      this.$emit("country-change", countryName);
      const cities = await axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${countryCode}`,
        {
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key": "f8458b1c78msh0cabb0870fc79a6p1d44adjsn84de5db4361c"
        }
      );
      this.cities = cities;
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
