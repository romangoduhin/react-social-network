import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPng from "../../assets/images/userPng.png"
let Users = (props) => {
    let getUsers=()=>{if (props.users.length===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUsers(response.data.items);
        });
    }}

    return <div>
     <button onClick={getUsers}>GET USERS</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img className={s.photo} src={u.photos.small != null ? u.photos.small : userPng} alt=""/></div>
                    <div>{u.followed ?
                        <button onClick={()=>{props.unfollow(u.id)}}>follow</button> :
                        <button onClick={()=>{props.follow(u.id)}}>unfollow</button>}</div>
                    </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                    </span>
                </div>
            )
        }
    </div>
};

export default Users;