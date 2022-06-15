<template>
  <div>

    <!-- TITLE -->

    <div class="title">
      <h1 class="text-center">CONTATTACI</h1>  
    </div>

    <!-- FORM -->

    <div class="form">
    <div class="container marketing">
      <div class="title">
          <div class="col-md-12 order-md-1">
            <h3 class="mb-3">Richiesta Informazioni</h3>
            <hr class="line" />
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
                  <div class="invalid-feedback">Il nome inserito non &eacute; non valido.</div>
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
                  <div class="invalid-feedback">Il cognome inserito non &eacute; non valido.</div>
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
                  placeholder="utente@gmail.com"
                />
                <div
                  class="invalid-feedback"
                >Per favore inserire un indirizzo email valido.</div>
              </div>

              <div class="mb-3">
                <label for="message">Richiesta di informazioni</label>
                <textarea
                name = "message"
                  v-model="text"
                  class="form-control"
                  id="request"
                  rows="10"
                  placeholder
                  required
                ></textarea>
                <div class="invalid-feedback">Per favore inserire una richiesta di informazioni valida.</div>
              </div>
              
            </form>
              
            <div class="row">
              <div class="col-md-9"></div>
              <div class="col-md-3"> 
              <button class="btn btn-lg btn-block" type="submit" id="submit">Contattaci</button>
              </div>
             </div>
            
          </div>
        </div>
      </div>
    </div>
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

.container {
  max-width: 960px;
}

.form {
  margin-top: 30px;
  margin-bottom: 30px;
}

h3 {
  font-weight: bold;
  text-align: center;
}

input, textarea {
  padding: 20px;
  margin: 5px;
}

.line {
  background-color: var(--light-blue);
}

#submit {
  color: white;
  background-color: var(--dark-blue);
  float: right;
}

#submit:hover {
  background-color: var(--brown);
  transition: 0.2s;
}

</style>


