import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*const DialogsContainer = () => {
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

};*/
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;