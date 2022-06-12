<template>
  <div>
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
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllEvents',
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
