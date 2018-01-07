import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // perhaps pick a random car
    this.state = {
      value: '',
      color: '',
      make: '',
      sunroof: false,
      power_windows: false,
      heated_seats: false,
      low_miles: false,
      navigation: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      // value: event.target.value
      [name]: value
    });
  }

  componentWillUpdate(props, state) {
    console.log(state);
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

  }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <br />
        <label>
          4 Wheel Drive: 
          <input type="checkbox" checked={this.state.four_wheel} name="four_wheel" value="four_wheel" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Sun roof: 
          <input type="checkbox" checked={this.state.sunroof} name="sunroof" value="sunroof" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Has power windows:
          <input type="checkbox" checked={this.state.power_windows} name="power_windows" value="power_windows" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Heated seats: 
          <input type="checkbox" checked={this.state.heated_seats} name="heated_seats" value="heated_seats" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Low miles:
          <input type="checkbox" checked={this.state.low_miles} name="low_miles" value="low_miles" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Navigation:
          <input type="checkbox" checked={this.state.navigation} name="navigation" value="navigation" onChange={this.handleChange} />
        </label>
        <br />
        <label>Make:
          <select name="make" value={this.state.make} onChange={this.handleChange}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <br />
        <label>Year:
          <select name="year" value={this.state.year} onChange={this.handleChange}>
            <option value="1111">1111</option>
            <option value="1111">2222</option>
            <option value="1111">3333</option>
            <option value="1111">4444</option>
          </select>
        </label>
        <br />
        <label>Color:
          <select value={this.state.color} name="colors" onChange={this.handleChange}>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Filter" />
      </form>
      <div className="results">results here</div>
      </div>
    );
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

export default App;
