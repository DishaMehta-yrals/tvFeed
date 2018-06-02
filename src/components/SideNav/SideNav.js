import React, { Component } from 'react';
import  '../Assets/css/style.css';
import {Link} from 'react-router';

export class SideNav extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.toggleHidden.bind(this)} >
          Click to show modal
        </button>
        {!this.state.isHidden && <Child />}
      </div>
    )
  }
}

const Child = () => (
        <div id="mySidenav" className="sidenav">
          <a className="closebtn" onClick={this.toggleHidden.bind(this)}>&times;</a>
          <Link to={'Dashboard'}>Dashboard</Link>
          <Link to={'Trending'}>Services</Link>
          <Link to={'Dashboard'}>Clients</Link>
          <Link to={'Dashboard'}>Contact</Link>
        </div>
)

