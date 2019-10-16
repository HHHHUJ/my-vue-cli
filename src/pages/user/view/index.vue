<template>
  <div>
    <h4>user pages</h4>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      style="height: 90vh"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
        projection="EPSG:4326"
      ></vl-view>

      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        zoom: 2,
        center: [0, 0],
        rotation: 0
      };
    }
  };
</script>
