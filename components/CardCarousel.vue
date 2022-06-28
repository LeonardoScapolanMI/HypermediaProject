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
            class="light-shadow"
            @onSeeDetails="$emit('onSeeDetails', cards.id)"
          />
        </div><!-- Print the cards-->
      </div>
    </div>

    <img
      v-if="content.length > 3"
      id="arrow"
      class="carousel-control-next-icon"
      alt="icona avanti"
      src="/icons/angle-right-solid.svg"
      @click="next"
    /><!-- Display the button to go forward in the carousel-->
    
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
      if(this.current>0) {
      this.current = (this.current - 1) % this.content.length
      } else {
        this.current= this.content.length - 1
      }
      
    },
    next() {
      this.current = (this.current + 1) % this.content.length
    },
    getItemsToShow() {
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
    onResize() {// responsive deisgn method

      const componentWidth = document.getElementById('wrapper').clientWidth // gets width of the 
      const computedStyle = window.getComputedStyle(document.documentElement)

      if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-md'))) {
        this.nToShow = 1
        this.colSize = ''
      } else if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-lg'))) {
        this.nToShow = 2
        this.colSize = '-6'
      } else if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-xxl'))) {
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

.light-shadow {
  box-shadow: 5px 5px 10px 3px var(--beige);
}

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
  padding: 20px 20px;
  width: 40px;
  background-color: var(--brown);
  border-radius: 30px;
}

#arrow:hover {
  cursor: pointer;
  background-color: var(--green);
}

</style>
