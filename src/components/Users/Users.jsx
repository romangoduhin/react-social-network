import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import userPng from "../../assets/images/userPng.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>})
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPng} alt=""/>
                        </NavLink>

                    </div>

                    <div>{u.followed ?

                        <button  disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {

                            props.toggleFollowingProgress(true,u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials:true,
                                headers:{
                                "API-KEY":"5fafdf2e-a864-4d92-aeb4-b2674545b1ae"
                                }}).then(response => {
                                    if (response.data.resultCode == 0){ props.unfollow(u.id)}
                                props.toggleFollowingProgress(false,u.id)
                            });
                        }}>unfollow
                        </button>
                        :
                        <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {

                            props.toggleFollowingProgress(true,u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                     headers:{
                                        "API-KEY":"5fafdf2e-a864-4d92-aeb4-b2674545b1ae"
                                    }}).then(response => {
                                    if (response.data.resultCode == 0){ props.follow(u.id)}
                                    props.toggleFollowingProgress(false,u.id);
                                });
                        }}>follow
                        </button>}
                    </div>
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