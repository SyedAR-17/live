import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div id='mainGrid' className={classes.root}>
      <Grid container spacing={0}>
        <Grid id='main1' item xs={12} md={6}>
          <h1>Welcome To</h1>
          <img  id='mainImg' src="https://icons.iconarchive.com/icons/apathae/satellite/128/2-Pictures-icon.png"></img>
          <p>"Whether you are a gamer, comic fanatic or anime fan, 
          we have got a box for you"
          <br></br>
          <br></br>
          We make a bundle of collectibles, figures , comic books and more, that will be delivered to your door every month. Each box will be a hand picked suprise of awesomeness!</p>
        </Grid>
        <Grid id='main2' item xs={12} md={6}>
          <img style={{width:'100%'}} src="https://icons.iconarchive.com/icons/aha-soft/free-global-security/512/CCTV-Camera-icon.png"/>
        </Grid>
      </Grid>
    </div>
  );
}