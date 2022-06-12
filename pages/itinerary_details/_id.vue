<template>
    <div>
        <!-- TITOLO -->
        <div><br>
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">ITINERARIO</h4> 
        </div>
        <div class="row">
          <div class="col-md"></div>
          <div class="col-md">
            <img :src="image.URL" :alt="image.caption">
          </div>
          <div class="col-md"></div>
        </div>
        
        <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-6">
                    <p id="text">{{overview}}</p><!-- TO FILL -->
                 </div> <!-- col -->
            <div class="col-md-1"></div>
        </div> <!-- row -->
       <!-- PRINTING ALL POIS CORRELATED -->
        <div class="row">
          <div
            class="col-md-4"
            v-for="(poi, poiIndex) of poiList"
            :key="`poi-index-${poiIndex}`"
          >
            <card
              @onSeeDetails="$router.push('/poi_details/' + poi._id)"
              :imageUrl="poi.Images[0].URL"
              :imageCaption="poi.Images[0].caption"
              :title="poi.name"
              :description="poi.description"
            />
          </div>
        </div>
    </div>
</template>

<script>
export default {
  components:{
  },
  name: 'punto-interesse',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/itinerary' + id)
    // console.log(data)
    return {
      name: data.name,
      overview: data.overview,
      image: data.representativeImage,
      poiList: data.PointOfInterests,
      
    }
    
  },
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
</script>

<style scoped>
img {
  height: 100% !important;
  max-width: 90% !important;
  position: relative;
  margin: 0.5em;
  flex: 0 1 180px;
  padding-bottom: 2em;
  display: block;
  overflow: hidden;
}

</style>