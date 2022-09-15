const Home = () => import("./components/Home.vue");

//import tasks component
const Create = () => import("./components/task/Create.vue");
const Edit = () => import("./components/task/Edit.vue");
const Show = () => import("./components/task/Show.vue");

export const routes = [
    { path: "/", component: Home, name: "home" },
    { path: "/create", component: Create, name: "create" },
    { path: "/edit/:id", component: Edit, name: "edit" },
    { path: "/show/:id", component: Show, name: "show" },
];
