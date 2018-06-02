import React, { Component } from 'react';
import  '../Assets/css/style.css';
import  img1 from '../Assets/img/03.png';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: props.data,
			txt : props.txtdata
		};
	}
	addMore  = () => {
		let data = this.state.data;
		let size = data.length + 1;
		data.unshift(size);
		this.setState({data});
	}
	render = () => {
		let data = this.state.data;
		return (
			<div> 
			<div className="box">{this.props.txtdata}
            <ul id="first-list">
            	<button onClick={() => this.addMore()}>ClickMe</button>
				{data.map(i => <li key={i}>
				  <span></span>
				  <div className="col-sm-6 nopadding">
		              <div className="title">{this.props.txtData}</div>
		              <div className="info">the best animation , the best toturials you would ever see .</div>
		          </div>
	              <div className="info-img"><img src={img1} alt="imgs"/></div>
	              <div className="time">
	                  <span>12:00 AM</span>
	                  <span>12:00 AM</span>
	              </div>
				</li> 
				)}
              <li>
                  <span></span>
                  <div className="title">comment #01</div>
                  <div className="info">the best animation , the best toturials you would ever see .</div>
                  <div className="time">
                      <span>12:00 AM</span>
                      <span>12:00 AM</span>
                  </div>
              </li>     
            </ul>
          </div>
			</div>
		);
	}
}

export default App