<template>
  <div class="height">

    <!-- BREADCRUMB -->

    <BreadCrumb :title="name"/>

      <!-- TITOLO -->

        <div class="page-title">
          <h1>{{ name }}</h1> 
          <hr class="subtitle">
          <h4>EVENTO</h4> 
        </div>

      <!-- SLIDESHOW -->

      <div class="title-image-container">
        <SlideShow :images="imagesV" class="title-image" />
      </div>

      <!-- MAPBOX -->
      
      <div class="container">
        <div class="row">
          <div class="col-md-6" >
            <p class="text-with-line-break">{{ overview }}</p>
            <p v-if="sDate!=eDate"> L'evento avrà inizio il: {{sDate | moment}} </p>     
            <p v-if="sDate!=eDate"> e fine il: {{eDate | moment}} </p>
            <p v-if="sDate===eDate"> L'evento si terrà il:  {{sDate | moment}} </p> 
            <p v-if="cost!='gratuito'"> al costo di: {{cost}}. </p>
            <p v-else> a libera entrata. </p>        
          </div> 
          <div class="col-md-6">
            <MapBox v-if="mapurl" :indirizzo="mapurl"/>
          </div>
        </div> <!-- row -->
      </div>

      <!-- CARD CAROUSEL --> 

      <div v-if="poiList.length > 0" class="page-title">
        <h3>Punti di interesse correlati</h3>
        <hr class="separator" />
        <nuxt-link to="/allpois" class="all-button">Tutti i punti di interesse</nuxt-link>
        <CardCarousel class="card-car" :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
      </div>
      
  </div>
</template>

<script>
import moment from 'moment'
import SlideShow from '~/components/Slideshow.vue'
import MapBox from '~/components/MapBox.vue'
import CardCarousel from '~/components/CardCarousel.vue'

export default {
  
  name: 'Event',
  components: { SlideShow, MapBox, CardCarousel},
  filters: {
    // eslint-disable-next-line object-shorthand
    moment : function(date) {
      return moment(date).format("D/M/Y")
    }
    
   },

   async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(
      'api/event' + id
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
    
    return {
      name: data.name,
      imagesV: data.Images,
      overview: data.overview,
      mapurl: data.mapURL,
      sDate: data.startDate,
      eDate: data.endDate,
      cost: data.cost,
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

<style scoped>
p {
  display: inline-block;
}
</style>
