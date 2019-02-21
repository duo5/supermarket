import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    );
  }
}

export default App;
