import React from "react";
import s from "./MyPosts.module.css"
const MyPosts =()=>{
return(

<div>
        My Posts
    <div>
            New post
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>add post</button>
        <button>remove</button>

    </div>
       <div className="posts">
           <div className={s.item}>
               <img src="https://www.meme-arsenal.com/memes/ffada9854820b4c54445f5622a0d0771.jpg" alt="avatar"/>post</div>
           <div className={s.item}>post1</div>
           <div className={s.item}>post2</div>
       </div>


</div>

)
}
export default MyPosts;