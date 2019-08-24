import actionType from './actionType'


const getstart = () => {
    return {
        type:actionType.GET_PRODUCT_START
    }
}

const getsuccess = (payload) => {
    return {
        type:actionType.GET_PRODUCT_SUCCESS,
        payload
    }
}

const geterror = () => {
    return {
        type:actionType.GET_PRODUCT_ERROR
    }
} 

export const getProduct = () => dispatch => {
    dispatch(getstart())
    fetch('http://106.12.79.128:8848/index.json')
    .then(res=>res.json())
    .then(res=>{
        // console.log(res)
        dispatch(getsuccess(res.data))
    })
    .catch(er=>{
        dispatch(geterror())
    })
}

export const productReduce = item => {
    return {
        type:actionType.REDUCE_PRODUCT,
        payload:item
    }
}

