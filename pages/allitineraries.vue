<template>
  <div>
    <!-- TITLE -->

    <div class="page-title">
      <h1>TUTTI GLI ITINERARI</h1>
    </div>

    <!-- IMAGE -->

    <div class="title-image-container">
      <img src="/images/itinerary/intro.jpg" alt="anteprima degli itinerari" class="title-image"/>
    </div>

    <!-- OVERVIEW -->

    <div class="text-content">
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

<style>
.title-image{
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>
