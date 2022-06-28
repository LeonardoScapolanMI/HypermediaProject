<template>
  <div class="height">

    <!-- BREADCRUMB -->

    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" id="old">HOME</a></li>
        <li class="breadcrumb-item active" aria-current="page" id="new">Tutti i punti di interesse</li>
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
