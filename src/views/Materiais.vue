<template>
  <div>
    <div class="content">
      <div class="block">
        <Bloco />
        <Bloco />
        <Bloco />
        <Bloco />
      </div>
    </div>
  </div>
</template>

<script>
import Bloco from "../components/Bloco";

export default {
  name: "Materiais",
  components: {
    Bloco
  }
};
</script>

<style scoped></style>
