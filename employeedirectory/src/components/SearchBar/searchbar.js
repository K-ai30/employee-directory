import React, { Component } from 'react';
import "./searchbar.css";

const Searchbar = props => {
        return (
            <div className="searches">
                <label className="navbar-light text-center col-md-12" htmlFor="search"><h4 className="text-center">Search</h4></label>
                <nav className="navbar navbar-light custom-background justify-content-center">
                    <form className="form-inline">
                    <input 
                        onChange={props.handleInputChange}
                        value={props.searchTerm}
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                    >  
                    </input>
                   </form>    
                </nav>
            </div>
        )
}

export default Searchbar;