<template>
  <div>
    <nav class="navbar navbar-expand-md">
      <div class="navbar-collapse">
        <ul>
          <li v-for="(navItem, navItemIndex) of footerList" :key="`navItem${navItemIndex}`">
            <nuxt-link :to="navItem.path" class="nav-link">
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      footerList: [
        {
          name: 'ABOUT US',
          path: '/aboutus',
        },
        {
          name: 'CONTACT US',
          path: '/contactUs',
        },
      ],
    }
  },
  head() {
    return {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
            integrity:
              'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
            crossorigin: 'anonymous',
          },
        ],
        script: [
          {
            src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
            integrity:
              'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
            integrity:
              'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
            crossorigin: 'anonymous',
          },
          {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
            integrity:
              'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
            crossorigin: 'anonymous',
          },
        ],
      }
    }
}
</script>

<style>
nav {
      background-color: #618985;
    font-family: Georgia;
    font-weight: bold;
    
  }

.footer {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #618985;
  font-family: Georgia;
  font-weight: bold;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  padding: 5px 5px;
}

nav a {
  
  padding: 15px 10px;
  color: white;
  text-decoration: none;
}

nav a:hover, nav a:focus {
  border-bottom-left-radius: 20px;
  background-color: rgba(198, 239, 235, 0.4);
  transition: 0.2s;
  color: #414535;
  text-decoration: none;
}
</style>