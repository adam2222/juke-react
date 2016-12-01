import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Album from './Album'
import axios from 'axios'

// const albums = [{
//   name: 'Abbey Road',
//   id: 1,
//   imageUrl: 'http://fillmurray.com/300/300',
//   songs: [{
//     id: 1,
//     name: 'Romeo & Juliette',
//     artists: [{name: 'Bill'}],
//     genre: 'Funk',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }, {
//     id: 2,
//     name: 'White Rabbit',
//     artists: [{name: 'Bill'}, {name: 'Alice'}],
//     genre: 'Fantasy',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }, {
//     id: 3,
//     name: 'Lucy in the Sky with Diamonds',
//     artists: [{name: 'Bob'}],
//     genre: 'Space',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }]
// },
// {
//   name: 'Yellow Submarine',
//   id: 2,
//   imageUrl: 'http://fillmurray.com/300/300',
//   songs: [{
//     id: 4,
//     name: 'London Calling',
//     artists: [{name: 'Bill'}],
//     genre: 'Punk',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }]
// }];

// const albumNames = albums.map(album => album.name)

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        albums: [{
          name: 'Abbey Road',
          id: 1,
          imageUrl: 'http://fillmurray.com/300/300',
          songs: [{
            id: 1,
            name: 'Romeo & Juliette',
            artists: [{name: 'Bill'}],
            genre: 'Funk',
            audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
          }, {
            id: 2,
            name: 'White Rabbit',
            artists: [{name: 'Bill'}, {name: 'Alice'}],
            genre: 'Fantasy',
            audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
          }, {
            id: 3,
            name: 'Lucy in the Sky with Diamonds',
            artists: [{name: 'Bob'}],
            genre: 'Space',
            audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
          }]
        },
        {
          name: 'Yellow Submarine',
          id: 2,
          imageUrl: 'http://fillmurray.com/300/300',
          songs: [{
            id: 4,
            name: 'London Calling',
            artists: [{name: 'Bill'}],
            genre: 'Punk',
            audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
          }]
        }]
        // albums: axios.get('api/albums').then(result => console.log(result.data))
      }
    }

    componentDidMount(){
      axios.get('/api/albums')
        .then((albumsList) => {
          this.setState({albums: albumsList.data})
        })
        .catch(console.error.bind(console))
    }


      render(){
          return (
            <div id="main" className="container-fluid">
              <Sidebar />
              <div className="col-xs-10">
                <h3>Albums</h3>
                <div className="row">
                  {this.state.albums.map((album, index) => {
                      return (<Album album={album} key={index.toString()} />);
                    })
                  }
                </div>
              </div>
              <Footer />
          </div>
        );
      }

  }

export default Main
