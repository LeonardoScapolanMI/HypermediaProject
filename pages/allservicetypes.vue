<template>
  <div>
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">TUTTI I TIPI DI SERVIZIO</h1>
    </div>

    <card-list
      :endpoint="'/api/serviceType'"
      :details-page-folder="'service_type_details'"
      :no-items-placeholder="'Al momento non ci sono tipi di servizio'"
      :error-text="'Impossibile caricare i tipi di servizio'"
    />
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllSerrvices',
  components: { CardList },
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
