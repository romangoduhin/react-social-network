import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = ()=>{
    return(
<div>
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}><NavLink to="/dialogs/1" activeClassName={s.activeLink}>Roman</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/2" activeClassName={s.activeLink}>Vlad</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/3" activeClassName={s.activeLink}>Sanye</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/4" activeClassName={s.activeLink}>Ilya</NavLink></div>
            <div className={s.dialog}><NavLink to="/dialogs/5" activeClassName={s.activeLink}>Roma</NavLink></div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi its my first project</div>
            <div className={s.message}>Wow its wonderful</div>
            <div className={s.message}>Yes is it</div>
</div>
    </div>
</div>
    )
}
export default Dialogs;