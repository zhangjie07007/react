import actionType from '../Action/actionType'

const initState = [
    {
        id: 34,
        title: 'oooo',
        num: 90
    }
]

export default (state = initState , action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_START:
            return state
        case actionType.GET_PRODUCT_SUCCESS:
            return state
        case actionType.GET_PRODUCT_ERROR:
            return {error:'出错了'}
        default: return state
    }
}