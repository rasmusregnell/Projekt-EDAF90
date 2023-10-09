//import logo from "./logo.svg";
import "./App.css";
//import React from 'react';
import Navbar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Outlet } from "react-router-dom";
import { HighScoreContext, DispatchContext } from "./Context.js";
import { useReducer } from "react";

function App() {
  const testHighScore1 = [{ points: 5 }, { points: 4 }, { points: 3 }];
  const testHighScore2 = [{ points: 7 }, { points: 8 }, { points: 5 }];
  const initialState = [testHighScore1, testHighScore2];
  const [highScores, dispatch] = useReducer(reducerFunc, initialState);

  function reducerFunc(highScores, action) {
    let tempHighScores = [...highScores];
    if (action.type === "updateGuessMovies") {
      //update based on action = {type: "update", highScoreEntry: [....]}
      return [
        tempHighScores[0].concat(action.highScoreEntry),
        tempHighScores[1],
      ];
    } else if (action.type === "updateGuessTime") {
      //update based on action = {type: "update", highScoreEntry: [....]}
      return [
        tempHighScores[0],
        tempHighScores[1].concat(action.highScoreEntry),
      ];
    } else {
      console.log("wrong action type");
    }
  }
  return (
    <HighScoreContext.Provider value={highScores}>
      <DispatchContext.Provider value={dispatch}>
        <div className="container py-4">
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </DispatchContext.Provider>
    </HighScoreContext.Provider>
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
