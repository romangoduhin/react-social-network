import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
const Profile =()=>{
return(

    <div className={s.content}>
        <div className={s.profileWrapper}>
        <div className={s.profileAvatar}>
    <img src="https://sun9-13.userapi.com/nQwBKHcZrq9odU8mtP4iEUagTSiPzY43tndnYg/NNabaEe2ufQ.jpg" alt="avatar"/>
        </div>
        <div className={s.profileInformation}>
            <div>
                <ul>
                    <li>Country</li>
                    <li>City</li>
                    <li>Job</li>
                    <li>Education</li>
                    <li>Nickname</li>
                </ul>
            </div>
        </div>
            <div className={s.profileMusicPlayer}>
                Music
                Music
                Music
                Music
            </div>
        </div>
       < MyPosts/>
</div>


)
}
export default Profile;