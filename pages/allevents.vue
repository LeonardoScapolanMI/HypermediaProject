<template>
  <div>

    <!-- BREADCRUMB -->

    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" id="old">HOME</a></li>
        <li class="breadcrumb-item"><a href="/alleventgroupings" id="old">Tutti i gruppi di eventi</a></li>
        <li class="breadcrumb-item active" aria-current="page" id="new">Tutti gli eventi</li>
      </ol>
    </div>

    <!-- TITLE -->

    <div class="page-title">
      <h1>TUTTI GLI EVENTI</h1>
    </div>

    <!-- OVERVIEW -->

    <div class="text-content">
      <p class="text-with-line-break ">{{ description }}</p>
    </div>

    <!-- CARDS -->
    <card-list
      :endpoint="'/api/event'"
      :details-page-folder="'event_details'"
      :no-items-placeholder="'Al momento non ci sono eventi'"
      :error-text="'Impossibile caricare gli eventi'"
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
  name: 'AllEvents',
  components: { CardList },
  data() {
    return {
      description: 'Vieni a scoprire tutti gli eventi che si svolgono a Firenze, sarà un’avventura senza eguali. Passerai delle incredibili giornate nella nostra grande città, tra sport, musica e arte. Dal mercatino di Natale ai concerti musicali estivi, Firenze ti offre qualsiasi tipo di esperienza tutto l’anno.'
    }
  },
}
</script>
