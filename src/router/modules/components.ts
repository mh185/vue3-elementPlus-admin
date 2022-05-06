const Layout = () => import('../../Layout/index.vue')
export default {
    path: '/components',
    component: Layout,
    redirect: '/index',
    meta: {
        icon: 'iconfont icon-all',
        title: 'components',
    },
    children: [
        {
            path: '/language',
            component: () => import('@/views/components/language.vue'),
            meta: {
                icon: 'iconfont icon-Exportservices',
                title: 'language',
            }
        },
        {
            path: '/index',
            component: () => import('../../views/components/icon.vue'),
            meta: {
                icon: 'iconfont icon-atm',
                title: 'icon',
            }
        },
        {
            path: '/table',
            component: () => import('../../views/components/list-table.vue'),
            meta: {
                icon: 'iconfont icon-form',
                title: 'table',
            }
        },
    ]
}