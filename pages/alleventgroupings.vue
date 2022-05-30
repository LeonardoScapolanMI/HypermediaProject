<template>
  <div>
    <the-header />

    <!-- TITLE -->
    <div><br>
          <h1 class="text-center">ALL EVENTS GROUPINGS</h1> 
          <hr id="title">
          <h4 class="text-center">ALL EVENTS GROUPINGS SECTION</h4> 
         </div><br><br>

    <!-- IMMAGINI -->

          <div class="container">
            <div class="row">
              <div class="col-12"><a href="/allevents"><img class="w-100" src="/images/pointofinterest/piazzalemichelangelo/0.jpg" alt="All events"></a>
                <div class="carousel-caption d-md-block"><h3>ALL EVENTS</h3></div>
              </div>
            </div>
            <div class="row">
              <div class="col-6"><a href="/summerevents"><img class="w-100" src="/images/event/igiardinidifirenze/0.jpg" alt="Summer events"></a>
                <div class="carousel-caption d-md-block"><h3>SUMMER EVENTS</h3></div>
              </div>
              <div class="col-6"><a href="/winterevents"><img class="w-100" src="/images/event/mercatinodinatale/0.jpg" alt="Winter events"></a>
                <div class="carousel-caption d-md-block"><h3>WINTER EVENTS</h3></div>
              </div>
            </div>
          </div><br>

     <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
// import Card from '~/components/Card.vue'
export default {
  name: 'AllPOIs',
  components: { TheFooter, TheHeader, /* Card */ },
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

</style>
