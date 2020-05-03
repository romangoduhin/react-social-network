import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></div>
            <div className={s.item}><NavLink to="/collection" activeClassName={s.activeLink}>Collection</NavLink></div>
            <div className={s.item}><NavLink to="/clothing" activeClassName={s.activeLink}>Clothing</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
        </nav>
    )
}
export default NavBar;