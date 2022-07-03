<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->
    <BreadCrumb :crumbs='bc'/>

    <!-- Insert the title and the subtitle --> 
        <div class="page-title">
          <h1>{{ name }}</h1> 
          <hr class="subtitle">
          <span class="orientation-info">EVENTO</span> 
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
        <button 
          class="button"
          onclick="location.href='/allpois'"
          >Tutti i punti di interesse
        </button>
        <CardCarousel class="card-car" :content="poiList" @onSeeDetails="(id) => $router.push('/poi_details/'+id)"/>
      </div>
  
    <!-- Insert the back up button -->
    <drop-up/>
      
  </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
import MapBox from '~/components/MapBox.vue'
import CardCarousel from '~/components/CardCarousel.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import DropUp from '~/components/DropUp.vue'

export default {
  name: 'Event',
  components: { 
    SlideShow, 
    MapBox, 
    CardCarousel, 
    BreadCrumb,
    DropUp
    },
   async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(
      'api/event' + id
    )
    const poiList = []
    const bc =[]
    bc.push({title:'Tutti gli Eventi', path:'/allevents'})
    bc.push({title:data.name, path:'#'})
    // Get all related pois
    for (const poi of data.PointOfInterests) {
      poiList.push({
        id: poi._id,
        image: poi.Images[0],
        name: poi.name,
        description: poi.description,
      })
    }
    // funtion to format the event date as dd/mm/yyyy 
    function formatDate(d){
      const dateString = d.split("T")[0]
      const dateNumbers = dateString.split("-")
      return dateNumbers[2] + '/' + dateNumbers[1] + '/' + dateNumbers[0]
    }
    // funtion to format the content
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
        {
          hid:'description',
          name:'description',
          content: this.description,
        },
      ],
    }
  },
  // to see if it's a problem for crawlers
  fetchOnServer: false, 
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
   
}
</script>
