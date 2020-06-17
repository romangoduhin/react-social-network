import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
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


        </StoreContext.Consumer>)

};
export default MyPostsContainer;