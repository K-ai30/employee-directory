import React from 'react';
import './App.css';

// import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/jumbotron';
import Searchbar from './components/SearchBar/searchbar';
import Form from './components/Form/index';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <div>
        <Searchbar />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;