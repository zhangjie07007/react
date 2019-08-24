import actionType from '../Action/actionType'

const initState = [
    
]

export default (state = initState , action) => {
    // console.log(action)
    switch(action.type){
        case actionType.GET_PRODUCT_START:
            return state
        case actionType.GET_PRODUCT_SUCCESS:
            return [...action.payload]
        case actionType.GET_PRODUCT_ERROR:
            return {error:'出错了'}
        case actionType.REDUCE_PRODUCT:
            // console.log(state)
            let res = state.find(item=>item.id == action.payload.id)
            res.inventory--
            return [...state]
            // console.log(res.id)
        default: return state
    }
}