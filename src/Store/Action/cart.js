import actionType from './actionType'

export const addToCart = (item) => {
    return {
        type:actionType.ADD_TO_CART,
        payload:item
    }
}

export const delFromCart = id => {
    return {
        type:actionType.DELETE_FROM_CART,
        payload:id
    }
}