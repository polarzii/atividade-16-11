import { createRouter, createWebHashHistory } from "vue-router";
import PaginaAgenda from "./pages/PaginaAgenda.vue";
import PaginaNovaEntrega from "./pages/PaginaNovaEntrega.vue";
import PaginaEntrega from "./pages/PaginaEntrega.vue";

const routes = [
  {
    path: "/",
    component: PaginaAgenda
  },
  {
    path: "/nova",
    component: PaginaNovaEntrega
  },
  {
    path: "/entrega/:id",
    component: PaginaEntrega
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;