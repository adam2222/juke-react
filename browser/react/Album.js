{/* glboal props.album */}

import React from 'react';
import axios from 'axios';


class Album extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageUrl: ''
    };
  }

  render(){
    return (
        <div className="col-xs-4">
        <a className="thumbnail" href="#" onClick={() => {this.props.clickHandler(this.props.album)}}>
          <img src={"/api/albums/" + this.props.album.id + "/image"} />
          <div className="caption">
            <h5>
              <span> {this.props.album.name} </span>
            </h5>
            <small> {this.props.album.songs.length} songs</small>
          </div>
        </a>
      </div>
    );
  }
}

export default Album
