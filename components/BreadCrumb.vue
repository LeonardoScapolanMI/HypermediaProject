<template>
  <ol
    typeof="BreadcrumbList"
    class="breadcrumb"
  >
    <li property="itemListElement" typeof="ListItem">
      <a class="old" property="item" typeof="WebPage" href="/">
        <span property="name" id="home">HOME</span>
      </a>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <a v-if="crumb.path === ''" class="new" property="item" typeof="WebPage">{{ crumb.title }}</a>
      <a v-else-if="crumb.path === '#'" class="new" property="item" typeof="WebPage">{{ crumb.title }}</a>
      <a v-else class="old" property="item" typeof="WebPage" :href="crumb.path">{{ crumb.title }} </a>
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
 .breadcrumb {
    background-color: var(--beige);
    margin: 20px;
  }

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
.new {
  text-decoration: none;
  cursor: default;
  font-weight: bold;
}

.old {
  color: var(--green);
  padding: 2px;
}

.old:hover {
  background-color: var(--green);
  color: var(--white);
  text-decoration: none;
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