<template>
  <div @click="SendClickEvent">
    <img src=imageURL alt=imageCaption />
    <h5>{{ title }}</h5>
    <text> {{ description }} </text>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    imageURL: { type: String, required: true, },
    imageCaption: { type: String, required: true, },
    title: { type: String, required: true, },
    description: { type: String, required: true, },
  },
  methods:{
    SendClickEvent(){
      this.$emit('click-event')
    }
  }
}
</script>
