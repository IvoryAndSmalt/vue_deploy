import Vue from "vue";
import VueRouter from "vue-router";
import CSStagram from "../views/CSStagram.vue";
import NewPost from "../views/NewPost.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "accueil",
    meta: {
      title: "ouioui - Accueil"
    },
    component: CSStagram
  },
  {
    path: "/newpost",
    name: "créer",
    meta: {
      title: "ouioui - Créer"
    },
    component: NewPost
  },
  {
    path: "/profile",
    name: "profil",
    meta: {
      title: "ouioui - Profil"
    },
    component: Profile
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

const DEFAULT_TITLE = "Oui Oui";
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;