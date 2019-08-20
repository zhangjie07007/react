import {
    Dashboard,
    Login,
    Article,
    Edit,
    NotFount,
    Settings
} from '../Views'

export const mainRouter = [
    {
        pathname:'/login',
        component:Login
    },{
        pathname:'/404',
        component:NotFount
    },
]

export const adminRouter = [
    {
        pathname:'/admin/dashboard',
        component:Dashboard,
        title:'仪表盘',
        isNav:true,
        icon:'dot-chart'
    },{
        pathname:'/admin/article',
        component:Article,
        exact:true,
        title:'文章管理',
        isNav:true,
        icon:'profile'
    },{
        pathname:'/admin/article/edit/:id',
        component:Edit
    },{
        pathname:'/admin/settings',
        component:Settings,
        title:'设置',
        isNav:true,
        icon:'setting'
    },
]