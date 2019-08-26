import React, { Component } from 'react'
import { adminRouter } from './Routes'
import { NavLink as Link, Route, Switch, Redirect } from 'react-router-dom'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Frame } from './components'
import './App.less'
class App extends Component {
    componentDidMount() {
        // console.log(this.props)
    }
    render() {//渲染
        let nav = adminRouter.filter(item=>item.isNav === true)
        return (
            <Frame nav = {nav}>
                <Switch>
                    {adminRouter.map(item => {
                        return <Route
                            key={item.pathname}
                            exact={item.exact}
                            path={item.pathname}
                            render={(props) => {
                                return <item.component {...props} />
                            }} />
                    })}
                    <Redirect from='/admin' to={adminRouter[0].pathname} exact />
                    <Redirect to='/404' />
                </Switch>
            </Frame>
        )
    }
}

const getState = (state) => {
    // console.log(state.reducer)
    return {
        isLoad: state.reducer.isLoad,
        datalist: state.reducer.datalist
    }
}

export default connect(getState)(App)
