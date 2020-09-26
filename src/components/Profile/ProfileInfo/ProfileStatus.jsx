import React, {useEffect, useState} from "react";

const ProfileStatus =(props)=> {

    let [editMode,setEditMode]=useState(false);
    let [status,setStatus]=useState(props.status);
    useEffect (()=>{
        setStatus(props.status);
    },[props.status])
    const activateEditMode=()=>{
        setEditMode(true);
    }
    const deactivateEditMode=()=>{
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange=(e)=>{
        setStatus(e.currentTarget.value)
    }

        return <div>
            {!editMode &&
                <div>
                    <span onClick={activateEditMode}>{props.status || "nostatus"}</span>
                </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} type="text"
                       value={status}/>
            </div>}

        </div>

}

export default ProfileStatus