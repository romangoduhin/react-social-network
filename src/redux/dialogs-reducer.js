const ADD_MESSAGE = 'ADD-MESSAGE';

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
        {id: 3, message: "wasssup"}],

};
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessageBody}]
            };
        }

        default:
            return state;
    }
};
export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
};

export default dialogsReducer;