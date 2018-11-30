import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Image from './Image';

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="person">
        <section className="ui card">
          <Image pic="test.jpg" />
        </section>
      </section>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
