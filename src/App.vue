<template>
  <div id="app">
    <router-view></router-view>
    <Menu />
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
:root {
  --bgColor: #00012a;
  --accentColor: #ffffff;
  --desabColor: #90a6ab;
  --bglinkColor: #e7e7e7;
  --textColor1: #000000;
  --textColor2: #9a9aa8;
  --font: "Noto Sans", "Asap", Helvetica, sans-serif;
}

body {
  background-color: var(--bgColor);
  margin-top: 10px;
  margin-bottom: 25%;
  font-family: var(--font);
  color: var(--accentColor);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  text-align: center;
}

.header{
  margin-bottom: 35px;
}
</style>
