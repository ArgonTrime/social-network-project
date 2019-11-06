import {componentsAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helper";

const FOLLOW = 'social-network-project/users/FOLLOW';
const UNFOLLOW = 'social-network-project/users/UNFOLLOW';
const SET_USERS = 'social-network-project/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network-project/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network-project/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-network-project/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRES = 'social-network-project/users/TOGGLE_IS_FOLLOWING_PROGRES';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgres: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRES:
            return {
                ...state,
                followingInProgres: action.isFetching
                    ? [...state.followingInProgres, action.userId]
                    : state.followingInProgres.filter(id => id != action.userId)
            };

        default:
            return state
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgres = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRES,
    isFetching,
    userId
});

// getting users
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await componentsAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

// follow, unfollow users
const followUnfollowUsers = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgres(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgres(false, userId));
};
export const follow = (userId) => async (dispatch) => {
    followUnfollowUsers(dispatch, userId, componentsAPI.follow.bind(userId), followSuccess);
};
export const unfollow = (userId) => async (dispatch) => {
    followUnfollowUsers(dispatch, userId, componentsAPI.unfollow.bind(userId), unfollowSuccess);
};
export default usersReducer;