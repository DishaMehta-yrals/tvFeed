import React, { Component } from 'react';
import  '../Assets/css/style.css';
import ReactPlayer from 'react-player'

const style = {
 padding:{
   padding:10,
   paddingTop: 0,
  },
  width:{
    width: '90%'
  },
  videoHeight:{
    height:'100%'
  }
};

class Flowvideo extends Component {
  constructor(props) {
    super();
    this.state={
      vsrc : props.initialsrc,
      status: 0,
      played: 0,
      data :"changed"
    }
}

handleClick(){
  this.setState({
    vsrc: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
  })
}

// check_time(time_get,start,end,txt,img_src){
//   var abc =[];
//   if(time_get >=start && time_get <=end ){
//     var text = txt;
//     this.props.changedata(this.state.data);
//     console.log(text);
//   }
// }

check_time = (time_get,start,end,txt,img_src) =>{
  if(time_get >=start && time_get <=end ){
    this.setState({
      data:txt
    });
    this.props.changedata(this.state.data);
  }
}

onChangeData(){
  this.props.changedata(this.state.data);
}

load = url => {
  this.setState({
    url,
    played: 0,
    loaded: 0
  })

}

onPlay = () => {
  console.log('onPlay')
  // this.props.changedata(this.state.data);
  this.setState({ playing: true })
}

onPause = () => {
  console.log('onPause')
  this.setState({ playing: false })
}

onProgress = state => {
var time = state.playedSeconds;
console.log(time);
this.check_time.bind(this,time,0,1,"check it","");
this.check_time(time,1,9,"check it","");
this.check_time(time,9,11,"check it NEW","");
this.check_time(time,11,15,"check it net","");
  if (!this.state.seeking) {
    this.setState(state)
  }
}
render() {
const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state
return (
  <div className="col-sm-6" id="video" style={style.padding}>  
    <ReactPlayer
      className="animated-background" 
      style={style.videoHeight} 
      url={this.props.url} 
      muted={true} 
      volume={1} 
      controls={true}
      onProgress={this.onProgress.bind(this)}
      onPlay={this.onPlay.bind(this)}
      onPause={this.onPause}
    />
    <button onClick={this.onChangeData.bind(this)}>check</button>
  </div>
  )}
}

export default Flowvideo