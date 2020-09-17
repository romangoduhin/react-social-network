import {profileAPI, usersAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_USER_STATUS='SET_USER_STATUS';
let initialState = {
    posts: [
        {id: 1, message: "Its my first post", likesCount: 3},
        {id: 2, message: "Its my second post", likesCount: 4}
    ],
    profile:null,
    status:'',

};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.addPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,status:action.status
            }
        }
        default:
            return state;
    }
};
export const addPostActionCreator = (addPostText) => {

    return {
        type: ADD_POST,
        addPostText
    }

};
export const setUserProfile = (profile)=>{
    return {
        type: SET_USER_PROFILE,
        profile
    }
};
export const setUserStatus=(status)=>{
    return {
        type: SET_USER_STATUS,
        status
    }
}
export const getUserProfile=(userId)=>{
    return (dispatch)=>{
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
};
export const getUserStatus=(userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId).then(response=>{
            console.log(response.data);
            dispatch(setUserStatus(response.data));
        })
    }
}
export const updateUserStatus=(status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status).then(response=>{
            console.log(response);
            if (response.data.resultCode === 0 ){
                dispatch(setUserStatus(status))
            }
        })
    }
}

export default profileReducer;
