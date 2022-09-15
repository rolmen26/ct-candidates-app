const Home = () => import("./components/Home.vue");

//import tasks component
const Create = () => import("./components/task/Create.vue");
const Edit = () => import("./components/task/Edit.vue");
const List = () => import("./components/task/List.vue");

export const routes = [
    { path: "/", component: Home, name: "home" },
    { path: "/create", component: Create, name: "create" },
    { path: "/edit/:id", component: Edit, name: "edit" },
    { path: "/list/", component: List, name: "list" },
];
