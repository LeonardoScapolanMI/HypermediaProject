<template>
  <div id="wrapper">
    <button
      v-if="content.length > 3"
      title="elemento precedente"
      class="arrow carousel-control-prev-icon"
      @click="prev"
    />
    <!-- Display the button to go back in the carousel-->
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
        <!-- Print the cards-->
      </div>
    </div>
    <button
      v-if="content.length > 3"
      title="elemento successivo"
      class="arrow carousel-control-next-icon"
      @click="next"
    />
    <!-- Display the button to go forward in the carousel-->
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
      current: 0,
      nToShow: 0,
      colSize: '',
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    prev() {
      if (this.current > 0) {
        this.current = (this.current - 1) % this.content.length
      } else {
        this.current = this.content.length - 1
      }
    },
    next() {
      this.current = (this.current + 1) % this.content.length
    },
    getItemsToShow() {
      if (
        this.current + this.nToShow < this.content.length ||
        this.content.length < 3
      ) {
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
      // responsive deisgn method

      const componentWidth = document.getElementById('wrapper').clientWidth // gets width of the
      const computedStyle = window.getComputedStyle(document.documentElement)

      if (
        componentWidth <=
        parseFloat(computedStyle.getPropertyValue('--breakpoint-md'))
      ) {
        this.nToShow = 1
        this.colSize = ''
      } else if (
        componentWidth <=
        parseFloat(computedStyle.getPropertyValue('--breakpoint-lg'))
      ) {
        this.nToShow = 2
        this.colSize = '-6'
      } else if (
        componentWidth <=
        parseFloat(computedStyle.getPropertyValue('--breakpoint-xxl'))
      ) {
        this.nToShow = 3
        this.colSize = '-4'
      } else {
        this.nToShow = 4
        this.colSize = '-3'
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

.arrow {
  margin: auto;
  width: min(5vw, 40px);
  aspect-ratio: 1;
  height: auto;
  background-color: var(--brown);
  border-radius: 30px;
}

.arrow:hover,
.arrow:focus {
  cursor: pointer;
  background-color: var(--green);
}

button,
button:focus {
  border: none;
  background-color: transparent;
}
</style>
