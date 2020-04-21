import React, { Component } from "react";
import "./style.css";

export default class Table extends Component {
    render() {
        return (
            <div className="col-md-11 mx-auto">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"></th>
                        <td>Mark Taylor</td>
                        <td>(407)-330-1010</td>
                        <td>email@email.com</td>
                        <td>5/10/1960</td>
                        </tr>
                        <tr>
                        <th scope="row"></th>
                        <td>Jacob Frank</td>
                        <td>(407)-330-1010</td>
                        <td>email@email.com</td>
                        <td>5/10/1960</td>
                        </tr>
                        <tr>
                        <th scope="row"></th>
                        <td>Larry James</td>
                        <td>(407)-330-1010</td>
                        <td>email@email.com</td>
                        <td>5/10/1960</td>
                        </tr>
                    </tbody>
                    </table>
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