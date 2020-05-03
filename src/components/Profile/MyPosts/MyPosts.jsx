import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPosts =()=>{
    let postsData=[
        {id: 1, message: "Its my first post",likesCount:3},
        {id: 2, message: "Its my second post",likesCount:4}
    ];

return(

<div>
        My Posts
    <div>
            New post
        <textarea name="postarea" id="1" cols="10" rows="10"></textarea>
        <button>add post</button>
        <button>remove</button>

    </div>
       <div className={s.posts}>
          <Post message = {postsData[0].message} likesCount = {postsData[0].likesCount}/>
          <Post message = {postsData[1].message} likesCount = {postsData[1].likesCount}/>

       </div>


</div>

)
}
export default MyPosts;