import React, { Component } from 'react';


export default class Popup extends Component {

    render() {
        return (
            <div className="map-popup">
                <a href={`./courts/${this.props.court.id}`}>{this.props.court.name}</a>
            </div>
        )
    }
}