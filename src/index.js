import React, { Component } from 'react';
import { render } from 'react-dom';
import {Root} from './components/Root';

class Nav extends Component {
  render() {
    return (
        <Root />    
    );
  }
}

render(<Nav />, window.document.getElementById("root"));