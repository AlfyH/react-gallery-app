import React from 'react';
import '../styles/GalleryItem.css';
import partisan from '../img/partisan.jpg'

const GalleryItem = (props) => (
  <div className ='galleryItem'>
    {/*props.playerName*/}
    <img src= {partisan} alt="Partisan" height="267" width="200"></img>
  </div>
);

export default GalleryItem;
