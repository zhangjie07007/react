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
    console.log(state)
    switch(action.type){
        case actionType.ADD_TO_CART:
            let res = state.find(item=>item.id == action.payload.id)
            // console.log(state)
            if(!res){
                return [...state,{
                    id:action.payload.id,
                    title:action.payload.title,
                    price:action.payload.price,
                    inventory:1
                }]
            }else{
                res.inventory++
                return [...state]
            }
            return [...state,action.payload]
        case actionType.DELETE_FROM_CART:
            let res1 = state.filter(item=>item.id !== action.payload.id)
            console.log(res1)
            return [...res1]
        default: return state
    }
}