import React, { Component } from 'react'

import { Table, Card,Button } from 'antd';
import { withRouter } from 'react-router-dom'

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
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
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
class Product extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    handleClick = () => {
        this.props.history.push('/admin/view')
    }
    render() {
        return (
            <div>
                <Card title="商品展示"
                    extra={<Button onClick = {this.handleClick} type = 'danger' icon = 'shopping'>去购物车</Button>} >
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </Card>
            </div>
        )
    }
}

export default Product