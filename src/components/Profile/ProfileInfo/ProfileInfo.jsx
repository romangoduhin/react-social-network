import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo =(props)=>{
   if (!props.profile){
     return <Preloader/>
   }
return(

        <div className={s.profileWrapper}>
            <div className={s.profileAvatar}>
              <img src={props.profile.photos.large} alt="aaa"/>
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