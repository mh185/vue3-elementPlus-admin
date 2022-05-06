const Layout = () => import('../../Layout/index.vue')
export default {
    path: '/menu',
    component: Layout,
    redirect: '/menu1/menu1-1',
    meta: {
        icon: 'iconfont icon-category',
        title: 'menu',
    },
    children: [
        {
            path: '/menu1',
            component: () => import('@/views/menu/menu1/index.vue'),
            meta: {
                title: 'menu1',
            },
            children: [
                {
                    path: '/menu1-1',
                    component: () => import('@/views/menu/menu1/menu1-1/index.vue'),
                    meta: {
                        title: 'menu1-1',
                    },
                },
                {
                    path: '/menu1-2',
                    component: () => import('@/views/menu/menu1/menu1-2/index.vue'),
                    meta: {
                        title: 'menu1-2',
                    },
                }
            ]
        },
        {
            path: '/menu2',
            component: () => import('@/views/menu/menu2/index.vue'),
            meta: {
                title: 'menu2',
            }
        }
    ]
}