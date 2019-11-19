<template>
  <div class="headerWrap">
    <div class="header">
      <div class="locationWrap">
        <div class="location">{{ location }}</div>
        <div class="term">{{ term }} DAY TRIP ( {{ date }} )</div>
      </div>
      <div class="exchangeWrap">
        <div class="exchange">1 CNY = 15.4621 JPY</div>
        <div class="exchange">100 JPY = 6.46743 CNY</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tripsummary",
  data: () => ({
    location: "Shanghai",
    term: 3,
    date: "12/27/2019 - 12/29/2019"
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.location {
  font-size: 42px;
}
</style>
