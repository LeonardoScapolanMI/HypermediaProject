<template>
    <nav >
      <div>
        <ul>
          <li v-for="(navItem, navItemIndex) of footerList" :key="`navItem${navItemIndex}`">
            <nuxt-link :to="navItem.path" class="nav-link">
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      footerList: [
        {
          name: 'CONTATTACI',
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
          {
            src: 'https://code.jquery.com/jquery-2.2.4.js',
            integrity:
              'sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=',
            crossorigin: 'anonymous',
          },
        ],
      }
    }
}
</script>

<style>

nav {
    background-color: var(--aqua);
    font-family: Georgia;
    font-weight: bold;
  }

nav ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}

nav li {
  padding: 5px;
  display: inline-block;

}

nav a {
  color: var(--white);
  text-decoration: none;
}

nav a:hover, nav a:focus {
  border-bottom-left-radius: 20px;
  background-color: var(--vanish);
  transition: 0.2s;
  color: var(--green);
  text-decoration: none;
}

</style>