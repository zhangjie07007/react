import actionType from '../Action/actionType'

const initState = [
    {
        id: 34,
        title: 'oooo',
        num: 90
    }
]

export default (state = initState , action) => {
    console.log(action)
    switch(action.type){
        case actionType.ADD_TO_CART:
            return state
        case actionType.DELETE_FROM_CART:
            return {
                ...state
            }
        default: return state
    }
}