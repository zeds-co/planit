<template>
  <div class="headerWrap">
    <div class="header">
      <div class="locationWrap">
        <div class="location">{{ `${city}, ${country}` }}</div>
        <div class="term">
          {{ duration }} DAY TRIP |
          {{
            `${this.tripStart
              .toString()
              .toUpperCase()
              .split(" ")
              .slice(0, 3)
              .join(" ")} ~ ${this.tripEnd
              .toUpperCase()
              .split(" ")
              .slice(0, 4)
              .join(" ")}`
          }}
        </div>
      </div>
      <div v-if="toCurrency" class="exchangeWrap">
        <div class="exchangeRate">
          {{ `1 ${fromCurrency} = ${exchangeRate1} ${toCurrency}` }}
        </div>
        <div class="exchangeRate">
          {{ `1 ${toCurrency} = ${exchangeRate2} ${fromCurrency}` }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import countryDetails from "../../data/country_details.json";
import moment from "moment";

export default {
  name: "Tripsummary",
  data: () => ({
    country: null,
    city: null,
    tripStart: localStorage.tripStart,
    tripEnd: localStorage.tripEnd,
    duration: null,
    fromCurrency: null,
    toCurrency: null,
    exchangeRate1: null,
    exchangeRate2: null
  }),
  mounted() {
    this.country = localStorage.country;
    this.city = localStorage.city;
    this.tripStart = localStorage.tripStart;
    this.tripEnd = localStorage.tripEnd;

    const start = new Date(localStorage.tripStart);
    const end = new Date(localStorage.tripEnd);
    this.duration = 1 + Number((end.getTime() - start.getTime())) / 86400000;

    this.toCurrency = countryDetails.filter(
      item => item.country === localStorage.country
    )[0].currency_code;
    this.fetchUserLocationInfo()
    this.fetchExchangeRate();
  },
  methods: {
    async fetchExchangeRate() {
      const exchangeRate1 = await axios.get(
        `https://currency-exchange.p.rapidapi.com/exchange?q=1&from=${this.fromCurrency}&to=${this.toCurrency}`,
        {
          headers: {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key":
              "b6e4f9fc03msh80db2bc55980af4p181a67jsnb4b3c557714d"
          }
        }
      );
      this.exchangeRate1 = exchangeRate1.data;
      const exchangeRate2 = await axios.get(
        `https://currency-exchange.p.rapidapi.com/exchange?q=1&from=${this.toCurrency}&to=${this.fromCurrency}`,
        {
          headers: {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key":
              "b6e4f9fc03msh80db2bc55980af4p181a67jsnb4b3c557714d"
          }
        }
      );
      this.exchangeRate2 = exchangeRate2.data;
    },
    async fetchUserLocationInfo() {
      let ipAddress = await axios("http://ipinfo.io");
      ipAddress = ipAddress.data;
      const userLocationInfo = await axios(
        `https://ip-geo-location.p.rapidapi.com/ip/%7Bip%7D?${ipAddress}`,
        {
          headers: {
            "x-rapidapi-host": "ip-geo-location.p.rapidapi.com",
            "x-rapidapi-key":
              "b6e4f9fc03msh80db2bc55980af4p181a67jsnb4b3c557714d"
          }
        }
      );
      this.fromCurrency = userLocationInfo.data.currency.code;
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("ddd MMM D YYYY");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.location {
  font-size: 42px;
}

.exchange-title {
  font-weight: bold;
  margin: 5px 5px 5px 0px;
}
</style>
