<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        {{ card }}
      </div>
    </div>
    <a class="carousel-control-prev" href="#slideshow" data-slide="prev" @click="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#slideshow" data-slide="next" @click="next">
                <span class="carousel-control-next-icon"></span>
            </a>
    
  </div>

</template>

<script>
export default {
   name: 'CardCarousel',
  data () {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  mounted () {
    this.setStep()
    this.resetTranslate()
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>

<style>
.carousel {
  width: 69em;
  overflow: hidden;
}
.inner {
  transition: transform 1s;
  white-space: nowrap;
}
.card {
  width: 23em;
  margin-right: 10px;
  display: inline-flex;
 
  height: 23em;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>