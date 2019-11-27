import React from "react";
import Moment from "moment";

class Date extends React.Component {
    render () {
        return (
            <div>
                <h1>{Moment().format('dddd')}</h1>
                <p> {Moment().format('LL')}</p>
            </div>
        );
    }
}

export default Date;