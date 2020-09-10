import Vue from "vue";
import Router from "vue-router";
import Inicio from "./views/Inicio.vue";
import Materiais from "./views/Materiais.vue";
import Links from "./views/Links.vue";
import Sobre from "./views/Sobre.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio
    },
    {
      path: "/materiais",
      component: Materiais
    },
    {
      path: "/links",
      component: Links
    },
    {
      path: "/sobre",
      component: Sobre
    }
  ]
});
