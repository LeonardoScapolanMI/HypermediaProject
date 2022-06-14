<template>
    <div>
        <!-- TITOLO -->
        <div><br>
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">PUNTO D'INTERESSE</h4> 
        </div><br>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-6"><SlideShow :images="imagesV"/></div>
          <div class="col"></div>
        </div>
      </div>
        <div class="row">
            <div class="col-md-1">
            </div>
            <div class="col-md-6">
                <p id="text text-with-line-break ">{{description}}</p><!-- TO FILL -->
            </div> <!-- col -->
            <div class="col">
                <MapBox :indirizzo="mapurl"/>
            </div> <!-- col -->
        </div> <!-- row -->
       
      <!-- Carousel of Cards --> 
      <div v-if="itList.length > 0" class="row"><CardCarousel :content="itList"/></div>
      <div v-if="evList.length > 0" class="row"><CardCarousel :content="evList"/></div>
      <!-- <div v-if="poiList.length > 0" class="row"><CardCarousel :content="poiList"/></div> -->
    </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
import MapBox from '~/components/MapBox.vue'
import CardCarousel from '~/components/CardCarousel.vue'
export default {
  components:{
    SlideShow,
    MapBox,
    CardCarousel,
  },
  name: 'punto-interesse',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/poi' + id)
    // const { poiExtra } = await $axios.get('http://localhost:3000/api/poi')

    const itList = []
    const evList = []
   /* const poiList = []
    // Get some pois
   for (const poi of data.PointOfInterest) {
      poiList.push({
        id: poi._id,
        image: poi.Images[0],
        name: poi.name,
        description: poi.description,
      })
    } */
    // Get all involving itineraries
    for (const it of data.Itineraries) {
      itList.push({
        id: it._id,
        image: it.representativeImage,
        name: it.name,
        description: it.overview,
      })
    }
    // Get all events involved
    for (const ev of data.Events) {
      evList.push({
        id: ev._id,
        image: ev.Images[0],
        name: ev.name,
        description: ev.overview,
      })
    }


    // console.log(poiExtra)
    return {
      name: data.name,
      description: data.description,
      imagesV: data.Images,
      mapurl: data.mapURL,
      itList,
      evList,
      // poiList,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
</script>
