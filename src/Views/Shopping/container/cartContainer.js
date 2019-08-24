import React, { Component } from 'react'
import Cart from '../ui/Cart'
import {delFromCart} from '../../../Store/Action/cart'
import {connect} from 'react-redux'

let getState = state => {
    return {
        cart:state.cart
    }
}

export default connect(getState,{delFromCart})(Cart)
