import profileReducer from "./profileReducer";
import dialogPageReducer from "./dialogsPageReducer";


const store = {
    _callback() {

    },
    subscribe(func) {
        this._callback = func
    },
    getState() {
        return this._state;
    },


    _state: {
        navBar: {
            friend: [
                {id: 1, name: 'Ihar'},
                {id: 2, name: 'Julia'},
                {id: 2, name: 'Marina'}
            ]
        },
        profilePage: {
            profilePosts: [
                {id: 1, messege: 'Welcome, Social network', likeCounts: 15},
                {id: 2, messege: 'How are you?', likeCounts: 3},
                {id: 3, messege: 'Great moving in the right direction', likeCounts: 9},
                {id: 4, messege: 'Add messege map, good!', likeCounts: 4}
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogList: [
                {id: 1, name: 'Ihar'},
                {id: 2, name: 'Julia'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Artem'}
            ],
            dialogMesseges: [
                {id: 1, messege: 'How a you?'},
                {id: 2, messege: 'Grate!'},
                {id: 3, messege: 'You upgrade React skill?'}
            ],
            newDialogMessege: ''
        }
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);

        this._callback();
    }
};
export default store;