import React from 'react';
import s from './Users.module.css';

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
                           props.unfollow(u.id)
                        }}>unfollow
                        </button>
                        :
                        <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                            props.follow(u.id)

                        }}>follow
                        </button>}
                    </div>
                    </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>

                    </span>
                </div>
            )
        }
    </div>
};
export default Users;