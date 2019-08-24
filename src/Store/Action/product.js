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
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(res=>{
        // console.log(res)
        dispatch(getsuccess(res))
    })
    .catch(er=>{
        dispatch(geterror())
    })
}

