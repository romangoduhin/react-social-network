import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )
    return (

        <div>
            My Posts
            <div>
                New post
                <textarea name="postarea" id="1" cols="10" rows="10"> hh</textarea>
                <button>add post</button>
                <button>remove</button>

            </div>
            <div className={s.posts}>

                {postsElements}

            </div>


        </div>

    )
}
export default MyPosts;