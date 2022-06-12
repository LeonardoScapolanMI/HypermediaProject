<template>
  <div>
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">EVENTI INVERNALI</h1>
    </div>

    <!-- OVERVIEW -->

    <div>
      <p id="text">{{ description }}</p>
    </div>

    <!-- CARDS -->
    <card-list
      :endpoint="'/api/event/winter'"
      :details-page-folder="'event_details'"
      :no-items-placeholder="'Al momento non ci sono eventi invernali'"
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

