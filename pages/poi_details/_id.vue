<template>
    <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>
      
    <!-- Insert the title and the subtitle --> 

    <div class="page-title">
      <h1>{{ name }}</h1> 
      <hr class="subtitle">
      <h4>PUNTO DI INTERESSE</h4> 
    </div>

    <!-- Insert slideshow by calling the component -->

    <SlideShow :images="imagesV" class="title-image-container"/>

    <!-- Insert mapbox by calling the component and printing a description -->

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="text-with-line-break">{{ description }}</p>
          </div>
          <div class="col-md-6">
            <MapBox v-if="mapurl" :indirizzo="mapurl"/>
          </div>  
        </div>
       </div>

      <!-- Insert card carousel by calling the component -->
    
      <div v-if="itList.length > 0" class="carousel-title">
        <h3>Itinerari correlati</h3>
        <hr class="subline" />
        <a href="/allitineraries" class="carousel-button">Tutti gli itinerari</a>
        <CardCarousel class="card-car" :content="itList" @onSeeDetails="(id) => $router.push('/itinerary_details/'+id)"/>
      </div>
  
      <div  v-if="evList.length > 0" class="carousel-title">
        <h3>Eventi correlati</h3>
        <hr class="subline" />
        <a href="/allevents" class="carousel-button">Tutti gli eventi</a>
        <CardCarousel class="card-car" :content="evList" @onSeeDetails="(id) => $router.push('/event_details/'+id)"/>
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
  name: 'POI',
  components:{
    SlideShow,
    MapBox,
    CardCarousel,
    BreadCrumb,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('api/poi' + id) // NB: Cambiare indirizzo nel deploy!

    const itList = []
    const evList = []
    
    const bc =[]
    bc.push({title:'Tutti i Punti di Interesse', path:'/allpois'})
    bc.push({title:data.name, path:'#'})

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
      bc,
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

.background-it {
  background: linear-gradient(var(--dark), var(--dark)), url("/images/itinerary/background.jpg") center ;
  background-size: 50% 50%;
  height: 700px;
  margin-bottom: 30px;
}

.background-ev {
  background: linear-gradient(var(--dark), var(--dark)), url("/images/event/background.jpg") center ;
  background-size: 50% 50%;
  height: 700px;
  margin-bottom: 30px;
}

</style>