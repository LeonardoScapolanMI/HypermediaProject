<template>
  <div>
    <the-header />

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">ALL SUMMER EVENTS</h1> 
      <hr id="title">
      <h4 class="text-center">SUMMER EVENTS SECTION</h4> 
    </div>

    <!-- OVERVIEW -->

    <div><p id="text">{{description}}</p></div>
    
    <!-- IMMAGINE -->

    <div class="container">
      <div class="row">
        <div class="col-12"><img :src="imageUrl" id="image" :alt="imageCaption" />
          <div class="carousel-caption d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <!-- CARDS -->

    <div class="content">
      <div class="row">
        <div
          class="col-md-4"
          v-for="(sumev, sumevIndex) of poiList"
          :key="`poi-index-${sumevIndex}`"
        >
          <card
            @onSeeDetails="$router.push('/poi_details/' + poi.id)"
            :imageUrl="poi.images[0].URL"
            :imageCaption="poi.images[0].caption"
            :title="sumev.name"
            :description="sumev.description"
          />
        </div>
      </div>
    </div>
    
    <div class="text-center">
      <button id="load-more" @click="loadMore()" v-if="!allLoaded">LOAD MORE</button>
    </div>
   
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import Card from '~/components/Card.vue'

const N_BASE_LOADED_ITEMS = 9
const N_ITEMS_LOADED_MORE = 3

export default {
  name: 'SummerEvents',
  components: { TheFooter, TheHeader, Card },
  data() {
    return {
    }
  },
  props: {
    imageUrl: { type: String, required: true },
    imageCaption: { type: String, required: true },
  },
  async asyncData({ $axios }) {

    const reqBody = {
      params: {
        itemCount: N_BASE_LOADED_ITEMS,
      },
    }

    const { data } = await $axios.get('http://localhost:3000/api/poi', reqBody)

    return {
      poiList: data.data,
      allLoaded: data.isFinished
    }
  },
  methods: {
    async loadMore(){
      
      const itemShown = this.poiList.length

      const reqBody = {
        params: {
          startingIndex: itemShown,
          itemCount: N_ITEMS_LOADED_MORE,
        },
      }

      const { data } = await this.$axios.get(
        'http://localhost:3000/api/poi',
        reqBody
      )
      this.allLoaded = data.isFinished
      for(const d of data.data) this.poiList.push(d)
    },
  },
}
</script>

<style>

  body {
    color: #414535;
    font-family: Georgia;
  }

  #title {
    margin-left: 300px;
    margin-right: 300px;
    border-top: 2px solid #414535;
  }

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
