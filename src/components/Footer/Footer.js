import React, { Component } from 'react';
import  '../Assets/css/style.css';
import { Panel } from 'react-bootstrap';

const style = {
 postion:{
 	bottom:'-200pt'
  }
};

export class Footer extends Component {
  render() {
    return (
		<Panel className="footer" style={style.postion} >
		  <Panel.Footer>&copy; 2018 Yrals Digital Inc. All rights reserved.</Panel.Footer>
		</Panel>
    );
  }
}
