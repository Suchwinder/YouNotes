import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import {withStyles} from '@material-ui/core/styles';


class UserNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedin: true,
            email: '',
            password: '',
            // redirect = false
        };
    }

    handleLogOut = async (event) => {
        try{
          const response = await fetch('/api/logout', {
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          });
    
          const status = response.status;
          const result = await response.json();
    
          if (status === 400 || status === 500) {
            alert(result.error);
          } else {
            this.setState({
              is_logged_in: false
            })
            console.log("Successfully logged out");
          }
        } catch (error) {
          console.log(error);
        }
      }
    

    render() {

    return (
    <div>
       {
       this.state.loggedin
       
    ? <nav className="navbar">
      <div className="usernav-options">
        <div className="usernav-items">
          <ul>
            <li><Link smooth={true} duration={1000}> YouNotes </Link></li>
          </ul>
        <div className="linkright">
          <ul>
            <li><Link smooth={true} duration={1000} onClick={this.handleSignout}> Logout </Link></li>
          </ul>
        </div> 
        </div>
      </div> 
    </nav>
    : <Redirect push to='/'/>

       }
    </div>

    );
}
    
}

export default UserNav;
