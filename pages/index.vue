<template>
  <div>
    <the-header />
    <image src="/images/icon.png" />
    <map-box
    :indirizzo="'https://maps.google.com/maps?q=milano+piazza+leonardo+da+vinci+32&t=&z=13&ie=UTF8&iwloc=&output=embed'" />
    <the-footer />
  </div>
</template>

<script>

import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'IndexPage',
  components: { TheFooter, TheHeader},
  }

</script>
