import React, { Component } from 'react';
import "./searchbar.css";

export default class Searchbar extends Component {
    render() {
        return (
            <div className="searches">
                <label className="navbar-light text-center col-md-12" htmlFor="search"><h4 className="text-center">Search</h4></label>
                <nav className="navbar navbar-light custom-background justify-content-center">
                    <form className="form-inline">
                    <input 
                        onChange={this.props.handleInputChange}
                        value={this.props.value}
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                    >  
                    </input>
                    <button className="btn btn-outline custom-color my-2 my-sm-0" type="submit">Search</button>
                    </form>    
                </nav>
            </div>
        )
    }
}
