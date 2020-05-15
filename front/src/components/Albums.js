import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Albums extends Component {

    state = {
        loading: true,
        albums: [],
        id: {},
    };

    componentDidMount() {
        const url = 'http://localhost:8000/albums';
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ albums: result })
            })
    }

    goToNextPage = (e) => {
        this.props.history.push({
            pathname: '/AlbumsDetails',
            state: { albumsdetails: e.target.id }
        });
    }

    render() {
        return (
            <div className="App-content">
                {this.state.albums.map(albums =>
                    <div id={albums.id}
                        onClick={this.goToNextPage}> {albums.name}
                    </div>)}
            </div>
        );
    }
}

export default Albums;