import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

export class Calculator extends Component {
  constructor() {
    super();
    this.buttonKeys = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '6', '5', '4', '-',
      '3', '2', '1', '+',
      '0', '.', '=',
    ];

    this.state = {
      total: '0',
      next: null,
      operation: null,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (e) => {
    const {
      target: { textContent: buttonName },
    } = e;

    const results = calculate(this.state, buttonName);
    this.setState(results);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator__Ui">
          <div className="screen">
            {next || total || 0 }
          </div>
          <div className="calculator__keys">
            {this.buttonKeys.map((each) => <button key={each} onClick={(e) => this.onClickHandler(e)} type="button"><span className="front">{each}</span></button>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
