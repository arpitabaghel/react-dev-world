import { render,screen } from "@testing-library/react";
import TableView from './TableView'

test('renders learn react link', () => {
    render(<TableView />);
    const linkElement = screen.getByText(/Welcome To Demo/i);
    expect(linkElement).toBeInTheDocument();
  });