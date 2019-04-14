import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header'
import Nav from './Nav'
import GalleryCont from './GalleryCont'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav />
        <Header />
        <GalleryCont />
        </header>
      </div>
    );
  }
}

export default App;
