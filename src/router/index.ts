import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('../Layout/index.vue')
import components from './modules/components'
import { getToken } from '../until/auth'
/**
 * hidden 是否在导航栏显示            ture 不显示
 * meta        title: 名称    icon: 图标
 */
const routes = [
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('../views/login/index.vue'),
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: '/dashboard',
            title: '工作台',
            component: () => import('../views/dashboard/index.vue'),
            meta: { title: '工作台', icon: 'el-icon-menu', }
        }]
    },
    components
]
// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
    // 指定路由的模式,此处使用的是hash模式,createWebHistory为history模式
    history: createWebHashHistory(),
    // 路由地址
    routes
})
router.beforeEach((to, from, next) => {
    const role = getToken();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});
export default router