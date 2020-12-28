import reducerUsers from "./reducer";
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from "redux";

let reducers = combineReducers({
    usersPage: reducerUsers,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;