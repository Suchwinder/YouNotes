import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SingleUser.css';
import { Link as ScrollLink} from 'react-scroll';
import {withStyles} from '@material-ui/core/styles';
import { Grid, Typography, Modal, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 650,
        marginBottom: 40,
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
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      },
      textfields: {
        marginBottom: '0.5em'
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
        loggedin: true,
        open: false,
        sessionTitle: '',
        description: '',
        sessionSubject: '',
        videoUrl: '',
    }

    setOpen() {
      this.setState({open:true})
    } 

    setClose() {
      this.setState({open:false})
    }

    handleSignout() {
      this.setState({loggedin:false})
    }

    handleChange = (event) => {
      const name = event.target.name;
      const data = event.target.value;
      if(name === 'sessionTitle-input'){
        this.setState({sessionTitle:data});
      } else if(name === 'description-input'){
        this.setState({description:data});
      } else if(name === 'sessionSubject-input'){
        this.setState({sessionSubject:data});
      } else if(name === 'videoUrl-input'){
        this.setState({videoUrl:data});
      }
    }

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
                  <li><ScrollLink to='main' smooth={true} duration={1000} onClick={this.handleSignout.bind(this)}> Logout</ScrollLink></li>
                </ul>
                </div> 
              </div>
            </div> 
          </nav>
          <div className="new-session">
            <Grid item>
            {/* <Link style = { style } to={`/study_sessions/add_session`}>             */}
                <Button onClick={this.setOpen.bind(this)} variant="contained" color="primary">
                    New Study Session
                </Button>
            {/* </Link> */}
            </Grid>
          </div>
          <div className="new-session-click">
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={this.state.open}
            onClose={this.state.close}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={this.state.open}>
              <div className='session-modal'>
              <Paper style={{minHeight: 400, maxHeight:400, minWidth: 500, maxWidth: '100%', overflow: 'auto'}}>
                <div style = {{display: 'flex', flexDirection: 'row-reverse'}}>
                <IconButton onClick={this.setClose.bind(this)}>
                <CloseIcon/>
                </IconButton>
                </div>
                <br/>
                <div className='session-modal-text'>
                  <TextField
                  className={classes.textfields}
                  required
                  name="sessionTitle-input"
                  label="Title of your session"
                  variant="outlined"
                  onChange={this.handleChange.bind(this)}
                  />
                  <br/>
                  <TextField
                  className={classes.textfields}
                  required
                  name="sessionSubject-input"
                  label="Subject"
                  variant="outlined"
                  onChange={this.handleChange.bind(this)}
                  />
                  <br/>
                  <TextField
                  className={classes.textfields}
                  required
                  name="description-input"
                  label="Description"
                  variant="outlined"
                  onChange={this.handleChange.bind(this)}
                  />
                  <br/>
                  <TextField
                  className={classes.textfields}
                  required
                  name="videoUrl-input"
                  label="Video URL"
                  variant="outlined"
                  onChange={this.handleChange.bind(this)}
                  />
                  <br/>
                </div>
                <div className='session-submit'>
                  <Button onClick={this.setClose.bind(this)} variant="contained" color="primary">
                    Begin
                  </Button>
                </div>
              </Paper>
              </div>
            </Fade>
          </Modal>
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
                                        <CardContent style={{backgroundColor:'white', minHeight: 100, maxHeight:200}}>
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
