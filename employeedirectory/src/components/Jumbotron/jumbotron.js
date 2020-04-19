import React, { Component } from 'react';
import "./jumbotron.css";

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="heading">
                <h1>Employee Directory</h1>
                <h6>Click on carrots to filter by heading or use the search box to narrow your results.</h6>
            </div>
        )
    }
}
