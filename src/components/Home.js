import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header'
import GalleryCont from './GalleryCont'
import apiKey from '../config.js'


//Photo endpoint to use https://www.flickr.com/services/api/misc.urls.html

class Home extends Component {

  constructor() {
    super();
    this.state = {
      images: {},
      searchTag: ""
    };
  }

  searchInput = React.createRef();

  galleryFetch  = (search = "dogs") => {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=672ad18dd0d9678d40e576638b02ab93&tags=${search}&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData =>
     {
       this.setState({
         images: responseData.photos
       });
     })
     .catch(error => {
       console.log('Error fetching and parsing data',error);
     });
    }

  componentDidMount() {
    // this.galleryFetch();
  }

  submitSearch = (submit) => {

    submit.preventDefault();
    this.galleryFetch(this.searchInput.current.value);
   // console.log(this.searchInput.current.value);
  this.setState({
           searchTag: this.searchInput.current.value
  });
    submit.currentTarget.reset();

  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
        <Header />
        <form onSubmit = {this.submitSearch}>
        <input
          type ="text"
          ref = {this.searchInput}
          placeholder = "Enter a search word"
        />
        <input
          type = "submit"
          value = "Search"
        />

        </form>
        {Object.keys(this.state.images).length > 0 && (
          <GalleryCont
            imageArray = {this.state.images}
            searchTag = {this.state.searchTag}
          />
        )}
        </header>
      </div>
    );
  }
}

export default Home;
