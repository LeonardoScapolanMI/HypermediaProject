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
      :endpoint="'/api/event'"
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
    return {
      description: 'Vieni a scoprire tutti gli eventi che si svolgono a Firenze, sarà un’avventura senza eguali. Passerai delle incredibili giornate nella nostra grande città, tra sport, musica e arte. Dal mercatino di Natale ai concerti musicali estivi, Firenze ti offre qualsiasi tipo di esperienza tutto l’anno.'
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
