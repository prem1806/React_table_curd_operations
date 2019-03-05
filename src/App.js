import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './table.js'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Products />
      </div>
    );
  }
}

export default App;
