<template>
  <div>

    <!-- Insert an introduction with an image in the background -->
    <div class="welcome">
      <div class="title">
        <h1>FIRENZE</h1>
        <hr/>
        <h2>come mai prima</h2>
      </div>
    </div>

    <!-- Insert a general overview -->
    <div class="text-content flavour-text text-center">
      {{ introduction }}
    </div>

    <!-- Insert a slideshow by calling the component -->
    <SlideShow :images="imagesV" class="title-image-container" />

    <!-- Insert of structural links by printing the items of the linkList -->
    <div class="structural-links">
      <div class="row">
        <div v-for="linkItem of linkList" :key="linkItem.name" class="col-sm-auto">
            <a :href="linkItem.path" class="home-link">{{ linkItem.name }}</a>
        </div>
      </div>
    </div>

  <!-- Insert four sections consisting of an image and an overview -->
  <hr id="ev" class="separator"/>

  <div class="home-container">
    <div class="row">
      <div class="col-md-7">
        <div class="long-image-container">
          <a href="/allevents">
            <img class="long-image" :src="evURL" :alt="evCaption" />
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ evtitle }}</h3>
          <p class="text-with-line-break">{{ evText }}</p>
          <div class="button-container">
            <button 
              class="button"
              onclick="location.href='/allevents'"
              >Tutti gli eventi
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr id="poi" class="separator" />

  <div class="home-container">
    <div class="row">
      <div class="col-md-5">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ poiTitle }}</h3>
          <p class="text-with-line-break">{{ poiText }}</p>
          <div class="button-container">
            <button 
              class="button"
              onclick="location.href='/allpois'"
              >Tutti i punti di interesse
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="long-image-container">
          <a href="/allpois">
            <img class="long-image" :src="poiURL" :alt="poiCaption" />
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <hr id="it" class="separator"/>

  <div class="home-container">
    <div class="row">
      <div class="col-md-7">
        <div class="long-image-container"> 
          <a href="/allitineraries">
            <img class="long-image" :src="itURL" :alt="itCaption" />
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ itTitle }}</h3>
          <p class="text-with-line-break">{{ itText }}</p>
          <div class="button-container">
            <button 
              class="button"
              onclick="location.href='/allitineraries'"
              >Tutti gli itinerari
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

    <hr id="ser" class="separator" />

  <div class="home-container">
    <div class="row">
      <div class="col-md-5">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ serTitle }}</h3>
          <p class="text-with-line-break">{{ serText }}</p>
          <div class="button-container">
            <button 
              class="button"
              onclick="location.href='/allservicetypes'"
              >Tutti i tipi di servizio
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="long-image-container">
          <a href="/allservicetypes">
            <img class="long-image" :src="serURL" :alt="serCaption" />
          </a>
         </div>
        </div>
      </div>
    </div>
  
    <!-- Insert the back up button -->
    <drop-up/>

 </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
import DropUp from '~/components/DropUp.vue'
export default {
  name: 'IndexPage',
  components: { SlideShow, DropUp },
  data() {
    return {
      linkList: [
        {
          name: 'EVENTI',
          path: '#ev',
        },
        {
          name: 'PUNTI DI INTERESSE',
          path: '#poi',
        },
        {
          name: 'ITINERARI',
          path: '#it',
        },
        {
          name: 'SERVIZI',
          path: '#ser',
        },
      ],
      imagesV: [
        {
          URL: '/images/home/slideshow/0.webp',
          caption: 'Panorama notturno della città',
        },
        {
          URL: '/images/home/slideshow/1.webp',
          caption: 'Statua di Aloy',
        },
        {
          URL: '/images/home/slideshow/2.webp',
          caption: 'Piazza Santa Maria Novella',
        },
        {
          URL: '/images/home/slideshow/3.webp',
          caption: 'Galleria della Accademia',
        },
        {
          URL: '/images/home/slideshow/4.webp',
          caption: 'Lupi di Liu Ruowang',
        },
        {
          URL: '/images/home/slideshow/5.webp',
          caption: 'Panorama diurno della città',
        },
        {
          URL: '/images/home/slideshow/6.webp',
          caption: 'Arco di Trionfo',
        },
        {
          URL: '/images/home/slideshow/7.webp',
          caption: 'Fontana del Nettuno',
        },
        {
          URL: '/images/home/slideshow/8.webp',
          caption: 'Ponte Vecchio',
        },
        {
          URL: '/images/home/slideshow/9.webp',
          caption: 'Galleria degli Uffizi',
        },
      ],
      introduction:
        'Non perdere la possibilità di vivere il meglio che Firenze ha da offrire e di scoprire la città come non l’hai mai vista prima.',
      evURL: '/images/home/cards/ev.webp',
      evCaption: 'Cavalcata dei magi',
      evtitle: 'Dalle vecchie tradizioni alle grandi novità.',
      evText:
        'Non lasciarti sfuggire nessuno degli eventi che si terranno nella città durante la tua permanenza. Firenze offre una vasta scelta di spettacoli e manifestazioni a cui poter partecipare.\n' +
        'Consulta la guida e scopri quale evento fa al caso tuo.',
      poiURL: '/images/home/cards/poi.webp',
      poiCaption: 'Cattedrale di Santa Maria del Fiore',
      poiTitle: 'Dai luoghi più famosi a quelli più segreti.',
      poiText:
        'Lasciati ispirare e travolgere dai punti di interesse che caratterizzano la città. Durante la tua permanenza goditi le meraviglie di Firenze da quelle più rinomate a quelle più innovative.\n' +
        'Consulta la guida e segli cosa vedere prima.',
      itURL: '/images/home/cards/it.webp',
      itCaption: 'Panorama della città',
      itTitle: 'Un tour della città ricco di sorpese.',
      itText:
        'Grazie ai migliori itinerari della città avrai la possibilità di vedere tutti i luoghi di tuo interesse e di partecipare a tutti gli eventi che ti coinvolgono maggiormente senza perdere tempo.\n' +
        'Consulta la guida e scopri quale sarà il tuo itinerario.',
      serURL: '/images/home/cards/ser.webp',
      serCaption: 'Servizio di ristoro',
      serTitle: 'La soluzione ad ogni necessità e le migliori cucine.',
      serText:
        'Approfitta della grande offerta si servizi di ogni tipo disponibili in città tra cui ospedali, cliniche e farmacie, ma anche bar, ristoranti e locali notturni. \n' +
        'Consulta la guida per trovare il servizio di cui necessiti.',
    }
  },
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          hid:'description',
          name:'description',
          content:'Il sito è stato adibito ad offrire ai visitatori di Firenze preziose informazioni per migliorare la loro esperienza nella città.',
        },
      ],
    }
  },
}
</script>

<style>

.welcome {
  background: linear-gradient(var(--shadow), var(--shadow)), url("/images/home/welcome.webp") center ;
  background-size: cover;
  height: 550px;
  margin-bottom: 70px;
}

.title {
  color: var(--green);
  font-weight: bold;
  padding-top: 420px;
  text-align: center;
  cursor: default;
}

.title > h1, .title > h2 {
  background-color: var(--beige);
  margin: 0px;
}

.title > hr {
  margin: 0px;
}

.flavour-text{
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
}

.home-container {
  margin: auto;
  max-width: 86%;
  margin-top: 100px;
  margin-bottom: 100px;
}

.long-image-container {
  margin: 20px 5px 20px 5px;
}

.long-image {
  width: 100%;
  aspect-ratio: 21/14;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 5px 5px 10px 5px var(--green);
}

.long-image:hover {
  cursor: pointer;
}

.home-link {
  color: var(--green);
  font-weight: bold;
  padding: 3px;
}

.home-link:hover {
  background-color: var(--beige);
  color: var(--green);
  text-decoration: none;
}

.home-button-container {
  text-align: center;
  margin-top: 50px;
  margin-right: 5px;
  margin-left: 5px;
}

.button-container {
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>
