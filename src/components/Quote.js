import React from 'react';

const Quote = props => {
  return (
    <p
      className="center aligned quote"
      style={{
        fontSize: '1.8em'
      }}
    >"{props.words}"</p>
  );
};

export default Quote;
