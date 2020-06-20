const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
let initialState = {users: [
        ]
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )

            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        }
        case SET_USER:{
            return{
                ...state,users:[...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
};
export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollowActionCreator = (userId) => {

    return {
        type: UNFOLLOW,
        userId

    }
};
export const setUserActionCreator =(users)=>{
    return{
        type: SET_USER,
        users
    }
};
export default usersReducer;