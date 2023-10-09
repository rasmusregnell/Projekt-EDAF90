import GuessGame from "./GuessGame";
import { useState, useEffect } from "react";

function GuessTime() {
  const [correctAnswers, setCorrectAnswer] = useState([]);
  const [timeFrame, setTimeFrame] = useState([]);
  const timeFrames = ["80-120", "100-140", "120-150"];

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

  function setRandomTimeFrame() {
    let index = Math.floor(Math.random() * timeFrames.length);
    setTimeFrame(timeFrames[index]);
  }


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

    if (answer.Response === "True" && checkTimeFrame(answer.Runtime)) {
      submitCorrect(answer.Title);
    } else {
      handleWrongAnswer();
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
      setRandom={setRandomTimeFrame}
      showError={showError}
      setShowError={setShowError}
    ></GuessGame>
  );
}

export default GuessTime;
