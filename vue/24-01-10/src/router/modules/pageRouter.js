
const pageRouter = {
    path: "/",
    name: "layout",
    redirect: "/main",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/main.vue"),
        },
        {
            path: "/reference",
            name: "reference",
            component: () => import("@/views/reference.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/login.vue"),
        },
        {
            path: "/classsample",
            name: "classsample",
            component: () => import("@/views/classsample.vue"),
        },
        {
            path: "/company",
            name: "company",
            component: () => import("@/views/company.vue"),
        }, 
        {
            path: "/SignChack",
            name: "SignChack",
            component: () => import("@/views/SignChack.vue"),
        },
        {
            path: "/SignUp",
            name: "SignUp",
            component: () => import("@/views/SignUp.vue"),
        },
    ],
};
export default pageRouter;