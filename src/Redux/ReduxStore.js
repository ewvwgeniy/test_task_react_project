import {combineReducers, createStore} from "redux"
import Reducer from "./Reducer";

let reducers = combineReducers({
    objects_obj: Reducer
})

let store = createStore(reducers)

window.store = store

export default store