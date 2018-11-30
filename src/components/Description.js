import React from 'react';

const Description = props => {
  return (
    <div>
      <h2 className="center aligned header">{props.name}</h2>
      <p className="center aligned description">{props.job}</p>
    </div>
  );
};

export default Description;
