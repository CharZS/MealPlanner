import React, { Component } from 'react';
import {Glyphicon, Table} from 'react-bootstrap';


let itemCls1 = "col-md-1 col-sm-1 col-xs-1";
let itemCls2 = "col-md-2 col-sm-2 col-xs-2";
let itemCls3 = "col-md-3 col-sm-3 col-xs-3";
let itemCls4 = "col-md-4 col-sm-4 col-xs-4";
let groupCls = "col-md-12 col-sm-12 col-xs-12";

class DinnerSchedule extends Component {
    constructor(props) {
        super(props);

        this.generateTableHeader = this.generateTableHeader.bind(this);
        this.generateTableContent = this.generateTableContent.bind(this);
    }

    generateTableHeader() {
        return this.props.meals.map((entity, i) => {
            var label = entity.toLowerCase();
            let classList = entity=="Breakfast"||entity=="Snacks"?itemCls2:itemCls3;
            return (
                <div key={i} className={"section-"+ label + " " + classList}>{entity}</div>
            )
        });
    }

    generateTableContent() {
        var rows = [];
        for (var i = 0; i < this.props.meals.length; i++) {
            let classList = i==0||i==this.props.meals.length-1?itemCls2:itemCls3;
            rows.push(
                <div key={i} className={"day-content section-"+ i + " " + classList}>
                    <span className="add-recipe-schedule-btn"><Glyphicon glyph="plus-sign" /></span>
                </div>
            );
        }
        return this.props.days.map((entity, j) => {
            return (
                <div key={j} className={"row-day row-" + entity + " " + groupCls}>
                    <div key={j} className={"section-header " + itemCls1}>{entity.charAt(0)}</div>
                    {rows}
                </div>
            )
        });
    }

    render() {
        return (
            <div className={groupCls}>
                <div className={"schedule-header " + groupCls}>
                    <div className={"section-day " + itemCls1}>Day</div>
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
        "Breakfast","Lunch", "Dinner", "Snacks"
    ]
}

export default DinnerSchedule;
