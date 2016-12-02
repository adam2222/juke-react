
import React, {Component} from 'react';
import axios from 'axios';

class SingleAlbum extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.dir(this.props.album)
    const album = this.props.album;

    return (
      <div className="album col-xs-10">
          <div>
            <h3>{this.props.album.name}</h3>
            <img src={`/api/albums/${album.id}/image`} className="img-thumbnail" />
          </div>

          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Artists</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button className="btn btn-default btn-xs">
                    <span className="glyphicon glyphicon-play"></span>
                  </button>
                </td>

              </tr>
              <tr>
                <td>
                  <button className="btn btn-default btn-xs">
                    <span className="glyphicon glyphicon-play"></span>
                  </button>
                </td>
                  <td>{album.songs[0].name}</td>
                 <td>I SHOULD BE A STRING OF THIS SONGS ARTISTS</td>
                 <td>I SHOULD BE A SONG GENRE</td>
              </tr>
            </tbody>
          </table>

        </div>

    )
  }
}

export default SingleAlbum;
