import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state :{
        dialogsPage:{
            dialogs : [
                {id: 1, name: "Roman"},
                {id: 2, name: "Vlad"},
                {id: 3, name: "Natasha"},
                {id: 4, name: "Nastya"},
                {id: 5, name: "Sanya"}],
            messages : [
                {id: 1, message: "Hello"},
                {id: 2, message: "hi"},
                {id: 3, message: "wassup"}],
            newMessageText: ''
        },
        profilePage:{
            posts : [
                {id: 1, message: "Its my first post", likesCount: 3},
                {id: 2, message: "Its my second post", likesCount: 4}
            ],
            newPostText: '',
        }

    },    _callSubscriber () {
        console.log('Store changed');
    },
    getState(){
        return this._state
    },
    subscribe (observer){
        this. _callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._callSubscriber(this._state);
    },

};


window.store=store;
export default store;