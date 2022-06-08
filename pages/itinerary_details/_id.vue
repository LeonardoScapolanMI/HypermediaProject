<template>
    <div>
        <TheHeader />
        <!-- TITOLO -->
        <div><br>
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">POINT OF INTEREST</h4> 
        </div><br><br>
        <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-6">
                    <p id="text">{{description}}</p><!-- TO FILL -->
            </div> <!-- col -->
            <div class="col-md-4">
                <div class="text-center">
                    <iframe id="map" :src="mapurl" ></iframe><!-- TO FILL -->
                </div> 
            </div> <!-- col -->
        </div> <!-- row -->
        <div class="row">
          <div class="col"></div>
          <div class="col-6"><SlideShow :images="imagesV"/></div>
          <div class="col"></div>
        </div>
        <TheFooter/>
    </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import SlideShow from '~/components/Slideshow.vue'
export default {
  components:{
    TheFooter,
    TheHeader,
    SlideShow,
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
