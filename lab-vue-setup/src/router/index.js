import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
const routes = [
  {
    path: "",
    name: "",
    component: HomeView,
  },
  {
    path: "/about",
    name: "/about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
