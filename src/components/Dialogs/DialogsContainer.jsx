import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
 let addMessage = ()=>{
     props.store.dispatch(addMessageActionCreator())
 };
 let updateMessageText = (text)=>{

     props.store.dispatch(updateMessageTextActionCreator(text))
 };

    return (
        <Dialogs updateMessageText={updateMessageText} addMessage={addMessage} newMessageText={state.newMessageText} messages={state.messages} dialogs={state.dialogs}/>
    )
};
export default DialogsContainer;