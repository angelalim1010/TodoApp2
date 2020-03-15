import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import Signup from './components/Signup'
import Todo from './components/Todo'

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component = {Homepage} />
        <Route exact path="/signup" component = {Signup} />
        <Route exact path="/todo" component = {Todo} />
      </Router>
    </div>
  );
}

export default App;
