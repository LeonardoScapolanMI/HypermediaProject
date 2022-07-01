<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>

    <!-- Insert the title --> 

    <div class="page-title">
      <h1>TUTTI GLI EVENTI</h1>
    </div>

    <!-- Insert a general overview -->

    <div class="text-content">
      <p class="text-with-line-break ">{{ description }}</p>
    </div>

    <!-- Insert card list by calling the component -->

    <card-list
      :endpoint="'/api/event'"
      :details-page-folder="'event_details'"
      :no-items-placeholder="'Al momento non ci sono eventi'"
      :error-text="'Impossibile caricare gli eventi'"
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
  name: 'AllEvents',
  components: { CardList, BreadCrumb, DropUp },
  data() {
    const bc =[]
    bc.push({title:'Tutti i Gruppi di Eventi', path:'/alleventgroupings'})
    bc.push({title:'Tutti gli Eventi', path:''})
    return {
      bc,
      description: 'Vieni a scoprire tutti gli eventi che si svolgono a Firenze, sarà un’avventura senza eguali. Passerai delle incredibili giornate nella nostra grande città, tra sport, musica e arte. Dal mercatino di Natale ai concerti musicali estivi, Firenze ti offre qualsiasi tipo di esperienza tutto l’anno.'
    }
  },
 
  head() {
    return {
      title: 'Tutti gli eventi',
      meta: [
        {
          hid:'description',
        name:'description',
          content:
            'In questa pagina sono elencati tutte gli eventi che si svolgeranno a Firenze.',
        },
      ],
    }
  },
}
</script>
