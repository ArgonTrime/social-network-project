import {profileAPI} from "../api/api";

const ADD_POST_PROFILE = 'social-network-project/profile/ADD-POST-PROFILE';
const SET_USER_PROFILE = 'social-network-project/profile/SET-USER-PROFILE';
const SET_STATUS = 'social-network-project/profile/SET_STATUS';
const DELETE_POST = 'social-network-project/profile/DELETE_POST';

let initialState = {
    profilePosts: [
        {id: 1, messege: 'Welcome, Social network', likeCounts: 15},
        {id: 2, messege: 'How are you?', likeCounts: 3},
        {id: 3, messege: 'Great moving in the right direction', likeCounts: 9},
        {id: 4, messege: 'Add messege map, good!', likeCounts: 4}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_PROFILE: {
            let newPost = {
                id: 5,
                messege: action.newMessageBody,
                likeCounts: 0
            };
            return {
                ...state,
                profilePosts: [...state.profilePosts, newPost]
            }
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};

        case DELETE_POST:
            return {...state, profilePosts: state.profilePosts.filter(p => p.id != action.postId)};
        default:
            return state;
    }

};

export const addPostProfile = (newMessageBody) => ({type: ADD_POST_PROFILE, newMessageBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getProfile = (userId) => async (dispatch) => {
    if (!userId) {
        userId = 2
    }
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));

};
export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));

};

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;