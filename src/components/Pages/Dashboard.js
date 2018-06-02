import React, { Component } from 'react';
import  '../Assets/css/style.css';

import  Header  from '../Header/Header';
import {Footer}  from '../Footer/Footer';
import Feed from '../Pages/Feed';

import {Redirect} from 'react-router-dom';
import {LoginCheck,SessionCheck} from '../Services/LoginCheck';

// var myClassNammes = classNames('pmd-content', 'content-area', 'dashboard');

class Dashboard extends Component {
  constructor(props){
    super();
    this.state = {
      title: 'News Bulletin',
      src: 'https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8',
    };
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

  onChangeTitle(newName,src,id){
    this.setState({
      title: newName,
      src: src,
      id :id,
    })
  }

  render() {
      if (!this.state.redirectToReferrer) {
           return (<Redirect to={'/'}/>)
         }
    const {Posts} = this.state;
    return (
        <div className="App">
          <Header changeTitle={this.onChangeTitle.bind(this)} />
          <Feed title={this.state.title} src={this.state.src} id={this.state.id} />
          <Footer />
        </div>
    );
  }
}

export default Dashboard;
