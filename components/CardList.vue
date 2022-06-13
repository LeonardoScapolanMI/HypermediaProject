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
    <loading-icon
      v-if="state === ListState.InitialLoading"
      class="loading-icon"
    />
    <template v-else>
      <div class="content">
        <div v-if="state === ListState.Error" class="text-center">{{errorText}}</div>
        <div v-else-if="itemList.length <= 0" class="text-center">{{noItemsPlaceholder}}</div>
        <template v-else>
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

          <div id="bottone" class="text-center">
            <button
              v-if="state === ListState.LoadedNotFinished"
              id="load-more"
              @click="loadMore()"
            >
              CARICA ALTRI
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
    nBaseLoadedItems: { type: Number, default: 9 },
    nItemsLoadedMore: { type: Number, default: 3 },
    noItemsPlaceholder: { type: String, default: 'Non ci sono oggetti' },
    errorText: { type: String, default: 'Impossibile carcicare gli oggetti' },
  },
  data: () => ({
    ListState,
    itemList: [],
    state: ListState.InitialLoading,
  }),
  async fetch() {
    try {
      this.state = ListState.InitialLoading

      const reqBody = {
        params: {
          itemCount: this.nBaseLoadedItems,
        },
      }

      const { data } = await this.$axios.get(this.endpoint, reqBody)

      this.itemList = data.data

      this.state = data.isFinished
          ? ListState.LoadedFinished
          : ListState.LoadedNotFinished

    } catch (e) {
      this.state = ListState.Error
    }
  },
  fetchOnServer: false, // too see if it's a problem for crawlers
  methods: {
    async loadMore() {
      try {
        this.state = ListState.MoreLoading

        const itemShown = this.itemList.length

        const reqBody = {
          params: {
            startingIndex: itemShown,
            itemCount: this.nItemsLoadedMore,
          },
        }

        const { data } = await this.$axios.get(this.endpoint, reqBody)
        for (const d of data.data) this.itemList.push(d)

        this.state = data.isFinished
          ? ListState.LoadedFinished
          : ListState.LoadedNotFinished

      } catch (e) {
        this.state = ListState.Error
      }
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
