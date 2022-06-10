<template>
  <div>
    <the-header />

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">ALL ITINERARIES</h1> 
      <hr id="title">
      <h4 class="text-center">ALL ITINERARIES SECTION</h4> 
    </div>

    <!-- CARDS -->

    <div class="content">
      <div class="row">
        <div
          class="col-md-4"
          v-for="(it, allitIndex) of itList"
          :key="`it-index-${allitIndex}`"
          >
          <card
            @onSeeDetails="$router.push('/itinerary_details/' + it.id)"
            :imageUrl="it.image.URL"
            :imageCaption="it.image.caption"
            :title="it.name"
            :description="it.overview"
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
  name: 'AllItineraries',
  components: { TheFooter, TheHeader, Card },
  data() {
    return {
    }
  },
  async asyncData({ $axios }) {
    

    const reqBody = {
      params: {
        itemCount: N_BASE_LOADED_ITEMS,
      },
    }

    const { data } = await $axios.get('http://localhost:3000/api/itinerary', reqBody)

    return {
      itList: data.data,
      allLoaded: data.isFinished
    }
  },
  methods: {
    async loadMore(){
      

      const itemShown = this.itList.length

      const reqBody = {
        params: {
          startingIndex: itemShown,
          itemCount: N_ITEMS_LOADED_MORE,
        },
      }

      const { data } = await this.$axios.get(
        'http://localhost:3000/api/itineraries',
        reqBody
      )
      this.allLoaded = data.isFinished
      for(const d of data.data) this.itList.push(d)
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
