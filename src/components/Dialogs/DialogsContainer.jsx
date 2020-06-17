import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                };
                let updateMessageText = (text) => {

                    store.dispatch(updateMessageTextActionCreator(text))
                };
                return (<Dialogs updateMessageText={updateMessageText} addMessage={addMessage}
                                 newMessageText={state.newMessageText} messages={state.messages}
                                 dialogs={state.dialogs}/>)
            }}
        </StoreContext.Consumer>
    )

};
export default DialogsContainer;