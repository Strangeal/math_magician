import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../App.css';

export const Calculator = () => {
  const [counter, setCounter] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const buttonKeys = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '6', '5', '4', '-',
    '3', '2', '1', '+',
    '0', '.', '=',
  ];

  const onClickHandler = (e) => {
    const {
      target: { textContent: buttonName },
    } = e;

    const results = calculate(counter, buttonName);
    setCounter(results);
  };

  const { total, next } = counter;
  return (

    <div className="calculator__container">
      <h3>Let do some Maths!</h3>
      <div className="calculator">
        <div className="calculator__Ui">
          <div className="screen">{next || total || 0}</div>
          <div className="calculator__keys">
            {buttonKeys.map((each) => (
              <button
                key={each}
                onClick={(e) => onClickHandler(e)}
                type="button"
              >
                <span className="front">{each}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
