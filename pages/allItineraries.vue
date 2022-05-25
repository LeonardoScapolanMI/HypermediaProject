<template>
  <div>
    <the-header />

    <the-footer />
  </div>
</template>

<script>
const axios= require('axios').default;
export default {

  name: 'ContactUs',

  data() {
    return {
      name: '',
      surname: '',
      email: '',
      text: '',
    }
  },
  methods: {

       submit()
          { axios.post('/usermessage', {
            firstName :this.name,
            lastName : this.surname,
            email: this.email,
            message: this.text,
          })

      }

  } }
</script>