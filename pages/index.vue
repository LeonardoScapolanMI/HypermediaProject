<template>
  <div>
    <the-header />
    <card 
      :image-url="imageUrl" 
      :image-caption="imageCaption" 
      :title="title" 
      :description="description" 
     
    />
    <map-box
    :indirizzo="'https://maps.google.com/maps?q=milano+piazza+leonardo+da+vinci+32&t=&z=13&ie=UTF8&iwloc=&output=embed'" />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import Card from '~/components/Card.vue'
export default {
  name: 'IndexPage',
  components: { TheFooter, TheHeader, Card },
  data() {
    return { 
      imageUrl: "~/static/firenze.png",
      imageCaption: "caption",
      title: "TITOLO",
      description: "Ciao sono una card"}
      
    },
  }
  

</script>
