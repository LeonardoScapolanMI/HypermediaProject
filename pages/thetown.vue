<template>
  <div>

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">LA CITT&Agrave; DI FIRENZE</h1>  
    </div>

    <!-- SLIDESHOW -->

    <div class="row">
        <div class="col"></div>
        <div class="col-6"><SlideShow :images="imagesV"/></div>
        <div class="col"></div>
    </div>

    <!-- OVERVIEW -->

    <div><p id="text">{{ description }}</p></div>     

  </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
export default {
  name: 'TheTown',
  components: { 
    SlideShow,
    },
}
</script>

<style>

body {
  color: var(--dark-blue);
  font-family: Georgia;
}

</style>
