import actionType from './actionType'

export const addToCart = (item) => {
    return {
        type:actionType.ADD_TO_CART,
        payload:item
    }
}

export const delFromCart = id => {
    console.log(555)
    return {
        type:actionType.DELETE_FROM_CART,
        payload:id
    }
}