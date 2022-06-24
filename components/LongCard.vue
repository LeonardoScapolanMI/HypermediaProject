<template>
  <div id='wrapper' class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="long-card-container">
          <img class="long-card" :src="imageUrl" :alt="imageCaption" />
        </div>
      </div>
      <div class="col-md-7">
        <h2 class="text-content-title">{{ title }}</h2>
        <p id="phone">{{phone}}</p>

        <p id="address">{{address}}</p>

        <div v-if="horizontal">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td v-for="day in  weekDays" :key="'day-' + day.index">
                  {{ day }}
                </td>
              </tr>
              <tr v-for="j in maxOpHours" :key="'row-' + j">
                <td v-for="(opH, opHIndex) in formattedOpHours" :key="'col-' + opHIndex">{{opH[j-1]}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <table class="table table-bordered">
            <tbody>
              <tr v-for="(opHRow, opHRowIndex) in formattedOpHours" :key="'row-' + opHRowIndex">
                <td>
                  {{ weekDays[opHRowIndex] }}
                </td>
                <td v-for="(opH, opHIndex) in opHRow" :key="'col-' + opHIndex">{{opH}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemLongCard',
  
  props: {
    imageUrl: { type: String, required: true },
    imageCaption: { type: String, required: true },
    title: { type: String, required: true },
    phone: { type: String, required: true },
    
    address: { type: String, required: true },
    opHours: { type: Array, required: true },
  },
  data(){
    const closedString = 'chiuso'

    const formattedOpHours = [];
    for(let i=0; i<7; i++){
      formattedOpHours[i] = [closedString]
    }

    for(const oh of this.opHours){
      const i = oh.day
      const data = oh.openingHour + '-' + oh.closingHour
      if(formattedOpHours[i][0] === closedString){
        formattedOpHours[i][0] = data
      }
      else{
        formattedOpHours[i][formattedOpHours[i].length] = data
      }
    }

    const maxOpHours = Math.max(...formattedOpHours.map(x => x.length))

    const weekDays = [
      'Domenica',
      'Lunedì',
      'Martedì',
      'Mercoledì',
      'Giovedì',
      'Venerdì',
      'Sabato',
    ]

    return{
      formattedOpHours,
      weekDays,
      maxOpHours,
      horizontal: true,
    }

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
mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      const componentWidth = document.getElementById('wrapper').clientWidth
      // const computedStyle = window.getComputedStyle(document.documentElement)

      this.horizontal = componentWidth > 1180
    },
  },
 
}
</script>

<style scoped>

#wrapper{
width: 100% !important;
max-width: 100% !important;
}

.long-card-container {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 92%;
}
.long-card {
  width: 100%;
  aspect-ratio: 8/5;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 5px 5px 10px 5px var(--green);
}
.long-card:hover {
  box-shadow: 5px 5px 10px 5px var(--green);
}

#title {
  text-align: center;
  width: 90%;
}

#description {
  flex: 1;
  width: 90%;
  word-wrap: break-word;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.col-md-7 {
  margin-bottom: 70px;
}
</style>
