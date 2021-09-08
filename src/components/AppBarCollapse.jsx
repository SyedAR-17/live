/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
 import React from "react";
 import { Button, MenuItem } from "@material-ui/core";
 import { withStyles } from "@material-ui/core/styles";
 import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
 import { Link } from "react-router-dom";
 import PlanHeader from './PlanHeader';
 
 const styles = theme => ({
   root: {
     position: "absolute",
     right: 20
   },
   buttonBar: {
     [theme.breakpoints.down("xs")]: {
       display: "none"
     },
     margin: "10px",
     paddingLeft: "16px",
     right: 0,
     position: "relative",
     width: "90%",
     background: "transparent"
   }
 });
 
 const AppBarCollapse = (props) => (
   <div className={props.classes.root}>
     <ButtonAppBarCollapse>
       <MenuItem><a style={{textDecoration:'none', fontWeight:'900', aHover:'red' }} href={props.srcOne}>LOGIN</a></MenuItem>
       <MenuItem><a style={{textDecoration:'none', fontWeight:'900', }} href={props.srcTwo}>HOW IT WORKS</a></MenuItem>
       <MenuItem><a style={{textDecoration:'none', fontWeight:'900', }} href={props.srcThree}>ABOUT</a></MenuItem>
     </ButtonAppBarCollapse>
     <div className={props.classes.buttonBar} id="appbar-collapse">
       <Button color="inherit"><a style={{textDecoration:'none', fontWeight:'900',}} href={props.srcOne}>LOGIN</a></Button>
       <Button color="inherit"><a style={{textDecoration:'none', fontWeight:'900', }} href={props.srcTwo}>HOW IT WORKS</a></Button>
       <Button color="inherit"><a style={{textDecoration:'none', fontWeight:'900', }} href={props.srcThree}>ABOUT</a></Button>
     </div>
   </div>
 );
 
 export default withStyles(styles)(AppBarCollapse);
 