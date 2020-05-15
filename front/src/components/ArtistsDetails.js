import React, { Component } from 'react';

class ArtistsDetails extends Component{

    state = {
        album_id: null,
        loading: true,
        artists: [],
        albums: [],
        tracks: [],
        id_artist: this.props.location.state.artistsdetails
    };

        componentDidMount() {
        const url_artists = `http://localhost:8000/artists/${this.state.id_artist}`;

        fetch(url_artists)
        .then((response) => { 
            return response.json()
            })
        .then((result) => {
            this.setState({ artists: result })
        })

        const url_artists_plus = `http://localhost:8000/artists/${this.state.id_artist}/${this.state.id_artist}`;
        fetch(url_artists_plus)
        .then((response) => { 
            return response.json()
            })
        .then((result) => {
            this.setState({ albums: result })
        })
    }

    render () {
        return (
            <div className="App">
            { this.state.artists.map(artists =>  
            <div>
                <p><b>Artist's name</b> : {artists.name}</p> 
                <p><b>Artist's description</b> : {artists.description}</p>
                <p><b>Artist's biography</b> :</p>
                <p>{artists.bio}</p>
                <img src={artists.photo} />
            </div> 
            )}
            <p><b>List of albums from this artist :</b></p>
            { this.state.albums.map(albums => 
                <div>
                    <p>{albums.albumname}</p>
            </div>
            )}
            </div>
        );
    }
}

    export default ArtistsDetails;