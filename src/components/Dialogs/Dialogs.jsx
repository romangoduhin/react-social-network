import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateMessageTextActionCreator,addMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {

 let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
 let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id}/>);
 let newMessageElement = React.createRef();
 let addMessage = ()=>{
     props.dispatch(addMessageActionCreator())
 };
 let onMessageChange = ()=>{
     let text = newMessageElement.current.value;
     props.dispatch(updateMessageTextActionCreator(text))
 };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <textarea onChange ={onMessageChange}  ref={newMessageElement} value ={props.dialogsPage.newMessageText}> </textarea>
                    <button onClick={addMessage}> send</button>

                </div>
            </div>
        </div>
    )
};
export default Dialogs;