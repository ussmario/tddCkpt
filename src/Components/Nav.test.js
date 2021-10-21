import { render, screen } from '@testing-library/react';
import App from '../App';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';
import { mount, fireEvent } from '@testing-library/jest-dom'
import "../App.css"


describe('Nav', () => {
  it('should display home link on the screen', () => {
    render(<App/>);
    let zelda = screen.getByText(/home/i);
    expect(zelda).toBeInTheDocument();
  })

  it('should display login link on the screen', () => {
    render(<App/>);
    let login = screen.getByText(/login/i);
    expect(login).toBeInTheDocument();
  })

  xit('should display search feild on the screen', () => {
    render(<App/>);
    let search = screen.getByPlaceholderText(/search/i);
    expect(search).toBeInTheDocument();
  })

  xit('home button is clickable', () => {
    const wrapper = screen.mount(
       <BrowserRouter>
            <Nav/>
        </BrowserRouter>
        );
    let node = wrapper.getByText('Home')
    fireEvent.click(node)
    expect(node).toHaveBeenCalledWith('Home')
  })

xit('login button is clickable', () => {
    const wrapper = screen.mount(
       <BrowserRouter>
            <Nav/>
        </BrowserRouter>
        );
    let node = wrapper.getByText('Login')
    fireEvent.click(node)
    expect(node).toHaveBeenCalledWith('Login')
  })

xit('search button can recieve input', () => {
    const wrapper = screen.mount(
        <BrowserRouter>
             <Nav/>
         </BrowserRouter>
         );
    let field = wrapper.getByPlaceholderText(/search/i)
    fireEvent.change(field, { target: { value: /godfather/i } });
    expect(field.value).toBe(/godfather/i)
})
});