import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';
import './css/styles.min.css';

const App = () => 
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing}/>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profiles" component={Profile} />
        </Switch>
      </Fragment>
    </Router>

export default App;