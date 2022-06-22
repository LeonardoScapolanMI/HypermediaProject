<template>
  <div>

    <!-- TITLE -->

    <div class="page-title">
          <h1>{{ name }}</h1> 
          <hr class="subtitle">
          <h4>TYPE OF SERVICES SECTION</h4> 
    </div>

    <!-- IMMAGINE -->

    <div class="container">
      <div class="row">
        <div><img src="image.URL" id="image" alt="image.caption" /></div>
      </div>
    </div>

    <!-- LONG CARDS -->

    <div class="content">
        <div
          v-for="(service, serIndex) of servList"
          :key="`ser-index-${serIndex}`"
        >
          <long-card
            image-url="service.image[0].URL"
            image-caption="service.image.caption"
            :title="service.name"
            :phone="service.phone"
            :website="service.website"
            :address="service.address"
          />
      </div>
    </div>
  
    </div>
</template>

<script>
import LongCard from '~/components/LongCard.vue'

export default {
  name: 'TypeOfServices',
  components: { LongCard },

  async asyncData({ route, $axios }) {
    const { id } = route.params

    const { data } = await $axios.get('/api/serviceType' + id)
    return {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      image: data.Image,
      servList:data.data,
    }
    
  },

  data() {
    return {

    }
  },
  

  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
// console.log(this.servList + 'CIAOOOOOOOOOOOOOOOOOOO')
</script>

