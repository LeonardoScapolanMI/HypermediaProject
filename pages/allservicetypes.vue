<template>
  <div>
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">TUTTI I TIPI DI SERVIZIO</h1>
    </div>

    <!-- OVERVIEW -->

    <div>
      <p id="text">{{ description }}</p>
    </div>

    <!-- CARDS -->

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
    return {
      description: 'Sei venuto a Firenze per una bellissima vacanza ma non sai dove trovare una banca o una farmacia? Ecco a te una lista di tutti i servizi indispensabili che puoi trovare facilmente a Firenze. Clicca sul tipo di servizio di cui hai bisogno e ti offriremo una vasta lista di esercenti del servizio indicato.'
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
