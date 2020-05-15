import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Genres extends Component{

    state = {
        loading: true,
        genres: [],
        id:{},
    }

        componentDidMount() {
        const url = 'http://localhost:8000/genres';
        fetch(url)
        .then((response) => { 
            return response.json()
            })
        .then((result) => {
            this.setState({ genres: result })
        })
    }

    goToNextPage = (e) => {
        this.props.history.push({
        pathname:'/GenresDetails',
        state: { genresdetails: e.target.id}    
        });
    }
    render () {
        return (

            <div className="App-content">
                { this.state.genres.map(genres =>
                <div id={genres.id} onClick={this.goToNextPage}>
                    {genres.name}</div>) }
            </div>
        );
    }
}

    export default Genres;