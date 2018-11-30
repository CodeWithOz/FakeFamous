import React from 'react';

const Image = props => {
  return (
    <section className="image">
      <img src={props.pic} alt="Fake famous person" />
    </section>
  );
};

export default Image;
