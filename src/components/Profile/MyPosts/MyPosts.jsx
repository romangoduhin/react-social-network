import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPosts =()=>{
return(

<div>
        My Posts
    <div>
            New post
        <textarea name="" id="" cols="10" rows="10"></textarea>
        <button>add post</button>
        <button>remove</button>

    </div>
       <div className={s.posts}>
          <Post message = "First post" likes = '2'/>
          <Post message = "Second post" likes = '3'/>
       </div>


</div>

)
}
export default MyPosts;