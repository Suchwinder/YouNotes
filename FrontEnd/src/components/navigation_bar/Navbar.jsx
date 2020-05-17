import React, { useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink} from 'react-scroll';
import './../navigation_bar/Navbar.css';
// Hooks uses makeStyles, in other cases we aren't using 
// hooks but rather Higher Order Components (HOC), more info: https://reactjs.org/docs/higher-order-components.html
// technically we are just using components, and so we would normally use with styles, but here we aren't
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  navbutton: {
    '& > *': {
      margin: theme.spacing(1),
    },
    color: 'royalblue',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#f0eded',
    },
    margin: '1.1rem 1rem'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "30em",
    width: "50em",
    borderRadius: '4px',
    outline: 'none',
  },
  registerbutton: {
    fontFamily: 'sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      color: 'white',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      textTransform: 'none',
      backgroundColor: 'royalblue',
    },
  },
  textfields: {
    marginBottom: '0.5em'
  },
  closebutton: {
    marginLeft: '100%',
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const data = event.target.value;
    if(name === 'email-input'){
      setEmail(data);
    } else if(name === 'password-input'){
      setPassword(data);
    } else if(name === 'first-name-input'){
      setFirstName(data);
    }else if(name === 'last-name-input'){
      setLastName(data);
    }else if(name === 'username-input'){
      setUsername(data);
    }
  }

  const confirmLogIn = async (event) =>{
    event.preventDefault();
    const user = {
      "email": email, 
      "password": password
    }
    try{
      const response = await fetch('/api/user/login', {
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
      });

      const status = response.status;
      // console.log(result);
      const result = await response.json();

      if (status === 400 || status === 500) {
        alert(result.error);
      } else {
        setRedirect(true);
        console.log("Successfully logged in");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const confirmSignUp = async(event)=>{
    const user = {
      "firstName": firstname, 
      "lastName": lastname,
      "username": username, 
      "email": email, 
      "password": password
    }
    try{
      const response = await fetch('/api/user/signup', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
      });
      const status = response.status;
      const result = await response.json();

      if(status === 401) {
        return alert(result.error);
      }
      else if( status === 400 || status === 500) {
        return alert(result.error);
      }
      else {
        setRedirect(true);
        console.log(result.message);
      }

      // console.log(response);
    } catch(error){
      console.log(error);
    }
  }


  return(
    <div>
      {
        redirect===true
        ? <Redirect to='/study_sessions'/>
        :
        <div className='navbar'>
        <nav className='navbar-options'>
          <div></div>
          <div className='navbar-items'>
            <ul>
              <li><ScrollLink to='homepage' smooth={true} duration={1000}>YouNotes</ScrollLink></li>
              <li id='non-main-nav-options'><ScrollLink to='main' smooth={true} duration={1000}> About</ScrollLink></li>
              <li id='non-main-nav-options'><ScrollLink to='contact' smooth={true} duration={1000}>Contact</ScrollLink></li>
            </ul>
          </div>
          <Button onClick={handleOpen} className={classes.navbutton}>Login/Signup</Button>
        </nav>
        <div className='login_signup'>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
              <div style = {{display: 'flex', flexDirection: 'row-reverse'}}>
              <IconButton classname={classes.closebutton} onClick={handleClose} >
              <CloseIcon/>
              </IconButton>
              </div>
                <div className='login'>
                  <div className='email-password'>
                    <TextField
                      className={classes.textfields}
                      required
                      name="email-input"
                      label="Email"
                      variant="outlined"
                      onChange={handleChange}
                      // value={email}
                    />
                    <br/>
                    <TextField
                      className={classes.textfields}
                      required
                      name="password-input"
                      label="Password"
                      type="password"
                      variant="outlined"
                      onChange={handleChange}
                      // value={password}
                    />
                  </div>
                  <Button className={classes.registerbutton} onClick={confirmLogIn}>Log In</Button>
                </div>
                <div className='signup'>
                  <TextField
                    className={classes.textfields}
                    required
                    name="first-name-input"
                    label="First Name"
                    variant="outlined"
                    onChange={handleChange}
                    // value={firstname}
                  />
                  <br/>
                  <TextField
                    className={classes.textfields}
                    required
                    name="last-name-input"
                    label="Last Name"
                    variant="outlined"
                    onChange={handleChange}
                    // value={lastname}
                  />
                  <br/>
                  <TextField
                    className={classes.textfields}
                    required
                    name="username-input"
                    label="Username"
                    variant="outlined"
                    onChange={handleChange}
                    // value={username}
                  />
                  <br/>
                  <TextField
                    className={classes.textfields}
                    required
                    name="email-input"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                    // value={email}
                  />
                  <br/>
                  <TextField
                    className={classes.textfields}
                    required
                    name="password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    // value={password}
                  />
                  <br/>
                  <Button className={classes.registerbutton} onClick={confirmSignUp}> Sign up </Button>
                </div>
              </div>
            </Fade>
          </Modal>
          {/* <h2 className="login-header">Log In</h2> */}
        </div>
      </div>
      }
    </div>
  )
};

export default Navbar;
