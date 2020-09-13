import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileWrapper}>
            <div className={s.profileAvatar}>
                <img src={props.profile.photos.large} alt=""/>

                <ProfileStatus status={'hey'}/>
            <div className={s.profileInformation}>
                <div>
                    <ul>
                        <li>About me: {props.profile.aboutMe}</li>
                        <li>fullName: {props.profile.fullName}</li>
                        <li>lookingForAJob: {props.profile.lookingForAJob}</li>
                        <li>lookingForAJobDescription:  {props.profile.lookingForAJobDescription}</li>
                    </ul>
                </div>
            </div>

        </div>
        </div>

    )

}
export default ProfileInfo;