<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->
    <BreadCrumb :crumbs='bc'/>

    <!-- Insert the title and the subtitle --> 
    <div class="page-title">
      <h1>{{ name }}</h1>
      <hr class="subtitle" />
      <span class="orientation-info">TIPO DI SERVIZIO</span>
    </div>

    <!-- Insert an introductory image -->
    <div class="title-image-container">
      <img class="title-image" :src="images[0].URL" :alt="images[0].caption" />
    </div>

    <!-- Insert a general overview -->
    <div class="text-content">
      <p class="text-with-line-break">{{ description }}</p>
    </div>

    <hr class="separator"/>

    <!-- Insert long cards by calling the component and printing the items of the services -->
    <div class="content">
      <div v-for="(service, serIndex) of services.slice(0,nItems)" :key="`ser-index-${serIndex}`">
        <long-card
        class="longcard"
        tabindex="0"
          :image-url="service.image.URL"
          :image-caption="service.image.caption"
          :title="service.name"
          :phone="service.phone"
          :address="service.adress"
          :op-hours="service.OpeningHours"
        />
      </div>
    </div>

    <!-- Insert the load more button using the method loadMore() -->
    <div class="text-center">
      <button
        v-if="nItems<services.length"
        id="load-more"
        @click="loadMore()"
      >
      CARICA ALTRO
      </button>
    </div>

    <!-- Insert the back up button -->
    <drop-up/>

  </div>
</template>

<script>
import LongCard from '~/components/LongCard.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import DropUp from '~/components/DropUp.vue'

export default {
  name: 'TypeOfServices',
  components: { LongCard, BreadCrumb, DropUp },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/serviceType' + id)
    const bc =[]
    bc.push({title:'Tutti i Tipi di Servizio', path:'/allservicetypes'})
    bc.push({title:data.name, path:'#'})
    // funtion to format the content
    function formatDescription(d) {
      const description = d.split(".")[0]
      return description.concat('.')
    }
    return {
      name: data.name,
      description: data.description,
      images: data.images,
      services: data.services,
      bc,
      descriptionmeta: formatDescription(data.description),
    }
  },
  // to see if it's a problem for crawlers
  fetchOnServer: false,
  data() {
    return {
      nItems:3,
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:'description',
          name:'description',
          content: this.descriptionmeta,
        },
      ],
    }
  },
  methods: {
    // method to load other contents
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

.content {
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
  color: var(--green);
  background-color: var(--blue);
  border: 2px solid var(--green);
  padding: 5px 50px 5px 50px;
  border-radius: 10px;
  font-size: large;
  font-weight: bold;
  margin: 20px;
  text-align: center;
}

#load-more:hover {
  color: var(--white);
  cursor: pointer;
}

</style>
