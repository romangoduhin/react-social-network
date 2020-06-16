import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let updatePostText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    };
    return (<MyPosts updatePostText={updatePostText} addPost={addPost} posts={state.posts} newPostText={state.newPostText}/>
    )
};
export default MyPostsContainer;