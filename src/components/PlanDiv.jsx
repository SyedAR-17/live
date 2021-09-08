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
    <div className={classes.root}>
      <Grid style={{alignContent:'center', justifyContent:'center', margin:'20px', marginLeft:'40px', width:'auto'}} container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Plans head="1 MONTH PLAN" Dollars="$30"/>
        </Grid>
        <Grid item xs={12} sm={4}>
         <Plans head="3 MONTH PLAN" Dollars="$85.5"/>
        </Grid>
        <Grid item xs={12} sm={4}>
         <Plans head="6 MONTH PLAN" Dollars="$162"/>
        </Grid>
      </Grid>
    </div>
  );
}