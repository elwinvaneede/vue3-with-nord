import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SettingsView.vue"),
      meta: {
        title: "Settings",
      },
    },
  ],
});

export default router;
