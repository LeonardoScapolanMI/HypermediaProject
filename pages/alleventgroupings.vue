<template>
  <div>

    <!-- IMMAGINI -->

          <div class="container">
            <div class="row">
              <div class="col-12"><a href="/allevents"><img :src="imageUrl" id="image" :alt="imageCaption" />
                <div class="carousel-caption d-md-block"><h3>TUTTI GLI EVENTI</h3></div></a>
              </div>
            </div>
            <div class="row">
              <div class="col-6"><a href="/summerevents"><img :src="imageUrl" id="image" :alt="imageCaption" />
                <div class="carousel-caption d-md-block"><h3>EVENTI ESTIVI</h3></div></a>
              </div>
              <div class="col-6"><a href="/winterevents"><img :src="imageUrl" id="image" :alt="imageCaption" />
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

body, h3 {
  color: #414535;
  font-family: Georgia;
}

#title {
  margin-left: 300px;
  margin-right: 300px;
  border-top: 2px solid #414535;
}

.titolo {
  margin-bottom: 50px;
}

</style>
