<template>
  <div class="mapbox">
      
        <iframe  id="map" title="map" :src= "indirizzo"></iframe>
    
  </div> <!-- row , containing the mapbox iframe-->
</template>

<script> 

export default {
  name: 'MapBox',
    props: { 
      indirizzo: { 
        type: String, 
        required:true,
      },
    },
}
    
</script>

<style scoped>

    .mapbox {
      margin:auto;
    }

    #map {
    display: flex;
    justify-content: center;
    height: 100vmin;
	  width: 100vmin;
	  margin:auto;
    margin-bottom: 30px;
    border: 0px;
    width: 100%;
    height: 300px;
    box-shadow: 5px 5px 10px 5px var(--green);
    }

</style>