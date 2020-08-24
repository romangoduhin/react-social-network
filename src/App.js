import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={ ()=><Profile  />}/>
                    <Route exact path='/dialogs' render={ ()=><DialogsContainer />}/>
                    <Route exact path='/users' render={ ()=><UsersContainer />}/>
                    <Route path='/clothing'/>
                    <Route path='/other'/>

                </div>
            </div>

    );
}
export default App;
