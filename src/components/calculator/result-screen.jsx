import React from 'react';
import './result-screen.styles.css'

const ResultScreen = (props) => (
  <div className="result-screen">
    {props.children}
  </div>
);

export default ResultScreen;