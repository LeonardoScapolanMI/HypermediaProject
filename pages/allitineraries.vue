<template>
  <div>
    <!-- TITLE -->

<<<<<<< HEAD
    <div class="title">
      <h1 class="text-center">TUTTI GLI ITINERARI</h1>
=======
    <div class="page-title">
      <h1>TUTTI GLI ITINERARI</h1>
>>>>>>> 381e676168ed03d1443ee2a25997da57e9e06def
    </div>

    <!-- IMAGE -->

<<<<<<< HEAD
    <div class="text-center">
      <img src="/images/itinerary/intro.jpg" alt="anteprima degli itinerari" class="title-image"/>
=======
    <div class="title-image-container">
      <img src="/images/itinerary/intro.jpg" alt="anteprima degli itinerari"/>
>>>>>>> 381e676168ed03d1443ee2a25997da57e9e06def
    </div>

    <!-- OVERVIEW -->

    <div>
      <p id="text text-with-line-break ">{{ description }}</p>
    </div>

    <!-- CARDS -->

    <card-list
      :endpoint="'/api/itinerary'"
      :details-page-folder="'itinerary_details'"
      :no-items-placeholder="'Al momento non ci sono itinerari'" 
      :error-text="'Impossibile caricare gli itinerari'"
    />
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllItineraries',
  components: { CardList },
  data() {
    return {
      description: 'Scopri tutti gli itinerari che puoi svolgere a Firenze e trova tutti i monumenti più antichi e le vedute più suggestive. Seguendo i nostri itinerari potrai godere appieno di tutte le bellezze della nostra città, immergendoti totalmente nel suo spirito e nella sua incredibile storia, sia presente che passata.'
    }
  },
}
</script>
