import React, { createContext, useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Booking from './components/booking/Booking';
import Error from './components/Error/Error';
import Login from './components/login/Login';
import ConfirmBooking from './components/confirmBooking/ConfirmBooking';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { Container } from 'react-bootstrap';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <Container className="Container" >
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booking/:id">
              <Booking />
            </Route>
            <PrivateRoute path="/confirmation">
              <ConfirmBooking />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
