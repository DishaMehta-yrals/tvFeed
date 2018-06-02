import React, { Component } from 'react';
import  '../Assets/css/style.css';
import  img1 from '../Assets/img/headlines.png';
import  img2 from '../Assets/img/shah.png';
import  img3 from '../Assets/img/03.png';
import  img4 from '../Assets/img/04.png';
import  img5 from '../Assets/img/05.png';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ReactPlayer from 'react-player'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Test from '../TopBar/test'
import Duration from '../TopBar/Duration'
const style = {
  paper:{
    width: '16%',
    minHeight :'180px',
    maxHeight :'180px',
    margin: 15,
    maxHeight: '120px',
    textAlign: 'center',
    display: 'inline-block',
  },
  margin:{
    margin:10,
  },
  videoHeight:{
    height:'10%'
  },
  customContentStyle: {
    width: '90%',
    maxWidth: 'none',
  },
  add:{
    top:"-60px",
    margin: 15,
    maxHeight: '120px',
    textAlign: 'center',
    position:"relative",
  },
   textField: {
    width: 200,
  },
  addnew:{
    maxHeight: '120px',
    width:"100%",
    maxHeight :'180px',
    visibility: "hidden",
    textAlign: 'center',
    position:"relative",
  },
  width:{
    width:"100px",
    margin:10,
    marginTop:0,
  },
  bg:{
    background:"#eee",
    marginBottom: '20px',
    cursor: 'pointer',
  },
  display:{
    display:"block",
    width:"100%",
    maxHeight: '120px',
    marginBottom:5,
  },
  background:{
    background:'#fff',
    paddingTop: '5px',
    paddingBottom: '5px',
    marginTop: '-5px',
  },
  button:{
    width:'100%',
  },
  input: {
    display: 'none',
  },
};

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      shown: true,
      titleTop:"changeLink",
      file: '',
      imagePreviewUrl: '',
      open:false,
      opennew:false,
      imageSave: '',
      value: '',
      intime: '',
      outtime: '',
      duration:0,
      date : new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInTime = this.handleChangeInTime.bind(this);
    this.handleChangeOutTime = this.handleChangeOutTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  } 
  
  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  onChangeLink(title,src){
    this.props.changeLink(title,src)
    console.log(title)
    console.log(src)
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleOpennew = () => {
    this.setState({opennew: true});
  };

  handleClose = () => {
    this.setState({open: false});
    this.setState({opennew: false});
  };

  handleSubmit = (event) => {
    console.log("handleSubmit");
    var storyname = this.state.value;
    this.setState({
      open: false,
      file: '',
      imagePreviewUrl: '',
    });  
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value,
      intime: event.target.intime
    });
  }
  
  handleChangeInTime(event) {
    this.setState({
      intime: event.target.value,
    });
  }

  handleChangeOutTime(event) {
    this.setState({
      outtime: event.target.value,
    });
  }


  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        imageSave: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  
  render() {
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state
    let {imagePreviewUrl} = this.state;
    let {imageSave} = this.state;
    let {value} = this.state;
    let {intime} = this.state;
    let {outtime} = this.state;
    let $imagePreview = null;
    let $imageSave = null;
    let $value = null;
    let $outtime = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }
    if (imageSave) {
      $imageSave = (
            <Paper style={style.paper} zDepth={2} className="animated-background"  onClick={this.onChangeLink.bind(this,"Class 11 Allegdly raped",'https://s3.amazonaws.com/tv-feed-analysis/sanyo_Class+11+student+allegedly+raped.m3u8')}>
              <div>
                <img src={imageSave} style={style.display}/>
                <div style={style.background} >
                  <span className={'title'}>{value} </span><br/> 
                  <span className={'Time'}>{intime} - {outtime}</span>
                </div> 
              </div> 
            </Paper>
            );

    } else {
      $imageSave = (<div className="previewText"></div>);
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];

    var shown = {
      display: this.state.shown ? "block" : "none"
    };
    
    var hidden = {
      display: this.state.shown ? "none" : "block"
    }
    
    return (
      <MuiThemeProvider>
      <div>
        <div>
         {this.props.id==="top" ? <div style={ shown }>
            <Paper style={style.paper} zDepth={2} className="animated-background" onClick={this.onChangeLink.bind(this,"HeadLines","https://s3.amazonaws.com/tv-feed-analysis/sanyo_Headlines.m3u8")}>         
              <img src={img1} alt="img" style={style.display}/>
              <div style={style.background} >
                <span className={'title'}>HeadLines</span><br/> 
                <span className={'Time'}>00:00:00 - 00:03:40</span> 
              </div>
            </Paper>

            <Paper style={style.paper} zDepth={2} className="animated-background" onClick={this.onChangeLink.bind(this,"Shah to meet J&K core group",'https://s3.amazonaws.com/tv-feed-analysis/sanyo_Shah+to+meet+J&K+core+group.m3u8','showSideData')}>
              <img src={img2} alt="img" style={style.display}/>
              <div style={style.background} >
                <span className={'title'}>Shah to meet J&K core group</span><br/> 
                <span className={'Time'}>00:03:40 - 00:04:40</span>
              </div> 
            </Paper>

            <Paper style={style.paper} zDepth={2} className="animated-background" onClick={this.onChangeLink.bind(this,"Bengal poll bawal",'https://s3.amazonaws.com/tv-feed-analysis/sanyo_Bengal+poll+candidates+under+attack.m3u8')}>
              <img src={img3} alt="img" style={style.display}/>
              <div style={style.background} >
                <span className={'title'}>Bengal poll bawal</span><br/> 
                <span className={'Time'}>00:04:40 - 00:08:06</span>
              </div> 
            </Paper>

            <Paper style={style.paper} zDepth={2} className="animated-background"  onClick={this.onChangeLink.bind(this,"Escape from Aurangabad jail",'https://s3.amazonaws.com/tv-feed-analysis/sanyo_Escape+from+Aurangabad+jail.m3u8')}>
              <img src={img4} alt="img" style={style.display}/>
              <div style={style.background} >
                <span className={'title'}>Escape from Aurangabad jail</span><br/> 
                <span className={'Time'}>00:08:06 - 00:09:41</span>
              </div> 
            </Paper>

            <Paper style={style.paper} zDepth={2} className="animated-background"  onClick={this.onChangeLink.bind(this,"Class 11 Allegdly raped",'https://s3.amazonaws.com/tv-feed-analysis/sanyo_Class+11+student+allegedly+raped.m3u8')}>
              <img src={img5} alt="img" style={style.display}/>
              <div style={style.background} >
                <span className={'title'}>Class 11 Allegdly raped</span><br/> 
                <span className={'Time'}>00:09:41 - 00:10:40</span>
              </div> 
            </Paper>
          </div> : <div style={ shown } > 
            <div>
            <Paper style={style.paper} zDepth={2} className="animated-background" onClick={this.onChangeLink.bind(this,"HeadLines","https://s3.amazonaws.com/tv-feed-analysis/sanyo_Headlines.m3u8")}> 
                <img src={img5} alt="img" style={style.addnew}/>
                <FloatingActionButton style={style.add} mini={true} secondary={true}>
                  <ContentAdd onClick={this.handleOpen}/>
                </FloatingActionButton>                       
              </Paper>
              {$imageSave}
            </div>
          </div>   
          }
          {
            this.props.id=="top" ?
            <button onClick={this.toggle.bind(this)}>
              {this.state.shown ? <ArrowDown /> : <ArrowUp />}
            </button> : null
          }
        </div>
        <Dialog
          actions={actions}
          title="Define Story"
          modal={false}
          open={this.state.open}
          autoScrollBodyContent={true}
          contentStyle={style.customContentStyle}
        >
        <div className="col-sm-12">
          <div className="col-sm-6">
            <ReactPlayer
              className="animated-background" 
              style={style.videoHeight}
              width="100%" 
              height="100%" 
              url={this.props.src} 
              muted={true} 
              volume={1} 
              controls={true}
              onDuration={this.onDuration}
            />
          </div>
          <div className="col-sm-6">
            <div className="col-sm-6">  
              <TextField 
                required={true}
                hintText="Story Name"
                floatingLabelText="Story Name"
                fullWidth={true} 
                value={this.state.value} onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6">
              <TextField
                intime={this.state.intime} 
                onChange={this.handleChangeInTime}
                type="time"
                onChange={this.handleChangeInTime}
                floatingLabelText="In Time"
                defaultValue="00:00:00"
                style={style.width}
                step="2"
              />  
              <TextField
                style={style.width}
                type="time"
                style={style.width}
                step="2"
                defaultValue="00:00:00"
                floatingLabelText="Out Time"
                outtime={this.state.outtime} 
                onChange={this.handleChangeOutTime}
              />
              <input
                accept="image/*"
                style={style.input}
                id="raised-button-file"
                onChange={(e)=>this._handleImageChange(e)}       
                type="file"
              />
            </div>
            <div className="col-sm-12 upload">
              <label htmlFor="raised-button-file" className="col-sm-6 nopadding">
                <Button 
                  variant="raised" 
                  color="primary" 
                  component="span" 
                  style={style.button}>
                  Upload Image
                </Button>
              </label>
              <div className="imgPreview col-sm-6">
                {$imagePreview}
              </div>        
            </div>
          </div>
        </div>
        </Dialog>

        <Dialog
          actions={actions}
          title="Define Story"
          modal={false}
          open={this.state.opennew}
          autoScrollBodyContent={true}
          contentStyle={style.customContentStyle}
        >
          <Test />
        </Dialog>
      </div>
      </MuiThemeProvider>
    )
  }
}
export default TopBar;