import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artists extends Component{

    state = {
        loading: true,
        artists: [],
        id: {},
    }

        componentDidMount() {
        const url = 'http://localhost:8000/artists';
        fetch(url)
        .then((response) => { 
            return response.json()
            })
        .then((result) => {
            this.setState({ artists: result })
        })
    }

    goToNextPage = (e) => {
        this.props.history.push({
        pathname: '/ArtistsDetails',
        state: { artistsdetails: e.target.id }
        });
    }
    
    render () {
        return (
            <div className="App-content">
                { this.state.artists.map(artists =>  
                <div id={artists.id} 
                onClick={this.goToNextPage}> {artists.name} 
                </div> )}
            </div>
        );
    }
}

    export default Artists;