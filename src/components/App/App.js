import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryInfo from '../GalleryInfo/GalleryInfo'
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";


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
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of 2020 Road Trips</h1>
          <p className="App-intro">By: Dalton Meyer</p>
        </header>
        <div className ='nav'>
        <NavLink exact to="/">Gallery</NavLink>
          <NavLink to="/info">info</NavLink>
        </div>
        <br/>
        <Switch>
          <Route exact path='/'>
        <GalleryList pictures={ this.state.artList } gallery={this.getGallery}/>
        </Route>
        <Route path='/info'>
          <GalleryInfo/>
        </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
