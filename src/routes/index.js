import Admin from "../pages/admin";
import Home from "../pages/home";
import Login from "../pages/login";

const publicRouter = [
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/admin", component: Admin}
];

const privateRouter = [
    {path: "/admin", component: Admin}
]

export {publicRouter, privateRouter}