import React from 'react';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Extras</th>
                    </tr>
                    {this.props.results.map(car =>
                        <tr key={car._id}>
                            <td>{car.make}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                            <td>{car.color}</td>
                            <td>
                                4 Wheel Drive: {car.isFourWheelDrive.toString()}<br />
                                Sunroof: {car.hasSunroof.toString()}<br />
                                Power windows: {car.hasPowerWindows.toString()}<br />
                                Heated seats: {car.hasHeatedSeats.toString()}<br />
                                Low miles: {car.hasLowMiles.toString()}<br />
                                Navigation: {car.hasNavigation.toString()} <br />
                            </td>
                        </tr>
                    )}
                </thead>
            </table>
        );
    }
}