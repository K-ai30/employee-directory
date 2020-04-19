import React, { Component } from 'react';
import "./searchbar.css";

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searches">
                <nav className="navbar navbar-light custom-background justify-content-center">
                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                    </form>    
                </nav>
            </div>
        )
    }
}
