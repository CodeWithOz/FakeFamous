import React from 'react';
import Quote from './Quote';
import renderer from 'react-test-renderer';

test('Quote component exists', () => {
  const quote = renderer.create(
    <Quote words="test quote" />
  );

  // render the component
  const tree = quote.toJSON();
  expect(tree).toMatchSnapshot();
});
