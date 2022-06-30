<template>
  <div class="flex-wrapper">
    <TheHeader />
    <Nuxt class="page-content"/>
    <TheFooter class="footer" />
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

/* .footer {
  margin-top: auto;
} */

</style>