import GuessGame from "./GuessGame";
import { useState, useEffect } from "react";

function GuessTime() {
  const [correctAnswers, setCorrectAnswer] = useState([]);
  const [timeFrame, setTimeFrame] = useState([]);
  const timeFrames = ["80-120", "100-140", "120-150"];

  useEffect(() => {
    setTimeFrame(getRandomTimeFrame());
  }, []);

  function checkTimeFrame(runtime) {
    const time = parseInt(runtime.split(" ")[0]);
    const timeSpan = timeFrame.split("-");
    return time > timeSpan[0] && time < timeSpan[1];
  }

  const submitCorrect = (answer) => {
    if (!correctAnswers.includes(answer)) {
      setCorrectAnswer([...correctAnswers, answer]);
    }
  };

  function getRandomTimeFrame() {
    let index = Math.floor(Math.random() * timeFrames.length);
    return timeFrames[index];
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let input = document.getElementById("movieInput").value;
    let urlInput = input.replace(" ", "+");

    const url = "https://www.omdbapi.com/?apikey=28da6e60&t=" + urlInput;

    let answer = await fetch(url).then((response) => {
      return response.json();
    });

    if (answer.Response === "True" && checkTimeFrame(answer.Runtime)) {
      submitCorrect(answer.Title);
    } else {
      //Here we should implement a way to show the error to the user
      console.log("Wrong answer");
    }

    event.target.reset();
  }

  return (
    <GuessGame
      gameLength={120}
      correctAnswers={correctAnswers}
      setCorrectAnswer={setCorrectAnswer}
      header={`Guess movies which are of the following length: ${timeFrame} min`}
      handleSubmit={handleSubmit}
    ></GuessGame>
  );
}

export default GuessTime;
