import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import UserSettings from './pages/UserSettings';
import Utilities from './pages/Utilities';
import {CalendarPage} from "./Calendar/CalendarPage"
import {AddNewApp}  from "./Calendar/Forms/AddNewApp"
import {MedForm}  from "./Calendar/Forms/MedForm"
import {MapPage} from "./Map/MapPage"
import {AlertsPage} from "./pages/AlertsPage"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/settings' component={UserSettings} />
        <Route exact path='/utilities' component={Utilities} />
        <Route exact path='/utilities/mi-cal' component={CalendarPage} />
        <Route exact path='/utilities/mi-cal/add-new-app' component={AddNewApp} />
        <Route exact path='/utilities/mi-cal/add-new-med' component={MedForm} />
        <Route exact path='/utilities/mi-search' component={MapPage} />
        <Route exact path='/utilities/mi-alert' component={AlertsPage} />



      </Switch>
    </Router>
  );
}

export default App;
