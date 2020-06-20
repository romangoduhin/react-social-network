const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
let initialState = {
    dialogs: [
        {id: 1, name: "Roman"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Natasha"},
        {id: 4, name: "Nastya"},
        {id: 5, name: "Sanya"}],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "hi"},
        {id: 3, message: "wassup"}],
    newMessageText: ''
};
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: state.newMessageText}]
            };
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
};
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};
export const updateMessageTextActionCreator = (text) => {

    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text
    }
};
export default dialogsReducer;