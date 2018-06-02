import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {LoginCheck,SessionCheck} from '../Services/LoginCheck';
// import LoginCheck from "../Services/LoginCheck";
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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
     username: '',
     password: '',
     redirectToReferrer: false,
     showError: false,
     ErrorMessage: '',
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);

  }
  componentWillMount(){
      if(SessionCheck()){
          this.setState({
            redirectToReferrer: true
          });
      }
      else{
          this.setState({
            redirectToReferrer: false
          });
      }
  }
  handleRequestClose = () => {
    this.setState({
      showError: false,
    });
  };
  validate(){
      if(!this.state.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
          this.setState({showError: true});
          this.setState({ErrorMessage: "Email is invalid!"});

          return false;
      }
      if(this.state.password == ""){
          this.setState({showError: true});
          this.setState({ErrorMessage: "Password is incorrect!"});

          return false;
      }
      this.setState({showError: false});
      return true;
  }

  login() {
    if(this.state.username && this.state.password && this.validate()){
        var PrState = this;
        var Res = LoginCheck("Login", this.state.username,this.state.password);
        Res.then(function(result) {
            if(result.data.Login == null){
                PrState.setState({showError: true,ErrorMessage: "Provided credentials are incorrect!"});

            }
            else{
                sessionStorage.setItem("UserData",result.data.Login);
                sessionStorage.setItem("UserName",result.data.Login.name);
                PrState.setState({
                  redirectToReferrer: true
                });
            }

        }, function(err) {
            PrState.setState({
                showError: true,
              });
        })

    }

   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  render() {

     if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }

     return (
         <div className="App">
         <div className="limiter">
          <div className="container-login100" style={{backgroundImage: "url(" + images + ")"}}>
           <div className="wrap-login100">

              <span className="login100-form-logo">
               <img src={logo} alt="logo" className="img" width="60px"/>
              </span>

              <span className="login100-form-title p-b-34 p-t-27">
               Log in
             </span>

             <div className="wrap-input100 validate-form" data-validate="Enter Username">
               <input className="input100" type="text" name="username" placeholder="Username" onChange={this.onChange}/>
               <span className="focus-input100" data-placeholder="&#xf207;"></span>
             </div>

             <div className="wrap-input100 validate-input" data-validate="Enter password">
               <input className="input100" type="password" name="password" placeholder="Password" onChange={this.onChange} />
               <span className="focus-input100" data-placeholder="&#xf191;"></span>
             </div>

             <div className="contact100-form-checkbox">
               <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
               <label className="label-checkbox100" htmlFor="ckb1">
                 Remember me
               </label>
             </div>

             <div className="container-login100-form-btn">
               <button className="login100-form-btn" onClick={this.login}>
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

         </div>
         </div>
         </div>
         <MuiThemeProvider>
         <Snackbar
          open={this.state.showError}
          message={this.state.ErrorMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
          />
         </MuiThemeProvider>
           </div>
    );
  }
}

// LoginIN = graphql(GetLogin, queryOptions)(LoginIN);
export default Login;
