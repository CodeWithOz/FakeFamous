import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Image from './Image';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.generatePerson = () => {
      return {
        image: faker.image.avatar(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        claimToFame: `${faker.name.jobTitle()}`,
        quote: `${faker.lorem.sentence()}`
      };
    };

    this.state = this.generatePerson();
  }

  render() {
    return (
      <section>
        <Navbar />
        <section className="person">
          <section className="ui card">
            <Image pic={this.state.image} />
          </section>
        </section>
      </section>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
