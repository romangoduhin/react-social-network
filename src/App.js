import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/clothing'/>
                    <Route path='/other'/>

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
