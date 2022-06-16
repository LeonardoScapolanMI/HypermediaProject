<template>
  <section id="myCarousel" class="pt-5 pb-5">
    <div class="container">
      <div class="col-6 text-right">
        <div v-if="content.length > 3" id="prev-button" @click="prev">
          <img src="/icons/angle-left-solid.svg" alt="icona indietro" />
        </div>
        <div v-if="content.length > 3" id="next-button" @click="next">
          <img src="/icons/angle-right-solid.svg" alt="icona avanti" />
        </div>
      </div>

      <div class="col-12" id="myCarousel">
        <div class="row" id="myCarousel">
          <div
            class="col-md-4"
            v-for="(cards, cardIndex) of content
              .slice(start, end)
              .concat(content.slice(start1, end1))"
            :key="`card-index-${cardIndex}`"
          >
            <Card
              @onSeeDetails="$emit('onSeeDetails', cards.id)"
              :imageUrl="cards.image.URL"
              :imageCaption="cards.image.caption"
              :title="cards.name"
              :description="cards.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardCarousel',

  props: {
    content: { type: Array, required: true },
    typeList: { type: String, default: 'POI' },
  },

  data() {
    return {
      start: 0,
      end: 3,
      start1: '',
      end1: '',
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css',
          integrity:
            'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css',
          integrity:
            'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
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
    prev() {
      if (this.start === 0) {
        const x = this.start
        const y = this.end
        this.start = this.content.length - 1
        this.end = this.content.length
        this.start1 = x
        this.end1 = y - 1
      } else if (
        this.start === this.content.length - 1 &&
        this.end === this.content.length
      ) {
        this.start = this.content.length - 2

        this.end1 = this.end1 - 1
      } else if (
        this.start === this.content.length - 2 &&
        this.end === this.content.length
      ) {
        this.start = this.start - 1

        this.start1 = null
        this.end1 = null
      } else {
        this.start = this.start - 1
        this.end = this.end - 1
        this.end1 = null
        this.start1 = null
      }
    },

    next() {
      if (
        this.end === this.content.length &&
        this.start === this.content.length - 3
      ) {
        this.start = this.start + 1
        this.start1 = 0
        this.end1 = 1
      } else if (
        this.start === this.content.length - 2 &&
        this.start1 === 0 &&
        this.end1 === 1
      ) {
        this.start = this.content.length - 1
        this.end = this.content.length

        this.end1 = this.end1 + 1
      } else if (
        this.start === this.content.length - 1 &&
        this.end === this.content.length
      ) {
        this.start = 0
        this.end = 3
        this.start1 = null
        this.end1 = null
      } else {
        this.start = this.start + 1
        this.end = this.end + 1
      }
    },
  },
}
</script>

<style scoped>
#prev-button,
#next-button {
  color: black;
  width: 50px;
}
</style>
