import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  const alert = () =>
  {
      window.alert('Button Pressed');
  }

  return (
    <div className={classes.root}>
      <Button onClick={props.func} variant="contained" style={{backgroundColor:'black', color:'white', borderRadius:'20px', fontWeight:'900', position:'relative', left:'100px'}}>
        {props.login}
      </Button>
    </div>
  );
}