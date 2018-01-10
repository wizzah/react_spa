import React from 'react';
import FilterForm from './FilterForm';
import Cars from './cars.json';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <FilterForm json={Cars} />
      </div>
    );
  }
}
