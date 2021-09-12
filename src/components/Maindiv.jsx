import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div id='SecondGrid' style={{backgroundRepeat:'no-repeat', backgroundSize:'100%100%', backgroundImage:'url(https://media.istockphoto.com/vectors/black-background-vector-id1166313278?k=6&m=1166313278&s=612x612&w=0&h=qGRNtZlY70eW-cs-pvT44oQfnujWLwNd7wXM0WvPryE=)'}} className={classes.root}>
      <Grid container spacing={0}>
        <Grid id='textGrid' item xs={12}>
         <h2 style={{marginTop:'30px'}}>Here's How It Works!</h2>
              <p id='paraGrid'>  
                  We ship all orders around the 10th of the month. When you sign up before the end of the month, 
                  you will get the following month’s mystery power box around the 10th of the following month.
                  <br></br>
                  <br></br>
                  Quality is our #1 goal! Every mystery power box will be hand selected with 
                  the hottest new items each month. Choose one or more of our three themes that interest 
                  you and we will customize the items we include in your box
             </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper id='P1' className={classes.paper}>
              <img style={{height:'90px', width:'90px', marginTop:'20px'}} src='https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Camera-icon.png'/>
              <h3 style={{color:'white', margin:'50px', marginBottom:'30px'}}>PICK YOUR THEME</h3>
              <p style={{color:'white'}}>Choose which theme(s) interest you and we will customize the items in Your Mystry Power Box.</p>
          </Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper id='P2' className='PaperGrid' className={classes.paper}>
              <img style={{height:'90px', width:'90px', marginTop:'20px'}} src='https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Camera-icon.png'/>
              <h3 style={{color:'white', margin:'50px', marginBottom:'30px'}}>SELECT MONTHLY PLAN</h3>
              <p style={{color:'white'}}>Go month to month or save money with a 3 or 6 month plan.</p>
          </Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
        <Paper id='P2' className='PaperGrid' className={classes.paper}>
              <img style={{height:'90px', width:'90px', marginTop:'20px'}} src='https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Camera-icon.png'/>
              <h3 style={{color:'white', margin:'50px', marginBottom:'30px'}}>CHECK OUT AND ENJOY</h3>
              <p style={{color:'white'}}>In a few weeks your monthly Power Box will be on its way.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}