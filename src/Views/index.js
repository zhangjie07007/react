// import {default as Article} from './Article'
import Loadable from 'react-loadable'

import { Loading } from '../components'
// import Article from './Article'
// import Login from './Login'
// import NotFount from './NotFount'
// import Settings from './Settings'
// import Dashboard from './Dashboard'
// import Edit from './Article/Edit'

const Article = Loadable({   //路由懒加载实现
    loader:() => import('./Article'),
    loading:Loading
})
const Login = Loadable({
    loader:() => import('./Login'),
    loading:Loading
})
const NotFount = Loadable({
    loader:() => import('./NotFount'),
    loading:Loading
})
const Settings = Loadable({
    loader:() => import('./Settings'),
    loading:Loading
})
const Dashboard = Loadable({
    loader:() => import('./Dashboard'),
    loading:Loading
})
const Edit = Loadable({
    loader:() => import('./Article/Edit'),
    loading:Loading
})
const Shopping = Loadable({
    loader:()=>import('./Shopping'),
    loading:Loading
})

export {
    Article,
    Login,
    NotFount,
    Settings,
    Dashboard,
    Shopping,
    Edit
}