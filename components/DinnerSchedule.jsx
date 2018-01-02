import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class DinnerSchedule extends Component {
    constructor(props) {
        super(props);

        this.generateTableHeader = this.generateTableHeader.bind(this);
        this.generateTableContent = this.generateTableContent.bind(this);
    }

    generateTableHeader() {
        return this.props.meals.map((entity, i) => {
            return (
                <div key={i} className="col-md-3 col-sm-3 col-xs-3">{entity}</div>
            )
        });
    }

    generateTableContent() {
        var rows = [];
        for (var i = 0; i <= 7; i++) {
            rows.push(<td key={i}></td>);
        }
        return this.props.days.map((entity, j) => {
            return (
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div key={j} className="col-md-3 col-sm-3 col-xs-3">{entity.charAt(0)}</div>
                    <div>{rows}</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="col-md-3 col-sm-3 col-xs-3">Day</div>
                    {this.generateTableHeader()}
                </div>
                {this.generateTableContent()}
            </div>
        );
    }
}
/*

        return (
            <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Day</th>
                        {this.generateTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.generateTableContent()}
                </tbody>
            </Table>
            </div>
        );
 */

DinnerSchedule.defaultProps = {
    days: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    meals: [
        "Breakfast","Lunch", "Dinner"
    ]
}

export default DinnerSchedule;
