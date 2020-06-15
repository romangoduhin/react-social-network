const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
let initialState ={
    posts : [
        {id: 1, message: "Its my first post", likesCount: 3},
        {id: 2, message: "Its my second post", likesCount: 4}
    ],
    newPostText: '',};
const profileReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_POST:{ let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_POST_TEXT:{
            state.newPostText = action.newText;
            return state;
        }
        default: return state;
    }
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
 export default profileReducer;
