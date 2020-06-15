import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    };
    let onPostChange=(e)=>{
        let text = e.target.value;
        props.dispatch(updatePostTextActionCreator(text));


    };
    return (

        <div>
            My Posts
            <div>
                New post
                <textarea onChange={onPostChange}  value ={props.newPostText} placeholder='Enter your message'/>
                <button onClick={addPost}>add post</button>
                <button>remove</button>

            </div>
            <div className={s.posts}>

                {postsElements}

            </div>


        </div>

    )
}
export default MyPosts;