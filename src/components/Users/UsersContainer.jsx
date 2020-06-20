import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUserActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users)=>{
            dispatch(setUserActionCreator(users))
        }
    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;