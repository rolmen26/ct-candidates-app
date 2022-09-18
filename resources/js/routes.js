const Home = () => import("./components/Home.vue");

//import tasks component
const Create = () => import("./components/task/Create.vue");
const Edit = () => import("./components/task/Edit.vue");
const List = () => import("./components/task/List.vue");
const Login = () => import("./components/auth/Login.vue");
const Register = () => import("./components/auth/Register.vue");

export const routes = [
    { path: "/", component: Home, name: "home" },
    { path: "/create", component: Create, name: "create" },
    { path: "/edit/:id", component: Edit, name: "edit" },
    { path: "/list", component: List, name: "list" },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" }
];
