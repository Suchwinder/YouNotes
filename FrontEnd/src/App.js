import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPageView from './components/main_page/MainPageView';
// import Nav from './Nav.js'
// import Carousel from './Carousel.js'

function App() {
  const MainPageViewComponent = ( ) => <MainPageView/>

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route exact path='/' render={MainPageViewComponent}/>
      </Switch>
      {/* <Nav/> */}
      {/* <Carousel/> */}
    </div>
  );
}

export default App;
