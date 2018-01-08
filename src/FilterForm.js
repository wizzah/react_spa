import React from 'react';
import Display from './Display';
import './App.css';

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: props.json,
      filter_form_state: {
        color: '',
        make: '',
        hasSunroof: true,
        isFourWheelDrive: true,
        hasPowerWindows: true,
        hasHeatedSeats: true,
        hasLowMiles: true,
        hasNavigation: true,
        exactMatch: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const { filter_form_state } = this.state;
    filter_form_state[name] = value;

    // filter here

    let filteredCars = [];
    const filterProperties = Object.keys(filter_form_state);

    // check exact match. This is for false:
    for(let i = 0; i < this.props.json.length; i++) {
      const car = this.props.json[i];
      // compare keys in every car
      for(let j = 0; j < filterProperties.length; j++) {
        const prop = filterProperties[j];
        if(typeof(filter_form_state[prop]) == "boolean") {
          if(filter_form_state[prop] == true && car[prop] == true) {
            filteredCars.push(car);
            break
          }
        } else if(typeof(filter_form_state[prop]) == "string") {
          if(filter_form_state[prop] == car[prop]) {
            filteredCars.push(car);
            break
          }
        }
      }
    }

    // add cars and filter to the state
    this.setState({
      cars: filteredCars,
      filter_form_state,
    });

  }

  render() {
    // move this into the constructor and make sets for the actual values, like "Toyota, Mercedes" etc
    // then build the tags in the html down there
    console.log(this.props.json);
    let makes = new Set();
    let years = new Set();
    let colors = new Set();
    for(let i = 0; i < this.props.json.length; i++) {
      const make = this.props.json[i].make;
      const potentialOption = <option key={i} value={make}>{make}</option>;
      if(!makes.has(potentialOption)) {
        makes.add(
          <option key={i} value={make}>{make}</option>
        );
      }
    }
    return (
      <div className="container">
        <form>
          <label>
            Show only exact matches: 
            <input type="checkbox" checked={this.state.filter_form_state.exactMatch} name="exactMatch" value="exactMatch" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            4 Wheel Drive: 
            <input type="checkbox" checked={this.state.filter_form_state.isFourWheelDrive} name="isFourWheelDrive" value="isFourWheelDrive" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Sun roof: 
            <input type="checkbox" checked={this.state.filter_form_state.hasSunroof} name="hasSunroof" value="hasSunroof" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Has power windows:
            <input type="checkbox" checked={this.state.filter_form_state.hasPowerWindows} name="hasPowerWindows" value="hasPowerWindows" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Heated seats: 
            <input type="checkbox" checked={this.state.filter_form_state.hasHeatedSeats} name="hasHeatedSeats" value="hasHeatedSeats" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Low miles:
            <input type="checkbox" checked={this.state.filter_form_state.hasLowMiles} name="hasLowMiles" value="hasLowMiles" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Navigation:
            <input type="checkbox" checked={this.state.filter_form_state.hasNavigation} name="hasNavigation" value="hasNavigation" onChange={this.handleChange} />
          </label>
          <br />
          <label>Make:
            <select name="make" value={this.state.filter_form_state.make} onChange={this.handleChange}>
              <option value="{this.state.filter_form_state.make}">Select a Make</option>
              {this.makes}
            </select>
          </label>
          <br />
          <label>Year:
            <select name="year" value={this.state.filter_form_state.year} onChange={this.handleChange}>
              <option value="{this.state.filter_form_state.year}">Select a year</option>
              {this.props.json.map(result =>
                <option key={result.id} value={result.year}>{result.year}</option>
              )}
            </select>
          </label>
          <br />
          <label>Color:
            <select value={this.state.filter_form_state.color} name="color" onChange={this.handleChange}>
              <option value="{this.state.filter_form_state.color}">Select a color</option>
              {this.props.json.map(result =>
                <option key={result.id} value={result.color}>{result.color}</option>
              )}
            </select>
          </label>
          <br />
          <Display results={this.state.cars} />
        </form>
      </div>
    );
  }
}
