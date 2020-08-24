import React from 'react';
import s from './Users.module.css';

import userPng from "../../assets/images/userPng.png"

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
                    <div><img className={s.photo} src={u.photos.small != null ? u.photos.small : userPng} alt=""/></div>
                    <div>{u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>follow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>unfollow</button>}</div>
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