import { createRouter, createWebHistory } from "vue-router";

// Ленивая загрузка компонентов
const MainPage = () => import("../components/views/MainPage.vue");
const InfoPage = () => import("../components/views/InfoPage.vue");

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/info",
    name: "InfoPage",
    component: InfoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
