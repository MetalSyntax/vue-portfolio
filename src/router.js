import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import Achievements from "./views/Achievements.vue"

Vue.use(Router);

export default new Router({  
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        title: 'Home Page - Wonder Diaz Portfolio',
      }
    },
    {
      path: "/portfolio",
      component: Portfolio,
      meta: {
        title: 'Portfolio - Wonder Diaz Portfolio',
      }
    },
    {
      path: "/achievements",
      component: Achievements,
      meta: {
        title: 'Achievements - Wonder Diaz Portfolio',
      }
    }
  ]
});