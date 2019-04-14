import React, {Component} from 'react';
import GalleryItem from './GalleryItem';

class GalleryCont extends Component {

  state = {
    players: [
      {
        name: "Alfy",
        id: 1
      },
      {
        name: "Emma",
        id: 1
      },
      {
        name: "Shirin",
        id: 2
      }
    ]
  };

  render () {
    return (
      <div className = 'galleryCont'>
        <span className = 'galleryTitle'> Pictures of trees. </span>
        {this.state.players.map ( (player, index) =>
        <GalleryItem
          playerName = {player.name}
          id = {player.id}
          index = {index}
         />
        )}
      </div>
    )};
}

export default GalleryCont;
