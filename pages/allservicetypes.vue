<template>
  <div>
    <the-header />
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">TUTTI I TIPI DI SERVIZIO</h1>
    </div>

    <card-list
      :endpoint="'http://localhost:3000/api/serviceType'"
      :details-page-folder="'service_type_details'"
      :no-items-placeholder="'Al momento non ci sono tipi di servizio'"
      :error-text="'Impossibile caricare i tipi di servizio'"
    />

    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllSerrvices',
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
