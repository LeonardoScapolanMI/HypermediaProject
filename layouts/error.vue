<template>
  <div class="__nuxt-error-page">
      <div class="title">La pagina cercata non esiste</div>
      <hr>
      <p v-if="statusCode === 404" class="description">
        <a v-if="typeof $route === 'undefined'" class="error-link" href="/"></a>
        <NuxtLink v-else class="error-link" to="/">Torna alla HOME</NuxtLink>
      </p>
    </div>
</template>

<script>

export default {
  layout: 'empty',
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || 'Error'
    }
  },
  head () {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  },
}
</script>

<style>

.__nuxt-error-page {
  background: linear-gradient(var(--dark), var(--dark)), url("/images/home/welcome.jpg") no-repeat center ;
  background-size: cover;
}

.__nuxt-error-page .title {
  font-size: 30px;
  margin-top: 300px;
  padding: 0px;
  color: var(--green);
  background-color: var(--beige);
}

.__nuxt-error-page .description {
  background-color: var(--beige);
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.__nuxt-error-page a {
  color: var(--green);
  text-decoration: none;
}

.__nuxt-error-page hr {
  background-color: var(--green);
  margin: 0px;
}

</style>
