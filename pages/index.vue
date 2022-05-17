<template>
  <div>
    <the-header />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'IndexPage',
  components: { TheFooter, TheHeader },
}
</script>
