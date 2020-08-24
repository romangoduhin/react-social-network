import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo =()=>{
return(

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




)
}
export default ProfileInfo;