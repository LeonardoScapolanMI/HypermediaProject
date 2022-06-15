<template>
  <div>
    <div id="slideshow" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li
          v-for="(img, imgIndex) of images"
          :key="`img-Index-${imgIndex}`"
          data-target="#slideshow"
          :data-slide-to="imgIndex"
        ></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div
          v-for="(img, imgIndex) of images"
          :id="imgIndex"
          :key="`img-Index-${imgIndex}`"
          class="carousel-item"
        >
          <img :src="img.URL" :alt="img.caption" />
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#slideshow" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#slideshow" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>

    <script>
      document.getElementById(0).className = 'carousel-item active'
    </script>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    images: { type: Array, required: true },
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
.carousel{
  width: 100%;
  height: 100%;
}

.carousel-item img {
  width: 100%;
  height: 30vw;
  object-fit: cover;
  object-position: 50% 50%;
}

</style>
