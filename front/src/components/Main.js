import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Genres from './Genres.js';
import GenresDetails from './GenresDetails.js';
import Albums from './Albums.js';
import AlbumsDetails from  './AlbumsDetails.js';
import Artists from './Artists.js';
import ArtistsDetails from './ArtistsDetails.js';
import Search from './Search.js';

const Main = () => (
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/Search" component={Search} />
            <Route path="/Albums/" component={Albums} />
            <Route path="/AlbumsDetails" component={AlbumsDetails} />
            <Route path="/Artists" component={Artists} />
            <Route path="/ArtistsDetails" component={ArtistsDetails} />
            <Route path="/Genres" component={Genres} />
            <Route path="/GenresDetails" component={GenresDetails} />
        </Switch>
)

export default Main;

