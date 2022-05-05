const Layout = () => import('../../Layout/index.vue')
export default {
    path: '/Layout',
    component: Layout,
    redirect: '/index',
    meta: {
        icon: 'el-icon-s-help',
        title: 'components',
    },
    children: [
        {
            path: '/language',
            component: () => import('@/views/components/language.vue'),
            meta: {
                icon: 'iconfont icon-double-arrow-left',
                title: 'language',
            }
        },
        {
            path: '/index',
            component: () => import('../../views/components/icon.vue'),
            meta: {
                icon: 'el-icon-s-help',
                title: 'icon',
            }
        },
        {
            path: '/echarts',
            component: () => import('../../views/components/list-table.vue'),
            meta: {
                icon: 'el-icon-s-grid',
                title: 'table',
            }
        },
    ]
}