import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'


const server = setupServer(
  rest.get('https://localhost:3001/movies', (request, response, context) => response(context.json(
    [
      {movieId: 1, metascore: 67}
    ]
  )))
 )

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(()=> server.close());

describe('App', () => {
  it('renders a header that says movies', () => {
    render(<App />);
    const NavElement = screen.getByText('GMDB');
    expect(NavElement).toBeInTheDocument();
  });

  xit('server is online and sending data', () => {
  })

})