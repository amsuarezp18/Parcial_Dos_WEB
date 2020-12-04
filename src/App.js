import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon"

function App(props) {
  return (
      <Router>
      <Switch>
        <Route path="/">
         <Pokemon lang = {props.lang} /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
