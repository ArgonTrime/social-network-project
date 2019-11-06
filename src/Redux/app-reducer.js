import {getAuthUser} from "./auth-reducer";
const SET_INITIALIZED = 'social-network-project/SET_INITIALIZED';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state
    }
};

export const initializedSuccess = () => ({type: SET_INITIALIZED});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUser());
    promise.then(() => {dispatch(initializedSuccess())});
};
export default appReducer;