import React, { Component } from 'react'
import {Card , Button,Table} from 'antd'
import { withRouter } from 'react-router-dom'
import '../index.less'
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    
];

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
    handleClick = () => {
        this.props.history.push('/admin/shopping')
    }
    render() {
        return (
            <div>
                <p className = 'cart-head'>购物车商品</p>
                <Card title="商品列表"
                    extra={<Button onClick = {this.handleClick} type = 'danger' icon = 'rollback'>返回商店</Button>} >
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </Card>
            </div>
        )
    }
}

export default CartView
