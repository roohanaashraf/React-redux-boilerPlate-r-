// For redux/store configuration

import reducer from './reducer';          //export default in reducer so can be imported with any name(Here: reducer/any other name)
import { createStore, applyMiddleware } from 'redux';  //createStore is a method
import thunk from 'redux-thunk';


// creating a store
const store = createStore(reducer,  applyMiddleware(thunk))

export default store;