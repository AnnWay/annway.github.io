<template>
  <div>
    <router-link to="/"
      ><i class="fas fa-home text-decoration-none"><br />Início</i></router-link
    >
    <router-link to="/materiais"
      ><i class="fas fa-book-open"><br />Materiais</i></router-link
    >
    <router-link to="/links"
      ><i class="fas fa-link"><br />Links</i></router-link
    >
    <router-link to="/sobre"
      ><i class="fas fa-exclamation-circle"><br />Sobre</i></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
div {
  position: fixed;
  bottom: 0;
  height: 4em;
  width: 100%;
  color: var(--bglinkColor);
  background-color: var(--bgColor);
  box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.5);
}

i {
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 1em;
}
.fas {
  /* color: var(--desabColor); */
}
.router-link-exact-active{
  color: var(--bglinkColor);
  
}

.router-link-active{
  /* color: aliceblue; */
}
</style>
