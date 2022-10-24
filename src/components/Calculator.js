import React, { Component } from 'react';
import './Calculator.css';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.buttonKeys = [
      'AC', '+/-', '%', '/',
      '7', '8', '9', '*',
      '6', '5', '4', '-',
      '3', '2', '1', '+',
      '0', '.', '=',
    ];
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator__Ui">
          <div className="calculator__display">
            <input className="screen" type="text" name="" readOnly />
          </div>

          <div className="calculator__keys">
            {this.buttonKeys.map((each) => <button key={each} type="button"><span className="front">{each}</span></button>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
