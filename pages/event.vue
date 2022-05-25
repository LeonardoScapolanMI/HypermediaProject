<template>
  <div>
    <the-header />

    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import Card from '~/components/Card.vue'
export default {

  name: 'Event',
  components: { TheFooter, TheHeader, Card },
}
</script>