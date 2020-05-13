import React, { Component } from "react";
import "./style.css";
import moment from 'moment';
import API from "../../utils/API";
import '../../App';

export default function Table (props) {
    //1. create a button next to our th for Name that will sort when clicked
    
    //2. pass that button a click handler that we define in App.js (pass it the same way we pass employeeList, aka props)
    //3. Define a click handler in app.js that will sort this.state.employeeList alphabetically by last name (or first name, dealer's choice)
    //      --look at MDN's Array.prototype.sort() documentation for how to sort an array of objects by a specific property in each object
    return (
            <div className="col-md-11 mx-auto">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name <button onClick={() => {props.handleSort('name')}}><i class="fas fa-sort-down"></i></button></th>
                        <th scope="col">Phone <button className="disabled"><i class="fas fa-sort-down"></i></button></th>
                        <th scope="col">Email <button onClick={() => {props.handleSort('email')}}><i class="fas fa-sort-down"></i></button></th>
                        <th scope="col">DOB <button className="disabled"><i class="fas fa-sort-down"></i></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employeeList.map((employee, index) => (
                            <tr key={index}>
                                {/* <th scope="row"></th> */}
                                <td><img src={ employee.picture.thumbnail } alt="photo id"/></td>
                                <td>{ employee.name.first } { employee.name.last }</td>
                                <td>{ employee.phone }</td>
                                <td>{ employee.email }</td>
                                <td>{ moment(employee.dob.date).format("MM/DD/YYYY") }</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        )
}