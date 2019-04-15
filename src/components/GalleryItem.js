import React from 'react';

const GalleryItem = (props) => {

  const { farm, server, id, secret } = props.image

  return (
    <div className ='galleryItem'>
      <img src= {`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="Flickr" height="200" width="355"></img>
    </div>
  )


};

export default GalleryItem;
