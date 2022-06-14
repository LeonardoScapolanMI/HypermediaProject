<template>
    <div>
        <!-- TITOLO -->
        <div><br>
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">PUNTO D'INTERESSE</h4> 
        </div><br>

        <div class="row">
          <div class="col"></div>
          <div class="col-6"><SlideShow :images="imagesV"/></div>
          <div class="col"></div>
        </div>

        <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-6">
                    <p id="text text-with-line-break ">{{description}}</p><!-- TO FILL -->
            </div> <!-- col -->
            <div class="col-md-4">
                <MapBox :indirizzo="mapurl"/>
            </div> <!-- col -->
        </div> <!-- row -->
       
      <!-- Carousel of Cards --> 
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>      
    </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
import MapBox from '~/components/MapBox.vue'
export default {
  components:{
    SlideShow,
    MapBox,
  },
  name: 'punto-interesse',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/poi' + id)
    return {
      name: data.name,
      description: data.description,
      imagesV: data.Images,
      mapurl: data.mapURL,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
</script>
