import React from 'react';
import './App.css';
import Nav from './components/navbar/nav.component';
import Cv from './components/cv/cv.component';
import { Switch, Route, Redirect } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
          <Route exact path='/'/>
          <Route path='/calculator'/>
          <Route path='/cv' component={Cv}/>

      </Switch>
    </div>
  );
}

export default App;
