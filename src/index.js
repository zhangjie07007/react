import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import { mainRouter } from './Routes'
import {Login} from './Views'
import App from './App'
import { ConfigProvider } from 'antd'
import store from './Store/store'
// console.log(store.getState())
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux'
render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/admin' render={(routerProps) => {
                        return <App {...routerProps} />
                    }} />
                    {mainRouter.map(item=>{
                        return <Route key = {item.pathname} path={item.pathname} component={item.component} />
                    })}
                    <Redirect from ='/' to='/admin' exact />
                    <Redirect to='/404' exact />
                </Switch>
            </Router>
        </Provider>
    </ConfigProvider>,
    document.querySelector('#root')
)