import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={ ()=><Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route exact path='/dialogs' render={ ()=><Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/clothing'/>
                    <Route path='/other'/>

                </div>
            </div>

    );
}
export default App;
