import React, { Component } from 'react';
import  '../Assets/css/style.css';
import RightMenu from '../Header/RightMenu'
import {List, ListItem} from 'material-ui/List'
import PlayList from 'material-ui/svg-icons/av/playlist-play'
import Play from 'material-ui/svg-icons/av/play-arrow'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import classnames from 'classnames'
import Divider from 'material-ui/Divider';

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      open: true,
      UserName:"",
    };
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  
  handleToggle() {
    this.setState({open: !this.state.open})
  }

  handleClose() {
    this.setState({open: true})
  }

  onChangeTitle(title,src,id){
    this.setState({open: !this.state.open})
    var title = title
    if(id==="top")
    {  
      this.props.changeTitle(title,src,id);
    }
    else{
      this.props.changeTitle(title,src);
    }
  }

  render(){
    return (
      <div>
         <MuiThemeProvider muiTheme={getMuiTheme()}>
         <div >
            <AppBar
              className={classnames('app-bar', {'expanded': !this.state.open})}
              onLeftIconButtonClick={this.handleToggle}
              title={
                <div>
                <img src="https://gistai.com/img/logo.png" alt="logo" style={{height: '48px', position: 'relative', top:'-8px'}} />
                <span> Tv Feed Analysis </span>
                </div>}
                >
            <RightMenu />
            </ AppBar >
                <Drawer
                  docked={true}
                  open={!this.state.open}
                  width='20.5%'
                  onRequestChange={(open) => this.setState({open})}>
                  <List>
                    <ListItem
                      primaryText="News Bulletin"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"News Bulletin","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="News 100"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"News 100","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="News Bulletin"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"News Bulletin","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Morning Breaking"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Morning Breaking","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Nonstop 100"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Nonstop 100","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Breaking 20-20"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"Breaking 20-20","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Morning Special"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Morning Special","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="News 50 / News Special"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"News 50 / News Special","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="News Special"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"News Special","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Aap Ki News"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"Aap Ki News","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Special Report"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Special Report","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="News"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"News","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Bollywood Breaking 20-20"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Bollywood Breaking 20-20","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="News For Hearing Impaired"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"News For Hearing Impaired","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="5W 1H"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"5W 1H","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="News 50 / Aap Ki News"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"News 50 / Aap Ki News","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Taal Thok Ke"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Taal Thok Ke","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Run Ki Baat"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"Run Ki Baat","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Deshhit"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Deshhit","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Nonstop News"
                      leftIcon={ <PlayList onClick={this.onChangeTitle.bind(this,"Nonstop News","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/full.m3u8","")}/> }
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                       nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_0.m3u8","")} />}
                          
                        />,
                        <ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_1.m3u8","")}/>}
                          
                        />,
                        <ListItem
                          key={3}
                          primaryText="Segment 3"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 3","https://s3.amazonaws.com/tv-feed-analysis/times_now_feed/Content_2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                    <ListItem
                      primaryText="Daily News & Analysis"
                      leftIcon={<PlayList onClick={this.onChangeTitle.bind(this,"Daily News & Analysis","https://s3.amazonaws.com/tv-feed-analysis/full.m3u8","")} />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Segment 1"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 1","https://s3.amazonaws.com/tv-feed-analysis/Segment+1.m3u8","top")}/>}
                          
                        />,<ListItem
                          key={2}
                          primaryText="Segment 2"
                          leftIcon={<Play onClick={this.onChangeTitle.bind(this,"Segment 2","https://s3.amazonaws.com/tv-feed-analysis/Segment+2.m3u8","")}/>}
                          
                        />,
                      ]}
                    />
                    <Divider />
                  </List>
                </Drawer>
                </div>
            </MuiThemeProvider>
      </div>
    )
  }
}

export default Header