import React, {Component} from 'react';
import GalleryItem from './GalleryItem';

class GalleryCont extends Component {

  constructor() {
    super();
  }

searchText = () => {

    let searchResults = this.props.searchTag;
    if (searchResults != "") {
      searchResults = `You searched for : ${this.props.searchTag}`;
    }
    return searchResults;
  }

  render () {
    let imageArray = this.props.imageArray.photo;
    let galleryRender = imageArray.map((image, index) => <GalleryItem image={image} key={image.id}/>);


    return (
      <div className = 'galleryCont'>
        <p className = 'galleryTitle'> {this.searchText()} </p>
        <div className = 'galleryImages'>
          {galleryRender}
        </div>
      </div>
    )};
}

export default GalleryCont;
