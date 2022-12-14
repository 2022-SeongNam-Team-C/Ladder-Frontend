import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("@/views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/SignUp.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import("@/views/History.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
