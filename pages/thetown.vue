<template>
  <div>

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">LA CITT&Agrave; DI FIRENZE</h1> 
      <hr id="title">
      <h4 class="text-center">SEZIONE "LA CITT&Agrave;"</h4> 
    </div>

    <!-- SLIDESHOW -->

    <div class="row">
        <div class="col"></div>
        <div class="col-6"><SlideShow :images="imagesV"/></div>
        <div class="col"></div>
    </div>

    <!-- OVERVIEW -->

    <div><p id="text">{{description}}</p></div>     

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

#title {
  margin-left: 300px;
  margin-right: 300px;
  border-top: 2px solid var(--dark-blue);;
}

</style>
