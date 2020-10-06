import React from 'react';
import './button.styles.css';

const Button = (props) => (
  <button className="btn" onClick={props.onButtonPress}>
    {props.children}
  </button>
);

export default Button;