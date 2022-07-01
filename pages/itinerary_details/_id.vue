<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>

    <!-- Insert the title and the subtitle --> 

    <div class="page-title">
      <h1>{{ name }}</h1> 
      <hr class="subtitle">
      <span class="orientation-info">ITINERARIO</span> 
    </div>

    <!-- Insert an image -->

    <div class="title-image-container">
      <img :src="image.URL" :alt="image.caption" class="title-image"/>
    </div>
  
    <!-- Insert mapbox by calling the component and printing an overview -->

    <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p class="text-with-line-break ">{{ overview }}</p>
      </div>
      <div class="col-md-6">
        <MapBox v-if="mapURL" :indirizzo="mapURL"/>
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
import CardCarousel from '~/components/CardCarousel.vue'
import MapBox from '~/components/MapBox.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import DropUp from '~/components/DropUp.vue'

export default {
  name: 'Itinerary',
  components: { CardCarousel, MapBox, BreadCrumb, DropUp },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get(
      'api/itinerary' + id
    )

    const bc =[]
    bc.push({title:'Tutti gli Itinerari', path:'/allitineraries'})
    bc.push({title:data.name, path:'#'})

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
 function formatDescription(d) {
      const description = d.split(".")[0]
      return description.concat('.')
    }
    // console.log(data)
    return {
      name: data.name,
      overview: data.overview,
      image: data.representativeImage,
      mapURL: data.mapURL,
      poiList,
      bc,
      description: formatDescription(data.overview),
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
