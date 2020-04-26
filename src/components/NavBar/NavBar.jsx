import React from "react";
import s from "./NavBar.module.css"
const NavBar =() =>{
    return(
        <nav className={s.nav}>
            <div className={`{$s.item} {$s.active}`}><a href="">Profile</a></div>
            <div className={s.item}><a href="">Collection</a></div>
            <div className={s.item}><a href="">Sneaker</a></div>
            <div className={s.item}><a href="">Clothing</a></div>
            <div className={s.item}><a href="">Other</a></div>
        </nav>
    )
}
export default NavBar;