
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoggedInReducer} from "./reducers/userReducers";
import {taskReducer} from "./reducers/taskReducer"

const rootReducer = combineReducers({
    userLoggedInReducer,
    taskReducer
})


const middleware = [thunk];

const store =createStore (rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;