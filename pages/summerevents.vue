<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs='bc'/>
    
    <!-- Insert the title --> 

    <div class="page-title">
      <h1>EVENTI ESTIVI</h1>
    </div>

    <!-- IMAGE -->

    <div class="title-image-container">
      <img src="/images/event/summer.jpg" alt="anteprima di tutti gli eventi estivi" class="title-image"/>
    </div>

    <!-- Insert a general overview -->

    <div class="text-content">
      <p class="text-with-line-break ">{{ description }}</p>
    </div>

    <!-- Insert card list by calling the component -->

    <card-list
      :endpoint="'/api/event/summer'"
      :details-page-folder="'event_details'"
      :no-items-placeholder="'Al momento non ci sono eventi estivi'"
      :error-text="'Impossibile caricare gli eventi'"
    />

    <!-- Insert the back up button -->

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

function nextSummerYear(){
  const now = new Date()
  let ret = now.getFullYear()
  if(now.getMonth() >= 10) ret++
  return ret;
}

export default {
  name: 'AllEvents',
  components: { CardList, BreadCrumb },
  data() {
    const bc =[]
    bc.push({title:'Tutti i Gruppi di Eventi', path:'/alleventgroupings'})
    bc.push({title:'Eventi Estivi', path:''})
    return {
      bc,
      description: 'Questa sezione offre una guida per tutti gli eventi estivi previsti a Firenze per vivere al meglio la città anche nei mesi più caldi.\n' +
        'Ecco un elenco delle eventi offerti dal terrritorio durante l\'estate ' + nextSummerYear() + '.'
    }
  },
  
  head() {
    return {
      title: 'Tutti gli eventi estivi',
      meta: [
        {
          hid:'description',
        name:'description',
          content:
            'In questa pagina sono elencati tutti gli eventi estivi che si svolgeranno a Firenze.',
        },
      ],
    }
  },
  
}
</script>