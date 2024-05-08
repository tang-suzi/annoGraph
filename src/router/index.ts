import { createWebHistory, createRouter } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("./../components/Layout/index.vue"),
      children: [{
        name: "home",
        path: "/home",
        component: () => import("../views/Home.vue"),
      }, {
        name: "vueBasic",
        path: "/vueBasic",
        component: () => import("../views/VueBasic.vue")
      }, {
        name: 'pinia',
        path: '/pinia',
        children: [
          {
            name: 'piniaBasic',
            path: '/piniaBasic',
            component: () => import("./../views/Pinia/index.vue"),
          }
        ]
      }, {
        name: 'modules',
        path: '/modules',
        children: [
          {
            name: 'annoGraph',
            path: '/annoGraph',
            component: () => import('./../views/modules/annoGraph/index.vue')
          }
        ]
      }]
    },
  ],
});
