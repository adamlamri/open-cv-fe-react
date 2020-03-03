import React from 'react';
import './App.css';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container/Container";
import Clock from "./component/Clock";
import CVAuthRouter from "./CVContainerRouter";
import AuthenticationService from "./service/AuthenticationService";
import UserService from "./service/UserService";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import {MenuItem} from "./constant/DrawerItemConstant";
import DrawerItem from "./component/DrawerItem";
import {firstColorLevel1, firstColorLevel7} from "./constant/ColorConstant";
import LocalStorageManager from "./ulti/LocalStorageManager";
import MenuIcon from "./component/MenuIcon";
const drawerWidth = 200;

const useStyles = {

  containerContent: {
    background: '#f5f5f5'
  },
  containerAppBar: {
    flexGrow: 1,
    background: '#424242',
  },
  appBar: {
    background: '#424242',
    "& div": {
      paddingLeft: 0,
    },
    boxShadow: 'none',
    transition: 'all 0.25s',
  },
  appBarShift: {
    background: '#424242',
    marginLeft: 200,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: 'all 0.25s',
  },
  menuButton: {
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  root: {
    background: firstColorLevel7,
    color: firstColorLevel1,
  },
  container:{
    minHeight: '100vh',
    background: firstColorLevel7,
    margin: 0,
    maxWidth: '100%',
    transition: 'all 0.25s',
  },
  containerShift:{
    minHeight: '100vh',
    marginLeft: 200,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: 'all 0.25s',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    transition: 'margin 0.25s',
  },
  drawerPaper: {
    width: drawerWidth,
    background: firstColorLevel1,
    border: '0',
    color: '#ffffff',
    transition: 'transform 0.25s !important',
  },
  drawerHeader: {
    width: drawerWidth,
    background: firstColorLevel1,
    height: 64,
    alignItems: 'center',
    display: 'flex',
    boxShadow: ` 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
    transition: 'all 0.25s',
  },
  titleDrawerHeader: {
    fontSize: '1.6rem',
    color: '#ffffff',
    margin: 'auto',
    fontWeight: 600,
  },
};

class MotherContainer extends React.Component{

  constructor(props) {
    super(props);
    const menuId = window.location.pathname.substring(1).split('/')[0];
    console.log(window.location.pathname);
    const isDrawerOpen = LocalStorageManager.getIsDrawerOpen() === 'true';
    this.state = {
      userRoles: [],
      isDrawerOpen: isDrawerOpen || false,
      chosenMenuId: menuId || '',
      user: {},
    }
  }

  toggleDrawer = () => {
    LocalStorageManager.toggleDrawer();
    const isDrawerOpen = LocalStorageManager.getIsDrawerOpen() === 'true';
    this.setState({isDrawerOpen: isDrawerOpen});
  }

  handleMenuChange = (menuId) => () => {
    if (menuId === this.state.chosenMenuId) {
      return;
    }
    this.setState({chosenMenuId: menuId});
    console.log("after");
    window.location = `/${menuId}`;
  }

  menu = () => {
    return Object.keys(MenuItem).filter(id => id !== 'PROFILE').map(menuItemId => {
      let menuItem = MenuItem[menuItemId];
      return(<DrawerItem
                key={menuItemId}
                item={menuItem}
                isChosen= {this.state.chosenMenuId === menuItem.id}
                onClick = {this.handleMenuChange(menuItem.id)}
                position = {'left'}>
      </DrawerItem>)
    })
  }

  componentDidMount() {
    this.setRole();
  }

  setRole = async () => {
    if (AuthenticationService.isAuthenticated()) {
      await UserService.getCurrentUserDetail()
              .then(res => {
                console.log(res);
                if (res.data && res.data.roleNames && res.data.roleNames.length > 0) {
                  this.setState({ userRoles: res.data.roleNames, user: res.data});
                } else {
                  this.setState({ userRoles: [], user: res.data });
                }
              })
              .catch(error => {
                console.log(error);
                this.setState({ userRoles: [] });
              });
    }
  }

  render() {
    const {classes} = this.props;
    const { userRoles, user, isDrawerOpen } = this.state;

    return(
        <div className={classes.root}>
          <div className={classes.containerAppBar}>
            <AppBar position="static" className={clsx(classes.appBar, {[classes.appBarShift]: isDrawerOpen})}>
              <Toolbar>
                <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                  <MenuIcon id = {isDrawerOpen ? 'in' : 'out'}/>
                </IconButton>
                <DrawerItem
                item = {{...MenuItem.PROFILE,name:user.userName}}
                isChosen= {this.state.chosenMenuId === MenuItem.PROFILE.id}
                onClick = {this.handleMenuChange(MenuItem.PROFILE.id)}
                position = {'top'}>

                </DrawerItem>
                <Typography variant="h6" className={classes.title}>
                </Typography>
                <Clock/>
              </Toolbar>
            </AppBar>
            <Drawer        className={classes.drawer}
                           variant="persistent"
                           anchor="left"
                           open={isDrawerOpen}
                           classes={{
                             paper: classes.drawerPaper,
                           }}>
              <div className={classes.drawerHeader}>
                <span className={classes.titleDrawerHeader}> 𝕔𝕧 𝕔𝕠𝕟𝕥𝕒𝕚𝕟𝕖𝕣</span>
              </div>
              {this.menu()}
            </Drawer>
          </div>
          <Container className={clsx(classes.container, {[classes.containerShift]: isDrawerOpen})}>
            <CVAuthRouter userRoles={userRoles}/>
          </Container>
        </div>
    )
  }
}

export default withStyles(useStyles)(MotherContainer);
