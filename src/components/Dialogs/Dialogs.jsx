import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

 let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
 let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id}/>);

 let addMessage = ()=>{
     props.dispatch(addMessageActionCreator())
 };
 let onMessageChange = (e)=>{
     let text = e.target.value;
     props.dispatch(updateMessageTextActionCreator(text))
 };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                   <div>{messagesElements}</div>
                    <div><textarea onChange ={onMessageChange}   value ={props.dialogsPage.newMessageText} placeholder='Enter your message'> </textarea></div>
                   <div> <button onClick={addMessage}> send</button></div>

                </div>
            </div>
        </div>
    )
};
export default Dialogs;