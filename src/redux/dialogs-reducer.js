const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
 const dialogsReducer = (state, action) => {
     switch(action.type){
         case ADD_MESSAGE:{
             let newMessage = {
                 id: 4,
                 message: state.newMessageText
             };
             state.messages.push(newMessage);
             state.newMessageText = '';
             return state;
         }
         case UPDATE_MESSAGE_TEXT:{
             state.newMessageText = action.newText;
             return state;
         }
         default: return state;
     }
};
export const addMessageActionCreator=()=>{
    return{
        type:ADD_MESSAGE
    }
};
export const updateMessageTextActionCreator =(text)=>{

    return{
        type: UPDATE_MESSAGE_TEXT,
        newText:text
    }
};
 export default dialogsReducer;