const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, fullname: 'Ihar', status:'Learning web-development', location: {country: 'Belarus', city: 'Minsk'}, followCheck: false},
        {id: 2, fullname: 'Julia', status:'Looking for the best', location: {country: 'Belarus', city: 'Minsk'}, followCheck: true}

    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followCheck: true}
                    }
                    return u
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followCheck: false}
                    }
                    return u
                })
            };

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        default:
            return state
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;