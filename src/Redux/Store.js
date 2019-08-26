const ADD_POST_PROFILE = 'ADD-POST-PROFILE';
const UPDATE_NEW_POST_PROFILE = 'UPDATE-NEW-POST-PROFILE';


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
            ]
        }
    },
    dispatch(action) {
        if (action.type === ADD_POST_PROFILE) {
            let newPost = {
                id: 5,
                messege: this._state.profilePage.newPostText,
                likeCounts: 0
            }
            this._state.profilePage.profilePosts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callback();
        } else if (action.type === UPDATE_NEW_POST_PROFILE){
            this._state.profilePage.newPostText = action.newText;
            this._callback();
        }
    }
}

export const addPostProfileActionCreator = () => ({
    type: ADD_POST_PROFILE
})
export const updateNewPostProfileActionCreator = (text) => ({
    type: UPDATE_NEW_POST_PROFILE,
    newText: text
})

export default store;