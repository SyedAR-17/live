import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AppBarCollapse from "./AppBarCollapse";
import { withRouter } from "react-router-dom";
import Home from './Homes';
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar id='navMain' position="fixed" className={classes.navigation}>
      <Toolbar>
      <a href='/Home'>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.toggleDrawer}>
            <HomeIcon />
          </IconButton>
      </a>
        <AppBarCollapse srcOne={props.linkOne} srcTwo={props.linkTwo} srcThree={props.linkThree} />
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
