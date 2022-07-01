<template>
    <nav>
      <div>
        <ul class="footer">
          <li v-for="(navItem, navItemIndex) of footerList" :key="`navItem${navItemIndex}`">
            <nuxt-link :to="navItem.path" class="nav-link">{{ navItem.name }}</nuxt-link>
          </li><!-- Print the items of the footerList, in this case only contactus-->
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
}
</script>

<style>

.footer {
  list-style-type: none;
  margin: 0;
  float: right;
  padding-right: 10px;
}

nav {
    background-color: var(--aqua);
    font-family: Georgia;
    font-weight: bold;
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
  color: var(--green);
  text-decoration: none;
}

</style>