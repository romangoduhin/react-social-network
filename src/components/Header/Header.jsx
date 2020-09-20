import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../redux/auth-reducer";

const Header = (props) => {
    return (<header className={s.header}>
        <img
            src="https://oc7.ocstatic.com/images/image-converter.png"
            alt="img"/>
        <div className={s.loginBLock}>
            {props.isAuth ? <div>{props.login } - <button onClick={props.logoutUser}>Log out</button></div>: <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>)

}
export default Header;