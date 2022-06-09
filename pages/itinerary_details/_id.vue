<template>
    <div>
        <TheHeader />
        <!-- TITOLO -->
        <div><br>
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">ITINERARIO</h4> 
        </div>
        <div class="row">
          <img :src="image.URL" :alt="image.caption">
        </div>
        <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-6">
                    <p id="text">{{overview}}</p><!-- TO FILL -->
                 </div> <!-- col -->
            <div class="col-md-1"></div>
        </div> <!-- row -->
       <!-- PRINTING ALL POIS CORRELATED -->
        <div class="row">
          <div
            class="col-md-4"
            v-for="(poi, poiIndex) of poiList"
            :key="`poi-index-${poiIndex}`"
          >
            <card
              @onSeeDetails="$router.push('/poi_details/' + poi.id)"
              :imageUrl="poi.images[0].URL"
              :imageCaption="poi.images[0].caption"
              :title="poi.name"
              :description="poi.description"
            />
          </div>
        </div>


        
        <TheFooter/>
    </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'

export default {
  components:{
    TheFooter,
    TheHeader,
  },
  name: 'punto-interesse',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/itinerary' + id)
    return {
      name: data.name,
      overview: data.overview,
      image: data.representativeImage,
      poiList: data.poi,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
</script>
