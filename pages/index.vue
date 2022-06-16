<template>
  <div>

    <!-- INTRO -->
    
    <div class="welcome">
      <div class="title">
      <h1>FIRENZE</h1>
      <hr class="line" />
      <h4>come mai prima</h4>
      </div>  
    </div>

    <hr class="separator" />

    <!-- OVERVIEW -->

    <div class="text-content">
      <h5 class="text-center">{{ introduction }}</h5>
    </div>

    <!-- SLIDESHOW -->

    <SlideShow :images="imagesV" class="title-image-container" />

    <!-- LINK STRUTTURALI -->

    <div class="container structural-links">
      <div class="row">
        <div
          class="col-sm-auto structural-link selected-structural-link"
          @click="setContentToDisplay(evContent)"
        >
          EVENTI
        </div>
        <div
          class="col-sm-auto structural-link"
          @click="setContentToDisplay(poiContent)"
        >
          PUNTI DI INTERESSE
        </div>
        <div
          class="col-sm-auto structural-link"
          @click="setContentToDisplay(itContent)"
        >
          ITINERARI
        </div>
        <div
          class="col-sm-auto structural-link"
          @click="setContentToDisplay(serContent)"
        >
          SERVIZI
        </div>
      </div>
    </div>
    <hr class="separator" />

    <!-- OVERVIEW -->

    <div class="text-content">
      <p class="text-with-line-break">
        {{ getContentToDisplay().text }}
      </p>
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
      introduction: 'Non perdere l opportunità di vivere il meglio che Firenze ha da offrire e di scoprire la città come non l hai mai vista prima.',
      evContent: {
        text: 'Vecchie tradizioni e grandi novità.'
      },
      poiContent: {
        text: 'Dai luoghi più famosi a quelli più segreti.'
      },
      itContent: {
        text: 'Un itinerario della città ricco di sorpese.'
      },
      serContent: {
        text: 'La migliore cucina tradizionale e tutti i servizi necessari.'
      },
      toDisplay: undefined,
    }
  },
  methods: {
    getContentToDisplay() {
      return this.toDisplay ? this.toDisplay : this.evContent
    },
    setContentToDisplay(newContent) {
      this.toDisplay = newContent
      const elements = document.getElementsByClassName('structural-link')
      Array.prototype.forEach.call(elements, (element) => {
        element.classList.remove('selected-structural-link')
      })
      event.target.classList.add('selected-structural-link')
    },
  },
  }
</script>

<style>

.welcome {
  background: linear-gradient(var(--dark), var(--dark)), url("/images/home/welcome.jpg")center;
  background-size: cover;
  height: 500px;
}

.title {
  color: var(--beige);
  font-weight: bold;
  padding-top: 170px;
  padding-left: 70px;
  text-align: center;
}

.line {
  background-color: var(--beige);
  width: 200px;
  margin-top: 0;
  margin-bottom: 0;
}

</style>
