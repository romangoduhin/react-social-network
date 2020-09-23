import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {withRouter,Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {inisializeApp, inisializedSuccess} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";



class App extends React.Component {
    componentDidMount()
    {
        this.props.inisializeApp();
    }
    render() {
            if(!this.props.inisialized){
                return <Preloader/>
            }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>

                </div>
            </div>

        );
    }
}
const mapStateToProps=(state)=>({
    inisialized:state.app.inisialized
})
export default compose
(
    withRouter,
    connect(mapStateToProps ,{inisializeApp}))(App);

