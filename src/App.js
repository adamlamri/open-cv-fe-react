import React from 'react';
import './App.css';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import withStyles from "@material-ui/core/styles/withStyles";
import CVContainer from "./CVContainerRouter";
import Container from "@material-ui/core/Container/Container";
import Clock from "./component/Clock";

const useStyles = {
  containerContent: {
    background: '#f5f5f5'
  },
  containerAppBar: {
    flexGrow: 1,
  },
  appBar: {
    background: '#424242',
  },
  menuButton: {
  },
  title: {
    flexGrow: 1,
  },
  root: {
    background: '#e2e2e2',
  },
  container:{
    //     display: 'grid',
    //     gridGap: 5,
    //     gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    //     gridTemplateRows: "fit-content fit-content",
  }
};

class MotherContainer extends React.Component{

  render() {
    const {classes} = this.props;

    return(
        <div className={classes.root}>
          <div className={classes.containerAppBar}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  CV container
                </Typography>
                <Clock/>
              </Toolbar>
            </AppBar>
          </div>
          <Container fixed className={classes.container}>
            <CVContainer/>
          </Container>
        </div>
    )
  }
}

export default withStyles(useStyles)(MotherContainer);
