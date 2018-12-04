import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Description from './components/Description';
import Quote from './components/Quote';
import Button from './components/Button';
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
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleNextClick = () => {
    this.setState(this.generatePerson());
  }

  render() {
    return (
      <section>
        <Navbar />
        <section className="person">
          <section className="ui centered card">
            <Image pic={this.state.image} />
            <section className="content">
              <Description
                name={this.state.name}
                job={this.state.claimToFame}
              />
              <div className="ui divider"></div>
              <Quote words={this.state.quote} />
              {/*
                This button should be its own component. However, I have
                not yet learned how to change a parent component's state
                from a child component, so for now it remains hard-coded
                into the parent component.
              */}
              <div className="ui divider"></div>
              <section className="extra content">
                <div className="center aligned next-button">
                  <Button
                    onClick={this.handleNextClick}
                    text='Next'
                  />
                </div>
              </section>
            </section>
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
