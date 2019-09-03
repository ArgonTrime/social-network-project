import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogPageReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogPageReducer,
    navBar: navBarReducer
});
let store = createStore(reducers);

export default store;