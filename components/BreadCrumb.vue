<template>
  <ol
    class="breadcrumb"
  >
    <li>
      <a class="old" href="/"><span>HOME</span></a>
    </li>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
    >
      <span v-if="crumb.path === ''" class="new">{{ crumb.title }}</span>
      <span v-else-if="crumb.path === '#'" class="new">{{ crumb.title }}</span>
      <a v-else class="old" :href="crumb.path">{{ crumb.title }}</a>
    </li>
  </ol>
</template>

<script>

export default {
  name: 'BreadCrumb',
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

li:after {
  content:'»';
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
  }

</style>