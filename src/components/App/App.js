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
          <h1 className="App-title">Gallery of 2020 Road Trips</h1>
          <p className="App-intro">By: Dalton Meyer</p>
        </header>
        <br/>
        <GalleryList pictures={ this.state.artList } gallery={this.getGallery}/>
      </div>
    );
  }
}

export default App;
