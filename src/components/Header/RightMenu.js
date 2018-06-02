import React, { Component } from 'react';
import  '../Assets/css/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Socialperson from 'material-ui/svg-icons/social/person';
import { blue300, white} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Overlay from '../Pages/Overlay';
import {LoginCheck,SessionCheck} from '../Services/LoginCheck';
import {Redirect} from 'react-router-dom';
import DatePicker from 'material-ui/DatePicker';  
const iconStyles = {
  marginRight: 10,
  float:"right",
  marginTop:10,
  color:"#ffffff"
};

const styles = {
  customWidth: {
    width: 200,
    float:"right",
    margin:0,
    marginRight: 10,
    marginTop:10,
    marginLeft: "-23px",
    color:"#ffffff",  
  },
  width:{
    width:'60%',
  },
  customLabel: {
    color:"#ffffff"  
  },
  dateWidth: {
    width: 90,
    float:"right",
    marginTop:13,
    height: "52px",
    lineHeight : "33px",
    color:"#ffffff"  
  },
};

const data ={
      "Times Now":["Times Now Channels"],
      "Zee News":["Zee News Channels"],
  };

class Header extends Component {
  constructor(props){
    super(props);
    this.child = React.createRef();
    this.state = {
      value: "Times Now",
      ReasonDetails:"Times Now Channels",
      redirectToReferrer: false,
      open:true,
      date : new Date(),
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount(){
    var UserData = sessionStorage.getItem("UserName");
    console.log(UserData);
    this.setState({UserName:UserData});
  }
  
 createSelectItems() {
    let item = [];
      var i ="";
        for (i = 0; i < data[this.state.value].length; i++) {
        item.push(<MenuItem value={data[this.state.value][i]} primaryText={data[this.state.value][i]} color={blue300}/>);
      }
    return item;
  }

  createSelectItemsNew() {
    let item = [];
      var i ="";
        for (i = 0; i < data[this.state.valueNew].length; i++) {
          console.log(data[this.state.valueNew][i].replace(/ /g, "_"));
        item.push(<MenuItem value={data[this.state.valueNew][i].replace(/ /g, "_")} primaryText={data[this.state.valueNew][i]} color={blue300}/>);
      }
    return item;
  }

  handleChange = (e,selectedIndex,menuItem) => {
    this.setState({value:menuItem,
    });
    this.setState({
      ReasonDetails:data[menuItem][0]
    });
  }

  handleChangeNew = (e,selectedIndex,menuItem) => {
    if (data[menuItem]) {
      this.setState({valueNew:menuItem});
      console.log(menuItem);
      this.setState({
        ReasonDetailsNew:data[menuItem][0]
      });
    }
  }

  handleLogout(){
      sessionStorage.clear();
      this.setState({
          redirectToReferrer:true
      })
  }
  render(){
    if (this.state.redirectToReferrer) {
     return (<Redirect to={'/'}/>)
   }
    return (
      <div style={styles.width}>
         <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
              <IconMenu
                iconButtonElement={<IconButton ><Socialperson color={white}/></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                style={iconStyles}
              >
              <MenuItem key={1} primaryText={this.state.UserName}/>
              <Divider />
              <MenuItem key={2} onClick={this.handleLogout} primaryText="Sign out" />
              </IconMenu>
              <DatePicker 
                id="Date" 
                textFieldStyle= {styles.dateWidth} 
                mode= "landscape"
                defaultDate ={this.state.date}
              />
              <DropDownMenu
                value={this.state.ReasonDetails}
                onChange={this.handleChangeNew}
                style={styles.customWidth}
                autoWidth={false}
                color={blue300}
                labelStyle ={styles.customLabel}>
                {this.createSelectItems()}
              </DropDownMenu>
              <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.customWidth}
                autoWidth={false}
                color={blue300}
                labelStyle ={styles.customLabel}>
                <MenuItem value={"Times Now"} primaryText={"Times Now"} />
                <MenuItem value={"Zee News"} primaryText="Zee News" />
              </DropDownMenu>
              </div>
            </MuiThemeProvider>
      </div>
    )
  }
}

export default Header