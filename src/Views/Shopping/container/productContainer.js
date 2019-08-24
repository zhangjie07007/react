import React, { Component } from 'react'
import Product from '../ui/product'
import { getProduct } from '../../../Store/Action/product'
import {addToCart} from '../../../Store/Action/cart'
import { connect } from 'react-redux'

let getState = state => {
    // console.log(state.product)
    return {
        product: state.product
    }
}

export default connect(getState, { getProduct,addToCart })(Product)