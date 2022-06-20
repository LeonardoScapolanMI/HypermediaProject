<template>
  <div>
    <!-- TITOLO -->

        <div class="page-title">
          <h1>{{name}}</h1> 
          <hr class="subtitle">
          <h4>ITINERARIO</h4> 
        </div>

    
      <div class="title-image-container">
        <img :src="image.URL" :alt="image.caption" class="title-image"/>
      </div>
  

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <!-- PRINTING the overview of the itinerary -->
        <p id="text text-with-line-break ">{{ overview }}</p>
      
      </div>
      <!-- col -->
      <div class="col-md-2"></div>
    </div>

    <!-- PRINTING ALL POIS CORRELATED -->
    <CardCarousel :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
  </div>
</template>

<script>
import CardCarousel from '~/components/CardCarousel.vue'

export default {
  name: 'Itinerary',
  components: { CardCarousel },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(
      'http://localhost:3000/api/itinerary' + id
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
      poiList,
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

</style>
