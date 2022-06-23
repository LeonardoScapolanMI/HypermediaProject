<template>
  <div class="height">
    
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
            <p id="text text-with-line-break">{{overview}}</p>
            <p> L'evento inizierà il:{{sDate}} </p>
            <p v-if="sDate!=eDate"> e fine il : {{eDate}} </p>
            <p v-if="cost!='gratuito'"> al costo di: {{cost}}. </p>
          </div>
          <div class="col-md-6" >
              <MapBox v-if="mapurl" :indirizzo="mapurl" class="map"/>
          </div>         
        </div> <!-- row -->
        </div>

      <!-- CARD CAROUSEL --> 

      <div v-if="poiList.length > 0" class="page-title">
        <h3>Punti di interesse correlati</h3>
        <hr class="separator" />
        <a href="/allpois" class="poi-button">Tutti i punti di interesse</a>
        <CardCarousel class="card-car" :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
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

import SlideShow from '~/components/Slideshow.vue'
import MapBox from '~/components/MapBox.vue'
import CardCarousel from '~/components/CardCarousel.vue'

export default {
  
  name: 'Event',
  components: { SlideShow, MapBox, CardCarousel},
  filters: {
    
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

  computed: {
    
  },
  
  
  methods: {
    

    backToList() {
      this.$router.push('/list')
    },
  },
   
}
</script>

<style scoped>
 .poi-button {
  color: var(--white);
  background-color: var(--brown);
  border: 1px solid var(--green);
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}
.poi-button:hover {
  color: var(--green);
  text-decoration: none;
}
  .card-car{
    margin: auto;
    width: 100%;
    margin-top: 50px;
   margin-bottom: 50px;
  }

</style>
