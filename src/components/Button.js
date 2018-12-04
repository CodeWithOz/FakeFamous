import React from 'react';

const Button = props => {
  return (
    <div
      className={`ui basic ${props.color} button`}
      onClick={props.onClick}
    >{props.text}</div>
  );
};

export default Button;
