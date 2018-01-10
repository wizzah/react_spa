import React from 'react';

export default class Display extends React.Component {

    render() {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Extras</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.results.map(car =>
                        <tr key={car._id}>
                            <td>{car.make}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                            <td>{car.color}</td>
                            <td>
                                {car.isFourWheelDrive ? (<p>4 wheel drive</p>) : (<span></span>)}
                                {car.hasSunroof ? (<p>Sunroof</p>) : (<span></span>)}
                                {car.hasPowerWindows ? (<p>Power Windows</p>) : (<span></span>)}
                                {car.hasHeatedSeats ? (<p>Heated Seats</p>) : (<span></span>)}
                                {car.hasLowMiles ? (<p>Low Miles</p>) : (<span></span>)}
                                {car.hasNavigation ? (<p>Navigation System</p>) : (<span></span>)}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}