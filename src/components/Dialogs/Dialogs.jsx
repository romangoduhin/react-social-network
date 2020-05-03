import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};
const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Roman"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Natasha"},
        {id: 4, name: "Nastya"},
        {id: 5, name: "Sanya"}];
    let messagesData = [
        {id: 1, messages: "Hello"},
        {id: 2, messages: "hi"},
        {id: 3, messages: "wassup"},
    ];

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>


                </div>
                <div className={s.messages}>

                    <Message message={messagesData[0].messages} id={messagesData[0].id}/>
                    <Message message={messagesData[1].messages} id={messagesData[1].id}/>
                    <Message message={messagesData[2].messages} id={messagesData[2].id}/>

                </div>
            </div>
        </div>
    )
};
export default Dialogs;