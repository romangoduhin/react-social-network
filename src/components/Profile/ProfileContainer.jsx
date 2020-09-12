import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




class ProfileContainer extends React.Component {


    componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
        userId=2
    }
        this.props.getUserProfile(userId);

    }
    render() {
        if (!this.props.isAuth ) return <Redirect to={'/login'}/>
        return  <Profile {...this.props} profile={this.props.profile}/>
    }
}
let mapStateToProps = (state)=> {
    return {
        profile:state.profilePage.profile,

    }

}
let withUrlDataContainerComponent= withRouter(ProfileContainer);
export default withAuthRedirect(connect(mapStateToProps,{getUserProfile})(withUrlDataContainerComponent))