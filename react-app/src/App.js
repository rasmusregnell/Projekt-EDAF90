//import logo from "./logo.svg";
import "./App.css";
//import React from 'react';
import Navbar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container py-4">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Movie games</span>
    </header>
  );
}

function Footer() {
  return (
    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering projekt
    </footer>
  );
}

export default App;
{
  /*28da6e60 
exempel: https://www.omdbapi.com/?apikey=28da6e60&t=hope*/
}
