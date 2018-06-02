import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import '../Assets/css/propeller.min.css';
import '../themes/css/propeller-theme.css';
import '../themes/css/propeller-admin.css';
import  '../Assets/fonts/iconic/css/material-design-iconic-font.min.css';
import  '../Assets/css/main.css';
import  '../Assets/css/login.css';
import '../Assets/css/util.css';
import images from '../Assets/img/bg-01.jpg';
import logo from '../Assets/img/logo.png';

class Login extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        username: '',
        password: ''
      };
    }

  render() {
    return (
      <div className="App">
      <div className="limiter">
       <div className="container-login100" style={{backgroundImage: "url(" + images + ")"}}>
        <div className="wrap-login100">
         <form className="login100-form validate-form">
           <span className="login100-form-logo">
            <img src={logo} alt="logo" className="img" width="60px"/>
           </span>

           <span className="login100-form-title p-b-34 p-t-27">
            Log in
          </span>

          <div className="wrap-input100 validate-form" data-validate="Enter Username">
            <input className="input100" type="text" name="loginname" placeholder="Username" />
            <span className="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div className="wrap-input100 validate-input" data-validate="Enter password">
            <input className="input100" type="password" name="loginpassword" placeholder="Password" />
            <span className="focus-input100" data-placeholder="&#xf191;"></span>
          </div>

          <div className="contact100-form-checkbox">
            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
            <label className="label-checkbox100" htmlFor="ckb1">
              Remember me
            </label>
          </div>

          <div className="container-login100-form-btn">
            <button className="login100-form-btn">
              Login
            </button>
          </div>
          <div>

          <div className="text-center p-t-90">
            <a className="txt1" href="#">
              Forgot Password?
            </a>
          </div>
          </div>
          <div className="in">&copy; 2018 Yrals Digital Inc. All rights reserved.</div>
      </form>
      </div>
      </div>
      </div>
        </div>
    );
  }
}

export default Login;
