const withPrefix = (prefix, routes) =>
    routes.map((route) => {
    route.path = prefix + route.path;
    return route;
});
const pageRouter = {
    path: "/",
    name: "layout",
    redirect: "/main",
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/bl_og.vue"),
        },
        ...withPrefix("/", [
            {
            path: "/",
            component: () => import("@/views/blog-details.vue"),
            },
            {
            name: "check_out",
            path: "/check_out",
            component: () => import("@/views/check_out.vue"),
            },
        ]),
        {
            path: "/contactCon",
            name: "contactCon",
            component: () => import("@/views/contactCon.vue"),
        },
        {
            path: "/HelloWorld",
            name: "HelloWorld",
            component: () => import("@/views/HelloWorld.vue"),
        },
        {
            path: "/shop-details",
            name: "shop-details",
            component: () => import("@/views/shop-details.vue"),
        },
        {
            path: "/shop-grid",
            name: "shop-grid",
            component: () => import("@/views/shop-grid.vue"),
        },
        {
            path: "/shoping-cart",
            name: "shoping-cart",
            component: () => import("@/views/shoping-cart.vue"),
        },
    ],
};
export default pageRouter;