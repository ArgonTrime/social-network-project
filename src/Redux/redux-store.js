import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogPageReducer from "./dialogsPageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogPageReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(reducers);

export default store;