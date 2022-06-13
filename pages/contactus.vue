<template>
  <div>

    <!-- TITLE -->

    <div class="titolo">
      <h1 class="text-center">CONTATTACI</h1>  
    </div>

    <!-- FORM -->

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
                  <label for="firstName">Nome</label>
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
                  <div class="invalid-feedback">Nome non valido.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Cognome</label>
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
                  <div class="invalid-feedback">Cognome non valido.</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">
                  Email
                  <span class="text-muted">(Facoltativo)</span>
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
                >Per favore inserire un indirizzo email valido.</div>
              </div>

              <div class="mb-3">
                <label for="message">Riquiesta di informazioni</label>
                <textarea
                name = "message"
                  v-model="text"
                  class="form-control"
                  id="request"
                  rows="10"
                  placeholder
                  required
                ></textarea>
                <div class="invalid-feedback">Per favore inserire una riquiesta di informazioni valida.</div>
              </div>

              <hr class="mb-4" />
              <button class="btn btn-lg btn-block" type="submit" id="submit">Contattaci</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <br />
  <br />
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

input, textarea {
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


