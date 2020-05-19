import React from 'react';
import './static/css/MainPage.css';
import Navbar from './navigation_bar/Navbar';
import GitHubButton from 'react-github-btn';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ButtonBase } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import such from './static/images/such.png';
import marika from './static/images/marika.png';

const Marika = { 
  name : 'Marika',
  description: 'Another Programmer',
  picture: marika,
};
const Such = { 
  name : 'Such',
  description: 'Another Programmer',
  picture: such 
};
const contributers = [Marika, Such]

const useStyles = makeStyles((theme) => ({
  cards: {
    paddingTop: '2vh',
    paddingLeft : '2vh',
    paddingRight : '2vh',
    justifyContent: "center",
  },
  card: {
    width: 200,
    height: 250,
    margin: '2vh',
  },
  media: {
    height: 125,
  },
  theTeam:{
    paddingTop: '3vh',
    color: 'white',
    fontFamily:  'Playfair',
  }
}));

const MainPage = () => {

  const handleLink = (name) => {
    // event.preventDefault();
    if(name==='Such'){
      window.open('https://github.com/Suchwinder');
    } else{
      window.open('https://github.com/MarikaWatanabe');
    }
  }

  const classes = useStyles();

  return (
    <div className = 'home' id ='homepage'> 
      <Navbar/>
      <header className="App-header">
        <h1 className="App-header-title"> Your All In One Study Platform.</h1>
        <h4 className="App-header-info"> YouNotes lets your note taking skills to another level. Create 
          a session for each video and take notes accordingly to your timestamp!
        </h4>
      </header>
      <main style={{marginTop:'64px'}} id='main'>
        <div className = 'main-page'>
          <h1 className='header' id='catch-phrase'>Take Notes Efficiently</h1>  
          <Grid item xs={12} className={classes.theTeam}><Typography variant="h5"> {"Contributors"}</Typography></Grid>
          <Grid container className={classes.cards}>
            {contributers.map((contributer) => ( 
              <ButtonBase onClick={()=>handleLink(contributer.name)} key={contributer.name}>
                <Card key={contributer.name} className={classes.card} raised>
                  <CardMedia
                    className={classes.media}
                    image={contributer.picture}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {contributer.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {contributer.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            ))}
          </Grid>
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

export default MainPage;
