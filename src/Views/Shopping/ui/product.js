import React, { Component } from 'react'

import { Table, Card,Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { addToCart } from '../../../Store/Action/cart';
import {getProduct} from '../../../Store/Action/product'

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
    state = {
        isable:false,
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
                title:'操作',
                align:'center',
                render:(a,b)=>{
                    return <Button disabled ={a.inventory?false:true} onClick = {this.addToCart.bind(this,a)} type= 'primary'>加入购物车</Button>
                }
            }
        ]
    }
    constructor(){
        super();
       
    }
    
    componentDidMount(){
        // console.log(this.props.product.length)
        if(!this.props.product.length){
            this.props.getProduct()
        }
        
    }
    handleClick = () => {
        this.props.history.push('/admin/view')
    }
    addToCart = (item) => {
        console.log(this.props)
        console.log(item)
        this.props.addToCart(item)
        this.props.productReduce(item)
    }
    render() {
        return (
            <div>
                
                <Card title="商品展示"
                    extra={<Button onClick = {this.handleClick} type = 'danger' icon = 'shopping'>去购物车</Button>} >
                    <Table 
                    rowSelection={rowSelection} 
                    columns={this.state.columns} 
                    dataSource={this.props.product} />
                </Card>
            </div>
        )
    }
}

export default Product