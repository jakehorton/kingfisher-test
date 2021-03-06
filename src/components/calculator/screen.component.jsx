import React from 'react';
import ResultScreen from './result-screen';
import ComputationScreen from './computation-screen';
import './screen.styles.css';

const Screen = (props) => (
  <section className="screen">
    <ResultScreen>{props.result}</ResultScreen>
    <ComputationScreen>{props.equation}</ComputationScreen>
  </section>
);

export default Screen;