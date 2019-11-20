<template>
  <div class="dashboard">
    <tripsummary />
    <days />
  </div>
</template>

<script>
import Tripsummary from "../components/Tripsummary";
import Days from "../components/Days";

export default {
  name: "Dashboard",
  components: {
    tripsummary: Tripsummary,
    days: Days
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  padding: 2rem;
}
.header {
  display: flex;
  justify-content: space-between;
}
.location {
  font-size: 42px;
}
.contents {
  display: flex;
  overflow-x: scroll;
  background: #eee;
  height: 80%;
  padding: 10px;
  margin-top: 50px;
  border-radius: 15px;
}
.dayHeader {
  display: flex;
  justify-content: space-between;
  margin: 15px;
  font-size: 20px;
}
.dayWrap {
  height: 500px;
  flex: 0 0 350px;
}
.itineraryWrap {
  border: 1px #999 solid;
  margin: 15px;
}
.itinerary {
  width: 90%;
  height: 100px;
  border: 1px #ccc solid;
  margin: 15px auto;
}
</style>
