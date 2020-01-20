import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "product-list" */ "@/views/ProductList")
  }
];

const router = new VueRouter({
  routes
});

export default router;
