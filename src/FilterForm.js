import React from 'react';
import Display from './Display';
import './App.css';

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    let makes = new Set();
    let years = new Set();
    let colors = new Set();

    for(let i = 0; i < this.props.json.length; i++) {

      const make = this.props.json[i].make;
      if(!makes.has(make)) {
        makes.add(make);
      }
      const year = this.props.json[i].year;
      if(!years.has(year)) {
        years.add(parseInt(year));
      }
      const color = this.props.json[i].color;
      if(!colors.has(color)) {
        colors.add(color);
      }
    }

    makes = Array.from(makes);
    years = Array.from(years).sort();
    colors = Array.from(colors);

    this.state = {
      cars: props.json,
      makes: makes,
      years: years,
      colors: colors,
      filter_form_state: {
        color: '',
        make: '',
        year: 0,
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
    if(name == "year") {
      filter_form_state[name] = parseInt(value)
    }

    // filter here

    let filteredCars = [];
    const filterProperties = Object.keys(filter_form_state);

    // check exact match
    if(this.state.filter_form_state.exactMatch) {

      for(let i = 0; i < this.props.json.length; i++) {
        const car = this.props.json[i];
        // compare keys in every car
        let add = true;
        for(let j = 0; j < filterProperties.length; j++) {
          const prop = filterProperties[j];
          if(car[prop]) {
            if(filter_form_state[prop] != car[prop]) {
              add = false;
              break
            }
          }
        }
        if(add) {
          filteredCars.push(car);
        }
      }

    } else {

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
    }

    // add cars and filter to the state
    this.setState({
      cars: filteredCars,
      filter_form_state,
    });

  }

  render() {

    return (
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
              {this.state.makes.map(make =>
                <option key={make} value={make}>{make}</option>
              )}
            </select>
          </label>
          <br />
          <label>Year:
            <select name="year" value={this.state.filter_form_state.year} onChange={this.handleChange}>
              <option value="{this.state.filter_form_state.year}">Select a year</option>
              {this.state.years.map(year =>
                <option key={year} value={year}>{year}</option>
              )}
            </select>
          </label>
          <br />
          <label>Color:
            <select value={this.state.filter_form_state.color} name="color" onChange={this.handleChange}>
              <option value="{this.state.filter_form_state.color}">Select a color</option>
              {this.state.colors.map(color =>
                <option key={color} value={color}>{color}</option>
              )}
            </select>
          </label>
          <br />
          <Display results={this.state.cars} />
        </form>
    );
  }
}
