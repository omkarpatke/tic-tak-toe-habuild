import React from 'react';
import './Square.css';

const Square = (props) => {
  return (
    <div className={`${props.className} square`} onClick={props.onClick}>{props.value}</div>
  )
}

export default Square;