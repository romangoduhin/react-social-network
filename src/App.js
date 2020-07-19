import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
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
