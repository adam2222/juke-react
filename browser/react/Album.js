import React from 'react';
import axios from 'axios';


class Album extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageUrl: ""
    };
  }

  componentDidMount(){
    axios.get(`/api/albums/${this.props.album.id}/image`)
      .then((returnedResult)=>{
        this.setState({imageUrl: returnedResult.data})
        console.log(returnedResult.data.body.pic)
      })
    }


  render(){
    return (
        <div className="col-xs-4">
        <a className="thumbnail" href="#">
          <img src={this.props.album.imageUrl} />
          <div className="caption">
            <h5>
              <span> {this.props.album.name} </span>
            </h5>
            <small> {this.props.album.songs.length} songs</small>
          </div>
        </a>
      </div>);
  }
}

export default Album
// (previousState, props) => {
//   return {previousState.image: returnedResult}
