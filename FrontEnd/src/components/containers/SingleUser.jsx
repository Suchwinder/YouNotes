import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SingleUser.css';
import { Link as ScrollLink} from 'react-scroll';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
// import { makeStyles, AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
      sessionbox: {
        width: 151,
      },
      card: {
        width: '100%',
      },
      cardTitle: {
        fontSize: 20,
        color: '#11153e',
        align: 'center'
    },
});

const style = {
    textDecoration: 'none'
};

// const User = ({match}) => {
//     return ( <h1>Welcome {match.params.username}</h1>)
// }

const sessionNumber = [0, 1, 2, 3, 4, 5, 6];


class SingleUser extends Component {
    state = {
        loggedin: false
    }

    handleLoggedIn = () => {
        this.setState({loggedin:true})
    }

    // async componentDidMount() {
    // const loggedin = await ( await fetch('/api/loggedin')).json()
    // this.setState({loggedin})
    // }

render(){
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <nav className="navbar">
          <div className="usernav-options">
            <div className="usernav-items">
            <ul>
              <li><ScrollLink to='homepage' smooth={true} duration={1000}>YouNotes</ScrollLink></li>
            </ul>
              <div className="linkright">
              <ul>
                <li><ScrollLink to='main' smooth={true} duration={1000}> LogOut</ScrollLink></li>
              </ul>
              </div> 
            </div>
          </div> 
        </nav>
        <div className="new-session">
            <Grid item>
            <Link style = { style } to={`/study_sessions/add_session`}>            
                <Button variant="contained" color="primary">
                    New Study Session
                </Button>
            </Link>
            </Grid>
        </div>
        <main className='sessions-page'>
        <Paper className={classes.paper}>
          <Grid
          container
          direction="column"
          spacing = {3}
          justify="center"
          alignItems="center" 
          >
            <Grid item style={{minWidth: '100%'}}>
              <Paper style={{minHeight: 900, maxHeight:900, minWidth: '100%', maxWidth: '100%', overflow: 'auto', backgroundColor: 'royalblue', border: '1px solid white'}}>
                <List className="List">
                     {sessionNumber.map((session)=> {
                        return (
                            <ListItem className = "study-session" alignItems='center'>
                                <Card className={classes.card} style={{backgroundColor:'#a3a3c2'}}>
                                  <CardActionArea>
                                    <CardMedia
                                      className={classes.sessionbox}
                                      height="140"
                                      title="Session #"
                                    />
                                      <CardContent style={{backgroundColor:'white'}}>
                                        <Typography className={classes.cardTitle} color="textSecondary" align="center" gutterBottom>
                                          {/* {session.studySessionName} */}
                                          Session Name
                                        </Typography>
                                        <Typography>
                                          {/* {session.studySessionDescription} */}
                                          Session Description
                                        </Typography>
                                      </CardContent>
                                  </CardActionArea>
                                  <CardActions>
                                    <Link style = { style } to={`/study_sessions/session_id`}></Link>
                                    <IconButton>
                                      <DeleteIcon />
                                    </IconButton>
                                  </CardActions>
                                </Card>
                              </ListItem>           
                            )
                        })}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          </main>
        </div>
  
    )
}
}

export default withStyles(styles)(SingleUser);
