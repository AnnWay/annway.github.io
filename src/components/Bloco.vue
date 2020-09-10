<template>
  <div>BLOCO</div>
</template>

<script>
export default {
  name: "Bloco"
};
</script>

<style scoped>
div {
  display: block;

  text-decoration: none;
  font-size: 16px;

  padding: 28px 2px;
  margin: 5px;

  color: var(--bgColor);
  background-color: var(--bglinkColor);
  border: solid var(--bglinkColor) 2px;
  border-radius: 6px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);

  transition: all 0.8s cubic-bezier(0.08, 0.59, 0.29, 0.99);
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  align-content: center;
}

div:hover {
  font-size: 16px;

  padding: 28px 2px;

  color: var(--bglinkColor);
  background-color: var(--bgColor);

  transition: all 0.8s cubic-bezier(0.08, 0.59, 0.29, 0.99);
}
</style>
