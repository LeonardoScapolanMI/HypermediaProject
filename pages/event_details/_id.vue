<template>
  <div>
      <!-- TITOLO -->

        <div class="page-title">
          <h1>{{name}}</h1> 
          <hr class="subtitle">
          <h4>EVENTO</h4> 
        </div>

      <!-- SLIDESHOW -->

      <SlideShow :images="imagesV" class="title-image" />

      <!-- MAPBOX -->

        <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-6">
                    <p id="text text-with-line-break">{{overview}}</p>
            </div> <!-- col -->
            
            <div class="col-md-5">
                <MapBox v-if="mapurl" :indirizzo="mapurl"/>
                <MapBox v-else :indirizzo="evList[0].mapURL"/>
            </div>  
        </div> <!-- row -->

        <!-- CARD CAROUSEL --> 
      <div v-if="poiList.length > 0" class="row"><CardCarousel :content="poiList"/></div>
        
  </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'

export default {
  name: 'event',
  components: { SlideShow },
  data() {
    return {
      overview: 'Ecco dove avverrà l evento. Non perdertelo!'
    }
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/event' + id)

    const poiList = []
    for (const poi of data.PointOfInterest) {
      poiList.push({
        id: poi._id,
        image: poi.Images[0],
        name: poi.name,
        description: poi.description,
      })
    }
    
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
