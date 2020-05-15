import React from 'react';
import './Navbar.css';
import { Link as ScrollLink} from 'react-scroll';
import './../navigation_bar/Navbar.css';
// Hooks uses makeStyles, in other cases we aren't using 
// hooks but rather Higher Order Components (HOC), more info: https://reactjs.org/docs/higher-order-components.html
// technically we are just using components, and so we would normally use with styles, but here we aren't
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "35em",
    width: "60em",
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
}));

const Navbar = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {

  }

  const confirmLogIn = async (event) =>{
    event.preventDefault();
    const user = {
      "email": this.state.email, 
      "password": this.state.password
    }
    try{
      const response = await fetch('/api/login', {
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
      });

      const status = response.status;
      const result = await response.json();

      if (status === 400 || status === 500) {
        alert(result.error);
      } else {
        console.log("Successfully logged in");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return(
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
      <div className='log-in'>
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
              <form className='log-in-form'>
                <div className='email-password'>
                  <label className='email'> Email: </label>
                  <input type='email' name='email' placeholder='Email' value={email} onChange={handleChange}/>
                  <label className='password'> Password: </label>
                  <input type='text' name='password' placeholder="Password" value={password} onChange={handleChange}/>
                </div>
                <Button className={classes.registerbutton} onClick={confirmLogIn}>Log In</Button>
              </form>
              <Button className={classes.registerbutton}> Sign up </Button>
            </div>
          </Fade>
        </Modal>
        {/* <h2 className="login-header">Log In</h2> */}
      </div>
    </div>
  )
};

export default Navbar;
