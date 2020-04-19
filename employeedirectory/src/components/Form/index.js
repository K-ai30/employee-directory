import React, { Component } from "react";
import "./style.css";

export default class Form extends Component {
    render() {
        return (
            <div className="formList">
                <h1>Employee Directory</h1>
                <h6>Click on carrots to filter by heading or use the search box to narrow your results.</h6>
            </div>
        )
    }
}



    // Setting the component's initial state
    // state = {
    //   Image: "",
    //   Name: "",
    //   Phone: "",
    //   Email: "",
    //   DOB: ""
    // };
  
    // handleInputChange = event => {
    //   // Getting the value and name of the input which triggered the change
    //   const { name, value } = event.target;
  
      
    //   // Updating the input's state
    //   this.setState({
    //     [name]: value
    //   });
    // };