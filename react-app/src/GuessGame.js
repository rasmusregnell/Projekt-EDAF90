import { useState, useEffect } from "react";

function GuessGame(props) {
  //states used in guessing games
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState(props.gameLength);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [points, setPoints] = useState(0);

  const startGame = () => {
    setIsVisible(false);
    props.setCorrectAnswer([]);
    setPoints(0);
    setIsVisible(true);
    setIsTimerRunning(true);
    setTimer(props.gameLength);
  };

  // Keeps track of timer variable and updates it every second
  useEffect(() => {
    let countdown;

    if (isTimerRunning) {
      countdown = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(countdown);
          setIsTimerRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timer, isTimerRunning]);

  // Updated the points when correctAnswers is updated
  useEffect(() => {
    if (props.correctAnswers.length > 0) {
      setPoints(props.correctAnswers.length);
    }
  }, [props.correctAnswers]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      {isVisible && (
        <div>
          <div className="container">
            <h1>{props.header}</h1>
            <form onSubmit={(e) => props.handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="movieInput"
                  placeholder="Enter Movie or Series"
                  disabled={!isTimerRunning}
                ></input>
              </div>
              <button class="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Submit
              </button>
           
            </form>
            {props.correctAnswers.map((answer) => (
              <p key={answer}>{answer}</p>
            ))}
            <div class="text-xl text-red-500 space-y-1">{formatTime(timer)}</div>
            <div class="text-xl">Points:
             {" " + points}
            </div>
            <div>{timer === 0 && <h1>Game Over!</h1>}</div>
          </div>
        </div>
      )}
      {!isTimerRunning && (
        <button
          className="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={startGame}
        >
          Start!
        </button>
      )}
    </div>
  );
}

export default GuessGame;
