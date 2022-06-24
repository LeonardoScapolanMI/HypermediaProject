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
        <div v-if="state === ListState.Error" class="text-center">
          {{ errorText }}
        </div>
        <div v-else-if="itemList.length <= 0" class="text-center">
          {{ noItemsPlaceholder }}
        </div>
        <template v-else>
          <div class="row justify-content-between">
            <div
              v-for="(item, itemIndex) of itemList"
              :key="`poi-index-${itemIndex}`"
              class="col col-md-6 col-lg-4 card-container"
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
    nBaseLoadedItems: { type: Number, default: 12 },
    nItemsLoadedMore: { type: Number, default: 6 },
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

.no-content {
  color: #414535 !important;
  background-color: transparent !important;
  border-color: transparent !important;
  pointer-events: none;
}

.content {
  margin: auto;
  width: 92% !important;
}

.card-container {
  margin: auto;
  margin-bottom: 20px;
}

#load-more {
  color: var(--blue);
  background-color: var(--white);
  border: 1px solid var(--aqua);
  padding: 5px 50px 5px 50px;
  border-radius: 10px;
  font-size: large;
  font-weight: bold;
  margin: 20px;
}

#load-more:hover {
  color: var(--aqua);
}

.loading-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
