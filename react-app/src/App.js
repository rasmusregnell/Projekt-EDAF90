//import logo from "./logo.svg";
import "./App.css";
//import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="container py-4">
      <Header/>
      <Navbar/>
      <Footer />
    </div>
  );
}

function Header(){
  return(
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Movie games</span>
    </header>
  );
}

function Footer(){
  return (
    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering projekt
    </footer>
  );
}

function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to="">
          Home
        </NavLink>
      </li> 

      <li className="nav-item">
        <NavLink className="nav-link" to="/what-movies">
          What movies is he in?
        </NavLink>
      </li> 

      <li className="nav-item">
        <NavLink className="nav-link" to="/guess-time">
          Guess the time
        </NavLink>
      </li>
    </ul>
  );
}

export default App;
