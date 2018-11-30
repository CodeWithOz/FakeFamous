import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Image from './Image';
import faker from 'faker';

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="person">
        <section className="ui card">
          <Image pic={faker.image.avatar()} />
        </section>
      </section>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
