<template>
  <div>

    <!-- INTRO -->
    
    <div class="welcome" id="init">
      <div class="title">
      <h1>FIRENZE</h1>
      <hr class="line"/>
      <h4>come mai prima</h4>
      </div>  
    </div>

    <hr class="separator" />

    <!-- OVERVIEW -->

    <div class="text-content">
      <h5 class="text-center">{{ introduction }}</h5>
    </div>

    <!-- SLIDESHOW -->

    <SlideShow :images="imagesV" class="title-image-container"/>

    <!-- LINK STRUTTURALI -->

  <div id="ev" ></div>

    <div class="container home-links">
      <div class="row">
        <div class="col-sm-auto">
          <a href="#ev" class="home-link">EVENTI</a> 
        </div>
        <div class="col-sm-auto">
          <a href="#poi" class="home-link">PUNTI DI INTERESSE</a> 
        </div>
        <div class="col-sm-auto">
          <a href="#it" class="home-link">ITINERARI</a> 
        </div>
        <div class="col-sm-auto">
          <a href="#ser" class="home-link">SERVIZI</a> 
        </div>
      </div>
    </div>

  <!-- LONG CARDS -->

  <hr class="separator" />

  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="long-image-container">
          <a href="/allevents">
            <img class="long-image" :src="evURL" :alt="evCaption" />
          </a>
        </div>
      </div>
      <div class="col-md-7">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ evtitle }}</h3>
          <p class="text-with-line-break">{{ evText }}</p>
          <a href="/allevents" id="poi" class="home-button">Scopri di più</a>
        </div>
      </div>
    </div>
  </div>

  <hr class="separator" />

  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="long-image-container">
          <a href="/allpois">
            <img class="long-image" :src="poiURL" :alt="poiCaption" />
          </a>
        </div>
      </div>
      <div class="col-md-7">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ poiTitle }}</h3>
          <p class="text-with-line-break">{{ poiText }}</p>
          <a href="/allpois" id="it" class="home-button">Scopri di più</a>
        </div>
      </div>
    </div>
  </div>
  
  <hr class="separator" />

  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="long-image-container"> 
          <a href="/allitineraries">
            <img class="long-image" :src="itURL" :alt="itCaption" />
          </a>
        </div>
      </div>
      <div class="col-md-7">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ itTitle }}</h3>
          <p class="text-with-line-break">{{ itText }}</p>
          <a href="/allitineraries" id="ser" class="home-button">Scopri di più</a>
        </div>
      </div>
    </div>
  </div>

  <hr class="separator" />

  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="long-image-container">
        <img class="long-image" :src="serURL" :alt="serCaption" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="home-button-container">
          <h3 class="text-content-title">{{ serTitle }}</h3>
          <p class="text-with-line-break">{{ serText }}</p>
          <a href="/allservicetypes" class="home-button">Scopri di più</a>
         </div>
        </div>
      </div>
    </div>

    <!-- BACK UP BUTTON -->

    <div class="dropup">
      <a href="#init" id="up-button" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
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
      evURL: '/images/home/cards/ev.jpg',
      evCaption: 'Cavalcata dei magi',
      evtitle: 'Vecchie tradizioni e grandi novità.',
      evText: 'Non lasciarti sfuggire nessuno degli eventi che si terranno nella città durante la tua permanenza. Firenze offre una vasta scelta di spettacoli e manifestazioni a cui poter partecipare.\n'
              + 'Consulta la guida e scopri quale evento fa al caso tuo.',
      poiURL: '/images/home/cards/poi.jpg',
      poiCaption: 'Cattedrale di Santa Maria del Fiore',
      poiTitle: 'Dai luoghi più famosi a quelli più segreti.',
      poiText: 'Lasciati ispirare e travolgere dai punti di interesse che caratterizzano la città. Durante la tua permanenza goditi le meraviglie di Firenze da quelle più rinomate a quelle più innovative.\n'
                + 'Consulta la guida e segli cosa vedere prima.',
      itURL: '/images/home/cards/it.jpg',
      itCaption: 'Panorama della città',
      itTitle: 'Un itinerario della città ricco di sorpese.',
      itText: 'Grazie ai migliori itinerari della città avrai la possibilità di vedere tutti i luoghi di tuo interesse e di partecipare a tutti gli eventi che ti coinvolgono maggiormente senza perdere tempo.\n'
              + 'Consulta la guida e scopri quale sarà il tuo itinerario.',
      serURL: '/images/home/cards/ser.jpg',
      serCaption: 'Servizio di ristoro',
      serTitle: 'Le migliori cucine tradizionali e tutti i servizi necessari.',
      serText: 'Approfitta della grande offerta si servizi di ogni tipo disponibili in città tra cui ospedali, cliniche e farmacie, ma anche bar, ristoranti e locali notturni. \n'
                + 'Consulta la guida per trovare il servizio di cui necessiti.'
    }
  },
}
</script>

<style>

.welcome {
  background: linear-gradient(var(--dark), var(--dark)), url("/images/home/welcome.jpg") center ;
  background-size: cover;
  height: 500px;
}

.title {
  color: var(--brown);
  font-weight: bold;
  padding-top: 400px;
  text-align: center;
}

.title h1, .title h4, .title hr {
  background-color: var(--beige);
  margin: 0px;
}

.line {
  width: 0px;
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

.home-links {
  margin-bottom: 10px;
  max-width: 90% !important;
  margin: auto;
}

.home-link {
  color: var(--green);
  font-weight: bold;
}

.home-link:hover {
  color: var(--blue);
}

#up-button {
   padding: 5px 10px;
   margin: 15px;
   background-color: var(--blue);
   float: right;
   color: var(--aqua);
   border-radius: 10px;
}

#up-button:hover {
   color: var(--white);
}

#ev {
  margin-bottom: 90px;
}

.home-button-container {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}

.home-button {
  color: var(--white);
  background-color: var(--brown);
  border: 1px solid var(--green);
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}

.home-button:hover {
  color: var(--green);
  text-decoration: none;
}


</style>
