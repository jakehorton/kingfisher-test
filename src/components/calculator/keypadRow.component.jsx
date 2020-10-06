import React from 'react';
import './keypadRow.styles.css';

const KeypadRow = (props) => (
    <div className="keypad__row">
      {props.children}
    </div>
);

export default KeypadRow;