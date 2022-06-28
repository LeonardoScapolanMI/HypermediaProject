<template>
  <div class="height">

    <!-- BREADCRUMB -->

    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" id="old">HOME</a></li>
        <li class="breadcrumb-item"><a href="/allservicetypes" id="old">Tutti i tipi di servizio</a></li>
        <li class="breadcrumb-item active" aria-current="page" id="new">{{ name }}</li>
      </ol>
    </div>

    <!-- TITLE -->

    <div class="page-title">
      <h1>{{ name }}</h1>
      <hr class="subtitle" />
      <h4>TIPO DI SERVIZIO</h4>
    </div>

    <!-- IMMAGINE -->

    <div class="title-image-container">
      <img id="imageserv" class="title-image" :src="images[0].URL" :alt="images[0].caption" />
    </div>

    <!-- OVERVIEW -->

    <div class="text-content">
      <p class="text-with-line-break">{{ description }}</p>
    </div>

    <hr class="separator"/>

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

    <!-- LOAD MORE -->
    
    <div class="text-center">
      <button
        v-if="nItems<services.length"
        id="load-more"
        @click="loadMore()"
      >
      CARICA ALTRO
      </button>
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
  max-width: min(1500px, 86%);
  margin-top: 50px;
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
