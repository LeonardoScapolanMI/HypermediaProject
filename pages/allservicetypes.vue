<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->
    <BreadCrumb :crumbs='bc'/>
    
    <!-- Insert the title --> 
    <div class="page-title">
      <h1>TUTTI I TIPI DI SERVIZIO</h1>
    </div>

    <!-- Insert a general overview -->
    <div class="text-content">
      <p class="text-with-line-break">{{ description }}</p>
    </div>

    <!-- Insert card list by calling the component -->
    <card-list
      :endpoint="'/api/serviceType'"
      :details-page-folder="'service_details'"
      :no-items-placeholder="'Al momento non ci sono tipi di servizio'"
      :error-text="'Impossibile caricare i tipi di servizio'"
    />

   <!-- Insert the back up button -->
    <drop-up/>

    </div>
</template>

<script>
import CardList from '~/components/CardList.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import DropUp from '~/components/DropUp.vue'

export default {
  name: 'AllServices',
  components: { CardList, BreadCrumb, DropUp },
  data() {
    const bc =[]
    bc.push({ title:'Tutti i Tipi di Servizio', path:'' })
    return {
      bc,
      description: 'Sei venuto a Firenze per una bellissima vacanza ma non sai dove trovare una banca o una farmacia? Ecco a te una lista di tutti i servizi indispensabili che puoi trovare facilmente a Firenze. Clicca sul tipo di servizio di cui hai bisogno e ti offriremo una vasta lista di esercenti del servizio indicato.'
    }
  },
  head() {
    return {
      title: 'Tutti i tipi di servizi',
      meta: [
        {
          hid:'description',
          name:'description',
          content:'In questa pagina sono elencati tutte le categorie di servizi per i visitatori prensenti a Firenze',
        },
      ],
    }
  },
}
</script>
