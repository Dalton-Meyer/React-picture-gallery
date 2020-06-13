import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


class App extends Component {
  state = {
    artList: [],
  }
 
  componentDidMount = () => { this.getGallery()};

  getGallery = () => {
    axios.get('./gallery')
    .then((response) => {
    console.log(response.data);
      this.setState({
        artList: response.data
      })}).catch((error) => {console.log(error)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList pictures={ this.state.artList }/>
      </div>
    );
  }
}

export default App;
