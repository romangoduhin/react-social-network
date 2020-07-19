import React from "react"
import preloader from "../../../assets/images/preloader.gif"
import s from "./Preloader.module.css"

let Preloader =(props)=>{
    return <div className={s.preloader}>
        <img src={preloader} alt=""/>
    </div>
}
export default Preloader