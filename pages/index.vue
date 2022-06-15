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
          URL: '/images/town/0.jpg',
          caption: 'La Primavera di Botticelli',
        },
        {
          URL: '/images/town/1.jpg',
          caption: 'Ponte Vecchio',
        },
        {
          URL: '/images/town/2.jpg',
          caption: 'Piazza e Basilica di Santa Croce',
        },
        {
          URL: '/images/town/3.jpg',
          caption: 'Piazza e Basilica di Santa Maria Novella',
        },
        {
          URL: '/images/town/4.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
      ],
      description: 'Benvenuto in questo viaggio alla scoperta di Firenze.'
    }
  },
  }
</script>
