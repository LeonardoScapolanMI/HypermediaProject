<template>
  <div class="flex-wrapper">
    <Nuxt class="page-content"/>
  </div>
</template>


<style>

.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}

.page-content {
  flex : 1;
}

</style>