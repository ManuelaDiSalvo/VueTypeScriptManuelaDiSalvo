import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import haveRoleGuard from "./role-guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    beforeEnter: [haveRoleGuard],
    
    component: () =>
      import( "../views/AboutView.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import("../views/DetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem("userRole");
      return isNaN(id) ? { id: null, userRole } : { id, userRole };
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: import( "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;