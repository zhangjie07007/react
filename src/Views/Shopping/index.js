import React, { Component } from 'react'
import Cart from './container/cartContainer'
import Product from './container/productContainer'
import './index.less'
export default class Shopping extends Component {
    render() {
        return (
            <div>
                <p className = 'cart-head'>购物车</p>
                <Product />
                <Cart />
            </div>
        )
    }
}
