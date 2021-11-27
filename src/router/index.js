import Helloworld from "@/components/HelloWorld.vue";
import vue from "vue"
import Router from "vue-router"
import Link from "@/components/link.vue";
import Login from "@/components/login.vue"
import Register from "@/components/register.vue"
import Custamer from "@/components/custamer.vue"
import Custamer1 from "@/components/custamer1.vue"
import Admin from "@/components/admin.vue"
import Admin1 from "@/components/admin1.vue"
import Admin2 from "@/components/admin2.vue"
import Nav from "@/components/nav.vue"
import Profilcas from "@/components/profilcas.vue"

vue.use(Router);

function configRouters() {
    return [
        {
            path: "/",
            name: "Helloworld",
            component: Helloworld,
        },
        {
            path: "/link",
            name: "Link",
            component: Link,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
        {
            path: "/custamer",
            name: "Custamer",
            component: Custamer,
        },
        {
            path: "/custamer1",
            name: "Custamer1",
            component: Custamer1,
        },
        {
            path: "/admin",
            name: "Admin",
            component: Admin,
        },
        {
            path: "/admin1",
            name: "Admin1",
            component: Admin1,
        },
        {
            path: "/admin2",
            name: "Admin2",
            component: Admin2,
        },
        {
            path: "/nav",
            name: "Nav",
            component: Nav,
        },
        {
            path: "/profilcas",
            name: "Profilcas",
            component: Profilcas,
        }
    ];
}

const link = new Router({
    mode: "history",
    routes: configRouters(),
});
export default link;