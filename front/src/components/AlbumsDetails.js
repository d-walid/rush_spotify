import React, { Component } from 'react';

class AlbumsDetails extends Component{

    state = {
        album_id: null,
        loading: true,
        albums: [],
        tracks: [],
        id: this.props.location.state.albumsdetails,
    };

        componentDidMount() {
        const url_albums = `http://localhost:8000/albums/${this.state.id}`;

        fetch(url_albums)
        .then((response) => { 
            return response.json()
            })
        .then((result) => {
            this.setState({ albums: result })
        })

        const url_tracks = `http://localhost:8000/albums/${this.state.id}/${this.state.id}`;
        fetch(url_tracks)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            this.setState({ tracks: result })
        })
    }

    render () {
        return (
            <div className="App">
            { this.state.albums.map(albums =>  
            <div>
                <p><b>Album's name</b> : {albums.name}</p>
                <p><b>Album's description</b> :</p>
                <p>{albums.description}</p>
                <p><b>Album's cover</b> :</p>
                <img src={albums.cover_small} />
                <p><b>Release date</b> : {albums.release_date}</p>
                <p><b>Album's popularity</b> : {albums.popularity}</p>
                </div>
            )}
            <p><b>List of songs</b> :</p>
            { this.state.tracks.map(tracks => 
                <div>
                <p>{tracks.trackname}<br />
                <audio controls src={tracks.mp3}></audio>
                </p>
                </div>
                )}
        </div>
        );
    }
}

    export default AlbumsDetails;