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
  const testHighScore1 = [{ points: 5 }, { points: 4 }, { points: 1 }];
  const testHighScore2 = [{ points: 7 }, { points: 8 }, { points: 5 }];
  const initialState = [testHighScore1, testHighScore2];
  const [highScores, dispatch] = useReducer(reducerFunc, initialState);

  //This method is for checking if the highscore we want to add already exists
  function checkIfIncludes(highScores, action) {
    return highScores
      .map((e) => e.points)
      .includes(action.highScoreEntry.points);
  }

  //update highScores based on action = {type: "update", highScoreEntry: [....]}
  function reducerFunc(highScores, action) {
    if (action.type === "updateGuessMovies") {
      //Checks if we should add the highscore
      if (checkIfIncludes(highScores[0], action)) {
        console.log("No new high score");
        return highScores;
      }
      //Here we add the valid highscore:
      console.log("NEW HIGHSCORE SET");
      return [[...highScores[0], action.highScoreEntry], [...highScores[1]]];
    } else if (action.type === "updateGuessTime") {
      //Checks if we should add the highscore
      if (checkIfIncludes(highScores[1], action)) {
        console.log("No new high score");
        return highScores;
      }

      //Here we add the valid highscore:
      console.log("NEW HIGHSCORE SET");
      return [[...highScores[0]], [...highScores[1], action.highScoreEntry]];
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
