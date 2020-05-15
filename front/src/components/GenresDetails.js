import React, { Component } from 'react';
import Albums from './Albums';

class GenresDetails extends Component{
    state = {
        loading: true,
        genres: [],
        id_genres: this.props.location.state.genresdetails
    };

        componentDidMount() {
        const url = `http://localhost:8000/genres/${this.state.id_genres}`;
        fetch(url)
        .then((response) => { 
            return response.json()
            })
        .then((result) => {
            this.setState({ genres: result })
        })
    }

    render () {
        return (
            <div className="App">
                <p>List of albums from this genre : </p>
                { this.state.genres.map(genres => 
                <div>
                    <p>Name : {genres.name}</p>
                    <p>ID album : {genres.album_id}</p>
                </div> 
                )}
            </div>
        );
    }
}

    export default GenresDetails;