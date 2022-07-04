<template>
  <div>

    <!-- Insert breadcrumb with calling the component -->
    <BreadCrumb :crumbs='bc'/>

    <!-- Insert the title --> 
    <div class="page-title">
      <h1>CONTATTACI</h1>  
    </div>

    <!-- Insert information request form -->
    <div class="container marketing">
      <div class="form" >
        <div>
          <div class="col-md-12 order-md-1">
            <h2 class="mb-3">Richiesta Informazioni</h2>
            <hr />
            <form id="contactusform" class="needs-validation" novalidate >
            <!-- <form class="needs-validation" action="/api/usermessage" method="POST" novalidate>  -->
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Nome</label>
                  <input
                    id="firstName"
                    
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
                  id="message"
                 
                  name = "message"
                  class="form-control"
                  rows="10"
                  placeholder
                  required
                  role="textbox"
                  form="contactusform"
                 
                ></textarea>
                <div class="invalid-feedback">Per favore inserire una richiesta di informazioni valida.</div>
              </div> 

              <button id="submit" type="submit">Invia</button>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
  name: 'ContactUs',
  components: { BreadCrumb },
  data() {
    const bc =[]
    bc.push({ title:'Contattaci', path:'' })
    return {
      bc,
    }
  },
  head() {
    return {
      title: 'Contattaci',
      meta: [
        {
          hid:'description',
          name:'description',
          content:'In questa pagina è possibile contattare i moderatori del sito per qualsiasi tipo di richiesta o informazione.',
        },
      ],
    }
  },
  }
</script>

<style>

.form {
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: min(850px, 96%);
  margin: auto;
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
  padding: 5px 40px 5px 40px;
  margin-bottom: 50px;
  margin-right: 10px;
  border-radius: 10px;
  font-size: large;
  font-weight: bold;
  font-size: 2vmin;
  
}

#submit:hover {
  color: var(--green);
}

</style>


