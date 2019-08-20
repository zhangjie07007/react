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
        component:Dashboard
    },{
        pathname:'/admin/article',
        component:Article,
        exact:true
    },{
        pathname:'/admin/article/edit/:id',
        component:Edit
    },{
        pathname:'/admin/settings',
        component:Settings
    },
]