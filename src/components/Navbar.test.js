import React from 'react';
import Navbar from './Navbar.js';
import renderer from 'react-test-renderer';

test('Navbar exists', () => {
  const navbar = renderer.create(
    <Navbar />
  );

  // render the navbar
  const tree = navbar.toJSON();
  expect(tree).toMatchSnapshot();
});
