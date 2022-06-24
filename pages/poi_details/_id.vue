<template>
    <div class="height">
      
    <!-- TITOLO -->

    <div class="page-title">
      <h1>{{ name }}</h1> 
      <hr class="subtitle">
      <h4>PUNTO D'INTERESSE</h4> 
    </div>

    <!-- SLIDESHOW -->

    <div class="title-image-container">
      <SlideShow :images="imagesV" class="title-image" />
    </div>

      <!-- MAPBOX -->

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="text-with-line-break">{{ description }}</p>
          </div>
          <div class="col-md-6">
            <MapBox v-if="mapurl" :indirizzo="mapurl"/>
            <!-- <MapBox v-else :indirizzo="poiList[0].mapURL"/> -->
          </div>  
        </div> <!-- row -->
       </div>

      <!-- Carousels of Cards --> 
      
      <div v-if="itList.length > 0" class="page-title">
        <h3>Itinerari correlati</h3>
        <hr class="separator" />
        <a href="/allitineraries" class="all-button">Tutti gli itinerari</a>
        <CardCarousel :content="itList" @onSeeDetails="(id) => $router.push('/itinerary_details/'+id)"/>
      </div>
      
      <div v-if="evList.length > 0" class="page-title">
        <h3>Eventi correlati</h3>
        <hr class="separator" />
        <a href="/allevents" class="all-button">Tutti gli eventi</a>
        <CardCarousel :content="evList" @onSeeDetails="(id) => $router.push('/event_details/'+id)"/>
      </div>

      <!-- <div v-if="poiList.length > 0" class="page-title">
        <h3>Altri punti di interesse</h3>
        <hr class="separator" />
        <a href="/allpois" class="all-button">Tutti i punti di interesse</a>
        <CardCarousel :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
      </div> -->
      
      <!-- BACK UP BUTTON -->

    <div class="dropup">
      <a href="#" id="up-button" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>

    </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
import MapBox from '~/components/MapBox.vue'
import CardCarousel from '~/components/CardCarousel.vue'
export default {
  name: 'POI',
  components:{
    SlideShow,
    MapBox,
    CardCarousel,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('api/poi' + id) // NB: Cambiare indirizzo nel deploy!
    // const { poiExtra } = await $axios.get('http://api/poi')

    const itList = []
    const evList = []
    /*const poiList = []
    // Get some pois
    for (const poi of data.data.PointOfInterest) {
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
  fetchOnServer: false, // too see if it's a problem for crawlers
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
</script>

<style scoped>
  .card-car{
    margin: auto;
    width: 100%;
    margin-bottom: 1.5em;
  }

</style>