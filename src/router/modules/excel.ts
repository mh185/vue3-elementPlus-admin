const Layout = () => import('../../Layout/index.vue')

export default {
    path: '/excel',
    component: Layout,
    meta: {
        icon: 'iconfont icon-manage-order-fill',
        title: 'excel',
    },
    children: [
        {
            path: '/uploadExcel',
            component: () => import("@/views/excel/useExcelUp.vue"),
            meta: {
                title: 'uploadExcel',
                icon: 'iconfont icon-upload',
            }
        },
        {
            path: '/downloadExcel',
            component: () => import("@/views/excel/userExcelDo.vue"),
            meta: {
                title: 'downloadExcel',
                icon: 'iconfont icon-download',
            }
        }
    ]
}