import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Plans from './Plans';


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
    <div id='Header' className={classes.root}>
      <Grid>
        <Grid item xs={12}>
            <h2 style={{textAlign:'center', alignContent:'center', margin:'20px'}}>Pick Your Plan!</h2>
            <p style={{textAlign:'center', alignContent:'center'}}>Pick Your Theme(s)!<br></br> Pay for additional months to save money.</p>
        </Grid>
      </Grid>
    </div>
  );
}