<template>
  <div class="card" style="width: 18rem" @click="SendClickEvent">
    <img class="card-img-top" :src="imageUrl" :alt="imageCaption" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    imageUrl: { type: String, required: true },
    imageCaption: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  head() {
    return {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
            integrity:
              'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
            crossorigin: 'anonymous',
          },
        ],
        script: [
          {
            src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
            integrity:
              'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
            integrity:
              'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
            integrity:
              'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
            crossorigin: 'anonymous',
          },
        ],
    }
  },
  methods: {
    SendClickEvent() {
      this.$emit('click-event')
    },
  },
}
</script>
