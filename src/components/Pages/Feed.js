import React, { Component } from 'react';
import  '../Assets/css/style.css';
import Flowvideo from '../Video/Video'
import SideData from '../SideData/SideData'
import TopBar from '../TopBar/TopBar'
import Youtube from '../Pages/Youtube'

var elements = document.getElementsByClassName("column");

class Dashboard extends Component {

  constructor(props) {
      super();
      this.state = {
        titleTop : "Segment 2",
        srcTop : "https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8",
        data :"check"
      };
    }

 onChangeLink(title,src){
    this.setState({
      titleTop: title,
      srcTop: src
    })
  }

  append(newData){
    this.setState({
        data : newData,
    })
  }

  render() {
    var vsrc = "https://s3.amazonaws.com/tv-feed-analysis/6_hour.m3u8";
    return (
      <div className="margin-top">
        <TopBar 
          id={this.props.id}
          src={this.props.src}
          changeLink={this.onChangeLink.bind(this)}
        />
        {
          this.props.id=="top"? 
          <div>        
            <Flowvideo 
              initialsrc={vsrc} 
              url={this.state.srcTop}
              changedata={this.append.bind(this)}
            />
            <SideData 
              title={this.state.titleTop}
              data={this.state.data}
            />
          </div>:
          <div>        
            <Flowvideo 
              initialsrc={vsrc} 
              url={this.props.src}
            />
            <SideData 
              title={this.props.title}
            />
          </div>
        }        
                
      </div>
    );
  }
}

export default Dashboard


