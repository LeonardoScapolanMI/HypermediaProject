<template>
  <div class="spazio">

    <!-- IMMAGINI -->

          <div class="container">
            <div class="row">
              <div class="col-12"><a href="/allevents"><img id="image" src="/images/event/all.jpg" alt="anteprima di tutti gli eventi" class="thumbnail-image"/>
                <div class="carousel-caption d-md-block"><h3>TUTTI GLI EVENTI</h3></div></a>
              </div>
            </div>
            <div class="row">
              <div class="col-6"><a href="/summerevents"><img id="image" src="/images/event/summer.jpg" alt="anteprima di tutti gli eventi estivi" class="thumbnail-image"/>
                <div class="carousel-caption d-md-block"><h3>EVENTI ESTIVI</h3></div></a>
              </div>
              <div class="col-6"><a href="/winterevents"><img id="image" src="/images/event/winter.jpg" alt="anteprima di tutti gli eventi invernali" class="thumbnail-image"/>
                <div class="carousel-caption d-md-block"><h3>EVENTI INVERNALI</h3></div></a>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'AllEventGroupings',
  data() {
    return {
    }
  },
}
</script>

<style>

.thumbnail-image{
  object-fit: cover;
  height: 100%;
  width: 100%;
}	

</style>
