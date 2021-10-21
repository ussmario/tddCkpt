import { React, useEffect, useState } from 'react';
import Nav from './Components/Nav.js';
import Movies from "./Components/Movies";
import "./App.css"
//import MovieDetails from './Components/MovieDetails.js';
// import LoginPage from './LoginPage.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function callMovies() {
      let res = await fetch('https://localhost:3001');
      let json = await res.json();
      setMovies(json.results);
    };
    callMovies();
  }, [])


  return (

    <Router>
      <div className="App">

        <Nav />

        <Switch>
          <Route path="/" exact component={Movies} />
          {/* <Route path="/:name" exact component={MovieDetails}/> */}
          {/* <Route path="/login" exact component={LoginPage}/> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;