<template>
  <div class="info">
    <div id="info-item" v-if="!isNaN(duration)">{{ duration }}</div>
    <div id="info-item" v-if="city !== null && country !== null">
      {{ `${city}, ${country}` }}
    </div>
    <Location
      id="info-item"
      v-on:city-change="city => onCityChange(city)"
      v-on:country-change="country => onCountryChange(country)"
    />
    <Time
      id="info-item"
      v-on:start-input="start => onStartInput(start)"
      v-on:end-input="end => onEndInput(end)"
    />
    <div class="errMsg">{{ errMsg }}</div>
    <button type="button" class="submit" v-on:click="checkValues()">
      PLANIT »
    </button>
  </div>
</template>

<script>
import Location from "../components/Location.vue";
import Time from "../components/Time.vue";

export default {
  name: "Info",
  components: {
    Location,
    Time
  },
  data: () => {
    return {
      country: null,
      city: null,
      tripStart: null,
      tripEnd: null,
      duration: null,
      errMsg: null
    };
  },
  methods: {
    onCountryChange(country) {
      this.country = country;
    },
    onCityChange(city) {
      this.city = city;
    },
    onStartInput(start) {
      this.tripStart = start;
      if (this.tripEnd) {
        const startDate = new Date(this.tripStart);
        const endDate = new Date(this.tripEnd);
        this.duration = 1 + Number((endDate.getTime() - startDate.getTime())) / 86400000;
        localStorage.duration = this.duration;
      }
      this.tripStart = this.tripStart;
    },
    onEndInput(end) {
      this.tripEnd = end;
      // localStorage.tripEnd = end;
      if (end) {
        this.tripEnd = end;
        if (this.tripStart) {
          const startDate = new Date(this.tripStart);
          const endDate = new Date(this.tripEnd);
          this.duration =
            1 + Number((endDate.getTime() - startDate.getTime())) / 86400000;
          localStorage.duration = this.duration;
        }
      }
    },
    checkValues() {
      const today = new Date();
      if (this.city === null || this.country === null) {
        this.errMsg = "Please input your full destination.";
      } else if (this.tripStart === null) {
        this.errMsg = "Please select your trip's start day.";
      } else if (this.tripEnd === null) {
        this.errMsg = "Please input your trip's end day.";
      } else if (today.getTime() > this.tripStart) {
        this.errMsg = "Your start day must be after today.";
      } else if (this.tripStart > this.tripEnd) {
        this.errMsg = "Your start day cannot be after your end day.";
      } else {
        this.errMsg = null;
        localStorage.city = this.city;
        localStorage.country = this.country;
        localStorage.tripStart = this.tripStart;
        localStorage.tripEnd = this.tripEnd;
        localStorage.duration = this.duration;
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css?family=Alata&display=swap");

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  height: 600px;
}

#info-item {
  margin: 10px;
  width: 500px;
}

input {
  font-family: Alata;
  font-size: 10pt;
  text-align: center;
  height: 50px;
  border: 2px solid #eaecef;
  border-radius: 15px;
}

.submit {
  background: #3f50b5;
  letter-spacing: 5px;
  font-family: Alata;
  font-weight: bold;
  font-size: 18pt;
  border: 3px solid #383733;
  border-radius: 15px;
  color: white;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
}
.errMsg {
  min-height: 22px;
  color: #b53f3f;
}
input[type="text"]:focus {
  outline: 0;
  border: 5px solid #eaecef;
}
button:focus {
  outline: 0;
}
</style>
