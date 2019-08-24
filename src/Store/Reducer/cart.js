import actionType from '../Action/actionType'

const initState = [
    // {
    //     id: 34,
    //     title: '初始化数据',
    //     price: 90,
    //     inventory:999
    // }
]

export default (state = initState , action) => {
    console.log(action)
    switch(action.type){
        case actionType.ADD_TO_CART:
            return [...state,action.payload]
        case actionType.DELETE_FROM_CART:
            return {
                ...state
            }
        default: return state
    }
}