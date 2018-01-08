import React from 'react';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.results.cars
        }
    }

    render() {
        return(
            <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Sunroof</th>
                    </tr>
                    {this.props.results.map(result =>
                        <tr key={result._id}>
                            <td>{result.make}</td>
                            <td>{result.year}</td>
                            <td>{result.price}</td>
                            <td>{result.color}</td>
                            <td>{result.hasSunroof}</td>
                        </tr>
                    )}
                </thead>
            </table>
            </div>
        );
    }
}