import React, { Component } from 'react';
import  '../Assets/css/style.css';
import nodata from '../Assets/img/nodata.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flag from 'material-ui/svg-icons/content/flag';
import Publish from 'material-ui/svg-icons/editor/publish';
import App from '../Video/TestAppend';

const styles = theme => ({
  root: {
    marginRight: 20,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});
const style = {
  marginRight: 20,
  float:'right',
  boxShadow:"none",
  marginTop:"-7px",
  img:{
    width: '100%',
    height: '20pc',
  }
};

class SideData extends Component {

constructor(props) {
  super(props);
  shown: true,
  this.state = {isToggleOn: true};
  this.handleClick = this.handleClick.bind(this);
}

toggle() {
  this.setState({
    shown: !this.state.shown
  });
}

handleClick() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

render() {
  const { classes } = this.props;
  var shown = {
    display: this.state.shown ?  "none" :"block" 
  };
  
  var hidden = {
    display: this.state.shown ? "none" : "block"
  }

let data =[];

return (
  <MuiThemeProvider>
    <div className="col-sm-6">
      <div className="story-title">{this.props.title}
        <Tooltip id="tooltip-fab" title="Publish">
          <FloatingActionButton mini={true} disabled={this.state.isToggleOn ? true : false} style={style} >
            <Publish />
          </FloatingActionButton>
        </Tooltip>
        <FloatingActionButton secondary={this.state.isToggleOn ? true : false}  mini={true} style={style} onClick={this.handleClick}>
          <Flag />
        </FloatingActionButton>
      </div>
      <div className="boxs animated-background">
        {this.props.title==="Shah to meet J&K core group" ? 
        <div style={ shown }>
          <App data={data} txtData={this.props.data}/>          
        </div> : 
        <div style={ shown } > 
          <Paper>
            <img src={nodata} alt="no data" />
          </ Paper>
        </div>
      }</div>
    </div>
  </ MuiThemeProvider>
  )}
}

SideData.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles) (SideData)