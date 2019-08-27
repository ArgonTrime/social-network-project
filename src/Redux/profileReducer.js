const ADD_POST_PROFILE = 'ADD-POST-PROFILE';
const UPDATE_NEW_POST_PROFILE = 'UPDATE-NEW-POST-PROFILE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST_PROFILE:
            let newPost = {
                id: 5,
                messege: state.newPostText,
                likeCounts: 0
            };
            state.profilePosts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_PROFILE:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

};

export const addPostProfileActionCreator = () => ({
    type: ADD_POST_PROFILE
});
export const updateNewPostProfileActionCreator = (text) => ({
    type: UPDATE_NEW_POST_PROFILE,
    newText: text
});

export default profileReducer;