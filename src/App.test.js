import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome To Demo/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByTestId('session-id')).toBeInTheDocument();
});
