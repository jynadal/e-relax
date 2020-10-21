import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import PageRenderer from './page-renderer';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './css/default.css';
import './css/responsive.css';

function App() {

  const user = {
      firstName:"Stéphanie",
      lastName: "Smeth"
    }
  
  return (
    <Router>
    <div className="App">
      <Navigation user={user}/> 
      <Switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/" render={() => <Redirect to="/Home" />} />
        <Route component={() => 404} />
      </Switch> 
      <Footer />   
    </div>
    </Router>
  );
}

export default App;
