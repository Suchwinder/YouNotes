import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import MainPage from './components/main_page/MainPage';
import SingleUser from './components/single_user/SingleUser';


function App() {

  const MainPageComponent = () => <MainPage/>
  const SingleUserComponent = () => <SingleUser/>
  
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/" render={MainPageComponent}/>
        <Route exact path="/study_sessions" render={SingleUserComponent}/>
      </Switch>
    </div>
  );
}

export default App;
