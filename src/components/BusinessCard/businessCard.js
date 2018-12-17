import React, { Component } from 'react';

import './businessCard.css';

export default class BusinessCard extends Component {
  render() {
    return (
        <div className="presentationCard--wrapper">
        <div className="textBlock">
          <h4>Cпикер: {this.props.name}</h4>
          <h5>{this.props.position}</h5>
          <h6>{this.props.company}</h6>
        </div>
          <img alt=":(" src={this.props.img} className="avatar"/>
        </div>
    );
  }
}
