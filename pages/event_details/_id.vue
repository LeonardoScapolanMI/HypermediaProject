<template>
    <div>
        <!-- TITOLO -->
        <div><br>
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">EVENTO</h4> 
        </div><br><br>

        <div class="row">
          <div class="col"></div>
          <div class="col-6"><SlideShow :images="imagesV"/></div>
          <div class="col"></div>
        </div>

        <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-6">
                    <p id="text">{{overview}}</p><!-- TO FILL -->
            </div> <!-- col -->
            
            <div class="col-md-4">
                <MapBox v-if="mapurl" :indirizzo="mapurl"/>
                <MapBox v-else :indirizzo="poiList[0].mapURL"/>
            </div>  
        </div> <!-- row -->
        
    </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
export default {
  components:{
    SlideShow,
  },
  name: 'punto-interesse',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/event' + id)
    // console.log(data)
    return {
      name: data.name,
      imagesV: data.Images,
      overview: data.overview,
      sDate: data.startDate,
      eDate: data.endDate,
      cost: data.cost,
      mapurl: data.mapUrl,
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
