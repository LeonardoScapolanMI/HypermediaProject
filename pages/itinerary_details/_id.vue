<template>
  <div class="height">

    <!-- TITOLO -->

        <div class="page-title">
          <h1>{{name}}</h1> 
          <hr class="subtitle">
          <h4>ITINERARIO</h4> 
        </div>

    
      <div class="title-image-container">
        <img :src="image.URL" :alt="image.caption" class="title-image"/>
      </div>
  
    <div class="container">
    <div class="row">
      <div class="col-md-6">
        <!-- PRINTING the overview of the itinerary -->
        <p class="text-with-line-break ">{{ overview }}</p>
      </div>
      <div class="col-md-6">
          <MapBox v-if="mapURL" :indirizzo="mapURL"/>
      </div>
    </div>
    </div>

    <!-- PRINTING ALL POIS CORRELATED -->

      <div v-if="poiList.length > 0" class="page-title">
        <h3>Punti di interesse correlati</h3>
        <hr class="separator" />
        <CardCarousel :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
      </div>

      <!-- BACK UP BUTTON -->

    <div class="dropup">
      <a href="#" id="up-button" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>
  </div>
</template>

<script>
import CardCarousel from '~/components/CardCarousel.vue'
import MapBox from '~/components/MapBox.vue'

export default {
  name: 'Itinerary',
  components: { CardCarousel,MapBox },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(
      'api/itinerary' + id
    )
    // Fetching the pois of the itinerary and preparing them
    const poiList = []
    for (const poi of data.PointOfInterests) {
      poiList.push({
        id: poi._id,
        image: poi.Images[0],
        name: poi.name,
        description: poi.description,
      })
    }

    // console.log(data)
    return {
      name: data.name,
      overview: data.overview,
      image: data.representativeImage,
      mapURL: data.mapURL,
      poiList,
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
