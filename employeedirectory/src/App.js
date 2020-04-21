import React from 'react';
import './App.css';

// import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/jumbotron';
import Searchbar from './components/SearchBar/searchbar';
import Table from './components/Table/index';

// import EmpAPIContainer from "./components/EmpAPIContainer";
// return <EmpAPIContainer />;

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <div>
        <Searchbar />
        <Table />
      </div>
    </div>
  );
}

export default App;