<template>
  <div>

    <!-- BREADCRUMB -->

    <BreadCrumb :crumbs='bc'/>
    
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
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
  name: 'AllServices',
  components: { CardList, BreadCrumb },
  data() {
    const bc =[]
    bc.push(
      { title:'Tutti i Tipi di Servizio', path:'' }
      )
    return {
      bc,
      description: 'Sei venuto a Firenze per una bellissima vacanza ma non sai dove trovare una banca o una farmacia? Ecco a te una lista di tutti i servizi indispensabili che puoi trovare facilmente a Firenze. Clicca sul tipo di servizio di cui hai bisogno e ti offriremo una vasta lista di esercenti del servizio indicato.'
    }
  },
}
</script>
