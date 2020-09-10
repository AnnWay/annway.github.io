<template>
  <div>
   <Logo />
    <p>O objetivo desta página é auxiliar estudantes da Educação Básica, em especial, os que irão participar do #ENEM2020 e/ou querem melhorar sua aprendizagem em Matemática.</p>
    <p> Coordenado pela professora Enne Karol, contando ainda com a colaboração dos professores orientadores Francisco Medeiros, do Campus Natal - Central, e Adriana Lima, do Centro Universitário de Salvador (UNICEUSA). O projeto conta com três linhas de atuação, que são: 
      <ul>
        <li>cursos desenvolvidos de maneira online com conteúdos relacionados à matemática elementar e ao ENEM; </li>
        <li>uma página no Instagram chamada @monitoriaannway, que conta com lives, notícias e postagens relacionadas ao conteúdo matemático; e </li>
        <li>relações da matemática básica com o ensino de química.</li>
      </ul>
      </p>
    <p>O objetivo desta página é auxiliar estudantes da Educação Básica, em especial, os que irão participar do #ENEM2020 e/ou querem melhorar sua aprendizagem em Matemática.</p>
    <p> Coordenado pela professora Enne Karol, contando ainda com a colaboração dos professores orientadores Francisco Medeiros, do Campus Natal - Central, e Adriana Lima, do Centro Universitário de Salvador (UNICEUSA). O projeto conta com três linhas de atuação, que são: 
      <ul>
        <li>cursos desenvolvidos de maneira online com conteúdos relacionados à matemática elementar e ao ENEM; </li>
        <li>uma página no Instagram chamada @monitoriaannway, que conta com lives, notícias e postagens relacionadas ao conteúdo matemático; e </li>
        <li>relações da matemática básica com o ensino de química.</li>
      </ul>
      </p>
  </div>
</template>

<script>
import Logo from "../components/Logo";

export default {
  name: "Sobre",
  components:{
    Logo
  }
};
</script>

<style scoped>

.userPhoto {
  width: 120px;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 10px;
  fill: var(--accentColor);
  border: solid var(--accentColor) 2px;
  border-radius: 50%;
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

p {
  /* margin-top: 50px; */
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
  font-size: 14px;
}
</style>
