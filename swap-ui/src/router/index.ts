import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("@/views/LandingPage.vue"),
  // },
  // {
  //   path: "/post",
  //   name: "post",
  //   component: () => import("@/components/Forms/NewJobForm/NewJobForm.vue"),
  // },
  // {
  //   path: "/jobs",
  //   name: "jobs",
  //   component: () => import("@/views/Jobs.vue"),
  // },
  // {
  //   path: "/newswaper",
  //   name: "newswaper",
  //   component: () => import("@/views/NewSwaper.vue"),
  // },
  // {
  //   path: "/signin",
  //   name: "signin",
  //   alias: "/login",
  //   component: () => import("@/components/Forms/AuthForm/AuthForm.vue"),
  //   meta: { requiresGuest: true },
  //   props: { component: "SignIn" },
  // },
  // {
  //   path: "/signup",
  //   name: "signup",
  //   component: () => import("@/components/Forms/AuthForm/AuthForm.vue"),
  //   meta: { requiresGuest: true },
  //   props: { component: "SignUp" },
  // },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   component: () => import("@/views/Profile.vue"),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: "/chat",
  //   name: "chat",
  //   component: () => import("@/components/Chat/Chat.vue"),
  // },
  {
    path: "*",
    component: () => import("./NotFoundComponent.vue"),
  },
];


export default routes;