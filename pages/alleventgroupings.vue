<template>
  <div>

    <!-- BREADCRUMB -->

    <BreadCrumb :crumbs='bc'/>

    <!-- IMMAGINI -->

          <div class="container">
            <div class="row">
              <div class="col-md-12"><a href="/allevents"><img id="img" src="/images/event/all.jpg" alt="anteprima di tutti gli eventi" class="image-link"/>
                <div class="carousel-caption"><h3>TUTTI GLI EVENTI</h3></div></a>
              </div>
              <div class="col-6"><a href="/summerevents"><img src="/images/event/summer.jpg" alt="anteprima di tutti gli eventi estivi" class="image-link"/>
                <div class="carousel-caption"><h3>EVENTI ESTIVI</h3></div></a>
              </div>
              <div class="col-6"><a href="/winterevents"><img src="/images/event/winter.jpg" alt="anteprima di tutti gli eventi invernali" class="image-link"/>
                <div class="carousel-caption"><h3>EVENTI INVERNALI</h3></div></a>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
  name: 'AllEventGroupings',
  components: { BreadCrumb },
  data() {
    const bc =[]
    bc.push(
      { title:'Tutti i Gruppi di Eventi', path:'' }
      )
    return {
      bc,
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
  box-shadow: 5px 5px 10px 5px var(--green);
}

</style>
