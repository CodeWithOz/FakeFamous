import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('Button component exists', () => {
  const button = renderer.create(
    <Button
      onClick={() => console.log('Dummy handler')}
      text='Dummy button'
    />
  );

  // render the component
  const tree = button.toJSON();
  expect(tree).toMatchSnapshot();
});
