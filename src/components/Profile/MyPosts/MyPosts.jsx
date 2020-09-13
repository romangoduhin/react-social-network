import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updatePostText(text);
    };
    return (
        <div>
            My Posts
            <div>
                New post
                <textarea onChange={onPostChange} value={props.newPostText} placeholder='Enter your message'/>
                <button onClick={onAddPost}>add post</button>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;