import React from "react";
import s from "./Post.module.css"
const Post =(props)=>{
return(


    <div className={s.item}>
               <img src="https://www.meme-arsenal.com/memes/ffada9854820b4c54445f5622a0d0771.jpg" alt="avatar"/>
           <div className={s.item}>{props.message}</div>

        <span>like {props.likes} </span>
    </div>


)
}
export default Post;