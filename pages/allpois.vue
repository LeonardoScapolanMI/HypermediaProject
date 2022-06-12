<template>
  <div>
    <the-header />
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">TUTTI I PUNTI DI INTERESSE</h1>
    </div>

    <card-list
      :endpoint="'http://localhost:3000/api/poi'"
      :details-page-folder="'poi_details'"
      :no-items-placeholder="'Al momento non ci sono punti di interesse'"
      :error-text="'Impossibile caricare i punti di interesse'"
    />

    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllPois',
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
