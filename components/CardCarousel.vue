<template>
  <div id="wrapper">
    <img
      v-if="content.length > 3 "
      id="arrow"
      class="carousel-control-prev-icon"
      src="/icons/angle-left-solid.svg"
      alt="icona indietro"
      @click="prev"
    />

    <div id="cards" class="container">
      <div class="row justify-content-center">
        <div
          v-for="(cards, cardIndex) of getItemsToShow()"
          :key="`card-index-${cardIndex}`"
          :class="'col' + colSize"
        >
          <Card
            :image-url="cards.image.URL"
            :image-caption="cards.image.caption"
            :title="cards.name"
            :description="cards.description"
            @onSeeDetails="$emit('onSeeDetails', cards.id)"
          />
        </div>
      </div>
    </div>

    <img
      v-if="content.length > 3"
      id="arrow"
      class="carousel-control-next-icon"
      alt="icona avanti"
      src="/icons/angle-right-solid.svg"
      @click="next"
    />
    
  </div>
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
      /*
      start: 0,
      end: 3,
      start1: '',
      end1: '',
      */
      current: 0,
      nToShow: 0,
      colSize: '',
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
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    prev() {
      /* if (this.start === 0) {
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
      } */
      
      if(this.current>0) {
      this.current = (this.current - 1) % this.content.length
      } else {
        this.current= this.content.length - 1
      }
      
    },
    next() {
      /*
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
      */
      this.current = (this.current + 1) % this.content.length
    },
    getItemsToShow() {
      /*
      return this.content
        .slice(this.start, this.end)
        .concat(this.content.slice(this.start1, this.end1))
      */
      if (this.current + this.nToShow < this.content.length || this.content.length < 3) {
        return this.content.slice(this.current, this.current + this.nToShow)
      } else {
        return this.content
          .slice(this.current, this.content.length)
          .concat(
            this.content.slice(
              0,
              this.current + this.nToShow - this.content.length
            )
          )
      }
    },
    onResize() {

      const componentWidth = document.getElementById('wrapper').clientWidth
      const computedStyle = window.getComputedStyle(document.documentElement)

      if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-md'))) {
        this.nToShow = 1
        this.colSize = ''
      } else if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-lg'))) {
        this.nToShow = 2
        this.colSize = '-6'
      } else {
        this.nToShow = 3
        this.colSize = '-4'
      }
    },
  },
}
</script>

<style scoped>

#wrapper {
  display: flex;
}

#cards {
  flex: 1 !important;
}

.container {
  max-width: none;
}

#arrow {
  margin: auto;
  padding: 20px 15px;
  background-color: var(--brown);
  width: 50px;
}

</style>
