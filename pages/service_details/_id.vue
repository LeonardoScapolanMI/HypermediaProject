<template>
  <div class="height">

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
      <p class="text-with-line-break">{{ description }}</p>
    </div>

    <!-- LONG CARDS -->
  <div class="container">
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
  </div>

    <!-- LOAD MORE -->

    <button
      v-if="nItems<services.length"
      id="load-more"
      @click="loadMore"
    >
    CARICA ALTRO
    </button>

    <!-- BACK UP BUTTON -->

    <div class="dropup">
      <a href="#" id="up-button" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
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
  margin: auto;
  width: 92% !important;
}

.no-content {
  color: #414535 !important;
  background-color: transparent !important;
  border-color: transparent !important;
  pointer-events: none;
}

#load-more {
  color: var(--blue);
  background-color: var(--white);
  border: 1px solid var(--aqua);
  padding: 5px 50px 5px 50px;
  border-radius: 10px;
  font-size: large;
  font-weight: bold;
  margin: 20px;
  text-align: center;
}

#load-more:hover {
  color: var(--aqua);
}

</style>
