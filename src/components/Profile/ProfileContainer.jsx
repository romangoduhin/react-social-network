import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {


    componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
        userId=8874
    }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)

    }
    render() {
        if (!this.props.isAuth ) return <Redirect to={'/login'}/>
        return  <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
}
let mapStateToProps = (state)=> {
    return {
        profile:state.profilePage.profile,
        status: state.profilePage.status,
    }

}
export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps,{getUserProfile,getUserStatus,updateUserStatus}))(ProfileContainer)
