<template>
  <div id="wrapper">

      <img 
        id="image" 
        :src="imageUrl" 
        :alt="imageCaption" 
        role="link"
        @click="$emit('onSeeDetails')"
        />
      <!-- Print the Image-->

      <h2 id="title">{{ title }}</h2>
      <!-- Print the title-->
     
      <p id="description">{{ description }}</p>
      <!-- Print the description-->

      <button
        
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
}
</script>

<style scoped>

#wrapper {
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
  box-shadow: 5px 5px 10px 3px var(--green);
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

#image:hover, #image:focus { 
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
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);  /*senza questo funziona uguale, ma da un warning perchè la mask-image non è definita*/
}
.button-style {
  color: var(--green);
  background-color: var(--blue);
  border: 2px solid var(--green);
  border-radius: 5px;
  padding: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
}
.button-style:hover, .button-style:focus {
  color: var(--white);
  cursor: pointer;
}

</style>
