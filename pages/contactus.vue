<template>
  <div class="height">

    <!-- BREADCRUMB -->

    <BreadCrumb title="Contattaci"/>

    <!-- TITLE -->

    <div class="page-title">
      <h1>CONTATTACI</h1>  
    </div>

    <!-- FORM -->

    <div class="form">
    <div class="container marketing">
      <div>
          <div class="col-md-12 order-md-1">
            <h3 class="mb-3">Richiesta Informazioni</h3>
            <hr />
            <form class="needs-validation" action="/api/usermessage" method="POST" novalidate >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Nome</label>
                  <input
                    id="firstName"
                    v-model="name"
                    name = "firstName"
                    type="text"
                    class="form-control"
                    placeholder
                    value
                    required
                  />
                  <div class="invalid-feedback">Il nome inserito non &eacute; non valido.</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Cognome</label>
                  <input
                    id="lastName"
                    v-model="surname"
                    name = "lastName"
                    type="text"
                    class="form-control"
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
                  id="email"
                  v-model="email"
                  name = "email"
                  type="email"
                  class="form-control"
                  placeholder="utente@gmail.com"
                />
                <div
                  class="invalid-feedback"
                >Per favore inserire un indirizzo email valido.</div>
              </div>

              <div class="mb-3">
                <label for="message">Richiesta di informazioni</label>
                <textarea
                  id="request"
                  v-model="text"
                  name = "message"
                  class="form-control"
                  rows="10"
                  placeholder
                  required
                ></textarea>
                <div class="invalid-feedback">Per favore inserire una richiesta di informazioni valida.</div>
              </div> 

              <button id="submit" class="btn" type="submit">Invia</button>
            
            </form>
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

#submit {
  color: var(--white);
  background-color: var(--brown);
  border: 1px solid var(--green);
  float: right;
  padding: 5px 50px 5px 50px;
  margin-bottom: 30px;
  margin-right: 10px;
  border-radius: 10px;
  font-size: large;
  font-weight: bold;
}

#submit:hover {
  color: var(--green);
}

</style>


