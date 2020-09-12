import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";




const Dialogs = (props) => {

 let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
 let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id} id={m.id}/>);

 let onAddMessage = ()=>{
     props.addMessage();
 };
 let onMessageChange = (e)=>{
     let text = e.target.value;
     props.updateMessageText(text);
 };
if (!props.isAuth) return <Redirect to={'/login'}/>
    return (

        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                   <div>{messagesElements}</div>
                    <div><textarea onChange ={onMessageChange}   value ={props.dialogsPage.newMessageText} placeholder='Enter your message'> </textarea></div>
                   <div> <button onClick={onAddMessage}> send</button></div>

                </div>
            </div>
        </div>
    )
};
export default Dialogs;