<template>
  <div>

    <!-- SLIDESHOW -->

    <SlideShow :images="imagesV" class="title-image" />

    <!-- OVERVIEW -->

    <div class="text-content">
      <p id="text text-with-line-break ">{{ description }}</p>
    </div>
    
  </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
export default {
  name: 'IndexPage',
  components: { SlideShow },
  data() {
    return {
      imagesV: [
        {
          URL: '/images/home/0.jpg',
          caption: 'La Primavera di Botticelli',
        },
        {
          URL: '/images/home/1.jpg',
          caption: 'Ponte Vecchio',
        },
        {
          URL: '/images/home/2.jpg',
          caption: 'Piazza e Basilica di Santa Croce',
        },
        {
          URL: '/images/home/3.jpg',
          caption: 'Piazza e Basilica di Santa Maria Novella',
        },
        {
          URL: '/images/home/4.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
        {
          URL: '/images/home/5.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
        {
          URL: '/images/home/6.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
        {
          URL: '/images/home/7.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
        {
          URL: '/images/home/8.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
        {
          URL: '/images/home/9.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
      ],
      description: 'Benvenuto in questo viaggio alla scoperta di Firenze.'
    }
  },
  }
</script>
