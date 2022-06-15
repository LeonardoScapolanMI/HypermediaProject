<template>
  <div>

    <!-- SLIDESHOW -->

    <SlideShow :images="imagesV" class="title-image-container" />

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
          caption: 'Panorama notturno della città',
        },
        {
          URL: '/images/home/1.jpg',
          caption: 'Statua di Aloy',
        },
        {
          URL: '/images/home/2.jpg',
          caption: 'Piazza Santa Maria Novella',
        },
        {
          URL: '/images/home/3.jpg',
          caption: 'Galleria della Accademia',
        },
        {
          URL: '/images/home/4.jpg',
          caption: 'Lupi di Liu Ruowang',
        },
        {
          URL: '/images/home/5.jpg',
          caption: 'Panorama diurno della città',
        },
        {
          URL: '/images/home/6.jpg',
          caption: 'Arco di Trionfo',
        },
        {
          URL: '/images/home/7.jpg',
          caption: 'Fontana del Nettuno',
        },
        {
          URL: '/images/home/8.jpg',
          caption: 'Ponte Vecchio',
        },
        {
          URL: '/images/home/9.jpg',
          caption: 'Galleria degli Uffizi',
        },
      ],
      description: 'Benvenuto!!!'
    }
  },
  }
</script>
