import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

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
const maxLength=maxLengthCreator(10)
const AddPostForm = (props)=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            New post
            <Field component={Textarea} name="addPostText" placeholder="Enter your message" validate={[required,maxLength]}/>
            <button >add post</button>

        </div>
    </form>
}
const AddPostsFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;