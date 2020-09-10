<template>
  <div id="app">
    <NavBarDesktop />
    <Logo />
    <div class="container"></div>
    <router-view></router-view>
    <Menu />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import NavBarDesktop from "./components/NavBarDesktop";

export default {
  name: "App",
  components: {
    Menu,
    Logo,
    NavBarDesktop
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
  box-sizing: border-box;
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

.container {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
}
.header {
  grid-column: 1 / -1;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
}

.content {
  grid-column: 1 / -1;
  align-items: center;
  text-align: center;
}

.block {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-auto-rows: 100px;
}

</style>
