<template>
  <div>
    <!-- TITOLO -->
    <div>
      <br />
      <h1 class="text-center">{{ name }}</h1>
      <hr id="title" />
      <h4 class="text-center">ITINERARIO</h4>
    </div>
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md">
        <img :src="image.URL" :alt="image.caption" />
      </div>
      <div class="col-md"></div>
    </div>

    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-6">
        <p id="text text-with-line-break ">{{ overview }}</p>
        <!-- TO FILL -->
      </div>
      <!-- col -->
      <div class="col-md-1"></div>
    </div>
    <!-- row -->
    <!-- PRINTING ALL POIS CORRELATED -->
    <CardCarousel :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
  </div>
</template>

<script>
import CardCarousel from '~/components/CardCarousel.vue'

export default {
  name: 'Itinerary',
  components: { CardCarousel },
  async asyncData({ route, $axios, $router }) {
    const { id } = route.params
    const { data } = await $axios.get(
      'http://localhost:3000/api/itinerary' + id
    )

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
