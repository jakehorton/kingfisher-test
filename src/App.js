import React from 'react';
import './App.css';
import Nav from './components/navbar/nav.component';
import Calculator from './components/calculator/calculator.component';
import Cv from './components/cv/cv.component';
import Home from './components/home/home.component';
import { Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/calculator' component={Calculator}/>
          <Route path='/cv' component={Cv}/>
      </Switch>
    </div>
  );
}

export default App;
