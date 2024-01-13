import React from 'react'
import {useState, useRef } from "react";
import {CSSTransition} from "react-transition-group"
import user_icon from '../Assets/user-icon.png'
import email_icon from '../Assets/email-icon.png'
import password_icon from '../Assets/password-icon.png'
import logo from '../Assets/logo250-156.png'
import login_icon from '../Assets/login-icon.png'
import {handleLogin, handleSignup} from '../Util/AuthHelper'
import './Styles/LoginSignUp.css'

function LoginSignUp() {

    //Variable for either login or sign up.
    const [action,setAction] = useState(true);
    //Variable for username.
    const [username, setUsername] = useState("");
    //Variable for password.
    const [password, setPassword] = useState("");
    //Variable for email.
    const [email, setEmail] = useState("");
    //Variable for seller or not.
    const [role, setRole] = useState("");

    const loginData =  {
        username: username,
        password: password
    }

    const signupData =  {
        username: username,
        password: password,
        email: email,
        role: role
    }

    const emailTransitionRef = useRef(null);
    const radioTransitionRef = useRef(null);

    const handleClickLogin = () => {
        setAction(true);
    }

    const handleClickSignUp = () => {
        setAction(false)
    }

    const handleCommit = () => {
        if(action){
            if(checkLoginFields()){
                handleLogin(loginData);
            }
        }else{
            if(checkRegisterFields()){
                handleSignup(signupData);
            }
        }
    }

    const checkLoginFields = () => {
        if(username === "" || password === ""){
            alert("Please fill all the fields.");
            return false;
        }
        return true;
    }

    const checkRegisterFields = () => { 
        if(username === "" || password === "" || email === "" || role === ""){
            alert("Please fill all the fields.");
            return false;
        }
        return true;
    }

    return (
    <div className='container'>
        <div className='header'>
            <div className="logo"></div>
                <img src={logo} alt="" />
        </div>
        <div className="inputs">
            <CSSTransition in={action} timeout = {250} appear = {true} classNames="input"  nodeRef={emailTransitionRef}> 
                <div ref = {emailTransitionRef} className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='E-mail' value={email} onChange = {(e) => setEmail(e.target.value)} />
                </div>
            </CSSTransition>
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Username' value={username} onChange = {(e) => setUsername(e.target.value)} />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' value={password} onChange = {(e) => setPassword(e.target.value)} />
            </div>
            <CSSTransition in={action} timeout = {250} appear = {true} classNames="input-radio" nodeRef={radioTransitionRef}> 
                <div ref = {radioTransitionRef} className= "input-radio">
                    <input type="radio" name="user" value ="Customers" onChange = {(e) => setRole(e.target.value)} />Customer
                    <input type="radio" name="user" value ="Sellers"  onChange = {(e) => setRole(e.target.value)} style={{marginLeft: '15px'}}/>Seller
                </div>
            </CSSTransition>
  
        </div>

        <div className="customer-seller"></div>
        <div className="checkbox-customer"></div>
        <div className="checkbox-user"></div>

        <div className="button-container">
            <button className = {action === true ? "pressed" : ""} type='button' onClick={handleClickLogin}>Login</button>
            <button className = {action === false ? "pressed" : ""} type='button' onClick={handleClickSignUp}>Sign Up</button>
            <button id = 'login'><img src={login_icon} alt="" onClick={handleCommit}/></button>
        </div>

        <div className="forgot-password">
            <span>Forgot your password?</span>
        </div>
    </div>
  )
}

export default LoginSignUp