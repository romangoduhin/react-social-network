const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
let initialState = {
    posts: [
        {id: 1, message: "Its my first post", likesCount: 3},
        {id: 2, message: "Its my second post", likesCount: 4}
    ],
    newPostText: '',
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }

};
export const updatePostTextActionCreator = (text) => {

    return {
        type: UPDATE_POST_TEXT,
        newText: text
    }
};
export default profileReducer;
