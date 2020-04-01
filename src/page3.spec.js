import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Page3 from './page3';

// Note: test renderer must be required after react-native.
it('renders correctly', () => {
  expect(renderer.create(<Page3 />)).toBeDefined();
});
