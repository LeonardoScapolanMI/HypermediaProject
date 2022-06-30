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
      <a v-if="images.length > 1" class="carousel-control-prev" href="#slideshow" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a v-if="images.length > 1" class="carousel-control-next" href="#slideshow" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>

    <!-- Make the first elment of the slideshow active -->
  

  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    images: { type: Array, required: true },
  },
  mounted(){document.getElementById(0).className = "carousel-item active";},
}
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 100%;
}

.carousel-item img {
  width: 100%;
  aspect-ratio: 20/9;
  object-fit: cover;
  object-position: 50% 50%;
  border: 2px solid var(--green);
}

.carousel-indicators {
  cursor: pointer;
}

</style>
