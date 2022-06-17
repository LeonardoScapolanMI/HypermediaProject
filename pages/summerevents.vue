<template>
  <div>
    <!-- TITLE -->

    <div class="page-title">
      <h1>EVENTI ESTIVI</h1>
    </div>

    <!-- IMAGE -->

    <div class="title-image-container">
      <img src="/images/event/summer.jpg" alt="anteprima di tutti gli eventi estivi" class="title-image"/>
    </div>

    <!-- OVERVIEW -->

    <div class="text-content">
      <p id="text text-with-line-break ">{{ description }}</p>
    </div>

    <!-- CARDS -->
    <card-list
      :endpoint="'/api/event/summer'"
      :details-page-folder="'event_details'"
      :no-items-placeholder="'Al momento non ci sono eventi estivi'"
      :error-text="'Impossibile caricare gli eventi'"
    />
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

function nextSummerYear(){
  const now = new Date()
  let ret = now.getFullYear()
  if(now.getMonth() >= 10) ret++
  return ret;
}

export default {
  name: 'AllEvents',
  components: { CardList },
  data() {
    return {
      description: 'Questa sezione offre una guida per tutti gli eventi estivi previsti a Firenze per vivere al meglio la città anche nei mesi più caldi.\n' +
        'Ecco un elenco delle eventi offerti dal terrritorio durante l\'estate ' + nextSummerYear() + '.'
    }
  },
}
</script>