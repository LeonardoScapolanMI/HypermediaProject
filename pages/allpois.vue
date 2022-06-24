<template>
  <div class="height">

    <!-- BREADCRUMB -->
        
    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" id="old">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page" id="page">Tutti i punti di interesse</li>
      </ol>
    </div>

    <!-- TITLE -->

    <div class="page-title">
      <h1>TUTTI I PUNTI DI INTERESSE</h1>
    </div>

    <!-- CARDS -->

    <card-list
      :endpoint="'/api/poi'"
      :details-page-folder="'poi_details'"
      :no-items-placeholder="'Al momento non ci sono punti di interesse'"
      :error-text="'Impossibile caricare i punti di interesse'"
    />
     
     <!-- BACK UP BUTTON -->

    <div class="dropup">
      <a href="#" id="up-button" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>
    
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllPois',
  components: { CardList },
  data() {
    return {}
  },
}
</script>
