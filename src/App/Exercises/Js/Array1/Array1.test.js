import { render, screen } from '@testing-library/react';
import { Exercise23 } from './Array1';

test('renders Exercise23 component', () => {
  render(<Exercise23 />);

  const heading = screen.getByRole('heading', {
    level: 2,
    name: /Zastosowanie tablicy/i,
  });
  expect(heading).toBeInTheDocument();

  const codeSnippet = screen.getByText(/Tworzenie tablicy/i);
  expect(codeSnippet).toBeInTheDocument();
});
