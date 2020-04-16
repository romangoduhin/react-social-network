import React from "react";
import s from "./Profile.module.css"
const Profile =()=>{
return(

    <div className={s.content}>
    <img src="https://c7.hotpng.com/preview/817/325/297/sneakers-logo-nike-clothing-sneaker-collecting-sneakers-thumbnail.jpg" alt="img"/>
       <div className="posts">
           <div className={s.item}>post</div>
           <div className={s.item}>post1</div>
           <div className={s.item}>post2</div>
       </div>
</div>


)
}
export default Profile;