<template>
  <div class="headerWrap">
    <div class="header">
      <div class="locationWrap">
        <div class="location">{{ `${city}, ${country}` }}</div>
        <div class="term">
          {{ duration }} DAY TRIP | {{ `${this.tripStart} ~ ${this.tripEnd}` }}
        </div>
      </div>
      <div class="exchangeWrap">
        <div class="exchange-title">EXCHANGE RATE</div>
        <div class="exchange-item">1 CNY = 15.4621 JPY</div>
        <div class="exchange-item">100 JPY = 6.46743 CNY</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tripsummary",
  data: () => ({
    country: null,
    city: null,
    tripStart: null,
    tripEnd: null,
    duration: null
  }),
  mounted() {
    this.country = localStorage.country;
    this.city = localStorage.city;
    this.tripStart = localStorage.tripStart;
    this.tripEnd = localStorage.tripEnd;
    const start = new Date(localStorage.tripStart);
    const end = new Date(localStorage.tripEnd);
    this.duration = (end.getTime() - start.getTime()) / 86400000;
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
