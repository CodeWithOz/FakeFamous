import React from 'react';
import Image from './Image';
import renderer from 'react-test-renderer';

test('Image component exists', () => {
  const image = renderer.create(
    <Image pic="test.jpg" />
  );

  // render the image
  const tree = image.toJSON();
  expect(tree).toMatchSnapshot();
});
