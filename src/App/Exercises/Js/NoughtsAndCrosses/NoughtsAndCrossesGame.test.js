import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Exercise11 } from './NoughtsAndCrossesGame';

describe('Exercise11 Component', () => {
  test('renders Exercise11 component', () => {
    render(<Exercise11 />);
    expect(screen.getByText(/Następny gracz:/i)).toBeInTheDocument();
  });

  test('renders mode selector', () => {
    render(<Exercise11 />);
    const selectElement = screen.getByText(/Tryb:/i);
    expect(selectElement).toBeInTheDocument();
  });

  test('renders player input', () => {
    render(<Exercise11 />);
    const inputElement = screen.getByText(/Gracz 1:/i);
    expect(inputElement).toBeInTheDocument();
  });
});
