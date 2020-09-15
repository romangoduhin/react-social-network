import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    currentPage:1,
    totalUsersCount: 0,
    pageSize: 5,
    isFetching : true,
    followingInProgress: [],
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
        case SET_USER: {
            return {
                ...state, users:action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.page
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,followingInProgress: action.isFetching? [...state.followingInProgress,action.userId]:state.followingInProgress.filter(id => id!==action.userId)
            }
        }
        default:
            return state;
    }
};
export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollowSuccess = (userId) => {

    return {
        type: UNFOLLOW,
        userId

    }
};
export const setUsers = (users) => {
    return {
        type: SET_USER,
        users
    }
};
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
};
export const setTotalUsersCount= (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count
    }
};
export const toggleIsFetching = (isFetching)=>{
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching,userId)=>{
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,userId
    }
}
export const getUsers=(currentPage,pageSize)=>{
    return (dispatch)=>{
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }};
export const unfollow=(userId)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId));
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0){ dispatch(unfollowSuccess(userId))}
            dispatch(toggleFollowingProgress(false,userId))
        });
    }
}
export const follow=(userId)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true,userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0){ dispatch(followSuccess(userId))}
            dispatch(toggleFollowingProgress(false,userId));
        });
    }
}
export default usersReducer;