<template>
<main role="main">

      
      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">

        <!-- START THE FEATURETTES -->

        <div class="row featurette" v-if="reverse == 0">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">{{title}}<br><span class="text-muted">Computer Engineer</span></h2>
            <p class="lead">{{description}}</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" v-bind:src="../Immagini/img.jpg" alt="Generic placeholder image">
          </div>
        </div>

        <div class="row featurette" v-else>
          <div class="col-md-7">
            <h2 class="featurette-heading">{{title}}<br><span class="text-muted">Computer Engineer</span></h2>
            <p class="lead">{{description}}</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" v-bind:src="../Immagini/img.jpg" alt="Generic placeholder image">
          </div>
        </div>

       

        </div>
</main>

</template>

<style>

.container {
  max-width: 960px;
}

.cont {
    width: 90%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

body {
  padding-top: 3rem;
  color: #414535;
  font-family: Georgia;
}

h3 {
  font-weight: bold;
  text-align: center;
}

input, textarea {
    padding: 20px;
    margin: 5px;
}

#submit {
    color: white;
    background-color: #414535;
}

#submit:hover {
    background-color: #C19875;
    transition: 0.2s;
  }


</style>

<script>
export default {
  name: 'LargeCard',
  props: {

    title: {
      type: String,
      required: true,
    },
  },
  description: {
      type: String,
      required: true,
    },

  data: {
      value: Number,
      image:logo,
  },
  
}

import logo from "../HTML+CSS/Immagini/firenze.png";

</script>