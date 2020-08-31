import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {

        return <>
            {this.props.isFetching? <Preloader/>:null}

        <Users onPageChanged={this.onPageChanged}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
               followingInProgress={this.props.followingInProgress}
        />
            </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleFollowingProgress})(UsersAPIComponent);
export default UsersContainer;