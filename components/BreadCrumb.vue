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
      <a property="item" typeof="WebPage" :href="crumb.path">
        {{ crumb.title }}  
      </a>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
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
li a.nuxt-link-exact-active.nuxt-link-active {
  text-decoration: none;
  cursor: default;
}

a {
  color: var(--green);
}

a:hover {
  color: var(--aqua);
}

 .breadcrumb {
    background-color: var(--beige);
    margin: 20px;
  }

  li:last-child:after {
  content: '';
  color:var(--green);
  }

  li:last-child a {
  content: '';
  color:var(--green);
  }

</style>