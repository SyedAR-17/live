import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    <div id='footer' style={{backgroundRepeat:'no-repeat', backgroundSize:'100%100%', backgroundImage:'url(https://media.istockphoto.com/vectors/black-background-vector-id1166313278?k=6&m=1166313278&s=612x612&w=0&h=qGRNtZlY70eW-cs-pvT44oQfnujWLwNd7wXM0WvPryE=)'}} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <img style={{margin:'140px'}} src="https://icons.iconarchive.com/icons/apathae/satellite/128/2-Pictures-icon.png"/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <div style={{color:'white', height:'auto', textAlign:'center'}}>
                    <h1>Our Company</h1>
                    <br></br>
                    Astro Box
                    <br></br>
                    <br></br>
                    8547 E. Arapahoe Rd. Ste J #429
                    <br></br>
                    <br></br>
                    Greenwood Village CO 80112
                    <br></br>
                    <br></br>
                    astropowerbox@gmail.com
                    <br></br>
                    <br></br>
                    (720)-239-2382
                    <br></br>
                    <br></br>
                    <a href="www.google.com" target="_blank">Terms of Service</a>
                    <br></br>
                    <br></br>
                    <a href="www.google.com" target="_blank">Privacy Policy</a>
            </div>
        </Grid>
        <Grid item xs={12} sm={4} style={{height:'auto'}}>
          <a href="www.facebook.com" target='_blank'>
            <img style={{width:'60px', height:'60px', position:'relative', marginTop:'150px', marginLeft:'110px'}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"/>
          </a>
          <a href="www.twitter.com" target='_blank'>
            <img style={{width:'60px', height:'60px', position:'relative', marginLeft:'20px'}} src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-256.png"/>
          </a>
          <a href="www.instagram.com" target='_blank'>
            <img style={{width:'60px', height:'60px', position:'relative', marginLeft:'20px'}} src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-256.png"/>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}