<template>
  <div>
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">TUTTI I PUNTI DI INTERESSE</h1>
    </div>

    <!-- CARDS -->

    <card-list
      :endpoint="'/api/poi'"
      :details-page-folder="'poi_details'"
      :no-items-placeholder="'Al momento non ci sono punti di interesse'"
      :error-text="'Impossibile caricare i punti di interesse'"
    />
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllPois',
  components: { CardList },
  data() {
    return {}
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
