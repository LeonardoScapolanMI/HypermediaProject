<template>
    <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>
      
    <!-- Insert the title and the subtitle --> 

    <div class="page-title">
      <h1>{{ name }}</h1> 
      <hr class="subtitle">
      <span class="orientation-info">PUNTO DI INTERESSE</span> 
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
        <button 
          class="button"
          onclick="location.href='/allitineraries'"
          >Tutti gli itinerari
        </button>
        <CardCarousel class="card-car" :content="itList" @onSeeDetails="(id) => $router.push('/itinerary_details/'+id)"/>
      </div>
  
      <div  v-if="evList.length > 0" class="carousel-title">
        <h3>Eventi correlati</h3>
        <hr class="subline" />
        <button 
          class="button"
          onclick="location.href='/allevents'"
          >Tutti gli eventi
        </button>
        <CardCarousel class="card-car" :content="evList" @onSeeDetails="(id) => $router.push('/event_details/'+id)"/>
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
  name: 'POI',
  components:{
    SlideShow,
    MapBox,
    CardCarousel,
    BreadCrumb,
    DropUp
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
    function formatDescription(d) {
      const description = d.split(".")[0]
      return description.concat('.')
    }

    return {
      name: data.name,
      description: data.description,
      imagesV: data.Images,
      mapurl: data.mapURL,
      itList,
      evList,
      bc,
      descriptionmeta: formatDescription(data.description),
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {hid:'description',
        name:'description',
          content: this.descriptionmeta,
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