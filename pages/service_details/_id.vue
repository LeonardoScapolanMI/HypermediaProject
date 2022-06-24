<template>
  <div>
    <!-- TITLE -->

    <div class="page-title">
      <h1>{{name}}</h1>
      <hr class="subtitle" />
      <h4>TYPE OF SERVICES SECTION</h4>
    </div>

    <!-- IMMAGINE -->

    <div class="title-image-container">
      
        <img :src="images[0].URL" id="imageserv" :alt="images[0].caption" />
      
    </div>

    <!-- OVERVIEW -->
    <div class="text-center">
      <p id="text text-with-line-break">{{ description }}</p>
    </div>

    <!-- LONG CARDS -->

    <div class="content">
      <div v-for="(service, serIndex) of services.slice(0,nItems)" :key="`ser-index-${serIndex}`">
        <long-card
          :image-url="service.image.URL"
          :image-caption="service.image.caption"
          :title="service.name"
          :phone="service.phone"
          :address="service.adress"
          :op-hours="service.OpeningHours"
        />
      </div>
    </div>
    <button @click="loadMore" v-if="nItems<services.length">
      Load More </button>
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
      description: data.description,
      images: data.images,
      services: data.services,
      
    }
  },
  fetchOnServer: false, // too see if it's a problem for crawlers
  data() {
    return {
      nItems:3,
    }
  },
mounted() {
  console.log( this.services[0])
  console.log( this.services[1])
  console.log( this.services[2])
  console.log( this.services[3])
},
  methods: {
    loadMore(){
    this.nItems=Math.min(this.nItems+2,this.services.length);
    },
    backToList() {
      this.$router.push('/list')
    },
  },
}

</script>

<style>

#imageserv {
  width:100%;
  aspect-ratio: 9/4;
}
.content{
  margin:30px;
}

</style>
