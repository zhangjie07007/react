import {combineReducers} from 'redux'
import reducer from './reducer'
import product from './product'
import cart from './cart'
export default combineReducers({
    reducer,
    product,
    cart
})