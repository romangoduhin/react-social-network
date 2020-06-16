import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={ ()=><Profile store={props.store} />}/>
                    <Route exact path='/dialogs' render={ ()=><DialogsContainer store={props.store}/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/clothing'/>
                    <Route path='/other'/>

                </div>
            </div>

    );
}
export default App;
