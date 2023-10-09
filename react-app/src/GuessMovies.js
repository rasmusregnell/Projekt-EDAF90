import { act } from "react-dom/test-utils";
import GuessGame from "./GuessGame";
import { useState, useEffect } from "react";

function GuessMovies() {
  const [correctAnswers, setCorrectAnswer] = useState([]);
  const [actor, setActor] = useState("");

  const actors = [
    "Jennifer Aniston",
    "Ryan Gosling",
    "Daniel Craig",
    "Johnny Depp",
    "Morgan Freeman",
    "Tom Hanks",
  ];

  const submitCorrect = (answer) => {
    if (!correctAnswers.includes(answer)) {
      setCorrectAnswer([...correctAnswers, answer]);
    }
  };

  const [showError, setShowError] = useState(false);

  const handleWrongAnswer = () => {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, 3000); // Set the timeout to hide the message after 3 seconds (adjust as needed)
  };

  async function handleSubmit(event) {
    event.preventDefault();
    let input = document.getElementById("movieInput").value;
    let urlInput = input.replace(" ", "+");

    const url = "https://www.omdbapi.com/?apikey=28da6e60&t=" + urlInput;

    let answer = await fetch(url).then((response) => {
      return response.json();
    });

    if (answer.Response === "True" && answer.Actors.includes(actor)) {
      submitCorrect(answer.Title);
    } else {
      handleWrongAnswer();
      console.log("Wrong answer");
    }

    event.target.reset();
  }

  function setRandomActor() {
    let index = Math.floor(Math.random() * actors.length);
    setActor(actors[index]);
  }
  return (
    <GuessGame
      gameLength={60}
      correctAnswers={correctAnswers}
      setCorrectAnswer={setCorrectAnswer}
      header={`Guess the movies where ${actor} is a main actor`}
      handleSubmit={handleSubmit}
      setRandom={setRandomActor}
      showError={showError}
      setShowError={setShowError}
    ></GuessGame>
  );
}

export default GuessMovies;
