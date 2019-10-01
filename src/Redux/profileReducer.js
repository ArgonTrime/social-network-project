const ADD_POST_PROFILE = 'ADD-POST-PROFILE';
const UPDATE_NEW_POST_PROFILE = 'UPDATE-NEW-POST-PROFILE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    profilePosts: [
        {id: 1, messege: 'Welcome, Social network', likeCounts: 15},
        {id: 2, messege: 'How are you?', likeCounts: 3},
        {id: 3, messege: 'Great moving in the right direction', likeCounts: 9},
        {id: 4, messege: 'Add messege map, good!', likeCounts: 4}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_PROFILE: {
            let newPost = {
                id: 5,
                messege: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                profilePosts: [...state.profilePosts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_PROFILE:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }

};

export const addPostProfile = () => ({
    type: ADD_POST_PROFILE
});
export const updateNewPostProfile = (text) => ({
    type: UPDATE_NEW_POST_PROFILE,
    newText: text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export default profileReducer;