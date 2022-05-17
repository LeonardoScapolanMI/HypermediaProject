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
  components: { TheFooter, TheHeader },
  name: 'IndexPage',
}
</script>
