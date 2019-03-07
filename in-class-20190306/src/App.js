import React, { Component } from 'react';
import LoginForm from './components/loginform';
import Mapbox from './components/map'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
        <Mapbox />
      </div>
    );
  }
}

export default App;
