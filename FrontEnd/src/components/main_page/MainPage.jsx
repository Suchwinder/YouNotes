import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Navbar from './../navigation_bar/Navbar';
import GitHubButton from 'react-github-btn';

class MainPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
    };
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  confirmLogIn = async (event) =>{
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

  render() {
    return (
      <div className = 'home'> 
        <Navbar/>
        <header className="App-header" id ='homepage'>
          <h1 className="App-header-title"> Your All In One Study Platform.</h1>
          <h4 className="App-header-info"> YouNotes lets your note taking skills to another level. Create 
            a session for each video and take notes accordingly to your timestamp!
          </h4>
        </header>
        <main style={{marginTop:'64px'}} id='main'>
          <div className = 'main-page'>
            <h1 className='header' id='catch-phrase'>Take Notes Efficiently</h1>  
          </div>
        </main>
        <footer>
          <h3 className='footer-contact' id='contact'> Contact </h3>
          <h5 className='footer-info-l'> Follow: <GitHubButton href="https://github.com/Suchwinder">@Suchwinder</GitHubButton></h5>
          <h5 className='footer-info-r'> Follow: <GitHubButton href="https://github.com/MarikaWatanabe">@MarikaWatanabe</GitHubButton></h5>
        </footer>
      </div>
    )
  }
}

export default MainPage;
