<template>
  <div id="wrapper">

      <img 
        id="image" 
        :src="imageUrl" 
        :alt="imageCaption" 
        @click="$emit('onSeeDetails')"
        />
      <!-- Print the Image-->
      <h2 id="title">{{ title }}</h2>
      <!-- Print the title-->
      <p id="description">{{ description }}</p>
      <!-- Print the description-->
      <button
        id="see-details"
        class="button-style"
        @click="$emit('onSeeDetails')"
      >
        Maggiori Informazioni
      </button>
      <!-- button for more information-->

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

#wrapper{
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  aspect-ratio: 4/5;
  max-height: 70vh;
  border-radius: 25px;
  border: 2px solid var(--blue);
  margin-bottom: 50px;
  margin-bottom: 50px;
  background-color: var(--white);
  color: var(--green);
  max-width: 80%;
}

#image {
  border-radius: 20px;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  width: 92%;
  aspect-ratio: 16/9;
  display: block;
  overflow: hidden;
  border: 1.5px solid var(--green);
}

#image:hover { 
  border: 2px solid var(--green);
  cursor: pointer;
}

#title {
  text-align: center;
  width: 90%;
  cursor: default;
}

#description {
  flex: 1;
  width: 90%;
  word-wrap: break-word;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
  cursor: default;
  text-align: center;
}

#see-details {
  margin-top: 3%;
  margin-bottom: 3%;
}
.button-style{
  color: var(--green);
  background-color: var(--blue);
  border: 2px solid var(--green);
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.button-style:hover {
  color: var(--white);
  transition: 0.25s;
  cursor: pointer;
}

</style>
