import React from 'react';

const Description = props => {
  return (
    <div>
      <h2 className="header">{props.name}</h2>
      <p className="description">{props.job}</p>
    </div>
  );
};

export default Description;
