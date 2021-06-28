import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/oddaj-rzeczy">
                    Form
                </Route>
                <Route path="/logowanie">
                    <Login />
                </Route>
                <Route path="/rejestracja">
                    <Register />
                </Route>
                <Route path="/wylogowano">
                    Logout
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
