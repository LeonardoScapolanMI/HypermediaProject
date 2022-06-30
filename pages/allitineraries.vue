<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>
    
    <!-- Insert the title --> 

    <div class="page-title">
      <h1>TUTTI GLI ITINERARI</h1>
    </div>

    <!-- Insert an image -->

    <div class="title-image-container">
      <img src="/images/itinerary/intro.jpg" alt="anteprima degli itinerari" class="title-image"/>
    </div>

    <!-- Insert a general overview -->

    <div class="text-content">
      <p class="text-with-line-break">{{ description }}</p>
    </div>

    <!-- Insert card list by calling the component -->

    <card-list
      :endpoint="'/api/itinerary'"
      :details-page-folder="'itinerary_details'"
      :no-items-placeholder="'Al momento non ci sono itinerari'" 
      :error-text="'Impossibile caricare gli itinerari'"
    />

    <!-- Insert the back up button -->

    <div class="dropup">
      <a id="up-button" href="#" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>
    
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
  name: 'AllItineraries',
  components: { CardList, BreadCrumb },
  data() {
    const bc =[]
    bc.push(
      { title:'Tutti gli Itinerari', path:'' }
      )
    return {
      bc,
      description: 'Scopri tutti gli itinerari che puoi svolgere a Firenze e trova tutti i monumenti più antichi e le vedute più suggestive. Seguendo i nostri itinerari potrai godere appieno di tutte le bellezze della nostra città, immergendoti totalmente nel suo spirito e nella sua incredibile storia, sia presente che passata.'
    }
  },
  
  head() {
    return {
      title: 'Tutti gli itinerari',
      meta: [
        {
          hid:'description',
        name:'description',
          content:
            'In questa pagina sono elencati tutte itinerari percorribili prensenti a Firenze',
        },
      ],
    }
  },
}
</script>
