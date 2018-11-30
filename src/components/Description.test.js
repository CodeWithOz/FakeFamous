import React from 'react';
import Description from './Description';
import renderer from 'react-test-renderer';

test('Description component exists', () => {
  const description = renderer.create(
    <Description
      name="Firstname Lastname"
      job="Dummy job"
    />
  );

  // render the component
  const tree = description.toJSON();
  expect(tree).toMatchSnapshot();
});
