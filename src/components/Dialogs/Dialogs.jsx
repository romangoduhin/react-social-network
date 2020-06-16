import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

 let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
 let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/>);

 let onAddMessage = ()=>{
     props.addMessage();
 };
 let onMessageChange = (e)=>{
     let text = e.target.value;
     props.updateMessageText(text);
 };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                   <div>{messagesElements}</div>
                    <div><textarea onChange ={onMessageChange}   value ={props.newMessageText} placeholder='Enter your message'> </textarea></div>
                   <div> <button onClick={onAddMessage}> send</button></div>

                </div>
            </div>
        </div>
    )
};
export default Dialogs;