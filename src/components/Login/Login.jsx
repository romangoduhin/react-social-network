import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilits/validators/validators";
import {loginUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/></div>
            <div><Field placeholder={"Password"} validate={[required]} name={"password"} type={"password"}
                        component={Input}/></div>
            <div><Field name={"rememberMe"} component={Input} type={"checkbox"}/> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>)

}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)

    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {loginUser})(Login);