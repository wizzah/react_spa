import React from 'react';
import FilterForm from './FilterForm';
import Json from './cars.json';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      json: Json
    };

  }

  render() {
    return (
      <div className="container">
        <FilterForm json={this.state.json} />
      </div>
    );
  }
}
