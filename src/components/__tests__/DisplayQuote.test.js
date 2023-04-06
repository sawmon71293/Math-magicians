import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import DisplayQuote from '../DisplayQuote';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DisplayQuote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
