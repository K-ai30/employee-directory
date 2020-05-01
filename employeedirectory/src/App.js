import React from 'react';
import API from "./utils/API";
import Jumbotron from './components/Jumbotron/jumbotron';
import Searchbar from './components/SearchBar/searchbar';
import Table from './components/Table/index';

export default class App extends React.Component {
  
  state = { 
    employeeList: [],
    searchTerm: ""
  }

  componentDidMount() {
      this.getEmployees();
  }

  getEmployees() {
    API.getEmployees().then( res => {
      this.setState({ employeeList: res.data.results });
    })   
    .catch(err => console.log(err))     
  }

  handleInputChange = event => {
      const value = event.target.value;
      if (!value) {
        this.setState({ searchTerm: ""})
        this.getEmployees();
      } else {
        this.setState({
          employeeList: this.state.employeeList.filter(employee => {
            if (employee.name.first.includes(value)
            || employee.name.last.includes(value)
            || employee.email.includes(value)) {
              return employee;
            }
          }),
          searchTerm: value
        });
      }
  };

  // handleFormSubmit = event => {
  //     event.preventDefault();

  // };

  render() {
    console.log('Results: ', this.state);
    return (
      <div className="App">
        <Jumbotron />
      <div>
        <Searchbar 
          searchTerm={this.state.searchTerm} 
          handleInputChange={this.handleInputChange}
        />
        <Table employeeList={this.state.employeeList}/>
      </div>
      </div>
    );
  }
}