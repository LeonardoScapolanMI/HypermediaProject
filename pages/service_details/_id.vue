<template>
  <div>
    <the-header />

    <!-- TITLE -->

    <div class="titolo">
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">TYPE OF SERVICES SECTION</h4> 
    </div>

    <!-- IMMAGINE -->

    <div class="container">
      <div class="row">
        <div class="col-12"><img :src="imageUrl" id="image" :alt="imageCaption" />
        </div>
      </div>
    </div>
    
    <!-- OVERVIEW -->

    div><p id="text">{{description}}</p></div>

    <!-- LONG CARDS -->

    <div class="content">
        <div
          v-for="(typeser, typeserIndex) of poiList"
          :key="`poi-index-${typeserIndex}`"
        >
          <longcard
            @onSeeDetails="$router.push('/poi_details/' + poi.id)"
            :imageUrl="poi.images[0].URL"
            :imageCaption="poi.images[0].caption"
            :title="typeser.name"
            :description="typeser.description"
          />
      </div>
    </div>
    
    <div class="text-center">
      <button id="load-more" @click="loadMore()" v-if="!allLoaded">LOAD MORE</button>
    </div>
        
        <TheFooter/>
    </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import LongCard from '~/components/LongCard.vue'

const N_BASE_LOADED_ITEMS = 9
const N_ITEMS_LOADED_MORE = 3

export default {
  name: 'TypeOfServices',
  components: { TheFooter, TheHeader, LongCard },
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
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/poi' + id)
    return {
      name: data.name,
      description: data.description,
      imagesV: data.Images,
      mapurl: data.mapURL,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
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
