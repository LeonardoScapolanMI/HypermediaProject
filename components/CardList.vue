<!-- 
This component allows to visualize the list of previews in head of groups pages

PROPS:
endpoint - is the endpoint from which the information can be taken. The informations must be contained inside an array in the attribute named 'data' of the response object
    and must have attributes named 'id' (containing the id of the item), 'name' (a string), 'description' (a string) and 'images' (an array with at least one elemnt with 
    attributes named 'URL' (an image URL in the local folders), and 'caption' (a string))
detailsPageFolder - the folder inside which there's the teplate for the page that will visualize the details of the item with a certain 'id'
-->

<template>
  <div>
    <loading-icon v-if="isLoading" class="loading-icon"/>
    <div v-else>
      <div class="content">
        <div class="row">
          <div
            v-for="(item, itemIndex) of itemList"
            :key="`poi-index-${itemIndex}`"
            class="col-md-4"
          >
            <card
              :image-url="item.images[0].URL"
              :image-caption="item.images[0].caption"
              :title="item.name"
              :description="item.description"
              @onSeeDetails="
                $router.push('/' + detailsPageFolder + '/' + item.id)
              "
            />
          </div>
        </div>
      </div>

      <div id="bottone" class="text-center">
        <button v-if="!allLoaded" id="load-more" @click="loadMore()">
          LOAD MORE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import LoadingIcon from '~/components/LoadingIcon.vue'

const N_BASE_LOADED_ITEMS = 9
const N_ITEMS_LOADED_MORE = 3

export default {
  name: 'CardList',
  components: { Card, LoadingIcon },
  props: {
    endpoint: { type: String, required: true },
    detailsPageFolder: { type: String, required: true },
  },
  data: () => ({
    isLoading: true,
    itemList: [],
    allLoaded: false,
  }),
  async fetch() {
    const reqBody = {
      params: {
        itemCount: N_BASE_LOADED_ITEMS,
      },
    }

    const { data } = await this.$axios.get(this.endpoint, reqBody)

    this.itemList = data.data
    this.allLoaded = data.isFinished
    this.isLoading = false
  },
  methods: {
    async loadMore() {
      const itemShown = this.itemList.length

      const reqBody = {
        params: {
          startingIndex: itemShown,
          itemCount: N_ITEMS_LOADED_MORE,
        },
      }

      const { data } = await this.$axios.get(this.endpoint, reqBody)
      this.allLoaded = data.isFinished
      for (const d of data.data) this.itemList.push(d)
    },
  },
}
</script>

<style>
.content {
  padding: 2em;
}

#bottone {
  padding: 2em;
}

.no-content {
  color: #414535 !important;
  background-color: transparent !important;
  border-color: transparent !important;
  pointer-events: none;
}

#load-more:hover {
  color: white;
  transition: 0.2s;
  cursor: pointer;
}

#load-more {
  color: #414535;
  background-color: #96bbbb;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  border: 2px solid #414535;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 20px;
}

.loading-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
