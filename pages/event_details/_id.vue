<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>

    <!-- Insert the title and the subtitle --> 

        <div class="page-title">
          <h1>{{ name }}</h1> 
          <hr class="subtitle">
          <h4>EVENTO</h4> 
        </div>

      <!-- Insert slideshow by calling the component -->

      <SlideShow :images="imagesV" class="title-image-container"/>

      <!-- Insert mapbox by calling the component and printing a description -->
      
      <div class="container">
        <div class="row">
          <div class="col-md-6" >
            <p class="text-with-line-break">{{ overview }}</p>
            <p v-if="sDate!=eDate" class="text-with-line-break"> L'evento avrà inizio il {{sDate}} </p>     
            <p v-if="sDate!=eDate" class="text-with-line-break"> e fine il {{eDate}} </p>
            <p v-if="sDate===eDate" class="text-with-line-break"> L'evento si terrà il  {{sDate}} </p> 
            <p v-if="cost!='gratuito'" class="text-with-line-break"> al costo di {{cost}}. </p>
            <p v-else class="text-with-line-break"> a libera entrata. </p> 
          </div> 
          <div class="col-md-6">
            <MapBox v-if="mapurl" :indirizzo="mapurl"/>
          </div>
        </div>
      </div>

      <!-- Insert card carousel by calling the component -->
    
      <div v-if="poiList.length > 0" class="carousel-title">
        <h3>Punti di interesse correlati</h3>
        <hr class="subline" />
        <a href="/allpois" class="carousel-button">Tutti i punti di interesse</a>
        <CardCarousel class="card-car" :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
      </div>
  
    <!-- Insert the back up button -->

    <div class="dropup">
      <a id="up-button" href="#" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>
      
  </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
import MapBox from '~/components/MapBox.vue'
import CardCarousel from '~/components/CardCarousel.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
  
  name: 'Event',
  components: { 
    SlideShow, 
    MapBox, 
    CardCarousel, 
    BreadCrumb
    },

   async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(
      'api/event' + id
    )

    const bc =[]
    bc.push({title:'Tutti gli Eventi', path:'/allevents'})
    bc.push({title:data.name, path:'#'})

    const poiList = []
    for (const poi of data.PointOfInterests) {
      poiList.push({
        id: poi._id,
        image: poi.Images[0],
        name: poi.name,
        description: poi.description,
      })
    }

    function formatDate(d){
      const dateString = d.split("T")[0]
      const dateNumbers = dateString.split("-")

      return dateNumbers[2] + '/' + dateNumbers[1] + '/' + dateNumbers[0]
    }

    function formatDescription(d) {
      const description = d.split(".")[0]
      return description.concat('.')
    }
    
    return {
      name: data.name,
      imagesV: data.Images,
      overview: data.overview,
      mapurl: data.mapURL,
      sDate: formatDate(data.startDate),
      eDate: formatDate(data.endDate),
      cost: data.cost,
      description: formatDescription(data.overview),
      poiList,
      bc,
    }
  },
   head() {
    return {
      title: this.name,
      meta: [
        {hid:'description',
        name:'description',
          content: this.description,
        },
      ],
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

<style>

.background-poi {
  background: linear-gradient(var(--dark), var(--dark)), url("/images/pointOfInterest/background.jpg") center;
  background-size: 50% 50%;
  height: 700px;
  margin-bottom: 30px;
}

p {
  display: inline;
}
</style>
