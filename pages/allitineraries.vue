<template>
  <div>
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">TUTTI GLI ITINERARI</h1>
    </div>

    <!-- IMAGE -->

    <div>
      <img src="/images/itinerary/intro.jpg" alt="anteprima degli itinerari" class="thumbnail-image"/>
    </div>

    <!-- OVERVIEW -->

    <div>
      <p id="text">{{ description }}</p>
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

<style>
body {
  color: var(--dark-blue);
  font-family: Georgia;
}

.titolo {
  padding: 2em;
}
</style>
