import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let addNewPost = (values)=>{
         props.addPost(values.addPostText)
    }
    return (
        <div>
            My Posts
            <AddPostsFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};
const AddPostForm = (props)=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            New post
            <Field component={"textarea"} name="addPostText" placeholder="Enter your message"/>
            <button >add post</button>

        </div>
    </form>
}
const AddPostsFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;