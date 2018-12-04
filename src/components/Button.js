import React from 'react';

const Button = props => {
  return (
    <div
      className={`ui basic ${props.color} button`}
      onClick={props.onClick}
    >{props.text}</div>
  );
};

Button.defaultProps = {
  color: 'green'
};

export default Button;
