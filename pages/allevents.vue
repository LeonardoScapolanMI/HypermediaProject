<template>
  <div>
    <the-header />
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">TUTTI GLI EVENTI</h1>
    </div>

    <!-- OVERVIEW -->

    <div>
      <p id="text">{{ description }}</p>
    </div>

    <!-- CARDS -->
    <card-list
      :endpoint="'http://localhost:3000/api/event'"
      :details-page-folder="'event_details'"
      :no-items-placeholder="'Al momento non ci sono eventi'"
      :error-text="'Impossibile caricare gli eventi'"
    />

    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllEvents',
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
