<template>
  <div>
      <!-- TITOLO -->

        <div class="page-title">
          <h1>{{name}}</h1> 
          <hr class="subtitle">
          <h4>EVENTO</h4> 
        </div>

      <!-- SLIDESHOW -->

      <div class="title-image-container"><SlideShow :images="imagesV" class="title-image" /></div>
      

      <!-- MAPBOX -->

        <div class="row">
            <div class="col-md-2"></div>
                <div class="col-md-6" >
                    <p id="text text-with-line-break">{{overview}}</p>
                    <p> L'evento inizierà il:{{sDate}} </p>
                    <p v-if="sDate!=eDate"> e fine il : {{eDate}} </p>
                    <p v-if="cost!='gratuito'"> al costo di: {{cost}}. </p>
                     
            </div> <!-- col -->
           
             
                <div class="col-md-4" >
                  <center>
                <MapBox v-if="mapurl" :indirizzo="mapurl" class="map"/>
                  </center>
            </div>         
            </div> <!-- row -->

        <!-- CARD CAROUSEL --> 
        
          
        <CardCarousel class="card-car" :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
          

        
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
p {
  display: inline;
}

.page-title {
  margin: 30px;
}

.col-md-6 {
  padding:30px;

}
 
 .col-md-4 {
  padding-top: 30px;
 }

  .card-car{
    margin: auto;
    width: 100%;
    margin-top: 50px;
   margin-bottom: 50px;
  }


</style>
