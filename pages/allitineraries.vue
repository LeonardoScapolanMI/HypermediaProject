<template>
  <div>
    <the-header />

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">ALL ITINERARIES</h1>
    </div>

    <!-- CARDS -->

    <card-list
      :endpoint="'http://localhost:3000/api/itinerary'"
      :details-page-folder="'itinerary_details'"
    />

    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllItineraries',
  components: { TheFooter, TheHeader, CardList },
  data() {
    return {}
  },
}
</script>

<style>
body {
  color: #414535;
  font-family: Georgia;
}

.titolo {
  padding: 2em;
}
</style>
