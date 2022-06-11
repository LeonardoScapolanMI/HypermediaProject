<template>
  <div>
    <the-header />

    <!-- TITLE -->
    <div class="titolo">
      <h1 class="text-center">ALL EVENTS</h1> 
      <hr id="title">
      <h4 class="text-center">ALL EVENTS SECTION</h4> 
    </div>

    <!-- OVERVIEW -->

    <div><p></p></div>

    <!-- CARDS -->
    <card-list :endpoint="'http://localhost:3000/api/event'" :details-page-folder="'event_details'"/>
   
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllEvents',
  components: { TheFooter, TheHeader, CardList },
  data() {
    return {}
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
