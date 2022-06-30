<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>

    <!-- Insert three link images -->

          <div class="container">
            <div class="row">
              <div class="col-md-12"><a href="/allevents"><img id="img" src="/images/event/all.jpg" alt="anteprima di tutti gli eventi" class="image-link"/>
                <div class="carousel-caption"><h4>TUTTI GLI EVENTI</h4></div></a>
              </div>
              <div class="col-6"><a href="/summerevents"><img src="/images/event/summer.jpg" alt="anteprima di tutti gli eventi estivi" class="image-link"/>
                <div class="carousel-caption"><h4>EVENTI ESTIVI</h4></div></a>
              </div>
              <div class="col-6"><a href="/winterevents"><img src="/images/event/winter.jpg" alt="anteprima di tutti gli eventi invernali" class="image-link"/>
                <div class="carousel-caption"><h4>EVENTI INVERNALI</h4></div></a>
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
 
  head() {
    return {
      title: 'Tutti gli eventi per gruppo',
      meta: [
        {hid:'description',
        name:'description',
          content:
            'In questa pagina è possibile accedere alla sezione di tutti gli eventi invernali, tutti gli eventi estivi o a tutti gli eventi in generale.',
        },
      ],
    }
  },
}
</script>

<style>

.carousel-caption {
  background-color: var(--beige);
  padding: 0;
  margin-bottom: 7%;
  opacity: 0.8;
  border-radius: 10px;
} 

.carousel-caption h4 {
  color: var(--green);
  margin: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 2vw;
} 

.image-link {
  border-radius: 20px;
  object-fit: cover;
  height: 86%;
  width: 100%;
  margin-top: 5%;
}

.image-link:hover { 
  box-shadow: 5px 5px 10px 5px var(--green);
}

#img {
  margin-top: 20px;
}

</style>
