<template>
    <div>
        <the-header />
        <!-- TITOLO -->
        <div><br>
          <h1 class="text-center">{{name}}</h1> 
          <hr id="title">
          <h4 class="text-center">POINT OF INTEREST SECTION</h4> 
        </div><br><br>
        <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-6">
                    <p id="text">{{description}}</p><!-- TO FILL -->
            </div> <!-- col -->
            <div class="col-md-4">
                <div class="text-center">
                    <iframe id="map" :src="mapurl" ></iframe><!-- TO FILL -->
                </div> 
            </div> <!-- col -->
        </div> <!-- row -->
        <the-footer/>
    </div>
</template>

<script>
export default {
  name: 'punto-interesse',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('http://localhost:3000/api/poi' + id)
    return {
      name: data.name,
      description: data.description,
      images: data.Images,
      mapurl: data.mapURL,
    }
  },
  methods: {
    backToList() {
      this.$router.push('/list')
    },
  },
}
</script>
