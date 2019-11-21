<template>
  <div class="map">
    <GmapMap
      :zoom="zoom"
      :center="center"
      map-type-id="roadmap"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        v-for="(task, indexTask) in itinerary"
        :ref="indexTask"
        :key="indexTask"
        :position="task.position"
        :icon="'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
// import * as GmapCustomMarker from "vue2-gmap-custom-marker";
export default {
  name: "Map",
  data: () => {
    return {
      zoom: 13,
      center: {
        lat: 40,
        lng: -96.9903
      },
      itinerary: [
        {
          text: "Yu Garden",
          position: {
            lat: 40,
            lng: -93
          }
        }
      ]
    };
  },
  // components: {
  //   "gmap-custom-marker": GmapCustomMarker
  // },
  computed: {
    google: gmapApi
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
