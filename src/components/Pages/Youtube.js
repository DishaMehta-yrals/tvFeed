import React, { Component } from 'react';
import  '../Assets/css/style.css';
import  thumb from '../Assets/img/03.png';
import FlatButton from 'material-ui/FlatButton';
import ReactPlayer from 'react-player'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Link from 'material-ui/svg-icons/content/link';
import Check from 'material-ui/svg-icons/navigation/check';
import Close from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
// var myClassNammes = classNames('pmd-content', 'content-area', 'Youtube');
const style={
  title:{
    textAlign : "left",
    width: '100%',
    fontWeight: 'BOLD',
    display: 'inline-block',
    textTransform: 'capitalize',
    display: 'inline-block',
  },
  left:{
    textAlign:'left',
  },
  right:{
    margin:"10px 0px",
    textAlign : "right",
    background:'#fff',
  },
  margin :{
  marginRight: '20px',
  },
  img:{
    background:"#fff",
    width:"100%"
  },
  paper:{
  textAlign: 'center',
  display: 'inline-block',
    height: "100%",
    width: "100%",
    padding:"0px 0px"
  },
  button:{
    color:'#999',
  },
  nopadding:{
    padding:"0px 0px 0",
    paddingBottom:10,
  },
  view:{
    display: 'inline-block',
    float: 'left',
    marginTop: '10px',
    color: '#999',
  }
}
class Youtube extends Component {
  constructor(props){
    super();
    this.state = {
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper style={style.paper}>    
        <div className="col-sm-12">
          <div className="col-sm-8">
              <ReactPlayer
                width="100%"
                url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
                muted={true} 
                volume={1} 
                controls={true}
              />
              <div style={style.right}>
                <div className="title" style={style.title}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="details">
                  <div className="views" style={style.view}>1000 views</div>
                   <IconButton iconStyle ={style.button} tooltip="Copy to Clipborad" touch={true} tooltipPosition="bottom-center">
                    <Link />
                  </IconButton>
                   <IconButton tooltip="Approve" iconStyle ={style.button} touch={true} tooltipPosition="bottom-center">
                    <Check />
                  </IconButton>
                   <IconButton tooltip="Reject" iconStyle ={style.button} touch={true} tooltipPosition="bottom-center">
                    <Close />
                  </IconButton>
                </div>
              </div>
              <Divider />
          </div>
          <div className="col-sm-4" style={style.nopadding}>
              <div className="col-sm-12" style={style.nopadding}>
                <div className="col-sm-6" style={style.nopadding}>
                  <img src={thumb} style={style.img} alt="thumb" />
                </div>
                <div className="col-sm-6">
                  <div className="title" style={style.left}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                <Divider />
              </div>
              <div className="col-sm-12" style={style.nopadding}>
                <div className="col-sm-6" style={style.nopadding}>
                  <img src={thumb} style={style.img} alt="thumb" />
                </div>
                <div className="col-sm-6">
                  <div className="title" style={style.left}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                <Divider />
              </div>
              <div className="col-sm-12" style={style.nopadding}>
                <div className="col-sm-6" style={style.nopadding}>
                  <img src={thumb} style={style.img} alt="thumb" />
                </div>
                <div className="col-sm-6">
                  <div className="title" style={style.left}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                <Divider />
              </div>
              <div className="col-sm-12" style={style.nopadding}>
                <div className="col-sm-6" style={style.nopadding}>
                  <img src={thumb} style={style.img} alt="thumb" />
                </div>
                <div className="col-sm-6">
                  <div className="title" style={style.left}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
                <Divider />
              </div>
          </div>
        </div>
        </Paper>
      </MuiThemeProvider>

    );
  }
}

export default Youtube;
