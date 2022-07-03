<template>
  <div>
    <!-- Insert breadcrumb with calling the component -->

    <BreadCrumb :crumbs="bc" />

    <!-- Insert the title -->

    <div class="page-title">
      <h1>EVENTI INVERNALI</h1>
    </div>

    <!-- IMAGE -->

    <div class="title-image-container">
      <img
        src="/images/event/winter.webp"
        alt="anteprima di tutti gli eventi invernale"
        class="title-image"
      />
    </div>

    <!-- Insert a general overview -->

    <div class="text-content">
      <p class="text-with-line-break">{{ description }}</p>
    </div>

    <!-- Insert card list by calling the component -->

    <card-list
      :endpoint="'/api/event/winter'"
      :details-page-folder="'event_details'"
      :no-items-placeholder="'Al momento non ci sono eventi invernali'"
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

function nextWinterYears() {
  const now = new Date()
  let firstYear = now.getFullYear()
  if (now.getMonth() <= 3) firstYear--
  return firstYear + '/' + (firstYear + 1)
}

export default {
  name: 'AllEvents',
  components: { CardList, BreadCrumb, DropUp },

  data() {
    const bc = []
    bc.push({ title: 'Tutti i Gruppi di Eventi', path: '/alleventgroupings' })
    bc.push({ title: 'Eventi Invernali', path: '' })
    return {
      bc,
      description:
        'Questa sezione offre una guida per tutti gli eventi invernali previsti a Firenze per vivere al meglio la città anche nei mesi più freddi.\n' +
        "Ecco un elenco delle eventi offerti dal terrritorio durante l'inverno " +
        nextWinterYears() +
        '.',
    }
  },
  head() {
    return {
      title: 'Tutti gli eventi invernali',
      meta: [
        {
          hid:'description',
        name:'description',
          content:
            'In questa pagina sono elencati tutti gli eventi invernali che si svolgeranno a Firenze',
        },
      ],
    }
  },
}
</script>

