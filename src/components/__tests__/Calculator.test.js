import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Calculator';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator component', () => {
  it('renders initial state correctly', () => {
    const { getAllByText } = render(<Calculator />);

    // Assert that the initial state is rendered correctly
    expect(getAllByText("Let's do some Math")).toBeInTheDocument();
    expect(getAllByText('0').length).toBe(2);
  });
});
