import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header'
import Nav from './Nav'
import GalleryCont from './GalleryCont'
import apiKey from '../config.js'


//Photo endpoint to use https://www.flickr.com/services/api/misc.urls.html

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=672ad18dd0d9678d40e576638b02ab93&tags=sunset&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(responseData =>
   {
     this.setState({images: responseData.photos});
   })
   .catch(error => {
     console.log('Error fetching and parsing data',error);
   });
  }



  render() {
    console.log(this.state.images);
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
