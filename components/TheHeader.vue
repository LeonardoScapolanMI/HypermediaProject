<template>

<nav class="navbar navbar-expand-lg">

    <li id="icon"><a href="#" id="logo"><img v-bind:src="../HTML+CSS/Immagini/firenze.png" alt="HOME"/><span class="sr-only">(current)</span></a></li>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="(navItem, navItemIndex) of headerList" :key="`navItem${navItemIndex}`">
        <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
          </li>
            </ul>
    </div>

 
</template>

<style scoped>

  nav {
    background-color: #618985;
    font-family: Georgia;
    font-weight: bold;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    float: left;
    padding: 5px 5px;
    list-style-type: none;
  }

  #logo {
    padding: 5px 0px;
    border-bottom-left-radius: 20px;
    background-color: rgba(198, 239, 235, 0.4);
  }

  #icon {
    border: 0;
    width: 100px;
  }

   a {
    display: block;
    padding: 25px 20px;
    color: white;
    text-decoration: none;
  }

  a:hover, a:focus{
    border-bottom-left-radius: 20px;
    background-color: rgba(198, 239, 235, 0.4);
    transition: 0.2s;
    color: #414535;
    text-decoration: none;
  }

.navbar-toggler {
    background-color: rgba(198, 239, 235, 0.4);
  }

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(65, 69, 53)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
</style>

<script>

export default {
  name: 'TheHeader',
  data() {
    return {
      image: logo,
        
      headerList: [
        {
          name: 'EVENTS',
          path: '/',
        },
        {
          name: 'POINT OF INTERESTS',
          path: '/poi',
        },
        {
          name: 'ITINERARIES',
          path: '/itineraries',
          Image
        },
        {
          name: 'SERVICES',
          path: '/services',
        },
        {
          name: 'THE TOWN',
          path: '/the town',
        },
        
      ],
    }
  },
}

import logo from "../HTML+CSS/Immagini/firenze.png";

</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
