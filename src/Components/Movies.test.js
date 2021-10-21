import { render, screen } from '@testing-library/react';
import Movies from './Movies';
import "../App.css"


describe('Movies', () => {
  test('renders a header that says movies', () => {
    render(<Movies />);
    const title = screen.getByText(/Hey Im Movies that I got from port 3001/i);
    expect(title).toBeInTheDocument();

  })
});
