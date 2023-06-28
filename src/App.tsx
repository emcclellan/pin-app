import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterBar from './FilterBar/FilterBar';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <FilterBar/>
    </div>
  );
}

export default App;
