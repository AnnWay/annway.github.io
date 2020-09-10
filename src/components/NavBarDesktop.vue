<template>
  <div class="navBarDesktop">
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
  name: "NavBarDesktop"
}
</script>

<style scoped>
.navBarDesktop {
  margin-right: 5%;
  color: var(--bglinkColor);
  background-color: var(--bgColor);
}

.navBarDesktop i {
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 1em;
}

@media screen and (max-width: 600px) {
  .navBarDesktop {
	  display: none;
  }
}
</style>