import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage;
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                };
                let updatePostText = (text) => {
                    store.dispatch(updatePostTextActionCreator(text))
                };
                return (<MyPosts updatePostText={updatePostText} addPost={addPost} posts={state.posts}
                                 newPostText={state.newPostText}/>)
            }}
        </StoreContext.Consumer>)*/
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text))
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;