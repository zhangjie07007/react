import actionType from '../Action/actionType'

const initState = {
    isLoad: true,
    datalist: [
        {
            id: 2
        }
    ]
}

export default (state, action) => {
    if(!state){
        state = initState;
    }
    switch(action.type){
        case actionType.START_FETCH:
            return {
                ...state,
                isLoad:true
            }
            break;
        case actionType.SUCCESS_FETCH:
            return {
                ...state,
                isLoad:false
            }
            break;
        case actionType.DEFEAT_FETCH:
            return {
                err:'出错啦！'
            }
        default : return state
    }
}