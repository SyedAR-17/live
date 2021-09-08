import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LogButton from './Buttons';
import Navbar from './Navbar';

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
  const [fullname,setfullname] = useState(
    {
        pass:'',
        email:''
    });

    const userInput = (event) =>
    {
        const value = event.target.value;
        const name = event.target.name;

        setfullname((prev) =>
        {
          
            if(name==='pass')
            {
                return{
                    email:prev.email,
                    pass:value,
                };
            }
            else if(name==='email'){
                return{
                    pass:prev.pass,
                    email:value    
                };
            }
        }
        )
    };
    const onSubmits = (event) =>
    {
        event.preventDefault();
        if(fullname.email=='')
        {
          window.alert('WRONG EMAIL');
        }
        else
        {
          window.alert(fullname.email);
          window.alert(fullname.pass);
        }
    }
  return (
    <>
    <Navbar linkOne='LoginPage' linkTwo='/Home#SecondGrid' linkThree='/Home#footer'/>
    <div style={{height:'100vh',backgroundColor:'white',backgroundRepeat:'no-repeat',backgroundSize:'100%100%',marginTop:'70px', backgroundImage:'url(https://media.istockphoto.com/vectors/black-background-vector-id1166313278?k=6&m=1166313278&s=612x612&w=0&h=qGRNtZlY70eW-cs-pvT44oQfnujWLwNd7wXM0WvPryE=)'}} className={classes.root}>
      <Grid container spacing={0}>
        <Grid style={{textAlign:'center', color:'white'}} item xs={12} sm={12}>
          <h1 style={{padding:'50px'}}>Account Login </h1>
          <br></br>
          <h3>Don't have an Account? Subscribe to SignUp</h3>
        </Grid>
        <Grid container direction='row' justify='center' item xs={12} sm={12}>
          <div style={{backgroundColor:'white', height:'auto',borderRadius:'20px', width:'90%', marginLeft:'auto', marginRight:'auto', marginBottom:'20px'}}  className={classes.paper}>
            <form style={{width:'auto', height:'auto'}} onSubmit={onSubmits}>
                <h3 style={{color:'black', position:'relative', right:'140px', marginTop:'40px', marginBottom:'10px', width:'auto', height:'auto'}}>EMAIL</h3>
                <input style={{width:'300px', height:'30px', borderRadius:'5px', borderStyle:'none'}} type="email" name="email" placeholder="Type your Email here..." onChange={userInput} value={fullname.email}/> 
                <br></br>
                <h3 style={{color:'black', position:'relative', right:'115px', marginTop:'20px', marginBottom:'10px'}}>PASSWORD</h3>
                <input style={{width:'300px', height:'30px', borderRadius:'5px', borderStyle:'none'}} type="password" name="pass" placeholder="Type your Password here..." onChange={userInput} value={fullname.lname}/>      
                <br></br>
                <LogButton type='submit' login='SUBMIT' func={onSubmits}></LogButton>
                <h2></h2>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  );
}