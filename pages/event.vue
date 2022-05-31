<template>
  <div>
    <the-header />

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">EVENT NAME</h1> 
      <hr id="title">
      <h4 class="text-center">EVENT SECTION</h4> 
    </div>

    <!-- CAROUSEL OF IMAGES -->

    <slideshow
      :imageUrl="poi.images[0].URL"
      :imageCaption="poi.images[0].caption"
    />
    
    <!-- MAPBOX -->

    <map-box
    :indirizzo="'https://maps.google.com/maps?q=milano+piazza+leonardo+da+vinci+32&t=&z=13&ie=UTF8&iwloc=&output=embed'" />

    <!-- CAROUSEL OF CARDS -->

    <div class="row">
      <div class="col-lg-4">
        <div class="text-center">
          <h3>Hosting Points Of Interest</h3>
        </div>
      </div>
      <div class="col-lg-5"></div>
      <div class="col-lg-3">
        <div class="text-center">
          <p><a class="btn btn-secondary" href="/allpois" role="button" id="poi">All Points Of Interest</a></p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="row">
        <div
          class="col-md-4"
          v-for="(poi, poiIndex) of poiList"
          :key="`poi-index-${poiIndex}`"
        >
          <card
            @onSeeDetails="$router.push('/poi_details/' + poi.id)"
            :imageUrl="poi.images[0].URL"
            :imageCaption="poi.images[0].caption"
            :title="poi.name"
            :description="poi.description"
          />
        </div>
      </div>
    </div>
   
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import Card from '~/components/Card.vue'
import Slideshow from '~/components/Slideshow.vue'

export default {
  name: 'Event',
  components: { TheFooter, TheHeader, Card, Slideshow },
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

/* BUTTON */

  #poi:hover {
    color: #414535;
    transition: 0.2s;
  }

  #poi {
    color: white;
    background-color: #C19875;
    padding: 5px 30px 5px 30px;
    font-size: 20px;
  }

</style>
