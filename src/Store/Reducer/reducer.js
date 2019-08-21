import actionType from '../Action/actionType'

const initState = {
    isLoad: true,
    datalist: [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        }
    ]
}

export default (state, action) => {
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case actionType.START_FETCH:
            return {
                ...state,
                isLoad: true
            }
            break;
        case actionType.SUCCESS_FETCH:
            return {
                ...state,
                isLoad: false
            }
            break;
        case actionType.DEFEAT_FETCH:
            return {
                err: '出错啦！'
            }
        default: return state
    }
}