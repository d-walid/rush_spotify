import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="App">
                <p>This is a search page. But nevermind, she don't actually work :(</p>
                <input type="text" className="input" onChange={this.handleChange} placeholder="albums, artists, genres..." />
            </div>
        )
    }
}

export default Search;