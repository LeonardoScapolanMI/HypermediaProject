<template>
  <div class="height">

    <!-- BREADCRUMB -->

    <BreadCrumb title="Eventi invernali"/>

    <!-- TITLE -->

    <div class="page-title">
      <h1>EVENTI INVERNALI</h1>
    </div>

    <!-- IMAGE -->

    <div class="title-image-container">
      <img src="/images/event/winter.jpg" alt="anteprima di tutti gli eventi invernale" class="title-image"/>
    </div>

    <!-- OVERVIEW -->

    <div class="text-content" >
      <p id="text text-with-line-break ">{{ description }}</p>
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

function nextWinterYears(){
  const now = new Date()
  let firstYear = now.getFullYear()
  if(now.getMonth() <= 3) firstYear--
  return firstYear + '/' + (firstYear+1);
}

export default {
  name: 'AllEvents',
  components: { CardList },
  data() {
    return {
      description: 'Questa sezione offre una guida per tutti gli eventi invernali previsti a Firenze per vivere al meglio la città anche nei mesi più freddi.\n' +
        'Ecco un elenco delle eventi offerti dal terrritorio durante l\'inverno ' + nextWinterYears() +'.'
    }
  },
}
</script>

