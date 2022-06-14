<template>
  <div>
    <the-header />

    <!-- MAPBOX -->
    <map-box
      :indirizzo="'https://maps.google.com/maps?q=milano+piazza+leonardo+da+vinci+32&t=&z=13&ie=UTF8&iwloc=&output=embed'"
    />
    
    
  <card-carousel :content="content" :typeList="POI" />
    <the-footer />
  </div>
</template>

<script>
import CardCarousel from '~/components/CardCarousel.vue'

import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'




export default {
  name: 'IndexPage',
  components: { TheFooter, TheHeader, CardCarousel },
  async asyncData({ $axios }) {
    
const reqBody = {
      params: {
        
      },
    }
    const { data } = await $axios.get('http://localhost:3000/api/poi', reqBody)
      
      

    return {
      content: data.data,
     
    }
  },
 
  data() {
    return {
      
      
    }
  },

}
</script>
