<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <nuxt-link id="logo" to="/" tabindex="0">
   
      <img id="icon" src="/images/firenze.png" alt="HOME" />
    
    </nuxt-link>

    <button tabindex="0"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target=".navbar-collapse"
      title="estendi/comprimi barra di navigazione"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="collapsibleNavbar" class="navbar-collapse collapse">
      <ul class="navbar-nav">
        <li v-for="navItem of headerList" :key="navItem.name" class="nav-item">
          <nuxt-link :to="navItem.path">{{ navItem.name }}</nuxt-link>
        </li>
      </ul>
      <!-- Print the items of the headerList -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'EVENTI',
          path: '/alleventgroupings',
        },
        {
          name: 'PUNTI DI INTERESSE',
          path: '/allpois',
        },
        {
          name: 'ITINERARI',
          path: '/allitineraries',
        },
        {
          name: 'SERVIZI',
          path: '/allservicetypes',
        },
        {
          name: 'LA CITTÀ',
          path: '/thetown',
        },
      ],
    }
  },
}
</script>

<style scoped>

nav {
  background-color: var(--aqua);
  font-family: Georgia;
  font-weight: bold;
}

nav ul {
  margin: 0;
  padding: 0;
}

nav li {
  list-style-type: none;
}

#logo {
  padding: 5px 0px;
  margin-left: 5px;
  margin-right: 5px;
  border-bottom-left-radius: 20px;
  background-color: var(--vanish);
}

#icon {
  border: 0;
  width: 90px;
  height: 80px;
}

a {
  display: block;
  padding: 22px 10px;
  color: var(--white);
  text-decoration: none;
}

a:hover, a:focus {
  border-bottom-left-radius: 20px;
  background-color: var(--vanish);
  color: var(--green);
  text-decoration: none;
}

.navbar-toggler {
  background-color: var(--vanish);
  margin-right: 10px;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(65, 69, 53)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.img {
  width:100%;
  padding:0;

}

</style>
