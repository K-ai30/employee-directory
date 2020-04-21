import React, { Component } from "react";
import Card from "./Card";
import Col from "./Col";
import Container from "./Container";
import EmployeeDetail from "./EmpDetail";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import SearchBar from "./Searchbar";
import API from "../utils/API";

class EmpAPIContainer extends Component {
    state = {
      results: {},
      search: ""
    };

    componentDidMount() {
        this.searchEmployees(" ");
    }

    searchEmployees = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        <Jumbotron />
        <SearchBar />
        <Container>
            <br></br>
            <Card>
                <Row>
                    <Col size="md-12">
                        <EmployeeDetail
                            imgSrc={this.state.results.picture.thumbnail}
                            name={this.state.results.name}
                            phone={this.state.results.phone}
                            email={this.state.results.email}
                            dob={this.state.results.dob}
                        />
                    </Col>
                </Row>
            </Card>
        </Container>
    }
}

export default EmpAPIContainer;