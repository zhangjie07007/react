import React, { Component } from 'react'
import { Layout, Menu,  Icon, Button } from 'antd';
import { adminRouter } from '../../Routes'
import img from './logo.jpg'
import './frame.less'
// console.log(adminRouter)
// setTimeout(() => {
//     console.log(adminRouter)
// }, 100)
import { withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
@withRouter
class Frame extends Component {
    
    componentDidMount() {
    }
    menuClick = (msg) => {
        console.log(this.props.history)
        console.log(msg.key)
        this.props.history.push(msg.key)
    }
    render() {
        let { nav } = this.props
        console.log(nav)
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" >
                        <img src = {img} alt='logo' />
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            onClick = {this.menuClick}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}>
                            {nav.map(item=>{
                                return <Menu.Item
                                 key={item.pathname}
                                 ><Icon type={item.icon} />{item.title}</Menu.Item>
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Frame