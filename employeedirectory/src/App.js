import React from 'react';
import API from "./utils/API";
import Jumbotron from './components/Jumbotron/jumbotron';
import Searchbar from './components/SearchBar/searchbar';
import Table from './components/Table/index';

export default class App extends React.Component {
  
  state = { 
    employeeList: [],
    searchTerm: "",
    // results: [],
    alphaNumericOrder: true
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

  handleSort = (sortBy) => {
		console.log(sortBy);
		const { employeeList, alphaNumericOrder } = this.state;
		let sortedEmployees;
		if (sortBy === 'name') {
			if (alphaNumericOrder === true) {
				sortedEmployees = employeeList.sort((a, b) => {
					if (a.name.first < b.name.first) {
						return -1;
          }
					if (a.name.first > b.name.first) {
						return 1;
					}
					return 0;
				});
			} else {
				sortedEmployees = employeeList.sort((a, b) => {
					if (a.name.first > b.name.first) {
						return -1;
					}
					if (a.name.first < b.name.first) {
						return 1;
					}
					return 0;
				});
			}
		} else if (sortBy === 'email') {
			if (alphaNumericOrder === true) {
				sortedEmployees = employeeList.sort((a, b) => {
					if (a.email < b.email) {
						return -1;
					}
					if (a.email > b.email) {
						return 1;
					}
					return 0;
				});
			} else {
				sortedEmployees = employeeList.sort((a, b) => {
					if (a.email > b.email) {
						return -1;
					}
					if (a.email < b.email) {
						return 1;
					}
					return 0;
				});
			}
		}
		this.setState({ employeeList: employeeList, alphaNumericOrder: !alphaNumericOrder });
		console.log(sortedEmployees);

  };

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
        <Table employeeList={this.state.employeeList}
        handleSort={this.handleSort}/>
      </div>
      </div>
    );
  }
}