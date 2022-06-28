<template>
  <ol
    typeof="BreadcrumbList"
    class="breadcrumb"
  >
    <li property="itemListElement" typeof="ListItem">
      <NLink property="item" typeof="WebPage" to="/">
        <span property="name">HOME</span>
      </NLink>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <NLink property="item" typeof="WebPage" :to="crumb.path">
        <span 
          v-if="$route.fullPath === crumb.path && title !== null ? title : crumb.title"
          property="name"
        >
        </span>
      </NLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
const titleCase = require('ap-style-title-case')
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>

<style scoped>

ol {
  list-style: none;
}

li {
  display: inline;
}

li:after {
  content: '»';
  display: inline;
  color: var(--green);
  padding: 5px;
}

li:last-child:after {
  content: '';
}
li a.nuxt-link-exact-active.nuxt-link-active {
  color: var(--green);
  text-decoration: none;
  cursor: default;
}

a {
  color: var(--vanish);
}

a:hover {
  color: var(--green);
  text-decoration: none;
}

 .breadcrumb {
    background-color: var(--beige);
    margin: 20px;
  }

</style>