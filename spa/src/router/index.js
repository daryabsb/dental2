import { createRouter, createWebHashHistory } from "vue-router";

// import { createWebHistory,  } from "vue-router";

// import HomeView from "@/views/HomeView.vue";
// import JobResultsView from "@/views/JobResultsView.vue";
// import JobView from "@/views/JobView.vue";

const routes = [{
    path: "/",
    name: "home",
    component: () =>
        import("@/views/HomeView.vue"),
},
{
    path: "/teams",
    name: "teams",
    component: () =>
        import( /* webpackChunkName: "teams" */ "@/views/TeamsView.vue"),
},
{
    path: "/jobs/results",
    name: "jobResults",
    component: () =>
        import( /* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue"),
    // component: JobResultsView,
    // component: () => import(/* webpackChunkName: "jobs" */ '@/views/JobResultsView.vue')
},
{
    path: "/jobs/results/:id",
    name: "jobListing",
    // component: JobView,
    component: () =>
        import( /* webpackChunkName: "jobs" */ '@/views/JobView.vue'),
},

];

const router = createRouter({
    history: createWebHashHistory("/"),
    // history: createWebHashHistory("/"),
    routes,
    scrollBehavior() {
        return { top: 0, left: 0, behavior: "smooth" }
    },
});

export default router;











// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/jobs',
//     name: 'jobs',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '@/views/JobResultsView.vue')
//   }
// ]

// const router = createRouter({
//   // history: createWebHistory(process.env.BASE_URL),
//   history: createWebHistory("/"),
//   routes
// })

// export default router