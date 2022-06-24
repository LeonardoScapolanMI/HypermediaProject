<template>
  <div class="flex-wrapper">
    <TheHeader />
    <BreadCrumbs/>
    <Nuxt />
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

.footer {
  margin-top: auto;
}
</style>