<template>
  <div class="location">
    <h2>Where are you going?</h2>
    <input
      type="text"
      id="location"
      name="trip-location"
      size="15"
      @change="e => onChange(e.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Location",
  methods: {
    onChange(location) {
      this.$emit("location-change", location);
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
