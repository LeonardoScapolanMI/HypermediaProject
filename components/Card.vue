<template>

  
  <div class="row">
      <div class="col-lg-4">
          <div><a href="#"><img src="~/static/firenze.png" id="image" alt="imageCaption"></a>
                  <h2>{{title}}</h2>
                  <p>{{description}}</p>
                  <p><a class="btn btn-secondary" href="#" role="button" id="submit">View details &raquo;</a></p>
          </div>
      </div><!-- /.col -->
  </div>


</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    imageUrl: { type: String, required: true },
    imageCaption: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
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
  methods: {
    SendClickEvent() {
      this.$emit('click-event')
    },
  },
}
</script>

<style scoped>
  p a {
    
    max-width: 30%;
    margin:0.2em;

  }
  h2{
    margin:0.3em;
  }
    #image {
      width:40%;
      height: 40%;
    }

#submit {
    color: white;
    background-color: #414535;
}

#submit:hover {
    background-color: #C19875;
    transition: 0.2s;
  }
  
div{
  text-align: center;
  margin: 1em;
  
}
</style>