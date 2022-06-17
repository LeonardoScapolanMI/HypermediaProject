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
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="long-image-container">
        <img class="long-image" :src="getContentToDisplay().url" :alt="getContentToDisplay().caption" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="text-content">
          <h3 class="text-content-title">
            {{ getContentToDisplay().title }}
          </h3>
          <p class="text-with-line-break">
             {{ getContentToDisplay().text }}
          </p>
         </div>
        </div>
      </div>
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
          URL: '/images/home/slideshow/0.jpg',
          caption: 'Panorama notturno della città',
        },
        {
          URL: '/images/home/slideshow/1.jpg',
          caption: 'Statua di Aloy',
        },
        {
          URL: '/images/home/slideshow/2.jpg',
          caption: 'Piazza Santa Maria Novella',
        },
        {
          URL: '/images/home/slideshow/3.jpg',
          caption: 'Galleria della Accademia',
        },
        {
          URL: '/images/home/slideshow/4.jpg',
          caption: 'Lupi di Liu Ruowang',
        },
        {
          URL: '/images/home/slideshow/5.jpg',
          caption: 'Panorama diurno della città',
        },
        {
          URL: '/images/home/slideshow/6.jpg',
          caption: 'Arco di Trionfo',
        },
        {
          URL: '/images/home/slideshow/7.jpg',
          caption: 'Fontana del Nettuno',
        },
        {
          URL: '/images/home/slideshow/8.jpg',
          caption: 'Ponte Vecchio',
        },
        {
          URL: '/images/home/slideshow/9.jpg',
          caption: 'Galleria degli Uffizi',
        },
      ],
      introduction: 'Non perdere l occasione di vivere il meglio che Firenze ha da offrire e di scoprire la città come non l hai mai vista prima.',
      evContent: {
        url: '/images/home/cards/ev.jpg',
        caption: 'Cavalcata dei magi',
        title: 'Vecchie tradizioni e grandi novità.',
        text: 'Non lasciarti sfuggire nessuno degli eventi che si terranno nella città durante la tua permanenza. Firenze offre una vasta scelta di spettacoli e manifestazioni a cui poter partecipare. Consulta la guida e scopri quale evento fa al caso tuo.'
      },
      poiContent: {
        url: '/images/home/cards/poi.jpg',
        caption: 'Cattedrale di Santa Maria del Fiore',
        title: 'Dai luoghi più famosi a quelli più segreti.',
        text: 'Non perdere nessuno degli eventi che si terranno nella città durante la tua permanenza. Firenze offre una vasta scelta di spettacoli e manifestazioni a cui poter partecipare. Consulta la guida e scopri quale evento fa al caso tuo.'
      },
      itContent: {
        url: '/images/home/cards/it.jpg',
        caption: 'Panorama della città',
        title: 'Un itinerario della città ricco di sorpese.',
        text: 'Non perdere nessuno degli eventi che si terranno nella città durante la tua permanenza. Firenze offre una vasta scelta di spettacoli e manifestazioni a cui poter partecipare. Consulta la guida e scopri quale evento fa al caso tuo.'
      },
      serContent: {
        url: '/images/home/cards/ser.jpg',
        caption: 'Servizio di ristoro',
        title: 'Le migliori cucine tradizionali e tutti i servizi necessari.',
        text: 'Non perdere nessuno degli eventi che si terranno nella città durante la tua permanenza. Firenze offre una vasta scelta di spettacoli e manifestazioni a cui poter partecipare. Consulta la guida e scopri quale evento fa al caso tuo.'
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

.long-image-container {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 92%;
}

.long-image {
  width: 100%;
  aspect-ratio: 8/5;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 5px 5px 10px 5px var(--green);
}

</style>
