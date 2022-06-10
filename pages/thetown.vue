<template>
  <div>
    <the-header />

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">THE TOWN NAME</h1> 
      <hr id="title">
      <h4 class="text-center">THE TOWN SECTION</h4> 
    </div>

    <!-- SLIDESHOW -->

    <div class="row">
        <div class="col"></div>
        <div class="col-6"><SlideShow :images="imagesV"/></div>
        <div class="col"></div>
    </div>

    <!-- OVERVIEW -->

    <div><p></p></div>     

     <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import SlideShow from '~/components/Slideshow.vue'
export default {
  name: 'TheTown',
  components: { 
    TheFooter, 
    TheHeader,
    SlideShow,
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

</style>
