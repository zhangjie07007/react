import actionType from './actionType'
import { dispatch } from 'C:/Users/张杰/AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/observable/range';


const getstart = () => {
    return {
        type:actionType.START_FETCH
    }
}

const getsuccess = (payload) => {
    return {
        type:actionType.SUCCESS_FETCH,
        payload
    }
}

const geterror = () => {
    return {
        type:actionType.DEFEAT_FETCH
    }
} 

export const getList = () => dispatch => {
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

