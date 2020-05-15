import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component{
    render () {

        return (
            <div className="Header">
                    <button><Link to="/Home">Home</Link></button>
                    <button><Link to="/Search">Search</Link></button>
                    <button><Link to="/Albums">Albums</Link></button>
                    <button><Link to="/Artists">Artists</Link></button>
                    <button><Link to ="/Genres">Genres</Link></button>
            </div>
        )
    }}

    export default Header;