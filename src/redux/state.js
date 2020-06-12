const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
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
                {id: 3, message: "wassup"},
            ]},
        profilePage:{
            posts : [
                {id: 1, message: "Its my first post", likesCount: 3},
                {id: 2, message: "Its my second post", likesCount: 4}
            ],
            newPostText: 'input message',
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
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this. _callSubscriber(this._state);
        }
        else if (action.type === UPDATE_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this. _callSubscriber(this._state)
        }
    },

};
    export const addPostActionCreator =()=>{

        return{
            type: ADD_POST
        }

    };
    export const updatePostTextActionCreator =(text)=>{

        return{
        type: UPDATE_POST_TEXT,
        newText:text
    }
};
window.store=store;
export default store;