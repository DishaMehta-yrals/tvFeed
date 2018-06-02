import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Dashboard from '../components/Pages/Dashboard';
import Login from '../components/Login/LoginIn';
import { Footer } from '../components/Footer/Footer';
export class Root extends Component {

  constructor(props) {
      super();
      this.state={
        title: 'Kanataka Elections',
      }
    }


onChangeTitle(newName){
	console.log(newName)
    this.setState({
      title: newName
    })
  }

  render() {
    return (
		<div>
       <Router>
       <div>
           <Route exact path="/" component={Login} />
           <Route exact path="/home" component={Dashboard} /> 
       </div>
     </Router>
		</div>
    );
  }
}
