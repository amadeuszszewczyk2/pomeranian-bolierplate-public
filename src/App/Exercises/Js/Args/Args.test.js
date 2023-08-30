import { render, screen } from '@testing-library/react';
import { Exercise3 } from './Args';

test('renders result', () => {
  render(<Exercise3 />);
  const resultElement = screen.getByText(/Wynik: 21/i);
  expect(resultElement).toBeInTheDocument();
});

test('renders code snippet', () => {
  render(<Exercise3 />);
  const codeSnippetElement = screen.getByText(/import React from 'react';/i);
  expect(codeSnippetElement).toBeInTheDocument();
});
