import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/main_page/MainPage';
// import './fonts/PlayfairDisplay-VariableFont_wght.ttf';

function App() {

  const MainPageComponent = () => <MainPage/>
  
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/" render={MainPageComponent}/>
      </Switch>
    </div>
  );
}

export default App;
