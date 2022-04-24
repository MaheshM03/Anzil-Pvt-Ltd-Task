
import './App.css'
// import Homepage from "./components/homepage/homepage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Calci from './Components/Calci';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> <Calci/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App

