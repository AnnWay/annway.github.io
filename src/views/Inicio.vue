<template>
  <div>
    <LogoAnimada />
    <Bloco />
    <Bloco />
    <Bloco />
    <Bloco />
  </div>
</template>

<script>
import Bloco from "../components/Bloco";
import LogoAnimada from "../components/LogoAnimada";

export default {
  name: "Inicio",
  components: {
    Bloco,
    LogoAnimada
  }
};
</script>

<style scoped>
.userPhoto {
  width: 120px;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 10px;

  border: solid var(--accentColor) 2px;
  border-radius: 50%;

  animation: preencher 0.5s ease forwards 6s;
}

#logoAnimacao path:nth-child(1) {
  stroke-dasharray: 985px;
  stroke-dashoffset: 985px;
  animation: animacao 6s ease forwards;
}

@keyframes animacao {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes preencher {
  from {
    fill: transparent;
  }
  to {
    fill: var(--accentColor);
  }
}

#nomePage {
  display: block;

  font-size: 1.3rem;
  font-weight: 600;
  font-family: Asap;
  line-height: 1.25;
  width: 100%;

  color: var(--accentColor);
}

#userName {
  font-size: 1rem;
  font-weight: 600;
  font-family: Asap;
  line-height: 1.25;
  width: 100%;
  text-decoration: none;

  color: var(--textColor2);
}
</style>