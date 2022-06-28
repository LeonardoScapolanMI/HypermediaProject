<template>
    <div class="height">

    <!-- BREADCRUMB -->

    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" id="old">HOME</a></li>
        <li class="breadcrumb-item"><a href="/allpois" id="old">Tutti i punti di interesse</a></li>
        <li class="breadcrumb-item active" aria-current="page" id="new">{{ name }}</li>
      </ol>
    </div>
      
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

    const itList = []
    const evList = []

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

    return {
      name: data.name,
      description: data.description,
      imagesV: data.Images,
      mapurl: data.mapURL,
      itList,
      evList,
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