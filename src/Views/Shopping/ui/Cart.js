import React, { Component } from 'react'
import {Card , Button,Table} from 'antd'
import { withRouter } from 'react-router-dom'
import '../index.less'


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
@withRouter
class CartView extends Component {
    state = {
        columns : [
            {
                title: '商品名称',
                align:'center',
                dataIndex: 'title',
                render: text => <a>{text}</a>,
            },
            {
                title: '数量',
                align:'center',
                dataIndex: 'inventory',
            },
            {
                title: '价格',
                align:'center',
                dataIndex: 'price',
            },{
                title: '操作',
                align:'center',
                render:(item)=>{
                    return <Button onClick = {this.delCart.bind(this,item)} type='danger' icon = 'delete'>删除</Button>
                }
            },
        ]
    }
    delCart(item){
        console.log(this.props)
        this.props.delFromCart(item)
    }
    handleClick = () => {
        this.props.history.push('/admin/shopping')
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <p className = 'cart-head'>购物车商品</p>
                <Card title="商品列表"
                    extra={<Button onClick = {this.handleClick} type = 'danger' icon = 'rollback'>返回商店</Button>} >
                    <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.props.cart} />
                </Card>
            </div>
        )
    }
}

export default CartView
