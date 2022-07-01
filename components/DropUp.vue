<template>
  <div class="dropup">
      <a id="up-button" title="Torna all'inizio" href="#" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>
</template>

<script>

export default {
  name: 'DropUp',
}
</script>

<style scoped>
 #up-button {
  padding: 5px 10px 5px 7px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: var(--blue);
  float: right;
  color: var(--aqua);
  border-radius: 10px;
}

#up-button:hover {
  color: var(--white);
}

</style>