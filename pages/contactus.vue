<template>
  <div>
    <the-header />
    <div class="container marketing">
      <div>
        <br />
        <br />

        <div class="row">
          <div class="col-md-12 order-md-1">
            <h3 class="mb-3">Richiesta Informazioni</h3>
            <hr />
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First Name</label>
                  <input
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
                <label for="address">Information Request</label>
                <textarea
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
    <the-footer />
  </div>
</template>

<script>
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
}
</script>

<style>
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
  padding-top: 3rem;
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


