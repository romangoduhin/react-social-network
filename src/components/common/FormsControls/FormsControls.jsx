import React from "react"
import s from "./FormsControls.module.css"

const FormsControl = ({input, meta,child, ...props}) => {
    debugger
    let hasError = meta.error && meta.touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>  {meta.error}</span>}
        </div>

    )

}

export const Textarea = (props) => {
    const {input, meta,child, ...restProps} = props;
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>

}
export const Input = (props) => {
    const {input, meta,child, ...restProps} = props;
    return <FormsControl {...props}><input {...input} {...restProps} /></FormsControl>

}
