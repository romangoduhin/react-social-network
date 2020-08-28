import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route  path='/profile' render={ ()=><ProfileContainer  />}/>
                    <Route  path='/dialogs' render={ ()=><DialogsContainer />}/>
                    <Route  path='/users' render={ ()=><UsersContainer />}/>
                    <Route path='/clothing'/>
                    <Route path='/other'/>

                </div>
            </div>

    );
}
export default App;
