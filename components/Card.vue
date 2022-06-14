<template>
  <div class="wrapper">
    <div class="Item">
      <div class="ImgWrap">
        <img id="image" :src="imageUrl" :alt="imageCaption" />
      </div>

      <div id="Description" class="text-center">
        <h2>{{ title }}</h2>
        <p
          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap"
        >
          {{ description }}
        </p>
      </div>
      <div
        id="see-details"
        class="btn btn-primary btn-orange"
        @click="$emit('onSeeDetails')"
      >
        Maggiori Informazioni
      </div>
    </div>
    <br />
  </div>
</template>

<script>

export default {
  name: 'ItemCard',
  props: {
    
    imageUrl: { type: String, required: true },
    imageCaption: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
   
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
}
</script>

<style scoped>
h2 {
  margin: 0.3em;
}

#see-details {
  color: white;
  background-color: var(--dark-blue);
}

#see-details:hover {
  background-color: var(--brown);
  transition: 0.2s;
}

.Btn {
  background: #20a8d8;
  border: none;
  border-radius: 3px;
  color: #fff;
  padding: 1em;
}

.wrapper {
  border-radius: 25px;
  border: 2px solid var(--blue);
}

.Item {
  display: flex;
  flex: 0 1 180px;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  padding: 5px;
  border: 1px transparent;
  max-height: 23em;
  min-height: 23em;
}

.ImgWrap {
  position: relative;
  margin: 0.5em;
  flex: 0 1 180px;

  display: block;
  overflow: hidden;
}

img {
  height: 100% !important;
  max-width: 90% !important;
}

#Description {
  flex: 1;
  padding: 10px 0;
  font-size: 0.9em;
  word-wrap: break-word;
  max-width: 90%;
}
</style>
