import { createStore, applyMiddleware } from 'redux'


import reducer from './Reducer'

export default createStore(reducer)