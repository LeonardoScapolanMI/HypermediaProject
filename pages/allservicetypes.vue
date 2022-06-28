<template>
  <div>

    <!-- BREADCRUMB -->

    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" id="old">HOME</a></li>
        <li class="breadcrumb-item active" aria-current="page" id="new">Tutti i tipi di servizio</li>
      </ol>
    </div>
    
    <!-- TITLE -->

    <div class="page-title">
      <h1>TUTTI I TIPI DI SERVIZIO</h1>
    </div>

    <!-- OVERVIEW -->

    <div class="text-content">
      <p class="text-with-line-break">{{ description }}</p>
    </div>

    <!-- CARDS -->

    <card-list
      :endpoint="'/api/serviceType'"
      :details-page-folder="'service_details'"
      :no-items-placeholder="'Al momento non ci sono tipi di servizio'"
      :error-text="'Impossibile caricare i tipi di servizio'"
    />

    <!-- BACK UP BUTTON -->

    <div class="dropup">
      <a id="up-button" href="#" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>

    </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllServices',
  components: { CardList },
  data() {
    return {
      description: 'Sei venuto a Firenze per una bellissima vacanza ma non sai dove trovare una banca o una farmacia? Ecco a te una lista di tutti i servizi indispensabili che puoi trovare facilmente a Firenze. Clicca sul tipo di servizio di cui hai bisogno e ti offriremo una vasta lista di esercenti del servizio indicato.'
    }
  },
}
</script>
