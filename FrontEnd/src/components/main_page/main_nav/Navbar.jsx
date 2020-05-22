import React, { useState } from 'react';
// import './Navbar.css';
import { Link as ScrollLink} from 'react-scroll';
// import './Navbar.css';
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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  toolbar:{
    minHeight: '45px',
    height: '45px',
    padding: '0px 0px',
    color: 'white',
    // float:'right',
    // width: '700px',
    display: 'flex'
  },
  appname: {
    padding: '.8rem .8rem', 
    margin: '.55rem',
    color: 'royalblue',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '18px',
    minHeight: '20px',
    '&:hover': {
      cursor: 'pointer'
    },
    // marginRight: '65%',
  },
  firstoption: {
    padding: '.5rem .5rem', 
    height: '1.2rem',
    margin: '.2rem .2rem',
    color: 'royalblue',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'royalblue',
      color: 'white',
      borderRadius: '5px',
      transitionDuration: '.2s'
    },
    minWidth: '500px'
  },
  options: {
    // float: 'right',
    padding: '.5rem .5rem', 
    height: '1.2rem',
    margin: '.2rem .2rem',
    color: 'royalblue',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'royalblue',
      color: 'white',
      borderRadius: '5px',
      transitionDuration: '.2s'
    }
  },
  app: theme.mixins.toolbar, // To allow the contents not to be covered by the nav bar
  // title: {
  //   flexGrow: 1,
  // },
  navbutton: {
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
    minWidth:'70px',
    float: 'right',
    padding: '.3rem .3rem', 
    margin: '0rem',
    color: 'royalblue',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#f0eded',
      backgroundColor: 'royalblue',
      color: 'white',
    },
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
    marginBottom: '0.5em',
    marginRight: '0.5em'
  },
  closebutton: {
    marginLeft: '100%',
  },
  input: {
    height: 23,
    backgroundColor: 'white',
    borderRadius: 0,
    marginRight: '.5vh',
    borderColor: 'royalblue',
    fontSize: '12px',
    '.MuiOutlinedInput-input': {
       padding: 0,
    },
    minWidth: '100px'
  },
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
        {/* <nav className='navbar-options'>
          <div></div>
          <div className='navbar-items'>
            <ul>
              <li id='main-app-name'><ScrollLink to='homepage' smooth={true} duration={1000}>YouNotes</ScrollLink></li>
              <li id='non-main-nav-options'><ScrollLink to='main' smooth={true} duration={1000}> About</ScrollLink></li>
              <li id='non-main-nav-options'><ScrollLink to='contact' smooth={true} duration={1000}>Contact</ScrollLink></li>
            </ul>
          </div> */}
          {/* <TextField
                InputProps={{
                    className: classes.input,
                }}
                placeholder='Email'
                name='email-input'
                type='email'
                size='small'
                value={email}
                variant='outlined'
                InputLabelProps={{
                shrink: true
                }}
                onChange={handleChange}
                required
            />
            <TextField
                InputProps={{
                    className: classes.input,
                }}
                size='small'
                placeholder='Password'
                name='password-input'
                type='password'
                value={password}
                variant='outlined'
                InputLabelProps={{
                shrink: true
                }}
                onChange={handleChange}
                required
            /> */}
            {/* <input id='email-login-nav' name='email-input' placeholder='Email' onChange={handleChange}/>
            <input id='email-password-nav' name='password-input' placeholder='Password' onChange={handleChange}/>
            <Button className={classes.navbutton} onClick={confirmLogIn}>Login</Button>
          <Button onClick={handleOpen} className={classes.navbutton}>Login/Signup</Button>
        </nav> */}
        <div>
          <AppBar positionFixed style={{backgroundColor: 'white', minWidth:'800px'}}>
            <Toolbar className={classes.toolbar}>
              <Typography className={classes.appname}><ScrollLink to='homepage' smooth={true} duration={500}>YouNotes</ScrollLink></Typography>
              <Typography className={classes.options}><ScrollLink to='main' smooth={true} duration={500}> About</ScrollLink></Typography>
              <Typography className={classes.options}><ScrollLink to='contact' smooth={true} duration={500}>Contact</ScrollLink></Typography>
              <TextField
                InputProps={{
                    className: classes.input,
                }}
                placeholder='Email'
                name='email-input'
                type='email'
                size='small'
                value={email}
                variant='outlined'
                InputLabelProps={{
                shrink: true
                }}
                onChange={handleChange}
                required
              />
              <TextField
                  InputProps={{
                      className: classes.input,
                  }}
                  size='small'
                  placeholder='Password'
                  name='password-input'
                  type='password'
                  value={password}
                  variant='outlined'
                  InputLabelProps={{
                  shrink: true
                  }}
                  onChange={handleChange}
                  required
              />
              <Button className={classes.navbutton} onClick={confirmLogIn}>Login</Button>
              <Button onClick={handleOpen} className={classes.navbutton}>Sign Up</Button>
            </Toolbar>
          </AppBar>
        </div>

        <div className={classes.app}>
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
