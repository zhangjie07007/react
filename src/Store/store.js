import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from './Reducer'

export default createStore(reducer,composeWithDevTools())