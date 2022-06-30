<!-- 
This component allows to visualize the list of previews in head of groups pages

PROPS:
endpoint - is the endpoint from which the information can be taken. The informations must be contained inside an array in the attribute named 'data' of the response object
    and must have attributes named 'id' (containing the id of the item), 'name' (a string), 'description' (a string) and 'images' (an array with at least one elemnt with 
    attributes named 'URL' (an image URL in the local folders), and 'caption' (a string))
detailsPageFolder - the folder inside which there's the teplate for the page that will visualize the details of the item with a certain 'id'
-->

<template>
  <div id="wrapper">
    <loading-icon
      v-if="state === ListState.InitialLoading"
      class="loading-icon"
    />
    <template v-else>
      <div class="content">
        <div v-if="state === ListState.Error" class="text-center">
          {{ errorText }}
        </div>
        <div v-else-if="itemList.length <= 0" class="text-center">
          {{ noItemsPlaceholder }}
        </div>
        <!-- the former divs are displayed only in case of error-->
        <template v-else>
          <div class="row justify-content-between">
            <div
              v-for="(item, itemIndex) of itemList"
              :key="`poi-index-${itemIndex}`"
              :class="'col' + colSize +' card-container'"
            >
              <card
                :image-url="item.images[0].URL"
                :image-caption="item.images[0].caption"
                :title="item.name"
                :description="item.description"
                @onSeeDetails="
                  $router.push('/' + detailsPageFolder + '/' + item.id)
                "
              /><!-- Print the cards-->
            </div>
            <div class="col" /> <!-- to ensure that elements on the last line are aligned left if they are less than 3 (or 2 depending on the responsive layout) -->
          </div>

          <div class="text-center">
            <button
              v-if="state === ListState.LoadedNotFinished"
              id="load-more"
              @click="loadMore()"
            >
              CARICA ALTRO
            </button>
            <loading-icon
              v-if="state === ListState.MoreLoading"
              class="loading-icon"
            />
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import LoadingIcon from '~/components/LoadingIcon.vue'

const ListState = Object.freeze({
  InitialLoading: Symbol('InitialLoading'),
  LoadedNotFinished: Symbol('LoadedNotFinished'),
  MoreLoading: Symbol('MoreLoading'),
  LoadedFinished: Symbol('LoadedFinished'),
  Error: Symbol('Error'),
})

export default {
  name: 'CardList',
  components: { Card, LoadingIcon },
  props: {
    endpoint: { type: String, required: true },
    detailsPageFolder: { type: String, required: true },
    nBaseLoadedItems: { type: Number, default: 12 }, // Base number of items loaded at the first request
    nItemsLoadedMore: { type: Number, default: 6 }, // Number of items loaded with the 'carica altri '
    noItemsPlaceholder: { type: String, default: 'Non ci sono oggetti' },// String placeholder if there are no elements returned 
    errorText: { type: String, default: 'Impossibile carcicare gli oggetti' },// String placeholder for errors
  },
  data: () => ({
    ListState,
    itemList: [],
    state: ListState.InitialLoading,
    colSize: '-12',
  }),
  async mounted() {
    try {
      this.state = ListState.InitialLoading

      this.onResize()
      window.addEventListener('resize', this.onResize)

      const reqBody = {
        params: {
          itemCount: this.nBaseLoadedItems,// load base item of 12 
        },
      }

      const { data } = await this.$axios.get(this.endpoint, reqBody)// execute the request to the given endpoint 

      this.itemList = data.data

      this.state = data.isFinished // Check on the status of the loaded item, is it finished?
        ? ListState.LoadedFinished
        : ListState.LoadedNotFinished
    } catch (e) {
      this.state = ListState.Error
    }
  },
  methods: {
    async loadMore() {// method for loading more items
      try {
        this.state = ListState.MoreLoading

        const itemShown = this.itemList.length 

        const reqBody = {// setting the params to give to the api method 
          params: {
            startingIndex: itemShown,
            itemCount: this.nItemsLoadedMore,
          },
        }

        const { data } = await this.$axios.get(this.endpoint, reqBody)
        for (const d of data.data) this.itemList.push(d)

        this.state = data.isFinished // Check on the status of the loaded item, is it finished?
          ? ListState.LoadedFinished
          : ListState.LoadedNotFinished
      } catch (e) {
        this.state = ListState.Error
      }
    },
    onResize() {

      const componentWidth = document.getElementById('wrapper').clientWidth
      const computedStyle = window.getComputedStyle(document.documentElement)

      if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-md'))) {
        this.colSize = '-12'
      } else if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-lg'))) {
        this.colSize = '-6'
      } else if (componentWidth <= parseFloat(computedStyle.getPropertyValue('--breakpoint-xxl'))) {
        this.colSize = '-4'
      } else {
        this.colSize = '-3'
      }
    },
  },
}
</script>

<style>

.no-content {
  color: #414535 !important;
  background-color: transparent !important;
  border-color: transparent !important;
  pointer-events: none;
}

.content {
  margin: auto;
  max-width: 86%;
  margin-bottom: 50px;
  margin-top: 100px;
}

.card-container {
  margin: auto;
}

#load-more {
  color: var(--green);
  background-color: var(--blue);
  border: 2px solid var(--green);
  padding: 5px 50px 5px 50px;
  border-radius: 10px;
  font-size: large;
  font-weight: bold;
  margin: 20px;
}

#load-more:hover {
  color: var(--white);
  cursor: pointer;
}

.loading-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
