import React from 'react'
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
function Login() {
  return (
    <div className="main">
        <div className="content">
            <img src={logo} alt="" />
            <p>Sign In/Sign Up</p>
            <div className="email">
                <p>Email:</p>
                <input type="email" placeholder="Enter a email address"/>
            </div>
            <div className="password">
                <p>Password:</p>
                <input type="text" placeholder="Enter the password"/>
            </div>
            <p className="black">By “logging in to Tasty-Burgers”, you agree to our <Link to="/">Privacy Policy</Link> and <Link to="/">Terms & Conditions.</Link></p>
            <button className='sign-in'><Link to="/" style={{"color":"white","textDecoration":"none"}}>Sign In</Link></button>
            <p>or</p>
            <p>Create a new account <Link to="/">Create Account</Link> here.</p>
        </div>
    </div>
  )
}

export default Login;
