<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <a id="logo" href="/">
      <img id="icon" src="/images/firenze.jpg" alt="HOME" />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target=".navbar-collapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="collapsibleNavbar" class="navbar-collapse collapse">
      <ul class="navbar-nav">
        <li v-for="navItem of headerList" :key="navItem.name" class="nav-item">
          <a :href="navItem.path">{{ navItem.name }}</a>
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
}

nav a {
  display: block;
  padding: 22px 10px;
  color: var(--white);
  text-decoration: none;
}

nav a:hover,
nav a:focus {
  border-bottom-left-radius: 20px;
  background-color: var(--vanish);
  transition: 0.2s;
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
</style>
