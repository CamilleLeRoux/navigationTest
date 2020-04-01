import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Page2 from './page2';

// Note: test renderer must be required after react-native.
it('renders correctly', () => {
  expect(renderer.create(<Page2 />)).toBeDefined();
});
