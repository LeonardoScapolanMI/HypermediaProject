<template>
    <div class="height">

      <!-- BREADCRUMB -->

    <BreadCrumb :title="name"/>
      
    <!-- TITOLO -->

    <div class="page-title">
      <h1>{{ name }}</h1> 
      <hr class="subtitle">
      <h4>PUNTO DI INTERESSE</h4> 
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
        <nuxt-link to="/allitineraries" class="all-button">Tutti gli itinerari</nuxt-link>
        <CardCarousel class="card-car" :content="itList" @onSeeDetails="(id) => $router.push('/itinerary_details/'+id)"/>
      </div>
      
      <div v-if="evList.length > 0" class="page-title">
        <h3>Eventi correlati</h3>
        <hr class="separator" />
        <nuxt-link to="/allevents" class="all-button">Tutti gli eventi</nuxt-link>
        <CardCarousel class="card-car" :content="evList" @onSeeDetails="(id) => $router.push('/event_details/'+id)"/>
      </div>

      <!-- <div v-if="poiList.length > 0" class="page-title">
        <h3>Altri punti di interesse</h3>
        <hr class="separator" />
        <nuxt-link to="/allpois" class="all-button">Tutti i punti di interesse</nuxt-link>
        <CardCarousel class="card-car" :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
      </div> -->

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
    /* const poiList = []
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