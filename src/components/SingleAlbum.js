import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'//component that takes in another component(called higher order component) take in component, apply from props to that component, then spit that component back out 
import albums from '../data.json'
import './style.css'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }

  componentDidMount() {
    const {albumId} = this.props.match.params

    const album = albums.find((element) => element.id === +albumId)

    if (!album){
      this.props.history.push('/404')
    }else {
      this.setState({
        album: album,
      })
    }
    //Find album using match object
  }
//takes in prevProps argument. Can take is prevState also but we don't need that here. prevProps is essentially the previous props in componentDidMount
  componentDidUpdate(prevProps) {
    const {albumId } = this.props.match.params //this is the current value
  if(albumId !== prevProps.match.params.albumId){
      const album = albums.find((element) => element.id === +albumId)

      if(!album){
        this.props.history.push('/404')
    }else {
      this.setState({
        album: album,
      })
    }
    //Check for change in match object and use it to find album
  }
}

  handleBuyAlbum = () => {
    alert('YOU BOUGHT IT')
    this.props.history.push('/404')
    //Return to home page
  }

  render() {
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => this.handleBuyAlbum()} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default withRouter(SingleAlbum)
