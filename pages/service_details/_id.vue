<template>
  <div>

    <!-- TITLE -->

    <div class="page-title">
          <h1>BLA BLA</h1> 
          <hr class="subtitle">
          <h4>TYPE OF SERVICES SECTION</h4> 
    </div>

    <!-- IMMAGINE -->

    <div class="container">
      <div class="row">
        <div class="col-12"><img :src="image.URL" id="image" :alt="image.caption" />
        </div>
      </div>
    </div>
    
    <!-- OVERVIEW -->

    

    <!-- LONG CARDS -->

    <div class="content">
        <div
          v-for="(service, serIndex) of servList"
          :key="`ser-index-${serIndex}`"
        >
          <long-card
            :image-url="service.image.URL"
            :image-caption="service.image.caption"
            :title="service.name"
            :phone="service.phone"
            :website="service.website"
            :address="service.address"
          />
      </div>
    </div>
    
    <div class="text-center">
      <button id="load-more" @click="loadMore()">LOAD MORE</button>
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
    const { data } = await $axios.get('http://localhost:3000/api/service' + id)
   
    return {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      image: data.Image,

      servList: data.data,
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
console.log(this.servList + 'CIAOOOOOOOOOOOOOOOOOOO')
</script>

<style>

/* LOAD MORE */

  .no-content {
    color: #414535 !important;
    background-color: transparent !important;
    border-color: transparent !important;
    pointer-events: none;
  }

  #load-more:hover {
    color: white;
    transition: 0.2s;
    cursor: pointer;
  }
  
  #load-more {
    color: #414535;
    background-color: #96BBBB;
    padding: 5px 10px 5px 10px;
    font-size: 15px;
    border: 2px solid #414535 ;
    border-radius: 10px;
    margin-right: 20px;
    margin-left: 20px;
  }

</style>
