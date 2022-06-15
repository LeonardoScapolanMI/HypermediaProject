<template>
  <div>

    <!-- IMMAGINI -->

          <div class="container">
            <div class="row">
              <div class="col-md-12"><a href="/allevents"><img id="img" src="/images/event/all.jpg" alt="anteprima di tutti gli eventi" class="image-link"/>
                <div class="carousel-caption d-md-block"><h3>TUTTI GLI EVENTI</h3></div></a>
              </div>
              <div class="col-6"><a href="/summerevents"><img src="/images/event/summer.jpg" alt="anteprima di tutti gli eventi estivi" class="image-link"/>
                <div class="carousel-caption d-md-block"><h3>EVENTI ESTIVI</h3></div></a>
              </div>
              <div class="col-6"><a href="/winterevents"><img src="/images/event/winter.jpg" alt="anteprima di tutti gli eventi invernali" class="image-link"/>
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

.image-link {
  border-radius: 20px;
   object-fit: cover;
  height: 92%;
  width: 100%;
}

#img {
  margin-top: 20px;
}

.image-link:hover { 
  opacity: 0.9;
}

</style>
