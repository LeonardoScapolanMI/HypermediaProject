<template>
  <div>
    <the-header />
    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">ALL EVENTS</h1>
    </div>

    <card-list :endpoint="'http://localhost:3000/api/event'" :details-page-folder="'event_details'"/>

    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import CardList from '~/components/CardList.vue'

export default {
  name: 'AllPOIs',
  components: { TheFooter, TheHeader, CardList },
  data() {
    return {}
  },
}
</script>

<style>
body {
  color: #414535;
  font-family: Georgia;
}

.titolo {
  padding: 2em;
}
</style>