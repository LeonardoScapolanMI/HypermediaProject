<template>
  <div>
    <the-header />
    <div id="contactUs">
    <div class="container marketing">
      <div>
        <br />
        <br />

        <div class="row">
          <div class="col-md-12 order-md-1">
            <h3 class="mb-3">Richiesta Informazioni</h3>
            <hr />
            <form class="needs-validation" action="/api/usermessage" method="POST" novalidate >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First Name</label>
                  <input
                  name = "firstName"
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder
                    value
                    required
                  />
                  <div class="invalid-feedback">Valid first name is required.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last Name</label>
                  <input
                  name = "lastName"
                    v-model="surname"
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder
                    value
                    required
                  />
                  <div class="invalid-feedback">Valid last name is required.</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email
                  <span class="text-muted">(Optional)</span>
                </label>
                <input
                name = "email"
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="user@example.com"
                />
                <div
                  class="invalid-feedback"
                >Please enter a valid email address for shipping updates.</div>
              </div>

              <div class="mb-3">
                <label for="message">Information Request</label>
                <textarea
                name = "message"
                  v-model="text"
                  class="form-control"
                  id="request"
                  rows="10"
                  placeholder
                  required
                ></textarea>
                <div class="invalid-feedback">Please enter your information request.</div>
              </div>

              <hr class="mb-4" />
              <button class="btn btn-lg btn-block" type="submit" id="submit">Contact Us</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import Card from '~/components/Card.vue'
const axios= require('axios').default;
export default {

  name: 'ContactUs',
  components: { TheFooter, TheHeader, Card },
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

<style>
#contactUs {
    margin:0.5em;
}
.container {
  max-width: 960px;
}

h3 {
  font-weight: bold;
  text-align: center;
}

input,
textarea {
  padding: 20px;
  margin: 5px;
}

#submit {
  color: white;
  background-color: #414535;
}

#submit:hover {
  background-color: #c19875;
  transition: 0.2s;
}

.container {
  max-width: 960px;
}

body {
  
  color: #414535;
  font-family: Georgia;
}

h3 {
  font-weight: bold;
  text-align: center;
}

input,
textarea {
  padding: 20px;
  margin: 5px;
}

#submit {
  color: white;
  background-color: #414535;
}

#submit:hover {
  background-color: #c19875;
  transition: 0.2s;
}
</style>


