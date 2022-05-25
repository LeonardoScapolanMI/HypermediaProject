<template>
<div>
    <the-header />

      <div class="container marketing">

         <!-- TITOLO -->

         <div><br>
          <h1 class="text-center">{{title}}</h1> 
          <hr id="title">
          <h4 class="text-center">{{title}}</h4> 
         </div><br><br>

          <!-- IMMAGINI -->

          <div class="container">
            <div class="row">
              <div class="col-12"><a href="all-events.html"><img class="w-100" src="~/static/carousel0.jpg" alt="All events"></a>
                <div class="carousel-caption d-md-block"><h3>{{title}}</h3></div>
              </div>
            </div>
            <div class="row">
              <div class="col-6"><a href="summer-events.html"><img class="w-100" src="~/static/carousel1.jpg" alt="Summer events"></a>
                <div class="carousel-caption d-md-block"><h3>{{title}}</h3></div>
              </div>
              <div class="col-6"><a href="winter-events.html"><img class="w-100" src="~/static/carousel2.jpg" alt="Winter events"></a>
                <div class="carousel-caption d-md-block"><h3>{{title}}</h3></div>
              </div>
            </div>
          </div>

<br><br>

      </div><!-- /.container -->
        
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import Card from '~/components/Card.vue'
export default {

  name: 'AllEventGroupings',
  components: { TheFooter, TheHeader, Card },
}
</script>

<style>

#title {
  margin-left: 300px;
margin-right: 300px;
border-top: 2px solid #414535;
}

/* IMMAGINI */

.w-100 {
      height: 500px;
      margin-bottom: 30px;
}

</style>