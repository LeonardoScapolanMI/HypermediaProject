<template>
<div>
    <the-header />

      <div class="container marketing">

         <!-- BREADCRUMB -->
         <br><br><br>
        
         <div>
           <ol class="breadcrumb">
             <li class="breadcrumb-item"><a href="#" id="home">Home</a></li>
             <li class="breadcrumb-item active" aria-current="page" id="page">All Event Groupings</li>
           </ol>
         </div>

         <!-- TITOLO -->

         <div><br>
          <h1 class="text-center">DISCOVER OUR EVENTS</h1> 
          <hr id="title">
          <h4 class="text-center">ALL EVENT GROUPING</h4> 
         </div><br><br>

          <!-- IMMAGINI -->

          <div class="container">
            <div class="row">
              <div class="col-12"><a href="all-events.html"><img class="w-100" src="~/static/carousel0.jpg" alt="All events"></a>
                <div class="carousel-caption d-md-block"><h3>ALL EVENTS</h3></div>
              </div>
            </div>
            <div class="row">
              <div class="col-6"><a href="summer-events.html"><img class="w-100" src="~/static/carousel1.jpg" alt="Summer events"></a>
                <div class="carousel-caption d-md-block"><h3>SUMMER EVENTS</h3></div>
              </div>
              <div class="col-6"><a href="winter-events.html"><img class="w-100" src="~/static/carousel2.jpg" alt="Winter events"></a>
                <div class="carousel-caption d-md-block"><h3>WINTER EVENTS</h3></div>
              </div>
            </div>
          </div>

<br><br>

      </div><!-- /.container -->
        
    <the-footer />
  </div>
</template>

<script>
const axios= require('axios').default;
export default {

  name: 'ContactUs',

  data() {
    return {
      name: '',
      surname: '',
      email: '',
      text: '',
    }
  },
  methods: {

       submit()
          { axios.post('/usermessage', {
            firstName :this.name,
            lastName : this.surname,
            email: this.email,
            message: this.text,
          })

      }

  } }
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