/*eslint no-trailing-spaces: 0, no-multiple-empty-lines: 0 */

import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Album from './Album';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';


class Main extends Component {
    constructor(props) {
      super(props);

      this.state = {
        albums: [],
        albumsView: true,
        selectedAlbum: {}
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick (album){
      this.setState({ selectedAlbum: album, albumsView: false })
    }

    componentDidMount(){
      axios.get('/api/albums')
        .then((albumsList) => {
          this.setState({albums: albumsList.data})
          console.dir(this.state.albums)
        })
        .catch(console.error.bind(console))
    }
      render(){
          return (
            <div id="main" className="container-fluid">
              <Sidebar />
              <div className="col-xs-10">

              { this.state.albumsView ? (
                        <div className="row">
                        {this.state.albums.map((album, index) => {
                            return (<Album album={album} key={index.toString()} clickHandler={this.handleClick}/>);
                          })
                        }
                        </div> )
                 : (<div className="row">
                   <SingleAlbum album={this.state.selectedAlbum}/>
                 </div>)}
              </div>
              <Footer />
          </div>
        );
      }
  }

export default Main
