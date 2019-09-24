import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogPageReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogPageReducer,
    navBar: navBarReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store;