import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from './Buttons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{height:'auto', borderRadius:'10px', boxShadow:'2px 2px 2px 2px', marginTop:'40px'}} className={classes.root}>
      <CardHeader style={{color:'black', fontWeight:'900', textAlign:'center' }}
        title={props.head}
      />
      <CardContent style={{backgroundColor:'grey'}}>
        <Typography variant="body2" color="textSecondary" component="p">
        <div> 
            <div>
                <ul style={{color:'white', position:'relative', top:'30px'}}>
                    <li style={{marginBottom:'10px', fontSize:'2em'}}><FiberManualRecordIcon/>GAMING</li>
                    <li style={{marginBottom:'10px', fontSize:'2em'}}><FiberManualRecordIcon/>COMICS</li>
                    <li style={{marginBottom:'10px', fontSize:'2em'}}><FiberManualRecordIcon/>ANIME</li>
                </ul>
              <h2 style={{position:'relative',bottom:'120px', left:'90px', color:'white', fontSize:'2em', width:'auto', height:'auto'}}>{props.Dollars}</h2>
              <Button login='SELECT' style={{marginLeft:'70px'}}/>
            </div>
        </div>
        </Typography>
      </CardContent>
    </Card>
    
  );
}