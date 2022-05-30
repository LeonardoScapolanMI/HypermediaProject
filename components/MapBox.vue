<template>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-6">
      <p id="text"></p>
    </div> <!-- col -->     
    <div class="col-md-4">
      <div class="text-center">
        <iframe :src= "indirizzo" id="map"></iframe>
      </div> 
    </div> <!-- col -->
  </div> <!-- row -->
</template>

<script> 

export default {
  name: 'MapBox',
    props: { indirizzo: { type: String, required:true,
            },
    },
     head() {
    return {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
            integrity:
              'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
            crossorigin: 'anonymous',
          },
        ],
        script: [
          {
            src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
            integrity:
              'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
            integrity:
              'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
            integrity:
              'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
            crossorigin: 'anonymous',
          },
        ],
      }
    },
}
    
</script>

<style scoped>

    #text {
      padding-top: 50px;
    }

    #map {
    height: 300px;
	  width: 300px;
	  margin-top: 30px;
    margin-bottom: 30px;
    border: 0px;
    }

</style>