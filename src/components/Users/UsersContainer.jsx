import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
     follow, requestUsers,
    setCurrentPage,
     unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage,this.props.pageSize  )
    };

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber,this.props.pageSize  )


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

               followingInProgress={this.props.followingInProgress}
        />
            </>
    }

}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};*/
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};
export default compose(
    connect(mapStateToProps, {follow,unfollow,setCurrentPage, requestUsers}),

)(UsersAPIComponent)
