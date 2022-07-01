<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>

    <!-- Insert the title --> 
    
    <div class="page-title">
      <h1>TUTTI I PUNTI DI INTERESSE</h1>
    </div>

    <!-- Insert card list by calling the component -->

    <card-list
      :endpoint="'/api/poi'"
      :details-page-folder="'poi_details'"
      :no-items-placeholder="'Al momento non ci sono punti di interesse'"
      :error-text="'Impossibile caricare i punti di interesse'"
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
  name: 'AllPois',
  components: { CardList, BreadCrumb, DropUp },
  data() {
    const bc =[]
    bc.push (
      { title:'Tutti i Punti di Interesse', path:'' }
      )
    return {
      bc,
    }
  },
  
  head() {
    return {
      title: 'Tutti i punti di interesse',
      meta: [
        {
          hid:'description',
        name:'description',
          content:
            'In questa pagina sono elencati tutte tutti i punti di interesse presenti a Firenze.',
        },
      ],
    }
  },
}
</script>
