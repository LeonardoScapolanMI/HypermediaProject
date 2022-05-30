<template>
  <div>
    <the-header />

    <!-- TITLE -->
    <div><br>
          <h1 class="text-center">ALL WINTER EVENTS</h1> 
          <hr id="title">
          <h4 class="text-center">WINTER EVENTS SECTION</h4> 
         </div><br><br>

    <!-- OVERVIEW -->

    <div><br><p>{{description}}</p></div><br>

    <!-- IMMAGINE -->

    <div class="container">
      <div class="row">
        <div class="col-12"><img class="w-100" src="/images/event/mercatinodinatale/0.jpg" alt="Winter events">
          <div class="carousel-caption d-md-block">
                <h5>{{caption}}}</h5><p>{{description}}}</p>
          </div>
        </div>
      </div>
    </div><br>

    <!-- CARDS -->
    
    <div class="content">
    <div class="row">
    <div class="col-md-4" v-for= "(poi, poiIndex) of poiList" :key= "`poi-index-${poiIndex}`">
    <card
      :id = "poi.id"
      :imageUrl="poi.images[0].URL" 
      :imageCaption="poi.images[0].caption"
      :title="poi.name" 
      :description="poi.description" 
    />
    </div></div></div>
    <br>

    <div class="text-center"><button id="load-more">LOAD MORE</button></div><br>

     <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import Card from '~/components/Card.vue'
export default {
  name: 'AllPOIs',
  components: { TheFooter, TheHeader, Card },
  data() {
    return {}
    },
    async asyncData({ $axios }) {
      // const { data } = await $axios.get('http://localhost:3000/api/cats')
      const { data } = await $axios.get('http://localhost:3000/api/poi')
      return {
        poiList: data,
      }
    }



  // methods: {
  // $(document).ready(function(){
// $(".content").slice(0, 3).show();
// $("#load-more").on("click", function(e){
// e.preventDefault();
// $(".content:hidden").slice(0, 1).slideDown();
// if($(".content:hidden").length == 0) {
 // $("#load-more").text("No More Content").addClass("no-content");
// }
// });
// })
 // }
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
